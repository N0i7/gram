/* ============================================================
   FLOß — Fortschrittsspeicherung
   ------------------------------------------------------------
   Läuft in drei Stufen:

   1. Gast ohne Login  → alles landet in localStorage
   2. Angemeldet       → alles geht an Supabase
   3. Gast meldet sich später an → der lokale Stand wird
      einmalig hochgeladen und dann lokal gelöscht

   Fällt das Netz aus, wird lokal gepuffert und beim nächsten
   erfolgreichen Aufruf nachgereicht. Es geht nie etwas verloren,
   nur weil die Verbindung schlecht ist.
   ============================================================ */
(function () {
  "use strict";

  var CFG = window.FLOSS_CONFIG || {};
  var LS_KEY = "floss.fortschritt";
  var LS_WARTE = "floss.warteschlange";

  var P = window.FLOSS_PROGRESS = {};
  var geloest = 0;          // Zähler für den Login-Hinweis
  var hinweisGezeigt = false;

  /* ---------- lokaler Speicher ---------- */
  function lesen(key) {
    try { return JSON.parse(localStorage.getItem(key) || "[]"); }
    catch (e) { return []; }
  }
  function schreiben(key, v) {
    try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {}
  }

  function lokalMerken(key, eintrag) {
    var liste = lesen(key);
    var i = liste.findIndex(function (x) {
      return x.niveau === eintrag.niveau &&
             x.thema_id === eintrag.thema_id &&
             x.aufgabe_index === eintrag.aufgabe_index;
    });
    if (i >= 0) liste[i] = eintrag; else liste.push(eintrag);
    schreiben(key, liste);
  }

  /* ---------- zentrale Aufzeichnung ----------
     Wird von engine.js bei jeder gelösten Aufgabe aufgerufen. */
  P.aufgabeGeloest = function (niveau, themaId, index, richtig) {
    var eintrag = {
      niveau: String(niveau || "").toLowerCase(),
      thema_id: themaId,
      aufgabe_index: index,
      richtig: !!richtig,
      zeit: new Date().toISOString()
    };

    geloest++;
    standHochzaehlen(eintrag.niveau, themaId, index, eintrag.richtig);
    loginHinweisPruefen();

    var F = window.FLOSS;
    if (!F || !F.db || !F.user) {           // Gast
      lokalMerken(LS_KEY, eintrag);
      badgeAktualisieren(themaId);
      return;
    }
    senden(eintrag).catch(function () {     // Netzproblem → puffern
      lokalMerken(LS_WARTE, eintrag);
    });
    badgeAktualisieren(themaId);
  };

  function senden(e) {
    return window.FLOSS.db.rpc("fortschritt_speichern", {
      p_niveau: e.niveau,
      p_thema_id: e.thema_id,
      p_aufgabe_index: e.aufgabe_index,
      p_richtig: e.richtig
    }).then(function (r) { if (r.error) throw r.error; return r; });
  }

  /* ---------- Warteschlange und Gastdaten hochladen ---------- */
  function nachreichen() {
    var F = window.FLOSS;
    if (!F || !F.db || !F.user) return Promise.resolve();

    var offen = lesen(LS_WARTE).concat(lesen(LS_KEY));
    if (!offen.length) return Promise.resolve();

    // Nacheinander, damit die Versuchszählung stimmt und wir
    // die Datenbank bei vielen Einträgen nicht überrennen.
    var kette = Promise.resolve();
    var fehler = 0;
    offen.forEach(function (e) {
      kette = kette.then(function () {
        return senden(e).catch(function () { fehler++; });
      });
    });
    return kette.then(function () {
      if (fehler === 0) {
        schreiben(LS_WARTE, []);
        schreiben(LS_KEY, []);
        if (offen.length > 3) hinweisZeigen(
          "Dein bisheriger Fortschritt aus diesem Browser wurde deinem Konto " +
          "hinzugefügt — " + offen.length + " Aufgaben.", "good");
      }
    });
  }

  /* ---------- Fortschritt laden und anzeigen ---------- */
  var stand = {};   // themaId → {geloest, richtig}

  P.standLaden = function () {
    var F = window.FLOSS;
    var D = window.LEVEL_DATA;
    if (!D) return Promise.resolve();
    var niveau = String(D.level || "").toLowerCase();

    if (!F || !F.db || !F.user) {
      stand = {}; gezaehlt = {};
      lesen(LS_KEY).forEach(function (e) {
        if (e.niveau !== niveau) return;
        standHochzaehlen(niveau, e.thema_id, e.aufgabe_index, e.richtig);
      });
      alleBadges();
      return Promise.resolve();
    }

    return F.db.from("uebung_fortschritt")
      .select("thema_id,aufgabe_index,richtig")
      .eq("user_id", F.user.id).eq("niveau", niveau)
      .then(function (r) {
        stand = {}; gezaehlt = {};
        (r.data || []).forEach(function (e) {
          standHochzaehlen(niveau, e.thema_id, e.aufgabe_index, e.richtig);
        });
        alleBadges();
      }).catch(function () {});
  };

  /* Zählt den angezeigten Stand hoch. Der Schlüssel verhindert,
     dass eine Aufgabe doppelt gezählt wird, wenn sie beim Laden
     schon im Stand enthalten war. */
  var gezaehlt = {};

  function standHochzaehlen(niveau, themaId, index, richtig) {
    var k = niveau + "/" + themaId + "/" + index;
    if (gezaehlt[k]) return;
    gezaehlt[k] = true;
    if (!stand[themaId]) stand[themaId] = { geloest: 0, richtig: 0 };
    stand[themaId].geloest++;
    if (richtig) stand[themaId].richtig++;
  }

  function badgeAktualisieren(themaId) {
    if (!stand[themaId]) stand[themaId] = { geloest: 0, richtig: 0 };
    badgeZeichnen(themaId);
    gesamtleisteZeichnen();
  }

  function alleBadges() {
    var D = window.LEVEL_DATA;
    if (!D || !D.topics) return;
    D.topics.forEach(function (t) { if (t.q && t.q.length) badgeZeichnen(t.id); });
    gesamtleisteZeichnen();
  }

  function badgeZeichnen(themaId) {
    var h2 = document.querySelector("#" + CSS.escape(themaId) + " h2");
    if (!h2) return;
    var D = window.LEVEL_DATA;
    var t = D && D.topics.find(function (x) { return x.id === themaId; });
    if (!t || !t.q || !t.q.length) return;

    var s = stand[themaId] || { geloest: 0, richtig: 0 };
    var alt = h2.querySelector(".floss-fortschritt");
    if (alt) alt.remove();
    if (!s.geloest) return;

    var fertig = s.geloest >= t.q.length;
    var b = document.createElement("span");
    b.className = "floss-fortschritt" + (fertig ? " fertig" : "");
    b.title = s.richtig + " von " + s.geloest + " richtig";
    b.textContent = fertig ? "✓ " + s.richtig + "/" + t.q.length
                           : s.geloest + "/" + t.q.length;
    h2.appendChild(b);
  }

  function gesamtleisteZeichnen() {
    var D = window.LEVEL_DATA;
    if (!D) return;
    var ges = 0, get = 0;
    D.topics.forEach(function (t) {
      if (!t.q || !t.q.length) return;
      ges += t.q.length;
      get += (stand[t.id] ? Math.min(stand[t.id].geloest, t.q.length) : 0);
    });
    if (!ges) return;

    var bar = document.getElementById("floss-levelbar");
    if (!bar) {
      var chip = document.getElementById("chipbar");
      if (!chip) return;
      bar = document.createElement("div");
      bar.id = "floss-levelbar";
      bar.className = "floss-levelbar";
      chip.parentNode.insertBefore(bar, chip.nextSibling);
    }
    var pct = Math.round(get / ges * 100);
    var angemeldet = window.FLOSS && window.FLOSS.user;
    bar.innerHTML =
      '<div class="flb-text"><b>' + get + ' von ' + ges + ' Aufgaben</b>' +
      '<span>' + (angemeldet ? 'in deinem Konto gespeichert'
                             : 'nur in diesem Browser gespeichert') + '</span></div>' +
      '<div class="flb-rail"><div class="flb-fill" style="width:' + pct + '%"></div></div>' +
      (angemeldet ? '' :
        '<button class="flb-cta" id="flb-login">Speichern</button>');
    var btn = document.getElementById("flb-login");
    if (btn) btn.onclick = function () { window.FLOSS.loginDialog(); };
  }

  /* ---------- sanfter Login-Hinweis ---------- */
  function loginHinweisPruefen() {
    var n = CFG.LOGIN_HINWEIS_NACH || 0;
    if (!n || hinweisGezeigt) return;
    if (window.FLOSS && window.FLOSS.user) return;
    if (geloest < n) return;
    hinweisGezeigt = true;
    hinweisZeigen(
      '<b>Gut dabei — ' + geloest + ' Aufgaben.</b><br>' +
      'Ohne Konto ist der Fortschritt weg, sobald du den Browser-Verlauf löschst ' +
      'oder das Gerät wechselst.' +
      '<button class="fh-btn" id="fh-login">Kostenlos speichern</button>', "cta");
    var b = document.getElementById("fh-login");
    if (b) b.onclick = function () {
      window.FLOSS.loginDialog();
      var t = document.getElementById("floss-toast");
      if (t) t.remove();
    };
  }

  function hinweisZeigen(html, art) {
    var alt = document.getElementById("floss-toast");
    if (alt) alt.remove();
    var t = document.createElement("div");
    t.id = "floss-toast";
    t.className = "floss-toast " + (art || "info");
    t.innerHTML = '<button class="ft-x" aria-label="Schließen">&times;</button>' +
                  '<div class="ft-in">' + html + '</div>';
    document.body.appendChild(t);
    t.querySelector(".ft-x").onclick = function () { t.remove(); };
    if (art !== "cta") setTimeout(function () { if (t.parentNode) t.remove(); }, 6000);
  }
  P.hinweis = hinweisZeigen;

  /* ---------- Start ---------- */
  function start() {
    var F = window.FLOSS;
    if (!F) { setTimeout(P.standLaden, 300); return; }
    F.bereit.then(function () {
      return nachreichen();
    }).then(function () {
      return P.standLaden();
    });
    F.onLogin(function () {
      nachreichen().then(P.standLaden);
    });
    F.onLogout(function () {
      stand = {};
      alleBadges();
    });
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", function () { setTimeout(start, 60); });
  else setTimeout(start, 60);
})();

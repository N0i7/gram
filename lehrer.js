/* ============================================================
   FLOß — Lehrer-Dashboard
   ------------------------------------------------------------
   Nutzt ausschließlich die bereits bestehenden "lehrer liest..."-
   RLS-Policies aus supabase-schema.sql / den Migrationen — es wird
   keine neue Berechtigung gebraucht, nur eine Oberfläche darauf.

   Zugriff NUR wenn profiles.ist_lehrer = true für den angemeldeten
   Nutzer. Das setzt Lion einmalig selbst per SQL (siehe
   EINRICHTUNG.md):
     update public.profiles set ist_lehrer = true
      where id = (select id from auth.users where email = 'DEINE@MAIL');

   E-Mail-Adressen liegen NICHT hier — auth.users ist über den
   normalen Client nicht lesbar. Schüler werden über Vorname/
   Nachname aus profiles identifiziert.
   ============================================================ */
(function () {
  "use strict";

  var root = document.getElementById("lehrer-root");
  if (!root) return;

  var TAGE_GELB = 2;   // ab so vielen Tagen ohne Aktivität: gelb
  var TAGE_ROT  = 6;   // ab so vielen Tagen: rot

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function tageSeit(datumStr) {
    if (!datumStr) return null;
    var d = new Date(datumStr);
    if (isNaN(d.getTime())) return null;
    return Math.floor((Date.now() - d.getTime()) / 86400000);
  }
  function ampelKlasse(tage) {
    if (tage == null) return "amp-nie";
    if (tage <= TAGE_GELB) return "amp-gruen";
    if (tage <= TAGE_ROT) return "amp-gelb";
    return "amp-rot";
  }

  function render() {
    if (!window.FLOSS || !window.FLOSS.bereit) {
      root.innerHTML = '<p class="lehrer-hinweis">Lädt…</p>';
      return;
    }
    window.FLOSS.bereit.then(function () {
      if (!window.FLOSS.user) {
        root.innerHTML =
          '<div class="lehrer-gate">' +
            '<h2>Nur für Lehrkräfte</h2>' +
            '<p>Bitte melde dich an.</p>' +
            '<button class="floss-primary" id="lehrer-login">Anmelden</button>' +
          '</div>';
        var b = document.getElementById("lehrer-login");
        if (b) b.onclick = function () { window.FLOSS.loginDialog(); };
        window.FLOSS.onLogin(function () { render(); });
        return;
      }
      if (!window.FLOSS.profil || !window.FLOSS.profil.ist_lehrer) {
        root.innerHTML =
          '<div class="lehrer-gate">' +
            '<h2>Kein Zugriff</h2>' +
            '<p>Dieser Bereich ist nur für Lehrkräfte sichtbar. ' +
            'Falls das ein Fehler ist, sprich mit der Schulleitung.</p>' +
          '</div>';
        return;
      }
      root.innerHTML = '<p class="lehrer-hinweis">Daten werden geladen…</p>';
      datenLaden();
    });
  }

  function datenLaden() {
    var db = window.FLOSS.db;
    Promise.all([
      db.from("profiles").select("id,vorname,nachname,kurs,ziel_niveau,start_niveau,zuletzt_aktiv,erstellt_am").order("vorname"),
      db.from("uebung_fortschritt").select("user_id,niveau,richtig"),
      db.from("test_durchlauf").select("user_id,test_key,niveau,punkte,punkte_max,bestanden,gestartet_am").order("gestartet_am", { ascending: false }),
      db.from("schreiben_korrektur").select("user_id,gesamtprozent,erstellt_am").order("erstellt_am", { ascending: false }),
      db.from("sprechen_aufnahme").select("id,user_id,niveau,prompt_id,storage_pfad,erstellt_am").eq("angehoert", false).order("erstellt_am", { ascending: true })
    ]).then(function (r) {
      var profile = (r[0] && r[0].data) || [];
      var fortschritt = (r[1] && r[1].data) || [];
      var tests = (r[2] && r[2].data) || [];
      var korrekturen = (r[3] && r[3].data) || [];
      var offeneAufnahmen = (r[4] && r[4].data) || [];

      if (r.some(function (x) { return x && x.error; })) {
        root.innerHTML = '<p class="lehrer-hinweis lehrer-fehler">Daten konnten nicht vollständig geladen werden. Neu laden versuchen.</p>';
      }

      var proNutzer = {};
      profile.forEach(function (p) {
        proNutzer[p.id] = {
          profil: p, geloest: 0, richtig: 0,
          letzterTest: null, letzteKorrektur: null
        };
      });
      fortschritt.forEach(function (f) {
        var n = proNutzer[f.user_id];
        if (!n) return;
        n.geloest++;
        if (f.richtig) n.richtig++;
      });
      tests.forEach(function (t) {
        var n = proNutzer[t.user_id];
        if (n && !n.letzterTest) n.letzterTest = t; // erste Zeile je Nutzer = neueste (schon sortiert)
      });
      korrekturen.forEach(function (k) {
        var n = proNutzer[k.user_id];
        if (n && !n.letzteKorrektur) n.letzteKorrektur = k;
      });

      var liste = Object.keys(proNutzer).map(function (id) { return proNutzer[id]; });
      liste.sort(function (a, b) {
        var ta = tageSeit(a.profil.zuletzt_aktiv), tb = tageSeit(b.profil.zuletzt_aktiv);
        if (ta == null && tb == null) return 0;
        if (ta == null) return -1; // "nie aktiv" ganz oben — braucht am ehesten Aufmerksamkeit
        if (tb == null) return 1;
        return tb - ta; // am längsten inaktiv zuerst
      });

      zeichneUebersicht(liste);
      zeichneTabelle(liste);
      zeichneSprechenAufnahmen(offeneAufnahmen, proNutzer);
    }).catch(function () {
      root.innerHTML = '<p class="lehrer-hinweis lehrer-fehler">Daten konnten nicht geladen werden. Neu laden versuchen.</p>';
    });
  }

  function zeichneUebersicht(liste) {
    var gesamt = liste.length;
    var aktiv2 = liste.filter(function (x) { var t = tageSeit(x.profil.zuletzt_aktiv); return t != null && t <= TAGE_GELB; }).length;
    var inaktiv = liste.filter(function (x) { var t = tageSeit(x.profil.zuletzt_aktiv); return t == null || t > TAGE_ROT; }).length;
    var gesamtAufgaben = liste.reduce(function (s, x) { return s + x.geloest; }, 0);

    var kacheln = el("div", "lehrer-kacheln");
    kacheln.innerHTML =
      '<div><b>' + gesamt + '</b><span>Schüler</span></div>' +
      '<div><b>' + aktiv2 + '</b><span>aktiv (≤' + TAGE_GELB + ' Tage)</span></div>' +
      '<div><b>' + inaktiv + '</b><span>inaktiv (>' + TAGE_ROT + ' Tage / nie)</span></div>' +
      '<div><b>' + gesamtAufgaben + '</b><span>Aufgaben gesamt gelöst</span></div>';
    root.innerHTML = "";
    root.appendChild(kacheln);
  }

  function zeichneTabelle(liste) {
    var wrap = el("div", "lehrer-tabelle-wrap");
    var tbl = el("table", "lehrer-tabelle");
    tbl.innerHTML =
      '<thead><tr>' +
        '<th>Schüler</th><th>Kurs</th><th>Ziel</th>' +
        '<th>Aufgaben</th><th>Richtig</th>' +
        '<th>Letzter Test</th><th>Letzte Korrektur</th>' +
        '<th>Zuletzt aktiv</th>' +
      '</tr></thead><tbody></tbody>';
    var tbody = tbl.querySelector("tbody");

    liste.forEach(function (n) {
      var p = n.profil;
      var name = [p.vorname, p.nachname].filter(Boolean).join(" ") || "(ohne Namen)";
      var quote = n.geloest ? Math.round(n.richtig / n.geloest * 100) + "%" : "–";
      var test = n.letzterTest
        ? (n.letzterTest.niveau || "").toUpperCase() + " " + (n.letzterTest.punkte != null ? n.letzterTest.punkte + "/" + (n.letzterTest.punkte_max || "?") : "läuft")
        : "–";
      var korrektur = n.letzteKorrektur && n.letzteKorrektur.gesamtprozent != null
        ? n.letzteKorrektur.gesamtprozent + "%"
        : "–";
      var tage = tageSeit(p.zuletzt_aktiv);
      var aktivText = tage == null ? "nie" : (tage === 0 ? "heute" : tage + " Tag" + (tage === 1 ? "" : "e"));

      var tr = el("tr");
      tr.innerHTML =
        '<td>' + esc(name) + '</td>' +
        '<td>' + esc(p.kurs || "–") + '</td>' +
        '<td>' + esc((p.ziel_niveau || "–").toString().toUpperCase()) + '</td>' +
        '<td>' + n.geloest + '</td>' +
        '<td>' + quote + '</td>' +
        '<td>' + esc(test) + '</td>' +
        '<td>' + esc(korrektur) + '</td>' +
        '<td><span class="amp ' + ampelKlasse(tage) + '"></span>' + esc(aktivText) + '</td>';
      tbody.appendChild(tr);
    });

    wrap.appendChild(tbl);
    root.appendChild(wrap);
  }

  function zeichneSprechenAufnahmen(aufnahmen, proNutzer) {
    var sec = el("section", "lehrer-sprechen");
    if (!aufnahmen.length) {
      sec.innerHTML = '<h2>Sprechen — offene Aufnahmen</h2><p class="lehrer-hinweis">Keine offenen Aufnahmen. Alles durchgesehen.</p>';
      root.appendChild(sec);
      return;
    }
    sec.innerHTML = '<h2>Sprechen — offene Aufnahmen (' + aufnahmen.length + ')</h2>';
    var db = window.FLOSS.db;
    aufnahmen.forEach(function (a) {
      var n = proNutzer[a.user_id];
      var name = n ? ([n.profil.vorname, n.profil.nachname].filter(Boolean).join(" ") || "(ohne Namen)") : "(unbekannt)";
      var karte = el("div", "lehrer-aufnahme");
      karte.innerHTML =
        '<div class="la-kopf"><b>' + esc(name) + '</b> · ' + esc((a.niveau || "").toUpperCase()) + ' · ' + esc(a.prompt_id) + '</div>' +
        '<audio controls preload="none" class="la-player"></audio>' +
        '<button class="floss-ghost la-erledigt">Als durchgesehen markieren</button>';
      sec.appendChild(karte);

      db.storage.from("sprechen").createSignedUrl(a.storage_pfad, 3600).then(function (res) {
        var url = res && res.data && res.data.signedUrl;
        if (url) karte.querySelector(".la-player").src = url;
      }).catch(function () {});

      karte.querySelector(".la-erledigt").onclick = function () {
        db.from("sprechen_aufnahme").update({ angehoert: true }).eq("id", a.id).then(function () {
          karte.remove();
        });
      };
    });
    root.appendChild(sec);
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", render);
  else render();
})();

/* ============================================================
   FLOß — Adaptiver Wiederholungsmodus
   ------------------------------------------------------------
   Liest uebung_fortschritt (bereits vorhanden, füllt sich beim
   normalen Üben mit Login von selbst — keine neue Tabelle nötig)
   und zeigt: (A) die Themen mit der schlechtesten Trefferquote,
   (B) Themen im aktuellen Niveau, die noch nie geübt wurden.

   Themen-Titel liegen in den LEVEL_DATA-Dateien (data-a1.js …
   data-c2.js). Jede Datei belegt denselben globalen Namen
   window.LEVEL_DATA — deshalb werden sie NACHEINANDER per
   dynamischem <script>-Tag geladen und sofort ausgelesen, nie
   gleichzeitig eingebunden.

   Braucht Login, weil nur eingeloggte Nutzer Fortschritt pro
   Thema in der Datenbank haben (Gäste speichern nur lokal und
   ohne Themen-Aufschlüsselung, siehe floss-progress.js).
   ============================================================ */
(function () {
  "use strict";

  var root = document.getElementById("wiederholen-root");
  if (!root) return;

  var MIN_VERSUCHE = 2;      // ab so vielen Versuchen zählt ein Thema als "geübt genug" für die Quote
  var MAX_SCHWACH = 8;
  var MAX_NEU = 10;

  var levelCache = {}; // niveau -> [{id,title,titleEn,chip}]

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

  function ladeLevelData(niveau) {
    niveau = String(niveau || "").toLowerCase();
    if (levelCache[niveau]) return Promise.resolve(levelCache[niveau]);
    return new Promise(function (resolve) {
      var s = document.createElement("script");
      s.src = "data-" + niveau + ".js";
      s.onload = function () {
        var topics = (window.LEVEL_DATA && window.LEVEL_DATA.topics) || [];
        levelCache[niveau] = topics.map(function (t) {
          return { id: t.id, title: t.title, titleEn: t.titleEn, chip: t.chip };
        });
        resolve(levelCache[niveau]);
      };
      s.onerror = function () { levelCache[niveau] = []; resolve([]); };
      document.body.appendChild(s);
    });
  }

  function titelZu(topicsListe, id) {
    var t = topicsListe.filter(function (x) { return x.id === id; })[0];
    return t ? t.title : id;
  }

  function render() {
    if (!window.FLOSS || !window.FLOSS.bereit) {
      root.innerHTML = '<p class="wdh-hinweis">Lädt…</p>';
      return;
    }
    window.FLOSS.bereit.then(function () {
      if (!window.FLOSS.user) {
        root.innerHTML =
          '<div class="wdh-gate">' +
            '<h2>Gezielt wiederholen</h2>' +
            '<p>Mit Login merke ich mir, wo du am meisten falsch liegst, und schlage dir genau diese Themen vor.<br>' +
            '<span class="en">With login, I track where you struggle most and suggest exactly those topics.</span></p>' +
            '<button class="floss-primary" id="wdh-login">Anmelden</button>' +
          '</div>';
        var b = document.getElementById("wdh-login");
        if (b) b.onclick = function () { window.FLOSS.loginDialog(); };
        window.FLOSS.onLogin(function () { render(); });
        return;
      }
      root.innerHTML = '<p class="wdh-hinweis">Dein Fortschritt wird ausgewertet…</p>';
      auswerten();
    });
  }

  function auswerten() {
    window.FLOSS.db.from("uebung_fortschritt")
      .select("niveau,thema_id,richtig")
      .eq("user_id", window.FLOSS.user.id)
      .then(function (r) {
        var rows = (r && r.data) || [];
        if (!rows.length) {
          root.innerHTML =
            '<div class="wdh-gate">' +
              '<h2>Noch keine Daten</h2>' +
              '<p>Du hast noch keine Übungen mit Login gemacht. Fang bei deinem Niveau an — ' +
              'danach kann ich dir hier gezielt schwache Themen vorschlagen.<br>' +
              '<span class="en">No data yet — start practicing and check back here.</span></p>' +
              '<a class="floss-primary wdh-startlink" href="index.html">Zu den Übungen</a>' +
            '</div>';
          return;
        }
        var proThema = {}; // "niveau::thema_id" -> {niveau,thema_id,geloest,richtig}
        rows.forEach(function (x) {
          var key = x.niveau + "::" + x.thema_id;
          if (!proThema[key]) proThema[key] = { niveau: x.niveau, thema_id: x.thema_id, geloest: 0, richtig: 0 };
          proThema[key].geloest++;
          if (x.richtig) proThema[key].richtig++;
        });
        var alle = Object.keys(proThema).map(function (k) { return proThema[k]; });
        var schwach = alle
          .filter(function (x) { return x.geloest >= MIN_VERSUCHE; })
          .map(function (x) { return Object.assign({}, x, { quote: x.richtig / x.geloest }); })
          .sort(function (a, b) { return a.quote - b.quote; })
          .slice(0, MAX_SCHWACH);

        var geuebteNiveaus = {};
        alle.forEach(function (x) { geuebteNiveaus[x.niveau] = true; });
        var geuebteThemenSet = {};
        alle.forEach(function (x) { geuebteThemenSet[x.niveau + "::" + x.thema_id] = true; });

        root.innerHTML = "";
        var brauchtNiveaus = Object.keys(geuebteNiveaus)
          .concat(schwach.map(function (x) { return x.niveau; }))
          .filter(function (v, i, a) { return v && a.indexOf(v) === i; });

        Promise.all(brauchtNiveaus.map(ladeLevelData)).then(function () {
          zeichneSchwach(schwach);
          zeichneNeu(geuebteNiveaus, geuebteThemenSet);
        });
      }).catch(function () {
        root.innerHTML = '<p class="wdh-hinweis wdh-fehler">Konnte deinen Fortschritt gerade nicht laden. Versuch es gleich nochmal.</p>';
      });
  }

  function zeichneSchwach(schwach) {
    var sec = el("section", "wdh-sektion");
    if (!schwach.length) {
      sec.innerHTML = '<h2>Deine schwächsten Themen</h2>' +
        '<p class="wdh-hinweis">Noch nicht genug Übungen pro Thema (mind. ' + MIN_VERSUCHE + ') für eine Auswertung. Weiter üben, dann erscheint hier bald etwas.</p>';
      root.appendChild(sec);
      return;
    }
    sec.innerHTML = '<h2>Deine schwächsten Themen</h2><p class="wdh-sub">Am meisten Luft nach oben — hier lohnt sich Üben am meisten.</p>';
    var grid = el("div", "wdh-grid");
    schwach.forEach(function (x) {
      var topics = levelCache[x.niveau] || [];
      var titel = titelZu(topics, x.thema_id);
      var quoteProzent = Math.round(x.quote * 100);
      var karte = el("a", "wdh-karte");
      karte.href = x.niveau + ".html#" + encodeURIComponent(x.thema_id);
      karte.innerHTML =
        '<span class="wdh-badge" style="background:var(--' + esc(x.niveau) + ',var(--blue))">' + esc(x.niveau.toUpperCase()) + '</span>' +
        '<span class="wdh-titel">' + esc(titel) + '</span>' +
        '<span class="wdh-quote wdh-quote-' + (quoteProzent < 50 ? "schlecht" : "mittel") + '">' + quoteProzent + '% richtig · ' + x.geloest + ' Versuche</span>';
      grid.appendChild(karte);
    });
    sec.appendChild(grid);
    root.appendChild(sec);
  }

  function zeichneNeu(geuebteNiveaus, geuebteThemenSet) {
    var profil = window.FLOSS.profil || {};
    var zielNiveau = (profil.ziel_niveau || profil.start_niveau || "").toLowerCase();
    var kandidatNiveaus = zielNiveau ? [zielNiveau] : Object.keys(geuebteNiveaus);
    if (!kandidatNiveaus.length) return;

    Promise.all(kandidatNiveaus.map(ladeLevelData)).then(function () {
      var neu = [];
      kandidatNiveaus.forEach(function (niveau) {
        (levelCache[niveau] || []).forEach(function (t) {
          if (!geuebteThemenSet[niveau + "::" + t.id]) neu.push({ niveau: niveau, thema_id: t.id, titel: t.title });
        });
      });
      if (!neu.length) return;
      neu = neu.slice(0, MAX_NEU);

      var sec = el("section", "wdh-sektion");
      sec.innerHTML = '<h2>Noch nicht geübt</h2><p class="wdh-sub">' +
        (zielNiveau ? "In deinem Niveau (" + zielNiveau.toUpperCase() + ") noch offen." : "Noch offene Themen.") + '</p>';
      var grid = el("div", "wdh-grid");
      neu.forEach(function (x) {
        var karte = el("a", "wdh-karte wdh-karte-neu");
        karte.href = x.niveau + ".html#" + encodeURIComponent(x.thema_id);
        karte.innerHTML =
          '<span class="wdh-badge" style="background:var(--' + esc(x.niveau) + ',var(--blue))">' + esc(x.niveau.toUpperCase()) + '</span>' +
          '<span class="wdh-titel">' + esc(x.titel) + '</span>' +
          '<span class="wdh-quote">Noch nicht versucht</span>';
        grid.appendChild(karte);
      });
      sec.appendChild(grid);
      root.appendChild(sec);
    });
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", render);
  else render();
})();

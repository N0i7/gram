/* ============================================================
   FLOß — Badges (Gamification)
   ------------------------------------------------------------
   Rein clientseitig berechnet aus den Zahlen, die floss-auth.js
   beim Öffnen von "Mein Konto" ohnehin lädt — keine neue Tabelle,
   kein zusätzlicher Datenbank-Zugriff. Hört auf das "floss:stats"-
   Event, das statistikLaden() in floss-auth.js additiv auslöst.

   Zeigt pro Kategorie nur die höchste erreichte Stufe (nicht jede
   einzelne Schwelle), damit es nicht überladen wirkt.
   ============================================================ */
(function () {
  "use strict";

  var STUFEN_AUFGABEN = [
    { ab: 500, label: "500 Aufgaben", ic: "🏆" },
    { ab: 100, label: "100 Aufgaben", ic: "🥇" },
    { ab: 50,  label: "50 Aufgaben",  ic: "🥈" },
    { ab: 10,  label: "10 Aufgaben",  ic: "🥉" },
    { ab: 1,   label: "Erste Aufgabe", ic: "🌱" }
  ];
  var STUFEN_STREAK = [
    { ab: 30, label: "30 Tage am Stück", ic: "🔥" },
    { ab: 7,  label: "7 Tage am Stück",  ic: "🔥" },
    { ab: 3,  label: "3 Tage am Stück",  ic: "✦" }
  ];
  var STUFEN_TESTS = [
    { ab: 5, label: "5 Modelltests bestanden", ic: "🎓" },
    { ab: 1, label: "Erster Modelltest bestanden", ic: "📝" }
  ];

  function hoechsteStufe(stufen, wert) {
    for (var i = 0; i < stufen.length; i++) {
      if (wert >= stufen[i].ab) return stufen[i];
    }
    return null;
  }

  function badgeHtml(b) {
    return '<span class="floss-badge"><span class="ic">' + b.ic + '</span>' + b.label + '</span>';
  }

  window.addEventListener("floss:stats", function (e) {
    var box = document.getElementById("floss-badges");
    if (!box || !e.detail) return;
    var d = e.detail;
    var badges = [];

    var a = hoechsteStufe(STUFEN_AUFGABEN, d.ges || 0);
    if (a) badges.push(a);
    var s = hoechsteStufe(STUFEN_STREAK, d.streak || 0);
    if (s) badges.push(s);
    var t = hoechsteStufe(STUFEN_TESTS, d.testsBestanden || 0);
    if (t) badges.push(t);
    if ((d.ges || 0) >= 20 && (d.quote || 0) >= 90) {
      badges.push({ label: "Scharfschütze (" + d.quote + "% richtig)", ic: "🎯" });
    }

    box.innerHTML = badges.length ? badges.map(badgeHtml).join("") : "";
  });
})();

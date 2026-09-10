/* ============================================================
   FLOß — Scroll-Reveal
   Blendet wiederkehrende Inhaltsblöcke beim Scrollen sanft ein.
   Bewusst leichtgewichtig gehalten, damit die Seitengeschwindigkeit
   nicht spürbar beeinflusst wird:
   - nutzt nur IntersectionObserver (kein Scroll-Listener/Polling)
   - beobachtet jedes Element nur einmal (unobserve nach dem Einblenden)
   - der MutationObserver läuft nur kurz nach dem Laden und trennt
     sich danach automatisch wieder (kein Dauerbetrieb während
     Quiz/Chat/Karteikarten-Interaktionen)
   - respektiert prefers-reduced-motion
   ============================================================ */
(function () {
  "use strict";

  var SELECTOR = ".topic, .quiz, .card, .mt-part, .wdh-karte, .spr-karte, " +
                  ".lehrer-aufnahme, .lehrer-kacheln, .lehrer-tabelle-wrap";

  var reduziert = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduziert || !("IntersectionObserver" in window)) return;

  var io = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add("in");
        io.unobserve(entries[i].target);
      }
    }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  function erfassen(el) {
    if (el.classList.contains("reveal")) return;
    el.classList.add("reveal");
    io.observe(el);
  }

  function scannen(root) {
    if (root.nodeType !== 1) return;
    if (root.matches && root.matches(SELECTOR)) erfassen(root);
    if (root.querySelectorAll) {
      var treffer = root.querySelectorAll(SELECTOR);
      for (var i = 0; i < treffer.length; i++) erfassen(treffer[i]);
    }
  }

  scannen(document.body);

  /* Sicherheitsnetz für Inhalte, die erst nach einem asynchronen
     Login-/Datencheck gerendert werden (z.B. wiederholen.js, tutor.js).
     Trennt sich nach kurzer Zeit selbst, damit spätere, häufige
     DOM-Änderungen (Quiz-Feedback, Chat-Verlauf, Karteikarten-Wechsel)
     keinen laufenden Beobachtungs-Overhead mehr verursachen. */
  var mo = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var added = mutations[i].addedNodes;
      for (var j = 0; j < added.length; j++) scannen(added[j]);
    }
  });
  mo.observe(document.body, { childList: true, subtree: true });
  setTimeout(function () { mo.disconnect(); }, 3000);
})();

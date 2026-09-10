/* ============================================================
   FLOß — Burger-Menü (Seitennavigation)
   Steuert Öffnen/Schließen des Nav-Drawers, der von jeder Seite
   aus auf alle Unterseiten verlinkt.
   ============================================================ */
(function () {
  "use strict";

  var btn = document.getElementById("burger-btn");
  var panel = document.getElementById("burger-panel");
  var overlay = document.getElementById("burger-overlay");
  var closeBtn = document.getElementById("burger-close");

  if (!btn || !panel || !overlay) return;

  function oeffnen() {
    panel.classList.add("open");
    overlay.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
    panel.setAttribute("aria-hidden", "false");
    document.body.classList.add("burger-lock");
  }

  function schliessen() {
    panel.classList.remove("open");
    overlay.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("burger-lock");
  }

  btn.addEventListener("click", function () {
    if (panel.classList.contains("open")) {
      schliessen();
    } else {
      oeffnen();
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", schliessen);
  overlay.addEventListener("click", schliessen);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") schliessen();
  });
})();

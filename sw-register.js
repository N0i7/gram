/* FLOß — Service-Worker-Registrierung. Rein additiv: läuft die Seite
   in einem Browser ohne Unterstützung oder schlägt die Registrierung
   fehl, passiert einfach nichts — die Seite funktioniert wie bisher. */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function () { /* offline-Fähigkeit ist ein Bonus, kein Muss */ });
  });
}

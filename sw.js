/* ============================================================
   FLOß — Service Worker (Offline-Fähigkeit)
   ------------------------------------------------------------
   Ziel: Übungen laufen auch bei schlechtem Internet weiter (relevant
   für die Zielgruppe auf Cebu). KEIN Eingriff in Supabase/API-Aufrufe
   — die haben ihr eigenes Fallback-Verhalten (Gastmodus, lokales
   Korrektur-Ergebnis usw.) und dürfen nicht durch Caching verfälscht
   werden. Nur eigene, statische Dateien werden behandelt.

   Bei jedem inhaltlichen Update dieser Datei die Versionsnummer in
   CACHE_NAME hochzählen — sonst behalten wiederkehrende Besucher
   den alten Stand im Cache.
   ============================================================ */
"use strict";

var CACHE_NAME = "floss-v2";

// App-Grundgerüst: wird beim ersten Besuch vorab geladen, damit die
// Seite danach auch offline startet. Bewusst OHNE modelltest-data/ —
// 160 Dateien vorab zu laden wäre selbst das Problem, das gelöst
// werden soll. Diese werden stattdessen beim Öffnen einzeln in den
// Cache übernommen (siehe fetch-Handler unten).
var PRECACHE = [
  "index.html", "a1.html", "a2.html", "b1.html", "b2.html", "c1.html", "c2.html",
  "karteikarten.html", "modelltests.html", "modelltest.html", "referenz.html",
  "tutor.html", "wiederholen.html", "sprechen.html",
  "styles.css", "roadmap.css", "assistant.css", "verbcard.css", "video.css", "recht.css",
  "floss-auth.css", "modelltest.css", "tutor.css", "wiederholen.css", "sprechen.css",
  "engine.js", "assistant.js", "search-index.js", "topics-map.js", "verbcard.js", "verbs.js",
  "floss-config.js", "floss-auth.js", "floss-progress.js", "floss-cards.js",
  "modelltest-engine.js", "modelltest-korrektur.js",
  "tutor.js", "wiederholen.js", "sprechen.js", "badges.js", "referenz.js", "referenz-daten.js",
  "data-a1.js", "data-a2.js", "data-b1.js", "data-b2.js", "data-c1.js", "data-c2.js",
  "site.webmanifest", "favicon.ico", "favicon-16x16.png", "favicon-32x32.png", "apple-touch-icon.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // Absichtlich einzeln statt cache.addAll(): eine fehlende/umbenannte
      // Datei soll nicht das gesamte Vor-Caching abbrechen lassen.
      return Promise.all(PRECACHE.map(function (url) {
        return cache.add(url).catch(function () { /* einzelne Datei fehlt — kein Drama */ });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (namen) {
      return Promise.all(
        namen.filter(function (n) { return n !== CACHE_NAME; })
             .map(function (n) { return caches.delete(n); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  var req = event.request;

  // Nur eigene GET-Anfragen behandeln. Supabase, Gemini, LanguageTool,
  // GoatCounter, das Supabase-CDN usw. laufen unverändert durch —
  // dort würde Caching aktiv schaden (veraltete Auth-Antworten,
  // falsches Korrektur-Ergebnis).
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Seitenaufrufe (Navigation): zuerst Netz versuchen, damit Updates
  // ankommen, bei Fehler auf den Cache zurückfallen.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).then(function (res) {
        var kopie = res.clone();
        caches.open(CACHE_NAME).then(function (c) { c.put(req, kopie); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (r) { return r || caches.match("index.html"); });
      })
    );
    return;
  }

  // Statische Dateien: zuerst Cache (schnell, funktioniert offline),
  // im Hintergrund trotzdem aktualisieren (stale-while-revalidate).
  event.respondWith(
    caches.match(req).then(function (cached) {
      var netz = fetch(req).then(function (res) {
        if (res && res.ok) {
          var kopie = res.clone();
          caches.open(CACHE_NAME).then(function (c) { c.put(req, kopie); });
        }
        return res;
      }).catch(function () { return null; });
      return cached || netz;
    })
  );
});

/* ============================================================
   FLOß — KI-Tutor (Chat)
   ------------------------------------------------------------
   Ergänzt assistant.js (Stichwort-Suche, versteht keine freien
   Fragen) um einen echten Chat-Tutor. Läuft ausschließlich über
   die Supabase Edge Function "tutor" (Gemini), NUR für eingeloggte
   Nutzer — ohne Login gibt es hier nur einen Hinweis + Login-Knopf,
   kein Fallback-Modus, weil eine Chat-Antwort ohne serverseitiges
   Tageslimit nicht sicher kostenlos bleibt.

   Speichert den laufenden Verlauf nur im Tab (kein localStorage),
   die letzten Nachrichten liegen zusätzlich in tutor_nachricht und
   werden beim Öffnen geladen, damit ein Schüler sein Gespräch beim
   nächsten Besuch wiederfindet.
   ============================================================ */
(function () {
  "use strict";

  var EDGE_FUNCTION_NAME = "tutor";
  var root = document.getElementById("tutor-root");
  if (!root) return;

  var verlauf = []; // [{frage, antwort}]
  var sendetGerade = false;

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
  // Sehr einfache Formatierung: Zeilenumbrüche erhalten, sonst reiner Text.
  function formatiere(text) {
    return esc(text).replace(/\n/g, "<br>");
  }

  function render() {
    if (!window.FLOSS || !window.FLOSS.bereit) {
      root.innerHTML = '<p class="tutor-hinweis">Der Tutor lädt…</p>';
      return;
    }
    window.FLOSS.bereit.then(function () {
      if (!window.FLOSS.user) {
        root.innerHTML =
          '<div class="tutor-gate">' +
            '<h2>Frag den Tutor</h2>' +
            '<p>Stell eine eigene Frage zur deutschen Grammatik, in eigenen Worten — der Tutor antwortet mit Beispiel.<br>' +
            '<span class="en">Ask your own grammar question in your own words.</span></p>' +
            '<p class="tutor-sub">Dafür brauchst du einen kostenlosen FLOß-Zugang, damit die Fragen fair verteilt bleiben.</p>' +
            '<button class="floss-primary" id="tutor-login">Anmelden</button>' +
          '</div>';
        var btn = document.getElementById("tutor-login");
        if (btn) btn.onclick = function () { window.FLOSS.loginDialog(); };
        window.FLOSS.onLogin(function () { render(); });
        return;
      }
      chatAufbauen();
      verlaufLaden();
    });
  }

  function chatAufbauen() {
    root.innerHTML =
      '<div class="tutor-chat">' +
        '<div class="tutor-verlauf" id="tutor-verlauf"><p class="tutor-hinweis">Frag mich etwas zur deutschen Grammatik — z.B. „Wann benutze ich Dativ statt Akkusativ?“</p></div>' +
        '<div class="tutor-eingabe">' +
          '<textarea id="tutor-eingabefeld" placeholder="Deine Frage…" maxlength="600" rows="4"></textarea>' +
          '<button class="floss-primary" id="tutor-senden">Fragen</button>' +
        '</div>' +
        '<p class="tutor-fuss" id="tutor-fuss">Der Tutor kann sich irren — bei wichtigen Prüfungsfragen frag zusätzlich im Unterricht nach.</p>' +
      '</div>';

    var feld = document.getElementById("tutor-eingabefeld");
    var knopf = document.getElementById("tutor-senden");
    knopf.onclick = senden;
    feld.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); senden(); }
    });
  }

  function nachrichtAnzeigen(frage, antwort, laedt) {
    var box = document.getElementById("tutor-verlauf");
    if (!box) return null;
    var hinweis = box.querySelector(".tutor-hinweis");
    if (hinweis) hinweis.remove();

    var eintrag = el("div", "tutor-eintrag");
    eintrag.innerHTML =
      '<div class="tutor-frage">' + esc(frage) + '</div>' +
      '<div class="tutor-antwort' + (laedt ? " laedt" : "") + '">' +
        (laedt ? '<span class="tutor-punkte">…</span>' : formatiere(antwort)) +
      '</div>';
    box.appendChild(eintrag);
    box.scrollTop = box.scrollHeight;
    return eintrag.querySelector(".tutor-antwort");
  }

  function verlaufLaden() {
    if (!window.FLOSS.db || !window.FLOSS.user) return;
    window.FLOSS.db.from("tutor_nachricht")
      .select("frage,antwort,erstellt_am")
      .eq("user_id", window.FLOSS.user.id)
      .order("erstellt_am", { ascending: true })
      .limit(10)
      .then(function (r) {
        var rows = (r && r.data) || [];
        if (!rows.length) return;
        var box = document.getElementById("tutor-verlauf");
        var hinweis = box && box.querySelector(".tutor-hinweis");
        if (hinweis) hinweis.remove();
        rows.forEach(function (row) {
          nachrichtAnzeigen(row.frage, row.antwort, false);
          verlauf.push({ frage: row.frage, antwort: row.antwort });
        });
      }).catch(function () { /* Verlauf ist ein Komfort, kein Muss — still scheitern lassen */ });
  }

  function fehlertext(grund) {
    if (grund === "tageslimit-erreicht")
      return "Für heute ist dein Frage-Kontingent aufgebraucht. Morgen geht's weiter — oder frag im Unterricht.";
    if (grund === "nicht-angemeldet")
      return "Bitte melde dich noch einmal an.";
    if (grund === "gemini-nicht-konfiguriert")
      return "Der Tutor ist noch nicht eingerichtet. Frag stattdessen die Suche oben oder im Unterricht.";
    return "Der Tutor ist gerade nicht erreichbar. Versuch's gleich nochmal.";
  }

  function senden() {
    if (sendetGerade) return;
    var feld = document.getElementById("tutor-eingabefeld");
    var frage = (feld.value || "").trim();
    if (!frage) return;
    if (frage.length > 600) { feld.value = frage.slice(0, 600); frage = feld.value; }

    sendetGerade = true;
    document.getElementById("tutor-senden").disabled = true;
    feld.value = "";
    var antwortEl = nachrichtAnzeigen(frage, "", true);

    window.FLOSS.db.functions.invoke(EDGE_FUNCTION_NAME, {
      body: { frage: frage, verlauf: verlauf.slice(-6) }
    }).then(function (res) {
      sendetGerade = false;
      document.getElementById("tutor-senden").disabled = false;
      var data = res && res.data;
      if (!res.error && data && data.ok && data.antwort) {
        antwortEl.classList.remove("laedt");
        antwortEl.innerHTML = formatiere(data.antwort);
        verlauf.push({ frage: frage, antwort: data.antwort });
        var fuss = document.getElementById("tutor-fuss");
        if (fuss && typeof data.verbleibend === "number")
          fuss.textContent = "Noch " + data.verbleibend + " Fragen heute übrig.";
      } else {
        antwortEl.classList.remove("laedt");
        antwortEl.classList.add("tutor-fehler");
        antwortEl.textContent = fehlertext(data && data.grund);
      }
    }).catch(function () {
      sendetGerade = false;
      document.getElementById("tutor-senden").disabled = false;
      antwortEl.classList.remove("laedt");
      antwortEl.classList.add("tutor-fehler");
      antwortEl.textContent = fehlertext(null);
    });
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", render);
  else render();
})();

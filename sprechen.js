/* ============================================================
   FLOß — Sprechen (Grundgerüst)
   ------------------------------------------------------------
   Bewusst OHNE automatische Bewertung. Der Schüler nimmt eine
   Antwort zu einem vorgegebenen Prompt im Browser auf (MediaRecorder),
   die Aufnahme landet im privaten Supabase-Storage-Bucket "sprechen"
   und als Metadaten-Zeile in sprechen_aufnahme — zur manuellen
   Durchsicht im Lehrer-Dashboard (lehrer.html). Löst das bisher
   offene "Hören/Sprechen"-Problem der Modelltests pragmatisch,
   ohne teure/unsichere automatische Spracherkennung zu bauen.

   Braucht Login (Speicherort ist pro Nutzer) und Mikrofon-Erlaubnis
   im Browser. Bucket "sprechen" muss in Supabase existieren (siehe
   EINRICHTUNG.md) — schlägt der Upload fehl, bekommt der Schüler
   eine klare Fehlermeldung statt eines stillen Verlusts.
   ============================================================ */
(function () {
  "use strict";

  var root = document.getElementById("sprechen-root");
  if (!root) return;

  var BUCKET = "sprechen";
  var MAX_SEKUNDEN = 120;

  var PROMPTS = {
    a1: [
      { id: "a1-vorstellung-1", titel: "Stell dich vor", text: "Wie heißt du? Woher kommst du? Was machst du beruflich? Sprich 3–4 Sätze." },
      { id: "a1-familie-1", titel: "Deine Familie", text: "Erzähl kurz von deiner Familie. Wie viele Personen? Wer wohnt bei dir?" },
      { id: "a1-tagesablauf-1", titel: "Dein Tag", text: "Was machst du normalerweise am Morgen? Erzähl deinen Tagesablauf." }
    ],
    a2: [
      { id: "a2-arbeit-1", titel: "Deine Arbeit", text: "Was ist dein Beruf? Was machst du dort genau? Gefällt dir die Arbeit?" },
      { id: "a2-wohnort-1", titel: "Dein Zuhause", text: "Beschreib, wo und wie du wohnst. Was gefällt dir an deiner Stadt?" },
      { id: "a2-hobby-1", titel: "Freizeit", text: "Was machst du in deiner Freizeit? Seit wann machst du das?" }
    ],
    b1: [
      { id: "b1-meinung-1", titel: "Deine Meinung", text: "Ist es besser, in der Stadt oder auf dem Land zu leben? Sag deine Meinung mit einem Grund." },
      { id: "b1-vergleich-1", titel: "Vergleich", text: "Vergleiche das Leben auf den Philippinen mit dem Leben in Deutschland — was ist anders?" },
      { id: "b1-problem-1", titel: "Ein Problem lösen", text: "Ein Freund hat kein Geld mehr für Miete. Was rätst du ihm? Erklär deinen Vorschlag." }
    ],
    b2: [
      { id: "b2-stellungnahme-1", titel: "Stellungnahme", text: "Sollte man in Deutschland arbeiten, auch wenn man seine Familie zurücklässt? Nimm Stellung mit Argumenten." },
      { id: "b2-diskussion-1", titel: "Diskussion", text: "Diskutiere: Ist es wichtiger, gut zu verdienen oder Zeit für die Familie zu haben? Begründe ausführlich." }
    ]
  };

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

  function render() {
    if (!window.FLOSS || !window.FLOSS.bereit) {
      root.innerHTML = '<p class="spr-hinweis">Lädt…</p>';
      return;
    }
    window.FLOSS.bereit.then(function () {
      if (!window.FLOSS.user) {
        root.innerHTML =
          '<div class="spr-gate">' +
            '<h2>Sprechen üben</h2>' +
            '<p>Nimm eine Antwort zu einem Prompt auf — dein Lehrer hört sie sich an und gibt dir Rückmeldung.<br>' +
            '<span class="en">Record an answer to a prompt — your teacher listens and gives feedback.</span></p>' +
            '<button class="floss-primary" id="spr-login">Anmelden</button>' +
          '</div>';
        var b = document.getElementById("spr-login");
        if (b) b.onclick = function () { window.FLOSS.loginDialog(); };
        window.FLOSS.onLogin(function () { render(); });
        return;
      }
      if (!navigator.mediaDevices || !window.MediaRecorder) {
        root.innerHTML = '<p class="spr-hinweis spr-fehler">Dein Browser unterstützt keine Audioaufnahme. Versuch es mit Chrome oder Firefox.</p>';
        return;
      }
      zeichneAuswahl();
    });
  }

  function zeichneAuswahl() {
    root.innerHTML = '<div class="spr-auswahl" id="spr-auswahl"></div><div id="spr-aufnahme-bereich"></div>';
    var box = document.getElementById("spr-auswahl");
    Object.keys(PROMPTS).forEach(function (niveau) {
      var gruppe = el("div", "spr-gruppe");
      gruppe.innerHTML = '<h2><span class="badge" style="background:var(--' + niveau + ')">' + niveau.toUpperCase() + '</span></h2>';
      var grid = el("div", "spr-grid");
      PROMPTS[niveau].forEach(function (p) {
        var karte = el("button", "spr-karte");
        karte.innerHTML = '<b>' + esc(p.titel) + '</b><span>' + esc(p.text) + '</span>';
        karte.onclick = function () { aufnahmeStarten(niveau, p); };
        grid.appendChild(karte);
      });
      gruppe.appendChild(grid);
      box.appendChild(gruppe);
    });
  }

  function aufnahmeStarten(niveau, prompt) {
    var bereich = document.getElementById("spr-aufnahme-bereich");
    bereich.innerHTML =
      '<div class="spr-recorder">' +
        '<h3>' + esc(prompt.titel) + '</h3>' +
        '<p class="spr-prompttext">' + esc(prompt.text) + '</p>' +
        '<div class="spr-status" id="spr-status">Bereit — Mikrofon wird angefragt…</div>' +
        '<div class="spr-controls">' +
          '<button class="floss-primary" id="spr-rec">● Aufnahme starten</button>' +
          '<button class="floss-ghost" id="spr-stop" disabled>Stopp</button>' +
        '</div>' +
        '<audio id="spr-preview" controls style="display:none;width:100%;margin-top:14px"></audio>' +
        '<div class="spr-controls" id="spr-upload-zeile" style="display:none">' +
          '<button class="floss-primary" id="spr-hochladen">Hochladen</button>' +
          '<button class="floss-ghost" id="spr-verwerfen">Verwerfen, nochmal</button>' +
        '</div>' +
      '</div>';
    bereich.scrollIntoView({ behavior: "smooth", block: "start" });

    var chunks = [];
    var recorder = null;
    var startZeit = 0;
    var blob = null;

    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      document.getElementById("spr-status").textContent = "Mikrofon bereit. Klick auf Aufnahme starten.";
      document.getElementById("spr-rec").onclick = function () {
        chunks = [];
        try {
          recorder = new MediaRecorder(stream);
        } catch (e) {
          document.getElementById("spr-status").textContent = "Aufnahme konnte nicht gestartet werden.";
          return;
        }
        recorder.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
        recorder.onstop = function () {
          blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
          var preview = document.getElementById("spr-preview");
          preview.src = URL.createObjectURL(blob);
          preview.style.display = "block";
          document.getElementById("spr-upload-zeile").style.display = "flex";
          document.getElementById("spr-status").textContent = "Aufnahme fertig — anhören und dann hochladen.";
        };
        recorder.start();
        startZeit = Date.now();
        document.getElementById("spr-rec").disabled = true;
        document.getElementById("spr-stop").disabled = false;
        document.getElementById("spr-status").textContent = "● Aufnahme läuft…";
        setTimeout(function () {
          if (recorder && recorder.state === "recording") recorder.stop();
        }, MAX_SEKUNDEN * 1000);
      };
      document.getElementById("spr-stop").onclick = function () {
        if (recorder && recorder.state === "recording") recorder.stop();
        document.getElementById("spr-rec").disabled = false;
        document.getElementById("spr-stop").disabled = true;
      };
    }).catch(function () {
      document.getElementById("spr-status").textContent = "Kein Zugriff aufs Mikrofon. Bitte in den Browser-Einstellungen erlauben.";
    });

    // Direkt an die Knöpfe dieses Aufnahme-Durchgangs gebunden (nicht an document) —
    // sonst sammeln sich bei mehreren Prompts hintereinander alte Listener mit
    // veralteten blob-Referenzen an und ein Klick löst mehrere Uploads aus.
    document.getElementById("spr-verwerfen").onclick = function () {
      document.getElementById("spr-preview").style.display = "none";
      document.getElementById("spr-upload-zeile").style.display = "none";
      document.getElementById("spr-rec").disabled = false;
      document.getElementById("spr-status").textContent = "Bereit für einen neuen Versuch.";
    };
    document.getElementById("spr-hochladen").onclick = function (e) {
      if (!blob) return;
      e.target.disabled = true;
      document.getElementById("spr-status").textContent = "Wird hochgeladen…";
      hochladen(niveau, prompt, blob, Math.round((Date.now() - startZeit) / 1000));
    };
  }

  function hochladen(niveau, prompt, blob, dauerSek) {
    var db = window.FLOSS.db;
    var pfad = window.FLOSS.user.id + "/" + niveau + "-" + prompt.id + "-" + Date.now() + ".webm";
    db.storage.from(BUCKET).upload(pfad, blob, { contentType: blob.type || "audio/webm" })
      .then(function (res) {
        if (res.error) throw res.error;
        return db.from("sprechen_aufnahme").insert({
          user_id: window.FLOSS.user.id,
          niveau: niveau,
          prompt_id: prompt.id,
          storage_pfad: pfad,
          dauer_sek: dauerSek
        });
      }).then(function (res) {
        if (res.error) throw res.error;
        document.getElementById("spr-aufnahme-bereich").innerHTML =
          '<div class="spr-fertig">Hochgeladen. Dein Lehrer sieht sich das an.<br>' +
          '<button class="floss-ghost" id="spr-neu">Weiteren Prompt üben</button></div>';
        document.getElementById("spr-neu").onclick = zeichneAuswahl;
      }).catch(function (err) {
        var status = document.getElementById("spr-status");
        if (status) status.textContent = "Hochladen fehlgeschlagen (" + ((err && err.message) || "unbekannter Fehler") + "). Nochmal versuchen.";
        var knopf = document.getElementById("spr-hochladen");
        if (knopf) knopf.disabled = false;
      });
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", render);
  else render();
})();

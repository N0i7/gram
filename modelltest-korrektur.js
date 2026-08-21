/* ============================================================
   FLOß Modelltests — Korrektur-Engine (Schreiben-Teil)
   ------------------------------------------------------------
   "Team aus 3 DaF-Lehrern", technisch als drei unabhängige Module:
     1) Grammatik & Rechtschreibung   -> LanguageTool (öffentliche API)
     2) Wortschatz & Ausdruck         -> lokale Heuristiken (kein Netz)
     3) Aufgabenerfüllung & Struktur  -> Abgleich mit den Testdaten

   Alle drei laufen IMMER, auch ohne Login und ohne Backend — das
   Ergebnis wird lokal zu einem Bündel-Feedback im Sandwich-Stil
   zusammengeführt (Lob, gruppierte Fehler, Lernziel, Schlusssatz),
   textbausteinbasiert, ohne KI.

   Ist ein Nutzer eingeloggt, wird zusätzlich die Supabase Edge
   Function "korrektur" aufgerufen: die verfeinert das gleiche Bündel
   mit Gemini zu echtem Fließtext und speichert das Ergebnis. Schlägt
   das fehl (kein Netz, Tageslimit erreicht, Funktion nicht deployt),
   bleibt automatisch das lokale Ergebnis stehen — die Korrektur
   blockiert nie und kostet im Zweifel nichts.

   Wichtig: "fehlerfrei" ist hier bewusst NICHT das Versprechen.
   LanguageTool und die Heuristiken erkennen einen Großteil der
   üblichen Fehler, aber keine Grammatikprüfung ist vollständig.
   ============================================================ */
window.FlossKorrektur = (function () {
  "use strict";

  var LT_ENDPOINT = "https://api.languagetool.org/v2/check";
  var LT_TIMEOUT_MS = 12000;
  var EDGE_FUNCTION_NAME = "korrektur";

  /* ---------------- Hilfsdaten ---------------- */

  var STOPWORDS = ("der die das ein eine einen einem einer des dem den und oder aber doch " +
    "ich du er sie es wir ihr sich mich dich uns euch mir dir ihm ihnen " +
    "ist sind war waren bin bist sein haben hat habe hatte hatten wird werden würde würden " +
    "zu von mit für auf in an im am aus bei nach vor über unter zwischen durch gegen ohne um " +
    "nicht auch so als wenn dann noch nur schon sehr viel mehr kann können muss müssen soll sollen " +
    "ja nein man da dort hier heute morgen gestern dass wie was wer wo warum")
    .split(" ")
    .reduce(function (s, w) { s[w] = true; return s; }, {});

  var KONNEKTOR_GRUPPEN = {
    kausal: ["weil", "da", "denn", "deshalb", "daher", "deswegen"],
    konzessiv: ["obwohl", "trotzdem", "dennoch", "allerdings"],
    final: ["damit", "sodass"],
    temporal: ["als", "während", "nachdem", "bevor", "seitdem", "bis"],
    adversativ: ["aber", "jedoch", "sondern"],
    additiv: ["außerdem", "zudem", "ebenfalls"]
  };

  var LOB_VORLAGEN = [
    "Du hast die Aufgabe angepackt und einen zusammenhängenden Text geschrieben — das ist die Basis für alles Weitere.",
    "Dein Text liest sich flüssig, das merkt man.",
    "Du bringst deine Gedanken klar auf den Punkt.",
    "Man merkt, dass du dir beim Schreiben Mühe gegeben hast."
  ];
  var LERNZIEL_VORLAGEN = [
    "Konzentrier dich jetzt auf {thema}.",
    "Das Eine, was du dir merken solltest: {thema}.",
    "Wenn du nur eine Sache übst, dann {thema}.",
    "Schau dir nochmal {thema} an — das bringt am meisten."
  ];
  var SCHLUSS_VORLAGEN = [
    "Bleib dran, das wird mit jedem Text besser.",
    "Weiter so — das war ein guter Text zum Üben.",
    "Nimm dir die Punkte oben vor, der Rest passt schon.",
    "Schreib den nächsten Text ruhig gleich nochmal — Übung zählt mehr als Perfektion."
  ];

  function zufall(liste) { return liste[Math.floor(Math.random() * liste.length)]; }

  /* ---------------- Lehrer 1: Grammatik & Rechtschreibung ---------------- */

  function lehrer1Grammatik(text) {
    if (!text || !text.trim()) {
      return Promise.resolve({ verfuegbar: false, fehler: [], anzahl: 0, proKategorie: {} });
    }
    var ctrl = (typeof AbortController !== "undefined") ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, LT_TIMEOUT_MS) : null;
    var body = new URLSearchParams();
    body.set("text", text.slice(0, 15000));
    body.set("language", "de-DE");

    return fetch(LT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
      signal: ctrl ? ctrl.signal : undefined
    }).then(function (r) {
      if (timer) clearTimeout(timer);
      if (!r.ok) throw new Error(r.status === 429 ? "languagetool-limit" : "languagetool-fehler-" + r.status);
      return r.json();
    }).then(function (data) {
      var matches = (data && data.matches) || [];
      var proKategorie = {};
      var fehler = matches.map(function (m) {
        var kat = (m.rule && m.rule.category && m.rule.category.name) || "Sonstiges";
        proKategorie[kat] = (proKategorie[kat] || 0) + 1;
        var ausschnitt = text.substring(Math.max(0, m.offset - 15), Math.min(text.length, m.offset + m.length + 15));
        var vorschlag = (m.replacements && m.replacements[0] && m.replacements[0].value) || null;
        return { kategorie: kat, nachricht: m.shortMessage || m.message, ausschnitt: ausschnitt.trim(), vorschlag: vorschlag };
      });
      return { verfuegbar: true, fehler: fehler, anzahl: fehler.length, proKategorie: proKategorie };
    }).catch(function (err) {
      if (timer) clearTimeout(timer);
      return { verfuegbar: false, fehler: [], anzahl: 0, proKategorie: {}, hinweis: String((err && err.message) || err) };
    });
  }

  /* ---------------- Lehrer 2: Wortschatz & Ausdruck ---------------- */

  function lehrer2Wortschatz(text, niveau) {
    var t = (text || "").trim();
    var woerterListe = t ? t.split(/\s+/) : [];
    var anzahlWoerter = woerterListe.length;
    var saetzeListe = t.split(/[.!?]+/).map(function (s) { return s.trim(); }).filter(Boolean);

    var klein = woerterListe.map(function (w) { return w.toLowerCase().replace(/[.,!?;:„"()]/g, ""); }).filter(Boolean);
    var einzigartige = {};
    klein.forEach(function (w) { einzigartige[w] = true; });
    var ttr = klein.length ? Object.keys(einzigartige).length / klein.length : 0;

    var haeufigkeit = {};
    klein.forEach(function (w) { if (w.length > 3 && !STOPWORDS[w]) haeufigkeit[w] = (haeufigkeit[w] || 0) + 1; });
    var wiederholungen = Object.keys(haeufigkeit)
      .filter(function (w) { return haeufigkeit[w] >= 3; })
      .sort(function (a, b) { return haeufigkeit[b] - haeufigkeit[a]; })
      .slice(0, 5)
      .map(function (w) { return { wort: w, anzahl: haeufigkeit[w] }; });

    var gefundeneGruppen = {};
    Object.keys(KONNEKTOR_GRUPPEN).forEach(function (gruppe) {
      KONNEKTOR_GRUPPEN[gruppe].forEach(function (k) {
        if (new RegExp("\\b" + k + "\\b", "i").test(t)) gefundeneGruppen[gruppe] = true;
      });
    });
    var konnektorVielfalt = Object.keys(gefundeneGruppen).length;
    var erwartungKonnektoren = { a1: 0, a2: 1, b1: 2, b2: 3 }[niveau] || 1;

    var laengen = saetzeListe.map(function (s) { return s.split(/\s+/).filter(Boolean).length; });
    var mittel = laengen.reduce(function (a, b) { return a + b; }, 0) / (laengen.length || 1);
    var varianz = laengen.reduce(function (a, b) { return a + Math.pow(b - mittel, 2); }, 0) / (laengen.length || 1);

    var punkte = 100;
    if (wiederholungen.length > 0) punkte -= Math.min(25, wiederholungen.length * 6);
    if (konnektorVielfalt < erwartungKonnektoren) punkte -= (erwartungKonnektoren - konnektorVielfalt) * 10;
    if (ttr < 0.4 && anzahlWoerter > 30) punkte -= 10;
    punkte = Math.max(0, Math.min(100, Math.round(punkte)));

    return {
      anzahlWoerter: anzahlWoerter,
      anzahlSaetze: saetzeListe.length || 0,
      ttr: Math.round(ttr * 100) / 100,
      wiederholungen: wiederholungen,
      konnektorVielfalt: konnektorVielfalt,
      erwartungKonnektoren: erwartungKonnektoren,
      satzlaengeMittel: Math.round(mittel * 10) / 10,
      satzlaengeVarianz: Math.round(varianz * 10) / 10,
      punkte: punkte
    };
  }

  /* ---------------- Lehrer 3: Aufgabenerfüllung & Struktur ---------------- */

  function stichworte(satz) {
    return (satz || "").toLowerCase()
      .replace(/[.,!?;:„"()/]/g, " ")
      .split(/\s+/)
      .filter(function (w) { return w.length > 3 && !STOPWORDS[w]; });
  }

  function lehrer3Aufgabe(text, aufgabe, mindestwoerter) {
    var t = (text || "").trim();
    var tLower = t.toLowerCase();
    var anzahlWoerter = t ? t.split(/\s+/).length : 0;
    var mindestErreicht = anzahlWoerter >= (mindestwoerter || 0);

    var punkteListe = (aufgabe && aufgabe.punkte) || [];
    var abdeckung = punkteListe.map(function (p) {
      var keywords = stichworte(p);
      var treffer = keywords.filter(function (k) { return tLower.indexOf(k) !== -1; });
      var quote = keywords.length ? treffer.length / keywords.length : 1;
      return { punkt: p, abgedeckt: quote >= 0.34, treffer: treffer, keywords: keywords };
    });
    var abdeckungsQuote = punkteListe.length
      ? abdeckung.filter(function (a) { return a.abgedeckt; }).length / punkteListe.length
      : 1;

    var briefCheck = null;
    if (aufgabe && aufgabe.briefform) {
      var anredeRe = /(liebe[rs]?|sehr geehrte[rs]?|hallo)\s+\w+/i;
      var grussRe = /(mit freundlichen grüßen|viele grüße|liebe grüße|beste grüße|lg\b)/i;
      briefCheck = {
        anredeVorhanden: anredeRe.test(t.slice(0, 120)),
        grussVorhanden: grussRe.test(t.slice(-150))
      };
    }

    var absaetze = t.split(/\n\s*\n/).filter(function (s) { return s.trim().length > 0; }).length;

    var score = 100;
    if (!mindestErreicht) score -= 30;
    score -= Math.round((1 - abdeckungsQuote) * 40);
    if (briefCheck) {
      if (!briefCheck.anredeVorhanden) score -= 10;
      if (!briefCheck.grussVorhanden) score -= 10;
    }
    if (absaetze <= 1 && anzahlWoerter > 60) score -= 5;
    score = Math.max(0, Math.min(100, score));

    return {
      anzahlWoerter: anzahlWoerter,
      mindestwoerter: mindestwoerter || 0,
      mindestErreicht: mindestErreicht,
      abdeckung: abdeckung,
      abdeckungsQuote: Math.round(abdeckungsQuote * 100) / 100,
      briefCheck: briefCheck,
      absaetze: absaetze,
      punkte: score
    };
  }

  /* ---------------- Bündelung ohne KI (Basis, immer verfügbar) ---------------- */

  function formaleRichtigkeitScore(grammatik, anzahlWoerter) {
    if (!grammatik || !grammatik.verfuegbar) return null;
    var proHundert = anzahlWoerter > 0 ? (grammatik.anzahl / anzahlWoerter) * 100 : 0;
    return Math.max(0, Math.min(100, Math.round(100 - proHundert * 7)));
  }

  function buendeleLokal(befund) {
    var g = befund.grammatik, w = befund.wortschatz, a = befund.aufgabe;
    var formal = formaleRichtigkeitScore(g, w.anzahlWoerter);

    var kriterien = [
      { name: "Aufgabenerfüllung", punkte: a.punkte },
      { name: "Kommunikative Gestaltung", punkte: w.punkte }
    ];
    if (formal !== null) kriterien.push({ name: "Formale Richtigkeit", punkte: formal });

    var gesamtprozent = kriterien.length
      ? Math.round(kriterien.reduce(function (s, k) { return s + k.punkte; }, 0) / kriterien.length)
      : 0;

    var fehlergruppen = [];
    if (g && g.verfuegbar && g.fehler.length) {
      Object.keys(g.proKategorie).forEach(function (kat) {
        var beispiele = g.fehler.filter(function (f) { return f.kategorie === kat; }).slice(0, 3);
        fehlergruppen.push({
          typ: kat,
          anzahl: g.proKategorie[kat],
          beispiele: beispiele.map(function (b) { return b.vorschlag ? (b.ausschnitt + " → " + b.vorschlag) : b.ausschnitt; })
        });
      });
    } else if (g && !g.verfuegbar && w.anzahlWoerter > 0) {
      fehlergruppen.push({
        typ: "Grammatikprüfung",
        anzahl: 0,
        beispiele: [],
        hinweis: "Die automatische Grammatikprüfung war gerade nicht erreichbar — dieser Teil fehlt in der Rückmeldung."
      });
    }
    if (w.wiederholungen.length) {
      fehlergruppen.push({
        typ: "Wortwiederholungen",
        anzahl: w.wiederholungen.length,
        beispiele: w.wiederholungen.map(function (x) { return x.wort + " (" + x.anzahl + "x)"; })
      });
    }
    if (a.abdeckungsQuote < 1) {
      var fehlend = a.abdeckung.filter(function (x) { return !x.abgedeckt; }).map(function (x) { return x.punkt; });
      if (fehlend.length) fehlergruppen.push({ typ: "Nicht alle Aufgabenpunkte behandelt", anzahl: fehlend.length, beispiele: fehlend });
    }
    if (a.briefCheck) {
      var fehlt = [];
      if (!a.briefCheck.anredeVorhanden) fehlt.push('Anrede am Anfang (z.B. "Liebe/r ..." oder "Sehr geehrte/r ...")');
      if (!a.briefCheck.grussVorhanden) fehlt.push('Grußformel am Ende (z.B. "Mit freundlichen Grüßen")');
      if (fehlt.length) fehlergruppen.push({ typ: "Briefform", anzahl: fehlt.length, beispiele: fehlt });
    }
    if (!a.mindestErreicht) {
      fehlergruppen.push({ typ: "Wortzahl", anzahl: 1, beispiele: ["Nur " + a.anzahlWoerter + " von mindestens " + a.mindestwoerter + " Wörtern geschrieben."] });
    }

    var schwaechste = kriterien.reduce(function (min, k) {
      return (min === null || k.punkte < min.punkte) ? k : min;
    }, null);
    schwaechste = schwaechste ? schwaechste.name : null;
    var themenText = {
      "Formale Richtigkeit": "Grammatik und Rechtschreibung noch einmal genau durchzugehen",
      "Kommunikative Gestaltung": "abwechslungsreicher zu schreiben — andere Wörter und Satzverbindungen ausprobieren",
      "Aufgabenerfüllung": "wirklich alle Punkte der Aufgabe zu behandeln, bevor du abgibst"
    };
    var lernsatz = zufall(LERNZIEL_VORLAGEN).replace("{thema}", themenText[schwaechste] || "an deinem Text weiterzuarbeiten");

    return {
      quelle: "regelbasiert",
      lob: zufall(LOB_VORLAGEN),
      fehlergruppen: fehlergruppen,
      lernsatz: lernsatz,
      schlusssatz: zufall(SCHLUSS_VORLAGEN),
      kriterien: kriterien,
      gesamtprozent: gesamtprozent
    };
  }

  /* ---------------- Öffentliche Funktion ---------------- */

  function korrigiere(opts) {
    opts = opts || {};
    return lehrer1Grammatik(opts.text).then(function (g1) {
      var g2 = lehrer2Wortschatz(opts.text, opts.niveau);
      var g3 = lehrer3Aufgabe(opts.text, opts.aufgabe, opts.mindestwoerter);
      var befund = { grammatik: g1, wortschatz: g2, aufgabe: g3 };
      var lokalesErgebnis = buendeleLokal(befund);

      var F = window.FLOSS;
      if (F && F.db && F.user && F.db.functions) {
        return F.db.functions.invoke(EDGE_FUNCTION_NAME, {
          body: {
            text: opts.text,
            niveau: opts.niveau,
            testKey: opts.testKey,
            aufgabeNr: opts.aufgabeNr,
            befund: befund,
            lokalesErgebnis: lokalesErgebnis
          }
        }).then(function (res) {
          if (res && !res.error && res.data && res.data.ok && res.data.ergebnis) {
            return res.data.ergebnis;
          }
          return lokalesErgebnis;
        }).catch(function () { return lokalesErgebnis; });
      }
      return lokalesErgebnis;
    }).catch(function () {
      var g2 = lehrer2Wortschatz(opts.text, opts.niveau);
      var g3 = lehrer3Aufgabe(opts.text, opts.aufgabe, opts.mindestwoerter);
      return buendeleLokal({ grammatik: { verfuegbar: false, fehler: [], anzahl: 0, proKategorie: {} }, wortschatz: g2, aufgabe: g3 });
    });
  }

  return {
    korrigiere: korrigiere,
    _intern: { lehrer1Grammatik: lehrer1Grammatik, lehrer2Wortschatz: lehrer2Wortschatz, lehrer3Aufgabe: lehrer3Aufgabe, buendeleLokal: buendeleLokal }
  };
})();

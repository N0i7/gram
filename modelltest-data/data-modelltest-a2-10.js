// ============================================================
// FLOß Modelltest A2 — Nr. 10
// Gleiches Format wie Nr. 01–09.
// ============================================================

window.MODELLTEST_A2_10 = {
  testKey: "modelltest-a2-10",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 10",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Sportverein sucht ehrenamtliche Trainer" },
        { id: 2, text: "Vereinsfest am Wochenende" },
        { id: 3, text: "Neue Mitgliedsbeiträge ab Januar" },
        { id: 4, text: "Jugendmannschaft sucht Verstärkung" },
        { id: 5, text: "Ehrenamtliche Helfer für Turnier gesucht" },
        { id: 6, text: "Verein feiert 50-jähriges Bestehen" },
        { id: 7, text: "Trainingszeiten ändern sich" },
        { id: 8, text: "Sporthalle wird renoviert" }
      ],
      texte: [
        { id: "a", text: "Wir suchen freiwillige Helfer für das Turnier am Samstag, etwa beim Auf- und Abbau oder am Getränkestand." },
        { id: "b", text: "Der Verein sucht Personen, die ehrenamtlich als Trainer für die Kindermannschaften arbeiten möchten, keine Erfahrung nötig." },
        { id: "c", text: "Ab dem neuen Jahr steigt der Mitgliedsbeitrag um 5 Euro pro Monat, um neue Ausrüstung zu finanzieren." },
        { id: "d", text: "Wegen der Renovierung der Halle finden die Trainings vorübergehend im Freien statt." },
        { id: "e", text: "Die U14-Mannschaft sucht noch zwei neue Spieler, Training ist dienstags und donnerstags." }
      ],
      loesung: { a: 5, b: 1, c: 3, d: 8, e: 4 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit einem halben Jahr trainiere ich ehrenamtlich die Kindermannschaft in unserem Sportverein. Am Anfang war ich unsicher, weil ich noch nie eine Gruppe geleitet hatte. Der Verein hat mir aber geholfen, mit Materialien und Tipps von erfahreneren Trainern. Mittlerweile macht mir die Arbeit richtig Spaß. Die Kinder sind immer motiviert, auch wenn manchmal Chaos entsteht. Ich habe gelernt, geduldiger zu sein und besser zu erklären. Am Wochenende gibt es oft kleine Turniere, bei denen ich die Mannschaft begleite. Diese Erfahrung hat mir auch im Beruf geholfen, weil ich jetzt besser mit Gruppen umgehen kann.",
      aussagen: [
        { nr: 1, text: "Die Person trainiert seit einem halben Jahr die Mannschaft.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person hatte vorher schon viel Erfahrung mit Gruppenleitung.", korrekt: false, hinweis: "Gegenteil: 'noch nie eine Gruppe geleitet hatte'." },
        { nr: 3, text: "Der Verein hat keine Unterstützung angeboten.", korrekt: false, hinweis: "Gegenteil: 'Verein hat mir aber geholfen'." },
        { nr: 4, text: "Die Kinder sind meistens motiviert.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Erfahrung hat der Person auch beruflich geholfen.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten ehrenamtlich Kinder trainieren." },
        { nr: 2, text: "Sie möchten beim Turnier helfen." },
        { nr: 3, text: "Ihr Kind möchte in einer Fußballmannschaft spielen." },
        { nr: 4, text: "Sie möchten wissen, wo das Training jetzt stattfindet." },
        { nr: 5, text: "Sie möchten den neuen Mitgliedsbeitrag erfahren." },
        { nr: 6, text: "Sie möchten am Vereinsjubiläum teilnehmen." },
        { nr: 7, text: "Sie suchen einen Job als Fitnesstrainer." },
        { nr: 8, text: "Sie möchten Mitglied in einem Schachverein werden." },
        { nr: 9, text: "Sie suchen eine Sporthalle zum Mieten." },
        { nr: 10, text: "Sie möchten an einem Marathon teilnehmen." }
      ],
      anzeigen: [
        { id: "a", text: "Sportverein sucht ehrenamtliche Trainer für Kindermannschaften." },
        { id: "b", text: "Freiwillige Helfer für Turnier am Samstag gesucht." },
        { id: "c", text: "U14-Mannschaft sucht neue Spieler, Training dienstags und donnerstags." },
        { id: "d", text: "Training findet wegen Renovierung vorübergehend im Freien statt." },
        { id: "e", text: "Neue Mitgliedsbeiträge ab Januar: plus 5 Euro pro Monat." },
        { id: "f", text: "Vereinsfest zum 50-jährigen Bestehen, alle sind eingeladen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit einem halben Jahr ___(1)___ ich ehrenamtlich die Kindermannschaft. Am Anfang ___(2)___ ich unsicher, ___(3)___ ich noch keine Erfahrung hatte. Der Verein ___(4)___ mir geholfen, mit Materialien und Tipps. Mittlerweile ___(5)___ mir die Arbeit richtig Spaß.",
      luecken: [
        { nr: 1, o: ["trainiere", "trainiert", "trainieren"], c: 0, h: "ich → trainiere." },
        { nr: 2, o: ["war", "bin", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 3, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." },
        { nr: 4, o: ["hat", "ist", "war"], c: 0, h: "Perfekt: hat geholfen." },
        { nr: 5, o: ["macht", "machst", "machen"], c: 0, h: "die Arbeit → macht." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["geduldiger", "motiviert", "ehrenamtlich", "regelmäßig", "erfahrener"],
      text: "Ich arbeite ___(6)___ als Trainer. Die Kinder sind meistens ___(7)___. Ich habe gelernt, ___(8)___ zu sein. Ich treffe die Mannschaft ___(9)___ zweimal pro Woche. Ein ___(10)___ Trainer hat mir am Anfang geholfen.",
      loesung: { 6: "ehrenamtlich", 7: "motiviert", 8: "geduldiger", 9: "regelmäßig", 10: "erfahrener" }
    }
  },

  schreiben: {
    titel: "Schreiben — Persönliche Nachricht",
    anleitung: "Schreiben Sie eine Nachricht. Schreiben Sie mindestens 40 Wörter. Gehen Sie auf alle Punkte ein.",
    mindestwoerter: 40,
    aufgaben: [
      {
        nr: 1,
        briefform: "informell",
        situation: "Sie trainieren ehrenamtlich eine Kindermannschaft und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, seit wann Sie trainieren.", "Sagen Sie, was Ihnen daran gefällt.", "Fragen Sie, ob die Person auch ehrenamtlich helfen möchte."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

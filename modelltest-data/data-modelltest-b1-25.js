// ============================================================
// FLOß Modelltest B1 — Nr. 25
// Gleiches Format wie Nr. 01–24.
// ============================================================

window.MODELLTEST_B1_25 = {
  testKey: "modelltest-b1-25",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 25",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Ehrenamtliche Helfer gesucht" },
        { id: 2, text: "Deutschunterricht für Geflüchtete" },
        { id: 3, text: "Begleitung zu Behördenterminen" },
        { id: 4, text: "Freizeitangebote für geflüchtete Familien" },
        { id: 5, text: "Spendenaktion für Unterkünfte" },
        { id: 6, text: "Patenschaften für Geflüchtete" },
        { id: 7, text: "Dolmetscher für die Flüchtlingshilfe" },
        { id: 8, text: "Schulung für neue Helfer" }
      ],
      texte: [
        { id: "a", text: "Die Organisation sucht dringend Freiwillige, die Geflüchtete im Alltag unterstützen möchten." },
        { id: "b", text: "Zweimal wöchentlich bietet ein Team ehrenamtlicher Lehrkräfte kostenlosen Deutschunterricht an." },
        { id: "c", text: "Viele Freiwillige begleiten Geflüchtete zu wichtigen Terminen bei Behörden." },
        { id: "d", text: "Wer eine Familie über längere Zeit unterstützen möchte, kann eine Patenschaft übernehmen." },
        { id: "e", text: "Neue Helferinnen und Helfer erhalten vor ihrem ersten Einsatz eine kurze Schulung." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 6, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit einem Jahr engagiere ich mich ehrenamtlich in der Flüchtlingshilfe unserer Stadt. Zunächst habe ich an einer kurzen Schulung teilgenommen, in der ich viel über die Situation Geflüchteter gelernt habe. Meine Hauptaufgabe ist es, eine Familie zu Behördenterminen zu begleiten und bei Formularen zu helfen. Anfangs war das nicht einfach, weil ich selbst wenig über das Ausländerrecht wusste. Mittlerweile fühle ich mich sicherer und die Familie vertraut mir sehr. Diese Arbeit hat mir gezeigt, wie wichtig persönliche Unterstützung in einer fremden Umgebung sein kann.",
      aussagen: [
        { nr: 1, text: "Die Person engagiert sich seit einem Jahr in der Flüchtlingshilfe.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person hat vor dem Einsatz keine Schulung besucht.", korrekt: false, hinweis: "Gegenteil: 'habe ich an einer kurzen Schulung teilgenommen'." },
        { nr: 3, text: "Die Hauptaufgabe ist die Begleitung zu Behördenterminen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Am Anfang war die Aufgabe für die Person sehr einfach.", korrekt: false, hinweis: "Gegenteil: 'anfangs war das nicht einfach'." },
        { nr: 5, text: "Die Familie vertraut der Person mittlerweile.", korrekt: true, hinweis: "Direkt im Text genannt." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich ehrenamtlich in der Flüchtlingshilfe engagieren." },
        { nr: 2, text: "Sie möchten Deutschunterricht für Geflüchtete geben." },
        { nr: 3, text: "Sie möchten eine Familie zu Behördenterminen begleiten." },
        { nr: 4, text: "Sie möchten eine Patenschaft übernehmen." },
        { nr: 5, text: "Sie suchen eine Schulung für neue Helfer." },
        { nr: 6, text: "Sie möchten Kleidung spenden." },
        { nr: 7, text: "Sie suchen einen Deutschkurs für sich selbst." },
        { nr: 8, text: "Sie möchten Fußball spielen." },
        { nr: 9, text: "Sie suchen eine Wohnung." },
        { nr: 10, text: "Sie möchten als Dolmetscher arbeiten." }
      ],
      anzeigen: [
        { id: "a", text: "Freiwillige für die Flüchtlingshilfe gesucht." },
        { id: "b", text: "Ehrenamtliche Deutschlehrer gesucht." },
        { id: "c", text: "Begleitservice zu Behördenterminen." },
        { id: "d", text: "Patenschaften für geflüchtete Familien." },
        { id: "e", text: "Einführungsschulung für neue Helfer." },
        { id: "f", text: "Dolmetscher-Team der Flüchtlingshilfe." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "f" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit einem Jahr ___(1)___ ich mich ehrenamtlich in der Flüchtlingshilfe. Zunächst habe ich an einer Schulung ___(2)___. Anfangs war das nicht einfach, ___(3)___ ich wenig über das Ausländerrecht wusste. Mittlerweile fühle ich mich sicherer, ___(4)___ die Familie mir vertraut. Diese Arbeit hat mir gezeigt, ___(5)___ wichtig persönliche Unterstützung sein kann.",
      luecken: [
        { nr: 1, o: ["engagiere", "engagierst", "engagieren"], c: 0, h: "ich → engagiere." },
        { nr: 2, o: ["teilgenommen", "genommen", "mitgenommen"], c: 0, h: "'teilnehmen' → teilgenommen." },
        { nr: 3, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 4, o: ["weil", "sodass", "obwohl"], c: 0, h: "Grund/Ursache → weil (die Familie vertraut ihr, deshalb fühlt sie sich sicherer)." },
        { nr: 5, o: ["wie", "dass", "ob"], c: 0, h: "Ausrufe-artige Nebensatzeinleitung → wie." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Ehrenamt", "Schulung", "Begleitung", "Vertrauen", "Geflüchtete"],
      text: "Viele Menschen engagieren sich im ___(6)___ für die Flüchtlingshilfe. Vor dem Einsatz gibt es eine kurze ___(7)___. Eine wichtige Aufgabe ist die ___(8)___ zu Behördenterminen. Dabei entsteht oft großes ___(9)___ zwischen Helfer und Familie. So wird der Alltag für ___(10)___ leichter.",
      loesung: { 6: "Ehrenamt", 7: "Schulung", 8: "Begleitung", 9: "Vertrauen", 10: "Geflüchtete" }
    }
  },

  schreiben: {
    titel: "Schreiben — Persönlicher Brief oder E-Mail",
    anleitung: "Wählen Sie EINE der beiden Aufgaben. Schreiben Sie mindestens 80 Wörter. Gehen Sie auf alle Punkte ein.",
    mindestwoerter: 80,
    aufgaben: [
      {
        nr: 1,
        briefform: "informell",
        situation: "Sie engagieren sich seit Kurzem in der Flüchtlingshilfe. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, wie Sie zu diesem Ehrenamt gekommen sind.", "Berichten Sie, was Ihre Aufgabe ist.", "Fragen Sie, ob die Person auch mitmachen möchte."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an eine Organisation der Flüchtlingshilfe, um sich als ehrenamtlicher Helfer zu bewerben.",
        punkte: ["Stellen Sie sich kurz vor.", "Erklären Sie, warum Sie sich engagieren möchten.", "Fragen Sie nach den nächsten Schritten."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

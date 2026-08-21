// ============================================================
// FLOß Modelltest B2 — Nr. 39
// Gleiches Format wie Nr. 01–38.
// ============================================================

window.MODELLTEST_B2_39 = {
  testKey: "modelltest-b2-39",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 39",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Herausforderungen internationaler Zusammenarbeit" },
        { id: 2, text: "Zeitverschiebung erschwert Terminplanung" },
        { id: 3, text: "Digitale Tools zur Koordination" },
        { id: 4, text: "Gesundheitliche Folgen von Zeitverschiebung" },
        { id: 5, text: "Kulturelle Unterschiede in Meetings" },
        { id: 6, text: "Feste Kernarbeitszeiten als Lösung" },
        { id: 7, text: "Rotierende Meetingzeiten" },
        { id: 8, text: "Verzicht auf internationale Meetings" }
      ],
      texte: [
        { id: "a", text: "Internationale Teams stehen bei der Zusammenarbeit über mehrere Zeitzonen hinweg vor besonderen Herausforderungen." },
        { id: "b", text: "Die Terminfindung wird durch unterschiedliche Zeitzonen erheblich erschwert." },
        { id: "c", text: "Digitale Tools helfen dabei, passende Termine über mehrere Zeitzonen hinweg zu finden." },
        { id: "d", text: "Wiederholte späte oder frühe Meetings können sich negativ auf die Gesundheit auswirken." },
        { id: "e", text: "Manche Teams rotieren die Meetingzeiten, damit die Belastung fair verteilt wird." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Internationale Teams, die über mehrere Zeitzonen hinweg zusammenarbeiten, stehen bei der Terminfindung vor besonderen Herausforderungen. Digitale Tools erleichtern zwar die Koordination, können die grundsätzliche Problematik jedoch nicht vollständig lösen. Wiederholte sehr frühe oder sehr späte Meetings können sich zudem negativ auf Schlaf und Gesundheit der Beteiligten auswirken. Um diese Belastung gerechter zu verteilen, lassen manche Teams die Meetingzeiten regelmäßig rotieren, sodass nicht immer dieselben Mitglieder die unbequemsten Zeiten übernehmen müssen. Experten empfehlen zudem, wichtige Themen möglichst frühzeitig schriftlich vorzubereiten, um die eigentliche Besprechungszeit kurz zu halten.",
      aussagen: [
        { nr: 1, text: "Internationale Teams haben besondere Herausforderungen bei der Terminfindung.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Digitale Tools lösen die Problematik vollständig.", korrekt: false, hinweis: "Gegenteil: 'können die grundsätzliche Problematik jedoch nicht vollständig lösen'." },
        { nr: 3, text: "Frühe oder späte Meetings können die Gesundheit beeinflussen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Alle Teams behalten immer dieselben Meetingzeiten bei.", korrekt: false, hinweis: "Gegenteil: 'lassen manche Teams die Meetingzeiten regelmäßig rotieren'." },
        { nr: 5, text: "Experten empfehlen, sich schriftlich vorzubereiten.", korrekt: true, hinweis: "Direkt im Text genannt." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Projektmanagerin für internationale Teams." },
        { nr: 2, text: "Entwickler für Terminplanungs-Tools." },
        { nr: 3, text: "Arbeitsmediziner, berät zu Schichtarbeit und Zeitzonen." },
        { nr: 4, text: "Trainerin für interkulturelle Kommunikation in Meetings." },
        { nr: 5, text: "HR-Beraterin für globale Teamkoordination." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 10, text: "Journalistin, sucht Redaktionsstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Unternehmen sucht Projektmanager/in für internationale Teams." },
        { id: "b", text: "IT-Firma sucht Entwickler/in für Terminplanungs-Tools." },
        { id: "c", text: "Beratungsstelle sucht Arbeitsmediziner/in." },
        { id: "d", text: "Institut sucht Trainer/in für interkulturelle Kommunikation." },
        { id: "e", text: "Beratungsfirma sucht HR-Beraterin für globale Teams." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Internationale Teams stehen vor Herausforderungen, ___(1)___ sie über mehrere Zeitzonen hinweg arbeiten. Digitale Tools, ___(2)___ die Koordination erleichtern, lösen das Problem nicht vollständig. Meetings, ___(3)___ zu früh oder zu spät stattfinden, können die Gesundheit beeinflussen. Manche Teams, ___(4)___ die Zeiten rotieren lassen, verteilen die Belastung fair. Experten empfehlen, ___(5)___ Themen schriftlich vorzubereiten.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Tools' (Plural) → die." },
        { nr: 3, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Meetings' (Plural) → die." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Teams' (Plural) → die." },
        { nr: 5, o: ["wichtige", "wichtigen", "wichtiger"], c: 0, h: "Adjektivendung Akkusativ Plural ohne Artikel → wichtige." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Zeitzonen", "Terminfindung", "Gesundheit", "rotieren", "vorbereiten"],
      text: "Internationale Teams arbeiten über mehrere ___(6)___ hinweg. Die ___(7)___ wird dadurch erschwert. Frühe oder späte Meetings können die ___(8)___ beeinflussen. Manche Teams lassen die Zeiten ___(9)___. Wichtig ist auch, Themen schriftlich zu ___(10)___.",
      loesung: { 6: "Zeitzonen", 7: "Terminfindung", 8: "Gesundheit", 9: "rotieren", 10: "vorbereiten" }
    }
  },

  schreiben: {
    titel: "Schreiben — Stellungnahme",
    anleitung: "Wählen Sie EINES der beiden Themen. Schreiben Sie eine strukturierte Stellungnahme mit mindestens 200 Wörtern: Einleitung, Argumente für und gegen die These, eigene Meinung, Schluss.",
    mindestwoerter: 200,
    aufgaben: [
      {
        nr: 1,
        briefform: "aufsatz",
        situation: "These: 'Unternehmen sollten feste Kernarbeitszeiten für internationale Meetings vorgeben, auch wenn das für einige Mitarbeiter unbequem ist.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Internationale Zusammenarbeit über Zeitzonen hinweg bringt mehr Nachteile als Vorteile.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

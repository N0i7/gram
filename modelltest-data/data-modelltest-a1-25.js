// ============================================================
// FLOß Modelltest A1 — Nr. 25
// Gleiches Format wie Nr. 01–24.
// ============================================================

window.MODELLTEST_A1_25 = {
  testKey: "modelltest-a1-25",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 25",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Sprachpartner suchen" },
        { id: 2, text: "Zusammen Deutsch üben" },
        { id: 3, text: "Treffen im Café" },
        { id: 4, text: "Online üben" },
        { id: 5, text: "Sprachtandem kostenlos" },
        { id: 6, text: "Neue Wörter lernen" },
        { id: 7, text: "Sprachpartner treffen sich online" },
        { id: 8, text: "Sprachpartner aus Deutschland" }
      ],
      texte: [
        { id: "a", text: "Ich suche einen Sprachpartner, um Deutsch zu üben." },
        { id: "b", text: "Ein Sprachtandem ist kostenlos und macht Spaß." },
        { id: "c", text: "Wir treffen uns einmal pro Woche im Café." },
        { id: "d", text: "Man kann auch online über Video üben." },
        { id: "e", text: "Mein Sprachpartner kommt aus Deutschland." }
      ],
      loesung: { a: 1, b: 5, c: 3, d: 4, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich habe einen Sprachpartner. Er kommt aus Deutschland. Wir treffen uns einmal pro Woche im Café. Das ist kostenlos. Wir üben zusammen Deutsch und Englisch. Ich lerne viele neue Wörter.",
      aussagen: [
        { nr: 1, text: "Die Person hat einen Sprachpartner.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Der Sprachpartner kommt aus Österreich.", korrekt: false, hinweis: "Er kommt aus Deutschland." },
        { nr: 3, text: "Sie treffen sich einmal im Monat.", korrekt: false, hinweis: "Gegenteil: 'einmal pro Woche'." },
        { nr: 4, text: "Das Sprachtandem kostet Geld.", korrekt: false, hinweis: "Gegenteil: 'das ist kostenlos'." },
        { nr: 5, text: "Die Person lernt viele neue Wörter.", korrekt: true, hinweis: "Direkt im letzten Satz." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen einen Sprachpartner." },
        { nr: 2, text: "Sie möchten sich im Café treffen." },
        { nr: 3, text: "Sie möchten online üben." },
        { nr: 4, text: "Sie suchen ein kostenloses Angebot." },
        { nr: 5, text: "Sie möchten neue Wörter lernen." },
        { nr: 6, text: "Sie suchen einen Deutschkurs." },
        { nr: 7, text: "Sie suchen ein Wörterbuch." },
        { nr: 8, text: "Sie suchen ein Buch." }
      ],
      anzeigen: [
        { id: "a", text: "Sprachpartner-Börse — kostenlos anmelden." },
        { id: "b", text: "Café-Treffen für Sprachtandems." },
        { id: "c", text: "Online-Sprachtandem per Video." },
        { id: "d", text: "Sprachtandem ohne Kosten." },
        { id: "e", text: "Vokabeltraining für Anfänger." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ einen Sprachpartner. Er ___(2)___ aus Deutschland. Wir ___(3)___ uns einmal pro Woche. Das ___(4)___ kostenlos. Ich ___(5)___ viele neue Wörter.",
      luecken: [
        { nr: 1, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 2, o: ["kommt", "kommst", "kommen"], c: 0, h: "er → kommt." },
        { nr: 3, o: ["treffen", "trefft", "trifft"], c: 0, h: "wir → treffen." },
        { nr: 4, o: ["ist", "sind", "war"], c: 0, h: "das → ist." },
        { nr: 5, o: ["lerne", "lernst", "lernen"], c: 0, h: "ich → lerne." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["aus", "im", "pro", "mit", "für"],
      text: "Mein Sprachpartner kommt ___(6)___ Deutschland. Wir treffen uns einmal ___(7)___ Woche ___(8)___ Café. Ich übe Deutsch ___(9)___ ihm. Das Sprachtandem ist gut ___(10)___ mich.",
      loesung: { 6: "aus", 7: "pro", 8: "im", 9: "mit", 10: "für" }
    }
  },

  schreiben: {
    titel: "Schreiben — Kurze Nachricht",
    anleitung: "Schreiben Sie eine kurze Nachricht. Schreiben Sie mindestens 20 Wörter. Gehen Sie auf alle Punkte ein.",
    mindestwoerter: 20,
    aufgaben: [
      {
        nr: 1,
        briefform: "informell",
        situation: "Sie schreiben einer Freundin / einem Freund über Ihren neuen Sprachpartner.",
        punkte: ["Sagen Sie, woher der Sprachpartner kommt.", "Sagen Sie, wo Sie sich treffen.", "Fragen Sie, ob die Person auch einen Sprachpartner sucht."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

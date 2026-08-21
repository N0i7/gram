// ============================================================
// FLOß Modelltest A1 — Nr. 11
// Gleiches Format wie Nr. 01–10.
// ============================================================

window.MODELLTEST_A1_11 = {
  testKey: "modelltest-a1-11",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 11",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Bibliothek hat neue Öffnungszeiten" },
        { id: 2, text: "Bücher kostenlos ausleihen" },
        { id: 3, text: "Lesesaal ist ruhig" },
        { id: 4, text: "Kinderbücher gesucht" },
        { id: 5, text: "Bibliotheksausweis beantragen" },
        { id: 6, text: "Bibliothek ist geschlossen" },
        { id: 7, text: "Computer in der Bibliothek nutzen" },
        { id: 8, text: "Bücher zurückbringen" }
      ],
      texte: [
        { id: "a", text: "Die Bibliothek ist jetzt von 9 bis 18 Uhr geöffnet. Vorher war sie nur bis 16 Uhr geöffnet." },
        { id: "b", text: "Mit einem Bibliotheksausweis können Sie Bücher kostenlos ausleihen. Der Ausweis kostet nichts." },
        { id: "c", text: "Bitte bringen Sie ausgeliehene Bücher bis zum 20. des Monats zurück." },
        { id: "d", text: "In der Bibliothek gibt es 5 Computer. Sie können sie eine Stunde pro Tag nutzen." },
        { id: "e", text: "Die Bibliothek ist am Sonntag geschlossen. Bitte kommen Sie an einem anderen Tag." }
      ],
      loesung: { a: 1, b: 2, c: 8, d: 7, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich gehe oft in die Bibliothek. Sie ist von 9 bis 18 Uhr geöffnet. Ich habe einen Bibliotheksausweis. Der Ausweis war kostenlos. Ich leihe gerne Bücher aus. Im Lesesaal ist es sehr ruhig, das mag ich.",
      aussagen: [
        { nr: 1, text: "Die Person geht oft in die Bibliothek.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Bibliothek ist nur bis 16 Uhr geöffnet.", korrekt: false, hinweis: "Sie ist bis 18 Uhr geöffnet." },
        { nr: 3, text: "Die Person hat einen Bibliotheksausweis.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Der Ausweis hat Geld gekostet.", korrekt: false, hinweis: "Gegenteil: 'war kostenlos'." },
        { nr: 5, text: "Die Person mag den ruhigen Lesesaal.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten wissen, wann die Bibliothek geöffnet ist." },
        { nr: 2, text: "Sie möchten einen Bibliotheksausweis." },
        { nr: 3, text: "Sie müssen ein Buch zurückbringen." },
        { nr: 4, text: "Sie möchten einen Computer nutzen." },
        { nr: 5, text: "Sie möchten am Sonntag kommen." },
        { nr: 6, text: "Sie suchen ein Café." },
        { nr: 7, text: "Sie möchten ein Buch kaufen." },
        { nr: 8, text: "Sie suchen einen Sprachkurs." }
      ],
      anzeigen: [
        { id: "a", text: "Bibliothek jetzt geöffnet von 9 bis 18 Uhr." },
        { id: "b", text: "Bibliotheksausweis kostenlos beantragen." },
        { id: "c", text: "Bücher bis zum 20. des Monats zurückbringen." },
        { id: "d", text: "Computer in der Bibliothek nutzen, eine Stunde pro Tag." },
        { id: "e", text: "Bibliothek am Sonntag geschlossen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ oft in die Bibliothek. Sie ___(2)___ von 9 bis 18 Uhr geöffnet. Ich ___(3)___ einen Bibliotheksausweis. ___(4)___ Ausweis war kostenlos. Ich ___(5)___ gerne Bücher aus.",
      luecken: [
        { nr: 1, o: ["gehe", "geht", "gehst"], c: 0, h: "ich → gehe." },
        { nr: 2, o: ["ist", "sind", "bin"], c: 0, h: "sie (Bibliothek) → ist." },
        { nr: 3, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 4, o: ["Der", "Die", "Das"], c: 0, h: "der Ausweis → der." },
        { nr: 5, o: ["leihe", "leiht", "leihen"], c: 0, h: "ich → leihe." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["in", "von", "bis", "am", "für"],
      text: "Ich gehe ___(6)___ die Bibliothek. Sie ist ___(7)___ 9 ___(8)___ 18 Uhr geöffnet. ___(9)___ Sonntag ist sie geschlossen. Der Ausweis ist ___(10)___ mich kostenlos.",
      loesung: { 6: "in", 7: "von", 8: "bis", 9: "am", 10: "für" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über die Bibliothek in Ihrer Stadt.",
        punkte: ["Sagen Sie, wann die Bibliothek geöffnet ist.", "Sagen Sie, was Sie dort machen.", "Fragen Sie, ob die Person mitkommen möchte."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

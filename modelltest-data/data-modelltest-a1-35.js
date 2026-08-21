// ============================================================
// FLOß Modelltest A1 — Nr. 35
// Gleiches Format wie Nr. 01–34.
// ============================================================

window.MODELLTEST_A1_35 = {
  testKey: "modelltest-a1-35",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 35",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Einkaufen für die Nachbarin" },
        { id: 2, text: "Besuch bei der Nachbarin" },
        { id: 3, text: "Zusammen Kaffee trinken" },
        { id: 4, text: "Hilfe mit dem Handy" },
        { id: 5, text: "Nachbarin ist dankbar" },
        { id: 6, text: "Nachbarin zieht um" },
        { id: 7, text: "Nachbarin kocht" },
        { id: 8, text: "Nachbarin ist krank" }
      ],
      texte: [
        { id: "a", text: "Ich kaufe für meine Nachbarin ein." },
        { id: "b", text: "Ich besuche sie jede Woche." },
        { id: "c", text: "Wir trinken zusammen Kaffee." },
        { id: "d", text: "Ich helfe ihr mit dem Handy." },
        { id: "e", text: "Sie ist mir sehr dankbar." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Meine Nachbarin ist schon alt. Ich kaufe für sie ein. Ich besuche sie jede Woche. Wir trinken zusammen Kaffee. Ich helfe ihr auch mit dem Handy. Sie ist mir sehr dankbar.",
      aussagen: [
        { nr: 1, text: "Die Nachbarin ist alt.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person kauft nicht für die Nachbarin ein.", korrekt: false, hinweis: "Gegenteil: 'Ich kaufe für sie ein'." },
        { nr: 3, text: "Die Person besucht die Nachbarin jede Woche.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person hilft nicht mit dem Handy.", korrekt: false, hinweis: "Gegenteil: 'Ich helfe ihr auch mit dem Handy'." },
        { nr: 5, text: "Die Nachbarin ist nicht dankbar.", korrekt: false, hinweis: "Gegenteil: 'Sie ist mir sehr dankbar'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten für eine Nachbarin einkaufen." },
        { nr: 2, text: "Sie möchten eine Nachbarin besuchen." },
        { nr: 3, text: "Sie möchten mit jemandem Kaffee trinken." },
        { nr: 4, text: "Sie möchten einer Person mit dem Handy helfen." },
        { nr: 5, text: "Sie suchen eine Nachbarschaftshilfe-Gruppe." },
        { nr: 6, text: "Sie suchen ein Auto." },
        { nr: 7, text: "Sie suchen eine Wohnung." },
        { nr: 8, text: "Sie suchen ein Fahrrad." }
      ],
      anzeigen: [
        { id: "a", text: "Einkaufshilfe für Nachbarn." },
        { id: "b", text: "Besuchsdienst für Senioren." },
        { id: "c", text: "Kaffeetreffen für Nachbarn." },
        { id: "d", text: "Handyhilfe für ältere Menschen." },
        { id: "e", text: "Nachbarschaftshilfe-Gruppe." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ für meine Nachbarin ein. Ich ___(2)___ sie jede Woche. Wir ___(3)___ zusammen Kaffee. Ich ___(4)___ ihr mit dem Handy. Sie ___(5)___ mir dankbar.",
      luecken: [
        { nr: 1, o: ["kaufe", "kaufst", "kaufen"], c: 0, h: "ich → kaufe." },
        { nr: 2, o: ["besuche", "besuchst", "besuchen"], c: 0, h: "ich → besuche." },
        { nr: 3, o: ["trinken", "trinkt", "trinke"], c: 0, h: "wir → trinken." },
        { nr: 4, o: ["helfe", "hilfst", "helfen"], c: 0, h: "ich → helfe." },
        { nr: 5, o: ["ist", "sind", "bin"], c: 0, h: "sie (Nachbarin) → ist." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["für", "mit", "bei", "jede", "sehr"],
      text: "Ich kaufe ___(6)___ meine Nachbarin ein. Ich helfe ihr ___(7)___ dem Handy. Ich besuche sie ___(8)___ Woche. Wir trinken Kaffee ___(9)___ ihr. Sie ist mir ___(10)___ dankbar.",
      loesung: { 6: "für", 7: "mit", 8: "jede", 9: "bei", 10: "sehr" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihre Hilfe für eine ältere Nachbarin.",
        punkte: ["Sagen Sie, wie Sie helfen.", "Sagen Sie, wie oft Sie helfen.", "Sagen Sie, wie sich die Nachbarin fühlt."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

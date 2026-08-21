// ============================================================
// FLOß Modelltest A1 — Nr. 36
// Gleiches Format wie Nr. 01–35.
// ============================================================

window.MODELLTEST_A1_36 = {
  testKey: "modelltest-a1-36",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 36",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Aufregung vor dem Vortrag" },
        { id: 2, text: "Ruhig atmen" },
        { id: 3, text: "Gut üben" },
        { id: 4, text: "Mit Freunden sprechen" },
        { id: 5, text: "Lächeln hilft" },
        { id: 6, text: "Vortrag verschieben" },
        { id: 7, text: "Wasser trinken" },
        { id: 8, text: "Kaffee vor dem Vortrag" }
      ],
      texte: [
        { id: "a", text: "Vor einem Vortrag bin ich immer aufgeregt." },
        { id: "b", text: "Ich atme dann ruhig." },
        { id: "c", text: "Ich übe den Vortrag oft zu Hause." },
        { id: "d", text: "Ich rede mit Freunden über meine Aufregung." },
        { id: "e", text: "Ein Lächeln hilft mir auch." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Vor einem Vortrag bin ich immer aufgeregt. Ich atme dann ruhig. Ich übe den Vortrag zu Hause. Mit Freunden rede ich über meine Aufregung. Ein Lächeln hilft mir auch. Nach dem Vortrag bin ich stolz.",
      aussagen: [
        { nr: 1, text: "Die Person ist vor dem Vortrag aufgeregt.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Ruhiges Atmen hilft der Person nicht.", korrekt: false, hinweis: "Gegenteil: 'Ich atme dann ruhig' impliziert Hilfe." },
        { nr: 3, text: "Die Person übt den Vortrag zu Hause.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person redet mit niemandem über die Aufregung.", korrekt: false, hinweis: "Gegenteil: 'Mit Freunden rede ich über meine Aufregung'." },
        { nr: 5, text: "Die Person ist nach dem Vortrag nicht stolz.", korrekt: false, hinweis: "Gegenteil: 'Nach dem Vortrag bin ich stolz'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten Atemübungen gegen Aufregung lernen." },
        { nr: 2, text: "Sie suchen einen Kurs für freies Sprechen." },
        { nr: 3, text: "Sie möchten mit anderen über Lampenfieber reden." },
        { nr: 4, text: "Sie suchen Tipps für einen guten Vortrag." },
        { nr: 5, text: "Sie möchten einen Vortrag üben." },
        { nr: 6, text: "Sie suchen ein Auto." },
        { nr: 7, text: "Sie suchen ein Fahrrad." },
        { nr: 8, text: "Sie suchen eine Wohnung." }
      ],
      anzeigen: [
        { id: "a", text: "Atemübungen gegen Aufregung." },
        { id: "b", text: "Kurs: Frei sprechen lernen." },
        { id: "c", text: "Gesprächsgruppe gegen Lampenfieber." },
        { id: "d", text: "Tipps für einen guten Vortrag." },
        { id: "e", text: "Vortrag üben mit Partner." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ vor dem Vortrag aufgeregt. Ich ___(2)___ ruhig. Ich ___(3)___ den Vortrag zu Hause. Ich ___(4)___ mit Freunden darüber. Ich ___(5)___ nach dem Vortrag stolz.",
      luecken: [
        { nr: 1, o: ["bin", "bist", "ist"], c: 0, h: "ich → bin." },
        { nr: 2, o: ["atme", "atmest", "atmen"], c: 0, h: "ich → atme." },
        { nr: 3, o: ["übe", "übst", "üben"], c: 0, h: "ich → übe." },
        { nr: 4, o: ["rede", "redest", "reden"], c: 0, h: "ich → rede." },
        { nr: 5, o: ["bin", "bist", "ist"], c: 0, h: "ich → bin." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["vor", "mit", "über", "nach", "zu"],
      text: "Ich bin ___(6)___ dem Vortrag aufgeregt. Ich rede ___(7)___ Freunden. Wir sprechen ___(8)___ die Aufregung. ___(9)___ dem Vortrag bin ich stolz. Ich übe ___(10)___ Hause.",
      loesung: { 6: "vor", 7: "mit", 8: "über", 9: "nach", 10: "zu" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihr Lampenfieber vor einem Vortrag.",
        punkte: ["Sagen Sie, wann Sie den Vortrag haben.", "Sagen Sie, wie Sie sich fühlen.", "Fragen Sie nach einem Tipp."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

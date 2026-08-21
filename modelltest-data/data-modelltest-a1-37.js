// ============================================================
// FLOß Modelltest A1 — Nr. 37
// Gleiches Format wie Nr. 01–36.
// ============================================================

window.MODELLTEST_A1_37 = {
  testKey: "modelltest-a1-37",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 37",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Urlaub mit dem Wohnmobil" },
        { id: 2, text: "Camping am See" },
        { id: 3, text: "Zelt aufbauen" },
        { id: 4, text: "Lagerfeuer am Abend" },
        { id: 5, text: "Wandern in den Bergen" },
        { id: 6, text: "Camping ist günstig" },
        { id: 7, text: "Regen beim Camping" },
        { id: 8, text: "Camping mit der Familie" }
      ],
      texte: [
        { id: "a", text: "Wir fahren im Sommer mit dem Wohnmobil in den Urlaub." },
        { id: "b", text: "Unser Campingplatz liegt direkt am See." },
        { id: "c", text: "Am ersten Tag bauen wir das Zelt auf." },
        { id: "d", text: "Abends sitzen wir am Lagerfeuer." },
        { id: "e", text: "Am nächsten Tag wandern wir in den Bergen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Im Sommer fahren wir mit dem Wohnmobil in den Urlaub. Unser Campingplatz liegt am See. Wir bauen ein Zelt auf. Abends sitzen wir am Lagerfeuer. Am nächsten Tag wandern wir in den Bergen. Der Urlaub macht uns viel Spaß.",
      aussagen: [
        { nr: 1, text: "Die Familie fährt im Sommer mit dem Wohnmobil.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Der Campingplatz liegt nicht am See.", korrekt: false, hinweis: "Gegenteil: 'Unser Campingplatz liegt am See'." },
        { nr: 3, text: "Sie bauen ein Zelt auf.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Sie sitzen abends nicht am Lagerfeuer.", korrekt: false, hinweis: "Gegenteil: 'Abends sitzen wir am Lagerfeuer'." },
        { nr: 5, text: "Der Urlaub macht keinen Spaß.", korrekt: false, hinweis: "Gegenteil: 'Der Urlaub macht uns viel Spaß'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen ein Wohnmobil zu mieten." },
        { nr: 2, text: "Sie suchen einen Campingplatz am See." },
        { nr: 3, text: "Sie möchten ein Zelt kaufen." },
        { nr: 4, text: "Sie suchen Holz für ein Lagerfeuer." },
        { nr: 5, text: "Sie möchten eine Wandertour in den Bergen machen." },
        { nr: 6, text: "Sie suchen ein Hotel." },
        { nr: 7, text: "Sie suchen ein Flugzeug." },
        { nr: 8, text: "Sie suchen ein Auto." }
      ],
      anzeigen: [
        { id: "a", text: "Wohnmobil mieten — günstige Preise." },
        { id: "b", text: "Campingplatz direkt am See." },
        { id: "c", text: "Zelte und Campingausrüstung." },
        { id: "d", text: "Feuerholz für den Campingplatz." },
        { id: "e", text: "Wandertouren in den Bergen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Wir ___(1)___ im Sommer mit dem Wohnmobil. Der Campingplatz ___(2)___ am See. Wir ___(3)___ ein Zelt auf. Abends ___(4)___ wir am Lagerfeuer. Der Urlaub ___(5)___ uns Spaß.",
      luecken: [
        { nr: 1, o: ["fahren", "fährt", "fahre"], c: 0, h: "wir → fahren." },
        { nr: 2, o: ["liegt", "liegst", "liege"], c: 0, h: "der Campingplatz (er) → liegt." },
        { nr: 3, o: ["bauen", "baut", "baue"], c: 0, h: "wir → bauen." },
        { nr: 4, o: ["sitzen", "sitzt", "sitze"], c: 0, h: "wir → sitzen." },
        { nr: 5, o: ["macht", "machst", "machen"], c: 0, h: "der Urlaub (er) → macht." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["mit", "am", "in", "auf", "am"],
      text: "Wir fahren ___(6)___ dem Wohnmobil. Der Campingplatz liegt ___(7)___ See. Wir bauen das Zelt ___(8)___. Wir wandern ___(9)___ den Bergen. Wir sitzen ___(10)___ Lagerfeuer.",
      loesung: { 6: "mit", 7: "am", 8: "auf", 9: "in", 10: "am" }
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
        situation: "Sie sind im Camping-Urlaub. Sie schreiben einer Freundin / einem Freund eine Nachricht.",
        punkte: ["Sagen Sie, wo Sie sind.", "Sagen Sie, was Sie machen.", "Sagen Sie, wie es Ihnen gefällt."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

// ============================================================
// FLOß Modelltest A1 — Nr. 15
// Gleiches Format wie Nr. 01–14.
// ============================================================

window.MODELLTEST_A1_15 = {
  testKey: "modelltest-a1-15",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 15",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Nachbarin sucht Hilfe beim Einkaufen" },
        { id: 2, text: "Bücher tauschen im Hausflur" },
        { id: 3, text: "Werkzeug ausleihen" },
        { id: 4, text: "Nachbarschaftsfest am Samstag" },
        { id: 5, text: "Kinderkleidung abzugeben" },
        { id: 6, text: "Hilfe beim Umzug gesucht" },
        { id: 7, text: "Fahrrad zu verschenken" },
        { id: 8, text: "Katze suchen" }
      ],
      texte: [
        { id: "a", text: "Ich habe ein altes Fahrrad, das ich nicht mehr brauche. Wer möchte es haben?" },
        { id: "b", text: "Meine Nachbarin ist krank und kann nicht einkaufen gehen. Sie sucht Hilfe." },
        { id: "c", text: "Im Hausflur steht ein Regal mit Büchern. Nehmen Sie eins mit, bringen Sie eins zurück." },
        { id: "d", text: "Am Samstag feiern wir ein Fest für alle Nachbarn im Hof." },
        { id: "e", text: "Ich habe eine Bohrmaschine, die ich gerne verleihe." }
      ],
      loesung: { a: 7, b: 1, c: 2, d: 4, e: 3 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "In meinem Haus gibt es viele nette Nachbarn. Wir helfen uns gegenseitig. Ich leihe manchmal Werkzeug aus. Meine Nachbarin bringt mir oft Obst aus ihrem Garten. Am Samstag feiern wir ein Fest im Hof. Alle Nachbarn sind eingeladen.",
      aussagen: [
        { nr: 1, text: "Die Nachbarn helfen sich gegenseitig.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 2, text: "Die Person leiht niemals Werkzeug aus.", korrekt: false, hinweis: "Gegenteil: 'ich leihe manchmal Werkzeug aus'." },
        { nr: 3, text: "Die Nachbarin bringt oft Obst.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Am Sonntag ist das Fest.", korrekt: false, hinweis: "Das Fest ist am Samstag." },
        { nr: 5, text: "Alle Nachbarn sind zum Fest eingeladen.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie brauchen Hilfe beim Einkaufen." },
        { nr: 2, text: "Sie möchten ein Buch tauschen." },
        { nr: 3, text: "Sie brauchen Werkzeug." },
        { nr: 4, text: "Sie möchten zum Fest gehen." },
        { nr: 5, text: "Sie suchen ein Fahrrad." },
        { nr: 6, text: "Sie suchen einen Handwerker." },
        { nr: 7, text: "Sie möchten eine Wohnung mieten." },
        { nr: 8, text: "Sie suchen einen Babysitter." }
      ],
      anzeigen: [
        { id: "a", text: "Hilfe beim Einkaufen gesucht." },
        { id: "b", text: "Bücherregal im Hausflur zum Tauschen." },
        { id: "c", text: "Bohrmaschine zum Ausleihen." },
        { id: "d", text: "Nachbarschaftsfest am Samstag im Hof." },
        { id: "e", text: "Altes Fahrrad zu verschenken." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "In meinem Haus ___(1)___ es viele nette Nachbarn. Wir ___(2)___ uns gegenseitig. Ich ___(3)___ manchmal Werkzeug aus. Meine Nachbarin ___(4)___ mir oft Obst. Am Samstag ___(5)___ wir ein Fest.",
      luecken: [
        { nr: 1, o: ["gibt", "gebe", "geben"], c: 0, h: "es gibt → gibt." },
        { nr: 2, o: ["helfe", "hilft", "helfen"], c: 2, h: "wir → helfen." },
        { nr: 3, o: ["leihe", "leiht", "leihen"], c: 0, h: "ich → leihe." },
        { nr: 4, o: ["bringe", "bringt", "bringen"], c: 1, h: "sie (Nachbarin) → bringt." },
        { nr: 5, o: ["feiere", "feiert", "feiern"], c: 2, h: "wir → feiern." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["im", "am", "aus", "mit", "von"],
      text: "Wir wohnen ___(6)___ selben Haus. ___(7)___ Samstag feiern wir ein Fest. Meine Nachbarin bringt Obst ___(8)___ ihrem Garten. Ich helfe ___(9)___ Werkzeug. Das Fest ist ___(10)___ allen Nachbarn.",
      loesung: { 6: "im", 7: "am", 8: "aus", 9: "mit", 10: "von" }
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
        situation: "Sie schreiben einer Nachbarin / einem Nachbarn und bieten Hilfe an.",
        punkte: ["Sagen Sie, wobei Sie helfen können.", "Sagen Sie, wann Sie Zeit haben.", "Fragen Sie, ob die Person Hilfe braucht."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

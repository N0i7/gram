// ============================================================
// FLOß Modelltest A1 — Nr. 06
// Gleiches Format wie Nr. 01–05.
// ============================================================

window.MODELLTEST_A1_06 = {
  testKey: "modelltest-a1-06",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 6",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Markt am Mittwoch" },
        { id: 2, text: "Bäckerei hat neue Preise" },
        { id: 3, text: "Obst und Gemüse günstig" },
        { id: 4, text: "Kaffee zu verschenken" },
        { id: 5, text: "Supermarkt hat Sonderangebot" },
        { id: 6, text: "Restaurant sucht Koch" },
        { id: 7, text: "Milch ist heute alle" },
        { id: 8, text: "Neue Kasse im Laden" }
      ],
      texte: [
        { id: "a", text: "Jeden Mittwoch von 7 bis 13 Uhr gibt es Obst und Gemüse auf dem Platz vor der Kirche." },
        { id: "b", text: "Diese Woche kostet Reis nur 1 Euro pro Kilo. Das Angebot gilt bis Samstag." },
        { id: "c", text: "Ab morgen kostet das Brot 50 Cent mehr. Der Kaffee bleibt gleich." },
        { id: "d", text: "Wir haben heute keine Milch mehr. Bitte kommen Sie morgen wieder." },
        { id: "e", text: "Wir suchen einen Koch für den Abend, drei Tage pro Woche." }
      ],
      loesung: { a: 1, b: 5, c: 2, d: 7, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich heiße Liza. Ich gehe jeden Mittwoch auf den Markt. Dort kaufe ich Obst und Gemüse, weil es dort günstig ist. Am Samstag gehe ich in den Supermarkt und kaufe Reis, Milch und Brot. Am Sonntag koche ich für meine Familie. Wir essen gerne Reis mit Gemüse.",
      aussagen: [
        { nr: 1, text: "Liza geht jeden Mittwoch auf den Markt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 2, text: "Liza kauft Obst und Gemüse im Supermarkt.", korrekt: false, hinweis: "Sie kauft Obst und Gemüse auf dem Markt." },
        { nr: 3, text: "Liza geht am Samstag in den Supermarkt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Liza kocht am Montag für ihre Familie.", korrekt: false, hinweis: "Sie kocht am Sonntag." },
        { nr: 5, text: "Die Familie isst gerne Reis mit Gemüse.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten günstiges Obst kaufen." },
        { nr: 2, text: "Sie suchen einen Job als Koch." },
        { nr: 3, text: "Sie möchten Brot kaufen." },
        { nr: 4, text: "Sie brauchen Milch." },
        { nr: 5, text: "Sie möchten Reis günstig kaufen." },
        { nr: 6, text: "Sie suchen ein Restaurant." },
        { nr: 7, text: "Sie möchten Kaffee trinken." },
        { nr: 8, text: "Sie suchen einen Deutschkurs." }
      ],
      anzeigen: [
        { id: "a", text: "Markt jeden Mittwoch, 7–13 Uhr, Obst und Gemüse." },
        { id: "b", text: "Restaurant sucht Koch, drei Tage pro Woche." },
        { id: "c", text: "Bäckerei: Brot ab morgen 50 Cent mehr." },
        { id: "d", text: "Laden: heute keine Milch mehr." },
        { id: "e", text: "Supermarkt: Reis diese Woche 1 Euro pro Kilo." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ jeden Mittwoch auf den Markt. Ich ___(2)___ Obst und Gemüse. ___(3)___ Markt ist günstig. Am Samstag ___(4)___ ich in den Supermarkt. Ich ___(5)___ für meine Familie.",
      luecken: [
        { nr: 1, o: ["gehe", "gehst", "geht"], c: 0, h: "ich → gehe." },
        { nr: 2, o: ["kaufe", "kauft", "kaufen"], c: 0, h: "ich → kaufe." },
        { nr: 3, o: ["Der", "Die", "Das"], c: 0, h: "der Markt → der." },
        { nr: 4, o: ["gehe", "gehst", "geht"], c: 0, h: "ich → gehe." },
        { nr: 5, o: ["koche", "kocht", "kochen"], c: 0, h: "ich → koche." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["auf", "in", "für", "am", "mit"],
      text: "Ich gehe ___(6)___ den Markt. Ich kaufe Reis ___(7)___ dem Supermarkt. Ich koche ___(8)___ meine Familie. ___(9)___ Sonntag essen wir zusammen. Wir essen Reis ___(10)___ Gemüse.",
      loesung: { 6: "auf", 7: "in", 8: "für", 9: "am", 10: "mit" }
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
        situation: "Sie schreiben einer Freundin / einem Freund darüber, wo Sie einkaufen.",
        punkte: ["Sagen Sie, wo Sie einkaufen.", "Sagen Sie, was Sie kaufen.", "Sagen Sie, wann Sie einkaufen gehen."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

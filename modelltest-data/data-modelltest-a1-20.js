// ============================================================
// FLOß Modelltest A1 — Nr. 20
// Gleiches Format wie Nr. 01–19.
// ============================================================

window.MODELLTEST_A1_20 = {
  testKey: "modelltest-a1-20",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 20",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Gelber Sack für Plastik" },
        { id: 2, text: "Papiertonne nur für Papier" },
        { id: 3, text: "Glas in den Container" },
        { id: 4, text: "Restmüll in die graue Tonne" },
        { id: 5, text: "Biomüll richtig trennen" },
        { id: 6, text: "Sperrmüll anmelden" },
        { id: 7, text: "Müllabfuhr kommt am Montag" },
        { id: 8, text: "Batterien im Fachgeschäft abgeben" }
      ],
      texte: [
        { id: "a", text: "Plastikverpackungen gehören in den gelben Sack." },
        { id: "b", text: "In die Papiertonne kommt nur Papier, keine Verpackungen." },
        { id: "c", text: "Glasflaschen bringen Sie bitte zum Glascontainer." },
        { id: "d", text: "Alles, was nicht recycelt werden kann, kommt in die graue Tonne." },
        { id: "e", text: "Essensreste und Obstschalen gehören in die Biotonne." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich trenne meinen Müll jeden Tag. Plastik kommt in den gelben Sack. Papier kommt in die Papiertonne. Essensreste kommen in die Biotonne. Glas bringe ich zum Container. Das ist gut für die Umwelt.",
      aussagen: [
        { nr: 1, text: "Die Person trennt ihren Müll jeden Tag.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Plastik kommt in die Papiertonne.", korrekt: false, hinweis: "Plastik kommt in den gelben Sack." },
        { nr: 3, text: "Essensreste kommen in die Biotonne.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Glas kommt in den gelben Sack.", korrekt: false, hinweis: "Glas kommt zum Container." },
        { nr: 5, text: "Mülltrennung ist gut für die Umwelt.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten Plastik entsorgen." },
        { nr: 2, text: "Sie möchten Papier entsorgen." },
        { nr: 3, text: "Sie möchten Glas entsorgen." },
        { nr: 4, text: "Sie möchten Restmüll entsorgen." },
        { nr: 5, text: "Sie möchten Essensreste entsorgen." },
        { nr: 6, text: "Sie möchten Elektrogeräte entsorgen." },
        { nr: 7, text: "Sie möchten Möbel entsorgen." },
        { nr: 8, text: "Sie möchten Batterien entsorgen." }
      ],
      anzeigen: [
        { id: "a", text: "Gelber Sack für Plastikverpackungen." },
        { id: "b", text: "Papiertonne nur für Papier." },
        { id: "c", text: "Glascontainer für Glasflaschen." },
        { id: "d", text: "Graue Tonne für Restmüll." },
        { id: "e", text: "Biotonne für Essensreste." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ meinen Müll jeden Tag. Plastik ___(2)___ in den gelben Sack. Papier ___(3)___ in die Papiertonne. Essensreste ___(4)___ in die Biotonne. Glas ___(5)___ ich zum Container.",
      luecken: [
        { nr: 1, o: ["trenne", "trennt", "trennen"], c: 0, h: "ich → trenne." },
        { nr: 2, o: ["kommt", "kommen", "komme"], c: 0, h: "Plastik → kommt." },
        { nr: 3, o: ["kommt", "kommen", "komme"], c: 0, h: "Papier → kommt." },
        { nr: 4, o: ["kommt", "kommen", "komme"], c: 1, h: "Essensreste (Plural) → kommen." },
        { nr: 5, o: ["bringe", "bringt", "bringen"], c: 0, h: "ich → bringe." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["in", "zum", "für", "aus", "mit"],
      text: "Plastik kommt ___(6)___ den gelben Sack. Ich bringe Glas ___(7)___ Container. Der gelbe Sack ist ___(8)___ Plastik. Essensreste bestehen ___(9)___ Obst und Gemüse. Ich trenne den Müll ___(10)___ meiner Familie.",
      loesung: { 6: "in", 7: "zum", 8: "für", 9: "aus", 10: "mit" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Mülltrennung.",
        punkte: ["Sagen Sie, wie Sie Ihren Müll trennen.", "Sagen Sie, warum das wichtig ist.", "Fragen Sie, ob die Person auch trennt."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

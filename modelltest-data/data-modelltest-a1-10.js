// ============================================================
// FLOß Modelltest A1 — Nr. 10
// Gleiches Format wie Nr. 01–09.
// ============================================================

window.MODELLTEST_A1_10 = {
  testKey: "modelltest-a1-10",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 10",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Kita hat neue Öffnungszeiten" },
        { id: 2, text: "Kindergarten sucht Kinder" },
        { id: 3, text: "Spielplatz ist neu" },
        { id: 4, text: "Kinderarzt-Termin" },
        { id: 5, text: "Babysitter gesucht" },
        { id: 6, text: "Kita ist geschlossen" },
        { id: 7, text: "Elternabend am Montag" },
        { id: 8, text: "Kinderfest im Park" }
      ],
      texte: [
        { id: "a", text: "Am Montag um 18 Uhr treffen sich alle Eltern in der Kita. Es geht um das neue Schuljahr." },
        { id: "b", text: "Die Kita ist ab jetzt von 7 bis 17 Uhr geöffnet. Vorher war sie nur bis 15 Uhr geöffnet." },
        { id: "c", text: "Am Samstag gibt es ein Fest für Kinder im Park, mit Musik und Spielen." },
        { id: "d", text: "Wir suchen jemanden, der am Nachmittag auf unsere Tochter aufpasst, zweimal pro Woche." },
        { id: "e", text: "Die Kita ist diese Woche geschlossen. Bitte holen Sie Ihr Kind zu Hause ab, es gibt keine Betreuung." }
      ],
      loesung: { a: 7, b: 1, c: 8, d: 5, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Meine Tochter geht in die Kita. Sie ist 3 Jahre alt. Die Kita ist von 7 bis 17 Uhr geöffnet. Ich bringe sie um 8 Uhr hin und hole sie um 16 Uhr ab. Meine Tochter spielt gerne mit anderen Kindern. Am Montag gibt es einen Elternabend, ich gehe hin.",
      aussagen: [
        { nr: 1, text: "Die Tochter ist 5 Jahre alt.", korrekt: false, hinweis: "Sie ist 3 Jahre alt." },
        { nr: 2, text: "Die Kita ist von 7 bis 17 Uhr geöffnet.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Die Mutter bringt die Tochter um 9 Uhr.", korrekt: false, hinweis: "Sie bringt sie um 8 Uhr." },
        { nr: 4, text: "Die Tochter spielt gerne mit anderen Kindern.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Mutter geht nicht zum Elternabend.", korrekt: false, hinweis: "Gegenteil: 'ich gehe hin'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten zum Elternabend gehen." },
        { nr: 2, text: "Sie suchen einen Babysitter." },
        { nr: 3, text: "Sie möchten zum Kinderfest gehen." },
        { nr: 4, text: "Die Kita hat neue Zeiten." },
        { nr: 5, text: "Die Kita ist diese Woche zu." },
        { nr: 6, text: "Sie suchen einen Kindergartenplatz." },
        { nr: 7, text: "Sie möchten einen Spielplatz besuchen." },
        { nr: 8, text: "Sie brauchen einen Kinderarzt." }
      ],
      anzeigen: [
        { id: "a", text: "Elternabend Montag 18 Uhr in der Kita." },
        { id: "b", text: "Babysitter gesucht, zweimal pro Woche." },
        { id: "c", text: "Kinderfest im Park am Samstag." },
        { id: "d", text: "Kita jetzt geöffnet von 7 bis 17 Uhr." },
        { id: "e", text: "Kita diese Woche geschlossen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Meine Tochter ___(1)___ in die Kita. Sie ___(2)___ 3 Jahre alt. Ich ___(3)___ sie um 8 Uhr hin. ___(4)___ Kita ist bis 17 Uhr geöffnet. Sie ___(5)___ gerne mit anderen Kindern.",
      luecken: [
        { nr: 1, o: ["geht", "gehe", "gehst"], c: 0, h: "sie (Tochter) → geht." },
        { nr: 2, o: ["ist", "sind", "bin"], c: 0, h: "sie → ist." },
        { nr: 3, o: ["bringe", "bringt", "bringen"], c: 0, h: "ich → bringe." },
        { nr: 4, o: ["Der", "Die", "Das"], c: 1, h: "die Kita → die." },
        { nr: 5, o: ["spielt", "spiele", "spielen"], c: 0, h: "sie → spielt." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["in", "um", "mit", "bis", "von"],
      text: "Meine Tochter geht ___(6)___ die Kita. Die Kita ist ___(7)___ 7 ___(8)___ 17 Uhr geöffnet. Ich hole sie ___(9)___ 16 Uhr ab. Sie spielt ___(10)___ anderen Kindern.",
      loesung: { 6: "in", 7: "von", 8: "bis", 9: "um", 10: "mit" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über die Kita Ihres Kindes.",
        punkte: ["Sagen Sie, wie alt Ihr Kind ist.", "Sagen Sie, wann die Kita geöffnet ist.", "Sagen Sie, ob Ihrem Kind die Kita gefällt."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

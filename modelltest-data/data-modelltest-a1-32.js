// ============================================================
// FLOß Modelltest A1 — Nr. 32
// Gleiches Format wie Nr. 01–31.
// ============================================================

window.MODELLTEST_A1_32 = {
  testKey: "modelltest-a1-32",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 32",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Fest im Hof" },
        { id: 2, text: "Nachbarn einladen" },
        { id: 3, text: "Essen mitbringen" },
        { id: 4, text: "Musik beim Fest" },
        { id: 5, text: "Fest im Sommer" },
        { id: 6, text: "Tische aufstellen" },
        { id: 7, text: "Fest ist kostenlos" },
        { id: 8, text: "Kinder beim Fest" }
      ],
      texte: [
        { id: "a", text: "Im Hof gibt es ein Nachbarschaftsfest." },
        { id: "b", text: "Alle Nachbarn sind herzlich eingeladen." },
        { id: "c", text: "Jeder bringt etwas zu essen mit." },
        { id: "d", text: "Es gibt Musik beim Fest." },
        { id: "e", text: "Das Fest findet im Sommer statt." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Im Sommer gibt es ein Nachbarschaftsfest in unserem Hof. Alle Nachbarn sind eingeladen. Jeder bringt etwas zu essen mit. Es gibt auch Musik. Die Kinder spielen zusammen. Das Fest ist kostenlos.",
      aussagen: [
        { nr: 1, text: "Das Fest findet im Sommer statt.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Nicht alle Nachbarn sind eingeladen.", korrekt: false, hinweis: "Gegenteil: 'Alle Nachbarn sind eingeladen'." },
        { nr: 3, text: "Jeder bringt etwas zu essen mit.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Es gibt keine Musik.", korrekt: false, hinweis: "Gegenteil: 'Es gibt auch Musik'." },
        { nr: 5, text: "Das Fest kostet Geld.", korrekt: false, hinweis: "Gegenteil: 'Das Fest ist kostenlos'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten zu einem Nachbarschaftsfest gehen." },
        { nr: 2, text: "Sie möchten Essen für das Fest mitbringen." },
        { nr: 3, text: "Sie suchen Musik für das Fest." },
        { nr: 4, text: "Sie möchten Tische für das Fest mieten." },
        { nr: 5, text: "Sie möchten sich als Helfer melden." },
        { nr: 6, text: "Sie suchen ein Restaurant." },
        { nr: 7, text: "Sie suchen ein Auto." },
        { nr: 8, text: "Sie suchen eine Wohnung." }
      ],
      anzeigen: [
        { id: "a", text: "Nachbarschaftsfest im Hof — jetzt anmelden." },
        { id: "b", text: "Essensliste für das Fest." },
        { id: "c", text: "Musiker für Feste gesucht." },
        { id: "d", text: "Tische und Stühle zu mieten." },
        { id: "e", text: "Helfer für das Nachbarschaftsfest gesucht." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Im Sommer ___(1)___ es ein Fest im Hof. Alle Nachbarn ___(2)___ eingeladen. Ich ___(3)___ etwas zu essen mit. Wir ___(4)___ Musik. Die Kinder ___(5)___ zusammen.",
      luecken: [
        { nr: 1, o: ["gibt", "gibst", "geben"], c: 0, h: "es → gibt." },
        { nr: 2, o: ["sind", "ist", "bin"], c: 0, h: "alle Nachbarn (Plural) → sind." },
        { nr: 3, o: ["bringe", "bringst", "bringen"], c: 0, h: "ich → bringe." },
        { nr: 4, o: ["haben", "hat", "habe"], c: 0, h: "wir → haben." },
        { nr: 5, o: ["spielen", "spielt", "spiele"], c: 0, h: "die Kinder (Plural) → spielen." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["im", "zu", "mit", "für", "auf"],
      text: "Das Fest ist ___(6)___ Hof. Jeder bringt etwas ___(7)___ essen mit. Wir feiern ___(8)___ den Nachbarn. Es gibt Musik ___(9)___ alle. Die Kinder spielen ___(10)___ dem Hof.",
      loesung: { 6: "im", 7: "zu", 8: "mit", 9: "für", 10: "auf" }
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
        situation: "Sie schreiben einer Nachbarin / einem Nachbarn über das Nachbarschaftsfest.",
        punkte: ["Sagen Sie, wann das Fest ist.", "Sagen Sie, was Sie mitbringen.", "Fragen Sie, ob die Person auch kommt."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

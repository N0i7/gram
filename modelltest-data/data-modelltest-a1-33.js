// ============================================================
// FLOß Modelltest A1 — Nr. 33
// Gleiches Format wie Nr. 01–32.
// ============================================================

window.MODELLTEST_A1_33 = {
  testKey: "modelltest-a1-33",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 33",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Nervös vor der Prüfung" },
        { id: 2, text: "Tief durchatmen" },
        { id: 3, text: "Gut vorbereitet sein" },
        { id: 4, text: "Mit Freunden reden" },
        { id: 5, text: "Ruhig bleiben" },
        { id: 6, text: "Viel schlafen" },
        { id: 7, text: "Prüfung verschieben" },
        { id: 8, text: "Kaffee trinken" }
      ],
      texte: [
        { id: "a", text: "Vor der Prüfung bin ich immer sehr nervös." },
        { id: "b", text: "Ich atme tief durch, das hilft mir." },
        { id: "c", text: "Wenn ich gut vorbereitet bin, fühle ich mich sicherer." },
        { id: "d", text: "Ich rede mit meinen Freunden über meine Angst." },
        { id: "e", text: "Ich versuche, ruhig zu bleiben." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Vor Prüfungen bin ich immer nervös. Ich atme dann tief durch. Das hilft mir. Ich lerne auch immer gut für die Prüfung. Mit meinen Freunden rede ich über meine Angst. Am Tag der Prüfung versuche ich, ruhig zu bleiben.",
      aussagen: [
        { nr: 1, text: "Die Person ist vor Prüfungen nervös.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Tiefes Atmen hilft der Person nicht.", korrekt: false, hinweis: "Gegenteil: 'Das hilft mir'." },
        { nr: 3, text: "Die Person lernt gut für die Prüfung.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person redet mit niemandem über die Angst.", korrekt: false, hinweis: "Gegenteil: 'Mit meinen Freunden rede ich über meine Angst'." },
        { nr: 5, text: "Die Person bleibt am Prüfungstag nicht ruhig.", korrekt: false, hinweis: "Gegenteil: 'versuche ich, ruhig zu bleiben'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten Atemübungen lernen." },
        { nr: 2, text: "Sie suchen einen Lernplan für die Prüfung." },
        { nr: 3, text: "Sie möchten mit anderen über Prüfungsangst reden." },
        { nr: 4, text: "Sie suchen Entspannungsmusik." },
        { nr: 5, text: "Sie möchten einen Kurs gegen Prüfungsangst besuchen." },
        { nr: 6, text: "Sie suchen ein Auto." },
        { nr: 7, text: "Sie suchen ein Fahrrad." },
        { nr: 8, text: "Sie suchen eine Wohnung." }
      ],
      anzeigen: [
        { id: "a", text: "Atemübungen — kostenloser Kurs." },
        { id: "b", text: "Lernplan-App für Prüfungen." },
        { id: "c", text: "Gesprächsgruppe gegen Prüfungsangst." },
        { id: "d", text: "Entspannungsmusik zum Download." },
        { id: "e", text: "Workshop: Ruhig bleiben vor der Prüfung." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ vor Prüfungen nervös. Ich ___(2)___ tief durch. Ich ___(3)___ immer gut für die Prüfung. Mit Freunden ___(4)___ ich über meine Angst. Ich ___(5)___ ruhig zu bleiben.",
      luecken: [
        { nr: 1, o: ["bin", "bist", "ist"], c: 0, h: "ich → bin." },
        { nr: 2, o: ["atme", "atmest", "atmen"], c: 0, h: "ich → atme." },
        { nr: 3, o: ["lerne", "lernst", "lernen"], c: 0, h: "ich → lerne." },
        { nr: 4, o: ["rede", "redest", "reden"], c: 0, h: "ich → rede." },
        { nr: 5, o: ["versuche", "versuchst", "versuchen"], c: 0, h: "ich → versuche." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["vor", "mit", "für", "über", "bei"],
      text: "Ich bin ___(6)___ der Prüfung nervös. Ich lerne ___(7)___ die Prüfung. Ich rede ___(8)___ Freunden. Wir sprechen ___(9)___ die Angst. ___(10)___ der Prüfung bleibe ich ruhig.",
      loesung: { 6: "vor", 7: "für", 8: "mit", 9: "über", 10: "bei" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihre Prüfungsangst.",
        punkte: ["Sagen Sie, wann Sie eine Prüfung haben.", "Sagen Sie, wie Sie sich fühlen.", "Fragen Sie nach einem Tipp."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

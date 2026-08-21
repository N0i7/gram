// ============================================================
// FLOß Modelltest A1 — Nr. 21
// Gleiches Format wie Nr. 01–20.
// ============================================================

window.MODELLTEST_A1_21 = {
  testKey: "modelltest-a1-21",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 21",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neuer Handytarif im Angebot" },
        { id: 2, text: "Handyvertrag kündigen" },
        { id: 3, text: "Prepaid-Karte kaufen" },
        { id: 4, text: "Handyladen hat neue Öffnungszeiten" },
        { id: 5, text: "Neues Handy im Angebot" },
        { id: 6, text: "Vertrag läuft aus" },
        { id: 7, text: "Handyreparatur" },
        { id: 8, text: "Handy verloren" }
      ],
      texte: [
        { id: "a", text: "Der neue Handytarif kostet 15 Euro im Monat mit viel Datenvolumen." },
        { id: "b", text: "Sie können Ihren Handyvertrag jederzeit online kündigen." },
        { id: "c", text: "Eine Prepaid-Karte kann man im Laden ohne Vertrag kaufen." },
        { id: "d", text: "Der Handyladen ist jetzt von 9 bis 20 Uhr geöffnet." },
        { id: "e", text: "Das neue Smartphone gibt es diese Woche im Angebot." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich möchte meinen Handyvertrag wechseln. Der neue Tarif kostet 15 Euro im Monat. Ich habe viel Datenvolumen. Ich kann den Vertrag online kündigen. Das neue Smartphone gibt es diese Woche im Angebot. Ich möchte es kaufen.",
      aussagen: [
        { nr: 1, text: "Die Person möchte den Handyvertrag wechseln.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Der neue Tarif kostet 25 Euro.", korrekt: false, hinweis: "Er kostet 15 Euro." },
        { nr: 3, text: "Die Person hat wenig Datenvolumen.", korrekt: false, hinweis: "Gegenteil: 'viel Datenvolumen'." },
        { nr: 4, text: "Man kann den Vertrag online kündigen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person möchte das neue Smartphone nicht kaufen.", korrekt: false, hinweis: "Gegenteil: 'ich möchte es kaufen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten einen neuen Handytarif." },
        { nr: 2, text: "Sie möchten Ihren Vertrag kündigen." },
        { nr: 3, text: "Sie möchten eine Prepaid-Karte kaufen." },
        { nr: 4, text: "Sie möchten wissen, wann der Handyladen geöffnet ist." },
        { nr: 5, text: "Sie möchten ein neues Smartphone kaufen." },
        { nr: 6, text: "Sie suchen eine Handyhülle." },
        { nr: 7, text: "Sie möchten Ihr Handy reparieren lassen." },
        { nr: 8, text: "Sie suchen einen Laptop." }
      ],
      anzeigen: [
        { id: "a", text: "Neuer Handytarif, 15 Euro im Monat." },
        { id: "b", text: "Handyvertrag online kündigen." },
        { id: "c", text: "Prepaid-Karte ohne Vertrag." },
        { id: "d", text: "Handyladen geöffnet von 9 bis 20 Uhr." },
        { id: "e", text: "Neues Smartphone im Angebot." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ meinen Handyvertrag wechseln. Der neue Tarif ___(2)___ 15 Euro. Ich ___(3)___ viel Datenvolumen. Ich ___(4)___ den Vertrag online kündigen. Ich ___(5)___ das neue Smartphone kaufen.",
      luecken: [
        { nr: 1, o: ["möchte", "möchtest", "möchten"], c: 0, h: "ich → möchte." },
        { nr: 2, o: ["kostet", "kostest", "kosten"], c: 0, h: "der Tarif → kostet." },
        { nr: 3, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 4, o: ["kann", "kannst", "können"], c: 0, h: "ich → kann." },
        { nr: 5, o: ["möchte", "möchtest", "möchten"], c: 0, h: "ich → möchte." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["im", "von", "bis", "ohne", "für"],
      text: "Der Tarif kostet 15 Euro ___(6)___ Monat. Der Laden ist ___(7)___ 9 ___(8)___ 20 Uhr geöffnet. Eine Prepaid-Karte kann man ___(9)___ Vertrag kaufen. Das Angebot gilt ___(10)___ diese Woche.",
      loesung: { 6: "im", 7: "von", 8: "bis", 9: "ohne", 10: "für" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihren neuen Handytarif.",
        punkte: ["Sagen Sie, was der Tarif kostet.", "Sagen Sie, was Ihnen daran gefällt.", "Fragen Sie, welchen Tarif die Person hat."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

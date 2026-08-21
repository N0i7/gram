// ============================================================
// FLOß Modelltest A1 — Nr. 26
// Gleiches Format wie Nr. 01–25.
// ============================================================

window.MODELLTEST_A1_26 = {
  testKey: "modelltest-a1-26",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 26",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Gebrauchtwagen kaufen" },
        { id: 2, text: "Auto testen" },
        { id: 3, text: "Preis verhandeln" },
        { id: 4, text: "Auto anmelden" },
        { id: 5, text: "Versicherung für das Auto" },
        { id: 6, text: "Auto reparieren" },
        { id: 7, text: "Auto verkaufen" },
        { id: 8, text: "Führerschein machen" }
      ],
      texte: [
        { id: "a", text: "Man kann einen gebrauchten Wagen online oder beim Händler kaufen." },
        { id: "b", text: "Vor dem Kauf sollte man das Auto testen und Probe fahren." },
        { id: "c", text: "Beim Kauf kann man oft noch über den Preis verhandeln." },
        { id: "d", text: "Nach dem Kauf muss man das Auto anmelden." },
        { id: "e", text: "Für das Auto braucht man auch eine Versicherung." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich möchte einen gebrauchten Wagen kaufen. Ich habe ein Auto online gefunden. Ich möchte das Auto testen. Ich möchte auch über den Preis verhandeln. Nach dem Kauf muss ich das Auto anmelden. Ich brauche auch eine Versicherung.",
      aussagen: [
        { nr: 1, text: "Die Person möchte einen gebrauchten Wagen kaufen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person hat das Auto im Laden gefunden.", korrekt: false, hinweis: "Gegenteil: 'ein Auto online gefunden'." },
        { nr: 3, text: "Die Person möchte das Auto nicht testen.", korrekt: false, hinweis: "Gegenteil: 'ich möchte das Auto testen'." },
        { nr: 4, text: "Nach dem Kauf muss man das Auto anmelden.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Man braucht keine Versicherung für das Auto.", korrekt: false, hinweis: "Gegenteil: 'ich brauche auch eine Versicherung'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten einen gebrauchten Wagen kaufen." },
        { nr: 2, text: "Sie möchten ein Auto testen." },
        { nr: 3, text: "Sie möchten über den Preis verhandeln." },
        { nr: 4, text: "Sie möchten Ihr Auto anmelden." },
        { nr: 5, text: "Sie suchen eine Autoversicherung." },
        { nr: 6, text: "Sie suchen einen Führerschein-Kurs." },
        { nr: 7, text: "Sie möchten Ihr Auto verkaufen." },
        { nr: 8, text: "Sie suchen ein Fahrrad." }
      ],
      anzeigen: [
        { id: "a", text: "Gebrauchtwagen online kaufen." },
        { id: "b", text: "Probefahrt vereinbaren." },
        { id: "c", text: "Tipps zum Preisverhandeln." },
        { id: "d", text: "Auto online anmelden." },
        { id: "e", text: "Günstige Autoversicherung." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ einen gebrauchten Wagen kaufen. Ich ___(2)___ ein Auto online gefunden. Ich ___(3)___ das Auto testen. Nach dem Kauf ___(4)___ ich das Auto anmelden. Ich ___(5)___ auch eine Versicherung.",
      luecken: [
        { nr: 1, o: ["möchte", "möchtest", "möchten"], c: 0, h: "ich → möchte." },
        { nr: 2, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 3, o: ["möchte", "möchtest", "möchten"], c: 0, h: "ich → möchte." },
        { nr: 4, o: ["muss", "musst", "müssen"], c: 0, h: "ich → muss." },
        { nr: 5, o: ["brauche", "brauchst", "brauchen"], c: 0, h: "ich → brauche." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["über", "nach", "für", "im", "online"],
      text: "Ich verhandle ___(6)___ den Preis. ___(7)___ dem Kauf melde ich das Auto an. Ich brauche eine Versicherung ___(8)___ das Auto. Ich habe das Auto ___(9)___ gefunden. Der Wagen steht ___(10)___ Internet.",
      loesung: { 6: "über", 7: "nach", 8: "für", 9: "online", 10: "im" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihren neuen gebrauchten Wagen.",
        punkte: ["Sagen Sie, wo Sie das Auto gefunden haben.", "Sagen Sie, was Ihnen daran gefällt.", "Fragen Sie, ob die Person das Auto sehen möchte."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

// ============================================================
// FLOß Modelltest A1 — Nr. 38
// Gleiches Format wie Nr. 01–37.
// ============================================================

window.MODELLTEST_A1_38 = {
  testKey: "modelltest-a1-38",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 38",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Nachbarschafts-Gruppe im Internet" },
        { id: 2, text: "Hilfe von Nachbarn finden" },
        { id: 3, text: "Sachen tauschen" },
        { id: 4, text: "Informationen teilen" },
        { id: 5, text: "Neue Nachbarn kennenlernen" },
        { id: 6, text: "Gruppe ist kostenlos" },
        { id: 7, text: "Gruppe wird geschlossen" },
        { id: 8, text: "Nur für Erwachsene" }
      ],
      texte: [
        { id: "a", text: "In unserer Straße gibt es eine Nachbarschafts-Gruppe im Internet." },
        { id: "b", text: "Dort finde ich schnell Hilfe von Nachbarn." },
        { id: "c", text: "Wir tauschen auch Sachen, die wir nicht mehr brauchen." },
        { id: "d", text: "In der Gruppe teilen wir wichtige Informationen." },
        { id: "e", text: "So lerne ich viele neue Nachbarn kennen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "In unserer Straße gibt es eine Nachbarschafts-Gruppe im Internet. Dort finde ich schnell Hilfe von Nachbarn. Wir tauschen auch Sachen. In der Gruppe teilen wir Informationen. So lerne ich viele neue Nachbarn kennen. Die Gruppe ist kostenlos.",
      aussagen: [
        { nr: 1, text: "Es gibt eine Nachbarschafts-Gruppe im Internet.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person findet dort keine Hilfe.", korrekt: false, hinweis: "Gegenteil: 'Dort finde ich schnell Hilfe von Nachbarn'." },
        { nr: 3, text: "In der Gruppe werden Sachen getauscht.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "In der Gruppe werden keine Informationen geteilt.", korrekt: false, hinweis: "Gegenteil: 'In der Gruppe teilen wir Informationen'." },
        { nr: 5, text: "Die Gruppe kostet Geld.", korrekt: false, hinweis: "Gegenteil: 'Die Gruppe ist kostenlos'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen eine Nachbarschafts-Gruppe im Internet." },
        { nr: 2, text: "Sie möchten Hilfe von Nachbarn finden." },
        { nr: 3, text: "Sie möchten Sachen tauschen." },
        { nr: 4, text: "Sie möchten Informationen teilen." },
        { nr: 5, text: "Sie möchten neue Nachbarn kennenlernen." },
        { nr: 6, text: "Sie suchen ein Auto." },
        { nr: 7, text: "Sie suchen eine Wohnung." },
        { nr: 8, text: "Sie suchen ein Restaurant." }
      ],
      anzeigen: [
        { id: "a", text: "Nachbarschafts-Gruppe — jetzt beitreten." },
        { id: "b", text: "Hilfe von Nachbarn finden." },
        { id: "c", text: "Tauschbörse für Nachbarn." },
        { id: "d", text: "Informationen für die Nachbarschaft." },
        { id: "e", text: "Neue Nachbarn kennenlernen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "In unserer Straße ___(1)___ es eine Nachbarschafts-Gruppe. Ich ___(2)___ dort schnell Hilfe. Wir ___(3)___ auch Sachen. Wir ___(4)___ Informationen. Ich ___(5)___ viele neue Nachbarn kennen.",
      luecken: [
        { nr: 1, o: ["gibt", "gibst", "geben"], c: 0, h: "es → gibt." },
        { nr: 2, o: ["finde", "findest", "finden"], c: 0, h: "ich → finde." },
        { nr: 3, o: ["tauschen", "tauscht", "tausche"], c: 0, h: "wir → tauschen." },
        { nr: 4, o: ["teilen", "teilt", "teile"], c: 0, h: "wir → teilen." },
        { nr: 5, o: ["lerne", "lernst", "lernen"], c: 0, h: "ich → lerne." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["in", "von", "mit", "für", "im"],
      text: "Die Gruppe ist ___(6)___ unserer Straße. Ich finde Hilfe ___(7)___ Nachbarn. Ich tausche Sachen ___(8)___ anderen. Die Gruppe ist gut ___(9)___ die Nachbarschaft. Alles läuft ___(10)___ Internet.",
      loesung: { 6: "in", 7: "von", 8: "mit", 9: "für", 10: "im" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über die Nachbarschafts-Gruppe im Internet.",
        punkte: ["Sagen Sie, was die Gruppe macht.", "Sagen Sie, was Ihnen daran gefällt.", "Fragen Sie, ob die Person auch mitmacht."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

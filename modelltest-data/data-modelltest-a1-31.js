// ============================================================
// FLOß Modelltest A1 — Nr. 31
// Gleiches Format wie Nr. 01–30.
// ============================================================

window.MODELLTEST_A1_31 = {
  testKey: "modelltest-a1-31",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 31",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Erste-Hilfe-Kurs machen" },
        { id: 2, text: "Verband anlegen" },
        { id: 3, text: "Notruf wählen" },
        { id: 4, text: "Kurs ist kostenlos" },
        { id: 5, text: "Erste Hilfe bei Kindern" },
        { id: 6, text: "Kurs dauert einen Tag" },
        { id: 7, text: "Erste-Hilfe-Kasten kaufen" },
        { id: 8, text: "Kurs für den Führerschein" }
      ],
      texte: [
        { id: "a", text: "Ich habe einen Erste-Hilfe-Kurs gemacht." },
        { id: "b", text: "Im Kurs habe ich gelernt, wie man einen Verband anlegt." },
        { id: "c", text: "Bei einem Notfall wählt man die Nummer 112." },
        { id: "d", text: "Der Kurs hat einen ganzen Tag gedauert." },
        { id: "e", text: "Für den Führerschein braucht man einen Erste-Hilfe-Kurs." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 6, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Letzte Woche habe ich einen Erste-Hilfe-Kurs gemacht. Der Kurs hat einen Tag gedauert. Ich habe gelernt, wie man einen Verband anlegt. Ich habe auch gelernt, wie man den Notruf wählt. Der Kurs war für meinen Führerschein nötig. Der Kurs hat mir gut gefallen.",
      aussagen: [
        { nr: 1, text: "Die Person hat letzte Woche einen Kurs gemacht.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Der Kurs hat eine Woche gedauert.", korrekt: false, hinweis: "Gegenteil: 'hat einen Tag gedauert'." },
        { nr: 3, text: "Die Person hat gelernt, einen Verband anzulegen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person hat den Notruf nicht gelernt.", korrekt: false, hinweis: "Gegenteil: 'habe auch gelernt, wie man den Notruf wählt'." },
        { nr: 5, text: "Der Kurs hat der Person nicht gefallen.", korrekt: false, hinweis: "Gegenteil: 'hat mir gut gefallen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten einen Erste-Hilfe-Kurs machen." },
        { nr: 2, text: "Sie suchen einen Erste-Hilfe-Kasten." },
        { nr: 3, text: "Sie möchten wissen, wie man den Notruf wählt." },
        { nr: 4, text: "Sie suchen einen Kurs für den Führerschein." },
        { nr: 5, text: "Sie möchten einen Kurs für Kinder-Erste-Hilfe." },
        { nr: 6, text: "Sie suchen ein Fahrrad." },
        { nr: 7, text: "Sie suchen ein Auto." },
        { nr: 8, text: "Sie suchen ein Taxi." }
      ],
      anzeigen: [
        { id: "a", text: "Erste-Hilfe-Kurs am Wochenende." },
        { id: "b", text: "Erste-Hilfe-Kasten für zu Hause." },
        { id: "c", text: "Ratgeber: Notruf richtig wählen." },
        { id: "d", text: "Führerschein-Erste-Hilfe-Kurs." },
        { id: "e", text: "Erste-Hilfe-Kurs für Eltern." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ einen Erste-Hilfe-Kurs gemacht. Der Kurs ___(2)___ einen Tag gedauert. Ich ___(3)___ gelernt, wie man einen Verband anlegt. Ich ___(4)___ auch den Notruf gelernt. Der Kurs ___(5)___ mir gut gefallen.",
      luecken: [
        { nr: 1, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 2, o: ["hat", "habe", "haben"], c: 0, h: "der Kurs (er) → hat." },
        { nr: 3, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 4, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 5, o: ["hat", "habe", "haben"], c: 0, h: "der Kurs (er) → hat." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["für", "bei", "am", "mit", "in"],
      text: "Der Kurs war wichtig ___(6)___ meinen Führerschein. ___(7)___ einem Notfall wählt man 112. Der Kurs war ___(8)___ Wochenende. Ich habe ___(9)___ anderen Personen geübt. Ich habe viel ___(10)___ dem Kurs gelernt.",
      loesung: { 6: "für", 7: "bei", 8: "am", 9: "mit", 10: "in" }
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
        situation: "Sie haben einen Erste-Hilfe-Kurs gemacht. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Sagen Sie, wann Sie den Kurs gemacht haben.", "Sagen Sie, was Sie gelernt haben.", "Fragen Sie, ob die Person auch einen Kurs machen möchte."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

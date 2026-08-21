// ============================================================
// FLOß Modelltest A2 — Nr. 31
// Gleiches Format wie Nr. 01–30.
// ============================================================

window.MODELLTEST_A2_31 = {
  testKey: "modelltest-a2-31",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 31",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Deutsch als Zweitsprache am Arbeitsplatz" },
        { id: 2, text: "Kollegen helfen beim Deutschlernen" },
        { id: 3, text: "Fachwortschatz lernen" },
        { id: 4, text: "Deutschkurs vom Arbeitgeber" },
        { id: 5, text: "Unsicherheit bei Fachgesprächen" },
        { id: 6, text: "Verbesserung durch Übung im Alltag" },
        { id: 7, text: "Sprachbarrieren im Team" },
        { id: 8, text: "Deutschkenntnisse für die Beförderung" }
      ],
      texte: [
        { id: "a", text: "Viele Menschen lernen Deutsch zusätzlich zu ihrer Muttersprache, um im Beruf besser zurechtzukommen." },
        { id: "b", text: "Kollegen können beim Deutschlernen im Berufsalltag eine große Hilfe sein." },
        { id: "c", text: "Fachwortschatz zu lernen ist besonders wichtig für die tägliche Arbeit." },
        { id: "d", text: "Manche Arbeitgeber bieten kostenlose Deutschkurse für ihre Mitarbeiter an." },
        { id: "e", text: "Regelmäßiges Üben im Alltag verbessert die Sprachkenntnisse deutlich." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Ich arbeite seit einem Jahr in Deutschland und spreche Deutsch als Zweitsprache. Am Anfang hatte ich Schwierigkeiten mit dem Fachwortschatz in meinem Beruf. Meine Kollegen haben mir viel geholfen und mich immer wieder korrigiert. Mein Arbeitgeber bietet außerdem einen kostenlosen Deutschkurs an, den ich jede Woche besuche. Durch das tägliche Üben habe ich mich stark verbessert. Heute fühle ich mich bei Fachgesprächen viel sicherer als früher.",
      aussagen: [
        { nr: 1, text: "Die Person spricht Deutsch als Zweitsprache.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Kollegen haben nicht geholfen.", korrekt: false, hinweis: "Gegenteil: 'Meine Kollegen haben mir viel geholfen'." },
        { nr: 3, text: "Der Arbeitgeber bietet einen kostenlosen Deutschkurs an.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Durch tägliches Üben hat sich die Person stark verbessert.", korrekt: true, hinweis: "Direkt im Text: 'Durch das tägliche Üben habe ich mich stark verbessert.'" },
        { nr: 5, text: "Die Person fühlt sich heute unsicherer als früher.", korrekt: false, hinweis: "Gegenteil: 'fühle ich mich... viel sicherer als früher'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten einen kostenlosen Deutschkurs finden." },
        { nr: 2, text: "Sie suchen Fachwortschatz für Ihren Beruf." },
        { nr: 3, text: "Sie möchten einen Sprachpartner am Arbeitsplatz." },
        { nr: 4, text: "Sie suchen ein Wörterbuch für Fachbegriffe." },
        { nr: 5, text: "Sie möchten Deutschkenntnisse für eine Beförderung nachweisen." },
        { nr: 6, text: "Sie suchen einen Englischkurs." },
        { nr: 7, text: "Sie suchen ein Auto." },
        { nr: 8, text: "Sie suchen eine Wohnung." },
        { nr: 9, text: "Sie suchen einen Handwerker." },
        { nr: 10, text: "Sie suchen ein Restaurant." }
      ],
      anzeigen: [
        { id: "a", text: "Kostenloser Deutschkurs für Berufstätige." },
        { id: "b", text: "Fachwortschatz-Training für den Arbeitsplatz." },
        { id: "c", text: "Sprachpartner-Programm im Betrieb." },
        { id: "d", text: "Fachwörterbuch online." },
        { id: "e", text: "Deutschzertifikat für die Karriere." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich arbeite seit einem Jahr in Deutschland, ___(1)___ ich spreche Deutsch als Zweitsprache. Am Anfang hatte ich Schwierigkeiten, ___(2)___ ich noch wenig Fachwortschatz kannte. Meine Kollegen, ___(3)___ mir geholfen haben, waren sehr geduldig. Mein Arbeitgeber bietet einen Kurs an, ___(4)___ ich jede Woche besuche. Heute fühle ich mich sicherer, ___(5)___ ich viel geübt habe.",
      luecken: [
        { nr: 1, o: ["und", "aber", "oder"], c: 0, h: "Aufzählung → und." },
        { nr: 2, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 3, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Kollegen' (Plural) → die." },
        { nr: 4, o: ["den", "die", "das"], c: 0, h: "Relativpronomen Akkusativ bezogen auf 'Kurs' (maskulin) → den." },
        { nr: 5, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Zweitsprache", "Fachwortschatz", "Kollegen", "Deutschkurs", "sicherer"],
      text: "Viele Menschen sprechen Deutsch als ___(6)___. Am Anfang fehlt oft der ___(7)___. Die ___(8)___ helfen dabei sehr. Ein kostenloser ___(9)___ vom Arbeitgeber ist hilfreich. Mit der Zeit fühlt man sich immer ___(10)___.",
      loesung: { 6: "Zweitsprache", 7: "Fachwortschatz", 8: "Kollegen", 9: "Deutschkurs", 10: "sicherer" }
    }
  },

  schreiben: {
    titel: "Schreiben — Persönliche Nachricht",
    anleitung: "Schreiben Sie eine Nachricht. Schreiben Sie mindestens 40 Wörter. Gehen Sie auf alle Punkte ein.",
    mindestwoerter: 40,
    aufgaben: [
      {
        nr: 1,
        briefform: "informell",
        situation: "Sie haben sich am Arbeitsplatz sprachlich verbessert. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, wie es am Anfang war.", "Berichten Sie, was Ihnen geholfen hat.", "Geben Sie einen Tipp zum Deutschlernen am Arbeitsplatz."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

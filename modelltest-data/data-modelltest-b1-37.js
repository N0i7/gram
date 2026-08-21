// ============================================================
// FLOß Modelltest B1 — Nr. 37
// Gleiches Format wie Nr. 01–36.
// ============================================================

window.MODELLTEST_B1_37 = {
  testKey: "modelltest-b1-37",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 37",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Schock nach der Kündigung" },
        { id: 2, text: "Neue Perspektiven finden" },
        { id: 3, text: "Bewerbungsunterlagen aktualisieren" },
        { id: 4, text: "Unterstützung durch die Arbeitsagentur" },
        { id: 5, text: "Netzwerken nach dem Jobverlust" },
        { id: 6, text: "Finanzielle Sorgen nach der Kündigung" },
        { id: 7, text: "Weiterbildung als Chance" },
        { id: 8, text: "Kündigung wird angefochten" }
      ],
      texte: [
        { id: "a", text: "Eine Kündigung kommt für viele Menschen zunächst wie ein Schock." },
        { id: "b", text: "Nach dem ersten Schreck beginnen viele, neue berufliche Perspektiven zu suchen." },
        { id: "c", text: "Es lohnt sich, den Lebenslauf und die Bewerbungsunterlagen zu aktualisieren." },
        { id: "d", text: "Die Arbeitsagentur bietet Beratung und finanzielle Unterstützung an." },
        { id: "e", text: "Manche nutzen die Zeit nach der Kündigung für eine Weiterbildung." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Als ich meine Kündigung erhielt, war ich zunächst geschockt und wusste nicht, wie es weitergehen sollte. Nach einigen Tagen habe ich angefangen, meinen Lebenslauf zu aktualisieren und mich bei der Arbeitsagentur zu melden. Dort habe ich wertvolle Beratung erhalten. Außerdem habe ich die Zeit genutzt, um eine kurze Weiterbildung zu machen, die mir später bei der Jobsuche geholfen hat. Rückblickend war die Kündigung auch eine Chance für einen beruflichen Neuanfang.",
      aussagen: [
        { nr: 1, text: "Die Person war nach der Kündigung geschockt.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person hat den Lebenslauf nicht aktualisiert.", korrekt: false, hinweis: "Gegenteil: 'habe ich angefangen, meinen Lebenslauf zu aktualisieren'." },
        { nr: 3, text: "Die Arbeitsagentur hat Beratung angeboten.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person hat keine Weiterbildung gemacht.", korrekt: false, hinweis: "Gegenteil: 'habe ich die Zeit genutzt, um eine kurze Weiterbildung zu machen'." },
        { nr: 5, text: "Die Kündigung war für die Person nur negativ.", korrekt: false, hinweis: "Gegenteil: 'war die Kündigung auch eine Chance'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich bei der Arbeitsagentur melden." },
        { nr: 2, text: "Sie suchen Hilfe beim Aktualisieren Ihres Lebenslaufs." },
        { nr: 3, text: "Sie möchten eine Weiterbildung nach der Kündigung machen." },
        { nr: 4, text: "Sie suchen ein Bewerbungscoaching." },
        { nr: 5, text: "Sie möchten sich über Ihre Rechte bei Kündigung informieren." },
        { nr: 6, text: "Sie suchen einen Anwalt für Zivilrecht." },
        { nr: 7, text: "Sie suchen eine Wohnung." },
        { nr: 8, text: "Sie suchen einen Handwerker." },
        { nr: 9, text: "Sie suchen ein Auto." },
        { nr: 10, text: "Sie suchen eine Kita." }
      ],
      anzeigen: [
        { id: "a", text: "Arbeitsagentur — Beratungstermin vereinbaren." },
        { id: "b", text: "Lebenslauf-Check kostenlos." },
        { id: "c", text: "Weiterbildungsangebote nach Kündigung." },
        { id: "d", text: "Bewerbungscoaching für Neuanfänger." },
        { id: "e", text: "Rechtsberatung zu Kündigungsschutz." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Als ich meine Kündigung erhielt, war ich geschockt, ___(1)___ ich nicht wusste, wie es weitergeht. Nach einigen Tagen habe ich begonnen, meinen Lebenslauf zu aktualisieren, ___(2)___ ich mich bei der Arbeitsagentur meldete. Dort, ___(3)___ ich Beratung erhielt, war man sehr hilfsbereit. Ich habe eine Weiterbildung gemacht, ___(4)___ mir später half. Rückblickend war die Kündigung eine Chance, ___(5)___ ich neu anfangen konnte.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["und", "aber", "oder"], c: 0, h: "Aufzählung → und." },
        { nr: 3, o: ["wo", "die", "was"], c: 0, h: "Relativpronomen (Ortsangabe) → wo." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Weiterbildung' (feminin) → die." },
        { nr: 5, o: ["weil", "damit", "obwohl"], c: 0, h: "Begründung → weil." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Kündigung", "Lebenslauf", "Arbeitsagentur", "Weiterbildung", "Neuanfang"],
      text: "Eine ___(6)___ ist für viele zunächst ein Schock. Wichtig ist, den ___(7)___ zu aktualisieren. Die ___(8)___ bietet Beratung an. Eine ___(9)___ kann bei der Jobsuche helfen. Am Ende bedeutet die Kündigung auch einen ___(10)___.",
      loesung: { 6: "Kündigung", 7: "Lebenslauf", 8: "Arbeitsagentur", 9: "Weiterbildung", 10: "Neuanfang" }
    }
  },

  schreiben: {
    titel: "Schreiben — Persönlicher Brief oder E-Mail",
    anleitung: "Wählen Sie EINE der beiden Aufgaben. Schreiben Sie mindestens 80 Wörter. Gehen Sie auf alle Punkte ein.",
    mindestwoerter: 80,
    aufgaben: [
      {
        nr: 1,
        briefform: "informell",
        situation: "Sie haben vor kurzem Ihren Job verloren, aber inzwischen eine neue Perspektive gefunden. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, wie Sie sich zuerst gefühlt haben.", "Berichten Sie, was Ihnen geholfen hat.", "Beschreiben Sie Ihre neuen Pläne."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an die Arbeitsagentur, um einen Beratungstermin nach Ihrer Kündigung zu vereinbaren.",
        punkte: ["Beschreiben Sie Ihre Situation.", "Fragen Sie nach einem Beratungstermin.", "Fragen Sie nach Weiterbildungsmöglichkeiten."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

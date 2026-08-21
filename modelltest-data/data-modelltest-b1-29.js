// ============================================================
// FLOß Modelltest B1 — Nr. 29
// Gleiches Format wie Nr. 01–28.
// ============================================================

window.MODELLTEST_B1_29 = {
  testKey: "modelltest-b1-29",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 29",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Lebensmittel vor der Vernichtung retten" },
        { id: 2, text: "Freiwillige bei der Tafel gesucht" },
        { id: 3, text: "Ausgabe an Bedürftige" },
        { id: 4, text: "Zusammenarbeit mit Supermärkten" },
        { id: 5, text: "Transport der Lebensmittel" },
        { id: 6, text: "Spenden für die Tafel sammeln" },
        { id: 7, text: "Dankbarkeit der Kunden" },
        { id: 8, text: "Öffnungszeiten der Tafel" }
      ],
      texte: [
        { id: "a", text: "Die Tafel rettet überschüssige Lebensmittel, die sonst weggeworfen würden." },
        { id: "b", text: "Immer wieder sucht die Tafel neue ehrenamtliche Helferinnen und Helfer." },
        { id: "c", text: "Bedürftige Menschen können die geretteten Lebensmittel gegen einen kleinen Beitrag abholen." },
        { id: "d", text: "Viele Supermärkte arbeiten mit der Tafel zusammen und stellen überschüssige Ware bereit." },
        { id: "e", text: "Freiwillige holen die Lebensmittel mit dem Auto von den Supermärkten ab und bringen sie zur Ausgabestelle." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit zwei Jahren engagiere ich mich ehrenamtlich bei der Tafel in meiner Stadt. Meine Aufgabe ist es, gemeinsam mit anderen Freiwilligen überschüssige Lebensmittel von Supermärkten abzuholen, die sonst weggeworfen würden. Danach sortieren wir die Lebensmittel und geben sie an Menschen weiter, die sich das Einkaufen nicht immer leisten können. Am Anfang war es ungewohnt für mich, so früh am Morgen zu arbeiten, weil wir meist um sechs Uhr beginnen. Inzwischen macht mir die Arbeit sehr viel Freude, besonders wenn ich sehe, wie dankbar die Menschen für unsere Hilfe sind.",
      aussagen: [
        { nr: 1, text: "Die Person engagiert sich seit zwei Jahren bei der Tafel.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Lebensmittel werden von Supermärkten abgeholt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Die Lebensmittel werden nur an reiche Menschen verteilt.", korrekt: false, hinweis: "Gegenteil: an Menschen, die sich das Einkaufen nicht immer leisten können." },
        { nr: 4, text: "Die Arbeit beginnt meist am Nachmittag.", korrekt: false, hinweis: "Gegenteil: 'wir meist um sechs Uhr beginnen'." },
        { nr: 5, text: "Die Person freut sich über die Dankbarkeit der Menschen.", korrekt: true, hinweis: "Direkt im letzten Satz." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich als Freiwillige/r bei der Tafel melden." },
        { nr: 2, text: "Sie möchten Lebensmittel spenden." },
        { nr: 3, text: "Sie suchen die Öffnungszeiten der Ausgabestelle." },
        { nr: 4, text: "Sie möchten wissen, wer Lebensmittel bei der Tafel abholen kann." },
        { nr: 5, text: "Sie suchen Informationen zum Transport der Lebensmittel." },
        { nr: 6, text: "Sie möchten Geld spenden." },
        { nr: 7, text: "Sie suchen einen Kleiderladen." },
        { nr: 8, text: "Sie suchen eine Suppenküche." },
        { nr: 9, text: "Sie möchten Möbel spenden." },
        { nr: 10, text: "Sie suchen einen Second-Hand-Laden." }
      ],
      anzeigen: [
        { id: "a", text: "Freiwillige für die Tafel gesucht." },
        { id: "b", text: "Lebensmittelspenden willkommen." },
        { id: "c", text: "Öffnungszeiten der Tafel-Ausgabestelle." },
        { id: "d", text: "Wer kann bei der Tafel Lebensmittel abholen?" },
        { id: "e", text: "Fahrer für den Lebensmitteltransport gesucht." },
        { id: "f", text: "Geldspenden für die Tafel." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit zwei Jahren ___(1)___ ich mich ehrenamtlich bei der Tafel. Meine Aufgabe ist es, Lebensmittel abzuholen, ___(2)___ sonst weggeworfen würden. Am Anfang war es ungewohnt, ___(3)___ wir meist um sechs Uhr beginnen. Inzwischen macht mir die Arbeit Freude, ___(4)___ ich sehe, wie dankbar die Menschen sind. Ich helfe gerne, ___(5)___ ich weiß, dass es wichtig ist.",
      luecken: [
        { nr: 1, o: ["engagiere", "engagierst", "engagieren"], c: 0, h: "ich → engagiere." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Lebensmittel' (Plural) → die." },
        { nr: 3, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 4, o: ["wenn", "als", "ob"], c: 0, h: "Wiederholte Handlung → wenn." },
        { nr: 5, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Lebensmittel", "Freiwillige", "Ausgabestelle", "abholen", "dankbar"],
      text: "Die Tafel rettet überschüssige ___(6)___ vor der Vernichtung. Dabei helfen viele ___(7)___. Sie ___(8)___ die Ware bei Supermärkten und bringen sie zur ___(9)___. Viele Kunden sind sehr ___(10)___ für diese Hilfe.",
      loesung: { 6: "Lebensmittel", 7: "Freiwillige", 8: "abholen", 9: "Ausgabestelle", 10: "dankbar" }
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
        situation: "Sie engagieren sich seit Kurzem bei der Tafel. Sie schreiben einer Freundin / einem Freund über Ihre Erfahrungen.",
        punkte: ["Erzählen Sie, wie Sie zu diesem Ehrenamt gekommen sind.", "Berichten Sie, was Ihre Aufgabe ist.", "Fragen Sie, ob die Person auch mitmachen möchte."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an die örtliche Tafel, um sich als ehrenamtlicher Fahrer für den Lebensmitteltransport zu bewerben.",
        punkte: ["Stellen Sie sich kurz vor.", "Erklären Sie, warum Sie sich engagieren möchten.", "Fragen Sie nach den nächsten Schritten."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

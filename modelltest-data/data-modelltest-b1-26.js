// ============================================================
// FLOß Modelltest B1 — Nr. 26
// Gleiches Format wie Nr. 01–25.
// ============================================================

window.MODELLTEST_B1_26 = {
  testKey: "modelltest-b1-26",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 26",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Au-pair-Familie finden" },
        { id: 2, text: "Freiwilligendienst im Ausland" },
        { id: 3, text: "Sprachkenntnisse als Au-pair verbessern" },
        { id: 4, text: "Taschengeld für Au-pairs" },
        { id: 5, text: "Visum für den Freiwilligendienst" },
        { id: 6, text: "Rückkehr nach dem Auslandsjahr" },
        { id: 7, text: "Aufgaben eines Au-pairs" },
        { id: 8, text: "Freizeit während des Au-pair-Jahres" }
      ],
      texte: [
        { id: "a", text: "Über eine Agentur kann man eine passende Gastfamilie im Ausland finden." },
        { id: "b", text: "Ein Au-pair kümmert sich meist um die Kinder der Gastfamilie und hilft im Haushalt." },
        { id: "c", text: "Für den Aufenthalt erhalten Au-pairs ein monatliches Taschengeld von der Gastfamilie." },
        { id: "d", text: "Viele junge Menschen verbessern während ihres Au-pair-Jahres deutlich ihre Sprachkenntnisse." },
        { id: "e", text: "Neben der Arbeit bleibt den meisten Au-pairs auch Zeit für eigene Freizeitaktivitäten." }
      ],
      loesung: { a: 1, b: 7, c: 4, d: 3, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Vor einem Jahr bin ich als Au-pair nach Deutschland gegangen, um meine Deutschkenntnisse zu verbessern und eine neue Kultur kennenzulernen. Meine Gastfamilie hat zwei Kinder, um die ich mich täglich kümmere. Am Anfang war es schwierig, weil ich die Familie und ihre Regeln noch nicht kannte. Nach einigen Wochen habe ich mich aber gut eingelebt und die Kinder mögen mich sehr. Für meine Arbeit bekomme ich ein monatliches Taschengeld, das mir hilft, meinen Alltag zu finanzieren. In meiner Freizeit besuche ich einen Deutschkurs und treffe andere Au-pairs.",
      aussagen: [
        { nr: 1, text: "Die Person ist als Au-pair nach Deutschland gegangen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Gastfamilie hat keine Kinder.", korrekt: false, hinweis: "Gegenteil: 'meine Gastfamilie hat zwei Kinder'." },
        { nr: 3, text: "Der Anfang war für die Person einfach.", korrekt: false, hinweis: "Gegenteil: 'am Anfang war es schwierig'." },
        { nr: 4, text: "Die Person bekommt ein monatliches Taschengeld.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person besucht in ihrer Freizeit keinen Deutschkurs.", korrekt: false, hinweis: "Gegenteil: 'besuche ich einen Deutschkurs'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten als Au-pair ins Ausland gehen." },
        { nr: 2, text: "Sie suchen einen Freiwilligendienst im Ausland." },
        { nr: 3, text: "Sie brauchen Informationen zum Visum." },
        { nr: 4, text: "Sie möchten Ihre Sprachkenntnisse verbessern." },
        { nr: 5, text: "Sie suchen einen Deutschkurs für Au-pairs." },
        { nr: 6, text: "Sie möchten eine Gastfamilie finden." },
        { nr: 7, text: "Sie suchen eine Wohnung im Ausland." },
        { nr: 8, text: "Sie möchten eine Ausbildung im Ausland machen." },
        { nr: 9, text: "Sie suchen einen Ferienjob." },
        { nr: 10, text: "Sie möchten studieren." }
      ],
      anzeigen: [
        { id: "a", text: "Agentur vermittelt Au-pair-Stellen im Ausland." },
        { id: "b", text: "Freiwilligendienst-Programme weltweit." },
        { id: "c", text: "Visa-Beratung für Au-pairs und Freiwillige." },
        { id: "d", text: "Sprachkurse für Au-pairs vor Ort." },
        { id: "e", text: "Deutschkurs speziell für Au-pairs." },
        { id: "f", text: "Gastfamilien-Vermittlung." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Vor einem Jahr ___(1)___ ich als Au-pair nach Deutschland gegangen, ___(2)___ meine Deutschkenntnisse zu verbessern. Am Anfang war es schwierig, ___(3)___ ich die Familie noch nicht kannte. Nach einigen Wochen habe ich mich gut eingelebt, ___(4)___ die Kinder mich mögen. Für meine Arbeit bekomme ich ein Taschengeld, ___(5)___ mir hilft, meinen Alltag zu finanzieren.",
      luecken: [
        { nr: 1, o: ["bin", "habe", "war"], c: 0, h: "Perfekt mit sein: bin gegangen." },
        { nr: 2, o: ["um", "damit", "dass"], c: 0, h: "'um... zu' + Infinitiv." },
        { nr: 3, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 4, o: ["weil", "sodass", "obwohl"], c: 1, h: "Folge → sodass." },
        { nr: 5, o: ["das", "die", "was"], c: 0, h: "Relativpronomen bezogen auf 'Taschengeld' (neutrum) → das." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Gastfamilie", "Taschengeld", "eingelebt", "Sprachkenntnisse", "Kinderbetreuung"],
      text: "Ein Au-pair lebt bei einer ___(6)___ und kümmert sich um die ___(7)___. Dafür bekommt man ein monatliches ___(8)___. Nach einigen Wochen hat man sich meist gut ___(9)___. Viele verbessern ihre ___(10)___ deutlich.",
      loesung: { 6: "Gastfamilie", 7: "Kinderbetreuung", 8: "Taschengeld", 9: "eingelebt", 10: "Sprachkenntnisse" }
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
        situation: "Sie sind seit einigen Monaten als Au-pair im Ausland. Sie schreiben einer Freundin / einem Freund über Ihre Erfahrungen.",
        punkte: ["Erzählen Sie, wie der Anfang war.", "Berichten Sie, was Ihre Aufgaben sind.", "Geben Sie einen Tipp für ein Au-pair-Jahr."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an eine Agentur, um sich nach einer Au-pair-Stelle im Ausland zu erkundigen.",
        punkte: ["Stellen Sie sich kurz vor.", "Fragen Sie nach den Voraussetzungen.", "Fragen Sie nach dem weiteren Ablauf."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

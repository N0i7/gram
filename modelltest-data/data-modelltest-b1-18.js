// ============================================================
// FLOß Modelltest B1 — Nr. 18
// Gleiches Format wie Nr. 01–17.
// ============================================================

window.MODELLTEST_B1_18 = {
  testKey: "modelltest-b1-18",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 18",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Videoanrufe halten Familie verbunden" },
        { id: 2, text: "Familiennachzug beantragen" },
        { id: 3, text: "Heimweh trotz gutem Leben" },
        { id: 4, text: "Besuch der Familie im Urlaub" },
        { id: 5, text: "Kinder wachsen getrennt von Großeltern auf" },
        { id: 6, text: "Geld an die Familie schicken" },
        { id: 7, text: "Rückkehr nach vielen Jahren" },
        { id: 8, text: "Neue Freunde als Ersatzfamilie" }
      ],
      texte: [
        { id: "a", text: "Dank Videoanrufen kann ich fast jeden Tag mit meiner Familie sprechen, obwohl wir tausende Kilometer voneinander entfernt leben." },
        { id: "b", text: "Nach einigen Jahren im Ausland kann man einen Antrag stellen, damit Familienmitglieder nachziehen dürfen." },
        { id: "c", text: "Obwohl ich hier ein gutes Leben habe, vermisse ich manchmal meine Heimat sehr stark." },
        { id: "d", text: "Jedes Jahr im Sommer fliege ich für drei Wochen in meine Heimat, um meine Familie zu besuchen." },
        { id: "e", text: "Ich schicke regelmäßig Geld an meine Eltern, um sie finanziell zu unterstützen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Vor fünf Jahren bin ich für die Arbeit ins Ausland gezogen, während meine Familie in der Heimat geblieben ist. Am Anfang war es sehr schwer, weil ich meine Eltern und Geschwister sehr vermisst habe. Dank moderner Technik kann ich aber fast täglich mit ihnen telefonieren oder Videoanrufe machen. Einmal im Jahr fliege ich für drei Wochen nach Hause, das ist immer ein besonderer Moment für uns alle. Manchmal überlege ich, ob ich einen Antrag auf Familiennachzug stellen soll, damit meine Familie näher bei mir sein kann. Diese Entscheidung ist jedoch nicht einfach, weil meine Eltern in ihrer Heimat verwurzelt sind.",
      aussagen: [
        { nr: 1, text: "Die Person ist vor fünf Jahren für die Arbeit ins Ausland gezogen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Am Anfang war die Trennung von der Familie leicht.", korrekt: false, hinweis: "Gegenteil: 'sehr schwer'." },
        { nr: 3, text: "Die Person kann fast täglich mit der Familie telefonieren.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person fliegt nie nach Hause, um die Familie zu besuchen.", korrekt: false, hinweis: "Gegenteil: 'einmal im Jahr fliege ich... nach Hause'." },
        { nr: 5, text: "Die Entscheidung über den Familiennachzug ist für die Person einfach.", korrekt: false, hinweis: "Gegenteil: 'diese Entscheidung ist jedoch nicht einfach'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten einen Familiennachzug beantragen." },
        { nr: 2, text: "Sie suchen eine günstige Möglichkeit für Videoanrufe." },
        { nr: 3, text: "Sie möchten Geld ins Ausland überweisen." },
        { nr: 4, text: "Sie suchen günstige Flüge in Ihre Heimat." },
        { nr: 5, text: "Sie brauchen Beratung bei Heimweh." },
        { nr: 6, text: "Sie möchten eine Sprachreise machen." },
        { nr: 7, text: "Sie suchen eine WG mit Landsleuten." },
        { nr: 8, text: "Sie möchten Ihre Kinder in die Heimat schicken." },
        { nr: 9, text: "Sie suchen eine internationale Schule." },
        { nr: 10, text: "Sie möchten dauerhaft zurückkehren." }
      ],
      anzeigen: [
        { id: "a", text: "Familiennachzug: Beratung und Antragshilfe." },
        { id: "b", text: "App für kostenlose Videoanrufe ins Ausland." },
        { id: "c", text: "Geldüberweisung ins Ausland, günstige Gebühren." },
        { id: "d", text: "Günstige Flüge in viele Länder weltweit." },
        { id: "e", text: "Beratungsstelle für Menschen mit Heimweh." },
        { id: "f", text: "Sprachreisen für Erwachsene, verschiedene Länder." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Vor fünf Jahren ___(1)___ ich für die Arbeit ins Ausland gezogen. Am Anfang ___(2)___ es sehr schwer, ___(3)___ ich meine Familie sehr vermisst habe. Dank moderner Technik ___(4)___ ich aber fast täglich mit ihnen telefonieren. Manchmal überlege ich, ___(5)___ ich einen Antrag stellen soll.",
      luecken: [
        { nr: 1, o: ["bin", "habe", "war"], c: 0, h: "Perfekt mit sein: bin gezogen." },
        { nr: 2, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 3, o: ["weil", "obwohl", "damit"], c: 0, h: "Grund → weil." },
        { nr: 4, o: ["kann", "könnte", "konnte"], c: 0, h: "Gegenwart → kann." },
        { nr: 5, o: ["ob", "dass", "wie"], c: 0, h: "indirekte Frage → ob." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Heimweh", "verbunden", "Familiennachzug", "verwurzelt", "vermissen"],
      text: "Viele Menschen im Ausland leiden manchmal an ___(6)___. Videoanrufe halten die Familie ___(7)___. Manche stellen einen Antrag auf ___(8)___. Die Eltern sind oft in ihrer Heimat ___(9)___. Trotzdem wird man die Familie immer ___(10)___.",
      loesung: { 6: "Heimweh", 7: "verbunden", 8: "Familiennachzug", 9: "verwurzelt", 10: "vermissen" }
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
        situation: "Sie leben seit einiger Zeit im Ausland, weit weg von Ihrer Familie. Sie schreiben Ihren Eltern.",
        punkte: ["Erzählen Sie, wie es Ihnen geht.", "Berichten Sie, wie Sie mit der Familie in Kontakt bleiben.", "Fragen Sie, wie es zu Hause geht."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an eine Behörde, um sich nach dem Familiennachzug zu erkundigen.",
        punkte: ["Stellen Sie sich kurz vor.", "Erklären Sie Ihre Situation.", "Fragen Sie nach den nötigen Unterlagen."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

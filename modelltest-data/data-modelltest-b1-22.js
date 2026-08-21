// ============================================================
// FLOß Modelltest B1 — Nr. 22
// Gleiches Format wie Nr. 01–21.
// ============================================================

window.MODELLTEST_B1_22 = {
  testKey: "modelltest-b1-22",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 22",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neuer Job im Ausland" },
        { id: 2, text: "Abschied von Freunden schwerfällt" },
        { id: 3, text: "Umzugsunternehmen beauftragen" },
        { id: 4, text: "Behördengänge vor dem Umzug" },
        { id: 5, text: "Erste Wochen im neuen Land" },
        { id: 6, text: "Sprachprobleme im Alltag" },
        { id: 7, text: "Heimweh nach der Familie" },
        { id: 8, text: "Neue Wohnung im Ausland finden" }
      ],
      texte: [
        { id: "a", text: "Wegen eines neuen Jobs im Ausland zieht die ganze Familie in ein anderes Land um." },
        { id: "b", text: "Vor dem Umzug müssen noch einige Formulare bei verschiedenen Behörden ausgefüllt werden." },
        { id: "c", text: "Ein Umzugsunternehmen kümmert sich um den Transport der Möbel ins neue Land." },
        { id: "d", text: "In den ersten Wochen am neuen Ort muss man sich erst an vieles gewöhnen." },
        { id: "e", text: "Der Abschied von langjährigen Freunden fällt vielen Menschen sehr schwer." }
      ],
      loesung: { a: 1, b: 4, c: 3, d: 5, e: 2 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Vor einem Jahr sind wir wegen meines neuen Jobs ins Ausland gezogen. Der Abschied von unseren Freunden und der Familie fiel uns sehr schwer, obwohl wir wussten, dass diese Entscheidung beruflich richtig war. Vor dem Umzug mussten wir viele Behördengänge erledigen, was viel Zeit gekostet hat. Ein Umzugsunternehmen hat uns geholfen, unsere Möbel sicher zu transportieren. In den ersten Wochen am neuen Ort war vieles ungewohnt, besonders die Sprache und die andere Kultur. Mittlerweile haben wir uns gut eingelebt, auch wenn wir unsere Familie manchmal sehr vermissen.",
      aussagen: [
        { nr: 1, text: "Die Familie ist wegen eines neuen Jobs umgezogen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Der Abschied von Freunden fiel der Familie leicht.", korrekt: false, hinweis: "Gegenteil: 'fiel uns sehr schwer'." },
        { nr: 3, text: "Vor dem Umzug mussten viele Behördengänge erledigt werden.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Familie hat den Umzug ohne Hilfe organisiert.", korrekt: false, hinweis: "Gegenteil: 'Ein Umzugsunternehmen hat uns geholfen'." },
        { nr: 5, text: "Die Familie vermisst ihre Verwandten nie.", korrekt: false, hinweis: "Gegenteil: 'vermissen wir unsere Familie manchmal sehr'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten ins Ausland umziehen." },
        { nr: 2, text: "Sie suchen ein Umzugsunternehmen." },
        { nr: 3, text: "Sie brauchen Hilfe bei Behördengängen vor dem Umzug." },
        { nr: 4, text: "Sie möchten eine Wohnung im Ausland finden." },
        { nr: 5, text: "Sie suchen Tipps für die ersten Wochen am neuen Ort." },
        { nr: 6, text: "Sie möchten die Landessprache lernen." },
        { nr: 7, text: "Sie suchen eine internationale Schule für Ihr Kind." },
        { nr: 8, text: "Sie möchten Ihre Möbel verkaufen." },
        { nr: 9, text: "Sie suchen eine Rückflugmöglichkeit." },
        { nr: 10, text: "Sie möchten Urlaub in der Heimat machen." }
      ],
      anzeigen: [
        { id: "a", text: "Beratung: Umzug ins Ausland planen." },
        { id: "b", text: "Umzugsunternehmen für internationale Umzüge." },
        { id: "c", text: "Checkliste: Behördengänge vor dem Umzug." },
        { id: "d", text: "Wohnungssuche im Ausland, internationale Plattform." },
        { id: "e", text: "Ratgeber: Die ersten Wochen im neuen Land." },
        { id: "f", text: "Intensivsprachkurs vor dem Umzug." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Vor einem Jahr ___(1)___ wir wegen meines neuen Jobs ins Ausland gezogen. Der Abschied ___(2)___ uns sehr schwer, ___(3)___ wir wussten, dass die Entscheidung richtig war. Vor dem Umzug ___(4)___ wir viele Behördengänge erledigen. Mittlerweile haben wir uns gut eingelebt, ___(5)___ wir unsere Familie manchmal vermissen.",
      luecken: [
        { nr: 1, o: ["sind", "haben", "waren"], c: 0, h: "Perfekt mit sein: sind gezogen." },
        { nr: 2, o: ["fiel", "fällt", "fiele"], c: 0, h: "Präteritum → fiel." },
        { nr: 3, o: ["obwohl", "weil", "damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 4, o: ["mussten", "müssen", "müssten"], c: 0, h: "Präteritum → mussten." },
        { nr: 5, o: ["auch wenn", "damit", "sodass"], c: 0, h: "Einräumung → auch wenn." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Umzug", "eingelebt", "Behördengänge", "ungewohnt", "vermissen"],
      text: "Der ___(6)___ ins Ausland war eine große Veränderung. Vor dem Umzug mussten viele ___(7)___ erledigt werden. In den ersten Wochen war vieles ___(8)___. Mittlerweile haben wir uns gut ___(9)___. Trotzdem ___(10)___ wir unsere Familie manchmal.",
      loesung: { 6: "Umzug", 7: "Behördengänge", 8: "ungewohnt", 9: "eingelebt", 10: "vermissen" }
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
        situation: "Sie sind kürzlich ins Ausland gezogen. Sie schreiben einer Freundin / einem Freund über die ersten Wochen.",
        punkte: ["Erzählen Sie, wie der Umzug war.", "Berichten Sie, was für Sie ungewohnt ist.", "Fragen Sie, wie es zu Hause geht."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an ein Umzugsunternehmen, um sich nach einem internationalen Umzug zu erkundigen.",
        punkte: ["Beschreiben Sie Ihre Situation.", "Fragen Sie nach den Kosten und dem Ablauf.", "Fragen Sie nach einem möglichen Termin."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

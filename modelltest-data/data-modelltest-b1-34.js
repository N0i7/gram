// ============================================================
// FLOß Modelltest B1 — Nr. 34
// Gleiches Format wie Nr. 01–33.
// ============================================================

window.MODELLTEST_B1_34 = {
  testKey: "modelltest-b1-34",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 34",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Homeschooling während der Arbeitszeit" },
        { id: 2, text: "Zeitplan für Homeschooling und Beruf" },
        { id: 3, text: "Unterstützung durch den Arbeitgeber" },
        { id: 4, text: "Homeschooling nur in den Ferien" },
        { id: 5, text: "Belastung für berufstätige Eltern" },
        { id: 6, text: "Gemeinsames Lernen mit anderen Familien" },
        { id: 7, text: "Digitale Lernplattformen nutzen" },
        { id: 8, text: "Homeschooling wird abgeschafft" }
      ],
      texte: [
        { id: "a", text: "Berufstätige Eltern, die ihre Kinder zu Hause unterrichten, stehen vor besonderen Herausforderungen." },
        { id: "b", text: "Ein fester Zeitplan hilft dabei, Homeschooling und Beruf besser zu vereinbaren." },
        { id: "c", text: "Manche Arbeitgeber zeigen Verständnis und bieten flexible Arbeitszeiten an." },
        { id: "d", text: "Digitale Lernplattformen erleichtern den Unterricht zu Hause erheblich." },
        { id: "e", text: "Manche Familien schließen sich zusammen, um gemeinsam zu unterrichten." }
      ],
      loesung: { a: 5, b: 2, c: 3, d: 7, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit meine Kinder zu Hause unterrichtet werden, ist mein Alltag deutlich anspruchsvoller geworden, weil ich Beruf und Homeschooling miteinander vereinbaren muss. Ein fester Zeitplan hat mir sehr geholfen, den Tag besser zu strukturieren. Glücklicherweise zeigt mein Arbeitgeber Verständnis für meine Situation und erlaubt mir flexible Arbeitszeiten. Außerdem nutze ich digitale Lernplattformen, die den Unterricht erheblich erleichtern. Manchmal unterrichte ich gemeinsam mit einer befreundeten Familie, was den Kindern zusätzlich Spaß macht.",
      aussagen: [
        { nr: 1, text: "Der Alltag ist seit dem Homeschooling anspruchsvoller geworden.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Ein fester Zeitplan hat nicht geholfen.", korrekt: false, hinweis: "Gegenteil: 'hat mir sehr geholfen'." },
        { nr: 3, text: "Der Arbeitgeber zeigt Verständnis.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Digitale Lernplattformen werden nicht genutzt.", korrekt: false, hinweis: "Gegenteil: 'nutze ich digitale Lernplattformen'." },
        { nr: 5, text: "Die Person unterrichtet nie mit anderen Familien zusammen.", korrekt: false, hinweis: "Gegenteil: 'unterrichte ich gemeinsam mit einer befreundeten Familie'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen eine digitale Lernplattform für Homeschooling." },
        { nr: 2, text: "Sie möchten sich mit anderen Homeschooling-Familien vernetzen." },
        { nr: 3, text: "Sie möchten mit Ihrem Arbeitgeber über flexible Arbeitszeiten sprechen." },
        { nr: 4, text: "Sie suchen einen Zeitplan-Vorlage für Homeschooling." },
        { nr: 5, text: "Sie möchten sich über die rechtlichen Grundlagen des Homeschoolings informieren." },
        { nr: 6, text: "Sie suchen eine Nachhilfelehrerin." },
        { nr: 7, text: "Sie suchen eine Kita." },
        { nr: 8, text: "Sie suchen ein Auto." },
        { nr: 9, text: "Sie suchen eine Wohnung." },
        { nr: 10, text: "Sie suchen ein Restaurant." }
      ],
      anzeigen: [
        { id: "a", text: "Digitale Lernplattform für zu Hause." },
        { id: "b", text: "Netzwerk für Homeschooling-Familien." },
        { id: "c", text: "Beratung zu flexiblen Arbeitszeiten." },
        { id: "d", text: "Kostenlose Zeitplan-Vorlage für Homeschooling." },
        { id: "e", text: "Rechtliche Informationen zum Homeschooling." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit meine Kinder zu Hause unterrichtet werden, ist mein Alltag anspruchsvoller, ___(1)___ ich Beruf und Homeschooling vereinbaren muss. Ein fester Zeitplan hat geholfen, ___(2)___ den Tag zu strukturieren. Mein Arbeitgeber, ___(3)___ Verständnis zeigt, erlaubt flexible Arbeitszeiten. Digitale Plattformen, ___(4)___ ich täglich nutze, erleichtern den Unterricht. Manchmal unterrichte ich mit einer Familie zusammen, ___(5)___ das den Kindern Spaß macht.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["um", "damit", "dass"], c: 0, h: "'um... zu' + Infinitiv." },
        { nr: 3, o: ["der", "die", "das"], c: 0, h: "Relativpronomen Nominativ bezogen auf 'Arbeitgeber' (maskulin) → der." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Plattformen' (Plural) → die." },
        { nr: 5, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Homeschooling", "Zeitplan", "Arbeitgeber", "Lernplattform", "flexibel"],
      text: "___(6)___ stellt berufstätige Eltern vor Herausforderungen. Ein fester ___(7)___ hilft bei der Organisation. Manche ___(8)___ zeigen Verständnis. Eine digitale ___(9)___ erleichtert den Unterricht. Flexible Arbeitszeiten sind besonders ___(10)___.",
      loesung: { 6: "Homeschooling", 7: "Zeitplan", 8: "Arbeitgeber", 9: "Lernplattform", 10: "flexibel" }
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
        situation: "Sie unterrichten Ihre Kinder zu Hause und arbeiten gleichzeitig. Sie schreiben einer Freundin / einem Freund über Ihren Alltag.",
        punkte: ["Beschreiben Sie Ihren Tagesablauf.", "Erzählen Sie, was Ihnen dabei hilft.", "Fragen Sie nach Erfahrungen der Person."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an Ihren Arbeitgeber, um wegen des Homeschoolings Ihrer Kinder flexible Arbeitszeiten zu beantragen.",
        punkte: ["Beschreiben Sie Ihre Situation.", "Erklären Sie Ihren Wunsch nach Flexibilität.", "Schlagen Sie einen Termin für ein Gespräch vor."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

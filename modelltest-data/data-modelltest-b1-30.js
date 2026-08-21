// ============================================================
// FLOß Modelltest B1 — Nr. 30
// Gleiches Format wie Nr. 01–29.
// ============================================================

window.MODELLTEST_B1_30 = {
  testKey: "modelltest-b1-30",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 30",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Rückkehr in den Beruf nach der Elternzeit" },
        { id: 2, text: "Wiedereinstieg in Teilzeit" },
        { id: 3, text: "Unsicherheit vor dem ersten Arbeitstag" },
        { id: 4, text: "Neue Aufgaben nach der Rückkehr" },
        { id: 5, text: "Kinderbetreuung organisieren" },
        { id: 6, text: "Gespräch mit dem Arbeitgeber vor der Rückkehr" },
        { id: 7, text: "Unterstützung durch Kolleginnen und Kollegen" },
        { id: 8, text: "Rückkehr nach der Elternzeit verzögert sich" }
      ],
      texte: [
        { id: "a", text: "Nach einem Jahr Elternzeit kehren viele Eltern in ihren früheren Beruf zurück." },
        { id: "b", text: "Manche Eltern entscheiden sich, zunächst in Teilzeit wieder einzusteigen." },
        { id: "c", text: "Vor dem ersten Arbeitstag nach der Elternzeit sind viele Eltern nervös." },
        { id: "d", text: "Es ist wichtig, rechtzeitig einen Platz für die Kinderbetreuung zu finden." },
        { id: "e", text: "Ein offenes Gespräch mit dem Arbeitgeber vor der Rückkehr kann viele Fragen klären." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 5, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Nach eineinhalb Jahren Elternzeit stehe ich kurz vor meiner Rückkehr in den Beruf. Ich habe mich entschieden, zunächst in Teilzeit zu arbeiten, um mehr Zeit für meine Tochter zu haben. Vor dem ersten Arbeitstag bin ich ziemlich nervös, weil sich in meiner Abteilung vieles verändert hat. Zum Glück habe ich schon vorher ein Gespräch mit meiner Chefin geführt, die mir viele Fragen beantworten konnte. Außerdem habe ich rechtzeitig einen Kitaplatz für meine Tochter organisiert, was mir sehr wichtig war. Meine Kolleginnen haben mir versichert, dass sie mir beim Wiedereinstieg helfen werden.",
      aussagen: [
        { nr: 1, text: "Die Person war eineinhalb Jahre in Elternzeit.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person kehrt in Vollzeit zurück.", korrekt: false, hinweis: "Gegenteil: 'zunächst in Teilzeit zu arbeiten'." },
        { nr: 3, text: "Die Person ist vor dem ersten Arbeitstag nervös.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person hat noch keinen Kitaplatz gefunden.", korrekt: false, hinweis: "Gegenteil: 'habe ich rechtzeitig einen Kitaplatz... organisiert'." },
        { nr: 5, text: "Die Kolleginnen wollen der Person nicht helfen.", korrekt: false, hinweis: "Gegenteil: 'dass sie mir beim Wiedereinstieg helfen werden'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten nach der Elternzeit in Teilzeit zurückkehren." },
        { nr: 2, text: "Sie suchen einen Kitaplatz für Ihr Kind." },
        { nr: 3, text: "Sie möchten sich auf das Rückkehrgespräch vorbereiten." },
        { nr: 4, text: "Sie suchen einen Coach für den beruflichen Wiedereinstieg." },
        { nr: 5, text: "Sie möchten sich über Ihre Rechte während der Elternzeit informieren." },
        { nr: 6, text: "Sie suchen eine Tagesmutter." },
        { nr: 7, text: "Sie möchten sich beruflich neu orientieren." },
        { nr: 8, text: "Sie suchen einen Sprachkurs." },
        { nr: 9, text: "Sie möchten Elterngeld beantragen." },
        { nr: 10, text: "Sie suchen eine neue Wohnung." }
      ],
      anzeigen: [
        { id: "a", text: "Teilzeitmodelle nach der Elternzeit." },
        { id: "b", text: "Kitaplätze — jetzt anmelden." },
        { id: "c", text: "Vorbereitung auf das Rückkehrgespräch mit dem Arbeitgeber." },
        { id: "d", text: "Coaching für den beruflichen Wiedereinstieg." },
        { id: "e", text: "Rechtsberatung zu Elternzeit und Rückkehrrecht." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "f", 8: "f", 9: "f", 10: "f" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Nach eineinhalb Jahren Elternzeit ___(1)___ ich kurz vor meiner Rückkehr. Ich habe mich entschieden, ___(2)___ Teilzeit zu arbeiten, um mehr Zeit für meine Tochter zu haben. Vor dem ersten Arbeitstag bin ich nervös, ___(3)___ sich vieles verändert hat. Zum Glück habe ich vorher ein Gespräch geführt, ___(4)___ mir viele Fragen beantwortet hat. Meine Kolleginnen haben mir versichert, ___(5)___ sie mir helfen werden.",
      luecken: [
        { nr: 1, o: ["stehe", "stehst", "stehen"], c: 0, h: "ich → stehe." },
        { nr: 2, o: ["in", "auf", "zu"], c: 0, h: "'in Teilzeit arbeiten' — feste Wendung." },
        { nr: 3, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 4, o: ["die", "das", "was"], c: 1, h: "Relativpronomen bezogen auf 'Gespräch' (Neutrum) → das." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'versichern' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Elternzeit", "Wiedereinstieg", "Teilzeit", "Kitaplatz", "nervös"],
      text: "Nach der ___(6)___ kehren viele Eltern in ihren Beruf zurück. Manche entscheiden sich für ___(7)___ statt Vollzeit. Vor dem ___(8)___ sind viele Eltern ___(9)___. Wichtig ist auch, rechtzeitig einen ___(10)___ zu organisieren.",
      loesung: { 6: "Elternzeit", 7: "Teilzeit", 8: "Wiedereinstieg", 9: "nervös", 10: "Kitaplatz" }
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
        situation: "Sie kehren bald aus der Elternzeit in den Beruf zurück. Sie schreiben einer Freundin / einem Freund über Ihre Gefühle.",
        punkte: ["Erzählen Sie, wie Sie sich fühlen.", "Berichten Sie, wie Sie sich vorbereitet haben.", "Fragen Sie nach Tipps für den Wiedereinstieg."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an Ihren Arbeitgeber, um ein Gespräch vor Ihrer Rückkehr aus der Elternzeit zu vereinbaren.",
        punkte: ["Beschreiben Sie Ihr Anliegen.", "Fragen Sie nach möglichen Terminen.", "Fragen Sie nach Änderungen in Ihrer Abteilung."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

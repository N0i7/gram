// ============================================================
// FLOß Modelltest B1 — Nr. 14
// Gleiches Format wie Nr. 01–13.
// ============================================================

window.MODELLTEST_B1_14 = {
  testKey: "modelltest-b1-14",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 14",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Gleitzeit für mehr Flexibilität" },
        { id: 2, text: "Überstunden häufen sich" },
        { id: 3, text: "Urlaubstage verfallen" },
        { id: 4, text: "Grenze zwischen Arbeit und Freizeit verschwimmt" },
        { id: 5, text: "Digitale Erreichbarkeit nach Feierabend" },
        { id: 6, text: "Sabbatical als Auszeit" },
        { id: 7, text: "Teilzeitmodelle werden beliebter" },
        { id: 8, text: "Pausenregelung wird strenger kontrolliert" }
      ],
      texte: [
        { id: "a", text: "Immer mehr Beschäftigte beantragen ein Sabbatical, um für einige Monate aus dem Berufsalltag auszusteigen." },
        { id: "b", text: "Durch Homeoffice und mobile Geräte verschwimmt für viele die Grenze zwischen Arbeitszeit und Freizeit zunehmend." },
        { id: "c", text: "Studien zeigen, dass viele Beschäftigte sich auch nach Feierabend verpflichtet fühlen, dienstliche Nachrichten zu beantworten." },
        { id: "d", text: "Ein flexibles Arbeitszeitmodell erlaubt es Beschäftigten, ihren Arbeitstag innerhalb bestimmter Grenzen selbst zu gestalten." },
        { id: "e", text: "Immer mehr Beschäftigte entscheiden sich für eine reduzierte Stundenzahl, um mehr Zeit für Familie oder Hobbys zu haben." }
      ],
      loesung: { a: 6, b: 4, c: 5, d: 1, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Work-Life-Balance ist längst nicht mehr nur ein Schlagwort, sondern für viele Beschäftigte ein zentrales Kriterium bei der Wahl des Arbeitgebers. Während frühere Generationen häufig lange Arbeitszeiten als selbstverständlich akzeptierten, legen jüngere Beschäftigte heute großen Wert auf klare Grenzen zwischen Beruf und Privatleben. Unternehmen reagieren darauf mit flexiblen Arbeitszeitmodellen, Homeoffice-Regelungen und teils auch mit dem Verzicht auf dienstliche Erreichbarkeit außerhalb der Arbeitszeit. Kritiker warnen jedoch davor, dass Flexibilität auch zu einer ständigen gefühlten Verfügbarkeit führen kann, wenn klare Regeln fehlen. Entscheidend sei daher nicht allein die Flexibilität selbst, sondern eine klare Kommunikation über Erwartungen zwischen Arbeitgebern und Beschäftigten.",
      aussagen: [
        { nr: 1, text: "Work-Life-Balance ist für viele Beschäftigte ein wichtiges Kriterium.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Frühere Generationen legten meist großen Wert auf klare Grenzen zwischen Beruf und Privatleben.", korrekt: false, hinweis: "Gegenteil: 'akzeptierten lange Arbeitszeiten als selbstverständlich'." },
        { nr: 3, text: "Manche Unternehmen verzichten auf dienstliche Erreichbarkeit außerhalb der Arbeitszeit.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Kritiker sehen bei Flexibilität keine Risiken.", korrekt: false, hinweis: "Gegenteil: 'warnen... vor ständiger gefühlter Verfügbarkeit'." },
        { nr: 5, text: "Klare Kommunikation über Erwartungen wird als wichtig angesehen.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten flexible Arbeitszeiten." },
        { nr: 2, text: "Sie möchten ein Sabbatical beantragen." },
        { nr: 3, text: "Sie suchen eine Teilzeitstelle." },
        { nr: 4, text: "Sie möchten weniger nach Feierabend erreichbar sein." },
        { nr: 5, text: "Sie brauchen Beratung zu Work-Life-Balance." },
        { nr: 6, text: "Sie möchten Überstunden abbauen." },
        { nr: 7, text: "Sie suchen eine Vollzeitstelle mit hohem Gehalt." },
        { nr: 8, text: "Sie möchten ins Ausland auswandern." },
        { nr: 9, text: "Sie suchen einen Nebenjob am Wochenende." },
        { nr: 10, text: "Sie möchten sich selbstständig machen." }
      ],
      anzeigen: [
        { id: "a", text: "Gleitzeit-Modell: Arbeitszeit flexibel innerhalb bestimmter Grenzen gestalten." },
        { id: "b", text: "Sabbatical-Programm: bis zu sechs Monate Auszeit möglich." },
        { id: "c", text: "Teilzeitstellen in verschiedenen Abteilungen frei." },
        { id: "d", text: "Erreichbarkeitsregel: keine dienstlichen Nachrichten nach 18 Uhr." },
        { id: "e", text: "Beratungsangebot: Work-Life-Balance-Coaching für Beschäftigte." },
        { id: "f", text: "Überstundenkonto: Abbau in Freizeit möglich." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Sehr geehrte Damen und Herren, ___(1)___ ich seit einigen Jahren in Ihrem Unternehmen arbeite, möchte ich um ein Gespräch zu meinem Arbeitszeitmodell bitten. ___(2)___ ich derzeit Vollzeit arbeite, wäre mir eine Reduzierung wichtig. Ich möchte gerne wissen, ___(3)___ ein Teilzeitmodell in meiner Abteilung möglich wäre. Außerdem interessiert mich, ___(4)___ die Erreichbarkeit außerhalb der Arbeitszeit geregelt ist. Über eine Rückmeldung ___(5)___ ich mich freuen.",
      luecken: [
        { nr: 1, o: ["Da", "Obwohl", "Damit"], c: 0, h: "Grund, formell → da." },
        { nr: 2, o: ["Da", "Obwohl", "Damit"], c: 1, h: "Einschränkung → obwohl." },
        { nr: 3, o: ["ob", "dass", "wie"], c: 0, h: "indirekte Frage → ob." },
        { nr: 4, o: ["ob", "dass", "wie"], c: 2, h: "indirekte Frage nach Art → wie." },
        { nr: 5, o: ["würde", "werde", "wurde"], c: 0, h: "höflich, Konjunktiv II → würde." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["flexibel", "erreichbar", "ausgeglichen", "verpflichtet", "reduziert"],
      text: "Viele Beschäftigte möchten ihre Arbeitszeit ___(6)___ gestalten. Manche fühlen sich auch nach Feierabend noch ___(7)___, dienstliche Nachrichten zu beantworten. Wer ständig ___(8)___ ist, findet schwer zur Ruhe. Ein ___(9)___es Verhältnis zwischen Arbeit und Freizeit ist wichtig. Viele entscheiden sich deshalb für eine ___(10)___e Stundenzahl.",
      loesung: { 6: "flexibel", 7: "verpflichtet", 8: "erreichbar", 9: "ausgeglichen", 10: "reduziert" }
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
        situation: "Ein Freund / eine Freundin fühlt sich im Job gestresst. Sie schreiben eine Nachricht.",
        punkte: ["Zeigen Sie Verständnis für die Situation.", "Berichten Sie von Ihren eigenen Erfahrungen mit Work-Life-Balance.", "Geben Sie einen konkreten Tipp."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an Ihre Personalabteilung, um flexiblere Arbeitszeiten zu beantragen.",
        punkte: ["Erklären Sie, warum Sie flexiblere Arbeitszeiten wünschen.", "Machen Sie einen konkreten Vorschlag.", "Fragen Sie nach den nächsten Schritten."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

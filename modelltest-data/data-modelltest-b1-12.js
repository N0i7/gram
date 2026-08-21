// ============================================================
// FLOß Modelltest B1 — Nr. 12
// Gleiches Format wie Nr. 01–11.
// ============================================================

window.MODELLTEST_B1_12 = {
  testKey: "modelltest-b1-12",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 12",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Freiwilliges Jahr im sozialen Bereich" },
        { id: 2, text: "Bewerbungsfrist verlängert" },
        { id: 3, text: "Taschengeld während des Freiwilligendienstes" },
        { id: 4, text: "Einsatzstellen im Ausland gesucht" },
        { id: 5, text: "Zeugnis nach Abschluss des Dienstes" },
        { id: 6, text: "Freiwillige berichten von ihren Erfahrungen" },
        { id: 7, text: "Seminarwochen als Teil des Programms" },
        { id: 8, text: "Mindestalter für die Teilnahme" }
      ],
      texte: [
        { id: "a", text: "Wer ein Freiwilliges Soziales Jahr macht, erhält monatlich ein kleines Taschengeld sowie Verpflegung und Unterkunft, falls nötig." },
        { id: "b", text: "Die Bewerbungsfrist für den nächsten Jahrgang wurde wegen hoher Nachfrage um zwei Wochen verlängert." },
        { id: "c", text: "Während des Jahres nehmen die Teilnehmenden an mehreren mehrtägigen Seminaren teil, in denen sie sich austauschen und weiterbilden." },
        { id: "d", text: "Am Ende des Freiwilligendienstes erhalten alle Teilnehmenden ein Zeugnis, das für spätere Bewerbungen genutzt werden kann." },
        { id: "e", text: "Interessierte müssen mindestens 16 Jahre alt sein, um sich für das Programm zu bewerben." }
      ],
      loesung: { a: 3, b: 2, c: 7, d: 5, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Nach dem Schulabschluss war mir noch nicht klar, was ich studieren sollte. Deshalb habe ich mich für ein Freiwilliges Soziales Jahr in einem Pflegeheim entschieden. Am Anfang war die Arbeit körperlich und emotional anstrengend, weil ich vorher wenig Erfahrung mit älteren, kranken Menschen hatte. Mit der Zeit habe ich aber gelernt, geduldiger zu sein und besser zuzuhören. Die Bewohner haben mir viel über ihr Leben erzählt, und ich habe gemerkt, wie wichtig soziale Berufe für unsere Gesellschaft sind. Am Ende des Jahres war mir klar, dass ich später im Gesundheitsbereich arbeiten möchte. Ohne dieses Jahr hätte ich diese Entscheidung wahrscheinlich nicht so schnell getroffen.",
      aussagen: [
        { nr: 1, text: "Die Person wusste nach der Schule sofort, was sie studieren wollte.", korrekt: false, hinweis: "Gegenteil: 'noch nicht klar'." },
        { nr: 2, text: "Die Person hat vorher schon viel Erfahrung mit älteren, kranken Menschen gehabt.", korrekt: false, hinweis: "Gegenteil: 'wenig Erfahrung'." },
        { nr: 3, text: "Die Arbeit war am Anfang anstrengend.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person hat gelernt, geduldiger zu sein.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person möchte später nicht im Gesundheitsbereich arbeiten.", korrekt: false, hinweis: "Gegenteil: 'möchte später im Gesundheitsbereich arbeiten'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten ein Freiwilliges Soziales Jahr machen." },
        { nr: 2, text: "Sie suchen eine Einsatzstelle im Ausland." },
        { nr: 3, text: "Sie möchten wissen, wie viel Taschengeld es gibt." },
        { nr: 4, text: "Sie möchten wissen, ob es Seminare gibt." },
        { nr: 5, text: "Sie brauchen ein Zeugnis für eine Bewerbung." },
        { nr: 6, text: "Sie möchten die Bewerbungsfrist erfahren." },
        { nr: 7, text: "Sie suchen ein bezahltes Praktikum." },
        { nr: 8, text: "Sie möchten direkt eine Festanstellung." },
        { nr: 9, text: "Sie suchen einen Studienplatz." },
        { nr: 10, text: "Sie suchen eine Ausbildung im Handwerk." }
      ],
      anzeigen: [
        { id: "a", text: "Freiwilliges Soziales Jahr im Pflegeheim, ab sofort möglich." },
        { id: "b", text: "Freiwilligendienst im Ausland, mehrere Einsatzstellen frei." },
        { id: "c", text: "Taschengeld und Unterkunft im Freiwilligendienst inklusive." },
        { id: "d", text: "Seminarwochen fester Bestandteil des Freiwilligenjahres." },
        { id: "e", text: "Zeugnis nach Abschluss des Freiwilligendienstes garantiert." },
        { id: "f", text: "Bewerbungsfrist für nächsten Jahrgang verlängert." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Nach dem Schulabschluss ___(1)___ ich noch nicht, was ich studieren sollte. Deshalb ___(2)___ ich mich für ein Freiwilliges Soziales Jahr entschieden. Am Anfang war die Arbeit anstrengend, ___(3)___ ich wenig Erfahrung hatte. Mit der Zeit ___(4)___ ich gelernt, geduldiger zu sein. Am Ende ___(5)___ mir klar, dass ich im Gesundheitsbereich arbeiten möchte.",
      luecken: [
        { nr: 1, o: ["wusste", "weiß", "wisse"], c: 0, h: "Präteritum → wusste." },
        { nr: 2, o: ["habe", "hatte", "hätte"], c: 0, h: "Perfekt mit hatte → habe entschieden." },
        { nr: 3, o: ["weil", "obwohl", "damit"], c: 0, h: "Grund → weil." },
        { nr: 4, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 5, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["anstrengend", "geduldiger", "sozial", "freiwillig", "wichtig"],
      text: "Die Arbeit im Pflegeheim war am Anfang ___(6)___. Ich habe gelernt, ___(7)___ zu sein. Ich habe erkannt, wie ___(8)___ soziale Berufe sind. Viele Menschen entscheiden sich ___(9)___ für ein solches Jahr. Es ist ein sehr ___(10)___es Engagement.",
      loesung: { 6: "anstrengend", 7: "geduldiger", 8: "wichtig", 9: "freiwillig", 10: "sozial" }
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
        situation: "Ein Freund / eine Freundin überlegt, ein Freiwilliges Soziales Jahr zu machen. Sie schreiben eine Nachricht.",
        punkte: ["Erzählen Sie von Ihren eigenen Erfahrungen oder was Sie wissen.", "Nennen Sie einen Vorteil und eine Herausforderung.", "Geben Sie einen Tipp zur Bewerbung."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an eine Organisation, um sich nach einem Freiwilligen Sozialen Jahr zu erkundigen.",
        punkte: ["Stellen Sie sich kurz vor.", "Fragen Sie nach freien Einsatzstellen.", "Fragen Sie nach Taschengeld und Bewerbungsfrist."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

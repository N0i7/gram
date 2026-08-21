// ============================================================
// FLOß Modelltest B1 — Nr. 16
// Gleiches Format wie Nr. 01–15.
// ============================================================

window.MODELLTEST_B1_16 = {
  testKey: "modelltest-b1-16",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 16",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Freiwillige Feuerwehr sucht Mitglieder" },
        { id: 2, text: "Ausbildung dauert mehrere Monate" },
        { id: 3, text: "Einsatz auch nachts möglich" },
        { id: 4, text: "Jugendfeuerwehr für Kinder" },
        { id: 5, text: "Übungen finden regelmäßig statt" },
        { id: 6, text: "Ausrüstung wird gestellt" },
        { id: 7, text: "Freistellung vom Arbeitgeber möglich" },
        { id: 8, text: "Feuerwehrfest im Sommer" }
      ],
      texte: [
        { id: "a", text: "Die freiwillige Feuerwehr sucht engagierte Menschen, die sich für den Schutz ihrer Gemeinde einsetzen möchten." },
        { id: "b", text: "Bei einem Einsatz während der Arbeitszeit müssen Arbeitgeber ihre Beschäftigten für die Feuerwehr freistellen." },
        { id: "c", text: "Jeden zweiten Donnerstag im Monat findet eine Übung statt, bei der neue Techniken trainiert werden." },
        { id: "d", text: "Wer der Feuerwehr beitritt, erhält die komplette Schutzausrüstung kostenlos von der Gemeinde." },
        { id: "e", text: "Einsätze können jederzeit stattfinden, auch mitten in der Nacht, deshalb ist Bereitschaft wichtig." }
      ],
      loesung: { a: 1, b: 7, c: 5, d: 6, e: 3 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit zwei Jahren bin ich Mitglied der freiwilligen Feuerwehr in meinem Dorf. Am Anfang hatte ich etwas Respekt vor der Ausbildung, weil sie sehr praktisch und anspruchsvoll ist. Mit der Zeit habe ich aber gemerkt, dass das Team sehr unterstützend ist und niemand allein gelassen wird. Wir üben regelmäßig, damit wir im Ernstfall schnell und sicher handeln können. Mein Arbeitgeber unterstützt mich, indem er mich bei Einsätzen freistellt, auch wenn das manchmal organisatorisch schwierig ist. Für mich ist die Feuerwehr nicht nur ein Ehrenamt, sondern auch eine wichtige Gemeinschaft geworden.",
      aussagen: [
        { nr: 1, text: "Die Person ist seit zwei Jahren bei der freiwilligen Feuerwehr.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Ausbildung wurde als sehr leicht empfunden.", korrekt: false, hinweis: "Gegenteil: 'anspruchsvoll'." },
        { nr: 3, text: "Das Team lässt neue Mitglieder allein.", korrekt: false, hinweis: "Gegenteil: 'niemand allein gelassen wird'." },
        { nr: 4, text: "Der Arbeitgeber stellt die Person bei Einsätzen frei.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Feuerwehr ist für die Person nur eine Pflicht ohne Gemeinschaftsgefühl.", korrekt: false, hinweis: "Gegenteil: 'auch eine wichtige Gemeinschaft geworden'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten der Feuerwehr beitreten." },
        { nr: 2, text: "Ihr Kind möchte in die Jugendfeuerwehr." },
        { nr: 3, text: "Sie möchten wissen, wie lange die Ausbildung dauert." },
        { nr: 4, text: "Sie möchten zum Feuerwehrfest gehen." },
        { nr: 5, text: "Sie brauchen Informationen zur Freistellung durch den Arbeitgeber." },
        { nr: 6, text: "Sie möchten wissen, wann die Übungen stattfinden." },
        { nr: 7, text: "Sie suchen eine Stelle als Rettungssanitäter." },
        { nr: 8, text: "Sie möchten Erste Hilfe lernen." },
        { nr: 9, text: "Sie suchen eine bezahlte Stelle bei der Polizei." },
        { nr: 10, text: "Sie möchten Spenden für die Feuerwehr sammeln." }
      ],
      anzeigen: [
        { id: "a", text: "Freiwillige Feuerwehr sucht neue Mitglieder." },
        { id: "b", text: "Jugendfeuerwehr für Kinder ab 10 Jahren." },
        { id: "c", text: "Ausbildung dauert etwa sechs Monate." },
        { id: "d", text: "Feuerwehrfest im Sommer, alle sind eingeladen." },
        { id: "e", text: "Freistellung durch Arbeitgeber gesetzlich geregelt." },
        { id: "f", text: "Übungen jeden zweiten Donnerstag im Monat." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit zwei Jahren ___(1)___ ich Mitglied der freiwilligen Feuerwehr. Am Anfang ___(2)___ ich etwas Respekt vor der Ausbildung. Mit der Zeit ___(3)___ ich gemerkt, dass das Team unterstützend ist. Wir üben regelmäßig, ___(4)___ wir im Ernstfall sicher handeln können. Mein Arbeitgeber ___(5)___ mich bei Einsätzen frei.",
      luecken: [
        { nr: 1, o: ["bin", "war", "wäre"], c: 0, h: "Gegenwart → bin." },
        { nr: 2, o: ["hatte", "habe", "hätte"], c: 0, h: "Präteritum → hatte." },
        { nr: 3, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 4, o: ["damit", "obwohl", "trotzdem"], c: 0, h: "Zweck → damit." },
        { nr: 5, o: ["stellt", "stellte", "stelle"], c: 0, h: "er (Arbeitgeber) → stellt." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["ehrenamtlich", "freistellen", "Ausbildung", "Gemeinschaft", "Einsatz"],
      text: "Viele Menschen engagieren sich ___(6)___ bei der Feuerwehr. Vor dem ersten ___(7)___ absolviert man eine ___(8)___. Arbeitgeber müssen Mitarbeitende dafür manchmal ___(9)___. Für viele wird die Feuerwehr zu einer wichtigen ___(10)___.",
      loesung: { 6: "ehrenamtlich", 7: "Einsatz", 8: "Ausbildung", 9: "freistellen", 10: "Gemeinschaft" }
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
        situation: "Sie sind seit Kurzem bei der freiwilligen Feuerwehr und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, warum Sie beigetreten sind.", "Beschreiben Sie eine Erfahrung, die Sie gemacht haben.", "Fragen Sie, ob die Person auch mitmachen möchte."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an Ihren Arbeitgeber, um eine Freistellung für einen Feuerwehreinsatz zu klären.",
        punkte: ["Erklären Sie den Grund für Ihre Anfrage.", "Nennen Sie den ungefähren Zeitraum.", "Fragen Sie nach den nächsten Schritten."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

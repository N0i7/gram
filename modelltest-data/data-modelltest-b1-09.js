// ============================================================
// FLOß Modelltest B1 — Nr. 09
// Gleiches Format wie Nr. 01–08.
// ============================================================

window.MODELLTEST_B1_09 = {
  testKey: "modelltest-b1-09",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 9",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Prüfungstermin verschoben" },
        { id: 2, text: "Neue Anmeldefrist für die Zwischenprüfung" },
        { id: 3, text: "Kostenloser Vorbereitungskurs" },
        { id: 4, text: "Ergebnisse jetzt online abrufbar" },
        { id: 5, text: "Wiederholungsprüfung im Herbst" },
        { id: 6, text: "Praktikumsplatz nach der Ausbildung" },
        { id: 7, text: "Neue Prüfungsordnung tritt in Kraft" },
        { id: 8, text: "Prüfungsangst — Beratung verfügbar" }
      ],
      texte: [
        { id: "a", text: "Wer bei der letzten Prüfung durchgefallen ist, kann sie im Oktober noch einmal ablegen. Die Anmeldung läuft bereits." },
        { id: "b", text: "Ab diesem Jahrgang gelten neue Regeln für die Abschlussprüfung, unter anderem eine veränderte Gewichtung der praktischen Teile." },
        { id: "c", text: "Viele Auszubildende fühlen sich vor Prüfungen sehr nervös. Eine kostenlose Beratung hilft, mit dieser Anspannung besser umzugehen." },
        { id: "d", text: "Die Ergebnisse der letzten Zwischenprüfung können ab sofort im Onlineportal eingesehen werden, mit persönlichem Zugangscode." },
        { id: "e", text: "Wegen eines technischen Problems wurde der ursprünglich geplante Prüfungstermin um eine Woche verschoben." }
      ],
      loesung: { a: 5, b: 7, c: 8, d: 4, e: 1 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Viele Auszubildende berichten, dass die größte Herausforderung während der Ausbildung nicht das fachliche Wissen ist, sondern der Druck, Berufsschule, Betrieb und Prüfungsvorbereitung gleichzeitig zu bewältigen. Besonders in der Endphase vor der Abschlussprüfung fühlen sich viele überfordert. Ausbildungsbetriebe reagieren zunehmend darauf, etwa indem sie in den letzten Wochen vor der Prüfung zusätzliche Lernzeit einräumen oder interne Probeprüfungen anbieten. Berufsschulen wiederum setzen verstärkt auf digitale Lernplattformen, über die sich Auszubildende flexibel auf Prüfungen vorbereiten können. Experten betonen jedoch, dass technische Hilfsmittel allein nicht ausreichen — entscheidend sei vor allem eine realistische Zeitplanung von Anfang an, statt alles auf die letzten Wochen zu verschieben.",
      aussagen: [
        { nr: 1, text: "Die größte Herausforderung ist laut Text meist das fachliche Wissen.", korrekt: false, hinweis: "Gegenteil: 'nicht das fachliche Wissen, sondern der Druck'." },
        { nr: 2, text: "Manche Betriebe bieten interne Probeprüfungen an.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Berufsschulen setzen kaum auf digitale Lernangebote.", korrekt: false, hinweis: "Gegenteil: 'setzen verstärkt auf digitale Lernplattformen'." },
        { nr: 4, text: "Experten halten technische Hilfsmittel allein für ausreichend.", korrekt: false, hinweis: "Gegenteil: 'technische Hilfsmittel allein nicht ausreichen'." },
        { nr: 5, text: "Eine realistische Zeitplanung von Anfang an wird als wichtig bezeichnet.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie sind bei der Prüfung durchgefallen und möchten sie wiederholen." },
        { nr: 2, text: "Sie brauchen Hilfe wegen Prüfungsangst." },
        { nr: 3, text: "Sie möchten Ihre Prüfungsergebnisse einsehen." },
        { nr: 4, text: "Sie suchen einen kostenlosen Vorbereitungskurs." },
        { nr: 5, text: "Sie möchten sich für die Zwischenprüfung anmelden." },
        { nr: 6, text: "Sie suchen einen Praktikumsplatz nach der Ausbildung." },
        { nr: 7, text: "Sie brauchen Informationen zur neuen Prüfungsordnung." },
        { nr: 8, text: "Sie möchten Ihre Ausbildung verkürzen." },
        { nr: 9, text: "Sie suchen einen Ausbildungsplatz." },
        { nr: 10, text: "Sie möchten die Berufsschule wechseln." }
      ],
      anzeigen: [
        { id: "a", text: "Wiederholungsprüfung im Oktober, Anmeldung jetzt möglich." },
        { id: "b", text: "Kostenlose Beratung bei Prüfungsangst, ohne Anmeldung." },
        { id: "c", text: "Onlineportal: Prüfungsergebnisse mit persönlichem Zugangscode." },
        { id: "d", text: "Kostenloser Vorbereitungskurs für die Abschlussprüfung, samstags." },
        { id: "e", text: "Neue Prüfungsordnung: Informationsveranstaltung für alle Auszubildenden." },
        { id: "f", text: "Betrieb bietet Übernahme in Praktikum nach erfolgreicher Ausbildung." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "x", 6: "f", 7: "e", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Sehr geehrte Frau Meyer, ___(1)___ der bevorstehenden Prüfung möchte ich fragen, ___(2)___ es noch einen Vorbereitungskurs gibt. Ich fühle mich etwas unsicher, ___(3)___ ich in letzter Zeit viel gelernt habe. Könnten Sie mir sagen, ___(4)___ ich mich anmelden kann? Über eine Antwort ___(5)___ ich mich sehr freuen.",
      luecken: [
        { nr: 1, o: ["Bezüglich", "Wegen", "Trotz"], c: 0, h: "formell, Bezug nehmen → bezüglich + Genitiv." },
        { nr: 2, o: ["ob", "dass", "wie"], c: 0, h: "indirekte Frage → ob." },
        { nr: 3, o: ["obwohl", "weil", "damit"], c: 0, h: "Einschränkung → obwohl." },
        { nr: 4, o: ["wo", "wie", "wann"], c: 1, h: "Art und Weise → wie." },
        { nr: 5, o: ["würde", "werde", "wurde"], c: 0, h: "höflich, Konjunktiv II → würde." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["rechtzeitig", "gründlich", "regelmäßig", "erfolgreich", "kurzfristig"],
      text: "Wer sich ___(6)___ auf die Prüfung vorbereitet, ist meist weniger gestresst. Es lohnt sich, ___(7)___ zu lernen, statt alles ___(8)___ vor der Prüfung zu wiederholen. ___(9)___ üben hilft, den Stoff zu behalten. Wer so vorgeht, besteht die Prüfung meist ___(10)___.",
      loesung: { 6: "rechtzeitig", 7: "gründlich", 8: "kurzfristig", 9: "regelmäßig", 10: "erfolgreich" }
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
        situation: "Ein Freund / eine Freundin hat bald eine wichtige Prüfung und ist nervös. Sie schreiben eine Nachricht.",
        punkte: ["Ermutigen Sie die Person.", "Geben Sie einen Tipp zur Vorbereitung.", "Bieten Sie an, gemeinsam zu lernen."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an die Berufsschule, weil Sie einen Prüfungstermin verschieben müssen.",
        punkte: ["Nennen Sie den betroffenen Termin.", "Erklären Sie kurz den Grund.", "Fragen Sie nach den nächsten Schritten."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

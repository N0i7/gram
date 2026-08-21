// ============================================================
// FLOß Modelltest B1 — Nr. 28
// Gleiches Format wie Nr. 01–27.
// ============================================================

window.MODELLTEST_B1_28 = {
  testKey: "modelltest-b1-28",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 28",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neuer Vorstand gewählt" },
        { id: 2, text: "Aufgaben des Vorstands" },
        { id: 3, text: "Zeitaufwand für die Vorstandsarbeit" },
        { id: 4, text: "Konflikte im Vorstand lösen" },
        { id: 5, text: "Vorstand sucht Nachfolger" },
        { id: 6, text: "Finanzen des Vereins verwalten" },
        { id: 7, text: "Vorstandssitzungen organisieren" },
        { id: 8, text: "Erste Erfahrungen als Vorsitzender" }
      ],
      texte: [
        { id: "a", text: "Bei der letzten Mitgliederversammlung wurde ein neuer Vorstand für die kommenden zwei Jahre gewählt." },
        { id: "b", text: "Zu den Aufgaben des Vorstands gehören unter anderem die Vertretung des Vereins nach außen und die Organisation der Aktivitäten." },
        { id: "c", text: "Viele Vorstandsmitglieder berichten, dass die ehrenamtliche Leitung eines Vereins mehr Zeit kostet, als sie erwartet hatten." },
        { id: "d", text: "Eine wichtige Aufgabe des Vorstands ist die verantwortungsvolle Verwaltung der Vereinsfinanzen." },
        { id: "e", text: "Regelmäßige Sitzungen des Vorstands helfen dabei, wichtige Entscheidungen gemeinsam zu treffen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 6, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Vor einem Jahr wurde ich zur Vorsitzenden unseres Sportvereins gewählt. Am Anfang war ich unsicher, weil ich noch nie eine solche Verantwortung übernommen hatte. Zu meinen Aufgaben gehören die Organisation der Vorstandssitzungen, die Vertretung des Vereins nach außen und die Verwaltung der Finanzen zusammen mit unserem Schatzmeister. Anfangs hat mich der Zeitaufwand überrascht, weil ich fast jede Woche mehrere Stunden für den Verein investiere. Trotzdem macht mir die Arbeit großen Spaß, weil ich viele engagierte Menschen kennengelernt habe.",
      aussagen: [
        { nr: 1, text: "Die Person wurde vor einem Jahr zur Vorsitzenden gewählt.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person hatte vorher schon oft eine solche Verantwortung.", korrekt: false, hinweis: "Gegenteil: 'ich noch nie eine solche Verantwortung übernommen hatte'." },
        { nr: 3, text: "Zu den Aufgaben gehört die Verwaltung der Finanzen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Der Zeitaufwand war geringer als erwartet.", korrekt: false, hinweis: "Gegenteil: 'der Zeitaufwand hat mich überrascht'." },
        { nr: 5, text: "Der Person macht die Arbeit keinen Spaß.", korrekt: false, hinweis: "Gegenteil: 'macht mir die Arbeit großen Spaß'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich als Vorstandsmitglied bewerben." },
        { nr: 2, text: "Sie suchen eine Schulung zur Vereinsführung." },
        { nr: 3, text: "Sie brauchen Hilfe bei der Vereinsfinanzverwaltung." },
        { nr: 4, text: "Sie suchen Software für Vorstandssitzungen." },
        { nr: 5, text: "Sie möchten Konflikte im Vorstand lösen." },
        { nr: 6, text: "Sie suchen eine Rechtsberatung für Vereine." },
        { nr: 7, text: "Sie möchten Mitglieder für den Verein gewinnen." },
        { nr: 8, text: "Sie suchen ein Vereinslogo." },
        { nr: 9, text: "Sie möchten eine Vereinsfeier organisieren." },
        { nr: 10, text: "Sie suchen einen Sponsor für den Verein." }
      ],
      anzeigen: [
        { id: "a", text: "Kandidaten für den Vereinsvorstand gesucht." },
        { id: "b", text: "Schulung: Verein erfolgreich leiten." },
        { id: "c", text: "Software für die Vereinsbuchhaltung." },
        { id: "d", text: "Online-Tool für Vorstandssitzungen." },
        { id: "e", text: "Mediation bei Konflikten im Vereinsvorstand." },
        { id: "f", text: "Rechtsberatung speziell für Vereine." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Vor einem Jahr ___(1)___ ich zur Vorsitzenden gewählt. Am Anfang war ich unsicher, ___(2)___ ich noch nie eine solche Verantwortung übernommen hatte. Zu meinen Aufgaben gehört auch die Verwaltung der Finanzen, ___(3)___ ich zusammen mit dem Schatzmeister erledige. Der Zeitaufwand hat mich überrascht, ___(4)___ ich fast jede Woche mehrere Stunden investiere. Trotzdem macht mir die Arbeit Spaß, ___(5)___ ich viele engagierte Menschen kennengelernt habe.",
      luecken: [
        { nr: 1, o: ["wurde", "würde", "war"], c: 0, h: "Passiv Präteritum → wurde." },
        { nr: 2, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 3, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Verwaltung' (feminin) → die." },
        { nr: 4, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 5, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Vorstand", "Verantwortung", "Finanzen", "Zeitaufwand", "Schatzmeister"],
      text: "Der ___(6)___ eines Vereins trägt viel ___(7)___. Eine wichtige Aufgabe ist die Verwaltung der ___(8)___. Dabei arbeitet man oft eng mit dem ___(9)___ zusammen. Viele unterschätzen den ___(10)___ dieser Tätigkeit.",
      loesung: { 6: "Vorstand", 7: "Verantwortung", 8: "Finanzen", 9: "Schatzmeister", 10: "Zeitaufwand" }
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
        situation: "Sie wurden vor Kurzem in den Vorstand eines Vereins gewählt. Sie schreiben einer Freundin / einem Freund über Ihre Erfahrungen.",
        punkte: ["Erzählen Sie, wie Sie sich am Anfang gefühlt haben.", "Berichten Sie, welche Aufgaben Sie haben.", "Geben Sie einen Tipp für neue Vorstandsmitglieder."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an eine Organisation, um sich nach einer Schulung für Vereinsvorstände zu erkundigen.",
        punkte: ["Stellen Sie sich kurz vor.", "Fragen Sie nach den Inhalten der Schulung.", "Fragen Sie nach Terminen und Kosten."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

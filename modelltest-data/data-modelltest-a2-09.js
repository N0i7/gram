// ============================================================
// FLOß Modelltest A2 — Nr. 09
// Gleiches Format wie Nr. 01–08.
// ============================================================

window.MODELLTEST_A2_09 = {
  testKey: "modelltest-a2-09",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 9",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Fitnessstudio mit neuem Kursangebot" },
        { id: 2, text: "Kochkurs für gesunde Ernährung" },
        { id: 3, text: "Laufgruppe trifft sich im Park" },
        { id: 4, text: "Ernährungsberatung kostenlos" },
        { id: 5, text: "Süßigkeitenverbot in der Kantine" },
        { id: 6, text: "Neues Fitnessstudio eröffnet" },
        { id: 7, text: "Gesundes Frühstück im Büro" },
        { id: 8, text: "Yoga für Anfänger" }
      ],
      texte: [
        { id: "a", text: "Jeden Dienstag treffen sich Läuferinnen und Läufer aller Levels um 18 Uhr am Parkeingang, gemeinsames Laufen für Anfänger bis Fortgeschrittene." },
        { id: "b", text: "Der Kurs zeigt, wie man mit wenig Zeit ausgewogene Mahlzeiten kocht, jeden Mittwochabend, Zutaten inklusive." },
        { id: "c", text: "Eine Ernährungsberaterin bietet einmal im Monat kostenlose Beratungsgespräche an, Termine im Voraus buchbar." },
        { id: "d", text: "Ab nächster Woche gibt es neue Kurse: Spinning, Pilates und Krafttraining, für alle Mitglieder inklusive." },
        { id: "e", text: "Der Anfängerkurs richtet sich an Menschen ohne Vorkenntnisse, jeden Montagabend, Matten werden gestellt." }
      ],
      loesung: { a: 3, b: 2, c: 4, d: 1, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Vor sechs Monaten habe ich angefangen, regelmäßig Sport zu machen. Am Anfang bin ich nur einmal pro Woche gejoggt, weil ich schnell müde wurde. Mittlerweile trainiere ich dreimal pro Woche, meistens im Fitnessstudio, manchmal auch draußen im Park. Ich achte jetzt auch mehr auf meine Ernährung und esse weniger Fast Food. Am Anfang war es schwer, eine Routine zu finden, aber jetzt macht mir Sport richtig Spaß. Ich fühle mich viel energiegeladener als früher. Nächstes Jahr möchte ich vielleicht an einem kleinen Lauf teilnehmen.",
      aussagen: [
        { nr: 1, text: "Die Person hat vor sechs Monaten mit Sport angefangen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Am Anfang war die Person dreimal pro Woche joggen.", korrekt: false, hinweis: "Am Anfang nur einmal pro Woche." },
        { nr: 3, text: "Die Person achtet jetzt mehr auf die Ernährung.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Sport macht der Person keinen Spaß.", korrekt: false, hinweis: "Gegenteil: 'macht mir Sport richtig Spaß'." },
        { nr: 5, text: "Die Person möchte nächstes Jahr an einem Lauf teilnehmen.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten mit einer Gruppe laufen." },
        { nr: 2, text: "Sie möchten gesund kochen lernen." },
        { nr: 3, text: "Sie brauchen kostenlose Ernährungsberatung." },
        { nr: 4, text: "Sie möchten neue Fitnesskurse ausprobieren." },
        { nr: 5, text: "Sie möchten mit Yoga anfangen." },
        { nr: 6, text: "Sie suchen einen Personal Trainer." },
        { nr: 7, text: "Sie möchten abnehmen." },
        { nr: 8, text: "Sie suchen ein Schwimmbad." },
        { nr: 9, text: "Sie möchten Vitamine kaufen." },
        { nr: 10, text: "Sie suchen einen Ernährungsplan für Sportler." }
      ],
      anzeigen: [
        { id: "a", text: "Laufgruppe: dienstags 18 Uhr am Parkeingang, alle Levels." },
        { id: "b", text: "Kochkurs für gesunde Ernährung, mittwochs, Zutaten inklusive." },
        { id: "c", text: "Kostenlose Ernährungsberatung, einmal im Monat, Termin buchen." },
        { id: "d", text: "Neue Fitnesskurse: Spinning, Pilates, Krafttraining, für Mitglieder." },
        { id: "e", text: "Yoga für Anfänger, montags, Matten werden gestellt." },
        { id: "f", text: "Fitnessstudio bietet Personal Training an." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Vor sechs Monaten ___(1)___ ich angefangen, Sport zu machen. Am Anfang ___(2)___ ich schnell müde, ___(3)___ ich noch nicht trainiert war. Mittlerweile ___(4)___ ich dreimal pro Woche. Ich fühle mich viel besser, ___(5)___ ich regelmäßig trainiere.",
      luecken: [
        { nr: 1, o: ["habe", "bin", "hatte"], c: 0, h: "Perfekt: habe angefangen." },
        { nr: 2, o: ["wurde", "wird", "würde"], c: 0, h: "Präteritum → wurde." },
        { nr: 3, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." },
        { nr: 4, o: ["trainiere", "trainiert", "trainieren"], c: 0, h: "ich → trainiere." },
        { nr: 5, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["regelmäßig", "am Anfang", "mittlerweile", "vielleicht", "richtig"],
      text: "___(6)___ war Sport für mich anstrengend. ___(7)___ trainiere ich ___(8)___ dreimal pro Woche. Sport macht mir ___(9)___ Spaß. Nächstes Jahr möchte ich ___(10)___ an einem Lauf teilnehmen.",
      loesung: { 6: "am Anfang", 7: "mittlerweile", 8: "regelmäßig", 9: "richtig", 10: "vielleicht" }
    }
  },

  schreiben: {
    titel: "Schreiben — Persönliche Nachricht",
    anleitung: "Schreiben Sie eine Nachricht. Schreiben Sie mindestens 40 Wörter. Gehen Sie auf alle Punkte ein.",
    mindestwoerter: 40,
    aufgaben: [
      {
        nr: 1,
        briefform: "informell",
        situation: "Sie haben mit Sport angefangen und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, welchen Sport Sie machen.", "Sagen Sie, wie oft Sie trainieren.", "Fragen Sie, ob die Person mitmachen möchte."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

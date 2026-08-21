// ============================================================
// FLOß Modelltest A2 — Nr. 03
// Gleiches Format wie Nr. 01/02.
// ============================================================

window.MODELLTEST_A2_03 = {
  testKey: "modelltest-a2-03",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 3",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Kochkurs für Anfänger" },
        { id: 2, text: "Neue Regeln für Mülltrennung" },
        { id: 3, text: "Sprachreise nach Deutschland" },
        { id: 4, text: "Wohnungsbesichtigung am Samstag" },
        { id: 5, text: "Kostenloses WLAN im Park" },
        { id: 6, text: "Führerschein-Theoriekurs" },
        { id: 7, text: "Second-Hand-Buchladen eröffnet" },
        { id: 8, text: "Kinderflohmarkt am Sonntag" }
      ],
      texte: [
        { id: "a", text: "Ab nächster Woche muss der Müll in drei statt zwei Tonnen getrennt werden. Genaue Informationen gibt es im Rathaus." },
        { id: "b", text: "Die Wohnung kann am Samstag zwischen 10 und 12 Uhr besichtigt werden. Interessenten melden sich bitte vorher an." },
        { id: "c", text: "Für alle, die den Führerschein machen möchten, startet ein neuer Theoriekurs, immer montags und mittwochs abends." },
        { id: "d", text: "Zwei Wochen in einer deutschen Familie leben und gleichzeitig die Sprache üben — dieses Programm richtet sich an fortgeschrittene Deutschlerner." },
        { id: "e", text: "Der neue Laden verkauft gebrauchte Bücher zu kleinen Preisen und bietet auch einen Ankauf von alten Büchern an." }
      ],
      loesung: { a: 2, b: 4, c: 6, d: 3, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Letztes Jahr habe ich meine erste eigene Wohnung gemietet. Am Anfang war es nicht einfach, weil ich alles alleine organisieren musste — Strom, Internet, Möbel. Zum Glück haben mir Kollegen aus der Arbeit geholfen, zum Beispiel beim Umzug. Jetzt fühle ich mich in der Wohnung sehr wohl. Sie liegt zentral, nah an meiner Arbeit und an einem kleinen Park, in dem ich gerne joggen gehe. Nur die Miete ist ein bisschen hoch, deshalb spare ich in anderen Bereichen, zum Beispiel beim Essen gehen.",
      aussagen: [
        { nr: 1, text: "Die Person hat letztes Jahr die erste eigene Wohnung gemietet.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Am Anfang war alles ganz einfach.", korrekt: false, hinweis: "Gegenteil: 'am Anfang war es nicht einfach'." },
        { nr: 3, text: "Kollegen haben beim Umzug geholfen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Wohnung liegt weit von der Arbeit entfernt.", korrekt: false, hinweis: "Gegenteil: 'nah an meiner Arbeit'." },
        { nr: 5, text: "Die Person spart, weil die Miete hoch ist.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten kochen lernen." },
        { nr: 2, text: "Sie suchen eine Wohnung zum Besichtigen." },
        { nr: 3, text: "Sie brauchen Informationen zur Mülltrennung." },
        { nr: 4, text: "Sie möchten den Führerschein machen." },
        { nr: 5, text: "Sie suchen gebrauchte Bücher." },
        { nr: 6, text: "Sie möchten eine Sprachreise machen." },
        { nr: 7, text: "Sie suchen kostenloses Internet im Freien." },
        { nr: 8, text: "Sie möchten Spielzeug für Ihr Kind kaufen." },
        { nr: 9, text: "Sie suchen einen Job in der Küche." },
        { nr: 10, text: "Sie möchten Ihr Auto verkaufen." }
      ],
      anzeigen: [
        { id: "a", text: "Kochkurs für Anfänger, jeden Donnerstag, kleine Gruppen, alle Zutaten inklusive." },
        { id: "b", text: "Theoriekurs Führerschein, montags und mittwochs abends, Anmeldung ab sofort." },
        { id: "c", text: "Wohnungsbesichtigung Samstag 10–12 Uhr, Anmeldung erforderlich." },
        { id: "d", text: "Second-Hand-Buchladen: Kauf und Verkauf gebrauchter Bücher." },
        { id: "e", text: "Sprachreise Deutschland: 2 Wochen bei einer Gastfamilie, für fortgeschrittene Lerner." },
        { id: "f", text: "Kostenloses WLAN im Stadtpark, jetzt verfügbar." }
      ],
      loesung: { 1: "a", 2: "c", 3: "x", 4: "b", 5: "d", 6: "e", 7: "f", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Nachdem ich die Wohnung ___(1)___ hatte, musste ich viele Dinge organisieren. Zuerst ___(2)___ ich Möbel kaufen, ___(3)___ ich noch keine hatte. Meine Kollegen haben mir geholfen, ___(4)___ alles schneller ging. Jetzt ___(5)___ ich mich sehr wohl in meiner neuen Wohnung.",
      luecken: [
        { nr: 1, o: ["gemietet", "mieten", "miete"], c: 0, h: "Plusquamperfekt: hatte gemietet." },
        { nr: 2, o: ["musste", "muss", "müsste"], c: 0, h: "Präteritum → musste." },
        { nr: 3, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." },
        { nr: 4, o: ["sodass", "damit", "weil"], c: 0, h: "Folge → sodass." },
        { nr: 5, o: ["fühle", "fühlt", "fühlen"], c: 0, h: "ich → fühle." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["zum Glück", "leider", "vor allem", "besonders", "sonst"],
      text: "Die neue Wohnung gefällt mir sehr, ___(6)___ die Lage. ___(7)___ ist die Miete etwas hoch. ___(8)___ konnte mir ein Kollege beim Umzug helfen. Ich achte jetzt ___(9)___ auf meine Ausgaben, ___(10)___ reicht das Geld am Monatsende nicht.",
      loesung: { 6: "vor allem", 7: "leider", 8: "zum Glück", 9: "besonders", 10: "sonst" }
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
        situation: "Sie haben eine neue Wohnung gefunden und schreiben einem Freund / einer Freundin davon.",
        punkte: ["Beschreiben Sie die Wohnung kurz.", "Sagen Sie, wie der Umzug war.", "Laden Sie die Person ein, die Wohnung anzusehen."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

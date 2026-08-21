// ============================================================
// FLOß Modelltest A1 — Nr. 02
// Gleiches Format wie Nr. 01.
// ============================================================

window.MODELLTEST_A1_02 = {
  testKey: "modelltest-a1-02",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 2",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Kindergarten sucht Erzieherin" },
        { id: 2, text: "Markt am Sonntag" },
        { id: 3, text: "Post hat neue Adresse" },
        { id: 4, text: "Handy zu verkaufen" },
        { id: 5, text: "Deutschprüfung im Juli" },
        { id: 6, text: "Bäckerei macht Pause" },
        { id: 7, text: "Zimmer für Studenten" },
        { id: 8, text: "Kostenloses Konzert im Park" }
      ],
      texte: [
        { id: "a", text: "Vom 1. bis 15. August ist die Bäckerei in der Hauptstraße geschlossen. Ab dem 16. August ist sie wieder normal geöffnet." },
        { id: "b", text: "Jeden Sonntag von 8 bis 14 Uhr gibt es frisches Obst und Gemüse auf dem Platz vor der Kirche." },
        { id: "c", text: "Die Prüfung findet am 20. Juli statt. Die Anmeldung ist bis zum 1. Juli möglich, im Büro der Schule." },
        { id: "d", text: "Das Telefon ist zwei Jahre alt und funktioniert gut. Der Preis ist 90 Euro. Bitte per SMS melden." },
        { id: "e", text: "Ein möbliertes Zimmer in der Nähe der Universität ist ab September frei. Miete: 180 Euro pro Monat." }
      ],
      loesung: { a: 6, b: 2, c: 5, d: 4, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Mein Name ist Ben. Ich bin 28 Jahre alt und komme aus Cebu. Seit zwei Monaten wohne ich in Lapu-Lapu. Ich arbeite als Kellner in einem Restaurant und lerne abends Deutsch. Der Kurs ist zweimal in der Woche, am Dienstag und am Donnerstag. Ich möchte nächstes Jahr die B1-Prüfung machen.",
      aussagen: [
        { nr: 1, text: "Ben ist 18 Jahre alt.", korrekt: false, hinweis: "Er ist 28 Jahre alt." },
        { nr: 2, text: "Ben wohnt seit zwei Monaten in Lapu-Lapu.", korrekt: true, hinweis: "Steht direkt im Text." },
        { nr: 3, text: "Ben lernt morgens Deutsch.", korrekt: false, hinweis: "Er lernt abends." },
        { nr: 4, text: "Der Kurs ist am Dienstag und Donnerstag.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Ben möchte dieses Jahr die B1-Prüfung machen.", korrekt: false, hinweis: "Er möchte 'nächstes Jahr'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten frisches Obst kaufen." },
        { nr: 2, text: "Sie suchen ein günstiges Handy." },
        { nr: 3, text: "Sie brauchen einen Deutschkurs für Kinder." },
        { nr: 4, text: "Sie möchten eine Prüfung machen." },
        { nr: 5, text: "Sie suchen Arbeit als Erzieherin." },
        { nr: 6, text: "Sie möchten Brot kaufen." },
        { nr: 7, text: "Sie suchen eine Wohnung für die ganze Familie." },
        { nr: 8, text: "Sie möchten kostenlos Musik hören." }
      ],
      anzeigen: [
        { id: "a", text: "Handy, gebraucht, guter Zustand, 90 Euro." },
        { id: "b", text: "Deutschprüfung A1–B1, Anmeldung bis 1. Juli im Sekretariat." },
        { id: "c", text: "Kindergarten sucht Erzieherin, Vollzeit, ab sofort." },
        { id: "d", text: "Wochenmarkt jeden Sonntag, Obst und Gemüse, 8–14 Uhr." },
        { id: "e", text: "Konzert im Stadtpark, Eintritt frei, Samstagabend." }
      ],
      loesung: { 1: "d", 2: "a", 3: "x", 4: "b", 5: "c", 6: "x", 7: "x", 8: "e" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Wir ___(1)___ in Cebu. ___(2)___ Wohnung ist klein, aber schön. Meine Schwester ___(3)___ auch hier. Am Morgen ___(4)___ wir Kaffee. Danach ___(5)___ wir zur Arbeit.",
      luecken: [
        { nr: 1, o: ["wohnen", "wohnt", "wohne"], c: 0, h: "wir → wohnen." },
        { nr: 2, o: ["Unser", "Unsere", "Unseren"], c: 1, h: "die Wohnung → unsere." },
        { nr: 3, o: ["wohnt", "wohnen", "wohne"], c: 0, h: "sie (Schwester) → wohnt." },
        { nr: 4, o: ["trinken", "trinkt", "trinke"], c: 0, h: "wir → trinken." },
        { nr: 5, o: ["gehen", "geht", "gehe"], c: 0, h: "wir → gehen." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["nach", "mit", "für", "bei", "zur"],
      text: "Ich fahre ___(6)___ dem Bus ___(7)___ Arbeit. Das Geschenk ist ___(8)___ meine Mutter. ___(9)___ der Arbeit gehe ich einkaufen. Am Abend bin ich ___(10)___ meinen Eltern.",
      loesung: { 6: "mit", 7: "zur", 8: "für", 9: "nach", 10: "bei" }
    }
  },

  schreiben: {
    titel: "Schreiben — Kurze Nachricht",
    anleitung: "Schreiben Sie eine kurze Nachricht. Schreiben Sie mindestens 20 Wörter. Gehen Sie auf alle Punkte ein.",
    mindestwoerter: 20,
    aufgaben: [
      {
        nr: 1,
        briefform: "informell",
        situation: "Sie schreiben einer Freundin / einem Freund über Ihren neuen Deutschkurs.",
        punkte: ["Sagen Sie, wann der Kurs ist.", "Sagen Sie, wie der Kurs Ihnen gefällt.", "Fragen Sie, ob die Freundin / der Freund auch Deutsch lernt."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion. Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

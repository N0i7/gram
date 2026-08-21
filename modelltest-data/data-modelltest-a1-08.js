// ============================================================
// FLOß Modelltest A1 — Nr. 08
// Gleiches Format wie Nr. 01–07.
// ============================================================

window.MODELLTEST_A1_08 = {
  testKey: "modelltest-a1-08",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 8",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Bus kommt später" },
        { id: 2, text: "Neue Busfahrpläne" },
        { id: 3, text: "Ticket im Automaten kaufen" },
        { id: 4, text: "Taxi bestellen" },
        { id: 5, text: "Zug fällt aus" },
        { id: 6, text: "Fahrrad mieten" },
        { id: 7, text: "Parkplatz gesucht" },
        { id: 8, text: "Monatskarte günstiger" }
      ],
      texte: [
        { id: "a", text: "Der Bus 12 kommt heute 10 Minuten später. Bitte warten Sie an der Haltestelle." },
        { id: "b", text: "Sie können das Ticket am Automaten kaufen. Es kostet 2 Euro 50." },
        { id: "c", text: "Ab nächster Woche fahren die Busse nach einem neuen Plan. Bitte informieren Sie sich." },
        { id: "d", text: "Die Monatskarte kostet jetzt nur noch 40 Euro statt 50 Euro." },
        { id: "e", text: "Der Zug um 8 Uhr fährt heute nicht. Bitte nehmen Sie den Zug um 9 Uhr." }
      ],
      loesung: { a: 1, b: 3, c: 2, d: 8, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich heiße Ana. Ich fahre jeden Tag mit dem Bus zur Arbeit. Der Bus kommt um 7 Uhr an meiner Haltestelle. Die Fahrt dauert 20 Minuten. Ich habe eine Monatskarte, das ist günstiger als einzelne Tickets. Am Wochenende fahre ich mit dem Fahrrad, weil ich das mag.",
      aussagen: [
        { nr: 1, text: "Ana fährt mit dem Auto zur Arbeit.", korrekt: false, hinweis: "Sie fährt mit dem Bus." },
        { nr: 2, text: "Der Bus kommt um 7 Uhr.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Die Fahrt dauert eine Stunde.", korrekt: false, hinweis: "Sie dauert 20 Minuten." },
        { nr: 4, text: "Ana hat eine Monatskarte.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Am Wochenende fährt Ana mit dem Bus.", korrekt: false, hinweis: "Sie fährt mit dem Fahrrad." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten ein Busticket kaufen." },
        { nr: 2, text: "Ihr Zug fährt heute nicht." },
        { nr: 3, text: "Sie möchten eine Monatskarte kaufen." },
        { nr: 4, text: "Der Bus kommt später." },
        { nr: 5, text: "Sie möchten ein Fahrrad mieten." },
        { nr: 6, text: "Sie suchen einen Parkplatz." },
        { nr: 7, text: "Sie möchten ein Taxi bestellen." },
        { nr: 8, text: "Sie möchten fliegen." }
      ],
      anzeigen: [
        { id: "a", text: "Ticket am Automaten kaufen, 2 Euro 50." },
        { id: "b", text: "Zug um 8 Uhr fährt heute nicht." },
        { id: "c", text: "Monatskarte jetzt 40 Euro." },
        { id: "d", text: "Bus 12 kommt heute 10 Minuten später." },
        { id: "e", text: "Neue Busfahrpläne ab nächster Woche." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "x", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ jeden Tag mit dem Bus. Der Bus ___(2)___ um 7 Uhr. ___(3)___ Fahrt dauert 20 Minuten. Ich ___(4)___ eine Monatskarte. Am Wochenende ___(5)___ ich Fahrrad.",
      luecken: [
        { nr: 1, o: ["fahre", "fährst", "fährt"], c: 0, h: "ich → fahre." },
        { nr: 2, o: ["komme", "kommt", "kommst"], c: 1, h: "der Bus → kommt." },
        { nr: 3, o: ["Der", "Die", "Das"], c: 1, h: "die Fahrt → die." },
        { nr: 4, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 5, o: ["fahre", "fährst", "fährt"], c: 0, h: "ich → fahre." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["mit", "um", "an", "zur", "am"],
      text: "Ich fahre ___(6)___ dem Bus. Der Bus kommt ___(7)___ 7 Uhr ___(8)___ meiner Haltestelle. Ich fahre ___(9)___ Arbeit. ___(10)___ Wochenende fahre ich Fahrrad.",
      loesung: { 6: "mit", 7: "um", 8: "an", 9: "zur", 10: "am" }
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
        situation: "Sie schreiben einer Freundin / einem Freund darüber, wie Sie zur Arbeit fahren.",
        punkte: ["Sagen Sie, womit Sie fahren.", "Sagen Sie, wie lange die Fahrt dauert.", "Sagen Sie, was Sie am Wochenende machen."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

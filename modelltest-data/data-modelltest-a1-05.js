// ============================================================
// FLOß Modelltest A1 — Nr. 05
// Gleiches Format wie Nr. 01–04.
// ============================================================

window.MODELLTEST_A1_05 = {
  testKey: "modelltest-a1-05",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 5",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Deutschkurs am Wochenende" },
        { id: 2, text: "Zimmer zu vermieten" },
        { id: 3, text: "Fußballplatz gesperrt" },
        { id: 4, text: "Tisch und Stühle zu verkaufen" },
        { id: 5, text: "Babysitter gesucht" },
        { id: 6, text: "Kino zeigt neuen Film" },
        { id: 7, text: "Waschmaschine kaputt" },
        { id: 8, text: "Fahrradkurs für Kinder" }
      ],
      texte: [
        { id: "a", text: "Wir suchen jemanden für Samstagabend, von 18 bis 22 Uhr. Bitte melden Sie sich bei Frau Santos." },
        { id: "b", text: "Der Kurs ist am Samstag von 9 bis 12 Uhr. Für Anfänger, ohne Vorkenntnisse." },
        { id: "c", text: "Ein Zimmer mit Bad ist ab dem 1. September frei. Miete: 150 Euro pro Monat." },
        { id: "d", text: "Tisch und vier Stühle, guter Zustand, zusammen 50 Euro. Bitte per Telefon melden." },
        { id: "e", text: "Der Platz ist diese Woche wegen Reparaturarbeiten geschlossen. Nächste Woche wieder offen." }
      ],
      loesung: { a: 5, b: 1, c: 2, d: 4, e: 3 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich heiße Rico. Ich bin 30 Jahre alt und komme aus Bohol. Ich arbeite als Koch in einem Restaurant, sechs Tage in der Woche. Mein freier Tag ist der Dienstag. An diesem Tag gehe ich einkaufen und putze meine Wohnung. Am Abend lerne ich Deutsch mit meiner Lehrerin, per Video-Chat.",
      aussagen: [
        { nr: 1, text: "Rico ist 30 Jahre alt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 2, text: "Rico arbeitet als Lehrer.", korrekt: false, hinweis: "Er arbeitet als Koch." },
        { nr: 3, text: "Rico hat am Montag frei.", korrekt: false, hinweis: "Sein freier Tag ist Dienstag." },
        { nr: 4, text: "Rico putzt am Dienstag seine Wohnung.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Rico lernt persönlich mit einer Lehrerin im Klassenzimmer.", korrekt: false, hinweis: "Er lernt per Video-Chat." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen einen Babysitter-Job." },
        { nr: 2, text: "Sie möchten samstags Deutsch lernen." },
        { nr: 3, text: "Sie brauchen ein Zimmer." },
        { nr: 4, text: "Sie möchten Tisch und Stühle kaufen." },
        { nr: 5, text: "Sie möchten Fußball spielen." },
        { nr: 6, text: "Sie suchen einen Kochkurs." },
        { nr: 7, text: "Sie brauchen ein Auto." },
        { nr: 8, text: "Sie möchten einen Film sehen." }
      ],
      anzeigen: [
        { id: "a", text: "Babysitter gesucht für Samstagabend, 18–22 Uhr." },
        { id: "b", text: "Deutschkurs Samstag 9–12 Uhr, für Anfänger." },
        { id: "c", text: "Zimmer mit Bad, ab 1. September, 150 Euro." },
        { id: "d", text: "Tisch und vier Stühle, 50 Euro." },
        { id: "e", text: "Fußballplatz diese Woche geschlossen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ Rico. Ich ___(2)___ als Koch. ___(3)___ Restaurant ist groß. Am Dienstag ___(4)___ ich frei. Ich ___(5)___ meine Wohnung.",
      luecken: [
        { nr: 1, o: ["heiße", "heißt", "heißen"], c: 0, h: "ich → heiße." },
        { nr: 2, o: ["arbeite", "arbeitet", "arbeiten"], c: 0, h: "ich → arbeite." },
        { nr: 3, o: ["Das", "Der", "Die"], c: 0, h: "das Restaurant → das." },
        { nr: 4, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 5, o: ["putze", "putzt", "putzen"], c: 0, h: "ich → putze." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["in", "als", "am", "mit", "pro"],
      text: "Ich arbeite ___(6)___ Koch. Ich arbeite sechs Tage ___(7)___ Woche. ___(8)___ Dienstag habe ich frei. Ich lerne Deutsch ___(9)___ meiner Lehrerin. Ich wohne ___(10)___ Cebu.",
      loesung: { 6: "als", 7: "pro", 8: "am", 9: "mit", 10: "in" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihren Arbeitstag.",
        punkte: ["Sagen Sie, wo Sie arbeiten.", "Sagen Sie, wie viele Tage Sie arbeiten.", "Sagen Sie, was Sie am freien Tag machen."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

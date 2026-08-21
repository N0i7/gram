// ============================================================
// FLOß Modelltest A1 — Nr. 01
// Struktur: Lesen (3 Teile, einfach) + Sprachbausteine (2 Teile) + Schreiben (sehr einfach)
// Kein Hören (siehe Projektnotiz). Wortschatz und Satzbau bewusst sehr einfach gehalten.
// ============================================================

window.MODELLTEST_A1_01 = {
  testKey: "modelltest-a1-01",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 1",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Der Supermarkt hat neue Öffnungszeiten" },
        { id: 2, text: "Deutschkurs für Anfänger" },
        { id: 3, text: "Wohnung zu vermieten" },
        { id: 4, text: "Bus fällt heute aus" },
        { id: 5, text: "Fahrrad zu verkaufen" },
        { id: 6, text: "Party am Samstag" },
        { id: 7, text: "Schwimmbad ist geschlossen" },
        { id: 8, text: "Neuer Arzt in der Straße" }
      ],
      texte: [
        { id: "a", text: "Der Kurs beginnt am Montag um 9 Uhr. Er ist für Personen ohne Deutschkenntnisse. Bitte bringen Sie einen Stift mit." },
        { id: "b", text: "Das Zimmer ist 20 Quadratmeter groß. Es kostet 200 Euro im Monat. Bitte rufen Sie Frau Müller an." },
        { id: "c", text: "Ab morgen ist der Supermarkt schon um 7 Uhr geöffnet. Am Sonntag bleibt er wie immer geschlossen." },
        { id: "d", text: "Das Fahrrad ist blau und fast neu. Der Preis ist 80 Euro. Sie können es am Wochenende ansehen." },
        { id: "e", text: "Wegen einer Reparatur fährt der Bus Nummer 12 heute nicht. Bitte nehmen Sie den Bus Nummer 5." }
      ],
      loesung: { a: 2, b: 3, c: 1, d: 5, e: 4 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich heiße Maria. Ich komme aus den Philippinen und lebe seit einem Jahr in Deutschland. Ich lerne Deutsch, weil ich als Krankenschwester arbeiten möchte. Mein Deutschkurs ist von Montag bis Freitag, von 9 bis 12 Uhr. Am Nachmittag arbeite ich in einem Café. Am Wochenende treffe ich meine Freunde oder ich telefoniere mit meiner Familie.",
      aussagen: [
        { nr: 1, text: "Maria kommt aus Deutschland.", korrekt: false, hinweis: "Sie kommt aus den Philippinen." },
        { nr: 2, text: "Maria lernt Deutsch für ihren Beruf.", korrekt: true, hinweis: "'weil ich als Krankenschwester arbeiten möchte'." },
        { nr: 3, text: "Der Deutschkurs ist am Wochenende.", korrekt: false, hinweis: "Der Kurs ist Montag bis Freitag." },
        { nr: 4, text: "Maria arbeitet am Nachmittag in einem Café.", korrekt: true, hinweis: "Steht direkt im Text." },
        { nr: 5, text: "Maria telefoniert nie mit ihrer Familie.", korrekt: false, hinweis: "Am Wochenende telefoniert sie mit der Familie." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen ein Zimmer für 250 Euro." },
        { nr: 2, text: "Sie möchten Deutsch lernen." },
        { nr: 3, text: "Sie brauchen ein Fahrrad." },
        { nr: 4, text: "Sie möchten einen Deutschlehrer kennenlernen." },
        { nr: 5, text: "Sie suchen einen Job im Restaurant." },
        { nr: 6, text: "Sie suchen einen Arzt." },
        { nr: 7, text: "Sie möchten Sport machen." },
        { nr: 8, text: "Sie suchen eine Katze." }
      ],
      anzeigen: [
        { id: "a", text: "Zimmer frei, 22 m², 220 Euro warm, ab sofort." },
        { id: "b", text: "Deutschkurs A1, Montag bis Freitag, 9–12 Uhr, kleine Gruppe." },
        { id: "c", text: "Restaurant sucht Kellner/in, Teilzeit, ab nächster Woche." },
        { id: "d", text: "Fahrrad, gebraucht, gute Farbe, 60 Euro." },
        { id: "e", text: "Fitnessstudio, neue Mitglieder willkommen, erste Woche kostenlos." }
      ],
      loesung: { 1: "a", 2: "b", 3: "d", 4: "x", 5: "c", 6: "x", 7: "e", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ Anna. Ich ___(2)___ aus Manila. ___(3)___ Bruder wohnt in Berlin. Ich ___(4)___ jeden Tag Deutsch. Am Wochenende ___(5)___ ich meine Freunde.",
      luecken: [
        { nr: 1, o: ["heiße", "heißt", "heißen"], c: 0, h: "ich → heiße." },
        { nr: 2, o: ["komme", "kommst", "kommt"], c: 0, h: "ich → komme." },
        { nr: 3, o: ["Mein", "Meine", "Meinen"], c: 0, h: "der Bruder → mein." },
        { nr: 4, o: ["lerne", "lernst", "lernt"], c: 0, h: "ich → lerne." },
        { nr: 5, o: ["treffe", "trifft", "treffen"], c: 0, h: "ich → treffe." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["in", "um", "am", "von", "seit"],
      text: "Ich wohne ___(6)___ Cebu. Der Kurs beginnt ___(7)___ 9 Uhr. ___(8)___ Montag habe ich frei. Ich lerne Deutsch ___(9)___ drei Monaten. Der Brief ist ___(10)___ meiner Schwester.",
      loesung: { 6: "in", 7: "um", 8: "am", 9: "seit", 10: "von" }
    }
  },

  schreiben: {
    titel: "Schreiben — Kurze Nachricht",
    anleitung: "Schreiben Sie eine kurze Nachricht an eine Freundin / einen Freund. Schreiben Sie mindestens 20 Wörter. Gehen Sie auf alle Punkte ein.",
    mindestwoerter: 20,
    aufgaben: [
      {
        nr: 1,
        briefform: "informell",
        situation: "Sie können heute nicht zum Deutschkurs kommen.",
        punkte: ["Sagen Sie, warum Sie nicht kommen können.", "Fragen Sie, was im Kurs gemacht wurde.", "Sagen Sie, wann Sie wiederkommen."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion. Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

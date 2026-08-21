// ============================================================
// FLOß Modelltest A1 — Nr. 03
// Gleiches Format wie Nr. 01/02.
// ============================================================

window.MODELLTEST_A1_03 = {
  testKey: "modelltest-a1-03",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 3",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neue Buslinie" },
        { id: 2, text: "Zahnarzt hat Urlaub" },
        { id: 3, text: "Deutschkurs am Abend" },
        { id: 4, text: "Katze gefunden" },
        { id: 5, text: "Auto zu verkaufen" },
        { id: 6, text: "Geburtstagsfeier" },
        { id: 7, text: "Sprachschule geschlossen" },
        { id: 8, text: "Tisch zu verschenken" }
      ],
      texte: [
        { id: "a", text: "Der Kurs ist am Montag und Mittwoch von 18 bis 20 Uhr. Er kostet 50 Euro pro Monat." },
        { id: "b", text: "Wir feiern am Samstag um 15 Uhr. Bitte kommen Sie pünktlich. Es gibt Kuchen und Musik." },
        { id: "c", text: "Der Doktor ist vom 10. bis 20. August nicht in der Praxis. Bitte rufen Sie danach an." },
        { id: "d", text: "Eine kleine graue Katze ist bei uns im Garten. Sie hat kein Halsband. Bitte melden Sie sich." },
        { id: "e", text: "Das Auto ist rot und fährt gut. Es kostet 3000 Euro. Bitte per Telefon melden." }
      ],
      loesung: { a: 3, b: 6, c: 2, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich heiße Paolo. Ich bin 25 Jahre alt und komme aus Cebu. Ich wohne mit meiner Frau in Lapu-Lapu. Wir haben einen Sohn. Er heißt Miguel und ist drei Jahre alt. Ich arbeite in einem Hotel. Meine Frau arbeitet nicht, sie bleibt zu Hause bei Miguel. Am Abend lerne ich Deutsch, weil ich in Deutschland arbeiten möchte.",
      aussagen: [
        { nr: 1, text: "Paolo ist 25 Jahre alt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 2, text: "Paolo wohnt allein.", korrekt: false, hinweis: "Er wohnt mit seiner Frau." },
        { nr: 3, text: "Der Sohn heißt Miguel.", korrekt: true, hinweis: "Steht direkt im Text." },
        { nr: 4, text: "Paolos Frau arbeitet im Hotel.", korrekt: false, hinweis: "Paolo arbeitet im Hotel, seine Frau nicht." },
        { nr: 5, text: "Paolo lernt am Morgen Deutsch.", korrekt: false, hinweis: "Er lernt am Abend." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen einen Tisch." },
        { nr: 2, text: "Sie brauchen einen Zahnarzt." },
        { nr: 3, text: "Sie möchten abends Deutsch lernen." },
        { nr: 4, text: "Sie haben eine Katze verloren." },
        { nr: 5, text: "Sie möchten ein Auto kaufen." },
        { nr: 6, text: "Sie suchen einen Job." },
        { nr: 7, text: "Sie möchten Fahrrad fahren." },
        { nr: 8, text: "Sie suchen eine Wohnung." }
      ],
      anzeigen: [
        { id: "a", text: "Tisch, gut, zu verschenken. Bitte selbst abholen." },
        { id: "b", text: "Deutschkurs am Abend, Montag und Mittwoch, 18–20 Uhr." },
        { id: "c", text: "Graue Katze gefunden, im Garten, ohne Halsband." },
        { id: "d", text: "Auto, rot, 3000 Euro, guter Zustand." },
        { id: "e", text: "Zahnarztpraxis, vom 10. bis 20. August geschlossen." }
      ],
      loesung: { 1: "a", 2: "e", 3: "b", 4: "c", 5: "d", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Das ist ___(1)___ Sohn. Er ___(2)___ Miguel. Er ___(3)___ drei Jahre alt. Meine Frau ___(4)___ zu Hause. Ich ___(5)___ im Hotel.",
      luecken: [
        { nr: 1, o: ["mein", "meine", "meinen"], c: 0, h: "der Sohn → mein." },
        { nr: 2, o: ["heißt", "heiße", "heißen"], c: 0, h: "er → heißt." },
        { nr: 3, o: ["ist", "sind", "bin"], c: 0, h: "er → ist." },
        { nr: 4, o: ["bleibt", "bleiben", "bleibe"], c: 0, h: "sie → bleibt." },
        { nr: 5, o: ["arbeite", "arbeitet", "arbeiten"], c: 0, h: "ich → arbeite." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["mit", "in", "im", "am", "um"],
      text: "Ich wohne ___(6)___ meiner Familie. Wir wohnen ___(7)___ Lapu-Lapu. Ich arbeite ___(8)___ Hotel. Der Kurs beginnt ___(9)___ 18 Uhr. ___(10)___ Montag habe ich Deutschkurs.",
      loesung: { 6: "mit", 7: "in", 8: "im", 9: "um", 10: "am" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihre Familie.",
        punkte: ["Sagen Sie, wie viele Personen in Ihrer Familie sind.", "Sagen Sie, wo Sie wohnen.", "Sagen Sie, was Sie am Wochenende zusammen machen."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

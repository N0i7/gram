// ============================================================
// FLOß Modelltest A1 — Nr. 17
// Gleiches Format wie Nr. 01–16.
// ============================================================

window.MODELLTEST_A1_17 = {
  testKey: "modelltest-a1-17",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 17",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Fahrschule sucht neue Schüler" },
        { id: 2, text: "Theorieprüfung am Montag" },
        { id: 3, text: "Fahrstunden am Wochenende" },
        { id: 4, text: "Führerschein bestanden" },
        { id: 5, text: "Praktische Prüfung verschoben" },
        { id: 6, text: "Neues Auto für die Fahrschule" },
        { id: 7, text: "Fahrschule ist geschlossen" },
        { id: 8, text: "Rabatt für neue Schüler" }
      ],
      texte: [
        { id: "a", text: "Die Fahrschule sucht neue Schülerinnen und Schüler für den nächsten Kurs." },
        { id: "b", text: "Am Montag ist die Theorieprüfung, bitte kommen Sie pünktlich." },
        { id: "c", text: "Fahrstunden gibt es auch am Samstag und Sonntag." },
        { id: "d", text: "Ich habe meinen Führerschein bestanden, ich bin sehr glücklich." },
        { id: "e", text: "Neue Schülerinnen und Schüler bekommen diesen Monat einen Rabatt." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich mache seit zwei Monaten den Führerschein. Ich habe zehn Fahrstunden gehabt. Am Montag ist meine Theorieprüfung. Ich lerne jeden Tag. Nächste Woche habe ich auch die praktische Prüfung.",
      aussagen: [
        { nr: 1, text: "Die Person macht seit zwei Monaten den Führerschein.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person hat noch keine Fahrstunde gehabt.", korrekt: false, hinweis: "Gegenteil: 'zehn Fahrstunden gehabt'." },
        { nr: 3, text: "Die Theorieprüfung ist am Dienstag.", korrekt: false, hinweis: "Die Theorieprüfung ist am Montag." },
        { nr: 4, text: "Die Person lernt jeden Tag.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die praktische Prüfung ist erst in einem Monat.", korrekt: false, hinweis: "Sie ist nächste Woche." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten den Führerschein machen." },
        { nr: 2, text: "Sie möchten wissen, wann die Theorieprüfung ist." },
        { nr: 3, text: "Sie möchten am Wochenende üben." },
        { nr: 4, text: "Sie haben Ihre Prüfung bestanden." },
        { nr: 5, text: "Sie möchten einen Rabatt bekommen." },
        { nr: 6, text: "Sie suchen ein gebrauchtes Auto." },
        { nr: 7, text: "Sie möchten Motorrad fahren lernen." },
        { nr: 8, text: "Sie suchen eine Autowerkstatt." }
      ],
      anzeigen: [
        { id: "a", text: "Fahrschule sucht neue Schüler." },
        { id: "b", text: "Theorieprüfung am Montag." },
        { id: "c", text: "Fahrstunden am Samstag und Sonntag." },
        { id: "d", text: "Herzlichen Glückwunsch zum bestandenen Führerschein." },
        { id: "e", text: "Rabatt für neue Fahrschüler diesen Monat." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ seit zwei Monaten den Führerschein. Ich ___(2)___ zehn Fahrstunden gehabt. Am Montag ___(3)___ meine Theorieprüfung. Ich ___(4)___ jeden Tag. Nächste Woche ___(5)___ ich auch die praktische Prüfung.",
      luecken: [
        { nr: 1, o: ["mache", "macht", "machen"], c: 0, h: "ich → mache." },
        { nr: 2, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 3, o: ["ist", "sind", "bin"], c: 0, h: "die Prüfung → ist." },
        { nr: 4, o: ["lerne", "lernt", "lernen"], c: 0, h: "ich → lerne." },
        { nr: 5, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["seit", "am", "für", "in", "zur"],
      text: "Ich mache ___(6)___ zwei Monaten den Führerschein. Die Prüfung ist ___(7)___ Montag. Ich lerne ___(8)___ die Prüfung. Nächste Woche fahre ich ___(9)___ Prüfung. Ich bin ___(10)___ der Fahrschule angemeldet.",
      loesung: { 6: "seit", 7: "am", 8: "für", 9: "zur", 10: "in" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihren Führerschein.",
        punkte: ["Sagen Sie, seit wann Sie den Führerschein machen.", "Sagen Sie, wann Ihre Prüfung ist.", "Sagen Sie, wie Sie sich fühlen."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

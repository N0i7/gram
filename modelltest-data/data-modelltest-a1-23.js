// ============================================================
// FLOß Modelltest A1 — Nr. 23
// Gleiches Format wie Nr. 01–22.
// ============================================================

window.MODELLTEST_A1_23 = {
  testKey: "modelltest-a1-23",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 23",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Sprachkurs im Ausland" },
        { id: 2, text: "Neue Freunde beim Sprachkurs" },
        { id: 3, text: "Unterkunft beim Sprachkurs" },
        { id: 4, text: "Sprachkurs kostet Geld" },
        { id: 5, text: "Sprachkurs dauert zwei Wochen" },
        { id: 6, text: "Anmeldung für den Sprachkurs" },
        { id: 7, text: "Ausflug mit der Sprachschule" },
        { id: 8, text: "Sprachkurs im Sommer" }
      ],
      texte: [
        { id: "a", text: "Der Sprachkurs kostet 300 Euro für zwei Wochen." },
        { id: "b", text: "Man kann sich online für den Sprachkurs anmelden." },
        { id: "c", text: "Die Sprachschule bietet auch eine Unterkunft in einer Gastfamilie an." },
        { id: "d", text: "Bei einem Sprachkurs im Ausland lernt man schnell neue Menschen kennen." },
        { id: "e", text: "Am Wochenende macht die Sprachschule einen Ausflug in die Stadt." }
      ],
      loesung: { a: 4, b: 6, c: 3, d: 2, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich möchte einen Sprachkurs im Ausland machen. Der Kurs kostet 300 Euro für zwei Wochen. Ich kann mich online anmelden. Die Sprachschule bietet eine Unterkunft in einer Gastfamilie an. Am Wochenende macht die Schule einen Ausflug. Ich freue mich schon sehr.",
      aussagen: [
        { nr: 1, text: "Die Person möchte einen Sprachkurs im Ausland machen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Der Kurs kostet 500 Euro.", korrekt: false, hinweis: "Er kostet 300 Euro." },
        { nr: 3, text: "Man kann sich nicht online anmelden.", korrekt: false, hinweis: "Gegenteil: 'ich kann mich online anmelden'." },
        { nr: 4, text: "Die Schule bietet eine Unterkunft an.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Am Wochenende gibt es einen Ausflug.", korrekt: true, hinweis: "Direkt im Text genannt." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten einen Sprachkurs im Ausland machen." },
        { nr: 2, text: "Sie suchen eine Unterkunft für den Sprachkurs." },
        { nr: 3, text: "Sie möchten sich online anmelden." },
        { nr: 4, text: "Sie möchten Informationen zum Preis." },
        { nr: 5, text: "Sie möchten an einem Ausflug teilnehmen." },
        { nr: 6, text: "Sie suchen einen Deutschkurs in Cebu." },
        { nr: 7, text: "Sie suchen ein Wörterbuch." },
        { nr: 8, text: "Sie suchen einen Flug." }
      ],
      anzeigen: [
        { id: "a", text: "Sprachkurs im Ausland — jetzt buchen." },
        { id: "b", text: "Unterkunft in einer Gastfamilie." },
        { id: "c", text: "Online-Anmeldung für den Sprachkurs." },
        { id: "d", text: "Preise für den Sprachkurs." },
        { id: "e", text: "Ausflug am Wochenende mit der Sprachschule." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ einen Sprachkurs im Ausland machen. Der Kurs ___(2)___ 300 Euro. Ich ___(3)___ mich online anmelden. Die Schule ___(4)___ eine Unterkunft an. Ich ___(5)___ mich schon sehr.",
      luecken: [
        { nr: 1, o: ["möchte", "möchtest", "möchten"], c: 0, h: "ich → möchte." },
        { nr: 2, o: ["kostet", "kostest", "kosten"], c: 0, h: "der Kurs → kostet." },
        { nr: 3, o: ["kann", "kannst", "können"], c: 0, h: "ich → kann." },
        { nr: 4, o: ["bietet", "bieten", "bietest"], c: 0, h: "die Schule → bietet." },
        { nr: 5, o: ["freue", "freust", "freuen"], c: 0, h: "ich → freue." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["für", "im", "in", "am", "mit"],
      text: "Der Kurs kostet 300 Euro ___(6)___ zwei Wochen. Ich mache einen Sprachkurs ___(7)___ Ausland. Ich wohne ___(8)___ einer Gastfamilie. ___(9)___ Wochenende gibt es einen Ausflug ___(10)___ der Sprachschule.",
      loesung: { 6: "für", 7: "im", 8: "in", 9: "am", 10: "mit" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihren Sprachkurs im Ausland.",
        punkte: ["Sagen Sie, wo der Kurs ist.", "Sagen Sie, wie lange der Kurs dauert.", "Fragen Sie, ob die Person mitkommen möchte."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

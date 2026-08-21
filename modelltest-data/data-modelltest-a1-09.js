// ============================================================
// FLOß Modelltest A1 — Nr. 09
// Gleiches Format wie Nr. 01–08.
// ============================================================

window.MODELLTEST_A1_09 = {
  testKey: "modelltest-a1-09",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 9",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Geburtstagsfeier am Samstag" },
        { id: 2, text: "Weihnachtsmarkt in der Stadt" },
        { id: 3, text: "Neujahrsfeier im Park" },
        { id: 4, text: "Hochzeit im Juni" },
        { id: 5, text: "Kindergeburtstag im Garten" },
        { id: 6, text: "Fest ist abgesagt" },
        { id: 7, text: "Musikfestival am Strand" },
        { id: 8, text: "Kirche feiert Jubiläum" }
      ],
      texte: [
        { id: "a", text: "Wir feiern meinen Geburtstag am Samstag um 18 Uhr. Bitte bring ein Geschenk mit Musik mit." },
        { id: "b", text: "Vom 1. bis 24. Dezember gibt es einen Markt auf dem Platz. Es gibt Essen und Geschenke." },
        { id: "c", text: "Wir heiraten im Juni. Die Feier ist im Garten meiner Eltern." },
        { id: "d", text: "Wegen des Regens ist das Fest heute leider abgesagt. Wir feiern nächste Woche." },
        { id: "e", text: "Mein Sohn wird 5 Jahre alt. Wir feiern am Sonntag in unserem Garten." }
      ],
      loesung: { a: 1, b: 2, c: 4, d: 6, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Am Samstag feiern wir eine Party. Es ist der Geburtstag von meiner Tochter. Sie wird 8 Jahre alt. Wir feiern in unserem Garten, mit Musik und Essen. Viele Kinder kommen. Meine Tochter freut sich sehr auf die Party.",
      aussagen: [
        { nr: 1, text: "Die Party ist am Sonntag.", korrekt: false, hinweis: "Die Party ist am Samstag." },
        { nr: 2, text: "Es ist der Geburtstag der Tochter.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Die Tochter wird 10 Jahre alt.", korrekt: false, hinweis: "Sie wird 8 Jahre alt." },
        { nr: 4, text: "Die Party ist im Garten.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Tochter freut sich nicht auf die Party.", korrekt: false, hinweis: "Gegenteil: 'freut sich sehr'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten zum Weihnachtsmarkt gehen." },
        { nr: 2, text: "Sie feiern Ihren Geburtstag." },
        { nr: 3, text: "Sie heiraten bald." },
        { nr: 4, text: "Ihr Kind hat Geburtstag." },
        { nr: 5, text: "Das Fest ist wegen Regen abgesagt." },
        { nr: 6, text: "Sie möchten ein Konzert sehen." },
        { nr: 7, text: "Sie möchten tanzen gehen." },
        { nr: 8, text: "Sie suchen ein Restaurant." }
      ],
      anzeigen: [
        { id: "a", text: "Weihnachtsmarkt vom 1. bis 24. Dezember." },
        { id: "b", text: "Geburtstagsfeier am Samstag, 18 Uhr." },
        { id: "c", text: "Hochzeit im Juni, Feier im Garten." },
        { id: "d", text: "Kindergeburtstag am Sonntag im Garten." },
        { id: "e", text: "Fest wegen Regen abgesagt." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Wir ___(1)___ am Samstag eine Party. ___(2)___ Tochter wird 8 Jahre alt. Wir ___(3)___ im Garten. Viele Kinder ___(4)___. Meine Tochter ___(5)___ sich sehr.",
      luecken: [
        { nr: 1, o: ["feiern", "feiert", "feiere"], c: 0, h: "wir → feiern." },
        { nr: 2, o: ["Mein", "Meine", "Meinen"], c: 1, h: "die Tochter → meine." },
        { nr: 3, o: ["feiern", "feiert", "feiere"], c: 0, h: "wir → feiern." },
        { nr: 4, o: ["kommen", "kommt", "komme"], c: 0, h: "sie (Kinder) → kommen." },
        { nr: 5, o: ["freut", "freuen", "freue"], c: 0, h: "sie (Tochter) → freut." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["am", "in", "mit", "auf", "von"],
      text: "Die Party ist ___(6)___ Samstag. Wir feiern ___(7)___ unserem Garten. Wir feiern ___(8)___ Musik. Meine Tochter freut sich ___(9)___ die Party. Es ist der Geburtstag ___(10)___ meiner Tochter.",
      loesung: { 6: "am", 7: "in", 8: "mit", 9: "auf", 10: "von" }
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
        situation: "Sie laden eine Freundin / einen Freund zu Ihrer Geburtstagsfeier ein.",
        punkte: ["Sagen Sie, wann die Feier ist.", "Sagen Sie, wo die Feier ist.", "Fragen Sie, ob die Person kommen kann."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

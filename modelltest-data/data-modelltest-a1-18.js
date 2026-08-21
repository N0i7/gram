// ============================================================
// FLOß Modelltest A1 — Nr. 18
// Gleiches Format wie Nr. 01–17.
// ============================================================

window.MODELLTEST_A1_18 = {
  testKey: "modelltest-a1-18",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 18",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Jugendclub sucht neue Mitglieder" },
        { id: 2, text: "Kino-Abend für Jugendliche" },
        { id: 3, text: "Tanzkurs am Freitag" },
        { id: 4, text: "Basketballplatz neu gebaut" },
        { id: 5, text: "Jugendclub ist geschlossen" },
        { id: 6, text: "Musikprobe am Montag" },
        { id: 7, text: "Fußballturnier im Sommer" },
        { id: 8, text: "Ferienprogramm für Jugendliche" }
      ],
      texte: [
        { id: "a", text: "Der Jugendclub sucht neue Mitglieder zwischen 12 und 18 Jahren." },
        { id: "b", text: "Am Samstag zeigen wir einen Film für alle Jugendlichen im Club." },
        { id: "c", text: "Jeden Freitag gibt es einen Tanzkurs für Anfänger." },
        { id: "d", text: "Der neue Basketballplatz ist ab sofort für alle geöffnet." },
        { id: "e", text: "In den Sommerferien gibt es viele Aktivitäten für Jugendliche." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich gehe oft in den Jugendclub. Dort spiele ich Basketball mit meinen Freunden. Am Freitag gibt es einen Tanzkurs, den ich auch mag. In den Sommerferien gibt es viele Aktivitäten. Ich freue mich schon darauf.",
      aussagen: [
        { nr: 1, text: "Die Person geht selten in den Jugendclub.", korrekt: false, hinweis: "Gegenteil: 'ich gehe oft'." },
        { nr: 2, text: "Die Person spielt dort Basketball.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Der Tanzkurs ist am Montag.", korrekt: false, hinweis: "Der Tanzkurs ist am Freitag." },
        { nr: 4, text: "In den Sommerferien gibt es viele Aktivitäten.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person freut sich nicht auf die Ferien.", korrekt: false, hinweis: "Gegenteil: 'ich freue mich schon darauf'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten in den Jugendclub gehen." },
        { nr: 2, text: "Sie möchten einen Film sehen." },
        { nr: 3, text: "Sie möchten tanzen lernen." },
        { nr: 4, text: "Sie möchten Basketball spielen." },
        { nr: 5, text: "Sie suchen Aktivitäten für die Sommerferien." },
        { nr: 6, text: "Sie suchen einen Deutschkurs." },
        { nr: 7, text: "Sie möchten schwimmen gehen." },
        { nr: 8, text: "Sie suchen ein Fitnessstudio." }
      ],
      anzeigen: [
        { id: "a", text: "Jugendclub sucht neue Mitglieder." },
        { id: "b", text: "Kino-Abend am Samstag für Jugendliche." },
        { id: "c", text: "Tanzkurs jeden Freitag." },
        { id: "d", text: "Neuer Basketballplatz jetzt geöffnet." },
        { id: "e", text: "Ferienprogramm mit vielen Aktivitäten." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ oft in den Jugendclub. Dort ___(2)___ ich Basketball. Am Freitag ___(3)___ es einen Tanzkurs. In den Sommerferien ___(4)___ es viele Aktivitäten. Ich ___(5)___ mich schon darauf.",
      luecken: [
        { nr: 1, o: ["gehe", "geht", "gehst"], c: 0, h: "ich → gehe." },
        { nr: 2, o: ["spiele", "spielt", "spielen"], c: 0, h: "ich → spiele." },
        { nr: 3, o: ["gibt", "gebe", "geben"], c: 0, h: "es gibt → gibt." },
        { nr: 4, o: ["gibt", "gebe", "geben"], c: 0, h: "es gibt → gibt." },
        { nr: 5, o: ["freue", "freut", "freuen"], c: 0, h: "ich → freue." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["in", "mit", "am", "auf", "für"],
      text: "Ich gehe ___(6)___ den Jugendclub. Ich spiele Basketball ___(7)___ meinen Freunden. ___(8)___ Freitag ist der Tanzkurs. Ich freue mich ___(9)___ die Sommerferien. Es gibt viel ___(10)___ Jugendliche.",
      loesung: { 6: "in", 7: "mit", 8: "am", 9: "auf", 10: "für" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über den Jugendclub.",
        punkte: ["Sagen Sie, was Sie im Jugendclub machen.", "Sagen Sie, wann Sie hingehen.", "Laden Sie die Person ein."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

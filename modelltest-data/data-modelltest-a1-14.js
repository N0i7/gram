// ============================================================
// FLOß Modelltest A1 — Nr. 14
// Gleiches Format wie Nr. 01–13.
// ============================================================

window.MODELLTEST_A1_14 = {
  testKey: "modelltest-a1-14",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 14",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Seniorentreff jeden Mittwoch" },
        { id: 2, text: "Spaziergang im Park" },
        { id: 3, text: "Kartenspiel-Nachmittag" },
        { id: 4, text: "Ausflug ans Meer" },
        { id: 5, text: "Computerkurs für Senioren" },
        { id: 6, text: "Seniorentreff fällt aus" },
        { id: 7, text: "Singen im Chor" },
        { id: 8, text: "Kochkurs für Senioren" }
      ],
      texte: [
        { id: "a", text: "Jeden Mittwoch treffen sich Seniorinnen und Senioren im Gemeindehaus zum Reden und Kaffeetrinken." },
        { id: "b", text: "Am Donnerstag gibt es einen Computerkurs, dort lernt man E-Mails schreiben." },
        { id: "c", text: "Am Freitag spielen wir zusammen Karten, alle sind herzlich eingeladen." },
        { id: "d", text: "Nächste Woche fahren wir gemeinsam ans Meer, die Fahrt dauert zwei Stunden." },
        { id: "e", text: "Der Chor probt jeden Montag, neue Sängerinnen und Sänger sind willkommen." }
      ],
      loesung: { a: 1, b: 5, c: 3, d: 4, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich gehe jeden Mittwoch zum Seniorentreff. Dort trinken wir Kaffee und reden zusammen. Am Freitag spiele ich Karten mit meinen Freunden. Nächste Woche fahren wir zusammen ans Meer. Ich freue mich sehr darauf.",
      aussagen: [
        { nr: 1, text: "Die Person geht jeden Montag zum Seniorentreff.", korrekt: false, hinweis: "Sie geht jeden Mittwoch." },
        { nr: 2, text: "Beim Seniorentreff trinken sie Kaffee.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Am Freitag spielt die Person Karten.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Nächste Woche fahren sie in die Berge.", korrekt: false, hinweis: "Sie fahren ans Meer." },
        { nr: 5, text: "Die Person freut sich nicht auf den Ausflug.", korrekt: false, hinweis: "Gegenteil: 'freue mich sehr darauf'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten zum Seniorentreff gehen." },
        { nr: 2, text: "Sie möchten einen Computerkurs machen." },
        { nr: 3, text: "Sie möchten Karten spielen." },
        { nr: 4, text: "Sie möchten ans Meer fahren." },
        { nr: 5, text: "Sie möchten im Chor singen." },
        { nr: 6, text: "Sie suchen einen Sprachkurs." },
        { nr: 7, text: "Sie möchten schwimmen gehen." },
        { nr: 8, text: "Sie suchen einen Tanzkurs." }
      ],
      anzeigen: [
        { id: "a", text: "Seniorentreff jeden Mittwoch im Gemeindehaus." },
        { id: "b", text: "Computerkurs am Donnerstag, E-Mails schreiben lernen." },
        { id: "c", text: "Kartenspiel-Nachmittag am Freitag." },
        { id: "d", text: "Ausflug ans Meer nächste Woche." },
        { id: "e", text: "Chorprobe jeden Montag, neue Mitglieder willkommen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ jeden Mittwoch zum Seniorentreff. Dort ___(2)___ wir Kaffee. Am Freitag ___(3)___ ich Karten. Nächste Woche ___(4)___ wir ans Meer. Ich ___(5)___ mich sehr darauf.",
      luecken: [
        { nr: 1, o: ["gehe", "geht", "gehst"], c: 0, h: "ich → gehe." },
        { nr: 2, o: ["trinke", "trinkt", "trinken"], c: 2, h: "wir → trinken." },
        { nr: 3, o: ["spiele", "spielt", "spielen"], c: 0, h: "ich → spiele." },
        { nr: 4, o: ["fahre", "fährt", "fahren"], c: 2, h: "wir → fahren." },
        { nr: 5, o: ["freue", "freut", "freuen"], c: 0, h: "ich → freue." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["zum", "am", "im", "ans", "mit"],
      text: "Ich gehe ___(6)___ Seniorentreff. Das ist ___(7)___ Mittwoch. Wir sind ___(8)___ Gemeindehaus. Am Freitag spiele ich Karten ___(9)___ meinen Freunden. Nächste Woche fahren wir ___(10)___ Meer.",
      loesung: { 6: "zum", 7: "am", 8: "im", 9: "mit", 10: "ans" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über den Seniorentreff.",
        punkte: ["Sagen Sie, wann der Seniorentreff ist.", "Sagen Sie, was Sie dort machen.", "Laden Sie die Person ein."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

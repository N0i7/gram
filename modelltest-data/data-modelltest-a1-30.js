// ============================================================
// FLOß Modelltest A1 — Nr. 30
// Gleiches Format wie Nr. 01–29.
// ============================================================

window.MODELLTEST_A1_30 = {
  testKey: "modelltest-a1-30",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 30",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Sport nach der Arbeit" },
        { id: 2, text: "Fitnessstudio in der Nähe" },
        { id: 3, text: "Joggen am Morgen" },
        { id: 4, text: "Sport mit Kollegen" },
        { id: 5, text: "Keine Zeit für Sport" },
        { id: 6, text: "Sport am Wochenende" },
        { id: 7, text: "Schwimmen im Sommer" },
        { id: 8, text: "Yoga zu Hause" }
      ],
      texte: [
        { id: "a", text: "Nach der Arbeit gehe ich oft eine Stunde ins Fitnessstudio." },
        { id: "b", text: "Ein Kollege joggt jeden Morgen vor der Arbeit." },
        { id: "c", text: "Manchmal machen wir zusammen mit Kollegen Sport in der Mittagspause." },
        { id: "d", text: "Am Wochenende spiele ich mit Freunden Fußball." },
        { id: "e", text: "Zu Hause mache ich abends kurz Yoga, das entspannt mich." }
      ],
      loesung: { a: 1, b: 3, c: 4, d: 6, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich arbeite von Montag bis Freitag. Nach der Arbeit bin ich oft müde. Trotzdem gehe ich zweimal pro Woche ins Fitnessstudio. Am Wochenende spiele ich Fußball mit Freunden. Abends mache ich manchmal Yoga zu Hause. Sport macht mir viel Spaß.",
      aussagen: [
        { nr: 1, text: "Die Person arbeitet von Montag bis Freitag.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person geht nie ins Fitnessstudio.", korrekt: false, hinweis: "Gegenteil: 'gehe ich zweimal pro Woche ins Fitnessstudio'." },
        { nr: 3, text: "Die Person spielt am Wochenende Fußball.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person macht nie Yoga.", korrekt: false, hinweis: "Gegenteil: 'mache ich manchmal Yoga'." },
        { nr: 5, text: "Sport macht der Person keinen Spaß.", korrekt: false, hinweis: "Gegenteil: 'Sport macht mir viel Spaß'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen ein Fitnessstudio." },
        { nr: 2, text: "Sie möchten mit Kollegen Sport machen." },
        { nr: 3, text: "Sie suchen einen Fußballplatz." },
        { nr: 4, text: "Sie möchten einen Yoga-Kurs besuchen." },
        { nr: 5, text: "Sie suchen eine Laufgruppe." },
        { nr: 6, text: "Sie suchen ein Restaurant." },
        { nr: 7, text: "Sie suchen ein Auto." },
        { nr: 8, text: "Sie suchen eine Wohnung." }
      ],
      anzeigen: [
        { id: "a", text: "Fitnessstudio — jetzt Mitglied werden." },
        { id: "b", text: "Sportgruppe für Kollegen." },
        { id: "c", text: "Fußballplatz zu mieten." },
        { id: "d", text: "Yoga-Kurs am Abend." },
        { id: "e", text: "Laufgruppe am Morgen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ von Montag bis Freitag. Nach der Arbeit ___(2)___ ich oft müde. Trotzdem ___(3)___ ich zweimal pro Woche ins Fitnessstudio. Am Wochenende ___(4)___ ich Fußball. Sport ___(5)___ mir viel Spaß.",
      luecken: [
        { nr: 1, o: ["arbeite", "arbeitest", "arbeiten"], c: 0, h: "ich → arbeite." },
        { nr: 2, o: ["bin", "bist", "ist"], c: 0, h: "ich → bin." },
        { nr: 3, o: ["gehe", "gehst", "gehen"], c: 0, h: "ich → gehe." },
        { nr: 4, o: ["spiele", "spielst", "spielen"], c: 0, h: "ich → spiele." },
        { nr: 5, o: ["macht", "machst", "machen"], c: 0, h: "Sport (er/es/sie) → macht." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["ins", "mit", "am", "nach", "zu"],
      text: "Ich gehe ___(6)___ Fitnessstudio. Ich spiele Fußball ___(7)___ Freunden. ___(8)___ Wochenende habe ich Zeit für Sport. ___(9)___ der Arbeit bin ich müde. Ich mache Yoga ___(10)___ Hause.",
      loesung: { 6: "ins", 7: "mit", 8: "am", 9: "nach", 10: "zu" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihren Sport nach der Arbeit.",
        punkte: ["Sagen Sie, welchen Sport Sie machen.", "Sagen Sie, wann Sie Sport machen.", "Fragen Sie, ob die Person mitmachen möchte."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

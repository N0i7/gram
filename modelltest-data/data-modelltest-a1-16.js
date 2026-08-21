// ============================================================
// FLOß Modelltest A1 — Nr. 16
// Gleiches Format wie Nr. 01–15.
// ============================================================

window.MODELLTEST_A1_16 = {
  testKey: "modelltest-a1-16",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 16",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Freizeitpark hat neue Attraktion" },
        { id: 2, text: "Familienticket im Angebot" },
        { id: 3, text: "Öffnungszeiten im Sommer" },
        { id: 4, text: "Ausflug am Wochenende" },
        { id: 5, text: "Picknick im Park" },
        { id: 6, text: "Park ist wegen Wetter geschlossen" },
        { id: 7, text: "Neue Achterbahn eröffnet" },
        { id: 8, text: "Parkplatz kostenlos" }
      ],
      texte: [
        { id: "a", text: "Der Freizeitpark hat eine neue Achterbahn eröffnet, sie ist die schnellste im ganzen Land." },
        { id: "b", text: "Familien können ein günstiges Familienticket kaufen und den ganzen Tag im Park bleiben." },
        { id: "c", text: "Im Sommer ist der Park von 9 bis 19 Uhr geöffnet." },
        { id: "d", text: "Am Samstag machen wir einen Ausflug in den Freizeitpark mit der ganzen Familie." },
        { id: "e", text: "Der Parkplatz beim Freizeitpark ist für alle Besucher kostenlos." }
      ],
      loesung: { a: 7, b: 2, c: 3, d: 4, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Am Samstag waren wir mit der Familie im Freizeitpark. Wir haben ein Familienticket gekauft. Der Park ist von 9 bis 19 Uhr geöffnet. Meine Kinder sind mit der neuen Achterbahn gefahren. Der Parkplatz war kostenlos. Wir hatten einen schönen Tag.",
      aussagen: [
        { nr: 1, text: "Die Familie war am Sonntag im Freizeitpark.", korrekt: false, hinweis: "Sie waren am Samstag dort." },
        { nr: 2, text: "Die Familie hat ein Familienticket gekauft.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Der Park ist bis 20 Uhr geöffnet.", korrekt: false, hinweis: "Er ist bis 19 Uhr geöffnet." },
        { nr: 4, text: "Die Kinder sind mit der neuen Achterbahn gefahren.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Der Parkplatz hat Geld gekostet.", korrekt: false, hinweis: "Gegenteil: 'kostenlos'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten in den Freizeitpark gehen." },
        { nr: 2, text: "Sie möchten ein Familienticket kaufen." },
        { nr: 3, text: "Sie möchten die Öffnungszeiten wissen." },
        { nr: 4, text: "Sie möchten die neue Achterbahn fahren." },
        { nr: 5, text: "Sie suchen einen kostenlosen Parkplatz." },
        { nr: 6, text: "Sie suchen ein Hotel in der Nähe." },
        { nr: 7, text: "Sie möchten ein Restaurant reservieren." },
        { nr: 8, text: "Sie suchen einen Kinderarzt." }
      ],
      anzeigen: [
        { id: "a", text: "Freizeitpark, täglich geöffnet." },
        { id: "b", text: "Familienticket für den ganzen Tag." },
        { id: "c", text: "Öffnungszeiten im Sommer: 9 bis 19 Uhr." },
        { id: "d", text: "Neue Achterbahn, die schnellste im Land." },
        { id: "e", text: "Kostenloser Parkplatz für alle Besucher." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Am Samstag ___(1)___ wir im Freizeitpark. Wir ___(2)___ ein Familienticket gekauft. Der Park ___(3)___ von 9 bis 19 Uhr geöffnet. Meine Kinder ___(4)___ mit der Achterbahn gefahren. Wir ___(5)___ einen schönen Tag.",
      luecken: [
        { nr: 1, o: ["waren", "sind", "war"], c: 0, h: "wir → waren." },
        { nr: 2, o: ["habe", "hat", "haben"], c: 2, h: "wir → haben." },
        { nr: 3, o: ["ist", "sind", "bin"], c: 0, h: "der Park → ist." },
        { nr: 4, o: ["ist", "sind", "war"], c: 1, h: "meine Kinder → sind." },
        { nr: 5, o: ["hatte", "hatten", "habe"], c: 1, h: "wir → hatten." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["mit", "im", "von", "bis", "am"],
      text: "___(6)___ Samstag waren wir ___(7)___ Freizeitpark. Der Park ist ___(8)___ 9 ___(9)___ 19 Uhr geöffnet. Wir waren ___(10)___ der ganzen Familie dort.",
      loesung: { 6: "am", 7: "im", 8: "von", 9: "bis", 10: "mit" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über einen Ausflug in den Freizeitpark.",
        punkte: ["Sagen Sie, wann Sie im Park waren.", "Sagen Sie, was Ihnen gefallen hat.", "Fragen Sie, ob die Person mitkommen möchte."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

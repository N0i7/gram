// ============================================================
// FLOß Modelltest A1 — Nr. 29
// Gleiches Format wie Nr. 01–28.
// ============================================================

window.MODELLTEST_A1_29 = {
  testKey: "modelltest-a1-29",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 29",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Fahrschein online kaufen" },
        { id: 2, text: "Ticket-App installieren" },
        { id: 3, text: "Monatskarte kaufen" },
        { id: 4, text: "Fahrschein am Automaten" },
        { id: 5, text: "Fahrschein zeigen" },
        { id: 6, text: "Fahrschein vergessen" },
        { id: 7, text: "Ticket-App ist kostenlos" },
        { id: 8, text: "Fahrschein für Kinder" }
      ],
      texte: [
        { id: "a", text: "Man kann den Fahrschein einfach online kaufen." },
        { id: "b", text: "Zuerst muss man die Ticket-App auf dem Handy installieren." },
        { id: "c", text: "Für Vielfahrer lohnt sich eine Monatskarte." },
        { id: "d", text: "Man kann den Fahrschein auch am Automaten kaufen." },
        { id: "e", text: "Im Bus muss man den Fahrschein dem Fahrer zeigen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich fahre jeden Tag mit dem Bus. Ich kaufe den Fahrschein mit einer App. Die App ist kostenlos. Ich zeige den Fahrschein dem Busfahrer. Ich habe auch eine Monatskarte gekauft. Das spart mir Geld.",
      aussagen: [
        { nr: 1, text: "Die Person fährt jeden Tag mit dem Bus.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person kauft den Fahrschein nicht mit einer App.", korrekt: false, hinweis: "Gegenteil: 'ich kaufe den Fahrschein mit einer App'." },
        { nr: 3, text: "Die App kostet Geld.", korrekt: false, hinweis: "Gegenteil: 'die App ist kostenlos'." },
        { nr: 4, text: "Die Person hat eine Monatskarte gekauft.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Monatskarte spart der Person kein Geld.", korrekt: false, hinweis: "Gegenteil: 'das spart mir Geld'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten einen Fahrschein online kaufen." },
        { nr: 2, text: "Sie möchten die Ticket-App installieren." },
        { nr: 3, text: "Sie möchten eine Monatskarte kaufen." },
        { nr: 4, text: "Sie suchen einen Fahrkartenautomaten." },
        { nr: 5, text: "Sie möchten wissen, wo Sie den Fahrschein zeigen müssen." },
        { nr: 6, text: "Sie suchen ein Fahrrad." },
        { nr: 7, text: "Sie suchen ein Auto." },
        { nr: 8, text: "Sie suchen ein Taxi." }
      ],
      anzeigen: [
        { id: "a", text: "Fahrschein online kaufen." },
        { id: "b", text: "Ticket-App zum Download." },
        { id: "c", text: "Monatskarte — jetzt günstiger." },
        { id: "d", text: "Fahrkartenautomaten in der Stadt." },
        { id: "e", text: "Fahrschein-Regeln im Bus." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ jeden Tag mit dem Bus. Ich ___(2)___ den Fahrschein mit einer App. Die App ___(3)___ kostenlos. Ich ___(4)___ den Fahrschein dem Busfahrer. Ich ___(5)___ auch eine Monatskarte.",
      luecken: [
        { nr: 1, o: ["fahre", "fährst", "fahren"], c: 0, h: "ich → fahre." },
        { nr: 2, o: ["kaufe", "kaufst", "kaufen"], c: 0, h: "ich → kaufe." },
        { nr: 3, o: ["ist", "sind", "war"], c: 0, h: "die App → ist." },
        { nr: 4, o: ["zeige", "zeigst", "zeigen"], c: 0, h: "ich → zeige." },
        { nr: 5, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["mit", "im", "für", "auf", "am"],
      text: "Ich fahre ___(6)___ dem Bus. Ich kaufe den Fahrschein ___(7)___ meinem Handy. Ich zeige ihn ___(8)___ Bus. Die Monatskarte ist gut ___(9)___ Vielfahrer. Ich kaufe den Fahrschein manchmal ___(10)___ Automaten.",
      loesung: { 6: "mit", 7: "auf", 8: "im", 9: "für", 10: "am" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über die neue Ticket-App für den Bus.",
        punkte: ["Sagen Sie, wie die App heißt.", "Sagen Sie, was Ihnen daran gefällt.", "Fragen Sie, ob die Person die App auch benutzt."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

// ============================================================
// FLOß Modelltest A1 — Nr. 22
// Gleiches Format wie Nr. 01–21.
// ============================================================

window.MODELLTEST_A1_22 = {
  testKey: "modelltest-a1-22",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 22",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Streaming-Dienst kündigen" },
        { id: 2, text: "Neuer Film im Angebot" },
        { id: 3, text: "Familientarif buchen" },
        { id: 4, text: "Passwort vergessen" },
        { id: 5, text: "Serie zu Ende geschaut" },
        { id: 6, text: "Kostenlose Testphase" },
        { id: 7, text: "Handy und Fernseher verbinden" },
        { id: 8, text: "Neue Serie startet" }
      ],
      texte: [
        { id: "a", text: "Man kann den Streaming-Dienst jederzeit online kündigen." },
        { id: "b", text: "Der neue Familientarif kostet 12 Euro im Monat für vier Personen." },
        { id: "c", text: "Die erste Woche ist kostenlos, danach kostet der Dienst Geld." },
        { id: "d", text: "Am Freitag startet eine neue Serie mit zehn Folgen." },
        { id: "e", text: "Man kann das Handy einfach mit dem Fernseher verbinden." }
      ],
      loesung: { a: 1, b: 3, c: 6, d: 8, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich möchte einen Streaming-Dienst abonnieren. Der Familientarif kostet 12 Euro im Monat. Die erste Woche ist kostenlos. Am Freitag startet eine neue Serie. Ich möchte die Serie sehen. Ich kann den Dienst jederzeit kündigen.",
      aussagen: [
        { nr: 1, text: "Die Person möchte einen Streaming-Dienst abonnieren.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Der Familientarif kostet 20 Euro.", korrekt: false, hinweis: "Er kostet 12 Euro." },
        { nr: 3, text: "Die erste Woche kostet Geld.", korrekt: false, hinweis: "Gegenteil: 'die erste Woche ist kostenlos'." },
        { nr: 4, text: "Am Freitag startet eine neue Serie.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person kann den Dienst jederzeit kündigen.", korrekt: true, hinweis: "Direkt im letzten Satz." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten einen Streaming-Dienst testen." },
        { nr: 2, text: "Sie möchten einen Familientarif buchen." },
        { nr: 3, text: "Sie möchten Ihren Vertrag kündigen." },
        { nr: 4, text: "Sie haben Ihr Passwort vergessen." },
        { nr: 5, text: "Sie möchten eine neue Serie sehen." },
        { nr: 6, text: "Sie suchen ein Kino in der Nähe." },
        { nr: 7, text: "Sie suchen ein neues Handy." },
        { nr: 8, text: "Sie suchen einen Fernseher." }
      ],
      anzeigen: [
        { id: "a", text: "Kostenlose Testphase, eine Woche gratis." },
        { id: "b", text: "Familientarif für 12 Euro im Monat." },
        { id: "c", text: "Vertrag online kündigen." },
        { id: "d", text: "Passwort zurücksetzen." },
        { id: "e", text: "Neue Serie ab Freitag." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ einen Streaming-Dienst abonnieren. Der Familientarif ___(2)___ 12 Euro. Die erste Woche ___(3)___ kostenlos. Am Freitag ___(4)___ eine neue Serie. Ich ___(5)___ die Serie sehen.",
      luecken: [
        { nr: 1, o: ["möchte", "möchtest", "möchten"], c: 0, h: "ich → möchte." },
        { nr: 2, o: ["kostet", "kostest", "kosten"], c: 0, h: "der Tarif → kostet." },
        { nr: 3, o: ["ist", "sind", "war"], c: 0, h: "die Woche → ist." },
        { nr: 4, o: ["startet", "starten", "startest"], c: 0, h: "die Serie → startet." },
        { nr: 5, o: ["möchte", "möchtest", "möchten"], c: 0, h: "ich → möchte." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["im", "am", "für", "ohne", "seit"],
      text: "Der Tarif kostet 12 Euro ___(6)___ Monat. Die neue Serie startet ___(7)___ Freitag. Der Tarif ist ___(8)___ vier Personen. Man kann testen ___(9)___ Kosten. ___(10)___ einer Woche schaue ich die Serie.",
      loesung: { 6: "im", 7: "am", 8: "für", 9: "ohne", 10: "seit" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über einen neuen Streaming-Dienst.",
        punkte: ["Sagen Sie, was der Tarif kostet.", "Sagen Sie, welche Serie Sie sehen möchten.", "Fragen Sie, ob die Person mitmachen möchte."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

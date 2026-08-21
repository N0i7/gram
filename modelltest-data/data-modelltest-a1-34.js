// ============================================================
// FLOß Modelltest A1 — Nr. 34
// Gleiches Format wie Nr. 01–33.
// ============================================================

window.MODELLTEST_A1_34 = {
  testKey: "modelltest-a1-34",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 34",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Nebenjob im Supermarkt" },
        { id: 2, text: "Arbeit am Wochenende" },
        { id: 3, text: "Geld für das Studium" },
        { id: 4, text: "Wenig Zeit für Freunde" },
        { id: 5, text: "Nebenjob macht Spaß" },
        { id: 6, text: "Arbeit in der Bibliothek" },
        { id: 7, text: "Nebenjob ist anstrengend" },
        { id: 8, text: "Praktikum im Büro" }
      ],
      texte: [
        { id: "a", text: "Ich arbeite im Supermarkt als Nebenjob." },
        { id: "b", text: "Ich arbeite meistens am Wochenende." },
        { id: "c", text: "Mit dem Geld bezahle ich mein Studium." },
        { id: "d", text: "Manchmal habe ich wenig Zeit für Freunde." },
        { id: "e", text: "Der Job macht mir Spaß." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich studiere und arbeite auch in einem Supermarkt. Ich arbeite meistens am Wochenende. Mit dem Geld bezahle ich mein Studium. Manchmal habe ich wenig Zeit für Freunde. Der Job macht mir aber Spaß. Meine Kollegen sind sehr nett.",
      aussagen: [
        { nr: 1, text: "Die Person studiert und arbeitet.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person arbeitet nie am Wochenende.", korrekt: false, hinweis: "Gegenteil: 'arbeite meistens am Wochenende'." },
        { nr: 3, text: "Die Person bezahlt damit ihr Studium.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person hat immer viel Zeit für Freunde.", korrekt: false, hinweis: "Gegenteil: 'manchmal habe ich wenig Zeit für Freunde'." },
        { nr: 5, text: "Der Job macht der Person keinen Spaß.", korrekt: false, hinweis: "Gegenteil: 'Der Job macht mir aber Spaß'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen einen Nebenjob im Supermarkt." },
        { nr: 2, text: "Sie möchten am Wochenende arbeiten." },
        { nr: 3, text: "Sie suchen einen Job für Studierende." },
        { nr: 4, text: "Sie möchten in der Bibliothek arbeiten." },
        { nr: 5, text: "Sie suchen ein Praktikum im Büro." },
        { nr: 6, text: "Sie suchen ein Auto." },
        { nr: 7, text: "Sie suchen eine Wohnung." },
        { nr: 8, text: "Sie suchen ein Fahrrad." }
      ],
      anzeigen: [
        { id: "a", text: "Supermarkt sucht Aushilfe." },
        { id: "b", text: "Wochenendjob gesucht — Bewerben Sie sich." },
        { id: "c", text: "Nebenjob für Studierende." },
        { id: "d", text: "Bibliothek sucht Hilfskraft." },
        { id: "e", text: "Praktikum im Büro." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ und arbeite auch. Ich ___(2)___ meistens am Wochenende. Mit dem Geld ___(3)___ ich mein Studium. Der Job ___(4)___ mir Spaß. Meine Kollegen ___(5)___ sehr nett.",
      luecken: [
        { nr: 1, o: ["studiere", "studierst", "studieren"], c: 0, h: "ich → studiere." },
        { nr: 2, o: ["arbeite", "arbeitest", "arbeiten"], c: 0, h: "ich → arbeite." },
        { nr: 3, o: ["bezahle", "bezahlst", "bezahlen"], c: 0, h: "ich → bezahle." },
        { nr: 4, o: ["macht", "machst", "machen"], c: 0, h: "der Job (er) → macht." },
        { nr: 5, o: ["sind", "ist", "bin"], c: 0, h: "die Kollegen (Plural) → sind." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["im", "am", "für", "mit", "neben"],
      text: "Ich arbeite ___(6)___ Supermarkt. Ich arbeite ___(7)___ Wochenende. ___(8)___ dem Geld bezahle ich mein Studium. Der Job ist gut ___(9)___ mich. Ich arbeite ___(10)___ dem Studium.",
      loesung: { 6: "im", 7: "am", 8: "mit", 9: "für", 10: "neben" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihren Nebenjob.",
        punkte: ["Sagen Sie, wo Sie arbeiten.", "Sagen Sie, wann Sie arbeiten.", "Sagen Sie, ob Ihnen der Job gefällt."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

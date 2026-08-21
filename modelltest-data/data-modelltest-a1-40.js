// ============================================================
// FLOß Modelltest A1 — Nr. 40 (LETZTER A1-TEST — A1 KOMPLETT!)
// Gleiches Format wie Nr. 01–39.
// ============================================================

window.MODELLTEST_A1_40 = {
  testKey: "modelltest-a1-40",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 40",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Heimweh nach der Heimat" },
        { id: 2, text: "Neues Land, neue Sprache" },
        { id: 3, text: "Videoanruf mit der Familie" },
        { id: 4, text: "Neue Freunde finden" },
        { id: 5, text: "Fernweh nach dem Ausland" },
        { id: 6, text: "Zurück in die Heimat" },
        { id: 7, text: "Essen aus der Heimat kochen" },
        { id: 8, text: "Fotos von zu Hause" }
      ],
      texte: [
        { id: "a", text: "Manchmal habe ich Heimweh nach meiner Familie." },
        { id: "b", text: "Ich lerne hier eine neue Sprache." },
        { id: "c", text: "Jeden Sonntag telefoniere ich per Video mit meiner Familie." },
        { id: "d", text: "Hier habe ich schon neue Freunde gefunden." },
        { id: "e", text: "Manchmal koche ich Essen aus meiner Heimat." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich lebe jetzt seit einem Jahr in Deutschland. Ich lerne hier eine neue Sprache. Manchmal habe ich Heimweh nach meiner Familie. Jeden Sonntag telefoniere ich per Video mit ihnen. Hier habe ich schon neue Freunde gefunden. Manchmal koche ich Essen aus meiner Heimat.",
      aussagen: [
        { nr: 1, text: "Die Person lebt seit einem Jahr in Deutschland.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person lernt keine neue Sprache.", korrekt: false, hinweis: "Gegenteil: 'Ich lerne hier eine neue Sprache'." },
        { nr: 3, text: "Die Person hat manchmal Heimweh.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person telefoniert nie mit der Familie.", korrekt: false, hinweis: "Gegenteil: 'Jeden Sonntag telefoniere ich per Video mit ihnen'." },
        { nr: 5, text: "Die Person hat keine neuen Freunde.", korrekt: false, hinweis: "Gegenteil: 'Hier habe ich schon neue Freunde gefunden'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten mit Menschen aus Ihrer Heimat sprechen." },
        { nr: 2, text: "Sie suchen Lebensmittel aus Ihrer Heimat." },
        { nr: 3, text: "Sie möchten neue Freunde finden." },
        { nr: 4, text: "Sie suchen einen Deutschkurs." },
        { nr: 5, text: "Sie möchten günstig mit der Familie telefonieren." },
        { nr: 6, text: "Sie suchen ein Auto." },
        { nr: 7, text: "Sie suchen ein Fahrrad." },
        { nr: 8, text: "Sie suchen ein Restaurant." }
      ],
      anzeigen: [
        { id: "a", text: "Treffpunkt für Menschen aus aller Welt." },
        { id: "b", text: "Internationaler Supermarkt." },
        { id: "c", text: "Neue-Freunde-Treffen jeden Freitag." },
        { id: "d", text: "Deutschkurs für Anfänger." },
        { id: "e", text: "Günstige Telefonkarten für das Ausland." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ seit einem Jahr in Deutschland. Ich ___(2)___ eine neue Sprache. Ich ___(3)___ manchmal Heimweh. Ich ___(4)___ jeden Sonntag mit meiner Familie. Ich ___(5)___ schon neue Freunde gefunden.",
      luecken: [
        { nr: 1, o: ["lebe", "lebst", "leben"], c: 0, h: "ich → lebe." },
        { nr: 2, o: ["lerne", "lernst", "lernen"], c: 0, h: "ich → lerne." },
        { nr: 3, o: ["habe", "hast", "haben"], c: 0, h: "ich → habe." },
        { nr: 4, o: ["telefoniere", "telefonierst", "telefonieren"], c: 0, h: "ich → telefoniere." },
        { nr: 5, o: ["habe", "hast", "haben"], c: 0, h: "ich → habe." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["in", "seit", "mit", "aus", "nach"],
      text: "Ich lebe ___(6)___ Deutschland. Ich lebe hier ___(7)___ einem Jahr. Ich telefoniere ___(8)___ meiner Familie. Ich koche Essen ___(9)___ meiner Heimat. Ich habe Heimweh ___(10)___ meiner Familie.",
      loesung: { 6: "in", 7: "seit", 8: "mit", 9: "aus", 10: "nach" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihr Leben in einem neuen Land.",
        punkte: ["Sagen Sie, wie lange Sie schon hier leben.", "Sagen Sie, was Ihnen gefällt.", "Sagen Sie, ob Sie manchmal Heimweh haben."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

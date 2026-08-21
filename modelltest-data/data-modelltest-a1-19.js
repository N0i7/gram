// ============================================================
// FLOß Modelltest A1 — Nr. 19
// Gleiches Format wie Nr. 01–18.
// ============================================================

window.MODELLTEST_A1_19 = {
  testKey: "modelltest-a1-19",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 19",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Gemeinschaftsgarten sucht Helfer" },
        { id: 2, text: "Gießplan für den Sommer" },
        { id: 3, text: "Gemüse ernten" },
        { id: 4, text: "Gartenfest im Herbst" },
        { id: 5, text: "Neue Beete angelegt" },
        { id: 6, text: "Garten ist geschlossen" },
        { id: 7, text: "Pflanzen kaufen" },
        { id: 8, text: "Kompost für alle" }
      ],
      texte: [
        { id: "a", text: "Der Gemeinschaftsgarten sucht Helfer, die gerne im Garten arbeiten möchten." },
        { id: "b", text: "Im Sommer gibt es einen Gießplan, jeder gießt einmal pro Woche." },
        { id: "c", text: "Im September können wir das Gemüse ernten, das wir angebaut haben." },
        { id: "d", text: "Im Herbst feiern wir ein Fest im Garten mit allen Nachbarn." },
        { id: "e", text: "Wir haben neue Beete für Tomaten und Salat angelegt." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich arbeite gerne im Gemeinschaftsgarten. Wir haben Tomaten und Salat gepflanzt. Im Sommer gieße ich einmal pro Woche. Im September ernten wir das Gemüse. Im Herbst feiern wir ein Gartenfest. Ich freue mich darauf.",
      aussagen: [
        { nr: 1, text: "Die Person arbeitet nicht gerne im Garten.", korrekt: false, hinweis: "Gegenteil: 'arbeite gerne im Gemeinschaftsgarten'." },
        { nr: 2, text: "Sie haben Tomaten und Salat gepflanzt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Die Person gießt jeden Tag.", korrekt: false, hinweis: "Sie gießt einmal pro Woche." },
        { nr: 4, text: "Im September ernten sie das Gemüse.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person freut sich nicht auf das Fest.", korrekt: false, hinweis: "Gegenteil: 'ich freue mich darauf'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten im Garten helfen." },
        { nr: 2, text: "Sie möchten wissen, wann Sie gießen sollen." },
        { nr: 3, text: "Sie möchten Gemüse ernten." },
        { nr: 4, text: "Sie möchten zum Gartenfest gehen." },
        { nr: 5, text: "Sie möchten die neuen Beete sehen." },
        { nr: 6, text: "Sie suchen einen Blumenladen." },
        { nr: 7, text: "Sie möchten einen Baum pflanzen." },
        { nr: 8, text: "Sie suchen einen Gärtner." }
      ],
      anzeigen: [
        { id: "a", text: "Gemeinschaftsgarten sucht Helfer." },
        { id: "b", text: "Gießplan für den Sommer." },
        { id: "c", text: "Gemüse ernten im September." },
        { id: "d", text: "Gartenfest im Herbst." },
        { id: "e", text: "Neue Beete für Tomaten und Salat." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ gerne im Garten. Wir ___(2)___ Tomaten gepflanzt. Im Sommer ___(3)___ ich einmal pro Woche. Im September ___(4)___ wir das Gemüse. Ich ___(5)___ mich auf das Fest.",
      luecken: [
        { nr: 1, o: ["arbeite", "arbeitet", "arbeiten"], c: 0, h: "ich → arbeite." },
        { nr: 2, o: ["habe", "hat", "haben"], c: 2, h: "wir → haben." },
        { nr: 3, o: ["gieße", "gießt", "gießen"], c: 0, h: "ich → gieße." },
        { nr: 4, o: ["ernte", "erntet", "ernten"], c: 2, h: "wir → ernten." },
        { nr: 5, o: ["freue", "freut", "freuen"], c: 0, h: "ich → freue." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["im", "auf", "für", "in", "an"],
      text: "Ich arbeite ___(6)___ Garten. Wir haben ein neues Beet ___(7)___ Tomaten. ___(8)___ Wochenenden gieße ich einmal pro Woche. Ich freue mich ___(9)___ das Fest. Der Garten ist ___(10)___ der Nachbarschaft.",
      loesung: { 6: "im", 7: "für", 8: "an", 9: "auf", 10: "in" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über den Gemeinschaftsgarten.",
        punkte: ["Sagen Sie, was Sie im Garten machen.", "Sagen Sie, was Sie gepflanzt haben.", "Laden Sie die Person zum Helfen ein."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

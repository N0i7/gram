// ============================================================
// FLOß Modelltest A1 — Nr. 28
// Gleiches Format wie Nr. 01–27.
// ============================================================

window.MODELLTEST_A1_28 = {
  testKey: "modelltest-a1-28",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 28",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Termin online buchen" },
        { id: 2, text: "Termin per Telefon buchen" },
        { id: 3, text: "Termin absagen" },
        { id: 4, text: "Wartezeit beim Arzt" },
        { id: 5, text: "Erinnerung an den Termin" },
        { id: 6, text: "Neuer Arzt in der Praxis" },
        { id: 7, text: "Praxis hat neue Öffnungszeiten" },
        { id: 8, text: "Rezept online bestellen" }
      ],
      texte: [
        { id: "a", text: "Man kann einen Termin beim Arzt online buchen." },
        { id: "b", text: "Man kann auch telefonisch einen Termin vereinbaren." },
        { id: "c", text: "Wenn man nicht kommen kann, sollte man den Termin absagen." },
        { id: "d", text: "Die App schickt eine Erinnerung an den Termin." },
        { id: "e", text: "Man kann auch ein Rezept online bestellen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 5, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich möchte einen Termin beim Arzt. Ich buche den Termin online. Die App schickt mir eine Erinnerung. Ich kann den Termin auch absagen. Ich kann auch ein Rezept online bestellen. Das ist sehr praktisch.",
      aussagen: [
        { nr: 1, text: "Die Person möchte einen Termin beim Arzt.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person bucht den Termin nur telefonisch.", korrekt: false, hinweis: "Gegenteil: 'ich buche den Termin online'." },
        { nr: 3, text: "Die App schickt eine Erinnerung.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Man kann den Termin nicht absagen.", korrekt: false, hinweis: "Gegenteil: 'ich kann den Termin auch absagen'." },
        { nr: 5, text: "Man kann kein Rezept online bestellen.", korrekt: false, hinweis: "Gegenteil: 'ich kann auch ein Rezept online bestellen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten einen Arzttermin online buchen." },
        { nr: 2, text: "Sie möchten telefonisch einen Termin machen." },
        { nr: 3, text: "Sie möchten Ihren Termin absagen." },
        { nr: 4, text: "Sie möchten eine Erinnerung an den Termin." },
        { nr: 5, text: "Sie möchten ein Rezept online bestellen." },
        { nr: 6, text: "Sie suchen einen Zahnarzt." },
        { nr: 7, text: "Sie suchen ein Krankenhaus." },
        { nr: 8, text: "Sie suchen eine Apotheke." }
      ],
      anzeigen: [
        { id: "a", text: "Termin online buchen — schnell und einfach." },
        { id: "b", text: "Termin telefonisch vereinbaren." },
        { id: "c", text: "Termin online absagen." },
        { id: "d", text: "Erinnerungs-App für Arzttermine." },
        { id: "e", text: "Rezept online bestellen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ einen Termin beim Arzt. Ich ___(2)___ den Termin online. Die App ___(3)___ mir eine Erinnerung. Ich ___(4)___ den Termin auch absagen. Ich ___(5)___ das sehr praktisch.",
      luecken: [
        { nr: 1, o: ["möchte", "möchtest", "möchten"], c: 0, h: "ich → möchte." },
        { nr: 2, o: ["buche", "buchst", "buchen"], c: 0, h: "ich → buche." },
        { nr: 3, o: ["schickt", "schickst", "schicken"], c: 0, h: "die App → schickt." },
        { nr: 4, o: ["kann", "kannst", "können"], c: 0, h: "ich → kann." },
        { nr: 5, o: ["finde", "findest", "finden"], c: 0, h: "ich → finde." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["beim", "online", "für", "an", "ohne"],
      text: "Ich habe einen Termin ___(6)___ Arzt. Ich buche den Termin ___(7)___. Die App schickt eine Erinnerung ___(8)___ den Termin. Das ist gut ___(9)___ mich. Ich kann den Termin ___(10)___ Probleme absagen.",
      loesung: { 6: "beim", 7: "online", 8: "an", 9: "für", 10: "ohne" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihren Arzttermin, den Sie online gebucht haben.",
        punkte: ["Sagen Sie, wann der Termin ist.", "Sagen Sie, wie Sie den Termin gebucht haben.", "Fragen Sie, ob die Person auch schon online Termine gebucht hat."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

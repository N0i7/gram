// ============================================================
// FLOß Modelltest A1 — Nr. 24
// Gleiches Format wie Nr. 01–23.
// ============================================================

window.MODELLTEST_A1_24 = {
  testKey: "modelltest-a1-24",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 24",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Mit Karte bezahlen" },
        { id: 2, text: "Mit dem Handy bezahlen" },
        { id: 3, text: "Bargeld abheben" },
        { id: 4, text: "Online einkaufen" },
        { id: 5, text: "Geld an Freunde senden" },
        { id: 6, text: "Neue Banking-App" },
        { id: 7, text: "Rechnung bezahlen" },
        { id: 8, text: "PIN vergessen" }
      ],
      texte: [
        { id: "a", text: "Im Supermarkt kann man einfach mit der Karte bezahlen." },
        { id: "b", text: "Mit dem Handy kann man an der Kasse schnell bezahlen." },
        { id: "c", text: "Man kann Geld ganz einfach an Freunde per App senden." },
        { id: "d", text: "Die neue Banking-App ist kostenlos und einfach zu benutzen." },
        { id: "e", text: "Online kann man mit der Karte oder per App bezahlen." }
      ],
      loesung: { a: 1, b: 2, c: 5, d: 6, e: 4 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich bezahle im Supermarkt meistens mit dem Handy. Das geht sehr schnell. Ich habe auch eine Banking-App auf meinem Handy. Die App ist kostenlos. Mit der App kann ich Geld an Freunde senden. Ich finde das sehr praktisch.",
      aussagen: [
        { nr: 1, text: "Die Person bezahlt meistens mit dem Handy.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Das Bezahlen mit dem Handy geht langsam.", korrekt: false, hinweis: "Gegenteil: 'das geht sehr schnell'." },
        { nr: 3, text: "Die Banking-App kostet Geld.", korrekt: false, hinweis: "Gegenteil: 'die App ist kostenlos'." },
        { nr: 4, text: "Man kann mit der App Geld an Freunde senden.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person findet das nicht praktisch.", korrekt: false, hinweis: "Gegenteil: 'ich finde das sehr praktisch'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten mit dem Handy bezahlen." },
        { nr: 2, text: "Sie suchen eine kostenlose Banking-App." },
        { nr: 3, text: "Sie möchten Geld an Freunde senden." },
        { nr: 4, text: "Sie möchten online einkaufen." },
        { nr: 5, text: "Sie haben Ihre PIN vergessen." },
        { nr: 6, text: "Sie suchen ein neues Handy." },
        { nr: 7, text: "Sie suchen einen Geldautomaten." },
        { nr: 8, text: "Sie suchen eine Versicherung." }
      ],
      anzeigen: [
        { id: "a", text: "Mit dem Handy bezahlen — schnell und einfach." },
        { id: "b", text: "Neue Banking-App, kostenlos." },
        { id: "c", text: "Geld an Freunde senden per App." },
        { id: "d", text: "Online einkaufen mit Karte oder App." },
        { id: "e", text: "PIN online zurücksetzen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ im Supermarkt mit dem Handy. Das ___(2)___ sehr schnell. Ich ___(3)___ auch eine Banking-App. Die App ___(4)___ kostenlos. Ich ___(5)___ das sehr praktisch.",
      luecken: [
        { nr: 1, o: ["bezahle", "bezahlst", "bezahlen"], c: 0, h: "ich → bezahle." },
        { nr: 2, o: ["geht", "gehst", "gehen"], c: 0, h: "das → geht." },
        { nr: 3, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 4, o: ["ist", "sind", "war"], c: 0, h: "die App → ist." },
        { nr: 5, o: ["finde", "findest", "finden"], c: 0, h: "ich → finde." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["mit", "an", "auf", "im", "per"],
      text: "Ich bezahle ___(6)___ dem Handy. Ich habe eine App ___(7)___ meinem Handy. Ich sende Geld ___(8)___ Freunde. Das geht ___(9)___ App. ___(10)___ Supermarkt bezahle ich schnell.",
      loesung: { 6: "mit", 7: "auf", 8: "an", 9: "per", 10: "im" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über eine neue Banking-App.",
        punkte: ["Sagen Sie, wie die App heißt.", "Sagen Sie, was Ihnen daran gefällt.", "Fragen Sie, ob die Person die App auch benutzt."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

// ============================================================
// FLOß Modelltest A1 — Nr. 39
// Gleiches Format wie Nr. 01–38.
// ============================================================

window.MODELLTEST_A1_39 = {
  testKey: "modelltest-a1-39",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 39",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Übersetzungs-App nutzen" },
        { id: 2, text: "Wörter fotografieren" },
        { id: 3, text: "App spricht Sätze vor" },
        { id: 4, text: "App ist kostenlos" },
        { id: 5, text: "App hilft im Alltag" },
        { id: 6, text: "App ist teuer" },
        { id: 7, text: "App funktioniert nicht" },
        { id: 8, text: "App für Kinder" }
      ],
      texte: [
        { id: "a", text: "Ich benutze eine Übersetzungs-App auf meinem Handy." },
        { id: "b", text: "Ich kann Wörter einfach fotografieren." },
        { id: "c", text: "Die App spricht Sätze auch laut vor." },
        { id: "d", text: "Die App ist kostenlos." },
        { id: "e", text: "Die App hilft mir jeden Tag." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich benutze eine Übersetzungs-App auf meinem Handy. Ich kann Wörter fotografieren. Die App spricht Sätze auch laut vor. Die App ist kostenlos. Sie hilft mir jeden Tag. Ich finde die App sehr praktisch.",
      aussagen: [
        { nr: 1, text: "Die Person benutzt eine Übersetzungs-App.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person kann keine Wörter fotografieren.", korrekt: false, hinweis: "Gegenteil: 'Ich kann Wörter fotografieren'." },
        { nr: 3, text: "Die App spricht Sätze vor.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die App kostet Geld.", korrekt: false, hinweis: "Gegenteil: 'Die App ist kostenlos'." },
        { nr: 5, text: "Die App hilft der Person nicht.", korrekt: false, hinweis: "Gegenteil: 'Sie hilft mir jeden Tag'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen eine Übersetzungs-App." },
        { nr: 2, text: "Sie möchten Wörter fotografieren und übersetzen." },
        { nr: 3, text: "Sie möchten Sätze vorlesen lassen." },
        { nr: 4, text: "Sie suchen eine kostenlose App." },
        { nr: 5, text: "Sie möchten eine App für den Alltag." },
        { nr: 6, text: "Sie suchen ein Auto." },
        { nr: 7, text: "Sie suchen ein Fahrrad." },
        { nr: 8, text: "Sie suchen eine Wohnung." }
      ],
      anzeigen: [
        { id: "a", text: "Übersetzungs-App zum Download." },
        { id: "b", text: "Foto-Übersetzer-Funktion." },
        { id: "c", text: "Vorlesefunktion für Sätze." },
        { id: "d", text: "Kostenlose App für den Alltag." },
        { id: "e", text: "Alltags-App für Deutschlerner." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ eine Übersetzungs-App. Ich ___(2)___ Wörter fotografieren. Die App ___(3)___ Sätze vor. Die App ___(4)___ kostenlos. Sie ___(5)___ mir jeden Tag.",
      luecken: [
        { nr: 1, o: ["benutze", "benutzt", "benutzen"], c: 0, h: "ich → benutze." },
        { nr: 2, o: ["kann", "kannst", "können"], c: 0, h: "ich → kann." },
        { nr: 3, o: ["spricht", "sprichst", "sprechen"], c: 0, h: "die App (sie) → spricht." },
        { nr: 4, o: ["ist", "sind", "war"], c: 0, h: "die App (sie) → ist." },
        { nr: 5, o: ["hilft", "hilfst", "helfen"], c: 0, h: "sie (die App) → hilft." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["auf", "für", "im", "mit", "jeden"],
      text: "Ich habe die App ___(6)___ meinem Handy. Sie ist gut ___(7)___ den Alltag. Ich nutze sie ___(8)___ Tag. Ich fotografiere Wörter ___(9)___ der Kamera. Die App hilft mir ___(10)___ Alltag.",
      loesung: { 6: "auf", 7: "für", 8: "jeden", 9: "mit", 10: "im" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über eine Übersetzungs-App, die Sie nutzen.",
        punkte: ["Sagen Sie, wie die App heißt.", "Sagen Sie, was die App kann.", "Fragen Sie, ob die Person die App auch benutzt."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

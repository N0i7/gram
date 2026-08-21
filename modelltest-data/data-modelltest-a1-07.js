// ============================================================
// FLOß Modelltest A1 — Nr. 07
// Gleiches Format wie Nr. 01–06.
// ============================================================

window.MODELLTEST_A1_07 = {
  testKey: "modelltest-a1-07",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 7",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Sportverein sucht Mitglieder" },
        { id: 2, text: "Tanzkurs am Montag" },
        { id: 3, text: "Fußballspiel am Sonntag" },
        { id: 4, text: "Chor sucht Sänger" },
        { id: 5, text: "Schwimmbad hat neue Preise" },
        { id: 6, text: "Kino zeigt Kinderfilm" },
        { id: 7, text: "Verein feiert Geburtstag" },
        { id: 8, text: "Yoga im Park" }
      ],
      texte: [
        { id: "a", text: "Der Verein wird 10 Jahre alt. Alle Mitglieder feiern am Samstag mit Musik und Essen." },
        { id: "b", text: "Der Kurs ist jeden Montag um 19 Uhr. Er kostet 10 Euro pro Stunde." },
        { id: "c", text: "Das Spiel beginnt um 15 Uhr. Der Eintritt ist kostenlos." },
        { id: "d", text: "Wir suchen neue Mitglieder für den Fußballverein. Training ist zweimal pro Woche." },
        { id: "e", text: "Der Chor probt jeden Donnerstag. Neue Sänger sind herzlich willkommen." }
      ],
      loesung: { a: 7, b: 2, c: 3, d: 1, e: 4 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich heiße Diego. Ich spiele Fußball in einem Verein. Wir trainieren zweimal pro Woche, am Dienstag und am Donnerstag. Am Sonntag haben wir immer ein Spiel. Meine Familie kommt oft zu den Spielen und schaut zu. Nach dem Spiel essen wir manchmal zusammen in einem Restaurant.",
      aussagen: [
        { nr: 1, text: "Diego spielt Fußball.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 2, text: "Diego trainiert dreimal pro Woche.", korrekt: false, hinweis: "Er trainiert zweimal pro Woche." },
        { nr: 3, text: "Das Spiel ist immer am Sonntag.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Diegos Familie kommt nie zu den Spielen.", korrekt: false, hinweis: "'kommt oft zu den Spielen'." },
        { nr: 5, text: "Sie essen manchmal nach dem Spiel zusammen.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten Fußball spielen." },
        { nr: 2, text: "Sie möchten singen." },
        { nr: 3, text: "Sie möchten tanzen lernen." },
        { nr: 4, text: "Sie möchten schwimmen." },
        { nr: 5, text: "Sie möchten ein Fußballspiel sehen." },
        { nr: 6, text: "Sie möchten Yoga machen." },
        { nr: 7, text: "Sie suchen einen Job." },
        { nr: 8, text: "Sie möchten einen Film sehen." }
      ],
      anzeigen: [
        { id: "a", text: "Fußballverein sucht neue Mitglieder, Training zweimal pro Woche." },
        { id: "b", text: "Chor sucht Sänger, Probe jeden Donnerstag." },
        { id: "c", text: "Tanzkurs jeden Montag, 19 Uhr, 10 Euro." },
        { id: "d", text: "Fußballspiel am Sonntag, 15 Uhr, kostenlos." },
        { id: "e", text: "Vereinsfeier am Samstag, 10 Jahre." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "x", 5: "d", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ Fußball. Ich ___(2)___ in einem Verein. ___(3)___ Training ist zweimal pro Woche. Am Sonntag ___(4)___ wir ein Spiel. Meine Familie ___(5)___ zu den Spielen.",
      luecken: [
        { nr: 1, o: ["spiele", "spielst", "spielt"], c: 0, h: "ich → spiele." },
        { nr: 2, o: ["bin", "bist", "ist"], c: 0, h: "ich → bin." },
        { nr: 3, o: ["Das", "Der", "Die"], c: 0, h: "das Training → das." },
        { nr: 4, o: ["haben", "hat", "habe"], c: 0, h: "wir → haben." },
        { nr: 5, o: ["kommt", "kommen", "komme"], c: 0, h: "sie (Familie) → kommt." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["in", "am", "zu", "mit", "nach"],
      text: "Ich spiele Fußball ___(6)___ einem Verein. Wir trainieren ___(7)___ Dienstag. Meine Familie kommt ___(8)___ den Spielen. ___(9)___ dem Spiel essen wir zusammen. Ich spiele ___(10)___ meinen Freunden.",
      loesung: { 6: "in", 7: "am", 8: "zu", 9: "nach", 10: "mit" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihren Verein.",
        punkte: ["Sagen Sie, was Sie im Verein machen.", "Sagen Sie, wann Sie trainieren.", "Fragen Sie, ob die Person mitmachen möchte."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

// ============================================================
// FLOß Modelltest A1 — Nr. 13
// Gleiches Format wie Nr. 01–12.
// ============================================================

window.MODELLTEST_A1_13 = {
  testKey: "modelltest-a1-13",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 13",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Musikverein sucht neue Mitglieder" },
        { id: 2, text: "Probe am Dienstag" },
        { id: 3, text: "Konzert im Park" },
        { id: 4, text: "Neue Instrumente gekauft" },
        { id: 5, text: "Kinderchor gegründet" },
        { id: 6, text: "Verein feiert Jubiläum" },
        { id: 7, text: "Mitgliedsbeitrag steigt" },
        { id: 8, text: "Probe fällt aus" }
      ],
      texte: [
        { id: "a", text: "Der Musikverein sucht neue Mitglieder, die gerne ein Instrument spielen oder singen." },
        { id: "b", text: "Am Dienstag um 19 Uhr ist die nächste Probe im Vereinshaus." },
        { id: "c", text: "Am Samstag spielt der Verein ein Konzert im Stadtpark, der Eintritt ist frei." },
        { id: "d", text: "Diese Woche fällt die Probe aus, weil das Vereinshaus renoviert wird." },
        { id: "e", text: "Der Verein hat neue Instrumente für die jungen Mitglieder gekauft." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 8, e: 4 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich bin seit einem Jahr im Musikverein. Ich spiele Gitarre. Wir proben jeden Dienstag um 19 Uhr. Am Samstag haben wir ein Konzert im Park. Ich freue mich sehr darauf. Der Verein hat auch neue Instrumente gekauft.",
      aussagen: [
        { nr: 1, text: "Die Person ist seit einem Jahr im Musikverein.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person spielt Klavier.", korrekt: false, hinweis: "Sie spielt Gitarre." },
        { nr: 3, text: "Die Proben sind jeden Mittwoch.", korrekt: false, hinweis: "Die Proben sind jeden Dienstag." },
        { nr: 4, text: "Am Samstag gibt es ein Konzert im Park.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Der Verein hat keine neuen Instrumente gekauft.", korrekt: false, hinweis: "Gegenteil: 'hat auch neue Instrumente gekauft'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten in den Musikverein eintreten." },
        { nr: 2, text: "Sie möchten wissen, wann die Probe ist." },
        { nr: 3, text: "Sie möchten zum Konzert gehen." },
        { nr: 4, text: "Sie möchten wissen, warum die Probe ausfällt." },
        { nr: 5, text: "Sie möchten ein neues Instrument sehen." },
        { nr: 6, text: "Sie suchen einen Fußballverein." },
        { nr: 7, text: "Sie möchten Klavierunterricht." },
        { nr: 8, text: "Sie suchen eine Band für eine Feier." }
      ],
      anzeigen: [
        { id: "a", text: "Musikverein sucht neue Mitglieder." },
        { id: "b", text: "Probe jeden Dienstag um 19 Uhr." },
        { id: "c", text: "Konzert im Park am Samstag, Eintritt frei." },
        { id: "d", text: "Probe fällt diese Woche aus, Vereinshaus wird renoviert." },
        { id: "e", text: "Neue Instrumente für junge Mitglieder gekauft." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ seit einem Jahr im Musikverein. Ich ___(2)___ Gitarre. Wir ___(3)___ jeden Dienstag. Am Samstag ___(4)___ wir ein Konzert. Ich ___(5)___ mich sehr darauf.",
      luecken: [
        { nr: 1, o: ["bin", "ist", "sind"], c: 0, h: "ich → bin." },
        { nr: 2, o: ["spiele", "spielt", "spielen"], c: 0, h: "ich → spiele." },
        { nr: 3, o: ["probe", "probt", "proben"], c: 2, h: "wir → proben." },
        { nr: 4, o: ["habe", "hat", "haben"], c: 2, h: "wir → haben." },
        { nr: 5, o: ["freue", "freut", "freuen"], c: 0, h: "ich → freue." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["am", "seit", "am", "um", "im"],
      text: "Ich bin ___(6)___ einem Jahr im Musikverein. Wir proben ___(7)___ Dienstag ___(8)___ 19 Uhr. ___(9)___ Samstag haben wir ein Konzert ___(10)___ Park.",
      loesung: { 6: "seit", 7: "am", 8: "um", 9: "am", 10: "im" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihren Musikverein.",
        punkte: ["Sagen Sie, welches Instrument Sie spielen.", "Sagen Sie, wann die Proben sind.", "Laden Sie die Person zum Konzert ein."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

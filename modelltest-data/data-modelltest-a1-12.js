// ============================================================
// FLOß Modelltest A1 — Nr. 12
// Gleiches Format wie Nr. 01–11.
// ============================================================

window.MODELLTEST_A1_12 = {
  testKey: "modelltest-a1-12",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 12",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Familie spricht drei Sprachen" },
        { id: 2, text: "Deutschkurs am Abend" },
        { id: 3, text: "Kind lernt Englisch in der Schule" },
        { id: 4, text: "Wörterbuch gesucht" },
        { id: 5, text: "Sprachpartner gesucht" },
        { id: 6, text: "Übersetzer gesucht" },
        { id: 7, text: "Deutschprüfung im Juni" },
        { id: 8, text: "Sprachcafé jeden Freitag" }
      ],
      texte: [
        { id: "a", text: "In unserer Familie sprechen wir Tagalog, Englisch und jetzt auch Deutsch." },
        { id: "b", text: "Jeden Freitag treffen sich Menschen im Café und sprechen zusammen Deutsch." },
        { id: "c", text: "Meine Tochter lernt in der Schule Englisch, das findet sie sehr interessant." },
        { id: "d", text: "Ich suche jemanden, der mit mir Deutsch übt, einmal pro Woche." },
        { id: "e", text: "Der Deutschkurs findet montags und mittwochs von 18 bis 20 Uhr statt." }
      ],
      loesung: { a: 1, b: 8, c: 3, d: 5, e: 2 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich heiße Maria und spreche drei Sprachen: Tagalog, Englisch und Deutsch. Deutsch lerne ich seit einem Jahr. Ich gehe zweimal pro Woche zum Deutschkurs. Meine Tochter lernt auch Englisch in der Schule. Zu Hause sprechen wir oft Tagalog, aber manchmal auch Deutsch.",
      aussagen: [
        { nr: 1, text: "Maria spricht nur eine Sprache.", korrekt: false, hinweis: "Gegenteil: drei Sprachen." },
        { nr: 2, text: "Maria lernt seit einem Jahr Deutsch.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Maria geht dreimal pro Woche zum Deutschkurs.", korrekt: false, hinweis: "Sie geht zweimal pro Woche." },
        { nr: 4, text: "Marias Tochter lernt Englisch in der Schule.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Zu Hause sprechen sie nur Deutsch.", korrekt: false, hinweis: "Gegenteil: 'oft Tagalog, aber manchmal auch Deutsch'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten Deutsch lernen." },
        { nr: 2, text: "Sie suchen einen Sprachpartner." },
        { nr: 3, text: "Sie möchten ins Sprachcafé gehen." },
        { nr: 4, text: "Ihr Kind möchte Englisch lernen." },
        { nr: 5, text: "Sie möchten die Kurszeiten wissen." },
        { nr: 6, text: "Sie suchen einen Französischkurs." },
        { nr: 7, text: "Sie brauchen einen Übersetzer." },
        { nr: 8, text: "Sie suchen ein Wörterbuch." }
      ],
      anzeigen: [
        { id: "a", text: "Deutschkurs montags und mittwochs, 18 bis 20 Uhr." },
        { id: "b", text: "Sprachpartner gesucht für einmal pro Woche." },
        { id: "c", text: "Sprachcafé jeden Freitag, alle sind willkommen." },
        { id: "d", text: "Englischunterricht für Kinder in der Schule." },
        { id: "e", text: "Deutschkurs-Zeiten: montags und mittwochs." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ Maria. Ich ___(2)___ drei Sprachen. Deutsch ___(3)___ ich seit einem Jahr. Ich ___(4)___ zweimal pro Woche zum Deutschkurs. Meine Tochter ___(5)___ Englisch in der Schule.",
      luecken: [
        { nr: 1, o: ["heiße", "heißt", "heißen"], c: 0, h: "ich → heiße." },
        { nr: 2, o: ["spreche", "spricht", "sprechen"], c: 0, h: "ich → spreche." },
        { nr: 3, o: ["lerne", "lernt", "lernen"], c: 0, h: "ich → lerne." },
        { nr: 4, o: ["gehe", "geht", "gehen"], c: 0, h: "ich → gehe." },
        { nr: 5, o: ["lerne", "lernt", "lernen"], c: 1, h: "sie (Tochter) → lernt." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["in", "seit", "zum", "mit", "am"],
      text: "Wir sprechen ___(6)___ unserer Familie drei Sprachen. Ich lerne Deutsch ___(7)___ einem Jahr. Ich gehe ___(8)___ Deutschkurs. Ich übe ___(9)___ meiner Tochter. ___(10)___ Freitag gehen wir ins Sprachcafé.",
      loesung: { 6: "in", 7: "seit", 8: "zum", 9: "mit", 10: "am" }
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
        situation: "Sie schreiben einer Freundin / einem Freund darüber, welche Sprachen Sie sprechen.",
        punkte: ["Sagen Sie, welche Sprachen Sie sprechen.", "Sagen Sie, seit wann Sie Deutsch lernen.", "Fragen Sie, welche Sprachen die Person spricht."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

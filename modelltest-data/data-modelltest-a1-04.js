// ============================================================
// FLOß Modelltest A1 — Nr. 04
// Gleiches Format wie Nr. 01–03.
// ============================================================

window.MODELLTEST_A1_04 = {
  testKey: "modelltest-a1-04",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 4",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Deutschkurs am Morgen" },
        { id: 2, text: "Baby-Kleidung zu verkaufen" },
        { id: 3, text: "Arzt hat neue Adresse" },
        { id: 4, text: "Hund gefunden" },
        { id: 5, text: "Kühlschrank zu verschenken" },
        { id: 6, text: "Sportkurs für Kinder" },
        { id: 7, text: "Bäckerei sucht Verkäuferin" },
        { id: 8, text: "Fest im Park" }
      ],
      texte: [
        { id: "a", text: "Der Kurs ist von Montag bis Freitag, 8 bis 11 Uhr. Er kostet 40 Euro pro Monat." },
        { id: "b", text: "Die Praxis ist jetzt in der Gartenstraße 5. Die Telefonnummer bleibt gleich." },
        { id: "c", text: "Ein kleiner brauner Hund läuft seit heute Morgen allein in der Schulstraße. Bitte melden Sie sich." },
        { id: "d", text: "Der Kühlschrank ist alt, aber er funktioniert gut. Bitte selbst abholen." },
        { id: "e", text: "Wir suchen eine Verkäuferin für den Vormittag, drei Tage pro Woche." }
      ],
      loesung: { a: 1, b: 3, c: 4, d: 5, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich heiße Grace. Ich komme aus Cebu und bin 22 Jahre alt. Ich bin ledig und wohne mit einer Freundin zusammen. Wir wohnen in einer kleinen Wohnung mit zwei Zimmern. Ich arbeite als Verkäuferin in einer Bäckerei, von Montag bis Samstag. Am Sonntag habe ich frei. Dann treffe ich meine Freunde oder ich lerne Deutsch.",
      aussagen: [
        { nr: 1, text: "Grace ist verheiratet.", korrekt: false, hinweis: "Sie ist ledig." },
        { nr: 2, text: "Grace wohnt mit einer Freundin zusammen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Grace arbeitet in einer Bäckerei.", korrekt: true, hinweis: "Steht direkt im Text." },
        { nr: 4, text: "Grace arbeitet am Sonntag.", korrekt: false, hinweis: "Am Sonntag hat sie frei." },
        { nr: 5, text: "Am Sonntag trifft Grace ihre Freunde oder lernt Deutsch.", korrekt: true, hinweis: "Direkt im Text: 'Dann treffe ich meine Freunde oder ich lerne Deutsch.'" }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen einen Job in einer Bäckerei." },
        { nr: 2, text: "Sie brauchen einen Kühlschrank." },
        { nr: 3, text: "Sie haben Ihren Hund verloren." },
        { nr: 4, text: "Sie möchten morgens Deutsch lernen." },
        { nr: 5, text: "Sie suchen einen neuen Arzt." },
        { nr: 6, text: "Sie möchten Baby-Kleidung kaufen." },
        { nr: 7, text: "Sie suchen ein Fahrrad." },
        { nr: 8, text: "Sie möchten Sport machen." }
      ],
      anzeigen: [
        { id: "a", text: "Bäckerei sucht Verkäuferin, drei Tage pro Woche." },
        { id: "b", text: "Kühlschrank, alt aber gut, kostenlos abzuholen." },
        { id: "c", text: "Brauner Hund gefunden, Schulstraße, bitte melden." },
        { id: "d", text: "Deutschkurs am Morgen, Montag bis Freitag, 8–11 Uhr." },
        { id: "e", text: "Arztpraxis, neue Adresse: Gartenstraße 5." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ Grace. Ich ___(2)___ 22 Jahre alt. Ich ___(3)___ in einer Wohnung. ___(4)___ Wohnung ist klein. Ich ___(5)___ in einer Bäckerei.",
      luecken: [
        { nr: 1, o: ["heiße", "heißt", "heißen"], c: 0, h: "ich → heiße." },
        { nr: 2, o: ["bin", "bist", "ist"], c: 0, h: "ich → bin." },
        { nr: 3, o: ["wohne", "wohnt", "wohnen"], c: 0, h: "ich → wohne." },
        { nr: 4, o: ["Mein", "Meine", "Meinen"], c: 1, h: "die Wohnung → meine." },
        { nr: 5, o: ["arbeite", "arbeitet", "arbeiten"], c: 0, h: "ich → arbeite." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["von", "bis", "am", "in", "mit"],
      text: "Ich arbeite ___(6)___ Montag ___(7)___ Samstag. ___(8)___ Sonntag habe ich frei. Ich wohne ___(9)___ einer Freundin. Wir wohnen ___(10)___ Cebu.",
      loesung: { 6: "von", 7: "bis", 8: "am", 9: "mit", 10: "in" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihre Arbeit.",
        punkte: ["Sagen Sie, wo Sie arbeiten.", "Sagen Sie, an welchen Tagen Sie arbeiten.", "Sagen Sie, was Sie am freien Tag machen."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

// ============================================================
// FLOß Modelltest A1 — Nr. 27
// Gleiches Format wie Nr. 01–26.
// ============================================================

window.MODELLTEST_A1_27 = {
  testKey: "modelltest-a1-27",
  niveau: "A1",
  titel: "Modelltest A1 — Nr. 27",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurze Texte und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 kurzen Texte (a–e). Ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Online-Ausweis beantragen" },
        { id: 2, text: "Digitale Identität nutzen" },
        { id: 3, text: "Ausweis-App installieren" },
        { id: 4, text: "PIN für den Online-Ausweis" },
        { id: 5, text: "Online-Ausweis bei Behörden nutzen" },
        { id: 6, text: "Ausweis verloren" },
        { id: 7, text: "Neuer Ausweis kostet Geld" },
        { id: 8, text: "Ausweis abholen" }
      ],
      texte: [
        { id: "a", text: "Man kann den Online-Ausweis auf dem Amt beantragen." },
        { id: "b", text: "Mit der digitalen Identität kann man sich online ausweisen." },
        { id: "c", text: "Zuerst muss man die Ausweis-App auf dem Handy installieren." },
        { id: "d", text: "Für den Online-Ausweis braucht man eine PIN." },
        { id: "e", text: "Bei vielen Behörden kann man den Online-Ausweis nutzen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Sind die Sätze 1–5 richtig oder falsch?",
      text: "Ich habe einen Online-Ausweis. Ich habe die Ausweis-App auf meinem Handy installiert. Ich brauche eine PIN für den Ausweis. Ich kann den Online-Ausweis bei vielen Behörden nutzen. Das spart mir viel Zeit.",
      aussagen: [
        { nr: 1, text: "Die Person hat einen Online-Ausweis.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person hat keine App installiert.", korrekt: false, hinweis: "Gegenteil: 'ich habe die Ausweis-App... installiert'." },
        { nr: 3, text: "Die Person braucht eine PIN.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Man kann den Online-Ausweis nur bei einer Behörde nutzen.", korrekt: false, hinweis: "Gegenteil: 'bei vielen Behörden nutzen'." },
        { nr: 5, text: "Das spart der Person viel Zeit.", korrekt: true, hinweis: "Direkt im letzten Satz." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–8 und die Anzeigen a–e. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten einen Online-Ausweis beantragen." },
        { nr: 2, text: "Sie möchten die Ausweis-App installieren." },
        { nr: 3, text: "Sie haben Ihre PIN vergessen." },
        { nr: 4, text: "Sie möchten wissen, wo Sie den Online-Ausweis nutzen können." },
        { nr: 5, text: "Sie möchten Informationen zur digitalen Identität." },
        { nr: 6, text: "Sie suchen ein neues Handy." },
        { nr: 7, text: "Sie suchen eine Bank." },
        { nr: 8, text: "Sie suchen ein Reisebüro." }
      ],
      anzeigen: [
        { id: "a", text: "Online-Ausweis beim Amt beantragen." },
        { id: "b", text: "Ausweis-App zum Download." },
        { id: "c", text: "PIN online zurücksetzen." },
        { id: "d", text: "Liste der Behörden mit Online-Ausweis." },
        { id: "e", text: "Informationen zur digitalen Identität." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Artikel und Verben",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ einen Online-Ausweis. Ich ___(2)___ die App installiert. Ich ___(3)___ eine PIN. Ich ___(4)___ den Ausweis bei vielen Behörden nutzen. Das ___(5)___ mir viel Zeit.",
      luecken: [
        { nr: 1, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 2, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 3, o: ["brauche", "brauchst", "brauchen"], c: 0, h: "ich → brauche." },
        { nr: 4, o: ["kann", "kannst", "können"], c: 0, h: "ich → kann." },
        { nr: 5, o: ["spart", "sparst", "sparen"], c: 0, h: "das → spart." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Präpositionen einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["für", "auf", "bei", "mit", "ohne"],
      text: "Ich habe die App ___(6)___ meinem Handy installiert. Ich brauche eine PIN ___(7)___ den Ausweis. Ich kann den Ausweis ___(8)___ vielen Behörden nutzen. Das geht schnell ___(9)___ Papierformulare. Ich benutze den Ausweis ___(10)___ mein Handy.",
      loesung: { 6: "auf", 7: "für", 8: "bei", 9: "ohne", 10: "mit" }
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
        situation: "Sie schreiben einer Freundin / einem Freund über Ihren neuen Online-Ausweis.",
        punkte: ["Sagen Sie, wo Sie ihn beantragt haben.", "Sagen Sie, wofür Sie ihn nutzen.", "Fragen Sie, ob die Person auch einen hat."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Verständliche einfache Sätze", "Grundlegende Grammatik (Verb an Position 2, Artikel)"],
      hinweis: "Bei A1 zählt vor allem Verständlichkeit, nicht Perfektion."
    }
  }
};

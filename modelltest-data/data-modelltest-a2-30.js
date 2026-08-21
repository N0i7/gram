// ============================================================
// FLOß Modelltest A2 — Nr. 30
// Gleiches Format wie Nr. 01–29.
// ============================================================

window.MODELLTEST_A2_30 = {
  testKey: "modelltest-a2-30",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 30",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Notfall-App installieren" },
        { id: 2, text: "Erste Hilfe per App lernen" },
        { id: 3, text: "Notruf mit dem Handy absetzen" },
        { id: 4, text: "Standort automatisch senden" },
        { id: 5, text: "App zeigt nächste Hilfe an" },
        { id: 6, text: "App ist kostenlos" },
        { id: 7, text: "Ersthelfer in der Nähe finden" },
        { id: 8, text: "App für Kinder" }
      ],
      texte: [
        { id: "a", text: "Mit der neuen App kann man schnell einen Notruf absetzen." },
        { id: "b", text: "Die App sendet automatisch den eigenen Standort an die Rettungsdienste." },
        { id: "c", text: "In der App kann man auch Erste-Hilfe-Schritte nachlesen." },
        { id: "d", text: "Die App zeigt an, wo sich ausgebildete Ersthelfer in der Nähe befinden." },
        { id: "e", text: "Man kann die App kostenlos herunterladen." }
      ],
      loesung: { a: 3, b: 4, c: 2, d: 7, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Letzte Woche habe ich mir eine Notfall-App auf mein Handy geladen. Mit dieser App kann ich im Notfall schnell einen Notruf absetzen. Die App sendet dabei automatisch meinen Standort an den Rettungsdienst. Außerdem finde ich in der App wichtige Erste-Hilfe-Tipps. Ich habe die App kostenlos heruntergeladen. Meine Familie nutzt die App jetzt auch.",
      aussagen: [
        { nr: 1, text: "Die Person hat die App letzte Woche installiert.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die App kann keinen Notruf absetzen.", korrekt: false, hinweis: "Gegenteil: 'kann ich... schnell einen Notruf absetzen'." },
        { nr: 3, text: "Die App sendet den Standort automatisch.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "In der App gibt es keine Erste-Hilfe-Tipps.", korrekt: false, hinweis: "Gegenteil: 'finde ich... wichtige Erste-Hilfe-Tipps'." },
        { nr: 5, text: "Die App kostet Geld.", korrekt: false, hinweis: "Gegenteil: 'kostenlos heruntergeladen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten eine Notfall-App installieren." },
        { nr: 2, text: "Sie suchen einen Erste-Hilfe-Kurs." },
        { nr: 3, text: "Sie möchten wissen, wie ein Notruf funktioniert." },
        { nr: 4, text: "Sie suchen einen Ersthelfer in Ihrer Nähe." },
        { nr: 5, text: "Sie möchten die App für Ihre Kinder einrichten." },
        { nr: 6, text: "Sie suchen ein Krankenhaus." },
        { nr: 7, text: "Sie suchen eine Apotheke." },
        { nr: 8, text: "Sie suchen einen Zahnarzt." },
        { nr: 9, text: "Sie suchen einen Tierarzt." },
        { nr: 10, text: "Sie suchen eine Physiotherapie." }
      ],
      anzeigen: [
        { id: "a", text: "Notfall-App zum Download." },
        { id: "b", text: "Erste-Hilfe-Kurs für Anfänger." },
        { id: "c", text: "Ratgeber: So funktioniert der Notruf." },
        { id: "d", text: "Ersthelfer-Netzwerk in Ihrer Region." },
        { id: "e", text: "Familien-Einstellungen für die Notfall-App." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Letzte Woche habe ich mir eine Notfall-App geladen, ___(1)___ ich im Notfall schnell Hilfe rufen kann. Die App sendet automatisch meinen Standort, ___(2)___ der Rettungsdienst mich schnell findet. Ich lese auch die Erste-Hilfe-Tipps, ___(3)___ mir helfen. Die App habe ich heruntergeladen, ___(4)___ sie kostenlos ist. Meine Familie, ___(5)___ die App auch nutzt, findet sie sehr hilfreich.",
      luecken: [
        { nr: 1, o: ["damit", "weil", "obwohl"], c: 0, h: "Finalsatz → damit." },
        { nr: 2, o: ["damit", "dass", "ob"], c: 0, h: "Finalsatz → damit." },
        { nr: 3, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Tipps' (Plural) → die." },
        { nr: 4, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 5, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Familie' (feminin) → die." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Notruf", "Standort", "Ersthelfer", "kostenlos", "Erste-Hilfe"],
      text: "Mit der App kann man schnell einen ___(6)___ absetzen. Die App sendet automatisch den ___(7)___. Man findet auch ___(8)___-Tipps in der App. In der Nähe kann man ___(9)___ finden. Die App ist ___(10)___.",
      loesung: { 6: "Notruf", 7: "Standort", 8: "Erste-Hilfe", 9: "Ersthelfer", 10: "kostenlos" }
    }
  },

  schreiben: {
    titel: "Schreiben — Persönliche Nachricht",
    anleitung: "Schreiben Sie eine Nachricht. Schreiben Sie mindestens 40 Wörter. Gehen Sie auf alle Punkte ein.",
    mindestwoerter: 40,
    aufgaben: [
      {
        nr: 1,
        briefform: "informell",
        situation: "Sie haben eine Notfall-App auf Ihr Handy geladen. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, welche App Sie installiert haben.", "Berichten Sie, was die App kann.", "Empfehlen Sie der Person, die App auch zu installieren."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

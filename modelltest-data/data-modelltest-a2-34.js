// ============================================================
// FLOß Modelltest A2 — Nr. 34
// Gleiches Format wie Nr. 01–33.
// ============================================================

window.MODELLTEST_A2_34 = {
  testKey: "modelltest-a2-34",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 34",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Ehrenamt im Krankenhaus" },
        { id: 2, text: "Patienten Gesellschaft leisten" },
        { id: 3, text: "Schulung für Freiwillige" },
        { id: 4, text: "Ehrenamt ohne Bezahlung" },
        { id: 5, text: "Wöchentlicher Besuchsdienst" },
        { id: 6, text: "Dankbarkeit der Patienten" },
        { id: 7, text: "Ehrenamt beendet" },
        { id: 8, text: "Ehrenamt für junge Menschen" }
      ],
      texte: [
        { id: "a", text: "Im Krankenhaus gibt es einen Besuchsdienst für einsame Patienten." },
        { id: "b", text: "Freiwillige leisten kranken Menschen Gesellschaft und hören zu." },
        { id: "c", text: "Vor dem ersten Besuch bekommen die Freiwilligen eine kurze Schulung." },
        { id: "d", text: "Die Arbeit ist unbezahlt, aber sehr wertvoll." },
        { id: "e", text: "Einmal pro Woche besuchen die Freiwilligen die Patienten." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit einem Jahr arbeite ich als Freiwillige im Krankenhaus-Besuchsdienst. Einmal pro Woche besuche ich Patienten, die sonst wenig Besuch bekommen. Vor meinem ersten Besuch habe ich eine kurze Schulung gemacht, die mir sehr geholfen hat. Die Arbeit ist unbezahlt, aber ich finde sie trotzdem sehr wertvoll. Viele Patienten sind sehr dankbar für die Gesellschaft. Ich werde diese Arbeit auf jeden Fall weitermachen.",
      aussagen: [
        { nr: 1, text: "Die Person arbeitet seit einem Jahr im Besuchsdienst.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person besucht nie Patienten.", korrekt: false, hinweis: "Gegenteil: 'Einmal pro Woche besuche ich Patienten'." },
        { nr: 3, text: "Die Schulung hat der Person geholfen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Arbeit wird bezahlt.", korrekt: false, hinweis: "Gegenteil: 'Die Arbeit ist unbezahlt'." },
        { nr: 5, text: "Die Person möchte aufhören.", korrekt: false, hinweis: "Gegenteil: 'Ich werde diese Arbeit auf jeden Fall weitermachen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich für den Krankenhaus-Besuchsdienst melden." },
        { nr: 2, text: "Sie suchen eine Schulung für Freiwillige." },
        { nr: 3, text: "Sie möchten mehr über den Besuchsdienst erfahren." },
        { nr: 4, text: "Sie suchen eine andere ehrenamtliche Tätigkeit." },
        { nr: 5, text: "Sie möchten sich bei der Krankenhausleitung bedanken." },
        { nr: 6, text: "Sie suchen einen bezahlten Job im Krankenhaus." },
        { nr: 7, text: "Sie suchen eine Ausbildung zur Pflegekraft." },
        { nr: 8, text: "Sie suchen ein Praktikum in der Klinik." },
        { nr: 9, text: "Sie suchen einen Arzt." },
        { nr: 10, text: "Sie suchen eine Apotheke." }
      ],
      anzeigen: [
        { id: "a", text: "Krankenhaus-Besuchsdienst sucht Freiwillige." },
        { id: "b", text: "Kostenlose Schulung für Freiwillige." },
        { id: "c", text: "Informationsabend zum Besuchsdienst." },
        { id: "d", text: "Weitere Ehrenamtsangebote im Überblick." },
        { id: "e", text: "Dankeskarte an das Krankenhausteam schreiben." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit einem Jahr arbeite ich als Freiwillige, ___(1)___ ich Patienten besuchen möchte. Vor meinem ersten Besuch habe ich eine Schulung gemacht, ___(2)___ mir sehr geholfen hat. Die Arbeit ist unbezahlt, ___(3)___ ich finde sie trotzdem wertvoll. Viele Patienten, ___(4)___ ich besuche, sind dankbar. Ich werde weitermachen, ___(5)___ mir die Arbeit gefällt.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Schulung' (feminin) → die." },
        { nr: 3, o: ["aber", "denn", "oder"], c: 0, h: "Gegensatz → aber." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Patienten' (Plural) → die." },
        { nr: 5, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Besuchsdienst", "Schulung", "unbezahlt", "dankbar", "Freiwillige"],
      text: "Im Krankenhaus gibt es einen ___(6)___ für Patienten. Vor dem ersten Besuch bekommen ___(7)___ eine ___(8)___. Die Arbeit ist ___(9)___, aber wertvoll. Viele Patienten sind sehr ___(10)___.",
      loesung: { 6: "Besuchsdienst", 7: "Freiwillige", 8: "Schulung", 9: "unbezahlt", 10: "dankbar" }
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
        situation: "Sie arbeiten seit kurzem im Krankenhaus-Besuchsdienst. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, was Sie dort machen.", "Berichten Sie von einer Erfahrung.", "Fragen Sie, ob die Person auch mitmachen möchte."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

// ============================================================
// FLOß Modelltest A2 — Nr. 11
// Gleiches Format wie Nr. 01–10.
// ============================================================

window.MODELLTEST_A2_11 = {
  testKey: "modelltest-a2-11",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 11",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Mieten werden teurer" },
        { id: 2, text: "Neue Wohnung gesucht" },
        { id: 3, text: "Wohnung wird günstiger vermietet" },
        { id: 4, text: "Umzug in eine andere Stadt" },
        { id: 5, text: "Wohnungsbesichtigung am Samstag" },
        { id: 6, text: "Kaution muss bezahlt werden" },
        { id: 7, text: "WG sucht Mitbewohner" },
        { id: 8, text: "Makler hilft bei der Suche" }
      ],
      texte: [
        { id: "a", text: "In vielen Städten steigen die Mieten seit Jahren stark, besonders in beliebten Stadtteilen." },
        { id: "b", text: "Eine Familie sucht eine Dreizimmerwohnung, weil die aktuelle Wohnung zu klein geworden ist." },
        { id: "c", text: "Am Samstag um 14 Uhr kann die freie Wohnung besichtigt werden, Interessierte melden sich vorher an." },
        { id: "d", text: "Vor Einzug muss eine Kaution in Höhe von zwei Monatsmieten bezahlt werden." },
        { id: "e", text: "Eine Wohngemeinschaft mit drei Personen sucht eine vierte Mitbewohnerin oder einen vierten Mitbewohner." }
      ],
      loesung: { a: 1, b: 2, c: 5, d: 6, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit drei Monaten suche ich eine neue Wohnung, weil meine aktuelle Wohnung zu klein für meine Familie ist. Die Suche ist schwieriger als gedacht, weil die Mieten in unserer Stadt stark gestiegen sind. Viele Wohnungen sind schon vermietet, bevor ich überhaupt zur Besichtigung komme. Letzte Woche habe ich endlich eine passende Wohnung gefunden. Sie ist etwas teurer als geplant, aber die Lage ist sehr gut, nah an Schule und Arbeit. Ich muss jetzt noch die Kaution bezahlen und den Mietvertrag unterschreiben. Ich hoffe, dass der Umzug in vier Wochen klappt.",
      aussagen: [
        { nr: 1, text: "Die Person sucht seit drei Monaten eine neue Wohnung.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die aktuelle Wohnung ist groß genug für die Familie.", korrekt: false, hinweis: "Gegenteil: 'zu klein für meine Familie'." },
        { nr: 3, text: "Die Mieten in der Stadt sind gesunken.", korrekt: false, hinweis: "Gegenteil: 'stark gestiegen'." },
        { nr: 4, text: "Die Person hat eine passende Wohnung gefunden.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die neue Wohnung liegt weit weg von Schule und Arbeit.", korrekt: false, hinweis: "Gegenteil: 'nah an Schule und Arbeit'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen eine größere Wohnung." },
        { nr: 2, text: "Sie möchten eine Wohnung besichtigen." },
        { nr: 3, text: "Sie möchten wissen, wie hoch die Kaution ist." },
        { nr: 4, text: "Sie suchen einen Platz in einer WG." },
        { nr: 5, text: "Sie möchten wissen, warum die Mieten steigen." },
        { nr: 6, text: "Sie brauchen einen Makler." },
        { nr: 7, text: "Sie möchten eine Garage mieten." },
        { nr: 8, text: "Sie suchen ein Ferienhaus." },
        { nr: 9, text: "Sie möchten ein Haus kaufen." },
        { nr: 10, text: "Sie suchen einen Parkplatz." }
      ],
      anzeigen: [
        { id: "a", text: "Dreizimmerwohnung gesucht für Familie." },
        { id: "b", text: "Wohnungsbesichtigung Samstag 14 Uhr, Anmeldung erforderlich." },
        { id: "c", text: "Kaution: zwei Monatsmieten vor Einzug." },
        { id: "d", text: "WG sucht vierte Mitbewohnerin oder vierten Mitbewohner." },
        { id: "e", text: "Mieten steigen seit Jahren, weil in beliebten Stadtteilen zu wenig gebaut wird." },
        { id: "f", text: "Makler hilft bei der Wohnungssuche." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit drei Monaten ___(1)___ ich eine neue Wohnung. Die Suche ist schwieriger, ___(2)___ ich gedacht habe. Viele Wohnungen sind schon vermietet, ___(3)___ ich zur Besichtigung komme. Letzte Woche ___(4)___ ich endlich eine passende Wohnung gefunden. Ich hoffe, dass der Umzug ___(5)___ vier Wochen klappt.",
      luecken: [
        { nr: 1, o: ["suche", "sucht", "suchen"], c: 0, h: "ich → suche." },
        { nr: 2, o: ["als", "wie", "dass"], c: 0, h: "Vergleich → als." },
        { nr: 3, o: ["bevor", "nachdem", "während"], c: 0, h: "zeitlich vorher → bevor." },
        { nr: 4, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 5, o: ["in", "seit", "vor"], c: 0, h: "zukünftiger Zeitraum → in." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Kaution", "Miete", "Umzug", "Besichtigung", "Wohnungsmarkt"],
      text: "Der ___(6)___ ist in unserer Stadt sehr angespannt. Die ___(7)___ steigt jedes Jahr. Vor der ___(8)___ muss man sich anmelden. Vor Einzug zahlt man eine ___(9)___. Der ___(10)___ soll in vier Wochen stattfinden.",
      loesung: { 6: "Wohnungsmarkt", 7: "Miete", 8: "Besichtigung", 9: "Kaution", 10: "Umzug" }
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
        situation: "Sie haben eine neue Wohnung gefunden und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, wie lange Sie gesucht haben.", "Beschreiben Sie die neue Wohnung kurz.", "Fragen Sie, ob die Person beim Umzug helfen kann."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

// ============================================================
// FLOß Modelltest B1 — Nr. 05
// Gleiches Format wie Nr. 01–04.
// ============================================================

window.MODELLTEST_B1_05 = {
  testKey: "modelltest-b1-05",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 5",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neue Öffnungszeiten der Poststelle" },
        { id: 2, text: "Digitale Sprechstunde beim Hausarzt" },
        { id: 3, text: "Warnung vor Hitzewelle" },
        { id: 4, text: "Fitnessstudio bietet Probemonat" },
        { id: 5, text: "Elternabend an der Grundschule" },
        { id: 6, text: "Neue Fahrradwege geplant" },
        { id: 7, text: "Second-Hand-Markt für Kinderkleidung" },
        { id: 8, text: "Stromausfall in mehreren Straßen" }
      ],
      texte: [
        { id: "a", text: "Für die nächsten Tage werden Temperaturen über 35 Grad erwartet. Die Stadt bittet, ausreichend zu trinken und die Mittagshitze möglichst zu meiden." },
        { id: "b", text: "Am Donnerstag um 18 Uhr informieren die Lehrkräfte über den Stundenplan und die Aktivitäten im neuen Schuljahr. Alle Eltern sind eingeladen." },
        { id: "c", text: "Wer sich unsicher ist, ob ein Arztbesuch nötig ist, kann seit Kurzem per Videoanruf mit der Praxis sprechen, ohne einen Termin vor Ort zu vereinbaren." },
        { id: "d", text: "Neue Mitglieder können den ersten Monat kostenlos trainieren und alle Kurse ausprobieren, bevor sie sich entscheiden." },
        { id: "e", text: "Am Samstag von 10 bis 15 Uhr werden auf dem Schulhof gebrauchte Kinderkleidung, Spielzeug und Bücher zu kleinen Preisen angeboten." }
      ],
      loesung: { a: 3, b: 5, c: 2, d: 4, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Viele Eltern in Deutschland stehen vor der Herausforderung, Beruf und Kinderbetreuung unter einen Hut zu bringen. Kindertagesstätten sind zwar grundsätzlich verfügbar, in Großstädten jedoch oft mit langen Wartelisten verbunden. Manche Familien greifen deshalb auf private Tagesmütter zurück, was allerdings mit höheren Kosten verbunden ist. Arbeitgeber reagieren zunehmend mit flexibleren Arbeitszeitmodellen, etwa Gleitzeit oder der Möglichkeit, von zu Hause zu arbeiten. Untersuchungen zeigen, dass Betriebe, die auf die Bedürfnisse von Eltern eingehen, langfristig von einer höheren Mitarbeiterzufriedenheit profitieren. Dennoch fordern Familienverbände weiterhin einen stärkeren Ausbau öffentlicher Betreuungsplätze, um allen Familien unabhängig vom Einkommen gleiche Chancen zu ermöglichen.",
      aussagen: [
        { nr: 1, text: "Kindertagesstätten haben in Großstädten oft lange Wartelisten.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 2, text: "Private Tagesmütter sind meist günstiger als Kitas.", korrekt: false, hinweis: "Gegenteil: 'mit höheren Kosten verbunden'." },
        { nr: 3, text: "Manche Arbeitgeber bieten flexible Arbeitszeiten an.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Studien zeigen keinen Zusammenhang zwischen familienfreundlichen Betrieben und Mitarbeiterzufriedenheit.", korrekt: false, hinweis: "Gegenteil: 'profitieren langfristig von einer höheren Mitarbeiterzufriedenheit'." },
        { nr: 5, text: "Familienverbände fordern mehr öffentliche Betreuungsplätze.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen einen Betreuungsplatz für Ihr Kind." },
        { nr: 2, text: "Sie möchten kostenlos ein Fitnessstudio ausprobieren." },
        { nr: 3, text: "Sie brauchen einen Arzttermin, ohne das Haus zu verlassen." },
        { nr: 4, text: "Sie suchen gebrauchte Kinderkleidung." },
        { nr: 5, text: "Sie möchten mehr über den Schulalltag Ihres Kindes erfahren." },
        { nr: 6, text: "Sie suchen eine Tagesmutter." },
        { nr: 7, text: "Sie möchten von zu Hause arbeiten." },
        { nr: 8, text: "Sie brauchen einen Handwerker für die Klimaanlage." },
        { nr: 9, text: "Sie suchen einen Deutschkurs für Ihr Kind." },
        { nr: 10, text: "Sie möchten sich über Fördermöglichkeiten für Familien informieren." }
      ],
      anzeigen: [
        { id: "a", text: "Fitnessstudio: erster Monat kostenlos, alle Kurse inklusive." },
        { id: "b", text: "Hausarztpraxis bietet Videosprechstunde für unkomplizierte Anliegen." },
        { id: "c", text: "Second-Hand-Markt für Kinderkleidung, Samstag 10–15 Uhr, Schulhof." },
        { id: "d", text: "Elternabend Grundschule, Donnerstag 18 Uhr, alle Eltern willkommen." },
        { id: "e", text: "Tagesmutter mit freien Plätzen, flexible Betreuungszeiten möglich." },
        { id: "f", text: "Familienberatung: Informationen zu staatlichen Förderungen, kostenlos." }
      ],
      loesung: { 1: "e", 2: "a", 3: "b", 4: "c", 5: "d", 6: "e", 7: "x", 8: "x", 9: "x", 10: "f" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Liebe Eltern, ___(1)___ des kommenden Schuljahres möchten wir Sie herzlich zum Elternabend einladen. Der Termin findet statt, ___(2)___ Sie sich über wichtige Neuerungen informieren können. Bitte melden Sie sich an, ___(3)___ wir besser planen können. Sollten Sie ___(4)___ nicht teilnehmen können, informieren wir Sie gerne ___(5)___ E-Mail.",
      luecken: [
        { nr: 1, o: ["Anlässlich", "Wegen", "Trotz"], c: 0, h: "formell, aus Anlass von → anlässlich + Genitiv." },
        { nr: 2, o: ["damit", "weil", "obwohl"], c: 0, h: "Zweck → damit." },
        { nr: 3, o: ["damit", "weil", "sodass"], c: 0, h: "Zweck → damit." },
        { nr: 4, o: ["ausnahmsweise", "immer", "nie"], c: 0, h: "höflich, eine Ausnahme → ausnahmsweise." },
        { nr: 5, o: ["über", "durch", "per"], c: 2, h: "per E-Mail = auf diesem Weg." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["einerseits", "andererseits", "zudem", "dennoch", "insbesondere"],
      text: "Kinderbetreuung ist ___(6)___ in Großstädten ein großes Thema. ___(7)___ gibt es viele Angebote, ___(8)___ sind die Wartelisten oft lang. ___(9)___ steigen die Kosten für private Betreuung stetig. ___(10)___ versuchen viele Familien, eine gute Lösung zu finden.",
      loesung: { 6: "insbesondere", 7: "einerseits", 8: "andererseits", 9: "zudem", 10: "dennoch" }
    }
  },

  schreiben: {
    titel: "Schreiben — Persönlicher Brief oder E-Mail",
    anleitung: "Wählen Sie EINE der beiden Aufgaben. Schreiben Sie mindestens 80 Wörter. Gehen Sie auf alle Punkte ein.",
    mindestwoerter: 80,
    aufgaben: [
      {
        nr: 1,
        briefform: "informell",
        situation: "Ein Freund / eine Freundin hat gerade ein Kind bekommen. Sie schreiben eine Glückwunschnachricht.",
        punkte: ["Gratulieren Sie zur Geburt.", "Fragen Sie, wie es der Familie geht.", "Bieten Sie Ihre Hilfe an."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an die Schule Ihres Kindes, weil Sie am Elternabend nicht teilnehmen können.",
        punkte: ["Entschuldigen Sie sich für Ihr Fehlen.", "Nennen Sie kurz den Grund.", "Bitten Sie um die wichtigsten Informationen per E-Mail."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

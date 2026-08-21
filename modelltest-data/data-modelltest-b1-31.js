// ============================================================
// FLOß Modelltest B1 — Nr. 31
// Gleiches Format wie Nr. 01–30.
// ============================================================

window.MODELLTEST_B1_31 = {
  testKey: "modelltest-b1-31",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 31",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Mehr Grünflächen gegen Hitze" },
        { id: 2, text: "Überflutungen in Städten vermeiden" },
        { id: 3, text: "Kühlung durch Wasserflächen" },
        { id: 4, text: "Bürgerbeteiligung bei der Stadtplanung" },
        { id: 5, text: "Hitzeschutzpläne für Städte" },
        { id: 6, text: "Begrünte Dächer als Lösung" },
        { id: 7, text: "Finanzierung von Klimaanpassung" },
        { id: 8, text: "Bäume als natürlicher Sonnenschutz" }
      ],
      texte: [
        { id: "a", text: "Viele Städte pflanzen mehr Bäume, um im Sommer für Schatten und kühlere Temperaturen zu sorgen." },
        { id: "b", text: "Begrünte Dächer speichern Regenwasser und kühlen zugleich die Gebäude darunter." },
        { id: "c", text: "Um Überschwemmungen bei Starkregen zu verhindern, werden neue Versickerungsflächen angelegt." },
        { id: "d", text: "Bei der Planung neuer Grünflächen werden die Anwohner zunehmend um ihre Meinung gebeten." },
        { id: "e", text: "Manche Städte entwickeln eigene Pläne, um die Bevölkerung bei extremer Hitze zu schützen." }
      ],
      loesung: { a: 8, b: 6, c: 2, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Immer mehr Städte müssen sich auf die Folgen des Klimawandels einstellen. Hitzewellen im Sommer und heftige Regenfälle im Herbst stellen die Stadtplanung vor neue Herausforderungen. Eine wichtige Maßnahme ist die Begrünung von Dächern und Fassaden, weil sie sowohl Regenwasser speichert als auch die Gebäude kühlt. Zusätzlich werden in vielen Innenstädten neue Bäume gepflanzt, die im Sommer Schatten spenden und die Luft verbessern. Auch die Bürgerinnen und Bürger werden bei solchen Projekten zunehmend einbezogen, etwa bei der Auswahl geeigneter Standorte für neue Grünflächen. Kritiker bemängeln jedoch, dass die Finanzierung solcher Maßnahmen in vielen Kommunen noch nicht ausreichend gesichert ist.",
      aussagen: [
        { nr: 1, text: "Städte müssen sich wegen des Klimawandels anpassen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Begrünte Dächer speichern kein Regenwasser.", korrekt: false, hinweis: "Gegenteil: 'sie... Regenwasser speichert'." },
        { nr: 3, text: "Neue Bäume spenden im Sommer Schatten.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Bürgerinnen und Bürger werden nicht einbezogen.", korrekt: false, hinweis: "Gegenteil: 'werden... zunehmend einbezogen'." },
        { nr: 5, text: "Die Finanzierung ist überall ausreichend gesichert.", korrekt: false, hinweis: "Gegenteil: 'noch nicht ausreichend gesichert'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich über den Hitzeschutzplan Ihrer Stadt informieren." },
        { nr: 2, text: "Sie interessieren sich für begrünte Dächer für Ihr Haus." },
        { nr: 3, text: "Sie möchten bei der Planung einer neuen Grünfläche mitreden." },
        { nr: 4, text: "Sie suchen Informationen zu Überflutungsschutz." },
        { nr: 5, text: "Sie möchten einen Baum für die Straße vor Ihrem Haus spenden." },
        { nr: 6, text: "Sie suchen einen Handwerker für die Dachreparatur." },
        { nr: 7, text: "Sie möchten eine Solaranlage installieren." },
        { nr: 8, text: "Sie suchen eine neue Wohnung." },
        { nr: 9, text: "Sie möchten einen Fahrradkurier beauftragen." },
        { nr: 10, text: "Sie suchen einen Gärtner für Ihren Garten." }
      ],
      anzeigen: [
        { id: "a", text: "Hitzeschutzplan der Stadt — jetzt informieren." },
        { id: "b", text: "Dachbegrünung — Beratung und Angebote." },
        { id: "c", text: "Bürgerbeteiligung bei neuen Grünflächen." },
        { id: "d", text: "Überflutungsschutz — Informationsabend." },
        { id: "e", text: "Baumpatenschaften für die Innenstadt." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "f", 8: "f", 9: "f", 10: "f" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Immer mehr Städte müssen sich auf die Folgen des Klimawandels einstellen, ___(1)___ Hitzewellen und Starkregen zunehmen. Eine wichtige Maßnahme ist die Begrünung von Dächern, ___(2)___ sowohl Regenwasser speichert als auch kühlt. Zusätzlich werden Bäume gepflanzt, ___(3)___ im Sommer Schatten spenden. Bürger werden einbezogen, ___(4)___ sie bei der Auswahl der Standorte mitentscheiden können. Kritiker bemängeln, ___(5)___ die Finanzierung noch nicht gesichert ist.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Begrünung' (feminin) → die." },
        { nr: 3, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Bäume' (Plural) → die." },
        { nr: 4, o: ["damit", "dass", "weil"], c: 0, h: "Finalsatz → damit." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'bemängeln' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Klimaanpassung", "Dachbegrünung", "Starkregen", "Grünflächen", "Finanzierung"],
      text: "Die ___(6)___ wird für Städte immer wichtiger. Ein Beispiel ist die ___(7)___, die Regenwasser speichert. Auch bei ___(8)___ hilft sie, Überflutungen zu verhindern. Neue ___(9)___ sollen die Luft verbessern. Kritiker bemängeln, dass die ___(10)___ solcher Projekte oft fehlt.",
      loesung: { 6: "Klimaanpassung", 7: "Dachbegrünung", 8: "Starkregen", 9: "Grünflächen", 10: "Finanzierung" }
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
        situation: "In Ihrer Straße soll ein neuer Park gegen die Sommerhitze entstehen. Sie schreiben einem Freund / einer Freundin darüber.",
        punkte: ["Beschreiben Sie das Projekt.", "Erklären Sie, warum es wichtig ist.", "Fragen Sie, ob die Person mitmachen möchte."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an das Stadtplanungsamt, weil Sie sich mehr Grünflächen in Ihrem Viertel wünschen.",
        punkte: ["Beschreiben Sie die aktuelle Situation.", "Erklären Sie Ihren Wunsch.", "Bitten Sie um eine Rückmeldung."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

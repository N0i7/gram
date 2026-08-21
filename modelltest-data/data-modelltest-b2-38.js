// ============================================================
// FLOß Modelltest B2 — Nr. 38
// Gleiches Format wie Nr. 01–37.
// ============================================================

window.MODELLTEST_B2_38 = {
  testKey: "modelltest-b2-38",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 38",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Simulation städtischer Infrastruktur" },
        { id: 2, text: "Digitale Zwillinge in der Stadtplanung" },
        { id: 3, text: "Kosten der Technologie" },
        { id: 4, text: "Frühzeitige Erkennung von Problemen" },
        { id: 5, text: "Bürgerbeteiligung durch Visualisierung" },
        { id: 6, text: "Datenschutzbedenken" },
        { id: 7, text: "Anwendung im Katastrophenschutz" },
        { id: 8, text: "Internationale Vorreiterstädte" }
      ],
      texte: [
        { id: "a", text: "Ein digitaler Zwilling bildet eine Stadt virtuell nach und ermöglicht so neue Planungsmöglichkeiten." },
        { id: "b", text: "Mithilfe solcher Simulationen lassen sich Verkehrsflüsse und Versorgungsnetze realitätsnah nachbilden." },
        { id: "c", text: "Probleme wie Überlastungen im Verkehrsnetz können auf diese Weise frühzeitig erkannt werden." },
        { id: "d", text: "Bürgerinnen und Bürger können geplante Bauprojekte anhand anschaulicher Visualisierungen besser nachvollziehen." },
        { id: "e", text: "Kritiker weisen jedoch auf mögliche Datenschutzprobleme bei der Erfassung städtischer Daten hin." }
      ],
      loesung: { a: 2, b: 1, c: 4, d: 5, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Digitale Zwillinge gewinnen in der Stadtplanung zunehmend an Bedeutung, da sie eine virtuelle Nachbildung der realen Stadt ermöglichen. Mithilfe solcher Simulationen lassen sich Verkehrsflüsse, Versorgungsnetze und sogar Klimaeffekte realitätsnah abbilden. Auf diese Weise können Probleme wie Verkehrsüberlastungen frühzeitig erkannt und Lösungen bereits vor der tatsächlichen Umsetzung getestet werden. Auch für die Bürgerbeteiligung erweist sich diese Technologie als hilfreich, da geplante Bauprojekte anschaulich visualisiert werden können. Kritiker weisen jedoch darauf hin, dass bei der umfassenden Erfassung städtischer Daten erhebliche Datenschutzfragen zu klären sind.",
      aussagen: [
        { nr: 1, text: "Digitale Zwillinge gewinnen in der Stadtplanung an Bedeutung.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Verkehrsflüsse lassen sich damit nicht simulieren.", korrekt: false, hinweis: "Gegenteil: 'lassen sich Verkehrsflüsse... realitätsnah abbilden'." },
        { nr: 3, text: "Probleme können frühzeitig erkannt werden.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Technologie hilft nicht bei der Bürgerbeteiligung.", korrekt: false, hinweis: "Gegenteil: 'erweist sich diese Technologie als hilfreich'." },
        { nr: 5, text: "Es gibt keine Datenschutzbedenken.", korrekt: false, hinweis: "Gegenteil: 'sind erhebliche Datenschutzfragen zu klären'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Stadtplaner, spezialisiert auf digitale Zwillinge." },
        { nr: 2, text: "Datenschutzbeauftragte für kommunale Projekte." },
        { nr: 3, text: "Softwareentwickler für Simulationsprogramme." },
        { nr: 4, text: "Bürgerbeteiligungskoordinatorin für Bauprojekte." },
        { nr: 5, text: "Verkehrsplaner, nutzt digitale Simulationen." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 10, text: "Journalistin, sucht Redaktionsstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Stadtverwaltung sucht Stadtplaner/in für digitale Zwillinge." },
        { id: "b", text: "Kommune sucht Datenschutzbeauftragte/n." },
        { id: "c", text: "IT-Unternehmen sucht Entwickler/in für Simulationen." },
        { id: "d", text: "Stadt sucht Koordinator/in für Bürgerbeteiligung." },
        { id: "e", text: "Planungsbüro sucht Verkehrsplaner/in." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Digitale Zwillinge gewinnen an Bedeutung, ___(1)___ sie eine virtuelle Nachbildung ermöglichen. Simulationen, ___(2)___ Verkehrsflüsse abbilden, helfen bei der Planung. Probleme, ___(3)___ frühzeitig erkannt werden, lassen sich so lösen. Auch für Bürger, ___(4)___ Projekte besser verstehen möchten, ist die Technologie hilfreich. Kritiker weisen darauf hin, ___(5)___ Datenschutzfragen zu klären sind.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Simulationen' (Plural) → die." },
        { nr: 3, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Probleme' (Plural) → die." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Bürger' (Plural) → die." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'hinweisen' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["digitaler Zwilling", "Simulation", "Verkehrsflüsse", "Bürgerbeteiligung", "Datenschutz"],
      text: "Ein ___(6)___ bildet die Stadt virtuell nach. Mit der ___(7)___ lassen sich ___(8)___ realitätsnah darstellen. Auch die ___(9)___ profitiert davon. Kritiker sehen jedoch Probleme beim ___(10)___.",
      loesung: { 6: "digitaler Zwilling", 7: "Simulation", 8: "Verkehrsflüsse", 9: "Bürgerbeteiligung", 10: "Datenschutz" }
    }
  },

  schreiben: {
    titel: "Schreiben — Stellungnahme",
    anleitung: "Wählen Sie EINES der beiden Themen. Schreiben Sie eine strukturierte Stellungnahme mit mindestens 200 Wörtern: Einleitung, Argumente für und gegen die These, eigene Meinung, Schluss.",
    mindestwoerter: 200,
    aufgaben: [
      {
        nr: 1,
        briefform: "aufsatz",
        situation: "These: 'Städte sollten verstärkt in digitale Zwillinge investieren, um Planungsfehler zu vermeiden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Der Datenschutz sollte bei digitalen Stadtplanungsprojekten Vorrang vor technischem Fortschritt haben.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

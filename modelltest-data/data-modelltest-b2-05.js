// ============================================================
// FLOß Modelltest B2 — Nr. 05
// Gleiches Format wie Nr. 01–04.
// ============================================================

window.MODELLTEST_B2_05 = {
  testKey: "modelltest-b2-05",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 5",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Konsumverzicht als politisches Statement" },
        { id: 2, text: "Städte im Wettlauf gegen die Hitze" },
        { id: 3, text: "Warum Klimaschutz auch eine Verteilungsfrage ist" },
        { id: 4, text: "Der schwierige Umstieg auf Elektromobilität" },
        { id: 5, text: "Greenwashing: Wenn Nachhaltigkeit nur Etikett ist" },
        { id: 6, text: "Individuelles Verhalten versus strukturelle Lösungen" },
        { id: 7, text: "Der wachsende Markt für Reparaturdienste" },
        { id: 8, text: "Klimaflucht als unterschätztes Phänomen" }
      ],
      texte: [
        { id: "a", text: "Unternehmen bewerben ihre Produkte zunehmend als klimafreundlich, ohne dass dahinter substanzielle Veränderungen stehen. Verbraucherschützer fordern deshalb strengere Regeln für entsprechende Werbeaussagen." },
        { id: "b", text: "Immer mehr Menschen lassen defekte Geräte reparieren, statt sie neu zu kaufen — nicht nur aus Kostengründen, sondern zunehmend auch aus Umweltbewusstsein." },
        { id: "c", text: "Grünflächen, helle Fassaden und mehr Bäume sollen Innenstädte künftig vor extremer Hitze schützen. Die Umsetzung stockt jedoch vielerorts an fehlenden Mitteln und langen Genehmigungsverfahren." },
        { id: "d", text: "Kritiker der individualisierten Klimadebatte argumentieren, dass die Fokussierung auf persönliches Verhalten von den eigentlich entscheidenden politischen und wirtschaftlichen Weichenstellungen ablenke." },
        { id: "e", text: "Menschen mit geringem Einkommen sind von den Folgen des Klimawandels häufig stärker betroffen, tragen jedoch am wenigsten zu dessen Verursachung bei — ein Missverhältnis, das zunehmend in den Fokus rückt." }
      ],
      loesung: { a: 5, b: 7, c: 2, d: 6, e: 3 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Der Umstieg auf Elektromobilität gilt vielen als zentraler Baustein der Verkehrswende, verläuft in der Praxis jedoch schleppender als von Politik und Industrie ursprünglich erhofft. Hohe Anschaffungskosten, eine noch lückenhafte Ladeinfrastruktur sowie Unsicherheit über die Reichweite halten zahlreiche potenzielle Käufer zurück. Hinzu kommt die Debatte um die ökologische Bilanz der Batterieherstellung, die energie- und rohstoffintensiv ist und häufig unter fragwürdigen Arbeitsbedingungen in Abbauländern stattfindet. Befürworter halten dem entgegen, dass Elektrofahrzeuge über ihre gesamte Lebensdauer betrachtet dennoch deutlich klimafreundlicher seien als Verbrenner, insbesondere wenn der genutzte Strom aus erneuerbaren Quellen stammt. Einig sind sich beide Seiten zumindest darin, dass ein zügiger Ausbau der Ladeinfrastruktur eine notwendige Voraussetzung für eine erfolgreiche Verkehrswende bleibt.",
      aussagen: [
        { nr: 1, text: "Der Umstieg auf Elektromobilität verläuft schneller als erwartet.", korrekt: false, hinweis: "Gegenteil: 'schleppender als... erhofft'." },
        { nr: 2, text: "Hohe Anschaffungskosten sind ein Grund für die Zurückhaltung vieler Käufer.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Die Batterieherstellung wird im Text als völlig unproblematisch dargestellt.", korrekt: false, hinweis: "Gegenteil: 'energie- und rohstoffintensiv... fragwürdige Arbeitsbedingungen'." },
        { nr: 4, text: "Laut Befürwortern sind E-Autos über die Lebensdauer klimafreundlicher als Verbrenner.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Beide Seiten sind sich einig, dass mehr Ladeinfrastruktur nötig ist.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Umweltingenieurin, sucht Stelle im Bereich Stadtplanung und Klimaanpassung." },
        { nr: 2, text: "Erfahrener Elektrotechniker, sucht Stelle im Ausbau von Ladeinfrastruktur." },
        { nr: 3, text: "Berufserfahrener Handwerker, sucht Stelle in einem Reparaturbetrieb." },
        { nr: 4, text: "Kommunikationsexpertin, sucht Stelle mit Fokus auf Verbraucherschutz." },
        { nr: 5, text: "Berufseinsteiger, sucht erste Stelle im Bereich erneuerbare Energien." },
        { nr: 6, text: "Sozialwissenschaftlerin, sucht Forschungsstelle zu sozialer Ungleichheit und Klimafolgen." },
        { nr: 7, text: "Erfahrene Projektleiterin, sucht Stelle im internationalen Klimaschutz." },
        { nr: 8, text: "Landschaftsarchitekt, sucht Projekte im Bereich urbaner Begrünung." },
        { nr: 9, text: "Journalistin, sucht freie Mitarbeit im Umweltressort." },
        { nr: 10, text: "Betriebswirtin, sucht Stelle im Finanzsektor." }
      ],
      anzeigen: [
        { id: "a", text: "Stadtverwaltung sucht Ingenieur/in für Klimaanpassung und Stadtplanung." },
        { id: "b", text: "Energieversorger sucht Elektrotechniker/in für den Ausbau von Ladesäulen." },
        { id: "c", text: "Reparaturwerkstatt sucht erfahrene Handwerker/innen für Elektrogeräte." },
        { id: "d", text: "Verbraucherzentrale sucht Kommunikationsreferent/in gegen Greenwashing." },
        { id: "e", text: "Forschungsinstitut sucht Wissenschaftler/in zu Klimafolgen und sozialer Ungleichheit." },
        { id: "f", text: "Landschaftsplanungsbüro sucht Architekt/in für Begrünungsprojekte." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "x", 6: "e", 7: "x", 8: "f", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ Elektrofahrzeuge über ihre gesamte Lebensdauer als klimafreundlicher gelten, bleibt die ökologische Bilanz der Batterieherstellung umstritten. ___(2)___ hoher Anschaffungskosten zögern viele Verbraucher noch immer. ___(3)___ ist ein Ausbau der Ladeinfrastruktur unerlässlich, ___(4)___ der Umstieg gelingen soll. Nur so lässt sich verhindern, dass die Verkehrswende ___(5)___ ins Stocken gerät.“",
      luecken: [
        { nr: 1, o: ["Obwohl", "Weil", "Damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 2, o: ["Aufgrund", "Trotz", "Wegen"], c: 0, h: "formal, kausal → aufgrund + Genitiv." },
        { nr: 3, o: ["Insofern", "Trotzdem", "Sonst"], c: 0, h: "Konsequenz → insofern." },
        { nr: 4, o: ["damit", "weil", "obwohl"], c: 0, h: "Zweck → damit." },
        { nr: 5, o: ["dauerhaft", "kurzfristig", "sofort"], c: 0, h: "langfristiges Risiko → dauerhaft." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["gleichwohl", "zunehmend", "keinesfalls", "mithin", "ungeachtet"],
      text: "Die Kritik an Greenwashing wird ___(6)___ lauter. ___(7)___ der Fortschritte bleibt viel zu tun. Nachhaltigkeitswerbung sollte ___(8)___ unkritisch übernommen werden. ___(9)___ braucht es strengere Regeln für Werbeaussagen. Die Debatte betrifft ___(10)___ nicht nur Unternehmen, sondern auch Konsumierende.",
      loesung: { 6: "zunehmend", 7: "ungeachtet", 8: "keinesfalls", 9: "mithin", 10: "gleichwohl" }
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
        situation: "These: 'Klimaschutz ist in erster Linie eine Frage individuellen Konsumverhaltens, nicht politischer Strukturen.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Der Staat sollte den Kauf von Elektrofahrzeugen stärker subventionieren, auch wenn dies andere Bereiche finanziell belastet.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

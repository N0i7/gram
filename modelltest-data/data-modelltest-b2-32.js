// ============================================================
// FLOß Modelltest B2 — Nr. 32
// Gleiches Format wie Nr. 01–31.
// ============================================================

window.MODELLTEST_B2_32 = {
  testKey: "modelltest-b2-32",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 32",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Mehrgenerationenhäuser als Wohnmodell" },
        { id: 2, text: "Gegenseitige Unterstützung im Alltag" },
        { id: 3, text: "Herausforderungen des gemeinsamen Wohnens" },
        { id: 4, text: "Finanzielle Vorteile geteilten Wohnraums" },
        { id: 5, text: "Einsamkeit im Alter verhindern" },
        { id: 6, text: "Architektonische Anforderungen" },
        { id: 7, text: "Rechtliche Rahmenbedingungen" },
        { id: 8, text: "Beliebtheit steigt in Großstädten" }
      ],
      texte: [
        { id: "a", text: "In Mehrgenerationenhäusern leben junge und alte Menschen unter einem Dach zusammen." },
        { id: "b", text: "Die Bewohner unterstützen sich gegenseitig im Alltag, etwa bei der Kinderbetreuung oder im Haushalt." },
        { id: "c", text: "Das Zusammenleben verschiedener Generationen bringt jedoch auch organisatorische Herausforderungen mit sich." },
        { id: "d", text: "Durch das Teilen von Wohnraum lassen sich erhebliche Kosten einsparen." },
        { id: "e", text: "Für ältere Menschen kann diese Wohnform helfen, Einsamkeit vorzubeugen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Mehrgenerationenhäuser erfreuen sich zunehmender Beliebtheit, da sie ein alternatives Wohnmodell zum klassischen Einfamilienhaus oder zur Wohnung darstellen. In solchen Häusern leben Menschen unterschiedlichen Alters zusammen und unterstützen sich gegenseitig im Alltag, etwa bei der Kinderbetreuung oder im Haushalt. Neben den finanziellen Vorteilen, die sich durch das Teilen von Wohnraum ergeben, kann diese Wohnform insbesondere älteren Menschen helfen, Einsamkeit vorzubeugen. Allerdings bringt das Zusammenleben verschiedener Generationen auch organisatorische Herausforderungen mit sich, etwa bei der Gestaltung gemeinsamer Regeln. Experten empfehlen daher, von Anfang an klare Absprachen zu treffen.",
      aussagen: [
        { nr: 1, text: "Mehrgenerationenhäuser werden immer beliebter.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Bewohner unterstützen sich nicht gegenseitig.", korrekt: false, hinweis: "Gegenteil: 'unterstützen sich gegenseitig im Alltag'." },
        { nr: 3, text: "Diese Wohnform kann gegen Einsamkeit im Alter helfen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Das Zusammenleben bringt keine Herausforderungen mit sich.", korrekt: false, hinweis: "Gegenteil: 'bringt... auch organisatorische Herausforderungen mit sich'." },
        { nr: 5, text: "Experten raten von klaren Absprachen ab.", korrekt: false, hinweis: "Gegenteil: 'empfehlen... klare Absprachen zu treffen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sozialarbeiterin, betreut Mehrgenerationenhäuser." },
        { nr: 2, text: "Architekt, plant gemeinschaftliche Wohnprojekte." },
        { nr: 3, text: "Mediatorin für Konflikte in Wohngemeinschaften." },
        { nr: 4, text: "Projektleiterin für alternative Wohnformen." },
        { nr: 5, text: "Finanzberater für gemeinschaftliches Wohnen." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 10, text: "Journalistin, sucht Redaktionsstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Träger sucht Sozialarbeiter/in für Mehrgenerationenhäuser." },
        { id: "b", text: "Architekturbüro sucht Architekt/in für Wohnprojekte." },
        { id: "c", text: "Beratungsstelle sucht Mediator/in für Wohngemeinschaften." },
        { id: "d", text: "Verein sucht Projektleiter/in für alternative Wohnformen." },
        { id: "e", text: "Bank sucht Finanzberater/in für Wohnprojekte." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Mehrgenerationenhäuser erfreuen sich Beliebtheit, ___(1)___ sie ein alternatives Wohnmodell darstellen. In solchen Häusern leben Menschen, ___(2)___ sich gegenseitig unterstützen. Diese Wohnform kann helfen, ___(3)___ Einsamkeit im Alter vorzubeugen. Das Zusammenleben, ___(4)___ auch Herausforderungen mit sich bringt, erfordert klare Regeln. Experten empfehlen, ___(5)___ die Bewohner von Anfang an klare Absprachen treffen.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Menschen' (Plural) → die." },
        { nr: 3, o: ["um", "damit", "dass"], c: 0, h: "'um... zu' + Infinitiv." },
        { nr: 4, o: ["das", "die", "was"], c: 0, h: "Relativpronomen bezogen auf 'Zusammenleben' (neutrum) → das." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'empfehlen' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Mehrgenerationenhaus", "Wohnraum", "Einsamkeit", "Absprachen", "Generationen"],
      text: "Ein ___(6)___ vereint junge und alte Menschen. Durch das Teilen von ___(7)___ lassen sich Kosten sparen. Diese Wohnform kann ___(8)___ im Alter verhindern. Verschiedene ___(9)___ leben dabei zusammen. Klare ___(10)___ sind für ein gutes Zusammenleben wichtig.",
      loesung: { 6: "Mehrgenerationenhaus", 7: "Wohnraum", 8: "Einsamkeit", 9: "Generationen", 10: "Absprachen" }
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
        situation: "These: 'Mehrgenerationenhäuser sollten stärker vom Staat gefördert werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Das klassische Einfamilienhaus hat als Wohnmodell ausgedient.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

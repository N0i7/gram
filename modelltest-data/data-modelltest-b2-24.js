// ============================================================
// FLOß Modelltest B2 — Nr. 24
// Gleiches Format wie Nr. 01–23.
// ============================================================

window.MODELLTEST_B2_24 = {
  testKey: "modelltest-b2-24",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 24",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Kulturschock als normale Reaktion" },
        { id: 2, text: "Phasen des Kulturschocks" },
        { id: 3, text: "Sprachbarriere verstärkt den Kulturschock" },
        { id: 4, text: "Strategien gegen Kulturschock" },
        { id: 5, text: "Unterstützung durch soziale Kontakte" },
        { id: 6, text: "Kulturschock bei der Rückkehr in die Heimat" },
        { id: 7, text: "Vorbereitung vor der Ausreise" },
        { id: 8, text: "Langfristige positive Effekte" }
      ],
      texte: [
        { id: "a", text: "Ein Kulturschock ist eine völlig normale psychologische Reaktion auf eine unbekannte kulturelle Umgebung." },
        { id: "b", text: "Experten unterscheiden meist mehrere Phasen, angefangen bei der Euphorie bis hin zur Anpassung." },
        { id: "c", text: "Wer die Landessprache nicht ausreichend beherrscht, erlebt den Kulturschock häufig intensiver." },
        { id: "d", text: "Regelmäßiger Kontakt zu anderen Migrantinnen und Migranten kann helfen, die schwierige Phase zu überstehen." },
        { id: "e", text: "Überraschenderweise berichten viele Rückkehrer von einem ähnlichen Schockerlebnis in ihrer eigentlichen Heimat." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 5, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Ein Kulturschock, also die psychische Belastung durch das Eintauchen in eine fremde Kultur, gilt als völlig normale Reaktion und betrifft die meisten Menschen, die längere Zeit im Ausland leben. Fachleute unterscheiden häufig mehrere Phasen: Auf eine anfängliche Euphorie folgt oft eine Phase der Frustration, bevor sich allmählich eine Anpassung einstellt. Besonders intensiv erleben den Kulturschock jene, die die Landessprache nur unzureichend beherrschen, da sprachliche Missverständnisse den Alltag zusätzlich erschweren. Soziale Kontakte, insbesondere zu anderen Migrantinnen und Migranten, gelten als besonders hilfreich, um diese schwierige Phase zu bewältigen. Interessanterweise berichten manche Rückkehrer sogar von einem umgekehrten Kulturschock bei der Rückkehr in ihre Heimat.",
      aussagen: [
        { nr: 1, text: "Ein Kulturschock gilt als normale Reaktion.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Auf die Euphorie folgt meist direkt die vollständige Anpassung.", korrekt: false, hinweis: "Gegenteil: dazwischen liegt eine Phase der Frustration." },
        { nr: 3, text: "Gute Sprachkenntnisse können den Kulturschock abmildern.", korrekt: true, hinweis: "Sinngemäß: schlechte Sprachkenntnisse verstärken den Kulturschock." },
        { nr: 4, text: "Soziale Kontakte gelten als wenig hilfreich.", korrekt: false, hinweis: "Gegenteil: 'gelten als besonders hilfreich'." },
        { nr: 5, text: "Manche Menschen erleben auch bei der Rückkehr einen Kulturschock.", korrekt: true, hinweis: "Direkt im letzten Satz." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Interkulturelle Trainerin, sucht Stelle in der Expat-Beratung." },
        { nr: 2, text: "Psychologe, spezialisiert auf Migration und Anpassungsprozesse." },
        { nr: 3, text: "Sozialarbeiterin, betreut Rückkehrer nach Auslandsaufenthalten." },
        { nr: 4, text: "Sprachlehrer, sucht Stelle im Integrationsbereich." },
        { nr: 5, text: "Coach für Expats, sucht freiberufliche Aufträge." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 10, text: "Lehrerin, sucht Festanstellung an einer Schule." }
      ],
      anzeigen: [
        { id: "a", text: "Beratungsunternehmen sucht interkulturelle/n Trainer/in für Expats." },
        { id: "b", text: "Forschungsinstitut sucht Psycholog/in zu Migration und Anpassung." },
        { id: "c", text: "Sozialdienst sucht Sozialarbeiter/in für Rückkehrer-Betreuung." },
        { id: "d", text: "Integrationszentrum sucht Sprachlehrer/in." },
        { id: "e", text: "Expat-Netzwerk sucht freiberufliche/n Coach." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "f", 8: "f", 9: "f", 10: "f" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ein Kulturschock gilt als normale Reaktion, ___(1)___ die meisten Menschen im Ausland betrifft. Auf die anfängliche Euphorie folgt oft eine Phase der Frustration, ___(2)___ sich allmählich eine Anpassung einstellt. Besonders intensiv erleben den Kulturschock jene, ___(3)___ die Landessprache nur unzureichend beherrschen. Soziale Kontakte gelten als hilfreich, ___(4)___ diese Phase zu bewältigen. Interessanterweise berichten manche Rückkehrer von einem umgekehrten Kulturschock, ___(5)___ sie in ihre Heimat zurückkehren.",
      luecken: [
        { nr: 1, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Reaktion' (feminin) → die." },
        { nr: 2, o: ["bevor", "nachdem", "während"], c: 0, h: "Vorzeitigkeit der Anpassung → bevor." },
        { nr: 3, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'jene' (Plural) → die." },
        { nr: 4, o: ["um", "damit", "dass"], c: 0, h: "'um... zu' + Infinitiv." },
        { nr: 5, o: ["wenn", "als", "ob"], c: 0, h: "Wiederholte/allgemeine Handlung → wenn." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Kulturschock", "Anpassung", "Frustration", "Sprachbarriere", "Rückkehr"],
      text: "Ein ___(6)___ betrifft die meisten Menschen im Ausland. Nach anfänglicher Euphorie folgt oft eine Phase der ___(7)___. Danach stellt sich allmählich eine ___(8)___ ein. Eine ___(9)___ kann den Kulturschock verstärken. Manche erleben sogar bei der ___(10)___ in die Heimat einen umgekehrten Kulturschock.",
      loesung: { 6: "Kulturschock", 7: "Frustration", 8: "Anpassung", 9: "Sprachbarriere", 10: "Rückkehr" }
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
        situation: "These: 'Vorbereitungskurse zum Thema Kulturschock sollten für alle Auswanderer verpflichtend sein.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Soziale Netzwerke von Migranten im Ausland helfen mehr, als sie der Integration schaden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

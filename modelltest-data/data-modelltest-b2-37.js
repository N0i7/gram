// ============================================================
// FLOß Modelltest B2 — Nr. 37
// Gleiches Format wie Nr. 01–36.
// ============================================================

window.MODELLTEST_B2_37 = {
  testKey: "modelltest-b2-37",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 37",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Zeitliche Doppelbelastung während der Ausbildung" },
        { id: 2, text: "Finanzielle Aspekte der Pflegeausbildung" },
        { id: 3, text: "Unterstützung durch die Pflegeschule" },
        { id: 4, text: "Emotionale Belastung im Pflegealltag" },
        { id: 5, text: "Vereinbarkeit von Schichtdienst und Familie" },
        { id: 6, text: "Anerkennung des Pflegeberufs" },
        { id: 7, text: "Fachkräftemangel in der Pflege" },
        { id: 8, text: "Digitale Lernmethoden in der Ausbildung" }
      ],
      texte: [
        { id: "a", text: "Auszubildende in der Pflege, die zugleich eine Familie haben, stehen vor einer erheblichen zeitlichen Doppelbelastung." },
        { id: "b", text: "Die unregelmäßigen Schichtzeiten während der Ausbildung erschweren die Vereinbarkeit mit dem Familienleben zusätzlich." },
        { id: "c", text: "Manche Pflegeschulen bieten inzwischen spezielle Unterstützungsangebote für Auszubildende mit Kindern an." },
        { id: "d", text: "Der emotional fordernde Pflegealltag stellt für viele eine zusätzliche Belastung neben der familiären Verantwortung dar." },
        { id: "e", text: "Trotz aller Herausforderungen empfinden viele Auszubildende ihre Arbeit als sinnstiftend und wichtig." }
      ],
      loesung: { a: 1, b: 5, c: 3, d: 4, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Auszubildende in der Pflege, die zugleich eine Familie haben, stehen vor einer erheblichen zeitlichen Doppelbelastung, die durch unregelmäßige Schichtzeiten zusätzlich verschärft wird. Um Auszubildende mit Kindern zu unterstützen, bieten manche Pflegeschulen inzwischen flexible Unterrichtszeiten oder Betreuungsangebote an. Neben der organisatorischen Herausforderung stellt auch der emotional fordernde Pflegealltag eine zusätzliche Belastung dar, da der Umgang mit kranken und teils sterbenden Menschen viel Kraft kostet. Dennoch empfinden viele Auszubildende ihre Arbeit trotz aller Schwierigkeiten als sinnstiftend, was ihnen hilft, die Doppelbelastung zu bewältigen. Experten fordern daher mehr gesellschaftliche Anerkennung für den Pflegeberuf.",
      aussagen: [
        { nr: 1, text: "Auszubildende mit Familie erleben eine zeitliche Doppelbelastung.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Keine Pflegeschule bietet Unterstützung an.", korrekt: false, hinweis: "Gegenteil: 'bieten manche Pflegeschulen... Unterstützung an'." },
        { nr: 3, text: "Der Pflegealltag ist emotional fordernd.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Arbeit wird von niemandem als sinnstiftend empfunden.", korrekt: false, hinweis: "Gegenteil: 'empfinden viele Auszubildende ihre Arbeit... als sinnstiftend'." },
        { nr: 5, text: "Experten fordern mehr Anerkennung für den Pflegeberuf.", korrekt: true, hinweis: "Direkt im Text genannt." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Pflegeschullehrerin, sucht Stelle mit flexiblen Zeiten." },
        { nr: 2, text: "Sozialarbeiter, berät Auszubildende mit Kindern." },
        { nr: 3, text: "Koordinatorin für Betreuungsangebote an Pflegeschulen." },
        { nr: 4, text: "Psychologin für Auszubildende in der Pflege." },
        { nr: 5, text: "Personalreferentin für familienfreundliche Ausbildung." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 10, text: "Journalistin, sucht Redaktionsstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Pflegeschule sucht Lehrer/in mit flexiblen Zeiten." },
        { id: "b", text: "Beratungsstelle sucht Sozialarbeiter/in für Auszubildende." },
        { id: "c", text: "Pflegeschule sucht Koordinator/in für Betreuung." },
        { id: "d", text: "Klinik sucht Psychologe/Psychologin für Auszubildende." },
        { id: "e", text: "Unternehmen sucht Personalreferent/in für Ausbildung." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Auszubildende mit Familie erleben eine Doppelbelastung, ___(1)___ die Schichtzeiten unregelmäßig sind. Manche Pflegeschulen, ___(2)___ das erkannt haben, bieten Unterstützung an. Der Pflegealltag, ___(3)___ emotional fordernd ist, kostet viel Kraft. Trotzdem empfinden viele die Arbeit als sinnstiftend, ___(4)___ ihnen das hilft, durchzuhalten. Experten fordern, ___(5)___ der Pflegeberuf mehr Anerkennung bekommt.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Pflegeschulen' (Plural) → die." },
        { nr: 3, o: ["der", "die", "das"], c: 0, h: "Relativpronomen Nominativ bezogen auf 'Pflegealltag' (maskulin) → der." },
        { nr: 4, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'fordern' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Doppelbelastung", "Schichtzeiten", "Pflegealltag", "sinnstiftend", "Anerkennung"],
      text: "Auszubildende mit Familie erleben eine ___(6)___. Die unregelmäßigen ___(7)___ erschweren die Vereinbarkeit. Der ___(8)___ ist emotional fordernd. Trotzdem empfinden viele die Arbeit als ___(9)___. Experten fordern mehr ___(10)___ für den Pflegeberuf.",
      loesung: { 6: "Doppelbelastung", 7: "Schichtzeiten", 8: "Pflegealltag", 9: "sinnstiftend", 10: "Anerkennung" }
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
        situation: "These: 'Pflegeschulen sollten gesetzlich verpflichtet werden, Betreuungsangebote für Auszubildende mit Kindern anzubieten.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Der Pflegeberuf erhält in der Gesellschaft nicht die Anerkennung, die er verdient.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

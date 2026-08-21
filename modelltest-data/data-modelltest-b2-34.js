// ============================================================
// FLOß Modelltest B2 — Nr. 34
// Gleiches Format wie Nr. 01–33.
// ============================================================

window.MODELLTEST_B2_34 = {
  testKey: "modelltest-b2-34",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 34",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Doppelbelastung durch Schicht und Ehrenamt" },
        { id: 2, text: "Organisatorische Herausforderungen" },
        { id: 3, text: "Motivation trotz Zeitmangel" },
        { id: 4, text: "Digitale Tools erleichtern die Planung" },
        { id: 5, text: "Unterstützung durch Vereine" },
        { id: 6, text: "Rückgang des Engagements" },
        { id: 7, text: "Gesundheitliche Folgen der Doppelbelastung" },
        { id: 8, text: "Anerkennung durch die Gesellschaft" }
      ],
      texte: [
        { id: "a", text: "Schichtarbeiter, die sich ehrenamtlich engagieren, stehen häufig vor einer doppelten zeitlichen Belastung." },
        { id: "b", text: "Die Koordination unregelmäßiger Arbeitszeiten mit festen Ehrenamtsterminen stellt eine organisatorische Herausforderung dar." },
        { id: "c", text: "Trotz Zeitmangel bleibt die Motivation vieler Engagierter erstaunlich hoch." },
        { id: "d", text: "Digitale Planungstools helfen zunehmend dabei, Schichtdienst und Ehrenamt besser zu koordinieren." },
        { id: "e", text: "Manche Vereine passen ihre Angebote gezielt an die Bedürfnisse von Schichtarbeitern an." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Wer im Schichtdienst arbeitet und sich zugleich ehrenamtlich engagiert, sieht sich häufig einer erheblichen zeitlichen Doppelbelastung ausgesetzt. Besonders die Koordination unregelmäßiger Arbeitszeiten mit festen Ehrenamtsterminen erweist sich als organisatorische Herausforderung. Dennoch bleibt die Motivation vieler Engagierter bemerkenswert hoch, da sie das Ehrenamt als sinnstiftenden Ausgleich zum Berufsalltag empfinden. Digitale Planungstools erleichtern inzwischen zunehmend die Koordination beider Bereiche. Einige Vereine haben zudem begonnen, ihre Angebote gezielt an die besonderen Bedürfnisse von Schichtarbeitern anzupassen, etwa durch flexible Einsatzzeiten.",
      aussagen: [
        { nr: 1, text: "Schichtarbeiter im Ehrenamt haben oft eine zeitliche Doppelbelastung.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Koordination ist keine besondere Herausforderung.", korrekt: false, hinweis: "Gegenteil: 'erweist sich als organisatorische Herausforderung'." },
        { nr: 3, text: "Die Motivation der Engagierten bleibt hoch.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Digitale Tools erschweren die Koordination.", korrekt: false, hinweis: "Gegenteil: 'erleichtern... zunehmend die Koordination'." },
        { nr: 5, text: "Kein Verein passt seine Angebote an Schichtarbeiter an.", korrekt: false, hinweis: "Gegenteil: 'Einige Vereine haben... begonnen, ihre Angebote... anzupassen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Vereinsvorstand, sucht Unterstützung für flexible Ehrenamtsangebote." },
        { nr: 2, text: "Entwicklerin für Planungs-Apps im Ehrenamtsbereich." },
        { nr: 3, text: "Berater für Vereinbarkeit von Schicht und Ehrenamt." },
        { nr: 4, text: "Sozialforscherin, untersucht ehrenamtliches Engagement von Schichtarbeitern." },
        { nr: 5, text: "Koordinatorin für Freiwilligenprogramme in Krankenhäusern." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 10, text: "Journalistin, sucht Redaktionsstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Verein sucht Unterstützung für flexible Angebote." },
        { id: "b", text: "IT-Unternehmen sucht Entwickler/in für Planungs-Apps." },
        { id: "c", text: "Beratungsstelle sucht Berater/in für Ehrenamt und Beruf." },
        { id: "d", text: "Forschungsinstitut sucht Sozialforscher/in." },
        { id: "e", text: "Krankenhaus sucht Koordinator/in für Freiwilligenprogramme." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Wer im Schichtdienst arbeitet und sich ehrenamtlich engagiert, ___(1)___ häufig eine Doppelbelastung. Die Koordination, ___(2)___ viel Organisation erfordert, ist eine Herausforderung. Dennoch bleibt die Motivation hoch, ___(3)___ viele das Ehrenamt als Ausgleich empfinden. Digitale Tools, ___(4)___ immer beliebter werden, erleichtern die Planung. Manche Vereine, ___(5)___ sich anpassen, bieten flexible Zeiten an.",
      luecken: [
        { nr: 1, o: ["erfährt", "erfahren", "erfahre"], c: 0, h: "wer (Singular) → erfährt." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Koordination' (feminin) → die." },
        { nr: 3, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Tools' (Plural) → die." },
        { nr: 5, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Vereine' (Plural) → die." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Doppelbelastung", "Koordination", "Motivation", "Planungstools", "flexibel"],
      text: "Schichtarbeiter im Ehrenamt erleben oft eine ___(6)___. Die ___(7)___ von Arbeit und Engagement ist anspruchsvoll. Trotzdem bleibt die ___(8)___ hoch. Digitale ___(9)___ erleichtern die Organisation. Manche Vereine bieten ___(10)___ Zeiten an.",
      loesung: { 6: "Doppelbelastung", 7: "Koordination", 8: "Motivation", 9: "Planungstools", 10: "flexibel" }
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
        situation: "These: 'Vereine sollten verpflichtet werden, ihre Angebote an die Bedürfnisse von Schichtarbeitern anzupassen.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Ehrenamtliches Engagement sollte bei der Arbeitszeitgestaltung stärker berücksichtigt werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

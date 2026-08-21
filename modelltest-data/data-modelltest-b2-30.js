// ============================================================
// FLOß Modelltest B2 — Nr. 30
// Gleiches Format wie Nr. 01–29.
// ============================================================

window.MODELLTEST_B2_30 = {
  testKey: "modelltest-b2-30",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 30",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Belastung durch wechselnde Arbeitszeiten" },
        { id: 2, text: "Kinderbetreuung bei Schichtarbeit organisieren" },
        { id: 3, text: "Gesundheitliche Folgen von Schichtarbeit" },
        { id: 4, text: "Betriebliche Unterstützung für Schichtarbeiter" },
        { id: 5, text: "Höhere Vergütung für Nachtschichten" },
        { id: 6, text: "Soziale Isolation durch Schichtarbeit" },
        { id: 7, text: "Digitale Dienstplan-Apps erleichtern Planung" },
        { id: 8, text: "Rückgang der Schichtarbeit in bestimmten Branchen" }
      ],
      texte: [
        { id: "a", text: "Wechselnde Arbeitszeiten stellen viele Familien vor organisatorische Herausforderungen, insbesondere bei der Kinderbetreuung." },
        { id: "b", text: "Studien zeigen, dass Schichtarbeit langfristig gesundheitliche Belastungen mit sich bringen kann." },
        { id: "c", text: "Einige Unternehmen bieten mittlerweile flexible Betreuungsangebote für Beschäftigte im Schichtdienst an." },
        { id: "d", text: "Digitale Anwendungen erleichtern es Beschäftigten zunehmend, ihre Schichten frühzeitig zu planen." },
        { id: "e", text: "Nicht selten berichten Schichtarbeiter von sozialer Isolation, da ihr Rhythmus vom Familien- und Freundeskreis abweicht." }
      ],
      loesung: { a: 2, b: 3, c: 4, d: 7, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Schichtarbeit stellt Beschäftigte und ihre Familien vor besondere Herausforderungen, da sich der Alltag ständig an wechselnde Arbeitszeiten anpassen muss. Besonders die Organisation der Kinderbetreuung erweist sich häufig als schwierig, da reguläre Betreuungseinrichtungen selten auf unregelmäßige Zeiten eingestellt sind. Hinzu kommt, dass Studien wiederholt auf gesundheitliche Risiken durch Schichtarbeit hinweisen, etwa Schlafstörungen oder ein erhöhtes Risiko für Herz-Kreislauf-Erkrankungen. Um diesen Belastungen entgegenzuwirken, bieten einige Unternehmen mittlerweile flexible Betreuungsangebote sowie digitale Anwendungen zur frühzeitigen Schichtplanung an. Dennoch berichten viele Beschäftigte von sozialer Isolation, da ihr Lebensrhythmus vom sozialen Umfeld abweicht.",
      aussagen: [
        { nr: 1, text: "Schichtarbeit stellt Familien vor besondere Herausforderungen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Reguläre Betreuungseinrichtungen sind meist gut auf Schichtarbeit eingestellt.", korrekt: false, hinweis: "Gegenteil: 'selten auf unregelmäßige Zeiten eingestellt'." },
        { nr: 3, text: "Studien zeigen gesundheitliche Risiken durch Schichtarbeit.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Kein Unternehmen bietet flexible Betreuungsangebote an.", korrekt: false, hinweis: "Gegenteil: 'bieten einige Unternehmen... flexible Betreuungsangebote'." },
        { nr: 5, text: "Soziale Isolation kommt bei Schichtarbeitern nicht vor.", korrekt: false, hinweis: "Gegenteil: 'berichten viele Beschäftigte von sozialer Isolation'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Betriebsärztin, spezialisiert auf Schichtarbeit und Gesundheit." },
        { nr: 2, text: "Erzieherin, sucht Stelle mit flexiblen Betreuungszeiten." },
        { nr: 3, text: "Personalreferent, entwickelt Dienstplan-Apps." },
        { nr: 4, text: "Sozialarbeiter, berät Schichtarbeiter zu sozialer Isolation." },
        { nr: 5, text: "HR-Beraterin für familienfreundliche Arbeitszeitmodelle." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 10, text: "Journalistin, sucht Redaktionsstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Betriebsmedizin sucht Ärztin/Arzt für Schichtarbeit." },
        { id: "b", text: "Kita sucht Erzieher/in mit flexiblen Zeiten." },
        { id: "c", text: "IT-Unternehmen sucht Entwickler/in für Dienstplan-Apps." },
        { id: "d", text: "Sozialdienst sucht Berater/in für Schichtarbeiter." },
        { id: "e", text: "Beratungsfirma sucht HR-Beraterin/-Berater." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Schichtarbeit stellt Familien vor Herausforderungen, ___(1)___ sich der Alltag ständig anpassen muss. Die Kinderbetreuung erweist sich als schwierig, ___(2)___ Einrichtungen selten auf unregelmäßige Zeiten eingestellt sind. Studien weisen darauf hin, ___(3)___ Schichtarbeit gesundheitliche Risiken birgt. Einige Unternehmen bieten Angebote, ___(4)___ Beschäftigten entgegenkommen. Dennoch berichten viele, ___(5)___ sie sich sozial isoliert fühlen.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 3, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'hinweisen' → dass." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Angebote' (Plural) → die." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'berichten' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Schichtarbeit", "Kinderbetreuung", "Gesundheitsrisiken", "Betreuungsangebote", "soziale Isolation"],
      text: "___(6)___ stellt Familien vor besondere Herausforderungen. Besonders die ___(7)___ ist schwierig zu organisieren. Studien zeigen ___(8)___ wie Schlafstörungen. Manche Unternehmen bieten flexible ___(9)___ an. Trotzdem berichten viele Beschäftigte von ___(10)___.",
      loesung: { 6: "Schichtarbeit", 7: "Kinderbetreuung", 8: "Gesundheitsrisiken", 9: "Betreuungsangebote", 10: "soziale Isolation" }
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
        situation: "These: 'Unternehmen sollten gesetzlich verpflichtet werden, Kinderbetreuung für Schichtarbeiter anzubieten.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Schichtarbeit sollte grundsätzlich zeitlich begrenzt werden, um gesundheitliche Schäden zu vermeiden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

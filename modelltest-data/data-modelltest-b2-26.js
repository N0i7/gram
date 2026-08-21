// ============================================================
// FLOß Modelltest B2 — Nr. 26
// Gleiches Format wie Nr. 01–25.
// ============================================================

window.MODELLTEST_B2_26 = {
  testKey: "modelltest-b2-26",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 26",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Umgekehrter Kulturschock als unerwartetes Phänomen" },
        { id: 2, text: "Veränderte Perspektive nach dem Auslandsaufenthalt" },
        { id: 3, text: "Entfremdung von Freunden und Familie" },
        { id: 4, text: "Sprachliche Anpassungsschwierigkeiten bei der Rückkehr" },
        { id: 5, text: "Berufliche Wiedereingliederung nach der Rückkehr" },
        { id: 6, text: "Positive langfristige Effekte des Auslandsaufenthalts" },
        { id: 7, text: "Unterstützung durch Rückkehrer-Netzwerke" },
        { id: 8, text: "Erwartungen der Umgebung an die Rückkehrer" }
      ],
      texte: [
        { id: "a", text: "Viele Rückkehrer sind überrascht, wie schwierig sich die Wiedereingewöhnung in der eigenen Heimat gestalten kann." },
        { id: "b", text: "Nach längerer Zeit im Ausland betrachten viele Menschen ihre Heimat mit anderen Augen." },
        { id: "c", text: "Manche Rückkehrer berichten von einem Gefühl der Distanz zu früheren Freunden, die den Auslandsaufenthalt nicht nachvollziehen können." },
        { id: "d", text: "Rückkehrer-Netzwerke bieten einen wertvollen Austausch mit Menschen, die ähnliche Erfahrungen gemacht haben." },
        { id: "e", text: "Trotz der anfänglichen Schwierigkeiten berichten die meisten Rückkehrer langfristig von wertvollen persönlichen Erfahrungen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 7, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Ein Phänomen, das viele Rückkehrer überrascht, ist der sogenannte umgekehrte Kulturschock: Nach einem längeren Auslandsaufenthalt fällt vielen die Wiedereingewöhnung in ihrer ursprünglichen Heimat schwerer als erwartet. Grund dafür ist häufig eine veränderte Perspektive, die man im Ausland gewonnen hat, wodurch vertraute Dinge plötzlich fremd erscheinen. Manche Rückkehrer erleben zudem eine gewisse Distanz zu Freunden und Familie, weil diese die im Ausland gemachten Erfahrungen nur schwer nachvollziehen können. Um diese Phase besser zu bewältigen, empfehlen Experten den Austausch mit anderen Rückkehrern, beispielsweise über spezielle Netzwerke. Langfristig betrachtet berichten die meisten Betroffenen dennoch von überwiegend positiven Effekten ihres Auslandsaufenthalts.",
      aussagen: [
        { nr: 1, text: "Der umgekehrte Kulturschock überrascht viele Rückkehrer.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Wiedereingewöhnung fällt meist leichter als erwartet.", korrekt: false, hinweis: "Gegenteil: 'fällt vielen... schwerer als erwartet'." },
        { nr: 3, text: "Manche Rückkehrer fühlen sich Freunden gegenüber distanziert.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Experten raten von Rückkehrer-Netzwerken ab.", korrekt: false, hinweis: "Gegenteil: 'empfehlen Experten den Austausch... über spezielle Netzwerke'." },
        { nr: 5, text: "Langfristig berichten die meisten von positiven Effekten.", korrekt: true, hinweis: "Direkt im letzten Satz." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Interkulturelle Beraterin, sucht Stelle in der Rückkehrer-Betreuung." },
        { nr: 2, text: "Psychologe, spezialisiert auf Reintegration nach Auslandsaufenthalten." },
        { nr: 3, text: "Netzwerk-Koordinatorin für Rückkehrer-Communities." },
        { nr: 4, text: "Karriereberater, sucht Stelle bei beruflicher Wiedereingliederung." },
        { nr: 5, text: "Coach für interkulturelle Kompetenz, sucht freiberufliche Aufträge." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Lehrerin, sucht Festanstellung an einer Schule." },
        { nr: 10, text: "Bauingenieurin, sucht Projektstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Beratungsstelle sucht interkulturelle/n Berater/in für Rückkehrer." },
        { id: "b", text: "Klinik sucht Psycholog/in für Reintegrationsprogramme." },
        { id: "c", text: "Verein sucht Koordinator/in für Rückkehrer-Netzwerke." },
        { id: "d", text: "Agentur sucht Karriereberater/in für Wiedereingliederung." },
        { id: "e", text: "Unternehmen sucht freiberufliche/n Coach für interkulturelle Kompetenz." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ein Phänomen, ___(1)___ viele Rückkehrer überrascht, ist der umgekehrte Kulturschock. Grund dafür ist eine veränderte Perspektive, ___(2)___ man im Ausland gewonnen hat. Manche Rückkehrer erleben Distanz zu Freunden, ___(3)___ diese die Erfahrungen nur schwer nachvollziehen können. ___(4)___ diese Phase zu bewältigen, empfehlen Experten den Austausch mit anderen Rückkehrern. Langfristig berichten die meisten Betroffenen, ___(5)___ der Auslandsaufenthalt überwiegend positiv war.",
      luecken: [
        { nr: 1, o: ["das", "die", "was"], c: 0, h: "Relativpronomen bezogen auf 'Phänomen' (neutrum) → das." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Perspektive' (feminin) → die." },
        { nr: 3, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 4, o: ["Um", "Damit", "Dass"], c: 0, h: "'um... zu' + Infinitiv." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'berichten' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Kulturschock", "Perspektive", "Distanz", "Netzwerke", "Reintegration"],
      text: "Der umgekehrte ___(6)___ überrascht viele Rückkehrer. Eine veränderte ___(7)___ macht vertraute Dinge fremd. Manche spüren ___(8)___ zu alten Freunden. Rückkehrer-___(9)___ helfen beim Austausch. Insgesamt gelingt die ___(10)___ den meisten trotzdem gut.",
      loesung: { 6: "Kulturschock", 7: "Perspektive", 8: "Distanz", 9: "Netzwerke", 10: "Reintegration" }
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
        situation: "These: 'Arbeitgeber sollten Rückkehrern nach einem Auslandsaufenthalt gezielte Unterstützung bei der Wiedereingliederung bieten.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Ein längerer Auslandsaufenthalt lohnt sich trotz der Schwierigkeiten bei der Rückkehr immer.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

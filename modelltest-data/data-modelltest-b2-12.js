// ============================================================
// FLOß Modelltest B2 — Nr. 12
// Gleiches Format wie Nr. 01–11.
// ============================================================

window.MODELLTEST_B2_12 = {
  testKey: "modelltest-b2-12",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 12",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Unterschiedliche Erwartungen an Führung" },
        { id: 2, text: "Ältere Beschäftigte als Wissensträger" },
        { id: 3, text: "Digitale Kompetenz junger Generationen" },
        { id: 4, text: "Konflikte um Homeoffice-Regelungen" },
        { id: 5, text: "Wertewandel in der Arbeitswelt" },
        { id: 6, text: "Mentoring zwischen den Generationen" },
        { id: 7, text: "Unterschiedliche Kommunikationsstile" },
        { id: 8, text: "Vorurteile gegenüber jüngeren Kollegen" }
      ],
      texte: [
        { id: "a", text: "Während jüngere Beschäftigte oft flache Hierarchien und regelmäßiges Feedback erwarten, bevorzugen manche ältere Kollegen klar definierte Zuständigkeiten." },
        { id: "b", text: "Langjährige Mitarbeitende verfügen häufig über wertvolles Erfahrungswissen, das in vielen Unternehmen zu wenig genutzt wird." },
        { id: "c", text: "Immer mehr Unternehmen setzen auf Mentoring-Programme, bei denen erfahrene und junge Beschäftigte voneinander lernen." },
        { id: "d", text: "Manche ältere Führungskräfte äußern sich kritisch über die vermeintlich geringere Belastbarkeit jüngerer Generationen, was zu Spannungen führt." },
        { id: "e", text: "Was für die einen ein flexibles Arbeitsmodell darstellt, wird von anderen als Zeichen mangelnden Engagements interpretiert." }
      ],
      loesung: { a: 1, b: 2, c: 6, d: 8, e: 4 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Generationenkonflikte am Arbeitsplatz sind kein neues Phänomen, gewinnen jedoch angesichts vier gleichzeitig aktiver Generationen zunehmend an Bedeutung. Während ältere Beschäftigte oft Wert auf Stabilität und klare Strukturen legen, wünschen sich jüngere Kolleginnen und Kollegen häufig mehr Flexibilität und schnellere Entwicklungsmöglichkeiten. Diese unterschiedlichen Erwartungen führen mitunter zu Missverständnissen, etwa wenn Homeoffice-Wünsche als fehlendes Engagement fehlinterpretiert werden. Personalexperten betonen jedoch, dass diese Unterschiede auch enormes Potenzial bergen: Durch gezielten Wissensaustausch zwischen den Generationen können beide Seiten voneinander profitieren. Voraussetzung dafür sei allerdings eine Unternehmenskultur, die Vielfalt der Perspektiven aktiv wertschätzt, statt sie als Problem zu behandeln.",
      aussagen: [
        { nr: 1, text: "Generationenkonflikte am Arbeitsplatz sind ein völlig neues Phänomen.", korrekt: false, hinweis: "Gegenteil: 'kein neues Phänomen'." },
        { nr: 2, text: "Ältere Beschäftigte legen laut Text oft Wert auf Stabilität.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Homeoffice-Wünsche werden manchmal als fehlendes Engagement missverstanden.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Personalexperten sehen in den Unterschieden nur Probleme, kein Potenzial.", korrekt: false, hinweis: "Gegenteil: 'bergen enormes Potenzial'." },
        { nr: 5, text: "Eine wertschätzende Unternehmenskultur wird als Voraussetzung für Wissensaustausch genannt.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Personalentwicklerin, sucht Stelle im Bereich Mentoring." },
        { nr: 2, text: "Organisationsberater, sucht Projekt zu Generationenmanagement." },
        { nr: 3, text: "Psychologin, sucht Forschungsstelle zu Arbeitsplatzkonflikten." },
        { nr: 4, text: "Trainer, sucht Aufträge zu Kommunikationstraining." },
        { nr: 5, text: "Coach, sucht Klienten für Karriereberatung." },
        { nr: 6, text: "HR-Manager, sucht Stelle mit Fokus auf Unternehmenskultur." },
        { nr: 7, text: "Übersetzer, sucht freiberufliche Aufträge." },
        { nr: 8, text: "Journalistin, sucht Recherchethemen zur Arbeitswelt." },
        { nr: 9, text: "Buchhalter, sucht Vollzeitstelle." },
        { nr: 10, text: "Grafikdesignerin, sucht freiberufliche Projekte." }
      ],
      anzeigen: [
        { id: "a", text: "Unternehmen sucht Personalentwickler/in für Mentoring-Programm." },
        { id: "b", text: "Beratungsfirma sucht Organisationsberater/in für Generationenmanagement." },
        { id: "c", text: "Forschungsinstitut sucht Psycholog/in zu Arbeitsplatzkonflikten." },
        { id: "d", text: "Firma sucht Trainer/in für Kommunikationstraining zwischen Generationen." },
        { id: "e", text: "Coaching-Praxis sucht Klienten für Karriereberatung." },
        { id: "f", text: "Unternehmen sucht HR-Manager/in mit Fokus auf Unternehmenskultur." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ vier Generationen gleichzeitig am Arbeitsplatz aktiv sind, entstehen unterschiedliche Erwartungen. ___(2)___ ältere Beschäftigte Stabilität schätzen, wünschen sich jüngere mehr Flexibilität. Diese Unterschiede führen ___(3)___ zu Missverständnissen. ___(4)___ dieser Herausforderungen sehen Experten großes Potenzial im Wissensaustausch. Wichtig ist, ___(5)___ Vielfalt aktiv wertgeschätzt wird.",
      luecken: [
        { nr: 1, o: ["Da", "Obwohl", "Damit"], c: 0, h: "Grund → da." },
        { nr: 2, o: ["Während", "Weil", "Damit"], c: 0, h: "Gegenüberstellung → während." },
        { nr: 3, o: ["mitunter", "niemals", "selten"], c: 0, h: "gelegentlich → mitunter." },
        { nr: 4, o: ["Trotz", "Wegen", "Anstelle"], c: 0, h: "trotz + Genitiv." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'wichtig ist' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["zunehmend", "keineswegs", "vielmehr", "gegenseitig", "letztlich"],
      text: "Generationenkonflikte gewinnen ___(6)___ an Bedeutung. Eine einfache Lösung ist ___(7)___ in Sicht. Es geht ___(8)___ um gegenseitiges Verständnis. Beide Seiten können ___(9)___ voneinander lernen. ___(10)___ profitiert das gesamte Unternehmen davon.",
      loesung: { 6: "zunehmend", 7: "keineswegs", 8: "vielmehr", 9: "gegenseitig", 10: "letztlich" }
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
        situation: "These: 'Ältere und jüngere Beschäftigte sollten stärker in Mentoring-Programmen zusammenarbeiten.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Flexible Arbeitsmodelle wie Homeoffice führen zu weniger Engagement der Beschäftigten.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

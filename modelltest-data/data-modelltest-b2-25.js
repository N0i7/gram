// ============================================================
// FLOß Modelltest B2 — Nr. 25
// Gleiches Format wie Nr. 01–24.
// ============================================================

window.MODELLTEST_B2_25 = {
  testKey: "modelltest-b2-25",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 25",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Digitalisierung erleichtert die Steuererklärung" },
        { id: 2, text: "Fehleranfälligkeit bei komplexen Formularen" },
        { id: 3, text: "Vorausgefüllte Steuererklärung als Zukunftsmodell" },
        { id: 4, text: "Datenschutzbedenken bei digitalen Steuerdaten" },
        { id: 5, text: "Fristen für die Steuererklärung" },
        { id: 6, text: "Steuerberater trotz Digitalisierung gefragt" },
        { id: 7, text: "Ältere Menschen tun sich mit digitalen Formularen schwer" },
        { id: 8, text: "Kosten für Steuersoftware" }
      ],
      texte: [
        { id: "a", text: "Digitale Plattformen ermöglichen es inzwischen vielen Steuerpflichtigen, ihre Erklärung bequem von zu Hause aus einzureichen." },
        { id: "b", text: "Trotz Digitalisierung machen viele Menschen bei komplexeren Sachverhalten weiterhin Fehler in ihren Formularen." },
        { id: "c", text: "Experten diskutieren die Idee, dass Finanzbehörden künftig die meisten Daten bereits automatisch vorausfüllen könnten." },
        { id: "d", text: "Datenschützer weisen darauf hin, dass die Speicherung sensibler Finanzdaten Risiken birgt." },
        { id: "e", text: "Viele Steuerpflichtige beauftragen trotz digitaler Angebote weiterhin einen Steuerberater, um Fehler zu vermeiden." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Die Digitalisierung der Steuererklärung hat den Prozess für viele Bürgerinnen und Bürger erheblich vereinfacht: Über entsprechende Online-Plattformen lässt sich die Erklärung mittlerweile bequem von zu Hause aus einreichen. Dennoch berichten zahlreiche Nutzerinnen und Nutzer, dass komplexere steuerliche Sachverhalte weiterhin zu Fehlern führen können, weshalb viele trotz der digitalen Angebote einen Steuerberater konsultieren. Fachleute diskutieren derzeit intensiv das Modell der vorausgefüllten Steuererklärung, bei dem die Finanzbehörden verfügbare Daten automatisch übernehmen würden. Kritiker geben jedoch zu bedenken, dass die zentrale Speicherung sensibler Finanzdaten datenschutzrechtliche Risiken mit sich bringt. Besonders ältere Menschen empfinden die Umstellung auf digitale Formulare häufig als Herausforderung.",
      aussagen: [
        { nr: 1, text: "Die Digitalisierung hat die Steuererklärung für viele vereinfacht.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Komplexere Sachverhalte führen nie zu Fehlern.", korrekt: false, hinweis: "Gegenteil: 'können weiterhin zu Fehlern führen'." },
        { nr: 3, text: "Bei der vorausgefüllten Steuererklärung würden Behörden Daten automatisch übernehmen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Kritiker sehen keine Datenschutzrisiken bei zentraler Speicherung.", korrekt: false, hinweis: "Gegenteil: 'datenschutzrechtliche Risiken mit sich bringt'." },
        { nr: 5, text: "Ältere Menschen empfinden die Umstellung oft als Herausforderung.", korrekt: true, hinweis: "Direkt im letzten Satz." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Steuerberaterin, sucht Stelle in einer digitalen Steuerkanzlei." },
        { nr: 2, text: "Softwareentwickler, spezialisiert auf Steuersoftware." },
        { nr: 3, text: "Datenschutzbeauftragte, sucht Stelle bei einer Finanzbehörde." },
        { nr: 4, text: "IT-Berater für digitale Verwaltungsprozesse." },
        { nr: 5, text: "Trainerin für digitale Kompetenz bei Senioren." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Lehrerin, sucht Festanstellung an einer Schule." },
        { nr: 10, text: "Bauingenieurin, sucht Projektstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Digitale Steuerkanzlei sucht Steuerberater/in." },
        { id: "b", text: "Softwareunternehmen sucht Entwickler/in für Steuersoftware." },
        { id: "c", text: "Finanzbehörde sucht Datenschutzbeauftragte/n." },
        { id: "d", text: "Kommune sucht IT-Berater/in für digitale Verwaltung." },
        { id: "e", text: "Bildungsträger sucht Trainer/in für digitale Kompetenz bei Senioren." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Die Digitalisierung hat die Steuererklärung vereinfacht, ___(1)___ sich viele Prozesse online erledigen lassen. ___(2)___ dieser Vereinfachung führen komplexere Sachverhalte weiterhin zu Fehlern. Fachleute diskutieren ein Modell, ___(3)___ Behörden Daten automatisch übernehmen würden. Kritiker geben zu bedenken, ___(4)___ die zentrale Speicherung Risiken birgt. Besonders ältere Menschen empfinden die Umstellung als Herausforderung, ___(5)___ ihnen digitale Formulare oft ungewohnt sind.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["Trotz", "Wegen", "Statt"], c: 0, h: "trotz + Genitiv." },
        { nr: 3, o: ["bei dem", "bei denen", "das"], c: 0, h: "Relativsatz mit Präposition, bezogen auf 'Modell' (neutrum) → bei dem." },
        { nr: 4, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'zu bedenken geben' → dass." },
        { nr: 5, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Steuererklärung", "vorausgefüllt", "Datenschutz", "Fehler", "Digitalisierung"],
      text: "Die ___(6)___ hat die ___(7)___ für viele vereinfacht. Trotzdem passieren bei komplexen Fällen noch ___(8)___. Ein zukünftiges Modell könnte die Erklärung ___(9)___ liefern. Dabei spielt der ___(10)___ eine wichtige Rolle.",
      loesung: { 6: "Digitalisierung", 7: "Steuererklärung", 8: "Fehler", 9: "vorausgefüllt", 10: "Datenschutz" }
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
        situation: "These: 'Der Staat sollte allen Bürgern eine vollständig vorausgefüllte Steuererklärung anbieten.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Digitale Behördenformulare sollten für ältere Menschen einfacher gestaltet werden, auch wenn das mehr Kosten verursacht.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

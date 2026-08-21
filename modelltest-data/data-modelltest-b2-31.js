// ============================================================
// FLOß Modelltest B2 — Nr. 31
// Gleiches Format wie Nr. 01–30.
// ============================================================

window.MODELLTEST_B2_31 = {
  testKey: "modelltest-b2-31",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 31",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Bürokratische Hürden beim Führerschein-Umtausch" },
        { id: 2, text: "Fristen für den Umtausch" },
        { id: 3, text: "Digitalisierung erleichtert den Prozess" },
        { id: 4, text: "Kosten des Umtauschs" },
        { id: 5, text: "Anerkennung ausländischer Führerscheine" },
        { id: 6, text: "Wartezeiten bei den Behörden" },
        { id: 7, text: "Theoretische und praktische Prüfung nötig" },
        { id: 8, text: "Unterschiede zwischen Bundesländern" }
      ],
      texte: [
        { id: "a", text: "Viele Menschen berichten von langwierigen bürokratischen Prozessen beim Umtausch ihres Führerscheins." },
        { id: "b", text: "Für den Umtausch gelten je nach Herkunftsland unterschiedliche Fristen, die eingehalten werden müssen." },
        { id: "c", text: "Digitale Angebote sollen den Umtauschprozess künftig deutlich vereinfachen." },
        { id: "d", text: "In einigen Fällen wird der ausländische Führerschein direkt anerkannt, ohne dass eine Prüfung nötig ist." },
        { id: "e", text: "Lange Wartezeiten bei den zuständigen Behörden sind für viele Betroffene besonders belastend." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 5, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Der Umtausch eines ausländischen Führerscheins in einen deutschen ist für viele Zugewanderte mit erheblichem bürokratischem Aufwand verbunden. Je nach Herkunftsland gelten unterschiedliche Fristen, innerhalb derer der Umtausch beantragt werden muss, andernfalls verliert der ausländische Führerschein seine Gültigkeit. In manchen Fällen wird der Führerschein ohne weitere Prüfung anerkannt, in anderen Fällen ist eine theoretische, manchmal sogar eine praktische Prüfung erforderlich. Besonders belastend empfinden viele Betroffene die oft langen Wartezeiten bei den zuständigen Behörden. Um diesen Prozess zu vereinfachen, setzen einige Bundesländer inzwischen auf digitale Antragsverfahren.",
      aussagen: [
        { nr: 1, text: "Der Umtausch ist für viele Zugewanderte bürokratisch aufwendig.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Für alle Herkunftsländer gelten die gleichen Fristen.", korrekt: false, hinweis: "Gegenteil: 'gelten unterschiedliche Fristen'." },
        { nr: 3, text: "In manchen Fällen ist keine Prüfung nötig.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Wartezeiten bei den Behörden sind meist kurz.", korrekt: false, hinweis: "Gegenteil: 'oft langen Wartezeiten'." },
        { nr: 5, text: "Kein Bundesland nutzt digitale Antragsverfahren.", korrekt: false, hinweis: "Gegenteil: 'setzen einige Bundesländer... auf digitale Antragsverfahren'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sachbearbeiterin bei der Führerscheinstelle." },
        { nr: 2, text: "Berater für Zugewanderte bei Behördenangelegenheiten." },
        { nr: 3, text: "Fahrlehrer, bietet Vorbereitung auf die praktische Prüfung." },
        { nr: 4, text: "IT-Entwickler für digitale Antragsverfahren bei Behörden." },
        { nr: 5, text: "Übersetzerin für amtliche Dokumente." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 10, text: "Journalistin, sucht Redaktionsstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Führerscheinstelle sucht Sachbearbeiter/in." },
        { id: "b", text: "Beratungsstelle sucht Berater/in für Zugewanderte." },
        { id: "c", text: "Fahrschule sucht Fahrlehrer/in." },
        { id: "d", text: "Kommune sucht IT-Entwickler/in für digitale Verwaltung." },
        { id: "e", text: "Übersetzungsbüro sucht Übersetzer/in für amtliche Dokumente." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Der Umtausch eines ausländischen Führerscheins ist für viele Zugewanderte aufwendig, ___(1)___ unterschiedliche Fristen je nach Herkunftsland gelten. Wird die Frist versäumt, ___(2)___ der Führerschein seine Gültigkeit verlieren. In manchen Fällen wird der Führerschein anerkannt, ___(3)___ eine Prüfung nötig ist. Besonders belastend sind die Wartezeiten, ___(4)___ viele Betroffene kritisieren. Um dies zu vereinfachen, ___(5)___ einige Bundesländer digitale Verfahren ein.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["kann", "muss", "darf"], c: 0, h: "Möglichkeit → kann." },
        { nr: 3, o: ["ohne dass", "damit", "weil"], c: 0, h: "'ohne dass' + Nebensatz." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Wartezeiten' (Plural) → die." },
        { nr: 5, o: ["führen", "führt", "führe"], c: 0, h: "einige Bundesländer (Plural) → führen." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Führerscheinstelle", "Frist", "Anerkennung", "Wartezeiten", "Antragsverfahren"],
      text: "Der Umtausch erfolgt bei der ___(6)___. Dabei muss eine bestimmte ___(7)___ eingehalten werden. In manchen Fällen erfolgt eine direkte ___(8)___ ohne Prüfung. Viele beklagen die langen ___(9)___. Digitale ___(10)___ sollen den Prozess vereinfachen.",
      loesung: { 6: "Führerscheinstelle", 7: "Frist", 8: "Anerkennung", 9: "Wartezeiten", 10: "Antragsverfahren" }
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
        situation: "These: 'Ausländische Führerscheine sollten ohne zusätzliche Prüfung generell anerkannt werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Behördenprozesse wie der Führerschein-Umtausch sollten vollständig digitalisiert werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

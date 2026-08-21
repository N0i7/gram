// ============================================================
// FLOß Modelltest B2 — Nr. 27
// Gleiches Format wie Nr. 01–26.
// ============================================================

window.MODELLTEST_B2_27 = {
  testKey: "modelltest-b2-27",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 27",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Unterschiedliche Kommunikationsstile im Berufsalltag" },
        { id: 2, text: "Direktheit als kulturelle Herausforderung" },
        { id: 3, text: "Hierarchieverständnis in verschiedenen Kulturen" },
        { id: 4, text: "Nonverbale Signale werden missverstanden" },
        { id: 5, text: "Interkulturelle Trainings als Lösungsansatz" },
        { id: 6, text: "Zeitverständnis im internationalen Team" },
        { id: 7, text: "Sprachbarrieren verstärken Missverständnisse" },
        { id: 8, text: "Konfliktvermeidung als kulturelles Muster" }
      ],
      texte: [
        { id: "a", text: "In manchen Kulturen gilt direkte Kritik als respektlos, während sie in anderen als normale Feedbackform angesehen wird." },
        { id: "b", text: "Auch Gestik und Mimik werden je nach kultureller Prägung unterschiedlich interpretiert, was zu Missverständnissen führen kann." },
        { id: "c", text: "In hierarchisch geprägten Kulturen wird Widerspruch gegenüber Vorgesetzten oft vermieden, was Außenstehende irritieren kann." },
        { id: "d", text: "Um kulturelle Missverständnisse zu reduzieren, setzen viele international tätige Unternehmen auf interkulturelle Trainings." },
        { id: "e", text: "Manche Mitarbeitende vermeiden offene Auseinandersetzungen, weil Harmonie in ihrer Kultur besonders wichtig ist." }
      ],
      loesung: { a: 2, b: 4, c: 3, d: 5, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "In international zusammengesetzten Teams treten kulturell bedingte Missverständnisse häufiger auf, als viele erwarten. Ein zentraler Aspekt betrifft den Umgang mit direkter Kritik: Während in einigen Kulturen offene und direkte Rückmeldungen als selbstverständlich gelten, empfinden Mitglieder anderer Kulturkreise dieselbe Direktheit mitunter als unhöflich oder verletzend. Ähnlich verhält es sich mit dem Verständnis von Hierarchien: In stärker hierarchisch geprägten Kulturen wird Widerspruch gegenüber Vorgesetzten häufig vermieden, was von Kolleginnen und Kollegen aus egalitäreren Kulturen leicht als mangelndes Engagement fehlinterpretiert werden kann. Um solchen Missverständnissen vorzubeugen, setzen zahlreiche international tätige Unternehmen mittlerweile auf interkulturelle Trainings, die für unterschiedliche Kommunikationsstile sensibilisieren sollen.",
      aussagen: [
        { nr: 1, text: "Kulturell bedingte Missverständnisse treten in internationalen Teams seltener auf als erwartet.", korrekt: false, hinweis: "Gegenteil: 'häufiger auf, als viele erwarten'." },
        { nr: 2, text: "Direkte Kritik wird in allen Kulturen gleich aufgefasst.", korrekt: false, hinweis: "Gegenteil: teilweise als unhöflich empfunden, in anderen selbstverständlich." },
        { nr: 3, text: "In hierarchisch geprägten Kulturen wird Widerspruch oft vermieden.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Vermiedener Widerspruch wird nie als mangelndes Engagement missverstanden.", korrekt: false, hinweis: "Gegenteil: 'kann... leicht als mangelndes Engagement fehlinterpretiert werden'." },
        { nr: 5, text: "Viele Unternehmen nutzen interkulturelle Trainings.", korrekt: true, hinweis: "Direkt im letzten Satz." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Interkulturelle Trainerin, sucht Aufträge bei internationalen Unternehmen." },
        { nr: 2, text: "HR-Manager, spezialisiert auf internationale Teams." },
        { nr: 3, text: "Konfliktmediatorin für multikulturelle Arbeitsumgebungen." },
        { nr: 4, text: "Kommunikationsberaterin für internationale Konzerne." },
        { nr: 5, text: "Übersetzer, sucht freiberufliche Aufträge im Unternehmenskontext." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Lehrerin, sucht Festanstellung an einer Schule." },
        { nr: 10, text: "Bauingenieurin, sucht Projektstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Unternehmen sucht interkulturelle/n Trainer/in." },
        { id: "b", text: "Internationaler Konzern sucht HR-Manager/in." },
        { id: "c", text: "Beratungsfirma sucht Konfliktmediator/in für multikulturelle Teams." },
        { id: "d", text: "Konzern sucht Kommunikationsberater/in." },
        { id: "e", text: "Unternehmen sucht freiberufliche/n Übersetzer/in." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "In international zusammengesetzten Teams treten Missverständnisse häufiger auf, ___(1)___ viele erwarten. Ein zentraler Aspekt betrifft den Umgang mit Kritik, ___(2)___ in manchen Kulturen als selbstverständlich gilt. In hierarchisch geprägten Kulturen wird Widerspruch vermieden, ___(3)___ von anderen als mangelndes Engagement fehlinterpretiert werden kann. ___(4)___ solchen Missverständnissen vorzubeugen, setzen viele Unternehmen auf Trainings, ___(5)___ für unterschiedliche Stile sensibilisieren sollen.",
      luecken: [
        { nr: 1, o: ["als", "wie", "dass"], c: 0, h: "Vergleich → als." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Kritik' (feminin) → die." },
        { nr: 3, o: ["was", "das", "die"], c: 0, h: "Relativsatz auf ganzen Satz → was." },
        { nr: 4, o: ["Um", "Damit", "Dass"], c: 0, h: "'um... zu' + Infinitiv." },
        { nr: 5, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Trainings' (Plural) → die." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Missverständnisse", "Hierarchie", "Direktheit", "Widerspruch", "Training"],
      text: "Kulturelle ___(6)___ entstehen oft im internationalen Berufsalltag. Manche empfinden ___(7)___ als unhöflich. Das Verständnis von ___(8)___ unterscheidet sich stark zwischen Kulturen. In manchen Kulturen wird ___(9)___ gegenüber Vorgesetzten vermieden. Ein interkulturelles ___(10)___ kann helfen, solche Konflikte zu vermeiden.",
      loesung: { 6: "Missverständnisse", 7: "Direktheit", 8: "Hierarchie", 9: "Widerspruch", 10: "Training" }
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
        situation: "These: 'Interkulturelle Trainings sollten für alle Mitarbeitenden internationaler Unternehmen verpflichtend sein.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Kulturelle Unterschiede im Berufsalltag bereichern Teams mehr, als sie ihnen schaden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

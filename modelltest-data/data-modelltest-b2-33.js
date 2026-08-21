// ============================================================
// FLOß Modelltest B2 — Nr. 33
// Gleiches Format wie Nr. 01–32.
// ============================================================

window.MODELLTEST_B2_33 = {
  testKey: "modelltest-b2-33",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 33",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Risiken der Selbstständigkeit im Ausland" },
        { id: 2, text: "Bürokratische Hürden bei der Gründung" },
        { id: 3, text: "Finanzierung des Startkapitals" },
        { id: 4, text: "Netzwerke als Erfolgsfaktor" },
        { id: 5, text: "Kulturelle Unterschiede im Geschäftsleben" },
        { id: 6, text: "Steuerliche Besonderheiten im Ausland" },
        { id: 7, text: "Digitale Geschäftsmodelle im Vorteil" },
        { id: 8, text: "Scheitern als Lernchance" }
      ],
      texte: [
        { id: "a", text: "Wer sich im Ausland selbstständig macht, geht oft ein höheres finanzielles Risiko ein." },
        { id: "b", text: "Die Gründung eines Unternehmens im Ausland ist häufig mit komplizierten bürokratischen Verfahren verbunden." },
        { id: "c", text: "Ein gutes berufliches Netzwerk erweist sich für viele Gründer als entscheidender Erfolgsfaktor." },
        { id: "d", text: "Kulturelle Unterschiede im Geschäftsleben können zu Missverständnissen führen, wenn man sich nicht vorbereitet." },
        { id: "e", text: "Digitale Geschäftsmodelle lassen sich oft leichter über Ländergrenzen hinweg umsetzen als klassische Betriebe." }
      ],
      loesung: { a: 1, b: 2, c: 4, d: 5, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Eine Existenzgründung im Ausland stellt viele Menschen vor besondere Herausforderungen. Neben dem finanziellen Risiko, das eine Gründung grundsätzlich mit sich bringt, kommen häufig bürokratische Hürden hinzu, die sich von Land zu Land stark unterscheiden können. Auch kulturelle Unterschiede im Geschäftsleben sollten nicht unterschätzt werden, da sie zu Missverständnissen mit Geschäftspartnern führen können. Ein gut ausgebautes berufliches Netzwerk erweist sich dabei häufig als entscheidender Erfolgsfaktor. Digitale Geschäftsmodelle bieten hier einen gewissen Vorteil, da sie sich oft leichter über Ländergrenzen hinweg umsetzen lassen als klassische Unternehmen.",
      aussagen: [
        { nr: 1, text: "Eine Gründung im Ausland bringt besondere Herausforderungen mit sich.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Bürokratische Hürden sind in allen Ländern gleich.", korrekt: false, hinweis: "Gegenteil: 'die sich von Land zu Land stark unterscheiden können'." },
        { nr: 3, text: "Kulturelle Unterschiede können zu Missverständnissen führen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Ein Netzwerk spielt keine wichtige Rolle.", korrekt: false, hinweis: "Gegenteil: 'erweist sich dabei häufig als entscheidender Erfolgsfaktor'." },
        { nr: 5, text: "Digitale Geschäftsmodelle sind schwerer umzusetzen als klassische Betriebe.", korrekt: false, hinweis: "Gegenteil: 'lassen sich oft leichter... umsetzen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Unternehmensberaterin für Existenzgründungen im Ausland." },
        { nr: 2, text: "Steuerberater, spezialisiert auf internationale Gründungen." },
        { nr: 3, text: "Netzwerkkoordinatorin für Gründer-Communities." },
        { nr: 4, text: "Interkultureller Trainer für Geschäftsleute." },
        { nr: 5, text: "Digitalexperte für internationale Geschäftsmodelle." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 10, text: "Journalistin, sucht Redaktionsstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Beratungsfirma sucht Unternehmensberater/in für Gründungen." },
        { id: "b", text: "Kanzlei sucht Steuerberater/in für internationale Fälle." },
        { id: "c", text: "Verband sucht Netzwerkkoordinator/in für Gründer." },
        { id: "d", text: "Institut sucht interkulturellen Trainer/in." },
        { id: "e", text: "Start-up sucht Digitalexperte/in." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Eine Existenzgründung im Ausland stellt viele Menschen vor Herausforderungen, ___(1)___ bürokratische Hürden hinzukommen. Kulturelle Unterschiede sollten nicht unterschätzt werden, ___(2)___ sie zu Missverständnissen führen können. Ein Netzwerk, ___(3)___ man sich aufbaut, ist oft entscheidend. Digitale Geschäftsmodelle, ___(4)___ sich leicht über Grenzen hinweg umsetzen lassen, bieten Vorteile. Wer gründen möchte, sollte sich informieren, ___(5)___ Regeln im Zielland gelten.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 3, o: ["das", "die", "was"], c: 0, h: "Relativpronomen Akkusativ bezogen auf 'Netzwerk' (neutrum) → das." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Geschäftsmodelle' (Plural) → die." },
        { nr: 5, o: ["welche", "die", "was"], c: 0, h: "Interrogativpronomen für Sachfrage (indirekte Frage) → welche." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Existenzgründung", "bürokratisch", "Netzwerk", "Missverständnisse", "Geschäftsmodelle"],
      text: "Eine ___(6)___ im Ausland ist herausfordernd. Häufig treten ___(7)___ Hürden auf. Kulturelle Unterschiede können zu ___(8)___ führen. Ein gutes ___(9)___ hilft beim Erfolg. Digitale ___(10)___ lassen sich leichter international umsetzen.",
      loesung: { 6: "Existenzgründung", 7: "bürokratisch", 8: "Missverständnisse", 9: "Netzwerk", 10: "Geschäftsmodelle" }
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
        situation: "These: 'Der Staat sollte Existenzgründer im Ausland stärker finanziell unterstützen.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Digitale Geschäftsmodelle sind die Zukunft der Existenzgründung im Ausland.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

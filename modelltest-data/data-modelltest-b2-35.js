// ============================================================
// FLOß Modelltest B2 — Nr. 35
// Gleiches Format wie Nr. 01–34.
// ============================================================

window.MODELLTEST_B2_35 = {
  testKey: "modelltest-b2-35",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 35",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Karriereplanung und Kinderwunsch im Konflikt" },
        { id: 2, text: "Elternzeit als Karriereknick" },
        { id: 3, text: "Familienfreundliche Unternehmenskultur" },
        { id: 4, text: "Finanzielle Aspekte der Familienplanung" },
        { id: 5, text: "Späte Elternschaft als Trend" },
        { id: 6, text: "Rollenbilder im Wandel" },
        { id: 7, text: "Kinderlosigkeit aus beruflichen Gründen" },
        { id: 8, text: "Betriebliche Kinderbetreuung" }
      ],
      texte: [
        { id: "a", text: "Viele Frauen und Männer sehen sich mit einem Konflikt zwischen Karriereplanung und Kinderwunsch konfrontiert." },
        { id: "b", text: "Eine familienfreundliche Unternehmenskultur kann entscheidend dazu beitragen, diesen Konflikt zu entschärfen." },
        { id: "c", text: "Manche Menschen entscheiden sich aus beruflichen Gründen bewusst gegen Kinder." },
        { id: "d", text: "Traditionelle Rollenbilder verändern sich zunehmend, was neue Herausforderungen mit sich bringt." },
        { id: "e", text: "Einige Unternehmen bieten inzwischen eigene Betreuungsangebote für die Kinder ihrer Angestellten an." }
      ],
      loesung: { a: 1, b: 3, c: 7, d: 6, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Für viele Berufstätige stellt die Vereinbarkeit von Karriereplanung und Kinderwunsch eine erhebliche Herausforderung dar. Insbesondere in Berufen mit hohem Leistungsdruck entscheiden sich manche Menschen bewusst gegen Kinder, um ihre berufliche Entwicklung nicht zu gefährden. Eine familienfreundliche Unternehmenskultur, die etwa flexible Arbeitszeiten oder betriebliche Kinderbetreuung umfasst, kann diesen Konflikt jedoch deutlich entschärfen. Gleichzeitig verändern sich traditionelle Rollenbilder zunehmend, wodurch auch Väter stärker in die Familienplanung eingebunden werden. Experten sehen in dieser Entwicklung einen wichtigen Schritt hin zu mehr Gleichberechtigung im Berufsleben.",
      aussagen: [
        { nr: 1, text: "Die Vereinbarkeit von Karriere und Kinderwunsch ist eine Herausforderung.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Niemand entscheidet sich aus beruflichen Gründen gegen Kinder.", korrekt: false, hinweis: "Gegenteil: 'entscheiden sich manche Menschen bewusst gegen Kinder'." },
        { nr: 3, text: "Eine familienfreundliche Unternehmenskultur kann helfen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Traditionelle Rollenbilder bleiben unverändert.", korrekt: false, hinweis: "Gegenteil: 'verändern sich zunehmend'." },
        { nr: 5, text: "Väter werden weniger in die Familienplanung eingebunden.", korrekt: false, hinweis: "Gegenteil: 'werden auch Väter stärker... eingebunden'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "HR-Beraterin für familienfreundliche Unternehmenskultur." },
        { nr: 2, text: "Leiterin einer betrieblichen Kinderbetreuung." },
        { nr: 3, text: "Coach für Vereinbarkeit von Karriere und Familie." },
        { nr: 4, text: "Sozialforscher, untersucht Rollenbilder im Wandel." },
        { nr: 5, text: "Finanzberaterin für Familienplanung." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 10, text: "Journalistin, sucht Redaktionsstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Unternehmen sucht HR-Beraterin für Familienfreundlichkeit." },
        { id: "b", text: "Firma sucht Leiter/in für Kinderbetreuung." },
        { id: "c", text: "Coaching-Institut sucht Berater/in für Vereinbarkeit." },
        { id: "d", text: "Forschungsinstitut sucht Sozialforscher/in." },
        { id: "e", text: "Bank sucht Finanzberater/in für Familien." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Für viele Berufstätige ist die Vereinbarkeit von Karriere und Kinderwunsch schwierig, ___(1)___ der Leistungsdruck oft hoch ist. Manche entscheiden sich gegen Kinder, ___(2)___ ihre Karriere nicht zu gefährden. Eine Unternehmenskultur, ___(3)___ Flexibilität bietet, kann helfen. Rollenbilder, ___(4)___ sich verändern, binden auch Väter stärker ein. Experten sehen darin einen Fortschritt, ___(5)___ die Gleichberechtigung fördert.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["um", "damit", "dass"], c: 0, h: "'um... zu' + Infinitiv." },
        { nr: 3, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Unternehmenskultur' (feminin) → die." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Rollenbilder' (Plural) → die." },
        { nr: 5, o: ["der", "die", "was"], c: 0, h: "Relativpronomen Nominativ bezogen auf 'Fortschritt' (maskulin, Subjekt des Relativsatzes) → der." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Kinderwunsch", "Leistungsdruck", "Kinderbetreuung", "Rollenbilder", "Gleichberechtigung"],
      text: "Karriere und ___(6)___ zu vereinbaren ist schwierig. Besonders bei hohem ___(7)___ entscheiden sich manche gegen Kinder. Betriebliche ___(8)___ kann helfen. Traditionelle ___(9)___ verändern sich. Das fördert die ___(10)___ im Beruf.",
      loesung: { 6: "Kinderwunsch", 7: "Leistungsdruck", 8: "Kinderbetreuung", 9: "Rollenbilder", 10: "Gleichberechtigung" }
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
        situation: "These: 'Unternehmen sollten gesetzlich zu familienfreundlichen Angeboten wie betrieblicher Kinderbetreuung verpflichtet werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Die Entscheidung gegen Kinder aus beruflichen Gründen ist ein Zeichen gesellschaftlicher Fehlentwicklung.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

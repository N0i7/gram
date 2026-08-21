// ============================================================
// FLOß Modelltest B2 — Nr. 36
// Gleiches Format wie Nr. 01–35.
// ============================================================

window.MODELLTEST_B2_36 = {
  testKey: "modelltest-b2-36",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 36",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Zunahme von Extremwetterereignissen" },
        { id: 2, text: "Vorsorge in gefährdeten Regionen" },
        { id: 3, text: "Rolle des Katastrophenschutzes" },
        { id: 4, text: "Internationale Zusammenarbeit" },
        { id: 5, text: "Versicherung gegen Naturkatastrophen" },
        { id: 6, text: "Psychische Folgen für Betroffene" },
        { id: 7, text: "Digitale Frühwarnsysteme" },
        { id: 8, text: "Wiederaufbau nach Katastrophen" }
      ],
      texte: [
        { id: "a", text: "In den letzten Jahren haben Extremwetterereignisse wie Überschwemmungen und Stürme deutlich zugenommen." },
        { id: "b", text: "In besonders gefährdeten Regionen wird zunehmend in Vorsorgemaßnahmen investiert." },
        { id: "c", text: "Der Katastrophenschutz spielt bei der Bewältigung solcher Ereignisse eine zentrale Rolle." },
        { id: "d", text: "Digitale Frühwarnsysteme können wertvolle Zeit verschaffen, um Menschen rechtzeitig zu warnen." },
        { id: "e", text: "Betroffene leiden nach solchen Ereignissen häufig auch unter psychischen Belastungen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 7, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Extremwetterereignisse wie Überschwemmungen und Stürme haben in den vergangenen Jahren deutlich zugenommen, was viele Experten auf den Klimawandel zurückführen. In besonders gefährdeten Regionen wird daher zunehmend in Vorsorgemaßnahmen investiert, etwa in stabilere Deiche oder verbesserte Entwässerungssysteme. Der Katastrophenschutz übernimmt bei der Bewältigung solcher Ereignisse eine zentrale Rolle, sowohl bei der Evakuierung als auch beim anschließenden Wiederaufbau. Digitale Frühwarnsysteme können dabei wertvolle Zeit verschaffen, um die betroffene Bevölkerung rechtzeitig zu warnen. Nicht selten leiden Betroffene nach solchen Ereignissen zudem unter erheblichen psychischen Belastungen, die oft unterschätzt werden.",
      aussagen: [
        { nr: 1, text: "Extremwetterereignisse haben zugenommen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "In gefährdeten Regionen wird nicht in Vorsorge investiert.", korrekt: false, hinweis: "Gegenteil: 'wird... zunehmend in Vorsorgemaßnahmen investiert'." },
        { nr: 3, text: "Der Katastrophenschutz spielt eine zentrale Rolle.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Digitale Frühwarnsysteme verschaffen keine Zeit.", korrekt: false, hinweis: "Gegenteil: 'können... wertvolle Zeit verschaffen'." },
        { nr: 5, text: "Psychische Belastungen werden oft unterschätzt.", korrekt: true, hinweis: "Direkt im Text genannt." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Ingenieur für Hochwasserschutzsysteme." },
        { nr: 2, text: "Koordinatorin für Katastrophenschutz." },
        { nr: 3, text: "Entwickler für digitale Frühwarnsysteme." },
        { nr: 4, text: "Psychologin für Betroffene von Naturkatastrophen." },
        { nr: 5, text: "Projektleiterin für Wiederaufbauprojekte." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 10, text: "Journalistin, sucht Redaktionsstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Kommune sucht Ingenieur/in für Hochwasserschutz." },
        { id: "b", text: "Behörde sucht Koordinator/in für Katastrophenschutz." },
        { id: "c", text: "IT-Unternehmen sucht Entwickler/in für Frühwarnsysteme." },
        { id: "d", text: "Klinik sucht Psychologe/Psychologin für Betroffene." },
        { id: "e", text: "Organisation sucht Projektleiter/in für Wiederaufbau." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Extremwetterereignisse haben zugenommen, ___(1)___ viele Experten dies auf den Klimawandel zurückführen. In gefährdeten Regionen, ___(2)___ besonders betroffen sind, wird in Vorsorge investiert. Der Katastrophenschutz, ___(3)___ eine zentrale Rolle spielt, übernimmt Evakuierung und Wiederaufbau. Frühwarnsysteme, ___(4)___ digital funktionieren, verschaffen wertvolle Zeit. Psychische Belastungen, ___(5)___ oft unterschätzt werden, betreffen viele Menschen.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Regionen' (Plural) → die." },
        { nr: 3, o: ["der", "die", "das"], c: 0, h: "Relativpronomen Nominativ bezogen auf 'Katastrophenschutz' (maskulin) → der." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Frühwarnsysteme' (Plural) → die." },
        { nr: 5, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Belastungen' (Plural) → die." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Extremwetterereignisse", "Vorsorgemaßnahmen", "Katastrophenschutz", "Frühwarnsysteme", "psychische Belastungen"],
      text: "___(6)___ haben in den letzten Jahren zugenommen. In gefährdeten Regionen investiert man in ___(7)___. Der ___(8)___ spielt eine zentrale Rolle. Digitale ___(9)___ warnen die Bevölkerung rechtzeitig. Betroffene leiden oft unter ___(10)___.",
      loesung: { 6: "Extremwetterereignisse", 7: "Vorsorgemaßnahmen", 8: "Katastrophenschutz", 9: "Frühwarnsysteme", 10: "psychische Belastungen" }
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
        situation: "These: 'Der Staat sollte deutlich mehr in digitale Frühwarnsysteme investieren.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Die psychischen Folgen von Naturkatastrophen werden in der öffentlichen Diskussion zu wenig beachtet.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

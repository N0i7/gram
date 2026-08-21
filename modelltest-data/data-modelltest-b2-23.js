// ============================================================
// FLOß Modelltest B2 — Nr. 23
// Gleiches Format wie Nr. 01–22.
// ============================================================

window.MODELLTEST_B2_23 = {
  testKey: "modelltest-b2-23",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 23",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Unsicheres Einkommen als Herausforderung" },
        { id: 2, text: "Soziale Absicherung von Freiberuflern" },
        { id: 3, text: "Freiheit als größter Vorteil" },
        { id: 4, text: "Steuerliche Besonderheiten der Selbstständigkeit" },
        { id: 5, text: "Netzwerken als Erfolgsfaktor" },
        { id: 6, text: "Digitalisierung erleichtert Selbstständigkeit" },
        { id: 7, text: "Work-Life-Balance bei Freiberuflern" },
        { id: 8, text: "Existenzgründung ohne Kapital" }
      ],
      texte: [
        { id: "a", text: "Ein schwankendes monatliches Einkommen stellt für viele Selbstständige eine der größten Herausforderungen dar." },
        { id: "b", text: "Anders als Angestellte müssen Freiberufler ihre Kranken- und Rentenversicherung selbst organisieren." },
        { id: "c", text: "Für die meisten Selbstständigen ist die Freiheit, Arbeitszeit und Aufträge frei zu wählen, der größte Vorteil." },
        { id: "d", text: "Selbstständige müssen ihre Steuererklärung meist komplexer gestalten als Angestellte." },
        { id: "e", text: "Ein gutes berufliches Netzwerk hilft vielen Freiberuflern dabei, kontinuierlich neue Aufträge zu bekommen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Die berufliche Selbstständigkeit erfreut sich zunehmender Beliebtheit, insbesondere unter jüngeren Fachkräften, die Wert auf Flexibilität legen. Der größte Vorteil besteht für viele darin, Arbeitszeiten und Aufträge weitgehend selbst bestimmen zu können. Gleichzeitig bringt diese Freiheit erhebliche Herausforderungen mit sich: Anders als Angestellte müssen Freiberufler ihre soziale Absicherung, also Kranken- und Rentenversicherung, eigenständig organisieren und finanzieren. Zudem schwankt das monatliche Einkommen häufig stark, was eine sorgfältige finanzielle Planung erfordert. Ein belastbares berufliches Netzwerk gilt als entscheidender Faktor, um kontinuierlich an neue Aufträge zu gelangen.",
      aussagen: [
        { nr: 1, text: "Selbstständigkeit ist besonders bei jüngeren Fachkräften beliebt.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Der größte Vorteil ist für viele die freie Zeiteinteilung.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Angestellte müssen ihre soziale Absicherung genauso organisieren wie Freiberufler.", korrekt: false, hinweis: "Gegenteil: 'Anders als Angestellte müssen Freiberufler... eigenständig organisieren'." },
        { nr: 4, text: "Das Einkommen von Selbstständigen ist meist sehr stabil.", korrekt: false, hinweis: "Gegenteil: 'schwankt das monatliche Einkommen häufig stark'." },
        { nr: 5, text: "Ein berufliches Netzwerk gilt als wichtig für neue Aufträge.", korrekt: true, hinweis: "Direkt im letzten Satz." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Steuerberaterin, spezialisiert auf Freiberufler." },
        { nr: 2, text: "Versicherungsberater, berät Selbstständige zur Altersvorsorge." },
        { nr: 3, text: "Coach für Existenzgründer." },
        { nr: 4, text: "Netzwerk-Organisatorin für Freelancer-Communities." },
        { nr: 5, text: "Buchhalter, sucht Mandanten unter Selbstständigen." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Lehrerin, sucht Festanstellung an einer Schule." },
        { nr: 9, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 10, text: "Ingenieurin, sucht Projektstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Steuerkanzlei sucht Berater/in für Freiberufler." },
        { id: "b", text: "Versicherungsagentur sucht Berater/in zur Altersvorsorge für Selbstständige." },
        { id: "c", text: "Coaching-Institut sucht Coach für Existenzgründer." },
        { id: "d", text: "Freelancer-Community sucht Netzwerk-Organisator/in." },
        { id: "e", text: "Buchhaltungsbüro sucht Buchhalter/in für Selbstständige." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "f", 8: "f", 9: "f", 10: "f" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Die berufliche Selbstständigkeit erfreut sich zunehmender Beliebtheit, ___(1)___ viele Menschen Wert auf Flexibilität legen. Der größte Vorteil besteht darin, Arbeitszeiten selbst ___(2)___ zu können. ___(3)___ dieser Freiheit bringt die Selbstständigkeit auch Herausforderungen mit sich. Anders ___(4)___ Angestellte müssen Freiberufler ihre Absicherung selbst organisieren. Ein gutes Netzwerk gilt als entscheidend, ___(5)___ kontinuierlich neue Aufträge zu bekommen.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["bestimmen", "bestimmt", "bestimmte"], c: 0, h: "Infinitiv nach Modalverb-Konstruktion → bestimmen." },
        { nr: 3, o: ["Trotz", "Wegen", "Statt"], c: 0, h: "trotz + Genitiv." },
        { nr: 4, o: ["als", "wie", "zu"], c: 0, h: "'anders als' — feste Wendung." },
        { nr: 5, o: ["um", "damit", "dass"], c: 0, h: "'um... zu' + Infinitiv." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Flexibilität", "Absicherung", "schwankend", "Netzwerk", "Freiberufler"],
      text: "Viele ___(6)___ schätzen die ___(7)___ ihres Berufs. Allerdings müssen sie ihre soziale ___(8)___ selbst organisieren. Auch das Einkommen ist oft ___(9)___. Ein gutes berufliches ___(10)___ hilft dabei, neue Aufträge zu bekommen.",
      loesung: { 6: "Freiberufler", 7: "Flexibilität", 8: "Absicherung", 9: "schwankend", 10: "Netzwerk" }
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
        situation: "These: 'Der Staat sollte Freiberuflern eine verpflichtende Rentenversicherung vorschreiben.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Selbstständigkeit ist für die meisten Menschen die bessere Alternative zur Festanstellung.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

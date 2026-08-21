// ============================================================
// FLOß Modelltest B2 — Nr. 09
// Gleiches Format wie Nr. 01–08.
// ============================================================

window.MODELLTEST_B2_09 = {
  testKey: "modelltest-b2-09",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 9",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Der Druck permanenter Selbstdarstellung" },
        { id: 2, text: "Wenn Algorithmen die Weltsicht formen" },
        { id: 3, text: "Jugendschutz in sozialen Netzwerken" },
        { id: 4, text: "Der schmale Grat zwischen Vernetzung und Vereinsamung" },
        { id: 5, text: "Wirtschaftliche Interessen hinter der Aufmerksamkeitsspanne" },
        { id: 6, text: "Digitale Kompetenz als Elternaufgabe" },
        { id: 7, text: "Cybermobbing als unterschätztes Problem" },
        { id: 8, text: "Datenschutz beginnt bei den Kleinsten" }
      ],
      texte: [
        { id: "a", text: "Plattformen sind wirtschaftlich daran interessiert, Nutzer möglichst lange zu binden — ein Geschäftsmodell, das gezielt psychologische Mechanismen der Aufmerksamkeit ausnutzt." },
        { id: "b", text: "Viele Jugendliche berichten von wachsendem Druck, sich online möglichst positiv und makellos darzustellen, was erheblichen psychischen Stress verursachen kann." },
        { id: "c", text: "Trotz zunehmender Vernetzung fühlen sich viele junge Menschen paradoxerweise einsamer als frühere Generationen, was Forscher auf die Qualität digitaler statt persönlicher Kontakte zurückführen." },
        { id: "d", text: "Personalisierte Empfehlungsalgorithmen bestimmen zunehmend, welche Inhalte Nutzer überhaupt zu sehen bekommen, wodurch sich individuelle Weltsichten zunehmend voneinander entfernen können." },
        { id: "e", text: "Eltern stehen vor der Herausforderung, ihren Kindern einen verantwortungsvollen Umgang mit sozialen Medien zu vermitteln, ohne selbst immer über die neuesten Entwicklungen informiert zu sein." }
      ],
      loesung: { a: 5, b: 1, c: 4, d: 2, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Der Schutz Minderjähriger in sozialen Netzwerken beschäftigt Politik und Gesellschaft zunehmend intensiver. Zwar verlangen die meisten Plattformen ein Mindestalter für die Registrierung, doch lässt sich dieses in der Praxis kaum wirksam kontrollieren, da eine zuverlässige Altersverifikation technisch und rechtlich anspruchsvoll bleibt. Kritiker bemängeln zudem, dass viele Sicherheitsfunktionen erst nach öffentlichem Druck eingeführt wurden, statt von Beginn an mitgedacht zu werden. Befürworter der Plattformen verweisen dagegen auf zahlreiche Aufklärungskampagnen sowie technische Filtermechanismen, die problematische Inhalte automatisiert erkennen sollen — auch wenn deren Zuverlässigkeit in der Praxis stark schwankt. Einigkeit besteht zumindest darin, dass technische Lösungen allein nicht ausreichen und eine Kombination aus Regulierung, Aufklärung und elterlicher Begleitung notwendig ist, um Minderjährige wirksam zu schützen.",
      aussagen: [
        { nr: 1, text: "Die Altersverifikation auf Plattformen funktioniert laut Text zuverlässig.", korrekt: false, hinweis: "Gegenteil: 'lässt sich... kaum wirksam kontrollieren'." },
        { nr: 2, text: "Kritiker bemängeln, dass Sicherheitsfunktionen oft erst nach öffentlichem Druck eingeführt wurden.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Technische Filtermechanismen funktionieren laut Text immer zuverlässig.", korrekt: false, hinweis: "Gegenteil: 'Zuverlässigkeit... schwankt stark'." },
        { nr: 4, text: "Es besteht Einigkeit, dass technische Lösungen allein nicht ausreichen.", korrekt: true, hinweis: "Letzter Satz des Textes." },
        { nr: 5, text: "Der Text sieht elterliche Begleitung als überflüssig an.", korrekt: false, hinweis: "Gegenteil: 'elterlicher Begleitung notwendig'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Medienpädagogin, sucht Stelle in der Elternberatung zu digitalen Medien." },
        { nr: 2, text: "Softwareentwickler, sucht Stelle im Bereich Kinder- und Jugendschutz-Technologie." },
        { nr: 3, text: "Psychologin, sucht Forschungsstelle zu Cybermobbing." },
        { nr: 4, text: "Juristin, sucht Stelle im Bereich Plattformregulierung für Minderjährige." },
        { nr: 5, text: "Berufseinsteiger, sucht Praktikum im Social-Media-Marketing." },
        { nr: 6, text: "Lehrer, sucht Fortbildung zu digitaler Medienkompetenz für Schüler." },
        { nr: 7, text: "Datenanalystin, sucht Stelle im Bereich Algorithmentransparenz." },
        { nr: 8, text: "Sozialarbeiterin, sucht Stelle in der Präventionsarbeit gegen Cybermobbing." },
        { nr: 9, text: "Übersetzer, sucht freiberufliche Aufträge im Bildungsbereich." },
        { nr: 10, text: "Journalistin, sucht Recherchethemen zu sozialen Medien und Jugend." }
      ],
      anzeigen: [
        { id: "a", text: "Bildungsträger sucht Medienpädagoge/in für Elternberatung." },
        { id: "b", text: "Technologieunternehmen sucht Entwickler/in für Jugendschutzsoftware." },
        { id: "c", text: "Forschungsinstitut sucht Psycholog/in zu Cybermobbing." },
        { id: "d", text: "Verbraucherschutzorganisation sucht Jurist/in für Plattformregulierung." },
        { id: "e", text: "Beratungsstelle sucht Sozialarbeiter/in für Präventionsarbeit gegen Cybermobbing." },
        { id: "f", text: "Fortbildungsinstitut bietet Kurse zu digitaler Medienkompetenz für Lehrkräfte." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "x", 6: "f", 7: "x", 8: "e", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ die meisten Plattformen ein Mindestalter verlangen, lässt sich dieses kaum ___(2)___ kontrollieren. Kritiker bemängeln ___(3)___, dass Sicherheitsfunktionen oft erst spät eingeführt werden. ___(4)___ dieser Kritik verweisen Plattformbetreiber auf zahlreiche Aufklärungskampagnen. Einigkeit besteht ___(5)___ darin, dass mehrere Maßnahmen kombiniert werden müssen.",
      luecken: [
        { nr: 1, o: ["Obwohl", "Weil", "Damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 2, o: ["wirksam", "kaum", "selten"], c: 0, h: "Adverb der Art → wirksam." },
        { nr: 3, o: ["zudem", "davon", "dabei"], c: 0, h: "zusätzlich → zudem." },
        { nr: 4, o: ["Ungeachtet", "Wegen", "Damit"], c: 0, h: "ungeachtet + Genitiv." },
        { nr: 5, o: ["zumindest", "kaum", "nie"], c: 0, h: "einschränkend → zumindest." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["mitunter", "keineswegs", "vielmehr", "zusehends", "letzten Endes"],
      text: "Der Schutz Minderjähriger wird ___(6)___ dringlicher diskutiert. Eine einfache technische Lösung ist ___(7)___ in Sicht. Es geht ___(8)___ um ein Zusammenspiel verschiedener Akteure. Elterliche Begleitung bleibt ___(9)___ unersetzlich. ___(10)___ entscheidet die gesellschaftliche Aufmerksamkeit über echte Verbesserungen.",
      loesung: { 6: "zusehends", 7: "keineswegs", 8: "vielmehr", 9: "mitunter", 10: "letzten Endes" }
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
        situation: "These: 'Soziale Netzwerke sollten für Nutzer unter 16 Jahren gesetzlich verboten werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Eltern tragen die Hauptverantwortung für den sicheren Umgang ihrer Kinder mit sozialen Medien, nicht die Plattformen.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

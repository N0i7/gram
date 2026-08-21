// ============================================================
// FLOß Modelltest B2 — Nr. 17
// Gleiches Format wie Nr. 01–16.
// ============================================================

window.MODELLTEST_B2_17 = {
  testKey: "modelltest-b2-17",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 17",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Bewusster Konsum als Trend" },
        { id: 2, text: "Greenwashing als Marketingstrategie" },
        { id: 3, text: "Regionale Produkte im Aufwind" },
        { id: 4, text: "Nachhaltigkeitssiegel schaffen Verwirrung" },
        { id: 5, text: "Höhere Preise als Hindernis" },
        { id: 6, text: "Konsumverzicht als Lebensstil" },
        { id: 7, text: "Digitale Tools für nachhaltigen Konsum" },
        { id: 8, text: "Unternehmen reagieren auf Verbraucherdruck" }
      ],
      texte: [
        { id: "a", text: "Immer mehr Konsumentinnen und Konsumenten achten bewusst darauf, welche Auswirkungen ihr Kaufverhalten auf Umwelt und Gesellschaft hat." },
        { id: "b", text: "Kritiker werfen manchen Unternehmen vor, ihre Produkte durch geschickte Werbung nachhaltiger erscheinen zu lassen, als sie tatsächlich sind." },
        { id: "c", text: "Die Vielzahl unterschiedlicher Nachhaltigkeitssiegel macht es Verbrauchern oft schwer, seriöse von weniger glaubwürdigen Angaben zu unterscheiden." },
        { id: "d", text: "Nachhaltig produzierte Waren sind häufig teurer, was viele Menschen trotz guter Absichten vom Kauf abhält." },
        { id: "e", text: "Verschiedene Apps helfen Verbrauchern inzwischen dabei, die Herkunft und Umweltbilanz von Produkten zu überprüfen." }
      ],
      loesung: { a: 1, b: 2, c: 4, d: 5, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Nachhaltiger Konsum hat sich in den vergangenen Jahren von einer Nische zu einem gesellschaftlich relevanten Thema entwickelt. Umfragen zeigen, dass ein wachsender Teil der Bevölkerung bereit ist, bei Kaufentscheidungen ökologische und soziale Kriterien zu berücksichtigen. Gleichzeitig beklagen viele Verbraucherinnen und Verbraucher, dass es schwierig sei, seriöse Nachhaltigkeitsangaben von reinem Marketing zu unterscheiden, da die Vielzahl an Siegeln und Labels oft verwirrend wirkt. Hinzu kommt, dass nachhaltig produzierte Produkte häufig teurer sind, was besonders einkommensschwächere Haushalte vor Herausforderungen stellt. Expertinnen und Experten fordern deshalb einheitlichere und verständlichere Kennzeichnungen sowie eine stärkere staatliche Regulierung, um Verbrauchern eine informierte Entscheidung zu erleichtern.",
      aussagen: [
        { nr: 1, text: "Nachhaltiger Konsum hat sich zu einem gesellschaftlich relevanten Thema entwickelt.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Laut Umfragen ist niemand bereit, ökologische Kriterien beim Kauf zu berücksichtigen.", korrekt: false, hinweis: "Gegenteil: 'wachsender Teil der Bevölkerung bereit'." },
        { nr: 3, text: "Verbraucher finden es einfach, seriöse Nachhaltigkeitsangaben zu erkennen.", korrekt: false, hinweis: "Gegenteil: 'schwierig sei, seriöse Angaben... zu unterscheiden'." },
        { nr: 4, text: "Nachhaltig produzierte Produkte sind oft teurer.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Experten fordern weniger staatliche Regulierung.", korrekt: false, hinweis: "Gegenteil: 'stärkere staatliche Regulierung'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Nachhaltigkeitsmanagerin, sucht Stelle in einem Konsumgüterunternehmen." },
        { nr: 2, text: "Journalist, sucht Recherchethemen zu Greenwashing." },
        { nr: 3, text: "App-Entwicklerin, sucht Projekt zu nachhaltigem Konsum." },
        { nr: 4, text: "Beraterin, sucht Stelle zu Nachhaltigkeitssiegeln." },
        { nr: 5, text: "Marketingexperte, sucht Aufträge für regionale Produkte." },
        { nr: 6, text: "Wirtschaftswissenschaftlerin, sucht Forschungsstelle zu Konsumverhalten." },
        { nr: 7, text: "Übersetzer, sucht freiberufliche Aufträge." },
        { nr: 8, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 9, text: "Buchhalter, sucht Teilzeitstelle." },
        { nr: 10, text: "Ingenieurin, sucht Stelle im Maschinenbau." }
      ],
      anzeigen: [
        { id: "a", text: "Konsumgüterunternehmen sucht Nachhaltigkeitsmanager/in." },
        { id: "b", text: "Medienhaus sucht Journalist/in für Recherche zu Greenwashing." },
        { id: "c", text: "Startup sucht App-Entwickler/in für nachhaltigen Konsum." },
        { id: "d", text: "Beratungsfirma sucht Berater/in für Nachhaltigkeitssiegel." },
        { id: "e", text: "Agentur sucht Marketingexperte/in für regionale Produkte." },
        { id: "f", text: "Universität sucht Wirtschaftswissenschaftler/in zu Konsumverhalten." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ immer mehr Menschen auf Nachhaltigkeit achten, wächst die Nachfrage nach entsprechenden Produkten. ___(2)___ viele gute Absichten haben, fällt die Umsetzung oft schwer. ___(3)___ höherer Preise entscheiden sich manche gegen den Kauf. Wichtig ist, ___(4)___ die Kennzeichnungen verständlicher werden. Nur so lässt sich vermeiden, ___(5)___ Verbraucher verwirrt werden.",
      luecken: [
        { nr: 1, o: ["Da", "Obwohl", "Damit"], c: 0, h: "Grund → da." },
        { nr: 2, o: ["Obwohl", "Weil", "Damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 3, o: ["Wegen", "Trotz", "Anstelle"], c: 0, h: "wegen + Genitiv." },
        { nr: 4, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'wichtig ist' → dass." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'vermeiden' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["zunehmend", "keineswegs", "vielmehr", "glaubwürdig", "einheitlich"],
      text: "Nachhaltiger Konsum gewinnt ___(6)___ an Bedeutung. Nicht jedes Siegel ist ___(7)___. Es geht ___(8)___ um echte Transparenz. Experten fordern ___(9)___e Kennzeichnungen. Eine schnelle Lösung ist ___(10)___ in Sicht.",
      loesung: { 6: "zunehmend", 7: "glaubwürdig", 8: "vielmehr", 9: "einheitlich", 10: "keineswegs" }
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
        situation: "These: 'Der Staat sollte einheitliche Nachhaltigkeitssiegel gesetzlich vorschreiben.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Nachhaltiger Konsum ist vor allem eine Frage des Einkommens, nicht der persönlichen Einstellung.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

// ============================================================
// FLOß Modelltest B2 — Nr. 08
// Gleiches Format wie Nr. 01–07.
// ============================================================

window.MODELLTEST_B2_08 = {
  testKey: "modelltest-b2-08",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 8",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Die wachsende Kluft zwischen Generationen" },
        { id: 2, text: "Warum private Vorsorge allein nicht reicht" },
        { id: 3, text: "Rentensystem unter demografischem Druck" },
        { id: 4, text: "Späterer Renteneintritt als unpopuläre Lösung" },
        { id: 5, text: "Zuwanderung als Stabilisierungsfaktor" },
        { id: 6, text: "Altersarmut trifft Frauen besonders häufig" },
        { id: 7, text: "Betriebliche Altersvorsorge im Aufwind" },
        { id: 8, text: "Kapitalgedeckte Modelle im internationalen Vergleich" }
      ],
      texte: [
        { id: "a", text: "Das umlagefinanzierte Rentensystem gerät zunehmend unter Druck, da immer weniger Erwerbstätige die Renten einer wachsenden Zahl von Ruheständlern finanzieren müssen." },
        { id: "b", text: "Politisch bleibt eine Anhebung des Renteneintrittsalters ein heikles Thema, obwohl Ökonomen sie regelmäßig als naheliegende Maßnahme zur Entlastung des Systems nennen." },
        { id: "c", text: "Frauen sind von Altersarmut überdurchschnittlich betroffen, unter anderem weil Erwerbsunterbrechungen durch Kindererziehung und häufigere Teilzeitarbeit die spätere Rentenhöhe erheblich schmälern." },
        { id: "d", text: "Gezielte Zuwanderung könnte den demografischen Druck auf das Rentensystem zumindest teilweise abmildern, sofern die neu Zugewanderten dauerhaft in den Arbeitsmarkt integriert werden." },
        { id: "e", text: "Immer mehr Arbeitgeber bieten zusätzliche Vorsorgemodelle an, auch weil sie sich davon Vorteile im Wettbewerb um qualifizierte Fachkräfte versprechen." }
      ],
      loesung: { a: 3, b: 4, c: 6, d: 5, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Die Debatte über die Zukunft der Altersvorsorge wird in Deutschland seit Jahrzehnten geführt, ohne dass sich eine der vorgeschlagenen Reformen bislang durchgesetzt hätte. Während einige Ökonomen eine stärkere Kapitaldeckung befürworten, warnen andere vor den Risiken volatiler Finanzmärkte, die insbesondere in wirtschaftlichen Krisenzeiten empfindliche Vermögensverluste für künftige Rentner bedeuten könnten. Befürworter des bestehenden Umlagesystems verweisen dagegen auf dessen Stabilität über viele Jahrzehnte hinweg, räumen jedoch ein, dass es angesichts der demografischen Entwicklung struktureller Anpassungen bedarf. Konsens besteht mittlerweile zumindest darin, dass eine Kombination verschiedener Vorsorgesäulen — gesetzliche, betriebliche und private Vorsorge — die Risiken besser verteilen kann als eine einseitige Ausrichtung auf ein einzelnes Modell. Wie genau diese Kombination künftig aussehen soll, bleibt jedoch politisch umstritten.",
      aussagen: [
        { nr: 1, text: "In Deutschland wurde bereits eine grundlegende Rentenreform umgesetzt, die alle zufriedenstellt.", korrekt: false, hinweis: "Gegenteil: 'ohne dass sich eine... Reformen bislang durchgesetzt hätte'." },
        { nr: 2, text: "Kritiker der Kapitaldeckung verweisen auf Risiken volatiler Finanzmärkte.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Befürworter des Umlagesystems sehen keinerlei Anpassungsbedarf.", korrekt: false, hinweis: "Gegenteil: 'räumen jedoch ein, dass es... struktureller Anpassungen bedarf'." },
        { nr: 4, text: "Es besteht Konsens, dass eine Kombination mehrerer Vorsorgesäulen Risiken besser verteilt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die genaue Ausgestaltung der Kombination ist politisch unumstritten.", korrekt: false, hinweis: "Gegenteil: 'bleibt jedoch politisch umstritten'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Versicherungsmathematikerin, sucht Stelle im Bereich Rentenberechnung." },
        { nr: 2, text: "Sozialwissenschaftler, sucht Forschungsstelle zu Altersarmut bei Frauen." },
        { nr: 3, text: "Finanzberaterin, sucht Stelle mit Fokus auf betriebliche Altersvorsorge." },
        { nr: 4, text: "Berufseinsteiger, sucht erste Stelle im Versicherungswesen." },
        { nr: 5, text: "Politikberater, sucht Stelle im Bereich Rentenpolitik." },
        { nr: 6, text: "Journalistin, sucht Recherchethemen zu demografischem Wandel." },
        { nr: 7, text: "Wirtschaftsprüfer, sucht Stelle bei einem Pensionsfonds." },
        { nr: 8, text: "Sozialarbeiterin, sucht Stelle in der Seniorenberatung." },
        { nr: 9, text: "Datenanalystin, sucht Stelle im Bereich demografische Prognosen." },
        { nr: 10, text: "Übersetzer, sucht freiberufliche Aufträge im Finanzbereich." }
      ],
      anzeigen: [
        { id: "a", text: "Versicherungsunternehmen sucht Versicherungsmathematiker/in für Rentenberechnung." },
        { id: "b", text: "Forschungsinstitut sucht Sozialwissenschaftler/in zu Altersarmut." },
        { id: "c", text: "Beratungsunternehmen sucht Finanzberater/in für betriebliche Altersvorsorge." },
        { id: "d", text: "Thinktank sucht Politikberater/in für Rentenpolitik." },
        { id: "e", text: "Pensionsfonds sucht Wirtschaftsprüfer/in." },
        { id: "f", text: "Institut sucht Datenanalyst/in für demografische Prognosen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "x", 5: "d", 6: "x", 7: "e", 8: "x", 9: "f", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ das Umlagesystem über Jahrzehnte stabil war, gerät es nun ___(2)___ des demografischen Wandels unter Druck. Eine Anhebung des Renteneintrittsalters gilt ___(3)___ als naheliegende, aber politisch riskante Maßnahme. ___(4)___ dieser Bedenken setzen viele Ökonomen auf eine Kombination verschiedener Vorsorgesäulen. Wie diese ___(5)___ ausgestaltet wird, bleibt umstritten.",
      luecken: [
        { nr: 1, o: ["Obwohl", "Weil", "Damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 2, o: ["aufgrund", "trotz", "wegen"], c: 0, h: "formal, kausal → aufgrund + Genitiv." },
        { nr: 3, o: ["gemeinhin", "kaum", "selten"], c: 0, h: "allgemein anerkannt → gemeinhin." },
        { nr: 4, o: ["Ungeachtet", "Wegen", "Trotz"], c: 0, h: "ungeachtet + Genitiv = trotz." },
        { nr: 5, o: ["künftig", "damals", "früher"], c: 0, h: "Zukunft → künftig." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["mithin", "gleichwohl", "zunehmend", "keinesfalls", "letztlich"],
      text: "Die Debatte um die Rente wird ___(6)___ hitziger geführt. Eine einfache Lösung ist ___(7)___ in Sicht. ___(8)___ zeigen sich erste Kompromisse zwischen den politischen Lagern. Das Thema betrifft ___(9)___ alle Generationen gleichermaßen. ___(10)___ entscheidet die Politik, wie die Lasten verteilt werden.",
      loesung: { 6: "zunehmend", 7: "keinesfalls", 8: "gleichwohl", 9: "mithin", 10: "letztlich" }
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
        situation: "These: 'Das Renteneintrittsalter sollte weiter angehoben werden, um das Rentensystem langfristig zu sichern.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Private und betriebliche Altersvorsorge sollten stärker gefördert werden als die gesetzliche Rente.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

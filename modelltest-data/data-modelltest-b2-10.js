// ============================================================
// FLOß Modelltest B2 — Nr. 10
// Gleiches Format wie Nr. 01–09.
// ============================================================

window.MODELLTEST_B2_10 = {
  testKey: "modelltest-b2-10",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 10",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Verdichtung statt Zersiedelung" },
        { id: 2, text: "Bürgerbeteiligung bei Bauprojekten" },
        { id: 3, text: "Grünflächen als Erholungsraum" },
        { id: 4, text: "Sozialer Wohnungsbau in der Kritik" },
        { id: 5, text: "Verkehrsplanung der Zukunft" },
        { id: 6, text: "Leerstand trotz Wohnungsnot" },
        { id: 7, text: "Investoren bestimmen den Städtebau" },
        { id: 8, text: "Nachverdichtung stößt auf Widerstand" }
      ],
      texte: [
        { id: "a", text: "Viele Städte setzen mittlerweile auf verdichtetes Bauen statt auf die Ausweitung der Siedlungsflächen ins Umland, um wertvolle Landschaft zu schonen." },
        { id: "b", text: "Anwohner protestieren zunehmend gegen Bauvorhaben in bereits dicht bebauten Vierteln, aus Sorge um Lärm, Verschattung und fehlende Parkplätze." },
        { id: "c", text: "Kritiker bemängeln, dass trotz akuter Wohnungsnot zahlreiche Gebäude über Jahre hinweg ungenutzt bleiben, oft aus spekulativen Gründen." },
        { id: "d", text: "Stadtplaner fordern eine stärkere Einbindung der Bürgerinnen und Bürger bereits in der Planungsphase großer Bauprojekte." },
        { id: "e", text: "Der geförderte Wohnungsbau gilt vielen als unzureichend, da er den tatsächlichen Bedarf an bezahlbarem Wohnraum bei weitem nicht deckt." }
      ],
      loesung: { a: 1, b: 8, c: 6, d: 2, e: 4 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Angesichts wachsender Bevölkerungszahlen und knapper Flächen stehen Städte vor der Herausforderung, ausreichend Wohnraum zu schaffen, ohne dabei Lebensqualität und Grünflächen zu opfern. Befürworter der Nachverdichtung argumentieren, dass ungenutzte Baulücken und niedrig bebaute Grundstücke effizienter genutzt werden könnten, statt neue Flächen am Stadtrand zu erschließen. Kritiker entgegnen, dass eine zu dichte Bebauung bestehende Infrastruktur wie Schulen, Kitas und Straßen überlaste und zudem wichtige Grün- und Erholungsflächen verdränge. Stadtplanungsexperten betonen, dass eine sorgfältige Abwägung zwischen Nachverdichtung und dem Erhalt von Freiflächen notwendig sei, um langfristig lebenswerte Städte zu gewährleisten. Einigkeit besteht zumindest darin, dass Bürgerbeteiligung frühzeitig stattfinden sollte, um Konflikte zu vermeiden.",
      aussagen: [
        { nr: 1, text: "Städte müssen laut Text Wohnraum schaffen, ohne Lebensqualität zu opfern.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Befürworter der Nachverdichtung wollen vor allem neue Flächen am Stadtrand erschließen.", korrekt: false, hinweis: "Gegenteil: 'statt neue Flächen am Stadtrand zu erschließen'." },
        { nr: 3, text: "Kritiker befürchten eine Überlastung der Infrastruktur durch zu dichte Bebauung.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Experten sehen keine Notwendigkeit für eine Abwägung zwischen Nachverdichtung und Freiflächen.", korrekt: false, hinweis: "Gegenteil: 'sorgfältige Abwägung... notwendig'." },
        { nr: 5, text: "Es besteht Einigkeit, dass Bürgerbeteiligung frühzeitig stattfinden sollte.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Stadtplanerin, sucht Stelle im Bereich Nachverdichtung." },
        { nr: 2, text: "Architekt, sucht Stelle im sozialen Wohnungsbau." },
        { nr: 3, text: "Landschaftsplanerin, sucht Projekt zur Grünflächengestaltung." },
        { nr: 4, text: "Jurist, sucht Stelle im Baurecht." },
        { nr: 5, text: "Soziologe, sucht Forschungsstelle zu Bürgerbeteiligung." },
        { nr: 6, text: "Verkehrsplaner, sucht Stelle bei der Stadtverwaltung." },
        { nr: 7, text: "Ingenieurin, sucht Stelle im Bereich erneuerbare Energien." },
        { nr: 8, text: "Journalistin, sucht Recherchethemen zu Stadtentwicklung." },
        { nr: 9, text: "Übersetzer, sucht freiberufliche Aufträge." },
        { nr: 10, text: "Immobilienmaklerin, sucht neue Kunden." }
      ],
      anzeigen: [
        { id: "a", text: "Stadtverwaltung sucht Stadtplaner/in für Nachverdichtungsprojekte." },
        { id: "b", text: "Bauträger sucht Architekt/in für sozialen Wohnungsbau." },
        { id: "c", text: "Kommune sucht Landschaftsplaner/in für neue Grünflächen." },
        { id: "d", text: "Kanzlei sucht Jurist/in mit Schwerpunkt Baurecht." },
        { id: "e", text: "Forschungsinstitut sucht Soziolog/in zu Bürgerbeteiligung bei Bauprojekten." },
        { id: "f", text: "Stadtverwaltung sucht Verkehrsplaner/in für Mobilitätskonzepte." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ wachsender Bevölkerungszahlen stehen Städte vor großen Herausforderungen. ___(2)___ Nachverdichtung effizienter Flächennutzung ermöglicht, kritisieren manche die Belastung der Infrastruktur. ___(3)___ dieser Bedenken setzen viele Städte weiterhin auf verdichtetes Bauen. Wichtig ist, ___(4)___ Bürgerbeteiligung frühzeitig stattfindet. Nur so lassen sich Konflikte vermeiden, ___(5)___ die Akzeptanz für neue Projekte zu erhöhen.",
      luecken: [
        { nr: 1, o: ["Angesichts", "Wegen", "Trotz"], c: 0, h: "angesichts + Genitiv." },
        { nr: 2, o: ["Obwohl", "Weil", "Damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 3, o: ["Ungeachtet", "Aufgrund", "Anstelle"], c: 0, h: "ungeachtet + Genitiv." },
        { nr: 4, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'wichtig ist' → dass." },
        { nr: 5, o: ["um", "damit", "sodass"], c: 0, h: "um...zu + Infinitiv." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["gleichermaßen", "keineswegs", "vielmehr", "zunehmend", "letztlich"],
      text: "Die Debatte um Nachverdichtung wird ___(6)___ intensiver geführt. Eine einfache Lösung ist ___(7)___ in Sicht. Es geht ___(8)___ um eine Abwägung verschiedener Interessen. Anwohner und Investoren sind ___(9)___ betroffen. ___(10)___ entscheidet die Politik über den weiteren Kurs.",
      loesung: { 6: "zunehmend", 7: "keineswegs", 8: "vielmehr", 9: "gleichermaßen", 10: "letztlich" }
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
        situation: "These: 'Städte sollten konsequent auf Nachverdichtung statt auf neue Baugebiete am Stadtrand setzen.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Bürgerbeteiligung bei Bauprojekten verzögert wichtige Entscheidungen und sollte begrenzt werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

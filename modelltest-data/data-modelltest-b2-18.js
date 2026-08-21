// ============================================================
// FLOß Modelltest B2 — Nr. 18
// Gleiches Format wie Nr. 01–17.
// ============================================================

window.MODELLTEST_B2_18 = {
  testKey: "modelltest-b2-18",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 18",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Digitale Ausgrenzung im Alter" },
        { id: 2, text: "Computerkurse speziell für Senioren" },
        { id: 3, text: "Betrug im Internet gezielt gegen Ältere" },
        { id: 4, text: "Generationsübergreifendes Lernen" },
        { id: 5, text: "Digitale Behördengänge als Hürde" },
        { id: 6, text: "Smartphones erleichtern den Alltag" },
        { id: 7, text: "Skepsis gegenüber neuer Technik" },
        { id: 8, text: "Enkel als digitale Lehrer" }
      ],
      texte: [
        { id: "a", text: "Ohne ausreichende digitale Kompetenz drohen ältere Menschen zunehmend von wichtigen gesellschaftlichen Bereichen ausgeschlossen zu werden." },
        { id: "b", text: "Volkshochschulen und Seniorenzentren bieten inzwischen speziell zugeschnittene Kurse an, um älteren Menschen den Umgang mit digitalen Geräten näherzubringen." },
        { id: "c", text: "Kriminelle nutzen gezielt die geringere digitale Erfahrung älterer Menschen aus, um sie mit betrügerischen Nachrichten zu täuschen." },
        { id: "d", text: "Viele Behördengänge lassen sich mittlerweile nur noch online erledigen, was für weniger internetaffine Menschen eine erhebliche Hürde darstellt." },
        { id: "e", text: "Immer häufiger übernehmen Enkelkinder die Rolle, ihren Großeltern grundlegende digitale Fähigkeiten beizubringen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 5, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Digitale Kompetenz wird für ältere Menschen zunehmend zu einer Voraussetzung für gesellschaftliche Teilhabe, da immer mehr Dienstleistungen ausschließlich online verfügbar sind. Während jüngere Generationen meist selbstverständlich mit digitalen Geräten aufgewachsen sind, empfinden viele Seniorinnen und Senioren den Umgang mit Smartphones und Computern häufig als überfordernd. Spezielle Schulungsangebote, etwa an Volkshochschulen, versuchen dieser Entwicklung entgegenzuwirken, indem sie grundlegende digitale Fähigkeiten vermitteln. Gleichzeitig warnen Expertinnen und Experten davor, dass ältere Menschen aufgrund geringerer digitaler Erfahrung häufiger Ziel von Betrugsversuchen im Internet werden. Eine gelungene digitale Teilhabe erfordert daher nicht nur technische Schulungen, sondern auch gezielte Aufklärung über Sicherheitsrisiken im Netz.",
      aussagen: [
        { nr: 1, text: "Digitale Kompetenz wird für ältere Menschen zunehmend wichtiger für gesellschaftliche Teilhabe.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Alle Seniorinnen und Senioren empfinden digitale Geräte als selbstverständlich.", korrekt: false, hinweis: "Gegenteil: 'empfinden... häufig als überfordernd'." },
        { nr: 3, text: "Volkshochschulen bieten spezielle Schulungen für ältere Menschen an.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Ältere Menschen sind laut Experten seltener Ziel von Internetbetrug.", korrekt: false, hinweis: "Gegenteil: 'häufiger Ziel von Betrugsversuchen'." },
        { nr: 5, text: "Gelungene digitale Teilhabe erfordert auch Aufklärung über Sicherheitsrisiken.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Dozentin, sucht Stelle für Computerkurse für Senioren." },
        { nr: 2, text: "IT-Sicherheitsexperte, sucht Projekt zu Betrugsprävention." },
        { nr: 3, text: "Sozialarbeiterin, sucht Stelle in der Seniorenberatung." },
        { nr: 4, text: "Softwareentwickler, sucht Stelle für seniorenfreundliche Apps." },
        { nr: 5, text: "Journalistin, sucht Recherchethemen zu digitaler Ausgrenzung." },
        { nr: 6, text: "Trainer, sucht Aufträge für generationsübergreifende Workshops." },
        { nr: 7, text: "Übersetzer, sucht freiberufliche Aufträge." },
        { nr: 8, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 9, text: "Buchhalter, sucht Teilzeitstelle." },
        { nr: 10, text: "Ingenieurin, sucht Stelle im Maschinenbau." }
      ],
      anzeigen: [
        { id: "a", text: "Volkshochschule sucht Dozent/in für Computerkurse für Senioren." },
        { id: "b", text: "Verbraucherschutz sucht IT-Sicherheitsexperte/in für Betrugsprävention." },
        { id: "c", text: "Sozialstation sucht Sozialarbeiter/in für Seniorenberatung." },
        { id: "d", text: "Softwarefirma sucht Entwickler/in für seniorenfreundliche Apps." },
        { id: "e", text: "Medienhaus sucht Journalist/in zu digitaler Ausgrenzung." },
        { id: "f", text: "Bildungsträger sucht Trainer/in für generationsübergreifende Workshops." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ immer mehr Dienstleistungen online verfügbar sind, wird digitale Kompetenz wichtiger. ___(2)___ jüngere Generationen selbstverständlich mit digitalen Geräten umgehen, empfinden viele Ältere dies als überfordernd. ___(3)___ dieser Herausforderungen gibt es spezielle Schulungsangebote. Wichtig ist, ___(4)___ auch über Sicherheitsrisiken aufgeklärt wird. Nur so lässt sich vermeiden, ___(5)___ ältere Menschen Opfer von Betrug werden.",
      luecken: [
        { nr: 1, o: ["Da", "Obwohl", "Damit"], c: 0, h: "Grund → da." },
        { nr: 2, o: ["Während", "Weil", "Damit"], c: 0, h: "Gegenüberstellung → während." },
        { nr: 3, o: ["Wegen", "Trotz", "Anstelle"], c: 0, h: "Grund → wegen + Genitiv." },
        { nr: 4, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'wichtig ist' → dass." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'vermeiden' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["zunehmend", "keineswegs", "vielmehr", "gezielt", "überfordernd"],
      text: "Digitale Kompetenz wird ___(6)___ zur Voraussetzung für Teilhabe. Der Umgang mit Technik ist für manche ___(7)___. Kriminelle nutzen dies ___(8)___ aus. Eine einfache Lösung ist ___(9)___ in Sicht. Es geht ___(10)___ um Aufklärung und Schulung.",
      loesung: { 6: "zunehmend", 7: "überfordernd", 8: "gezielt", 9: "keineswegs", 10: "vielmehr" }
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
        situation: "These: 'Wichtige Behördengänge sollten immer auch analog möglich bleiben, nicht nur online.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Kostenlose Computerkurse für Senioren sollten von der Politik stärker gefördert werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

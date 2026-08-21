// ============================================================
// FLOß Modelltest B2 — Nr. 13
// Gleiches Format wie Nr. 01–12.
// ============================================================

window.MODELLTEST_B2_13 = {
  testKey: "modelltest-b2-13",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 13",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Ortsunabhängiges Arbeiten im Trend" },
        { id: 2, text: "Rechtliche Fragen bei Remote-Arbeit" },
        { id: 3, text: "Vereinsamung trotz digitaler Vernetzung" },
        { id: 4, text: "Steuerliche Herausforderungen für digitale Nomaden" },
        { id: 5, text: "Unternehmen setzen auf hybride Modelle" },
        { id: 6, text: "Coworking-Spaces als Treffpunkt" },
        { id: 7, text: "Visa-Regelungen für digitale Nomaden" },
        { id: 8, text: "Produktivität im Homeoffice umstritten" }
      ],
      texte: [
        { id: "a", text: "Immer mehr Fachkräfte arbeiten von wechselnden Orten aus, solange eine stabile Internetverbindung vorhanden ist." },
        { id: "b", text: "Wer dauerhaft im Ausland arbeitet, muss sich oft mit komplizierten steuerlichen Regelungen auseinandersetzen." },
        { id: "c", text: "Manche Länder haben spezielle Visa für digitale Nomaden eingeführt, die einen längeren Aufenthalt erlauben." },
        { id: "d", text: "Coworking-Spaces bieten digitalen Nomaden nicht nur Arbeitsplätze, sondern auch die Möglichkeit, andere Reisende kennenzulernen." },
        { id: "e", text: "Trotz ständiger Online-Vernetzung berichten viele digitale Nomaden von Phasen der Einsamkeit fernab von Familie und festen Freunden." }
      ],
      loesung: { a: 1, b: 4, c: 7, d: 6, e: 3 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Das Konzept des digitalen Nomadentums, bei dem Berufstätige ortsunabhängig arbeiten, hat durch die zunehmende Verbreitung von Remote-Arbeit erheblich an Popularität gewonnen. Befürworter schätzen die Freiheit, den Arbeitsort frei wählen zu können, sowie die Möglichkeit, Reisen und Beruf miteinander zu verbinden. Kritiker verweisen jedoch auf reale Herausforderungen wie unklare steuerliche und rechtliche Rahmenbedingungen, fehlende soziale Absicherung sowie die Gefahr sozialer Isolation trotz digitaler Vernetzung. Einige Länder reagieren inzwischen mit speziellen Visa-Programmen, die digitalen Nomaden einen legalen und unkomplizierten Aufenthalt ermöglichen sollen. Expertinnen und Experten empfehlen dennoch eine sorgfältige Planung, insbesondere in Bezug auf Versicherung und steuerliche Pflichten, bevor man sich für diesen Lebensstil entscheidet.",
      aussagen: [
        { nr: 1, text: "Digitales Nomadentum hat durch Remote-Arbeit an Popularität gewonnen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Befürworter schätzen vor allem die feste Bindung an einen Arbeitsort.", korrekt: false, hinweis: "Gegenteil: 'Freiheit, den Arbeitsort frei wählen zu können'." },
        { nr: 3, text: "Kritiker sehen keine Probleme bei sozialer Absicherung.", korrekt: false, hinweis: "Gegenteil: 'fehlende soziale Absicherung'." },
        { nr: 4, text: "Manche Länder bieten spezielle Visa für digitale Nomaden an.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Experten raten von jeglicher Planung ab.", korrekt: false, hinweis: "Gegenteil: 'empfehlen... sorgfältige Planung'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Webdesignerin, sucht ortsunabhängige Vollzeitstelle." },
        { nr: 2, text: "Steuerberater, sucht Mandanten unter digitalen Nomaden." },
        { nr: 3, text: "Coworking-Manager, sucht Stelle im Ausland." },
        { nr: 4, text: "Anwältin, sucht Spezialisierung auf Remote-Arbeitsrecht." },
        { nr: 5, text: "Reisebloggerin, sucht Kooperationen mit Coworking-Spaces." },
        { nr: 6, text: "Softwareentwickler, sucht ortsunabhängigen Job." },
        { nr: 7, text: "Übersetzerin, sucht freiberufliche Aufträge." },
        { nr: 8, text: "Grafikdesigner, sucht Festanstellung im Büro." },
        { nr: 9, text: "Journalistin, sucht Recherchethemen zu digitalen Nomaden." },
        { nr: 10, text: "Immobilienmaklerin, sucht lokale Kunden." }
      ],
      anzeigen: [
        { id: "a", text: "IT-Unternehmen sucht Webdesigner/in für ortsunabhängige Vollzeitstelle." },
        { id: "b", text: "Steuerberatung spezialisiert auf digitale Nomaden gesucht." },
        { id: "c", text: "Coworking-Space im Ausland sucht Manager/in." },
        { id: "d", text: "Kanzlei sucht Anwält/in mit Fokus auf Remote-Arbeitsrecht." },
        { id: "e", text: "Coworking-Netzwerk sucht Kooperationspartner für Reiseblog." },
        { id: "f", text: "Softwarefirma sucht Entwickler/in, ortsunabhängig möglich." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ Remote-Arbeit immer beliebter wird, entscheiden sich viele für ein ortsunabhängiges Leben. ___(2)___ die Freiheit reizvoll erscheint, bringt sie auch rechtliche Herausforderungen mit sich. ___(3)___ dieser Schwierigkeiten wächst die Zahl digitaler Nomaden stetig. Wichtig ist, ___(4)___ man sich vorab gut informiert. Nur so lässt sich vermeiden, ___(5)___ steuerliche Probleme entstehen.",
      luecken: [
        { nr: 1, o: ["Da", "Obwohl", "Damit"], c: 0, h: "Grund → da." },
        { nr: 2, o: ["Obwohl", "Weil", "Damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 3, o: ["Trotz", "Wegen", "Anstelle"], c: 0, h: "trotz + Genitiv." },
        { nr: 4, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'wichtig ist' → dass." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'vermeiden' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["ortsunabhängig", "keineswegs", "vielmehr", "zunehmend", "sorgfältig"],
      text: "Immer mehr Menschen arbeiten ___(6)___. Eine risikofreie Lösung ist ___(7)___ garantiert. Es geht ___(8)___ um eine bewusste Entscheidung mit Vor- und Nachteilen. Digitales Nomadentum wird ___(9)___ populärer. Wer diesen Weg wählt, sollte alles ___(10)___ planen.",
      loesung: { 6: "ortsunabhängig", 7: "keineswegs", 8: "vielmehr", 9: "zunehmend", 10: "sorgfältig" }
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
        situation: "These: 'Ortsunabhängiges Arbeiten sollte für alle Berufe, bei denen es möglich ist, zum Standard werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Das Leben als digitaler Nomade führt langfristig eher zu Isolation als zu Freiheit.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

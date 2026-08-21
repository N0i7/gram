// ============================================================
// FLOß Modelltest B2 — Nr. 21
// Gleiches Format wie Nr. 01–20.
// ============================================================

window.MODELLTEST_B2_21 = {
  testKey: "modelltest-b2-21",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 21",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Ortsunabhängiges Arbeiten im Trend" },
        { id: 2, text: "Rechtliche Hürden beim Workation" },
        { id: 3, text: "Steuerliche Fragen bei Auslandsarbeit" },
        { id: 4, text: "Produktivität im Ausland" },
        { id: 5, text: "Visa-Probleme für digitale Nomaden" },
        { id: 6, text: "Work-Life-Balance im Ausland" },
        { id: 7, text: "Unternehmen erlauben Workation" },
        { id: 8, text: "Soziale Isolation bei Remote-Arbeit" }
      ],
      texte: [
        { id: "a", text: "Immer mehr Beschäftigte kombinieren Arbeit und Urlaub, indem sie zeitweise aus dem Ausland arbeiten." },
        { id: "b", text: "Arbeitsrechtlich ist es oft unklar, welche Vorschriften gelten, wenn Angestellte aus einem anderen Land arbeiten." },
        { id: "c", text: "Wer im Ausland arbeitet, muss klären, in welchem Land Steuern und Sozialabgaben anfallen." },
        { id: "d", text: "Ohne das passende Visum ist Arbeiten im Ausland oft rechtlich nicht erlaubt, auch wenn es unbemerkt bleibt." },
        { id: "e", text: "Einige Unternehmen haben inzwischen offizielle Regelungen eingeführt, die zeitlich begrenztes Arbeiten aus dem Ausland erlauben." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 5, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Mobiles Arbeiten im Ausland, oft als 'Workation' bezeichnet, erfreut sich wachsender Beliebtheit, insbesondere bei jüngeren Arbeitnehmerinnen und Arbeitnehmern. Während einige Unternehmen diese Praxis inzwischen offiziell unterstützen und klare Regelungen dafür geschaffen haben, bewegen sich viele Beschäftigte weiterhin in einer rechtlichen Grauzone. Ungeklärt bleibt häufig, welches nationale Arbeitsrecht Anwendung findet und in welchem Land Steuern sowie Sozialversicherungsbeiträge zu entrichten sind. Hinzu kommt, dass für längere Aufenthalte in bestimmten Ländern ein entsprechendes Arbeitsvisum erforderlich wäre, was in der Praxis jedoch oft ignoriert wird. Arbeitsrechtsexperten raten daher dringend dazu, sich vor einem längeren Auslandsaufenthalt umfassend zu informieren.",
      aussagen: [
        { nr: 1, text: "Workation ist besonders bei jüngeren Arbeitnehmern beliebt.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Alle Unternehmen haben klare Regelungen für Workation.", korrekt: false, hinweis: "Gegenteil: 'viele Beschäftigte weiterhin in einer rechtlichen Grauzone'." },
        { nr: 3, text: "Es ist oft unklar, welches Arbeitsrecht gilt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Ein Arbeitsvisum ist für längere Aufenthalte nie nötig.", korrekt: false, hinweis: "Gegenteil: 'ein entsprechendes Arbeitsvisum erforderlich wäre'." },
        { nr: 5, text: "Experten raten von einer Vorabinformation ab.", korrekt: false, hinweis: "Gegenteil: 'raten daher dringend dazu, sich... zu informieren'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Softwareentwicklerin, möchte remote aus dem Ausland arbeiten." },
        { nr: 2, text: "Arbeitsrechtsanwalt, sucht Spezialisierung auf internationales Arbeitsrecht." },
        { nr: 3, text: "Steuerberaterin, sucht Mandanten mit Auslandstätigkeit." },
        { nr: 4, text: "HR-Managerin, sucht Stelle mit Fokus auf Remote-Policies." },
        { nr: 5, text: "Visa-Beraterin, sucht Stelle bei internationaler Kanzlei." },
        { nr: 6, text: "Grafikdesigner, sucht Festanstellung vor Ort." },
        { nr: 7, text: "Krankenpfleger, sucht Stelle im Krankenhaus." },
        { nr: 8, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 9, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 10, text: "Lehrerin, sucht Festanstellung an einer Schule." }
      ],
      anzeigen: [
        { id: "a", text: "Softwareunternehmen sucht Entwickler/in für Remote-Arbeit weltweit." },
        { id: "b", text: "Kanzlei sucht Anwalt/Anwältin für internationales Arbeitsrecht." },
        { id: "c", text: "Steuerkanzlei sucht Berater/in für Auslandstätigkeit." },
        { id: "d", text: "Unternehmen sucht HR-Manager/in für Remote-Policies." },
        { id: "e", text: "Kanzlei sucht Visa-Berater/in." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "f", 8: "f", 9: "f", 10: "f" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ Workation immer beliebter wird, bleiben viele rechtliche Fragen ungeklärt. ___(2)___ einige Unternehmen klare Regelungen geschaffen haben, bewegen sich viele Beschäftigte in einer Grauzone. Ungeklärt bleibt, ___(3)___ Arbeitsrecht Anwendung findet. Für längere Aufenthalte wäre ___(4)___ ein Visum erforderlich. Experten raten dringend dazu, ___(5)___ vorab zu informieren.",
      luecken: [
        { nr: 1, o: ["Obwohl", "Während", "Da"], c: 0, h: "Einräumung → obwohl." },
        { nr: 2, o: ["Während", "Weil", "Damit"], c: 0, h: "Gegenüberstellung → während." },
        { nr: 3, o: ["welches", "dass", "ob"], c: 0, h: "Indirekte Frage nach 'welches' Recht." },
        { nr: 4, o: ["teilweise", "häufig", "nie"], c: 1, h: "Sinngemäß: häufig erforderlich." },
        { nr: 5, o: ["dass", "sich", "ob"], c: 1, h: "'sich informieren' — reflexiv." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Grauzone", "Sozialversicherung", "Visum", "Regelungen", "ortsunabhängig"],
      text: "Workation bedeutet, ___(6)___ zu arbeiten. Viele Unternehmen haben inzwischen klare ___(7)___ dafür geschaffen. Trotzdem bewegen sich manche Beschäftigte in einer rechtlichen ___(8)___. Wichtig ist auch die Frage der ___(9)___. Für längere Aufenthalte ist oft ein ___(10)___ nötig.",
      loesung: { 6: "ortsunabhängig", 7: "Regelungen", 8: "Grauzone", 9: "Sozialversicherung", 10: "Visum" }
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
        situation: "These: 'Unternehmen sollten ihren Angestellten grundsätzlich erlauben, zeitweise aus dem Ausland zu arbeiten.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Die rechtlichen Rahmenbedingungen für Workation sollten international einheitlich geregelt werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

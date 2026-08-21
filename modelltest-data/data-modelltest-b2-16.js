// ============================================================
// FLOß Modelltest B2 — Nr. 16
// Gleiches Format wie Nr. 01–15.
// ============================================================

window.MODELLTEST_B2_16 = {
  testKey: "modelltest-b2-16",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 16",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Intransparente Nebenkostenabrechnungen" },
        { id: 2, text: "Mieterhöhungen im Rahmen der Mietpreisbremse" },
        { id: 3, text: "Widerspruch gegen die Nebenkostenabrechnung" },
        { id: 4, text: "Kautionsrückzahlung verzögert sich" },
        { id: 5, text: "Modernisierungsumlage belastet Mieter" },
        { id: 6, text: "Betriebskosten steigen kontinuierlich" },
        { id: 7, text: "Fristen bei der Nebenkostenabrechnung" },
        { id: 8, text: "Mietervereine bieten Beratung an" }
      ],
      texte: [
        { id: "a", text: "Vermieter müssen die Nebenkostenabrechnung innerhalb eines Jahres nach Ende des Abrechnungszeitraums vorlegen." },
        { id: "b", text: "Viele Mieterinnen und Mieter verstehen ihre Nebenkostenabrechnung nicht, da einzelne Posten oft unklar aufgeschlüsselt sind." },
        { id: "c", text: "Bei Unstimmigkeiten in der Abrechnung können Mieter innerhalb einer bestimmten Frist schriftlich widersprechen." },
        { id: "d", text: "Steigende Energiepreise führen dazu, dass die Betriebskosten in den vergangenen Jahren stark angestiegen sind." },
        { id: "e", text: "Mietervereine unterstützen ihre Mitglieder bei der Prüfung von Abrechnungen und bei rechtlichen Fragen." }
      ],
      loesung: { a: 7, b: 1, c: 3, d: 6, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Nebenkostenabrechnungen sind für viele Mieterinnen und Mieter eine jährliche Quelle der Verunsicherung, da die aufgeführten Posten häufig schwer nachvollziehbar sind. Gesetzlich sind Vermieter verpflichtet, die Abrechnung innerhalb von zwölf Monaten nach Ende des Abrechnungszeitraums vorzulegen, andernfalls verlieren sie in der Regel den Anspruch auf Nachzahlungen. Mieterinnen und Mieter haben wiederum das Recht, innerhalb von zwölf Monaten Einwände gegen die Abrechnung zu erheben, sofern sie Fehler vermuten. Mietervereine empfehlen grundsätzlich, jede Abrechnung sorgfältig zu prüfen und bei Unklarheiten Einsicht in die zugrunde liegenden Belege zu verlangen. Angesichts steigender Energiekosten wird eine genaue Prüfung zunehmend wichtiger, um unberechtigte Nachforderungen zu vermeiden.",
      aussagen: [
        { nr: 1, text: "Nebenkostenabrechnungen sind für viele Mieter leicht nachvollziehbar.", korrekt: false, hinweis: "Gegenteil: 'häufig schwer nachvollziehbar'." },
        { nr: 2, text: "Vermieter müssen die Abrechnung innerhalb von zwölf Monaten vorlegen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Mieter haben kein Recht, gegen die Abrechnung Einwände zu erheben.", korrekt: false, hinweis: "Gegenteil: 'haben... das Recht, Einwände zu erheben'." },
        { nr: 4, text: "Mietervereine raten dazu, Abrechnungen sorgfältig zu prüfen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Steigende Energiekosten machen eine genaue Prüfung weniger wichtig.", korrekt: false, hinweis: "Gegenteil: 'wird eine genaue Prüfung zunehmend wichtiger'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Juristin, sucht Stelle im Mietrecht." },
        { nr: 2, text: "Buchhalter, sucht Stelle bei einer Hausverwaltung." },
        { nr: 3, text: "Beraterin, sucht Stelle bei einem Mieterverein." },
        { nr: 4, text: "Energieberater, sucht Projekt zu Betriebskosten." },
        { nr: 5, text: "Immobilienverwalterin, sucht neue Objekte." },
        { nr: 6, text: "Softwareentwickler, sucht Stelle für Abrechnungssoftware." },
        { nr: 7, text: "Journalistin, sucht Recherchethemen zu Mietrecht." },
        { nr: 8, text: "Übersetzer, sucht freiberufliche Aufträge." },
        { nr: 9, text: "Architektin, sucht Stelle im Neubau." },
        { nr: 10, text: "Grafikdesigner, sucht freiberufliche Projekte." }
      ],
      anzeigen: [
        { id: "a", text: "Kanzlei sucht Jurist/in mit Schwerpunkt Mietrecht." },
        { id: "b", text: "Hausverwaltung sucht Buchhalter/in." },
        { id: "c", text: "Mieterverein sucht Berater/in für Mitglieder." },
        { id: "d", text: "Energieunternehmen sucht Berater/in für Betriebskostenanalyse." },
        { id: "e", text: "Immobilienfirma sucht Verwalter/in für neue Objekte." },
        { id: "f", text: "Softwarefirma sucht Entwickler/in für Abrechnungssoftware." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ die Abrechnung oft unklar wirkt, sollten Mieter sie sorgfältig prüfen. ___(2)___ Fehler vermutet werden, kann man innerhalb der Frist widersprechen. ___(3)___ dieser Regelungen fühlen sich viele Mieter unsicher. Wichtig ist, ___(4)___ man die Belege einsehen kann. Nur so lässt sich vermeiden, ___(5)___ unberechtigte Nachforderungen entstehen.",
      luecken: [
        { nr: 1, o: ["Da", "Obwohl", "Damit"], c: 0, h: "Grund → da." },
        { nr: 2, o: ["Falls", "Obwohl", "Damit"], c: 0, h: "Bedingung → falls." },
        { nr: 3, o: ["Trotz", "Wegen", "Anstelle"], c: 0, h: "trotz + Genitiv." },
        { nr: 4, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'wichtig ist' → dass." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'vermeiden' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["nachvollziehbar", "keineswegs", "vielmehr", "fristgerecht", "sorgfältig"],
      text: "Nebenkostenabrechnungen sind oft nicht leicht ___(6)___. Eine automatische Korrektur ist ___(7)___ garantiert. Es geht ___(8)___ um eigenverantwortliche Prüfung. Die Abrechnung muss ___(9)___ vorgelegt werden. Mieter sollten jede Position ___(10)___ kontrollieren.",
      loesung: { 6: "nachvollziehbar", 7: "keineswegs", 8: "vielmehr", 9: "fristgerecht", 10: "sorgfältig" }
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
        situation: "These: 'Nebenkostenabrechnungen sollten gesetzlich einfacher und transparenter gestaltet werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Mieter sollten jede Nebenkostenabrechnung von einem Experten prüfen lassen, auch wenn das Geld kostet.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

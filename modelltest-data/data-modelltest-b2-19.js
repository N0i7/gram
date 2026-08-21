// ============================================================
// FLOß Modelltest B2 — Nr. 19
// Gleiches Format wie Nr. 01–18.
// ============================================================

window.MODELLTEST_B2_19 = {
  testKey: "modelltest-b2-19",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 19",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Unübersichtliche Anforderungen bei Behörden" },
        { id: 2, text: "Digitalisierung der Wohnungssuche" },
        { id: 3, text: "Diskriminierung bei der Wohnungsvergabe" },
        { id: 4, text: "Zu viele Unterlagen nötig" },
        { id: 5, text: "Lange Wartezeiten bei Terminen" },
        { id: 6, text: "Vermieter verlangen Bonitätsauskunft" },
        { id: 7, text: "Maklergebühren belasten Mieter" },
        { id: 8, text: "Wohnungsmarkt entspannt sich" }
      ],
      texte: [
        { id: "a", text: "Viele Vermieter verlangen mittlerweile eine Bonitätsauskunft, bevor sie einen Mietvertrag überhaupt in Erwägung ziehen." },
        { id: "b", text: "Studien zeigen, dass Bewerberinnen und Bewerber mit ausländisch klingenden Namen bei der Wohnungssuche häufiger benachteiligt werden." },
        { id: "c", text: "Die schiere Anzahl an geforderten Dokumenten überfordert viele Wohnungssuchende, insbesondere wenn sie zum ersten Mal umziehen." },
        { id: "d", text: "Immer mehr Plattformen ermöglichen es, die gesamte Wohnungssuche digital abzuwickeln, von der Anfrage bis zur Vertragsunterschrift." },
        { id: "e", text: "Behördliche Anforderungen bei der Wohnungssuche unterscheiden sich von Stadt zu Stadt teils erheblich, was die Orientierung erschwert." }
      ],
      loesung: { a: 6, b: 3, c: 4, d: 2, e: 1 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Die bürokratischen Hürden bei der Wohnungssuche stellen für viele Menschen eine erhebliche Belastung dar, insbesondere in angespannten Wohnungsmärkten mit hoher Nachfrage. Vermieter verlangen häufig eine Vielzahl an Unterlagen, darunter Einkommensnachweise, Schufa-Auskünfte und frühere Mietbescheinigungen, was den Bewerbungsprozess erheblich verlängert. Studien deuten zudem darauf hin, dass Personen mit Migrationshintergrund bei der Wohnungsvergabe statistisch benachteiligt werden, selbst wenn sie über vergleichbare finanzielle Voraussetzungen verfügen. Digitale Plattformen versprechen zwar eine Vereinfachung des Prozesses, ersetzen jedoch nicht die grundlegenden Anforderungen der Vermieter. Expertinnen und Experten fordern daher sowohl eine Vereinheitlichung der geforderten Unterlagen als auch strengere Maßnahmen gegen Diskriminierung auf dem Wohnungsmarkt.",
      aussagen: [
        { nr: 1, text: "Bürokratische Hürden bei der Wohnungssuche sind für viele eine erhebliche Belastung.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Vermieter verlangen selten Unterlagen wie Einkommensnachweise.", korrekt: false, hinweis: "Gegenteil: 'verlangen häufig eine Vielzahl an Unterlagen'." },
        { nr: 3, text: "Personen mit Migrationshintergrund werden laut Studien nicht benachteiligt.", korrekt: false, hinweis: "Gegenteil: 'statistisch benachteiligt werden'." },
        { nr: 4, text: "Digitale Plattformen ersetzen vollständig die Anforderungen der Vermieter.", korrekt: false, hinweis: "Gegenteil: 'ersetzen jedoch nicht die grundlegenden Anforderungen'." },
        { nr: 5, text: "Experten fordern strengere Maßnahmen gegen Diskriminierung.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Maklerin, sucht Stelle bei digitaler Wohnungsplattform." },
        { nr: 2, text: "Juristin, sucht Spezialisierung auf Mietrecht und Diskriminierung." },
        { nr: 3, text: "Sozialarbeiter, sucht Stelle in der Wohnungsberatung." },
        { nr: 4, text: "Softwareentwicklerin, sucht Projekt für Wohnungssuch-App." },
        { nr: 5, text: "Journalistin, sucht Recherchethemen zu Diskriminierung am Wohnungsmarkt." },
        { nr: 6, text: "Beraterin, sucht Stelle bei Verbraucherschutz zu Mietfragen." },
        { nr: 7, text: "Übersetzer, sucht freiberufliche Aufträge." },
        { nr: 8, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 9, text: "Buchhalter, sucht Teilzeitstelle." },
        { nr: 10, text: "Ingenieurin, sucht Stelle im Maschinenbau." }
      ],
      anzeigen: [
        { id: "a", text: "Digitale Wohnungsplattform sucht Makler/in." },
        { id: "b", text: "Kanzlei sucht Jurist/in mit Fokus auf Mietrecht und Diskriminierung." },
        { id: "c", text: "Sozialstation sucht Sozialarbeiter/in für Wohnungsberatung." },
        { id: "d", text: "Startup sucht Entwickler/in für Wohnungssuch-App." },
        { id: "e", text: "Medienhaus sucht Journalist/in zu Diskriminierung am Wohnungsmarkt." },
        { id: "f", text: "Verbraucherschutz sucht Berater/in für Mietfragen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ die Nachfrage nach Wohnraum steigt, verlangen Vermieter immer mehr Unterlagen. ___(2)___ digitale Plattformen den Prozess vereinfachen, bleiben die grundlegenden Anforderungen bestehen. ___(3)___ dieser Hürden bewerben sich viele Menschen dennoch erfolgreich. Wichtig ist, ___(4)___ die Anforderungen einheitlicher werden. Nur so lässt sich vermeiden, ___(5)___ manche Bewerber benachteiligt werden.",
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
      wortliste: ["zunehmend", "keineswegs", "vielmehr", "benachteiligt", "einheitlich"],
      text: "Die bürokratischen Hürden werden ___(6)___ als Problem wahrgenommen. Eine schnelle Lösung ist ___(7)___ in Sicht. Es geht ___(8)___ um strukturelle Veränderungen. Manche Bewerber werden ___(9)___. Experten fordern ___(10)___e Anforderungen.",
      loesung: { 6: "zunehmend", 7: "keineswegs", 8: "vielmehr", 9: "benachteiligt", 10: "einheitlich" }
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
        situation: "These: 'Die geforderten Unterlagen bei der Wohnungssuche sollten gesetzlich vereinheitlicht werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Digitale Plattformen lösen die Probleme der Wohnungssuche nicht wirklich, sondern verschärfen sie eher.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

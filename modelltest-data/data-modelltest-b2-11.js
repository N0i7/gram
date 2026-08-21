// ============================================================
// FLOß Modelltest B2 — Nr. 11
// Gleiches Format wie Nr. 01–10.
// ============================================================

window.MODELLTEST_B2_11 = {
  testKey: "modelltest-b2-11",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 11",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Barrierefreiheit als gesetzliche Pflicht" },
        { id: 2, text: "Digitale Barrierefreiheit oft vernachlässigt" },
        { id: 3, text: "Inklusion beginnt in der Schule" },
        { id: 4, text: "Bauliche Hindernisse im Alltag" },
        { id: 5, text: "Wirtschaftliche Vorteile von Inklusion" },
        { id: 6, text: "Bewusstseinswandel in der Gesellschaft" },
        { id: 7, text: "Fehlende Umsetzung trotz guter Gesetze" },
        { id: 8, text: "Assistenzsysteme erleichtern den Alltag" }
      ],
      texte: [
        { id: "a", text: "Obwohl gesetzliche Vorgaben zur Barrierefreiheit existieren, mangelt es in der Praxis häufig an konsequenter Umsetzung, etwa bei öffentlichen Gebäuden." },
        { id: "b", text: "Viele Websites und Apps sind für Menschen mit Behinderung nach wie vor schwer nutzbar, obwohl technische Lösungen längst verfügbar wären." },
        { id: "c", text: "Studien zeigen, dass inklusive Unternehmen von der Vielfalt ihrer Belegschaft profitieren, etwa durch neue Perspektiven und höhere Innovationskraft." },
        { id: "d", text: "Kopfsteinpflaster, fehlende Rampen und enge Türen erschweren vielerorts nach wie vor die Mobilität von Menschen mit Behinderung." },
        { id: "e", text: "Zunehmend setzt sich in der Öffentlichkeit die Erkenntnis durch, dass Inklusion alle Bereiche des Lebens betrifft, nicht nur einzelne Institutionen." }
      ],
      loesung: { a: 7, b: 2, c: 5, d: 4, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Barrierefreiheit betrifft weit mehr Menschen, als häufig angenommen wird — nicht nur Rollstuhlfahrer, sondern auch Menschen mit Seh- oder Hörbeeinträchtigungen, ältere Menschen oder Eltern mit Kinderwagen. Trotz gesetzlicher Vorgaben in vielen Ländern hapert es oft an der praktischen Umsetzung, da Nachrüstungen als kostspielig und aufwendig gelten. Befürworter argumentieren, dass sich Investitionen in Barrierefreiheit langfristig auszahlen, weil sie die Nutzbarkeit von Gebäuden und digitalen Angeboten für alle verbessern. Kritiker verweisen dagegen auf begrenzte Budgets, insbesondere bei kleineren Unternehmen und älteren Gebäuden. Expertinnen und Experten sind sich jedoch einig, dass Barrierefreiheit von Anfang an mitgedacht werden sollte, statt sie nachträglich und teuer zu ergänzen.",
      aussagen: [
        { nr: 1, text: "Barrierefreiheit betrifft laut Text nur Rollstuhlfahrer.", korrekt: false, hinweis: "Gegenteil: betrifft auch andere Gruppen." },
        { nr: 2, text: "Die praktische Umsetzung von Barrierefreiheit funktioniert meist problemlos.", korrekt: false, hinweis: "Gegenteil: 'hapert es oft an der praktischen Umsetzung'." },
        { nr: 3, text: "Befürworter sehen langfristige Vorteile in Investitionen in Barrierefreiheit.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Kleinere Unternehmen haben laut Text meist unbegrenzte Budgets.", korrekt: false, hinweis: "Gegenteil: 'begrenzte Budgets'." },
        { nr: 5, text: "Experten empfehlen, Barrierefreiheit von Anfang an mitzudenken.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Architektin, sucht Stelle im Bereich barrierefreies Bauen." },
        { nr: 2, text: "Webentwickler, sucht Stelle im Bereich digitale Barrierefreiheit." },
        { nr: 3, text: "Sonderpädagogin, sucht Stelle in inklusiver Bildung." },
        { nr: 4, text: "Berater, sucht Stelle zu Inklusion in Unternehmen." },
        { nr: 5, text: "Übersetzerin, sucht Aufträge in Leichter Sprache." },
        { nr: 6, text: "Ingenieur, sucht Stelle im Bereich Assistenzsysteme." },
        { nr: 7, text: "Journalistin, sucht Recherchethemen zu Inklusion." },
        { nr: 8, text: "Sozialarbeiter, sucht Stelle in der Behindertenhilfe." },
        { nr: 9, text: "Buchhalterin, sucht Teilzeitstelle." },
        { nr: 10, text: "Grafikdesigner, sucht freiberufliche Aufträge." }
      ],
      anzeigen: [
        { id: "a", text: "Architekturbüro sucht Architekt/in für barrierefreies Bauen." },
        { id: "b", text: "IT-Unternehmen sucht Entwickler/in für digitale Barrierefreiheit." },
        { id: "c", text: "Schule sucht Sonderpädagog/in für inklusiven Unterricht." },
        { id: "d", text: "Beratungsfirma sucht Berater/in für Inklusion in Unternehmen." },
        { id: "e", text: "Verlag sucht Übersetzer/in für Texte in Leichter Sprache." },
        { id: "f", text: "Technologieunternehmen sucht Ingenieur/in für Assistenzsysteme." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ gesetzliche Vorgaben existieren, mangelt es oft an der Umsetzung. ___(2)___ Nachrüstungen als teuer gelten, scheuen viele Unternehmen die Investition. Befürworter argumentieren, ___(3)___ sich Barrierefreiheit langfristig auszahlt. ___(4)___ dieser Bedenken setzen sich immer mehr Betriebe dafür ein. Wichtig ist, ___(5)___ Barrierefreiheit von Anfang an mitgedacht wird.",
      luecken: [
        { nr: 1, o: ["Obwohl", "Weil", "Damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 2, o: ["Da", "Obwohl", "Damit"], c: 0, h: "Grund → da." },
        { nr: 3, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'argumentieren' → dass." },
        { nr: 4, o: ["Ungeachtet", "Wegen", "Anstelle"], c: 0, h: "ungeachtet + Genitiv." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'wichtig ist' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["weitgehend", "keineswegs", "vielmehr", "zunehmend", "letztendlich"],
      text: "Barrierefreiheit wird ___(6)___ als gesellschaftliche Aufgabe verstanden. Eine schnelle Lösung ist ___(7)___ in Sicht. Es geht ___(8)___ um ein langfristiges Umdenken. Manche Gebäude sind ___(9)___ nicht barrierefrei zugänglich. ___(10)___ profitieren alle von einer inklusiven Gesellschaft.",
      loesung: { 6: "zunehmend", 7: "keineswegs", 8: "vielmehr", 9: "weitgehend", 10: "letztendlich" }
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
        situation: "These: 'Unternehmen sollten gesetzlich zu vollständiger Barrierefreiheit verpflichtet werden, auch wenn die Umsetzung teuer ist.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Digitale Barrierefreiheit ist genauso wichtig wie bauliche Barrierefreiheit.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

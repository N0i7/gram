// ============================================================
// FLOß Modelltest A2 — Nr. 04
// Gleiches Format wie Nr. 01–03.
// ============================================================

window.MODELLTEST_A2_04 = {
  testKey: "modelltest-a2-04",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 4",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neue Sprechzeiten beim Zahnarzt" },
        { id: 2, text: "Ferienbetreuung für Schulkinder" },
        { id: 3, text: "Warnung vor starker Strömung am Strand" },
        { id: 4, text: "Second-Hand-Shop sucht Verkäuferin" },
        { id: 5, text: "Kostenloses Deutsch-Übungsheft" },
        { id: 6, text: "Fahrradverleih am Bahnhof" },
        { id: 7, text: "Nähkurs für Anfängerinnen" },
        { id: 8, text: "Waschmaschine kaputt — Reparaturservice" }
      ],
      texte: [
        { id: "a", text: "In den Sommerferien bietet die Schule eine Betreuung von 8 bis 16 Uhr an, mit Ausflügen und Sportangeboten." },
        { id: "b", text: "Direkt am Bahnhof können Fahrräder stundenweise oder tageweise gemietet werden, ohne Voranmeldung." },
        { id: "c", text: "Für alle, die nähen lernen möchten, startet ein neuer Kurs, jeden Freitagnachmittag, Material wird gestellt." },
        { id: "d", text: "Der Laden für gebrauchte Kleidung sucht ab sofort eine Aushilfe, drei Nachmittage pro Woche." },
        { id: "e", text: "Wegen starker Strömung wird derzeit vom Baden an mehreren Küstenabschnitten abgeraten." }
      ],
      loesung: { a: 2, b: 6, c: 7, d: 4, e: 3 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Vor einem Jahr habe ich angefangen, in einem Second-Hand-Laden zu arbeiten. Am Anfang kannte ich mich mit den Preisen und den Kunden nicht gut aus, aber meine Chefin hat mir viel gezeigt. Jetzt kann ich die Kunden gut beraten und weiß, welche Kleidung gerade beliebt ist. Die Arbeit macht mir Spaß, weil ich viele verschiedene Menschen treffe. Manchmal ist es aber auch anstrengend, besonders wenn viel los ist. Am liebsten arbeite ich freitags, weil dann meistens weniger Kunden kommen und ich mehr Zeit für jeden habe.",
      aussagen: [
        { nr: 1, text: "Die Person arbeitet seit einem Jahr im Second-Hand-Laden.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Chefin hat der Person nichts beigebracht.", korrekt: false, hinweis: "Gegenteil: 'meine Chefin hat mir viel gezeigt'." },
        { nr: 3, text: "Die Person kann Kunden gut beraten.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Arbeit ist der Person immer zu anstrengend.", korrekt: false, hinweis: "'manchmal' anstrengend, nicht immer." },
        { nr: 5, text: "Freitags ist meistens weniger los.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen einen Job im Second-Hand-Laden." },
        { nr: 2, text: "Sie möchten ein Fahrrad mieten." },
        { nr: 3, text: "Sie brauchen eine Betreuung für Ihr Kind in den Ferien." },
        { nr: 4, text: "Sie möchten nähen lernen." },
        { nr: 5, text: "Sie planen einen Strandtag." },
        { nr: 6, text: "Sie suchen einen Zahnarzttermin." },
        { nr: 7, text: "Sie brauchen eine Waschmaschinen-Reparatur." },
        { nr: 8, text: "Sie möchten Deutsch üben." },
        { nr: 9, text: "Sie suchen einen Job als Kellner." },
        { nr: 10, text: "Sie möchten Möbel kaufen." }
      ],
      anzeigen: [
        { id: "a", text: "Second-Hand-Shop sucht Verkäuferin, 3 Nachmittage pro Woche." },
        { id: "b", text: "Fahrradverleih am Bahnhof, stundenweise oder tageweise." },
        { id: "c", text: "Ferienbetreuung Grundschule, 8–16 Uhr, mit Ausflügen." },
        { id: "d", text: "Nähkurs für Anfängerinnen, freitags, Material inklusive." },
        { id: "e", text: "Reparaturservice für Haushaltsgeräte, auch am Wochenende." },
        { id: "f", text: "Kostenloses Deutsch-Übungsheft zum Herunterladen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "x", 6: "x", 7: "e", 8: "f", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Als ich mit der Arbeit ___(1)___ habe, war alles neu für mich. Meine Chefin hat mir gezeigt, ___(2)___ ich die Kunden beraten soll. Mittlerweile ___(3)___ ich mich sehr sicher. Am meisten Spaß macht mir die Arbeit, ___(4)___ wenig los ist. ___(5)___ ich freitags arbeite, habe ich mehr Zeit für die Kunden.",
      luecken: [
        { nr: 1, o: ["angefangen", "anfangen", "anfing"], c: 0, h: "Perfekt: habe angefangen." },
        { nr: 2, o: ["wie", "dass", "ob"], c: 0, h: "Art und Weise → wie." },
        { nr: 3, o: ["fühle", "fühlt", "fühlen"], c: 0, h: "ich → fühle." },
        { nr: 4, o: ["wenn", "als", "ob"], c: 0, h: "wiederholte Situation → wenn." },
        { nr: 5, o: ["Weil", "Damit", "Obwohl"], c: 0, h: "Grund → weil." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["besonders", "manchmal", "am liebsten", "inzwischen", "am Anfang"],
      text: "___(6)___ war die Arbeit schwierig für mich. ___(7)___ kenne ich mich gut aus. ___(8)___ ist es stressig, wenn viel los ist. ___(9)___, wenn viele Kunden gleichzeitig kommen. ___(10)___ arbeite ich freitags, weil es dann ruhiger ist.",
      loesung: { 6: "am Anfang", 7: "inzwischen", 8: "manchmal", 9: "besonders", 10: "am liebsten" }
    }
  },

  schreiben: {
    titel: "Schreiben — Persönliche Nachricht",
    anleitung: "Schreiben Sie eine Nachricht. Schreiben Sie mindestens 40 Wörter. Gehen Sie auf alle Punkte ein.",
    mindestwoerter: 40,
    aufgaben: [
      {
        nr: 1,
        briefform: "informell",
        situation: "Sie haben einen neuen Job begonnen und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, wo Sie jetzt arbeiten.", "Sagen Sie, wie die Arbeit Ihnen gefällt.", "Fragen Sie, wie es der Freundin / dem Freund geht."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

// ============================================================
// FLOß Modelltest A2 — Nr. 16
// Gleiches Format wie Nr. 01–15.
// ============================================================

window.MODELLTEST_A2_16 = {
  testKey: "modelltest-a2-16",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 16",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Second-Hand-Laden eröffnet" },
        { id: 2, text: "Kleidertauschparty im Gemeindehaus" },
        { id: 3, text: "Second-Hand-Kleidung online verkaufen" },
        { id: 4, text: "Reparieren statt wegwerfen" },
        { id: 5, text: "Flohmarkt am Wochenende" },
        { id: 6, text: "Möbel gebraucht kaufen" },
        { id: 7, text: "Second-Hand-Bücher tauschen" },
        { id: 8, text: "Neue Kleidung wird günstiger" }
      ],
      texte: [
        { id: "a", text: "In der Innenstadt hat ein neuer Second-Hand-Laden eröffnet, dort gibt es gebrauchte Kleidung zu günstigen Preisen." },
        { id: "b", text: "Am Samstag findet im Gemeindehaus eine Kleidertauschparty statt, bei der man Kleidung kostenlos tauschen kann." },
        { id: "c", text: "Viele Menschen verkaufen ihre gebrauchte Kleidung mittlerweile über Apps im Internet." },
        { id: "d", text: "Ein Repair-Café hilft dabei, kaputte Geräte zu reparieren, statt sie wegzuwerfen." },
        { id: "e", text: "Auf dem Flohmarkt am Wochenende gibt es gebrauchte Möbel, Bücher und Kleidung." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit einem Jahr kaufe ich meine Kleidung fast nur noch second hand. Am Anfang war ich unsicher, ob ich gute Qualität finde, aber ich habe schnell gemerkt, dass viele Second-Hand-Läden tolle Sachen anbieten. Ich spare dadurch viel Geld und tue gleichzeitig etwas für die Umwelt. Letzte Woche war ich auch auf einer Kleidertauschparty, das hat mir sehr gut gefallen. Dort habe ich drei neue Kleidungsstücke bekommen und musste dafür nichts bezahlen. Ich würde jedem empfehlen, Second-Hand-Läden und Tauschpartys einmal auszuprobieren.",
      aussagen: [
        { nr: 1, text: "Die Person kauft ihre Kleidung fast nur noch second hand.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person war von Anfang an sicher, gute Qualität zu finden.", korrekt: false, hinweis: "Gegenteil: 'am Anfang war ich unsicher'." },
        { nr: 3, text: "Die Person spart durch Second-Hand-Kleidung Geld.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Auf der Kleidertauschparty musste die Person viel Geld bezahlen.", korrekt: false, hinweis: "Gegenteil: 'musste dafür nichts bezahlen'." },
        { nr: 5, text: "Die Person würde niemandem Second-Hand-Läden empfehlen.", korrekt: false, hinweis: "Gegenteil: 'würde jedem empfehlen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen gebrauchte Kleidung." },
        { nr: 2, text: "Sie möchten Kleidung kostenlos tauschen." },
        { nr: 3, text: "Sie möchten Kleidung online verkaufen." },
        { nr: 4, text: "Sie möchten ein kaputtes Gerät reparieren lassen." },
        { nr: 5, text: "Sie suchen gebrauchte Möbel." },
        { nr: 6, text: "Sie möchten Bücher tauschen." },
        { nr: 7, text: "Sie suchen neue Designerkleidung." },
        { nr: 8, text: "Sie möchten ein Auto kaufen." },
        { nr: 9, text: "Sie suchen einen Handwerker." },
        { nr: 10, text: "Sie möchten umziehen." }
      ],
      anzeigen: [
        { id: "a", text: "Second-Hand-Laden mit gebrauchter Kleidung, günstige Preise." },
        { id: "b", text: "Kleidertauschparty im Gemeindehaus, kostenlos." },
        { id: "c", text: "App zum Verkaufen von gebrauchter Kleidung." },
        { id: "d", text: "Repair-Café: Geräte reparieren statt wegwerfen." },
        { id: "e", text: "Flohmarkt am Wochenende: Möbel, Bücher, Kleidung." },
        { id: "f", text: "Bücher tauschen im Nachbarschaftsregal." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit einem Jahr ___(1)___ ich meine Kleidung fast nur noch second hand. Am Anfang ___(2)___ ich unsicher. Ich ___(3)___ schnell gemerkt, dass viele Läden tolle Sachen anbieten. Ich spare dadurch viel Geld, ___(4)___ ich gleichzeitig etwas für die Umwelt tue. Ich würde jedem ___(5)___, das auszuprobieren.",
      luecken: [
        { nr: 1, o: ["kaufe", "kauft", "kaufen"], c: 0, h: "ich → kaufe." },
        { nr: 2, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 3, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 4, o: ["weil", "während", "obwohl"], c: 1, h: "Gleichzeitigkeit, keine Kausalität → während." },
        { nr: 5, o: ["empfehlen", "empfiehlt", "empfehle"], c: 0, h: "würde + Infinitiv → empfehlen." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["gebraucht", "Umwelt", "kostenlos", "Qualität", "tauschen"],
      text: "Second-Hand-Kleidung ist ___(6)___, aber oft von guter ___(7)___. Man kann Kleidung auch ___(8)___ auf Tauschpartys bekommen. Das ist gut für die ___(9)___. Viele Menschen möchten ihre Kleidung lieber ___(10)___, statt sie wegzuwerfen.",
      loesung: { 6: "gebraucht", 7: "Qualität", 8: "kostenlos", 9: "Umwelt", 10: "tauschen" }
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
        situation: "Sie waren auf einer Kleidertauschparty und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, was Sie dort gemacht haben.", "Sagen Sie, was Ihnen gefallen hat.", "Laden Sie die Person zur nächsten Party ein."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

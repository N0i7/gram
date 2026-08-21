// ============================================================
// FLOß Modelltest A2 — Nr. 02
// Gleiches Format wie Nr. 01.
// ============================================================

window.MODELLTEST_A2_02 = {
  testKey: "modelltest-a2-02",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 2",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Bibliothek bietet Deutschkurs an" },
        { id: 2, text: "Neue Buslinie ab September" },
        { id: 3, text: "Second-Hand-Laden eröffnet" },
        { id: 4, text: "Warnung vor Regen und Sturm" },
        { id: 5, text: "Sprachtandem gesucht" },
        { id: 6, text: "Job als Babysitter" },
        { id: 7, text: "Yoga-Kurs im Park" },
        { id: 8, text: "Handywerkstatt eröffnet" }
      ],
      texte: [
        { id: "a", text: "Ab September fährt ein neuer Bus zwischen dem Stadtzentrum und dem Industriegebiet, alle 20 Minuten." },
        { id: "b", text: "Ich möchte gerne mit jemandem Deutsch und Englisch tauschen. Einmal pro Woche, gerne bei einem Kaffee." },
        { id: "c", text: "Der Wetterdienst warnt für morgen vor starkem Regen und Windböen. Bitte seien Sie vorsichtig unterwegs." },
        { id: "d", text: "Gesucht wird eine zuverlässige Person, die zweimal wöchentlich abends auf zwei Kinder aufpasst." },
        { id: "e", text: "Der neue Laden verkauft gebrauchte Kleidung zu günstigen Preisen. Die Eröffnung ist am Samstag." }
      ],
      loesung: { a: 2, b: 5, c: 4, d: 6, e: 3 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Meine Familie und ich sind vor sechs Monaten nach Cebu gezogen. Zuerst war es nicht leicht, weil wir niemanden kannten. Mittlerweile haben wir gute Nachbarn und einige Freunde gefunden. Meine Kinder gehen jetzt in eine Schule in der Nähe und lernen schnell neue Wörter. Ich selbst arbeite in einem Büro und lerne abends Deutsch, weil ich hoffe, später einmal in Deutschland zu arbeiten. Es ist anstrengend, Arbeit, Familie und Sprachkurs zu kombinieren, aber ich gebe nicht auf.",
      aussagen: [
        { nr: 1, text: "Die Familie ist vor sechs Monaten umgezogen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Familie kannte am Anfang schon viele Leute.", korrekt: false, hinweis: "'wir kannten niemanden'." },
        { nr: 3, text: "Die Kinder gehen nicht zur Schule.", korrekt: false, hinweis: "Sie gehen in eine Schule in der Nähe." },
        { nr: 4, text: "Die Person lernt abends Deutsch.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person möchte den Sprachkurs aufgeben.", korrekt: false, hinweis: "'ich gebe nicht auf'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen einen Babysitter-Job." },
        { nr: 2, text: "Sie möchten gebrauchte Kleidung kaufen." },
        { nr: 3, text: "Sie brauchen ein neues Handy-Display." },
        { nr: 4, text: "Sie möchten Sport im Freien machen." },
        { nr: 5, text: "Sie suchen einen Deutschkurs in der Bibliothek." },
        { nr: 6, text: "Sie möchten mit jemandem Sprachen tauschen." },
        { nr: 7, text: "Sie brauchen ein Auto." },
        { nr: 8, text: "Sie möchten eine Wohnung mieten." },
        { nr: 9, text: "Sie suchen einen Handwerker für die Küche." },
        { nr: 10, text: "Sie möchten sich über das Wetter informieren." }
      ],
      anzeigen: [
        { id: "a", text: "Second-Hand-Laden, günstige gebrauchte Kleidung, Eröffnung Samstag." },
        { id: "b", text: "Handywerkstatt: Displaytausch und Reparaturen, meist am selben Tag." },
        { id: "c", text: "Yoga im Stadtpark, jeden Samstag 8 Uhr, für alle Level." },
        { id: "d", text: "Bibliothek bietet kostenlosen Deutschkurs für Anfänger, montags 17 Uhr." },
        { id: "e", text: "Sprachtandem: Deutsch gegen Englisch, einmal pro Woche bei Kaffee." },
        { id: "f", text: "Babysitter gesucht, zweimal wöchentlich abends, zwei Kinder." }
      ],
      loesung: { 1: "f", 2: "a", 3: "b", 4: "c", 5: "d", 6: "e", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Als ich klein ___(1)___, habe ich oft mit meinen Geschwistern gespielt. Wir ___(2)___ in einem kleinen Dorf. Mein Vater ___(3)___ als Fischer gearbeitet, meine Mutter ___(4)___ zu Hause geblieben. Heute lebe ich in der Stadt, ___(5)___ ich hier eine Ausbildung mache.",
      luecken: [
        { nr: 1, o: ["war", "bin", "wurde"], c: 0, h: "Präteritum von sein → war." },
        { nr: 2, o: ["wohnten", "wohnen", "gewohnt"], c: 0, h: "Präteritum → wohnten." },
        { nr: 3, o: ["hat", "ist", "war"], c: 0, h: "Perfekt: hat gearbeitet." },
        { nr: 4, o: ["ist", "hat", "war"], c: 0, h: "Perfekt mit sein: ist geblieben." },
        { nr: 5, o: ["weil", "obwohl", "damit"], c: 0, h: "Grund → weil." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["außerdem", "aber", "oder", "denn", "sondern"],
      text: "Ich möchte heute einkaufen gehen, ___(6)___ es regnet stark. Ich kann warten ___(7)___ trotzdem gehen. Ich brauche nicht nur Brot, ___(8)___ auch Gemüse. ___(9)___ möchte ich noch Milch kaufen. Ich gehe nicht zu Fuß, ___(10)___ ich habe keinen Regenschirm.",
      loesung: { 6: "aber", 7: "oder", 8: "sondern", 9: "außerdem", 10: "denn" }
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
        situation: "Sie sind vor Kurzem umgezogen und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, wo Sie jetzt wohnen.", "Beschreiben Sie die neue Wohnung kurz.", "Laden Sie die Person zu Besuch ein."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

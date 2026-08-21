// ============================================================
// FLOß Modelltest A2 — Nr. 21
// Gleiches Format wie Nr. 01–20.
// ============================================================

window.MODELLTEST_A2_21 = {
  testKey: "modelltest-a2-21",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 21",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Zu viele Termine im Kalender" },
        { id: 2, text: "Freizeit ohne Verpflichtungen" },
        { id: 3, text: "Erschöpfung durch Freizeitstress" },
        { id: 4, text: "Weniger Aktivitäten, mehr Ruhe" },
        { id: 5, text: "Hobbys als zusätzliche Belastung" },
        { id: 6, text: "Digitale Detox-Wochenenden" },
        { id: 7, text: "Freizeitplanung mit der App" },
        { id: 8, text: "Termine absagen lernen" }
      ],
      texte: [
        { id: "a", text: "Viele Menschen haben ihren Kalender so voll mit Freizeitaktivitäten, dass kaum Zeit zum Entspannen bleibt." },
        { id: "b", text: "Was eigentlich Spaß machen sollte, wird für manche zu einer zusätzlichen Belastung neben Arbeit und Familie." },
        { id: "c", text: "Immer mehr Menschen entdecken den Wert eines Wochenendes ganz ohne Termine und Verpflichtungen." },
        { id: "d", text: "Manche Menschen fühlen sich von der ständigen Planung ihrer Freizeit richtig erschöpft." },
        { id: "e", text: "Ein bewusster Verzicht auf feste Termine kann helfen, sich wieder zu erholen." }
      ],
      loesung: { a: 1, b: 5, c: 2, d: 3, e: 4 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Früher hatte ich jeden Abend einen Termin, ob Sportkurs, Treffen mit Freunden oder Vereinssitzung. Am Anfang fand ich das toll, weil ich viel erlebt habe. Nach einiger Zeit habe ich aber gemerkt, dass mich die vielen Termine erschöpft haben, statt mich zu entspannen. Ich hatte kaum noch Zeit, einfach nichts zu tun. Deshalb habe ich beschlossen, weniger Termine zu machen und mir mehr freie Zeit zu nehmen. Jetzt plane ich bewusst Wochenenden ohne feste Verpflichtungen ein. Diese Veränderung hat mir sehr gutgetan, und ich fühle mich viel ausgeglichener.",
      aussagen: [
        { nr: 1, text: "Die Person hatte früher jeden Abend einen Termin.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person fand das von Anfang an schlecht.", korrekt: false, hinweis: "Gegenteil: 'am Anfang fand ich das toll'." },
        { nr: 3, text: "Die vielen Termine haben die Person erschöpft.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person macht jetzt noch mehr Termine.", korrekt: false, hinweis: "Gegenteil: 'weniger Termine zu machen'." },
        { nr: 5, text: "Die Person fühlt sich jetzt weniger ausgeglichen.", korrekt: false, hinweis: "Gegenteil: 'fühle mich viel ausgeglichener'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten Ihre Freizeit besser planen." },
        { nr: 2, text: "Sie fühlen sich von zu vielen Terminen erschöpft." },
        { nr: 3, text: "Sie suchen ein Wochenende ohne Termine." },
        { nr: 4, text: "Sie möchten lernen, Termine abzusagen." },
        { nr: 5, text: "Sie möchten weniger Zeit am Handy verbringen." },
        { nr: 6, text: "Sie suchen einen neuen Sportkurs." },
        { nr: 7, text: "Sie möchten ein neues Hobby anfangen." },
        { nr: 8, text: "Sie suchen einen Yoga-Kurs." },
        { nr: 9, text: "Sie möchten einen Vortrag zum Thema Zeitmanagement hören." },
        { nr: 10, text: "Sie suchen eine Meditations-App." }
      ],
      anzeigen: [
        { id: "a", text: "App zur Freizeitplanung mit Erinnerungen." },
        { id: "b", text: "Workshop: Erschöpfung durch zu viele Termine erkennen." },
        { id: "c", text: "Wochenendangebot: bewusst ohne Termine entspannen." },
        { id: "d", text: "Kurs: Höflich Nein sagen und Termine absagen." },
        { id: "e", text: "Digitale Detox-Wochenenden ohne Handy." },
        { id: "f", text: "Ratgeber: Freizeitstress erkennen und reduzieren." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Früher ___(1)___ ich jeden Abend einen Termin. Am Anfang ___(2)___ ich das toll. Nach einiger Zeit ___(3)___ ich gemerkt, dass mich die Termine erschöpft haben. Deshalb ___(4)___ ich beschlossen, weniger Termine zu machen. Diese Veränderung hat mir gutgetan, ___(5)___ ich mich jetzt viel ausgeglichener fühle.",
      luecken: [
        { nr: 1, o: ["hatte", "habe", "hätte"], c: 0, h: "Präteritum → hatte." },
        { nr: 2, o: ["fand", "finde", "fände"], c: 0, h: "Präteritum → fand." },
        { nr: 3, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 4, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 5, o: ["sodass", "obwohl", "damit"], c: 0, h: "Folge → sodass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Termine", "erschöpft", "entspannen", "Freizeitstress", "ausgeglichen"],
      text: "Zu viele ___(6)___ können zu ___(7)___ führen. Manche Menschen fühlen sich davon ___(8)___. Es ist wichtig, sich auch mal zu ___(9)___. Wer bewusst Zeit für sich nimmt, fühlt sich ___(10)___.",
      loesung: { 6: "Termine", 7: "Freizeitstress", 8: "erschöpft", 9: "entspannen", 10: "ausgeglichen" }
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
        situation: "Sie haben Ihre Freizeit reduziert und fühlen sich besser. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, wie es vorher war.", "Sagen Sie, was sich verändert hat.", "Geben Sie einen Tipp."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

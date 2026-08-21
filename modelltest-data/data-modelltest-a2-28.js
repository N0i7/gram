// ============================================================
// FLOß Modelltest A2 — Nr. 28
// Gleiches Format wie Nr. 01–27.
// ============================================================

window.MODELLTEST_A2_28 = {
  testKey: "modelltest-a2-28",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 28",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Heimweh in den ersten Wochen" },
        { id: 2, text: "Videoanrufe mit der Familie" },
        { id: 3, text: "Vertraute Gerichte kochen" },
        { id: 4, text: "Heimweh wird mit der Zeit weniger" },
        { id: 5, text: "Neue Freunde helfen gegen Heimweh" },
        { id: 6, text: "Heimweh trotz gutem Leben im Ausland" },
        { id: 7, text: "Besuche in der Heimat planen" },
        { id: 8, text: "Heimweh bei Feiertagen" }
      ],
      texte: [
        { id: "a", text: "In den ersten Wochen im neuen Land hatte ich oft starkes Heimweh." },
        { id: "b", text: "Regelmäßige Videoanrufe mit meiner Familie helfen mir, die Distanz besser zu ertragen." },
        { id: "c", text: "Wenn ich Gerichte aus meiner Heimat koche, fühle ich mich weniger allein." },
        { id: "d", text: "Mit der Zeit ist mein Heimweh deutlich schwächer geworden." },
        { id: "e", text: "Meine neuen Freunde hier haben mir sehr geholfen, mich weniger einsam zu fühlen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Als ich vor einem Jahr nach Deutschland gezogen bin, hatte ich in den ersten Wochen sehr starkes Heimweh. Ich habe oft an meine Familie und meine Freunde zu Hause gedacht. Um mich besser zu fühlen, telefoniere ich seitdem regelmäßig mit meiner Familie über Video. Außerdem koche ich manchmal Gerichte aus meiner Heimat, das hilft mir sehr. Mit der Zeit habe ich auch neue Freunde gefunden, die mir helfen, mich weniger allein zu fühlen. Heute vermisse ich meine Heimat zwar immer noch, aber nicht mehr so stark wie am Anfang.",
      aussagen: [
        { nr: 1, text: "Die Person hatte am Anfang starkes Heimweh.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person telefoniert nicht mit ihrer Familie.", korrekt: false, hinweis: "Gegenteil: 'telefoniere ich seitdem regelmäßig mit meiner Familie'." },
        { nr: 3, text: "Die Person kocht manchmal Gerichte aus der Heimat.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person hat keine neuen Freunde gefunden.", korrekt: false, hinweis: "Gegenteil: 'habe ich auch neue Freunde gefunden'." },
        { nr: 5, text: "Das Heimweh ist heute genauso stark wie am Anfang.", korrekt: false, hinweis: "Gegenteil: 'nicht mehr so stark wie am Anfang'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten mit der Familie videotelefonieren." },
        { nr: 2, text: "Sie suchen Gerichte aus Ihrer Heimat zum Nachkochen." },
        { nr: 3, text: "Sie möchten neue Freunde in Ihrer Stadt finden." },
        { nr: 4, text: "Sie möchten einen Besuch in der Heimat planen." },
        { nr: 5, text: "Sie suchen Tipps gegen Heimweh." },
        { nr: 6, text: "Sie suchen ein Fitnessstudio." },
        { nr: 7, text: "Sie möchten Deutsch lernen." },
        { nr: 8, text: "Sie suchen eine Wohnung." },
        { nr: 9, text: "Sie möchten einen Sprachpartner finden." },
        { nr: 10, text: "Sie suchen einen Job." }
      ],
      anzeigen: [
        { id: "a", text: "Videoanruf-App für Familie und Freunde." },
        { id: "b", text: "Rezepte aus aller Welt zum Nachkochen." },
        { id: "c", text: "Community-App für neue Freunde." },
        { id: "d", text: "Günstige Flüge in die Heimat buchen." },
        { id: "e", text: "Ratgeber: Umgang mit Heimweh." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Als ich vor einem Jahr nach Deutschland gezogen bin, ___(1)___ ich in den ersten Wochen starkes Heimweh. Um mich besser zu fühlen, ___(2)___ ich seitdem regelmäßig mit meiner Familie. Außerdem koche ich manchmal Gerichte aus meiner Heimat, ___(3)___ mir sehr hilft. Mit der Zeit habe ich neue Freunde gefunden, ___(4)___ mir helfen, mich weniger allein zu fühlen. Heute vermisse ich meine Heimat, ___(5)___ nicht mehr so stark wie am Anfang.",
      luecken: [
        { nr: 1, o: ["hatte", "habe", "hätte"], c: 0, h: "Präteritum → hatte." },
        { nr: 2, o: ["telefoniere", "telefonierst", "telefonieren"], c: 0, h: "ich → telefoniere." },
        { nr: 3, o: ["was", "das", "die"], c: 0, h: "Relativsatz auf ganzen Satz → was." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Freunde' (Plural) → die." },
        { nr: 5, o: ["aber", "denn", "oder"], c: 0, h: "Gegensatz → aber." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Heimweh", "Videoanrufe", "vertraut", "einsam", "Freunde"],
      text: "Viele Menschen haben am Anfang im Ausland ___(6)___. ___(7)___ mit der Familie können dabei helfen. Auch ___(8)___ Gerichte zu kochen tut gut. Neue ___(9)___ zu finden hilft, sich weniger ___(10)___ zu fühlen.",
      loesung: { 6: "Heimweh", 7: "Videoanrufe", 8: "vertraut", 9: "Freunde", 10: "einsam" }
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
        situation: "Sie hatten am Anfang im Ausland starkes Heimweh, das inzwischen besser geworden ist. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, wie es am Anfang war.", "Berichten Sie, was Ihnen geholfen hat.", "Geben Sie einen Tipp gegen Heimweh."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

// ============================================================
// FLOß Modelltest A2 — Nr. 25
// Gleiches Format wie Nr. 01–24.
// ============================================================

window.MODELLTEST_A2_25 = {
  testKey: "modelltest-a2-25",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 25",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Gemeinsam wohnen im Alter" },
        { id: 2, text: "Einsamkeit im Alter vermeiden" },
        { id: 3, text: "Gegenseitige Hilfe in der WG" },
        { id: 4, text: "Eigene Wohnung trotz Gemeinschaft" },
        { id: 5, text: "Gemeinsame Aktivitäten in der WG" },
        { id: 6, text: "Kosten sparen durch Wohngemeinschaft" },
        { id: 7, text: "Pflege in der Wohngemeinschaft" },
        { id: 8, text: "Neue Wohnform für Senioren" }
      ],
      texte: [
        { id: "a", text: "Immer mehr ältere Menschen entscheiden sich für eine Wohngemeinschaft statt für ein Einzelleben." },
        { id: "b", text: "In einer Senioren-WG hilft man sich gegenseitig im Alltag." },
        { id: "c", text: "Trotz Gemeinschaft hat jeder Bewohner ein eigenes Zimmer oder eine eigene kleine Wohnung." },
        { id: "d", text: "Gemeinsames Kochen und Ausflüge gehören oft zum Alltag in einer solchen Wohngemeinschaft." },
        { id: "e", text: "Viele Menschen berichten, dass sie sich in einer WG weniger einsam fühlen als allein." }
      ],
      loesung: { a: 8, b: 3, c: 4, d: 5, e: 2 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit meine Kinder ausgezogen sind, wohne ich in einer Wohngemeinschaft für Senioren. Anfangs hatte ich Zweifel, weil ich lange allein gelebt hatte. Inzwischen genieße ich es sehr, weil ich mich viel weniger einsam fühle als vorher. Jeder von uns hat ein eigenes Zimmer, aber die Küche und das Wohnzimmer teilen wir uns. Wir kochen oft zusammen und helfen uns gegenseitig, wenn jemand krank ist. Für mich war der Umzug in die WG eine der besten Entscheidungen der letzten Jahre.",
      aussagen: [
        { nr: 1, text: "Die Person wohnt in einer Senioren-WG.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person hatte am Anfang keine Zweifel.", korrekt: false, hinweis: "Gegenteil: 'anfangs hatte ich Zweifel'." },
        { nr: 3, text: "Die Person fühlt sich jetzt weniger einsam.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Jeder Bewohner hat kein eigenes Zimmer.", korrekt: false, hinweis: "Gegenteil: 'jeder von uns hat ein eigenes Zimmer'." },
        { nr: 5, text: "Der Umzug war eine gute Entscheidung für die Person.", korrekt: true, hinweis: "Direkt im letzten Satz." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen eine Wohngemeinschaft für Senioren." },
        { nr: 2, text: "Sie möchten gemeinsam mit anderen kochen." },
        { nr: 3, text: "Sie suchen ein eigenes Zimmer in einer WG." },
        { nr: 4, text: "Sie möchten sich weniger einsam fühlen." },
        { nr: 5, text: "Sie suchen Hilfe im Alltag." },
        { nr: 6, text: "Sie suchen einen Pflegedienst." },
        { nr: 7, text: "Sie suchen eine Ferienwohnung." },
        { nr: 8, text: "Sie möchten Sport im Alter machen." },
        { nr: 9, text: "Sie suchen eine Reisegruppe für Senioren." },
        { nr: 10, text: "Sie suchen einen Handwerker." }
      ],
      anzeigen: [
        { id: "a", text: "Senioren-Wohngemeinschaft — freie Plätze." },
        { id: "b", text: "Gemeinsam kochen in der Senioren-WG." },
        { id: "c", text: "Eigenes Zimmer in gemütlicher WG." },
        { id: "d", text: "Gemeinschaft statt Einsamkeit — Senioren-WG." },
        { id: "e", text: "Gegenseitige Unterstützung im WG-Alltag." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit meine Kinder ausgezogen sind, ___(1)___ ich in einer Wohngemeinschaft. Anfangs hatte ich Zweifel, ___(2)___ ich lange allein gelebt hatte. Inzwischen genieße ich es, ___(3)___ ich mich weniger einsam fühle. Jeder hat ein eigenes Zimmer, ___(4)___ wir teilen uns Küche und Wohnzimmer. Der Umzug war eine der besten Entscheidungen, ___(5)___ ich je getroffen habe.",
      luecken: [
        { nr: 1, o: ["wohne", "wohnst", "wohnen"], c: 0, h: "ich → wohne." },
        { nr: 2, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 3, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 4, o: ["aber", "denn", "oder"], c: 0, h: "Gegensatz → aber." },
        { nr: 5, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Entscheidungen' (Plural) → die." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Wohngemeinschaft", "einsam", "gegenseitig", "eigenes", "Gemeinschaft"],
      text: "Eine Senioren-___(6)___ kann helfen, sich weniger ___(7)___ zu fühlen. Jeder Bewohner hat ein ___(8)___ Zimmer. Man unterstützt sich ___(9)___. Viele schätzen die neue ___(10)___ im Alter sehr.",
      loesung: { 6: "Wohngemeinschaft", 7: "einsam", 8: "eigenes", 9: "gegenseitig", 10: "Gemeinschaft" }
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
        situation: "Sie sind vor Kurzem in eine Wohngemeinschaft für Senioren gezogen. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, warum Sie umgezogen sind.", "Berichten Sie, wie das Leben in der WG ist.", "Laden Sie die Person zu einem Besuch ein."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

// ============================================================
// FLOß Modelltest A2 — Nr. 35
// Gleiches Format wie Nr. 01–34.
// ============================================================

window.MODELLTEST_A2_35 = {
  testKey: "modelltest-a2-35",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 35",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Reisen mit dem Beruf vereinbaren" },
        { id: 2, text: "Urlaub schwer planbar" },
        { id: 3, text: "Arbeiten während der Reise" },
        { id: 4, text: "Weniger Urlaubstage im neuen Job" },
        { id: 5, text: "Reisen im Ruhestand" },
        { id: 6, text: "Kollegen vertreten während des Urlaubs" },
        { id: 7, text: "Fernreisen sind teuer" },
        { id: 8, text: "Reisen mit der Familie" }
      ],
      texte: [
        { id: "a", text: "Beruf und Reisen zu vereinbaren ist für viele Berufstätige eine Herausforderung." },
        { id: "b", text: "Wegen der Arbeit ist der Urlaub oft schwer zu planen." },
        { id: "c", text: "Manche arbeiten sogar während der Reise, zum Beispiel im Zug oder Flugzeug." },
        { id: "d", text: "Bevor man in den Urlaub fährt, muss man oft einen Kollegen für die Vertretung finden." },
        { id: "e", text: "Fernreisen kosten meistens mehr Geld als Reisen in der Nähe." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 6, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Ich reise sehr gern, aber das ist mit meinem Beruf nicht immer leicht zu vereinbaren. Meinen Urlaub muss ich oft lange im Voraus planen, weil mein Team klein ist. Bevor ich fahre, suche ich immer einen Kollegen, der mich vertritt. Manchmal arbeite ich sogar während der Reise, zum Beispiel im Zug. Trotzdem versuche ich, mindestens zweimal im Jahr eine größere Reise zu machen. Das ist mir sehr wichtig.",
      aussagen: [
        { nr: 1, text: "Die Person reist gern.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person plant den Urlaub nie im Voraus.", korrekt: false, hinweis: "Gegenteil: 'muss ich oft lange im Voraus planen'." },
        { nr: 3, text: "Vor der Reise sucht die Person eine Vertretung.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person arbeitet nie während der Reise.", korrekt: false, hinweis: "Gegenteil: 'arbeite ich sogar während der Reise'." },
        { nr: 5, text: "Reisen ist der Person nicht wichtig.", korrekt: false, hinweis: "Gegenteil: 'Das ist mir sehr wichtig'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten Ihren Urlaub frühzeitig planen." },
        { nr: 2, text: "Sie suchen eine Vertretung für die Arbeit während Ihrer Reise." },
        { nr: 3, text: "Sie möchten während der Reise mobil arbeiten." },
        { nr: 4, text: "Sie suchen günstige Fernreisen." },
        { nr: 5, text: "Sie möchten sich mit Ihrem Chef über Urlaubstage besprechen." },
        { nr: 6, text: "Sie suchen einen Reiseführer." },
        { nr: 7, text: "Sie suchen ein Hotel." },
        { nr: 8, text: "Sie suchen einen Mietwagen." },
        { nr: 9, text: "Sie suchen eine Reiseversicherung." },
        { nr: 10, text: "Sie suchen einen Koffer." }
      ],
      anzeigen: [
        { id: "a", text: "Urlaubsplaner-App für Berufstätige." },
        { id: "b", text: "Vertretungsbörse für Kollegen." },
        { id: "c", text: "Mobiles Arbeiten unterwegs — Tipps." },
        { id: "d", text: "Günstige Fernreisen buchen." },
        { id: "e", text: "Ratgeber: Urlaubstage mit dem Chef besprechen." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich reise sehr gern, ___(1)___ das mit meinem Beruf nicht immer leicht ist. Meinen Urlaub muss ich planen, ___(2)___ mein Team klein ist. Bevor ich fahre, suche ich einen Kollegen, ___(3)___ mich vertritt. Manchmal arbeite ich, ___(4)___ ich im Zug sitze. Ich versuche, ___(5)___ zweimal im Jahr zu reisen.",
      luecken: [
        { nr: 1, o: ["aber", "denn", "oder"], c: 0, h: "Gegensatz → aber." },
        { nr: 2, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 3, o: ["der", "die", "das"], c: 0, h: "Relativpronomen bezogen auf 'Kollegen' (maskulin) → der." },
        { nr: 4, o: ["wenn", "als", "ob"], c: 0, h: "Wiederholte Situation → wenn." },
        { nr: 5, o: ["mindestens", "höchstens", "nie"], c: 0, h: "'mindestens zweimal' — Bedeutung passt zum Kontext." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Urlaub", "Vertretung", "unterwegs", "Fernreise", "wichtig"],
      text: "Den ___(6)___ zu planen ist manchmal schwierig. Vor der Reise braucht man eine ___(7)___. Manche arbeiten auch ___(8)___. Eine ___(9)___ kostet oft mehr Geld. Reisen ist vielen Menschen sehr ___(10)___.",
      loesung: { 6: "Urlaub", 7: "Vertretung", 8: "unterwegs", 9: "Fernreise", 10: "wichtig" }
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
        situation: "Sie planen eine Reise, müssen aber vorher eine Vertretung für die Arbeit finden. Sie schreiben einer Kollegin / einem Kollegen.",
        punkte: ["Erzählen Sie von Ihrer Reiseplanung.", "Fragen Sie, ob die Person Sie vertreten kann.", "Bedanken Sie sich im Voraus."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

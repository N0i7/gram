// ============================================================
// FLOß Modelltest A2 — Nr. 33
// Gleiches Format wie Nr. 01–32.
// ============================================================

window.MODELLTEST_A2_33 = {
  testKey: "modelltest-a2-33",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 33",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Langer Arbeitsweg belastet Familie" },
        { id: 2, text: "Pendeln mit dem Zug" },
        { id: 3, text: "Zeit im Zug sinnvoll nutzen" },
        { id: 4, text: "Weniger Zeit für die Familie" },
        { id: 5, text: "Homeoffice reduziert Pendelzeit" },
        { id: 6, text: "Fahrgemeinschaften bilden" },
        { id: 7, text: "Pendeln macht müde" },
        { id: 8, text: "Umzug näher zur Arbeit" }
      ],
      texte: [
        { id: "a", text: "Ein langer Arbeitsweg kann die Familie stark belasten." },
        { id: "b", text: "Viele Pendler nutzen die Zeit im Zug, um zu lesen oder zu arbeiten." },
        { id: "c", text: "Durch Homeoffice-Tage verringert sich die Pendelzeit deutlich." },
        { id: "d", text: "Manche Kollegen bilden Fahrgemeinschaften, um Kosten zu sparen." },
        { id: "e", text: "Nach einem langen Arbeitsweg fühlen sich viele Menschen müde." }
      ],
      loesung: { a: 1, b: 3, c: 5, d: 6, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Ich pendle jeden Tag eine Stunde zur Arbeit. Das ist manchmal anstrengend für meine Familie, weil ich abends spät nach Hause komme. Im Zug nutze ich die Zeit, um E-Mails zu beantworten. Seit ich zweimal pro Woche im Homeoffice arbeite, ist mein Alltag entspannter. Mit einem Kollegen bilde ich außerdem eine Fahrgemeinschaft für die Tage im Büro. Nach der Arbeit bin ich trotzdem oft müde.",
      aussagen: [
        { nr: 1, text: "Die Person pendelt jeden Tag eine Stunde.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Das Pendeln ist nie anstrengend für die Familie.", korrekt: false, hinweis: "Gegenteil: 'Das ist manchmal anstrengend für meine Familie'." },
        { nr: 3, text: "Im Zug beantwortet die Person E-Mails.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person arbeitet nie im Homeoffice.", korrekt: false, hinweis: "Gegenteil: 'seit ich zweimal pro Woche im Homeoffice arbeite'." },
        { nr: 5, text: "Die Person ist nach der Arbeit nie müde.", korrekt: false, hinweis: "Gegenteil: 'Nach der Arbeit bin ich trotzdem oft müde'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen eine Fahrgemeinschaft für den Arbeitsweg." },
        { nr: 2, text: "Sie möchten mit Ihrem Chef über Homeoffice sprechen." },
        { nr: 3, text: "Sie suchen eine Zugverbindung zur Arbeit." },
        { nr: 4, text: "Sie möchten die Zeit im Zug sinnvoll nutzen." },
        { nr: 5, text: "Sie möchten näher zur Arbeit umziehen." },
        { nr: 6, text: "Sie suchen ein Fahrrad." },
        { nr: 7, text: "Sie suchen ein Restaurant." },
        { nr: 8, text: "Sie suchen eine Kita." },
        { nr: 9, text: "Sie suchen einen Handwerker." },
        { nr: 10, text: "Sie suchen ein Fitnessstudio." }
      ],
      anzeigen: [
        { id: "a", text: "Fahrgemeinschaften-App für Pendler." },
        { id: "b", text: "Ratgeber: Homeoffice mit dem Chef besprechen." },
        { id: "c", text: "Zugverbindungen im Überblick." },
        { id: "d", text: "Hörbücher und Podcasts für die Zugfahrt." },
        { id: "e", text: "Wohnungen in Arbeitsplatznähe." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich pendle jeden Tag eine Stunde, ___(1)___ ich weit von der Arbeit wohne. Das ist manchmal anstrengend, ___(2)___ ich abends spät nach Hause komme. Im Zug, mit ___(3)___ ich täglich fahre, beantworte ich E-Mails. Seit ich im Homeoffice arbeite, ___(4)___ mein Alltag entspannter geworden. Mit einem Kollegen, mit ___(5)___ ich mir das Auto teile, spare ich Kosten.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 3, o: ["dem", "der", "den"], c: 0, h: "Relativpronomen Dativ (mit + Dativ) bezogen auf 'Zug' (maskulin) → dem." },
        { nr: 4, o: ["ist", "hat", "war"], c: 0, h: "Perfekt mit 'sein' bei 'werden' → ist geworden." },
        { nr: 5, o: ["dem", "der", "den"], c: 0, h: "Relativpronomen Dativ (mit + Dativ) bezogen auf 'Kollegen' (maskulin) → dem." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Pendeln", "Arbeitsweg", "Homeoffice", "Fahrgemeinschaft", "müde"],
      text: "___(6)___ gehört für viele Menschen zum Alltag. Ein langer ___(7)___ kann anstrengend sein. Durch ___(8)___ verringert sich die Pendelzeit. Manche bilden eine ___(9)___, um Kosten zu sparen. Nach der Arbeit sind viele Pendler ___(10)___.",
      loesung: { 6: "Pendeln", 7: "Arbeitsweg", 8: "Homeoffice", 9: "Fahrgemeinschaft", 10: "müde" }
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
        situation: "Sie pendeln jeden Tag zur Arbeit. Sie schreiben einer Freundin / einem Freund über Ihren Arbeitsweg.",
        punkte: ["Erzählen Sie, wie lange Sie pendeln.", "Berichten Sie, was Ihnen dabei hilft.", "Fragen Sie, wie die Person zur Arbeit kommt."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

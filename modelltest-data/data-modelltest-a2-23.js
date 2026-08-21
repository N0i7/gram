// ============================================================
// FLOß Modelltest A2 — Nr. 23
// Gleiches Format wie Nr. 01–22.
// ============================================================

window.MODELLTEST_A2_23 = {
  testKey: "modelltest-a2-23",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 23",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Behördentermin ohne Deutschkenntnisse" },
        { id: 2, text: "Dolmetscher zum Amt mitbringen" },
        { id: 3, text: "Formulare nicht verstehen" },
        { id: 4, text: "Übersetzungs-App nutzen" },
        { id: 5, text: "Freunde helfen bei Behördengängen" },
        { id: 6, text: "Sprachkurs vor dem Amtstermin" },
        { id: 7, text: "Geduld bei Sprachbarrieren" },
        { id: 8, text: "Amt bietet mehrsprachige Formulare" }
      ],
      texte: [
        { id: "a", text: "Ohne gute Deutschkenntnisse kann ein Behördentermin sehr stressig sein." },
        { id: "b", text: "Manche Menschen bringen zu wichtigen Terminen einen Dolmetscher mit, der übersetzt." },
        { id: "c", text: "Viele Formulare bei Behörden sind schwer zu verstehen, auch für Muttersprachler." },
        { id: "d", text: "Eine Übersetzungs-App auf dem Handy kann bei einfachen Fragen helfen." },
        { id: "e", text: "Manche Ämter bieten inzwischen Formulare in mehreren Sprachen an." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Als ich das erste Mal allein zum Amt musste, hatte ich große Angst, weil mein Deutsch damals noch nicht so gut war. Ein Freund hat mir angeboten, mich zu begleiten und zu übersetzen. Das hat mir sehr geholfen. Außerdem habe ich eine Übersetzungs-App auf meinem Handy benutzt, wenn ich ein Wort nicht verstanden habe. Die Mitarbeiterin am Amt war zum Glück sehr geduldig und hat langsam gesprochen. Heute gehe ich viel entspannter zu Behördenterminen, weil mein Deutsch besser geworden ist.",
      aussagen: [
        { nr: 1, text: "Die Person hatte beim ersten Amtstermin Angst.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Ein Freund hat der Person geholfen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Die Person hat keine Übersetzungs-App benutzt.", korrekt: false, hinweis: "Gegenteil: 'habe ich eine Übersetzungs-App... benutzt'." },
        { nr: 4, text: "Die Mitarbeiterin am Amt war ungeduldig.", korrekt: false, hinweis: "Gegenteil: 'war zum Glück sehr geduldig'." },
        { nr: 5, text: "Die Person geht heute entspannter zu Terminen.", korrekt: true, hinweis: "Direkt im letzten Satz." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie brauchen einen Dolmetscher für einen Amtstermin." },
        { nr: 2, text: "Sie suchen eine Übersetzungs-App." },
        { nr: 3, text: "Sie möchten Deutsch für Behördengänge lernen." },
        { nr: 4, text: "Sie suchen mehrsprachige Formulare." },
        { nr: 5, text: "Sie brauchen Hilfe beim Ausfüllen von Formularen." },
        { nr: 6, text: "Sie suchen einen Rechtsanwalt." },
        { nr: 7, text: "Sie suchen einen Umzugsservice." },
        { nr: 8, text: "Sie möchten einen Termin online buchen." },
        { nr: 9, text: "Sie suchen einen Kindergartenplatz." },
        { nr: 10, text: "Sie suchen eine Wohnung." }
      ],
      anzeigen: [
        { id: "a", text: "Dolmetscherservice für Behördengänge." },
        { id: "b", text: "Kostenlose Übersetzungs-App zum Download." },
        { id: "c", text: "Deutschkurs speziell für Behördengänge." },
        { id: "d", text: "Formulare in mehreren Sprachen beim Amt." },
        { id: "e", text: "Ehrenamtliche Hilfe beim Ausfüllen von Formularen." },
        { id: "f", text: "Online-Terminbuchung beim Bürgeramt." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "f", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Als ich das erste Mal ___(1)___ zum Amt musste, hatte ich große Angst. Ein Freund hat mir ___(2)___, mich zu begleiten. Das hat mir sehr ___(3)___. Die Mitarbeiterin ___(4)___ zum Glück sehr geduldig. Heute gehe ich viel entspannter, ___(5)___ mein Deutsch besser geworden ist.",
      luecken: [
        { nr: 1, o: ["allein", "gemeinsam", "zusammen"], c: 0, h: "Sinngemäß: allein." },
        { nr: 2, o: ["angeboten", "gefragt", "erzählt"], c: 0, h: "'anbieten' → angeboten." },
        { nr: 3, o: ["geholfen", "gefallen", "gefragt"], c: 0, h: "Sinngemäß: geholfen." },
        { nr: 4, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 5, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Sprachbarriere", "Dolmetscher", "Formulare", "Geduld", "übersetzen"],
      text: "Bei einer ___(6)___ kann ein Amtstermin stressig sein. Ein ___(7)___ kann dabei helfen zu ___(8)___. Manche ___(9)___ sind schwer zu verstehen. Am Amt braucht man manchmal viel ___(10)___.",
      loesung: { 6: "Sprachbarriere", 7: "Dolmetscher", 8: "übersetzen", 9: "Formulare", 10: "Geduld" }
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
        situation: "Sie hatten einen schwierigen Amtstermin wegen der Sprachbarriere. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, warum der Termin schwierig war.", "Berichten Sie, wie Sie sich geholfen haben.", "Geben Sie einen Tipp für ähnliche Situationen."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

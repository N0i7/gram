// ============================================================
// FLOß Modelltest A2 — Nr. 18
// Gleiches Format wie Nr. 01–17.
// ============================================================

window.MODELLTEST_A2_18 = {
  testKey: "modelltest-a2-18",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 18",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Tierheim sucht Freiwillige" },
        { id: 2, text: "Hunde ausführen als Ehrenamt" },
        { id: 3, text: "Spenden für das Tierheim" },
        { id: 4, text: "Katzen suchen ein neues Zuhause" },
        { id: 5, text: "Tag der offenen Tür im Tierheim" },
        { id: 6, text: "Tierarztkosten steigen" },
        { id: 7, text: "Pflegestellen für Tiere gesucht" },
        { id: 8, text: "Tierheim ist überfüllt" }
      ],
      texte: [
        { id: "a", text: "Das Tierheim sucht Freiwillige, die regelmäßig helfen möchten, zum Beispiel beim Füttern oder Saubermachen." },
        { id: "b", text: "Wer gerne draußen ist, kann sich anmelden, um Hunde aus dem Tierheim spazieren zu führen." },
        { id: "c", text: "Am Sonntag öffnet das Tierheim seine Türen für alle Besucherinnen und Besucher." },
        { id: "d", text: "Mehrere Katzen aus dem Tierheim warten auf ein liebevolles neues Zuhause." },
        { id: "e", text: "Manche Menschen nehmen Tiere vorübergehend bei sich zu Hause auf, bis ein festes Zuhause gefunden wird." }
      ],
      loesung: { a: 1, b: 2, c: 5, d: 4, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit einem halben Jahr helfe ich ehrenamtlich im örtlichen Tierheim. Einmal pro Woche führe ich Hunde spazieren, die sonst kaum Auslauf bekommen würden. Am Anfang war ich unsicher, wie ich mit den Tieren umgehen soll, aber die Mitarbeiter haben mir viel gezeigt. Mittlerweile kenne ich die meisten Hunde mit Namen und freue mich jede Woche auf meinen Besuch. Die Arbeit macht mir sehr viel Spaß, auch wenn es manchmal traurig ist, wenn ein Tier lange kein neues Zuhause findet. Ich kann jedem empfehlen, sich auch im Tierschutz zu engagieren.",
      aussagen: [
        { nr: 1, text: "Die Person hilft seit einem halben Jahr im Tierheim.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person führt jeden Tag Hunde spazieren.", korrekt: false, hinweis: "Sie macht es einmal pro Woche." },
        { nr: 3, text: "Die Mitarbeiter haben der Person geholfen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person kennt keinen der Hunde mit Namen.", korrekt: false, hinweis: "Gegenteil: 'kenne ich die meisten Hunde mit Namen'." },
        { nr: 5, text: "Die Person würde niemandem empfehlen, sich im Tierschutz zu engagieren.", korrekt: false, hinweis: "Gegenteil: 'kann jedem empfehlen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten im Tierheim helfen." },
        { nr: 2, text: "Sie möchten Hunde spazieren führen." },
        { nr: 3, text: "Sie möchten das Tierheim besuchen." },
        { nr: 4, text: "Sie möchten eine Katze adoptieren." },
        { nr: 5, text: "Sie möchten ein Tier vorübergehend aufnehmen." },
        { nr: 6, text: "Sie möchten für das Tierheim spenden." },
        { nr: 7, text: "Sie suchen einen Tierarzt." },
        { nr: 8, text: "Sie möchten einen Hund kaufen." },
        { nr: 9, text: "Sie suchen ein Tierheim in einer anderen Stadt." },
        { nr: 10, text: "Sie möchten Tierpfleger werden." }
      ],
      anzeigen: [
        { id: "a", text: "Freiwillige für Tierheim gesucht, regelmäßige Hilfe erwünscht." },
        { id: "b", text: "Hunde ausführen: Anmeldung im Tierheim möglich." },
        { id: "c", text: "Tag der offenen Tür am Sonntag." },
        { id: "d", text: "Katzen suchen ein neues Zuhause." },
        { id: "e", text: "Pflegestellen für Tiere dringend gesucht." },
        { id: "f", text: "Spenden für das Tierheim jederzeit willkommen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit einem halben Jahr ___(1)___ ich ehrenamtlich im Tierheim. Einmal pro Woche ___(2)___ ich Hunde spazieren. Am Anfang ___(3)___ ich unsicher, ___(4)___ ich mit den Tieren umgehen soll. Mittlerweile ___(5)___ ich die meisten Hunde mit Namen.",
      luecken: [
        { nr: 1, o: ["helfe", "hilft", "helfen"], c: 0, h: "ich → helfe." },
        { nr: 2, o: ["führe", "führt", "führen"], c: 0, h: "ich → führe." },
        { nr: 3, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 4, o: ["wie", "ob", "dass"], c: 0, h: "Frage nach Art → wie." },
        { nr: 5, o: ["kenne", "kennt", "kennen"], c: 0, h: "ich → kenne." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["ehrenamtlich", "Tierheim", "spazieren", "Auslauf", "Zuhause"],
      text: "Viele Menschen helfen ___(6)___ im ___(7)___. Manche führen Hunde ___(8)___, die sonst kaum ___(9)___ bekommen. Am Ende sollen alle Tiere ein neues ___(10)___ finden.",
      loesung: { 6: "ehrenamtlich", 7: "Tierheim", 8: "spazieren", 9: "Auslauf", 10: "Zuhause" }
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
        situation: "Sie helfen ehrenamtlich im Tierheim und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, seit wann Sie helfen.", "Sagen Sie, was Ihnen daran gefällt.", "Fragen Sie, ob die Person auch mithelfen möchte."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

// ============================================================
// FLOß Modelltest B1 — Nr. 15
// Gleiches Format wie Nr. 01–14.
// ============================================================

window.MODELLTEST_B1_15 = {
  testKey: "modelltest-b1-15",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 15",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Widerrufsrecht bei Online-Käufen" },
        { id: 2, text: "Garantie und Gewährleistung unterscheiden" },
        { id: 3, text: "Verbraucherzentrale hilft bei Beschwerden" },
        { id: 4, text: "Vorsicht bei unseriösen Anbietern" },
        { id: 5, text: "Kleingedrucktes genau lesen" },
        { id: 6, text: "Rückgaberecht im Laden" },
        { id: 7, text: "Reklamation richtig einreichen" },
        { id: 8, text: "Abo-Fallen im Internet" }
      ],
      texte: [
        { id: "a", text: "Bei Online-Bestellungen haben Kundinnen und Kunden meist 14 Tage Zeit, um die Ware ohne Angabe von Gründen zurückzuschicken." },
        { id: "b", text: "Viele Menschen verwechseln die gesetzliche Gewährleistung mit einer freiwilligen Herstellergarantie, obwohl beide unterschiedliche Regeln haben." },
        { id: "c", text: "Wer sich bei einem Kauf betrogen fühlt, kann sich kostenlos an die Verbraucherzentrale wenden und sich beraten lassen." },
        { id: "d", text: "Manche Websites bieten scheinbar kostenlose Tests an, die sich nach Ablauf einer Frist automatisch in ein teures Abonnement verwandeln." },
        { id: "e", text: "Vor dem Abschluss eines Vertrags sollte man die Vertragsbedingungen sorgfältig durchlesen, auch wenn sie lang und kompliziert wirken." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 8, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Vor einigen Monaten habe ich online ein Fitnessgerät bestellt, das aber nach wenigen Wochen kaputtgegangen ist. Ich wusste zunächst nicht genau, welche Rechte ich als Verbraucher habe. Über eine Suche im Internet bin ich auf die Verbraucherzentrale aufmerksam geworden und habe dort eine kostenlose Beratung erhalten. Man hat mir erklärt, dass ich innerhalb der gesetzlichen Gewährleistungsfrist einen Anspruch auf Reparatur oder Ersatz habe. Mit diesem Wissen habe ich den Händler kontaktiert und tatsächlich ein neues Gerät bekommen. Seitdem lese ich Vertragsbedingungen viel genauer, bevor ich etwas online kaufe.",
      aussagen: [
        { nr: 1, text: "Das online bestellte Fitnessgerät ist nach wenigen Wochen kaputtgegangen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person kannte von Anfang an genau ihre Rechte als Verbraucher.", korrekt: false, hinweis: "Gegenteil: 'wusste zunächst nicht genau'." },
        { nr: 3, text: "Die Beratung bei der Verbraucherzentrale hat Geld gekostet.", korrekt: false, hinweis: "Gegenteil: 'kostenlose Beratung'." },
        { nr: 4, text: "Die Person hat ein neues Gerät bekommen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person liest Vertragsbedingungen seitdem weniger genau.", korrekt: false, hinweis: "Gegenteil: 'viel genauer'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten eine Online-Bestellung zurückschicken." },
        { nr: 2, text: "Sie möchten sich kostenlos beraten lassen." },
        { nr: 3, text: "Sie möchten den Unterschied zwischen Garantie und Gewährleistung verstehen." },
        { nr: 4, text: "Sie sind in eine Abo-Falle geraten." },
        { nr: 5, text: "Sie möchten eine Reklamation einreichen." },
        { nr: 6, text: "Sie möchten die Vertragsbedingungen prüfen lassen." },
        { nr: 7, text: "Sie suchen einen Anwalt für Erbrecht." },
        { nr: 8, text: "Sie möchten eine Versicherung abschließen." },
        { nr: 9, text: "Sie suchen ein Girokonto." },
        { nr: 10, text: "Sie möchten einen Handyvertrag kündigen." }
      ],
      anzeigen: [
        { id: "a", text: "Widerrufsrecht: 14 Tage Rückgabe bei Online-Käufen." },
        { id: "b", text: "Verbraucherzentrale bietet kostenlose Erstberatung an." },
        { id: "c", text: "Garantie und Gewährleistung: Unterschiede erklärt." },
        { id: "d", text: "Warnung vor Abo-Fallen bei kostenlosen Testangeboten." },
        { id: "e", text: "Reklamation richtig einreichen: Musterbrief verfügbar." },
        { id: "f", text: "Vertragsbedingungen prüfen lassen, kostenloser Check." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Sehr geehrte Damen und Herren, vor einigen Wochen ___(1)___ ich bei Ihnen ein Fitnessgerät bestellt, das leider kaputtgegangen ist. ___(2)___ ich innerhalb der Gewährleistungsfrist bin, bitte ich um Reparatur oder Ersatz. Können Sie mir mitteilen, ___(3)___ Sie das Gerät reparieren oder ersetzen? Ich hoffe, ___(4)___ wir eine schnelle Lösung finden. Über eine baldige Rückmeldung ___(5)___ ich mich freuen.",
      luecken: [
        { nr: 1, o: ["habe", "hatte", "hätte"], c: 0, h: "Perfekt: habe bestellt." },
        { nr: 2, o: ["Da", "Obwohl", "Damit"], c: 0, h: "Grund, formell → da." },
        { nr: 3, o: ["ob", "dass", "wie"], c: 0, h: "indirekte Frage → ob." },
        { nr: 4, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'hoffe' → dass." },
        { nr: 5, o: ["würde", "werde", "wurde"], c: 0, h: "höflich, Konjunktiv II → würde." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Gewährleistung", "Reklamation", "Vertragsbedingungen", "kostenlos", "Widerrufsrecht"],
      text: "Bei defekter Ware besteht meist ein Anspruch auf ___(6)___. Eine ___(7)___ sollte schriftlich eingereicht werden. Vor dem Kauf sollte man die ___(8)___ genau lesen. Die Beratung bei der Verbraucherzentrale ist meist ___(9)___. Bei Online-Käufen gilt zusätzlich ein ___(10)___.",
      loesung: { 6: "Gewährleistung", 7: "Reklamation", 8: "Vertragsbedingungen", 9: "kostenlos", 10: "Widerrufsrecht" }
    }
  },

  schreiben: {
    titel: "Schreiben — Persönlicher Brief oder E-Mail",
    anleitung: "Wählen Sie EINE der beiden Aufgaben. Schreiben Sie mindestens 80 Wörter. Gehen Sie auf alle Punkte ein.",
    mindestwoerter: 80,
    aufgaben: [
      {
        nr: 1,
        briefform: "informell",
        situation: "Ein Freund / eine Freundin hat ein defektes Produkt online bestellt. Sie schreiben eine Nachricht.",
        punkte: ["Zeigen Sie Verständnis für die Situation.", "Geben Sie einen Tipp zur Reklamation.", "Empfehlen Sie die Verbraucherzentrale."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an einen Online-Händler, um ein defektes Produkt zu reklamieren.",
        punkte: ["Beschreiben Sie das Problem.", "Nennen Sie das Kaufdatum.", "Fordern Sie Reparatur oder Ersatz."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

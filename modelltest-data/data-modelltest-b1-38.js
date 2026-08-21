// ============================================================
// FLOß Modelltest B1 — Nr. 38
// Gleiches Format wie Nr. 01–37.
// ============================================================

window.MODELLTEST_B1_38 = {
  testKey: "modelltest-b1-38",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 38",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Kosten beim Autofahren sparen" },
        { id: 2, text: "Fahrgemeinschaft über eine App organisieren" },
        { id: 3, text: "Weniger Autos in der Stadt" },
        { id: 4, text: "Neue Kontakte durch Carsharing" },
        { id: 5, text: "Umweltschutz durch geteilte Fahrten" },
        { id: 6, text: "Carsharing nur für kurze Strecken" },
        { id: 7, text: "Vertrauen zwischen Fahrern wichtig" },
        { id: 8, text: "Versicherung beim Carsharing" }
      ],
      texte: [
        { id: "a", text: "Beim Carsharing mit Nachbarn lassen sich die Kosten für das Auto deutlich senken." },
        { id: "b", text: "Über eine App lässt sich eine passende Fahrgemeinschaft schnell finden." },
        { id: "c", text: "Weniger Autos auf den Straßen bedeuten weniger Verkehr und weniger Lärm." },
        { id: "d", text: "Durch das gemeinsame Fahren lernen sich viele Nachbarn erst richtig kennen." },
        { id: "e", text: "Geteilte Fahrten sparen CO2 und schonen so die Umwelt." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit einem halben Jahr teile ich mir mit zwei Nachbarn ein Auto über eine Carsharing-App. Dadurch sparen wir alle drei viel Geld, das wir früher für ein eigenes Auto ausgegeben hätten. Über die App lässt sich die Nutzung ganz einfach planen und organisieren. Durch das gemeinsame Fahren habe ich meine Nachbarn viel besser kennengelernt als vorher. Außerdem freue ich mich, auch etwas für die Umwelt zu tun. Manchmal ist es allerdings schwierig, sich auf gemeinsame Zeiten zu einigen.",
      aussagen: [
        { nr: 1, text: "Die Person teilt sich ein Auto mit Nachbarn.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Das Carsharing spart kein Geld.", korrekt: false, hinweis: "Gegenteil: 'sparen wir alle drei viel Geld'." },
        { nr: 3, text: "Die Nutzung wird über eine App organisiert.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person kennt ihre Nachbarn schlechter als vorher.", korrekt: false, hinweis: "Gegenteil: 'habe ich meine Nachbarn viel besser kennengelernt'." },
        { nr: 5, text: "Es ist immer leicht, sich auf Zeiten zu einigen.", korrekt: false, hinweis: "Gegenteil: 'manchmal ist es allerdings schwierig'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich einer Nachbarschafts-Fahrgemeinschaft anschließen." },
        { nr: 2, text: "Sie suchen eine Carsharing-App." },
        { nr: 3, text: "Sie möchten die Versicherung für ein geteiltes Auto klären." },
        { nr: 4, text: "Sie suchen eine Übersicht über die Kosten beim Carsharing." },
        { nr: 5, text: "Sie möchten selbst ein Auto zum Teilen anbieten." },
        { nr: 6, text: "Sie suchen einen Mietwagen für einen Tag." },
        { nr: 7, text: "Sie suchen ein neues Auto zum Kauf." },
        { nr: 8, text: "Sie suchen ein Fahrrad." },
        { nr: 9, text: "Sie suchen eine Werkstatt." },
        { nr: 10, text: "Sie suchen einen Parkplatz." }
      ],
      anzeigen: [
        { id: "a", text: "Nachbarschafts-Carsharing — jetzt mitmachen." },
        { id: "b", text: "Carsharing-App zum Download." },
        { id: "c", text: "Versicherungsinfos für geteilte Autos." },
        { id: "d", text: "Kostenübersicht Carsharing." },
        { id: "e", text: "Auto zum Teilen anbieten." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit einem halben Jahr teile ich mir ein Auto, ___(1)___ wir dadurch viel Geld sparen. Über die App, ___(2)___ ich täglich nutze, lässt sich alles organisieren. Durch das gemeinsame Fahren, ___(3)___ mir wichtig geworden ist, kenne ich meine Nachbarn besser. Ich freue mich, ___(4)___ ich der Umwelt helfe. Manchmal ist es schwierig, ___(5)___ sich alle einigen.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'App' (feminin) → die." },
        { nr: 3, o: ["das", "die", "was"], c: 0, h: "Relativpronomen bezogen auf 'gemeinsame Fahren' (neutrum) → das." },
        { nr: 4, o: ["weil", "obwohl", "dass"], c: 0, h: "Begründung → weil." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'schwierig' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Carsharing", "Kosten", "App", "Umwelt", "einigen"],
      text: "Beim ___(6)___ teilen sich mehrere Personen ein Auto. So sparen alle ___(7)___. Die Organisation läuft über eine ___(8)___. Geteilte Fahrten schonen die ___(9)___. Nur manchmal ist es schwer, sich zu ___(10)___.",
      loesung: { 6: "Carsharing", 7: "Kosten", 8: "App", 9: "Umwelt", 10: "einigen" }
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
        situation: "Sie teilen sich mit Nachbarn ein Auto über eine Carsharing-App. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Beschreiben Sie, wie das Carsharing funktioniert.", "Berichten Sie von Ihren Erfahrungen.", "Empfehlen Sie der Person, es auch auszuprobieren."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an einen Carsharing-Anbieter, weil Sie sich zu den Versicherungsbedingungen informieren möchten.",
        punkte: ["Beschreiben Sie Ihr Interesse am Carsharing.", "Fragen Sie nach den Versicherungsbedingungen.", "Bitten Sie um weitere Informationen."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

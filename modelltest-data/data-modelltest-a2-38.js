// ============================================================
// FLOß Modelltest A2 — Nr. 38
// Gleiches Format wie Nr. 01–37.
// ============================================================

window.MODELLTEST_A2_38 = {
  testKey: "modelltest-a2-38",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 38",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Andere Umgangsformen im Praktikum" },
        { id: 2, text: "Direkte Kommunikation überraschend" },
        { id: 3, text: "Kleidungsvorschriften unklar" },
        { id: 4, text: "Kollegen helfen bei Fragen" },
        { id: 5, text: "Pünktlichkeit sehr wichtig" },
        { id: 6, text: "Praktikum wird verlängert" },
        { id: 7, text: "Kulturschock am ersten Tag" },
        { id: 8, text: "Sprache im Büro schwierig" }
      ],
      texte: [
        { id: "a", text: "Im Praktikum in Deutschland waren die Umgangsformen anders, als ich erwartet hatte." },
        { id: "b", text: "Die direkte Art der Kommunikation hat mich am Anfang überrascht." },
        { id: "c", text: "Am ersten Tag wusste ich nicht genau, welche Kleidung angemessen ist." },
        { id: "d", text: "Zum Glück haben mir Kollegen geholfen, wenn ich Fragen hatte." },
        { id: "e", text: "Pünktlichkeit war im Büro besonders wichtig." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Mein Praktikum in Deutschland war eine spannende Erfahrung, aber am Anfang gab es auch einen kleinen Kulturschock. Die direkte Art der Kommunikation im Büro hat mich zuerst überrascht. Am ersten Tag wusste ich nicht genau, welche Kleidung passend ist. Zum Glück haben mir meine Kollegen bei vielen Fragen geholfen. Auch die Pünktlichkeit war im Büro sehr wichtig, das habe ich schnell gelernt. Insgesamt habe ich viel über die Arbeitskultur gelernt.",
      aussagen: [
        { nr: 1, text: "Das Praktikum war eine spannende Erfahrung.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die direkte Kommunikation hat die Person nicht überrascht.", korrekt: false, hinweis: "Gegenteil: 'hat mich zuerst überrascht'." },
        { nr: 3, text: "Am ersten Tag war die Kleidung unklar.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Kollegen haben nicht geholfen.", korrekt: false, hinweis: "Gegenteil: 'haben mir... bei vielen Fragen geholfen'." },
        { nr: 5, text: "Pünktlichkeit war nicht wichtig.", korrekt: false, hinweis: "Gegenteil: 'die Pünktlichkeit war im Büro sehr wichtig'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen ein Praktikum in Deutschland." },
        { nr: 2, text: "Sie möchten sich über die Arbeitskultur informieren." },
        { nr: 3, text: "Sie suchen Tipps zur Kleidung im Büro." },
        { nr: 4, text: "Sie möchten einen Ansprechpartner für Fragen im Praktikum." },
        { nr: 5, text: "Sie möchten sich mit anderen Praktikanten austauschen." },
        { nr: 6, text: "Sie suchen eine Ausbildungsstelle." },
        { nr: 7, text: "Sie suchen einen Sprachkurs." },
        { nr: 8, text: "Sie suchen eine Wohnung." },
        { nr: 9, text: "Sie suchen ein Auto." },
        { nr: 10, text: "Sie suchen ein Restaurant." }
      ],
      anzeigen: [
        { id: "a", text: "Praktikumsplätze in deutschen Unternehmen." },
        { id: "b", text: "Ratgeber: Arbeitskultur in Deutschland." },
        { id: "c", text: "Kleidungstipps für das Büro." },
        { id: "d", text: "Mentor für Praktikanten gesucht." },
        { id: "e", text: "Austauschgruppe für Praktikanten." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Mein Praktikum war spannend, ___(1)___ es am Anfang einen kleinen Kulturschock gab. Die direkte Kommunikation, ___(2)___ mich überrascht hat, war anders als erwartet. Am ersten Tag wusste ich nicht, ___(3)___ Kleidung passend ist. Meine Kollegen, ___(4)___ mir geholfen haben, waren sehr freundlich. Ich habe gelernt, ___(5)___ Pünktlichkeit wichtig ist.",
      luecken: [
        { nr: 1, o: ["aber", "denn", "oder"], c: 0, h: "Gegensatz → aber." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Kommunikation' (feminin) → die." },
        { nr: 3, o: ["welche", "was", "wie"], c: 0, h: "Indirekte Frage → welche." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Kollegen' (Plural) → die." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'gelernt' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Kulturschock", "Kommunikation", "Kleidung", "Kollegen", "Pünktlichkeit"],
      text: "Im Praktikum gab es zuerst einen kleinen ___(6)___. Die direkte ___(7)___ war ungewohnt. Auch die passende ___(8)___ war unklar. Zum Glück halfen die ___(9)___. Besonders wichtig war die ___(10)___.",
      loesung: { 6: "Kulturschock", 7: "Kommunikation", 8: "Kleidung", 9: "Kollegen", 10: "Pünktlichkeit" }
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
        situation: "Sie machen ein Praktikum in Deutschland und erleben einen kleinen Kulturschock. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, was für Sie ungewohnt ist.", "Berichten Sie, wer Ihnen hilft.", "Fragen Sie nach einem Tipp."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

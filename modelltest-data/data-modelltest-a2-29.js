// ============================================================
// FLOß Modelltest A2 — Nr. 29
// Gleiches Format wie Nr. 01–28.
// ============================================================

window.MODELLTEST_A2_29 = {
  testKey: "modelltest-a2-29",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 29",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Nervosität vor der Prüfung" },
        { id: 2, text: "Lernplan gegen Prüfungsangst" },
        { id: 3, text: "Entspannungsübungen vor der Prüfung" },
        { id: 4, text: "Prüfungsangst mit Freunden besprechen" },
        { id: 5, text: "Schlaf vor der Prüfung wichtig" },
        { id: 6, text: "Prüfungsangst wird mit der Zeit weniger" },
        { id: 7, text: "Prüfung verschieben" },
        { id: 8, text: "Gute Vorbereitung hilft gegen Angst" }
      ],
      texte: [
        { id: "a", text: "Viele Menschen sind vor einer wichtigen Prüfung sehr nervös." },
        { id: "b", text: "Ein guter Lernplan kann helfen, die Prüfungsangst zu verringern." },
        { id: "c", text: "Atemübungen vor der Prüfung können beruhigen." },
        { id: "d", text: "Es hilft manchen, mit Freunden über ihre Angst zu sprechen." },
        { id: "e", text: "Wer sich gut vorbereitet hat, fühlt sich meist sicherer bei der Prüfung." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Vor meiner letzten Deutschprüfung hatte ich große Angst, weil ich nicht wusste, was mich erwartet. Um mich besser vorzubereiten, habe ich mir einen Lernplan gemacht und jeden Tag ein bisschen gelernt. Am Abend vor der Prüfung habe ich mit einer Freundin telefoniert, die mir Mut gemacht hat. Außerdem habe ich Atemübungen gemacht, um ruhiger zu werden. Am Tag der Prüfung habe ich früh geschlafen und war deshalb ausgeruht. Am Ende war die Prüfung nicht so schwer, wie ich gedacht hatte.",
      aussagen: [
        { nr: 1, text: "Die Person hatte vor der Prüfung Angst.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person hat sich keinen Lernplan gemacht.", korrekt: false, hinweis: "Gegenteil: 'habe ich mir einen Lernplan gemacht'." },
        { nr: 3, text: "Die Person hat mit einer Freundin telefoniert.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person hat keine Atemübungen gemacht.", korrekt: false, hinweis: "Gegenteil: 'habe ich Atemübungen gemacht'." },
        { nr: 5, text: "Die Prüfung war schwerer als erwartet.", korrekt: false, hinweis: "Gegenteil: 'nicht so schwer, wie ich gedacht hatte'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten einen Lernplan erstellen." },
        { nr: 2, text: "Sie suchen Entspannungsübungen für vor der Prüfung." },
        { nr: 3, text: "Sie möchten mit anderen über Prüfungsangst sprechen." },
        { nr: 4, text: "Sie suchen Tipps zum besseren Schlafen vor Prüfungen." },
        { nr: 5, text: "Sie möchten einen Workshop gegen Prüfungsangst besuchen." },
        { nr: 6, text: "Sie suchen einen Deutschkurs." },
        { nr: 7, text: "Sie möchten einen Prüfungstermin verschieben." },
        { nr: 8, text: "Sie suchen ein Wörterbuch." },
        { nr: 9, text: "Sie möchten eine Prüfung nachholen." },
        { nr: 10, text: "Sie suchen ein Zeugnis." }
      ],
      anzeigen: [
        { id: "a", text: "App für einen persönlichen Lernplan." },
        { id: "b", text: "Entspannungsübungen für Prüfungssituationen." },
        { id: "c", text: "Selbsthilfegruppe gegen Prüfungsangst." },
        { id: "d", text: "Ratgeber: Besser schlafen vor Prüfungen." },
        { id: "e", text: "Workshop: Umgang mit Prüfungsangst." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Vor meiner letzten Prüfung hatte ich große Angst, ___(1)___ ich nicht wusste, was mich erwartet. Um mich besser vorzubereiten, ___(2)___ ich mir einen Lernplan gemacht. Am Abend habe ich mit einer Freundin telefoniert, ___(3)___ mir Mut gemacht hat. Außerdem habe ich Atemübungen gemacht, ___(4)___ ruhiger zu werden. Die Prüfung war nicht so schwer, ___(5)___ ich gedacht hatte.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 3, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Freundin' (feminin) → die." },
        { nr: 4, o: ["um", "damit", "dass"], c: 0, h: "'um... zu' + Infinitiv." },
        { nr: 5, o: ["wie", "als", "dass"], c: 0, h: "Vergleich → wie." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Prüfungsangst", "Lernplan", "Atemübungen", "ausgeruht", "Mut"],
      text: "Viele Menschen leiden unter ___(6)___. Ein guter ___(7)___ kann helfen, sich sicherer zu fühlen. Auch ___(8)___ können beruhigen. Freunde können einem ___(9)___ machen. Wichtig ist auch, vor der Prüfung ___(10)___ zu sein.",
      loesung: { 6: "Prüfungsangst", 7: "Lernplan", 8: "Atemübungen", 9: "Mut", 10: "ausgeruht" }
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
        situation: "Sie hatten Angst vor einer wichtigen Prüfung, die inzwischen gut gelaufen ist. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, wie Sie sich vor der Prüfung gefühlt haben.", "Berichten Sie, was Ihnen geholfen hat.", "Geben Sie einen Tipp gegen Prüfungsangst."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

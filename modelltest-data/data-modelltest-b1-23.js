// ============================================================
// FLOß Modelltest B1 — Nr. 23
// Gleiches Format wie Nr. 01–22.
// ============================================================

window.MODELLTEST_B1_23 = {
  testKey: "modelltest-b1-23",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 23",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Verein offiziell gründen" },
        { id: 2, text: "Satzung schreiben" },
        { id: 3, text: "Vorstand wählen" },
        { id: 4, text: "Mitglieder gewinnen" },
        { id: 5, text: "Eintragung ins Vereinsregister" },
        { id: 6, text: "Vereinskonto eröffnen" },
        { id: 7, text: "Gemeinnützigkeit beantragen" },
        { id: 8, text: "Vereinsfeier organisieren" }
      ],
      texte: [
        { id: "a", text: "Bevor ein Verein aktiv werden kann, muss zunächst eine Gründungsversammlung stattfinden." },
        { id: "b", text: "Die Satzung regelt Zweck, Rechte und Pflichten der Mitglieder und muss schriftlich verfasst werden." },
        { id: "c", text: "Auf der Gründungsversammlung wird auch der erste Vorstand des Vereins gewählt." },
        { id: "d", text: "Damit der Verein rechtsfähig wird, muss er beim Amtsgericht ins Vereinsregister eingetragen werden." },
        { id: "e", text: "Für steuerliche Vorteile kann der Verein beim Finanzamt die Gemeinnützigkeit beantragen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 5, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Vor zwei Jahren haben wir mit einigen Freunden beschlossen, einen Sportverein zu gründen, weil es in unserer Gegend kein passendes Angebot gab. Zuerst mussten wir eine Satzung schreiben, in der Zweck und Ziele des Vereins festgelegt sind. Danach fand eine Gründungsversammlung statt, bei der wir den ersten Vorstand gewählt haben. Anschließend haben wir den Verein beim Amtsgericht ins Vereinsregister eintragen lassen, was einige Wochen gedauert hat. Seitdem ist der Verein offiziell rechtsfähig und wir konnten auch ein Vereinskonto eröffnen. Mittlerweile hat unser Verein über 50 Mitglieder, was uns sehr freut.",
      aussagen: [
        { nr: 1, text: "Der Verein wurde gegründet, weil es kein passendes Sportangebot gab.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Satzung wurde erst nach der Gründungsversammlung geschrieben.", korrekt: false, hinweis: "Gegenteil: 'Zuerst mussten wir eine Satzung schreiben'." },
        { nr: 3, text: "Bei der Gründungsversammlung wurde der Vorstand gewählt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Eintragung ins Vereinsregister ging sehr schnell.", korrekt: false, hinweis: "Gegenteil: 'hat einige Wochen gedauert'." },
        { nr: 5, text: "Der Verein hat aktuell weniger als 10 Mitglieder.", korrekt: false, hinweis: "Gegenteil: 'über 50 Mitglieder'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten einen Verein gründen." },
        { nr: 2, text: "Sie brauchen Hilfe beim Schreiben einer Satzung." },
        { nr: 3, text: "Sie suchen Informationen zur Eintragung ins Vereinsregister." },
        { nr: 4, text: "Sie möchten die Gemeinnützigkeit beantragen." },
        { nr: 5, text: "Sie möchten ein Vereinskonto eröffnen." },
        { nr: 6, text: "Sie suchen neue Mitglieder für Ihren Verein." },
        { nr: 7, text: "Sie möchten eine Vereinsfeier planen." },
        { nr: 8, text: "Sie suchen eine Vereinsversicherung." },
        { nr: 9, text: "Sie möchten Fördermittel beantragen." },
        { nr: 10, text: "Sie suchen einen Steuerberater für Vereine." }
      ],
      anzeigen: [
        { id: "a", text: "Beratung: Verein gründen Schritt für Schritt." },
        { id: "b", text: "Muster-Satzung für Vereine zum Download." },
        { id: "c", text: "Informationen zur Eintragung ins Vereinsregister." },
        { id: "d", text: "Ratgeber: Gemeinnützigkeit für Vereine beantragen." },
        { id: "e", text: "Vereinskonto ohne Kontoführungsgebühren." },
        { id: "f", text: "Plattform zur Mitgliedergewinnung für Vereine." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Vor zwei Jahren ___(1)___ wir beschlossen, einen Sportverein zu gründen. Zuerst ___(2)___ wir eine Satzung schreiben. ___(3)___ wir die Satzung geschrieben hatten, fand die Gründungsversammlung statt. Die Eintragung ins Vereinsregister hat einige Wochen gedauert, ___(4)___ wir es eilig hatten. Mittlerweile hat unser Verein über 50 Mitglieder, ___(5)___ uns sehr freut.",
      luecken: [
        { nr: 1, o: ["haben", "hatten", "hätten"], c: 0, h: "Perfekt → haben beschlossen." },
        { nr: 2, o: ["mussten", "müssen", "müssten"], c: 0, h: "Präteritum → mussten." },
        { nr: 3, o: ["Nachdem", "Bevor", "Während"], c: 0, h: "Vorzeitigkeit → nachdem." },
        { nr: 4, o: ["obwohl", "weil", "damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 5, o: ["was", "das", "dass"], c: 0, h: "Relativsatz auf ganzen Satz → was." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Satzung", "Vorstand", "Vereinsregister", "Mitglieder", "gemeinnützig"],
      text: "Die ___(6)___ regelt Zweck und Ziele des Vereins. Der ___(7)___ wird bei der Gründungsversammlung gewählt. Danach wird der Verein ins ___(8)___ eingetragen. Ein Verein kann als ___(9)___ anerkannt werden. Unser Verein hat inzwischen viele neue ___(10)___ gewonnen.",
      loesung: { 6: "Satzung", 7: "Vorstand", 8: "Vereinsregister", 9: "gemeinnützig", 10: "Mitglieder" }
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
        situation: "Sie haben mit Freunden einen Verein gegründet. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, warum Sie den Verein gegründet haben.", "Berichten Sie, wie die Gründung abgelaufen ist.", "Laden Sie die Person ein, Mitglied zu werden."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an das Amtsgericht, um sich nach der Eintragung Ihres Vereins ins Vereinsregister zu erkundigen.",
        punkte: ["Beschreiben Sie Ihr Anliegen.", "Fragen Sie nach den benötigten Unterlagen.", "Fragen Sie nach der Bearbeitungsdauer."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

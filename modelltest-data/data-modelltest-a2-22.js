// ============================================================
// FLOß Modelltest A2 — Nr. 22
// Gleiches Format wie Nr. 01–21.
// ============================================================

window.MODELLTEST_A2_22 = {
  testKey: "modelltest-a2-22",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 22",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Freundschaft nach dem Umzug" },
        { id: 2, text: "Neue Freunde im Sportverein finden" },
        { id: 3, text: "Kontakt zu alten Freunden verlieren" },
        { id: 4, text: "Wenig Zeit für Freundschaften" },
        { id: 5, text: "Freundschaften online pflegen" },
        { id: 6, text: "Freunde treffen sich seltener" },
        { id: 7, text: "Neue Freunde bei der Arbeit" },
        { id: 8, text: "Alte Freundschaften wichtig" }
      ],
      texte: [
        { id: "a", text: "Nach dem Umzug in eine neue Stadt fällt es manchen Menschen schwer, den Kontakt zu alten Freunden zu halten." },
        { id: "b", text: "Im Erwachsenenalter haben viele Menschen weniger Zeit, um sich mit Freunden zu treffen." },
        { id: "c", text: "Ein Sportverein kann eine gute Möglichkeit sein, neue Freunde kennenzulernen." },
        { id: "d", text: "Manche Freundschaften bleiben nur online lebendig, weil man sich selten persönlich sieht." },
        { id: "e", text: "Trotz vollem Terminkalender bleiben alte Freundschaften für viele sehr wichtig." }
      ],
      loesung: { a: 1, b: 4, c: 2, d: 5, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Früher hatte ich viel Zeit für meine Freunde. Seit ich arbeite und eine Familie habe, treffe ich mich viel seltener mit ihnen. Manchmal schreiben wir uns nur noch Nachrichten, statt uns persönlich zu treffen. Trotzdem sind mir diese Freundschaften sehr wichtig, auch wenn wir uns selten sehen. Ich habe auch neue Freunde bei der Arbeit gefunden, mit denen ich mich gut verstehe. Es ist schön, sowohl alte als auch neue Freundschaften zu haben.",
      aussagen: [
        { nr: 1, text: "Die Person hatte früher viel Zeit für Freunde.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person trifft sich jetzt öfter mit Freunden.", korrekt: false, hinweis: "Gegenteil: 'treffe ich mich viel seltener'." },
        { nr: 3, text: "Die Person schreibt manchmal nur Nachrichten statt sich zu treffen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die alten Freundschaften sind der Person nicht mehr wichtig.", korrekt: false, hinweis: "Gegenteil: 'sind mir diese Freundschaften sehr wichtig'." },
        { nr: 5, text: "Die Person hat keine neuen Freunde gefunden.", korrekt: false, hinweis: "Gegenteil: 'neue Freunde bei der Arbeit gefunden'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten neue Freunde finden." },
        { nr: 2, text: "Sie suchen einen Sportverein in der Nähe." },
        { nr: 3, text: "Sie möchten Kontakt zu alten Freunden halten." },
        { nr: 4, text: "Sie suchen eine App für Freundschaften." },
        { nr: 5, text: "Sie möchten mehr Zeit für Freunde finden." },
        { nr: 6, text: "Sie suchen einen Kochkurs." },
        { nr: 7, text: "Sie möchten ein Buch über Freundschaft lesen." },
        { nr: 8, text: "Sie suchen einen Tanzkurs." },
        { nr: 9, text: "Sie möchten einen Vortrag zum Thema Freundschaft hören." },
        { nr: 10, text: "Sie suchen eine Reisegruppe." }
      ],
      anzeigen: [
        { id: "a", text: "Community-App: neue Freunde in Ihrer Stadt finden." },
        { id: "b", text: "Sportverein sucht neue Mitglieder." },
        { id: "c", text: "Ratgeber: Kontakt zu alten Freunden pflegen." },
        { id: "d", text: "App für Freundschaften und gemeinsame Aktivitäten." },
        { id: "e", text: "Workshop: Zeit für Freundschaften finden." },
        { id: "f", text: "Vortrag: Freundschaft im Erwachsenenalter." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "f", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Früher ___(1)___ ich viel Zeit für meine Freunde. ___(2)___ ich arbeite, treffe ich mich seltener mit ihnen. Manchmal schreiben wir uns nur Nachrichten, ___(3)___ uns persönlich zu treffen. Trotzdem sind mir diese Freundschaften wichtig, ___(4)___ wir uns selten sehen. Ich habe auch neue Freunde gefunden, ___(5)___ ich mich gut verstehe.",
      luecken: [
        { nr: 1, o: ["hatte", "habe", "hätte"], c: 0, h: "Präteritum → hatte." },
        { nr: 2, o: ["Seit", "Bis", "Ab"], c: 0, h: "Zeitpunkt bis jetzt → seit." },
        { nr: 3, o: ["statt", "ohne", "bevor"], c: 0, h: "'statt zu' + Infinitiv." },
        { nr: 4, o: ["auch wenn", "damit", "sodass"], c: 0, h: "Einräumung → auch wenn." },
        { nr: 5, o: ["mit denen", "die", "was"], c: 0, h: "Relativsatz mit Präposition → mit denen." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Freundschaft", "seltener", "wichtig", "Kontakt", "verstehen"],
      text: "Eine gute ___(6)___ braucht Zeit. Im Erwachsenenalter trifft man Freunde oft ___(7)___. Trotzdem bleiben sie ___(8)___. Manche halten den ___(9)___ nur online. Mit neuen Freunden kann man sich auch gut ___(10)___.",
      loesung: { 6: "Freundschaft", 7: "seltener", 8: "wichtig", 9: "Kontakt", 10: "verstehen" }
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
        situation: "Sie haben eine alte Freundin / einen alten Freund lange nicht gesehen. Sie schreiben ihr / ihm eine Nachricht.",
        punkte: ["Erzählen Sie, warum Sie sich lange nicht gesehen haben.", "Berichten Sie, was bei Ihnen neu ist.", "Schlagen Sie ein Treffen vor."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

// ============================================================
// FLOß Modelltest A2 — Nr. 08
// Gleiches Format wie Nr. 01–07.
// ============================================================

window.MODELLTEST_A2_08 = {
  testKey: "modelltest-a2-08",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 8",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neues Restaurant im Stadtzentrum" },
        { id: 2, text: "Mittagsmenü besonders günstig" },
        { id: 3, text: "Restaurant sucht Aushilfe" },
        { id: 4, text: "Tisch reservieren jetzt online" },
        { id: 5, text: "Restaurant schließt sonntags" },
        { id: 6, text: "Lieferservice für Studenten" },
        { id: 7, text: "Küche renoviert" },
        { id: 8, text: "Vegetarische Gerichte neu auf der Karte" }
      ],
      texte: [
        { id: "a", text: "Ab dieser Woche kann man einen Tisch bequem über die Webseite reservieren, ohne anzurufen." },
        { id: "b", text: "Studierende erhalten bei Bestellungen über 15 Euro 10 Prozent Rabatt auf den Lieferservice." },
        { id: "c", text: "Von Montag bis Freitag kostet das Mittagsmenü nur 8 Euro, inklusive Getränk." },
        { id: "d", text: "Ab sofort bietet das Restaurant auch mehrere vegetarische Gerichte an, darunter ein neues Curry." },
        { id: "e", text: "Wir suchen eine zuverlässige Person für den Service, am Wochenende, auch ohne Erfahrung." }
      ],
      loesung: { a: 4, b: 6, c: 2, d: 8, e: 3 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Letzte Woche war ich zum ersten Mal in dem neuen Restaurant im Stadtzentrum. Ich hatte einen Tisch online reserviert, was sehr einfach war. Das Essen hat mir sehr gut geschmeckt, besonders die vegetarischen Gerichte waren lecker. Der Service war freundlich, aber wir mussten relativ lange auf die Bestellung warten, weil das Restaurant sehr voll war. Die Preise fand ich fair, nicht zu teuer für die Qualität. Ich werde bestimmt wiederkommen, vielleicht sogar mit meiner ganzen Familie.",
      aussagen: [
        { nr: 1, text: "Die Person war zum ersten Mal in diesem Restaurant.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Reservierung war kompliziert.", korrekt: false, hinweis: "Gegenteil: 'was sehr einfach war'." },
        { nr: 3, text: "Die vegetarischen Gerichte haben nicht geschmeckt.", korrekt: false, hinweis: "Gegenteil: 'waren lecker'." },
        { nr: 4, text: "Es gab lange Wartezeit wegen des vollen Restaurants.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person möchte nicht wiederkommen.", korrekt: false, hinweis: "Gegenteil: 'werde bestimmt wiederkommen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten einen Tisch reservieren, ohne anzurufen." },
        { nr: 2, text: "Sie sind Student und möchten günstig liefern lassen." },
        { nr: 3, text: "Sie möchten mittags günstig essen." },
        { nr: 4, text: "Sie suchen vegetarische Gerichte." },
        { nr: 5, text: "Sie suchen einen Job im Service." },
        { nr: 6, text: "Sie möchten sonntags essen gehen." },
        { nr: 7, text: "Sie suchen ein Restaurant mit Livemusik." },
        { nr: 8, text: "Sie möchten eine Geburtstagsfeier organisieren." },
        { nr: 9, text: "Sie suchen einen Kochkurs." },
        { nr: 10, text: "Sie möchten Wein bestellen." }
      ],
      anzeigen: [
        { id: "a", text: "Tisch online reservieren, keine Anmeldung nötig." },
        { id: "b", text: "Lieferservice: 10% Rabatt für Studierende ab 15 Euro Bestellwert." },
        { id: "c", text: "Mittagsmenü Montag bis Freitag, 8 Euro mit Getränk." },
        { id: "d", text: "Neue vegetarische Gerichte auf der Karte, inklusive Curry." },
        { id: "e", text: "Restaurant sucht Aushilfe für den Service am Wochenende." },
        { id: "f", text: "Restaurant sonntags geschlossen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Letzte Woche ___(1)___ ich zum ersten Mal in dem neuen Restaurant. Ich ___(2)___ einen Tisch online reserviert, ___(3)___ das sehr einfach war. Das Essen hat mir gut geschmeckt, ___(4)___ die vegetarischen Gerichte. Wir mussten etwas warten, ___(5)___ das Restaurant sehr voll war.",
      luecken: [
        { nr: 1, o: ["war", "bin", "habe"], c: 0, h: "Präteritum von sein → war." },
        { nr: 2, o: ["hatte", "habe", "hätte"], c: 0, h: "Präteritum → hatte." },
        { nr: 3, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." },
        { nr: 4, o: ["besonders", "trotzdem", "obwohl"], c: 0, h: "Hervorhebung → besonders." },
        { nr: 5, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["besonders", "leider", "zum Glück", "insgesamt", "bestimmt"],
      text: "Das Essen war ___(6)___ sehr gut. ___(7)___ mussten wir etwas warten. ___(8)___ war der Service freundlich. ___(9)___ war der Abend schön. Ich komme ___(10)___ wieder.",
      loesung: { 6: "insgesamt", 7: "leider", 8: "zum Glück", 9: "besonders", 10: "bestimmt" }
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
        situation: "Sie waren in einem neuen Restaurant und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Beschreiben Sie das Restaurant kurz.", "Sagen Sie, was Ihnen gefallen hat.", "Schlagen Sie vor, gemeinsam dorthin zu gehen."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

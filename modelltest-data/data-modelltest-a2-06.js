// ============================================================
// FLOß Modelltest A2 — Nr. 06
// Gleiches Format wie Nr. 01–05.
// ============================================================

window.MODELLTEST_A2_06 = {
  testKey: "modelltest-a2-06",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 6",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Günstige Flüge im Frühling" },
        { id: 2, text: "Gültigkeit des Reisepasses prüfen" },
        { id: 3, text: "Hotel mit Frühbucherrabatt" },
        { id: 4, text: "Zug fällt aus" },
        { id: 5, text: "Reiseversicherung empfohlen" },
        { id: 6, text: "Koffer verloren" },
        { id: 7, text: "Neue Fährverbindung" },
        { id: 8, text: "Camping am See" }
      ],
      texte: [
        { id: "a", text: "Wer bis Ende des Monats bucht, bekommt 20 Prozent Rabatt auf die Übernachtung im Juli." },
        { id: "b", text: "Für die Reise ins Ausland sollte man rechtzeitig prüfen, ob der Reisepass noch mindestens sechs Monate gültig ist." },
        { id: "c", text: "Ab April verkehrt eine neue Fähre zwischen den beiden Inseln, dreimal täglich." },
        { id: "d", text: "Wegen technischer Probleme fällt der Zug um 14 Uhr aus. Reisende werden gebeten, den nächsten Zug zu nehmen." },
        { id: "e", text: "Experten empfehlen, vor jeder Auslandsreise eine Reiseversicherung abzuschließen, besonders wegen möglicher Krankheitskosten." }
      ],
      loesung: { a: 3, b: 2, c: 7, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Letzten Monat bin ich zum ersten Mal alleine gereist, nach Deutschland. Ich hatte etwas Angst, weil ich noch nie so weit weg von zu Hause war. Am Flughafen habe ich zum Glück schnell Hilfe gefunden, als ich meinen Anschlussflug nicht fand. Die Reise hat insgesamt gut geklappt, nur mein Koffer kam einen Tag später an als ich. In Deutschland habe ich viele neue Orte gesehen und mein Deutsch im echten Leben geübt. Am meisten hat mir die Zugfahrt durch die Berge gefallen. Nächstes Jahr möchte ich wieder verreisen, vielleicht sogar länger.",
      aussagen: [
        { nr: 1, text: "Die Person ist zum ersten Mal alleine gereist.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Am Flughafen hat niemand geholfen.", korrekt: false, hinweis: "Gegenteil: 'habe ich zum Glück schnell Hilfe gefunden'." },
        { nr: 3, text: "Der Koffer kam pünktlich an.", korrekt: false, hinweis: "'kam einen Tag später an'." },
        { nr: 4, text: "Die Person hat ihr Deutsch geübt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person möchte nie wieder verreisen.", korrekt: false, hinweis: "Gegenteil: 'möchte ich wieder verreisen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten günstig ein Hotel buchen." },
        { nr: 2, text: "Sie brauchen einen neuen Reisepass." },
        { nr: 3, text: "Sie möchten sich gegen Krankheitskosten im Ausland absichern." },
        { nr: 4, text: "Sie suchen einen Campingplatz." },
        { nr: 5, text: "Ihr Zug ist ausgefallen und Sie brauchen Informationen." },
        { nr: 6, text: "Sie möchten mit der Fähre zur Nachbarinsel fahren." },
        { nr: 7, text: "Sie suchen ein günstiges Flugticket." },
        { nr: 8, text: "Sie möchten einen Mietwagen buchen." },
        { nr: 9, text: "Sie haben Ihren Koffer verloren." },
        { nr: 10, text: "Sie suchen eine Reiseapotheke." }
      ],
      anzeigen: [
        { id: "a", text: "Hotel mit Frühbucherrabatt: 20% Rabatt bei Buchung bis Monatsende." },
        { id: "b", text: "Bürgeramt: Reisepass beantragen, Termin online buchbar." },
        { id: "c", text: "Reiseversicherung: Schutz bei Krankheit im Ausland." },
        { id: "d", text: "Neue Fährverbindung zwischen den Inseln, dreimal täglich." },
        { id: "e", text: "Bahnhof: Zuginfo bei Ausfällen, aktuelle Ersatzverbindungen." },
        { id: "f", text: "Campingplatz am See, geöffnet von April bis Oktober." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "f", 5: "e", 6: "d", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Letzten Monat ___(1)___ ich zum ersten Mal alleine gereist. Ich ___(2)___ etwas Angst, ___(3)___ ich noch nie so weit weg war. Am Flughafen habe ich Hilfe gefunden, ___(4)___ ich den Anschlussflug nicht fand. Die Reise hat gut geklappt, ___(5)___ mein Koffer einen Tag später ankam.",
      luecken: [
        { nr: 1, o: ["bin", "habe", "war"], c: 0, h: "Perfekt mit sein: bin gereist." },
        { nr: 2, o: ["hatte", "habe", "hätte"], c: 0, h: "Präteritum → hatte." },
        { nr: 3, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." },
        { nr: 4, o: ["als", "weil", "wenn"], c: 1, h: "Grund → weil." },
        { nr: 5, o: ["obwohl", "weil", "damit"], c: 0, h: "Einschränkung → obwohl." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["zum Glück", "leider", "am meisten", "insgesamt", "nächstes Jahr"],
      text: "Die Reise war ___(6)___ gut. ___(7)___ kam mein Koffer einen Tag später an. ___(8)___ hat mir die Zugfahrt durch die Berge gefallen. ___(9)___ habe ich schnell Hilfe gefunden. ___(10)___ möchte ich wieder verreisen.",
      loesung: { 6: "insgesamt", 7: "leider", 8: "am meisten", 9: "zum Glück", 10: "nächstes Jahr" }
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
        situation: "Sie waren im Urlaub und schreiben einer Freundin / einem Freund darüber.",
        punkte: ["Erzählen Sie, wohin Sie gereist sind.", "Beschreiben Sie ein Erlebnis von der Reise.", "Sagen Sie, ob Sie wieder dorthin reisen möchten."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

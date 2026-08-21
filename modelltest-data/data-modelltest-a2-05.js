// ============================================================
// FLOß Modelltest A2 — Nr. 05
// Gleiches Format wie Nr. 01–04.
// ============================================================

window.MODELLTEST_A2_05 = {
  testKey: "modelltest-a2-05",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 5",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neue Turnhalle eröffnet" },
        { id: 2, text: "Freiwillige für Umweltaktion gesucht" },
        { id: 3, text: "Kostenlose Rechtsberatung für Migranten" },
        { id: 4, text: "Deutschkurs mit Kinderbetreuung" },
        { id: 5, text: "Second-Hand-Elektronik-Markt" },
        { id: 6, text: "Neue Regeln beim Recycling" },
        { id: 7, text: "Kochabend für Nachbarn" },
        { id: 8, text: "Warnung vor Glatteis" }
      ],
      texte: [
        { id: "a", text: "Am Samstag treffen sich Freiwillige, um gemeinsam Müll im Stadtpark zu sammeln. Handschuhe und Säcke werden gestellt." },
        { id: "b", text: "Wer Fragen zu Aufenthaltstitel oder Familienzusammenführung hat, kann sich kostenlos beraten lassen, jeden zweiten Mittwoch." },
        { id: "c", text: "Der Kurs richtet sich an Eltern kleiner Kinder: Während des Unterrichts werden die Kinder nebenan betreut." },
        { id: "d", text: "Gebrauchte Handys, Laptops und Kopfhörer werden am Sonntag auf dem Marktplatz zu günstigen Preisen angeboten." },
        { id: "e", text: "Nachbarn kochen gemeinsam einmal im Monat verschiedene Gerichte aus ihren Heimatländern und essen zusammen." }
      ],
      loesung: { a: 2, b: 3, c: 4, d: 5, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit drei Monaten nehme ich an einem Kochabend in meiner Nachbarschaft teil. Jeden ersten Freitag im Monat treffen sich etwa zehn Personen, um gemeinsam zu kochen und zu essen. Jeder bringt ein Gericht aus seinem Heimatland mit oder hilft beim Kochen mit. Am Anfang kannte ich niemanden, aber inzwischen habe ich mehrere neue Freunde gefunden. Wir sprechen dabei immer Deutsch, was mir sehr beim Lernen hilft. Außerdem lerne ich viel über andere Kulturen und probiere Gerichte, die ich vorher nicht kannte. Nächsten Monat möchte ich selbst ein Gericht aus meiner Heimat kochen.",
      aussagen: [
        { nr: 1, text: "Der Kochabend findet einmal pro Woche statt.", korrekt: false, hinweis: "Nur einmal im Monat, am ersten Freitag." },
        { nr: 2, text: "Etwa zehn Personen nehmen teil.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Die Person kannte am Anfang schon alle Teilnehmer.", korrekt: false, hinweis: "'kannte ich niemanden'." },
        { nr: 4, text: "Beim Kochabend wird Deutsch gesprochen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person möchte nächsten Monat selbst kochen.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten bei der Müllsammlung helfen." },
        { nr: 2, text: "Sie brauchen Rechtsberatung zum Aufenthaltstitel." },
        { nr: 3, text: "Sie haben kleine Kinder und möchten Deutsch lernen." },
        { nr: 4, text: "Sie suchen ein günstiges gebrauchtes Handy." },
        { nr: 5, text: "Sie möchten neue Leute aus der Nachbarschaft kennenlernen." },
        { nr: 6, text: "Sie möchten Sport in einer neuen Halle machen." },
        { nr: 7, text: "Sie brauchen Informationen zum Recycling." },
        { nr: 8, text: "Sie suchen einen Job als Übersetzerin." },
        { nr: 9, text: "Sie möchten Ihr Auto reparieren lassen." },
        { nr: 10, text: "Sie suchen einen Deutschkurs am Wochenende." }
      ],
      anzeigen: [
        { id: "a", text: "Umweltaktion: Müllsammeln im Stadtpark, Samstag, Material wird gestellt." },
        { id: "b", text: "Kostenlose Rechtsberatung zu Aufenthaltstiteln, jeden zweiten Mittwoch." },
        { id: "c", text: "Deutschkurs mit Kinderbetreuung, für Eltern kleiner Kinder." },
        { id: "d", text: "Second-Hand-Elektronik-Markt, Sonntag, Marktplatz." },
        { id: "e", text: "Kochabend für Nachbarn, jeden ersten Freitag im Monat." },
        { id: "f", text: "Neue Turnhalle eröffnet, Kurse für alle Altersgruppen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit ich am Kochabend ___(1)___, habe ich viele neue Freunde gefunden. Am Anfang ___(2)___ ich niemanden, ___(3)___ ich mich trotzdem willkommen gefühlt habe. Wir sprechen immer Deutsch, ___(4)___ das gut für mein Lernen ist. Nächsten Monat ___(5)___ ich selbst ein Gericht aus meiner Heimat kochen.",
      luecken: [
        { nr: 1, o: ["teilnehme", "teilnimmt", "teilnehmen"], c: 0, h: "ich → teilnehme." },
        { nr: 2, o: ["kannte", "kenne", "kennt"], c: 0, h: "Präteritum: kannte." },
        { nr: 3, o: ["obwohl", "weil", "damit"], c: 0, h: "Gegensatz → obwohl." },
        { nr: 4, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." },
        { nr: 5, o: ["möchte", "möchtest", "möchten"], c: 0, h: "ich → möchte." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["gemeinsam", "regelmäßig", "abwechselnd", "erst", "inzwischen"],
      text: "Wir treffen uns ___(6)___ einmal im Monat. ___(7)___ kannte ich noch niemanden. ___(8)___ habe ich viele Freunde gefunden. Jeder bringt ___(9)___ ein Gericht mit. Wir kochen ___(10)___ und essen dann zusammen.",
      loesung: { 6: "regelmäßig", 7: "erst", 8: "inzwischen", 9: "abwechselnd", 10: "gemeinsam" }
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
        situation: "Sie haben an einem Nachbarschaftsevent teilgenommen und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Beschreiben Sie, was Sie gemacht haben.", "Sagen Sie, wen Sie kennengelernt haben.", "Laden Sie die Person ein, beim nächsten Mal mitzukommen."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

// ============================================================
// FLOß Modelltest A2 — Nr. 01
// Struktur: Lesen (3 Teile) + Sprachbausteine (2 Teile) + Schreiben
// ============================================================

window.MODELLTEST_A2_01 = {
  testKey: "modelltest-a2-01",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 1",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neuer Supermarkt eröffnet" },
        { id: 2, text: "Deutschkurs für Fortgeschrittene" },
        { id: 3, text: "Achtung: Straße gesperrt" },
        { id: 4, text: "Gebrauchte Möbel gesucht" },
        { id: 5, text: "Zahnarzttermin online buchen" },
        { id: 6, text: "Sommerfest im Verein" },
        { id: 7, text: "Nachbarschaftshilfe gesucht" },
        { id: 8, text: "Kostenloser Sprachtest" }
      ],
      texte: [
        { id: "a", text: "Ab dieser Woche kann man Termine bei der Zahnärztin direkt über die Webseite buchen, ohne anzurufen. Das spart Zeit für alle." },
        { id: "b", text: "Wegen Bauarbeiten ist die Bahnhofstraße bis nächsten Freitag komplett gesperrt. Bitte nutzen Sie eine andere Route." },
        { id: "c", text: "Der Kurs richtet sich an Personen mit A2-Kenntnissen und findet dienstags und donnerstags abends statt." },
        { id: "d", text: "Wir suchen jemanden, der älteren Nachbarn beim Einkaufen hilft. Ein bis zwei Stunden pro Woche reichen schon." },
        { id: "e", text: "Am Samstag feiert der Sportverein sein 20-jähriges Bestehen mit Musik, Essen und Spielen für Kinder." }
      ],
      loesung: { a: 5, b: 3, c: 2, d: 7, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit einem Jahr wohne ich in Deutschland und arbeite in einem kleinen Hotel. Am Anfang war es schwierig, weil ich die Sprache nicht so gut sprach. Meine Kollegen haben mir aber viel geholfen. Jetzt verstehe ich fast alles und kann mich gut unterhalten. Am Wochenende besuche ich manchmal Freunde in der Nachbarstadt, oder ich bleibe zu Hause und lerne für die nächste Deutschprüfung. Nächstes Jahr möchte ich das B1-Zertifikat machen, weil ich dann bessere Chancen im Beruf habe.",
      aussagen: [
        { nr: 1, text: "Die Person wohnt seit einem Jahr in Deutschland.", korrekt: true, hinweis: "Steht direkt im ersten Satz." },
        { nr: 2, text: "Die Kollegen haben nicht geholfen.", korrekt: false, hinweis: "Gegenteil: 'meine Kollegen haben mir aber viel geholfen'." },
        { nr: 3, text: "Die Person versteht jetzt fast alles.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Am Wochenende arbeitet die Person immer.", korrekt: false, hinweis: "Am Wochenende besucht sie Freunde oder lernt." },
        { nr: 5, text: "Die Person möchte das B1-Zertifikat machen.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen einen Job als Verkäuferin am Wochenende." },
        { nr: 2, text: "Sie möchten Ihr altes Sofa loswerden." },
        { nr: 3, text: "Sie brauchen einen Deutschkurs am Abend." },
        { nr: 4, text: "Sie suchen eine Zahnärztin in der Nähe." },
        { nr: 5, text: "Sie möchten einer älteren Person helfen." },
        { nr: 6, text: "Sie suchen eine Wohnung für sich allein." },
        { nr: 7, text: "Sie möchten Ihr Fahrrad reparieren lassen." },
        { nr: 8, text: "Sie suchen eine Nähmaschine." },
        { nr: 9, text: "Sie möchten an einem Sportfest teilnehmen." },
        { nr: 10, text: "Sie suchen einen Deutschkurs mit Kinderbetreuung." }
      ],
      anzeigen: [
        { id: "a", text: "Supermarkt sucht Aushilfe für Samstag und Sonntag, 6 Stunden pro Tag." },
        { id: "b", text: "Zahnarztpraxis am Marktplatz, Termine auch online buchbar." },
        { id: "c", text: "Abendkurs Deutsch A2, dienstags und donnerstags, 18–20 Uhr." },
        { id: "d", text: "Fahrradwerkstatt, alle Reparaturen, meist am selben Tag fertig." },
        { id: "e", text: "Sommerfest des Sportvereins, Samstag ab 14 Uhr, alle willkommen." },
        { id: "f", text: "Nachbarschaftshilfe gesucht: Einkaufen und kleine Botengänge für ältere Nachbarn." }
      ],
      loesung: { 1: "a", 2: "x", 3: "c", 4: "b", 5: "f", 6: "x", 7: "d", 8: "x", 9: "e", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Letzten Sommer ___(1)___ ich meine erste Reise nach Deutschland gemacht. Ich ___(2)___ zwei Wochen in Berlin, ___(3)___ ich Verwandte besucht habe. Das Wetter ___(4)___ leider nicht sehr gut, aber die Stadt hat mir trotzdem sehr gut ___(5)___.",
      luecken: [
        { nr: 1, o: ["habe", "hatte", "bin"], c: 0, h: "Perfekt: habe gemacht." },
        { nr: 2, o: ["bin", "habe", "war"], c: 2, h: "war (Präteritum von sein) + Ort." },
        { nr: 3, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." },
        { nr: 4, o: ["war", "hatte", "ist"], c: 0, h: "Präteritum von sein → war." },
        { nr: 5, o: ["gefallen", "gefällt", "gefiel"], c: 0, h: "Perfekt mit hat: hat gefallen." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["zuerst", "danach", "trotzdem", "deshalb", "manchmal"],
      text: "___(6)___ gehe ich morgens joggen. ___(7)___ dusche ich und frühstücke. Es regnet ___(8)___, aber ich laufe ___(9)___. Ich bin müde, ___(10)___ gehe ich früh ins Bett.",
      loesung: { 6: "zuerst", 7: "danach", 8: "manchmal", 9: "trotzdem", 10: "deshalb" }
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
        situation: "Sie waren krank und konnten nicht zur Arbeit / zum Kurs kommen. Schreiben Sie eine Nachricht an Ihren Chef / Ihre Lehrerin.",
        punkte: ["Erklären Sie, warum Sie gefehlt haben.", "Sagen Sie, seit wann Sie krank sind.", "Fragen Sie, was Sie nachholen müssen."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

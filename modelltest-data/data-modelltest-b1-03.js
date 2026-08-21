// ============================================================
// FLOß Modelltest B1 — Nr. 03
// Gleiches Format wie Nr. 01/02.
// ============================================================

window.MODELLTEST_B1_03 = {
  testKey: "modelltest-b1-03",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 3",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neue App hilft bei der Wohnungssuche" },
        { id: 2, text: "Schwimmbad wegen Renovierung geschlossen" },
        { id: 3, text: "Kostenlose Rechtsberatung für Mieter" },
        { id: 4, text: "Sprachcafé lädt zu lockerem Austausch ein" },
        { id: 5, text: "Neue Impfsprechstunde ohne Termin" },
        { id: 6, text: "Firma stellt auf Vier-Tage-Woche um" },
        { id: 7, text: "Volkshochschule erweitert Kursangebot" },
        { id: 8, text: "Warnung vor gefälschten Stellenanzeigen" }
      ],
      texte: [
        { id: "a", text: "In letzter Zeit häufen sich Beschwerden über Jobangebote, die viel zu gut klingen, um wahr zu sein, und persönliche Daten oder sogar Geld verlangen. Die Verbraucherzentrale rät zu besonderer Vorsicht bei unbekannten Absendern." },
        { id: "b", text: "Ab nächster Woche kann man sich montags bis freitags ohne vorherige Anmeldung im Gesundheitsamt impfen lassen. Eine Wartezeit ist allerdings nicht ausgeschlossen." },
        { id: "c", text: "Jeden zweiten Mittwoch im Monat treffen sich Menschen unterschiedlicher Muttersprachen im Gemeindezentrum, um bei Kaffee und Kuchen gemeinsam Deutsch zu üben. Der Eintritt ist frei, eine Anmeldung nicht nötig." },
        { id: "d", text: "Von August bis Oktober bleibt das städtische Bad wegen umfangreicher Sanierungsarbeiten geschlossen. Ausweichmöglichkeiten bietet das Nachbarbad in der Nachbargemeinde." },
        { id: "e", text: "Wer Fragen zu Mieterhöhungen, Kündigungen oder Kautionen hat, kann sich ab sofort jeden ersten Donnerstag im Monat kostenlos beraten lassen. Eine Anmeldung im Vorfeld wird empfohlen." }
      ],
      loesung: { a: 8, b: 5, c: 4, d: 2, e: 3 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Der Fachkräftemangel beschäftigt viele Branchen in Deutschland, besonders das Handwerk und die Pflege. Um offene Stellen zu besetzen, setzen immer mehr Betriebe auf internationale Fachkräfte. Damit die Einwanderung gelingt, wurden in den letzten Jahren mehrere Gesetze vereinfacht, etwa im Bereich der Anerkennung ausländischer Abschlüsse. Trotzdem berichten viele Betriebe von langwierigen bürokratischen Prozessen, die den Start neuer Mitarbeitender verzögern. Sprachkenntnisse gelten dabei als zentraler Erfolgsfaktor: Wer bereits vor der Ausreise ein solides B1-Niveau erreicht hat, hat es im Berufsalltag deutlich leichter, sowohl fachlich als auch im Umgang mit Kollegen und Kunden. Einige Unternehmen finanzieren daher inzwischen Sprachkurse bereits im Heimatland der zukünftigen Mitarbeitenden, noch bevor diese überhaupt eingereist sind.",
      aussagen: [
        { nr: 1, text: "Der Fachkräftemangel betrifft in Deutschland vor allem die IT-Branche.", korrekt: false, hinweis: "Der Text nennt Handwerk und Pflege, nicht IT." },
        { nr: 2, text: "Die Gesetze zur Anerkennung ausländischer Abschlüsse wurden vereinfacht.", korrekt: true, hinweis: "Steht wörtlich im Text." },
        { nr: 3, text: "Alle Betriebe berichten von einem reibungslosen Ablauf ohne Bürokratie.", korrekt: false, hinweis: "Gegenteil: 'langwierige bürokratische Prozesse'." },
        { nr: 4, text: "Gute Deutschkenntnisse erleichtern laut Text den Berufsalltag.", korrekt: true, hinweis: "Direkt genannt: 'B1-Niveau... hat es deutlich leichter'." },
        { nr: 5, text: "Manche Unternehmen bezahlen Sprachkurse schon vor der Einreise.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen eine Ausbildungsstelle im Handwerk." },
        { nr: 2, text: "Sie möchten Ihren Führerschein in Deutschland umschreiben lassen." },
        { nr: 3, text: "Sie brauchen Hilfe beim Ausfüllen von Behördenformularen." },
        { nr: 4, text: "Sie suchen eine WG-Zimmer in Stadtnähe." },
        { nr: 5, text: "Sie möchten sich beruflich in der Pflege weiterbilden." },
        { nr: 6, text: "Sie brauchen einen Kinderarzt in Ihrer Nähe." },
        { nr: 7, text: "Sie suchen eine private Krankenversicherung." },
        { nr: 8, text: "Sie möchten Deutsch über eine Lern-App üben." },
        { nr: 9, text: "Sie suchen eine Ausbildungsstelle als Elektriker." },
        { nr: 10, text: "Sie möchten sich über Weiterbildungsförderung informieren." }
      ],
      anzeigen: [
        { id: "a", text: "Sozialberatung und Formularhilfe für alle Behördenangelegenheiten, kostenlos, ohne Termin, dienstags 14–17 Uhr." },
        { id: "b", text: "Handwerksbetrieb sucht Auszubildende für Elektrotechnik, Ausbildungsbeginn September, Bewerbung ab sofort." },
        { id: "c", text: "Möbliertes WG-Zimmer, 15 Gehminuten zur Innenstadt, ab sofort frei, 350 Euro warm." },
        { id: "d", text: "Fortbildungskurs Pflegehelfer/in, berufsbegleitend, staatlich anerkannt, nächster Kursstart im Herbst." },
        { id: "e", text: "Beratung zur Anerkennung ausländischer Berufsabschlüsse und Fördermöglichkeiten, kostenlos, mit Terminvereinbarung." },
        { id: "f", text: "Zulassungsstelle: Umschreibung ausländischer Führerscheine, Termine online buchbar." }
      ],
      loesung: { 1: "b", 2: "f", 3: "a", 4: "c", 5: "d", 6: "x", 7: "x", 8: "x", 9: "b", 10: "e" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit ich ___(1)___ Deutschland lebe, hat sich mein Alltag stark verändert. Am Anfang war es schwierig, ___(2)___ ich die Sprache noch nicht gut sprach. Mittlerweile ___(3)___ ich mich viel sicherer, vor allem ___(4)___ ich jeden Tag übe. Meine Kollegen helfen mir oft, ___(5)___ ich ein Wort nicht verstehe.",
      luecken: [
        { nr: 1, o: ["in", "seit", "vor"], c: 0, h: "leben in + Dativ." },
        { nr: 2, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." },
        { nr: 3, o: ["fühle", "fühlt", "fühlen"], c: 0, h: "1. Person Singular → fühle." },
        { nr: 4, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund für die Sicherheit → weil." },
        { nr: 5, o: ["wenn", "als", "ob"], c: 0, h: "wiederholte Situation → wenn." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["obwohl", "je", "desto", "sobald", "kaum"],
      text: "___(6)___ mehr ich übe, ___(7)___ besser werde ich. ___(8)___ ich morgens aufwache, lerne ich zehn neue Vokabeln. ___(9)___ hatte ich die Prüfung bestanden, da wollte ich schon das nächste Niveau beginnen. ___(10)___ es manchmal anstrengend ist, macht mir das Lernen inzwischen Freude.",
      loesung: { 6: "je", 7: "desto", 8: "sobald", 9: "kaum", 10: "obwohl" }
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
        situation: "Sie haben vor Kurzem eine neue Sprache angefangen zu lernen und schreiben einem Freund davon.",
        punkte: ["Erzählen Sie, warum Sie die Sprache lernen.", "Berichten Sie, wie das Lernen bisher läuft.", "Fragen Sie, ob Ihr Freund auch eine Sprache lernt."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie bewerben sich um einen Praktikumsplatz und schreiben eine E-Mail an die Firma.",
        punkte: ["Stellen Sie sich kurz vor.", "Erklären Sie, warum Sie sich für die Firma interessieren.", "Fragen Sie nach einem Vorstellungsgespräch."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, siehe Projektnotiz zur KI-Korrektur. Manuelle Lehrer-Korrektur bleibt bis dahin Standard."
    }
  }
};

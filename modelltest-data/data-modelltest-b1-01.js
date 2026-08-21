// ============================================================
// FLOß Modelltest B1 — Nr. 01
// Struktur folgt telc B1: Lesen (3 Teile) + Sprachbausteine (2 Teile)
// Hören und Schreiben bewusst noch nicht enthalten (siehe Projektnotiz).
//
// PUNKTELOGIK (wie telc):
// Lesen:          25 Punkte (Teil1 5 | Teil2 5 | Teil3 15, je 1 Pkt richtig/falsch)
// Sprachbausteine: 10 Punkte (Teil1 5 | Teil2 5)
// Bestehensgrenze telc B1 gesamt: 60% — hier pro Modul einzeln auswertbar.
//
// FORMAT-HINWEIS für engine.js / Auswertung:
// - "c" = Index der richtigen Antwort in "o"
// - type:"zuordnung" = Text-zu-Überschrift/Anzeige-Matching, "pairs" enthält [Text-ID, richtige Options-ID]
// - type:"richtigfalsch" = Aussage + korrekt: true/false
// ============================================================

window.MODELLTEST_B1_01 = {
  testKey: "modelltest-b1-01",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 1",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neue Regeln für Mietverträge" },
        { id: 2, text: "Sportverein sucht Trainer" },
        { id: 3, text: "Warnung vor Trickbetrug am Telefon" },
        { id: 4, text: "Stadtbibliothek erweitert Öffnungszeiten" },
        { id: 5, text: "Deutschkurs jetzt auch am Wochenende" },
        { id: 6, text: "Strompreise steigen im nächsten Jahr" },
        { id: 7, text: "Nachbarschaftsfest im Park" },
        { id: 8, text: "Online-Banking sicherer machen" }
      ],
      texte: [
        {
          id: "a",
          text: "Ab sofort können Interessierte auch samstags von 9 bis 13 Uhr am Unterricht teilnehmen. Damit reagiert die Schule auf die Nachfrage von Berufstätigen, die unter der Woche keine Zeit haben. Die Anmeldung läuft wie gewohnt über das Sekretariat."
        },
        {
          id: "b",
          text: "In den letzten Wochen haben mehrere Bewohner Anrufe von angeblichen Bankmitarbeitern erhalten, die nach der PIN-Nummer fragten. Die Polizei rät: Niemals persönliche Daten am Telefon weitergeben, auch wenn der Anrufer seriös klingt."
        },
        {
          id: "c",
          text: "Am kommenden Samstag treffen sich die Bewohner der Straße im kleinen Park, um gemeinsam zu grillen und Spiele für Kinder anzubieten. Jeder ist eingeladen, eine Kleinigkeit zum Essen mitzubringen."
        },
        {
          id: "d",
          text: "Von Montag bis Freitag ist die Bücherei künftig bis 20 Uhr geöffnet, samstags bereits ab 9 Uhr. Grund ist die gestiegene Zahl an Besuchern, besonders unter Studierenden, die abends lernen möchten."
        },
        {
          id: "e",
          text: "Der örtliche Fußballverein sucht ab der neuen Saison eine Person, die die Jugendmannschaft zweimal wöchentlich trainiert. Erfahrung ist von Vorteil, aber nicht zwingend erforderlich — wichtig ist vor allem Geduld mit den Kindern."
        }
      ],
      loesung: { a: 5, b: 3, c: 7, d: 4, e: 2 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Immer mehr Menschen in Deutschland arbeiten von zu Hause aus. Was während der Pandemie als Notlösung begann, ist für viele Firmen inzwischen fester Bestandteil des Arbeitsalltags geworden. Laut einer aktuellen Studie arbeitet mittlerweile jeder vierte Angestellte zumindest an einigen Tagen der Woche im Homeoffice. Besonders in der IT-Branche und im Bereich der Verwaltung ist das Modell verbreitet, während es in der Produktion oder im Gesundheitswesen naturgemäß kaum umsetzbar ist. Kritiker warnen allerdings vor Nachteilen: Der informelle Austausch mit Kollegen fehle, und junge Mitarbeitende hätten es schwerer, sich in ein Team einzufinden. Befürworter betonen dagegen die bessere Vereinbarkeit von Beruf und Familie sowie die eingesparte Pendelzeit. Viele Unternehmen setzen daher auf ein hybrides Modell: einige Tage im Büro, einige Tage zu Hause.",
      aussagen: [
        { nr: 1, text: "Homeoffice ist erst seit der Pandemie in Deutschland bekannt.", korrekt: false, hinweis: "Es 'begann als Notlösung' während der Pandemie, existierte also vorher kaum, aber der Text sagt nicht, es sei 'unbekannt' gewesen — Falle: die Aussage übertreibt." },
        { nr: 2, text: "Etwa 25 Prozent der Angestellten arbeiten mindestens teilweise von zu Hause.", korrekt: true, hinweis: "'jeder vierte' = 25%." },
        { nr: 3, text: "In der Produktion ist Homeoffice besonders weit verbreitet.", korrekt: false, hinweis: "Gegenteil steht im Text: 'kaum umsetzbar'." },
        { nr: 4, text: "Kritiker sagen, neue Mitarbeitende hätten es im Homeoffice schwerer.", korrekt: true, hinweis: "'junge Mitarbeitende hätten es schwerer, sich einzufinden'." },
        { nr: 5, text: "Die meisten Firmen lassen ihre Angestellten nur noch von zu Hause arbeiten.", korrekt: false, hinweis: "Es geht um ein 'hybrides Modell', nicht ausschließlich Homeoffice." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen eine möblierte Ein-Zimmer-Wohnung für maximal 6 Monate." },
        { nr: 2, text: "Sie möchten abends nach der Arbeit noch einen Deutschkurs besuchen." },
        { nr: 3, text: "Sie suchen einen Nebenjob, den Sie am Wochenende machen können." },
        { nr: 4, text: "Ihr Kind braucht Nachhilfe in Mathematik." },
        { nr: 5, text: "Sie möchten ein gebrauchtes Fahrrad kaufen." },
        { nr: 6, text: "Sie suchen eine Krankenversicherung speziell für Studierende." },
        { nr: 7, text: "Sie brauchen jemanden, der Ihnen beim Umzug hilft." },
        { nr: 8, text: "Sie möchten Ihre Deutschkenntnisse mit einer Prüfung offiziell nachweisen." },
        { nr: 9, text: "Sie suchen einen Platz in einer Kindertagesstätte." },
        { nr: 10, text: "Sie möchten Ihr altes Handy verkaufen." }
      ],
      anzeigen: [
        { id: "a", text: "Möbliertes Apartment, zentral gelegen, ab sofort für 3–12 Monate mietbar. Alle Nebenkosten inklusive. Kontakt über Hausverwaltung." },
        { id: "b", text: "Umzugshilfe gesucht? Wir packen, tragen und transportieren — auch kurzfristig, am Wochenende und wochentags abends." },
        { id: "c", text: "Zertifizierte B1- und B2-Prüfungen jeden letzten Samstag im Monat. Anmeldung mindestens 2 Wochen vorher erforderlich." },
        { id: "d", text: "Abendkurse Deutsch A1–B2, Montag bis Donnerstag 18–20 Uhr. Kleine Gruppen, erfahrene Lehrkräfte." },
        { id: "e", text: "Nachhilfe für alle Fächer, Klasse 1–10, auch online möglich. Erste Probestunde kostenlos." },
        { id: "f", text: "Studentenjob im Café, samstags und sonntags, flexible Einteilung, gute Bezahlung." }
      ],
      loesung: { 1: "a", 2: "d", 3: "f", 4: "e", 5: "x", 6: "x", 7: "b", 8: "c", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Liebe Frau Schmidt, ich schreibe Ihnen, ___(1)___ ich mich für den Deutschkurs anmelden möchte. Leider ___(2)___ ich am Anmeldetag keine Zeit, ___(3)___ ich zu diesem Zeitpunkt noch arbeiten musste. Wäre es möglich, dass ich die Unterlagen trotzdem noch ___(4)___ Freitag einreichen kann? Ich würde mich sehr freuen, ___(5)___ Sie mir kurz Bescheid geben könnten. Mit freundlichen Grüßen",
      luecken: [
        { nr: 1, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund für das Schreiben → weil." },
        { nr: 2, o: ["hatte", "habe", "hätte"], c: 0, h: "Vergangenheit erzählend → hatte." },
        { nr: 3, o: ["obwohl", "da", "denn"], c: 1, h: "kausal, mittig im Satz → da; 'obwohl' wäre konzessiv und passt nicht." },
        { nr: 4, o: ["bis", "seit", "ab"], c: 0, h: "Frist / letzter Termin → bis Freitag." },
        { nr: 5, o: ["wenn", "ob", "dass"], c: 0, h: "höflicher Wunsch, Bedingung → wenn." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["obwohl", "trotzdem", "dabei", "während", "sodass"],
      text: "Er wollte pünktlich sein, ___(6)___ hat er den Bus verpasst. ___(7)___ er im Regen wartete, überlegte er, ein Taxi zu nehmen. ___(8)___ er kein Bargeld dabei hatte, hoffte er auf eine andere Lösung. Er entschied sich, zu Fuß zu gehen, ___(9)___ er eine halbe Stunde zu spät kam. ___(10)___ war sein Chef zum Glück sehr verständnisvoll.",
      loesung: { 6: "trotzdem", 7: "während", 8: "obwohl", 9: "sodass", 10: "dabei" }
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
        situation: "Ihr Freund / Ihre Freundin hat Sie zu einer Feier eingeladen, aber Sie können nicht kommen.",
        punkte: ["Bedanken Sie sich für die Einladung.", "Erklären Sie, warum Sie nicht kommen können.", "Schlagen Sie einen anderen Termin vor, sich zu treffen."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie können einen Termin bei Ihrem Deutschkurs nicht wahrnehmen und schreiben an die Schule.",
        punkte: ["Nennen Sie den Grund für Ihre Absage.", "Fragen Sie nach einem Ersatztermin.", "Bedanken Sie sich für das Verständnis."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, siehe Projektnotiz zur KI-Korrektur. Manuelle Lehrer-Korrektur bleibt bis dahin Standard."
    }
  }
};

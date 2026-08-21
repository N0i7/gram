// ============================================================
// FLOß Modelltest B1 — Nr. 02
// Gleiches Format wie Nr. 01 (siehe dort für Punktelogik/Formathinweise).
// ============================================================

window.MODELLTEST_B1_02 = {
  testKey: "modelltest-b1-02",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 2",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neuer Radweg zwischen den Stadtteilen eröffnet" },
        { id: 2, text: "Firma sucht Praktikanten für den Sommer" },
        { id: 3, text: "Achtung: Baustelle sorgt für Verkehrschaos" },
        { id: 4, text: "Kostenloser Deutschkurs für Neuankömmlinge" },
        { id: 5, text: "Wohnungsmarkt: Mieten steigen weiter" },
        { id: 6, text: "Gesundheitscheck jetzt auch online buchbar" },
        { id: 7, text: "Flohmarkt am Sonntag im Stadtzentrum" },
        { id: 8, text: "Neue Buslinie verbindet Vorort mit Innenstadt" }
      ],
      texte: [
        { id: "a", text: "Seit dieser Woche kann man Termine beim Hausarzt bequem über eine App vereinbaren, ohne anzurufen. Die Praxis reagiert damit auf den Wunsch vieler Patienten nach mehr Flexibilität." },
        { id: "b", text: "Wegen Rohrarbeiten ist die Hauptstraße bis Ende des Monats nur einspurig befahrbar. Autofahrer sollten mit längeren Wartezeiten rechnen und wenn möglich Ausweichstrecken nutzen." },
        { id: "c", text: "Ab Juni können Interessierte gebrauchte Kleidung, Bücher und Möbel auf dem großen Platz vor dem Rathaus anbieten oder kaufen. Ein Stand kostet 5 Euro Standgebühr." },
        { id: "d", text: "Das mittelständische Unternehmen bietet ab Juli mehrere Plätze für Studierende an, die erste Berufserfahrung im Bereich Marketing sammeln möchten. Bewerbungen bitte mit Lebenslauf." },
        { id: "e", text: "Der Verein bietet seit Kurzem einen Kurs speziell für Menschen an, die erst seit Kurzem in der Stadt leben. Unterrichtet wird zweimal wöchentlich, die Teilnahme ist gebührenfrei." }
      ],
      loesung: { a: 6, b: 3, c: 7, d: 2, e: 4 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "In vielen deutschen Städten wird das Fahrrad immer beliebter — nicht nur als Freizeitbeschäftigung, sondern zunehmend auch als Verkehrsmittel für den Arbeitsweg. Städte reagieren darauf, indem sie neue Radwege bauen und bestehende ausbauen. Kritiker bemängeln jedoch, dass viele Radwege zu schmal oder schlecht instand gehalten seien, sodass Radfahrende oft auf die Straße ausweichen müssten. Studien zeigen zudem, dass sich viele Menschen trotz vorhandener Radwege unsicher fühlen, besonders an stark befahrenen Kreuzungen. Verkehrsplaner fordern deshalb nicht nur mehr, sondern vor allem sicherere Radwege — etwa durch bauliche Trennung vom Autoverkehr. Einige Städte experimentieren bereits mit sogenannten Fahrradstraßen, auf denen Autos nur als Gäste fahren dürfen und Radfahrende Vorrang haben.",
      aussagen: [
        { nr: 1, text: "Das Fahrrad wird in Deutschland nur in der Freizeit genutzt.", korrekt: false, hinweis: "Der Text sagt explizit: auch für den Arbeitsweg." },
        { nr: 2, text: "Manche Radwege sind laut Kritikern zu schmal.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Alle Radfahrenden fühlen sich auf den vorhandenen Radwegen sicher.", korrekt: false, hinweis: "Gegenteil: viele fühlen sich unsicher." },
        { nr: 4, text: "Auf Fahrradstraßen haben Radfahrende Vorrang vor Autos.", korrekt: true, hinweis: "Steht wörtlich im letzten Satz." },
        { nr: 5, text: "Verkehrsplaner fordern vor allem mehr Radwege, egal wie sicher sie sind.", korrekt: false, hinweis: "Der Text betont 'vor allem sicherere', nicht nur mehr." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen einen günstigen Deutschkurs, der auch samstags stattfindet." },
        { nr: 2, text: "Sie brauchen eine Übersetzung Ihrer Geburtsurkunde." },
        { nr: 3, text: "Sie möchten Ihr Auto verkaufen." },
        { nr: 4, text: "Sie suchen eine Wohnung in der Nähe der Universität." },
        { nr: 5, text: "Sie möchten einen Computerkurs für Anfänger besuchen." },
        { nr: 6, text: "Sie brauchen rechtliche Beratung zu Ihrem Arbeitsvertrag." },
        { nr: 7, text: "Sie suchen eine Betreuung für Ihr Kind am Nachmittag." },
        { nr: 8, text: "Sie möchten gebrauchte Bücher kaufen." },
        { nr: 9, text: "Sie suchen einen Job im Gastgewerbe." },
        { nr: 10, text: "Sie möchten Ihr Deutsch mit einem Tandempartner üben." }
      ],
      anzeigen: [
        { id: "a", text: "Beeidigte Übersetzungen für Urkunden aller Art, schnelle Bearbeitung, auch amtlich anerkannt." },
        { id: "b", text: "1-Zimmer-Apartment, 5 Minuten zu Fuß zur Universität, ab September frei." },
        { id: "c", text: "Wir suchen Servicekräfte und Küchenhilfen, Vollzeit oder Teilzeit, sofortiger Start möglich." },
        { id: "d", text: "Nachmittagsbetreuung für Grundschulkinder, montags bis freitags 13–17 Uhr, mit Hausaufgabenhilfe." },
        { id: "e", text: "Rechtsberatung zu Miet- und Arbeitsrecht, erste Beratung kostenlos, Termin nach Vereinbarung." },
        { id: "f", text: "PC-Grundkurs für Einsteiger, 6 Termine, keine Vorkenntnisse nötig, kleine Gruppen." }
      ],
      loesung: { 1: "x", 2: "a", 3: "x", 4: "b", 5: "f", 6: "e", 7: "d", 8: "x", 9: "c", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Sehr geehrte Damen und Herren, ich interessiere mich für die ___(1)___ Stelle als Praktikant. Ich habe bereits Erfahrung im Bereich Marketing, ___(2)___ ich ein Jahr lang bei einer kleinen Firma gearbeitet habe. Gerne würde ich meine Kenntnisse ___(3)___ Ihrem Unternehmen einbringen. Über eine ___(4)___ zu einem Vorstellungsgespräch würde ich mich sehr freuen. ___(5)___ Fragen stehe ich Ihnen jederzeit zur Verfügung.",
      luecken: [
        { nr: 1, o: ["ausgeschriebene", "ausschreiben", "ausgeschrieben werden"], c: 0, h: "Partizip als Adjektiv → ausgeschriebene Stelle." },
        { nr: 2, o: ["obwohl", "da", "denn"], c: 1, h: "Nebensatz mit Verb am Ende → da." },
        { nr: 3, o: ["bei", "in", "an"], c: 0, h: "sich bei + Dativ einbringen (feste Wendung); 'in' würde Akkusativ verlangen, passt hier nicht zu 'Ihrem'." },
        { nr: 4, o: ["Einladung", "Anmeldung", "Bewerbung"], c: 0, h: "zu einem Gespräch → Einladung." },
        { nr: 5, o: ["Bei", "Für", "Mit"], c: 0, h: "bei Fragen = wenn Fragen bestehen." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["deshalb", "außerdem", "allerdings", "zunächst", "schließlich"],
      text: "Ich wollte ___(6)___ nur kurz vorbeischauen. Der Laden war ___(7)___ schon geschlossen. ___(8)___ habe ich beschlossen, es am nächsten Tag noch einmal zu versuchen. ___(9)___ wollte ich sowieso noch etwas anderes erledigen. ___(10)___ hat sich der zweite Versuch gelohnt.",
      loesung: { 6: "zunächst", 7: "allerdings", 8: "deshalb", 9: "außerdem", 10: "schließlich" }
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
        situation: "Ein Freund / eine Freundin zieht bald in eine neue Stadt und Sie schreiben eine Nachricht.",
        punkte: ["Wünschen Sie viel Erfolg für den Umzug.", "Fragen Sie, ob Sie beim Umzug helfen können.", "Schlagen Sie ein Abschiedstreffen vor."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie möchten sich bei Ihrem Vermieter über eine defekte Heizung beschweren.",
        punkte: ["Beschreiben Sie das Problem genau.", "Erklären Sie, seit wann das Problem besteht.", "Bitten Sie um schnelle Reparatur."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, siehe Projektnotiz zur KI-Korrektur. Manuelle Lehrer-Korrektur bleibt bis dahin Standard."
    }
  }
};

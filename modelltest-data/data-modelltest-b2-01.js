// ============================================================
// FLOß Modelltest B2 — Nr. 01
// Struktur: Lesen (3 Teile, anspruchsvoller) + Sprachbausteine (2 Teile) + Schreiben (Stellungnahme)
// ============================================================

window.MODELLTEST_B2_01 = {
  testKey: "modelltest-b2-01",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 1",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Künstliche Intelligenz verändert den Arbeitsmarkt" },
        { id: 2, text: "Warum lebenslanges Lernen wichtiger wird" },
        { id: 3, text: "Die Debatte um die Vier-Tage-Woche" },
        { id: 4, text: "Fachkräftemangel: Ein hausgemachtes Problem?" },
        { id: 5, text: "Digitalisierung im Gesundheitswesen" },
        { id: 6, text: "Rückkehr zur Präsenzpflicht im Büro" },
        { id: 7, text: "Nachhaltigkeit als Standortfaktor" },
        { id: 8, text: "Bürokratie bremst Unternehmensgründungen" }
      ],
      texte: [
        { id: "a", text: "Immer mehr Unternehmen experimentieren mit reduzierten Arbeitszeiten bei vollem Lohnausgleich. Befürworter verweisen auf Studien, die höhere Produktivität und geringere Krankheitsraten belegen. Kritiker halten dagegen, dass sich das Modell nicht in jeder Branche umsetzen lässt, insbesondere nicht im Handwerk oder in der Pflege." },
        { id: "b", text: "Während einige Konzerne ihre Belegschaft zurück ins Büro beordern, halten andere am hybriden Modell fest. Die Diskussion zeigt, wie unterschiedlich Unternehmen die vergangenen Jahre bewertet haben — als Ausnahmezustand oder als dauerhaften Kulturwandel." },
        { id: "c", text: "Fachverbände beklagen seit Jahren einen eklatanten Mangel an qualifizierten Arbeitskräften, verweisen jedoch selten auf strukturelle Ursachen wie unattraktive Arbeitsbedingungen oder unzureichende Weiterbildungsangebote der Betriebe selbst." },
        { id: "d", text: "Angesichts sich schnell wandelnder Berufsbilder reicht eine einmalige Ausbildung längst nicht mehr aus. Wer im Beruf bestehen will, muss sich kontinuierlich neues Wissen aneignen — eine Entwicklung, die sowohl Arbeitnehmende als auch Arbeitgeber vor neue Herausforderungen stellt." },
        { id: "e", text: "Von der elektronischen Patientenakte bis zur Videosprechstunde: Der Wandel in Kliniken und Praxen schreitet voran, wenn auch langsamer als in anderen europäischen Ländern. Datenschutzbedenken und veraltete IT-Infrastruktur gelten als größte Hürden." }
      ],
      loesung: { a: 3, b: 6, c: 4, d: 2, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Die Automatisierung industrieller Prozesse ist kein neues Phänomen, doch die Geschwindigkeit, mit der künstliche Intelligenz mittlerweile in Arbeitsabläufe integriert wird, stellt eine neue Dimension dar. Betroffen sind längst nicht mehr nur repetitive Tätigkeiten in der Produktion, sondern zunehmend auch Aufgaben im Bereich der Wissensarbeit — etwa das Verfassen von Texten, die Auswertung von Daten oder sogar erste Schritte in der medizinischen Diagnostik. Ökonomen sind sich uneinig, ob unterm Strich mehr Arbeitsplätze verloren gehen als neu entstehen. Historisch betrachtet haben technologische Umbrüche zwar regelmäßig zu Verwerfungen geführt, langfristig jedoch meist auch neue Berufsfelder hervorgebracht. Entscheidend dürfte sein, wie schnell sich Bildungssysteme und Sozialstaaten an die veränderten Anforderungen anpassen können. Wer den Wandel verschläft, riskiert eine wachsende Kluft zwischen jenen, die von der neuen Technologie profitieren, und jenen, die von ihr verdrängt werden.",
      aussagen: [
        { nr: 1, text: "Automatisierung ist laut Text ein völlig neues Phänomen.", korrekt: false, hinweis: "'kein neues Phänomen' — nur das Tempo ist neu." },
        { nr: 2, text: "KI betrifft mittlerweile auch Wissensarbeit, nicht nur Produktion.", korrekt: true, hinweis: "Direkt im Text genannt, mit Beispielen." },
        { nr: 3, text: "Ökonomen sind sich einig, dass mehr Jobs entstehen als wegfallen.", korrekt: false, hinweis: "Der Text sagt ausdrücklich 'uneinig'." },
        { nr: 4, text: "Technologische Umbrüche haben historisch auch neue Berufsfelder geschaffen.", korrekt: true, hinweis: "Steht wörtlich im Text." },
        { nr: 5, text: "Der Text sieht keinen Zusammenhang zwischen Bildungssystemen und dem Umgang mit KI.", korrekt: false, hinweis: "Gegenteil: 'Entscheidend dürfte sein, wie schnell sich Bildungssysteme... anpassen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Erfahrene Pflegefachkraft, sucht Vollzeitstelle in einer Klinik mit Nachtdiensten." },
        { nr: 2, text: "IT-Absolvent ohne Berufserfahrung, sucht Einstiegsposition im Bereich Softwareentwicklung." },
        { nr: 3, text: "Erfahrene Buchhalterin, sucht Teilzeitstelle mit Homeoffice-Möglichkeit." },
        { nr: 4, text: "Handwerksmeister, sucht Position mit Führungsverantwortung im eigenen Fachbereich." },
        { nr: 5, text: "Berufseinsteigerin im Marketing, sucht internationale Projekterfahrung." },
        { nr: 6, text: "Erfahrener Lehrer, sucht eine Stelle mit Fokus auf digitale Unterrichtsmethoden." },
        { nr: 7, text: "Ingenieurin, sucht Stelle im Bereich erneuerbare Energien." },
        { nr: 8, text: "Quereinsteiger, sucht Umschulung im Gesundheitswesen." },
        { nr: 9, text: "Verkäuferin, sucht flexible Wochenendarbeit." },
        { nr: 10, text: "Erfahrener Koch, sucht Stelle in gehobener Gastronomie." }
      ],
      anzeigen: [
        { id: "a", text: "Krankenhaus sucht examinierte Pflegekräfte für den Schichtdienst, Vollzeit, inklusive Nachtdienste." },
        { id: "b", text: "Steuerbüro sucht Buchhalter/in in Teilzeit, Homeoffice an 2 Tagen möglich." },
        { id: "c", text: "Handwerksbetrieb sucht Meister/in zur Übernahme der Werkstattleitung." },
        { id: "d", text: "Ingenieurbüro für Solartechnik sucht Ingenieur/in mit Erfahrung in erneuerbaren Energien." },
        { id: "e", text: "Sternerestaurant sucht erfahrenen Koch/Köchin für die Küchenleitung." },
        { id: "f", text: "Weiterbildungsträger bietet Umschulung zum Pflegehelfer/zur Pflegehelferin, staatlich gefördert." }
      ],
      loesung: { 1: "a", 2: "x", 3: "b", 4: "c", 5: "x", 6: "x", 7: "d", 8: "f", 9: "x", 10: "e" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Es steht außer Frage, dass sich der Arbeitsmarkt in den kommenden Jahren stark ___(1)___ wird. ___(2)___ die Digitalisierung bereits viele Bereiche erfasst hat, stehen einige Branchen erst am Anfang dieses Wandels. Unternehmen, die sich frühzeitig anpassen, ___(3)___ sich langfristig Wettbewerbsvorteile. ___(4)___ dieser Entwicklung sollten Arbeitnehmende in ihre eigene Weiterbildung investieren. Nur so lässt sich verhindern, dass man ___(5)___ den technologischen Anforderungen zurückbleibt.",
      luecken: [
        { nr: 1, o: ["verändern", "verändert", "veränderten"], c: 0, h: "Futur I (werden + Infinitiv) bei reflexivem Verb 'sich verändern' → wird sich verändern." },
        { nr: 2, o: ["Obwohl", "Während", "Weil"], c: 1, h: "Gegenüberstellung zweier Zustände → während." },
        { nr: 3, o: ["sichern", "sichert", "gesichert"], c: 0, h: "sich Plural: sichern sich." },
        { nr: 4, o: ["Angesichts", "Trotzdem", "Dennoch"], c: 0, h: "Präposition + Genitiv: angesichts der Entwicklung." },
        { nr: 5, o: ["hinter", "hinten", "zurück"], c: 0, h: "zurückbleiben hinter + Dativ." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["nichtsdestotrotz", "infolgedessen", "insofern", "zumal", "geschweige denn"],
      text: "Die Firma hat in den letzten Jahren kaum investiert, ___(6)___ die Wettbewerbsfähigkeit gesunken ist. Die Situation ist ___(7)___ kritisch, als mehrere Fachkräfte gekündigt haben. Man hat es bisher nicht geschafft, neue Mitarbeiter zu gewinnen, ___(8)___ sie zu halten. ___(9)___ bleibt die Geschäftsführung optimistisch. Ein Kurswechsel ist ___(10)___ dringend notwendig.",
      loesung: { 6: "infolgedessen", 7: "insofern", 8: "geschweige denn", 9: "nichtsdestotrotz", 10: "zumal" }
    }
  },

  schreiben: {
    titel: "Schreiben — Stellungnahme",
    anleitung: "Wählen Sie EINES der beiden Themen. Schreiben Sie eine strukturierte Stellungnahme mit mindestens 200 Wörtern: Einleitung, Argumente für und gegen die These, eigene Meinung, Schluss.",
    mindestwoerter: 200,
    aufgaben: [
      {
        nr: 1,
        briefform: "aufsatz",
        situation: "These: 'Homeoffice sollte gesetzlich als Recht für alle Arbeitnehmer verankert werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Künstliche Intelligenz wird mehr Arbeitsplätze vernichten, als sie schafft.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

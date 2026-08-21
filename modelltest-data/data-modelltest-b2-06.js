// ============================================================
// FLOß Modelltest B2 — Nr. 06
// Gleiches Format wie Nr. 01–05.
// ============================================================

window.MODELLTEST_B2_06 = {
  testKey: "modelltest-b2-06",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 6",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Die Macht der Sternebewertung" },
        { id: 2, text: "Gefälschte Rezensionen als wachsendes Problem" },
        { id: 3, text: "Wenn ein schlechtes Foto über den Ruf entscheidet" },
        { id: 4, text: "Kleine Betriebe im Ungleichgewicht der Plattformökonomie" },
        { id: 5, text: "Der psychologische Druck ständiger Bewertung" },
        { id: 6, text: "Wie Algorithmen Sichtbarkeit steuern" },
        { id: 7, text: "Rechtliche Grauzonen bei Bewertungsportalen" },
        { id: 8, text: "Konsumverhalten im Wandel der Digitalisierung" }
      ],
      texte: [
        { id: "a", text: "Für viele Restaurants und Handwerksbetriebe entscheidet inzwischen eine Handvoll Onlinebewertungen maßgeblich über Erfolg oder Misserfolg — unabhängig davon, wie repräsentativ diese tatsächlich sind." },
        { id: "b", text: "Immer wieder tauchen Berichte über gekaufte oder erfundene Bewertungen auf, die das Vertrauen in Plattformen grundsätzlich untergraben. Die Anbieter reagieren bislang nur zögerlich." },
        { id: "c", text: "Betroffene berichten von erheblichem Stress, wenn jede einzelne Kundenreaktion öffentlich sichtbar wird und über die eigene wirtschaftliche Existenz mitentscheidet." },
        { id: "d", text: "Wie prominent ein Anbieter in den Suchergebnissen erscheint, hängt von komplexen, meist intransparenten Kriterien der jeweiligen Plattform ab — ein Umstand, der kleine Betriebe strukturell benachteiligt." },
        { id: "e", text: "Rechtlich ist bislang wenig geklärt, wie weit Betreiber gegen offensichtlich unfaire oder falsche Bewertungen vorgehen können, was viele Unternehmer in einer schwierigen Position zurücklässt." }
      ],
      loesung: { a: 1, b: 2, c: 5, d: 6, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Bewertungsplattformen haben das Verhältnis zwischen Unternehmen und Kunden grundlegend verändert. Wo früher Mundpropaganda im begrenzten Bekanntenkreis über den Ruf eines Betriebs entschied, entfalten heute wenige negative Rezensionen eine Reichweite, die weit über die tatsächliche Kundenzahl hinausgeht. Für kleine, oft familiengeführte Betriebe kann eine einzelne unfaire Bewertung existenzbedrohend sein, insbesondere wenn sie schwer zu widerlegen ist und in den Suchergebnissen prominent erscheint. Gleichzeitig bieten die Plattformen auch Chancen: Kleine Anbieter mit engagiertem Service können sich durch positive Bewertungen einen Vorteil gegenüber größeren Konkurrenten verschaffen, den sie ohne diese Sichtbarkeit kaum hätten. Verbraucherschützer fordern inzwischen verbindliche Regeln zur Verifizierung von Bewertungen, um Manipulation wirksamer zu begrenzen, während Plattformbetreiber vor allem auf freiwillige Selbstverpflichtungen setzen.",
      aussagen: [
        { nr: 1, text: "Früher entschied vor allem Mundpropaganda im engen Bekanntenkreis über den Ruf eines Betriebs.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 2, text: "Negative Bewertungen erreichen heute meist nur wenige Menschen.", korrekt: false, hinweis: "Gegenteil: 'Reichweite... weit über die tatsächliche Kundenzahl hinaus'." },
        { nr: 3, text: "Für kleine Betriebe kann eine einzelne Bewertung existenzbedrohend sein.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Der Text sieht in Bewertungsplattformen ausschließlich Nachteile für kleine Anbieter.", korrekt: false, hinweis: "Gegenteil: 'bieten die Plattformen auch Chancen'." },
        { nr: 5, text: "Plattformbetreiber setzen laut Text vor allem auf verbindliche gesetzliche Regeln.", korrekt: false, hinweis: "Gegenteil: 'Plattformbetreiber... vor allem auf freiwillige Selbstverpflichtungen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Juristin, sucht Stelle im Bereich Verbraucherschutz und Plattformregulierung." },
        { nr: 2, text: "Datenanalyst, sucht Stelle im Bereich Betrugserkennung." },
        { nr: 3, text: "Gastronomin, sucht Beratung zum Umgang mit Onlinebewertungen." },
        { nr: 4, text: "Social-Media-Managerin, sucht Stelle bei einem lokalen Handwerksbetrieb." },
        { nr: 5, text: "Softwareentwickler, sucht Stelle in der Entwicklung von Bewertungsalgorithmen." },
        { nr: 6, text: "Psychologin, sucht Forschungsstelle zu digitalem Stress und Selbstdarstellung." },
        { nr: 7, text: "PR-Beraterin, sucht Kunden im Bereich Reputationsmanagement." },
        { nr: 8, text: "Berufseinsteiger, sucht Praktikum im Marketing." },
        { nr: 9, text: "Übersetzerin, sucht freiberufliche Aufträge." },
        { nr: 10, text: "Rechtsanwalt, sucht Spezialisierung im Wettbewerbsrecht." }
      ],
      anzeigen: [
        { id: "a", text: "Verbraucherschutzorganisation sucht Jurist/in für Plattformregulierung." },
        { id: "b", text: "Technologieunternehmen sucht Datenanalyst/in für Betrugserkennung bei Bewertungen." },
        { id: "c", text: "Beratungsagentur bietet Reputationsmanagement für Gastronomiebetriebe." },
        { id: "d", text: "Handwerksbetrieb sucht Social-Media-Managerin für lokale Sichtbarkeit." },
        { id: "e", text: "Forschungsinstitut sucht Psycholog/in zu digitalem Stress." },
        { id: "f", text: "Kanzlei sucht Rechtsanwalt/Rechtsanwältin mit Schwerpunkt Wettbewerbsrecht." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "x", 6: "e", 7: "x", 8: "x", 9: "x", 10: "f" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ eine einzige negative Bewertung kann für kleine Betriebe existenzbedrohend sein. ___(2)___ dessen bieten Plattformen auch neue Chancen für engagierte Anbieter. Verbraucherschützer fordern ___(3)___ verbindliche Regeln zur Verifizierung. Plattformbetreiber setzen ___(4)___ eher auf freiwillige Maßnahmen. Ob sich dies ___(5)___ ändern wird, bleibt abzuwarten.",
      luecken: [
        { nr: 1, o: ["Bereits", "Kaum", "Selten"], c: 0, h: "Betonung → bereits." },
        { nr: 2, o: ["Ungeachtet", "Wegen", "Trotz"], c: 0, h: "ungeachtet + Genitiv = trotz." },
        { nr: 3, o: ["nachdrücklich", "kaum", "selten"], c: 0, h: "starke Forderung → nachdrücklich." },
        { nr: 4, o: ["hingegen", "dennoch", "außerdem"], c: 0, h: "Gegensatz → hingegen." },
        { nr: 5, o: ["künftig", "damals", "früher"], c: 0, h: "Zukunft → künftig." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["zusehends", "keineswegs", "gewissermaßen", "obendrein", "letzten Endes"],
      text: "Das Vertrauen in Bewertungsportale schwindet ___(6)___. Die Plattformen sind ___(7)___ untätig, wie manche behaupten. Kleine Betriebe sind ___(8)___ auf ihren guten Ruf angewiesen. ___(9)___ profitieren auch Verbraucher von verlässlichen Bewertungen. ___(10)___ entscheidet die Qualität des Angebots über den langfristigen Erfolg.",
      loesung: { 6: "zusehends", 7: "keineswegs", 8: "gewissermaßen", 9: "obendrein", 10: "letzten Endes" }
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
        situation: "These: 'Bewertungsportale sollten gesetzlich verpflichtet werden, alle Rezensionen zu verifizieren.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Onlinebewertungen schaden kleinen Betrieben insgesamt mehr, als sie ihnen nutzen.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

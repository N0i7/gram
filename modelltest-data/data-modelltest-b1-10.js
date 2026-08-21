// ============================================================
// FLOß Modelltest B1 — Nr. 10
// Gleiches Format wie Nr. 01–09.
// ============================================================

window.MODELLTEST_B1_10 = {
  testKey: "modelltest-b1-10",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 10",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Streit um Lärm im Treppenhaus" },
        { id: 2, text: "Hausordnung wird angepasst" },
        { id: 3, text: "Mediation bei Nachbarschaftsstreit" },
        { id: 4, text: "Ruhezeiten werden strenger kontrolliert" },
        { id: 5, text: "Gemeinsamer Garten für alle Bewohner" },
        { id: 6, text: "Beschwerde über Mülltrennung" },
        { id: 7, text: "Neue Hausverwaltung stellt sich vor" },
        { id: 8, text: "Parkplatzstreit im Hinterhof" }
      ],
      texte: [
        { id: "a", text: "Mehrere Bewohner haben sich über laute Musik nach 22 Uhr beschwert. Die Hausverwaltung bittet um Rücksichtnahme auf die Ruhezeiten." },
        { id: "b", text: "Wer sich mit einem Nachbarn nicht einigen kann, kann ab sofort eine kostenlose Vermittlung in Anspruch nehmen, bevor der Streit eskaliert." },
        { id: "c", text: "Ab nächstem Monat dürfen Fahrräder nicht mehr im Treppenhaus abgestellt werden. Bitte nutzen Sie den dafür vorgesehenen Raum im Keller." },
        { id: "d", text: "Der leere Hof hinter dem Haus soll künftig gemeinsam bepflanzt werden. Interessierte Bewohner können sich beim Hausmeister melden." },
        { id: "e", text: "Immer wieder werden Parkplätze im Hinterhof von Personen genutzt, die nicht im Haus wohnen. Die Verwaltung prüft nun striktere Kontrollen." }
      ],
      loesung: { a: 4, b: 3, c: 2, d: 5, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Nachbarschaftsstreitigkeiten gehören zu den häufigsten zivilrechtlichen Konflikten in Deutschland. Häufigste Streitpunkte sind Lärmbelästigung, unklare Zuständigkeiten bei der Gartenpflege sowie Meinungsverschiedenheiten über die Nutzung gemeinsamer Flächen wie Treppenhaus oder Hof. Viele dieser Konflikte eskalieren, weil die Beteiligten von Anfang an über Anwälte oder Behörden kommunizieren, statt das direkte Gespräch zu suchen. Mediationsstellen berichten, dass ein Großteil der Streitfälle bereits durch ein einziges moderiertes Gespräch entschärft werden kann. Fachleute empfehlen deshalb, bei ersten Anzeichen eines Konflikts frühzeitig das persönliche Gespräch zu suchen, statt zu warten, bis sich die Situation verhärtet. Hausverwaltungen spielen dabei häufig eine vermittelnde Rolle, auch wenn sie formal nicht zur Streitschlichtung verpflichtet sind.",
      aussagen: [
        { nr: 1, text: "Nachbarschaftsstreitigkeiten sind in Deutschland selten.", korrekt: false, hinweis: "Gegenteil: 'zu den häufigsten... Konflikten'." },
        { nr: 2, text: "Lärmbelästigung gehört zu den häufigsten Streitpunkten.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Viele Konflikte eskalieren, weil sofort Anwälte eingeschaltet werden.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Mediation hilft laut Text selten bei der Konfliktlösung.", korrekt: false, hinweis: "Gegenteil: 'ein Großteil... kann bereits... entschärft werden'." },
        { nr: 5, text: "Hausverwaltungen sind gesetzlich zur Streitschlichtung verpflichtet.", korrekt: false, hinweis: "Gegenteil: 'formal nicht dazu verpflichtet'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie haben Streit mit einem Nachbarn und möchten vermitteln lassen." },
        { nr: 2, text: "Sie fühlen sich durch laute Musik gestört." },
        { nr: 3, text: "Sie möchten im Garten mitmachen." },
        { nr: 4, text: "Sie haben Probleme mit Ihrem Parkplatz." },
        { nr: 5, text: "Sie möchten Ihr Fahrrad im Keller abstellen." },
        { nr: 6, text: "Sie möchten die Hausverwaltung kontaktieren." },
        { nr: 7, text: "Sie möchten einen Anwalt für Mietrecht." },
        { nr: 8, text: "Sie möchten in eine andere Wohnung ziehen." },
        { nr: 9, text: "Sie suchen einen Handwerker." },
        { nr: 10, text: "Sie möchten sich über Nebenkosten informieren." }
      ],
      anzeigen: [
        { id: "a", text: "Kostenlose Mediation bei Nachbarschaftsstreit, Terminvereinbarung im Büro." },
        { id: "b", text: "Hausverwaltung bittet um Einhaltung der Ruhezeiten nach 22 Uhr." },
        { id: "c", text: "Gemeinschaftsgarten im Hinterhof: Anmeldung beim Hausmeister." },
        { id: "d", text: "Neue Parkplatzregelung: Kontrollen ab nächstem Monat." },
        { id: "e", text: "Fahrradraum im Keller ab sofort nutzbar." },
        { id: "f", text: "Sprechzeiten der Hausverwaltung: dienstags und donnerstags." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Sehr geehrte Hausverwaltung, ich schreibe Ihnen, ___(1)___ es in letzter Zeit häufig zu Lärm im Treppenhaus kommt. ___(2)___ ich schon mehrmals mit dem Nachbarn gesprochen habe, hat sich nichts geändert. Könnten Sie bitte vermitteln, ___(3)___ sich die Situation nicht weiter verschlechtert? Ich wäre Ihnen sehr dankbar, ___(4)___ Sie sich der Sache annehmen könnten. Für Rückfragen stehe ich ___(5)___ Verfügung.",
      luecken: [
        { nr: 1, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." },
        { nr: 2, o: ["Obwohl", "Weil", "Damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 3, o: ["damit", "weil", "obwohl"], c: 0, h: "Zweck → damit." },
        { nr: 4, o: ["wenn", "ob", "dass"], c: 0, h: "höflich, Bedingung → wenn." },
        { nr: 5, o: ["zur", "zum", "zu der"], c: 0, h: "zur Verfügung (feste Wendung)." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["gegenseitig", "rücksichtsvoll", "frühzeitig", "gemeinsam", "unnötig"],
      text: "Ein friedliches Zusammenleben gelingt nur, wenn alle ___(6)___ Rücksicht nehmen. Es lohnt sich, Konflikte ___(7)___ anzusprechen, statt zu warten. Man sollte ___(8)___ sein, besonders bei Lärm. Viele Probleme lassen sich ___(9)___ lösen, wenn man miteinander spricht. So wird ___(10)___er Streit vermieden.",
      loesung: { 6: "gegenseitig", 7: "frühzeitig", 8: "rücksichtsvoll", 9: "gemeinsam", 10: "unnötig" }
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
        situation: "Sie haben Ärger mit einem Nachbarn wegen Lärm. Sie schreiben eine freundliche Nachricht an ihn.",
        punkte: ["Beschreiben Sie das Problem höflich.", "Erklären Sie, warum es Sie stört.", "Schlagen Sie eine Lösung vor."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an die Hausverwaltung wegen eines Nachbarschaftskonflikts.",
        punkte: ["Beschreiben Sie den Konflikt kurz.", "Erklären Sie, was Sie schon versucht haben.", "Bitten Sie um Unterstützung."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

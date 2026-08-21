// ============================================================
// FLOß Modelltest B1 — Nr. 04
// Gleiches Format wie Nr. 01–03.
// ============================================================

window.MODELLTEST_B1_04 = {
  testKey: "modelltest-b1-04",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 4",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neue Regelung für Elternzeit" },
        { id: 2, text: "Stadtverwaltung digitalisiert Anträge" },
        { id: 3, text: "Warnstreik im Nahverkehr" },
        { id: 4, text: "Sprachschule feiert Jubiläum" },
        { id: 5, text: "Neue Öffnungszeiten im Bürgeramt" },
        { id: 6, text: "Förderprogramm für Existenzgründer" },
        { id: 7, text: "Kostenlose Nachhilfe für Grundschüler" },
        { id: 8, text: "Achtung: Falsche Handwerker unterwegs" }
      ],
      texte: [
        { id: "a", text: "Ab kommendem Monat können viele Anträge, etwa für Wohngeld oder Kindergeld, bequem online gestellt werden. Ein Behördengang ist dafür nicht mehr nötig." },
        { id: "b", text: "Am Donnerstag legen die Fahrer von Bus und Bahn für mehrere Stunden die Arbeit nieder. Pendler sollten sich auf Ausfälle einstellen und Alternativen einplanen." },
        { id: "c", text: "Wer ein eigenes Unternehmen gründen möchte, kann ab sofort einen zinsgünstigen Kredit sowie kostenlose Beratung in Anspruch nehmen. Die Antragsfrist läuft bis Jahresende." },
        { id: "d", text: "In den letzten Wochen klingelten mehrfach Personen an der Tür, die angeblich im Auftrag des Energieversorgers Reparaturen durchführen wollten. Bewohner sollten sich stets einen Ausweis zeigen lassen." },
        { id: "e", text: "Das Amt ist künftig auch samstagvormittags geöffnet, um Berufstätigen mehr Flexibilität zu bieten. Termine können weiterhin online vereinbart werden." }
      ],
      loesung: { a: 2, b: 3, c: 6, d: 8, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Immer mehr junge Menschen entscheiden sich bewusst gegen den klassischen Karriereweg und stattdessen für eine berufliche Ausbildung im Handwerk. Lange Zeit galt ein Studium als der sicherere Weg zu einem guten Einkommen, doch das Blatt hat sich gewendet: Fachkräfte im Handwerk sind gefragt wie nie, und viele Betriebe zahlen inzwischen Gehälter, die mit denen mancher akademischer Berufe konkurrieren können. Hinzu kommt, dass eine Ausbildung deutlich kürzer dauert als ein Studium und man von Anfang an Geld verdient, statt Studiengebühren oder Lebenshaltungskosten ohne eigenes Einkommen zu stemmen. Experten warnen allerdings davor, das Handwerk zu romantisieren: Der Arbeitsalltag ist oft körperlich anstrengend, und nicht jeder Betrieb bietet gute Arbeitsbedingungen.",
      aussagen: [
        { nr: 1, text: "Immer mehr junge Menschen wählen bewusst eine Ausbildung im Handwerk.", korrekt: true, hinweis: "Steht direkt im ersten Satz." },
        { nr: 2, text: "Ein Studium galt schon immer als weniger sicher als eine Ausbildung.", korrekt: false, hinweis: "Gegenteil: 'lange Zeit galt ein Studium als sicherer'." },
        { nr: 3, text: "Handwerksbetriebe zahlen inzwischen teilweise konkurrenzfähige Gehälter.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Eine Ausbildung dauert laut Text länger als ein Studium.", korrekt: false, hinweis: "Gegenteil: 'deutlich kürzer'." },
        { nr: 5, text: "Der Text warnt davor, das Handwerk zu idealisieren.", korrekt: true, hinweis: "'Experten warnen... das Handwerk zu romantisieren'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich selbstständig machen und brauchen einen Kredit." },
        { nr: 2, text: "Sie suchen eine Ausbildungsstelle als Tischler." },
        { nr: 3, text: "Sie brauchen eine Übersetzung für ein Bewerbungsschreiben." },
        { nr: 4, text: "Sie möchten Ihr Deutsch für den Beruf verbessern." },
        { nr: 5, text: "Sie suchen einen Termin beim Bürgeramt am Wochenende." },
        { nr: 6, text: "Sie möchten einen Praktikumsplatz in der Verwaltung." },
        { nr: 7, text: "Sie brauchen Hilfe beim Ausfüllen eines Kreditantrags." },
        { nr: 8, text: "Sie suchen eine Wohnung mit Garten." },
        { nr: 9, text: "Sie möchten eine Sprachschule besuchen, die auf Berufe spezialisiert ist." },
        { nr: 10, text: "Sie suchen einen Handwerksbetrieb für eine Küchenrenovierung." }
      ],
      anzeigen: [
        { id: "a", text: "Existenzgründerberatung: kostenlose Erstberatung, Antrag auf Förderkredit bis Jahresende." },
        { id: "b", text: "Tischlerei sucht Auszubildende, Ausbildungsstart im September." },
        { id: "c", text: "Berufssprachkurs Deutsch B1–B2, spezialisiert auf Pflege- und Handwerksberufe." },
        { id: "d", text: "Bürgeramt: neue Öffnungszeiten, jetzt auch samstags von 9 bis 12 Uhr." },
        { id: "e", text: "Übersetzungsbüro: beglaubigte Übersetzungen von Zeugnissen und Bewerbungsunterlagen." },
        { id: "f", text: "Renovierungsbetrieb: Küchen, Bäder, alles aus einer Hand." }
      ],
      loesung: { 1: "a", 2: "b", 3: "e", 4: "c", 5: "d", 6: "x", 7: "a", 8: "x", 9: "c", 10: "f" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Sehr geehrte Frau Klein, ___(1)___ Ihres Schreibens vom 3. August melde ich mich, ___(2)___ ich noch offene Fragen zu meiner Anmeldung habe. Könnten Sie mir bitte mitteilen, ___(3)___ die Unterlagen vollständig sind. Außerdem wüsste ich gerne, ___(4)___ mit einer Antwort zu rechnen ist. Für eine kurze Rückmeldung ___(5)___ ich sehr dankbar.",
      luecken: [
        { nr: 1, o: ["Bezüglich", "Wegen", "Trotz"], c: 0, h: "formell, Bezug nehmen auf → bezüglich + Genitiv." },
        { nr: 2, o: ["obwohl", "da", "denn"], c: 1, h: "'da' passt formell und mittig im Satz." },
        { nr: 3, o: ["ob", "dass", "wenn"], c: 0, h: "indirekte Frage → ob." },
        { nr: 4, o: ["wann", "wenn", "als"], c: 0, h: "Frage nach Zeitpunkt → wann." },
        { nr: 5, o: ["wäre", "bin", "war"], c: 0, h: "höflich, Konjunktiv II → wäre." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["einerseits", "andererseits", "zwar", "aber", "immerhin"],
      text: "Die neue Regelung ist ___(6)___ gut gemeint, ___(7)___ in der Praxis schwer umzusetzen. ___(8)___ profitieren kleine Betriebe von der Förderung, ___(9)___ steigt der bürokratische Aufwand. ___(10)___ zeigt die erste Bilanz, dass mehr Unternehmen gegründet wurden als im Vorjahr.",
      loesung: { 6: "zwar", 7: "aber", 8: "einerseits", 9: "andererseits", 10: "immerhin" }
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
        situation: "Ein Freund / eine Freundin überlegt, eine Ausbildung im Handwerk zu beginnen, und fragt Sie um Rat.",
        punkte: ["Sagen Sie, was Sie von der Idee halten.", "Nennen Sie einen Vorteil und einen Nachteil einer Ausbildung.", "Wünschen Sie viel Erfolg bei der Entscheidung."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an das Bürgeramt, weil Sie einen Termin verschieben möchten.",
        punkte: ["Nennen Sie Ihren bisherigen Termin.", "Erklären Sie kurz den Grund für die Verschiebung.", "Bitten Sie um einen neuen Termin."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

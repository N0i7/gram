// ============================================================
// FLOß Modelltest B2 — Nr. 15
// Gleiches Format wie Nr. 01–14.
// ============================================================

window.MODELLTEST_B2_15 = {
  testKey: "modelltest-b2-15",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 15",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Vielfalt als wirtschaftlicher Vorteil" },
        { id: 2, text: "Sprachbarrieren im internationalen Team" },
        { id: 3, text: "Diversität in Führungspositionen" },
        { id: 4, text: "Interkulturelle Konflikte am Arbeitsplatz" },
        { id: 5, text: "Vorurteile erschweren Zusammenarbeit" },
        { id: 6, text: "Diversity-Schulungen als Standard" },
        { id: 7, text: "Unterschiedliche Feiertage berücksichtigen" },
        { id: 8, text: "Rekrutierung internationaler Fachkräfte" }
      ],
      texte: [
        { id: "a", text: "Studien belegen wiederholt, dass Unternehmen mit kultureller Vielfalt in der Belegschaft häufig wirtschaftlich erfolgreicher agieren." },
        { id: "b", text: "Trotz gemeinsamer Arbeitssprache kann es in internationalen Teams zu Missverständnissen kommen, wenn Nuancen nicht richtig verstanden werden." },
        { id: "c", text: "Immer mehr Unternehmen führen verpflichtende Schulungen ein, um Beschäftigte für kulturelle Unterschiede zu sensibilisieren." },
        { id: "d", text: "Unbewusste Vorurteile gegenüber Kolleginnen und Kollegen aus anderen Kulturen können die Zusammenarbeit erheblich erschweren." },
        { id: "e", text: "Angesichts des Fachkräftemangels setzen viele Unternehmen verstärkt auf die gezielte Anwerbung internationaler Fachkräfte." }
      ],
      loesung: { a: 1, b: 2, c: 6, d: 5, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Kulturelle Vielfalt am Arbeitsplatz wird von vielen Unternehmen zunehmend als strategischer Vorteil wahrgenommen, da unterschiedliche Perspektiven häufig zu kreativeren Lösungen führen. Gleichzeitig bringt diese Vielfalt auch Herausforderungen mit sich, etwa wenn unterschiedliche Kommunikationsstile oder Werte aufeinandertreffen. Ohne bewusste Auseinandersetzung mit diesen Unterschieden können Missverständnisse entstehen, die das Arbeitsklima belasten. Personalabteilungen setzen deshalb verstärkt auf Diversity-Trainings, um Beschäftigte für kulturelle Besonderheiten zu sensibilisieren und Vorurteile abzubauen. Kritiker solcher Programme bemängeln allerdings, dass oberflächliche Schulungen allein nicht ausreichen, um tiefsitzende Vorurteile nachhaltig zu verändern. Entscheidend sei vielmehr eine Unternehmenskultur, die Vielfalt authentisch lebt, statt sie nur symbolisch zu propagieren.",
      aussagen: [
        { nr: 1, text: "Kulturelle Vielfalt wird von Unternehmen zunehmend als strategischer Vorteil gesehen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Kulturelle Vielfalt bringt laut Text keinerlei Herausforderungen mit sich.", korrekt: false, hinweis: "Gegenteil: 'bringt diese Vielfalt auch Herausforderungen mit sich'." },
        { nr: 3, text: "Personalabteilungen setzen verstärkt auf Diversity-Trainings.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Kritiker sehen oberflächliche Schulungen als ausreichende Lösung.", korrekt: false, hinweis: "Gegenteil: 'oberflächliche Schulungen allein nicht ausreichen'." },
        { nr: 5, text: "Eine authentisch gelebte Unternehmenskultur wird als entscheidend beschrieben.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Diversity-Managerin, sucht Stelle in einem internationalen Konzern." },
        { nr: 2, text: "Trainer, sucht Aufträge für interkulturelle Schulungen." },
        { nr: 3, text: "Personalberaterin, sucht Projekt zu internationaler Rekrutierung." },
        { nr: 4, text: "Psychologe, sucht Forschungsstelle zu Vorurteilen am Arbeitsplatz." },
        { nr: 5, text: "Übersetzerin, sucht Aufträge für Unternehmenskommunikation." },
        { nr: 6, text: "HR-Consultant, sucht Stelle mit Fokus auf Diversity-Strategie." },
        { nr: 7, text: "Journalistin, sucht Recherchethemen zu Vielfalt am Arbeitsplatz." },
        { nr: 8, text: "Grafikdesigner, sucht freiberufliche Projekte." },
        { nr: 9, text: "Buchhalterin, sucht Vollzeitstelle." },
        { nr: 10, text: "Ingenieur, sucht Stelle im Maschinenbau." }
      ],
      anzeigen: [
        { id: "a", text: "Internationaler Konzern sucht Diversity-Manager/in." },
        { id: "b", text: "Firma sucht Trainer/in für interkulturelle Schulungen." },
        { id: "c", text: "Personalberatung sucht Berater/in für internationale Rekrutierung." },
        { id: "d", text: "Forschungsinstitut sucht Psycholog/in zu Vorurteilen am Arbeitsplatz." },
        { id: "e", text: "Unternehmen sucht Übersetzer/in für interne Kommunikation." },
        { id: "f", text: "Beratungsfirma sucht HR-Consultant/in für Diversity-Strategie." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ Unternehmen zunehmend international agieren, gewinnt kulturelle Vielfalt an Bedeutung. ___(2)___ unterschiedliche Perspektiven zu kreativeren Lösungen führen, entstehen auch Herausforderungen. ___(3)___ dieser Schwierigkeiten investieren viele Firmen in Diversity-Trainings. Wichtig ist, ___(4)___ Vielfalt authentisch gelebt wird. Nur so lässt sich vermeiden, ___(5)___ Vorurteile bestehen bleiben.",
      luecken: [
        { nr: 1, o: ["Da", "Obwohl", "Damit"], c: 0, h: "Grund → da." },
        { nr: 2, o: ["Obwohl", "Weil", "Damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 3, o: ["Wegen", "Trotz", "Anstelle"], c: 0, h: "Grund → wegen + Genitiv (vgl. 'deshalb' im Ausgangstext)." },
        { nr: 4, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'wichtig ist' → dass." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'vermeiden' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["zunehmend", "keineswegs", "vielmehr", "authentisch", "oberflächlich"],
      text: "Kulturelle Vielfalt wird ___(6)___ als Vorteil wahrgenommen. Eine schnelle Lösung ist ___(7)___ ausreichend. Es geht ___(8)___ um echtes Verständnis. Manche Schulungen bleiben leider ___(9)___. Wichtig ist eine ___(10)___ gelebte Unternehmenskultur.",
      loesung: { 6: "zunehmend", 7: "keineswegs", 8: "vielmehr", 9: "oberflächlich", 10: "authentisch" }
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
        situation: "These: 'Diversity-Trainings sollten für alle Beschäftigten verpflichtend sein.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Kulturelle Vielfalt bringt mehr Vorteile als Herausforderungen für Unternehmen.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

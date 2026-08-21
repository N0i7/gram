// ============================================================
// FLOß Modelltest B1 — Nr. 20
// Gleiches Format wie Nr. 01–19.
// ============================================================

window.MODELLTEST_B1_20 = {
  testKey: "modelltest-b1-20",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 20",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Väter nehmen häufiger Elternzeit" },
        { id: 2, text: "Vorurteile gegenüber Vätern in Elternzeit" },
        { id: 3, text: "Finanzielle Einbußen während der Elternzeit" },
        { id: 4, text: "Elternzeit im Beruf offen ansprechen" },
        { id: 5, text: "Väter berichten von positiven Erfahrungen" },
        { id: 6, text: "Elternzeit nur für wenige Wochen" },
        { id: 7, text: "Unternehmen fördern Väter-Elternzeit" },
        { id: 8, text: "Betreuung durch Großeltern" }
      ],
      texte: [
        { id: "a", text: "Immer mehr Väter entscheiden sich dafür, gemeinsam mit der Mutter oder allein Elternzeit zu nehmen." },
        { id: "b", text: "Manche Väter berichten, dass Kollegen ihre Entscheidung zur Elternzeit zunächst nicht ernst genommen haben." },
        { id: "c", text: "Wer Elternzeit nimmt, muss oft mit einem geringeren Einkommen während dieser Zeit rechnen." },
        { id: "d", text: "Manche Unternehmen bieten inzwischen gezielte Programme an, um Väter bei der Elternzeit zu unterstützen." },
        { id: "e", text: "Viele Väter erzählen, dass die Zeit mit dem Kind sie näher an die Familie gebracht hat." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 7, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Als ich meinem Chef mitgeteilt habe, dass ich vier Monate Elternzeit nehmen möchte, war er zunächst überrascht, weil das in unserer Firma noch nicht üblich war. Ich hatte ein wenig Angst, dass sich das negativ auf meine Karriere auswirken könnte. Letztendlich hat mein Chef die Entscheidung aber respektiert und mein Team hat sich gut organisiert, während ich weg war. Die Zeit mit meinem Sohn war für mich sehr wertvoll, weil ich vieles von seinem ersten Lebensjahr miterleben konnte. Finanziell mussten wir zwar etwas kürzertreten, aber das war es uns wert. Ich würde jedem Vater empfehlen, diese Möglichkeit zu nutzen.",
      aussagen: [
        { nr: 1, text: "Der Chef war zunächst überrascht über die Elternzeit-Ankündigung.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person hatte überhaupt keine Sorgen wegen der Karriere.", korrekt: false, hinweis: "Gegenteil: 'ich hatte ein wenig Angst'." },
        { nr: 3, text: "Der Chef hat die Entscheidung letztendlich respektiert.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Familie hatte finanziell keine Einbußen.", korrekt: false, hinweis: "Gegenteil: 'finanziell mussten wir... kürzertreten'." },
        { nr: 5, text: "Die Person würde anderen Vätern nicht empfehlen, Elternzeit zu nehmen.", korrekt: false, hinweis: "Gegenteil: 'würde jedem Vater empfehlen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten Elternzeit als Vater nehmen." },
        { nr: 2, text: "Sie brauchen Informationen zu finanziellen Auswirkungen." },
        { nr: 3, text: "Ihre Firma unterstützt Väter bei der Elternzeit." },
        { nr: 4, text: "Sie möchten Erfahrungsberichte von anderen Vätern lesen." },
        { nr: 5, text: "Sie möchten Ihren Chef über die Elternzeit informieren." },
        { nr: 6, text: "Sie suchen eine Kinderbetreuung während der Elternzeit." },
        { nr: 7, text: "Sie möchten früher in den Ruhestand gehen." },
        { nr: 8, text: "Sie suchen eine Nanny." },
        { nr: 9, text: "Sie möchten sich scheiden lassen." },
        { nr: 10, text: "Sie suchen eine Kita mit Ganztagsbetreuung." }
      ],
      anzeigen: [
        { id: "a", text: "Beratung: Elternzeit für Väter beantragen." },
        { id: "b", text: "Finanzberatung: Elterngeld und Einkommen während Elternzeit." },
        { id: "c", text: "Unternehmen mit Väter-Elternzeit-Programm." },
        { id: "d", text: "Erfahrungsberichte: Väter erzählen von der Elternzeit." },
        { id: "e", text: "Vorlage: Gespräch mit dem Chef über Elternzeit vorbereiten." },
        { id: "f", text: "Kinderbetreuung während der Elternzeit organisieren." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Als ich meinem Chef mitgeteilt habe, dass ich Elternzeit nehmen möchte, ___(1)___ er zunächst überrascht. Ich ___(2)___ ein wenig Angst, dass sich das negativ auswirken könnte. Letztendlich ___(3)___ mein Chef die Entscheidung respektiert. Die Zeit mit meinem Sohn war wertvoll, ___(4)___ ich vieles von seinem ersten Lebensjahr miterleben konnte. Ich würde jedem Vater empfehlen, diese Möglichkeit zu ___(5)___.",
      luecken: [
        { nr: 1, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 2, o: ["hatte", "habe", "hätte"], c: 0, h: "Präteritum → hatte." },
        { nr: 3, o: ["hat", "ist", "war"], c: 0, h: "der Chef → hat." },
        { nr: 4, o: ["weil", "obwohl", "damit"], c: 0, h: "Grund → weil." },
        { nr: 5, o: ["nutzen", "genutzt", "nutzt"], c: 0, h: "würde + Infinitiv → nutzen." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Elternzeit", "wertvoll", "kürzertreten", "respektiert", "überrascht"],
      text: "Immer mehr Väter nehmen ___(6)___. Der Chef war zunächst ___(7)___. Am Ende hat er die Entscheidung ___(8)___. Finanziell musste die Familie etwas ___(9)___. Die Zeit mit dem Kind war sehr ___(10)___.",
      loesung: { 6: "Elternzeit", 7: "überrascht", 8: "respektiert", 9: "kürzertreten", 10: "wertvoll" }
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
        situation: "Ein Freund / eine Freundin überlegt, als Vater Elternzeit zu nehmen. Sie schreiben eine Nachricht.",
        punkte: ["Zeigen Sie Verständnis für die Überlegung.", "Berichten Sie von eigenen Erfahrungen oder was Sie gehört haben.", "Ermutigen Sie die Person."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an Ihren Arbeitgeber, um Elternzeit als Vater zu beantragen.",
        punkte: ["Kündigen Sie Ihre Elternzeit an.", "Nennen Sie den geplanten Zeitraum.", "Fragen Sie nach der Organisation während Ihrer Abwesenheit."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

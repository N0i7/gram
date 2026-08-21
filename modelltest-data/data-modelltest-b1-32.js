// ============================================================
// FLOß Modelltest B1 — Nr. 32
// Gleiches Format wie Nr. 01–31.
// ============================================================

window.MODELLTEST_B1_32 = {
  testKey: "modelltest-b1-32",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 32",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Streit mit dem Nachbarn schlichten" },
        { id: 2, text: "Neutraler Vermittler hilft weiter" },
        { id: 3, text: "Lärm als häufiger Streitgrund" },
        { id: 4, text: "Gespräch statt Anwalt" },
        { id: 5, text: "Konflikt eskaliert" },
        { id: 6, text: "Mediation kostet nichts" },
        { id: 7, text: "Schriftliche Beschwerde einreichen" },
        { id: 8, text: "Umzug wegen Streit" }
      ],
      texte: [
        { id: "a", text: "Bei Nachbarschaftsstreit hilft oft ein neutraler Vermittler, eine Lösung zu finden." },
        { id: "b", text: "Lärm ist einer der häufigsten Gründe für Streit zwischen Nachbarn." },
        { id: "c", text: "Viele Konflikte lassen sich durch ein offenes Gespräch klären, bevor ein Anwalt eingeschaltet wird." },
        { id: "d", text: "In manchen Städten bieten Mediationsstellen ihre Hilfe kostenlos an." },
        { id: "e", text: "Wenn ein Gespräch nicht hilft, kann eine Mediation die nächste Möglichkeit sein." }
      ],
      loesung: { a: 2, b: 3, c: 4, d: 6, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Nachbarschaftskonflikte gehören zum Alltag vieler Menschen, besonders in dicht besiedelten Wohngebieten. Häufige Streitpunkte sind Lärm, Gerüche oder die Nutzung gemeinsamer Flächen. Statt sofort einen Anwalt einzuschalten, empfehlen Experten zunächst das direkte Gespräch mit dem Nachbarn zu suchen. Führt dieses Gespräch zu keiner Lösung, kann eine Mediation helfen. Dabei unterstützt eine neutrale Person beide Seiten dabei, eine gemeinsame Lösung zu finden. In vielen Städten wird diese Mediation sogar kostenlos angeboten. Nur wenn auch die Mediation scheitert, sollte der rechtliche Weg in Betracht gezogen werden.",
      aussagen: [
        { nr: 1, text: "Lärm ist ein häufiger Streitpunkt zwischen Nachbarn.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 2, text: "Experten empfehlen sofort einen Anwalt einzuschalten.", korrekt: false, hinweis: "Gegenteil: 'Statt sofort einen Anwalt einzuschalten'." },
        { nr: 3, text: "Bei einer Mediation unterstützt eine neutrale Person.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Mediation ist in vielen Städten immer kostenpflichtig.", korrekt: false, hinweis: "Gegenteil: 'wird diese Mediation sogar kostenlos angeboten'." },
        { nr: 5, text: "Der rechtliche Weg sollte immer der erste Schritt sein.", korrekt: false, hinweis: "Gegenteil: 'Nur wenn auch die Mediation scheitert'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten eine Mediation zwischen Ihnen und Ihrem Nachbarn." },
        { nr: 2, text: "Sie suchen Informationen über häufige Streitgründe." },
        { nr: 3, text: "Sie möchten ein Schlichtungsgespräch führen." },
        { nr: 4, text: "Sie suchen eine kostenlose Beratungsstelle." },
        { nr: 5, text: "Sie möchten sich über Ihre Rechte als Mieter informieren." },
        { nr: 6, text: "Sie suchen einen Anwalt für Mietrecht." },
        { nr: 7, text: "Sie möchten umziehen." },
        { nr: 8, text: "Sie suchen ein Umzugsunternehmen." },
        { nr: 9, text: "Sie möchten einen Handwerker beauftragen." },
        { nr: 10, text: "Sie suchen eine neue Wohnung." }
      ],
      anzeigen: [
        { id: "a", text: "Mediationsstelle für Nachbarschaftskonflikte." },
        { id: "b", text: "Ratgeber: Häufige Streitgründe unter Nachbarn." },
        { id: "c", text: "Kurs: Schlichtungsgespräche führen." },
        { id: "d", text: "Kostenlose Beratung bei Nachbarschaftsstreit." },
        { id: "e", text: "Mieterrechte — Informationsabend." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "f", 8: "f", 9: "f", 10: "f" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Nachbarschaftskonflikte gehören zum Alltag, ___(1)___ viele Menschen in dicht besiedelten Gebieten wohnen. Statt einen Anwalt einzuschalten, sollte man zuerst das Gespräch suchen, ___(2)___ eine Lösung gefunden werden kann. Führt dieses Gespräch zu keiner Lösung, ___(3)___ eine Mediation helfen. Dabei unterstützt eine Person, ___(4)___ neutral ist, beide Seiten. Nur wenn auch die Mediation scheitert, ___(5)___ der rechtliche Weg sinnvoll sein.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["damit", "dass", "ob"], c: 0, h: "Finalsatz → damit." },
        { nr: 3, o: ["kann", "muss", "soll"], c: 0, h: "Möglichkeit → kann." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Person' (feminin) → die." },
        { nr: 5, o: ["kann", "muss", "darf"], c: 0, h: "Möglichkeit → kann." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Nachbarschaftskonflikte", "Mediation", "Vermittler", "kostenlos", "Streitpunkte"],
      text: "___(6)___ gehören zum Alltag vieler Menschen. Häufige ___(7)___ sind Lärm und Gerüche. Eine ___(8)___ kann helfen, eine Lösung zu finden. Dabei hilft ein neutraler ___(9)___. In vielen Städten ist diese Hilfe ___(10)___.",
      loesung: { 6: "Nachbarschaftskonflikte", 7: "Streitpunkte", 8: "Mediation", 9: "Vermittler", 10: "kostenlos" }
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
        situation: "Sie haben einen Streit mit Ihrem Nachbarn durch ein Gespräch gelöst. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Beschreiben Sie den Streit.", "Berichten Sie, wie Sie das Problem gelöst haben.", "Geben Sie einen Tipp für ähnliche Situationen."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an eine Mediationsstelle, weil Sie Hilfe bei einem Nachbarschaftskonflikt brauchen.",
        punkte: ["Beschreiben Sie den Konflikt.", "Fragen Sie nach dem Ablauf einer Mediation.", "Fragen Sie nach den Kosten."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

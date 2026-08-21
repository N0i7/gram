// ============================================================
// FLOß Modelltest B2 — Nr. 40 (LETZTER TEST — ALLE 160 MODELLTESTS KOMPLETT!)
// Gleiches Format wie Nr. 01–39.
// ============================================================

window.MODELLTEST_B2_40 = {
  testKey: "modelltest-b2-40",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 40",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Sabbatical als Auszeit vom Beruf" },
        { id: 2, text: "Finanzielle Planung eines Sabbaticals" },
        { id: 3, text: "Rückkehr in den Beruf nach der Auszeit" },
        { id: 4, text: "Karriererisiken durch ein Sabbatical" },
        { id: 5, text: "Persönliche Weiterentwicklung während der Auszeit" },
        { id: 6, text: "Sabbatical-Modelle in Unternehmen" },
        { id: 7, text: "Ablehnung von Sabbatical-Anträgen" },
        { id: 8, text: "Sabbatical im Ausland verbringen" }
      ],
      texte: [
        { id: "a", text: "Ein Sabbatical bietet Berufstätigen die Möglichkeit einer längeren Auszeit vom Arbeitsalltag." },
        { id: "b", text: "Wer ein Sabbatical plant, sollte die finanziellen Folgen frühzeitig durchrechnen." },
        { id: "c", text: "Nach der Rückkehr berichten viele von einem holprigen Wiedereinstieg in den Beruf." },
        { id: "d", text: "Manche befürchten, durch die Auszeit beruflich den Anschluss zu verlieren." },
        { id: "e", text: "Viele nutzen die Zeit auch zur persönlichen Weiterentwicklung, etwa durch Reisen oder Weiterbildung." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Ein Sabbatical, also eine längere berufliche Auszeit, wird für immer mehr Berufstätige zu einer attraktiven Option. Wer ein solches Sabbatical plant, sollte die finanziellen Konsequenzen jedoch frühzeitig durchrechnen, da das Einkommen während dieser Zeit meist ausbleibt oder deutlich reduziert ist. Viele nutzen die gewonnene Zeit zur persönlichen Weiterentwicklung, sei es durch Reisen, Weiterbildung oder ehrenamtliches Engagement. Nicht wenige berichten allerdings auch von einem holprigen Wiedereinstieg in den Beruf nach ihrer Rückkehr. Manche Arbeitgeber bieten inzwischen strukturierte Sabbatical-Modelle an, die sowohl den Beschäftigten als auch dem Unternehmen Planungssicherheit geben.",
      aussagen: [
        { nr: 1, text: "Ein Sabbatical wird für immer mehr Menschen attraktiv.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Das Einkommen bleibt während des Sabbaticals meist unverändert.", korrekt: false, hinweis: "Gegenteil: 'das Einkommen... meist ausbleibt oder deutlich reduziert ist'." },
        { nr: 3, text: "Viele nutzen die Zeit zur persönlichen Weiterentwicklung.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Der Wiedereinstieg gelingt immer problemlos.", korrekt: false, hinweis: "Gegenteil: 'berichten... von einem holprigen Wiedereinstieg'." },
        { nr: 5, text: "Kein Arbeitgeber bietet strukturierte Sabbatical-Modelle an.", korrekt: false, hinweis: "Gegenteil: 'bieten... strukturierte Sabbatical-Modelle an'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "HR-Beraterin für Sabbatical-Modelle in Unternehmen." },
        { nr: 2, text: "Finanzberater für die Planung von Auszeiten." },
        { nr: 3, text: "Coach für den beruflichen Wiedereinstieg nach dem Sabbatical." },
        { nr: 4, text: "Reiseberaterin für längere Auszeiten im Ausland." },
        { nr: 5, text: "Karriereberaterin für Angestellte vor einem Sabbatical." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 10, text: "Journalistin, sucht Redaktionsstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Unternehmen sucht HR-Beraterin für Sabbatical-Modelle." },
        { id: "b", text: "Beratungsfirma sucht Finanzberater/in für Auszeiten." },
        { id: "c", text: "Coaching-Institut sucht Berater/in für Wiedereinstieg." },
        { id: "d", text: "Reisebüro sucht Berater/in für Langzeitreisen." },
        { id: "e", text: "Beratungsstelle sucht Karriereberater/in." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ein Sabbatical wird für immer mehr Berufstätige attraktiv, ___(1)___ es eine längere Auszeit ermöglicht. Wer eine Auszeit plant, ___(2)___ die finanziellen Folgen durchrechnen. Viele nutzen die Zeit, ___(3)___ sich persönlich weiterzuentwickeln. Der Wiedereinstieg, ___(4)___ manchen schwerfällt, erfordert oft Geduld. Manche Arbeitgeber, ___(5)___ strukturierte Modelle anbieten, schaffen Planungssicherheit.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["sollte", "müsste", "könnte"], c: 0, h: "Empfehlung → sollte." },
        { nr: 3, o: ["um", "damit", "dass"], c: 0, h: "'um... zu' + Infinitiv." },
        { nr: 4, o: ["der", "die", "das"], c: 0, h: "Relativpronomen Nominativ bezogen auf 'Wiedereinstieg' (maskulin) → der." },
        { nr: 5, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Arbeitgeber' (Plural) → die." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Sabbatical", "finanziellen", "Weiterentwicklung", "Wiedereinstieg", "Planungssicherheit"],
      text: "Ein ___(6)___ ermöglicht eine längere berufliche Auszeit. Wichtig ist, die ___(7)___ Folgen zu bedenken. Viele nutzen die Zeit zur persönlichen ___(8)___. Der ___(9)___ in den Beruf gelingt nicht immer leicht. Strukturierte Modelle geben Unternehmen und Beschäftigten ___(10)___.",
      loesung: { 6: "Sabbatical", 7: "finanziellen", 8: "Weiterentwicklung", 9: "Wiedereinstieg", 10: "Planungssicherheit" }
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
        situation: "These: 'Jeder Arbeitnehmer sollte einen gesetzlichen Anspruch auf ein Sabbatical haben.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Eine längere berufliche Auszeit schadet der Karriere mehr, als sie nützt.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

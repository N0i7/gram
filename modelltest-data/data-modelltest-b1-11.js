// ============================================================
// FLOß Modelltest B1 — Nr. 11
// Gleiches Format wie Nr. 01–10.
// ============================================================

window.MODELLTEST_B1_11 = {
  testKey: "modelltest-b1-11",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 11",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Weiterbildung während der Arbeitszeit" },
        { id: 2, text: "Fortbildung online abschließen" },
        { id: 3, text: "Meister-Kurs startet im Herbst" },
        { id: 4, text: "Bildungsurlaub beantragen" },
        { id: 5, text: "Zertifikat verlängert sich automatisch" },
        { id: 6, text: "Firma übernimmt Kurskosten" },
        { id: 7, text: "Sprachkurs für den Beruf" },
        { id: 8, text: "Weiterbildung wird Pflicht" }
      ],
      texte: [
        { id: "a", text: "Ab diesem Jahr können Angestellte fünf Tage pro Jahr für Weiterbildungen nutzen, ohne dafür Urlaub zu nehmen." },
        { id: "b", text: "Wer eine berufliche Fortbildung plant, kann diese jetzt vollständig online absolvieren, mit Prüfung per Videoübertragung." },
        { id: "c", text: "Das Unternehmen übernimmt künftig bis zu 80 Prozent der Kosten für arbeitsrelevante Weiterbildungen." },
        { id: "d", text: "Der neue Kurs zur Meisterprüfung im Handwerk beginnt im September und dauert anderthalb Jahre." },
        { id: "e", text: "Für viele Berufe in der Pflege wird eine regelmäßige Fortbildung ab kommendem Jahr gesetzlich vorgeschrieben." }
      ],
      loesung: { a: 4, b: 2, c: 6, d: 3, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Berufliche Weiterbildung gewinnt in vielen Branchen zunehmend an Bedeutung, da sich Anforderungen und Technologien immer schneller verändern. Viele Beschäftigte empfinden Weiterbildung jedoch als zusätzliche Belastung neben dem ohnehin vollen Arbeitsalltag. Arbeitgeber reagieren unterschiedlich: Manche Unternehmen bieten großzügige Freistellungen und übernehmen die Kosten vollständig, andere erwarten, dass sich Mitarbeitende in ihrer Freizeit weiterbilden. Studien zeigen, dass Beschäftigte deutlich motivierter sind, wenn Weiterbildung während der bezahlten Arbeitszeit stattfindet und thematisch klar mit den eigenen Aufgaben verknüpft ist. Wenig hilfreich empfinden viele hingegen allgemeine Pflichtschulungen ohne erkennbaren Bezug zur eigenen Tätigkeit. Personalexperten raten Unternehmen deshalb, Weiterbildungsangebote stärker individuell auf die jeweiligen Beschäftigten zuzuschneiden, statt auf einheitliche Standardkurse zu setzen.",
      aussagen: [
        { nr: 1, text: "Weiterbildung wird in vielen Branchen wichtiger.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Alle Beschäftigten empfinden Weiterbildung als reine Bereicherung ohne Belastung.", korrekt: false, hinweis: "Gegenteil: 'als zusätzliche Belastung'." },
        { nr: 3, text: "Manche Unternehmen übernehmen die Kosten vollständig.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Beschäftigte sind laut Studien motivierter, wenn Weiterbildung in der Freizeit stattfindet.", korrekt: false, hinweis: "Gegenteil: motivierter während der bezahlten Arbeitszeit." },
        { nr: 5, text: "Allgemeine Pflichtschulungen ohne Bezug zur Tätigkeit kommen gut an.", korrekt: false, hinweis: "Gegenteil: 'wenig hilfreich empfinden viele... Pflichtschulungen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich während der Arbeitszeit weiterbilden." },
        { nr: 2, text: "Sie suchen einen Online-Fortbildungskurs." },
        { nr: 3, text: "Sie möchten die Meisterprüfung machen." },
        { nr: 4, text: "Sie suchen einen berufsbezogenen Sprachkurs." },
        { nr: 5, text: "Ihre Firma soll Kurskosten übernehmen." },
        { nr: 6, text: "Sie möchten Bildungsurlaub beantragen." },
        { nr: 7, text: "Sie brauchen eine Fortbildung in der Pflege." },
        { nr: 8, text: "Sie suchen einen kostenlosen Deutschkurs." },
        { nr: 9, text: "Sie möchten einen Studienplatz." },
        { nr: 10, text: "Sie suchen eine Umschulung." }
      ],
      anzeigen: [
        { id: "a", text: "Bildungsurlaub: 5 Tage pro Jahr für Weiterbildung, ohne Urlaub zu nehmen." },
        { id: "b", text: "Online-Fortbildung mit Prüfung per Video, flexibel von zuhause." },
        { id: "c", text: "Meisterkurs Handwerk, Start im September, anderthalb Jahre." },
        { id: "d", text: "Berufssprachkurs Deutsch, speziell für den Arbeitsalltag." },
        { id: "e", text: "Kostenübernahme für Weiterbildungen: bis zu 80 Prozent." },
        { id: "f", text: "Pflichtfortbildung für Pflegeberufe, ab nächstem Jahr verpflichtend." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "a", 7: "f", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Sehr geehrter Herr Bauer, ___(1)___ ich mich beruflich weiterentwickeln möchte, interessiere ich mich für den angebotenen Kurs. ___(2)___ ich derzeit Vollzeit arbeite, wäre es mir wichtig zu wissen, ___(3)___ der Kurs auch abends stattfindet. Außerdem möchte ich fragen, ___(4)___ die Firma einen Teil der Kosten übernimmt. Über eine Rückmeldung ___(5)___ ich mich sehr freuen.",
      luecken: [
        { nr: 1, o: ["Da", "Damit", "Obwohl"], c: 0, h: "Grund, formell → da." },
        { nr: 2, o: ["Da", "Weil", "Obwohl"], c: 1, h: "kausal: Grund für den Wunsch nach Abendkurs → weil." },
        { nr: 3, o: ["ob", "dass", "wie"], c: 0, h: "indirekte Frage → ob." },
        { nr: 4, o: ["ob", "dass", "wie"], c: 0, h: "indirekte Frage → ob." },
        { nr: 5, o: ["würde", "werde", "wurde"], c: 0, h: "höflich, Konjunktiv II → würde." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["berufsbegleitend", "individuell", "verpflichtend", "freiwillig", "praxisnah"],
      text: "Viele Kurse können ___(6)___ absolviert werden, also neben der Arbeit. Manche Fortbildungen sind ___(7)___, andere freiwillig. Am effektivsten sind Kurse, die ___(8)___ auf die jeweilige Tätigkeit zugeschnitten sind. Wichtig ist auch, dass die Inhalte ___(9)___ vermittelt werden. Wer sich ___(10)___ weiterbildet, zeigt oft besonderes Engagement.",
      loesung: { 6: "berufsbegleitend", 7: "verpflichtend", 8: "individuell", 9: "praxisnah", 10: "freiwillig" }
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
        situation: "Ein Freund / eine Freundin überlegt, eine Weiterbildung zu machen. Sie schreiben eine Nachricht.",
        punkte: ["Fragen Sie, welche Weiterbildung geplant ist.", "Geben Sie einen Tipp zur Finanzierung oder Zeitplanung.", "Wünschen Sie viel Erfolg."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an Ihren Arbeitgeber, um eine Weiterbildung zu beantragen.",
        punkte: ["Nennen Sie die gewünschte Weiterbildung.", "Erklären Sie, warum sie für Ihre Arbeit wichtig ist.", "Fragen Sie nach Kostenübernahme oder Freistellung."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

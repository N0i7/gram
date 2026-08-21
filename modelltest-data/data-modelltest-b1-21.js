// ============================================================
// FLOß Modelltest B1 — Nr. 21
// Gleiches Format wie Nr. 01–20.
// ============================================================

window.MODELLTEST_B1_21 = {
  testKey: "modelltest-b1-21",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 21",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Ausländische Abschlüsse anerkennen lassen" },
        { id: 2, text: "Anerkennungsverfahren dauert Monate" },
        { id: 3, text: "Fehlende Unterlagen als Hindernis" },
        { id: 4, text: "Anpassungsqualifikation nötig" },
        { id: 5, text: "Beratungsstellen helfen kostenlos" },
        { id: 6, text: "Anerkennung schon vor der Einreise möglich" },
        { id: 7, text: "Manche Berufe brauchen keine Anerkennung" },
        { id: 8, text: "Übersetzung der Dokumente erforderlich" }
      ],
      texte: [
        { id: "a", text: "Wer im Ausland einen Berufsabschluss erworben hat, kann diesen in vielen Fällen offiziell anerkennen lassen." },
        { id: "b", text: "Das Anerkennungsverfahren kann je nach Beruf und Land mehrere Monate in Anspruch nehmen." },
        { id: "c", text: "Manche Antragsteller haben Schwierigkeiten, weil wichtige Zeugnisse oder Nachweise fehlen." },
        { id: "d", text: "Falls der ausländische Abschluss nicht vollständig gleichwertig ist, kann eine zusätzliche Anpassungsqualifikation nötig sein." },
        { id: "e", text: "Kostenlose Beratungsstellen unterstützen bei Fragen rund um das Anerkennungsverfahren." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Nachdem ich meinen Beruf im Ausland gelernt hatte, wollte ich meinen Abschluss auch hier anerkennen lassen. Am Anfang wusste ich nicht genau, welche Unterlagen ich einreichen musste, deshalb habe ich mich an eine kostenlose Beratungsstelle gewandt. Dort hat man mir erklärt, welche Dokumente ich brauche und wie der Ablauf funktioniert. Das gesamte Verfahren hat schließlich etwa fünf Monate gedauert, was länger war, als ich erwartet hatte. Am Ende musste ich noch eine kurze Anpassungsqualifikation machen, weil mein Abschluss nicht zu hundert Prozent den hiesigen Standards entsprach. Trotz des langen Weges bin ich froh, dass ich diesen Schritt gegangen bin.",
      aussagen: [
        { nr: 1, text: "Die Person hat ihren Beruf im Ausland gelernt.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person wusste von Anfang an genau, welche Unterlagen nötig waren.", korrekt: false, hinweis: "Gegenteil: 'wusste ich nicht genau'." },
        { nr: 3, text: "Die Beratungsstelle hat Geld gekostet.", korrekt: false, hinweis: "Gegenteil: 'kostenlose Beratungsstelle'." },
        { nr: 4, text: "Das Verfahren hat etwa fünf Monate gedauert.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person musste keine Anpassungsqualifikation machen.", korrekt: false, hinweis: "Gegenteil: 'musste noch eine kurze Anpassungsqualifikation machen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten Ihren ausländischen Abschluss anerkennen lassen." },
        { nr: 2, text: "Sie möchten wissen, wie lange das Verfahren dauert." },
        { nr: 3, text: "Ihnen fehlen wichtige Unterlagen." },
        { nr: 4, text: "Sie brauchen eine Anpassungsqualifikation." },
        { nr: 5, text: "Sie suchen kostenlose Beratung zur Anerkennung." },
        { nr: 6, text: "Sie möchten Dokumente übersetzen lassen." },
        { nr: 7, text: "Sie suchen einen Sprachkurs für Ihren Beruf." },
        { nr: 8, text: "Sie möchten sich selbstständig machen." },
        { nr: 9, text: "Sie suchen ein Praktikum in Ihrem Beruf." },
        { nr: 10, text: "Sie möchten einen neuen Beruf lernen." }
      ],
      anzeigen: [
        { id: "a", text: "Anerkennung ausländischer Abschlüsse: Antrag stellen." },
        { id: "b", text: "Verfahrensdauer: Informationen zur Bearbeitungszeit." },
        { id: "c", text: "Fehlende Unterlagen: Hilfe bei der Beschaffung." },
        { id: "d", text: "Anpassungsqualifikation: Kurse und Prüfungen." },
        { id: "e", text: "Kostenlose Beratung zur Anerkennung von Abschlüssen." },
        { id: "f", text: "Übersetzungsdienst für offizielle Dokumente." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ ich meinen Beruf im Ausland gelernt hatte, wollte ich meinen Abschluss anerkennen lassen. Am Anfang ___(2)___ ich nicht genau, welche Unterlagen ich brauchte. Das Verfahren ___(3)___ etwa fünf Monate gedauert. Am Ende ___(4)___ ich noch eine Anpassungsqualifikation machen. ___(5)___ des langen Weges bin ich froh über diesen Schritt.",
      luecken: [
        { nr: 1, o: ["Nachdem", "Bevor", "Während"], c: 0, h: "zeitlich davor → nachdem." },
        { nr: 2, o: ["wusste", "weiß", "wisse"], c: 0, h: "Präteritum → wusste." },
        { nr: 3, o: ["hat", "ist", "war"], c: 0, h: "das Verfahren → hat." },
        { nr: 4, o: ["musste", "muss", "müsste"], c: 0, h: "Präteritum → musste." },
        { nr: 5, o: ["Trotz", "Wegen", "Anstelle"], c: 0, h: "trotz + Genitiv." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Anerkennung", "Unterlagen", "Verfahren", "gleichwertig", "Anpassungsqualifikation"],
      text: "Die ___(6)___ ausländischer Abschlüsse ist oft kompliziert. Man braucht viele ___(7)___. Das ___(8)___ dauert manchmal Monate. Ist der Abschluss nicht ___(9)___, braucht man eine ___(10)___.",
      loesung: { 6: "Anerkennung", 7: "Unterlagen", 8: "Verfahren", 9: "gleichwertig", 10: "Anpassungsqualifikation" }
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
        situation: "Ein Freund / eine Freundin möchte seinen/ihren ausländischen Abschluss anerkennen lassen. Sie schreiben eine Nachricht.",
        punkte: ["Berichten Sie von Ihren eigenen Erfahrungen.", "Geben Sie einen Tipp zu den nötigen Unterlagen.", "Ermutigen Sie die Person."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an eine Anerkennungsstelle, um sich nach dem Verfahren zu erkundigen.",
        punkte: ["Stellen Sie sich kurz vor.", "Beschreiben Sie Ihren Abschluss und Ihr Herkunftsland.", "Fragen Sie nach den nötigen Unterlagen."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

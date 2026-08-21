// ============================================================
// FLOß Modelltest A2 — Nr. 40 (LETZTER A2-TEST — A2 KOMPLETT!)
// Gleiches Format wie Nr. 01–39.
// ============================================================

window.MODELLTEST_A2_40 = {
  testKey: "modelltest-a2-40",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 40",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Sprachkurs neben der Arbeit" },
        { id: 2, text: "Abendkurse besuchen" },
        { id: 3, text: "Müdigkeit nach der Arbeit" },
        { id: 4, text: "Lernen am Wochenende" },
        { id: 5, text: "Online-Kurs statt Präsenzkurs" },
        { id: 6, text: "Kurs wird vom Arbeitgeber bezahlt" },
        { id: 7, text: "Prüfung am Ende des Kurses" },
        { id: 8, text: "Kurs wird abgebrochen" }
      ],
      texte: [
        { id: "a", text: "Neben der Vollzeitarbeit einen Sprachkurs zu besuchen ist nicht immer leicht." },
        { id: "b", text: "Viele Berufstätige besuchen deshalb Abendkurse nach der Arbeit." },
        { id: "c", text: "Nach einem langen Arbeitstag ist man oft schon müde." },
        { id: "d", text: "Manche nutzen stattdessen das Wochenende zum Lernen." },
        { id: "e", text: "Ein Online-Kurs bietet mehr Flexibilität als ein Präsenzkurs." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Ich arbeite Vollzeit und besuche zugleich einen Deutschkurs, was manchmal anstrengend ist. Zuerst habe ich einen Abendkurs besucht, aber nach der Arbeit war ich oft zu müde zum Lernen. Deshalb habe ich zu einem Online-Kurs gewechselt, den ich flexibler in meinen Alltag einbauen kann. Am Wochenende nehme ich mir extra Zeit zum Üben. Am Ende des Kurses steht eine Prüfung, auf die ich mich gut vorbereiten möchte.",
      aussagen: [
        { nr: 1, text: "Die Person arbeitet Vollzeit und lernt Deutsch.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person war nach der Arbeit nie müde.", korrekt: false, hinweis: "Gegenteil: 'nach der Arbeit war ich oft zu müde'." },
        { nr: 3, text: "Die Person hat zu einem Online-Kurs gewechselt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person übt nie am Wochenende.", korrekt: false, hinweis: "Gegenteil: 'Am Wochenende nehme ich mir extra Zeit'." },
        { nr: 5, text: "Am Ende des Kurses gibt es keine Prüfung.", korrekt: false, hinweis: "Gegenteil: 'Am Ende des Kurses steht eine Prüfung'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen einen Abendkurs für Deutsch." },
        { nr: 2, text: "Sie möchten einen Online-Kurs besuchen." },
        { nr: 3, text: "Sie suchen einen Wochenend-Intensivkurs." },
        { nr: 4, text: "Sie möchten sich auf eine Sprachprüfung vorbereiten." },
        { nr: 5, text: "Sie möchten mit Ihrem Arbeitgeber über einen Sprachkurs sprechen." },
        { nr: 6, text: "Sie suchen ein Nachhilfeprogramm für Kinder." },
        { nr: 7, text: "Sie suchen ein Fitnessstudio." },
        { nr: 8, text: "Sie suchen eine Kita." },
        { nr: 9, text: "Sie suchen einen Handwerker." },
        { nr: 10, text: "Sie suchen ein Restaurant." }
      ],
      anzeigen: [
        { id: "a", text: "Abendkurs Deutsch — jetzt anmelden." },
        { id: "b", text: "Flexibler Online-Deutschkurs." },
        { id: "c", text: "Intensivkurs am Wochenende." },
        { id: "d", text: "Prüfungsvorbereitung für Deutschprüfungen." },
        { id: "e", text: "Ratgeber: Sprachkurs mit dem Arbeitgeber besprechen." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich arbeite Vollzeit und lerne Deutsch, ___(1)___ das manchmal anstrengend ist. Zuerst habe ich einen Abendkurs besucht, ___(2)___ ich nach der Arbeit oft müde war. Deshalb habe ich gewechselt, ___(3)___ ich flexibler lernen kann. Am Wochenende, ___(4)___ ich mehr Zeit habe, übe ich extra. Am Ende steht eine Prüfung, ___(5)___ ich mich gut vorbereiten möchte.",
      luecken: [
        { nr: 1, o: ["obwohl", "weil", "damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 2, o: ["weil", "obwohl", "damit"], c: 1, h: "Einräumung (vgl. Originaltext 'aber') → obwohl." },
        { nr: 3, o: ["damit", "weil", "obwohl"], c: 0, h: "Finalsatz → damit." },
        { nr: 4, o: ["wo", "die", "was"], c: 0, h: "Relativpronomen (temporal/lokal) → wo." },
        { nr: 5, o: ["auf die", "auf der", "auf das"], c: 0, h: "'sich vorbereiten auf' + Akkusativ, Relativpronomen feminin → auf die." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Vollzeit", "Abendkurs", "flexibel", "Wochenende", "Prüfung"],
      text: "Die Person arbeitet ___(6)___ und lernt trotzdem Deutsch. Zuerst besuchte sie einen ___(7)___. Ein Online-Kurs ist ___(8)___. Am ___(9)___ hat sie mehr Zeit. Am Ende des Kurses steht eine ___(10)___.",
      loesung: { 6: "Vollzeit", 7: "Abendkurs", 8: "flexibel", 9: "Wochenende", 10: "Prüfung" }
    }
  },

  schreiben: {
    titel: "Schreiben — Persönliche Nachricht",
    anleitung: "Schreiben Sie eine Nachricht. Schreiben Sie mindestens 40 Wörter. Gehen Sie auf alle Punkte ein.",
    mindestwoerter: 40,
    aufgaben: [
      {
        nr: 1,
        briefform: "informell",
        situation: "Sie lernen Deutsch neben Ihrer Vollzeitarbeit. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, wie Sie lernen.", "Berichten Sie von den Herausforderungen.", "Fragen Sie, wie die Person Deutsch gelernt hat."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

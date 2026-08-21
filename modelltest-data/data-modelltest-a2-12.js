// ============================================================
// FLOß Modelltest A2 — Nr. 12
// Gleiches Format wie Nr. 01–11.
// ============================================================

window.MODELLTEST_A2_12 = {
  testKey: "modelltest-a2-12",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 12",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Teilzeitstudium möglich" },
        { id: 2, text: "Job neben dem Studium" },
        { id: 3, text: "Praktikum während des Semesters" },
        { id: 4, text: "Flexible Arbeitszeiten für Studierende" },
        { id: 5, text: "Stipendium für Studierende mit Kind" },
        { id: 6, text: "Fernstudium von zu Hause" },
        { id: 7, text: "Lerngruppe gesucht" },
        { id: 8, text: "Studium ohne Nebenjob" }
      ],
      texte: [
        { id: "a", text: "Viele Studierende arbeiten neben dem Studium, um sich das Leben zu finanzieren, oft zwischen 10 und 15 Stunden pro Woche." },
        { id: "b", text: "Ein Café in der Nähe der Uni sucht Studierende mit flexiblen Arbeitszeiten, passend zum Stundenplan." },
        { id: "c", text: "Manche Universitäten bieten ein Teilzeitstudium an, bei dem man weniger Kurse pro Semester belegt." },
        { id: "d", text: "Es gibt spezielle Stipendien für Studierende, die gleichzeitig ein Kind betreuen und deshalb weniger Zeit haben." },
        { id: "e", text: "Wer die Uni nicht besuchen kann, kann viele Studiengänge auch als Fernstudium von zu Hause absolvieren." }
      ],
      loesung: { a: 2, b: 4, c: 1, d: 5, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Ich studiere Wirtschaft und arbeite gleichzeitig zehn Stunden pro Woche in einem Büro. Am Anfang war es schwierig, Studium und Job unter einen Hut zu bringen. Ich musste lernen, meine Zeit besser zu planen und Prioritäten zu setzen. Manchmal bin ich müde, weil ich abends noch lerne, nachdem ich den ganzen Tag gearbeitet habe. Aber der Job hilft mir finanziell, und ich sammle auch praktische Erfahrung für später. Meine Universität bietet zum Glück flexible Prüfungstermine, was die Kombination leichter macht. Ich würde jedem empfehlen, vorher gut zu planen, bevor man Studium und Arbeit kombiniert.",
      aussagen: [
        { nr: 1, text: "Die Person studiert Wirtschaft.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Am Anfang war die Kombination von Studium und Job leicht.", korrekt: false, hinweis: "Gegenteil: 'schwierig'." },
        { nr: 3, text: "Die Person musste lernen, ihre Zeit besser zu planen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Der Job bringt der Person keine finanziellen Vorteile.", korrekt: false, hinweis: "Gegenteil: 'hilft mir finanziell'." },
        { nr: 5, text: "Die Universität bietet flexible Prüfungstermine an.", korrekt: true, hinweis: "Direkt im Text genannt." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen einen Job neben dem Studium." },
        { nr: 2, text: "Sie möchten Teilzeit studieren." },
        { nr: 3, text: "Sie suchen ein Fernstudium." },
        { nr: 4, text: "Sie haben ein Kind und studieren." },
        { nr: 5, text: "Sie brauchen flexible Arbeitszeiten." },
        { nr: 6, text: "Sie suchen eine Lerngruppe." },
        { nr: 7, text: "Sie möchten ein Auslandssemester machen." },
        { nr: 8, text: "Sie suchen eine WG in Uninähe." },
        { nr: 9, text: "Sie möchten ein Vollzeitstudium ohne Job." },
        { nr: 10, text: "Sie suchen einen Nebenjob im Ausland." }
      ],
      anzeigen: [
        { id: "a", text: "Café sucht Studierende, flexible Arbeitszeiten." },
        { id: "b", text: "Teilzeitstudium jetzt an mehreren Fakultäten möglich." },
        { id: "c", text: "Fernstudium: viele Studiengänge von zu Hause aus." },
        { id: "d", text: "Stipendium für Studierende mit Kind, jetzt bewerben." },
        { id: "e", text: "Nebenjob im Büro, 10 Stunden pro Woche." },
        { id: "f", text: "Studentenrabatt in Mensa und Bibliothek." }
      ],
      loesung: { 1: "e", 2: "b", 3: "c", 4: "d", 5: "a", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich ___(1)___ Wirtschaft und arbeite gleichzeitig zehn Stunden pro Woche. Am Anfang ___(2)___ es schwierig, Studium und Job zu kombinieren. Ich ___(3)___ lernen, meine Zeit besser zu planen. Manchmal bin ich müde, ___(4)___ ich abends noch lerne. Der Job ___(5)___ mir finanziell.",
      luecken: [
        { nr: 1, o: ["studiere", "studiert", "studieren"], c: 0, h: "ich → studiere." },
        { nr: 2, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 3, o: ["musste", "muss", "müsste"], c: 0, h: "Präteritum → musste." },
        { nr: 4, o: ["weil", "obwohl", "damit"], c: 0, h: "Grund → weil." },
        { nr: 5, o: ["hilft", "helfe", "helfen"], c: 0, h: "der Job → hilft." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Studium", "Erfahrung", "Zeitplan", "finanziell", "flexibel"],
      text: "Das ___(6)___ und der Job müssen gut kombiniert werden. Ich brauche einen guten ___(7)___. Der Job hilft mir ___(8)___. Ich sammle auch praktische ___(9)___. Meine Universität ist zum Glück sehr ___(10)___.",
      loesung: { 6: "Studium", 7: "Zeitplan", 8: "finanziell", 9: "Erfahrung", 10: "flexibel" }
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
        situation: "Sie studieren und arbeiten gleichzeitig. Sie schreiben einer Freundin / einem Freund darüber.",
        punkte: ["Erzählen Sie, was Sie studieren und wo Sie arbeiten.", "Sagen Sie, was für Sie schwierig ist.", "Fragen Sie, wie die Person das findet."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

// ============================================================
// FLOß Modelltest B1 — Nr. 35
// Gleiches Format wie Nr. 01–34.
// ============================================================

window.MODELLTEST_B1_35 = {
  testKey: "modelltest-b1-35",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 35",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Ehrenamt neben dem Studium" },
        { id: 2, text: "Zeitmanagement für Studierende" },
        { id: 3, text: "Ehrenamt verbessert den Lebenslauf" },
        { id: 4, text: "Finanzielle Aufwandsentschädigung" },
        { id: 5, text: "Ehrenamt wird zur Belastung" },
        { id: 6, text: "Universitäten unterstützen Engagement" },
        { id: 7, text: "Ehrenamt im Ausland" },
        { id: 8, text: "Neue Freundschaften durch Ehrenamt" }
      ],
      texte: [
        { id: "a", text: "Viele Studierende engagieren sich neben dem Studium ehrenamtlich." },
        { id: "b", text: "Ein gutes Zeitmanagement hilft, Studium und Ehrenamt zu vereinbaren." },
        { id: "c", text: "Ehrenamtliches Engagement macht sich gut im Lebenslauf." },
        { id: "d", text: "Manche Universitäten bieten spezielle Programme zur Unterstützung von Engagement an." },
        { id: "e", text: "Durch das Ehrenamt entstehen oft neue Freundschaften." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 6, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit Beginn meines Studiums engagiere ich mich ehrenamtlich in einem Sozialprojekt. Am Anfang war es nicht leicht, Studium und Ehrenamt miteinander zu vereinbaren, aber mit einem guten Zeitplan hat es sich schnell eingespielt. Meine Universität unterstützt Studierende, die sich engagieren, sogar mit einem speziellen Programm. Durch das Ehrenamt habe ich außerdem viele neue Freunde gefunden. Rückblickend würde ich jedem empfehlen, sich neben dem Studium zu engagieren, auch wenn es zeitweise anstrengend ist.",
      aussagen: [
        { nr: 1, text: "Die Person engagiert sich seit Studienbeginn ehrenamtlich.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Studium und Ehrenamt zu vereinbaren war von Anfang an leicht.", korrekt: false, hinweis: "Gegenteil: 'war es nicht leicht'." },
        { nr: 3, text: "Die Universität unterstützt engagierte Studierende.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person hat keine neuen Freunde gefunden.", korrekt: false, hinweis: "Gegenteil: 'habe ich... viele neue Freunde gefunden'." },
        { nr: 5, text: "Die Person würde niemandem ein Ehrenamt empfehlen.", korrekt: false, hinweis: "Gegenteil: 'würde ich jedem empfehlen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen ein Ehrenamt neben dem Studium." },
        { nr: 2, text: "Sie möchten sich über Zeitmanagement informieren." },
        { nr: 3, text: "Sie suchen ein Unterstützungsprogramm Ihrer Universität." },
        { nr: 4, text: "Sie möchten sich über eine Aufwandsentschädigung informieren." },
        { nr: 5, text: "Sie möchten neue Leute durch Ehrenamt kennenlernen." },
        { nr: 6, text: "Sie suchen einen Nebenjob." },
        { nr: 7, text: "Sie suchen eine Wohnung." },
        { nr: 8, text: "Sie suchen ein Praktikum." },
        { nr: 9, text: "Sie suchen ein Auslandssemester." },
        { nr: 10, text: "Sie suchen einen Sprachkurs." }
      ],
      anzeigen: [
        { id: "a", text: "Ehrenamt für Studierende gesucht." },
        { id: "b", text: "Zeitmanagement-Workshop für Studierende." },
        { id: "c", text: "Unterstützungsprogramm für engagierte Studierende." },
        { id: "d", text: "Informationen zur Aufwandsentschädigung." },
        { id: "e", text: "Ehrenamtliche Gruppe — neue Leute treffen." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit Beginn meines Studiums engagiere ich mich ehrenamtlich, ___(1)___ mir das wichtig ist. Am Anfang war es nicht leicht, ___(2)___ ich noch keinen guten Zeitplan hatte. Meine Universität, ___(3)___ Studierende unterstützt, bietet ein spezielles Programm an. Durch das Ehrenamt, in ___(4)___ ich viel Zeit investiere, habe ich neue Freunde gefunden. Ich würde jedem empfehlen, sich zu engagieren, ___(5)___ es auch anstrengend sein kann.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 3, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Universität' (feminin) → die." },
        { nr: 4, o: ["das", "die", "was"], c: 0, h: "Relativpronomen bezogen auf 'Ehrenamt' (neutrum) → das." },
        { nr: 5, o: ["obwohl", "weil", "damit"], c: 0, h: "Einräumung → obwohl." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Ehrenamt", "Zeitmanagement", "Lebenslauf", "Universität", "Freundschaften"],
      text: "Viele Studierende engagieren sich im ___(6)___. Gutes ___(7)___ hilft dabei sehr. Das macht sich auch im ___(8)___ gut. Manche ___(9)___ unterstützen dieses Engagement. Dabei entstehen oft neue ___(10)___.",
      loesung: { 6: "Ehrenamt", 7: "Zeitmanagement", 8: "Lebenslauf", 9: "Universität", 10: "Freundschaften" }
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
        situation: "Sie engagieren sich seit kurzem ehrenamtlich neben dem Studium. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Beschreiben Sie Ihr Ehrenamt.", "Erzählen Sie, wie Sie es mit dem Studium vereinbaren.", "Fragen Sie, ob die Person auch mitmachen möchte."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an das Studierendenwerk, um sich nach einem Unterstützungsprogramm für ehrenamtliches Engagement zu erkundigen.",
        punkte: ["Beschreiben Sie Ihr Engagement.", "Fragen Sie nach den Voraussetzungen des Programms.", "Bitten Sie um weitere Informationen."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

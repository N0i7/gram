// ============================================================
// FLOß Modelltest B1 — Nr. 39
// Gleiches Format wie Nr. 01–38.
// ============================================================

window.MODELLTEST_B1_39 = {
  testKey: "modelltest-b1-39",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 39",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Vereinstermine mit Familie abstimmen" },
        { id: 2, text: "Weniger Zeit für Training" },
        { id: 3, text: "Familienfreundliche Vereine" },
        { id: 4, text: "Kinder im Verein integrieren" },
        { id: 5, text: "Vereinsleben aufgeben" },
        { id: 6, text: "Partner unterstützt das Engagement" },
        { id: 7, text: "Vereinsfeste mit der ganzen Familie" },
        { id: 8, text: "Vereinsbeitrag zu teuer" }
      ],
      texte: [
        { id: "a", text: "Es kostet Mühe, die Termine des Vereins mit dem Familienleben abzustimmen." },
        { id: "b", text: "Manche Vereine bieten inzwischen familienfreundliche Angebote an." },
        { id: "c", text: "Viele Vereine versuchen, auch die Kinder ihrer Mitglieder einzubinden." },
        { id: "d", text: "Ohne die Unterstützung des Partners wäre das Engagement kaum möglich." },
        { id: "e", text: "Vereinsfeste bieten eine gute Gelegenheit, die ganze Familie einzubeziehen." }
      ],
      loesung: { a: 1, b: 3, c: 4, d: 6, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit vielen Jahren bin ich aktives Mitglied in einem Sportverein, was manchmal nicht leicht mit meinem Familienleben zu vereinbaren ist. Es kostet einige Mühe, die Trainingstermine mit den Bedürfnissen meiner Familie abzustimmen. Zum Glück ist unser Verein inzwischen familienfreundlicher geworden und bindet auch die Kinder der Mitglieder mit ein. Ohne die Unterstützung meines Partners wäre mein Engagement kaum möglich. Bei den jährlichen Vereinsfesten kommt die ganze Familie zusammen, was uns allen sehr viel Freude bereitet.",
      aussagen: [
        { nr: 1, text: "Die Person ist seit vielen Jahren im Sportverein.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Abstimmung der Termine kostet keine Mühe.", korrekt: false, hinweis: "Gegenteil: 'kostet einige Mühe'." },
        { nr: 3, text: "Der Verein bindet auch Kinder der Mitglieder ein.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Der Partner unterstützt das Engagement nicht.", korrekt: false, hinweis: "Gegenteil: 'ohne die Unterstützung meines Partners wäre... kaum möglich'." },
        { nr: 5, text: "Die Vereinsfeste bereiten der Familie keine Freude.", korrekt: false, hinweis: "Gegenteil: 'was uns allen sehr viel Freude bereitet'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen einen familienfreundlichen Sportverein." },
        { nr: 2, text: "Sie möchten Ihre Kinder in einen Verein integrieren." },
        { nr: 3, text: "Sie suchen Informationen zu einem Vereinsfest." },
        { nr: 4, text: "Sie möchten über flexible Trainingszeiten sprechen." },
        { nr: 5, text: "Sie möchten Mitglied in einem Verein werden." },
        { nr: 6, text: "Sie suchen einen Handwerker." },
        { nr: 7, text: "Sie suchen eine Kita." },
        { nr: 8, text: "Sie suchen ein Restaurant." },
        { nr: 9, text: "Sie suchen eine Wohnung." },
        { nr: 10, text: "Sie suchen einen Nachhilfelehrer." }
      ],
      anzeigen: [
        { id: "a", text: "Familienfreundlicher Sportverein sucht Mitglieder." },
        { id: "b", text: "Kinderprogramm im Verein." },
        { id: "c", text: "Vereinsfest — alle Familien willkommen." },
        { id: "d", text: "Flexible Trainingszeiten im Verein." },
        { id: "e", text: "Mitgliedschaft im Verein — jetzt anmelden." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit vielen Jahren bin ich im Verein aktiv, ___(1)___ es manchmal schwer ist, das mit der Familie zu vereinbaren. Es kostet Mühe, die Termine abzustimmen, ___(2)___ ich das gerne mache. Der Verein, ___(3)___ familienfreundlicher geworden ist, bindet auch Kinder ein. Ohne die Unterstützung meines Partners, ___(4)___ mir sehr hilft, wäre es kaum möglich. Bei den Vereinsfesten, ___(5)___ wir alle besuchen, kommt die Familie zusammen.",
      luecken: [
        { nr: 1, o: ["obwohl", "weil", "damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 2, o: ["obwohl", "weil", "damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 3, o: ["der", "die", "das"], c: 0, h: "Relativpronomen Nominativ bezogen auf 'Verein' (maskulin) → der." },
        { nr: 4, o: ["der", "die", "das"], c: 0, h: "Relativpronomen Nominativ bezogen auf 'Partner' (maskulin) → der." },
        { nr: 5, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Vereinsfeste' (Plural) → die." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Vereinsleben", "Trainingstermine", "familienfreundlich", "Unterstützung", "Vereinsfest"],
      text: "Das ___(6)___ ist manchmal schwer mit der Familie zu vereinbaren. Die ___(7)___ müssen abgestimmt werden. Viele Vereine werden ___(8)___. Ohne die ___(9)___ des Partners wäre es schwierig. Beim ___(10)___ kommt die ganze Familie zusammen.",
      loesung: { 6: "Vereinsleben", 7: "Trainingstermine", 8: "familienfreundlich", 9: "Unterstützung", 10: "Vereinsfest" }
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
        situation: "Sie sind aktives Vereinsmitglied und müssen Vereinsleben und Familie vereinbaren. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Beschreiben Sie Ihr Engagement im Verein.", "Erzählen Sie, wie Sie es mit der Familie vereinbaren.", "Fragen Sie nach den Erfahrungen der Person."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an Ihren Sportverein, um nach familienfreundlicheren Trainingszeiten zu fragen.",
        punkte: ["Beschreiben Sie Ihre Situation.", "Erklären Sie Ihren Wunsch nach flexibleren Zeiten.", "Bitten Sie um eine Rückmeldung."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

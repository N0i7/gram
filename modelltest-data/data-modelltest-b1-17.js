// ============================================================
// FLOß Modelltest B1 — Nr. 17
// Gleiches Format wie Nr. 01–16.
// ============================================================

window.MODELLTEST_B1_17 = {
  testKey: "modelltest-b1-17",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 17",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Erste Stelle nach dem Studium finden" },
        { id: 2, text: "Praktikum als Einstieg" },
        { id: 3, text: "Berufseinstiegsprogramm für Absolventen" },
        { id: 4, text: "Bewerbungsunterlagen optimieren" },
        { id: 5, text: "Networking auf Karrieremessen" },
        { id: 6, text: "Gehaltsverhandlung beim ersten Job" },
        { id: 7, text: "Unsicherheit nach dem Abschluss" },
        { id: 8, text: "Quereinstieg in eine andere Branche" }
      ],
      texte: [
        { id: "a", text: "Viele Hochschulabsolventinnen und -absolventen fühlen sich nach dem Abschluss unsicher, weil der Berufseinstieg viele neue Entscheidungen mit sich bringt." },
        { id: "b", text: "Manche Unternehmen bieten spezielle Programme an, die Absolventen strukturiert in den Berufsalltag einführen." },
        { id: "c", text: "Karrieremessen bieten die Gelegenheit, direkt mit potenziellen Arbeitgebern in Kontakt zu treten und wichtige Kontakte zu knüpfen." },
        { id: "d", text: "Ein Praktikum kann eine gute Möglichkeit sein, erste praktische Erfahrungen zu sammeln und den Einstieg zu erleichtern." },
        { id: "e", text: "Gut strukturierte Bewerbungsunterlagen erhöhen die Chancen, zu einem Vorstellungsgespräch eingeladen zu werden." }
      ],
      loesung: { a: 7, b: 3, c: 5, d: 2, e: 4 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Nach meinem Studienabschluss war mir zunächst nicht klar, in welche Richtung ich beruflich gehen sollte. Ich habe mich auf viele Stellen beworben, aber lange Zeit keine Zusage bekommen. Erst nachdem ich meine Bewerbungsunterlagen überarbeitet und ein Praktikum absolviert hatte, hat sich meine Situation verbessert. Das Praktikum hat mir gezeigt, welche Aufgaben mir wirklich Spaß machen, und mir gleichzeitig wertvolle Kontakte vermittelt. Über einen ehemaligen Praktikumskollegen habe ich schließlich von einer offenen Stelle erfahren, auf die ich mich erfolgreich beworben habe. Rückblickend würde ich jedem raten, sich beim Berufseinstieg nicht entmutigen zu lassen.",
      aussagen: [
        { nr: 1, text: "Nach dem Studienabschluss war der Person sofort klar, welche Richtung sie einschlagen wollte.", korrekt: false, hinweis: "Gegenteil: 'zunächst nicht klar'." },
        { nr: 2, text: "Die Person hat lange Zeit keine Zusage bekommen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Das Praktikum hat der Person nicht geholfen, Kontakte zu knüpfen.", korrekt: false, hinweis: "Gegenteil: 'wertvolle Kontakte vermittelt'." },
        { nr: 4, text: "Die Person hat die neue Stelle über einen ehemaligen Praktikumskollegen erfahren.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person würde anderen raten, sich beim Berufseinstieg schnell entmutigen zu lassen.", korrekt: false, hinweis: "Gegenteil: 'sich... nicht entmutigen zu lassen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie haben gerade Ihr Studium abgeschlossen und suchen die erste Stelle." },
        { nr: 2, text: "Sie möchten ein Praktikum machen." },
        { nr: 3, text: "Sie suchen ein Einstiegsprogramm für Absolventen." },
        { nr: 4, text: "Sie möchten Ihre Bewerbungsunterlagen verbessern lassen." },
        { nr: 5, text: "Sie möchten auf eine Karrieremesse gehen." },
        { nr: 6, text: "Sie brauchen Tipps zur Gehaltsverhandlung." },
        { nr: 7, text: "Sie suchen eine Führungsposition mit viel Erfahrung." },
        { nr: 8, text: "Sie möchten sich selbstständig machen." },
        { nr: 9, text: "Sie suchen eine Teilzeitstelle im Ruhestand." },
        { nr: 10, text: "Sie möchten ins Ausland auswandern." }
      ],
      anzeigen: [
        { id: "a", text: "Berufseinstiegsstellen für Absolventen in verschiedenen Branchen." },
        { id: "b", text: "Praktikumsplätze für Studierende und Absolventen." },
        { id: "c", text: "Einstiegsprogramm mit strukturierter Einarbeitung." },
        { id: "d", text: "Bewerbungscoaching: Unterlagen professionell überarbeiten." },
        { id: "e", text: "Karrieremesse am Wochenende, viele Unternehmen vor Ort." },
        { id: "f", text: "Workshop zur Gehaltsverhandlung beim ersten Job." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Nach meinem Studienabschluss ___(1)___ mir zunächst nicht klar, in welche Richtung ich gehen sollte. Ich ___(2)___ mich auf viele Stellen beworben, aber lange Zeit keine Zusage bekommen. Erst ___(3)___ ich meine Unterlagen überarbeitet hatte, hat sich meine Situation verbessert. Das Praktikum hat mir gezeigt, ___(4)___ Aufgaben mir Spaß machen. Rückblickend würde ich jedem raten, sich nicht ___(5)___ lassen.",
      luecken: [
        { nr: 1, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 2, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 3, o: ["nachdem", "bevor", "während"], c: 0, h: "zeitlich danach → nachdem." },
        { nr: 4, o: ["welche", "was", "wie"], c: 0, h: "Frage nach Auswahl → welche." },
        { nr: 5, o: ["entmutigen", "entmutigt", "entmutige"], c: 0, h: "sich...lassen + Infinitiv → entmutigen." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Berufseinstieg", "Kontakte", "Bewerbung", "Zusage", "Erfahrung"],
      text: "Der ___(6)___ ist für viele Absolventen eine Herausforderung. Man sollte früh ___(7)___ knüpfen. Eine gute ___(8)___ erhöht die Chancen auf ein Gespräch. Praktische ___(9)___ ist oft entscheidend. Am Ende erhielt die Person eine ___(10)___.",
      loesung: { 6: "Berufseinstieg", 7: "Kontakte", 8: "Bewerbung", 9: "Erfahrung", 10: "Zusage" }
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
        situation: "Ein Freund / eine Freundin hat gerade das Studium abgeschlossen und ist unsicher beim Berufseinstieg. Sie schreiben eine Nachricht.",
        punkte: ["Zeigen Sie Verständnis für die Unsicherheit.", "Erzählen Sie von Ihren eigenen Erfahrungen.", "Geben Sie einen konkreten Tipp."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie bewerben sich um ein Berufseinstiegsprogramm bei einem Unternehmen.",
        punkte: ["Stellen Sie sich kurz vor.", "Erklären Sie, warum Sie sich für das Programm interessieren.", "Fragen Sie nach dem weiteren Bewerbungsprozess."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

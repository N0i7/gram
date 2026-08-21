// ============================================================
// FLOß Modelltest A2 — Nr. 17
// Gleiches Format wie Nr. 01–16.
// ============================================================

window.MODELLTEST_A2_17 = {
  testKey: "modelltest-a2-17",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 17",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Grippeimpfung im Herbst" },
        { id: 2, text: "Vorsorgeuntersuchung beim Hausarzt" },
        { id: 3, text: "Impfpass mitbringen" },
        { id: 4, text: "Reiseimpfungen rechtzeitig planen" },
        { id: 5, text: "Kostenlose Vorsorge für Kinder" },
        { id: 6, text: "Impftermin online buchen" },
        { id: 7, text: "Impfung wird nicht empfohlen" },
        { id: 8, text: "Zahnarztbesuch zweimal im Jahr" }
      ],
      texte: [
        { id: "a", text: "Im Herbst bietet die Praxis wieder Grippeimpfungen an, ein Termin ist empfehlenswert." },
        { id: "b", text: "Bei der jährlichen Vorsorgeuntersuchung prüft der Hausarzt den allgemeinen Gesundheitszustand." },
        { id: "c", text: "Bitte bringen Sie zu jedem Impftermin Ihren Impfpass mit." },
        { id: "d", text: "Wer verreist, sollte sich rechtzeitig über notwendige Reiseimpfungen informieren." },
        { id: "e", text: "Für Kinder sind alle Vorsorgeuntersuchungen bis zum 18. Lebensjahr kostenlos." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Letzte Woche war ich bei meinem Hausarzt zur jährlichen Vorsorgeuntersuchung. Ich hatte lange keinen Termin gemacht, weil ich immer dachte, ich hätte keine Zeit. Der Arzt hat mich gründlich untersucht und mir auch die Grippeimpfung empfohlen. Am Anfang war ich unsicher, ob ich die Impfung machen soll, aber nach dem Gespräch mit dem Arzt habe ich mich dafür entschieden. Die Untersuchung hat insgesamt nur eine halbe Stunde gedauert und war völlig kostenlos. Jetzt möchte ich jedes Jahr regelmäßig zur Vorsorge gehen.",
      aussagen: [
        { nr: 1, text: "Die Person war letzte Woche zur Vorsorgeuntersuchung.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person hatte vorher regelmäßig Termine gemacht.", korrekt: false, hinweis: "Gegenteil: 'lange keinen Termin gemacht'." },
        { nr: 3, text: "Der Arzt hat die Grippeimpfung empfohlen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Untersuchung hat mehrere Stunden gedauert.", korrekt: false, hinweis: "Sie hat nur eine halbe Stunde gedauert." },
        { nr: 5, text: "Die Person möchte in Zukunft nicht mehr zur Vorsorge gehen.", korrekt: false, hinweis: "Gegenteil: 'möchte jedes Jahr regelmäßig zur Vorsorge gehen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich gegen Grippe impfen lassen." },
        { nr: 2, text: "Sie möchten einen Vorsorgetermin machen." },
        { nr: 3, text: "Sie brauchen Ihren Impfpass." },
        { nr: 4, text: "Sie planen eine Reise und brauchen Impfungen." },
        { nr: 5, text: "Ihr Kind braucht eine kostenlose Vorsorge." },
        { nr: 6, text: "Sie möchten einen Termin online buchen." },
        { nr: 7, text: "Sie suchen einen Zahnarzt." },
        { nr: 8, text: "Sie brauchen eine Brille." },
        { nr: 9, text: "Sie suchen ein Krankenhaus." },
        { nr: 10, text: "Sie möchten eine Physiotherapie machen." }
      ],
      anzeigen: [
        { id: "a", text: "Grippeimpfung im Herbst, Termin empfohlen." },
        { id: "b", text: "Jährliche Vorsorgeuntersuchung beim Hausarzt." },
        { id: "c", text: "Bitte Impfpass zu jedem Termin mitbringen." },
        { id: "d", text: "Reiseimpfungen rechtzeitig planen und buchen." },
        { id: "e", text: "Kostenlose Vorsorge für Kinder bis 18 Jahre." },
        { id: "f", text: "Impftermine bequem online buchen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Letzte Woche ___(1)___ ich bei meinem Hausarzt zur Vorsorgeuntersuchung. Ich ___(2)___ lange keinen Termin gemacht. Der Arzt ___(3)___ mich gründlich untersucht. Am Anfang ___(4)___ ich unsicher, ob ich die Impfung machen soll. Jetzt möchte ich jedes Jahr ___(5)___ zur Vorsorge gehen.",
      luecken: [
        { nr: 1, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 2, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 3, o: ["hat", "ist", "war"], c: 0, h: "der Arzt → hat." },
        { nr: 4, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 5, o: ["regelmäßig", "selten", "nie"], c: 0, h: "häufig → regelmäßig." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Impfung", "Vorsorgeuntersuchung", "kostenlos", "Hausarzt", "empfehlen"],
      text: "Bei der jährlichen ___(6)___ prüft der ___(7)___ den Gesundheitszustand. Die Untersuchung ist meistens ___(8)___. Der Arzt kann auch eine ___(9)___ ___(10)___.",
      loesung: { 6: "Vorsorgeuntersuchung", 7: "Hausarzt", 8: "kostenlos", 9: "Impfung", 10: "empfehlen" }
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
        situation: "Sie waren zur Vorsorgeuntersuchung und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, warum Sie hingegangen sind.", "Berichten Sie, wie es war.", "Empfehlen Sie der Person, auch hinzugehen."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

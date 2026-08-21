// ============================================================
// FLOß Modelltest A2 — Nr. 19
// Gleiches Format wie Nr. 01–18.
// ============================================================

window.MODELLTEST_A2_19 = {
  testKey: "modelltest-a2-19",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 19",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Fernstudium neben dem Job" },
        { id: 2, text: "Online-Kurse für Sprachen" },
        { id: 3, text: "Prüfungen online ablegen" },
        { id: 4, text: "Zertifikat nach Abschluss" },
        { id: 5, text: "Lernplattform mit Videos" },
        { id: 6, text: "Fernstudium kostet Geld" },
        { id: 7, text: "Zeitmanagement beim Fernstudium" },
        { id: 8, text: "Kontakt zu anderen Studierenden" }
      ],
      texte: [
        { id: "a", text: "Viele Menschen entscheiden sich für ein Fernstudium, weil sie es flexibel neben dem Job machen können." },
        { id: "b", text: "Auf der Lernplattform gibt es viele Videos, die die wichtigsten Themen erklären." },
        { id: "c", text: "Nach dem erfolgreichen Abschluss erhält man ein offizielles Zertifikat." },
        { id: "d", text: "Manche Prüfungen können bequem von zu Hause aus online abgelegt werden." },
        { id: "e", text: "Über ein Online-Forum können Studierende Fragen stellen und sich austauschen." }
      ],
      loesung: { a: 1, b: 5, c: 4, d: 3, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit drei Monaten mache ich ein Fernstudium neben meinem Job. Am Anfang war es schwierig, meine Zeit gut einzuteilen, weil ich abends oft müde war. Mit der Zeit habe ich aber einen festen Lernplan entwickelt, der mir hilft. Die Lernplattform bietet viele Videos, die ich mir auch am Wochenende ansehen kann. Über das Online-Forum habe ich Kontakt zu anderen Studierenden bekommen, was mich sehr motiviert. Die Prüfungen kann ich bequem von zu Hause aus online ablegen. Ich bin froh, dass ich mich für diesen flexiblen Weg entschieden habe.",
      aussagen: [
        { nr: 1, text: "Die Person macht seit drei Monaten ein Fernstudium.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Am Anfang war die Zeiteinteilung leicht.", korrekt: false, hinweis: "Gegenteil: 'am Anfang war es schwierig'." },
        { nr: 3, text: "Die Person hat einen festen Lernplan entwickelt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person hat keinen Kontakt zu anderen Studierenden.", korrekt: false, hinweis: "Gegenteil: 'Kontakt zu anderen Studierenden bekommen'." },
        { nr: 5, text: "Die Prüfungen müssen persönlich vor Ort abgelegt werden.", korrekt: false, hinweis: "Gegenteil: 'bequem von zu Hause aus online ablegen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten ein Fernstudium neben dem Job machen." },
        { nr: 2, text: "Sie suchen Videos zum Lernen." },
        { nr: 3, text: "Sie möchten ein Zertifikat erhalten." },
        { nr: 4, text: "Sie möchten Prüfungen online ablegen." },
        { nr: 5, text: "Sie suchen Kontakt zu anderen Studierenden." },
        { nr: 6, text: "Sie möchten die Kurskosten erfahren." },
        { nr: 7, text: "Sie suchen ein Vollzeitstudium vor Ort." },
        { nr: 8, text: "Sie möchten ein Praktikum machen." },
        { nr: 9, text: "Sie suchen eine Bibliothek." },
        { nr: 10, text: "Sie möchten einen Vortrag besuchen." }
      ],
      anzeigen: [
        { id: "a", text: "Fernstudium flexibel neben dem Job." },
        { id: "b", text: "Lernplattform mit vielen Videos." },
        { id: "c", text: "Zertifikat nach erfolgreichem Abschluss." },
        { id: "d", text: "Prüfungen bequem online von zu Hause." },
        { id: "e", text: "Online-Forum für den Austausch mit anderen Studierenden." },
        { id: "f", text: "Kursgebühren und Kosten im Überblick." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit drei Monaten ___(1)___ ich ein Fernstudium neben meinem Job. Am Anfang ___(2)___ es schwierig, meine Zeit einzuteilen. Mit der Zeit ___(3)___ ich einen festen Lernplan entwickelt. Über das Forum ___(4)___ ich Kontakt zu anderen Studierenden bekommen, ___(5)___ mich sehr motiviert.",
      luecken: [
        { nr: 1, o: ["mache", "macht", "machen"], c: 0, h: "ich → mache." },
        { nr: 2, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 3, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 4, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 5, o: ["was", "das", "die"], c: 0, h: "Relativsatz auf ganzen Satz → was." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Fernstudium", "flexibel", "Lernplan", "online", "motiviert"],
      text: "Ein ___(6)___ kann man neben dem Job machen. Es ist sehr ___(7)___. Ein guter ___(8)___ hilft beim Lernen. Prüfungen kann man ___(9)___ ablegen. Der Kontakt zu anderen macht ___(10)___.",
      loesung: { 6: "Fernstudium", 7: "flexibel", 8: "Lernplan", 9: "online", 10: "motiviert" }
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
        situation: "Sie machen ein Fernstudium neben dem Job und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, was Sie studieren.", "Sagen Sie, was für Sie schwierig ist.", "Empfehlen Sie es der Person."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

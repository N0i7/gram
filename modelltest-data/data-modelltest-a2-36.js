// ============================================================
// FLOß Modelltest A2 — Nr. 36
// Gleiches Format wie Nr. 01–35.
// ============================================================

window.MODELLTEST_A2_36 = {
  testKey: "modelltest-a2-36",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 36",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Online lernen für Erwachsene" },
        { id: 2, text: "Flexibel lernen von zu Hause" },
        { id: 3, text: "Kurse mit Zertifikat" },
        { id: 4, text: "Lernen in der eigenen Geschwindigkeit" },
        { id: 5, text: "Kostenlose Kurse im Internet" },
        { id: 6, text: "Austausch mit anderen Lernenden" },
        { id: 7, text: "Präsenzkurse werden abgeschafft" },
        { id: 8, text: "Kurse nur für junge Menschen" }
      ],
      texte: [
        { id: "a", text: "Digitale Lernplattformen bieten Erwachsenen viele neue Möglichkeiten." },
        { id: "b", text: "Man kann flexibel von zu Hause lernen, wann man Zeit hat." },
        { id: "c", text: "Nach manchen Kursen bekommt man ein Zertifikat." },
        { id: "d", text: "Jeder kann in seinem eigenen Tempo lernen." },
        { id: "e", text: "In Foren können sich Lernende austauschen und Fragen stellen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit einigen Monaten nutze ich eine digitale Lernplattform, um mein Deutsch zu verbessern. Ich kann flexibel lernen, wann ich Zeit habe, meistens abends nach der Arbeit. Ich lerne dabei in meinem eigenen Tempo, was mir sehr gut gefällt. Nach jedem Kurs bekomme ich ein kleines Zertifikat. In einem Forum kann ich mich mit anderen Lernenden austauschen. Manche Kurse sind sogar kostenlos.",
      aussagen: [
        { nr: 1, text: "Die Person nutzt seit Monaten eine Lernplattform.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person kann nicht flexibel lernen.", korrekt: false, hinweis: "Gegenteil: 'Ich kann flexibel lernen'." },
        { nr: 3, text: "Die Person lernt in ihrem eigenen Tempo.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Es gibt kein Zertifikat.", korrekt: false, hinweis: "Gegenteil: 'bekomme ich ein kleines Zertifikat'." },
        { nr: 5, text: "Alle Kurse kosten Geld.", korrekt: false, hinweis: "Gegenteil: 'Manche Kurse sind sogar kostenlos'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen eine digitale Lernplattform für Deutsch." },
        { nr: 2, text: "Sie möchten flexibel von zu Hause lernen." },
        { nr: 3, text: "Sie möchten ein Zertifikat für Ihren Kurs." },
        { nr: 4, text: "Sie möchten sich mit anderen Lernenden austauschen." },
        { nr: 5, text: "Sie suchen kostenlose Kurse im Internet." },
        { nr: 6, text: "Sie suchen einen Präsenzkurs." },
        { nr: 7, text: "Sie suchen ein Buch zum Deutschlernen." },
        { nr: 8, text: "Sie suchen einen Privatlehrer." },
        { nr: 9, text: "Sie suchen eine Prüfungsvorbereitung." },
        { nr: 10, text: "Sie suchen ein Wörterbuch." }
      ],
      anzeigen: [
        { id: "a", text: "Digitale Lernplattform für Deutsch." },
        { id: "b", text: "Flexibel lernen — jederzeit und überall." },
        { id: "c", text: "Kurse mit Zertifikat." },
        { id: "d", text: "Forum für Deutschlernende." },
        { id: "e", text: "Kostenlose Online-Kurse." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit einigen Monaten nutze ich eine Lernplattform, ___(1)___ ich mein Deutsch verbessern möchte. Ich lerne flexibel, ___(2)___ ich abends Zeit habe. Ich lerne in meinem Tempo, ___(3)___ mir sehr gut gefällt. In einem Forum, ___(4)___ ich regelmäßig besuche, tausche ich mich aus. Manche Kurse, ___(5)___ ich nutze, sind kostenlos.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["wenn", "als", "ob"], c: 0, h: "Wiederholte Situation → wenn." },
        { nr: 3, o: ["was", "das", "die"], c: 0, h: "Relativpronomen bezogen auf ganzen Satz → was." },
        { nr: 4, o: ["das", "die", "was"], c: 0, h: "Relativpronomen bezogen auf 'Forum' (neutrum) → das." },
        { nr: 5, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Kurse' (Plural) → die." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Lernplattform", "flexibel", "Tempo", "Zertifikat", "kostenlos"],
      text: "Eine digitale ___(6)___ bietet viele Vorteile. Man kann ___(7)___ lernen. Jeder lernt in seinem eigenen ___(8)___. Nach dem Kurs bekommt man ein ___(9)___. Manche Kurse sind ___(10)___.",
      loesung: { 6: "Lernplattform", 7: "flexibel", 8: "Tempo", 9: "Zertifikat", 10: "kostenlos" }
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
        situation: "Sie lernen mit einer digitalen Lernplattform Deutsch. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, welche Plattform Sie nutzen.", "Berichten Sie, was Ihnen daran gefällt.", "Empfehlen Sie der Person die Plattform."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

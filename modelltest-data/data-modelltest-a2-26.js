// ============================================================
// FLOß Modelltest A2 — Nr. 26
// Gleiches Format wie Nr. 01–25.
// ============================================================

window.MODELLTEST_A2_26 = {
  testKey: "modelltest-a2-26",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 26",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Schritte zählen mit dem Handy" },
        { id: 2, text: "Fitness-Tracker am Handgelenk" },
        { id: 3, text: "Gesundheitsapp motiviert zum Sport" },
        { id: 4, text: "Schlaf mit der App überwachen" },
        { id: 5, text: "Kalorien zählen per App" },
        { id: 6, text: "Herzfrequenz messen" },
        { id: 7, text: "Wasserfestigkeit von Fitness-Trackern" },
        { id: 8, text: "Datenschutz bei Gesundheitsapps" }
      ],
      texte: [
        { id: "a", text: "Viele Menschen nutzen eine App, um ihre täglichen Schritte zu zählen." },
        { id: "b", text: "Ein Fitness-Tracker am Handgelenk zeigt viele Daten wie Puls und Schlaf an." },
        { id: "c", text: "Manche Apps motivieren durch kleine Erfolge, sich mehr zu bewegen." },
        { id: "d", text: "Einige Nutzerinnen und Nutzer machen sich Sorgen um ihre Gesundheitsdaten." },
        { id: "e", text: "Mit der App kann man auch seinen Puls während des Trainings kontrollieren." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 8, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit einigen Monaten benutze ich eine Gesundheitsapp auf meinem Handy. Die App zählt meine Schritte und zeigt mir, wie viele Kalorien ich verbraucht habe. Am Anfang fand ich das nicht so wichtig, aber jetzt schaue ich fast jeden Tag auf die App. Sie motiviert mich, mehr spazieren zu gehen. Ich habe mir auch einen Fitness-Tracker gekauft, der meinen Puls misst. Allerdings mache ich mir manchmal Sorgen, wo diese ganzen Daten gespeichert werden.",
      aussagen: [
        { nr: 1, text: "Die Person benutzt seit einigen Monaten eine Gesundheitsapp.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die App zählt keine Schritte.", korrekt: false, hinweis: "Gegenteil: 'die App zählt meine Schritte'." },
        { nr: 3, text: "Die Person fand die App von Anfang an sehr wichtig.", korrekt: false, hinweis: "Gegenteil: 'am Anfang fand ich das nicht so wichtig'." },
        { nr: 4, text: "Die Person hat einen Fitness-Tracker gekauft.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person macht sich keine Sorgen um ihre Daten.", korrekt: false, hinweis: "Gegenteil: 'mache ich mir manchmal Sorgen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen eine App zum Schritte zählen." },
        { nr: 2, text: "Sie möchten einen Fitness-Tracker kaufen." },
        { nr: 3, text: "Sie suchen eine App, die zum Sport motiviert." },
        { nr: 4, text: "Sie möchten Ihren Schlaf überwachen." },
        { nr: 5, text: "Sie möchten Kalorien zählen." },
        { nr: 6, text: "Sie suchen ein Fitnessstudio." },
        { nr: 7, text: "Sie suchen einen Personal Trainer." },
        { nr: 8, text: "Sie möchten Yoga lernen." },
        { nr: 9, text: "Sie suchen einen Ernährungsberater." },
        { nr: 10, text: "Sie möchten einen Marathon laufen." }
      ],
      anzeigen: [
        { id: "a", text: "Schrittzähler-App — kostenlos." },
        { id: "b", text: "Fitness-Tracker mit Pulsmessung." },
        { id: "c", text: "Motivations-App für mehr Bewegung." },
        { id: "d", text: "Schlaf-Tracking-App." },
        { id: "e", text: "Kalorienzähler-App." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit einigen Monaten ___(1)___ ich eine Gesundheitsapp. Am Anfang fand ich das nicht so wichtig, ___(2)___ jetzt schaue ich fast jeden Tag darauf. Die App motiviert mich, ___(3)___ spazieren zu gehen. Ich habe mir auch einen Fitness-Tracker gekauft, ___(4)___ meinen Puls misst. Allerdings mache ich mir manchmal Sorgen, ___(5)___ diese Daten gespeichert werden.",
      luecken: [
        { nr: 1, o: ["benutze", "benutzt", "benutzen"], c: 0, h: "ich → benutze." },
        { nr: 2, o: ["aber", "denn", "oder"], c: 0, h: "Gegensatz → aber." },
        { nr: 3, o: ["mehr", "wenig", "kein"], c: 0, h: "Steigerung → mehr." },
        { nr: 4, o: ["der", "die", "das"], c: 0, h: "Relativpronomen bezogen auf 'Fitness-Tracker' (maskulin) → der." },
        { nr: 5, o: ["wo", "was", "wer"], c: 0, h: "Ortsfrage → wo." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Gesundheitsapp", "Schritte", "motiviert", "Fitness-Tracker", "Daten"],
      text: "Eine ___(6)___ kann helfen, gesünder zu leben. Sie zählt zum Beispiel die täglichen ___(7)___. Das ___(8)___ viele Menschen, sich mehr zu bewegen. Ein ___(9)___ misst zusätzlich den Puls. Manche Nutzer sorgen sich um ihre ___(10)___.",
      loesung: { 6: "Gesundheitsapp", 7: "Schritte", 8: "motiviert", 9: "Fitness-Tracker", 10: "Daten" }
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
        situation: "Sie nutzen seit Kurzem eine Gesundheitsapp und sind zufrieden damit. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, welche App Sie nutzen.", "Berichten Sie, was Ihnen daran gefällt.", "Empfehlen Sie die App der Person."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

// ============================================================
// FLOß Modelltest A2 — Nr. 15
// Gleiches Format wie Nr. 01–14.
// ============================================================

window.MODELLTEST_A2_15 = {
  testKey: "modelltest-a2-15",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 15",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Elektroauto mieten statt kaufen" },
        { id: 2, text: "Ladestation in der Stadt" },
        { id: 3, text: "Förderung beim Kauf eines Elektroautos" },
        { id: 4, text: "Reichweite von Elektroautos steigt" },
        { id: 5, text: "Elektrofahrrad für den Alltag" },
        { id: 6, text: "Carsharing mit Elektroautos" },
        { id: 7, text: "Ladezeit verkürzt sich" },
        { id: 8, text: "Elektroautos werden günstiger" }
      ],
      texte: [
        { id: "a", text: "In der Innenstadt gibt es jetzt mehr Ladestationen, sodass Elektroautos einfacher aufgeladen werden können." },
        { id: "b", text: "Wer ein Elektroauto kauft, kann in vielen Ländern eine staatliche Förderung beantragen." },
        { id: "c", text: "Neue Elektroautos schaffen mittlerweile deutlich mehr Kilometer mit einer Akkuladung als früher." },
        { id: "d", text: "Immer mehr Menschen nutzen ein Elektrofahrrad für den Weg zur Arbeit, weil es praktisch und schnell ist." },
        { id: "e", text: "Carsharing-Anbieter setzen zunehmend auf Elektroautos, die man stundenweise mieten kann." }
      ],
      loesung: { a: 2, b: 3, c: 4, d: 5, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Vor sechs Monaten habe ich mir ein Elektrofahrrad gekauft, um zur Arbeit zu fahren. Am Anfang war ich skeptisch, weil ich dachte, es wäre zu teuer und unpraktisch. Nach kurzer Zeit habe ich aber gemerkt, dass ich viel Zeit spare, weil ich den Stau umfahren kann. Außerdem muss ich keinen Parkplatz mehr suchen. Die Akkuladung reicht für meinen ganzen Arbeitsweg und noch etwas mehr. Manchmal fahre ich auch am Wochenende damit, zum Beispiel zum Einkaufen. Ich würde jedem empfehlen, ein Elektrofahrrad einmal auszuprobieren.",
      aussagen: [
        { nr: 1, text: "Die Person hat sich vor sechs Monaten ein Elektrofahrrad gekauft.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person war von Anfang an vom Elektrofahrrad überzeugt.", korrekt: false, hinweis: "Gegenteil: 'am Anfang war ich skeptisch'." },
        { nr: 3, text: "Die Person spart Zeit, weil sie den Stau umfahren kann.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person muss weiterhin einen Parkplatz suchen.", korrekt: false, hinweis: "Gegenteil: 'muss keinen Parkplatz mehr suchen'." },
        { nr: 5, text: "Die Person nutzt das Fahrrad nur zur Arbeit, nie am Wochenende.", korrekt: false, hinweis: "Gegenteil: 'manchmal fahre ich auch am Wochenende'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten ein Elektroauto mieten." },
        { nr: 2, text: "Sie suchen eine Ladestation in der Stadt." },
        { nr: 3, text: "Sie möchten eine Förderung beim Autokauf beantragen." },
        { nr: 4, text: "Sie interessieren sich für die Reichweite neuer Modelle." },
        { nr: 5, text: "Sie möchten ein Elektrofahrrad kaufen." },
        { nr: 6, text: "Sie möchten Carsharing mit Elektroautos nutzen." },
        { nr: 7, text: "Sie suchen einen Mechaniker für Benzinautos." },
        { nr: 8, text: "Sie möchten ein Motorrad kaufen." },
        { nr: 9, text: "Sie suchen eine Autoversicherung." },
        { nr: 10, text: "Sie möchten einen Führerschein machen." }
      ],
      anzeigen: [
        { id: "a", text: "Elektroauto mieten, stundenweise oder tageweise." },
        { id: "b", text: "Ladestationen in der Innenstadt, Übersichtskarte verfügbar." },
        { id: "c", text: "Förderung beim Kauf eines Elektroautos beantragen." },
        { id: "d", text: "Neue Modelle mit höherer Reichweite im Vergleich." },
        { id: "e", text: "Elektrofahrräder für den Alltag, verschiedene Modelle." },
        { id: "f", text: "Carsharing mit Elektroautos, App-basiert." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Vor sechs Monaten ___(1)___ ich mir ein Elektrofahrrad gekauft. Am Anfang ___(2)___ ich skeptisch. Nach kurzer Zeit ___(3)___ ich gemerkt, dass ich viel Zeit spare. Ich muss keinen Parkplatz mehr suchen, ___(4)___ ich das Fahrrad nutze. Ich würde jedem ___(5)___, ein Elektrofahrrad auszuprobieren.",
      luecken: [
        { nr: 1, o: ["habe", "hatte", "hätte"], c: 0, h: "Perfekt: habe gekauft." },
        { nr: 2, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 3, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 4, o: ["weil", "obwohl", "damit"], c: 0, h: "Grund → weil." },
        { nr: 5, o: ["empfehlen", "empfiehlt", "empfehle"], c: 0, h: "ich würde → empfehlen (Infinitiv)." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Elektrofahrrad", "Akkuladung", "praktisch", "Stau", "skeptisch"],
      text: "Mein ___(6)___ hilft mir, den ___(7)___ zu umfahren. Am Anfang war ich ___(8)___, aber jetzt finde ich es sehr ___(9)___. Die ___(10)___ reicht für meinen ganzen Arbeitsweg.",
      loesung: { 6: "Elektrofahrrad", 7: "Stau", 8: "skeptisch", 9: "praktisch", 10: "Akkuladung" }
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
        situation: "Sie haben ein Elektrofahrrad gekauft und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, seit wann Sie das Fahrrad haben.", "Sagen Sie, was Ihnen daran gefällt.", "Empfehlen Sie es der Person."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

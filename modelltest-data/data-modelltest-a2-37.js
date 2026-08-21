// ============================================================
// FLOß Modelltest A2 — Nr. 37
// Gleiches Format wie Nr. 01–36.
// ============================================================

window.MODELLTEST_A2_37 = {
  testKey: "modelltest-a2-37",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 37",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Barrierefreie Webseiten" },
        { id: 2, text: "Untertitel bei Videos" },
        { id: 3, text: "Vorlesefunktion nutzen" },
        { id: 4, text: "Größere Schrift einstellen" },
        { id: 5, text: "Digitale Angebote für alle" },
        { id: 6, text: "Barrierefreiheit kostet Geld" },
        { id: 7, text: "Gesetzliche Vorschriften" },
        { id: 8, text: "Apps ohne Barrierefreiheit" }
      ],
      texte: [
        { id: "a", text: "Viele Webseiten werden inzwischen barrierefrei gestaltet." },
        { id: "b", text: "Videos bekommen oft Untertitel für Menschen mit Hörproblemen." },
        { id: "c", text: "Eine Vorlesefunktion hilft Menschen, die schlecht sehen können." },
        { id: "d", text: "Man kann die Schrift auf vielen Seiten größer einstellen." },
        { id: "e", text: "Digitale Angebote sollen für alle Menschen nutzbar sein." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Immer mehr digitale Angebote werden barrierefrei gestaltet. Videos bekommen zum Beispiel Untertitel, damit auch Menschen mit Hörproblemen sie verstehen können. Auf vielen Webseiten kann man außerdem die Schriftgröße selbst einstellen. Eine Vorlesefunktion hilft Menschen, die schlecht sehen können. Solche digitalen Angebote sollen möglichst für alle Menschen nutzbar sein. Ich finde es gut, dass sich hier in den letzten Jahren viel verändert hat.",
      aussagen: [
        { nr: 1, text: "Immer mehr digitale Angebote werden barrierefrei.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Videos bekommen nie Untertitel.", korrekt: false, hinweis: "Gegenteil: 'bekommen... Untertitel'." },
        { nr: 3, text: "Man kann die Schriftgröße einstellen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Vorlesefunktion hilft niemandem.", korrekt: false, hinweis: "Gegenteil: 'hilft Menschen, die schlecht sehen können'." },
        { nr: 5, text: "Die Person findet die Entwicklung nicht gut.", korrekt: false, hinweis: "Gegenteil: 'Ich finde es gut'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten Ihre Webseite barrierefrei gestalten." },
        { nr: 2, text: "Sie suchen Untertitel für Ihre Videos." },
        { nr: 3, text: "Sie möchten eine Vorlesefunktion einrichten." },
        { nr: 4, text: "Sie möchten die Schriftgröße Ihrer App anpassen." },
        { nr: 5, text: "Sie möchten sich über gesetzliche Vorschriften informieren." },
        { nr: 6, text: "Sie suchen ein neues Handy." },
        { nr: 7, text: "Sie suchen einen Internetanbieter." },
        { nr: 8, text: "Sie suchen eine Druckerei." },
        { nr: 9, text: "Sie suchen eine Webagentur." },
        { nr: 10, text: "Sie suchen einen Grafikdesigner." }
      ],
      anzeigen: [
        { id: "a", text: "Beratung zu barrierefreien Webseiten." },
        { id: "b", text: "Untertitel-Service für Videos." },
        { id: "c", text: "Vorlesefunktion einrichten lassen." },
        { id: "d", text: "App-Einstellungen für größere Schrift." },
        { id: "e", text: "Informationen zu gesetzlichen Vorschriften." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Immer mehr Angebote werden barrierefrei, ___(1)___ das vielen Menschen hilft. Videos bekommen Untertitel, ___(2)___ auch Menschen mit Hörproblemen sie verstehen können. Auf Webseiten, ___(3)___ ich oft besuche, kann man die Schrift einstellen. Eine Vorlesefunktion, ___(4)___ ich manchmal nutze, hilft beim Lesen. Ich finde es gut, ___(5)___ sich hier viel verändert hat.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["damit", "weil", "obwohl"], c: 0, h: "Finalsatz → damit." },
        { nr: 3, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Webseiten' (Plural) → die." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Vorlesefunktion' (feminin) → die." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'finde es gut' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["barrierefrei", "Untertitel", "Vorlesefunktion", "Schriftgröße", "nutzbar"],
      text: "Digitale Angebote werden immer öfter ___(6)___ gestaltet. Videos bekommen ___(7)___. Eine ___(8)___ hilft beim Lesen. Man kann die ___(9)___ einstellen. So sind die Angebote für alle ___(10)___.",
      loesung: { 6: "barrierefrei", 7: "Untertitel", 8: "Vorlesefunktion", 9: "Schriftgröße", 10: "nutzbar" }
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
        situation: "Sie haben eine barrierefreie App entdeckt, die Ihnen sehr hilft. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, welche App Sie nutzen.", "Berichten Sie, was Ihnen daran hilft.", "Empfehlen Sie der Person die App."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

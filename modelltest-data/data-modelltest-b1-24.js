// ============================================================
// FLOß Modelltest B1 — Nr. 24
// Gleiches Format wie Nr. 01–23.
// ============================================================

window.MODELLTEST_B1_24 = {
  testKey: "modelltest-b1-24",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 24",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Konto im Ausland eröffnen" },
        { id: 2, text: "Geld ins Ausland überweisen" },
        { id: 3, text: "Gebühren beim Geldwechsel" },
        { id: 4, text: "Kreditkarte im Ausland nutzen" },
        { id: 5, text: "Online-Banking im Ausland" },
        { id: 6, text: "Bargeld am Automaten abheben" },
        { id: 7, text: "Bankkonto in der Heimat behalten" },
        { id: 8, text: "Wechselkurs vergleichen" }
      ],
      texte: [
        { id: "a", text: "Für die Eröffnung eines Kontos im Ausland benötigt man meist einen Wohnsitznachweis und einen gültigen Ausweis." },
        { id: "b", text: "Bei internationalen Überweisungen fallen oft zusätzliche Gebühren an, die je nach Bank unterschiedlich hoch sind." },
        { id: "c", text: "Beim Geldwechsel lohnt es sich, die Gebühren verschiedener Anbieter zu vergleichen." },
        { id: "d", text: "Viele Kreditkarten können auch im Ausland problemlos zum Bezahlen genutzt werden." },
        { id: "e", text: "Wer im Ausland lebt, kann meist trotzdem online auf sein Konto in der Heimat zugreifen." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Als ich ins Ausland gezogen bin, musste ich mich zunächst um ein neues Bankkonto kümmern. Für die Kontoeröffnung brauchte ich einen Wohnsitznachweis und meinen Reisepass. Mein altes Konto in der Heimat habe ich aber trotzdem behalten, weil ich es für einige Zahlungen noch brauche. Bei internationalen Überweisungen zwischen den beiden Konten fallen leider Gebühren an, die ich anfangs unterschätzt habe. Inzwischen nutze ich eine App, mit der ich die Gebühren verschiedener Anbieter vergleichen kann, um Geld zu sparen.",
      aussagen: [
        { nr: 1, text: "Die Person hat sich nach dem Umzug um ein neues Konto gekümmert.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Für die Kontoeröffnung war kein Wohnsitznachweis nötig.", korrekt: false, hinweis: "Gegenteil: 'brauchte ich einen Wohnsitznachweis'." },
        { nr: 3, text: "Die Person hat ihr altes Konto in der Heimat aufgelöst.", korrekt: false, hinweis: "Gegenteil: 'habe ich aber trotzdem behalten'." },
        { nr: 4, text: "Bei den Überweisungen fallen Gebühren an.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person nutzt keine App zum Gebührenvergleich.", korrekt: false, hinweis: "Gegenteil: 'nutze ich eine App... um Gebühren zu vergleichen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten ein Konto im Ausland eröffnen." },
        { nr: 2, text: "Sie möchten Geld ins Ausland überweisen." },
        { nr: 3, text: "Sie suchen einen günstigen Geldwechsel." },
        { nr: 4, text: "Sie möchten eine Kreditkarte ohne Auslandsgebühren." },
        { nr: 5, text: "Sie möchten online auf Ihr Heimatkonto zugreifen." },
        { nr: 6, text: "Sie suchen eine Versicherung für Auslandsreisen." },
        { nr: 7, text: "Sie möchten einen Kredit aufnehmen." },
        { nr: 8, text: "Sie suchen eine Immobilie im Ausland." },
        { nr: 9, text: "Sie möchten Aktien kaufen." },
        { nr: 10, text: "Sie suchen einen Finanzberater." }
      ],
      anzeigen: [
        { id: "a", text: "Kontoeröffnung im Ausland — schnell und einfach." },
        { id: "b", text: "Günstige internationale Überweisungen." },
        { id: "c", text: "Geldwechsel-App: Gebühren vergleichen." },
        { id: "d", text: "Kreditkarte ohne Auslandsgebühren." },
        { id: "e", text: "Online-Banking von überall auf der Welt." },
        { id: "f", text: "Auslandskrankenversicherung für Expats." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Als ich ins Ausland ___(1)___ bin, musste ich mich um ein neues Bankkonto kümmern. Für die Kontoeröffnung ___(2)___ ich einen Wohnsitznachweis. Mein altes Konto habe ich trotzdem behalten, ___(3)___ ich es noch brauche. Bei Überweisungen fallen Gebühren an, ___(4)___ ich anfangs unterschätzt habe. Inzwischen nutze ich eine App, ___(5)___ ich Gebühren vergleichen kann.",
      luecken: [
        { nr: 1, o: ["gezogen", "gefahren", "geflogen"], c: 0, h: "'ziehen' → gezogen, passt zu 'Umzug'." },
        { nr: 2, o: ["brauchte", "brauche", "bräuchte"], c: 0, h: "Präteritum → brauchte." },
        { nr: 3, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Gebühren' (Plural) → die." },
        { nr: 5, o: ["mit der", "mit dem", "womit"], c: 0, h: "Relativsatz mit Präposition, bezogen auf 'App' (feminin) → mit der." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Wohnsitznachweis", "Gebühren", "Überweisung", "Wechselkurs", "Konto"],
      text: "Für die Kontoeröffnung braucht man einen ___(6)___. Bei einer internationalen ___(7)___ fallen oft ___(8)___ an. Es lohnt sich, den ___(9)___ zu vergleichen. So spart man beim ___(10)___ im Ausland Geld.",
      loesung: { 6: "Wohnsitznachweis", 7: "Überweisung", 8: "Gebühren", 9: "Wechselkurs", 10: "Konto" }
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
        situation: "Sie leben im Ausland und haben gerade ein neues Bankkonto eröffnet. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, warum Sie ein neues Konto brauchten.", "Berichten Sie, welche Unterlagen nötig waren.", "Geben Sie einen Tipp für Bankgeschäfte im Ausland."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an Ihre Bank, um sich nach den Gebühren für internationale Überweisungen zu erkundigen.",
        punkte: ["Beschreiben Sie Ihr Anliegen.", "Fragen Sie nach den genauen Gebühren.", "Fragen Sie nach Alternativen zur Kostenersparnis."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

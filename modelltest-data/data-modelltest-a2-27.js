// ============================================================
// FLOß Modelltest A2 — Nr. 27
// Gleiches Format wie Nr. 01–26.
// ============================================================

window.MODELLTEST_A2_27 = {
  testKey: "modelltest-a2-27",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 27",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Barrierefreie Hotels finden" },
        { id: 2, text: "Rollstuhlgerechte Verkehrsmittel" },
        { id: 3, text: "Reiseplanung für Menschen mit Behinderung" },
        { id: 4, text: "Assistenz am Flughafen" },
        { id: 5, text: "Barrierefreie Sehenswürdigkeiten" },
        { id: 6, text: "Reisekosten sparen" },
        { id: 7, text: "Barrierefreie Reisen werden beliebter" },
        { id: 8, text: "Informationen vor der Reise einholen" }
      ],
      texte: [
        { id: "a", text: "Immer mehr Hotels bieten barrierefreie Zimmer für Reisende mit Behinderung an." },
        { id: "b", text: "In vielen Städten gibt es inzwischen rollstuhlgerechte Busse und Bahnen." },
        { id: "c", text: "Wer eine Behinderung hat, sollte die Reise besonders sorgfältig planen." },
        { id: "d", text: "Am Flughafen kann man vorab Assistenz für den Weg zum Flugzeug anfragen." },
        { id: "e", text: "Es lohnt sich, vor der Reise online Informationen zur Barrierefreiheit zu sammeln." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Meine Schwester sitzt im Rollstuhl und wir planen gemeinsam eine Reise nach Deutschland. Zuerst haben wir online nach barrierefreien Hotels gesucht und ein passendes Zimmer gefunden. Am Flughafen haben wir Assistenz angefragt, damit meine Schwester sicher zum Flugzeug kommt. In der Stadt, die wir besuchen, gibt es zum Glück viele rollstuhlgerechte Busse. Wir haben auch vorab recherchiert, welche Sehenswürdigkeiten barrierefrei zugänglich sind. Diese sorgfältige Planung hat uns viel Stress erspart.",
      aussagen: [
        { nr: 1, text: "Die Schwester sitzt im Rollstuhl.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Sie haben kein barrierefreies Hotel gefunden.", korrekt: false, hinweis: "Gegenteil: 'ein passendes Zimmer gefunden'." },
        { nr: 3, text: "Am Flughafen haben sie keine Assistenz angefragt.", korrekt: false, hinweis: "Gegenteil: 'haben wir Assistenz angefragt'." },
        { nr: 4, text: "In der Stadt gibt es rollstuhlgerechte Busse.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Planung hat viel Stress erspart.", korrekt: true, hinweis: "Direkt im letzten Satz." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen ein barrierefreies Hotel." },
        { nr: 2, text: "Sie brauchen Assistenz am Flughafen." },
        { nr: 3, text: "Sie suchen rollstuhlgerechte Verkehrsmittel." },
        { nr: 4, text: "Sie möchten barrierefreie Sehenswürdigkeiten finden." },
        { nr: 5, text: "Sie suchen einen Reiseführer für Menschen mit Behinderung." },
        { nr: 6, text: "Sie suchen einen Mietwagen." },
        { nr: 7, text: "Sie möchten einen Sprachkurs machen." },
        { nr: 8, text: "Sie suchen eine Reiseversicherung." },
        { nr: 9, text: "Sie möchten ein Museum besuchen." },
        { nr: 10, text: "Sie suchen ein Restaurant." }
      ],
      anzeigen: [
        { id: "a", text: "Barrierefreie Hotels — jetzt buchen." },
        { id: "b", text: "Assistenzservice für Flugreisende." },
        { id: "c", text: "Rollstuhlgerechte Busse und Bahnen." },
        { id: "d", text: "Barrierefreie Sehenswürdigkeiten in der Übersicht." },
        { id: "e", text: "Reiseführer für Menschen mit Behinderung." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Meine Schwester sitzt im Rollstuhl, ___(1)___ planen wir die Reise besonders sorgfältig. Zuerst haben wir online ___(2)___ barrierefreien Hotels gesucht. Am Flughafen haben wir Assistenz angefragt, ___(3)___ meine Schwester sicher zum Flugzeug kommt. In der Stadt gibt es zum Glück viele rollstuhlgerechte Busse, ___(4)___ uns sehr hilft. Diese Planung, ___(5)___ wir sorgfältig gemacht haben, hat uns viel Stress erspart.",
      luecken: [
        { nr: 1, o: ["deshalb", "trotzdem", "obwohl"], c: 0, h: "Folge → deshalb." },
        { nr: 2, o: ["nach", "über", "für"], c: 0, h: "'suchen nach' — feste Wendung." },
        { nr: 3, o: ["damit", "weil", "obwohl"], c: 0, h: "Zweck → damit." },
        { nr: 4, o: ["was", "das", "die"], c: 0, h: "Relativsatz auf ganzen Satz → was." },
        { nr: 5, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Planung' (feminin) → die." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["barrierefrei", "Assistenz", "Rollstuhl", "Sehenswürdigkeiten", "Planung"],
      text: "Menschen im ___(6)___ brauchen oft besondere Reiseplanung. Viele Hotels sind heute ___(7)___. Am Flughafen kann man ___(8)___ anfragen. Auch viele ___(9)___ sind inzwischen zugänglich. Eine gute ___(10)___ erspart viel Stress.",
      loesung: { 6: "Rollstuhl", 7: "barrierefrei", 8: "Assistenz", 9: "Sehenswürdigkeiten", 10: "Planung" }
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
        situation: "Sie haben eine barrierefreie Reise gut geplant und möchten davon berichten. Sie schreiben einer Freundin / einem Freund.",
        punkte: ["Erzählen Sie, wie Sie die Reise geplant haben.", "Berichten Sie, was gut funktioniert hat.", "Geben Sie einen Tipp für barrierefreies Reisen."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

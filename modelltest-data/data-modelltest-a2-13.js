// ============================================================
// FLOß Modelltest A2 — Nr. 13
// Gleiches Format wie Nr. 01–12.
// ============================================================

window.MODELLTEST_A2_13 = {
  testKey: "modelltest-a2-13",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 13",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Termin online buchen" },
        { id: 2, text: "Antrag digital einreichen" },
        { id: 3, text: "Neue App für Behördengänge" },
        { id: 4, text: "Ausweis online beantragen" },
        { id: 5, text: "Formular herunterladen" },
        { id: 6, text: "Digitale Signatur nötig" },
        { id: 7, text: "Papierformular weiterhin möglich" },
        { id: 8, text: "Wartezeiten verkürzt" }
      ],
      texte: [
        { id: "a", text: "Über die neue App können Bürgerinnen und Bürger viele Behördengänge bequem von zu Hause erledigen." },
        { id: "b", text: "Termine im Bürgeramt können jetzt online gebucht werden, ohne dass man persönlich vorbeikommen muss." },
        { id: "c", text: "Der Antrag auf einen neuen Ausweis kann komplett digital gestellt werden, inklusive Foto-Upload." },
        { id: "d", text: "Wer lieber weiterhin ein Papierformular nutzen möchte, kann dieses auch weiterhin persönlich abgeben." },
        { id: "e", text: "Durch die Online-Terminvergabe haben sich die Wartezeiten im Amt deutlich verkürzt." }
      ],
      loesung: { a: 3, b: 1, c: 4, d: 7, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Früher musste ich für jeden Behördengang persönlich zum Amt gehen und oft lange warten. Seit unsere Stadt eine neue App eingeführt hat, ist vieles einfacher geworden. Ich kann Termine online buchen, Formulare herunterladen und manche Anträge sogar komplett digital einreichen. Am Anfang war ich unsicher, weil ich die App nicht kannte, aber nach kurzer Zeit habe ich mich gut zurechtgefunden. Nur für wenige Dinge, wie zum Beispiel die Abholung eines neuen Ausweises, muss ich immer noch persönlich erscheinen. Insgesamt spare ich durch die App viel Zeit.",
      aussagen: [
        { nr: 1, text: "Früher musste die Person für Behördengänge persönlich zum Amt gehen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Stadt hat keine neue App eingeführt.", korrekt: false, hinweis: "Gegenteil: 'neue App eingeführt hat'." },
        { nr: 3, text: "Man kann mit der App Termine online buchen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person hatte von Anfang an keine Probleme mit der App.", korrekt: false, hinweis: "Gegenteil: 'am Anfang war ich unsicher'." },
        { nr: 5, text: "Für alle Behördengänge muss man weiterhin persönlich erscheinen.", korrekt: false, hinweis: "Gegenteil: 'nur für wenige Dinge... muss ich immer noch persönlich erscheinen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten einen Termin online buchen." },
        { nr: 2, text: "Sie möchten einen Ausweis beantragen." },
        { nr: 3, text: "Sie suchen ein Formular zum Herunterladen." },
        { nr: 4, text: "Sie möchten die neue App herunterladen." },
        { nr: 5, text: "Sie möchten ein Papierformular abgeben." },
        { nr: 6, text: "Sie möchten wissen, wie lange die Wartezeit ist." },
        { nr: 7, text: "Sie suchen eine Steuerberatung." },
        { nr: 8, text: "Sie möchten einen Reisepass verlängern." },
        { nr: 9, text: "Sie suchen eine Rechtsberatung." },
        { nr: 10, text: "Sie möchten eine Wohnung ummelden." }
      ],
      anzeigen: [
        { id: "a", text: "Termine online buchen, ohne persönlich vorbeizukommen." },
        { id: "b", text: "Ausweis digital beantragen, inklusive Foto-Upload." },
        { id: "c", text: "Formulare zum Herunterladen auf der Amtswebsite." },
        { id: "d", text: "Neue App für Behördengänge jetzt verfügbar." },
        { id: "e", text: "Papierformular weiterhin persönlich abgebbar." },
        { id: "f", text: "Wartezeiten durch Online-Terminvergabe verkürzt." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Früher ___(1)___ ich für jeden Behördengang persönlich zum Amt gehen. Seit die Stadt eine neue App ___(2)___ hat, ist vieles einfacher geworden. Ich ___(3)___ Termine online buchen. Am Anfang ___(4)___ ich unsicher, ___(5)___ ich die App nicht kannte.",
      luecken: [
        { nr: 1, o: ["musste", "muss", "müsste"], c: 0, h: "Präteritum → musste." },
        { nr: 2, o: ["eingeführt", "einführt", "einzuführen"], c: 0, h: "Perfekt: hat eingeführt." },
        { nr: 3, o: ["kann", "könnte", "konnte"], c: 0, h: "Gegenwart → kann." },
        { nr: 4, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 5, o: ["weil", "obwohl", "damit"], c: 0, h: "Grund → weil." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["digital", "persönlich", "online", "einfacher", "Zeit"],
      text: "Viele Behördengänge kann man jetzt ___(6)___ erledigen. Man muss nicht mehr ___(7)___ zum Amt gehen. Termine kann man ___(8)___ buchen. Das macht vieles ___(9)___. So spart man viel ___(10)___.",
      loesung: { 6: "digital", 7: "persönlich", 8: "online", 9: "einfacher", 10: "Zeit" }
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
        situation: "Sie haben die neue App für Behördengänge genutzt und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, was Sie mit der App gemacht haben.", "Sagen Sie, ob es einfach war.", "Empfehlen Sie die App der Person."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

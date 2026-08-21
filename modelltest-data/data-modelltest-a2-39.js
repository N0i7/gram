// ============================================================
// FLOß Modelltest A2 — Nr. 39
// Gleiches Format wie Nr. 01–38.
// ============================================================

window.MODELLTEST_A2_39 = {
  testKey: "modelltest-a2-39",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 39",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Ehrenamtliche Sprachförderung für Kinder" },
        { id: 2, text: "Vorlesen in der Grundschule" },
        { id: 3, text: "Hausaufgabenhilfe anbieten" },
        { id: 4, text: "Spielerisch Deutsch lernen" },
        { id: 5, text: "Eltern werden einbezogen" },
        { id: 6, text: "Sprachförderung wird bezahlt" },
        { id: 7, text: "Förderung nur für Erwachsene" },
        { id: 8, text: "Kinder machen Fortschritte" }
      ],
      texte: [
        { id: "a", text: "Ehrenamtliche unterstützen Kinder beim Deutschlernen." },
        { id: "b", text: "Einmal pro Woche lesen Freiwillige den Kindern in der Schule vor." },
        { id: "c", text: "Manche Freiwillige helfen auch bei den Hausaufgaben." },
        { id: "d", text: "Durch Spiele lernen die Kinder spielerisch neue Wörter." },
        { id: "e", text: "Die Kinder machen dabei schnell sichtbare Fortschritte." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit einem Jahr engagiere ich mich ehrenamtlich in der Sprachförderung für Kinder. Einmal pro Woche lese ich den Kindern in einer Grundschule vor. Manchmal helfe ich auch bei den Hausaufgaben. Durch verschiedene Spiele lernen die Kinder neue Wörter auf spielerische Weise. Ich sehe, wie die Kinder schnell Fortschritte machen, was mich sehr freut. Diese Arbeit ist unbezahlt, aber sie macht mir viel Freude.",
      aussagen: [
        { nr: 1, text: "Die Person engagiert sich seit einem Jahr.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person liest den Kindern nie vor.", korrekt: false, hinweis: "Gegenteil: 'lese ich den Kindern... vor'." },
        { nr: 3, text: "Die Person hilft manchmal bei den Hausaufgaben.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Kinder machen keine Fortschritte.", korrekt: false, hinweis: "Gegenteil: 'wie die Kinder schnell Fortschritte machen'." },
        { nr: 5, text: "Die Arbeit wird bezahlt.", korrekt: false, hinweis: "Gegenteil: 'Diese Arbeit ist unbezahlt'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich für Sprachförderung an Schulen melden." },
        { nr: 2, text: "Sie suchen Vorlesetermine in Grundschulen." },
        { nr: 3, text: "Sie möchten bei Hausaufgaben helfen." },
        { nr: 4, text: "Sie suchen Sprachlernspiele für Kinder." },
        { nr: 5, text: "Sie möchten sich mit anderen Freiwilligen austauschen." },
        { nr: 6, text: "Sie suchen einen bezahlten Job als Lehrer/in." },
        { nr: 7, text: "Sie suchen eine Kita." },
        { nr: 8, text: "Sie suchen einen Kindergarten." },
        { nr: 9, text: "Sie suchen einen Babysitter." },
        { nr: 10, text: "Sie suchen ein Spielzeuggeschäft." }
      ],
      anzeigen: [
        { id: "a", text: "Sprachförderung für Kinder — Freiwillige gesucht." },
        { id: "b", text: "Vorlesepatenschaft an Grundschulen." },
        { id: "c", text: "Hausaufgabenhilfe für Kinder gesucht." },
        { id: "d", text: "Sprachlernspiele für den Unterricht." },
        { id: "e", text: "Austauschgruppe für Sprachförderer." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit einem Jahr engagiere ich mich, ___(1)___ ich Kindern beim Deutschlernen helfen möchte. Einmal pro Woche lese ich vor, ___(2)___ die Kinder Freude am Lesen haben. Manchmal helfe ich bei Hausaufgaben, ___(3)___ ich Zeit habe. Durch Spiele, ___(4)___ ich mit den Kindern spiele, lernen sie neue Wörter. Die Arbeit ist unbezahlt, ___(5)___ sie macht mir viel Freude.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["damit", "weil", "obwohl"], c: 0, h: "Finalsatz → damit." },
        { nr: 3, o: ["wenn", "als", "ob"], c: 0, h: "Wiederholte Situation → wenn." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Spiele' (Plural) → die." },
        { nr: 5, o: ["aber", "denn", "oder"], c: 0, h: "Gegensatz → aber." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Sprachförderung", "Vorlesen", "Hausaufgaben", "spielerisch", "Fortschritte"],
      text: "Bei der ___(6)___ helfen Freiwillige Kindern beim Deutschlernen. Einmal pro Woche machen sie ___(7)___. Manche helfen bei den ___(8)___. Durch Spiele lernen Kinder ___(9)___ neue Wörter. Dabei machen sie schnell ___(10)___.",
      loesung: { 6: "Sprachförderung", 7: "Vorlesen", 8: "Hausaufgaben", 9: "spielerisch", 10: "Fortschritte" }
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
        situation: "Sie engagieren sich ehrenamtlich in der Sprachförderung für Kinder. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, was Sie machen.", "Berichten Sie von einer schönen Erfahrung.", "Fragen Sie, ob die Person auch mitmachen möchte."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

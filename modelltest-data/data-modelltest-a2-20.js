// ============================================================
// FLOß Modelltest A2 — Nr. 20
// Gleiches Format wie Nr. 01–19.
// ============================================================

window.MODELLTEST_A2_20 = {
  testKey: "modelltest-a2-20",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 20",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Elterngeld beantragen" },
        { id: 2, text: "Kindergeld wird monatlich gezahlt" },
        { id: 3, text: "Höhe des Elterngeldes" },
        { id: 4, text: "Elterngeld für beide Eltern" },
        { id: 5, text: "Antrag online möglich" },
        { id: 6, text: "Kindergeld bis zum 18. Lebensjahr" },
        { id: 7, text: "Fristen beim Elterngeldantrag" },
        { id: 8, text: "Kindergeld auch bei Ausbildung" }
      ],
      texte: [
        { id: "a", text: "Eltern können nach der Geburt eines Kindes Elterngeld bei der zuständigen Behörde beantragen." },
        { id: "b", text: "Das Kindergeld wird jeden Monat automatisch auf das Konto der Eltern überwiesen." },
        { id: "c", text: "Die Höhe des Elterngeldes hängt vom vorherigen Einkommen der Eltern ab." },
        { id: "d", text: "Sowohl Mutter als auch Vater können Elterngeld beantragen und sich die Zeit aufteilen." },
        { id: "e", text: "Der Antrag auf Elterngeld kann bequem online gestellt werden." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Nach der Geburt unseres Kindes haben mein Partner und ich Elterngeld beantragt. Am Anfang war der Antrag etwas kompliziert, weil wir viele Unterlagen einreichen mussten. Zum Glück konnten wir den Antrag online stellen, was uns viel Zeit gespart hat. Wir haben uns entschieden, uns die Elternzeit aufzuteilen, sodass beide Zeit mit unserem Kind verbringen können. Die Höhe des Elterngeldes hängt vom Einkommen ab, das wir vorher verdient haben. Zusätzlich zum Elterngeld bekommen wir jeden Monat Kindergeld, das automatisch überwiesen wird. Insgesamt bin ich froh, dass diese Unterstützung existiert.",
      aussagen: [
        { nr: 1, text: "Die Eltern haben nach der Geburt Elterngeld beantragt.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Der Antrag war von Anfang an sehr einfach.", korrekt: false, hinweis: "Gegenteil: 'am Anfang war der Antrag etwas kompliziert'." },
        { nr: 3, text: "Der Antrag konnte online gestellt werden.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Nur ein Elternteil nimmt Elternzeit, der andere gar nicht.", korrekt: false, hinweis: "Gegenteil: 'uns die Elternzeit aufzuteilen'." },
        { nr: 5, text: "Kindergeld wird automatisch überwiesen.", korrekt: true, hinweis: "Direkt im Text genannt." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten Elterngeld beantragen." },
        { nr: 2, text: "Sie möchten wissen, wie hoch das Kindergeld ist." },
        { nr: 3, text: "Sie möchten den Antrag online stellen." },
        { nr: 4, text: "Sie möchten sich die Elternzeit mit dem Partner aufteilen." },
        { nr: 5, text: "Sie möchten wissen, wie viel Elterngeld Sie bekommen." },
        { nr: 6, text: "Sie möchten die Fristen für den Antrag erfahren." },
        { nr: 7, text: "Sie suchen einen Kindergartenplatz." },
        { nr: 8, text: "Sie möchten ein Baby-Erstausstattung kaufen." },
        { nr: 9, text: "Sie suchen eine Hebamme." },
        { nr: 10, text: "Sie möchten Namen für das Baby finden." }
      ],
      anzeigen: [
        { id: "a", text: "Elterngeld beantragen bei der zuständigen Behörde." },
        { id: "b", text: "Kindergeld: aktuelle Beträge im Überblick." },
        { id: "c", text: "Elterngeldantrag online stellen." },
        { id: "d", text: "Elternzeit aufteilen: Informationen für beide Eltern." },
        { id: "e", text: "Elterngeldrechner: Höhe berechnen." },
        { id: "f", text: "Fristen beim Elterngeldantrag beachten." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Nach der Geburt unseres Kindes ___(1)___ wir Elterngeld beantragt. Am Anfang ___(2)___ der Antrag etwas kompliziert. Zum Glück ___(3)___ wir den Antrag online stellen. Wir haben uns entschieden, uns die Elternzeit ___(4)___, sodass beide Zeit mit dem Kind verbringen können. Insgesamt bin ich froh, ___(5)___ diese Unterstützung existiert.",
      luecken: [
        { nr: 1, o: ["haben", "hat", "habe"], c: 0, h: "wir → haben." },
        { nr: 2, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 3, o: ["konnten", "können", "könnten"], c: 0, h: "Präteritum → konnten." },
        { nr: 4, o: ["aufzuteilen", "aufteilen", "aufgeteilt"], c: 0, h: "zu + Infinitiv → aufzuteilen." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'froh' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Elterngeld", "Kindergeld", "Antrag", "Elternzeit", "Einkommen"],
      text: "Nach der Geburt kann man ___(6)___ beantragen. Der ___(7)___ kann online gestellt werden. Zusätzlich bekommt man jeden Monat ___(8)___. Die Höhe hängt vom vorherigen ___(9)___ ab. Man kann sich die ___(10)___ mit dem Partner teilen.",
      loesung: { 6: "Elterngeld", 7: "Antrag", 8: "Kindergeld", 9: "Einkommen", 10: "Elternzeit" }
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
        situation: "Sie haben Elterngeld beantragt und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, wie der Antrag war.", "Sagen Sie, was Sie sich aufgeteilt haben.", "Geben Sie einen Tipp."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

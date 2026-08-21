// ============================================================
// FLOß Modelltest A2 — Nr. 24
// Gleiches Format wie Nr. 01–23.
// ============================================================

window.MODELLTEST_A2_24 = {
  testKey: "modelltest-a2-24",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 24",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Nachhilfe für Schulkinder" },
        { id: 2, text: "Schwierigkeiten in Mathematik" },
        { id: 3, text: "Nachhilfelehrer gesucht" },
        { id: 4, text: "Online-Nachhilfe" },
        { id: 5, text: "Kostenlose Lernförderung" },
        { id: 6, text: "Nachhilfe hilft beim Notenverbessern" },
        { id: 7, text: "Gruppenunterricht statt Einzelunterricht" },
        { id: 8, text: "Nachhilfe in den Ferien" }
      ],
      texte: [
        { id: "a", text: "Viele Eltern suchen Nachhilfe, wenn ihr Kind in der Schule Schwierigkeiten hat." },
        { id: "b", text: "Besonders in Mathematik brauchen viele Schülerinnen und Schüler zusätzliche Hilfe." },
        { id: "c", text: "Eine Schule sucht engagierte Nachhilfelehrerinnen und -lehrer für verschiedene Fächer." },
        { id: "d", text: "Immer mehr Nachhilfe findet heute online über Video statt." },
        { id: "e", text: "Regelmäßige Nachhilfe kann helfen, die Schulnoten deutlich zu verbessern." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Mein Sohn hatte lange Schwierigkeiten in Mathematik. Deshalb haben wir eine Nachhilfelehrerin gesucht, die ihm einmal pro Woche hilft. Am Anfang fand er die Nachhilfe nicht so gut, weil er lieber draußen spielen wollte. Nach einigen Wochen hat sich seine Einstellung geändert, weil er gemerkt hat, dass die Übungen ihm wirklich helfen. Seine Noten haben sich seitdem deutlich verbessert. Die Nachhilfe findet online über Video statt, was für uns sehr praktisch ist.",
      aussagen: [
        { nr: 1, text: "Der Sohn hatte Schwierigkeiten in Mathematik.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Nachhilfe findet zweimal pro Woche statt.", korrekt: false, hinweis: "Gegenteil: 'einmal pro Woche'." },
        { nr: 3, text: "Der Sohn fand die Nachhilfe von Anfang an toll.", korrekt: false, hinweis: "Gegenteil: 'am Anfang fand er die Nachhilfe nicht so gut'." },
        { nr: 4, text: "Die Noten des Sohnes haben sich verbessert.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Nachhilfe findet nicht online statt.", korrekt: false, hinweis: "Gegenteil: 'findet online über Video statt'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen Nachhilfe für Ihr Kind." },
        { nr: 2, text: "Sie suchen Nachhilfe in Mathematik." },
        { nr: 3, text: "Sie möchten als Nachhilfelehrer arbeiten." },
        { nr: 4, text: "Sie suchen Online-Nachhilfe." },
        { nr: 5, text: "Sie suchen kostenlose Lernförderung." },
        { nr: 6, text: "Sie suchen einen Kindergartenplatz." },
        { nr: 7, text: "Sie suchen einen Musiklehrer." },
        { nr: 8, text: "Sie suchen eine Sportgruppe für Kinder." },
        { nr: 9, text: "Sie möchten eine Ferienbetreuung." },
        { nr: 10, text: "Sie suchen einen Sprachkurs für Kinder." }
      ],
      anzeigen: [
        { id: "a", text: "Nachhilfe für Schulkinder — alle Fächer." },
        { id: "b", text: "Mathe-Nachhilfe für die Grundschule." },
        { id: "c", text: "Nachhilfelehrer/in gesucht." },
        { id: "d", text: "Online-Nachhilfe per Video." },
        { id: "e", text: "Kostenlose Lernförderung für Familien mit wenig Einkommen." },
        { id: "f", text: "Musikunterricht für Kinder, alle Instrumente." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Mein Sohn ___(1)___ lange Schwierigkeiten in Mathematik. Deshalb haben wir eine Nachhilfelehrerin ___(2)___. Am Anfang fand er die Nachhilfe nicht so gut, ___(3)___ er lieber draußen spielen wollte. Nach einigen Wochen hat sich das geändert, ___(4)___ er gemerkt hat, dass es hilft. Seine Noten haben sich ___(5)___ verbessert.",
      luecken: [
        { nr: 1, o: ["hatte", "habe", "hätte"], c: 0, h: "Präteritum → hatte." },
        { nr: 2, o: ["gesucht", "gefunden", "gebracht"], c: 0, h: "'suchen' → gesucht." },
        { nr: 3, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 4, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 5, o: ["seitdem", "damals", "bald"], c: 0, h: "Zeit bis jetzt → seitdem." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Nachhilfe", "Schwierigkeiten", "Noten", "verbessern", "online"],
      text: "Viele Kinder haben ___(6)___ in der Schule. ___(7)___ kann dabei helfen. Regelmäßiges Üben kann die ___(8)___ deutlich ___(9)___. Manche Nachhilfe findet heute ___(10)___ statt.",
      loesung: { 6: "Schwierigkeiten", 7: "Nachhilfe", 8: "Noten", 9: "verbessern", 10: "online" }
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
        situation: "Ihr Kind bekommt Nachhilfe und die Noten haben sich verbessert. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, warum Sie Nachhilfe gesucht haben.", "Berichten Sie, wie es Ihrem Kind jetzt geht.", "Empfehlen Sie die Nachhilfelehrerin / den Nachhilfelehrer."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

// ============================================================
// FLOß Modelltest B1 — Nr. 33
// Gleiches Format wie Nr. 01–32.
// ============================================================

window.MODELLTEST_B1_33 = {
  testKey: "modelltest-b1-33",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 33",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Wohnungssuche für Alleinerziehende erschwert" },
        { id: 2, text: "Unterstützung durch Beratungsstellen" },
        { id: 3, text: "Kinderfreundliche Wohnungen gesucht" },
        { id: 4, text: "Finanzielle Hürden bei der Wohnungssuche" },
        { id: 5, text: "Nähe zur Kita als wichtiges Kriterium" },
        { id: 6, text: "Vorurteile von Vermietern" },
        { id: 7, text: "Wohngemeinschaften als Alternative" },
        { id: 8, text: "Online-Portale für Wohnungssuche" }
      ],
      texte: [
        { id: "a", text: "Für Alleinerziehende ist die Wohnungssuche oft besonders schwierig." },
        { id: "b", text: "Manche Vermieter zögern, an Alleinerziehende zu vermieten." },
        { id: "c", text: "Beratungsstellen helfen Alleinerziehenden bei der Wohnungssuche." },
        { id: "d", text: "Eine Wohnung in der Nähe der Kita erleichtert den Alltag erheblich." },
        { id: "e", text: "Manche Alleinerziehende entscheiden sich für eine Wohngemeinschaft." }
      ],
      loesung: { a: 1, b: 6, c: 2, d: 5, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Als alleinerziehende Mutter habe ich in den letzten Monaten eine neue Wohnung gesucht. Die Suche war schwieriger, als ich gedacht hatte, weil einige Vermieter offenbar Vorbehalte gegenüber Alleinerziehenden haben. Zum Glück habe ich eine Beratungsstelle gefunden, die mich bei der Suche unterstützt hat. Besonders wichtig war mir eine Wohnung in der Nähe der Kita meines Sohnes, damit der Alltag leichter zu organisieren ist. Nach mehreren Wochen habe ich schließlich eine passende Wohnung gefunden. Rückblickend hätte ich mir gewünscht, früher Hilfe zu suchen.",
      aussagen: [
        { nr: 1, text: "Die Person ist alleinerziehend.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Wohnungssuche war einfacher als erwartet.", korrekt: false, hinweis: "Gegenteil: 'schwieriger, als ich gedacht hatte'." },
        { nr: 3, text: "Eine Beratungsstelle hat geholfen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Nähe zur Kita war der Person nicht wichtig.", korrekt: false, hinweis: "Gegenteil: 'Besonders wichtig war mir eine Wohnung in der Nähe der Kita'." },
        { nr: 5, text: "Die Person hat keine Wohnung gefunden.", korrekt: false, hinweis: "Gegenteil: 'habe ich schließlich eine passende Wohnung gefunden'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen als Alleinerziehende/r eine Wohnung." },
        { nr: 2, text: "Sie möchten sich zur Wohnungssuche beraten lassen." },
        { nr: 3, text: "Sie suchen eine Wohnung in der Nähe einer Kita." },
        { nr: 4, text: "Sie möchten sich über Ihre Rechte als Mieter informieren." },
        { nr: 5, text: "Sie suchen eine Wohngemeinschaft für Alleinerziehende." },
        { nr: 6, text: "Sie suchen einen Handwerker." },
        { nr: 7, text: "Sie suchen ein Auto." },
        { nr: 8, text: "Sie suchen einen Kindergarten." },
        { nr: 9, text: "Sie suchen eine Putzhilfe." },
        { nr: 10, text: "Sie suchen ein Fitnessstudio." }
      ],
      anzeigen: [
        { id: "a", text: "Wohnungen speziell für Alleinerziehende." },
        { id: "b", text: "Beratungsstelle für Wohnungssuche." },
        { id: "c", text: "Wohnungen in Kita-Nähe." },
        { id: "d", text: "Mieterrechte — kostenlose Beratung." },
        { id: "e", text: "Wohngemeinschaft für Alleinerziehende." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Als alleinerziehende Mutter habe ich eine Wohnung gesucht, ___(1)___ mir das oft schwerfiel. Die Suche war schwieriger, ___(2)___ ich gedacht hatte. Zum Glück habe ich eine Beratungsstelle gefunden, ___(3)___ mir geholfen hat. Wichtig war mir eine Wohnung, ___(4)___ nah an der Kita liegt. Rückblickend hätte ich mir gewünscht, ___(5)___ früher Hilfe zu suchen.",
      luecken: [
        { nr: 1, o: ["wobei", "weil", "obwohl"], c: 0, h: "Begleitumstand → wobei (nicht 'weil', da unlogische Kausalität)." },
        { nr: 2, o: ["wie", "als", "dass"], c: 1, h: "Vergleich mit Komparativ → als." },
        { nr: 3, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Beratungsstelle' (feminin) → die." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Wohnung' (feminin) → die." },
        { nr: 5, o: ["um", "damit", "dass"], c: 0, h: "'um... zu' + Infinitiv." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Alleinerziehende", "Beratungsstelle", "Vermieter", "Kita-Nähe", "Wohngemeinschaft"],
      text: "Für ___(6)___ ist die Wohnungssuche oft schwierig. Manche ___(7)___ haben Vorbehalte. Eine ___(8)___ kann bei der Suche helfen. Besonders wichtig ist vielen die ___(9)___. Manche entscheiden sich auch für eine ___(10)___.",
      loesung: { 6: "Alleinerziehende", 7: "Vermieter", 8: "Beratungsstelle", 9: "Kita-Nähe", 10: "Wohngemeinschaft" }
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
        situation: "Sie haben als Alleinerziehende/r eine neue Wohnung gefunden. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, wie die Suche war.", "Berichten Sie, wer Ihnen geholfen hat.", "Beschreiben Sie die neue Wohnung."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an eine Beratungsstelle, weil Sie als Alleinerziehende/r Hilfe bei der Wohnungssuche brauchen.",
        punkte: ["Beschreiben Sie Ihre Situation.", "Erklären Sie Ihre Wünsche an die Wohnung.", "Bitten Sie um einen Beratungstermin."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

// ============================================================
// FLOß Modelltest B1 — Nr. 19
// Gleiches Format wie Nr. 01–18.
// ============================================================

window.MODELLTEST_B1_19 = {
  testKey: "modelltest-b1-19",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 19",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Zweite Ausbildung mit 40" },
        { id: 2, text: "Berufswechsel nach vielen Jahren" },
        { id: 3, text: "Beratung für Neuorientierung" },
        { id: 4, text: "Finanzielle Unterstützung während der Umschulung" },
        { id: 5, text: "Alte Kontakte nutzen" },
        { id: 6, text: "Neue Branche, neue Herausforderungen" },
        { id: 7, text: "Zweifel vor dem Wechsel" },
        { id: 8, text: "Erfolgreicher Neustart" }
      ],
      texte: [
        { id: "a", text: "Mit 42 Jahren hat sie sich entschieden, noch einmal eine Ausbildung zu machen und komplett neu anzufangen." },
        { id: "b", text: "Wer sich beruflich umorientieren möchte, kann sich bei speziellen Beratungsstellen kostenlos informieren lassen." },
        { id: "c", text: "Während einer Umschulung kann man unter bestimmten Voraussetzungen finanzielle Unterstützung beantragen." },
        { id: "d", text: "Der Wechsel in eine völlig neue Branche bringt viele neue Aufgaben mit sich, die anfangs überfordern können." },
        { id: "e", text: "Vor dem endgültigen Schritt hatte er lange gezögert, weil er Angst vor dem Unbekannten hatte." }
      ],
      loesung: { a: 1, b: 3, c: 4, d: 6, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Nach fast zwanzig Jahren im gleichen Beruf habe ich mich mit 45 Jahren entschieden, noch einmal etwas Neues zu lernen. Am Anfang hatte ich große Zweifel, ob dieser Schritt richtig ist, vor allem wegen der finanziellen Unsicherheit während der Umschulung. Eine Beratungsstelle hat mir aber gezeigt, dass ich Anspruch auf finanzielle Unterstützung habe, was mir sehr geholfen hat. Der Einstieg in die neue Branche war zunächst anstrengend, weil ich vieles von Grund auf lernen musste. Mittlerweile bin ich froh über diese Entscheidung, auch wenn der Weg nicht immer einfach war. Rückblickend würde ich jedem raten, sich von seinem Alter nicht abschrecken zu lassen.",
      aussagen: [
        { nr: 1, text: "Die Person hat sich mit 45 Jahren beruflich neu orientiert.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person hatte von Anfang an keine Zweifel.", korrekt: false, hinweis: "Gegenteil: 'am Anfang hatte ich große Zweifel'." },
        { nr: 3, text: "Die Person hat keinen Anspruch auf finanzielle Unterstützung.", korrekt: false, hinweis: "Gegenteil: 'Anspruch auf finanzielle Unterstützung'." },
        { nr: 4, text: "Der Einstieg in die neue Branche war zunächst anstrengend.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Person würde anderen raten, sich vom Alter abschrecken zu lassen.", korrekt: false, hinweis: "Gegenteil: 'sich... nicht abschrecken zu lassen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich beruflich umorientieren." },
        { nr: 2, text: "Sie möchten ein persönliches Coaching für Ihren beruflichen Neustart." },
        { nr: 3, text: "Sie brauchen finanzielle Unterstützung während einer Umschulung." },
        { nr: 4, text: "Sie möchten eine zweite Ausbildung machen." },
        { nr: 5, text: "Sie suchen Erfahrungsberichte von anderen Umsteigern." },
        { nr: 6, text: "Sie möchten in eine neue Branche wechseln." },
        { nr: 7, text: "Sie suchen eine Stelle als Rentner." },
        { nr: 8, text: "Sie möchten Ihre erste Ausbildung machen." },
        { nr: 9, text: "Sie suchen ein Praktikum für Schüler." },
        { nr: 10, text: "Sie möchten sich selbstständig machen." }
      ],
      anzeigen: [
        { id: "a", text: "Beratungsstelle für berufliche Neuorientierung, kostenlos." },
        { id: "b", text: "Finanzielle Unterstützung während der Umschulung möglich." },
        { id: "c", text: "Zweite Ausbildung: Programme für Erwachsene." },
        { id: "d", text: "Erfahrungsberichte von Menschen, die neu angefangen haben." },
        { id: "e", text: "Branchenwechsel: Einstiegsprogramme für Quereinsteiger." },
        { id: "f", text: "Coaching für den beruflichen Neustart." }
      ],
      loesung: { 1: "a", 2: "f", 3: "b", 4: "c", 5: "d", 6: "e", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Nach fast zwanzig Jahren im gleichen Beruf ___(1)___ ich mich entschieden, etwas Neues zu lernen. Am Anfang ___(2)___ ich große Zweifel. Eine Beratungsstelle ___(3)___ mir gezeigt, dass ich Anspruch auf Unterstützung habe. Der Einstieg war zunächst anstrengend, ___(4)___ ich vieles von Grund auf lernen musste. Rückblickend würde ich jedem raten, sich nicht ___(5)___ lassen.",
      luecken: [
        { nr: 1, o: ["habe", "hatte", "hätte"], c: 0, h: "Perfekt: habe entschieden." },
        { nr: 2, o: ["hatte", "habe", "hätte"], c: 0, h: "Präteritum → hatte." },
        { nr: 3, o: ["hat", "ist", "war"], c: 0, h: "die Beratungsstelle → hat." },
        { nr: 4, o: ["weil", "obwohl", "damit"], c: 0, h: "Grund → weil." },
        { nr: 5, o: ["abschrecken", "abgeschreckt", "abschreckt"], c: 0, h: "sich...lassen + Infinitiv → abschrecken." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Neuorientierung", "Umschulung", "Unsicherheit", "Branche", "Neustart"],
      text: "Eine berufliche ___(6)___ ist mit vielen Fragen verbunden. Während der ___(7)___ besteht oft finanzielle ___(8)___. Der Wechsel in eine neue ___(9)___ bringt neue Herausforderungen. Am Ende steht meist ein erfolgreicher ___(10)___.",
      loesung: { 6: "Neuorientierung", 7: "Umschulung", 8: "Unsicherheit", 9: "Branche", 10: "Neustart" }
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
        situation: "Ein Freund / eine Freundin überlegt, sich beruflich neu zu orientieren. Sie schreiben eine Nachricht.",
        punkte: ["Zeigen Sie Verständnis für die Unsicherheit.", "Berichten Sie von einer eigenen Erfahrung oder einem Beispiel.", "Ermutigen Sie die Person."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an eine Beratungsstelle, um einen Termin zur beruflichen Neuorientierung zu vereinbaren.",
        punkte: ["Stellen Sie sich kurz vor.", "Beschreiben Sie Ihre aktuelle Situation.", "Fragen Sie nach einem Beratungstermin."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

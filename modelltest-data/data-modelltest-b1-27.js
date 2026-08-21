// ============================================================
// FLOß Modelltest B1 — Nr. 27
// Gleiches Format wie Nr. 01–26.
// ============================================================

window.MODELLTEST_B1_27 = {
  testKey: "modelltest-b1-27",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 27",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Zeitmangel durch Ehrenamt" },
        { id: 2, text: "Familie unterstützt das Engagement" },
        { id: 3, text: "Grenzen setzen beim Ehrenamt" },
        { id: 4, text: "Kinder ins Ehrenamt einbeziehen" },
        { id: 5, text: "Ehrenamt reduzieren wegen Familie" },
        { id: 6, text: "Wertschätzung für Ehrenamtliche" },
        { id: 7, text: "Ehrenamt als Vorbild für Kinder" },
        { id: 8, text: "Terminplanung zwischen Ehrenamt und Familie" }
      ],
      texte: [
        { id: "a", text: "Wer sich stark ehrenamtlich engagiert, hat oft wenig Zeit für die eigene Familie." },
        { id: "b", text: "Manche Familien unterstützen das Engagement eines Mitglieds aktiv, indem sie im Alltag mehr Aufgaben übernehmen." },
        { id: "c", text: "Es ist wichtig, klare Grenzen zu setzen, um Ehrenamt und Familie miteinander zu vereinbaren." },
        { id: "d", text: "Eltern können ihre Kinder gezielt in ehrenamtliche Aktivitäten einbeziehen." },
        { id: "e", text: "Für viele Kinder ist das Engagement der Eltern ein positives Vorbild." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit fünf Jahren engagiere ich mich ehrenamtlich bei einer Umweltorganisation. Am Anfang war es nicht einfach, dieses Engagement mit meiner Familie zu vereinbaren, weil ich abends und am Wochenende oft unterwegs war. Meine Partnerin hat mich zwar immer unterstützt, aber irgendwann haben wir gemeinsam entschieden, dass ich meine Termine reduzieren sollte. Seitdem nehme ich nur noch an ausgewählten Aktionen teil und habe mehr Zeit für meine Kinder. Interessanterweise nehmen meine Kinder inzwischen manchmal selbst an kleineren Umweltaktionen teil, weil sie es von mir gelernt haben.",
      aussagen: [
        { nr: 1, text: "Die Person engagiert sich seit fünf Jahren ehrenamtlich.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Vereinbarkeit war von Anfang an einfach.", korrekt: false, hinweis: "Gegenteil: 'am Anfang war es nicht einfach'." },
        { nr: 3, text: "Die Partnerin hat die Person nie unterstützt.", korrekt: false, hinweis: "Gegenteil: 'meine Partnerin hat mich zwar immer unterstützt'." },
        { nr: 4, text: "Die Person hat ihre Termine reduziert.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die Kinder interessieren sich nicht für Umweltschutz.", korrekt: false, hinweis: "Gegenteil: 'nehmen meine Kinder... selbst an kleineren Umweltaktionen teil'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich ehrenamtlich engagieren, aber mit weniger Zeitaufwand." },
        { nr: 2, text: "Sie suchen ein familienfreundliches Ehrenamt." },
        { nr: 3, text: "Sie möchten Ihre Kinder ins Ehrenamt einbeziehen." },
        { nr: 4, text: "Sie suchen einen Workshop zum Thema Zeitmanagement bei Ehrenamt." },
        { nr: 5, text: "Sie möchten Tipps zur Vereinbarkeit von Ehrenamt und Familie." },
        { nr: 6, text: "Sie suchen eine Kinderbetreuung während Ihres Ehrenamts." },
        { nr: 7, text: "Sie möchten einen Sportverein finden." },
        { nr: 8, text: "Sie suchen eine Nachhilfe für Ihr Kind." },
        { nr: 9, text: "Sie möchten eine Reise buchen." },
        { nr: 10, text: "Sie suchen eine Wohnung." }
      ],
      anzeigen: [
        { id: "a", text: "Ehrenamt mit flexiblem Zeitaufwand." },
        { id: "b", text: "Familienfreundliche Ehrenamtsprojekte." },
        { id: "c", text: "Ehrenamt für die ganze Familie." },
        { id: "d", text: "Workshop: Ehrenamt und Familie vereinbaren." },
        { id: "e", text: "Ratgeber: Zeitmanagement für Ehrenamtliche." },
        { id: "f", text: "Kinderbetreuung während Ehrenamts-Einsätzen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "e", 5: "d", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit fünf Jahren ___(1)___ ich mich ehrenamtlich bei einer Umweltorganisation. Am Anfang war es nicht einfach, ___(2)___ ich oft abends unterwegs war. Meine Partnerin hat mich unterstützt, ___(3)___ wir irgendwann entschieden haben, dass ich reduzieren sollte. Seitdem nehme ich nur noch an ausgewählten Aktionen teil, ___(4)___ mehr Zeit für die Familie bleibt. Meine Kinder nehmen inzwischen selbst teil, ___(5)___ sie es von mir gelernt haben.",
      luecken: [
        { nr: 1, o: ["engagiere", "engagierst", "engagieren"], c: 0, h: "ich → engagiere." },
        { nr: 2, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 3, o: ["aber", "bis", "sodass"], c: 1, h: "Zeitliche Grenze → bis." },
        { nr: 4, o: ["damit", "obwohl", "weil"], c: 0, h: "Zweck → damit." },
        { nr: 5, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Engagement", "vereinbaren", "reduzieren", "Vorbild", "unterstützt"],
      text: "Ehrenamtliches ___(6)___ kann viel Zeit beanspruchen. Manche müssen es mit der Familie ___(7)___. Dabei hilft es, die Termine zu ___(8)___. Wichtig ist auch, dass die Familie einen ___(9)___. Für Kinder kann das Engagement der Eltern ein gutes ___(10)___ sein.",
      loesung: { 6: "Engagement", 7: "vereinbaren", 8: "reduzieren", 9: "unterstützt", 10: "Vorbild" }
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
        situation: "Sie engagieren sich ehrenamtlich und mussten Ihre Termine wegen der Familie reduzieren. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, wie es am Anfang war.", "Berichten Sie, was sich geändert hat.", "Geben Sie einen Tipp für die Vereinbarkeit von Ehrenamt und Familie."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an eine Ehrenamtsorganisation, um nach familienfreundlicheren Einsatzzeiten zu fragen.",
        punkte: ["Beschreiben Sie Ihre Situation.", "Fragen Sie nach flexibleren Zeiten.", "Fragen Sie nach einer Kinderbetreuung während der Einsätze."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

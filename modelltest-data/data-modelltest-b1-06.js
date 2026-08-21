// ============================================================
// FLOß Modelltest B1 — Nr. 06
// Gleiches Format wie Nr. 01–05.
// ============================================================

window.MODELLTEST_B1_06 = {
  testKey: "modelltest-b1-06",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 6",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neue App für die Mülltrennung" },
        { id: 2, text: "Stadtbücherei sucht Ehrenamtliche" },
        { id: 3, text: "Warnung vor falschen Handwerkern" },
        { id: 4, text: "Volkshochschule bietet Computerkurs" },
        { id: 5, text: "Neue Regeln beim Parken" },
        { id: 6, text: "Sprachpatenschaft gesucht" },
        { id: 7, text: "Schwimmkurs für Erwachsene" },
        { id: 8, text: "Second-Hand-Möbelbörse" }
      ],
      texte: [
        { id: "a", text: "Ab sofort ist das Parken in der Innenstadt nur noch mit Parkschein möglich, auch am Wochenende. Anwohner können eine vergünstigte Karte beantragen." },
        { id: "b", text: "Die Bücherei sucht Freiwillige, die einmal pro Woche beim Vorlesen für Kinder helfen. Erfahrung ist nicht nötig, nur Freude am Vorlesen." },
        { id: "c", text: "Wer schwimmen lernen oder seine Technik verbessern möchte, kann sich für den neuen Kurs anmelden, der sich speziell an Erwachsene richtet." },
        { id: "d", text: "Gesucht werden Personen, die bereit sind, regelmäßig mit einem Deutschlerner zu sprechen, um dessen Sprachpraxis zu verbessern." },
        { id: "e", text: "Der Kurs vermittelt Grundkenntnisse am Computer, etwa E-Mails schreiben oder im Internet recherchieren, für Personen ohne Vorkenntnisse." }
      ],
      loesung: { a: 5, b: 2, c: 7, d: 6, e: 4 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Ehrenamtliches Engagement spielt in Deutschland eine wichtige Rolle im gesellschaftlichen Leben. Millionen Menschen investieren regelmäßig ihre Freizeit, um sich für andere einzusetzen — sei es im Sportverein, in der Nachbarschaftshilfe oder bei der Integration von Zugewanderten. Studien zeigen, dass gerade Sprachpatenschaften, bei denen Freiwillige regelmäßig mit Deutschlernenden sprechen, den Spracherwerb spürbar beschleunigen können, weil die Lernenden in einem entspannten Rahmen üben, ohne Angst vor Fehlern zu haben. Gleichzeitig berichten viele Freiwillige, dass sie selbst von diesen Begegnungen profitieren, etwa durch neue Freundschaften oder einen erweiterten Blick auf andere Kulturen. Kritisch wird allerdings angemerkt, dass ehrenamtliches Engagement staatliche Aufgaben nicht dauerhaft ersetzen sollte.",
      aussagen: [
        { nr: 1, text: "Ehrenamtliches Engagement spielt in Deutschland kaum eine Rolle.", korrekt: false, hinweis: "Gegenteil: 'spielt eine wichtige Rolle'." },
        { nr: 2, text: "Sprachpatenschaften können den Spracherwerb beschleunigen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Nur die Lernenden profitieren von Sprachpatenschaften, nicht die Freiwilligen.", korrekt: false, hinweis: "Gegenteil: auch Freiwillige profitieren, laut Text." },
        { nr: 4, text: "Freiwillige berichten von neuen Freundschaften durch das Ehrenamt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Der Text sieht Ehrenamt als vollwertigen Ersatz für staatliche Aufgaben.", korrekt: false, hinweis: "Gegenteil: 'sollte staatliche Aufgaben nicht dauerhaft ersetzen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich ehrenamtlich engagieren." },
        { nr: 2, text: "Sie suchen einen Schwimmkurs." },
        { nr: 3, text: "Sie möchten Computer-Grundkenntnisse lernen." },
        { nr: 4, text: "Sie brauchen einen Parkausweis als Anwohner." },
        { nr: 5, text: "Sie möchten Ihr Deutsch im Gespräch üben." },
        { nr: 6, text: "Sie suchen günstige gebrauchte Möbel." },
        { nr: 7, text: "Sie brauchen einen Handwerker für die Heizung." },
        { nr: 8, text: "Sie möchten Kindern vorlesen." },
        { nr: 9, text: "Sie suchen einen Job als Bibliothekarin." },
        { nr: 10, text: "Sie möchten Ihr Auto reparieren lassen." }
      ],
      anzeigen: [
        { id: "a", text: "Stadtbücherei sucht Ehrenamtliche zum Vorlesen, einmal pro Woche." },
        { id: "b", text: "Schwimmkurs für Erwachsene, alle Levels, kleine Gruppen." },
        { id: "c", text: "Computerkurs für Anfänger, Volkshochschule, keine Vorkenntnisse nötig." },
        { id: "d", text: "Anwohnerparkausweis: Antrag jetzt online möglich." },
        { id: "e", text: "Sprachpatenschaft gesucht: regelmäßige Gespräche mit Deutschlernenden." },
        { id: "f", text: "Second-Hand-Möbelbörse, jeden ersten Samstag im Monat." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "a", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Ich möchte mich gerne ehrenamtlich engagieren, ___(1)___ ich in meiner Freizeit etwas Sinnvolles tun möchte. Am liebsten würde ich Kindern vorlesen, ___(2)___ ich das schon als Kind gerne gemacht habe. Es wäre schön, ___(3)___ ich regelmäßig kommen könnte, zum Beispiel einmal pro Woche. Könnten Sie mir sagen, ___(4)___ ich mich anmelden kann? Über eine Antwort ___(5)___ ich mich sehr freuen.",
      luecken: [
        { nr: 1, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." },
        { nr: 2, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." },
        { nr: 3, o: ["wenn", "dass", "ob"], c: 0, h: "hypothetischer Wunsch mit Konjunktiv II → wenn (nicht 'dass')." },
        { nr: 4, o: ["wie", "was", "wo"], c: 0, h: "Art und Weise → wie." },
        { nr: 5, o: ["würde", "werde", "wurde"], c: 0, h: "Konjunktiv II, höflich → würde." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["regelmäßig", "gemeinsam", "gegenseitig", "freiwillig", "ehrenamtlich"],
      text: "Viele Menschen engagieren sich ___(6)___ in ihrer Freizeit. Sie helfen ___(7)___, ohne dafür bezahlt zu werden. Oft profitieren beide Seiten ___(8)___ von der Begegnung. Am besten funktioniert es, wenn man sich ___(9)___ trifft, zum Beispiel jede Woche. Manche Projekte organisieren auch ___(10)___e Aktivitäten für mehrere Freiwillige.",
      loesung: { 6: "ehrenamtlich", 7: "freiwillig", 8: "gegenseitig", 9: "regelmäßig", 10: "gemeinsam" }
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
        situation: "Sie erzählen einem Freund / einer Freundin, dass Sie sich ehrenamtlich engagieren möchten.",
        punkte: ["Erklären Sie, was Sie gerne machen würden.", "Sagen Sie, warum Ihnen das wichtig ist.", "Fragen Sie, ob die Person mitmachen möchte."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an die Stadtbücherei, um sich als Vorlesepatin / Vorlesepate zu bewerben.",
        punkte: ["Stellen Sie sich kurz vor.", "Erklären Sie, warum Sie sich für diese Aufgabe interessieren.", "Fragen Sie nach den nächsten Schritten."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

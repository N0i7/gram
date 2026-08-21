// ============================================================
// FLOß Modelltest B1 — Nr. 13
// Gleiches Format wie Nr. 01–12.
// ============================================================

window.MODELLTEST_B1_13 = {
  testKey: "modelltest-b1-13",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 13",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Missverständnisse durch Kulturunterschiede" },
        { id: 2, text: "Interkulturelles Training für Teams" },
        { id: 3, text: "Direkte Kommunikation wird geschätzt" },
        { id: 4, text: "Mehrsprachige Teams als Vorteil" },
        { id: 5, text: "Höflichkeitsformen unterscheiden sich stark" },
        { id: 6, text: "Zeitverständnis variiert je nach Kultur" },
        { id: 7, text: "Feedback wird unterschiedlich gegeben" },
        { id: 8, text: "Körpersprache wird oft missverstanden" }
      ],
      texte: [
        { id: "a", text: "In manchen Kulturen wird Kritik sehr direkt geäußert, in anderen dagegen eher vorsichtig und indirekt formuliert, um das Gegenüber nicht zu verletzen." },
        { id: "b", text: "Viele Unternehmen bieten mittlerweile Schulungen an, in denen Mitarbeitende lernen, kulturelle Unterschiede im Team besser zu verstehen." },
        { id: "c", text: "Was in einer Kultur als höfliche Zurückhaltung gilt, kann in einer anderen als Desinteresse missverstanden werden." },
        { id: "d", text: "Teams mit Mitgliedern aus verschiedenen Sprachräumen bringen oft neue Perspektiven und Lösungsansätze in Projekte ein." },
        { id: "e", text: "Pünktlichkeit hat in verschiedenen Ländern einen unterschiedlichen Stellenwert, was im internationalen Berufsalltag zu Spannungen führen kann." }
      ],
      loesung: { a: 7, b: 2, c: 5, d: 4, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit ich in einem internationalen Team arbeite, ist mir bewusst geworden, wie unterschiedlich Kommunikation je nach Herkunft ablaufen kann. Am Anfang habe ich manche Kolleginnen und Kollegen missverstanden, weil ich ihre direkte Art als unhöflich empfunden habe. Später habe ich gelernt, dass diese Direktheit in ihrer Kultur ganz normal ist und nichts mit fehlendem Respekt zu tun hat. Umgekehrt fanden manche meine zurückhaltende Art zu Beginn schwer einzuschätzen. Durch offene Gespräche im Team haben wir gemeinsam Regeln entwickelt, wie wir miteinander kommunizieren möchten. Das hat die Zusammenarbeit deutlich verbessert und viele Missverständnisse vermieden.",
      aussagen: [
        { nr: 1, text: "Die Person arbeitet in einem internationalen Team.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person hat von Anfang an alle Kollegen sofort verstanden.", korrekt: false, hinweis: "Gegenteil: 'habe ich manche... missverstanden'." },
        { nr: 3, text: "Direkte Kommunikation ist in manchen Kulturen normal und respektlos gemeint.", korrekt: false, hinweis: "Gegenteil: 'nichts mit fehlendem Respekt zu tun'." },
        { nr: 4, text: "Das Team hat gemeinsam Kommunikationsregeln entwickelt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die neuen Regeln haben die Zusammenarbeit verschlechtert.", korrekt: false, hinweis: "Gegenteil: 'deutlich verbessert'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten ein interkulturelles Training besuchen." },
        { nr: 2, text: "Sie suchen Tipps zu Kommunikation im internationalen Team." },
        { nr: 3, text: "Sie möchten mehr über Körpersprache in anderen Kulturen erfahren." },
        { nr: 4, text: "Sie suchen einen Sprachpartner für Englisch." },
        { nr: 5, text: "Sie möchten Feedback-Techniken lernen." },
        { nr: 6, text: "Sie interessieren sich für Zeitmanagement in verschiedenen Kulturen." },
        { nr: 7, text: "Sie suchen eine Stelle im internationalen Vertrieb." },
        { nr: 8, text: "Sie möchten einen Sprachkurs für Anfänger." },
        { nr: 9, text: "Sie brauchen eine Übersetzung für ein Dokument." },
        { nr: 10, text: "Sie suchen einen interkulturellen Austausch für Studierende." }
      ],
      anzeigen: [
        { id: "a", text: "Interkulturelles Training für Teams, praxisnah und kompakt." },
        { id: "b", text: "Workshop: Kommunikation im internationalen Arbeitsalltag." },
        { id: "c", text: "Seminar über Körpersprache und nonverbale Kommunikation weltweit." },
        { id: "d", text: "Feedback-Kurs für Führungskräfte in internationalen Teams." },
        { id: "e", text: "Zeitmanagement im interkulturellen Vergleich, Ein-Tages-Seminar." },
        { id: "f", text: "Austauschprogramm für Studierende mit interkulturellem Fokus." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "x", 5: "d", 6: "e", 7: "x", 8: "x", 9: "x", 10: "f" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit ich in einem internationalen Team arbeite, ___(1)___ mir bewusst geworden, wie unterschiedlich Kommunikation ablaufen kann. Am Anfang ___(2)___ ich manche Kollegen missverstanden. Später ___(3)___ ich gelernt, dass Direktheit kulturell bedingt sein kann. ___(4)___ offene Gespräche haben wir Regeln entwickelt. Das hat die Zusammenarbeit ___(5)___ verbessert.",
      luecken: [
        { nr: 1, o: ["ist", "hat", "war"], c: 0, h: "es ist mir bewusst geworden → ist." },
        { nr: 2, o: ["habe", "hatte", "hätte"], c: 0, h: "ich → habe." },
        { nr: 3, o: ["habe", "hat", "haben"], c: 0, h: "ich → habe." },
        { nr: 4, o: ["Durch", "Wegen", "Trotz"], c: 0, h: "Mittel/Weg → durch." },
        { nr: 5, o: ["deutlich", "kaum", "selten"], c: 0, h: "Verstärkung → deutlich." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["direkt", "missverständlich", "kulturell", "respektvoll", "offen"],
      text: "Manche Kolleginnen kommunizieren sehr ___(6)___, was manchmal ___(7)___ wirken kann. Das hat aber ___(8)___e Gründe und nichts mit Unhöflichkeit zu tun. Wichtig ist ein ___(9)___er Umgang miteinander. Durch ___(10)___e Gespräche lassen sich viele Missverständnisse vermeiden.",
      loesung: { 6: "direkt", 7: "missverständlich", 8: "kulturell", 9: "respektvoll", 10: "offen" }
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
        situation: "Sie arbeiten seit Kurzem in einem internationalen Team und schreiben einer Freundin / einem Freund von Ihren Erfahrungen.",
        punkte: ["Beschreiben Sie eine Situation, die Sie überrascht hat.", "Erklären Sie, was Sie daraus gelernt haben.", "Geben Sie einen Tipp für den Umgang mit kulturellen Unterschieden."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an Ihre Personalabteilung, um ein interkulturelles Training für Ihr Team anzufragen.",
        punkte: ["Erklären Sie, warum das Training sinnvoll wäre.", "Nennen Sie ein konkretes Beispiel für ein Missverständnis im Team.", "Fragen Sie nach möglichen Terminen."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

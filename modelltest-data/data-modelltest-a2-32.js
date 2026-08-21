// ============================================================
// FLOß Modelltest A2 — Nr. 32
// Gleiches Format wie Nr. 01–31.
// ============================================================

window.MODELLTEST_A2_32 = {
  testKey: "modelltest-a2-32",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 32",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Elektronische Patientenakte einführen" },
        { id: 2, text: "Ärzte sehen Befunde online" },
        { id: 3, text: "Patienten können Daten selbst einsehen" },
        { id: 4, text: "Datenschutz bei der Akte wichtig" },
        { id: 5, text: "Akte spart Zeit beim Arztbesuch" },
        { id: 6, text: "Akte ist freiwillig" },
        { id: 7, text: "Papierakten werden abgeschafft" },
        { id: 8, text: "Akte über Handy-App nutzen" }
      ],
      texte: [
        { id: "a", text: "Mit der elektronischen Patientenakte können Ärzte wichtige Befunde schneller einsehen." },
        { id: "b", text: "Patienten können ihre eigenen Daten jederzeit über eine App abrufen." },
        { id: "c", text: "Beim Datenschutz wird besonders auf die Sicherheit der Gesundheitsdaten geachtet." },
        { id: "d", text: "Durch die Akte muss man beim Arztbesuch weniger Unterlagen mitbringen." },
        { id: "e", text: "Die Nutzung der elektronischen Patientenakte ist freiwillig." }
      ],
      loesung: { a: 2, b: 3, c: 4, d: 5, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit letztem Jahr habe ich eine elektronische Patientenakte. Damit können meine Ärzte wichtige Befunde schnell online einsehen. Ich selbst kann meine Daten auch über eine App auf meinem Handy abrufen. Beim Datenschutz wird sehr genau darauf geachtet, dass nur berechtigte Personen die Daten sehen können. Seit ich die Akte nutze, muss ich beim Arztbesuch weniger Unterlagen mitbringen. Die Nutzung der Akte ist übrigens freiwillig.",
      aussagen: [
        { nr: 1, text: "Die Person hat seit letztem Jahr eine elektronische Patientenakte.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Ärzte können die Befunde nicht online sehen.", korrekt: false, hinweis: "Gegenteil: 'können meine Ärzte wichtige Befunde schnell online einsehen'." },
        { nr: 3, text: "Die Person kann ihre Daten über eine App abrufen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Beim Datenschutz wird wenig auf Sicherheit geachtet.", korrekt: false, hinweis: "Gegenteil: 'wird sehr genau darauf geachtet'." },
        { nr: 5, text: "Die Nutzung der Akte ist verpflichtend.", korrekt: false, hinweis: "Gegenteil: 'Die Nutzung der Akte ist... freiwillig'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten eine elektronische Patientenakte einrichten." },
        { nr: 2, text: "Sie suchen die App für die Patientenakte." },
        { nr: 3, text: "Sie möchten sich über Datenschutz bei der Akte informieren." },
        { nr: 4, text: "Sie möchten einen Termin bei Ihrem Hausarzt vereinbaren." },
        { nr: 5, text: "Sie möchten Ihre Daten aus der Akte löschen lassen." },
        { nr: 6, text: "Sie suchen eine Zahnarztpraxis." },
        { nr: 7, text: "Sie suchen eine Apotheke." },
        { nr: 8, text: "Sie suchen ein Krankenhaus." },
        { nr: 9, text: "Sie suchen eine Physiotherapie." },
        { nr: 10, text: "Sie suchen einen Tierarzt." }
      ],
      anzeigen: [
        { id: "a", text: "Elektronische Patientenakte — jetzt einrichten." },
        { id: "b", text: "App zur Patientenakte zum Download." },
        { id: "c", text: "Datenschutz-Informationen zur Patientenakte." },
        { id: "d", text: "Hausarztpraxis — Termine online buchen." },
        { id: "e", text: "Daten aus der Akte löschen lassen." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit letztem Jahr habe ich eine elektronische Patientenakte, ___(1)___ meine Ärzte Befunde schnell einsehen können. Ich kann meine Daten auch abrufen, ___(2)___ ich die App auf dem Handy nutze. Beim Datenschutz wird darauf geachtet, ___(3)___ nur berechtigte Personen Zugriff haben. Seit ich die Akte nutze, ___(4)___ ich weniger Unterlagen mitbringen. Die Nutzung ist freiwillig, ___(5)___ man kann selbst entscheiden.",
      luecken: [
        { nr: 1, o: ["damit", "weil", "obwohl"], c: 0, h: "Finalsatz → damit." },
        { nr: 2, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 3, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'achten' → dass." },
        { nr: 4, o: ["muss", "kann", "darf"], c: 0, h: "Notwendigkeit reduziert → muss." },
        { nr: 5, o: ["denn", "aber", "oder"], c: 0, h: "Begründung → denn." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Patientenakte", "Befunde", "Datenschutz", "freiwillig", "App"],
      text: "Die elektronische ___(6)___ hilft Ärzten und Patienten. Ärzte können wichtige ___(7)___ schnell einsehen. Beim ___(8)___ wird auf Sicherheit geachtet. Patienten nutzen dafür eine ___(9)___. Die Nutzung ist ___(10)___.",
      loesung: { 6: "Patientenakte", 7: "Befunde", 8: "Datenschutz", 9: "App", 10: "freiwillig" }
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
        situation: "Sie haben eine elektronische Patientenakte eingerichtet. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, warum Sie die Akte eingerichtet haben.", "Berichten Sie, was die Akte kann.", "Empfehlen Sie der Person, es auch zu tun."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

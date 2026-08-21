// ============================================================
// FLOß Modelltest B2 — Nr. 29
// Gleiches Format wie Nr. 01–28.
// ============================================================

window.MODELLTEST_B2_29 = {
  testKey: "modelltest-b2-29",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 29",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Absicherung bei gesundheitlichen Einschränkungen" },
        { id: 2, text: "Körperliche Belastung im Handwerk" },
        { id: 3, text: "Lücken in der Berufsunfähigkeitsversicherung" },
        { id: 4, text: "Umschulung nach gesundheitlichem Ausfall" },
        { id: 5, text: "Fachkräftemangel im Handwerk" },
        { id: 6, text: "Prävention durch ergonomische Arbeitsplätze" },
        { id: 7, text: "Psychische Belastungen im Handwerk" },
        { id: 8, text: "Frühzeitige Berufsberatung" }
      ],
      texte: [
        { id: "a", text: "Handwerksberufe sind körperlich oft besonders fordernd, was das Risiko einer Berufsunfähigkeit erhöht." },
        { id: "b", text: "Eine Berufsunfähigkeitsversicherung kann finanziell absichern, wenn der ursprüngliche Beruf nicht mehr ausgeübt werden kann." },
        { id: "c", text: "Viele Handwerksbetriebe investieren mittlerweile in ergonomischere Arbeitsplätze, um gesundheitlichen Schäden vorzubeugen." },
        { id: "d", text: "Wer im Handwerk berufsunfähig wird, steht häufig vor der Herausforderung, sich beruflich neu zu orientieren." },
        { id: "e", text: "Kritiker bemängeln, dass viele Versicherungsverträge im Handwerksbereich Lücken aufweisen." }
      ],
      loesung: { a: 2, b: 1, c: 6, d: 4, e: 3 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Handwerksberufe zählen zu den körperlich anspruchsvollsten Tätigkeiten überhaupt, weshalb das Risiko einer Berufsunfähigkeit hier besonders hoch ist. Eine Berufsunfähigkeitsversicherung kann in solchen Fällen finanziell absichern, wenn der erlernte Beruf aus gesundheitlichen Gründen nicht mehr ausgeübt werden kann. Allerdings weisen Experten darauf hin, dass gerade im Handwerksbereich viele Verträge Lücken aufweisen, etwa weil bestimmte Vorerkrankungen von vornherein ausgeschlossen werden. Wer berufsunfähig wird, steht zudem oft vor der schwierigen Aufgabe, sich beruflich neu zu orientieren, was mit einer Umschulung verbunden sein kann. Um solchen Situationen vorzubeugen, investieren immer mehr Betriebe in ergonomischere Arbeitsplätze und Präventionsmaßnahmen.",
      aussagen: [
        { nr: 1, text: "Handwerksberufe sind körperlich wenig anspruchsvoll.", korrekt: false, hinweis: "Gegenteil: 'zu den körperlich anspruchsvollsten Tätigkeiten'." },
        { nr: 2, text: "Eine Berufsunfähigkeitsversicherung kann finanziell absichern.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Verträge im Handwerksbereich haben nie Lücken.", korrekt: false, hinweis: "Gegenteil: 'weisen... viele Verträge Lücken auf'." },
        { nr: 4, text: "Berufsunfähigkeit kann eine Umschulung nötig machen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Betriebe investieren nicht in Prävention.", korrekt: false, hinweis: "Gegenteil: 'investieren immer mehr Betriebe in... Präventionsmaßnahmen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Versicherungsberaterin, spezialisiert auf Berufsunfähigkeit." },
        { nr: 2, text: "Arbeitsmediziner, berät Handwerksbetriebe zu Ergonomie." },
        { nr: 3, text: "Umschulungsberater für Handwerker mit gesundheitlichen Einschränkungen." },
        { nr: 4, text: "Sozialversicherungsfachangestellte, sucht neue Stelle." },
        { nr: 5, text: "Präventionsfachkraft für Handwerksbetriebe." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 10, text: "Journalistin, sucht Redaktionsstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Versicherung sucht Berater/in für Berufsunfähigkeit." },
        { id: "b", text: "Handwerksverband sucht Arbeitsmediziner/in." },
        { id: "c", text: "Bildungsträger sucht Umschulungsberater/in." },
        { id: "d", text: "Sozialversicherung sucht Fachangestellte/n." },
        { id: "e", text: "Handwerkskammer sucht Präventionsfachkraft." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Handwerksberufe zählen zu den körperlich anspruchsvollsten Tätigkeiten, ___(1)___ das Risiko einer Berufsunfähigkeit besonders hoch ist. Eine Versicherung kann absichern, ___(2)___ der Beruf nicht mehr ausgeübt werden kann. Experten weisen darauf hin, ___(3)___ viele Verträge Lücken aufweisen. Wer berufsunfähig wird, steht vor der Aufgabe, sich neu zu orientieren, ___(4)___ mit einer Umschulung verbunden sein kann. ___(5)___ vorzubeugen, investieren Betriebe in Prävention.",
      luecken: [
        { nr: 1, o: ["weshalb", "obwohl", "damit"], c: 0, h: "Folgesatz → weshalb." },
        { nr: 2, o: ["wenn", "als", "ob"], c: 0, h: "Bedingung → wenn." },
        { nr: 3, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'hinweisen' → dass." },
        { nr: 4, o: ["was", "das", "die"], c: 0, h: "Relativpronomen bezogen auf ganzen Satz → was." },
        { nr: 5, o: ["Um", "Damit", "Weil"], c: 0, h: "'um... zu' + Infinitiv." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Berufsunfähigkeit", "Absicherung", "Umschulung", "Prävention", "Vorerkrankungen"],
      text: "Das Risiko einer ___(6)___ ist im Handwerk besonders hoch. Eine Versicherung bietet finanzielle ___(7)___. Manche Verträge schließen bestimmte ___(8)___ aus. Nach einem gesundheitlichen Ausfall ist oft eine ___(9)___ nötig. Betriebe setzen zunehmend auf ___(10)___.",
      loesung: { 6: "Berufsunfähigkeit", 7: "Absicherung", 8: "Vorerkrankungen", 9: "Umschulung", 10: "Prävention" }
    }
  },

  schreiben: {
    titel: "Schreiben — Stellungnahme",
    anleitung: "Wählen Sie EINES der beiden Themen. Schreiben Sie eine strukturierte Stellungnahme mit mindestens 200 Wörtern: Einleitung, Argumente für und gegen die These, eigene Meinung, Schluss.",
    mindestwoerter: 200,
    aufgaben: [
      {
        nr: 1,
        briefform: "aufsatz",
        situation: "These: 'Handwerksbetriebe sollten gesetzlich verpflichtet werden, eine Berufsunfähigkeitsversicherung für ihre Angestellten abzuschließen.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Ergonomische Arbeitsplätze sind wichtiger als hohe Löhne im Handwerk.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

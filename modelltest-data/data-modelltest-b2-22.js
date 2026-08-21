// ============================================================
// FLOß Modelltest B2 — Nr. 22
// Gleiches Format wie Nr. 01–21.
// ============================================================

window.MODELLTEST_B2_22 = {
  testKey: "modelltest-b2-22",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 22",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Berufsunfähigkeit als finanzielles Risiko" },
        { id: 2, text: "Ursachen für Berufsunfähigkeit" },
        { id: 3, text: "Berufsunfähigkeitsversicherung sinnvoll?" },
        { id: 4, text: "Wiedereinstieg nach längerer Krankheit" },
        { id: 5, text: "Betriebliches Eingliederungsmanagement" },
        { id: 6, text: "Psychische Erkrankungen am Arbeitsplatz" },
        { id: 7, text: "Kündigungsschutz bei Krankheit" },
        { id: 8, text: "Gesetzliche Erwerbsminderungsrente reicht oft nicht" }
      ],
      texte: [
        { id: "a", text: "Wer berufsunfähig wird, muss oft erhebliche finanzielle Einbußen hinnehmen, da die gesetzliche Absicherung meist nicht ausreicht." },
        { id: "b", text: "Zu den häufigsten Ursachen für Berufsunfähigkeit zählen psychische Erkrankungen sowie Erkrankungen des Bewegungsapparats." },
        { id: "c", text: "Experten empfehlen, frühzeitig eine private Berufsunfähigkeitsversicherung abzuschließen, um im Ernstfall abgesichert zu sein." },
        { id: "d", text: "Nach längerer Krankheit kann ein stufenweiser Wiedereinstieg in den Beruf helfen, sich wieder an den Arbeitsalltag zu gewöhnen." },
        { id: "e", text: "Arbeitgeber sind gesetzlich verpflichtet, bei längerer Erkrankung ein betriebliches Eingliederungsmanagement anzubieten." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Berufsunfähigkeit stellt für viele Erwerbstätige ein erhebliches finanzielles Risiko dar, das häufig unterschätzt wird. Zu den häufigsten Ursachen zählen psychische Erkrankungen wie Depressionen sowie Erkrankungen des Bewegungsapparats. Die gesetzliche Erwerbsminderungsrente deckt in den meisten Fällen nur einen Bruchteil des vorherigen Einkommens ab, weshalb Fachleute dringend zu einer zusätzlichen privaten Absicherung raten. Nach längerer krankheitsbedingter Abwesenheit sind Arbeitgeber gesetzlich verpflichtet, ein betriebliches Eingliederungsmanagement anzubieten, das einen stufenweisen Wiedereinstieg erleichtern soll. Dennoch berichten viele Betroffene, dass der Wiedereinstieg in den Berufsalltag eine große Herausforderung darstellt.",
      aussagen: [
        { nr: 1, text: "Berufsunfähigkeit wird finanziell oft unterschätzt.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Psychische Erkrankungen zählen zu den häufigsten Ursachen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Die gesetzliche Erwerbsminderungsrente deckt das gesamte vorherige Einkommen ab.", korrekt: false, hinweis: "Gegenteil: 'nur einen Bruchteil... ab'." },
        { nr: 4, text: "Arbeitgeber sind nicht verpflichtet, ein Eingliederungsmanagement anzubieten.", korrekt: false, hinweis: "Gegenteil: 'gesetzlich verpflichtet... anzubieten'." },
        { nr: 5, text: "Der Wiedereinstieg fällt vielen Betroffenen schwer.", korrekt: true, hinweis: "Direkt im letzten Satz." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Versicherungsmaklerin, spezialisiert auf Berufsunfähigkeitsversicherungen." },
        { nr: 2, text: "Arbeitsmediziner, sucht Stelle im betrieblichen Eingliederungsmanagement." },
        { nr: 3, text: "Sozialrechtsanwalt, berät zu Erwerbsminderungsrente." },
        { nr: 4, text: "Psychologin, sucht Stelle in der Wiedereingliederung." },
        { nr: 5, text: "Physiotherapeutin, sucht Stelle in der Rehabilitation." },
        { nr: 6, text: "Grafikdesigner, sucht Festanstellung." },
        { nr: 7, text: "Erzieherin, sucht Stelle in einer Kita." },
        { nr: 8, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 9, text: "Reiseleiter, sucht saisonale Stelle." },
        { nr: 10, text: "Koch, sucht Stelle in der Gastronomie." }
      ],
      anzeigen: [
        { id: "a", text: "Versicherungsmakler/in für Berufsunfähigkeitsversicherungen gesucht." },
        { id: "b", text: "Arbeitsmediziner/in für betriebliches Eingliederungsmanagement." },
        { id: "c", text: "Sozialrechtskanzlei sucht Anwalt/Anwältin." },
        { id: "d", text: "Psycholog/in für Wiedereingliederung gesucht." },
        { id: "e", text: "Reha-Zentrum sucht Physiotherapeut/in." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "f", 8: "f", 9: "f", 10: "f" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Berufsunfähigkeit stellt ein Risiko dar, ___(1)___ oft unterschätzt wird. ___(2)___ die gesetzliche Rente meist nicht ausreicht, raten Experten zu einer privaten Absicherung. Arbeitgeber sind verpflichtet, ein Eingliederungsmanagement anzubieten, ___(3)___ den Wiedereinstieg erleichtern soll. ___(4)___ dieser Maßnahmen berichten viele Betroffene von Schwierigkeiten. Es ist wichtig, ___(5)___ man sich frühzeitig informiert.",
      luecken: [
        { nr: 1, o: ["das", "die", "was"], c: 0, h: "Relativpronomen bezogen auf 'Risiko' (neutrum) → das." },
        { nr: 2, o: ["Da", "Obwohl", "Damit"], c: 0, h: "Begründung → da." },
        { nr: 3, o: ["das", "die", "was"], c: 0, h: "Relativpronomen bezogen auf 'Eingliederungsmanagement' (neutrum) → das." },
        { nr: 4, o: ["Trotz", "Wegen", "Statt"], c: 0, h: "trotz + Genitiv." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'wichtig ist' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Erwerbsminderungsrente", "Absicherung", "Wiedereinstieg", "Ursachen", "Eingliederungsmanagement"],
      text: "Häufige ___(6)___ für Berufsunfähigkeit sind psychische Erkrankungen. Die gesetzliche ___(7)___ reicht oft nicht aus. Deshalb ist eine private ___(8)___ sinnvoll. Arbeitgeber müssen ein betriebliches ___(9)___ anbieten. So wird der ___(10)___ in den Beruf erleichtert.",
      loesung: { 6: "Ursachen", 7: "Erwerbsminderungsrente", 8: "Absicherung", 9: "Eingliederungsmanagement", 10: "Wiedereinstieg" }
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
        situation: "These: 'Jeder Arbeitnehmer sollte gesetzlich verpflichtet sein, eine private Berufsunfähigkeitsversicherung abzuschließen.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Arbeitgeber sollten stärker in Prävention psychischer Erkrankungen investieren.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

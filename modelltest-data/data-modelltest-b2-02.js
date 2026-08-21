// ============================================================
// FLOß Modelltest B2 — Nr. 02
// Gleiches Format wie Nr. 01.
// ============================================================

window.MODELLTEST_B2_02 = {
  testKey: "modelltest-b2-02",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 2",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Migration als Antwort auf den demografischen Wandel" },
        { id: 2, text: "Sprachbarrieren im Gesundheitswesen" },
        { id: 3, text: "Anerkennung ausländischer Abschlüsse — ein langer Weg" },
        { id: 4, text: "Integration beginnt mit der Sprache" },
        { id: 5, text: "Der Preis der Bürokratie" },
        { id: 6, text: "Wohnungsnot in deutschen Großstädten" },
        { id: 7, text: "Duale Ausbildung als Exportmodell" },
        { id: 8, text: "Zwischen zwei Kulturen aufwachsen" }
      ],
      texte: [
        { id: "a", text: "Ohne ausreichende Sprachkenntnisse bleibt selbst die beste fachliche Qualifikation oft wirkungslos. Wer sich im Berufsalltag nicht verständlich machen kann, hat es ungleich schwerer, Fuß zu fassen — unabhängig von Talent oder Erfahrung." },
        { id: "b", text: "In Kliniken und Arztpraxen zeigt sich immer wieder, wie sehr fehlende Sprachkenntnisse den Behandlungserfolg gefährden können. Missverständnisse bei Diagnosen oder Medikamenteneinnahme sind keine Seltenheit, wenn Dolmetscher fehlen." },
        { id: "c", text: "Zwischen eingereichten Unterlagen und der endgültigen Anerkennung eines ausländischen Abschlusses vergehen mitunter Monate, manchmal sogar Jahre. Betroffene berichten von widersprüchlichen Auskünften verschiedener Behörden und fehlender Transparenz im Verfahren." },
        { id: "d", text: "Angesichts einer alternden Gesellschaft und schrumpfender Erwerbsbevölkerung gilt gezielte Zuwanderung für viele Ökonomen als eine der wenigen realistischen Antworten auf den drohenden Arbeitskräftemangel in den kommenden Jahrzehnten." },
        { id: "e", text: "Jede zusätzliche Formalität, jeder weitere Nachweis kostet Zeit und Geld — sowohl für Antragstellende als auch für die Verwaltung selbst. Kritiker fordern seit Langem eine grundlegende Vereinfachung der Verfahren." }
      ],
      loesung: { a: 4, b: 2, c: 3, d: 1, e: 5 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Die duale Ausbildung, also die Kombination aus praktischer Arbeit im Betrieb und theoretischem Unterricht in der Berufsschule, gilt international als Erfolgsmodell und wird von zahlreichen Ländern als Vorbild für eigene Reformen herangezogen. Ausländische Delegationen besuchen regelmäßig deutsche Betriebe, um das System aus erster Hand kennenzulernen. Dabei wird häufig übersehen, dass das Modell tief in gewachsenen Strukturen verankert ist — etwa in der engen Zusammenarbeit zwischen Kammern, Gewerkschaften und Unternehmen —, die sich nicht ohne Weiteres in andere Länder übertragen lassen. Wer das System kopieren möchte, muss daher weit mehr anpassen als nur den Lehrplan. Gleichzeitig zeigt die wachsende Zahl internationaler Auszubildender in Deutschland selbst, dass das System auch für Menschen mit anderer Bildungsbiografie offen ist, sofern die sprachlichen Voraussetzungen stimmen.",
      aussagen: [
        { nr: 1, text: "Die duale Ausbildung wird international als Vorbild betrachtet.", korrekt: true, hinweis: "Direkt im ersten Satz genannt." },
        { nr: 2, text: "Das System lässt sich problemlos 1:1 in andere Länder übertragen.", korrekt: false, hinweis: "Gegenteil: 'lassen sich nicht ohne Weiteres übertragen'." },
        { nr: 3, text: "Der Erfolg hängt auch mit der Zusammenarbeit von Kammern, Gewerkschaften und Unternehmen zusammen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Internationale Auszubildende haben in Deutschland keinen Zugang zum System.", korrekt: false, hinweis: "Gegenteil: 'zeigt... dass das System auch offen ist'." },
        { nr: 5, text: "Sprachliche Voraussetzungen spielen laut Text keine Rolle.", korrekt: false, hinweis: "'sofern die sprachlichen Voraussetzungen stimmen' — sie spielen sehr wohl eine Rolle." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Ausgebildete Krankenpflegerin mit B2-Zertifikat, sucht Stelle mit Einarbeitung." },
        { nr: 2, text: "Berufserfahrener Elektriker, sucht Stelle mit Möglichkeit zur Anerkennung des Abschlusses." },
        { nr: 3, text: "Absolventin eines Wirtschaftsstudiums, sucht Traineeprogramm." },
        { nr: 4, text: "Erfahrener Altenpfleger, sucht Vollzeitstelle in stationärer Einrichtung." },
        { nr: 5, text: "Quereinsteiger ohne einschlägige Ausbildung, sucht Umschulungsmöglichkeit im Handwerk." },
        { nr: 6, text: "Erfahrene Übersetzerin, sucht freiberufliche Aufträge." },
        { nr: 7, text: "Berufsanfänger, sucht Ausbildungsplatz als Zerspanungsmechaniker." },
        { nr: 8, text: "Ingenieur mit ausländischem Abschluss, sucht Unterstützung bei der Anerkennung." },
        { nr: 9, text: "Erfahrene Erzieherin, sucht Teilzeitstelle in einer Kita." },
        { nr: 10, text: "Studentin, sucht Nebenjob im Verkauf." }
      ],
      anzeigen: [
        { id: "a", text: "Pflegeeinrichtung sucht examinierte Pflegekräfte, strukturierte Einarbeitung garantiert." },
        { id: "b", text: "Beratungsstelle für Anerkennung ausländischer Berufsabschlüsse, kostenlose Erstberatung." },
        { id: "c", text: "Industriebetrieb bietet Ausbildung zum/zur Zerspanungsmechaniker/in ab September." },
        { id: "d", text: "Seniorenheim sucht Altenpfleger/in in Vollzeit, unbefristete Anstellung." },
        { id: "e", text: "Handwerkskammer bietet Umschulungsprogramme in mehreren Gewerken, staatlich gefördert." },
        { id: "f", text: "Kita sucht Erzieher/in in Teilzeit, flexible Arbeitszeiten möglich." }
      ],
      loesung: { 1: "a", 2: "b", 3: "x", 4: "d", 5: "e", 6: "x", 7: "c", 8: "b", 9: "f", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ die duale Ausbildung international als Vorbild gilt, lässt sie sich nicht ohne Weiteres in andere Länder übertragen. Das System ist ___(2)___ historisch gewachsener Strukturen entstanden, die sich kaum kopieren lassen. ___(3)___ wird das Modell in vielen Ländern als Reformvorlage genutzt. Wer es übernehmen möchte, ___(4)___ weit mehr anpassen als nur den Lehrplan. Andernfalls droht das Vorhaben ___(5)___ Scheitern verurteilt zu sein.",
      luecken: [
        { nr: 1, o: ["Obwohl", "Weil", "Damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 2, o: ["aufgrund", "wegen", "trotz"], c: 0, h: "Präposition + Genitiv, formal → aufgrund." },
        { nr: 3, o: ["Trotzdem", "Deshalb", "Sonst"], c: 0, h: "Gegensatz zum vorherigen Satz → trotzdem." },
        { nr: 4, o: ["muss", "müsste", "musste"], c: 0, h: "generelle Aussage, Präsens → muss." },
        { nr: 5, o: ["zum", "zu", "beim"], c: 0, h: "zum Scheitern verurteilt (feste Wendung)." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["nicht zuletzt", "gleichwohl", "mitunter", "vielmehr", "längst"],
      text: "Das Verfahren dauert ___(6)___ mehrere Monate. Es geht dabei ___(7)___ nicht nur um formale Prüfung, ___(8)___ um eine echte fachliche Bewertung. ___(9)___ bleibt die Zahl der Anträge hoch, ___(10)___ weil viele Betriebe dringend Fachkräfte suchen.",
      loesung: { 6: "mitunter", 7: "längst", 8: "vielmehr", 9: "gleichwohl", 10: "nicht zuletzt" }
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
        situation: "These: 'Die Anerkennung ausländischer Berufsabschlüsse sollte bundesweit einheitlich und deutlich schneller geregelt werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Ohne gezielte Zuwanderung von Fachkräften wird der deutsche Arbeitsmarkt langfristig zusammenbrechen.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

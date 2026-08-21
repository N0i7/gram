// ============================================================
// FLOß Modelltest B2 — Nr. 04
// Gleiches Format wie Nr. 01–03.
// ============================================================

window.MODELLTEST_B2_04 = {
  testKey: "modelltest-b2-04",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 4",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Ehrenamt als unterschätzte Integrationskraft" },
        { id: 2, text: "Die Grenzen der Selbstoptimierung" },
        { id: 3, text: "Zwischen zwei Kulturen aufwachsen: ein beruflicher Vorteil" },
        { id: 4, text: "Zwischen Anspruch und Wirklichkeit: mentale Gesundheit am Arbeitsplatz" },
        { id: 5, text: "Der unterschätzte Wert langsamer Entscheidungen" },
        { id: 6, text: "Freiwilligenarbeit als Lebenslauf-Baustein" },
        { id: 7, text: "Digitale Selbstkontrolle als neue Kompetenz" },
        { id: 8, text: "Der Preis permanenter Erreichbarkeit" }
      ],
      texte: [
        { id: "a", text: "Immer mehr Arbeitgeber erkennen, dass psychische Belastung am Arbeitsplatz kein Randthema mehr ist, sondern direkte Auswirkungen auf Produktivität und Fehlzeiten hat. Trotzdem klafft zwischen offizieller Fürsorgepflicht und gelebter Unternehmenskultur oft eine erhebliche Lücke." },
        { id: "b", text: "Wer ständig erreichbar ist, riskiert nicht nur eigene Erschöpfung, sondern setzt implizit auch Kollegen unter Druck, es ihm gleichzutun. Diese unausgesprochenen Normen sind oft schwerer zu durchbrechen als offizielle Regeln." },
        { id: "c", text: "Schnelle Entscheidungen gelten in vielen Unternehmenskulturen als Zeichen von Kompetenz. Dabei zeigen Untersuchungen, dass bewusst verzögerte Entscheidungen in komplexen Situationen häufig zu besseren Ergebnissen führen." },
        { id: "d", text: "Wer sich ehrenamtlich engagiert, sammelt oft wertvolle soziale und organisatorische Kompetenzen, die im Lebenslauf durchaus Gewicht haben — auch wenn dies selten der eigentliche Beweggrund ist." },
        { id: "e", text: "Zwischen zwei Kulturen aufzuwachsen bringt sprachliche und interkulturelle Fähigkeiten mit sich, die im Berufsleben zunehmend gefragt sind, auch wenn Betroffene diesen Vorteil selbst oft erst spät erkennen." }
      ],
      loesung: { a: 4, b: 8, c: 5, d: 6, e: 3 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Die Debatte um die sogenannte Vier-Tage-Woche hat in den letzten Jahren erheblich an Fahrt aufgenommen. Pilotprojekte in verschiedenen Ländern zeigen überwiegend positive Effekte: gesteigerte Zufriedenheit der Belegschaft, gleichbleibende oder sogar höhere Produktivität sowie eine geringere Fluktuation. Kritiker weisen jedoch darauf hin, dass diese Ergebnisse häufig aus freiwillig teilnehmenden, überdurchschnittlich motivierten Unternehmen stammen und sich daher nur bedingt verallgemeinern lassen. Besonders in personalintensiven Branchen mit direktem Kundenkontakt, etwa im Einzelhandel oder in der Pflege, gestaltet sich die Umsetzung deutlich schwieriger als in der Bürowelt. Dennoch mehren sich die Stimmen, die eine grundsätzliche Neuverhandlung der Arbeitszeitnormen fordern — unabhängig davon, ob am Ende tatsächlich vier Tage die Lösung sind.",
      aussagen: [
        { nr: 1, text: "Die Debatte um die Vier-Tage-Woche hat in den letzten Jahren an Bedeutung gewonnen.", korrekt: true, hinweis: "'erheblich an Fahrt aufgenommen'." },
        { nr: 2, text: "Pilotprojekte zeigen überwiegend negative Effekte.", korrekt: false, hinweis: "Gegenteil: 'überwiegend positive Effekte'." },
        { nr: 3, text: "Kritiker halten die Studienergebnisse für uneingeschränkt verallgemeinerbar.", korrekt: false, hinweis: "Gegenteil: 'nur bedingt verallgemeinern lassen'." },
        { nr: 4, text: "In Branchen mit direktem Kundenkontakt ist die Umsetzung schwieriger.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Der Text behauptet, vier Tage seien definitiv die richtige Lösung.", korrekt: false, hinweis: "Gegenteil: 'unabhängig davon, ob am Ende tatsächlich vier Tage die Lösung sind'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "HR-Managerin, sucht Stelle mit Fokus auf mentale Gesundheit am Arbeitsplatz." },
        { nr: 2, text: "Erfahrener Berater, sucht projektbasierte Zusammenarbeit ohne Festanstellung." },
        { nr: 3, text: "Sozialpädagoge, sucht Koordinationsstelle für Freiwilligenprogramme." },
        { nr: 4, text: "Einzelhandelsangestellte, interessiert sich für Vier-Tage-Woche-Modelle." },
        { nr: 5, text: "IT-Spezialist, sucht Remote-Stelle mit flexibler Arbeitszeit." },
        { nr: 6, text: "Pflegefachkraft, sucht Stelle mit verlässlichen Schichtplänen." },
        { nr: 7, text: "Erfahrene Trainerin, sucht Aufträge im Bereich Stressbewältigung." },
        { nr: 8, text: "Berufseinsteigerin, sucht erste Stelle im Personalwesen." },
        { nr: 9, text: "Freiberufliche Texterin, sucht neue Kunden." },
        { nr: 10, text: "Erfahrener Logistikleiter, sucht Führungsposition." }
      ],
      anzeigen: [
        { id: "a", text: "Unternehmen sucht HR-Manager/in mit Schwerpunkt Employee Wellbeing." },
        { id: "b", text: "Wohlfahrtsverband sucht Koordinator/in für Freiwilligenprogramme." },
        { id: "c", text: "Einzelhandelskette testet Vier-Tage-Woche, sucht motivierte Verkäufer/innen." },
        { id: "d", text: "IT-Unternehmen bietet vollständig remote Stellen mit Vertrauensarbeitszeit." },
        { id: "e", text: "Pflegeeinrichtung garantiert feste Schichtpläne ohne kurzfristige Änderungen." },
        { id: "f", text: "Beratungsunternehmen sucht selbstständige Berater/innen auf Projektbasis." }
      ],
      loesung: { 1: "a", 2: "f", 3: "b", 4: "c", 5: "d", 6: "e", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ die Vier-Tage-Woche in vielen Pilotprojekten positive Ergebnisse zeigt, bleibt fraglich, ___(2)___ sich diese auf alle Branchen übertragen lassen. Kritiker weisen ___(3)___ hin, dass die untersuchten Unternehmen meist freiwillig teilgenommen haben. ___(4)___ ist die Diskussion um flexiblere Arbeitszeitmodelle grundsätzlich zu begrüßen. Ob sich am Ende tatsächlich vier Tage ___(5)___, bleibt abzuwarten.",
      luecken: [
        { nr: 1, o: ["Obwohl", "Weil", "Damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 2, o: ["ob", "dass", "wie"], c: 0, h: "indirekte Frage → ob." },
        { nr: 3, o: ["darauf", "davon", "dabei"], c: 0, h: "hinweisen auf + Akkusativ → darauf." },
        { nr: 4, o: ["Nichtsdestotrotz", "Deswegen", "Sonst"], c: 0, h: "Gegensatz zum vorherigen Satz → nichtsdestotrotz." },
        { nr: 5, o: ["durchsetzen", "durchsetzt", "durchgesetzt"], c: 0, h: "Präsens, 3. Person Plural (Subjekt 'vier Tage') → durchsetzen." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["mitunter", "vorschnell", "letztlich", "vorausgesetzt", "unweigerlich"],
      text: "Schnelle Entscheidungen gelten ___(6)___ als Zeichen von Stärke, führen aber ___(7)___ zu Fehlern. ___(8)___ Führungskräfte sich mehr Zeit nehmen, verbessert sich häufig die Qualität der Entscheidung. Wer unter Druck entscheidet, gerät ___(9)___ in eine reaktive Haltung. ___(10)___ zählt jedoch das Ergebnis, nicht die Geschwindigkeit.",
      loesung: { 6: "vorschnell", 7: "mitunter", 8: "vorausgesetzt", 9: "unweigerlich", 10: "letztlich" }
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
        situation: "These: 'Die Vier-Tage-Woche sollte branchenübergreifend zum Standard werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Ehrenamtliches Engagement sollte staatlich stärker gefördert und im Lebenslauf offiziell anerkannt werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

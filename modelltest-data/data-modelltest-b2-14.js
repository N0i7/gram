// ============================================================
// FLOß Modelltest B2 — Nr. 14
// Gleiches Format wie Nr. 01–13.
// ============================================================

window.MODELLTEST_B2_14 = {
  testKey: "modelltest-b2-14",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 14",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Doppelbelastung berufstätiger Angehöriger" },
        { id: 2, text: "Pflegezeit gesetzlich verankert" },
        { id: 3, text: "Ambulante Pflegedienste als Entlastung" },
        { id: 4, text: "Emotionale Belastung durch Pflege" },
        { id: 5, text: "Finanzielle Auswirkungen der Pflegeteilzeit" },
        { id: 6, text: "Pflegeheime als letzte Option" },
        { id: 7, text: "Digitale Hilfsmittel in der Pflege" },
        { id: 8, text: "Unternehmen reagieren auf pflegende Beschäftigte" }
      ],
      texte: [
        { id: "a", text: "Berufstätige, die gleichzeitig einen Angehörigen pflegen, geraten häufig in eine belastende Doppelrolle zwischen Job und Fürsorge." },
        { id: "b", text: "Wer beruflich kürzertritt, um einen Angehörigen zu pflegen, muss oft mit spürbaren Einkommenseinbußen rechnen." },
        { id: "c", text: "Manche Unternehmen bieten mittlerweile flexible Arbeitszeitmodelle speziell für Beschäftigte mit Pflegeverantwortung an." },
        { id: "d", text: "Ambulante Pflegedienste können pflegende Angehörige zeitweise entlasten, indem sie einen Teil der täglichen Versorgung übernehmen." },
        { id: "e", text: "Neben der körperlichen Anstrengung berichten viele pflegende Angehörige auch von psychischer Erschöpfung und Schuldgefühlen." }
      ],
      loesung: { a: 1, b: 5, c: 8, d: 3, e: 4 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Die Vereinbarkeit von Pflege und Beruf stellt für immer mehr Menschen eine erhebliche Herausforderung dar, insbesondere angesichts einer alternden Gesellschaft. Viele Berufstätige reduzieren ihre Arbeitszeit oder nehmen eine gesetzlich geregelte Pflegezeit in Anspruch, um Angehörige zu versorgen. Diese Entscheidung geht jedoch häufig mit finanziellen Einbußen einher, da die Pflegezeit oft nur teilweise oder gar nicht vergütet wird. Arbeitgeber reagieren zunehmend mit flexibleren Arbeitsmodellen, um Beschäftigte in dieser Situation zu unterstützen, wobei die Umsetzung je nach Branche und Unternehmensgröße stark variiert. Expertinnen und Experten fordern daher weitergehende gesetzliche Regelungen sowie eine bessere finanzielle Absicherung pflegender Angehöriger, um diese Doppelbelastung langfristig zu verringern.",
      aussagen: [
        { nr: 1, text: "Die Vereinbarkeit von Pflege und Beruf wird als zunehmende Herausforderung beschrieben.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Pflegezeit wird laut Text immer vollständig vergütet.", korrekt: false, hinweis: "Gegenteil: 'oft nur teilweise oder gar nicht vergütet'." },
        { nr: 3, text: "Alle Arbeitgeber bieten die gleichen flexiblen Modelle an.", korrekt: false, hinweis: "Gegenteil: 'Umsetzung... variiert stark'." },
        { nr: 4, text: "Experten fordern bessere finanzielle Absicherung pflegender Angehöriger.", korrekt: true, hinweis: "Letzter Satz des Textes." },
        { nr: 5, text: "Die Doppelbelastung betrifft laut Text nur wenige Menschen.", korrekt: false, hinweis: "Gegenteil: 'für immer mehr Menschen'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Pflegefachkraft, sucht Stelle im ambulanten Dienst." },
        { nr: 2, text: "HR-Beraterin, sucht Projekt zu pflegefreundlichen Arbeitsmodellen." },
        { nr: 3, text: "Sozialarbeiter, sucht Stelle in der Angehörigenberatung." },
        { nr: 4, text: "Psychologin, sucht Forschungsstelle zu Belastung pflegender Angehöriger." },
        { nr: 5, text: "Juristin, sucht Spezialisierung auf Pflegezeitrecht." },
        { nr: 6, text: "Softwareentwickler, sucht Stelle im Bereich digitale Pflegehilfen." },
        { nr: 7, text: "Übersetzerin, sucht freiberufliche Aufträge." },
        { nr: 8, text: "Journalist, sucht Recherchethemen zu Pflege und Beruf." },
        { nr: 9, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 10, text: "Buchhalter, sucht Teilzeitstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Ambulanter Pflegedienst sucht Pflegefachkraft." },
        { id: "b", text: "Beratungsfirma sucht HR-Berater/in für pflegefreundliche Modelle." },
        { id: "c", text: "Sozialstation sucht Sozialarbeiter/in für Angehörigenberatung." },
        { id: "d", text: "Forschungsinstitut sucht Psycholog/in zu Belastung pflegender Angehöriger." },
        { id: "e", text: "Kanzlei sucht Jurist/in mit Fokus auf Pflegezeitrecht." },
        { id: "f", text: "Technologieunternehmen sucht Entwickler/in für digitale Pflegehilfen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ die Gesellschaft altert, wird die Vereinbarkeit von Pflege und Beruf immer wichtiger. ___(2)___ viele Beschäftigte ihre Arbeitszeit reduzieren, entstehen finanzielle Einbußen. ___(3)___ dieser Herausforderungen bieten manche Unternehmen flexible Modelle an. Wichtig ist, ___(4)___ pflegende Angehörige besser unterstützt werden. Nur so lässt sich die Doppelbelastung verringern, ___(5)___ langfristig Verbesserungen zu erzielen.",
      luecken: [
        { nr: 1, o: ["Da", "Obwohl", "Damit"], c: 0, h: "Grund → da." },
        { nr: 2, o: ["Weil", "Da", "Indem"], c: 0, h: "Grund/Ursache → weil." },
        { nr: 3, o: ["Trotz", "Wegen", "Anstelle"], c: 0, h: "trotz + Genitiv." },
        { nr: 4, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'wichtig ist' → dass." },
        { nr: 5, o: ["um", "damit", "sodass"], c: 0, h: "um...zu + Infinitiv." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["zunehmend", "keineswegs", "vielmehr", "finanziell", "langfristig"],
      text: "Die Doppelbelastung pflegender Angehöriger wird ___(6)___ zum gesellschaftlichen Thema. Eine einfache Lösung ist ___(7)___ in Sicht. Es geht ___(8)___ um strukturelle Veränderungen. Viele Familien sind ___(9)___ stark belastet. ___(10)___ braucht es bessere gesetzliche Regelungen.",
      loesung: { 6: "zunehmend", 7: "keineswegs", 8: "vielmehr", 9: "finanziell", 10: "langfristig" }
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
        situation: "These: 'Der Staat sollte pflegende Angehörige finanziell stärker unterstützen als bisher.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Unternehmen sollten verpflichtet werden, für pflegende Beschäftigte flexible Arbeitszeitmodelle anzubieten.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

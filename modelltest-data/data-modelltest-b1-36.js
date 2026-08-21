// ============================================================
// FLOß Modelltest B1 — Nr. 36
// Gleiches Format wie Nr. 01–35.
// ============================================================

window.MODELLTEST_B1_36 = {
  testKey: "modelltest-b1-36",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 36",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Ehrenamt für Senioren organisieren" },
        { id: 2, text: "Einkäufe für ältere Nachbarn" },
        { id: 3, text: "Gesellschaft leisten gegen Einsamkeit" },
        { id: 4, text: "Digitale Hilfe für Senioren" },
        { id: 5, text: "Fahrdienst zum Arzt" },
        { id: 6, text: "Ehrenamt wird schlecht bezahlt" },
        { id: 7, text: "Vermittlung über eine Plattform" },
        { id: 8, text: "Senioren helfen selbst mit" }
      ],
      texte: [
        { id: "a", text: "Viele Freiwillige übernehmen Einkäufe für ältere Nachbarn, die selbst nicht mehr einkaufen können." },
        { id: "b", text: "Regelmäßige Besuche helfen, Einsamkeit im Alter vorzubeugen." },
        { id: "c", text: "Manche Freiwillige unterstützen Senioren beim Umgang mit dem Smartphone." },
        { id: "d", text: "Ein Fahrdienst bringt Senioren zu Arztterminen, wenn keine Angehörigen helfen können." },
        { id: "e", text: "Über eine Online-Plattform werden Freiwillige und hilfsbedürftige Senioren zusammengebracht." }
      ],
      loesung: { a: 2, b: 3, c: 4, d: 5, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit einigen Monaten engagiere ich mich ehrenamtlich als Nachbarschaftshelferin für Senioren. Ich übernehme Einkäufe für eine ältere Nachbarin, die nicht mehr gut zu Fuß ist. Außerdem besuche ich sie regelmäßig, damit sie sich nicht so einsam fühlt. Manchmal helfe ich ihr auch beim Umgang mit ihrem Smartphone, was ihr sehr wichtig ist. Über eine Online-Plattform habe ich weitere Senioren kennengelernt, die Unterstützung suchen. Diese Arbeit macht mir viel Freude, auch wenn sie unbezahlt ist.",
      aussagen: [
        { nr: 1, text: "Die Person engagiert sich als Nachbarschaftshelferin.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person übernimmt keine Einkäufe.", korrekt: false, hinweis: "Gegenteil: 'Ich übernehme Einkäufe'." },
        { nr: 3, text: "Die Besuche sollen gegen Einsamkeit helfen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person hilft nie beim Smartphone.", korrekt: false, hinweis: "Gegenteil: 'helfe ich ihr auch beim Umgang mit ihrem Smartphone'." },
        { nr: 5, text: "Die Arbeit wird gut bezahlt.", korrekt: false, hinweis: "Gegenteil: 'auch wenn sie unbezahlt ist'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten sich als Nachbarschaftshelfer/in für Senioren melden." },
        { nr: 2, text: "Sie suchen eine Plattform für Ehrenamt bei Senioren." },
        { nr: 3, text: "Sie möchten Senioren beim Smartphone helfen." },
        { nr: 4, text: "Sie suchen einen Fahrdienst für Ihre Mutter." },
        { nr: 5, text: "Sie möchten Einkäufe für einen Nachbarn übernehmen." },
        { nr: 6, text: "Sie suchen eine bezahlte Pflegekraft." },
        { nr: 7, text: "Sie suchen eine Wohnung für Senioren." },
        { nr: 8, text: "Sie suchen einen Handwerker." },
        { nr: 9, text: "Sie suchen eine Physiotherapie." },
        { nr: 10, text: "Sie suchen ein Altenheim." }
      ],
      anzeigen: [
        { id: "a", text: "Nachbarschaftshilfe für Senioren gesucht." },
        { id: "b", text: "Online-Plattform für Ehrenamt bei Senioren." },
        { id: "c", text: "Digitale Hilfe für Senioren — Freiwillige gesucht." },
        { id: "d", text: "Fahrdienst zu Arztterminen." },
        { id: "e", text: "Einkaufshilfe für ältere Menschen." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit einigen Monaten engagiere ich mich, ___(1)___ ich älteren Menschen helfen möchte. Ich übernehme Einkäufe für eine Nachbarin, ___(2)___ nicht mehr gut zu Fuß ist. Ich besuche sie regelmäßig, ___(3)___ sie sich nicht einsam fühlt. Über eine Plattform, ___(4)___ ich nutze, habe ich weitere Senioren kennengelernt. Die Arbeit macht mir Freude, ___(5)___ sie unbezahlt ist.",
      luecken: [
        { nr: 1, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Nachbarin' (feminin) → die." },
        { nr: 3, o: ["damit", "weil", "obwohl"], c: 0, h: "Finalsatz → damit." },
        { nr: 4, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Plattform' (feminin) → die." },
        { nr: 5, o: ["obwohl", "weil", "damit"], c: 0, h: "Einräumung → obwohl." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Nachbarschaftshilfe", "Einkäufe", "Einsamkeit", "Plattform", "unbezahlt"],
      text: "Bei der ___(6)___ für Senioren helfen viele Freiwillige. Manche übernehmen ___(7)___. Regelmäßige Besuche helfen gegen ___(8)___. Über eine Online-___(9)___ werden Helfer vermittelt. Die Arbeit ist ___(10)___, macht aber Freude.",
      loesung: { 6: "Nachbarschaftshilfe", 7: "Einkäufe", 8: "Einsamkeit", 9: "Plattform", 10: "unbezahlt" }
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
        situation: "Sie engagieren sich als Nachbarschaftshelfer/in für Senioren. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Beschreiben Sie Ihre Aufgaben.", "Erzählen Sie von einer Erfahrung.", "Fragen Sie, ob die Person auch mitmachen möchte."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an eine Vermittlungsplattform, um sich als Nachbarschaftshelfer/in für Senioren anzumelden.",
        punkte: ["Stellen Sie sich kurz vor.", "Beschreiben Sie, wie Sie helfen möchten.", "Fragen Sie nach dem weiteren Vorgehen."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

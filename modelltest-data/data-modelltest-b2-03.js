// ============================================================
// FLOß Modelltest B2 — Nr. 03
// Gleiches Format wie Nr. 01–02.
// ============================================================

window.MODELLTEST_B2_03 = {
  testKey: "modelltest-b2-03",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 3",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Wohnraummangel trifft vor allem Pendler" },
        { id: 2, text: "Wie Unternehmen von Diversität profitieren" },
        { id: 3, text: "Der stille Rückzug junger Fachkräfte aufs Land" },
        { id: 4, text: "Bildungsungleichheit beginnt früh" },
        { id: 5, text: "Warum Weiterbildung oft an der Zeit scheitert" },
        { id: 6, text: "Klimaanpassung in der Stadtplanung" },
        { id: 7, text: "Der Wert informeller Netzwerke im Berufsleben" },
        { id: 8, text: "Generationenkonflikt am Arbeitsplatz" }
      ],
      texte: [
        { id: "a", text: "Untersuchungen zeigen immer wieder, dass Kontakte und persönliche Empfehlungen bei der Jobsuche eine mindestens ebenso große Rolle spielen wie formale Qualifikationen — ein Umstand, der Menschen ohne etabliertes Netzwerk systematisch benachteiligt." },
        { id: "b", text: "Teams mit unterschiedlichen Hintergründen entwickeln nachweislich kreativere Lösungen, wie mehrere Studien belegen. Dennoch tun sich viele Unternehmen schwer damit, diese Vielfalt tatsächlich in ihrer Belegschaft abzubilden." },
        { id: "c", text: "Trotz vollem Terminkalender wünschen sich viele Beschäftigte mehr berufliche Weiterbildung. Das Problem liegt selten am fehlenden Willen, sondern an mangelnder Freistellung durch den Arbeitgeber." },
        { id: "d", text: "Immer mehr Städte müssen ihre Infrastruktur an häufigere Extremwetterereignisse anpassen — von zusätzlichen Grünflächen zur Kühlung bis zu Kanalsystemen, die auch Starkregen bewältigen können." },
        { id: "e", text: "Bereits im Kindergartenalter zeigen sich deutliche Unterschiede im Wortschatz zwischen Kindern aus bildungsnahen und bildungsfernen Familien — ein Rückstand, der sich im weiteren Bildungsweg kaum noch aufholen lässt." }
      ],
      loesung: { a: 7, b: 2, c: 5, d: 6, e: 4 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Der Begriff der Work-Life-Balance wird seit Jahren kontrovers diskutiert. Kritiker bemängeln, dass er eine klare Trennung zwischen Arbeit und Privatleben suggeriere, die in der Realität — insbesondere durch mobiles Arbeiten und ständige Erreichbarkeit — kaum noch existiere. Befürworter des Konzepts halten dagegen, dass gerade deshalb ein bewusster Umgang mit dieser Grenze wichtiger denn je sei. Einige Unternehmen reagieren inzwischen mit konkreten Maßnahmen, etwa dem technischen Ausschluss dienstlicher E-Mails außerhalb der Arbeitszeit oder einer verbindlichen Kernarbeitszeit ohne Meetings. Wissenschaftliche Studien zur Wirksamkeit solcher Maßnahmen liefern bislang jedoch ein uneinheitliches Bild: Während manche eine spürbare Entlastung der Beschäftigten feststellen, sehen andere kaum messbare Effekte, solange sich nicht auch die Unternehmenskultur insgesamt verändert.",
      aussagen: [
        { nr: 1, text: "Der Begriff Work-Life-Balance wird von allen einheitlich positiv bewertet.", korrekt: false, hinweis: "Der Text nennt explizit Kritiker." },
        { nr: 2, text: "Kritiker bemängeln eine unrealistische Trennung von Arbeit und Privatleben.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Manche Firmen blockieren dienstliche E-Mails außerhalb der Arbeitszeit technisch.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Studien zeigen einheitlich, dass solche Maßnahmen wirkungslos sind.", korrekt: false, hinweis: "Der Text spricht von einem 'uneinheitlichen Bild', nicht von einheitlicher Wirkungslosigkeit." },
        { nr: 5, text: "Laut Text hängt die Wirkung solcher Maßnahmen auch von der Unternehmenskultur ab.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Erfahrene Projektmanagerin, sucht Stelle mit internationalen Teams." },
        { nr: 2, text: "Berufseinsteiger im Bereich Data Science, sucht Mentoring-Programm." },
        { nr: 3, text: "Erfahrener Personalreferent, sucht Stelle mit Fokus auf Diversität." },
        { nr: 4, text: "Lehrerin, sucht Stelle mit Fortbildungsmöglichkeiten während der Arbeitszeit." },
        { nr: 5, text: "Stadtplaner, sucht Projekte im Bereich Klimaanpassung." },
        { nr: 6, text: "Erfahrene Übersetzerin, sucht Festanstellung." },
        { nr: 7, text: "Sozialarbeiterin, sucht Stelle im Bereich frühkindliche Bildung." },
        { nr: 8, text: "Vertriebsmitarbeiter, sucht Stelle mit klarer Work-Life-Balance-Regelung." },
        { nr: 9, text: "Ingenieurin, sucht Teilzeitstelle nach der Elternzeit." },
        { nr: 10, text: "Berufserfahrene Grafikdesignerin, sucht kreatives Team." }
      ],
      anzeigen: [
        { id: "a", text: "Internationales Unternehmen sucht Projektmanager/in für globale Teams." },
        { id: "b", text: "Stadtverwaltung sucht Stadtplaner/in für Klimaanpassungsprojekte." },
        { id: "c", text: "Bildungsträger sucht Sozialarbeiter/in mit Schwerpunkt frühkindliche Bildung." },
        { id: "d", text: "Firma mit fester Kernarbeitszeit ohne Meetings sucht Vertriebsmitarbeiter/in." },
        { id: "e", text: "Schule bietet Lehrstelle mit bezahlter Fortbildung während der Arbeitszeit." },
        { id: "f", text: "HR-Abteilung sucht Personalreferent/in mit Fokus auf Vielfalt und Inklusion." }
      ],
      loesung: { 1: "a", 2: "x", 3: "f", 4: "e", 5: "b", 6: "x", 7: "c", 8: "d", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ viele Unternehmen Diversität offiziell befürworten, spiegelt sich dies ___(2)___ selten in der tatsächlichen Zusammensetzung der Belegschaft wider. Studien legen nahe, dass gemischte Teams ___(3)___ kreativere Lösungen entwickeln. ___(4)___ dieser Erkenntnisse zögern viele Betriebe, ihre Einstellungspraxis grundlegend zu überdenken. Ein Wandel wird sich daher nur ___(5)___ vollziehen, wenn Führungskräfte aktiv gegensteuern.",
      luecken: [
        { nr: 1, o: ["Obwohl", "Weil", "Damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 2, o: ["sich", "dabei", "davon"], c: 1, h: "dabei = in diesem Zusammenhang." },
        { nr: 3, o: ["tendenziell", "eigentlich", "sowieso"], c: 0, h: "vorsichtige Verallgemeinerung → tendenziell." },
        { nr: 4, o: ["Trotz", "Wegen", "Ungeachtet"], c: 2, h: "ungeachtet + Genitiv = trotz." },
        { nr: 5, o: ["dann", "dort", "so"], c: 0, h: "Bedingung erfüllt → dann." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["mithin", "keineswegs", "zusehends", "dahingehend", "unlängst"],
      text: "Die Debatte um Work-Life-Balance hat sich ___(6)___ verändert. Es handelt sich ___(7)___ um ein rein akademisches Thema. ___(8)___ wurde eine neue Studie veröffentlicht, die ___(9)___ argumentiert, dass Unternehmenskultur entscheidend ist. Die Ergebnisse sind ___(10)___ auch für die Praxis relevant.",
      loesung: { 6: "zusehends", 7: "keineswegs", 8: "unlängst", 9: "dahingehend", 10: "mithin" }
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
        situation: "These: 'Unternehmen sollten gesetzlich verpflichtet werden, feste erreichbarkeitsfreie Zeiten für ihre Mitarbeitenden einzuführen.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Vielfalt in Teams ist wichtiger für den Unternehmenserfolg als individuelle fachliche Exzellenz.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

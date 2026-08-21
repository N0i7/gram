// ============================================================
// FLOß Modelltest B2 — Nr. 28
// Gleiches Format wie Nr. 01–27.
// ============================================================

window.MODELLTEST_B2_28 = {
  testKey: "modelltest-b2-28",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 28",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Praxisnähe der dualen Ausbildung" },
        { id: 2, text: "Höhere Abschlusschancen bei schulischer Ausbildung" },
        { id: 3, text: "Vergütung während der dualen Ausbildung" },
        { id: 4, text: "Internationale Anerkennung schulischer Abschlüsse" },
        { id: 5, text: "Fachkräftemangel durch sinkende Ausbildungszahlen" },
        { id: 6, text: "Theorielastigkeit schulischer Ausbildungsgänge" },
        { id: 7, text: "Wahl des passenden Ausbildungswegs" },
        { id: 8, text: "Karrierechancen nach der Ausbildung" }
      ],
      texte: [
        { id: "a", text: "Ein wesentlicher Vorteil der dualen Ausbildung liegt in der engen Verzahnung von Theorie und betrieblicher Praxis." },
        { id: "b", text: "Auszubildende in dualen Ausbildungsgängen erhalten bereits während der Ausbildung eine Vergütung." },
        { id: "c", text: "Schulische Ausbildungsgänge werden mitunter kritisiert, weil sie stärker theoretisch ausgerichtet sind und weniger Praxisbezug bieten." },
        { id: "d", text: "Manche schulischen Abschlüsse genießen international eine höhere Anerkennung als rein betriebliche Ausbildungen." },
        { id: "e", text: "Angesichts der Vielzahl an Optionen fällt vielen Jugendlichen die Entscheidung für den passenden Ausbildungsweg schwer." }
      ],
      loesung: { a: 1, b: 3, c: 6, d: 4, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Bei der Wahl zwischen dualer und schulischer Ausbildung stehen Jugendliche vor einer wichtigen Entscheidung. Die duale Ausbildung punktet vor allem durch ihre enge Verzahnung von Theorie und betrieblicher Praxis sowie durch die Vergütung, die Auszubildende bereits während der Ausbildungszeit erhalten. Schulische Ausbildungsgänge hingegen werden mitunter für ihre stärkere Theorielastigkeit kritisiert, bieten dafür aber in bestimmten Berufsfeldern höhere Abschlusschancen und teilweise auch eine bessere internationale Anerkennung. Welcher Weg der richtige ist, hängt letztlich stark vom individuellen Berufsziel sowie den persönlichen Lernpräferenzen ab. Experten empfehlen daher, sich vor der Entscheidung ausführlich über beide Optionen zu informieren.",
      aussagen: [
        { nr: 1, text: "Bei der dualen Ausbildung erhalten Auszubildende keine Vergütung.", korrekt: false, hinweis: "Gegenteil: 'die Vergütung, die Auszubildende... erhalten'." },
        { nr: 2, text: "Die duale Ausbildung verbindet Theorie und Praxis eng miteinander.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Schulische Ausbildungsgänge gelten manchmal als zu theorielastig.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Schulische Ausbildungen bieten nie höhere Abschlusschancen.", korrekt: false, hinweis: "Gegenteil: 'höhere Abschlusschancen' in bestimmten Berufsfeldern." },
        { nr: 5, text: "Experten raten davon ab, sich über beide Optionen zu informieren.", korrekt: false, hinweis: "Gegenteil: 'empfehlen... sich... ausführlich zu informieren'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Berufsberaterin, spezialisiert auf duale Ausbildungswege." },
        { nr: 2, text: "Lehrer an einer Berufsfachschule, sucht Festanstellung." },
        { nr: 3, text: "Ausbildungsleiter in einem Handwerksbetrieb." },
        { nr: 4, text: "Bildungsforscherin, untersucht Ausbildungssysteme." },
        { nr: 5, text: "Karrierecoach für Jugendliche vor der Berufswahl." },
        { nr: 6, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 7, text: "Elektriker, sucht handwerkliche Stelle." },
        { nr: 8, text: "Koch, sucht Stelle in der Gastronomie." },
        { nr: 9, text: "Bauingenieurin, sucht Projektstelle." },
        { nr: 10, text: "Journalistin, sucht Redaktionsstelle." }
      ],
      anzeigen: [
        { id: "a", text: "Berufsberatung sucht Berater/in für duale Ausbildungswege." },
        { id: "b", text: "Berufsfachschule sucht Lehrer/in." },
        { id: "c", text: "Handwerksbetrieb sucht Ausbildungsleiter/in." },
        { id: "d", text: "Forschungsinstitut sucht Bildungsforscher/in." },
        { id: "e", text: "Coaching-Institut sucht Karrierecoach für Jugendliche." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Bei der Wahl zwischen dualer und schulischer Ausbildung stehen Jugendliche vor einer Entscheidung, ___(1)___ ihre berufliche Zukunft prägt. Die duale Ausbildung punktet durch die Vergütung, ___(2)___ Auszubildende bereits während der Ausbildung erhalten. Schulische Ausbildungsgänge werden kritisiert, ___(3)___ sie theorielastiger sind. ___(4)___ dieser Kritik bieten sie in manchen Berufsfeldern bessere Chancen. Welcher Weg richtig ist, hängt davon ab, ___(5)___ das individuelle Berufsziel aussieht.",
      luecken: [
        { nr: 1, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Entscheidung' (feminin) → die." },
        { nr: 2, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Vergütung' (feminin) → die." },
        { nr: 3, o: ["weil", "obwohl", "damit"], c: 0, h: "Begründung → weil." },
        { nr: 4, o: ["Trotz", "Wegen", "Statt"], c: 0, h: "trotz + Genitiv." },
        { nr: 5, o: ["wie", "dass", "ob"], c: 0, h: "Indirekte Frage → wie." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Ausbildungsweg", "Praxisbezug", "Vergütung", "Theorielastigkeit", "Anerkennung"],
      text: "Die Wahl des passenden ___(6)___ fällt vielen Jugendlichen schwer. Die duale Ausbildung überzeugt durch starken ___(7)___. Auszubildende erhalten zudem eine ___(8)___. Schulische Ausbildungen werden manchmal für ihre ___(9)___ kritisiert, bieten aber teils bessere internationale ___(10)___.",
      loesung: { 6: "Ausbildungsweg", 7: "Praxisbezug", 8: "Vergütung", 9: "Theorielastigkeit", 10: "Anerkennung" }
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
        situation: "These: 'Die duale Ausbildung ist der schulischen Ausbildung grundsätzlich überlegen.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Der Staat sollte mehr in schulische Ausbildungsgänge investieren, um den Praxisbezug zu verbessern.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

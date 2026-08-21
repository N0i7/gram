// ============================================================
// FLOß Modelltest B2 — Nr. 20
// Gleiches Format wie Nr. 01–19.
// ============================================================

window.MODELLTEST_B2_20 = {
  testKey: "modelltest-b2-20",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 20",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Unsichtbare Arbeit im Haushalt" },
        { id: 2, text: "Ungleiche Verteilung zwischen den Geschlechtern" },
        { id: 3, text: "Care-Arbeit wird volkswirtschaftlich unterschätzt" },
        { id: 4, text: "Vereinbarkeit von Care-Arbeit und Erwerbsarbeit" },
        { id: 5, text: "Care-Arbeit als gesellschaftlicher Wert" },
        { id: 6, text: "Bezahlte Pflegekräfte fehlen" },
        { id: 7, text: "Politische Forderungen nach Anerkennung" },
        { id: 8, text: "Auswirkungen auf die Rente" }
      ],
      texte: [
        { id: "a", text: "Care-Arbeit wie Kindererziehung und Pflege von Angehörigen wird oft nicht als vollwertige Arbeit wahrgenommen, obwohl sie enorm viel Zeit beansprucht." },
        { id: "b", text: "Studien zeigen immer wieder, dass Frauen einen deutlich größeren Anteil der unbezahlten Sorgearbeit übernehmen als Männer." },
        { id: "c", text: "Ökonominnen weisen darauf hin, dass unbezahlte Care-Arbeit einen erheblichen, aber oft nicht berücksichtigten Beitrag zur Wirtschaftsleistung leistet." },
        { id: "d", text: "Wer viel Zeit in unbezahlte Sorgearbeit investiert, arbeitet häufig weniger oder gar nicht Vollzeit, was sich langfristig auf die Rentenhöhe auswirkt." },
        { id: "e", text: "Aktivistinnen und Aktivisten fordern zunehmend eine stärkere gesellschaftliche und finanzielle Anerkennung von Care-Arbeit." }
      ],
      loesung: { a: 1, b: 2, c: 3, d: 8, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Unbezahlte Care-Arbeit, also die Betreuung von Kindern, die Pflege von Angehörigen und die Organisation des Haushalts, bildet einen wesentlichen, jedoch häufig unterschätzten Teil gesellschaftlicher Wertschöpfung. Untersuchungen belegen, dass diese Arbeit nach wie vor überwiegend von Frauen geleistet wird, was sich negativ auf deren berufliche Entwicklung und finanzielle Absicherung im Alter auswirken kann. Während Erwerbsarbeit gesellschaftlich sichtbar und wirtschaftlich erfasst wird, bleibt Care-Arbeit statistisch weitgehend unsichtbar, obwohl sie volkswirtschaftlich enorme Bedeutung hätte, würde man sie finanziell bewerten. Politische Initiativen fordern deshalb eine stärkere Anerkennung dieser Arbeit, etwa durch verbesserte Rentenanrechnung oder finanzielle Unterstützung. Kritiker geben allerdings zu bedenken, dass eine vollständige finanzielle Bewertung von Care-Arbeit praktisch schwer umsetzbar sei.",
      aussagen: [
        { nr: 1, text: "Care-Arbeit umfasst unter anderem die Pflege von Angehörigen.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Care-Arbeit wird überwiegend von Männern geleistet.", korrekt: false, hinweis: "Gegenteil: 'überwiegend von Frauen geleistet'." },
        { nr: 3, text: "Care-Arbeit wird statistisch weitgehend unsichtbar erfasst.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Es gibt keine politischen Forderungen zur Anerkennung von Care-Arbeit.", korrekt: false, hinweis: "Gegenteil: 'politische Initiativen fordern... eine stärkere Anerkennung'." },
        { nr: 5, text: "Kritiker halten eine vollständige finanzielle Bewertung für einfach umsetzbar.", korrekt: false, hinweis: "Gegenteil: 'praktisch schwer umsetzbar'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Ökonomin, sucht Forschungsstelle zu Care-Arbeit." },
        { nr: 2, text: "Sozialpolitikerin, sucht Projekt zur Rentenreform für Pflegende." },
        { nr: 3, text: "Journalistin, sucht Recherchethemen zu unbezahlter Sorgearbeit." },
        { nr: 4, text: "Beraterin, sucht Stelle in der Familienberatung." },
        { nr: 5, text: "Aktivist, sucht Kampagnenarbeit zur Anerkennung von Care-Arbeit." },
        { nr: 6, text: "Psychologin, sucht Forschungsstelle zu Belastung pflegender Angehöriger." },
        { nr: 7, text: "Übersetzer, sucht freiberufliche Aufträge." },
        { nr: 8, text: "Grafikdesignerin, sucht Festanstellung." },
        { nr: 9, text: "Buchhalter, sucht Teilzeitstelle." },
        { nr: 10, text: "Ingenieurin, sucht Stelle im Maschinenbau." }
      ],
      anzeigen: [
        { id: "a", text: "Forschungsinstitut sucht Ökonom/in zu Care-Arbeit." },
        { id: "b", text: "Ministerium sucht Sozialpolitiker/in für Rentenreform." },
        { id: "c", text: "Medienhaus sucht Journalist/in zu unbezahlter Sorgearbeit." },
        { id: "d", text: "Beratungsstelle sucht Berater/in für Familienberatung." },
        { id: "e", text: "NGO sucht Aktivist/in für Kampagnenarbeit." },
        { id: "f", text: "Forschungsinstitut sucht Psycholog/in zu Belastung Pflegender." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ Care-Arbeit enorm viel Zeit beansprucht, wird sie oft nicht als vollwertige Arbeit anerkannt. ___(2)___ Erwerbsarbeit wirtschaftlich erfasst wird, bleibt Care-Arbeit statistisch unsichtbar. ___(3)___ dieser Unsichtbarkeit fordern viele eine stärkere Anerkennung. Wichtig ist, ___(4)___ auch die Rentenanrechnung verbessert wird. Nur so lässt sich vermeiden, ___(5)___ Pflegende finanzielle Nachteile erleiden.",
      luecken: [
        { nr: 1, o: ["Obwohl", "Weil", "Damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 2, o: ["Während", "Weil", "Damit"], c: 0, h: "Gegenüberstellung → während." },
        { nr: 3, o: ["Wegen", "Trotz", "Anstelle"], c: 0, h: "wegen + Genitiv." },
        { nr: 4, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'wichtig ist' → dass." },
        { nr: 5, o: ["dass", "ob", "wie"], c: 0, h: "Konjunktion nach 'vermeiden' → dass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["unsichtbar", "keineswegs", "vielmehr", "ungleich", "wertvoll"],
      text: "Care-Arbeit bleibt statistisch weitgehend ___(6)___. Eine einfache Lösung ist ___(7)___ in Sicht. Es geht ___(8)___ um ein grundlegendes Umdenken. Die Verteilung dieser Arbeit ist ___(9)___. Dabei ist diese Arbeit gesellschaftlich sehr ___(10)___.",
      loesung: { 6: "unsichtbar", 7: "keineswegs", 8: "vielmehr", 9: "ungleich", 10: "wertvoll" }
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
        situation: "These: 'Unbezahlte Care-Arbeit sollte in die Rentenberechnung einbezogen werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Care-Arbeit sollte zwischen Partnern gesetzlich zu gleichen Teilen aufgeteilt werden.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

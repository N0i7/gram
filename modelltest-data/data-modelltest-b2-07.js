// ============================================================
// FLOß Modelltest B2 — Nr. 07
// Gleiches Format wie Nr. 01–06.
// ============================================================

window.MODELLTEST_B2_07 = {
  testKey: "modelltest-b2-07",
  niveau: "B2",
  titel: "Modelltest B2 — Nr. 7",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Meinungsartikel und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Textausschnitte (a–e) und ordnen Sie jedem die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Smart-Home-Technik zwischen Komfort und Kontrolle" },
        { id: 2, text: "Wer sammelt eigentlich unsere Alltagsdaten?" },
        { id: 3, text: "Die trügerische Sicherheit vernetzter Geräte" },
        { id: 4, text: "Digitale Mündigkeit als neue Bildungsaufgabe" },
        { id: 5, text: "Wenn der Kühlschrank mehr weiß als der Nutzer" },
        { id: 6, text: "Datenschutz als Wettbewerbsvorteil" },
        { id: 7, text: "Die Grenzen der Selbstbestimmung im vernetzten Zuhause" },
        { id: 8, text: "Zwischen Bequemlichkeit und Kontrollverlust" }
      ],
      texte: [
        { id: "a", text: "Vernetzte Haushaltsgeräte versprechen Komfort, sammeln dabei aber kontinuierlich Daten über Gewohnheiten und Tagesabläufe ihrer Nutzer — oft ohne dass diesen das volle Ausmaß bewusst ist." },
        { id: "b", text: "Sicherheitsforscher weisen wiederholt auf gravierende Schwachstellen in smarten Geräten hin, die selten mit der gleichen Sorgfalt abgesichert werden wie klassische Computersysteme." },
        { id: "c", text: "Wer möchte, dass Kinder und Jugendliche verantwortungsvoll mit digitalen Technologien umgehen, muss ihnen frühzeitig vermitteln, wie Datenerhebung im Alltag tatsächlich funktioniert." },
        { id: "d", text: "Einige Hersteller beginnen, Datenschutz aktiv als Verkaufsargument zu nutzen, in der Hoffnung, sich damit von Wettbewerbern abzuheben, die Nutzerdaten großzügiger weitergeben." },
        { id: "e", text: "Wer ein vernetztes Zuhause besitzt, gibt zwangsläufig einen Teil der Kontrolle über die eigenen Daten ab — eine Abwägung, die vielen Nutzern erst im Nachhinein bewusst wird." }
      ],
      loesung: { a: 5, b: 3, c: 4, d: 6, e: 7 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Die zunehmende Vernetzung des privaten Haushalts wird von der Industrie meist als reiner Komfortgewinn beworben: Heizung, Beleuchtung und Sicherheitssysteme lassen sich bequem per App steuern, oft sogar automatisiert an die individuellen Gewohnheiten anpassen. Weniger im Fokus der Werbung steht, dass diese Geräte kontinuierlich Daten sammeln und häufig an Server der Hersteller übertragen — teils zu Zwecken, die in den Nutzungsbedingungen nur vage beschrieben werden. Verbraucherschützer kritisieren zudem, dass viele Geräte auch nach dem Kauf regelmäßige Software-Updates benötigen, die von Herstellern jedoch nicht immer zuverlässig bereitgestellt werden, wodurch Sicherheitslücken über Jahre bestehen bleiben können. Gleichzeitig wächst das Bewusstsein bei Verbrauchern: Immer mehr Menschen informieren sich vor dem Kauf gezielt über Datenschutzpraktiken der Hersteller, auch wenn dies bislang eher die Ausnahme als die Regel ist.",
      aussagen: [
        { nr: 1, text: "Die Industrie bewirbt Smart-Home-Technik hauptsächlich mit dem Argument Komfort.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 2, text: "Die Datensammlung durch smarte Geräte wird laut Text stark beworben.", korrekt: false, hinweis: "Gegenteil: 'weniger im Fokus der Werbung'." },
        { nr: 3, text: "Alle Hersteller liefern zuverlässig regelmäßige Sicherheitsupdates.", korrekt: false, hinweis: "Gegenteil: 'nicht immer zuverlässig bereitgestellt'." },
        { nr: 4, text: "Sicherheitslücken können laut Text über Jahre bestehen bleiben.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Die meisten Verbraucher informieren sich bereits systematisch über Datenschutz vor dem Kauf.", korrekt: false, hinweis: "Gegenteil: 'eher die Ausnahme als die Regel'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Stellenanzeigen und Profile zuordnen",
      anleitung: "Lesen Sie die Profile 1–10 und die Stellenanzeigen a–f. Ordnen Sie jedem Profil die passende Anzeige zu. Für manche Profile gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "IT-Sicherheitsexperte, sucht Stelle im Bereich Schwachstellenanalyse." },
        { nr: 2, text: "Datenschutzbeauftragte, sucht Stelle bei einem Technologieunternehmen." },
        { nr: 3, text: "Lehrerin, sucht Fortbildung zu digitaler Medienkompetenz." },
        { nr: 4, text: "Produktmanager, sucht Stelle im Bereich Smart-Home-Entwicklung." },
        { nr: 5, text: "Journalistin, sucht Recherchethemen im Bereich Verbraucherschutz." },
        { nr: 6, text: "Berufseinsteiger, sucht erste Stelle im Bereich UX-Design." },
        { nr: 7, text: "Rechtsanwältin, sucht Spezialisierung im Datenschutzrecht." },
        { nr: 8, text: "Softwareentwickler, sucht Stelle mit Fokus auf Verschlüsselungstechnologie." },
        { nr: 9, text: "Marketingexpertin, sucht Stelle bei einem Hersteller vernetzter Geräte." },
        { nr: 10, text: "Berufserfahrener Elektriker, sucht Stelle in der Installation von Smart-Home-Systemen." }
      ],
      anzeigen: [
        { id: "a", text: "Sicherheitsunternehmen sucht IT-Experte/in für Schwachstellenanalyse smarter Geräte." },
        { id: "b", text: "Technologieunternehmen sucht Datenschutzbeauftragte/n." },
        { id: "c", text: "Bildungsträger bietet Fortbildung zu digitaler Medienkompetenz für Lehrkräfte." },
        { id: "d", text: "Hersteller sucht Produktmanager/in für Smart-Home-Lösungen." },
        { id: "e", text: "Kanzlei sucht Rechtsanwalt/Rechtsanwältin mit Schwerpunkt Datenschutzrecht." },
        { id: "f", text: "Softwarefirma sucht Entwickler/in mit Erfahrung in Verschlüsselung." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "x", 6: "x", 7: "e", 8: "f", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "___(1)___ vernetzte Geräte erheblichen Komfort bieten, sammeln sie ___(2)___ kontinuierlich Daten über ihre Nutzer. ___(3)___ dieser Tatsache informieren sich nur wenige Käufer gezielt über die Datenschutzpraktiken der Hersteller. ___(4)___ wächst jedoch das Bewusstsein für dieses Thema. Ob sich dies ___(5)___ auf das Kaufverhalten auswirken wird, bleibt abzuwarten.",
      luecken: [
        { nr: 1, o: ["Obwohl", "Weil", "Damit"], c: 0, h: "Einräumung → obwohl." },
        { nr: 2, o: ["dabei", "davon", "darüber"], c: 0, h: "dabei = in diesem Zusammenhang." },
        { nr: 3, o: ["Ungeachtet", "Wegen", "Trotz"], c: 0, h: "ungeachtet + Genitiv." },
        { nr: 4, o: ["Zunehmend", "Kaum", "Selten"], c: 0, h: "Steigerung → zunehmend." },
        { nr: 5, o: ["langfristig", "kurzfristig", "sofort"], c: 0, h: "über Zeit → langfristig." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["mitunter", "vielmehr", "keinesfalls", "obendrein", "letztlich"],
      text: "Smart-Home-Geräte sind ___(6)___ weniger sicher, als Nutzer annehmen. Es geht dabei ___(7)___ nur um Komfort, sondern ___(8)___ auch um Kontrolle über die eigenen Daten. Sicherheitslücken bleiben ___(9)___ jahrelang unentdeckt. ___(10)___ entscheidet der informierte Umgang mit der Technik über die tatsächliche Sicherheit.",
      loesung: { 6: "mitunter", 7: "keinesfalls", 8: "vielmehr", 9: "obendrein", 10: "letztlich" }
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
        situation: "These: 'Hersteller vernetzter Geräte sollten gesetzlich verpflichtet werden, Sicherheitsupdates für mindestens zehn Jahre bereitzustellen.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      },
      {
        nr: 2,
        briefform: "aufsatz",
        situation: "These: 'Der Komfortgewinn durch Smart-Home-Technik rechtfertigt den Verlust an Datenkontrolle.'",
        punkte: ["Stellen Sie die These kurz vor.", "Nennen Sie mindestens zwei Argumente dafür und zwei dagegen.", "Formulieren Sie eine begründete eigene Position.", "Schließen Sie mit einem Fazit."]
      }
    ],
    bewertung: {
      kriterien: ["Argumentative Struktur (Einleitung, Hauptteil, Schluss)", "Ausgewogene Darstellung beider Seiten", "Komplexer Satzbau, Konnektoren, Fachwortschatz", "Sprachliche Korrektheit auf B2-Niveau"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant, bei diesem Umfang ist eine zusätzliche Lehrer-Korrektur besonders empfohlen."
    }
  }
};

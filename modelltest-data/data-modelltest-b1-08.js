// ============================================================
// FLOß Modelltest B1 — Nr. 08
// Gleiches Format wie Nr. 01–07.
// ============================================================

window.MODELLTEST_B1_08 = {
  testKey: "modelltest-b1-08",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 8",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Neue Krankenkasse mit günstigem Beitrag" },
        { id: 2, text: "Hausarztpraxis nimmt keine neuen Patienten mehr auf" },
        { id: 3, text: "Impftermin ohne Voranmeldung" },
        { id: 4, text: "Notaufnahme wegen Umbau eingeschränkt" },
        { id: 5, text: "Apotheke bietet Lieferservice an" },
        { id: 6, text: "Zahnarztpraxis sucht neue Assistentin" },
        { id: 7, text: "Krankschreibung jetzt auch telefonisch möglich" },
        { id: 8, text: "Vorsorgeuntersuchung wird empfohlen" }
      ],
      texte: [
        { id: "a", text: "Bei leichten Erkrankungen kann seit Kurzem eine Krankschreibung auch ohne persönlichen Besuch in der Praxis ausgestellt werden, nach einem kurzen Telefonat mit dem Arzt." },
        { id: "b", text: "Wegen Bauarbeiten kann die Notaufnahme derzeit nur eingeschränkt genutzt werden. Bei schweren Notfällen sollte das Krankenhaus in der Nachbarstadt angefahren werden." },
        { id: "c", text: "Die Praxis ist derzeit ausgelastet und kann leider keine weiteren Patientinnen und Patienten aufnehmen. Eine Liste alternativer Praxen liegt im Wartezimmer aus." },
        { id: "d", text: "Ältere und kranke Kunden können ihre Medikamente ab sofort direkt nach Hause liefern lassen, ohne die Apotheke persönlich aufzusuchen." },
        { id: "e", text: "Am Gesundheitsamt kann man sich diese Woche ohne Termin gegen Grippe impfen lassen, montags bis freitags von 9 bis 15 Uhr." }
      ],
      loesung: { a: 7, b: 4, c: 2, d: 5, e: 3 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "In vielen Regionen Deutschlands wird es zunehmend schwieriger, einen Hausarzt zu finden, der neue Patienten aufnimmt. Besonders auf dem Land ist die Versorgung angespannt, weil viele Ärzte in den kommenden Jahren in den Ruhestand gehen und zu wenig Nachwuchs nachrückt. Manche Gemeinden versuchen gegenzusteuern, indem sie jungen Ärzten finanzielle Anreize bieten, sich vor Ort niederzulassen, etwa durch günstige Praxisräume oder einen Umzugszuschuss. Auch Telemedizin gewinnt an Bedeutung: Bei einfachen Anliegen können Patienten inzwischen per Video mit einem Arzt sprechen, ohne die Praxis aufzusuchen. Kritiker geben allerdings zu bedenken, dass Telemedizin eine persönliche Untersuchung nicht vollständig ersetzen kann und vor allem ältere Menschen mit der Technik oft überfordert sind.",
      aussagen: [
        { nr: 1, text: "Es wird leichter, einen Hausarzt zu finden.", korrekt: false, hinweis: "Gegenteil: 'zunehmend schwieriger'." },
        { nr: 2, text: "Auf dem Land ist die ärztliche Versorgung besonders angespannt.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Manche Gemeinden bieten jungen Ärzten finanzielle Anreize.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Telemedizin kann eine persönliche Untersuchung immer vollständig ersetzen.", korrekt: false, hinweis: "Gegenteil: 'kann... nicht vollständig ersetzen'." },
        { nr: 5, text: "Ältere Menschen haben mit Telemedizin manchmal Schwierigkeiten.", korrekt: true, hinweis: "Letzter Satz des Textes." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie suchen einen Hausarzt, der neue Patienten aufnimmt." },
        { nr: 2, text: "Sie brauchen eine Krankschreibung, können aber nicht in die Praxis kommen." },
        { nr: 3, text: "Sie möchten sich gegen Grippe impfen lassen." },
        { nr: 4, text: "Sie brauchen dringend Medikamente, können aber nicht ausgehen." },
        { nr: 5, text: "Sie suchen eine günstige Krankenkasse." },
        { nr: 6, text: "Sie haben einen schweren medizinischen Notfall." },
        { nr: 7, text: "Sie suchen einen Job als Zahnarztassistentin." },
        { nr: 8, text: "Sie möchten eine Vorsorgeuntersuchung machen lassen." },
        { nr: 9, text: "Sie suchen eine Physiotherapiepraxis." },
        { nr: 10, text: "Sie möchten sich über Ihre Krankenversicherung beschweren." }
      ],
      anzeigen: [
        { id: "a", text: "Neue Hausarztpraxis nimmt ab sofort neue Patienten auf." },
        { id: "b", text: "Telefonische Krankschreibung bei leichten Erkrankungen möglich." },
        { id: "c", text: "Gesundheitsamt: Grippeimpfung ohne Termin, diese Woche." },
        { id: "d", text: "Apotheke bietet Lieferservice für Medikamente an." },
        { id: "e", text: "Neue Krankenkasse mit besonders günstigem Beitrag für Berufseinsteiger." },
        { id: "f", text: "Zahnarztpraxis sucht Assistentin, Vollzeit oder Teilzeit." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "f", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Sehr geehrte Frau Doktor Berg, ___(1)___ ich seit einigen Tagen starke Kopfschmerzen habe, möchte ich um einen Termin bitten. Leider ___(2)___ ich in dieser Woche beruflich sehr eingespannt und kann nur am Nachmittag kommen. Wäre es möglich, ___(3)___ mir kurzfristig einen Termin zu geben? Falls das nicht klappt, ___(4)___ ich auch gerne die Telefonsprechstunde nutzen. Vielen Dank ___(5)___ Ihre Mühe.",
      luecken: [
        { nr: 1, o: ["Da", "Damit", "Obwohl"], c: 0, h: "Grund, formell → da." },
        { nr: 2, o: ["bin", "war", "wäre"], c: 0, h: "Präsens → bin." },
        { nr: 3, o: ["mir", "mich", "meiner"], c: 0, h: "geben + Dativ → mir." },
        { nr: 4, o: ["würde", "werde", "wurde"], c: 0, h: "höflich, Konjunktiv II → würde." },
        { nr: 5, o: ["für", "über", "wegen"], c: 0, h: "sich bedanken für → für." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["rechtzeitig", "regelmäßig", "dringend", "vorsorglich", "notfalls"],
      text: "Ärzte empfehlen, ___(6)___ zur Vorsorgeuntersuchung zu gehen. Wer Beschwerden hat, sollte diese ___(7)___ abklären lassen, nicht erst, wenn es ___(8)___ wird. Manche Menschen gehen auch ___(9)___ zum Arzt, obwohl sie noch keine Symptome haben. ___(10)___ kann man auch die Notaufnahme aufsuchen.",
      loesung: { 6: "regelmäßig", 7: "rechtzeitig", 8: "dringend", 9: "vorsorglich", 10: "notfalls" }
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
        situation: "Ein Freund / eine Freundin ist krank. Sie schreiben eine Nachricht.",
        punkte: ["Fragen Sie, wie es der Person geht.", "Geben Sie einen Tipp für die Genesung.", "Bieten Sie an, etwas zu besorgen."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an eine Arztpraxis, um einen Termin zu vereinbaren.",
        punkte: ["Beschreiben Sie kurz Ihr Anliegen.", "Nennen Sie mögliche Termine.", "Fragen Sie nach benötigten Unterlagen."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

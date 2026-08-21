// ============================================================
// FLOß Modelltest B1 — Nr. 40 (LETZTER B1-TEST — B1 KOMPLETT!)
// Gleiches Format wie Nr. 01–39.
// ============================================================

window.MODELLTEST_B1_40 = {
  testKey: "modelltest-b1-40",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 40",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Chronische Erkrankung im Berufsalltag verbergen" },
        { id: 2, text: "Offener Umgang mit der Erkrankung" },
        { id: 3, text: "Regelmäßige Arztbesuche einplanen" },
        { id: 4, text: "Verständnis von Kollegen" },
        { id: 5, text: "Anpassung des Arbeitsplatzes" },
        { id: 6, text: "Kündigung wegen Krankheit" },
        { id: 7, text: "Medikamente am Arbeitsplatz" },
        { id: 8, text: "Erschöpfung nach der Arbeit" }
      ],
      texte: [
        { id: "a", text: "Manche Menschen entscheiden sich, offen mit ihrer chronischen Erkrankung umzugehen." },
        { id: "b", text: "Regelmäßige Arztbesuche müssen sorgfältig in den Arbeitsalltag eingeplant werden." },
        { id: "c", text: "Viele Kollegen zeigen Verständnis, wenn man offen über die Erkrankung spricht." },
        { id: "d", text: "Manchmal muss der Arbeitsplatz an die Bedürfnisse der Erkrankung angepasst werden." },
        { id: "e", text: "Nach einem langen Arbeitstag fühlen sich viele Betroffene besonders erschöpft." }
      ],
      loesung: { a: 2, b: 3, c: 4, d: 5, e: 8 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit einigen Jahren lebe ich mit einer chronischen Erkrankung, die meinen Berufsalltag beeinflusst. Ich habe mich entschieden, offen damit umzugehen, anstatt sie zu verbergen. Meine Kollegen haben großes Verständnis gezeigt, seit ich ihnen davon erzählt habe. Regelmäßige Arztbesuche muss ich sorgfältig in meinen Arbeitsalltag einplanen. Mein Arbeitgeber hat außerdem meinen Arbeitsplatz an meine Bedürfnisse angepasst, was mir sehr hilft. Nach einem langen Arbeitstag bin ich zwar oft erschöpft, aber ich bin froh, dass ich weiterhin arbeiten kann.",
      aussagen: [
        { nr: 1, text: "Die Person lebt seit einigen Jahren mit einer chronischen Erkrankung.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Die Person verbirgt ihre Erkrankung.", korrekt: false, hinweis: "Gegenteil: 'offen damit umzugehen, anstatt sie zu verbergen'." },
        { nr: 3, text: "Die Kollegen zeigen Verständnis.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Der Arbeitsplatz wurde nicht angepasst.", korrekt: false, hinweis: "Gegenteil: 'hat außerdem meinen Arbeitsplatz... angepasst'." },
        { nr: 5, text: "Die Person kann nicht mehr arbeiten.", korrekt: false, hinweis: "Gegenteil: 'ich bin froh, dass ich weiterhin arbeiten kann'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten mit Ihrem Arbeitgeber über Ihre Erkrankung sprechen." },
        { nr: 2, text: "Sie suchen Informationen zur Anpassung Ihres Arbeitsplatzes." },
        { nr: 3, text: "Sie möchten Arztbesuche besser in den Alltag einplanen." },
        { nr: 4, text: "Sie suchen eine Selbsthilfegruppe für Betroffene." },
        { nr: 5, text: "Sie möchten sich über Ihre Rechte als chronisch kranke/r Arbeitnehmer/in informieren." },
        { nr: 6, text: "Sie suchen einen neuen Job." },
        { nr: 7, text: "Sie suchen eine Physiotherapie." },
        { nr: 8, text: "Sie suchen eine Apotheke." },
        { nr: 9, text: "Sie suchen ein Krankenhaus." },
        { nr: 10, text: "Sie suchen einen Zahnarzt." }
      ],
      anzeigen: [
        { id: "a", text: "Beratung: Gespräch mit dem Arbeitgeber führen." },
        { id: "b", text: "Arbeitsplatzanpassung — Informationsabend." },
        { id: "c", text: "Terminplaner-App für Arztbesuche." },
        { id: "d", text: "Selbsthilfegruppe für chronisch Kranke." },
        { id: "e", text: "Rechtsberatung für chronisch kranke Arbeitnehmer." },
        { id: "f", text: "keine passende Anzeige" }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "x", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit einigen Jahren lebe ich mit einer Erkrankung, ___(1)___ meinen Berufsalltag beeinflusst. Ich habe mich entschieden, offen damit umzugehen, ___(2)___ ich sie zu verbergen versuche. Meine Kollegen, ___(3)___ großes Verständnis zeigen, haben mir sehr geholfen. Mein Arbeitgeber, ___(4)___ meinen Arbeitsplatz angepasst hat, unterstützt mich sehr. Ich bin oft erschöpft, ___(5)___ ich froh bin, weiterarbeiten zu können.",
      luecken: [
        { nr: 1, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Erkrankung' (feminin) → die." },
        { nr: 2, o: ["statt dass", "damit", "weil"], c: 0, h: "'statt dass' — Gegensatz zur Handlung." },
        { nr: 3, o: ["die", "das", "was"], c: 0, h: "Relativpronomen bezogen auf 'Kollegen' (Plural) → die." },
        { nr: 4, o: ["der", "die", "das"], c: 0, h: "Relativpronomen Nominativ bezogen auf 'Arbeitgeber' (maskulin) → der." },
        { nr: 5, o: ["aber", "denn", "oder"], c: 0, h: "Gegensatz → aber." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Erkrankung", "Verständnis", "Arztbesuche", "Arbeitsplatz", "erschöpft"],
      text: "Eine chronische ___(6)___ beeinflusst den Berufsalltag. Offener Umgang bringt oft ___(7)___ von Kollegen. Regelmäßige ___(8)___ müssen eingeplant werden. Manchmal wird der ___(9)___ angepasst. Nach der Arbeit ist man oft ___(10)___.",
      loesung: { 6: "Erkrankung", 7: "Verständnis", 8: "Arztbesuche", 9: "Arbeitsplatz", 10: "erschöpft" }
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
        situation: "Sie leben mit einer chronischen Erkrankung und haben sich entschieden, offen damit umzugehen. Sie schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie von Ihrer Entscheidung.", "Berichten Sie, wie Ihre Kollegen reagiert haben.", "Beschreiben Sie, was Ihnen im Alltag hilft."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an Ihren Arbeitgeber, um wegen Ihrer chronischen Erkrankung eine Anpassung des Arbeitsplatzes zu erbitten.",
        punkte: ["Beschreiben Sie Ihre Situation.", "Erklären Sie, welche Anpassung Sie sich wünschen.", "Bitten Sie um ein persönliches Gespräch."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

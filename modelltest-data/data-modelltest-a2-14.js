// ============================================================
// FLOß Modelltest A2 — Nr. 14
// Gleiches Format wie Nr. 01–13.
// ============================================================

window.MODELLTEST_A2_14 = {
  testKey: "modelltest-a2-14",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 14",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Solaranlage auf dem Dach" },
        { id: 2, text: "Strom sparen im Haushalt" },
        { id: 3, text: "Förderung für erneuerbare Energien" },
        { id: 4, text: "Balkonkraftwerk installieren" },
        { id: 5, text: "Stromanbieter wechseln" },
        { id: 6, text: "Heizkosten steigen" },
        { id: 7, text: "Ökostrom wird beliebter" },
        { id: 8, text: "Elektroauto laden" }
      ],
      texte: [
        { id: "a", text: "Immer mehr Menschen lassen eine Solaranlage auf dem Dach installieren, um eigenen Strom zu produzieren." },
        { id: "b", text: "Der Staat bietet Förderungen für Haushalte an, die in erneuerbare Energien investieren möchten." },
        { id: "c", text: "Ein Balkonkraftwerk ist eine kleine Solaranlage, die auch Mieter am Balkon anbringen können." },
        { id: "d", text: "Viele Haushalte entscheiden sich mittlerweile für einen Anbieter, der nur Ökostrom liefert." },
        { id: "e", text: "Mit einfachen Tipps wie LED-Lampen und effizienten Geräten kann man im Haushalt viel Strom sparen." }
      ],
      loesung: { a: 1, b: 3, c: 4, d: 7, e: 2 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Seit einem Jahr haben wir ein Balkonkraftwerk an unserem Balkon installiert. Es war einfacher als gedacht, weil man dafür keine Genehmigung von der Baubehörde braucht. Die kleine Solaranlage produziert Strom für unsere Wohnung, besonders im Sommer. Unsere Stromrechnung ist seitdem deutlich niedriger geworden. Am Anfang war ich unsicher, ob sich die Investition lohnt, aber nach einem Jahr bin ich sehr zufrieden. Auch meine Nachbarn haben sich mittlerweile für ein Balkonkraftwerk entschieden, nachdem sie von unseren Erfahrungen gehört haben.",
      aussagen: [
        { nr: 1, text: "Die Person hat seit einem Jahr ein Balkonkraftwerk.", korrekt: true, hinweis: "Direkt im ersten Satz." },
        { nr: 2, text: "Für das Balkonkraftwerk braucht man eine Genehmigung von der Baubehörde.", korrekt: false, hinweis: "Gegenteil: 'keine Genehmigung... braucht'." },
        { nr: 3, text: "Die Stromrechnung ist niedriger geworden.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 4, text: "Die Person war von Anfang an sicher, dass sich die Investition lohnt.", korrekt: false, hinweis: "Gegenteil: 'am Anfang war ich unsicher'." },
        { nr: 5, text: "Die Nachbarn haben kein Interesse an einem Balkonkraftwerk.", korrekt: false, hinweis: "Gegenteil: 'haben sich mittlerweile für ein Balkonkraftwerk entschieden'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten eine Solaranlage installieren." },
        { nr: 2, text: "Sie möchten eine Förderung beantragen." },
        { nr: 3, text: "Sie sind Mieter und möchten Solarstrom nutzen." },
        { nr: 4, text: "Sie möchten den Stromanbieter wechseln." },
        { nr: 5, text: "Sie möchten im Haushalt Strom sparen." },
        { nr: 6, text: "Sie möchten ein Elektroauto laden." },
        { nr: 7, text: "Sie suchen einen Gasanbieter." },
        { nr: 8, text: "Sie möchten Ihre Heizung reparieren lassen." },
        { nr: 9, text: "Sie suchen einen Handwerker für Fenster." },
        { nr: 10, text: "Sie möchten einen Garten anlegen." }
      ],
      anzeigen: [
        { id: "a", text: "Solaranlage installieren, Beratung und Angebot kostenlos." },
        { id: "b", text: "Förderung für erneuerbare Energien, jetzt beantragen." },
        { id: "c", text: "Balkonkraftwerk für Mieter, einfach zu installieren." },
        { id: "d", text: "Ökostrom-Anbieter wechseln, in wenigen Minuten." },
        { id: "e", text: "Stromsparen im Haushalt: 10 einfache Tipps." },
        { id: "f", text: "Ladestation für Elektroautos zu Hause installieren." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Seit einem Jahr ___(1)___ wir ein Balkonkraftwerk. Es ___(2)___ einfacher als gedacht. Man ___(3)___ dafür keine Genehmigung. Unsere Stromrechnung ___(4)___ seitdem niedriger geworden. Am Anfang ___(5)___ ich unsicher.",
      luecken: [
        { nr: 1, o: ["haben", "hat", "habe"], c: 0, h: "wir → haben." },
        { nr: 2, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." },
        { nr: 3, o: ["braucht", "brauche", "brauchen"], c: 0, h: "man → braucht." },
        { nr: 4, o: ["ist", "war", "hat"], c: 0, h: "ist niedriger geworden." },
        { nr: 5, o: ["war", "ist", "wäre"], c: 0, h: "Präteritum → war." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["Solaranlage", "Stromrechnung", "sparen", "Genehmigung", "zufrieden"],
      text: "Unsere ___(6)___ produziert Strom für die Wohnung. Wir ___(7)___ dadurch viel Geld. Die ___(8)___ ist niedriger geworden. Man braucht dafür keine ___(9)___. Ich bin sehr ___(10)___ mit dem Ergebnis.",
      loesung: { 6: "Solaranlage", 7: "sparen", 8: "Stromrechnung", 9: "Genehmigung", 10: "zufrieden" }
    }
  },

  schreiben: {
    titel: "Schreiben — Persönliche Nachricht",
    anleitung: "Schreiben Sie eine Nachricht. Schreiben Sie mindestens 40 Wörter. Gehen Sie auf alle Punkte ein.",
    mindestwoerter: 40,
    aufgaben: [
      {
        nr: 1,
        briefform: "informell",
        situation: "Sie haben ein Balkonkraftwerk installiert und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, seit wann Sie das Balkonkraftwerk haben.", "Sagen Sie, was sich für Sie verändert hat.", "Empfehlen Sie es der Person."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

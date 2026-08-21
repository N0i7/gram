// ============================================================
// FLOß Modelltest B1 — Nr. 07
// Gleiches Format wie Nr. 01–06.
// ============================================================

window.MODELLTEST_B1_07 = {
  testKey: "modelltest-b1-07",
  niveau: "B1",
  titel: "Modelltest B1 — Nr. 7",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Online-Banking wird sicherer" },
        { id: 2, text: "Steuererklärung jetzt digital möglich" },
        { id: 3, text: "Warnung vor Phishing-Mails" },
        { id: 4, text: "Neue Kreditkarte ohne Jahresgebühr" },
        { id: 5, text: "Bankfiliale schließt" },
        { id: 6, text: "Digitalisierungskurs für Senioren" },
        { id: 7, text: "Automat akzeptiert nur noch Karte" },
        { id: 8, text: "App zeigt Wartezeiten im Amt" }
      ],
      texte: [
        { id: "a", text: "Ab dem nächsten Update ist zum Einloggen zusätzlich ein Code per App erforderlich. Damit soll Missbrauch von Konten deutlich erschwert werden." },
        { id: "b", text: "In letzter Zeit erhalten viele Kunden E-Mails, die angeblich von der Bank stammen und zur Eingabe von Zugangsdaten auffordern. Solche Nachrichten sollten nie beantwortet werden." },
        { id: "c", text: "Die Filiale in der Bahnhofstraße wird zum Jahresende geschlossen. Kunden werden gebeten, künftig die Filiale im Stadtzentrum zu nutzen." },
        { id: "d", text: "Ab sofort können die jährlichen Steuerunterlagen komplett online eingereicht werden, ohne Papierformulare auszufüllen." },
        { id: "e", text: "Der Kurs richtet sich an ältere Menschen, die den Umgang mit Smartphone und Online-Banking lernen möchten. Kleine Gruppen, viel Geduld." }
      ],
      loesung: { a: 1, b: 3, c: 5, d: 2, e: 6 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Die Digitalisierung der Verwaltung schreitet in Deutschland langsamer voran als in vielen anderen europäischen Ländern. Zwar können mittlerweile viele Anträge online gestellt werden, doch in der Praxis scheitert es häufig an veralteter Technik oder unklaren Zuständigkeiten zwischen den Behörden. Besonders ältere Menschen und Personen ohne gute Deutschkenntnisse berichten von Schwierigkeiten bei der Nutzung digitaler Angebote. Städte, die frühzeitig in Schulungen und mehrsprachige Anleitungen investiert haben, verzeichnen deutlich höhere Nutzungsraten. Experten fordern deshalb nicht nur mehr digitale Angebote, sondern auch eine bessere Begleitung beim Übergang — etwa durch persönliche Beratung für alle, die mit der Technik nicht vertraut sind.",
      aussagen: [
        { nr: 1, text: "Deutschland gilt als Vorreiter der Verwaltungsdigitalisierung in Europa.", korrekt: false, hinweis: "Gegenteil: 'langsamer voran als in vielen anderen europäischen Ländern'." },
        { nr: 2, text: "Veraltete Technik ist ein Grund für die langsame Digitalisierung.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Ältere Menschen haben laut Text selten Schwierigkeiten mit digitalen Angeboten.", korrekt: false, hinweis: "Gegenteil: sie 'berichten von Schwierigkeiten'." },
        { nr: 4, text: "Städte mit Schulungsangeboten haben höhere Nutzungsraten.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 5, text: "Experten fordern ausschließlich mehr digitale Angebote, sonst nichts.", korrekt: false, hinweis: "Gegenteil: auch 'bessere Begleitung' und 'persönliche Beratung'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie möchten den Umgang mit Online-Banking lernen." },
        { nr: 2, text: "Sie brauchen Hilfe bei der digitalen Steuererklärung." },
        { nr: 3, text: "Sie suchen eine Bankfiliale, die noch geöffnet ist." },
        { nr: 4, text: "Sie möchten wissen, wie lange die Wartezeit im Bürgeramt ist." },
        { nr: 5, text: "Sie haben eine verdächtige E-Mail erhalten." },
        { nr: 6, text: "Sie suchen eine Kreditkarte ohne Gebühren." },
        { nr: 7, text: "Sie möchten ein neues Smartphone kaufen." },
        { nr: 8, text: "Sie brauchen Hilfe beim Ausfüllen eines Mietvertrags." },
        { nr: 9, text: "Sie suchen einen Computerkurs für Fortgeschrittene." },
        { nr: 10, text: "Sie möchten sich über Datenschutz informieren." }
      ],
      anzeigen: [
        { id: "a", text: "Digitalisierungskurs für Senioren: Smartphone und Online-Banking, kleine Gruppen." },
        { id: "b", text: "Steuerberatung bietet Hilfe bei der digitalen Steuererklärung, telefonisch und persönlich." },
        { id: "c", text: "App zeigt aktuelle Wartezeiten im Bürgeramt in Echtzeit." },
        { id: "d", text: "Verbraucherzentrale warnt vor Phishing-Mails, Meldeformular online." },
        { id: "e", text: "Neue Kreditkarte ohne Jahresgebühr, Antrag online möglich." },
        { id: "f", text: "Sozialberatung: Hilfe beim Ausfüllen von Verträgen und Formularen, kostenlos." }
      ],
      loesung: { 1: "a", 2: "b", 3: "x", 4: "c", 5: "d", 6: "e", 7: "x", 8: "f", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Sehr geehrte Damen und Herren, ich habe eine E-Mail erhalten, ___(1)___ angeblich von meiner Bank stammt. ___(2)___ ich unsicher bin, ob die Nachricht echt ist, wende ich mich an Sie. Könnten Sie mir bitte mitteilen, ___(3)___ ich in diesem Fall tun sollte? Ich habe bisher keine Daten eingegeben, ___(4)___ mir die Nachricht verdächtig vorkam. Für eine schnelle Rückmeldung ___(5)___ ich dankbar.",
      luecken: [
        { nr: 1, o: ["die", "der", "das"], c: 0, h: "die E-Mail → die." },
        { nr: 2, o: ["Da", "Damit", "Obwohl"], c: 0, h: "Grund, formell → da." },
        { nr: 3, o: ["was", "wie", "ob"], c: 0, h: "Frage nach Inhalt → was." },
        { nr: 4, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." },
        { nr: 5, o: ["wäre", "bin", "war"], c: 0, h: "höflich, Konjunktiv II → wäre." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["digital", "online", "persönlich", "telefonisch", "schriftlich"],
      text: "Viele Behördengänge lassen sich heute ___(6)___ erledigen. Man muss nicht mehr ___(7)___ vorbeikommen. Trotzdem läuft nicht jeder Kontakt ___(8)___ ab. Fragen können oft auch ___(9)___ geklärt werden. Wichtige Anträge sollte man aber immer auch ___(10)___ bestätigen lassen.",
      loesung: { 6: "online", 7: "persönlich", 8: "digital", 9: "telefonisch", 10: "schriftlich" }
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
        situation: "Ein Freund / eine Freundin hat Schwierigkeiten mit Online-Banking. Sie schreiben eine Nachricht mit Tipps.",
        punkte: ["Fragen Sie, welches Problem genau besteht.", "Geben Sie einen Tipp, wie man sich vor Betrug schützt.", "Bieten Sie an, gemeinsam zu üben."]
      },
      {
        nr: 2,
        briefform: "formell",
        situation: "Sie schreiben an Ihre Bank, weil Sie eine verdächtige E-Mail erhalten haben.",
        punkte: ["Beschreiben Sie die E-Mail kurz.", "Fragen Sie, ob die Nachricht echt ist.", "Bitten Sie um Informationen zum sicheren Verhalten."]
      }
    ],
    bewertung: {
      kriterien: ["Inhaltliche Angemessenheit (alle 3 Punkte behandelt)", "Kommunikative Gestaltung (Anrede, Schluss, passender Ton)", "Formale Richtigkeit (Grammatik, Wortschatz, Satzbau)"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

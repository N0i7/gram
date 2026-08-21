// ============================================================
// FLOß Modelltest A2 — Nr. 07
// Gleiches Format wie Nr. 01–06.
// ============================================================

window.MODELLTEST_A2_07 = {
  testKey: "modelltest-a2-07",
  niveau: "A2",
  titel: "Modelltest A2 — Nr. 7",

  lesen: {
    teil1: {
      titel: "Leseverstehen Teil 1 — Kurznachrichten und Überschriften zuordnen",
      anleitung: "Lesen Sie die 5 Kurztexte (a–e) und ordnen Sie jedem Text die passende Überschrift (1–8) zu. Drei Überschriften passen zu keinem Text.",
      ueberschriften: [
        { id: 1, text: "Anmeldung beim Einwohnermeldeamt" },
        { id: 2, text: "Führerschein umschreiben" },
        { id: 3, text: "Steuer-ID beantragen" },
        { id: 4, text: "Termin beim Standesamt" },
        { id: 5, text: "Ummeldung nach Umzug" },
        { id: 6, text: "Aufenthaltstitel verlängern" },
        { id: 7, text: "Reisepass verloren" },
        { id: 8, text: "Führungszeugnis beantragen" }
      ],
      texte: [
        { id: "a", text: "Innerhalb von zwei Wochen nach dem Einzug muss man sich mit dem Mietvertrag beim zuständigen Amt anmelden." },
        { id: "b", text: "Wer umzieht, muss die neue Adresse innerhalb von zwei Wochen dem Amt mitteilen, auch bei einem Umzug innerhalb derselben Stadt." },
        { id: "c", text: "Für viele Bewerbungen wird inzwischen ein aktuelles Führungszeugnis verlangt, das man online beantragen kann." },
        { id: "d", text: "Der Aufenthaltstitel sollte spätestens vier Wochen vor Ablauf zur Verlängerung eingereicht werden, um Lücken zu vermeiden." },
        { id: "e", text: "Ausländische Führerscheine müssen innerhalb bestimmter Fristen umgeschrieben werden, teilweise mit einer zusätzlichen theoretischen Prüfung." }
      ],
      loesung: { a: 1, b: 5, c: 8, d: 6, e: 2 }
    },

    teil2: {
      titel: "Leseverstehen Teil 2 — Richtig oder falsch",
      anleitung: "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 1–5: richtig oder falsch.",
      text: "Letzte Woche musste ich zum ersten Mal alleine zum Amt gehen, um meinen Aufenthaltstitel zu verlängern. Ich hatte etwas Angst, weil ich nicht wusste, welche Unterlagen ich brauche. Zum Glück hat mir eine Freundin vorher eine Liste geschickt, sodass ich alles dabei hatte. Am Amt musste ich zwar über eine Stunde warten, aber der Termin selbst war schnell erledigt. Die Mitarbeiterin war freundlich und hat mir alle Fragen beantwortet. Jetzt weiß ich, dass es nicht so kompliziert ist, wie ich dachte. Beim nächsten Mal gehe ich sicher ruhiger hin.",
      aussagen: [
        { nr: 1, text: "Die Person war schon oft alleine beim Amt.", korrekt: false, hinweis: "'zum ersten Mal alleine'." },
        { nr: 2, text: "Eine Freundin hat vorher geholfen.", korrekt: true, hinweis: "Direkt im Text genannt." },
        { nr: 3, text: "Die Person musste nicht warten.", korrekt: false, hinweis: "Gegenteil: 'über eine Stunde warten'." },
        { nr: 4, text: "Die Mitarbeiterin war unfreundlich.", korrekt: false, hinweis: "Gegenteil: 'war freundlich'." },
        { nr: 5, text: "Die Person hat jetzt weniger Angst vor dem nächsten Termin.", korrekt: true, hinweis: "'gehe ich sicher ruhiger hin'." }
      ]
    },

    teil3: {
      titel: "Leseverstehen Teil 3 — Anzeigen zuordnen",
      anleitung: "Lesen Sie die Situationen 1–10 und die Anzeigen a–f. Ordnen Sie jeder Situation die passende Anzeige zu. Für manche Situationen gibt es keine passende Anzeige — wählen Sie dann 'x'.",
      situationen: [
        { nr: 1, text: "Sie sind gerade umgezogen und müssen sich ummelden." },
        { nr: 2, text: "Sie brauchen ein Führungszeugnis für eine Bewerbung." },
        { nr: 3, text: "Ihr Aufenthaltstitel läuft bald ab." },
        { nr: 4, text: "Sie möchten Ihren ausländischen Führerschein umschreiben." },
        { nr: 5, text: "Sie möchten heiraten." },
        { nr: 6, text: "Sie brauchen Hilfe beim Ausfüllen von Formularen." },
        { nr: 7, text: "Sie möchten Deutsch lernen." },
        { nr: 8, text: "Sie suchen einen neuen Job." },
        { nr: 9, text: "Sie brauchen eine Steuer-ID." },
        { nr: 10, text: "Sie haben Ihren Reisepass verloren." }
      ],
      anzeigen: [
        { id: "a", text: "Einwohnermeldeamt: Ummeldung nach Umzug, Termin online buchbar." },
        { id: "b", text: "Führungszeugnis online beantragen, Bearbeitungszeit etwa zwei Wochen." },
        { id: "c", text: "Ausländerbehörde: Verlängerung des Aufenthaltstitels, mindestens vier Wochen vorher beantragen." },
        { id: "d", text: "Führerscheinstelle: Umschreibung ausländischer Führerscheine." },
        { id: "e", text: "Standesamt: Termine für Eheschließungen." },
        { id: "f", text: "Sozialberatung: kostenlose Hilfe beim Ausfüllen von Behördenformularen." }
      ],
      loesung: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "x", 8: "x", 9: "x", 10: "x" }
    }
  },

  sprachbausteine: {
    teil1: {
      titel: "Sprachbausteine Teil 1 — Lücken mit Auswahl füllen",
      anleitung: "Wählen Sie für jede Lücke (1–5) das passende Wort.",
      text: "Letzte Woche ___(1)___ ich zum ersten Mal alleine zum Amt gehen. Ich ___(2)___ Angst, ___(3)___ ich nicht wusste, welche Unterlagen ich brauche. Eine Freundin ___(4)___ mir eine Liste geschickt, ___(5)___ ich alles dabei hatte.",
      luecken: [
        { nr: 1, o: ["musste", "muss", "müsste"], c: 0, h: "Präteritum → musste." },
        { nr: 2, o: ["hatte", "habe", "hätte"], c: 0, h: "Präteritum → hatte." },
        { nr: 3, o: ["weil", "damit", "obwohl"], c: 0, h: "Grund → weil." },
        { nr: 4, o: ["hat", "ist", "war"], c: 0, h: "Perfekt: hat geschickt." },
        { nr: 5, o: ["sodass", "damit", "weil"], c: 0, h: "Folge → sodass." }
      ]
    },
    teil2: {
      titel: "Sprachbausteine Teil 2 — Wörter aus Liste einsetzen",
      anleitung: "Setzen Sie die passenden Wörter aus dem Kasten in die Lücken (6–10) ein. Jedes Wort passt nur einmal.",
      wortliste: ["zum Glück", "trotzdem", "immerhin", "diesmal", "beim nächsten Mal"],
      text: "Ich hatte Angst, ___(6)___ hat mir eine Freundin geholfen. Ich musste ___(7)___ lange warten. ___(8)___ war der Termin schnell erledigt. ___(9)___ war ich sehr nervös. ___(10)___ gehe ich ruhiger hin.",
      loesung: { 6: "zum Glück", 7: "trotzdem", 8: "immerhin", 9: "diesmal", 10: "beim nächsten Mal" }
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
        situation: "Sie waren zum ersten Mal alleine bei einem Amt und schreiben einer Freundin / einem Freund davon.",
        punkte: ["Erzählen Sie, wie es gelaufen ist.", "Sagen Sie, was schwierig war.", "Geben Sie einen Tipp für die Person, falls sie auch dorthin muss."]
      }
    ],
    bewertung: {
      kriterien: ["Alle 3 Punkte enthalten", "Zusammenhängende, verständliche Sätze", "Grundwortschatz und einfache Nebensätze korrekt"],
      hinweis: "Automatische Erstprüfung über LanguageTool geplant."
    }
  }
};

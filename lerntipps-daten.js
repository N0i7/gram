/* FLOß Grammatik – "Lerntipps"-Seite
   Praktische, forschungsbasierte Lerntipps für Deutschlerner: wie man
   Vokabeln, Grammatik, Hören/Sprechen/Lesen und die telc-Prüfung
   wirklich effektiv angeht. Gleiches Muster wie unnuetzes-wissen-daten.js
   und referenz-daten.js: eine Datenquelle (window.LERNTIPPS_TABLES /
   window.LERNTIPPS_META), gerendert von lerntipps.js auf lerntipps.html.
   Keine Quiz-Übungen — reiner, gut strukturierter Lesestoff zum
   Nachschlagen und Umsetzen. */
(function(){

const LERNTIPPS_TABLES = {};
const LERNTIPPS_META = [];

function add(id, chip, title, titleEn, group, html){
  LERNTIPPS_TABLES[id] = html;
  LERNTIPPS_META.push({id, chip, title, titleEn, group});
}

/* ========================================================= */
/* 1 · VOKABELN LERNEN                                         */
/* ========================================================= */

add("spaced-repetition", "Spaced Repetition", "Spaced Repetition: warum der richtige Abstand alles verändert", "Spaced repetition — why the right timing changes everything", "Vokabeln lernen", `
<p>Das menschliche Gehirn vergisst neue Wörter nach einem vorhersagbaren Muster — der „Vergessenskurve" von Hermann Ebbinghaus zufolge sind nach einem Tag ohne Wiederholung schon über 50% wieder weg. Der Trick ist nicht, mehr zu lernen, sondern im <b>richtigen Moment</b> zu wiederholen: kurz bevor du ein Wort vergessen hättest. Das nennt man Spaced Repetition (verteiltes Wiederholen).</p>
<p class="en">The brain forgets new words in a predictable pattern — Ebbinghaus's "forgetting curve" shows over 50% is gone after just one day without review. The trick isn't learning more, it's reviewing at the right moment: just before you would have forgotten it.</p>
<div class="ex">Praktisch: Wort heute lernen → morgen wiederholen → in 3 Tagen → in 7 Tagen → in 2 Wochen → in einem Monat. Jedes Mal, wenn du dich richtig erinnerst, wird der Abstand größer. Genau das machen die <b>Karteikarten</b> bei FLOß automatisch — deshalb lohnt es sich, sie täglich kurz zu öffnen statt einmal pro Woche lange.</div>
<p>Fünf Minuten täglich mit Karteikarten schlagen eine Stunde einmal pro Woche — nicht weil mehr Zeit investiert wird, sondern weil die Wiederholungen im richtigen Abstand liegen.</p>
<p class="en">Five minutes daily with flashcards beats one hour once a week — not because of more total time, but because the reviews land at the right intervals.</p>
`);

add("vokabeln-mit-kontext", "Wörter im Satz", "Vokabeln nie isoliert lernen, immer im Satz", "Never learn words in isolation — always in a sentence", "Vokabeln lernen", `
<p>„Tisch" auswendig zu lernen bringt wenig, wenn du im Gespräch nicht weißt, welche Präposition, welcher Fall oder welches Verb dazugehört. Vokabeln, die man in einem ganzen Beispielsatz lernt, sind beim Sprechen sofort abrufbar — isolierte Wortlisten dagegen bleiben oft passives Wissen, das man erkennt, aber nicht benutzen kann.</p>
<p class="en">Memorizing "Tisch" alone doesn't help if you don't know which preposition, case, or verb goes with it in conversation. Words learned inside a full example sentence become instantly usable — isolated word lists tend to stay passive knowledge you recognize but can't produce.</p>
<div class="ex">Statt: <s>warten (to wait)</s><br>Besser: <b>Ich warte <u>auf</u> den Bus.</b> (warten auf + Akkusativ) — das ganze Muster sitzt sofort mit.</div>
<p>Bei den FLOß-Themen steht deshalb neben jeder Erklärung immer ein vollständiger Beispielsatz — den lohnt es sich mitzulernen, nicht nur die nackte Regel.</p>
<p class="en">That's why every FLOß topic pairs its explanation with a full example sentence — worth memorizing together with the rule, not just the bare rule alone.</p>
`);

add("artikel-mitlernen", "der Artikel gehört zum Wort", "Der Artikel gehört zum Wort — nie ohne ihn lernen", "The article belongs to the word — never learn one without it", "Vokabeln lernen", `
<p>„Lampe" statt „die Lampe" zu lernen spart am Anfang scheinbar Zeit — kostet aber später bei jedem Akkusativ, Dativ und jeder Adjektivendung, weil die alle vom Artikel abhängen. Das Genus muss von Anfang an fest mit dem Wort verankert sein, nicht als separater Lernschritt.</p>
<p class="en">Learning "Lampe" instead of "die Lampe" seems to save time at first — but costs you later with every accusative, dative, and adjective ending, since all of those depend on the article. Gender needs to be anchored to the word from day one, not learned as a separate step.</p>
<div class="ex">Eselsbrücke: laut vorlesen mit Artikel, nie ohne — „die Lampe, die Lampe, die Lampe" (3× laut) prägt sich schneller ein als stilles Lesen von „Lampe (f.)".</div>
<p>Zusätzlicher Trick: nach Endungen sortieren hilft — die meisten Wörter auf <b>-e, -ung, -heit, -keit, -schaft, -ion</b> sind feminin, die meisten auf <b>-er, -en, -el</b> (bei Personen/Werkzeugen) maskulin, Verkleinerungen auf <b>-chen/-lein</b> immer neutral. Die volle Liste steht in der <a href="referenz.html">Referenz</a>.</p>
<p class="en">Extra trick: sort by ending — most words ending in -e, -ung, -heit, -keit, -schaft, -ion are feminine; most ending in -er, -en, -el (for people/tools) are masculine; diminutives in -chen/-lein are always neuter.</p>
`);

/* ========================================================= */
/* 2 · GRAMMATIK LERNEN                                        */
/* ========================================================= */

add("aktives-abrufen", "Aktiv abrufen statt lesen", "Aktives Abrufen schlägt passives Lesen (retrieval practice)", "Active recall beats passive reading (retrieval practice)", "Grammatik lernen", `
<p>Eine Regel dreimal durchzulesen fühlt sich produktiv an — bringt aber viel weniger als einmal aus dem Gedächtnis zu versuchen, sie anzuwenden, auch wenn man dabei Fehler macht. Forschung zum „testing effect" zeigt immer wieder: sich selbst aktiv zu prüfen festigt Wissen stärker als es nur noch einmal anzuschauen.</p>
<p class="en">Re-reading a rule three times feels productive but teaches far less than trying to apply it from memory once, even with mistakes. Research on the "testing effect" consistently shows self-testing cements knowledge better than simply reviewing it again.</p>
<div class="ex">Deshalb steht bei jedem FLOß-Thema direkt unter der Erklärung eine Übung — nicht als Extra, sondern als der eigentliche Lernschritt. Die Erklärung ist nur die Vorbereitung dafür.</div>
<p>Praktische Konsequenz: eine Regel lesen, das Buch/die Seite schließen und versuchen, sie in eigenen Worten oder einem eigenen Satz zu wiederholen — bevor man weiterliest.</p>
<p class="en">Practical takeaway: read a rule, close the page, and try to restate it in your own words or your own sentence — before reading on.</p>
`);

add("fehlerliste", "Die eigene Fehlerliste", "Die eigene Fehlerliste: gezielt aus Fehlern lernen", "Your own error log — learning from mistakes on purpose", "Grammatik lernen", `
<p>Die gleichen 5-10 Fehlertypen tauchen bei den meisten Lernern immer wieder auf — falscher Fall nach Präposition, Wortstellung im Nebensatz, Verwechslung von Perfekt-Hilfsverben. Wer diese Muster nicht bewusst festhält, macht sie noch in der Prüfung.</p>
<p class="en">The same 5–10 error types recur for most learners — wrong case after a preposition, word order in subordinate clauses, mixing up which auxiliary verb to use in the perfect tense. Without consciously tracking these patterns, they resurface right in the exam.</p>
<div class="ex">Eine einfache Tabelle reicht: <b>Fehler | richtige Form | Warum</b>. Beispiel: „ich bin gegangt" | „ich bin gegangen" | gehen ist unregelmäßig, Partizip II auf -en nicht -t.</div>
<p>Vor jeder Prüfung lohnt es sich, die eigene Fehlerliste noch einmal durchzugehen — meist wichtiger als neuen Stoff zu pauken, weil hier die tatsächlichen Punkteverluste liegen.</p>
<p class="en">Before any exam, reviewing your own error log is often more valuable than cramming new material — this is where the real points are being lost.</p>
`);

add("interleaving", "Themen mischen (Interleaving)", "Themen mischen statt blockweise pauken", "Mix topics instead of studying one block at a time", "Grammatik lernen", `
<p>Nur den Akkusativ zu üben, bis er sitzt, dann erst zum Dativ zu wechseln, fühlt sich sauber an — führt aber dazu, dass man in der Prüfung, wo alle Fälle gemischt vorkommen, wieder unsicher wird. Besser ist „Interleaving": verschiedene, verwandte Themen von Anfang an gemischt üben.</p>
<p class="en">Drilling only the accusative until it feels solid, then moving to the dative, feels clean — but in an exam where all cases appear mixed together, that confidence often collapses. "Interleaving" — mixing related topics together from the start — works better.</p>
<div class="ex">Statt: 20 Aufgaben nur Akkusativ, dann 20 nur Dativ.<br>Besser: 10 Aufgaben gemischt Akkusativ/Dativ/Genitiv direkt hintereinander — genau das simulieren die FLOß-Modelltests.</div>
<p>Der Grund: beim Mischen muss das Gehirn bei jeder Aufgabe neu entscheiden, WELCHE Regel gilt — genau diese Entscheidung ist es, die in der echten Prüfung gebraucht wird, nicht nur das Wissen um die Regel selbst.</p>
<p class="en">The reason: mixed practice forces your brain to decide WHICH rule applies each time — that decision itself is what the real exam demands, not just knowledge of the rule in isolation.</p>
`);

/* ========================================================= */
/* 3 · HÖREN, SPRECHEN & LESEN IM ALLTAG                        */
/* ========================================================= */

add("verstaendliche-eingabe", "i+1: knapp über dem Niveau", "„i+1“: knapp über dem eigenen Niveau hören und lesen", "“i+1”: input just above your current level", "Hören, Sprechen & Lesen im Alltag", `
<p>Der Sprachforscher Stephen Krashen prägte die Idee des „comprehensible input": man lernt eine Sprache am schnellsten mit Material, das man größtenteils versteht, aber das ein bisschen über dem eigenen Niveau liegt („i+1" — das aktuelle Niveau i plus ein bisschen mehr). Zu leichtes Material bringt kaum neue Wörter, zu schweres überfordert und demotiviert.</p>
<p class="en">Linguist Stephen Krashen coined "comprehensible input": you learn fastest with material you mostly understand, but that sits a little above your current level ("i+1"). Material that's too easy teaches little new; material that's too hard overwhelms and discourages.</p>
<div class="ex">Faustregel: wenn du in einem Text/Hörbeispiel etwa 80-90% verstehst, ist es genau richtig. Bei unter 50% Verständnis lieber ein leichteres Level wählen — genau deshalb sind die FLOß-<a href="hoerleseverstehen.html">Hör-/Leseverstehen</a>-Texte nach Niveau A1-B2 sortiert.</div>
<p>Wer sich als A2-Lerner an B2-Nachrichten zwingt, versteht wenig und gibt schnell auf. Wer bei A1-Material bleibt, obwohl A2 fällig wäre, lernt kaum noch etwas Neues dazu.</p>
<p class="en">An A2 learner forcing themselves through B2 news understands little and gives up fast. Staying stuck on A1 material when you're ready for A2 means barely learning anything new.</p>
`);

add("shadowing", "Schatten-Technik (Shadowing)", "Schatten-Technik: Aussprache und Sprechfluss trainieren", "Shadowing: training pronunciation and speech flow", "Hören, Sprechen & Lesen im Alltag", `
<p>Shadowing heißt: einen Audio- oder Video-Text hören und gleichzeitig (oder mit minimaler Verzögerung) laut mitsprechen — Wort für Wort, mit derselben Betonung, demselben Rhythmus. Es trainiert nicht nur Aussprache, sondern auch das Sprechtempo und die Satzmelodie, die beim reinen Lesen komplett fehlen.</p>
<p class="en">Shadowing means listening to an audio or video text and speaking along out loud at the same time (or with a tiny delay) — word for word, matching the stress and rhythm. It trains not just pronunciation but also speaking speed and sentence melody, which pure reading never touches.</p>
<div class="ex">Praktisch: ein kurzes YouTube-Erklärvideo (z.B. eines der FLOß-Themenvideos) einmal normal ansehen, dann ein zweites Mal bei laufendem Video laut mitsprechen. 2-3 Minuten täglich reichen — Qualität vor Länge.</div>
<p>Am Anfang fühlt es sich unangenehm und zu schnell an — das ist normal und legt sich nach wenigen Versuchen. Wichtiger als perfekte Aussprache ist, überhaupt den Mund zu öffnen und mitzusprechen.</p>
<p class="en">At first it feels awkward and too fast — that's normal and fades after a few tries. Opening your mouth and speaking along matters more than perfect pronunciation from the start.</p>
`);

add("deutsch-im-alltag", "Deutsch im Alltag einbauen", "Deutsch in den Alltag einbauen, ohne extra Zeit zu investieren", "Weaving German into daily life without extra time", "Hören, Sprechen & Lesen im Alltag", `
<p>Die meisten Lernenden haben keine 2 Stunden am Tag für Deutsch übrig — müssen sie aber auch nicht, wenn Deutsch in ohnehin vorhandene Alltagszeit eingebaut wird: Handy-Sprache umstellen, beim Pendeln einen leichten Podcast hören, Nachrichten in „leichter Sprache" statt in der eigenen Muttersprache lesen.</p>
<p class="en">Most learners don't have two spare hours a day for German — and don't need to, if German gets woven into time that's already spent: switching your phone's language, listening to an easy podcast during a commute, reading simplified-language news instead of news in your own language.</p>
<div class="ex">Konkrete Einstiege: Handy/Social-Media-Sprache auf Deutsch · „Nachrichtenleicht" oder „Deutsch lernen mit der DW" als Podcast · deutsche Untertitel bei ohnehin geschauten Serien · ein deutsches Wort/eine Redewendung pro Tag als Sperrbildschirm.</div>
<p>Der Effekt ist kumulativ: 10 Minuten „nebenbei" pro Tag sind übers Jahr über 60 Stunden zusätzliche Sprachkontaktzeit — ganz ohne einen einzigen zusätzlichen „Lern-Termin".</p>
<p class="en">The effect compounds: 10 "incidental" minutes a day add up to over 60 hours of extra language contact per year — without ever scheduling a single extra study session.</p>
`);

/* ========================================================= */
/* 4 · PRÜFUNGSVORBEREITUNG (telc)                              */
/* ========================================================= */

add("telc-aufbau", "Die 4 Teile der telc-Prüfung", "Die 4 Teile der telc-Prüfung — und wie man die Zeit einteilt", "The 4 parts of the telc exam — and how to budget your time", "Prüfungsvorbereitung (telc)", `
<p>Jede telc-Prüfung (A1 bis C1) besteht aus vier Teilen: <b>Leseverstehen, Sprachbausteine (Grammatik/Wortschatz), Hörverstehen</b> und <b>Schriftlicher Ausdruck</b> — dazu kommt getrennt die <b>mündliche Prüfung</b>. Jeder Teil hat eine eigene Zeitvorgabe, und Zeit, die in einem Teil überzogen wird, fehlt am Ende garantiert bei einem anderen.</p>
<p class="en">Every telc exam (A1 through C1) has four parts: reading comprehension, language elements (grammar/vocabulary), listening comprehension, and written expression — plus a separately-scheduled oral exam. Each part has its own time limit, and time overspent on one part is guaranteed to be missing from another later.</p>
<div class="ex">Bewährte Strategie: vor Beginn eines Teils kurz auf die Uhr schauen und ausrechnen, wie viel Zeit pro Aufgabe bleibt. Bei Leseverstehen zuerst die Fragen überfliegen, dann den Text gezielt danach durchsuchen — nicht erst den ganzen Text lesen und dann die Fragen.</p>
<p>Der Schriftliche Ausdruck sollte nie die letzten Minuten bekommen — er zählt am meisten für die Note und braucht Zeit zum nochmaligen Durchlesen am Ende.</p>
<p class="en">Written expression should never be squeezed into the final leftover minutes — it counts most toward the grade and needs time for a final re-read.</p>
`);

add("musterpruefungen-auswerten", "Musterprüfungen richtig nutzen", "Musterprüfungen richtig nutzen: lösen ist nur die halbe Arbeit", "Using practice exams right: solving them is only half the work", "Prüfungsvorbereitung (telc)", `
<p>Eine Musterprüfung nur zu lösen und die Punktzahl abzuhaken bringt wenig — der eigentliche Lerngewinn liegt in der Auswertung danach: WELCHE Aufgabentypen wurden falsch gelöst, und WARUM. Ohne diesen Schritt wiederholt man beim nächsten Modelltest dieselben Fehler.</p>
<p class="en">Just taking a practice exam and noting the score achieves little — the real learning happens in the review afterward: WHICH question types were missed, and WHY. Skip that step and the same mistakes repeat on the next practice test.</p>
<div class="ex">Nach jedem FLOß-<a href="modelltests.html">Modelltest</a>: nicht nur die Gesamtpunktzahl anschauen, sondern gezielt bei „Wiederholen" die schwächsten Themen anzeigen lassen und genau die als Nächstes üben.</div>
<p>Faustregel für die letzten zwei Wochen vor der Prüfung: mindestens 2-3 komplette Modelltests unter echten Zeitbedingungen (Timer, keine Pausen, keine Hilfsmittel) — Prüfungssituation simulieren, nicht nur Aufgaben lösen.</p>
<p class="en">Rule of thumb for the final two weeks before the exam: at least 2–3 full practice tests under real time conditions (timer, no breaks, no aids) — simulate the exam situation, not just solve isolated questions.</p>
`);

add("pruefungsangst", "Umgang mit Prüfungsangst", "Umgang mit Prüfungsangst am Tag der Prüfung", "Handling exam nerves on the day itself", "Prüfungsvorbereitung (telc)", `
<p>Ein gewisses Maß an Nervosität ist normal und sogar hilfreich — sie hält wach und konzentriert. Problematisch wird es erst, wenn die Angst das Denken blockiert. Der wirksamste Hebel dagegen ist nicht positives Denken, sondern <b>Vorbereitung, die Sicherheit schafft</b>: genau wissen, was einen erwartet.</p>
<p class="en">A certain amount of nervousness is normal and even helpful — it keeps you alert and focused. It only becomes a problem when fear blocks clear thinking. The most effective counter isn't positive thinking, but preparation that builds genuine confidence: knowing exactly what to expect.</p>
<div class="ex">Konkret: den Prüfungsablauf vorher einmal komplett simulieren (siehe Musterprüfungen), am Vortag früh schlafen statt spät pauken, am Prüfungstag rechtzeitig da sein statt in letzter Minute zu hetzen.</div>
<p>Bei akuter Blockade während der Prüfung hilft: kurz die Aufgabe wechseln (nicht auf einer feststeckenden Frage verharren), bewusst 3× langsam ausatmen, dann zur schwierigen Stelle zurückkehren.</p>
<p class="en">If you freeze mid-exam: switch to a different question rather than getting stuck, take three slow deliberate exhales, then return to the hard one.</p>
`);

/* ========================================================= */
/* 5 · LERNRHYTHMUS & MOTIVATION                                */
/* ========================================================= */

add("taegliche-einheiten", "Kleine tägliche Einheiten", "Kleine tägliche Einheiten schlagen große, seltene", "Small daily sessions beat big, rare ones", "Lernrhythmus & Motivation", `
<p>20 Minuten täglich ergeben nach einem Monat über 10 Stunden Übung, verteilt auf 30 Wiederholungskontakte mit dem Stoff. Eine einzelne 5-Stunden-Session am Wochenende bringt zwar dieselbe Gesamtzeit, aber nur einen einzigen Kontakt — und ohne die Wiederholung im Abstand (siehe Spaced Repetition) bleibt viel weniger hängen.</p>
<p class="en">20 minutes daily adds up to over 10 hours of practice a month, spread across 30 separate contacts with the material. A single 5-hour weekend session gives the same total time but only one contact — and without spaced repetition, far less of it sticks.</p>
<div class="ex">Realistischer Minimal-Plan: 10 Minuten Karteikarten + 1 Thema auf FLOß pro Tag. Das ist an fast jedem Tag machbar, auch an vollen Arbeitstagen — und deutlich nachhaltiger als der Plan „3 Stunden am Wochenende", der bei Stress als Erstes wegfällt.</div>
<p>Konsistenz schlägt Intensität: lieber jeden Tag ein bisschen als gelegentlich viel und dann wochenlang gar nicht.</p>
<p class="en">Consistency beats intensity: a little every day beats a lot occasionally followed by weeks of nothing.</p>
`);

add("smart-ziele", "Realistische Ziele setzen", "Realistische Ziele setzen statt „ich lerne jetzt einfach alles“", "Setting realistic goals instead of “I'll just learn everything”", "Lernrhythmus & Motivation", `
<p>„Ich will mein Deutsch verbessern" ist kein Ziel, an dem man Fortschritt messen kann — und genau das führt oft zu Frustration und Aufgeben. Ein konkretes, terminiertes Ziel („B1-Modelltest bis Ende des Monats auf 70%") lässt sich dagegen in Wochenschritte herunterbrechen und der Fortschritt wird sichtbar.</p>
<p class="en">"I want to improve my German" isn't a measurable goal — and that vagueness is exactly what leads to frustration and giving up. A concrete, dated goal ("score 70% on a B1 practice test by month's end") breaks down into weekly steps and makes progress visible.</p>
<div class="ex">Statt: "Ich lerne jetzt mehr Deutsch."<br>Besser: "Bis Freitag alle A2-Themen zu Vergangenheit einmal durchgearbeitet, danach ein Modelltest." Danach neues Ziel für die nächste Woche setzen.</div>
<p>Kleine, erreichte Ziele bauen Motivation auf — ein einziges riesiges, vages Ziel dagegen fühlt sich fast immer unerreichbar an und wirkt eher lähmend als antreibend.</p>
<p class="en">Small, achieved goals build motivation — one giant, vague goal almost always feels unreachable and paralyzes more than it drives.</p>
`);

window.LERNTIPPS_TABLES = LERNTIPPS_TABLES;
window.LERNTIPPS_META = LERNTIPPS_META;
})();

/* FLOß Grammatik – "Schreibschule"-Seite
   Aufbau von Texten, Briefen/E-Mails, Stilmitteln, Erzählperspektive
   und Rechtschreibung fürs Schreiben — plus freies Schreiben mit
   Anbindung an die bestehende KI-Korrektur-Engine (window.FlossKorrektur
   aus modelltest-korrektur.js, gleiches Modul wie bei den Modelltests).
   Referenz-Karten nach dem Muster von unnuetzes-wissen-daten.js, aber
   mit optionalem "quiz"-Feld (kurze Übung mit Musterlösung/Feedback,
   gerendert über content-quiz.js). Gerendert von schreibschule.js. */
(function(){

const SCHREIB_SECTIONS = {};
const SCHREIB_META = [];

function add(id, chip, title, titleEn, group, html, quiz){
  SCHREIB_SECTIONS[id] = {html, quiz: quiz||null};
  SCHREIB_META.push({id, chip, title, titleEn, group});
}

/* ========================================================= */
/* 1 · AUFSÄTZE & REFERATE                                     */
/* ========================================================= */

add("aufbau-aufsatz", "Aufsätze & Referate", "Der klare Aufbau: Einleitung, Hauptteil, Schluss", "Clear structure: introduction, body, conclusion", "Aufsätze & Referate", `
<p>Jeder gute Aufsatz — ob Meinungsäußerung in der telc-Prüfung oder ein Referat für die Schule — folgt derselben Grundstruktur. Wer diese drei Teile bewusst einhält, wirkt organisiert, auch wenn der Inhalt noch nicht perfekt ist.</p>
<p class="en">Every good essay — whether an opinion piece in the telc exam or a school presentation — follows the same basic structure. Sticking to these three parts consciously makes a text feel organized, even before the content itself is perfect.</p>
<table><tr><th>Teil</th><th>Funktion</th><th>Nützliche Redemittel</th></tr>
<tr><td><b>Einleitung</b></td><td>Thema nennen, Interesse wecken</td><td>„In diesem Text geht es um …“ · „Ein Thema, das viele beschäftigt, ist …“</td></tr>
<tr><td><b>Hauptteil</b></td><td>Argumente, Beispiele, Gegenargumente</td><td>„Ein wichtiger Grund dafür ist …“ · „Zum einen … zum anderen …“ · „Allerdings muss man auch bedenken, dass …“</td></tr>
<tr><td><b>Schluss</b></td><td>Zusammenfassen, eigene Meinung, Ausblick</td><td>„Zusammenfassend lässt sich sagen, dass …“ · „Meiner Meinung nach …“ · „Abschließend bleibt festzuhalten, dass …“</td></tr></table>
<p><b>Für ein Referat</b> gilt dieselbe Struktur, mündlich erweitert: am Anfang die Gliederung ankündigen („Ich werde zunächst … und danach …“), zwischendurch Überleitungen benutzen („Damit komme ich zum nächsten Punkt …“) und am Ende explizit zu Fragen einladen.</p>
<p class="en">A presentation follows the same structure, spoken aloud: announce your outline at the start, use transitions between points, and explicitly invite questions at the end.</p>
`, [
{q:"Welcher Satz passt am besten in die EINLEITUNG eines Aufsatzes?", o:["Zusammenfassend lässt sich sagen, dass …","In diesem Text geht es um …","Zum einen … zum anderen …"], c:1, h:"„In diesem Text geht es um …“ führt das Thema ein — typisch für die Einleitung."},
{q:"Welcher Satz passt am besten in den SCHLUSS?", o:["Ein wichtiger Grund dafür ist …","Meiner Meinung nach …","Ein Thema, das viele beschäftigt, ist …"], c:1, h:"Die eigene Meinung gehört typischerweise in den Schlussteil."},
{type:"match", q:"Ordne Redemittel und Textteil zu:", pairs:[["In diesem Text geht es um …","Einleitung"],["Zum einen … zum anderen …","Hauptteil"],["Zusammenfassend lässt sich sagen …","Schluss"]], h:"Einleitung nennt das Thema, Hauptteil bringt Argumente, Schluss fasst zusammen."}
]);

/* ========================================================= */
/* 2 · FORMELLE & INFORMELLE BRIEFE / E-MAILS                  */
/* ========================================================= */

add("formelle-briefe", "Briefe & E-Mails", "Formelle und informelle Briefe: Anrede, Aufbau, Gruß", "Formal and informal letters: salutation, structure, closing", "Briefe & E-Mails", `
<p>Im <b>Schriftlichen Ausdruck</b> jeder telc-Prüfung ist ein Brief oder eine E-Mail Pflicht — und die Bewertung achtet ausdrücklich auf die richtige Form (Anrede und Gruß), nicht nur auf den Inhalt. Formell und informell unterscheiden sich in fast jedem Baustein.</p>
<p class="en">Every telc exam's written section requires a letter or email — and grading explicitly checks the correct form (salutation and closing), not just content. Formal and informal register differ in almost every building block.</p>
<table><tr><th></th><th>Formell</th><th>Informell</th></tr>
<tr><td class="thn">Anrede</td><td class="tdn">Sehr geehrte Frau Müller, / Sehr geehrter Herr Müller, / Sehr geehrte Damen und Herren,</td><td class="tdn">Liebe Anna, / Lieber Tom, / Hallo zusammen,</td></tr>
<tr><td class="tha">Einstieg</td><td class="tda">„ich schreibe Ihnen bezüglich …“ · „hiermit möchte ich …“</td><td class="tda">„wie geht's dir?“ · „ich wollte dir kurz schreiben, dass …“</td></tr>
<tr><td class="thd">Bitte</td><td class="tdd">„Ich wäre Ihnen sehr dankbar, wenn Sie …“ · „Könnten Sie mir bitte mitteilen, ob …“</td><td class="tdd">„Kannst du mir sagen, ob …“ · „Wärst du so lieb und …“</td></tr>
<tr><td class="thg">Gruß</td><td class="tdg">Mit freundlichen Grüßen</td><td class="tdg">Liebe Grüße / Viele Grüße / Bis bald</td></tr></table>
<p><b>Häufigster Punkteabzug in der Prüfung:</b> formelle Anrede mit informellem Gruß mischen (oder umgekehrt), das „Sie“ nach der Anrede vergessen groß zu schreiben, oder Anrede/Gruß ganz weglassen.</p>
<p class="en">The most common point deduction: mixing a formal salutation with an informal closing (or vice versa), forgetting to capitalize "Sie" after the salutation, or leaving out the salutation/closing entirely.</p>
`, [
{q:"Welche Anrede passt zu einer formellen E-Mail an eine unbekannte Firma?", o:["Hallo zusammen,","Sehr geehrte Damen und Herren,","Liebe Firma,"], c:1, h:"Bei unbekanntem Empfänger: „Sehr geehrte Damen und Herren,“"},
{type:"gap", q:"Ergänze den formellen Gruß am Ende eines Geschäftsbriefs: Mit freundlichen ___", a:["grüßen","grüssen"], h:"„Mit freundlichen Grüßen“ ist der Standardgruß in formellen Briefen."},
{type:"match", q:"Ordne formell/informell zu:", pairs:[["Sehr geehrte Frau Müller,","formell"],["Liebe Anna,","informell"],["Ich wäre Ihnen sehr dankbar, wenn …","formell"],["Kannst du mir sagen, ob …","informell"]], h:"Formelle Briefe siezen und benutzen distanzierte Formulierungen, informelle duzen und sind direkter."}
]);

/* ========================================================= */
/* 3 · KONNEKTOREN & TEXTZUSAMMENHANG                           */
/* ========================================================= */

add("konnektoren-text", "Konnektoren im Text", "Konnektoren im Text: Sätze zu einem Ganzen verbinden", "Connectors in text: joining sentences into a whole", "Konnektoren & Textzusammenhang", `
<p>Einzelne korrekte Sätze reichen für einen guten Text nicht aus — sie müssen sich lesen, als würden sie zusammengehören. Konnektoren (deshalb, trotzdem, außerdem, dagegen …) sind das wichtigste Werkzeug dafür, weil sie die logische Beziehung zwischen Sätzen sichtbar machen. Die reine Grammatik der Konnektoren steht im Thema <a href="b1.html#konnektoren">Konnektoren</a> — hier geht es um den praktischen Einsatz beim Schreiben.</p>
<p class="en">Individually correct sentences aren't enough for a good text — they need to read as if they belong together. Connectors are the main tool for that, because they make the logical relationship between sentences visible. This section covers using them in practice; the grammar itself is covered in the Konnektoren grammar topic.</p>
<table><tr><th>Beziehung</th><th>Konnektoren</th><th>Beispiel</th></tr>
<tr><td>Grund</td><td>weil, da, denn, deshalb</td><td>Ich lerne jeden Tag, <b>deshalb</b> mache ich Fortschritte.</td></tr>
<tr><td>Gegensatz</td><td>aber, trotzdem, dagegen, jedoch</td><td>Der Text war schwierig, <b>trotzdem</b> habe ich ihn verstanden.</td></tr>
<tr><td>Zusatz</td><td>außerdem, zudem, ebenfalls</td><td>Ich übe Grammatik, <b>außerdem</b> höre ich Podcasts.</td></tr>
<tr><td>Folge</td><td>also, folglich, daher</td><td>Ich hatte keine Zeit, <b>also</b> habe ich die Aufgabe verschoben.</td></tr></table>
<p>Ein häufiger Fehler bei Lernenden: zu viele Sätze einfach mit „und“ aneinanderzureihen. Ein Text mit abwechslungsreichen Konnektoren wirkt sofort reifer und wird in der telc-Bewertung unter „Kommunikative Gestaltung“ deutlich besser bewertet.</p>
<p class="en">A common learner mistake: stringing too many sentences together with just "und". A text with varied connectors immediately reads as more mature and scores noticeably better under the telc criterion "communicative design".</p>
`, [
{type:"gap", q:"Ich war müde, ___ bin ich trotzdem zum Kurs gegangen. (Gegensatz-Konnektor)", a:["aber","trotzdem","jedoch"], h:"Ein Gegensatz-Konnektor wie „aber“ oder „trotzdem“ passt hier."},
{type:"gap", q:"Es hat stark geregnet, ___ ist der Ausflug ausgefallen. (Folge-Konnektor)", a:["also","folglich","daher","deshalb"], h:"„also/folglich/daher/deshalb“ drücken eine Folge aus."},
{type:"match", q:"Ordne Konnektor und Beziehung zu:", pairs:[["deshalb","Grund/Folge"],["trotzdem","Gegensatz"],["außerdem","Zusatz"],["also","Folge"]], h:"Jeder Konnektor drückt eine bestimmte logische Beziehung aus."}
]);

/* ========================================================= */
/* 4 · STILMITTEL & RHETORISCHE MITTEL                          */
/* ========================================================= */

add("stilmittel", "Stilmittel", "Stilmittel und rhetorische Figuren erkennen", "Recognizing literary and rhetorical devices", "Stilmittel & Erzählperspektive", `
<p>Im Deutschunterricht (und in Textinterpretationen ab B2/C1) wird oft verlangt, bestimmte Stilmittel in einem Text zu erkennen und ihre Wirkung zu erklären. Die wichtigsten im Überblick:</p>
<p class="en">German classes (and text interpretation from B2/C1 onward) often require identifying specific stylistic devices and explaining their effect. The most important ones:</p>
<table><tr><th>Stilmittel</th><th>Erklärung</th><th>Beispiel</th></tr>
<tr><td><b>Metapher</b></td><td>Bildliche Übertragung ohne „wie“</td><td>Die Zeit <b>rinnt</b> mir durch die Finger.</td></tr>
<tr><td><b>Vergleich</b></td><td>Bildliche Übertragung MIT „wie“</td><td>Er ist stark <b>wie</b> ein Bär.</td></tr>
<tr><td><b>Alliteration</b></td><td>Gleicher Anfangslaut mehrerer Wörter</td><td><b>M</b>ilch <b>m</b>acht <b>m</b>üde <b>M</b>änner munter.</td></tr>
<tr><td><b>Anapher</b></td><td>Wiederholung am Satzanfang</td><td><b>Ich habe</b> einen Traum. <b>Ich habe</b> eine Hoffnung.</td></tr>
<tr><td><b>Hyperbel</b></td><td>Bewusste Übertreibung</td><td>Ich habe dir das schon <b>tausendmal</b> gesagt.</td></tr>
<tr><td><b>Ironie</b></td><td>Das Gegenteil des Gemeinten sagen</td><td>„Na, das war ja <b>super</b> gelaufen“ (nach einem Fehler).</td></tr>
<tr><td><b>Personifikation</b></td><td>Menschliche Eigenschaften für Dinge/Abstraktes</td><td>Der Wind <b>flüstert</b> durch die Bäume.</td></tr>
<tr><td><b>Metonymie</b></td><td>Ersetzung durch etwas eng Verwandtes</td><td>„Berlin entscheidet“ (= die Regierung in Berlin)</td></tr></table>
<p>Beim Erkennen hilft die Frage: Wird hier etwas WÖRTLICH gemeint (dann kein Stilmittel) oder BILDLICH/ÜBERTRAGEN (dann Metapher, Vergleich, Hyperbel …)? Und: wiederholt sich etwas bewusst (Anapher, Alliteration)?</p>
<p class="en">A useful test: is this meant LITERALLY (no device) or FIGURATIVELY (metaphor, simile, hyperbole)? And: is something deliberately repeated (anaphora, alliteration)?</p>
`, [
{q:"„Er ist stark wie ein Bär“ — welches Stilmittel?", o:["Metapher","Vergleich","Ironie"], c:1, h:"Mit „wie“ = Vergleich. Ohne „wie“ wäre es eine Metapher."},
{q:"„Milch macht müde Männer munter“ — welches Stilmittel?", o:["Anapher","Alliteration","Hyperbel"], c:1, h:"Gleicher Anfangslaut (M) mehrerer Wörter = Alliteration."},
{type:"match", q:"Ordne Stilmittel und Beispiel zu:", pairs:[["Die Zeit rinnt mir durch die Finger.","Metapher"],["Ich habe dir das schon tausendmal gesagt.","Hyperbel"],["Der Wind flüstert durch die Bäume.","Personifikation"]], h:"Metapher = Bild ohne „wie“, Hyperbel = Übertreibung, Personifikation = menschliche Eigenschaft für ein Ding."}
]);

/* ========================================================= */
/* 5 · ERZÄHLPERSPEKTIVE                                        */
/* ========================================================= */

add("erzaehlperspektive", "Erzählperspektive", "Wer erzählt hier? Die vier Erzählperspektiven", "Who's telling the story? The four narrative perspectives", "Stilmittel & Erzählperspektive", `
<p>Bei literarischen Texten (Kurzgeschichten, Romanauszüge) wird häufig gefragt, aus welcher Perspektive erzählt wird. Die vier Grundtypen:</p>
<p class="en">With literary texts (short stories, novel excerpts), you're often asked to identify the narrative perspective. The four basic types:</p>
<table><tr><th>Typ</th><th>Merkmal</th><th>Beispiel</th></tr>
<tr><td><b>Ich-Erzähler</b></td><td>Erzählt aus der Ich-Perspektive, kennt nur die eigenen Gedanken</td><td>„<b>Ich</b> ging langsam zur Tür und <b>wusste</b> nicht, was mich erwartete.“</td></tr>
<tr><td><b>Auktorialer Erzähler</b></td><td>Allwissend, kennt Gedanken ALLER Figuren, kommentiert oft</td><td>„Anna <b>ahnte nicht</b>, dass Peter zur selben Zeit an sie <b>dachte</b>.“</td></tr>
<tr><td><b>Personaler Erzähler</b></td><td>Erzählt aus Sicht EINER Figur (Er/Sie-Form), kennt nur deren Gedanken</td><td>„<b>Sie</b> sah die Tür und <b>fragte sich</b>, was dahinter wartete.“</td></tr>
<tr><td><b>Neutraler Erzähler</b></td><td>Berichtet nur äußere Handlung, keine Gedanken/Gefühle</td><td>„Anna <b>ging</b> zur Tür. Sie <b>öffnete</b> sie <b>langsam</b>.“</td></tr></table>
<p>Die schnellste Unterscheidungsfrage: Steht „ich“ im Text → Ich-Erzähler. Kennt der Erzähler die Gedanken MEHRERER Figuren → auktorial. Kennt er nur die Gedanken EINER Figur → personal. Werden GAR KEINE Gedanken/Gefühle genannt, nur Handlung → neutral.</p>
<p class="en">Quick test: "ich" appears → first-person. Narrator knows several characters' thoughts → omniscient/auktorial. Knows only one character's thoughts → personal. No thoughts/feelings at all, only action → neutral.</p>
`, [
{q:"„Ich ging langsam zur Tür.“ — welche Erzählperspektive?", o:["Ich-Erzähler","Auktorialer Erzähler","Neutraler Erzähler"], c:0, h:"„Ich“ im Text = Ich-Erzähler."},
{q:"Der Erzähler kennt die Gedanken von Anna UND Peter gleichzeitig. Welche Perspektive?", o:["Personal","Auktorial","Neutral"], c:1, h:"Kenntnis der Gedanken mehrerer Figuren = auktorialer (allwissender) Erzähler."},
{type:"gap", q:"„Anna ging zur Tür. Sie öffnete sie langsam.“ (keine Gedanken/Gefühle genannt) — welche Perspektive? Ein Wort.", a:["neutral","neutraler erzähler"], h:"Nur äußere Handlung ohne Gedanken/Gefühle = neutraler Erzähler."}
]);

/* ========================================================= */
/* 6 · RECHTSCHREIBUNG FÜR GUTE TEXTE                            */
/* ========================================================= */

add("rechtschreibung-texte", "Rechtschreibung", "Rechtschreibung für gute Texte: die häufigsten Stolperfallen", "Spelling for good texts: the most common pitfalls", "Rechtschreibung", `
<p>Selbst inhaltlich starke Texte verlieren in der telc-Bewertung Punkte bei „Formale Richtigkeit“, wenn immer dieselben Rechtschreibfehler auftauchen. Die häufigsten:</p>
<p class="en">Even content-strong texts lose points under "formal correctness" when the same spelling mistakes keep recurring. The most common ones:</p>
<h4 class="ref-h">1. das vs. dass</h4>
<p><b>das</b> = Artikel/Pronomen (ersetzbar durch „dieses/welches“) · <b>dass</b> = Konjunktion, leitet einen Nebensatz ein (nie ersetzbar).</p>
<div class="ex"><b>Das</b> Buch, <b>das</b> ich lese, ist spannend. <span class="en">(both replaceable by „dieses/welches“)</span> — Ich weiß, <b>dass</b> du müde bist. <span class="en">(conjunction, introduces a clause)</span></div>
<h4 class="ref-h">2. seit vs. seid</h4>
<p><b>seit</b> = Präposition/Konnektor, Zeit (seit wann?) · <b>seid</b> = Form von „sein“ (ihr seid).</p>
<div class="ex">Ich lerne <b>seit</b> drei Monaten Deutsch. — Ihr <b>seid</b> heute pünktlich.</div>
<h4 class="ref-h">3. wieder vs. wider</h4>
<p><b>wieder</b> = noch einmal, erneut · <b>wider</b> = gegen (selten, nur in festen Wendungen: widersprechen, widerstehen, widerspiegeln).</p>
<div class="ex">Ich sehe dich morgen <b>wieder</b>. — Das spiegelt <b>wider</b>, wie wichtig das Thema ist.</div>
<h4 class="ref-h">4. Kommaregeln kompakt</h4>
<p>Komma <b>immer</b> vor: dass, weil, ob, wenn, obwohl (Nebensatz einleitend) und bei Aufzählungen von ganzen Sätzen. Komma <b>meist nicht</b> bei „und“/„oder“ zwischen zwei Hauptsätzen mit gleichem Subjekt.</p>
<div class="ex">Ich weiß<b>,</b> dass du recht hast. — Ich koche und ich decke den Tisch. <span class="en">(kein Komma nötig vor „und“ hier, aber erlaubt)</span></div>
<p>Ausführliche Kommaregeln stehen im Grammatik-Thema <a href="a2.html#komma">Interpunktion & Schreibung</a>.</p>
<h4 class="ref-h">5. Groß-/Kleinschreibung bei „das Gleiche“ vs. „dasselbe“</h4>
<p>Substantivierte Adjektive nach Artikel werden großgeschrieben: „das Gute“, „etwas Neues“, „nichts Wichtiges“ — auch wenn sie wie ein normales Adjektiv aussehen.</p>
<p class="en">Adjectives turned into nouns after an article are capitalized, even though they look like ordinary adjectives.</p>
`, [
{type:"gap", q:"Ich weiß, ___ du heute keine Zeit hast. (das/dass)", a:["dass"], h:"Konjunktion vor Nebensatz = dass."},
{type:"gap", q:"___ Buch liegt auf dem Tisch. (das/dass)", a:["das"], h:"Ersetzbar durch „dieses“ = das."},
{type:"gap", q:"Ihr ___ herzlich eingeladen. (seit/seid)", a:["seid"], h:"Form von „sein“: ihr seid."},
{type:"gap", q:"Ich wohne ___ zwei Jahren in Cebu. (seit/seid)", a:["seit"], h:"Zeitangabe = seit."}
]);

/* ========================================================= */
/* 7 · FREIES SCHREIBEN MIT KI-KORREKTUR                        */
/* ========================================================= */

window.SCHREIB_PROMPTS = [
{id:"p-a2-brief", niveau:"A2", niveauColor:"#0a84ff", title:"Informeller Brief: Eine Einladung absagen", titleEn:"Informal letter: declining an invitation",
beschreibung:"Deine Freundin/dein Freund hat dich zu ihrer/seiner Geburtstagsfeier am Samstag eingeladen. Du kannst leider nicht kommen. Schreib eine kurze E-Mail (ca. 40-60 Wörter): Bedanke dich für die Einladung. Sag, warum du nicht kommen kannst. Schlag einen anderen Termin vor, um dich zu treffen.",
platzhalter:"Liebe/r …,\nvielen Dank für die Einladung …",
mindestwoerter:40,
aufgabe:{punkte:["Bedanken für die Einladung","Grund für die Absage nennen","anderen Termin vorschlagen"], briefform:true}
},
{id:"p-b1-bewerbung", niveau:"B1", niveauColor:"#bf5af2", title:"Formelle E-Mail: Bewerbung um einen Ausbildungsplatz", titleEn:"Formal email: applying for an apprenticeship",
beschreibung:"Du hast eine Anzeige für einen Ausbildungsplatz als Pflegefachkraft in Deutschland gesehen. Schreib eine formelle E-Mail an die Personalabteilung (ca. 80-100 Wörter): Stell dich kurz vor. Erkläre, warum du dich für diese Ausbildung interessierst. Frag nach den nächsten Schritten der Bewerbung.",
platzhalter:"Sehr geehrte Damen und Herren,\nmit großem Interesse habe ich Ihre Anzeige gelesen …",
mindestwoerter:80,
aufgabe:{punkte:["sich kurz vorstellen","Interesse an der Ausbildung begründen","nach nächsten Schritten fragen"], briefform:true}
},
{id:"p-b2-meinung", niveau:"B2", niveauColor:"#ff9f0a", title:"Meinungsäußerung: Ist Auswandern für die Karriere sinnvoll?", titleEn:"Opinion essay: is emigrating good for your career?",
beschreibung:"Viele Menschen verlassen ihr Heimatland, um im Ausland zu arbeiten oder eine Ausbildung zu machen. Schreib einen zusammenhängenden Text (ca. 150-180 Wörter) mit klarer Einleitung, Argumenten (auch ein Gegenargument) und einem Schluss mit deiner eigenen Meinung.",
platzhalter:"In den letzten Jahren entscheiden sich immer mehr Menschen dazu …",
mindestwoerter:150,
aufgabe:{punkte:["Einleitung mit Themennennung","mindestens zwei Argumente","ein Gegenargument","Schluss mit eigener Meinung"], briefform:false}
}
];

window.SCHREIB_TABLES = SCHREIB_SECTIONS;
window.SCHREIB_META = SCHREIB_META;
})();

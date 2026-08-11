window.LEVEL_DATA = {
level:"C1", color:"#c2185b",
title:"Deutsch C1 – Die Feinheit",
subtitle:"Stil, Präzision und die Sprache der Profis.",
subtitleEn:"Style, precision and professional-level German.",
topics:[

{id:"partizipc1", chip:"Partizipialkonstruktionen", title:"Erweiterte Partizipial­konstruktionen", titleEn:"Extended participial constructions",
explain:"<p>Auf C1 packst du ganze Relativsätze in ein einziges Attribut. Das ist <b>die</b> Struktur wissenschaftlicher und journalistischer Texte.</p><table class='wide'><tr><th>Relativsatz</th><th>Partizipialkonstruktion</th></tr><tr><td>die Mieten, <b>die</b> seit Jahren <b>steigen</b></td><td>die <b>seit Jahren steigenden</b> Mieten</td></tr><tr><td>der Test, <b>der von telc geprüft wurde</b></td><td>der <b>von telc geprüfte</b> Test</td></tr><tr><td>die Aufgabe, <b>die gelöst werden muss</b></td><td>die <b>zu lösende</b> Aufgabe</td></tr></table><p><b>Erkennungsmuster beim Lesen:</b> Artikel → langer Einschub → Nomen. Alles zwischen Artikel und Nomen gehört zusammen.</p><p class='en'>Pattern: article + long modifier + noun. Partizip I = active/ongoing, Partizip II = passive/completed, zu + Partizip I = must/can be done.</p>",
merk:"Artikel … langer Einschub … Nomen → als Relativsatz auspacken, dann verstehst du jeden Satz.",
merkEn:"Article … long insertion … noun → unpack it as a relative clause.",
q:[
{q:"„die in den letzten Jahren entstandenen Probleme“ = die Probleme, die …", o:["entstehen werden","in den letzten Jahren entstanden sind","man entstehen lässt"], c:1, h:"Partizip II → abgeschlossen, Perfekt."},
{q:"„der zu erwartende Gewinn“ bedeutet:", o:["der Gewinn, der erwartet wird / werden kann","der Gewinn, der erwartet hat","der Gewinn, der erwartete"], c:0, h:"zu + Partizip I = Notwendigkeit oder Möglichkeit, passivisch."},
{q:"Wandle um: „das Kind, das laut schreit“ →", o:["das geschriene Kind","das laut schreiende Kind","das zu schreiende Kind"], c:1, h:"aktiv, gleichzeitig → Partizip I."},
{type:"match", q:"Ordne die Konstruktion ihrer Bedeutung zu:", pairs:[["die steigenden Preise","Preise, die steigen"],["die gestiegenen Preise","Preise, die gestiegen sind"],["die zu senkenden Preise","Preise, die gesenkt werden müssen"],["die gesenkten Preise","Preise, die gesenkt wurden"]], h:"Partizip I = aktiv/laufend, Partizip II = abgeschlossen/passiv, zu+P I = muss geschehen."},
{type:"gap", q:"Relativsatz → Attribut: „die Firma, die international arbeitet“ = die international ___ Firma", a:["arbeitende"], h:"Infinitiv + d + Endung."}
]},

{id:"nominalc1", chip:"Nominalstil", title:"Nominalstil & Verbalstil", titleEn:"Nominal vs. verbal style — the register switch",
explain:"<p>Behörden, Wissenschaft und Zeitungen schreiben <b>nominal</b>, gesprochene Sprache ist <b>verbal</b>. C1 heißt: du kannst in beide Richtungen umschalten.</p><table class='wide'><tr><th>Verbal (Nebensatz)</th><th>Nominal (Präposition + Nomen)</th></tr><tr><td>weil die Preise steigen</td><td><b>wegen</b> der steigenden Preise / <b>aufgrund</b> des Preisanstiegs</td></tr><tr><td>obwohl man gewarnt hatte</td><td><b>trotz</b> der Warnung</td></tr><tr><td>nachdem die Prüfung beendet war</td><td><b>nach</b> Beendigung der Prüfung</td></tr><tr><td>indem man täglich übt</td><td><b>durch</b> tägliches Üben</td></tr><tr><td>wenn Sie sich verspäten</td><td><b>im Falle</b> einer Verspätung / <b>bei</b> Verspätung</td></tr><tr><td>damit die Qualität steigt</td><td><b>zur</b> Steigerung der Qualität</td></tr></table><p>Typische Nominalisierungs-Endungen: <b>-ung</b> (Beendigung), <b>-nahme</b> (Teilnahme), <b>-ion</b> (Reaktion), Infinitiv als Nomen (das Üben).</p><p class='en'>Formal German compresses clauses into preposition + noun. You must be able to switch both ways.</p>",
merk:"Prüfungstrick: Steht nach der Lücke ein Nomen → Präposition. Steht ein Verb am Ende → Nebensatz-Konnektor.",
merkEn:"Noun after the gap → preposition. Verb at the end → subordinating conjunction.",
q:[
{q:"„Aufgrund technischer Probleme fällt der Kurs aus.“ = Der Kurs fällt aus, ___", o:["obwohl es technische Probleme gibt","weil es technische Probleme gibt","damit es technische Probleme gibt"], c:1, h:"aufgrund = Grund → weil."},
{q:"„Nach Prüfung Ihrer Unterlagen melden wir uns.“ = Wir melden uns, ___", o:["bevor wir Ihre Unterlagen prüfen","nachdem wir Ihre Unterlagen geprüft haben","während wir Ihre Unterlagen prüfen"], c:1, h:"nach + Nomen → nachdem."},
{q:"Nominalisiere: „Er nahm an dem Kurs teil.“ → seine ___ an dem Kurs", o:["Teilnehmung","Teilnahme","Teilnehmen"], c:1, h:"teilnehmen → die Teilnahme."},
{type:"match", q:"Ordne den Nebensatz seiner nominalen Entsprechung zu:", pairs:[["weil es regnet","wegen des Regens"],["obwohl er krank war","trotz seiner Krankheit"],["indem man übt","durch Übung"],["bevor der Kurs beginnt","vor Kursbeginn"]], h:"weil→wegen, obwohl→trotz, indem→durch, bevor→vor."},
{type:"gap", q:"„…, um die Kosten zu senken“ = ___ Senkung der Kosten (Präposition + Artikel)", a:["zur"], h:"zu + der Senkung = zur Senkung."}
]},

{id:"redewiedergabe", chip:"Redewiedergabe", title:"Konjunktiv I & Redewiedergabe", titleEn:"Reported speech in full",
explain:"<p>Der Konjunktiv I signalisiert: <b>Das sagt jemand anderes — ich verbürge mich nicht dafür.</b> Pflicht in Nachrichten, Protokollen und wissenschaftlichen Referaten.</p><table class='wide'><tr><th>Zeit der Aussage</th><th>Form</th><th>Beispiel</th></tr><tr><td>Gegenwart</td><td>Stamm + <b>-e</b></td><td>Er sagte, er <b>habe</b> keine Zeit / <b>sei</b> krank / <b>komme</b> später.</td></tr><tr><td>Vergangenheit</td><td><b>habe/sei + Partizip II</b></td><td>Sie erklärte, sie <b>habe</b> das nicht <b>gewusst</b>.</td></tr><tr><td>Zukunft</td><td><b>werde + Infinitiv</b></td><td>Er kündigte an, er <b>werde</b> zurücktreten.</td></tr><tr><td>Form = Indikativ?</td><td>→ <b>Konjunktiv II</b></td><td>Sie sagten, sie <b>hätten</b> (nicht: haben) keine Zeit.</td></tr></table><p>Weitere Signale der Distanz: <b>angeblich, laut Angaben, dem Bericht zufolge, wie es heißt, soll</b> + Infinitiv.</p><p class='en'>Konjunktiv I marks that someone else said it. If the form looks identical to the indicative, switch to Konjunktiv II.</p>",
merk:"sei, habe, werde, könne — diese vier Formen tragen 90 % der indirekten Rede.",
merkEn:"sei, habe, werde, könne carry 90% of reported speech.",
q:[
{q:"„Wir haben nichts gewusst.“ → Die Politiker behaupteten, sie ___ nichts gewusst.", o:["haben","hätten","habe"], c:1, h:"haben = Indikativ-Form → Ersatzform hätten."},
{q:"„Ich werde zurücktreten.“ → Er kündigte an, er ___ zurücktreten.", o:["wird","werde","würde haben"], c:1, h:"Zukunft → werde + Infinitiv."},
{q:"Welcher Satz distanziert sich vom Gesagten?", o:["Er ist reich.","Er soll reich sein.","Er war reich."], c:1, h:"soll = man sagt, ich verbürge mich nicht."},
{type:"gap", q:"„Ich bin nicht schuld.“ → Der Angeklagte sagte, er ___ nicht schuld.", a:["sei"], h:"sein → sei."},
{type:"order", q:"Bilde die indirekte Rede: „Ich komme morgen.“", w:["Sie","sagte,","sie","komme","morgen"], a:["Sie sagte, sie komme morgen"], h:"Hauptsatz + Komma + Nebensatz mit Konjunktiv I."}
]},

{id:"irreal", chip:"als ob …", title:"Irreale Vergleichs- & Wunschsätze", titleEn:"Unreal comparisons and wishes",
explain:"<p><b>als ob / als wenn + Konjunktiv II</b> (Verb am Ende) — oder <b>als + Konjunktiv II</b> direkt nach „als“:</p><div class='ex'>Er tut so, <b>als ob</b> er alles <b>wüsste</b>. = Er tut so, <b>als wüsste</b> er alles.<br>Sie sah aus, <b>als hätte</b> sie geweint.</div><p><b>Irreale Wünsche:</b> Wenn ich doch mehr Zeit <b>hätte</b>! · <b>Hätte</b> ich doch mehr Zeit! · Ich wünschte, ich <b>könnte</b> fliegen.</p><p><b>Irreale Folge:</b> Er ist zu jung, <b>als dass</b> er das verstehen <b>könnte</b>.</p><p><b>Beinahe/fast:</b> Beinahe <b>wäre</b> ich zu spät <b>gekommen</b>. (Es ist NICHT passiert.)</p><p class='en'>als ob + Konjunktiv II with verb at the end; or als + Konjunktiv II immediately. Unreal wishes use doch/nur. beinahe + Konjunktiv II = it almost happened but didn't.</p>",
merk:"Nach „als“ ohne „ob“ kommt sofort das Verb: als wüsste er alles.",
merkEn:"After als without ob, the verb comes immediately.",
q:[
{q:"Er tut so, als ob er mich nicht ___.", o:["sieht","sähe","sah"], c:1, h:"als ob + Konjunktiv II, Verb ans Ende."},
{q:"Welche Variante ist korrekt?", o:["Er tut so, als er alles wüsste.","Er tut so, als wüsste er alles.","Er tut so, als ob wüsste er alles."], c:1, h:"als + Konjunktiv II direkt danach."},
{q:"„Beinahe wäre ich gestürzt“ bedeutet:", o:["Ich bin gestürzt.","Ich bin fast gestürzt, aber nichts passiert.","Ich stürze gleich."], c:1, h:"beinahe + Konjunktiv II = es ist nicht passiert."},
{type:"gap", q:"Irrealer Wunsch: Wenn ich doch mehr Geld ___!", a:["hätte","haette"], h:"haben → hätte."},
{type:"order", q:"Bilde den Satz:", w:["Sie","sah","aus,","als","hätte","sie","geweint"], a:["Sie sah aus, als hätte sie geweint"], h:"als + Konjunktiv II direkt: als hätte sie …"}
]},

{id:"konzessiv", chip:"es sei denn …", title:"Konditional & Konzessiv fein", titleEn:"Fine-grained conditions and concessions",
explain:"<table class='wide'><tr><th>Konnektor</th><th>Bedeutung</th><th>Beispiel</th></tr><tr><td><b>sofern / soweit</b></td><td>unter der Bedingung, dass</td><td>Sofern Sie einverstanden sind, beginnen wir.</td></tr><tr><td><b>es sei denn</b></td><td>außer wenn</td><td>Wir kommen, es sei denn, es regnet.</td></tr><tr><td><b>falls / im Falle, dass</b></td><td>für den Fall</td><td>Falls Sie Fragen haben, melden Sie sich.</td></tr><tr><td><b>auch wenn / selbst wenn</b></td><td>sogar unter dieser Bedingung</td><td>Selbst wenn er käme, wäre es zu spät.</td></tr><tr><td><b>wenngleich / obgleich</b></td><td>obwohl (gehoben)</td><td>Der Plan ist gut, wenngleich teuer.</td></tr><tr><td><b>ungeachtet</b> + G</td><td>trotz (sehr formell)</td><td>Ungeachtet aller Kritik hielt er daran fest.</td></tr></table><p><b>Ohne „wenn“:</b> <i><b>Hätten</b> Sie früher angerufen, <b>hätten</b> wir noch Plätze gehabt.</i> — Verb an Position 1 ersetzt „wenn“.</p><p class='en'>sofern = provided that · es sei denn = unless · selbst wenn = even if · wenngleich = although (formal). A conditional clause can drop wenn and start with the verb instead.</p>",
merk:"„es sei denn“ = die einzige Ausnahme. Alles andere gilt.",
merkEn:"es sei denn = unless — it names the single exception.",
q:[
{q:"Wir fahren morgen, ___ das Wetter ist schlecht.", o:["sofern","es sei denn","auch wenn"], c:1, h:"Ausnahme → es sei denn."},
{q:"___ er sich entschuldigt, verzeihe ich ihm nicht.", o:["Sofern","Selbst wenn","Falls"], c:1, h:"sogar dann nicht → selbst wenn."},
{q:"„Hätten Sie früher angerufen, …“ — was fehlt sinngemäß am Anfang?", o:["Wenn","Weil","Dass"], c:0, h:"Verb auf Position 1 = wenn-Satz ohne wenn."},
{type:"match", q:"Ordne zu:", pairs:[["sofern","unter der Bedingung, dass"],["es sei denn","außer wenn"],["selbst wenn","sogar dann, wenn"],["ungeachtet","trotz (formell)"]], h:"Vier verschiedene Nuancen von Bedingung und Einräumung."},
{type:"gap", q:"___ Sie einverstanden sind, unterschreiben wir heute. <span class='en'>(provided that)</span>", a:["sofern","soweit"], h:"sofern = unter der Bedingung."}
]},

{id:"passivc1", chip:"Passiversatz komplett", title:"Passiv & alle Ersatzformen", titleEn:"Passive and every alternative",
explain:"<table class='wide'><tr><th>Form</th><th>Beispiel</th><th>= Bedeutung</th></tr><tr><td><b>sich lassen</b> + Inf.</td><td>Das Problem <b>lässt sich lösen</b>.</td><td>kann gelöst werden</td></tr><tr><td><b>sein + zu</b> + Inf.</td><td>Der Antrag <b>ist einzureichen</b>.</td><td>muss eingereicht werden</td></tr><tr><td><b>-bar / -lich</b></td><td>Das ist <b>machbar</b> / <b>unverständlich</b>.</td><td>kann gemacht werden</td></tr><tr><td><b>gehören</b> + Partizip II</td><td>Das <b>gehört verboten</b>.</td><td>sollte verboten werden (wertend)</td></tr><tr><td><b>bekommen/kriegen</b>-Passiv</td><td>Er <b>bekam</b> das Buch <b>geschenkt</b>.</td><td>ihm wurde etwas geschenkt</td></tr><tr><td><b>man</b></td><td><b>Man</b> spricht hier Deutsch.</td><td>hier wird Deutsch gesprochen</td></tr><tr><td><b>Zustandspassiv</b></td><td>Das Fenster <b>ist geöffnet</b>.</td><td>Ergebnis, kein Vorgang</td></tr></table><p><b>Unpersönliches Passiv</b> (ohne Subjekt): <i>Es wird getanzt. · Hier wird nicht geraucht.</i></p><p class='en'>Seven ways to avoid naming the agent. sein+zu = must, sich lassen = can, gehören+P2 = ought to (judgmental), bekommen-passive puts the receiver first.</p>",
merk:"lässt sich = kann man · ist zu = muss man · gehört = sollte man (mit Empörung).",
merkEn:"lässt sich = can · ist zu = must · gehört = ought to (indignant).",
q:[
{q:"„Der Fehler kann behoben werden“ = Der Fehler ___ beheben.", o:["ist zu","lässt sich","gehört"], c:1, h:"kann → lässt sich."},
{q:"„Die Unterlagen müssen bis Freitag eingereicht werden“ = Die Unterlagen ___ bis Freitag ___.", o:["lassen sich … einreichen","sind … einzureichen","gehören … eingereicht"], c:1, h:"müssen → sein + zu + Infinitiv."},
{q:"„Er bekam den Preis verliehen“ heißt:", o:["Er verlieh den Preis.","Ihm wurde der Preis verliehen.","Er wollte den Preis verleihen."], c:1, h:"bekommen-Passiv: der Empfänger wird Subjekt."},
{type:"match", q:"Ordne Ersatzform und Bedeutung zu:", pairs:[["lässt sich lösen","kann gelöst werden"],["ist zu lösen","muss gelöst werden"],["gehört gelöst","sollte gelöst werden"],["ist gelöst","Ergebnis: fertig"]], h:"können, müssen, sollen, Zustand."},
{type:"gap", q:"Unpersönliches Passiv: Hier ___ nicht geraucht.", a:["wird"], h:"Es wird … / Hier wird …"}
]},

{id:"rektion", chip:"Rektion", title:"Rektion: Verben, Nomen & Adjektive", titleEn:"Government — which case and preposition a word demands",
explain:"<p>Auf C1 reicht es nicht, Verben mit Präposition zu kennen — auch <b>Nomen</b> und <b>Adjektive</b> haben feste Ergänzungen.</p><table class='wide'><tr><th>Verben</th><th>Nomen</th><th>Adjektive</th></tr><tr><td>bestehen <b>auf</b> + D<br>bestehen <b>aus</b> + D<br>sich beziehen <b>auf</b> + A<br>hinweisen <b>auf</b> + A<br>verfügen <b>über</b> + A<br>zweifeln <b>an</b> + D<br>gelten <b>als</b> + N</td><td>die Frage <b>nach</b> + D<br>der Anspruch <b>auf</b> + A<br>der Grund <b>für</b> + A<br>das Interesse <b>an</b> + D<br>die Auswirkung <b>auf</b> + A<br>der Zweifel <b>an</b> + D</td><td>abhängig <b>von</b> + D<br>zuständig <b>für</b> + A<br>überzeugt <b>von</b> + D<br>reich <b>an</b> + D<br>fähig <b>zu</b> + D<br>gespannt <b>auf</b> + A</td></tr></table><p><b>Achtung Bedeutungswechsel:</b> bestehen <b>auf</b> (beharren) ≠ bestehen <b>aus</b> (zusammengesetzt sein) ≠ bestehen <b>in</b> (worin etwas liegt).</p><p class='en'>Not only verbs but also nouns and adjectives govern fixed prepositions. The preposition can change the meaning completely.</p>",
merk:"Ein Wort, drei Präpositionen, drei Bedeutungen — bestehen auf / aus / in. Immer im Kontext lernen.",
merkEn:"One verb, three prepositions, three meanings.",
q:[
{q:"Der Kurs besteht ___ vier Modulen.", o:["auf","aus","in"], c:1, h:"zusammengesetzt sein → bestehen aus + D."},
{q:"Ich bestehe ___ einer schriftlichen Antwort.", o:["auf","aus","für"], c:0, h:"beharren → bestehen auf + D."},
{q:"Sie ist ___ das Projekt zuständig.", o:["von","für","an"], c:1, h:"zuständig für + A."},
{type:"match", q:"Ordne Wort und Präposition zu:", pairs:[["abhängig","von + D"],["das Interesse","an + D"],["sich beziehen","auf + A"],["der Anspruch","auf + A"],["zweifeln","an + D"]], h:"Adjektiv, Nomen und Verben haben je feste Präpositionen."},
{type:"gap", q:"Er verfügt ___ ausgezeichnete Deutschkenntnisse. <span class='en'>(verfügen …)</span>", a:["über"], h:"verfügen über + Akkusativ."}
]},

{id:"konnektorenc1", chip:"Gehobene Konnektoren", title:"Konnektoren der gehobenen Sprache", titleEn:"Connectors of formal register",
explain:"<table class='wide'><tr><th>Konnektor</th><th>Bedeutung</th><th>Beispiel</th></tr><tr><td><b>zumal</b></td><td>besonders weil</td><td>Wir sollten früh fahren, zumal es regnet.</td></tr><tr><td><b>insofern / insoweit</b></td><td>in dieser Hinsicht</td><td>Er hat insofern recht, als die Kosten steigen.</td></tr><tr><td><b>indes / indessen</b></td><td>jedoch (gehoben)</td><td>Der Plan war gut, indes fehlte das Geld.</td></tr><tr><td><b>mithin / folglich</b></td><td>also, daher</td><td>Die Frist ist abgelaufen, mithin ist der Antrag ungültig.</td></tr><tr><td><b>geschweige denn</b></td><td>erst recht nicht</td><td>Er kann kaum lesen, geschweige denn schreiben.</td></tr><tr><td><b>nichtsdestotrotz</b></td><td>trotzdem</td><td>Es war teuer, nichtsdestotrotz hat es sich gelohnt.</td></tr><tr><td><b>sowohl … als auch / weder … noch</b></td><td>beides / keines</td><td>Weder Zeit noch Geld.</td></tr></table><p class='en'>These connectors mark academic and journalistic German. Recognize them in reading; use two or three actively and you sound C1.</p>",
merk:"Zwei bis drei dieser Wörter aktiv benutzen reicht — der Rest muss nur erkannt werden.",
merkEn:"Actively use two or three; just recognize the rest.",
q:[
{q:"Wir sollten absagen, ___ ohnehin kaum jemand kommt.", o:["zumal","indes","mithin"], c:0, h:"verstärkter Grund → zumal."},
{q:"Er kann kein Wort Deutsch, ___ einen Brief schreiben.", o:["nichtsdestotrotz","geschweige denn","insofern"], c:1, h:"Steigerung ins Negative → geschweige denn."},
{q:"„mithin“ bedeutet:", o:["trotzdem","folglich","obwohl"], c:1, h:"mithin = also, folglich."},
{type:"match", q:"Ordne zu:", pairs:[["zumal","besonders weil"],["indes","jedoch"],["mithin","folglich"],["nichtsdestotrotz","trotzdem"]], h:"Vier Register-Wörter der Schriftsprache."},
{type:"gap", q:"Die Frist ist abgelaufen, ___ ist der Antrag ungültig. <span class='en'>(therefore, formal)</span>", a:["mithin","folglich"], h:"Folge → mithin/folglich."}
]},

{id:"interpunktionc1", chip:"Interpunktion", title:"Interpunktion für Fortgeschrittene", titleEn:"Advanced punctuation",
explain:"<p><b>Komma bei Infinitivgruppen</b> — Pflicht, wenn die Gruppe mit <b>um, ohne, statt, anstatt, außer, als</b> eingeleitet wird oder von einem Nomen/Hinweiswort abhängt:</p><div class='ex'>Er ging<b>,</b> ohne sich zu verabschieden. · Ich habe keine Lust<b>,</b> das zu tun. · Sie kam<b>,</b> um zu helfen.</div><p><b>Komma bei Partizipgruppen</b> (freiwillig, aber üblich): <i>Vom Regen überrascht<b>,</b> suchten wir Schutz.</i></p><p><b>Semikolon</b> — enger als Punkt, weiter als Komma: <i>Der Plan war gut; das Geld fehlte.</i></p><p><b>Gedankenstrich</b> — Einschub oder Pause: <i>Der Vorschlag — so gut er klingt — ist zu teuer.</i></p><p><b>Doppelpunkt</b>: Ankündigung, danach groß bei ganzem Satz: <i>Eines ist klar: Wir müssen sparen.</i></p><p class='en'>Comma before infinitive groups with um/ohne/statt or when they depend on a noun. Semicolon links closely related clauses; dashes mark insertions.</p>",
merk:"Steht „um / ohne / statt“ vor dem zu-Infinitiv, steht davor immer ein Komma.",
merkEn:"um / ohne / statt before a zu-infinitive always take a comma.",
q:[
{q:"Wo fehlt das Komma? „Er verließ den Raum ohne ein Wort zu sagen.“", o:["vor „ohne“","vor „zu sagen“","kein Komma nötig"], c:0, h:"ohne … zu → Komma vor der Infinitivgruppe."},
{q:"Welche Satzzeichen sind korrekt? „Eines ist klar___ wir müssen handeln.“", o:[": Wir",", wir","; wir"], c:0, h:"Ankündigung → Doppelpunkt, ganzer Satz danach groß."},
{q:"Wofür steht das Semikolon?", o:["Für eine Aufzählung","Zwischen eng verwandten Hauptsätzen","Vor jedem Nebensatz"], c:1, h:"Enger als Punkt, weiter als Komma."},
{type:"gap", q:"Setze das fehlende Zeichen als Wort: „Ich habe keine Zeit___ dir zu helfen.“ → Antworte mit „Komma“ oder „kein Komma“.", a:["komma"], h:"Infinitivgruppe hängt von „keine Zeit“ ab → Komma."}
]},

{id:"wortbildungc1", chip:"Wortbildung", title:"Wortbildung: unbekannte Wörter knacken", titleEn:"Word formation — decode words you've never seen",
explain:"<table class='wide'><tr><th>Baustein</th><th>Wirkung</th><th>Beispiele</th></tr><tr><td><b>ver-</b></td><td>falsch machen / verändern</td><td>verlaufen, verschlafen, verbessern</td></tr><tr><td><b>ent-</b></td><td>weg, rückgängig</td><td>entfernen, entlassen, entspannen</td></tr><tr><td><b>zer-</b></td><td>kaputt</td><td>zerbrechen, zerstören</td></tr><tr><td><b>miss-</b></td><td>falsch, negativ</td><td>missverstehen, misslingen</td></tr><tr><td><b>-bar / -lich / -sam</b></td><td>Eigenschaft, „kann“</td><td>machbar, verständlich, sparsam</td></tr><tr><td><b>-ung / -heit / -keit / -schaft</b></td><td>Nomen</td><td>Wohnung, Freiheit, Möglichkeit, Freundschaft</td></tr><tr><td><b>-los / un-</b></td><td>ohne / Gegenteil</td><td>arbeitslos, unfähig</td></tr></table><p><b>Komposita von hinten lesen:</b> die <b>Arbeitszeitverkürzung</b> = eine Verkürzung der Arbeitszeit. Das letzte Wort bestimmt Artikel und Bedeutung.</p><p class='en'>Prefixes and suffixes carry predictable meaning. Compounds are read from the last element backwards — it determines gender and core meaning.</p>",
merk:"Das letzte Wort im Kompositum entscheidet: der Zeit + druck = der Zeitdruck.",
merkEn:"The last element of a compound decides gender and meaning.",
q:[
{q:"„sich verlaufen“ bedeutet:", o:["schnell laufen","sich verirren","weglaufen"], c:1, h:"ver- = etwas falsch machen."},
{q:"Welcher Artikel? „die Arbeitszeitverkürzung“ — warum die?", o:["wegen Arbeit","wegen Zeit","wegen Verkürzung"], c:2, h:"Das letzte Wort bestimmt den Artikel: die Verkürzung."},
{q:"„unverzichtbar“ heißt:", o:["man kann darauf verzichten","man kann nicht darauf verzichten","man hat verzichtet"], c:1, h:"un + verzicht + bar = kann nicht verzichtet werden."},
{type:"match", q:"Ordne Vorsilbe und Bedeutung zu:", pairs:[["ver-","falsch machen"],["ent-","wegnehmen / rückgängig"],["zer-","kaputt machen"],["miss-","negativ, falsch"]], h:"Vier Vorsilben, die hunderte Verben erklären."},
{type:"gap", q:"Nomen bilden: möglich → die ___", a:["möglichkeit","moeglichkeit"], h:"-lich → -lichkeit."}
]},

{id:"wortschatzc1", chip:"Wortschatz", title:"Wortschatz C1 nach Themen", titleEn:"C1 vocabulary by field",
explain:"<div class='vgrid'><div class='vbox'><h4>Argumentation</h4><ul><li>der Sachverhalt<span class='en'>state of affairs</span></li><li>die These / die Annahme<span class='en'>thesis / assumption</span></li><li>nachvollziehbar<span class='en'>comprehensible</span></li><li>schlüssig / stichhaltig<span class='en'>conclusive / valid</span></li><li>relativieren<span class='en'>to qualify</span></li><li>hinterfragen<span class='en'>to question critically</span></li></ul></div><div class='vbox'><h4>Wissenschaft & Analyse</h4><ul><li>die Erkenntnis<span class='en'>insight</span></li><li>die Hypothese<span class='en'>hypothesis</span></li><li>empirisch<span class='en'>empirical</span></li><li>der Zusammenhang<span class='en'>correlation</span></li><li>die Auswirkung auf<span class='en'>impact on</span></li><li>zurückführen auf<span class='en'>attribute to</span></li></ul></div><div class='vbox'><h4>Beruf & Verhandlung</h4><ul><li>die Zuständigkeit<span class='en'>responsibility</span></li><li>der Kompromiss<span class='en'>compromise</span></li><li>die Rahmenbedingungen<span class='en'>framework conditions</span></li><li>umsetzen / die Umsetzung<span class='en'>implement</span></li><li>abwägen<span class='en'>weigh up</span></li><li>eskalieren / deeskalieren<span class='en'>escalate</span></li></ul></div><div class='vbox'><h4>Pflege & Medizin (C1)</h4><ul><li>die Anamnese<span class='en'>medical history</span></li><li>die Indikation<span class='en'>indication</span></li><li>die Compliance<span class='en'>adherence</span></li><li>der Befund<span class='en'>findings</span></li><li>die Verlaufskontrolle<span class='en'>follow-up</span></li><li>die Aufklärung des Patienten<span class='en'>informed consent</span></li></ul></div></div>",
merk:"C1 heißt: abstrakt und präzise über Fachthemen sprechen — genau diese Wörter tragen das.",
merkEn:"C1 means discussing specialist topics precisely — these words carry it."},

{id:"redemittelc1", chip:"Redemittel", title:"Redemittel C1: präzise formulieren", titleEn:"C1 phrases — precision and nuance",
explain:"<div class='vgrid'><div class='vbox'><h4>Position beziehen</h4><ul><li>Ich vertrete die Auffassung, dass …<span class='en'>I take the view that</span></li><li>Es spricht einiges dafür, dass …<span class='en'>there is a case for</span></li><li>Ich halte es für fragwürdig, ob …<span class='en'>I find it questionable whether</span></li><li>Dem liegt die Annahme zugrunde, dass …<span class='en'>this is based on the assumption</span></li></ul></div><div class='vbox'><h4>Einschränken & abwägen</h4><ul><li>Das gilt allerdings nur, sofern …<span class='en'>this only applies provided</span></li><li>Man muss hier differenzieren zwischen …<span class='en'>one must distinguish between</span></li><li>Bei genauerer Betrachtung zeigt sich …<span class='en'>on closer inspection</span></li><li>Das lässt sich nicht pauschal beantworten.<span class='en'>no blanket answer</span></li></ul></div><div class='vbox'><h4>Auf andere eingehen</h4><ul><li>Ich kann Ihren Standpunkt nachvollziehen, allerdings …<span class='en'>I follow your point, however</span></li><li>Sie sprechen einen wichtigen Punkt an.<span class='en'>you raise an important point</span></li><li>Darf ich das kurz präzisieren?<span class='en'>may I clarify</span></li><li>Wenn ich Sie richtig verstehe, meinen Sie …<span class='en'>if I understand you correctly</span></li></ul></div><div class='vbox'><h4>Strukturieren & abschließen</h4><ul><li>Zunächst möchte ich auf … eingehen.<span class='en'>first I'd like to address</span></li><li>Darüber hinaus ist zu bedenken, dass …<span class='en'>furthermore it must be considered</span></li><li>Abschließend lässt sich festhalten, dass …<span class='en'>in conclusion it can be stated</span></li><li>Damit komme ich zu meinem Fazit.<span class='en'>this brings me to my conclusion</span></li></ul></div></div>",
merk:"C1 zeigt sich nicht an schweren Wörtern, sondern an Abstufung: „nur sofern“, „bei genauerer Betrachtung“.",
merkEn:"C1 shows in nuance, not in difficult words."}
,
{id:"feldermodell", chip:"Feldermodell", title:"Das Feldermodell: Vorfeld, Mittelfeld, Nachfeld", titleEn:"The topological field model",
explain:"<p>Der deutsche Satz hat feste Felder. Wer das versteht, macht nie wieder Wortstellungsfehler.</p><table class='wide'><tr><th>Vorfeld</th><th>Linke Klammer</th><th>Mittelfeld</th><th>Rechte Klammer</th><th>Nachfeld</th></tr><tr><td>Ich</td><td><b>habe</b></td><td>gestern meiner Mutter</td><td><b>geholfen</b></td><td>—</td></tr><tr><td>Gestern</td><td><b>habe</b></td><td>ich meiner Mutter</td><td><b>geholfen</b></td><td>—</td></tr><tr><td>—</td><td><b>Hast</b></td><td>du das gewusst</td><td>—</td><td>?</td></tr><tr><td>Ich</td><td><b>glaube</b></td><td>—</td><td>—</td><td><b>, dass er kommt</b></td></tr></table><p><b>Die Regeln:</b></p><ul><li><b>Vorfeld:</b> genau <b>ein</b> Element — nie zwei. Es kann Subjekt, Zeit, Ort oder ein ganzer Nebensatz sein.</li><li><b>Linke Klammer:</b> das konjugierte Verb (Position 2). Bei Ja/Nein-Fragen und Imperativ bleibt das Vorfeld leer.</li><li><b>Mittelfeld:</b> alles andere — hier gilt TEKAMOLO.</li><li><b>Rechte Klammer:</b> Partizip, Infinitiv oder trennbare Vorsilbe.</li><li><b>Nachfeld:</b> nur Nebensätze, Vergleiche und Nachträge: <i>Er ist größer <b>als ich</b>.</i></li></ul><p class='en'>Exactly one element in the front field; the conjugated verb forms the left bracket; the second verb part closes the right bracket; only subordinate clauses and comparisons may follow.</p>",
merk:"Im Vorfeld steht genau ein Element — dann kommt sofort das Verb.",
merkEn:"Exactly one element before the verb — never two.",
q:[
{q:"Welcher Satz ist falsch?", o:["Gestern habe ich gearbeitet.","Ich habe gestern gearbeitet.","Gestern ich habe gearbeitet."], c:2, h:"Zwei Elemente im Vorfeld — nicht erlaubt."},
{q:"Was steht in der rechten Klammer? „Ich habe ihn gestern angerufen.“", o:["habe","ihn","angerufen"], c:2, h:"Partizip schließt die Klammer."},
{q:"Was darf ins Nachfeld?", o:["das Subjekt","ein Nebensatz oder Vergleich","das Objekt"], c:1, h:"Nur Nebensätze, Vergleiche, Nachträge."},
{type:"order", q:"Baue den Satz mit „Morgen“ im Vorfeld:", w:["Morgen","werde","ich","den","Text","lesen"], a:["Morgen werde ich den Text lesen"], h:"Vorfeld → Verb → Mittelfeld → Infinitiv."}
]},

{id:"kohaesion", chip:"Textkohäsion", title:"Kohäsion: Wie ein Text zusammenhält", titleEn:"Cohesion — how a text holds together",
explain:"<p>Ein guter Text wiederholt keine Wörter, sondern verknüpft sie. Fünf Mittel:</p><table class='wide'><tr><th>Mittel</th><th>Beispiel</th></tr><tr><td><b>1 · Pronomen</b></td><td>Der Antrag kam gestern. <b>Er</b> wurde sofort bearbeitet.</td></tr><tr><td><b>2 · Synonyme &amp; Oberbegriffe</b></td><td>ein Hund → <b>das Tier</b> → <b>der Vierbeiner</b></td></tr><tr><td><b>3 · Pronominaladverbien</b></td><td>Er kündigte. <b>Damit</b> hatte niemand gerechnet.</td></tr><tr><td><b>4 · Konnektoren</b></td><td>… <b>Deshalb</b> … <b>Allerdings</b> … <b>Abschließend</b> …</td></tr><tr><td><b>5 · Wiederaufnahme mit dieser/jener</b></td><td>Zwei Vorschläge. <b>Dieser</b> ist teuer, <b>jener</b> günstig.</td></tr></table><p><b>Thema-Rhema:</b> Bekanntes steht vorn, Neues hinten. So entsteht ein Faden:</p><div class='ex'>Ich habe gestern <b>einen Brief</b> bekommen. <b>Der Brief</b> kam vom Amt. <b>Das Amt</b> verlangt Unterlagen.</div><p><b>Typischer Fehler auf C1:</b> zu viele „und dann“ und ständige Wortwiederholung. Prüfe jeden Absatz: Habe ich Pronomen und Konnektoren benutzt?</p><p class='en'>Cohesion is created by pronouns, synonyms, pronominal adverbs, connectors and demonstratives. Known information first, new information last.</p>",
merk:"Bekanntes vorn, Neues hinten — so entsteht ein roter Faden.",
merkEn:"Known information first, new information last.",
q:[
{q:"Welcher Text ist besser verknüpft?", o:["Ich kaufte ein Auto. Ich verkaufte das Auto. Das Auto war alt.","Ich kaufte ein Auto. Es war alt, deshalb verkaufte ich es wieder.","Auto gekauft. Auto alt. Auto verkauft."], c:1, h:"Pronomen + Konnektor statt Wiederholung."},
{q:"„Er wurde befördert. ___ hatte er lange gewartet.“", o:["Darauf","Dafür","Damit"], c:0, h:"warten auf → darauf."},
{q:"Was gehört ans Satzende?", o:["die bekannte Information","die neue Information","das Subjekt"], c:1, h:"Thema-Rhema: Neues hinten."},
{type:"match", q:"Ordne Mittel und Beispiel zu:", pairs:[["Pronomen","Der Brief … Er …"],["Oberbegriff","der Hund … das Tier"],["Pronominaladverb","Er kündigte. Damit …"],["Konnektor","Deshalb, allerdings"]], h:"Vier Wege, Sätze zu verknüpfen."}
]},

{id:"nominalphrase", chip:"Nominalphrase", title:"Komplexe Nominalphrasen", titleEn:"Complex noun phrases",
explain:"<p>Auf C1 begegnen dir Nominalphrasen, die einen ganzen Absatz komprimieren. Du musst sie <b>zerlegen</b> können.</p><div class='ex'><b>die</b> seit Jahren <b>von der Regierung geplante</b>, aber <b>immer wieder verschobene</b> Reform <b>des Gesundheitssystems</b></div><p><b>Zerlegen in vier Schritte:</b></p><ol><li><b>Kern finden</b> — das letzte Nomen vor dem Genitiv: <i>Reform</i></li><li><b>Artikel</b> davor: <i>die … Reform</i></li><li><b>Partizipattribute</b> auspacken: <i>die geplant wurde, aber verschoben wurde</i></li><li><b>Genitiv</b> anhängen: <i>… des Gesundheitssystems</i></li></ol><p>Ergebnis: <i>Die Reform des Gesundheitssystems, die seit Jahren von der Regierung geplant, aber immer wieder verschoben wurde.</i></p><p><b>Selbst bauen:</b> Für Aufsätze reicht meist eine Stufe — Adjektiv + Nomen + Genitiv: <i>die steigenden Kosten der Ausbildung</i>.</p><p class='en'>Find the head noun first, then unpack participle attributes into relative clauses, then attach the genitive. Read, don't panic.</p>",
merk:"Immer zuerst den Kern suchen — das Nomen, auf das alles zeigt.",
merkEn:"Always find the head noun first.",
q:[
{q:"Was ist der Kern? „die von vielen Experten kritisierte Entscheidung der Regierung“", o:["Experten","Entscheidung","Regierung"], c:1, h:"Alles beschreibt die Entscheidung."},
{q:"„die zu erwartenden Folgen des Klimawandels“ = die Folgen, die …", o:["den Klimawandel erwarten","erwartet werden müssen","erwartet haben"], c:1, h:"zu + Partizip I = passiv + müssen."},
{q:"Wie erkennst du den Kern einer Nominalphrase?", o:["Es ist das erste Wort","Das Nomen vor dem Genitiv","Das längste Wort"], c:1, h:"Der Kern trägt Artikel und Genitivergänzung."},
{type:"gap", q:"Kern nennen: „der von der Stadt finanzierte Bau der Brücke“ → der ___", a:["bau"], h:"Alles beschreibt den Bau."}
]},

{id:"ellipse", chip:"Ellipse", title:"Ellipse & sprachliche Ökonomie", titleEn:"Ellipsis — leaving words out",
explain:"<p>Fortgeschrittene Sprecher <b>lassen weg</b>, was doppelt wäre. Das klingt eleganter, nicht fauler.</p><table class='wide'><tr><th>Vollform</th><th>Ellipse</th></tr><tr><td>Ich gehe erst in die Schule und dann gehe ich nach Hause.</td><td>Ich gehe erst in die Schule und dann nach Hause.</td></tr><tr><td>Er kann gut singen und er kann gut tanzen.</td><td>Er kann gut singen und tanzen.</td></tr><tr><td>Sie hat den Brief geschrieben und sie hat ihn abgeschickt.</td><td>Sie hat den Brief geschrieben und abgeschickt.</td></tr></table><p><b>In der gesprochenen Sprache</b> fällt oft das Subjekt oder Verb weg: <i>Kommst du mit? — <b>Mach ich.</b></i> · <i><b>Alles klar?</b></i> · <i><b>Kein Problem.</b></i></p><p><b>In Überschriften und Notizen:</b> <i>Preise gestiegen. · Termin verschoben.</i> (Verb weggelassen)</p><p><b>Vorsicht:</b> Weglassen geht nur, wenn das fehlende Element <b>eindeutig</b> aus dem ersten Teil hervorgeht und beide Teile die <b>gleiche Form</b> hätten.</p><p class='en'>Leave out repeated elements — but only when the missing part is unambiguous and grammatically identical in both halves.</p>",
merk:"Weglassen ja — aber nur, wenn es eindeutig bleibt.",
merkEn:"Omit only what stays unambiguous.",
q:[
{q:"Welche Ellipse ist korrekt?", o:["Ich habe gekocht und gegessen.","Ich habe gekocht und ich gegessen.","Ich gekocht und gegessen habe."], c:0, h:"habe gilt für beide Partizipien."},
{q:"„Er ist müde und er ist hungrig.“ → Ellipse:", o:["Er ist müde und hungrig.","Er müde und hungrig.","Er ist müde und ist hungrig."], c:0, h:"ist wird nicht wiederholt."},
{q:"Wann ist eine Ellipse NICHT erlaubt?", o:["wenn beide Teile gleich sind","wenn unklar wird, was fehlt","in Überschriften"], c:1, h:"Eindeutigkeit ist die Bedingung."},
{type:"order", q:"Verkürze zu einer Ellipse:", w:["Sie","kann","singen","und","tanzen"], a:["Sie kann singen und tanzen"], h:"kann gilt für beide Verben."}
]}
]};

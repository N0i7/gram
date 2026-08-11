window.LEVEL_DATA = {
level:"B2", color:"#e0770a",
title:"Deutsch B2 – Die Meisterschaft",
subtitle:"Die Grammatik der gehobenen Sprache.",
subtitleEn:"The grammar of sophisticated German.",
topics:[

{id:"konj1", chip:"Indirekte Rede", title:"Konjunktiv I: indirekte Rede", titleEn:"Reported speech",
explain:"<p>In Nachrichten und Berichten zeigt der Konjunktiv I: Das hat jemand gesagt — keine Garantie, dass es stimmt.</p><div class='ex'>Direkt: „Ich <b>habe</b> keine Zeit und <b>bin</b> krank.“<br>Indirekt: Er sagte, er <b>habe</b> keine Zeit und <b>sei</b> krank.</div><p>Bildung: Stamm + <b>-e</b> (er gehe, er komme). sein → <b>sei</b>. Vergangenheit: <b>habe/sei + Partizip II</b>. Wenn die Form wie Indikativ aussieht → Konjunktiv II oder würde: Sie sagten, sie <b>hätten</b> keine Zeit.</p><p class='en'>Stem + -e for er/sie/es; sein → sei. Past: habe/sei + participle. If the form looks like normal present, switch to Konjunktiv II.</p>",
merk:"„Er sagte, er sei krank“ — sei, habe, könne sind die Signale der indirekten Rede.",
merkEn:"sei, habe, könne are the signals of reported speech.",
q:[
{q:"Er sagte, er ___ müde.", o:["ist","sei","wäre gewesen"], c:1, h:"sein → sei."},
{q:"Sie behauptet, sie ___ keine Zeit.", o:["hat","habe","hätte gehabt"], c:1, h:"haben → habe (3. Person Singular)."},
{q:"Der Minister sagte, er ___ das Problem lösen.", o:["werde","wird","würde werden"], c:0, h:"Futur → werde + Infinitiv."},
{q:"„Ich habe das nicht gewusst.“ → Sie sagte, sie ___ das nicht gewusst.", o:["hat","habe","sei"], c:1, h:"Vergangenheit → habe + Partizip II."},
{q:"„Wir haben keine Zeit.“ → Sie sagten, sie ___ keine Zeit.", o:["haben","hätten","habe"], c:1, h:"haben = Indikativ-Form → Ersatz: hätten."},
{type:"gap", q:"„Ich bin krank.“ → Er sagte, er ___ krank.", a:["sei"], h:"sein → sei."},
{type:"order", q:"Bilde die indirekte Rede aus „Ich habe keine Zeit.“", w:["Er","sagte,","er","habe","keine","Zeit"], a:["Er sagte, er habe keine Zeit"], h:"haben → habe (Konjunktiv I)."}
]},

{id:"konj2v", chip:"hätte gemacht", title:"Konjunktiv II der Vergangenheit", titleEn:"Would have — past conditional",
explain:"<p>Was gewesen wäre — aber nicht passiert ist: <b>hätte/wäre + Partizip II</b>.</p><div class='ex'>Wenn ich früher angefangen <b>hätte</b>, <b>wäre</b> ich jetzt fertig.<br>Ich <b>hätte</b> das anders <b>gemacht</b>.<br>Beinahe <b>wäre</b> ich zu spät <b>gekommen</b>.</div><p>Mit Modalverb: Er <b>hätte</b> kommen <b>können</b>. (Doppel-Infinitiv!)</p><p>Irrealer Vergleich: Er tut so, <b>als ob</b> er alles <b>wüsste</b>.</p><p class='en'>hätte/wäre + participle = would have. With modals: hätte + double infinitive. als ob + Konjunktiv II = as if.</p>",
merk:"hätte oder wäre? Gleiche Regel wie beim Perfekt: Bewegung → wäre.",
merkEn:"hätte or wäre? Same rule as Perfekt: movement → wäre.",
q:[
{q:"Wenn ich das gewusst ___, wäre ich gekommen.", o:["habe","hätte","hatte"], c:1, h:"irreale Vergangenheit → hätte gewusst."},
{q:"Ohne dich ___ ich die Prüfung nicht bestanden.", o:["hätte","wäre","würde"], c:0, h:"bestehen → haben → hätte bestanden."},
{q:"Beinahe ___ er zu spät gekommen.", o:["hätte","wäre","würde"], c:1, h:"kommen → sein → wäre gekommen."},
{q:"Du ___ mich anrufen können!", o:["hättest","wärst","würdest"], c:0, h:"Modalverb → hättest + kommen können."},
{q:"Er tut so, als ob er reich ___.", o:["ist","wäre","sei"], c:1, h:"als ob + Konjunktiv II: wäre."},
{type:"gap", q:"Ich ___ das anders gemacht. <span class='en'>(would have)</span>", a:["hätte","haette"], h:"machen → hätte gemacht."}
]},

{id:"passiv2", chip:"Passiversatz", title:"Passiv komplett + Ersatzformen", titleEn:"Full passive + passive alternatives",
explain:"<p>Alle Zeiten: wird gebaut · wurde gebaut · <b>ist gebaut worden</b> · muss gebaut werden.</p><p><b>Zustandspassiv</b> (Ergebnis): Das Fenster <b>ist geöffnet</b>.</p><p>Ersatzformen — gleiche Bedeutung, eleganter Stil:</p><table><tr><th>Form<span class='en'>form</span></th><th>Beispiel<span class='en'>example</span></th><th>= Bedeutung<span class='en'>= meaning</span></th></tr><tr><td><b>sich lassen</b> + Inf.</td><td>Das Problem <b>lässt sich lösen</b>.</td><td>kann gelöst werden</td></tr><tr><td><b>sein + zu</b> + Inf.</td><td>Der Antrag <b>ist einzureichen</b>.</td><td>muss eingereicht werden</td></tr><tr><td><b>-bar</b></td><td>Das ist <b>machbar</b>.</td><td>kann gemacht werden</td></tr></table><p class='en'>Zustandspassiv = state/result. Alternatives: sich lassen (can be done), sein + zu (must be done), -bar (doable).</p>",
merk:"lässt sich = kann man. ist zu = muss man.",
merkEn:"lässt sich = can be done. ist zu = must be done.",
q:[
{q:"„Das Problem kann gelöst werden“ = Das Problem ___ lösen.", o:["ist zu","lässt sich","muss sich"], c:1, h:"kann → lässt sich."},
{q:"„Die Rechnung muss bezahlt werden“ = Die Rechnung ___ bezahlen.", o:["lässt sich","ist zu","hat zu"], c:1, h:"muss → sein + zu."},
{q:"Vorgang oder Zustand? „Die Tür ist geschlossen.“", o:["Vorgangspassiv","Zustandspassiv"], c:1, h:"sein + Partizip II = Ergebnis/Zustand."},
{q:"Das Wasser ist trink___.", o:["-lich","-bar","-sam"], c:1, h:"-bar = kann getrunken werden."},
{q:"Die Regeln ___ von allen beachtet werden.", o:["müssen","haben","sind"], c:0, h:"Modal + Partizip + werden."},
{type:"gap", q:"Das Haus ist 1990 gebaut ___. (Passiv Perfekt)", a:["worden"], h:"ist + Partizip II + worden."},
{type:"match", q:"Ordne Ersatzform und Bedeutung zu:", pairs:[["lässt sich lösen","kann gelöst werden"],["ist einzureichen","muss eingereicht werden"],["ist machbar","kann gemacht werden"],["ist geöffnet","Zustand, Ergebnis"]], h:"lassen = können, sein+zu = müssen, -bar = können, sein+P2 = Zustand."}
]},

{id:"submodal", chip:"Er soll reich sein", title:"Subjektive Modalverben", titleEn:"Modal verbs for probability & hearsay",
explain:"<p>Modalverben können auch Vermutung und Gerücht ausdrücken:</p><table><tr><th>Verb<span class='en'>verb</span></th><th>Bedeutung<span class='en'>meaning</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>muss</b></td><td>fast sicher (95 %)</td><td>Er muss krank sein.</td></tr><tr><td><b>dürfte</b></td><td>wahrscheinlich (75 %)</td><td>Sie dürfte zu Hause sein.</td></tr><tr><td><b>könnte</b></td><td>möglich (50 %)</td><td>Das könnte stimmen.</td></tr><tr><td><b>soll</b></td><td>man sagt …</td><td>Er soll sehr reich sein.</td></tr><tr><td><b>will</b></td><td>er behauptet von sich</td><td>Er will alles wissen.</td></tr></table><p>Vergangenheit: Modal + <b>Infinitiv Perfekt</b>: Er muss das <b>gewusst haben</b>.</p><p class='en'>soll = allegedly (others say). will = he claims (I doubt it). Past: modal + past infinitive (gewusst haben).</p>",
merk:"soll = die Leute sagen es. will = er selbst sagt es (und ich zweifle).",
merkEn:"soll = people say. will = he himself claims (and I doubt it).",
q:[
{q:"Alle sagen, das Restaurant ist super. → Das Restaurant ___ super sein.", o:["will","soll","muss"], c:1, h:"Gerücht → soll."},
{q:"Er behauptet, er hat B2. Ich zweifle. → Er ___ B2 haben.", o:["soll","will","dürfte"], c:1, h:"Eigene Behauptung → will."},
{q:"Das Licht ist an — er ___ zu Hause sein.", o:["muss","soll","will"], c:0, h:"logischer Schluss, fast sicher → muss."},
{q:"„wahrscheinlich“ = welches Modalverb?", o:["könnte","dürfte","müsste"], c:1, h:"dürfte ≈ 75 % sicher."},
{type:"gap", q:"Er muss das ___ haben. (wissen → Vergangenheit)", a:["gewusst"], h:"Modal + Partizip II + haben."}
]},

{id:"nominal", chip:"wegen → weil", title:"Nominalisierung ↔ Verbalisierung", titleEn:"Nominal vs. verbal style",
explain:"<p>Formelle Texte nutzen Nomen statt Nebensätze — beide Richtungen musst du beherrschen:</p><table><tr><th>Präposition + Nomen<span class='en'>preposition + noun</span></th><th>= Nebensatz<span class='en'>= clause</span></th></tr><tr><td><b>wegen</b> des Regens</td><td><b>weil</b> es regnet</td></tr><tr><td><b>trotz</b> der Warnung</td><td><b>obwohl</b> man warnte</td></tr><tr><td><b>bei</b>m Lernen</td><td><b>wenn/während</b> ich lerne</td></tr><tr><td><b>nach</b> dem Essen</td><td><b>nachdem</b> wir gegessen hatten</td></tr><tr><td><b>zur</b> Verbesserung</td><td><b>um</b> … <b>zu</b> verbessern</td></tr><tr><td><b>durch</b> tägliches Üben</td><td><b>indem</b> man täglich übt</td></tr></table><p class='en'>Formal German compresses clauses into preposition + noun. Learn the pairs in both directions.</p>",
merk:"wegen→weil · trotz→obwohl · bei→wenn · nach→nachdem · zum→um zu · durch→indem.",
merkEn:"Learn these six pairs by heart.",
q:[
{q:"„Wegen der Krankheit“ = ?", o:["obwohl er krank ist","weil er krank ist","wenn er krank ist"], c:1, h:"wegen = Grund → weil."},
{q:"„Trotz des Regens gingen wir raus“ = ?", o:["Weil es regnete …","Obwohl es regnete …","Während es regnete …"], c:1, h:"trotz → obwohl."},
{q:"„Beim Kochen höre ich Musik“ = ?", o:["Während ich koche …","Nachdem ich gekocht habe …","Damit ich koche …"], c:0, h:"bei + Nomen → während/wenn."},
{q:"„Zur Verbesserung der Noten“ = ?", o:["weil die Noten besser sind","um die Noten zu verbessern","obwohl die Noten besser werden"], c:1, h:"zur + Nomen → um … zu."},
{q:"„Er lernt, indem er viel liest“ = ?", o:["durch vieles Lesen","trotz vielen Lesens","nach vielem Lesen"], c:0, h:"indem → durch + Nomen."},
{type:"gap", q:"„Nachdem wir gegessen hatten“ = ___ dem Essen", a:["nach"], h:"nachdem → nach + Dativ."},
{type:"match", q:"Ordne Nebensatz und Nominalstil zu:", pairs:[["weil es regnet","wegen des Regens"],["obwohl er krank ist","trotz seiner Krankheit"],["nachdem wir gegessen hatten","nach dem Essen"],["indem man übt","durch Üben"]], h:"weil→wegen, obwohl→trotz, nachdem→nach, indem→durch."}
]},

{id:"partizip", chip:"Partizipialattribute", title:"Partizipien als Adjektive", titleEn:"Participles as adjectives",
explain:"<p><b>Partizip I</b> (Infinitiv + d) = aktiv, gerade jetzt: die <b>steigenden</b> Preise (= Preise, die steigen).</p><p><b>Partizip II</b> = passiv/abgeschlossen: das <b>renovierte</b> Haus (= das renoviert wurde).</p><p><b>Erweitert</b> — typisch für Zeitungstexte: die <b>seit Jahren steigenden</b> Mieten · der <b>von telc geprüfte</b> Test.</p><div class='ex'>Lesestrategie: Artikel … langer Einschub … Nomen → als Relativsatz „auspacken“.</div><p class='en'>Partizip I = active/ongoing. Partizip II = passive/completed. Extended participles compress whole relative clauses — unpack them while reading.</p>",
merk:"-d = tut es gerade (aktiv). Partizip II = wurde getan (passiv).",
merkEn:"-d = doing it right now (active). Participle II = was done (passive).",
q:[
{q:"das ___ Kind (es lacht gerade)", o:["gelachte","lachende","lachend"], c:1, h:"aktiv, gleichzeitig → Partizip I + Endung."},
{q:"die ___ E-Mail (jemand hat sie geschrieben)", o:["schreibende","geschriebene","zu schreibende"], c:1, h:"abgeschlossen/passiv → Partizip II."},
{q:"„die steigenden Preise“ = die Preise, ___", o:["die gestiegen wurden","die steigen","die man steigt"], c:1, h:"Partizip I = aktiv: die steigen."},
{q:"„das von Gelai organisierte Fest“ = das Fest, ___", o:["das Gelai organisiert wurde","das von Gelai organisiert wurde","das Gelai organisieren wird"], c:1, h:"Partizip II → Passiv-Relativsatz."},
{q:"„die zu lösende Aufgabe“ bedeutet:", o:["die Aufgabe wurde gelöst","die Aufgabe muss gelöst werden","die Aufgabe löst sich"], c:1, h:"zu + Partizip I = muss/kann gemacht werden."},
{type:"gap", q:"kochen → das ___ Wasser (es kocht gerade)", a:["kochende"], h:"Infinitiv + d + Endung: kochende."}
]},

{id:"nomenverb", chip:"eine Rolle spielen", title:"Nomen-Verb-Verbindungen", titleEn:"Fixed noun-verb combinations",
explain:"<p>Feste Ausdrücke der formellen Sprache — als Ganzes lernen:</p><div class='ex'><b>eine Entscheidung treffen</b> (entscheiden) · <b>eine Frage stellen</b> (fragen) · <b>zur Verfügung stehen</b> (verfügbar sein) · <b>eine Rolle spielen</b> (wichtig sein) · <b>Rücksicht nehmen auf</b> (rücksichtsvoll sein) · <b>in Anspruch nehmen</b> (nutzen) · <b>Bescheid geben</b> (informieren) · <b>in Frage kommen</b> (möglich sein) · <b>Wert legen auf</b> (wichtig finden) · <b>Kritik üben an</b> (kritisieren)</div><p class='en'>Formal fixed expressions. Learn them as whole chunks — they appear constantly in B2 Sprachbausteine.</p>",
merk:"Das Verb ist hier fast leer — die Bedeutung steckt im Nomen.",
merkEn:"The verb is almost empty — the noun carries the meaning.",
q:[
{q:"eine Entscheidung ___", o:["machen","treffen","nehmen"], c:1, h:"eine Entscheidung treffen."},
{q:"Der Computer steht dir zur ___.", o:["Verfügung","Anspruch","Rolle"], c:0, h:"zur Verfügung stehen."},
{q:"Geld spielt eine große ___.", o:["Frage","Rolle","Kritik"], c:1, h:"eine Rolle spielen."},
{q:"Bitte gib mir ___, wenn du kommst.", o:["Antwort","Bescheid","Nachricht"], c:1, h:"Bescheid geben."},
{q:"Er nimmt keine Rücksicht ___ andere.", o:["für","auf","an"], c:1, h:"Rücksicht nehmen auf + Akkusativ."},
{type:"gap", q:"Darf ich eine Frage ___?", a:["stellen"], h:"eine Frage stellen."},
{type:"match", q:"Ordne Nomen und Verb zu:", pairs:[["eine Entscheidung","treffen"],["eine Frage","stellen"],["eine Rolle","spielen"],["Rücksicht","nehmen"],["Kritik","üben"]], h:"Feste Verbindungen — als Ganzes lernen."}
]},

{id:"konnektoren2", chip:"Konnektoren-System", title:"Das Konnektoren-System", titleEn:"Three ways to say everything",
explain:"<p>Jede Bedeutung hat drei Wege:</p><table><tr><th>Bedeutung<span class='en'>meaning</span></th><th>Nebensatz (Verb Ende)<span class='en'>sub. clause (verb last)</span></th><th>Hauptsatz (Pos. 1)<span class='en'>main clause (pos. 1)</span></th><th>Präposition<span class='en'>preposition</span></th></tr><tr><td>Grund</td><td>weil, da</td><td>deshalb, daher</td><td>wegen + G</td></tr><tr><td>Gegengrund</td><td>obwohl</td><td>trotzdem, dennoch</td><td>trotz + G</td></tr><tr><td>Folge</td><td>sodass</td><td>infolgedessen, also</td><td>infolge + G</td></tr><tr><td>Mittel</td><td>indem</td><td>dadurch</td><td>durch + A</td></tr><tr><td>Bedingung</td><td>wenn, falls, sofern</td><td>sonst, andernfalls</td><td>bei + D</td></tr></table><p class='en'>Trick for gap tests: verb at the end → subordinating word; verb right after → adverb; noun follows → preposition.</p>",
merk:"Schau, was nach der Lücke kommt: Verb am Ende → weil-Typ. Verb sofort → deshalb-Typ. Nomen → wegen-Typ.",
merkEn:"Look after the gap: verb at end → weil-type; verb next → deshalb-type; noun → wegen-type.",
q:[
{q:"Er hat viel gearbeitet, ___ er müde ist.", o:["deshalb","sodass","wegen"], c:1, h:"Folge + Verb am Ende → sodass."},
{q:"___ des Staus kam er zu spät.", o:["Weil","Obwohl","Wegen"], c:2, h:"Nomen folgt → Präposition: wegen."},
{q:"Man lernt eine Sprache, ___ man viel spricht.", o:["indem","dadurch","durch"], c:0, h:"Mittel + Nebensatz → indem."},
{q:"Beeil dich, ___ verpasst du den Bus!", o:["sodass","sonst","trotzdem"], c:1, h:"Warnung/Bedingung → sonst."},
{q:"___ er krank war, kam er zum Unterricht.", o:["Obwohl","Trotzdem","Trotz"], c:0, h:"Verb am Ende → obwohl. (Trotzdem wäre Hauptsatz, trotz + Nomen.)"},
{type:"gap", q:"Er ist krank. ___ arbeitet er. <span class='en'>(nevertheless — main clause)</span>", a:["trotzdem","dennoch"], h:"Hauptsatz-Konnektor → trotzdem."},
{type:"match", q:"Ordne Bedeutung und Konnektor-Typ zu:", pairs:[["weil","Nebensatz (Verb Ende)"],["deshalb","Hauptsatz (Verb folgt)"],["wegen","Präposition + Nomen"],["obwohl","Nebensatz (Verb Ende)"]], h:"Schau, was nach dem Wort kommt: Verb am Ende, Verb sofort, oder Nomen."}
]},

{id:"modalpartikel", chip:"doch · mal · eben", title:"Modalpartikeln", titleEn:"Flavoring particles — sound like a native",
explain:"<p>Kleine Wörter, große Wirkung — sie machen dein Deutsch natürlich:</p><table><tr><th>Partikel<span class='en'>particle</span></th><th>Wirkung<span class='en'>effect</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>doch</b></td><td>ermutigend</td><td>Komm doch mit!</td></tr><tr><td><b>mal</b></td><td>locker, beiläufig</td><td>Kannst du mal helfen?</td></tr><tr><td><b>ja</b></td><td>Überraschung</td><td>Das ist ja interessant!</td></tr><tr><td><b>eben/halt</b></td><td>resigniert</td><td>So ist es eben.</td></tr><tr><td><b>eigentlich</b></td><td>macht Fragen weicher</td><td>Was machst du eigentlich beruflich?</td></tr><tr><td><b>ruhig</b></td><td>beruhigend</td><td>Du kannst ruhig fragen.</td></tr></table><p class='en'>These particles carry attitude, not meaning: doch (encouraging), mal (casual), ja (surprise), eben (that's life), eigentlich (softens questions), ruhig (go ahead).</p>",
merk:"Modalpartikeln stehen fast immer in der Satzmitte, nie am Anfang.",
merkEn:"Particles sit in the middle of the sentence, never at the start.",
q:[
{q:"Ermutigung: „Probier ___ das Adobo!“", o:["doch mal","eben","ja"], c:0, h:"doch mal = freundliche Ermutigung."},
{q:"Überraschung: „Du sprichst ___ super Deutsch!“", o:["eben","ja","ruhig"], c:1, h:"ja = Überraschung."},
{q:"Resignation: „Deutsch ist ___ schwer.“", o:["mal","doch","halt"], c:2, h:"halt/eben = so ist es nun mal."},
{q:"Beruhigung: „Sie können ___ auf Englisch fragen.“", o:["ruhig","ja","eigentlich"], c:0, h:"ruhig = kein Problem, trau dich."},
{type:"gap", q:"Frage weicher machen: „Wo wohnst du ___?“ <span class='en'>(by the way)</span>", a:["eigentlich"], h:"eigentlich macht die Frage beiläufig."}
]}
,
{id:"konjtabelle", chip:"Konjunktiv-Tabelle", title:"Konjugationstabelle: Konjunktiv I & II", titleEn:"Subjunctive conjugation table",
explain:"<table class='wide'><tr><th>Verb<span class='en'>verb</span></th><th>Konjunktiv I (er/sie/es)<span class='en'>subjunctive I</span></th><th>Konjunktiv II<span class='en'>subjunctive II</span></th><th>Konjunktiv II Vergangenheit<span class='en'>subjunctive II, past</span></th></tr><tr><td><b>sein</b></td><td>sei</td><td>wäre</td><td>wäre gewesen</td></tr><tr><td><b>haben</b></td><td>habe</td><td>hätte</td><td>hätte gehabt</td></tr><tr><td><b>werden</b></td><td>werde</td><td>würde</td><td>wäre geworden</td></tr><tr><td><b>können</b></td><td>könne</td><td>könnte</td><td>hätte … können</td></tr><tr><td><b>müssen</b></td><td>müsse</td><td>müsste</td><td>hätte … müssen</td></tr><tr><td><b>wissen</b></td><td>wisse</td><td>wüsste</td><td>hätte gewusst</td></tr><tr><td><b>gehen</b></td><td>gehe</td><td>ginge / würde gehen</td><td>wäre gegangen</td></tr><tr><td><b>kommen</b></td><td>komme</td><td>käme / würde kommen</td><td>wäre gekommen</td></tr><tr><td><b>geben</b></td><td>gebe</td><td>gäbe / würde geben</td><td>hätte gegeben</td></tr><tr><td><b>lassen</b></td><td>lasse</td><td>ließe / würde lassen</td><td>hätte gelassen</td></tr></table><p class='en'>Konjunktiv I = reported speech (news). Konjunktiv II = unreal/polite. Old forms like ginge/käme/gäbe appear in formal texts — recognize them; in speech, würde + infinitive is fine.</p>",
merk:"es gäbe, es ginge, er käme — die alten Formen musst du lesen können, nicht sprechen.",
merkEn:"gäbe, ginge, käme — you must read these forms, not necessarily speak them."},

{id:"verbpraep3", chip:"bestehen aus …", title:"Verben mit Präposition (B2-Niveau)", titleEn:"B2 verbs with fixed prepositions",
explain:"<table class='wide'><tr><th>Verb<span class='en'>verb</span></th><th>Kasus<span class='en'>case</span></th><th>Beispiel<span class='en'>example</span></th><th>English<span class='en'>English</span></th></tr><tr><td><b>bestehen aus</b></td><td class='wd'>D</td><td>Der Kurs besteht aus vier Modulen.</td><td class='en'>consist of</td></tr><tr><td><b>bestehen auf</b></td><td class='wd'>D</td><td>Ich bestehe auf einer Antwort.</td><td class='en'>insist on</td></tr><tr><td><b>sich beziehen auf</b></td><td class='wa'>A</td><td>Ich beziehe mich auf Ihre E-Mail.</td><td class='en'>refer to</td></tr><tr><td><b>abhängen von</b></td><td class='wd'>D</td><td>Das hängt vom Wetter ab.</td><td class='en'>depend on</td></tr><tr><td><b>sich auseinandersetzen mit</b></td><td class='wd'>D</td><td>Er setzt sich mit dem Thema auseinander.</td><td class='en'>engage with</td></tr><tr><td><b>beitragen zu</b></td><td class='wd'>D</td><td>Sport trägt zur Gesundheit bei.</td><td class='en'>contribute to</td></tr><tr><td><b>sich einigen auf</b></td><td class='wa'>A</td><td>Wir einigen uns auf einen Termin.</td><td class='en'>agree on</td></tr><tr><td><b>verzichten auf</b></td><td class='wa'>A</td><td>Ich verzichte auf Zucker.</td><td class='en'>do without</td></tr><tr><td><b>leiden unter</b></td><td class='wd'>D</td><td>Sie leidet unter dem Stress.</td><td class='en'>suffer from</td></tr><tr><td><b>rechnen mit</b></td><td class='wd'>D</td><td>Wir rechnen mit Verspätung.</td><td class='en'>expect</td></tr><tr><td><b>sorgen für</b></td><td class='wa'>A</td><td>Er sorgt für seine Familie.</td><td class='en'>provide for</td></tr><tr><td><b>überzeugen von</b></td><td class='wd'>D</td><td>Sie überzeugt mich von der Idee.</td><td class='en'>convince of</td></tr></table><p class='en'>At B2 the preposition can change the meaning completely — bestehen aus (consist of) versus bestehen auf (insist on). Always learn verb, preposition and case as one unit.</p>",
merk:"bestehen aus = besteht daraus. bestehen auf = ich will es unbedingt. Präposition ändert die Bedeutung!",
merkEn:"The preposition changes the meaning: bestehen aus (consist) vs. bestehen auf (insist).",
q:[
{q:"Die Prüfung besteht ___ fünf Teilen.", o:["auf","aus","von"], c:1, h:"bestehen aus + D = zusammengesetzt sein."},
{q:"Ich beziehe mich ___ Ihren Artikel vom Montag.", o:["auf","an","zu"], c:0, h:"sich beziehen auf + A."},
{q:"Der Erfolg hängt ___ deiner Vorbereitung ab.", o:["an","von","mit"], c:1, h:"abhängen von + D."},
{q:"Wir müssen uns ___ einen Termin einigen.", o:["über","auf","für"], c:1, h:"sich einigen auf + A."},
{type:"gap", q:"Sport trägt ___ Gesundheit bei. (zu + der = ?)", a:["zur"], h:"beitragen zu + D: zur Gesundheit."}
]},

{id:"haeufigeverben4", chip:"Top-Verben", title:"Die 20 wichtigsten B2-Verben", titleEn:"The 20 key B2 verbs — the language of formal texts",
explain:"<div class='vgrid'><div class='vbox'><h4>Argumentieren</h4><ul><li>betonen<span class='en'>emphasize</span></li><li>behaupten<span class='en'>claim</span></li><li>feststellen<span class='en'>determine</span></li><li>nachweisen<span class='en'>prove</span></li><li>widersprechen<span class='en'>contradict</span></li></ul></div><div class='vbox'><h4>Entwicklung</h4><ul><li>zunehmen / abnehmen<span class='en'>increase/decrease</span></li><li>sich entwickeln<span class='en'>develop</span></li><li>sich herausstellen<span class='en'>turn out</span></li><li>sich verändern<span class='en'>change</span></li><li>wachsen / sinken<span class='en'>grow/sink</span></li></ul></div><div class='vbox'><h4>Ermöglichen & Verhindern</h4><ul><li>ermöglichen<span class='en'>enable</span></li><li>verhindern<span class='en'>prevent</span></li><li>fördern<span class='en'>promote</span></li><li>voraussetzen<span class='en'>require</span></li><li>berücksichtigen<span class='en'>consider</span></li></ul></div><div class='vbox'><h4>Struktur</h4><ul><li>zusammenfassen<span class='en'>summarize</span></li><li>vergleichen<span class='en'>compare</span></li><li>unterscheiden<span class='en'>distinguish</span></li><li>einschätzen<span class='en'>assess</span></li><li>begründen<span class='en'>justify</span></li></ul></div></div><p class='en'>These 20 abstract verbs form the backbone of every B2 reading text and discussion: claim, emphasize, prove, enable, prevent, summarize.</p>",
merk:"Diese Verben sind das Skelett jedes B2-Lesetextes und jeder Diskussion.",
merkEn:"These verbs are the skeleton of every B2 reading text and discussion."},

{id:"wortschatz4", chip:"Wortschatz", title:"Wortschatz nach Themen", titleEn:"Core B2 vocabulary — abstract topics",
explain:"<div class='vgrid'><div class='vbox'><h4>Medizin & Pflege</h4><ul><li>die Pflegekraft<span class='en'>caregiver/nurse</span></li><li>die Station / die Schicht<span class='en'>ward/shift</span></li><li>verabreichen<span class='en'>administer</span></li><li>die Vorsorgeuntersuchung<span class='en'>preventive checkup</span></li><li>chronisch / akut<span class='en'>chronic/acute</span></li><li>das Gesundheitswesen<span class='en'>healthcare system</span></li></ul></div><div class='vbox'><h4>Arbeitswelt</h4><ul><li>der Fachkräftemangel<span class='en'>skills shortage</span></li><li>die Anerkennung<span class='en'>recognition</span></li><li>die Vereinbarkeit von Familie und Beruf<span class='en'>work-life balance</span></li><li>die Führungskraft<span class='en'>manager</span></li><li>die Weiterbildung<span class='en'>further training</span></li><li>Verantwortung übernehmen<span class='en'>take responsibility</span></li></ul></div><div class='vbox'><h4>Umwelt & Wirtschaft</h4><ul><li>die Nachhaltigkeit<span class='en'>sustainability</span></li><li>erneuerbare Energien<span class='en'>renewables</span></li><li>der Verbraucher<span class='en'>consumer</span></li><li>die Nachfrage / das Angebot<span class='en'>demand/supply</span></li><li>die Inflation<span class='en'>inflation</span></li><li>verursachen<span class='en'>cause</span></li></ul></div><div class='vbox'><h4>Gesellschaft & Medien</h4><ul><li>der demografische Wandel<span class='en'>demographic change</span></li><li>die Integration<span class='en'>integration</span></li><li>das Vorurteil<span class='en'>prejudice</span></li><li>die Digitalisierung<span class='en'>digitalization</span></li><li>der Datenschutz<span class='en'>data protection</span></li><li>die Meinungsfreiheit<span class='en'>freedom of speech</span></li></ul></div></div><p class='en'>B2 vocabulary for abstract topics: the working world, healthcare, environment, economy, society and media — including the medical vocabulary nurses need.</p>",
merk:"B2 heißt: über abstrakte Themen sprechen können — genau diese Felder kommen in der Prüfung.",
merkEn:"B2 means discussing abstract topics — exactly these fields appear in the exam."}
,
{id:"redemittel4", chip:"Redemittel", title:"Redemittel: differenziert argumentieren", titleEn:"Sophisticated discussion language for B2",
explain:"<div class='vgrid'><div class='vbox'><h4>Meinung differenziert</h4><ul><li>Ich stehe dem eher kritisch/positiv gegenüber.<span class='en'>I'm rather critical/positive about it</span></li><li>Es kommt darauf an, ob …<span class='en'>it depends on whether</span></li><li>Man sollte berücksichtigen, dass …<span class='en'>one should consider that</span></li><li>Ich vertrete den Standpunkt, dass …<span class='en'>I hold the view that</span></li></ul></div><div class='vbox'><h4>Text & Argumente wiedergeben</h4><ul><li>In dem Text geht es um …<span class='en'>the text is about</span></li><li>Der Autor vertritt die Ansicht, dass …<span class='en'>the author argues that</span></li><li>Bemerkenswert finde ich, dass …<span class='en'>I find it remarkable that</span></li><li>Dem kann ich (nicht) zustimmen, denn …<span class='en'>I can(not) agree, because</span></li></ul></div><div class='vbox'><h4>Abwägen & Einwenden</h4><ul><li>Ein wichtiges Argument dafür/dagegen ist …<span class='en'>an important argument for/against</span></li><li>Man darf nicht vergessen, dass …<span class='en'>one must not forget</span></li><li>Das ist ein gutes Argument, aber …<span class='en'>good argument, but</span></li><li>Dabei wird übersehen, dass …<span class='en'>this overlooks that</span></li><li>Zwar …, aber …<span class='en'>admittedly …, but</span></li></ul></div><div class='vbox'><h4>Kompromiss & Abschluss</h4><ul><li>Vielleicht könnten wir uns darauf einigen, dass …<span class='en'>maybe we can agree that</span></li><li>Letztlich hängt es davon ab, …<span class='en'>ultimately it depends on</span></li><li>Zusammenfassend lässt sich sagen, dass …<span class='en'>in summary it can be said</span></li><li>Alles in allem überwiegen die Vorteile.<span class='en'>all in all the advantages outweigh</span></li></ul></div></div><p class='en'>Sophisticated discussion phrases: nuanced opinions, summarizing a text, raising objections, finding a compromise and closing a discussion.</p>",
merk:"B2 heißt: nicht nur „Ich finde“ — zeig Distanz und Abwägung: „Es kommt darauf an …“",
merkEn:"B2 means nuance: not just 'I think' — show weighing: 'It depends on …'",
q:[
{q:"Textwiedergabe: „Der Autor ___ die Ansicht, dass …“", o:["vertritt","verträgt","vertreibt"], c:0, h:"eine Ansicht vertreten = to hold a view."},
{q:"Differenziert statt plump: Welche Antwort ist B2-Niveau?", o:["Das ist gut.","Ich stehe dem eher kritisch gegenüber.","Nein."], c:1, h:"Differenzierung zeigt B2-Kompetenz."},
{q:"Einwand: „Das ist ein gutes Argument, ___ man die Kosten bedenken muss.“", o:["obwohl","aber ich finde, dass","deshalb"], c:1, h:"zustimmen + einschränken."},
{q:"Abschluss einer Diskussion:", o:["Zusammenfassend lässt sich sagen, dass …","Ich fange an mit …","Erstens …"], c:0, h:"Das Schluss-Signal für jede Prüfung."},
{type:"gap", q:"Es kommt darauf ___, ob man Zeit hat. <span class='en'>(it depends on)</span>", a:["an"], h:"ankommen auf → Es kommt darauf an."}
]}
,
{id:"adjpraep", chip:"stolz auf …", title:"Adjektive & Nomen mit Präposition", titleEn:"Adjectives and nouns with fixed prepositions",
explain:"<p>Nicht nur Verben, auch <b>Adjektive</b> und <b>Nomen</b> haben feste Präpositionen.</p><table class='wide'><tr><th>Adjektive<span class='en'>adjectives</span></th><th>Nomen<span class='en'>nouns</span></th></tr><tr><td>stolz <b>auf</b> + A<br>zufrieden <b>mit</b> + D<br>abhängig <b>von</b> + D<br>zuständig <b>für</b> + A<br>überzeugt <b>von</b> + D<br>interessiert <b>an</b> + D<br>bereit <b>zu</b> + D<br>verantwortlich <b>für</b> + A<br>reich <b>an</b> + D<br>böse <b>auf</b> + A</td><td>die Angst <b>vor</b> + D<br>das Interesse <b>an</b> + D<br>der Grund <b>für</b> + A<br>die Frage <b>nach</b> + D<br>der Anspruch <b>auf</b> + A<br>die Auswirkung <b>auf</b> + A<br>die Lust <b>auf</b> + A<br>der Zweifel <b>an</b> + D<br>die Antwort <b>auf</b> + A<br>die Erinnerung <b>an</b> + A</td></tr></table><p><b>Praktisch:</b> Oft passen Verb, Nomen und Adjektiv zusammen — <i>sich interessieren <b>für</b></i>, aber <i>das Interesse <b>an</b></i>. Die Präposition wechselt! Deshalb einzeln lernen.</p><p class='en'>Adjectives and nouns govern prepositions too — and the preposition can differ from the related verb: sich interessieren für BUT das Interesse an.</p>",
merk:"sich interessieren für — aber: das Interesse AN. Verb und Nomen können sich unterscheiden.",
merkEn:"The related verb and noun can take different prepositions.",
q:[
{q:"Ich bin sehr stolz ___ meine Schüler.", o:["über","auf","für"], c:1, h:"stolz auf + Akkusativ."},
{q:"Sind Sie zufrieden ___ dem Ergebnis?", o:["über","mit","von"], c:1, h:"zufrieden mit + Dativ."},
{q:"Er ist ___ das Projekt verantwortlich.", o:["für","auf","von"], c:0, h:"verantwortlich für + Akkusativ."},
{q:"„Ich habe keine Lust ___ Arbeit.“", o:["zu","auf","für"], c:1, h:"die Lust auf + Akkusativ."},
{type:"match", q:"Ordne Adjektiv und Präposition zu:", pairs:[["stolz","auf + A"],["zufrieden","mit + D"],["abhängig","von + D"],["zuständig","für + A"],["interessiert","an + D"]], h:"Fünf feste Verbindungen."},
{type:"gap", q:"„Sie hat Angst ___ der Prüfung.“", a:["vor"], h:"die Angst vor + Dativ."}
]},

{id:"zustandspassiv", chip:"Vorgang & Zustand", title:"Vorgangspassiv & Zustandspassiv", titleEn:"Process passive vs. state passive",
explain:"<p>Zwei Passivformen, die man leicht verwechselt:</p><table class='wide'><tr><th></th><th>Vorgangspassiv<span class='en'>process passive</span></th><th>Zustandspassiv<span class='en'>state passive</span></th></tr><tr><td><b>Form</b></td><td><b>werden</b> + Partizip II</td><td><b>sein</b> + Partizip II</td></tr><tr><td><b>Bedeutung</b></td><td>etwas passiert gerade</td><td>Ergebnis, fertiger Zustand</td></tr><tr><td><b>Beispiel</b></td><td>Die Tür <b>wird geöffnet</b>.<span class='en'>someone is opening it now</span></td><td>Die Tür <b>ist geöffnet</b>.<span class='en'>it stands open</span></td></tr><tr><td><b>Frage</b></td><td>Was passiert?</td><td>Wie ist es?</td></tr></table><p><b>Der Täter</b> im Vorgangspassiv: <b>von</b> + Dativ (Person) oder <b>durch</b> + Akkusativ (Mittel/Ursache):</p><div class='ex'>Das Haus wurde <b>von</b> einem Architekten geplant. <span class='small'>(Person)</span><br>Die Stadt wurde <b>durch</b> ein Erdbeben zerstört. <span class='small'>(Ursache)</span></div><p><b>Unpersönliches Passiv</b> — ohne Subjekt, wenn nur die Handlung zählt: <i>Hier <b>wird</b> nicht <b>geraucht</b>. Es <b>wird</b> gefeiert.</i></p><p class='en'>werden = the action is happening. sein = the resulting state. Agent: von + person, durch + cause.</p>",
merk:"wird = passiert gerade. ist = ist schon fertig.",
merkEn:"wird = happening now. ist = already done.",
q:[
{q:"„Das Fenster ist geöffnet.“ Was heißt das?", o:["Jemand öffnet es gerade.","Es steht offen.","Es wird gleich geöffnet."], c:1, h:"sein + Partizip = Zustand."},
{q:"„Der Brief ___ gerade geschrieben.“", o:["ist","wird","hat"], c:1, h:"Vorgang → werden."},
{q:"Täter: „Das Bild wurde ___ Picasso gemalt.“", o:["durch","von","mit"], c:1, h:"Person → von + Dativ."},
{q:"Ursache: „Der Wald wurde ___ das Feuer zerstört.“", o:["von","durch","mit"], c:1, h:"Ursache/Mittel → durch + Akkusativ."},
{type:"match", q:"Ordne zu:", pairs:[["Die Tür wird geschlossen.","Vorgang"],["Die Tür ist geschlossen.","Zustand"],["von einem Mann","Täter: Person"],["durch den Sturm","Ursache"]], h:"werden/sein und von/durch unterscheiden."}
]},

{id:"gerundivum", chip:"zu + Partizip I", title:"Das Gerundivum: die zu lösende Aufgabe", titleEn:"The gerundive — zu + present participle",
explain:"<p><b>zu + Partizip I + Adjektivendung</b> — eine sehr kompakte Struktur der Schriftsprache. Sie bedeutet immer: <b>etwas muss oder kann getan werden</b> (passivisch).</p><table class='wide'><tr><th>Gerundivum<span class='en'>gerundive</span></th><th>= Relativsatz<span class='en'>= relative clause</span></th></tr><tr><td>die <b>zu lösende</b> Aufgabe</td><td>die Aufgabe, die gelöst werden <b>muss</b></td></tr><tr><td>der <b>zu erwartende</b> Gewinn</td><td>der Gewinn, der erwartet werden <b>kann</b></td></tr><tr><td>die <b>einzureichenden</b> Unterlagen</td><td>die Unterlagen, die eingereicht werden <b>müssen</b></td></tr></table><p><b>Bei trennbaren Verben</b> rutscht das <i>zu</i> in die Mitte: einreichen → die <b>ein</b>zu<b>reichenden</b> Unterlagen.</p><p><b>Unterschied zum normalen Partizip I:</b></p><div class='ex'>die <b>lösende</b> Person = die Person, die löst <span class='small'>(aktiv)</span><br>die <b>zu lösende</b> Aufgabe = die Aufgabe, die gelöst werden muss <span class='small'>(passiv + müssen)</span></div><p class='en'>zu + present participle + ending = something that must or can be done. Common in official and academic writing.</p>",
merk:"Steht ein „zu“ vor dem Partizip I, heißt es immer: muss/kann gemacht werden.",
merkEn:"zu before the participle always means: must/can be done.",
q:[
{q:"„die zu bezahlende Rechnung“ = die Rechnung, die …", o:["bezahlt hat","bezahlt werden muss","bezahlend ist"], c:1, h:"zu + Partizip I = muss gemacht werden."},
{q:"Trennbares Verb: „ausfüllen“ → das ___ Formular", o:["zu ausfüllende","auszufüllende","ausfüllende zu"], c:1, h:"zu rutscht zwischen Vorsilbe und Stamm."},
{q:"Was ist der Unterschied? „die steigenden Preise“ vs. „die zu senkenden Preise“", o:["kein Unterschied","erstes aktiv, zweites muss passiv geschehen","beides passiv"], c:1, h:"Partizip I = aktiv, zu + Partizip I = passiv mit müssen."},
{type:"gap", q:"„die Aufgabe, die gelöst werden muss“ = die ___ lösende Aufgabe", a:["zu"], h:"zu + Partizip I."}
]},

{id:"komposita", chip:"Komposita", title:"Komposita: zusammengesetzte Wörter", titleEn:"Compound nouns",
explain:"<p>Deutsch klebt Wörter aneinander. Das <b>letzte</b> Wort bestimmt <b>Artikel und Grundbedeutung</b>, die davor beschreiben genauer.</p><div class='ex'>die Haus<b>tür</b> = eine Tür (nicht ein Haus) → <b>die</b> Tür → <b>die</b> Haustür<br>der Sommer<b>urlaub</b> = ein Urlaub → <b>der</b> Urlaub → <b>der</b> Sommerurlaub</div><p><b>Von hinten lesen:</b> die <b>Arbeitszeitverkürzung</b> = eine Verkürzung ← der Arbeitszeit. So knackst du jedes lange Wort.</p><p><b>Das Fugen-s</b> verbindet oft die Teile: Arbeit<b>s</b>platz, Geburt<b>s</b>tag, Liebe<b>s</b>brief, Universität<b>s</b>bibliothek. Regel: meist nach -ung, -heit, -keit, -schaft, -tum, -ion.</p><p><b>Andere Fugen:</b> -n (Sonne<b>n</b>schein), -er (Kind<b>er</b>garten), -e (Hund<b>e</b>hütte).</p><p><b>Was kann kombiniert werden?</b> Nomen+Nomen (Haustür), Adjektiv+Nomen (Großstadt), Verb+Nomen (Schlafzimmer), Präposition+Nomen (Nachmittag).</p><p class='en'>The last element decides gender and core meaning. Read compounds backwards. A linking -s often appears after -ung, -heit, -keit, -schaft.</p>",
merk:"Das letzte Wort entscheidet über den Artikel — immer.",
merkEn:"The last element always decides the article.",
q:[
{q:"Welcher Artikel? „___ Hausaufgabe“", o:["der","die","das"], c:1, h:"die Aufgabe → die Hausaufgabe."},
{q:"Welcher Artikel? „___ Sommerurlaub“", o:["der","die","das"], c:0, h:"der Urlaub → der Sommerurlaub."},
{q:"„die Arbeitszeitverkürzung“ ist eine …", o:["Arbeit","Zeit","Verkürzung"], c:2, h:"Das letzte Wort trägt die Bedeutung."},
{q:"Wo braucht man ein Fugen-s?", o:["Geburt_tag","Geburtstag","Geburtentag"], c:1, h:"Nach -t bei Geburt: Geburtstag."},
{type:"match", q:"Ordne Kompositum und Artikel zu:", pairs:[["Haustür","die"],["Sommerhaus","das"],["Schreibtisch","der"],["Kindergarten","der"]], h:"Immer das letzte Wort ansehen."}
]},

{id:"wortbildungb2", chip:"Vorsilben", title:"Wortbildung: Vorsilben & Endungen", titleEn:"Word formation: prefixes & suffixes",
explain:"<p>Mit Vorsilben und Endungen baust du aus einem Wort viele — und verstehst unbekannte Wörter.</p><table class='wide'><tr><th>Vorsilbe<span class='en'>prefix</span></th><th>Bedeutung<span class='en'>meaning</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>ver-</b></td><td>falsch machen / verändern</td><td>sich verlaufen, verschlafen, verbessern</td></tr><tr><td><b>ent-</b></td><td>weg / rückgängig</td><td>entfernen, entspannen, entlassen</td></tr><tr><td><b>zer-</b></td><td>kaputt</td><td>zerbrechen, zerreißen</td></tr><tr><td><b>miss-</b></td><td>falsch, negativ</td><td>missverstehen, misslingen</td></tr><tr><td><b>be-</b></td><td>macht ein Verb transitiv</td><td>antworten → beantworten (+ Akk.)</td></tr><tr><td><b>er-</b></td><td>Ergebnis erreichen</td><td>arbeiten → erarbeiten, finden → erfinden</td></tr></table><table class='wide'><tr><th>Endung<span class='en'>ending</span></th><th>macht daraus<span class='en'>creates</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>-ung</b> (die)</td><td>Nomen aus Verb</td><td>wohnen → die Wohnung</td></tr><tr><td><b>-heit / -keit</b> (die)</td><td>Nomen aus Adjektiv</td><td>frei → die Freiheit · möglich → die Möglichkeit</td></tr><tr><td><b>-er</b> (der)</td><td>Person oder Gerät</td><td>lehren → der Lehrer · drucken → der Drucker</td></tr><tr><td><b>-bar / -lich</b></td><td>Adjektiv: „kann man“</td><td>machbar, verständlich</td></tr><tr><td><b>-los / un-</b></td><td>ohne / Gegenteil</td><td>arbeitslos, unmöglich</td></tr><tr><td><b>-chen / -lein</b></td><td>Verkleinerung (immer das!)</td><td>das Häuschen, das Mädchen</td></tr></table><p class='en'>Prefixes and suffixes have predictable meanings. Note: -chen and -lein always make the word neuter — that's why it's das Mädchen.</p>",
merk:"-chen macht alles neutral: das Mädchen, das Brötchen — auch bei weiblichen Personen.",
merkEn:"-chen always makes a word neuter, even for female persons.",
q:[
{q:"„sich verlaufen“ heißt:", o:["schnell laufen","den Weg verlieren","weglaufen"], c:1, h:"ver- = etwas falsch machen."},
{q:"Welcher Artikel? „das Mädchen“ — warum?", o:["weil es weiblich ist","wegen -chen","zufällig"], c:1, h:"-chen macht immer neutral."},
{q:"„unverzichtbar“ = ?", o:["man kann verzichten","man kann nicht verzichten","man hat verzichtet"], c:1, h:"un + verzicht + bar."},
{q:"Nomen aus „möglich“:", o:["die Möglichung","die Möglichkeit","das Mögliche"], c:1, h:"-lich → -lichkeit."},
{type:"match", q:"Ordne Vorsilbe und Bedeutung zu:", pairs:[["ver-","falsch machen"],["ent-","weg / rückgängig"],["zer-","kaputt"],["miss-","negativ"]], h:"Vier produktive Vorsilben."}
]},

{id:"konjunktionaladverb", chip:"Konjunktionaladverbien", title:"Konjunktionaladverbien: deshalb, trotzdem, dennoch", titleEn:"Conjunctional adverbs",
explain:"<p>Diese Wörter verbinden zwei Hauptsätze — und stehen auf <b>Position 1</b>. Danach kommt <b>sofort das Verb</b>.</p><table class='wide'><tr><th>Bedeutung<span class='en'>meaning</span></th><th>Wörter<span class='en'>words</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td>Folge / Grund</td><td><b>deshalb, deswegen, daher, darum, folglich, somit</b></td><td>Es regnete, <b>deshalb blieben</b> wir zu Hause.</td></tr><tr><td>Gegensatz</td><td><b>trotzdem, dennoch, allerdings, jedoch</b></td><td>Es regnete, <b>trotzdem gingen</b> wir raus.</td></tr><tr><td>Ergänzung</td><td><b>außerdem, zudem, darüber hinaus, ferner</b></td><td>Der Kurs ist gut, <b>außerdem ist</b> er günstig.</td></tr><tr><td>Zeit</td><td><b>dann, danach, anschließend, inzwischen, vorher</b></td><td>Ich esse, <b>danach gehe</b> ich.</td></tr><tr><td>Alternative</td><td><b>sonst, andernfalls, stattdessen</b></td><td>Beeil dich, <b>sonst kommst</b> du zu spät.</td></tr></table><p><b>Der Unterschied zu Konjunktionen:</b></p><div class='ex'>… , <b>weil</b> es regnete. <span class='small'>(Nebensatz, Verb am Ende)</span><br>… , <b>denn</b> es regnete. <span class='small'>(Position 0, normale Wortstellung)</span><br>… , <b>deshalb blieben</b> wir. <span class='small'>(Position 1, Verb folgt sofort)</span></div><p class='en'>These adverbs occupy position 1, so the verb comes immediately after. This is what distinguishes them from weil (verb last) and denn (no change).</p>",
merk:"Nach deshalb, trotzdem, außerdem kommt sofort das Verb.",
merkEn:"After deshalb, trotzdem, außerdem the verb comes immediately.",
q:[
{q:"Welcher Satz ist richtig?", o:["…, deshalb ich blieb zu Hause.","…, deshalb blieb ich zu Hause.","…, deshalb zu Hause blieb ich."], c:1, h:"Nach deshalb steht sofort das Verb."},
{q:"Gegensatz: „Es war teuer, ___ habe ich es gekauft.“", o:["deshalb","trotzdem","außerdem"], c:1, h:"Unerwartet → trotzdem."},
{q:"Welches Wort ist KEIN Konjunktionaladverb?", o:["deswegen","weil","dennoch"], c:1, h:"weil leitet einen Nebensatz ein."},
{type:"order", q:"Baue den Satz:", w:["Es","war","spät,","deshalb","nahm","ich","ein","Taxi"], a:["Es war spät, deshalb nahm ich ein Taxi"], h:"Nach deshalb sofort das Verb: nahm ich."},
{type:"match", q:"Ordne Bedeutung und Wort zu:", pairs:[["Folge","deshalb"],["Gegensatz","trotzdem"],["Ergänzung","außerdem"],["Warnung","sonst"]], h:"Vier Verbindungstypen."}
]},

{id:"tempuswechsel", chip:"am-Progressiv", title:"Verlaufsform & Tempuswechsel", titleEn:"Progressive form & tense shifts in texts",
explain:"<p><b>Deutsch hat keine echte Verlaufsform</b> wie das englische „I am reading“. Stattdessen:</p><table class='wide'><tr><th>Mittel<span class='en'>device</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>gerade</b> (Standard)</td><td>Ich lese <b>gerade</b>. <span class='en'>I am reading</span></td></tr><tr><td><b>am-Progressiv</b> (umgangssprachlich)</td><td>Ich bin <b>am Lesen</b>. <span class='small'>(Nomen groß!)</span></td></tr><tr><td><b>dabei sein zu</b></td><td>Ich <b>bin dabei</b>, das Formular <b>auszufüllen</b>.</td></tr><tr><td><b>beim + Nomen</b></td><td><b>Beim Lesen</b> höre ich Musik.</td></tr></table><h3 class='sub' style='margin-top:14px'>Tempuswechsel im Text</h3><p>In längeren Texten wechselt man bewusst die Zeit:</p><ul><li><b>Präsens</b> für allgemeine Aussagen und lebendige Erzählung: <i>Deutsch <b>ist</b> nicht schwer.</i></li><li><b>Präteritum</b> als Erzählzeit im Schriftlichen: <i>Er <b>ging</b> zur Tür und <b>öffnete</b> sie.</i></li><li><b>Perfekt</b> beim Sprechen und für Ergebnisse mit Gegenwartsbezug: <i>Ich <b>habe</b> die Prüfung <b>bestanden</b>.</i></li><li><b>Plusquamperfekt</b> für Vorzeitiges: <i>Er <b>war</b> schon <b>gegangen</b>, als ich kam.</i></li></ul><p class='en'>German has no true continuous tense — use gerade, or colloquially the am-progressive. In texts, tenses shift deliberately: present for general truths, Präteritum for written narrative, Perfekt for spoken past.</p>",
merk:"„I am reading“ heißt einfach „Ich lese gerade“ — keine Extraform nötig.",
merkEn:"There is no continuous tense — just add gerade.",
q:[
{q:"„I am cooking“ auf Deutsch:", o:["Ich bin kochen.","Ich koche gerade.","Ich bin kochend."], c:1, h:"gerade + Präsens."},
{q:"Umgangssprachlich: „Ich bin ___ Arbeiten.“", o:["am","an","beim"], c:0, h:"am-Progressiv: am Arbeiten (groß)."},
{q:"Welche Zeit benutzt man in geschriebenen Geschichten?", o:["Perfekt","Präteritum","Futur I"], c:1, h:"Präteritum ist die Erzählzeit."},
{type:"gap", q:"„Ich bin gerade dabei, den Text ___ lesen.“", a:["zu"], h:"dabei sein + zu + Infinitiv."}
]}
]};

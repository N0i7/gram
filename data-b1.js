window.LEVEL_DATA = {
level:"B1", color:"#8e2de2",
title:"Deutsch B1 – Die Selbstständigkeit",
subtitle:"Passiv, Konjunktiv und komplexe Sätze.",
subtitleEn:"Passive, conditional and complex sentences.",
topics:[

{id:"genitiv", chip:"Genitiv", title:"Der Genitiv", titleEn:"The genitive — possession",
explain:"<p>Besitz (wessen?): der/das → <b>des … -s</b>, die → <b>der</b>.</p><div class='ex'>das Auto <b>des</b> Lehrer<b>s</b> · die Tasche <b>der</b> Frau · die Tür <b>des</b> Haus<b>es</b></div><p>Genitiv-Präpositionen: <b>wegen, trotz, während, (an)statt, innerhalb, außerhalb</b>.</p><div class='ex'><b>Wegen des</b> Regens bleiben wir zu Hause. · <b>Trotz der</b> Arbeit hat er Zeit.</div><p class='en'>Masculine/neuter add -s/-es to the noun. In spoken German, von + dative often replaces it (das Auto von Maria).</p>",
merk:"des + -s: Beim Genitiv maskulin/neutral bekommt auch das Nomen ein -s.",
merkEn:"With des, the noun itself also gets an -s.",
q:[
{q:"Das ist das Büro ___ Chefs.", o:["dem","des","der"], c:1, h:"maskulin → des Chefs."},
{q:"___ des schlechten Wetters bleiben wir hier.", o:["Trotz","Wegen","Während"], c:1, h:"Grund → wegen."},
{q:"Die Farbe ___ Autos gefällt mir.", o:["des","der","dem"], c:0, h:"das Auto → des Autos."},
{q:"___ der Prüfung darf man nicht sprechen.", o:["Wegen","Während","Statt"], c:1, h:"Zeitraum → während."},
{type:"gap", q:"die Frau → die Tasche ___ Frau", a:["der"], h:"feminin Genitiv → der."}
]},

{id:"adjektiv", chip:"Adjektivendungen", title:"Adjektivdeklination", titleEn:"Adjective endings — the full system",
ref:"adjektivdeklination",
explain:"<p>Drei Regeln statt 48 Formen:</p><p><b>1.</b> Nach der/die/das: nur <b>-e</b> oder <b>-en</b>. (der nett<b>e</b> Mann, den nett<b>en</b> Mann)</p><p><b>2.</b> Nach ein/kein/mein zeigt das Adjektiv das Geschlecht: ein nett<b>er</b> Mann, eine nett<b>e</b> Frau, ein nett<b>es</b> Kind.</p><p><b>3.</b> Dativ, Genitiv und Plural mit Artikel: <b>immer -en</b>. (mit dem nett<b>en</b> Mann, die nett<b>en</b> Leute)</p><p class='en'>Rule 1: after definite articles only -e/-en. Rule 2: after ein-words the adjective shows gender. Rule 3: dative, genitive, plural with article = always -en.</p>",
merk:"Im Zweifel: -en. Das stimmt in über der Hälfte aller Fälle.",
merkEn:"When in doubt: -en.",
q:[
{q:"Der ___ Mann wohnt hier.", o:["alter","alte","alten"], c:1, h:"Nach der: -e."},
{q:"Ich sehe einen ___ Film.", o:["gute","guter","guten"], c:2, h:"maskulin Akkusativ: einen guten Film."},
{q:"Das ist ein ___ Haus.", o:["schönes","schöne","schönen"], c:0, h:"Nach ein zeigt das Adjektiv das Geschlecht: das → -es."},
{q:"Ich fahre mit dem ___ Bus.", o:["neue","neuen","neuem"], c:1, h:"Dativ → immer -en."},
{q:"Die ___ Schüler lernen schnell.", o:["fleißige","fleißigen","fleißiger"], c:1, h:"Plural mit Artikel → -en."},
{type:"gap", q:"eine ___ Frau (nett)", a:["nette"], h:"feminin nach eine: -e."},
{type:"match", q:"Ordne Artikel und Adjektivendung zu (nett):", pairs:[["der ___ Mann","nette"],["ein ___ Mann","netter"],["dem ___ Mann","netten"],["ein ___ Kind","nettes"]], h:"Nach der: -e. Nach ein zeigt das Adjektiv das Geschlecht. Dativ: immer -en."}
]},

{id:"relativ", chip:"Relativsätze", title:"Relativsätze", titleEn:"Relative clauses — who/which/that",
ref:"pronomen_relativ",
explain:"<p>Relativpronomen = fast wie der Artikel: der, die, das, den, dem, denen. Das Verb geht ans Ende.</p><div class='ex'>Das ist der Kollege, <b>der</b> in Bohol wohnt. (er wohnt → Nominativ)<br>Das ist der Film, <b>den</b> ich gesehen habe. (ich sehe ihn → Akkusativ)<br>Die Frau, <b>der</b> ich geholfen habe … (ich helfe ihr → Dativ)</div><p>Mit Präposition: Der Freund, <b>mit dem</b> ich lerne. Die Stadt, <b>in der</b> ich wohne.</p><p class='en'>The case of the relative pronoun comes from its role INSIDE the relative clause. With prepositions, the preposition comes first and sets the case.</p>",
merk:"Frag im Relativsatz: Wer? → der. Wen? → den. Wem? → dem.",
merkEn:"Ask inside the clause: who? → der. Whom? → den. To whom? → dem.",
q:[
{q:"Das ist der Lehrer, ___ Deutsch unterrichtet.", o:["den","der","dem"], c:1, h:"er unterrichtet → Nominativ: der."},
{q:"Der Film, ___ ich gestern gesehen habe, war toll.", o:["der","den","dem"], c:1, h:"ich sehe ihn → Akkusativ: den."},
{q:"Die Frau, ___ das Auto gehört, ist nett.", o:["die","der","den"], c:1, h:"gehören + Dativ: der."},
{q:"Die Stadt, ___ ich wohne, heißt Cebu.", o:["in der","in die","wo die"], c:0, h:"wohnen in + Dativ: in der. (Auch möglich: wo)"},
{q:"Die Leute, ___ ich arbeite, sind freundlich.", o:["mit denen","mit den","mit die"], c:0, h:"Plural-Dativ: denen."},
{type:"gap", q:"Das Buch, ___ auf dem Tisch liegt, ist neu.", a:["das"], h:"es liegt → Nominativ neutral: das."},
{type:"order", q:"Baue den Relativsatz:", w:["Das","ist","der","Film,","den","ich","gestern","gesehen","habe"], a:["Das ist der Film, den ich gestern gesehen habe"], h:"ich sehe ihn → Akkusativ → den. Verb ans Ende."}
]},

{id:"passiv", chip:"Passiv", title:"Das Passiv", titleEn:"The passive voice",
explain:"<p>Die Handlung ist wichtig, nicht der Täter: <b>werden + Partizip II</b>.</p><table><tr><th>Zeit<span class='en'>tense</span></th><th>Form<span class='en'>form</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td>Präsens</td><td>wird + P II</td><td>Das Haus <b>wird renoviert</b>.</td></tr><tr><td>Präteritum</td><td>wurde + P II</td><td>Es <b>wurde</b> 1990 <b>gebaut</b>.</td></tr><tr><td>Perfekt</td><td>ist + P II + worden</td><td>Es <b>ist renoviert worden</b>.</td></tr><tr><td>Modal</td><td>Modal + P II + werden</td><td>Es <b>muss renoviert werden</b>.</td></tr></table><p>Täter mit <b>von</b>: Der Brief wurde <b>von</b> Gelai geschrieben.</p><p class='en'>werden + participle. The agent (if needed) takes von + dative.</p>",
merk:"Passiv Perfekt endet immer auf „worden“ — nicht „geworden“.",
merkEn:"Passive perfect ends in worden, not geworden.",
q:[
{q:"Das Formular ___ ausgefüllt.", o:["wird","ist","hat"], c:0, h:"Präsens Passiv: wird + Partizip II."},
{q:"Die Schule ___ 2025 gegründet.", o:["wird","wurde","ist"], c:1, h:"Vergangenheit: wurde gegründet."},
{q:"Das Auto ist repariert ___.", o:["geworden","worden","werden"], c:1, h:"Passiv Perfekt: worden."},
{q:"Die Hausaufgabe muss bis morgen gemacht ___.", o:["werden","worden","wird"], c:0, h:"Modal + Partizip II + werden."},
{q:"Der Brief wurde ___ meiner Freundin geschrieben.", o:["bei","von","durch"], c:1, h:"Täter → von + Dativ."},
{type:"gap", q:"Aktiv → Passiv: Man trennt hier den Müll. → Der Müll ___ hier getrennt.", a:["wird"], h:"Präsens Passiv: wird getrennt."},
{type:"match", q:"Ordne Zeit und Passivform zu:", pairs:[["Präsens","wird gebaut"],["Präteritum","wurde gebaut"],["Perfekt","ist gebaut worden"],["mit Modalverb","muss gebaut werden"]], h:"Perfekt Passiv endet auf worden."},
{type:"order", q:"Baue den Passivsatz:", w:["Das","Formular","muss","bis","Freitag","ausgefüllt","werden"], a:["Das Formular muss bis Freitag ausgefüllt werden"], h:"Modalverb Position 2, dann Partizip II + werden am Ende."}
]},

{id:"konj2", chip:"Konjunktiv II", title:"Konjunktiv II", titleEn:"Would, could, should — unreal & polite",
ref:"konjunktiv2",
explain:"<p>Für Höflichkeit, Wünsche, irreale Bedingungen und Ratschläge:</p><div class='ex'><b>wäre, hätte, könnte, müsste, sollte</b> — alle anderen Verben: <b>würde + Infinitiv</b></div><div class='ex'>Wenn ich reich <b>wäre</b>, <b>würde</b> ich ein Haus kaufen.<br>Du <b>solltest</b> mehr schlafen. (Ratschlag)<br>Ich <b>hätte</b> gern einen Termin. (höflich)</div><p class='en'>wäre/hätte/könnte for sein/haben/können — würde + infinitive for everything else. Used for politeness, wishes, unreal conditions, advice.</p>",
merk:"An deiner Stelle würde ich … — der perfekte Ratschlag-Satz.",
merkEn:"An deiner Stelle würde ich … = the perfect advice sentence.",
q:[
{q:"Wenn ich Zeit ___, würde ich kommen.", o:["habe","hätte","hatte"], c:1, h:"irreal → hätte."},
{q:"Du ___ mehr Wasser trinken. (Ratschlag)", o:["solltest","sollst","sollest"], c:0, h:"Ratschlag → solltest."},
{q:"___ Sie mir bitte helfen?", o:["Können","Könnten","Konnten"], c:1, h:"Höflich → könnten."},
{q:"Wenn er reich wäre, ___ er nicht mehr arbeiten.", o:["wird","würde","wurde"], c:1, h:"würde + Infinitiv."},
{q:"Ich wünschte, ich ___ fliegen.", o:["kann","konnte","könnte"], c:2, h:"irrealer Wunsch → könnte."},
{type:"gap", q:"Ich ___ gern einen Kaffee. <span class='en'>(polite: would have)</span>", a:["hätte","haette"], h:"haben → hätte."},
{type:"order", q:"Baue den irrealen Satz:", w:["Wenn","ich","reich","wäre,","würde","ich","reisen"], a:["Wenn ich reich wäre, würde ich reisen"], h:"wäre ans Ende des Nebensatzes, würde direkt nach dem Komma."}
]},

{id:"nebensatz2", chip:"obwohl · damit …", title:"Nebensätze: obwohl, damit, als, nachdem", titleEn:"More subordinate clauses",
explain:"<p>Alle schicken das Verb ans Ende:</p><table><tr><th>Konnektor<span class='en'>connector</span></th><th>Bedeutung<span class='en'>meaning</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>obwohl</b></td><td>Gegengrund</td><td>Obwohl er müde war, trainierte er.</td></tr><tr><td><b>damit / um…zu</b></td><td>Ziel</td><td>Ich spare, damit wir reisen können.</td></tr><tr><td><b>als</b></td><td>einmal, Vergangenheit</td><td>Als ich Kind war, …</td></tr><tr><td><b>wenn</b></td><td>immer / Zukunft</td><td>Wenn ich Zeit habe, …</td></tr><tr><td><b>nachdem</b></td><td>danach (+ Plusquamperfekt)</td><td>Nachdem ich gegessen hatte, ging ich.</td></tr><tr><td><b>bevor / während / bis</b></td><td>Zeit</td><td>Bevor ich esse, wasche ich die Hände.</td></tr></table><p class='en'>als = single event in the past; wenn = repeated or future. Same subject + goal? Use um…zu instead of damit.</p>",
merk:"als = einmal in der Vergangenheit. Alles andere: wenn.",
merkEn:"als = once in the past. Everything else: wenn.",
q:[
{q:"___ ich 18 war, habe ich den Führerschein gemacht.", o:["Wenn","Als","Während"], c:1, h:"einmalig, Vergangenheit → als."},
{q:"___ es regnet, nehme ich einen Schirm.", o:["Als","Wenn","Nachdem"], c:1, h:"immer wenn → wenn."},
{q:"Er arbeitet viel, ___ seine Familie ein besseres Leben hat.", o:["damit","um","weil"], c:0, h:"Ziel + anderes Subjekt → damit."},
{q:"Ich lerne Deutsch, ___ in Deutschland zu arbeiten.", o:["damit","um","dass"], c:1, h:"gleiches Subjekt → um … zu."},
{q:"___ er gegessen hatte, machte er die Hausaufgaben.", o:["Bevor","Nachdem","Während"], c:1, h:"Reihenfolge: erst essen, dann … → nachdem + Plusquamperfekt."},
{type:"gap", q:"Ich bleibe hier, ___ du zurückkommst. <span class='en'>(until)</span>", a:["bis"], h:"bis = until."},
{type:"order", q:"Baue den Satz mit obwohl:", w:["Obwohl","er","müde","war,","hat","er","trainiert"], a:["Obwohl er müde war, hat er trainiert"], h:"war ans Ende des Nebensatzes, Hauptsatz beginnt mit dem Verb."}
]},

{id:"infinitiv", chip:"zu + Infinitiv", title:"Infinitiv mit zu", titleEn:"Infinitive with zu",
explain:"<p>Nach vielen Verben und Ausdrücken: <b>zu + Infinitiv</b> am Satzende.</p><div class='ex'>Ich habe vergessen, die Tür <b>zu schließen</b>.<br>Es ist wichtig, pünktlich <b>zu sein</b>.<br>Ich habe keine Lust <b>zu kochen</b>.</div><p>Trennbare Verben: ein<b>zu</b>kaufen. Nach Modalverben: <b>kein</b> zu! (Ich muss arbeiten.)</p><p>Auch: <b>um … zu</b> (Ziel), <b>ohne … zu</b>, <b>statt … zu</b>.</p><p class='en'>zu + infinitive at the end. Separable verbs: einzukaufen. No zu after modal verbs!</p>",
merk:"Nach Modalverben nie „zu“: Ich muss arbeiten — nicht „zu arbeiten“.",
merkEn:"Never zu after modal verbs.",
q:[
{q:"Ich habe vor, morgen früh ___.", o:["aufstehen","aufzustehen","zu aufstehen"], c:1, h:"trennbar: auf-zu-stehen."},
{q:"Es macht Spaß, Deutsch ___.", o:["zu lernen","lernen","zum lernen"], c:0, h:"Es macht Spaß, … zu lernen."},
{q:"Ich muss jetzt ___.", o:["zu gehen","gehen","zu gehe"], c:1, h:"Nach Modalverb kein zu."},
{q:"Er ging, ___ etwas zu sagen.", o:["ohne","um","statt"], c:0, h:"ohne … zu = without doing."},
{type:"gap", q:"Ich versuche, jeden Tag ___ üben. (Wort mit z)", a:["zu"], h:"versuchen + zu + Infinitiv."}
]},

{id:"verbpraep", chip:"warten auf …", title:"Verben mit Präposition + wo/da", titleEn:"Verbs with fixed prepositions",
explain:"<p>Verb + Präposition + Fall als EIN Wort lernen: <b>warten auf</b> (A), <b>sich freuen auf/über</b> (A), <b>denken an</b> (A), <b>sich interessieren für</b> (A), <b>träumen von</b> (D), <b>Angst haben vor</b> (D), <b>sich kümmern um</b> (A), <b>teilnehmen an</b> (D).</p><div class='ex'>Sache: <b>Worauf</b> wartest du? — <b>Darauf</b>.<br>Person: <b>Auf wen</b> wartest du? — Auf <b>ihn</b>.</div><p class='en'>For things use wo(r)+prep / da(r)+prep. For persons use preposition + pronoun.</p>",
merk:"sich freuen AUF = Zukunft. sich freuen ÜBER = jetzt.",
merkEn:"freuen auf = looking forward (future). freuen über = happy about (now).",
q:[
{q:"Ich warte ___ den Bus.", o:["für","auf","an"], c:1, h:"warten auf + Akkusativ."},
{q:"Sie freut sich ___ das Geschenk. (Sie hat es gerade bekommen.)", o:["auf","über","für"], c:1, h:"jetzt → über."},
{q:"Er interessiert sich ___ Geschichte.", o:["für","über","an"], c:0, h:"sich interessieren für."},
{q:"___ denkst du? — An meine Familie.", o:["Woran","Worauf","Wovon"], c:0, h:"denken an → woran."},
{q:"Ich habe Angst ___ der Prüfung.", o:["von","vor","über"], c:1, h:"Angst haben vor + Dativ."},
{type:"gap", q:"Träumst du von Deutschland? — Ja, ich träume ___. (da + Präposition)", a:["davon"], h:"von → davon."},
{type:"match", q:"Ordne Verb und Präposition zu:", pairs:[["warten","auf + A"],["träumen","von + D"],["sich interessieren","für + A"],["teilnehmen","an + D"],["Angst haben","vor + D"]], h:"Verb + Präposition + Kasus immer zusammen lernen."}
]},

{id:"zweiteilig", chip:"je … desto", title:"Zweiteilige Konnektoren", titleEn:"Two-part connectors",
explain:"<p><b>nicht nur … sondern auch</b> · <b>sowohl … als auch</b> · <b>entweder … oder</b> · <b>weder … noch</b> (beide nicht!) · <b>zwar … aber</b> · <b>je … desto</b>.</p><div class='ex'>Cebu ist <b>nicht nur</b> schön, <b>sondern auch</b> günstig.<br>Er hat <b>weder</b> Zeit <b>noch</b> Geld.<br><b>Je</b> mehr du übst, <b>desto</b> besser wirst du.</div><p class='en'>weder…noch = neither…nor. je…desto = the more…the more (je + comparative, verb at end; desto + comparative + verb).</p>",
merk:"je + Verb ans Ende, desto + Verb sofort: Je mehr du übst, desto besser wirst du.",
merkEn:"je-clause: verb at the end. desto-clause: verb right after the comparative.",
q:[
{q:"Er spricht ___ Englisch ___ Deutsch. (beides!)", o:["weder … noch","sowohl … als auch","entweder … oder"], c:1, h:"beides → sowohl … als auch."},
{q:"Ich habe ___ Zeit ___ Lust. (beides nicht)", o:["weder … noch","nicht nur … sondern auch","zwar … aber"], c:0, h:"doppelte Verneinung → weder … noch."},
{q:"___ mehr ich lerne, ___ besser verstehe ich.", o:["Je … desto","Zwar … aber","Sowohl … desto"], c:0, h:"je … desto."},
{q:"Der Kurs ist ___ teuer, ___ sehr gut.", o:["weder … noch","zwar … aber","je … desto"], c:1, h:"Einschränkung → zwar … aber."},
{type:"gap", q:"___ du kommst mit, oder du bleibst hier. <span class='en'>(either)</span>", a:["entweder"], h:"entweder … oder."}
]}
,
{id:"deklination3", chip:"Deklination", title:"Die komplette Deklinationstabelle", titleEn:"The complete declension table — all 4 cases",
ref:"adjektivdeklination",
explain:"<table class='wide'><tr><th></th><th>maskulin<span class='en'>masculine</span></th><th>feminin<span class='en'>feminine</span></th><th>neutral<span class='en'>neuter</span></th><th>Plural<span class='en'>plural</span></th></tr><tr><td class='thn'>Nominativ</td><td class='tdn'>der gut<b>e</b> / ein gut<b>er</b> Mann</td><td class='tdn'>die/eine gut<b>e</b> Frau</td><td class='tdn'>das gut<b>e</b> / ein gut<b>es</b> Kind</td><td class='tdn'>die gut<b>en</b> Leute</td></tr><tr><td class='tha'>Akkusativ</td><td class='tda'><b>den/einen guten</b> Mann</td><td class='tda'>die/eine gut<b>e</b> Frau</td><td class='tda'>das gut<b>e</b> / ein gut<b>es</b> Kind</td><td class='tda'>die gut<b>en</b> Leute</td></tr><tr><td class='thd'>Dativ</td><td class='tdd'><b>dem/einem guten</b> Mann</td><td class='tdd'><b>der/einer guten</b> Frau</td><td class='tdd'><b>dem/einem guten</b> Kind</td><td class='tdd'><b>den guten</b> Leute<b>n</b></td></tr><tr><td class='thg'>Genitiv</td><td class='tdg'><b>des guten</b> Mann<b>es</b></td><td class='tdg'><b>der guten</b> Frau</td><td class='tdg'><b>des guten</b> Kind<b>es</b></td><td class='tdg'><b>der guten</b> Leute</td></tr></table><p>Relativpronomen (= fast wie Artikel):</p><table class='wide'><tr><th></th><th>m<span class='en'>masc.</span></th><th>f<span class='en'>fem.</span></th><th>n<span class='en'>neut.</span></th><th>Pl<span class='en'>plural</span></th></tr><tr><td class='thn'>Nom.</td><td class='tdn'>der</td><td class='tdn'>die</td><td class='tdn'>das</td><td class='tdn'>die</td></tr><tr><td class='tha'>Akk.</td><td class='tda'><b>den</b></td><td class='tda'>die</td><td class='tda'>das</td><td class='tda'>die</td></tr><tr><td class='thd'>Dat.</td><td class='tdd'><b>dem</b></td><td class='tdd'><b>der</b></td><td class='tdd'><b>dem</b></td><td class='tdd'><b>denen</b></td></tr><tr><td class='thg'>Gen.</td><td class='tdg'><b>dessen</b></td><td class='tdg'><b>deren</b></td><td class='tdg'><b>dessen</b></td><td class='tdg'><b>deren</b></td></tr></table><p class='en'>Blue = nominative, red = accusative, green = dative, purple = genitive. Adjective: dative/genitive/plural-with-article always -en.</p>",
merk:"Grün + Lila + Plural mit Artikel = Adjektiv immer -en.",
merkEn:"Green + purple + plural with article = adjective always -en."},

{id:"verbtabellen3", chip:"Verbtabelle", title:"Die 20 wichtigsten unregelmäßigen Verben (B1)", titleEn:"Top 20 irregular verbs — all three stems",
ref:"verbkonjugation",
explain:"<table class='wide'><tr><th>Infinitiv<span class='en'>infinitive</span></th><th>Präsens (er)<span class='en'>present (he)</span></th><th>Präteritum<span class='en'>simple past</span></th><th>Perfekt<span class='en'>present perfect</span></th><th>English<span class='en'>English</span></th></tr><tr><td>beginnen</td><td>beginnt</td><td>begann</td><td>hat begonnen</td><td class='en'>begin</td></tr><tr><td>bieten</td><td>bietet</td><td>bot</td><td>hat geboten</td><td class='en'>offer</td></tr><tr><td>bitten</td><td>bittet</td><td>bat</td><td>hat gebeten</td><td class='en'>request</td></tr><tr><td>bringen</td><td>bringt</td><td>brachte</td><td>hat gebracht</td><td class='en'>bring</td></tr><tr><td>denken</td><td>denkt</td><td>dachte</td><td>hat gedacht</td><td class='en'>think</td></tr><tr><td>empfehlen</td><td>empfiehlt</td><td>empfahl</td><td>hat empfohlen</td><td class='en'>recommend</td></tr><tr><td>entscheiden</td><td>entscheidet</td><td>entschied</td><td>hat entschieden</td><td class='en'>decide</td></tr><tr><td>gewinnen</td><td>gewinnt</td><td>gewann</td><td>hat gewonnen</td><td class='en'>win</td></tr><tr><td>halten</td><td>hält</td><td>hielt</td><td>hat gehalten</td><td class='en'>hold/stop</td></tr><tr><td>lassen</td><td>lässt</td><td>ließ</td><td>hat gelassen</td><td class='en'>let/leave</td></tr><tr><td>laufen</td><td>läuft</td><td>lief</td><td>ist gelaufen</td><td class='en'>run</td></tr><tr><td>steigen</td><td>steigt</td><td>stieg</td><td>ist gestiegen</td><td class='en'>climb/rise</td></tr><tr><td>sterben</td><td>stirbt</td><td>starb</td><td>ist gestorben</td><td class='en'>die</td></tr><tr><td>tragen</td><td>trägt</td><td>trug</td><td>hat getragen</td><td class='en'>carry/wear</td></tr><tr><td>treffen</td><td>trifft</td><td>traf</td><td>hat getroffen</td><td class='en'>meet</td></tr><tr><td>verbinden</td><td>verbindet</td><td>verband</td><td>hat verbunden</td><td class='en'>connect</td></tr><tr><td>vergleichen</td><td>vergleicht</td><td>verglich</td><td>hat verglichen</td><td class='en'>compare</td></tr><tr><td>verlieren</td><td>verliert</td><td>verlor</td><td>hat verloren</td><td class='en'>lose</td></tr><tr><td>wachsen</td><td>wächst</td><td>wuchs</td><td>ist gewachsen</td><td class='en'>grow</td></tr><tr><td>ziehen</td><td>zieht</td><td>zog</td><td>hat/ist gezogen</td><td class='en'>pull/move</td></tr></table><p class='en'>On B1 you must recognize Präteritum in reading and news texts — these 20 plus the A1/A2 basics cover most texts.</p>",
merk:"Präteritum brauchst du zum Lesen — Nachrichten und Geschichten sind voll davon.",
merkEn:"You need Präteritum for reading — news and stories are full of it."},

{id:"reflexivb1", chip:"Reflexiv + Präp.", title:"Reflexive Verben mit Präposition", titleEn:"Reflexive verbs with fixed prepositions",
ref:"pronomen_reflexiv",
explain:"<p>Auf B1 kombinieren sich reflexive Verben mit festen Präpositionen — das Trio <b>sich + Verb + Präposition</b> als Ganzes lernen:</p><table class='wide'><tr><th>Verb<span class='en'>verb</span></th><th>Kasus<span class='en'>case</span></th><th>Beispiel<span class='en'>example</span></th><th>English<span class='en'>English</span></th></tr><tr><td><b>sich bewerben um</b></td><td class='wa'>A</td><td>Ich bewerbe mich um die Stelle.</td><td class='en'>apply for</td></tr><tr><td><b>sich kümmern um</b></td><td class='wa'>A</td><td>Sie kümmert sich um die Kunden.</td><td class='en'>take care of</td></tr><tr><td><b>sich erinnern an</b></td><td class='wa'>A</td><td>Erinnerst du dich an mich?</td><td class='en'>remember</td></tr><tr><td><b>sich gewöhnen an</b></td><td class='wa'>A</td><td>Ich gewöhne mich an das Wetter.</td><td class='en'>get used to</td></tr><tr><td><b>sich beschweren über</b></td><td class='wa'>A</td><td>Er beschwert sich über den Lärm.</td><td class='en'>complain about</td></tr><tr><td><b>sich ärgern über</b></td><td class='wa'>A</td><td>Ich ärgere mich über den Stau.</td><td class='en'>be annoyed about</td></tr><tr><td><b>sich verlassen auf</b></td><td class='wa'>A</td><td>Du kannst dich auf mich verlassen.</td><td class='en'>rely on</td></tr><tr><td><b>sich unterhalten mit/über</b></td><td class='wd'>D/A</td><td>Wir unterhalten uns über Fußball.</td><td class='en'>chat with/about</td></tr><tr><td><b>sich beschäftigen mit</b></td><td class='wd'>D</td><td>Er beschäftigt sich mit KI.</td><td class='en'>occupy oneself with</td></tr><tr><td><b>sich treffen mit</b></td><td class='wd'>D</td><td>Ich treffe mich mit Freunden.</td><td class='en'>meet with</td></tr></table><p><b>Reziprok</b> (= gegenseitig, nur Plural): Wir treffen <b>uns</b>. Sie streiten <b>sich</b>. Wir kennen <b>uns</b> seit 2025.</p><p class='en'>Reciprocal use (each other) works only in plural: Wir treffen uns = we meet each other.</p>",
merk:"sich + Verb + Präposition = ein Paket. Nie einzeln lernen.",
merkEn:"sich + verb + preposition = one package. Never learn them separately.",
q:[
{q:"Ich bewerbe mich ___ die Stelle als Pfleger.", o:["für","um","auf"], c:1, h:"sich bewerben um + A."},
{q:"Sie kann sich nicht ___ das Klima gewöhnen.", o:["an","auf","mit"], c:0, h:"sich gewöhnen an + A."},
{q:"Wir unterhalten ___ oft über Deutschland.", o:["sich","uns","euch"], c:1, h:"wir → uns."},
{q:"„Wir kennen uns“ bedeutet:", o:["Jeder kennt sich selbst","Wir kennen einander","Wir kennen es"], c:1, h:"Reziprok: einander."},
{type:"gap", q:"Du kannst dich ___ mich verlassen. <span class='en'>(rely on)</span>", a:["auf"], h:"sich verlassen auf + A."}
]},

{id:"wortschatz3", chip:"Wortschatz", title:"Wortschatz nach Themen", titleEn:"Core B1 vocabulary by topic",
explain:"<div class='vgrid'><div class='vbox'><h4>Arbeit & Bewerbung</h4><ul><li>die Stellenanzeige<span class='en'>job ad</span></li><li>das Vorstellungsgespräch<span class='en'>job interview</span></li><li>die Berufserfahrung<span class='en'>work experience</span></li><li>der Arbeitsvertrag<span class='en'>contract</span></li><li>die Probezeit<span class='en'>probation</span></li><li>kündigen<span class='en'>to quit</span></li></ul></div><div class='vbox'><h4>Wohnen</h4><ul><li>die Kaution<span class='en'>deposit</span></li><li>der Mietvertrag<span class='en'>rental contract</span></li><li>die Nebenkosten<span class='en'>utilities</span></li><li>einziehen / ausziehen<span class='en'>move in/out</span></li><li>die Verkehrsanbindung<span class='en'>transport links</span></li><li>sich beschweren<span class='en'>complain</span></li></ul></div><div class='vbox'><h4>Gesundheit</h4><ul><li>die Untersuchung<span class='en'>examination</span></li><li>die Behandlung<span class='en'>treatment</span></li><li>die Krankenversicherung<span class='en'>health insurance</span></li><li>die Überweisung<span class='en'>referral</span></li><li>die Nebenwirkung<span class='en'>side effect</span></li><li>sich erholen<span class='en'>recover</span></li></ul></div><div class='vbox'><h4>Umwelt & Gesellschaft</h4><ul><li>die Umweltverschmutzung<span class='en'>pollution</span></li><li>der Klimawandel<span class='en'>climate change</span></li><li>die Mülltrennung<span class='en'>waste separation</span></li><li>das Gesetz<span class='en'>law</span></li><li>die Gleichberechtigung<span class='en'>equality</span></li><li>ehrenamtlich<span class='en'>voluntary</span></li></ul></div></div><p class='en'>B1 vocabulary by topic: work and applications, housing, health, environment and society. The B1 letter and speaking tasks revolve around these fields.</p>",
merk:"B1-Brief und B1-Gespräch drehen sich fast immer um diese vier Felder.",
merkEn:"The B1 letter and oral exam almost always revolve around these four fields."}
,
{id:"redemittel3", chip:"Redemittel", title:"Redemittel: Diskussion & Vor-/Nachteile", titleEn:"Discussion phrases & pros/cons — essential for the B1 oral exam",
explain:"<div class='vgrid'><div class='vbox'><h4>Meinung äußern</h4><ul><li>Ich bin der Meinung, dass …<span class='en'>I am of the opinion that</span></li><li>Ich bin davon überzeugt, dass …<span class='en'>I'm convinced that</span></li><li>Ich finde es wichtig/falsch, dass …<span class='en'>I find it important/wrong that</span></li><li>Aus meiner Sicht …<span class='en'>from my point of view</span></li></ul></div><div class='vbox'><h4>Vorteile & Nachteile</h4><ul><li>Ein großer Vorteil ist, dass …<span class='en'>a big advantage is that</span></li><li>Ein Nachteil könnte sein, dass …<span class='en'>a disadvantage could be that</span></li><li>Einerseits …, andererseits …<span class='en'>on the one hand … on the other</span></li><li>Dafür spricht … / Dagegen spricht …<span class='en'>in favor / against</span></li><li>Man muss auch bedenken, dass …<span class='en'>one must also consider</span></li></ul></div><div class='vbox'><h4>Diskutieren</h4><ul><li>Da stimme ich dir zu.<span class='en'>I agree with you</span></li><li>Da bin ich anderer Meinung.<span class='en'>I disagree</span></li><li>Das stimmt, aber …<span class='en'>true, but …</span></li><li>Wie siehst du das?<span class='en'>how do you see it?</span></li><li>Was hältst du davon?<span class='en'>what do you think of it?</span></li></ul></div><div class='vbox'><h4>Erfahrung & Beispiel</h4><ul><li>Ich habe die Erfahrung gemacht, dass …<span class='en'>my experience is that</span></li><li>Bei uns auf den Philippinen …<span class='en'>in the Philippines …</span></li><li>Ein Beispiel dafür ist …<span class='en'>an example of this is</span></li><li>Früher …, aber heute …<span class='en'>in the past …, but today</span></li><li>Zusammenfassend kann man sagen …<span class='en'>in summary one can say</span></li></ul></div></div><p class='en'>Phrases for the B1 oral exam: giving your opinion, listing advantages and disadvantages, discussing, and talking about your own experience.</p>",
merk:"Einerseits – andererseits + ein eigenes Beispiel = das Grundgerüst für Sprechen Teil 2.",
merkEn:"One hand / other hand + a personal example = the skeleton of oral part 2.",
q:[
{q:"Vorteile/Nachteile abwägen: „___ ist es praktisch, ___ ist es teuer.“", o:["Erstens … zweitens","Einerseits … andererseits","Entweder … oder"], c:1, h:"einerseits … andererseits."},
{q:"Höflich widersprechen:", o:["Das ist falsch!","Da bin ich anderer Meinung.","Du verstehst nichts."], c:1, h:"Höflich: Da bin ich anderer Meinung."},
{q:"„Ich bin davon überzeugt, ___ Sport gesund ist.“", o:["weil","dass","ob"], c:1, h:"überzeugt sein, dass …"},
{q:"Den Partner einbeziehen:", o:["Wie siehst du das?","Ich bin fertig.","Das war's."], c:0, h:"Rückfragen bringen Punkte in der Prüfung!"},
{type:"gap", q:"Ein großer ___ ist, dass man online von überall lernen kann. <span class='en'>(advantage)</span>", a:["vorteil"], h:"der Vorteil ↔ der Nachteil."}
]}
,
{id:"plusquamperfekt", chip:"Plusquamperfekt", title:"Plusquamperfekt & nachdem", titleEn:"Past perfect — the past before the past",
explain:"<p><b>hatte / war + Partizip II</b> — für das, was <b>vor</b> einem anderen Ereignis in der Vergangenheit passiert ist.</p><div class='ex'><b>Nachdem</b> ich die Prüfung <b>bestanden hatte</b>, feierte ich mit Freunden.<br>Er <b>war</b> schon <b>gegangen</b>, als ich ankam.</div><table class='wide'><tr><th>Zeit<span class='en'>tense</span></th><th>Form<span class='en'>form</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td>Perfekt</td><td>habe/bin + Partizip II</td><td>Ich habe gegessen.</td></tr><tr><td><b>Plusquamperfekt</b></td><td><b>hatte/war + Partizip II</b></td><td>Ich hatte gegessen.</td></tr></table><p>Die Regel für <b>nachdem</b>: Nebensatz im Plusquamperfekt, Hauptsatz im Präteritum oder Perfekt — die Zeiten sind immer verschoben.</p><p class='en'>hatte/war + participle. Use it with nachdem (after): the nachdem-clause is one step further back in time than the main clause. haben or sein follows the same rule as the Perfekt: movement and change of state take war.</p>",
merk:"nachdem = eine Stufe weiter zurück. Nachdem ich gegessen hatte, ging ich.",
merkEn:"nachdem = one step further back in time.",
q:[
{q:"Nachdem ich gegessen ___, ging ich schlafen.", o:["habe","hatte","war"], c:1, h:"essen → haben → hatte gegessen."},
{q:"Er ___ schon gegangen, als ich kam.", o:["hatte","war","ist"], c:1, h:"gehen = Bewegung → war gegangen."},
{q:"Welcher Satz ist korrekt?", o:["Nachdem ich aufstehe, frühstückte ich.","Nachdem ich aufgestanden war, frühstückte ich.","Nachdem ich aufgestanden bin, frühstückte ich."], c:1, h:"nachdem + Plusquamperfekt, Hauptsatz Präteritum."},
{q:"Wir ___ die Wohnung gefunden, bevor wir umzogen.", o:["haben","hatten","waren"], c:1, h:"finden → haben → hatten gefunden."},
{type:"gap", q:"Nachdem sie das Zertifikat bekommen ___, bewarb sie sich. <span class='en'>(had received)</span>", a:["hatte"], h:"bekommen → haben → hatte bekommen."}
]}
,
{id:"kommab1", chip:"Komma fein", title:"Komma: die Feinheiten", titleEn:"Commas: the finer points",
explain:"<p>Drei Regeln decken die gesamte deutsche Kommasetzung ab:</p><table class='wide'><tr><th>Regel<span class='en'>rule</span></th><th>Kurz<span class='en'>in short</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>1 · Haupt- + Nebensatz</b></td><td>Nebensatz (Verb am Ende) immer abtrennen — auch eingeschoben.</td><td>Elefanten<b>,</b> die grau sind<b>,</b> sind freundlich.</td></tr><tr><td><b>2 · Aufzählung</b></td><td>Komma zwischen den Teilen, <b>nicht</b> vor und/oder/sowie.</td><td>groß<b>,</b> grau<b>,</b> freundlich sowie hungrig</td></tr><tr><td><b>3 · Zusätze</b></td><td>Einschübe ohne Verb — oft mit <i>und zwar, nämlich, das heißt</i> — in Kommas.</td><td>Frau Schober<b>,</b> die Stallmeisterin<b>,</b> ist nett.</td></tr></table><p><b>Infinitivgruppen:</b> Komma bei <b>um, ohne, statt, anstatt</b> + zu: <i>Er ging<b>,</b> ohne zu grüßen.</i></p><p><b>Kein Komma</b> vor „und“ zwischen zwei Hauptsätzen mit gleichem Subjekt: <i>Ich stehe auf und gehe zur Arbeit.</i></p><p class='en'>Three rules cover all German commas: subordinate clauses, lists, insertions. Plus infinitive groups with um/ohne/statt.</p>",
merk:"Drei Gründe für ein Komma: Nebensatz, Aufzählung, Zusatz. Mehr gibt es nicht.",
merkEn:"Three reasons for a comma: subordinate clause, list, insertion.",
q:[
{q:"Welcher Satz ist korrekt?", o:["Der Mann der dort steht ist mein Chef.","Der Mann, der dort steht, ist mein Chef.","Der Mann, der dort steht ist mein Chef."], c:1, h:"Eingeschobener Relativsatz: Komma davor UND danach."},
{q:"„Er ging ohne sich zu verabschieden.“ Wo fehlt das Komma?", o:["vor „ohne“","vor „zu“","nirgends"], c:0, h:"Infinitivgruppe mit ohne … zu → Komma davor."},
{q:"Welcher Satz braucht KEIN Komma?", o:["Ich komme später weil ich arbeite.","Ich stehe auf und gehe zur Arbeit.","Er sagte dass er kommt."], c:1, h:"Zwei Hauptsätze mit und, gleiches Subjekt → kein Komma."},
{type:"match", q:"Ordne Satz und Komma-Grund zu:", pairs:[["Ich bleibe, weil es regnet.","Nebensatz"],["Brot, Milch, Käse","Aufzählung"],["Herr Franz, der Hausmeister, kam.","Zusatz"],["Sie kam, um zu helfen.","Infinitivgruppe"]], h:"Vier typische Komma-Situationen."},
{type:"gap", q:"„Ich weiß nicht ___ ob er kommt.“ — Komma oder nicht? Antworte „Komma“ oder „kein Komma“.", a:["komma"], h:"ob leitet einen Nebensatz ein → Komma."}
]}
,
{id:"pronominaladverb", chip:"dafür · worauf", title:"Pronominaladverbien: dafür, worauf, damit", titleEn:"Pronominal adverbs — da(r)- and wo(r)-",
explain:"<p>Wenn ein Verb eine feste Präposition hat und du auf eine <b>Sache</b> verweist, benutzt du nicht „auf es“, sondern <b>darauf</b>.</p><table class='wide'><tr><th></th><th>Sache<span class='en'>thing</span></th><th>Person<span class='en'>person</span></th></tr><tr><td><b>Frage</b></td><td><b>wo(r)</b> + Präposition<br><i>Worauf wartest du?</i></td><td>Präposition + <b>wen/wem</b><br><i>Auf wen wartest du?</i></td></tr><tr><td><b>Antwort</b></td><td><b>da(r)</b> + Präposition<br><i>Darauf.</i></td><td>Präposition + Pronomen<br><i>Auf ihn.</i></td></tr></table><p><b>Das r kommt dazu</b>, wenn die Präposition mit einem Vokal beginnt: <b>wor</b>auf, <b>dar</b>an, <b>wor</b>über — aber <b>wo</b>von, <b>da</b>mit, <b>da</b>für.</p><div class='ex'>Ich freue mich <b>darauf</b>. · <b>Womit</b> fährst du? — <b>Damit</b>. · Ich denke oft <b>daran</b>.</div><p><b>Vorausweisend</b> vor einem Nebensatz: <i>Ich freue mich <b>darauf</b>, dass du kommst.</i> · <i>Es kommt <b>darauf</b> an, ob …</i></p><p class='en'>For things use wo(r)+preposition to ask and da(r)+preposition to answer. For people use the plain preposition + pronoun. An r is inserted before vowels.</p>",
merk:"Sache → darauf. Person → auf ihn. Nie „auf es“.",
merkEn:"Thing → darauf. Person → auf ihn. Never say auf es.",
q:[
{q:"„Ich warte auf den Bus.“ → Ich warte ___.", o:["auf ihn","darauf","worauf"], c:1, h:"Bus = Sache → darauf."},
{q:"„Ich warte auf meinen Bruder.“ → Ich warte ___.", o:["darauf","auf ihn","worauf"], c:1, h:"Person → auf ihn."},
{q:"Frage nach einer Sache: „___ denkst du?“", o:["An wen","Woran","Daran"], c:1, h:"denken an + Sache → woran."},
{q:"Welche Form ist richtig?", o:["woauf","worauf","wourauf"], c:1, h:"Vokal am Anfang → r einschieben: worauf."},
{type:"match", q:"Ordne Verb und Pronominaladverb zu:", pairs:[["warten auf","darauf"],["denken an","daran"],["träumen von","davon"],["sprechen über","darüber"]], h:"da + Präposition, mit r vor Vokal."},
{type:"gap", q:"„Interessierst du dich für Politik?“ — „Ja, ich interessiere mich sehr ___.“", a:["dafür"], h:"für + Sache → dafür."}
]},

{id:"platzhalteres", chip:"es", title:"Das Wörtchen „es“", titleEn:"The many uses of es",
explain:"<p><b>es</b> ist mehr als nur ein Pronomen. Vier Funktionen:</p><table class='wide'><tr><th>Funktion<span class='en'>function</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>1 · Pronomen</b> (ersetzt ein Nomen)</td><td>Das Buch? <b>Es</b> liegt dort.</td></tr><tr><td><b>2 · Wetter &amp; Zeit</b> (unpersönliche Verben)</td><td><b>Es</b> regnet. <b>Es</b> ist kalt. <b>Es</b> ist drei Uhr.</td></tr><tr><td><b>3 · Feste Ausdrücke</b></td><td><b>Es</b> gibt … · <b>Es</b> geht mir gut. · <b>Es</b> tut mir leid. · <b>Es</b> handelt sich um …</td></tr><tr><td><b>4 · Platzhalter</b> (steht für einen späteren Satz)</td><td><b>Es</b> ist wichtig, dass du übst.<br><b>Es</b> freut mich, dich zu sehen.</td></tr></table><p><b>Wichtig:</b> In Funktion 4 verschwindet das <i>es</i>, wenn der Nebensatz nach vorn kommt: <i><b>Dass</b> du übst, ist wichtig.</i></p><p><b>Unpersönliches Passiv:</b> <i><b>Es</b> wird getanzt.</i> — hier hat der Satz gar kein echtes Subjekt.</p><p class='en'>es works as a pronoun, as a dummy subject for weather and time, in fixed expressions, and as a placeholder announcing a following clause.</p>",
merk:"Wetter und Uhrzeit brauchen immer „es“: Es regnet. Es ist spät.",
merkEn:"Weather and time always need es.",
q:[
{q:"„___ regnet seit zwei Stunden.“", o:["Er","Es","Das"], c:1, h:"Wetter → immer es."},
{q:"Welche Funktion hat es hier? „Es ist wichtig, dass du kommst.“", o:["Pronomen","Platzhalter für den Nebensatz","Wetter"], c:1, h:"es kündigt den dass-Satz an."},
{q:"„___ gibt hier einen Supermarkt.“", o:["Es","Er","Da"], c:0, h:"es gibt + Akkusativ."},
{type:"gap", q:"„Wie geht ___ dir?“", a:["es"], h:"Fester Ausdruck: Es geht mir gut."}
]},

{id:"temporalsatz", chip:"Temporalsätze", title:"Temporalsätze: wann passiert was?", titleEn:"Time clauses",
explain:"<table class='wide'><tr><th>Konnektor<span class='en'>connector</span></th><th>Bedeutung<span class='en'>meaning</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>als</b></td><td>einmal in der Vergangenheit</td><td><b>Als</b> ich Kind war, wohnte ich in Berlin.</td></tr><tr><td><b>wenn</b></td><td>immer / Zukunft</td><td><b>Wenn</b> ich Zeit habe, rufe ich dich an.</td></tr><tr><td><b>während</b></td><td>gleichzeitig</td><td><b>Während</b> ich koche, hört er Musik.</td></tr><tr><td><b>bevor</b></td><td>davor</td><td><b>Bevor</b> ich esse, wasche ich die Hände.</td></tr><tr><td><b>nachdem</b></td><td>danach (Zeiten verschieben!)</td><td><b>Nachdem</b> ich gegessen <b>hatte</b>, ging ich.</td></tr><tr><td><b>seit(dem)</b></td><td>ab einem Zeitpunkt bis jetzt</td><td><b>Seitdem</b> ich hier wohne, bin ich glücklich.</td></tr><tr><td><b>bis</b></td><td>Endpunkt</td><td>Ich warte, <b>bis</b> du kommst.</td></tr><tr><td><b>sobald</b></td><td>sofort danach</td><td><b>Sobald</b> ich fertig bin, melde ich mich.</td></tr></table><p><b>Die zwei klassischen Fehler:</b> <i>als</i> nur für einmalige Ereignisse in der Vergangenheit — alles andere <i>wenn</i>. Und nach <i>nachdem</i> steht immer eine Zeitstufe weiter zurück (Plusquamperfekt + Präteritum).</p><p class='en'>als = one single past event; wenn = repeated or future. After nachdem the tenses always shift one step back.</p>",
merk:"als = einmal, damals. wenn = immer oder später.",
merkEn:"als = once in the past. wenn = always or in the future.",
q:[
{q:"„___ ich 18 wurde, bekam ich ein Auto.“", o:["Wenn","Als","Während"], c:1, h:"Einmaliges Ereignis in der Vergangenheit → als."},
{q:"„___ ich Zeit habe, lese ich.“ (immer)", o:["Als","Wenn","Nachdem"], c:1, h:"Wiederholung → wenn."},
{q:"„Nachdem er gegessen ___, ging er.“", o:["hat","hatte","ist"], c:1, h:"nachdem + Plusquamperfekt."},
{q:"„Ich bleibe, ___ du zurückkommst.“", o:["bis","seit","bevor"], c:0, h:"Endpunkt → bis."},
{type:"match", q:"Ordne Konnektor und Bedeutung zu:", pairs:[["bevor","davor"],["nachdem","danach"],["während","gleichzeitig"],["sobald","sofort danach"],["seitdem","ab damals bis jetzt"]], h:"Fünf Zeitverhältnisse."},
{type:"order", q:"Baue den Temporalsatz:", w:["Bevor","ich","schlafe,","lese","ich","ein","Buch"], a:["Bevor ich schlafe, lese ich ein Buch"], h:"Verb ans Ende des Nebensatzes, Hauptsatz beginnt mit dem Verb."}
]},

{id:"konditional", chip:"Konditionalsätze", title:"Konditionalsätze: wenn und falls", titleEn:"Conditional clauses",
explain:"<p>Bedingungen: <b>wenn</b> (normal), <b>falls</b> (weniger sicher), <b>sofern</b> (formell).</p><table class='wide'><tr><th>Typ<span class='en'>type</span></th><th>Form<span class='en'>form</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>real</b> (möglich)</td><td>Präsens + Präsens</td><td><b>Wenn</b> es regnet, bleiben wir zu Hause.</td></tr><tr><td><b>irreal</b> (Gegenwart)</td><td>Konjunktiv II</td><td><b>Wenn</b> ich Zeit <b>hätte</b>, <b>würde</b> ich kommen.</td></tr><tr><td><b>irreal</b> (Vergangenheit)</td><td>hätte/wäre + Partizip</td><td><b>Wenn</b> ich das <b>gewusst hätte</b>, <b>wäre</b> ich <b>gekommen</b>.</td></tr></table><p><b>Ohne „wenn“:</b> Das Verb rückt auf Position 1 — sehr elegant:</p><div class='ex'><b>Hätte</b> ich Zeit, würde ich kommen. <span class='small'>(= Wenn ich Zeit hätte …)</span><br><b>Regnet</b> es morgen, bleiben wir zu Hause.</div><p><b>sonst</b> nennt die Folge, wenn die Bedingung nicht erfüllt wird: <i>Beeil dich, <b>sonst</b> verpasst du den Bus.</i></p><p class='en'>wenn = if (real or unreal), falls = in case. You can drop wenn and start with the verb instead. sonst = otherwise.</p>",
merk:"Kein „wenn“? Dann steht das Verb vorn: Hätte ich Zeit, …",
merkEn:"Drop wenn and the verb moves to first position.",
q:[
{q:"Real: „___ es regnet, nehme ich einen Schirm.“", o:["Wenn","Als","Obwohl"], c:0, h:"Bedingung → wenn."},
{q:"Irreal: „Wenn ich reich ___, würde ich reisen.“", o:["bin","wäre","war"], c:1, h:"Irreal → Konjunktiv II: wäre."},
{q:"„___ ich das gewusst hätte!“ — welcher Typ?", o:["real","irreal Gegenwart","irreal Vergangenheit"], c:2, h:"hätte + Partizip = irreal Vergangenheit."},
{q:"„Beeil dich, ___ verpasst du den Zug.“", o:["falls","sonst","wenn"], c:1, h:"Negative Folge → sonst."},
{type:"order", q:"Baue den Satz ohne „wenn“:", w:["Hätte","ich","Zeit,","würde","ich","kommen"], a:["Hätte ich Zeit, würde ich kommen"], h:"Verb auf Position 1 ersetzt wenn."}
]},

{id:"konsekutiv", chip:"sodass · indem", title:"Folge & Art: sodass, indem, ohne dass", titleEn:"Consecutive and modal clauses",
explain:"<table class='wide'><tr><th>Typ<span class='en'>type</span></th><th>Konnektor<span class='en'>connector</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>Folge</b><span class='en'>result</span></td><td><b>sodass</b></td><td>Er sprach leise, <b>sodass</b> ich nichts verstand.</td></tr><tr><td><b>Folge (verstärkt)</b></td><td><b>so … dass</b></td><td>Er sprach <b>so</b> leise, <b>dass</b> ich nichts verstand.</td></tr><tr><td><b>Art &amp; Weise</b><span class='en'>how?</span></td><td><b>indem</b></td><td>Man lernt Deutsch, <b>indem</b> man täglich spricht.</td></tr><tr><td><b>fehlender Umstand</b></td><td><b>ohne dass / ohne … zu</b></td><td>Er ging, <b>ohne dass</b> ich es merkte.<br>Er ging, <b>ohne</b> sich <b>zu</b> verabschieden.</td></tr><tr><td><b>Ersatz</b></td><td><b>statt dass / statt … zu</b></td><td>Er spielt, <b>statt</b> zu lernen.</td></tr></table><p><b>Merkregel für indem:</b> Es antwortet auf die Frage <b>Wie?</b> — <i>Wie lernt man? Indem man übt.</i> Verwechsle es nicht mit <i>in dem</i> (Präposition + Artikel).</p><p><b>ohne … zu / statt … zu</b> nur bei <b>gleichem Subjekt</b>. Sonst: ohne dass / statt dass.</p><p class='en'>sodass = so that (result). indem = by doing (method). ohne…zu / statt…zu only when both clauses share the same subject.</p>",
merk:"indem antwortet auf „Wie?“ — es beschreibt die Methode.",
merkEn:"indem answers How? — it describes the method.",
q:[
{q:"„Er lernt viel, ___ er die Prüfung besteht.“ (Folge)", o:["indem","sodass","ohne dass"], c:1, h:"Folge → sodass."},
{q:"„Man verbessert sein Deutsch, ___ man viel liest.“", o:["sodass","indem","statt dass"], c:1, h:"Methode → indem."},
{q:"„Er verließ den Raum, ohne ___.“ (gleiches Subjekt)", o:["dass er etwas sagte","etwas zu sagen","er etwas sagt"], c:1, h:"Gleiches Subjekt → ohne … zu."},
{type:"match", q:"Ordne Konnektor und Frage zu:", pairs:[["sodass","Was ist die Folge?"],["indem","Wie macht man das?"],["ohne dass","Was fehlt dabei?"],["statt dass","Was macht er nicht?"]], h:"Folge, Methode, fehlender Umstand, Ersatz."}
]},

{id:"adjektivnomen", chip:"das Gute", title:"Adjektive als Nomen", titleEn:"Adjectives used as nouns",
explain:"<p>Fast jedes Adjektiv kann zum Nomen werden. Es wird <b>großgeschrieben</b> und behält die <b>Adjektivendung</b>.</p><table class='wide'><tr><th>Adjektiv<span class='en'>adjective</span></th><th>Person<span class='en'>person</span></th><th>Sache (immer neutral)<span class='en'>thing (always neuter)</span></th></tr><tr><td>alt</td><td>der Alt<b>e</b>, die Alt<b>e</b>, ein Alt<b>er</b></td><td>—</td></tr><tr><td>deutsch</td><td>der Deutsch<b>e</b>, ein Deutsch<b>er</b></td><td>—</td></tr><tr><td>gut</td><td>—</td><td>das Gut<b>e</b>, etwas Gut<b>es</b></td></tr><tr><td>neu</td><td>—</td><td>das Neu<b>e</b>, nichts Neu<b>es</b></td></tr></table><p><b>Nach etwas, nichts, viel, wenig</b> steht die Endung <b>-es</b>: <i>etwas Schön<b>es</b>, nichts Neu<b>es</b>, viel Interessant<b>es</b></i>.</p><p><b>Auch Partizipien</b> werden zu Nomen: der <b>Angestellte</b> (angestellt), der <b>Reisende</b> (reisend), der <b>Verletzte</b>, die <b>Erwachsenen</b>.</p><p><b>Auch Verben:</b> das <b>Lernen</b>, das <b>Essen</b>, beim <b>Schwimmen</b>.</p><p class='en'>Adjectives become nouns: capitalized, but they keep their adjective endings. After etwas/nichts/viel the ending is -es.</p>",
merk:"Groß geschrieben, aber Adjektivendung: der Deutsche, ein Deutscher.",
merkEn:"Capitalized but still declined like an adjective.",
q:[
{q:"„Ich habe ___ gehört.“ (etwas + neu)", o:["etwas Neu","etwas Neues","etwas neues"], c:1, h:"Nach etwas: -es und groß."},
{q:"„Er ist ___.“ (ein + deutsch)", o:["ein Deutsche","ein Deutscher","ein deutscher"], c:1, h:"Nach ein: maskuline Endung -er, groß."},
{q:"Nominalisiertes Verb: „Das ___ macht Spaß.“ (schwimmen)", o:["Schwimmen","schwimmen","Schwimm"], c:0, h:"Verb als Nomen → Infinitiv, groß."},
{type:"gap", q:"„Ich wünsche dir alles ___!“ (gut)", a:["gute"], h:"alles Gute — großgeschrieben mit -e."}
]},

{id:"lassen", chip:"lassen", title:"Das Verb „lassen“", titleEn:"The verb lassen — have something done",
explain:"<p><b>lassen</b> hat drei Bedeutungen, die man streng trennen muss:</p><table class='wide'><tr><th>Bedeutung<span class='en'>meaning</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>1 · etwas machen lassen</b> (nicht selbst tun)</td><td>Ich <b>lasse</b> mein Auto reparieren.<br>Ich <b>lasse</b> mir die Haare schneiden.</td></tr><tr><td><b>2 · erlauben</b></td><td>Meine Eltern <b>lassen</b> mich ausgehen.</td></tr><tr><td><b>3 · zurücklassen / liegen lassen</b></td><td>Ich habe mein Handy zu Hause <b>gelassen</b>.</td></tr></table><p><b>Perfekt:</b> Bei Bedeutung 1 und 2 steht ein <b>doppelter Infinitiv</b>: <i>Ich habe mein Auto reparieren <b>lassen</b></i> (nicht „gelassen“).</p><p><b>sich lassen = Passiversatz:</b> <i>Das Problem <b>lässt sich</b> lösen.</i> = Das Problem kann gelöst werden.</p><p>Konjugation: ich lasse, du <b>lässt</b>, er <b>lässt</b>, wir lassen.</p><p class='en'>lassen means: have something done by someone else, allow, or leave behind. In the perfect tense it uses a double infinitive.</p>",
merk:"„Ich lasse mein Auto reparieren“ heißt: eine Werkstatt macht es, nicht ich.",
merkEn:"lassen = have it done by someone else.",
q:[
{q:"„Ich lasse meine Haare schneiden.“ Wer schneidet?", o:["ich selbst","der Friseur","niemand"], c:1, h:"lassen = jemand anders macht es."},
{q:"Perfekt: „Ich habe das Auto reparieren ___.“", o:["gelassen","lassen","lässt"], c:1, h:"Doppelter Infinitiv: reparieren lassen."},
{q:"„Das Problem lässt sich lösen“ bedeutet:", o:["muss gelöst werden","kann gelöst werden","wurde gelöst"], c:1, h:"sich lassen = können."},
{type:"gap", q:"„Meine Mutter ___ mich nicht allein reisen.“ (erlauben, er/sie-Form)", a:["lässt","laesst"], h:"er/sie lässt."}
]},

{id:"futur2", chip:"Futur II", title:"Futur II: die Vorzukunft", titleEn:"Future perfect",
explain:"<p><b>werden + Partizip II + haben/sein</b> — die seltenste Zeitform, aber du solltest sie erkennen.</p><table class='wide'><tr><th>Gebrauch<span class='en'>use</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>1 · abgeschlossen bis zu einem Zeitpunkt</b></td><td>Bis Freitag <b>werde</b> ich alles <b>erledigt haben</b>.<br>Nächstes Jahr <b>wird</b> er sein Studium <b>beendet haben</b>.</td></tr><tr><td><b>2 · Vermutung über Vergangenes</b></td><td>Er <b>wird</b> den Zug <b>verpasst haben</b>. <span class='small'>(= wahrscheinlich hat er ihn verpasst)</span></td></tr></table><p><b>haben oder sein?</b> Gleiche Regel wie beim Perfekt: Bewegung und Veränderung nehmen <i>sein</i>.</p><div class='ex'>Ich werde gelernt <b>haben</b>. · Er wird angekommen <b>sein</b>.</div><p><b>Im Alltag</b> ersetzt man Futur II fast immer durch Perfekt + Zeitangabe: <i>Bis Freitag habe ich alles erledigt.</i></p><p class='en'>werden + participle + haben/sein. Used for something completed by a future point, or as an assumption about the past. Rare in speech.</p>",
merk:"Futur II = fertig bis dann. Im Alltag reicht das Perfekt.",
merkEn:"Futur II = finished by then. In speech, use the perfect instead.",
q:[
{q:"„Bis morgen ___ ich den Text gelesen haben.“", o:["werde","habe","bin"], c:0, h:"werden + Partizip + haben."},
{q:"„Er wird wohl krank gewesen sein.“ Was bedeutet das?", o:["Er wird krank.","Ich vermute, er war krank.","Er ist sicher krank."], c:1, h:"Vermutung über die Vergangenheit."},
{q:"Welche Form ist richtig? (ankommen)", o:["wird angekommen haben","wird angekommen sein","wird ankommen haben"], c:1, h:"Bewegung → sein."},
{type:"gap", q:"„Nächste Woche ___ wir umgezogen sein.“", a:["werden"], h:"wir werden + Partizip + sein."}
]},

{id:"attribute", chip:"Attribute", title:"Attribute: Wörter, die Nomen genauer beschreiben", titleEn:"Attributes — modifying the noun",
explain:"<p>Ein <b>Attribut</b> beschreibt ein Nomen genauer. Es gibt mehrere Arten:</p><table class='wide'><tr><th>Art<span class='en'>kind</span></th><th>Position<span class='en'>position</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>Adjektivattribut</b></td><td>davor</td><td>das <b>neue</b> Auto</td></tr><tr><td><b>Genitivattribut</b></td><td>dahinter</td><td>das Auto <b>des Lehrers</b></td></tr><tr><td><b>Präpositionalattribut</b></td><td>dahinter</td><td>das Buch <b>über Deutschland</b></td></tr><tr><td><b>Relativsatz</b></td><td>dahinter</td><td>das Auto, <b>das dort steht</b></td></tr><tr><td><b>Apposition</b></td><td>dahinter, in Kommas</td><td>Herr Müller, <b>mein Chef</b>, kommt.</td></tr><tr><td><b>Partizipattribut</b></td><td>davor</td><td>das <b>reparierte</b> Auto</td></tr></table><p><b>Genitivattribut ersetzen:</b> Umgangssprachlich sagt man oft <i>von + Dativ</i>: <i>das Auto <b>von dem Lehrer</b></i>. Bei Namen reicht ein <b>-s</b>: <i><b>Marias</b> Auto</i> (ohne Apostroph!).</p><p class='en'>Attributes describe a noun more precisely. Adjectives and participles come before it; genitives, prepositions, relative clauses and appositions come after it.</p>",
merk:"Genitiv steht hinter dem Nomen, Adjektiv davor: das neue Auto des Lehrers.",
merkEn:"Adjectives before the noun, genitive after it.",
q:[
{q:"Welches ist ein Genitivattribut?", o:["das schnelle Auto","das Auto meines Vaters","das Auto dort"], c:1, h:"Genitiv: meines Vaters."},
{q:"„Herr Weber, unser Lehrer, ist krank.“ — was ist „unser Lehrer“?", o:["Genitivattribut","Apposition","Relativsatz"], c:1, h:"Erklärender Einschub in Kommas = Apposition."},
{q:"Wie schreibt man den Namen-Genitiv richtig?", o:["Marias Auto","Maria's Auto","Marias' Auto"], c:0, h:"Im Deutschen ohne Apostroph."},
{type:"match", q:"Ordne Attributart und Beispiel zu:", pairs:[["Adjektivattribut","das neue Haus"],["Genitivattribut","das Haus der Familie"],["Relativsatz","das Haus, das ich kaufe"],["Apposition","Herr Meier, mein Nachbar"]], h:"Vier Wege, ein Nomen zu beschreiben."}
]},

{id:"valenz", chip:"Verbvalenz", title:"Verbvalenz: welche Ergänzungen braucht ein Verb?", titleEn:"Verb valency — which complements a verb needs",
explain:"<p>Jedes Verb legt fest, wie viele und welche Ergänzungen es braucht. Das nennt man <b>Valenz</b>.</p><table class='wide'><tr><th>Typ<span class='en'>type</span></th><th>Verben<span class='en'>verbs</span></th><th>Beispiel<span class='en'>example</span></th></tr><tr><td><b>nur Subjekt</b></td><td>schlafen, arbeiten, regnen</td><td>Das Kind schläft.</td></tr><tr><td><b>+ Akkusativ</b> <span class='small'>(die meisten)</span></td><td>sehen, kaufen, haben, brauchen</td><td>Ich kaufe <span class='wa'>ein Buch</span>.</td></tr><tr><td><b>+ Dativ</b></td><td>helfen, danken, gefallen, gehören</td><td>Ich helfe <span class='wd'>dem Kind</span>.</td></tr><tr><td><b>+ Dativ + Akkusativ</b></td><td>geben, zeigen, schenken, erklären</td><td>Ich gebe <span class='wd'>dem Kind</span> <span class='wa'>ein Buch</span>.</td></tr><tr><td><b>+ Präposition</b></td><td>warten auf, denken an</td><td>Ich warte <b>auf</b> <span class='wa'>den Bus</span>.</td></tr><tr><td><b>+ Genitiv</b> <span class='small'>(selten, formell)</span></td><td>gedenken, beschuldigen, bedürfen</td><td>Man beschuldigt ihn <span class='wg'>des Diebstahls</span>.</td></tr></table><p><b>Praktisch:</b> Lerne jedes neue Verb zusammen mit seiner Ergänzung — <i>helfen + Dativ</i>, <i>warten auf + Akkusativ</i>. Das erspart dir später hunderte Fehler.</p><p class='en'>Every verb determines which complements it needs. Learn each new verb together with its case or preposition.</p>",
merk:"Nicht das Wort allein lernen, sondern das Muster: helfen + Dativ.",
merkEn:"Learn the pattern, not just the word: helfen + dative.",
q:[
{q:"Welches Verb braucht den Dativ?", o:["sehen","helfen","kaufen"], c:1, h:"helfen + Dativ."},
{q:"„Ich schenke ___ ___.“ (mein Bruder / ein Buch)", o:["meinen Bruder ein Buch","meinem Bruder ein Buch","meinem Bruder einem Buch"], c:1, h:"schenken: Dativ (Person) + Akkusativ (Sache)."},
{q:"Welches Verb braucht KEINE Ergänzung?", o:["brauchen","schlafen","geben"], c:1, h:"schlafen kommt mit dem Subjekt aus."},
{type:"match", q:"Ordne Verb und Ergänzung zu:", pairs:[["helfen","+ Dativ"],["kaufen","+ Akkusativ"],["geben","+ Dativ + Akkusativ"],["warten","+ auf (Akkusativ)"]], h:"Jedes Verb hat sein festes Muster."}
]}
]};

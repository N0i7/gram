/* FLOß Grammatik – "Unnützes Wissen"-Tabellen
   Kuriositäten & Sonderfälle der deutschen Grammatik: superselten im
   Alltag, nur Germanistik-Studierten geläufig oder schlicht nie
   Bestandteil von A1–B2-DaF-Unterricht bzw. Prüfungen.
   Gleiches Muster wie referenz-daten.js: eine Quelle, die
   unnuetzes-wissen.html komplett rendert (window.UNNUETZ_TABLES /
   window.UNNUETZ_META). Keine Übungen — reiner Lesestoff. */
(function(){

const UNNUETZ_TABLES = {};
const UNNUETZ_META = [];

function add(id, chip, title, titleEn, group, html){
  UNNUETZ_TABLES[id] = html;
  UNNUETZ_META.push({id, chip, title, titleEn, group});
}

/* ========================================================= */
/* 1 · NOMEN-KURIOSITÄTEN                                     */
/* ========================================================= */

add("herz-deklination", "das Herz", "Die Herz-Deklination: das einzige Nomen seiner Art", "The “Herz” declension — a noun in a class of its own", "Nomen-Kuriositäten", `
<p><b>das Herz</b> ist das einzige deutsche Nomen, das in der Deklination halb wie ein schwaches Nomen und halb wie ein starkes Nomen funktioniert — und das inkonsequent genug, dass es keine zweite Kopie davon gibt.</p>
<p class="en">“Herz” is the only German noun that declines half like a weak noun and half like a strong one — inconsistently enough that there is no second example of the pattern.</p>
<table><tr><th></th><th>Singular</th></tr>
<tr><td class="thn">Nominativ</td><td class="tdn">das <b>Herz</b></td></tr>
<tr><td class="tha">Akkusativ</td><td class="tda">das <b>Herz</b> <span class="en">(kein -en!)</span></td></tr>
<tr><td class="thd">Dativ</td><td class="tdd">dem <b>Herzen</b></td></tr>
<tr><td class="thg">Genitiv</td><td class="tdg">des <b>Herzens</b></td></tr></table>
<p>Jedes andere Nomen, das im Dativ/Genitiv ein -(e)n bekommt (die sogenannte n-Deklination, siehe nächste Karte), bekommt dieses -(e)n auch im Akkusativ. <b>Herz</b> bricht als einziges Nomen im gesamten Deutschen dieses Muster: Akkusativ bleibt endungslos wie der Nominativ, nur Dativ und Genitiv bekommen die Endung.</p>
<p class="en">Every other noun that takes -(e)n in the dative/genitive (the so-called “weak” or n-declension) takes it in the accusative too. “Herz” is the one noun in the entire language that breaks this pattern.</p>
<div class="ex">Ich habe ein großes <b>Herz</b> (Akk., keine Endung) — aber: mit ganzem <b>Herzen</b> (Dat.) · die Sprache des <b>Herzens</b> (Gen.)</div>
`);

add("n-deklination-sonderfaelle", "Herr & Name", "n-Deklination: drei verschiedene Sonderregeln", "The weak (“n-”) declension has three different sub-patterns", "Nomen-Kuriositäten", `
<p>Die sogenannte n-Deklination (auch „schwache Deklination“) betrifft maskuline Nomen wie <b>der Mensch, der Junge, der Kunde, der Löwe</b>. Die Grundregel: jeder Fall außer Nominativ Singular bekommt -(e)n. Klingt einfach — hat aber drei Ausnahme-Familien, die in keinem A1–B2-Lehrwerk auftauchen.</p>
<p class="en">The weak declension affects masculine nouns and adds -(e)n in every case except nominative singular. Simple in theory — except for three exception families that never appear in A1–B2 textbooks.</p>
<h4 class="ref-h">1. Der Normalfall</h4>
<table><tr><th></th><th>Singular</th><th>Plural</th></tr>
<tr><td class="thn">Nom.</td><td class="tdn">der Mensch</td><td class="tdn">die Mensch<b>en</b></td></tr>
<tr><td class="tha">Akk.</td><td class="tda">den Mensch<b>en</b></td><td class="tda">die Mensch<b>en</b></td></tr>
<tr><td class="thd">Dat.</td><td class="tdd">dem Mensch<b>en</b></td><td class="tdd">den Mensch<b>en</b></td></tr>
<tr><td class="thg">Gen.</td><td class="tdg">des Mensch<b>en</b></td><td class="tdg">der Mensch<b>en</b></td></tr></table>
<h4 class="ref-h">2. Der Herr-Fall — im Singular nur -n, im Plural zusätzlich -en</h4>
<p><b>der Herr</b> nimmt im Singular nur ein einzelnes -n, bekommt im Plural aber ein komplettes -en obendrauf: <b>die Herren</b>, nicht „die Herrn“.</p>
<div class="ex">Singular: des <b>Herrn</b>, dem <b>Herrn</b>, den <b>Herrn</b> — Plural: die/der/den <b>Herren</b></div>
<h4 class="ref-h">3. Die gemischte Deklination — Genitiv bekommt zusätzlich ein -s</h4>
<p>Bei <b>der Name, der Buchstabe, der Gedanke, der Glaube, der Wille, der Friede, der Funke</b> heißt es im Genitiv nicht nur -n, sondern -ns.</p>
<div class="ex">der <b>Name</b> → den/dem <b>Namen</b>, aber Genitiv: des <b>Namens</b> <span class="en">(not „des Namen“)</span></div>
<p class="en">“Herr” takes only -n in the singular but the full -en in the plural (die Herren). “Name”-type nouns take -n in accusative/dative but -ns in the genitive — a detail that trips up even advanced learners.</p>
`);

add("plural-bedeutung", "Bank → Bänke/Banken", "Zwei Pluralformen, zwei komplett verschiedene Bedeutungen", "Two plurals, two completely different meanings", "Nomen-Kuriositäten", `
<p>Ein paar deutsche Nomen haben zwei gültige Pluralformen — und welche man wählt, entscheidet darüber, wovon überhaupt die Rede ist.</p>
<p class="en">A handful of German nouns have two valid plurals — and picking the wrong one changes what you're talking about.</p>
<table><tr><th>Singular</th><th>Plural A</th><th>Plural B</th></tr>
<tr><td><b>die Bank</b></td><td><b>die Bänke</b> <span class="en">(Sitzmöbel, benches)</span></td><td><b>die Banken</b> <span class="en">(Geldinstitute, banks)</span></td></tr>
<tr><td><b>das Wort</b></td><td><b>die Wörter</b> <span class="en">(einzelne Wörter, e.g. im Wörterbuch)</span></td><td><b>die Worte</b> <span class="en">(zusammenhängende Rede, e.g. „die letzten Worte“)</span></td></tr>
<tr><td><b>die Mutter</b></td><td><b>die Mütter</b> <span class="en">(Elternteil, mothers)</span></td><td><b>die Muttern</b> <span class="en">(Schraubenmuttern, hex nuts)</span></td></tr>
<tr><td><b>das/der Band</b></td><td><b>die Bänder</b> <span class="en">(Schleifen/Bänder, ribbons)</span></td><td><b>die Bände</b> <span class="en">(Buchbände, book volumes)</span></td></tr></table>
<div class="ex">„Ich setze mich auf die <b>Bank</b>“ vs. „Ich arbeite bei einer <b>Bank</b>“ — gleiches Wort, zwei komplett verschiedene Pluralwelten.</div>
<p>Bonus: <b>die Band</b> (Musikgruppe, aus dem Englischen entlehnt) bildet den Plural ganz regulär auf Englisch-Art: <b>die Bands</b> — ein weiterer Fall, in dem drei fast gleich klingende Wörter (Band/Bänder, Band/Bände, Band/Bands) nichts miteinander zu tun haben.</p>
`);

add("genus-schwankungen", "der/die See", "Wenn das Genus die Bedeutung ändert (oder einfach niemand sich einig ist)", "When grammatical gender changes the meaning — or nobody agrees on it", "Nomen-Kuriositäten", `
<p>Die meisten Nomen haben genau ein Genus. Ein paar wenige haben zwei — und dann bedeuten sie etwas völlig anderes.</p>
<table><tr><th>Wort</th><th>maskulin</th><th>feminin/neutral</th></tr>
<tr><td><b>See</b></td><td>der See — <span class="en">lake</span></td><td>die See — <span class="en">sea, ocean</span></td></tr>
<tr><td><b>Leiter</b></td><td>der Leiter — <span class="en">manager, head</span></td><td>die Leiter — <span class="en">ladder</span></td></tr>
<tr><td><b>Kiefer</b></td><td>der Kiefer — <span class="en">jaw(bone)</span></td><td>die Kiefer — <span class="en">pine tree</span></td></tr>
<tr><td><b>Verdienst</b></td><td>der Verdienst — <span class="en">earnings, income</span></td><td>das Verdienst — <span class="en">merit, credit</span></td></tr>
<tr><td><b>Tor</b></td><td>der Tor — <span class="en">fool (veraltet)</span></td><td>das Tor — <span class="en">gate, goal</span></td></tr></table>
<p class="en">Same spelling, different article, unrelated meaning — these pairs exist purely by historical accident, not by any rule.</p>
<h4 class="ref-h">Und dann gibt es Fälle, wo einfach niemand sich einig ist</h4>
<p><b>der/die/das Joghurt</b> — laut Duden sind tatsächlich alle drei Artikel korrekt („der“ ist in Deutschland am häufigsten). Kein Bedeutungsunterschied, reine Willkür der Sprachgeschichte.</p>
<p class="en">All three genders of “Joghurt” are officially correct — pure historical coincidence, no rule behind it. (The Nutella-gender debate is a similar, if less official, favourite German internet argument — fun trivia, but not standard grammar.)</p>
`);

/* ========================================================= */
/* 2 · KASUS-RELIKTE                                          */
/* ========================================================= */

add("erstarrte-wendungen", "meines Wissens", "Erstarrte Genitiv- und Dativformen in festen Wendungen", "Fossilised genitive/dative endings, frozen inside fixed phrases", "Kasus-Relikte", `
<p>Der Genitiv stirbt im gesprochenen Deutsch langsam aus — aber in ein paar festen Wendungen überlebt er, ohne dass Sprecher ihn als Genitiv erkennen.</p>
<p class="en">The genitive is fading from spoken German — except in a handful of fixed expressions where it survives without anyone noticing it's a genitive at all.</p>
<div class="ex"><b>meines Wissens</b> <span class="en">(as far as I know)</span> · <b>frohen Mutes</b> <span class="en">(cheerfully)</span> · <b>eines Tages</b> <span class="en">(one day)</span> · <b>letzten Endes</b> <span class="en">(in the end)</span> · <b>gesunden Geistes</b> <span class="en">(of sound mind)</span></div>
<p>Besonders kurios: <b>des Nachts</b>. „Die Nacht“ ist feminin — feminine Nomen bekommen im Genitiv eigentlich kein -s. Die Zeitangabe „des Nachts“ ist eine alte Analogiebildung nach dem maskulinen/neutralen Muster („eines Tages“) und existiert nur noch als Fossil.</p>
<p class="en">“Des Nachts” (“at night”) is odd because “Nacht” is feminine and feminine nouns don't normally take -s in the genitive — this form only survives because it was analogically built to match masculine/neuter time expressions like “eines Tages”.</p>
<h4 class="ref-h">Der alte Dativ-e</h4>
<p>Bis ins 20. Jahrhundert bekamen maskuline/neutrale Nomen im Dativ Singular oft ein -e: <b>zu Hause, im Grunde, am Tage, im Walde</b>. Heute klingt das -e literarisch oder altmodisch — außer in erstarrten Ausdrücken wie „zu Hause“, die niemand hinterfragt.</p>
<p>Und aus dem alten Handelsbrief stammt: <b>zu Händen von Herrn/Frau ...</b> — Dativ Plural von „die Hand“, bis heute die offizielle Anrede auf Brief- und Paketadressen.</p>
`);

add("genitiv-verben", "gedenken", "Verben, die einen Genitiv verlangen (und fast ausgestorben sind)", "Verbs that require a genitive object — nearly extinct in everyday speech", "Kasus-Relikte", `
<p>Eine kleine, geschlossene Gruppe deutscher Verben verlangt ein Genitivobjekt statt Akkusativ oder Dativ. Im Alltag werden sie fast immer durch Präpositionalphrasen ersetzt — aber in der Schriftsprache, bei Trauerreden und in Gesetzestexten leben sie weiter.</p>
<p class="en">A small, closed group of German verbs takes a genitive object instead of accusative or dative. Everyday speech almost always replaces them with prepositional phrases — but they survive in formal writing, memorial speeches and legal texts.</p>
<table><tr><th>Verb</th><th>Beispiel</th><th>Alltagsersatz</th></tr>
<tr><td><b>gedenken</b></td><td>wir gedenken <b>der Opfer</b></td><td>wir denken an die Opfer</td></tr>
<tr><td><b>sich erfreuen</b></td><td>er erfreut sich <b>bester Gesundheit</b></td><td>es geht ihm sehr gut</td></tr>
<tr><td><b>sich schämen</b></td><td>sie schämt sich <b>ihrer Tat</b></td><td>sie schämt sich für ihre Tat</td></tr>
<tr><td><b>bedürfen</b></td><td>das bedarf <b>keiner Erklärung</b></td><td>das braucht keine Erklärung</td></tr>
<tr><td><b>sich rühmen</b></td><td>er rühmt sich <b>seiner Erfolge</b></td><td>er prahlt mit seinen Erfolgen</td></tr>
<tr><td><b>harren</b></td><td>sie harren <b>der Dinge</b></td><td>sie warten ab, was kommt</td></tr></table>
`);

add("genitiv-eigennamen", "Marx' Theorien", "Genitiv bei Eigennamen auf -s/-ß/-x/-z: Apostroph statt Endung", "Genitive of names ending in -s/-ß/-x/-z: apostrophe, not an ending", "Kasus-Relikte", `
<p>Bei Eigennamen, die schon auf -s, -ß, -x, -z oder -ce enden, würde eine normale Genitiv-Endung doppelt klingen. Die Lösung: ein einzelner Apostroph — nicht wie im Englischen mit zusätzlichem 's, sondern <b>ohne</b> jede Endung.</p>
<p class="en">When a name already ends in -s, -ß, -x, -z or -ce, adding a normal genitive ending would sound doubled. German solves this with a bare apostrophe — unlike English 's, there is no extra s at all.</p>
<div class="ex"><b>Aristoteles’</b> Werke <span class="en">(not Aristoteles's or Aristoteleses)</span> · <b>Voß’</b> Gedichte · <b>Alex’</b> Fahrrad · <b>Marx’</b> Theorien</div>
<p>In der gesprochenen Sprache weicht praktisch jeder auf eine Umschreibung mit „von“ aus („das Fahrrad von Alex“) oder auf den umgangssprachlichen „Sie liebt Alex seinen Hund“-Genitiversatz mit „sein“ — dem sogar ein berühmtes Buch gewidmet ist („Der Dativ ist dem Genitiv sein Tod“ von Bastian Sick).</p>
<p class="en">In speech, almost everyone dodges this with a “von” phrase instead — or with the colloquial “Alex sein Fahrrad” construction, famous enough to have inspired a bestselling book title.</p>
`);

add("reine-dativverben", "nur Dativ", "Verben, die niemals ein Akkusativobjekt haben können", "Verbs that can never take an accusative object", "Kasus-Relikte", `
<p>Eine feste Liste deutscher Verben verlangt ausschließlich ein Dativobjekt — nie Akkusativ. Das fällt Lernenden mit Muttersprachen ohne Kasus (z. B. Englisch, Tagalog) oft nicht auf, weil die Übersetzung dort meist ein normales Objekt hat.</p>
<p class="en">A fixed list of German verbs takes only a dative object — never accusative. Speakers of case-less languages (English, Tagalog) rarely notice this, because the English translation just looks like an ordinary object.</p>
<div class="ex">helfen · danken · gratulieren · folgen · gehören · vertrauen · glauben (jmdm.) · ähneln · schmecken · gelingen · auffallen · gefallen</div>
<div class="ex"><span class="en">More formal: </span>obliegen <span class="en">(es obliegt ihm, ...)</span> · frönen <span class="en">(seinem Laster frönen)</span> · trotzen <span class="en">(der Kälte trotzen)</span> · entsagen <span class="en">(dem Alkohol entsagen)</span></div>
<p>Praktische Folge: diese Verben haben kein persönliches Passiv. „Ihm wird geholfen“ ist möglich (unpersönliches Passiv), aber „Er wird geholfen“ ist falsch — „er“ könnte hier nie Subjekt eines echten Passivs sein, weil er nie Akkusativobjekt war.</p>
`);

/* ========================================================= */
/* 3 · VERB-KURIOSITÄTEN                                     */
/* ========================================================= */

add("konjunktiv1-presse", "er sei", "Konjunktiv I in der indirekten Rede: die Sprache der Nachrichten", "Konjunktiv I in reported speech: the language of the news", "Verb-Kuriositäten", `
<p>Konjunktiv I ist der eigentliche „Konjunktiv der indirekten Rede“ — nicht Konjunktiv II, den man in A1–B2 für Höflichkeit und Irreales lernt. Journalisten benutzen Konjunktiv I, um Distanz zu einer fremden Aussage zu markieren, ohne sie zu bewerten.</p>
<p class="en">Konjunktiv I — not Konjunktiv II, which A1–B2 courses teach for politeness and hypotheticals — is the actual grammatical mood of reported speech. Journalists use it to mark distance from a claim without endorsing or denying it.</p>
<div class="ex">Der Sprecher sagte, die Lage <b>sei</b> unter Kontrolle. · Der Minister erklärte, er <b>habe</b> davon nichts gewusst. · Kritiker meinen, es <b>gebe</b> keinen Beweis.</div>
<p>Erkennbar meist nur in der 3. Person Singular (er/sie/es <b>sei, habe, könne, werde, gebe</b> — ohne Umlaut, ohne die Endung des Indikativs). In allen anderen Personen ist Konjunktiv I oft mit dem Indikativ identisch, deshalb weicht die Presse dort meist auf Konjunktiv II oder „würde“ aus.</p>
<p class="en">This is real, everyday German — you'll see it in every newspaper — but it almost never comes up in A1–B2 classrooms or exams, which is exactly why it belongs here.</p>
`);

add("rezept-konjunktiv", "man nehme", "Der Rezept- und Wunsch-Konjunktiv: Reste eines ausgestorbenen Modus", "The recipe/wish subjunctive: leftovers of a mood German no longer has", "Verb-Kuriositäten", `
<p>Deutsch hatte einst einen eigenen Optativ (Wunschform) — heute übernimmt Konjunktiv I diese Rolle noch in ein paar erstarrten Mustern, die niemand mehr aktiv produziert, aber jeder erkennt.</p>
<p class="en">German once had a distinct optative mood for wishes. Konjunktiv I still fills that role in a handful of frozen patterns — nobody actively produces new ones, but everyone recognises them.</p>
<div class="ex"><b>Man nehme</b> drei Eier und vermische sie mit Zucker. <span class="en">(old-fashioned recipe style)</span></div>
<div class="ex"><b>Es lebe</b> die Königin! · <b>Gott sei</b> Dank! · <b>Möge</b> dir das Glück hold sein. · <b>Man verzeihe</b> mir die Verspätung.</div>
<p>Moderne Kochrezepte benutzen längst den Imperativ („Nimm drei Eier“) — die Konjunktiv-I-Form überlebt nur noch als bewusst altmodisches Stilmittel oder in versteinerten Ausdrücken wie „Gott sei Dank“, die kein Muttersprachler mehr als Konjunktiv wahrnimmt.</p>
`);

add("praeteritopraesentien", "ich kann", "Warum „er kann“ keine Endung hat: die Präteritopräsentien", "Why “er kann” has no ending: the preterite-present verbs", "Verb-Kuriositäten", `
<p>Modalverben (können, müssen, dürfen, sollen, wollen, mögen) und „wissen“ verhalten sich anders als jedes normale Verb: 1. und 3. Person Singular sind identisch und völlig endungslos.</p>
<p class="en">Modal verbs and “wissen” behave unlike any regular verb: the 1st and 3rd person singular are identical and take no ending at all.</p>
<div class="ex">ich <b>kann</b> = er/sie/es <b>kann</b> <span class="en">(not „kannt“)</span> — verglichen mit: ich mach<b>e</b> ≠ er mach<b>t</b></div>
<p>Der Grund liegt tief in der Sprachgeschichte: diese Verben waren ursprünglich starke Verben, deren <b>Präteritum</b>-Form (Vergangenheitsform) irgendwann die Bedeutung eines <b>Präsens</b> übernahm — daher der Fachbegriff „Präteritopräsens“. Starke Präterita sind im Deutschen in der 1./3. Person Singular immer endungslos und identisch (ich ging = er ging) — genau dieses Muster „verriet“ sich in Modalverben ins heutige Präsens.</p>
<p class="en">The reason is historical: these verbs were originally strong verbs whose past-tense form eventually took on a present-tense meaning — hence the technical term “preterite-present”. It's why every DaF learner just memorises “ich kann, du kannst, er kann” without ever being told there's a reason for the missing ending.</p>
`);

/* ========================================================= */
/* 4 · SONSTIGE SONDERFÄLLE                                   */
/* ========================================================= */

add("substantivierte-adjektive", "etwas Neues", "Adjektive nach nichts/etwas/viel: die versteckte Deklinationsregel", "Adjectives after nichts/etwas/viel: the hidden declension rule", "Sonstige Sonderfälle", `
<p>Nach den Indefinitpronomen <b>nichts, etwas, viel, wenig, allerlei</b> wird ein folgendes Adjektiv großgeschrieben und substantivisch dekliniert — eine Regel, die konsequent angewendet, aber in kaum einem Lehrwerk explizit erklärt wird.</p>
<p class="en">After the indefinite pronouns nichts, etwas, viel, wenig and allerlei, a following adjective is capitalised and takes the strong (“noun-like“) neuter ending — a rule everyone applies but almost no textbook spells out.</p>
<div class="ex">etwas <b>Neues</b> · nichts <b>Besonderes</b> · viel <b>Gutes</b> · wenig <b>Erfreuliches</b> · allerlei <b>Interessantes</b></div>
<p>Grammatisch handelt es sich um ein substantiviertes Adjektiv im Neutrum Singular mit starker Endung (wie bei „das Neue“, nur ohne Artikel) — dieselbe Endung -es, die man sonst von starken Adjektivendungen im Nominativ/Akkusativ Neutrum kennt.</p>
`);

add("praedikativ-attributiv", "schade / hiesig", "Adjektive, die nur vor ODER nur nach dem Nomen stehen dürfen", "Adjectives that can only ever be predicative OR only ever attributive", "Sonstige Sonderfälle", `
<p>Fast jedes deutsche Adjektiv kann sowohl attributiv (vor dem Nomen: <b>das große Haus</b>) als auch prädikativ (nach sein/werden: <b>das Haus ist groß</b>) stehen. Eine kleine Gruppe kann das nicht.</p>
<p class="en">Almost every German adjective works both attributively (before the noun) and predicatively (after sein/werden). A small group can only do one or the other.</p>
<h4 class="ref-h">Nur prädikativ — niemals direkt vor dem Nomen</h4>
<div class="ex">Das ist <b>schade</b>. <span class="en">(never „das schade Ereignis“)</span> · Er ist daran <b>schuld</b>. · Wir sind <b>quitt</b>. · Sie wurde dessen <b>gewahr</b>.</div>
<h4 class="ref-h">Nur attributiv — niemals nach sein/werden</h4>
<div class="ex">die <b>hiesige</b> Zeitung <span class="en">(not „die Zeitung ist hiesig“)</span> · der <b>obige</b> Text · die <b>dortigen</b> Verhältnisse · die <b>gestrige</b> Ausgabe <span class="en">(must say „die Ausgabe war gestern“ instead)</span></div>
<p class="en">These aren't rare words — “schade” and “gestrig” are everyday vocabulary — but their restriction to only one grammatical position is a fact almost no course ever mentions.</p>
`);

add("fugenelemente", "Fugen-s", "Fugenelemente: warum niemand die Regel wirklich kennt", "Linking elements in compounds: even native speakers just memorise them", "Sonstige Sonderfälle", `
<p>Deutsche Komposita brauchen manchmal ein „Fugenelement“ zwischen den Teilen (-s-, -e-, -er-, -en-, -n- ...) — und welches, folgt keiner verlässlichen Regel. Muttersprachler wissen es einfach auswendig, ohne je darüber nachzudenken.</p>
<p class="en">German compounds sometimes need a “linking element” between their parts — and which one, follows no reliable rule. Native speakers just know it by rote, without ever thinking about why.</p>
<p>Am eindrucksvollsten zeigt sich das, wenn ein- und dasselbe Grundwort in verschiedenen Komposita unterschiedliche Fugenelemente bekommt:</p>
<table><tr><th>Grundwort</th><th>Kompositum A</th><th>Kompositum B</th></tr>
<tr><td><b>Schwein</b></td><td>Schwein<b>e</b>fleisch</td><td>Schwein<b>s</b>braten</td></tr>
<tr><td><b>Rind</b></td><td>Rind<b>Ø</b>fleisch <span class="en">(kein Fugenelement!)</span></td><td>Rind<b>er</b>braten</td></tr>
<tr><td><b>Kind</b></td><td>Kind<b>er</b>garten</td><td>Kind<b>es</b>wohl</td></tr></table>
<p class="en">This unpredictability is a genuine research topic in German linguistics (“Fugenelement-Forschung”) — there simply isn't a rule that predicts it, only patterns you absorb one compound at a time.</p>
`);

add("zirkumpositionen", "um ... willen", "Zirkumpositionen: Präpositionen, die ihr Nomen einrahmen", "Circumpositions: prepositions that wrap around their noun", "Sonstige Sonderfälle", `
<p>Die meisten deutschen Präpositionen stehen VOR ihrem Nomen. Ein paar seltene bestehen aus zwei Teilen, die das Nomen von beiden Seiten einrahmen — sogenannte Zirkumpositionen.</p>
<p class="en">Most German prepositions come before their noun. A few rare ones consist of two parts that wrap around the noun from both sides — called circumpositions.</p>
<div class="ex">um <b>Gottes</b> willen · von <b>heute</b> an · von <b>hier</b> aus · an <b>mir</b> vorbei · auf <b>die Tür</b> zu · um <b>den Tisch</b> herum</div>
<p>Grammatisch handelt es sich meist um eine Präposition + Nomen (im Genitiv oder Akkusativ) + eine zweite, postponierte Partikel, die ursprünglich ein eigenständiges Adverb war. Im DaF-Unterricht werden diese Wendungen meist als feste Ausdrücke gelernt, nie als eigene Wortart-Kategorie benannt.</p>
`);

window.UNNUETZ_TABLES = UNNUETZ_TABLES;
window.UNNUETZ_META = UNNUETZ_META;
})();

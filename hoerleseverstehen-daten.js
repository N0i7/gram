/* FLOß Grammatik – "Hör-/Leseverstehen"-Seite
   Originaltexte (nicht von Lingolia übernommen) je Niveau A1-B2 mit
   Wortschatzhilfe und Verständnisfragen. "Hörverstehen" nutzt die
   Web-Speech-API des Browsers (Vorlesen-Button) statt fester
   Audiodateien — kostenlos, ohne eigene Aufnahmen. Gerendert von
   hoerleseverstehen.js auf hoerleseverstehen.html.
   Fragen-Format identisch zu engine.js/content-quiz.js: {q,o,c,h}
   für Multiple Choice, {type:"gap",q,a,h} für Lückentext. */
window.HLV_DATA = {

levels: [

{level:"A1", color:"#2db150", texts:[

{id:"a1-mein-tag", title:"Mein Tag", titleEn:"My day",
text:"Ich heiße Miguel und wohne in Lapu-Lapu. Um sechs Uhr stehe ich auf. Ich dusche und frühstücke. Um sieben Uhr fahre ich mit dem Motorrad zur Arbeit. Am Mittag esse ich mit meinen Kollegen. Am Abend lerne ich zwei Stunden Deutsch. Danach koche ich und esse zu Abend. Um zehn Uhr gehe ich ins Bett.",
vocab:[["aufstehen","to get up"],["frühstücken","to have breakfast"],["die Kollegin/der Kollege","colleague"],["zu Abend essen","to have dinner"]],
q:[
{q:"Wann steht Miguel auf?", o:["Um sechs Uhr","Um sieben Uhr","Um zehn Uhr"], c:0, h:"„Um sechs Uhr stehe ich auf.“"},
{q:"Womit fährt Miguel zur Arbeit?", o:["Mit dem Auto","Mit dem Motorrad","Zu Fuß"], c:1, h:"„Ich fahre mit dem Motorrad zur Arbeit.“"},
{q:"Was macht Miguel am Abend zuerst?", o:["Er kocht.","Er lernt Deutsch.","Er geht ins Bett."], c:1, h:"Erst lernt er zwei Stunden Deutsch, danach kocht er."},
{type:"gap", q:"Um wie viel Uhr geht Miguel ins Bett? Antwort nur mit Uhrzeit, z.B. „acht Uhr“.", a:["zehn uhr","um zehn uhr"], h:"„Um zehn Uhr gehe ich ins Bett.“"}
]},

{id:"a1-supermarkt", title:"Im Supermarkt", titleEn:"At the supermarket",
text:"Durchsage: „Liebe Kunden, herzlich willkommen! Heute ist Brot im Angebot: ein Brot kostet nur einen Euro. Milch und Käse finden Sie in Gang drei. Die Kasse ist bis zwanzig Uhr geöffnet. Vielen Dank für Ihren Einkauf und einen schönen Tag!“",
vocab:[["die Durchsage","announcement"],["im Angebot","on sale/special offer"],["der Gang","aisle"],["die Kasse","checkout/cash register"]],
q:[
{q:"Was ist heute im Angebot?", o:["Milch","Käse","Brot"], c:2, h:"„Heute ist Brot im Angebot.“"},
{q:"Wie viel kostet das Angebot?", o:["Einen Euro","Zwei Euro","Drei Euro"], c:0, h:"„ein Brot kostet nur einen Euro.“"},
{q:"Wo finden die Kunden Milch und Käse?", o:["In Gang eins","In Gang zwei","In Gang drei"], c:2, h:"„Milch und Käse finden Sie in Gang drei.“"},
{q:"Bis wann ist die Kasse geöffnet?", o:["18 Uhr","20 Uhr","22 Uhr"], c:1, h:"„Die Kasse ist bis zwanzig Uhr geöffnet.“"}
]},

{id:"a1-nachricht-sofia", title:"Eine Nachricht von Sofia", titleEn:"A message from Sofia",
text:"Hallo Ben! Ich kann heute nicht zum Deutschkurs kommen, ich bin krank. Kannst du mir bitte die Hausaufgabe schicken? Morgen bin ich wieder da. Danke und bis bald! Sofia",
vocab:[["krank","sick, ill"],["die Hausaufgabe","homework"],["schicken","to send"],["bis bald","see you soon"]],
q:[
{q:"Warum kommt Sofia nicht zum Kurs?", o:["Sie arbeitet.","Sie ist krank.","Sie ist im Urlaub."], c:1, h:"„ich bin krank.“"},
{q:"Um was bittet Sofia?", o:["Um Geld","Um die Hausaufgabe","Um ein Buch"], c:1, h:"„Kannst du mir bitte die Hausaufgabe schicken?“"},
{q:"Wann ist Sofia wieder da?", o:["Heute Abend","Morgen","Nächste Woche"], c:1, h:"„Morgen bin ich wieder da.“"}
]}

]},

{level:"A2", color:"#0a84ff", texts:[

{id:"a2-weg-ausbildung", title:"Der Weg zur Berufsschule", titleEn:"The way to vocational school",
text:"Entschuldigung, wie komme ich zur Berufsschule? — Das ist einfach. Gehen Sie hier geradeaus bis zur Ampel, dann links in die Bahnhofstraße. Folgen Sie der Straße etwa fünf Minuten, dann sehen Sie rechts eine Bäckerei. Direkt gegenüber ist die Berufsschule, Sie können das große graue Gebäude schon von weitem sehen. — Vielen Dank! Wie lange dauert das zu Fuß? — Ungefähr zehn Minuten, mit dem Bus nur drei Stationen.",
vocab:[["geradeaus","straight ahead"],["die Ampel","traffic light"],["folgen","to follow"],["gegenüber","opposite"],["die Station","stop (bus/train)"]],
q:[
{q:"Wohin muss man an der Ampel gehen?", o:["Rechts","Links","Geradeaus weiter"], c:1, h:"„dann links in die Bahnhofstraße.“"},
{q:"Was ist direkt gegenüber der Berufsschule?", o:["Ein Bahnhof","Eine Bäckerei","Ein Supermarkt"], c:1, h:"„sehen Sie rechts eine Bäckerei. Direkt gegenüber ist die Berufsschule.“"},
{q:"Wie lange dauert der Weg zu Fuß?", o:["Etwa 3 Minuten","Etwa 5 Minuten","Etwa 10 Minuten"], c:2, h:"„Ungefähr zehn Minuten“ zu Fuß."},
{type:"gap", q:"Wie viele Bus-Stationen sind es? Antwort nur als Zahl.", a:["drei","3"], h:"„mit dem Bus nur drei Stationen.“"}
]},

{id:"a2-durchsage-bahnhof", title:"Eine Durchsage am Bahnhof", titleEn:"An announcement at the station",
text:"Achtung, eine Durchsage: Der Regionalexpress nach München, Abfahrt 14 Uhr 15, fällt heute leider aus. Die nächste Verbindung nach München fährt um 15 Uhr 00 von Gleis 7. Fahrgäste mit Anschluss werden gebeten, sich am Info-Schalter zu melden. Wir bitten um Entschuldigung für die Unannehmlichkeiten.",
vocab:[["ausfallen","to be cancelled"],["die Verbindung","connection"],["das Gleis","platform/track"],["der Anschluss","connecting train"],["die Unannehmlichkeit","inconvenience"]],
q:[
{q:"Was ist mit dem Zug um 14:15 Uhr passiert?", o:["Er hat Verspätung.","Er fällt aus.","Er ist voll."], c:1, h:"„fällt heute leider aus.“"},
{q:"Von welchem Gleis fährt der nächste Zug?", o:["Gleis 5","Gleis 7","Gleis 9"], c:1, h:"„fährt um 15 Uhr 00 von Gleis 7.“"},
{q:"Was sollen Fahrgäste mit Anschluss tun?", o:["Den Zugbegleiter fragen","Sich am Info-Schalter melden","Zu Hause bleiben"], c:1, h:"„werden gebeten, sich am Info-Schalter zu melden.“"}
]},

{id:"a2-wohnungssuche", title:"Chat-Nachrichten: Wohnungssuche", titleEn:"Chat messages: apartment hunting",
text:"Anna: Hast du schon eine Wohnung gefunden? — Jonas: Noch nicht, aber ich habe morgen einen Besichtigungstermin! Ein Zimmer, 28 Quadratmeter, Küche und Bad geteilt mit einer anderen Person. — Anna: Klingt gut. Wie hoch ist die Miete? — Jonas: 420 Euro warm, das ist okay für die Stadt. Der Vermieter will aber eine Kaution von zwei Monatsmieten. — Anna: Das ist normal hier. Viel Glück morgen! — Jonas: Danke, ich sage dir Bescheid.",
vocab:[["der Besichtigungstermin","viewing appointment"],["die Miete","rent"],["warm","utilities included"],["der Vermieter","landlord"],["die Kaution","deposit"]],
q:[
{q:"Was hat Jonas morgen?", o:["Einen Arzttermin","Einen Besichtigungstermin","Ein Vorstellungsgespräch"], c:1, h:"„ich habe morgen einen Besichtigungstermin!“"},
{q:"Wie hoch ist die Miete?", o:["280 Euro","420 Euro","520 Euro"], c:1, h:"„420 Euro warm“"},
{q:"Was verlangt der Vermieter zusätzlich?", o:["Eine Kaution","Einen Bürgen","Ein Referenzschreiben"], c:0, h:"„eine Kaution von zwei Monatsmieten.“"}
]}

]},

{level:"B1", color:"#bf5af2", texts:[

{id:"b1-erster-arbeitstag", title:"Der erste Arbeitstag", titleEn:"The first day at work",
text:"Heute war mein erster Arbeitstag in der neuen Firma, und ich war ziemlich aufgeregt. Schon am Eingang wurde ich von meiner neuen Kollegin Frau Weber freundlich empfangen. Sie hat mir den ganzen Betrieb gezeigt und mich allen Mitarbeitern vorgestellt. Am Anfang habe ich nicht alles verstanden, weil viele im Dialekt gesprochen haben, aber alle waren geduldig und haben langsamer gesprochen, wenn ich nachgefragt habe. Mittags haben wir zusammen in der Kantine gegessen, und ich habe schon ein bisschen über meine Kollegen erfahren. Am Nachmittag habe ich meine erste kleine Aufgabe bekommen: Ersatzteile sortieren und die Lagerliste aktualisieren. Es war anstrengend, aber ich bin froh, dass ich hier arbeiten darf.",
vocab:[["aufgeregt","nervous, excited"],["empfangen","to receive/welcome"],["der Dialekt","dialect"],["die Kantine","canteen"],["das Ersatzteil","spare part"],["die Lagerliste","warehouse/stock list"]],
q:[
{q:"Wie hat sich die Person am ersten Tag gefühlt?", o:["Gelangweilt","Aufgeregt","Wütend"], c:1, h:"„ich war ziemlich aufgeregt.“"},
{q:"Warum hat die Person am Anfang nicht alles verstanden?", o:["Die Kollegen haben zu leise gesprochen.","Viele haben im Dialekt gesprochen.","Es war zu laut in der Halle."], c:1, h:"„weil viele im Dialekt gesprochen haben“"},
{q:"Was hat die Person am Nachmittag gemacht?", o:["Eine Schulung besucht","Ersatzteile sortiert","Ein Vorstellungsgespräch geführt"], c:1, h:"„Ersatzteile sortieren und die Lagerliste aktualisieren.“"},
{type:"gap", q:"Wo haben die Kollegen mittags zusammen gegessen? Ein Wort.", a:["kantine","der kantine","in der kantine"], h:"„haben wir zusammen in der Kantine gegessen“"}
]},

{id:"b1-wochenendausflug", title:"Ein Ausflug am Wochenende", titleEn:"A weekend trip",
text:"Am Samstag sind wir früh aufgestanden und mit dem Zug in die Berge gefahren. Das Wetter war zum Glück perfekt: sonnig, aber nicht zu heiß. Nach der Ankunft sind wir eine Wanderung gestartet, die etwa vier Stunden gedauert hat. Unterwegs haben wir an einem See eine Pause gemacht und dort zu Mittag gegessen — mitgebrachte Brote und frisches Obst. Gegen Nachmittag haben wir den Gipfel erreicht und hatten eine wunderbare Aussicht über das ganze Tal. Auf dem Rückweg waren wir zwar müde, aber sehr zufrieden. Solche Ausflüge machen wir jetzt regelmäßig, weil sie ein guter Ausgleich zum stressigen Alltag sind.",
vocab:[["die Wanderung","hike"],["der Gipfel","summit, peak"],["die Aussicht","view"],["das Tal","valley"],["der Ausgleich","balance, compensation"]],
q:[
{q:"Wie sind sie in die Berge gekommen?", o:["Mit dem Auto","Mit dem Zug","Zu Fuß"], c:1, h:"„mit dem Zug in die Berge gefahren.“"},
{q:"Wo haben sie eine Pause gemacht?", o:["Am See","Auf dem Gipfel","Im Dorf"], c:0, h:"„an einem See eine Pause gemacht“"},
{q:"Warum machen sie solche Ausflüge jetzt regelmäßig?", o:["Weil es billig ist.","Als Ausgleich zum stressigen Alltag.","Weil Freunde mitkommen."], c:1, h:"„weil sie ein guter Ausgleich zum stressigen Alltag sind.“"}
]},

{id:"b1-warum-deutschland", title:"Interview: Warum nach Deutschland?", titleEn:"Interview: why Germany?",
text:"Reporter: Warum haben Sie sich entschieden, für eine Ausbildung nach Deutschland zu gehen? — Léa: Ich wollte schon immer im Ausland arbeiten, und in meinem Heimatland gibt es in meinem Beruf wenig Chancen. In Deutschland werden Fachkräfte gesucht, und die duale Ausbildung war für mich sehr attraktiv, weil man von Anfang an Geld verdient und trotzdem lernt. — Reporter: Was war die größte Herausforderung? — Léa: Am Anfang eindeutig die Sprache, besonders die Fachbegriffe im Betrieb. Aber mein Sprachkurs vorher hat mir sehr geholfen, und meine Kollegen waren geduldig. — Reporter: Würden Sie es wieder so machen? — Léa: Auf jeden Fall, es war die richtige Entscheidung für mich.",
vocab:[["die Fachkraft","skilled worker"],["die duale Ausbildung","dual vocational training"],["die Herausforderung","challenge"],["der Fachbegriff","technical term"]],
q:[
{q:"Warum ist Léa nach Deutschland gegangen?", o:["Wegen des Wetters","Weil es in ihrem Beruf wenig Chancen zu Hause gab","Wegen ihrer Familie"], c:1, h:"„in meinem Heimatland gibt es in meinem Beruf wenig Chancen.“"},
{q:"Was findet Léa an der dualen Ausbildung attraktiv?", o:["Man verdient von Anfang an Geld und lernt trotzdem.","Sie dauert nur ein Jahr.","Man muss nicht zur Schule gehen."], c:0, h:"„man verdient von Anfang an Geld und lernt trotzdem.“"},
{q:"Was war für Léa am Anfang am schwierigsten?", o:["Das Wetter","Die Sprache, besonders Fachbegriffe","Das Essen"], c:1, h:"„Am Anfang eindeutig die Sprache, besonders die Fachbegriffe im Betrieb.“"}
]}

]},

{level:"B2", color:"#ff9f0a", texts:[

{id:"b2-fachkraeftemangel", title:"Diskussion: Fachkräftemangel und Zuwanderung", titleEn:"Discussion: skilled worker shortage and immigration",
text:"Moderatorin: Der Fachkräftemangel gilt seit Jahren als eines der drängendsten Probleme der deutschen Wirtschaft. Herr Brandt, wie schätzen Sie die Lage ein? — Brandt: Die Situation ist ernst. In Pflegeberufen, im Handwerk und in der IT fehlen bundesweit hunderttausende Arbeitskräfte, und die demografische Entwicklung wird das in den kommenden Jahren eher verschärfen als entspannen. Ohne gezielte Zuwanderung qualifizierter Fachkräfte aus dem Ausland lässt sich diese Lücke kaum schließen. — Moderatorin: Was müsste sich ändern, damit mehr Menschen aus dem Ausland tatsächlich hierherkommen? — Brandt: Vor allem die Anerkennung ausländischer Abschlüsse muss schneller und unbürokratischer werden. Viele Interessierte scheitern nicht an fehlender Qualifikation, sondern an monatelangen Verfahren. Außerdem brauchen wir mehr niedrigschwellige Sprachangebote, idealerweise schon im Herkunftsland, damit der Einstieg hier leichter fällt. — Moderatorin: Sehen Sie auch Chancen für die Herkunftsländer? — Brandt: Durchaus, wenn Ausbildung und Erfahrung später auch wieder zurückfließen können — allerdings ist das eine langfristige, keine kurzfristige Entwicklung.",
vocab:[["der Fachkräftemangel","skilled labor shortage"],["drängend","pressing, urgent"],["die Anerkennung","recognition"],["niedrigschwellig","low-threshold, easily accessible"],["zurückfließen","to flow back"]],
q:[
{q:"In welchen Bereichen nennt Herr Brandt besonders großen Fachkräftemangel?", o:["Tourismus, Kultur, Sport","Pflege, Handwerk, IT","Landwirtschaft, Fischerei, Bergbau"], c:1, h:"„In Pflegeberufen, im Handwerk und in der IT fehlen … Arbeitskräfte“"},
{q:"Was hält Brandt für das größte Hindernis bei der Zuwanderung von Fachkräften?", o:["Fehlende Qualifikation der Bewerber","Zu langsame Anerkennung ausländischer Abschlüsse","Zu hohe Gehälter in Deutschland"], c:1, h:"„Viele Interessierte scheitern nicht an fehlender Qualifikation, sondern an monatelangen Verfahren.“"},
{q:"Was schlägt Brandt zusätzlich vor?", o:["Mehr Sprachangebote, idealerweise schon im Herkunftsland","Höhere Löhne für alle Berufe","Weniger Bürokratie bei der Steuer"], c:0, h:"„mehr niedrigschwellige Sprachangebote, idealerweise schon im Herkunftsland“"},
{type:"gap", q:"Welche Entwicklung nennt Brandt am Ende — kurzfristig oder langfristig? Ein Wort.", a:["langfristig","eine langfristige"], h:"„das ist eine langfristige, keine kurzfristige Entwicklung.“"}
]},

{id:"b2-neue-stadt", title:"Zeitungsartikel: Leben in einer neuen Stadt", titleEn:"Newspaper article: living in a new city",
text:"Wer in eine neue Stadt zieht, unterschätzt oft, wie lange es dauert, sich wirklich heimisch zu fühlen. Umfragen unter Zugezogenen zeigen: Die ersten Monate sind geprägt von organisatorischen Fragen — Wohnungssuche, Behördengänge, das Zurechtfinden im Nahverkehr —, während der Aufbau eines echten sozialen Netzes häufig erst danach beginnt und deutlich länger dauert als erwartet. Besonders hilfreich erweisen sich dabei Vereine, Sprachtandems und Nachbarschaftsinitiativen, die gezielt Kontakte zwischen Alteingesessenen und Neuankömmlingen fördern. Expertinnen raten außerdem dazu, sich von anfänglichen Rückschlägen nicht entmutigen zu lassen: Das Gefühl, „nirgendwo richtig dazuzugehören“, sei in der Anfangsphase normal und lege sich in aller Regel nach etwa einem Jahr. Wer aktiv auf Menschen zugeht, statt auf zufällige Gelegenheiten zu warten, komme laut den befragten Fachleuten deutlich schneller an.",
vocab:[["sich heimisch fühlen","to feel at home"],["der Behördengang","errand at a government office"],["sich zurechtfinden","to find one's way around"],["der Rückschlag","setback"],["dazugehören","to belong"]],
q:[
{q:"Womit sind laut Artikel die ersten Monate in einer neuen Stadt vor allem geprägt?", o:["Mit dem Aufbau enger Freundschaften","Mit organisatorischen Fragen wie Wohnung und Behörden","Mit der Jobsuche allein"], c:1, h:"„geprägt von organisatorischen Fragen — Wohnungssuche, Behördengänge, das Zurechtfinden im Nahverkehr“"},
{q:"Was hilft laut Artikel besonders beim Aufbau sozialer Kontakte?", o:["Vereine, Sprachtandems, Nachbarschaftsinitiativen","Ausschließlich Online-Netzwerke","Regelmäßiger Wohnortwechsel"], c:0, h:"„Vereine, Sprachtandems und Nachbarschaftsinitiativen“"},
{q:"Wie lange dauert es laut Expertinnen meist, bis sich das Gefühl der Fremdheit legt?", o:["Wenige Wochen","Etwa ein Jahr","Mehrere Jahrzehnte"], c:1, h:"„lege sich in aller Regel nach etwa einem Jahr.“"}
]},

{id:"b2-work-life-balance", title:"Podcast-Transkript: Work-Life-Balance in Deutschland", titleEn:"Podcast transcript: work-life balance in Germany", 
text:"Sprecherin: In dieser Folge geht es um ein Thema, das viele Zugezogene überrascht: die deutsche Auffassung von Work-Life-Balance. Im Gegensatz zu dem Bild, das man oft im Ausland hat — pünktlich, diszipliniert, immer erreichbar —, legen viele deutsche Arbeitnehmer großen Wert auf eine klare Trennung zwischen Arbeit und Freizeit. Überstunden werden häufig nicht als Zeichen von Engagement gesehen, sondern eher kritisch, weil sie auf schlechte Planung hindeuten könnten. Auch das Konzept des Urlaubs wird ernst genommen: In vielen Betrieben gilt es als unhöflich, im Urlaub dienstliche E-Mails zu beantworten. Für Berufseinsteiger aus anderen Arbeitskulturen kann das zunächst ungewohnt wirken — manche empfinden es sogar als Vertrauensverlust, wenn niemand nachfragt, ob man auch im Urlaub erreichbar bleibt. Tatsächlich handelt es sich aber meist um das Gegenteil: ein hohes Maß an Vertrauen in die eigenständige Arbeitsorganisation der Mitarbeitenden.",
vocab:[["die Auffassung","view, understanding"],["erreichbar","reachable, available"],["hindeuten auf","to indicate, point to"],["der Vertrauensverlust","loss of trust"],["eigenständig","independent, autonomous"]],
q:[
{q:"Wie werden Überstunden in Deutschland laut Text oft gesehen?", o:["Als Zeichen von großem Engagement","Eher kritisch, als Hinweis auf schlechte Planung","Als völlig normal und erwünscht"], c:1, h:"„werden häufig nicht als Zeichen von Engagement gesehen, sondern eher kritisch“"},
{q:"Wie wird es in vielen Betrieben gesehen, im Urlaub dienstliche E-Mails zu beantworten?", o:["Als selbstverständlich","Als unhöflich","Als Pflicht"], c:1, h:"„gilt es als unhöflich, im Urlaub dienstliche E-Mails zu beantworten.“"},
{q:"Was bedeutet es laut Text eigentlich, wenn niemand im Urlaub nachfragt?", o:["Desinteresse am Mitarbeiter","Ein hohes Maß an Vertrauen","Eine versteckte Kritik"], c:1, h:"„ein hohes Maß an Vertrauen in die eigenständige Arbeitsorganisation“"}
]}

]}

]
};

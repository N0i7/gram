/* FLOß Grammatik – Referenz-Tabellen
   Eine Quelle, zwei Verwendungen:
   1) referenz.html zeigt ALLE Tabellen auf einer Seite (zum gezielten Nachschlagen).
   2) engine.js baut daraus einen ausklappbaren "Vollständige Tabelle"-Block direkt
      unter passenden Themen auf a1.html–c2.html (wenn ein Thema ref:"<key>" gesetzt hat).
   Beide lesen aus window.REF_TABLES / window.REF_META — nichts wird doppelt gepflegt. */
(function(){

const REF_TABLES = {};
const REF_META = [];

function add(id, chip, title, titleEn, group, html){
  REF_TABLES[id] = html;
  REF_META.push({id, chip, title, titleEn, group});
}

/* ========================================================= */
/* 1 · ARTIKEL & GRUNDDEKLINATION                             */
/* ========================================================= */
add("artikel", "Artikel", "Artikeldeklination: der/die/das, ein, kein", "Article declension — definite, indefinite, negative", "Artikel & Pronomen", `
<p>Alle drei Artikel-Familien in allen vier Fällen. <b>mein/dein/sein…</b> (Possessivartikel) folgen exakt dem Muster von <b>ein/kein</b> — siehe die Possessivpronomen-Tabelle.</p>
<h4 class="ref-h">Bestimmter Artikel (der/die/das)</h4>
<table class="wide"><tr><th></th><th>maskulin</th><th>feminin</th><th>neutral</th><th>Plural</th></tr>
<tr><td class="thn">Nominativ</td><td class="tdn"><b>der</b> Mann</td><td class="tdn"><b>die</b> Frau</td><td class="tdn"><b>das</b> Kind</td><td class="tdn"><b>die</b> Leute</td></tr>
<tr><td class="tha">Akkusativ</td><td class="tda"><b>den</b> Mann</td><td class="tda"><b>die</b> Frau</td><td class="tda"><b>das</b> Kind</td><td class="tda"><b>die</b> Leute</td></tr>
<tr><td class="thd">Dativ</td><td class="tdd"><b>dem</b> Mann</td><td class="tdd"><b>der</b> Frau</td><td class="tdd"><b>dem</b> Kind</td><td class="tdd"><b>den</b> Leute<b>n</b></td></tr>
<tr><td class="thg">Genitiv</td><td class="tdg"><b>des</b> Mann<b>es</b></td><td class="tdg"><b>der</b> Frau</td><td class="tdg"><b>des</b> Kind<b>es</b></td><td class="tdg"><b>der</b> Leute</td></tr></table>
<h4 class="ref-h">Unbestimmter Artikel (ein) &amp; verneinter Artikel (kein)</h4>
<table class="wide"><tr><th></th><th>maskulin</th><th>feminin</th><th>neutral</th><th>Plural <span class="en">(nur kein)</span></th></tr>
<tr><td class="thn">Nominativ</td><td class="tdn"><b>ein</b> Mann</td><td class="tdn"><b>eine</b> Frau</td><td class="tdn"><b>ein</b> Kind</td><td class="tdn"><b>keine</b> Leute</td></tr>
<tr><td class="tha">Akkusativ</td><td class="tda"><b>einen</b> Mann</td><td class="tda"><b>eine</b> Frau</td><td class="tda"><b>ein</b> Kind</td><td class="tda"><b>keine</b> Leute</td></tr>
<tr><td class="thd">Dativ</td><td class="tdd"><b>einem</b> Mann</td><td class="tdd"><b>einer</b> Frau</td><td class="tdd"><b>einem</b> Kind</td><td class="tdd"><b>keinen</b> Leute<b>n</b></td></tr>
<tr><td class="thg">Genitiv</td><td class="tdg"><b>eines</b> Mann<b>es</b></td><td class="tdg"><b>einer</b> Frau</td><td class="tdg"><b>eines</b> Kind<b>es</b></td><td class="tdg"><b>keiner</b> Leute</td></tr></table>
<p><b>ein</b> selbst hat keinen Plural (man kann nicht „einer Männer" sagen) — nur <b>kein</b> und die Possessivartikel haben einen Plural.</p>
<div class="merk"><b>Genitiv-Endung am Nomen:</b> einsilbige maskuline/neutrale Nomen bekommen meist <b>-es</b> (des Mann<b>es</b>, des Kind<b>es</b>), längere meist nur <b>-s</b> (des Auto<b>s</b>, des Lehrer<b>s</b>). Nomen auf -s/-ß/-x/-z bekommen immer -es (des Fluss<b>es</b>).<br><span class="en">Short nouns usually add -es in the genitive, longer nouns just -s.</span></div>`);

/* ========================================================= */
/* 2 · ADJEKTIVDEKLINATION — die komplette Tabelle            */
/* ========================================================= */
add("adjektivdeklination", "Adjektive", "Adjektivdeklination: alle 3 Systeme komplett", "Adjective endings — all 3 declension systems in full", "Adjektive", `
<p>Es gibt genau <b>drei Systeme</b>, je nachdem was vor dem Adjektiv steht. Beispieladjektiv: <b>klein</b>.</p>
<h4 class="ref-h">1 · Schwache Deklination — nach der/die/das, dieser, jeder, welcher, jener, derselbe</h4>
<table class="wide"><tr><th></th><th>maskulin</th><th>feminin</th><th>neutral</th><th>Plural</th></tr>
<tr><td class="thn">Nominativ</td><td class="tdn">der klein<b>e</b> Mann</td><td class="tdn">die klein<b>e</b> Frau</td><td class="tdn">das klein<b>e</b> Kind</td><td class="tdn">die klein<b>en</b> Leute</td></tr>
<tr><td class="tha">Akkusativ</td><td class="tda">den klein<b>en</b> Mann</td><td class="tda">die klein<b>e</b> Frau</td><td class="tda">das klein<b>e</b> Kind</td><td class="tda">die klein<b>en</b> Leute</td></tr>
<tr><td class="thd">Dativ</td><td class="tdd">dem klein<b>en</b> Mann</td><td class="tdd">der klein<b>en</b> Frau</td><td class="tdd">dem klein<b>en</b> Kind</td><td class="tdd">den klein<b>en</b> Leuten</td></tr>
<tr><td class="thg">Genitiv</td><td class="tdg">des klein<b>en</b> Mannes</td><td class="tdg">der klein<b>en</b> Frau</td><td class="tdg">des klein<b>en</b> Kindes</td><td class="tdg">der klein<b>en</b> Leute</td></tr></table>
<p class="en">Only -e or -en. Nominative singular (all genders) and feminine/neuter accusative = -e. Everything else = -en.</p>
<h4 class="ref-h">2 · Gemischte Deklination — nach ein, kein, mein/dein/sein…</h4>
<table class="wide"><tr><th></th><th>maskulin</th><th>feminin</th><th>neutral</th><th>Plural</th></tr>
<tr><td class="thn">Nominativ</td><td class="tdn">ein klein<b>er</b> Mann</td><td class="tdn">eine klein<b>e</b> Frau</td><td class="tdn">ein klein<b>es</b> Kind</td><td class="tdn">keine klein<b>en</b> Leute</td></tr>
<tr><td class="tha">Akkusativ</td><td class="tda">einen klein<b>en</b> Mann</td><td class="tda">eine klein<b>e</b> Frau</td><td class="tda">ein klein<b>es</b> Kind</td><td class="tda">keine klein<b>en</b> Leute</td></tr>
<tr><td class="thd">Dativ</td><td class="tdd">einem klein<b>en</b> Mann</td><td class="tdd">einer klein<b>en</b> Frau</td><td class="tdd">einem klein<b>en</b> Kind</td><td class="tdd">keinen klein<b>en</b> Leuten</td></tr>
<tr><td class="thg">Genitiv</td><td class="tdg">eines klein<b>en</b> Mannes</td><td class="tdg">einer klein<b>en</b> Frau</td><td class="tdg">eines klein<b>en</b> Kindes</td><td class="tdg">keiner klein<b>en</b> Leute</td></tr></table>
<p class="en">Only the nominative (masc./neut.) and accusative (neut.) show the article's own gender ending (-er/-es). Everywhere else: -en.</p>
<h4 class="ref-h">3 · Starke Deklination — ganz ohne Artikel</h4>
<table class="wide"><tr><th></th><th>maskulin</th><th>feminin</th><th>neutral</th><th>Plural</th></tr>
<tr><td class="thn">Nominativ</td><td class="tdn">klein<b>er</b> Mann</td><td class="tdn">klein<b>e</b> Frau</td><td class="tdn">klein<b>es</b> Kind</td><td class="tdn">klein<b>e</b> Leute</td></tr>
<tr><td class="tha">Akkusativ</td><td class="tda">klein<b>en</b> Mann</td><td class="tda">klein<b>e</b> Frau</td><td class="tda">klein<b>es</b> Kind</td><td class="tda">klein<b>e</b> Leute</td></tr>
<tr><td class="thd">Dativ</td><td class="tdd">klein<b>em</b> Mann</td><td class="tdd">klein<b>er</b> Frau</td><td class="tdd">klein<b>em</b> Kind</td><td class="tdd">klein<b>en</b> Leuten</td></tr>
<tr><td class="thg">Genitiv</td><td class="tdg">klein<b>en</b> Mannes <span class="en">(selten)</span></td><td class="tdg">klein<b>er</b> Frau</td><td class="tdg">klein<b>en</b> Kindes <span class="en">(selten)</span></td><td class="tdg">klein<b>er</b> Leute</td></tr></table>
<p class="en">The adjective itself carries the article-like ending (almost identical to der/die/das). Typical after nothing at all: mass nouns, plurals without article, after numbers, in headlines (guter Kaffee, frische Blumen). The masculine/neuter genitive is rare — speakers usually add an article instead (des kleinen Mannes) to avoid it.</p>
<div class="merk"><b>Merksatz für alle drei Systeme:</b> Im Zweifel <b>-en</b> — das stimmt in weit über der Hälfte aller Felder. Nur 6 Felder in der ganzen Tabelle sind KEIN -en: die drei Nominative Singular + die zwei Akkusative (fem./neutr.) der schwachen Deklination, plus die vier „nackten" Endungen (-er/-e/-es/-e) im Nominativ der starken Deklination.<br><span class="en">When in doubt: -en. Only the nominative singular (all 3 systems) and the feminine/neuter accusative (weak/mixed) break the -en pattern.</span></div>`);

/* ========================================================= */
/* 3 · PERSONALPRONOMEN                                       */
/* ========================================================= */
add("pronomen_personal", "Personal-Pron.", "Personalpronomen komplett (inkl. Genitiv)", "Personal pronouns — all 4 cases", "Artikel & Pronomen", `
<table class="wide"><tr><th></th><th>ich</th><th>du</th><th>er</th><th>sie</th><th>es</th><th>wir</th><th>ihr</th><th>sie</th><th>Sie</th></tr>
<tr><td class="thn">Nominativ</td><td class="tdn">ich</td><td class="tdn">du</td><td class="tdn">er</td><td class="tdn">sie</td><td class="tdn">es</td><td class="tdn">wir</td><td class="tdn">ihr</td><td class="tdn">sie</td><td class="tdn">Sie</td></tr>
<tr><td class="tha">Akkusativ</td><td class="tda">mich</td><td class="tda">dich</td><td class="tda">ihn</td><td class="tda">sie</td><td class="tda">es</td><td class="tda">uns</td><td class="tda">euch</td><td class="tda">sie</td><td class="tda">Sie</td></tr>
<tr><td class="thd">Dativ</td><td class="tdd">mir</td><td class="tdd">dir</td><td class="tdd">ihm</td><td class="tdd">ihr</td><td class="tdd">ihm</td><td class="tdd">uns</td><td class="tdd">euch</td><td class="tdd">ihnen</td><td class="tdd">Ihnen</td></tr>
<tr><td class="thg">Genitiv</td><td class="tdg">meiner</td><td class="tdg">deiner</td><td class="tdg">seiner</td><td class="tdg">ihrer</td><td class="tdg">seiner</td><td class="tdg">unser</td><td class="tdg">euer</td><td class="tdg">ihrer</td><td class="tdg">Ihrer</td></tr></table>
<p><b>Der Genitiv ist heute sehr selten</b> — nur nach ein paar festen Verben/Ausdrücken: <i>sich erinnern an</i> (heute meist mit an+Akk. statt Genitiv), <i>bedürfen</i>, <i>sich schämen</i>, gehobene Wendungen wie <i>Ich gedenke seiner</i>. Für den Alltag reichen Nominativ, Akkusativ und Dativ völlig.</p>
<p class="en">The genitive of personal pronouns is nearly extinct in everyday German — you'll mostly meet it in formal/literary language. Nominative, accusative and dative are what you actually need.</p>`);

/* ========================================================= */
/* 4 · POSSESSIVPRONOMEN                                      */
/* ========================================================= */
add("pronomen_possessiv", "Possessiv-Pron.", "Possessivartikel/-pronomen komplett dekliniert", "Possessives — fully declined, all persons", "Artikel & Pronomen", `
<p>Alle acht Stämme: <b>mein</b> (ich) · <b>dein</b> (du) · <b>sein</b> (er/es) · <b>ihr</b> (sie) · <b>unser</b> (wir) · <b>euer</b> (ihr) · <b>ihr</b> (sie, Pl.) · <b>Ihr</b> (Sie, formell). Alle dekliniert exakt wie <b>ein/kein</b> — hier komplett am Beispiel <b>mein</b>:</p>
<table class="wide"><tr><th></th><th>maskulin</th><th>feminin</th><th>neutral</th><th>Plural</th></tr>
<tr><td class="thn">Nominativ</td><td class="tdn"><b>mein</b> Bruder</td><td class="tdn"><b>meine</b> Schwester</td><td class="tdn"><b>mein</b> Kind</td><td class="tdn"><b>meine</b> Eltern</td></tr>
<tr><td class="tha">Akkusativ</td><td class="tda"><b>meinen</b> Bruder</td><td class="tda"><b>meine</b> Schwester</td><td class="tda"><b>mein</b> Kind</td><td class="tda"><b>meine</b> Eltern</td></tr>
<tr><td class="thd">Dativ</td><td class="tdd"><b>meinem</b> Bruder</td><td class="tdd"><b>meiner</b> Schwester</td><td class="tdd"><b>meinem</b> Kind</td><td class="tdd"><b>meinen</b> Eltern</td></tr>
<tr><td class="thg">Genitiv</td><td class="tdg"><b>meines</b> Bruders</td><td class="tdg"><b>meiner</b> Schwester</td><td class="tdg"><b>meines</b> Kindes</td><td class="tdg"><b>meiner</b> Eltern</td></tr></table>
<div class="merk"><b>Falle bei euer:</b> Vor einer Endung fällt das zweite e weg: nicht „euere", sondern <b>eure</b>, <b>eurem</b>, <b>euren</b>. Also: eu<b>er</b> Auto, aber eu<b>re</b> Mutter.<br><span class="en">euer drops its second e before an ending: eure, eurem, euren.</span></div>`);

/* ========================================================= */
/* 5 · REFLEXIVPRONOMEN                                       */
/* ========================================================= */
add("pronomen_reflexiv", "Reflexiv-Pron.", "Reflexivpronomen: Akkusativ & Dativ", "Reflexive pronouns — accusative & dative", "Artikel & Pronomen", `
<table class="wide"><tr><th></th><th>ich</th><th>du</th><th>er/sie/es</th><th>wir</th><th>ihr</th><th>sie</th><th>Sie</th></tr>
<tr><td class="tha">Akkusativ</td><td class="tda">mich</td><td class="tda">dich</td><td class="tda">sich</td><td class="tda">uns</td><td class="tda">euch</td><td class="tda">sich</td><td class="tda">sich</td></tr>
<tr><td class="thd">Dativ</td><td class="tdd">mir</td><td class="tdd">dir</td><td class="tdd">sich</td><td class="tdd">uns</td><td class="tdd">euch</td><td class="tdd">sich</td><td class="tdd">sich</td></tr></table>
<p>Nur bei <b>ich</b> und <b>du</b> unterscheiden sich Akkusativ und Dativ (mich/mir, dich/dir) — bei allen anderen Personen heißt es immer <b>sich</b>, <b>uns</b> oder <b>euch</b>.</p>
<p><b>Dativ statt Akkusativ</b>, wenn schon ein Akkusativ-Objekt im Satz steht: Ich wasche <b>mich</b>. → Ich wasche <b>mir</b> die Hände.</p>
<p class="en">Only ich/du distinguish accusative from dative. All other persons use the same form for both. Switch to dative when there's already a direct object (Ich wasche mir die Hände — I wash my hands).</p>`);

/* ========================================================= */
/* 6 · RELATIVPRONOMEN                                        */
/* ========================================================= */
add("pronomen_relativ", "Relativ-Pron.", "Relativpronomen komplett (inkl. Genitiv)", "Relative pronouns — all 4 cases", "Artikel & Pronomen", `
<table class="wide"><tr><th></th><th>maskulin</th><th>feminin</th><th>neutral</th><th>Plural</th></tr>
<tr><td class="thn">Nominativ</td><td class="tdn">der</td><td class="tdn">die</td><td class="tdn">das</td><td class="tdn">die</td></tr>
<tr><td class="tha">Akkusativ</td><td class="tda">den</td><td class="tda">die</td><td class="tda">das</td><td class="tda">die</td></tr>
<tr><td class="thd">Dativ</td><td class="tdd">dem</td><td class="tdd">der</td><td class="tdd">dem</td><td class="tdd">denen</td></tr>
<tr><td class="thg">Genitiv</td><td class="tdg"><b>dessen</b></td><td class="tdg"><b>deren</b></td><td class="tdg"><b>dessen</b></td><td class="tdg"><b>deren</b></td></tr></table>
<div class="ex">Der Genitiv ersetzt „sein/ihr" innerhalb des Relativsatzes: Das ist der Kollege, <b>dessen</b> Auto kaputt ist. (= sein Auto)<br>Die Frau, <b>deren</b> Sohn hier lernt, ist Ärztin. (= ihr Sohn)</div>
<p><b>welcher/welche/welches</b> ist eine seltene, etwas formelle Alternative zu der/die/das (nur Nom./Akk./Dat., keinen eigenen Genitiv — dort bleibt „dessen/deren").</p>
<p><b>was</b> statt der/die/das: nach <i>etwas, nichts, alles, das Einzige</i> und nach einem ganzen Satz. <b>wo(r)+Präposition</b> als Alternative zu Präposition+dem bei Sachen: der Ort, <b>wo</b> ich wohne = in <b>dem</b> ich wohne.</p>
<p class="en">Genitive dessen/deren replaces sein/ihr inside the clause. welcher is a formal alternative (no genitive of its own). was after etwas/nichts/alles or a whole clause. wo(r)+preposition as an alternative for places/things.</p>`);

/* ========================================================= */
/* 7 · DEMONSTRATIVPRONOMEN                                   */
/* ========================================================= */
add("pronomen_demonstrativ", "Demonstrativ-Pron.", "Demonstrativpronomen komplett: dieser, jener, derselbe", "Demonstrative pronouns — full declension", "Artikel & Pronomen", `
<table class="wide"><tr><th></th><th>maskulin</th><th>feminin</th><th>neutral</th><th>Plural</th></tr>
<tr><td class="thn">Nominativ</td><td class="tdn">dies<b>er</b></td><td class="tdn">dies<b>e</b></td><td class="tdn">dies<b>es</b></td><td class="tdn">dies<b>e</b></td></tr>
<tr><td class="tha">Akkusativ</td><td class="tda">dies<b>en</b></td><td class="tda">dies<b>e</b></td><td class="tda">dies<b>es</b></td><td class="tda">dies<b>e</b></td></tr>
<tr><td class="thd">Dativ</td><td class="tdd">dies<b>em</b></td><td class="tdd">dies<b>er</b></td><td class="tdd">dies<b>em</b></td><td class="tdd">dies<b>en</b></td></tr>
<tr><td class="thg">Genitiv</td><td class="tdg">dies<b>es</b></td><td class="tdg">dies<b>er</b></td><td class="tdg">dies<b>es</b></td><td class="tdg">dies<b>er</b></td></tr></table>
<p><b>jener</b> (= „jener dort") dekliniert genau gleich (jener, jene, jenes…), klingt aber altmodisch — im Alltag sagt man lieber <i>der/die/das … da</i>.</p>
<p><b>derselbe</b> (= genau der gleiche, ein Exemplar) und <b>derjenige</b> (= genau der, von dem die Rede ist) sind Doppelwörter: der erste Teil dekliniert wie der bestimmte Artikel, der zweite Teil wie ein schwaches Adjektiv: <i>desselben Mannes, derselben Frau, demselben Kind</i>.</p>
<p><b>solcher/solche/solches</b> (= „so ein") dekliniert wie dieser: <i>Solche Fehler passieren jedem.</i></p>
<p class="en">dieser follows der/die/das exactly, including the genitive. derselbe/derjenige are two-part words: der-part declines like the definite article, the rest like a weak adjective.</p>`);

/* ========================================================= */
/* 8 · INTERROGATIVPRONOMEN                                   */
/* ========================================================= */
add("pronomen_interrogativ", "Frage-Pron.", "Fragepronomen komplett: wer, was, welcher", "Interrogative pronouns — full declension", "Artikel & Pronomen", `
<h4 class="ref-h">wer (für Personen) &amp; was (für Sachen)</h4>
<table class="wide"><tr><th></th><th>wer <span class="en">(person)</span></th><th>was <span class="en">(thing)</span></th></tr>
<tr><td class="thn">Nominativ</td><td class="tdn">wer</td><td class="tdn">was</td></tr>
<tr><td class="tha">Akkusativ</td><td class="tda">wen</td><td class="tda">was</td></tr>
<tr><td class="thd">Dativ</td><td class="tdd">wem</td><td class="tdd">— <span class="en">(stattdessen wo(r)+Präp.)</span></td></tr>
<tr><td class="thg">Genitiv</td><td class="tdg">wessen</td><td class="tdg">—</td></tr></table>
<p class="en">was has no dative/genitive of its own — use wo(r)+preposition instead: Womit schreibst du? (not "mit was").</p>
<h4 class="ref-h">welcher/welche/welches — dekliniert wie dieser</h4>
<table class="wide"><tr><th></th><th>maskulin</th><th>feminin</th><th>neutral</th><th>Plural</th></tr>
<tr><td class="thn">Nominativ</td><td class="tdn">welch<b>er</b></td><td class="tdn">welch<b>e</b></td><td class="tdn">welch<b>es</b></td><td class="tdn">welch<b>e</b></td></tr>
<tr><td class="tha">Akkusativ</td><td class="tda">welch<b>en</b></td><td class="tda">welch<b>e</b></td><td class="tda">welch<b>es</b></td><td class="tda">welch<b>e</b></td></tr>
<tr><td class="thd">Dativ</td><td class="tdd">welch<b>em</b></td><td class="tdd">welch<b>er</b></td><td class="tdd">welch<b>em</b></td><td class="tdd">welch<b>en</b></td></tr></table>
<div class="ex"><b>Welchen</b> Film hast du gesehen? · Mit <b>welcher</b> Bahn fährst du?</div>
<p><b>was für ein/eine/ein</b> (= what kind of) dekliniert der Artikelteil wie ein/kein: <i>Was für ein Auto hast du?</i> · <i>Mit was für einer Farbe?</i></p>
<p class="en">welcher matches dieser's endings exactly. was für ein asks about the kind/type; only the ein-part declines.</p>`);

/* ========================================================= */
/* 9 · INDEFINITPRONOMEN                                      */
/* ========================================================= */
add("pronomen_indefinit", "Indefinit-Pron.", "Indefinitpronomen komplett: man, jemand, jeder, alle …", "Indefinite pronouns — full declension", "Artikel & Pronomen", `
<h4 class="ref-h">man — nur im Nominativ, sonst einen/einem</h4>
<table class="wide"><tr><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr><tr><td class="tdn">man</td><td class="tda"><b>einen</b></td><td class="tdd"><b>einem</b></td></tr></table>
<div class="ex">Man muss das üben. → Das hilft <b>einem</b> wirklich. (nicht „hilft man")</div>
<h4 class="ref-h">jemand / niemand</h4>
<table class="wide"><tr><th></th><th>jemand</th><th>niemand</th></tr>
<tr><td class="thn">Nominativ</td><td class="tdn">jemand</td><td class="tdn">niemand</td></tr>
<tr><td class="tha">Akkusativ</td><td class="tda">jemand<span class="en">(en)</span></td><td class="tda">niemand<span class="en">(en)</span></td></tr>
<tr><td class="thd">Dativ</td><td class="tdd">jemand<span class="en">(em)</span></td><td class="tdd">niemand<span class="en">(em)</span></td></tr></table>
<p class="en">The -en/-em endings are optional and increasingly dropped in spoken German — both "Ich habe niemand gesehen" and "Ich habe niemanden gesehen" are heard, but the ending is still standard in writing.</p>
<h4 class="ref-h">jeder/jede/jedes — dekliniert wie dieser</h4>
<table class="wide"><tr><th></th><th>maskulin</th><th>feminin</th><th>neutral</th></tr>
<tr><td class="thn">Nom.</td><td class="tdn">jed<b>er</b></td><td class="tdn">jed<b>e</b></td><td class="tdn">jed<b>es</b></td></tr>
<tr><td class="tha">Akk.</td><td class="tda">jed<b>en</b></td><td class="tda">jed<b>e</b></td><td class="tda">jed<b>es</b></td></tr>
<tr><td class="thd">Dat.</td><td class="tdd">jed<b>em</b></td><td class="tdd">jed<b>er</b></td><td class="tdd">jed<b>em</b></td></tr></table>
<h4 class="ref-h">etwas / nichts — unveränderlich</h4>
<p>Beide bleiben in jedem Fall gleich: Ich sehe <b>etwas</b>. Ich habe <b>nichts</b> gesehen. Ich denke an <b>nichts</b>.</p>
<h4 class="ref-h">Mengen im Plural: alle, einige, manche, wenige, viele</h4>
<p>Diese Wörter verhalten sich wie ein Artikel — das folgende Adjektiv bekommt die schwache Endung <b>-en</b>: <i>alle klein<b>en</b> Kinder, viele klein<b>en</b>... </i> Ausnahme: nach <b>einige/wenige/viele</b> im Nominativ/Akkusativ Plural steht oft die starke Endung <b>-e</b>: <i>einige klein<b>e</b> Kinder, viele nett<b>e</b> Leute.</i></p>
<p class="en">man has no true accusative/dative — it borrows einen/einem. jemand/niemand's endings are optional in speech. jeder follows dieser's pattern. etwas/nichts never change.</p>`);

/* ========================================================= */
/* 10 · PRÄPOSITIONEN NACH KASUS                              */
/* ========================================================= */
add("praepositionen", "Präpositionen", "Präpositionen nach Kasus — die komplette Liste", "Prepositions by case — the full list", "Präpositionen", `
<table class="wide"><tr><th>Immer Akkusativ<span class="en">always accusative</span></th><th>Immer Dativ<span class="en">always dative</span></th><th>Immer Genitiv<span class="en">always genitive</span></th></tr>
<tr><td class="wa">durch, für, gegen, ohne, um, bis, entlang<span class="en"> (meist nachgestellt: die Straße entlang)</span></td><td class="wd">aus, bei, mit, nach, seit, von, zu, ab, außer, gegenüber<span class="en"> (oft nachgestellt: mir gegenüber)</span></td><td class="wg">wegen, trotz, während, statt/anstatt, außerhalb, innerhalb, oberhalb, unterhalb, aufgrund<span class="en"> (in der Umgangssprache oft mit Dativ: wegen dem Wetter)</span></td></tr></table>
<h4 class="ref-h">Wechselpräpositionen — Akkusativ (wohin?) oder Dativ (wo?)</h4>
<p><b>an, auf, hinter, in, neben, über, unter, vor, zwischen</b></p>
<table class="wide"><tr><th>Frage</th><th>Kasus</th><th>Beispiel</th></tr>
<tr><td>Wohin? <span class="en">(Bewegung, Ziel)</span></td><td class="wa">Akkusativ</td><td>Ich stelle die Tasche <b>in den</b> Schrank.</td></tr>
<tr><td>Wo? <span class="en">(Ort, Position)</span></td><td class="wd">Dativ</td><td>Die Tasche steht <b>in dem</b> Schrank.</td></tr></table>
<h4 class="ref-h">Verschmelzungen (Präposition + Artikel)</h4>
<table class="wide"><tr><th>Dativ</th><th>Akkusativ</th></tr>
<tr><td>in dem→<b>im</b> · an dem→<b>am</b> · bei dem→<b>beim</b> · von dem→<b>vom</b> · zu dem→<b>zum</b> · zu der→<b>zur</b></td><td>in das→<b>ins</b> · an das→<b>ans</b> · auf das→<b>aufs</b> · durch das→<b>durchs</b> · für das→<b>fürs</b> · um das→<b>ums</b></td></tr></table>
<p class="en">Nine prepositions switch between accusative (movement, "wohin?") and dative (static location, "wo?") depending on the verb's meaning in the sentence.</p>`);

/* ========================================================= */
/* 11 · VERBKONJUGATION — alle Zeiten                         */
/* ========================================================= */
add("verbkonjugation", "Verb-Zeiten", "Alle 6 Zeiten im Überblick + sein/haben/werden komplett", "All 6 tenses at a glance + sein/haben/werden fully conjugated", "Verben", `
<h4 class="ref-h">Die 6 Zeiten am Beispiel „lernen" (ich)</h4>
<table class="wide"><tr><th>Zeit</th><th>Form</th><th>Beispiel</th></tr>
<tr><td>Präsens</td><td>Verb-Endung</td><td>ich <b>lerne</b></td></tr>
<tr><td>Präteritum</td><td>Verb + te/Stammwechsel</td><td>ich <b>lernte</b></td></tr>
<tr><td>Perfekt</td><td>haben/sein + Partizip II</td><td>ich <b>habe gelernt</b></td></tr>
<tr><td>Plusquamperfekt</td><td>hatte/war + Partizip II</td><td>ich <b>hatte gelernt</b></td></tr>
<tr><td>Futur I</td><td>werden + Infinitiv</td><td>ich <b>werde lernen</b></td></tr>
<tr><td>Futur II</td><td>werden + Partizip II + haben/sein</td><td>ich <b>werde gelernt haben</b></td></tr></table>
<p class="en">All six tenses build on the same two ingredients: a helper verb (haben/sein/werden) plus either the participle or the infinitive.</p>
<h4 class="ref-h">sein, haben, werden — komplett in Präsens &amp; Präteritum</h4>
<table class="wide"><tr><th></th><th>sein (Präs.)</th><th>sein (Prät.)</th><th>haben (Präs.)</th><th>haben (Prät.)</th><th>werden (Präs.)</th><th>werden (Prät.)</th></tr>
<tr><td>ich</td><td>bin</td><td>war</td><td>habe</td><td>hatte</td><td>werde</td><td>wurde</td></tr>
<tr><td>du</td><td>bist</td><td>warst</td><td>hast</td><td>hattest</td><td>wirst</td><td>wurdest</td></tr>
<tr><td>er/sie/es</td><td>ist</td><td>war</td><td>hat</td><td>hatte</td><td>wird</td><td>wurde</td></tr>
<tr><td>wir</td><td>sind</td><td>waren</td><td>haben</td><td>hatten</td><td>werden</td><td>wurden</td></tr>
<tr><td>ihr</td><td>seid</td><td>wart</td><td>habt</td><td>hattet</td><td>werdet</td><td>wurdet</td></tr>
<tr><td>sie/Sie</td><td>sind</td><td>waren</td><td>haben</td><td>hatten</td><td>werden</td><td>wurden</td></tr></table>
<div class="merk"><b>Perfekt mit sein statt haben:</b> Bewegung von A nach B (gehen, fahren, fliegen…), Zustandsänderung (aufwachen, einschlafen, sterben, wachsen…) und die Ausnahmen <b>sein, bleiben, werden, passieren, gelingen</b>. Alle anderen Verben: haben.<br><span class="en">sein-verbs: movement, change of state, plus sein/bleiben/werden/passieren/gelingen. Everything else takes haben.</span></div>`);

/* ========================================================= */
/* 12 · KONJUNKTIV II — komplett konjugiert                   */
/* ========================================================= */
add("konjunktiv2", "Konjunktiv II", "Konjunktiv II komplett: sein, haben, werden & alle Modalverben", "Konjunktiv II — sein, haben, werden and all modal verbs, fully conjugated", "Verben", `
<table class="wide"><tr><th></th><th>sein</th><th>haben</th><th>werden</th><th>können</th><th>müssen</th><th>dürfen</th><th>mögen</th></tr>
<tr><td>ich</td><td><b>wäre</b></td><td><b>hätte</b></td><td>würde</td><td>könnte</td><td>müsste</td><td>dürfte</td><td>möchte</td></tr>
<tr><td>du</td><td>wärst</td><td>hättest</td><td>würdest</td><td>könntest</td><td>müsstest</td><td>dürftest</td><td>möchtest</td></tr>
<tr><td>er/sie/es</td><td>wäre</td><td>hätte</td><td>würde</td><td>könnte</td><td>müsste</td><td>dürfte</td><td>möchte</td></tr>
<tr><td>wir</td><td>wären</td><td>hätten</td><td>würden</td><td>könnten</td><td>müssten</td><td>dürften</td><td>möchten</td></tr>
<tr><td>ihr</td><td>wärt</td><td>hättet</td><td>würdet</td><td>könntet</td><td>müsstet</td><td>dürftet</td><td>möchtet</td></tr>
<tr><td>sie/Sie</td><td>wären</td><td>hätten</td><td>würden</td><td>könnten</td><td>müssten</td><td>dürften</td><td>möchten</td></tr></table>
<p><b>sollen</b> und <b>wollen</b> haben im Konjunktiv II keine eigene Form mehr — sie sehen genau wie im Präteritum aus: <i>ich sollte, ich wollte</i> (Kontext entscheidet, ob real oder irreal gemeint ist).</p>
<p><b>Alle anderen (normalen) Verben</b> bilden keine eigene Konjunktiv-II-Form mehr — stattdessen: <b>würde + Infinitiv</b>. <i>Ich würde kommen.</i> (nicht „ich käme", auch wenn das theoretisch korrekt ist — im Alltag klingt es altmodisch.)</p>
<h4 class="ref-h">Vergangenheit: hätte/wäre + Partizip II</h4>
<div class="ex">Wenn ich Zeit <b>gehabt hätte</b>, wäre ich gekommen.<br>Wenn ich früher <b>gegangen wäre</b>, hätte ich den Bus geschafft.</div>
<p class="en">sollen/wollen reuse their Präteritum form. All regular verbs use würde + infinitive instead of their own (archaic-sounding) Konjunktiv II form. The past tense of Konjunktiv II always uses hätte/wäre + participle — never würde.</p>`);

/* ========================================================= */
/* 13 · KOMPARATION                                           */
/* ========================================================= */
add("komparation", "Komparation", "Komparativ & Superlativ komplett", "Comparison — regular, umlaut and irregular forms in full", "Adjektive", `
<h4 class="ref-h">Regelmäßig</h4>
<table class="wide"><tr><th>Positiv</th><th>Komparativ (+er)</th><th>Superlativ (am +sten)</th></tr>
<tr><td>schnell</td><td>schneller</td><td>am schnellsten</td></tr>
<tr><td>billig</td><td>billiger</td><td>am billigsten</td></tr></table>
<h4 class="ref-h">Mit Umlaut (kurze Wörter mit a/o/u)</h4>
<table class="wide"><tr><th>Positiv</th><th>Komparativ</th><th>Superlativ</th></tr>
<tr><td>groß</td><td>gr<b>ö</b>ßer</td><td>am größten</td></tr>
<tr><td>alt</td><td>älter</td><td>am ältesten</td></tr>
<tr><td>jung</td><td>jünger</td><td>am jüngsten</td></tr>
<tr><td>lang</td><td>länger</td><td>am längsten</td></tr>
<tr><td>kurz</td><td>kürzer</td><td>am kürzesten</td></tr>
<tr><td>warm</td><td>wärmer</td><td>am wärmsten</td></tr>
<tr><td>kalt</td><td>kälter</td><td>am kältesten</td></tr>
<tr><td>klug</td><td>klüger</td><td>am klügsten</td></tr>
<tr><td>gesund</td><td>gesünder <span class="en">(auch: gesunder)</span></td><td>am gesündesten</td></tr></table>
<h4 class="ref-h">Unregelmäßig</h4>
<table class="wide"><tr><th>Positiv</th><th>Komparativ</th><th>Superlativ</th></tr>
<tr><td>gut</td><td><b>besser</b></td><td>am besten</td></tr>
<tr><td>gern</td><td><b>lieber</b></td><td>am liebsten</td></tr>
<tr><td>viel</td><td><b>mehr</b></td><td>am meisten</td></tr>
<tr><td>hoch</td><td><b>höher</b></td><td>am höchsten</td></tr>
<tr><td>nah</td><td><b>näher</b></td><td>am nächsten</td></tr></table>
<h4 class="ref-h">Kleine Sonderfälle bei der Schreibung</h4>
<table class="wide"><tr><th>Regel</th><th>Beispiel</th></tr>
<tr><td>Adjektive auf <b>-er/-el</b> verlieren im Komparativ das e</td><td>teuer → teur<b>er</b> · dunkel → dunkl<b>er</b></td></tr>
<tr><td>Adjektive auf <b>-d, -t, -s, -ß, -z, -sch</b> bekommen <b>-esten</b> im Superlativ</td><td>kalt → am kält<b>esten</b> · heiß → am heiß<b>esten</b> · kurz → am kürz<b>esten</b></td></tr></table>
<p><b>Vergleiche:</b> gleich → <b>so … wie</b> (Er ist so groß wie ich). Unterschiedlich → Komparativ + <b>als</b> (Er ist größer als ich).</p>
<p class="en">Short adjectives with a stem vowel a/o/u typically add an umlaut. gut/gern/viel/hoch/nah are fully irregular. Endings on -er/-el drop their e; endings on -d/-t/-s/-ß/-z/-sch add -esten instead of -sten for pronounceability.</p>`);

window.REF_TABLES = REF_TABLES;
window.REF_META = REF_META;
})();

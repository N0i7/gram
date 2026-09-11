/* FLOß Grammatik – "Wortschatz-Kompakt"-Seite
   Schließt die letzte von Lion angefragte Lingolia-Lücke: Themenwortschatz,
   Redewendungen, leicht verwechselbare Wörter und eine Länderliste — bei
   Lingolia eigene Hauptbereiche, bei Flogram bisher nur in Einzelthemen
   verstreut (siehe wortschatz/redemittel-Subthemen in data-a1..c2.js).
   Gleiches Muster wie unnuetzes-wissen-daten.js/lerntipps-daten.js:
   eine Datenquelle (window.WORTSCHATZ_TABLES/META), gerendert von
   wortschatz.js auf wortschatz.html. Reiner Lesestoff, keine Quizze. */
(function(){

const WORTSCHATZ_TABLES = {};
const WORTSCHATZ_META = [];

function add(id, chip, title, titleEn, group, html){
  WORTSCHATZ_TABLES[id] = html;
  WORTSCHATZ_META.push({id, chip, title, titleEn, group});
}

/* ========================================================= */
/* 1 · THEMENWORTSCHATZ                                        */
/* ========================================================= */

add("beruf-ausbildung", "Beruf & Ausbildung", "Themenwortschatz: Beruf & Ausbildung", "Thematic vocabulary: work & vocational training", "Themenwortschatz", `
<p>Besonders wichtig für alle, die in Deutschland eine Ausbildung machen oder arbeiten wollen.</p>
<p class="en">Especially important for anyone doing an apprenticeship or working in Germany.</p>
<div class="vgrid">
<div class="vbox"><h4>Bewerbung</h4><ul>
<li>die Bewerbung <span class="en">application</span></li>
<li>der Lebenslauf <span class="en">CV/résumé</span></li>
<li>das Vorstellungsgespräch <span class="en">job interview</span></li>
<li>die Anerkennung <span class="en">recognition (of a qualification)</span></li>
<li>das Zeugnis <span class="en">certificate/report</span></li>
</ul></div>
<div class="vbox"><h4>Am Arbeitsplatz</h4><ul>
<li>der Ausbildungsbetrieb <span class="en">training company</span></li>
<li>die Berufsschule <span class="en">vocational school</span></li>
<li>der Azubi/die Azubine <span class="en">apprentice</span></li>
<li>die Probezeit <span class="en">probation period</span></li>
<li>die Überstunden (Pl.) <span class="en">overtime</span></li>
<li>der Gehalt/Lohn <span class="en">salary/wage</span></li>
</ul></div>
</div>
`);

add("wohnen-umzug", "Wohnen & Umzug", "Themenwortschatz: Wohnen & Umzug", "Thematic vocabulary: housing & moving", "Themenwortschatz", `
<p>Der Wortschatz rund um die Wohnungssuche — einer der ersten großen Herausforderungen nach der Ankunft.</p>
<p class="en">Vocabulary around apartment hunting — one of the first big challenges after arrival.</p>
<div class="vgrid">
<div class="vbox"><h4>Wohnungssuche</h4><ul>
<li>die Wohnungsanzeige <span class="en">rental listing</span></li>
<li>der Besichtigungstermin <span class="en">viewing appointment</span></li>
<li>die Kaltmiete / Warmmiete <span class="en">rent excl./incl. utilities</span></li>
<li>die Nebenkosten (Pl.) <span class="en">additional/utility costs</span></li>
<li>die Kaution <span class="en">deposit</span></li>
</ul></div>
<div class="vbox"><h4>Umzug & Anmeldung</h4><ul>
<li>die Anmeldung (beim Einwohnermeldeamt) <span class="en">registering your address</span></li>
<li>der Mietvertrag <span class="en">rental contract</span></li>
<li>der Vermieter/die Vermieterin <span class="en">landlord/landlady</span></li>
<li>die Wohngemeinschaft (WG) <span class="en">shared flat</span></li>
<li>möbliert / unmöbliert <span class="en">furnished / unfurnished</span></li>
</ul></div>
</div>
`);

add("behoerden", "Behörden & Papierkram", "Themenwortschatz: Behörden & Papierkram", "Thematic vocabulary: government offices & paperwork", "Themenwortschatz", `
<p>Ohne diesen Wortschatz wird jeder Behördengang doppelt anstrengend.</p>
<p class="en">Without this vocabulary, every trip to a government office becomes twice as hard.</p>
<div class="vgrid">
<div class="vbox"><h4>Ämter</h4><ul>
<li>das Einwohnermeldeamt <span class="en">residents' registration office</span></li>
<li>die Ausländerbehörde <span class="en">immigration office</span></li>
<li>das Finanzamt <span class="en">tax office</span></li>
<li>die Krankenkasse <span class="en">health insurance provider</span></li>
<li>die Agentur für Arbeit <span class="en">employment agency</span></li>
</ul></div>
<div class="vbox"><h4>Dokumente</h4><ul>
<li>der Aufenthaltstitel <span class="en">residence permit</span></li>
<li>die Steuer-ID <span class="en">tax ID number</span></li>
<li>die Sozialversicherungsnummer <span class="en">social security number</span></li>
<li>die beglaubigte Kopie <span class="en">certified copy</span></li>
<li>der Termin (vereinbaren) <span class="en">appointment (to make one)</span></li>
</ul></div>
</div>
`);

add("gesundheit", "Gesundheit & Arzt", "Themenwortschatz: Gesundheit & beim Arzt", "Thematic vocabulary: health & at the doctor's", "Themenwortschatz", `
<p>Nützlich für den Alltag — und häufig Prüfungsthema in Leseverstehen/Sprachbausteinen.</p>
<p class="en">Useful for everyday life — and a common topic in reading comprehension and language element sections.</p>
<div class="vgrid">
<div class="vbox"><h4>Beim Arzt</h4><ul>
<li>der Termin <span class="en">appointment</span></li>
<li>die Versichertenkarte <span class="en">insurance card</span></li>
<li>die Überweisung <span class="en">referral</span></li>
<li>das Rezept <span class="en">prescription</span></li>
<li>die Krankschreibung <span class="en">sick note</span></li>
</ul></div>
<div class="vbox"><h4>Beschwerden</h4><ul>
<li>Schmerzen haben <span class="en">to be in pain</span></li>
<li>sich krank fühlen <span class="en">to feel sick</span></li>
<li>der Husten / der Schnupfen <span class="en">cough / cold</span></li>
<li>die Apotheke <span class="en">pharmacy</span></li>
<li>die Nebenwirkung <span class="en">side effect</span></li>
</ul></div>
</div>
`);

/* ========================================================= */
/* 2 · REDEWENDUNGEN                                           */
/* ========================================================= */

add("redewendungen-alltag", "Redewendungen", "Die 15 wichtigsten Redewendungen für den Alltag", "The 15 most useful everyday idioms", "Redewendungen", `
<p>Redewendungen lassen sich nicht wörtlich übersetzen — wer sie kennt, versteht Muttersprachler aber deutlich besser und klingt selbst natürlicher.</p>
<p class="en">Idioms can't be translated literally — knowing them helps you understand native speakers and sound more natural yourself.</p>
<table><tr><th>Redewendung</th><th>Bedeutung</th><th>Beispiel</th></tr>
<tr><td>die Daumen drücken</td><td>jemandem Glück wünschen <span class="en">to wish sb. luck</span></td><td>Ich drück dir die Daumen für die Prüfung!</td></tr>
<tr><td>ins kalte Wasser springen</td><td>etwas Neues ohne Vorbereitung wagen <span class="en">to jump right in</span></td><td>Am ersten Arbeitstag bin ich direkt ins kalte Wasser gesprungen.</td></tr>
<tr><td>Schwein haben</td><td>Glück haben <span class="en">to be lucky</span></td><td>Ich hatte Schwein, die Wohnung war noch frei.</td></tr>
<tr><td>die Nase voll haben</td><td>genervt/erschöpft sein <span class="en">to be fed up</span></td><td>Ich habe die Nase voll von dem Papierkram.</td></tr>
<tr><td>auf dem Zahnfleisch gehen</td><td>sehr müde/erschöpft sein <span class="en">to be running on empty</span></td><td>Nach der Doppelschicht geh ich auf dem Zahnfleisch.</td></tr>
<tr><td>etwas in den Sand setzen</td><td>etwas ruinieren/verpatzen <span class="en">to mess sth. up</span></td><td>Das Projekt haben wir leider in den Sand gesetzt.</td></tr>
<tr><td>Hals- und Beinbruch!</td><td>Viel Erfolg! <span class="en">Break a leg!</span></td><td>Hals- und Beinbruch für dein Vorstellungsgespräch!</td></tr>
<tr><td>die Kirche im Dorf lassen</td><td>nicht übertreiben <span class="en">not to overdo it</span></td><td>Lass mal die Kirche im Dorf, so schlimm war es nicht.</td></tr>
<tr><td>unter die Arme greifen</td><td>jemandem helfen <span class="en">to lend sb. a hand</span></td><td>Meine Kollegen haben mir am Anfang oft unter die Arme gegriffen.</td></tr>
<tr><td>ins Gras beißen</td><td>sterben <span class="en">to bite the dust (informal)</span></td><td>Mein alter Laptop hat endgültig ins Gras gebissen.</td></tr>
<tr><td>Tomaten auf den Augen haben</td><td>etwas Offensichtliches nicht sehen <span class="en">to be blind to the obvious</span></td><td>Hast du Tomaten auf den Augen? Das Schild steht doch direkt da!</td></tr>
<tr><td>um den heißen Brei reden</td><td>nicht direkt zur Sache kommen <span class="en">to beat around the bush</span></td><td>Red nicht um den heißen Brei, sag mir einfach, was los ist.</td></tr>
<tr><td>Sitzfleisch haben</td><td>Ausdauer/Geduld beim Sitzen/Arbeiten haben <span class="en">to have staying power</span></td><td>Für die Prüfungsvorbereitung braucht man vor allem Sitzfleisch.</td></tr>
<tr><td>jemandem die Daumen halten</td><td>= die Daumen drücken (regionale Variante)</td><td>Wir halten dir alle die Daumen!</td></tr>
<tr><td>alles in Butter</td><td>alles in Ordnung <span class="en">everything's fine</span></td><td>Keine Sorge, bei uns ist alles in Butter.</td></tr>
</table>
`);

/* ========================================================= */
/* 3 · LEICHT ZU VERWECHSELNDE WÖRTER                           */
/* ========================================================= */

add("verwechslungen", "Verwechslungen", "Leicht zu verwechselnde Wörter", "Easily confused words", "Verwechslungen", `
<p>Diese Wortpaare sehen oder klingen ähnlich, bedeuten aber etwas anderes — häufige Fehlerquelle auch bei fortgeschrittenen Lernenden. das/dass, seit/seid und wieder/wider stehen bereits in der <a href="schreibschule.html#rechtschreibung-texte">Schreibschule</a>; hier die wichtigsten weiteren Paare.</p>
<p class="en">These word pairs look or sound similar but mean something different — a common error source even for advanced learners.</p>
<table><tr><th>Wort 1</th><th>Wort 2</th><th>Unterschied</th></tr>
<tr><td><b>kennen</b> <span class="en">to know (be familiar with)</span></td><td><b>wissen</b> <span class="en">to know (a fact)</span></td><td>kennen + Person/Ort/Sache: Ich kenne Berlin. — wissen + Nebensatz/Fakt: Ich weiß, dass es regnet.</td></tr>
<tr><td><b>lernen</b> <span class="en">to learn/study</span></td><td><b>lehren</b> <span class="en">to teach</span></td><td>lernen = selbst Wissen aufnehmen — lehren = Wissen weitergeben. Frau Müller lehrt Deutsch, ich lerne Deutsch.</td></tr>
<tr><td><b>bringen</b> <span class="en">to bring/take (to a place)</span></td><td><b>holen</b> <span class="en">to (go and) get</span></td><td>bringen = wegtransportieren zu jemandem — holen = etwas herbeischaffen. Ich bringe dir das Buch. / Ich hole das Buch aus dem Regal.</td></tr>
<tr><td><b>bekommen</b> <span class="en">to receive (NOT to become!)</span></td><td><b>werden</b> <span class="en">to become</span></td><td>Falscher-Freund-Fehler: „ich bekomme müde“ ist falsch. Richtig: ich werde müde. bekommen = etwas erhalten: ich bekomme ein Geschenk.</td></tr>
<tr><td><b>hören</b> <span class="en">to hear</span></td><td><b>zuhören</b> <span class="en">to listen (attentively)</span></td><td>hören = Geräusch wahrnehmen (passiv) — zuhören = sich bewusst auf jemanden konzentrieren (aktiv). Ich höre Musik im Hintergrund. / Bitte hör mir zu!</td></tr>
<tr><td><b>fahren</b> <span class="en">to drive/travel (with a vehicle)</span></td><td><b>gehen</b> <span class="en">to go/walk (on foot)</span></td><td>fahren = mit einem Fahrzeug — gehen = zu Fuß oder allgemein „sich begeben“. Ich fahre mit dem Bus. / Ich gehe zu Fuß zur Arbeit.</td></tr>
<tr><td><b>die Rechnung</b> <span class="en">bill/invoice</span></td><td><b>die Quittung</b> <span class="en">receipt</span></td><td>Rechnung = Zahlungsaufforderung (vor der Zahlung) — Quittung = Nachweis, dass schon bezahlt wurde.</td></tr>
<tr><td><b>vermieten</b> <span class="en">to rent out</span></td><td><b>mieten</b> <span class="en">to rent (from sb.)</span></td><td>Der Vermieter vermietet die Wohnung — der Mieter mietet die Wohnung. Gegenteil-Verben, leicht vertauscht.</td></tr>
<tr><td><b>das Gift</b> <span class="en">poison (NOT gift!)</span></td><td><b>das Geschenk</b> <span class="en">gift/present</span></td><td>Klassischer falscher Freund: „Gift“ heißt auf Deutsch poison. Ein Geschenk ist „das Geschenk“.</td></tr>
</table>
`);

/* ========================================================= */
/* 4 · LÄNDER & NATIONALITÄTEN                                 */
/* ========================================================= */

add("laender-nationalitaeten", "Länder & Nationalitäten", "Länder, Nationalitäten und Sprachen", "Countries, nationalities and languages", "Länder & Nationalitäten", `
<p>Nachschlagewerk: Land, männliche/weibliche Form der Person, Adjektiv. Faustregel für die Adjektivform: meist Länder-/Stadtname + <b>-isch</b> (deutsch, philippinisch), bei einigen Ländern unregelmäßig (Deutschland → deutsch, nicht „deutschland-isch“).</p>
<p class="en">Reference: country, the person (male/female form), the adjective. Rule of thumb for the adjective: usually country name + -isch, with some irregular exceptions.</p>
<table class="wide"><tr><th>Land</th><th>Person (m./w.)</th><th>Adjektiv</th></tr>
<tr><td>Deutschland</td><td>der Deutsche / die Deutsche</td><td>deutsch</td></tr>
<tr><td>Österreich</td><td>der Österreicher / die Österreicherin</td><td>österreichisch</td></tr>
<tr><td>die Schweiz</td><td>der Schweizer / die Schweizerin</td><td>schweizerisch</td></tr>
<tr><td>die Philippinen</td><td>der Filipino / die Filipina</td><td>philippinisch</td></tr>
<tr><td>Frankreich</td><td>der Franzose / die Französin</td><td>französisch</td></tr>
<tr><td>Spanien</td><td>der Spanier / die Spanierin</td><td>spanisch</td></tr>
<tr><td>Italien</td><td>der Italiener / die Italienerin</td><td>italienisch</td></tr>
<tr><td>Polen</td><td>der Pole / die Polin</td><td>polnisch</td></tr>
<tr><td>die Türkei</td><td>der Türke / die Türkin</td><td>türkisch</td></tr>
<tr><td>Russland</td><td>der Russe / die Russin</td><td>russisch</td></tr>
<tr><td>Großbritannien</td><td>der Brite / die Britin</td><td>britisch</td></tr>
<tr><td>die USA (Pl.)</td><td>der Amerikaner / die Amerikanerin</td><td>amerikanisch</td></tr>
<tr><td>China</td><td>der Chinese / die Chinesin</td><td>chinesisch</td></tr>
<tr><td>Japan</td><td>der Japaner / die Japanerin</td><td>japanisch</td></tr>
<tr><td>Indien</td><td>der Inder / die Inderin</td><td>indisch</td></tr>
<tr><td>Vietnam</td><td>der Vietnamese / die Vietnamesin</td><td>vietnamesisch</td></tr>
<tr><td>Thailand</td><td>der Thailänder / die Thailänderin</td><td>thailändisch</td></tr>
<tr><td>Indonesien</td><td>der Indonesier / die Indonesierin</td><td>indonesisch</td></tr>
<tr><td>Brasilien</td><td>der Brasilianer / die Brasilianerin</td><td>brasilianisch</td></tr>
<tr><td>Nigeria</td><td>der Nigerianer / die Nigerianerin</td><td>nigerianisch</td></tr>
</table>
<p class="en">Note: nationality adjectives are NOT capitalized in German (deutsch, philippinisch), unlike English — only the noun for the person is (der Deutsche).</p>
`);

window.WORTSCHATZ_TABLES = WORTSCHATZ_TABLES;
window.WORTSCHATZ_META = WORTSCHATZ_META;
})();

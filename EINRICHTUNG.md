# FLOß Backend — Einrichtung

Stand: 13. August 2026

Diese Anleitung bringt dich von „nichts“ zu „Schüler loggt sich ein und sein
Fortschritt ist morgen noch da“. Rechne mit **45 bis 60 Minuten**.

Du brauchst nichts zu installieren und musst keinen Server betreiben. Die
Website bleibt statisch auf GitHub Pages — der Browser deiner Schüler spricht
direkt mit der Datenbank.

---

## Was du am Ende hast

- Schüler legen sich selbst einen kostenlosen Zugang an (E-Mail und Passwort)
- Jede gelöste Aufgabe wird gespeichert, geräteübergreifend
- Karteikarten mit verteilter Wiederholung
- Datenbankstruktur für Modelltests steht bereit
- Du siehst als Lehrer den Fortschritt deiner Schüler
- Nutzungsbedingungen und Datenschutzhinweise, die zu deiner Lage passen
- Das 7-Tage-Pausenproblem ist erledigt

Kosten: **0 Euro**, dauerhaft, bis etwa 50.000 aktive Nutzer im Monat.

---

## Schritt 1 — Supabase-Projekt anlegen (10 Minuten)

1. Gehe auf [supabase.com](https://supabase.com) und melde dich mit deinem
   GitHub-Konto an. Keine Kreditkarte nötig.
2. **New project**
3. Fülle aus:

   | Feld | Wert |
   |---|---|
   | Name | `floss-grammatik` |
   | Database Password | Ein starkes Passwort — **speichere es sofort in deinem Passwortmanager.** Du siehst es nie wieder. |
   | Region | **Southeast Asia (Singapore)** |
   | Plan | Free |

   > Die Region Singapur ist die nächstgelegene zu den Philippinen. Das macht
   > die Seite für deine Schüler spürbar schneller. Genau diese Region ist in
   > den Datenschutzhinweisen genannt — wenn du eine andere wählst, ändere
   > dort Abschnitt 4.1.

4. Warte zwei Minuten, bis das Projekt bereit ist.

---

## Schritt 2 — Datenbank aufbauen (5 Minuten)

1. Links im Menü: **SQL Editor** → **New query**
2. Öffne die Datei `supabase-schema.sql` in einem Texteditor, markiere alles
   (Strg+A), kopiere es und füge es in den Editor ein.
3. **Run** (oder Strg+Enter).
4. Unten muss **Success. No rows returned** stehen.

Falls eine Fehlermeldung kommt: Kopiere sie und schick sie mir, dann klären
wir das. Die Datei lässt sich beliebig oft erneut ausführen, ohne Schaden
anzurichten.

**Was gerade passiert ist:** Fünf Tabellen wurden angelegt, dazu die
Sicherheitsregeln (jeder Zugang sieht technisch nur die eigenen Daten) und
die Rechenlogik für Fortschritt und Karteikarten.

---

## Schritt 3 — Anmeldung konfigurieren (5 Minuten)

1. Links: **Authentication** → **Sign In / Providers** → **Email**
2. Stelle sicher, dass **Email** aktiviert ist.
3. **Confirm email**: für den Anfang auf **AUS** stellen. Dann kannst du sofort
   testen, ohne auf E-Mails zu warten. Vor dem echten Start wieder auf AN.
4. Links: **Authentication** → **URL Configuration**
   - **Site URL**: `https://n0i7.github.io/gram/`
   - **Redirect URLs**: füge `https://n0i7.github.io/gram/**` hinzu

   > Ohne diesen Schritt funktioniert „Passwort vergessen“ nicht — der Link
   > in der E-Mail führt dann ins Leere.

---

## Schritt 4 — Schlüssel eintragen (2 Minuten)

1. Links: **Project Settings** (Zahnrad) → **API**
2. Kopiere **Project URL** und **anon public**.
3. Öffne `website/floss-config.js` und ersetze:

```js
SUPABASE_URL:      "https://deinprojekt.supabase.co",
SUPABASE_ANON_KEY: "eyJhbGciOi...",
```

4. Trag in derselben Datei unter `SCHULE` bei `dpo_name` eine Person ein, die
   Datenschutzanfragen beantwortet. Das kannst du selbst sein.

> **Zum anon-Key:** Der gehört in den Quelltext und ist öffentlich — das ist
> so vorgesehen. Der Schutz kommt nicht von diesem Schlüssel, sondern von den
> Sicherheitsregeln in der Datenbank, die du in Schritt 2 eingespielt hast.
>
> **Der `service_role`-Schlüssel darf niemals in die Website.** Der umgeht
> alle Sicherheitsregeln. Wenn der öffentlich wird, kann jeder alle
> Schülerdaten lesen und löschen.

---

## Schritt 5 — Hochladen und testen (10 Minuten)

1. Lade den kompletten Inhalt des `website`-Ordners in dein Repository
   `N0i7/gram` hoch.
2. Warte eine Minute, bis GitHub Pages neu gebaut hat.
3. Öffne `https://n0i7.github.io/gram/a1.html` und drücke **Strg+Shift+R**.

**Prüfliste:**

- [ ] Oben rechts steht ein blauer Knopf „Anmelden“
- [ ] Klick darauf öffnet den Dialog
- [ ] „Neu hier? Zugang anlegen“ zeigt drei Kästchen zum Ankreuzen
- [ ] Registrierung ohne Häkchen wird abgelehnt
- [ ] Registrierung mit Häkchen funktioniert
- [ ] Nach dem Anmelden steht oben rechts ein farbiger Kreis mit deinem Anfangsbuchstaben
- [ ] Eine Aufgabe lösen → neben der Themenüberschrift erscheint z.B. „1/6“
- [ ] Seite neu laden → die Zahl ist noch da
- [ ] In Supabase unter **Table Editor → uebung_fortschritt** steht eine Zeile

Wenn alles hakt, öffne im Browser die Entwicklerkonsole (F12) und schau unter
**Console** nach roten Meldungen.

---

## Schritt 6 — Dich selbst zum Lehrer machen (1 Minute)

Nachdem du dich registriert hast, im **SQL Editor** ausführen:

```sql
update public.profiles set ist_lehrer = true
 where id = (select id from auth.users where email = 'DEINE@MAIL.COM');
```

Damit siehst du den Fortschritt aller Schüler. Ohne diese Zeile siehst auch du
nur deine eigenen Daten — so sind die Sicherheitsregeln gebaut.

---

## Schritt 7 — Das 7-Tage-Problem erledigen (5 Minuten)

Kostenlose Supabase-Projekte pausieren nach sieben Tagen **ohne jeden
Zugriff**. Nichts geht verloren, aber die Seite zeigt dann Fehler, bis du im
Dashboard auf „Restore“ klickst. Bei täglich lernenden Schülern passiert das
nie — aber in den Ferien schon.

1. Kopiere `.github/workflows/supabase-wachhalten.yml` in dein Repository
   (Pfad genau so beibehalten).
2. Im Repository: **Settings** → **Secrets and variables** → **Actions** →
   **New repository secret**. Lege zwei an:

   | Name | Wert |
   |---|---|
   | `SUPABASE_URL` | deine Project URL |
   | `SUPABASE_ANON_KEY` | dein anon public Key |

3. Reiter **Actions** → „Supabase wachhalten“ → **Run workflow**, um es sofort
   zu testen. Ein grüner Haken heißt: erledigt.

Der Job läuft danach montags, mittwochs und freitags von allein.

---

## Schritt 8 — Rechtliches fertigstellen

Die Dateien `agb.html` und `datenschutz.html` sind fertig formuliert und
verlinkt. **Bevor du sie live schaltest, sind drei Dinge zu klären:**

1. **Firmierung.** In beiden Dateien steht nur „FLOß — Fides Lingua Ortus
   Solertia, Lapu-Lapu City“. Sobald die Rechtsform und eine
   DTI/SEC-Registrierung feststehen, gehören sie dort hinein.

2. **Datenschutzbeauftragter.** RA 10173 verlangt eine benannte, erreichbare
   Person. Trag sie in `floss-config.js` und in Abschnitt 1 der
   Datenschutzhinweise ein.

3. **NPC-Registrierung.** Die Registrierungspflicht greift ab 250 Beschäftigten
   oder 1.000 Datensätzen mit sensiblen Daten — beides trifft auf dich nicht
   zu. Allerdings werden Bildungseinrichtungen in der Praxis teilweise als
   Verarbeiter mit erhöhtem Risiko eingestuft. Das solltest du einmal von
   einem philippinischen Anwalt prüfen lassen. Es kostet wenig und du hast
   Ruhe.

### Der Abschnitt, auf den es wirklich ankommt

Abschnitt 2 der Nutzungsbedingungen stellt ausdrücklich und mehrsprachig fest,
dass FLOß **keine** DMW-lizenzierte Vermittlungsagentur ist, keine
Beschäftigung im Ausland anbietet oder verspricht und dafür keine Gebühren
nimmt.

Das ist kein Formalismus. Nach RA 8042 Sec. 6 ist bereits das *Versprechen*
oder *Bewerben* von Auslandsbeschäftigung durch einen Nicht-Lizenzinhaber
illegal recruitment — unabhängig davon, ob damit Geld verdient wird. Der
Betrieb läuft auf Gelais Namen, das Risiko trägt also sie.

**Ein Dokument allein schützt nicht.** Damit es wirkt, muss die Außendarstellung
dazu passen. Konkret zu prüfen:

- Flyer (`FLOss_Flyer_Ausbildung.jpg`, `FLOss_Flyer_Preise.jpg`)
- Facebook-Seite und alle Anzeigen
- die Vorlagen im Cold-Outreach-Workflow
- was Lehrkräfte im Beratungsgespräch sagen

Formulierungen wie „Wir bringen dich nach Deutschland“ oder „Ausbildungsplatz
in Deutschland“ sind genau der Wortlaut, den das Gesetz erfasst. Sichere
Alternative: **„Wir bereiten dich sprachlich auf Deutschland vor.“**

---

## Schritt 9 — Schreiben-Korrektur einrichten (20–30 Minuten)

Das ist Schritt 4 aus dem Modelltest-Plan: automatische Korrektur des freien
Schreiben-Teils. Funktioniert gestaffelt:

- **Ohne diesen Schritt** läuft die Korrektur trotzdem — rein regelbasiert
  (Grammatikprüfung + eigene Heuristiken), ohne KI, für jeden Nutzer, auch ohne
  Login. Kostet nichts, brauch nichts extra.
- **Mit diesem Schritt** bekommen angemeldete Schüler zusätzlich ein von
  Gemini zu echtem Fließtext gebündeltes Feedback (wie eine persönliche
  Nachricht, nicht nur Stichpunkte).

Du kannst Schritt 9 also auch erstmal auslassen und später nachholen — nichts
ist kaputt, wenn du ihn überspringst.

### 9.1 — Gemini-API-Key holen (5 Minuten)

1. Gehe auf [aistudio.google.com](https://aistudio.google.com) und melde dich
   mit einem Google-Konto an.
2. **Get API key** → **Create API key**.
3. Kopiere den Schlüssel, du brauchst ihn gleich noch einmal.

> Das ist das kostenlose Kontingent von Google AI Studio, keine Kreditkarte
> nötig. Bei deiner Schülerzahl wirst du das Limit nicht ausschöpfen — die
> Edge Function begrenzt zusätzlich auf 12 Gemini-Korrekturen pro Schüler und
> Tag, damit auch niemand aus Versehen das ganze Kontingent verbraucht.

### 9.2 — Datenbank erweitern (5 Minuten)

1. Supabase Dashboard → **SQL Editor** → **New query**.
2. Inhalt von `supabase-migration-korrektur.sql` einfügen und **Run**.
3. Unten muss wieder **Success** stehen.

(Falls du `supabase-schema.sql` ohnehin komplett neu einspielst, ist der
Inhalt dort schon mit drin — dann brauchst du diese Datei nicht separat.)

### 9.3 — Edge Function anlegen (10–15 Minuten)

**Einfachster Weg — direkt im Dashboard, ohne Installation:**

1. Supabase Dashboard → **Edge Functions** → **Create a new function**.
2. Name: `korrektur` (genau so, klein geschrieben).
3. Öffne `supabase/functions/korrektur/index.ts` in einem Texteditor, kopiere
   den kompletten Inhalt und füge ihn im Dashboard-Editor ein, wo der
   Platzhalter-Code steht.
4. **Deploy**.

**Alternative — über die Kommandozeile** (falls du Node.js installiert hast
und lieber im Terminal arbeitest):

```
npm install -g supabase
supabase login
supabase link --project-ref DEIN-PROJEKT-REF
supabase functions deploy korrektur
```

Den Projekt-Ref findest du in der Project URL (`https://PROJEKT-REF.supabase.co`).

### 9.4 — Gemini-Key als Secret hinterlegen (2 Minuten)

Der Key darf niemals in eine Datei, die du hochlädst — nur als Supabase-Secret:

1. Dashboard → **Edge Functions** → **Manage secrets** (oder **Project
   Settings → Edge Functions**).
2. Neues Secret: Name `GEMINI_API_KEY`, Wert der Schlüssel aus Schritt 9.1.
3. Speichern.

> Optional: ein zweites Secret `GEMINI_MODEL`, falls du ein anderes
> Gemini-Modell als das Standard-Flash-Modell nutzen willst. Da sich
> Modellnamen bei Google gelegentlich ändern, lohnt sich vor dem Livegang ein
> kurzer Blick in die aktuelle Modell-Liste in Google AI Studio, ob
> `gemini-2.0-flash` noch der empfohlene kostenlose Name ist.

### 9.5 — Testen

1. Auf der Website als Schüler-Account einloggen.
2. Einen Modelltest öffnen, im Schreiben-Teil ein paar Sätze schreiben
   (mindestens 5 Wörter, damit der Knopf aktiv wird).
3. **Text prüfen** klicken.
4. Nach ein paar Sekunden sollte ein Ergebnis mit Prozentangabe, Fehlergruppen
   und einem persönlichen Feedback-Text erscheinen. Steht dort „regelbasiert“
   statt „verfeinert (KI-Bündelung)“, ist entweder kein Nutzer eingeloggt oder
   die Edge Function/der Key ist noch nicht korrekt eingerichtet — dann noch
   einmal Schritt 9.3/9.4 prüfen. Die Seite bleibt so oder so benutzbar, das
   ist Absicht.
5. In Supabase unter **Table Editor → schreiben_korrektur** sollte danach eine
   Zeile stehen.

---

## Wichtige Regeln beim Weiterarbeiten

Zusätzlich zu den Regeln aus `PROJEKT_STATUS_WEBSITE.md`:

1. **Skript-Reihenfolge in den HTML-Dateien.** Die Supabase-Bibliothek,
   `floss-config.js` und `floss-auth.js` müssen **vor** allen anderen Skripten
   stehen. `floss-progress.js` muss **ganz am Ende** stehen, weil es das
   fertig gerenderte DOM braucht.

2. **`floss-config.js` ist die einzige Datei mit Zugangsdaten.** Trag nirgendwo
   sonst Schlüssel ein.

3. **Änderungen am Datenmodell nur über den SQL Editor** und danach in
   `supabase-schema.sql` nachtragen, damit die Datei die Wahrheit bleibt.

4. **Die Seite funktioniert weiterhin ohne Backend.** Ist die Konfiguration
   leer oder das CDN nicht erreichbar, verschwindet nur der Anmeldeknopf —
   alle Übungen laufen normal und der Fortschritt landet lokal im Browser.
   Das ist Absicht, damit ein Ausfall nie den Unterricht blockiert.

---

## Neue Dateien im Überblick

| Datei | Zweck |
|---|---|
| `supabase-schema.sql` | Datenbankstruktur, Sicherheitsregeln, Rechenlogik. Einmal einspielen. |
| `floss-config.js` | **Deine Zugangsdaten.** Die einzige Datei, die du ausfüllen musst. |
| `floss-auth.js` | Registrierung, Anmeldung, Konto, Datenexport, Löschung |
| `floss-progress.js` | Fortschritt speichern, laden, anzeigen; Offline-Puffer |
| `floss-cards.js` | Karteikartenlogik (SM-2) |
| `floss-auth.css` | Gestaltung für Login, Konto und Fortschrittsanzeige |
| `karteikarten.html` | Die Karteikartenseite |
| `passwort-neu.html` | Zielseite für „Passwort vergessen“ |
| `agb.html` | Nutzungsbedingungen und AGB |
| `datenschutz.html` | Datenschutzhinweise nach RA 10173 |
| `recht.css` | Gestaltung der Rechtstexte |
| `.github/workflows/supabase-wachhalten.yml` | Hält das Projekt wach |
| `modelltest.html` / `modelltests.html` | Übersicht und Runner-Seite für die 160 Modelltests |
| `modelltest-engine.js` | Wertet Lesen/Sprachbausteine sofort aus, zeigt den Schreiben-Teil inkl. „Text prüfen“-Knopf |
| `modelltest.css` | Gestaltung für Modelltests und die Korrektur-Ergebnisanzeige |
| `modelltest-korrektur.js` | **Neu.** Die 3 Regelmodule („3 DaF-Lehrer“) + Aufruf der Edge Function |
| `supabase/functions/korrektur/index.ts` | **Neu.** Edge Function: Gemini-Bündelung, Ratenbegrenzung, Speicherung |
| `supabase-migration-korrektur.sql` | **Neu.** Nur die neuen Tabellen für die Korrektur, falls du nicht das komplette Schema neu laufen lassen willst |

Geändert wurde `engine.js` (sechs Zeilen, die jede gelöste Aufgabe melden),
die sieben HTML-Dateien (Skripte und Fußzeilenlinks), `datenschutz.html`
(neuer Abschnitt 4.4 zu LanguageTool/Gemini) sowie `supabase-schema.sql`
(neuer Abschnitt 6 für die Korrektur-Tabellen).

---

## Was als Nächstes ansteht

**Wichtige Lücke zuerst:** Beim Bauen der Korrektur-Engine ist aufgefallen,
dass der Ordner `modelltest-data/` mit den 160 fertigen Testdateien weder im
GitHub-Repo noch im lokal verbundenen Ordner liegt — nur `modelltest.html`,
`modelltests.html`, `modelltest-engine.js` und `modelltest.css` wurden
offenbar schon mal hochgeladen. Ohne diese Dateien zeigt jeder Testaufruf
„Test nicht gefunden“. Du müsstest den Ordner `modelltest-data/` (die 160
`data-modelltest-<niveau>-<nr>.js`-Dateien aus der ursprünglichen Lieferung)
noch ins Repo hochladen, damit die Modelltests inklusive der neuen Korrektur
tatsächlich nutzbar sind.

**Die Modelltests — Rest.** Die Datenbank ist vorbereitet (`test_durchlauf`
speichert Punkte getrennt nach Prüfungsteil, `schreiben_korrektur` jetzt
zusätzlich den Schreiben-Teil). Offen:

- **Hören** braucht Audio. Realistische kostenlose Option: Text-to-Speech mit
  mehreren Stimmen erzeugen. Klingt nicht wie telc-Originale, ist aber für
  Übungszwecke brauchbar. Alternative: du und deine Lehrkräfte sprechen die
  Dialoge selbst ein — klingt besser und kostet nur Zeit.
- **Sprechen** lässt sich nicht automatisch bewerten. Sinnvoll ist,
  Aufgabenstellungen und Bewertungsraster bereitzustellen, die Bewertung
  macht die Lehrkraft.

**Der eigentliche Engpass bleibt aber ein anderer:** ohne Anbindung an ein
offizielles Prüfungszentrum (telc, Goethe, ÖSD) hilft der beste Modelltest
nicht beim Visum. Das ist Blocker 2 aus deiner Handwerks-Strategie und
wichtiger als jede Website-Funktion.

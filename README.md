# FLOß Grammatik — die komplette deutsche Grammatik A1–C2

Statische Website ohne Server: HTML + CSS + Vanilla-JS. 121 Themen, 534 interaktive Übungen.

## Aufbau
- `index.html` — Startseite: Lernpfad A1–C2 und Themen-Ansicht (12 Kategorien), umschaltbar
- `a1.html` … `c2.html` — Level-Seiten
- `data-a1.js` … `data-c2.js` — alle Inhalte und Übungen (hier ergänzt man neue Themen)
- `engine.js` — Übungs-Engine: Multiple Choice, Lückentext, Satz bauen, Zuordnen
- `assistant.js` + `search-index.js` — Suche und Grammatik-Assistent (läuft offline im Browser)
- `styles.css`, `roadmap.css`, `assistant.css` — Design

## Aktualisieren
Nach inhaltlichen Änderungen an `data-*.js` muss der Suchindex neu gebaut werden,
sonst kennt der Assistent die neuen Themen nicht.

## Online stellen (GitHub Pages)
Alle Dateien ins Repository hochladen → Settings → Pages → Branch `main`, Ordner `/ (root)` → Save.
Wichtig: Das Repository muss **öffentlich** sein, sonst schaltet GitHub Pages ab.

## Neues Thema anlegen
```js
{id:"meinthema", chip:"Kurzname", title:"Titel", titleEn:"English title",
 explain:"<p>Erklärung …</p>", merk:"Merksatz", merkEn:"Memory line",
 q:[
   {q:"Frage?", o:["A","B","C"], c:1, h:"Hinweis"},                    // Multiple Choice
   {type:"gap", q:"Lücke ___", a:["antwort"], h:"Hinweis"},            // Lückentext
   {type:"order", q:"Baue den Satz:", w:["Ich","lerne"], a:["Ich lerne"], h:"Hinweis"},
   {type:"match", q:"Ordne zu:", pairs:[["links","rechts"]], h:"Hinweis"}
 ]}
```

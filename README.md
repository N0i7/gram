# FLOß Grammatik — die komplette deutsche Grammatik A1–C2

Statische Website ohne Server. 28 Hauptthemen, 121 Unterthemen, 534 interaktive Übungen,
197 Verbkonjugationen, 27 Erklärvideos, Suche und Grammatik-Assistent.

## Aufbau
- `index.html` — Startseite: Ansicht nach Thema (28 Hauptthemen) oder nach Level (A1–C2)
- `a1.html` … `c2.html` — Level-Seiten mit Erklärungen, Videos und Übungen
- `data-a1.js` … `data-c2.js` — alle Inhalte und Übungen
- `topics-map.js` — Zuordnung Hauptthema → Unterthemen + YouTube-Video
- `verbs.js` + `verbcard.js` — Verbdatenbank und Konjugations-Popup
- `engine.js` — Übungs-Engine: Multiple Choice, Lückentext, Satz bauen, Zuordnen
- `assistant.js` + `search-index.js` — Suche und Assistent (mit Tippfehler-Toleranz)
- `styles.css`, `roadmap.css`, `assistant.css`, `verbcard.css`, `video.css`

## Wichtig beim Aktualisieren
Nach Änderungen an `data-*.js` muss `search-index.js` neu erzeugt werden,
sonst kennt der Assistent die neuen Inhalte nicht.

## Online stellen
Alle Dateien ins GitHub-Repository hochladen → Settings → Pages → Branch `main`, Ordner `/ (root)`.
Das Repository muss **öffentlich** sein, sonst schaltet GitHub Pages ab.

## Videos austauschen
In `topics-map.js` beim jeweiligen Hauptthema das Feld `yt:"VIDEO-ID"` ändern.
Die ID steht in der YouTube-Adresse hinter `watch?v=`.

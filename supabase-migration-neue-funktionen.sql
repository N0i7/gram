-- ============================================================
-- FLOß — Migration: KI-Tutor, Sprechen-Aufnahmen
-- Nur einfügen, wenn supabase-schema.sql und
-- supabase-migration-korrektur.sql schon gelaufen sind.
--
-- ANWENDUNG:
--   Supabase Dashboard -> SQL Editor -> New query
--   Diesen kompletten Inhalt einfügen -> RUN
--   Idempotent, kann gefahrlos mehrfach laufen.
-- ============================================================

-- ------------------------------------------------------------
-- 7. KI-TUTOR
--    Freie Chat-Fragen an einen Gemini-gestützten Grammatik-Tutor,
--    zusätzlich zur bestehenden Stichwort-Suche (assistant.js).
--    Gleiches Schutzmuster wie bei der Schreiben-Korrektur:
--    Tageslimit pro Nutzer, nur eingeloggt, Key nur als Secret
--    in der Edge Function.
-- ------------------------------------------------------------

-- Tageszähler, gleiche Struktur wie korrektur_nutzung.
create table if not exists public.tutor_nutzung (
  user_id     uuid not null references auth.users(id) on delete cascade,
  tag         date not null default current_date,
  anzahl      int  not null default 0,
  primary key (user_id, tag)
);

comment on table public.tutor_nutzung is
  'Zählt Gemini-Tutor-Anfragen pro Nutzer und Tag. Wird nur von der Edge Function (Service Role) beschrieben.';

-- Verlauf der letzten Fragen/Antworten, damit ein Schüler sein
-- Gespräch beim nächsten Besuch wiederfindet (nur die letzten paar,
-- kein endloses Archiv nötig).
create table if not exists public.tutor_nachricht (
  id           bigint generated always as identity primary key,
  user_id      uuid not null references auth.users(id) on delete cascade,
  frage        text not null,
  antwort      text not null,
  erstellt_am  timestamptz not null default now()
);

create index if not exists idx_tutor_nachricht_user
  on public.tutor_nachricht (user_id, erstellt_am desc);

comment on table public.tutor_nachricht is
  'Verlauf der KI-Tutor-Unterhaltung. Dient nur der Anzeige der letzten Fragen, kein Ersatz für die Übungs-Engine.';


-- ------------------------------------------------------------
-- 8. SPRECHEN (Grundgerüst)
--    Browser-Aufnahme zu vorgegebenen Prompts je Niveau. Bewusst
--    OHNE automatische Bewertung — die Aufnahme liegt zur manuellen
--    Durchsicht bereit (Lehrer-Dashboard), löst das "Audio ist
--    offen"-Problem pragmatisch statt teure Spracherkennung zu bauen.
--    Braucht zusätzlich einen Storage-Bucket "sprechen" (siehe
--    EINRICHTUNG.md) — das Anlegen eines Buckets kann diese SQL-Datei
--    nicht übernehmen, das macht Supabase über die Oberfläche.
-- ------------------------------------------------------------
create table if not exists public.sprechen_aufnahme (
  id           bigint generated always as identity primary key,
  user_id      uuid not null references auth.users(id) on delete cascade,
  niveau       text not null,
  prompt_id    text not null,               -- z.B. 'a1-vorstellung-1'
  storage_pfad text not null,               -- Pfad im Bucket "sprechen"
  dauer_sek    int,
  angehoert    boolean not null default false,   -- vom Lehrer schon durchgesehen?
  erstellt_am  timestamptz not null default now()
);

create index if not exists idx_sprechen_user
  on public.sprechen_aufnahme (user_id, erstellt_am desc);
create index if not exists idx_sprechen_offen
  on public.sprechen_aufnahme (angehoert) where angehoert = false;

comment on table public.sprechen_aufnahme is
  'Metadaten zu Sprechen-Aufnahmen. Die eigentliche Audiodatei liegt im Storage-Bucket "sprechen", nicht in der Datenbank.';


alter table public.tutor_nutzung     enable row level security;
alter table public.tutor_nachricht   enable row level security;
alter table public.sprechen_aufnahme enable row level security;

-- --- tutor_nutzung ---
-- Bewusst wie korrektur_nutzung: keine Policy für normale Nutzer.
drop policy if exists "lehrer liest tutor nutzung" on public.tutor_nutzung;

create policy "lehrer liest tutor nutzung" on public.tutor_nutzung
  for select using (public.ist_lehrer());

-- --- tutor_nachricht ---
drop policy if exists "eigene tutor nachrichten"      on public.tutor_nachricht;
drop policy if exists "lehrer liest tutor nachrichten" on public.tutor_nachricht;

create policy "eigene tutor nachrichten" on public.tutor_nachricht
  for select using (auth.uid() = user_id);
create policy "lehrer liest tutor nachrichten" on public.tutor_nachricht
  for select using (public.ist_lehrer());
-- Kein Insert/Update/Delete für normale Nutzer — nur die Edge Function
-- (Service Role) schreibt, gleicher Grund wie bei lernfortschritt_eintrag.

-- --- sprechen_aufnahme ---
drop policy if exists "eigene aufnahmen"       on public.sprechen_aufnahme;
drop policy if exists "eigene aufnahmen anlegen" on public.sprechen_aufnahme;
drop policy if exists "lehrer liest aufnahmen" on public.sprechen_aufnahme;
drop policy if exists "lehrer aktualisiert aufnahmen" on public.sprechen_aufnahme;

create policy "eigene aufnahmen" on public.sprechen_aufnahme
  for select using (auth.uid() = user_id);
create policy "eigene aufnahmen anlegen" on public.sprechen_aufnahme
  for insert with check (auth.uid() = user_id);
create policy "lehrer liest aufnahmen" on public.sprechen_aufnahme
  for select using (public.ist_lehrer());
create policy "lehrer aktualisiert aufnahmen" on public.sprechen_aufnahme
  for update using (public.ist_lehrer()) with check (public.ist_lehrer());
-- Update-Recht für Lehrer, damit "angehoert" nach der Durchsicht
-- gesetzt werden kann. Schüler können ihre Aufnahmen weder ändern
-- noch löschen — vermeidet nachträgliches Austauschen einer
-- bereits bewerteten Aufnahme.


-- ============================================================
-- FERTIG
--
-- Nächste Schritte in der Supabase-Oberfläche:
--   1. Storage -> New bucket -> Name "sprechen", NICHT public.
--      (Zugriff läuft über signierte URLs aus dem Frontend, nicht
--      über einen öffentlichen Link.)
--   2. Storage -> Policies für den Bucket "sprechen" analog zu den
--      Tabellen-Policies oben anlegen (Details in EINRICHTUNG.md).
--   3. Edge Function "tutor" deployen (siehe EINRICHTUNG.md Schritt 11).
-- ============================================================

-- ============================================================
-- FLOß — Migration: Schreiben-Korrektur (Schritt 4 Modelltests)
-- Nur einfügen, wenn supabase-schema.sql schon einmal komplett
-- gelaufen ist (Profile/Tests/etc. existieren bereits).
--
-- ANWENDUNG:
--   Supabase Dashboard -> SQL Editor -> New query
--   Diesen kompletten Inhalt einfügen -> RUN
--   Idempotent, kann gefahrlos mehrfach laufen.
-- ============================================================

-- ------------------------------------------------------------
-- 6. SCHREIBEN-KORREKTUR
--    Für Schritt 4 der Modelltests: automatische Korrektur des
--    freien Schreiben-Teils. Bewusst als EIGENE Tabellen und NICHT
--    als Änderung an test_durchlauf umgesetzt — additiv, kein Risiko
--    für die bereits laufende Lesen/Sprachbausteine-Speicherung.
-- ------------------------------------------------------------

-- Ein Datensatz pro Korrektur-Versuch im Schreiben-Teil.
create table if not exists public.schreiben_korrektur (
  id             bigint generated always as identity primary key,
  user_id        uuid not null references auth.users(id) on delete cascade,
  test_key       text not null,               -- z.B. 'modelltest-b1-01'
  niveau         text not null,
  aufgabe_nr     int,
  text           text not null,
  wortzahl       int not null default 0,
  quelle         text not null default 'regelbasiert',  -- 'regelbasiert' oder 'gemini'
  ergebnis       jsonb not null default '{}'::jsonb,     -- voller Bündelungs-Output (lob, fehlergruppen, lernsatz, schlusssatz, kriterien, gesamtprozent)
  gesamtprozent  int,
  erstellt_am    timestamptz not null default now()
);

create index if not exists idx_schreiben_korrektur_user
  on public.schreiben_korrektur (user_id, test_key, erstellt_am desc);

comment on table public.schreiben_korrektur is
  'Ergebnis einer Schreiben-Korrektur (regelbasiert oder mit Gemini-Bündelung). Eigenständig von test_durchlauf, um dessen bestehende Insert-Logik nicht anzufassen.';


-- Tageszähler pro Nutzer, um das kostenlose Gemini-Kontingent vor
-- Missbrauch/versehentlichem Leerlaufen zu schützen. Gleiche
-- Struktur wie lern_tag, damit sie sich vertraut liest.
create table if not exists public.korrektur_nutzung (
  user_id     uuid not null references auth.users(id) on delete cascade,
  tag         date not null default current_date,
  anzahl      int  not null default 0,
  primary key (user_id, tag)
);

comment on table public.korrektur_nutzung is
  'Zählt Gemini-gestützte Korrekturen pro Nutzer und Tag. Wird nur von der Edge Function (Service Role) beschrieben, nie direkt vom Client.';


-- Automatischer Lernfortschritt-Eintrag, Pendant zu Lions bisheriger
-- manueller Praxis (lernfortschritt_[name].md), jetzt strukturiert
-- pro Nutzer statt als Datei.
create table if not exists public.lernfortschritt_eintrag (
  id                   bigint generated always as identity primary key,
  user_id              uuid not null references auth.users(id) on delete cascade,
  test_key             text,
  niveau               text,
  datum                date not null default current_date,
  staerken             text[] not null default '{}',
  fehler_schwerpunkte  text[] not null default '{}',
  naechstes_ziel       text,
  quelle               text not null default 'schreiben-korrektur',
  erstellt_am          timestamptz not null default now()
);

create index if not exists idx_lernfortschritt_user
  on public.lernfortschritt_eintrag (user_id, datum desc);

comment on table public.lernfortschritt_eintrag is
  'Automatisch erzeugter Lernfortschritt-Eintrag aus der Schreiben-Korrektur. Ergänzt, ersetzt nicht Lions manuelle 1:1-Unterrichtsnotizen in floß/lernfortschritt/.';


alter table public.schreiben_korrektur     enable row level security;
alter table public.korrektur_nutzung       enable row level security;
alter table public.lernfortschritt_eintrag enable row level security;

-- --- schreiben_korrektur ---
drop policy if exists "eigene korrekturen"      on public.schreiben_korrektur;
drop policy if exists "lehrer liest korrekturen" on public.schreiben_korrektur;

create policy "eigene korrekturen" on public.schreiben_korrektur
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "lehrer liest korrekturen" on public.schreiben_korrektur
  for select using (public.ist_lehrer());

-- --- korrektur_nutzung ---
-- Bewusst KEINE Policy für normale Nutzer (weder lesen noch schreiben).
-- Nur die Edge Function (mit Service-Role-Key, umgeht RLS ohnehin)
-- und Lehrer greifen hier zu — verhindert, dass ein Schüler seinen
-- eigenen Tageszähler zurücksetzt.
drop policy if exists "lehrer liest nutzung" on public.korrektur_nutzung;

create policy "lehrer liest nutzung" on public.korrektur_nutzung
  for select using (public.ist_lehrer());

-- --- lernfortschritt_eintrag ---
drop policy if exists "eigener lernfortschritt"      on public.lernfortschritt_eintrag;
drop policy if exists "lehrer liest lernfortschritt" on public.lernfortschritt_eintrag;

create policy "eigener lernfortschritt" on public.lernfortschritt_eintrag
  for select using (auth.uid() = user_id);
create policy "lehrer liest lernfortschritt" on public.lernfortschritt_eintrag
  for select using (public.ist_lehrer());
-- Kein Insert/Update/Delete für normale Nutzer — nur die Edge Function
-- (Service Role) schreibt Einträge, damit niemand sich selbst schönere
-- Lernfortschritte eintragen kann.

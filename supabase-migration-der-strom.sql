-- ============================================================
-- FLOß — Migration: Lernspiel „Der Strom“ (der-strom.html)
-- Nur einfügen, wenn supabase-schema.sql schon einmal komplett
-- gelaufen ist (profiles, test_durchlauf und ist_lehrer() existieren).
--
-- ANWENDUNG:
--   Supabase Dashboard -> SQL Editor -> New query
--   Diesen kompletten Inhalt einfügen -> RUN
--   Idempotent, kann gefahrlos mehrfach laufen.
--
-- Was das Spiel speichert:
--   · spiel_stand      — EIN Datensatz pro Nutzer mit dem kompletten
--                        Spielstand (jsonb) plus ein paar Kennzahlen
--                        als eigene Spalten fürs Lehrer-Dashboard.
--   · test_durchlauf   — (bestehende Tabelle) jeder Zwischen- und
--                        Abschlusstest eines Bezirks als eigener Versuch,
--                        test_key 'der-strom-<bezirk>' bzw.
--                        'der-strom-<bezirk>-zwischentest'.
--                        Dafür ist KEINE Änderung nötig.
-- ============================================================

create table if not exists public.spiel_stand (
  user_id          uuid primary key references auth.users(id) on delete cascade,
  stand            jsonb not null default '{}'::jsonb,  -- kompletter Spielstand (Economy.state)
  level            int,
  xp               int,
  bezirk           text,                                -- aktueller Bezirk, z.B. 'handelsstadt'
  lektionen        int  not null default 0,             -- abgeschlossene Lektionen
  tests_bestanden  int  not null default 0,             -- bestandene Bezirks-Tests
  aktualisiert_am  timestamptz not null default now()
);

create index if not exists idx_spiel_stand_aktualisiert
  on public.spiel_stand (aktualisiert_am desc);

comment on table public.spiel_stand is
  'Spielstand des Lernspiels Der Strom, ein Datensatz pro Nutzer. stand = voller Spielstand, die übrigen Spalten sind Kennzahlen für Lehrkräfte.';

alter table public.spiel_stand enable row level security;

drop policy if exists "eigener spielstand"      on public.spiel_stand;
drop policy if exists "lehrer liest spielstand" on public.spiel_stand;

-- Jeder liest und schreibt nur seinen eigenen Spielstand.
create policy "eigener spielstand" on public.spiel_stand
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Lehrkräfte sehen den Fortschritt aller Schüler.
create policy "lehrer liest spielstand" on public.spiel_stand
  for select using (public.ist_lehrer());

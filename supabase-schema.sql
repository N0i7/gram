-- ============================================================
-- FLOß Grammatik — Datenbankschema für Supabase
-- Version 1.0 · August 2026
--
-- ANWENDUNG:
--   Supabase Dashboard → SQL Editor → New query
--   Diesen kompletten Inhalt einfügen → RUN
--   Die Datei ist wiederholbar ausführbar (idempotent).
-- ============================================================


-- ------------------------------------------------------------
-- 1. PROFILE
--    Ergänzt die von Supabase verwaltete Tabelle auth.users
--    um schulspezifische Felder.
-- ------------------------------------------------------------
create table if not exists public.profiles (
  id              uuid primary key references auth.users(id) on delete cascade,
  vorname         text,
  nachname        text,
  ziel_niveau     text check (ziel_niveau in ('A1','A2','B1','B2','C1','C2')),
  start_niveau    text check (start_niveau in ('A1','A2','B1','B2','C1','C2')),
  kurs            text,                       -- z.B. "Abendkurs B1 Q3/2026"
  ist_lehrer      boolean not null default false,
  einwilligung_am timestamptz,                -- Datenschutz-Einwilligung
  erstellt_am     timestamptz not null default now(),
  zuletzt_aktiv   timestamptz not null default now()
);

comment on table public.profiles is
  'Schülerprofile. Ein Datensatz pro Login. ist_lehrer=true gibt Leserecht auf alle Schülerdaten.';


-- ------------------------------------------------------------
-- 2. ÜBUNGSFORTSCHRITT
--    Eine Zeile pro Schüler und Einzelaufgabe.
--    Wiederholtes Lösen aktualisiert die bestehende Zeile
--    und zählt die Versuche hoch.
-- ------------------------------------------------------------
create table if not exists public.uebung_fortschritt (
  id            bigint generated always as identity primary key,
  user_id       uuid not null references auth.users(id) on delete cascade,
  niveau        text not null,                -- 'a1' … 'c2'
  thema_id      text not null,                -- t.id aus data-*.js
  aufgabe_index int  not null,                -- Position im q-Array
  richtig       boolean not null,
  versuche      int  not null default 1,
  erste_antwort_richtig boolean not null,     -- für ehrliche Statistik
  geloest_am    timestamptz not null default now(),
  unique (user_id, niveau, thema_id, aufgabe_index)
);

create index if not exists idx_fortschritt_user_niveau
  on public.uebung_fortschritt (user_id, niveau);
create index if not exists idx_fortschritt_user_thema
  on public.uebung_fortschritt (user_id, niveau, thema_id);

comment on table public.uebung_fortschritt is
  'Gelöste Einzelaufgaben. erste_antwort_richtig bleibt unverändert, damit Wiederholen die Statistik nicht schönt.';


-- ------------------------------------------------------------
-- 3. KARTEIKARTEN (Spaced Repetition, SM-2)
--    Der Karteninhalt wird im Frontend erzeugt (Verben,
--    Grammatikregeln). Hier steht nur der Lernzustand.
-- ------------------------------------------------------------
create table if not exists public.karteikarten (
  id            bigint generated always as identity primary key,
  user_id       uuid not null references auth.users(id) on delete cascade,
  karte_key     text not null,                -- z.B. 'verb:gehen' oder 'regel:a1/artikel'
  niveau        text,
  -- SM-2 Zustand
  intervall     int   not null default 0,     -- Tage bis zur nächsten Wiederholung
  wiederholung  int   not null default 0,     -- Anzahl erfolgreicher Durchgänge in Folge
  leichtigkeit  real  not null default 2.5,   -- ease factor, min. 1.3
  faellig_am    date  not null default current_date,
  zuletzt_am    timestamptz,
  gesamt_richtig int  not null default 0,
  gesamt_falsch  int  not null default 0,
  unique (user_id, karte_key)
);

create index if not exists idx_karten_faellig
  on public.karteikarten (user_id, faellig_am);

comment on table public.karteikarten is
  'SM-2 Lernzustand pro Karte. faellig_am steuert die tägliche Warteschlange.';


-- ------------------------------------------------------------
-- 4. MODELLTESTS
--    Vorbereitet für später. Der Testinhalt (Aufgaben) liegt
--    im Frontend; hier stehen nur Durchläufe und Ergebnisse.
-- ------------------------------------------------------------
create table if not exists public.test_durchlauf (
  id             bigint generated always as identity primary key,
  user_id        uuid not null references auth.users(id) on delete cascade,
  test_key       text not null,               -- z.B. 'modelltest-b1-01'
  niveau         text not null,
  gestartet_am   timestamptz not null default now(),
  beendet_am     timestamptz,
  punkte         int,
  punkte_max     int,
  bestanden      boolean,
  -- Teilergebnisse nach telc-Struktur
  punkte_lesen   int,
  punkte_hoeren  int,
  punkte_sprachbausteine int,
  punkte_schreiben int,
  antworten      jsonb not null default '{}'::jsonb
);

create index if not exists idx_test_user
  on public.test_durchlauf (user_id, niveau, gestartet_am desc);

comment on table public.test_durchlauf is
  'Ein Datensatz pro Testversuch. antworten speichert die Rohantworten für spätere Auswertung.';


-- ------------------------------------------------------------
-- 5. LERNSITZUNGEN
--    Für Streak-Anzeige und den Nachweis von Lernstunden
--    gegenüber Kammern und Arbeitgebern.
-- ------------------------------------------------------------
create table if not exists public.lern_tag (
  user_id     uuid not null references auth.users(id) on delete cascade,
  tag         date not null default current_date,
  minuten     int  not null default 0,
  aufgaben    int  not null default 0,
  primary key (user_id, tag)
);

comment on table public.lern_tag is
  'Tagesaggregat für Streaks und Stundennachweise.';


-- ============================================================
-- ROW LEVEL SECURITY
--
-- WICHTIG: Ohne diese Regeln kann jeder mit dem öffentlichen
-- anon-Key ALLE Schülerdaten auslesen. Der Key steht im
-- Browser-Quelltext und ist damit öffentlich bekannt.
-- ============================================================

alter table public.profiles            enable row level security;
alter table public.uebung_fortschritt  enable row level security;
alter table public.karteikarten        enable row level security;
alter table public.test_durchlauf      enable row level security;
alter table public.lern_tag            enable row level security;


-- Hilfsfunktion: Ist der aktuelle Nutzer ein Lehrer?
-- security definer umgeht RLS beim Nachschlagen und verhindert
-- damit eine Endlosschleife in der profiles-Policy.
create or replace function public.ist_lehrer()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((select ist_lehrer from public.profiles where id = auth.uid()), false);
$$;


-- --- profiles ---
drop policy if exists "eigenes profil lesen"    on public.profiles;
drop policy if exists "eigenes profil anlegen"  on public.profiles;
drop policy if exists "eigenes profil aendern"  on public.profiles;
drop policy if exists "eigenes profil loeschen" on public.profiles;
drop policy if exists "lehrer liest alle profile" on public.profiles;

create policy "eigenes profil lesen" on public.profiles
  for select using (auth.uid() = id);
create policy "eigenes profil anlegen" on public.profiles
  for insert with check (auth.uid() = id);
create policy "eigenes profil aendern" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "eigenes profil loeschen" on public.profiles
  for delete using (auth.uid() = id);
create policy "lehrer liest alle profile" on public.profiles
  for select using (public.ist_lehrer());


-- --- uebung_fortschritt ---
drop policy if exists "eigener fortschritt"        on public.uebung_fortschritt;
drop policy if exists "lehrer liest fortschritt"   on public.uebung_fortschritt;

create policy "eigener fortschritt" on public.uebung_fortschritt
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "lehrer liest fortschritt" on public.uebung_fortschritt
  for select using (public.ist_lehrer());


-- --- karteikarten ---
drop policy if exists "eigene karten"      on public.karteikarten;
drop policy if exists "lehrer liest karten" on public.karteikarten;

create policy "eigene karten" on public.karteikarten
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "lehrer liest karten" on public.karteikarten
  for select using (public.ist_lehrer());


-- --- test_durchlauf ---
drop policy if exists "eigene tests"      on public.test_durchlauf;
drop policy if exists "lehrer liest tests" on public.test_durchlauf;

create policy "eigene tests" on public.test_durchlauf
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "lehrer liest tests" on public.test_durchlauf
  for select using (public.ist_lehrer());


-- --- lern_tag ---
drop policy if exists "eigene lerntage"      on public.lern_tag;
drop policy if exists "lehrer liest lerntage" on public.lern_tag;

create policy "eigene lerntage" on public.lern_tag
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "lehrer liest lerntage" on public.lern_tag
  for select using (public.ist_lehrer());


-- ============================================================
-- AUTOMATIK
-- ============================================================

-- Bei jeder Registrierung automatisch ein Profil anlegen.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, vorname, nachname, einwilligung_am)
  values (
    new.id,
    new.raw_user_meta_data->>'vorname',
    new.raw_user_meta_data->>'nachname',
    case when (new.raw_user_meta_data->>'einwilligung') = 'true'
         then now() else null end
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();


-- Fortschritt speichern (Upsert mit korrekter Versuchszählung).
-- Wird vom Frontend per rpc() aufgerufen.
create or replace function public.fortschritt_speichern(
  p_niveau text,
  p_thema_id text,
  p_aufgabe_index int,
  p_richtig boolean
)
returns void
language plpgsql
security invoker
set search_path = public
as $$
begin
  insert into public.uebung_fortschritt
    (user_id, niveau, thema_id, aufgabe_index, richtig, erste_antwort_richtig)
  values
    (auth.uid(), p_niveau, p_thema_id, p_aufgabe_index, p_richtig, p_richtig)
  on conflict (user_id, niveau, thema_id, aufgabe_index) do update
    set richtig    = excluded.richtig,
        versuche   = public.uebung_fortschritt.versuche + 1,
        geloest_am = now();

  insert into public.lern_tag (user_id, tag, aufgaben)
  values (auth.uid(), current_date, 1)
  on conflict (user_id, tag) do update
    set aufgaben = public.lern_tag.aufgaben + 1;

  update public.profiles set zuletzt_aktiv = now() where id = auth.uid();
end;
$$;


-- Karteikarte nach SM-2 bewerten.
-- p_note: 0 = nicht gewusst, 3 = mit Mühe, 4 = gut, 5 = sofort
create or replace function public.karte_bewerten(
  p_karte_key text,
  p_niveau text,
  p_note int
)
returns void
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_int int; v_wdh int; v_ease real;
begin
  select intervall, wiederholung, leichtigkeit
    into v_int, v_wdh, v_ease
    from public.karteikarten
   where user_id = auth.uid() and karte_key = p_karte_key;

  if not found then
    v_int := 0; v_wdh := 0; v_ease := 2.5;
  end if;

  if p_note < 3 then
    -- Nicht gewusst: zurück auf Anfang, morgen wieder
    v_wdh := 0;
    v_int := 1;
  else
    v_wdh := v_wdh + 1;
    if    v_wdh = 1 then v_int := 1;
    elsif v_wdh = 2 then v_int := 6;
    else  v_int := greatest(1, round(v_int * v_ease)::int);
    end if;
    v_ease := greatest(1.3,
      v_ease + (0.1 - (5 - p_note) * (0.08 + (5 - p_note) * 0.02)));
  end if;

  insert into public.karteikarten
    (user_id, karte_key, niveau, intervall, wiederholung, leichtigkeit,
     faellig_am, zuletzt_am, gesamt_richtig, gesamt_falsch)
  values
    (auth.uid(), p_karte_key, p_niveau, v_int, v_wdh, v_ease,
     current_date + v_int, now(),
     case when p_note >= 3 then 1 else 0 end,
     case when p_note <  3 then 1 else 0 end)
  on conflict (user_id, karte_key) do update
    set intervall      = excluded.intervall,
        wiederholung   = excluded.wiederholung,
        leichtigkeit   = excluded.leichtigkeit,
        faellig_am     = excluded.faellig_am,
        zuletzt_am     = now(),
        niveau         = coalesce(excluded.niveau, public.karteikarten.niveau),
        gesamt_richtig = public.karteikarten.gesamt_richtig + case when p_note >= 3 then 1 else 0 end,
        gesamt_falsch  = public.karteikarten.gesamt_falsch  + case when p_note <  3 then 1 else 0 end;
end;
$$;


-- Fortschrittsübersicht pro Thema (für Badges auf den Level-Seiten).
create or replace view public.meine_themen_uebersicht as
  select user_id, niveau, thema_id,
         count(*)                              as geloest,
         count(*) filter (where richtig)        as richtig,
         max(geloest_am)                        as zuletzt
    from public.uebung_fortschritt
   group by user_id, niveau, thema_id;


-- Lernstreak in Tagen (für die Motivationsanzeige).
--
-- Gezählt wird die lückenlose Kette von Lerntagen, rückwärts vom
-- letzten Lerntag. Dieser muss heute oder gestern sein — sonst ist
-- der Streak gerissen und die Funktion gibt 0 zurück.
--
-- Der Anker ist bewusst der letzte Lerntag und nicht current_date:
-- Wer gestern gelernt hat und heute noch nicht, soll seinen Streak
-- noch sehen und ihn heute halten können.
--
-- Hinweis: row_number() liefert bigint. Postgres kennt keinen
-- Operator "date - bigint" — daher die Umwandlung nach int.
create or replace function public.mein_streak()
returns int
language sql
stable
security invoker
set search_path = public
as $$
  with tage as (
    select tag, (row_number() over (order by tag desc))::int as rn
      from public.lern_tag
     where user_id = auth.uid() and aufgaben > 0
  ),
  anker as (
    select max(tag) as letzter from tage
  )
  select coalesce((
    select count(*)::int
      from tage, anker
     where anker.letzter >= current_date - 1
       and tage.tag = anker.letzter - (tage.rn - 1)
  ), 0);
$$;


-- ============================================================
-- FERTIG
--
-- Nächster Schritt in der Supabase-Oberfläche:
--   Authentication → Providers → Email: "Confirm email" auf AUS,
--   solange du testest. Später wieder AN.
--
-- Um dich selbst zum Lehrer zu machen (nach deiner Registrierung):
--   update public.profiles set ist_lehrer = true
--    where id = (select id from auth.users where email = 'DEINE@MAIL');
-- ============================================================

/* ============================================================
   FLOß — Zentrale Konfiguration
   ------------------------------------------------------------
   DIES IST DIE EINZIGE DATEI, DIE DU BEARBEITEN MUSST.

   Die beiden Werte findest du im Supabase-Dashboard unter
   Project Settings → API → "Project URL" und "anon public".

   Der anon-Key ist absichtlich öffentlich. Er ist im Quelltext
   jeder Website sichtbar. Der Schutz der Daten kommt NICHT von
   diesem Key, sondern von den Row-Level-Security-Regeln in der
   Datenbank. Deshalb: niemals den "service_role"-Key hier
   eintragen — der umgeht alle Sicherheitsregeln.
   ============================================================ */

window.FLOSS_CONFIG = {

  // --- Supabase Zugangsdaten ---
  SUPABASE_URL:      "https://vqotkouayawkaorbnajg.supabase.co",     // z.B. https://abcdefgh.supabase.co
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxb3Rrb3VheWF3a2FvcmJuYWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2MDM5OTIsImV4cCI6MjEwMjE3OTk5Mn0.Qne9sfFXTLGXOK0UbOi8ZbBZrO2wpWhQVgTsH87w9bA",

  // --- Schule ---
  SCHULE: {
    name:     "FLOß",
    langname: "FLOß — Fides Lingua Ortus Solertia",
    email:    "fideslinguaortussolertia@gmail.com",
    ort:      "Lapu-Lapu City, Cebu, Philippinen",
    // Verantwortliche Person für Datenschutzanfragen (Data Protection Officer).
    // Muss eine erreichbare Person sein — Name und Kontakt sind Pflichtangaben.
    dpo_name:  "Lion Juedes",
    dpo_email: "fideslinguaortussolertia@gmail.com"
  },

  // --- Rechtliche Dokumente: Stand der jeweils gültigen Fassung ---
  RECHT: {
    agb_stand:         "2026-08-13",
    datenschutz_stand: "2026-08-13",
    // Mindestalter für eine eigenständige Registrierung ohne Zustimmung
    // der Eltern. Unter 18 gilt ein Schüler auf den Philippinen als Minor.
    mindestalter: 18
  },

  // --- Verhalten ---
  // Wenn true, funktioniert die Seite auch ohne Login weiter
  // (Fortschritt landet dann nur lokal im Browser).
  GAST_MODUS_ERLAUBT: true,

  // Nach wie vielen gelösten Aufgaben ein Gast zum Login eingeladen wird.
  // 0 schaltet den Hinweis ab.
  LOGIN_HINWEIS_NACH: 8
};

// ============================================================
// FLOß — Edge Function "tutor"
// ------------------------------------------------------------
// Freier Chat-Tutor für Grammatikfragen, zusätzlich zur bestehenden
// Stichwort-Suche (assistant.js), die nur Themen verlinkt aber keine
// eigenen Fragen versteht. Gleiches Sicherheits- und Fallback-Muster
// wie die Edge Function "korrektur":
//   - läuft NUR für eingeloggte Nutzer
//   - Tageslimit pro Nutzer, geprüft server-seitig
//   - Gemini-Key nur hier als Secret, nie im Browser-Code
//   - schlägt irgendetwas fehl, kommt ein sauberes ok:false zurück,
//     der Client zeigt dann einen Hinweis statt kaputt zu bleiben
//
// Benötigte Supabase-Secrets (dieselben wie bei "korrektur", werden
// wiederverwendet — nichts Neues einzurichten außer dem Deploy
// selbst, siehe EINRICHTUNG.md):
//   GEMINI_API_KEY, GEMINI_MODEL (optional)
// Automatisch vorhanden: SUPABASE_URL, SUPABASE_ANON_KEY,
//   SUPABASE_SERVICE_ROLE_KEY
// ============================================================

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const GEMINI_MODEL = Deno.env.get("GEMINI_MODEL") || "gemini-3.6-flash";
const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY") || "";
const TAGES_LIMIT = 20; // Tutor-Fragen pro Nutzer und Tag — kürzere Antworten als die Korrektur, daher etwas großzügiger
const MAX_FRAGE_LAENGE = 600;
const VERLAUF_KONTEXT = 6; // wie viele vorherige Nachrichten als Kontext mitgeschickt werden

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS_HEADERS });
  if (req.method !== "POST") return json({ ok: false, grund: "methode-nicht-erlaubt" }, 405);

  let payload: any;
  try {
    payload = await req.json();
  } catch {
    return json({ ok: false, grund: "ungueltiges-json" }, 400);
  }

  const frage = String(payload?.frage || "").trim();
  const verlauf: Array<{ frage: string; antwort: string }> = Array.isArray(payload?.verlauf) ? payload.verlauf : [];
  if (!frage) return json({ ok: false, grund: "keine-frage" }, 400);
  if (frage.length > MAX_FRAGE_LAENGE) {
    return json({ ok: false, grund: "frage-zu-lang" }, 400);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  const authHeader = req.headers.get("Authorization") || "";
  const userClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } }
  });
  const { data: userData, error: userErr } = await userClient.auth.getUser();
  if (userErr || !userData || !userData.user) {
    return json({ ok: false, grund: "nicht-angemeldet" }, 401);
  }
  const userId = userData.user.id;

  const admin = createClient(supabaseUrl, serviceKey);

  // ---------- Tageslimit prüfen & hochzählen ----------
  const heute = new Date().toISOString().slice(0, 10);
  const { data: nutzung } = await admin
    .from("tutor_nutzung")
    .select("anzahl")
    .eq("user_id", userId)
    .eq("tag", heute)
    .maybeSingle();

  const bisherigeAnzahl = (nutzung && nutzung.anzahl) || 0;
  if (bisherigeAnzahl >= TAGES_LIMIT) {
    return json({ ok: false, grund: "tageslimit-erreicht", limit: TAGES_LIMIT }, 200);
  }

  if (!GEMINI_API_KEY) {
    return json({ ok: false, grund: "gemini-nicht-konfiguriert" }, 200);
  }

  // ---------- Gemini aufrufen ----------
  let antwort: string;
  try {
    antwort = await gemini(frage, verlauf.slice(-VERLAUF_KONTEXT));
  } catch (err) {
    // Loggen, damit die echte Ursache in Supabase -> Edge Functions -> tutor -> Logs sichtbar ist,
    // statt nur der Sammelmeldung "gemini-fehler" im Frontend.
    console.error("tutor gemini-fehler:", err instanceof Error ? err.message : err);
    return json({ ok: false, grund: "gemini-fehler" }, 200);
  }
  if (!antwort) return json({ ok: false, grund: "gemini-leere-antwort" }, 200);

  // ---------- Zähler hochsetzen + Verlauf speichern (best effort) ----------
  await admin
    .from("tutor_nutzung")
    .upsert({ user_id: userId, tag: heute, anzahl: bisherigeAnzahl + 1 }, { onConflict: "user_id,tag" });

  await admin.from("tutor_nachricht").insert({
    user_id: userId,
    frage,
    antwort
  });

  return json({ ok: true, antwort, verbleibend: Math.max(0, TAGES_LIMIT - bisherigeAnzahl - 1) });
});

// ------------------------------------------------------------
// Gemini-Aufruf: einfache Chat-Antwort, kein strukturiertes JSON
// nötig (anders als bei der Korrektur) — hier reicht Fließtext.
// ------------------------------------------------------------
async function gemini(frage: string, verlauf: Array<{ frage: string; antwort: string }>) {
  const system = `Du bist der Grammatik-Tutor von FLOß, einer Deutschschule auf den Philippinen (Lapu-Lapu City, Cebu).
Deine Schüler lernen Deutsch als Fremdsprache, oft mit dem Ziel telc-Prüfungen (A1–B2) zu bestehen und teils
eine Ausbildung oder Arbeit in Deutschland anzutreten. Viele sprechen Bisaya/Tagalog und Englisch als
Erstsprachen, Deutsch ist neu für sie.

Stil-Regeln (verbindlich):
- Antworte auf Deutsch, in einfachen, kurzen Sätzen, passend zum vermuteten Niveau der Frage.
- Erkläre IMMER mit mindestens einem konkreten Beispielsatz.
- Keine Überschriften, keine Bullet-Point-Listen, keine KI-Floskeln ("Zusammenfassend", "Hoffe das hilft").
  Schreib wie ein freundlicher Lehrer, der kurz und klar antwortet — maximal 4-5 Sätze.
- Bei Unsicherheit über das Niveau: erkläre so einfach wie möglich (A2/B1-Niveau als Standard).
- Bleib strikt beim Thema deutsche Grammatik/Sprache. Bei fachfremden Fragen (Visa, Rechtsberatung,
  private Themen) antworte freundlich, dass du nur für Grammatikfragen da bist und der Schüler sich
  dafür an die Schule wenden soll.
- Erfinde keine Grammatikregeln. Bei echter Unsicherheit sag das ehrlich, statt zu raten.`;

  const contents: any[] = [];
  for (const eintrag of verlauf) {
    if (!eintrag || !eintrag.frage || !eintrag.antwort) continue;
    contents.push({ role: "user", parts: [{ text: String(eintrag.frage).slice(0, 600) }] });
    contents.push({ role: "model", parts: [{ text: String(eintrag.antwort).slice(0, 1500) }] });
  }
  contents.push({ role: "user", parts: [{ text: frage }] });

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20000);
  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: ctrl.signal,
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents,
        generationConfig: { temperature: 0.5, maxOutputTokens: 500 }
      })
    });
  } finally {
    clearTimeout(timer);
  }

  if (!res.ok) {
    const fehlertext = await res.text().catch(() => "");
    throw new Error("gemini-http-" + res.status + ": " + fehlertext.slice(0, 500));
  }
  const data = await res.json();
  const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!raw || typeof raw !== "string") {
    // finishReason zeigt oft an, WARUM keine Antwort kam (z.B. "SAFETY", "MAX_TOKENS").
    const finishReason = data?.candidates?.[0]?.finishReason;
    throw new Error("gemini-keine-antwort (finishReason=" + finishReason + ") " + JSON.stringify(data).slice(0, 400));
  }
  return raw.trim();
}

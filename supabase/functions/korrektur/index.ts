// ============================================================
// FLOß — Edge Function "korrektur"
// ------------------------------------------------------------
// Nimmt das lokal (im Browser) berechnete Bündel der 3 DaF-Lehrer-
// Module entgegen (Grammatik/Rechtschreibung, Wortschatz/Ausdruck,
// Aufgabenerfüllung/Struktur — siehe modelltest-korrektur.js) und
// verfeinert es mit Gemini zu echtem Fließtext im Sandwich-Stil
// (Lob -> gruppierte Fehler -> ein Lernziel -> echter Schlusssatz).
//
// Läuft NUR für eingeloggte Nutzer (der Client ruft diese Funktion
// gar nicht erst auf, wenn niemand angemeldet ist). Der Gemini-Key
// liegt ausschließlich hier als Secret, nie im Browser-Code.
//
// Schlägt IRGENDETWAS fehl (kein Netz zu Gemini, Tageslimit erreicht,
// unerwartete Antwortform) wird IMMER ein gültiges JSON mit
// ok:false zurückgegeben. Der Client fällt dann automatisch auf
// das lokale, regelbasierte Ergebnis zurück — die Korrektur blockiert
// nie den Unterricht.
//
// Benötigte Supabase-Secrets (siehe EINRICHTUNG.md):
//   GEMINI_API_KEY     – Key aus Google AI Studio (kostenloses Kontingent)
//   GEMINI_MODEL        – optional, Default s.u. Modellnamen ändern sich,
//                          bei Bedarf in Google AI Studio den aktuell
//                          empfohlenen kostenlosen Flash-Modellnamen prüfen.
// Automatisch vorhanden (von Supabase selbst gesetzt, nichts zu tun):
//   SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
// ============================================================

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const GEMINI_MODEL = Deno.env.get("GEMINI_MODEL") || "gemini-3.6-flash";
const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY") || "";
const TAGES_LIMIT = 12; // Korrekturen pro Nutzer und Tag über Gemini — schützt das Gratis-Kontingent

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

// Wenn irgendwas schiefgeht: dem Client IMMER das mitgeschickte lokale
// Ergebnis zurückgeben, damit die Seite trotzdem etwas Sinnvolles zeigt.
function fallback(lokalesErgebnis: unknown, grund: string) {
  return json({ ok: false, grund, ergebnis: lokalesErgebnis });
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

  const { text, niveau, testKey, aufgabeNr, befund, lokalesErgebnis } = payload || {};
  if (!text || !befund || !lokalesErgebnis) {
    return json({ ok: false, grund: "unvollstaendige-anfrage" }, 400);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  // Identität aus dem mitgeschickten Nutzer-Token prüfen (nicht vertrauensvoll
  // aus dem Body übernehmen — der Client könnte dort alles reinschreiben).
  const authHeader = req.headers.get("Authorization") || "";
  const userClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } }
  });
  const { data: userData, error: userErr } = await userClient.auth.getUser();
  if (userErr || !userData || !userData.user) {
    // Kein gültiger Login -> keine Gemini-Nutzung, nur lokales Ergebnis durchreichen.
    return fallback(lokalesErgebnis, "nicht-angemeldet");
  }
  const userId = userData.user.id;

  // Ab hier mit Service-Role arbeiten (umgeht RLS bewusst, s. Tabellen-Policies).
  const admin = createClient(supabaseUrl, serviceKey);

  // ---------- Tageslimit prüfen & hochzählen ----------
  const heute = new Date().toISOString().slice(0, 10);
  const { data: nutzung } = await admin
    .from("korrektur_nutzung")
    .select("anzahl")
    .eq("user_id", userId)
    .eq("tag", heute)
    .maybeSingle();

  const bisherigeAnzahl = (nutzung && nutzung.anzahl) || 0;
  if (bisherigeAnzahl >= TAGES_LIMIT) {
    return fallback(lokalesErgebnis, "tageslimit-erreicht");
  }

  if (!GEMINI_API_KEY) {
    return fallback(lokalesErgebnis, "gemini-nicht-konfiguriert");
  }

  // ---------- Gemini aufrufen ----------
  let ergebnis: any = null;
  try {
    ergebnis = await gemini(text, niveau, befund, lokalesErgebnis);
  } catch (_err) {
    return fallback(lokalesErgebnis, "gemini-fehler");
  }
  if (!ergebnis) return fallback(lokalesErgebnis, "gemini-leere-antwort");

  ergebnis.quelle = "gemini";

  // ---------- Zähler hochsetzen (best effort) ----------
  await admin
    .from("korrektur_nutzung")
    .upsert({ user_id: userId, tag: heute, anzahl: bisherigeAnzahl + 1 }, { onConflict: "user_id,tag" });

  // ---------- Ergebnis speichern (best effort, blockiert Antwort nicht) ----------
  const wortzahl = (text.trim().match(/\S+/g) || []).length;
  await admin.from("schreiben_korrektur").insert({
    user_id: userId,
    test_key: testKey || null,
    niveau: niveau || null,
    aufgabe_nr: aufgabeNr || null,
    text,
    wortzahl,
    quelle: "gemini",
    ergebnis,
    gesamtprozent: ergebnis.gesamtprozent ?? null
  });

  await admin.from("lernfortschritt_eintrag").insert({
    user_id: userId,
    test_key: testKey || null,
    niveau: niveau || null,
    staerken: [ergebnis.lob].filter(Boolean),
    fehler_schwerpunkte: (ergebnis.fehlergruppen || []).map((f: any) => f.typ).slice(0, 3),
    naechstes_ziel: ergebnis.lernsatz || null,
    quelle: "schreiben-korrektur"
  });

  return json({ ok: true, ergebnis });
});

// ------------------------------------------------------------
// Gemini-Aufruf: bekommt die Rohbefunde der 3 Module + den Text,
// gibt strukturiertes JSON im gleichen Format wie das lokale
// Bündel zurück (siehe buendeleLokal in modelltest-korrektur.js),
// aber mit echtem, natürlich formuliertem Text statt Textbausteinen.
// ------------------------------------------------------------
async function gemini(text: string, niveau: string, befund: any, lokalesErgebnis: any) {
  const system = `Du bist ein Team aus drei erfahrenen DaF-Lehrern an einer Deutschschule auf den Philippinen (FLOß):
1. Lehrer für Grammatik & Rechtschreibung
2. Lehrer für Wortschatz & Ausdruck
3. Lehrer für Aufgabenerfüllung & Struktur

Euch liegen bereits die technischen Befunde der drei Bereiche vor (unten als JSON). Eure Aufgabe: bündelt sie zu EINEM gemeinsamen, persönlichen Feedback für den Schüler.

Stil-Regeln (verbindlich):
- Auf Deutsch, wie eine kurze persönliche Nachricht — keine Überschriften, kein formeller Ton, keine KI-Floskeln wie "Lernziel" oder "Zusammenfassend".
- Aufbau: (1) ein Satz konkretes Lob mit Bezug auf den Text, (2) Fehler nach Typ gruppiert, so kurz wie möglich, mit 1-3 konkreten Beispielen aus dem Text, (3) EIN Satz, der den wichtigsten nächsten Lernpunkt benennt, (4) ein echter, aufbauender Schlusssatz mit Bezug auf etwas Konkretes aus dem Text.
- Sei ehrlich, nicht schönredend — aber wohlwollend, der Schüler lernt gerade erst Deutsch.
- Nutze die technischen Befunde als Faktenbasis, erfinde keine Fehler, die dort nicht auftauchen.
- Niveau des Schülers: ${niveau || "unbekannt"}. Erwarte keine Muttersprachler-Qualität.`;

  const userContent = `TEXT DES SCHÜLERS:\n${text}\n\nTECHNISCHE BEFUNDE (JSON):\n${JSON.stringify(befund)}\n\nLOKAL VORBERECHNETE KRITERIEN-PUNKTE (0-100, als Ausgangspunkt, du darfst sie geringfügig anpassen wenn die Befunde das stützen):\n${JSON.stringify(lokalesErgebnis.kriterien)}`;

  const schema = {
    type: "OBJECT",
    properties: {
      lob: { type: "STRING" },
      fehlergruppen: {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: {
            typ: { type: "STRING" },
            beispiele: { type: "ARRAY", items: { type: "STRING" } }
          },
          required: ["typ", "beispiele"]
        }
      },
      lernsatz: { type: "STRING" },
      schlusssatz: { type: "STRING" },
      kriterien: {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: { name: { type: "STRING" }, punkte: { type: "NUMBER" } },
          required: ["name", "punkte"]
        }
      },
      gesamtprozent: { type: "NUMBER" }
    },
    required: ["lob", "fehlergruppen", "lernsatz", "schlusssatz", "kriterien", "gesamtprozent"]
  };

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
        contents: [{ role: "user", parts: [{ text: userContent }] }],
        generationConfig: {
          temperature: 0.6,
          responseMimeType: "application/json",
          responseSchema: schema
        }
      })
    });
  } finally {
    clearTimeout(timer);
  }

  if (!res.ok) throw new Error("gemini-http-" + res.status);
  const data = await res.json();
  const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!raw) throw new Error("gemini-keine-antwort");

  const parsed = JSON.parse(raw);
  // Grobe Plausibilitätsprüfung statt blindem Vertrauen in die KI-Ausgabe.
  if (!parsed.lob || !Array.isArray(parsed.fehlergruppen) || !Array.isArray(parsed.kriterien)) {
    throw new Error("gemini-unerwartete-form");
  }
  return parsed;
}

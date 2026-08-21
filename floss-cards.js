/* ============================================================
   FLOß — Karteikarten mit verteilter Wiederholung (SM-2)
   ------------------------------------------------------------
   Die Karten werden aus window.VERBS erzeugt. Gespeichert wird
   nur der Lernzustand (Intervall, Leichtigkeit, Fälligkeit),
   nicht der Karteninhalt — so lässt sich die Verbdatenbank
   jederzeit erweitern, ohne die Datenbank anzufassen.

   Ohne Login läuft alles über localStorage.
   ============================================================ */
(function () {
  "use strict";

  var K = window.FLOSS_CARDS = {};
  var LS = "floss.karten";

  /* ---------- Karten erzeugen ---------- */
  var TYPEN = {
    bedeutung: { titel: "Bedeutung",  frage: function (v) { return v.v; },
                 antwort: function (v) { return v.en; } },
    ruecksatz: { titel: "Rückwärts",  frage: function (v) { return v.en; },
                 antwort: function (v) { return v.v; } },
    perfekt:   { titel: "Perfekt",    frage: function (v) { return v.v; },
                 antwort: function (v) { return (v.aux || "hat") + " " + (v.pp || "—"); } },
    praet:     { titel: "Präteritum", frage: function (v) { return v.v; },
                 antwort: function (v) {
                   if (v.f && v.f.pt) return "er " + v.f.pt[2];
                   if (v.prt) return "er " + v.prt;
                   if (v.w) return "er " + v.v.replace(/en$/, "") + "te";
                   return "—"; } }
  };

  function alleKarten(typen) {
    var V = window.VERBS || [];
    var out = [];
    V.forEach(function (v) {
      if (!v || !v.v) return;
      typen.forEach(function (t) {
        var def = TYPEN[t]; if (!def) return;
        var a = def.antwort(v);
        if (!a || a === "—" || a.indexOf("—") >= 0) return;
        out.push({
          key: "verb:" + v.v + ":" + t,
          typ: t, typTitel: def.titel,
          frage: def.frage(v), antwort: a,
          verb: v.v, extra: v.en
        });
      });
    });
    return out;
  }

  /* ---------- Zustand laden ---------- */
  function lokalLesen() {
    try { return JSON.parse(localStorage.getItem(LS) || "{}"); } catch (e) { return {}; }
  }
  function lokalSchreiben(o) {
    try { localStorage.setItem(LS, JSON.stringify(o)); } catch (e) {}
  }

  function zustandLaden() {
    var F = window.FLOSS;
    if (!F || !F.db || !F.user) return Promise.resolve(lokalLesen());
    return F.db.from("karteikarten")
      .select("karte_key,faellig_am,intervall,wiederholung,leichtigkeit")
      .eq("user_id", F.user.id)
      .then(function (r) {
        var m = {};
        (r.data || []).forEach(function (x) { m[x.karte_key] = x; });
        return m;
      }).catch(function () { return lokalLesen(); });
  }

  /* ---------- SM-2 lokal (Gastmodus) ---------- */
  function lokalBewerten(key, note) {
    var alle = lokalLesen();
    var s = alle[key] || { intervall: 0, wiederholung: 0, leichtigkeit: 2.5 };
    if (note < 3) { s.wiederholung = 0; s.intervall = 1; }
    else {
      s.wiederholung += 1;
      if (s.wiederholung === 1) s.intervall = 1;
      else if (s.wiederholung === 2) s.intervall = 6;
      else s.intervall = Math.max(1, Math.round(s.intervall * s.leichtigkeit));
      s.leichtigkeit = Math.max(1.3,
        s.leichtigkeit + (0.1 - (5 - note) * (0.08 + (5 - note) * 0.02)));
    }
    var d = new Date(); d.setDate(d.getDate() + s.intervall);
    s.faellig_am = d.toISOString().slice(0, 10);
    alle[key] = s;
    lokalSchreiben(alle);
  }

  K.bewerten = function (key, niveau, note) {
    var F = window.FLOSS;
    if (!F || !F.db || !F.user) { lokalBewerten(key, note); return Promise.resolve(); }
    return F.db.rpc("karte_bewerten", {
      p_karte_key: key, p_niveau: niveau || null, p_note: note
    }).then(function (r) {
      if (r.error) throw r.error;
    }).catch(function () { lokalBewerten(key, note); });
  };

  /* ---------- Warteschlange bauen ---------- */
  K.stapelBauen = function (typen, maxNeu, maxWdh) {
    return zustandLaden().then(function (zustand) {
      var heute = new Date().toISOString().slice(0, 10);
      var karten = alleKarten(typen);
      var faellig = [], neu = [];

      karten.forEach(function (c) {
        var z = zustand[c.key];
        if (!z) { neu.push(c); return; }
        if (String(z.faellig_am).slice(0, 10) <= heute) { c.z = z; faellig.push(c); }
      });

      // Fällige zuerst, dann neue Karten auffüllen
      faellig.sort(function (a, b) {
        return String(a.z.faellig_am).localeCompare(String(b.z.faellig_am));
      });
      var stapel = faellig.slice(0, maxWdh || 60);
      var rest = (maxNeu || 15);
      // Neue Karten in Datenbankreihenfolge (häufigste Verben zuerst)
      stapel = stapel.concat(neu.slice(0, rest));

      return {
        stapel: stapel,
        offenFaellig: faellig.length,
        offenNeu: neu.length,
        gesamt: karten.length,
        gelernt: karten.length - neu.length
      };
    });
  };

  K.TYPEN = TYPEN;
})();

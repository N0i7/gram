/* ============================================================
   FLOß — Anmeldung, Registrierung, Profil
   ------------------------------------------------------------
   Stellt window.FLOSS bereit:
     FLOSS.user      – der angemeldete Nutzer oder null
     FLOSS.profil    – Profildaten oder null
     FLOSS.db        – Supabase-Client
     FLOSS.bereit    – Promise, erfüllt sobald der Status feststeht
     FLOSS.onLogin(fn) / FLOSS.onLogout(fn)

   Rechtlicher Hinweis zur Einwilligung:
   Nach NPC Circular 2023-04 muss die Einwilligung getrennt nach
   Zweck eingeholt werden und der Widerruf muss mindestens so
   einfach sein wie die Erteilung. Deshalb gibt es hier zwei
   getrennte Kästchen und im Profil einen Löschknopf.
   ============================================================ */
(function () {
  "use strict";

  var CFG = window.FLOSS_CONFIG || {};

  /* Diese beiden Zuweisungen müssen VOR dem frühen return unten stehen.
     Ein return in einer Funktion überspringt sonst die Zuweisung, während
     die Funktionsdeklarationen darunter durch Hoisting trotzdem aufrufbar
     bleiben — die Oberfläche zeigte dann "undefined". */
  var LINKS =
    '<a href="agb.html" target="_blank">Nutzungsbedingungen</a> und ' +
    '<a href="datenschutz.html" target="_blank">Datenschutzhinweise</a>';
  var dlg = null;

  var FLOSS = window.FLOSS = {
    user: null,
    profil: null,
    db: null,
    bereit: null,
    _loginCbs: [],
    _logoutCbs: [],
    onLogin:  function (fn) { FLOSS._loginCbs.push(fn);  if (FLOSS.user) fn(FLOSS.user); },
    onLogout: function (fn) { FLOSS._logoutCbs.push(fn); }
  };

  /* ---------- Konfiguration prüfen ---------- */
  var konfiguriert = CFG.SUPABASE_URL &&
                     CFG.SUPABASE_URL.indexOf("HIER_") !== 0 &&
                     CFG.SUPABASE_ANON_KEY &&
                     CFG.SUPABASE_ANON_KEY.indexOf("HIER_") !== 0;

  if (konfiguriert && (!window.supabase || !window.supabase.createClient)) {
    // Kann passieren, wenn das CDN nicht erreichbar ist — schlechtes Netz,
    // Firewall, gesperrte Domain. Dann läuft die Seite im Gastmodus weiter,
    // statt mit einem toten Anmeldeknopf dazustehen.
    console.warn("[FLOß] Supabase-Bibliothek nicht geladen. Gastmodus aktiv, " +
                 "der Fortschritt bleibt nur in diesem Browser.");
    konfiguriert = false;
  }

  if (!konfiguriert) {
    console.warn("[FLOß] Kein Backend aktiv. Die Seite funktioniert vollständig, " +
                 "der Fortschritt wird nur lokal gespeichert.");
    FLOSS.bereit = Promise.resolve(null);
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", leisteBauen);
    else leisteBauen();
    return;
  }

  FLOSS.db = window.supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });

  /* ---------- Startzustand ermitteln ---------- */
  FLOSS.bereit = FLOSS.db.auth.getSession().then(function (res) {
    var s = res && res.data && res.data.session;
    if (s && s.user) { FLOSS.user = s.user; return profilLaden(); }
    return null;
  }).then(function () {
    leisteBauen();
    if (FLOSS.user) FLOSS._loginCbs.forEach(function (fn) { fn(FLOSS.user); });
    return FLOSS.user;
  }).catch(function (e) {
    console.error("[FLOß] Startfehler:", e);
    leisteBauen();
    return null;
  });

  FLOSS.db.auth.onAuthStateChange(function (event, session) {
    if (event === "SIGNED_IN" && session && session.user) {
      if (FLOSS.user && FLOSS.user.id === session.user.id) return;
      FLOSS.user = session.user;
      profilLaden().then(function () {
        leisteAktualisieren();
        FLOSS._loginCbs.forEach(function (fn) { fn(FLOSS.user); });
      });
    }
    if (event === "SIGNED_OUT") {
      FLOSS.user = null; FLOSS.profil = null;
      leisteAktualisieren();
      FLOSS._logoutCbs.forEach(function (fn) { fn(); });
    }
  });

  function profilLaden() {
    if (!FLOSS.user) return Promise.resolve(null);
    return FLOSS.db.from("profiles").select("*").eq("id", FLOSS.user.id).maybeSingle()
      .then(function (r) { FLOSS.profil = r.data || null; return FLOSS.profil; })
      .catch(function () { return null; });
  }

  /* ============================================================
     ÖFFENTLICHE FUNKTIONEN
     ============================================================ */

  FLOSS.registrieren = function (daten) {
    // daten: {email, passwort, vorname, nachname, einwilligung, newsletter, volljaehrig}
    if (!daten.einwilligung) {
      return Promise.reject(new Error(
        "Ohne Einwilligung in die Datenverarbeitung können wir keinen Zugang anlegen."));
    }
    if (!daten.volljaehrig) {
      return Promise.reject(new Error(
        "Für Lernende unter 18 Jahren braucht es die Zustimmung eines Erziehungsberechtigten. " +
        "Bitte schreib uns eine E-Mail."));
    }
    return FLOSS.db.auth.signUp({
      email: String(daten.email || "").trim().toLowerCase(),
      password: daten.passwort,
      options: {
        data: {
          vorname:      (daten.vorname || "").trim(),
          nachname:     (daten.nachname || "").trim(),
          einwilligung: "true",
          newsletter:   daten.newsletter ? "true" : "false",
          agb_stand:    (CFG.RECHT && CFG.RECHT.agb_stand) || ""
        }
      }
    }).then(function (r) {
      if (r.error) throw r.error;
      return r.data;
    });
  };

  FLOSS.anmelden = function (email, passwort) {
    return FLOSS.db.auth.signInWithPassword({
      email: String(email || "").trim().toLowerCase(),
      password: passwort
    }).then(function (r) { if (r.error) throw r.error; return r.data; });
  };

  FLOSS.abmelden = function () {
    return FLOSS.db.auth.signOut();
  };

  FLOSS.passwortVergessen = function (email) {
    var ziel = location.origin + location.pathname.replace(/[^/]*$/, "") + "passwort-neu.html";
    return FLOSS.db.auth.resetPasswordForEmail(
      String(email || "").trim().toLowerCase(), { redirectTo: ziel }
    ).then(function (r) { if (r.error) throw r.error; return r.data; });
  };

  FLOSS.passwortSetzen = function (neu) {
    return FLOSS.db.auth.updateUser({ password: neu })
      .then(function (r) { if (r.error) throw r.error; return r.data; });
  };

  /* --- Recht auf Datenauskunft (RA 10173 Sec. 16c) --- */
  FLOSS.datenExportieren = function () {
    if (!FLOSS.user) return Promise.reject(new Error("Nicht angemeldet."));
    var d = FLOSS.db, uid = FLOSS.user.id;
    return Promise.all([
      d.from("profiles").select("*").eq("id", uid),
      d.from("uebung_fortschritt").select("*").eq("user_id", uid),
      d.from("karteikarten").select("*").eq("user_id", uid),
      d.from("test_durchlauf").select("*").eq("user_id", uid),
      d.from("lern_tag").select("*").eq("user_id", uid)
    ]).then(function (r) {
      var paket = {
        exportiert_am: new Date().toISOString(),
        hinweis: "Vollständige Kopie deiner bei FLOß gespeicherten Daten (RA 10173).",
        konto:        { email: FLOSS.user.email, angelegt: FLOSS.user.created_at },
        profil:       r[0].data,
        fortschritt:  r[1].data,
        karteikarten: r[2].data,
        tests:        r[3].data,
        lerntage:     r[4].data
      };
      var blob = new Blob([JSON.stringify(paket, null, 2)], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "floss-meine-daten-" + new Date().toISOString().slice(0, 10) + ".json";
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 5000);
      return paket;
    });
  };

  /* --- Recht auf Löschung / Widerruf der Einwilligung ---
     Löscht alle Lerndaten sofort. Das Konto selbst kann aus
     Sicherheitsgründen nur serverseitig entfernt werden, deshalb
     wird zusätzlich eine Löschanfrage an die Schule ausgelöst. */
  FLOSS.datenLoeschen = function () {
    if (!FLOSS.user) return Promise.reject(new Error("Nicht angemeldet."));
    var d = FLOSS.db, uid = FLOSS.user.id;
    return Promise.all([
      d.from("uebung_fortschritt").delete().eq("user_id", uid),
      d.from("karteikarten").delete().eq("user_id", uid),
      d.from("test_durchlauf").delete().eq("user_id", uid),
      d.from("lern_tag").delete().eq("user_id", uid),
      d.from("profiles").delete().eq("id", uid)
    ]).then(function () {
      try { localStorage.removeItem("floss.fortschritt"); } catch (e) {}
      return FLOSS.db.auth.signOut();
    });
  };

  /* ============================================================
     OBERFLÄCHE
     ============================================================ */

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function leisteBauen() {
    // Ohne ausgefüllte Konfiguration gibt es nichts anzumelden.
    // Dann lieber gar keinen Knopf zeigen als einen, der ins Leere führt.
    if (!konfiguriert) return;
    if (document.getElementById("floss-userbar")) return;
    var nav = document.querySelector(".nav-inner");
    if (!nav) return;
    var box = el("div", "floss-userbar");
    box.id = "floss-userbar";
    nav.appendChild(box);
    leisteAktualisieren();
  }

  function leisteAktualisieren() {
    var box = document.getElementById("floss-userbar");
    if (!box) return;
    if (FLOSS.user) {
      var name = (FLOSS.profil && FLOSS.profil.vorname) ||
                 (FLOSS.user.email || "").split("@")[0];
      box.innerHTML =
        '<button class="floss-avatar" id="floss-menu-btn" title="Mein Konto">' +
          esc(name.charAt(0).toUpperCase()) +
        '</button>';
      document.getElementById("floss-menu-btn").onclick = kontoOeffnen;
    } else {
      box.innerHTML = '<button class="floss-loginbtn" id="floss-login-btn">Anmelden</button>';
      document.getElementById("floss-login-btn").onclick = function () { dialogOeffnen("login"); };
    }
  }

  /* ---------- Dialog ---------- */
  function dialogSchliessen() {
    if (dlg) { dlg.remove(); dlg = null; }
    document.body.style.overflow = "";
  }

  function dialogOeffnen(modus) {
    dialogSchliessen();
    dlg = el("div", "floss-overlay");
    dlg.innerHTML = '<div class="floss-modal" role="dialog" aria-modal="true">' +
                    '<button class="floss-x" aria-label="Schließen">&times;</button>' +
                    '<div id="floss-modal-inhalt"></div></div>';
    document.body.appendChild(dlg);
    document.body.style.overflow = "hidden";
    dlg.querySelector(".floss-x").onclick = dialogSchliessen;
    dlg.onclick = function (e) { if (e.target === dlg) dialogSchliessen(); };
    document.addEventListener("keydown", escHandler);
    zeige(modus);
  }
  function escHandler(e) {
    if (e.key === "Escape") { dialogSchliessen(); document.removeEventListener("keydown", escHandler); }
  }

  function inhalt() { return document.getElementById("floss-modal-inhalt"); }

  function meldung(text, art) {
    var m = dlg && dlg.querySelector(".floss-msg");
    if (!m) return;
    m.className = "floss-msg " + (art || "info");
    m.innerHTML = text;
    m.style.display = "block";
  }

  function fehlertext(e) {
    var m = (e && e.message) || String(e);
    if (/Invalid login credentials/i.test(m))
      return "E-Mail oder Passwort stimmt nicht.";
    if (/Email not confirmed/i.test(m))
      return "Bitte bestätige zuerst den Link in deiner E-Mail.";
    if (/User already registered|already been registered/i.test(m))
      return "Für diese E-Mail gibt es schon einen Zugang. Melde dich an oder setze dein Passwort zurück.";
    if (/Password should be at least/i.test(m))
      return "Das Passwort braucht mindestens 6 Zeichen.";
    if (/rate limit|too many/i.test(m))
      return "Zu viele Versuche. Bitte warte ein paar Minuten.";
    return m;
  }

  function zeige(modus) {
    var c = inhalt();
    if (!c) return;

    if (modus === "login") {
      c.innerHTML =
        '<h2>Anmelden</h2>' +
        '<p class="floss-sub">Damit dein Lernfortschritt gespeichert bleibt.<br>' +
        '<span class="en">Sign in so your progress is saved.</span></p>' +
        '<div class="floss-msg"></div>' +
        '<label>E-Mail<input type="email" id="f-mail" autocomplete="email" autocapitalize="off"></label>' +
        '<label>Passwort<input type="password" id="f-pw" autocomplete="current-password"></label>' +
        '<button class="floss-primary" id="f-go">Anmelden</button>' +
        '<div class="floss-alt">' +
          '<a href="#" id="f-zu-reg">Neu hier? Zugang anlegen</a>' +
          '<a href="#" id="f-vergessen">Passwort vergessen</a>' +
        '</div>';

      var go = function () {
        var mail = c.querySelector("#f-mail").value;
        var pw   = c.querySelector("#f-pw").value;
        if (!mail || !pw) return meldung("Bitte beide Felder ausfüllen.", "bad");
        c.querySelector("#f-go").disabled = true;
        meldung("Einen Moment…", "info");
        FLOSS.anmelden(mail, pw).then(function () {
          dialogSchliessen();
        }).catch(function (e) {
          c.querySelector("#f-go").disabled = false;
          meldung(fehlertext(e), "bad");
        });
      };
      c.querySelector("#f-go").onclick = go;
      c.querySelector("#f-pw").onkeydown = function (e) { if (e.key === "Enter") go(); };
      c.querySelector("#f-zu-reg").onclick    = function (e) { e.preventDefault(); zeige("register"); };
      c.querySelector("#f-vergessen").onclick = function (e) { e.preventDefault(); zeige("reset"); };
      setTimeout(function () { c.querySelector("#f-mail").focus(); }, 50);
      return;
    }

    if (modus === "register") {
      c.innerHTML =
        '<h2>Zugang anlegen</h2>' +
        '<p class="floss-sub">Kostenlos. Dein Fortschritt wird gespeichert.<br>' +
        '<span class="en">Free. Your progress will be saved.</span></p>' +
        '<div class="floss-msg"></div>' +
        '<div class="floss-row">' +
          '<label>Vorname<input type="text" id="r-vn" autocomplete="given-name"></label>' +
          '<label>Nachname<input type="text" id="r-nn" autocomplete="family-name"></label>' +
        '</div>' +
        '<label>E-Mail<input type="email" id="r-mail" autocomplete="email" autocapitalize="off"></label>' +
        '<label>Passwort <span class="hint">mindestens 6 Zeichen</span>' +
          '<input type="password" id="r-pw" autocomplete="new-password"></label>' +

        '<div class="floss-consent">' +
          '<label class="cb"><input type="checkbox" id="r-alter">' +
            '<span>Ich bin mindestens 18 Jahre alt.' +
            '<span class="en">I am at least 18 years old.</span></span></label>' +

          '<label class="cb"><input type="checkbox" id="r-ok">' +
            '<span>Ich stimme zu, dass FLOß meinen Namen, meine E-Mail-Adresse und ' +
            'meinen Lernfortschritt speichert, um mir diesen Kurs bereitzustellen. ' +
            'Ich habe die ' + LINKS + ' gelesen.' +
            '<span class="en">I agree that FLOß stores my name, email and learning ' +
            'progress in order to provide this course.</span></span></label>' +

          '<label class="cb"><input type="checkbox" id="r-news">' +
            '<span>Zusätzlich, freiwillig: FLOß darf mir E-Mails über Kurse und ' +
            'Prüfungstermine schicken. Jederzeit abbestellbar.' +
            '<span class="en">Optional: FLOß may email me about courses and exam dates.</span>' +
            '</span></label>' +
        '</div>' +

        '<button class="floss-primary" id="r-go">Zugang anlegen</button>' +
        '<div class="floss-alt"><a href="#" id="r-zu-login">Ich habe schon einen Zugang</a></div>';

      c.querySelector("#r-go").onclick = function () {
        var d = {
          vorname:      c.querySelector("#r-vn").value,
          nachname:     c.querySelector("#r-nn").value,
          email:        c.querySelector("#r-mail").value,
          passwort:     c.querySelector("#r-pw").value,
          volljaehrig:  c.querySelector("#r-alter").checked,
          einwilligung: c.querySelector("#r-ok").checked,
          newsletter:   c.querySelector("#r-news").checked
        };
        if (!d.vorname)  return meldung("Bitte trag deinen Vornamen ein.", "bad");
        if (!d.email)    return meldung("Bitte trag deine E-Mail-Adresse ein.", "bad");
        if (!d.passwort || d.passwort.length < 6)
          return meldung("Das Passwort braucht mindestens 6 Zeichen.", "bad");
        if (!d.volljaehrig)
          return meldung("Bitte bestätige dein Alter. Unter 18 brauchen wir die " +
                         "Zustimmung deiner Eltern — schreib uns dafür eine E-Mail.", "bad");
        if (!d.einwilligung)
          return meldung("Ohne die Einwilligung zur Datenspeicherung können wir " +
                         "keinen Zugang anlegen.", "bad");

        c.querySelector("#r-go").disabled = true;
        meldung("Einen Moment…", "info");
        FLOSS.registrieren(d).then(function (res) {
          if (res && res.session) { dialogSchliessen(); return; }
          c.innerHTML =
            '<h2>Fast fertig</h2>' +
            '<p class="floss-sub">Wir haben dir eine E-Mail geschickt. ' +
            'Klick auf den Link darin, dann kannst du dich anmelden.<br>' +
            '<span class="en">Check your inbox and click the confirmation link.</span></p>' +
            '<p class="floss-sub" style="font-size:13px">Nichts angekommen? Schau im Spam-Ordner nach.</p>' +
            '<button class="floss-primary" id="r-fertig">Alles klar</button>';
          c.querySelector("#r-fertig").onclick = dialogSchliessen;
        }).catch(function (e) {
          c.querySelector("#r-go").disabled = false;
          meldung(fehlertext(e), "bad");
        });
      };
      c.querySelector("#r-zu-login").onclick = function (e) { e.preventDefault(); zeige("login"); };
      return;
    }

    if (modus === "reset") {
      c.innerHTML =
        '<h2>Passwort zurücksetzen</h2>' +
        '<p class="floss-sub">Wir schicken dir einen Link zum Neusetzen.</p>' +
        '<div class="floss-msg"></div>' +
        '<label>E-Mail<input type="email" id="p-mail" autocomplete="email" autocapitalize="off"></label>' +
        '<button class="floss-primary" id="p-go">Link schicken</button>' +
        '<div class="floss-alt"><a href="#" id="p-zurueck">Zurück zur Anmeldung</a></div>';
      c.querySelector("#p-go").onclick = function () {
        var mail = c.querySelector("#p-mail").value;
        if (!mail) return meldung("Bitte trag deine E-Mail-Adresse ein.", "bad");
        c.querySelector("#p-go").disabled = true;
        FLOSS.passwortVergessen(mail).then(function () {
          meldung("Erledigt. Schau in dein Postfach.", "good");
        }).catch(function (e) {
          c.querySelector("#p-go").disabled = false;
          meldung(fehlertext(e), "bad");
        });
      };
      c.querySelector("#p-zurueck").onclick = function (e) { e.preventDefault(); zeige("login"); };
      return;
    }
  }

  /* ---------- Kontobereich ---------- */
  function kontoOeffnen() {
    dialogOeffnen("konto");
    var c = inhalt();
    var p = FLOSS.profil || {};
    var name = [p.vorname, p.nachname].filter(Boolean).join(" ") || FLOSS.user.email;

    c.innerHTML =
      '<h2>Mein Konto</h2>' +
      '<p class="floss-sub">' + esc(name) + '<br>' +
      '<span class="en">' + esc(FLOSS.user.email) + '</span></p>' +
      '<div class="floss-msg"></div>' +
      '<div id="floss-stat" class="floss-stat">Fortschritt wird geladen…</div>' +
      '<div class="floss-konto-aktionen">' +
        '<button class="floss-ghost" id="k-export">Meine Daten herunterladen</button>' +
        '<button class="floss-ghost" id="k-abmelden">Abmelden</button>' +
        '<button class="floss-danger" id="k-loeschen">Konto und Daten löschen</button>' +
      '</div>' +
      '<p class="floss-rechtsfuss">' +
        'Du kannst deine Einwilligung jederzeit widerrufen. ' +
        'Mehr dazu in den <a href="datenschutz.html" target="_blank">Datenschutzhinweisen</a>.' +
      '</p>';

    c.querySelector("#k-abmelden").onclick = function () {
      FLOSS.abmelden().then(function () { dialogSchliessen(); location.reload(); });
    };
    c.querySelector("#k-export").onclick = function () {
      meldung("Wird vorbereitet…", "info");
      FLOSS.datenExportieren()
        .then(function () { meldung("Heruntergeladen.", "good"); })
        .catch(function (e) { meldung(fehlertext(e), "bad"); });
    };
    c.querySelector("#k-loeschen").onclick = function () { loeschenBestaetigen(c); };

    statistikLaden();
  }

  function loeschenBestaetigen(c) {
    c.innerHTML =
      '<h2>Wirklich alles löschen?</h2>' +
      '<p class="floss-sub">Dein gesamter Lernfortschritt, deine Karteikarten und ' +
      'deine Testergebnisse werden sofort und endgültig gelöscht. ' +
      'Das lässt sich nicht rückgängig machen.<br>' +
      '<span class="en">This cannot be undone.</span></p>' +
      '<div class="floss-msg"></div>' +
      '<p class="floss-sub" style="font-size:13px">' +
      'Tipp: Lade dir vorher deine Daten herunter.</p>' +
      '<label>Tippe <b>LÖSCHEN</b> zur Bestätigung' +
        '<input type="text" id="k-bestaetigung" autocapitalize="characters"></label>' +
      '<button class="floss-danger" id="k-weg">Endgültig löschen</button>' +
      '<div class="floss-alt"><a href="#" id="k-abbruch">Abbrechen</a></div>';

    c.querySelector("#k-abbruch").onclick = function (e) { e.preventDefault(); kontoOeffnen(); };
    c.querySelector("#k-weg").onclick = function () {
      var v = (c.querySelector("#k-bestaetigung").value || "").trim().toUpperCase();
      if (v !== "LÖSCHEN" && v !== "LOESCHEN")
        return meldung('Bitte tippe genau <b>LÖSCHEN</b>.', "bad");
      c.querySelector("#k-weg").disabled = true;
      meldung("Wird gelöscht…", "info");
      FLOSS.datenLoeschen().then(function () {
        c.innerHTML =
          '<h2>Gelöscht</h2>' +
          '<p class="floss-sub">Deine Lerndaten sind entfernt und du bist abgemeldet.<br>' +
          'Damit auch dein Zugang selbst vollständig aus dem System verschwindet, ' +
          'schreib uns bitte kurz an <a href="mailto:' + esc(CFG.SCHULE.email) + '">' +
          esc(CFG.SCHULE.email) + '</a> — wir erledigen das innerhalb von 30 Tagen.</p>' +
          '<button class="floss-primary" id="k-ende">Schließen</button>';
        c.querySelector("#k-ende").onclick = function () { dialogSchliessen(); location.reload(); };
      }).catch(function (e) {
        c.querySelector("#k-weg").disabled = false;
        meldung(fehlertext(e), "bad");
      });
    };
  }

  function statistikLaden() {
    var box = document.getElementById("floss-stat");
    if (!box || !FLOSS.db || !FLOSS.user) return;
    Promise.all([
      FLOSS.db.from("uebung_fortschritt")
        .select("niveau,richtig", { count: "exact" }).eq("user_id", FLOSS.user.id),
      FLOSS.db.rpc("mein_streak"),
      FLOSS.db.from("karteikarten")
        .select("id", { count: "exact", head: true })
        .eq("user_id", FLOSS.user.id).lte("faellig_am", new Date().toISOString().slice(0, 10))
    ]).then(function (r) {
      var rows = (r[0] && r[0].data) || [];
      var ges = rows.length;
      var ric = rows.filter(function (x) { return x.richtig; }).length;
      var streak = (r[1] && r[1].data) || 0;
      var faellig = (r[2] && r[2].count) || 0;
      var quote = ges ? Math.round(ric / ges * 100) : 0;

      var proLevel = {};
      rows.forEach(function (x) { proLevel[x.niveau] = (proLevel[x.niveau] || 0) + 1; });
      var lvl = Object.keys(proLevel).sort().map(function (k) {
        return '<span class="floss-chip">' + k.toUpperCase() + ': ' + proLevel[k] + '</span>';
      }).join("");

      box.innerHTML =
        '<div class="floss-kacheln">' +
          '<div><b>' + ges + '</b><span>Aufgaben gelöst</span></div>' +
          '<div><b>' + quote + '%</b><span>richtig</span></div>' +
          '<div><b>' + streak + '</b><span>Tage in Folge</span></div>' +
          '<div><b>' + faellig + '</b><span>Karten fällig</span></div>' +
        '</div>' + (lvl ? '<div class="floss-chips">' + lvl + '</div>' : '');
    }).catch(function () {
      box.textContent = "Fortschritt konnte gerade nicht geladen werden.";
    });
  }

  /* Von anderen Modulen aufrufbar */
  FLOSS.loginDialog = function () { dialogOeffnen("login"); };
  FLOSS.kontoDialog = kontoOeffnen;

  document.addEventListener("DOMContentLoaded", leisteBauen);
})();

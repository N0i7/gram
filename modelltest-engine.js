/* ============================================================
   FLOß Modelltests — Engine
   ------------------------------------------------------------
   Rendert Lesen (Teil 1–3) und Sprachbausteine (Teil 1–2) aus
   window.MODELLTEST_<NIVEAU>_<NR> interaktiv, mit Sofort-Feedback
   nach genau einem Versuch pro Aufgabe (wie das bestehende engine.js
   auf den Grammatik-Seiten). Schreiben wird angezeigt und lokal
   entworfen; die Korrektur läuft über modelltest-korrektur.js
   (window.FlossKorrektur) — muss VOR dieser Datei eingebunden sein.

   Design bewusst additiv: nutzt ausschließlich vorhandene CSS-Variablen
   und die neuen, eigenständigen Klassen aus modelltest.css. Keine
   bestehende Regel aus styles.css wird verändert.
   ============================================================ */
(function(){
  "use strict";

  var p = new URLSearchParams(location.search);
  var niveau = (p.get("niveau")||"").toLowerCase();
  var nr = (p.get("nr")||"").padStart(2,"0");
  var varName = "MODELLTEST_" + niveau.toUpperCase() + "_" + nr;
  var T = window[varName];
  var root = document.getElementById("mt-root");
  var hero = document.getElementById("mt-hero");

  if(!T){
    hero.innerHTML = "<h1>Test nicht gefunden</h1>";
    root.innerHTML = "<p>Diese Testdaten konnten nicht geladen werden. Bitte über die <a href='modelltests.html'>Modelltest-Übersicht</a> neu starten.</p>";
    return;
  }

  var LVL_COLOR = {a1:"var(--a1)", a2:"var(--a2)", b1:"var(--b1)", b2:"var(--b2)"};
  document.title = T.titel + " – FLOß Grammatik";
  hero.innerHTML =
    '<span class="badge" style="background:'+(LVL_COLOR[niveau]||"var(--blue)")+'">'+T.niveau+'</span>'+
    '<h1>'+esc(T.titel)+'</h1>'+
    '<p>Lesen · Sprachbausteine · Schreiben<br><span class="en">Reading · Language elements · Writing</span></p>';

  function esc(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"); }

  /* Rendert Fließtext mit ___(n)___-Markern als hübsche Lücken-Chips (nur Anzeige, nicht interaktiv;
     die eigentliche Interaktion passiert unten je Lücke). */
  function markGaps(text){
    return esc(text).replace(/___\((\d+)\)___/g, '<span class="gap">'+"$1"+'</span>');
  }

  var PARTS = {}; // key -> {right, total, done:{}}
  function reg(key, total){ PARTS[key] = {right:0, total:total, done:{}}; return PARTS[key]; }

  var sections = [];

  /* ---------------- Lesen Teil 1 — Überschriften zuordnen ---------------- */
  (function(){
    var t1 = T.lesen && T.lesen.teil1; if(!t1) return;
    var st = reg("lesen1", t1.texte.length);
    var legend = '<div class="mt-legend"><b>Überschriften</b><ol>'+
      t1.ueberschriften.map(function(u){ return '<li>'+u.id+'. '+esc(u.text)+'</li>'; }).join("")+
      '</ol></div>';
    var items = t1.texte.map(function(txt){
      var picks = t1.ueberschriften.map(function(u){
        return '<button data-h="'+u.id+'" onclick="window._mtLesen1(\''+txt.id+'\',this)">'+u.id+'</button>';
      }).join("");
      return '<div class="mt-item" id="mt-l1-'+txt.id+'">'+
        '<div class="mt-text"><b>'+txt.id+')</b> '+esc(txt.text)+'</div>'+
        '<div class="mt-picks">'+picks+'</div>'+
        '<p class="mt-fb" id="mt-l1-fb-'+txt.id+'"></p></div>';
    }).join("");
    sections.push(part("lesen1", "Lesen — Teil 1: Überschriften zuordnen", t1.anleitung, legend+items, st));

    window._mtLesen1 = function(textId, btn){
      if(st.done[textId]!==undefined) return;
      var correctId = t1.loesung[textId];
      var group = btn.parentElement.querySelectorAll("button");
      group.forEach(function(b){ b.disabled = true; });
      var good = (+btn.dataset.h === +correctId);
      btn.classList.add(good?"ok":"err");
      if(!good){ group.forEach(function(b){ if(+b.dataset.h===+correctId) b.classList.add("ok"); }); }
      finish(st, textId, good, "mt-l1-fb-"+textId, good?"":("Richtige Überschrift: "+correctId+"."));
    };
  })();

  /* ---------------- Lesen Teil 2 — richtig/falsch ---------------- */
  (function(){
    var t2 = T.lesen && T.lesen.teil2; if(!t2) return;
    var st = reg("lesen2", t2.aussagen.length);
    var items = t2.aussagen.map(function(a){
      return '<div class="mt-item" id="mt-l2-'+a.nr+'">'+
        '<div class="mt-text">'+a.nr+'. '+esc(a.text)+'</div>'+
        '<div class="mt-picks">'+
        '<button data-v="1" onclick="window._mtLesen2('+a.nr+',this)">Richtig</button>'+
        '<button data-v="0" onclick="window._mtLesen2('+a.nr+',this)">Falsch</button>'+
        '</div><p class="mt-fb" id="mt-l2-fb-'+a.nr+'"></p></div>';
    }).join("");
    var textBlock = '<div class="mt-fliesstext">'+esc(t2.text)+'</div>';
    sections.push(part("lesen2", "Lesen — Teil 2: Richtig oder falsch", t2.anleitung, textBlock+items, st));

    window._mtLesen2 = function(nr, btn){
      if(st.done[nr]!==undefined) return;
      var a = t2.aussagen.find(function(x){ return x.nr===nr; });
      var group = btn.parentElement.querySelectorAll("button");
      group.forEach(function(b){ b.disabled = true; });
      var picked = btn.dataset.v==="1";
      var good = picked === !!a.korrekt;
      btn.classList.add(good?"ok":"err");
      if(!good){ group.forEach(function(b){ if((b.dataset.v==="1")===!!a.korrekt) b.classList.add("ok"); }); }
      finish(st, nr, good, "mt-l2-fb-"+nr, a.hinweis||"");
    };
  })();

  /* ---------------- Lesen Teil 3 — Anzeigen zuordnen ---------------- */
  (function(){
    var t3 = T.lesen && T.lesen.teil3; if(!t3) return;
    var st = reg("lesen3", t3.situationen.length);
    var anzeigen = t3.anzeigen.slice();
    var hasNoMatch = anzeigen.some(function(a){ return /keine passende/i.test(a.text); });
    if(!hasNoMatch) anzeigen.push({id:"x", text:"keine passende Anzeige"});
    var legend = '<div class="mt-legend"><b>Anzeigen</b><ol>'+
      anzeigen.map(function(a){ return '<li>'+a.id+') '+esc(a.text)+'</li>'; }).join("")+
      '</ol></div>';
    var items = t3.situationen.map(function(s){
      var picks = anzeigen.map(function(a){
        return '<button data-a="'+a.id+'" onclick="window._mtLesen3('+s.nr+',this)">'+a.id+'</button>';
      }).join("");
      return '<div class="mt-item" id="mt-l3-'+s.nr+'">'+
        '<div class="mt-text">'+s.nr+'. '+esc(s.text)+'</div>'+
        '<div class="mt-picks">'+picks+'</div>'+
        '<p class="mt-fb" id="mt-l3-fb-'+s.nr+'"></p></div>';
    }).join("");
    sections.push(part("lesen3", "Lesen — Teil 3: Anzeigen zuordnen", t3.anleitung, legend+items, st));

    window._mtLesen3 = function(nr, btn){
      if(st.done[nr]!==undefined) return;
      var correct = String(t3.loesung[nr]);
      var group = btn.parentElement.querySelectorAll("button");
      group.forEach(function(b){ b.disabled = true; });
      var good = btn.dataset.a === correct;
      btn.classList.add(good?"ok":"err");
      if(!good){ group.forEach(function(b){ if(b.dataset.a===correct) b.classList.add("ok"); }); }
      finish(st, nr, good, "mt-l3-fb-"+nr, good?"":("Richtig wäre: "+correct+"."));
    };
  })();

  /* ---------------- Sprachbausteine Teil 1 — Auswahl-Lücken ---------------- */
  (function(){
    var sb1 = T.sprachbausteine && T.sprachbausteine.teil1; if(!sb1) return;
    var st = reg("sb1", sb1.luecken.length);
    var textBlock = '<div class="mt-fliesstext">'+markGaps(sb1.text)+'</div>';
    var items = sb1.luecken.map(function(l){
      var picks = l.o.map(function(opt,j){
        return '<button data-j="'+j+'" onclick="window._mtSb1('+l.nr+',this)">'+esc(opt)+'</button>';
      }).join("");
      return '<div class="mt-luecke" id="mt-sb1-'+l.nr+'">'+
        '<div class="mt-luecke-label">Lücke '+l.nr+'</div>'+
        '<div class="mt-picks">'+picks+'</div>'+
        '<p class="mt-fb" id="mt-sb1-fb-'+l.nr+'"></p></div>';
    }).join("");
    sections.push(part("sb1", "Sprachbausteine — Teil 1: Lücken mit Auswahl", sb1.anleitung, textBlock+items, st));

    window._mtSb1 = function(nr, btn){
      if(st.done[nr]!==undefined) return;
      var l = sb1.luecken.find(function(x){ return x.nr===nr; });
      var group = btn.parentElement.querySelectorAll("button");
      group.forEach(function(b){ b.disabled = true; });
      var good = (+btn.dataset.j === l.c);
      btn.classList.add(good?"ok":"err");
      if(!good) group[l.c].classList.add("ok");
      finish(st, nr, good, "mt-sb1-fb-"+nr, l.h||"");
    };
  })();

  /* ---------------- Sprachbausteine Teil 2 — Wörter aus Liste ---------------- */
  (function(){
    var sb2 = T.sprachbausteine && T.sprachbausteine.teil2; if(!sb2) return;
    var nums = Object.keys(sb2.loesung).map(Number).sort(function(a,b){return a-b;});
    var st = reg("sb2", nums.length);
    var pool = '<div class="mt-legend"><b>Wortliste</b> '+sb2.wortliste.map(esc).join(" · ")+'</div>';
    var textBlock = '<div class="mt-fliesstext">'+markGaps(sb2.text)+'</div>';
    var opts = '<option value="">– wählen –</option>'+sb2.wortliste.map(function(w){ return '<option value="'+esc(w)+'">'+esc(w)+'</option>'; }).join("");
    var items = nums.map(function(n){
      return '<div class="mt-luecke" id="mt-sb2-'+n+'">'+
        '<div class="mt-luecke-label">Lücke '+n+'</div>'+
        '<select class="mt-select" id="mt-sb2-sel-'+n+'" onchange="window._mtSb2('+n+',this)">'+opts+'</select>'+
        '<p class="mt-fb" id="mt-sb2-fb-'+n+'"></p></div>';
    }).join("");
    sections.push(part("sb2", "Sprachbausteine — Teil 2: Wörter aus der Liste einsetzen", sb2.anleitung, pool+textBlock+items, st));

    window._mtSb2 = function(n, sel){
      if(st.done[n]!==undefined) return;
      if(!sel.value) return;
      var correct = sb2.loesung[n];
      sel.disabled = true;
      var good = sel.value === correct;
      sel.classList.add(good?"ok":"err");
      finish(st, n, good, "mt-sb2-fb-"+n, good?"":("Richtig wäre: "+correct+"."));
    };
  })();

  /* ---------------- Schreiben ---------------- */
  (function(){
    var sw = T.schreiben; if(!sw) return;
    var testKey = T.testKey;
    var multi = sw.aufgaben.length>1;
    var tabs = multi ? '<div class="mt-aufgabe-tabs">'+sw.aufgaben.map(function(a,i){
        return '<button data-i="'+i+'" onclick="window._mtSchreibenTab('+i+')" class="'+(i===0?"active":"")+'">Thema '+a.nr+'</button>';
      }).join("")+'</div>' : '';
    var bodies = sw.aufgaben.map(function(a,i){
      var draftKey = "floss.modelltest.schreiben."+testKey+"."+a.nr;
      var punkte = '<ul class="mt-punkte">'+a.punkte.map(function(pt){ return '<li>'+esc(pt)+'</li>'; }).join("")+'</ul>';
      return '<div class="mt-schreiben-body" id="mt-sw-body-'+i+'" style="'+(i===0?"":"display:none")+'">'+
        '<p class="mt-text">'+esc(a.situation)+'</p>'+punkte+
        '<textarea id="mt-sw-ta-'+i+'" data-draftkey="'+draftKey+'" placeholder="Hier schreiben … / Write here …" oninput="window._mtSchreibenCount('+i+')"></textarea>'+
        '<p class="mt-wordcount" id="mt-sw-count-'+i+'"></p>'+
        '<button type="button" class="mt-korrigieren-btn" id="mt-sw-korr-btn-'+i+'" onclick="window._mtSchreibenKorrigieren('+i+')" disabled>Text prüfen</button>'+
        '<div class="mt-korrektur-status" id="mt-sw-korr-status-'+i+'"></div>'+
        '<div class="mt-korrektur-ergebnis" id="mt-sw-korr-ergebnis-'+i+'"></div>'+
        '</div>';
    }).join("");
    var note = '<p class="mt-note">Die Korrektur prüft Grammatik/Rechtschreibung, Wortschatz/Ausdruck und ob du alle Punkte der Aufgabe behandelt hast — wie drei Lehrer, die sich abstimmen. Kein System erkennt jeden Fehler; sieh das Ergebnis als Hilfe, nicht als letztes Wort. Dein Text wird lokal in diesem Browser zwischengespeichert, solange du hier weiterschreibst.</p>';
    sections.push(part("schreiben", "Schreiben", sw.anleitung+" (mindestens "+sw.mindestwoerter+" Wörter)", tabs+bodies+note, null));

    window._mtSchreibenTab = function(i){
      sw.aufgaben.forEach(function(a,j){
        document.getElementById("mt-sw-body-"+j).style.display = (i===j)?"":"none";
      });
      document.querySelectorAll(".mt-aufgabe-tabs button").forEach(function(b,j){
        b.classList.toggle("active", j===i);
      });
    };
    window._mtSchreibenCount = function(i){
      var ta = document.getElementById("mt-sw-ta-"+i);
      try{ localStorage.setItem(ta.dataset.draftkey, ta.value); }catch(e){}
      var words = ta.value.trim().length ? ta.value.trim().split(/\s+/).length : 0;
      var el = document.getElementById("mt-sw-count-"+i);
      el.textContent = words + " / " + sw.mindestwoerter + " Wörter";
      el.className = "mt-wordcount" + (words>=sw.mindestwoerter ? " ok" : "");
      var btn = document.getElementById("mt-sw-korr-btn-"+i);
      if(btn) btn.disabled = words < 5;
    };

    /* ---- Korrektur: 3 Regelmodule (immer) + optional Gemini-Bündelung (nur eingeloggt) ---- */
    window._mtSchreibenKorrigieren = function(i){
      var a = sw.aufgaben[i];
      var ta = document.getElementById("mt-sw-ta-"+i);
      var btn = document.getElementById("mt-sw-korr-btn-"+i);
      var statusEl = document.getElementById("mt-sw-korr-status-"+i);
      var ergebnisEl = document.getElementById("mt-sw-korr-ergebnis-"+i);
      if(!ta || !ta.value.trim()) return;
      if(!window.FlossKorrektur){
        statusEl.textContent = "Korrektur-Modul konnte nicht geladen werden.";
        return;
      }
      btn.disabled = true;
      statusEl.textContent = "Wird geprüft … (Grammatik, Wortschatz, Aufgabenerfüllung)";
      ergebnisEl.innerHTML = "";

      window.FlossKorrektur.korrigiere({
        text: ta.value,
        niveau: niveau,
        testKey: testKey,
        aufgabeNr: a.nr,
        aufgabe: a,
        mindestwoerter: sw.mindestwoerter
      }).then(function(ergebnis){
        statusEl.textContent = "";
        btn.disabled = ta.value.trim().split(/\s+/).length < 5;
        btn.textContent = "Nochmal prüfen";
        renderKorrekturErgebnis(ergebnisEl, ergebnis);
      }).catch(function(){
        statusEl.textContent = "Die Korrektur ist gerade nicht erreichbar. Versuch es später nochmal — dein Text bleibt gespeichert.";
        btn.disabled = false;
      });
    };

    function kriterienListe(k){
      // Nimmt sowohl das Array-Format ([{name,punkte}]) als auch, falls Gemini
      // mal ein Objekt liefert, ein einfaches {name:punkte}-Objekt an.
      if(Array.isArray(k)) return k;
      if(k && typeof k==="object") return Object.keys(k).map(function(n){ return {name:n, punkte:k[n]}; });
      return [];
    }

    function renderKorrekturErgebnis(el, erg){
      if(!erg){ el.innerHTML = ""; return; }
      var quelleLabel = erg.quelle==="gemini" ? "verfeinert (KI-Bündelung)" : "regelbasiert";
      var badges = kriterienListe(erg.kriterien).map(function(k){
        return '<span class="mt-krit-badge"><b>'+Math.round(k.punkte)+'%</b> '+esc(k.name)+'</span>';
      }).join("");
      var gruppen = (erg.fehlergruppen||[]).map(function(g){
        var beispiele = (g.beispiele||[]).map(function(b){ return '<li>'+esc(b)+'</li>'; }).join("");
        var hinweis = g.hinweis ? '<p class="mt-korr-hinweis">'+esc(g.hinweis)+'</p>' : "";
        return '<div class="mt-korr-gruppe"><b>'+esc(g.typ)+'</b>'+(g.anzahl?' ('+g.anzahl+')':'')+
          (beispiele?'<ul>'+beispiele+'</ul>':"")+hinweis+'</div>';
      }).join("");
      el.innerHTML =
        '<div class="mt-korr-box">'+
          '<div class="mt-korr-kopf"><span class="mt-korr-gesamt">'+(erg.gesamtprozent!=null?erg.gesamtprozent+"%":"")+'</span>'+
          '<span class="mt-korr-quelle">'+quelleLabel+'</span></div>'+
          '<div class="mt-krit-liste">'+badges+'</div>'+
          '<p class="mt-korr-lob">'+esc(erg.lob||"")+'</p>'+
          (gruppen?'<div class="mt-korr-gruppen">'+gruppen+'</div>':"")+
          '<p class="mt-korr-lernsatz">'+esc(erg.lernsatz||"")+'</p>'+
          '<p class="mt-korr-schluss">'+esc(erg.schlusssatz||"")+'</p>'+
        '</div>';
    }

    /* Entwürfe beim Laden wiederherstellen */
    setTimeout(function(){
      sw.aufgaben.forEach(function(a,i){
        var ta = document.getElementById("mt-sw-ta-"+i);
        try{
          var saved = localStorage.getItem(ta.dataset.draftkey);
          if(saved){ ta.value = saved; window._mtSchreibenCount(i); }
        }catch(e){}
      });
    },0);
  })();

  /* ---------------- Rendering & Fortschritt ---------------- */
  function part(key, title, anleitung, bodyHtml, st){
    var scoreBadge = st ? '<span class="mt-score-badge" id="mt-score-'+key+'">0 / '+st.total+'</span>' : "";
    return '<div class="mt-part" id="mt-part-'+key+'">'+
      '<div class="mt-part-head"><h3>'+esc(title)+'</h3>'+scoreBadge+'</div>'+
      (anleitung?'<p class="mt-anleitung">'+esc(anleitung)+'</p>':"")+
      bodyHtml+'</div>';
  }
  root.innerHTML = sections.join("") + '<div class="mt-total" id="mt-total" style="display:none"></div>';

  function finish(st, itemId, good, fbId, hint){
    if(st.done[itemId]!==undefined) return;
    st.done[itemId] = good; if(good) st.right++;
    var fb = document.getElementById(fbId);
    if(fb){ fb.className = "mt-fb show " + (good?"good":"bad"); fb.textContent = (good?"Richtig! ":"") + (hint||""); }
    updatePartScore(st);
    checkAllDone();
  }

  function updatePartScore(st){
    Object.keys(PARTS).forEach(function(k){
      if(PARTS[k]!==st) return;
      var el = document.getElementById("mt-score-"+k);
      if(el) el.textContent = st.right + " / " + st.total;
    });
  }

  function checkAllDone(){
    var keys = Object.keys(PARTS);
    var allDone = keys.every(function(k){ return Object.keys(PARTS[k].done).length === PARTS[k].total; });
    if(!allDone) return;
    var right = 0, total = 0;
    keys.forEach(function(k){ right += PARTS[k].right; total += PARTS[k].total; });
    var box = document.getElementById("mt-total");
    var pct = total ? Math.round(100*right/total) : 0;
    box.style.display = "";
    box.innerHTML = '<div class="n">'+right+' / '+total+'</div><div class="l">Punkte in Lesen &amp; Sprachbausteine · '+pct+'%<br>Schreiben wird separat bewertet</div>';

    /* Ergebnis lokal merken (für die Übersicht in modelltests.html) */
    try{
      var raw = JSON.parse(localStorage.getItem("floss.modelltests.ergebnisse")||"{}");
      raw[niveau+"-"+nr] = {punkte:right, max:total, datum:new Date().toISOString()};
      localStorage.setItem("floss.modelltests.ergebnisse", JSON.stringify(raw));
    }catch(e){}

    /* Optional: bei angemeldeten Nutzern einen Durchlauf in Supabase speichern.
       Schlägt still fehl, wenn kein Backend/Login vorhanden ist — die Auswertung
       oben bleibt davon unberührt. */
    var F = window.FLOSS;
    if(F && F.db && F.user){
      try{
        var antworten = {};
        keys.forEach(function(k){ antworten[k] = PARTS[k].done; });
        F.db.from("test_durchlauf").insert({
          user_id: F.user.id,
          test_key: T.testKey,
          niveau: T.niveau.toLowerCase(),
          beendet_am: new Date().toISOString(),
          punkte: right,
          antworten: antworten
        }).then(function(){}).catch(function(){});
      }catch(e){}
    }
  }
})();

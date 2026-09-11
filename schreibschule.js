/* FLOß – "Schreibschule"-Seite
   Rendert window.SCHREIB_META/SCHREIB_TABLES (Referenzkarten + kurze
   Übungen via content-quiz.js) und window.SCHREIB_PROMPTS (freie
   Schreibaufgaben mit Anbindung an die bestehende KI-Korrektur-Engine
   window.FlossKorrektur aus modelltest-korrektur.js — dieselbe, die
   auch bei den Modelltests läuft: 3 Regelmodule immer, zusätzlich
   Gemini-Bündelung wenn eingeloggt). */
(function(){
  const META = window.SCHREIB_META || [];
  const TABLES = window.SCHREIB_TABLES || {};
  const PROMPTS = window.SCHREIB_PROMPTS || [];

  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"); }

  document.getElementById("chipbar").innerHTML =
    META.map(m=>'<a href="#'+m.id+'">'+m.chip+'</a>').join("") +
    '<a href="#frei-schreiben">Freies Schreiben</a>';

  const root = document.getElementById("topics");
  let html = "", lastGroup = null;
  META.forEach(m=>{
    if(m.group !== lastGroup){
      html += '<div class="ref-group">'+m.group+'</div>';
      lastGroup = m.group;
    }
    const entry = TABLES[m.id] || {html:"", quiz:null};
    const quizBlock = (entry.quiz && entry.quiz.length)
      ? '<div class="quiz" data-tid="'+m.id+'"><div class="quiz-head"><h3>Kurze Übung <span class="en">· quick exercise</span></h3></div>'+
        window.ContentQuiz.render(entry.quiz, m.id)+'</div>'
      : '';
    html += '<section class="topic" id="'+m.id+'"><h2>'+m.title+'</h2><p class="ten">'+m.titleEn+'</p>'+
      '<div class="card">'+entry.html+'</div>'+quizBlock+'</section>';
  });

  /* ---- Freies Schreiben mit KI-Korrektur ---- */
  html += '<div class="ref-group">Freies Schreiben</div>';
  html += '<section class="topic" id="frei-schreiben"><h2>Freies Schreiben mit KI-Korrektur</h2>'+
    '<p class="ten">Free writing with AI-assisted correction</p>'+
    '<div class="card"><p>Schreib deinen Text direkt hier und lass ihn prüfen — Grammatik &amp; Rechtschreibung, Wortschatz und Aufgabenerfüllung werden automatisch bewertet, kostenlos und ohne Login. Mit Login wird das Ergebnis zusätzlich von einer KI zu echtem Fließtext-Feedback verfeinert.</p>'+
    '<p class="en">Write your text right here and get it checked — grammar &amp; spelling, vocabulary and task fulfillment are scored automatically, free and without login. Logged-in users additionally get the result refined into full AI feedback.</p></div>'+
    PROMPTS.map((p,i)=>renderPrompt(p,i)).join("")+
  '</section>';

  root.innerHTML = html;

  function renderPrompt(p,i){
    return '<div class="quiz" style="margin-top:18px" data-pid="'+p.id+'">'+
      '<div class="quiz-head"><h3><span class="badge" style="background:'+p.niveauColor+';font-size:12px;padding:3px 12px;margin-right:8px">'+p.niveau+'</span>'+esc(p.title)+'</h3></div>'+
      '<p class="ten" style="margin-bottom:10px">'+p.titleEn+'</p>'+
      '<p style="font-size:15px;margin-bottom:12px">'+esc(p.beschreibung)+'</p>'+
      '<textarea id="ta-'+p.id+'" placeholder="'+esc(p.platzhalter)+'" rows="8" style="width:100%;font-family:inherit;font-size:15px;padding:14px;border-radius:14px;border:1.5px solid var(--line);resize:vertical" oninput="window._schreibCount(\''+p.id+'\')"></textarea>'+
      '<p class="mt-korrektur-status" id="wc-'+p.id+'" style="margin-top:6px">0 Wörter · mindestens '+p.mindestwoerter+' empfohlen</p>'+
      '<button class="mt-korrigieren-btn" id="btn-'+p.id+'" disabled onclick="window._schreibKorrigieren(\''+p.id+'\')">Von der KI prüfen lassen</button>'+
      '<p class="mt-korrektur-status" id="status-'+p.id+'"></p>'+
      '<div id="ergebnis-'+p.id+'"></div>'+
    '</div>';
  }

  window._schreibCount = function(id){
    const ta = document.getElementById("ta-"+id);
    const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
    const p = PROMPTS.find(x=>x.id===id);
    document.getElementById("wc-"+id).textContent = n+" Wörter · mindestens "+p.mindestwoerter+" empfohlen";
    document.getElementById("btn-"+id).disabled = n < 5;
    try{ localStorage.setItem("floss-schreibschule-draft-"+id, ta.value); }catch(e){}
  };

  window._schreibKorrigieren = function(id){
    const p = PROMPTS.find(x=>x.id===id);
    const ta = document.getElementById("ta-"+id);
    const btn = document.getElementById("btn-"+id);
    const statusEl = document.getElementById("status-"+id);
    const ergebnisEl = document.getElementById("ergebnis-"+id);
    if(!ta.value.trim()) return;
    if(!window.FlossKorrektur){
      statusEl.textContent = "Korrektur-Modul konnte nicht geladen werden.";
      return;
    }
    btn.disabled = true;
    statusEl.textContent = "Wird geprüft … (Grammatik, Wortschatz, Aufgabenerfüllung)";
    ergebnisEl.innerHTML = "";
    window.FlossKorrektur.korrigiere({
      text: ta.value,
      niveau: p.niveau,
      aufgabe: p.aufgabe,
      mindestwoerter: p.mindestwoerter
    }).then(function(ergebnis){
      statusEl.textContent = "";
      btn.disabled = ta.value.trim().split(/\s+/).length < 5;
      btn.textContent = "Nochmal prüfen";
      renderKorrekturErgebnis(ergebnisEl, ergebnis);
    }).catch(function(){
      statusEl.textContent = "Die Korrektur ist gerade nicht erreichbar. Versuch es später nochmal.";
      btn.disabled = false;
    });
  };

  function kriterienListe(k){
    if(Array.isArray(k)) return k;
    if(k && typeof k==="object") return Object.keys(k).map(n=>({name:n, punkte:k[n]}));
    return [];
  }

  function renderKorrekturErgebnis(el, erg){
    if(!erg){ el.innerHTML = ""; return; }
    const quelleLabel = erg.quelle==="gemini" ? "verfeinert (KI-Bündelung)" : "regelbasiert";
    const badges = kriterienListe(erg.kriterien).map(k=>
      '<span class="mt-krit-badge"><b>'+Math.round(k.punkte)+'%</b> '+esc(k.name)+'</span>').join("");
    const gruppen = (erg.fehlergruppen||[]).map(g=>{
      const beispiele = (g.beispiele||[]).map(b=>'<li>'+esc(b)+'</li>').join("");
      const hinweis = g.hinweis ? '<p class="mt-korr-hinweis">'+esc(g.hinweis)+'</p>' : "";
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

  /* Entwürfe wiederherstellen */
  setTimeout(()=>{
    PROMPTS.forEach(p=>{
      try{
        const saved = localStorage.getItem("floss-schreibschule-draft-"+p.id);
        const ta = document.getElementById("ta-"+p.id);
        if(saved && ta){ ta.value = saved; window._schreibCount(p.id); }
      }catch(e){}
    });
  },0);

  if(location.hash){
    const jump = ()=>{
      const el = document.querySelector(location.hash); if(!el) return;
      const r = document.documentElement, prev = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto";
      window.scrollTo(0, el.getBoundingClientRect().top + window.pageYOffset - 58);
      r.style.scrollBehavior = prev;
    };
    jump(); setTimeout(jump,120); setTimeout(jump,500);
    window.addEventListener("load",()=>setTimeout(jump,60));
  }
})();

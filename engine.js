/* FLOß Grammatik – Übungs-Engine */
(function(){
  const D = window.LEVEL_DATA;
  if(!D) return;
  document.title = "Deutsch " + D.level + " – FLOß Grammatik";

  const hero = document.getElementById("lvl-hero");
  hero.innerHTML = '<span class="badge" style="background:'+D.color+'">'+D.level+'</span>'+
    '<h1>'+D.title+'</h1><p>'+D.subtitle+'<br><span class="en">'+D.subtitleEn+'</span></p>';

  document.getElementById("chipbar").innerHTML =
    D.topics.map(t=>'<a href="#'+t.id+'">'+t.chip+'</a>').join("");

  function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"); }


  /* Video des zugehörigen Hauptthemas */
  const VMAP = {};
  (window.MAIN_TOPICS||[]).forEach(m=>m.subs.forEach(([l,t])=>{ VMAP[l+"/"+t] = m; }));
  function videoBlock(tid){
    const m = VMAP[D.level.toLowerCase()+"/"+tid];
    if(!m) return "";
    if(!m.yt){
      const q = encodeURIComponent(m.ytSearch || ("Deutsch "+m.name+" erklärt"));
      return '<a class="vid-link" href="https://www.youtube.com/results?search_query='+q+'" target="_blank" rel="noopener">'+
        '<span class="vid-ico">▶</span><span><b>Videos zum Thema '+m.name+'</b>'+
        '<span class="vid-sub">auf YouTube suchen · search on YouTube</span></span></a>';
    }
    return '<div class="vid" data-yt="'+m.yt+'">'+
      '<img class="vid-thumb" loading="lazy" src="https://i.ytimg.com/vi/'+m.yt+'/hqdefault.jpg" alt="">'+
      '<button class="vid-play" aria-label="Video abspielen"></button>'+
      '<div class="vid-cap"><b>'+(m.ytTitle||m.name)+'</b>'+
      '<span class="vid-sub">Erklärvideo zu '+m.name+' · explanatory video (YouTube)</span></div></div>';
  }

  const root = document.getElementById("topics");
  root.innerHTML = D.topics.map(t=>{
    const merk = t.merk ? '<div class="merk"><b>Merke:</b> '+t.merk+(t.merkEn?'<br><span class="en">'+t.merkEn+'</span>':'')+'</div>' : '';
    const hasQ = t.q && t.q.length;
    const badge = hasQ ? '' : '<span class="ref-badge">Nachschlagen · reference</span>';
    const quiz = hasQ
      ? '<div class="quiz" data-tid="'+t.id+'">'+
        '<div class="quiz-head"><h3>Übung <span class="en">· exercise</span></h3>'+
        '<span class="score" id="score-'+t.id+'">0 / '+t.q.length+'</span></div>'+
        t.q.map((q,i)=>renderQ(t.id,q,i)).join("")+'</div>'
      : '';
    return '<section class="topic" id="'+t.id+'">'+
      '<h2>'+t.title+badge+'</h2><p class="ten">'+t.titleEn+'</p>'+
      '<div class="card">'+t.explain+merk+'</div>'+videoBlock(t.id)+quiz+'</section>';
  }).join("");

  function renderQ(tid,q,i){
    const qid = tid+"-"+i;
    const head = '<div class="q" id="q-'+qid+'"><p class="qtext">'+q.q+'</p>';
    const foot = '<p class="fb" id="fb-'+qid+'"></p></div>';

    if(q.type==="gap"){
      return head+'<div class="gapline"><input type="text" id="in-'+qid+'" placeholder="…" autocomplete="off" autocapitalize="off">'+
        '<button onclick="window._chkGap(\''+tid+'\','+i+')">Prüfen</button></div>'+foot;
    }
    if(q.type==="order"){
      const pool = shuffle(q.w).map(w=>'<button class="word" onclick="window._ordMove(this,\''+qid+'\')">'+esc(w)+'</button>').join("");
      return head+
        '<div class="ord-answer" id="oa-'+qid+'" data-empty="Wörter hier anklicken · click the words in order"></div>'+
        '<div class="ord-pool" id="op-'+qid+'">'+pool+'</div>'+
        '<div class="ord-actions"><button class="btn-chk" onclick="window._chkOrder(\''+tid+'\','+i+')">Prüfen</button>'+
        '<button class="btn-ghost" onclick="window._ordReset(\''+qid+'\')">Zurücksetzen</button></div>'+foot;
    }
    if(q.type==="match"){
      const rights = shuffle(q.pairs.map((p,j)=>({t:p[1],j:j})));
      const left = q.pairs.map((p,j)=>'<button class="m-left" id="ml-'+qid+'-'+j+'" data-j="'+j+'" onclick="window._mPick(\''+qid+'\',\''+tid+'\','+i+',this,0)">'+esc(p[0])+'</button>').join("");
      const right = rights.map(r=>'<button class="m-right" id="mr-'+qid+'-'+r.j+'" data-j="'+r.j+'" onclick="window._mPick(\''+qid+'\',\''+tid+'\','+i+',this,1)">'+esc(r.t)+'</button>').join("");
      return head+'<div class="match"><div class="m-col">'+left+'</div><div class="m-col">'+right+'</div></div>'+foot;
    }
    const opts = q.o.map((o,j)=>'<button onclick="window._chkMC(\''+tid+'\','+i+','+j+',this)">'+o+'</button>').join("");
    return head+'<div class="opts">'+opts+'</div>'+foot;
  }

  const state = {};
  D.topics.forEach(t=>{ if(t.q && t.q.length) state[t.id] = {done:{}, right:0, total:t.q.length}; });
  const mState = {};

  function topic(tid){ return D.topics.find(t=>t.id===tid); }
  function updScore(tid){
    const s = state[tid], el = document.getElementById("score-"+tid);
    el.textContent = s.right+" / "+s.total;
    if(Object.keys(s.done).length===s.total){
      const p = s.right/s.total;
      el.style.background = p>=.8?"#e8fbee":(p>=.5?"#fff8e6":"#ffecea");
      el.style.color      = p>=.8?"#1a7a3a":(p>=.5?"#9a7b00":"#c22");
      el.textContent = s.right+" / "+s.total+(p>=.8?"  ·  Sehr gut!":(p>=.5?"  ·  Weiter üben!":"  ·  Nochmal lesen!"));
    }
  }
  function feedback(qid, good, hint){
    const fb = document.getElementById("fb-"+qid);
    fb.className = "fb show "+(good?"good":"bad");
    fb.innerHTML = (good?"Richtig! ":"")+(hint||"");
  }
  function finish(tid,i,good,qid,hint){
    const s = state[tid];
    if(s.done[i]!==undefined) return;
    s.done[i]=good; if(good) s.right++;
    feedback(qid,good,hint); updScore(tid);
  }

  /* --- Multiple Choice --- */
  window._chkMC = function(tid,i,j,btn){
    if(state[tid].done[i]!==undefined) return;
    const q = topic(tid).q[i], qid = tid+"-"+i;
    const bs = btn.parentElement.querySelectorAll("button");
    bs.forEach(b=>b.disabled=true);
    const good = (j===q.c);
    btn.classList.add(good?"ok":"err");
    if(!good) bs[q.c].classList.add("ok");
    finish(tid,i,good,qid,q.h);
  };

  /* --- Lückentext --- */
  window._chkGap = function(tid,i){
    if(state[tid].done[i]!==undefined) return;
    const q = topic(tid).q[i], qid = tid+"-"+i;
    const inp = document.getElementById("in-"+qid);
    const val = inp.value.trim().toLowerCase().replace(/\s+/g," ");
    const good = q.a.some(a=>a.toLowerCase()===val);
    inp.classList.add(good?"ok":"err"); inp.disabled = true;
    finish(tid,i,good,qid, good ? q.h : 'Richtig wäre: <b>'+q.a[0]+'</b>. '+(q.h||""));
  };

  /* --- Satz bauen --- */
  window._ordMove = function(btn,qid){
    const ans = document.getElementById("oa-"+qid), pool = document.getElementById("op-"+qid);
    if(btn.disabled) return;
    (btn.parentElement===pool ? ans : pool).appendChild(btn);
  };
  window._ordReset = function(qid){
    const ans = document.getElementById("oa-"+qid), pool = document.getElementById("op-"+qid);
    [...ans.children].forEach(b=>{ if(!b.disabled) pool.appendChild(b); });
  };
  window._chkOrder = function(tid,i){
    if(state[tid].done[i]!==undefined) return;
    const q = topic(tid).q[i], qid = tid+"-"+i;
    const ans = document.getElementById("oa-"+qid);
    const built = [...ans.children].map(b=>b.textContent).join(" ").trim();
    const norm = s=>s.toLowerCase().replace(/\s+/g," ").replace(/\s+([,.!?])/g,"$1").trim();
    const good = q.a.some(a=>norm(a)===norm(built));
    ans.classList.add(good?"ok":"err");
    [...ans.children].forEach(b=>b.disabled=true);
    document.getElementById("op-"+qid).querySelectorAll("button").forEach(b=>b.disabled=true);
    document.querySelector("#q-"+qid+" .ord-actions").style.display="none";
    finish(tid,i,good,qid, good ? q.h : 'Richtig wäre: <b>'+q.a[0]+'</b>. '+(q.h||""));
  };

  /* --- Zuordnen --- */
  window._mPick = function(qid,tid,i,btn,side){
    if(state[tid].done[i]!==undefined || btn.disabled) return;
    if(!mState[qid]) mState[qid] = {sel:null, ok:0, wrong:false};
    const st = mState[qid], q = topic(tid).q[i];
    if(side===0){
      document.querySelectorAll("#q-"+qid+" .m-left").forEach(b=>b.classList.remove("sel"));
      btn.classList.add("sel"); st.sel = btn; return;
    }
    if(!st.sel){ return; }
    const good = st.sel.dataset.j === btn.dataset.j;
    if(good){
      st.sel.classList.remove("sel"); st.sel.classList.add("ok"); btn.classList.add("ok");
      st.sel.disabled = true; btn.disabled = true; st.ok++;
      st.sel = null;
      if(st.ok === q.pairs.length){
        finish(tid,i,!st.wrong,qid, st.wrong ? 'Alle Paare gefunden — schau dir die Tabelle oben nochmal an.' : (q.h||"Alle Paare korrekt."));
      }
    } else {
      st.wrong = true;
      const a = st.sel, b = btn;
      a.classList.add("err"); b.classList.add("err");
      setTimeout(()=>{ a.classList.remove("err","sel"); b.classList.remove("err"); },600);
      st.sel = null;
    }
  };

  /* Video erst beim Klick laden — hält die Seite schnell */
  document.addEventListener("click", function(e){
    const box = e.target.closest(".vid");
    if(!box || box.dataset.on) return;
    box.dataset.on = "1";
    const id = box.dataset.yt;
    box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0" '+
      'title="Erklärvideo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" '+
      'allowfullscreen></iframe>';
  });

  document.addEventListener("keydown",function(e){
    if(e.key==="Enter" && e.target.tagName==="INPUT" && e.target.id.startsWith("in-")){
      const p = e.target.id.slice(3).split("-"); const i = parseInt(p.pop(),10);
      window._chkGap(p.join("-"), i);
    }
  });

  const order = {"A1":["a2","A2"],"A2":["b1","B1"],"B1":["b2","B2"],"B2":["c1","C1"],"C1":null};
  const nx = order[D.level], nl = document.getElementById("nextlvl");
  if(nl) nl.innerHTML = nx ? '<a class="cta" href="'+nx[0]+'.html">Weiter zu '+nx[1]+' →</a>'
                           : '<a class="cta" href="index.html">Zurück zur Übersicht</a>';

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

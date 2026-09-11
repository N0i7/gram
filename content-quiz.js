/* FLOß – gemeinsame Mini-Quiz-Komponente
   Leichtgewichtige Variante von engine.js für Seiten außerhalb der
   Grammatik-Niveaus (Hör-/Leseverstehen, Schreibschule): rendert
   einzelne MC-, Lücken- und Zuordnen-Fragen mit sofortigem Feedback,
   nutzt dieselben CSS-Klassen wie engine.js (.opts/.gapline/.match/.q/.fb),
   aber ohne Themen-Fortschritt/Video/Referenz-Logik — nur die reine
   Frage-Prüf-Mechanik, wiederverwendbar auf jeder Content-Seite.
   API: window.ContentQuiz.render(questions, idPrefix) -> HTML-String
        window.ContentQuiz.init() -> bindet alle nötigen Klick-Handler
        (einmal nach dem Einfügen ins DOM aufrufen) */
(function(){
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"); }

  function render(qs, prefix){
    return (qs||[]).map((q,i)=>renderQ(prefix,q,i)).join("");
  }

  function renderQ(tid,q,i){
    const qid = tid+"-"+i;
    const head = '<div class="q" id="q-'+qid+'"><p class="qtext">'+q.q+'</p>';
    const foot = '<p class="fb" id="fb-'+qid+'"></p></div>';

    if(q.type==="gap"){
      return head+'<div class="gapline"><input type="text" id="in-'+qid+'" placeholder="…" autocomplete="off" autocapitalize="off">'+
        '<button onclick="window.ContentQuiz._chkGap(\''+qid+'\')">Prüfen</button></div>'+foot;
    }
    if(q.type==="match"){
      const shuffled = q.pairs.map((p,j)=>({t:p[1],j:j})).sort(()=>Math.random()-.5);
      const left = q.pairs.map((p,j)=>'<button class="m-left" id="ml-'+qid+'-'+j+'" data-j="'+j+'" onclick="window.ContentQuiz._mPick(\''+qid+'\',this,0)">'+esc(p[0])+'</button>').join("");
      const right = shuffled.map(r=>'<button class="m-right" id="mr-'+qid+'-'+r.j+'" data-j="'+r.j+'" onclick="window.ContentQuiz._mPick(\''+qid+'\',this,1)">'+esc(r.t)+'</button>').join("");
      return head+'<div class="match"><div class="m-col">'+left+'</div><div class="m-col">'+right+'</div></div>'+foot;
    }
    const opts = q.o.map((o,j)=>'<button onclick="window.ContentQuiz._chkMC(\''+qid+'\','+j+')">'+o+'</button>').join("");
    return head+'<div class="opts">'+opts+'</div>'+foot;
  }

  const REG = {}; // qid -> question object, gesetzt bei render()

  function renderRegistered(qs, prefix){
    (qs||[]).forEach((q,i)=>{ REG[prefix+"-"+i] = q; });
    return render(qs, prefix);
  }

  function feedback(qid, good, hint){
    const fb = document.getElementById("fb-"+qid);
    if(!fb) return;
    fb.className = "fb show "+(good?"good":"bad");
    fb.innerHTML = (good?"Richtig! ":"")+(hint||"");
  }

  window.ContentQuiz = {
    render: renderRegistered,

    _chkMC: function(qid,j){
      const q = REG[qid]; if(!q) return;
      const el = document.getElementById("q-"+qid);
      const bs = el.querySelectorAll(".opts button");
      if(bs[0] && bs[0].disabled) return;
      bs.forEach(b=>b.disabled=true);
      const good = (j===q.c);
      bs[j].classList.add(good?"ok":"err");
      if(!good) bs[q.c].classList.add("ok");
      feedback(qid, good, q.h);
    },

    _chkGap: function(qid){
      const q = REG[qid]; if(!q) return;
      const inp = document.getElementById("in-"+qid);
      if(inp.disabled) return;
      const val = inp.value.trim().toLowerCase().replace(/\s+/g," ");
      const good = q.a.some(a=>a.toLowerCase()===val);
      inp.classList.add(good?"ok":"err"); inp.disabled = true;
      feedback(qid, good, good ? q.h : 'Richtig wäre: <b>'+q.a[0]+'</b>. '+(q.h||""));
    },

    _mState: {},
    _mPick: function(qid,btn,side){
      const q = REG[qid]; if(!q) return;
      if(!this._mState[qid]) this._mState[qid] = {sel:null, ok:0, wrong:false};
      const st = this._mState[qid];
      if(side===0){
        document.querySelectorAll("#q-"+qid+" .m-left").forEach(b=>b.classList.remove("sel"));
        btn.classList.add("sel"); st.sel = btn; return;
      }
      if(!st.sel) return;
      const good = st.sel.dataset.j === btn.dataset.j;
      if(good){
        st.sel.classList.remove("sel"); st.sel.classList.add("ok"); btn.classList.add("ok");
        st.sel.disabled = true; btn.disabled = true; st.ok++;
        st.sel = null;
        if(st.ok === q.pairs.length){
          feedback(qid, !st.wrong, st.wrong ? 'Alle Paare gefunden — schau nochmal genau hin.' : (q.h||'Alle Paare korrekt.'));
        }
      } else {
        st.wrong = true;
        const a = st.sel, b = btn;
        a.classList.add("err"); b.classList.add("err");
        setTimeout(()=>{ a.classList.remove("err","sel"); b.classList.remove("err"); },600);
        st.sel = null;
      }
    }
  };

  document.addEventListener("keydown",function(e){
    if(e.key==="Enter" && e.target.tagName==="INPUT" && e.target.id.startsWith("in-")){
      window.ContentQuiz._chkGap(e.target.id.slice(3));
    }
  });
})();

/* FLOß – "Hör-/Leseverstehen"-Seite
   Rendert window.HLV_DATA (siehe hoerleseverstehen-daten.js) zu Texten
   mit Wortschatzhilfe, Vorlesen-Button (Web Speech API — kein eigenes
   Audio nötig, kostenlos) und Verständnisfragen (via content-quiz.js). */
(function(){
  const D = window.HLV_DATA;
  if(!D) return;

  document.getElementById("chipbar").innerHTML =
    D.levels.map(l=>'<a href="#lvl-'+l.level+'">'+l.level+'</a>').join("");

  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;"); }

  const root = document.getElementById("topics");
  let html = "";
  D.levels.forEach(lvl=>{
    html += '<div class="ref-group" id="lvl-'+lvl.level+'" style="color:'+lvl.color+'">Niveau '+lvl.level+'</div>';
    lvl.texts.forEach(t=>{
      const vocab = (t.vocab||[]).map(v=>'<li>'+esc(v[0])+' <span class="en">'+esc(v[1])+'</span></li>').join("");
      html += '<section class="topic" id="'+t.id+'">'+
        '<h2>'+t.title+'</h2><p class="ten">'+t.titleEn+'</p>'+
        '<div class="card">'+
          '<button class="hlv-play" id="play-'+t.id+'" onclick="window._hlvSpeak(\''+t.id+'\')" type="button">'+
            '<span class="hlv-play-ico">▶</span> Vorlesen <span class="en">· listen (browser voice)</span></button>'+
          '<p id="text-'+t.id+'" class="hlv-text">'+t.text+'</p>'+
          (vocab ? '<div class="vgrid"><div class="vbox"><h4>Wortschatzhilfe · vocabulary help</h4><ul>'+vocab+'</ul></div></div>' : '')+
        '</div>'+
        '<div class="quiz" data-tid="'+t.id+'">'+
          '<div class="quiz-head"><h3>Verständnisfragen <span class="en">· comprehension questions</span></h3></div>'+
          window.ContentQuiz.render(t.q, t.id)+
        '</div>'+
      '</section>';
    });
  });
  root.innerHTML = html;

  /* ---- Vorlesen: Web Speech API, kein eigenes Audio/Backend nötig ---- */
  const supported = "speechSynthesis" in window;
  let currentBtn = null;

  window._hlvSpeak = function(id){
    const btn = document.getElementById("play-"+id);
    if(!supported){
      btn.querySelector(".en") && (btn.querySelector(".en").textContent = "· Vorlesen wird von diesem Browser nicht unterstützt");
      return;
    }
    // Erneuter Klick auf laufenden Text: stoppen statt neu starten.
    if(currentBtn === btn && speechSynthesis.speaking){
      speechSynthesis.cancel();
      resetBtn(btn);
      currentBtn = null;
      return;
    }
    speechSynthesis.cancel();
    if(currentBtn) resetBtn(currentBtn);
    const text = document.getElementById("text-"+id).textContent;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    u.rate = 0.92;
    u.onend = ()=>{ resetBtn(btn); if(currentBtn===btn) currentBtn=null; };
    u.onerror = ()=>{ resetBtn(btn); if(currentBtn===btn) currentBtn=null; };
    btn.classList.add("playing");
    btn.querySelector(".hlv-play-ico").textContent = "■";
    currentBtn = btn;
    speechSynthesis.speak(u);
  };
  function resetBtn(btn){
    btn.classList.remove("playing");
    const ico = btn.querySelector(".hlv-play-ico");
    if(ico) ico.textContent = "▶";
  }

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

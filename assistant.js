/* FLOß Grammatik – Suche & Grammatik-Assistent (läuft komplett im Browser) */
(function(){
  const DATA = window.SEARCH_DATA || [];
  if(!DATA.length) return;

  /* ---------- Normalisierung & Suche ---------- */
  const fold = s => String(s).toLowerCase()
    .replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss")
    .replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();

  const STOP = new Set(["ist","sind","bin","war","waren","ein","hat","haben","wird","werden","gibt","ich","du","wir","ihr","bitte","kannst","kann","koennen","erklaer","erklaere","erklaeren","mal","sag","sagen","zeig","zeige","brauche","brauch","moechte","will","gibt","warum","wieso","weshalb","welche","welcher","welches","eine","einen","einem","fuer","und","oder","aber","auch","noch","schon","denn","also","mir","mich","dir","dich","was","wer","ueber","von","vom","zum","zur","beim","hilfe","frage","thema","deutsch","grammatik","regel","regeln","benutze","benutzt","benutzen","bilde","bilden","macht","machen","funktioniert","genau","richtig","unterschied","zwischen","beispiel","beispiele"]);

  /* Synonyme: Suchwort -> Themen-IDs */
  const SYN = {
    "vergangenheit":["perfekt","praeteritum","plusquamperfekt"],
    "past":["perfekt","praeteritum"],
    "zukunft":["futur1","futur2"],
    "future":["futur1"],
    "gegenwart":["praesens"],
    "present":["praesens"],
    "faelle":["akkusativ","dativ","genitiv","artikel"],
    "fall":["akkusativ","dativ","genitiv"],
    "kasus":["akkusativ","dativ","genitiv","grundbegriffe"],
    "case":["akkusativ","dativ","genitiv"],
    "wemfall":["dativ"],"wenfall":["akkusativ"],"werfall":["artikel"],"wesfall":["genitiv"],
    "artikel":["artikel","nullartikel","deklination"],
    "geschlecht":["artikel","grundbegriffe"],
    "endung":["adjektiv","deklination","plural"],
    "endungen":["adjektiv","deklination"],
    "mehrzahl":["plural"],"einzahl":["plural"],
    "zeitform":["praesens","perfekt","praeteritum","futur1"],
    "zeitformen":["praesens","perfekt","praeteritum","futur1","plusquamperfekt","futur2"],
    "tempus":["praesens","perfekt","praeteritum","grundbegriffe"],
    "satzstellung":["satzbau","tekamolo","feldermodell","satzglieder"],
    "wortstellung":["satzbau","tekamolo","feldermodell"],
    "wortfolge":["satzbau","tekamolo"],
    "nebensatz":["nebensatz","nebensatz2","temporalsatz","konditional","relativ"],
    "nebensaetze":["nebensatz","nebensatz2","temporalsatz","konditional"],
    "komma":["komma","kommab1","interpunktionc1"],
    "kommas":["komma","kommab1"],
    "zeichensetzung":["komma","kommab1","interpunktionc1"],
    "gross":["grossschreibung"],"grossschreibung":["grossschreibung"],
    "hoeflich":["hoeflichkeit","konj2"],
    "hoeflichkeit":["hoeflichkeit"],
    "bitte":["hoeflichkeit","imperativ"],
    "befehl":["imperativ"],
    "moeglichkeit":["modalverben","konj2"],
    "wunsch":["konj2","irreal"],
    "bedingung":["konditional","konj2"],
    "passiv":["passiv","passiv2","zustandspassiv","passivc1"],
    "aktiv":["passiv","zustandspassiv"],
    "konjunktiv":["konj2","konj1","konj2v","redewiedergabe","konjtabelle"],
    "reflexiv":["reflexiv","reflexivarten","reflexivb1"],
    "sich":["reflexiv","reflexivarten"],
    "praeposition":["wechsel","verbpraep2","verbpraep","adjpraep","verschmelzung"],
    "praepositionen":["wechsel","verbpraep2","verbpraep","adjpraep"],
    "adjektiv":["adjektiv","komparativ","adjektivnomen"],
    "steigerung":["komparativ"],
    "vergleich":["komparativ"],
    "pronomen":["personalpronomen","possessiv","demonstrativ","indefinit","relativ"],
    "verneinung":["negation","nichtstellung"],
    "verneinen":["negation","nichtstellung"],
    "negation":["negation","nichtstellung"],
    "trennbar":["trennbar"],
    "verb":["praesens","verbtabellen","valenz"],
    "verben":["praesens","verbtabellen","haeufige-verben","valenz"],
    "unregelmaessig":["verbtabellen","verbtabellen3","praesens"],
    "konjugation":["verbtabellen","praesens","verbtabellen2"],
    "deklination":["deklination","deklination2","deklination3","adjektiv"],
    "zahlen":["zahlen"],"uhrzeit":["zahlen"],"datum":["zahlen"],
    "wortschatz":["wortschatz","wortschatz2","wortschatz3","wortschatz4"],
    "vokabeln":["wortschatz","wortschatz2","wortschatz3"],
    "sprechen":["redemittel","redemittel2","redemittel3"],
    "meinung":["redemittel3","redemittel4"],
    "diskussion":["redemittel3","redemittel4"],
    "brief":["redemittel3","redemittel4","hoeflichkeit"],
    "email":["redemittel3","hoeflichkeit"],
    "pruefung":["redemittel3","redemittel4"],
    "aussprache":["phonetik"],
    "betonung":["phonetik"],
    "redewendung":["idiomatik"],
    "redewendungen":["idiomatik"],
    "stil":["stilebenen","nominal","nominalc1"],
    "plural":["plural"],
    "modalverb":["modalverben","submodal"],
    "modalverben":["modalverben","submodal"],
    "relativsatz":["relativ"],
    "indirekte":["redewiedergabe","konj1","indirektefrage"],
    "wortbildung":["wortbildungb2","wortbildungc1","komposita","wortbildungc2"],
    "ndeklination":["ndeklination"],"schwache":["ndeklination","verbtabellen"],
    "wenn":["nebensatz","konditional","temporalsatz"],
    "als":["temporalsatz","komparativ"],
    "dass":["nebensatz","indirektefrage"],
    "weil":["nebensatz","konsekutiv"],
    "obwohl":["nebensatz2"],
    "sein":["verbtabellen","praesens","perfekt"],
    "haben":["verbtabellen","praesens","perfekt"],
    "werden":["futur1","passiv","verbtabellen"],
    "man":["indefinit"],
    "es":["platzhalteres"],
    "nicht":["negation","nichtstellung"],
    "kein":["negation"],
    "lassen":["lassen"],
    "silbe":["phonetik"],"laut":["phonetik"],
    "genus":["grundbegriffe","artikel"],
    "numerus":["grundbegriffe","plural"],
    "modus":["grundbegriffe","konj2"],
    "valenz":["valenz","grundbegriffe"],
    "attribut":["attribute","partizip"],
    "ellipse":["ellipse"],
    "dialekt":["varietaeten"],
    "register":["stilebenen"],
    "textsorte":["textsorten"],"textsorten":["textsorten"],
    "rhetorik":["rhetorik"],"metapher":["rhetorik"]
  };

  const IDX = DATA.map(t => ({
    t,
    ftitle: fold(t.title+" "+t.chip+" "+t.titleEn),
    tok: fold(t.title+" "+t.chip).split(" ").filter(w=>w.length>3),
    fmerk: fold(t.merk),
    ftext: fold(t.text),
    fid: fold(t.id)
  }));

  const PHRASE = [
    [/\bder die das\b|\bdie der das\b|\bder\/die\/das\b/, ["artikel","deklination"]],
    [/konjunktiv (ii|2|zwei)/, ["konj2","konj2","konj2v"]],
    [/konjunktiv (i|1|eins)\b/, ["konj1","konj1","redewiedergabe"]],
    [/futur (ii|2)/, ["futur2"]],
    [/futur (i|1)\b/, ["futur1"]],
    [/partizip (ii|2)/, ["perfekt","partizip"]],
    [/partizip (i|1)\b/, ["partizip","gerundivum"]],
    [/\bals oder wenn\b|\bwenn oder als\b|\bals wenn\b/, ["temporalsatz"]],
    [/nicht oder kein|kein oder nicht/, ["negation"]],
    [/haben oder sein|sein oder haben/, ["perfekt"]],
    [/wo(hin)? und wo\b|wo oder wohin|wohin oder wo/, ["wechsel"]],
    [/du oder sie|sie oder du|siezen|duzen/, ["hoeflichkeit"]]
  ];


  /* Tippfehler-Toleranz: Levenshtein-Distanz */
  function lev(a,b){
    if(a===b) return 0;
    if(Math.abs(a.length-b.length)>3) return 99;
    const m=a.length,n=b.length;
    let prev=Array.from({length:n+1},(_,j)=>j), cur=new Array(n+1);
    for(let i=1;i<=m;i++){
      cur[0]=i;
      for(let j=1;j<=n;j++){
        cur[j]=Math.min(prev[j]+1, cur[j-1]+1, prev[j-1]+(a[i-1]===b[j-1]?0:1));
      }
      [prev,cur]=[cur,prev];
    }
    return prev[n];
  }
  const tol = w => w.length<=3 ? 0 : (w.length<=4 ? 1 : (w.length<=8 ? 2 : 3));
  /* alle bekannten Suchwörter (Titel, Chips, IDs, Synonyme) */
  const VOCAB = (()=>{
    const set = new Set();
    IDX.forEach(e=>{ e.tok.forEach(t=>set.add(t)); set.add(e.fid.replace(/ /g,"")); });
    Object.keys(SYN).forEach(k=>set.add(k));
    return [...set].filter(w=>w.length>3);
  })();
  /* korrigiert ein Wort auf das nächstliegende bekannte Wort */
  function correct(w){
    if(w.length<4) return null;
    let best=null, bd=99;
    const t = tol(w);
    for(const c of VOCAB){
      if(Math.abs(c.length-w.length)>t) continue;
      if(c[0]!==w[0] && lev(c.slice(0,3),w.slice(0,3))>1) continue;
      const d = lev(w,c);
      if(d<bd){ bd=d; best=c; if(d===0) break; }
    }
    return (bd<=t && bd>0) ? best : null;
  }
  window._correct = correct;

  function score(q){
    const fq = fold(q);
    if(!fq) return [];
    const compact = fq.replace(/ /g,"");
    const all = fq.split(" ").filter(Boolean);
    let words = all.filter(w => (w.length>2 || /^(ii|iv|[0-9])$/.test(w)) && !STOP.has(w));
    /* Tippfehler korrigieren, wenn ein Wort nirgends vorkommt */
    const fixed = [];
    words = words.map(w=>{
      const known = IDX.some(e=>e.ftitle.includes(w)||e.ftext.includes(w)) || SYN[w];
      if(known) return w;
      const c = correct(w);
      if(c){ fixed.push([w,c]); return c; }
      return w;
    });
    window._lastFix = fixed;
    if(!words.length && !compact) return [];
    const boost = {};
    const bump = (ids,n) => ids.forEach(id => boost[id] = (boost[id]||0)+n);
    all.concat(words).forEach(w => { if(SYN[w]) bump(SYN[w], 40); });
    const fqc = words.join(' ') + ' ' + fq;
    PHRASE.forEach(([re_,ids]) => { if(re_.test(fq) || re_.test(fqc)) bump(ids, 120); });
    const res = IDX.map(e=>{
      let s = 0;
      const fidc = e.fid.replace(/ /g,"");
      if(fidc === compact) s += 220;
      if(e.ftitle === fq) s += 200;
      if(fq.length>3 && e.ftitle.includes(fq)) s += 90;
      words.forEach(w=>{
        if(e.fid === w || fidc === w) s += 150;
        if(e.ftitle.includes(w)) s += 45;
        if(e.fmerk.includes(w)) s += 18;
        if(e.ftext.includes(w)) s += 10;
        if(w.length>4 && e.ftitle.includes(w.slice(0,Math.max(4,w.length-2)))) s += 12;
        if(w.length>5){
          const st = w.slice(0,6);
          if(e.tok.some(tk => tk.length>5 && (tk.slice(0,6)===st))) s += 55;
        }
      });
      s += boost[e.t.id]||0;
      return {t:e.t, s};
    }).filter(r=>r.s>0).sort((a,b)=>b.s-a.s || a.t.lvl.localeCompare(b.t.lvl));
    return res;
  }

  const page = () => (location.pathname.split("/").pop()||"index.html");
  const link = t => (page()===t.lvl+".html" ? "" : t.lvl+".html") + "#" + t.id;
  const badge = t => '<span class="as-lv" style="background:'+t.color+'">'+t.lvlName+'</span>';

  /* ---------- UI einfügen ---------- */
  const navInner = document.querySelector(".nav-inner");
  if(navInner){
    const box = document.createElement("div");
    box.className = "as-searchbox";
    box.innerHTML = '<input type="search" id="as-q" placeholder="Grammatik suchen …" '+
      'autocomplete="off" aria-label="Grammatik suchen"><div class="as-results" id="as-res" style="display:none"></div>';
    navInner.appendChild(box);
  }
  const fab = document.createElement("button");
  fab.className = "as-fab"; fab.id = "as-fab";
  fab.setAttribute("aria-label","Grammatik-Assistent öffnen");
  fab.innerHTML = '<span>Frag mich</span>';
  document.body.appendChild(fab);

  const panel = document.createElement("div");
  panel.className = "as-panel"; panel.id = "as-panel";
  panel.style.display = "none";
  panel.innerHTML =
    '<div class="as-head"><div><strong>Grammatik-Assistent</strong>'+
    '<span class="as-sub">Frag mich etwas über deutsche Grammatik</span></div>'+
    '<button class="as-close" id="as-close" aria-label="Schließen">×</button></div>'+
    '<div class="as-log" id="as-log"></div>'+
    '<div class="as-chips" id="as-chips"></div>'+
    '<form class="as-form" id="as-form"><input type="text" id="as-in" '+
    'placeholder="z. B. Wann benutze ich Dativ?" autocomplete="off">'+
    '<button type="submit" aria-label="Senden">→</button></form>';
  document.body.appendChild(panel);

  /* Vorschläge schon ab dem ersten Buchstaben */
  function prefixHits(v){
    const f = fold(v);
    const out = [];
    IDX.forEach(e=>{
      const words = (e.ftitle+" "+e.fid).split(/[ \-]/);
      if(words.some(w=>w.startsWith(f))) out.push({t:e.t, s:100});
    });
    return out.sort((a,b)=>a.t.lvl.localeCompare(b.t.lvl) || a.t.chip.localeCompare(b.t.chip));
  }
  /* Hauptthemen als Vorschlag */
  function mainHits(v){
    const f = fold(v); if(!f) return [];
    return (window.MAIN_TOPICS||[]).filter(m=>{
      const n = fold(m.name+" "+m.en+" "+m.id);
      return n.includes(f) || n.split(" ").some(w=>w.startsWith(f));
    }).slice(0,3);
  }

  /* ---------- Suche in der Navigation ---------- */
  const qEl = document.getElementById("as-q"), resEl = document.getElementById("as-res");
  if(qEl){
    const render = (list, q) => {
      let vhtml = "";
      if(window.findVerb){
        const o = window.findVerb(q) || window.findVerb("sich "+q);
        if(o) vhtml = '<button class="as-hit as-verb" onclick="window.showVerb(\''+o.v+'\')">'+
          '<span class="as-lv" style="background:#0f766e">VERB</span>'+
          '<span class="as-hit-t">'+o.v+' — Konjugation</span>'+
          '<span class="as-hit-c">Präsens · Präteritum · Perfekt</span></button>';
      }
      const mains = mainHits(q).map(m=>
        '<a class="as-hit as-main" href="index.html#thema-'+m.id+'">'+
        '<span class="as-lv" style="background:'+m.color+'">'+m.icon+'</span>'+
        '<span class="as-hit-t">'+m.name+'</span>'+
        '<span class="as-hit-c">Hauptthema · '+m.subs.length+' Unterthemen</span></a>').join("");
      vhtml = mains + vhtml;
      if(!list.length && !vhtml){ resEl.innerHTML = '<div class="as-empty">Nichts gefunden. Versuch ein anderes Wort.</div>'; resEl.style.display="block"; return; }
      resEl.innerHTML = vhtml + list.slice(0,8).map(r =>
        '<a class="as-hit" href="'+link(r.t)+'">'+badge(r.t)+
        '<span class="as-hit-t">'+r.t.title+'</span>'+
        '<span class="as-hit-c">'+r.t.chip+(r.t.nq?' · '+r.t.nq+' Übungen':' · Nachschlagen')+'</span></a>').join("");
      resEl.style.display = "block";
    };
    qEl.addEventListener("input", ()=>{
      const v = qEl.value.trim();
      if(v.length<1){ resEl.style.display = "none"; return; }
      render(v.length===1 ? prefixHits(v) : score(v), v.toLowerCase().trim());
    });
    qEl.addEventListener("keydown", e=>{
      if(e.key==="Escape"){ qEl.value=""; resEl.style.display="none"; qEl.blur(); }
      if(e.key==="Enter"){ const a = resEl.querySelector(".as-hit"); if(a){ e.preventDefault(); location.href = a.getAttribute("href"); } }
    });
    document.addEventListener("click", e=>{ if(!e.target.closest(".as-searchbox")) resEl.style.display = "none"; });
    document.addEventListener("keydown", e=>{
      if(e.key==="/" && document.activeElement.tagName!=="INPUT" && document.activeElement.tagName!=="TEXTAREA"){
        e.preventDefault(); qEl.focus();
      }
    });
  }

  /* ---------- Assistent ---------- */
  const log = document.getElementById("as-log");
  const chips = document.getElementById("as-chips");
  const SUGG = ["Wann benutze ich Dativ?","Unterschied Perfekt und Präteritum","Wie bilde ich das Passiv?","der die das – welche Regel?","Wann kommt ein Komma?","Was ist Konjunktiv II?"];

  function add(who, html){
    const d = document.createElement("div");
    d.className = "as-msg as-"+who;
    d.innerHTML = html;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  }
  function topicCard(t, lead){
    return (lead?'<p class="as-lead">'+lead+'</p>':'')+
      '<div class="as-card">'+badge(t)+'<span class="as-card-t">'+t.title+'</span>'+
      '<p class="as-simple">'+t.simple+'</p>'+
      (t.merk?'<p class="as-merk"><b>Merke:</b> '+t.merk+'</p>':'')+
      (t.example?'<p class="as-ex">'+t.example+'</p>':'')+
      '<a class="as-go" href="'+link(t)+'">Zum Thema'+(t.nq?' &amp; '+t.nq+' Übungen':'')+' →</a></div>';
  }

  const GREET = /^(hallo|hi|hey|moin|guten tag|guten morgen|servus|hola)\b/i;
  const THANKS = /(danke|thanks|dankeschoen|vielen dank)/i;
  const HELP = /(was kannst du|hilfe|help|wie funktioniert)/i;

  /* Verb erkannt? Dann direkt die Konjugation zeigen */
  function verbHit(raw){
    if(!window.findVerb) return null;
    const cleaned = raw.toLowerCase()
      .replace(/[?!.,]/g," ")
      .replace(/\b(konjugation|konjugiere|konjugier|von|die|das|der|wie|was|ist|bilde|bilden|formen|verb|zeig|zeige|mir|bitte|ich)\b/g," ")
      .replace(/\s+/g," ").trim();
    if(!cleaned) return null;
    const parts = cleaned.split(" ");
    for(let i=0;i<parts.length;i++){
      const two = parts[i]+" "+(parts[i+1]||"");
      const o = window.findVerb(two.trim()) || window.findVerb(parts[i]);
      if(o) return o;
    }
    return null;
  }

  function answer(q){
    const raw = q.trim();
    if(!raw) return;
    if(GREET.test(raw)) return add("bot","Hallo! Frag mich etwas über deutsche Grammatik — zum Beispiel <i>„Wann benutze ich Dativ?“</i> oder <i>„Wie bilde ich das Perfekt?“</i>");
    if(THANKS.test(raw)) return add("bot","Gern! Wenn du noch etwas wissen willst, frag einfach.");
    if(HELP.test(raw)) return add("bot","Ich kenne alle "+DATA.length+" Grammatikthemen dieser Seite von A1 bis C2. Stell mir eine Frage wie <i>„Was ist der Unterschied zwischen als und wenn?“</i> — ich erkläre es einfach und zeige dir die passenden Übungen.");

    const vb = verbHit(raw);
    if(vb && window.verbCard){
      add("bot",'<p class="as-lead">Hier ist die komplette Konjugation:</p>'+window.verbCard(vb));
      return;
    }
    const hits = score(raw);
    const fx = window._lastFix || [];
    if(fx.length){
      add("bot",'<span class="as-fix">Ich lese das als <b>'+fx.map(p=>p[1]).join(", ")+'</b>.</span>');
    }
    if(!hits.length){
      return add("bot","Dazu habe ich leider nichts gefunden. Versuch es mit einem Grammatikwort — zum Beispiel <b>Dativ</b>, <b>Perfekt</b>, <b>Passiv</b>, <b>Relativsatz</b> oder <b>Komma</b>.");
    }
    // Vergleichsfrage: "Unterschied X und Y"
    const cmp = /unterschied|oder|vs\.?|gegen(ueber)?/i.test(raw);
    if(cmp && hits.length>1 && hits[1].s > hits[0].s*0.45){
      add("bot", topicCard(hits[0].t,"Das sind zwei verschiedene Themen — hier beide:") + topicCard(hits[1].t));
      return;
    }
    const best = hits[0].t;
    let html = topicCard(best);
    const more = hits.slice(1,4).filter(r=>r.s > hits[0].s*0.3);
    if(more.length){
      html += '<p class="as-more">Passt auch dazu: '+more.map(r=>'<a href="'+link(r.t)+'">'+r.t.chip+' <span style="opacity:.6">('+r.t.lvlName+')</span></a>').join(" · ")+'</p>';
    }
    add("bot", html);
  }

  const isOpen = () => panel.style.display !== "none";
  function closePanel(){
    panel.style.display = "none";
    fab.classList.remove("open");
    fab.setAttribute("aria-label","Grammatik-Assistent öffnen");
  }
  function openPanel(){
    panel.style.display = "flex";
    fab.classList.add("open");
    fab.setAttribute("aria-label","Grammatik-Assistent schließen");
    if(!log.children.length){
      add("bot","Hallo! Ich bin dein Grammatik-Assistent. Ich kenne alle <b>"+DATA.length+" Themen</b> dieser Seite und erkläre sie dir in einfacher Sprache.<br>Stell mir einfach eine Frage.");
      chips.innerHTML = SUGG.map(s=>'<button class="as-chip">'+s+'</button>').join("");
      chips.querySelectorAll(".as-chip").forEach(b=>b.addEventListener("click",()=>{
        add("me", b.textContent); answer(b.textContent); chips.innerHTML="";
      }));
    }
    setTimeout(()=>{ const i=document.getElementById("as-in"); if(i) i.focus(); },80);
  }
  fab.addEventListener("click", e => { e.stopPropagation(); isOpen() ? closePanel() : openPanel(); });
  document.getElementById("as-close").addEventListener("click", e => { e.stopPropagation(); closePanel(); });
  // Escape schließt, Klick außerhalb schließt
  document.addEventListener("keydown", e => { if(e.key==="Escape" && isOpen()) closePanel(); });
  document.addEventListener("click", e => {
    if(isOpen() && !e.target.closest("#as-panel") && !e.target.closest("#as-fab")) closePanel();
  });
  document.getElementById("as-form").addEventListener("submit", e=>{
    e.preventDefault();
    const inp = document.getElementById("as-in");
    const v = inp.value.trim(); if(!v) return;
    add("me", v.replace(/</g,"&lt;")); inp.value=""; chips.innerHTML="";
    setTimeout(()=>answer(v), 180);
  });
})();

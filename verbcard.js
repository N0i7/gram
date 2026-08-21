/* FLOß – Konjugationstabellen erzeugen und als Karte anzeigen */
(function(){
  const V = window.VERBS || [];
  if(!V.length) return;
  const PRON = ["ich","du","er/sie/es","wir","ihr","sie/Sie"];

  function stemOf(inf){
    if(/eln$|ern$/.test(inf)) return inf.slice(0,-1);
    return inf.replace(/en$/,"");
  }
  function needsE(st){ return /(t|d|chn|ffn|gn|dm|tm)$/.test(st); }
  function sZ(st){ return /(s|ß|z|x)$/.test(st); }

  /* Präsens */
  function praesens(o){
    if(o.f && o.f.pr) return o.f.pr.slice();
    const base = o.refl ? o.v.replace(/^sich /,"") : o.v;
    const core = o.sep ? base.slice(o.sep.length) : base;
    const st = stemOf(core);
    const e  = needsE(st);
    let du = o.du || (sZ(st) ? st+"t" : st+(e?"est":"st"));
    let er = o.er || st+(e?"et":"t");
    const ihr = st+(e?"et":"t");
    return [st+"e", du, er, core, ihr, core];
  }
  /* Präteritum */
  function praeteritum(o){
    if(o.f && o.f.pt) return o.f.pt.slice();
    const base = o.refl ? o.v.replace(/^sich /,"") : o.v;
    const core = o.sep ? base.slice(o.sep.length) : base;
    if(o.w || !o.prt){                      // schwach
      const st = stemOf(core);
      const t = st + (needsE(st)?"ete":"te");
      return [t, t+"st", t, t+"n", t+"t", t+"n"];
    }
    const p = o.prt;                        // stark
    const du = p + (sZ(p) ? "est" : "st");
    const ihr = p + (/(t|d)$/.test(p) ? "et" : "t");
    return [p, du, p, p+"en", ihr, p+"en"];
  }
  /* Partizip II */
  function partizip(o){
    if(o.pp) return o.pp;
    const base = o.refl ? o.v.replace(/^sich /,"") : o.v;
    if(o.sep){
      const core = base.slice(o.sep.length);
      const st = stemOf(core);
      return o.sep + (o.noge ? "" : "ge") + st + (needsE(st)?"et":"t");
    }
    if(o.noge || /^(be|emp|ent|er|ge|miss|ver|zer)/.test(base)){
      const st = stemOf(base);
      return st + (needsE(st)?"et":"t");
    }
    const st = stemOf(base);
    return "ge" + st + (needsE(st)?"et":"t");
  }

  function row(pron, form, o, mode){
    let f = form;
    if(o.sep && mode!=="pp") f = form + " … " + o.sep;
    if(o.refl){
      const r = {0:"mich",1:"dich",2:"sich",3:"uns",4:"euch",5:"sich"};
      f = form.replace(/ … /," … ");
      f = f + "";
    }
    return "<tr><td>"+pron+"</td><td><b>"+f+"</b></td></tr>";
  }

  window.verbCard = function(o){
    const pr = praesens(o), pt = praeteritum(o), pp = partizip(o);
    const refl = o.refl ? ["mich","dich","sich","uns","euch","sich"] : null;
    const fmt = (arr,i) => {
      let s = arr[i];
      if(refl) s = s + " " + refl[i];
      if(o.sep) s = s + " … " + o.sep;
      return s;
    };
    const rows = i => "<tr><td>"+PRON[i]+"</td><td><b>"+fmt(pr,i)+"</b></td><td><b>"+fmt(pt,i)+"</b></td></tr>";
    const perf = o.aux==="ist" ? "ist "+pp : "hat "+pp;
    const type = o.f ? "unregelmäßig · irregular"
               : (o.w||!o.prt ? "regelmäßig · regular" : "unregelmäßig · irregular");
    return '<div class="vc">'+
      '<div class="vc-head"><span class="vc-inf">'+o.v+'</span>'+
      '<span class="vc-en">'+o.en+'</span>'+
      '<span class="vc-type">'+type+(o.sep?' · trennbar · separable':'')+(o.refl?' · reflexiv':'')+'</span></div>'+
      '<table class="vc-tab"><tr><th>&nbsp;</th><th>Präsens<span class="en">present</span></th>'+
      '<th>Präteritum<span class="en">simple past</span></th></tr>'+
      [0,1,2,3,4,5].map(rows).join("")+'</table>'+
      '<div class="vc-perf"><span>Perfekt <span class="en">· present perfect</span></span>'+
      '<b>'+perf+'</b></div>'+
      '<div class="vc-ex">Beispiel: <i>Ich '+fmt(pr,0)+'. · Gestern '+fmt(pt,0).replace(/^(\S+)/,"$1")+'. · Ich '+perf.replace(/^(hat|ist)/,m=>m==="hat"?"habe":"bin")+'.</i></div>'+
      (o.note?'<div class="vc-note">'+o.note+'</div>':'')+
      '</div>';
  };

  /* Nachschlagen: Infinitiv oder Form */
  const MAP = {};
  V.forEach(o=>{ MAP[o.v.toLowerCase()] = o; if(o.refl) MAP[o.v.replace(/^sich /,"").toLowerCase()] = o; });
  window.findVerb = s => MAP[String(s||"").trim().toLowerCase()] || null;
  window.VERB_MAP = MAP;

  /* Popup */
  let ov;
  window.showVerb = function(name){
    const o = window.findVerb(name); if(!o) return;
    if(!ov){
      ov = document.createElement("div");
      ov.className = "vc-overlay"; ov.id = "vc-overlay";
      ov.style.display = "none";
      ov.innerHTML = '<div class="vc-box"><button class="vc-close" aria-label="Schließen">×</button><div id="vc-body"></div></div>';
      document.body.appendChild(ov);
      ov.addEventListener("click", e=>{ if(e.target===ov || e.target.classList.contains("vc-close")) hide(); });
      document.addEventListener("keydown", e=>{ if(e.key==="Escape" && ov.style.display!=="none") hide(); });
    }
    document.getElementById("vc-body").innerHTML = window.verbCard(o);
    ov.style.display = "flex";
  };
  function hide(){ if(ov) ov.style.display = "none"; }

  /* Verben im Text klickbar machen */
  function linkify(){
    const zones = document.querySelectorAll(".vbox li, .card td, .topic .ex");
    zones.forEach(z=>{
      if(z.dataset.vl) return; z.dataset.vl = "1";
      [...z.childNodes].forEach(n=>{
        if(n.nodeType!==3) return;
        const txt = n.nodeValue;
        if(!txt || txt.length>200) return;
        const re = /\b(sich\s+)?([a-zäöüß]{3,20}(?:en|ern|eln))\b/g;
        let m, last=0, frag=null;
        while((m = re.exec(txt))){
          const cand = (m[1]?"sich ":"")+m[2];
          const o = window.findVerb(cand) || window.findVerb(m[2]);
          if(!o) continue;
          if(!frag) frag = document.createDocumentFragment();
          frag.appendChild(document.createTextNode(txt.slice(last, m.index)));
          const a = document.createElement("span");
          a.className = "vlink"; a.textContent = m[0];
          a.title = "Konjugation von "+o.v+" anzeigen";
          a.addEventListener("click", ev=>{ ev.stopPropagation(); window.showVerb(o.v); });
          frag.appendChild(a);
          last = m.index + m[0].length;
        }
        if(frag){
          frag.appendChild(document.createTextNode(txt.slice(last)));
          n.parentNode.replaceChild(frag, n);
        }
      });
    });
  }
  window.linkifyVerbs = linkify;
  if(document.readyState!=="loading") setTimeout(linkify,120);
  else document.addEventListener("DOMContentLoaded", ()=>setTimeout(linkify,120));
})();

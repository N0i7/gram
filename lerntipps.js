/* FLOß Grammatik – "Lerntipps"-Seite
   Rendert alle Karten aus lerntipps-daten.js
   (window.LERNTIPPS_META / window.LERNTIPPS_TABLES). Gleiche Logik wie
   unnuetzes-wissen.js und referenz.js, nur auf eigene Datenquelle umgestellt. */
(function(){
  const META = window.LERNTIPPS_META || [];

  document.getElementById("chipbar").innerHTML =
    META.map(m=>'<a href="#'+m.id+'">'+m.chip+'</a>').join("");

  const root = document.getElementById("topics");
  let html = "", lastGroup = null;
  META.forEach(m=>{
    if(m.group !== lastGroup){
      html += '<div class="ref-group">'+m.group+'</div>';
      lastGroup = m.group;
    }
    html += '<section class="topic" id="'+m.id+'"><h2>'+m.title+'</h2><p class="ten">'+m.titleEn+'</p>'+
      '<div class="card">'+(window.LERNTIPPS_TABLES[m.id]||'')+'</div></section>';
  });
  root.innerHTML = html;

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

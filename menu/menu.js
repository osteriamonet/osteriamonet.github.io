function caricaMenu(){
  try{ return JSON.parse(localStorage.getItem("menuData")) || {}; }catch{return {};}
}
function creaMenu(){
  const menu=caricaMenu(),c=document.getElementById("menu");
  c.innerHTML="";
  for(let cat in menu){
    const b=document.createElement("button");b.className="accordion-btn";b.textContent=cat.toUpperCase();
    const cont=document.createElement("div");cont.className="content";
    for(let sec in menu[cat]){
      const sb=document.createElement("button");sb.className="sub-btn";sb.textContent=sec;
      const sc=document.createElement("div");sc.className="content";
      menu[cat][sec].forEach(it=>{
        const d=document.createElement("div");d.className="menu-item";
        d.innerHTML=`<div><span class="item-name">${it.nome}</span>${it.descrizione?`<span class='item-desc'>${it.descrizione}</span>`:""}</div><span class='price'>${it.prezzo?`€${it.prezzo}`:""}</span>`;
        sc.appendChild(d);
      });
      sb.onclick=()=>{sc.style.display=sc.style.display==="block"?"none":"block";};
      cont.appendChild(sb);cont.appendChild(sc);
    }
    b.onclick=()=>{cont.style.display=cont.style.display==="block"?"none":"block";};
    c.appendChild(b);c.appendChild(cont);
  }
}
creaMenu();
window.addEventListener("storage",e=>{ if(e.key==="menuData"||e.key==="menuData_lastUpdate")creaMenu(); });

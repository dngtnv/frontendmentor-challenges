window.addEventListener("load",(()=>{const e=document.querySelector("body"),t=document.querySelector("nav"),o=document.querySelector(".open-btn"),c=document.querySelector(".close-btn"),r=document.querySelector(".hamburger-overlay"),s=(document.querySelector(".hero-bg"),document.querySelector(".prev")),n=document.querySelector(".next"),l=document.querySelector(".hero-bg"),i=document.querySelectorAll(".slide-item"),a=(document.querySelector(".hero-heading"),document.querySelector(".hero-text"),["hero_1","hero_2","hero_3"]);o.addEventListener("click",(()=>{t.classList.add("open"),r.classList.add("overlay_visible"),e.classList.add("nav-open-noscroll")})),c.addEventListener("click",(()=>{t.removeAttribute("class"),r.classList.remove("overlay_visible"),e.removeAttribute("class")})),r.addEventListener("click",(()=>{t.removeAttribute("class"),r.classList.remove("overlay_visible"),e.removeAttribute("class")}));const d=e=>{let t=0,o=0;a.forEach((e=>{l.classList.contains(e)&&(o=a.indexOf(e))})),t=1===e?(o+1)%a.length:0===o?a.length-1:o-1,l.classList.remove(a[o]),l.classList.add(a[t]),i.forEach((e=>{let o=0;if(parseInt(e.dataset.index)===t){!function t(){o<1&&(o+=.5,setTimeout((function(){t()}),100)),e.style.opacity=o}(),e.classList.add("active-item")}else e.classList.remove("active-item"),e.removeAttribute("style")}))};s.addEventListener("click",(()=>{d(-1)})),n.addEventListener("click",(()=>{d(1)})),document.body.onkeydown=function(e){switch(e.keyCode){case 37:d(-1);break;case 39:d(1)}}}));
//# sourceMappingURL=script.js.map
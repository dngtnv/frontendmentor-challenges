const body=document.querySelector("body"),navLinks=document.querySelector("nav"),openBtn=document.querySelector(".open-btn"),closeBtn=document.querySelector(".close-btn"),overlay=document.querySelector(".hamburger-overlay"),heroBg=document.querySelector(".hero-bg"),prevBtn=document.querySelector(".prev"),nextBtn=document.querySelector(".next"),heroBackground=document.querySelector(".hero-bg"),slideItem=document.querySelectorAll(".slide-item"),heading=document.querySelector(".hero-heading"),text=document.querySelector(".hero-text"),background=["hero_1","hero_2","hero_3"];openBtn.addEventListener("click",(()=>{navLinks.classList.add("open"),overlay.classList.add("overlay_visible"),body.classList.add("nav-open-noscroll")})),closeBtn.addEventListener("click",(()=>{navLinks.removeAttribute("class"),overlay.classList.remove("overlay_visible"),body.removeAttribute("class")})),overlay.addEventListener("click",(()=>{navLinks.removeAttribute("class"),overlay.classList.remove("overlay_visible"),body.removeAttribute("class")}));const handleChange=e=>{let t=0,o=0;background.forEach((e=>{heroBackground.classList.contains(e)&&(o=background.indexOf(e))})),t=1===e?(o+1)%background.length:0===o?background.length-1:o-1,heroBackground.classList.remove(background[o]),heroBackground.classList.add(background[t]),slideItem.forEach((e=>{let o=0;if(parseInt(e.dataset.index)===t){!function t(){o<1&&(o+=.5,setTimeout((function(){t()}),100)),e.style.opacity=o}(),e.classList.add("active-item")}else e.classList.remove("active-item"),e.removeAttribute("style")}))};prevBtn.addEventListener("click",(()=>{handleChange(-1)})),nextBtn.addEventListener("click",(()=>{handleChange(1)})),document.body.onkeydown=function(e){switch(e.keyCode){case 37:handleChange(-1);break;case 39:handleChange(1)}};
//# sourceMappingURL=script.js.map
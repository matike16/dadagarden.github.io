import{_ as S,i as f,g as y,r as q,o as k,h as w,w as I,u as g,b as p,j as d,a as x}from"./app-CT64SQ9Y.js";import{l as _,i as v,F as m}from"./index.es-CzBEq18m.js";import{e as h}from"./emitter-E5P-NQ8u.js";const N={__name:"ComponentChange",setup(C,{expose:u}){u(),_.add(v);const t=f(!1),l=()=>{const n=document.querySelector(".vp-blog-hero-image"),s=document.querySelector(".vp-blog-hero-title"),o=document.querySelector(".vp-blog-hero-description"),e=document.querySelector(".component-button1"),r=document.querySelector(".component-page");if(t.value)n&&(n.style.display=""),s&&(s.style.display=""),o&&(o.style.display=""),e&&(e.style.display=""),r&&r.remove();else if(n&&(n.style.display="none"),s&&(s.style.display="none"),o&&(o.style.display="none"),e&&(e.style.display="none"),!r){const a=document.createElement("div");a.className="component-page",a.innerHTML=`
            <div class="component-panel" id="panel1"></div>
            <div class="component-panel" id="panel2">模块开发中...</div>
            <div class="component-panel" id="panel3">模块开发中...</div>
            <div class="component-panel" id="panel4">模块开发中...</div>
            `,document.querySelector(".vp-blog-mask").appendChild(a),h.emit("panel1-inserted")}t.value=!t.value},c=()=>{(()=>{const o=document.querySelector(".vp-blog-mask");if(o&&!document.querySelector(".component-button")){const e=document.createElement("div");e.className="component-button";const r=p(m,{icon:["fas","fa-layer-group"]});d(r,e),e.addEventListener("click",()=>{l();const a=t.value?["fas","fa-xmark"]:["fas","fa-layer-group"],b=p(m,{icon:a});d(b,e)}),o.appendChild(e)}})(),g().beforeEach(()=>{setTimeout(()=>{c()},50)})};y(c);const i={isToggled:t,toggleElements:l,insertComponentChange:c,onMounted:y,ref:f,get useRouter(){return g},get library(){return _},get fas(){return v},get FontAwesomeIcon(){return m},createVNode:p,render:d,get emitter(){return h}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},E=x("div",{class:"component-change"},null,-1);function T(C,u,t,l,c,i){const n=q("ClientOnly");return k(),w(n,null,{default:I(()=>[E]),_:1})}const F=S(N,[["render",T],["__file","ComponentChange.vue"]]);export{F as default};
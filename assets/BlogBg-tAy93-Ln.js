import{l as r,h as d,n as p,_,r as u,o as f,i as g,w as m,a as v}from"./app-CSNcwRyo.js";const B=r({__name:"BlogBg",setup(c,{expose:s}){s();const n=()=>{if(!document.getElementById("dada_BlogBg")){const l=document.createElement("div");l.id="dada_BlogBg",document.body.appendChild(l),[{type:"circle",top:"10vh",left:"5vw"},{type:"triangle",top:"30vh",left:"85vw"},{type:"square",top:"60vh",left:"5vw"},{type:"circle1",top:"60vh",left:"85vw"}].forEach(t=>{const e=document.createElement("div");if(e.className="random-shape",e.style.top=t.top,e.style.left=t.left,e.style.animationDuration="30s",t.type==="circle")e.classList.add("circle");else if(t.type==="triangle"){const a=document.createElement("div");a.className="triangle",e.classList.add("triangleDiv"),e.appendChild(a)}else t.type==="square"?e.classList.add("square"):t.type==="circle1"&&e.classList.add("circle1");l.appendChild(e)})}};d(()=>{p(()=>{console.log("执行背景美化"),n()})});const o={BlogBg:n};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),y={ref:"dada_BlogBg"};function h(c,s,n,o,l,i){const t=u("ClientOnly");return f(),g(t,null,{default:m(()=>[v("div",y,null,512)]),_:1})}const w=_(B,[["render",h],["__file","BlogBg.vue"]]);export{w as default};

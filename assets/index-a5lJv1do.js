import{l as v,u as x,z as y,A as k,g as b,_ as F,o as l,c as u,F as Y,x as B,a as m,B as D}from"./app-D1wTL8R-.js";const w=v({__name:"index",setup($,{expose:i}){i();const r=x(),a=y(),n=k(a.value).items.sort((e,c)=>e.info.d-c.info.d).map(e=>e.info),d=b(()=>{const e=new Date(n[0].d).getFullYear(),c=new Date(n[n.length-1].d).getFullYear(),h=[];for(let o=e;o<=c;o++)for(let s=1;s<=12;s++){const g=n.filter(C=>{const f=new Date(C.d);return f.getFullYear()===o&&f.getMonth()===s-1}).length;h.push({year:o,month:s,counts:g})}return h});function t(e){return e?(e>10&&(e=10),e):0}function p(e){e.counts&&r.push({path:"/heatmap/",query:{date:`${e.year}/${e.month}`}})}const _={router:r,articles:a,postList:n,heatmaps:d,getCountColor:t,handleClick:p};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),z={class:"heatmap"},A={class:"heatmap-inner"},L=["aria-label","onClick"];function P($,i,r,a,n,d){return l(),u("div",z,[(l(!0),u(Y,null,B(a.heatmaps,t=>(l(),u("div",{class:"heatmap-item",key:`${t.year}-${t.month}`},[m("div",A,[m("div",{class:D(`bg-primary-${a.getCountColor(t.counts)}`),"data-balloon-pos":"up","aria-label":t.counts?`${t.year}-${t.month}
Post: ${t.counts}`:`${t.year}-${t.month}`,onClick:p=>a.handleClick(t)},null,10,L)])]))),128))])}const j=F(w,[["render",P],["__scopeId","data-v-42032ea3"],["__file","index.vue"]]);export{j as default};
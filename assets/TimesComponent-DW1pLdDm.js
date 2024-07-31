import{_ as Z,f as p,h as k,r as A,o as K,i as X,w as E,u as O,b as m,k as v,a as D}from"./app-BLkCsc4X.js";import{l as Y,i as f,F as L}from"./index.es-BCDO6LlI.js";const j={__name:"TimesComponent",setup(W,{expose:C}){C(),Y.add(f);const r=p(!1),u=p([]);let l=-1;function c(){const o=new Date,t=("0"+o.getHours()).slice(-2),e=("0"+o.getMinutes()).slice(-2),i=("0"+o.getSeconds()).slice(-2),n=`${t}:${e}:${i}`,s={year:"numeric",month:"long",day:"numeric",weekday:"long"},a=o.toLocaleDateString("zh-CN",s),I=document.getElementById("currentTime"),S=document.getElementById("currentDate");I&&S&&(I.innerHTML=n,S.innerHTML=a,setTimeout(c,1e3))}const d=()=>{const o=document.querySelector(".vp-blog-hero-image"),t=document.querySelector(".vp-blog-hero-title"),e=document.querySelector(".vp-blog-hero-description"),i=document.querySelector(".component-times"),n=document.querySelector(".component-button");if(r.value)o&&(o.style.display=""),t&&(t.style.display=""),e&&(e.style.display=""),n&&(n.style.display=""),i&&i.remove();else if(o&&(o.style.display="none"),t&&(t.style.display="none"),e&&(e.style.display="none"),n&&(n.style.display="none"),!i){const s=document.createElement("div");s.className="component-times",s.innerHTML=`
        <div id="currentTime"></div>
        <div id="currentDate"></div>
        <div class="hitokoto-content">
          <div class="Btn-out">
            <div id="hitokotoBtn"></div>
          </div>
          <div class="hitokoto-out">
            <span class="point">[ </span><span id="hitokoto"></span><span class="point"> ]</span>
          </div>
          <div class="author-content">
            —— <span id="author"></span> ——
          </div>
        </div>
      `,document.querySelector(".vp-blog-mask").appendChild(s),c(),g();const a=document.getElementById("hitokotoBtn");a.addEventListener("click",()=>{a.classList.add("rotate"),g(),setTimeout(()=>{a.classList.remove("rotate")},500)});const I=m(L,{icon:["fas","rotate"]});v(I,a)}r.value=!r.value},g=()=>{const o=document.getElementById("hitokoto"),t=document.getElementById("author");if(o&&t){let e;do e=Math.floor(Math.random()*u.value.length);while(e===l);const{text:i,author:n}=u.value[e];o.innerHTML=i,t.innerHTML=n,l=e}},b=()=>{const o=()=>{const e=document.querySelector(".vp-blog-mask");if(e&&!document.querySelector(".component-button1")){const i=document.createElement("div");i.className="component-button1";const n=m(L,{icon:["fas","fa-clock"]});v(n,i),i.addEventListener("click",()=>{d();const s=r.value?["fas","fa-xmark"]:["fas","fa-clock"],a=m(L,{icon:s});v(a,i)}),e.appendChild(i)}};o();const t=O();t&&typeof t.beforeEach=="function"&&t.beforeEach(()=>{setTimeout(()=>{o()},50)})},h=p([]),y=async()=>{try{const t=await(await fetch(new URL("data:text/markdown;base64,LS0tCnRpdGxlOiDkuIDoqIDmkZjlvZUKZGF0ZTogMjAyNC0wNy0zMApjYXRlZ29yeTog5YWz5LqOCmljb246IGhlYXJ0CnRhZ3M6CiAgLSDkuIDoqIDnvo7lj6UKY292ZXI6IC9hc3NldHMvaW1hZ2VzL+S4gOiogC5qcGcKZXhjZXJwdDog5ZOS5ZOS55qE5Liq5Lq65LiA6KiA576O5Y+l5pGY5b2V77yM55So5LqO5a2Y5pS+5bmz5pe25LiA5Lqb6ZqP56yU44CB5paH6KiA5paH44CB6K+t5b2V5ZKM5ZCN5Lq65ZCN6KiA44CC6K+l6aG15Y+l5a2Q5bey5o6l5YWl57uE5Lu277yM5a6e546w5LqG5Zyo6aaW6aG155qE5LiA6KiA57uE5Lu25Lit6Ieq5Yqo5ZCM5q2l5bGV56S644CCCi0tLQoKPiBbIXRpcF0KPiDov5nmmK/miJHnmoTkuKrkurrkuIDoqIDnvo7lj6XmkZjlvZXvvIzmraTpobXkuK3nmoTlj6XlrZDlsIboh6rliqjlkIzmraXliLDpppbpobXnmoTkuIDoqIDnu4Tku7bkuK3jgIIKCiMjIOS4reWbveWPpOWFuAoKPEhpdG9rb3RvIHRleHQ9IueLrOWtpuiAjOaXoOWPi++8jOWImeWtpOmZi+iAjOWvoemXu+OAgiIgYXV0aG9yPSLlrZTlrZAiIC8+CjxIaXRva290byB0ZXh0PSLlpKnooYzlgaXvvIzlkJvlrZDku6Xoh6rlvLrkuI3mga/jgIIiIGF1dGhvcj0i44CK5piT57uP44CLIiAvPgo8SGl0b2tvdG8gdGV4dD0i5a2m6ICM5LiN5oCd5YiZ572U77yM5oCd6ICM5LiN5a2m5YiZ5q6G44CCIiBhdXRob3I9IuWtlOWtkCIgLz4KPEhpdG9rb3RvIHRleHQ9IuS4ieS6uuihjO+8jOW/heacieaIkeW4iOeEieOAgiIgYXV0aG9yPSLlrZTlrZAiIC8+CjxIaXRva290byB0ZXh0PSLkuI3ku6Xop4Tnn6nvvIzkuI3og73miJDmlrnlnIbjgIIiIGF1dGhvcj0i44CK5a2f5a2Q44CLIiAvPgo8SGl0b2tvdG8gdGV4dD0i55+l6ICF5LiN5oOR77yM5LuB6ICF5LiN5b+n77yM5YuH6ICF5LiN5oOn44CCIiBhdXRob3I9IuOAiuiuuuivreOAiyIgLz4KPEhpdG9rb3RvIHRleHQ9Iua4qeaVheiAjOefpeaWsO+8jOWPr+S7peS4uuW4iOefo+OAgiIgYXV0aG9yPSLlrZTlrZAiIC8+CjxIaXRva290byB0ZXh0PSLpnZ7mt6Hms4rml6Dku6XmmI7lv5fvvIzpnZ7lroHpnZnml6Dku6Xoh7Tov5zjgIIiIGF1dGhvcj0i6K+46JGb5LquIiAvPgo8SGl0b2tvdG8gdGV4dD0i6K+75Lmm56C05LiH5Y2377yM5LiL56yU5aaC5pyJ56We44CCIiBhdXRob3I9IuadnOeUqyIgLz4KPEhpdG9rb3RvIHRleHQ9Iua1t+e6s+eZvuW3ne+8jOacieWuueS5g+Wkp++8m+Wjgeeri+WNg+S7nu+8jOaXoOassuWImeWImuOAgiIgYXV0aG9yPSLmnpfliJnlvpAiIC8+CjxIaXRva290byB0ZXh0PSLot6/mvKvmvKvlhbbkv67ov5zlha7vvIzlkL7lsIbkuIrkuIvogIzmsYLntKLjgIIiIGF1dGhvcj0i5bGI5Y6fIiAvPgoKIyMg5oqA5pyv6aKG5Z+fCgo8SGl0b2tvdG8gdGV4dD0i5Lu75L2V5Y+v5Lul55Sx5Lq657G76YCa6L+H5bi46KeE56iL5bqP5a6M5oiQ55qE5LqL5oOF77yM6YO95LiN6Zq+5p6E5bu65LiA5Y+w5py65Zmo5p2l5a6M5oiQ44CCIiBhdXRob3I9IuiJvuS8psK35Zu+54G1IiAvPgo8SGl0b2tvdG8gdGV4dD0i6K+35rGC5a695oGV5q+U6I635b6X6K645Y+v6KaB5a655piT44CCIiBhdXRob3I9IuagvOiVvuS4ncK36ZyN54+AIiAvPgo8SGl0b2tvdG8gdGV4dD0i5L2g55qE5bel5L2c5bCG5Y2g5o2u5L2g55Sf5rS755qE5b6I5aSn5LiA6YOo5YiG77yM5ZSv5LiA55yf5q2j5oSf5Yiw5ruh6Laz55qE5pa55byP5piv5YGa5L2g6K6k5Li65piv5Lyf5aSn55qE5bel5L2c44CC6ICM5YGa5Lyf5aSn5bel5L2c55qE5ZSv5LiA6YCU5b6E5piv54Ot54ix5L2g5omA5YGa55qE44CCIiBhdXRob3I9IuWPsuiSguWkq8K35LmU5biD5pavIiAvPgo8SGl0b2tvdG8gdGV4dD0i5Lu75L2V5oqA5pyv5Zyo5ZWG5Lia5Lit5bqU55So55qE56ys5LiA6KeE5YiZ5piv77yM6Ieq5Yqo5YyW5bqU55So5LqO6auY5pWI5pON5L2c5bCG5pS+5aSn5pWI546H44CC5aaC5p6c5bqU55So5LqO5L2O5pWI5pON5L2c77yM5a6D5bCG5pS+5aSn5L2O5pWI44CCIiBhdXRob3I9IuavlOWwlMK355uW6IyoIiAvPgo8SGl0b2tvdG8gdGV4dD0i56m66LCI5piv5buJ5Lu355qE77yM57uZ5oiR55yL5L2g55qE5Luj56CB44CCIiBhdXRob3I9Iuael+e6s+aWr8K35omY55Om5YW5IiAvPgo8SGl0b2tvdG8gdGV4dD0i6L+H5pep5LyY5YyW5piv5LiH5oG25LmL5rqQ44CCIiBhdXRob3I9IuWUkOe6s+W+t8K35YWL5Yqq54m5IiAvPgo8SGl0b2tvdG8gdGV4dD0i6aKE5rWL5pyq5p2l55qE5pyA5aW95pa55rOV5piv5Yib6YCg5a6D44CCIiBhdXRob3I9IueOm+S4veiOjsK35qKF6IC25bCUIiAvPgo8SGl0b2tvdG8gdGV4dD0i5YiG5p6Q5byV5pOO5rKh5pyJ5Yib6YCg5Lu75L2V5Lic6KW/55qE6YeO5b+D44CC5a6D6IO95YGa55qE5Y+q5piv5oiR5Lus55+l6YGT5aaC5L2V5ZG95Luk5a6D5omn6KGM55qE5LqL5oOF44CCIiBhdXRob3I9IumYv+i+vsK35rSb6IqZ6I6x5pavIiAvPgo8SGl0b2tvdG8gdGV4dD0i572R57uc5pyA5Yid55qE55CG5b+15piv5LiA5Liq5Y2P5L2c56m66Ze077yM5L2g5Y+v5Lul6YCa6L+H5YiG5Lqr5L+h5oGv5p2l6L+b6KGM5Lqk5rWB44CCIiBhdXRob3I9IuiSguWnhsK35Lyv57qz5pavLeadjiIgLz4KPEhpdG9rb3RvIHRleHQ9IuacuuWZqOiDveWQpuaAneiAg+eahOmXrumimO+8jOS4jua9nOiJh+iDveWQpua4uOazs+eahOmXrumimOS4gOagt+aXoOWFs+e0p+imgeOAgiIgYXV0aG9yPSLoib7lhbnmoLzCt+i/quenkeaWr+W9uyIgLz4=",import.meta.url))).text(),e=G(t);h.value=e,u.value=[...u.value,...e]}catch(o){console.error("Error fetching markdown hitokotos:",o)}},G=o=>{const t=/<Hitokoto text="(.+?)" author="(.+?)" \/>/g,e=[];let i;for(;(i=t.exec(o))!==null;)e.push({text:i[1],author:i[2]});return e};k(()=>{b(),y()});const q={isToggled:r,hitokotoList:u,get previousHitokotoIndex(){return l},set previousHitokotoIndex(o){l=o},showTime:c,toggleElements:d,displayHitokoto:g,insertComponentTimes:b,markdownHitokotos:h,fetchMarkdownHitokotos:y,parseMarkdownHitokotos:G,onMounted:k,ref:p,get useRouter(){return O},get library(){return Y},get fas(){return f},get FontAwesomeIcon(){return L},createVNode:m,render:v};return Object.defineProperty(q,"__isScriptSetup",{enumerable:!1,value:!0}),q}},M=D("div",{class:"times-component"},null,-1);function P(W,C,r,u,l,c){const d=A("ClientOnly");return K(),X(d,null,{default:E(()=>[M]),_:1})}const B=Z(j,[["render",P],["__file","TimesComponent.vue"]]);export{B as default};

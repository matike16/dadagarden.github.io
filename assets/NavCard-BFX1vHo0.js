import{_ as f,r as s,o as n,i,w as e,c as g,F as h,y,b as t,a as d,d as w,z as _}from"./app-DN8nBhqY.js";const v={name:"NavCard",props:{arr:{type:String,default:"[]"}},data(){return{cardArr:this.arr?JSON.parse(this.arr):[],type:"success"}},methods:{gotoSite(a){window.open(a,"_blank")}}},k=["src","alt"],C={style:{"text-align":"right"}},N={style:{"font-size":"10px"}};function B(a,S,b,V,c,p){const l=s("el-col"),u=s("el-button"),r=s("el-row"),x=s("el-card");return n(),i(r,{gutter:30},{default:e(()=>[(n(!0),g(h,null,y(c.cardArr,(o,m)=>(n(),i(l,{xs:24,sm:12,md:12,lg:12,xl:12,key:m,style:{"margin-top":"20px",height:"100px",width:"100%",overflow:"auto"}},{default:e(()=>[t(x,{shadow:"never","body-style":{padding:"20px"}},{default:e(()=>[t(r,{class:"box-card-header"},{default:e(()=>[t(l,{xs:12,sm:12,md:12,lg:12,xl:12,style:{padding:"0px"}},{default:e(()=>[d("img",{style:{width:"30px",height:"30px","text-align":"left"},src:a.$withBase(o.icon),alt:o.title},null,8,k)]),_:2},1024),t(l,{xs:12,sm:12,md:12,lg:12,xl:12,style:{padding:"0px"}},{default:e(()=>[d("div",C,[t(u,{type:c.type,plain:"",onClick:$=>p.gotoSite(o.url)},{default:e(()=>[w(_(o.title),1)]),_:2},1032,["type","onClick"])])]),_:2},1024)]),_:2},1024),t(r,{class:"box-card-body"},{default:e(()=>[d("div",N,_(o.desc),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})}const A=f(v,[["render",B],["__file","NavCard.vue"]]);export{A as default};
import{o as n,b as l,d as e,e as f,r as u,m,f as b,A as x,j as p,t as _,h as i,F as y,B as N,y as k,x as g,C as A,n as C,p as V,i as w}from"./vendor.79648858.js";const B={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},L=e("path",{fill:"currentColor",d:"m21.677 14l-1.245-3.114A2.986 2.986 0 0 0 17.646 9h-4.092a3.002 3.002 0 0 0-1.544.428L7 12.434V18h2v-4.434l3-1.8v11.931l-3.462 5.194L10.202 30L14 24.303V11h3.646a.995.995 0 0 1 .928.629L20.323 16H26v-2Z"},null,-1),S=e("path",{fill:"currentColor",d:"M17.051 18.316L19 24.162V30h2v-6.162l-2.051-6.154l-1.898.632zM16.5 8A3.5 3.5 0 1 1 20 4.5A3.504 3.504 0 0 1 16.5 8zm0-5A1.5 1.5 0 1 0 18 4.5A1.502 1.502 0 0 0 16.5 3z"},null,-1),$=[L,S];function M(t,s){return n(),l("svg",B,$)}var z={name:"carbon-pedestrian",render:M};const D=f("user",()=>{const t=u(""),s=u(new Set),c=m(()=>Array.from(s.value)),a=m(()=>c.value.filter(o=>o!==t.value));function d(o){t.value&&s.value.add(t.value),t.value=o}return{setNewName:d,otherNames:a,savedName:t}}),Y={text:"4xl"},E={for:"my-modal"},F=g('<input type="checkbox" id="my-modal" class="modal-toggle"><div class="modal"><div class="modal-box relative"><h3 class="font-bold text-lg">Congratulations random Interner user!</h3><p class="pt-4 text-base">You&#39;ve found hidden modal test xD</p><div class="modal-action"><label for="my-modal" class="btn btn-sm">Yay!</label></div></div></div>',2),H=e("p",{class:"text-sm opacity-50"},[e("em",null,"Dynamic route")],-1),R={key:0,class:"text-sm mt-4"},j=e("span",{class:"opacity-75"},"AKA.",-1),K=b({props:{name:null},setup(t){const s=t,c=A(),a=D();return x(()=>{a.setNewName(s.name)}),(d,o)=>{const v=z,h=C("router-link");return n(),l("div",null,[e("div",Y,[e("label",E,[p(v,{class:"inline-block"})]),F]),e("p",null," Hi "+_(s.name),1),H,i(a).otherNames.length?(n(),l("p",R,[j,e("ul",null,[(n(!0),l(y,null,N(i(a).otherNames,r=>(n(),l("li",{key:r},[p(h,{to:`/hi/${r}`,replace:""},{default:V(()=>[w(_(r),1)]),_:2},1032,["to"])]))),128))])])):k("",!0),e("div",null,[e("button",{class:"btn btn-secondary btn-sm",m:"3 t6",text:"sm",onClick:o[0]||(o[0]=r=>i(c).back())}," Back ")])])}}});export{K as default};

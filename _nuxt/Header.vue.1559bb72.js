import h from"./Icon.7c03cbcd.js";import{f as i,o as a,c as m,j as p,a as o,ac as b,i as l,b as _,w}from"./entry.c8e79279.js";import{_ as x}from"./nuxt-link.4b450a3d.js";const k=/(^|[/\\])([^/\\]+?)(?=(\.[^.]+)?$)/;function u(s){var n;return(n=s.match(k))==null?void 0:n[2]}const y=""+new URL("exactpro-logo.0b46f73e.svg",import.meta.url).href,v=["src"],j=i({__name:"Logo",setup(s){const c=Object.fromEntries(Object.entries(Object.assign({})).map(([e,t])=>[u(e),t.default])).logo||y;return(e,t)=>(a(),m("img",{src:p(c),class:"w-40 h-16"},null,8,v))}}),C={class:"w-full backdrop-blur"},E={class:"relative"},$={class:"w-full flex justify-between items-center px-2 md:px-4"},O={class:"flex items-center"},B=o("span",{class:"px-2 py-1 rounded-lg bg-accent-700 text-gray-50 font-semibold text-sm"}," Docs ",-1),D=i({__name:"Header",props:{showContentTree:{type:Boolean}},emits:{"update:showContentTree"(s){return typeof s=="boolean"}},setup(s){const c=Object.fromEntries(Object.entries(Object.assign({})).map(([e,t])=>[u(e),t.default]))["header-bg"]??"";return(e,t)=>{const r=h,f=j,g=x;return a(),m("header",C,[o("div",E,[o("div",{class:"e-header__background",style:b({backgroundImage:`url(${p(c)})`})},null,4),o("div",$,[o("div",O,[o("button",{class:"w-7 h-w-7 text-white lg:hidden",onClick:t[0]||(t[0]=L=>e.$emit("update:showContentTree",!e.showContentTree))},[e.showContentTree?(a(),l(r,{key:0,name:"heroicons:x-mark",class:"w-full h-full"})):(a(),l(r,{key:1,name:"heroicons:bars-3",class:"w-full h-full"}))]),_(g,{to:"/",class:"flex items-center w-fit gap-2"},{default:w(()=>[_(f,{class:"w-40 m-2"}),B]),_:1})])])])])}}});export{D as _,y as a};
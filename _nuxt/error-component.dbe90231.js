import{o as l,c as m,n as E,g as f,u as s,d as a,_ as n}from"./entry.b701862c.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";const g={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:t}=c;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),o=r===404,u=t.statusMessage??(o?"Page Not Found":"Internal Server Error"),i=t.message||t.toString(),p=void 0,_=o?a(()=>n(()=>import("./error-404.4ae28b4b.js"),["./error-404.4ae28b4b.js","./nuxt-link.b3eea2f3.js","./entry.b701862c.js","./entry.10a17291.css","./_plugin-vue_export-helper.c27b6911.js","./error-404.0cd4f3dd.css"],import.meta.url).then(e=>e.default||e)):a(()=>n(()=>import("./error-500.0cdc48c1.js"),["./error-500.0cdc48c1.js","./entry.b701862c.js","./entry.10a17291.css","./_plugin-vue_export-helper.c27b6911.js","./error-500.748cb764.css"],import.meta.url).then(e=>e.default||e));return(e,d)=>(l(),m(s(_),E(f({statusCode:s(r),statusMessage:s(u),description:s(i),stack:s(p)})),null,16))}},h=g;export{h as default};
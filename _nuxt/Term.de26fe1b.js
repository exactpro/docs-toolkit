import{u as f}from"./states.c63faa92.js";import{u as d}from"./asyncData.5e3b2858.js";import{f as p,s as v,E as h,K as C,q as _,o as g,c as $,J as k,I as y,j as E}from"./entry.27b35f41.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";const B=p({__name:"Term",props:{term:{}},setup(n){const e=n,r=v(null),{model:t,isFocused:o,debugInfo:u}=f(),{data:l,error:s}=d(`term/${e.term}`,()=>h("_terms").where({$or:[{title:e.term},{alias:{$contains:e.term}}]}).findOne());s.value&&console.error(C({statusCode:404,statusMessage:`Term "${e.term}" not found`,cause:s.value.cause,unhandled:!1}));function a(){o.value=!0,u.value={desiredTerm:e.term},t.value={show:!0,ref:r.value,content:l}}function c(){o.value=!1}const m=_(()=>t.value.show&&t.value.ref===r.value);return(i,M)=>(g(),$("span",{ref_key:"el",ref:r,class:y(["underline transition-all",{"bg-accent-50 bg-opacity-25 rounded":E(m)}]),onMouseover:a,onMouseleave:c,onClick:a},[k(i.$slots,"default")],34))}});export{B as default};

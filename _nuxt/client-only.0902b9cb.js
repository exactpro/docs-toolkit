import{f as y,y as h,K as o,c as g,a as f,C as c,D as p}from"./entry.645c0e1e.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";const v=y({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(l,{slots:a,attrs:t}){const n=h(!1);return o(()=>{n.value=!0}),e=>{var r;if(n.value)return(r=a.default)==null?void 0:r.call(a);const s=a.fallback||a.placeholder;if(s)return s();const i=e.fallback||e.placeholder||"",d=e.fallbackTag||e.placeholderTag||"span";return g(d,t,i)}}}),u=new WeakMap;/*! @__NO_SIDE_EFFECTS__ */function b(l){if(u.has(l))return u.get(l);const a={...l};return a.render?a.render=(t,...n)=>{if(t.mounted$){const e=l.render(t,...n);return e.children===null||typeof e.children=="string"?f(e.type,e.props,e.children,e.patchFlag,e.dynamicProps,e.shapeFlag):c(e)}else return c("div",p(t.$attrs??t._.attrs,{key:"placeholder-key"}))}:a.template&&(a.template=`
      <template v-if="mounted$">${l.template}</template>
      <template v-else><div></div></template>
    `),a.setup=(t,n)=>{var s;const e=h(!1);return o(()=>{e.value=!0}),Promise.resolve(((s=l.setup)==null?void 0:s.call(l,t,n))||{}).then(i=>typeof i!="function"?{...i,mounted$:e}:(...d)=>{if(e.value){const r=i(...d);return r.children===null||typeof r.children=="string"?f(r.type,r.props,r.children,r.patchFlag,r.dynamicProps,r.shapeFlag):c(r)}else return c("div",p(n.attrs,{key:"placeholder-key"}))})},u.set(l,a),a}export{b as createClientOnly,v as default};
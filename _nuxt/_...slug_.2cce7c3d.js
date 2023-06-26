import{a as d,v as T,X as w,o as r,c as l,F as h,a1 as p,a2 as S,t as b,k as _,h as f,a3 as M,u as g,a4 as L,a5 as k,i,p as P,a6 as N,e as j,a7 as C,a8 as q,a9 as $,aa as D,ab as O,A as R,q as x,V as I}from"./entry.6554d7f3.js";import V from"./ContentRendererMarkdown.df003e8e.js";import A from"./Icon.0236c708.js";import{_ as H}from"./nuxt-link.aeb9a0d9.js";import F from"./ContentRenderer.50f9e1a5.js";/* empty css                          */import{u as U}from"./asyncData.4e57f78f.js";import{a as z}from"./states.168f862e.js";import{_ as G}from"./_plugin-vue_export-helper.c27b6911.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";import"./index.a6ef77ff.js";import"./Icon.vue.9262ab6f.js";const Q=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),B=(t,e)=>(n,o)=>(T(()=>t({...Q(n),...o.attrs},o)),()=>{var a,s;return e?(s=(a=o.slots).default)==null?void 0:s.call(a):null}),X={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},J=d({name:"Title",inheritAttrs:!1,setup:B((t,{slots:e})=>{var o,a,s;return{title:((s=(a=(o=e.default)==null?void 0:o.call(e))==null?void 0:a[0])==null?void 0:s.children)||null}})}),K=d({name:"Meta",inheritAttrs:!1,props:{...X,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:B(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),W=d({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,o;return(o=(n=e.slots).default)==null?void 0:o.call(n)}}),Y=d({__name:"PageMeta",props:{doc:null},setup(t){var o;const n=(o=w().exactproDocs.seo)==null?void 0:o.verificationMetaTags;return(a,s)=>{const u=J,c=K,m=W;return r(),l(m,null,{default:h(()=>[p(u,null,{default:h(()=>[S(b(t.doc?t.doc.title:""),1)]),_:1}),t.doc&&t.doc.description?(r(),l(c,{key:0,name:"description",content:t.doc.description},null,8,["content"])):_("",!0),(r(!0),f(L,null,M(g(n),(y,v)=>(r(),l(c,{key:v,name:y.name,content:y.content},null,8,["name","content"]))),128))]),_:1})}}}),Z={key:0,class:"flex justify-end gap-4 flex-wrap items-center"},tt=["href"],et=i("span",null,"Edit this page",-1),ot=["href"],nt=i("span",null,"Create issue",-1),at=d({__name:"GithubActions",props:{doc:null},setup(t){const e=t,n=w().exactproDocs.github,o=k(n.repoLink,"edit",n.branch,n.docsDir,e.doc._source,e.doc._file),a=k(n.repoLink,"/issues/new/choose");return(s,u)=>{const c=A;return g(n).repoLink?(r(),f("div",Z,[i("a",{href:g(o),class:"github-action-button"},[p(c,{class:"w-4 h-4 mr-2 text-primary",name:"heroicons:pencil-square-solid"}),et],8,tt),i("a",{href:g(a),class:"github-action-button"},[p(c,{class:"w-4 h-4 mr-2 text-error",name:"heroicons:chat-bubble-left-20-solid"}),nt],8,ot)])):_("",!0)}}}),rt={key:0,class:"mb-2"},st={class:"bg-secondary-100 text-gray-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"},it={key:1,class:"mb-2"},ct={class:"bg-secondary-100 text-gray-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"},dt={class:"text-xl font-bold"},ut={name:"EpLayoutSurroundDocCard"},lt=d({...ut,props:{doc:null,direction:null},setup(t){return(e,n)=>{const o=A,a=H;return r(),l(a,{to:t.doc._path,class:"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},{default:h(()=>[i("div",null,[t.direction==="before"?(r(),f("div",rt,[i("span",st,[p(o,{name:"ic:sharp-arrow-back-ios",class:"leading-4 mb-1"}),S("Previous ")])])):(r(),f("div",it,[i("span",ct,[S("Next "),p(o,{name:"ic:sharp-arrow-forward-ios",class:"leading-4 mb-1"})])])),i("h4",dt,b(t.doc.title),1),i("p",null,b(t.doc.description),1)])]),_:1},8,["to"])}}}),pt=d({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(t,e){const n=await C[t.name]().then(o=>o.default||o);return()=>R(n,e.attrs,e.slots)}}),mt=d({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=D("_route"),o=n===P()?N():n,a=j(()=>g(t.name)??o.meta.layout??"default");return()=>{const s=a.value&&a.value in C,u=o.meta.layoutTransition??q;return $(O,s&&u,{default:()=>$(pt,s&&{key:a.value,name:a.value,...e.attrs},e.slots).default()}).default()}}}),_t=d({name:"ContentPage",setup(){var o,a;const t=P(),e=z(),{data:n}=U("page-data"+t.path,async()=>{const s=x(t.path).findOne(),u=x().only(["_path","_draft","title","description","_partial"]).where({_partial:!1,_draft:!1}).findSurround(I(t.path),{before:1,after:1}),[c,m]=await Promise.all([s,u]);return{...c,before:m[0],after:m[1]}},"$z6pcnxOlsQ");return e.value=((a=(o=n.value)==null?void 0:o.body)==null?void 0:a.toc)??null,{doc:n}}});const ft={class:"px-4 print:px-8 mt-10 mb-96 print:mb-0"},gt={class:"mb-10"},ht={class:"justify-center grid sm:grid-cols-2 gap-8 items-start mt-32 print:hidden"},yt={key:1,class:"gevamu-prose w-screen"};function bt(t,e,n,o,a,s){const u=Y,c=V,m=lt,y=F,v=at,E=mt;return r(),f(L,null,[p(u,{doc:t.doc},null,8,["doc"]),p(E,null,{default:h(()=>[i("div",ft,[i("article",gt,[t.doc&&t.doc._type==="markdown"?(r(),l(y,{key:0,value:t.doc},{default:h(()=>[p(c,{value:t.doc,class:"gevamu-prose"},null,8,["value"]),i("nav",ht,[t.doc.before?(r(),l(m,{key:0,doc:t.doc.before,direction:"before"},null,8,["doc"])):_("",!0),t.doc.after?(r(),l(m,{key:1,doc:t.doc.after,direction:"after"},null,8,["doc"])):_("",!0)])]),_:1},8,["value"])):t.doc?(r(),f("div",yt,[i("h1",null,b(t.doc._dir.title)+" pages",1)])):_("",!0)]),t.doc?(r(),l(v,{key:0,doc:t.doc,class:"print:hidden"},null,8,["doc"])):_("",!0)])]),_:1})],64)}const Tt=G(_t,[["render",bt]]);export{Tt as default};

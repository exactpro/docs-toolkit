export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return {data:{"page-data/deployment/gitlab-pages":{_path:"\u002Fdeployment\u002Fgitlab-pages",_dir:"deployment",_draft:k,_partial:k,_locale:l,_empty:k,title:o,description:"To deploy your website using GitLab pages, create project for your docs website based on this template and follow official guide to configure GitLab CLI.",body:{type:"root",children:[{type:a,tag:"h1",props:{id:"4-gitlab-pages"},children:[{type:b,value:o}]},{type:a,tag:i,props:{},children:[{type:b,value:"To deploy your website using GitLab pages, create project for your docs website based on this template and follow "},{type:a,tag:m,props:{href:"https:\u002F\u002Fdocs.gitlab.com\u002Fee\u002Fuser\u002Fproject\u002Fpages\u002Fgetting_started\u002Fpages_ui.html",rel:[p],target:q},children:[{type:b,value:r}]},{type:b,value:" to configure GitLab CLI."}]},{type:a,tag:i,props:{},children:[{type:b,value:"You need to store static files in artifacts of your GitLab project and then configure pages to host static files from artifacts."}]},{type:a,tag:i,props:{},children:[{type:b,value:"Visit "},{type:a,tag:m,props:{href:"https:\u002F\u002Fdocs.gitlab.com\u002Fee\u002Fci\u002Fyaml\u002Fgitlab_ci_yaml.html",rel:[p],target:q},children:[{type:b,value:r}]},{type:b,value:" to find more details about GitLab CI configuration."}]},{type:a,tag:i,props:{},children:[{type:b,value:"GitLab CLI configuration example:"}]},{type:a,tag:s,props:{code:"image: node:16\nstages:\n  - build\nbuild-docs:\n  stage: build\n  script:\n    - npm ci\n    - npx nuxt generate\n  artifacts:\n    paths:\n      - dist\u002F*\n",language:"yaml",meta:null},children:[{type:a,tag:"pre",props:{},children:[{type:a,tag:s,props:{__ignoreMap:l},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:"image"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"node:16"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:"stages"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"  - "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:u}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:"build-docs"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"stage"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:u}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"script"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"npm ci"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"npx nuxt generate"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"artifacts"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"paths"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"      - "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"dist\u002F*"}]}]}]}]}]},{type:a,tag:i,props:{},children:[{type:b,value:"You probably need to configure prefix for your website, visit "},{type:a,tag:m,props:{href:"\u002Fcustomization"},children:[{type:b,value:"customization page"}]},{type:b,value:" for details."}]},{type:a,tag:"style",children:[{type:b,value:".ct-e65205{color:#98C379}\n.ct-44ed79{color:#ABB2BF}\n.ct-1da00c{color:#E06C75}"}]}],toc:{title:l,searchDepth:w,depth:w,links:[]}},_type:"markdown",_id:"content:4.deployment:5.gitlab-pages.md",_source:"content",_file:"4.deployment\u002F5.gitlab-pages.md",_extension:"md"},MqXYPBrS7q:"https:\u002Fgithub.com\u002Fexactpro\u002Fdocs-toolkit\u002Fedit\u002Fmaster\u002Fdocs"},prerenderedAt:void 0}}("element","text","span","ct-44ed79","div","line","ct-1da00c","ct-e65205","p",":",false,"","a","  ","4. GitLab pages","nofollow","_blank","official guide","code",": ","build","    - ",2))
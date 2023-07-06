export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A){return {data:{"page-data/deployment/github-pages":{_path:"\u002Fdeployment\u002Fgithub-pages",_dir:"deployment",_draft:l,_partial:l,_locale:o,_empty:l,title:u,description:"Check GitHub pages official guide to configure it properly.",body:{type:"root",children:[{type:a,tag:"h1",props:{id:"3-github-pages"},children:[{type:b,value:u}]},{type:a,tag:p,props:{},children:[{type:b,value:"Check GitHub pages "},{type:a,tag:v,props:{href:"https:\u002F\u002Fdocs.github.com\u002Fen\u002Fpages\u002Fgetting-started-with-github-pages\u002Fconfiguring-a-publishing-source-for-your-github-pages-site",rel:["nofollow"],target:"_blank"},children:[{type:b,value:"official guide"}]},{type:b,value:" to configure it properly."}]},{type:a,tag:p,props:{},children:[{type:b,value:"GitHub action example:"}]},{type:a,tag:w,props:{code:"name: Build & Deploy\n\non:\n  workflow_dispatch:\n  push:\n    branches:\n      - master\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout\n        uses: actions\u002Fcheckout@v1\n\n      - name: Use Node.js 16\n        uses: actions\u002Fsetup-node@v3\n        with:\n          node-version: 16\n\n      - name: Installing packages\n        run: npm ci\n\n      - name: Build Nuxt 3 static site\n        run: npx nuxt generate\n\n      - name: Deploy to GitHub Pages\n        uses: peaceiris\u002Factions-gh-pages@v3\n        if: github.ref == 'refs\u002Fheads\u002Fmaster'\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: .\u002Fdist\n",language:"yaml",meta:null},children:[{type:a,tag:"pre",props:{},children:[{type:a,tag:w,props:{__ignoreMap:o},children:[{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"Build & Deploy"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:x},children:[{type:b,value:"on"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"workflow_dispatch"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"push"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"branches"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"master"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:"jobs"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"build-and-deploy"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"runs-on"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"ubuntu-latest"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"steps"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"Checkout"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"actions\u002Fcheckout@v1"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"Use Node.js 16"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"actions\u002Fsetup-node@v3"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"node-version"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:x},children:[{type:b,value:"16"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"Installing packages"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:z}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"npm ci"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"Build Nuxt 3 static site"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:z}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"npx nuxt generate"}]}]},{type:a,tag:e,props:{class:f},children:[]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"Deploy to GitHub Pages"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"peaceiris\u002Factions-gh-pages@v3"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"if"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"github.ref == 'refs\u002Fheads\u002Fmaster'"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:k}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:j}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"github_token"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:"${{ secrets.GITHUB_TOKEN }}"}]}]},{type:a,tag:e,props:{class:f},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"publish_dir"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:i},children:[{type:b,value:".\u002Fdist"}]}]}]}]}]},{type:a,tag:p,props:{},children:[{type:b,value:"You probably need to configure prefix for your website, visit "},{type:a,tag:v,props:{href:"\u002Fcustomization"},children:[{type:b,value:"customization page"}]},{type:b,value:" for details."}]},{type:a,tag:"style",children:[{type:b,value:".ct-27887a{color:#D19A66}\n.ct-21c598{color:#98C379}\n.ct-127e41{color:#ABB2BF}\n.ct-5ce8f8{color:#E06C75}"}]}],toc:{title:o,searchDepth:A,depth:A,links:[]}},_type:"markdown",_id:"content:4.deployment:4.github-pages.md",_source:"content",_file:"4.deployment\u002F4.github-pages.md",_extension:"md",before:{_path:"\u002Fdeployment\u002Fnetlify",_draft:l,_partial:l,title:"2. Netlify",description:"Netlify is a zero-config provider for Nuxt-based applications.\nConnect Netlify to publicly available github\u002Fgitlab repository and service will do it for you."},after:{_path:"\u002Fdeployment\u002Fgitlab-pages",_draft:l,_partial:l,title:"4. GitLab pages",description:"To deploy your website using GitLab pages, create project for your docs website based on this template and follow official guide to configure GitLab CLI."}}},prerenderedAt:void 0}}("element","text","span","ct-127e41","div","line","ct-5ce8f8",": ","ct-21c598",":","        ",false,"name","      - ","","p","  ","    ","uses","          ","3. GitHub pages","a","code","ct-27887a","with","run",2))
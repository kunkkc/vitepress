import{s as v}from"./chunks/index.ff025f9a.js";import{d as k,c as d,o as e,a as s,b as n,u as c,w as N,e as a,t as u,_ as f,f as p,F as _,r as y,g}from"./app.612d4d4f.js";const L=["href"],$={class:"box"},M={class:"box-header"},T=["innerHTML"],w={key:1,class:"icon"},B=["src","alt"],I=["id"],j={key:0,class:"desc"},A=k({__name:"MNavLink",props:{icon:null,title:null,desc:null,link:null},setup(t){const i=t,l=d(()=>i.title?v(i.title):""),o=d(()=>typeof i.icon=="object"?i.icon.svg:"");return(r,h)=>t.link?(e(),s("a",{key:0,class:"m-nav-link",href:t.link,target:"_blank",rel:"noreferrer"},[n("article",$,[n("div",M,[c(o)?(e(),s("div",{key:0,class:"icon",innerHTML:c(o)},null,8,T)):t.icon&&typeof t.icon=="string"?(e(),s("div",w,[n("img",{src:c(N)(t.icon),alt:t.title,onerror:"this.parentElement.style.display='none'"},null,8,B)])):a("",!0),t.title?(e(),s("h5",{key:2,id:c(l),class:"title"},u(t.title),9,I)):a("",!0)]),t.desc?(e(),s("p",j,u(t.desc),1)):a("",!0)])],8,L)):a("",!0)}});const C=f(A,[["__scopeId","data-v-df86a741"]]),P=["id"],V=["href"],D={class:"m-nav-links"},J=k({__name:"MNavLinks",props:{title:null,items:null},setup(t){const i=t,l=d(()=>v(i.title));return(o,r)=>(e(),s(_,null,[t.title?(e(),s("h2",{key:0,id:c(l),tabindex:"-1"},[p(u(t.title)+" ",1),n("a",{class:"header-anchor",href:`#${c(l)}`,"aria-hidden":"true"},null,8,V)],8,P)):a("",!0),n("div",D,[(e(!0),s(_,null,y(t.items,({icon:h,title:x,desc:b,link:m})=>(e(),g(C,{key:m,icon:h,title:x,desc:b,link:m},null,8,["icon","title","desc","link"]))),128))])],64))}});const O=f(J,[["__scopeId","data-v-d3478ea0"]]),S=[{title:"常用工具",items:[{icon:"https://caniuse.com/img/favicon-128.png",title:"Can I use",desc:"前端 API 兼容性查询",link:"https://caniuse.com"},{icon:"https://tinypng.com/images/apple-touch-icon.png",title:"TinyPNG",desc:"在线图片压缩工具",link:"https://tinypng.com"},{icon:"https://devtool.tech/logo.svg",title:"开发者武器库",desc:"开发者武器库，做开发者最专业最好用的专业工具箱",link:"https://devtool.tech"},{icon:"https://tool.lu/favicon.ico",title:"在线工具",desc:"开发人员的工具箱",link:"https://tool.lu"},{icon:"/icons/json-cn.ico",title:"Json 中文网",desc:"JSON 在线解析及格式化验证",link:"https://www.json.cn"}]}];const E=n("h1",{id:"区块链导航",tabindex:"-1"},[p("区块链导航 "),n("a",{class:"header-anchor",href:"#区块链导航","aria-hidden":"true"},"#")],-1),F=n("br",null,null,-1),H=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,"该导航由收集与网络")],-1),z=JSON.parse('{"title":"区块链导航","description":"","frontmatter":{"layout":"doc","layoutClass":"m-nav-layout","outline":[2,3,4]},"headers":[],"relativePath":"blockchain-nav/index.md","lastUpdated":1681466667000}'),G={name:"blockchain-nav/index.md"},K=Object.assign(G,{setup(t){return(i,l)=>(e(),s("div",null,[E,(e(!0),s(_,null,y(c(S),({title:o,items:r})=>(e(),g(O,{title:o,items:r},null,8,["title","items"]))),256)),F,H]))}});export{z as __pageData,K as default};
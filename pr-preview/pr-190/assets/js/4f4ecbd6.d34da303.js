"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={id:"what-is-radicle",title:"What is Radicle?",sidebar_label:"What is Radicle?",slug:"/"},i=void 0,l={unversionedId:"what-is-radicle",id:"what-is-radicle",title:"What is Radicle?",description:"Radicle is a decentralized code collaboration network built on open protocols \ud83c\udf31. It enables developers to collaborate",source:"@site/docs/radicle.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/radicle.md",tags:[],version:"current",frontMatter:{id:"what-is-radicle",title:"What is Radicle?",sidebar_label:"What is Radicle?",slug:"/"},sidebar:"docsSidebar",next:{title:"Get started",permalink:"/get-started"}},c={},s=[{value:"How do I use Radicle?",id:"how-do-i-use-radicle",level:2},{value:"Radicle&#39;s collaboration workflow",id:"radicles-collaboration-workflow",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Radicle is a decentralized code collaboration network built on open protocols \ud83c\udf31. It enables developers to collaborate\non code without relying on trusted intermediaries. Radicle was designed to provide similar functionality to centralized\ncode collaboration platforms \u2014 or "forges" \u2014 while retaining Git\u2019s peer-to-peer nature, building on what made\ndistributed version control so powerful in the first place. '),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Instead of user accounts and logins, Radicle uses public key cryptography to identify projects and their\ncollaborators."),(0,a.kt)("li",{parentName:"ul"},"Instead of issue trackers hosted and owned by a corporation, Radicle uses seed nodes. The Radicle Foundation sponsors\nsome, but you can always host a seed node of your own, and use all the same collaboration tools/processes, using\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/radicle-dev/radicle-client-services"},"open-source code"),"."),(0,a.kt)("li",{parentName:"ul"},"Instead of dictating your process for collaboration, Radicle lets anyone build new tools or design new workflows\naround completely open protocols.")),(0,a.kt)("p",null,'You get recognizable collaboration flows from centralized code hosting platforms \u2014 the "forges" like GitHub and GitLab \u2014\nwhile also eliminating the reliance and risk on these corporate platforms.'),(0,a.kt)("p",null,"Two interlacing clients create this experience."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://app.radicle.xyz/alt-clients.radicle.eth/rad:git:hnrkmg77m8tfzj4gi4pa4mbhgysfgzwntjpao/tree"},(0,a.kt)("inlineCode",{parentName:"a"},"rad")," command-line\ntool")),", which interacts with Git and the Radicle network to help you host code or collaborate on projects."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://app.radicle.xyz"},"web app")),", which provides a visual interface for discovering projects, viewing\ncode, and viewing patches from collaborators.")),(0,a.kt)("p",null,"Apart from ",(0,a.kt)("strong",{parentName:"p"},"code collaboration"),", Radicle also addresses ",(0,a.kt)("strong",{parentName:"p"},"open source funding")," through\n",(0,a.kt)("a",{parentName:"p",href:"https://www.drips.network/"},"Drips"),", an Ethereum protocol for generating recurring income with subscriptions and NFT\nmemberships. Drips helps you create a circular funding network by dripping funds to your favorite creators and\ndedicating a percentage of your incoming drips to others."),(0,a.kt)("h2",{id:"how-do-i-use-radicle"},"How do I use Radicle?"),(0,a.kt)("p",null,"Because Radicle is built on open protocols, there will never be ",(0,a.kt)("em",{parentName:"p"},"one true way")," to do something on the Radicle network."),(0,a.kt)("p",null,"Instead, this documentation offers an ",(0,a.kt)("em",{parentName:"p"},"opinionated")," way to take common actions around hosting code on the Radicle\nnetwork and collaborating with others using Radicle-developed projects and interfaces."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"To start hosting and collaborating on code in the Radicle network, see our ",(0,a.kt)("a",{parentName:"strong",href:"/get-started"},"getting started\nguide"),"."))),(0,a.kt)("p",null,"Additional discovery and collaboration features are planned and under active development."),(0,a.kt)("p",null,"For more help on using Radicle, be sure to join our ",(0,a.kt)("a",{parentName:"p",href:"/get-involved/join-the-community"},"community channels"),"."),(0,a.kt)("h2",{id:"radicles-collaboration-workflow"},"Radicle's collaboration workflow"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: This is a practical overview of the current collaboration workflow using Radicle-built projects. This will\nchange as both the protocols and projects change and add new functionality in the future.")),(0,a.kt)("p",null,"Maintainers (also known as delegates) use ",(0,a.kt)("inlineCode",{parentName:"p"},"rad init")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rad push")," to create a project and synchronize project data\nbetween their local state and a canonical branch (usually ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),") on the configured seed node. This makes\nthe project discoverable on the Radicle web interface if collaborators know the ",(0,a.kt)("a",{parentName:"p",href:"/using-radicle/view-share"},"project URN and seed\nnode"),"."),(0,a.kt)("p",null,"Collaborators use ",(0,a.kt)("inlineCode",{parentName:"p"},"rad clone")," to ",(0,a.kt)("a",{parentName:"p",href:"/using-radicle/clone"},"clone")," the canonical branch of an existing project on the\nRadicle network to their local state, make changes, and ",(0,a.kt)("a",{parentName:"p",href:"/using-radicle/push"},"use ",(0,a.kt)("inlineCode",{parentName:"a"},"rad push"))," to synchronize those\nchanges with a seed node."),(0,a.kt)("p",null,"Maintainers can use the CLI to ",(0,a.kt)("a",{parentName:"p",href:"/using-radicle/view-share"},"find")," and\n",(0,a.kt)("a",{parentName:"p",href:"/using-radicle/track-review-merge"},"review/merge")," collaborations to their project. With the CLI, they use ",(0,a.kt)("inlineCode",{parentName:"p"},"rad track"),"\nto view the remote peer from their working copy, ",(0,a.kt)("inlineCode",{parentName:"p"},"git diff")," to see the proposed changes, ",(0,a.kt)("inlineCode",{parentName:"p"},"git merge")," to merge them, and\n",(0,a.kt)("inlineCode",{parentName:"p"},"rad push")," to publish the new state of the canonical branch."))}p.isMDXComponent=!0}}]);
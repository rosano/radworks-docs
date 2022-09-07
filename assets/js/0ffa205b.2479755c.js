"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[351],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5096:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"view-share",title:"View and share projects"},c=void 0,p={unversionedId:"using-radicle/view-share",id:"using-radicle/view-share",title:"View and share projects",description:"All projects published to the Radicle network are accessible via the web app at https://app.radicle.xyz.",source:"@site/docs/using-radicle/view-share.md",sourceDirName:"using-radicle",slug:"/using-radicle/view-share",permalink:"/using-radicle/view-share",editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/using-radicle/view-share.md",tags:[],version:"current",frontMatter:{id:"view-share",title:"View and share projects"},sidebar:"docsSidebar",previous:{title:"Create a project",permalink:"/using-radicle/create"},next:{title:"Push your changes",permalink:"/using-radicle/push"}},s={},d=[{value:"Explore a project",id:"explore-a-project",level:2},{value:"Share a project",id:"share-a-project",level:2}],u={toc:d};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All projects ",(0,o.kt)("a",{parentName:"p",href:"/using-radicle/create"},"published")," to the Radicle network are accessible via the web app at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://app.radicle.xyz"),"."),(0,o.kt)("p",null,"When you create a project or use ",(0,o.kt)("inlineCode",{parentName:"p"},"rad push")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"rad sync"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rad")," outputs the URL for accessing your project on the web\napp, which looks something like this:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"(web) https://app.radicle.xyz/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy")),(0,o.kt)("p",null,"You can always run ",(0,o.kt)("inlineCode",{parentName:"p"},"rad push")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"rad sync")," again to find this URL if you don't have it handy. If you're in the middle of ongoing work and can't push/sync, you can build URL with information about the seed node you're synced with and your project URN. The URLs follow this format:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://app.radicle.xyz/seeds/")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"YOUR-SEED/")," + ",(0,o.kt)("inlineCode",{parentName:"li"},"YOUR-PROJECT-URN/"))),(0,o.kt)("p",null,"To find the seed node from your local system, ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into your project and check the local Git configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git config --local rad.seed\nhttps://willow.radicle.garden/\n")),(0,o.kt)("p",null,"To find the project URN, ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into your project and use ",(0,o.kt)("inlineCode",{parentName:"p"},"rad .")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"rad inspect"),") to display the URN:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ rad .\nrad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy\n")),(0,o.kt)("p",null,"Now that you have the URL to your project on the Radicle web app, you can start exploring."),(0,o.kt)("h2",{id:"explore-a-project"},"Explore a project"),(0,o.kt)("p",null,"The web app shows a project's tree, primary README, commit history, contributors, and more."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Viewing a specific project with the web interface",src:n(4707).Z,width:"1268",height:"549"})),(0,o.kt)("p",null,"Click on folders to expand them or individual files to show their syntax-highlighted content and the latest relevant\ncommit."),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"X commit(s)")," to view project's commit history, including the commit message, the committer's name, and the\ntime/date of the commit. Click on any commit to view changes, such as additions and deletions, as a diff. Click the\n",(0,o.kt)("inlineCode",{parentName:"p"},"<>")," icon to explore the state of the project at that commit."),(0,o.kt)("h2",{id:"share-a-project"},"Share a project"),(0,o.kt)("p",null,"If you're looking to onboard a new collaborator to your Radicle-hosted project, you need to let them know where they can\nfind the project, explore it, and ",(0,o.kt)("a",{parentName:"p",href:"/using-radicle/clone"},"clone")," it."),(0,o.kt)("p",null,"Generally speaking, the collaborator needs to know the project URN and the seed node."),(0,o.kt)("p",null,"The easiest way to share a project is the full URL of its page on the web interface, like\n",(0,o.kt)("a",{parentName:"p",href:"https://app.radicle.xyz/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy"},"radicle-example"),"\nat ",(0,o.kt)("inlineCode",{parentName:"p"},"https://app.radicle.xyz/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy"),". Here,\nthey'll be able to find all the information they need to ",(0,o.kt)("a",{parentName:"p",href:"/using-radicle/clone"},"clone")," your project and start collaborating."),(0,o.kt)("p",null,"You can also share only the seed node and project URN, discoverable using the commands listed above, and let them use\n",(0,o.kt)("inlineCode",{parentName:"p"},"rad clone")," manually to ",(0,o.kt)("a",{parentName:"p",href:"/using-radicle/clone"},"clone")," your project and ",(0,o.kt)("a",{parentName:"p",href:"/using-radicle/push"},"push")," their changes."))}h.isMDXComponent=!0},4707:function(e,t,n){t.Z=n.p+"assets/images/web-interface_project-3402507035230273bdcbcedb743bf849.png"}}]);
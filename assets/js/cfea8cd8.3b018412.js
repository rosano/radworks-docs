"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[36],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),u=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,m=p["".concat(d,".").concat(y)]||p[y]||s[y]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8725:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var i=n(3117),r=(n(7294),n(3905));const a={id:"identity",title:"Manage your Radicle identity"},o=void 0,l={unversionedId:"using-radicle/identity",id:"using-radicle/identity",title:"Manage your Radicle identity",description:"Your Radicle identity is your ticket to hosting and collaborating on code in the Radicle network, but it's not a fixed",source:"@site/docs/using-radicle/identity.md",sourceDirName:"using-radicle",slug:"/using-radicle/identity",permalink:"/using-radicle/identity",draft:!1,editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/using-radicle/identity.md",tags:[],version:"current",frontMatter:{id:"identity",title:"Manage your Radicle identity"},sidebar:"docsSidebar",previous:{title:"Track, review, and merge patches",permalink:"/using-radicle/track-review-merge"},next:{title:"Why Radicle?",permalink:"/understanding-radicle/why-radicle"}},d={},u=[{value:"View your active identity",id:"view-your-active-identity",level:2},{value:"Create a new identity",id:"create-a-new-identity",level:2},{value:"Switch between identities",id:"switch-between-identities",level:2},{value:"Edit your display name",id:"edit-your-display-name",level:2},{value:"Remove an identity",id:"remove-an-identity",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Your Radicle identity is your ticket to hosting and collaborating on code in the Radicle network, but it's not a fixed\nentity. You can manage multiple identities, creating/delete them at will, and even edit them to a degree."),(0,r.kt)("p",null,"Many of the actions below require your personal URN, which you can find using ",(0,r.kt)("inlineCode",{parentName:"p"},"rad self"),"."),(0,r.kt)("h2",{id:"view-your-active-identity"},"View your active identity"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rad self")," to see details on how you're identified on the Radicle network, including your:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Active ",(0,r.kt)("a",{parentName:"li",href:"#edit-your-display-name"},"display name")),(0,r.kt)("li",{parentName:"ul"},"Personal URN"),(0,r.kt)("li",{parentName:"ul"},"Peer ID"),(0,r.kt)("li",{parentName:"ul"},"Hashed and full encryption keys"),(0,r.kt)("li",{parentName:"ul"},"File locations of your Git monorepo and encryption keys")),(0,r.kt)("h2",{id:"create-a-new-identity"},"Create a new identity"),(0,r.kt)("p",null,"Add new identities at any time. For example, use different identities for the personal projects you host on Radicle\nversus your professional work for a company or DAO."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rad auth --init\n")),(0,r.kt)("h2",{id:"switch-between-identities"},"Switch between identities"),(0,r.kt)("p",null,"If you have multiple identities, switch between them with ",(0,r.kt)("inlineCode",{parentName:"p"},"rad auth"),"."),(0,r.kt)("p",null,"Choose the identity you want active, enter your passphrase, and hit ",(0,r.kt)("strong",{parentName:"p"},"Enter"),"."),(0,r.kt)("h2",{id:"edit-your-display-name"},"Edit your display name"),(0,r.kt)("p",null,"Change your ",(0,r.kt)("em",{parentName:"p"},"display name"),", which is how you're identified on the Radicle web app (not the same as your Peer ID or\npersonal URN!):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rad edit <YOUR-PERSONAL-URN>\n")),(0,r.kt)("p",null,"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},'"name"')," value to your new display name in the file that appears."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "https://radicle.xyz/link/identities/person/v1": {\n    "name": "your-display-name"\n  }\n}\n')),(0,r.kt)("p",null,"Re-run ",(0,r.kt)("inlineCode",{parentName:"p"},"rad self")," to see that your ",(0,r.kt)("strong",{parentName:"p"},"Name")," changed, but your personal URN and Peer ID stayed the same."),(0,r.kt)("h2",{id:"remove-an-identity"},"Remove an identity"),(0,r.kt)("p",null,"If you forgot your identity's passphrase or don't need a certain profile any longer, you can delete the folders that\ncontain Radicle identities you no longer want to use."),(0,r.kt)("p",null,"To find where ",(0,r.kt)("inlineCode",{parentName:"p"},"rad")," stores your identities, run ",(0,r.kt)("inlineCode",{parentName:"p"},"rad self")," and look at the last two lines."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 Storage (git)  <your-git-storage-folder>\n\u2514\u2500\u2500 Storage (keys) <your-key-storage-folder>\n")),(0,r.kt)("p",null,"You can now navigate to these locations and delete any folders with personal URNs that match the identities you want to\nremove."))}s.isMDXComponent=!0}}]);
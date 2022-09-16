"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[93],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,f=u["".concat(l,".").concat(h)]||u[h]||s[h]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4853:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],c={id:"create",title:"Create a project"},l=void 0,p={unversionedId:"using-radicle/create",id:"using-radicle/create",title:"Create a project",description:"You can create a Radicle project from any existing Git repository and publish it on the Radicle network using two CLI commands \u2014 rad init and rad push.",source:"@site/docs/using-radicle/create.md",sourceDirName:"using-radicle",slug:"/using-radicle/create",permalink:"/using-radicle/create",editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/using-radicle/create.md",tags:[],version:"current",frontMatter:{id:"create",title:"Create a project"},sidebar:"docsSidebar",previous:{title:"Get started",permalink:"/get-started"},next:{title:"View and share projects",permalink:"/using-radicle/view-share"}},d={},s=[{value:"Initialize a project",id:"initialize-a-project",level:2},{value:"Push your project to the Radicle network",id:"push-your-project-to-the-radicle-network",level:2}],u={toc:s};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can create a Radicle project from any existing Git repository and publish it on the Radicle network using two CLI commands \u2014 ",(0,i.kt)("inlineCode",{parentName:"p"},"rad init")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rad push"),"."),(0,i.kt)("p",null,"Projects contain all files of a Git repository and their revision history, but they also have associated\nRadicle-specific metadata such as a name, description, and information about\n",(0,i.kt)("a",{parentName:"p",href:"/understanding-radicle/glossary#delegate"},"delegates"),", which are the identities with write access to the project's\ncanonical branch."),(0,i.kt)("p",null,"Each project carries a unique, shareable peer-to-peer identifier known as a ",(0,i.kt)("a",{parentName:"p",href:"/understanding-radicle/glossary#project-urn"},"project\nURN"),"."),(0,i.kt)("h2",{id:"initialize-a-project"},"Initialize a project"),(0,i.kt)("p",null,"Navigate to an existing Git repository on your local system."),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"rad init"),", enter a description, specify the name of your default branch (typically ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"master"),"), and hit\n",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),". You'll be asked whether you want to associate the key for your Radicle identity with this project \u2014 hit ",(0,i.kt)("inlineCode",{parentName:"p"},"Y")," to\naccept."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ rad init\nInitializing local \ud83c\udf31 project in .\n\nok Name \xb7 radicle-example\nok Description \xb7 An example project for documentation purposes!\nok Default branch \xb7 main\nok Initializing...\n \u2937 Configure \ud83c\udf31 signing key SHA256:5uI9GGFkdKgvC66yt5USJWTTZZEcvKm1/f/ZwX51+vk in local checkout? [Y \u2937 Configure \ud83c\udf31 signing key SHA256:5uI9GGFkdKgvC66yt5USJWTTZZEcvKm1/f/ZwX51+vk in local checkout? yes\nok Created .gitsigners file\nok Signing configured in .git/config\n\nYour project id is rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy. You can show it any time by running:\n   rad .\n\nTo publish your project to the network, run:\n   rad push\n")),(0,i.kt)("p",null,"At this point, ",(0,i.kt)("inlineCode",{parentName:"p"},"rad init")," created a project URN for your project and associated your Peer ID with it for sharing on the\nRadicle network."),(0,i.kt)("h2",{id:"push-your-project-to-the-radicle-network"},"Push your project to the Radicle network"),(0,i.kt)("p",null,"The Radicle CLI works with peer-to-peer ",(0,i.kt)("a",{parentName:"p",href:"/understanding-radicle/glossary#seed"},"seed nodes"),", which function as replicas\nfor Radicle project data and are are accessible on the public internet and through the ",(0,i.kt)("a",{parentName:"p",href:"https://app.radicle.xyz"},"web\ninterface"),". Radicle offers three default seed nodes with identical functionality:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://app.radicle.xyz/seeds/pine.radicle.garden"},"pine.radicle.garden")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://app.radicle.xyz/seeds/willow.radicle.garden"},"willow.radicle.garden")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://app.radicle.xyz/seeds/maple.radicle.garden"},"maple.radicle.garden"))),(0,i.kt)("p",null,"When you run ",(0,i.kt)("inlineCode",{parentName:"p"},"rad push")," for the first time in a new project, the CLI asks you which seed node to sync with."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ rad push\nPushing \ud83c\udf31 to remote `rad`\n$ git push rad\nEverything up-to-date\n\nGit version 2.35.1\nSelect a seed node to sync with...\n\n* pine.radicle.garden\n* willow.radicle.garden\n* maple.radicle.garden\n")),(0,i.kt)("p",null,"After syncing your project with the Radicle network for the first time, the CLI outputs information about how to find\nand share your project for ",(0,i.kt)("a",{parentName:"p",href:"/using-radicle/view-share"},"sharing"),", ",(0,i.kt)("a",{parentName:"p",href:"/using-radicle/clone"},"cloning"),", and collaboration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Radicle signing key ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIBndIloOmjGvHkqgfJ9sEkaZb1iBG9lrfjODqG5uoqjV\n\nSyncing \ud83c\udf31 project rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy to https://willow.radicle.garden/\n\nok Project synced.\n\n\ud83c\udf43 Your project is available at:\n\n   (web) https://app.radicle.xyz/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy\n   (web) https://app.radicle.xyz/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy/remotes/hyyc74e14b4pddma6jko8385cnjdj154aorp71456gqb4o5uqwkwpk\n   (git) https://willow.radicle.garden/hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy.git\n\nok Saving seed configuration to local git config...\n=> To override the seed, pass the '--seed' flag to `rad sync` or `rad push`.\n=> To change the configured seed, run `git config rad.seed <url>` with a seed URL.\n")),(0,i.kt)("p",null,"The two ",(0,i.kt)("inlineCode",{parentName:"p"},"(web)")," URLs lead to your project's presence on the ",(0,i.kt)("a",{parentName:"p",href:"/using-radicle/view-share"},"web app"),". The first points to the delegate's\ncanonical branch, and the second points to your remote, which may or may not be different."),(0,i.kt)("p",null,"You can append the ",(0,i.kt)("inlineCode",{parentName:"p"},"(git)")," URL to ",(0,i.kt)("inlineCode",{parentName:"p"},"rad clone")," to ",(0,i.kt)("a",{parentName:"p",href:"/using-radicle/clone"},"clone")," the project elsewhere."))}h.isMDXComponent=!0}}]);
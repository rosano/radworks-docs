"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[888],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7894:function(e,n,t){t.d(n,{z:function(){return d},Z:function(){return p}});var r=t(7294),o=t(9960),a=t(3919),i=t(9471),c="grid_iD3H",l="button_YHhe",s="ext_mSVF",u="cta_VXSW";function p(e){let{children:n}=e;return r.createElement("div",{className:c},n)}function d(e){let{children:n,style:t={},href:c,title:p,cta:d}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:l,style:t},p&&r.createElement("h3",null,p),n&&r.createElement("p",null,n),d&&r.createElement("div",{className:u},r.createElement(o.Z,{to:c},d," ",(0,a.Z)(c)?r.createElement("span",null,"\u2192"):r.createElement("span",{className:s},r.createElement(i.Z,null))))))}},7924:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=t(3117),o=(t(7294),t(3905)),a=t(7894);const i={title:"Governance Manual"},c=void 0,l={unversionedId:"community/manual-overview",id:"community/manual-overview",title:"Governance Manual",description:"The Governance Manual is a living document that outlines Radicle's governance processes. It is version-controlled and",source:"@site/docs/community/manual-overview.md",sourceDirName:"community",slug:"/community/manual-overview",permalink:"/community/manual-overview",draft:!1,editUrl:"https://github.com/radicle-dev/radicle-docs/blob/main/docs/community/manual-overview.md",tags:[],version:"current",lastUpdatedAt:1694074870,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{title:"Governance Manual"}},s={},u=[{value:"Proposal Process",id:"proposal-process",level:2}],p={toc:u};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Governance Manual is a living document that outlines Radicle's governance processes. It is version-controlled and\nmaintained by the Governance team. The latest version of the Governance Manual can always be found here. To propose\nchanges to the Manual, please see\xa0the READMEs for\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/radicle-dev/radicle-docs#how-to-contribute"},"documentation")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/radicle-dev/radicle-governance/"},"governance"),"."),(0,o.kt)(a.Z,{mdxType:"Grid"},(0,o.kt)(a.z,{style:{gridColumn:"1 / span 12"},href:"https://github.com/radicle-dev/radicle-governance/blob/main/manual.md",title:"Read the Governance Manual on GitHub",mdxType:"Button"})),(0,o.kt)("p",null,"Radworks' Treasury is controlled by a tokenized governance mechanism\n(",(0,o.kt)("a",{parentName:"p",href:"https://wiki.tally.xyz/docs/compound-governor"},"Compound-Governor"),") via the project\u2019s native governance token ($RAD).\nWith token governance, holders of $RAD holders can participate in the decision-making around the treasury by voting and\ncreating on-chain governance proposals composed of executable actions. Currently, these actions include: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Treasury distributions of RAD, ETH, and USDC"),(0,o.kt)("li",{parentName:"ul"},"Upgrades to the on-chain governance system"),(0,o.kt)("li",{parentName:"ul"},"Changes to parameters of Treasury-governed contracts (e.g. Drips)")),(0,o.kt)("p",null,"Proposals can be proposed on-chain by anyone who has an amount of $RAD greater than or equal to 1% of total total supply\ndelegated to their address. Once proposed, $RAD-holding participants can vote for/against the proposal on-chain. Voting\nmust meet a participation threshold of 4% of total supply to pass. The proposal only passes if the participation\nthreshold is met and votes are a majority \u201cin-favor\u201d. Once passed, the actions outlined in the proposal are executed. To\nlearn more about token governance and how the RadicleDAO\u2019s on-chain governance system works,\xa0",(0,o.kt)("a",{parentName:"p",href:"https://wiki.tally.xyz/docs/compound-governor"},"see\nhere"),"."),(0,o.kt)("h2",{id:"proposal-process"},"Proposal Process"),(0,o.kt)("p",null,"To submit a governance proposal on-chain, it must first complete an off-chain review process. Having a public off-chain\ncommunity review process allows for proposals to be reviewed, discussed, and improved by the Radicle community before\nreaching an on-chain vote. It also provides on-chain voters with more context on community sentiment and proposal\ndevelopment which ideally leads to more informed and less contentious decisions. Ultimately, involving the community in\nthe public review and development of the proposal is also a way to protect Radworks, ensuring that what makes its\nway to an on-chain vote has already been vetted and reviewed in a transparent manner. The timeline of this off-chain\nprocess can be seen in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/radicle-dev/radicle-governance/blob/main/manual.md"},"Governance\nManual")," on GitHub."))}d.isMDXComponent=!0}}]);
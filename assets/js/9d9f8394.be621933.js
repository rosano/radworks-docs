"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[360],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9222:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"troubleshooting",title:"Troubleshooting"},s=void 0,p={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"As the team behind the various protocols and projects that utilize the Radicle network, we want you, the user, to have",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/troubleshooting",editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"docsSidebar",previous:{title:"Get started",permalink:"/get-started"},next:{title:"Create a project",permalink:"/using-radicle/create"}},u={},d=[{value:"I ran into a issue \u2014 where can I report it?",id:"i-ran-into-a-issue--where-can-i-report-it",level:2},{value:"Installation prerequisites for <code>rad</code>",id:"installation-prerequisites-for-rad",level:2},{value:"<code>Fatal: the key for ... is not in the ssh-agent</code>",id:"fatal-the-key-for--is-not-in-the-ssh-agent",level:2},{value:"<code>error: unsupported value for gpg.format</code>",id:"error-unsupported-value-for-gpgformat",level:2},{value:"<code>error: Load key...</code>",id:"error-load-key",level:2},{value:"SLOP failure",id:"slop-failure",level:2},{value:"Install Radicle CLI on Apple Silicon",id:"install-radicle-cli-on-apple-silicon",level:2},{value:"Install Radicle on Windows with WSL",id:"install-radicle-on-windows-with-wsl",level:2}],c={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As the team behind the various protocols and projects that utilize the Radicle network, we want you, the user, to have\nthe best experience possible. Also, as the developers, we know that there will be bugs and errors. "),(0,o.kt)("p",null,"To help consolidate these diametrically opposed pieces of knowledge, we will try and document any of the errors that we\nare aware of and provide some troubleshooting advice."),(0,o.kt)("h2",{id:"i-ran-into-a-issue--where-can-i-report-it"},"I ran into a issue \u2014 where can I report it?"),(0,o.kt)("p",null,"We suggest you send your report through the ",(0,o.kt)("strong",{parentName:"p"},"#support")," channel on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/j2HZCBDUvF"},"Discord server"),"\nor in the ",(0,o.kt)("strong",{parentName:"p"},"Support")," category of our ",(0,o.kt)("a",{parentName:"p",href:"https://radicle.community"},"forum"),". A member of the Radicle team will try resolve\nyour issue right away, and if they can't, work with you on creating a formal issue/request."),(0,o.kt)("p",null,"If you know which Radicle project is most relevant to your issue, you can also create an issue in the appropriate\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/radicle-dev"},"repository on GitHub"),"."),(0,o.kt)("h2",{id:"installation-prerequisites-for-rad"},"Installation prerequisites for ",(0,o.kt)("inlineCode",{parentName:"h2"},"rad")),(0,o.kt)("p",null,"If you have trouble with ",(0,o.kt)("a",{parentName:"p",href:"https://radicle.xyz/get-started.html"},"installing the Radicle CLI"),", make sure you have\ninstalled the correct versions of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Git: ",(0,o.kt)("inlineCode",{parentName:"li"},"2.34.0")," or later"),(0,o.kt)("li",{parentName:"ul"},"OpenSSH: ",(0,o.kt)("inlineCode",{parentName:"li"},"8.0")," or later")),(0,o.kt)("h2",{id:"fatal-the-key-for--is-not-in-the-ssh-agent"},(0,o.kt)("inlineCode",{parentName:"h2"},"Fatal: the key for ... is not in the ssh-agent")),(0,o.kt)("p",null,"This error occurs when your system isn't running ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-agent"),", which ",(0,o.kt)("inlineCode",{parentName:"p"},"rad")," uses to store and use the cryptographic keys\nassociated with your Radicle identity."),(0,o.kt)("p",null,"In the error message, ",(0,o.kt)("inlineCode",{parentName:"p"},"rad")," offers one method of starting ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-agent"),", but if you're on Linux, you'll need to try\nanother method, like ",(0,o.kt)("inlineCode",{parentName:"p"},'eval "$(ssh-agent -s)"'),"."),(0,o.kt)("h2",{id:"error-unsupported-value-for-gpgformat"},(0,o.kt)("inlineCode",{parentName:"h2"},"error: unsupported value for gpg.format")),(0,o.kt)("p",null,"If you see the following error when using ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," after initializing a project, you're most likely running a version of Git that's incompatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"rad"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"error: unsupported value for gpg.format: ssh\nfatal: bad config variable 'gpg.format' in file '.git/config' at line 20\n")),(0,o.kt)("p",null,"See our ",(0,o.kt)("a",{parentName:"p",href:"#installation-prerequisites-for-rad"},"prerequisites")," for the minimum Git version number you need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"rad"),"\nand access the Radicle network."),(0,o.kt)("h2",{id:"error-load-key"},(0,o.kt)("inlineCode",{parentName:"h2"},"error: Load key...")),(0,o.kt)("p",null,"The following error is likely caused by a non-functioning ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-agent"),", with ",(0,o.kt)("inlineCode",{parentName:"p"},"rad")," not having proper access to your keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'error: Load key "/tmp/.git_signing_key_tmp....": Invalid format\n')),(0,o.kt)("p",null,"The solution is to run ",(0,o.kt)("inlineCode",{parentName:"p"},"rad auth")," again, choose your profile (if you have multiple), and enter your passphrase. When a key loads successfully, ",(0,o.kt)("inlineCode",{parentName:"p"},"rad")," outputs the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ok Unlocking...\nok Radicle key added to ssh-agent\nok Signing key configured in git\n")),(0,o.kt)("h2",{id:"slop-failure"},"SLOP failure"),(0,o.kt)("p",null,"When Git pushes a signed commit to a remote repository, it sends a nonce ","\u2014"," an arbitrary number only used once ","\u2014"," based on your system time as a security measure. If that nonce doesn't match with what the remote system expects, Git outputs this warning:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"remote: Running pre-receive hook...        \nremote: Verifying certificate...        \nremote: Received `SLOP` certificate status, please re-submit signed push to request new certificate        \nremote: Error: failed certification verification\n")),(0,o.kt)("p",null,"There are two solutions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Push your code again using ",(0,o.kt)("inlineCode",{parentName:"li"},"rad push"),"."),(0,o.kt)("li",{parentName:"ol"},"Check your system time for discrepancies.")),(0,o.kt)("h2",{id:"install-radicle-cli-on-apple-silicon"},"Install Radicle CLI on Apple Silicon"),(0,o.kt)("p",null,"Previously, installing ",(0,o.kt)("inlineCode",{parentName:"p"},"rad")," on M1/M2-based systems required you to install the x86_64 version of Homebrew."),(0,o.kt)("p",null,"As of September 2022, you can install Radicle using our formulae repository whether you're on Apple Silicon or an older\nIntel-based system. If you're on Apple Silicon, ",(0,o.kt)("inlineCode",{parentName:"p"},"rad")," will not run natively, but it will work!"),(0,o.kt)("p",null,"See our ",(0,o.kt)("a",{parentName:"p",href:"https://radicle.xyz/get-started.html"},"installation instructions")," for the Homebrew method."),(0,o.kt)("h2",{id:"install-radicle-on-windows-with-wsl"},"Install Radicle on Windows with WSL"),(0,o.kt)("p",null,"This installation method isn't officially supported by the Radicle team, but you can try it at your own risk! "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Our thanks go to the folks behind ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cytechmobile/radicle-jetbrains-plugin/"},"radicle-jetbrains-plugin"),",\nwho first discovered this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cytechmobile/radicle-jetbrains-plugin/blob/main/README.md"},"method")," of\ninstalling ",(0,o.kt)("inlineCode",{parentName:"p"},"rad")," on WSL and Windows."))),(0,o.kt)("p",null,"Assuming you already have ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"WSL installed"),", follow the\n",(0,o.kt)("strong",{parentName:"p"},"Debian/Ubuntu")," instructions on our ",(0,o.kt)("a",{parentName:"p",href:"https://radicle.xyz/get-started.html"},"get started guide"),"."),(0,o.kt)("p",null,"Check what version of Git your WSL installation has with ",(0,o.kt)("inlineCode",{parentName:"p"},"git --version"),". If it's lower than ",(0,o.kt)("inlineCode",{parentName:"p"},"2.34.0"),", you need to\nupdate, and if you're using the WSL default ","\u2014"," Ubuntu 20.04 ","\u2014"," you can add the ",(0,o.kt)("a",{parentName:"p",href:"https://launchpad.net/~git-core/+archive/ubuntu/ppa"},(0,o.kt)("inlineCode",{parentName:"a"},"git-core"),"\nPPA")," to your system to supply a newer version of Git."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo add-apt-repository ppa:git-core/ppa\nsudo apt update\nsudo apt install git\n")),(0,o.kt)("p",null,"With the appropriate version of Git installed, run ",(0,o.kt)("inlineCode",{parentName:"p"},"rad auth")," to create your identity."),(0,o.kt)("p",null,"But to properly load and manage your identity's keys, you need an SSH agent. Install\n",(0,o.kt)("a",{parentName:"p",href:"https://manpages.ubuntu.com/manpages/xenial/man1/keychain.1.html"},"keychain")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo apt install keychain"),", then open\nyour ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," file. Add the following two lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"eval `keychain --quiet --eval --agents ssh`;\nexport WSLENV=$WSLENV:SSH_AGENT_PID:SSH_AUTH_SOCK;\n")),(0,o.kt)("p",null,"Save the file, exit WSL, and relaunch."),(0,o.kt)("p",null,"You can now navigate to an existing Git repository and run ",(0,o.kt)("inlineCode",{parentName:"p"},"rad init")," to create a new Radicle project, or\n",(0,o.kt)("a",{parentName:"p",href:"/using-radicle/clone"},"clone")," an existing project with ",(0,o.kt)("inlineCode",{parentName:"p"},"rad clone"),"."))}h.isMDXComponent=!0}}]);
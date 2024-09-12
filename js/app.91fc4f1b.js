(function(){var e={8108:function(e,t,r){"use strict";var o=r(5130),a=r(6768),l=r(4232),n=r(144),i=r(1415),s=r(5704),c=r(931),d=r(4750);const u={class:"fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-50 transition-all duration-300"},g={class:"container mx-auto px-4 py-4 flex justify-between items-center"},p={class:"flex items-center space-x-6"},b=["href"],f=["aria-label"],h={class:"container mx-auto px-4 pt-24 pb-24"},k={class:"py-20 text-center"},m={class:"text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"},v={id:"experience",class:"py-20"},x={class:"space-y-6"},y={class:"w-16 h-16 mr-6 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center"},w=["src","alt"],L={class:"text-xl font-semibold"},j={class:"text-gray-600 dark:text-gray-400"},S={class:"mt-2"},_={id:"work",class:"py-20"},C={class:"relative overflow-hidden"},E=["src","alt"],I={class:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"},A=["href"],O={class:"p-6"},D={class:"text-xl font-semibold mb-2"},R={class:"text-gray-600 dark:text-gray-400"},F={id:"skills",class:"py-20"},M={class:"flex flex-wrap justify-center gap-4"},T={class:"fixed bottom-6 right-6 flex space-x-4"},U={href:"https://linkedin.com/in/jerheng",target:"_blank",rel:"noopener noreferrer",class:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"},W={href:"https://github.com/jerheng",target:"_blank",rel:"noopener noreferrer",class:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"},K="Hi! I'm Jeremy.",X="Software Engineer & Data Analyst";var P={__name:"App",setup(e){const t=(0,n.KR)("true"===localStorage.getItem("isDarkMode")||null===localStorage.getItem("isDarkMode")),o=(0,n.KR)(""),P=(0,n.KR)(""),V=()=>{t.value=!t.value,localStorage.setItem("isDarkMode",t.value)},N=(e,t=0,r)=>{t<e.length&&(r(e.substring(0,t+1)),setTimeout((()=>N(e,t+1,r)),100))};(0,a.wB)(t,(e=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")})),(0,a.sV)((()=>{t.value&&document.documentElement.classList.add("dark"),N(K,0,(e=>{o.value=e})),N(X,0,(e=>{P.value=e}))}));const H=[{id:"about",title:"About"},{id:"experience",title:"Experience"},{id:"work",title:"Work"},{id:"skills",title:"Skills"},{id:"contact",title:"Contact"}],$=[{title:"Data Analyst Intern",company:"Temasek",period:"Aug 2024 - Present",description:"Lead the development team, implementing cutting-edge web applications using Vue.js, React, and Node.js.",logo:"temasek-international.jpg"},{title:"Business Analyst Intern",company:"Shopee",period:"May 2024 - Aug 2024",description:"Developed responsive websites and web applications for various clients using modern JavaScript frameworks and backend technologies.",logo:"shopee-logo.png"}],B=[{id:1,title:"Spotify Utility",description:"Spotify CLI and Streamlit Utility for downloading songs and merging playlists",image:"albumUsage.gif",link:"https://github.com/jerheng/Spotify-Utility"},{id:2,title:"LOA Helper",description:"A discord bot to assist with raid scheduling in different threads",image:"loa-helper.png",link:"https://github.com/jerheng/loa-helper"}],G=["JavaScript","TypeScript","Vue.js","React","Node.js","Express.js","MongoDB","PostgreSQL","GraphQL","REST APIs","HTML5","CSS3","Sass","Tailwind CSS","Git","Docker","AWS","CI/CD"];return(e,K)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,l.C4)([{dark:t.value},"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-gray-900 dark:text-gray-100 transition-all duration-200"])},[(0,a.Lk)("nav",u,[(0,a.Lk)("div",g,[K[1]||(K[1]=(0,a.Lk)("a",{href:"#",class:"text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"},"jerheng.com",-1)),(0,a.Lk)("div",p,[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(H,(e=>(0,a.Lk)("a",{key:e.id,href:`#${e.id}`,class:"hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 relative group"},[(0,a.eW)((0,l.v_)(e.title)+" ",1),K[0]||(K[0]=(0,a.Lk)("span",{class:"absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"},null,-1))],8,b))),64)),(0,a.Lk)("button",{onClick:V,class:"p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300","aria-label":t.value?"Switch to light mode":"Switch to dark mode"},[t.value?((0,a.uX)(),(0,a.Wv)((0,n.R1)(i.A),{key:0,class:"h-5 w-5"})):((0,a.uX)(),(0,a.Wv)((0,n.R1)(s.A),{key:1,class:"h-5 w-5"}))],8,f)])])]),(0,a.Lk)("main",h,[(0,a.Lk)("section",k,[(0,a.Lk)("h1",m,(0,l.v_)(o.value),1),(0,a.Lk)("p",{class:"text-2xl mb-8"},(0,l.v_)(X)),K[2]||(K[2]=(0,a.Lk)("div",{class:"flex justify-center space-x-4"},[(0,a.Lk)("a",{href:"#contact",class:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"},"Get in Touch"),(0,a.Lk)("a",{href:"#work",class:"bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"},"View My Work")],-1))]),K[6]||(K[6]=(0,a.Lk)("section",{id:"about",class:"py-20"},[(0,a.Lk)("h2",{class:"text-3xl font-bold mb-6 text-center"},"About Me"),(0,a.Lk)("div",{class:"max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"},[(0,a.Lk)("p",{class:"text-lg leading-relaxed"}," Hello! I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences. With expertise in Vue.js, React, Node.js, and modern web technologies, I bring ideas to life through code. I believe in the power of technology to solve real-world problems and am constantly learning to stay at the forefront of web development. ")])],-1)),(0,a.Lk)("section",v,[K[3]||(K[3]=(0,a.Lk)("h2",{class:"text-3xl font-bold mb-6 text-center"},"Experience",-1)),(0,a.Lk)("div",x,[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)($,((e,t)=>(0,a.Lk)("div",{key:t,class:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg flex items-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"},[(0,a.Lk)("div",y,[(0,a.Lk)("img",{src:r(1382)(`./${e.logo}`),alt:`${e.company} logo`,class:"w-full h-full object-cover rounded-full"},null,8,w)]),(0,a.Lk)("div",null,[(0,a.Lk)("h3",L,(0,l.v_)(e.title)+" at "+(0,l.v_)(e.company),1),(0,a.Lk)("p",j,(0,l.v_)(e.period),1),(0,a.Lk)("p",S,(0,l.v_)(e.description),1)])]))),64))])]),(0,a.Lk)("section",_,[K[4]||(K[4]=(0,a.Lk)("h2",{class:"text-3xl font-bold mb-6 text-center"},"Work",-1)),(0,a.Lk)("div",{class:(0,l.C4)("grid gap-8 "+(1===B.length?"grid-cols-1 justify-items-center":2===B.length?"grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center":"grid-cols-1 md:grid-cols-2 lg:grid-cols-3"))},[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(B,(e=>(0,a.Lk)("div",{key:e.id,class:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl group w-full"},[(0,a.Lk)("div",C,[(0,a.Lk)("img",{src:r(1382)(`./${e.image}`),alt:e.title,class:"w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"},null,8,E),(0,a.Lk)("div",I,[(0,a.Lk)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",class:"bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"}," View Project ",8,A)])]),(0,a.Lk)("div",O,[(0,a.Lk)("h3",D,(0,l.v_)(e.title),1),(0,a.Lk)("p",R,(0,l.v_)(e.description),1)])]))),64))],2)]),(0,a.Lk)("section",F,[K[5]||(K[5]=(0,a.Lk)("h2",{class:"text-3xl font-bold mb-6 text-center"},"Skills",-1)),(0,a.Lk)("div",M,[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(G,(e=>(0,a.Lk)("div",{key:e,class:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"},(0,l.v_)(e),1))),64))])]),K[7]||(K[7]=(0,a.Fv)('<section id="contact" class="py-20"><h2 class="text-3xl font-bold mb-6 text-center">Contact</h2><div class="max-w-md mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"><p class="text-lg mb-6 text-center"> I&#39;m always open to new work opportunities and collaborations. Feel free to reach out to me at <a href="mailto:contact@jerheng.com" class="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">contact@jerheng.com</a>! </p></div></section>',1))]),(0,a.Lk)("div",T,[(0,a.Lk)("a",U,[(0,a.bF)((0,n.R1)(c.A),{class:"h-6 w-6 text-blue-600 dark:text-blue-400"})]),(0,a.Lk)("a",W,[(0,a.bF)((0,n.R1)(d.A),{class:"h-6 w-6 text-gray-800 dark:text-gray-200"})])])],2))}};const V=P;var N=V;(0,o.Ef)(N).mount("#app")},1382:function(e,t,r){var o={"./albumUsage.gif":3585,"./loa-helper.png":5229,"./shopee-logo.png":1343,"./temasek-international.jpg":6075};function a(e){var t=l(e);return r(t)}function l(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=l,e.exports=a,a.id=1382},3585:function(e,t,r){"use strict";e.exports=r.p+"img/albumUsage.0fbccc01.gif"},5229:function(e,t,r){"use strict";e.exports=r.p+"img/loa-helper.4b2e9149.png"},1343:function(e,t,r){"use strict";e.exports=r.p+"img/shopee-logo.30eead1b.png"},6075:function(e,t,r){"use strict";e.exports=r.p+"img/temasek-international.28376d89.jpg"}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,r),l.exports}r.m=e,function(){var e=[];r.O=function(t,o,a,l){if(!o){var n=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],l=e[d][2];for(var i=!0,s=0;s<o.length;s++)(!1&l||n>=l)&&Object.keys(r.O).every((function(e){return r.O[e](o[s])}))?o.splice(s--,1):(i=!1,l<n&&(n=l));if(i){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[o,a,l]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p=""}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,l,n=o[0],i=o[1],s=o[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(s)var d=s(r)}for(t&&t(o);c<n.length;c++)l=n[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(d)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(8108)}));o=r.O(o)})();
//# sourceMappingURL=app.91fc4f1b.js.map
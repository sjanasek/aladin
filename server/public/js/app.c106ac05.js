(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],d=0,l=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({404:"404",exercise:"exercise",exercises:"exercises",home:"home",login:"login",register:"register",settings:"settings"}[e]||e)+"."+{404:"1fa99b08",exercise:"73c6623d",exercises:"f60f867d",home:"aa04e1fd",login:"ee976f3b",register:"5e9673be",settings:"fb2d7129"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={404:1,exercise:1,exercises:1,login:1,register:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({404:"404",exercise:"exercise",exercises:"exercises",home:"home",login:"login",register:"register",settings:"settings"}[e]||e)+"."+{404:"d763e97a",exercise:"8fdda920",exercises:"eea83fa3",home:"31d6cfe0",login:"ff44b719",register:"618e5b4f",settings:"31d6cfe0"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],d=s.getAttribute("data-href");if(d===r||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"41cb":function(e,t,n){"use strict";n("d3b7");var r=n("ba4c"),a=n.n(r),o=n("8c4f");a.a.use(o["a"]);var i=[{path:"/",name:"home",component:function(){return n.e("home").then(n.bind(null,"bb51"))},meta:{transitionName:"slide"}},{path:"/exercises",name:"exercises",component:function(){return n.e("exercises").then(n.bind(null,"b280"))},meta:{transitionName:"slide"}},{path:"/exercise/:exerciseName",name:"exercise",component:function(){return n.e("exercise").then(n.bind(null,"652e"))},meta:{transitionName:"slide"}},{path:"/login",name:"login",component:function(){return n.e("login").then(n.bind(null,"a55b"))},meta:{transitionName:"slide",loggedIn:!1}},{path:"/register",name:"register",component:function(){return n.e("register").then(n.bind(null,"73cf"))},meta:{transitionName:"slide",loggedIn:!1}},{path:"/settings",name:"settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{transitionName:"slide",loggedIn:!0}},{path:"*",name:"404",component:function(){return n.e("404").then(n.bind(null,"8cdb"))},meta:{transitionName:"slide"}}],c=new o["a"]({mode:"history",base:"/",routes:i});t["a"]=c},"4d8b":function(e,t,n){"use strict";var r=n("a7d3"),a=n.n(r);a.a},5465:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("ba4c"),a=n.n(r),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("Header",{scopedSlots:e._u([{key:"right",fn:function(){return[e.installBtn?n("div",[n("a",{staticClass:"nav__navigation--install sm:mt-0 ml-2",on:{click:function(t){return t.preventDefault(),e.installer()}}},[e._v("Install")])]):e._e()]},proxy:!0}])}),n("router-view",{staticClass:"app__main"})],1)},i=[],c=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("2fa7")),u=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"nav"},[n("div",{staticClass:"nav__brand"},[n("img",{staticClass:"nav__brand--logo",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Htw-dresden-logo.svg",alt:"HTW Logo"}}),n("router-link",{staticClass:"nav__brand--title",attrs:{to:"/"},nativeOn:{click:function(t){return e.toggle(t)}}},[e._v("ALADIN")])],1),n("div",{staticClass:"nav__mobile block sm:hidden"},[n("button",{staticClass:"nav__mobile--hamburger",on:{click:e.toggle}},[n("svg",{staticClass:"fill-current h-3 w-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("title",[e._v("Menu")]),n("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])]),n("div",{staticClass:"nav__navigation sm:flex sm:items-center sm:w-auto",class:e.open?"block":"hidden"},[n("div",{staticClass:"nav__navigation--links sm:flex-grow"},[n("router-link",{staticClass:"link sm:inline-block sm:mt-0",attrs:{to:"/"},nativeOn:{click:function(t){return e.toggle(t)}}},[e._v(e._s(e.texts?e.texts.home:""))]),n("router-link",{staticClass:"link sm:inline-block sm:mt-0",attrs:{to:"/exercises"},nativeOn:{click:function(t){return e.toggle(t)}}},[e._v(e._s(e.texts?e.texts.exercises:""))]),e.loggedIn?n("router-link",{staticClass:"link sm:inline-block sm:mt-0",attrs:{to:"/settings"},nativeOn:{click:function(t){return e.toggle(t)}}},[e._v(e._s(e.texts?e.texts.settings:""))]):e._e()],1),e.loggedIn?e._e():n("div",[n("router-link",{staticClass:"nav__navigation--login sm:mt-0",attrs:{to:"/login"},nativeOn:{click:function(t){return e.toggle(t)}}},[e._v("Login")])],1),e.loggedIn?n("div",[n("a",{staticClass:"nav__navigation--logout sm:mt-0",on:{click:function(t){return t.preventDefault(),e.$store.dispatch("user/logout")}}},[e._v("Logout")])]):n("div",[n("router-link",{staticClass:"nav__navigation--register sm:mt-0",attrs:{to:"/register"},nativeOn:{click:function(t){return e.toggle(t)}}},[e._v("Register")])],1),e._t("right")],2)])}),s=[],d={data:function(){return{open:!0,texts:localStorage.texts?localStorage.texts.nav:{}}},methods:{toggle:function(){window.outerWidth<640&&(this.open=!this.open)},showOverlay:function(){document.querySelector(".overlay").style.height="100vh"},menuResize:function(){window.outerWidth<640?this.open=!1:this.open=!0}},computed:{loggedIn:function(){return this.$store.state.user.token}},created:function(){var e=this;this.$store.subscribe((function(t){"user/SET_TEXTS"===t.type&&(e.texts=t.payload.nav)}))},mounted:function(){window.outerWidth<640&&(this.open=!1),window.addEventListener("resize",this.menuResize)},destroyed:function(){window.removeEventListener("resize",this.menuResize)}},l=d,p=(n("4d8b"),n("2877")),f=Object(p["a"])(l,u,s,!1,null,null,null),g=f.exports,h=n("6b5f"),v=n("2f62");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y,E=Object(v["a"])("user"),S=E.mapState,_={data:function(){return{installBtn:!1,installer:void 0}},components:{Header:g},created:function(){var e,t=this;window.addEventListener("beforeinstallprompt",(function(n){n.preventDefault(),e=n,t.installBtn=!0})),this.installer=function(){var n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return t.installBtn=!1,e.prompt(),r.next=4,regeneratorRuntime.awrap(e.userChoice);case 4:n=r.sent,"accepted"===n.outcome&&t.subscribe();case 6:case"end":return r.stop()}}))}},mounted:function(){var e=this;document.addEventListener("keydown",(function(t){"p"===t.key&&t.altKey&&e.$store.commit("user/TOGGLE_PRESENTER_MODE")}))},computed:b({},S(["publicVapidKey"])),methods:{subscribe:function(){var e,t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(navigator.serviceWorker.register("service-worker.js"));case 2:return e=r.sent,r.next=5,regeneratorRuntime.awrap(e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Object(h["k"])(this.publicVapidKey)}));case 5:return t=r.sent,n={subscription:t,uuid:this.$store.state.user.uuid||""},r.next=9,regeneratorRuntime.awrap(fetch("/api/subscribe",{method:"POST",body:JSON.stringify(n),headers:{"content-type":"application/json"}}));case 9:case"end":return r.stop()}}),null,this)}}},T=_,x=(n("a5d2"),Object(p["a"])(T,o,i,!1,null,null,null)),O=x.exports,R=n("50cf"),P=n("e37d"),w=n("9483"),j=n("a543"),A=n.n(j),k=function(e){A.a.confirm("Update",(function(){e.postMessage({action:"skipWaiting"})}))};Object(w["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh."),k(e.waiting)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),navigator.serviceWorker.addEventListener("controllerchange",(function(){y||(window.location.reload(),y=!0)}));var L=n("41cb");a.a.use(v["b"]);var B=new v["b"].Store({modules:{user:n("bac6").default,gozintograph:n("8215").default,sql:n("85a8").default}});a.a.config.productionTip=!1,a.a.use(R["a"]),a.a.use(P["a"]),n("585e"),n("724b"),B.dispatch("user/authenticate"),B.dispatch("user/getLanguage"),L["a"].beforeEach((function(e,t,n){!0===e.meta.loggedIn?localStorage.token?n():n("/login"):!1===e.meta.loggedIn&&localStorage.token?n("/"):n()})),new a.a({router:L["a"],store:B,render:function(e){return e(O)}}).$mount("#app")},"585e":function(e,t,n){},"6b5f":function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"k",(function(){return u})),n.d(t,"i",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return p})),n.d(t,"f",(function(){return f})),n.d(t,"h",(function(){return g})),n.d(t,"j",(function(){return h})),n.d(t,"g",(function(){return v}));n("99af"),n("a623"),n("cb29"),n("4de4"),n("4160"),n("d81d"),n("13d5"),n("ace4"),n("b64b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("38cf"),n("5319"),n("fd87"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a9"),n("72f7"),n("159b");var r=n("bf2d"),a=n("2fa7"),o=n("284c");function i(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function c(e,t,n){var r=!1;n=n||[],e=e.map((function(e){return{node:e,rect:e.getBoundingClientRect()}})),n=n.map((function(e){return{node:e,rect:e.getBoundingClientRect()}}));var a=[].concat(Object(o["a"])(e),Object(o["a"])(n));return e.forEach((function(e,n){for(var o=0;o<a.length;o++)if(e.rect.right>=a[o].rect.left&&e.rect.left<=a[o].rect.right&&e.rect.bottom>=a[o].rect.top&&e.rect.top<=a[o].rect.bottom&&o!==n){t(e.node),r=!0;break}})),r}function u(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=window.atob(n),a=new Uint8Array(r.length),o=0;o<r.length;++o)a[o]=r.charCodeAt(o);return a}function s(e,t,n,r){return t.map((function(o){return Object(a["a"])({},o.id,t.map((function(t){var a=e.filter((function(e){return e.parent===o.id&&e.child===t.id}));return a.length?{id:t.id,amount:void 0!==r?"":void 0!==n?n:a[0].value}:{id:t.id,amount:void 0!==r?"":0}})))}))}function d(e){if(void 0!==e&&null!==e)return JSON.parse(JSON.stringify(e))}function l(e){if(e)try{var t=JSON.parse(e);if(t&&"object"===Object(r["a"])(t))return t}catch(n){if("string"===typeof e)return e}}function p(e){return e.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g,(function(e,t){return 0===+e?"":0==t?e.toLowerCase():e.toUpperCase()}))}function f(e){if(e.length===e[0].length){var t=0,n=0,r=0,a=e.length,o=0,i=[],c=[];for(t=0;t<a;t+=1)for(i[i.length]=[],c[c.length]=[],r=0;r<a;r+=1)i[t][r]=t==r?1:0,c[t][r]=e[t][r];for(t=0;t<a;t+=1){if(o=c[t][t],0==o){for(n=t+1;n<a;n+=1)if(0!=c[n][t]){for(r=0;r<a;r++)o=c[t][r],c[t][r]=c[n][r],c[n][r]=o,o=i[t][r],i[t][r]=i[n][r],i[n][r]=o;break}if(o=c[t][t],0==o)return}for(r=0;r<a;r++)c[t][r]=c[t][r]/o,i[t][r]=i[t][r]/o;for(n=0;n<a;n++)if(n!=t)for(o=c[n][t],r=0;r<a;r++)c[n][r]-=o*c[t][r],i[n][r]-=o*i[t][r]}return i}}function g(e,t){var n=new Array(e.length).fill(0).map((function(){return new Array(t[0].length).fill(0)}));return n.map((function(n,r){return n.map((function(n,a){return e[r].reduce((function(e,n,r){return e+n*t[r][a]}),0)}))}))}function h(e,t,n){var r="";return n=n||" ",Object.keys(t).forEach((function(a){r=e.replace(new RegExp("\\$"+"{\\.\\.\\.".concat(a,"}"),"g"),(function(){return t[a].reduce((function(e,t,r){return r?e+n+t:t}),"")})).replace(new RegExp("\\$"+"{".concat(a,"}"),"g"),t[a])})),r}function v(e,t,n){var a=Object.keys,o=Object(r["a"])(e),i=Object(r["a"])(t),c=e&&t&&"object"===o&&o===i?a(e).length===a(t).length&&a(e).every((function(r,o){return m(r.toLowerCase(),a(t)[o].toLowerCase())<=n&&v(e[r],t[a(t)[o]],n)})):e===t;return c}function m(e,t){var n,r,a,o,i,c,u,s,d,l,p,f=e.length,g=t.length;if(0===f)return g;if(0===g)return f;for(f>g&&(n=e,e=t,t=n),c=new Int8Array(f+1),r=0;r<=f;r++)c[r]=r;for(r=1;r<=g;r++){for(o=r,p=t[r-1],a=1;a<=f;a++)p===e[a-1]?i=c[a-1]:(u=o+1,s=c[a]+1,d=u-(u-s&s-u>>7),l=c[a-1]+1,i=d-(d-l&l-d>>7)),c[a-1]=o,o=i;c[f]=o}return c[f]}},"724b":function(e,t,n){},8215:function(e,t,n){"use strict";n.r(t);n("99af"),n("4de4"),n("0481"),n("5db7"),n("4160"),n("d81d"),n("13d5"),n("4069"),n("73d9"),n("b64b"),n("159b");var r=n("284c"),a=n("2fa7"),o=n("6b5f"),i=Object(o["d"])(localStorage.texts),c={};i&&(c=i.exercises.gozintograph.options);var u=[{level:[[{id:"P0",amount:10,need:10,isLeaf:!1,needAdded:!1},{id:"P1",amount:2,need:2,isLeaf:!1,needAdded:!1}],[{id:"K0",amount:68,need:8,isLeaf:!0,needAdded:!0},{id:"B1",amount:31,need:1,isLeaf:!1,needAdded:!0},{id:"K1",amount:13,need:3,isLeaf:!0,needAdded:!0}],[{id:"R0",amount:147,need:9,isLeaf:!0,needAdded:!0}]],connections:[{parent:"P0",child:"K0",value:6,type:"root"},{parent:"P0",child:"B1",value:3,type:"root"},{parent:"P1",child:"K1",value:5,type:"root"},{parent:"P1",child:"R0",value:7,type:"root"},{parent:"B1",child:"R0",value:4,type:""}],paths:[[{parent:"P0",child:"K0",value:6,type:"root"}],[{parent:"P1",child:"K1",value:5,type:"root"}],[{parent:"P1",child:"R0",value:7,type:"root"}],[{parent:"B1",child:"R0",value:4,type:""},{parent:"P0",child:"B1",value:3,type:"root"}]],depth:3},{level:[[{id:"P0",amount:2,need:2,isLeaf:!1,needAdded:!1},{id:"P1",amount:10,need:10,isLeaf:!1,needAdded:!1}],[{id:"R0",amount:110,need:10,isLeaf:!0,needAdded:!0},{id:"B1",amount:28,need:10,isLeaf:!1,needAdded:!0},{id:"B2",amount:6,need:2,isLeaf:!1,needAdded:!0}],[{id:"R1",amount:36,need:6,isLeaf:!0,needAdded:!0},{id:"K0",amount:63,need:3,isLeaf:!0,needAdded:!0}]],connections:[{parent:"P1",child:"R0",value:10,type:"root"},{parent:"P0",child:"B1",value:9,type:"root"},{parent:"P0",child:"B2",value:2,type:"root"},{parent:"P0",child:"R1",value:1,type:"root"},{parent:"B1",child:"R1",value:1,type:""},{parent:"P1",child:"K0",value:3,type:"root"},{parent:"B2",child:"K0",value:5,type:""}],paths:[[{parent:"P1",child:"R0",value:10,type:"root"}],[{parent:"P0",child:"R1",value:1,type:"root"}],[{parent:"B1",child:"R1",value:1,type:""},{parent:"P0",child:"B1",value:9,type:"root"}],[{parent:"P1",child:"K0",value:3,type:"root"}],[{parent:"B2",child:"K0",value:5,type:""},{parent:"P0",child:"B2",value:2,type:"root"}]],depth:3},{level:[[{id:"P0",amount:8,need:8,isLeaf:!1,needAdded:!1},{id:"P1",amount:6,need:6,isLeaf:!1,needAdded:!1},{id:"P2",amount:8,need:8,isLeaf:!1,needAdded:!1}],[{id:"K0",amount:34,need:4,isLeaf:!0,needAdded:!0},{id:"K1",amount:83,need:3,isLeaf:!0,needAdded:!0},{id:"B2",amount:49,need:1,isLeaf:!1,needAdded:!0}],[{id:"K2",amount:226,need:4,isLeaf:!0,needAdded:!0}]],connections:[{parent:"P1",child:"K0",value:5,type:"root"},{parent:"P0",child:"K1",value:10,type:"root"},{parent:"P1",child:"B2",value:8,type:"root"},{parent:"P0",child:"K2",value:6,type:"root"},{parent:"P1",child:"K2",value:6,type:"root"},{parent:"P2",child:"K2",value:5,type:"root"},{parent:"B2",child:"K2",value:2,type:""}],paths:[[{parent:"P1",child:"K0",value:5,type:"root"}],[{parent:"P0",child:"K1",value:10,type:"root"}],[{parent:"P0",child:"K2",value:6,type:"root"}],[{parent:"P1",child:"K2",value:6,type:"root"}],[{parent:"P2",child:"K2",value:5,type:"root"}],[{parent:"B2",child:"K2",value:2,type:""},{parent:"P1",child:"B2",value:8,type:"root"}]],depth:3},{level:[[{id:"P0",amount:1,need:1,isLeaf:!1,needAdded:!1},{id:"P1",amount:1,need:1,isLeaf:!1,needAdded:!1}],[{id:"K0",amount:18,need:9,isLeaf:!0,needAdded:!0},{id:"B1",amount:9,need:1,isLeaf:!1,needAdded:!0},{id:"B2",amount:15,need:8,isLeaf:!1,needAdded:!0}],[{id:"B3",amount:29,need:4,isLeaf:!1,needAdded:!0}],[{id:"K1",amount:424,need:10,isLeaf:!0,needAdded:!0}]],connections:[{parent:"P1",child:"K0",value:9,type:"root"},{parent:"P0",child:"B1",value:8,type:"root"},{parent:"P0",child:"B2",value:1,type:"root"},{parent:"P1",child:"B2",value:6,type:"root"},{parent:"P0",child:"B3",value:7,type:"root"},{parent:"B1",child:"B3",value:2,type:""},{parent:"P1",child:"K1",value:4,type:"root"},{parent:"B2",child:"K1",value:8,type:""},{parent:"B3",child:"K1",value:10,type:""}],paths:[[{parent:"P1",child:"K0",value:9,type:"root"}],[{parent:"P1",child:"K1",value:4,type:"root"}],[{parent:"B2",child:"K1",value:8,type:""},{parent:"P0",child:"B2",value:1,type:"root"}],[{parent:"B2",child:"K1",value:8,type:""},{parent:"P1",child:"B2",value:6,type:"root"}],[{parent:"B3",child:"K1",value:10,type:""},{parent:"P0",child:"B3",value:7,type:"root"}],[{parent:"B3",child:"K1",value:10,type:""},{parent:"B1",child:"B3",value:2,type:""},{parent:"P0",child:"B1",value:8,type:"root"}]],depth:4},{level:[[{id:"P0",amount:7,need:7,isLeaf:!1,needAdded:!1},{id:"P1",amount:6,need:6,isLeaf:!1,needAdded:!1}],[{id:"K0",amount:90,need:6,isLeaf:!0,needAdded:!0},{id:"R0",amount:33,need:9,isLeaf:!0,needAdded:!0}]],connections:[{parent:"P0",child:"K0",value:6,type:"root"},{parent:"P1",child:"K0",value:7,type:"root"},{parent:"P1",child:"R0",value:4,type:"root"}],paths:[[{parent:"P0",child:"K0",value:6,type:"root"}],[{parent:"P1",child:"K0",value:7,type:"root"}],[{parent:"P1",child:"R0",value:4,type:"root"}]],depth:2}];t["default"]={namespaced:!0,state:{presenterGozintographs:u,presenterGozintographIndex:0,graph:{},currentTab:"",matrixPathStep:"",userUnitMatrix:[],userDirectMatrix:[],userSubtractedMatrix:[],userSubtractedMatrix2:[],userSecondaryVector:[],userInvertedMatrix:[],userPaths:[[{child:"",parent:"",value:""}]],options:[{content:"depth",value:3,label:c.depth||"Depth",valueType:"number",optionType:"value"},{content:"connectionThreshold",value:.7,label:c.connectionThreshold||"Edge Threshold",valueType:"number",float:"0.01",optionType:"value"},{content:"rangeAmount",value:{min:1,max:10},label:[c.rangeAmount?c.rangeAmount.min:"Min Primary",c.rangeAmount?c.rangeAmount.max:"Max Primary"],valueType:"number",optionType:"range"},{content:"rangeWidth",value:{min:1,max:3},label:[c.rangeWidth?c.rangeWidth.min:"Min Breadth",c.rangeWidth?c.rangeWidth.max:"Max Breadth"],valueType:"number",optionType:"range"},{content:"rangeValue",value:{min:1,max:10},label:[c.rangeValue?c.rangeValue.min:"Min Edge Value",c.rangeValue?c.rangeValue.max:"Max Edge Value"],valueType:"number",optionType:"range"}]},getters:{getOptions:function(e){return e.options},getGraph:function(e){return e.graph},getParameters:function(e){return e.options.reduce((function(e,t){return Object.assign(e,Object(a["a"])({},t.content,t.value))}),{})},getPrimary:function(e){return e.graph.level.reduce((function(e,t){return[].concat(Object(r["a"])(e),Object(r["a"])(t))}),[]).flatMap((function(e){return Object(a["a"])({},e.id,[{id:e.id,amount:e.need,isLeaf:e.isLeaf}])}))},getFullPrimary:function(e){return e.graph.level.reduce((function(e,t,n){var a,o;n?(a=e[0]["P"]).push.apply(a,Object(r["a"])(t.flatMap((function(e){return{id:e.id,amount:e.need}})))):(o=e[0]["P"]).push.apply(o,Object(r["a"])(t));return e}),[{P:[]}])},getSecondaryVector:function(e){return e.graph.level.filter((function(e,t){return t})).flat().map((function(e){return Object(a["a"])({},e.id,[e])}))},getFullSecondary:function(e){return e.graph.level.reduce((function(e,t){var n;return(n=e[0]["S"]).push.apply(n,Object(r["a"])(t.flatMap((function(e){return e})))),e}),[{S:[]}])},getUserSecondaryVector:function(e,t){var n=Object(o["c"])(t.getSecondaryVector);return n.map((function(e){return e[Object.keys(e)[0]][0].amount="",e}))},getUserSecondaryFullVector:function(e,t){var n=Object(o["c"])(t.getFullSecondary);return n.forEach((function(e){return e[Object.keys(e)[0]].forEach((function(e){return e.amount=""}))})),n},getDirectMatrix:function(e){var t=Object(o["c"])(e.graph.connections),n=Object(o["c"])(e.graph.level),r=n.flatMap((function(e){return e.map((function(e){return e}))}));return Object(o["i"])(t,r)},getUnitMatrix:function(e){var t=Object(o["c"])(e.graph.level),n=t.flatMap((function(e){return e.map((function(e){return e}))}));return n.map((function(e){return Object(a["a"])({},e.id,n.map((function(t){return t.id===e.id?{id:t.id,amount:1}:{id:t.id,amount:0}})))}))},getSubtractedMatrix:function(e,t){for(var n=t.getDirectMatrix,r=t.getUnitMatrix,a=Object(o["c"])(t.getDirectMatrix),i=0;i<n.length;i++)for(var c=n[i],u=r[i],s=a[i],d=Object.keys(c)[0],l=0;l<n.length;l++)s[d][l].amount=u[d][l].amount-c[d][l].amount;return a},getUserDirectMatrices:function(e,t){var n=t.getMaxPathLength,r=[],a=e.graph,i=a.connections,c=a.level.flatMap((function(e){return e.map((function(e){return e}))}));while(n>1)r.push(Object(o["i"])(i,c,0,!0)),n--;return r},getMaxPathLength:function(e){return e.graph.paths.reduce((function(e,t){return e>t.length?e:t.length}),0)},getUserAggregatedMatrix:function(e){var t=e.graph,n=t.connections,r=t.level.flatMap((function(e){return e.map((function(e){return e}))}));return Object(o["i"])(n,r,0,!0)}},mutations:{SET_GOZINTOGRAPH_PRESENTER_INDEX:function(e){var t=e.presenterGozintographIndex,n=e.presenterGozintographs.length-1;t===n?e.presenterGozintographIndex=0:e.presenterGozintographIndex++},SET_OPTIONS:function(e,t){e.options=t},SET_GRAPH:function(e,t){e.graph=t},SET_CURRENT_TAB:function(e,t){e.currentTab=t},SET_USER_DIRECT_MATRIX:function(e,t){e.userDirectMatrix=t},SET_USER_UNIT_MATRIX:function(e,t){e.userUnitMatrix=t},SET_USER_SUBTRACTED_MATRIX:function(e,t){e.userSubtractedMatrix=t},SET_USER_INVERTED_MATRIX:function(e,t){e.userInvertedMatrix=t},SET_MATRIX_PATH_STEP:function(e,t){e.matrixPathStep=t},SET_USER_PATHS:function(e,t){e.userPaths=t},CLEAR_STATE:function(e){e.graph={},e.currentTab="",e.matrixPathStep="",e.userUnitMatrix=[],e.userDirectMatrix=[],e.userSubtractedMatrix=[],e.userSubtractedMatrix2=[],e.userSecondaryVector=[],e.userInvertedMatrix=[],e.userPaths=[[{child:"",parent:"",value:""}]]}},actions:{updateOptions:function(e,t){var n=e.commit;n("SET_OPTIONS",t)},setUserMatrices:function(e){var t=e.state,n=e.commit,r=Object(o["c"])(t.graph.connections),a=Object(o["c"])(t.graph.level),i=a.flatMap((function(e){return e.map((function(e){return e}))})),c=Object(o["i"])(r,i,0,!0),u=Object(o["c"])(c),s=Object(o["c"])(c),d=Object(o["c"])(c);n("SET_USER_UNIT_MATRIX",c),n("SET_USER_DIRECT_MATRIX",u),n("SET_USER_SUBTRACTED_MATRIX",s),n("SET_USER_INVERTED_MATRIX",d)},setGraph:function(e,t){var n=e.commit,r=e.dispatch;n("SET_GRAPH",t),n("SET_USER_PATHS",[[{child:"",parent:"",value:""}]]),r("setUserMatrices")}}}},"85a8":function(e,t,n){"use strict";n.r(t);n("99af"),n("4160"),n("13d5"),n("b64b"),n("d3b7"),n("159b"),n("96cf");var r=n("284c"),a=n("bf2d"),o=n("bc3a"),i=n.n(o),c=n("ba4c"),u=n.n(c);t["default"]={namespaced:!0,state:{dbList:[],selectedDB:{dbName:"",index:null},queryList:[],currentTab:"",generated:{}},getters:{getFormatedResult:function(e){return function(t){var n=t.index,r=t.type,o="existing"===r?e.queryList[n].userResult:e.generated[e.selectedDB.dbName][n].userResult;return"object"!==Object(a["a"])(o)?o:o.reduce((function(e,t,n){return n||(e+="<tr>",Object.keys(t).forEach((function(t){e+="<th>".concat(t,"</th>")})),e+="</tr>"),e+="<tr>",Object.keys(t).forEach((function(n){e+="<td>".concat(t[n],"</td>")})),e+="</tr>",e}),'<table border="1">').concat("</tr>")}}},mutations:{SET_DB_LIST:function(e,t){e.dbList=t},SET_DB:function(e,t){e.selectedDB=t},SET_QUERY_LIST:function(e,t){e.queryList=t},SET_GENERATED_LIST:function(e,t){var n=t.query,a=t.question,o=e.selectedDB.dbName;e.generated[o]||(e.generated[o]=u.a.set(e.generated,o,[])),e.generated[o]=[].concat(Object(r["a"])(e.generated[o]),[{query:n,question:a,userQuery:"",userResult:"",result:""}])},SET_CURRENT_TAB:function(e,t){e.currentTab=t},SET_QUERY_RESULT:function(e,t){var n=t.index,r=t.userResult,a=t.result,o=t.type;if("generated"===o){var i=e.selectedDB.dbName;e.generated[i][n].userResult=r,e.generated[i][n].result=a}else e.queryList[n].userResult=r,e.queryList[n].result=a},SET_USER_QUERY_LIST:function(e,t){var n=t.userQuery,r=t.index;e.queryList[r].userQuery=n},SET_USER_QUERY_GENERATED:function(e,t){var n=t.userQuery,r=t.index,a=e.selectedDB.dbName;e.generated[a][r].userQuery=n}},actions:{getDBList:function(e){var t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return t=e.commit,r.prev=1,r.next=4,regeneratorRuntime.awrap(i.a.get("/api/getDBList"));case 4:n=r.sent,t("SET_DB_LIST",n.data),r.next=10;break;case 8:r.prev=8,r.t0=r["catch"](1);case 10:case"end":return r.stop()}}),null,null,[[1,8]])},getQueryList:function(e){var t,n,r;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return t=e.commit,n=e.state,a.prev=1,a.next=4,regeneratorRuntime.awrap(i.a.get("/api/getDBQuestions?dbName=".concat(n.selectedDB.dbName)));case 4:r=a.sent,t("SET_QUERY_LIST",r.data),a.next=10;break;case 8:a.prev=8,a.t0=a["catch"](1);case 10:case"end":return a.stop()}}),null,null,[[1,8]])},generateQuery:function(e){var t,n,r,a;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return t=e.commit,n=e.state,o.prev=1,r={dbName:n.selectedDB.dbName},o.next=5,regeneratorRuntime.awrap(i.a.post("/api/generateQuery",r));case 5:a=o.sent,t("SET_GENERATED_LIST",a.data),o.next=11;break;case 9:o.prev=9,o.t0=o["catch"](1);case 11:case"end":return o.stop()}}),null,null,[[1,9]])},submitQuery:function(e,t){var n,r;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.prev=1,a.next=4,regeneratorRuntime.awrap(i.a.post("/api/submitQuery",t));case 4:r=a.sent,n("SET_QUERY_RESULT",r.data),a.next=10;break;case 8:a.prev=8,a.t0=a["catch"](1);case 10:case"end":return a.stop()}}),null,null,[[1,8]])}}}},a5d2:function(e,t,n){"use strict";var r=n("5465"),a=n.n(r);a.a},a7d3:function(e,t,n){},bac6:function(e,t,n){"use strict";n.r(t);n("a4d3"),n("4de4"),n("4160"),n("caad"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("2532"),n("159b"),n("96cf");var r=n("2fa7"),a=n("bc3a"),o=n.n(a),i=n("41cb"),c=n("6b5f");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t["default"]={namespaced:!0,state:{publicVapidKey:"BHaC5UbbkQBKz6v-I-JQ2abGaTZYfvO6j1CtPQYIBqJJeXdNcETen-BMP0rqZTscCkjPtJDFwqFYwdPPGtX5Tzo",settings:{language:Object(c["d"])(localStorage.language)||navigator.language||"en",texts:Object(c["d"])(localStorage.texts)||{}},uuid:"",token:"",loginError:!1,registerError:!1,languageError:!1,presenterMode:!1},getters:{getTexts:function(e){return e.texts}},mutations:{SET_TEXTS:function(e,t){e.texts=s({},t)},SET_USER_SETTINGS:function(e,t){var n=Object.keys(t);n.includes("token")&&(localStorage.setItem("token",t.token),localStorage.setItem("uuid",t.uuid)),n.forEach((function(n){return e[n]=t[n]}))},REMOVE_USER_CREDENTIALS:function(e){localStorage.removeItem("token"),localStorage.removeItem("uuid"),e.token="",e.uuid=""},SET_API_ERROR:function(e,t){var n=Object.keys(t)[0];e[n]=t[n]},TOGGLE_PRESENTER_MODE:function(e){e.presenterMode=!e.presenterMode}},actions:{authenticate:function(e){var t,n,r;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:if(t=e.commit,a.prev=1,n=localStorage.token,void 0!==n){a.next=6;break}return t("REMOVE_USER_CREDENTIALS"),a.abrupt("return");case 6:return a.next=8,regeneratorRuntime.awrap(o.a.get("api/authenticate",{headers:{Authorization:"Bearer ".concat(n)},params:{uuid:localStorage.uuid}}));case 8:r=a.sent,t("SET_USER_SETTINGS",{token:r.data.token,uuid:r.data.uuid}),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](1),t("REMOVE_USER_CREDENTIALS");case 15:case"end":return a.stop()}}),null,null,[[1,12]])},login:function(e,t){var n,r,a,c;return regeneratorRuntime.async((function(u){while(1)switch(u.prev=u.next){case 0:return n=e.commit,r=t.email,a=t.password,u.prev=2,u.next=5,regeneratorRuntime.awrap(o.a.post("api/login",{email:r,password:a}));case 5:c=u.sent,n("SET_USER_SETTINGS",c.data),history.length<2?i["a"].push("/"):i["a"].go(-1),u.next=13;break;case 10:u.prev=10,u.t0=u["catch"](2),n("SET_API_ERROR",{loginError:!0});case 13:case"end":return u.stop()}}),null,null,[[2,10]])},register:function(e,t){var n,r,a,c;return regeneratorRuntime.async((function(u){while(1)switch(u.prev=u.next){case 0:return n=e.commit,r=t.email,a=t.password,u.prev=2,u.next=5,regeneratorRuntime.awrap(o.a.post("api/register",{email:r,password:a}));case 5:c=u.sent,n("SET_USER_SETTINGS",c.data),history.length<2?i["a"].push("/"):i["a"].go(-1),u.next=13;break;case 10:u.prev=10,u.t0=u["catch"](2),n("SET_API_ERROR",{registerError:!0});case 13:case"end":return u.stop()}}),null,null,[[2,10]])},getLanguage:function(e){var t,n,r,a,i;return regeneratorRuntime.async((function(c){while(1)switch(c.prev=c.next){case 0:return t=e.commit,n=e.state,c.prev=1,r=n.language||navigator.language,c.next=5,regeneratorRuntime.awrap(o.a.post("/api/language",{countryCode:r}));case 5:a=c.sent,i=a.data,t("SET_TEXTS",i),localStorage.texts=JSON.stringify(i),c.next=14;break;case 11:c.prev=11,c.t0=c["catch"](1),t("SET_API_ERROR",{languageError:!0});case 14:case"end":return c.stop()}}),null,null,[[1,11]])},logout:function(e){var t=e.commit;t("REMOVE_USER_CREDENTIALS")}}}}});
//# sourceMappingURL=app.c106ac05.js.map
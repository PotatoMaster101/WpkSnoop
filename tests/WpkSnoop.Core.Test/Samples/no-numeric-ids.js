// expected output:
// e => e + "." + {
//   chunk1: "f1195e719ca60f6a72c0",
//   chunk2: "465e8bbaa66177c00940",
//   src_modules_mod3_js: "13714958953ee2c9b344",
//   chunkBtn: "dca13bd1686fbf6af19b"
// }[e] + ".js"
(()=>{"use strict";var e,t,r,n,o,a,c,i,s={208:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(601),o=r.n(n),a=r(314),c=r.n(a)()(o());c.push([e.id,".hello {\n  color: red;\n}\n",""]);const i=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},511:(e,t,r)=>{var n=r(72),o=r.n(n),a=r(825),c=r.n(a),i=r(659),s=r.n(i),u=r(56),l=r.n(u),d=r(540),p=r.n(d),f=r(113),h=r.n(f),v=r(208),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=c(),m.insertStyleElement=p(),o()(v.A,m),v.A&&v.A.locals&&v.A.locals},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=n.base?s[0]+n.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=r(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,n);n.byIndex=i,t.splice(i,0,{identifier:d,updater:h,references:1})}c.push(d)}return c}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=r(a[c]);t[i].references--}for(var s=n(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},44:(e,t,r)=>{r.a(e,(async(e,t)=>{try{r(511),console.log("index.js loaded"),await r.e("chunk1").then(r.t.bind(r,247,23)),await r.e("chunk2").then(r.t.bind(r,226,23)),await r.e("src_modules_mod3_js").then(r.t.bind(r,737,23));const e=document.createElement("button");e.innerHTML="Click me",e.addEventListener("click",(async()=>{console.log("btn clicked"),await r.e("chunkBtn").then(r.t.bind(r,650,23))})),document.body.appendChild(e),t()}catch(e){t(e)}}),1)}},u={};function l(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={id:e,exports:{}};return s[e](r,r.exports,l),r.exports}l.m=s,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},l.a=(o,a,c)=>{var i;c&&((i=[]).d=-1);var s,u,l,d=new Set,p=o.exports,f=new Promise(((e,t)=>{l=t,u=e}));f[t]=p,f[e]=e=>(i&&e(i),d.forEach(e),f.catch((e=>{}))),o.exports=f,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{c[t]=e,n(a)}),(e=>{c[r]=e,n(a)}));var c={};return c[e]=e=>e(a),c}}var i={};return i[e]=e=>{},i[t]=o,i})))(o);var c=()=>s.map((e=>{if(e[r])throw e[r];return e[t]})),u=new Promise((t=>{(a=()=>t(c)).r=0;var r=e=>e!==i&&!d.has(e)&&(d.add(e),e&&!e.d&&(a.r++,e.push(a)));s.map((t=>t[e](r)))}));return a.r?u:c()}),(e=>(e?l(f[r]=e):u(p),n(i)))),i&&i.d<0&&(i.d=0)},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);l.r(r);var n={};o=o||[null,a({}),a([]),a(a)];for(var c=2&t&&e;"object"==typeof c&&!~o.indexOf(c);c=a(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,l.d(r,n),r},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>e+"."+{chunk1:"f1195e719ca60f6a72c0",chunk2:"465e8bbaa66177c00940",src_modules_mod3_js:"13714958953ee2c9b344",chunkBtn:"dca13bd1686fbf6af19b"}[e]+".js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c={},i="webpack-test:",l.l=(e,t,r,n)=>{if(c[e])c[e].push(t);else{var o,a;if(void 0!==r)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==i+r){o=d;break}}o||(a=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.setAttribute("data-webpack",i+r),o.src=e),c[e]=[t];var p=(t,r)=>{o.onerror=o.onload=null,clearTimeout(f);var n=c[e];if(delete c[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),a&&document.head.appendChild(o)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={index:0};l.f.j=(t,r)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=l.p+l.u(t),c=new Error;l.l(a,(r=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,c,i]=r,s=0;if(a.some((t=>0!==e[t]))){for(n in c)l.o(c,n)&&(l.m[n]=c[n]);i&&i(l)}for(t&&t(r);s<a.length;s++)o=a[s],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),l.nc=void 0,l(44)})();

if(!self.define){let e,i={};const l=(l,r)=>(l=new URL(l+".js",r).href,i[l]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=i,document.head.appendChild(e)}else e=l,importScripts(l),i()})).then((()=>{let e=i[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const u=e=>l(e,o),c={module:{uri:o},exports:s,require:u};i[o]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(n(...e),s)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"cat-lovers-forum"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.83f536c1.css",revision:null},{url:"/img/1.79b1581c.jpeg",revision:null},{url:"/img/2.fcbff0ef.jpeg",revision:null},{url:"/img/3.86e3436d.jpeg",revision:null},{url:"/img/4.f6755558.jpeg",revision:null},{url:"/img/5.e9cbecb2.jpeg",revision:null},{url:"/img/6.4f1eac10.jpeg",revision:null},{url:"/img/7.b0ce8dbf.jpeg",revision:null},{url:"/img/8.b18476a0.jpeg",revision:null},{url:"/img/9.955be152.jpeg",revision:null},{url:"/img/email-icon.72993c3c.png",revision:null},{url:"/img/google-icon.1f352370.png",revision:null},{url:"/img/logo.0bc4a3a2.png",revision:null},{url:"/img/profile-photo.3684c4a7.png",revision:null},{url:"/index.html",revision:"c7f115c4221b739f6d7e7503f652692e"},{url:"/js/app.cd404d07.js",revision:null},{url:"/js/chunk-vendors.546c8de6.js",revision:null},{url:"/manifest.json",revision:"5b9c4ec390a0abe798be1264a8724528"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/service-workier.js",revision:"b0c033cf2fb0c4989555518e641906f9"}],{})}));
//# sourceMappingURL=service-worker.js.map

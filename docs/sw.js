if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const a=e=>i(e,n),o={module:{uri:n},exports:t,require:a};s[n]=Promise.all(r.map((e=>o[e]||a(e)))).then((e=>(l(...e),t)))}}define(["./workbox-3c99db12"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"151ba01ab7ec5b643be5880c000e7cb4"},{url:"assets/_...all_.8dedda60.js",revision:null},{url:"assets/_name_.caf9ff93.js",revision:null},{url:"assets/404.17c2f61b.js",revision:null},{url:"assets/about.bed964cb.js",revision:null},{url:"assets/app.84b8f796.css",revision:null},{url:"assets/app.ae4dbf04.js",revision:null},{url:"assets/contact.44aff867.js",revision:null},{url:"assets/contact.5e2b503b.css",revision:null},{url:"assets/hobby.89a76ee0.js",revision:null},{url:"assets/profile.dd38489d.js",revision:null},{url:"assets/vendor.1124cdfa.js",revision:null},{url:"assets/virtual_pwa-register.06544e54.js",revision:null},{url:"contact.html",revision:"7a796273232dfd08f821eee0e221273d"},{url:"hobby.html",revision:"044321cd32081afd2d95d85022161cf9"},{url:"index.html",revision:"c3dfe56b6f357d7a27a081fe1d000456"},{url:"profile.html",revision:"5d4f2dfc830c1b160a9597d91de22b08"},{url:"safari-pinned-tab.svg",revision:"39b7245d6e357a4f113edc77941dbc4d"},{url:"pwa-192x192.png",revision:"645e965fd624aaab45df10542d80ad56"},{url:"pwa-512x512.png",revision:"9dc7c5b68a5213bfdfb46fa4ac6f86a2"},{url:"manifest.webmanifest",revision:"544b92112ba4bab11e66a048b5b9f39b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

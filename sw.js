if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const o=s=>i(s,r),a={module:{uri:r},exports:t,require:o};e[r]=Promise.all(n.map((s=>a[s]||o(s)))).then((s=>(l(...s),t)))}}define(["./workbox-65baee44"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_...all_.c37861fa.js",revision:null},{url:"assets/_name_.46c00bc5.js",revision:null},{url:"assets/404.fb2562d1.js",revision:null},{url:"assets/about.4bf50221.js",revision:null},{url:"assets/contact.5e2b503b.css",revision:null},{url:"assets/contact.68271878.js",revision:null},{url:"assets/hobby.00c5805d.js",revision:null},{url:"assets/index.34c72b56.js",revision:null},{url:"assets/index.69190c23.css",revision:null},{url:"assets/profile.0f4a3009.js",revision:null},{url:"assets/vendor.79648858.js",revision:null},{url:"assets/virtual_pwa-register.fadadf37.js",revision:null},{url:"index.html",revision:"6ac3b4eb86eaea69f05e5e327c1ddccd"},{url:"safari-pinned-tab.svg",revision:"39b7245d6e357a4f113edc77941dbc4d"},{url:"pwa-192x192.png",revision:"645e965fd624aaab45df10542d80ad56"},{url:"pwa-512x512.png",revision:"9dc7c5b68a5213bfdfb46fa4ac6f86a2"},{url:"manifest.webmanifest",revision:"08d3308e89962b9ddf3cd512d82b751f"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
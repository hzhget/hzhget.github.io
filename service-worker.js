if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return s[e]||(n=new Promise((async n=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},n=(n,s)=>{Promise.all(n.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(n)};self.define=(n,i,r)=>{s[n]||(s[n]=Promise.resolve().then((()=>{let s={};const l={uri:location.origin+n.slice(1)};return Promise.all(i.map((n=>{switch(n){case"exports":return s;case"module":return l;default:return e(n)}}))).then((e=>{const n=r(...e);return s.default||(s.default=n),s}))})))}}define("./service-worker.js",["./workbox-90faa4c2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"showroom-web"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/179.d45813fb.css",revision:null},{url:"css/472.c5f93dc4.css",revision:null},{url:"css/771.b7456971.css",revision:null},{url:"css/834.e255e074.css",revision:null},{url:"css/950.5484c0df.css",revision:null},{url:"css/953.8399f5d9.css",revision:null},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.c7c3f779.css",revision:null},{url:"favicon.ico",revision:"8b9eb314ff597f6f7c7bf8c7a5f717ec"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/fa-brands-400.329a95a9.woff",revision:null},{url:"fonts/fa-brands-400.c1210e5e.woff2",revision:null},{url:"fonts/fa-regular-400.36722648.woff",revision:null},{url:"fonts/fa-regular-400.68c5af1f.woff2",revision:null},{url:"fonts/fa-solid-900.ada6e6df.woff2",revision:null},{url:"fonts/fa-solid-900.c6ec0800.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.0d57c481.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.ae520e14.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"c9920835d2adb9f6ab6a79a27f220a3a"},{url:"icons/apple-icon-152x152.png",revision:"9df9e65a1d2c6df3bd9143666b0e8c63"},{url:"icons/apple-icon-167x167.png",revision:"4300c6c136c06abcd781aa18644dd7a3"},{url:"icons/apple-icon-180x180.png",revision:"88dbf3d9e8269f1298486d103e22a57c"},{url:"icons/favicon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/favicon-16x16.png",revision:"df5ff7f4728c4ef4b951d46b4136906f"},{url:"icons/favicon-32x32.png",revision:"64aa9e88dd6545f64226c1e2230f66cc"},{url:"icons/favicon-96x96.png",revision:"d22664397060743b24e8956a5a3fcdec"},{url:"icons/icon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/icon-192x192.png",revision:"a1b423855a450ae7adbd9d2a782e0dfb"},{url:"icons/icon-256x256.png",revision:"9f33ebc999e51d0dc2975fc573d53a0b"},{url:"icons/icon-384x384.png",revision:"a126be0d50ed682c3129e0b8b31f680a"},{url:"icons/icon-512x512.png",revision:"02abd24e7c8638e848d96a6bf78d2c27"},{url:"icons/ms-icon-144x144.png",revision:"f256ec55be616f32ae486ab7571eb936"},{url:"icons/safari-pinned-tab.svg",revision:"de8107bed7f087fb443d8e36855e7467"},{url:"img/esquel-group-logo.0fa1a57c.png",revision:null},{url:"img/scanner-01.810fddf3.png",revision:null},{url:"index.html",revision:"ceea471c3285d52962a7879fb91a5e50"},{url:"js/179.fb834a6f.js",revision:null},{url:"js/202.7ad420ba.js",revision:null},{url:"js/472.3198e22e.js",revision:null},{url:"js/660.ba554356.js",revision:null},{url:"js/771.2fae87e9.js",revision:null},{url:"js/804.7e477aae.js",revision:null},{url:"js/834.e753a56e.js",revision:null},{url:"js/950.500d27ae.js",revision:null},{url:"js/953.ef9dad2d.js",revision:null},{url:"js/997.fd3721ff.js",revision:null},{url:"js/app.95b83745.js",revision:null},{url:"js/vendor.01e64ee2.js",revision:null},{url:"manifest.json",revision:"6c45e5ebd12624b73bc70a14185decb4"},{url:"notice.mp3",revision:"e2966f27377feaa130e80895e1b9923e"},{url:"scan.mp3",revision:"1a7041885ebc29c9f4c6268e9844fddc"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));

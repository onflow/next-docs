if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1bfc9850-f404807fca02a860259a.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/263.dd4cead859d8e7e92c9c.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/27-d59945d4513e84d47c92.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/523.643a41494b29ecd9f7cf.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/607-7bc551cdbc3b44294381.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/78e521c3-9a8a226f94f9a9eda298.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/875-c075df1d59a4f3533ea6.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/885-6a568bc7bff88b65577c.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/962-ca9f81f8cdb22535b2bf.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/framework-17d52adf14b83c99bde0.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/main-c1a4abc4cdd857fe5a72.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/pages/%5B...markdown%5D-e500e096cb5cdc4893f4.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/pages/_app-09806b765fd7c14c5c31.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/pages/_error-6eee756deb564b21f8ff.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/pages/index-9f4240474cb5d2b193c2.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/polyfills-3d2c0f0875171918a758.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/chunks/webpack-d297a4ef088536aa991e.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/css/cc6c5286fdc3b84e3752.css",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/soibnt_HYPmxbhlAQyz53/_buildManifest.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/_next/static/soibnt_HYPmxbhlAQyz53/_ssgManifest.js",revision:"soibnt_HYPmxbhlAQyz53"},{url:"/images/cadence-color.svg",revision:"e6d99f3442874f52eb6667ce957aac6c"},{url:"/images/cadence.svg",revision:"c0c3d65da83fa78c22280e1d5877234a"},{url:"/images/cli-color.svg",revision:"34bba96852aecec66d4d885e8c0df18b"},{url:"/images/cli.svg",revision:"f2ec2bfbf73bf6f7b54461a717f49cab"},{url:"/images/emulator-color.svg",revision:"d58b7d271c659174b5d9077d36f747f8"},{url:"/images/emulator.svg",revision:"e921dcd28460d08dbe912bcb2972765c"},{url:"/images/flow-docs.svg",revision:"4af17e86bb6af70f8a4d76bad0038c89"},{url:"/images/flow.svg",revision:"e519a3bcd1a5a456dfa751559d6de888"},{url:"/images/go-color.svg",revision:"42286f5a854a8866ed4e28c3bd06e323"},{url:"/images/go.svg",revision:"ac046abf2a0c09308c78cd654e43ab8a"},{url:"/images/js-color.svg",revision:"4e40fef654b27bb7e2d1592a0c8c006f"},{url:"/images/js.svg",revision:"1c8e6f0f2f727ffe6dc5780bbd15a518"},{url:"/images/playground-color.svg",revision:"6be29b87de565394ff8fad43ed54f7c2"},{url:"/images/playground.svg",revision:"308e7f06385b47130a8343ea40eacb67"},{url:"/images/port-color.svg",revision:"b2f87ca6be8aabf65a51f41c448be752"},{url:"/images/port.svg",revision:"b2f87ca6be8aabf65a51f41c448be752"},{url:"/images/search.svg",revision:"ca197dc4227cf440eb48140673295cf7"},{url:"/images/social-bg.jpg",revision:"d101fb0a18cf9b5487ad7ba76f62d3c9"},{url:"/images/vscode-color.svg",revision:"e046c9f86ec4cb0ca2bd2c03f1e0fa82"},{url:"/images/vscode.svg",revision:"e7d90d8e0b0666d08e05cf178808b61d"},{url:"/manifest.json",revision:"6505945e8fcae96cd62feab4bf7f7115"},{url:"/meta-icons/android-chrome-192x192.png",revision:"d5436140c739446421e8291a5dd7293e"},{url:"/meta-icons/android-chrome-384x384.png",revision:"af94c5ea7aaf8bb914df5a7b4882e0ca"},{url:"/meta-icons/apple-touch-icon.png",revision:"5c6377445deba22eddef9b45cad40cf1"},{url:"/meta-icons/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/meta-icons/favicon-16x16.png",revision:"daac409100d792771275056e9bb32cfd"},{url:"/meta-icons/favicon-32x32.png",revision:"3e8b4b1c36aaccac1b090030d179fb32"},{url:"/meta-icons/favicon.ico",revision:"4712e8a7f90085bfd09a9c51234feb20"},{url:"/meta-icons/mstile-150x150.png",revision:"4e5aba082693e5cfcb6d70d073bd5bb0"},{url:"/meta-icons/safari-pinned-tab.svg",revision:"8a40656829d752618131a543e44bf458"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));

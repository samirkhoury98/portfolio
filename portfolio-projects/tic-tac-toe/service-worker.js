// /**
//  * Welcome to your Workbox-powered service worker!
//  *
//  * You'll need to register this file in your web app and you should
//  * disable HTTP caching for this file too.
//  * See https://goo.gl/nhQhGp
//  *
//  * The rest of the code is auto-generated. Please don't update this file
//  * directly; instead, make changes to your Workbox build configuration
//  * and re-run your build process.
//  * See https://goo.gl/2aRDsh
//  */

// importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js");

// importScripts(
//   "/portfolio-projects/tic-tac-toe/precache-manifest.349aeb763adebe5a1495b3d8bd7e2e3f.js"
// );

// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING') {
//     self.skipWaiting();
//   }
// });

// workbox.core.clientsClaim();

// /**
//  * The workboxSW.precacheAndRoute() method efficiently caches and responds to
//  * requests for URLs in the manifest.
//  * See https://goo.gl/S9QRab
//  */
// self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/portfolio-projects/tic-tac-toe/index.html"), {
  
//   blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
// });

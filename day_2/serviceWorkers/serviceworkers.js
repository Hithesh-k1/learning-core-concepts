var cacheName = "v3";
var cacheAssets = ["Index.html", "About.html", "js/script.js", "css/style.css"];
self.addEventListener("install", function (e) {
  console.log("Service Worker : Installed");
  // configure cache
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        console.log("Service Worker : Caching files");
        cache.addAll(cacheAssets);
      })
      .then(function () {
        self.skipWaiting();
      })
  );
});

self.addEventListener("activate", function (e) {
  console.log("Service Worker : Activated !");
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (c) {
          if (c !== cacheName) {
            console.log("Service Worker : Deleting Old Cache !");
            return caches.delete(c);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function (e) {
  console.log("Service Worker : Fetching !");
  e.respondWith(
    fetch(e.request).catch(function () {
      return caches.match(e.request); // fetch the resource from cache
    })
  );
});

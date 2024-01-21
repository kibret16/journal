self.addEventListener('install', (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open('/').then((cache) => cache.addAll([
      'index.html',
      'icon.png',
      'script.js',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

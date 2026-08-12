self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('adrigizmo-store').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/resume.html',
        '/game.html',
        '/blog.html'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
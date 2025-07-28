self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('shareanote-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico',
        '/site.webmanifest',
        '/android-chrome-192x192.png',
        '/android-chrome-512x512.png',
        '/maskable-icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

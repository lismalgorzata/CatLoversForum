// Service worker for caching site assets
const CACHE_NAME = 'site-static-v2';
const assets = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/images/favicon.ico',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching assets');
        return cache.addAll(assets);
      })
  );
});

self.addEventListener('activate', event => {
  // Clean up old caches if the cache version changes
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log(`Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cacheRes => {
        return cacheRes || fetch(event.request).then(fetchRes => {
          return caches.open(CACHE_NAME).then(cache => {
            // Clone and cache the new request response for future requests
            cache.put(event.request.url, fetchRes.clone());
            return fetchRes;
          });
        });
      }).catch(() => {
        // Optionally, add a fallback here if the request fails and is not cached
      })
  );
});
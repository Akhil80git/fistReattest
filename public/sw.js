const CACHE_NAME = 'Warzone-cache-v1';
const OFFLINE_URL = '/index.html';

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/192x192.png',
  '/512x512.png',
  '/car0.png',
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(networkRes => {
      return caches.open(CACHE_NAME).then(cache => {
        if (req.method === 'GET' && url.origin === location.origin) {
          cache.put(req, networkRes.clone());
        }
        return networkRes;
      });
    }).catch(() => {
      if (req.destination === 'image') return caches.match('/192x192.png');
    }))
  );
});

// lingvoPRO Service Worker — https://eugenek-13.github.io/LingvoPRO/
const CACHE_NAME = 'lingvopro-v18';
const BASE = '/LingvoPRO/';

const CACHE_URLS = [
  BASE,
  BASE + 'index.html',
  BASE + 'manifest.json',
  BASE + 'icons/icon-192.png',
  BASE + 'icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      const local = CACHE_URLS.filter(u => u.startsWith('/') || u.startsWith(BASE));
      const cdn   = CACHE_URLS.filter(u => u.startsWith('http'));
      return cache.addAll(local)
        .then(() => Promise.allSettled(cdn.map(u => cache.add(u))));
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if(cached) return cached;
      return fetch(event.request).then(response => {
        if(response && response.status === 200){
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        if(event.request.mode === 'navigate')
          return caches.match(BASE + 'index.html');
      });
    })
  );
});

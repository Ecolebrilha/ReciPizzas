const CACHE_NAME = 'recipizzas-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/images/fundopizza.avif',
  '/images/pizza.avif',
  '/images/pizza1.avif',
  '/images/pizza2.avif',
  '/images/pizza3.avif',
  '/images/pizza4.avif',
  '/images/pizza5.avif',
  '/images/pizza6.avif',
  '/images/pizza7.avif',
  '/images/pizza8.avif',
  '/images/pizza9.avif',
  '/images/pizza10.avif',
  '/images/pizza11.avif',
  '/images/pizza12.avif',
  '/images/16.png',
  '/images/20.png',
  '/images/29.png',
  '/images/32.png',
  '/images/40.png',
  '/images/48.png',
  '/images/50.png',
  '/images/55.png',
  '/images/57.png',
  '/images/58.png',
  '/images/60.png',
  '/images/64.png',
  '/images/66.png',
  '/images/72.png',
  '/images/76.png',
  '/images/80.png',
  '/images/87.png',
  '/images/88.png',
  '/images/92.png',
  '/images/100.png',
  '/images/102.png',
  '/images/114.png',
  '/images/120.png',
  '/images/128.png',
  '/images/144.png',
  '/images/152.png',
  '/images/167.png',
  '/images/172.png',
  '/images/180.png',
  '/images/192.png',
  '/images/196.png',
  '/images/216.png',
  '/images/256.png',
  '/images/512.png',
  '/images/1024.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = ['recipizzas-cache-v1'];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
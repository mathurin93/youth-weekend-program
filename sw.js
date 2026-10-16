const CACHE = 'rym-youth-weekend-v3';
const CORE = [
  './', './index.html', './styles.css', './app.js', './manifest.webmanifest',
  './assets/icon.svg', './assets/rym-social-preview.jpg',
  './assets/youth-weekend.jpg', './assets/cupcake-fundraiser.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' ||
      new URL(event.request.url).origin !== self.location.origin) return;

  event.respondWith((async () => {
    try {
      const response = await fetch(event.request);
      if (response.ok) {
        const cache = await caches.open(CACHE);
        await cache.put(event.request, response.clone());
      }
      return response;
    } catch {
      return (await caches.match(event.request)) || Response.error();
    }
  })());
});

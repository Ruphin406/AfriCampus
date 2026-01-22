const CACHE_NAME = 'lumina-cache-v1';

self.addEventListener('install', (event) => {
    console.log('Service Worker: Installé');
});

self.addEventListener('fetch', (event) => {
    // Permet à l'application de fonctionner même avec une connexion instable
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});

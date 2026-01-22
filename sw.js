self.addEventListener('install', (e) => {
  console.log('Service Worker Installé');
});

self.addEventListener('fetch', (e) => {
  // Permet le fonctionnement hors-ligne basique
  e.respondWith(fetch(e.request));
});

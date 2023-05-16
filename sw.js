// Asigna un nombre y una versión al caché
const CACHE_NAME = 'mi-pwa-cache-v1';

// Archivos a cachear
const urlsToCache = [
  '/',
  'index.html',
  // Agrega aquí los archivos adicionales que deseas cachear
];

// Instalación del Service Worker y cachear los archivos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Activación del Service Worker y eliminación de cachés antiguos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercepta las solicitudes y devuelve los archivos desde el caché si están disponibles
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

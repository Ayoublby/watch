// sw.js
const CACHE_NAME = 'watch-time-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/movies.html',
    '/series.html',
    '/anime.html',
    '/about.html',
    '/styles.css',
    '/script.js',
    '/movies.js',
    '/received_650002127573605.jpeg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
/* ============================================================
   ARYAN TAXI MAHABALESHWAR — Offline & Low-Signal Service Worker
   Caches Rate Card & Emergency Taxi Contact for Sahyadri Ghats
   ============================================================ */

const CACHE_NAME = 'aryan-taxi-offline-v1';
const PRECACHE_ASSETS = [
    './',
    'index.html',
    'mahabaleshwar-taxi-rate-card.html',
    'taxi-fare.html',
    'contact.html',
    'css/style.min.css?v=59.0',
    'css/advanced-features.min.css?v=59.0',
    'js/main.min.js?v=59.0',
    'js/tour-data.js?v=59.0',
    'images/aryan-taxi-logo.svg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(PRECACHE_ASSETS).catch((err) => {
                console.warn('Pre-caching partial or offline:', err);
            });
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    // Only handle GET requests
    if (event.request.method !== 'GET') return;

    // Ignore non-http or external requests
    const url = new URL(event.request.url);
    if (!url.protocol.startsWith('http')) return;
    if (url.origin !== self.location.origin) return;

    // For HTML documents: Network first, fall back to cached Rate Card / Homepage if offline
    if (event.request.mode === 'navigate' || event.request.destination === 'document') {
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const copy = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
                    }
                    return networkResponse;
                })
                .catch(async () => {
                    const cachedResponse = await caches.match(event.request);
                    if (cachedResponse) return cachedResponse;
                    const rateCard = await caches.match('mahabaleshwar-taxi-rate-card.html');
                    if (rateCard) return rateCard;
                    return caches.match('index.html');
                })
        );
        return;
    }

    // For CSS, JS, Images: Cache first, update in background (Stale-While-Revalidate)
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    const copy = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
                }
                return networkResponse;
            }).catch(() => {});

            return cachedResponse || fetchPromise;
        })
    );
});

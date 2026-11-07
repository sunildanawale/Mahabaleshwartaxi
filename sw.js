/* ============================================================
   ARYAN TAXI MAHABALESHWAR — Offline & Low-Signal Service Worker
   Caches Rate Card, Booking & Emergency Taxi Contact for Sahyadri Ghats
   ============================================================ */

const CACHE_NAME = 'aryan-taxi-offline-v146';
const PRECACHE_ASSETS = [
    './',
    'index.html',
    'mahabaleshwar-taxi-rate-card.html',
    'booking.html',
    'travel-guide.html',
    'taxi-fare.html',
    'contact.html',
    'css/style.min.css?v=146.0',
    'css/advanced-features.min.css?v=134.1',
    'js/main.min.js?v=134.4',
    'js/tour-data.js?v=134.1',
    'js/booking-widget.min.js?v=139.0',
    'js/advanced-features.js?v=134.1',
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

    // For HTML documents: Network first, fall back to cached Rate Card / Booking / Homepage if offline
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
                    const cachedResponse = await caches.match(event.request, { ignoreSearch: true });
                    if (cachedResponse) return cachedResponse;
                    const bookingPage = await caches.match('booking.html', { ignoreSearch: true });
                    if (bookingPage) return bookingPage;
                    const rateCard = await caches.match('mahabaleshwar-taxi-rate-card.html', { ignoreSearch: true });
                    if (rateCard) return rateCard;
                    return caches.match('index.html', { ignoreSearch: true });
                })
        );
        return;
    }

    // For CSS and JS with versions: Network first, fall back to cache (ignoreSearch for query versions)
    if (url.pathname.endsWith('.css') || url.pathname.endsWith('.js')) {
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const copy = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
                    }
                    return networkResponse;
                })
                .catch(() => caches.match(event.request, { ignoreSearch: true }))
        );
        return;
    }

    // For Images & static assets: Cache first, update in background (Stale-While-Revalidate with ignoreSearch)
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
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

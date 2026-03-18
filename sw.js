// This service worker is used to cache document requests for snappy navigation.
// It deletes pages from the cache after a single use, or after 30 seconds.

const CACHE = "pages";
const MAX_AGE = 1000 * 30; // 30 seconds

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const isNavigation = req.mode === "navigate";
  const isPrefetch = req.headers.get("X-prefetch");

  // --- PREFETCH ---
  if (isPrefetch) {
    event.respondWith(
      (async () => {
        console.log("prefetching", req.url);
        const cache = await caches.open(CACHE);

        const res = await fetch(req);
        const resClone = res.clone();

        // attach timestamp header
        const headers = new Headers(resClone.headers);
        headers.set("X-Prefetched-At", Date.now().toString());

        const cachedRes = new Response(resClone.body, {
          status: res.status,
          statusText: res.statusText,
          headers,
        });

        await cache.put(req.url, cachedRes);

        return res;
      })(),
    );
    return;
  }

  // --- NAVIGATION ---
  if (isNavigation) {
    console.log("navigating to", req.url);
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE);
        const cached = await cache.match(req.url);

        if (cached) {
          const prefetchedAt = Number(cached.headers.get("X-Prefetched-At"));

          if (Date.now() - prefetchedAt < MAX_AGE) {
            // Use cached page once and then delete
            await cache.delete(req.url);
            return cached;
          }

          // Stale cache
          await cache.delete(req.url);
        }

        return fetch(req);
      })(),
    );
  }
});

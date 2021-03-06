// Stolen from: https://github.com/aarontgrogg/aarontgrogg/tree/master/src/scripts
// TODO: Ideally Gulp replaces this version with the current cache-buster
const cacheStorage = 'cfye.com';
const cacheBuster = 'CACHE_BUSTER';
const version = `${cacheStorage}.${cacheBuster}`;
const staticCacheName = `${version}.static`;
const pagesCacheName = `${version}.pages`;
const imagesCacheName = `${version}.images`;
const themeName = 'cfye-2017';

const updateStaticCache = function () {
    return caches.open(staticCacheName).then((cache) => {
        // These items won't block the installation of the Service Worker
        cache.addAll(['/about/']);
        // These items must be cached for the Service Worker to complete installation
        return cache.addAll([
            `/content/themes/${themeName}/assets/js/script.js`,
            `/content/themes/${themeName}/assets/css/screen.css`,
            '/',
        ]);
    });
};

const stashInCache = function (cacheName, request, response) {
    caches.open(cacheName).then((cache) => {
        cache.put(request, response);
    });
};

// Limit the number of items in a specified cache.
const trimCache = function (cacheName, maxItems) {
    caches.open(cacheName).then((cache) => {
        cache.keys().then((keys) => {
            if (keys.length > maxItems) {
                cache.delete(keys[0]).then(trimCache(cacheName, maxItems));
            }
        });
    });
};

// Remove caches whose name is no longer valid
const clearOldCaches = function () {
    return caches.keys().then(keys => Promise.all(keys
        // .filter(key => key.indexOf(version) !== 0)
        .map(key => caches.delete(key))));
};

self.addEventListener('install', (event) => {
    event.waitUntil(updateStaticCache().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clearOldCaches().then(() => self.clients.claim()));
});

self.addEventListener('message', (event) => {
    if (event.data.command == 'trimCaches') {
        trimCache(pagesCacheName, 20);
        trimCache(imagesCacheName, 20);
    }
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);

    // Only deal with requests to my own server
    if (url.origin !== location.origin) {
        return;
    }

    // Ignore requests to some directories (admin pages, includes files, and post previews)
    if (
        request.url.indexOf('/wp-admin') !== -1 ||
        request.url.indexOf('/wp-includes') !== -1 ||
        request.url.indexOf('preview=true') !== -1
    ) {
        return;
    }

    // For non-GET requests, try the network first, fall back to the offline page
    if (request.method !== 'GET') {
        event.respondWith(fetch(request).catch(() => caches.match('/offline/')));
        return;
    }

    // For HTML requests, try the network first, fall back to the cache, finally the offline page
    if (request.headers.get('Accept').indexOf('text/html') !== -1) {
        event.respondWith(fetch(request)
            .then((response) => {
                // NETWORK
                // Stash a copy of this page in the pages cache
                const copy = response.clone();
                stashInCache(pagesCacheName, request, copy);
                return response;
            })
            .catch(() =>
                // CACHE or FALLBACK
                caches.match(request).then(response => response || caches.match('/offline/'))));
        return;
    }

    // For non-HTML requests, look in the cache first, fall back to the network
    event.respondWith(caches.match(request).then(response =>
        // CACHE
        (
            response ||
          fetch(request)
              .then((response) => {
              // NETWORK
              // If the request is for an image, stash a copy of this image in the images cache
                  if (request.headers.get('Accept').indexOf('image') !== -1) {
                      const copy = response.clone();
                      stashInCache(imagesCacheName, request, copy);
                  }
                  return response;
              })
              .catch(() => {
              // OFFLINE
              // If the request is for an image, show an offline placeholder
                  if (request.headers.get('Accept').indexOf('image') !== -1) {
                      return new Response(
                          '<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">Offline</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>',
                          { headers: { 'Content-Type': 'image/svg+xml' } },
                      );
                  }
              })
        )));
});


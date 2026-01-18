const CACHE_NAME = "gym-pro-v5";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "https://cdn.tailwindcss.com",
  "https://unpkg.com/react@18/umd/react.development.js",
  "https://unpkg.com/react-dom@18/umd/react-dom.development.js",
  "https://unpkg.com/@babel/standalone/babel.min.js"
];

// Install and Cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Serve from Cache (Offline Logic)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cache if found, otherwise fetch from network
      return response || fetch(event.request);
    })
  );
});
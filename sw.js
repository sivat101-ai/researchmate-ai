const CACHE = "researchmate-v1";
const ASSETS = [
  "/researchmate-ai/",
  "/researchmate-ai/index.html",
  "/researchmate-ai/manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

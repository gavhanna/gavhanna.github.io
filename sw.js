if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

let staticCacheName = 'static-files-v2';

self.addEventListener('install', function(event) {
  
  const urlsToCache = [
    '/',
    'css/main.css',
    'js/main.js',
    'https://fonts.googleapis.com/css?family=Raleway|Satisfy',
    // Simon Game: currently not working
    'https://gavhanna.github.io/simon-game/index.html',
    'https://gavhanna.github.io/simon-game/js/app.js',
    'https://gavhanna.github.io/simon-game/css/main.css',
    'https://fonts.googleapis.com/css?family=Changa+One|Press+Start+2P'
  ];
  
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('static-files-') && 
                 cacheName != staticCacheName
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      )
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
  );
});
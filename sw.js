self.addEventListener("install", e => { 
    e.waitUntil(
      caches.open("offlineFiles").then(cache => {
         return cache.addAll([
             "./",
             "./src/index.js",
             "./src/style.css",
             "./images/192.png",
             "./images/512.png",
             "./images/j3.jpg",
             "./images/j2.jpg",
             "./images/hobbies.jpg",
             "./images/c3.jpg",
             "./images/m3.jpg",
             "./images/p7.jpg",
             "./images/b1.jpg",
             "./images/mm.png",
             "./images/movie1.jpg",
             "./images/movie2.jpeg",
             "./images/movie3.jpg",
             "./images/music1.png",
             "./images/music3.jpg",
             "./images/languages.png",
             "./images/lang1.png",
             "./images/lang2.png",
             "./images/lang3.png",
             "./images/lang4.png",
             "./images/lang5.png",
         ]);
      })
    );
});

self.addEventListener("fetch", e => {
   console.log("Intercepting request :"+ e.request.url);
   e.respondWith(
       caches.match(e.request).then(response => {
            return response || fetch(e.request);
       })
   );
});
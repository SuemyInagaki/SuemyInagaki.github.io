'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/arquivos/termo.pdf": "b978887fb8ba01c039bae5d695b9d243",
"assets/AssetManifest.json": "4b43c17adfcdec5714c9697f108b35c4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/abcd-splash.png": "0914d83da6f3a7a5fd7b7d9f707ddb19",
"assets/images/abcd.png": "5aa3f4d51cd47071dc24c168c291ca25",
"assets/images/fotos/01-2-MESES.jpg": "94480241818c6fdb178f7a644dfe678b",
"assets/images/fotos/01-24-MESES.png": "e4b572375d8dc87c4c42221f57f14d1f",
"assets/images/fotos/02-2-MESES.jpg": "7f6c4eab849ceec97306c1a15f69d0d5",
"assets/images/fotos/02-24-MESES-2.png": "3ef47e5febeaf90e7080185f42b06da2",
"assets/images/fotos/02-24-MESES.png": "a6b1953baa53abc3f321cfa507859ba3",
"assets/images/fotos/03-2-MESES.jpg": "a8927b573243eb11851ec4afe1101024",
"assets/images/fotos/03-24-MESES-2.png": "e33a21168619972176cf1d77e2767f6c",
"assets/images/fotos/03-24-MESES.png": "c166f1b181df88d55e7bd8d556087f58",
"assets/images/fotos/04-24-MESES.png": "62c8ea429f47e412f0250b252f5ee6d4",
"assets/images/fotos/05-24-MESES-2.jpeg": "f3228c821dccccd77a1ea9cd3e1a1ba9",
"assets/images/fotos/05-24-MESES.jpeg": "5117d9782566acd299f7ca8175a67772",
"assets/images/fotos/07-24-MESES.png": "fa12ee913b6fd01d6a3510e16a12737a",
"assets/images/fotos/08-2-MESES.png": "c882511fe0323ad08a104dbe54a4c2be",
"assets/images/fotos/09-2-MESES.png": "5a8b265a86bc64a9ac6a3be82d4b41ef",
"assets/images/fotos/10-24-MESES.png": "9155e5c0336530df35688de7ca289069",
"assets/images/fotos/12-2-MESES.jpg": "28c08d892f716ae36f0e5df93954ba84",
"assets/images/fotos/13-2-MESES.jpg": "52f3123da3384b7fac59f1fce72bda15",
"assets/images/fotos/15-24-MESES.png": "f4dac0d2609e5eb04e49bdba66989d60",
"assets/images/fotos/20-2-MESES.jpg": "13a35f98e60ab94e023e6c803338095c",
"assets/images/fotos/21-2-MESES.jpg": "59308cfd0557ac61cbb27a0c56151685",
"assets/images/fotos/22-24-MESES.jpeg": "793e83bd23a134daeaf5c5f914c4ce17",
"assets/images/fotos/23-2-MESES.jpg": "c73a054cc11523c72587dc570db69e73",
"assets/images/fotos/23-24-MESES.png": "4309e65c0f002ccd8835ceb767ada0b9",
"assets/images/fotos/24-2-MESES-1.png": "74bdfe76eb34490bec7358f7d6481d7f",
"assets/images/fotos/24-2-MESES.png": "c9f86b4c235a593e9e86817bfcea8a60",
"assets/images/fotos/26-24-MESES.png": "f979dd5199c11c3f676a870098f306c3",
"assets/images/fotos/28-2-MESES-1.jpg": "445aa7a894f58be53b470f398c99d6e6",
"assets/images/fotos/28-2-MESES.jpg": "9a323d08a6fdd663c6ef17e9b0c1e19d",
"assets/images/fotos/29-2-MESES-1.png": "6e9a384cec63b2e7a8c188b974174c32",
"assets/images/fotos/29-2-MESES.png": "9802d449e52f009e99a384b697f1cd04",
"assets/images/fotos/29-24-MESES.jpeg": "4f8b075d990f3edee587f9ff1e37bbc5",
"assets/images/fotos/30-24-MESES-1.png": "99e344c0ee30d92528d5a58a00af84d8",
"assets/images/fotos/30-24-MESES.png": "84ac014825f67629700e697f2a55d8e9",
"assets/images/fotos/31-2-MESES.png": "846048130021655817c5dc68006ba4d7",
"assets/images/fotos/32-2-MESES.jpg": "b6fb93656f9fe64eae909b2c08ad79a0",
"assets/images/fotos/33-24-MESES-2.png": "1e6a7fe943c6acc6225f7cc1a69db594",
"assets/images/fotos/33-24-MESES-3.png": "125dad1173ed9c2ebd616cacc9f51828",
"assets/images/fotos/33-24-MESES.png": "c350f397169e0415d59a95383e77c282",
"assets/images/fotos/35-24-MESES-2.jpeg": "de618a2f907939686675f2951391ced3",
"assets/images/fotos/35-24-MESES-3.jpeg": "1f01245618614d744f301284080ee522",
"assets/images/fotos/35-24-MESES.jpeg": "c7b97a2a5d7cd4162ab16058bb5f2283",
"assets/images/fotos/36-2-MESES.jpg": "0345a2eab8a7d20656cfde7e9b86a012",
"assets/images/fotos/36-24-MESES.jpeg": "82c6ef7149b00ec93999f021e73ff6f8",
"assets/images/fotos/37-2-MESES.jpg": "ab8a6dbba9cb4e746e731b054261e3b1",
"assets/images/fotos/37-24-MESES.jpeg": "b5e925c3392b18f89d6077e80c18912c",
"assets/images/fotos/38-2-MESES-1.jpg": "c20e90d5f679d2780daeb9d7703464ff",
"assets/images/fotos/38-2-MESES.jpg": "528fa4787a5938d64cc1a1c5fd9589e1",
"assets/images/fotos/38-24-MESES.jpeg": "98c6a18f3ea318db0bff6dd6a551e179",
"assets/images/fotos/39-2-MESES.jpg": "2d33f8985176c7ae7fedcf3491cd20b9",
"assets/images/fotos/40-2-MESES.jpg": "7b2c77356cc542a50a3b497c452c7931",
"assets/images/fotos/40-24-MESES.mp4": "c925c9ee05652c24ca3ed3c29b33b7af",
"assets/images/fotos/41-2-MESES.jpg": "ffaa0d39d0213a2c66c7948b3f38390d",
"assets/images/fotos/41-24-MESES.jpeg": "18e60a529db654bf06d944a06233cdea",
"assets/images/fotos/42-2-MESES.jpg": "6e2196e6071d50b3288eef459d462e6d",
"assets/images/fotos/44-2-MESES.jpg": "fb1a8bd0e08d10f08b4ee6d270cbaecc",
"assets/images/fotos/45-2-MESES.jpg": "2884a67b5b511d62a167f29d11996734",
"assets/images/fotos/45-24-MESES-2.png": "64dc0e33a346ab5a2d416da8164bf095",
"assets/images/fotos/45-24-MESES.png": "40decf71a66b643cd957fcf8b4653887",
"assets/images/fotos/47-2-MESES-1.jpg": "3940d8831e8656bac0c83aba33f8839c",
"assets/images/fotos/47-2-MESES.jpg": "d4e011ecff18844326638d0e0a31e4f8",
"assets/images/fotos/47-24-MESES.jpeg": "ab610f4ce00cf2fa4d0c3017d7f2ad5c",
"assets/images/fotos/48-2-MESES.jpg": "122b44eaf0bf957e551af6c5c992b50e",
"assets/images/fotos/48-24-MESES.jpeg": "bf97ea008d13fe599e93cb82dd0da758",
"assets/images/fotos/49-2-MESES.png": "87349581a38a1a8e4b0835be91b85b81",
"assets/images/fotos/49-24-MESES-2.jpeg": "80bcd78061cbd57a9980dd618dfdaa80",
"assets/images/fotos/49-24-MESES.jpeg": "7f542af518e6a59cd4e486d5ccb7574d",
"assets/NOTICES": "6bdc3c563e4c7caffa4c55093734b257",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "732522dcf61f75456e6cdc2959c0962f",
"/": "732522dcf61f75456e6cdc2959c0962f",
"main.dart.js": "b8c84bf947219548039a741fe26b2cf2",
"manifest.json": "78ede6a481ef5a6b0a425410ef8fa04f",
"version.json": "0086b6bdc5ce4c7d2d5a88ec739d7d93"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

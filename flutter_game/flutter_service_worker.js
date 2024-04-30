'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "deef03a83710c7784b5ef375a2601543",
"assets/AssetManifest.json": "50d391818aa1c156b87a75b98c239910",
"assets/assets/audio/mario/big_jump.ogg": "b573628961e70c9a3947262e027d5e36",
"assets/assets/audio/mario/brick_smash.ogg": "d488d79d8a1618a8f9675deb0d437ddb",
"assets/assets/audio/mario/bump.ogg": "cc82aa384e4a8b1074cbe71d849b02d9",
"assets/assets/audio/mario/coin.ogg": "d5f79bd36080e47fcea44249a4c27665",
"assets/assets/audio/mario/count_down.ogg": "db2f185b66612d681a5955f0d1eb33fb",
"assets/assets/audio/mario/death.wav": "9f02f1b1b02d5ff0b9b315c4c9ebb0da",
"assets/assets/audio/mario/fireball.ogg": "627fba610df9e8fa3e399a8a9d917a62",
"assets/assets/audio/mario/flagpole.wav": "8070664770f60ab74ab8c2105f9a5cd2",
"assets/assets/audio/mario/game_over.ogg": "26cd26e5379d55a089d468b5b5f9c677",
"assets/assets/audio/mario/invincible.ogg": "bb0b6a3f2659ad71d9f2fc0614cb47de",
"assets/assets/audio/mario/kick.ogg": "eb242f1a0f06c9984ca8c10641684607",
"assets/assets/audio/mario/main_theme.ogg": "01e2912221a63cc28715550066bd7fc0",
"assets/assets/audio/mario/main_theme_sped_up.ogg": "64d8608279355ae89e134d49eb827e51",
"assets/assets/audio/mario/one_up.ogg": "772c7608f6df2d83c10ed793b25ce2ee",
"assets/assets/audio/mario/out_of_time.wav": "1eb2e100e9946c567bc8ebe099afae71",
"assets/assets/audio/mario/pipe.ogg": "44f0c3971afcab149ee6338bc720f5c1",
"assets/assets/audio/mario/powerup.ogg": "cfb78c3c82ec8b1c2d28f783ef874f15",
"assets/assets/audio/mario/powerup_appears.ogg": "2ba4018670d354ba0d87a19729cf9978",
"assets/assets/audio/mario/small_jump.ogg": "6ac2b4d60db1da7ac7e5816b26714cc4",
"assets/assets/audio/mario/stage_clear.wav": "d82c39fd5aa149573ec9366082b6a2f6",
"assets/assets/audio/mario/stomp.ogg": "3c56ab7becac90aed148332b1f2219f6",
"assets/assets/audio/mario/world_clear.wav": "d03296f3c332d0a58de367c531d29fe3",
"assets/assets/audio/tetris/clean.mp3": "ac70daf98741de473dec0eacdac333e8",
"assets/assets/audio/tetris/drop.mp3": "154540aeac037695ec1d80adfdff8936",
"assets/assets/audio/tetris/explosion.mp3": "2c8b5dd3f51298bbeb019ce1316aa6b9",
"assets/assets/audio/tetris/move.mp3": "389fd99cd348d712668fa34fd9738753",
"assets/assets/audio/tetris/rotate.mp3": "23789f16afc6b9cd22711ffde1baa57f",
"assets/assets/audio/tetris/start.mp3": "a5ca4c3bbeeb2d74b90ec1554a55cb1b",
"assets/assets/images/mario/enemies.png": "a297d02d5f11b00b5f29e6757474a419",
"assets/assets/images/mario/item_objects.png": "aa14777d62e93c6ffc4659096ef2348a",
"assets/assets/images/mario/level_1.png": "53f74254f65c37f6f820e171068919bc",
"assets/assets/images/mario/mario_bros.png": "5e22ea6d62ffc23967f9501e0b27a65b",
"assets/assets/images/mario/smb_enemies_sheet.png": "ed9cd908b43002a8db8e012fc6e61f9f",
"assets/assets/images/mario/text_images.png": "e6ace46200a0bfcfedcaf5025ed87749",
"assets/assets/images/mario/tile_set.png": "c97524d70cfa2917b0b7c041e278ca72",
"assets/assets/images/mario/title_screen.png": "f31e4d2701dc225e42b4a1934a6c8b66",
"assets/assets/images/tetris/tetris.png": "6daf304356cc010c1d23585c44041143",
"assets/assets/tiles/mario.tmx": "a516300f7078a82fbbd90b9493d98c62",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "1d01dcc9494c9b409cffe6d0b29eff84",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2315e85b9d7f79bea2df4899e98a934b",
"/": "2315e85b9d7f79bea2df4899e98a934b",
"main.dart.js": "cfcf12f357cb87b961d982e54c81d31b",
"manifest.json": "74d25a0ecb902f1b55dc0307237901f8",
"version.json": "b97d110b100c55525173b8317af2fe73",
"web.zip": "25df6e7cb74a4287269519f5fb98b18a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

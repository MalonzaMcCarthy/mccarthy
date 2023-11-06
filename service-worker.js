/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["css/animate.min.css","a332e9019e2a787d926d9fa1abaeb9d4"],["css/bootstrap-grid.css","7c0197b7ddafd6d0dd8de0f512e1c136"],["css/bootstrap-grid.css.map","cca8f367abfcd6dbacff15a490cce1bb"],["css/bootstrap-grid.min.css","ffdcdc94dfb81e71f752d20b1bf4f264"],["css/bootstrap-grid.min.css.map","709a44829225e3565e67c394f3b56f0e"],["css/bootstrap-reboot.css","8199d13b2c0d694956584d80ad1308c8"],["css/bootstrap-reboot.css.map","554d784ec34b4cf73b7828dec864a5c4"],["css/bootstrap-reboot.min.css","a7a4675edc5ee0e38c8a51fc22f9185e"],["css/bootstrap-reboot.min.css.map","e43aa27cfeac4096258a37529fc470fe"],["css/bootstrap.css","38fdafbec65832ead969ca340d28453f"],["css/bootstrap.css.map","947478a54b4e568d34b07cf4e9e3aa14"],["css/bootstrap.min.css","fee68c0f2f583161134a1fcb5950501d"],["css/bootstrap.min.css.map","4bed2338a4e64c808325f5245457e576"],["css/default-skin.css","e3b28fbf2d070103865b18d703b50af6"],["css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["css/icomoon.css","e841f7cdec90ebf92272192c8e8bc027"],["css/jquery-ui.css","c4a88ec0cb998929a670c0c58d7dc526"],["css/jquery.fancybox.min.css","ba919c6d4aced8bb72840a2618f397a3"],["css/jquery.mCustomScrollbar.min.css","f59e3f4c0087b4d8ddc27bdd9c9ab92b"],["css/meanmenu.css","00294f3d8a54d4083e10a75b1fa5b5f1"],["css/nice-select.css","7641aec4b8c405f570860925f7f64580"],["css/normalize.css","8d9d541cc4c37ce152038f142628e199"],["css/owl.carousel.min.css","351b4e5f569a83790bed10824208390d"],["css/responsive.css","b0ebd13c72079a12e374d3e05ab1fe18"],["css/slick.css","f46bd015743c36e5514de87e0c1b40e5"],["css/style.css","68139d67a0bf5620ec3d361c0adee80a"],["images/call-icon.png","a9161d33ba8d013399fc1719ac043a92"],["images/client-img.png","43f44115f935feb68a948a85a50149d1"],["images/download.jfif","1fe726d2d77019566488778b29393a45"],["images/fb-icon.png","7f3de120c323c630d4082b11e665c619"],["images/img-1.png","256f8e19d0d82f23f3e6a7710c8f5b59"],["images/img-10.png","d2b203138b75c5cbdde548e706f7456c"],["images/img-11.png","4dfc2924e15b0d008b30dd28735243ab"],["images/img-12.png","edcb83e387d8f2cb7bf83473450d4d54"],["images/img-13.png","98a5decf5035d701dc754c24759c89ea"],["images/img-14.png","887001538c1cab4408967c87359d60d2"],["images/img-2.png","f57fefc44da1966fd91176157a19e374"],["images/img-3.png","99ab5ab41e31cf3b09e4d95bee1e35c6"],["images/img-4.png","054284b1e88a36033a31eba306c82493"],["images/img-5.png","cf0e8b4c84bfe25841744a09a4be9dc6"],["images/img-6.png","170b75b01afc277da69f618df6fbd822"],["images/img-7.png","2276cc7d6cc1f0e67b3cc5e18a14f7e1"],["images/img-8.png","561032bf2a4ef0a99ec66dda8eaa3fd9"],["images/img-9.png","acfdff4b98f8194642ac158189062dcb"],["images/instagram-icon.png","74f4184daeb6d5e314358d725eda1556"],["images/left-icon.png","8d1dea35de7c5a696c064b331644959e"],["images/left-icon1.png","2507b93b9f380230fccb3aed3f24629d"],["images/linkedin-icon.png","840f7ea63bba22a91883441aa660decf"],["images/logo.png","747c15b9653b64077def36b53fab2dc0"],["images/mail-icon.png","3ff520b466f2921e7b36d25c842beac6"],["images/map-icon.png","281c65a511b127bb922e803752214f58"],["images/png-clipart-baguette-bakery-bread-pan-loaf-pan-baked-goods-food-thumbnail.png","a3f2b8b58363f4cd03b86c8106188dd8"],["images/png-clipart-bakery-baking-food-others-miscellaneous-baked-goods-thumbnail.png","8309781fa4ecc60916b8d5b2b7237d13"],["images/png-clipart-bakery-bread-baking-biscuits-bread-baked-goods-food-thumbnail.png","c8b7d2ddb9df6cfa7d2f2c95ae5d3ea1"],["images/png-clipart-bakery-downtown-binghamton-danish-pastry-cake-cake-baked-goods-food-thumbnail.png","9d48840d81952162699874d1ff6f02da"],["images/png-clipart-bakery-pita-loaf-small-bread-pan-baked-goods-food-thumbnail.png","f868f36e6595a1b33455e57716305236"],["images/png-clipart-bakery-viennoiserie-croissant-bread-pastry-croissant-baked-goods-food-thumbnail.png","67465e2eef599a83356ee6689c13e115"],["images/png-clipart-bun-bakery-product-market-bakery-items-baked-goods-food-thumbnail.png","ed7067e48aa919d5000230fb732fd765"],["images/png-clipart-coxinha-rissole-kibbeh-bakery-buffet-salgadinhos-food-dried-fruit-thumbnail.png","d5490a4459684e33fb8d849ddcd0e126"],["images/png-clipart-cupcake-frosting-icing-pastry-bakery-cake-cream-food-thumbnail.png","cf7b76ac69885dac891fb93d860ff26a"],["images/png-clipart-donuts-bakery-homer-simpson-doughnuts-purple-food-thumbnail.png","f0655526a70ba7457b57c1907b9553e6"],["images/png-clipart-doughnut-bakery-food-donut-magenta-chocolate-donuts-thumbnail.png","684a8398707ed6122e0d8908939950c9"],["images/png-clipart-five-macaroons-macaron-macaroon-bakery-french-cuisine-cake-cake-food-baking-thumbnail.png","3bdceb281220c8a1f68ab558aceef9bc"],["images/png-clipart-torta-cupcake-bakery-custard-sponge-cake-chocolate-cake-food-frozen-dessert-thumbnail.png","eac6225040c8aaaa2713f462ed19588e"],["images/png-clipart-wicker-basket-with-breads-the-basket-of-bread-bakery-bread-baked-goods-food-thumbnail.png","47addf43716283311b772757c4ac10fa"],["images/right-icon.png","5a455640b1470dff1dee586d89da9ab2"],["images/right-icon1.png","6af9058383d012bce3d27cee5654b8dd"],["images/search-icon.png","9c26c0db0f8c67e56ab02955d4fa2ee2"],["images/twitter-icon.png","adc4bf1e1d8c2feb158ccd637022daf5"],["index.html","5b5c72178d10d8fa16fb614aa481d43b"],["js/bootstrap.bundle.js","ea09df7efed9959f3e2c24ee8853745e"],["js/bootstrap.bundle.js.map","7d98e7c10b92548a32804484ca0cec60"],["js/bootstrap.bundle.min.js","62e633210885066c625c46081cc2b339"],["js/bootstrap.bundle.min.js.map","ee429aca1041d7afe1930cc16e70de5e"],["js/bootstrap.js","d9f096d1f708c35fdd9c78bd422883cc"],["js/bootstrap.js.map","0cf44520594ee0226f84caf2c5dc200f"],["js/bootstrap.min.js","ce6e785579ae4cb555c9de311d1b9271"],["js/bootstrap.min.js.map","0fa2fd3370eb55b52e2b8cc28d9de0b2"],["js/custom.js","28b7f2b5d5e9b96a61daac7ed7c6a352"],["js/jquery-3.0.0.min.js","68c83ed206a2b972d61a89dfb6d250d0"],["js/jquery.mCustomScrollbar.concat.min.js","42a368e95b4a38989c8984c672d29ec0"],["js/jquery.min.js","cbde2a48700724f03cee8c63d5911fbb"],["js/jquery.validate.js","ed399222edd6d6afc491bc82ac5e5051"],["js/modernizer.js","d5c0dfbd1ceae8e89e6aa53ba027cccc"],["js/plugin.js","1627446b73ab91f2df237b4fb989a9cf"],["js/popper.min.js","ccc533cf501d3f124323b95318c6bbb8"],["js/slider-setting.js","f64cb765ae188f3998bf076f2c7b78e3"],["manifest.json","83c32ff9ea6cd05b370747ae9277adc4"],["myscripts.js","63443ddd40be59a3afdf9318fd380986"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








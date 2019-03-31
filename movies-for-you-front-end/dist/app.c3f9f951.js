// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/utils/api/api-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getRequest(location, callback) {
  fetch(location).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function postRequest(location, requestBody, callback) {
  fetch(location, {
    method: "POST",
    body: JSON.stringify(requestBody)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

var _default = {
  getRequest: getRequest,
  postRequest: postRequest
};
exports.default = _default;
},{}],"js/utils/events/event-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function on(element, eventType, callback) {
  element.addEventListener(eventType, function (event) {
    return callback(event);
  });
}

var _default = {
  on: on
};
exports.default = _default;
},{}],"js/components/Movies.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Movies;

function Movies(movies) {
  return "\n        <ul class=\"movies\">\n            ".concat(movies.map(function (movie) {
    return "\n                    <li class=\"movie\">\n                        <h3 class=\"movie__movieName\" id=\"".concat(movie.id, "\">").concat(movie.movieName, "</h3>                     \n                    </li>\n                    ");
  }).join(''), "\n        </ul>\n\n        <section class=\"add__movie\">\n            <input type=\"text\" class=\"add__movieName\" placeholder=\"Movie Name\">\n            <input type=\"text\" class=\"add__image\" placeholder=\"Image URL\">\n            <input type=\"text\" class=\"add__year\" placeholder=\"Movie Release Year\">\n            <input type=\"text\" class=\"add__director\" placeholder=\"Director\">\n            <input type=\"text\" class=\"add__cinematographer\" placeholder=\"Cinematographer\">\n            <button class=\"add__movie__button\">Add Movie</button>\n        </section>\n       ");
}
},{}],"js/components/Cinematographers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Cinematographers;

function Cinematographers(cinematographers) {
  return "\n        <ul class=\"cinematographers\">\n            ".concat(cinematographers.map(function (cinematographer) {
    return "\n                    <li class=\"cinematographer\">\n                        <h3 class=\"cinematographer__cinematographerName\" id=\"".concat(cinematographer.id, "\">").concat(cinematographer.cinematographerName, "</h3>                     \n                    </li>\n                    ");
  }).join(''), "\n        </ul>\n        ");
}
},{}],"js/components/Directors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Directors;

function Directors(directors) {
  return "\n        <ul class=\"directors\">\n            ".concat(directors.map(function (director) {
    return "\n                    <li class=\"director\">\n                        <h3 class=\"director__directorName\" id=\"".concat(director.id, "\">").concat(director.directorName, "</h3>                     \n                    </li>\n                    ");
  }).join(''), "\n        </ul>\n        <section class=\"add__director\">\n            <input type=\"text\" class=\"add__directorName\" placeholder=\"Director Name\">\n            <button class=\"add__director__button\">Add Director</button>\n        </section>\n            ");
}
},{}],"js/components/Cinematographer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Cinematographer;

var _Movies = _interopRequireDefault(require("./Movies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Cinematographer(cinematographer) {
  return "\n        <h2 class=\"cinematographer__CinematographerName\">Cinematographer: ".concat(cinematographer.cinematographerName, "</h2>\n\n        <ul class=\"movies\">\n            <h3>Movies</h3>\n            <li class=\"movie\">").concat((0, _Movies.default)(cinematographer.movies), "</li>\n        </ul>\n\n        <section class=\"add__movie\">\n            <input type=\"text\" class=\"add__movieName\" placeholder=\"Movie Name\">\n            <input type=\"text\" class=\"add__image\" placeholder=\"Image URL\">\n            <input type=\"text\" class=\"add__year\" placeholder=\"Movie Release Year\">\n            <button class=\"cinematographer__add__movie__button\">Add Movie</button>\n        </section>\n    ");
}
},{"./Movies":"js/components/Movies.js"}],"js/components/Movie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Movie;

var _Director = _interopRequireDefault(require("./Director"));

var _Cinematographer = _interopRequireDefault(require("./Cinematographer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Movie(movie) {
  return "\n        <h2 class=\"movie__movieName\">Movie: ".concat(movie.movieName, "</h2>\n        <p class=\"movie__year\">Year Released: ").concat(movie.year, "</p>\n        <img src=\"").concat(movie.imageURL, "\">\n    ");
}
},{"./Director":"js/components/Director.js","./Cinematographer":"js/components/Cinematographer.js"}],"js/components/Director.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Director;

var _Movies = _interopRequireDefault(require("./Movies"));

var _Movie = _interopRequireDefault(require("./Movie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Director(director) {
  return "\n        <h2 class=\"director__directorName\">Director: ".concat(director.directorName, "</h2>\n\n        <ul class=\"movies\">\n            <h3>Movies</h3>\n            <li class=\"movie\">").concat((0, _Movies.default)(director.movies), "</li>\n        </ul>\n\n        <section class=\"add__movie\">\n            <input type=\"text\" class=\"add__movieName\" placeholder=\"Movie Name\">\n            <input type=\"text\" class=\"add__image\" placeholder=\"Image URL\">\n            <input type=\"text\" class=\"add__year\" placeholder=\"Movie Release Year\">\n            <button class=\"director__add__movie__button\">Add Movie</button>\n        </section>\n    ");
}
},{"./Movies":"js/components/Movies.js","./Movie":"js/components/Movie.js"}],"js/app.js":[function(require,module,exports) {
"use strict";

var _apiActions = _interopRequireDefault(require("./utils/api/api-actions"));

var _eventActions = _interopRequireDefault(require("./utils/events/event-actions"));

var _Movies = _interopRequireDefault(require("./components/Movies"));

var _Cinematographers = _interopRequireDefault(require("./components/Cinematographers"));

var _Directors = _interopRequireDefault(require("./components/Directors"));

var _Director = _interopRequireDefault(require("./components/Director"));

var _Movie = _interopRequireDefault(require("./components/Movie"));

var _Cinematographer = _interopRequireDefault(require("./components/Cinematographer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

main();

function main() {
  _apiActions.default.getRequest('http://localhost:8080/movies', function (movies) {
    getAppContext().innerHTML = (0, _Movies.default)(movies);
  });

  navMovies();
  navDirectors();
  navCinematographers();
  viewSingleMovie();
  viewSingleDirector();
  viewSingleCinematographer();
  addDirector();
  addMovie();
  addMovieToDirector();
}

function navMovies() {
  var movieButton = document.querySelector('.nav__movies');

  _eventActions.default.on(movieButton, 'click', function () {
    _apiActions.default.getRequest('http://localhost:8080/movies', function (movies) {
      getAppContext().innerHTML = (0, _Movies.default)(movies);
    });
  });
}

function navDirectors() {
  var directorButton = document.querySelector('.nav__directors');

  _eventActions.default.on(directorButton, 'click', function () {
    _apiActions.default.getRequest('http://localhost:8080/directors', function (directors) {
      getAppContext().innerHTML = (0, _Directors.default)(directors);
    });
  });
}

function navCinematographers() {
  var cinematographerButton = document.querySelector('.nav__cinematographers');

  _eventActions.default.on(cinematographerButton, 'click', function () {
    _apiActions.default.getRequest('http://localhost:8080/cinematographers', function (cinematographers) {
      getAppContext().innerHTML = (0, _Cinematographers.default)(cinematographers);
    });
  });
}

function viewSingleMovie() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('movie__movieName')) {
      _apiActions.default.getRequest("http://localhost:8080/movies/".concat(event.target.id), function (movie) {
        getAppContext().innerHTML = (0, _Movie.default)(movie);
        console.log(_Movie.default);
        console.log(movie);
      });
    }
  });
}

function viewSingleDirector() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('director__directorName')) {
      _apiActions.default.getRequest("http://localhost:8080/directors/".concat(event.target.id), function (director) {
        getAppContext().innerHTML = (0, _Director.default)(director);
        console.log(director);
        console.log(_Director.default);
      });
    }
  });
}

function viewSingleCinematographer() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('cinematographer__cinematographerName')) {
      _apiActions.default.getRequest("http://localhost:8080/cinematographers/".concat(event.target.id), function (cinematographer) {
        getAppContext().innerHTML = (0, _Cinematographer.default)(cinematographer);
        console.log(cinematographer);
        console.log(_Cinematographer.default);
      });
    }
  });
}

function addDirector() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add__director__button')) {
      var directorName = document.querySelector('.add__directorName').value;

      _apiActions.default.postRequest('http://localhost:8080/directors/add/', {
        directorName: directorName
      }, function (directors) {
        return getAppContext().innerHTML = (0, _Directors.default)(directors);
      });
    }
  });
}

function addMovie() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add__movie__button')) {
      var movieName = document.querySelector('.add__movieName').value;
      var imageURL = document.querySelector('.add__image').value;
      var year = document.querySelector('.add__year').value;
      var director = document.querySelector('.add__director').value;
      var cinematographer = document.querySelector('.add__cinematographer').value;

      _apiActions.default.postRequest('http://localhost:8080/movies/add', {
        movieName: movieName,
        imageURL: imageURL,
        year: year,
        director: director,
        cinematographer: cinematographer
      }, function (movies) {
        return getAppContext().innerHTML = (0, _Movies.default)(movies);
      });
    }
  });
}

function addMovieToDirector() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('director__add__movie__button')) {
      var movieName = document.querySelector('.add__movieName').value;
      var imageURL = document.querySelector('.add__image').value;
      var year = document.querySelector('.add__year').value;

      _apiActions.default.postRequest("http://localhost:8080/movies/".concat(event.target.id), {
        movieName: movieName,
        imageURL: imageURL,
        year: year
      }, function (director) {
        return getAppContext().innerHTML = (0, _Director.default)(director);
      });
    }
  });
}

function addMovieToDirector() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('director__add__movie__button')) {
      var movieName = document.querySelector('.add__movieName').value;
      var imageURL = document.querySelector('.add__image').value;
      var year = document.querySelector('.add__year').value;

      _apiActions.default.postRequest("http://localhost:8080/movies/".concat(event.target.id), {
        movieName: movieName,
        imageURL: imageURL,
        year: year
      }, function (director) {
        return getAppContext().innerHTML = (0, _Director.default)(director);
      });
    }
  });
}

function getAppContext() {
  return document.querySelector('#app');
}
},{"./utils/api/api-actions":"js/utils/api/api-actions.js","./utils/events/event-actions":"js/utils/events/event-actions.js","./components/Movies":"js/components/Movies.js","./components/Cinematographers":"js/components/Cinematographers.js","./components/Directors":"js/components/Directors.js","./components/Director":"js/components/Director.js","./components/Movie":"js/components/Movie.js","./components/Cinematographer":"js/components/Cinematographer.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60278" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map
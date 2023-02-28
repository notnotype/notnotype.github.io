/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scenes/scene1/index.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scenes/scene1/index.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classroom_pm_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classroom-pm.webp */ "./src/scenes/scene1/classroom-pm.webp");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_classroom_pm_webp__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  overflow: hidden;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#scene {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n#scene::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 100vw;\n  height: 100vh;\n}\n#scene .layer {\n  width: 100vw;\n  height: 100vh;\n}\n\n#scene {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n#scene .atri {\n  height: 100%;\n  margin-left: 150px;\n}\n#scene .tmin {\n  height: 100%;\n  margin-left: 50px;\n}\n#scene .tmin img {\n  margin-top: 50px;\n  height: 820px;\n}\n#scene .trir {\n  position: absolute;\n  height: 100%;\n  right: 0;\n  margin-right: 60px;\n}\n#scene .trir img {\n  margin-top: 90px;\n  height: 760px;\n}", "",{"version":3,"sources":["webpack://./src/scenes/scene.scss","webpack://./src/scenes/scene1/index.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;ACCF;;ADEA;EACE,gBAAA;ACCF;;ADEA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;ACCF;;ADEA;EACE,kBAAA;EACA,aAAA;EACA,uBAAA;EAEA,aAAA;EACA,YAAA;EACA,4BAAA;EACA,sBAAA;EACA,2BAAA;ACAF;ADEE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,oCAAA;EACA,YAAA;EACA,aAAA;ACAJ;ADGE;EACE,YAAA;EACA,aAAA;ACDJ;;AAnCA;EAEE,yDAAA;AAqCF;AAnCE;EACE,YAAA;EACA,kBAAA;AAqCJ;AAlCE;EACE,YAAA;EACA,iBAAA;AAoCJ;AAlCI;EACE,gBAAA;EACA,aAAA;AAoCN;AAhCE;EACE,kBAAA;EACA,YAAA;EACA,QAAA;EACA,kBAAA;AAkCJ;AAhCI;EACE,gBAAA;EACA,aAAA;AAkCN","sourcesContent":["*, *::after, *::before {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  overflow: hidden;\r\n}\r\n\r\n.flex-center {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#scene {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  //align-items: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n\r\n  &::after{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    content: \"\";\r\n    background-color: rgb(0,0,0,.2);\r\n    width: 100vw;\r\n    height: 100vh;\r\n  }\r\n\r\n  .layer {\r\n    width: 100vw;\r\n    height: 100vh;\r\n  }\r\n}","@import \"../scene\";\r\n\r\n#scene {\r\n  //background-image: url('./classroom-am.webp');\r\n  background-image: url('./classroom-pm.webp');\r\n\r\n  .atri {\r\n    height: 100%;\r\n    margin-left: 150px;\r\n  }\r\n\r\n  .tmin {\r\n    height: 100%;\r\n    margin-left: 50px;\r\n\r\n    img {\r\n      margin-top: 50px;\r\n      height: 820px;\r\n    }\r\n  }\r\n\r\n  .trir {\r\n    position: absolute;\r\n    height: 100%;\r\n    right: 0;\r\n    margin-right: 60px;\r\n\r\n    img {\r\n      margin-top: 90px;\r\n      height: 760px;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/parallax-js/dist/parallax.js":
/*!***************************************************!*\
  !*** ./node_modules/parallax-js/dist/parallax.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=undefined;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=undefined;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],2:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);



}).call(this,require('_process'))

},{"_process":3}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
(function (global){
var now = require('performance-now')
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

}).call(this,typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"performance-now":2}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Parallax.js
* @author Matthew Wagerfield - @wagerfield, René Roth - mail@reneroth.org
* @description Creates a parallax effect between an array of layers,
*              driving the motion from the gyroscope output of a smartdevice.
*              If no gyroscope is available, the cursor position is used.
*/

var rqAnFr = require('raf');
var objectAssign = require('object-assign');

var helpers = {
  propertyCache: {},
  vendors: [null, ['-webkit-', 'webkit'], ['-moz-', 'Moz'], ['-o-', 'O'], ['-ms-', 'ms']],

  clamp: function clamp(value, min, max) {
    return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
  },
  data: function data(element, name) {
    return helpers.deserialize(element.getAttribute('data-' + name));
  },
  deserialize: function deserialize(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (value === 'null') {
      return null;
    } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
      return parseFloat(value);
    } else {
      return value;
    }
  },
  camelCase: function camelCase(value) {
    return value.replace(/-+(.)?/g, function (match, character) {
      return character ? character.toUpperCase() : '';
    });
  },
  accelerate: function accelerate(element) {
    helpers.css(element, 'transform', 'translate3d(0,0,0) rotate(0.0001deg)');
    helpers.css(element, 'transform-style', 'preserve-3d');
    helpers.css(element, 'backface-visibility', 'hidden');
  },
  transformSupport: function transformSupport(value) {
    var element = document.createElement('div'),
        propertySupport = false,
        propertyValue = null,
        featureSupport = false,
        cssProperty = null,
        jsProperty = null;
    for (var i = 0, l = helpers.vendors.length; i < l; i++) {
      if (helpers.vendors[i] !== null) {
        cssProperty = helpers.vendors[i][0] + 'transform';
        jsProperty = helpers.vendors[i][1] + 'Transform';
      } else {
        cssProperty = 'transform';
        jsProperty = 'transform';
      }
      if (element.style[jsProperty] !== undefined) {
        propertySupport = true;
        break;
      }
    }
    switch (value) {
      case '2D':
        featureSupport = propertySupport;
        break;
      case '3D':
        if (propertySupport) {
          var body = document.body || document.createElement('body'),
              documentElement = document.documentElement,
              documentOverflow = documentElement.style.overflow,
              isCreatedBody = false;

          if (!document.body) {
            isCreatedBody = true;
            documentElement.style.overflow = 'hidden';
            documentElement.appendChild(body);
            body.style.overflow = 'hidden';
            body.style.background = '';
          }

          body.appendChild(element);
          element.style[jsProperty] = 'translate3d(1px,1px,1px)';
          propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
          featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== 'none';
          documentElement.style.overflow = documentOverflow;
          body.removeChild(element);

          if (isCreatedBody) {
            body.removeAttribute('style');
            body.parentNode.removeChild(body);
          }
        }
        break;
    }
    return featureSupport;
  },
  css: function css(element, property, value) {
    var jsProperty = helpers.propertyCache[property];
    if (!jsProperty) {
      for (var i = 0, l = helpers.vendors.length; i < l; i++) {
        if (helpers.vendors[i] !== null) {
          jsProperty = helpers.camelCase(helpers.vendors[i][1] + '-' + property);
        } else {
          jsProperty = property;
        }
        if (element.style[jsProperty] !== undefined) {
          helpers.propertyCache[property] = jsProperty;
          break;
        }
      }
    }
    element.style[jsProperty] = value;
  }
};

var MAGIC_NUMBER = 30,
    DEFAULTS = {
  relativeInput: false,
  clipRelativeInput: false,
  inputElement: null,
  hoverOnly: false,
  calibrationThreshold: 100,
  calibrationDelay: 500,
  supportDelay: 500,
  calibrateX: false,
  calibrateY: true,
  invertX: true,
  invertY: true,
  limitX: false,
  limitY: false,
  scalarX: 10.0,
  scalarY: 10.0,
  frictionX: 0.1,
  frictionY: 0.1,
  originX: 0.5,
  originY: 0.5,
  pointerEvents: false,
  precision: 1,
  onReady: null,
  selector: null
};

var Parallax = function () {
  function Parallax(element, options) {
    _classCallCheck(this, Parallax);

    this.element = element;

    var data = {
      calibrateX: helpers.data(this.element, 'calibrate-x'),
      calibrateY: helpers.data(this.element, 'calibrate-y'),
      invertX: helpers.data(this.element, 'invert-x'),
      invertY: helpers.data(this.element, 'invert-y'),
      limitX: helpers.data(this.element, 'limit-x'),
      limitY: helpers.data(this.element, 'limit-y'),
      scalarX: helpers.data(this.element, 'scalar-x'),
      scalarY: helpers.data(this.element, 'scalar-y'),
      frictionX: helpers.data(this.element, 'friction-x'),
      frictionY: helpers.data(this.element, 'friction-y'),
      originX: helpers.data(this.element, 'origin-x'),
      originY: helpers.data(this.element, 'origin-y'),
      pointerEvents: helpers.data(this.element, 'pointer-events'),
      precision: helpers.data(this.element, 'precision'),
      relativeInput: helpers.data(this.element, 'relative-input'),
      clipRelativeInput: helpers.data(this.element, 'clip-relative-input'),
      hoverOnly: helpers.data(this.element, 'hover-only'),
      inputElement: document.querySelector(helpers.data(this.element, 'input-element')),
      selector: helpers.data(this.element, 'selector')
    };

    for (var key in data) {
      if (data[key] === null) {
        delete data[key];
      }
    }

    objectAssign(this, DEFAULTS, data, options);

    if (!this.inputElement) {
      this.inputElement = this.element;
    }

    this.calibrationTimer = null;
    this.calibrationFlag = true;
    this.enabled = false;
    this.depthsX = [];
    this.depthsY = [];
    this.raf = null;

    this.bounds = null;
    this.elementPositionX = 0;
    this.elementPositionY = 0;
    this.elementWidth = 0;
    this.elementHeight = 0;

    this.elementCenterX = 0;
    this.elementCenterY = 0;

    this.elementRangeX = 0;
    this.elementRangeY = 0;

    this.calibrationX = 0;
    this.calibrationY = 0;

    this.inputX = 0;
    this.inputY = 0;

    this.motionX = 0;
    this.motionY = 0;

    this.velocityX = 0;
    this.velocityY = 0;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
    this.onDeviceMotion = this.onDeviceMotion.bind(this);
    this.onOrientationTimer = this.onOrientationTimer.bind(this);
    this.onMotionTimer = this.onMotionTimer.bind(this);
    this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
    this.onAnimationFrame = this.onAnimationFrame.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);

    this.windowWidth = null;
    this.windowHeight = null;
    this.windowCenterX = null;
    this.windowCenterY = null;
    this.windowRadiusX = null;
    this.windowRadiusY = null;
    this.portrait = false;
    this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
    this.motionSupport = !!window.DeviceMotionEvent && !this.desktop;
    this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop;
    this.orientationStatus = 0;
    this.motionStatus = 0;

    this.initialise();
  }

  _createClass(Parallax, [{
    key: 'initialise',
    value: function initialise() {
      if (this.transform2DSupport === undefined) {
        this.transform2DSupport = helpers.transformSupport('2D');
        this.transform3DSupport = helpers.transformSupport('3D');
      }

      // Configure Context Styles
      if (this.transform3DSupport) {
        helpers.accelerate(this.element);
      }

      var style = window.getComputedStyle(this.element);
      if (style.getPropertyValue('position') === 'static') {
        this.element.style.position = 'relative';
      }

      // Pointer events
      if (!this.pointerEvents) {
        this.element.style.pointerEvents = 'none';
      }

      // Setup
      this.updateLayers();
      this.updateDimensions();
      this.enable();
      this.queueCalibration(this.calibrationDelay);
    }
  }, {
    key: 'doReadyCallback',
    value: function doReadyCallback() {
      if (this.onReady) {
        this.onReady();
      }
    }
  }, {
    key: 'updateLayers',
    value: function updateLayers() {
      if (this.selector) {
        this.layers = this.element.querySelectorAll(this.selector);
      } else {
        this.layers = this.element.children;
      }

      if (!this.layers.length) {
        console.warn('ParallaxJS: Your scene does not have any layers.');
      }

      this.depthsX = [];
      this.depthsY = [];

      for (var index = 0; index < this.layers.length; index++) {
        var layer = this.layers[index];

        if (this.transform3DSupport) {
          helpers.accelerate(layer);
        }

        layer.style.position = index ? 'absolute' : 'relative';
        layer.style.display = 'block';
        layer.style.left = 0;
        layer.style.top = 0;

        var depth = helpers.data(layer, 'depth') || 0;
        this.depthsX.push(helpers.data(layer, 'depth-x') || depth);
        this.depthsY.push(helpers.data(layer, 'depth-y') || depth);
      }
    }
  }, {
    key: 'updateDimensions',
    value: function updateDimensions() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      this.windowCenterX = this.windowWidth * this.originX;
      this.windowCenterY = this.windowHeight * this.originY;
      this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX);
      this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY);
    }
  }, {
    key: 'updateBounds',
    value: function updateBounds() {
      this.bounds = this.inputElement.getBoundingClientRect();
      this.elementPositionX = this.bounds.left;
      this.elementPositionY = this.bounds.top;
      this.elementWidth = this.bounds.width;
      this.elementHeight = this.bounds.height;
      this.elementCenterX = this.elementWidth * this.originX;
      this.elementCenterY = this.elementHeight * this.originY;
      this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX);
      this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY);
    }
  }, {
    key: 'queueCalibration',
    value: function queueCalibration(delay) {
      clearTimeout(this.calibrationTimer);
      this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
    }
  }, {
    key: 'enable',
    value: function enable() {
      if (this.enabled) {
        return;
      }
      this.enabled = true;

      if (this.orientationSupport) {
        this.portrait = false;
        window.addEventListener('deviceorientation', this.onDeviceOrientation);
        this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay);
      } else if (this.motionSupport) {
        this.portrait = false;
        window.addEventListener('devicemotion', this.onDeviceMotion);
        this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay);
      } else {
        this.calibrationX = 0;
        this.calibrationY = 0;
        this.portrait = false;
        window.addEventListener('mousemove', this.onMouseMove);
        this.doReadyCallback();
      }

      window.addEventListener('resize', this.onWindowResize);
      this.raf = rqAnFr(this.onAnimationFrame);
    }
  }, {
    key: 'disable',
    value: function disable() {
      if (!this.enabled) {
        return;
      }
      this.enabled = false;

      if (this.orientationSupport) {
        window.removeEventListener('deviceorientation', this.onDeviceOrientation);
      } else if (this.motionSupport) {
        window.removeEventListener('devicemotion', this.onDeviceMotion);
      } else {
        window.removeEventListener('mousemove', this.onMouseMove);
      }

      window.removeEventListener('resize', this.onWindowResize);
      rqAnFr.cancel(this.raf);
    }
  }, {
    key: 'calibrate',
    value: function calibrate(x, y) {
      this.calibrateX = x === undefined ? this.calibrateX : x;
      this.calibrateY = y === undefined ? this.calibrateY : y;
    }
  }, {
    key: 'invert',
    value: function invert(x, y) {
      this.invertX = x === undefined ? this.invertX : x;
      this.invertY = y === undefined ? this.invertY : y;
    }
  }, {
    key: 'friction',
    value: function friction(x, y) {
      this.frictionX = x === undefined ? this.frictionX : x;
      this.frictionY = y === undefined ? this.frictionY : y;
    }
  }, {
    key: 'scalar',
    value: function scalar(x, y) {
      this.scalarX = x === undefined ? this.scalarX : x;
      this.scalarY = y === undefined ? this.scalarY : y;
    }
  }, {
    key: 'limit',
    value: function limit(x, y) {
      this.limitX = x === undefined ? this.limitX : x;
      this.limitY = y === undefined ? this.limitY : y;
    }
  }, {
    key: 'origin',
    value: function origin(x, y) {
      this.originX = x === undefined ? this.originX : x;
      this.originY = y === undefined ? this.originY : y;
    }
  }, {
    key: 'setInputElement',
    value: function setInputElement(element) {
      this.inputElement = element;
      this.updateDimensions();
    }
  }, {
    key: 'setPosition',
    value: function setPosition(element, x, y) {
      x = x.toFixed(this.precision) + 'px';
      y = y.toFixed(this.precision) + 'px';
      if (this.transform3DSupport) {
        helpers.css(element, 'transform', 'translate3d(' + x + ',' + y + ',0)');
      } else if (this.transform2DSupport) {
        helpers.css(element, 'transform', 'translate(' + x + ',' + y + ')');
      } else {
        element.style.left = x;
        element.style.top = y;
      }
    }
  }, {
    key: 'onOrientationTimer',
    value: function onOrientationTimer() {
      if (this.orientationSupport && this.orientationStatus === 0) {
        this.disable();
        this.orientationSupport = false;
        this.enable();
      } else {
        this.doReadyCallback();
      }
    }
  }, {
    key: 'onMotionTimer',
    value: function onMotionTimer() {
      if (this.motionSupport && this.motionStatus === 0) {
        this.disable();
        this.motionSupport = false;
        this.enable();
      } else {
        this.doReadyCallback();
      }
    }
  }, {
    key: 'onCalibrationTimer',
    value: function onCalibrationTimer() {
      this.calibrationFlag = true;
    }
  }, {
    key: 'onWindowResize',
    value: function onWindowResize() {
      this.updateDimensions();
    }
  }, {
    key: 'onAnimationFrame',
    value: function onAnimationFrame() {
      this.updateBounds();
      var calibratedInputX = this.inputX - this.calibrationX,
          calibratedInputY = this.inputY - this.calibrationY;
      if (Math.abs(calibratedInputX) > this.calibrationThreshold || Math.abs(calibratedInputY) > this.calibrationThreshold) {
        this.queueCalibration(0);
      }
      if (this.portrait) {
        this.motionX = this.calibrateX ? calibratedInputY : this.inputY;
        this.motionY = this.calibrateY ? calibratedInputX : this.inputX;
      } else {
        this.motionX = this.calibrateX ? calibratedInputX : this.inputX;
        this.motionY = this.calibrateY ? calibratedInputY : this.inputY;
      }
      this.motionX *= this.elementWidth * (this.scalarX / 100);
      this.motionY *= this.elementHeight * (this.scalarY / 100);
      if (!isNaN(parseFloat(this.limitX))) {
        this.motionX = helpers.clamp(this.motionX, -this.limitX, this.limitX);
      }
      if (!isNaN(parseFloat(this.limitY))) {
        this.motionY = helpers.clamp(this.motionY, -this.limitY, this.limitY);
      }
      this.velocityX += (this.motionX - this.velocityX) * this.frictionX;
      this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
      for (var index = 0; index < this.layers.length; index++) {
        var layer = this.layers[index],
            depthX = this.depthsX[index],
            depthY = this.depthsY[index],
            xOffset = this.velocityX * (depthX * (this.invertX ? -1 : 1)),
            yOffset = this.velocityY * (depthY * (this.invertY ? -1 : 1));
        this.setPosition(layer, xOffset, yOffset);
      }
      this.raf = rqAnFr(this.onAnimationFrame);
    }
  }, {
    key: 'rotate',
    value: function rotate(beta, gamma) {
      // Extract Rotation
      var x = (beta || 0) / MAGIC_NUMBER,
          //  -90 :: 90
      y = (gamma || 0) / MAGIC_NUMBER; // -180 :: 180

      // Detect Orientation Change
      var portrait = this.windowHeight > this.windowWidth;
      if (this.portrait !== portrait) {
        this.portrait = portrait;
        this.calibrationFlag = true;
      }

      if (this.calibrationFlag) {
        this.calibrationFlag = false;
        this.calibrationX = x;
        this.calibrationY = y;
      }

      this.inputX = x;
      this.inputY = y;
    }
  }, {
    key: 'onDeviceOrientation',
    value: function onDeviceOrientation(event) {
      var beta = event.beta;
      var gamma = event.gamma;
      if (beta !== null && gamma !== null) {
        this.orientationStatus = 1;
        this.rotate(beta, gamma);
      }
    }
  }, {
    key: 'onDeviceMotion',
    value: function onDeviceMotion(event) {
      var beta = event.rotationRate.beta;
      var gamma = event.rotationRate.gamma;
      if (beta !== null && gamma !== null) {
        this.motionStatus = 1;
        this.rotate(beta, gamma);
      }
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      var clientX = event.clientX,
          clientY = event.clientY;

      // reset input to center if hoverOnly is set and we're not hovering the element
      if (this.hoverOnly && (clientX < this.elementPositionX || clientX > this.elementPositionX + this.elementWidth || clientY < this.elementPositionY || clientY > this.elementPositionY + this.elementHeight)) {
        this.inputX = 0;
        this.inputY = 0;
        return;
      }

      if (this.relativeInput) {
        // Clip mouse coordinates inside element bounds.
        if (this.clipRelativeInput) {
          clientX = Math.max(clientX, this.elementPositionX);
          clientX = Math.min(clientX, this.elementPositionX + this.elementWidth);
          clientY = Math.max(clientY, this.elementPositionY);
          clientY = Math.min(clientY, this.elementPositionY + this.elementHeight);
        }
        // Calculate input relative to the element.
        if (this.elementRangeX && this.elementRangeY) {
          this.inputX = (clientX - this.elementPositionX - this.elementCenterX) / this.elementRangeX;
          this.inputY = (clientY - this.elementPositionY - this.elementCenterY) / this.elementRangeY;
        }
      } else {
        // Calculate input relative to the window.
        if (this.windowRadiusX && this.windowRadiusY) {
          this.inputX = (clientX - this.windowCenterX) / this.windowRadiusX;
          this.inputY = (clientY - this.windowCenterY) / this.windowRadiusY;
        }
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.disable();

      clearTimeout(this.calibrationTimer);
      clearTimeout(this.detectionTimer);

      this.element.removeAttribute('style');
      for (var index = 0; index < this.layers.length; index++) {
        this.layers[index].removeAttribute('style');
      }

      delete this.element;
      delete this.layers;
    }
  }, {
    key: 'version',
    value: function version() {
      return '3.1.0';
    }
  }]);

  return Parallax;
}();

module.exports = Parallax;

},{"object-assign":1,"raf":4}]},{},[5])(5)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcmFmL2luZGV4LmpzIiwic3JjL3BhcmFsbGF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNEO0FBQ0Q7QUFDQSxZQUFHLEtBQUssYUFBTCxJQUFzQixLQUFLLGFBQTlCLEVBQTZDO0FBQzNDLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGdCQUFmLEdBQWtDLEtBQUssY0FBeEMsSUFBMEQsS0FBSyxhQUE3RTtBQUNBLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGdCQUFmLEdBQWtDLEtBQUssY0FBeEMsSUFBMEQsS0FBSyxhQUE3RTtBQUNEO0FBQ0YsT0FiRCxNQWFPO0FBQ0w7QUFDQSxZQUFHLEtBQUssYUFBTCxJQUFzQixLQUFLLGFBQTlCLEVBQTZDO0FBQzNDLGVBQUssTUFBTCxHQUFjLENBQUMsVUFBVSxLQUFLLGFBQWhCLElBQWlDLEtBQUssYUFBcEQ7QUFDQSxlQUFLLE1BQUwsR0FBYyxDQUFDLFVBQVUsS0FBSyxhQUFoQixJQUFpQyxLQUFLLGFBQXBEO0FBQ0Q7QUFDRjtBQUNGOzs7OEJBRVM7QUFDUixXQUFLLE9BQUw7O0FBRUEsbUJBQWEsS0FBSyxnQkFBbEI7QUFDQSxtQkFBYSxLQUFLLGNBQWxCOztBQUVBLFdBQUssT0FBTCxDQUFhLGVBQWIsQ0FBNkIsT0FBN0I7QUFDQSxXQUFLLElBQUksUUFBUSxDQUFqQixFQUFvQixRQUFRLEtBQUssTUFBTCxDQUFZLE1BQXhDLEVBQWdELE9BQWhELEVBQXlEO0FBQ3ZELGFBQUssTUFBTCxDQUFZLEtBQVosRUFBbUIsZUFBbkIsQ0FBbUMsT0FBbkM7QUFDRDs7QUFFRCxhQUFPLEtBQUssT0FBWjtBQUNBLGFBQU8sS0FBSyxNQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sT0FBUDtBQUNEOzs7Ozs7QUFJSCxPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZSwgbW9kdWxlTG9hZFRpbWUsIG5vZGVMb2FkVGltZSwgdXBUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIG5vZGVMb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbW9kdWxlTG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICAgIHVwVGltZSA9IHByb2Nlc3MudXB0aW1lKCkgKiAxZTk7XG4gICAgbm9kZUxvYWRUaW1lID0gbW9kdWxlTG9hZFRpbWUgLSB1cFRpbWU7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBlcmZvcm1hbmNlLW5vdy5qcy5tYXBcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gcm9vdFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gcm9vdFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgcm9vdFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7ICFyYWYgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgcmFmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwocm9vdCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KHJvb3QsIGFyZ3VtZW50cylcbn1cbm1vZHVsZS5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24oKSB7XG4gIHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmFmXG4gIHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWZcbn1cbiIsIi8qKlxuKiBQYXJhbGxheC5qc1xuKiBAYXV0aG9yIE1hdHRoZXcgV2FnZXJmaWVsZCAtIEB3YWdlcmZpZWxkLCBSZW7DqSBSb3RoIC0gbWFpbEByZW5lcm90aC5vcmdcbiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBwYXJhbGxheCBlZmZlY3QgYmV0d2VlbiBhbiBhcnJheSBvZiBsYXllcnMsXG4qICAgICAgICAgICAgICBkcml2aW5nIHRoZSBtb3Rpb24gZnJvbSB0aGUgZ3lyb3Njb3BlIG91dHB1dCBvZiBhIHNtYXJ0ZGV2aWNlLlxuKiAgICAgICAgICAgICAgSWYgbm8gZ3lyb3Njb3BlIGlzIGF2YWlsYWJsZSwgdGhlIGN1cnNvciBwb3NpdGlvbiBpcyB1c2VkLlxuKi9cblxuY29uc3QgcnFBbkZyID0gcmVxdWlyZSgncmFmJylcbmNvbnN0IG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKVxuXG5jb25zdCBoZWxwZXJzID0ge1xuICBwcm9wZXJ0eUNhY2hlOiB7fSxcbiAgdmVuZG9yczogW251bGwsIFsnLXdlYmtpdC0nLCd3ZWJraXQnXSwgWyctbW96LScsJ01veiddLCBbJy1vLScsJ08nXSwgWyctbXMtJywnbXMnXV0sXG5cbiAgY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG1pbiA8IG1heFxuICAgICAgPyAodmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlKVxuICAgICAgOiAodmFsdWUgPCBtYXggPyBtYXggOiB2YWx1ZSA+IG1pbiA/IG1pbiA6IHZhbHVlKVxuICB9LFxuXG4gIGRhdGEoZWxlbWVudCwgbmFtZSkge1xuICAgIHJldHVybiBoZWxwZXJzLmRlc2VyaWFsaXplKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLScrbmFtZSkpXG4gIH0sXG5cbiAgZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBlbHNlIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgfSxcblxuICBjYW1lbENhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvLSsoLik/L2csIChtYXRjaCwgY2hhcmFjdGVyKSA9PiB7XG4gICAgICByZXR1cm4gY2hhcmFjdGVyID8gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCkgOiAnJ1xuICAgIH0pXG4gIH0sXG5cbiAgYWNjZWxlcmF0ZShlbGVtZW50KSB7XG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDAuMDAwMWRlZyknKVxuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0tc3R5bGUnLCAncHJlc2VydmUtM2QnKVxuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICdiYWNrZmFjZS12aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gIH0sXG5cbiAgdHJhbnNmb3JtU3VwcG9ydCh2YWx1ZSkge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIHByb3BlcnR5U3VwcG9ydCA9IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbnVsbCxcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBmYWxzZSxcbiAgICAgICAgY3NzUHJvcGVydHkgPSBudWxsLFxuICAgICAgICBqc1Byb3BlcnR5ID0gbnVsbFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gaGVscGVycy52ZW5kb3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGhlbHBlcnMudmVuZG9yc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICBjc3NQcm9wZXJ0eSA9IGhlbHBlcnMudmVuZG9yc1tpXVswXSArICd0cmFuc2Zvcm0nXG4gICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnVHJhbnNmb3JtJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSAndHJhbnNmb3JtJ1xuICAgICAgICBqc1Byb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcGVydHlTdXBwb3J0ID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2godmFsdWUpIHtcbiAgICAgIGNhc2UgJzJEJzpcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBwcm9wZXJ0eVN1cHBvcnRcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJzNEJzpcbiAgICAgICAgaWYgKHByb3BlcnR5U3VwcG9ydCkge1xuICAgICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2R5JyksXG4gICAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgZG9jdW1lbnRPdmVyZmxvdyA9IGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyxcbiAgICAgICAgICAgICAgaXNDcmVhdGVkQm9keSA9IGZhbHNlXG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGlzQ3JlYXRlZEJvZHkgPSB0cnVlXG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoMXB4LDFweCwxcHgpJ1xuICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Byb3BlcnR5KVxuICAgICAgICAgIGZlYXR1cmVTdXBwb3J0ID0gcHJvcGVydHlWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BlcnR5VmFsdWUubGVuZ3RoID4gMCAmJiBwcm9wZXJ0eVZhbHVlICE9PSAnbm9uZSdcbiAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2N1bWVudE92ZXJmbG93XG4gICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KVxuXG4gICAgICAgICAgaWYgKCBpc0NyZWF0ZWRCb2R5ICkge1xuICAgICAgICAgICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICAgICAgICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cbiAgICByZXR1cm4gZmVhdHVyZVN1cHBvcnRcbiAgfSxcblxuICBjc3MoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbGV0IGpzUHJvcGVydHkgPSBoZWxwZXJzLnByb3BlcnR5Q2FjaGVbcHJvcGVydHldXG4gICAgaWYgKCFqc1Byb3BlcnR5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGhlbHBlcnMudmVuZG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGhlbHBlcnMudmVuZG9yc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLmNhbWVsQ2FzZShoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnLScgKyBwcm9wZXJ0eSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqc1Byb3BlcnR5ID0gcHJvcGVydHlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaGVscGVycy5wcm9wZXJ0eUNhY2hlW3Byb3BlcnR5XSA9IGpzUHJvcGVydHlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSB2YWx1ZVxuICB9XG5cbn1cblxuY29uc3QgTUFHSUNfTlVNQkVSID0gMzAsXG4gICAgICBERUZBVUxUUyA9IHtcbiAgICAgICAgcmVsYXRpdmVJbnB1dDogZmFsc2UsXG4gICAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBmYWxzZSxcbiAgICAgICAgaW5wdXRFbGVtZW50OiBudWxsLFxuICAgICAgICBob3Zlck9ubHk6IGZhbHNlLFxuICAgICAgICBjYWxpYnJhdGlvblRocmVzaG9sZDogMTAwLFxuICAgICAgICBjYWxpYnJhdGlvbkRlbGF5OiA1MDAsXG4gICAgICAgIHN1cHBvcnREZWxheTogNTAwLFxuICAgICAgICBjYWxpYnJhdGVYOiBmYWxzZSxcbiAgICAgICAgY2FsaWJyYXRlWTogdHJ1ZSxcbiAgICAgICAgaW52ZXJ0WDogdHJ1ZSxcbiAgICAgICAgaW52ZXJ0WTogdHJ1ZSxcbiAgICAgICAgbGltaXRYOiBmYWxzZSxcbiAgICAgICAgbGltaXRZOiBmYWxzZSxcbiAgICAgICAgc2NhbGFyWDogMTAuMCxcbiAgICAgICAgc2NhbGFyWTogMTAuMCxcbiAgICAgICAgZnJpY3Rpb25YOiAwLjEsXG4gICAgICAgIGZyaWN0aW9uWTogMC4xLFxuICAgICAgICBvcmlnaW5YOiAwLjUsXG4gICAgICAgIG9yaWdpblk6IDAuNSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogZmFsc2UsXG4gICAgICAgIHByZWNpc2lvbjogMSxcbiAgICAgICAgb25SZWFkeTogbnVsbCxcbiAgICAgICAgc2VsZWN0b3I6IG51bGxcbiAgICAgIH1cblxuY2xhc3MgUGFyYWxsYXgge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY2FsaWJyYXRlWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NhbGlicmF0ZS14JyksXG4gICAgICBjYWxpYnJhdGVZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2FsaWJyYXRlLXknKSxcbiAgICAgIGludmVydFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnZlcnQteCcpLFxuICAgICAgaW52ZXJ0WTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ludmVydC15JyksXG4gICAgICBsaW1pdFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC14JyksXG4gICAgICBsaW1pdFk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC15JyksXG4gICAgICBzY2FsYXJYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2NhbGFyLXgnKSxcbiAgICAgIHNjYWxhclk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzY2FsYXIteScpLFxuICAgICAgZnJpY3Rpb25YOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teCcpLFxuICAgICAgZnJpY3Rpb25ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teScpLFxuICAgICAgb3JpZ2luWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ29yaWdpbi14JyksXG4gICAgICBvcmlnaW5ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnb3JpZ2luLXknKSxcbiAgICAgIHBvaW50ZXJFdmVudHM6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdwb2ludGVyLWV2ZW50cycpLFxuICAgICAgcHJlY2lzaW9uOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncHJlY2lzaW9uJyksXG4gICAgICByZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncmVsYXRpdmUtaW5wdXQnKSxcbiAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2xpcC1yZWxhdGl2ZS1pbnB1dCcpLFxuICAgICAgaG92ZXJPbmx5OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaG92ZXItb25seScpLFxuICAgICAgaW5wdXRFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnB1dC1lbGVtZW50JykpLFxuICAgICAgc2VsZWN0b3I6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzZWxlY3RvcicpXG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGRhdGFba2V5XVxuICAgICAgfVxuICAgIH1cblxuICAgIG9iamVjdEFzc2lnbih0aGlzLCBERUZBVUxUUywgZGF0YSwgb3B0aW9ucylcblxuICAgIGlmKCF0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBudWxsXG4gICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlXG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2VcbiAgICB0aGlzLmRlcHRoc1ggPSBbXVxuICAgIHRoaXMuZGVwdGhzWSA9IFtdXG4gICAgdGhpcy5yYWYgPSBudWxsXG5cbiAgICB0aGlzLmJvdW5kcyA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblggPSAwXG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25ZID0gMFxuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gMFxuICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IDBcblxuICAgIHRoaXMuZWxlbWVudENlbnRlclggPSAwXG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWSA9IDBcblxuICAgIHRoaXMuZWxlbWVudFJhbmdlWCA9IDBcbiAgICB0aGlzLmVsZW1lbnRSYW5nZVkgPSAwXG5cbiAgICB0aGlzLmNhbGlicmF0aW9uWCA9IDBcbiAgICB0aGlzLmNhbGlicmF0aW9uWSA9IDBcblxuICAgIHRoaXMuaW5wdXRYID0gMFxuICAgIHRoaXMuaW5wdXRZID0gMFxuXG4gICAgdGhpcy5tb3Rpb25YID0gMFxuICAgIHRoaXMubW90aW9uWSA9IDBcblxuICAgIHRoaXMudmVsb2NpdHlYID0gMFxuICAgIHRoaXMudmVsb2NpdHlZID0gMFxuXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbiA9IHRoaXMub25EZXZpY2VPcmllbnRhdGlvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkRldmljZU1vdGlvbiA9IHRoaXMub25EZXZpY2VNb3Rpb24uYmluZCh0aGlzKVxuICAgIHRoaXMub25PcmllbnRhdGlvblRpbWVyID0gdGhpcy5vbk9yaWVudGF0aW9uVGltZXIuYmluZCh0aGlzKVxuICAgIHRoaXMub25Nb3Rpb25UaW1lciA9IHRoaXMub25Nb3Rpb25UaW1lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkNhbGlicmF0aW9uVGltZXIgPSB0aGlzLm9uQ2FsaWJyYXRpb25UaW1lci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkFuaW1hdGlvbkZyYW1lID0gdGhpcy5vbkFuaW1hdGlvbkZyYW1lLmJpbmQodGhpcylcbiAgICB0aGlzLm9uV2luZG93UmVzaXplID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLndpbmRvd1dpZHRoID0gbnVsbFxuICAgIHRoaXMud2luZG93SGVpZ2h0ID0gbnVsbFxuICAgIHRoaXMud2luZG93Q2VudGVyWCA9IG51bGxcbiAgICB0aGlzLndpbmRvd0NlbnRlclkgPSBudWxsXG4gICAgdGhpcy53aW5kb3dSYWRpdXNYID0gbnVsbFxuICAgIHRoaXMud2luZG93UmFkaXVzWSA9IG51bGxcbiAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICB0aGlzLmRlc2t0b3AgPSAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWR8QW5kcm9pZHxCbGFja0JlcnJ5fEJCMTB8bW9iaXx0YWJsZXR8b3BlcmEgbWluaXxuZXh1cyA3KS9pKVxuICAgIHRoaXMubW90aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU1vdGlvbkV2ZW50ICYmICF0aGlzLmRlc2t0b3BcbiAgICB0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQgJiYgIXRoaXMuZGVza3RvcFxuICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAwXG4gICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAwXG5cbiAgICB0aGlzLmluaXRpYWxpc2UoKVxuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPSBoZWxwZXJzLnRyYW5zZm9ybVN1cHBvcnQoJzJEJylcbiAgICAgIHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0ID0gaGVscGVycy50cmFuc2Zvcm1TdXBwb3J0KCczRCcpXG4gICAgfVxuXG4gICAgLy8gQ29uZmlndXJlIENvbnRleHQgU3R5bGVzXG4gICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICBoZWxwZXJzLmFjY2VsZXJhdGUodGhpcy5lbGVtZW50KVxuICAgIH1cblxuICAgIGxldCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClcbiAgICBpZiAoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgICB9XG5cbiAgICAvLyBQb2ludGVyIGV2ZW50c1xuICAgIGlmKCF0aGlzLnBvaW50ZXJFdmVudHMpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXG4gICAgfVxuXG4gICAgLy8gU2V0dXBcbiAgICB0aGlzLnVwZGF0ZUxheWVycygpXG4gICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKClcbiAgICB0aGlzLmVuYWJsZSgpXG4gICAgdGhpcy5xdWV1ZUNhbGlicmF0aW9uKHRoaXMuY2FsaWJyYXRpb25EZWxheSlcbiAgfVxuXG4gIGRvUmVhZHlDYWxsYmFjaygpIHtcbiAgICBpZih0aGlzLm9uUmVhZHkpIHtcbiAgICAgIHRoaXMub25SZWFkeSgpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGF5ZXJzKCkge1xuICAgIGlmKHRoaXMuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYXllcnMgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW5cbiAgICB9XG5cbiAgICBpZighdGhpcy5sYXllcnMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1BhcmFsbGF4SlM6IFlvdXIgc2NlbmUgZG9lcyBub3QgaGF2ZSBhbnkgbGF5ZXJzLicpXG4gICAgfVxuXG4gICAgdGhpcy5kZXB0aHNYID0gW11cbiAgICB0aGlzLmRlcHRoc1kgPSBbXVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGV0IGxheWVyID0gdGhpcy5sYXllcnNbaW5kZXhdXG5cbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCkge1xuICAgICAgICBoZWxwZXJzLmFjY2VsZXJhdGUobGF5ZXIpXG4gICAgICB9XG5cbiAgICAgIGxheWVyLnN0eWxlLnBvc2l0aW9uID0gaW5kZXggPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJ1xuICAgICAgbGF5ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIGxheWVyLnN0eWxlLmxlZnQgPSAwXG4gICAgICBsYXllci5zdHlsZS50b3AgPSAwXG5cbiAgICAgIGxldCBkZXB0aCA9IGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoJykgfHwgMFxuICAgICAgdGhpcy5kZXB0aHNYLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteCcpIHx8IGRlcHRoKVxuICAgICAgdGhpcy5kZXB0aHNZLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteScpIHx8IGRlcHRoKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpbmRvd0NlbnRlclggPSB0aGlzLndpbmRvd1dpZHRoICogdGhpcy5vcmlnaW5YXG4gICAgdGhpcy53aW5kb3dDZW50ZXJZID0gdGhpcy53aW5kb3dIZWlnaHQgKiB0aGlzLm9yaWdpbllcbiAgICB0aGlzLndpbmRvd1JhZGl1c1ggPSBNYXRoLm1heCh0aGlzLndpbmRvd0NlbnRlclgsIHRoaXMud2luZG93V2lkdGggLSB0aGlzLndpbmRvd0NlbnRlclgpXG4gICAgdGhpcy53aW5kb3dSYWRpdXNZID0gTWF0aC5tYXgodGhpcy53aW5kb3dDZW50ZXJZLCB0aGlzLndpbmRvd0hlaWdodCAtIHRoaXMud2luZG93Q2VudGVyWSlcbiAgfVxuXG4gIHVwZGF0ZUJvdW5kcygpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuaW5wdXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25YID0gdGhpcy5ib3VuZHMubGVmdFxuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWSA9IHRoaXMuYm91bmRzLnRvcFxuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gdGhpcy5ib3VuZHMud2lkdGhcbiAgICB0aGlzLmVsZW1lbnRIZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHRcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJYID0gdGhpcy5lbGVtZW50V2lkdGggKiB0aGlzLm9yaWdpblhcbiAgICB0aGlzLmVsZW1lbnRDZW50ZXJZID0gdGhpcy5lbGVtZW50SGVpZ2h0ICogdGhpcy5vcmlnaW5ZXG4gICAgdGhpcy5lbGVtZW50UmFuZ2VYID0gTWF0aC5tYXgodGhpcy5lbGVtZW50Q2VudGVyWCwgdGhpcy5lbGVtZW50V2lkdGggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKVxuICAgIHRoaXMuZWxlbWVudFJhbmdlWSA9IE1hdGgubWF4KHRoaXMuZWxlbWVudENlbnRlclksIHRoaXMuZWxlbWVudEhlaWdodCAtIHRoaXMuZWxlbWVudENlbnRlclkpXG4gIH1cblxuICBxdWV1ZUNhbGlicmF0aW9uKGRlbGF5KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcilcbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25DYWxpYnJhdGlvblRpbWVyLCBkZWxheSlcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbilcbiAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25PcmllbnRhdGlvblRpbWVyLCB0aGlzLnN1cHBvcnREZWxheSlcbiAgICB9IGVsc2UgaWYgKHRoaXMubW90aW9uU3VwcG9ydCkge1xuICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgdGhpcy5vbkRldmljZU1vdGlvbilcbiAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25Nb3Rpb25UaW1lciwgdGhpcy5zdXBwb3J0RGVsYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25YID0gMFxuICAgICAgdGhpcy5jYWxpYnJhdGlvblkgPSAwXG4gICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2VcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKVxuICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKVxuICAgIHRoaXMucmFmID0gcnFBbkZyKHRoaXMub25BbmltYXRpb25GcmFtZSlcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24pXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vdGlvblN1cHBvcnQpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCB0aGlzLm9uRGV2aWNlTW90aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSlcbiAgICB9XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSlcbiAgICBycUFuRnIuY2FuY2VsKHRoaXMucmFmKVxuICB9XG5cbiAgY2FsaWJyYXRlKHgsIHkpIHtcbiAgICB0aGlzLmNhbGlicmF0ZVggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmNhbGlicmF0ZVggOiB4XG4gICAgdGhpcy5jYWxpYnJhdGVZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWxpYnJhdGVZIDogeVxuICB9XG5cbiAgaW52ZXJ0KHgsIHkpIHtcbiAgICB0aGlzLmludmVydFggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmludmVydFggOiB4XG4gICAgdGhpcy5pbnZlcnRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbnZlcnRZIDogeVxuICB9XG5cbiAgZnJpY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuZnJpY3Rpb25YID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5mcmljdGlvblggOiB4XG4gICAgdGhpcy5mcmljdGlvblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmZyaWN0aW9uWSA6IHlcbiAgfVxuXG4gIHNjYWxhcih4LCB5KSB7XG4gICAgdGhpcy5zY2FsYXJYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5zY2FsYXJYIDogeFxuICAgIHRoaXMuc2NhbGFyWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2NhbGFyWSA6IHlcbiAgfVxuXG4gIGxpbWl0KHgsIHkpIHtcbiAgICB0aGlzLmxpbWl0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMubGltaXRYIDogeFxuICAgIHRoaXMubGltaXRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5saW1pdFkgOiB5XG4gIH1cblxuICBvcmlnaW4oeCwgeSkge1xuICAgIHRoaXMub3JpZ2luWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMub3JpZ2luWCA6IHhcbiAgICB0aGlzLm9yaWdpblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLm9yaWdpblkgOiB5XG4gIH1cblxuICBzZXRJbnB1dEVsZW1lbnQoZWxlbWVudCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gIH1cblxuICBzZXRQb3NpdGlvbihlbGVtZW50LCB4LCB5KSB7XG4gICAgeCA9IHgudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnXG4gICAgeSA9IHkudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnXG4gICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywnICsgeSArICcsMCknKVxuICAgIH0gZWxzZSBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQpIHtcbiAgICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB4ICsgJywnICsgeSArICcpJylcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0geFxuICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSB5XG4gICAgfVxuICB9XG5cbiAgb25PcmllbnRhdGlvblRpbWVyKCkge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCAmJiB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKVxuICAgICAgdGhpcy5vcmllbnRhdGlvblN1cHBvcnQgPSBmYWxzZVxuICAgICAgdGhpcy5lbmFibGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvUmVhZHlDYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgb25Nb3Rpb25UaW1lcigpIHtcbiAgICBpZiAodGhpcy5tb3Rpb25TdXBwb3J0ICYmIHRoaXMubW90aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKVxuICAgICAgdGhpcy5tb3Rpb25TdXBwb3J0ID0gZmFsc2VcbiAgICAgIHRoaXMuZW5hYmxlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb1JlYWR5Q2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FsaWJyYXRpb25UaW1lcigpIHtcbiAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWVcbiAgfVxuXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpXG4gIH1cblxuICBvbkFuaW1hdGlvbkZyYW1lKCkge1xuICAgIHRoaXMudXBkYXRlQm91bmRzKClcbiAgICBsZXQgY2FsaWJyYXRlZElucHV0WCA9IHRoaXMuaW5wdXRYIC0gdGhpcy5jYWxpYnJhdGlvblgsXG4gICAgICAgIGNhbGlicmF0ZWRJbnB1dFkgPSB0aGlzLmlucHV0WSAtIHRoaXMuY2FsaWJyYXRpb25ZXG4gICAgaWYgKChNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRYKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpIHx8IChNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRZKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpKSB7XG4gICAgICB0aGlzLnF1ZXVlQ2FsaWJyYXRpb24oMClcbiAgICB9XG4gICAgaWYgKHRoaXMucG9ydHJhaXQpIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFkgOiB0aGlzLmlucHV0WVxuICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WCA6IHRoaXMuaW5wdXRYXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFggOiB0aGlzLmlucHV0WFxuICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WSA6IHRoaXMuaW5wdXRZXG4gICAgfVxuICAgIHRoaXMubW90aW9uWCAqPSB0aGlzLmVsZW1lbnRXaWR0aCAqICh0aGlzLnNjYWxhclggLyAxMDApXG4gICAgdGhpcy5tb3Rpb25ZICo9IHRoaXMuZWxlbWVudEhlaWdodCAqICh0aGlzLnNjYWxhclkgLyAxMDApXG4gICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRYKSkpIHtcbiAgICAgIHRoaXMubW90aW9uWCA9IGhlbHBlcnMuY2xhbXAodGhpcy5tb3Rpb25YLCAtdGhpcy5saW1pdFgsIHRoaXMubGltaXRYKVxuICAgIH1cbiAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5saW1pdFkpKSkge1xuICAgICAgdGhpcy5tb3Rpb25ZID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblksIC10aGlzLmxpbWl0WSwgdGhpcy5saW1pdFkpXG4gICAgfVxuICAgIHRoaXMudmVsb2NpdHlYICs9ICh0aGlzLm1vdGlvblggLSB0aGlzLnZlbG9jaXR5WCkgKiB0aGlzLmZyaWN0aW9uWFxuICAgIHRoaXMudmVsb2NpdHlZICs9ICh0aGlzLm1vdGlvblkgLSB0aGlzLnZlbG9jaXR5WSkgKiB0aGlzLmZyaWN0aW9uWVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCBsYXllciA9IHRoaXMubGF5ZXJzW2luZGV4XSxcbiAgICAgICAgICBkZXB0aFggPSB0aGlzLmRlcHRoc1hbaW5kZXhdLFxuICAgICAgICAgIGRlcHRoWSA9IHRoaXMuZGVwdGhzWVtpbmRleF0sXG4gICAgICAgICAgeE9mZnNldCA9IHRoaXMudmVsb2NpdHlYICogKGRlcHRoWCAqICh0aGlzLmludmVydFggPyAtMSA6IDEpKSxcbiAgICAgICAgICB5T2Zmc2V0ID0gdGhpcy52ZWxvY2l0eVkgKiAoZGVwdGhZICogKHRoaXMuaW52ZXJ0WSA/IC0xIDogMSkpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKGxheWVyLCB4T2Zmc2V0LCB5T2Zmc2V0KVxuICAgIH1cbiAgICB0aGlzLnJhZiA9IHJxQW5Gcih0aGlzLm9uQW5pbWF0aW9uRnJhbWUpXG4gIH1cblxuICByb3RhdGUoYmV0YSwgZ2FtbWEpe1xuICAgIC8vIEV4dHJhY3QgUm90YXRpb25cbiAgICBsZXQgeCA9IChiZXRhIHx8IDApIC8gTUFHSUNfTlVNQkVSLCAvLyAgLTkwIDo6IDkwXG4gICAgICAgIHkgPSAoZ2FtbWEgfHwgMCkgLyBNQUdJQ19OVU1CRVIgLy8gLTE4MCA6OiAxODBcblxuICAgIC8vIERldGVjdCBPcmllbnRhdGlvbiBDaGFuZ2VcbiAgICBsZXQgcG9ydHJhaXQgPSB0aGlzLndpbmRvd0hlaWdodCA+IHRoaXMud2luZG93V2lkdGhcbiAgICBpZiAodGhpcy5wb3J0cmFpdCAhPT0gcG9ydHJhaXQpIHtcbiAgICAgIHRoaXMucG9ydHJhaXQgPSBwb3J0cmFpdFxuICAgICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FsaWJyYXRpb25GbGFnKSB7XG4gICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IGZhbHNlXG4gICAgICB0aGlzLmNhbGlicmF0aW9uWCA9IHhcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25ZID0geVxuICAgIH1cblxuICAgIHRoaXMuaW5wdXRYID0geFxuICAgIHRoaXMuaW5wdXRZID0geVxuICB9XG5cbiAgb25EZXZpY2VPcmllbnRhdGlvbihldmVudCkge1xuICAgIGxldCBiZXRhID0gZXZlbnQuYmV0YVxuICAgIGxldCBnYW1tYSA9IGV2ZW50LmdhbW1hXG4gICAgaWYgKGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAxXG4gICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSlcbiAgICB9XG4gIH1cblxuICBvbkRldmljZU1vdGlvbihldmVudCkge1xuICAgIGxldCBiZXRhID0gZXZlbnQucm90YXRpb25SYXRlLmJldGFcbiAgICBsZXQgZ2FtbWEgPSBldmVudC5yb3RhdGlvblJhdGUuZ2FtbWFcbiAgICBpZiAoYmV0YSAhPT0gbnVsbCAmJiBnYW1tYSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAxXG4gICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSlcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGxldCBjbGllbnRYID0gZXZlbnQuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WSA9IGV2ZW50LmNsaWVudFlcblxuICAgIC8vIHJlc2V0IGlucHV0IHRvIGNlbnRlciBpZiBob3Zlck9ubHkgaXMgc2V0IGFuZCB3ZSdyZSBub3QgaG92ZXJpbmcgdGhlIGVsZW1lbnRcbiAgICBpZih0aGlzLmhvdmVyT25seSAmJlxuICAgICAgKChjbGllbnRYIDwgdGhpcy5lbGVtZW50UG9zaXRpb25YIHx8IGNsaWVudFggPiB0aGlzLmVsZW1lbnRQb3NpdGlvblggKyB0aGlzLmVsZW1lbnRXaWR0aCkgfHxcbiAgICAgIChjbGllbnRZIDwgdGhpcy5lbGVtZW50UG9zaXRpb25ZIHx8IGNsaWVudFkgPiB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpKSkge1xuICAgICAgICB0aGlzLmlucHV0WCA9IDBcbiAgICAgICAgdGhpcy5pbnB1dFkgPSAwXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgaWYgKHRoaXMucmVsYXRpdmVJbnB1dCkge1xuICAgICAgLy8gQ2xpcCBtb3VzZSBjb29yZGluYXRlcyBpbnNpZGUgZWxlbWVudCBib3VuZHMuXG4gICAgICBpZiAodGhpcy5jbGlwUmVsYXRpdmVJbnB1dCkge1xuICAgICAgICBjbGllbnRYID0gTWF0aC5tYXgoY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YKVxuICAgICAgICBjbGllbnRYID0gTWF0aC5taW4oY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YICsgdGhpcy5lbGVtZW50V2lkdGgpXG4gICAgICAgIGNsaWVudFkgPSBNYXRoLm1heChjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkpXG4gICAgICAgIGNsaWVudFkgPSBNYXRoLm1pbihjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpXG4gICAgICB9XG4gICAgICAvLyBDYWxjdWxhdGUgaW5wdXQgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQuXG4gICAgICBpZih0aGlzLmVsZW1lbnRSYW5nZVggJiYgdGhpcy5lbGVtZW50UmFuZ2VZKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLmVsZW1lbnRQb3NpdGlvblggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKSAvIHRoaXMuZWxlbWVudFJhbmdlWFxuICAgICAgICB0aGlzLmlucHV0WSA9IChjbGllbnRZIC0gdGhpcy5lbGVtZW50UG9zaXRpb25ZIC0gdGhpcy5lbGVtZW50Q2VudGVyWSkgLyB0aGlzLmVsZW1lbnRSYW5nZVlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2FsY3VsYXRlIGlucHV0IHJlbGF0aXZlIHRvIHRoZSB3aW5kb3cuXG4gICAgICBpZih0aGlzLndpbmRvd1JhZGl1c1ggJiYgdGhpcy53aW5kb3dSYWRpdXNZKSB7XG4gICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLndpbmRvd0NlbnRlclgpIC8gdGhpcy53aW5kb3dSYWRpdXNYXG4gICAgICAgIHRoaXMuaW5wdXRZID0gKGNsaWVudFkgLSB0aGlzLndpbmRvd0NlbnRlclkpIC8gdGhpcy53aW5kb3dSYWRpdXNZXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRpc2FibGUoKVxuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcilcbiAgICBjbGVhclRpbWVvdXQodGhpcy5kZXRlY3Rpb25UaW1lcilcblxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxheWVyc1tpbmRleF0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG4gICAgfVxuXG4gICAgZGVsZXRlIHRoaXMuZWxlbWVudFxuICAgIGRlbGV0ZSB0aGlzLmxheWVyc1xuICB9XG5cbiAgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gJzMuMS4wJ1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJhbGxheFxuIl19


/***/ }),

/***/ "./src/scenes/scene1/index.scss":
/*!**************************************!*\
  !*** ./src/scenes/scene1/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scenes/scene1/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/scenes/scene1/atri.webp":
/*!*************************************!*\
  !*** ./src/scenes/scene1/atri.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "621f0199273c344b3abd.webp";

/***/ }),

/***/ "./src/scenes/scene1/classroom-am.webp":
/*!*********************************************!*\
  !*** ./src/scenes/scene1/classroom-am.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "aa867014d042274c3178.webp";

/***/ }),

/***/ "./src/scenes/scene1/classroom-pm.webp":
/*!*********************************************!*\
  !*** ./src/scenes/scene1/classroom-pm.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60c5d48cd9d0a51d17b1.webp";

/***/ }),

/***/ "./src/scenes/scene1/tmin.webp":
/*!*************************************!*\
  !*** ./src/scenes/scene1/tmin.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f9ca2cfb6a68f9fd6dae.webp";

/***/ }),

/***/ "./src/scenes/scene1/trir.webp":
/*!*************************************!*\
  !*** ./src/scenes/scene1/trir.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9bb84ae08086c4220051.webp";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************!*\
  !*** ./src/scenes/scene1/index.ts ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/scenes/scene1/index.scss");
/* harmony import */ var _atri_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atri.webp */ "./src/scenes/scene1/atri.webp");
/* harmony import */ var _classroom_am_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classroom-am.webp */ "./src/scenes/scene1/classroom-am.webp");
/* harmony import */ var _classroom_pm_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classroom-pm.webp */ "./src/scenes/scene1/classroom-pm.webp");
/* harmony import */ var _tmin_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tmin.webp */ "./src/scenes/scene1/tmin.webp");
/* harmony import */ var _trir_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trir.webp */ "./src/scenes/scene1/trir.webp");


// import "./atri.bmp"





var scene = document.getElementById('scene');
var parallaxInstance = new (parallax_js__WEBPACK_IMPORTED_MODULE_0___default())(scene);
console.log('Hello Webpack');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc2NlbmVzL3NjZW5lMS9pbmRleC5zY3NzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvcGFyYWxsYXgtanMvZGlzdC9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc2NlbmVzL3NjZW5lMS9pbmRleC5zY3NzPzQ3YTAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3NjZW5lcy9zY2VuZTEvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDN0I7QUFDTztBQUN0QztBQUNoRSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQywrQ0FBNkI7QUFDdEc7QUFDQSxrRUFBa0UsY0FBYyxlQUFlLEdBQUcsVUFBVSxxQkFBcUIsR0FBRyxrQkFBa0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxZQUFZLHVCQUF1QixrQkFBa0IsNEJBQTRCLGtCQUFrQixpQkFBaUIsaUNBQWlDLDJCQUEyQixnQ0FBZ0MsR0FBRyxpQkFBaUIsdUJBQXVCLFdBQVcsWUFBWSxrQkFBa0IseUNBQXlDLGlCQUFpQixrQkFBa0IsR0FBRyxpQkFBaUIsaUJBQWlCLGtCQUFrQixHQUFHLFlBQVksc0VBQXNFLEdBQUcsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyxnQkFBZ0IsaUJBQWlCLHNCQUFzQixHQUFHLG9CQUFvQixxQkFBcUIsa0JBQWtCLEdBQUcsZ0JBQWdCLHVCQUF1QixpQkFBaUIsYUFBYSx1QkFBdUIsR0FBRyxvQkFBb0IscUJBQXFCLGtCQUFrQixHQUFHLE9BQU8sbUlBQW1JLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7QUFFdEMsQ0FBQyxHQUFHO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IscUNBQXFDLFVBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsbUJBQW1CLHFCQUFNLG1CQUFtQixxQkFBTSxtRkFBbUY7O0FBRXRJLENBQUMsRUFBRSxvQkFBb0I7QUFDdkI7O0FBRUEsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsT0FBTztBQUN0RDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUJBQXlCLDRCQUE0QjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRCQUE0QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtQztBQUNiO0FBQ3RCO0FBQ3FCO0FBQ1E7QUFDQTtBQUNSO0FBQ0E7QUFDckI7QUFDQSwyQkFBMkIsb0RBQVE7QUFDbkMiLCJmaWxlIjoic2NlbmVzL3NjZW5lMS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vY2xhc3Nyb29tLXBtLndlYnBcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZsZXgtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzY2VuZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcbiNzY2VuZTo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuI3NjZW5lIC5sYXllciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jc2NlbmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuI3NjZW5lIC5hdHJpIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcXG59XFxuI3NjZW5lIC50bWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG4jc2NlbmUgLnRtaW4gaW1nIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBoZWlnaHQ6IDgyMHB4O1xcbn1cXG4jc2NlbmUgLnRyaXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxufVxcbiNzY2VuZSAudHJpciBpbWcge1xcbiAgbWFyZ2luLXRvcDogOTBweDtcXG4gIGhlaWdodDogNzYwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY2VuZXMvc2NlbmUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3NjZW5lcy9zY2VuZTEvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQUo7QURHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDREo7O0FBbkNBO0VBRUUseURBQUE7QUFxQ0Y7QUFuQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFxQ0o7QUFsQ0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFvQ0o7QUFsQ0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFvQ047QUFoQ0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFrQ0o7QUFoQ0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFrQ05cIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5mbGV4LWNlbnRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2NlbmUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLy9hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcclxcbiAgJjo6YWZ0ZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLC4yKTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxheWVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgfVxcclxcbn1cIixcIkBpbXBvcnQgXFxcIi4uL3NjZW5lXFxcIjtcXHJcXG5cXHJcXG4jc2NlbmUge1xcclxcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vY2xhc3Nyb29tLWFtLndlYnAnKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9jbGFzc3Jvb20tcG0ud2VicCcpO1xcclxcblxcclxcbiAgLmF0cmkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50bWluIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICAgIGhlaWdodDogODIwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50cmlyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogOTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDc2MHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcuUGFyYWxsYXggPSBmKCl9fSkoZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG59LHt9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuMlxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWUsIG1vZHVsZUxvYWRUaW1lLCBub2RlTG9hZFRpbWUsIHVwVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBub2RlTG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIG1vZHVsZUxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgICB1cFRpbWUgPSBwcm9jZXNzLnVwdGltZSgpICogMWU5O1xuICAgIG5vZGVMb2FkVGltZSA9IG1vZHVsZUxvYWRUaW1lIC0gdXBUaW1lO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJykpXG5cbn0se1wiX3Byb2Nlc3NcIjozfV0sMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG59LHt9XSw0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKVxuICAsIHJvb3QgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvd1xuICAsIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxuICAsIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZSdcbiAgLCByYWYgPSByb290WydyZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBjYWYgPSByb290WydjYW5jZWwnICsgc3VmZml4XSB8fCByb290WydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cblxuZm9yKHZhciBpID0gMDsgIXJhZiAmJiBpIDwgdmVuZG9ycy5sZW5ndGg7IGkrKykge1xuICByYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdCcgKyBzdWZmaXhdXG4gIGNhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWwnICsgc3VmZml4XVxuICAgICAgfHwgcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZighcmFmIHx8ICFjYWYpIHtcbiAgdmFyIGxhc3QgPSAwXG4gICAgLCBpZCA9IDBcbiAgICAsIHF1ZXVlID0gW11cbiAgICAsIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjBcblxuICByYWYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKVxuICAgICAgICAsIG5leHQgPSBNYXRoLm1heCgwLCBmcmFtZUR1cmF0aW9uIC0gKF9ub3cgLSBsYXN0KSlcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNwID0gcXVldWUuc2xpY2UoMClcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdClcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLnJvdW5kKG5leHQpKVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgY2FmID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIHJldHVybiByYWYuY2FsbChyb290LCBmbilcbn1cbm1vZHVsZS5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICBjYWYuYXBwbHkocm9vdCwgYXJndW1lbnRzKVxufVxubW9kdWxlLmV4cG9ydHMucG9seWZpbGwgPSBmdW5jdGlvbigpIHtcbiAgcm9vdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByYWZcbiAgcm9vdC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNhZlxufVxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcblxufSx7XCJwZXJmb3JtYW5jZS1ub3dcIjoyfV0sNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuKiBQYXJhbGxheC5qc1xuKiBAYXV0aG9yIE1hdHRoZXcgV2FnZXJmaWVsZCAtIEB3YWdlcmZpZWxkLCBSZW7DqSBSb3RoIC0gbWFpbEByZW5lcm90aC5vcmdcbiogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBwYXJhbGxheCBlZmZlY3QgYmV0d2VlbiBhbiBhcnJheSBvZiBsYXllcnMsXG4qICAgICAgICAgICAgICBkcml2aW5nIHRoZSBtb3Rpb24gZnJvbSB0aGUgZ3lyb3Njb3BlIG91dHB1dCBvZiBhIHNtYXJ0ZGV2aWNlLlxuKiAgICAgICAgICAgICAgSWYgbm8gZ3lyb3Njb3BlIGlzIGF2YWlsYWJsZSwgdGhlIGN1cnNvciBwb3NpdGlvbiBpcyB1c2VkLlxuKi9cblxudmFyIHJxQW5GciA9IHJlcXVpcmUoJ3JhZicpO1xudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIGhlbHBlcnMgPSB7XG4gIHByb3BlcnR5Q2FjaGU6IHt9LFxuICB2ZW5kb3JzOiBbbnVsbCwgWyctd2Via2l0LScsICd3ZWJraXQnXSwgWyctbW96LScsICdNb3onXSwgWyctby0nLCAnTyddLCBbJy1tcy0nLCAnbXMnXV0sXG5cbiAgY2xhbXA6IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBtaW4gPCBtYXggPyB2YWx1ZSA8IG1pbiA/IG1pbiA6IHZhbHVlID4gbWF4ID8gbWF4IDogdmFsdWUgOiB2YWx1ZSA8IG1heCA/IG1heCA6IHZhbHVlID4gbWluID8gbWluIDogdmFsdWU7XG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoZWxlbWVudCwgbmFtZSkge1xuICAgIHJldHVybiBoZWxwZXJzLmRlc2VyaWFsaXplKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBuYW1lKSk7XG4gIH0sXG4gIGRlc2VyaWFsaXplOiBmdW5jdGlvbiBkZXNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ251bGwnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH0sXG4gIGNhbWVsQ2FzZTogZnVuY3Rpb24gY2FtZWxDYXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLy0rKC4pPy9nLCBmdW5jdGlvbiAobWF0Y2gsIGNoYXJhY3Rlcikge1xuICAgICAgcmV0dXJuIGNoYXJhY3RlciA/IGNoYXJhY3Rlci50b1VwcGVyQ2FzZSgpIDogJyc7XG4gICAgfSk7XG4gIH0sXG4gIGFjY2VsZXJhdGU6IGZ1bmN0aW9uIGFjY2VsZXJhdGUoZWxlbWVudCkge1xuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgwLjAwMDFkZWcpJyk7XG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybS1zdHlsZScsICdwcmVzZXJ2ZS0zZCcpO1xuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICdiYWNrZmFjZS12aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICB9LFxuICB0cmFuc2Zvcm1TdXBwb3J0OiBmdW5jdGlvbiB0cmFuc2Zvcm1TdXBwb3J0KHZhbHVlKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgcHJvcGVydHlTdXBwb3J0ID0gZmFsc2UsXG4gICAgICAgIHByb3BlcnR5VmFsdWUgPSBudWxsLFxuICAgICAgICBmZWF0dXJlU3VwcG9ydCA9IGZhbHNlLFxuICAgICAgICBjc3NQcm9wZXJ0eSA9IG51bGwsXG4gICAgICAgIGpzUHJvcGVydHkgPSBudWxsO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gaGVscGVycy52ZW5kb3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGhlbHBlcnMudmVuZG9yc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICBjc3NQcm9wZXJ0eSA9IGhlbHBlcnMudmVuZG9yc1tpXVswXSArICd0cmFuc2Zvcm0nO1xuICAgICAgICBqc1Byb3BlcnR5ID0gaGVscGVycy52ZW5kb3JzW2ldWzFdICsgJ1RyYW5zZm9ybSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjc3NQcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICBqc1Byb3BlcnR5ID0gJ3RyYW5zZm9ybSc7XG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BlcnR5U3VwcG9ydCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICcyRCc6XG4gICAgICAgIGZlYXR1cmVTdXBwb3J0ID0gcHJvcGVydHlTdXBwb3J0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzNEJzpcbiAgICAgICAgaWYgKHByb3BlcnR5U3VwcG9ydCkge1xuICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2R5JyksXG4gICAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgZG9jdW1lbnRPdmVyZmxvdyA9IGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyxcbiAgICAgICAgICAgICAgaXNDcmVhdGVkQm9keSA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBpc0NyZWF0ZWRCb2R5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGJvZHkpO1xuICAgICAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldID0gJ3RyYW5zbGF0ZTNkKDFweCwxcHgsMXB4KSc7XG4gICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY3NzUHJvcGVydHkpO1xuICAgICAgICAgIGZlYXR1cmVTdXBwb3J0ID0gcHJvcGVydHlWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BlcnR5VmFsdWUubGVuZ3RoID4gMCAmJiBwcm9wZXJ0eVZhbHVlICE9PSAnbm9uZSc7XG4gICAgICAgICAgZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gZG9jdW1lbnRPdmVyZmxvdztcbiAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKGlzQ3JlYXRlZEJvZHkpIHtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgYm9keS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJvZHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGZlYXR1cmVTdXBwb3J0O1xuICB9LFxuICBjc3M6IGZ1bmN0aW9uIGNzcyhlbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICB2YXIganNQcm9wZXJ0eSA9IGhlbHBlcnMucHJvcGVydHlDYWNoZVtwcm9wZXJ0eV07XG4gICAgaWYgKCFqc1Byb3BlcnR5KSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGhlbHBlcnMudmVuZG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGhlbHBlcnMudmVuZG9yc1tpXSAhPT0gbnVsbCkge1xuICAgICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLmNhbWVsQ2FzZShoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnLScgKyBwcm9wZXJ0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAganNQcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBoZWxwZXJzLnByb3BlcnR5Q2FjaGVbcHJvcGVydHldID0ganNQcm9wZXJ0eTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldID0gdmFsdWU7XG4gIH1cbn07XG5cbnZhciBNQUdJQ19OVU1CRVIgPSAzMCxcbiAgICBERUZBVUxUUyA9IHtcbiAgcmVsYXRpdmVJbnB1dDogZmFsc2UsXG4gIGNsaXBSZWxhdGl2ZUlucHV0OiBmYWxzZSxcbiAgaW5wdXRFbGVtZW50OiBudWxsLFxuICBob3Zlck9ubHk6IGZhbHNlLFxuICBjYWxpYnJhdGlvblRocmVzaG9sZDogMTAwLFxuICBjYWxpYnJhdGlvbkRlbGF5OiA1MDAsXG4gIHN1cHBvcnREZWxheTogNTAwLFxuICBjYWxpYnJhdGVYOiBmYWxzZSxcbiAgY2FsaWJyYXRlWTogdHJ1ZSxcbiAgaW52ZXJ0WDogdHJ1ZSxcbiAgaW52ZXJ0WTogdHJ1ZSxcbiAgbGltaXRYOiBmYWxzZSxcbiAgbGltaXRZOiBmYWxzZSxcbiAgc2NhbGFyWDogMTAuMCxcbiAgc2NhbGFyWTogMTAuMCxcbiAgZnJpY3Rpb25YOiAwLjEsXG4gIGZyaWN0aW9uWTogMC4xLFxuICBvcmlnaW5YOiAwLjUsXG4gIG9yaWdpblk6IDAuNSxcbiAgcG9pbnRlckV2ZW50czogZmFsc2UsXG4gIHByZWNpc2lvbjogMSxcbiAgb25SZWFkeTogbnVsbCxcbiAgc2VsZWN0b3I6IG51bGxcbn07XG5cbnZhciBQYXJhbGxheCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUGFyYWxsYXgoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXJhbGxheCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBjYWxpYnJhdGVYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2FsaWJyYXRlLXgnKSxcbiAgICAgIGNhbGlicmF0ZVk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdjYWxpYnJhdGUteScpLFxuICAgICAgaW52ZXJ0WDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ludmVydC14JyksXG4gICAgICBpbnZlcnRZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaW52ZXJ0LXknKSxcbiAgICAgIGxpbWl0WDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2xpbWl0LXgnKSxcbiAgICAgIGxpbWl0WTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2xpbWl0LXknKSxcbiAgICAgIHNjYWxhclg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzY2FsYXIteCcpLFxuICAgICAgc2NhbGFyWTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3NjYWxhci15JyksXG4gICAgICBmcmljdGlvblg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdmcmljdGlvbi14JyksXG4gICAgICBmcmljdGlvblk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdmcmljdGlvbi15JyksXG4gICAgICBvcmlnaW5YOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnb3JpZ2luLXgnKSxcbiAgICAgIG9yaWdpblk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdvcmlnaW4teScpLFxuICAgICAgcG9pbnRlckV2ZW50czogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3BvaW50ZXItZXZlbnRzJyksXG4gICAgICBwcmVjaXNpb246IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdwcmVjaXNpb24nKSxcbiAgICAgIHJlbGF0aXZlSW5wdXQ6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdyZWxhdGl2ZS1pbnB1dCcpLFxuICAgICAgY2xpcFJlbGF0aXZlSW5wdXQ6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdjbGlwLXJlbGF0aXZlLWlucHV0JyksXG4gICAgICBob3Zlck9ubHk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdob3Zlci1vbmx5JyksXG4gICAgICBpbnB1dEVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2lucHV0LWVsZW1lbnQnKSksXG4gICAgICBzZWxlY3RvcjogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3NlbGVjdG9yJylcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvYmplY3RBc3NpZ24odGhpcywgREVGQVVMVFMsIGRhdGEsIG9wdGlvbnMpO1xuXG4gICAgaWYgKCF0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdGhpcy5jYWxpYnJhdGlvblRpbWVyID0gbnVsbDtcbiAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWU7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5kZXB0aHNYID0gW107XG4gICAgdGhpcy5kZXB0aHNZID0gW107XG4gICAgdGhpcy5yYWYgPSBudWxsO1xuXG4gICAgdGhpcy5ib3VuZHMgPSBudWxsO1xuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWCA9IDA7XG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25ZID0gMDtcbiAgICB0aGlzLmVsZW1lbnRXaWR0aCA9IDA7XG4gICAgdGhpcy5lbGVtZW50SGVpZ2h0ID0gMDtcblxuICAgIHRoaXMuZWxlbWVudENlbnRlclggPSAwO1xuICAgIHRoaXMuZWxlbWVudENlbnRlclkgPSAwO1xuXG4gICAgdGhpcy5lbGVtZW50UmFuZ2VYID0gMDtcbiAgICB0aGlzLmVsZW1lbnRSYW5nZVkgPSAwO1xuXG4gICAgdGhpcy5jYWxpYnJhdGlvblggPSAwO1xuICAgIHRoaXMuY2FsaWJyYXRpb25ZID0gMDtcblxuICAgIHRoaXMuaW5wdXRYID0gMDtcbiAgICB0aGlzLmlucHV0WSA9IDA7XG5cbiAgICB0aGlzLm1vdGlvblggPSAwO1xuICAgIHRoaXMubW90aW9uWSA9IDA7XG5cbiAgICB0aGlzLnZlbG9jaXR5WCA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eVkgPSAwO1xuXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24gPSB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGV2aWNlTW90aW9uID0gdGhpcy5vbkRldmljZU1vdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25PcmllbnRhdGlvblRpbWVyID0gdGhpcy5vbk9yaWVudGF0aW9uVGltZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTW90aW9uVGltZXIgPSB0aGlzLm9uTW90aW9uVGltZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2FsaWJyYXRpb25UaW1lciA9IHRoaXMub25DYWxpYnJhdGlvblRpbWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkFuaW1hdGlvbkZyYW1lID0gdGhpcy5vbkFuaW1hdGlvbkZyYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbldpbmRvd1Jlc2l6ZSA9IHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMud2luZG93V2lkdGggPSBudWxsO1xuICAgIHRoaXMud2luZG93SGVpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd0NlbnRlclggPSBudWxsO1xuICAgIHRoaXMud2luZG93Q2VudGVyWSA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dSYWRpdXNYID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd1JhZGl1c1kgPSBudWxsO1xuICAgIHRoaXMucG9ydHJhaXQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc2t0b3AgPSAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWR8QW5kcm9pZHxCbGFja0JlcnJ5fEJCMTB8bW9iaXx0YWJsZXR8b3BlcmEgbWluaXxuZXh1cyA3KS9pKTtcbiAgICB0aGlzLm1vdGlvblN1cHBvcnQgPSAhIXdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudCAmJiAhdGhpcy5kZXNrdG9wO1xuICAgIHRoaXMub3JpZW50YXRpb25TdXBwb3J0ID0gISF3aW5kb3cuRGV2aWNlT3JpZW50YXRpb25FdmVudCAmJiAhdGhpcy5kZXNrdG9wO1xuICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAwO1xuICAgIHRoaXMubW90aW9uU3RhdHVzID0gMDtcblxuICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBhcmFsbGF4LCBbe1xuICAgIGtleTogJ2luaXRpYWxpc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0aWFsaXNlKCkge1xuICAgICAgaWYgKHRoaXMudHJhbnNmb3JtMkRTdXBwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPSBoZWxwZXJzLnRyYW5zZm9ybVN1cHBvcnQoJzJEJyk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0ID0gaGVscGVycy50cmFuc2Zvcm1TdXBwb3J0KCczRCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb25maWd1cmUgQ29udGV4dCBTdHlsZXNcbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCkge1xuICAgICAgICBoZWxwZXJzLmFjY2VsZXJhdGUodGhpcy5lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KTtcbiAgICAgIGlmIChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgfVxuXG4gICAgICAvLyBQb2ludGVyIGV2ZW50c1xuICAgICAgaWYgKCF0aGlzLnBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHVwXG4gICAgICB0aGlzLnVwZGF0ZUxheWVycygpO1xuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG4gICAgICB0aGlzLmVuYWJsZSgpO1xuICAgICAgdGhpcy5xdWV1ZUNhbGlicmF0aW9uKHRoaXMuY2FsaWJyYXRpb25EZWxheSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZG9SZWFkeUNhbGxiYWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9SZWFkeUNhbGxiYWNrKCkge1xuICAgICAgaWYgKHRoaXMub25SZWFkeSkge1xuICAgICAgICB0aGlzLm9uUmVhZHkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVMYXllcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVMYXllcnMoKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmxheWVycyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2VsZWN0b3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXllcnMgPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW47XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5sYXllcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignUGFyYWxsYXhKUzogWW91ciBzY2VuZSBkb2VzIG5vdCBoYXZlIGFueSBsYXllcnMuJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVwdGhzWCA9IFtdO1xuICAgICAgdGhpcy5kZXB0aHNZID0gW107XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGxheWVyID0gdGhpcy5sYXllcnNbaW5kZXhdO1xuXG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCkge1xuICAgICAgICAgIGhlbHBlcnMuYWNjZWxlcmF0ZShsYXllcik7XG4gICAgICAgIH1cblxuICAgICAgICBsYXllci5zdHlsZS5wb3NpdGlvbiA9IGluZGV4ID8gJ2Fic29sdXRlJyA6ICdyZWxhdGl2ZSc7XG4gICAgICAgIGxheWVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBsYXllci5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgbGF5ZXIuc3R5bGUudG9wID0gMDtcblxuICAgICAgICB2YXIgZGVwdGggPSBoZWxwZXJzLmRhdGEobGF5ZXIsICdkZXB0aCcpIHx8IDA7XG4gICAgICAgIHRoaXMuZGVwdGhzWC5wdXNoKGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoLXgnKSB8fCBkZXB0aCk7XG4gICAgICAgIHRoaXMuZGVwdGhzWS5wdXNoKGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoLXknKSB8fCBkZXB0aCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlRGltZW5zaW9ucycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpbWVuc2lvbnMoKSB7XG4gICAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIHRoaXMud2luZG93Q2VudGVyWCA9IHRoaXMud2luZG93V2lkdGggKiB0aGlzLm9yaWdpblg7XG4gICAgICB0aGlzLndpbmRvd0NlbnRlclkgPSB0aGlzLndpbmRvd0hlaWdodCAqIHRoaXMub3JpZ2luWTtcbiAgICAgIHRoaXMud2luZG93UmFkaXVzWCA9IE1hdGgubWF4KHRoaXMud2luZG93Q2VudGVyWCwgdGhpcy53aW5kb3dXaWR0aCAtIHRoaXMud2luZG93Q2VudGVyWCk7XG4gICAgICB0aGlzLndpbmRvd1JhZGl1c1kgPSBNYXRoLm1heCh0aGlzLndpbmRvd0NlbnRlclksIHRoaXMud2luZG93SGVpZ2h0IC0gdGhpcy53aW5kb3dDZW50ZXJZKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVCb3VuZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVCb3VuZHMoKSB7XG4gICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuaW5wdXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5lbGVtZW50UG9zaXRpb25YID0gdGhpcy5ib3VuZHMubGVmdDtcbiAgICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWSA9IHRoaXMuYm91bmRzLnRvcDtcbiAgICAgIHRoaXMuZWxlbWVudFdpZHRoID0gdGhpcy5ib3VuZHMud2lkdGg7XG4gICAgICB0aGlzLmVsZW1lbnRIZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQ7XG4gICAgICB0aGlzLmVsZW1lbnRDZW50ZXJYID0gdGhpcy5lbGVtZW50V2lkdGggKiB0aGlzLm9yaWdpblg7XG4gICAgICB0aGlzLmVsZW1lbnRDZW50ZXJZID0gdGhpcy5lbGVtZW50SGVpZ2h0ICogdGhpcy5vcmlnaW5ZO1xuICAgICAgdGhpcy5lbGVtZW50UmFuZ2VYID0gTWF0aC5tYXgodGhpcy5lbGVtZW50Q2VudGVyWCwgdGhpcy5lbGVtZW50V2lkdGggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKTtcbiAgICAgIHRoaXMuZWxlbWVudFJhbmdlWSA9IE1hdGgubWF4KHRoaXMuZWxlbWVudENlbnRlclksIHRoaXMuZWxlbWVudEhlaWdodCAtIHRoaXMuZWxlbWVudENlbnRlclkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3F1ZXVlQ2FsaWJyYXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBxdWV1ZUNhbGlicmF0aW9uKGRlbGF5KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jYWxpYnJhdGlvblRpbWVyKTtcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25UaW1lciA9IHNldFRpbWVvdXQodGhpcy5vbkNhbGlicmF0aW9uVGltZXIsIGRlbGF5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmFibGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCkge1xuICAgICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbik7XG4gICAgICAgIHRoaXMuZGV0ZWN0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25PcmllbnRhdGlvblRpbWVyLCB0aGlzLnN1cHBvcnREZWxheSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW90aW9uU3VwcG9ydCkge1xuICAgICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCB0aGlzLm9uRGV2aWNlTW90aW9uKTtcbiAgICAgICAgdGhpcy5kZXRlY3Rpb25UaW1lciA9IHNldFRpbWVvdXQodGhpcy5vbk1vdGlvblRpbWVyLCB0aGlzLnN1cHBvcnREZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uWCA9IDA7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25ZID0gMDtcbiAgICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgIHRoaXMuZG9SZWFkeUNhbGxiYWNrKCk7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKTtcbiAgICAgIHRoaXMucmFmID0gcnFBbkZyKHRoaXMub25BbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzYWJsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW90aW9uU3VwcG9ydCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgdGhpcy5vbkRldmljZU1vdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKTtcbiAgICAgIHJxQW5Gci5jYW5jZWwodGhpcy5yYWYpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhbGlicmF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGlicmF0ZSh4LCB5KSB7XG4gICAgICB0aGlzLmNhbGlicmF0ZVggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmNhbGlicmF0ZVggOiB4O1xuICAgICAgdGhpcy5jYWxpYnJhdGVZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWxpYnJhdGVZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbnZlcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnZlcnQoeCwgeSkge1xuICAgICAgdGhpcy5pbnZlcnRYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbnZlcnRYIDogeDtcbiAgICAgIHRoaXMuaW52ZXJ0WSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuaW52ZXJ0WSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZnJpY3Rpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmcmljdGlvbih4LCB5KSB7XG4gICAgICB0aGlzLmZyaWN0aW9uWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMuZnJpY3Rpb25YIDogeDtcbiAgICAgIHRoaXMuZnJpY3Rpb25ZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5mcmljdGlvblkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NjYWxhcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNjYWxhcih4LCB5KSB7XG4gICAgICB0aGlzLnNjYWxhclggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLnNjYWxhclggOiB4O1xuICAgICAgdGhpcy5zY2FsYXJZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5zY2FsYXJZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsaW1pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpbWl0KHgsIHkpIHtcbiAgICAgIHRoaXMubGltaXRYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5saW1pdFggOiB4O1xuICAgICAgdGhpcy5saW1pdFkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmxpbWl0WSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb3JpZ2luJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3JpZ2luKHgsIHkpIHtcbiAgICAgIHRoaXMub3JpZ2luWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMub3JpZ2luWCA6IHg7XG4gICAgICB0aGlzLm9yaWdpblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLm9yaWdpblkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldElucHV0RWxlbWVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldElucHV0RWxlbWVudChlbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBvc2l0aW9uKGVsZW1lbnQsIHgsIHkpIHtcbiAgICAgIHggPSB4LnRvRml4ZWQodGhpcy5wcmVjaXNpb24pICsgJ3B4JztcbiAgICAgIHkgPSB5LnRvRml4ZWQodGhpcy5wcmVjaXNpb24pICsgJ3B4JztcbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCkge1xuICAgICAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywnICsgeSArICcsMCknKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQpIHtcbiAgICAgICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHggKyAnLCcgKyB5ICsgJyknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHg7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0geTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbk9yaWVudGF0aW9uVGltZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk9yaWVudGF0aW9uVGltZXIoKSB7XG4gICAgICBpZiAodGhpcy5vcmllbnRhdGlvblN1cHBvcnQgJiYgdGhpcy5vcmllbnRhdGlvblN0YXR1cyA9PT0gMCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblN1cHBvcnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZG9SZWFkeUNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25Nb3Rpb25UaW1lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW90aW9uVGltZXIoKSB7XG4gICAgICBpZiAodGhpcy5tb3Rpb25TdXBwb3J0ICYmIHRoaXMubW90aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB0aGlzLm1vdGlvblN1cHBvcnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZG9SZWFkeUNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25DYWxpYnJhdGlvblRpbWVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DYWxpYnJhdGlvblRpbWVyKCkge1xuICAgICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uV2luZG93UmVzaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XG4gICAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkFuaW1hdGlvbkZyYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25BbmltYXRpb25GcmFtZSgpIHtcbiAgICAgIHRoaXMudXBkYXRlQm91bmRzKCk7XG4gICAgICB2YXIgY2FsaWJyYXRlZElucHV0WCA9IHRoaXMuaW5wdXRYIC0gdGhpcy5jYWxpYnJhdGlvblgsXG4gICAgICAgICAgY2FsaWJyYXRlZElucHV0WSA9IHRoaXMuaW5wdXRZIC0gdGhpcy5jYWxpYnJhdGlvblk7XG4gICAgICBpZiAoTWF0aC5hYnMoY2FsaWJyYXRlZElucHV0WCkgPiB0aGlzLmNhbGlicmF0aW9uVGhyZXNob2xkIHx8IE1hdGguYWJzKGNhbGlicmF0ZWRJbnB1dFkpID4gdGhpcy5jYWxpYnJhdGlvblRocmVzaG9sZCkge1xuICAgICAgICB0aGlzLnF1ZXVlQ2FsaWJyYXRpb24oMCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb3J0cmFpdCkge1xuICAgICAgICB0aGlzLm1vdGlvblggPSB0aGlzLmNhbGlicmF0ZVggPyBjYWxpYnJhdGVkSW5wdXRZIDogdGhpcy5pbnB1dFk7XG4gICAgICAgIHRoaXMubW90aW9uWSA9IHRoaXMuY2FsaWJyYXRlWSA/IGNhbGlicmF0ZWRJbnB1dFggOiB0aGlzLmlucHV0WDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFggOiB0aGlzLmlucHV0WDtcbiAgICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WSA6IHRoaXMuaW5wdXRZO1xuICAgICAgfVxuICAgICAgdGhpcy5tb3Rpb25YICo9IHRoaXMuZWxlbWVudFdpZHRoICogKHRoaXMuc2NhbGFyWCAvIDEwMCk7XG4gICAgICB0aGlzLm1vdGlvblkgKj0gdGhpcy5lbGVtZW50SGVpZ2h0ICogKHRoaXMuc2NhbGFyWSAvIDEwMCk7XG4gICAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5saW1pdFgpKSkge1xuICAgICAgICB0aGlzLm1vdGlvblggPSBoZWxwZXJzLmNsYW1wKHRoaXMubW90aW9uWCwgLXRoaXMubGltaXRYLCB0aGlzLmxpbWl0WCk7XG4gICAgICB9XG4gICAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5saW1pdFkpKSkge1xuICAgICAgICB0aGlzLm1vdGlvblkgPSBoZWxwZXJzLmNsYW1wKHRoaXMubW90aW9uWSwgLXRoaXMubGltaXRZLCB0aGlzLmxpbWl0WSk7XG4gICAgICB9XG4gICAgICB0aGlzLnZlbG9jaXR5WCArPSAodGhpcy5tb3Rpb25YIC0gdGhpcy52ZWxvY2l0eVgpICogdGhpcy5mcmljdGlvblg7XG4gICAgICB0aGlzLnZlbG9jaXR5WSArPSAodGhpcy5tb3Rpb25ZIC0gdGhpcy52ZWxvY2l0eVkpICogdGhpcy5mcmljdGlvblk7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXJzW2luZGV4XSxcbiAgICAgICAgICAgIGRlcHRoWCA9IHRoaXMuZGVwdGhzWFtpbmRleF0sXG4gICAgICAgICAgICBkZXB0aFkgPSB0aGlzLmRlcHRoc1lbaW5kZXhdLFxuICAgICAgICAgICAgeE9mZnNldCA9IHRoaXMudmVsb2NpdHlYICogKGRlcHRoWCAqICh0aGlzLmludmVydFggPyAtMSA6IDEpKSxcbiAgICAgICAgICAgIHlPZmZzZXQgPSB0aGlzLnZlbG9jaXR5WSAqIChkZXB0aFkgKiAodGhpcy5pbnZlcnRZID8gLTEgOiAxKSk7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24obGF5ZXIsIHhPZmZzZXQsIHlPZmZzZXQpO1xuICAgICAgfVxuICAgICAgdGhpcy5yYWYgPSBycUFuRnIodGhpcy5vbkFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyb3RhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByb3RhdGUoYmV0YSwgZ2FtbWEpIHtcbiAgICAgIC8vIEV4dHJhY3QgUm90YXRpb25cbiAgICAgIHZhciB4ID0gKGJldGEgfHwgMCkgLyBNQUdJQ19OVU1CRVIsXG4gICAgICAgICAgLy8gIC05MCA6OiA5MFxuICAgICAgeSA9IChnYW1tYSB8fCAwKSAvIE1BR0lDX05VTUJFUjsgLy8gLTE4MCA6OiAxODBcblxuICAgICAgLy8gRGV0ZWN0IE9yaWVudGF0aW9uIENoYW5nZVxuICAgICAgdmFyIHBvcnRyYWl0ID0gdGhpcy53aW5kb3dIZWlnaHQgPiB0aGlzLndpbmRvd1dpZHRoO1xuICAgICAgaWYgKHRoaXMucG9ydHJhaXQgIT09IHBvcnRyYWl0KSB7XG4gICAgICAgIHRoaXMucG9ydHJhaXQgPSBwb3J0cmFpdDtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jYWxpYnJhdGlvbkZsYWcpIHtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvblggPSB4O1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uWSA9IHk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5wdXRYID0geDtcbiAgICAgIHRoaXMuaW5wdXRZID0geTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRldmljZU9yaWVudGF0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EZXZpY2VPcmllbnRhdGlvbihldmVudCkge1xuICAgICAgdmFyIGJldGEgPSBldmVudC5iZXRhO1xuICAgICAgdmFyIGdhbW1hID0gZXZlbnQuZ2FtbWE7XG4gICAgICBpZiAoYmV0YSAhPT0gbnVsbCAmJiBnYW1tYSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID0gMTtcbiAgICAgICAgdGhpcy5yb3RhdGUoYmV0YSwgZ2FtbWEpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRGV2aWNlTW90aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EZXZpY2VNb3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBiZXRhID0gZXZlbnQucm90YXRpb25SYXRlLmJldGE7XG4gICAgICB2YXIgZ2FtbWEgPSBldmVudC5yb3RhdGlvblJhdGUuZ2FtbWE7XG4gICAgICBpZiAoYmV0YSAhPT0gbnVsbCAmJiBnYW1tYSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm1vdGlvblN0YXR1cyA9IDE7XG4gICAgICAgIHRoaXMucm90YXRlKGJldGEsIGdhbW1hKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbk1vdXNlTW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICB2YXIgY2xpZW50WCA9IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgIC8vIHJlc2V0IGlucHV0IHRvIGNlbnRlciBpZiBob3Zlck9ubHkgaXMgc2V0IGFuZCB3ZSdyZSBub3QgaG92ZXJpbmcgdGhlIGVsZW1lbnRcbiAgICAgIGlmICh0aGlzLmhvdmVyT25seSAmJiAoY2xpZW50WCA8IHRoaXMuZWxlbWVudFBvc2l0aW9uWCB8fCBjbGllbnRYID4gdGhpcy5lbGVtZW50UG9zaXRpb25YICsgdGhpcy5lbGVtZW50V2lkdGggfHwgY2xpZW50WSA8IHRoaXMuZWxlbWVudFBvc2l0aW9uWSB8fCBjbGllbnRZID4gdGhpcy5lbGVtZW50UG9zaXRpb25ZICsgdGhpcy5lbGVtZW50SGVpZ2h0KSkge1xuICAgICAgICB0aGlzLmlucHV0WCA9IDA7XG4gICAgICAgIHRoaXMuaW5wdXRZID0gMDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5yZWxhdGl2ZUlucHV0KSB7XG4gICAgICAgIC8vIENsaXAgbW91c2UgY29vcmRpbmF0ZXMgaW5zaWRlIGVsZW1lbnQgYm91bmRzLlxuICAgICAgICBpZiAodGhpcy5jbGlwUmVsYXRpdmVJbnB1dCkge1xuICAgICAgICAgIGNsaWVudFggPSBNYXRoLm1heChjbGllbnRYLCB0aGlzLmVsZW1lbnRQb3NpdGlvblgpO1xuICAgICAgICAgIGNsaWVudFggPSBNYXRoLm1pbihjbGllbnRYLCB0aGlzLmVsZW1lbnRQb3NpdGlvblggKyB0aGlzLmVsZW1lbnRXaWR0aCk7XG4gICAgICAgICAgY2xpZW50WSA9IE1hdGgubWF4KGNsaWVudFksIHRoaXMuZWxlbWVudFBvc2l0aW9uWSk7XG4gICAgICAgICAgY2xpZW50WSA9IE1hdGgubWluKGNsaWVudFksIHRoaXMuZWxlbWVudFBvc2l0aW9uWSArIHRoaXMuZWxlbWVudEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FsY3VsYXRlIGlucHV0IHJlbGF0aXZlIHRvIHRoZSBlbGVtZW50LlxuICAgICAgICBpZiAodGhpcy5lbGVtZW50UmFuZ2VYICYmIHRoaXMuZWxlbWVudFJhbmdlWSkge1xuICAgICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLmVsZW1lbnRQb3NpdGlvblggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKSAvIHRoaXMuZWxlbWVudFJhbmdlWDtcbiAgICAgICAgICB0aGlzLmlucHV0WSA9IChjbGllbnRZIC0gdGhpcy5lbGVtZW50UG9zaXRpb25ZIC0gdGhpcy5lbGVtZW50Q2VudGVyWSkgLyB0aGlzLmVsZW1lbnRSYW5nZVk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBpbnB1dCByZWxhdGl2ZSB0byB0aGUgd2luZG93LlxuICAgICAgICBpZiAodGhpcy53aW5kb3dSYWRpdXNYICYmIHRoaXMud2luZG93UmFkaXVzWSkge1xuICAgICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLndpbmRvd0NlbnRlclgpIC8gdGhpcy53aW5kb3dSYWRpdXNYO1xuICAgICAgICAgIHRoaXMuaW5wdXRZID0gKGNsaWVudFkgLSB0aGlzLndpbmRvd0NlbnRlclkpIC8gdGhpcy53aW5kb3dSYWRpdXNZO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVzdHJveScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcblxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcik7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZXRlY3Rpb25UaW1lcik7XG5cbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzW2luZGV4XS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnQ7XG4gICAgICBkZWxldGUgdGhpcy5sYXllcnM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndmVyc2lvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZlcnNpb24oKSB7XG4gICAgICByZXR1cm4gJzMuMS4wJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGFyYWxsYXg7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyYWxsYXg7XG5cbn0se1wib2JqZWN0LWFzc2lnblwiOjEsXCJyYWZcIjo0fV19LHt9LFs1XSkoNSlcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSnViMlJsWDIxdlpIVnNaWE12YjJKcVpXTjBMV0Z6YzJsbmJpOXBibVJsZUM1cWN5SXNJbTV2WkdWZmJXOWtkV3hsY3k5d1pYSm1iM0p0WVc1alpTMXViM2N2YkdsaUwzQmxjbVp2Y20xaGJtTmxMVzV2ZHk1cWN5SXNJbTV2WkdWZmJXOWtkV3hsY3k5d2NtOWpaWE56TDJKeWIzZHpaWEl1YW5NaUxDSnViMlJsWDIxdlpIVnNaWE12Y21GbUwybHVaR1Y0TG1weklpd2ljM0pqTDNCaGNtRnNiR0Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZEUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096dEJRekZHUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096dEJRM0JEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdRVU40VEVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN1FVTjRSVUU3T3pzN096czdPMEZCVVVFc1NVRkJUU3hUUVVGVExGRkJRVkVzUzBGQlVpeERRVUZtTzBGQlEwRXNTVUZCVFN4bFFVRmxMRkZCUVZFc1pVRkJVaXhEUVVGeVFqczdRVUZGUVN4SlFVRk5MRlZCUVZVN1FVRkRaQ3hwUWtGQlpTeEZRVVJFTzBGQlJXUXNWMEZCVXl4RFFVRkRMRWxCUVVRc1JVRkJUeXhEUVVGRExGVkJRVVFzUlVGQldTeFJRVUZhTEVOQlFWQXNSVUZCT0VJc1EwRkJReXhQUVVGRUxFVkJRVk1zUzBGQlZDeERRVUU1UWl4RlFVRXJReXhEUVVGRExFdEJRVVFzUlVGQlR5eEhRVUZRTEVOQlFTOURMRVZCUVRSRUxFTkJRVU1zVFVGQlJDeEZRVUZSTEVsQlFWSXNRMEZCTlVRc1EwRkdTenM3UVVGSlpDeFBRVXBqTEdsQ1FVbFNMRXRCU2xFc1JVRkpSQ3hIUVVwRExFVkJTVWtzUjBGS1NpeEZRVWxUTzBGQlEzSkNMRmRCUVU4c1RVRkJUU3hIUVVGT0xFZEJRMFlzVVVGQlVTeEhRVUZTTEVkQlFXTXNSMEZCWkN4SFFVRnZRaXhSUVVGUkxFZEJRVklzUjBGQll5eEhRVUZrTEVkQlFXOUNMRXRCUkhSRExFZEJSVVlzVVVGQlVTeEhRVUZTTEVkQlFXTXNSMEZCWkN4SFFVRnZRaXhSUVVGUkxFZEJRVklzUjBGQll5eEhRVUZrTEVkQlFXOUNMRXRCUmpkRE8wRkJSMFFzUjBGU1lUdEJRVlZrTEUxQlZtTXNaMEpCVlZRc1QwRldVeXhGUVZWQkxFbEJWa0VzUlVGVlRUdEJRVU5zUWl4WFFVRlBMRkZCUVZFc1YwRkJVaXhEUVVGdlFpeFJRVUZSTEZsQlFWSXNRMEZCY1VJc1ZVRkJVU3hKUVVFM1FpeERRVUZ3UWl4RFFVRlFPMEZCUTBRc1IwRmFZVHRCUVdOa0xHRkJaR01zZFVKQlkwWXNTMEZrUlN4RlFXTkxPMEZCUTJwQ0xGRkJRVWtzVlVGQlZTeE5RVUZrTEVWQlFYTkNPMEZCUTNCQ0xHRkJRVThzU1VGQlVEdEJRVU5FTEV0QlJrUXNUVUZGVHl4SlFVRkpMRlZCUVZVc1QwRkJaQ3hGUVVGMVFqdEJRVU0xUWl4aFFVRlBMRXRCUVZBN1FVRkRSQ3hMUVVaTkxFMUJSVUVzU1VGQlNTeFZRVUZWTEUxQlFXUXNSVUZCYzBJN1FVRkRNMElzWVVGQlR5eEpRVUZRTzBGQlEwUXNTMEZHVFN4TlFVVkJMRWxCUVVrc1EwRkJReXhOUVVGTkxGZEJRVmNzUzBGQldDeERRVUZPTEVOQlFVUXNTVUZCTmtJc1UwRkJVeXhMUVVGVUxFTkJRV3BETEVWQlFXdEVPMEZCUTNaRUxHRkJRVThzVjBGQlZ5eExRVUZZTEVOQlFWQTdRVUZEUkN4TFFVWk5MRTFCUlVFN1FVRkRUQ3hoUVVGUExFdEJRVkE3UVVGRFJEdEJRVU5HTEVkQk1VSmhPMEZCTkVKa0xGZEJOVUpqTEhGQ1FUUkNTaXhMUVRWQ1NTeEZRVFJDUnp0QlFVTm1MRmRCUVU4c1RVRkJUU3hQUVVGT0xFTkJRV01zVTBGQlpDeEZRVUY1UWl4VlFVRkRMRXRCUVVRc1JVRkJVU3hUUVVGU0xFVkJRWE5DTzBGQlEzQkVMR0ZCUVU4c1dVRkJXU3hWUVVGVkxGZEJRVllzUlVGQldpeEhRVUZ6UXl4RlFVRTNRenRCUVVORUxFdEJSazBzUTBGQlVEdEJRVWRFTEVkQmFFTmhPMEZCYTBOa0xGbEJiRU5qTEhOQ1FXdERTQ3hQUVd4RFJ5eEZRV3REVFR0QlFVTnNRaXhaUVVGUkxFZEJRVklzUTBGQldTeFBRVUZhTEVWQlFYRkNMRmRCUVhKQ0xFVkJRV3RETEhORFFVRnNRenRCUVVOQkxGbEJRVkVzUjBGQlVpeERRVUZaTEU5QlFWb3NSVUZCY1VJc2FVSkJRWEpDTEVWQlFYZERMR0ZCUVhoRE8wRkJRMEVzV1VGQlVTeEhRVUZTTEVOQlFWa3NUMEZCV2l4RlFVRnhRaXh4UWtGQmNrSXNSVUZCTkVNc1VVRkJOVU03UVVGRFJDeEhRWFJEWVR0QlFYZERaQ3hyUWtGNFEyTXNORUpCZDBOSExFdEJlRU5JTEVWQmQwTlZPMEZCUTNSQ0xGRkJRVWtzVlVGQlZTeFRRVUZUTEdGQlFWUXNRMEZCZFVJc1MwRkJka0lzUTBGQlpEdEJRVUZCTEZGQlEwa3NhMEpCUVd0Q0xFdEJSSFJDTzBGQlFVRXNVVUZGU1N4blFrRkJaMElzU1VGR2NFSTdRVUZCUVN4UlFVZEpMR2xDUVVGcFFpeExRVWh5UWp0QlFVRkJMRkZCU1Vrc1kwRkJZeXhKUVVwc1FqdEJRVUZCTEZGQlMwa3NZVUZCWVN4SlFVeHFRanRCUVUxQkxGTkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFWSXNSVUZCVnl4SlFVRkpMRkZCUVZFc1QwRkJVaXhEUVVGblFpeE5RVUZ3UXl4RlFVRTBReXhKUVVGSkxFTkJRV2hFTEVWQlFXMUVMRWRCUVc1RUxFVkJRWGRFTzBGQlEzUkVMRlZCUVVrc1VVRkJVU3hQUVVGU0xFTkJRV2RDTEVOQlFXaENMRTFCUVhWQ0xFbEJRVE5DTEVWQlFXbERPMEZCUXk5Q0xITkNRVUZqTEZGQlFWRXNUMEZCVWl4RFFVRm5RaXhEUVVGb1FpeEZRVUZ0UWl4RFFVRnVRaXhKUVVGM1FpeFhRVUYwUXp0QlFVTkJMSEZDUVVGaExGRkJRVkVzVDBGQlVpeERRVUZuUWl4RFFVRm9RaXhGUVVGdFFpeERRVUZ1UWl4SlFVRjNRaXhYUVVGeVF6dEJRVU5FTEU5QlNFUXNUVUZIVHp0QlFVTk1MSE5DUVVGakxGZEJRV1E3UVVGRFFTeHhRa0ZCWVN4WFFVRmlPMEZCUTBRN1FVRkRSQ3hWUVVGSkxGRkJRVkVzUzBGQlVpeERRVUZqTEZWQlFXUXNUVUZCT0VJc1UwRkJiRU1zUlVGQk5rTTdRVUZETTBNc01FSkJRV3RDTEVsQlFXeENPMEZCUTBFN1FVRkRSRHRCUVVOR08wRkJRMFFzV1VGQlR5eExRVUZRTzBGQlEwVXNWMEZCU3l4SlFVRk1PMEZCUTBVc2VVSkJRV2xDTEdWQlFXcENPMEZCUTBFN1FVRkRSaXhYUVVGTExFbEJRVXc3UVVGRFJTeFpRVUZKTEdWQlFVb3NSVUZCY1VJN1FVRkRia0lzWTBGQlNTeFBRVUZQTEZOQlFWTXNTVUZCVkN4SlFVRnBRaXhUUVVGVExHRkJRVlFzUTBGQmRVSXNUVUZCZGtJc1EwRkJOVUk3UVVGQlFTeGpRVU5KTEd0Q1FVRnJRaXhUUVVGVExHVkJSQzlDTzBGQlFVRXNZMEZGU1N4dFFrRkJiVUlzWjBKQlFXZENMRXRCUVdoQ0xFTkJRWE5DTEZGQlJqZERPMEZCUVVFc1kwRkhTU3huUWtGQlowSXNTMEZJY0VJN08wRkJTMEVzWTBGQlNTeERRVUZETEZOQlFWTXNTVUZCWkN4RlFVRnZRanRCUVVOc1FpdzBRa0ZCWjBJc1NVRkJhRUk3UVVGRFFTdzBRa0ZCWjBJc1MwRkJhRUlzUTBGQmMwSXNVVUZCZEVJc1IwRkJhVU1zVVVGQmFrTTdRVUZEUVN3MFFrRkJaMElzVjBGQmFFSXNRMEZCTkVJc1NVRkJOVUk3UVVGRFFTeHBRa0ZCU3l4TFFVRk1MRU5CUVZjc1VVRkJXQ3hIUVVGelFpeFJRVUYwUWp0QlFVTkJMR2xDUVVGTExFdEJRVXdzUTBGQlZ5eFZRVUZZTEVkQlFYZENMRVZCUVhoQ08wRkJRMFE3TzBGQlJVUXNaVUZCU3l4WFFVRk1MRU5CUVdsQ0xFOUJRV3BDTzBGQlEwRXNhMEpCUVZFc1MwRkJVaXhEUVVGakxGVkJRV1FzU1VGQk5FSXNNRUpCUVRWQ08wRkJRMEVzTUVKQlFXZENMRTlCUVU4c1owSkJRVkFzUTBGQmQwSXNUMEZCZUVJc1JVRkJhVU1zWjBKQlFXcERMRU5CUVd0RUxGZEJRV3hFTEVOQlFXaENPMEZCUTBFc01rSkJRV2xDTEd0Q1FVRnJRaXhUUVVGc1FpeEpRVUVyUWl4alFVRmpMRTFCUVdRc1IwRkJkVUlzUTBGQmRFUXNTVUZCTWtRc2EwSkJRV3RDTEUxQlFUbEdPMEZCUTBFc01FSkJRV2RDTEV0QlFXaENMRU5CUVhOQ0xGRkJRWFJDTEVkQlFXbERMR2RDUVVGcVF6dEJRVU5CTEdWQlFVc3NWMEZCVEN4RFFVRnBRaXhQUVVGcVFqczdRVUZGUVN4alFVRkxMR0ZCUVV3c1JVRkJjVUk3UVVGRGJrSXNhVUpCUVVzc1pVRkJUQ3hEUVVGeFFpeFBRVUZ5UWp0QlFVTkJMR2xDUVVGTExGVkJRVXdzUTBGQlowSXNWMEZCYUVJc1EwRkJORUlzU1VGQk5VSTdRVUZEUkR0QlFVTkdPMEZCUTBRN1FVRXZRa283UVVGcFEwRXNWMEZCVHl4alFVRlFPMEZCUTBRc1IwRTVSbUU3UVVGblIyUXNTMEZvUjJNc1pVRm5SMVlzVDBGb1IxVXNSVUZuUjBRc1VVRm9SME1zUlVGblIxTXNTMEZvUjFRc1JVRm5SMmRDTzBGQlF6VkNMRkZCUVVrc1lVRkJZU3hSUVVGUkxHRkJRVklzUTBGQmMwSXNVVUZCZEVJc1EwRkJha0k3UVVGRFFTeFJRVUZKTEVOQlFVTXNWVUZCVEN4RlFVRnBRanRCUVVObUxGZEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFWSXNSVUZCVnl4SlFVRkpMRkZCUVZFc1QwRkJVaXhEUVVGblFpeE5RVUZ3UXl4RlFVRTBReXhKUVVGSkxFTkJRV2hFTEVWQlFXMUVMRWRCUVc1RUxFVkJRWGRFTzBGQlEzUkVMRmxCUVVrc1VVRkJVU3hQUVVGU0xFTkJRV2RDTEVOQlFXaENMRTFCUVhWQ0xFbEJRVE5DTEVWQlFXbERPMEZCUXk5Q0xIVkNRVUZoTEZGQlFWRXNVMEZCVWl4RFFVRnJRaXhSUVVGUkxFOUJRVklzUTBGQlowSXNRMEZCYUVJc1JVRkJiVUlzUTBGQmJrSXNTVUZCZDBJc1IwRkJlRUlzUjBGQk9FSXNVVUZCYUVRc1EwRkJZanRCUVVORUxGTkJSa1FzVFVGRlR6dEJRVU5NTEhWQ1FVRmhMRkZCUVdJN1FVRkRSRHRCUVVORUxGbEJRVWtzVVVGQlVTeExRVUZTTEVOQlFXTXNWVUZCWkN4TlFVRTRRaXhUUVVGc1F5eEZRVUUyUXp0QlFVTXpReXhyUWtGQlVTeGhRVUZTTEVOQlFYTkNMRkZCUVhSQ0xFbEJRV3RETEZWQlFXeERPMEZCUTBFN1FVRkRSRHRCUVVOR08wRkJRMFk3UVVGRFJDeFpRVUZSTEV0QlFWSXNRMEZCWXl4VlFVRmtMRWxCUVRSQ0xFdEJRVFZDTzBGQlEwUTdRVUZvU0dFc1EwRkJhRUk3TzBGQmIwaEJMRWxCUVUwc1pVRkJaU3hGUVVGeVFqdEJRVUZCTEVsQlEwMHNWMEZCVnp0QlFVTlVMR2xDUVVGbExFdEJSRTQ3UVVGRlZDeHhRa0ZCYlVJc1MwRkdWanRCUVVkVUxHZENRVUZqTEVsQlNFdzdRVUZKVkN4aFFVRlhMRXRCU2tZN1FVRkxWQ3gzUWtGQmMwSXNSMEZNWWp0QlFVMVVMRzlDUVVGclFpeEhRVTVVTzBGQlQxUXNaMEpCUVdNc1IwRlFURHRCUVZGVUxHTkJRVmtzUzBGU1NEdEJRVk5VTEdOQlFWa3NTVUZVU0R0QlFWVlVMRmRCUVZNc1NVRldRVHRCUVZkVUxGZEJRVk1zU1VGWVFUdEJRVmxVTEZWQlFWRXNTMEZhUXp0QlFXRlVMRlZCUVZFc1MwRmlRenRCUVdOVUxGZEJRVk1zU1VGa1FUdEJRV1ZVTEZkQlFWTXNTVUZtUVR0QlFXZENWQ3hoUVVGWExFZEJhRUpHTzBGQmFVSlVMR0ZCUVZjc1IwRnFRa1k3UVVGclFsUXNWMEZCVXl4SFFXeENRVHRCUVcxQ1ZDeFhRVUZUTEVkQmJrSkJPMEZCYjBKVUxHbENRVUZsTEV0QmNFSk9PMEZCY1VKVUxHRkJRVmNzUTBGeVFrWTdRVUZ6UWxRc1YwRkJVeXhKUVhSQ1FUdEJRWFZDVkN4WlFVRlZPMEZCZGtKRUxFTkJSR3BDT3p0SlFUSkNUU3hSTzBGQlEwb3NiMEpCUVZrc1QwRkJXaXhGUVVGeFFpeFBRVUZ5UWl4RlFVRTRRanRCUVVGQk96dEJRVVUxUWl4VFFVRkxMRTlCUVV3c1IwRkJaU3hQUVVGbU96dEJRVVZCTEZGQlFVMHNUMEZCVHp0QlFVTllMR3RDUVVGWkxGRkJRVkVzU1VGQlVpeERRVUZoTEV0QlFVc3NUMEZCYkVJc1JVRkJNa0lzWVVGQk0wSXNRMEZFUkR0QlFVVllMR3RDUVVGWkxGRkJRVkVzU1VGQlVpeERRVUZoTEV0QlFVc3NUMEZCYkVJc1JVRkJNa0lzWVVGQk0wSXNRMEZHUkR0QlFVZFlMR1ZCUVZNc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXhWUVVFelFpeERRVWhGTzBGQlNWZ3NaVUZCVXl4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGTExFOUJRV3hDTEVWQlFUSkNMRlZCUVROQ0xFTkJTa1U3UVVGTFdDeGpRVUZSTEZGQlFWRXNTVUZCVWl4RFFVRmhMRXRCUVVzc1QwRkJiRUlzUlVGQk1rSXNVMEZCTTBJc1EwRk1SenRCUVUxWUxHTkJRVkVzVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeFRRVUV6UWl4RFFVNUhPMEZCVDFnc1pVRkJVeXhSUVVGUkxFbEJRVklzUTBGQllTeExRVUZMTEU5QlFXeENMRVZCUVRKQ0xGVkJRVE5DTEVOQlVFVTdRVUZSV0N4bFFVRlRMRkZCUVZFc1NVRkJVaXhEUVVGaExFdEJRVXNzVDBGQmJFSXNSVUZCTWtJc1ZVRkJNMElzUTBGU1JUdEJRVk5ZTEdsQ1FVRlhMRkZCUVZFc1NVRkJVaXhEUVVGaExFdEJRVXNzVDBGQmJFSXNSVUZCTWtJc1dVRkJNMElzUTBGVVFUdEJRVlZZTEdsQ1FVRlhMRkZCUVZFc1NVRkJVaXhEUVVGaExFdEJRVXNzVDBGQmJFSXNSVUZCTWtJc1dVRkJNMElzUTBGV1FUdEJRVmRZTEdWQlFWTXNVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4VlFVRXpRaXhEUVZoRk8wRkJXVmdzWlVGQlV5eFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRkxMRTlCUVd4Q0xFVkJRVEpDTEZWQlFUTkNMRU5CV2tVN1FVRmhXQ3h4UWtGQlpTeFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRkxMRTlCUVd4Q0xFVkJRVEpDTEdkQ1FVRXpRaXhEUVdKS08wRkJZMWdzYVVKQlFWY3NVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4WFFVRXpRaXhEUVdSQk8wRkJaVmdzY1VKQlFXVXNVVUZCVVN4SlFVRlNMRU5CUVdFc1MwRkJTeXhQUVVGc1FpeEZRVUV5UWl4blFrRkJNMElzUTBGbVNqdEJRV2RDV0N4NVFrRkJiVUlzVVVGQlVTeEpRVUZTTEVOQlFXRXNTMEZCU3l4UFFVRnNRaXhGUVVFeVFpeHhRa0ZCTTBJc1EwRm9RbEk3UVVGcFFsZ3NhVUpCUVZjc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXhaUVVFelFpeERRV3BDUVR0QlFXdENXQ3h2UWtGQll5eFRRVUZUTEdGQlFWUXNRMEZCZFVJc1VVRkJVU3hKUVVGU0xFTkJRV0VzUzBGQlN5eFBRVUZzUWl4RlFVRXlRaXhsUVVFelFpeERRVUYyUWl4RFFXeENTRHRCUVcxQ1dDeG5Ra0ZCVlN4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGTExFOUJRV3hDTEVWQlFUSkNMRlZCUVROQ08wRkJia0pETEV0QlFXSTdPMEZCYzBKQkxGTkJRVXNzU1VGQlNTeEhRVUZVTEVsQlFXZENMRWxCUVdoQ0xFVkJRWE5DTzBGQlEzQkNMRlZCUVVrc1MwRkJTeXhIUVVGTUxFMUJRV01zU1VGQmJFSXNSVUZCZDBJN1FVRkRkRUlzWlVGQlR5eExRVUZMTEVkQlFVd3NRMEZCVUR0QlFVTkVPMEZCUTBZN08wRkJSVVFzYVVKQlFXRXNTVUZCWWl4RlFVRnRRaXhSUVVGdVFpeEZRVUUyUWl4SlFVRTNRaXhGUVVGdFF5eFBRVUZ1UXpzN1FVRkZRU3hSUVVGSExFTkJRVU1zUzBGQlN5eFpRVUZVTEVWQlFYVkNPMEZCUTNKQ0xGZEJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMRTlCUVhwQ08wRkJRMFE3TzBGQlJVUXNVMEZCU3l4blFrRkJUQ3hIUVVGM1FpeEpRVUY0UWp0QlFVTkJMRk5CUVVzc1pVRkJUQ3hIUVVGMVFpeEpRVUYyUWp0QlFVTkJMRk5CUVVzc1QwRkJUQ3hIUVVGbExFdEJRV1k3UVVGRFFTeFRRVUZMTEU5QlFVd3NSMEZCWlN4RlFVRm1PMEZCUTBFc1UwRkJTeXhQUVVGTUxFZEJRV1VzUlVGQlpqdEJRVU5CTEZOQlFVc3NSMEZCVEN4SFFVRlhMRWxCUVZnN08wRkJSVUVzVTBGQlN5eE5RVUZNTEVkQlFXTXNTVUZCWkR0QlFVTkJMRk5CUVVzc1owSkJRVXdzUjBGQmQwSXNRMEZCZUVJN1FVRkRRU3hUUVVGTExHZENRVUZNTEVkQlFYZENMRU5CUVhoQ08wRkJRMEVzVTBGQlN5eFpRVUZNTEVkQlFXOUNMRU5CUVhCQ08wRkJRMEVzVTBGQlN5eGhRVUZNTEVkQlFYRkNMRU5CUVhKQ096dEJRVVZCTEZOQlFVc3NZMEZCVEN4SFFVRnpRaXhEUVVGMFFqdEJRVU5CTEZOQlFVc3NZMEZCVEN4SFFVRnpRaXhEUVVGMFFqczdRVUZGUVN4VFFVRkxMR0ZCUVV3c1IwRkJjVUlzUTBGQmNrSTdRVUZEUVN4VFFVRkxMR0ZCUVV3c1IwRkJjVUlzUTBGQmNrSTdPMEZCUlVFc1UwRkJTeXhaUVVGTUxFZEJRVzlDTEVOQlFYQkNPMEZCUTBFc1UwRkJTeXhaUVVGTUxFZEJRVzlDTEVOQlFYQkNPenRCUVVWQkxGTkJRVXNzVFVGQlRDeEhRVUZqTEVOQlFXUTdRVUZEUVN4VFFVRkxMRTFCUVV3c1IwRkJZeXhEUVVGa096dEJRVVZCTEZOQlFVc3NUMEZCVEN4SFFVRmxMRU5CUVdZN1FVRkRRU3hUUVVGTExFOUJRVXdzUjBGQlpTeERRVUZtT3p0QlFVVkJMRk5CUVVzc1UwRkJUQ3hIUVVGcFFpeERRVUZxUWp0QlFVTkJMRk5CUVVzc1UwRkJUQ3hIUVVGcFFpeERRVUZxUWpzN1FVRkZRU3hUUVVGTExGZEJRVXdzUjBGQmJVSXNTMEZCU3l4WFFVRk1MRU5CUVdsQ0xFbEJRV3BDTEVOQlFYTkNMRWxCUVhSQ0xFTkJRVzVDTzBGQlEwRXNVMEZCU3l4dFFrRkJUQ3hIUVVFeVFpeExRVUZMTEcxQ1FVRk1MRU5CUVhsQ0xFbEJRWHBDTEVOQlFUaENMRWxCUVRsQ0xFTkJRVE5DTzBGQlEwRXNVMEZCU3l4alFVRk1MRWRCUVhOQ0xFdEJRVXNzWTBGQlRDeERRVUZ2UWl4SlFVRndRaXhEUVVGNVFpeEpRVUY2UWl4RFFVRjBRanRCUVVOQkxGTkJRVXNzYTBKQlFVd3NSMEZCTUVJc1MwRkJTeXhyUWtGQlRDeERRVUYzUWl4SlFVRjRRaXhEUVVFMlFpeEpRVUUzUWl4RFFVRXhRanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4TFFVRkxMR0ZCUVV3c1EwRkJiVUlzU1VGQmJrSXNRMEZCZDBJc1NVRkJlRUlzUTBGQmNrSTdRVUZEUVN4VFFVRkxMR3RDUVVGTUxFZEJRVEJDTEV0QlFVc3NhMEpCUVV3c1EwRkJkMElzU1VGQmVFSXNRMEZCTmtJc1NVRkJOMElzUTBGQk1VSTdRVUZEUVN4VFFVRkxMR2RDUVVGTUxFZEJRWGRDTEV0QlFVc3NaMEpCUVV3c1EwRkJjMElzU1VGQmRFSXNRMEZCTWtJc1NVRkJNMElzUTBGQmVFSTdRVUZEUVN4VFFVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eGpRVUZNTEVOQlFXOUNMRWxCUVhCQ0xFTkJRWGxDTEVsQlFYcENMRU5CUVhSQ096dEJRVVZCTEZOQlFVc3NWMEZCVEN4SFFVRnRRaXhKUVVGdVFqdEJRVU5CTEZOQlFVc3NXVUZCVEN4SFFVRnZRaXhKUVVGd1FqdEJRVU5CTEZOQlFVc3NZVUZCVEN4SFFVRnhRaXhKUVVGeVFqdEJRVU5CTEZOQlFVc3NZVUZCVEN4SFFVRnhRaXhKUVVGeVFqdEJRVU5CTEZOQlFVc3NZVUZCVEN4SFFVRnhRaXhKUVVGeVFqdEJRVU5CTEZOQlFVc3NZVUZCVEN4SFFVRnhRaXhKUVVGeVFqdEJRVU5CTEZOQlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGb1FqdEJRVU5CTEZOQlFVc3NUMEZCVEN4SFFVRmxMRU5CUVVNc1ZVRkJWU3hUUVVGV0xFTkJRVzlDTEV0QlFYQkNMRU5CUVRCQ0xEUkZRVUV4UWl4RFFVRm9RanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4RFFVRkRMRU5CUVVNc1QwRkJUeXhwUWtGQlZDeEpRVUU0UWl4RFFVRkRMRXRCUVVzc1QwRkJla1E3UVVGRFFTeFRRVUZMTEd0Q1FVRk1MRWRCUVRCQ0xFTkJRVU1zUTBGQlF5eFBRVUZQTEhOQ1FVRlVMRWxCUVcxRExFTkJRVU1zUzBGQlN5eFBRVUZ1UlR0QlFVTkJMRk5CUVVzc2FVSkJRVXdzUjBGQmVVSXNRMEZCZWtJN1FVRkRRU3hUUVVGTExGbEJRVXdzUjBGQmIwSXNRMEZCY0VJN08wRkJSVUVzVTBGQlN5eFZRVUZNTzBGQlEwUTdPenM3YVVOQlJWazdRVUZEV0N4VlFVRkpMRXRCUVVzc2EwSkJRVXdzUzBGQk5FSXNVMEZCYUVNc1JVRkJNa003UVVGRGVrTXNZVUZCU3l4clFrRkJUQ3hIUVVFd1FpeFJRVUZSTEdkQ1FVRlNMRU5CUVhsQ0xFbEJRWHBDTEVOQlFURkNPMEZCUTBFc1lVRkJTeXhyUWtGQlRDeEhRVUV3UWl4UlFVRlJMR2RDUVVGU0xFTkJRWGxDTEVsQlFYcENMRU5CUVRGQ08wRkJRMFE3TzBGQlJVUTdRVUZEUVN4VlFVRkpMRXRCUVVzc2EwSkJRVlFzUlVGQk5rSTdRVUZETTBJc1owSkJRVkVzVlVGQlVpeERRVUZ0UWl4TFFVRkxMRTlCUVhoQ08wRkJRMFE3TzBGQlJVUXNWVUZCU1N4UlFVRlJMRTlCUVU4c1owSkJRVkFzUTBGQmQwSXNTMEZCU3l4UFFVRTNRaXhEUVVGYU8wRkJRMEVzVlVGQlNTeE5RVUZOTEdkQ1FVRk9MRU5CUVhWQ0xGVkJRWFpDTEUxQlFYVkRMRkZCUVRORExFVkJRWEZFTzBGQlEyNUVMR0ZCUVVzc1QwRkJUQ3hEUVVGaExFdEJRV0lzUTBGQmJVSXNVVUZCYmtJc1IwRkJPRUlzVlVGQk9VSTdRVUZEUkRzN1FVRkZSRHRCUVVOQkxGVkJRVWNzUTBGQlF5eExRVUZMTEdGQlFWUXNSVUZCZDBJN1FVRkRkRUlzWVVGQlN5eFBRVUZNTEVOQlFXRXNTMEZCWWl4RFFVRnRRaXhoUVVGdVFpeEhRVUZ0UXl4TlFVRnVRenRCUVVORU96dEJRVVZFTzBGQlEwRXNWMEZCU3l4WlFVRk1PMEZCUTBFc1YwRkJTeXhuUWtGQlREdEJRVU5CTEZkQlFVc3NUVUZCVER0QlFVTkJMRmRCUVVzc1owSkJRVXdzUTBGQmMwSXNTMEZCU3l4blFrRkJNMEk3UVVGRFJEczdPM05EUVVWcFFqdEJRVU5vUWl4VlFVRkhMRXRCUVVzc1QwRkJVaXhGUVVGcFFqdEJRVU5tTEdGQlFVc3NUMEZCVER0QlFVTkVPMEZCUTBZN096dHRRMEZGWXp0QlFVTmlMRlZCUVVjc1MwRkJTeXhSUVVGU0xFVkJRV3RDTzBGQlEyaENMR0ZCUVVzc1RVRkJUQ3hIUVVGakxFdEJRVXNzVDBGQlRDeERRVUZoTEdkQ1FVRmlMRU5CUVRoQ0xFdEJRVXNzVVVGQmJrTXNRMEZCWkR0QlFVTkVMRTlCUmtRc1RVRkZUenRCUVVOTUxHRkJRVXNzVFVGQlRDeEhRVUZqTEV0QlFVc3NUMEZCVEN4RFFVRmhMRkZCUVROQ08wRkJRMFE3TzBGQlJVUXNWVUZCUnl4RFFVRkRMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFMUJRV2hDTEVWQlFYZENPMEZCUTNSQ0xHZENRVUZSTEVsQlFWSXNRMEZCWVN4clJFRkJZanRCUVVORU96dEJRVVZFTEZkQlFVc3NUMEZCVEN4SFFVRmxMRVZCUVdZN1FVRkRRU3hYUVVGTExFOUJRVXdzUjBGQlpTeEZRVUZtT3p0QlFVVkJMRmRCUVVzc1NVRkJTU3hSUVVGUkxFTkJRV3BDTEVWQlFXOUNMRkZCUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzVFVGQmVFTXNSVUZCWjBRc1QwRkJhRVFzUlVGQmVVUTdRVUZEZGtRc1dVRkJTU3hSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEV0QlFWb3NRMEZCV2pzN1FVRkZRU3haUVVGSkxFdEJRVXNzYTBKQlFWUXNSVUZCTmtJN1FVRkRNMElzYTBKQlFWRXNWVUZCVWl4RFFVRnRRaXhMUVVGdVFqdEJRVU5FT3p0QlFVVkVMR05CUVUwc1MwRkJUaXhEUVVGWkxGRkJRVm9zUjBGQmRVSXNVVUZCVVN4VlFVRlNMRWRCUVhGQ0xGVkJRVFZETzBGQlEwRXNZMEZCVFN4TFFVRk9MRU5CUVZrc1QwRkJXaXhIUVVGelFpeFBRVUYwUWp0QlFVTkJMR05CUVUwc1MwRkJUaXhEUVVGWkxFbEJRVm9zUjBGQmJVSXNRMEZCYmtJN1FVRkRRU3hqUVVGTkxFdEJRVTRzUTBGQldTeEhRVUZhTEVkQlFXdENMRU5CUVd4Q096dEJRVVZCTEZsQlFVa3NVVUZCVVN4UlFVRlJMRWxCUVZJc1EwRkJZU3hMUVVGaUxFVkJRVzlDTEU5QlFYQkNMRXRCUVdkRExFTkJRVFZETzBGQlEwRXNZVUZCU3l4UFFVRk1MRU5CUVdFc1NVRkJZaXhEUVVGclFpeFJRVUZSTEVsQlFWSXNRMEZCWVN4TFFVRmlMRVZCUVc5Q0xGTkJRWEJDTEV0QlFXdERMRXRCUVhCRU8wRkJRMEVzWVVGQlN5eFBRVUZNTEVOQlFXRXNTVUZCWWl4RFFVRnJRaXhSUVVGUkxFbEJRVklzUTBGQllTeExRVUZpTEVWQlFXOUNMRk5CUVhCQ0xFdEJRV3RETEV0QlFYQkVPMEZCUTBRN1FVRkRSanM3TzNWRFFVVnJRanRCUVVOcVFpeFhRVUZMTEZkQlFVd3NSMEZCYlVJc1QwRkJUeXhWUVVFeFFqdEJRVU5CTEZkQlFVc3NXVUZCVEN4SFFVRnZRaXhQUVVGUExGZEJRVE5DTzBGQlEwRXNWMEZCU3l4aFFVRk1MRWRCUVhGQ0xFdEJRVXNzVjBGQlRDeEhRVUZ0UWl4TFFVRkxMRTlCUVRkRE8wRkJRMEVzVjBGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEU5QlFUbERPMEZCUTBFc1YwRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVVzc1lVRkJaQ3hGUVVFMlFpeExRVUZMTEZkQlFVd3NSMEZCYlVJc1MwRkJTeXhoUVVGeVJDeERRVUZ5UWp0QlFVTkJMRmRCUVVzc1lVRkJUQ3hIUVVGeFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRkxMR0ZCUVdRc1JVRkJOa0lzUzBGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1lVRkJkRVFzUTBGQmNrSTdRVUZEUkRzN08yMURRVVZqTzBGQlEySXNWMEZCU3l4TlFVRk1MRWRCUVdNc1MwRkJTeXhaUVVGTUxFTkJRV3RDTEhGQ1FVRnNRaXhGUVVGa08wRkJRMEVzVjBGQlN5eG5Ra0ZCVEN4SFFVRjNRaXhMUVVGTExFMUJRVXdzUTBGQldTeEpRVUZ3UXp0QlFVTkJMRmRCUVVzc1owSkJRVXdzUjBGQmQwSXNTMEZCU3l4TlFVRk1MRU5CUVZrc1IwRkJjRU03UVVGRFFTeFhRVUZMTEZsQlFVd3NSMEZCYjBJc1MwRkJTeXhOUVVGTUxFTkJRVmtzUzBGQmFFTTdRVUZEUVN4WFFVRkxMR0ZCUVV3c1IwRkJjVUlzUzBGQlN5eE5RVUZNTEVOQlFWa3NUVUZCYWtNN1FVRkRRU3hYUVVGTExHTkJRVXdzUjBGQmMwSXNTMEZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzVDBGQkwwTTdRVUZEUVN4WFFVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1QwRkJhRVE3UVVGRFFTeFhRVUZMTEdGQlFVd3NSMEZCY1VJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlN5eGpRVUZrTEVWQlFUaENMRXRCUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEdOQlFYWkVMRU5CUVhKQ08wRkJRMEVzVjBGQlN5eGhRVUZNTEVkQlFYRkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVXNzWTBGQlpDeEZRVUU0UWl4TFFVRkxMR0ZCUVV3c1IwRkJjVUlzUzBGQlN5eGpRVUY0UkN4RFFVRnlRanRCUVVORU96czdjVU5CUldkQ0xFc3NSVUZCVHp0QlFVTjBRaXh0UWtGQllTeExRVUZMTEdkQ1FVRnNRanRCUVVOQkxGZEJRVXNzWjBKQlFVd3NSMEZCZDBJc1YwRkJWeXhMUVVGTExHdENRVUZvUWl4RlFVRnZReXhMUVVGd1F5eERRVUY0UWp0QlFVTkVPenM3TmtKQlJWRTdRVUZEVUN4VlFVRkpMRXRCUVVzc1QwRkJWQ3hGUVVGclFqdEJRVU5vUWp0QlFVTkVPMEZCUTBRc1YwRkJTeXhQUVVGTUxFZEJRV1VzU1VGQlpqczdRVUZGUVN4VlFVRkpMRXRCUVVzc2EwSkJRVlFzUlVGQk5rSTdRVUZETTBJc1lVRkJTeXhSUVVGTUxFZEJRV2RDTEV0QlFXaENPMEZCUTBFc1pVRkJUeXhuUWtGQlVDeERRVUYzUWl4dFFrRkJlRUlzUlVGQk5rTXNTMEZCU3l4dFFrRkJiRVE3UVVGRFFTeGhRVUZMTEdOQlFVd3NSMEZCYzBJc1YwRkJWeXhMUVVGTExHdENRVUZvUWl4RlFVRnZReXhMUVVGTExGbEJRWHBETEVOQlFYUkNPMEZCUTBRc1QwRktSQ3hOUVVsUExFbEJRVWtzUzBGQlN5eGhRVUZVTEVWQlFYZENPMEZCUXpkQ0xHRkJRVXNzVVVGQlRDeEhRVUZuUWl4TFFVRm9RanRCUVVOQkxHVkJRVThzWjBKQlFWQXNRMEZCZDBJc1kwRkJlRUlzUlVGQmQwTXNTMEZCU3l4alFVRTNRenRCUVVOQkxHRkJRVXNzWTBGQlRDeEhRVUZ6UWl4WFFVRlhMRXRCUVVzc1lVRkJhRUlzUlVGQkswSXNTMEZCU3l4WlFVRndReXhEUVVGMFFqdEJRVU5FTEU5QlNrMHNUVUZKUVR0QlFVTk1MR0ZCUVVzc1dVRkJUQ3hIUVVGdlFpeERRVUZ3UWp0QlFVTkJMR0ZCUVVzc1dVRkJUQ3hIUVVGdlFpeERRVUZ3UWp0QlFVTkJMR0ZCUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZvUWp0QlFVTkJMR1ZCUVU4c1owSkJRVkFzUTBGQmQwSXNWMEZCZUVJc1JVRkJjVU1zUzBGQlN5eFhRVUV4UXp0QlFVTkJMR0ZCUVVzc1pVRkJURHRCUVVORU96dEJRVVZFTEdGQlFVOHNaMEpCUVZBc1EwRkJkMElzVVVGQmVFSXNSVUZCYTBNc1MwRkJTeXhqUVVGMlF6dEJRVU5CTEZkQlFVc3NSMEZCVEN4SFFVRlhMRTlCUVU4c1MwRkJTeXhuUWtGQldpeERRVUZZTzBGQlEwUTdPenM0UWtGRlV6dEJRVU5TTEZWQlFVa3NRMEZCUXl4TFFVRkxMRTlCUVZZc1JVRkJiVUk3UVVGRGFrSTdRVUZEUkR0QlFVTkVMRmRCUVVzc1QwRkJUQ3hIUVVGbExFdEJRV1k3TzBGQlJVRXNWVUZCU1N4TFFVRkxMR3RDUVVGVUxFVkJRVFpDTzBGQlF6TkNMR1ZCUVU4c2JVSkJRVkFzUTBGQk1rSXNiVUpCUVROQ0xFVkJRV2RFTEV0QlFVc3NiVUpCUVhKRU8wRkJRMFFzVDBGR1JDeE5RVVZQTEVsQlFVa3NTMEZCU3l4aFFVRlVMRVZCUVhkQ08wRkJRemRDTEdWQlFVOHNiVUpCUVZBc1EwRkJNa0lzWTBGQk0wSXNSVUZCTWtNc1MwRkJTeXhqUVVGb1JEdEJRVU5FTEU5QlJrMHNUVUZGUVR0QlFVTk1MR1ZCUVU4c2JVSkJRVkFzUTBGQk1rSXNWMEZCTTBJc1JVRkJkME1zUzBGQlN5eFhRVUUzUXp0QlFVTkVPenRCUVVWRUxHRkJRVThzYlVKQlFWQXNRMEZCTWtJc1VVRkJNMElzUlVGQmNVTXNTMEZCU3l4alFVRXhRenRCUVVOQkxHRkJRVThzVFVGQlVDeERRVUZqTEV0QlFVc3NSMEZCYmtJN1FVRkRSRHM3T3poQ1FVVlRMRU1zUlVGQlJ5eERMRVZCUVVjN1FVRkRaQ3hYUVVGTExGVkJRVXdzUjBGQmEwSXNUVUZCVFN4VFFVRk9MRWRCUVd0Q0xFdEJRVXNzVlVGQmRrSXNSMEZCYjBNc1EwRkJkRVE3UVVGRFFTeFhRVUZMTEZWQlFVd3NSMEZCYTBJc1RVRkJUU3hUUVVGT0xFZEJRV3RDTEV0QlFVc3NWVUZCZGtJc1IwRkJiME1zUTBGQmRFUTdRVUZEUkRzN096SkNRVVZOTEVNc1JVRkJSeXhETEVWQlFVYzdRVUZEV0N4WFFVRkxMRTlCUVV3c1IwRkJaU3hOUVVGTkxGTkJRVTRzUjBGQmEwSXNTMEZCU3l4UFFVRjJRaXhIUVVGcFF5eERRVUZvUkR0QlFVTkJMRmRCUVVzc1QwRkJUQ3hIUVVGbExFMUJRVTBzVTBGQlRpeEhRVUZyUWl4TFFVRkxMRTlCUVhaQ0xFZEJRV2xETEVOQlFXaEVPMEZCUTBRN096czJRa0ZGVVN4RExFVkJRVWNzUXl4RlFVRkhPMEZCUTJJc1YwRkJTeXhUUVVGTUxFZEJRV2xDTEUxQlFVMHNVMEZCVGl4SFFVRnJRaXhMUVVGTExGTkJRWFpDTEVkQlFXMURMRU5CUVhCRU8wRkJRMEVzVjBGQlN5eFRRVUZNTEVkQlFXbENMRTFCUVUwc1UwRkJUaXhIUVVGclFpeExRVUZMTEZOQlFYWkNMRWRCUVcxRExFTkJRWEJFTzBGQlEwUTdPenN5UWtGRlRTeERMRVZCUVVjc1F5eEZRVUZITzBGQlExZ3NWMEZCU3l4UFFVRk1MRWRCUVdVc1RVRkJUU3hUUVVGT0xFZEJRV3RDTEV0QlFVc3NUMEZCZGtJc1IwRkJhVU1zUTBGQmFFUTdRVUZEUVN4WFFVRkxMRTlCUVV3c1IwRkJaU3hOUVVGTkxGTkJRVTRzUjBGQmEwSXNTMEZCU3l4UFFVRjJRaXhIUVVGcFF5eERRVUZvUkR0QlFVTkVPenM3TUVKQlJVc3NReXhGUVVGSExFTXNSVUZCUnp0QlFVTldMRmRCUVVzc1RVRkJUQ3hIUVVGakxFMUJRVTBzVTBGQlRpeEhRVUZyUWl4TFFVRkxMRTFCUVhaQ0xFZEJRV2RETEVOQlFUbERPMEZCUTBFc1YwRkJTeXhOUVVGTUxFZEJRV01zVFVGQlRTeFRRVUZPTEVkQlFXdENMRXRCUVVzc1RVRkJka0lzUjBGQlowTXNRMEZCT1VNN1FVRkRSRHM3T3pKQ1FVVk5MRU1zUlVGQlJ5eERMRVZCUVVjN1FVRkRXQ3hYUVVGTExFOUJRVXdzUjBGQlpTeE5RVUZOTEZOQlFVNHNSMEZCYTBJc1MwRkJTeXhQUVVGMlFpeEhRVUZwUXl4RFFVRm9SRHRCUVVOQkxGZEJRVXNzVDBGQlRDeEhRVUZsTEUxQlFVMHNVMEZCVGl4SFFVRnJRaXhMUVVGTExFOUJRWFpDTEVkQlFXbERMRU5CUVdoRU8wRkJRMFE3T3p0dlEwRkZaU3hQTEVWQlFWTTdRVUZEZGtJc1YwRkJTeXhaUVVGTUxFZEJRVzlDTEU5QlFYQkNPMEZCUTBFc1YwRkJTeXhuUWtGQlREdEJRVU5FT3pzN1owTkJSVmNzVHl4RlFVRlRMRU1zUlVGQlJ5eERMRVZCUVVjN1FVRkRla0lzVlVGQlNTeEZRVUZGTEU5QlFVWXNRMEZCVlN4TFFVRkxMRk5CUVdZc1NVRkJORUlzU1VGQmFFTTdRVUZEUVN4VlFVRkpMRVZCUVVVc1QwRkJSaXhEUVVGVkxFdEJRVXNzVTBGQlppeEpRVUUwUWl4SlFVRm9RenRCUVVOQkxGVkJRVWtzUzBGQlN5eHJRa0ZCVkN4RlFVRTJRanRCUVVNelFpeG5Ra0ZCVVN4SFFVRlNMRU5CUVZrc1QwRkJXaXhGUVVGeFFpeFhRVUZ5UWl4RlFVRnJReXhwUWtGQmFVSXNRMEZCYWtJc1IwRkJjVUlzUjBGQmNrSXNSMEZCTWtJc1EwRkJNMElzUjBGQkswSXNTMEZCYWtVN1FVRkRSQ3hQUVVaRUxFMUJSVThzU1VGQlNTeExRVUZMTEd0Q1FVRlVMRVZCUVRaQ08wRkJRMnhETEdkQ1FVRlJMRWRCUVZJc1EwRkJXU3hQUVVGYUxFVkJRWEZDTEZkQlFYSkNMRVZCUVd0RExHVkJRV1VzUTBGQlppeEhRVUZ0UWl4SFFVRnVRaXhIUVVGNVFpeERRVUY2UWl4SFFVRTJRaXhIUVVFdlJEdEJRVU5FTEU5QlJrMHNUVUZGUVR0QlFVTk1MR2RDUVVGUkxFdEJRVklzUTBGQll5eEpRVUZrTEVkQlFYRkNMRU5CUVhKQ08wRkJRMEVzWjBKQlFWRXNTMEZCVWl4RFFVRmpMRWRCUVdRc1IwRkJiMElzUTBGQmNFSTdRVUZEUkR0QlFVTkdPenM3ZVVOQlJXOUNPMEZCUTI1Q0xGVkJRVWtzUzBGQlN5eHJRa0ZCVEN4SlFVRXlRaXhMUVVGTExHbENRVUZNTEV0QlFUSkNMRU5CUVRGRUxFVkJRVFpFTzBGQlF6TkVMR0ZCUVVzc1QwRkJURHRCUVVOQkxHRkJRVXNzYTBKQlFVd3NSMEZCTUVJc1MwRkJNVUk3UVVGRFFTeGhRVUZMTEUxQlFVdzdRVUZEUkN4UFFVcEVMRTFCU1U4N1FVRkRUQ3hoUVVGTExHVkJRVXc3UVVGRFJEdEJRVU5HT3pzN2IwTkJSV1U3UVVGRFpDeFZRVUZKTEV0QlFVc3NZVUZCVEN4SlFVRnpRaXhMUVVGTExGbEJRVXdzUzBGQmMwSXNRMEZCYUVRc1JVRkJiVVE3UVVGRGFrUXNZVUZCU3l4UFFVRk1PMEZCUTBFc1lVRkJTeXhoUVVGTUxFZEJRWEZDTEV0QlFYSkNPMEZCUTBFc1lVRkJTeXhOUVVGTU8wRkJRMFFzVDBGS1JDeE5RVWxQTzBGQlEwd3NZVUZCU3l4bFFVRk1PMEZCUTBRN1FVRkRSanM3TzNsRFFVVnZRanRCUVVOdVFpeFhRVUZMTEdWQlFVd3NSMEZCZFVJc1NVRkJka0k3UVVGRFJEczdPM0ZEUVVWblFqdEJRVU5tTEZkQlFVc3NaMEpCUVV3N1FVRkRSRHM3TzNWRFFVVnJRanRCUVVOcVFpeFhRVUZMTEZsQlFVdzdRVUZEUVN4VlFVRkpMRzFDUVVGdFFpeExRVUZMTEUxQlFVd3NSMEZCWXl4TFFVRkxMRmxCUVRGRE8wRkJRVUVzVlVGRFNTeHRRa0ZCYlVJc1MwRkJTeXhOUVVGTUxFZEJRV01zUzBGQlN5eFpRVVF4UXp0QlFVVkJMRlZCUVVzc1MwRkJTeXhIUVVGTUxFTkJRVk1zWjBKQlFWUXNTVUZCTmtJc1MwRkJTeXh2UWtGQmJrTXNTVUZCTmtRc1MwRkJTeXhIUVVGTUxFTkJRVk1zWjBKQlFWUXNTVUZCTmtJc1MwRkJTeXh2UWtGQmJrY3NSVUZCTUVnN1FVRkRlRWdzWVVGQlN5eG5Ra0ZCVEN4RFFVRnpRaXhEUVVGMFFqdEJRVU5FTzBGQlEwUXNWVUZCU1N4TFFVRkxMRkZCUVZRc1JVRkJiVUk3UVVGRGFrSXNZVUZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhWUVVGTUxFZEJRV3RDTEdkQ1FVRnNRaXhIUVVGeFF5eExRVUZMTEUxQlFYcEVPMEZCUTBFc1lVRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eFZRVUZNTEVkQlFXdENMR2RDUVVGc1FpeEhRVUZ4UXl4TFFVRkxMRTFCUVhwRU8wRkJRMFFzVDBGSVJDeE5RVWRQTzBGQlEwd3NZVUZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhWUVVGTUxFZEJRV3RDTEdkQ1FVRnNRaXhIUVVGeFF5eExRVUZMTEUxQlFYcEVPMEZCUTBFc1lVRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eFZRVUZNTEVkQlFXdENMR2RDUVVGc1FpeEhRVUZ4UXl4TFFVRkxMRTFCUVhwRU8wRkJRMFE3UVVGRFJDeFhRVUZMTEU5QlFVd3NTVUZCWjBJc1MwRkJTeXhaUVVGTUxFbEJRWEZDTEV0QlFVc3NUMEZCVEN4SFFVRmxMRWRCUVhCRExFTkJRV2hDTzBGQlEwRXNWMEZCU3l4UFFVRk1MRWxCUVdkQ0xFdEJRVXNzWVVGQlRDeEpRVUZ6UWl4TFFVRkxMRTlCUVV3c1IwRkJaU3hIUVVGeVF5eERRVUZvUWp0QlFVTkJMRlZCUVVrc1EwRkJReXhOUVVGTkxGZEJRVmNzUzBGQlN5eE5RVUZvUWl4RFFVRk9MRU5CUVV3c1JVRkJjVU03UVVGRGJrTXNZVUZCU3l4UFFVRk1MRWRCUVdVc1VVRkJVU3hMUVVGU0xFTkJRV01zUzBGQlN5eFBRVUZ1UWl4RlFVRTBRaXhEUVVGRExFdEJRVXNzVFVGQmJFTXNSVUZCTUVNc1MwRkJTeXhOUVVFdlF5eERRVUZtTzBGQlEwUTdRVUZEUkN4VlFVRkpMRU5CUVVNc1RVRkJUU3hYUVVGWExFdEJRVXNzVFVGQmFFSXNRMEZCVGl4RFFVRk1MRVZCUVhGRE8wRkJRMjVETEdGQlFVc3NUMEZCVEN4SFFVRmxMRkZCUVZFc1MwRkJVaXhEUVVGakxFdEJRVXNzVDBGQmJrSXNSVUZCTkVJc1EwRkJReXhMUVVGTExFMUJRV3hETEVWQlFUQkRMRXRCUVVzc1RVRkJMME1zUTBGQlpqdEJRVU5FTzBGQlEwUXNWMEZCU3l4VFFVRk1MRWxCUVd0Q0xFTkJRVU1zUzBGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4VFFVRnlRaXhKUVVGclF5eExRVUZMTEZOQlFYcEVPMEZCUTBFc1YwRkJTeXhUUVVGTUxFbEJRV3RDTEVOQlFVTXNTMEZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhUUVVGeVFpeEpRVUZyUXl4TFFVRkxMRk5CUVhwRU8wRkJRMEVzVjBGQlN5eEpRVUZKTEZGQlFWRXNRMEZCYWtJc1JVRkJiMElzVVVGQlVTeExRVUZMTEUxQlFVd3NRMEZCV1N4TlFVRjRReXhGUVVGblJDeFBRVUZvUkN4RlFVRjVSRHRCUVVOMlJDeFpRVUZKTEZGQlFWRXNTMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJXaXhEUVVGYU8wRkJRVUVzV1VGRFNTeFRRVUZUTEV0QlFVc3NUMEZCVEN4RFFVRmhMRXRCUVdJc1EwRkVZanRCUVVGQkxGbEJSVWtzVTBGQlV5eExRVUZMTEU5QlFVd3NRMEZCWVN4TFFVRmlMRU5CUm1JN1FVRkJRU3haUVVkSkxGVkJRVlVzUzBGQlN5eFRRVUZNTEVsQlFXdENMRlZCUVZVc1MwRkJTeXhQUVVGTUxFZEJRV1VzUTBGQlF5eERRVUZvUWl4SFFVRnZRaXhEUVVFNVFpeERRVUZzUWl4RFFVaGtPMEZCUVVFc1dVRkpTU3hWUVVGVkxFdEJRVXNzVTBGQlRDeEpRVUZyUWl4VlFVRlZMRXRCUVVzc1QwRkJUQ3hIUVVGbExFTkJRVU1zUTBGQmFFSXNSMEZCYjBJc1EwRkJPVUlzUTBGQmJFSXNRMEZLWkR0QlFVdEJMR0ZCUVVzc1YwRkJUQ3hEUVVGcFFpeExRVUZxUWl4RlFVRjNRaXhQUVVGNFFpeEZRVUZwUXl4UFFVRnFRenRCUVVORU8wRkJRMFFzVjBGQlN5eEhRVUZNTEVkQlFWY3NUMEZCVHl4TFFVRkxMR2RDUVVGYUxFTkJRVmc3UVVGRFJEczdPekpDUVVWTkxFa3NSVUZCVFN4TExFVkJRVTA3UVVGRGFrSTdRVUZEUVN4VlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVlFzU1VGQll5eFpRVUYwUWp0QlFVRkJMRlZCUVc5RE8wRkJRMmhETEZWQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVZZc1NVRkJaU3haUVVSMlFpeERRVVpwUWl4RFFVZHRRanM3UVVGRmNFTTdRVUZEUVN4VlFVRkpMRmRCUVZjc1MwRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NWMEZCZUVNN1FVRkRRU3hWUVVGSkxFdEJRVXNzVVVGQlRDeExRVUZyUWl4UlFVRjBRaXhGUVVGblF6dEJRVU01UWl4aFFVRkxMRkZCUVV3c1IwRkJaMElzVVVGQmFFSTdRVUZEUVN4aFFVRkxMR1ZCUVV3c1IwRkJkVUlzU1VGQmRrSTdRVUZEUkRzN1FVRkZSQ3hWUVVGSkxFdEJRVXNzWlVGQlZDeEZRVUV3UWp0QlFVTjRRaXhoUVVGTExHVkJRVXdzUjBGQmRVSXNTMEZCZGtJN1FVRkRRU3hoUVVGTExGbEJRVXdzUjBGQmIwSXNRMEZCY0VJN1FVRkRRU3hoUVVGTExGbEJRVXdzUjBGQmIwSXNRMEZCY0VJN1FVRkRSRHM3UVVGRlJDeFhRVUZMTEUxQlFVd3NSMEZCWXl4RFFVRmtPMEZCUTBFc1YwRkJTeXhOUVVGTUxFZEJRV01zUTBGQlpEdEJRVU5FT3pzN2QwTkJSVzFDTEVzc1JVRkJUenRCUVVONlFpeFZRVUZKTEU5QlFVOHNUVUZCVFN4SlFVRnFRanRCUVVOQkxGVkJRVWtzVVVGQlVTeE5RVUZOTEV0QlFXeENPMEZCUTBFc1ZVRkJTU3hUUVVGVExFbEJRVlFzU1VGQmFVSXNWVUZCVlN4SlFVRXZRaXhGUVVGeFF6dEJRVU51UXl4aFFVRkxMR2xDUVVGTUxFZEJRWGxDTEVOQlFYcENPMEZCUTBFc1lVRkJTeXhOUVVGTUxFTkJRVmtzU1VGQldpeEZRVUZyUWl4TFFVRnNRanRCUVVORU8wRkJRMFk3T3p0dFEwRkZZeXhMTEVWQlFVODdRVUZEY0VJc1ZVRkJTU3hQUVVGUExFMUJRVTBzV1VGQlRpeERRVUZ0UWl4SlFVRTVRanRCUVVOQkxGVkJRVWtzVVVGQlVTeE5RVUZOTEZsQlFVNHNRMEZCYlVJc1MwRkJMMEk3UVVGRFFTeFZRVUZKTEZOQlFWTXNTVUZCVkN4SlFVRnBRaXhWUVVGVkxFbEJRUzlDTEVWQlFYRkRPMEZCUTI1RExHRkJRVXNzV1VGQlRDeEhRVUZ2UWl4RFFVRndRanRCUVVOQkxHRkJRVXNzVFVGQlRDeERRVUZaTEVsQlFWb3NSVUZCYTBJc1MwRkJiRUk3UVVGRFJEdEJRVU5HT3pzN1owTkJSVmNzU3l4RlFVRlBPMEZCUTJwQ0xGVkJRVWtzVlVGQlZTeE5RVUZOTEU5QlFYQkNPMEZCUVVFc1ZVRkRTU3hWUVVGVkxFMUJRVTBzVDBGRWNFSTdPMEZCUjBFN1FVRkRRU3hWUVVGSExFdEJRVXNzVTBGQlRDeExRVU5ETEZWQlFWVXNTMEZCU3l4blFrRkJaaXhKUVVGdFF5eFZRVUZWTEV0QlFVc3NaMEpCUVV3c1IwRkJkMElzUzBGQlN5eFpRVUV6UlN4SlFVTkJMRlZCUVZVc1MwRkJTeXhuUWtGQlppeEpRVUZ0UXl4VlFVRlZMRXRCUVVzc1owSkJRVXdzUjBGQmQwSXNTMEZCU3l4aFFVWXhSU3hEUVVGSUxFVkJSVGhHTzBGQlF6RkdMR0ZCUVVzc1RVRkJUQ3hIUVVGakxFTkJRV1E3UVVGRFFTeGhRVUZMTEUxQlFVd3NSMEZCWXl4RFFVRmtPMEZCUTBFN1FVRkRSRHM3UVVGRlNDeFZRVUZKTEV0QlFVc3NZVUZCVkN4RlFVRjNRanRCUVVOMFFqdEJRVU5CTEZsQlFVa3NTMEZCU3l4cFFrRkJWQ3hGUVVFMFFqdEJRVU14UWl4dlFrRkJWU3hMUVVGTExFZEJRVXdzUTBGQlV5eFBRVUZVTEVWQlFXdENMRXRCUVVzc1owSkJRWFpDTEVOQlFWWTdRVUZEUVN4dlFrRkJWU3hMUVVGTExFZEJRVXdzUTBGQlV5eFBRVUZVTEVWQlFXdENMRXRCUVVzc1owSkJRVXdzUjBGQmQwSXNTMEZCU3l4WlFVRXZReXhEUVVGV08wRkJRMEVzYjBKQlFWVXNTMEZCU3l4SFFVRk1MRU5CUVZNc1QwRkJWQ3hGUVVGclFpeExRVUZMTEdkQ1FVRjJRaXhEUVVGV08wRkJRMEVzYjBKQlFWVXNTMEZCU3l4SFFVRk1MRU5CUVZNc1QwRkJWQ3hGUVVGclFpeExRVUZMTEdkQ1FVRk1MRWRCUVhkQ0xFdEJRVXNzWVVGQkwwTXNRMEZCVmp0QlFVTkVPMEZCUTBRN1FVRkRRU3haUVVGSExFdEJRVXNzWVVGQlRDeEpRVUZ6UWl4TFFVRkxMR0ZCUVRsQ0xFVkJRVFpETzBGQlF6TkRMR1ZCUVVzc1RVRkJUQ3hIUVVGakxFTkJRVU1zVlVGQlZTeExRVUZMTEdkQ1FVRm1MRWRCUVd0RExFdEJRVXNzWTBGQmVFTXNTVUZCTUVRc1MwRkJTeXhoUVVFM1JUdEJRVU5CTEdWQlFVc3NUVUZCVEN4SFFVRmpMRU5CUVVNc1ZVRkJWU3hMUVVGTExHZENRVUZtTEVkQlFXdERMRXRCUVVzc1kwRkJlRU1zU1VGQk1FUXNTMEZCU3l4aFFVRTNSVHRCUVVORU8wRkJRMFlzVDBGaVJDeE5RV0ZQTzBGQlEwdzdRVUZEUVN4WlFVRkhMRXRCUVVzc1lVRkJUQ3hKUVVGelFpeExRVUZMTEdGQlFUbENMRVZCUVRaRE8wRkJRek5ETEdWQlFVc3NUVUZCVEN4SFFVRmpMRU5CUVVNc1ZVRkJWU3hMUVVGTExHRkJRV2hDTEVsQlFXbERMRXRCUVVzc1lVRkJjRVE3UVVGRFFTeGxRVUZMTEUxQlFVd3NSMEZCWXl4RFFVRkRMRlZCUVZVc1MwRkJTeXhoUVVGb1FpeEpRVUZwUXl4TFFVRkxMR0ZCUVhCRU8wRkJRMFE3UVVGRFJqdEJRVU5HT3pzN09FSkJSVk03UVVGRFVpeFhRVUZMTEU5QlFVdzdPMEZCUlVFc2JVSkJRV0VzUzBGQlN5eG5Ra0ZCYkVJN1FVRkRRU3h0UWtGQllTeExRVUZMTEdOQlFXeENPenRCUVVWQkxGZEJRVXNzVDBGQlRDeERRVUZoTEdWQlFXSXNRMEZCTmtJc1QwRkJOMEk3UVVGRFFTeFhRVUZMTEVsQlFVa3NVVUZCVVN4RFFVRnFRaXhGUVVGdlFpeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRTFCUVhoRExFVkJRV2RFTEU5QlFXaEVMRVZCUVhsRU8wRkJRM1pFTEdGQlFVc3NUVUZCVEN4RFFVRlpMRXRCUVZvc1JVRkJiVUlzWlVGQmJrSXNRMEZCYlVNc1QwRkJia003UVVGRFJEczdRVUZGUkN4aFFVRlBMRXRCUVVzc1QwRkJXanRCUVVOQkxHRkJRVThzUzBGQlN5eE5RVUZhTzBGQlEwUTdPenM0UWtGRlV6dEJRVU5TTEdGQlFVOHNUMEZCVUR0QlFVTkVPenM3T3pzN1FVRkpTQ3hQUVVGUExFOUJRVkFzUjBGQmFVSXNVVUZCYWtJaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaUJsS0hRc2JpeHlLWHRtZFc1amRHbHZiaUJ6S0c4c2RTbDdhV1lvSVc1YmIxMHBlMmxtS0NGMFcyOWRLWHQyWVhJZ1lUMTBlWEJsYjJZZ2NtVnhkV2x5WlQwOVhDSm1kVzVqZEdsdmJsd2lKaVp5WlhGMWFYSmxPMmxtS0NGMUppWmhLWEpsZEhWeWJpQmhLRzhzSVRBcE8ybG1LR2twY21WMGRYSnVJR2tvYnl3aE1DazdkbUZ5SUdZOWJtVjNJRVZ5Y205eUtGd2lRMkZ1Ym05MElHWnBibVFnYlc5a2RXeGxJQ2RjSWl0dksxd2lKMXdpS1R0MGFISnZkeUJtTG1OdlpHVTlYQ0pOVDBSVlRFVmZUazlVWDBaUFZVNUVYQ0lzWm4xMllYSWdiRDF1VzI5ZFBYdGxlSEJ2Y25Sek9udDlmVHQwVzI5ZFd6QmRMbU5oYkd3b2JDNWxlSEJ2Y25SekxHWjFibU4wYVc5dUtHVXBlM1poY2lCdVBYUmJiMTFiTVYxYlpWMDdjbVYwZFhKdUlITW9iajl1T21VcGZTeHNMR3d1Wlhod2IzSjBjeXhsTEhRc2JpeHlLWDF5WlhSMWNtNGdibHR2WFM1bGVIQnZjblJ6ZlhaaGNpQnBQWFI1Y0dWdlppQnlaWEYxYVhKbFBUMWNJbVoxYm1OMGFXOXVYQ0ltSm5KbGNYVnBjbVU3Wm05eUtIWmhjaUJ2UFRBN2J6eHlMbXhsYm1kMGFEdHZLeXNwY3loeVcyOWRLVHR5WlhSMWNtNGdjMzBwSWl3aUx5cGNibTlpYW1WamRDMWhjM05wWjI1Y2JpaGpLU0JUYVc1a2NtVWdVMjl5YUhWelhHNUFiR2xqWlc1elpTQk5TVlJjYmlvdlhHNWNiaWQxYzJVZ2MzUnlhV04wSnp0Y2JpOHFJR1Z6YkdsdWRDMWthWE5oWW14bElHNXZMWFZ1ZFhObFpDMTJZWEp6SUNvdlhHNTJZWElnWjJWMFQzZHVVSEp2Y0dWeWRIbFRlVzFpYjJ4eklEMGdUMkpxWldOMExtZGxkRTkzYmxCeWIzQmxjblI1VTNsdFltOXNjenRjYm5aaGNpQm9ZWE5QZDI1UWNtOXdaWEowZVNBOUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGs3WEc1MllYSWdjSEp2Y0VselJXNTFiV1Z5WVdKc1pTQTlJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVjSEp2Y0dWeWRIbEpjMFZ1ZFcxbGNtRmliR1U3WEc1Y2JtWjFibU4wYVc5dUlIUnZUMkpxWldOMEtIWmhiQ2tnZTF4dVhIUnBaaUFvZG1Gc0lEMDlQU0J1ZFd4c0lIeDhJSFpoYkNBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc1Y2RGeDBkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduVDJKcVpXTjBMbUZ6YzJsbmJpQmpZVzV1YjNRZ1ltVWdZMkZzYkdWa0lIZHBkR2dnYm5Wc2JDQnZjaUIxYm1SbFptbHVaV1FuS1R0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCUFltcGxZM1FvZG1Gc0tUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2MyaHZkV3hrVlhObFRtRjBhWFpsS0NrZ2UxeHVYSFIwY25rZ2UxeHVYSFJjZEdsbUlDZ2hUMkpxWldOMExtRnpjMmxuYmlrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUdaaGJITmxPMXh1WEhSY2RIMWNibHh1WEhSY2RDOHZJRVJsZEdWamRDQmlkV2RuZVNCd2NtOXdaWEowZVNCbGJuVnRaWEpoZEdsdmJpQnZjbVJsY2lCcGJpQnZiR1JsY2lCV09DQjJaWEp6YVc5dWN5NWNibHh1WEhSY2RDOHZJR2gwZEhCek9pOHZZblZuY3k1amFISnZiV2wxYlM1dmNtY3ZjQzkyT0M5cGMzTjFaWE12WkdWMFlXbHNQMmxrUFRReE1UaGNibHgwWEhSMllYSWdkR1Z6ZERFZ1BTQnVaWGNnVTNSeWFXNW5LQ2RoWW1NbktUc2dJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMV3hwYm1VZ2JtOHRibVYzTFhkeVlYQndaWEp6WEc1Y2RGeDBkR1Z6ZERGYk5WMGdQU0FuWkdVbk8xeHVYSFJjZEdsbUlDaFBZbXBsWTNRdVoyVjBUM2R1VUhKdmNHVnlkSGxPWVcxbGN5aDBaWE4wTVNsYk1GMGdQVDA5SUNjMUp5a2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHWmhiSE5sTzF4dVhIUmNkSDFjYmx4dVhIUmNkQzh2SUdoMGRIQnpPaTh2WW5WbmN5NWphSEp2YldsMWJTNXZjbWN2Y0M5Mk9DOXBjM04xWlhNdlpHVjBZV2xzUDJsa1BUTXdOVFpjYmx4MFhIUjJZWElnZEdWemRESWdQU0I3ZlR0Y2JseDBYSFJtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SURFd095QnBLeXNwSUh0Y2JseDBYSFJjZEhSbGMzUXlXeWRmSnlBcklGTjBjbWx1Wnk1bWNtOXRRMmhoY2tOdlpHVW9hU2xkSUQwZ2FUdGNibHgwWEhSOVhHNWNkRngwZG1GeUlHOXlaR1Z5TWlBOUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVTVoYldWektIUmxjM1F5S1M1dFlYQW9ablZ1WTNScGIyNGdLRzRwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUIwWlhOME1sdHVYVHRjYmx4MFhIUjlLVHRjYmx4MFhIUnBaaUFvYjNKa1pYSXlMbXB2YVc0b0p5Y3BJQ0U5UFNBbk1ERXlNelExTmpjNE9TY3BJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQm1ZV3h6WlR0Y2JseDBYSFI5WEc1Y2JseDBYSFF2THlCb2RIUndjem92TDJKMVozTXVZMmh5YjIxcGRXMHViM0puTDNBdmRqZ3ZhWE56ZFdWekwyUmxkR0ZwYkQ5cFpEMHpNRFUyWEc1Y2RGeDBkbUZ5SUhSbGMzUXpJRDBnZTMwN1hHNWNkRngwSjJGaVkyUmxabWRvYVdwcmJHMXViM0J4Y25OMEp5NXpjR3hwZENnbkp5a3VabTl5UldGamFDaG1kVzVqZEdsdmJpQW9iR1YwZEdWeUtTQjdYRzVjZEZ4MFhIUjBaWE4wTTF0c1pYUjBaWEpkSUQwZ2JHVjBkR1Z5TzF4dVhIUmNkSDBwTzF4dVhIUmNkR2xtSUNoUFltcGxZM1F1YTJWNWN5aFBZbXBsWTNRdVlYTnphV2R1S0h0OUxDQjBaWE4wTXlrcExtcHZhVzRvSnljcElDRTlQVnh1WEhSY2RGeDBYSFFuWVdKalpHVm1aMmhwYW10c2JXNXZjSEZ5YzNRbktTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z1ptRnNjMlU3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbVYwZFhKdUlIUnlkV1U3WEc1Y2RIMGdZMkYwWTJnZ0tHVnljaWtnZTF4dVhIUmNkQzh2SUZkbElHUnZiaWQwSUdWNGNHVmpkQ0JoYm5rZ2IyWWdkR2hsSUdGaWIzWmxJSFJ2SUhSb2NtOTNMQ0JpZFhRZ1ltVjBkR1Z5SUhSdklHSmxJSE5oWm1VdVhHNWNkRngwY21WMGRYSnVJR1poYkhObE8xeHVYSFI5WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdjMmh2ZFd4a1ZYTmxUbUYwYVhabEtDa2dQeUJQWW1wbFkzUXVZWE56YVdkdUlEb2dablZ1WTNScGIyNGdLSFJoY21kbGRDd2djMjkxY21ObEtTQjdYRzVjZEhaaGNpQm1jbTl0TzF4dVhIUjJZWElnZEc4Z1BTQjBiMDlpYW1WamRDaDBZWEpuWlhRcE8xeHVYSFIyWVhJZ2MzbHRZbTlzY3p0Y2JseHVYSFJtYjNJZ0tIWmhjaUJ6SUQwZ01Uc2djeUE4SUdGeVozVnRaVzUwY3k1c1pXNW5kR2c3SUhNckt5a2dlMXh1WEhSY2RHWnliMjBnUFNCUFltcGxZM1FvWVhKbmRXMWxiblJ6VzNOZEtUdGNibHh1WEhSY2RHWnZjaUFvZG1GeUlHdGxlU0JwYmlCbWNtOXRLU0I3WEc1Y2RGeDBYSFJwWmlBb2FHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaG1jbTl0TENCclpYa3BLU0I3WEc1Y2RGeDBYSFJjZEhSdlcydGxlVjBnUFNCbWNtOXRXMnRsZVYwN1hHNWNkRngwWEhSOVhHNWNkRngwZlZ4dVhHNWNkRngwYVdZZ0tHZGxkRTkzYmxCeWIzQmxjblI1VTNsdFltOXNjeWtnZTF4dVhIUmNkRngwYzNsdFltOXNjeUE5SUdkbGRFOTNibEJ5YjNCbGNuUjVVM2x0WW05c2N5aG1jbTl0S1R0Y2JseDBYSFJjZEdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2MzbHRZbTlzY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1WEhSY2RGeDBYSFJwWmlBb2NISnZjRWx6Ulc1MWJXVnlZV0pzWlM1allXeHNLR1p5YjIwc0lITjViV0p2YkhOYmFWMHBLU0I3WEc1Y2RGeDBYSFJjZEZ4MGRHOWJjM2x0WW05c2MxdHBYVjBnUFNCbWNtOXRXM041YldKdmJITmJhVjFkTzF4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSOVhHNWNkRngwZlZ4dVhIUjlYRzVjYmx4MGNtVjBkWEp1SUhSdk8xeHVmVHRjYmlJc0lpOHZJRWRsYm1WeVlYUmxaQ0JpZVNCRGIyWm1aV1ZUWTNKcGNIUWdNUzR4TWk0eVhHNG9ablZ1WTNScGIyNG9LU0I3WEc0Z0lIWmhjaUJuWlhST1lXNXZVMlZqYjI1a2N5d2dhSEowYVcxbExDQnNiMkZrVkdsdFpTd2diVzlrZFd4bFRHOWhaRlJwYldVc0lHNXZaR1ZNYjJGa1ZHbHRaU3dnZFhCVWFXMWxPMXh1WEc0Z0lHbG1JQ2dvZEhsd1pXOW1JSEJsY21admNtMWhibU5sSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUNZbUlIQmxjbVp2Y20xaGJtTmxJQ0U5UFNCdWRXeHNLU0FtSmlCd1pYSm1iM0p0WVc1alpTNXViM2NwSUh0Y2JpQWdJQ0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSEJsY21admNtMWhibU5sTG01dmR5Z3BPMXh1SUNBZ0lIMDdYRzRnSUgwZ1pXeHpaU0JwWmlBb0tIUjVjR1Z2WmlCd2NtOWpaWE56SUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUNZbUlIQnliMk5sYzNNZ0lUMDlJRzUxYkd3cElDWW1JSEJ5YjJObGMzTXVhSEowYVcxbEtTQjdYRzRnSUNBZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlBb1oyVjBUbUZ1YjFObFkyOXVaSE1vS1NBdElHNXZaR1ZNYjJGa1ZHbHRaU2tnTHlBeFpUWTdYRzRnSUNBZ2ZUdGNiaUFnSUNCb2NuUnBiV1VnUFNCd2NtOWpaWE56TG1oeWRHbHRaVHRjYmlBZ0lDQm5aWFJPWVc1dlUyVmpiMjVrY3lBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdkbUZ5SUdoeU8xeHVJQ0FnSUNBZ2FISWdQU0JvY25ScGJXVW9LVHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm9jbHN3WFNBcUlERmxPU0FySUdoeVd6RmRPMXh1SUNBZ0lIMDdYRzRnSUNBZ2JXOWtkV3hsVEc5aFpGUnBiV1VnUFNCblpYUk9ZVzV2VTJWamIyNWtjeWdwTzF4dUlDQWdJSFZ3VkdsdFpTQTlJSEJ5YjJObGMzTXVkWEIwYVcxbEtDa2dLaUF4WlRrN1hHNGdJQ0FnYm05a1pVeHZZV1JVYVcxbElEMGdiVzlrZFd4bFRHOWhaRlJwYldVZ0xTQjFjRlJwYldVN1hHNGdJSDBnWld4elpTQnBaaUFvUkdGMFpTNXViM2NwSUh0Y2JpQWdJQ0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRVJoZEdVdWJtOTNLQ2tnTFNCc2IyRmtWR2x0WlR0Y2JpQWdJQ0I5TzF4dUlDQWdJR3h2WVdSVWFXMWxJRDBnUkdGMFpTNXViM2NvS1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUc1bGR5QkVZWFJsS0NrdVoyVjBWR2x0WlNncElDMGdiRzloWkZScGJXVTdYRzRnSUNBZ2ZUdGNiaUFnSUNCc2IyRmtWR2x0WlNBOUlHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BPMXh1SUNCOVhHNWNibjBwTG1OaGJHd29kR2hwY3lrN1hHNWNiaTh2SXlCemIzVnlZMlZOWVhCd2FXNW5WVkpNUFhCbGNtWnZjbTFoYm1ObExXNXZkeTVxY3k1dFlYQmNiaUlzSWk4dklITm9hVzBnWm05eUlIVnphVzVuSUhCeWIyTmxjM01nYVc0Z1luSnZkM05sY2x4dWRtRnlJSEJ5YjJObGMzTWdQU0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHQ5TzF4dVhHNHZMeUJqWVdOb1pXUWdabkp2YlNCM2FHRjBaWFpsY2lCbmJHOWlZV3dnYVhNZ2NISmxjMlZ1ZENCemJ5QjBhR0YwSUhSbGMzUWdjblZ1Ym1WeWN5QjBhR0YwSUhOMGRXSWdhWFJjYmk4dklHUnZiaWQwSUdKeVpXRnJJSFJvYVc1bmN5NGdJRUoxZENCM1pTQnVaV1ZrSUhSdklIZHlZWEFnYVhRZ2FXNGdZU0IwY25rZ1kyRjBZMmdnYVc0Z1kyRnpaU0JwZENCcGMxeHVMeThnZDNKaGNIQmxaQ0JwYmlCemRISnBZM1FnYlc5a1pTQmpiMlJsSUhkb2FXTm9JR1J2WlhOdUozUWdaR1ZtYVc1bElHRnVlU0JuYkc5aVlXeHpMaUFnU1hRbmN5QnBibk5wWkdVZ1lWeHVMeThnWm5WdVkzUnBiMjRnWW1WallYVnpaU0IwY25rdlkyRjBZMmhsY3lCa1pXOXdkR2x0YVhwbElHbHVJR05sY25SaGFXNGdaVzVuYVc1bGN5NWNibHh1ZG1GeUlHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRN1hHNTJZWElnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwTzF4dVhHNW1kVzVqZEdsdmJpQmtaV1poZFd4MFUyVjBWR2x0YjNWMEtDa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnbmMyVjBWR2x0Wlc5MWRDQm9ZWE1nYm05MElHSmxaVzRnWkdWbWFXNWxaQ2NwTzF4dWZWeHVablZ1WTNScGIyNGdaR1ZtWVhWc2RFTnNaV0Z5VkdsdFpXOTFkQ0FvS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RqYkdWaGNsUnBiV1Z2ZFhRZ2FHRnpJRzV2ZENCaVpXVnVJR1JsWm1sdVpXUW5LVHRjYm4xY2JpaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQnpaWFJVYVcxbGIzVjBJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwZ2MyVjBWR2x0Wlc5MWREdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFNCa1pXWmhkV3gwVTJWMFZHbHRiM1YwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlNCallYUmphQ0FvWlNrZ2UxeHVJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdaR1ZtWVhWc2RGTmxkRlJwYlc5MWREdGNiaUFnSUNCOVhHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJqYkdWaGNsUnBiV1Z2ZFhRZ1BUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5SUdOc1pXRnlWR2x0Wlc5MWREdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHUmxabUYxYkhSRGJHVmhjbFJwYldWdmRYUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHUmxabUYxYkhSRGJHVmhjbFJwYldWdmRYUTdYRzRnSUNBZ2ZWeHVmU0FvS1NsY2JtWjFibU4wYVc5dUlISjFibFJwYldWdmRYUW9ablZ1S1NCN1hHNGdJQ0FnYVdZZ0tHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BUMDlJSE5sZEZScGJXVnZkWFFwSUh0Y2JpQWdJQ0FnSUNBZ0x5OXViM0p0WVd3Z1pXNTJhWEp2YldWdWRITWdhVzRnYzJGdVpTQnphWFIxWVhScGIyNXpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpaWFJVYVcxbGIzVjBLR1oxYml3Z01DazdYRzRnSUNBZ2ZWeHVJQ0FnSUM4dklHbG1JSE5sZEZScGJXVnZkWFFnZDJGemJpZDBJR0YyWVdsc1lXSnNaU0JpZFhRZ2QyRnpJR3hoZEhSbGNpQmtaV1pwYm1Wa1hHNGdJQ0FnYVdZZ0tDaGpZV05vWldSVFpYUlVhVzFsYjNWMElEMDlQU0JrWldaaGRXeDBVMlYwVkdsdGIzVjBJSHg4SUNGallXTm9aV1JUWlhSVWFXMWxiM1YwS1NBbUppQnpaWFJVYVcxbGIzVjBLU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFNCelpYUlVhVzFsYjNWME8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MyVjBWR2x0Wlc5MWRDaG1kVzRzSURBcE8xeHVJQ0FnSUgxY2JpQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQXZMeUIzYUdWdUlIZG9aVzRnYzI5dFpXSnZaSGtnYUdGeklITmpjbVYzWldRZ2QybDBhQ0J6WlhSVWFXMWxiM1YwSUdKMWRDQnVieUJKTGtVdUlHMWhaR1J1WlhOelhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JUWlhSVWFXMWxiM1YwS0daMWJpd2dNQ2s3WEc0Z0lDQWdmU0JqWVhSamFDaGxLWHRjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGZG9aVzRnZDJVZ1lYSmxJR2x1SUVrdVJTNGdZblYwSUhSb1pTQnpZM0pwY0hRZ2FHRnpJR0psWlc0Z1pYWmhiR1ZrSUhOdklFa3VSUzRnWkc5bGMyNG5kQ0IwY25WemRDQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQjNhR1Z1SUdOaGJHeGxaQ0J1YjNKdFlXeHNlVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRk5sZEZScGJXVnZkWFF1WTJGc2JDaHVkV3hzTENCbWRXNHNJREFwTzF4dUlDQWdJQ0FnSUNCOUlHTmhkR05vS0dVcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2MyRnRaU0JoY3lCaFltOTJaU0JpZFhRZ2QyaGxiaUJwZENkeklHRWdkbVZ5YzJsdmJpQnZaaUJKTGtVdUlIUm9ZWFFnYlhWemRDQm9ZWFpsSUhSb1pTQm5iRzlpWVd3Z2IySnFaV04wSUdadmNpQW5kR2hwY3ljc0lHaHZjR1oxYkd4NUlHOTFjaUJqYjI1MFpYaDBJR052Y25KbFkzUWdiM1JvWlhKM2FYTmxJR2wwSUhkcGJHd2dkR2h5YjNjZ1lTQm5iRzlpWVd3Z1pYSnliM0pjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JUWlhSVWFXMWxiM1YwTG1OaGJHd29kR2hwY3l3Z1puVnVMQ0F3S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVYRzU5WEc1bWRXNWpkR2x2YmlCeWRXNURiR1ZoY2xScGJXVnZkWFFvYldGeWEyVnlLU0I3WEc0Z0lDQWdhV1lnS0dOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOVBUMGdZMnhsWVhKVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lDOHZibTl5YldGc0lHVnVkbWx5YjIxbGJuUnpJR2x1SUhOaGJtVWdjMmwwZFdGMGFXOXVjMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMnhsWVhKVWFXMWxiM1YwS0cxaGNtdGxjaWs3WEc0Z0lDQWdmVnh1SUNBZ0lDOHZJR2xtSUdOc1pXRnlWR2x0Wlc5MWRDQjNZWE51SjNRZ1lYWmhhV3hoWW14bElHSjFkQ0IzWVhNZ2JHRjBkR1Z5SUdSbFptbHVaV1JjYmlBZ0lDQnBaaUFvS0dOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOVBUMGdaR1ZtWVhWc2RFTnNaV0Z5VkdsdFpXOTFkQ0I4ZkNBaFkyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMEtTQW1KaUJqYkdWaGNsUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBJRDBnWTJ4bFlYSlVhVzFsYjNWME8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyeGxZWEpVYVcxbGIzVjBLRzFoY210bGNpazdYRzRnSUNBZ2ZWeHVJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJQzh2SUhkb1pXNGdkMmhsYmlCemIyMWxZbTlrZVNCb1lYTWdjMk55WlhkbFpDQjNhWFJvSUhObGRGUnBiV1Z2ZFhRZ1luVjBJRzV2SUVrdVJTNGdiV0ZrWkc1bGMzTmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDaHRZWEpyWlhJcE8xeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcGUxeHVJQ0FnSUNBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVjJobGJpQjNaU0JoY21VZ2FXNGdTUzVGTGlCaWRYUWdkR2hsSUhOamNtbHdkQ0JvWVhNZ1ltVmxiaUJsZG1Gc1pXUWdjMjhnU1M1RkxpQmtiMlZ6YmlkMElDQjBjblZ6ZENCMGFHVWdaMnh2WW1Gc0lHOWlhbVZqZENCM2FHVnVJR05oYkd4bFpDQnViM0p0WVd4c2VWeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQzVqWVd4c0tHNTFiR3dzSUcxaGNtdGxjaWs3WEc0Z0lDQWdJQ0FnSUgwZ1kyRjBZMmdnS0dVcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2MyRnRaU0JoY3lCaFltOTJaU0JpZFhRZ2QyaGxiaUJwZENkeklHRWdkbVZ5YzJsdmJpQnZaaUJKTGtVdUlIUm9ZWFFnYlhWemRDQm9ZWFpsSUhSb1pTQm5iRzlpWVd3Z2IySnFaV04wSUdadmNpQW5kR2hwY3ljc0lHaHZjR1oxYkd4NUlHOTFjaUJqYjI1MFpYaDBJR052Y25KbFkzUWdiM1JvWlhKM2FYTmxJR2wwSUhkcGJHd2dkR2h5YjNjZ1lTQm5iRzlpWVd3Z1pYSnliM0l1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJUYjIxbElIWmxjbk5wYjI1eklHOW1JRWt1UlM0Z2FHRjJaU0JrYVdabVpYSmxiblFnY25Wc1pYTWdabTl5SUdOc1pXRnlWR2x0Wlc5MWRDQjJjeUJ6WlhSVWFXMWxiM1YwWEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMExtTmhiR3dvZEdocGN5d2diV0Z5YTJWeUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1WEc1Y2JuMWNiblpoY2lCeGRXVjFaU0E5SUZ0ZE8xeHVkbUZ5SUdSeVlXbHVhVzVuSUQwZ1ptRnNjMlU3WEc1MllYSWdZM1Z5Y21WdWRGRjFaWFZsTzF4dWRtRnlJSEYxWlhWbFNXNWtaWGdnUFNBdE1UdGNibHh1Wm5WdVkzUnBiMjRnWTJ4bFlXNVZjRTVsZUhSVWFXTnJLQ2tnZTF4dUlDQWdJR2xtSUNnaFpISmhhVzVwYm1jZ2ZId2dJV04xY25KbGJuUlJkV1YxWlNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnZlZ4dUlDQWdJR1J5WVdsdWFXNW5JRDBnWm1Gc2MyVTdYRzRnSUNBZ2FXWWdLR04xY25KbGJuUlJkV1YxWlM1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ2NYVmxkV1VnUFNCamRYSnlaVzUwVVhWbGRXVXVZMjl1WTJGMEtIRjFaWFZsS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J4ZFdWMVpVbHVaR1Y0SUQwZ0xURTdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaHhkV1YxWlM1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ1pISmhhVzVSZFdWMVpTZ3BPMXh1SUNBZ0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1pISmhhVzVSZFdWMVpTZ3BJSHRjYmlBZ0lDQnBaaUFvWkhKaGFXNXBibWNwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmlBZ0lDQjJZWElnZEdsdFpXOTFkQ0E5SUhKMWJsUnBiV1Z2ZFhRb1kyeGxZVzVWY0U1bGVIUlVhV05yS1R0Y2JpQWdJQ0JrY21GcGJtbHVaeUE5SUhSeWRXVTdYRzVjYmlBZ0lDQjJZWElnYkdWdUlEMGdjWFZsZFdVdWJHVnVaM1JvTzF4dUlDQWdJSGRvYVd4bEtHeGxiaWtnZTF4dUlDQWdJQ0FnSUNCamRYSnlaVzUwVVhWbGRXVWdQU0J4ZFdWMVpUdGNiaUFnSUNBZ0lDQWdjWFZsZFdVZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnZDJocGJHVWdLQ3NyY1hWbGRXVkpibVJsZUNBOElHeGxiaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOMWNuSmxiblJSZFdWMVpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUlJkV1YxWlZ0eGRXVjFaVWx1WkdWNFhTNXlkVzRvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeGRXVjFaVWx1WkdWNElEMGdMVEU3WEc0Z0lDQWdJQ0FnSUd4bGJpQTlJSEYxWlhWbExteGxibWQwYUR0Y2JpQWdJQ0I5WEc0Z0lDQWdZM1Z5Y21WdWRGRjFaWFZsSUQwZ2JuVnNiRHRjYmlBZ0lDQmtjbUZwYm1sdVp5QTlJR1poYkhObE8xeHVJQ0FnSUhKMWJrTnNaV0Z5VkdsdFpXOTFkQ2gwYVcxbGIzVjBLVHRjYm4xY2JseHVjSEp2WTJWemN5NXVaWGgwVkdsamF5QTlJR1oxYm1OMGFXOXVJQ2htZFc0cElIdGNiaUFnSUNCMllYSWdZWEpuY3lBOUlHNWxkeUJCY25KaGVTaGhjbWQxYldWdWRITXViR1Z1WjNSb0lDMGdNU2s3WEc0Z0lDQWdhV1lnS0dGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBeEtTQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBeE95QnBJRHdnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaGNtZHpXMmtnTFNBeFhTQTlJR0Z5WjNWdFpXNTBjMXRwWFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0J4ZFdWMVpTNXdkWE5vS0c1bGR5QkpkR1Z0S0daMWJpd2dZWEpuY3lrcE8xeHVJQ0FnSUdsbUlDaHhkV1YxWlM1c1pXNW5kR2dnUFQwOUlERWdKaVlnSVdSeVlXbHVhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lISjFibFJwYldWdmRYUW9aSEpoYVc1UmRXVjFaU2s3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVMeThnZGpnZ2JHbHJaWE1nY0hKbFpHbGpkR2xpYkdVZ2IySnFaV04wYzF4dVpuVnVZM1JwYjI0Z1NYUmxiU2htZFc0c0lHRnljbUY1S1NCN1hHNGdJQ0FnZEdocGN5NW1kVzRnUFNCbWRXNDdYRzRnSUNBZ2RHaHBjeTVoY25KaGVTQTlJR0Z5Y21GNU8xeHVmVnh1U1hSbGJTNXdjbTkwYjNSNWNHVXVjblZ1SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lIUm9hWE11Wm5WdUxtRndjR3g1S0c1MWJHd3NJSFJvYVhNdVlYSnlZWGtwTzF4dWZUdGNibkJ5YjJObGMzTXVkR2wwYkdVZ1BTQW5Zbkp2ZDNObGNpYzdYRzV3Y205alpYTnpMbUp5YjNkelpYSWdQU0IwY25WbE8xeHVjSEp2WTJWemN5NWxibllnUFNCN2ZUdGNibkJ5YjJObGMzTXVZWEpuZGlBOUlGdGRPMXh1Y0hKdlkyVnpjeTUyWlhKemFXOXVJRDBnSnljN0lDOHZJR1Z0Y0hSNUlITjBjbWx1WnlCMGJ5QmhkbTlwWkNCeVpXZGxlSEFnYVhOemRXVnpYRzV3Y205alpYTnpMblpsY25OcGIyNXpJRDBnZTMwN1hHNWNibVoxYm1OMGFXOXVJRzV2YjNBb0tTQjdmVnh1WEc1d2NtOWpaWE56TG05dUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdVlXUmtUR2x6ZEdWdVpYSWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NXZibU5sSUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011YjJabUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNtVnRiM1psVEdsemRHVnVaWElnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTV5WlcxdmRtVkJiR3hNYVhOMFpXNWxjbk1nUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTVsYldsMElEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNISmxjR1Z1WkV4cGMzUmxibVZ5SUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011Y0hKbGNHVnVaRTl1WTJWTWFYTjBaVzVsY2lBOUlHNXZiM0E3WEc1Y2JuQnliMk5sYzNNdWJHbHpkR1Z1WlhKeklEMGdablZ1WTNScGIyNGdLRzVoYldVcElIc2djbVYwZFhKdUlGdGRJSDFjYmx4dWNISnZZMlZ6Y3k1aWFXNWthVzVuSUQwZ1puVnVZM1JwYjI0Z0tHNWhiV1VwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM0J5YjJObGMzTXVZbWx1WkdsdVp5QnBjeUJ1YjNRZ2MzVndjRzl5ZEdWa0p5azdYRzU5TzF4dVhHNXdjbTlqWlhOekxtTjNaQ0E5SUdaMWJtTjBhVzl1SUNncElIc2djbVYwZFhKdUlDY3ZKeUI5TzF4dWNISnZZMlZ6Y3k1amFHUnBjaUE5SUdaMWJtTjBhVzl1SUNoa2FYSXBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0ozQnliMk5sYzNNdVkyaGthWElnYVhNZ2JtOTBJSE4xY0hCdmNuUmxaQ2NwTzF4dWZUdGNibkJ5YjJObGMzTXVkVzFoYzJzZ1BTQm1kVzVqZEdsdmJpZ3BJSHNnY21WMGRYSnVJREE3SUgwN1hHNGlMQ0oyWVhJZ2JtOTNJRDBnY21WeGRXbHlaU2duY0dWeVptOXliV0Z1WTJVdGJtOTNKeWxjYmlBZ0xDQnliMjkwSUQwZ2RIbHdaVzltSUhkcGJtUnZkeUE5UFQwZ0ozVnVaR1ZtYVc1bFpDY2dQeUJuYkc5aVlXd2dPaUIzYVc1a2IzZGNiaUFnTENCMlpXNWtiM0p6SUQwZ1d5ZHRiM29uTENBbmQyVmlhMmwwSjExY2JpQWdMQ0J6ZFdabWFYZ2dQU0FuUVc1cGJXRjBhVzl1Um5KaGJXVW5YRzRnSUN3Z2NtRm1JRDBnY205dmRGc25jbVZ4ZFdWemRDY2dLeUJ6ZFdabWFYaGRYRzRnSUN3Z1kyRm1JRDBnY205dmRGc25ZMkZ1WTJWc0p5QXJJSE4xWm1acGVGMGdmSHdnY205dmRGc25ZMkZ1WTJWc1VtVnhkV1Z6ZENjZ0t5QnpkV1ptYVhoZFhHNWNibVp2Y2loMllYSWdhU0E5SURBN0lDRnlZV1lnSmlZZ2FTQThJSFpsYm1SdmNuTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdjbUZtSUQwZ2NtOXZkRnQyWlc1a2IzSnpXMmxkSUNzZ0oxSmxjWFZsYzNRbklDc2djM1ZtWm1sNFhWeHVJQ0JqWVdZZ1BTQnliMjkwVzNabGJtUnZjbk5iYVYwZ0t5QW5RMkZ1WTJWc0p5QXJJSE4xWm1acGVGMWNiaUFnSUNBZ0lIeDhJSEp2YjNSYmRtVnVaRzl5YzF0cFhTQXJJQ2REWVc1alpXeFNaWEYxWlhOMEp5QXJJSE4xWm1acGVGMWNibjFjYmx4dUx5OGdVMjl0WlNCMlpYSnphVzl1Y3lCdlppQkdSaUJvWVhabElISkJSaUJpZFhRZ2JtOTBJR05CUmx4dWFXWW9JWEpoWmlCOGZDQWhZMkZtS1NCN1hHNGdJSFpoY2lCc1lYTjBJRDBnTUZ4dUlDQWdJQ3dnYVdRZ1BTQXdYRzRnSUNBZ0xDQnhkV1YxWlNBOUlGdGRYRzRnSUNBZ0xDQm1jbUZ0WlVSMWNtRjBhVzl1SUQwZ01UQXdNQ0F2SURZd1hHNWNiaUFnY21GbUlEMGdablZ1WTNScGIyNG9ZMkZzYkdKaFkyc3BJSHRjYmlBZ0lDQnBaaWh4ZFdWMVpTNXNaVzVuZEdnZ1BUMDlJREFwSUh0Y2JpQWdJQ0FnSUhaaGNpQmZibTkzSUQwZ2JtOTNLQ2xjYmlBZ0lDQWdJQ0FnTENCdVpYaDBJRDBnVFdGMGFDNXRZWGdvTUN3Z1puSmhiV1ZFZFhKaGRHbHZiaUF0SUNoZmJtOTNJQzBnYkdGemRDa3BYRzRnSUNBZ0lDQnNZWE4wSUQwZ2JtVjRkQ0FySUY5dWIzZGNiaUFnSUNBZ0lITmxkRlJwYldWdmRYUW9ablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQmpjQ0E5SUhGMVpYVmxMbk5zYVdObEtEQXBYRzRnSUNBZ0lDQWdJQzh2SUVOc1pXRnlJSEYxWlhWbElHaGxjbVVnZEc4Z2NISmxkbVZ1ZEZ4dUlDQWdJQ0FnSUNBdkx5QmpZV3hzWW1GamEzTWdabkp2YlNCaGNIQmxibVJwYm1jZ2JHbHpkR1Z1WlhKelhHNGdJQ0FnSUNBZ0lDOHZJSFJ2SUhSb1pTQmpkWEp5Wlc1MElHWnlZVzFsSjNNZ2NYVmxkV1ZjYmlBZ0lDQWdJQ0FnY1hWbGRXVXViR1Z1WjNSb0lEMGdNRnh1SUNBZ0lDQWdJQ0JtYjNJb2RtRnlJR2tnUFNBd095QnBJRHdnWTNBdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNCcFppZ2hZM0JiYVYwdVkyRnVZMlZzYkdWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGNubDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHTndXMmxkTG1OaGJHeGlZV05yS0d4aGMzUXBYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHTmhkR05vS0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDaG1kVzVqZEdsdmJpZ3BJSHNnZEdoeWIzY2daU0I5TENBd0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmU3dnVFdGMGFDNXliM1Z1WkNodVpYaDBLU2xjYmlBZ0lDQjlYRzRnSUNBZ2NYVmxkV1V1Y0hWemFDaDdYRzRnSUNBZ0lDQm9ZVzVrYkdVNklDc3JhV1FzWEc0Z0lDQWdJQ0JqWVd4c1ltRmphem9nWTJGc2JHSmhZMnNzWEc0Z0lDQWdJQ0JqWVc1alpXeHNaV1E2SUdaaGJITmxYRzRnSUNBZ2ZTbGNiaUFnSUNCeVpYUjFjbTRnYVdSY2JpQWdmVnh1WEc0Z0lHTmhaaUE5SUdaMWJtTjBhVzl1S0doaGJtUnNaU2tnZTF4dUlDQWdJR1p2Y2loMllYSWdhU0E5SURBN0lHa2dQQ0J4ZFdWMVpTNXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnYVdZb2NYVmxkV1ZiYVYwdWFHRnVaR3hsSUQwOVBTQm9ZVzVrYkdVcElIdGNiaUFnSUNBZ0lDQWdjWFZsZFdWYmFWMHVZMkZ1WTJWc2JHVmtJRDBnZEhKMVpWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHWnVLU0I3WEc0Z0lDOHZJRmR5WVhBZ2FXNGdZU0J1WlhjZ1puVnVZM1JwYjI0Z2RHOGdjSEpsZG1WdWRGeHVJQ0F2THlCZ1kyRnVZMlZzWUNCd2IzUmxiblJwWVd4c2VTQmlaV2x1WnlCaGMzTnBaMjVsWkZ4dUlDQXZMeUIwYnlCMGFHVWdibUYwYVhabElISkJSaUJtZFc1amRHbHZibHh1SUNCeVpYUjFjbTRnY21GbUxtTmhiR3dvY205dmRDd2dabTRwWEc1OVhHNXRiMlIxYkdVdVpYaHdiM0owY3k1allXNWpaV3dnUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnWTJGbUxtRndjR3g1S0hKdmIzUXNJR0Z5WjNWdFpXNTBjeWxjYm4xY2JtMXZaSFZzWlM1bGVIQnZjblJ6TG5CdmJIbG1hV3hzSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUhKdmIzUXVjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSUQwZ2NtRm1YRzRnSUhKdmIzUXVZMkZ1WTJWc1FXNXBiV0YwYVc5dVJuSmhiV1VnUFNCallXWmNibjFjYmlJc0lpOHFLbHh1S2lCUVlYSmhiR3hoZUM1cWMxeHVLaUJBWVhWMGFHOXlJRTFoZEhSb1pYY2dWMkZuWlhKbWFXVnNaQ0F0SUVCM1lXZGxjbVpwWld4a0xDQlNaVzdEcVNCU2IzUm9JQzBnYldGcGJFQnlaVzVsY205MGFDNXZjbWRjYmlvZ1FHUmxjMk55YVhCMGFXOXVJRU55WldGMFpYTWdZU0J3WVhKaGJHeGhlQ0JsWm1abFkzUWdZbVYwZDJWbGJpQmhiaUJoY25KaGVTQnZaaUJzWVhsbGNuTXNYRzRxSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtjbWwyYVc1bklIUm9aU0J0YjNScGIyNGdabkp2YlNCMGFHVWdaM2x5YjNOamIzQmxJRzkxZEhCMWRDQnZaaUJoSUhOdFlYSjBaR1YyYVdObExseHVLaUFnSUNBZ0lDQWdJQ0FnSUNBZ1NXWWdibThnWjNseWIzTmpiM0JsSUdseklHRjJZV2xzWVdKc1pTd2dkR2hsSUdOMWNuTnZjaUJ3YjNOcGRHbHZiaUJwY3lCMWMyVmtMbHh1S2k5Y2JseHVZMjl1YzNRZ2NuRkJia1p5SUQwZ2NtVnhkV2x5WlNnbmNtRm1KeWxjYm1OdmJuTjBJRzlpYW1WamRFRnpjMmxuYmlBOUlISmxjWFZwY21Vb0oyOWlhbVZqZEMxaGMzTnBaMjRuS1Z4dVhHNWpiMjV6ZENCb1pXeHdaWEp6SUQwZ2UxeHVJQ0J3Y205d1pYSjBlVU5oWTJobE9pQjdmU3hjYmlBZ2RtVnVaRzl5Y3pvZ1cyNTFiR3dzSUZzbkxYZGxZbXRwZEMwbkxDZDNaV0pyYVhRblhTd2dXeWN0Ylc5NkxTY3NKMDF2ZWlkZExDQmJKeTF2TFNjc0owOG5YU3dnV3ljdGJYTXRKeXduYlhNblhWMHNYRzVjYmlBZ1kyeGhiWEFvZG1Gc2RXVXNJRzFwYml3Z2JXRjRLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHMXBiaUE4SUcxaGVGeHVJQ0FnSUNBZ1B5QW9kbUZzZFdVZ1BDQnRhVzRnUHlCdGFXNGdPaUIyWVd4MVpTQStJRzFoZUNBL0lHMWhlQ0E2SUhaaGJIVmxLVnh1SUNBZ0lDQWdPaUFvZG1Gc2RXVWdQQ0J0WVhnZ1B5QnRZWGdnT2lCMllXeDFaU0ErSUcxcGJpQS9JRzFwYmlBNklIWmhiSFZsS1Z4dUlDQjlMRnh1WEc0Z0lHUmhkR0VvWld4bGJXVnVkQ3dnYm1GdFpTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCb1pXeHdaWEp6TG1SbGMyVnlhV0ZzYVhwbEtHVnNaVzFsYm5RdVoyVjBRWFIwY21saWRYUmxLQ2RrWVhSaExTY3JibUZ0WlNrcFhHNGdJSDBzWEc1Y2JpQWdaR1Z6WlhKcFlXeHBlbVVvZG1Gc2RXVXBJSHRjYmlBZ0lDQnBaaUFvZG1Gc2RXVWdQVDA5SUNkMGNuVmxKeWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdWY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0haaGJIVmxJRDA5UFNBblptRnNjMlVuS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tIWmhiSFZsSUQwOVBTQW5iblZzYkNjcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCdWRXeHNYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2hhWE5PWVU0b2NHRnljMlZHYkc5aGRDaDJZV3gxWlNrcElDWW1JR2x6Um1sdWFYUmxLSFpoYkhWbEtTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIQmhjbk5sUm14dllYUW9kbUZzZFdVcFhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjJZV3gxWlZ4dUlDQWdJSDFjYmlBZ2ZTeGNibHh1SUNCallXMWxiRU5oYzJVb2RtRnNkV1VwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkbUZzZFdVdWNtVndiR0ZqWlNndkxTc29MaWsvTDJjc0lDaHRZWFJqYUN3Z1kyaGhjbUZqZEdWeUtTQTlQaUI3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZMmhoY21GamRHVnlJRDhnWTJoaGNtRmpkR1Z5TG5SdlZYQndaWEpEWVhObEtDa2dPaUFuSjF4dUlDQWdJSDBwWEc0Z0lIMHNYRzVjYmlBZ1lXTmpaV3hsY21GMFpTaGxiR1Z0Wlc1MEtTQjdYRzRnSUNBZ2FHVnNjR1Z5Y3k1amMzTW9aV3hsYldWdWRDd2dKM1J5WVc1elptOXliU2NzSUNkMGNtRnVjMnhoZEdVelpDZ3dMREFzTUNrZ2NtOTBZWFJsS0RBdU1EQXdNV1JsWnlrbktWeHVJQ0FnSUdobGJIQmxjbk11WTNOektHVnNaVzFsYm5Rc0lDZDBjbUZ1YzJadmNtMHRjM1I1YkdVbkxDQW5jSEpsYzJWeWRtVXRNMlFuS1Z4dUlDQWdJR2hsYkhCbGNuTXVZM056S0dWc1pXMWxiblFzSUNkaVlXTnJabUZqWlMxMmFYTnBZbWxzYVhSNUp5d2dKMmhwWkdSbGJpY3BYRzRnSUgwc1hHNWNiaUFnZEhKaGJuTm1iM0p0VTNWd2NHOXlkQ2gyWVd4MVpTa2dlMXh1SUNBZ0lHeGxkQ0JsYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25aR2wySnlrc1hHNGdJQ0FnSUNBZ0lIQnliM0JsY25SNVUzVndjRzl5ZENBOUlHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNCd2NtOXdaWEowZVZaaGJIVmxJRDBnYm5Wc2JDeGNiaUFnSUNBZ0lDQWdabVZoZEhWeVpWTjFjSEJ2Y25RZ1BTQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ1kzTnpVSEp2Y0dWeWRIa2dQU0J1ZFd4c0xGeHVJQ0FnSUNBZ0lDQnFjMUJ5YjNCbGNuUjVJRDBnYm5Wc2JGeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdMQ0JzSUQwZ2FHVnNjR1Z5Y3k1MlpXNWtiM0p6TG14bGJtZDBhRHNnYVNBOElHdzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2FXWWdLR2hsYkhCbGNuTXVkbVZ1Wkc5eWMxdHBYU0FoUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNCamMzTlFjbTl3WlhKMGVTQTlJR2hsYkhCbGNuTXVkbVZ1Wkc5eWMxdHBYVnN3WFNBcklDZDBjbUZ1YzJadmNtMG5YRzRnSUNBZ0lDQWdJR3B6VUhKdmNHVnlkSGtnUFNCb1pXeHdaWEp6TG5abGJtUnZjbk5iYVYxYk1WMGdLeUFuVkhKaGJuTm1iM0p0SjF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnWTNOelVISnZjR1Z5ZEhrZ1BTQW5kSEpoYm5ObWIzSnRKMXh1SUNBZ0lDQWdJQ0JxYzFCeWIzQmxjblI1SUQwZ0ozUnlZVzV6Wm05eWJTZGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHbG1JQ2hsYkdWdFpXNTBMbk4wZVd4bFcycHpVSEp2Y0dWeWRIbGRJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdjSEp2Y0dWeWRIbFRkWEJ3YjNKMElEMGdkSEoxWlZ4dUlDQWdJQ0FnSUNCaWNtVmhhMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNCemQybDBZMmdvZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJR05oYzJVZ0p6SkVKenBjYmlBZ0lDQWdJQ0FnWm1WaGRIVnlaVk4xY0hCdmNuUWdQU0J3Y205d1pYSjBlVk4xY0hCdmNuUmNiaUFnSUNBZ0lDQWdZbkpsWVd0Y2JpQWdJQ0FnSUdOaGMyVWdKek5FSnpwY2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5YjNCbGNuUjVVM1Z3Y0c5eWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUd4bGRDQmliMlI1SUQwZ1pHOWpkVzFsYm5RdVltOWtlU0I4ZkNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2RpYjJSNUp5a3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHUnZZM1Z0Wlc1MFJXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWkc5amRXMWxiblJQZG1WeVpteHZkeUE5SUdSdlkzVnRaVzUwUld4bGJXVnVkQzV6ZEhsc1pTNXZkbVZ5Wm14dmR5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2FYTkRjbVZoZEdWa1FtOWtlU0E5SUdaaGJITmxYRzVjYmlBZ0lDQWdJQ0FnSUNCcFppQW9JV1J2WTNWdFpXNTBMbUp2WkhrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdselEzSmxZWFJsWkVKdlpIa2dQU0IwY25WbFhHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjJOMWJXVnVkRVZzWlcxbGJuUXVjM1I1YkdVdWIzWmxjbVpzYjNjZ1BTQW5hR2xrWkdWdUoxeHVJQ0FnSUNBZ0lDQWdJQ0FnWkc5amRXMWxiblJGYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dKdlpIa3BYRzRnSUNBZ0lDQWdJQ0FnSUNCaWIyUjVMbk4wZVd4bExtOTJaWEptYkc5M0lEMGdKMmhwWkdSbGJpZGNiaUFnSUNBZ0lDQWdJQ0FnSUdKdlpIa3VjM1I1YkdVdVltRmphMmR5YjNWdVpDQTlJQ2NuWEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnWW05a2VTNWhjSEJsYm1SRGFHbHNaQ2hsYkdWdFpXNTBLVnh1SUNBZ0lDQWdJQ0FnSUdWc1pXMWxiblF1YzNSNWJHVmJhbk5RY205d1pYSjBlVjBnUFNBbmRISmhibk5zWVhSbE0yUW9NWEI0TERGd2VDd3hjSGdwSjF4dUlDQWdJQ0FnSUNBZ0lIQnliM0JsY25SNVZtRnNkV1VnUFNCM2FXNWtiM2N1WjJWMFEyOXRjSFYwWldSVGRIbHNaU2hsYkdWdFpXNTBLUzVuWlhSUWNtOXdaWEowZVZaaGJIVmxLR056YzFCeWIzQmxjblI1S1Z4dUlDQWdJQ0FnSUNBZ0lHWmxZWFIxY21WVGRYQndiM0owSUQwZ2NISnZjR1Z5ZEhsV1lXeDFaU0FoUFQwZ2RXNWtaV1pwYm1Wa0lDWW1JSEJ5YjNCbGNuUjVWbUZzZFdVdWJHVnVaM1JvSUQ0Z01DQW1KaUJ3Y205d1pYSjBlVlpoYkhWbElDRTlQU0FuYm05dVpTZGNiaUFnSUNBZ0lDQWdJQ0JrYjJOMWJXVnVkRVZzWlcxbGJuUXVjM1I1YkdVdWIzWmxjbVpzYjNjZ1BTQmtiMk4xYldWdWRFOTJaWEptYkc5M1hHNGdJQ0FnSUNBZ0lDQWdZbTlrZVM1eVpXMXZkbVZEYUdsc1pDaGxiR1Z0Wlc1MEtWeHVYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tDQnBjME55WldGMFpXUkNiMlI1SUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWW05a2VTNXlaVzF2ZG1WQmRIUnlhV0oxZEdVb0ozTjBlV3hsSnlsY2JpQWdJQ0FnSUNBZ0lDQWdJR0p2WkhrdWNHRnlaVzUwVG05a1pTNXlaVzF2ZG1WRGFHbHNaQ2hpYjJSNUtWeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCaWNtVmhhMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnWm1WaGRIVnlaVk4xY0hCdmNuUmNiaUFnZlN4Y2JseHVJQ0JqYzNNb1pXeGxiV1Z1ZEN3Z2NISnZjR1Z5ZEhrc0lIWmhiSFZsS1NCN1hHNGdJQ0FnYkdWMElHcHpVSEp2Y0dWeWRIa2dQU0JvWld4d1pYSnpMbkJ5YjNCbGNuUjVRMkZqYUdWYmNISnZjR1Z5ZEhsZFhHNGdJQ0FnYVdZZ0tDRnFjMUJ5YjNCbGNuUjVLU0I3WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Dd2diQ0E5SUdobGJIQmxjbk11ZG1WdVpHOXljeTVzWlc1bmRHZzdJR2tnUENCc095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR2hsYkhCbGNuTXVkbVZ1Wkc5eWMxdHBYU0FoUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lHcHpVSEp2Y0dWeWRIa2dQU0JvWld4d1pYSnpMbU5oYldWc1EyRnpaU2hvWld4d1pYSnpMblpsYm1SdmNuTmJhVjFiTVYwZ0t5QW5MU2NnS3lCd2NtOXdaWEowZVNsY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQnFjMUJ5YjNCbGNuUjVJRDBnY0hKdmNHVnlkSGxjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCcFppQW9aV3hsYldWdWRDNXpkSGxzWlZ0cWMxQnliM0JsY25SNVhTQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdhR1ZzY0dWeWN5NXdjbTl3WlhKMGVVTmhZMmhsVzNCeWIzQmxjblI1WFNBOUlHcHpVSEp2Y0dWeWRIbGNiaUFnSUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUdWc1pXMWxiblF1YzNSNWJHVmJhbk5RY205d1pYSjBlVjBnUFNCMllXeDFaVnh1SUNCOVhHNWNibjFjYmx4dVkyOXVjM1FnVFVGSFNVTmZUbFZOUWtWU0lEMGdNekFzWEc0Z0lDQWdJQ0JFUlVaQlZVeFVVeUE5SUh0Y2JpQWdJQ0FnSUNBZ2NtVnNZWFJwZG1WSmJuQjFkRG9nWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJR05zYVhCU1pXeGhkR2wyWlVsdWNIVjBPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdhVzV3ZFhSRmJHVnRaVzUwT2lCdWRXeHNMRnh1SUNBZ0lDQWdJQ0JvYjNabGNrOXViSGs2SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0JqWVd4cFluSmhkR2x2YmxSb2NtVnphRzlzWkRvZ01UQXdMRnh1SUNBZ0lDQWdJQ0JqWVd4cFluSmhkR2x2YmtSbGJHRjVPaUExTURBc1hHNGdJQ0FnSUNBZ0lITjFjSEJ2Y25SRVpXeGhlVG9nTlRBd0xGeHVJQ0FnSUNBZ0lDQmpZV3hwWW5KaGRHVllPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdZMkZzYVdKeVlYUmxXVG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdhVzUyWlhKMFdEb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ2FXNTJaWEowV1RvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnYkdsdGFYUllPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdiR2x0YVhSWk9pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ2MyTmhiR0Z5V0RvZ01UQXVNQ3hjYmlBZ0lDQWdJQ0FnYzJOaGJHRnlXVG9nTVRBdU1DeGNiaUFnSUNBZ0lDQWdabkpwWTNScGIyNVlPaUF3TGpFc1hHNGdJQ0FnSUNBZ0lHWnlhV04wYVc5dVdUb2dNQzR4TEZ4dUlDQWdJQ0FnSUNCdmNtbG5hVzVZT2lBd0xqVXNYRzRnSUNBZ0lDQWdJRzl5YVdkcGJsazZJREF1TlN4Y2JpQWdJQ0FnSUNBZ2NHOXBiblJsY2tWMlpXNTBjem9nWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJSEJ5WldOcGMybHZiam9nTVN4Y2JpQWdJQ0FnSUNBZ2IyNVNaV0ZrZVRvZ2JuVnNiQ3hjYmlBZ0lDQWdJQ0FnYzJWc1pXTjBiM0k2SUc1MWJHeGNiaUFnSUNBZ0lIMWNibHh1WTJ4aGMzTWdVR0Z5WVd4c1lYZ2dlMXh1SUNCamIyNXpkSEoxWTNSdmNpaGxiR1Z0Wlc1MExDQnZjSFJwYjI1ektTQjdYRzVjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblFnUFNCbGJHVnRaVzUwWEc1Y2JpQWdJQ0JqYjI1emRDQmtZWFJoSUQwZ2UxeHVJQ0FnSUNBZ1kyRnNhV0p5WVhSbFdEb2dhR1ZzY0dWeWN5NWtZWFJoS0hSb2FYTXVaV3hsYldWdWRDd2dKMk5oYkdsaWNtRjBaUzE0Snlrc1hHNGdJQ0FnSUNCallXeHBZbkpoZEdWWk9pQm9aV3h3WlhKekxtUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MExDQW5ZMkZzYVdKeVlYUmxMWGtuS1N4Y2JpQWdJQ0FnSUdsdWRtVnlkRmc2SUdobGJIQmxjbk11WkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFzSUNkcGJuWmxjblF0ZUNjcExGeHVJQ0FnSUNBZ2FXNTJaWEowV1RvZ2FHVnNjR1Z5Y3k1a1lYUmhLSFJvYVhNdVpXeGxiV1Z1ZEN3Z0oybHVkbVZ5ZEMxNUp5a3NYRzRnSUNBZ0lDQnNhVzFwZEZnNklHaGxiSEJsY25NdVpHRjBZU2gwYUdsekxtVnNaVzFsYm5Rc0lDZHNhVzFwZEMxNEp5a3NYRzRnSUNBZ0lDQnNhVzFwZEZrNklHaGxiSEJsY25NdVpHRjBZU2gwYUdsekxtVnNaVzFsYm5Rc0lDZHNhVzFwZEMxNUp5a3NYRzRnSUNBZ0lDQnpZMkZzWVhKWU9pQm9aV3h3WlhKekxtUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MExDQW5jMk5oYkdGeUxYZ25LU3hjYmlBZ0lDQWdJSE5qWVd4aGNsazZJR2hsYkhCbGNuTXVaR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXNJQ2R6WTJGc1lYSXRlU2NwTEZ4dUlDQWdJQ0FnWm5KcFkzUnBiMjVZT2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBblpuSnBZM1JwYjI0dGVDY3BMRnh1SUNBZ0lDQWdabkpwWTNScGIyNVpPaUJvWld4d1pYSnpMbVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBMQ0FuWm5KcFkzUnBiMjR0ZVNjcExGeHVJQ0FnSUNBZ2IzSnBaMmx1V0RvZ2FHVnNjR1Z5Y3k1a1lYUmhLSFJvYVhNdVpXeGxiV1Z1ZEN3Z0oyOXlhV2RwYmkxNEp5a3NYRzRnSUNBZ0lDQnZjbWxuYVc1Wk9pQm9aV3h3WlhKekxtUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MExDQW5iM0pwWjJsdUxYa25LU3hjYmlBZ0lDQWdJSEJ2YVc1MFpYSkZkbVZ1ZEhNNklHaGxiSEJsY25NdVpHRjBZU2gwYUdsekxtVnNaVzFsYm5Rc0lDZHdiMmx1ZEdWeUxXVjJaVzUwY3ljcExGeHVJQ0FnSUNBZ2NISmxZMmx6YVc5dU9pQm9aV3h3WlhKekxtUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MExDQW5jSEpsWTJsemFXOXVKeWtzWEc0Z0lDQWdJQ0J5Wld4aGRHbDJaVWx1Y0hWME9pQm9aV3h3WlhKekxtUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MExDQW5jbVZzWVhScGRtVXRhVzV3ZFhRbktTeGNiaUFnSUNBZ0lHTnNhWEJTWld4aGRHbDJaVWx1Y0hWME9pQm9aV3h3WlhKekxtUmhkR0VvZEdocGN5NWxiR1Z0Wlc1MExDQW5ZMnhwY0MxeVpXeGhkR2wyWlMxcGJuQjFkQ2NwTEZ4dUlDQWdJQ0FnYUc5MlpYSlBibXg1T2lCb1pXeHdaWEp6TG1SaGRHRW9kR2hwY3k1bGJHVnRaVzUwTENBbmFHOTJaWEl0YjI1c2VTY3BMRnh1SUNBZ0lDQWdhVzV3ZFhSRmJHVnRaVzUwT2lCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLR2hsYkhCbGNuTXVaR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXNJQ2RwYm5CMWRDMWxiR1Z0Wlc1MEp5a3BMRnh1SUNBZ0lDQWdjMlZzWldOMGIzSTZJR2hsYkhCbGNuTXVaR0YwWVNoMGFHbHpMbVZzWlcxbGJuUXNJQ2R6Wld4bFkzUnZjaWNwWEc0Z0lDQWdmVnh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlHUmhkR0VwSUh0Y2JpQWdJQ0FnSUdsbUlDaGtZWFJoVzJ0bGVWMGdQVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJQ0FnWkdWc1pYUmxJR1JoZEdGYmEyVjVYVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHOWlhbVZqZEVGemMybG5iaWgwYUdsekxDQkVSVVpCVlV4VVV5d2daR0YwWVN3Z2IzQjBhVzl1Y3lsY2JseHVJQ0FnSUdsbUtDRjBhR2x6TG1sdWNIVjBSV3hsYldWdWRDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1cGJuQjFkRVZzWlcxbGJuUWdQU0IwYUdsekxtVnNaVzFsYm5SY2JpQWdJQ0I5WEc1Y2JpQWdJQ0IwYUdsekxtTmhiR2xpY21GMGFXOXVWR2x0WlhJZ1BTQnVkV3hzWEc0Z0lDQWdkR2hwY3k1allXeHBZbkpoZEdsdmJrWnNZV2NnUFNCMGNuVmxYRzRnSUNBZ2RHaHBjeTVsYm1GaWJHVmtJRDBnWm1Gc2MyVmNiaUFnSUNCMGFHbHpMbVJsY0hSb2MxZ2dQU0JiWFZ4dUlDQWdJSFJvYVhNdVpHVndkR2h6V1NBOUlGdGRYRzRnSUNBZ2RHaHBjeTV5WVdZZ1BTQnVkV3hzWEc1Y2JpQWdJQ0IwYUdsekxtSnZkVzVrY3lBOUlHNTFiR3hjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJRYjNOcGRHbHZibGdnUFNBd1hHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFVHOXphWFJwYjI1WklEMGdNRnh1SUNBZ0lIUm9hWE11Wld4bGJXVnVkRmRwWkhSb0lEMGdNRnh1SUNBZ0lIUm9hWE11Wld4bGJXVnVkRWhsYVdkb2RDQTlJREJjYmx4dUlDQWdJSFJvYVhNdVpXeGxiV1Z1ZEVObGJuUmxjbGdnUFNBd1hHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFEyVnVkR1Z5V1NBOUlEQmNibHh1SUNBZ0lIUm9hWE11Wld4bGJXVnVkRkpoYm1kbFdDQTlJREJjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJTWVc1blpWa2dQU0F3WEc1Y2JpQWdJQ0IwYUdsekxtTmhiR2xpY21GMGFXOXVXQ0E5SURCY2JpQWdJQ0IwYUdsekxtTmhiR2xpY21GMGFXOXVXU0E5SURCY2JseHVJQ0FnSUhSb2FYTXVhVzV3ZFhSWUlEMGdNRnh1SUNBZ0lIUm9hWE11YVc1d2RYUlpJRDBnTUZ4dVhHNGdJQ0FnZEdocGN5NXRiM1JwYjI1WUlEMGdNRnh1SUNBZ0lIUm9hWE11Ylc5MGFXOXVXU0E5SURCY2JseHVJQ0FnSUhSb2FYTXVkbVZzYjJOcGRIbFlJRDBnTUZ4dUlDQWdJSFJvYVhNdWRtVnNiMk5wZEhsWklEMGdNRnh1WEc0Z0lDQWdkR2hwY3k1dmJrMXZkWE5sVFc5MlpTQTlJSFJvYVhNdWIyNU5iM1Z6WlUxdmRtVXVZbWx1WkNoMGFHbHpLVnh1SUNBZ0lIUm9hWE11YjI1RVpYWnBZMlZQY21sbGJuUmhkR2x2YmlBOUlIUm9hWE11YjI1RVpYWnBZMlZQY21sbGJuUmhkR2x2Ymk1aWFXNWtLSFJvYVhNcFhHNGdJQ0FnZEdocGN5NXZia1JsZG1salpVMXZkR2x2YmlBOUlIUm9hWE11YjI1RVpYWnBZMlZOYjNScGIyNHVZbWx1WkNoMGFHbHpLVnh1SUNBZ0lIUm9hWE11YjI1UGNtbGxiblJoZEdsdmJsUnBiV1Z5SUQwZ2RHaHBjeTV2Yms5eWFXVnVkR0YwYVc5dVZHbHRaWEl1WW1sdVpDaDBhR2x6S1Z4dUlDQWdJSFJvYVhNdWIyNU5iM1JwYjI1VWFXMWxjaUE5SUhSb2FYTXViMjVOYjNScGIyNVVhVzFsY2k1aWFXNWtLSFJvYVhNcFhHNGdJQ0FnZEdocGN5NXZia05oYkdsaWNtRjBhVzl1VkdsdFpYSWdQU0IwYUdsekxtOXVRMkZzYVdKeVlYUnBiMjVVYVcxbGNpNWlhVzVrS0hSb2FYTXBYRzRnSUNBZ2RHaHBjeTV2YmtGdWFXMWhkR2x2YmtaeVlXMWxJRDBnZEdocGN5NXZia0Z1YVcxaGRHbHZia1p5WVcxbExtSnBibVFvZEdocGN5bGNiaUFnSUNCMGFHbHpMbTl1VjJsdVpHOTNVbVZ6YVhwbElEMGdkR2hwY3k1dmJsZHBibVJ2ZDFKbGMybDZaUzVpYVc1a0tIUm9hWE1wWEc1Y2JpQWdJQ0IwYUdsekxuZHBibVJ2ZDFkcFpIUm9JRDBnYm5Wc2JGeHVJQ0FnSUhSb2FYTXVkMmx1Wkc5M1NHVnBaMmgwSUQwZ2JuVnNiRnh1SUNBZ0lIUm9hWE11ZDJsdVpHOTNRMlZ1ZEdWeVdDQTlJRzUxYkd4Y2JpQWdJQ0IwYUdsekxuZHBibVJ2ZDBObGJuUmxjbGtnUFNCdWRXeHNYRzRnSUNBZ2RHaHBjeTUzYVc1a2IzZFNZV1JwZFhOWUlEMGdiblZzYkZ4dUlDQWdJSFJvYVhNdWQybHVaRzkzVW1Ga2FYVnpXU0E5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbkJ2Y25SeVlXbDBJRDBnWm1Gc2MyVmNiaUFnSUNCMGFHbHpMbVJsYzJ0MGIzQWdQU0FoYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZEM1dFlYUmphQ2d2S0dsUWFHOXVaWHhwVUc5a2ZHbFFZV1I4UVc1a2NtOXBaSHhDYkdGamEwSmxjbko1ZkVKQ01UQjhiVzlpYVh4MFlXSnNaWFI4YjNCbGNtRWdiV2x1YVh4dVpYaDFjeUEzS1M5cEtWeHVJQ0FnSUhSb2FYTXViVzkwYVc5dVUzVndjRzl5ZENBOUlDRWhkMmx1Wkc5M0xrUmxkbWxqWlUxdmRHbHZia1YyWlc1MElDWW1JQ0YwYUdsekxtUmxjMnQwYjNCY2JpQWdJQ0IwYUdsekxtOXlhV1Z1ZEdGMGFXOXVVM1Z3Y0c5eWRDQTlJQ0VoZDJsdVpHOTNMa1JsZG1salpVOXlhV1Z1ZEdGMGFXOXVSWFpsYm5RZ0ppWWdJWFJvYVhNdVpHVnphM1J2Y0Z4dUlDQWdJSFJvYVhNdWIzSnBaVzUwWVhScGIyNVRkR0YwZFhNZ1BTQXdYRzRnSUNBZ2RHaHBjeTV0YjNScGIyNVRkR0YwZFhNZ1BTQXdYRzVjYmlBZ0lDQjBhR2x6TG1sdWFYUnBZV3hwYzJVb0tWeHVJQ0I5WEc1Y2JpQWdhVzVwZEdsaGJHbHpaU2dwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTUwY21GdWMyWnZjbTB5UkZOMWNIQnZjblFnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1MGNtRnVjMlp2Y20weVJGTjFjSEJ2Y25RZ1BTQm9aV3h3WlhKekxuUnlZVzV6Wm05eWJWTjFjSEJ2Y25Rb0p6SkVKeWxjYmlBZ0lDQWdJSFJvYVhNdWRISmhibk5tYjNKdE0wUlRkWEJ3YjNKMElEMGdhR1ZzY0dWeWN5NTBjbUZ1YzJadmNtMVRkWEJ3YjNKMEtDY3pSQ2NwWEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUTI5dVptbG5kWEpsSUVOdmJuUmxlSFFnVTNSNWJHVnpYRzRnSUNBZ2FXWWdLSFJvYVhNdWRISmhibk5tYjNKdE0wUlRkWEJ3YjNKMEtTQjdYRzRnSUNBZ0lDQm9aV3h3WlhKekxtRmpZMlZzWlhKaGRHVW9kR2hwY3k1bGJHVnRaVzUwS1Z4dUlDQWdJSDFjYmx4dUlDQWdJR3hsZENCemRIbHNaU0E5SUhkcGJtUnZkeTVuWlhSRGIyMXdkWFJsWkZOMGVXeGxLSFJvYVhNdVpXeGxiV1Z1ZENsY2JpQWdJQ0JwWmlBb2MzUjViR1V1WjJWMFVISnZjR1Z5ZEhsV1lXeDFaU2duY0c5emFYUnBiMjRuS1NBOVBUMGdKM04wWVhScFl5Y3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVpXeGxiV1Z1ZEM1emRIbHNaUzV3YjNOcGRHbHZiaUE5SUNkeVpXeGhkR2wyWlNkY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCUWIybHVkR1Z5SUdWMlpXNTBjMXh1SUNBZ0lHbG1LQ0YwYUdsekxuQnZhVzUwWlhKRmRtVnVkSE1wSUh0Y2JpQWdJQ0FnSUhSb2FYTXVaV3hsYldWdWRDNXpkSGxzWlM1d2IybHVkR1Z5UlhabGJuUnpJRDBnSjI1dmJtVW5YRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdVMlYwZFhCY2JpQWdJQ0IwYUdsekxuVndaR0YwWlV4aGVXVnljeWdwWEc0Z0lDQWdkR2hwY3k1MWNHUmhkR1ZFYVcxbGJuTnBiMjV6S0NsY2JpQWdJQ0IwYUdsekxtVnVZV0pzWlNncFhHNGdJQ0FnZEdocGN5NXhkV1YxWlVOaGJHbGljbUYwYVc5dUtIUm9hWE11WTJGc2FXSnlZWFJwYjI1RVpXeGhlU2xjYmlBZ2ZWeHVYRzRnSUdSdlVtVmhaSGxEWVd4c1ltRmpheWdwSUh0Y2JpQWdJQ0JwWmloMGFHbHpMbTl1VW1WaFpIa3BJSHRjYmlBZ0lDQWdJSFJvYVhNdWIyNVNaV0ZrZVNncFhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2RYQmtZWFJsVEdGNVpYSnpLQ2tnZTF4dUlDQWdJR2xtS0hSb2FYTXVjMlZzWldOMGIzSXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJHRjVaWEp6SUQwZ2RHaHBjeTVsYkdWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29kR2hwY3k1elpXeGxZM1J2Y2lsY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkR2hwY3k1c1lYbGxjbk1nUFNCMGFHbHpMbVZzWlcxbGJuUXVZMmhwYkdSeVpXNWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppZ2hkR2hwY3k1c1lYbGxjbk11YkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0JqYjI1emIyeGxMbmRoY200b0oxQmhjbUZzYkdGNFNsTTZJRmx2ZFhJZ2MyTmxibVVnWkc5bGN5QnViM1FnYUdGMlpTQmhibmtnYkdGNVpYSnpMaWNwWEc0Z0lDQWdmVnh1WEc0Z0lDQWdkR2hwY3k1a1pYQjBhSE5ZSUQwZ1cxMWNiaUFnSUNCMGFHbHpMbVJsY0hSb2Mxa2dQU0JiWFZ4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVc1a1pYZ2dQU0F3T3lCcGJtUmxlQ0E4SUhSb2FYTXViR0Y1WlhKekxteGxibWQwYURzZ2FXNWtaWGdyS3lrZ2UxeHVJQ0FnSUNBZ2JHVjBJR3hoZVdWeUlEMGdkR2hwY3k1c1lYbGxjbk5iYVc1a1pYaGRYRzVjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMblJ5WVc1elptOXliVE5FVTNWd2NHOXlkQ2tnZTF4dUlDQWdJQ0FnSUNCb1pXeHdaWEp6TG1GalkyVnNaWEpoZEdVb2JHRjVaWElwWEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUd4aGVXVnlMbk4wZVd4bExuQnZjMmwwYVc5dUlEMGdhVzVrWlhnZ1B5QW5ZV0p6YjJ4MWRHVW5JRG9nSjNKbGJHRjBhWFpsSjF4dUlDQWdJQ0FnYkdGNVpYSXVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZGliRzlqYXlkY2JpQWdJQ0FnSUd4aGVXVnlMbk4wZVd4bExteGxablFnUFNBd1hHNGdJQ0FnSUNCc1lYbGxjaTV6ZEhsc1pTNTBiM0FnUFNBd1hHNWNiaUFnSUNBZ0lHeGxkQ0JrWlhCMGFDQTlJR2hsYkhCbGNuTXVaR0YwWVNoc1lYbGxjaXdnSjJSbGNIUm9KeWtnZkh3Z01GeHVJQ0FnSUNBZ2RHaHBjeTVrWlhCMGFITllMbkIxYzJnb2FHVnNjR1Z5Y3k1a1lYUmhLR3hoZVdWeUxDQW5aR1Z3ZEdndGVDY3BJSHg4SUdSbGNIUm9LVnh1SUNBZ0lDQWdkR2hwY3k1a1pYQjBhSE5aTG5CMWMyZ29hR1ZzY0dWeWN5NWtZWFJoS0d4aGVXVnlMQ0FuWkdWd2RHZ3RlU2NwSUh4OElHUmxjSFJvS1Z4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaVVJwYldWdWMybHZibk1vS1NCN1hHNGdJQ0FnZEdocGN5NTNhVzVrYjNkWGFXUjBhQ0E5SUhkcGJtUnZkeTVwYm01bGNsZHBaSFJvWEc0Z0lDQWdkR2hwY3k1M2FXNWtiM2RJWldsbmFIUWdQU0IzYVc1a2IzY3VhVzV1WlhKSVpXbG5hSFJjYmlBZ0lDQjBhR2x6TG5kcGJtUnZkME5sYm5SbGNsZ2dQU0IwYUdsekxuZHBibVJ2ZDFkcFpIUm9JQ29nZEdocGN5NXZjbWxuYVc1WVhHNGdJQ0FnZEdocGN5NTNhVzVrYjNkRFpXNTBaWEpaSUQwZ2RHaHBjeTUzYVc1a2IzZElaV2xuYUhRZ0tpQjBhR2x6TG05eWFXZHBibGxjYmlBZ0lDQjBhR2x6TG5kcGJtUnZkMUpoWkdsMWMxZ2dQU0JOWVhSb0xtMWhlQ2gwYUdsekxuZHBibVJ2ZDBObGJuUmxjbGdzSUhSb2FYTXVkMmx1Wkc5M1YybGtkR2dnTFNCMGFHbHpMbmRwYm1SdmQwTmxiblJsY2xncFhHNGdJQ0FnZEdocGN5NTNhVzVrYjNkU1lXUnBkWE5aSUQwZ1RXRjBhQzV0WVhnb2RHaHBjeTUzYVc1a2IzZERaVzUwWlhKWkxDQjBhR2x6TG5kcGJtUnZkMGhsYVdkb2RDQXRJSFJvYVhNdWQybHVaRzkzUTJWdWRHVnlXU2xjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaVUp2ZFc1a2N5Z3BJSHRjYmlBZ0lDQjBhR2x6TG1KdmRXNWtjeUE5SUhSb2FYTXVhVzV3ZFhSRmJHVnRaVzUwTG1kbGRFSnZkVzVrYVc1blEyeHBaVzUwVW1WamRDZ3BYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVlJRDBnZEdocGN5NWliM1Z1WkhNdWJHVm1kRnh1SUNBZ0lIUm9hWE11Wld4bGJXVnVkRkJ2YzJsMGFXOXVXU0E5SUhSb2FYTXVZbTkxYm1SekxuUnZjRnh1SUNBZ0lIUm9hWE11Wld4bGJXVnVkRmRwWkhSb0lEMGdkR2hwY3k1aWIzVnVaSE11ZDJsa2RHaGNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUklaV2xuYUhRZ1BTQjBhR2x6TG1KdmRXNWtjeTVvWldsbmFIUmNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUkRaVzUwWlhKWUlEMGdkR2hwY3k1bGJHVnRaVzUwVjJsa2RHZ2dLaUIwYUdsekxtOXlhV2RwYmxoY2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SRFpXNTBaWEpaSUQwZ2RHaHBjeTVsYkdWdFpXNTBTR1ZwWjJoMElDb2dkR2hwY3k1dmNtbG5hVzVaWEc0Z0lDQWdkR2hwY3k1bGJHVnRaVzUwVW1GdVoyVllJRDBnVFdGMGFDNXRZWGdvZEdocGN5NWxiR1Z0Wlc1MFEyVnVkR1Z5V0N3Z2RHaHBjeTVsYkdWdFpXNTBWMmxrZEdnZ0xTQjBhR2x6TG1Wc1pXMWxiblJEWlc1MFpYSllLVnh1SUNBZ0lIUm9hWE11Wld4bGJXVnVkRkpoYm1kbFdTQTlJRTFoZEdndWJXRjRLSFJvYVhNdVpXeGxiV1Z1ZEVObGJuUmxjbGtzSUhSb2FYTXVaV3hsYldWdWRFaGxhV2RvZENBdElIUm9hWE11Wld4bGJXVnVkRU5sYm5SbGNsa3BYRzRnSUgxY2JseHVJQ0J4ZFdWMVpVTmhiR2xpY21GMGFXOXVLR1JsYkdGNUtTQjdYRzRnSUNBZ1kyeGxZWEpVYVcxbGIzVjBLSFJvYVhNdVkyRnNhV0p5WVhScGIyNVVhVzFsY2lsY2JpQWdJQ0IwYUdsekxtTmhiR2xpY21GMGFXOXVWR2x0WlhJZ1BTQnpaWFJVYVcxbGIzVjBLSFJvYVhNdWIyNURZV3hwWW5KaGRHbHZibFJwYldWeUxDQmtaV3hoZVNsY2JpQWdmVnh1WEc0Z0lHVnVZV0pzWlNncElIdGNiaUFnSUNCcFppQW9kR2hwY3k1bGJtRmliR1ZrS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTVsYm1GaWJHVmtJRDBnZEhKMVpWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWIzSnBaVzUwWVhScGIyNVRkWEJ3YjNKMEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG5CdmNuUnlZV2wwSUQwZ1ptRnNjMlZjYmlBZ0lDQWdJSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGtaWFpwWTJWdmNtbGxiblJoZEdsdmJpY3NJSFJvYVhNdWIyNUVaWFpwWTJWUGNtbGxiblJoZEdsdmJpbGNiaUFnSUNBZ0lIUm9hWE11WkdWMFpXTjBhVzl1VkdsdFpYSWdQU0J6WlhSVWFXMWxiM1YwS0hSb2FYTXViMjVQY21sbGJuUmhkR2x2YmxScGJXVnlMQ0IwYUdsekxuTjFjSEJ2Y25SRVpXeGhlU2xjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFJvYVhNdWJXOTBhVzl1VTNWd2NHOXlkQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXdiM0owY21GcGRDQTlJR1poYkhObFhHNGdJQ0FnSUNCM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWkdWMmFXTmxiVzkwYVc5dUp5d2dkR2hwY3k1dmJrUmxkbWxqWlUxdmRHbHZiaWxjYmlBZ0lDQWdJSFJvYVhNdVpHVjBaV04wYVc5dVZHbHRaWElnUFNCelpYUlVhVzFsYjNWMEtIUm9hWE11YjI1TmIzUnBiMjVVYVcxbGNpd2dkR2hwY3k1emRYQndiM0owUkdWc1lYa3BYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZMkZzYVdKeVlYUnBiMjVZSUQwZ01GeHVJQ0FnSUNBZ2RHaHBjeTVqWVd4cFluSmhkR2x2YmxrZ1BTQXdYRzRnSUNBZ0lDQjBhR2x6TG5CdmNuUnlZV2wwSUQwZ1ptRnNjMlZjYmlBZ0lDQWdJSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHRiM1Z6WlcxdmRtVW5MQ0IwYUdsekxtOXVUVzkxYzJWTmIzWmxLVnh1SUNBZ0lDQWdkR2hwY3k1a2IxSmxZV1I1UTJGc2JHSmhZMnNvS1Z4dUlDQWdJSDFjYmx4dUlDQWdJSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHlaWE5wZW1VbkxDQjBhR2x6TG05dVYybHVaRzkzVW1WemFYcGxLVnh1SUNBZ0lIUm9hWE11Y21GbUlEMGdjbkZCYmtaeUtIUm9hWE11YjI1QmJtbHRZWFJwYjI1R2NtRnRaU2xjYmlBZ2ZWeHVYRzRnSUdScGMyRmliR1VvS1NCN1hHNGdJQ0FnYVdZZ0tDRjBhR2x6TG1WdVlXSnNaV1FwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbVZ1WVdKc1pXUWdQU0JtWVd4elpWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWIzSnBaVzUwWVhScGIyNVRkWEJ3YjNKMEtTQjdYRzRnSUNBZ0lDQjNhVzVrYjNjdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpZ25aR1YyYVdObGIzSnBaVzUwWVhScGIyNG5MQ0IwYUdsekxtOXVSR1YyYVdObFQzSnBaVzUwWVhScGIyNHBYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBhR2x6TG0xdmRHbHZibE4xY0hCdmNuUXBJSHRjYmlBZ0lDQWdJSGRwYm1SdmR5NXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLQ2RrWlhacFkyVnRiM1JwYjI0bkxDQjBhR2x6TG05dVJHVjJhV05sVFc5MGFXOXVLVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCM2FXNWtiM2N1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lnbmJXOTFjMlZ0YjNabEp5d2dkR2hwY3k1dmJrMXZkWE5sVFc5MlpTbGNiaUFnSUNCOVhHNWNiaUFnSUNCM2FXNWtiM2N1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lnbmNtVnphWHBsSnl3Z2RHaHBjeTV2YmxkcGJtUnZkMUpsYzJsNlpTbGNiaUFnSUNCeWNVRnVSbkl1WTJGdVkyVnNLSFJvYVhNdWNtRm1LVnh1SUNCOVhHNWNiaUFnWTJGc2FXSnlZWFJsS0hnc0lIa3BJSHRjYmlBZ0lDQjBhR2x6TG1OaGJHbGljbUYwWlZnZ1BTQjRJRDA5UFNCMWJtUmxabWx1WldRZ1B5QjBhR2x6TG1OaGJHbGljbUYwWlZnZ09pQjRYRzRnSUNBZ2RHaHBjeTVqWVd4cFluSmhkR1ZaSUQwZ2VTQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z2RHaHBjeTVqWVd4cFluSmhkR1ZaSURvZ2VWeHVJQ0I5WEc1Y2JpQWdhVzUyWlhKMEtIZ3NJSGtwSUh0Y2JpQWdJQ0IwYUdsekxtbHVkbVZ5ZEZnZ1BTQjRJRDA5UFNCMWJtUmxabWx1WldRZ1B5QjBhR2x6TG1sdWRtVnlkRmdnT2lCNFhHNGdJQ0FnZEdocGN5NXBiblpsY25SWklEMGdlU0E5UFQwZ2RXNWtaV1pwYm1Wa0lEOGdkR2hwY3k1cGJuWmxjblJaSURvZ2VWeHVJQ0I5WEc1Y2JpQWdabkpwWTNScGIyNG9lQ3dnZVNrZ2UxeHVJQ0FnSUhSb2FYTXVabkpwWTNScGIyNVlJRDBnZUNBOVBUMGdkVzVrWldacGJtVmtJRDhnZEdocGN5NW1jbWxqZEdsdmJsZ2dPaUI0WEc0Z0lDQWdkR2hwY3k1bWNtbGpkR2x2YmxrZ1BTQjVJRDA5UFNCMWJtUmxabWx1WldRZ1B5QjBhR2x6TG1aeWFXTjBhVzl1V1NBNklIbGNiaUFnZlZ4dVhHNGdJSE5qWVd4aGNpaDRMQ0I1S1NCN1hHNGdJQ0FnZEdocGN5NXpZMkZzWVhKWUlEMGdlQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lEOGdkR2hwY3k1elkyRnNZWEpZSURvZ2VGeHVJQ0FnSUhSb2FYTXVjMk5oYkdGeVdTQTlJSGtnUFQwOUlIVnVaR1ZtYVc1bFpDQS9JSFJvYVhNdWMyTmhiR0Z5V1NBNklIbGNiaUFnZlZ4dVhHNGdJR3hwYldsMEtIZ3NJSGtwSUh0Y2JpQWdJQ0IwYUdsekxteHBiV2wwV0NBOUlIZ2dQVDA5SUhWdVpHVm1hVzVsWkNBL0lIUm9hWE11YkdsdGFYUllJRG9nZUZ4dUlDQWdJSFJvYVhNdWJHbHRhWFJaSUQwZ2VTQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z2RHaHBjeTVzYVcxcGRGa2dPaUI1WEc0Z0lIMWNibHh1SUNCdmNtbG5hVzRvZUN3Z2VTa2dlMXh1SUNBZ0lIUm9hWE11YjNKcFoybHVXQ0E5SUhnZ1BUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhSb2FYTXViM0pwWjJsdVdDQTZJSGhjYmlBZ0lDQjBhR2x6TG05eWFXZHBibGtnUFNCNUlEMDlQU0IxYm1SbFptbHVaV1FnUHlCMGFHbHpMbTl5YVdkcGJsa2dPaUI1WEc0Z0lIMWNibHh1SUNCelpYUkpibkIxZEVWc1pXMWxiblFvWld4bGJXVnVkQ2tnZTF4dUlDQWdJSFJvYVhNdWFXNXdkWFJGYkdWdFpXNTBJRDBnWld4bGJXVnVkRnh1SUNBZ0lIUm9hWE11ZFhCa1lYUmxSR2x0Wlc1emFXOXVjeWdwWEc0Z0lIMWNibHh1SUNCelpYUlFiM05wZEdsdmJpaGxiR1Z0Wlc1MExDQjRMQ0I1S1NCN1hHNGdJQ0FnZUNBOUlIZ3VkRzlHYVhobFpDaDBhR2x6TG5CeVpXTnBjMmx2YmlrZ0t5QW5jSGduWEc0Z0lDQWdlU0E5SUhrdWRHOUdhWGhsWkNoMGFHbHpMbkJ5WldOcGMybHZiaWtnS3lBbmNIZ25YRzRnSUNBZ2FXWWdLSFJvYVhNdWRISmhibk5tYjNKdE0wUlRkWEJ3YjNKMEtTQjdYRzRnSUNBZ0lDQm9aV3h3WlhKekxtTnpjeWhsYkdWdFpXNTBMQ0FuZEhKaGJuTm1iM0p0Snl3Z0ozUnlZVzV6YkdGMFpUTmtLQ2NnS3lCNElDc2dKeXduSUNzZ2VTQXJJQ2NzTUNrbktWeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RHaHBjeTUwY21GdWMyWnZjbTB5UkZOMWNIQnZjblFwSUh0Y2JpQWdJQ0FnSUdobGJIQmxjbk11WTNOektHVnNaVzFsYm5Rc0lDZDBjbUZ1YzJadmNtMG5MQ0FuZEhKaGJuTnNZWFJsS0NjZ0t5QjRJQ3NnSnl3bklDc2dlU0FySUNjcEp5bGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNXNaV1owSUQwZ2VGeHVJQ0FnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzUwYjNBZ1BTQjVYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdiMjVQY21sbGJuUmhkR2x2YmxScGJXVnlLQ2tnZTF4dUlDQWdJR2xtSUNoMGFHbHpMbTl5YVdWdWRHRjBhVzl1VTNWd2NHOXlkQ0FtSmlCMGFHbHpMbTl5YVdWdWRHRjBhVzl1VTNSaGRIVnpJRDA5UFNBd0tTQjdYRzRnSUNBZ0lDQjBhR2x6TG1ScGMyRmliR1VvS1Z4dUlDQWdJQ0FnZEdocGN5NXZjbWxsYm5SaGRHbHZibE4xY0hCdmNuUWdQU0JtWVd4elpWeHVJQ0FnSUNBZ2RHaHBjeTVsYm1GaWJHVW9LVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCMGFHbHpMbVJ2VW1WaFpIbERZV3hzWW1GamF5Z3BYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdiMjVOYjNScGIyNVVhVzFsY2lncElIdGNiaUFnSUNCcFppQW9kR2hwY3k1dGIzUnBiMjVUZFhCd2IzSjBJQ1ltSUhSb2FYTXViVzkwYVc5dVUzUmhkSFZ6SUQwOVBTQXdLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtUnBjMkZpYkdVb0tWeHVJQ0FnSUNBZ2RHaHBjeTV0YjNScGIyNVRkWEJ3YjNKMElEMGdabUZzYzJWY2JpQWdJQ0FnSUhSb2FYTXVaVzVoWW14bEtDbGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZEdocGN5NWtiMUpsWVdSNVEyRnNiR0poWTJzb0tWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHOXVRMkZzYVdKeVlYUnBiMjVVYVcxbGNpZ3BJSHRjYmlBZ0lDQjBhR2x6TG1OaGJHbGljbUYwYVc5dVJteGhaeUE5SUhSeWRXVmNiaUFnZlZ4dVhHNGdJRzl1VjJsdVpHOTNVbVZ6YVhwbEtDa2dlMXh1SUNBZ0lIUm9hWE11ZFhCa1lYUmxSR2x0Wlc1emFXOXVjeWdwWEc0Z0lIMWNibHh1SUNCdmJrRnVhVzFoZEdsdmJrWnlZVzFsS0NrZ2UxeHVJQ0FnSUhSb2FYTXVkWEJrWVhSbFFtOTFibVJ6S0NsY2JpQWdJQ0JzWlhRZ1kyRnNhV0p5WVhSbFpFbHVjSFYwV0NBOUlIUm9hWE11YVc1d2RYUllJQzBnZEdocGN5NWpZV3hwWW5KaGRHbHZibGdzWEc0Z0lDQWdJQ0FnSUdOaGJHbGljbUYwWldSSmJuQjFkRmtnUFNCMGFHbHpMbWx1Y0hWMFdTQXRJSFJvYVhNdVkyRnNhV0p5WVhScGIyNVpYRzRnSUNBZ2FXWWdLQ2hOWVhSb0xtRmljeWhqWVd4cFluSmhkR1ZrU1c1d2RYUllLU0ErSUhSb2FYTXVZMkZzYVdKeVlYUnBiMjVVYUhKbGMyaHZiR1FwSUh4OElDaE5ZWFJvTG1GaWN5aGpZV3hwWW5KaGRHVmtTVzV3ZFhSWktTQStJSFJvYVhNdVkyRnNhV0p5WVhScGIyNVVhSEpsYzJodmJHUXBLU0I3WEc0Z0lDQWdJQ0IwYUdsekxuRjFaWFZsUTJGc2FXSnlZWFJwYjI0b01DbGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUm9hWE11Y0c5eWRISmhhWFFwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViVzkwYVc5dVdDQTlJSFJvYVhNdVkyRnNhV0p5WVhSbFdDQS9JR05oYkdsaWNtRjBaV1JKYm5CMWRGa2dPaUIwYUdsekxtbHVjSFYwV1Z4dUlDQWdJQ0FnZEdocGN5NXRiM1JwYjI1WklEMGdkR2hwY3k1allXeHBZbkpoZEdWWklEOGdZMkZzYVdKeVlYUmxaRWx1Y0hWMFdDQTZJSFJvYVhNdWFXNXdkWFJZWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUm9hWE11Ylc5MGFXOXVXQ0E5SUhSb2FYTXVZMkZzYVdKeVlYUmxXQ0EvSUdOaGJHbGljbUYwWldSSmJuQjFkRmdnT2lCMGFHbHpMbWx1Y0hWMFdGeHVJQ0FnSUNBZ2RHaHBjeTV0YjNScGIyNVpJRDBnZEdocGN5NWpZV3hwWW5KaGRHVlpJRDhnWTJGc2FXSnlZWFJsWkVsdWNIVjBXU0E2SUhSb2FYTXVhVzV3ZFhSWlhHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdWJXOTBhVzl1V0NBcVBTQjBhR2x6TG1Wc1pXMWxiblJYYVdSMGFDQXFJQ2gwYUdsekxuTmpZV3hoY2xnZ0x5QXhNREFwWEc0Z0lDQWdkR2hwY3k1dGIzUnBiMjVaSUNvOUlIUm9hWE11Wld4bGJXVnVkRWhsYVdkb2RDQXFJQ2gwYUdsekxuTmpZV3hoY2xrZ0x5QXhNREFwWEc0Z0lDQWdhV1lnS0NGcGMwNWhUaWh3WVhKelpVWnNiMkYwS0hSb2FYTXViR2x0YVhSWUtTa3BJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXOTBhVzl1V0NBOUlHaGxiSEJsY25NdVkyeGhiWEFvZEdocGN5NXRiM1JwYjI1WUxDQXRkR2hwY3k1c2FXMXBkRmdzSUhSb2FYTXViR2x0YVhSWUtWeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb0lXbHpUbUZPS0hCaGNuTmxSbXh2WVhRb2RHaHBjeTVzYVcxcGRGa3BLU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXRiM1JwYjI1WklEMGdhR1ZzY0dWeWN5NWpiR0Z0Y0NoMGFHbHpMbTF2ZEdsdmJsa3NJQzEwYUdsekxteHBiV2wwV1N3Z2RHaHBjeTVzYVcxcGRGa3BYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXVkbVZzYjJOcGRIbFlJQ3M5SUNoMGFHbHpMbTF2ZEdsdmJsZ2dMU0IwYUdsekxuWmxiRzlqYVhSNVdDa2dLaUIwYUdsekxtWnlhV04wYVc5dVdGeHVJQ0FnSUhSb2FYTXVkbVZzYjJOcGRIbFpJQ3M5SUNoMGFHbHpMbTF2ZEdsdmJsa2dMU0IwYUdsekxuWmxiRzlqYVhSNVdTa2dLaUIwYUdsekxtWnlhV04wYVc5dVdWeHVJQ0FnSUdadmNpQW9iR1YwSUdsdVpHVjRJRDBnTURzZ2FXNWtaWGdnUENCMGFHbHpMbXhoZVdWeWN5NXNaVzVuZEdnN0lHbHVaR1Y0S3lzcElIdGNiaUFnSUNBZ0lHeGxkQ0JzWVhsbGNpQTlJSFJvYVhNdWJHRjVaWEp6VzJsdVpHVjRYU3hjYmlBZ0lDQWdJQ0FnSUNCa1pYQjBhRmdnUFNCMGFHbHpMbVJsY0hSb2MxaGJhVzVrWlhoZExGeHVJQ0FnSUNBZ0lDQWdJR1JsY0hSb1dTQTlJSFJvYVhNdVpHVndkR2h6V1Z0cGJtUmxlRjBzWEc0Z0lDQWdJQ0FnSUNBZ2VFOW1abk5sZENBOUlIUm9hWE11ZG1Wc2IyTnBkSGxZSUNvZ0tHUmxjSFJvV0NBcUlDaDBhR2x6TG1sdWRtVnlkRmdnUHlBdE1TQTZJREVwS1N4Y2JpQWdJQ0FnSUNBZ0lDQjVUMlptYzJWMElEMGdkR2hwY3k1MlpXeHZZMmwwZVZrZ0tpQW9aR1Z3ZEdoWklDb2dLSFJvYVhNdWFXNTJaWEowV1NBL0lDMHhJRG9nTVNrcFhHNGdJQ0FnSUNCMGFHbHpMbk5sZEZCdmMybDBhVzl1S0d4aGVXVnlMQ0I0VDJabWMyVjBMQ0I1VDJabWMyVjBLVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbkpoWmlBOUlISnhRVzVHY2loMGFHbHpMbTl1UVc1cGJXRjBhVzl1Um5KaGJXVXBYRzRnSUgxY2JseHVJQ0J5YjNSaGRHVW9ZbVYwWVN3Z1oyRnRiV0VwZTF4dUlDQWdJQzh2SUVWNGRISmhZM1FnVW05MFlYUnBiMjVjYmlBZ0lDQnNaWFFnZUNBOUlDaGlaWFJoSUh4OElEQXBJQzhnVFVGSFNVTmZUbFZOUWtWU0xDQXZMeUFnTFRrd0lEbzZJRGt3WEc0Z0lDQWdJQ0FnSUhrZ1BTQW9aMkZ0YldFZ2ZId2dNQ2tnTHlCTlFVZEpRMTlPVlUxQ1JWSWdMeThnTFRFNE1DQTZPaUF4T0RCY2JseHVJQ0FnSUM4dklFUmxkR1ZqZENCUGNtbGxiblJoZEdsdmJpQkRhR0Z1WjJWY2JpQWdJQ0JzWlhRZ2NHOXlkSEpoYVhRZ1BTQjBhR2x6TG5kcGJtUnZkMGhsYVdkb2RDQStJSFJvYVhNdWQybHVaRzkzVjJsa2RHaGNiaUFnSUNCcFppQW9kR2hwY3k1d2IzSjBjbUZwZENBaFBUMGdjRzl5ZEhKaGFYUXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWNHOXlkSEpoYVhRZ1BTQndiM0owY21GcGRGeHVJQ0FnSUNBZ2RHaHBjeTVqWVd4cFluSmhkR2x2Ymtac1lXY2dQU0IwY25WbFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11WTJGc2FXSnlZWFJwYjI1R2JHRm5LU0I3WEc0Z0lDQWdJQ0IwYUdsekxtTmhiR2xpY21GMGFXOXVSbXhoWnlBOUlHWmhiSE5sWEc0Z0lDQWdJQ0IwYUdsekxtTmhiR2xpY21GMGFXOXVXQ0E5SUhoY2JpQWdJQ0FnSUhSb2FYTXVZMkZzYVdKeVlYUnBiMjVaSUQwZ2VWeHVJQ0FnSUgxY2JseHVJQ0FnSUhSb2FYTXVhVzV3ZFhSWUlEMGdlRnh1SUNBZ0lIUm9hWE11YVc1d2RYUlpJRDBnZVZ4dUlDQjlYRzVjYmlBZ2IyNUVaWFpwWTJWUGNtbGxiblJoZEdsdmJpaGxkbVZ1ZENrZ2UxeHVJQ0FnSUd4bGRDQmlaWFJoSUQwZ1pYWmxiblF1WW1WMFlWeHVJQ0FnSUd4bGRDQm5ZVzF0WVNBOUlHVjJaVzUwTG1kaGJXMWhYRzRnSUNBZ2FXWWdLR0psZEdFZ0lUMDlJRzUxYkd3Z0ppWWdaMkZ0YldFZ0lUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lIUm9hWE11YjNKcFpXNTBZWFJwYjI1VGRHRjBkWE1nUFNBeFhHNGdJQ0FnSUNCMGFHbHpMbkp2ZEdGMFpTaGlaWFJoTENCbllXMXRZU2xjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J2YmtSbGRtbGpaVTF2ZEdsdmJpaGxkbVZ1ZENrZ2UxeHVJQ0FnSUd4bGRDQmlaWFJoSUQwZ1pYWmxiblF1Y205MFlYUnBiMjVTWVhSbExtSmxkR0ZjYmlBZ0lDQnNaWFFnWjJGdGJXRWdQU0JsZG1WdWRDNXliM1JoZEdsdmJsSmhkR1V1WjJGdGJXRmNiaUFnSUNCcFppQW9ZbVYwWVNBaFBUMGdiblZzYkNBbUppQm5ZVzF0WVNBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0YjNScGIyNVRkR0YwZFhNZ1BTQXhYRzRnSUNBZ0lDQjBhR2x6TG5KdmRHRjBaU2hpWlhSaExDQm5ZVzF0WVNsY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCdmJrMXZkWE5sVFc5MlpTaGxkbVZ1ZENrZ2UxeHVJQ0FnSUd4bGRDQmpiR2xsYm5SWUlEMGdaWFpsYm5RdVkyeHBaVzUwV0N4Y2JpQWdJQ0FnSUNBZ1kyeHBaVzUwV1NBOUlHVjJaVzUwTG1Oc2FXVnVkRmxjYmx4dUlDQWdJQzh2SUhKbGMyVjBJR2x1Y0hWMElIUnZJR05sYm5SbGNpQnBaaUJvYjNabGNrOXViSGtnYVhNZ2MyVjBJR0Z1WkNCM1pTZHlaU0J1YjNRZ2FHOTJaWEpwYm1jZ2RHaGxJR1ZzWlcxbGJuUmNiaUFnSUNCcFppaDBhR2x6TG1odmRtVnlUMjVzZVNBbUpseHVJQ0FnSUNBZ0tDaGpiR2xsYm5SWUlEd2dkR2hwY3k1bGJHVnRaVzUwVUc5emFYUnBiMjVZSUh4OElHTnNhV1Z1ZEZnZ1BpQjBhR2x6TG1Wc1pXMWxiblJRYjNOcGRHbHZibGdnS3lCMGFHbHpMbVZzWlcxbGJuUlhhV1IwYUNrZ2ZIeGNiaUFnSUNBZ0lDaGpiR2xsYm5SWklEd2dkR2hwY3k1bGJHVnRaVzUwVUc5emFYUnBiMjVaSUh4OElHTnNhV1Z1ZEZrZ1BpQjBhR2x6TG1Wc1pXMWxiblJRYjNOcGRHbHZibGtnS3lCMGFHbHpMbVZzWlcxbGJuUklaV2xuYUhRcEtTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVjSFYwV0NBOUlEQmNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJuQjFkRmtnUFNBd1hHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11Y21Wc1lYUnBkbVZKYm5CMWRDa2dlMXh1SUNBZ0lDQWdMeThnUTJ4cGNDQnRiM1Z6WlNCamIyOXlaR2x1WVhSbGN5QnBibk5wWkdVZ1pXeGxiV1Z1ZENCaWIzVnVaSE11WEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTVqYkdsd1VtVnNZWFJwZG1WSmJuQjFkQ2tnZTF4dUlDQWdJQ0FnSUNCamJHbGxiblJZSUQwZ1RXRjBhQzV0WVhnb1kyeHBaVzUwV0N3Z2RHaHBjeTVsYkdWdFpXNTBVRzl6YVhScGIyNVlLVnh1SUNBZ0lDQWdJQ0JqYkdsbGJuUllJRDBnVFdGMGFDNXRhVzRvWTJ4cFpXNTBXQ3dnZEdocGN5NWxiR1Z0Wlc1MFVHOXphWFJwYjI1WUlDc2dkR2hwY3k1bGJHVnRaVzUwVjJsa2RHZ3BYRzRnSUNBZ0lDQWdJR05zYVdWdWRGa2dQU0JOWVhSb0xtMWhlQ2hqYkdsbGJuUlpMQ0IwYUdsekxtVnNaVzFsYm5SUWIzTnBkR2x2YmxrcFhHNGdJQ0FnSUNBZ0lHTnNhV1Z1ZEZrZ1BTQk5ZWFJvTG0xcGJpaGpiR2xsYm5SWkxDQjBhR2x6TG1Wc1pXMWxiblJRYjNOcGRHbHZibGtnS3lCMGFHbHpMbVZzWlcxbGJuUklaV2xuYUhRcFhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNBdkx5QkRZV3hqZFd4aGRHVWdhVzV3ZFhRZ2NtVnNZWFJwZG1VZ2RHOGdkR2hsSUdWc1pXMWxiblF1WEc0Z0lDQWdJQ0JwWmloMGFHbHpMbVZzWlcxbGJuUlNZVzVuWlZnZ0ppWWdkR2hwY3k1bGJHVnRaVzUwVW1GdVoyVlpLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzV3ZFhSWUlEMGdLR05zYVdWdWRGZ2dMU0IwYUdsekxtVnNaVzFsYm5SUWIzTnBkR2x2YmxnZ0xTQjBhR2x6TG1Wc1pXMWxiblJEWlc1MFpYSllLU0F2SUhSb2FYTXVaV3hsYldWdWRGSmhibWRsV0Z4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMFdTQTlJQ2hqYkdsbGJuUlpJQzBnZEdocGN5NWxiR1Z0Wlc1MFVHOXphWFJwYjI1WklDMGdkR2hwY3k1bGJHVnRaVzUwUTJWdWRHVnlXU2tnTHlCMGFHbHpMbVZzWlcxbGJuUlNZVzVuWlZsY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdMeThnUTJGc1kzVnNZWFJsSUdsdWNIVjBJSEpsYkdGMGFYWmxJSFJ2SUhSb1pTQjNhVzVrYjNjdVhHNGdJQ0FnSUNCcFppaDBhR2x6TG5kcGJtUnZkMUpoWkdsMWMxZ2dKaVlnZEdocGN5NTNhVzVrYjNkU1lXUnBkWE5aS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1d2RYUllJRDBnS0dOc2FXVnVkRmdnTFNCMGFHbHpMbmRwYm1SdmQwTmxiblJsY2xncElDOGdkR2hwY3k1M2FXNWtiM2RTWVdScGRYTllYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXdkWFJaSUQwZ0tHTnNhV1Z1ZEZrZ0xTQjBhR2x6TG5kcGJtUnZkME5sYm5SbGNsa3BJQzhnZEdocGN5NTNhVzVrYjNkU1lXUnBkWE5aWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnWkdWemRISnZlU2dwSUh0Y2JpQWdJQ0IwYUdsekxtUnBjMkZpYkdVb0tWeHVYRzRnSUNBZ1kyeGxZWEpVYVcxbGIzVjBLSFJvYVhNdVkyRnNhV0p5WVhScGIyNVVhVzFsY2lsY2JpQWdJQ0JqYkdWaGNsUnBiV1Z2ZFhRb2RHaHBjeTVrWlhSbFkzUnBiMjVVYVcxbGNpbGNibHh1SUNBZ0lIUm9hWE11Wld4bGJXVnVkQzV5WlcxdmRtVkJkSFJ5YVdKMWRHVW9KM04wZVd4bEp5bGNiaUFnSUNCbWIzSWdLR3hsZENCcGJtUmxlQ0E5SURBN0lHbHVaR1Y0SUR3Z2RHaHBjeTVzWVhsbGNuTXViR1Z1WjNSb095QnBibVJsZUNzcktTQjdYRzRnSUNBZ0lDQjBhR2x6TG14aGVXVnljMXRwYm1SbGVGMHVjbVZ0YjNabFFYUjBjbWxpZFhSbEtDZHpkSGxzWlNjcFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWkdWc1pYUmxJSFJvYVhNdVpXeGxiV1Z1ZEZ4dUlDQWdJR1JsYkdWMFpTQjBhR2x6TG14aGVXVnljMXh1SUNCOVhHNWNiaUFnZG1WeWMybHZiaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdKek11TVM0d0oxeHVJQ0I5WEc1Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JRWVhKaGJHeGhlRnh1SWwxOVxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiaW1wb3J0IFBhcmFsbGF4IGZyb20gJ3BhcmFsbGF4LWpzJztcclxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcbi8vIGltcG9ydCBcIi4vYXRyaS5ibXBcIlxyXG5pbXBvcnQgJy4vYXRyaS53ZWJwJztcclxuaW1wb3J0ICcuL2NsYXNzcm9vbS1hbS53ZWJwJztcclxuaW1wb3J0ICcuL2NsYXNzcm9vbS1wbS53ZWJwJztcclxuaW1wb3J0ICcuL3RtaW4ud2VicCc7XHJcbmltcG9ydCAnLi90cmlyLndlYnAnO1xyXG52YXIgc2NlbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NlbmUnKTtcclxudmFyIHBhcmFsbGF4SW5zdGFuY2UgPSBuZXcgUGFyYWxsYXgoc2NlbmUpO1xyXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjaycpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
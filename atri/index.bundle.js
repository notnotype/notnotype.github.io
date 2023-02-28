/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/animejs/lib/anime.es.js":
/*!**********************************************!*\
  !*** ./node_modules/animejs/lib/anime.es.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

// Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};

var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};

var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) { return Array.isArray(a); },
  obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
  svg: function (a) { return a instanceof SVGElement; },
  inp: function (a) { return a instanceof HTMLInputElement; },
  dom: function (a) { return a.nodeType || is.svg(a); },
  str: function (a) { return typeof a === 'string'; },
  fnc: function (a) { return typeof a === 'function'; },
  und: function (a) { return typeof a === 'undefined'; },
  nil: function (a) { return is.und(a) || a === null; },
  hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
  rgb: function (a) { return /^rgb/.test(a); },
  hsl: function (a) { return /^hsl/.test(a); },
  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; },
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
}

// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

function spring(string, duration) {

  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? (duration * t) / 1000 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) { return t; }
    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];
    if (cached) { return cached; }
    var frame = 1/6;
    var elapsed = 0;
    var rest = 0;
    while(true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) { break; }
      } else {
        rest = 0;
      }
    }
    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;

}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if ( steps === void 0 ) steps = 10;

  return function (t) { return Math.ceil((minMax(t, 0.000001, 1)) * steps) * (1 / steps); };
}

// BezierEasing https://github.com/gre/bezier-easing

var bezier = (function () {

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
  function C(aA1)      { return 3.0 * aA1 }

  function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
  function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) { return aGuessT; }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {

    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {

      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;

      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }

    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) { return x; }
      if (x === 0 || x === 1) { return x; }
      return calcBezier(getTForX(x), mY1, mY2);
    }

  }

  return bezier;

})();

var penner = (function () {

  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

  var eases = { linear: function () { return function (t) { return t; }; } };

  var functionEasings = {
    Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
    Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
    Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
    Bounce: function () { return function (t) {
      var pow2, b = 4;
      while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
      return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
    }; },
    Elastic: function (amplitude, period) {
      if ( amplitude === void 0 ) amplitude = 1;
      if ( period === void 0 ) period = .5;

      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return (t === 0 || t === 1) ? t : 
          -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
      }
    }
  };

  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
  });

  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;
    eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
    eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
      1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
    eases['easeOutIn' + name] = function (a, b) { return function (t) { return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : 
      (easeIn(a, b)(t * 2 - 1) + 1) / 2; }; };
  });

  return eases;

})();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) { return easing; }
  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case 'spring' : return spring(easing, duration);
    case 'cubicBezier' : return applyArguments(bezier, args);
    case 'steps' : return applyArguments(steps, args);
    default : return applyArguments(ease, args);
  }
}

// Strings

function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
}

// Arrays

function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
}

function toArray(o) {
  if (is.arr(o)) { return o; }
  if (is.str(o)) { o = selectString(o) || o; }
  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) { return a === val; });
}

// Objects

function cloneObject(o) {
  var clone = {};
  for (var p in o) { clone[p] = o[p]; }
  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
  return o;
}

// Colors

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return ("rgba(" + r + "," + g + "," + b + ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p, q, t) {
    if (t < 0) { t += 1; }
    if (t > 1) { t -= 1; }
    if (t < 1/6) { return p + (q - p) * 6 * t; }
    if (t < 1/2) { return q; }
    if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
    return p;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
}

function colorToRgb(val) {
  if (is.rgb(val)) { return rgbToRgba(val); }
  if (is.hex(val)) { return hexToRgba(val); }
  if (is.hsl(val)) { return hslToRgba(val); }
}

// Units

function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) { return split[1]; }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
}

// Values

function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) { return val; }
  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) { return cached; }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || (is.svg(el) && el[prop]))) { return 'attribute'; }
  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
  if (el[prop] != null) { return 'object'; }
}

function getElementTransforms(el) {
  if (!is.dom(el)) { return; }
  var str = el.style.transform || '';
  var reg  = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform': return getTransformValue(target, propName, animatable, unit);
    case 'css': return getCSSValue(target, propName, unit);
    case 'attribute': return getAttribute(target, propName);
    default: return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) { return to; }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));
  switch (operator[0][0]) {
    case '+': return x + y + u;
    case '-': return x - y + u;
    case '*': return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) { return colorToRgb(val); }
  if (/\s/g.test(val)) { return val; }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) { return unitLess + unit; }
  return unitLess;
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
}

function getLineLength(el) {
  return getDistance(
    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
    {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
  );
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0 ; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
    previousPos = currentPos;
  }
  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}

// Path animation

function getTotalLength(el) {
  if (el.getTotalLength) { return el.getTotalLength(); }
  switch(el.tagName.toLowerCase()) {
    case 'circle': return getCircleLength(el);
    case 'rect': return getRectLength(el);
    case 'line': return getLineLength(el);
    case 'polyline': return getPolylineLength(el);
    case 'polygon': return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
}

// Motion path

function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) { break; }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  }
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    }
  }
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if ( offset === void 0 ) offset = 0;

    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
  switch (path.property) {
    case 'x': return (p.x - svg.x) * scaleX;
    case 'y': return (p.y - svg.y) * scaleY;
    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}

// Decompose value

function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: (is.str(val) || unit) ? value.split(rgx) : []
  }
}

// Animatables

function parseTargets(targets) {
  var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
  return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = (l === 2 && !is.obj(prop[0]));
    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {value: prop};
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
    // Default endDelay value should only be applied to the last tween
    if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
    return obj;
  }).map(function (k) { return mergeObjects(k, settings); });
}


function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
  .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
  var properties = {};
  var loop = function ( i ) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) { newKey.value = key[p]; }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop( i );
  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}

// Tweens

function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function (v) { return getFunctionValue(v, animatable); });
      if (value.length === 1) { value = value[0]; }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) { to = previousValue; }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) { tween.round = 1; }
    previousTween = tween;
    return tween;
  });
}

// Tween progress

var setProgressValue = {
  css: function (t, p, v) { return t.style[p] = v; },
  attribute: function (t, p, v) { return t.setAttribute(p, v); },
  object: function (t, p, v) { return t[p] = v; },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
      t.style.transform = str;
    }
  }
};

// Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}

// Animations

function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    }
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) { return !is.und(a); });
}

// Create Instance

function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}

// Core

var activeInstances = [];

var engine = (function () {
  var raf;

  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
      raf = requestAnimationFrame(step);
    }
  }
  function step(t) {
    // memo on algorithm issue:
    // dangerous iteration over mutable `activeInstances`
    // (that collection may be updated from within callbacks of `tick`-ed animation instances)
    var activeInstancesLength = activeInstances.length;
    var i = 0;
    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];
      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }
    raf = i > 0 ? requestAnimationFrame(step) : undefined;
  }

  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) { return; }

    if (isDocumentHidden()) {
      // suspend ticks
      raf = cancelAnimationFrame(raf);
    } else { // is back to active tab
      // first adjust animations to consider the time that ticks were suspended
      activeInstances.forEach(
        function (instance) { return instance ._onDocumentVisibility(); }
      );
      engine();
    }
  }
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  return play;
})();

function isDocumentHidden() {
  return !!document && document.hidden;
}

// Public Instance

function anime(params) {
  if ( params === void 0 ) params = {};


  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }
    instance.reversed = !instance.reversed;
    children.forEach(function (child) { return child.reversed = instance.reversed; });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) { child.seek(time - child.timelineOffset); }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
    } else {
      for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
      if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = (void 0);
      for (var n = 0; n < toNumbersLength; n++) {
        var value = (void 0);
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + (eased * (toNumber - fromNumber));
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      // Manual Array.reduce for better performances
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) { syncInstanceChildren(insTime); }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }
      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) { setCallback('update'); }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');
          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;
        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--;) { instance.children[i].reset(); }
    if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };

  // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
  instance._onDocumentVisibility = resetTime;

  // Set Value helper

  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function(t) {
    now = t;
    if (!startTime) { startTime = now; }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };

  instance.play = function() {
    if (!instance.paused) { return; }
    if (instance.completed) { instance.reset(); }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };

  instance.reverse = function() {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };

  instance.restart = function() {
    instance.reset();
    instance.play();
  };

  instance.remove = function(targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };

  instance.reset();

  if (instance.autoplay) { instance.play(); }

  return instance;

}

// Remove targets from animation

function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);
  for (var c = children.length; c--;) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);
    if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
  }
  if (!animations.length && !children.length) { instance.pause(); }
}

function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targetsArray, instance);
  }
}

// Stagger helpers

function stagger(val, params) {
  if ( params === void 0 ) params = {};

  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) { fromIndex = 0; }
    if (fromCenter) { fromIndex = (t - 1) / 2; }
    if (fromLast) { fromIndex = t - 1; }
    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
          var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
          var toX = index%grid[0];
          var toY = Math.floor(index/grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') { value = -distanceX; }
          if (axis === 'y') { value = -distanceY; }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
  }
}

// Timeline

function timeline(params) {
  if ( params === void 0 ) params = {};

  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
    function passThrough(ins) { ins.passThrough = true; }
    for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) { tl.play(); }
    return tl;
  };
  return tl;
}

anime.version = '3.2.1';
anime.speed = 1;
// TODO:#review: naming, documentation
anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (anime);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/generic/generic/generic.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/generic/generic/generic.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _assets_fonts_Sacramento_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/fonts/Sacramento-Regular.ttf */ "./src/assets/fonts/Sacramento-Regular.ttf");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_Sacramento_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after, body {\n  margin: 0;\n  padding: 0;\n  border: none;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: art-font;\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\n.art-font {\n  font-family: art-font, sans-serif;\n}\n\n.hidden {\n  display: none;\n}\n\n.sticky {\n  position: sticky;\n  top: 0;\n}\n\n.ofh {\n  overflow: hidden;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.text-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  color: white;\n  font-size: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/generic/generic/generic.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,YAAA;EACA,sBAAA;AACF;;AAKA;EACE,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,+DAAA;AAFF;AAKA;EACE,iCAAA;AAHF;;AAMA;EACE,aAAA;AAHF;;AAMA;EACE,gBAAA;EACA,MAAA;AAHF;;AAMA;EACE,gBAAA;AAHF;;AAMA;EACE,kBAAA;AAHF;;AAMA;EACE,kBAAA;AAHF;;AAYA;EALE,aAAA;EACA,uBAAA;EACA,mBAAA;AAHF;;AAoBA;EAnBE,aAAA;EACA,uBAAA;EACA,mBAAA;EASA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,MAAA;EACA,YAAA;EACA,eAAA;AALF","sourcesContent":["*, *::before, *::after, body {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: none;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n// font register\r\n@font-face {\r\n  font-family: art-font;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-display: swap;\r\n  src: url('../../assets/fonts/Sacramento-Regular.ttf') format(\"truetype\")\r\n}\r\n\r\n.art-font {\r\n  font-family: art-font, sans-serif;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.sticky {\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.ofh {\r\n  overflow: hidden;\r\n}\r\n\r\n.absolute {\r\n  position: absolute;\r\n}\r\n\r\n.relative {\r\n  position: relative;\r\n}\r\n\r\n@mixin flex-center {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.flex-center {\r\n  @include flex-center;\r\n}\r\n\r\n@mixin text-center {\r\n  @include flex-center;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  color: white;\r\n  font-size: 2rem;\r\n}\r\n\r\n.text-center {\r\n  @include text-center;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/generic/test/test.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/generic/test/test.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".red {\n  background-color: red;\n}\n\n.pink {\n  background-color: pink;\n}\n\n.green {\n  background-color: green;\n}\n\n.skyblue {\n  background-color: skyblue;\n}\n\n.blue {\n  background-color: blue;\n}\n\n.shadow {\n  box-shadow: 5px 5px 5px 5px grey;\n}", "",{"version":3,"sources":["webpack://./src/generic/test/test.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;AACF;;AAEA;EACE,sBAAA;AACF;;AAEA;EACE,uBAAA;AACF;;AAEA;EACE,yBAAA;AACF;;AAEA;EACE,sBAAA;AACF;;AAEA;EACE,gCAAA;AACF","sourcesContent":[".red {\r\n  background-color: red;\r\n}\r\n\r\n.pink {\r\n  background-color: pink;\r\n}\r\n\r\n.green {\r\n  background-color: green;\r\n}\r\n\r\n.skyblue {\r\n  background-color: skyblue;\r\n}\r\n\r\n.blue {\r\n  background-color: blue;\r\n}\r\n\r\n.shadow {\r\n  box-shadow: 5px 5px 5px 5px grey;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/css/anime.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/css/anime.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".anime-text-scrollout {\n  transform-origin: top;\n}", "",{"version":3,"sources":["webpack://./src/index/css/anime.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;AACF","sourcesContent":[".anime-text-scrollout {\r\n  transform-origin: top;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/css/index.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/css/index.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _assets_item052_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/item052.webp */ "./src/assets/item052.webp");
/* harmony import */ var _assets_logo_1_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/logo_1.webp */ "./src/assets/logo_1.webp");
/* harmony import */ var _assets_fonts_Sacramento_Regular_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/fonts/Sacramento-Regular.ttf */ "./src/assets/fonts/Sacramento-Regular.ttf");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_item052_webp__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_logo_1_webp__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_Sacramento_Regular_ttf__WEBPACK_IMPORTED_MODULE_5__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-wrapper .main-container .content-wrapper-1 {\n  height: 100vh;\n}\n.main-wrapper .main-container .content-wrapper-1-5 {\n  height: 105vh;\n}\n.main-wrapper .main-container .content-wrapper-1-10 {\n  height: 110vh;\n}\n.main-wrapper .main-container .content-wrapper-1-15 {\n  height: 115vh;\n}\n.main-wrapper .main-container .content-wrapper-1-25 {\n  height: 125vh;\n}\n.main-wrapper .main-container .content-wrapper-1-50 {\n  height: 150vh;\n}\n.main-wrapper .main-container .content-wrapper-1-75 {\n  height: 175vh;\n}\n.main-wrapper .main-container .content-wrapper-2 {\n  height: 200vh;\n}\n.main-wrapper .main-container .content-wrapper-2-5 {\n  height: 205vh;\n}\n.main-wrapper .main-container .content-wrapper-2-10 {\n  height: 210vh;\n}\n.main-wrapper .main-container .content-wrapper-2-15 {\n  height: 215vh;\n}\n.main-wrapper .main-container .content-wrapper-2-25 {\n  height: 225vh;\n}\n.main-wrapper .main-container .content-wrapper-2-50 {\n  height: 250vh;\n}\n.main-wrapper .main-container .content-wrapper-2-75 {\n  height: 275vh;\n}\n.main-wrapper .main-container .content-wrapper-3 {\n  height: 300vh;\n}\n.main-wrapper .main-container .content-wrapper-3-5 {\n  height: 305vh;\n}\n.main-wrapper .main-container .content-wrapper-3-10 {\n  height: 310vh;\n}\n.main-wrapper .main-container .content-wrapper-3-15 {\n  height: 315vh;\n}\n.main-wrapper .main-container .content-wrapper-3-25 {\n  height: 325vh;\n}\n.main-wrapper .main-container .content-wrapper-3-50 {\n  height: 350vh;\n}\n.main-wrapper .main-container .content-wrapper-3-75 {\n  height: 375vh;\n}\n.main-wrapper .main-container .content-wrapper-4 {\n  height: 400vh;\n}\n.main-wrapper .main-container .content-wrapper-4-5 {\n  height: 405vh;\n}\n.main-wrapper .main-container .content-wrapper-4-10 {\n  height: 410vh;\n}\n.main-wrapper .main-container .content-wrapper-4-15 {\n  height: 415vh;\n}\n.main-wrapper .main-container .content-wrapper-4-25 {\n  height: 425vh;\n}\n.main-wrapper .main-container .content-wrapper-4-50 {\n  height: 450vh;\n}\n.main-wrapper .main-container .content-wrapper-4-75 {\n  height: 475vh;\n}\n.main-wrapper .main-container .content-wrapper-5 {\n  height: 500vh;\n}\n.main-wrapper .main-container .content-wrapper-5-5 {\n  height: 505vh;\n}\n.main-wrapper .main-container .content-wrapper-5-10 {\n  height: 510vh;\n}\n.main-wrapper .main-container .content-wrapper-5-15 {\n  height: 515vh;\n}\n.main-wrapper .main-container .content-wrapper-5-25 {\n  height: 525vh;\n}\n.main-wrapper .main-container .content-wrapper-5-50 {\n  height: 550vh;\n}\n.main-wrapper .main-container .content-wrapper-5-75 {\n  height: 575vh;\n}\n.main-wrapper .main-container .content-wrapper-6 {\n  height: 600vh;\n}\n.main-wrapper .main-container .content-wrapper-6-5 {\n  height: 605vh;\n}\n.main-wrapper .main-container .content-wrapper-6-10 {\n  height: 610vh;\n}\n.main-wrapper .main-container .content-wrapper-6-15 {\n  height: 615vh;\n}\n.main-wrapper .main-container .content-wrapper-6-25 {\n  height: 625vh;\n}\n.main-wrapper .main-container .content-wrapper-6-50 {\n  height: 650vh;\n}\n.main-wrapper .main-container .content-wrapper-6-75 {\n  height: 675vh;\n}\n.main-wrapper .main-container .content-wrapper-7 {\n  height: 700vh;\n}\n.main-wrapper .main-container .content-wrapper-7-5 {\n  height: 705vh;\n}\n.main-wrapper .main-container .content-wrapper-7-10 {\n  height: 710vh;\n}\n.main-wrapper .main-container .content-wrapper-7-15 {\n  height: 715vh;\n}\n.main-wrapper .main-container .content-wrapper-7-25 {\n  height: 725vh;\n}\n.main-wrapper .main-container .content-wrapper-7-50 {\n  height: 750vh;\n}\n.main-wrapper .main-container .content-wrapper-7-75 {\n  height: 775vh;\n}\n.main-wrapper .main-container .content-wrapper-8 {\n  height: 800vh;\n}\n.main-wrapper .main-container .content-wrapper-8-5 {\n  height: 805vh;\n}\n.main-wrapper .main-container .content-wrapper-8-10 {\n  height: 810vh;\n}\n.main-wrapper .main-container .content-wrapper-8-15 {\n  height: 815vh;\n}\n.main-wrapper .main-container .content-wrapper-8-25 {\n  height: 825vh;\n}\n.main-wrapper .main-container .content-wrapper-8-50 {\n  height: 850vh;\n}\n.main-wrapper .main-container .content-wrapper-8-75 {\n  height: 875vh;\n}\n.main-wrapper .main-container .content-wrapper-9 {\n  height: 900vh;\n}\n.main-wrapper .main-container .content-wrapper-9-5 {\n  height: 905vh;\n}\n.main-wrapper .main-container .content-wrapper-9-10 {\n  height: 910vh;\n}\n.main-wrapper .main-container .content-wrapper-9-15 {\n  height: 915vh;\n}\n.main-wrapper .main-container .content-wrapper-9-25 {\n  height: 925vh;\n}\n.main-wrapper .main-container .content-wrapper-9-50 {\n  height: 950vh;\n}\n.main-wrapper .main-container .content-wrapper-9-75 {\n  height: 975vh;\n}\n.main-wrapper .main-container .content-wrapper-10 {\n  height: 1000vh;\n}\n.main-wrapper .main-container .content-wrapper-10-5 {\n  height: 1005vh;\n}\n.main-wrapper .main-container .content-wrapper-10-10 {\n  height: 1010vh;\n}\n.main-wrapper .main-container .content-wrapper-10-15 {\n  height: 1015vh;\n}\n.main-wrapper .main-container .content-wrapper-10-25 {\n  height: 1025vh;\n}\n.main-wrapper .main-container .content-wrapper-10-50 {\n  height: 1050vh;\n}\n.main-wrapper .main-container .content-wrapper-10-75 {\n  height: 1075vh;\n}\n.main-wrapper .main-container .content-wrapper-11 {\n  height: 1100vh;\n}\n.main-wrapper .main-container .content-wrapper-11-5 {\n  height: 1105vh;\n}\n.main-wrapper .main-container .content-wrapper-11-10 {\n  height: 1110vh;\n}\n.main-wrapper .main-container .content-wrapper-11-15 {\n  height: 1115vh;\n}\n.main-wrapper .main-container .content-wrapper-11-25 {\n  height: 1125vh;\n}\n.main-wrapper .main-container .content-wrapper-11-50 {\n  height: 1150vh;\n}\n.main-wrapper .main-container .content-wrapper-11-75 {\n  height: 1175vh;\n}\n.main-wrapper .main-container .content-wrapper-12 {\n  height: 1200vh;\n}\n.main-wrapper .main-container .content-wrapper-12-5 {\n  height: 1205vh;\n}\n.main-wrapper .main-container .content-wrapper-12-10 {\n  height: 1210vh;\n}\n.main-wrapper .main-container .content-wrapper-12-15 {\n  height: 1215vh;\n}\n.main-wrapper .main-container .content-wrapper-12-25 {\n  height: 1225vh;\n}\n.main-wrapper .main-container .content-wrapper-12-50 {\n  height: 1250vh;\n}\n.main-wrapper .main-container .content-wrapper-12-75 {\n  height: 1275vh;\n}\n.main-wrapper .main-container .content-wrapper-13 {\n  height: 1300vh;\n}\n.main-wrapper .main-container .content-wrapper-13-5 {\n  height: 1305vh;\n}\n.main-wrapper .main-container .content-wrapper-13-10 {\n  height: 1310vh;\n}\n.main-wrapper .main-container .content-wrapper-13-15 {\n  height: 1315vh;\n}\n.main-wrapper .main-container .content-wrapper-13-25 {\n  height: 1325vh;\n}\n.main-wrapper .main-container .content-wrapper-13-50 {\n  height: 1350vh;\n}\n.main-wrapper .main-container .content-wrapper-13-75 {\n  height: 1375vh;\n}\n.main-wrapper .main-container .content-wrapper-14 {\n  height: 1400vh;\n}\n.main-wrapper .main-container .content-wrapper-14-5 {\n  height: 1405vh;\n}\n.main-wrapper .main-container .content-wrapper-14-10 {\n  height: 1410vh;\n}\n.main-wrapper .main-container .content-wrapper-14-15 {\n  height: 1415vh;\n}\n.main-wrapper .main-container .content-wrapper-14-25 {\n  height: 1425vh;\n}\n.main-wrapper .main-container .content-wrapper-14-50 {\n  height: 1450vh;\n}\n.main-wrapper .main-container .content-wrapper-14-75 {\n  height: 1475vh;\n}\n.main-wrapper .main-container .content-wrapper-15 {\n  height: 1500vh;\n}\n.main-wrapper .main-container .content-wrapper-15-5 {\n  height: 1505vh;\n}\n.main-wrapper .main-container .content-wrapper-15-10 {\n  height: 1510vh;\n}\n.main-wrapper .main-container .content-wrapper-15-15 {\n  height: 1515vh;\n}\n.main-wrapper .main-container .content-wrapper-15-25 {\n  height: 1525vh;\n}\n.main-wrapper .main-container .content-wrapper-15-50 {\n  height: 1550vh;\n}\n.main-wrapper .main-container .content-wrapper-15-75 {\n  height: 1575vh;\n}\n.main-wrapper .main-container .content-wrapper-16 {\n  height: 1600vh;\n}\n.main-wrapper .main-container .content-wrapper-16-5 {\n  height: 1605vh;\n}\n.main-wrapper .main-container .content-wrapper-16-10 {\n  height: 1610vh;\n}\n.main-wrapper .main-container .content-wrapper-16-15 {\n  height: 1615vh;\n}\n.main-wrapper .main-container .content-wrapper-16-25 {\n  height: 1625vh;\n}\n.main-wrapper .main-container .content-wrapper-16-50 {\n  height: 1650vh;\n}\n.main-wrapper .main-container .content-wrapper-16-75 {\n  height: 1675vh;\n}\n.main-wrapper .main-container .content-wrapper-17 {\n  height: 1700vh;\n}\n.main-wrapper .main-container .content-wrapper-17-5 {\n  height: 1705vh;\n}\n.main-wrapper .main-container .content-wrapper-17-10 {\n  height: 1710vh;\n}\n.main-wrapper .main-container .content-wrapper-17-15 {\n  height: 1715vh;\n}\n.main-wrapper .main-container .content-wrapper-17-25 {\n  height: 1725vh;\n}\n.main-wrapper .main-container .content-wrapper-17-50 {\n  height: 1750vh;\n}\n.main-wrapper .main-container .content-wrapper-17-75 {\n  height: 1775vh;\n}\n.main-wrapper .main-container .content-wrapper-18 {\n  height: 1800vh;\n}\n.main-wrapper .main-container .content-wrapper-18-5 {\n  height: 1805vh;\n}\n.main-wrapper .main-container .content-wrapper-18-10 {\n  height: 1810vh;\n}\n.main-wrapper .main-container .content-wrapper-18-15 {\n  height: 1815vh;\n}\n.main-wrapper .main-container .content-wrapper-18-25 {\n  height: 1825vh;\n}\n.main-wrapper .main-container .content-wrapper-18-50 {\n  height: 1850vh;\n}\n.main-wrapper .main-container .content-wrapper-18-75 {\n  height: 1875vh;\n}\n.main-wrapper .main-container .content-wrapper-19 {\n  height: 1900vh;\n}\n.main-wrapper .main-container .content-wrapper-19-5 {\n  height: 1905vh;\n}\n.main-wrapper .main-container .content-wrapper-19-10 {\n  height: 1910vh;\n}\n.main-wrapper .main-container .content-wrapper-19-15 {\n  height: 1915vh;\n}\n.main-wrapper .main-container .content-wrapper-19-25 {\n  height: 1925vh;\n}\n.main-wrapper .main-container .content-wrapper-19-50 {\n  height: 1950vh;\n}\n.main-wrapper .main-container .content-wrapper-19-75 {\n  height: 1975vh;\n}\n.main-wrapper .main-container .content-wrapper-20 {\n  height: 2000vh;\n}\n.main-wrapper .main-container .content-wrapper-20-5 {\n  height: 2005vh;\n}\n.main-wrapper .main-container .content-wrapper-20-10 {\n  height: 2010vh;\n}\n.main-wrapper .main-container .content-wrapper-20-15 {\n  height: 2015vh;\n}\n.main-wrapper .main-container .content-wrapper-20-25 {\n  height: 2025vh;\n}\n.main-wrapper .main-container .content-wrapper-20-50 {\n  height: 2050vh;\n}\n.main-wrapper .main-container .content-wrapper-20-75 {\n  height: 2075vh;\n}\n.main-wrapper .main-container .content-wrapper-21 {\n  height: 2100vh;\n}\n.main-wrapper .main-container .content-wrapper-21-5 {\n  height: 2105vh;\n}\n.main-wrapper .main-container .content-wrapper-21-10 {\n  height: 2110vh;\n}\n.main-wrapper .main-container .content-wrapper-21-15 {\n  height: 2115vh;\n}\n.main-wrapper .main-container .content-wrapper-21-25 {\n  height: 2125vh;\n}\n.main-wrapper .main-container .content-wrapper-21-50 {\n  height: 2150vh;\n}\n.main-wrapper .main-container .content-wrapper-21-75 {\n  height: 2175vh;\n}\n.main-wrapper .main-container .content-wrapper-22 {\n  height: 2200vh;\n}\n.main-wrapper .main-container .content-wrapper-22-5 {\n  height: 2205vh;\n}\n.main-wrapper .main-container .content-wrapper-22-10 {\n  height: 2210vh;\n}\n.main-wrapper .main-container .content-wrapper-22-15 {\n  height: 2215vh;\n}\n.main-wrapper .main-container .content-wrapper-22-25 {\n  height: 2225vh;\n}\n.main-wrapper .main-container .content-wrapper-22-50 {\n  height: 2250vh;\n}\n.main-wrapper .main-container .content-wrapper-22-75 {\n  height: 2275vh;\n}\n.main-wrapper .main-container .content-wrapper-23 {\n  height: 2300vh;\n}\n.main-wrapper .main-container .content-wrapper-23-5 {\n  height: 2305vh;\n}\n.main-wrapper .main-container .content-wrapper-23-10 {\n  height: 2310vh;\n}\n.main-wrapper .main-container .content-wrapper-23-15 {\n  height: 2315vh;\n}\n.main-wrapper .main-container .content-wrapper-23-25 {\n  height: 2325vh;\n}\n.main-wrapper .main-container .content-wrapper-23-50 {\n  height: 2350vh;\n}\n.main-wrapper .main-container .content-wrapper-23-75 {\n  height: 2375vh;\n}\n\n.banner-container {\n  height: 100vh;\n}\n.banner-container .banner-wrapper {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 var(--offset-y);\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.banner-container .banner-wrapper .banner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.banner-container .banner-wrapper .banner div.title {\n  position: relative;\n}\n.banner-container .banner-wrapper .banner div.title .atri-outline {\n  width: 20rem;\n  height: 12rem;\n  bottom: 0;\n  left: -25%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  z-index: 1;\n}\n.banner-container .banner-wrapper .banner div.title .logo-wrapper {\n  position: relative;\n  height: 6rem;\n  width: 25rem;\n  z-index: 2;\n  overflow: hidden;\n}\n.banner-container .banner-wrapper .banner div.title .logo-wrapper .logo {\n  height: 100%;\n  width: 100%;\n}\n.banner-container .banner-wrapper .banner div.title .logo-wrapper .logo .characters {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n.banner-container .banner-wrapper .banner div.title .logo-wrapper .logo .characters .logo-character {\n  width: 10rem;\n  height: 100%;\n}\n.banner-container .banner-wrapper .banner p.sub-title {\n  margin-top: 4rem;\n  font-size: 2rem;\n  color: white;\n  z-index: 1;\n}\n.banner-container .banner-wrapper .banner p.sub-title .letter {\n  display: inline-block;\n  line-height: 1em;\n  transform-origin: 0 0;\n}\n.banner-container .banner-wrapper .line-wrapper {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\n.banner-container .banner-wrapper .line-wrapper .line {\n  position: absolute;\n  transform: rotateZ(93deg);\n  width: 22rem;\n  height: 300vh;\n  background-color: #A31D46;\n}\n.banner-container .banner-mask .light-wrapper .lights .light-rd {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-bottom: 4rem solid rgba(0, 0, 0, 0.6);\n  border-left: 100vw solid transparent;\n  bottom: 0;\n  right: 0;\n}\n.banner-container .banner-mask .light-wrapper .lights .light-lt {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 4rem solid rgba(0, 0, 0, 0.6);\n  border-right: 100vw solid transparent;\n  left: 0;\n  top: 0;\n}\n\n.logo .anime-path {\n  fill: none;\n  stroke: #000;\n  stroke-width: 0.2rem;\n  box-shadow: 2px 2px red;\n}\n.logo .anime-path-inner {\n  stroke-width: 0.1rem;\n}\n\n#preface .preface-container h1, #preface .preface-container h2, #preface .preface-container span, #preface .preface-container a {\n  text-align: center;\n}\n#preface .preface-container .preface-content {\n  height: 100vh;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n}\n#preface .preface-container .preface-content h1.title {\n  font-size: 3rem;\n  margin-top: 4rem;\n}\n#preface .preface-container .preface-content h1.sub-title {\n  font-size: 1.2rem;\n}\n#preface .preface-container .preface-content span.line {\n  margin-top: 4rem;\n  display: block;\n  width: 70%;\n  height: 2px;\n  border-radius: 2px;\n  background-color: #666;\n}\n#preface .preface-container .preface-footer {\n  margin-top: 1rem;\n  color: #555353;\n}\n#preface .preface-container .preface-footer h1, #preface .preface-container .preface-footer h3 {\n  font-size: 1rem;\n}\n#preface .preface-container .preface-footer h3 {\n  display: block;\n}\n#preface .preface-container .preface-footer a {\n  color: #000000;\n}\n\n#timestart, #timestop {\n  position: relative;\n  background-color: white;\n  z-index: 1;\n}\n#timestart .timestart-container h1, #timestart .timestart-container h2, #timestart .timestart-container span, #timestart .timestart-container a, #timestart .timestop-container h1, #timestart .timestop-container h2, #timestart .timestop-container span, #timestart .timestop-container a, #timestop .timestart-container h1, #timestop .timestart-container h2, #timestop .timestart-container span, #timestop .timestart-container a, #timestop .timestop-container h1, #timestop .timestop-container h2, #timestop .timestop-container span, #timestop .timestop-container a {\n  text-align: center;\n}\n#timestart .timestart-container .timestart-content, #timestart .timestart-container .timestop-content, #timestart .timestop-container .timestart-content, #timestart .timestop-container .timestop-content, #timestop .timestart-container .timestart-content, #timestop .timestart-container .timestop-content, #timestop .timestop-container .timestart-content, #timestop .timestop-container .timestop-content {\n  height: 100vh;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n}\n#timestart .timestart-container .timestart-content h1.title, #timestart .timestart-container .timestop-content h1.title, #timestart .timestop-container .timestart-content h1.title, #timestart .timestop-container .timestop-content h1.title, #timestop .timestart-container .timestart-content h1.title, #timestop .timestart-container .timestop-content h1.title, #timestop .timestop-container .timestart-content h1.title, #timestop .timestop-container .timestop-content h1.title {\n  font-size: 3rem;\n  margin-bottom: 4rem;\n}\n#timestart .timestart-container .timestart-content h1.sub-title, #timestart .timestart-container .timestop-content h1.sub-title, #timestart .timestop-container .timestart-content h1.sub-title, #timestart .timestop-container .timestop-content h1.sub-title, #timestop .timestart-container .timestart-content h1.sub-title, #timestop .timestart-container .timestop-content h1.sub-title, #timestop .timestop-container .timestart-content h1.sub-title, #timestop .timestop-container .timestop-content h1.sub-title {\n  font-size: 1.2rem;\n}\n#timestart .timestart-container .timestart-content span.line, #timestart .timestart-container .timestop-content span.line, #timestart .timestop-container .timestart-content span.line, #timestart .timestop-container .timestop-content span.line, #timestop .timestart-container .timestart-content span.line, #timestop .timestart-container .timestop-content span.line, #timestop .timestop-container .timestart-content span.line, #timestop .timestop-container .timestop-content span.line {\n  margin-top: 4rem;\n  display: block;\n  width: 70%;\n  height: 2px;\n  border-radius: 2px;\n  background-color: #666;\n}\n#timestart .timestart-container .timestart-footer, #timestart .timestart-container .timestop-footer, #timestart .timestop-container .timestart-footer, #timestart .timestop-container .timestop-footer, #timestop .timestart-container .timestart-footer, #timestop .timestart-container .timestop-footer, #timestop .timestop-container .timestart-footer, #timestop .timestop-container .timestop-footer {\n  margin-top: 1rem;\n  color: #555353;\n}\n#timestart .timestart-container .timestart-footer h1, #timestart .timestart-container .timestart-footer h3, #timestart .timestart-container .timestop-footer h1, #timestart .timestart-container .timestop-footer h3, #timestart .timestop-container .timestart-footer h1, #timestart .timestop-container .timestart-footer h3, #timestart .timestop-container .timestop-footer h1, #timestart .timestop-container .timestop-footer h3, #timestop .timestart-container .timestart-footer h1, #timestop .timestart-container .timestart-footer h3, #timestop .timestart-container .timestop-footer h1, #timestop .timestart-container .timestop-footer h3, #timestop .timestop-container .timestart-footer h1, #timestop .timestop-container .timestart-footer h3, #timestop .timestop-container .timestop-footer h1, #timestop .timestop-container .timestop-footer h3 {\n  font-size: 1rem;\n}\n#timestart .timestart-container .timestart-footer h3, #timestart .timestart-container .timestop-footer h3, #timestart .timestop-container .timestart-footer h3, #timestart .timestop-container .timestop-footer h3, #timestop .timestart-container .timestart-footer h3, #timestop .timestart-container .timestop-footer h3, #timestop .timestop-container .timestart-footer h3, #timestop .timestop-container .timestop-footer h3 {\n  display: block;\n}\n#timestart .timestart-container .timestart-footer a, #timestart .timestart-container .timestop-footer a, #timestart .timestop-container .timestart-footer a, #timestart .timestop-container .timestop-footer a, #timestop .timestart-container .timestart-footer a, #timestop .timestart-container .timestop-footer a, #timestop .timestop-container .timestart-footer a, #timestop .timestop-container .timestop-footer a {\n  color: #000000;\n}\n\n.scene-pre {\n  position: relative;\n  background-color: white;\n  z-index: 1;\n}\n.scene-pre .scene-pre-container h1, .scene-pre .scene-pre-container h2, .scene-pre .scene-pre-container span, .scene-pre .scene-pre-container a {\n  text-align: center;\n}\n.scene-pre .scene-pre-container .scene-pre-content {\n  height: 100vh;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n}\n.scene-pre .scene-pre-container .scene-pre-content h1.title {\n  font-size: 3rem;\n  margin-bottom: 4rem;\n}\n.scene-pre .scene-pre-container .scene-pre-content h1.sub-title {\n  font-size: 1.2rem;\n}\n.scene-pre .scene-pre-container .scene-pre-content span.line {\n  margin-top: 4rem;\n  display: block;\n  width: 70%;\n  height: 2px;\n  border-radius: 2px;\n  background-color: #666;\n}\n.scene-pre .scene-pre-container .scene-pre-footer {\n  margin-top: 1rem;\n  color: #555353;\n}\n.scene-pre .scene-pre-container .scene-pre-footer h1, .scene-pre .scene-pre-container .scene-pre-footer h3 {\n  font-size: 1rem;\n}\n.scene-pre .scene-pre-container .scene-pre-footer h3 {\n  display: block;\n}\n.scene-pre .scene-pre-container .scene-pre-footer a {\n  color: #000000;\n}\n\n*, *::before, *::after, body {\n  margin: 0;\n  padding: 0;\n  border: none;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: art-font;\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n}\n.art-font {\n  font-family: art-font, sans-serif;\n}\n\n.hidden {\n  display: none;\n}\n\n.sticky {\n  position: sticky;\n  top: 0;\n}\n\n.ofh {\n  overflow: hidden;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.text-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  color: white;\n  font-size: 2rem;\n}\n\n.scene-pre {\n  position: relative;\n  background-color: white;\n}\n\n.scene {\n  background-color: #1D2942;\n  padding-top: 1px;\n}\n.scene .sticky-box .anime-container-opacity .item {\n  transition: opacity 2500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;\n}\n.scene .sticky-box .anime-container-opacity .item img {\n  position: absolute;\n  top: 0;\n}\n.scene .sticky-box .text-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  color: #afafaf;\n  font-size: 2rem;\n  mix-blend-mode: difference;\n}\n.scene .sticky-box .text-wrapper h1, .scene .sticky-box .text-wrapper p, .scene .sticky-box .text-wrapper span {\n  position: relative;\n  z-index: 2;\n  margin: 1rem auto;\n}\n.scene .sticky-box .text-wrapper p {\n  font-size: 2.3rem;\n}\n\n#scene3 .text-wrapper {\n  position: relative;\n  color: white;\n  mix-blend-mode: normal;\n}\n\n.sticky-box {\n  margin-top: -100vh;\n}\n\n.clear-white {\n  mix-blend-mode: normal;\n  color: white;\n}\n\n.clear-black {\n  mix-blend-mode: normal;\n  color: black;\n}\n\n.clear-mix {\n  mix-blend-mode: normal !important;\n}\n\n*, *::before, *::after, body {\n  margin: 0;\n  padding: 0;\n  border: none;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: art-font;\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n}\n.art-font {\n  font-family: art-font, sans-serif;\n}\n\n.hidden {\n  display: none;\n}\n\n.sticky {\n  position: sticky;\n  top: 0;\n}\n\n.ofh {\n  overflow: hidden;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.text-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  color: white;\n  font-size: 2rem;\n}\n\nbody {\n  background-color: #eee;\n  overflow-x: hidden;\n}", "",{"version":3,"sources":["webpack://./src/index/css/content.scss","webpack://./src/index/css/index.scss","webpack://./src/index/css/banner.scss","webpack://./src/index/css/svg.scss","webpack://./src/index/css/preface.scss","webpack://./src/generic/generic/generic.scss","webpack://./src/index/css/scene.scss"],"names":[],"mappings":"AAOM;EACE,aAAA;ACNR;ADQM;EACE,aAAA;ACNR;ADQM;EACE,aAAA;ACNR;ADQM;EACE,aAAA;ACNR;ADQM;EACE,aAAA;ACNR;ADQM;EACE,aAAA;ACNR;ADQM;EACE,aAAA;ACNR;ADbM;EACE,aAAA;ACeR;ADbM;EACE,aAAA;ACeR;ADbM;EACE,aAAA;ACeR;ADbM;EACE,aAAA;ACeR;ADbM;EACE,aAAA;ACeR;ADbM;EACE,aAAA;ACeR;ADbM;EACE,aAAA;ACeR;ADlCM;EACE,aAAA;ACoCR;ADlCM;EACE,aAAA;ACoCR;ADlCM;EACE,aAAA;ACoCR;ADlCM;EACE,aAAA;ACoCR;ADlCM;EACE,aAAA;ACoCR;ADlCM;EACE,aAAA;ACoCR;ADlCM;EACE,aAAA;ACoCR;ADvDM;EACE,aAAA;ACyDR;ADvDM;EACE,aAAA;ACyDR;ADvDM;EACE,aAAA;ACyDR;ADvDM;EACE,aAAA;ACyDR;ADvDM;EACE,aAAA;ACyDR;ADvDM;EACE,aAAA;ACyDR;ADvDM;EACE,aAAA;ACyDR;AD5EM;EACE,aAAA;AC8ER;AD5EM;EACE,aAAA;AC8ER;AD5EM;EACE,aAAA;AC8ER;AD5EM;EACE,aAAA;AC8ER;AD5EM;EACE,aAAA;AC8ER;AD5EM;EACE,aAAA;AC8ER;AD5EM;EACE,aAAA;AC8ER;ADjGM;EACE,aAAA;ACmGR;ADjGM;EACE,aAAA;ACmGR;ADjGM;EACE,aAAA;ACmGR;ADjGM;EACE,aAAA;ACmGR;ADjGM;EACE,aAAA;ACmGR;ADjGM;EACE,aAAA;ACmGR;ADjGM;EACE,aAAA;ACmGR;ADtHM;EACE,aAAA;ACwHR;ADtHM;EACE,aAAA;ACwHR;ADtHM;EACE,aAAA;ACwHR;ADtHM;EACE,aAAA;ACwHR;ADtHM;EACE,aAAA;ACwHR;ADtHM;EACE,aAAA;ACwHR;ADtHM;EACE,aAAA;ACwHR;AD3IM;EACE,aAAA;AC6IR;AD3IM;EACE,aAAA;AC6IR;AD3IM;EACE,aAAA;AC6IR;AD3IM;EACE,aAAA;AC6IR;AD3IM;EACE,aAAA;AC6IR;AD3IM;EACE,aAAA;AC6IR;AD3IM;EACE,aAAA;AC6IR;ADhKM;EACE,aAAA;ACkKR;ADhKM;EACE,aAAA;ACkKR;ADhKM;EACE,aAAA;ACkKR;ADhKM;EACE,aAAA;ACkKR;ADhKM;EACE,aAAA;ACkKR;ADhKM;EACE,aAAA;ACkKR;ADhKM;EACE,aAAA;ACkKR;ADrLM;EACE,cAAA;ACuLR;ADrLM;EACE,cAAA;ACuLR;ADrLM;EACE,cAAA;ACuLR;ADrLM;EACE,cAAA;ACuLR;ADrLM;EACE,cAAA;ACuLR;ADrLM;EACE,cAAA;ACuLR;ADrLM;EACE,cAAA;ACuLR;AD1MM;EACE,cAAA;AC4MR;AD1MM;EACE,cAAA;AC4MR;AD1MM;EACE,cAAA;AC4MR;AD1MM;EACE,cAAA;AC4MR;AD1MM;EACE,cAAA;AC4MR;AD1MM;EACE,cAAA;AC4MR;AD1MM;EACE,cAAA;AC4MR;AD/NM;EACE,cAAA;ACiOR;AD/NM;EACE,cAAA;ACiOR;AD/NM;EACE,cAAA;ACiOR;AD/NM;EACE,cAAA;ACiOR;AD/NM;EACE,cAAA;ACiOR;AD/NM;EACE,cAAA;ACiOR;AD/NM;EACE,cAAA;ACiOR;ADpPM;EACE,cAAA;ACsPR;ADpPM;EACE,cAAA;ACsPR;ADpPM;EACE,cAAA;ACsPR;ADpPM;EACE,cAAA;ACsPR;ADpPM;EACE,cAAA;ACsPR;ADpPM;EACE,cAAA;ACsPR;ADpPM;EACE,cAAA;ACsPR;ADzQM;EACE,cAAA;AC2QR;ADzQM;EACE,cAAA;AC2QR;ADzQM;EACE,cAAA;AC2QR;ADzQM;EACE,cAAA;AC2QR;ADzQM;EACE,cAAA;AC2QR;ADzQM;EACE,cAAA;AC2QR;ADzQM;EACE,cAAA;AC2QR;AD9RM;EACE,cAAA;ACgSR;AD9RM;EACE,cAAA;ACgSR;AD9RM;EACE,cAAA;ACgSR;AD9RM;EACE,cAAA;ACgSR;AD9RM;EACE,cAAA;ACgSR;AD9RM;EACE,cAAA;ACgSR;AD9RM;EACE,cAAA;ACgSR;ADnTM;EACE,cAAA;ACqTR;ADnTM;EACE,cAAA;ACqTR;ADnTM;EACE,cAAA;ACqTR;ADnTM;EACE,cAAA;ACqTR;ADnTM;EACE,cAAA;ACqTR;ADnTM;EACE,cAAA;ACqTR;ADnTM;EACE,cAAA;ACqTR;ADxUM;EACE,cAAA;AC0UR;ADxUM;EACE,cAAA;AC0UR;ADxUM;EACE,cAAA;AC0UR;ADxUM;EACE,cAAA;AC0UR;ADxUM;EACE,cAAA;AC0UR;ADxUM;EACE,cAAA;AC0UR;ADxUM;EACE,cAAA;AC0UR;AD7VM;EACE,cAAA;AC+VR;AD7VM;EACE,cAAA;AC+VR;AD7VM;EACE,cAAA;AC+VR;AD7VM;EACE,cAAA;AC+VR;AD7VM;EACE,cAAA;AC+VR;AD7VM;EACE,cAAA;AC+VR;AD7VM;EACE,cAAA;AC+VR;ADlXM;EACE,cAAA;ACoXR;ADlXM;EACE,cAAA;ACoXR;ADlXM;EACE,cAAA;ACoXR;ADlXM;EACE,cAAA;ACoXR;ADlXM;EACE,cAAA;ACoXR;ADlXM;EACE,cAAA;ACoXR;ADlXM;EACE,cAAA;ACoXR;ADvYM;EACE,cAAA;ACyYR;ADvYM;EACE,cAAA;ACyYR;ADvYM;EACE,cAAA;ACyYR;ADvYM;EACE,cAAA;ACyYR;ADvYM;EACE,cAAA;ACyYR;ADvYM;EACE,cAAA;ACyYR;ADvYM;EACE,cAAA;ACyYR;AD5ZM;EACE,cAAA;AC8ZR;AD5ZM;EACE,cAAA;AC8ZR;AD5ZM;EACE,cAAA;AC8ZR;AD5ZM;EACE,cAAA;AC8ZR;AD5ZM;EACE,cAAA;AC8ZR;AD5ZM;EACE,cAAA;AC8ZR;AD5ZM;EACE,cAAA;AC8ZR;ADjbM;EACE,cAAA;ACmbR;ADjbM;EACE,cAAA;ACmbR;ADjbM;EACE,cAAA;ACmbR;ADjbM;EACE,cAAA;ACmbR;ADjbM;EACE,cAAA;ACmbR;ADjbM;EACE,cAAA;ACmbR;ADjbM;EACE,cAAA;ACmbR;ADtcM;EACE,cAAA;ACwcR;ADtcM;EACE,cAAA;ACwcR;ADtcM;EACE,cAAA;ACwcR;ADtcM;EACE,cAAA;ACwcR;ADtcM;EACE,cAAA;ACwcR;ADtcM;EACE,cAAA;ACwcR;ADtcM;EACE,cAAA;ACwcR;;ACjeA;EACE,aAAA;ADoeF;ACleE;EACE,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,sCAAA;EACA,YAAA;EAC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","sourcesContent":[".main-wrapper {\r\n  .main-container {\r\n    //*[class^='content-wrapper'] {\r\n    //  width: 100vw;\r\n    //}\r\n\r\n    @for $i from 1 to 24 {\r\n      .content-wrapper-#{$i} {\r\n        height: 100vh * $i;\r\n      }\r\n      .content-wrapper-#{$i}-5 {\r\n        height: 100vh * $i + 5vh;\r\n      }\r\n      .content-wrapper-#{$i}-10 {\r\n        height: 100vh * $i + 10vh;\r\n      }\r\n      .content-wrapper-#{$i}-15 {\r\n        height: 100vh * $i + 15vh;\r\n      }\r\n      .content-wrapper-#{$i}-25 {\r\n        height: 100vh * $i + 25vh;\r\n      }\r\n      .content-wrapper-#{$i}-50 {\r\n        height: 100vh * $i + 50vh;\r\n      }\r\n      .content-wrapper-#{$i}-75 {\r\n        height: 100vh * $i + 75vh;\r\n      }\r\n    }\r\n  }\r\n}","@import \"content\";\r\n@import \"banner\";\r\n@import \"svg\";\r\n@import \"preface\";\r\n@import \"scene\";\r\n@import \"scene2\";\r\n\r\nbody {\r\n  background-color: #eee;\r\n  overflow-x: hidden;\r\n}","// top banner\r\n.banner-container {\r\n  height: 100vh;\r\n\r\n  .banner-wrapper {\r\n    background-image: url('../../assets/item052.webp');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: 0 var(--offset-y);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: absolute;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    .banner {\r\n      //background-color: #eee;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      div.title {\r\n        position: relative;\r\n        //background-color: red;\r\n        //padding: 2rem 0;\r\n        .atri-outline {\r\n          width: 20rem;\r\n          height: 12rem;\r\n          bottom: 0;\r\n          left: -25%;\r\n          //background-color: #5592c9;\r\n          background-image: url(\"../../assets/logo_1.webp\");\r\n          //background-size: 100%;\r\n          background-position: center;\r\n          background-repeat: no-repeat;\r\n          background-size: contain;\r\n          position: absolute;\r\n          z-index: 1;\r\n        }\r\n\r\n        .logo-wrapper {\r\n          position: relative;\r\n          height: 6rem;\r\n          width: 25rem;\r\n          z-index: 2;\r\n          overflow: hidden;\r\n\r\n          .logo {\r\n            height: 100%;\r\n            width: 100%;\r\n\r\n            .characters {\r\n              display: flex;\r\n              justify-content: center;\r\n\r\n              height: 100%;\r\n              width: 100%;\r\n\r\n              .logo-character {\r\n                width: 10rem;\r\n                height: 100%;\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      p.sub-title {\r\n        margin-top: 4rem;\r\n        font-size: 2rem;\r\n        color: white;\r\n        z-index: 1;\r\n\r\n        .letter {\r\n          display: inline-block;\r\n          line-height: 1em;\r\n          transform-origin: 0 0;\r\n        }\r\n      }\r\n    }\r\n\r\n    .line-wrapper {\r\n      position: absolute;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      width: 100vw;\r\n      height: 100vh;\r\n\r\n      .line {\r\n        position: absolute;\r\n        transform: rotateZ(93deg);\r\n        width: 22rem; //x\r\n        height: 300vh; //y\r\n        background-color: #A31D46;\r\n      }\r\n    }\r\n  }\r\n\r\n  $mask-color: rgb(#000000, .6);\r\n\r\n  .banner-mask {\r\n    .light-wrapper {\r\n      .lights {\r\n        .light-rd {\r\n          position: absolute;\r\n          width: 0;\r\n          height: 0;\r\n          border-bottom: 4rem solid $mask-color;\r\n          border-left: 100vw solid transparent;\r\n          bottom: 0;\r\n          right: 0;\r\n        }\r\n\r\n        .light-lt {\r\n          position: absolute;\r\n          width: 0;\r\n          height: 0;\r\n          border-top: 4rem solid $mask-color;\r\n          border-right: 100vw solid transparent;\r\n          left: 0;\r\n          top: 0;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",".logo {\r\n  .anime-path {\r\n    fill: none;\r\n    stroke: #000 ;\r\n    stroke-width: .2rem;\r\n    box-shadow: 2px 2px red;\r\n  }\r\n  .anime-path-inner{\r\n    stroke-width: .1rem;\r\n  }\r\n}","#preface {\r\n  .preface-container {\r\n\r\n    h1, h2, span, a {\r\n      text-align: center;\r\n    }\r\n\r\n    .preface-content {\r\n      height: 100vh;\r\n      display: flex;\r\n      flex-flow: column nowrap;\r\n      justify-content: center;\r\n      align-items: center;\r\n      color: #000;\r\n\r\n      h1.title {\r\n        font-size: 3rem;\r\n        margin-top: 4rem;\r\n      }\r\n\r\n      h1.sub-title {\r\n        font-size: 1.2rem;\r\n      }\r\n\r\n      span.line {\r\n        margin-top: 4rem;\r\n        display: block;\r\n        width: 70%;\r\n        height: 2px;\r\n        border-radius: 2px;\r\n        background-color: #666;\r\n      }\r\n    }\r\n\r\n    .preface-footer {\r\n      margin-top: 1rem;\r\n      color: #555353;\r\n\r\n      h1, h3 {\r\n        font-size: 1rem;\r\n      }\r\n\r\n      h3 {\r\n        display: block;\r\n      }\r\n\r\n      a {\r\n        color: #000000;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// timestart, timestop,\r\n#timestart, #timestop {\r\n  position: relative;\r\n  background-color: white;\r\n  z-index: 1;\r\n\r\n  .timestart-container, .timestop-container {\r\n\r\n    h1, h2, span, a {\r\n      text-align: center;\r\n    }\r\n\r\n    .timestart-content, .timestop-content {\r\n      height: 100vh;\r\n      display: flex;\r\n      flex-flow: column nowrap;\r\n      justify-content: center;\r\n      align-items: center;\r\n      color: #000;\r\n\r\n      h1.title {\r\n        font-size: 3rem;\r\n        margin-bottom: 4rem;\r\n      }\r\n\r\n      h1.sub-title {\r\n        font-size: 1.2rem;\r\n      }\r\n\r\n      span.line {\r\n        margin-top: 4rem;\r\n        display: block;\r\n        width: 70%;\r\n        height: 2px;\r\n        border-radius: 2px;\r\n        background-color: #666;\r\n      }\r\n    }\r\n\r\n    .timestart-footer, .timestop-footer {\r\n      margin-top: 1rem;\r\n      color: #555353;\r\n\r\n      h1, h3 {\r\n        font-size: 1rem;\r\n      }\r\n\r\n      h3 {\r\n        display: block;\r\n      }\r\n\r\n      a {\r\n        color: #000000;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n\r\n.scene-pre {\r\n  position: relative;\r\n  background-color: white;\r\n  z-index: 1;\r\n\r\n  .scene-pre-container {\r\n\r\n    h1, h2, span, a {\r\n      text-align: center;\r\n    }\r\n\r\n    .scene-pre-content {\r\n      height: 100vh;\r\n      display: flex;\r\n      flex-flow: column nowrap;\r\n      justify-content: center;\r\n      align-items: center;\r\n      color: #000;\r\n\r\n      h1.title {\r\n        font-size: 3rem;\r\n        margin-bottom: 4rem;\r\n      }\r\n\r\n      h1.sub-title {\r\n        font-size: 1.2rem;\r\n      }\r\n\r\n      span.line {\r\n        margin-top: 4rem;\r\n        display: block;\r\n        width: 70%;\r\n        height: 2px;\r\n        border-radius: 2px;\r\n        background-color: #666;\r\n      }\r\n    }\r\n\r\n    .scene-pre-footer {\r\n      margin-top: 1rem;\r\n      color: #555353;\r\n\r\n      h1, h3 {\r\n        font-size: 1rem;\r\n      }\r\n\r\n      h3 {\r\n        display: block;\r\n      }\r\n\r\n      a {\r\n        color: #000000;\r\n      }\r\n    }\r\n  }\r\n}\r\n","*, *::before, *::after, body {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: none;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n// font register\r\n@font-face {\r\n  font-family: art-font;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-display: swap;\r\n  src: url('../../assets/fonts/Sacramento-Regular.ttf') format(\"truetype\")\r\n}\r\n\r\n.art-font {\r\n  font-family: art-font, sans-serif;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.sticky {\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.ofh {\r\n  overflow: hidden;\r\n}\r\n\r\n.absolute {\r\n  position: absolute;\r\n}\r\n\r\n.relative {\r\n  position: relative;\r\n}\r\n\r\n@mixin flex-center {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.flex-center {\r\n  @include flex-center;\r\n}\r\n\r\n@mixin text-center {\r\n  @include flex-center;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  color: white;\r\n  font-size: 2rem;\r\n}\r\n\r\n.text-center {\r\n  @include text-center;\r\n}\r\n\r\n","@import \"../../generic/generic/generic\";\r\n\r\n.scene-pre {\r\n  position: relative;\r\n  background-color: white;\r\n  //width: 100vw;\r\n}\r\n\r\n.scene {\r\n  background-color: #1D2942;\r\n  padding-top: 1px; // 外边距合并\r\n  //width: 100vw;\r\n\r\n  .sticky-box {\r\n\r\n    .anime-container-opacity {\r\n      .item {\r\n        transition: opacity 2500ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;\r\n\r\n        img {\r\n          position: absolute;\r\n          top: 0;\r\n        }\r\n      }\r\n    }\r\n\r\n    .text-wrapper {\r\n      h1, p, span {\r\n        position: relative;\r\n        z-index: 2;\r\n        margin: 1rem auto;\r\n      }\r\n\r\n      p {\r\n        font-size: 2.3rem;\r\n      }\r\n\r\n      @include flex-center;\r\n      width: 100vw;\r\n      height: 100vh;\r\n      position: absolute;\r\n      top: 0;\r\n      //color: #1d1d1d;\r\n      color: #afafaf;\r\n      font-size: 2rem;\r\n      mix-blend-mode: difference;\r\n    }\r\n  }\r\n}\r\n\r\n#scene3 {\r\n  .text-wrapper {\r\n    position: relative;\r\n    color: white;\r\n    mix-blend-mode: normal;\r\n  }\r\n}\r\n\r\n.sticky-box {\r\n  margin-top: -100vh;\r\n}\r\n\r\n.clear-white {\r\n  mix-blend-mode: normal;\r\n  color: white;\r\n}\r\n\r\n.clear-black {\r\n  mix-blend-mode: normal;\r\n  color: black;\r\n}\r\n\r\n.clear-mix {\r\n  mix-blend-mode: normal !important;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/generic/generic/generic.scss":
/*!******************************************!*\
  !*** ./src/generic/generic/generic.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_generic_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./generic.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/generic/generic/generic.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_generic_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_generic_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/generic/test/test.scss":
/*!************************************!*\
  !*** ./src/generic/test/test.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_test_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./test.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/generic/test/test.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_test_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_test_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/index/css/anime.scss":
/*!**********************************!*\
  !*** ./src/index/css/anime.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_anime_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./anime.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/css/anime.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_anime_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_anime_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/index/css/index.scss":
/*!**********************************!*\
  !*** ./src/index/css/index.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/css/index.scss");

            

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

/***/ "./src/index/scroll.ts":
/*!*****************************!*\
  !*** ./src/index/scroll.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerScrollHandles": () => (/* binding */ registerScrollHandles),
/* harmony export */   "removeScrollHandles": () => (/* binding */ removeScrollHandles)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/index/util.ts");

var scrollHandles = new Map();
var container = document.querySelector('.main-container');
var html = document.documentElement;
var contentWrappers = container.querySelectorAll('div[class^="content-wrapper"]');
function registerScrollHandles(e, func) {
    if (typeof e === 'number') {
        e = contentWrappers[e];
    }
    else if (typeof e === 'string') {
        e = container.querySelector(e);
    }
    if (!scrollHandles.has(e))
        scrollHandles.set(e, []);
    scrollHandles.get(e).push(func);
}
function removeScrollHandles(e) {
    if (scrollHandles.has(e))
        scrollHandles.delete(e);
}
function processScrollHandles(e, progress, globalProgress) {
    if (scrollHandles.has(e)) {
        var handles = scrollHandles.get(e);
        handles.forEach(function (func) {
            func(e, progress, globalProgress);
        });
    }
}
function dispatchScroll(globalProgress) {
    var sumHeight = 0;
    contentWrappers.forEach(function (e) {
        var offsetHeight = html.scrollTop + window.innerHeight - sumHeight;
        var p = offsetHeight / (e.clientHeight + window.innerHeight);
        processScrollHandles(e, p, globalProgress);
        sumHeight += e.clientHeight;
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.addStyle)(e, '--progress', "" + p);
    });
}
window.addEventListener('scroll', function () {
    var globalProgress = html.scrollTop / (container.scrollHeight - html.clientHeight);
    dispatchScroll(globalProgress);
});



/***/ }),

/***/ "./src/index/test.ts":
/*!***************************!*\
  !*** ./src/index/test.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ "./src/index/scroll.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/index/util.ts");


(0,_scroll__WEBPACK_IMPORTED_MODULE_0__.registerScrollHandles)(0, function (e, progress, globalProgress) {
    var a = .6;
    var b = 3;
    if (.6 <= progress && progress <= b) {
        (0,_util__WEBPACK_IMPORTED_MODULE_1__.addStyle)(e, '--offset-y', (progress - a) * 1200 - 70 + 'px');
    }
    else {
        (0,_util__WEBPACK_IMPORTED_MODULE_1__.addStyle)(e, '--offset-y', progress * 50 - 100 + 'px');
    }
});


/***/ }),

/***/ "./src/index/util.ts":
/*!***************************!*\
  !*** ./src/index/util.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addStyle": () => (/* binding */ addStyle)
/* harmony export */ });
function addStyle(e, k, v) {
    var styleKV = e.getAttribute("style");
    if (!styleKV) {
        e.setAttribute('style', k + ':' + v + ';');
        return;
    }
    var styleList = [];
    for (var _i = 0, _a = styleKV.split(';'); _i < _a.length; _i++) {
        var i = _a[_i];
        if (i !== '') {
            styleList.push(i);
        }
    }
    var style = {};
    for (var _b = 0, styleList_1 = styleList; _b < styleList_1.length; _b++) {
        var kv = styleList_1[_b];
        if (kv.indexOf(':') !== -1) {
            var k_1 = kv.split(':')[0];
            style[k_1] = kv.split(':')[1];
        }
    }
    style[k] = v;
    styleKV = "";
    for (var key in style) {
        styleKV += key + ':' + style[key] + ';';
    }
    e.setAttribute('style', styleKV);
}



/***/ }),

/***/ "./src/assets/fonts/Sacramento-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Sacramento-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e499a8cb6cdb915c291.ttf";

/***/ }),

/***/ "./src/assets/item052.webp":
/*!*********************************!*\
  !*** ./src/assets/item052.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95da2a0860140d5e651f.webp";

/***/ }),

/***/ "./src/assets/logo_1.webp":
/*!********************************!*\
  !*** ./src/assets/logo_1.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "525c4c0d106f7c2b631c.webp";

/***/ }),

/***/ "./src/generic/generic/index.js":
/*!**************************************!*\
  !*** ./src/generic/generic/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_fonts_Sacramento_Regular_ttf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/fonts/Sacramento-Regular.ttf */ "./src/assets/fonts/Sacramento-Regular.ttf");
/* harmony import */ var _generic_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic.scss */ "./src/generic/generic/generic.scss");




/***/ }),

/***/ "./src/generic/test/index.js":
/*!***********************************!*\
  !*** ./src/generic/test/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.scss */ "./src/generic/test/test.scss");


/***/ }),

/***/ "./src/index/anime-banner.js":
/*!***********************************!*\
  !*** ./src/index/anime-banner.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
// banner ATRI svg logo 动画
// purple rect light appear


animejs__WEBPACK_IMPORTED_MODULE_0__.default.set('.line-wrapper .line', {
    scaleX: 0,
    scaleY: 0,
})
let logoAnime = animejs__WEBPACK_IMPORTED_MODULE_0__.default.timeline({});
logoAnime.add({
    targets: '.line-wrapper .line',
    scaleX: [
        {value: 0},
        {value: .1, duration: 500,},
        {value: 1, duration: 1000, delay: 1200},
    ],
    scaleY: [
        {value: 0},
        {value: 1, duration: 800, easing: 'easeInQuad'}
    ],
    rotateZ: [
        {value: 93, delay: 2000}
    ],
})

// draw svg outline
logoAnime.add({
    targets: 'svg .anime-path, .anime-path-inner',
    strokeDashoffset: [animejs__WEBPACK_IMPORTED_MODULE_0__.default.setDashoffset, 0],
    easing: "easeOutCubic",
    duration: 1000,
    delay: function (el, i) {
        return i * 150;
    },
},)

// banner atri outline anime
;(0,animejs__WEBPACK_IMPORTED_MODULE_0__.default)({
    targets: '.atri-outline',
    opacity: [0, 1],
    easing: "easeInSine",
    duration: 1600,
    delay: 4000,
});

// fill svg color
logoAnime.add({
    targets: 'svg .anime-path',
    easing: "easeInOutSine",
    fill: ['transparent','#1f29ff'],
    delay: function (el, i) {
        return i * 50;
    },
})

// sub title anime
// Wrap every letter in a span
let textWrapper = document.querySelector('.sub-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
logoAnime.add({
    targets: '.sub-title .letter',
    rotateY: [-90, 0],
    duration: 2000,
    easing: 'easeOutSine',
    delay: (el, i) => 90 * i
})

// line wrapper
// translateX(29%) rotateZ(-75deg) scaleY(3) scaleX(3)

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
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/index/index.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _anime_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anime-banner */ "./src/index/anime-banner.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll */ "./src/index/scroll.ts");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/index.scss */ "./src/index/css/index.scss");
/* harmony import */ var _css_anime_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/anime.scss */ "./src/index/css/anime.scss");
/* harmony import */ var _generic_generic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generic/generic */ "./src/generic/generic/index.js");
/* harmony import */ var _generic_test__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generic/test */ "./src/generic/test/index.js");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test */ "./src/index/test.ts");








console.log('Hello, There.  Atri!');

// text anime start
var textAnimes = document.querySelectorAll('.text-anime-container');
textAnimes.forEach(function (textAnime) {
    var textAnimeItems = textAnime.querySelectorAll('.item');
    var textAnimeAnimating = null;
    var scene = textAnime;
    while (scene && scene.id.indexOf('scene')) {
        scene = scene.parentElement;
    }
    if (!scene)
        return;
    textAnimeItems.forEach(function (e, index) {
        e.classList.add('hidden');
        if (!(e instanceof HTMLElement))
            return;
        (0,_scroll__WEBPACK_IMPORTED_MODULE_2__.registerScrollHandles)(scene, function (scene, progress) {
            var animeStart = parseFloat(e.dataset['animeStart']);
            var animeEnd = parseFloat(e.dataset['animeEnd']);
            // console.log(e.dataset['animeStart'], e.dataset['animeEnd'])
            if (animeStart <= progress && progress < animeEnd) {
                textAnimeItems.forEach(function (ele) {
                    if (ele !== e && !ele.classList.contains('hidden')) {
                        ele.classList.add('hidden');
                    }
                });
                if (textAnimeAnimating !== e) {
                    e.classList.remove('hidden');
                    (0,animejs__WEBPACK_IMPORTED_MODULE_0__.default)({
                        targets: e.children,
                        rotateX: [-90, 0],
                        translateY: ['200%', 0],
                        opacity: { value: [0, 1], easing: 'easeOutQuad' },
                        scale: [1.3, 1],
                        easing: 'easeOutQuad',
                        delay: function (e, i) {
                            return i * 550;
                        },
                        duration: 1000
                    });
                }
                textAnimeAnimating = e;
            }
        });
    });
});
// text anime end
// change image
var opacityAnimes = document.querySelectorAll('.anime-container-opacity');
opacityAnimes.forEach(function (opacityAnime) {
    var opacityAnimeItems = opacityAnime.querySelectorAll('.item');
    var opacityAnimeAnimating = null;
    var scene = opacityAnime;
    while (scene && scene.id.indexOf('scene')) {
        scene = scene.parentElement;
    }
    if (!scene)
        return;
    opacityAnimeItems.forEach(function (e, index) {
        e.style.opacity = '0';
        if (!(e instanceof HTMLElement))
            return;
        (0,_scroll__WEBPACK_IMPORTED_MODULE_2__.registerScrollHandles)(scene, function (scene, progress) {
            var animeStart = parseFloat(e.dataset['animeStart']);
            var animeEnd = parseFloat(e.dataset['animeEnd']);
            // console.log(e.dataset['animeStart'], e.dataset['animeEnd'])
            if (animeStart <= progress && progress < animeEnd) {
                opacityAnimeItems.forEach(function (ele) {
                    if (ele !== e && ele !== e.previousElementSibling)
                        ele.style.opacity = '0';
                });
                if (opacityAnimeAnimating !== e) {
                    e.style.opacity = '1';
                }
                opacityAnimeAnimating = e;
            }
        });
    });
});
// registerScrollHandles("#scene1", function (e, progress) {
//     let keyframe: { [propName: string]: [number, number]; } = {};
//     keyframe[i1] = [0.1, .3]
//     keyframe[i2] = [0.3, .5]
//     keyframe[i3] = [0.5, .7]
//     keyframe[i4] = [0.7, .9]
//
//     for (const keyframeKey in keyframe) {
//         let value = keyframe[keyframeKey];
//         if (value[0] <= progress && progress < value[1]) {
//             break
//         }
//     }
// });
document.addEventListener("mousemove", function () {
    document.getElementById('audio').play();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvYW5pbWVqcy9saWIvYW5pbWUuZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2dlbmVyaWMvZ2VuZXJpYy9nZW5lcmljLnNjc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2dlbmVyaWMvdGVzdC90ZXN0LnNjc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4L2Nzcy9hbmltZS5zY3NzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC9jc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2dlbmVyaWMvZ2VuZXJpYy9nZW5lcmljLnNjc3M/NWZiNSIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZ2VuZXJpYy90ZXN0L3Rlc3Quc2Nzcz9iYTgxIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC9jc3MvYW5pbWUuc2Nzcz85ZjU5Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC9jc3MvaW5kZXguc2Nzcz81NTcyIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXgvc2Nyb2xsLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC90ZXN0LnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC91dGlsLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9nZW5lcmljL2dlbmVyaWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4L2FuaW1lLWJhbm5lci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7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dUQsa0JBQWtCLEdBQUcsb0RBQW9ELGtCQUFrQixHQUFHLHNEQUFzRCxrQkFBa0IsR0FBRyx1REFBdUQsa0JBQWtCLEdBQUcsdURBQXVELGtCQUFrQixHQUFHLHVEQUF1RCxrQkFBa0IsR0FBRyx1REFBdUQsa0JBQWtCLEdBQUcsdURBQXVELGtCQUFrQixHQUFHLG9EQUFvRCxrQkFBa0IsR0FBRyxzREFBc0Qsa0JBQWtCLEdBQUcsdURBQXVELGtCQUFrQixHQUFHLHVEQUF1RCxrQkFBa0IsR0FBRyx1REFBdUQsa0JBQWtCLEdBQUcsdURBQXVELGtCQUFrQixHQUFHLHVEQUF1RCxrQkFBa0IsR0FBRyxvREFBb0Qsa0JBQWtCLEdBQUcsc0RBQXNELGtCQUFrQixHQUFHLHVEQUF1RCxrQkFBa0IsR0FBRyx1REFBdUQsa0JBQWtCLEdBQUcsdURBQXVELGtCQUFrQixHQUFHLHVEQUF1RCxrQkFBa0IsR0FBRyx1REFBdUQsa0JBQWtCLEdBQUcsb0RBQW9ELGtCQUFrQixHQUFHLHNEQUFzRCxrQkFBa0IsR0FBRyx1REFBdUQsa0JBQWtCLEdBQUcsdURBQXVELGtCQUFrQixHQUFHLHVEQUF1RCxrQkFBa0IsR0FBRyx1REFBdUQsa0JBQWtCLEdBQUcsdURBQXVELGtCQUFrQixHQUFHLG9EQUFvRCxrQkFBa0IsR0FBRyxzREFBc0Qsa0JBQWtCLEdBQUcsdURBQXVELGtCQUFrQixHQUFHLHVEQUF1RCxrQkFBa0IsR0FBRyx1REFBdUQsa0JBQWtCLEdBQUcsdURBQXVELGtCQUFrQixHQUFHLHVEQUF1RCxrQkFBa0IsR0FBRyxvREFBb0Qsa0JBQWtCLEdBQUcsc0RBQXNELGtCQUFrQixHQUFHLHVEQUF1RCxrQkFBa0IsR0FBRyx1REFBdUQsa0JBQWtCLEdBQUcsdURBQXVELGtCQUFrQixHQUFHLHVEQUF1RCxrQkFBa0IsR0FBRyx1REFBdUQsa0JBQWtCLEdBQUcscURBQXFELG1CQUFtQixHQUFHLHVEQUF1RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHFEQUFxRCxtQkFBbUIsR0FBRyx1REFBdUQsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyxxREFBcUQsbUJBQW1CLEdBQUcsdURBQXVELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcscURBQXFELG1CQUFtQixHQUFHLHVEQUF1RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHFEQUFxRCxtQkFBbUIsR0FBRyx1REFBdUQsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyxxREFBcUQsbUJBQW1CLEdBQUcsdURBQXVELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcscURBQXFELG1CQUFtQixHQUFHLHVEQUF1RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHFEQUFxRCxtQkFBbUIsR0FBRyx1REFBdUQsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyxxREFBcUQsbUJBQW1CLEdBQUcsdURBQXVELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcscURBQXFELG1CQUFtQixHQUFHLHVEQUF1RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHFEQUFxRCxtQkFBbUIsR0FBRyx1REFBdUQsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyxxREFBcUQsbUJBQW1CLEdBQUcsdURBQXVELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcscURBQXFELG1CQUFtQixHQUFHLHVEQUF1RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHFEQUFxRCxtQkFBbUIsR0FBRyx1REFBdUQsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsd0RBQXdELG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyx1QkFBdUIsa0JBQWtCLEdBQUcscUNBQXFD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TSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSxzQkFBc0Isc0NBQXNDLEVBQUU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogYW5pbWUuanMgdjMuMi4xXG4gKiAoYykgMjAyMCBKdWxpYW4gR2FybmllclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBhbmltZWpzLmNvbVxuICovXG5cbi8vIERlZmF1bHRzXG5cbnZhciBkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncyA9IHtcbiAgdXBkYXRlOiBudWxsLFxuICBiZWdpbjogbnVsbCxcbiAgbG9vcEJlZ2luOiBudWxsLFxuICBjaGFuZ2VCZWdpbjogbnVsbCxcbiAgY2hhbmdlOiBudWxsLFxuICBjaGFuZ2VDb21wbGV0ZTogbnVsbCxcbiAgbG9vcENvbXBsZXRlOiBudWxsLFxuICBjb21wbGV0ZTogbnVsbCxcbiAgbG9vcDogMSxcbiAgZGlyZWN0aW9uOiAnbm9ybWFsJyxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIHRpbWVsaW5lT2Zmc2V0OiAwXG59O1xuXG52YXIgZGVmYXVsdFR3ZWVuU2V0dGluZ3MgPSB7XG4gIGR1cmF0aW9uOiAxMDAwLFxuICBkZWxheTogMCxcbiAgZW5kRGVsYXk6IDAsXG4gIGVhc2luZzogJ2Vhc2VPdXRFbGFzdGljKDEsIC41KScsXG4gIHJvdW5kOiAwXG59O1xuXG52YXIgdmFsaWRUcmFuc2Zvcm1zID0gWyd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAndHJhbnNsYXRlWicsICdyb3RhdGUnLCAncm90YXRlWCcsICdyb3RhdGVZJywgJ3JvdGF0ZVonLCAnc2NhbGUnLCAnc2NhbGVYJywgJ3NjYWxlWScsICdzY2FsZVonLCAnc2tldycsICdza2V3WCcsICdza2V3WScsICdwZXJzcGVjdGl2ZScsICdtYXRyaXgnLCAnbWF0cml4M2QnXTtcblxuLy8gQ2FjaGluZ1xuXG52YXIgY2FjaGUgPSB7XG4gIENTUzoge30sXG4gIHNwcmluZ3M6IHt9XG59O1xuXG4vLyBVdGlsc1xuXG5mdW5jdGlvbiBtaW5NYXgodmFsLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdDb250YWlucyhzdHIsIHRleHQpIHtcbiAgcmV0dXJuIHN0ci5pbmRleE9mKHRleHQpID4gLTE7XG59XG5cbmZ1bmN0aW9uIGFwcGx5QXJndW1lbnRzKGZ1bmMsIGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG59XG5cbnZhciBpcyA9IHtcbiAgYXJyOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gQXJyYXkuaXNBcnJheShhKTsgfSxcbiAgb2JqOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gc3RyaW5nQ29udGFpbnMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLCAnT2JqZWN0Jyk7IH0sXG4gIHB0aDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGlzLm9iaihhKSAmJiBhLmhhc093blByb3BlcnR5KCd0b3RhbExlbmd0aCcpOyB9LFxuICBzdmc6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudDsgfSxcbiAgaW5wOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQ7IH0sXG4gIGRvbTogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEubm9kZVR5cGUgfHwgaXMuc3ZnKGEpOyB9LFxuICBzdHI6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ3N0cmluZyc7IH0sXG4gIGZuYzogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nOyB9LFxuICB1bmQ6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCc7IH0sXG4gIG5pbDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGlzLnVuZChhKSB8fCBhID09PSBudWxsOyB9LFxuICBoZXg6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKTsgfSxcbiAgcmdiOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gL15yZ2IvLnRlc3QoYSk7IH0sXG4gIGhzbDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC9eaHNsLy50ZXN0KGEpOyB9LFxuICBjb2w6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAoaXMuaGV4KGEpIHx8IGlzLnJnYihhKSB8fCBpcy5oc2woYSkpOyB9LFxuICBrZXk6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAhZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgIWRlZmF1bHRUd2VlblNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmIGEgIT09ICd0YXJnZXRzJyAmJiBhICE9PSAna2V5ZnJhbWVzJzsgfSxcbn07XG5cbi8vIEVhc2luZ3NcblxuZnVuY3Rpb24gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZykge1xuICB2YXIgbWF0Y2ggPSAvXFwoKFteKV0rKVxcKS8uZXhlYyhzdHJpbmcpO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAocCkgeyByZXR1cm4gcGFyc2VGbG9hdChwKTsgfSkgOiBbXTtcbn1cblxuLy8gU3ByaW5nIHNvbHZlciBpbnNwaXJlZCBieSBXZWJraXQgQ29weXJpZ2h0IMKpIDIwMTYgQXBwbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBodHRwczovL3dlYmtpdC5vcmcvZGVtb3Mvc3ByaW5nL3NwcmluZy5qc1xuXG5mdW5jdGlvbiBzcHJpbmcoc3RyaW5nLCBkdXJhdGlvbikge1xuXG4gIHZhciBwYXJhbXMgPSBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoc3RyaW5nKTtcbiAgdmFyIG1hc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1swXSkgPyAxIDogcGFyYW1zWzBdLCAuMSwgMTAwKTtcbiAgdmFyIHN0aWZmbmVzcyA9IG1pbk1heChpcy51bmQocGFyYW1zWzFdKSA/IDEwMCA6IHBhcmFtc1sxXSwgLjEsIDEwMCk7XG4gIHZhciBkYW1waW5nID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMl0pID8gMTAgOiBwYXJhbXNbMl0sIC4xLCAxMDApO1xuICB2YXIgdmVsb2NpdHkgPSAgbWluTWF4KGlzLnVuZChwYXJhbXNbM10pID8gMCA6IHBhcmFtc1szXSwgLjEsIDEwMCk7XG4gIHZhciB3MCA9IE1hdGguc3FydChzdGlmZm5lc3MgLyBtYXNzKTtcbiAgdmFyIHpldGEgPSBkYW1waW5nIC8gKDIgKiBNYXRoLnNxcnQoc3RpZmZuZXNzICogbWFzcykpO1xuICB2YXIgd2QgPSB6ZXRhIDwgMSA/IHcwICogTWF0aC5zcXJ0KDEgLSB6ZXRhICogemV0YSkgOiAwO1xuICB2YXIgYSA9IDE7XG4gIHZhciBiID0gemV0YSA8IDEgPyAoemV0YSAqIHcwICsgLXZlbG9jaXR5KSAvIHdkIDogLXZlbG9jaXR5ICsgdzA7XG5cbiAgZnVuY3Rpb24gc29sdmVyKHQpIHtcbiAgICB2YXIgcHJvZ3Jlc3MgPSBkdXJhdGlvbiA/IChkdXJhdGlvbiAqIHQpIC8gMTAwMCA6IHQ7XG4gICAgaWYgKHpldGEgPCAxKSB7XG4gICAgICBwcm9ncmVzcyA9IE1hdGguZXhwKC1wcm9ncmVzcyAqIHpldGEgKiB3MCkgKiAoYSAqIE1hdGguY29zKHdkICogcHJvZ3Jlc3MpICsgYiAqIE1hdGguc2luKHdkICogcHJvZ3Jlc3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvZ3Jlc3MgPSAoYSArIGIgKiBwcm9ncmVzcykgKiBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiB3MCk7XG4gICAgfVxuICAgIGlmICh0ID09PSAwIHx8IHQgPT09IDEpIHsgcmV0dXJuIHQ7IH1cbiAgICByZXR1cm4gMSAtIHByb2dyZXNzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RHVyYXRpb24oKSB7XG4gICAgdmFyIGNhY2hlZCA9IGNhY2hlLnNwcmluZ3Nbc3RyaW5nXTtcbiAgICBpZiAoY2FjaGVkKSB7IHJldHVybiBjYWNoZWQ7IH1cbiAgICB2YXIgZnJhbWUgPSAxLzY7XG4gICAgdmFyIGVsYXBzZWQgPSAwO1xuICAgIHZhciByZXN0ID0gMDtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICBlbGFwc2VkICs9IGZyYW1lO1xuICAgICAgaWYgKHNvbHZlcihlbGFwc2VkKSA9PT0gMSkge1xuICAgICAgICByZXN0Kys7XG4gICAgICAgIGlmIChyZXN0ID49IDE2KSB7IGJyZWFrOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGR1cmF0aW9uID0gZWxhcHNlZCAqIGZyYW1lICogMTAwMDtcbiAgICBjYWNoZS5zcHJpbmdzW3N0cmluZ10gPSBkdXJhdGlvbjtcbiAgICByZXR1cm4gZHVyYXRpb247XG4gIH1cblxuICByZXR1cm4gZHVyYXRpb24gPyBzb2x2ZXIgOiBnZXREdXJhdGlvbjtcblxufVxuXG4vLyBCYXNpYyBzdGVwcyBlYXNpbmcgaW1wbGVtZW50YXRpb24gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXG5cbmZ1bmN0aW9uIHN0ZXBzKHN0ZXBzKSB7XG4gIGlmICggc3RlcHMgPT09IHZvaWQgMCApIHN0ZXBzID0gMTA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiBNYXRoLmNlaWwoKG1pbk1heCh0LCAwLjAwMDAwMSwgMSkpICogc3RlcHMpICogKDEgLyBzdGVwcyk7IH07XG59XG5cbi8vIEJlemllckVhc2luZyBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmdcblxudmFyIGJlemllciA9IChmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGtTcGxpbmVUYWJsZVNpemUgPSAxMTtcbiAgdmFyIGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKTtcblxuICBmdW5jdGlvbiBBKGFBMSwgYUEyKSB7IHJldHVybiAxLjAgLSAzLjAgKiBhQTIgKyAzLjAgKiBhQTEgfVxuICBmdW5jdGlvbiBCKGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBhQTIgLSA2LjAgKiBhQTEgfVxuICBmdW5jdGlvbiBDKGFBMSkgICAgICB7IHJldHVybiAzLjAgKiBhQTEgfVxuXG4gIGZ1bmN0aW9uIGNhbGNCZXppZXIoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAoKEEoYUExLCBhQTIpICogYVQgKyBCKGFBMSwgYUEyKSkgKiBhVCArIEMoYUExKSkgKiBhVCB9XG4gIGZ1bmN0aW9uIGdldFNsb3BlKGFULCBhQTEsIGFBMikgeyByZXR1cm4gMy4wICogQShhQTEsIGFBMikgKiBhVCAqIGFUICsgMi4wICogQihhQTEsIGFBMikgKiBhVCArIEMoYUExKSB9XG5cbiAgZnVuY3Rpb24gYmluYXJ5U3ViZGl2aWRlKGFYLCBhQSwgYUIsIG1YMSwgbVgyKSB7XG4gICAgdmFyIGN1cnJlbnRYLCBjdXJyZW50VCwgaSA9IDA7XG4gICAgZG8ge1xuICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICBpZiAoY3VycmVudFggPiAwLjApIHsgYUIgPSBjdXJyZW50VDsgfSBlbHNlIHsgYUEgPSBjdXJyZW50VDsgfVxuICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IDAuMDAwMDAwMSAmJiArK2kgPCAxMCk7XG4gICAgcmV0dXJuIGN1cnJlbnRUO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGFHdWVzc1QsIG1YMSwgbVgyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgIHZhciBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHsgcmV0dXJuIGFHdWVzc1Q7IH1cbiAgICAgIHZhciBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgIH1cbiAgICByZXR1cm4gYUd1ZXNzVDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcblxuICAgIGlmICghKDAgPD0gbVgxICYmIG1YMSA8PSAxICYmIDAgPD0gbVgyICYmIG1YMiA8PSAxKSkgeyByZXR1cm47IH1cbiAgICB2YXIgc2FtcGxlVmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKTtcblxuICAgIGlmIChtWDEgIT09IG1ZMSB8fCBtWDIgIT09IG1ZMikge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcbiAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICoga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEZvclgoYVgpIHtcblxuICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwO1xuICAgICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgdmFyIGxhc3RTYW1wbGUgPSBrU3BsaW5lVGFibGVTaXplIC0gMTtcblxuICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT09IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBrU2FtcGxlU3RlcFNpemU7XG4gICAgICB9XG5cbiAgICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgICAgdmFyIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgICAgdmFyIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xuICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuXG4gICAgICBpZiAoaW5pdGlhbFNsb3BlID49IDAuMDAxKSB7XG4gICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikgeyByZXR1cm4geDsgfVxuICAgICAgaWYgKHggPT09IDAgfHwgeCA9PT0gMSkgeyByZXR1cm4geDsgfVxuICAgICAgcmV0dXJuIGNhbGNCZXppZXIoZ2V0VEZvclgoeCksIG1ZMSwgbVkyKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBiZXppZXI7XG5cbn0pKCk7XG5cbnZhciBwZW5uZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gIC8vIEJhc2VkIG9uIGpRdWVyeSBVSSdzIGltcGxlbWVuYXRpb24gb2YgZWFzaW5nIGVxdWF0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXIgKGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcpXG5cbiAgdmFyIGVhc2VzID0geyBsaW5lYXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9OyB9IH07XG5cbiAgdmFyIGZ1bmN0aW9uRWFzaW5ncyA9IHtcbiAgICBTaW5lOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gMSAtIE1hdGguY29zKHQgKiBNYXRoLlBJIC8gMik7IH07IH0sXG4gICAgQ2lyYzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIHQgKiB0KTsgfTsgfSxcbiAgICBCYWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCAqIHQgKiAoMyAqIHQgLSAyKTsgfTsgfSxcbiAgICBCb3VuY2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgcG93MiwgYiA9IDQ7XG4gICAgICB3aGlsZSAodCA8ICgoIHBvdzIgPSBNYXRoLnBvdygyLCAtLWIpKSAtIDEpIC8gMTEpIHt9XG4gICAgICByZXR1cm4gMSAvIE1hdGgucG93KDQsIDMgLSBiKSAtIDcuNTYyNSAqIE1hdGgucG93KCggcG93MiAqIDMgLSAyICkgLyAyMiAtIHQsIDIpXG4gICAgfTsgfSxcbiAgICBFbGFzdGljOiBmdW5jdGlvbiAoYW1wbGl0dWRlLCBwZXJpb2QpIHtcbiAgICAgIGlmICggYW1wbGl0dWRlID09PSB2b2lkIDAgKSBhbXBsaXR1ZGUgPSAxO1xuICAgICAgaWYgKCBwZXJpb2QgPT09IHZvaWQgMCApIHBlcmlvZCA9IC41O1xuXG4gICAgICB2YXIgYSA9IG1pbk1heChhbXBsaXR1ZGUsIDEsIDEwKTtcbiAgICAgIHZhciBwID0gbWluTWF4KHBlcmlvZCwgLjEsIDIpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiAodCA9PT0gMCB8fCB0ID09PSAxKSA/IHQgOiBcbiAgICAgICAgICAtYSAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKiBNYXRoLnNpbigoKCh0IC0gMSkgLSAocCAvIChNYXRoLlBJICogMikgKiBNYXRoLmFzaW4oMSAvIGEpKSkgKiAoTWF0aC5QSSAqIDIpKSAvIHApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgYmFzZUVhc2luZ3MgPSBbJ1F1YWQnLCAnQ3ViaWMnLCAnUXVhcnQnLCAnUXVpbnQnLCAnRXhwbyddO1xuXG4gIGJhc2VFYXNpbmdzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIGkpIHtcbiAgICBmdW5jdGlvbkVhc2luZ3NbbmFtZV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gTWF0aC5wb3codCwgaSArIDIpOyB9OyB9O1xuICB9KTtcblxuICBPYmplY3Qua2V5cyhmdW5jdGlvbkVhc2luZ3MpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZWFzZUluID0gZnVuY3Rpb25FYXNpbmdzW25hbWVdO1xuICAgIGVhc2VzWydlYXNlSW4nICsgbmFtZV0gPSBlYXNlSW47XG4gICAgZWFzZXNbJ2Vhc2VPdXQnICsgbmFtZV0gPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBlYXNlSW4oYSwgYikoMSAtIHQpOyB9OyB9O1xuICAgIGVhc2VzWydlYXNlSW5PdXQnICsgbmFtZV0gPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgPCAwLjUgPyBlYXNlSW4oYSwgYikodCAqIDIpIC8gMiA6IFxuICAgICAgMSAtIGVhc2VJbihhLCBiKSh0ICogLTIgKyAyKSAvIDI7IH07IH07XG4gICAgZWFzZXNbJ2Vhc2VPdXRJbicgKyBuYW1lXSA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCA8IDAuNSA/ICgxIC0gZWFzZUluKGEsIGIpKDEgLSB0ICogMikpIC8gMiA6IFxuICAgICAgKGVhc2VJbihhLCBiKSh0ICogMiAtIDEpICsgMSkgLyAyOyB9OyB9O1xuICB9KTtcblxuICByZXR1cm4gZWFzZXM7XG5cbn0pKCk7XG5cbmZ1bmN0aW9uIHBhcnNlRWFzaW5ncyhlYXNpbmcsIGR1cmF0aW9uKSB7XG4gIGlmIChpcy5mbmMoZWFzaW5nKSkgeyByZXR1cm4gZWFzaW5nOyB9XG4gIHZhciBuYW1lID0gZWFzaW5nLnNwbGl0KCcoJylbMF07XG4gIHZhciBlYXNlID0gcGVubmVyW25hbWVdO1xuICB2YXIgYXJncyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhlYXNpbmcpO1xuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlICdzcHJpbmcnIDogcmV0dXJuIHNwcmluZyhlYXNpbmcsIGR1cmF0aW9uKTtcbiAgICBjYXNlICdjdWJpY0JlemllcicgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoYmV6aWVyLCBhcmdzKTtcbiAgICBjYXNlICdzdGVwcycgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoc3RlcHMsIGFyZ3MpO1xuICAgIGRlZmF1bHQgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoZWFzZSwgYXJncyk7XG4gIH1cbn1cblxuLy8gU3RyaW5nc1xuXG5mdW5jdGlvbiBzZWxlY3RTdHJpbmcoc3RyKSB7XG4gIHRyeSB7XG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzdHIpO1xuICAgIHJldHVybiBub2RlcztcbiAgfSBjYXRjaChlKSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8vIEFycmF5c1xuXG5mdW5jdGlvbiBmaWx0ZXJBcnJheShhcnIsIGNhbGxiYWNrKSB7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMiA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGkgaW4gYXJyKSB7XG4gICAgICB2YXIgdmFsID0gYXJyW2ldO1xuICAgICAgaWYgKGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsLCBpLCBhcnIpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuY29uY2F0KGlzLmFycihiKSA/IGZsYXR0ZW5BcnJheShiKSA6IGIpOyB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkobykge1xuICBpZiAoaXMuYXJyKG8pKSB7IHJldHVybiBvOyB9XG4gIGlmIChpcy5zdHIobykpIHsgbyA9IHNlbGVjdFN0cmluZyhvKSB8fCBvOyB9XG4gIGlmIChvIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbyBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSB7IHJldHVybiBbXS5zbGljZS5jYWxsKG8pOyB9XG4gIHJldHVybiBbb107XG59XG5cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMoYXJyLCB2YWwpIHtcbiAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChhKSB7IHJldHVybiBhID09PSB2YWw7IH0pO1xufVxuXG4vLyBPYmplY3RzXG5cbmZ1bmN0aW9uIGNsb25lT2JqZWN0KG8pIHtcbiAgdmFyIGNsb25lID0ge307XG4gIGZvciAodmFyIHAgaW4gbykgeyBjbG9uZVtwXSA9IG9bcF07IH1cbiAgcmV0dXJuIGNsb25lO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlT2JqZWN0UHJvcHMobzEsIG8yKSB7XG4gIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xuICBmb3IgKHZhciBwIGluIG8xKSB7IG9bcF0gPSBvMi5oYXNPd25Qcm9wZXJ0eShwKSA/IG8yW3BdIDogbzFbcF07IH1cbiAgcmV0dXJuIG87XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhvMSwgbzIpIHtcbiAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XG4gIGZvciAodmFyIHAgaW4gbzIpIHsgb1twXSA9IGlzLnVuZChvMVtwXSkgPyBvMltwXSA6IG8xW3BdOyB9XG4gIHJldHVybiBvO1xufVxuXG4vLyBDb2xvcnNcblxuZnVuY3Rpb24gcmdiVG9SZ2JhKHJnYlZhbHVlKSB7XG4gIHZhciByZ2IgPSAvcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMocmdiVmFsdWUpO1xuICByZXR1cm4gcmdiID8gKFwicmdiYShcIiArIChyZ2JbMV0pICsgXCIsMSlcIikgOiByZ2JWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2JhKGhleFZhbHVlKSB7XG4gIHZhciByZ3ggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICB2YXIgaGV4ID0gaGV4VmFsdWUucmVwbGFjZShyZ3gsIGZ1bmN0aW9uIChtLCByLCBnLCBiKSB7IHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7IH0gKTtcbiAgdmFyIHJnYiA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICB2YXIgciA9IHBhcnNlSW50KHJnYlsxXSwgMTYpO1xuICB2YXIgZyA9IHBhcnNlSW50KHJnYlsyXSwgMTYpO1xuICB2YXIgYiA9IHBhcnNlSW50KHJnYlszXSwgMTYpO1xuICByZXR1cm4gKFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIiwxKVwiKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2JhKGhzbFZhbHVlKSB7XG4gIHZhciBoc2wgPSAvaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhoc2xWYWx1ZSkgfHwgL2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoaHNsVmFsdWUpO1xuICB2YXIgaCA9IHBhcnNlSW50KGhzbFsxXSwgMTApIC8gMzYwO1xuICB2YXIgcyA9IHBhcnNlSW50KGhzbFsyXSwgMTApIC8gMTAwO1xuICB2YXIgbCA9IHBhcnNlSW50KGhzbFszXSwgMTApIC8gMTAwO1xuICB2YXIgYSA9IGhzbFs0XSB8fCAxO1xuICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICBpZiAodCA8IDApIHsgdCArPSAxOyB9XG4gICAgaWYgKHQgPiAxKSB7IHQgLT0gMTsgfVxuICAgIGlmICh0IDwgMS82KSB7IHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0OyB9XG4gICAgaWYgKHQgPCAxLzIpIHsgcmV0dXJuIHE7IH1cbiAgICBpZiAodCA8IDIvMykgeyByZXR1cm4gcCArIChxIC0gcCkgKiAoMi8zIC0gdCkgKiA2OyB9XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgdmFyIHIsIGcsIGI7XG4gIGlmIChzID09IDApIHtcbiAgICByID0gZyA9IGIgPSBsO1xuICB9IGVsc2Uge1xuICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICB2YXIgcCA9IDIgKiBsIC0gcTtcbiAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMS8zKTtcbiAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMS8zKTtcbiAgfVxuICByZXR1cm4gKFwicmdiYShcIiArIChyICogMjU1KSArIFwiLFwiICsgKGcgKiAyNTUpICsgXCIsXCIgKyAoYiAqIDI1NSkgKyBcIixcIiArIGEgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIGNvbG9yVG9SZ2IodmFsKSB7XG4gIGlmIChpcy5yZ2IodmFsKSkgeyByZXR1cm4gcmdiVG9SZ2JhKHZhbCk7IH1cbiAgaWYgKGlzLmhleCh2YWwpKSB7IHJldHVybiBoZXhUb1JnYmEodmFsKTsgfVxuICBpZiAoaXMuaHNsKHZhbCkpIHsgcmV0dXJuIGhzbFRvUmdiYSh2YWwpOyB9XG59XG5cbi8vIFVuaXRzXG5cbmZ1bmN0aW9uIGdldFVuaXQodmFsKSB7XG4gIHZhciBzcGxpdCA9IC9bKy1dP1xcZCpcXC4/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPyglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKHZhbCk7XG4gIGlmIChzcGxpdCkgeyByZXR1cm4gc3BsaXRbMV07IH1cbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSkge1xuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICd0cmFuc2xhdGUnKSB8fCBwcm9wTmFtZSA9PT0gJ3BlcnNwZWN0aXZlJykgeyByZXR1cm4gJ3B4JzsgfVxuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdyb3RhdGUnKSB8fCBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NrZXcnKSkgeyByZXR1cm4gJ2RlZyc7IH1cbn1cblxuLy8gVmFsdWVzXG5cbmZ1bmN0aW9uIGdldEZ1bmN0aW9uVmFsdWUodmFsLCBhbmltYXRhYmxlKSB7XG4gIGlmICghaXMuZm5jKHZhbCkpIHsgcmV0dXJuIHZhbDsgfVxuICByZXR1cm4gdmFsKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltYXRhYmxlLmlkLCBhbmltYXRhYmxlLnRvdGFsKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUocHJvcCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIHtcbiAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xuICBpZiAoYXJyYXlDb250YWlucyhbdW5pdCwgJ2RlZycsICdyYWQnLCAndHVybiddLCB2YWx1ZVVuaXQpKSB7IHJldHVybiB2YWx1ZTsgfVxuICB2YXIgY2FjaGVkID0gY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF07XG4gIGlmICghaXMudW5kKGNhY2hlZCkpIHsgcmV0dXJuIGNhY2hlZDsgfVxuICB2YXIgYmFzZWxpbmUgPSAxMDA7XG4gIHZhciB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsLnRhZ05hbWUpO1xuICB2YXIgcGFyZW50RWwgPSAoZWwucGFyZW50Tm9kZSAmJiAoZWwucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQpKSA/IGVsLnBhcmVudE5vZGUgOiBkb2N1bWVudC5ib2R5O1xuICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0ZW1wRWwpO1xuICB0ZW1wRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICB0ZW1wRWwuc3R5bGUud2lkdGggPSBiYXNlbGluZSArIHVuaXQ7XG4gIHZhciBmYWN0b3IgPSBiYXNlbGluZSAvIHRlbXBFbC5vZmZzZXRXaWR0aDtcbiAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEVsKTtcbiAgdmFyIGNvbnZlcnRlZFVuaXQgPSBmYWN0b3IgKiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF0gPSBjb252ZXJ0ZWRVbml0O1xuICByZXR1cm4gY29udmVydGVkVW5pdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q1NTVmFsdWUoZWwsIHByb3AsIHVuaXQpIHtcbiAgaWYgKHByb3AgaW4gZWwuc3R5bGUpIHtcbiAgICB2YXIgdXBwZXJjYXNlUHJvcE5hbWUgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIHZhbHVlID0gZWwuc3R5bGVbcHJvcF0gfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSh1cHBlcmNhc2VQcm9wTmFtZSkgfHwgJzAnO1xuICAgIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25UeXBlKGVsLCBwcm9wKSB7XG4gIGlmIChpcy5kb20oZWwpICYmICFpcy5pbnAoZWwpICYmICghaXMubmlsKGdldEF0dHJpYnV0ZShlbCwgcHJvcCkpIHx8IChpcy5zdmcoZWwpICYmIGVsW3Byb3BdKSkpIHsgcmV0dXJuICdhdHRyaWJ1dGUnOyB9XG4gIGlmIChpcy5kb20oZWwpICYmIGFycmF5Q29udGFpbnModmFsaWRUcmFuc2Zvcm1zLCBwcm9wKSkgeyByZXR1cm4gJ3RyYW5zZm9ybSc7IH1cbiAgaWYgKGlzLmRvbShlbCkgJiYgKHByb3AgIT09ICd0cmFuc2Zvcm0nICYmIGdldENTU1ZhbHVlKGVsLCBwcm9wKSkpIHsgcmV0dXJuICdjc3MnOyB9XG4gIGlmIChlbFtwcm9wXSAhPSBudWxsKSB7IHJldHVybiAnb2JqZWN0JzsgfVxufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkge1xuICBpZiAoIWlzLmRvbShlbCkpIHsgcmV0dXJuOyB9XG4gIHZhciBzdHIgPSBlbC5zdHlsZS50cmFuc2Zvcm0gfHwgJyc7XG4gIHZhciByZWcgID0gLyhcXHcrKVxcKChbXildKilcXCkvZztcbiAgdmFyIHRyYW5zZm9ybXMgPSBuZXcgTWFwKCk7XG4gIHZhciBtOyB3aGlsZSAobSA9IHJlZy5leGVjKHN0cikpIHsgdHJhbnNmb3Jtcy5zZXQobVsxXSwgbVsyXSk7IH1cbiAgcmV0dXJuIHRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVZhbHVlKGVsLCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCkge1xuICB2YXIgZGVmYXVsdFZhbCA9IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2NhbGUnKSA/IDEgOiAwICsgZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSk7XG4gIHZhciB2YWx1ZSA9IGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKS5nZXQocHJvcE5hbWUpIHx8IGRlZmF1bHRWYWw7XG4gIGlmIChhbmltYXRhYmxlKSB7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLmxpc3Quc2V0KHByb3BOYW1lLCB2YWx1ZSk7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zWydsYXN0J10gPSBwcm9wTmFtZTtcbiAgfVxuICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCwgYW5pbWF0YWJsZSkge1xuICBzd2l0Y2ggKGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wTmFtZSkpIHtcbiAgICBjYXNlICd0cmFuc2Zvcm0nOiByZXR1cm4gZ2V0VHJhbnNmb3JtVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCk7XG4gICAgY2FzZSAnY3NzJzogcmV0dXJuIGdldENTU1ZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQpO1xuICAgIGNhc2UgJ2F0dHJpYnV0ZSc6IHJldHVybiBnZXRBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wTmFtZSk7XG4gICAgZGVmYXVsdDogcmV0dXJuIHRhcmdldFtwcm9wTmFtZV0gfHwgMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSB7XG4gIHZhciBvcGVyYXRvciA9IC9eKFxcKj18XFwrPXwtPSkvLmV4ZWModG8pO1xuICBpZiAoIW9wZXJhdG9yKSB7IHJldHVybiB0bzsgfVxuICB2YXIgdSA9IGdldFVuaXQodG8pIHx8IDA7XG4gIHZhciB4ID0gcGFyc2VGbG9hdChmcm9tKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KHRvLnJlcGxhY2Uob3BlcmF0b3JbMF0sICcnKSk7XG4gIHN3aXRjaCAob3BlcmF0b3JbMF1bMF0pIHtcbiAgICBjYXNlICcrJzogcmV0dXJuIHggKyB5ICsgdTtcbiAgICBjYXNlICctJzogcmV0dXJuIHggLSB5ICsgdTtcbiAgICBjYXNlICcqJzogcmV0dXJuIHggKiB5ICsgdTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbCwgdW5pdCkge1xuICBpZiAoaXMuY29sKHZhbCkpIHsgcmV0dXJuIGNvbG9yVG9SZ2IodmFsKTsgfVxuICBpZiAoL1xccy9nLnRlc3QodmFsKSkgeyByZXR1cm4gdmFsOyB9XG4gIHZhciBvcmlnaW5hbFVuaXQgPSBnZXRVbml0KHZhbCk7XG4gIHZhciB1bml0TGVzcyA9IG9yaWdpbmFsVW5pdCA/IHZhbC5zdWJzdHIoMCwgdmFsLmxlbmd0aCAtIG9yaWdpbmFsVW5pdC5sZW5ndGgpIDogdmFsO1xuICBpZiAodW5pdCkgeyByZXR1cm4gdW5pdExlc3MgKyB1bml0OyB9XG4gIHJldHVybiB1bml0TGVzcztcbn1cblxuLy8gZ2V0VG90YWxMZW5ndGgoKSBlcXVpdmFsZW50IGZvciBjaXJjbGUsIHJlY3QsIHBvbHlsaW5lLCBwb2x5Z29uIGFuZCBsaW5lIHNoYXBlc1xuLy8gYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1NlYkxhbWJsYS8zZTA1NTBjNDk2YzIzNjcwOTc0NFxuXG5mdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xufVxuXG5mdW5jdGlvbiBnZXRDaXJjbGVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIE1hdGguUEkgKiAyICogZ2V0QXR0cmlidXRlKGVsLCAncicpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWN0TGVuZ3RoKGVsKSB7XG4gIHJldHVybiAoZ2V0QXR0cmlidXRlKGVsLCAnd2lkdGgnKSAqIDIpICsgKGdldEF0dHJpYnV0ZShlbCwgJ2hlaWdodCcpICogMik7XG59XG5cbmZ1bmN0aW9uIGdldExpbmVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIGdldERpc3RhbmNlKFxuICAgIHt4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MScpLCB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MScpfSwgXG4gICAge3g6IGdldEF0dHJpYnV0ZShlbCwgJ3gyJyksIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kyJyl9XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSB7XG4gIHZhciBwb2ludHMgPSBlbC5wb2ludHM7XG4gIHZhciB0b3RhbExlbmd0aCA9IDA7XG4gIHZhciBwcmV2aW91c1BvcztcbiAgZm9yICh2YXIgaSA9IDAgOyBpIDwgcG9pbnRzLm51bWJlck9mSXRlbXM7IGkrKykge1xuICAgIHZhciBjdXJyZW50UG9zID0gcG9pbnRzLmdldEl0ZW0oaSk7XG4gICAgaWYgKGkgPiAwKSB7IHRvdGFsTGVuZ3RoICs9IGdldERpc3RhbmNlKHByZXZpb3VzUG9zLCBjdXJyZW50UG9zKTsgfVxuICAgIHByZXZpb3VzUG9zID0gY3VycmVudFBvcztcbiAgfVxuICByZXR1cm4gdG90YWxMZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlnb25MZW5ndGgoZWwpIHtcbiAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcbiAgcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSArIGdldERpc3RhbmNlKHBvaW50cy5nZXRJdGVtKHBvaW50cy5udW1iZXJPZkl0ZW1zIC0gMSksIHBvaW50cy5nZXRJdGVtKDApKTtcbn1cblxuLy8gUGF0aCBhbmltYXRpb25cblxuZnVuY3Rpb24gZ2V0VG90YWxMZW5ndGgoZWwpIHtcbiAgaWYgKGVsLmdldFRvdGFsTGVuZ3RoKSB7IHJldHVybiBlbC5nZXRUb3RhbExlbmd0aCgpOyB9XG4gIHN3aXRjaChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdjaXJjbGUnOiByZXR1cm4gZ2V0Q2lyY2xlTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdyZWN0JzogcmV0dXJuIGdldFJlY3RMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ2xpbmUnOiByZXR1cm4gZ2V0TGluZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncG9seWxpbmUnOiByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3BvbHlnb24nOiByZXR1cm4gZ2V0UG9seWdvbkxlbmd0aChlbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RGFzaG9mZnNldChlbCkge1xuICB2YXIgcGF0aExlbmd0aCA9IGdldFRvdGFsTGVuZ3RoKGVsKTtcbiAgZWwuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgcGF0aExlbmd0aCk7XG4gIHJldHVybiBwYXRoTGVuZ3RoO1xufVxuXG4vLyBNb3Rpb24gcGF0aFxuXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmdFbChlbCkge1xuICB2YXIgcGFyZW50RWwgPSBlbC5wYXJlbnROb2RlO1xuICB3aGlsZSAoaXMuc3ZnKHBhcmVudEVsKSkge1xuICAgIGlmICghaXMuc3ZnKHBhcmVudEVsLnBhcmVudE5vZGUpKSB7IGJyZWFrOyB9XG4gICAgcGFyZW50RWwgPSBwYXJlbnRFbC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBwYXJlbnRFbDtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnKHBhdGhFbCwgc3ZnRGF0YSkge1xuICB2YXIgc3ZnID0gc3ZnRGF0YSB8fCB7fTtcbiAgdmFyIHBhcmVudFN2Z0VsID0gc3ZnLmVsIHx8IGdldFBhcmVudFN2Z0VsKHBhdGhFbCk7XG4gIHZhciByZWN0ID0gcGFyZW50U3ZnRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciB2aWV3Qm94QXR0ciA9IGdldEF0dHJpYnV0ZShwYXJlbnRTdmdFbCwgJ3ZpZXdCb3gnKTtcbiAgdmFyIHdpZHRoID0gcmVjdC53aWR0aDtcbiAgdmFyIGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICB2YXIgdmlld0JveCA9IHN2Zy52aWV3Qm94IHx8ICh2aWV3Qm94QXR0ciA/IHZpZXdCb3hBdHRyLnNwbGl0KCcgJykgOiBbMCwgMCwgd2lkdGgsIGhlaWdodF0pO1xuICByZXR1cm4ge1xuICAgIGVsOiBwYXJlbnRTdmdFbCxcbiAgICB2aWV3Qm94OiB2aWV3Qm94LFxuICAgIHg6IHZpZXdCb3hbMF0gLyAxLFxuICAgIHk6IHZpZXdCb3hbMV0gLyAxLFxuICAgIHc6IHdpZHRoLFxuICAgIGg6IGhlaWdodCxcbiAgICB2Vzogdmlld0JveFsyXSxcbiAgICB2SDogdmlld0JveFszXVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhdGgocGF0aCwgcGVyY2VudCkge1xuICB2YXIgcGF0aEVsID0gaXMuc3RyKHBhdGgpID8gc2VsZWN0U3RyaW5nKHBhdGgpWzBdIDogcGF0aDtcbiAgdmFyIHAgPSBwZXJjZW50IHx8IDEwMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgIGVsOiBwYXRoRWwsXG4gICAgICBzdmc6IGdldFBhcmVudFN2ZyhwYXRoRWwpLFxuICAgICAgdG90YWxMZW5ndGg6IGdldFRvdGFsTGVuZ3RoKHBhdGhFbCkgKiAocCAvIDEwMClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGF0aFByb2dyZXNzKHBhdGgsIHByb2dyZXNzLCBpc1BhdGhUYXJnZXRJbnNpZGVTVkcpIHtcbiAgZnVuY3Rpb24gcG9pbnQob2Zmc2V0KSB7XG4gICAgaWYgKCBvZmZzZXQgPT09IHZvaWQgMCApIG9mZnNldCA9IDA7XG5cbiAgICB2YXIgbCA9IHByb2dyZXNzICsgb2Zmc2V0ID49IDEgPyBwcm9ncmVzcyArIG9mZnNldCA6IDA7XG4gICAgcmV0dXJuIHBhdGguZWwuZ2V0UG9pbnRBdExlbmd0aChsKTtcbiAgfVxuICB2YXIgc3ZnID0gZ2V0UGFyZW50U3ZnKHBhdGguZWwsIHBhdGguc3ZnKTtcbiAgdmFyIHAgPSBwb2ludCgpO1xuICB2YXIgcDAgPSBwb2ludCgtMSk7XG4gIHZhciBwMSA9IHBvaW50KCsxKTtcbiAgdmFyIHNjYWxlWCA9IGlzUGF0aFRhcmdldEluc2lkZVNWRyA/IDEgOiBzdmcudyAvIHN2Zy52VztcbiAgdmFyIHNjYWxlWSA9IGlzUGF0aFRhcmdldEluc2lkZVNWRyA/IDEgOiBzdmcuaCAvIHN2Zy52SDtcbiAgc3dpdGNoIChwYXRoLnByb3BlcnR5KSB7XG4gICAgY2FzZSAneCc6IHJldHVybiAocC54IC0gc3ZnLngpICogc2NhbGVYO1xuICAgIGNhc2UgJ3knOiByZXR1cm4gKHAueSAtIHN2Zy55KSAqIHNjYWxlWTtcbiAgICBjYXNlICdhbmdsZSc6IHJldHVybiBNYXRoLmF0YW4yKHAxLnkgLSBwMC55LCBwMS54IC0gcDAueCkgKiAxODAgLyBNYXRoLlBJO1xuICB9XG59XG5cbi8vIERlY29tcG9zZSB2YWx1ZVxuXG5mdW5jdGlvbiBkZWNvbXBvc2VWYWx1ZSh2YWwsIHVuaXQpIHtcbiAgLy8gY29uc3Qgcmd4ID0gLy0/XFxkKlxcLj9cXGQrL2c7IC8vIGhhbmRsZXMgYmFzaWMgbnVtYmVyc1xuICAvLyBjb25zdCByZ3ggPSAvWystXT9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/L2c7IC8vIGhhbmRsZXMgZXhwb25lbnRzIG5vdGF0aW9uXG4gIHZhciByZ3ggPSAvWystXT9cXGQqXFwuP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8vZzsgLy8gaGFuZGxlcyBleHBvbmVudHMgbm90YXRpb25cbiAgdmFyIHZhbHVlID0gdmFsaWRhdGVWYWx1ZSgoaXMucHRoKHZhbCkgPyB2YWwudG90YWxMZW5ndGggOiB2YWwpLCB1bml0KSArICcnO1xuICByZXR1cm4ge1xuICAgIG9yaWdpbmFsOiB2YWx1ZSxcbiAgICBudW1iZXJzOiB2YWx1ZS5tYXRjaChyZ3gpID8gdmFsdWUubWF0Y2gocmd4KS5tYXAoTnVtYmVyKSA6IFswXSxcbiAgICBzdHJpbmdzOiAoaXMuc3RyKHZhbCkgfHwgdW5pdCkgPyB2YWx1ZS5zcGxpdChyZ3gpIDogW11cbiAgfVxufVxuXG4vLyBBbmltYXRhYmxlc1xuXG5mdW5jdGlvbiBwYXJzZVRhcmdldHModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0c0FycmF5ID0gdGFyZ2V0cyA/IChmbGF0dGVuQXJyYXkoaXMuYXJyKHRhcmdldHMpID8gdGFyZ2V0cy5tYXAodG9BcnJheSkgOiB0b0FycmF5KHRhcmdldHMpKSkgOiBbXTtcbiAgcmV0dXJuIGZpbHRlckFycmF5KHRhcmdldHNBcnJheSwgZnVuY3Rpb24gKGl0ZW0sIHBvcywgc2VsZikgeyByZXR1cm4gc2VsZi5pbmRleE9mKGl0ZW0pID09PSBwb3M7IH0pO1xufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRhYmxlcyh0YXJnZXRzKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gIHJldHVybiBwYXJzZWQubWFwKGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgcmV0dXJuIHt0YXJnZXQ6IHQsIGlkOiBpLCB0b3RhbDogcGFyc2VkLmxlbmd0aCwgdHJhbnNmb3JtczogeyBsaXN0OiBnZXRFbGVtZW50VHJhbnNmb3Jtcyh0KSB9IH07XG4gIH0pO1xufVxuXG4vLyBQcm9wZXJ0aWVzXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zKHByb3AsIHR3ZWVuU2V0dGluZ3MpIHtcbiAgdmFyIHNldHRpbmdzID0gY2xvbmVPYmplY3QodHdlZW5TZXR0aW5ncyk7XG4gIC8vIE92ZXJyaWRlIGR1cmF0aW9uIGlmIGVhc2luZyBpcyBhIHNwcmluZ1xuICBpZiAoL15zcHJpbmcvLnRlc3Qoc2V0dGluZ3MuZWFzaW5nKSkgeyBzZXR0aW5ncy5kdXJhdGlvbiA9IHNwcmluZyhzZXR0aW5ncy5lYXNpbmcpOyB9XG4gIGlmIChpcy5hcnIocHJvcCkpIHtcbiAgICB2YXIgbCA9IHByb3AubGVuZ3RoO1xuICAgIHZhciBpc0Zyb21UbyA9IChsID09PSAyICYmICFpcy5vYmoocHJvcFswXSkpO1xuICAgIGlmICghaXNGcm9tVG8pIHtcbiAgICAgIC8vIER1cmF0aW9uIGRpdmlkZWQgYnkgdGhlIG51bWJlciBvZiB0d2VlbnNcbiAgICAgIGlmICghaXMuZm5jKHR3ZWVuU2V0dGluZ3MuZHVyYXRpb24pKSB7IHNldHRpbmdzLmR1cmF0aW9uID0gdHdlZW5TZXR0aW5ncy5kdXJhdGlvbiAvIGw7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJhbnNmb3JtIFtmcm9tLCB0b10gdmFsdWVzIHNob3J0aGFuZCB0byBhIHZhbGlkIHR3ZWVuIHZhbHVlXG4gICAgICBwcm9wID0ge3ZhbHVlOiBwcm9wfTtcbiAgICB9XG4gIH1cbiAgdmFyIHByb3BBcnJheSA9IGlzLmFycihwcm9wKSA/IHByb3AgOiBbcHJvcF07XG4gIHJldHVybiBwcm9wQXJyYXkubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgdmFyIG9iaiA9IChpcy5vYmoodikgJiYgIWlzLnB0aCh2KSkgPyB2IDoge3ZhbHVlOiB2fTtcbiAgICAvLyBEZWZhdWx0IGRlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGZpcnN0IHR3ZWVuXG4gICAgaWYgKGlzLnVuZChvYmouZGVsYXkpKSB7IG9iai5kZWxheSA9ICFpID8gdHdlZW5TZXR0aW5ncy5kZWxheSA6IDA7IH1cbiAgICAvLyBEZWZhdWx0IGVuZERlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGxhc3QgdHdlZW5cbiAgICBpZiAoaXMudW5kKG9iai5lbmREZWxheSkpIHsgb2JqLmVuZERlbGF5ID0gaSA9PT0gcHJvcEFycmF5Lmxlbmd0aCAtIDEgPyB0d2VlblNldHRpbmdzLmVuZERlbGF5IDogMDsgfVxuICAgIHJldHVybiBvYmo7XG4gIH0pLm1hcChmdW5jdGlvbiAoaykgeyByZXR1cm4gbWVyZ2VPYmplY3RzKGssIHNldHRpbmdzKTsgfSk7XG59XG5cblxuZnVuY3Rpb24gZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpIHtcbiAgdmFyIHByb3BlcnR5TmFtZXMgPSBmaWx0ZXJBcnJheShmbGF0dGVuQXJyYXkoa2V5ZnJhbWVzLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBPYmplY3Qua2V5cyhrZXkpOyB9KSksIGZ1bmN0aW9uIChwKSB7IHJldHVybiBpcy5rZXkocCk7IH0pXG4gIC5yZWR1Y2UoZnVuY3Rpb24gKGEsYikgeyBpZiAoYS5pbmRleE9mKGIpIDwgMCkgeyBhLnB1c2goYik7IH0gcmV0dXJuIGE7IH0sIFtdKTtcbiAgdmFyIHByb3BlcnRpZXMgPSB7fTtcbiAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGkgKSB7XG4gICAgdmFyIHByb3BOYW1lID0gcHJvcGVydHlOYW1lc1tpXTtcbiAgICBwcm9wZXJ0aWVzW3Byb3BOYW1lXSA9IGtleWZyYW1lcy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG5ld0tleSA9IHt9O1xuICAgICAgZm9yICh2YXIgcCBpbiBrZXkpIHtcbiAgICAgICAgaWYgKGlzLmtleShwKSkge1xuICAgICAgICAgIGlmIChwID09IHByb3BOYW1lKSB7IG5ld0tleS52YWx1ZSA9IGtleVtwXTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0tleVtwXSA9IGtleVtwXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0tleTtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIGxvb3AoIGkgKTtcbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXModHdlZW5TZXR0aW5ncywgcGFyYW1zKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gW107XG4gIHZhciBrZXlmcmFtZXMgPSBwYXJhbXMua2V5ZnJhbWVzO1xuICBpZiAoa2V5ZnJhbWVzKSB7IHBhcmFtcyA9IG1lcmdlT2JqZWN0cyhmbGF0dGVuS2V5ZnJhbWVzKGtleWZyYW1lcyksIHBhcmFtcyk7IH1cbiAgZm9yICh2YXIgcCBpbiBwYXJhbXMpIHtcbiAgICBpZiAoaXMua2V5KHApKSB7XG4gICAgICBwcm9wZXJ0aWVzLnB1c2goe1xuICAgICAgICBuYW1lOiBwLFxuICAgICAgICB0d2VlbnM6IG5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zKHBhcmFtc1twXSwgdHdlZW5TZXR0aW5ncylcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuLy8gVHdlZW5zXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVuVmFsdWVzKHR3ZWVuLCBhbmltYXRhYmxlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gdHdlZW4pIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRGdW5jdGlvblZhbHVlKHR3ZWVuW3BdLCBhbmltYXRhYmxlKTtcbiAgICBpZiAoaXMuYXJyKHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGdldEZ1bmN0aW9uVmFsdWUodiwgYW5pbWF0YWJsZSk7IH0pO1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMSkgeyB2YWx1ZSA9IHZhbHVlWzBdOyB9XG4gICAgfVxuICAgIHRbcF0gPSB2YWx1ZTtcbiAgfVxuICB0LmR1cmF0aW9uID0gcGFyc2VGbG9hdCh0LmR1cmF0aW9uKTtcbiAgdC5kZWxheSA9IHBhcnNlRmxvYXQodC5kZWxheSk7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSkge1xuICB2YXIgcHJldmlvdXNUd2VlbjtcbiAgcmV0dXJuIHByb3AudHdlZW5zLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHZhciB0d2VlbiA9IG5vcm1hbGl6ZVR3ZWVuVmFsdWVzKHQsIGFuaW1hdGFibGUpO1xuICAgIHZhciB0d2VlblZhbHVlID0gdHdlZW4udmFsdWU7XG4gICAgdmFyIHRvID0gaXMuYXJyKHR3ZWVuVmFsdWUpID8gdHdlZW5WYWx1ZVsxXSA6IHR3ZWVuVmFsdWU7XG4gICAgdmFyIHRvVW5pdCA9IGdldFVuaXQodG8pO1xuICAgIHZhciBvcmlnaW5hbFZhbHVlID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZShhbmltYXRhYmxlLnRhcmdldCwgcHJvcC5uYW1lLCB0b1VuaXQsIGFuaW1hdGFibGUpO1xuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4udG8ub3JpZ2luYWwgOiBvcmlnaW5hbFZhbHVlO1xuICAgIHZhciBmcm9tID0gaXMuYXJyKHR3ZWVuVmFsdWUpID8gdHdlZW5WYWx1ZVswXSA6IHByZXZpb3VzVmFsdWU7XG4gICAgdmFyIGZyb21Vbml0ID0gZ2V0VW5pdChmcm9tKSB8fCBnZXRVbml0KG9yaWdpbmFsVmFsdWUpO1xuICAgIHZhciB1bml0ID0gdG9Vbml0IHx8IGZyb21Vbml0O1xuICAgIGlmIChpcy51bmQodG8pKSB7IHRvID0gcHJldmlvdXNWYWx1ZTsgfVxuICAgIHR3ZWVuLmZyb20gPSBkZWNvbXBvc2VWYWx1ZShmcm9tLCB1bml0KTtcbiAgICB0d2Vlbi50byA9IGRlY29tcG9zZVZhbHVlKGdldFJlbGF0aXZlVmFsdWUodG8sIGZyb20pLCB1bml0KTtcbiAgICB0d2Vlbi5zdGFydCA9IHByZXZpb3VzVHdlZW4gPyBwcmV2aW91c1R3ZWVuLmVuZCA6IDA7XG4gICAgdHdlZW4uZW5kID0gdHdlZW4uc3RhcnQgKyB0d2Vlbi5kZWxheSArIHR3ZWVuLmR1cmF0aW9uICsgdHdlZW4uZW5kRGVsYXk7XG4gICAgdHdlZW4uZWFzaW5nID0gcGFyc2VFYXNpbmdzKHR3ZWVuLmVhc2luZywgdHdlZW4uZHVyYXRpb24pO1xuICAgIHR3ZWVuLmlzUGF0aCA9IGlzLnB0aCh0d2VlblZhbHVlKTtcbiAgICB0d2Vlbi5pc1BhdGhUYXJnZXRJbnNpZGVTVkcgPSB0d2Vlbi5pc1BhdGggJiYgaXMuc3ZnKGFuaW1hdGFibGUudGFyZ2V0KTtcbiAgICB0d2Vlbi5pc0NvbG9yID0gaXMuY29sKHR3ZWVuLmZyb20ub3JpZ2luYWwpO1xuICAgIGlmICh0d2Vlbi5pc0NvbG9yKSB7IHR3ZWVuLnJvdW5kID0gMTsgfVxuICAgIHByZXZpb3VzVHdlZW4gPSB0d2VlbjtcbiAgICByZXR1cm4gdHdlZW47XG4gIH0pO1xufVxuXG4vLyBUd2VlbiBwcm9ncmVzc1xuXG52YXIgc2V0UHJvZ3Jlc3NWYWx1ZSA9IHtcbiAgY3NzOiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdC5zdHlsZVtwXSA9IHY7IH0sXG4gIGF0dHJpYnV0ZTogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHQuc2V0QXR0cmlidXRlKHAsIHYpOyB9LFxuICBvYmplY3Q6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0W3BdID0gdjsgfSxcbiAgdHJhbnNmb3JtOiBmdW5jdGlvbiAodCwgcCwgdiwgdHJhbnNmb3JtcywgbWFudWFsKSB7XG4gICAgdHJhbnNmb3Jtcy5saXN0LnNldChwLCB2KTtcbiAgICBpZiAocCA9PT0gdHJhbnNmb3Jtcy5sYXN0IHx8IG1hbnVhbCkge1xuICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgdHJhbnNmb3Jtcy5saXN0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7IHN0ciArPSBwcm9wICsgXCIoXCIgKyB2YWx1ZSArIFwiKSBcIjsgfSk7XG4gICAgICB0LnN0eWxlLnRyYW5zZm9ybSA9IHN0cjtcbiAgICB9XG4gIH1cbn07XG5cbi8vIFNldCBWYWx1ZSBoZWxwZXJcblxuZnVuY3Rpb24gc2V0VGFyZ2V0c1ZhbHVlKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcbiAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cyk7XG4gIGFuaW1hdGFibGVzLmZvckVhY2goZnVuY3Rpb24gKGFuaW1hdGFibGUpIHtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXRGdW5jdGlvblZhbHVlKHByb3BlcnRpZXNbcHJvcGVydHldLCBhbmltYXRhYmxlKTtcbiAgICAgIHZhciB0YXJnZXQgPSBhbmltYXRhYmxlLnRhcmdldDtcbiAgICAgIHZhciB2YWx1ZVVuaXQgPSBnZXRVbml0KHZhbHVlKTtcbiAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZVVuaXQsIGFuaW1hdGFibGUpO1xuICAgICAgdmFyIHVuaXQgPSB2YWx1ZVVuaXQgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcbiAgICAgIHZhciB0byA9IGdldFJlbGF0aXZlVmFsdWUodmFsaWRhdGVWYWx1ZSh2YWx1ZSwgdW5pdCksIG9yaWdpbmFsVmFsdWUpO1xuICAgICAgdmFyIGFuaW1UeXBlID0gZ2V0QW5pbWF0aW9uVHlwZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgIHNldFByb2dyZXNzVmFsdWVbYW5pbVR5cGVdKHRhcmdldCwgcHJvcGVydHksIHRvLCBhbmltYXRhYmxlLnRyYW5zZm9ybXMsIHRydWUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIEFuaW1hdGlvbnNcblxuZnVuY3Rpb24gY3JlYXRlQW5pbWF0aW9uKGFuaW1hdGFibGUsIHByb3ApIHtcbiAgdmFyIGFuaW1UeXBlID0gZ2V0QW5pbWF0aW9uVHlwZShhbmltYXRhYmxlLnRhcmdldCwgcHJvcC5uYW1lKTtcbiAgaWYgKGFuaW1UeXBlKSB7XG4gICAgdmFyIHR3ZWVucyA9IG5vcm1hbGl6ZVR3ZWVucyhwcm9wLCBhbmltYXRhYmxlKTtcbiAgICB2YXIgbGFzdFR3ZWVuID0gdHdlZW5zW3R3ZWVucy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogYW5pbVR5cGUsXG4gICAgICBwcm9wZXJ0eTogcHJvcC5uYW1lLFxuICAgICAgYW5pbWF0YWJsZTogYW5pbWF0YWJsZSxcbiAgICAgIHR3ZWVuczogdHdlZW5zLFxuICAgICAgZHVyYXRpb246IGxhc3RUd2Vlbi5lbmQsXG4gICAgICBkZWxheTogdHdlZW5zWzBdLmRlbGF5LFxuICAgICAgZW5kRGVsYXk6IGxhc3RUd2Vlbi5lbmREZWxheVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25zKGFuaW1hdGFibGVzLCBwcm9wZXJ0aWVzKSB7XG4gIHJldHVybiBmaWx0ZXJBcnJheShmbGF0dGVuQXJyYXkoYW5pbWF0YWJsZXMubWFwKGZ1bmN0aW9uIChhbmltYXRhYmxlKSB7XG4gICAgcmV0dXJuIHByb3BlcnRpZXMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQW5pbWF0aW9uKGFuaW1hdGFibGUsIHByb3ApO1xuICAgIH0pO1xuICB9KSksIGZ1bmN0aW9uIChhKSB7IHJldHVybiAhaXMudW5kKGEpOyB9KTtcbn1cblxuLy8gQ3JlYXRlIEluc3RhbmNlXG5cbmZ1bmN0aW9uIGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKSB7XG4gIHZhciBhbmltTGVuZ3RoID0gYW5pbWF0aW9ucy5sZW5ndGg7XG4gIHZhciBnZXRUbE9mZnNldCA9IGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBhbmltLnRpbWVsaW5lT2Zmc2V0ID8gYW5pbS50aW1lbGluZU9mZnNldCA6IDA7IH07XG4gIHZhciB0aW1pbmdzID0ge307XG4gIHRpbWluZ3MuZHVyYXRpb24gPSBhbmltTGVuZ3RoID8gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbjsgfSkpIDogdHdlZW5TZXR0aW5ncy5kdXJhdGlvbjtcbiAgdGltaW5ncy5kZWxheSA9IGFuaW1MZW5ndGggPyBNYXRoLm1pbi5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmRlbGF5OyB9KSkgOiB0d2VlblNldHRpbmdzLmRlbGF5O1xuICB0aW1pbmdzLmVuZERlbGF5ID0gYW5pbUxlbmd0aCA/IHRpbWluZ3MuZHVyYXRpb24gLSBNYXRoLm1heC5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmR1cmF0aW9uIC0gYW5pbS5lbmREZWxheTsgfSkpIDogdHdlZW5TZXR0aW5ncy5lbmREZWxheTtcbiAgcmV0dXJuIHRpbWluZ3M7XG59XG5cbnZhciBpbnN0YW5jZUlEID0gMDtcblxuZnVuY3Rpb24gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKSB7XG4gIHZhciBpbnN0YW5jZVNldHRpbmdzID0gcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgdHdlZW5TZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIHByb3BlcnRpZXMgPSBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHBhcmFtcy50YXJnZXRzKTtcbiAgdmFyIGFuaW1hdGlvbnMgPSBnZXRBbmltYXRpb25zKGFuaW1hdGFibGVzLCBwcm9wZXJ0aWVzKTtcbiAgdmFyIHRpbWluZ3MgPSBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncyk7XG4gIHZhciBpZCA9IGluc3RhbmNlSUQ7XG4gIGluc3RhbmNlSUQrKztcbiAgcmV0dXJuIG1lcmdlT2JqZWN0cyhpbnN0YW5jZVNldHRpbmdzLCB7XG4gICAgaWQ6IGlkLFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBhbmltYXRhYmxlczogYW5pbWF0YWJsZXMsXG4gICAgYW5pbWF0aW9uczogYW5pbWF0aW9ucyxcbiAgICBkdXJhdGlvbjogdGltaW5ncy5kdXJhdGlvbixcbiAgICBkZWxheTogdGltaW5ncy5kZWxheSxcbiAgICBlbmREZWxheTogdGltaW5ncy5lbmREZWxheVxuICB9KTtcbn1cblxuLy8gQ29yZVxuXG52YXIgYWN0aXZlSW5zdGFuY2VzID0gW107XG5cbnZhciBlbmdpbmUgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmFmO1xuXG4gIGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgaWYgKCFyYWYgJiYgKCFpc0RvY3VtZW50SGlkZGVuKCkgfHwgIWFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4pICYmIGFjdGl2ZUluc3RhbmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHN0ZXAodCkge1xuICAgIC8vIG1lbW8gb24gYWxnb3JpdGhtIGlzc3VlOlxuICAgIC8vIGRhbmdlcm91cyBpdGVyYXRpb24gb3ZlciBtdXRhYmxlIGBhY3RpdmVJbnN0YW5jZXNgXG4gICAgLy8gKHRoYXQgY29sbGVjdGlvbiBtYXkgYmUgdXBkYXRlZCBmcm9tIHdpdGhpbiBjYWxsYmFja3Mgb2YgYHRpY2tgLWVkIGFuaW1hdGlvbiBpbnN0YW5jZXMpXG4gICAgdmFyIGFjdGl2ZUluc3RhbmNlc0xlbmd0aCA9IGFjdGl2ZUluc3RhbmNlcy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoKSB7XG4gICAgICB2YXIgYWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XG4gICAgICBpZiAoIWFjdGl2ZUluc3RhbmNlLnBhdXNlZCkge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZS50aWNrKHQpO1xuICAgICAgICBpKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICBhY3RpdmVJbnN0YW5jZXNMZW5ndGgtLTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmFmID0gaSA+IDAgPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgIGlmICghYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbikgeyByZXR1cm47IH1cblxuICAgIGlmIChpc0RvY3VtZW50SGlkZGVuKCkpIHtcbiAgICAgIC8vIHN1c3BlbmQgdGlja3NcbiAgICAgIHJhZiA9IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gICAgfSBlbHNlIHsgLy8gaXMgYmFjayB0byBhY3RpdmUgdGFiXG4gICAgICAvLyBmaXJzdCBhZGp1c3QgYW5pbWF0aW9ucyB0byBjb25zaWRlciB0aGUgdGltZSB0aGF0IHRpY2tzIHdlcmUgc3VzcGVuZGVkXG4gICAgICBhY3RpdmVJbnN0YW5jZXMuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24gKGluc3RhbmNlKSB7IHJldHVybiBpbnN0YW5jZSAuX29uRG9jdW1lbnRWaXNpYmlsaXR5KCk7IH1cbiAgICAgICk7XG4gICAgICBlbmdpbmUoKTtcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XG4gIH1cblxuICByZXR1cm4gcGxheTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGlzRG9jdW1lbnRIaWRkZW4oKSB7XG4gIHJldHVybiAhIWRvY3VtZW50ICYmIGRvY3VtZW50LmhpZGRlbjtcbn1cblxuLy8gUHVibGljIEluc3RhbmNlXG5cbmZ1bmN0aW9uIGFuaW1lKHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cblxuICB2YXIgc3RhcnRUaW1lID0gMCwgbGFzdFRpbWUgPSAwLCBub3cgPSAwO1xuICB2YXIgY2hpbGRyZW4sIGNoaWxkcmVuTGVuZ3RoID0gMDtcbiAgdmFyIHJlc29sdmUgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG1ha2VQcm9taXNlKGluc3RhbmNlKSB7XG4gICAgdmFyIHByb21pc2UgPSB3aW5kb3cuUHJvbWlzZSAmJiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoX3Jlc29sdmUpIHsgcmV0dXJuIHJlc29sdmUgPSBfcmVzb2x2ZTsgfSk7XG4gICAgaW5zdGFuY2UuZmluaXNoZWQgPSBwcm9taXNlO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgdmFyIGluc3RhbmNlID0gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKTtcbiAgdmFyIHByb21pc2UgPSBtYWtlUHJvbWlzZShpbnN0YW5jZSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IGluc3RhbmNlLmRpcmVjdGlvbjtcbiAgICBpZiAoZGlyZWN0aW9uICE9PSAnYWx0ZXJuYXRlJykge1xuICAgICAgaW5zdGFuY2UuZGlyZWN0aW9uID0gZGlyZWN0aW9uICE9PSAnbm9ybWFsJyA/ICdub3JtYWwnIDogJ3JldmVyc2UnO1xuICAgIH1cbiAgICBpbnN0YW5jZS5yZXZlcnNlZCA9ICFpbnN0YW5jZS5yZXZlcnNlZDtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQucmV2ZXJzZWQgPSBpbnN0YW5jZS5yZXZlcnNlZDsgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGp1c3RUaW1lKHRpbWUpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiAtIHRpbWUgOiB0aW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUaW1lKCkge1xuICAgIHN0YXJ0VGltZSA9IDA7XG4gICAgbGFzdFRpbWUgPSBhZGp1c3RUaW1lKGluc3RhbmNlLmN1cnJlbnRUaW1lKSAqICgxIC8gYW5pbWUuc3BlZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Vla0NoaWxkKHRpbWUsIGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkKSB7IGNoaWxkLnNlZWsodGltZSAtIGNoaWxkLnRpbWVsaW5lT2Zmc2V0KTsgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3luY0luc3RhbmNlQ2hpbGRyZW4odGltZSkge1xuICAgIGlmICghaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHsgc2Vla0NoaWxkKHRpbWUsIGNoaWxkcmVuW2ldKTsgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpJDEgPSBjaGlsZHJlbkxlbmd0aDsgaSQxLS07KSB7IHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpJDFdKTsgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcbiAgICB2YXIgYW5pbWF0aW9uc0xlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpIDwgYW5pbWF0aW9uc0xlbmd0aCkge1xuICAgICAgdmFyIGFuaW0gPSBhbmltYXRpb25zW2ldO1xuICAgICAgdmFyIGFuaW1hdGFibGUgPSBhbmltLmFuaW1hdGFibGU7XG4gICAgICB2YXIgdHdlZW5zID0gYW5pbS50d2VlbnM7XG4gICAgICB2YXIgdHdlZW5MZW5ndGggPSB0d2VlbnMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciB0d2VlbiA9IHR3ZWVuc1t0d2Vlbkxlbmd0aF07XG4gICAgICAvLyBPbmx5IGNoZWNrIGZvciBrZXlmcmFtZXMgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSB0d2VlblxuICAgICAgaWYgKHR3ZWVuTGVuZ3RoKSB7IHR3ZWVuID0gZmlsdGVyQXJyYXkodHdlZW5zLCBmdW5jdGlvbiAodCkgeyByZXR1cm4gKGluc1RpbWUgPCB0LmVuZCk7IH0pWzBdIHx8IHR3ZWVuOyB9XG4gICAgICB2YXIgZWxhcHNlZCA9IG1pbk1heChpbnNUaW1lIC0gdHdlZW4uc3RhcnQgLSB0d2Vlbi5kZWxheSwgMCwgdHdlZW4uZHVyYXRpb24pIC8gdHdlZW4uZHVyYXRpb247XG4gICAgICB2YXIgZWFzZWQgPSBpc05hTihlbGFwc2VkKSA/IDEgOiB0d2Vlbi5lYXNpbmcoZWxhcHNlZCk7XG4gICAgICB2YXIgc3RyaW5ncyA9IHR3ZWVuLnRvLnN0cmluZ3M7XG4gICAgICB2YXIgcm91bmQgPSB0d2Vlbi5yb3VuZDtcbiAgICAgIHZhciBudW1iZXJzID0gW107XG4gICAgICB2YXIgdG9OdW1iZXJzTGVuZ3RoID0gdHdlZW4udG8ubnVtYmVycy5sZW5ndGg7XG4gICAgICB2YXIgcHJvZ3Jlc3MgPSAodm9pZCAwKTtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdG9OdW1iZXJzTGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gKHZvaWQgMCk7XG4gICAgICAgIHZhciB0b051bWJlciA9IHR3ZWVuLnRvLm51bWJlcnNbbl07XG4gICAgICAgIHZhciBmcm9tTnVtYmVyID0gdHdlZW4uZnJvbS5udW1iZXJzW25dIHx8IDA7XG4gICAgICAgIGlmICghdHdlZW4uaXNQYXRoKSB7XG4gICAgICAgICAgdmFsdWUgPSBmcm9tTnVtYmVyICsgKGVhc2VkICogKHRvTnVtYmVyIC0gZnJvbU51bWJlcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gZ2V0UGF0aFByb2dyZXNzKHR3ZWVuLnZhbHVlLCBlYXNlZCAqIHRvTnVtYmVyLCB0d2Vlbi5pc1BhdGhUYXJnZXRJbnNpZGVTVkcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3VuZCkge1xuICAgICAgICAgIGlmICghKHR3ZWVuLmlzQ29sb3IgJiYgbiA+IDIpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKiByb3VuZCkgLyByb3VuZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbnVtYmVycy5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIC8vIE1hbnVhbCBBcnJheS5yZWR1Y2UgZm9yIGJldHRlciBwZXJmb3JtYW5jZXNcbiAgICAgIHZhciBzdHJpbmdzTGVuZ3RoID0gc3RyaW5ncy5sZW5ndGg7XG4gICAgICBpZiAoIXN0cmluZ3NMZW5ndGgpIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBudW1iZXJzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBzdHJpbmdzWzBdO1xuICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHN0cmluZ3NMZW5ndGg7IHMrKykge1xuICAgICAgICAgIHZhciBhID0gc3RyaW5nc1tzXTtcbiAgICAgICAgICB2YXIgYiA9IHN0cmluZ3NbcyArIDFdO1xuICAgICAgICAgIHZhciBuJDEgPSBudW1iZXJzW3NdO1xuICAgICAgICAgIGlmICghaXNOYU4obiQxKSkge1xuICAgICAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICAgIHByb2dyZXNzICs9IG4kMSArICcgJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHByb2dyZXNzICs9IG4kMSArIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW0udHlwZV0oYW5pbWF0YWJsZS50YXJnZXQsIGFuaW0ucHJvcGVydHksIHByb2dyZXNzLCBhbmltYXRhYmxlLnRyYW5zZm9ybXMpO1xuICAgICAgYW5pbS5jdXJyZW50VmFsdWUgPSBwcm9ncmVzcztcbiAgICAgIGkrKztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRDYWxsYmFjayhjYikge1xuICAgIGlmIChpbnN0YW5jZVtjYl0gJiYgIWluc3RhbmNlLnBhc3NUaHJvdWdoKSB7IGluc3RhbmNlW2NiXShpbnN0YW5jZSk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvdW50SXRlcmF0aW9uKCkge1xuICAgIGlmIChpbnN0YW5jZS5yZW1haW5pbmcgJiYgaW5zdGFuY2UucmVtYWluaW5nICE9PSB0cnVlKSB7XG4gICAgICBpbnN0YW5jZS5yZW1haW5pbmctLTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJbnN0YW5jZVByb2dyZXNzKGVuZ2luZVRpbWUpIHtcbiAgICB2YXIgaW5zRHVyYXRpb24gPSBpbnN0YW5jZS5kdXJhdGlvbjtcbiAgICB2YXIgaW5zRGVsYXkgPSBpbnN0YW5jZS5kZWxheTtcbiAgICB2YXIgaW5zRW5kRGVsYXkgPSBpbnNEdXJhdGlvbiAtIGluc3RhbmNlLmVuZERlbGF5O1xuICAgIHZhciBpbnNUaW1lID0gYWRqdXN0VGltZShlbmdpbmVUaW1lKTtcbiAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IG1pbk1heCgoaW5zVGltZSAvIGluc0R1cmF0aW9uKSAqIDEwMCwgMCwgMTAwKTtcbiAgICBpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2sgPSBpbnNUaW1lIDwgaW5zdGFuY2UuY3VycmVudFRpbWU7XG4gICAgaWYgKGNoaWxkcmVuKSB7IHN5bmNJbnN0YW5jZUNoaWxkcmVuKGluc1RpbWUpOyB9XG4gICAgaWYgKCFpbnN0YW5jZS5iZWdhbiAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgIGluc3RhbmNlLmJlZ2FuID0gdHJ1ZTtcbiAgICAgIHNldENhbGxiYWNrKCdiZWdpbicpO1xuICAgIH1cbiAgICBpZiAoIWluc3RhbmNlLmxvb3BCZWdhbiAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IHRydWU7XG4gICAgICBzZXRDYWxsYmFjaygnbG9vcEJlZ2luJyk7XG4gICAgfVxuICAgIGlmIChpbnNUaW1lIDw9IGluc0RlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSAwKSB7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoMCk7XG4gICAgfVxuICAgIGlmICgoaW5zVGltZSA+PSBpbnNFbmREZWxheSAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSAhPT0gaW5zRHVyYXRpb24pIHx8ICFpbnNEdXJhdGlvbikge1xuICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc0R1cmF0aW9uKTtcbiAgICB9XG4gICAgaWYgKGluc1RpbWUgPiBpbnNEZWxheSAmJiBpbnNUaW1lIDwgaW5zRW5kRGVsYXkpIHtcbiAgICAgIGlmICghaW5zdGFuY2UuY2hhbmdlQmVnYW4pIHtcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSB0cnVlO1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZUJlZ2luJyk7XG4gICAgICB9XG4gICAgICBzZXRDYWxsYmFjaygnY2hhbmdlJyk7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xuICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQ29tcGxldGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaW5zdGFuY2UuY3VycmVudFRpbWUgPSBtaW5NYXgoaW5zVGltZSwgMCwgaW5zRHVyYXRpb24pO1xuICAgIGlmIChpbnN0YW5jZS5iZWdhbikgeyBzZXRDYWxsYmFjaygndXBkYXRlJyk7IH1cbiAgICBpZiAoZW5naW5lVGltZSA+PSBpbnNEdXJhdGlvbikge1xuICAgICAgbGFzdFRpbWUgPSAwO1xuICAgICAgY291bnRJdGVyYXRpb24oKTtcbiAgICAgIGlmICghaW5zdGFuY2UucmVtYWluaW5nKSB7XG4gICAgICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIGlmICghaW5zdGFuY2UuY29tcGxldGVkKSB7XG4gICAgICAgICAgaW5zdGFuY2UuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDYWxsYmFjaygnbG9vcENvbXBsZXRlJyk7XG4gICAgICAgICAgc2V0Q2FsbGJhY2soJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgaWYgKCFpbnN0YW5jZS5wYXNzVGhyb3VnaCAmJiAnUHJvbWlzZScgaW4gd2luZG93KSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRUaW1lID0gbm93O1xuICAgICAgICBzZXRDYWxsYmFjaygnbG9vcENvbXBsZXRlJyk7XG4gICAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xuICAgICAgICBpZiAoaW5zdGFuY2UuZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJykge1xuICAgICAgICAgIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnN0YW5jZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XG4gICAgaW5zdGFuY2UucGFzc1Rocm91Z2ggPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IDA7XG4gICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSAwO1xuICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XG4gICAgaW5zdGFuY2UuYmVnYW4gPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnJldmVyc2VkID0gZGlyZWN0aW9uID09PSAncmV2ZXJzZSc7XG4gICAgaW5zdGFuY2UucmVtYWluaW5nID0gaW5zdGFuY2UubG9vcDtcbiAgICBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xuICAgIGNoaWxkcmVuTGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbkxlbmd0aDsgaS0tOykgeyBpbnN0YW5jZS5jaGlsZHJlbltpXS5yZXNldCgpOyB9XG4gICAgaWYgKGluc3RhbmNlLnJldmVyc2VkICYmIGluc3RhbmNlLmxvb3AgIT09IHRydWUgfHwgKGRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScgJiYgaW5zdGFuY2UubG9vcCA9PT0gMSkpIHsgaW5zdGFuY2UucmVtYWluaW5nKys7IH1cbiAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiA6IDApO1xuICB9O1xuXG4gIC8vIGludGVybmFsIG1ldGhvZCAoZm9yIGVuZ2luZSkgdG8gYWRqdXN0IGFuaW1hdGlvbiB0aW1pbmdzIGJlZm9yZSByZXN0b3JpbmcgZW5naW5lIHRpY2tzIChyQUYpXG4gIGluc3RhbmNlLl9vbkRvY3VtZW50VmlzaWJpbGl0eSA9IHJlc2V0VGltZTtcblxuICAvLyBTZXQgVmFsdWUgaGVscGVyXG5cbiAgaW5zdGFuY2Uuc2V0ID0gZnVuY3Rpb24odGFyZ2V0cywgcHJvcGVydGllcykge1xuICAgIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG5cbiAgaW5zdGFuY2UudGljayA9IGZ1bmN0aW9uKHQpIHtcbiAgICBub3cgPSB0O1xuICAgIGlmICghc3RhcnRUaW1lKSB7IHN0YXJ0VGltZSA9IG5vdzsgfVxuICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoKG5vdyArIChsYXN0VGltZSAtIHN0YXJ0VGltZSkpICogYW5pbWUuc3BlZWQpO1xuICB9O1xuXG4gIGluc3RhbmNlLnNlZWsgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgc2V0SW5zdGFuY2VQcm9ncmVzcyhhZGp1c3RUaW1lKHRpbWUpKTtcbiAgfTtcblxuICBpbnN0YW5jZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XG4gICAgcmVzZXRUaW1lKCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghaW5zdGFuY2UucGF1c2VkKSB7IHJldHVybjsgfVxuICAgIGlmIChpbnN0YW5jZS5jb21wbGV0ZWQpIHsgaW5zdGFuY2UucmVzZXQoKTsgfVxuICAgIGluc3RhbmNlLnBhdXNlZCA9IGZhbHNlO1xuICAgIGFjdGl2ZUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICByZXNldFRpbWUoKTtcbiAgICBlbmdpbmUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXZlcnNlID0gZnVuY3Rpb24oKSB7XG4gICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcbiAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSBpbnN0YW5jZS5yZXZlcnNlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICByZXNldFRpbWUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaW5zdGFuY2UucmVzZXQoKTtcbiAgICBpbnN0YW5jZS5wbGF5KCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmVtb3ZlID0gZnVuY3Rpb24odGFyZ2V0cykge1xuICAgIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXNldCgpO1xuXG4gIGlmIChpbnN0YW5jZS5hdXRvcGxheSkgeyBpbnN0YW5jZS5wbGF5KCk7IH1cblxuICByZXR1cm4gaW5zdGFuY2U7XG5cbn1cblxuLy8gUmVtb3ZlIHRhcmdldHMgZnJvbSBhbmltYXRpb25cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucykge1xuICBmb3IgKHZhciBhID0gYW5pbWF0aW9ucy5sZW5ndGg7IGEtLTspIHtcbiAgICBpZiAoYXJyYXlDb250YWlucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnNbYV0uYW5pbWF0YWJsZS50YXJnZXQpKSB7XG4gICAgICBhbmltYXRpb25zLnNwbGljZShhLCAxKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKSB7XG4gIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcbiAgdmFyIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XG4gIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpO1xuICBmb3IgKHZhciBjID0gY2hpbGRyZW4ubGVuZ3RoOyBjLS07KSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5bY107XG4gICAgdmFyIGNoaWxkQW5pbWF0aW9ucyA9IGNoaWxkLmFuaW1hdGlvbnM7XG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgY2hpbGRBbmltYXRpb25zKTtcbiAgICBpZiAoIWNoaWxkQW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkLmNoaWxkcmVuLmxlbmd0aCkgeyBjaGlsZHJlbi5zcGxpY2UoYywgMSk7IH1cbiAgfVxuICBpZiAoIWFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZHJlbi5sZW5ndGgpIHsgaW5zdGFuY2UucGF1c2UoKTsgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gIGZvciAodmFyIGkgPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgdmFyIGluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xuICAgIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSk7XG4gIH1cbn1cblxuLy8gU3RhZ2dlciBoZWxwZXJzXG5cbmZ1bmN0aW9uIHN0YWdnZXIodmFsLCBwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG4gIHZhciBkaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uIHx8ICdub3JtYWwnO1xuICB2YXIgZWFzaW5nID0gcGFyYW1zLmVhc2luZyA/IHBhcnNlRWFzaW5ncyhwYXJhbXMuZWFzaW5nKSA6IG51bGw7XG4gIHZhciBncmlkID0gcGFyYW1zLmdyaWQ7XG4gIHZhciBheGlzID0gcGFyYW1zLmF4aXM7XG4gIHZhciBmcm9tSW5kZXggPSBwYXJhbXMuZnJvbSB8fCAwO1xuICB2YXIgZnJvbUZpcnN0ID0gZnJvbUluZGV4ID09PSAnZmlyc3QnO1xuICB2YXIgZnJvbUNlbnRlciA9IGZyb21JbmRleCA9PT0gJ2NlbnRlcic7XG4gIHZhciBmcm9tTGFzdCA9IGZyb21JbmRleCA9PT0gJ2xhc3QnO1xuICB2YXIgaXNSYW5nZSA9IGlzLmFycih2YWwpO1xuICB2YXIgdmFsMSA9IGlzUmFuZ2UgPyBwYXJzZUZsb2F0KHZhbFswXSkgOiBwYXJzZUZsb2F0KHZhbCk7XG4gIHZhciB2YWwyID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzFdKSA6IDA7XG4gIHZhciB1bml0ID0gZ2V0VW5pdChpc1JhbmdlID8gdmFsWzFdIDogdmFsKSB8fCAwO1xuICB2YXIgc3RhcnQgPSBwYXJhbXMuc3RhcnQgfHwgMCArIChpc1JhbmdlID8gdmFsMSA6IDApO1xuICB2YXIgdmFsdWVzID0gW107XG4gIHZhciBtYXhWYWx1ZSA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoZWwsIGksIHQpIHtcbiAgICBpZiAoZnJvbUZpcnN0KSB7IGZyb21JbmRleCA9IDA7IH1cbiAgICBpZiAoZnJvbUNlbnRlcikgeyBmcm9tSW5kZXggPSAodCAtIDEpIC8gMjsgfVxuICAgIGlmIChmcm9tTGFzdCkgeyBmcm9tSW5kZXggPSB0IC0gMTsgfVxuICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHQ7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKCFncmlkKSB7XG4gICAgICAgICAgdmFsdWVzLnB1c2goTWF0aC5hYnMoZnJvbUluZGV4IC0gaW5kZXgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZnJvbVggPSAhZnJvbUNlbnRlciA/IGZyb21JbmRleCVncmlkWzBdIDogKGdyaWRbMF0tMSkvMjtcbiAgICAgICAgICB2YXIgZnJvbVkgPSAhZnJvbUNlbnRlciA/IE1hdGguZmxvb3IoZnJvbUluZGV4L2dyaWRbMF0pIDogKGdyaWRbMV0tMSkvMjtcbiAgICAgICAgICB2YXIgdG9YID0gaW5kZXglZ3JpZFswXTtcbiAgICAgICAgICB2YXIgdG9ZID0gTWF0aC5mbG9vcihpbmRleC9ncmlkWzBdKTtcbiAgICAgICAgICB2YXIgZGlzdGFuY2VYID0gZnJvbVggLSB0b1g7XG4gICAgICAgICAgdmFyIGRpc3RhbmNlWSA9IGZyb21ZIC0gdG9ZO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IE1hdGguc3FydChkaXN0YW5jZVggKiBkaXN0YW5jZVggKyBkaXN0YW5jZVkgKiBkaXN0YW5jZVkpO1xuICAgICAgICAgIGlmIChheGlzID09PSAneCcpIHsgdmFsdWUgPSAtZGlzdGFuY2VYOyB9XG4gICAgICAgICAgaWYgKGF4aXMgPT09ICd5JykgeyB2YWx1ZSA9IC1kaXN0YW5jZVk7IH1cbiAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbWF4VmFsdWUgPSBNYXRoLm1heC5hcHBseShNYXRoLCB2YWx1ZXMpO1xuICAgICAgfVxuICAgICAgaWYgKGVhc2luZykgeyB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGVhc2luZyh2YWwgLyBtYXhWYWx1ZSkgKiBtYXhWYWx1ZTsgfSk7IH1cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyZXZlcnNlJykgeyB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGF4aXMgPyAodmFsIDwgMCkgPyB2YWwgKiAtMSA6IC12YWwgOiBNYXRoLmFicyhtYXhWYWx1ZSAtIHZhbCk7IH0pOyB9XG4gICAgfVxuICAgIHZhciBzcGFjaW5nID0gaXNSYW5nZSA/ICh2YWwyIC0gdmFsMSkgLyBtYXhWYWx1ZSA6IHZhbDE7XG4gICAgcmV0dXJuIHN0YXJ0ICsgKHNwYWNpbmcgKiAoTWF0aC5yb3VuZCh2YWx1ZXNbaV0gKiAxMDApIC8gMTAwKSkgKyB1bml0O1xuICB9XG59XG5cbi8vIFRpbWVsaW5lXG5cbmZ1bmN0aW9uIHRpbWVsaW5lKHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cbiAgdmFyIHRsID0gYW5pbWUocGFyYW1zKTtcbiAgdGwuZHVyYXRpb24gPSAwO1xuICB0bC5hZGQgPSBmdW5jdGlvbihpbnN0YW5jZVBhcmFtcywgdGltZWxpbmVPZmZzZXQpIHtcbiAgICB2YXIgdGxJbmRleCA9IGFjdGl2ZUluc3RhbmNlcy5pbmRleE9mKHRsKTtcbiAgICB2YXIgY2hpbGRyZW4gPSB0bC5jaGlsZHJlbjtcbiAgICBpZiAodGxJbmRleCA+IC0xKSB7IGFjdGl2ZUluc3RhbmNlcy5zcGxpY2UodGxJbmRleCwgMSk7IH1cbiAgICBmdW5jdGlvbiBwYXNzVGhyb3VnaChpbnMpIHsgaW5zLnBhc3NUaHJvdWdoID0gdHJ1ZTsgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHsgcGFzc1Rocm91Z2goY2hpbGRyZW5baV0pOyB9XG4gICAgdmFyIGluc1BhcmFtcyA9IG1lcmdlT2JqZWN0cyhpbnN0YW5jZVBhcmFtcywgcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRUd2VlblNldHRpbmdzLCBwYXJhbXMpKTtcbiAgICBpbnNQYXJhbXMudGFyZ2V0cyA9IGluc1BhcmFtcy50YXJnZXRzIHx8IHBhcmFtcy50YXJnZXRzO1xuICAgIHZhciB0bER1cmF0aW9uID0gdGwuZHVyYXRpb247XG4gICAgaW5zUGFyYW1zLmF1dG9wbGF5ID0gZmFsc2U7XG4gICAgaW5zUGFyYW1zLmRpcmVjdGlvbiA9IHRsLmRpcmVjdGlvbjtcbiAgICBpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQgPSBpcy51bmQodGltZWxpbmVPZmZzZXQpID8gdGxEdXJhdGlvbiA6IGdldFJlbGF0aXZlVmFsdWUodGltZWxpbmVPZmZzZXQsIHRsRHVyYXRpb24pO1xuICAgIHBhc3NUaHJvdWdoKHRsKTtcbiAgICB0bC5zZWVrKGluc1BhcmFtcy50aW1lbGluZU9mZnNldCk7XG4gICAgdmFyIGlucyA9IGFuaW1lKGluc1BhcmFtcyk7XG4gICAgcGFzc1Rocm91Z2goaW5zKTtcbiAgICBjaGlsZHJlbi5wdXNoKGlucyk7XG4gICAgdmFyIHRpbWluZ3MgPSBnZXRJbnN0YW5jZVRpbWluZ3MoY2hpbGRyZW4sIHBhcmFtcyk7XG4gICAgdGwuZGVsYXkgPSB0aW1pbmdzLmRlbGF5O1xuICAgIHRsLmVuZERlbGF5ID0gdGltaW5ncy5lbmREZWxheTtcbiAgICB0bC5kdXJhdGlvbiA9IHRpbWluZ3MuZHVyYXRpb247XG4gICAgdGwuc2VlaygwKTtcbiAgICB0bC5yZXNldCgpO1xuICAgIGlmICh0bC5hdXRvcGxheSkgeyB0bC5wbGF5KCk7IH1cbiAgICByZXR1cm4gdGw7XG4gIH07XG4gIHJldHVybiB0bDtcbn1cblxuYW5pbWUudmVyc2lvbiA9ICczLjIuMSc7XG5hbmltZS5zcGVlZCA9IDE7XG4vLyBUT0RPOiNyZXZpZXc6IG5hbWluZywgZG9jdW1lbnRhdGlvblxuYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbiA9IHRydWU7XG5hbmltZS5ydW5uaW5nID0gYWN0aXZlSW5zdGFuY2VzO1xuYW5pbWUucmVtb3ZlID0gcmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXM7XG5hbmltZS5nZXQgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlO1xuYW5pbWUuc2V0ID0gc2V0VGFyZ2V0c1ZhbHVlO1xuYW5pbWUuY29udmVydFB4ID0gY29udmVydFB4VG9Vbml0O1xuYW5pbWUucGF0aCA9IGdldFBhdGg7XG5hbmltZS5zZXREYXNob2Zmc2V0ID0gc2V0RGFzaG9mZnNldDtcbmFuaW1lLnN0YWdnZXIgPSBzdGFnZ2VyO1xuYW5pbWUudGltZWxpbmUgPSB0aW1lbGluZTtcbmFuaW1lLmVhc2luZyA9IHBhcnNlRWFzaW5ncztcbmFuaW1lLnBlbm5lciA9IHBlbm5lcjtcbmFuaW1lLnJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgfTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWU7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uL2Fzc2V0cy9mb250cy9TYWNyYW1lbnRvLVJlZ3VsYXIudHRmXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlciwgYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogYXJ0LWZvbnQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuLmFydC1mb250IHtcXG4gIGZvbnQtZmFtaWx5OiBhcnQtZm9udCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3RpY2t5IHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxufVxcblxcbi5vZmgge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmFic29sdXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZsZXgtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9nZW5lcmljL2dlbmVyaWMvZ2VuZXJpYy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFLQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0RBQUE7QUFGRjtBQUtBO0VBQ0UsaUNBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQVlBO0VBTEUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFvQkE7RUFuQkUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFTQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBTEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciwgYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLy8gZm9udCByZWdpc3RlclxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IGFydC1mb250O1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvU2FjcmFtZW50by1SZWd1bGFyLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKVxcclxcbn1cXHJcXG5cXHJcXG4uYXJ0LWZvbnQge1xcclxcbiAgZm9udC1mYW1pbHk6IGFydC1mb250LCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdGlja3kge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm9maCB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJzb2x1dGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVsYXRpdmUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmxleC1jZW50ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtY2VudGVyIHtcXHJcXG4gIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdGV4dC1jZW50ZXIge1xcclxcbiAgQGluY2x1ZGUgZmxleC1jZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY2VudGVyIHtcXHJcXG4gIEBpbmNsdWRlIHRleHQtY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnBpbmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuXFxuLmdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc2t5Ymx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbn1cXG5cXG4uYmx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uc2hhZG93IHtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDVweCBncmV5O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ2VuZXJpYy90ZXN0L3Rlc3Quc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBpbmsge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXHJcXG59XFxyXFxuXFxyXFxuLmdyZWVuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2t5Ymx1ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmx1ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hhZG93IHtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDVweCBncmV5O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYW5pbWUtdGV4dC1zY3JvbGxvdXQge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXgvY3NzL2FuaW1lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hbmltZS10ZXh0LXNjcm9sbG91dCB7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pdGVtMDUyLndlYnBcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vLi4vYXNzZXRzL2xvZ29fMS53ZWJwXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4uLy4uL2Fzc2V0cy9mb250cy9TYWNyYW1lbnRvLVJlZ3VsYXIudHRmXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTEge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xLTUge1xcbiAgaGVpZ2h0OiAxMDV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xLTEwIHtcXG4gIGhlaWdodDogMTEwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMS0xNSB7XFxuICBoZWlnaHQ6IDExNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTEtMjUge1xcbiAgaGVpZ2h0OiAxMjV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xLTUwIHtcXG4gIGhlaWdodDogMTUwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMS03NSB7XFxuICBoZWlnaHQ6IDE3NXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTIge1xcbiAgaGVpZ2h0OiAyMDB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yLTUge1xcbiAgaGVpZ2h0OiAyMDV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yLTEwIHtcXG4gIGhlaWdodDogMjEwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMi0xNSB7XFxuICBoZWlnaHQ6IDIxNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTItMjUge1xcbiAgaGVpZ2h0OiAyMjV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yLTUwIHtcXG4gIGhlaWdodDogMjUwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMi03NSB7XFxuICBoZWlnaHQ6IDI3NXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTMge1xcbiAgaGVpZ2h0OiAzMDB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0zLTUge1xcbiAgaGVpZ2h0OiAzMDV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0zLTEwIHtcXG4gIGhlaWdodDogMzEwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMy0xNSB7XFxuICBoZWlnaHQ6IDMxNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTMtMjUge1xcbiAgaGVpZ2h0OiAzMjV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0zLTUwIHtcXG4gIGhlaWdodDogMzUwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMy03NSB7XFxuICBoZWlnaHQ6IDM3NXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTQge1xcbiAgaGVpZ2h0OiA0MDB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci00LTUge1xcbiAgaGVpZ2h0OiA0MDV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci00LTEwIHtcXG4gIGhlaWdodDogNDEwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItNC0xNSB7XFxuICBoZWlnaHQ6IDQxNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTQtMjUge1xcbiAgaGVpZ2h0OiA0MjV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci00LTUwIHtcXG4gIGhlaWdodDogNDUwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItNC03NSB7XFxuICBoZWlnaHQ6IDQ3NXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTUge1xcbiAgaGVpZ2h0OiA1MDB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci01LTUge1xcbiAgaGVpZ2h0OiA1MDV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci01LTEwIHtcXG4gIGhlaWdodDogNTEwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItNS0xNSB7XFxuICBoZWlnaHQ6IDUxNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTUtMjUge1xcbiAgaGVpZ2h0OiA1MjV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci01LTUwIHtcXG4gIGhlaWdodDogNTUwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItNS03NSB7XFxuICBoZWlnaHQ6IDU3NXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTYge1xcbiAgaGVpZ2h0OiA2MDB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci02LTUge1xcbiAgaGVpZ2h0OiA2MDV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci02LTEwIHtcXG4gIGhlaWdodDogNjEwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItNi0xNSB7XFxuICBoZWlnaHQ6IDYxNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTYtMjUge1xcbiAgaGVpZ2h0OiA2MjV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci02LTUwIHtcXG4gIGhlaWdodDogNjUwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItNi03NSB7XFxuICBoZWlnaHQ6IDY3NXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTcge1xcbiAgaGVpZ2h0OiA3MDB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci03LTUge1xcbiAgaGVpZ2h0OiA3MDV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci03LTEwIHtcXG4gIGhlaWdodDogNzEwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItNy0xNSB7XFxuICBoZWlnaHQ6IDcxNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTctMjUge1xcbiAgaGVpZ2h0OiA3MjV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci03LTUwIHtcXG4gIGhlaWdodDogNzUwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItNy03NSB7XFxuICBoZWlnaHQ6IDc3NXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTgge1xcbiAgaGVpZ2h0OiA4MDB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci04LTUge1xcbiAgaGVpZ2h0OiA4MDV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci04LTEwIHtcXG4gIGhlaWdodDogODEwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItOC0xNSB7XFxuICBoZWlnaHQ6IDgxNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTgtMjUge1xcbiAgaGVpZ2h0OiA4MjV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci04LTUwIHtcXG4gIGhlaWdodDogODUwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItOC03NSB7XFxuICBoZWlnaHQ6IDg3NXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTkge1xcbiAgaGVpZ2h0OiA5MDB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci05LTUge1xcbiAgaGVpZ2h0OiA5MDV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci05LTEwIHtcXG4gIGhlaWdodDogOTEwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItOS0xNSB7XFxuICBoZWlnaHQ6IDkxNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTktMjUge1xcbiAgaGVpZ2h0OiA5MjV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci05LTUwIHtcXG4gIGhlaWdodDogOTUwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItOS03NSB7XFxuICBoZWlnaHQ6IDk3NXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTEwIHtcXG4gIGhlaWdodDogMTAwMHZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTEwLTUge1xcbiAgaGVpZ2h0OiAxMDA1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTAtMTAge1xcbiAgaGVpZ2h0OiAxMDEwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTAtMTUge1xcbiAgaGVpZ2h0OiAxMDE1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTAtMjUge1xcbiAgaGVpZ2h0OiAxMDI1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTAtNTAge1xcbiAgaGVpZ2h0OiAxMDUwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTAtNzUge1xcbiAgaGVpZ2h0OiAxMDc1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTEge1xcbiAgaGVpZ2h0OiAxMTAwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTEtNSB7XFxuICBoZWlnaHQ6IDExMDV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xMS0xMCB7XFxuICBoZWlnaHQ6IDExMTB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xMS0xNSB7XFxuICBoZWlnaHQ6IDExMTV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xMS0yNSB7XFxuICBoZWlnaHQ6IDExMjV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xMS01MCB7XFxuICBoZWlnaHQ6IDExNTB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xMS03NSB7XFxuICBoZWlnaHQ6IDExNzV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xMiB7XFxuICBoZWlnaHQ6IDEyMDB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xMi01IHtcXG4gIGhlaWdodDogMTIwNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTEyLTEwIHtcXG4gIGhlaWdodDogMTIxMHZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTEyLTE1IHtcXG4gIGhlaWdodDogMTIxNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTEyLTI1IHtcXG4gIGhlaWdodDogMTIyNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTEyLTUwIHtcXG4gIGhlaWdodDogMTI1MHZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTEyLTc1IHtcXG4gIGhlaWdodDogMTI3NXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTEzIHtcXG4gIGhlaWdodDogMTMwMHZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTEzLTUge1xcbiAgaGVpZ2h0OiAxMzA1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTMtMTAge1xcbiAgaGVpZ2h0OiAxMzEwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTMtMTUge1xcbiAgaGVpZ2h0OiAxMzE1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTMtMjUge1xcbiAgaGVpZ2h0OiAxMzI1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTMtNTAge1xcbiAgaGVpZ2h0OiAxMzUwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTMtNzUge1xcbiAgaGVpZ2h0OiAxMzc1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTQge1xcbiAgaGVpZ2h0OiAxNDAwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTQtNSB7XFxuICBoZWlnaHQ6IDE0MDV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xNC0xMCB7XFxuICBoZWlnaHQ6IDE0MTB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xNC0xNSB7XFxuICBoZWlnaHQ6IDE0MTV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xNC0yNSB7XFxuICBoZWlnaHQ6IDE0MjV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xNC01MCB7XFxuICBoZWlnaHQ6IDE0NTB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xNC03NSB7XFxuICBoZWlnaHQ6IDE0NzV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xNSB7XFxuICBoZWlnaHQ6IDE1MDB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xNS01IHtcXG4gIGhlaWdodDogMTUwNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTE1LTEwIHtcXG4gIGhlaWdodDogMTUxMHZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTE1LTE1IHtcXG4gIGhlaWdodDogMTUxNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTE1LTI1IHtcXG4gIGhlaWdodDogMTUyNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTE1LTUwIHtcXG4gIGhlaWdodDogMTU1MHZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTE1LTc1IHtcXG4gIGhlaWdodDogMTU3NXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTE2IHtcXG4gIGhlaWdodDogMTYwMHZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTE2LTUge1xcbiAgaGVpZ2h0OiAxNjA1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTYtMTAge1xcbiAgaGVpZ2h0OiAxNjEwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTYtMTUge1xcbiAgaGVpZ2h0OiAxNjE1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTYtMjUge1xcbiAgaGVpZ2h0OiAxNjI1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTYtNTAge1xcbiAgaGVpZ2h0OiAxNjUwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTYtNzUge1xcbiAgaGVpZ2h0OiAxNjc1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTcge1xcbiAgaGVpZ2h0OiAxNzAwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTctNSB7XFxuICBoZWlnaHQ6IDE3MDV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xNy0xMCB7XFxuICBoZWlnaHQ6IDE3MTB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xNy0xNSB7XFxuICBoZWlnaHQ6IDE3MTV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xNy0yNSB7XFxuICBoZWlnaHQ6IDE3MjV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xNy01MCB7XFxuICBoZWlnaHQ6IDE3NTB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xNy03NSB7XFxuICBoZWlnaHQ6IDE3NzV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xOCB7XFxuICBoZWlnaHQ6IDE4MDB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0xOC01IHtcXG4gIGhlaWdodDogMTgwNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTE4LTEwIHtcXG4gIGhlaWdodDogMTgxMHZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTE4LTE1IHtcXG4gIGhlaWdodDogMTgxNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTE4LTI1IHtcXG4gIGhlaWdodDogMTgyNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTE4LTUwIHtcXG4gIGhlaWdodDogMTg1MHZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTE4LTc1IHtcXG4gIGhlaWdodDogMTg3NXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTE5IHtcXG4gIGhlaWdodDogMTkwMHZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTE5LTUge1xcbiAgaGVpZ2h0OiAxOTA1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTktMTAge1xcbiAgaGVpZ2h0OiAxOTEwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTktMTUge1xcbiAgaGVpZ2h0OiAxOTE1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTktMjUge1xcbiAgaGVpZ2h0OiAxOTI1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTktNTAge1xcbiAgaGVpZ2h0OiAxOTUwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMTktNzUge1xcbiAgaGVpZ2h0OiAxOTc1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMjAge1xcbiAgaGVpZ2h0OiAyMDAwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMjAtNSB7XFxuICBoZWlnaHQ6IDIwMDV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yMC0xMCB7XFxuICBoZWlnaHQ6IDIwMTB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yMC0xNSB7XFxuICBoZWlnaHQ6IDIwMTV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yMC0yNSB7XFxuICBoZWlnaHQ6IDIwMjV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yMC01MCB7XFxuICBoZWlnaHQ6IDIwNTB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yMC03NSB7XFxuICBoZWlnaHQ6IDIwNzV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yMSB7XFxuICBoZWlnaHQ6IDIxMDB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yMS01IHtcXG4gIGhlaWdodDogMjEwNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTIxLTEwIHtcXG4gIGhlaWdodDogMjExMHZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTIxLTE1IHtcXG4gIGhlaWdodDogMjExNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTIxLTI1IHtcXG4gIGhlaWdodDogMjEyNXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTIxLTUwIHtcXG4gIGhlaWdodDogMjE1MHZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTIxLTc1IHtcXG4gIGhlaWdodDogMjE3NXZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTIyIHtcXG4gIGhlaWdodDogMjIwMHZoO1xcbn1cXG4ubWFpbi13cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY29udGVudC13cmFwcGVyLTIyLTUge1xcbiAgaGVpZ2h0OiAyMjA1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMjItMTAge1xcbiAgaGVpZ2h0OiAyMjEwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMjItMTUge1xcbiAgaGVpZ2h0OiAyMjE1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMjItMjUge1xcbiAgaGVpZ2h0OiAyMjI1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMjItNTAge1xcbiAgaGVpZ2h0OiAyMjUwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMjItNzUge1xcbiAgaGVpZ2h0OiAyMjc1dmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMjMge1xcbiAgaGVpZ2h0OiAyMzAwdmg7XFxufVxcbi5tYWluLXdyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jb250ZW50LXdyYXBwZXItMjMtNSB7XFxuICBoZWlnaHQ6IDIzMDV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yMy0xMCB7XFxuICBoZWlnaHQ6IDIzMTB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yMy0xNSB7XFxuICBoZWlnaHQ6IDIzMTV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yMy0yNSB7XFxuICBoZWlnaHQ6IDIzMjV2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yMy01MCB7XFxuICBoZWlnaHQ6IDIzNTB2aDtcXG59XFxuLm1haW4td3JhcHBlciAubWFpbi1jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlci0yMy03NSB7XFxuICBoZWlnaHQ6IDIzNzV2aDtcXG59XFxuXFxuLmJhbm5lci1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmJhbm5lci1jb250YWluZXIgLmJhbm5lci13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgdmFyKC0tb2Zmc2V0LXkpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5iYW5uZXItY29udGFpbmVyIC5iYW5uZXItd3JhcHBlciAuYmFubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYmFubmVyLWNvbnRhaW5lciAuYmFubmVyLXdyYXBwZXIgLmJhbm5lciBkaXYudGl0bGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYmFubmVyLWNvbnRhaW5lciAuYmFubmVyLXdyYXBwZXIgLmJhbm5lciBkaXYudGl0bGUgLmF0cmktb3V0bGluZSB7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDEycmVtO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogLTI1JTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmJhbm5lci1jb250YWluZXIgLmJhbm5lci13cmFwcGVyIC5iYW5uZXIgZGl2LnRpdGxlIC5sb2dvLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiA2cmVtO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgei1pbmRleDogMjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5iYW5uZXItY29udGFpbmVyIC5iYW5uZXItd3JhcHBlciAuYmFubmVyIGRpdi50aXRsZSAubG9nby13cmFwcGVyIC5sb2dvIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uYmFubmVyLWNvbnRhaW5lciAuYmFubmVyLXdyYXBwZXIgLmJhbm5lciBkaXYudGl0bGUgLmxvZ28td3JhcHBlciAubG9nbyAuY2hhcmFjdGVycyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmJhbm5lci1jb250YWluZXIgLmJhbm5lci13cmFwcGVyIC5iYW5uZXIgZGl2LnRpdGxlIC5sb2dvLXdyYXBwZXIgLmxvZ28gLmNoYXJhY3RlcnMgLmxvZ28tY2hhcmFjdGVyIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmJhbm5lci1jb250YWluZXIgLmJhbm5lci13cmFwcGVyIC5iYW5uZXIgcC5zdWItdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5iYW5uZXItY29udGFpbmVyIC5iYW5uZXItd3JhcHBlciAuYmFubmVyIHAuc3ViLXRpdGxlIC5sZXR0ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG59XFxuLmJhbm5lci1jb250YWluZXIgLmJhbm5lci13cmFwcGVyIC5saW5lLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5iYW5uZXItY29udGFpbmVyIC5iYW5uZXItd3JhcHBlciAubGluZS13cmFwcGVyIC5saW5lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWig5M2RlZyk7XFxuICB3aWR0aDogMjJyZW07XFxuICBoZWlnaHQ6IDMwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0EzMUQ0NjtcXG59XFxuLmJhbm5lci1jb250YWluZXIgLmJhbm5lci1tYXNrIC5saWdodC13cmFwcGVyIC5saWdodHMgLmxpZ2h0LXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogNHJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBib3JkZXItbGVmdDogMTAwdncgc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG59XFxuLmJhbm5lci1jb250YWluZXIgLmJhbm5lci1tYXNrIC5saWdodC13cmFwcGVyIC5saWdodHMgLmxpZ2h0LWx0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYm9yZGVyLXRvcDogNHJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBib3JkZXItcmlnaHQ6IDEwMHZ3IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmxvZ28gLmFuaW1lLXBhdGgge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzAwMDtcXG4gIHN0cm9rZS13aWR0aDogMC4ycmVtO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCByZWQ7XFxufVxcbi5sb2dvIC5hbmltZS1wYXRoLWlubmVyIHtcXG4gIHN0cm9rZS13aWR0aDogMC4xcmVtO1xcbn1cXG5cXG4jcHJlZmFjZSAucHJlZmFjZS1jb250YWluZXIgaDEsICNwcmVmYWNlIC5wcmVmYWNlLWNvbnRhaW5lciBoMiwgI3ByZWZhY2UgLnByZWZhY2UtY29udGFpbmVyIHNwYW4sICNwcmVmYWNlIC5wcmVmYWNlLWNvbnRhaW5lciBhIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI3ByZWZhY2UgLnByZWZhY2UtY29udGFpbmVyIC5wcmVmYWNlLWNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuI3ByZWZhY2UgLnByZWZhY2UtY29udGFpbmVyIC5wcmVmYWNlLWNvbnRlbnQgaDEudGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG59XFxuI3ByZWZhY2UgLnByZWZhY2UtY29udGFpbmVyIC5wcmVmYWNlLWNvbnRlbnQgaDEuc3ViLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4jcHJlZmFjZSAucHJlZmFjZS1jb250YWluZXIgLnByZWZhY2UtY29udGVudCBzcGFuLmxpbmUge1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcXG59XFxuI3ByZWZhY2UgLnByZWZhY2UtY29udGFpbmVyIC5wcmVmYWNlLWZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgY29sb3I6ICM1NTUzNTM7XFxufVxcbiNwcmVmYWNlIC5wcmVmYWNlLWNvbnRhaW5lciAucHJlZmFjZS1mb290ZXIgaDEsICNwcmVmYWNlIC5wcmVmYWNlLWNvbnRhaW5lciAucHJlZmFjZS1mb290ZXIgaDMge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jcHJlZmFjZSAucHJlZmFjZS1jb250YWluZXIgLnByZWZhY2UtZm9vdGVyIGgzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jcHJlZmFjZSAucHJlZmFjZS1jb250YWluZXIgLnByZWZhY2UtZm9vdGVyIGEge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbiN0aW1lc3RhcnQsICN0aW1lc3RvcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbiN0aW1lc3RhcnQgLnRpbWVzdGFydC1jb250YWluZXIgaDEsICN0aW1lc3RhcnQgLnRpbWVzdGFydC1jb250YWluZXIgaDIsICN0aW1lc3RhcnQgLnRpbWVzdGFydC1jb250YWluZXIgc3BhbiwgI3RpbWVzdGFydCAudGltZXN0YXJ0LWNvbnRhaW5lciBhLCAjdGltZXN0YXJ0IC50aW1lc3RvcC1jb250YWluZXIgaDEsICN0aW1lc3RhcnQgLnRpbWVzdG9wLWNvbnRhaW5lciBoMiwgI3RpbWVzdGFydCAudGltZXN0b3AtY29udGFpbmVyIHNwYW4sICN0aW1lc3RhcnQgLnRpbWVzdG9wLWNvbnRhaW5lciBhLCAjdGltZXN0b3AgLnRpbWVzdGFydC1jb250YWluZXIgaDEsICN0aW1lc3RvcCAudGltZXN0YXJ0LWNvbnRhaW5lciBoMiwgI3RpbWVzdG9wIC50aW1lc3RhcnQtY29udGFpbmVyIHNwYW4sICN0aW1lc3RvcCAudGltZXN0YXJ0LWNvbnRhaW5lciBhLCAjdGltZXN0b3AgLnRpbWVzdG9wLWNvbnRhaW5lciBoMSwgI3RpbWVzdG9wIC50aW1lc3RvcC1jb250YWluZXIgaDIsICN0aW1lc3RvcCAudGltZXN0b3AtY29udGFpbmVyIHNwYW4sICN0aW1lc3RvcCAudGltZXN0b3AtY29udGFpbmVyIGEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jdGltZXN0YXJ0IC50aW1lc3RhcnQtY29udGFpbmVyIC50aW1lc3RhcnQtY29udGVudCwgI3RpbWVzdGFydCAudGltZXN0YXJ0LWNvbnRhaW5lciAudGltZXN0b3AtY29udGVudCwgI3RpbWVzdGFydCAudGltZXN0b3AtY29udGFpbmVyIC50aW1lc3RhcnQtY29udGVudCwgI3RpbWVzdGFydCAudGltZXN0b3AtY29udGFpbmVyIC50aW1lc3RvcC1jb250ZW50LCAjdGltZXN0b3AgLnRpbWVzdGFydC1jb250YWluZXIgLnRpbWVzdGFydC1jb250ZW50LCAjdGltZXN0b3AgLnRpbWVzdGFydC1jb250YWluZXIgLnRpbWVzdG9wLWNvbnRlbnQsICN0aW1lc3RvcCAudGltZXN0b3AtY29udGFpbmVyIC50aW1lc3RhcnQtY29udGVudCwgI3RpbWVzdG9wIC50aW1lc3RvcC1jb250YWluZXIgLnRpbWVzdG9wLWNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuI3RpbWVzdGFydCAudGltZXN0YXJ0LWNvbnRhaW5lciAudGltZXN0YXJ0LWNvbnRlbnQgaDEudGl0bGUsICN0aW1lc3RhcnQgLnRpbWVzdGFydC1jb250YWluZXIgLnRpbWVzdG9wLWNvbnRlbnQgaDEudGl0bGUsICN0aW1lc3RhcnQgLnRpbWVzdG9wLWNvbnRhaW5lciAudGltZXN0YXJ0LWNvbnRlbnQgaDEudGl0bGUsICN0aW1lc3RhcnQgLnRpbWVzdG9wLWNvbnRhaW5lciAudGltZXN0b3AtY29udGVudCBoMS50aXRsZSwgI3RpbWVzdG9wIC50aW1lc3RhcnQtY29udGFpbmVyIC50aW1lc3RhcnQtY29udGVudCBoMS50aXRsZSwgI3RpbWVzdG9wIC50aW1lc3RhcnQtY29udGFpbmVyIC50aW1lc3RvcC1jb250ZW50IGgxLnRpdGxlLCAjdGltZXN0b3AgLnRpbWVzdG9wLWNvbnRhaW5lciAudGltZXN0YXJ0LWNvbnRlbnQgaDEudGl0bGUsICN0aW1lc3RvcCAudGltZXN0b3AtY29udGFpbmVyIC50aW1lc3RvcC1jb250ZW50IGgxLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcbiN0aW1lc3RhcnQgLnRpbWVzdGFydC1jb250YWluZXIgLnRpbWVzdGFydC1jb250ZW50IGgxLnN1Yi10aXRsZSwgI3RpbWVzdGFydCAudGltZXN0YXJ0LWNvbnRhaW5lciAudGltZXN0b3AtY29udGVudCBoMS5zdWItdGl0bGUsICN0aW1lc3RhcnQgLnRpbWVzdG9wLWNvbnRhaW5lciAudGltZXN0YXJ0LWNvbnRlbnQgaDEuc3ViLXRpdGxlLCAjdGltZXN0YXJ0IC50aW1lc3RvcC1jb250YWluZXIgLnRpbWVzdG9wLWNvbnRlbnQgaDEuc3ViLXRpdGxlLCAjdGltZXN0b3AgLnRpbWVzdGFydC1jb250YWluZXIgLnRpbWVzdGFydC1jb250ZW50IGgxLnN1Yi10aXRsZSwgI3RpbWVzdG9wIC50aW1lc3RhcnQtY29udGFpbmVyIC50aW1lc3RvcC1jb250ZW50IGgxLnN1Yi10aXRsZSwgI3RpbWVzdG9wIC50aW1lc3RvcC1jb250YWluZXIgLnRpbWVzdGFydC1jb250ZW50IGgxLnN1Yi10aXRsZSwgI3RpbWVzdG9wIC50aW1lc3RvcC1jb250YWluZXIgLnRpbWVzdG9wLWNvbnRlbnQgaDEuc3ViLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4jdGltZXN0YXJ0IC50aW1lc3RhcnQtY29udGFpbmVyIC50aW1lc3RhcnQtY29udGVudCBzcGFuLmxpbmUsICN0aW1lc3RhcnQgLnRpbWVzdGFydC1jb250YWluZXIgLnRpbWVzdG9wLWNvbnRlbnQgc3Bhbi5saW5lLCAjdGltZXN0YXJ0IC50aW1lc3RvcC1jb250YWluZXIgLnRpbWVzdGFydC1jb250ZW50IHNwYW4ubGluZSwgI3RpbWVzdGFydCAudGltZXN0b3AtY29udGFpbmVyIC50aW1lc3RvcC1jb250ZW50IHNwYW4ubGluZSwgI3RpbWVzdG9wIC50aW1lc3RhcnQtY29udGFpbmVyIC50aW1lc3RhcnQtY29udGVudCBzcGFuLmxpbmUsICN0aW1lc3RvcCAudGltZXN0YXJ0LWNvbnRhaW5lciAudGltZXN0b3AtY29udGVudCBzcGFuLmxpbmUsICN0aW1lc3RvcCAudGltZXN0b3AtY29udGFpbmVyIC50aW1lc3RhcnQtY29udGVudCBzcGFuLmxpbmUsICN0aW1lc3RvcCAudGltZXN0b3AtY29udGFpbmVyIC50aW1lc3RvcC1jb250ZW50IHNwYW4ubGluZSB7XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xcbn1cXG4jdGltZXN0YXJ0IC50aW1lc3RhcnQtY29udGFpbmVyIC50aW1lc3RhcnQtZm9vdGVyLCAjdGltZXN0YXJ0IC50aW1lc3RhcnQtY29udGFpbmVyIC50aW1lc3RvcC1mb290ZXIsICN0aW1lc3RhcnQgLnRpbWVzdG9wLWNvbnRhaW5lciAudGltZXN0YXJ0LWZvb3RlciwgI3RpbWVzdGFydCAudGltZXN0b3AtY29udGFpbmVyIC50aW1lc3RvcC1mb290ZXIsICN0aW1lc3RvcCAudGltZXN0YXJ0LWNvbnRhaW5lciAudGltZXN0YXJ0LWZvb3RlciwgI3RpbWVzdG9wIC50aW1lc3RhcnQtY29udGFpbmVyIC50aW1lc3RvcC1mb290ZXIsICN0aW1lc3RvcCAudGltZXN0b3AtY29udGFpbmVyIC50aW1lc3RhcnQtZm9vdGVyLCAjdGltZXN0b3AgLnRpbWVzdG9wLWNvbnRhaW5lciAudGltZXN0b3AtZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBjb2xvcjogIzU1NTM1MztcXG59XFxuI3RpbWVzdGFydCAudGltZXN0YXJ0LWNvbnRhaW5lciAudGltZXN0YXJ0LWZvb3RlciBoMSwgI3RpbWVzdGFydCAudGltZXN0YXJ0LWNvbnRhaW5lciAudGltZXN0YXJ0LWZvb3RlciBoMywgI3RpbWVzdGFydCAudGltZXN0YXJ0LWNvbnRhaW5lciAudGltZXN0b3AtZm9vdGVyIGgxLCAjdGltZXN0YXJ0IC50aW1lc3RhcnQtY29udGFpbmVyIC50aW1lc3RvcC1mb290ZXIgaDMsICN0aW1lc3RhcnQgLnRpbWVzdG9wLWNvbnRhaW5lciAudGltZXN0YXJ0LWZvb3RlciBoMSwgI3RpbWVzdGFydCAudGltZXN0b3AtY29udGFpbmVyIC50aW1lc3RhcnQtZm9vdGVyIGgzLCAjdGltZXN0YXJ0IC50aW1lc3RvcC1jb250YWluZXIgLnRpbWVzdG9wLWZvb3RlciBoMSwgI3RpbWVzdGFydCAudGltZXN0b3AtY29udGFpbmVyIC50aW1lc3RvcC1mb290ZXIgaDMsICN0aW1lc3RvcCAudGltZXN0YXJ0LWNvbnRhaW5lciAudGltZXN0YXJ0LWZvb3RlciBoMSwgI3RpbWVzdG9wIC50aW1lc3RhcnQtY29udGFpbmVyIC50aW1lc3RhcnQtZm9vdGVyIGgzLCAjdGltZXN0b3AgLnRpbWVzdGFydC1jb250YWluZXIgLnRpbWVzdG9wLWZvb3RlciBoMSwgI3RpbWVzdG9wIC50aW1lc3RhcnQtY29udGFpbmVyIC50aW1lc3RvcC1mb290ZXIgaDMsICN0aW1lc3RvcCAudGltZXN0b3AtY29udGFpbmVyIC50aW1lc3RhcnQtZm9vdGVyIGgxLCAjdGltZXN0b3AgLnRpbWVzdG9wLWNvbnRhaW5lciAudGltZXN0YXJ0LWZvb3RlciBoMywgI3RpbWVzdG9wIC50aW1lc3RvcC1jb250YWluZXIgLnRpbWVzdG9wLWZvb3RlciBoMSwgI3RpbWVzdG9wIC50aW1lc3RvcC1jb250YWluZXIgLnRpbWVzdG9wLWZvb3RlciBoMyB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbiN0aW1lc3RhcnQgLnRpbWVzdGFydC1jb250YWluZXIgLnRpbWVzdGFydC1mb290ZXIgaDMsICN0aW1lc3RhcnQgLnRpbWVzdGFydC1jb250YWluZXIgLnRpbWVzdG9wLWZvb3RlciBoMywgI3RpbWVzdGFydCAudGltZXN0b3AtY29udGFpbmVyIC50aW1lc3RhcnQtZm9vdGVyIGgzLCAjdGltZXN0YXJ0IC50aW1lc3RvcC1jb250YWluZXIgLnRpbWVzdG9wLWZvb3RlciBoMywgI3RpbWVzdG9wIC50aW1lc3RhcnQtY29udGFpbmVyIC50aW1lc3RhcnQtZm9vdGVyIGgzLCAjdGltZXN0b3AgLnRpbWVzdGFydC1jb250YWluZXIgLnRpbWVzdG9wLWZvb3RlciBoMywgI3RpbWVzdG9wIC50aW1lc3RvcC1jb250YWluZXIgLnRpbWVzdGFydC1mb290ZXIgaDMsICN0aW1lc3RvcCAudGltZXN0b3AtY29udGFpbmVyIC50aW1lc3RvcC1mb290ZXIgaDMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbiN0aW1lc3RhcnQgLnRpbWVzdGFydC1jb250YWluZXIgLnRpbWVzdGFydC1mb290ZXIgYSwgI3RpbWVzdGFydCAudGltZXN0YXJ0LWNvbnRhaW5lciAudGltZXN0b3AtZm9vdGVyIGEsICN0aW1lc3RhcnQgLnRpbWVzdG9wLWNvbnRhaW5lciAudGltZXN0YXJ0LWZvb3RlciBhLCAjdGltZXN0YXJ0IC50aW1lc3RvcC1jb250YWluZXIgLnRpbWVzdG9wLWZvb3RlciBhLCAjdGltZXN0b3AgLnRpbWVzdGFydC1jb250YWluZXIgLnRpbWVzdGFydC1mb290ZXIgYSwgI3RpbWVzdG9wIC50aW1lc3RhcnQtY29udGFpbmVyIC50aW1lc3RvcC1mb290ZXIgYSwgI3RpbWVzdG9wIC50aW1lc3RvcC1jb250YWluZXIgLnRpbWVzdGFydC1mb290ZXIgYSwgI3RpbWVzdG9wIC50aW1lc3RvcC1jb250YWluZXIgLnRpbWVzdG9wLWZvb3RlciBhIHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uc2NlbmUtcHJlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLnNjZW5lLXByZSAuc2NlbmUtcHJlLWNvbnRhaW5lciBoMSwgLnNjZW5lLXByZSAuc2NlbmUtcHJlLWNvbnRhaW5lciBoMiwgLnNjZW5lLXByZSAuc2NlbmUtcHJlLWNvbnRhaW5lciBzcGFuLCAuc2NlbmUtcHJlIC5zY2VuZS1wcmUtY29udGFpbmVyIGEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc2NlbmUtcHJlIC5zY2VuZS1wcmUtY29udGFpbmVyIC5zY2VuZS1wcmUtY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4uc2NlbmUtcHJlIC5zY2VuZS1wcmUtY29udGFpbmVyIC5zY2VuZS1wcmUtY29udGVudCBoMS50aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG4uc2NlbmUtcHJlIC5zY2VuZS1wcmUtY29udGFpbmVyIC5zY2VuZS1wcmUtY29udGVudCBoMS5zdWItdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi5zY2VuZS1wcmUgLnNjZW5lLXByZS1jb250YWluZXIgLnNjZW5lLXByZS1jb250ZW50IHNwYW4ubGluZSB7XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xcbn1cXG4uc2NlbmUtcHJlIC5zY2VuZS1wcmUtY29udGFpbmVyIC5zY2VuZS1wcmUtZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBjb2xvcjogIzU1NTM1MztcXG59XFxuLnNjZW5lLXByZSAuc2NlbmUtcHJlLWNvbnRhaW5lciAuc2NlbmUtcHJlLWZvb3RlciBoMSwgLnNjZW5lLXByZSAuc2NlbmUtcHJlLWNvbnRhaW5lciAuc2NlbmUtcHJlLWZvb3RlciBoMyB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5zY2VuZS1wcmUgLnNjZW5lLXByZS1jb250YWluZXIgLnNjZW5lLXByZS1mb290ZXIgaDMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5zY2VuZS1wcmUgLnNjZW5lLXByZS1jb250YWluZXIgLnNjZW5lLXByZS1mb290ZXIgYSB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciwgYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogYXJ0LWZvbnQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuLmFydC1mb250IHtcXG4gIGZvbnQtZmFtaWx5OiBhcnQtZm9udCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3RpY2t5IHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxufVxcblxcbi5vZmgge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmFic29sdXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZsZXgtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5zY2VuZS1wcmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zY2VuZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQyOTQyO1xcbiAgcGFkZGluZy10b3A6IDFweDtcXG59XFxuLnNjZW5lIC5zdGlja3ktYm94IC5hbmltZS1jb250YWluZXItb3BhY2l0eSAuaXRlbSB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MDBtcyBjdWJpYy1iZXppZXIoMC43LCAwLCAwLjMsIDEpIDBtcztcXG59XFxuLnNjZW5lIC5zdGlja3ktYm94IC5hbmltZS1jb250YWluZXItb3BhY2l0eSAuaXRlbSBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbn1cXG4uc2NlbmUgLnN0aWNreS1ib3ggLnRleHQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGNvbG9yOiAjYWZhZmFmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XFxufVxcbi5zY2VuZSAuc3RpY2t5LWJveCAudGV4dC13cmFwcGVyIGgxLCAuc2NlbmUgLnN0aWNreS1ib3ggLnRleHQtd3JhcHBlciBwLCAuc2NlbmUgLnN0aWNreS1ib3ggLnRleHQtd3JhcHBlciBzcGFuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG59XFxuLnNjZW5lIC5zdGlja3ktYm94IC50ZXh0LXdyYXBwZXIgcCB7XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG59XFxuXFxuI3NjZW5lMyAudGV4dC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XFxufVxcblxcbi5zdGlja3ktYm94IHtcXG4gIG1hcmdpbi10b3A6IC0xMDB2aDtcXG59XFxuXFxuLmNsZWFyLXdoaXRlIHtcXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jbGVhci1ibGFjayB7XFxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY2xlYXItbWl4IHtcXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciwgYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogYXJ0LWZvbnQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuLmFydC1mb250IHtcXG4gIGZvbnQtZmFtaWx5OiBhcnQtZm9udCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3RpY2t5IHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxufVxcblxcbi5vZmgge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmFic29sdXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZsZXgtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4L2Nzcy9jb250ZW50LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC9jc3MvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2luZGV4L2Nzcy9iYW5uZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2luZGV4L2Nzcy9zdmcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2luZGV4L2Nzcy9wcmVmYWNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9nZW5lcmljL2dlbmVyaWMvZ2VuZXJpYy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXgvY3NzL3NjZW5lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBT007RUFDRSxhQUFBO0FDTlI7QURRTTtFQUNFLGFBQUE7QUNOUjtBRFFNO0VBQ0UsYUFBQTtBQ05SO0FEUU07RUFDRSxhQUFBO0FDTlI7QURRTTtFQUNFLGFBQUE7QUNOUjtBRFFNO0VBQ0UsYUFBQTtBQ05SO0FEUU07RUFDRSxhQUFBO0FDTlI7QURiTTtFQUNFLGFBQUE7QUNlUjtBRGJNO0VBQ0UsYUFBQTtBQ2VSO0FEYk07RUFDRSxhQUFBO0FDZVI7QURiTTtFQUNFLGFBQUE7QUNlUjtBRGJNO0VBQ0UsYUFBQTtBQ2VSO0FEYk07RUFDRSxhQUFBO0FDZVI7QURiTTtFQUNFLGFBQUE7QUNlUjtBRGxDTTtFQUNFLGFBQUE7QUNvQ1I7QURsQ007RUFDRSxhQUFBO0FDb0NSO0FEbENNO0VBQ0UsYUFBQTtBQ29DUjtBRGxDTTtFQUNFLGFBQUE7QUNvQ1I7QURsQ007RUFDRSxhQUFBO0FDb0NSO0FEbENNO0VBQ0UsYUFBQTtBQ29DUjtBRGxDTTtFQUNFLGFBQUE7QUNvQ1I7QUR2RE07RUFDRSxhQUFBO0FDeURSO0FEdkRNO0VBQ0UsYUFBQTtBQ3lEUjtBRHZETTtFQUNFLGFBQUE7QUN5RFI7QUR2RE07RUFDRSxhQUFBO0FDeURSO0FEdkRNO0VBQ0UsYUFBQTtBQ3lEUjtBRHZETTtFQUNFLGFBQUE7QUN5RFI7QUR2RE07RUFDRSxhQUFBO0FDeURSO0FENUVNO0VBQ0UsYUFBQTtBQzhFUjtBRDVFTTtFQUNFLGFBQUE7QUM4RVI7QUQ1RU07RUFDRSxhQUFBO0FDOEVSO0FENUVNO0VBQ0UsYUFBQTtBQzhFUjtBRDVFTTtFQUNFLGFBQUE7QUM4RVI7QUQ1RU07RUFDRSxhQUFBO0FDOEVSO0FENUVNO0VBQ0UsYUFBQTtBQzhFUjtBRGpHTTtFQUNFLGFBQUE7QUNtR1I7QURqR007RUFDRSxhQUFBO0FDbUdSO0FEakdNO0VBQ0UsYUFBQTtBQ21HUjtBRGpHTTtFQUNFLGFBQUE7QUNtR1I7QURqR007RUFDRSxhQUFBO0FDbUdSO0FEakdNO0VBQ0UsYUFBQTtBQ21HUjtBRGpHTTtFQUNFLGFBQUE7QUNtR1I7QUR0SE07RUFDRSxhQUFBO0FDd0hSO0FEdEhNO0VBQ0UsYUFBQTtBQ3dIUjtBRHRITTtFQUNFLGFBQUE7QUN3SFI7QUR0SE07RUFDRSxhQUFBO0FDd0hSO0FEdEhNO0VBQ0UsYUFBQTtBQ3dIUjtBRHRITTtFQUNFLGFBQUE7QUN3SFI7QUR0SE07RUFDRSxhQUFBO0FDd0hSO0FEM0lNO0VBQ0UsYUFBQTtBQzZJUjtBRDNJTTtFQUNFLGFBQUE7QUM2SVI7QUQzSU07RUFDRSxhQUFBO0FDNklSO0FEM0lNO0VBQ0UsYUFBQTtBQzZJUjtBRDNJTTtFQUNFLGFBQUE7QUM2SVI7QUQzSU07RUFDRSxhQUFBO0FDNklSO0FEM0lNO0VBQ0UsYUFBQTtBQzZJUjtBRGhLTTtFQUNFLGFBQUE7QUNrS1I7QURoS007RUFDRSxhQUFBO0FDa0tSO0FEaEtNO0VBQ0UsYUFBQTtBQ2tLUjtBRGhLTTtFQUNFLGFBQUE7QUNrS1I7QURoS007RUFDRSxhQUFBO0FDa0tSO0FEaEtNO0VBQ0UsYUFBQTtBQ2tLUjtBRGhLTTtFQUNFLGFBQUE7QUNrS1I7QURyTE07RUFDRSxjQUFBO0FDdUxSO0FEckxNO0VBQ0UsY0FBQTtBQ3VMUjtBRHJMTTtFQUNFLGNBQUE7QUN1TFI7QURyTE07RUFDRSxjQUFBO0FDdUxSO0FEckxNO0VBQ0UsY0FBQTtBQ3VMUjtBRHJMTTtFQUNFLGNBQUE7QUN1TFI7QURyTE07RUFDRSxjQUFBO0FDdUxSO0FEMU1NO0VBQ0UsY0FBQTtBQzRNUjtBRDFNTTtFQUNFLGNBQUE7QUM0TVI7QUQxTU07RUFDRSxjQUFBO0FDNE1SO0FEMU1NO0VBQ0UsY0FBQTtBQzRNUjtBRDFNTTtFQUNFLGNBQUE7QUM0TVI7QUQxTU07RUFDRSxjQUFBO0FDNE1SO0FEMU1NO0VBQ0UsY0FBQTtBQzRNUjtBRC9OTTtFQUNFLGNBQUE7QUNpT1I7QUQvTk07RUFDRSxjQUFBO0FDaU9SO0FEL05NO0VBQ0UsY0FBQTtBQ2lPUjtBRC9OTTtFQUNFLGNBQUE7QUNpT1I7QUQvTk07RUFDRSxjQUFBO0FDaU9SO0FEL05NO0VBQ0UsY0FBQTtBQ2lPUjtBRC9OTTtFQUNFLGNBQUE7QUNpT1I7QURwUE07RUFDRSxjQUFBO0FDc1BSO0FEcFBNO0VBQ0UsY0FBQTtBQ3NQUjtBRHBQTTtFQUNFLGNBQUE7QUNzUFI7QURwUE07RUFDRSxjQUFBO0FDc1BSO0FEcFBNO0VBQ0UsY0FBQTtBQ3NQUjtBRHBQTTtFQUNFLGNBQUE7QUNzUFI7QURwUE07RUFDRSxjQUFBO0FDc1BSO0FEelFNO0VBQ0UsY0FBQTtBQzJRUjtBRHpRTTtFQUNFLGNBQUE7QUMyUVI7QUR6UU07RUFDRSxjQUFBO0FDMlFSO0FEelFNO0VBQ0UsY0FBQTtBQzJRUjtBRHpRTTtFQUNFLGNBQUE7QUMyUVI7QUR6UU07RUFDRSxjQUFBO0FDMlFSO0FEelFNO0VBQ0UsY0FBQTtBQzJRUjtBRDlSTTtFQUNFLGNBQUE7QUNnU1I7QUQ5Uk07RUFDRSxjQUFBO0FDZ1NSO0FEOVJNO0VBQ0UsY0FBQTtBQ2dTUjtBRDlSTTtFQUNFLGNBQUE7QUNnU1I7QUQ5Uk07RUFDRSxjQUFBO0FDZ1NSO0FEOVJNO0VBQ0UsY0FBQTtBQ2dTUjtBRDlSTTtFQUNFLGNBQUE7QUNnU1I7QURuVE07RUFDRSxjQUFBO0FDcVRSO0FEblRNO0VBQ0UsY0FBQTtBQ3FUUjtBRG5UTTtFQUNFLGNBQUE7QUNxVFI7QURuVE07RUFDRSxjQUFBO0FDcVRSO0FEblRNO0VBQ0UsY0FBQTtBQ3FUUjtBRG5UTTtFQUNFLGNBQUE7QUNxVFI7QURuVE07RUFDRSxjQUFBO0FDcVRSO0FEeFVNO0VBQ0UsY0FBQTtBQzBVUjtBRHhVTTtFQUNFLGNBQUE7QUMwVVI7QUR4VU07RUFDRSxjQUFBO0FDMFVSO0FEeFVNO0VBQ0UsY0FBQTtBQzBVUjtBRHhVTTtFQUNFLGNBQUE7QUMwVVI7QUR4VU07RUFDRSxjQUFBO0FDMFVSO0FEeFVNO0VBQ0UsY0FBQTtBQzBVUjtBRDdWTTtFQUNFLGNBQUE7QUMrVlI7QUQ3Vk07RUFDRSxjQUFBO0FDK1ZSO0FEN1ZNO0VBQ0UsY0FBQTtBQytWUjtBRDdWTTtFQUNFLGNBQUE7QUMrVlI7QUQ3Vk07RUFDRSxjQUFBO0FDK1ZSO0FEN1ZNO0VBQ0UsY0FBQTtBQytWUjtBRDdWTTtFQUNFLGNBQUE7QUMrVlI7QURsWE07RUFDRSxjQUFBO0FDb1hSO0FEbFhNO0VBQ0UsY0FBQTtBQ29YUjtBRGxYTTtFQUNFLGNBQUE7QUNvWFI7QURsWE07RUFDRSxjQUFBO0FDb1hSO0FEbFhNO0VBQ0UsY0FBQTtBQ29YUjtBRGxYTTtFQUNFLGNBQUE7QUNvWFI7QURsWE07RUFDRSxjQUFBO0FDb1hSO0FEdllNO0VBQ0UsY0FBQTtBQ3lZUjtBRHZZTTtFQUNFLGNBQUE7QUN5WVI7QUR2WU07RUFDRSxjQUFBO0FDeVlSO0FEdllNO0VBQ0UsY0FBQTtBQ3lZUjtBRHZZTTtFQUNFLGNBQUE7QUN5WVI7QUR2WU07RUFDRSxjQUFBO0FDeVlSO0FEdllNO0VBQ0UsY0FBQTtBQ3lZUjtBRDVaTTtFQUNFLGNBQUE7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QUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0RBQUE7QUowMEJGO0FJdjBCQTtFQUNFLGlDQUFBO0FKeTBCRjs7QUl0MEJBO0VBQ0UsYUFBQTtBSnkwQkY7O0FJdDBCQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtBSnkwQkY7O0FJdDBCQTtFQUNFLGdCQUFBO0FKeTBCRjs7QUl0MEJBO0VBQ0Usa0JBQUE7QUp5MEJGOztBSXQwQkE7RUFDRSxrQkFBQTtBSnkwQkY7O0FJaDBCQTtFQUxFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FKeTBCRjs7QUl4ekJBO0VBbkJFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBU0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBSnUwQkY7O0FBNTNCQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUErM0JGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluLXdyYXBwZXIge1xcclxcbiAgLm1haW4tY29udGFpbmVyIHtcXHJcXG4gICAgLy8qW2NsYXNzXj0nY29udGVudC13cmFwcGVyJ10ge1xcclxcbiAgICAvLyAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICAvL31cXHJcXG5cXHJcXG4gICAgQGZvciAkaSBmcm9tIDEgdG8gMjQge1xcclxcbiAgICAgIC5jb250ZW50LXdyYXBwZXItI3skaX0ge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aCAqICRpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuY29udGVudC13cmFwcGVyLSN7JGl9LTUge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aCAqICRpICsgNXZoO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuY29udGVudC13cmFwcGVyLSN7JGl9LTEwIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmggKiAkaSArIDEwdmg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5jb250ZW50LXdyYXBwZXItI3skaX0tMTUge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aCAqICRpICsgMTV2aDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLmNvbnRlbnQtd3JhcHBlci0jeyRpfS0yNSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMHZoICogJGkgKyAyNXZoO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuY29udGVudC13cmFwcGVyLSN7JGl9LTUwIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmggKiAkaSArIDUwdmg7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5jb250ZW50LXdyYXBwZXItI3skaX0tNzUge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aCAqICRpICsgNzV2aDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCJjb250ZW50XFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJiYW5uZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcInN2Z1xcXCI7XFxyXFxuQGltcG9ydCBcXFwicHJlZmFjZVxcXCI7XFxyXFxuQGltcG9ydCBcXFwic2NlbmVcXFwiO1xcclxcbkBpbXBvcnQgXFxcInNjZW5lMlxcXCI7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cIixcIi8vIHRvcCBiYW5uZXJcXHJcXG4uYmFubmVyLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbiAgLmJhbm5lci13cmFwcGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaXRlbTA1Mi53ZWJwJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgdmFyKC0tb2Zmc2V0LXkpO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIC5iYW5uZXIge1xcclxcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICBkaXYudGl0bGUge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgICAgICAvL3BhZGRpbmc6IDJyZW0gMDtcXHJcXG4gICAgICAgIC5hdHJpLW91dGxpbmUge1xcclxcbiAgICAgICAgICB3aWR0aDogMjByZW07XFxyXFxuICAgICAgICAgIGhlaWdodDogMTJyZW07XFxyXFxuICAgICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgICAgbGVmdDogLTI1JTtcXHJcXG4gICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjNTU5MmM5O1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uL2Fzc2V0cy9sb2dvXzEud2VicFxcXCIpO1xcclxcbiAgICAgICAgICAvL2JhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5sb2dvLXdyYXBwZXIge1xcclxcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgIGhlaWdodDogNnJlbTtcXHJcXG4gICAgICAgICAgd2lkdGg6IDI1cmVtO1xcclxcbiAgICAgICAgICB6LWluZGV4OiAyO1xcclxcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAgICAgICAubG9nbyB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICAgICAgICAgIC5jaGFyYWN0ZXJzIHtcXHJcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICAgICAgICAgICAgLmxvZ28tY2hhcmFjdGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHAuc3ViLXRpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICAgICAgLmxldHRlciB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGluZS13cmFwcGVyIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbiAgICAgIC5saW5lIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig5M2RlZyk7XFxyXFxuICAgICAgICB3aWR0aDogMjJyZW07IC8veFxcclxcbiAgICAgICAgaGVpZ2h0OiAzMDB2aDsgLy95XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTMxRDQ2O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJG1hc2stY29sb3I6IHJnYigjMDAwMDAwLCAuNik7XFxyXFxuXFxyXFxuICAuYmFubmVyLW1hc2sge1xcclxcbiAgICAubGlnaHQtd3JhcHBlciB7XFxyXFxuICAgICAgLmxpZ2h0cyB7XFxyXFxuICAgICAgICAubGlnaHQtcmQge1xcclxcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgIHdpZHRoOiAwO1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDRyZW0gc29saWQgJG1hc2stY29sb3I7XFxyXFxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxMDB2dyBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5saWdodC1sdCB7XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgd2lkdGg6IDA7XFxyXFxuICAgICAgICAgIGhlaWdodDogMDtcXHJcXG4gICAgICAgICAgYm9yZGVyLXRvcDogNHJlbSBzb2xpZCAkbWFzay1jb2xvcjtcXHJcXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMDB2dyBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIixcIi5sb2dvIHtcXHJcXG4gIC5hbmltZS1wYXRoIHtcXHJcXG4gICAgZmlsbDogbm9uZTtcXHJcXG4gICAgc3Ryb2tlOiAjMDAwIDtcXHJcXG4gICAgc3Ryb2tlLXdpZHRoOiAuMnJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCByZWQ7XFxyXFxuICB9XFxyXFxuICAuYW5pbWUtcGF0aC1pbm5lcntcXHJcXG4gICAgc3Ryb2tlLXdpZHRoOiAuMXJlbTtcXHJcXG4gIH1cXHJcXG59XCIsXCIjcHJlZmFjZSB7XFxyXFxuICAucHJlZmFjZS1jb250YWluZXIge1xcclxcblxcclxcbiAgICBoMSwgaDIsIHNwYW4sIGEge1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJlZmFjZS1jb250ZW50IHtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgY29sb3I6ICMwMDA7XFxyXFxuXFxyXFxuICAgICAgaDEudGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaDEuc3ViLXRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBzcGFuLmxpbmUge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByZWZhY2UtZm9vdGVyIHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICAgIGNvbG9yOiAjNTU1MzUzO1xcclxcblxcclxcbiAgICAgIGgxLCBoMyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGgzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyB0aW1lc3RhcnQsIHRpbWVzdG9wLFxcclxcbiN0aW1lc3RhcnQsICN0aW1lc3RvcCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAudGltZXN0YXJ0LWNvbnRhaW5lciwgLnRpbWVzdG9wLWNvbnRhaW5lciB7XFxyXFxuXFxyXFxuICAgIGgxLCBoMiwgc3BhbiwgYSB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aW1lc3RhcnQtY29udGVudCwgLnRpbWVzdG9wLWNvbnRlbnQge1xcclxcbiAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBjb2xvcjogIzAwMDtcXHJcXG5cXHJcXG4gICAgICBoMS50aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBoMS5zdWItdGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHNwYW4ubGluZSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB3aWR0aDogNzAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGltZXN0YXJ0LWZvb3RlciwgLnRpbWVzdG9wLWZvb3RlciB7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgICBjb2xvcjogIzU1NTM1MztcXHJcXG5cXHJcXG4gICAgICBoMSwgaDMge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBoMyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNjZW5lLXByZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAuc2NlbmUtcHJlLWNvbnRhaW5lciB7XFxyXFxuXFxyXFxuICAgIGgxLCBoMiwgc3BhbiwgYSB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zY2VuZS1wcmUtY29udGVudCB7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGNvbG9yOiAjMDAwO1xcclxcblxcclxcbiAgICAgIGgxLnRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGgxLnN1Yi10aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgc3Bhbi5saW5lIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zY2VuZS1wcmUtZm9vdGVyIHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICAgIGNvbG9yOiAjNTU1MzUzO1xcclxcblxcclxcbiAgICAgIGgxLCBoMyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGgzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIsIGJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8vIGZvbnQgcmVnaXN0ZXJcXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBhcnQtZm9udDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL1NhY3JhbWVudG8tUmVndWxhci50dGYnKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIilcXHJcXG59XFxyXFxuXFxyXFxuLmFydC1mb250IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBhcnQtZm9udCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RpY2t5IHtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5vZmgge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFic29sdXRlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbGF0aXZlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZsZXgtY2VudGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LWNlbnRlciB7XFxyXFxuICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHRleHQtY2VudGVyIHtcXHJcXG4gIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNlbnRlciB7XFxyXFxuICBAaW5jbHVkZSB0ZXh0LWNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuLi8uLi9nZW5lcmljL2dlbmVyaWMvZ2VuZXJpY1xcXCI7XFxyXFxuXFxyXFxuLnNjZW5lLXByZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIC8vd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NlbmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEMjk0MjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcHg7IC8vIOWklui+uei3neWQiOW5tlxcclxcbiAgLy93aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxuICAuc3RpY2t5LWJveCB7XFxyXFxuXFxyXFxuICAgIC5hbmltZS1jb250YWluZXItb3BhY2l0eSB7XFxyXFxuICAgICAgLml0ZW0ge1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTAwbXMgY3ViaWMtYmV6aWVyKDAuNywgMCwgMC4zLCAxKSAwbXM7XFxyXFxuXFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRleHQtd3JhcHBlciB7XFxyXFxuICAgICAgaDEsIHAsIHNwYW4ge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcXHJcXG4gICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIC8vY29sb3I6ICMxZDFkMWQ7XFxyXFxuICAgICAgY29sb3I6ICNhZmFmYWY7XFxyXFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAgIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNzY2VuZTMge1xcclxcbiAgLnRleHQtd3JhcHBlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3RpY2t5LWJveCB7XFxyXFxuICBtYXJnaW4tdG9wOiAtMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci13aGl0ZSB7XFxyXFxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItYmxhY2sge1xcclxcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLW1peCB7XFxyXFxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsICFpbXBvcnRhbnQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2VuZXJpYy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGVzdC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IGFkZFN0eWxlIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG52YXIgc2Nyb2xsSGFuZGxlcyA9IG5ldyBNYXAoKTtcclxudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG52YXIgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxudmFyIGNvbnRlbnRXcmFwcGVycyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbY2xhc3NePVwiY29udGVudC13cmFwcGVyXCJdJyk7XHJcbmZ1bmN0aW9uIHJlZ2lzdGVyU2Nyb2xsSGFuZGxlcyhlLCBmdW5jKSB7XHJcbiAgICBpZiAodHlwZW9mIGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgZSA9IGNvbnRlbnRXcmFwcGVyc1tlXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihlKTtcclxuICAgIH1cclxuICAgIGlmICghc2Nyb2xsSGFuZGxlcy5oYXMoZSkpXHJcbiAgICAgICAgc2Nyb2xsSGFuZGxlcy5zZXQoZSwgW10pO1xyXG4gICAgc2Nyb2xsSGFuZGxlcy5nZXQoZSkucHVzaChmdW5jKTtcclxufVxyXG5mdW5jdGlvbiByZW1vdmVTY3JvbGxIYW5kbGVzKGUpIHtcclxuICAgIGlmIChzY3JvbGxIYW5kbGVzLmhhcyhlKSlcclxuICAgICAgICBzY3JvbGxIYW5kbGVzLmRlbGV0ZShlKTtcclxufVxyXG5mdW5jdGlvbiBwcm9jZXNzU2Nyb2xsSGFuZGxlcyhlLCBwcm9ncmVzcywgZ2xvYmFsUHJvZ3Jlc3MpIHtcclxuICAgIGlmIChzY3JvbGxIYW5kbGVzLmhhcyhlKSkge1xyXG4gICAgICAgIHZhciBoYW5kbGVzID0gc2Nyb2xsSGFuZGxlcy5nZXQoZSk7XHJcbiAgICAgICAgaGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmdW5jKSB7XHJcbiAgICAgICAgICAgIGZ1bmMoZSwgcHJvZ3Jlc3MsIGdsb2JhbFByb2dyZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBkaXNwYXRjaFNjcm9sbChnbG9iYWxQcm9ncmVzcykge1xyXG4gICAgdmFyIHN1bUhlaWdodCA9IDA7XHJcbiAgICBjb250ZW50V3JhcHBlcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBvZmZzZXRIZWlnaHQgPSBodG1sLnNjcm9sbFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCAtIHN1bUhlaWdodDtcclxuICAgICAgICB2YXIgcCA9IG9mZnNldEhlaWdodCAvIChlLmNsaWVudEhlaWdodCArIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgcHJvY2Vzc1Njcm9sbEhhbmRsZXMoZSwgcCwgZ2xvYmFsUHJvZ3Jlc3MpO1xyXG4gICAgICAgIHN1bUhlaWdodCArPSBlLmNsaWVudEhlaWdodDtcclxuICAgICAgICBhZGRTdHlsZShlLCAnLS1wcm9ncmVzcycsIFwiXCIgKyBwKTtcclxuICAgIH0pO1xyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZ2xvYmFsUHJvZ3Jlc3MgPSBodG1sLnNjcm9sbFRvcCAvIChjb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gaHRtbC5jbGllbnRIZWlnaHQpO1xyXG4gICAgZGlzcGF0Y2hTY3JvbGwoZ2xvYmFsUHJvZ3Jlc3MpO1xyXG59KTtcclxuZXhwb3J0IHsgcmVnaXN0ZXJTY3JvbGxIYW5kbGVzLCByZW1vdmVTY3JvbGxIYW5kbGVzIH07XHJcbiIsImltcG9ydCB7IHJlZ2lzdGVyU2Nyb2xsSGFuZGxlcyB9IGZyb20gXCIuL3Njcm9sbFwiO1xyXG5pbXBvcnQgeyBhZGRTdHlsZSB9IGZyb20gXCIuL3V0aWxcIjtcclxucmVnaXN0ZXJTY3JvbGxIYW5kbGVzKDAsIGZ1bmN0aW9uIChlLCBwcm9ncmVzcywgZ2xvYmFsUHJvZ3Jlc3MpIHtcclxuICAgIHZhciBhID0gLjY7XHJcbiAgICB2YXIgYiA9IDM7XHJcbiAgICBpZiAoLjYgPD0gcHJvZ3Jlc3MgJiYgcHJvZ3Jlc3MgPD0gYikge1xyXG4gICAgICAgIGFkZFN0eWxlKGUsICctLW9mZnNldC15JywgKHByb2dyZXNzIC0gYSkgKiAxMjAwIC0gNzAgKyAncHgnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFkZFN0eWxlKGUsICctLW9mZnNldC15JywgcHJvZ3Jlc3MgKiA1MCAtIDEwMCArICdweCcpO1xyXG4gICAgfVxyXG59KTtcclxuIiwiZnVuY3Rpb24gYWRkU3R5bGUoZSwgaywgdikge1xyXG4gICAgdmFyIHN0eWxlS1YgPSBlLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpO1xyXG4gICAgaWYgKCFzdHlsZUtWKSB7XHJcbiAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgayArICc6JyArIHYgKyAnOycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBzdHlsZUxpc3QgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBzdHlsZUtWLnNwbGl0KCc7Jyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGkgPSBfYVtfaV07XHJcbiAgICAgICAgaWYgKGkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHN0eWxlTGlzdC5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBzdHlsZSA9IHt9O1xyXG4gICAgZm9yICh2YXIgX2IgPSAwLCBzdHlsZUxpc3RfMSA9IHN0eWxlTGlzdDsgX2IgPCBzdHlsZUxpc3RfMS5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICB2YXIga3YgPSBzdHlsZUxpc3RfMVtfYl07XHJcbiAgICAgICAgaWYgKGt2LmluZGV4T2YoJzonKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIGtfMSA9IGt2LnNwbGl0KCc6JylbMF07XHJcbiAgICAgICAgICAgIHN0eWxlW2tfMV0gPSBrdi5zcGxpdCgnOicpWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0eWxlW2tdID0gdjtcclxuICAgIHN0eWxlS1YgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XHJcbiAgICAgICAgc3R5bGVLViArPSBrZXkgKyAnOicgKyBzdHlsZVtrZXldICsgJzsnO1xyXG4gICAgfVxyXG4gICAgZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGVLVik7XHJcbn1cclxuZXhwb3J0IHsgYWRkU3R5bGUgfTtcclxuIiwiaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2ZvbnRzL1NhY3JhbWVudG8tUmVndWxhci50dGZcIlxyXG5pbXBvcnQgXCIuL2dlbmVyaWMuc2Nzc1wiXHJcbiIsIi8vIGJhbm5lciBBVFJJIHN2ZyBsb2dvIOWKqOeUu1xyXG4vLyBwdXJwbGUgcmVjdCBsaWdodCBhcHBlYXJcclxuaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCJcclxuXHJcbmFuaW1lLnNldCgnLmxpbmUtd3JhcHBlciAubGluZScsIHtcclxuICAgIHNjYWxlWDogMCxcclxuICAgIHNjYWxlWTogMCxcclxufSlcclxubGV0IGxvZ29BbmltZSA9IGFuaW1lLnRpbWVsaW5lKHt9KTtcclxubG9nb0FuaW1lLmFkZCh7XHJcbiAgICB0YXJnZXRzOiAnLmxpbmUtd3JhcHBlciAubGluZScsXHJcbiAgICBzY2FsZVg6IFtcclxuICAgICAgICB7dmFsdWU6IDB9LFxyXG4gICAgICAgIHt2YWx1ZTogLjEsIGR1cmF0aW9uOiA1MDAsfSxcclxuICAgICAgICB7dmFsdWU6IDEsIGR1cmF0aW9uOiAxMDAwLCBkZWxheTogMTIwMH0sXHJcbiAgICBdLFxyXG4gICAgc2NhbGVZOiBbXHJcbiAgICAgICAge3ZhbHVlOiAwfSxcclxuICAgICAgICB7dmFsdWU6IDEsIGR1cmF0aW9uOiA4MDAsIGVhc2luZzogJ2Vhc2VJblF1YWQnfVxyXG4gICAgXSxcclxuICAgIHJvdGF0ZVo6IFtcclxuICAgICAgICB7dmFsdWU6IDkzLCBkZWxheTogMjAwMH1cclxuICAgIF0sXHJcbn0pXHJcblxyXG4vLyBkcmF3IHN2ZyBvdXRsaW5lXHJcbmxvZ29BbmltZS5hZGQoe1xyXG4gICAgdGFyZ2V0czogJ3N2ZyAuYW5pbWUtcGF0aCwgLmFuaW1lLXBhdGgtaW5uZXInLFxyXG4gICAgc3Ryb2tlRGFzaG9mZnNldDogW2FuaW1lLnNldERhc2hvZmZzZXQsIDBdLFxyXG4gICAgZWFzaW5nOiBcImVhc2VPdXRDdWJpY1wiLFxyXG4gICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICBkZWxheTogZnVuY3Rpb24gKGVsLCBpKSB7XHJcbiAgICAgICAgcmV0dXJuIGkgKiAxNTA7XHJcbiAgICB9LFxyXG59LClcclxuXHJcbi8vIGJhbm5lciBhdHJpIG91dGxpbmUgYW5pbWVcclxuYW5pbWUoe1xyXG4gICAgdGFyZ2V0czogJy5hdHJpLW91dGxpbmUnLFxyXG4gICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgZWFzaW5nOiBcImVhc2VJblNpbmVcIixcclxuICAgIGR1cmF0aW9uOiAxNjAwLFxyXG4gICAgZGVsYXk6IDQwMDAsXHJcbn0pO1xyXG5cclxuLy8gZmlsbCBzdmcgY29sb3JcclxubG9nb0FuaW1lLmFkZCh7XHJcbiAgICB0YXJnZXRzOiAnc3ZnIC5hbmltZS1wYXRoJyxcclxuICAgIGVhc2luZzogXCJlYXNlSW5PdXRTaW5lXCIsXHJcbiAgICBmaWxsOiBbJ3RyYW5zcGFyZW50JywnIzFmMjlmZiddLFxyXG4gICAgZGVsYXk6IGZ1bmN0aW9uIChlbCwgaSkge1xyXG4gICAgICAgIHJldHVybiBpICogNTA7XHJcbiAgICB9LFxyXG59KVxyXG5cclxuLy8gc3ViIHRpdGxlIGFuaW1lXHJcbi8vIFdyYXAgZXZlcnkgbGV0dGVyIGluIGEgc3BhblxyXG5sZXQgdGV4dFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViLXRpdGxlJyk7XHJcbnRleHRXcmFwcGVyLmlubmVySFRNTCA9IHRleHRXcmFwcGVyLnRleHRDb250ZW50LnJlcGxhY2UoL1xcUy9nLCBcIjxzcGFuIGNsYXNzPSdsZXR0ZXInPiQmPC9zcGFuPlwiKTtcclxubG9nb0FuaW1lLmFkZCh7XHJcbiAgICB0YXJnZXRzOiAnLnN1Yi10aXRsZSAubGV0dGVyJyxcclxuICAgIHJvdGF0ZVk6IFstOTAsIDBdLFxyXG4gICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICBlYXNpbmc6ICdlYXNlT3V0U2luZScsXHJcbiAgICBkZWxheTogKGVsLCBpKSA9PiA5MCAqIGlcclxufSlcclxuXHJcbi8vIGxpbmUgd3JhcHBlclxyXG4vLyB0cmFuc2xhdGVYKDI5JSkgcm90YXRlWigtNzVkZWcpIHNjYWxlWSgzKSBzY2FsZVgoMykiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqc1wiO1xyXG5pbXBvcnQgXCIuL2FuaW1lLWJhbm5lclwiO1xyXG5pbXBvcnQgXCIuL3Njcm9sbFwiO1xyXG5pbXBvcnQgXCIuL2Nzcy9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCBcIi4vY3NzL2FuaW1lLnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vZ2VuZXJpYy9nZW5lcmljXCI7XHJcbmltcG9ydCBcIi4uL2dlbmVyaWMvdGVzdFwiO1xyXG5pbXBvcnQgXCIuL3Rlc3RcIjtcclxuY29uc29sZS5sb2coJ0hlbGxvLCBUaGVyZS4gIEF0cmkhJyk7XHJcbmltcG9ydCB7IHJlZ2lzdGVyU2Nyb2xsSGFuZGxlcyB9IGZyb20gXCIuL3Njcm9sbFwiO1xyXG4vLyB0ZXh0IGFuaW1lIHN0YXJ0XHJcbnZhciB0ZXh0QW5pbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHQtYW5pbWUtY29udGFpbmVyJyk7XHJcbnRleHRBbmltZXMuZm9yRWFjaChmdW5jdGlvbiAodGV4dEFuaW1lKSB7XHJcbiAgICB2YXIgdGV4dEFuaW1lSXRlbXMgPSB0ZXh0QW5pbWUucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0nKTtcclxuICAgIHZhciB0ZXh0QW5pbWVBbmltYXRpbmcgPSBudWxsO1xyXG4gICAgdmFyIHNjZW5lID0gdGV4dEFuaW1lO1xyXG4gICAgd2hpbGUgKHNjZW5lICYmIHNjZW5lLmlkLmluZGV4T2YoJ3NjZW5lJykpIHtcclxuICAgICAgICBzY2VuZSA9IHNjZW5lLnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAoIXNjZW5lKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHRleHRBbmltZUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGUsIGluZGV4KSB7XHJcbiAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgcmVnaXN0ZXJTY3JvbGxIYW5kbGVzKHNjZW5lLCBmdW5jdGlvbiAoc2NlbmUsIHByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmltZVN0YXJ0ID0gcGFyc2VGbG9hdChlLmRhdGFzZXRbJ2FuaW1lU3RhcnQnXSk7XHJcbiAgICAgICAgICAgIHZhciBhbmltZUVuZCA9IHBhcnNlRmxvYXQoZS5kYXRhc2V0WydhbmltZUVuZCddKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5kYXRhc2V0WydhbmltZVN0YXJ0J10sIGUuZGF0YXNldFsnYW5pbWVFbmQnXSlcclxuICAgICAgICAgICAgaWYgKGFuaW1lU3RhcnQgPD0gcHJvZ3Jlc3MgJiYgcHJvZ3Jlc3MgPCBhbmltZUVuZCkge1xyXG4gICAgICAgICAgICAgICAgdGV4dEFuaW1lSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZSAhPT0gZSAmJiAhZWxlLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRleHRBbmltZUFuaW1hdGluZyAhPT0gZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBlLmNoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVYOiBbLTkwLCAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogWycyMDAlJywgMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHsgdmFsdWU6IFswLCAxXSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbMS4zLCAxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogZnVuY3Rpb24gKGUsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpICogNTUwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGV4dEFuaW1lQW5pbWF0aW5nID0gZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4vLyB0ZXh0IGFuaW1lIGVuZFxyXG4vLyBjaGFuZ2UgaW1hZ2VcclxudmFyIG9wYWNpdHlBbmltZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWUtY29udGFpbmVyLW9wYWNpdHknKTtcclxub3BhY2l0eUFuaW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChvcGFjaXR5QW5pbWUpIHtcclxuICAgIHZhciBvcGFjaXR5QW5pbWVJdGVtcyA9IG9wYWNpdHlBbmltZS5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbScpO1xyXG4gICAgdmFyIG9wYWNpdHlBbmltZUFuaW1hdGluZyA9IG51bGw7XHJcbiAgICB2YXIgc2NlbmUgPSBvcGFjaXR5QW5pbWU7XHJcbiAgICB3aGlsZSAoc2NlbmUgJiYgc2NlbmUuaWQuaW5kZXhPZignc2NlbmUnKSkge1xyXG4gICAgICAgIHNjZW5lID0gc2NlbmUucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIGlmICghc2NlbmUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgb3BhY2l0eUFuaW1lSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZSwgaW5kZXgpIHtcclxuICAgICAgICBlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHJlZ2lzdGVyU2Nyb2xsSGFuZGxlcyhzY2VuZSwgZnVuY3Rpb24gKHNjZW5lLCBwcm9ncmVzcykge1xyXG4gICAgICAgICAgICB2YXIgYW5pbWVTdGFydCA9IHBhcnNlRmxvYXQoZS5kYXRhc2V0WydhbmltZVN0YXJ0J10pO1xyXG4gICAgICAgICAgICB2YXIgYW5pbWVFbmQgPSBwYXJzZUZsb2F0KGUuZGF0YXNldFsnYW5pbWVFbmQnXSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGF0YXNldFsnYW5pbWVTdGFydCddLCBlLmRhdGFzZXRbJ2FuaW1lRW5kJ10pXHJcbiAgICAgICAgICAgIGlmIChhbmltZVN0YXJ0IDw9IHByb2dyZXNzICYmIHByb2dyZXNzIDwgYW5pbWVFbmQpIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHlBbmltZUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGUgIT09IGUgJiYgZWxlICE9PSBlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3BhY2l0eUFuaW1lQW5pbWF0aW5nICE9PSBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eUFuaW1lQW5pbWF0aW5nID0gZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4vLyByZWdpc3RlclNjcm9sbEhhbmRsZXMoXCIjc2NlbmUxXCIsIGZ1bmN0aW9uIChlLCBwcm9ncmVzcykge1xyXG4vLyAgICAgbGV0IGtleWZyYW1lOiB7IFtwcm9wTmFtZTogc3RyaW5nXTogW251bWJlciwgbnVtYmVyXTsgfSA9IHt9O1xyXG4vLyAgICAga2V5ZnJhbWVbaTFdID0gWzAuMSwgLjNdXHJcbi8vICAgICBrZXlmcmFtZVtpMl0gPSBbMC4zLCAuNV1cclxuLy8gICAgIGtleWZyYW1lW2kzXSA9IFswLjUsIC43XVxyXG4vLyAgICAga2V5ZnJhbWVbaTRdID0gWzAuNywgLjldXHJcbi8vXHJcbi8vICAgICBmb3IgKGNvbnN0IGtleWZyYW1lS2V5IGluIGtleWZyYW1lKSB7XHJcbi8vICAgICAgICAgbGV0IHZhbHVlID0ga2V5ZnJhbWVba2V5ZnJhbWVLZXldO1xyXG4vLyAgICAgICAgIGlmICh2YWx1ZVswXSA8PSBwcm9ncmVzcyAmJiBwcm9ncmVzcyA8IHZhbHVlWzFdKSB7XHJcbi8vICAgICAgICAgICAgIGJyZWFrXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9KTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXVkaW8nKS5wbGF5KCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
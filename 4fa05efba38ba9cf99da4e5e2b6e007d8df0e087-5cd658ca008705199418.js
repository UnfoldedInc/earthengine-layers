(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "1OyB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "5ku3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isBrowserMainThread; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U8pU");
/* harmony import */ var _is_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("I0ug");


function isBrowser() {
  var isNode = (typeof process === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(process)) === 'object' && String(process) === '[object process]' && !process.browser;
  return !isNode || Object(_is_electron__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
}
function isBrowserMainThread() {
  return isBrowser() && typeof document !== 'undefined';
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "GawU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHiResTimestamp; });
function getHiResTimestamp() {
  var timestamp;

  if (typeof window !== 'undefined' && window.performance) {
    timestamp = window.performance.now();
  } else if (typeof process !== 'undefined' && process.hrtime) {
    var timeParts = process.hrtime();
    timestamp = timeParts[0] * 1000 + timeParts[1] / 1e6;
  } else {
    timestamp = Date.now();
  }

  return timestamp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "I0ug":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isElectron; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U8pU");

function isElectron(mockUserAgent) {
  if (typeof window !== 'undefined' && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(window.process) === 'object' && window.process.type === 'renderer') {
    return true;
  }

  if (typeof process !== 'undefined' && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(process.versions) === 'object' && Boolean(process.versions.electron)) {
    return true;
  }

  var realUserAgent = (typeof navigator === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(navigator)) === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent;
  var userAgent = mockUserAgent || realUserAgent;

  if (userAgent && userAgent.indexOf('Electron') >= 0) {
    return true;
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "K9nA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return self_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return window_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return global_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return document_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return process_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return console_; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U8pU");

var globals = {
  self: typeof self !== 'undefined' && self,
  window: typeof window !== 'undefined' && window,
  global: typeof global !== 'undefined' && global,
  document: typeof document !== 'undefined' && document,
  process: (typeof process === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(process)) === 'object' && process
};
var self_ = globals.self || globals.window || globals.global;
var window_ = globals.window || globals.self || globals.global;
var global_ = globals.global || globals.self || globals.window;
var document_ = globals.document || {};
var process_ = globals.process || {};
var console_ = console;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj"), __webpack_require__("8oxB")))

/***/ }),

/***/ "NdJ4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return autobind; });
function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var it,
      normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function autobind(obj) {
  var predefined = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['constructor'];
  var proto = Object.getPrototypeOf(obj);
  var propNames = Object.getOwnPropertyNames(proto);

  var _iterator = _createForOfIteratorHelper(propNames),
      _step;

  try {
    var _loop = function _loop() {
      var key = _step.value;

      if (typeof obj[key] === 'function') {
        if (!predefined.find(function (name) {
          return key === name;
        })) {
          obj[key] = obj[key].bind(obj);
        }
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),

/***/ "S5bX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1OyB");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vuIU");



function getStorage(type) {
  try {
    var storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return storage;
  } catch (e) {
    return null;
  }
}

var LocalStorage = function () {
  function LocalStorage(id, defaultSettings) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sessionStorage';

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, LocalStorage);

    this.storage = getStorage(type);
    this.id = id;
    this.config = {};
    Object.assign(this.config, defaultSettings);

    this._loadConfiguration();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LocalStorage, [{
    key: "getConfiguration",
    value: function getConfiguration() {
      return this.config;
    }
  }, {
    key: "setConfiguration",
    value: function setConfiguration(configuration) {
      this.config = {};
      return this.updateConfiguration(configuration);
    }
  }, {
    key: "updateConfiguration",
    value: function updateConfiguration(configuration) {
      Object.assign(this.config, configuration);

      if (this.storage) {
        var serialized = JSON.stringify(this.config);
        this.storage.setItem(this.id, serialized);
      }

      return this;
    }
  }, {
    key: "_loadConfiguration",
    value: function _loadConfiguration() {
      var configuration = {};

      if (this.storage) {
        var serializedConfiguration = this.storage.getItem(this.id);
        configuration = serializedConfiguration ? JSON.parse(serializedConfiguration) : {};
      }

      Object.assign(this.config, configuration);
      return this;
    }
  }]);

  return LocalStorage;
}();



/***/ }),

/***/ "U8pU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "W1BH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isBrowser; });
/* harmony import */ var _env_is_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5ku3");


var VERSION = typeof __VERSION__ !== 'undefined' ? __VERSION__ : 'untranspiled source';
var isBrowser = Object(_env_is_browser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();

/***/ }),

/***/ "X68p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addColor; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("W1BH");

var COLOR = {
  BLACK: 30,
  RED: 31,
  GREEN: 32,
  YELLOW: 33,
  BLUE: 34,
  MAGENTA: 35,
  CYAN: 36,
  WHITE: 37,
  BRIGHT_BLACK: 90,
  BRIGHT_RED: 91,
  BRIGHT_GREEN: 92,
  BRIGHT_YELLOW: 93,
  BRIGHT_BLUE: 94,
  BRIGHT_MAGENTA: 95,
  BRIGHT_CYAN: 96,
  BRIGHT_WHITE: 97
};

function getColor(color) {
  return typeof color === 'string' ? COLOR[color.toUpperCase()] || COLOR.WHITE : color;
}

function addColor(string, color, background) {
  if (!_globals__WEBPACK_IMPORTED_MODULE_0__[/* isBrowser */ "b"] && typeof string === 'string') {
    if (color) {
      color = getColor(color);
      string = "\x1B[".concat(color, "m").concat(string, "\x1B[39m");
    }

    if (background) {
      color = getColor(background);
      string = "\x1B[".concat(background + 10, "m").concat(string, "\x1B[49m");
    }
  }

  return string;
}

/***/ }),

/***/ "XbXb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBrowser; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("K9nA");
/* harmony import */ var _is_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5ku3");
/* harmony import */ var _is_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("I0ug");



function isMobile() {
  return typeof _globals__WEBPACK_IMPORTED_MODULE_0__[/* window */ "f"].orientation !== 'undefined';
}
function getBrowser(mockUserAgent) {
  if (!mockUserAgent && !Object(_is_browser__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])()) {
    return 'Node';
  }

  if (Object(_is_electron__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(mockUserAgent)) {
    return 'Electron';
  }

  var navigator_ = typeof navigator !== 'undefined' ? navigator : {};
  var userAgent = mockUserAgent || navigator_.userAgent || '';

  if (userAgent.indexOf('Edge') > -1) {
    return 'Edge';
  }

  var isMSIE = userAgent.indexOf('MSIE ') !== -1;
  var isTrident = userAgent.indexOf('Trident/') !== -1;

  if (isMSIE || isTrident) {
    return 'IE';
  }

  if (_globals__WEBPACK_IMPORTED_MODULE_0__[/* window */ "f"].chrome) {
    return 'Chrome';
  }

  if (_globals__WEBPACK_IMPORTED_MODULE_0__[/* window */ "f"].safari) {
    return 'Safari';
  }

  if (_globals__WEBPACK_IMPORTED_MODULE_0__[/* window */ "f"].mozInnerScreenX) {
    return 'Firefox';
  }

  return 'Unknown';
}

/***/ }),

/***/ "d3wX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Log; });
/* unused harmony export normalizeArguments */
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U8pU");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KQm4");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rePB");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1OyB");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vuIU");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("W1BH");
/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("S5bX");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ygbw");
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("X68p");
/* harmony import */ var _utils_autobind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("NdJ4");
/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("qlHW");
/* harmony import */ var _utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("egY1");












var originalConsole = {
  debug: _utils_globals__WEBPACK_IMPORTED_MODULE_5__[/* isBrowser */ "b"] ? console.debug || console.log : console.log,
  log: console.log,
  info: console.info,
  warn: console.warn,
  error: console.error
};
var DEFAULT_SETTINGS = {
  enabled: true,
  level: 0
};

function noop() {}

var cache = {};
var ONCE = {
  once: true
};

function getTableHeader(table) {
  for (var key in table) {
    for (var title in table[key]) {
      return title || 'untitled';
    }
  }

  return 'empty';
}

var Log = function () {
  function Log() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Log);

    this.id = id;
    this.VERSION = _utils_globals__WEBPACK_IMPORTED_MODULE_5__[/* VERSION */ "a"];
    this._startTs = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])();
    this._deltaTs = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])();
    this.LOG_THROTTLE_TIMEOUT = 0;
    this._storage = new _utils_local_storage__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]("__probe-".concat(this.id, "__"), DEFAULT_SETTINGS);
    this.userData = {};
    this.timeStamp("".concat(this.id, " started"));
    Object(_utils_autobind__WEBPACK_IMPORTED_MODULE_9__[/* autobind */ "a"])(this);
    Object.seal(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Log, [{
    key: "isEnabled",
    value: function isEnabled() {
      return this._storage.config.enabled;
    }
  }, {
    key: "getLevel",
    value: function getLevel() {
      return this._storage.config.level;
    }
  }, {
    key: "getTotal",
    value: function getTotal() {
      return Number((Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])() - this._startTs).toPrecision(10));
    }
  }, {
    key: "getDelta",
    value: function getDelta() {
      return Number((Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])() - this._deltaTs).toPrecision(10));
    }
  }, {
    key: "getPriority",
    value: function getPriority() {
      return this.level;
    }
  }, {
    key: "enable",
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this._storage.updateConfiguration({
        enabled: enabled
      });

      return this;
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      this._storage.updateConfiguration({
        level: level
      });

      return this;
    }
  }, {
    key: "assert",
    value: function assert(condition, message) {
      Object(_utils_assert__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(condition, message);
    }
  }, {
    key: "warn",
    value: function warn(message) {
      return this._getLogFunction(0, message, originalConsole.warn, arguments, ONCE);
    }
  }, {
    key: "error",
    value: function error(message) {
      return this._getLogFunction(0, message, originalConsole.error, arguments);
    }
  }, {
    key: "deprecated",
    value: function deprecated(oldUsage, newUsage) {
      return this.warn("`".concat(oldUsage, "` is deprecated and will be removed in a later version. Use `").concat(newUsage, "` instead"));
    }
  }, {
    key: "removed",
    value: function removed(oldUsage, newUsage) {
      return this.error("`".concat(oldUsage, "` has been removed. Use `").concat(newUsage, "` instead"));
    }
  }, {
    key: "probe",
    value: function probe(logLevel, message) {
      return this._getLogFunction(logLevel, message, originalConsole.log, arguments, {
        time: true,
        once: true
      });
    }
  }, {
    key: "log",
    value: function log(logLevel, message) {
      return this._getLogFunction(logLevel, message, originalConsole.debug, arguments);
    }
  }, {
    key: "info",
    value: function info(logLevel, message) {
      return this._getLogFunction(logLevel, message, console.info, arguments);
    }
  }, {
    key: "once",
    value: function once(logLevel, message) {
      return this._getLogFunction(logLevel, message, originalConsole.debug || originalConsole.info, arguments, ONCE);
    }
  }, {
    key: "table",
    value: function table(logLevel, _table, columns) {
      if (_table) {
        return this._getLogFunction(logLevel, _table, console.table || noop, columns && [columns], {
          tag: getTableHeader(_table)
        });
      }

      return noop;
    }
  }, {
    key: "image",
    value: function image(_ref2) {
      var logLevel = _ref2.logLevel,
          priority = _ref2.priority,
          _image = _ref2.image,
          _ref2$message = _ref2.message,
          message = _ref2$message === void 0 ? '' : _ref2$message,
          _ref2$scale = _ref2.scale,
          scale = _ref2$scale === void 0 ? 1 : _ref2$scale;

      if (!this._shouldLog(logLevel || priority)) {
        return noop;
      }

      return _utils_globals__WEBPACK_IMPORTED_MODULE_5__[/* isBrowser */ "b"] ? logImageInBrowser({
        image: _image,
        message: message,
        scale: scale
      }) : logImageInNode({
        image: _image,
        message: message,
        scale: scale
      });
    }
  }, {
    key: "settings",
    value: function settings() {
      if (console.table) {
        console.table(this._storage.config);
      } else {
        console.log(this._storage.config);
      }
    }
  }, {
    key: "get",
    value: function get(setting) {
      return this._storage.config[setting];
    }
  }, {
    key: "set",
    value: function set(setting, value) {
      this._storage.updateConfiguration(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, setting, value));
    }
  }, {
    key: "time",
    value: function time(logLevel, message) {
      return this._getLogFunction(logLevel, message, console.time ? console.time : console.info);
    }
  }, {
    key: "timeEnd",
    value: function timeEnd(logLevel, message) {
      return this._getLogFunction(logLevel, message, console.timeEnd ? console.timeEnd : console.info);
    }
  }, {
    key: "timeStamp",
    value: function timeStamp(logLevel, message) {
      return this._getLogFunction(logLevel, message, console.timeStamp || noop);
    }
  }, {
    key: "group",
    value: function group(logLevel, message) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        collapsed: false
      };
      opts = normalizeArguments({
        logLevel: logLevel,
        message: message,
        opts: opts
      });
      var _opts = opts,
          collapsed = _opts.collapsed;
      opts.method = (collapsed ? console.groupCollapsed : console.group) || console.info;
      return this._getLogFunction(opts);
    }
  }, {
    key: "groupCollapsed",
    value: function groupCollapsed(logLevel, message) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.group(logLevel, message, Object.assign({}, opts, {
        collapsed: true
      }));
    }
  }, {
    key: "groupEnd",
    value: function groupEnd(logLevel) {
      return this._getLogFunction(logLevel, '', console.groupEnd || noop);
    }
  }, {
    key: "withGroup",
    value: function withGroup(logLevel, message, func) {
      this.group(logLevel, message)();

      try {
        func();
      } finally {
        this.groupEnd(logLevel)();
      }
    }
  }, {
    key: "trace",
    value: function trace() {
      if (console.trace) {
        console.trace();
      }
    }
  }, {
    key: "_shouldLog",
    value: function _shouldLog(logLevel) {
      return this.isEnabled() && this.getLevel() >= normalizeLogLevel(logLevel);
    }
  }, {
    key: "_getLogFunction",
    value: function _getLogFunction(logLevel, message, method) {
      var args = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var opts = arguments.length > 4 ? arguments[4] : undefined;

      if (this._shouldLog(logLevel)) {
        var _method;

        opts = normalizeArguments({
          logLevel: logLevel,
          message: message,
          args: args,
          opts: opts
        });
        method = method || opts.method;

        Object(_utils_assert__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(method);

        opts.total = this.getTotal();
        opts.delta = this.getDelta();
        this._deltaTs = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])();
        var tag = opts.tag || opts.message;

        if (opts.once) {
          if (!cache[tag]) {
            cache[tag] = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])();
          } else {
            return noop;
          }
        }

        message = decorateMessage(this.id, opts.message, opts);
        return (_method = method).bind.apply(_method, [console, message].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(opts.args)));
      }

      return noop;
    }
  }, {
    key: "level",
    set: function set(newLevel) {
      this.setLevel(newLevel);
    },
    get: function get() {
      return this.getLevel();
    }
  }, {
    key: "priority",
    set: function set(newPriority) {
      this.level = newPriority;
    },
    get: function get() {
      return this.level;
    }
  }]);

  return Log;
}();


Log.VERSION = _utils_globals__WEBPACK_IMPORTED_MODULE_5__[/* VERSION */ "a"];

function normalizeLogLevel(logLevel) {
  if (!logLevel) {
    return 0;
  }

  var resolvedLevel;

  switch (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(logLevel)) {
    case 'number':
      resolvedLevel = logLevel;
      break;

    case 'object':
      resolvedLevel = logLevel.logLevel || logLevel.priority || 0;
      break;

    default:
      return 0;
  }

  Object(_utils_assert__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Number.isFinite(resolvedLevel) && resolvedLevel >= 0);

  return resolvedLevel;
}

function normalizeArguments(opts) {
  var logLevel = opts.logLevel,
      message = opts.message;
  opts.logLevel = normalizeLogLevel(logLevel);
  var args = opts.args ? Array.from(opts.args) : [];

  while (args.length && args.shift() !== message) {}

  opts.args = args;

  switch (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(logLevel)) {
    case 'string':
    case 'function':
      if (message !== undefined) {
        args.unshift(message);
      }

      opts.message = logLevel;
      break;

    case 'object':
      Object.assign(opts, logLevel);
      break;

    default:
  }

  if (typeof opts.message === 'function') {
    opts.message = opts.message();
  }

  var messageType = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(opts.message);

  Object(_utils_assert__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(messageType === 'string' || messageType === 'object');

  return Object.assign(opts, opts.opts);
}

function decorateMessage(id, message, opts) {
  if (typeof message === 'string') {
    var time = opts.time ? Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__[/* leftPad */ "c"])(Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__[/* formatTime */ "b"])(opts.total)) : '';
    message = opts.time ? "".concat(id, ": ").concat(time, "  ").concat(message) : "".concat(id, ": ").concat(message);
    message = Object(_utils_color__WEBPACK_IMPORTED_MODULE_8__[/* addColor */ "b"])(message, opts.color, opts.background);
  }

  return message;
}

function logImageInNode(_ref3) {
  var image = _ref3.image,
      _ref3$message = _ref3.message,
      message = _ref3$message === void 0 ? '' : _ref3$message,
      _ref3$scale = _ref3.scale,
      scale = _ref3$scale === void 0 ? 1 : _ref3$scale;
  var asciify = null;

  try {
    asciify = __webpack_require__(4);
  } catch (error) {}

  if (asciify) {
    return function () {
      return asciify(image, {
        fit: 'box',
        width: "".concat(Math.round(80 * scale), "%")
      }).then(function (data) {
        return console.log(data);
      });
    };
  }

  return noop;
}

function logImageInBrowser(_ref4) {
  var image = _ref4.image,
      _ref4$message = _ref4.message,
      message = _ref4$message === void 0 ? '' : _ref4$message,
      _ref4$scale = _ref4.scale,
      scale = _ref4$scale === void 0 ? 1 : _ref4$scale;

  if (typeof image === 'string') {
    var img = new Image();

    img.onload = function () {
      var _console;

      var args = Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__[/* formatImage */ "a"])(img, message, scale);

      (_console = console).log.apply(_console, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(args));
    };

    img.src = image;
    return noop;
  }

  var element = image.nodeName || '';

  if (element.toLowerCase() === 'img') {
    var _console2;

    (_console2 = console).log.apply(_console2, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__[/* formatImage */ "a"])(image, message, scale)));

    return noop;
  }

  if (element.toLowerCase() === 'canvas') {
    var _img = new Image();

    _img.onload = function () {
      var _console3;

      return (_console3 = console).log.apply(_console3, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_utils_formatters__WEBPACK_IMPORTED_MODULE_7__[/* formatImage */ "a"])(_img, message, scale)));
    };

    _img.src = image.toDataURL();
    return noop;
  }

  return noop;
}

/***/ }),

/***/ "egY1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHiResTimestamp; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("W1BH");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K9nA");

function getHiResTimestamp() {
  var timestamp;

  if (_globals__WEBPACK_IMPORTED_MODULE_0__[/* isBrowser */ "b"] && _globals__WEBPACK_IMPORTED_MODULE_1__[/* window */ "f"].performance) {
    timestamp = _globals__WEBPACK_IMPORTED_MODULE_1__[/* window */ "f"].performance.now();
  } else if (_globals__WEBPACK_IMPORTED_MODULE_1__[/* process */ "d"].hrtime) {
    var timeParts = _globals__WEBPACK_IMPORTED_MODULE_1__[/* process */ "d"].hrtime();
    timestamp = timeParts[0] * 1000 + timeParts[1] / 1e6;
  } else {
    timestamp = Date.now();
  }

  return timestamp;
}

/***/ }),

/***/ "laie":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ stats_Stats; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ stat_Stat; });

// UNUSED EXPORTS: _getHiResTimestamp

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("1OyB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./node_modules/@probe.gl/stats/dist/esm/utils/hi-res-timestamp.js
var hi_res_timestamp = __webpack_require__("GawU");

// CONCATENATED MODULE: ./node_modules/@probe.gl/stats/dist/esm/lib/stat.js




var stat_Stat = function () {
  function Stat(name, type) {
    Object(classCallCheck["a" /* default */])(this, Stat);

    this.name = name;
    this.type = type;
    this.sampleSize = 1;
    this.reset();
  }

  Object(createClass["a" /* default */])(Stat, [{
    key: "setSampleSize",
    value: function setSampleSize(samples) {
      this.sampleSize = samples;
      return this;
    }
  }, {
    key: "incrementCount",
    value: function incrementCount() {
      this.addCount(1);
      return this;
    }
  }, {
    key: "decrementCount",
    value: function decrementCount() {
      this.subtractCount(1);
      return this;
    }
  }, {
    key: "addCount",
    value: function addCount(value) {
      this._count += value;
      this._samples++;

      this._checkSampling();

      return this;
    }
  }, {
    key: "subtractCount",
    value: function subtractCount(value) {
      this._count -= value;
      this._samples++;

      this._checkSampling();

      return this;
    }
  }, {
    key: "addTime",
    value: function addTime(time) {
      this._time += time;
      this.lastTiming = time;
      this._samples++;

      this._checkSampling();

      return this;
    }
  }, {
    key: "timeStart",
    value: function timeStart() {
      this._startTime = Object(hi_res_timestamp["a" /* default */])();
      this._timerPending = true;
      return this;
    }
  }, {
    key: "timeEnd",
    value: function timeEnd() {
      if (!this._timerPending) {
        return this;
      }

      this.addTime(Object(hi_res_timestamp["a" /* default */])() - this._startTime);
      this._timerPending = false;

      this._checkSampling();

      return this;
    }
  }, {
    key: "getSampleAverageCount",
    value: function getSampleAverageCount() {
      return this.sampleSize > 0 ? this.lastSampleCount / this.sampleSize : 0;
    }
  }, {
    key: "getSampleAverageTime",
    value: function getSampleAverageTime() {
      return this.sampleSize > 0 ? this.lastSampleTime / this.sampleSize : 0;
    }
  }, {
    key: "getSampleHz",
    value: function getSampleHz() {
      return this.lastSampleTime > 0 ? this.sampleSize / (this.lastSampleTime / 1000) : 0;
    }
  }, {
    key: "getAverageCount",
    value: function getAverageCount() {
      return this.samples > 0 ? this.count / this.samples : 0;
    }
  }, {
    key: "getAverageTime",
    value: function getAverageTime() {
      return this.samples > 0 ? this.time / this.samples : 0;
    }
  }, {
    key: "getHz",
    value: function getHz() {
      return this.time > 0 ? this.samples / (this.time / 1000) : 0;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.time = 0;
      this.count = 0;
      this.samples = 0;
      this.lastTiming = 0;
      this.lastSampleTime = 0;
      this.lastSampleCount = 0;
      this._count = 0;
      this._time = 0;
      this._samples = 0;
      this._startTime = 0;
      this._timerPending = false;
      return this;
    }
  }, {
    key: "_checkSampling",
    value: function _checkSampling() {
      if (this._samples === this.sampleSize) {
        this.lastSampleTime = this._time;
        this.lastSampleCount = this._count;
        this.count += this._count;
        this.time += this._time;
        this.samples += this._samples;
        this._time = 0;
        this._count = 0;
        this._samples = 0;
      }
    }
  }]);

  return Stat;
}();


// CONCATENATED MODULE: ./node_modules/@probe.gl/stats/dist/esm/lib/stats.js




var stats_Stats = function () {
  function Stats(_ref) {
    var id = _ref.id,
        stats = _ref.stats;

    Object(classCallCheck["a" /* default */])(this, Stats);

    this.id = id;
    this.stats = {};

    this._initializeStats(stats);

    Object.seal(this);
  }

  Object(createClass["a" /* default */])(Stats, [{
    key: "get",
    value: function get(name) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'count';
      return this._getOrCreate({
        name: name,
        type: type
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var key in this.stats) {
        this.stats[key].reset();
      }

      return this;
    }
  }, {
    key: "forEach",
    value: function forEach(fn) {
      for (var key in this.stats) {
        fn(this.stats[key]);
      }
    }
  }, {
    key: "getTable",
    value: function getTable() {
      var table = {};
      this.forEach(function (stat) {
        table[stat.name] = {
          time: stat.time || 0,
          count: stat.count || 0,
          average: stat.getAverageTime() || 0,
          hz: stat.getHz() || 0
        };
      });
      return table;
    }
  }, {
    key: "_initializeStats",
    value: function _initializeStats() {
      var _this = this;

      var stats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      stats.forEach(function (stat) {
        return _this._getOrCreate(stat);
      });
    }
  }, {
    key: "_getOrCreate",
    value: function _getOrCreate(stat) {
      if (!stat || !stat.name) {
        return null;
      }

      var name = stat.name,
          type = stat.type;

      if (!this.stats[name]) {
        if (stat instanceof stat_Stat) {
          this.stats[name] = stat;
        } else {
          this.stats[name] = new stat_Stat(name, type);
        }
      }

      return this.stats[name];
    }
  }, {
    key: "size",
    get: function get() {
      return Object.keys(this.stats).length;
    }
  }]);

  return Stats;
}();


// CONCATENATED MODULE: ./node_modules/@probe.gl/stats/dist/esm/index.js




/***/ }),

/***/ "qlHW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assert; });
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

/***/ }),

/***/ "rePB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vuIU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "ygbw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return leftPad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return rightPad; });
/* unused harmony export formatValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatImage; });
function formatTime(ms) {
  var formatted;

  if (ms < 10) {
    formatted = "".concat(ms.toFixed(2), "ms");
  } else if (ms < 100) {
    formatted = "".concat(ms.toFixed(1), "ms");
  } else if (ms < 1000) {
    formatted = "".concat(ms.toFixed(0), "ms");
  } else {
    formatted = "".concat((ms / 1000).toFixed(2), "s");
  }

  return formatted;
}
function leftPad(string) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var padLength = Math.max(length - string.length, 0);
  return "".concat(' '.repeat(padLength)).concat(string);
}
function rightPad(string) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var padLength = Math.max(length - string.length, 0);
  return "".concat(string).concat(' '.repeat(padLength));
}
function formatValue(v) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var EPSILON = 1e-16;
  var _opts$isInteger = opts.isInteger,
      isInteger = _opts$isInteger === void 0 ? false : _opts$isInteger;

  if (Array.isArray(v) || ArrayBuffer.isView(v)) {
    return formatArrayValue(v, opts);
  }

  if (!Number.isFinite(v)) {
    return String(v);
  }

  if (Math.abs(v) < EPSILON) {
    return isInteger ? '0' : '0.';
  }

  if (isInteger) {
    return v.toFixed(0);
  }

  if (Math.abs(v) > 100 && Math.abs(v) < 10000) {
    return v.toFixed(0);
  }

  var string = v.toPrecision(2);
  var decimal = string.indexOf('.0');
  return decimal === string.length - 2 ? string.slice(0, -1) : string;
}

function formatArrayValue(v, opts) {
  var _opts$maxElts = opts.maxElts,
      maxElts = _opts$maxElts === void 0 ? 16 : _opts$maxElts,
      _opts$size = opts.size,
      size = _opts$size === void 0 ? 1 : _opts$size;
  var string = '[';

  for (var i = 0; i < v.length && i < maxElts; ++i) {
    if (i > 0) {
      string += ",".concat(i % size === 0 ? ' ' : '');
    }

    string += formatValue(v[i], opts);
  }

  var terminator = v.length > maxElts ? '...' : ']';
  return "".concat(string).concat(terminator);
}

function formatImage(image, message, scale) {
  var maxWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 600;
  var imageUrl = image.src.replace(/\(/g, '%28').replace(/\)/g, '%29');

  if (image.width > maxWidth) {
    scale = Math.min(scale, maxWidth / image.width);
  }

  var width = image.width * scale;
  var height = image.height * scale;
  var style = ['font-size:1px;', "padding:".concat(Math.floor(height / 2), "px ").concat(Math.floor(width / 2), "px;"), "line-height:".concat(height, "px;"), "background:url(".concat(imageUrl, ");"), "background-size:".concat(width, "px ").concat(height, "px;"), 'color:transparent;'].join('');
  return ["".concat(message, " %c+"), style];
}

/***/ }),

/***/ "zLVn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ })

}]);
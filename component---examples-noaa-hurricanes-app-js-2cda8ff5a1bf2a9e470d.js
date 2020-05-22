(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "2lZV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return window_; });
/* unused harmony export global */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return document_; });
var window_ = typeof window !== 'undefined' ? window : global;
var global_ = typeof global !== 'undefined' ? global : window;
var document_ = typeof document !== 'undefined' ? document : {};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "3nLz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__("t+fG")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "6pOq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export getAccessToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mapbox; });
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R48M");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("E5k/");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sPse");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ll4R");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QDMQ");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ls4f");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FqMR");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2lZV");










function noop() {}

function defaultOnError(event) {
  if (event) {
    console.error(event.error);
  }
}

var propTypes = {
  container: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  gl: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  mapboxApiAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  mapboxApiUrl: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  attributionControl: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  preserveDrawingBuffer: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  reuseMaps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  transformRequest: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  mapOptions: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  mapStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object]),
  visible: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  asyncRender: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onError: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  width: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  viewState: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  longitude: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  latitude: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  zoom: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  bearing: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  pitch: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  altitude: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number
};
var defaultProps = {
  container: _utils_globals__WEBPACK_IMPORTED_MODULE_8__[/* document */ "a"].body,
  mapboxApiAccessToken: getAccessToken(),
  mapboxApiUrl: 'https://api.mapbox.com',
  preserveDrawingBuffer: false,
  attributionControl: true,
  reuseMaps: false,
  mapOptions: {},
  mapStyle: 'mapbox://styles/mapbox/light-v8',
  visible: true,
  asyncRender: false,
  onLoad: noop,
  onError: defaultOnError,
  width: 0,
  height: 0,
  longitude: 0,
  latitude: 0,
  zoom: 0,
  bearing: 0,
  pitch: 0,
  altitude: 1.5
};
function getAccessToken() {
  var accessToken = null;

  if (typeof window !== 'undefined' && window.location) {
    var match = window.location.search.match(/access_token=([^&\/]*)/);
    accessToken = match && match[1];
  }

  if (!accessToken && typeof process !== 'undefined') {
    accessToken = accessToken || "pk.eyJ1Ijoia3lsZWJhcnJvbiIsImEiOiJjazJieGNtd2MwNmRrM25sY3BsdXVwaGhiIn0.CUixqH36Knh0ra_TaG5aug" || {}.REACT_APP_MAPBOX_ACCESS_TOKEN;
  }

  return accessToken || 'no-token';
}

function checkPropTypes(props) {
  var component = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'component';

  if (props.debug) {
    prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.checkPropTypes(propTypes, props, 'prop', component);
  }
}

var Mapbox = function () {
  function Mapbox(props) {
    var _this = this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, Mapbox);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, "mapboxgl", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, "props", defaultProps);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, "_map", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, "width", 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, "height", 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, "_fireLoadEvent", function () {
      _this.props.onLoad({
        type: 'load',
        target: _this._map
      });
    });

    if (!props.mapboxgl) {
      throw new Error('Mapbox not available');
    }

    this.mapboxgl = props.mapboxgl;

    if (!Mapbox.initialized) {
      Mapbox.initialized = true;

      this._checkStyleSheet(this.mapboxgl.version);
    }

    this._initialize(props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Mapbox, [{
    key: "finalize",
    value: function finalize() {
      this._destroy();

      return this;
    }
  }, {
    key: "setProps",
    value: function setProps(props) {
      this._update(this.props, props);

      return this;
    }
  }, {
    key: "resize",
    value: function resize() {
      this._map.resize();

      return this;
    }
  }, {
    key: "redraw",
    value: function redraw() {
      var map = this._map;

      if (map.style) {
        if (map._frame) {
          map._frame.cancel();

          map._frame = null;
        }

        map._render();
      }
    }
  }, {
    key: "getMap",
    value: function getMap() {
      return this._map;
    }
  }, {
    key: "_reuse",
    value: function _reuse(props) {
      this._map = Mapbox.savedMap;

      var oldContainer = this._map.getContainer();

      var newContainer = props.container;
      newContainer.classList.add('mapboxgl-map');

      while (oldContainer.childNodes.length > 0) {
        newContainer.appendChild(oldContainer.childNodes[0]);
      }

      this._map._container = newContainer;
      Mapbox.savedMap = null;

      if (props.mapStyle) {
        this._map.setStyle(props.mapStyle, {
          diff: false
        });
      }

      if (this._map.isStyleLoaded()) {
        this._fireLoadEvent();
      } else {
        this._map.once('styledata', this._fireLoadEvent);
      }
    }
  }, {
    key: "_create",
    value: function _create(props) {
      if (props.reuseMaps && Mapbox.savedMap) {
        this._reuse(props);
      } else {
        if (props.gl) {
          var getContext = HTMLCanvasElement.prototype.getContext;

          HTMLCanvasElement.prototype.getContext = function () {
            HTMLCanvasElement.prototype.getContext = getContext;
            return props.gl;
          };
        }

        var mapOptions = {
          container: props.container,
          center: [0, 0],
          zoom: 8,
          pitch: 0,
          bearing: 0,
          maxZoom: 24,
          style: props.mapStyle,
          interactive: false,
          trackResize: false,
          attributionControl: props.attributionControl,
          preserveDrawingBuffer: props.preserveDrawingBuffer
        };

        if (props.transformRequest) {
          mapOptions.transformRequest = props.transformRequest;
        }

        this._map = new this.mapboxgl.Map(Object.assign({}, mapOptions, props.mapOptions));

        this._map.once('load', props.onLoad);

        this._map.on('error', props.onError);
      }

      return this;
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      if (!this._map) {
        return;
      }

      if (!Mapbox.savedMap) {
        Mapbox.savedMap = this._map;

        this._map.off('load', this.props.onLoad);

        this._map.off('error', this.props.onError);

        this._map.off('styledata', this._fireLoadEvent);
      } else {
        this._map.remove();
      }

      this._map = null;
    }
  }, {
    key: "_initialize",
    value: function _initialize(props) {
      var _this2 = this;

      props = Object.assign({}, defaultProps, props);
      checkPropTypes(props, 'Mapbox');
      this.mapboxgl.accessToken = props.mapboxApiAccessToken || defaultProps.mapboxApiAccessToken;
      this.mapboxgl.baseApiUrl = props.mapboxApiUrl;

      this._create(props);

      var _props = props,
          container = _props.container;
      Object.defineProperty(container, 'offsetWidth', {
        get: function get() {
          return _this2.width;
        }
      });
      Object.defineProperty(container, 'clientWidth', {
        get: function get() {
          return _this2.width;
        }
      });
      Object.defineProperty(container, 'offsetHeight', {
        get: function get() {
          return _this2.height;
        }
      });
      Object.defineProperty(container, 'clientHeight', {
        get: function get() {
          return _this2.height;
        }
      });

      var canvas = this._map.getCanvas();

      if (canvas) {
        canvas.style.outline = 'none';
      }

      this._updateMapViewport({}, props);

      this._updateMapSize({}, props);

      this.props = props;
    }
  }, {
    key: "_update",
    value: function _update(oldProps, newProps) {
      if (!this._map) {
        return;
      }

      newProps = Object.assign({}, this.props, newProps);
      checkPropTypes(newProps, 'Mapbox');

      var viewportChanged = this._updateMapViewport(oldProps, newProps);

      var sizeChanged = this._updateMapSize(oldProps, newProps);

      if (!newProps.asyncRender && (viewportChanged || sizeChanged)) {
        this.redraw();
      }

      this.props = newProps;
    }
  }, {
    key: "_updateMapSize",
    value: function _updateMapSize(oldProps, newProps) {
      var sizeChanged = oldProps.width !== newProps.width || oldProps.height !== newProps.height;

      if (sizeChanged) {
        this.width = newProps.width;
        this.height = newProps.height;
        this.resize();
      }

      return sizeChanged;
    }
  }, {
    key: "_updateMapViewport",
    value: function _updateMapViewport(oldProps, newProps) {
      var oldViewState = this._getViewState(oldProps);

      var newViewState = this._getViewState(newProps);

      var viewportChanged = newViewState.latitude !== oldViewState.latitude || newViewState.longitude !== oldViewState.longitude || newViewState.zoom !== oldViewState.zoom || newViewState.pitch !== oldViewState.pitch || newViewState.bearing !== oldViewState.bearing || newViewState.altitude !== oldViewState.altitude;

      if (viewportChanged) {
        this._map.jumpTo(this._viewStateToMapboxProps(newViewState));

        if (newViewState.altitude !== oldViewState.altitude) {
          this._map.transform.altitude = newViewState.altitude;
        }
      }

      return viewportChanged;
    }
  }, {
    key: "_getViewState",
    value: function _getViewState(props) {
      var _ref = props.viewState || props,
          longitude = _ref.longitude,
          latitude = _ref.latitude,
          zoom = _ref.zoom,
          _ref$pitch = _ref.pitch,
          pitch = _ref$pitch === void 0 ? 0 : _ref$pitch,
          _ref$bearing = _ref.bearing,
          bearing = _ref$bearing === void 0 ? 0 : _ref$bearing,
          _ref$altitude = _ref.altitude,
          altitude = _ref$altitude === void 0 ? 1.5 : _ref$altitude;

      return {
        longitude: longitude,
        latitude: latitude,
        zoom: zoom,
        pitch: pitch,
        bearing: bearing,
        altitude: altitude
      };
    }
  }, {
    key: "_checkStyleSheet",
    value: function _checkStyleSheet() {
      var mapboxVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.47.0';

      if (typeof _utils_globals__WEBPACK_IMPORTED_MODULE_8__[/* document */ "a"] === 'undefined') {
        return;
      }

      try {
        var testElement = _utils_globals__WEBPACK_IMPORTED_MODULE_8__[/* document */ "a"].createElement('div');
        testElement.className = 'mapboxgl-map';
        testElement.style.display = 'none';
        _utils_globals__WEBPACK_IMPORTED_MODULE_8__[/* document */ "a"].body.append(testElement);
        var isCssLoaded = window.getComputedStyle(testElement).position !== 'static';

        if (!isCssLoaded) {
          var link = _utils_globals__WEBPACK_IMPORTED_MODULE_8__[/* document */ "a"].createElement('link');
          link.setAttribute('rel', 'stylesheet');
          link.setAttribute('type', 'text/css');
          link.setAttribute('href', "https://api.tiles.mapbox.com/mapbox-gl-js/v".concat(mapboxVersion, "/mapbox-gl.css"));
          _utils_globals__WEBPACK_IMPORTED_MODULE_8__[/* document */ "a"].head.append(link);
        }
      } catch (error) {}
    }
  }, {
    key: "_viewStateToMapboxProps",
    value: function _viewStateToMapboxProps(viewState) {
      return {
        center: [viewState.longitude, viewState.latitude],
        zoom: viewState.zoom,
        bearing: viewState.bearing,
        pitch: viewState.pitch
      };
    }
  }]);

  return Mapbox;
}();

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Mapbox, "initialized", false);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Mapbox, "propTypes", propTypes);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Mapbox, "defaultProps", defaultProps);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Mapbox, "savedMap", null);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "8BNJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ app_App; });
__webpack_require__.d(__webpack_exports__, "renderToDOM", function() { return /* binding */ renderToDOM; });

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("6kNP");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("8npG");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("kD0k");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("zGcK");

// EXTERNAL MODULE: ../node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("wcNg");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");

// EXTERNAL MODULE: ./node_modules/@deck.gl/react/dist/esm/deckgl.js + 55 modules
var deckgl = __webpack_require__("yYqN");

// EXTERNAL MODULE: ../modules/earthengine-layers/src/index.js + 49 modules
var src = __webpack_require__("NGNH");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.function.bind.js
var es6_function_bind = __webpack_require__("n7j8");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("JHok");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("OeI1");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("E5k/");

// CONCATENATED MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("QDMQ");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("L6So");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("Ccfo");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("uRdJ");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("ls4f");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__("x364");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("FqMR");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.number.is-finite.js
var es6_number_is_finite = __webpack_require__("9ZhD");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("YBKJ");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("R48M");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.define-properties.js
var es6_object_define_properties = __webpack_require__("+ar0");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("xtjI");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("4DPX");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("rzGZ");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("Dq+y");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("Ggvi");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("AqHK");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("m210");

// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/style-utils.js














function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        Object(defineProperty["a" /* default */])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var refProps = ['type', 'source', 'source-layer', 'minzoom', 'maxzoom', 'filter', 'layout'];
function normalizeStyle(style) {
  if (!style) {
    return null;
  }

  if (typeof style === 'string') {
    return style;
  }

  if (style.toJS) {
    style = style.toJS();
  }

  var layerIndex = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = style.layers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var layer = _step.value;
      layerIndex[layer.id] = layer;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var layers = style.layers.map(function (layer) {
    var layerRef = layerIndex[layer.ref];
    var normalizedLayer = null;

    if ('interactive' in layer) {
      normalizedLayer = _objectSpread({}, layer);
      delete normalizedLayer.interactive;
    }

    if (layerRef) {
      normalizedLayer = normalizedLayer || _objectSpread({}, layer);
      delete normalizedLayer.ref;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = refProps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var propName = _step2.value;

          if (propName in layerRef) {
            normalizedLayer[propName] = layerRef[propName];
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }

    return normalizedLayer || layer;
  });
  return _objectSpread({}, style, {
    layers: layers
  });
}
// EXTERNAL MODULE: ./node_modules/@math.gl/web-mercator/dist/esm/index.js + 8 modules
var esm = __webpack_require__("v88f");

// CONCATENATED MODULE: ./node_modules/viewport-mercator-project/module.js


// EXTERNAL MODULE: ./node_modules/react-virtualized-auto-sizer/dist/index.esm.js
var index_esm = __webpack_require__("jYz7");

// EXTERNAL MODULE: ./node_modules/react-map-gl/dist/esm/mapbox/mapbox.js
var mapbox = __webpack_require__("6pOq");

// EXTERNAL MODULE: ./node_modules/mapbox-gl/dist/mapbox-gl.js
var mapbox_gl = __webpack_require__("4ZJM");
var mapbox_gl_default = /*#__PURE__*/__webpack_require__.n(mapbox_gl);

// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/mapboxgl.browser.js

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.math.log2.js
var es6_math_log2 = __webpack_require__("QNMc");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("8j0Q");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__("MIFh");

// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/math-utils.js


var EPSILON = 1e-7;

function isArray(value) {
  return Array.isArray(value) || ArrayBuffer.isView(value);
}

function equals(a, b) {
  if (a === b) {
    return true;
  }

  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length; ++i) {
      if (!equals(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  return Math.abs(a - b) <= EPSILON;
}
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function lerp(a, b, t) {
  if (isArray(a)) {
    return a.map(function (ai, i) {
      return lerp(ai, b[i], t);
    });
  }

  return t * b + (1 - t) * a;
}
// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/assert.js
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'react-map-gl: assertion failed.');
  }
}
// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/transition/transition-interpolator.js









var transition_interpolator_TransitionInterpolator = function () {
  function TransitionInterpolator() {
    Object(classCallCheck["a" /* default */])(this, TransitionInterpolator);

    Object(defineProperty["a" /* default */])(this, "propNames", []);
  }

  Object(createClass["a" /* default */])(TransitionInterpolator, [{
    key: "arePropsEqual",
    value: function arePropsEqual(currentProps, nextProps) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (this.propNames || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          if (!equals(currentProps[key], nextProps[key])) {
            return false;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return true;
    }
  }, {
    key: "initializeProps",
    value: function initializeProps(startProps, endProps) {
      return {
        start: startProps,
        end: endProps
      };
    }
  }, {
    key: "interpolateProps",
    value: function interpolateProps(startProps, endProps, t) {
      assert(false, 'interpolateProps is not implemented');
    }
  }, {
    key: "getDuration",
    value: function getDuration(startProps, endProps) {
      return endProps.transitionDuration;
    }
  }]);

  return TransitionInterpolator;
}();


// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/transition/transition-utils.js



var WRAPPED_ANGULAR_PROPS = {
  longitude: 1,
  bearing: 1
};
function mod(value, divisor) {
  var modulus = value % divisor;
  return modulus < 0 ? divisor + modulus : modulus;
}
function isValid(prop) {
  return Number.isFinite(prop) || Array.isArray(prop);
}

function isWrappedAngularProp(propName) {
  return propName in WRAPPED_ANGULAR_PROPS;
}

function getEndValueByShortestPath(propName, startValue, endValue) {
  if (isWrappedAngularProp(propName) && Math.abs(endValue - startValue) > 180) {
    endValue = endValue < 0 ? endValue + 360 : endValue - 360;
  }

  return endValue;
}
// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/transition/viewport-fly-to-interpolator.js
















var VIEWPORT_TRANSITION_PROPS = ['longitude', 'latitude', 'zoom', 'bearing', 'pitch'];
var REQUIRED_PROPS = ['latitude', 'longitude', 'zoom', 'width', 'height'];
var LINEARLY_INTERPOLATED_PROPS = ['bearing', 'pitch'];
var DEFAULT_OPTS = {
  speed: 1.2,
  curve: 1.414
};

var viewport_fly_to_interpolator_ViewportFlyToInterpolator = function (_TransitionInterpolat) {
  Object(inherits["a" /* default */])(ViewportFlyToInterpolator, _TransitionInterpolat);

  function ViewportFlyToInterpolator() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(classCallCheck["a" /* default */])(this, ViewportFlyToInterpolator);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ViewportFlyToInterpolator).call(this));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "speed", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "propNames", VIEWPORT_TRANSITION_PROPS);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "props", void 0);

    _this.props = Object.assign({}, DEFAULT_OPTS, props);
    return _this;
  }

  Object(createClass["a" /* default */])(ViewportFlyToInterpolator, [{
    key: "initializeProps",
    value: function initializeProps(startProps, endProps) {
      var startViewportProps = {};
      var endViewportProps = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = REQUIRED_PROPS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;
          var startValue = startProps[key];
          var endValue = endProps[key];
          assert(isValid(startValue) && isValid(endValue), "".concat(key, " must be supplied for transition"));
          startViewportProps[key] = startValue;
          endViewportProps[key] = getEndValueByShortestPath(key, startValue, endValue);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = LINEARLY_INTERPOLATED_PROPS[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _key = _step2.value;

          var _startValue = startProps[_key] || 0;

          var _endValue = endProps[_key] || 0;

          startViewportProps[_key] = _startValue;
          endViewportProps[_key] = getEndValueByShortestPath(_key, _startValue, _endValue);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return {
        start: startViewportProps,
        end: endViewportProps
      };
    }
  }, {
    key: "interpolateProps",
    value: function interpolateProps(startProps, endProps, t) {
      var viewport = Object(esm["e" /* flyToViewport */])(startProps, endProps, t, this.props);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = LINEARLY_INTERPOLATED_PROPS[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var key = _step3.value;
          viewport[key] = lerp(startProps[key], endProps[key], t);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return viewport;
    }
  }, {
    key: "getDuration",
    value: function getDuration(startProps, endProps) {
      var transitionDuration = endProps.transitionDuration;

      if (transitionDuration === 'auto') {
        transitionDuration = Object(esm["g" /* getFlyToDuration */])(startProps, endProps, this.props);
      }

      return transitionDuration;
    }
  }]);

  return ViewportFlyToInterpolator;
}(transition_interpolator_TransitionInterpolator);


// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/transition/linear-interpolator.js


















var linear_interpolator_VIEWPORT_TRANSITION_PROPS = ['longitude', 'latitude', 'zoom', 'bearing', 'pitch'];

var linear_interpolator_LinearInterpolator = function (_TransitionInterpolat) {
  Object(inherits["a" /* default */])(LinearInterpolator, _TransitionInterpolat);

  function LinearInterpolator() {
    var _this;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(classCallCheck["a" /* default */])(this, LinearInterpolator);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(LinearInterpolator).call(this));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "around", void 0);

    if (Array.isArray(opts)) {
      opts = {
        transitionProps: opts
      };
    }

    _this.propNames = opts.transitionProps || linear_interpolator_VIEWPORT_TRANSITION_PROPS;

    if (opts.around) {
      _this.around = opts.around;
    }

    return _this;
  }

  Object(createClass["a" /* default */])(LinearInterpolator, [{
    key: "initializeProps",
    value: function initializeProps(startProps, endProps) {
      var startViewportProps = {};
      var endViewportProps = {};

      if (this.around) {
        startViewportProps.around = this.around;
        var aroundLngLat = new esm["a" /* WebMercatorViewport */](startProps).unproject(this.around);
        Object.assign(endViewportProps, endProps, {
          around: new esm["a" /* WebMercatorViewport */](endProps).project(aroundLngLat),
          aroundLngLat: aroundLngLat
        });
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.propNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;
          var startValue = startProps[key];
          var endValue = endProps[key];
          assert(isValid(startValue) && isValid(endValue), "".concat(key, " must be supplied for transition"));
          startViewportProps[key] = startValue;
          endViewportProps[key] = getEndValueByShortestPath(key, startValue, endValue);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return {
        start: startViewportProps,
        end: endViewportProps
      };
    }
  }, {
    key: "interpolateProps",
    value: function interpolateProps(startProps, endProps, t) {
      var viewport = {};
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.propNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;
          viewport[key] = lerp(startProps[key], endProps[key], t);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (endProps.around) {
        var _getMapCenterByLngLat = new esm["a" /* WebMercatorViewport */](Object.assign({}, endProps, viewport)).getMapCenterByLngLatPosition({
          lngLat: endProps.aroundLngLat,
          pos: lerp(startProps.around, endProps.around, t)
        }),
            _getMapCenterByLngLat2 = Object(slicedToArray["a" /* default */])(_getMapCenterByLngLat, 2),
            longitude = _getMapCenterByLngLat2[0],
            latitude = _getMapCenterByLngLat2[1];

        viewport.longitude = longitude;
        viewport.latitude = latitude;
      }

      return viewport;
    }
  }]);

  return LinearInterpolator;
}(transition_interpolator_TransitionInterpolator);


// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/transition/index.js



// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/map-state.js












var MAPBOX_LIMITS = {
  minZoom: 0,
  maxZoom: 24,
  minPitch: 0,
  maxPitch: 60
};
var DEFAULT_STATE = {
  pitch: 0,
  bearing: 0,
  altitude: 1.5
};

var map_state_MapState = function () {
  function MapState(_ref) {
    var width = _ref.width,
        height = _ref.height,
        latitude = _ref.latitude,
        longitude = _ref.longitude,
        zoom = _ref.zoom,
        _ref$bearing = _ref.bearing,
        bearing = _ref$bearing === void 0 ? DEFAULT_STATE.bearing : _ref$bearing,
        _ref$pitch = _ref.pitch,
        pitch = _ref$pitch === void 0 ? DEFAULT_STATE.pitch : _ref$pitch,
        _ref$altitude = _ref.altitude,
        altitude = _ref$altitude === void 0 ? DEFAULT_STATE.altitude : _ref$altitude,
        _ref$maxZoom = _ref.maxZoom,
        maxZoom = _ref$maxZoom === void 0 ? MAPBOX_LIMITS.maxZoom : _ref$maxZoom,
        _ref$minZoom = _ref.minZoom,
        minZoom = _ref$minZoom === void 0 ? MAPBOX_LIMITS.minZoom : _ref$minZoom,
        _ref$maxPitch = _ref.maxPitch,
        maxPitch = _ref$maxPitch === void 0 ? MAPBOX_LIMITS.maxPitch : _ref$maxPitch,
        _ref$minPitch = _ref.minPitch,
        minPitch = _ref$minPitch === void 0 ? MAPBOX_LIMITS.minPitch : _ref$minPitch,
        transitionDuration = _ref.transitionDuration,
        transitionEasing = _ref.transitionEasing,
        transitionInterpolator = _ref.transitionInterpolator,
        transitionInterruption = _ref.transitionInterruption,
        startPanLngLat = _ref.startPanLngLat,
        startZoomLngLat = _ref.startZoomLngLat,
        startBearing = _ref.startBearing,
        startPitch = _ref.startPitch,
        startZoom = _ref.startZoom;

    Object(classCallCheck["a" /* default */])(this, MapState);

    Object(defineProperty["a" /* default */])(this, "_viewportProps", void 0);

    Object(defineProperty["a" /* default */])(this, "_interactiveState", void 0);

    assert(Number.isFinite(width), '`width` must be supplied');
    assert(Number.isFinite(height), '`height` must be supplied');
    assert(Number.isFinite(longitude), '`longitude` must be supplied');
    assert(Number.isFinite(latitude), '`latitude` must be supplied');
    assert(Number.isFinite(zoom), '`zoom` must be supplied');
    this._viewportProps = this._applyConstraints({
      width: width,
      height: height,
      latitude: latitude,
      longitude: longitude,
      zoom: zoom,
      bearing: bearing,
      pitch: pitch,
      altitude: altitude,
      maxZoom: maxZoom,
      minZoom: minZoom,
      maxPitch: maxPitch,
      minPitch: minPitch,
      transitionDuration: transitionDuration,
      transitionEasing: transitionEasing,
      transitionInterpolator: transitionInterpolator,
      transitionInterruption: transitionInterruption
    });
    this._interactiveState = {
      startPanLngLat: startPanLngLat,
      startZoomLngLat: startZoomLngLat,
      startBearing: startBearing,
      startPitch: startPitch,
      startZoom: startZoom
    };
  }

  Object(createClass["a" /* default */])(MapState, [{
    key: "getViewportProps",
    value: function getViewportProps() {
      return this._viewportProps;
    }
  }, {
    key: "getInteractiveState",
    value: function getInteractiveState() {
      return this._interactiveState;
    }
  }, {
    key: "panStart",
    value: function panStart(_ref2) {
      var pos = _ref2.pos;
      return this._getUpdatedMapState({
        startPanLngLat: this._unproject(pos)
      });
    }
  }, {
    key: "pan",
    value: function pan(_ref3) {
      var pos = _ref3.pos,
          startPos = _ref3.startPos;

      var startPanLngLat = this._interactiveState.startPanLngLat || this._unproject(startPos);

      if (!startPanLngLat) {
        return this;
      }

      var _this$_calculateNewLn = this._calculateNewLngLat({
        startPanLngLat: startPanLngLat,
        pos: pos
      }),
          _this$_calculateNewLn2 = Object(slicedToArray["a" /* default */])(_this$_calculateNewLn, 2),
          longitude = _this$_calculateNewLn2[0],
          latitude = _this$_calculateNewLn2[1];

      return this._getUpdatedMapState({
        longitude: longitude,
        latitude: latitude
      });
    }
  }, {
    key: "panEnd",
    value: function panEnd() {
      return this._getUpdatedMapState({
        startPanLngLat: null
      });
    }
  }, {
    key: "rotateStart",
    value: function rotateStart(_ref4) {
      var pos = _ref4.pos;
      return this._getUpdatedMapState({
        startBearing: this._viewportProps.bearing,
        startPitch: this._viewportProps.pitch
      });
    }
  }, {
    key: "rotate",
    value: function rotate(_ref5) {
      var _ref5$deltaScaleX = _ref5.deltaScaleX,
          deltaScaleX = _ref5$deltaScaleX === void 0 ? 0 : _ref5$deltaScaleX,
          _ref5$deltaScaleY = _ref5.deltaScaleY,
          deltaScaleY = _ref5$deltaScaleY === void 0 ? 0 : _ref5$deltaScaleY;
      var _this$_interactiveSta = this._interactiveState,
          startBearing = _this$_interactiveSta.startBearing,
          startPitch = _this$_interactiveSta.startPitch;

      if (!Number.isFinite(startBearing) || !Number.isFinite(startPitch)) {
        return this;
      }

      var _this$_calculateNewPi = this._calculateNewPitchAndBearing({
        deltaScaleX: deltaScaleX,
        deltaScaleY: deltaScaleY,
        startBearing: startBearing || 0,
        startPitch: startPitch || 0
      }),
          pitch = _this$_calculateNewPi.pitch,
          bearing = _this$_calculateNewPi.bearing;

      return this._getUpdatedMapState({
        bearing: bearing,
        pitch: pitch
      });
    }
  }, {
    key: "rotateEnd",
    value: function rotateEnd() {
      return this._getUpdatedMapState({
        startBearing: null,
        startPitch: null
      });
    }
  }, {
    key: "zoomStart",
    value: function zoomStart(_ref6) {
      var pos = _ref6.pos;
      return this._getUpdatedMapState({
        startZoomLngLat: this._unproject(pos),
        startZoom: this._viewportProps.zoom
      });
    }
  }, {
    key: "zoom",
    value: function zoom(_ref7) {
      var pos = _ref7.pos,
          startPos = _ref7.startPos,
          scale = _ref7.scale;
      assert(scale > 0, '`scale` must be a positive number');
      var _this$_interactiveSta2 = this._interactiveState,
          startZoom = _this$_interactiveSta2.startZoom,
          startZoomLngLat = _this$_interactiveSta2.startZoomLngLat;

      if (!Number.isFinite(startZoom)) {
        startZoom = this._viewportProps.zoom;
        startZoomLngLat = this._unproject(startPos) || this._unproject(pos);
      }

      assert(startZoomLngLat, '`startZoomLngLat` prop is required ' + 'for zoom behavior to calculate where to position the map.');

      var zoom = this._calculateNewZoom({
        scale: scale,
        startZoom: startZoom || 0
      });

      var zoomedViewport = new esm["a" /* WebMercatorViewport */](Object.assign({}, this._viewportProps, {
        zoom: zoom
      }));

      var _zoomedViewport$getMa = zoomedViewport.getMapCenterByLngLatPosition({
        lngLat: startZoomLngLat,
        pos: pos
      }),
          _zoomedViewport$getMa2 = Object(slicedToArray["a" /* default */])(_zoomedViewport$getMa, 2),
          longitude = _zoomedViewport$getMa2[0],
          latitude = _zoomedViewport$getMa2[1];

      return this._getUpdatedMapState({
        zoom: zoom,
        longitude: longitude,
        latitude: latitude
      });
    }
  }, {
    key: "zoomEnd",
    value: function zoomEnd() {
      return this._getUpdatedMapState({
        startZoomLngLat: null,
        startZoom: null
      });
    }
  }, {
    key: "_getUpdatedMapState",
    value: function _getUpdatedMapState(newProps) {
      return new MapState(Object.assign({}, this._viewportProps, this._interactiveState, newProps));
    }
  }, {
    key: "_applyConstraints",
    value: function _applyConstraints(props) {
      var maxZoom = props.maxZoom,
          minZoom = props.minZoom,
          zoom = props.zoom;
      props.zoom = clamp(zoom, minZoom, maxZoom);
      var maxPitch = props.maxPitch,
          minPitch = props.minPitch,
          pitch = props.pitch;
      props.pitch = clamp(pitch, minPitch, maxPitch);
      Object.assign(props, Object(esm["l" /* normalizeViewportProps */])(props));
      return props;
    }
  }, {
    key: "_unproject",
    value: function _unproject(pos) {
      var viewport = new esm["a" /* WebMercatorViewport */](this._viewportProps);
      return pos && viewport.unproject(pos);
    }
  }, {
    key: "_calculateNewLngLat",
    value: function _calculateNewLngLat(_ref8) {
      var startPanLngLat = _ref8.startPanLngLat,
          pos = _ref8.pos;
      var viewport = new esm["a" /* WebMercatorViewport */](this._viewportProps);
      return viewport.getMapCenterByLngLatPosition({
        lngLat: startPanLngLat,
        pos: pos
      });
    }
  }, {
    key: "_calculateNewZoom",
    value: function _calculateNewZoom(_ref9) {
      var scale = _ref9.scale,
          startZoom = _ref9.startZoom;
      var _this$_viewportProps = this._viewportProps,
          maxZoom = _this$_viewportProps.maxZoom,
          minZoom = _this$_viewportProps.minZoom;
      var zoom = startZoom + Math.log2(scale);
      return clamp(zoom, minZoom, maxZoom);
    }
  }, {
    key: "_calculateNewPitchAndBearing",
    value: function _calculateNewPitchAndBearing(_ref10) {
      var deltaScaleX = _ref10.deltaScaleX,
          deltaScaleY = _ref10.deltaScaleY,
          startBearing = _ref10.startBearing,
          startPitch = _ref10.startPitch;
      deltaScaleY = clamp(deltaScaleY, -1, 1);
      var _this$_viewportProps2 = this._viewportProps,
          minPitch = _this$_viewportProps2.minPitch,
          maxPitch = _this$_viewportProps2.maxPitch;
      var bearing = startBearing + 180 * deltaScaleX;
      var pitch = startPitch;

      if (deltaScaleY > 0) {
        pitch = startPitch + deltaScaleY * (maxPitch - startPitch);
      } else if (deltaScaleY < 0) {
        pitch = startPitch - deltaScaleY * (minPitch - startPitch);
      }

      return {
        pitch: pitch,
        bearing: bearing
      };
    }
  }]);

  return MapState;
}();


// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/map-constraints.js


function decapitalize(s) {
  return s[0].toLowerCase() + s.slice(1);
}

function checkVisibilityConstraints(props) {
  var constraints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAPBOX_LIMITS;

  for (var constraintName in constraints) {
    var type = constraintName.slice(0, 3);
    var propName = decapitalize(constraintName.slice(3));

    if (type === 'min' && props[propName] < constraints[constraintName]) {
      return false;
    }

    if (type === 'max' && props[propName] > constraints[constraintName]) {
      return false;
    }
  }

  return true;
}
// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/components/map-context.js

/* harmony default export */ var map_context = (Object(react["createContext"])({
  viewport: null,
  map: null,
  mapContainer: null,
  onViewportChange: null,
  onViewStateChange: null,
  eventManager: null,
  isDragging: false
}));
// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/components/static-map.js






















function static_map_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function static_map_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      static_map_ownKeys(source, true).forEach(function (key) {
        Object(defineProperty["a" /* default */])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      static_map_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}












var TOKEN_DOC_URL = 'https://uber.github.io/react-map-gl/docs/get-started/mapbox-tokens';
var NO_TOKEN_WARNING = 'A valid API access token is required to use Mapbox data';

function noop() {}

var UNAUTHORIZED_ERROR_CODE = 401;
var CONTAINER_STYLE = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  overflow: 'hidden'
};
var propTypes = Object.assign({}, mapbox["a" /* default */].propTypes, {
  width: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),
  height: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),
  onResize: prop_types_default.a.func,
  preventStyleDiffing: prop_types_default.a.bool,
  disableTokenWarning: prop_types_default.a.bool,
  visible: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  style: prop_types_default.a.object,
  visibilityConstraints: prop_types_default.a.object
});
var defaultProps = Object.assign({}, mapbox["a" /* default */].defaultProps, {
  preventStyleDiffing: false,
  disableTokenWarning: false,
  visible: true,
  onResize: noop,
  className: '',
  style: null,
  visibilityConstraints: MAPBOX_LIMITS
});

var static_map_StaticMap = function (_PureComponent) {
  Object(inherits["a" /* default */])(StaticMap, _PureComponent);

  function StaticMap() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, StaticMap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(StaticMap)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      accessTokenInvalid: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_mapbox", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_map", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_mapboxMapRef", Object(react["createRef"])());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_mapContainerRef", Object(react["createRef"])());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_queryParams", {});

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_width", 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_height", 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getMap", function () {
      return _this._map;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "queryRenderedFeatures", function (geometry) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _this._map.queryRenderedFeatures(geometry, options);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_mapboxMapError", function (evt) {
      var statusCode = evt.error && evt.error.status || evt.status;

      if (statusCode === UNAUTHORIZED_ERROR_CODE && !_this.state.accessTokenInvalid) {
        console.error(NO_TOKEN_WARNING);

        _this.setState({
          accessTokenInvalid: true
        });
      }

      _this.props.onError(evt);
    });

    return _this;
  }

  Object(createClass["a" /* default */])(StaticMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!StaticMap.supported()) {
        return;
      }

      var mapStyle = this.props.mapStyle;
      this._mapbox = new mapbox["a" /* default */](Object.assign({}, this.props, {
        mapboxgl: mapbox_gl_default.a,
        width: this._width,
        height: this._height,
        container: this._mapboxMapRef.current,
        onError: this._mapboxMapError,
        mapStyle: normalizeStyle(mapStyle)
      }));
      this._map = this._mapbox.getMap();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this._mapbox) {
        this._updateMapStyle(prevProps, this.props);

        this._updateMapProps(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._mapbox) {
        this._mapbox.finalize();

        this._mapbox = null;
        this._map = null;
      }
    }
  }, {
    key: "_updateMapSize",
    value: function _updateMapSize(width, height) {
      if (this._width !== width || this._height !== height) {
        this._width = width;
        this._height = height;

        this._updateMapProps(this.props);
      }
    }
  }, {
    key: "_updateMapStyle",
    value: function _updateMapStyle(oldProps, newProps) {
      var mapStyle = newProps.mapStyle;
      var oldMapStyle = oldProps.mapStyle;

      if (mapStyle !== oldMapStyle && mapStyle) {
        this._map.setStyle(normalizeStyle(mapStyle), {
          diff: !this.props.preventStyleDiffing
        });
      }
    }
  }, {
    key: "_updateMapProps",
    value: function _updateMapProps(props) {
      if (!this._mapbox) {
        return;
      }

      this._mapbox.setProps(Object.assign({}, props, {
        width: this._width,
        height: this._height
      }));
    }
  }, {
    key: "_renderNoTokenWarning",
    value: function _renderNoTokenWarning() {
      if (this.state.accessTokenInvalid && !this.props.disableTokenWarning) {
        var style = {
          position: 'absolute',
          left: 0,
          top: 0
        };
        return react["createElement"]("div", {
          key: "warning",
          id: "no-token-warning",
          style: style
        }, react["createElement"]("h3", {
          key: "header"
        }, "NO_TOKEN_WARNING"), react["createElement"]("div", {
          key: "text"
        }, "For information on setting up your basemap, read"), react["createElement"]("a", {
          key: "link",
          href: TOKEN_DOC_URL
        }, "Note on Map Tokens"));
      }

      return null;
    }
  }, {
    key: "_renderOverlays",
    value: function _renderOverlays(dimensions) {
      var _this2 = this;

      var _dimensions$width = dimensions.width,
          width = _dimensions$width === void 0 ? Number(this.props.width) : _dimensions$width,
          _dimensions$height = dimensions.height,
          height = _dimensions$height === void 0 ? Number(this.props.height) : _dimensions$height;

      this._updateMapSize(width, height);

      return react["createElement"](map_context.Consumer, null, function (interactiveContext) {
        var context = static_map_objectSpread({}, interactiveContext, {
          viewport: new esm["a" /* WebMercatorViewport */](static_map_objectSpread({}, _this2.props, {}, _this2.props.viewState, {
            width: width,
            height: height
          })),
          map: _this2._map,
          mapContainer: interactiveContext.mapContainer || _this2._mapContainerRef.current
        });

        return react["createElement"](map_context.Provider, {
          value: context
        }, react["createElement"]("div", {
          key: "map-overlays",
          className: "overlays",
          style: CONTAINER_STYLE
        }, _this2.props.children));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          width = _this$props.width,
          height = _this$props.height,
          style = _this$props.style,
          visibilityConstraints = _this$props.visibilityConstraints;
      var mapContainerStyle = Object.assign({
        position: 'relative'
      }, style, {
        width: width,
        height: height
      });
      var visible = this.props.visible && checkVisibilityConstraints(this.props.viewState || this.props, visibilityConstraints);
      var mapStyle = Object.assign({}, CONTAINER_STYLE, {
        visibility: visible ? 'inherit' : 'hidden'
      });
      return react["createElement"]("div", {
        key: "map-container",
        style: mapContainerStyle,
        ref: this._mapContainerRef
      }, react["createElement"]("div", {
        key: "map-mapbox",
        ref: this._mapboxMapRef,
        style: mapStyle,
        className: className
      }), react["createElement"](index_esm["a" /* default */], {
        key: "autosizer",
        disableWidth: Number.isFinite(width),
        disableHeight: Number.isFinite(height),
        onResize: this.props.onResize
      }, this._renderOverlays.bind(this)), this._renderNoTokenWarning());
    }
  }], [{
    key: "supported",
    value: function supported() {
      return mapbox_gl_default.a && mapbox_gl_default.a.supported();
    }
  }]);

  return StaticMap;
}(react["PureComponent"]);

Object(defineProperty["a" /* default */])(static_map_StaticMap, "propTypes", propTypes);

Object(defineProperty["a" /* default */])(static_map_StaticMap, "defaultProps", defaultProps);


// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.date.now.js
var es6_date_now = __webpack_require__("1dPr");

// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/transition-manager.js









var transition_manager_noop = function noop() {};

function cropEasingFunction(easing, x0) {
  var y0 = easing(x0);
  return function (t) {
    return 1 / (1 - y0) * (easing(t * (1 - x0) + x0) - y0);
  };
}
var TRANSITION_EVENTS = {
  BREAK: 1,
  SNAP_TO_END: 2,
  IGNORE: 3,
  UPDATE: 4
};
var DEFAULT_PROPS = {
  transitionDuration: 0,
  transitionEasing: function transitionEasing(t) {
    return t;
  },
  transitionInterpolator: new linear_interpolator_LinearInterpolator(),
  transitionInterruption: TRANSITION_EVENTS.BREAK,
  onTransitionStart: transition_manager_noop,
  onTransitionInterrupt: transition_manager_noop,
  onTransitionEnd: transition_manager_noop,
  onViewportChange: transition_manager_noop,
  onStateChange: transition_manager_noop
};

var transition_manager_TransitionManager = function () {
  function TransitionManager(props, getTime) {
    var _this = this;

    Object(classCallCheck["a" /* default */])(this, TransitionManager);

    Object(defineProperty["a" /* default */])(this, "props", void 0);

    Object(defineProperty["a" /* default */])(this, "state", void 0);

    Object(defineProperty["a" /* default */])(this, "time", void 0);

    Object(defineProperty["a" /* default */])(this, "_animationFrame", null);

    Object(defineProperty["a" /* default */])(this, "_onTransitionFrame", function () {
      _this._animationFrame = requestAnimationFrame(_this._onTransitionFrame);

      _this._updateViewport();
    });

    if (props) {
      this.props = props;
    }

    this.time = getTime || Date.now;
  }

  Object(createClass["a" /* default */])(TransitionManager, [{
    key: "getViewportInTransition",
    value: function getViewportInTransition() {
      return this._animationFrame ? this.state.propsInTransition : null;
    }
  }, {
    key: "processViewportChange",
    value: function processViewportChange(nextProps) {
      var currentProps = this.props;
      this.props = nextProps;

      if (this._shouldIgnoreViewportChange(currentProps, nextProps)) {
        return false;
      }

      if (this._isTransitionEnabled(nextProps)) {
        var startProps = Object.assign({}, currentProps);
        var endProps = Object.assign({}, nextProps);

        if (this._isTransitionInProgress()) {
          currentProps.onTransitionInterrupt();

          if (this.state.interruption === TRANSITION_EVENTS.SNAP_TO_END) {
            Object.assign(startProps, this.state.endProps);
          } else {
            Object.assign(startProps, this.state.propsInTransition);
          }

          if (this.state.interruption === TRANSITION_EVENTS.UPDATE) {
            var currentTime = this.time();
            var x0 = (currentTime - this.state.startTime) / this.state.duration;
            endProps.transitionDuration = this.state.duration - (currentTime - this.state.startTime);
            endProps.transitionEasing = cropEasingFunction(this.state.easing, x0);
            endProps.transitionInterpolator = startProps.transitionInterpolator;
          }
        }

        endProps.onTransitionStart();

        this._triggerTransition(startProps, endProps);

        return true;
      }

      if (this._isTransitionInProgress()) {
        currentProps.onTransitionInterrupt();

        this._endTransition();
      }

      return false;
    }
  }, {
    key: "_isTransitionInProgress",
    value: function _isTransitionInProgress() {
      return Boolean(this._animationFrame);
    }
  }, {
    key: "_isTransitionEnabled",
    value: function _isTransitionEnabled(props) {
      var transitionDuration = props.transitionDuration,
          transitionInterpolator = props.transitionInterpolator;
      return (transitionDuration > 0 || transitionDuration === 'auto') && Boolean(transitionInterpolator);
    }
  }, {
    key: "_isUpdateDueToCurrentTransition",
    value: function _isUpdateDueToCurrentTransition(props) {
      if (this.state.propsInTransition) {
        return this.state.interpolator.arePropsEqual(props, this.state.propsInTransition);
      }

      return false;
    }
  }, {
    key: "_shouldIgnoreViewportChange",
    value: function _shouldIgnoreViewportChange(currentProps, nextProps) {
      if (!currentProps) {
        return true;
      }

      if (this._isTransitionInProgress()) {
        return this.state.interruption === TRANSITION_EVENTS.IGNORE || this._isUpdateDueToCurrentTransition(nextProps);
      }

      if (this._isTransitionEnabled(nextProps)) {
        return nextProps.transitionInterpolator.arePropsEqual(currentProps, nextProps);
      }

      return true;
    }
  }, {
    key: "_triggerTransition",
    value: function _triggerTransition(startProps, endProps) {
      assert(this._isTransitionEnabled(endProps));

      if (this._animationFrame) {
        cancelAnimationFrame(this._animationFrame);
      }

      var transitionInterpolator = endProps.transitionInterpolator;
      var duration = transitionInterpolator.getDuration ? transitionInterpolator.getDuration(startProps, endProps) : endProps.transitionDuration;

      if (duration === 0) {
        return;
      }

      var initialProps = endProps.transitionInterpolator.initializeProps(startProps, endProps);
      var interactionState = {
        inTransition: true,
        isZooming: startProps.zoom !== endProps.zoom,
        isPanning: startProps.longitude !== endProps.longitude || startProps.latitude !== endProps.latitude,
        isRotating: startProps.bearing !== endProps.bearing || startProps.pitch !== endProps.pitch
      };
      this.state = {
        duration: duration,
        easing: endProps.transitionEasing,
        interpolator: endProps.transitionInterpolator,
        interruption: endProps.transitionInterruption,
        startTime: this.time(),
        startProps: initialProps.start,
        endProps: initialProps.end,
        animation: null,
        propsInTransition: {},
        interactionState: interactionState
      };

      this._onTransitionFrame();

      this.props.onStateChange(interactionState);
    }
  }, {
    key: "_endTransition",
    value: function _endTransition() {
      if (this._animationFrame) {
        cancelAnimationFrame(this._animationFrame);
        this._animationFrame = null;
      }

      this.props.onStateChange({
        inTransition: false,
        isZooming: false,
        isPanning: false,
        isRotating: false
      });
    }
  }, {
    key: "_updateViewport",
    value: function _updateViewport() {
      var currentTime = this.time();
      var _this$state = this.state,
          startTime = _this$state.startTime,
          duration = _this$state.duration,
          easing = _this$state.easing,
          interpolator = _this$state.interpolator,
          startProps = _this$state.startProps,
          endProps = _this$state.endProps;
      var shouldEnd = false;
      var t = (currentTime - startTime) / duration;

      if (t >= 1) {
        t = 1;
        shouldEnd = true;
      }

      t = easing(t);
      var viewport = interpolator.interpolateProps(startProps, endProps, t);
      var mapState = new map_state_MapState(Object.assign({}, this.props, viewport));
      this.state.propsInTransition = mapState.getViewportProps();
      this.props.onViewportChange(this.state.propsInTransition, this.state.interactionState, this.props);

      if (shouldEnd) {
        this._endTransition();

        this.props.onTransitionEnd();
      }
    }
  }]);

  return TransitionManager;
}();

Object(defineProperty["a" /* default */])(transition_manager_TransitionManager, "defaultProps", DEFAULT_PROPS);


// EXTERNAL MODULE: ./node_modules/mjolnir.js/dist/esm/index.js + 10 modules
var dist_esm = __webpack_require__("ei+1");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.some.js
var es6_array_some = __webpack_require__("wZFJ");

// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/debounce.js
function debounce(func, delay) {
  var _this;

  var _arguments;

  var timeout;

  var executeNow = function executeNow() {
    timeout = null;
    return func.apply(_this, _arguments);
  };

  return function () {
    _this = this;
    _arguments = arguments;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(executeNow, delay);
  };
}
// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/map-controller.js
















var NO_TRANSITION_PROPS = {
  transitionDuration: 0
};
var LINEAR_TRANSITION_PROPS = {
  transitionDuration: 300,
  transitionEasing: function transitionEasing(t) {
    return t;
  },
  transitionInterpolator: new linear_interpolator_LinearInterpolator(),
  transitionInterruption: TRANSITION_EVENTS.BREAK
};
var PITCH_MOUSE_THRESHOLD = 5;
var PITCH_ACCEL = 1.2;
var ZOOM_ACCEL = 0.01;
var EVENT_TYPES = {
  WHEEL: ['wheel'],
  PAN: ['panstart', 'panmove', 'panend'],
  PINCH: ['pinchstart', 'pinchmove', 'pinchend', 'pinchcancel'],
  DOUBLE_TAP: ['doubletap'],
  KEYBOARD: ['keydown']
};

var map_controller_MapController = function () {
  function MapController() {
    var _this = this;

    Object(classCallCheck["a" /* default */])(this, MapController);

    Object(defineProperty["a" /* default */])(this, "events", []);

    Object(defineProperty["a" /* default */])(this, "mapState", void 0);

    Object(defineProperty["a" /* default */])(this, "onViewportChange", void 0);

    Object(defineProperty["a" /* default */])(this, "onStateChange", void 0);

    Object(defineProperty["a" /* default */])(this, "mapStateProps", void 0);

    Object(defineProperty["a" /* default */])(this, "eventManager", void 0);

    Object(defineProperty["a" /* default */])(this, "scrollZoom", true);

    Object(defineProperty["a" /* default */])(this, "dragPan", true);

    Object(defineProperty["a" /* default */])(this, "dragRotate", true);

    Object(defineProperty["a" /* default */])(this, "doubleClickZoom", true);

    Object(defineProperty["a" /* default */])(this, "touchZoom", true);

    Object(defineProperty["a" /* default */])(this, "touchRotate", false);

    Object(defineProperty["a" /* default */])(this, "keyboard", true);

    Object(defineProperty["a" /* default */])(this, "_state", {
      isDragging: false
    });

    Object(defineProperty["a" /* default */])(this, "_events", {});

    Object(defineProperty["a" /* default */])(this, "_transitionManager", new transition_manager_TransitionManager());

    Object(defineProperty["a" /* default */])(this, "setState", function (newState) {
      Object.assign(_this._state, newState);

      if (_this.onStateChange) {
        _this.onStateChange(_this._state);
      }
    });

    this.handleEvent = this.handleEvent.bind(this);
    this._onWheelEnd = debounce(this._onWheelEnd, 100);
  }

  Object(createClass["a" /* default */])(MapController, [{
    key: "handleEvent",
    value: function handleEvent(event) {
      this.mapState = this.getMapState();

      switch (event.type) {
        case 'panstart':
          return this._onPanStart(event);

        case 'panmove':
          return this._onPan(event);

        case 'panend':
          return this._onPanEnd(event);

        case 'pinchstart':
          return this._onPinchStart(event);

        case 'pinchmove':
          return this._onPinch(event);

        case 'pinchcancel':
        case 'pinchend':
          return this._onPinchEnd(event);

        case 'doubletap':
          return this._onDoubleTap(event);

        case 'wheel':
          return this._onWheel(event);

        case 'keydown':
          return this._onKeyDown(event);

        default:
          return false;
      }
    }
  }, {
    key: "getCenter",
    value: function getCenter(event) {
      var _event$offsetCenter = event.offsetCenter,
          x = _event$offsetCenter.x,
          y = _event$offsetCenter.y;
      return [x, y];
    }
  }, {
    key: "isFunctionKeyPressed",
    value: function isFunctionKeyPressed(event) {
      var srcEvent = event.srcEvent;
      return Boolean(srcEvent.metaKey || srcEvent.altKey || srcEvent.ctrlKey || srcEvent.shiftKey);
    }
  }, {
    key: "updateViewport",
    value: function updateViewport(newMapState) {
      var extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var extraState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var oldViewport = this.mapState ? this.mapState.getViewportProps() : {};
      var newViewport = Object.assign({}, newMapState.getViewportProps(), extraProps);
      var viewStateChanged = Object.keys(newViewport).some(function (key) {
        return oldViewport[key] !== newViewport[key];
      });

      if (viewStateChanged) {
        this.onViewportChange(newViewport, extraState, oldViewport);
      }

      this.setState(Object.assign({}, newMapState.getInteractiveState(), extraState));
    }
  }, {
    key: "getMapState",
    value: function getMapState(overrides) {
      return new map_state_MapState(Object.assign({}, this.mapStateProps, this._state, overrides));
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var onViewportChange = options.onViewportChange,
          onStateChange = options.onStateChange,
          _options$eventManager = options.eventManager,
          eventManager = _options$eventManager === void 0 ? this.eventManager : _options$eventManager,
          _options$isInteractiv = options.isInteractive,
          isInteractive = _options$isInteractiv === void 0 ? true : _options$isInteractiv,
          _options$scrollZoom = options.scrollZoom,
          scrollZoom = _options$scrollZoom === void 0 ? this.scrollZoom : _options$scrollZoom,
          _options$dragPan = options.dragPan,
          dragPan = _options$dragPan === void 0 ? this.dragPan : _options$dragPan,
          _options$dragRotate = options.dragRotate,
          dragRotate = _options$dragRotate === void 0 ? this.dragRotate : _options$dragRotate,
          _options$doubleClickZ = options.doubleClickZoom,
          doubleClickZoom = _options$doubleClickZ === void 0 ? this.doubleClickZoom : _options$doubleClickZ,
          _options$touchZoom = options.touchZoom,
          touchZoom = _options$touchZoom === void 0 ? this.touchZoom : _options$touchZoom,
          _options$touchRotate = options.touchRotate,
          touchRotate = _options$touchRotate === void 0 ? this.touchRotate : _options$touchRotate,
          _options$keyboard = options.keyboard,
          keyboard = _options$keyboard === void 0 ? this.keyboard : _options$keyboard;
      this.onViewportChange = onViewportChange;
      this.onStateChange = onStateChange;
      var dimensionChanged = !this.mapStateProps || this.mapStateProps.height !== options.height;
      this.mapStateProps = options;

      if (dimensionChanged) {
        this.updateViewport(new map_state_MapState(options));
      }

      this._transitionManager.processViewportChange(Object.assign({}, options, {
        onStateChange: this.setState
      }));

      if (this.eventManager !== eventManager) {
        this.eventManager = eventManager;
        this._events = {};
        this.toggleEvents(this.events, true);
      }

      this.toggleEvents(EVENT_TYPES.WHEEL, isInteractive && scrollZoom);
      this.toggleEvents(EVENT_TYPES.PAN, isInteractive && (dragPan || dragRotate));
      this.toggleEvents(EVENT_TYPES.PINCH, isInteractive && (touchZoom || touchRotate));
      this.toggleEvents(EVENT_TYPES.DOUBLE_TAP, isInteractive && doubleClickZoom);
      this.toggleEvents(EVENT_TYPES.KEYBOARD, isInteractive && keyboard);
      this.scrollZoom = scrollZoom;
      this.dragPan = dragPan;
      this.dragRotate = dragRotate;
      this.doubleClickZoom = doubleClickZoom;
      this.touchZoom = touchZoom;
      this.touchRotate = touchRotate;
      this.keyboard = keyboard;
    }
  }, {
    key: "toggleEvents",
    value: function toggleEvents(eventNames, enabled) {
      var _this2 = this;

      if (this.eventManager) {
        eventNames.forEach(function (eventName) {
          if (_this2._events[eventName] !== enabled) {
            _this2._events[eventName] = enabled;

            if (enabled) {
              _this2.eventManager.on(eventName, _this2.handleEvent);
            } else {
              _this2.eventManager.off(eventName, _this2.handleEvent);
            }
          }
        });
      }
    }
  }, {
    key: "_onPanStart",
    value: function _onPanStart(event) {
      var pos = this.getCenter(event);
      var newMapState = this.mapState.panStart({
        pos: pos
      }).rotateStart({
        pos: pos
      });
      this.updateViewport(newMapState, NO_TRANSITION_PROPS, {
        isDragging: true
      });
      return true;
    }
  }, {
    key: "_onPan",
    value: function _onPan(event) {
      return this.isFunctionKeyPressed(event) || event.rightButton ? this._onPanRotate(event) : this._onPanMove(event);
    }
  }, {
    key: "_onPanEnd",
    value: function _onPanEnd(event) {
      var newMapState = this.mapState.panEnd().rotateEnd();
      this.updateViewport(newMapState, null, {
        isDragging: false,
        isPanning: false,
        isRotating: false
      });
      return true;
    }
  }, {
    key: "_onPanMove",
    value: function _onPanMove(event) {
      if (!this.dragPan) {
        return false;
      }

      var pos = this.getCenter(event);
      var newMapState = this.mapState.pan({
        pos: pos
      });
      this.updateViewport(newMapState, NO_TRANSITION_PROPS, {
        isPanning: true
      });
      return true;
    }
  }, {
    key: "_onPanRotate",
    value: function _onPanRotate(event) {
      if (!this.dragRotate) {
        return false;
      }

      var deltaX = event.deltaX,
          deltaY = event.deltaY;

      var _this$getCenter = this.getCenter(event),
          _this$getCenter2 = Object(slicedToArray["a" /* default */])(_this$getCenter, 2),
          centerY = _this$getCenter2[1];

      var startY = centerY - deltaY;

      var _this$mapState$getVie = this.mapState.getViewportProps(),
          width = _this$mapState$getVie.width,
          height = _this$mapState$getVie.height;

      var deltaScaleX = deltaX / width;
      var deltaScaleY = 0;

      if (deltaY > 0) {
        if (Math.abs(height - startY) > PITCH_MOUSE_THRESHOLD) {
          deltaScaleY = deltaY / (startY - height) * PITCH_ACCEL;
        }
      } else if (deltaY < 0) {
        if (startY > PITCH_MOUSE_THRESHOLD) {
          deltaScaleY = 1 - centerY / startY;
        }
      }

      deltaScaleY = Math.min(1, Math.max(-1, deltaScaleY));
      var newMapState = this.mapState.rotate({
        deltaScaleX: deltaScaleX,
        deltaScaleY: deltaScaleY
      });
      this.updateViewport(newMapState, NO_TRANSITION_PROPS, {
        isRotating: true
      });
      return true;
    }
  }, {
    key: "_onWheel",
    value: function _onWheel(event) {
      if (!this.scrollZoom) {
        return false;
      }

      event.preventDefault();
      var pos = this.getCenter(event);
      var delta = event.delta;
      var scale = 2 / (1 + Math.exp(-Math.abs(delta * ZOOM_ACCEL)));

      if (delta < 0 && scale !== 0) {
        scale = 1 / scale;
      }

      var newMapState = this.mapState.zoom({
        pos: pos,
        scale: scale
      });
      this.updateViewport(newMapState, NO_TRANSITION_PROPS, {
        isZooming: true
      });

      this._onWheelEnd();

      return true;
    }
  }, {
    key: "_onWheelEnd",
    value: function _onWheelEnd() {
      this.setState({
        isZooming: false
      });
    }
  }, {
    key: "_onPinchStart",
    value: function _onPinchStart(event) {
      var pos = this.getCenter(event);
      var newMapState = this.mapState.zoomStart({
        pos: pos
      }).rotateStart({
        pos: pos
      });
      this._state.startPinchRotation = event.rotation;
      this.updateViewport(newMapState, NO_TRANSITION_PROPS, {
        isDragging: true
      });
      return true;
    }
  }, {
    key: "_onPinch",
    value: function _onPinch(event) {
      if (!this.touchZoom && !this.touchRotate) {
        return false;
      }

      var newMapState = this.mapState;

      if (this.touchZoom) {
        var scale = event.scale;
        var pos = this.getCenter(event);
        newMapState = newMapState.zoom({
          pos: pos,
          scale: scale
        });
      }

      if (this.touchRotate) {
        var rotation = event.rotation;
        var startPinchRotation = this._state.startPinchRotation;
        newMapState = newMapState.rotate({
          deltaScaleX: -(rotation - startPinchRotation) / 180
        });
      }

      this.updateViewport(newMapState, NO_TRANSITION_PROPS, {
        isDragging: true,
        isPanning: this.touchZoom,
        isZooming: this.touchZoom,
        isRotating: this.touchRotate
      });
      return true;
    }
  }, {
    key: "_onPinchEnd",
    value: function _onPinchEnd(event) {
      var newMapState = this.mapState.zoomEnd().rotateEnd();
      this._state.startPinchRotation = 0;
      this.updateViewport(newMapState, null, {
        isDragging: false,
        isPanning: false,
        isZooming: false,
        isRotating: false
      });
      return true;
    }
  }, {
    key: "_onDoubleTap",
    value: function _onDoubleTap(event) {
      if (!this.doubleClickZoom) {
        return false;
      }

      var pos = this.getCenter(event);
      var isZoomOut = this.isFunctionKeyPressed(event);
      var newMapState = this.mapState.zoom({
        pos: pos,
        scale: isZoomOut ? 0.5 : 2
      });
      this.updateViewport(newMapState, Object.assign({}, LINEAR_TRANSITION_PROPS, {
        transitionInterpolator: new linear_interpolator_LinearInterpolator({
          around: pos
        })
      }), {
        isZooming: true
      });
      return true;
    }
  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(event) {
      if (!this.keyboard) {
        return false;
      }

      var funcKey = this.isFunctionKeyPressed(event);
      var mapStateProps = this.mapStateProps;
      var newMapState;

      switch (event.srcEvent.keyCode) {
        case 189:
          if (funcKey) {
            newMapState = this.getMapState({
              zoom: mapStateProps.zoom - 2
            });
          } else {
            newMapState = this.getMapState({
              zoom: mapStateProps.zoom - 1
            });
          }

          break;

        case 187:
          if (funcKey) {
            newMapState = this.getMapState({
              zoom: mapStateProps.zoom + 2
            });
          } else {
            newMapState = this.getMapState({
              zoom: mapStateProps.zoom + 1
            });
          }

          break;

        case 37:
          if (funcKey) {
            newMapState = this.getMapState({
              bearing: mapStateProps.bearing - 15
            });
          } else {
            newMapState = this.mapState.pan({
              pos: [100, 0],
              startPos: [0, 0]
            });
          }

          break;

        case 39:
          if (funcKey) {
            newMapState = this.getMapState({
              bearing: mapStateProps.bearing + 15
            });
          } else {
            newMapState = this.mapState.pan({
              pos: [-100, 0],
              startPos: [0, 0]
            });
          }

          break;

        case 38:
          if (funcKey) {
            newMapState = this.getMapState({
              pitch: mapStateProps.pitch + 10
            });
          } else {
            newMapState = this.mapState.pan({
              pos: [0, 100],
              startPos: [0, 0]
            });
          }

          break;

        case 40:
          if (funcKey) {
            newMapState = this.getMapState({
              pitch: mapStateProps.pitch - 10
            });
          } else {
            newMapState = this.mapState.pan({
              pos: [0, -100],
              startPos: [0, 0]
            });
          }

          break;

        default:
          return false;
      }

      return this.updateViewport(newMapState, LINEAR_TRANSITION_PROPS);
    }
  }]);

  return MapController;
}();


// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/deprecate-warn.js

var DEPRECATED_PROPS = [{
  old: 'onChangeViewport',
  "new": 'onViewportChange'
}, {
  old: 'perspectiveEnabled',
  "new": 'dragRotate'
}, {
  old: 'onHoverFeatures',
  "new": 'onHover'
}, {
  old: 'onClickFeatures',
  "new": 'onClick'
}, {
  old: 'touchZoomRotate',
  "new": 'touchZoom, touchRotate'
}, {
  old: 'mapControls',
  "new": 'controller'
}];

function getDeprecatedText(name) {
  return "react-map-gl: `".concat(name, "` is removed.");
}

function getNewText(name) {
  return "Use `".concat(name, "` instead.");
}

function checkDeprecatedProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  DEPRECATED_PROPS.forEach(function (depProp) {
    if (props.hasOwnProperty(depProp.old)) {
      var warnMessage = getDeprecatedText(depProp.old);

      if (depProp["new"]) {
        warnMessage = "".concat(warnMessage, " ").concat(getNewText(depProp["new"]));
      }

      console.warn(warnMessage);
    }
  });
}
// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/components/interactive-map.js























var interactive_map_propTypes = Object.assign({}, static_map_StaticMap.propTypes, {
  maxZoom: prop_types_default.a.number,
  minZoom: prop_types_default.a.number,
  maxPitch: prop_types_default.a.number,
  minPitch: prop_types_default.a.number,
  onViewStateChange: prop_types_default.a.func,
  onViewportChange: prop_types_default.a.func,
  onInteractionStateChange: prop_types_default.a.func,
  transitionDuration: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]),
  transitionInterpolator: prop_types_default.a.object,
  transitionInterruption: prop_types_default.a.number,
  transitionEasing: prop_types_default.a.func,
  onTransitionStart: prop_types_default.a.func,
  onTransitionInterrupt: prop_types_default.a.func,
  onTransitionEnd: prop_types_default.a.func,
  scrollZoom: prop_types_default.a.bool,
  dragPan: prop_types_default.a.bool,
  dragRotate: prop_types_default.a.bool,
  doubleClickZoom: prop_types_default.a.bool,
  touchZoom: prop_types_default.a.bool,
  touchRotate: prop_types_default.a.bool,
  keyboard: prop_types_default.a.bool,
  onHover: prop_types_default.a.func,
  onClick: prop_types_default.a.func,
  onDblClick: prop_types_default.a.func,
  onContextMenu: prop_types_default.a.func,
  onMouseDown: prop_types_default.a.func,
  onMouseMove: prop_types_default.a.func,
  onMouseUp: prop_types_default.a.func,
  onTouchStart: prop_types_default.a.func,
  onTouchMove: prop_types_default.a.func,
  onTouchEnd: prop_types_default.a.func,
  onMouseEnter: prop_types_default.a.func,
  onMouseLeave: prop_types_default.a.func,
  onMouseOut: prop_types_default.a.func,
  onWheel: prop_types_default.a.func,
  touchAction: prop_types_default.a.string,
  clickRadius: prop_types_default.a.number,
  interactiveLayerIds: prop_types_default.a.array,
  getCursor: prop_types_default.a.func,
  controller: prop_types_default.a.instanceOf(map_controller_MapController)
});

var getDefaultCursor = function getDefaultCursor(_ref) {
  var isDragging = _ref.isDragging,
      isHovering = _ref.isHovering;
  return isDragging ? 'grabbing' : isHovering ? 'pointer' : 'grab';
};

var interactive_map_defaultProps = Object.assign({}, static_map_StaticMap.defaultProps, MAPBOX_LIMITS, transition_manager_TransitionManager.defaultProps, {
  onViewStateChange: null,
  onViewportChange: null,
  onClick: null,
  onNativeClick: null,
  onHover: null,
  onContextMenu: function onContextMenu(event) {
    return event.preventDefault();
  },
  scrollZoom: true,
  dragPan: true,
  dragRotate: true,
  doubleClickZoom: true,
  touchZoom: true,
  touchRotate: false,
  keyboard: true,
  touchAction: 'none',
  clickRadius: 0,
  getCursor: getDefaultCursor
});

var interactive_map_InteractiveMap = function (_PureComponent) {
  Object(inherits["a" /* default */])(InteractiveMap, _PureComponent);

  Object(createClass["a" /* default */])(InteractiveMap, null, [{
    key: "supported",
    value: function supported() {
      return static_map_StaticMap.supported();
    }
  }]);

  function InteractiveMap(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, InteractiveMap);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(InteractiveMap).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      isLoaded: false,
      isDragging: false,
      isHovering: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_controller", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_eventManager", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_interactiveContext", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_width", 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_height", 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_eventCanvasRef", Object(react["createRef"])());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_staticMapRef", Object(react["createRef"])());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getMap", function () {
      return _this._staticMapRef.current ? _this._staticMapRef.current.getMap() : null;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "queryRenderedFeatures", function (geometry) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var map = _this.getMap();

      return map && map.queryRenderedFeatures(geometry, options);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onInteractionStateChange", function (interactionState) {
      var _interactionState$isD = interactionState.isDragging,
          isDragging = _interactionState$isD === void 0 ? false : _interactionState$isD;

      if (isDragging !== _this.state.isDragging) {
        _this._updateInteractiveContext({
          isDragging: isDragging
        });

        _this.setState({
          isDragging: isDragging
        });
      }

      var onInteractionStateChange = _this.props.onInteractionStateChange;

      if (onInteractionStateChange) {
        onInteractionStateChange(interactionState);
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onResize", function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      _this._width = width;
      _this._height = height;

      _this._setControllerProps(_this.props);

      _this.props.onResize({
        width: width,
        height: height
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onViewportChange", function (viewState, interactionState, oldViewState) {
      var _this$props = _this.props,
          onViewStateChange = _this$props.onViewStateChange,
          onViewportChange = _this$props.onViewportChange;

      if (onViewStateChange) {
        onViewStateChange({
          viewState: viewState,
          interactionState: interactionState,
          oldViewState: oldViewState
        });
      }

      if (onViewportChange) {
        onViewportChange(viewState, interactionState, oldViewState);
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onLoad", function (event) {
      _this.setState({
        isLoaded: true
      });

      _this.props.onLoad(event);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onEvent", function (callbackName, event) {
      var func = _this.props[callbackName];

      if (func) {
        func(_this._normalizeEvent(event));
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onPointerDown", function (event) {
      switch (event.pointerType) {
        case 'touch':
          _this._onEvent('onTouchStart', event);

          break;

        default:
          _this._onEvent('onMouseDown', event);

      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onPointerUp", function (event) {
      switch (event.pointerType) {
        case 'touch':
          _this._onEvent('onTouchEnd', event);

          break;

        default:
          _this._onEvent('onMouseUp', event);

      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onPointerMove", function (event) {
      switch (event.pointerType) {
        case 'touch':
          _this._onEvent('onTouchMove', event);

          break;

        default:
          _this._onEvent('onMouseMove', event);

      }

      if (!_this.state.isDragging) {
        var _this$props2 = _this.props,
            onHover = _this$props2.onHover,
            interactiveLayerIds = _this$props2.interactiveLayerIds;
        var features;
        event = _this._normalizeEvent(event);

        if (_this.state.isLoaded && (interactiveLayerIds || onHover)) {
          features = _this._getFeatures({
            pos: event.point,
            radius: _this.props.clickRadius
          });
        }

        if (onHover) {
          event.features = features;
          onHover(event);
        }

        var isHovering = Boolean(interactiveLayerIds && features && features.length > 0);
        var isEntering = isHovering && !_this.state.isHovering;
        var isExiting = !isHovering && _this.state.isHovering;

        if (isEntering) {
          _this._onEvent('onMouseEnter', event);
        }

        if (isExiting) {
          _this._onEvent('onMouseLeave', event);
        }

        if (isEntering || isExiting) {
          _this.setState({
            isHovering: isHovering
          });
        }
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onClick", function (event) {
      var _this$props3 = _this.props,
          onClick = _this$props3.onClick,
          onNativeClick = _this$props3.onNativeClick,
          onDblClick = _this$props3.onDblClick,
          doubleClickZoom = _this$props3.doubleClickZoom;
      var callbacks = [];
      var isDoubleClickEnabled = onDblClick || doubleClickZoom;

      switch (event.type) {
        case 'anyclick':
          callbacks.push(onNativeClick);

          if (!isDoubleClickEnabled) {
            callbacks.push(onClick);
          }

          break;

        case 'click':
          if (isDoubleClickEnabled) {
            callbacks.push(onClick);
          }

          break;

        default:
      }

      callbacks = callbacks.filter(Boolean);

      if (callbacks.length) {
        event = _this._normalizeEvent(event);
        event.features = _this._getFeatures({
          pos: event.point,
          radius: _this.props.clickRadius
        });
        callbacks.forEach(function (cb) {
          return cb(event);
        });
      }
    });

    checkDeprecatedProps(props);
    _this._controller = props.controller || new map_controller_MapController();
    _this._eventManager = new dist_esm["a" /* EventManager */](null, {
      touchAction: props.touchAction
    });

    _this._updateInteractiveContext({
      isDragging: false,
      eventManager: _this._eventManager
    });

    return _this;
  }

  Object(createClass["a" /* default */])(InteractiveMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var eventManager = this._eventManager;
      var mapContainer = this._eventCanvasRef.current;
      eventManager.setElement(mapContainer);
      eventManager.on({
        pointerdown: this._onPointerDown,
        pointermove: this._onPointerMove,
        pointerup: this._onPointerUp,
        pointerleave: this._onEvent.bind(this, 'onMouseOut'),
        click: this._onClick,
        anyclick: this._onClick,
        dblclick: this._onEvent.bind(this, 'onDblClick'),
        wheel: this._onEvent.bind(this, 'onWheel'),
        contextmenu: this._onEvent.bind(this, 'onContextMenu')
      });

      this._setControllerProps(this.props);

      this._updateInteractiveContext({
        mapContainer: mapContainer
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._setControllerProps(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._eventManager.destroy();
    }
  }, {
    key: "_setControllerProps",
    value: function _setControllerProps(props) {
      props = Object.assign({}, props, props.viewState, {
        isInteractive: Boolean(props.onViewStateChange || props.onViewportChange),
        onViewportChange: this._onViewportChange,
        onStateChange: this._onInteractionStateChange,
        eventManager: this._eventManager,
        width: this._width,
        height: this._height
      });

      this._controller.setOptions(props);

      var context = this._interactiveContext;
      context.onViewportChange = props.onViewportChange;
      context.onViewStateChange = props.onViewStateChange;
    }
  }, {
    key: "_getFeatures",
    value: function _getFeatures(_ref3) {
      var pos = _ref3.pos,
          radius = _ref3.radius;
      var features;
      var queryParams = {};
      var map = this.getMap();

      if (this.props.interactiveLayerIds) {
        queryParams.layers = this.props.interactiveLayerIds;
      }

      if (radius) {
        var size = radius;
        var bbox = [[pos[0] - size, pos[1] + size], [pos[0] + size, pos[1] - size]];
        features = map && map.queryRenderedFeatures(bbox, queryParams);
      } else {
        features = map && map.queryRenderedFeatures(pos, queryParams);
      }

      return features;
    }
  }, {
    key: "_updateInteractiveContext",
    value: function _updateInteractiveContext(updatedContext) {
      this._interactiveContext = Object.assign({}, this._interactiveContext, updatedContext);
    }
  }, {
    key: "_normalizeEvent",
    value: function _normalizeEvent(event) {
      if (event.lngLat) {
        return event;
      }

      var _event$offsetCenter = event.offsetCenter,
          x = _event$offsetCenter.x,
          y = _event$offsetCenter.y;
      var pos = [x, y];
      var viewport = new esm["a" /* WebMercatorViewport */](Object.assign({}, this.props, {
        width: this._width,
        height: this._height
      }));
      event.point = pos;
      event.lngLat = viewport.unproject(pos);
      return event;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          width = _this$props4.width,
          height = _this$props4.height,
          style = _this$props4.style,
          getCursor = _this$props4.getCursor;
      var eventCanvasStyle = Object.assign({
        position: 'relative'
      }, style, {
        width: width,
        height: height,
        cursor: getCursor(this.state)
      });
      return react["createElement"](map_context.Provider, {
        value: this._interactiveContext
      }, react["createElement"]("div", {
        key: "event-canvas",
        ref: this._eventCanvasRef,
        style: eventCanvasStyle
      }, react["createElement"](static_map_StaticMap, _extends({}, this.props, {
        width: "100%",
        height: "100%",
        style: null,
        onResize: this._onResize,
        onLoad: this._onLoad,
        ref: this._staticMapRef
      }), this.props.children)));
    }
  }]);

  return InteractiveMap;
}(react["PureComponent"]);

Object(defineProperty["a" /* default */])(interactive_map_InteractiveMap, "propTypes", interactive_map_propTypes);

Object(defineProperty["a" /* default */])(interactive_map_InteractiveMap, "defaultProps", interactive_map_defaultProps);


// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("0QZy");

// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/deep-equal.js






function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) {
        return false;
      }
    }

    return true;
  } else if (Array.isArray(b)) {
    return false;
  }

  if (Object(esm_typeof["a" /* default */])(a) === 'object' && Object(esm_typeof["a" /* default */])(b) === 'object') {
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
      return false;
    }

    for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
      var key = _aKeys[_i];

      if (!b.hasOwnProperty(key)) {
        return false;
      }

      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/components/source.js















var source_propTypes = {
  type: prop_types_default.a.string.isRequired,
  id: prop_types_default.a.string
};
var sourceCounter = 0;

var source_Source = function (_PureComponent) {
  Object(inherits["a" /* default */])(Source, _PureComponent);

  function Source(_props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Source);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Source).call(this, _props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "id", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "type", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_map", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_sourceOptions", {});

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_updateSource", function () {
      var _assertThisInitialize = Object(assertThisInitialized["a" /* default */])(_this),
          type = _assertThisInitialize.type,
          map = _assertThisInitialize._map;

      if (!map) {
        return;
      }

      var _assertThisInitialize2 = Object(assertThisInitialized["a" /* default */])(_this),
          sourceOptions = _assertThisInitialize2._sourceOptions,
          props = _assertThisInitialize2.props;

      assert(!props.id || props.id === _this.id, 'source id changed');
      assert(props.type === type, 'source type changed');
      var changedKey = '';
      var changedKeyCount = 0;

      for (var key in props) {
        if (key !== 'children' && key !== 'id' && !deepEqual(sourceOptions[key], props[key])) {
          sourceOptions[key] = props[key];
          changedKey = key;
          changedKeyCount++;
        }
      }

      var source = _this.getSource();

      if (!source) {
        _this._createSource(sourceOptions);

        return;
      }

      if (!changedKeyCount) {
        return;
      }

      if (type === 'geojson') {
        source.setData(sourceOptions.data);
      } else if (type === 'image') {
        source.updateImage({
          url: sourceOptions.url,
          coordinates: sourceOptions.coordinates
        });
      } else if ((type === 'canvas' || type === 'video') && changedKeyCount === 1 && changedKey === 'coordinates') {
        source.setCoordinates(sourceOptions.coordinates);
      } else {
        console.warn("Unable to update <Source> prop: ".concat(changedKey));
      }
    });

    _this.id = _props.id || "jsx-source-".concat(sourceCounter++);
    _this.type = _props.type;
    return _this;
  }

  Object(createClass["a" /* default */])(Source, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      var map = this._map;

      if (map) {
        map.off('styledata', this._updateSource);

        if (map.style) {
          requestAnimationFrame(function () {
            return map.removeSource(_this2.id);
          });
        }
      }
    }
  }, {
    key: "getSource",
    value: function getSource() {
      var map = this._map;
      return map && map.style && map.getSource(this.id);
    }
  }, {
    key: "_createSource",
    value: function _createSource(sourceOptions) {
      var map = this._map;

      if (map.style && map.style._loaded) {
        map.addSource(this.id, sourceOptions);
      }
    }
  }, {
    key: "_render",
    value: function _render(context) {
      var _this3 = this;

      if (!this._map && context.map) {
        this._map = context.map;

        this._map.on('styledata', this._updateSource);
      }

      this._updateSource();

      return react["Children"].map(this.props.children, function (child) {
        return Object(react["cloneElement"])(child, {
          source: _this3.id
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](map_context.Consumer, null, this._render.bind(this));
    }
  }]);

  return Source;
}(react["PureComponent"]);

Object(defineProperty["a" /* default */])(source_Source, "propTypes", source_propTypes);


// CONCATENATED MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
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
// CONCATENATED MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/components/layer.js


















var layer_propTypes = {
  type: prop_types_default.a.string.isRequired,
  id: prop_types_default.a.string,
  source: prop_types_default.a.string,
  beforeId: prop_types_default.a.string
};

function diffLayerStyles(map, id, props, prevProps) {
  var _props$layout = props.layout,
      layout = _props$layout === void 0 ? {} : _props$layout,
      _props$paint = props.paint,
      paint = _props$paint === void 0 ? {} : _props$paint,
      filter = props.filter,
      minzoom = props.minzoom,
      maxzoom = props.maxzoom,
      beforeId = props.beforeId,
      otherProps = _objectWithoutProperties(props, ["layout", "paint", "filter", "minzoom", "maxzoom", "beforeId"]);

  if (beforeId !== prevProps.beforeId) {
    map.moveLayer(id, beforeId);
  }

  if (layout !== prevProps.layout) {
    for (var key in layout) {
      if (!deepEqual(layout[key], prevProps.layout[key])) {
        map.setLayoutProperty(id, key, layout[key]);
      }
    }
  }

  if (paint !== prevProps.paint) {
    for (var _key in paint) {
      if (!deepEqual(paint[_key], prevProps.paint[_key])) {
        map.setPaintProperty(id, _key, paint[_key]);
      }
    }
  }

  if (!deepEqual(filter, prevProps.filter)) {
    map.setFilter(id, filter);
  }

  if (minzoom !== prevProps.minzoom || maxzoom !== prevProps.maxzoom) {
    map.setLayerZoomRange(id, minzoom, maxzoom);
  }

  for (var _key2 in otherProps) {
    if (!deepEqual(otherProps[_key2], prevProps[_key2])) {
      map.setLayerProperty(id, _key2, otherProps[_key2]);
    }
  }
}

var layerCounter = 0;

var layer_Layer = function (_PureComponent) {
  Object(inherits["a" /* default */])(Layer, _PureComponent);

  function Layer(_props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Layer);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Layer).call(this, _props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "id", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "type", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_map", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_layerOptions", {});

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_updateLayer", function () {
      var map = _this._map;

      if (!map) {
        return;
      }

      var _assertThisInitialize = Object(assertThisInitialized["a" /* default */])(_this),
          props = _assertThisInitialize.props,
          layerOptions = _assertThisInitialize._layerOptions;

      assert(!props.id || props.id === _this.id, 'layer id changed');
      assert(props.type === _this.type, 'layer type changed');

      if (!_this.getLayer()) {
        _this._createLayer();

        return;
      }

      try {
        diffLayerStyles(map, _this.id, props, layerOptions);
        Object.assign(layerOptions, props);
      } catch (error) {
        console.warn(error);
      }
    });

    _this.id = _props.id || "jsx-layer-".concat(layerCounter++);
    _this.type = _props.type;
    return _this;
  }

  Object(createClass["a" /* default */])(Layer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._updateLayer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._updateLayer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var map = this._map;

      if (map) {
        map.off('styledata', this._updateLayer);

        if (map.style) {
          map.removeLayer(this.id);
        }
      }
    }
  }, {
    key: "getLayer",
    value: function getLayer() {
      var map = this._map;
      return map && map.style && map.getLayer(this.id);
    }
  }, {
    key: "_createLayer",
    value: function _createLayer() {
      var map = this._map;

      if (map.style && map.style._loaded) {
        var options = Object.assign({}, this.props);
        options.id = this.id;
        delete options.beforeId;
        map.addLayer(options, this.props.beforeId);
        this._layerOptions = options;
      }
    }
  }, {
    key: "_render",
    value: function _render(context) {
      if (!this._map && context.map) {
        this._map = context.map;

        this._map.on('styledata', this._updateLayer);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      return react["createElement"](map_context.Consumer, null, this._render.bind(this));
    }
  }]);

  return Layer;
}(react["PureComponent"]);

Object(defineProperty["a" /* default */])(layer_Layer, "propTypes", layer_propTypes);


// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/components/base-control.js











var base_control_propTypes = {
  captureScroll: prop_types_default.a.bool,
  captureDrag: prop_types_default.a.bool,
  captureClick: prop_types_default.a.bool,
  captureDoubleClick: prop_types_default.a.bool
};
var base_control_defaultProps = {
  captureScroll: false,
  captureDrag: true,
  captureClick: true,
  captureDoubleClick: true
};

var base_control_BaseControl = function (_PureComponent) {
  Object(inherits["a" /* default */])(BaseControl, _PureComponent);

  function BaseControl() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, BaseControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(BaseControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_context", {});

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_events", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_containerRef", Object(react["createRef"])());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onScroll", function (evt) {
      if (_this.props.captureScroll) {
        evt.stopPropagation();
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onDragStart", function (evt) {
      if (_this.props.captureDrag) {
        evt.stopPropagation();
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onDblClick", function (evt) {
      if (_this.props.captureDoubleClick) {
        evt.stopPropagation();
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onClick", function (evt) {
      if (_this.props.captureClick) {
        evt.stopPropagation();
      }
    });

    return _this;
  }

  Object(createClass["a" /* default */])(BaseControl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var ref = this._containerRef.current;

      if (!ref) {
        return;
      }

      var eventManager = this._context.eventManager;

      if (eventManager) {
        this._events = {
          wheel: this._onScroll,
          panstart: this._onDragStart,
          anyclick: this._onClick,
          click: this._onClick,
          dblclick: this._onDblClick
        };
        eventManager.watch(this._events, ref);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var eventManager = this._context.eventManager;

      if (eventManager && this._events) {
        eventManager.off(this._events);
      }
    }
  }, {
    key: "_render",
    value: function _render() {
      throw new Error('_render() not implemented');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react["createElement"](map_context.Consumer, null, function (context) {
        _this2._context = context;
        return _this2._render();
      });
    }
  }]);

  return BaseControl;
}(react["PureComponent"]);

Object(defineProperty["a" /* default */])(base_control_BaseControl, "propTypes", base_control_propTypes);

Object(defineProperty["a" /* default */])(base_control_BaseControl, "defaultProps", base_control_defaultProps);


// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__("zs32");

// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/components/draggable-control.js












var draggable_control_propTypes = Object.assign({}, base_control_BaseControl.propTypes, {
  draggable: prop_types_default.a.bool,
  onDrag: prop_types_default.a.func,
  onDragEnd: prop_types_default.a.func,
  onDragStart: prop_types_default.a.func,
  offsetLeft: prop_types_default.a.number,
  offsetTop: prop_types_default.a.number
});
var draggable_control_defaultProps = Object.assign({}, base_control_BaseControl.defaultProps, {
  draggable: false,
  offsetLeft: 0,
  offsetTop: 0
});

var draggable_control_DraggableControl = function (_BaseControl) {
  Object(inherits["a" /* default */])(DraggableControl, _BaseControl);

  function DraggableControl() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, DraggableControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(DraggableControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      dragPos: null,
      dragOffset: null
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_dragEvents", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onDragStart", function (event) {
      var _this$props = _this.props,
          draggable = _this$props.draggable,
          captureDrag = _this$props.captureDrag;

      if (draggable || captureDrag) {
        event.stopPropagation();
      }

      if (!draggable) {
        return;
      }

      var dragPos = _this._getDragEventPosition(event);

      var dragOffset = _this._getDragEventOffset(event);

      _this.setState({
        dragPos: dragPos,
        dragOffset: dragOffset
      });

      _this._setupDragEvents();

      var onDragStart = _this.props.onDragStart;

      if (onDragStart && dragOffset) {
        var callbackEvent = Object.assign({}, event);
        callbackEvent.lngLat = _this._getDragLngLat(dragPos, dragOffset);
        onDragStart(callbackEvent);
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onDrag", function (event) {
      event.stopPropagation();

      var dragPos = _this._getDragEventPosition(event);

      _this.setState({
        dragPos: dragPos
      });

      var onDrag = _this.props.onDrag;
      var dragOffset = _this.state.dragOffset;

      if (onDrag && dragOffset) {
        var callbackEvent = Object.assign({}, event);
        callbackEvent.lngLat = _this._getDragLngLat(dragPos, dragOffset);
        onDrag(callbackEvent);
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onDragEnd", function (event) {
      var _this$state = _this.state,
          dragPos = _this$state.dragPos,
          dragOffset = _this$state.dragOffset;
      event.stopPropagation();

      _this.setState({
        dragPos: null,
        dragOffset: null
      });

      _this._removeDragEvents();

      var onDragEnd = _this.props.onDragEnd;

      if (onDragEnd && dragPos && dragOffset) {
        var callbackEvent = Object.assign({}, event);
        callbackEvent.lngLat = _this._getDragLngLat(dragPos, dragOffset);
        onDragEnd(callbackEvent);
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onDragCancel", function (event) {
      event.stopPropagation();

      _this.setState({
        dragPos: null,
        dragOffset: null
      });

      _this._removeDragEvents();
    });

    return _this;
  }

  Object(createClass["a" /* default */])(DraggableControl, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(get["a" /* default */])(Object(getPrototypeOf["a" /* default */])(DraggableControl.prototype), "componentWillUnmount", this).call(this);

      this._removeDragEvents();
    }
  }, {
    key: "_setupDragEvents",
    value: function _setupDragEvents() {
      var eventManager = this._context.eventManager;

      if (!eventManager) {
        return;
      }

      this._dragEvents = {
        panmove: this._onDrag,
        panend: this._onDragEnd,
        pancancel: this._onDragCancel
      };
      eventManager.on(this._dragEvents);
    }
  }, {
    key: "_removeDragEvents",
    value: function _removeDragEvents() {
      var eventManager = this._context.eventManager;

      if (!eventManager || !this._dragEvents) {
        return;
      }

      eventManager.off(this._dragEvents);
      this._dragEvents = null;
    }
  }, {
    key: "_getDragEventPosition",
    value: function _getDragEventPosition(event) {
      var _event$offsetCenter = event.offsetCenter,
          x = _event$offsetCenter.x,
          y = _event$offsetCenter.y;
      return [x, y];
    }
  }, {
    key: "_getDragEventOffset",
    value: function _getDragEventOffset(event) {
      var _event$center = event.center,
          x = _event$center.x,
          y = _event$center.y;
      var container = this._containerRef.current;

      if (container) {
        var rect = container.getBoundingClientRect();
        return [rect.left - x, rect.top - y];
      }

      return null;
    }
  }, {
    key: "_getDraggedPosition",
    value: function _getDraggedPosition(dragPos, dragOffset) {
      return [dragPos[0] + dragOffset[0], dragPos[1] + dragOffset[1]];
    }
  }, {
    key: "_getDragLngLat",
    value: function _getDragLngLat(dragPos, dragOffset) {
      var _this$props2 = this.props,
          offsetLeft = _this$props2.offsetLeft,
          offsetTop = _this$props2.offsetTop;

      var _this$_getDraggedPosi = this._getDraggedPosition(dragPos, dragOffset),
          _this$_getDraggedPosi2 = Object(slicedToArray["a" /* default */])(_this$_getDraggedPosi, 2),
          x = _this$_getDraggedPosi2[0],
          y = _this$_getDraggedPosi2[1];

      return this._context.viewport.unproject([x - offsetLeft, y - offsetTop]);
    }
  }]);

  return DraggableControl;
}(base_control_BaseControl);

Object(defineProperty["a" /* default */])(draggable_control_DraggableControl, "propTypes", draggable_control_propTypes);

Object(defineProperty["a" /* default */])(draggable_control_DraggableControl, "defaultProps", draggable_control_defaultProps);


// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/crisp-pixel.js
var crisp_pixel_pixelRatio = typeof window !== 'undefined' && window.devicePixelRatio || 1;
var crispPixel = function crispPixel(size) {
  return Math.round(size * crisp_pixel_pixelRatio) / crisp_pixel_pixelRatio;
};
var crispPercentage = function crispPercentage(el, percentage) {
  var dimension = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'x';

  if (el === null) {
    return percentage;
  }

  var origSize = dimension === 'x' ? el.offsetWidth : el.offsetHeight;
  return crispPixel(percentage / 100 * origSize) / origSize * 100;
};
// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/components/marker.js














var marker_propTypes = Object.assign({}, draggable_control_DraggableControl.propTypes, {
  className: prop_types_default.a.string,
  longitude: prop_types_default.a.number.isRequired,
  latitude: prop_types_default.a.number.isRequired
});
var marker_defaultProps = Object.assign({}, draggable_control_DraggableControl.defaultProps, {
  className: ''
});

var marker_Marker = function (_DraggableControl) {
  Object(inherits["a" /* default */])(Marker, _DraggableControl);

  function Marker() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Marker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Marker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_control", null);

    return _this;
  }

  Object(createClass["a" /* default */])(Marker, [{
    key: "_getPosition",
    value: function _getPosition() {
      var _this$props = this.props,
          longitude = _this$props.longitude,
          latitude = _this$props.latitude,
          offsetLeft = _this$props.offsetLeft,
          offsetTop = _this$props.offsetTop;
      var _this$state = this.state,
          dragPos = _this$state.dragPos,
          dragOffset = _this$state.dragOffset;

      if (dragPos && dragOffset) {
        return this._getDraggedPosition(dragPos, dragOffset);
      }

      var _this$_context$viewpo = this._context.viewport.project([longitude, latitude]),
          _this$_context$viewpo2 = Object(slicedToArray["a" /* default */])(_this$_context$viewpo, 2),
          x = _this$_context$viewpo2[0],
          y = _this$_context$viewpo2[1];

      x += offsetLeft;
      y += offsetTop;
      return [x, y];
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this$_getPosition = this._getPosition(),
          _this$_getPosition2 = Object(slicedToArray["a" /* default */])(_this$_getPosition, 2),
          x = _this$_getPosition2[0],
          y = _this$_getPosition2[1];

      var transform = "translate(".concat(crispPixel(x), "px, ").concat(crispPixel(y), "px)");
      var div = this._containerRef.current;

      if (this._control && div) {
        div.style.transform = transform;
      } else {
        var _this$props2 = this.props,
            className = _this$props2.className,
            draggable = _this$props2.draggable;
        var dragPos = this.state.dragPos;
        var containerStyle = {
          position: 'absolute',
          left: 0,
          top: 0,
          transform: transform,
          cursor: draggable ? dragPos ? 'grabbing' : 'grab' : 'auto'
        };
        this._control = react["createElement"]("div", {
          className: "mapboxgl-marker ".concat(className),
          ref: this._containerRef,
          style: containerStyle
        }, this.props.children);
      }

      return this._control;
    }
  }, {
    key: "render",
    value: function render() {
      this._control = null;
      return Object(get["a" /* default */])(Object(getPrototypeOf["a" /* default */])(Marker.prototype), "render", this).call(this);
    }
  }]);

  return Marker;
}(draggable_control_DraggableControl);

Object(defineProperty["a" /* default */])(marker_Marker, "propTypes", marker_propTypes);

Object(defineProperty["a" /* default */])(marker_Marker, "defaultProps", marker_defaultProps);


// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.anchor.js
var es6_string_anchor = __webpack_require__("q/PY");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("v9g0");

// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/dynamic-position.js






var ANCHOR_POSITION = {
  top: {
    x: 0.5,
    y: 0
  },
  'top-left': {
    x: 0,
    y: 0
  },
  'top-right': {
    x: 1,
    y: 0
  },
  bottom: {
    x: 0.5,
    y: 1
  },
  'bottom-left': {
    x: 0,
    y: 1
  },
  'bottom-right': {
    x: 1,
    y: 1
  },
  left: {
    x: 0,
    y: 0.5
  },
  right: {
    x: 1,
    y: 0.5
  }
};
var ANCHOR_TYPES = Object.keys(ANCHOR_POSITION);
function getDynamicPosition(_ref) {
  var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      selfWidth = _ref.selfWidth,
      selfHeight = _ref.selfHeight,
      anchor = _ref.anchor,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 0 : _ref$padding;
  var _ANCHOR_POSITION$anch = ANCHOR_POSITION[anchor],
      anchorX = _ANCHOR_POSITION$anch.x,
      anchorY = _ANCHOR_POSITION$anch.y;
  var top = y - anchorY * selfHeight;
  var bottom = top + selfHeight;
  var yStep = 0.5;

  if (top < padding) {
    while (top < padding && anchorY >= yStep) {
      anchorY -= yStep;
      top += yStep * selfHeight;
    }
  } else if (bottom > height - padding) {
    while (bottom > height - padding && anchorY <= 1 - yStep) {
      anchorY += yStep;
      bottom -= yStep * selfHeight;
    }
  }

  var left = x - anchorX * selfWidth;
  var right = left + selfWidth;
  var xStep = 0.5;

  if (anchorY === 0.5) {
    anchorX = Math.floor(anchorX);
    xStep = 1;
  }

  if (left < padding) {
    while (left < padding && anchorX >= xStep) {
      anchorX -= xStep;
      left += xStep * selfWidth;
    }
  } else if (right > width - padding) {
    while (right > width - padding && anchorX <= 1 - xStep) {
      anchorX += xStep;
      right -= xStep * selfWidth;
    }
  }

  return ANCHOR_TYPES.find(function (positionType) {
    var anchorPosition = ANCHOR_POSITION[positionType];
    return anchorPosition.x === anchorX && anchorPosition.y === anchorY;
  }) || anchor;
}
// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/components/popup.js





















var popup_propTypes = Object.assign({}, base_control_BaseControl.propTypes, {
  className: prop_types_default.a.string,
  longitude: prop_types_default.a.number.isRequired,
  latitude: prop_types_default.a.number.isRequired,
  altitude: prop_types_default.a.number,
  offsetLeft: prop_types_default.a.number,
  offsetTop: prop_types_default.a.number,
  tipSize: prop_types_default.a.number,
  closeButton: prop_types_default.a.bool,
  closeOnClick: prop_types_default.a.bool,
  anchor: prop_types_default.a.oneOf(Object.keys(ANCHOR_POSITION)),
  dynamicPosition: prop_types_default.a.bool,
  sortByDepth: prop_types_default.a.bool,
  onClose: prop_types_default.a.func
});
var popup_defaultProps = Object.assign({}, base_control_BaseControl.defaultProps, {
  className: '',
  altitude: 0,
  offsetLeft: 0,
  offsetTop: 0,
  tipSize: 10,
  anchor: 'bottom',
  dynamicPosition: true,
  sortByDepth: false,
  closeButton: true,
  closeOnClick: true,
  onClose: function onClose() {}
});

var popup_Popup = function (_BaseControl) {
  Object(inherits["a" /* default */])(Popup, _BaseControl);

  function Popup() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Popup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Popup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_closeOnClick", false);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_contentRef", Object(react["createRef"])());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onClick", function (evt) {
      if (_this.props.captureClick) {
        evt.stopPropagation();
      }

      if (_this.props.closeOnClick || evt.target.className === 'mapboxgl-popup-close-button') {
        _this.props.onClose();

        var eventManager = _this._context.eventManager;

        if (eventManager) {
          eventManager.once('click', function (e) {
            return e.stopPropagation();
          }, evt.target);
        }
      }
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(get["a" /* default */])(Object(getPrototypeOf["a" /* default */])(Popup.prototype), "componentDidMount", this).call(this);

      this.forceUpdate();
    }
  }, {
    key: "_getPosition",
    value: function _getPosition(x, y) {
      var viewport = this._context.viewport;
      var _this$props = this.props,
          anchor = _this$props.anchor,
          dynamicPosition = _this$props.dynamicPosition,
          tipSize = _this$props.tipSize;
      var content = this._contentRef.current;

      if (content) {
        return dynamicPosition ? getDynamicPosition({
          x: x,
          y: y,
          anchor: anchor,
          padding: tipSize,
          width: viewport.width,
          height: viewport.height,
          selfWidth: content.clientWidth,
          selfHeight: content.clientHeight
        }) : anchor;
      }

      return anchor;
    }
  }, {
    key: "_getContainerStyle",
    value: function _getContainerStyle(x, y, z, positionType) {
      var viewport = this._context.viewport;
      var _this$props2 = this.props,
          offsetLeft = _this$props2.offsetLeft,
          offsetTop = _this$props2.offsetTop,
          sortByDepth = _this$props2.sortByDepth;
      var anchorPosition = ANCHOR_POSITION[positionType];
      var left = x + offsetLeft;
      var top = y + offsetTop;
      var el = this._containerRef.current;
      var xPercentage = crispPercentage(el, -anchorPosition.x * 100);
      var yPercentage = crispPercentage(el, -anchorPosition.y * 100, 'y');
      var style = {
        position: 'absolute',
        transform: "\n        translate(".concat(xPercentage, "%, ").concat(yPercentage, "%)\n        translate(").concat(crispPixel(left), "px, ").concat(crispPixel(top), "px)\n      "),
        display: undefined,
        zIndex: undefined
      };

      if (!sortByDepth) {
        return style;
      }

      if (z > 1 || z < -1 || x < 0 || x > viewport.width || y < 0 || y > viewport.height) {
        style.display = 'none';
      } else {
        style.zIndex = Math.floor((1 - z) / 2 * 100000);
      }

      return style;
    }
  }, {
    key: "_renderTip",
    value: function _renderTip(positionType) {
      var tipSize = this.props.tipSize;
      return react["createElement"]("div", {
        key: "tip",
        className: "mapboxgl-popup-tip",
        style: {
          borderWidth: tipSize
        }
      });
    }
  }, {
    key: "_renderContent",
    value: function _renderContent() {
      var _this$props3 = this.props,
          closeButton = _this$props3.closeButton,
          children = _this$props3.children;
      var onClick = this._context.eventManager ? null : this._onClick;
      return react["createElement"]("div", {
        key: "content",
        ref: this._contentRef,
        className: "mapboxgl-popup-content",
        onClick: onClick
      }, closeButton && react["createElement"]("button", {
        key: "close-button",
        className: "mapboxgl-popup-close-button",
        type: "button"
      }, "\xD7"), children);
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this$props4 = this.props,
          className = _this$props4.className,
          longitude = _this$props4.longitude,
          latitude = _this$props4.latitude,
          altitude = _this$props4.altitude;

      var _this$_context$viewpo = this._context.viewport.project([longitude, latitude, altitude]),
          _this$_context$viewpo2 = Object(slicedToArray["a" /* default */])(_this$_context$viewpo, 3),
          x = _this$_context$viewpo2[0],
          y = _this$_context$viewpo2[1],
          z = _this$_context$viewpo2[2];

      var positionType = this._getPosition(x, y);

      var containerStyle = this._getContainerStyle(x, y, z, positionType);

      return react["createElement"]("div", {
        className: "mapboxgl-popup mapboxgl-popup-anchor-".concat(positionType, " ").concat(className),
        style: containerStyle,
        ref: this._containerRef
      }, this._renderTip(positionType), this._renderContent());
    }
  }]);

  return Popup;
}(base_control_BaseControl);

Object(defineProperty["a" /* default */])(popup_Popup, "propTypes", popup_propTypes);

Object(defineProperty["a" /* default */])(popup_Popup, "defaultProps", popup_defaultProps);


// EXTERNAL MODULE: ./node_modules/react-map-gl/dist/esm/utils/globals.js
var globals = __webpack_require__("2lZV");

// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/components/fullscreen-control.js













var fullscreen_control_propTypes = Object.assign({}, base_control_BaseControl.propTypes, {
  className: prop_types_default.a.string,
  container: prop_types_default.a.object
});
var fullscreen_control_defaultProps = Object.assign({}, base_control_BaseControl.defaultProps, {
  className: '',
  container: null
});

var fullscreen_control_FullscreenControl = function (_BaseControl) {
  Object(inherits["a" /* default */])(FullscreenControl, _BaseControl);

  function FullscreenControl() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, FullscreenControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(FullscreenControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      isFullscreen: false,
      showButton: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_mapboxFullscreenControl", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onFullscreenChange", function () {
      var nextState = !_this._mapboxFullscreenControl._fullscreen;
      _this._mapboxFullscreenControl._fullscreen = nextState;

      _this.setState({
        isFullscreen: nextState
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onClickFullscreen", function () {
      _this._mapboxFullscreenControl._onClickFullscreen();
    });

    return _this;
  }

  Object(createClass["a" /* default */])(FullscreenControl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var container = this.props.container || this._context.mapContainer;
      this._mapboxFullscreenControl = new mapbox_gl_default.a.FullscreenControl({
        container: container
      });
      this.setState({
        showButton: this._mapboxFullscreenControl._checkFullscreenSupport()
      });
      globals["a" /* document */].addEventListener(this._mapboxFullscreenControl._fullscreenchange, this._onFullscreenChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      globals["a" /* document */].removeEventListener(this._mapboxFullscreenControl._fullscreenchange, this._onFullscreenChange);
    }
  }, {
    key: "_renderButton",
    value: function _renderButton(type, label, callback) {
      return react["createElement"]("button", {
        key: type,
        className: "mapboxgl-ctrl-icon mapboxgl-ctrl-".concat(type),
        type: "button",
        title: label,
        onClick: callback
      }, react["createElement"]("span", {
        className: "mapboxgl-ctrl-icon",
        "aria-hidden": "true"
      }));
    }
  }, {
    key: "_render",
    value: function _render() {
      if (!this.state.showButton) {
        return null;
      }

      var className = this.props.className;
      var isFullscreen = this.state.isFullscreen;
      var type = isFullscreen ? 'shrink' : 'fullscreen';
      return react["createElement"]("div", {
        className: "mapboxgl-ctrl mapboxgl-ctrl-group ".concat(className),
        ref: this._containerRef
      }, this._renderButton(type, 'Toggle fullscreen', this._onClickFullscreen));
    }
  }]);

  return FullscreenControl;
}(base_control_BaseControl);

Object(defineProperty["a" /* default */])(fullscreen_control_FullscreenControl, "propTypes", fullscreen_control_propTypes);

Object(defineProperty["a" /* default */])(fullscreen_control_FullscreenControl, "defaultProps", fullscreen_control_defaultProps);


// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/geolocate-utils.js


var geolocate_utils_supported;
function isGeolocationSupported() {
  if (geolocate_utils_supported !== undefined) {
    return Promise.resolve(geolocate_utils_supported);
  }

  if (window.navigator.permissions !== undefined) {
    return window.navigator.permissions.query({
      name: 'geolocation'
    }).then(function (p) {
      geolocate_utils_supported = p.state !== 'denied';
      return geolocate_utils_supported;
    });
  }

  geolocate_utils_supported = Boolean(window.navigator.geolocation);
  return Promise.resolve(geolocate_utils_supported);
}
// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/components/geolocate-control.js




















var geolocate_control_LINEAR_TRANSITION_PROPS = Object.assign({}, transition_manager_TransitionManager.defaultProps, {
  transitionDuration: 500
});

var geolocate_control_noop = function noop() {};

var geolocate_control_propTypes = Object.assign({}, base_control_BaseControl.propTypes, {
  className: prop_types_default.a.string,
  style: prop_types_default.a.object,
  label: prop_types_default.a.string,
  positionOptions: prop_types_default.a.object,
  fitBoundsOptions: prop_types_default.a.object,
  trackUserLocation: prop_types_default.a.bool,
  showUserLocation: prop_types_default.a.bool,
  onViewStateChange: prop_types_default.a.func,
  onViewportChange: prop_types_default.a.func,
  onGeolocate: prop_types_default.a.func
});
var geolocate_control_defaultProps = Object.assign({}, base_control_BaseControl.defaultProps, {
  className: '',
  style: {},
  label: 'Geolocate',
  positionOptions: null,
  fitBoundsOptions: null,
  trackUserLocation: false,
  showUserLocation: true,
  onGeolocate: function onGeolocate() {}
});

var geolocate_control_GeolocateControl = function (_BaseControl) {
  Object(inherits["a" /* default */])(GeolocateControl, _BaseControl);

  function GeolocateControl() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, GeolocateControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(GeolocateControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      supportsGeolocation: false,
      markerPosition: null
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_mapboxGeolocateControl", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_geolocateButtonRef", Object(react["createRef"])());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_setupMapboxGeolocateControl", function (supportsGeolocation) {
      if (!supportsGeolocation) {
        console.warn('Geolocation support is not available, the GeolocateControl will not be visible.');
        return;
      }

      var controlOptions = {
        showUserLocation: false
      };
      ['positionOptions', 'fitBoundsOptions', 'trackUserLocation'].forEach(function (prop) {
        if (prop in _this.props && _this.props[prop] !== null) {
          controlOptions[prop] = _this.props[prop];
        }
      });
      var control = new mapbox_gl_default.a.GeolocateControl(controlOptions);
      _this._mapboxGeolocateControl = control;
      control._watchState = 'OFF';
      control._geolocateButton = _this._geolocateButtonRef.current;

      if (control.options.trackUserLocation && control._geolocateButton) {
        control._geolocateButton.setAttribute('aria-pressed', 'false');
      }

      control._updateMarker = _this._updateMarker;
      control._updateCamera = _this._updateCamera;
      control._setup = true;
      var eventManager = _this._context.eventManager;

      if (control.options.trackUserLocation && eventManager) {
        eventManager.on('panstart', function () {
          if (control._watchState === 'ACTIVE_LOCK') {
            control._watchState = 'BACKGROUND';

            control._geolocateButton.classList.add('mapboxgl-ctrl-geolocate-background');

            control._geolocateButton.classList.remove('mapboxgl-ctrl-geolocate-active');
          }
        });
      }

      control.on('geolocate', _this.props.onGeolocate);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onClickGeolocate", function () {
      var control = _this._mapboxGeolocateControl;
      control._map = _this._context.map;

      if (_this.props.showUserLocation) {
        control.on('geolocate', _this._updateMarker);
        control.on('trackuserlocationend', _this._updateMarker);
      }

      return _this._mapboxGeolocateControl.trigger();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_updateMarker", function (position) {
      if (position) {
        _this.setState({
          markerPosition: position.coords
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_getBounds", function (position) {
      var center = new mapbox_gl_default.a.LngLat(position.coords.longitude, position.coords.latitude);
      var radius = position.coords.accuracy;
      var bounds = center.toBounds(radius);
      return [[bounds._ne.lng, bounds._ne.lat], [bounds._sw.lng, bounds._sw.lat]];
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_updateCamera", function (position) {
      var viewport = _this._context.viewport;

      var bounds = _this._getBounds(position);

      var _fitBounds = new esm["a" /* WebMercatorViewport */](viewport).fitBounds(bounds),
          longitude = _fitBounds.longitude,
          latitude = _fitBounds.latitude,
          zoom = _fitBounds.zoom;

      var newViewState = Object.assign({}, viewport, {
        longitude: longitude,
        latitude: latitude,
        zoom: zoom
      });
      var mapState = new map_state_MapState(newViewState);
      var viewState = Object.assign({}, mapState.getViewportProps(), geolocate_control_LINEAR_TRANSITION_PROPS);
      var onViewportChange = _this.props.onViewportChange || _this._context.onViewportChange || geolocate_control_noop;
      var onViewStateChange = _this.props.onViewStateChange || _this._context.onViewStateChange || geolocate_control_noop;
      onViewStateChange({
        viewState: viewState
      });
      onViewportChange(viewState);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_renderButton", function (type, label, callback) {
      return react["createElement"]("button", {
        key: type,
        className: "mapboxgl-ctrl-icon mapboxgl-ctrl-".concat(type),
        ref: _this._geolocateButtonRef,
        type: "button",
        title: label,
        onClick: callback
      }, react["createElement"]("span", {
        className: "mapboxgl-ctrl-icon",
        "aria-hidden": "true"
      }));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_renderMarker", function () {
      var markerPosition = _this.state.markerPosition;
      var showUserLocation = _this.props.showUserLocation;

      if (!markerPosition || !showUserLocation) {
        return null;
      }

      return react["createElement"](marker_Marker, {
        key: "location-maker",
        className: "mapboxgl-user-location-dot",
        longitude: markerPosition.longitude,
        latitude: markerPosition.latitude,
        onContextMenu: function onContextMenu(e) {
          return e.preventDefault();
        },
        captureDrag: false,
        captureDoubleClick: false
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(GeolocateControl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      isGeolocationSupported().then(function (result) {
        _this2.setState({
          supportsGeolocation: result
        });

        _this2._setupMapboxGeolocateControl(result);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._mapboxGeolocateControl) {
        var geolocationWatchID = this._mapboxGeolocateControl._geolocationWatchID;

        if (geolocationWatchID !== undefined) {
          window.navigator.geolocation.clearWatch(geolocationWatchID);
          this._mapboxGeolocateControl._geolocationWatchID = undefined;
        }
      }
    }
  }, {
    key: "_render",
    value: function _render() {
      if (!this.state.supportsGeolocation) {
        return null;
      }

      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          label = _this$props.label;
      return react["createElement"]("div", null, this._renderMarker(), react["createElement"]("div", {
        key: "geolocate-control",
        className: "mapboxgl-ctrl mapboxgl-ctrl-group ".concat(className),
        ref: this._containerRef,
        style: style,
        onContextMenu: function onContextMenu(e) {
          return e.preventDefault();
        }
      }, this._renderButton('geolocate', label, this._onClickGeolocate)));
    }
  }]);

  return GeolocateControl;
}(base_control_BaseControl);

Object(defineProperty["a" /* default */])(geolocate_control_GeolocateControl, "propTypes", geolocate_control_propTypes);

Object(defineProperty["a" /* default */])(geolocate_control_GeolocateControl, "defaultProps", geolocate_control_defaultProps);


// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("HQhv");

// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/version.js



function compareVersions(version1, version2) {
  var v1 = (version1 || '').split('.').map(Number);
  var v2 = (version2 || '').split('.').map(Number);

  for (var i = 0; i < 3; i++) {
    var part1 = v1[i] || 0;
    var part2 = v2[i] || 0;

    if (part1 < part2) {
      return -1;
    }

    if (part1 > part2) {
      return 1;
    }
  }

  return 0;
}
// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/components/navigation-control.js

















var navigation_control_noop = function noop() {};

var navigation_control_propTypes = Object.assign({}, base_control_BaseControl.propTypes, {
  className: prop_types_default.a.string,
  onViewStateChange: prop_types_default.a.func,
  onViewportChange: prop_types_default.a.func,
  showCompass: prop_types_default.a.bool,
  showZoom: prop_types_default.a.bool,
  zoomInLabel: prop_types_default.a.string,
  zoomOutLabel: prop_types_default.a.string,
  compassLabel: prop_types_default.a.string
});
var navigation_control_defaultProps = Object.assign({}, base_control_BaseControl.defaultProps, {
  className: '',
  showCompass: true,
  showZoom: true,
  zoomInLabel: 'Zoom In',
  zoomOutLabel: 'Zoom Out',
  compassLabel: 'Reset North'
});
var VERSION_LEGACY = 1;
var VERSION_1_6 = 2;

function getUIVersion(mapboxVersion) {
  return compareVersions(mapboxVersion, '1.6.0') >= 0 ? VERSION_1_6 : VERSION_LEGACY;
}

var navigation_control_NavigationControl = function (_BaseControl) {
  Object(inherits["a" /* default */])(NavigationControl, _BaseControl);

  function NavigationControl(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, NavigationControl);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavigationControl).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_uiVersion", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onZoomIn", function () {
      _this._updateViewport({
        zoom: _this._context.viewport.zoom + 1
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onZoomOut", function () {
      _this._updateViewport({
        zoom: _this._context.viewport.zoom - 1
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_onResetNorth", function () {
      _this._updateViewport({
        bearing: 0,
        pitch: 0
      });
    });

    checkDeprecatedProps(props);
    return _this;
  }

  Object(createClass["a" /* default */])(NavigationControl, [{
    key: "_updateViewport",
    value: function _updateViewport(opts) {
      var viewport = this._context.viewport;
      var mapState = new map_state_MapState(Object.assign({}, viewport, opts));
      var viewState = Object.assign({}, mapState.getViewportProps(), LINEAR_TRANSITION_PROPS);
      var onViewportChange = this.props.onViewportChange || this._context.onViewportChange || navigation_control_noop;
      var onViewStateChange = this.props.onViewStateChange || this._context.onViewStateChange || navigation_control_noop;
      onViewStateChange({
        viewState: viewState
      });
      onViewportChange(viewState);
    }
  }, {
    key: "_renderCompass",
    value: function _renderCompass() {
      var bearing = this._context.viewport.bearing;
      var style = {
        transform: "rotate(".concat(-bearing, "deg)")
      };
      return this._uiVersion === VERSION_1_6 ? react["createElement"]("span", {
        className: "mapboxgl-ctrl-icon",
        "aria-hidden": "true",
        style: style
      }) : react["createElement"]("span", {
        className: "mapboxgl-ctrl-compass-arrow",
        style: style
      });
    }
  }, {
    key: "_renderButton",
    value: function _renderButton(type, label, callback, children) {
      return react["createElement"]("button", {
        key: type,
        className: "mapboxgl-ctrl-icon mapboxgl-ctrl-".concat(type),
        type: "button",
        title: label,
        onClick: callback
      }, children || react["createElement"]("span", {
        className: "mapboxgl-ctrl-icon",
        "aria-hidden": "true"
      }));
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this$props = this.props,
          className = _this$props.className,
          showCompass = _this$props.showCompass,
          showZoom = _this$props.showZoom,
          zoomInLabel = _this$props.zoomInLabel,
          zoomOutLabel = _this$props.zoomOutLabel,
          compassLabel = _this$props.compassLabel;

      if (!this._uiVersion) {
        var map = this._context.map;
        this._uiVersion = getUIVersion(map && map.version);
      }

      return react["createElement"]("div", {
        className: "mapboxgl-ctrl mapboxgl-ctrl-group ".concat(className),
        ref: this._containerRef
      }, showZoom && this._renderButton('zoom-in', zoomInLabel, this._onZoomIn), showZoom && this._renderButton('zoom-out', zoomOutLabel, this._onZoomOut), showCompass && this._renderButton('compass', compassLabel, this._onResetNorth, this._renderCompass()));
    }
  }]);

  return NavigationControl;
}(base_control_BaseControl);

Object(defineProperty["a" /* default */])(navigation_control_NavigationControl, "propTypes", navigation_control_propTypes);

Object(defineProperty["a" /* default */])(navigation_control_NavigationControl, "defaultProps", navigation_control_defaultProps);


// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/components/scale-control.js













var scale_control_propTypes = Object.assign({}, base_control_BaseControl.propTypes, {
  maxWidth: prop_types_default.a.number,
  unit: prop_types_default.a.oneOf(['imperial', 'metric', 'nautical'])
});
var scale_control_defaultProps = Object.assign({}, base_control_BaseControl.defaultProps, {
  maxWidth: 100,
  unit: 'metric'
});

var scale_control_ScaleControl = function (_BaseControl) {
  Object(inherits["a" /* default */])(ScaleControl, _BaseControl);

  function ScaleControl() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, ScaleControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(ScaleControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_control", null);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_mapboxScaleControl", null);

    return _this;
  }

  Object(createClass["a" /* default */])(ScaleControl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var mapboxScaleControl = new mapbox_gl_default.a.ScaleControl();
      mapboxScaleControl._map = this._context.map;
      mapboxScaleControl._container = this._containerRef.current;
      this._mapboxScaleControl = mapboxScaleControl;

      this._update();
    }
  }, {
    key: "_update",
    value: function _update() {
      var mapboxScaleControl = this._mapboxScaleControl;

      if (mapboxScaleControl) {
        mapboxScaleControl.options = this.props;

        mapboxScaleControl._onMove();
      }
    }
  }, {
    key: "_render",
    value: function _render() {
      this._control = this._control || react["createElement"]("div", {
        ref: this._containerRef,
        className: "mapboxgl-ctrl mapboxgl-ctrl-scale"
      });

      this._update();

      return this._control;
    }
  }]);

  return ScaleControl;
}(base_control_BaseControl);

Object(defineProperty["a" /* default */])(scale_control_ScaleControl, "propTypes", scale_control_propTypes);

Object(defineProperty["a" /* default */])(scale_control_ScaleControl, "defaultProps", scale_control_defaultProps);


// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/overlays/canvas-overlay.js













var canvas_overlay_propTypes = Object.assign({}, base_control_BaseControl.propTypes, {
  redraw: prop_types_default.a.func.isRequired
});
var canvas_overlay_defaultProps = {
  captureScroll: false,
  captureDrag: false,
  captureClick: false,
  captureDoubleClick: false
};

var canvas_overlay_CanvasOverlay = function (_BaseControl) {
  Object(inherits["a" /* default */])(CanvasOverlay, _BaseControl);

  function CanvasOverlay() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, CanvasOverlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(CanvasOverlay)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_canvas", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_ctx", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_redraw", function () {
      var ctx = _this._ctx;

      if (!ctx) {
        return;
      }

      var pixelRatio = globals["b" /* window */].devicePixelRatio || 1;
      ctx.save();
      ctx.scale(pixelRatio, pixelRatio);
      var _this$_context = _this._context,
          viewport = _this$_context.viewport,
          isDragging = _this$_context.isDragging;

      _this.props.redraw({
        width: viewport.width,
        height: viewport.height,
        ctx: ctx,
        isDragging: isDragging,
        project: viewport.project.bind(viewport),
        unproject: viewport.unproject.bind(viewport)
      });

      ctx.restore();
    });

    return _this;
  }

  Object(createClass["a" /* default */])(CanvasOverlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var canvas = this._containerRef.current;

      if (canvas) {
        this._canvas = canvas;
        this._ctx = canvas.getContext('2d');
      }

      this._redraw();
    }
  }, {
    key: "_render",
    value: function _render() {
      var pixelRatio = globals["b" /* window */].devicePixelRatio || 1;
      var _this$_context$viewpo = this._context.viewport,
          width = _this$_context$viewpo.width,
          height = _this$_context$viewpo.height;

      this._redraw();

      return react["createElement"]("canvas", {
        ref: this._containerRef,
        width: width * pixelRatio,
        height: height * pixelRatio,
        style: {
          width: "".concat(width, "px"),
          height: "".concat(height, "px"),
          position: 'absolute',
          left: 0,
          top: 0
        }
      });
    }
  }]);

  return CanvasOverlay;
}(base_control_BaseControl);

Object(defineProperty["a" /* default */])(canvas_overlay_CanvasOverlay, "propTypes", canvas_overlay_propTypes);

Object(defineProperty["a" /* default */])(canvas_overlay_CanvasOverlay, "defaultProps", canvas_overlay_defaultProps);


// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/overlays/html-overlay.js











var html_overlay_propTypes = Object.assign({}, base_control_BaseControl.propTypes, {
  redraw: prop_types_default.a.func.isRequired,
  style: prop_types_default.a.object
});
var html_overlay_defaultProps = {
  captureScroll: false,
  captureDrag: false,
  captureClick: false,
  captureDoubleClick: false
};

var html_overlay_HTMLOverlay = function (_BaseControl) {
  Object(inherits["a" /* default */])(HTMLOverlay, _BaseControl);

  function HTMLOverlay() {
    Object(classCallCheck["a" /* default */])(this, HTMLOverlay);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(HTMLOverlay).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(HTMLOverlay, [{
    key: "_render",
    value: function _render() {
      var _this$_context = this._context,
          viewport = _this$_context.viewport,
          isDragging = _this$_context.isDragging;
      var style = Object.assign({
        position: 'absolute',
        left: 0,
        top: 0,
        width: viewport.width,
        height: viewport.height
      }, this.props.style);
      return react["createElement"]("div", {
        ref: this._containerRef,
        style: style
      }, this.props.redraw({
        width: viewport.width,
        height: viewport.height,
        isDragging: isDragging,
        project: viewport.project.bind(viewport),
        unproject: viewport.unproject.bind(viewport)
      }));
    }
  }]);

  return HTMLOverlay;
}(base_control_BaseControl);

Object(defineProperty["a" /* default */])(html_overlay_HTMLOverlay, "propTypes", html_overlay_propTypes);

Object(defineProperty["a" /* default */])(html_overlay_HTMLOverlay, "defaultProps", html_overlay_defaultProps);


// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/overlays/svg-overlay.js











var svg_overlay_propTypes = Object.assign({}, base_control_BaseControl.propTypes, {
  redraw: prop_types_default.a.func.isRequired,
  style: prop_types_default.a.object
});
var svg_overlay_defaultProps = {
  captureScroll: false,
  captureDrag: false,
  captureClick: false,
  captureDoubleClick: false
};

var svg_overlay_SVGOverlay = function (_BaseControl) {
  Object(inherits["a" /* default */])(SVGOverlay, _BaseControl);

  function SVGOverlay() {
    Object(classCallCheck["a" /* default */])(this, SVGOverlay);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(SVGOverlay).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(SVGOverlay, [{
    key: "_render",
    value: function _render() {
      var _this$_context = this._context,
          viewport = _this$_context.viewport,
          isDragging = _this$_context.isDragging;
      var style = Object.assign({
        position: 'absolute',
        left: 0,
        top: 0
      }, this.props.style);
      return react["createElement"]("svg", {
        width: viewport.width,
        height: viewport.height,
        ref: this._containerRef,
        style: style
      }, this.props.redraw({
        width: viewport.width,
        height: viewport.height,
        isDragging: isDragging,
        project: viewport.project.bind(viewport),
        unproject: viewport.unproject.bind(viewport)
      }));
    }
  }]);

  return SVGOverlay;
}(base_control_BaseControl);

Object(defineProperty["a" /* default */])(svg_overlay_SVGOverlay, "propTypes", svg_overlay_propTypes);

Object(defineProperty["a" /* default */])(svg_overlay_SVGOverlay, "defaultProps", svg_overlay_defaultProps);


// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/utils/set-rtl-text-plugin.js

var setRTLTextPlugin = mapbox_gl_default.a ? mapbox_gl_default.a.setRTLTextPlugin : function () {};
/* harmony default export */ var set_rtl_text_plugin = (setRTLTextPlugin);
// CONCATENATED MODULE: ./node_modules/react-map-gl/dist/esm/index.js





















// EXTERNAL MODULE: ../node_modules/@google/earthengine/build/browser.js
var browser = __webpack_require__("RtaV");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ../examples/shared/index.js + 6 modules
var shared = __webpack_require__("v5MB");

// CONCATENATED MODULE: ../examples/noaa-hurricanes/app.js
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Add a EE-enabled Google Client id here (or inject it with e.g. a webpack environment plugin)
var EE_CLIENT_ID="562875810552-5mut6fkiukje0cbbvg5cd9vdmdb8u6dh.apps.googleusercontent.com";// eslint-disable-line
var MAPBOX_TOKEN="pk.eyJ1Ijoia3lsZWJhcnJvbiIsImEiOiJjazJieGNtd2MwNmRrM25sY3BsdXVwaGhiIn0.CUixqH36Knh0ra_TaG5aug";// eslint-disable-line
var INITIAL_VIEW_STATE={longitude:-53,latitude:36,zoom:3,pitch:0,bearing:0};var app_App=/*#__PURE__*/function(_React$Component){_inheritsLoose(App,_React$Component);function App(props){var _this;_this=_React$Component.call(this,props)||this;_this.state={eeObject:null,asVector:true};_this.loginProvider=new shared["b" /* GoogleLoginProvider */]({scopes:['https://www.googleapis.com/auth/earthengine'],clientId:EE_CLIENT_ID,onLoginChange:_this._onLoginSuccess.bind(_assertThisInitialized(_this))});return _this;}var _proto=App.prototype;_proto._onLoginSuccess=/*#__PURE__*/function(){var _onLoginSuccess2=_asyncToGenerator(/*#__PURE__*/regenerator_default.a.mark(function _callee(user,loginProvider){var _this$props$year,year,hurricanes,points,storm_ids,lines;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return src["a" /* EarthEngineLayer */].initializeEEApi({clientId:EE_CLIENT_ID});case 2:_this$props$year=this.props.year,year=_this$props$year===void 0?'2017':_this$props$year;// Show hurricane tracks and points for 2017.
hurricanes=browser_default.a.FeatureCollection('NOAA/NHC/HURDAT2/atlantic');points=hurricanes.filter(browser_default.a.Filter.date(browser_default.a.Date(year).getRange('year')));// Find all of the hurricane ids.
storm_ids=points.toList(1000).map(function(point){return browser_default.a.Feature(point).get('id');}).distinct();// Create a line for each hurricane.
lines=browser_default.a.FeatureCollection(storm_ids.map(function(storm_id){var pts=points.filter(browser_default.a.Filter.eq('id',browser_default.a.String(storm_id))).sort('system:time_start');var line=browser_default.a.Geometry.LineString(pts.geometry().coordinates());var feature=browser_default.a.Feature(line);return feature.set('id',storm_id);}));this.setState({points:points,lines:lines});case 8:case"end":return _context.stop();}}},_callee,this);}));function _onLoginSuccess(_x,_x2){return _onLoginSuccess2.apply(this,arguments);}return _onLoginSuccess;}();_proto.render=function render(){var _this2=this;var _this$state=this.state,points=_this$state.points,lines=_this$state.lines,asVector=_this$state.asVector;var _this$props$mapStyle=this.props.mapStyle,mapStyle=_this$props$mapStyle===void 0?'mapbox://styles/mapbox/dark-v9':_this$props$mapStyle;var layers=asVector?[new src["a" /* EarthEngineLayer */]({id:'lines-vector',eeObject:lines,asVector:asVector,getLineColor:[255,0,0],getLineWidth:1000,lineWidthMinPixels:3}),new src["a" /* EarthEngineLayer */]({id:'points-vector',eeObject:points,asVector:asVector,getFillColor:[0,0,0],pointRadiusMinPixels:3,getRadius:100,getLineColor:[255,255,255],lineWidthMinPixels:0.5,stroked:true})]:[new src["a" /* EarthEngineLayer */]({id:'lines-raster',eeObject:lines,visParams:{color:'red'}}),new src["a" /* EarthEngineLayer */]({id:'points-raster',eeObject:points,visParams:{color:'black'}})];return/*#__PURE__*/react_default.a.createElement("div",{style:{position:'relative',height:'100%'}},/*#__PURE__*/react_default.a.createElement(deckgl["a" /* default */],{controller:true,initialViewState:INITIAL_VIEW_STATE,layers:layers},/*#__PURE__*/react_default.a.createElement(static_map_StaticMap,{reuseMaps:true,mapStyle:mapStyle,preventStyleDiffing:true,mapboxApiAccessToken:MAPBOX_TOKEN}),/*#__PURE__*/react_default.a.createElement(shared["a" /* GoogleLoginPane */],{loginProvider:this.loginProvider}),/*#__PURE__*/react_default.a.createElement(shared["c" /* InfoBox */],{title:"FeatureCollection"},"The",' ',/*#__PURE__*/react_default.a.createElement("a",{href:"https://developers.google.com/earth-engine/datasets/catalog/NOAA_NHC_HURDAT2_atlantic"},"Atlantic hurricane catalog"),' ',"displayed using an ",/*#__PURE__*/react_default.a.createElement("code",null,"ee.FeatureCollection")," object.",/*#__PURE__*/react_default.a.createElement("p",null,/*#__PURE__*/react_default.a.createElement("input",{type:"checkbox",defaultChecked:this.state.asVector,onClick:function onClick(){return _this2.setState(function(prevState){return{asVector:!prevState.asVector};});}}),"Render as vector data"))));};return App;}(react_default.a.Component);function renderToDOM(container){return Object(react_dom["render"])(/*#__PURE__*/react_default.a.createElement(app_App,null),container);}

/***/ }),

/***/ "IJIR":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__("BjK0");
var meta = __webpack_require__("N+BI").onFreeze;

__webpack_require__("939a")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "bNpn":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__("BjK0");

__webpack_require__("939a")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "jYz7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LagC");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pS08");
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("E5k/");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("R48M");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HQhv");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JHok");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("sc67");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 **/

function createDetectElementResize(nonce) {
  // Check `document` and `window` in case of server-side rendering
  var _window;

  if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = global;
  }

  var attachEvent = typeof document !== 'undefined' && document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };

      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);

      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }

      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;

          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };
    /* Detect CSS Animations support to detect element display/re-attach */


    var animation = false,
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = document.createElement('fakeelement');

      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }
    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles(doc) {
    if (!doc.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = doc.head || doc.getElementsByTagName('head')[0],
          style = doc.createElement('style');
      style.id = 'detectElementResize';
      style.type = 'text/css';

      if (nonce != null) {
        style.setAttribute('nonce', nonce);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) {
      element.attachEvent('onresize', fn);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;

        var elementStyle = _window.getComputedStyle(element);

        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }

        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement('div')).className = 'resize-triggers';
        element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);
        /* Listen for a css animation to detect element display/re-attach */

        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };

          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }

      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) {
      element.detachEvent('onresize', fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);

      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);

        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);

          element.__resizeTriggers__.__animationListener__ = null;
        }

        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {// Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var AutoSizer = function (_React$PureComponent) {
  inherits(AutoSizer, _React$PureComponent);

  function AutoSizer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, AutoSizer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = AutoSizer.__proto__ || Object.getPrototypeOf(AutoSizer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    }, _this._onResize = function () {
      var _this$props = _this.props,
          disableHeight = _this$props.disableHeight,
          disableWidth = _this$props.disableWidth,
          onResize = _this$props.onResize;

      if (_this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.
        var _height = _this._parentNode.offsetHeight || 0;

        var _width = _this._parentNode.offsetWidth || 0;

        var _style = window.getComputedStyle(_this._parentNode) || {};

        var paddingLeft = parseInt(_style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(_style.paddingRight, 10) || 0;
        var paddingTop = parseInt(_style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(_style.paddingBottom, 10) || 0;
        var newHeight = _height - paddingTop - paddingBottom;
        var newWidth = _width - paddingLeft - paddingRight;

        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: _height - paddingTop - paddingBottom,
            width: _width - paddingLeft - paddingRight
          });

          onResize({
            height: _height,
            width: _width
          });
        }
      }
    }, _this._setRef = function (autoSizer) {
      _this._autoSizer = autoSizer;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(AutoSizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var nonce = this.props.nonce;

      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        // Delay access of parentNode until mount.
        // This handles edge-cases where the component has already been unmounted before its ref has been set,
        // As well as libraries like react-lite which have a slightly different lifecycle.
        this._parentNode = this._autoSizer.parentNode; // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41

        this._detectElementResize = createDetectElementResize(nonce);

        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

        this._onResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disableHeight = _props.disableHeight,
          disableWidth = _props.disableWidth,
          style = _props.style;
      var _state = this.state,
          height = _state.height,
          width = _state.width; // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = {
        overflow: 'visible'
      };
      var childParams = {}; // Avoid rendering children before the initial measurements have been collected.
      // At best this would just be wasting cycles.

      var bailoutOnChildren = false;

      if (!disableHeight) {
        if (height === 0) {
          bailoutOnChildren = true;
        }

        outerStyle.height = 0;
        childParams.height = height;
      }

      if (!disableWidth) {
        if (width === 0) {
          bailoutOnChildren = true;
        }

        outerStyle.width = 0;
        childParams.width = width;
      }

      return Object(react__WEBPACK_IMPORTED_MODULE_7__["createElement"])('div', {
        className: className,
        ref: this._setRef,
        style: _extends({}, outerStyle, style)
      }, !bailoutOnChildren && children(childParams));
    }
  }]);
  return AutoSizer;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

AutoSizer.defaultProps = {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false,
  style: {}
};
/* harmony default export */ __webpack_exports__["a"] = (AutoSizer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "q/PY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__("t+fG")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "vozk":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__("BjK0");

__webpack_require__("939a")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "+VNo":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "+ZDr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("n7j8");

__webpack_require__("OeI1");

__webpack_require__("JHok");

__webpack_require__("sC2a");

var _interopRequireDefault = __webpack_require__("5NKs");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("uDP2"));

var _extends2 = _interopRequireDefault(__webpack_require__("j8BX"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("v06X"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("XEEL"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("0jh0"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _router = __webpack_require__("YwZP");

var _parsePath = __webpack_require__("cu4x");

exports.parsePath = _parsePath.parsePath;

function withPrefix(path) {
  return normalizePath([ true ? "" : undefined, path].join("/"));
}

function withAssetPrefix(path) {
  return [""].concat([path.replace(/^\//, "")]).join("/");
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes["default"].string,
  activeStyle: _propTypes["default"].object,
  partiallyActive: _propTypes["default"].bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

var GatsbyLink = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2["default"])({}, _this.props.style, {}, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;
    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react["default"].createElement(_router.Link, (0, _extends2["default"])({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react["default"].Component);

GatsbyLink.propTypes = (0, _extends2["default"])({}, NavLinkPropTypes, {
  onClick: _propTypes["default"].func,
  to: _propTypes["default"].string.isRequired,
  replace: _propTypes["default"].bool,
  state: _propTypes["default"].object
});

var showDeprecationWarning = function showDeprecationWarning(functionName, altFunctionName, version) {
  return console.warn("The \"" + functionName + "\" method is now deprecated and will be removed in Gatsby v" + version + ". Please use \"" + altFunctionName + "\" instead.");
};

var _default = _react["default"].forwardRef(function (props, ref) {
  return _react["default"].createElement(GatsbyLink, (0, _extends2["default"])({
    innerRef: ref
  }, props));
});

exports["default"] = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  showDeprecationWarning("push", "navigate", 3);

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  showDeprecationWarning("replace", "navigate", 3);

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  showDeprecationWarning("navigateTo", "navigate", 3);
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "+i7v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("5NKs");

exports.__esModule = true;
exports["default"] = scrollTop;

var _isWindow = _interopRequireDefault(__webpack_require__("8Y+z"));

function scrollTop(node, val) {
  var win = (0, _isWindow["default"])(node);
  if (val === undefined) return win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;
  if (win) win.scrollTo(val, 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop);else node.scrollLeft = val;
}

module.exports = exports["default"];

/***/ }),

/***/ "+iOX":
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "+wZX":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "/+AL":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("nONw");
var toObject = __webpack_require__("DFzH");
var IObject = __webpack_require__("U2V1");
var toLength = __webpack_require__("kiRH");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "0jh0":
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "13lr":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("qDzq");
var toIObject = __webpack_require__("5SQf");
var arrayIndexOf = __webpack_require__("Ar2q")(false);
var IE_PROTO = __webpack_require__("oMtz")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "16Xr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("nONw");
var isObject = __webpack_require__("BjK0");
var invoke = __webpack_require__("+wZX");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "1Llc":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "1a8y":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("BjK0");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "1dPr":
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__("P8UN");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "1fHE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return JSON.parse(value);
    } catch (e) {
      if (false) {}

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return {};
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      if (false) {}
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var locationKey = location.key || location.pathname;
    var stateKeyBase = "" + STATE_KEY_PREFIX + locationKey;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports["default"] = SessionStorage;

/***/ }),

/***/ "2mBY":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("13lr");
var enumBugKeys = __webpack_require__("U33C");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "3WpW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4dA+")('native-function-to-string', Function.toString);


/***/ }),

/***/ "444f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("5NKs");

exports.__esModule = true;
exports["default"] = exports.ScrollBehaviorContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("v06X"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("XEEL"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("0jh0"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _scrollBehavior = _interopRequireDefault(__webpack_require__("LHMV"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _history = __webpack_require__("9Xx/");

var _StateStorage = _interopRequireDefault(__webpack_require__("1fHE"));

var ScrollBehaviorContext = _react["default"].createContext();

exports.ScrollBehaviorContext = ScrollBehaviorContext;
var propTypes = {
  shouldUpdateScroll: _propTypes["default"].func,
  children: _propTypes["default"].element.isRequired,
  location: _propTypes["default"].object.isRequired
};

var ScrollContext = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(ScrollContext, _React$Component);

  function ScrollContext(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "shouldUpdateScroll", function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing scrollBehavior._stateStorage.


      return shouldUpdateScroll.call(_this.scrollBehavior, prevRouterProps, routerProps);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "registerElement", function (key, element, shouldUpdateScroll) {
      _this.scrollBehavior.registerElement(key, element, shouldUpdateScroll, _this.getRouterProps());
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unregisterElement", function (key) {
      _this.scrollBehavior.unregisterElement(key);
    });
    _this.scrollBehavior = new _scrollBehavior["default"]({
      addTransitionHook: _history.globalHistory.listen,
      stateStorage: new _StateStorage["default"](),
      getCurrentLocation: function getCurrentLocation() {
        return _this.props.location;
      },
      shouldUpdateScroll: _this.shouldUpdateScroll
    });
    return _this;
  }

  var _proto = ScrollContext.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var location = this.props.location;
    var prevLocation = prevProps.location;

    if (location === prevLocation) {
      return;
    }

    var prevRouterProps = {
      location: prevProps.location
    };
    this.scrollBehavior.updateScroll(prevRouterProps, {
      history: _history.globalHistory,
      location: location
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.scrollBehavior.stop();
  };

  _proto.getRouterProps = function getRouterProps() {
    var location = this.props.location;
    return {
      location: location,
      history: _history.globalHistory
    };
  };

  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement(ScrollBehaviorContext.Provider, {
      value: this
    }, _react["default"].Children.only(this.props.children));
  };

  return ScrollContext;
}(_react["default"].Component);

ScrollContext.propTypes = propTypes;
var _default = ScrollContext;
exports["default"] = _default;

/***/ }),

/***/ "4DPX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("emib");
var has = __webpack_require__("qDzq");
var DESCRIPTORS = __webpack_require__("QPJK");
var $export = __webpack_require__("P8UN");
var redefine = __webpack_require__("IYdN");
var META = __webpack_require__("N+BI").KEY;
var $fails = __webpack_require__("96qb");
var shared = __webpack_require__("4dA+");
var setToStringTag = __webpack_require__("dSuk");
var uid = __webpack_require__("UEZ0");
var wks = __webpack_require__("sOol");
var wksExt = __webpack_require__("PjVt");
var wksDefine = __webpack_require__("ovV4");
var enumKeys = __webpack_require__("m8CP");
var isArray = __webpack_require__("tuyV");
var anObject = __webpack_require__("1a8y");
var isObject = __webpack_require__("BjK0");
var toObject = __webpack_require__("DFzH");
var toIObject = __webpack_require__("5SQf");
var toPrimitive = __webpack_require__("kxs/");
var createDesc = __webpack_require__("pSXQ");
var _create = __webpack_require__("nsRs");
var gOPNExt = __webpack_require__("AfxU");
var $GOPD = __webpack_require__("Drra");
var $GOPS = __webpack_require__("lHo0");
var $DP = __webpack_require__("rjfK");
var $keys = __webpack_require__("2mBY");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("chL8").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("BnbX").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("939K")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("8wc8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "4dA+":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("Phdo");
var global = __webpack_require__("emib");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("939K") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5NKs":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "5SQf":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("U2V1");
var defined = __webpack_require__("ap2Z");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "5yr3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("AqHK");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("sc67");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__("pS08");

// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.es.js




//      
// An event handler can take an optional event argument
// and should not return a value
// An array of all currently registered event handlers for a type
// A map of event types and their corresponding event handlers.

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all) {
  all = all || Object.create(null);
  return {
    /**
     * Register an event handler for the given type.
     *
     * @param  {String} type	Type of event to listen for, or `"*"` for all events
     * @param  {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on: function on(type, handler) {
      (all[type] || (all[type] = [])).push(handler);
    },

    /**
     * Remove an event handler for the given type.
     *
     * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
     * @param  {Function} handler Handler function to remove
     * @memberOf mitt
     */
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    /**
     * Invoke all handlers for the given type.
     * If present, `"*"` handlers are invoked after type-matched handlers.
     *
     * @param {String} type  The event type to invoke
     * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit: function emit(type, evt) {
      (all[type] || []).slice().map(function (handler) {
        handler(evt);
      });
      (all['*'] || []).slice().map(function (handler) {
        handler(type, evt);
      });
    }
  };
}

/* harmony default export */ var mitt_es = (mitt);
// CONCATENATED MODULE: ./.cache/emitter.js
var emitter=mitt_es();/* harmony default export */ var _cache_emitter = __webpack_exports__["a"] = (emitter);

/***/ }),

/***/ "6DQo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

__webpack_require__("sC2a");

var warning = function warning() {};

if (false) {}

module.exports = warning;

/***/ }),

/***/ "6Ooe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ top_level_layout_Layout; });

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("m210");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("4DPX");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("YbXK");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("cFtU");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("pJf4");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("q8oJ");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("TAD1");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("rzGZ");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("Dq+y");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("8npG");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("E5k/");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__("TJpk");
var Helmet_default = /*#__PURE__*/__webpack_require__.n(Helmet);

// EXTERNAL MODULE: ./node_modules/react-responsive/dist/react-responsive.js
var react_responsive = __webpack_require__("s/Ur");
var react_responsive_default = /*#__PURE__*/__webpack_require__.n(react_responsive);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/website-config.jsx
var website_config = __webpack_require__("B5uF");

// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/SEO.jsx
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// TODO/ib - modify this component to work with ocular content
var SEO_SEO=/*#__PURE__*/function(_Component){_inheritsLoose(SEO,_Component);function SEO(){return _Component.apply(this,arguments)||this;}var _proto=SEO.prototype;_proto.render=function render(){var config=this.props;var _this$props=this.props,postNode=_this$props.postNode,postPath=_this$props.postPath,postSEO=_this$props.postSEO;var title;var description;var image;var postURL;if(postSEO){var postMeta=postNode.frontmatter;title=postMeta.title;description=postMeta.description?postMeta.description:postNode.excerpt;image=postMeta.cover;postURL=config.siteUrl+config.pathPrefix+postPath;}else{title=config.PROJECT_NAME;description=config.PROJECT_DESC;image=config.siteLogo;}var realPrefix=config.pathPrefix==='/'?'':config.pathPrefix;image=config.siteUrl+realPrefix+image;var blogURL=config.siteUrl+config.pathPrefix;var schemaOrgJSONLD=[{'@context':'http://schema.org','@type':'WebSite',url:blogURL,name:title,alternateName:config.siteTitleAlt?config.siteTitleAlt:''}];if(postSEO){schemaOrgJSONLD.push([{'@context':'http://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,item:{'@id':postURL,name:title,image:image}}]},{'@context':'http://schema.org','@type':'BlogPosting',url:blogURL,name:title,alternateName:config.siteTitleAlt?config.siteTitleAlt:'',headline:title,image:{'@type':'ImageObject',url:image},description:description}]);}return/*#__PURE__*/react_default.a.createElement(Helmet_default.a,null,/*#__PURE__*/react_default.a.createElement("meta",{name:"description",content:description}),/*#__PURE__*/react_default.a.createElement("meta",{name:"image",content:image}),/*#__PURE__*/react_default.a.createElement("script",{type:"application/ld+json"},JSON.stringify(schemaOrgJSONLD)),/*#__PURE__*/react_default.a.createElement("meta",{property:"og:url",content:postSEO?postURL:blogURL}),postSEO?/*#__PURE__*/react_default.a.createElement("meta",{property:"og:type",content:"article"}):null,/*#__PURE__*/react_default.a.createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react_default.a.createElement("meta",{property:"og:description",content:description}),/*#__PURE__*/react_default.a.createElement("meta",{property:"og:image",content:image}),/*#__PURE__*/react_default.a.createElement("meta",{property:"fb:app_id",content:config.siteFBAppID?config.siteFBAppID:''}),/*#__PURE__*/react_default.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/react_default.a.createElement("meta",{name:"twitter:creator",content:config.userTwitter?config.userTwitter:''}),/*#__PURE__*/react_default.a.createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/react_default.a.createElement("meta",{name:"twitter:description",content:description}),/*#__PURE__*/react_default.a.createElement("meta",{name:"twitter:image",content:image}));};return SEO;}(react["Component"]);/* harmony default export */ var components_SEO = (SEO_SEO);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/table-of-contents.jsx + 1 modules
var table_of_contents = __webpack_require__("kaKw");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/header.jsx
var header = __webpack_require__("Ljh3");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/header.component.jsx
var header_component = __webpack_require__("O7rn");

// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/docs-header.jsx
function docs_header_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/* eslint-disable react/no-array-index-key */ // Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// we are exposing 2 header components.
// 1 - DocsHeader, which will update the state of the top level layout.
//   we need to expose whether the menu is toggled or not because it could
//   affect how TOC is displayed in smaller screens.
// 2 - Header, which won't and just maintain its own state.
// both components are wrappers around ControlledHeader.
var docs_header_DocsHeader=/*#__PURE__*/function(_Component){docs_header_inheritsLoose(DocsHeader,_Component);function DocsHeader(props){var _this;_this=_Component.call(this,props)||this;// we need to know the number of links before render.
// this is not an ideal solution.
// some of the links which are hardcoded should come from configuration
// TODO - let's create the links server side, then pass them to the template as props.
_this.state={links:Object(header_component["b" /* generateHeaderLinks */])(props)};return _this;}var _proto=DocsHeader.prototype;_proto.renderHeader=function renderHeader(){var links=this.state.links;return/*#__PURE__*/react_default.a.createElement(header_component["a" /* default */],Object.assign({links:links},this.props));};_proto.render=function render(){return this.renderHeader();};return DocsHeader;}(react["Component"]);
// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/default-theme.js
/* harmony default export */ var default_theme = ({primary50:'#EDF3FE',primary100:'#D2E0FC',primary200:'#9CBCF8',primary300:'#548BF4',primary400:'#276EF1',primary500:'#174EB6',primary600:'#123D90',primary700:'#0C2960',negative50:'#FDF0EF',negative100:'#FADBD7',negative200:'#F4AFA7',negative300:'#EB7567',negative400:'#E54937',negative500:'#AE372A',negative600:'#892C21',negative700:'#5C1D16',warning50:'#FEF3EC',warning100:'#FBE2CF',warning200:'#F6BA8B',warning300:'#F19248',warning400:'#ED6F0E',warning500:'#B4540B',warning600:'#8E4308',warning700:'#5F2C06',positive50:'#EBF8F2',positive100:'#CDEDDE',positive200:'#88D3B0',positive300:'#43B982',positive400:'#07A35A',positive500:'#057C44',positive600:'#046236',positive700:'#034124',mono100:'#FFFFFF',mono200:'#F7F7F7',mono300:'#F0F0F0',mono400:'#E5E5E5',mono500:'#CCCCCC',mono600:'#B3B3B3',mono700:'#999999',mono800:'#666666',mono900:'#333333',mono1000:'#000000',primaryFontFamily:'"Uber Move", Helvetica, Arial, sans-serif'});
// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/styled/create-theme.js
function createTheme(primitives){return{breakpoints:{small:320,medium:600,large:1280},colors:{// Primary Palette
primary50:primitives.primary50,primary100:primitives.primary100,primary200:primitives.primary200,primary300:primitives.primary300,primary400:primitives.primary400,primary:primitives.primary400,primary500:primitives.primary500,primary600:primitives.primary600,primary700:primitives.primary700,// Negative Palette
negative50:primitives.negative50,negative100:primitives.negative100,negative200:primitives.negative200,negative300:primitives.negative300,negative400:primitives.negative400,negative:primitives.negative400,negative500:primitives.negative500,negative600:primitives.negative600,negative700:primitives.negative700,// Warning Palette
warning50:primitives.warning50,warning100:primitives.warning100,warning200:primitives.warning200,warning300:primitives.warning300,warning400:primitives.warning400,warning:primitives.warning400,warning500:primitives.warning500,warning600:primitives.warning600,warning700:primitives.warning700,// Positive Palette
positive50:primitives.positive50,positive100:primitives.positive100,positive200:primitives.positive200,positive300:primitives.positive300,positive400:primitives.positive400,positive:primitives.positive400,positive500:primitives.positive500,positive600:primitives.positive600,positive700:primitives.positive700,// Monochrome Palette
white:primitives.mono100,mono100:primitives.mono100,mono200:primitives.mono200,mono300:primitives.mono300,mono400:primitives.mono400,mono500:primitives.mono500,mono600:primitives.mono600,mono700:primitives.mono700,mono800:primitives.mono800,mono900:primitives.mono900,mono1000:primitives.mono1000,black:primitives.mono1000,// Semantic Colors
// Font Color
colorPrimary:primitives.mono1000,colorSecondary:primitives.mono800,// Background
background:primitives.mono100,backgroundAlt:primitives.mono100,backgroundInv:primitives.mono1000,// Foreground
foreground:primitives.mono1000,foregroundAlt:primitives.mono800,foregroundInv:primitives.mono100,// Borders
border:primitives.mono500,borderAlt:primitives.mono600,borderFocus:primitives.primary400,borderError:primitives.negative400,// Links
linkText:primitives.primary400,linkVisited:primitives.primary500,linkHover:primitives.primary600},typography:{font100:"normal 11px/16px "+primitives.primaryFontFamily,font200:"normal 12px/20px "+primitives.primaryFontFamily,font250:"bold 12px/20px "+primitives.primaryFontFamily,font300:"normal 14px/20px "+primitives.primaryFontFamily,font350:"bold 14px/20px "+primitives.primaryFontFamily,font400:"normal 16px/24px "+primitives.primaryFontFamily,font450:"bold 16px/24px "+primitives.primaryFontFamily,font500:"bold 20px/28px "+primitives.primaryFontFamily,font600:"bold 24px/36px "+primitives.primaryFontFamily,font700:"bold 32px/48px "+primitives.primaryFontFamily,font800:"bold 40px/56px "+primitives.primaryFontFamily,font900:"bold 52px/68px "+primitives.primaryFontFamily,font1000:"normal 72px/96px "+primitives.primaryFontFamily,font1100:"normal 96px/116px "+primitives.primaryFontFamily},sizing:{scale0:'2px',scale100:'4px',scale200:'6px',scale300:'8px',scale400:'10px',scale500:'12px',scale550:'14px',scale600:'16px',scale700:'20px',scale800:'24px',scale900:'32px',scale1000:'40px',scale1200:'48px',scale1400:'56px',scale1600:'64px',scale2400:'96px',scale3200:'128px',scale4800:'192px'},lighting:{shadow400:'0 1px 4px hsla(0, 0%, 0%, 0.16)',shadow500:'0 2px 8px hsla(0, 0%, 0%, 0.16)',shadow600:'0 4px 16px hsla(0, 0%, 0%, 0.16)',shadow700:'0 8px 24px hsla(0, 0%, 0%, 0.16)',overlay0:'inset 0 0 0 1000px hsla(0, 0%, 0%, 0)',overlay100:'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)',overlay200:'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.08)',overlay300:'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.12)',overlay400:'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.16)',overlay500:'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.2)',overlay600:'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.24)'},borders:{border100:'solid 1px hsla(0, 0%, 0%, 0.04)',border200:'solid 1px hsla(0, 0%, 0%, 0.08)',border300:'solid 1px hsla(0, 0%, 0%, 0.12)',border400:'solid 1px hsla(0, 0%, 0%, 0.16)',border500:'solid 1px hsla(0, 0%, 0%, 0.2)',border600:'solid 1px hsla(0, 0%, 0%, 0.24)',radius100:'2px',radius200:'4px',radius300:'8px',radius400:'12px',useRoundedCorners:true},animation:{timing100:'0.25s',timing400:'0.4s',timing700:'0.6s',easeOutCurve:'cubic-bezier(.2, .8, .4, 1)',easeInCurve:'cubic-bezier(.8, .2, .6, 1)',easeInOutCurve:'cubic-bezier(0.4, 0, 0.2, 1)'}};}
// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/styled/body.js
// top-level layoout
var BodyContainerFull=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"body__BodyContainerFull",componentId:"lvm4v2-0"})(["margin:0 auto;"]);// the problem the following is solving is what happens if the document is very long
// on a responsive device. If the user toggles the table of content, because the
// document is long, the TOC will be not visible (above the viewport).
// to address that, when the TOC is open, we are removing the document from the flow, so
// that the TOC will be visible. Now, there are several ways to do that, some of which
// introduce another problem - when closing the table of contents, we want the user to be
// back exactly where they were before they opened it, as opposed to back on the top.
// that's one way to approach this -
var BodyContainerToC=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"body__BodyContainerToC",componentId:"lvm4v2-1"})(["height:100%;width:100%;padding:"," 0 0 300px;transform:scaleY(1);opacity:1;@media screen and (max-width:","px){padding-left:0;order:2;transition:opacity 0.3s;transform:",";opacity:",";}"],function(props){return props.theme.sizing.scale1600;},function(props){return props.theme.breakpoints.medium;},function(props){return props.$isTocOpen||props.$isMenuOpen?'scaleY(0)':'scaleY(1)';},function(props){return props.$isTocOpen||props.$isMenuOpen?0:1;});var BodyContainerInner=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"body__BodyContainerInner",componentId:"lvm4v2-2"})(["height:100%;width:100%;position:relative;"]);var Body=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"body__Body",componentId:"lvm4v2-3"})(["height:100vh;"]);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/styled/header.jsx
var styled_header = __webpack_require__("zTvz");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/styled/toc.jsx + 1 modules
var toc = __webpack_require__("dx5X");

// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/templates/top-level-layout.jsx
function _createForOfIteratorHelperLoose(o){var i=0;if(typeof Symbol==="undefined"||o[Symbol.iterator]==null){if(Array.isArray(o)||(o=_unsupportedIterableToArray(o)))return function(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}i=o[Symbol.iterator]();return i.next.bind(i);}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function top_level_layout_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function _templateObject(){var data=_taggedTemplateLiteralLoose(["\n  body {\n    margin: 0;\n    overflow-x: hidden;\n  }\n  * {\n    box-sizing: border-box;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteralLoose(strings,raw){if(!raw){raw=strings.slice(0);}strings.raw=raw;return strings;}/* eslint-disable react/no-did-update-set-state */ // This is the top-level "Layout" component that doesn't get unmounted between
// page loads. This component is wrapped around the react component returned by
// each page by 'gatsby-plugin-layout'
var GlobalStyle=Object(styled_components_browser_esm["b" /* createGlobalStyle */])(_templateObject());// TODO/ib - restore footer
// import Footer from './footer';
function ResponsiveHeader(props){var HeaderComponent=props.isDocHeader?docs_header_DocsHeader:header["a" /* default */];return/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement(react_responsive_default.a,{maxWidth:599},/*#__PURE__*/react_default.a.createElement(HeaderComponent,Object.assign({},props,{isSmallScreen:true}))),/*#__PURE__*/react_default.a.createElement(react_responsive_default.a,{minWidth:600},/*#__PURE__*/react_default.a.createElement(HeaderComponent,props)));}var top_level_layout_Layout=/*#__PURE__*/function(_React$Component){top_level_layout_inheritsLoose(Layout,_React$Component);function Layout(props){var _this;_this=_React$Component.call(this,props)||this;_this.state={isMenuOpen:false,isTocOpen:false};_this.toggleMenu=_this.toggleMenu.bind(_assertThisInitialized(_this));_this.toggleToc=_this.toggleToc.bind(_assertThisInitialized(_this));return _this;}var _proto=Layout.prototype;_proto.componentDidUpdate=function componentDidUpdate(prevProps){if(prevProps.pageContext.slug!==this.props.pageContext.slug){this.setState({isTocOpen:false,isMenuOpen:false});}};_proto.getTheme=function getTheme(){var config=this.props.config;var primitives=Object.assign({},default_theme);if(config.THEME_OVERRIDES){Object.assign(primitives,JSON.parse(config.THEME_OVERRIDES));}return createTheme(primitives);};_proto.toggleMenu=function toggleMenu(){var isMenuOpen=this.state.isMenuOpen;this.setState({isMenuOpen:!isMenuOpen});};_proto.toggleToc=function toggleToc(){var isTocOpen=this.state.isTocOpen;this.setState({isTocOpen:!isTocOpen});};_proto.renderBodyWithTOC=function renderBodyWithTOC(config,tableOfContents){var children=this.props.children;var _this$state=this.state,isMenuOpen=_this$state.isMenuOpen,isTocOpen=_this$state.isTocOpen;// first div is to avoid the BodyGrid div className to be overwritten
return/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement(Body,null,/*#__PURE__*/react_default.a.createElement(styled_header["d" /* HeaderContainer */],null,/*#__PURE__*/react_default.a.createElement(ResponsiveHeader,{config:config,isMenuOpen:isMenuOpen,toggleMenu:this.toggleMenu,isDocHeader:true})),/*#__PURE__*/react_default.a.createElement(toc["g" /* TocToggle */],{toggleToc:this.toggleToc,$isMenuOpen:isMenuOpen,$isTocOpen:isTocOpen}),/*#__PURE__*/react_default.a.createElement(toc["b" /* TocContainer */],{$isTocOpen:isTocOpen},this.renderTOC(config,tableOfContents)),/*#__PURE__*/react_default.a.createElement(BodyContainerToC,{$isTocOpen:isTocOpen,$isMenuOpen:isMenuOpen},children)));};_proto.renderBodyFull=function renderBodyFull(config){var children=this.props.children;var isMenuOpen=this.state.isMenuOpen;return/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement(styled_header["d" /* HeaderContainer */],null,/*#__PURE__*/react_default.a.createElement(ResponsiveHeader,{config:config,isMenuOpen:isMenuOpen,toggleMenu:this.toggleMenu})),/*#__PURE__*/react_default.a.createElement(BodyContainerFull,null,children));};_proto.renderTOC=function renderTOC(config,tableOfContents){var pageContext=this.props.pageContext;switch(pageContext.toc){case'docs':return/*#__PURE__*/react_default.a.createElement(table_of_contents["a" /* default */],{chapters:tableOfContents.chapters,slug:pageContext.slug});case'examples':{var EXAMPLES=config.EXAMPLES;var examplesTOC=[{title:'Examples',entries:[]}];// eslint-disable-next-line
for(var _iterator=_createForOfIteratorHelperLoose(EXAMPLES),_step;!(_step=_iterator()).done;){var example=_step.value;var exampleEntry=Object.assign({entry:example.title},example);examplesTOC[0].entries.push(exampleEntry);}return/*#__PURE__*/react_default.a.createElement(table_of_contents["a" /* default */],{chapters:examplesTOC,firstItemIsExpanded:true,slug:pageContext.slug});}default:console.warn("Unknown toc type "+pageContext.toc);// eslint-disable-line
return null;}};_proto.render=function render(){// Since gatsby's StaticQueries can't run in a plugin, we rely on the app website's
// Layout wrapper component to query for us and pass in the data.
var _this$props=this.props,pageContext=_this$props.pageContext,config=_this$props.config,tableOfContents=_this$props.tableOfContents,allMarkdown=_this$props.allMarkdown;var theme=this.getTheme();return/*#__PURE__*/react_default.a.createElement(website_config["a" /* WebsiteConfigProvider */],{value:{config:config,theme:theme,tableOfContents:tableOfContents,allMarkdown:allMarkdown}},/*#__PURE__*/react_default.a.createElement(GlobalStyle,null),/*#__PURE__*/react_default.a.createElement(styled_components_browser_esm["a" /* ThemeProvider */],{theme:theme},/*#__PURE__*/react_default.a.createElement("div",null,allMarkdown&&/*#__PURE__*/react_default.a.createElement(components_SEO,{postEdges:allMarkdown}),/*#__PURE__*/react_default.a.createElement(Helmet_default.a,null,/*#__PURE__*/react_default.a.createElement("title",null,config.PROJECT_NAME),config.STYLESHEETS.map(function(url,i){url=url.startsWith('http')?url:Object(gatsby_browser_entry["c" /* withPrefix */])(url);return/*#__PURE__*/react_default.a.createElement("link",{key:i,rel:"stylesheet",href:url,type:"text/css"});}),/*#__PURE__*/react_default.a.createElement("link",{rel:"icon",type:"img/ico",href:"favicon.ico"})),pageContext.toc?this.renderBodyWithTOC(config,tableOfContents):this.renderBodyFull(config))));};return Layout;}(react_default.a.Component);

/***/ }),

/***/ "6PSD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("rjfK").f;
var create = __webpack_require__("nsRs");
var redefineAll = __webpack_require__("rj/q");
var ctx = __webpack_require__("ot9L");
var anInstance = __webpack_require__("xa9o");
var forOf = __webpack_require__("yde8");
var $iterDefine = __webpack_require__("ZFV6");
var step = __webpack_require__("xlXC");
var setSpecies = __webpack_require__("to/b");
var DESCRIPTORS = __webpack_require__("QPJK");
var fastKey = __webpack_require__("N+BI").fastKey;
var validate = __webpack_require__("O1i0");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "6kNP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("939K");
var global = __webpack_require__("emib");
var ctx = __webpack_require__("ot9L");
var classof = __webpack_require__("aHWV");
var $export = __webpack_require__("P8UN");
var isObject = __webpack_require__("BjK0");
var aFunction = __webpack_require__("nONw");
var anInstance = __webpack_require__("xa9o");
var forOf = __webpack_require__("yde8");
var speciesConstructor = __webpack_require__("Ioy3");
var task = __webpack_require__("Tgxb").set;
var microtask = __webpack_require__("jJtK")();
var newPromiseCapabilityModule = __webpack_require__("WfYH");
var perform = __webpack_require__("JWvD");
var userAgent = __webpack_require__("CL53");
var promiseResolve = __webpack_require__("Vce4");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("sOol")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("rj/q")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("dSuk")($Promise, PROMISE);
__webpack_require__("to/b")(PROMISE);
Wrapper = __webpack_require__("Phdo")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("vUMq")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "7hJ6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("5NKs");

var _ScrollBehaviorContext = _interopRequireDefault(__webpack_require__("444f"));

var _ScrollContainer = _interopRequireDefault(__webpack_require__("IVHb"));

exports.ScrollContainer = _ScrollContainer["default"];
exports.ScrollContext = _ScrollBehaviorContext["default"];

/***/ }),

/***/ "8+s/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("sc67");

__webpack_require__("AqHK");

__webpack_require__("pJf4");

__webpack_require__("pS08");

__webpack_require__("R48M");

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = __webpack_require__("q1tI");

var React__default = _interopDefault(React);

var shallowEqual = _interopDefault(__webpack_require__("Gytx"));

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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = /*#__PURE__*/function (_Component) {
      _inheritsLoose(SideEffect, _Component);

      function SideEffect() {
        return _Component.apply(this, arguments) || this;
      } // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it


      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      _proto.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;

/***/ }),

/***/ "83Ih":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("AqcI");
var redefine = __webpack_require__("IYdN");
var hide = __webpack_require__("8wc8");
var fails = __webpack_require__("96qb");
var defined = __webpack_require__("ap2Z");
var wks = __webpack_require__("sOol");
var regexpExec = __webpack_require__("veur");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "8Y+z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = getWindow;

function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}

module.exports = exports["default"];

/***/ }),

/***/ "8npG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__("aHWV");
var test = {};
test[__webpack_require__("sOol")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__("IYdN")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "8oxB":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
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
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
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

  while (len) {
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
}; // v8 likes predictible objects


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

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "8wc8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("rjfK");
var createDesc = __webpack_require__("pSXQ");
module.exports = __webpack_require__("QPJK") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "939K":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "939a":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("P8UN");
var core = __webpack_require__("Phdo");
var fails = __webpack_require__("96qb");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "94Pd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("emib");
var $export = __webpack_require__("P8UN");
var redefine = __webpack_require__("IYdN");
var redefineAll = __webpack_require__("rj/q");
var meta = __webpack_require__("N+BI");
var forOf = __webpack_require__("yde8");
var anInstance = __webpack_require__("xa9o");
var isObject = __webpack_require__("BjK0");
var fails = __webpack_require__("96qb");
var $iterDetect = __webpack_require__("vUMq");
var setToStringTag = __webpack_require__("dSuk");
var inheritIfRequired = __webpack_require__("TUPI");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "94VI":
/***/ (function(module, exports) {

exports.polyfill=function(Component){return Component;};

/***/ }),

/***/ "96qb":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "9IMR":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("1a8y");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "9Xx/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalHistory", function() { return globalHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return navigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHistory", function() { return createHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemorySource", function() { return createMemorySource; });
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HQhv");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sc67");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JHok");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6kNP");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8npG");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1dPr");
/* harmony import */ var core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("sC2a");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("OeI1");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("sPse");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("E5k/");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_9__);











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

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;

  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;

  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({
          location: location,
          action: "POP"
        });
      };

      source.addEventListener("popstate", popstateListener);
      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, {
          key: Date.now() + ""
        }); // try...catch iOS Safari limits to 100 pushState calls

        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({
          location: location,
          action: "PUSH"
        });
      });
      return transition;
    }
  };
}; ////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native


var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];
  return {
    get location() {
      return stack[index];
    },

    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},
    history: {
      get entries() {
        return stack;
      },

      get index() {
        return index;
      },

      get state() {
        return states[index];
      },

      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({
          pathname: pathname,
          search: search.length ? "?" + search : search
        });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = {
          pathname: pathname,
          search: search
        };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
}; ////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history


var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);

var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate; ////////////////////////////////////////////////////////////////////////////////



/***/ }),

/***/ "9ZhD":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__("P8UN");
var _isFinite = __webpack_require__("emib").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "9uj6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ var memoize_browser_esm = (memoize);
// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize_browser_esm(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);
/* harmony default export */ var is_prop_valid_browser_esm = __webpack_exports__["a"] = (index);

/***/ }),

/***/ "AfxU":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("5SQf");
var gOPN = __webpack_require__("chL8").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "AqHK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("P8UN");
var $map = __webpack_require__("Wadk")(1);

$export($export.P + $export.F * !__webpack_require__("h/qr")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "AqcI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("veur");
__webpack_require__("P8UN")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "Ar2q":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("5SQf");
var toLength = __webpack_require__("kiRH");
var toAbsoluteIndex = __webpack_require__("dTG6");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "B5uF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteConfigProvider; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("E5k/");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Using React context to share common query data with all pages.
// Per recommendations in
// https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
// Context.js
var defaultContextValue={initialized:false,config:{},tableOfContents:null,theme:{},// For passing data upwards
data:{},set:function set(){}};var _React$createContext=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(defaultContextValue),Provider=_React$createContext.Provider,Consumer=_React$createContext.Consumer;var WebsiteConfigProvider=/*#__PURE__*/function(_React$Component){_inheritsLoose(WebsiteConfigProvider,_React$Component);function WebsiteConfigProvider(props){var _this;_this=_React$Component.call(this,props)||this;_this.setData=_this.setData.bind(_assertThisInitialized(_this));_this.state=Object.assign(Object.assign(Object.assign({},defaultContextValue),props.value),{},{set:_this.setData});return _this;}var _proto=WebsiteConfigProvider.prototype;_proto.setData=function setData(newData){this.setState(function(state){return{data:Object.assign(Object.assign({},state.data),newData)};});};_proto.render=function render(){var children=this.props.children;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Provider,{value:this.state},children);};return WebsiteConfigProvider;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);/* harmony default export */ __webpack_exports__["b"] = (Consumer);

/***/ }),

/***/ "BjK0":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "BnbX":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "Bp9Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "BuzY":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("m+kh");
var ITERATOR = __webpack_require__("sOol")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "C9fy":
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__("IYdN")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "CCE/":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "CL53":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("emib");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "CtJk":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Sc3u")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "DFzH":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("ap2Z");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "Dq+y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("Dq1/");
var step = __webpack_require__("xlXC");
var Iterators = __webpack_require__("m+kh");
var toIObject = __webpack_require__("5SQf");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("ZFV6")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "Dq1/":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("sOol")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("8wc8")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "DrhF":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__("BjK0");
var meta = __webpack_require__("N+BI").onFreeze;

__webpack_require__("939a")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "Drra":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("BnbX");
var createDesc = __webpack_require__("pSXQ");
var toIObject = __webpack_require__("5SQf");
var toPrimitive = __webpack_require__("kxs/");
var has = __webpack_require__("qDzq");
var IE8_DOM_DEFINE = __webpack_require__("KEMg");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("QPJK") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "E5k/":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("P8UN");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("k5Iv") });


/***/ }),

/***/ "ECyS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: concatArrays, merge

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("rzGZ");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("Dq+y");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("8npG");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("Ggvi");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("gu/5");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("eoYm");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.reduce.js
var es6_array_reduce = __webpack_require__("U6Bt");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("4DPX");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("JHok");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("R48M");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("pJf4");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("q8oJ");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__("C9fy");

// CONCATENATED MODULE: ./node_modules/is-what/dist/index.esm.js





/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
  return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */


function isUndefined(payload) {
  return getType(payload) === 'Undefined';
}
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */


function isNull(payload) {
  return getType(payload) === 'Null';
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */


function isPlainObject(payload) {
  if (getType(payload) !== 'Object') return false;
  return payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype;
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */


function isObject(payload) {
  return isPlainObject(payload);
}
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */


function isAnyObject(payload) {
  return getType(payload) === 'Object';
}
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */


function isObjectLike(payload) {
  return isAnyObject(payload);
}
/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */


function isFunction(payload) {
  return getType(payload) === 'Function';
}
/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */


function isArray(payload) {
  return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */


function isString(payload) {
  return getType(payload) === 'String';
}
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */


function isFullString(payload) {
  return isString(payload) && payload !== '';
}
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */


function isEmptyString(payload) {
  return payload === '';
}
/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */


function isNumber(payload) {
  return getType(payload) === 'Number' && !isNaN(payload);
}
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */


function isBoolean(payload) {
  return getType(payload) === 'Boolean';
}
/**
 * Returns whether the payload is a regular expression (RegExp)
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */


function isRegExp(payload) {
  return getType(payload) === 'RegExp';
}
/**
 * Returns whether the payload is a Map
 *
 * @param {*} payload
 * @returns {payload is Map}
 */


function isMap(payload) {
  return getType(payload) === 'Map';
}
/**
 * Returns whether the payload is a WeakMap
 *
 * @param {*} payload
 * @returns {payload is WeakMap}
 */


function isWeakMap(payload) {
  return getType(payload) === 'WeakMap';
}
/**
 * Returns whether the payload is a Set
 *
 * @param {*} payload
 * @returns {payload is Set}
 */


function isSet(payload) {
  return getType(payload) === 'Set';
}
/**
 * Returns whether the payload is a WeakSet
 *
 * @param {*} payload
 * @returns {payload is WeakSet}
 */


function isWeakSet(payload) {
  return getType(payload) === 'WeakSet';
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */


function isSymbol(payload) {
  return getType(payload) === 'Symbol';
}
/**
 * Returns whether the payload is a Date, and that the date is valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */


function isDate(payload) {
  return getType(payload) === 'Date' && !isNaN(payload);
}
/**
 * Returns whether the payload is a Blob
 *
 * @param {*} payload
 * @returns {payload is Blob}
 */


function isBlob(payload) {
  return getType(payload) === 'Blob';
}
/**
 * Returns whether the payload is a File
 *
 * @param {*} payload
 * @returns {payload is File}
 */


function isFile(payload) {
  return getType(payload) === 'File';
}
/**
 * Returns whether the payload is a Promise
 *
 * @param {*} payload
 * @returns {payload is Promise}
 */


function isPromise(payload) {
  return getType(payload) === 'Promise';
}
/**
 * Returns whether the payload is an Error
 *
 * @param {*} payload
 * @returns {payload is Error}
 */


function isError(payload) {
  return getType(payload) === 'Error';
}
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */


function isPrimitive(payload) {
  return isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
}
/**
 * Returns true whether the payload is null or undefined
 *
 * @param {*} payload
 * @returns {(payload is null | undefined)}
 */


function isNullOrUndefined(payload) {
  return isNull(payload) || isUndefined(payload);
}
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */


function isType(payload, type) {
  if (!(type instanceof Function)) {
    throw new TypeError('Type must be a function');
  }

  if (!Object.prototype.hasOwnProperty.call(type, 'prototype')) {
    throw new TypeError('Type is not a class');
  } // Classes usually have names (as functions usually have names)


  var name = type.name;
  return getType(payload) === name || Boolean(payload && payload.constructor === type);
}


// CONCATENATED MODULE: ./node_modules/merge-anything/dist/index.esm.js











/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}

function assignProp(carry, key, newVal, originalObject) {
  var propType = originalObject.propertyIsEnumerable(key) ? 'enumerable' : 'nonenumerable';
  if (propType === 'enumerable') carry[key] = newVal;

  if (propType === 'nonenumerable') {
    Object.defineProperty(carry, key, {
      value: newVal,
      enumerable: false,
      writable: true,
      configurable: true
    });
  }
}

function mergeRecursively(origin, newComer, extensions) {
  // work directly on newComer if its not an object
  if (!isPlainObject(newComer)) {
    // extend merge rules
    if (extensions && isArray(extensions)) {
      extensions.forEach(function (extend) {
        newComer = extend(origin, newComer);
      });
    }

    return newComer;
  } // define newObject to merge all values upon


  var newObject = {};

  if (isPlainObject(origin)) {
    var props_1 = Object.getOwnPropertyNames(origin);
    var symbols_1 = Object.getOwnPropertySymbols(origin);
    newObject = __spreadArrays(props_1, symbols_1).reduce(function (carry, key) {
      // @ts-ignore
      var targetVal = origin[key];

      if (!isSymbol(key) && !Object.getOwnPropertyNames(newComer).includes(key) || isSymbol(key) && !Object.getOwnPropertySymbols(newComer).includes(key)) {
        assignProp(carry, key, targetVal, origin);
      }

      return carry;
    }, {});
  }

  var props = Object.getOwnPropertyNames(newComer);
  var symbols = Object.getOwnPropertySymbols(newComer);

  var result = __spreadArrays(props, symbols).reduce(function (carry, key) {
    // re-define the origin and newComer as targetVal and newVal
    var newVal = newComer[key];
    var targetVal = isPlainObject(origin) ? // @ts-ignore
    origin[key] : undefined; // extend merge rules

    if (extensions && isArray(extensions)) {
      extensions.forEach(function (extend) {
        newVal = extend(targetVal, newVal);
      });
    } // When newVal is an object do the merge recursively


    if (targetVal !== undefined && isPlainObject(newVal)) {
      newVal = mergeRecursively(targetVal, newVal, extensions);
    }

    assignProp(carry, key, newVal, newComer);
    return carry;
  }, newObject);

  return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */


function merge(origin) {
  var newComers = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    newComers[_i - 1] = arguments[_i];
  }

  var extensions = null;
  var base = origin;

  if (isPlainObject(origin) && origin.extensions && Object.keys(origin).length === 1) {
    base = {};
    extensions = origin.extensions;
  }

  return newComers.reduce(function (result, newComer) {
    return mergeRecursively(result, newComer, extensions);
  }, base);
}

function concatArrays(originVal, newVal) {
  if (isArray(originVal) && isArray(newVal)) {
    // concat logic
    return originVal.concat(newVal);
  }

  return newVal; // always return newVal as fallback!!
}

/* harmony default export */ var index_esm = __webpack_exports__["a"] = (merge);


/***/ }),

/***/ "EU/P":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("P8UN");
var defined = __webpack_require__("ap2Z");
var fails = __webpack_require__("96qb");
var spaces = __webpack_require__("+VNo");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "EvL4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "onClientEntry", function() { return /* binding */ onClientEntry; });
__webpack_require__.d(__webpack_exports__, "wrapPageElement", function() { return /* reexport */ wrapPage; });

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__("pS08");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("pJf4");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("sC2a");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.trim.js
var es6_string_trim = __webpack_require__("HXzo");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("HQhv");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.typed.uint8-array.js
var es6_typed_uint8_array = __webpack_require__("CtJk");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("6kNP");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("rzGZ");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("Dq+y");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__("MIFh");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("JHok");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("AqHK");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("q8oJ");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__("C9fy");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("8npG");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("sc67");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.typed.data-view.js
var es6_typed_data_view = __webpack_require__("t+I+");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("m210");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("4DPX");

// CONCATENATED MODULE: ./node_modules/whatwg-fetch/fetch.js



















var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob: 'FileReader' in self && 'Blob' in self && function () {
    try {
      new Blob();
      return true;
    } catch (e) {
      return false;
    }
  }(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
};

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj);
}

if (support.arrayBuffer) {
  var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

  var isArrayBufferView = ArrayBuffer.isView || function (obj) {
    return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
  };
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name);
  }

  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name');
  }

  return name.toLowerCase();
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value);
  }

  return value;
} // Build a destructive iterator for the value list


function iteratorFor(items) {
  var iterator = {
    next: function next() {
      var value = items.shift();
      return {
        done: value === undefined,
        value: value
      };
    }
  };

  if (support.iterable) {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}

function Headers(headers) {
  this.map = {};

  if (headers instanceof Headers) {
    headers.forEach(function (value, name) {
      this.append(name, value);
    }, this);
  } else if (Array.isArray(headers)) {
    headers.forEach(function (header) {
      this.append(header[0], header[1]);
    }, this);
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function (name) {
      this.append(name, headers[name]);
    }, this);
  }
}

Headers.prototype.append = function (name, value) {
  name = normalizeName(name);
  value = normalizeValue(value);
  var oldValue = this.map[name];
  this.map[name] = oldValue ? oldValue + ', ' + value : value;
};

Headers.prototype['delete'] = function (name) {
  delete this.map[normalizeName(name)];
};

Headers.prototype.get = function (name) {
  name = normalizeName(name);
  return this.has(name) ? this.map[name] : null;
};

Headers.prototype.has = function (name) {
  return this.map.hasOwnProperty(normalizeName(name));
};

Headers.prototype.set = function (name, value) {
  this.map[normalizeName(name)] = normalizeValue(value);
};

Headers.prototype.forEach = function (callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this);
    }
  }
};

Headers.prototype.keys = function () {
  var items = [];
  this.forEach(function (value, name) {
    items.push(name);
  });
  return iteratorFor(items);
};

Headers.prototype.values = function () {
  var items = [];
  this.forEach(function (value) {
    items.push(value);
  });
  return iteratorFor(items);
};

Headers.prototype.entries = function () {
  var items = [];
  this.forEach(function (value, name) {
    items.push([name, value]);
  });
  return iteratorFor(items);
};

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'));
  }

  body.bodyUsed = true;
}

function fileReaderReady(reader) {
  return new Promise(function (resolve, reject) {
    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function () {
      reject(reader.error);
    };
  });
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsArrayBuffer(blob);
  return promise;
}

function readBlobAsText(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsText(blob);
  return promise;
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf);
  var chars = new Array(view.length);

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i]);
  }

  return chars.join('');
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0);
  } else {
    var view = new Uint8Array(buf.byteLength);
    view.set(new Uint8Array(buf));
    return view.buffer;
  }
}

function Body() {
  this.bodyUsed = false;

  this._initBody = function (body) {
    this._bodyInit = body;

    if (!body) {
      this._bodyText = '';
    } else if (typeof body === 'string') {
      this._bodyText = body;
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body;
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body;
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString();
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

      this._bodyInit = new Blob([this._bodyArrayBuffer]);
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body);
    } else {
      this._bodyText = body = Object.prototype.toString.call(body);
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8');
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type);
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
      }
    }
  };

  if (support.blob) {
    this.blob = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob');
      } else {
        return Promise.resolve(new Blob([this._bodyText]));
      }
    };

    this.arrayBuffer = function () {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
      } else {
        return this.blob().then(readBlobAsArrayBuffer);
      }
    };
  }

  this.text = function () {
    var rejected = consumed(this);

    if (rejected) {
      return rejected;
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob);
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text');
    } else {
      return Promise.resolve(this._bodyText);
    }
  };

  if (support.formData) {
    this.formData = function () {
      return this.text().then(decode);
    };
  }

  this.json = function () {
    return this.text().then(JSON.parse);
  };

  return this;
} // HTTP methods whose capitalization should be normalized


var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

function normalizeMethod(method) {
  var upcased = method.toUpperCase();
  return methods.indexOf(upcased) > -1 ? upcased : method;
}

function Request(input, options) {
  options = options || {};
  var body = options.body;

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read');
    }

    this.url = input.url;
    this.credentials = input.credentials;

    if (!options.headers) {
      this.headers = new Headers(input.headers);
    }

    this.method = input.method;
    this.mode = input.mode;
    this.signal = input.signal;

    if (!body && input._bodyInit != null) {
      body = input._bodyInit;
      input.bodyUsed = true;
    }
  } else {
    this.url = String(input);
  }

  this.credentials = options.credentials || this.credentials || 'same-origin';

  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers);
  }

  this.method = normalizeMethod(options.method || this.method || 'GET');
  this.mode = options.mode || this.mode || null;
  this.signal = options.signal || this.signal;
  this.referrer = null;

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests');
  }

  this._initBody(body);
}

Request.prototype.clone = function () {
  return new Request(this, {
    body: this._bodyInit
  });
};

function decode(body) {
  var form = new FormData();
  body.trim().split('&').forEach(function (bytes) {
    if (bytes) {
      var split = bytes.split('=');
      var name = split.shift().replace(/\+/g, ' ');
      var value = split.join('=').replace(/\+/g, ' ');
      form.append(decodeURIComponent(name), decodeURIComponent(value));
    }
  });
  return form;
}

function parseHeaders(rawHeaders) {
  var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2

  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
  preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
    var parts = line.split(':');
    var key = parts.shift().trim();

    if (key) {
      var value = parts.join(':').trim();
      headers.append(key, value);
    }
  });
  return headers;
}

Body.call(Request.prototype);
function Response(bodyInit, options) {
  if (!options) {
    options = {};
  }

  this.type = 'default';
  this.status = options.status === undefined ? 200 : options.status;
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = 'statusText' in options ? options.statusText : 'OK';
  this.headers = new Headers(options.headers);
  this.url = options.url || '';

  this._initBody(bodyInit);
}
Body.call(Response.prototype);

Response.prototype.clone = function () {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  });
};

Response.error = function () {
  var response = new Response(null, {
    status: 0,
    statusText: ''
  });
  response.type = 'error';
  return response;
};

var redirectStatuses = [301, 302, 303, 307, 308];

Response.redirect = function (url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code');
  }

  return new Response(null, {
    status: status,
    headers: {
      location: url
    }
  });
};

var DOMException = self.DOMException;

try {
  new DOMException();
} catch (err) {
  DOMException = function DOMException(message, name) {
    this.message = message;
    this.name = name;
    var error = Error(message);
    this.stack = error.stack;
  };

  DOMException.prototype = Object.create(Error.prototype);
  DOMException.prototype.constructor = DOMException;
}

function fetch(input, init) {
  return new Promise(function (resolve, reject) {
    var request = new Request(input, init);

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'));
    }

    var xhr = new XMLHttpRequest();

    function abortXhr() {
      xhr.abort();
    }

    xhr.onload = function () {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      };
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
      var body = 'response' in xhr ? xhr.response : xhr.responseText;
      resolve(new Response(body, options));
    };

    xhr.onerror = function () {
      reject(new TypeError('Network request failed'));
    };

    xhr.ontimeout = function () {
      reject(new TypeError('Network request failed'));
    };

    xhr.onabort = function () {
      reject(new DOMException('Aborted', 'AbortError'));
    };

    xhr.open(request.method, request.url, true);

    if (request.credentials === 'include') {
      xhr.withCredentials = true;
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false;
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob';
    }

    request.headers.forEach(function (value, name) {
      xhr.setRequestHeader(name, value);
    });

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr);

      xhr.onreadystatechange = function () {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr);
        }
      };
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
  });
}
fetch.polyfill = true;

if (!self.fetch) {
  self.fetch = fetch;
  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;
}
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("E5k/");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./public/static/d/2642918667.json
var _2642918667 = __webpack_require__("nGNX");

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/site-query.jsx
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// This component contains the StaticQuery needed to provide data for the layout components.
// These layout components will then pass some of that information down to the rest of the site
// ie to the table of content, header, etc.
// because this is a StaticQuery it needs to be in the local tree so that its graphQl can be
// run by gatsby. Rather, a file of the same name must have the same query in the local tree.
// During the init process, ocular copies this file over to the local tree.
// WARNING: DO NOT MODIFY THIS FILE MANUALLY IT WILL BE OVERWRITTEN.
// All common metadata, table-of-contents etc are queried here and put in React context
var QUERY="2642918667";// The Layout instance is shared between pages. It queries common, static data
// and makes it available on React context
var site_query_SiteQuery=/*#__PURE__*/function(_React$Component){_inheritsLoose(SiteQuery,_React$Component);function SiteQuery(){return _React$Component.apply(this,arguments)||this;}var _proto=SiteQuery.prototype;_proto.render=function render(){var children=this.props.children;return/*#__PURE__*/react_default.a.createElement(gatsby_browser_entry["b" /* StaticQuery */],{query:QUERY,render:children,data:_2642918667});};return SiteQuery;}(react_default.a.Component);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/templates/top-level-layout.jsx + 5 modules
var top_level_layout = __webpack_require__("6Ooe");

// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/wrap-page.jsx
// Effectively does the same job as `gatsby-layout-plugin`
// See https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-layout
//
// By wrapping pages this way the top-level layout component does not get unmounted
// between page changes
// This is the top-level "Layout" component that doesn't get unmounted between
// page loads. This component is wrapped around the react component returned by
// each page using the gatsby browser/SSR `wrapPage` callback.
// The Layout instance is shared between pages. It queries common, static data
// and makes it available on React context
function wrapPage(_ref){var element=_ref.element,props=_ref.props;var onQueryComplete=function onQueryComplete(data){var config=data.site.siteMetadata.config,tableOfContents=data.tableOfContents,allMarkdown=data.allMarkdown;// console.log('StaticQuery result', config, tableOfContents, allMarkdown);
return/*#__PURE__*/react_default.a.createElement(top_level_layout["a" /* default */],Object.assign({},props,{config:config,tableOfContents:tableOfContents,allMarkdown:allMarkdown}),element);};return/*#__PURE__*/react_default.a.createElement(site_query_SiteQuery,null,onQueryComplete);}
// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/gatsby-browser.js
// ie 11 polyfill
function onClientEntry(){console.log('gatsby-theme-ocular loaded');// eslint-disable-line
}

/***/ }),

/***/ "Fgx0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("rjfK");
var createDesc = __webpack_require__("pSXQ");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "Ftjc":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("BjK0");
var anObject = __webpack_require__("1a8y");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("ot9L")(Function.call, __webpack_require__("Drra").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "Ggvi":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("DFzH");
var $keys = __webpack_require__("2mBY");

__webpack_require__("939a")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "Gytx":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("n7j8");

__webpack_require__("rzGZ");

__webpack_require__("Dq+y");

__webpack_require__("8npG");

__webpack_require__("Ggvi");

//
module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }

  return true;
};

/***/ }),

/***/ "HQhv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("mhTz");
var anObject = __webpack_require__("1a8y");
var speciesConstructor = __webpack_require__("Ioy3");
var advanceStringIndex = __webpack_require__("fhoV");
var toLength = __webpack_require__("kiRH");
var callRegExpExec = __webpack_require__("YEpu");
var regexpExec = __webpack_require__("veur");
var fails = __webpack_require__("96qb");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("83Ih")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "HXzo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__("EU/P")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "IOVJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("E5k/");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("emEt");
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xtsi");
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Renders page
var PageRenderer=/*#__PURE__*/function(_React$Component){_inheritsLoose(PageRenderer,_React$Component);function PageRenderer(){return _React$Component.apply(this,arguments)||this;}var _proto=PageRenderer.prototype;_proto.render=function render(){var props=Object.assign(Object.assign({},this.props),{},{pathContext:this.props.pageContext});var _apiRunner=Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__["apiRunner"])("replaceComponentRenderer",{props:this.props,loader:_loader__WEBPACK_IMPORTED_MODULE_2__["publicLoader"]}),replacementElement=_apiRunner[0];var pageElement=replacementElement||Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.props.pageResources.component,Object.assign(Object.assign({},props),{},{key:this.props.path||this.props.pageResources.page.path}));var wrappedPage=Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__["apiRunner"])("wrapPageElement",{element:pageElement,props:props},pageElement,function(_ref){var result=_ref.result;return{element:result,props:props};}).pop();return wrappedPage;};return PageRenderer;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (PageRenderer);

/***/ }),

/***/ "IVHb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("5NKs");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("j8BX"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("v06X"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("XEEL"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("0jh0"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _reactDom = _interopRequireDefault(__webpack_require__("i8i4"));

var _warning = _interopRequireDefault(__webpack_require__("6DQo"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _ScrollBehaviorContext = __webpack_require__("444f");

var propTypes = {
  scrollKey: _propTypes["default"].string.isRequired,
  shouldUpdateScroll: _propTypes["default"].func,
  children: _propTypes["default"].element.isRequired
};

var ScrollContainer = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(ScrollContainer, _React$Component);

  function ScrollContainer(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // We don't re-register if the scroll key changes, so make sure we
    // unregister with the initial scroll key just in case the user changes it.

    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "shouldUpdateScroll", function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing scrollBehavior._stateStorage.


      return shouldUpdateScroll.call(_this.props.context.scrollBehavior, prevRouterProps, routerProps);
    });
    _this.scrollKey = props.scrollKey;
    return _this;
  }

  var _proto = ScrollContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.context.registerElement(this.props.scrollKey, _reactDom["default"].findDOMNode(this), // eslint-disable-line react/no-find-dom-node
    this.shouldUpdateScroll); // Only keep around the current DOM node in development, as this is only
    // for emitting the appropriate warning.

    if (false) {}
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _warning["default"])(prevProps.scrollKey === this.props.scrollKey, "<ScrollContainer> does not support changing scrollKey.");

    if (false) { var prevDomNode; }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.context.unregisterElement(this.scrollKey);
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return ScrollContainer;
}(_react["default"].Component);

var ScrollContainerConsumer = function ScrollContainerConsumer(props) {
  return /*#__PURE__*/_react["default"].createElement(_ScrollBehaviorContext.ScrollBehaviorContext.Consumer, null, function (context) {
    return /*#__PURE__*/_react["default"].createElement(ScrollContainer, (0, _extends2["default"])({}, props, {
      context: context
    }));
  });
};

ScrollContainerConsumer.propTypes = propTypes;
var _default = ScrollContainerConsumer;
exports["default"] = _default;

/***/ }),

/***/ "IYdN":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("emib");
var hide = __webpack_require__("8wc8");
var has = __webpack_require__("qDzq");
var SRC = __webpack_require__("UEZ0")('src');
var $toString = __webpack_require__("3WpW");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("Phdo").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "Ioy3":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("1a8y");
var aFunction = __webpack_require__("nONw");
var SPECIES = __webpack_require__("sOol")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "JHok":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("P8UN");
var $forEach = __webpack_require__("Wadk")(0);
var STRICT = __webpack_require__("h/qr")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "JWvD":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "Jegl":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("emib");
var hide = __webpack_require__("8wc8");
var uid = __webpack_require__("UEZ0");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "K/gy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("E5k/");

__webpack_require__("R48M");

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = __webpack_require__("q1tI");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__("TR4N");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var GoMarkGithub = function GoMarkGithub(props) {
  return _react2["default"].createElement(_reactIconBase2["default"], _extends({
    viewBox: '0 0 40 40'
  }, props), _react2["default"].createElement('g', null, _react2["default"].createElement('path', {
    d: 'm20 0c-11 0-20 9-20 20 0 8.8 5.7 16.3 13.7 19 1 0.2 1.3-0.5 1.3-1 0-0.5 0-2 0-3.7-5.5 1.2-6.7-2.4-6.7-2.4-0.9-2.3-2.2-2.9-2.2-2.9-1.9-1.2 0.1-1.2 0.1-1.2 2 0.1 3.1 2.1 3.1 2.1 1.7 3 4.6 2.1 5.8 1.6 0.2-1.3 0.7-2.2 1.3-2.7-4.5-0.5-9.2-2.2-9.2-9.8 0-2.2 0.8-4 2.1-5.4-0.2-0.5-0.9-2.6 0.2-5.3 0 0 1.7-0.5 5.5 2 1.6-0.4 3.3-0.6 5-0.6 1.7 0 3.4 0.2 5 0.7 3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8 0.4 4.8 0.2 5.3 1.3 1.4 2.1 3.2 2.1 5.4 0 7.6-4.7 9.3-9.2 9.8 0.7 0.6 1.4 1.9 1.4 3.7 0 2.7 0 4.9 0 5.5 0 0.6 0.3 1.2 1.3 1 8-2.7 13.7-10.2 13.7-19 0-11-9-20-20-20z'
  })));
};

exports["default"] = GoMarkGithub;
module.exports = exports['default'];

/***/ }),

/***/ "KEMg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("QPJK") && !__webpack_require__("96qb")(function () {
  return Object.defineProperty(__webpack_require__("YGZZ")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "Kz6e":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("QPJK") && /./g.flags != 'g') __webpack_require__("rjfK").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("lb9j")
});


/***/ }),

/***/ "LHMV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("MIFh");

__webpack_require__("rzGZ");

__webpack_require__("Dq+y");

__webpack_require__("Ggvi");

__webpack_require__("JHok");

__webpack_require__("6kNP");

__webpack_require__("8npG");

exports.__esModule = true;
exports["default"] = void 0;

var _off = _interopRequireDefault(__webpack_require__("c0Fl"));

var _on = _interopRequireDefault(__webpack_require__("raBC"));

var _scrollLeft = _interopRequireDefault(__webpack_require__("+i7v"));

var _scrollTop = _interopRequireDefault(__webpack_require__("ZfQF"));

var _requestAnimationFrame = _interopRequireDefault(__webpack_require__("q5+k"));

var _invariant = _interopRequireDefault(__webpack_require__("QLaP"));

var _utils = __webpack_require__("OysZ");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* eslint-disable no-underscore-dangle */
// Try at most this many times to scroll, to avoid getting stuck.


var MAX_SCROLL_ATTEMPTS = 2;

var ScrollBehavior = /*#__PURE__*/function () {
  function ScrollBehavior(_ref) {
    var _this = this;

    var addTransitionHook = _ref.addTransitionHook,
        stateStorage = _ref.stateStorage,
        getCurrentLocation = _ref.getCurrentLocation,
        shouldUpdateScroll = _ref.shouldUpdateScroll;

    this._restoreScrollRestoration = function () {
      /* istanbul ignore if: not supported by any browsers on Travis */
      if (_this._oldScrollRestoration) {
        try {
          window.history.scrollRestoration = _this._oldScrollRestoration;
        } catch (e) {
          /* silence */
        }
      }
    };

    this._onWindowScroll = function () {
      if (_this._ignoreScrollEvents) {
        // Don't save the scroll position until the transition is complete
        return;
      } // It's possible that this scroll operation was triggered by what will be a
      // `POP` transition. Instead of updating the saved location immediately, we
      // have to enqueue the update, then potentially cancel it if we observe a
      // location update.


      if (!_this._saveWindowPositionHandle) {
        _this._saveWindowPositionHandle = (0, _requestAnimationFrame["default"])(_this._saveWindowPosition);
      }

      if (_this._windowScrollTarget) {
        var _this$_windowScrollTa = _this._windowScrollTarget,
            xTarget = _this$_windowScrollTa[0],
            yTarget = _this$_windowScrollTa[1];
        var x = (0, _scrollLeft["default"])(window);
        var y = (0, _scrollTop["default"])(window);

        if (x === xTarget && y === yTarget) {
          _this._windowScrollTarget = null;

          _this._cancelCheckWindowScroll();
        }
      }
    };

    this._saveWindowPosition = function () {
      _this._saveWindowPositionHandle = null;

      _this._savePosition(null, window);
    };

    this._checkWindowScrollPosition = function () {
      _this._checkWindowScrollHandle = null; // We can only get here if scrollTarget is set. Every code path that unsets
      // scroll target also cancels the handle to avoid calling this handler.
      // Still, check anyway just in case.

      /* istanbul ignore if: paranoid guard */

      if (!_this._windowScrollTarget) {
        return Promise.resolve();
      }

      _this.scrollToTarget(window, _this._windowScrollTarget);

      ++_this._numWindowScrollAttempts;
      /* istanbul ignore if: paranoid guard */

      if (_this._numWindowScrollAttempts >= MAX_SCROLL_ATTEMPTS) {
        // This might happen if the scroll position was already set to the target
        _this._windowScrollTarget = null;
        return Promise.resolve();
      }

      return new Promise(function (resolve) {
        _this._checkWindowScrollHandle = (0, _requestAnimationFrame["default"])(function () {
          return resolve(_this._checkWindowScrollPosition());
        });
      });
    };

    this._stateStorage = stateStorage;
    this._getCurrentLocation = getCurrentLocation;
    this._shouldUpdateScroll = shouldUpdateScroll; // This helps avoid some jankiness in fighting against the browser's
    // default scroll behavior on `POP` transitions.

    /* istanbul ignore else: Travis browsers all support this */

    if ('scrollRestoration' in window.history && // Unfortunately, Safari on iOS freezes for 2-6s after the user swipes to
    // navigate through history with scrollRestoration being 'manual', so we
    // need to detect this browser and exclude it from the following code
    // until this bug is fixed by Apple.
    !(0, _utils.isMobileSafari)()) {
      this._oldScrollRestoration = window.history.scrollRestoration;

      try {
        window.history.scrollRestoration = 'manual'; // Scroll restoration persists across page reloads. We want to reset
        // this to the original value, so that we can let the browser handle
        // restoring the initial scroll position on server-rendered pages.

        (0, _on["default"])(window, 'beforeunload', this._restoreScrollRestoration);
      } catch (e) {
        this._oldScrollRestoration = null;
      }
    } else {
      this._oldScrollRestoration = null;
    }

    this._saveWindowPositionHandle = null;
    this._checkWindowScrollHandle = null;
    this._windowScrollTarget = null;
    this._numWindowScrollAttempts = 0;
    this._ignoreScrollEvents = false;
    this._scrollElements = {}; // We have to listen to each window scroll update rather than to just
    // location updates, because some browsers will update scroll position
    // before emitting the location change.

    (0, _on["default"])(window, 'scroll', this._onWindowScroll);
    this._removeTransitionHook = addTransitionHook(function () {
      _requestAnimationFrame["default"].cancel(_this._saveWindowPositionHandle);

      _this._saveWindowPositionHandle = null;
      Object.keys(_this._scrollElements).forEach(function (key) {
        var scrollElement = _this._scrollElements[key];

        _requestAnimationFrame["default"].cancel(scrollElement.savePositionHandle);

        scrollElement.savePositionHandle = null; // It's fine to save element scroll positions here, though; the browser
        // won't modify them.

        if (!_this._ignoreScrollEvents) {
          _this._saveElementPosition(key);
        }
      });
    });
  }

  var _proto = ScrollBehavior.prototype;

  _proto.registerElement = function registerElement(key, element, shouldUpdateScroll, context) {
    var _this2 = this;

    !!this._scrollElements[key] ?  false ? undefined : invariant(false) : void 0;

    var saveElementPosition = function saveElementPosition() {
      _this2._saveElementPosition(key);
    };

    var scrollElement = {
      element: element,
      shouldUpdateScroll: shouldUpdateScroll,
      savePositionHandle: null,
      onScroll: function onScroll() {
        if (!scrollElement.savePositionHandle && !_this2._ignoreScrollEvents) {
          scrollElement.savePositionHandle = (0, _requestAnimationFrame["default"])(saveElementPosition);
        }
      }
    }; // In case no scrolling occurs, save the initial position

    if (!scrollElement.savePositionHandle && !this._ignoreScrollEvents) {
      scrollElement.savePositionHandle = (0, _requestAnimationFrame["default"])(saveElementPosition);
    }

    this._scrollElements[key] = scrollElement;
    (0, _on["default"])(element, 'scroll', scrollElement.onScroll);

    this._updateElementScroll(key, null, context);
  };

  _proto.unregisterElement = function unregisterElement(key) {
    !this._scrollElements[key] ?  false ? undefined : invariant(false) : void 0;
    var _this$_scrollElements = this._scrollElements[key],
        element = _this$_scrollElements.element,
        onScroll = _this$_scrollElements.onScroll,
        savePositionHandle = _this$_scrollElements.savePositionHandle;
    (0, _off["default"])(element, 'scroll', onScroll);

    _requestAnimationFrame["default"].cancel(savePositionHandle);

    delete this._scrollElements[key];
  };

  _proto.updateScroll = function updateScroll(prevContext, context) {
    var _this3 = this;

    this._updateWindowScroll(prevContext, context).then(function () {
      // Save the position immediately after a transition so that if no
      // scrolling occurs, there is still a saved position
      if (!_this3._saveWindowPositionHandle) {
        _this3._saveWindowPositionHandle = (0, _requestAnimationFrame["default"])(_this3._saveWindowPosition);
      }
    });

    Object.keys(this._scrollElements).forEach(function (key) {
      _this3._updateElementScroll(key, prevContext, context);
    });
  };

  _proto.stop = function stop() {
    this._restoreScrollRestoration();

    (0, _off["default"])(window, 'scroll', this._onWindowScroll);

    this._cancelCheckWindowScroll();

    this._removeTransitionHook();
  };

  _proto.startIgnoringScrollEvents = function startIgnoringScrollEvents() {
    this._ignoreScrollEvents = true;
  };

  _proto.stopIgnoringScrollEvents = function stopIgnoringScrollEvents() {
    this._ignoreScrollEvents = false;
  };

  _proto._cancelCheckWindowScroll = function _cancelCheckWindowScroll() {
    _requestAnimationFrame["default"].cancel(this._checkWindowScrollHandle);

    this._checkWindowScrollHandle = null;
  };

  _proto._saveElementPosition = function _saveElementPosition(key) {
    var scrollElement = this._scrollElements[key];
    scrollElement.savePositionHandle = null;

    this._savePosition(key, scrollElement.element);
  };

  _proto._savePosition = function _savePosition(key, element) {
    this._stateStorage.save(this._getCurrentLocation(), key, [(0, _scrollLeft["default"])(element), (0, _scrollTop["default"])(element)]);
  };

  _proto._updateWindowScroll = function _updateWindowScroll(prevContext, context) {
    // Whatever we were doing before isn't relevant any more.
    this._cancelCheckWindowScroll();

    this._windowScrollTarget = this._getScrollTarget(null, this._shouldUpdateScroll, prevContext, context); // Updating the window scroll position is really flaky. Just trying to
    // scroll it isn't enough. Instead, try to scroll a few times until it
    // works.

    this._numWindowScrollAttempts = 0;
    return this._checkWindowScrollPosition();
  };

  _proto._updateElementScroll = function _updateElementScroll(key, prevContext, context) {
    var _this$_scrollElements2 = this._scrollElements[key],
        element = _this$_scrollElements2.element,
        shouldUpdateScroll = _this$_scrollElements2.shouldUpdateScroll;

    var scrollTarget = this._getScrollTarget(key, shouldUpdateScroll, prevContext, context);

    if (!scrollTarget) {
      return;
    } // Unlike with the window, there shouldn't be any flakiness to deal with
    // here.


    this.scrollToTarget(element, scrollTarget);
  };

  _proto._getDefaultScrollTarget = function _getDefaultScrollTarget(location) {
    var hash = location.hash;

    if (hash && hash !== '#') {
      return hash.charAt(0) === '#' ? hash.slice(1) : hash;
    }

    return [0, 0];
  };

  _proto._getScrollTarget = function _getScrollTarget(key, shouldUpdateScroll, prevContext, context) {
    var scrollTarget = shouldUpdateScroll ? shouldUpdateScroll.call(this, prevContext, context) : true;

    if (!scrollTarget || Array.isArray(scrollTarget) || typeof scrollTarget === 'string') {
      return scrollTarget;
    }

    var location = this._getCurrentLocation();

    return this._getSavedScrollTarget(key, location) || this._getDefaultScrollTarget(location);
  };

  _proto._getSavedScrollTarget = function _getSavedScrollTarget(key, location) {
    if (location.action === 'PUSH') {
      return null;
    }

    return this._stateStorage.read(location, key);
  };

  _proto.scrollToTarget = function scrollToTarget(element, target) {
    if (typeof target === 'string') {
      var targetElement = document.getElementById(target) || document.getElementsByName(target)[0];

      if (targetElement) {
        targetElement.scrollIntoView();
        return;
      } // Fallback to scrolling to top when target fragment doesn't exist.


      target = [0, 0]; // eslint-disable-line no-param-reassign
    }

    var _target = target,
        left = _target[0],
        top = _target[1];
    (0, _scrollLeft["default"])(element, left);
    (0, _scrollTop["default"])(element, top);
  };

  return ScrollBehavior;
}();

exports["default"] = ScrollBehavior;
module.exports = exports["default"];

/***/ }),

/***/ "LYrO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return insertParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return validateRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return shallowCompare; });
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MIFh");
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rzGZ");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dq+y");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8npG");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Ggvi");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("sC2a");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("U6Bt");
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("OeI1");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zGcK");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("sc67");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("AqHK");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("HQhv");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("QLaP");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_12__);












 ////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`

var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
}; ////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.


var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route["default"]) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : invariant__WEBPACK_IMPORTED_MODULE_12___default()(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
}; ////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol


var match = function match(path, uri) {
  return pick([{
    path: path
  }], uri);
}; ////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.


var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname); // ?a=b, /users?b=c => /users?a=b

  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  } // profile, /users/789 => /users/789/profile


  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  } // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one


  var allSegments = baseSegments.concat(toSegments);
  var segments = [];

  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
}; ////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)


var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };

  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
}; ////////////////////////////////////////////////////////////////////////////////
// Junk


var paramRe = /^:(.+)/;
var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};

var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};

var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route["default"] ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return {
    route: route,
    score: score,
    index: index
  };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"];
/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */

var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
}; ////////////////////////////////////////////////////////////////////////////////




/***/ }),

/***/ "LagC":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("P8UN");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("Ftjc").set });


/***/ }),

/***/ "LeKB":
/***/ (function(module, exports, __webpack_require__) {

module.exports=[{plugin:__webpack_require__("q9nr"),options:{"plugins":[],"maxWidth":690}},{plugin:__webpack_require__("hUyl"),options:{"plugins":[],"offsetY":64,"removeAccents":true,"enableCustomId":true}},{plugin:__webpack_require__("EvL4"),options:{"plugins":[],"logLevel":1,"DIR_NAME":"/Users/kyle/unfolded/earthengine-layers/website","ROOT_FOLDER":"/Users/kyle/unfolded/earthengine-layers/website/../","DOCS":{"id":"table-of-contents","chapters":[{"title":"Developer Guide","chapters":[{"title":"Overview","entries":[{"entry":"docs"},{"entry":"docs/whats-new"}]},{"title":"Guides","entries":[{"entry":"docs/developer-guide/get-started"},{"entry":"docs/developer-guide/authentication"},{"entry":"docs/developer-guide/pydeck-integration"}]}]},{"title":"API Reference","entries":[{"entry":"modules/earthengine-layers/docs/api-reference/earthengine-layer"},{"entry":"py/docs/pydeck-earthengine-layer"}]}]},"DOC_FOLDERS":["/Users/kyle/unfolded/earthengine-layers/website/../docs/","/Users/kyle/unfolded/earthengine-layers/website/../modules/","/Users/kyle/unfolded/earthengine-layers/website/../py/"],"SOURCE":["/Users/kyle/unfolded/earthengine-layers/website/static","/Users/kyle/unfolded/earthengine-layers/website/src"],"PROJECT_TYPE":"github","PROJECT_NAME":"earthengine-layers","PROJECT_ORG":"UnfoldedInc","PROJECT_ORG_LOGO":"images/unfolded.png","PROJECT_URL":"https://github.com/UnfoldedInc/earthengine-layers","PROJECT_DESC":"deck.gl layers for Google Earth Engine for JavaScript and Python","PATH_PREFIX":"/","GA_TRACKING":null,"GITHUB_KEY":null,"HOME_PATH":"/","PROJECTS":[{"name":"deck.gl","url":"https://deck.gl"},{"name":"pydeck","url":"https://pydeck.gl"},{"name":"earthengine-api","url":"https://github.com/google/earthengine-api"}],"LINK_TO_GET_STARTED":"/docs/developer-guide/get-started","ADDITIONAL_LINKS":[{"name":"Blog","href":"http://medium.com/vis-gl","index":1}],"INDEX_PAGE_URL":"/Users/kyle/unfolded/earthengine-layers/website/templates/index.jsx","EXAMPLES":[{"title":"EE Image","image":"images/image-example-screenshot.jpg","componentUrl":"/Users/kyle/unfolded/earthengine-layers/examples/image/app.js","path":"examples/image"},{"title":"EE ImageCollection","image":"images/image-animation-example-still.png","componentUrl":"/Users/kyle/unfolded/earthengine-layers/examples/image-collection/app.js","path":"examples/image-collection"},{"title":"EE FeatureCollection (lines)","image":"images/noaa_hurricanes.jpg","componentUrl":"/Users/kyle/unfolded/earthengine-layers/examples/noaa-hurricanes/app.js","path":"examples/noaa-hurricanes"},{"title":"EE FeatureCollection (polygons)","image":"images/intl-boundaries.jpg","componentUrl":"/Users/kyle/unfolded/earthengine-layers/examples/intl-boundary/app.js","path":"examples/intl-boundary"}],"STYLESHEETS":["https://api.tiles.mapbox.com/mapbox-gl-js/v1.6.0/mapbox-gl.css"]}}];

/***/ }),

/***/ "Ljh3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("E5k/");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O7rn");
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/* eslint-disable react/no-array-index-key */ // Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// we are exposing 2 header components.
// 1 - DocsHeader, which will update the state of the top level layout.
//   we need to expose whether the menu is toggled or not because it could
//   affect how TOC is displayed in smaller screens.
// 2 - Header, which won't and just maintain its own state.
// both components are wrappers around ControlledHeader.
var Header=/*#__PURE__*/function(_Component){_inheritsLoose(Header,_Component);function Header(props){var _this;_this=_Component.call(this,props)||this;// we need to know the number of links before render.
// this is not an ideal solution.
// some of the links which are hardcoded should come from configuration
// TODO - let's create the links server side, then pass them to the template as props.
_this.state={collapsed:true,links:Object(_header_component__WEBPACK_IMPORTED_MODULE_2__[/* generateHeaderLinks */ "b"])(props)};_this.handleClick=_this.handleClick.bind(_assertThisInitialized(_this));return _this;}var _proto=Header.prototype;_proto.handleClick=function handleClick(){this.setState({collapsed:!this.state.collapsed});}// note that rn, we don't render stars per design, but this could change
/*
  renderStars() {
    const {config} = this.props;
    if (config.PROJECT_TYPE === 'github') {
      return (
        <GithubStars project={`${config.PROJECT_ORG}/${config.PROJECT_NAME}`} />
      );
    }

    return null;
  }
  */;_proto.render=function render(){var _this$state=this.state,links=_this$state.links,collapsed=_this$state.collapsed;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_header_component__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],Object.assign({},this.props,{links:links,isLinksMenuOpen:false,isProjectsMenuOpen:!collapsed,toggleProjectsMenu:this.handleClick,toggleLinksMenu:function toggleLinksMenu(){}}));};return Header;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/***/ }),

/***/ "Ll4R":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("1a8y");
var toLength = __webpack_require__("kiRH");
var advanceStringIndex = __webpack_require__("fhoV");
var regExpExec = __webpack_require__("YEpu");

// @@match logic
__webpack_require__("83Ih")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "ME5O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
/* harmony default export */ __webpack_exports__["a"] = (unitlessKeys);

/***/ }),

/***/ "MIFh":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("P8UN");

$export($export.S, 'Array', { isArray: __webpack_require__("tuyV") });


/***/ }),

/***/ "MMVs":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("sc67");

/*!
 * domready (c) Dustin Diaz 2014 - License MIT
 * ie10 fix - Mikael Kristiansson 2019
 */
!function (name, definition) {
  if (true) module.exports = definition();else {}
}("domready", function () {
  var ie10 = false;

  if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
    ie10 = true;
  }

  var fns = [],
      _listener,
      doc = typeof document === "object" && document,
      hack = ie10 ? doc.documentElement.doScroll("left") : doc.documentElement.doScroll,
      domContentLoaded = "DOMContentLoaded",
      loaded = doc && (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);

  if (!loaded && doc) doc.addEventListener(domContentLoaded, _listener = function listener() {
    doc.removeEventListener(domContentLoaded, _listener);
    loaded = 1;

    while (_listener = fns.shift()) {
      _listener();
    }
  });
  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  };
});

/***/ }),

/***/ "MgzW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

__webpack_require__("rzGZ");

__webpack_require__("Dq+y");

__webpack_require__("8npG");

__webpack_require__("Ggvi");

__webpack_require__("HQhv");

__webpack_require__("JHok");

__webpack_require__("AqHK");

__webpack_require__("E5k/");

__webpack_require__("4DPX");

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
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
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

/***/ }),

/***/ "N+BI":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("UEZ0")('meta');
var isObject = __webpack_require__("BjK0");
var has = __webpack_require__("qDzq");
var setDesc = __webpack_require__("rjfK").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("96qb")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "NSX3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xtsi");
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__);
if(window.location.protocol!=="https:"&&window.location.hostname!=="localhost"){console.error("Service workers can only be used over HTTPS, or on localhost for development");}else if("serviceWorker"in navigator){navigator.serviceWorker.register(""+"/sw.js").then(function(reg){reg.addEventListener("updatefound",function(){Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerUpdateFound",{serviceWorker:reg});// The updatefound event implies that reg.installing is set; see
// https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
var installingWorker=reg.installing;console.log("installingWorker",installingWorker);installingWorker.addEventListener("statechange",function(){switch(installingWorker.state){case"installed":if(navigator.serviceWorker.controller){// At this point, the old content will have been purged and the fresh content will
// have been added to the cache.
// We set a flag so Gatsby Link knows to refresh the page on next navigation attempt
window.___swUpdated=true;// We call the onServiceWorkerUpdateReady API so users can show update prompts.
Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerUpdateReady",{serviceWorker:reg});// If resources failed for the current page, reload.
if(window.___failedResources){console.log("resources failed, SW updated - reloading");window.location.reload();}}else{// At this point, everything has been precached.
// It's the perfect time to display a "Content is cached for offline use." message.
console.log("Content is now available offline!");// Post to service worker that install is complete.
// Delay to allow time for the event listener to be added --
// otherwise fetch is called too soon and resources aren't cached.
Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerInstalled",{serviceWorker:reg});}break;case"redundant":console.error("The installing service worker became redundant.");Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerRedundant",{serviceWorker:reg});break;case"activated":Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerActive",{serviceWorker:reg});break;}});});}).catch(function(e){console.error("Error during service worker registration:",e);});}

/***/ }),

/***/ "O1i0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("BjK0");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "O7rn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export propTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generateHeaderLinks; });
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YBKJ");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9ZhD");
/* harmony import */ var core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pJf4");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("E5k/");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_lib_go_mark_github__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("K/gy");
/* harmony import */ var react_icons_lib_go_mark_github__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_go_mark_github__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zTvz");
/* eslint-disable react/no-array-index-key */ // Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// import GithubStars from './github-stars.jsx';
var propTypes={config:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired};function GithubLink(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,"Github",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_lib_go_mark_github__WEBPACK_IMPORTED_MODULE_6___default.a,{style:{marginLeft:'0.5rem',display:'inline'}}));}function HeaderLink(_ref){var to=_ref.to,href=_ref.href,label=_ref.label;if(to){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_header__WEBPACK_IMPORTED_MODULE_7__[/* HeaderLink */ "e"],{to:to},label);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_header__WEBPACK_IMPORTED_MODULE_7__[/* HeaderA */ "c"],{href:href},label);}/**
 * Generate all the links in the header.
 * @param  {Object} props Input props which includes site config.
 * @return {Array}  Array of link object ({label, to, href, classnames})
 */function generateHeaderLinks(props){var _props$config=props.config,config=_props$config===void 0?{}:_props$config;var exampleLink=config.EXAMPLES&&config.EXAMPLES.length>0&&{label:'Examples',to:'/examples'};var githubLink=config.PROJECT_TYPE==='github'&&{href:"https://github.com/"+config.PROJECT_ORG+"/"+config.PROJECT_NAME,label:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(GithubLink,null)};var links=[exampleLink,{label:'Documentation',to:'/docs'},{label:'Search',to:'/search'}];if(config.ADDITIONAL_LINKS&&config.ADDITIONAL_LINKS.length>0){config.ADDITIONAL_LINKS.map(function(link){return Object.assign(Object.assign({},link),{},{label:link.name});}).forEach(function(link){if(Number.isFinite(link.index)){links.splice(link.index,0,link);}else{links.push(link);}});}links.push(githubLink);return links.filter(Boolean);}var HeaderLinks=function HeaderLinks(_ref2){var links=_ref2.links;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_header__WEBPACK_IMPORTED_MODULE_7__[/* HeaderLinksBlock */ "g"],null,links.map(function(link,index){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_header__WEBPACK_IMPORTED_MODULE_7__[/* HeaderLinkContainer */ "f"],{key:"link-"+index},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(HeaderLink,link));}));};var ControlledHeader=function ControlledHeader(_ref3){var links=_ref3.links,_ref3$config=_ref3.config,config=_ref3$config===void 0?{}:_ref3$config,toggleMenu=_ref3.toggleMenu,isMenuOpen=_ref3.isMenuOpen,isSmallScreen=_ref3.isSmallScreen;var PROJECT_NAME=config.PROJECT_NAME,_config$PROJECTS=config.PROJECTS,PROJECTS=_config$PROJECTS===void 0?[]:_config$PROJECTS;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_header__WEBPACK_IMPORTED_MODULE_7__[/* Header */ "b"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_header__WEBPACK_IMPORTED_MODULE_7__[/* HeaderMenuBlock */ "j"],null,PROJECTS.length?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_header__WEBPACK_IMPORTED_MODULE_7__[/* HamburgerMenu */ "a"],{onClick:toggleMenu}):null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_header__WEBPACK_IMPORTED_MODULE_7__[/* HeaderLogo */ "h"],{to:"/"},PROJECT_NAME),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_header__WEBPACK_IMPORTED_MODULE_7__[/* HeaderMenu */ "i"],{$collapsed:!isMenuOpen,$nbItems:PROJECTS.length},isSmallScreen&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(HeaderLinks,{links:links}),isSmallScreen&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_header__WEBPACK_IMPORTED_MODULE_7__[/* HeaderMenuDivider */ "k"],null),PROJECTS.map(function(_ref4){var name=_ref4.name,url=_ref4.url;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_header__WEBPACK_IMPORTED_MODULE_7__[/* HeaderMenuLink */ "l"],{key:"menulink-"+name,href:url},name);}))),!isSmallScreen&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(HeaderLinks,{links:links}));};/* harmony default export */ __webpack_exports__["a"] = (ControlledHeader);

/***/ }),

/***/ "OeI1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("P8UN");
var $filter = __webpack_require__("Wadk")(2);

$export($export.P + $export.F * !__webpack_require__("h/qr")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "OysZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isMobileSafari = isMobileSafari;

function isMobileSafari() {
  return /iPad|iPhone|iPod/.test(window.navigator.platform) && /^((?!CriOS).)*Safari/.test(window.navigator.userAgent);
}

/***/ }),

/***/ "P8UN":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("emib");
var core = __webpack_require__("Phdo");
var hide = __webpack_require__("8wc8");
var redefine = __webpack_require__("IYdN");
var ctx = __webpack_require__("ot9L");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "Phdo":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "PjVt":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("sOol");


/***/ }),

/***/ "QLaP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

__webpack_require__("pJf4");

__webpack_require__("sC2a");

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;

/***/ }),

/***/ "QPJK":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("96qb")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "R48M":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("P8UN");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("QPJK"), 'Object', { defineProperty: __webpack_require__("rjfK").f });


/***/ }),

/***/ "Sc3u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__("QPJK")) {
  var LIBRARY = __webpack_require__("939K");
  var global = __webpack_require__("emib");
  var fails = __webpack_require__("96qb");
  var $export = __webpack_require__("P8UN");
  var $typed = __webpack_require__("Jegl");
  var $buffer = __webpack_require__("voZr");
  var ctx = __webpack_require__("ot9L");
  var anInstance = __webpack_require__("xa9o");
  var propertyDesc = __webpack_require__("pSXQ");
  var hide = __webpack_require__("8wc8");
  var redefineAll = __webpack_require__("rj/q");
  var toInteger = __webpack_require__("1Llc");
  var toLength = __webpack_require__("kiRH");
  var toIndex = __webpack_require__("gx6d");
  var toAbsoluteIndex = __webpack_require__("dTG6");
  var toPrimitive = __webpack_require__("kxs/");
  var has = __webpack_require__("qDzq");
  var classof = __webpack_require__("aHWV");
  var isObject = __webpack_require__("BjK0");
  var toObject = __webpack_require__("DFzH");
  var isArrayIter = __webpack_require__("BuzY");
  var create = __webpack_require__("nsRs");
  var getPrototypeOf = __webpack_require__("ltAs");
  var gOPN = __webpack_require__("chL8").f;
  var getIterFn = __webpack_require__("U9/z");
  var uid = __webpack_require__("UEZ0");
  var wks = __webpack_require__("sOol");
  var createArrayMethod = __webpack_require__("Wadk");
  var createArrayIncludes = __webpack_require__("Ar2q");
  var speciesConstructor = __webpack_require__("Ioy3");
  var ArrayIterators = __webpack_require__("Dq+y");
  var Iterators = __webpack_require__("m+kh");
  var $iterDetect = __webpack_require__("vUMq");
  var setSpecies = __webpack_require__("to/b");
  var arrayFill = __webpack_require__("Y++M");
  var arrayCopyWithin = __webpack_require__("cRJv");
  var $DP = __webpack_require__("rjfK");
  var $GOPD = __webpack_require__("Drra");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "TAD1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__("P8UN");
var toLength = __webpack_require__("kiRH");
var context = __webpack_require__("YdGP");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__("h+B4")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "TAZq":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("HQhv");

__webpack_require__("JHok");

(function (factory) {
   true ? module['exports'] = factory() : undefined;
})(function () {
  'use strict';

  return function (insertRule) {
    var delimiter = '/*|*/';
    var needle = delimiter + '}';

    function toSheet(block) {
      if (block) try {
        insertRule(block + '}');
      } catch (e) {}
    }

    return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
      switch (context) {
        // property
        case 1:
          // @import
          if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ';'), '';
          break;
        // selector

        case 2:
          if (ns === 0) return content + delimiter;
          break;
        // at-rule

        case 3:
          switch (ns) {
            // @font-face, @page
            case 102:
            case 112:
              return insertRule(selectors[0] + content), '';

            default:
              return content + (at === 0 ? delimiter : '');
          }

        case -2:
          content.split(needle).forEach(toSheet);
      }
    };
  };
});

/***/ }),

/***/ "TJpk":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("MIFh");

__webpack_require__("wZFJ");

__webpack_require__("rzGZ");

__webpack_require__("Dq+y");

__webpack_require__("8npG");

__webpack_require__("Ggvi");

__webpack_require__("JHok");

__webpack_require__("LagC");

__webpack_require__("pS08");

__webpack_require__("sc67");

__webpack_require__("R48M");

__webpack_require__("E5k/");

exports.__esModule = true;
exports.Helmet = undefined;

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

var _createClass = function () {
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

var _react = __webpack_require__("q1tI");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("17x9");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = __webpack_require__("8+s/");

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _reactFastCompare = __webpack_require__("bmMU");

var _reactFastCompare2 = _interopRequireDefault(_reactFastCompare);

var _HelmetUtils = __webpack_require__("v1p5");

var _HelmetConstants = __webpack_require__("hFT/");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
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
}

var Helmet = function Helmet(Component) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    _inherits(HelmetWrapper, _React$Component);

    function HelmetWrapper() {
      _classCallCheck(this, HelmetWrapper);

      return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      return !(0, _reactFastCompare2["default"])(this.props, nextProps);
    };

    HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
      if (!nestedChildren) {
        return null;
      }

      switch (child.type) {
        case _HelmetConstants.TAG_NAMES.SCRIPT:
        case _HelmetConstants.TAG_NAMES.NOSCRIPT:
          return {
            innerHTML: nestedChildren
          };

        case _HelmetConstants.TAG_NAMES.STYLE:
          return {
            cssText: nestedChildren
          };
      }

      throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    };

    HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
      var _extends2;

      var child = _ref.child,
          arrayTypeChildren = _ref.arrayTypeChildren,
          newChildProps = _ref.newChildProps,
          nestedChildren = _ref.nestedChildren;
      return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
    };

    HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
      var _extends3, _extends4;

      var child = _ref2.child,
          newProps = _ref2.newProps,
          newChildProps = _ref2.newChildProps,
          nestedChildren = _ref2.nestedChildren;

      switch (child.type) {
        case _HelmetConstants.TAG_NAMES.TITLE:
          return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));

        case _HelmetConstants.TAG_NAMES.BODY:
          return _extends({}, newProps, {
            bodyAttributes: _extends({}, newChildProps)
          });

        case _HelmetConstants.TAG_NAMES.HTML:
          return _extends({}, newProps, {
            htmlAttributes: _extends({}, newChildProps)
          });
      }

      return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
    };

    HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
      var newFlattenedProps = _extends({}, newProps);

      Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
        var _extends5;

        newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
      });
      return newFlattenedProps;
    };

    HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
      if (false) {}

      return true;
    };

    HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
      var _this2 = this;

      var arrayTypeChildren = {};

      _react2["default"].Children.forEach(children, function (child) {
        if (!child || !child.props) {
          return;
        }

        var _child$props = child.props,
            nestedChildren = _child$props.children,
            childProps = _objectWithoutProperties(_child$props, ["children"]);

        var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);

        _this2.warnOnInvalidChildren(child, nestedChildren);

        switch (child.type) {
          case _HelmetConstants.TAG_NAMES.LINK:
          case _HelmetConstants.TAG_NAMES.META:
          case _HelmetConstants.TAG_NAMES.NOSCRIPT:
          case _HelmetConstants.TAG_NAMES.SCRIPT:
          case _HelmetConstants.TAG_NAMES.STYLE:
            arrayTypeChildren = _this2.flattenArrayTypeChildren({
              child: child,
              arrayTypeChildren: arrayTypeChildren,
              newChildProps: newChildProps,
              nestedChildren: nestedChildren
            });
            break;

          default:
            newProps = _this2.mapObjectTypeChildren({
              child: child,
              newProps: newProps,
              newChildProps: newChildProps,
              nestedChildren: nestedChildren
            });
            break;
        }
      });

      newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
      return newProps;
    };

    HelmetWrapper.prototype.render = function render() {
      var _props = this.props,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["children"]);

      var newProps = _extends({}, props);

      if (children) {
        newProps = this.mapChildrenToProps(children, newProps);
      }

      return _react2["default"].createElement(Component, newProps);
    };

    _createClass(HelmetWrapper, null, [{
      key: "canUseDOM",
      // Component.peek comes from react-side-effect:
      // For testing, you may use a static peek() method available on the returned component.
      // It lets you get the current state without resetting the mounted instance stack.
      // Don’t use it for anything other than testing.

      /**
       * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
       * @param {Object} bodyAttributes: {"className": "root"}
       * @param {String} defaultTitle: "Default Title"
       * @param {Boolean} defer: true
       * @param {Boolean} encodeSpecialCharacters: true
       * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
       * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
       * @param {Array} meta: [{"name": "description", "content": "Test description"}]
       * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
       * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
       * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
       * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
       * @param {String} title: "Title"
       * @param {Object} titleAttributes: {"itemprop": "name"}
       * @param {String} titleTemplate: "MySite.com - %s"
       */
      set: function set(canUseDOM) {
        Component.canUseDOM = canUseDOM;
      }
    }]);

    return HelmetWrapper;
  }(_react2["default"].Component), _class.propTypes = {
    base: _propTypes2["default"].object,
    bodyAttributes: _propTypes2["default"].object,
    children: _propTypes2["default"].oneOfType([_propTypes2["default"].arrayOf(_propTypes2["default"].node), _propTypes2["default"].node]),
    defaultTitle: _propTypes2["default"].string,
    defer: _propTypes2["default"].bool,
    encodeSpecialCharacters: _propTypes2["default"].bool,
    htmlAttributes: _propTypes2["default"].object,
    link: _propTypes2["default"].arrayOf(_propTypes2["default"].object),
    meta: _propTypes2["default"].arrayOf(_propTypes2["default"].object),
    noscript: _propTypes2["default"].arrayOf(_propTypes2["default"].object),
    onChangeClientState: _propTypes2["default"].func,
    script: _propTypes2["default"].arrayOf(_propTypes2["default"].object),
    style: _propTypes2["default"].arrayOf(_propTypes2["default"].object),
    title: _propTypes2["default"].string,
    titleAttributes: _propTypes2["default"].object,
    titleTemplate: _propTypes2["default"].string
  }, _class.defaultProps = {
    defer: true,
    encodeSpecialCharacters: true
  }, _class.peek = Component.peek, _class.rewind = function () {
    var mappedState = Component.rewind();

    if (!mappedState) {
      // provide fallback if mappedState is undefined
      mappedState = (0, _HelmetUtils.mapStateOnServer)({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }

    return mappedState;
  }, _temp;
};

var NullComponent = function NullComponent() {
  return null;
};

var HelmetSideEffects = (0, _reactSideEffect2["default"])(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;
exports.Helmet = HelmetExport;
exports["default"] = HelmetExport;

/***/ }),

/***/ "TOwV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("qT12");
} else {}

/***/ }),

/***/ "TR4N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("sc67");

__webpack_require__("E5k/");

__webpack_require__("R48M");

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = __webpack_require__("q1tI");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("17x9");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var IconBase = function IconBase(_ref, _ref2) {
  var children = _ref.children;
  var color = _ref.color;
  var size = _ref.size;
  var style = _ref.style;
  var width = _ref.width;
  var height = _ref.height;

  var props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style', 'width', 'height']);

  var _ref2$reactIconBase = _ref2.reactIconBase;
  var reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;
  var computedSize = size || reactIconBase.size || '1em';
  return _react2["default"].createElement('svg', _extends({
    children: children,
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet',
    height: height || computedSize,
    width: width || computedSize
  }, reactIconBase, props, {
    style: _extends({
      verticalAlign: 'middle',
      color: color || reactIconBase.color
    }, reactIconBase.style || {}, style)
  }));
};

IconBase.propTypes = {
  color: _propTypes2["default"].string,
  size: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
  width: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
  height: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
  style: _propTypes2["default"].object
};
IconBase.contextTypes = {
  reactIconBase: _propTypes2["default"].shape(IconBase.propTypes)
};
exports["default"] = IconBase;
module.exports = exports['default'];

/***/ }),

/***/ "TUPI":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("BjK0");
var setPrototypeOf = __webpack_require__("Ftjc").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "Tgxb":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("ot9L");
var invoke = __webpack_require__("+wZX");
var html = __webpack_require__("ZvP9");
var cel = __webpack_require__("YGZZ");
var global = __webpack_require__("emib");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("CCE/")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "ToIb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("6PSD");
var validate = __webpack_require__("O1i0");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__("94Pd")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "U2V1":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("CCE/");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "U33C":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "U6Bt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("P8UN");
var $reduce = __webpack_require__("/+AL");

$export($export.P + $export.F * !__webpack_require__("h/qr")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "U9/z":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("aHWV");
var ITERATOR = __webpack_require__("sOol")('iterator');
var Iterators = __webpack_require__("m+kh");
module.exports = __webpack_require__("Phdo").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "UEZ0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "UxWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("sPse");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("Ll4R");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("E5k/");

// EXTERNAL MODULE: ./.cache/api-runner-browser.js
var api_runner_browser = __webpack_require__("xtsi");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/@reach/router/es/index.js + 1 modules
var es = __webpack_require__("YwZP");

// EXTERNAL MODULE: ./node_modules/gatsby-react-router-scroll/index.js
var gatsby_react_router_scroll = __webpack_require__("7hJ6");

// EXTERNAL MODULE: ./node_modules/@mikaelkristiansson/domready/ready.js
var ready = __webpack_require__("MMVs");
var ready_default = /*#__PURE__*/__webpack_require__.n(ready);

// EXTERNAL MODULE: ./.cache/loader.js + 3 modules
var loader = __webpack_require__("emEt");

// EXTERNAL MODULE: ./.cache/redirects.json
var redirects = __webpack_require__("YLt+");

// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__("5yr3");

// CONCATENATED MODULE: ./.cache/route-announcer-props.js
// This is extracted to separate module because it's shared
// between browser and SSR code
var RouteAnnouncerProps={id:"gatsby-announcer",style:{position:"absolute",top:0,width:1,height:1,padding:0,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},"aria-live":"assertive","aria-atomic":"true"};
// EXTERNAL MODULE: ./node_modules/@reach/router/es/lib/history.js
var lib_history = __webpack_require__("9Xx/");

// EXTERNAL MODULE: ./node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__("+ZDr");

// CONCATENATED MODULE: ./.cache/navigation.js
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Convert to a map for faster lookup in maybeRedirect()
var redirectMap=redirects.reduce(function(map,redirect){map[redirect.fromPath]=redirect;return map;},{});function maybeRedirect(pathname){var redirect=redirectMap[pathname];if(redirect!=null){if(false){}window.___replace(redirect.toPath);return true;}else{return false;}}var navigation_onPreRouteUpdate=function onPreRouteUpdate(location,prevLocation){if(!maybeRedirect(location.pathname)){Object(api_runner_browser["apiRunner"])("onPreRouteUpdate",{location:location,prevLocation:prevLocation});}};var navigation_onRouteUpdate=function onRouteUpdate(location,prevLocation){if(!maybeRedirect(location.pathname)){Object(api_runner_browser["apiRunner"])("onRouteUpdate",{location:location,prevLocation:prevLocation});}};var navigation_navigate=function navigate(to,options){if(options===void 0){options={};}var _parsePath=Object(gatsby_link["parsePath"])(to),pathname=_parsePath.pathname;var redirect=redirectMap[pathname];// If we're redirecting, just replace the passed in pathname
// to the one we want to redirect to.
if(redirect){to=redirect.toPath;pathname=Object(gatsby_link["parsePath"])(to).pathname;}// If we had a service worker update, no matter the path, reload window and
// reset the pathname whitelist
if(window.___swUpdated){window.location=pathname;return;}// Start a timer to wait for a second before transitioning and showing a
// loader in case resources aren't around yet.
var timeoutId=setTimeout(function(){emitter["a" /* default */].emit("onDelayedLoadPageResources",{pathname:pathname});Object(api_runner_browser["apiRunner"])("onRouteUpdateDelayed",{location:window.location});},1000);loader["default"].loadPage(pathname).then(function(pageResources){// If no page resources, then refresh the page
// Do this, rather than simply `window.location.reload()`, so that
// pressing the back/forward buttons work - otherwise when pressing
// back, the browser will just change the URL and expect JS to handle
// the change, which won't always work since it might not be a Gatsby
// page.
if(!pageResources||pageResources.status===loader["PageResourceStatus"].Error){window.history.replaceState({},"",location.href);window.location=pathname;clearTimeout(timeoutId);return;}// If the loaded page has a different compilation hash to the
// window, then a rebuild has occurred on the server. Reload.
if( true&&pageResources){if(pageResources.page.webpackCompilationHash!==window.___webpackCompilationHash){// Purge plugin-offline cache
if("serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.state==="activated"){navigator.serviceWorker.controller.postMessage({gatsbyApi:"clearPathResources"});}console.log("Site has changed on server. Reloading browser");window.location=pathname;}}Object(es["navigate"])(to,options);clearTimeout(timeoutId);});};function shouldUpdateScroll(prevRouterProps,_ref){var _this=this;var location=_ref.location;var pathname=location.pathname,hash=location.hash;var results=Object(api_runner_browser["apiRunner"])("shouldUpdateScroll",{prevRouterProps:prevRouterProps,// `pathname` for backwards compatibility
pathname:pathname,routerProps:{location:location},getSavedScrollPosition:function getSavedScrollPosition(args){return _this._stateStorage.read(args);}});if(results.length>0){// Use the latest registered shouldUpdateScroll result, this allows users to override plugin's configuration
// @see https://github.com/gatsbyjs/gatsby/issues/12038
return results[results.length-1];}if(prevRouterProps){var oldPathname=prevRouterProps.location.pathname;if(oldPathname===pathname){// Scroll to element if it exists, if it doesn't, or no hash is provided,
// scroll to top.
return hash?decodeURI(hash.slice(1)):[0,0];}}return true;}function init(){// The "scroll-behavior" package expects the "action" to be on the location
// object so let's copy it over.
lib_history["globalHistory"].listen(function(args){args.location.action=args.action;});window.___push=function(to){return navigation_navigate(to,{replace:false});};window.___replace=function(to){return navigation_navigate(to,{replace:true});};window.___navigate=function(to,options){return navigation_navigate(to,options);};// Check for initial page-load redirect
maybeRedirect(window.location.pathname);}var navigation_RouteAnnouncer=/*#__PURE__*/function(_React$Component){_inheritsLoose(RouteAnnouncer,_React$Component);function RouteAnnouncer(props){var _this2;_this2=_React$Component.call(this,props)||this;_this2.announcementRef=react_default.a.createRef();return _this2;}var _proto=RouteAnnouncer.prototype;_proto.componentDidUpdate=function componentDidUpdate(prevProps,nextProps){var _this3=this;requestAnimationFrame(function(){var pageName="new page at "+_this3.props.location.pathname;if(document.title){pageName=document.title;}var pageHeadings=document.querySelectorAll("#gatsby-focus-wrapper h1");if(pageHeadings&&pageHeadings.length){pageName=pageHeadings[0].textContent;}var newAnnouncement="Navigated to "+pageName;var oldAnnouncement=_this3.announcementRef.current.innerText;if(oldAnnouncement!==newAnnouncement){_this3.announcementRef.current.innerText=newAnnouncement;}});};_proto.render=function render(){return/*#__PURE__*/react_default.a.createElement("div",Object.assign({},RouteAnnouncerProps,{ref:this.announcementRef}));};return RouteAnnouncer;}(react_default.a.Component);// Fire on(Pre)RouteUpdate APIs
var navigation_RouteUpdates=/*#__PURE__*/function(_React$Component2){_inheritsLoose(RouteUpdates,_React$Component2);function RouteUpdates(props){var _this4;_this4=_React$Component2.call(this,props)||this;navigation_onPreRouteUpdate(props.location,null);return _this4;}var _proto2=RouteUpdates.prototype;_proto2.componentDidMount=function componentDidMount(){navigation_onRouteUpdate(this.props.location,null);};_proto2.componentDidUpdate=function componentDidUpdate(prevProps,prevState,shouldFireRouteUpdate){if(shouldFireRouteUpdate){navigation_onRouteUpdate(this.props.location,prevProps.location);}};_proto2.getSnapshotBeforeUpdate=function getSnapshotBeforeUpdate(prevProps){if(this.props.location.pathname!==prevProps.location.pathname){navigation_onPreRouteUpdate(this.props.location,prevProps.location);return true;}return false;};_proto2.render=function render(){return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,this.props.children,/*#__PURE__*/react_default.a.createElement(navigation_RouteAnnouncer,{location:location}));};return RouteUpdates;}(react_default.a.Component);
// EXTERNAL MODULE: ./.cache/page-renderer.js
var page_renderer = __webpack_require__("IOVJ");

// EXTERNAL MODULE: ./.cache/async-requires.js
var async_requires = __webpack_require__("pCP8");
var async_requires_default = /*#__PURE__*/__webpack_require__.n(async_requires);

// CONCATENATED MODULE: ./node_modules/shallow-compare/es/index.js
// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) return true;
  }

  for (var _i in b) {
    if (a[_i] !== b[_i]) return true;
  }

  return false;
}

/* harmony default export */ var shallow_compare_es = (function (instance, nextProps, nextState) {
  return shallowDiffers(instance.props, nextProps) || shallowDiffers(instance.state, nextState);
});
// CONCATENATED MODULE: ./.cache/ensure-resources.js
function ensure_resources_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var ensure_resources_EnsureResources=/*#__PURE__*/function(_React$Component){ensure_resources_inheritsLoose(EnsureResources,_React$Component);function EnsureResources(props){var _this;_this=_React$Component.call(this)||this;var location=props.location,pageResources=props.pageResources;_this.state={location:Object.assign({},location),pageResources:pageResources||loader["default"].loadPageSync(location.pathname)};return _this;}EnsureResources.getDerivedStateFromProps=function getDerivedStateFromProps(_ref,prevState){var location=_ref.location;if(prevState.location.href!==location.href){var pageResources=loader["default"].loadPageSync(location.pathname);return{pageResources:pageResources,location:Object.assign({},location)};}return{location:Object.assign({},location)};};var _proto=EnsureResources.prototype;_proto.loadResources=function loadResources(rawPath){var _this2=this;loader["default"].loadPage(rawPath).then(function(pageResources){if(pageResources&&pageResources.status!==loader["PageResourceStatus"].Error){_this2.setState({location:Object.assign({},window.location),pageResources:pageResources});}else{window.history.replaceState({},"",location.href);window.location=rawPath;}});};_proto.shouldComponentUpdate=function shouldComponentUpdate(nextProps,nextState){// Always return false if we're missing resources.
if(!nextState.pageResources){this.loadResources(nextProps.location.pathname);return false;}// Check if the component or json have changed.
if(this.state.pageResources!==nextState.pageResources){return true;}if(this.state.pageResources.component!==nextState.pageResources.component){return true;}if(this.state.pageResources.json!==nextState.pageResources.json){return true;}// Check if location has changed on a page using internal routing
// via matchPath configuration.
if(this.state.location.key!==nextState.location.key&&nextState.pageResources.page&&(nextState.pageResources.page.matchPath||nextState.pageResources.page.path)){return true;}return shallow_compare_es(this,nextProps,nextState);};_proto.render=function render(){if(false){}return this.props.children(this.state);};return EnsureResources;}(react_default.a.Component);/* harmony default export */ var ensure_resources = (ensure_resources_EnsureResources);
// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__("cSJ8");

// EXTERNAL MODULE: ./.cache/match-paths.json
var match_paths = __webpack_require__("vf9c");

// CONCATENATED MODULE: ./.cache/production-app.js
function production_app_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Generated during bootstrap
var production_app_loader=new loader["ProdLoader"](async_requires_default.a,match_paths);Object(loader["setLoader"])(production_app_loader);production_app_loader.setApiRunner(api_runner_browser["apiRunner"]);window.asyncRequires=async_requires_default.a;window.___emitter=emitter["a" /* default */];window.___loader=loader["publicLoader"];init();Object(api_runner_browser["apiRunnerAsync"])("onClientEntry").then(function(){// Let plugins register a service worker. The plugin just needs
// to return true.
if(Object(api_runner_browser["apiRunner"])("registerServiceWorker").length>0){__webpack_require__("NSX3");}// In gatsby v2 if Router is used in page using matchPaths
// paths need to contain full path.
// For example:
//   - page have `/app/*` matchPath
//   - inside template user needs to use `/app/xyz` as path
// Resetting `basepath`/`baseuri` keeps current behaviour
// to not introduce breaking change.
// Remove this in v3
var RouteHandler=function RouteHandler(props){return/*#__PURE__*/react_default.a.createElement(es["BaseContext"].Provider,{value:{baseuri:"/",basepath:"/"}},/*#__PURE__*/react_default.a.createElement(page_renderer["a" /* default */],props));};var LocationHandler=/*#__PURE__*/function(_React$Component){production_app_inheritsLoose(LocationHandler,_React$Component);function LocationHandler(){return _React$Component.apply(this,arguments)||this;}var _proto=LocationHandler.prototype;_proto.render=function render(){var _this=this;var location=this.props.location;return/*#__PURE__*/react_default.a.createElement(ensure_resources,{location:location},function(_ref){var pageResources=_ref.pageResources,location=_ref.location;return/*#__PURE__*/react_default.a.createElement(navigation_RouteUpdates,{location:location},/*#__PURE__*/react_default.a.createElement(gatsby_react_router_scroll["ScrollContext"],{location:location,shouldUpdateScroll:shouldUpdateScroll},/*#__PURE__*/react_default.a.createElement(es["Router"],{basepath:"",location:location,id:"gatsby-focus-wrapper"},/*#__PURE__*/react_default.a.createElement(RouteHandler,Object.assign({path:pageResources.page.path==="/404.html"?Object(strip_prefix["a" /* default */])(location.pathname,""):encodeURI(pageResources.page.matchPath||pageResources.page.path)},_this.props,{location:location,pageResources:pageResources},pageResources.json)))));});};return LocationHandler;}(react_default.a.Component);var _window=window,pagePath=_window.pagePath,browserLoc=_window.location;// Explicitly call navigate if the canonical path (window.pagePath)
// is different to the browser path (window.location.pathname). But
// only if NONE of the following conditions hold:
//
// - The url matches a client side route (page.matchPath)
// - it's a 404 page
// - it's the offline plugin shell (/offline-plugin-app-shell-fallback/)
if(pagePath&&""+pagePath!==browserLoc.pathname&&!(production_app_loader.findMatchPath(Object(strip_prefix["a" /* default */])(browserLoc.pathname,""))||pagePath==="/404.html"||pagePath.match(/^\/404\/?$/)||pagePath.match(/^\/offline-plugin-app-shell-fallback\/?$/))){Object(es["navigate"])(""+pagePath+browserLoc.search+browserLoc.hash,{replace:true});}loader["publicLoader"].loadPage(browserLoc.pathname).then(function(page){if(!page||page.status===loader["PageResourceStatus"].Error){throw new Error("page resources for "+browserLoc.pathname+" not found. Not rendering React");}window.___webpackCompilationHash=page.page.webpackCompilationHash;var Root=function Root(){return/*#__PURE__*/react_default.a.createElement(es["Location"],null,function(locationContext){return/*#__PURE__*/react_default.a.createElement(LocationHandler,locationContext);});};var WrappedRoot=Object(api_runner_browser["apiRunner"])("wrapRootElement",{element:/*#__PURE__*/react_default.a.createElement(Root,null)},/*#__PURE__*/react_default.a.createElement(Root,null),function(_ref2){var result=_ref2.result;return{element:result};}).pop();var NewRoot=function NewRoot(){return WrappedRoot;};var renderer=Object(api_runner_browser["apiRunner"])("replaceHydrateFunction",undefined,react_dom_default.a.hydrate)[0];ready_default()(function(){renderer(/*#__PURE__*/react_default.a.createElement(NewRoot,null),typeof window!=="undefined"?document.getElementById("___gatsby"):void 0,function(){Object(api_runner_browser["apiRunner"])("onInitialClientRender");});});});});

/***/ }),

/***/ "Vce4":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("1a8y");
var isObject = __webpack_require__("BjK0");
var newPromiseCapability = __webpack_require__("WfYH");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "Wadk":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("ot9L");
var IObject = __webpack_require__("U2V1");
var toObject = __webpack_require__("DFzH");
var toLength = __webpack_require__("kiRH");
var asc = __webpack_require__("ytzU");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "Wbzz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export graphql */
/* unused harmony export StaticQueryContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StaticQuery; });
/* unused harmony export useStaticQuery */
/* unused harmony export prefetchPathname */
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YBKJ");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+ZDr");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("lw3w");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("emEt");
var prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_4__["default"].enqueue;var StaticQueryContext=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});function StaticQueryDataRenderer(_ref){var staticQueryData=_ref.staticQueryData,data=_ref.data,query=_ref.query,render=_ref.render;var finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,finalData&&render(finalData),!finalData&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,"Loading (StaticQuery)"));}var StaticQuery=function StaticQuery(props){var data=props.data,query=props.query,render=props.render,children=props.children;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StaticQueryContext.Consumer,null,function(staticQueryData){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData});});};var useStaticQuery=function useStaticQuery(query){if(typeof react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext!=="function"&&"production"==="development"){throw new Error("You're likely using a version of React that doesn't support Hooks\n"+"Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");}var context=react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(StaticQueryContext);// query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
// to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
// catch the misuse of the API and give proper direction
if(isNaN(Number(query))){throw new Error("useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`"+query+"`);\n");}if(context[query]&&context[query].data){return context[query].data;}else{throw new Error("The result of this StaticQuery could not be fetched.\n\n"+"This is likely a bug in Gatsby and if refreshing the page does not fix it, "+"please open an issue in https://github.com/gatsbyjs/gatsby/issues");}};function graphql(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls "+"are supposed to only be evaluated at compile time, and then compiled away. "+"Unfortunately, something went wrong and the query was left in the compiled code.\n\n"+"Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");}

/***/ }),

/***/ "WevN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__("P8UN");
var toLength = __webpack_require__("kiRH");
var context = __webpack_require__("YdGP");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__("h+B4")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "WfYH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("nONw");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "Wwog":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  function memoized() {
    var newArgs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }

  return memoized;
}

/* harmony default export */ __webpack_exports__["a"] = (memoizeOne);

/***/ }),

/***/ "XEEL":
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "Y++M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("DFzH");
var toAbsoluteIndex = __webpack_require__("dTG6");
var toLength = __webpack_require__("kiRH");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "YBKJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("emib");
var has = __webpack_require__("qDzq");
var cof = __webpack_require__("CCE/");
var inheritIfRequired = __webpack_require__("TUPI");
var toPrimitive = __webpack_require__("kxs/");
var fails = __webpack_require__("96qb");
var gOPN = __webpack_require__("chL8").f;
var gOPD = __webpack_require__("Drra").f;
var dP = __webpack_require__("rjfK").f;
var $trim = __webpack_require__("EU/P").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("nsRs")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("QPJK") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("IYdN")(global, NUMBER, $Number);
}


/***/ }),

/***/ "YEpu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("aHWV");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "YGZZ":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("BjK0");
var document = __webpack_require__("emib").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "YLt+":
/***/ (function(module) {

module.exports = JSON.parse("[]");

/***/ }),

/***/ "YbXK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("ouCZ")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("ZFV6")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "YdGP":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("mhTz");
var defined = __webpack_require__("ap2Z");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "YmeT":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("rjfK");
var anObject = __webpack_require__("1a8y");
var getKeys = __webpack_require__("2mBY");

module.exports = __webpack_require__("QPJK") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "YwZP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Link", function() { return /* binding */ Link; });
__webpack_require__.d(__webpack_exports__, "Location", function() { return /* binding */ es_Location; });
__webpack_require__.d(__webpack_exports__, "LocationProvider", function() { return /* binding */ es_LocationProvider; });
__webpack_require__.d(__webpack_exports__, "Match", function() { return /* binding */ es_Match; });
__webpack_require__.d(__webpack_exports__, "Redirect", function() { return /* binding */ es_Redirect; });
__webpack_require__.d(__webpack_exports__, "Router", function() { return /* binding */ es_Router; });
__webpack_require__.d(__webpack_exports__, "ServerLocation", function() { return /* binding */ es_ServerLocation; });
__webpack_require__.d(__webpack_exports__, "createHistory", function() { return /* reexport */ lib_history["createHistory"]; });
__webpack_require__.d(__webpack_exports__, "createMemorySource", function() { return /* reexport */ lib_history["createMemorySource"]; });
__webpack_require__.d(__webpack_exports__, "isRedirect", function() { return /* binding */ isRedirect; });
__webpack_require__.d(__webpack_exports__, "navigate", function() { return /* reexport */ lib_history["navigate"]; });
__webpack_require__.d(__webpack_exports__, "redirectTo", function() { return /* binding */ redirectTo; });
__webpack_require__.d(__webpack_exports__, "globalHistory", function() { return /* reexport */ lib_history["globalHistory"]; });
__webpack_require__.d(__webpack_exports__, "matchPath", function() { return /* reexport */ utils["b" /* match */]; });
__webpack_require__.d(__webpack_exports__, "useLocation", function() { return /* binding */ es_useLocation; });
__webpack_require__.d(__webpack_exports__, "useNavigate", function() { return /* binding */ es_useNavigate; });
__webpack_require__.d(__webpack_exports__, "useParams", function() { return /* binding */ es_useParams; });
__webpack_require__.d(__webpack_exports__, "useMatch", function() { return /* binding */ es_useMatch; });
__webpack_require__.d(__webpack_exports__, "BaseContext", function() { return /* binding */ BaseContext; });

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("AqHK");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("sC2a");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.reduce.js
var es6_array_reduce = __webpack_require__("U6Bt");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("6kNP");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("8npG");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.set-prototype-of.js
var es6_object_set_prototype_of = __webpack_require__("LagC");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__("pS08");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("sc67");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("E5k/");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__("QLaP");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./.cache/create-react-context.js
/* harmony default export */ var create_react_context = (react_default.a.createContext);
// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__("94VI");

// EXTERNAL MODULE: ./node_modules/@reach/router/es/lib/utils.js
var utils = __webpack_require__("LYrO");

// EXTERNAL MODULE: ./node_modules/@reach/router/es/lib/history.js
var lib_history = __webpack_require__("9Xx/");

// CONCATENATED MODULE: ./node_modules/@reach/router/es/index.js










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

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
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
}
/* eslint-disable jsx-a11y/anchor-has-content */







 ////////////////////////////////////////////////////////////////////////////////

var es_createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = create_react_context(defaultValue);
  Ctx.displayName = name;
  return Ctx;
}; ////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider


var LocationContext = es_createNamedContext("Location"); // sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider

var es_Location = function Location(_ref) {
  var children = _ref.children;
  return react_default.a.createElement(LocationContext.Consumer, null, function (context) {
    return context ? children(context) : react_default.a.createElement(es_LocationProvider, null, children);
  });
};

var es_LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: {
        unlisten: null
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;
    return {
      navigate: navigate,
      location: location
    };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, {
        replace: true
      });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();

    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return {
                context: _this2.getContext()
              };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;
    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;
    return react_default.a.createElement(LocationContext.Provider, {
      value: context
    }, typeof children === "function" ? children(context) : children || null);
  };

  return LocationProvider;
}(react_default.a.Component); ////////////////////////////////////////////////////////////////////////////////


es_LocationProvider.defaultProps = {
  history: lib_history["globalHistory"]
};
 false ? undefined : void 0;

var es_ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;
  var searchIndex = url.indexOf("?");
  var searchExists = searchIndex > -1;
  var pathname = void 0;
  var search = "";
  var hash = "";

  if (searchExists) {
    pathname = url.substring(0, searchIndex);
    search = url.substring(searchIndex);
  } else {
    pathname = url;
  }

  return react_default.a.createElement(LocationContext.Provider, {
    value: {
      location: {
        pathname: pathname,
        search: search,
        hash: hash
      },
      navigate: function navigate() {
        throw new Error("You can't call navigate on the server.");
      }
    }
  }, children);
}; ////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links


var BaseContext = es_createNamedContext("Base", {
  baseuri: "/",
  basepath: "/"
}); ////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.

var es_Router = function Router(props) {
  return react_default.a.createElement(BaseContext.Consumer, null, function (baseContext) {
    return react_default.a.createElement(es_Location, null, function (locationContext) {
      return react_default.a.createElement(es_RouterImpl, _extends({}, baseContext, locationContext, props));
    });
  });
};

var es_RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = react_default.a.Children.toArray(children).reduce(function (array, child) {
      var routes = es_createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;
    var match = Object(utils["c" /* pick */])(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value; // remove the /* from the end for child routes relative paths

      basepath = route["default"] ? basepath : route.path.replace(/\*$/, "");

      var props = _extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2(Object(utils["d" /* resolve */])(to, uri), options);
        }
      });

      var clone = react_default.a.cloneElement(element, props, element.props.children ? react_default.a.createElement(es_Router, {
        location: location,
        primary: primary
      }, element.props.children) : undefined); // using 'div' for < 16.3 support

      var FocusWrapper = primary ? es_FocusHandler : component; // don't pass any props to 'div'

      var wrapperProps = primary ? _extends({
        uri: uri,
        location: location,
        component: component
      }, domProps) : domProps;
      return react_default.a.createElement(BaseContext.Provider, {
        value: {
          baseuri: uri,
          basepath: basepath
        }
      }, react_default.a.createElement(FocusWrapper, wrapperProps, clone));
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}(react_default.a.PureComponent);

es_RouterImpl.defaultProps = {
  primary: true
};
var FocusContext = es_createNamedContext("Focus");

var es_FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return react_default.a.createElement(FocusContext.Consumer, null, function (requestFocus) {
    return react_default.a.createElement(es_FocusHandlerImpl, _extends({}, domProps, {
      component: component,
      requestFocus: requestFocus,
      uri: uri,
      location: location
    }));
  });
}; // don't focus on initial render


var initialRender = true;
var focusHandlerCount = 0;

var es_FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;

    if (initial) {
      return _extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return _extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;

    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;

    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return react_default.a.createElement(Comp, _extends({
      style: _extends({
        outline: "none"
      }, style),
      tabIndex: "-1",
      ref: function ref(n) {
        return _this5.node = n;
      }
    }, domProps), react_default.a.createElement(FocusContext.Provider, {
      value: this.requestFocus
    }, this.props.children));
  };

  return FocusHandlerImpl;
}(react_default.a.Component);

Object(react_lifecycles_compat["polyfill"])(es_FocusHandlerImpl);

var k = function k() {}; ////////////////////////////////////////////////////////////////////////////////


var forwardRef = react_default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return react_default.a.createElement(BaseContext.Consumer, null, function (_ref5) {
    var basepath = _ref5.basepath,
        baseuri = _ref5.baseuri;
    return react_default.a.createElement(es_Location, null, function (_ref6) {
      var location = _ref6.location,
          navigate = _ref6.navigate;

      var to = props.to,
          state = props.state,
          replace = props.replace,
          _props$getProps = props.getProps,
          getProps = _props$getProps === undefined ? k : _props$getProps,
          anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

      var href = Object(utils["d" /* resolve */])(to, baseuri);
      var encodedHref = encodeURI(href);
      var isCurrent = location.pathname === encodedHref;
      var isPartiallyCurrent = Object(utils["f" /* startsWith */])(location.pathname, encodedHref);
      return react_default.a.createElement("a", _extends({
        ref: ref || innerRef,
        "aria-current": isCurrent ? "page" : undefined
      }, anchorProps, getProps({
        isCurrent: isCurrent,
        isPartiallyCurrent: isPartiallyCurrent,
        href: href,
        location: location
      }), {
        href: href,
        onClick: function onClick(event) {
          if (anchorProps.onClick) anchorProps.onClick(event);

          if (shouldNavigate(event)) {
            event.preventDefault();
            var shouldReplace = replace;

            if (typeof replace !== "boolean" && isCurrent) {
              var _location$state = _extends({}, location.state),
                  key = _location$state.key,
                  restState = _objectWithoutProperties(_location$state, ["key"]);

              shouldReplace = Object(utils["e" /* shallowCompare */])(_extends({}, state), restState);
            }

            navigate(href, {
              state: state,
              replace: shouldReplace
            });
          }
        }
      }));
    });
  });
});
Link.displayName = "Link";
 false ? undefined : void 0; ////////////////////////////////////////////////////////////////////////////////

function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var es_RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  } // Support React < 16 with this hook


  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = Object(utils["d" /* resolve */])(to, baseuri);
      navigate(Object(utils["a" /* insertParams */])(resolvedTo, props), {
        replace: replace,
        state: state
      });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = Object(utils["d" /* resolve */])(to, baseuri);
    if (!noThrow) redirectTo(Object(utils["a" /* insertParams */])(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}(react_default.a.Component);

var es_Redirect = function Redirect(props) {
  return react_default.a.createElement(BaseContext.Consumer, null, function (_ref7) {
    var baseuri = _ref7.baseuri;
    return react_default.a.createElement(es_Location, null, function (locationContext) {
      return react_default.a.createElement(es_RedirectImpl, _extends({}, locationContext, {
        baseuri: baseuri
      }, props));
    });
  });
};

 false ? undefined : void 0; ////////////////////////////////////////////////////////////////////////////////

var es_Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return react_default.a.createElement(BaseContext.Consumer, null, function (_ref9) {
    var baseuri = _ref9.baseuri;
    return react_default.a.createElement(es_Location, null, function (_ref10) {
      var navigate = _ref10.navigate,
          location = _ref10.location;
      var resolvedPath = Object(utils["d" /* resolve */])(path, baseuri);
      var result = Object(utils["b" /* match */])(resolvedPath, location.pathname);
      return children({
        navigate: navigate,
        location: location,
        match: result ? _extends({}, result.params, {
          uri: result.uri,
          path: path
        }) : null
      });
    });
  });
}; ////////////////////////////////////////////////////////////////////////////////
// Hooks


var es_useLocation = function useLocation() {
  var context = Object(react["useContext"])(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var es_useNavigate = function useNavigate() {
  var context = Object(react["useContext"])(LocationContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var es_useParams = function useParams() {
  var context = Object(react["useContext"])(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = es_useLocation();
  var results = Object(utils["b" /* match */])(context.basepath, location.pathname);
  return results ? results.params : null;
};

var es_useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }

  var context = Object(react["useContext"])(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = es_useLocation();
  var resolvedPath = Object(utils["d" /* resolve */])(path, context.baseuri);
  var result = Object(utils["b" /* match */])(resolvedPath, location.pathname);
  return result ? _extends({}, result.params, {
    uri: result.uri,
    path: path
  }) : null;
}; ////////////////////////////////////////////////////////////////////////////////
// Junk


var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var es_createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === react_default.a.Fragment && element.props.children) {
      return react_default.a.Children.map(element.props.children, createRoute(basepath));
    }

    !(element.props.path || element.props["default"] || element.type === es_Redirect) ?  false ? undefined : browser_default()(false) : void 0;
    !!(element.type === es_Redirect && (!element.props.from || !element.props.to)) ?  false ? undefined : browser_default()(false) : void 0;
    !!(element.type === es_Redirect && !Object(utils["g" /* validateRedirect */])(element.props.from, element.props.to)) ?  false ? undefined : browser_default()(false) : void 0;

    if (element.props["default"]) {
      return {
        value: element,
        "default": true
      };
    }

    var elementPath = element.type === es_Redirect ? element.props.from : element.props.path;
    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);
    return {
      value: element,
      "default": element.props["default"],
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}; ////////////////////////////////////////////////////////////////////////




/***/ }),

/***/ "ZFV6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("939K");
var $export = __webpack_require__("P8UN");
var redefine = __webpack_require__("IYdN");
var hide = __webpack_require__("8wc8");
var Iterators = __webpack_require__("m+kh");
var $iterCreate = __webpack_require__("v0YV");
var setToStringTag = __webpack_require__("dSuk");
var getPrototypeOf = __webpack_require__("ltAs");
var ITERATOR = __webpack_require__("sOol")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "ZfQF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("5NKs");

exports.__esModule = true;
exports["default"] = scrollTop;

var _isWindow = _interopRequireDefault(__webpack_require__("8Y+z"));

function scrollTop(node, val) {
  var win = (0, _isWindow["default"])(node);
  if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;
  if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
}

module.exports = exports["default"];

/***/ }),

/***/ "ZvP9":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("emib").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "aHWV":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("CCE/");
var TAG = __webpack_require__("sOol")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "aJjT":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("sc67");

__webpack_require__("HQhv");

__webpack_require__("HXzo");

__webpack_require__("sC2a");

!function (e) {
   true ? module.exports = e(null) : undefined;
}(function e(a) {
  "use strict";

  var r = /^\0+/g,
      c = /[\0\r\f]/g,
      s = /: */g,
      t = /zoo|gra/,
      i = /([,: ])(transform)/g,
      f = /,+\s*(?![^(]*[)])/g,
      n = / +\s*(?![^(]*[)])/g,
      l = / *[\0] */g,
      o = /,\r+?/g,
      h = /([\t\r\n ])*\f?&/g,
      u = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,
      d = /\W+/g,
      b = /@(k\w+)\s*(\S*)\s*/,
      p = /::(place)/g,
      k = /:(read-only)/g,
      g = /\s+(?=[{\];=:>])/g,
      A = /([[}=:>])\s+/g,
      C = /(\{[^{]+?);(?=\})/g,
      w = /\s{2,}/g,
      v = /([^\(])(:+) */g,
      m = /[svh]\w+-[tblr]{2}/,
      x = /\(\s*(.*)\s*\)/g,
      $ = /([\s\S]*?);/g,
      y = /-self|flex-/g,
      O = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      j = /stretch|:\s*\w+\-(?:conte|avail)/,
      z = /([^-])(image-set\()/,
      N = "-webkit-",
      S = "-moz-",
      F = "-ms-",
      W = 59,
      q = 125,
      B = 123,
      D = 40,
      E = 41,
      G = 91,
      H = 93,
      I = 10,
      J = 13,
      K = 9,
      L = 64,
      M = 32,
      P = 38,
      Q = 45,
      R = 95,
      T = 42,
      U = 44,
      V = 58,
      X = 39,
      Y = 34,
      Z = 47,
      _ = 62,
      ee = 43,
      ae = 126,
      re = 0,
      ce = 12,
      se = 11,
      te = 107,
      ie = 109,
      fe = 115,
      ne = 112,
      le = 111,
      oe = 105,
      he = 99,
      ue = 100,
      de = 112,
      be = 1,
      pe = 1,
      ke = 0,
      ge = 1,
      Ae = 1,
      Ce = 1,
      we = 0,
      ve = 0,
      me = 0,
      xe = [],
      $e = [],
      ye = 0,
      Oe = null,
      je = -2,
      ze = -1,
      Ne = 0,
      Se = 1,
      Fe = 2,
      We = 3,
      qe = 0,
      Be = 1,
      De = "",
      Ee = "",
      Ge = "";

  function He(e, a, s, t, i) {
    for (var f, n, o = 0, h = 0, u = 0, d = 0, g = 0, A = 0, C = 0, w = 0, m = 0, $ = 0, y = 0, O = 0, j = 0, z = 0, R = 0, we = 0, $e = 0, Oe = 0, je = 0, ze = s.length, Je = ze - 1, Re = "", Te = "", Ue = "", Ve = "", Xe = "", Ye = ""; R < ze;) {
      if (C = s.charCodeAt(R), R === Je) if (h + d + u + o !== 0) {
        if (0 !== h) C = h === Z ? I : Z;
        d = u = o = 0, ze++, Je++;
      }

      if (h + d + u + o === 0) {
        if (R === Je) {
          if (we > 0) Te = Te.replace(c, "");

          if (Te.trim().length > 0) {
            switch (C) {
              case M:
              case K:
              case W:
              case J:
              case I:
                break;

              default:
                Te += s.charAt(R);
            }

            C = W;
          }
        }

        if (1 === $e) switch (C) {
          case B:
          case q:
          case W:
          case Y:
          case X:
          case D:
          case E:
          case U:
            $e = 0;

          case K:
          case J:
          case I:
          case M:
            break;

          default:
            for ($e = 0, je = R, g = C, R--, C = W; je < ze;) {
              switch (s.charCodeAt(je++)) {
                case I:
                case J:
                case W:
                  ++R, C = g, je = ze;
                  break;

                case V:
                  if (we > 0) ++R, C = g;

                case B:
                  je = ze;
              }
            }

        }

        switch (C) {
          case B:
            for (g = (Te = Te.trim()).charCodeAt(0), y = 1, je = ++R; R < ze;) {
              switch (C = s.charCodeAt(R)) {
                case B:
                  y++;
                  break;

                case q:
                  y--;
                  break;

                case Z:
                  switch (A = s.charCodeAt(R + 1)) {
                    case T:
                    case Z:
                      R = Qe(A, R, Je, s);
                  }

                  break;

                case G:
                  C++;

                case D:
                  C++;

                case Y:
                case X:
                  for (; R++ < Je && s.charCodeAt(R) !== C;) {
                    ;
                  }

              }

              if (0 === y) break;
              R++;
            }

            if (Ue = s.substring(je, R), g === re) g = (Te = Te.replace(r, "").trim()).charCodeAt(0);

            switch (g) {
              case L:
                if (we > 0) Te = Te.replace(c, "");

                switch (A = Te.charCodeAt(1)) {
                  case ue:
                  case ie:
                  case fe:
                  case Q:
                    f = a;
                    break;

                  default:
                    f = xe;
                }

                if (je = (Ue = He(a, f, Ue, A, i + 1)).length, me > 0 && 0 === je) je = Te.length;
                if (ye > 0) if (f = Ie(xe, Te, Oe), n = Pe(We, Ue, f, a, pe, be, je, A, i, t), Te = f.join(""), void 0 !== n) if (0 === (je = (Ue = n.trim()).length)) A = 0, Ue = "";
                if (je > 0) switch (A) {
                  case fe:
                    Te = Te.replace(x, Me);

                  case ue:
                  case ie:
                  case Q:
                    Ue = Te + "{" + Ue + "}";
                    break;

                  case te:
                    if (Ue = (Te = Te.replace(b, "$1 $2" + (Be > 0 ? De : ""))) + "{" + Ue + "}", 1 === Ae || 2 === Ae && Le("@" + Ue, 3)) Ue = "@" + N + Ue + "@" + Ue;else Ue = "@" + Ue;
                    break;

                  default:
                    if (Ue = Te + Ue, t === de) Ve += Ue, Ue = "";
                } else Ue = "";
                break;

              default:
                Ue = He(a, Ie(a, Te, Oe), Ue, t, i + 1);
            }

            Xe += Ue, O = 0, $e = 0, z = 0, we = 0, Oe = 0, j = 0, Te = "", Ue = "", C = s.charCodeAt(++R);
            break;

          case q:
          case W:
            if ((je = (Te = (we > 0 ? Te.replace(c, "") : Te).trim()).length) > 1) {
              if (0 === z) if ((g = Te.charCodeAt(0)) === Q || g > 96 && g < 123) je = (Te = Te.replace(" ", ":")).length;
              if (ye > 0) if (void 0 !== (n = Pe(Se, Te, a, e, pe, be, Ve.length, t, i, t))) if (0 === (je = (Te = n.trim()).length)) Te = "\0\0";

              switch (g = Te.charCodeAt(0), A = Te.charCodeAt(1), g) {
                case re:
                  break;

                case L:
                  if (A === oe || A === he) {
                    Ye += Te + s.charAt(R);
                    break;
                  }

                default:
                  if (Te.charCodeAt(je - 1) === V) break;
                  Ve += Ke(Te, g, A, Te.charCodeAt(2));
              }
            }

            O = 0, $e = 0, z = 0, we = 0, Oe = 0, Te = "", C = s.charCodeAt(++R);
        }
      }

      switch (C) {
        case J:
        case I:
          if (h + d + u + o + ve === 0) switch ($) {
            case E:
            case X:
            case Y:
            case L:
            case ae:
            case _:
            case T:
            case ee:
            case Z:
            case Q:
            case V:
            case U:
            case W:
            case B:
            case q:
              break;

            default:
              if (z > 0) $e = 1;
          }
          if (h === Z) h = 0;else if (ge + O === 0 && t !== te && Te.length > 0) we = 1, Te += "\0";
          if (ye * qe > 0) Pe(Ne, Te, a, e, pe, be, Ve.length, t, i, t);
          be = 1, pe++;
          break;

        case W:
        case q:
          if (h + d + u + o === 0) {
            be++;
            break;
          }

        default:
          switch (be++, Re = s.charAt(R), C) {
            case K:
            case M:
              if (d + o + h === 0) switch (w) {
                case U:
                case V:
                case K:
                case M:
                  Re = "";
                  break;

                default:
                  if (C !== M) Re = " ";
              }
              break;

            case re:
              Re = "\\0";
              break;

            case ce:
              Re = "\\f";
              break;

            case se:
              Re = "\\v";
              break;

            case P:
              if (d + h + o === 0 && ge > 0) Oe = 1, we = 1, Re = "\f" + Re;
              break;

            case 108:
              if (d + h + o + ke === 0 && z > 0) switch (R - z) {
                case 2:
                  if (w === ne && s.charCodeAt(R - 3) === V) ke = w;

                case 8:
                  if (m === le) ke = m;
              }
              break;

            case V:
              if (d + h + o === 0) z = R;
              break;

            case U:
              if (h + u + d + o === 0) we = 1, Re += "\r";
              break;

            case Y:
            case X:
              if (0 === h) d = d === C ? 0 : 0 === d ? C : d;
              break;

            case G:
              if (d + h + u === 0) o++;
              break;

            case H:
              if (d + h + u === 0) o--;
              break;

            case E:
              if (d + h + o === 0) u--;
              break;

            case D:
              if (d + h + o === 0) {
                if (0 === O) switch (2 * w + 3 * m) {
                  case 533:
                    break;

                  default:
                    y = 0, O = 1;
                }
                u++;
              }

              break;

            case L:
              if (h + u + d + o + z + j === 0) j = 1;
              break;

            case T:
            case Z:
              if (d + o + u > 0) break;

              switch (h) {
                case 0:
                  switch (2 * C + 3 * s.charCodeAt(R + 1)) {
                    case 235:
                      h = Z;
                      break;

                    case 220:
                      je = R, h = T;
                  }

                  break;

                case T:
                  if (C === Z && w === T && je + 2 !== R) {
                    if (33 === s.charCodeAt(je + 2)) Ve += s.substring(je, R + 1);
                    Re = "", h = 0;
                  }

              }

          }

          if (0 === h) {
            if (ge + d + o + j === 0 && t !== te && C !== W) switch (C) {
              case U:
              case ae:
              case _:
              case ee:
              case E:
              case D:
                if (0 === O) {
                  switch (w) {
                    case K:
                    case M:
                    case I:
                    case J:
                      Re += "\0";
                      break;

                    default:
                      Re = "\0" + Re + (C === U ? "" : "\0");
                  }

                  we = 1;
                } else switch (C) {
                  case D:
                    if (z + 7 === R && 108 === w) z = 0;
                    O = ++y;
                    break;

                  case E:
                    if (0 == (O = --y)) we = 1, Re += "\0";
                }

                break;

              case K:
              case M:
                switch (w) {
                  case re:
                  case B:
                  case q:
                  case W:
                  case U:
                  case ce:
                  case K:
                  case M:
                  case I:
                  case J:
                    break;

                  default:
                    if (0 === O) we = 1, Re += "\0";
                }

            }
            if (Te += Re, C !== M && C !== K) $ = C;
          }

      }

      m = w, w = C, R++;
    }

    if (je = Ve.length, me > 0) if (0 === je && 0 === Xe.length && 0 === a[0].length == false) if (t !== ie || 1 === a.length && (ge > 0 ? Ee : Ge) === a[0]) je = a.join(",").length + 2;

    if (je > 0) {
      if (f = 0 === ge && t !== te ? function (e) {
        for (var a, r, s = 0, t = e.length, i = Array(t); s < t; ++s) {
          for (var f = e[s].split(l), n = "", o = 0, h = 0, u = 0, d = 0, b = f.length; o < b; ++o) {
            if (0 === (h = (r = f[o]).length) && b > 1) continue;
            if (u = n.charCodeAt(n.length - 1), d = r.charCodeAt(0), a = "", 0 !== o) switch (u) {
              case T:
              case ae:
              case _:
              case ee:
              case M:
              case D:
                break;

              default:
                a = " ";
            }

            switch (d) {
              case P:
                r = a + Ee;

              case ae:
              case _:
              case ee:
              case M:
              case E:
              case D:
                break;

              case G:
                r = a + r + Ee;
                break;

              case V:
                switch (2 * r.charCodeAt(1) + 3 * r.charCodeAt(2)) {
                  case 530:
                    if (Ce > 0) {
                      r = a + r.substring(8, h - 1);
                      break;
                    }

                  default:
                    if (o < 1 || f[o - 1].length < 1) r = a + Ee + r;
                }

                break;

              case U:
                a = "";

              default:
                if (h > 1 && r.indexOf(":") > 0) r = a + r.replace(v, "$1" + Ee + "$2");else r = a + r + Ee;
            }

            n += r;
          }

          i[s] = n.replace(c, "").trim();
        }

        return i;
      }(a) : a, ye > 0) if (void 0 !== (n = Pe(Fe, Ve, f, e, pe, be, je, t, i, t)) && 0 === (Ve = n).length) return Ye + Ve + Xe;

      if (Ve = f.join(",") + "{" + Ve + "}", Ae * ke != 0) {
        if (2 === Ae && !Le(Ve, 2)) ke = 0;

        switch (ke) {
          case le:
            Ve = Ve.replace(k, ":" + S + "$1") + Ve;
            break;

          case ne:
            Ve = Ve.replace(p, "::" + N + "input-$1") + Ve.replace(p, "::" + S + "$1") + Ve.replace(p, ":" + F + "input-$1") + Ve;
        }

        ke = 0;
      }
    }

    return Ye + Ve + Xe;
  }

  function Ie(e, a, r) {
    var c = a.trim().split(o),
        s = c,
        t = c.length,
        i = e.length;

    switch (i) {
      case 0:
      case 1:
        for (var f = 0, n = 0 === i ? "" : e[0] + " "; f < t; ++f) {
          s[f] = Je(n, s[f], r, i).trim();
        }

        break;

      default:
        f = 0;
        var l = 0;

        for (s = []; f < t; ++f) {
          for (var h = 0; h < i; ++h) {
            s[l++] = Je(e[h] + " ", c[f], r, i).trim();
          }
        }

    }

    return s;
  }

  function Je(e, a, r, c) {
    var s = a,
        t = s.charCodeAt(0);
    if (t < 33) t = (s = s.trim()).charCodeAt(0);

    switch (t) {
      case P:
        switch (ge + c) {
          case 0:
          case 1:
            if (0 === e.trim().length) break;

          default:
            return s.replace(h, "$1" + e.trim());
        }

        break;

      case V:
        switch (s.charCodeAt(1)) {
          case 103:
            if (Ce > 0 && ge > 0) return s.replace(u, "$1").replace(h, "$1" + Ge);
            break;

          default:
            return e.trim() + s.replace(h, "$1" + e.trim());
        }

      default:
        if (r * ge > 0 && s.indexOf("\f") > 0) return s.replace(h, (e.charCodeAt(0) === V ? "" : "$1") + e.trim());
    }

    return e + s;
  }

  function Ke(e, a, r, c) {
    var l,
        o = 0,
        h = e + ";",
        u = 2 * a + 3 * r + 4 * c;
    if (944 === u) return function (e) {
      var a = e.length,
          r = e.indexOf(":", 9) + 1,
          c = e.substring(0, r).trim(),
          s = e.substring(r, a - 1).trim();

      switch (e.charCodeAt(9) * Be) {
        case 0:
          break;

        case Q:
          if (110 !== e.charCodeAt(10)) break;

        default:
          for (var t = s.split((s = "", f)), i = 0, r = 0, a = t.length; i < a; r = 0, ++i) {
            for (var l = t[i], o = l.split(n); l = o[r];) {
              var h = l.charCodeAt(0);
              if (1 === Be && (h > L && h < 90 || h > 96 && h < 123 || h === R || h === Q && l.charCodeAt(1) !== Q)) switch (isNaN(parseFloat(l)) + (-1 !== l.indexOf("("))) {
                case 1:
                  switch (l) {
                    case "infinite":
                    case "alternate":
                    case "backwards":
                    case "running":
                    case "normal":
                    case "forwards":
                    case "both":
                    case "none":
                    case "linear":
                    case "ease":
                    case "ease-in":
                    case "ease-out":
                    case "ease-in-out":
                    case "paused":
                    case "reverse":
                    case "alternate-reverse":
                    case "inherit":
                    case "initial":
                    case "unset":
                    case "step-start":
                    case "step-end":
                      break;

                    default:
                      l += De;
                  }

              }
              o[r++] = l;
            }

            s += (0 === i ? "" : ",") + o.join(" ");
          }

      }

      if (s = c + s + ";", 1 === Ae || 2 === Ae && Le(s, 1)) return N + s + s;
      return s;
    }(h);else if (0 === Ae || 2 === Ae && !Le(h, 1)) return h;

    switch (u) {
      case 1015:
        return 97 === h.charCodeAt(10) ? N + h + h : h;

      case 951:
        return 116 === h.charCodeAt(3) ? N + h + h : h;

      case 963:
        return 110 === h.charCodeAt(5) ? N + h + h : h;

      case 1009:
        if (100 !== h.charCodeAt(4)) break;

      case 969:
      case 942:
        return N + h + h;

      case 978:
        return N + h + S + h + h;

      case 1019:
      case 983:
        return N + h + S + h + F + h + h;

      case 883:
        if (h.charCodeAt(8) === Q) return N + h + h;
        if (h.indexOf("image-set(", 11) > 0) return h.replace(z, "$1" + N + "$2") + h;
        return h;

      case 932:
        if (h.charCodeAt(4) === Q) switch (h.charCodeAt(5)) {
          case 103:
            return N + "box-" + h.replace("-grow", "") + N + h + F + h.replace("grow", "positive") + h;

          case 115:
            return N + h + F + h.replace("shrink", "negative") + h;

          case 98:
            return N + h + F + h.replace("basis", "preferred-size") + h;
        }
        return N + h + F + h + h;

      case 964:
        return N + h + F + "flex-" + h + h;

      case 1023:
        if (99 !== h.charCodeAt(8)) break;
        return l = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), N + "box-pack" + l + N + h + F + "flex-pack" + l + h;

      case 1005:
        return t.test(h) ? h.replace(s, ":" + N) + h.replace(s, ":" + S) + h : h;

      case 1e3:
        switch (o = (l = h.substring(13).trim()).indexOf("-") + 1, l.charCodeAt(0) + l.charCodeAt(o)) {
          case 226:
            l = h.replace(m, "tb");
            break;

          case 232:
            l = h.replace(m, "tb-rl");
            break;

          case 220:
            l = h.replace(m, "lr");
            break;

          default:
            return h;
        }

        return N + h + F + l + h;

      case 1017:
        if (-1 === h.indexOf("sticky", 9)) return h;

      case 975:
        switch (o = (h = e).length - 10, u = (l = (33 === h.charCodeAt(o) ? h.substring(0, o) : h).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | l.charCodeAt(7))) {
          case 203:
            if (l.charCodeAt(8) < 111) break;

          case 115:
            h = h.replace(l, N + l) + ";" + h;
            break;

          case 207:
          case 102:
            h = h.replace(l, N + (u > 102 ? "inline-" : "") + "box") + ";" + h.replace(l, N + l) + ";" + h.replace(l, F + l + "box") + ";" + h;
        }

        return h + ";";

      case 938:
        if (h.charCodeAt(5) === Q) switch (h.charCodeAt(6)) {
          case 105:
            return l = h.replace("-items", ""), N + h + N + "box-" + l + F + "flex-" + l + h;

          case 115:
            return N + h + F + "flex-item-" + h.replace(y, "") + h;

          default:
            return N + h + F + "flex-line-pack" + h.replace("align-content", "").replace(y, "") + h;
        }
        break;

      case 973:
      case 989:
        if (h.charCodeAt(3) !== Q || 122 === h.charCodeAt(4)) break;

      case 931:
      case 953:
        if (true === j.test(e)) if (115 === (l = e.substring(e.indexOf(":") + 1)).charCodeAt(0)) return Ke(e.replace("stretch", "fill-available"), a, r, c).replace(":fill-available", ":stretch");else return h.replace(l, N + l) + h.replace(l, S + l.replace("fill-", "")) + h;
        break;

      case 962:
        if (h = N + h + (102 === h.charCodeAt(5) ? F + h : "") + h, r + c === 211 && 105 === h.charCodeAt(13) && h.indexOf("transform", 10) > 0) return h.substring(0, h.indexOf(";", 27) + 1).replace(i, "$1" + N + "$2") + h;
    }

    return h;
  }

  function Le(e, a) {
    var r = e.indexOf(1 === a ? ":" : "{"),
        c = e.substring(0, 3 !== a ? r : 10),
        s = e.substring(r + 1, e.length - 1);
    return Oe(2 !== a ? c : c.replace(O, "$1"), s, a);
  }

  function Me(e, a) {
    var r = Ke(a, a.charCodeAt(0), a.charCodeAt(1), a.charCodeAt(2));
    return r !== a + ";" ? r.replace($, " or ($1)").substring(4) : "(" + a + ")";
  }

  function Pe(e, a, r, c, s, t, i, f, n, l) {
    for (var o, h = 0, u = a; h < ye; ++h) {
      switch (o = $e[h].call(Te, e, u, r, c, s, t, i, f, n, l)) {
        case void 0:
        case false:
        case true:
        case null:
          break;

        default:
          u = o;
      }
    }

    if (u !== a) return u;
  }

  function Qe(e, a, r, c) {
    for (var s = a + 1; s < r; ++s) {
      switch (c.charCodeAt(s)) {
        case Z:
          if (e === T) if (c.charCodeAt(s - 1) === T && a + 2 !== s) return s + 1;
          break;

        case I:
          if (e === Z) return s + 1;
      }
    }

    return s;
  }

  function Re(e) {
    for (var a in e) {
      var r = e[a];

      switch (a) {
        case "keyframe":
          Be = 0 | r;
          break;

        case "global":
          Ce = 0 | r;
          break;

        case "cascade":
          ge = 0 | r;
          break;

        case "compress":
          we = 0 | r;
          break;

        case "semicolon":
          ve = 0 | r;
          break;

        case "preserve":
          me = 0 | r;
          break;

        case "prefix":
          if (Oe = null, !r) Ae = 0;else if ("function" != typeof r) Ae = 1;else Ae = 2, Oe = r;
      }
    }

    return Re;
  }

  function Te(a, r) {
    if (void 0 !== this && this.constructor === Te) return e(a);
    var s = a,
        t = s.charCodeAt(0);
    if (t < 33) t = (s = s.trim()).charCodeAt(0);
    if (Be > 0) De = s.replace(d, t === G ? "" : "-");
    if (t = 1, 1 === ge) Ge = s;else Ee = s;
    var i,
        f = [Ge];
    if (ye > 0) if (void 0 !== (i = Pe(ze, r, f, f, pe, be, 0, 0, 0, 0)) && "string" == typeof i) r = i;
    var n = He(xe, f, r, 0, 0);
    if (ye > 0) if (void 0 !== (i = Pe(je, n, f, f, pe, be, n.length, 0, 0, 0)) && "string" != typeof (n = i)) t = 0;
    return De = "", Ge = "", Ee = "", ke = 0, pe = 1, be = 1, we * t == 0 ? n : n.replace(c, "").replace(g, "").replace(A, "$1").replace(C, "$1").replace(w, " ");
  }

  if (Te.use = function e(a) {
    switch (a) {
      case void 0:
      case null:
        ye = $e.length = 0;
        break;

      default:
        if ("function" == typeof a) $e[ye++] = a;else if ("object" == typeof a) for (var r = 0, c = a.length; r < c; ++r) {
          e(a[r]);
        } else qe = 0 | !!a;
    }

    return e;
  }, Te.set = Re, void 0 !== a) Re(a);
  return Te;
});

/***/ }),

/***/ "ap2Z":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "bmMU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("pJf4");

__webpack_require__("Ll4R");

__webpack_require__("q8oJ");

__webpack_require__("C9fy");

__webpack_require__("klQ5");

__webpack_require__("rzGZ");

__webpack_require__("Dq+y");

__webpack_require__("8npG");

__webpack_require__("Ggvi");

__webpack_require__("MIFh");

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;
    if (length !== keyList(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // start react-fast-compare
    // custom handling for DOM elements


    if (hasElementType && a instanceof Element && b instanceof Element) return a === b; // custom handling for React

    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // end react-fast-compare
    // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i) || error.number === -2146828260) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
};

/***/ }),

/***/ "c0Fl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("5NKs");

exports.__esModule = true;
exports["default"] = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__("Bp9Y"));

var off = function off() {};

if (_inDOM["default"]) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

var _default = off;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "cFtU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("ot9L");
var $export = __webpack_require__("P8UN");
var toObject = __webpack_require__("DFzH");
var call = __webpack_require__("9IMR");
var isArrayIter = __webpack_require__("BuzY");
var toLength = __webpack_require__("kiRH");
var createProperty = __webpack_require__("Fgx0");
var getIterFn = __webpack_require__("U9/z");

$export($export.S + $export.F * !__webpack_require__("vUMq")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "cRJv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__("DFzH");
var toAbsoluteIndex = __webpack_require__("dTG6");
var toLength = __webpack_require__("kiRH");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "cSJ8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 *//* harmony default export */ __webpack_exports__["a"] = (function(str,prefix){if(prefix===void 0){prefix="";}if(!prefix){return str;}prefix+="/";if(str.substr(0,prefix.length)===prefix){return str.slice(prefix.length-1);}return str;});

/***/ }),

/***/ "chL8":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("13lr");
var hiddenKeys = __webpack_require__("U33C").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "cu4x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("sc67");

exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "cxuS":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("P8UN");
var $values = __webpack_require__("ys0W")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "dSuk":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("rjfK").f;
var has = __webpack_require__("qDzq");
var TAG = __webpack_require__("sOol")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "dTG6":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("1Llc");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "dx5X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ TocChevron; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ TocEntry; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ TocHeader; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ TocLink; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ TocSubpages; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ TocContainer; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ toc_TocToggle; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/chevron-down.jsx
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var chevron_down_ChevronDownIcon=/*#__PURE__*/function(_Component){_inheritsLoose(ChevronDownIcon,_Component);function ChevronDownIcon(){return _Component.apply(this,arguments)||this;}var _proto=ChevronDownIcon.prototype;_proto.render=function render(){var _this$props=this.props,_this$props$className=_this$props.className,className=_this$props$className===void 0?'':_this$props$className,_this$props$width=_this$props.width,width=_this$props$width===void 0?24:_this$props$width,_this$props$height=_this$props.height,height=_this$props$height===void 0?24:_this$props$height;return/*#__PURE__*/react_default.a.createElement("svg",{viewBox:"0 0 24 24",className:className,width:width,height:height},/*#__PURE__*/react_default.a.createElement("title",null,"Chevron Down"),/*#__PURE__*/react_default.a.createElement("path",{transform:"rotate(270, 12, 12)",fillRule:"evenodd",clipRule:"evenodd",d:"M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"}));};return ChevronDownIcon;}(react["Component"]);
// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/styled/toc.jsx
var TocChevron=Object(styled_components_browser_esm["c" /* default */])(chevron_down_ChevronDownIcon).withConfig({displayName:"toc__TocChevron",componentId:"c2gnov-0"})(["height:16px;width:16px;position:absolute;left:","px;top:20px;transform:",";transition:transform 0.3s;"],function(props){return props.$depth*24+36;},function(props){return props.$isTocOpen?'none':'rotate(-90deg)';});var TocEntry=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"toc__TocEntry",componentId:"c2gnov-1"})(["font:",";border-top:1px solid ",";border-bottom:1px solid ",";color:",";cursor:pointer;margin:-0.5px 0;position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"],function(props){return props.theme.typography.font350;},function(props){return props.$depth?'tranparent':props.theme.colors.mono500;},function(props){return props.$depth?'tranparent':props.theme.colors.mono500;},function(props){return props.$depth?props.theme.colors.mono800:props.theme.colors.mono1000;});var TocHeader=styled_components_browser_esm["c" /* default */].span.withConfig({displayName:"toc__TocHeader",componentId:"c2gnov-2"})(["display:block;padding:16px 16px 16px ","px;&:hover{background:","}"],function(props){return props.$depth*24+60;},function(props){return props.theme.colors.mono200;});var TocLink=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"toc__TocLink",componentId:"c2gnov-3"})(["a{display:block;padding:16px 16px 16px ","px;color:"," !important;text-decoration:none;}&:hover{background:",";}"],function(props){return props.$depth*24+60;},function(props){return props.$active?props.theme.colors.primary400:props.$depth?props.theme.colors.mono800:props.theme.colors.mono1000;},function(props){return props.theme.colors.mono200;});var TocSubpages=styled_components_browser_esm["c" /* default */].ul.withConfig({displayName:"toc__TocSubpages",componentId:"c2gnov-4"})(["list-style:none;margin:0;max-height:","px;overflow:hidden;padding:0;transition:max-height 0.3s;"],function(props){return props.$height*56;});var TocContainer=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"toc__TocContainer",componentId:"c2gnov-5"})(["@media screen and (min-width:","px){position:fixed;top:0;padding:"," 0;max-width:300px;height:100%;z-index:2;border-right:1px solid ",";overflow-y:scroll;overflow-x:hidden;width:100%;}@media screen and (max-width:","px){border-right:none;position:sticky;padding:"," 0;transition:opacity 0.3s,transform 0.3s;opacity:",";max-height:",";overflow:",";transform:",";}"],function(props){return props.theme.breakpoints.medium;},function(props){return props.theme.sizing.scale1600;},function(props){return props.theme.colors.mono500;},function(props){return props.theme.breakpoints.medium;},function(props){return props.$isTocOpen?props.theme.sizing.scale1600:0;},function(props){return props.$isTocOpen?1:0;},function(props){return props.$isTocOpen?'unset':0;},function(props){return props.$isTocOpen?'visible':'hidden';},function(props){return props.$isTocOpen?'translateY(0)':'translateY(30px)';});var StyledTocToggle=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"toc__StyledTocToggle",componentId:"c2gnov-6"})(["font:",";color:",";cursor:pointer;position:fixed;top:0;right:",";line-height:",";user-select:none;z-index:10;display:none;@media screen and (max-width:","px){display:block;}"],function(props){return props.theme.typography.font300;},function(props){return props.theme.colors.mono100;},function(props){return props.theme.sizing.scale800;},function(props){return props.theme.sizing.scale1600;},function(props){return props.theme.breakpoints.medium;});var toc_TocToggle=function TocToggle(_ref){var toggleToc=_ref.toggleToc,$isTocOpen=_ref.$isTocOpen,$isMenuOpen=_ref.$isMenuOpen;return $isMenuOpen?null:/*#__PURE__*/react_default.a.createElement(StyledTocToggle,{onClick:toggleToc},"Table of Contents");};

/***/ }),

/***/ "emEt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "PageResourceStatus", function() { return /* binding */ PageResourceStatus; });
__webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return /* binding */ loader_BaseLoader; });
__webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return /* binding */ loader_ProdLoader; });
__webpack_require__.d(__webpack_exports__, "setLoader", function() { return /* binding */ setLoader; });
__webpack_require__.d(__webpack_exports__, "publicLoader", function() { return /* binding */ publicLoader; });

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("pJf4");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("q8oJ");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("cFtU");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("m210");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("4DPX");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.set.js
var es6_set = __webpack_require__("ToIb");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("rzGZ");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("Dq+y");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("YbXK");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.map.js
var es6_map = __webpack_require__("xJgp");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("gu/5");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("eoYm");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("E5k/");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("6kNP");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("8npG");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.ends-with.js
var es6_string_ends_with = __webpack_require__("WevN");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("Ggvi");

// CONCATENATED MODULE: ./.cache/prefetch.js
var support=function support(feature){if(typeof document==="undefined"){return false;}var fakeLink=document.createElement("link");try{if(fakeLink.relList&&typeof fakeLink.relList.supports==="function"){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};var linkPrefetchStrategy=function linkPrefetchStrategy(url,options){return new Promise(function(resolve,reject){if(typeof document==="undefined"){reject();return;}var link=document.createElement("link");link.setAttribute("rel","prefetch");link.setAttribute("href",url);Object.keys(options).forEach(function(key){link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;var parentElement=document.getElementsByTagName("head")[0]||document.getElementsByName("script")[0].parentNode;parentElement.appendChild(link);});};var xhrPrefetchStrategy=function xhrPrefetchStrategy(url){return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open("GET",url,true);req.onload=function(){if(req.status===200){resolve();}else{reject();}};req.send(null);});};var supportedPrefetchStrategy=support("prefetch")?linkPrefetchStrategy:xhrPrefetchStrategy;var preFetched={};var prefetch_prefetch=function prefetch(url,options){return new Promise(function(resolve){if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(function(){resolve();preFetched[url]=true;}).catch(function(){});// 404s are logged to the console anyway
});};/* harmony default export */ var _cache_prefetch = (prefetch_prefetch);
// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__("5yr3");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("HQhv");

// EXTERNAL MODULE: ./node_modules/@reach/router/es/lib/utils.js
var utils = __webpack_require__("LYrO");

// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__("cSJ8");

// CONCATENATED MODULE: ./.cache/normalize-page-path.js
/* harmony default export */ var normalize_page_path = (function(path){if(path===undefined){return path;}if(path==="/"){return"/";}if(path.charAt(path.length-1)==="/"){return path.slice(0,-1);}return path;});
// CONCATENATED MODULE: ./.cache/find-path.js
function _createForOfIteratorHelperLoose(o){var i=0;if(typeof Symbol==="undefined"||o[Symbol.iterator]==null){if(Array.isArray(o)||(o=_unsupportedIterableToArray(o)))return function(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}i=o[Symbol.iterator]();return i.next.bind(i);}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}var pathCache=new Map();var find_path_matchPaths=[];var find_path_trimPathname=function trimPathname(rawPathname){var pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
var trimmedPathname=Object(strip_prefix["a" /* default */])(pathname,"")// Remove any hashfragment
.split("#")[0]// Remove search query
.split("?")[0];return trimmedPathname;};/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */var setMatchPaths=function setMatchPaths(value){find_path_matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */var find_path_findMatchPath=function findMatchPath(rawPathname){var trimmedPathname=find_path_cleanPath(rawPathname);for(var _iterator=_createForOfIteratorHelperLoose(find_path_matchPaths),_step;!(_step=_iterator()).done;){var _step$value=_step.value,matchPath=_step$value.matchPath,path=_step$value.path;if(Object(utils["b" /* match */])(matchPath,trimmedPathname)){return normalize_page_path(path);}}return null;};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
var findPath=function findPath(rawPathname){var trimmedPathname=find_path_trimPathname(rawPathname);if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}var foundPath=find_path_findMatchPath(trimmedPathname);if(!foundPath){foundPath=find_path_cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */var find_path_cleanPath=function cleanPath(rawPathname){var trimmedPathname=find_path_trimPathname(rawPathname);var foundPath=trimmedPathname;if(foundPath==="/index.html"){foundPath="/";}foundPath=normalize_page_path(foundPath);return foundPath;};
// CONCATENATED MODULE: ./.cache/loader.js
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||loader_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function loader_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return loader_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return loader_arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return loader_arrayLikeToArray(arr);}function loader_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}/**
 * Available resource loading statuses
 */var PageResourceStatus={/**
   * At least one of critical resources failed to load
   */Error:"error",/**
   * Resources loaded successfully
   */Success:"success"};var preferDefault=function preferDefault(m){return m&&m.default||m;};var stripSurroundingSlashes=function stripSurroundingSlashes(s){s=s[0]==="/"?s.slice(1):s;s=s.endsWith("/")?s.slice(0,-1):s;return s;};var createPageDataUrl=function createPageDataUrl(path){var fixedPath=path==="/"?"index":stripSurroundingSlashes(path);return ""+"/page-data/"+fixedPath+"/page-data.json";};var doFetch=function doFetch(url,method){if(method===void 0){method="GET";}return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=function(){if(req.readyState==4){resolve(req);}};req.send(null);});};var _loadPageDataJson=function loadPageDataJson(loadObj){var pagePath=loadObj.pagePath,_loadObj$retries=loadObj.retries,retries=_loadObj$retries===void 0?0:_loadObj$retries;var url=createPageDataUrl(pagePath);return doFetch(url).then(function(req){var status=req.status,responseText=req.responseText;// Handle 200
if(status===200){try{var jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error("not a valid pageData response");}return Object.assign(loadObj,{status:PageResourceStatus.Success,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404 page and it doesn't exist, we're done
if(pagePath==="/404.html"){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return _loadPageDataJson(Object.assign(loadObj,{pagePath:"/404.html",notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return _loadPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is an error.
return Object.assign(loadObj,{status:PageResourceStatus.Error});});};var doesConnectionSupportPrefetch=function doesConnectionSupportPrefetch(){if("connection"in navigator&&typeof navigator.connection!=="undefined"){if((navigator.connection.effectiveType||"").includes("2g")){return false;}if(navigator.connection.saveData){return false;}}return true;};var toPageResources=function toPageResources(pageData,component){if(component===void 0){component=null;}var page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath};return{component:component,json:pageData.result,page:page};};var loader_BaseLoader=/*#__PURE__*/function(){function BaseLoader(loadComponent,matchPaths){// Map of pagePath -> Page. Where Page is an object with: {
//   status: PageResourceStatus.Success || PageResourceStatus.Error,
//   payload: PageResources, // undefined if PageResourceStatus.Error
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//   }
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;setMatchPaths(matchPaths);}var _proto=BaseLoader.prototype;_proto.setApiRunner=function setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner("disableCorePrefetching").some(function(a){return a;});};_proto.loadPageDataJson=function loadPageDataJson(rawPath){var _this=this;var pagePath=findPath(rawPath);if(this.pageDataDb.has(pagePath)){return Promise.resolve(this.pageDataDb.get(pagePath));}return _loadPageDataJson({pagePath:pagePath}).then(function(pageData){_this.pageDataDb.set(pagePath,pageData);return pageData;});};_proto.findMatchPath=function findMatchPath(rawPath){return find_path_findMatchPath(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
;_proto.loadPage=function loadPage(rawPath){var _this2=this;var pagePath=findPath(rawPath);if(this.pageDb.has(pagePath)){var page=this.pageDb.get(pagePath);return Promise.resolve(page.payload);}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}var inFlight=Promise.all([this.loadAppData(),this.loadPageDataJson(pagePath)]).then(function(allData){var result=allData[1];if(result.status===PageResourceStatus.Error){return{status:PageResourceStatus.Error};}var pageData=result.payload;var _pageData=pageData,componentChunkName=_pageData.componentChunkName;return _this2.loadComponent(componentChunkName).then(function(component){var finalResult={createdAt:new Date()};var pageResources;if(!component){finalResult.status=PageResourceStatus.Error;}else{finalResult.status=PageResourceStatus.Success;if(result.notFound===true){finalResult.notFound=true;}pageData=Object.assign(pageData,{webpackCompilationHash:allData[0]?allData[0].webpackCompilationHash:""});pageResources=toPageResources(pageData,component);finalResult.payload=pageResources;emitter["a" /* default */].emit("onPostLoadPageResources",{page:pageResources,pageResources:pageResources});}_this2.pageDb.set(pagePath,finalResult);// undefined if final result is an error
return pageResources;});})// prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
.then(function(response){_this2.inFlightDb.delete(pagePath);return response;}).catch(function(err){_this2.inFlightDb.delete(pagePath);throw err;});this.inFlightDb.set(pagePath,inFlight);return inFlight;}// returns undefined if loading page ran into errors
;_proto.loadPageSync=function loadPageSync(rawPath){var pagePath=findPath(rawPath);if(this.pageDb.has(pagePath)){return this.pageDb.get(pagePath).payload;}return undefined;};_proto.shouldPrefetch=function shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;};_proto.prefetch=function prefetch(pagePath){var _this3=this;if(!this.shouldPrefetch(pagePath)){return false;}// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner("onPrefetchPathname",{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return false;}var realPath=findPath(pagePath);// Todo make doPrefetch logic cacheable
// eslint-disable-next-line consistent-return
this.doPrefetch(realPath).then(function(){if(!_this3.prefetchCompleted.has(pagePath)){_this3.apiRunner("onPostPrefetchPathname",{pathname:pagePath});_this3.prefetchCompleted.add(pagePath);}});return true;};_proto.doPrefetch=function doPrefetch(pagePath){throw new Error("doPrefetch not implemented");};_proto.hovering=function hovering(rawPath){this.loadPage(rawPath);};_proto.getResourceURLsForPathname=function getResourceURLsForPathname(rawPath){var pagePath=findPath(rawPath);var page=this.pageDataDb.get(pagePath);if(page){var pageResources=toPageResources(page.payload);return[].concat(_toConsumableArray(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}};_proto.isPageNotFound=function isPageNotFound(rawPath){var pagePath=findPath(rawPath);var page=this.pageDb.get(pagePath);return page&&page.notFound===true;};_proto.loadAppData=function loadAppData(retries){var _this4=this;if(retries===void 0){retries=0;}return doFetch(""+"/page-data/app-data.json").then(function(req){var status=req.status,responseText=req.responseText;var appData;if(status!==200&&retries<3){// Retry 3 times incase of non-200 responses
return _this4.loadAppData(retries+1);}// Handle 200
if(status===200){try{var jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error("not a valid app-data response");}appData=jsonPayload;}catch(err){// continue regardless of error
}}return appData;});};return BaseLoader;}();var createComponentUrls=function createComponentUrls(componentChunkName){return(window.___chunkMapping[componentChunkName]||[]).map(function(chunk){return ""+chunk;});};var loader_ProdLoader=/*#__PURE__*/function(_BaseLoader){_inheritsLoose(ProdLoader,_BaseLoader);function ProdLoader(asyncRequires,matchPaths){var loadComponent=function loadComponent(chunkName){return asyncRequires.components[chunkName]?asyncRequires.components[chunkName]().then(preferDefault)// loader will handle the case when component is null
.catch(function(){return null;}):Promise.resolve();};return _BaseLoader.call(this,loadComponent,matchPaths)||this;}var _proto2=ProdLoader.prototype;_proto2.doPrefetch=function doPrefetch(pagePath){var _this5=this;var pageDataUrl=createPageDataUrl(pagePath);return _cache_prefetch(pageDataUrl,{crossOrigin:"anonymous",as:"fetch"}).then(function(){return(// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
_this5.loadPageDataJson(pagePath));}).then(function(result){if(result.status!==PageResourceStatus.Success){return Promise.resolve();}var pageData=result.payload;var chunkName=pageData.componentChunkName;var componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_cache_prefetch)).then(function(){return pageData;});});};_proto2.loadPageDataJson=function loadPageDataJson(rawPath){return _BaseLoader.prototype.loadPageDataJson.call(this,rawPath).then(function(data){if(data.notFound){// check if html file exist using HEAD request:
// if it does we should navigate to it instead of showing 404
return doFetch(rawPath,"HEAD").then(function(req){if(req.status===200){// page (.html file) actually exist (or we asked for 404 )
// returning page resources status as errored to trigger
// regular browser navigation to given page
return{status:PageResourceStatus.Error};}// if HEAD request wasn't 200, return notFound result
// and show 404 page
return data;});}return data;});};return ProdLoader;}(loader_BaseLoader);var instance;var setLoader=function setLoader(_loader){instance=_loader;};var publicLoader={// Deprecated methods. As far as we're aware, these are only used by
// core gatsby and the offline plugin, however there's a very small
// chance they're called by others.
getResourcesForPathname:function getResourcesForPathname(rawPath){console.warn("Warning: getResourcesForPathname is deprecated. Use loadPage instead");return instance.i.loadPage(rawPath);},getResourcesForPathnameSync:function getResourcesForPathnameSync(rawPath){console.warn("Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead");return instance.i.loadPageSync(rawPath);},enqueue:function enqueue(rawPath){return instance.prefetch(rawPath);},// Real methods
getResourceURLsForPathname:function getResourceURLsForPathname(rawPath){return instance.getResourceURLsForPathname(rawPath);},loadPage:function loadPage(rawPath){return instance.loadPage(rawPath);},loadPageSync:function loadPageSync(rawPath){return instance.loadPageSync(rawPath);},prefetch:function prefetch(rawPath){return instance.prefetch(rawPath);},isPageNotFound:function isPageNotFound(rawPath){return instance.isPageNotFound(rawPath);},hovering:function hovering(rawPath){return instance.hovering(rawPath);},loadAppData:function loadAppData(){return instance.loadAppData();}};/* harmony default export */ var loader = __webpack_exports__["default"] = (publicLoader);

/***/ }),

/***/ "emib":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "eoYm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("P8UN");
var context = __webpack_require__("YdGP");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("h+B4")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "fhoV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("ouCZ")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "gu/5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("P8UN");
var $includes = __webpack_require__("Ar2q")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("Dq1/")('includes');


/***/ }),

/***/ "gx6d":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__("1Llc");
var toLength = __webpack_require__("kiRH");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "h+B4":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("sOol")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "h/qr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("96qb");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "hFT/":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("U6Bt");

__webpack_require__("rzGZ");

__webpack_require__("Dq+y");

__webpack_require__("8npG");

__webpack_require__("Ggvi");

__webpack_require__("AqHK");

exports.__esModule = true;
var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
  BODY: "bodyAttributes",
  HTML: "htmlAttributes",
  TITLE: "titleAttributes"
};
var TAG_NAMES = exports.TAG_NAMES = {
  BASE: "base",
  BODY: "body",
  HEAD: "head",
  HTML: "html",
  LINK: "link",
  META: "meta",
  NOSCRIPT: "noscript",
  SCRIPT: "script",
  STYLE: "style",
  TITLE: "title"
};
var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
  return TAG_NAMES[name];
});
var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
  CHARSET: "charset",
  CSS_TEXT: "cssText",
  HREF: "href",
  HTTPEQUIV: "http-equiv",
  INNER_HTML: "innerHTML",
  ITEM_PROP: "itemprop",
  NAME: "name",
  PROPERTY: "property",
  REL: "rel",
  SRC: "src"
};
var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  "class": "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HELMET_PROPS = exports.HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate"
};
var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
  obj[REACT_TAG_MAP[key]] = key;
  return obj;
}, {});
var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ "hUyl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__("sC2a");var offsetY=0;var getTargetOffset=function getTargetOffset(hash){var id=window.decodeURI(hash.replace("#",""));if(id!==""){var element=document.getElementById(id);if(element){var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;var clientTop=document.documentElement.clientTop||document.body.clientTop||0;return element.getBoundingClientRect().top+scrollTop-clientTop-offsetY;}}return null;};exports.onInitialClientRender=function(_,pluginOptions){if(pluginOptions.offsetY){offsetY=pluginOptions.offsetY;}requestAnimationFrame(function(){var offset=getTargetOffset(window.location.hash);if(offset!==null){window.scrollTo(0,offset);}});};exports.shouldUpdateScroll=function(_ref){var location=_ref.routerProps.location;var offset=getTargetOffset(location.hash);return offset!==null?[0,offset]:true;};

/***/ }),

/***/ "j8BX":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "jJtK":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("emib");
var macrotask = __webpack_require__("Tgxb").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("CCE/")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "k5Iv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("QPJK");
var getKeys = __webpack_require__("2mBY");
var gOPS = __webpack_require__("lHo0");
var pIE = __webpack_require__("BnbX");
var toObject = __webpack_require__("DFzH");
var IObject = __webpack_require__("U2V1");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("96qb")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "kaKw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ table_of_contents_TableOfContents; });

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("pJf4");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("q8oJ");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("YbXK");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("cFtU");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("m210");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("4DPX");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("E5k/");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("rzGZ");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("Dq+y");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("8npG");

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("cxuS");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("TAD1");

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/styled/toc.jsx + 1 modules
var toc = __webpack_require__("dx5X");

// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/table-of-contents.component.jsx
/* eslint-disable prefer-const */ // Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// sub components of the TOC
// This component only creates a Link component if clicking on that Link will
// effectively change routes. If no path is passed or if the path is not
// usable then it just renders a div. That should not be the case
var table_of_contents_component_SafeLink=function SafeLink(_ref){var active=_ref.active,depth=_ref.depth,hasChildren=_ref.hasChildren,isTocOpen=_ref.isTocOpen,id=_ref.id,name=_ref.name,path=_ref.path,_ref$toggleEntry=_ref.toggleEntry,toggleEntry=_ref$toggleEntry===void 0?function(){}:_ref$toggleEntry;// Gatsby <Link> element emmits warning if "external" links are used
// "internal" links start with `/`
// https://github.com/gatsbyjs/gatsby/issues/11243
if(path&&!path.startsWith('/')){path="/"+path;// eslint-disable-line
}return/*#__PURE__*/react_default.a.createElement(toc["c" /* TocEntry */],{$depth:depth,title:name,onClick:function onClick(){return toggleEntry(id);}},hasChildren&&/*#__PURE__*/react_default.a.createElement(toc["a" /* TocChevron */],{$depth:depth,$isTocOpen:isTocOpen}),!path||typeof path!=='string'?/*#__PURE__*/react_default.a.createElement(toc["d" /* TocHeader */],{$depth:depth},name):/*#__PURE__*/react_default.a.createElement(toc["e" /* TocLink */],{$depth:depth,$active:active},/*#__PURE__*/react_default.a.createElement(gatsby_browser_entry["a" /* Link */],{to:path,title:name},name)));};var table_of_contents_component_renderRoute=function renderRoute(_ref2){var route=_ref2.route,id=_ref2.id,index=_ref2.index,depth=_ref2.depth,tocState=_ref2.tocState,toggleEntry=_ref2.toggleEntry;var children=route.chapters||route.entries||[];var updatedId=id.concat(index);// parts of the TOC with children
if(children.length){var _name=route.title;var routeInfo=tocState[updatedId];return/*#__PURE__*/react_default.a.createElement("div",{key:index},/*#__PURE__*/react_default.a.createElement(table_of_contents_component_SafeLink,{depth:depth,hasChildren:true,isTocOpen:routeInfo&&routeInfo.height>0,id:updatedId,name:_name/* uncomment to have the entry act as link to its first child */ /* path={routeInfo && routeInfo.pathToFirstChild} */,toggleEntry:toggleEntry}),/*#__PURE__*/react_default.a.createElement(toc["f" /* TocSubpages */],{$height:routeInfo&&routeInfo.height},children.map(function(childRoute,idx){return renderRoute({depth:depth+1,id:updatedId,index:idx,route:childRoute,tocState:tocState,toggleEntry:toggleEntry});})));}// leaves
var remark=route.childMarkdownRemark;// first syntax is toc for documentation, second is toc for examples
var name=remark&&remark.frontmatter&&remark.frontmatter.title||route.title;var target=remark&&remark.fields&&remark.fields.slug||route.path;return/*#__PURE__*/react_default.a.createElement("div",{key:index},/*#__PURE__*/react_default.a.createElement("li",null,/*#__PURE__*/react_default.a.createElement(table_of_contents_component_SafeLink,{active:tocState[updatedId]&&tocState[updatedId].isSelected===true,depth:depth,name:name,path:target})));};var table_of_contents_component_ControlledToc=function ControlledToc(_ref3){var tree=_ref3.tree,tocState=_ref3.tocState,toggleEntry=_ref3.toggleEntry;return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,tree.map(function(route,index){return table_of_contents_component_renderRoute({route:route,index:index,depth:0,tocState:tocState,toggleEntry:toggleEntry,id:[]});}));};/* harmony default export */ var table_of_contents_component = (table_of_contents_component_ControlledToc);
// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/table-of-contents.jsx
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}/* eslint-disable operator-assignment */ /* eslint-disable no-param-reassign */ /* eslint-disable prefer-const */ // Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// util functions to pre-process the TOC
function isOpen(entry,expanded){// this is all the reasons why a given toc entry with children could
// be expanded.
// either it's manually expanded, or it's on the active route and
// it's not manually collapsed.
return expanded[entry.id]===true||entry.childIsSelected&&expanded[entry.id]!==false;}function updateHeights(tocEntries,expanded){// at this stage we know which entries are expanded or not, whether manually
// or because they contain the active page. now let's compute their heights
// why is it important to compute heights? because without an an absolute
// number we can't transition on height and have smooth collapse effects.
Object.values(tocEntries).forEach(function(tocEntry){if(tocEntry.children){if(isOpen(tocEntry,expanded)){(function(){var queue=[tocEntry];var height=-1;while(queue.length){var current=queue.shift();height=height+1;if(isOpen(current,expanded)){current.children.forEach(function(c){return queue.push(tocEntries[c]);});}}tocEntry.height=height;})();}else{tocEntry.height=0;}}});return tocEntries;}function getTocState(_ref){var chapters=_ref.chapters,slug=_ref.slug,expanded=_ref.expanded;// we try to generate the height of each toc entry and whether it's expanded
// or not based on the toc structure (chapters), whether some entries are
// manually expanded or not (open) and what's the current page (slug)
// there may be a lot of code but this goes very fast even for long tocs.
// one way to uniquely identify entries is by creating an id made of the
// index position of all of its parents and itself.
// ie [2, 0, 1] - 3nd chapter, 1st entry, 2nd item.
var entries={};var queue=chapters.map(function(chapter,i){return Object.assign(Object.assign({},chapter),{},{id:[i],parents:[]});});var _loop=function _loop(){var current=queue.shift();var id=current.id;entries[id]={id:id};var children=(current.chapters||current.entries||[]).map(function(child,i){return Object.assign(Object.assign({},child),{},{id:id.concat(i),parents:[].concat(_toConsumableArray(current.parents),[id])});});if(children.length){entries[id].children=children.map(function(c){return c.id;});}children.forEach(function(c){return queue.push(c);});if(current.childMarkdownRemark){// only happens for leave nodes
current.parents.forEach(function(parent){if(current.childMarkdownRemark.fields.slug===slug){entries[parent].childIsSelected=true;}// currently the behavior of entries is to toggle them
// if we switch to using them as link to the first child (as before)
// we can just uncomment that line
// entries[parent].pathToFirstChild = current.childMarkdownRemark.fields.slug;
});entries[id].isSelected=current.childMarkdownRemark.fields.slug===slug;}};while(queue.length){_loop();}return updateHeights(entries,expanded);}var table_of_contents_TableOfContents=/*#__PURE__*/function(_PureComponent){_inheritsLoose(TableOfContents,_PureComponent);function TableOfContents(props){var _this;_this=_PureComponent.call(this,props)||this;var slug=props.slug,chapters=props.chapters,firstItemIsExpanded=props.firstItemIsExpanded;var expanded=firstItemIsExpanded?{0:true}:{};var tocState=getTocState({slug:slug,chapters:chapters,expanded:expanded});// tocState contains the state of the TOC with information such as
// what is the current height of an entry?
// is an entry selected or is any of its children selected?
// expanded records whether the user manually expanded or collapsed
// a section of the TOC.
// why keep them separated? tocState get regenerated for instance
// when the slug changes (which may mean that some sections get expanded/collapsed)
// we don't want to overwrite the manual actions of the user in that case.
// instead, we first apply the "organic" changes of the toc, then on top of that
// we add the results of the user's action
_this.state={tocState:tocState,expanded:expanded};_this.toggleEntry=_this.toggleEntry.bind(_assertThisInitialized(_this));return _this;}var _proto=TableOfContents.prototype;_proto.componentDidUpdate=function componentDidUpdate(prevProps){var _this$props=this.props,chapters=_this$props.chapters,slug=_this$props.slug,firstItemIsExpanded=_this$props.firstItemIsExpanded;if(slug!==prevProps.slug||chapters!==prevProps.chapters){var expanded=chapters===prevProps.chapters?this.state.expanded:firstItemIsExpanded?{0:true}:{};var tocState=getTocState({chapters:chapters,slug:slug,expanded:expanded});// eslint-disable-next-line react/no-did-update-set-state
this.setState({tocState:tocState,expanded:expanded});}};_proto.toggleEntry=function toggleEntry(id){var _this$state=this.state,expanded=_this$state.expanded,tocState=_this$state.tocState;var updatedExpanded=Object.assign({},expanded);var entry=tocState[id];// if this entry has been manually expanded, then we manually collapse it.
// else - either this entry has never been manually expanded/collapsed,
// or it has been manually collapsed - we expand it.
updatedExpanded[id]=!isOpen(entry,expanded);// then we need to update the heights.
var updatedTocState=updateHeights(Object.assign({},tocState),updatedExpanded);this.setState({tocState:updatedTocState,expanded:updatedExpanded});};_proto.render=function render(){var tree=this.props.chapters;var tocState=this.state.tocState;if(!tree){return null;}return/*#__PURE__*/react_default.a.createElement(table_of_contents_component,{tree:tree,tocState:tocState,toggleEntry:this.toggleEntry});};return TableOfContents;}(react["PureComponent"]);

/***/ }),

/***/ "kiRH":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("1Llc");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "klQ5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("emib");
var inheritIfRequired = __webpack_require__("TUPI");
var dP = __webpack_require__("rjfK").f;
var gOPN = __webpack_require__("chL8").f;
var isRegExp = __webpack_require__("mhTz");
var $flags = __webpack_require__("lb9j");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("QPJK") && (!CORRECT_NEW || __webpack_require__("96qb")(function () {
  re2[__webpack_require__("sOol")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("IYdN")(global, 'RegExp', $RegExp);
}

__webpack_require__("to/b")('RegExp');


/***/ }),

/***/ "kxs/":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("BjK0");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "lFjb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("P8UN");
var toIObject = __webpack_require__("5SQf");
var toInteger = __webpack_require__("1Llc");
var toLength = __webpack_require__("kiRH");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__("h/qr")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "lHo0":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "lb9j":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("1a8y");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ltAs":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("qDzq");
var toObject = __webpack_require__("DFzH");
var IE_PROTO = __webpack_require__("oMtz")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "lw3w":
/***/ (function(module, exports, __webpack_require__) {

var preferDefault=function preferDefault(m){return m&&m.default||m;};if(false){}else if(true){module.exports=preferDefault(__webpack_require__("rzlk"));}else{}

/***/ }),

/***/ "m+kh":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "m210":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("ovV4")('asyncIterator');


/***/ }),

/***/ "m8CP":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("2mBY");
var gOPS = __webpack_require__("lHo0");
var pIE = __webpack_require__("BnbX");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "mhTz":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("BjK0");
var cof = __webpack_require__("CCE/");
var MATCH = __webpack_require__("sOol")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "n7j8":
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__("P8UN");

$export($export.P, 'Function', { bind: __webpack_require__("16Xr") });


/***/ }),

/***/ "nGNX":
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"config\":{\"PROJECT_NAME\":\"earthengine-layers\",\"PROJECT_TYPE\":\"github\",\"PROJECT_DESC\":\"deck.gl layers for Google Earth Engine for JavaScript and Python\",\"PROJECT_URL\":\"https://github.com/UnfoldedInc/earthengine-layers\",\"PROJECT_ORG\":\"UnfoldedInc\",\"PROJECT_ORG_LOGO\":\"images/unfolded.png\",\"LINK_TO_GET_STARTED\":\"/docs/developer-guide/get-started\",\"HOME_MARKDOWN\":\"\",\"PATH_PREFIX\":\"/\",\"EXAMPLES\":[{\"title\":\"EE Image\",\"path\":\"examples/image\"},{\"title\":\"EE ImageCollection\",\"path\":\"examples/image-collection\"},{\"title\":\"EE FeatureCollection (lines)\",\"path\":\"examples/noaa-hurricanes\"},{\"title\":\"EE FeatureCollection (polygons)\",\"path\":\"examples/intl-boundary\"}],\"THEME_OVERRIDES\":\"\",\"STYLESHEETS\":[\"https://api.tiles.mapbox.com/mapbox-gl-js/v1.6.0/mapbox-gl.css\"],\"PROJECTS\":[{\"name\":\"deck.gl\",\"url\":\"https://deck.gl\"},{\"name\":\"pydeck\",\"url\":\"https://pydeck.gl\"},{\"name\":\"earthengine-api\",\"url\":\"https://github.com/google/earthengine-api\"}],\"ADDITIONAL_LINKS\":[{\"name\":\"Blog\",\"href\":\"http://medium.com/vis-gl\",\"index\":1}]}}},\"allMarkdown\":{\"edges\":[{\"node\":{\"id\":\"3bed55c7-9e5c-58c7-af51-4df93daaec25\",\"fields\":{\"slug\":\"docs\"},\"frontmatter\":{\"title\":\"earthengine-layers\"}}},{\"node\":{\"id\":\"08bcb5a4-ad22-554a-8f5d-f5cc039abdc2\",\"fields\":{\"slug\":\"docs/whats-new\"},\"frontmatter\":{\"title\":\"What's New\"}}},{\"node\":{\"id\":\"c68649e7-a8da-511b-90df-f816e8fd1cf9\",\"fields\":{\"slug\":\"docs/developer-guide/authentication\"},\"frontmatter\":{\"title\":\"Authentication\"}}},{\"node\":{\"id\":\"8e9240f3-5325-5b40-a6a1-f7bdc0913661\",\"fields\":{\"slug\":\"docs/developer-guide/get-started\"},\"frontmatter\":{\"title\":\"Get Started\"}}},{\"node\":{\"id\":\"693bb478-65f6-57bd-8682-32ddfd9d064f\",\"fields\":{\"slug\":\"docs/developer-guide/pydeck-integration\"},\"frontmatter\":{\"title\":\"pydeck Integration\"}}},{\"node\":{\"id\":\"e2ff1ab0-36d3-511b-97aa-e6e82394a9ae\",\"fields\":{\"slug\":\"modules/earthengine-layers\"},\"frontmatter\":{\"title\":\"@unfolded.gl/earthengine-layers\"}}},{\"node\":{\"id\":\"17745ed9-1d3e-546a-afa4-2ab04b94d391\",\"fields\":{\"slug\":\"modules/earthengine-layers/docs/api-reference/earthengine-layer\"},\"frontmatter\":{\"title\":\"EarthEngineLayer\"}}},{\"node\":{\"id\":\"11945ca7-4db9-59ff-8355-43c12a158539\",\"fields\":{\"slug\":\"py/CHANGELOG\"},\"frontmatter\":{\"title\":\"Changelog\"}}},{\"node\":{\"id\":\"bb2eb58e-cd9a-507d-9878-09325152cb0b\",\"fields\":{\"slug\":\"py\"},\"frontmatter\":{\"title\":\"pydeck-earthengine-layers\"}}},{\"node\":{\"id\":\"6fa8a383-aa56-543e-8c19-b009d24ff47d\",\"fields\":{\"slug\":\"py/examples\"},\"frontmatter\":{\"title\":\" Earth Engine Pydeck examples\"}}},{\"node\":{\"id\":\"3038da6b-a2a4-5f3b-bf54-23ead9552f6f\",\"fields\":{\"slug\":\"py/docs/pydeck-earthengine-layer\"},\"frontmatter\":{\"title\":\"Pydeck EarthEngineLayer\"}}},{\"node\":{\"id\":\"4bbc1bdc-a25f-506f-95bc-2dc935d715c6\",\"fields\":{\"slug\":\"website/src/components\"},\"frontmatter\":{\"title\":\"d any custom React components here.\"}}}]},\"tableOfContents\":{\"chapters\":[{\"title\":\"Developer Guide\",\"level\":1,\"chapters\":[{\"title\":\"Overview\",\"level\":2,\"entries\":[{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"earthengine-layers\"},\"fields\":{\"slug\":\"docs\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"What's New\"},\"fields\":{\"slug\":\"docs/whats-new\"}}}]},{\"title\":\"Guides\",\"level\":2,\"entries\":[{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Get Started\"},\"fields\":{\"slug\":\"docs/developer-guide/get-started\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Authentication\"},\"fields\":{\"slug\":\"docs/developer-guide/authentication\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"pydeck Integration\"},\"fields\":{\"slug\":\"docs/developer-guide/pydeck-integration\"}}}]}],\"entries\":null},{\"title\":\"API Reference\",\"level\":1,\"chapters\":null,\"entries\":[{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"EarthEngineLayer\"},\"fields\":{\"slug\":\"modules/earthengine-layers/docs/api-reference/earthengine-layer\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Pydeck EarthEngineLayer\"},\"fields\":{\"slug\":\"py/docs/pydeck-earthengine-layer\"}}}]}]}}}");

/***/ }),

/***/ "nONw":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "nsRs":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("1a8y");
var dPs = __webpack_require__("YmeT");
var enumBugKeys = __webpack_require__("U33C");
var IE_PROTO = __webpack_require__("oMtz")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("YGZZ")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("ZvP9").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "nwwn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.DEFAULT_OPTIONS={maxWidth:650,wrapperStyle:"",backgroundColor:"white",linkImagesToOriginal:true,showCaptions:false,markdownCaptions:false,withWebp:false,tracedSVG:false,loading:"lazy",disableBgImageOnAlpha:false,disableBgImage:false};exports.imageClass="gatsby-resp-image-image";exports.imageWrapperClass="gatsby-resp-image-wrapper";exports.imageBackgroundClass="gatsby-resp-image-background-image";

/***/ }),

/***/ "oMtz":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("4dA+")('keys');
var uid = __webpack_require__("UEZ0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "ot9L":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("nONw");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "ouCZ":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("1Llc");
var defined = __webpack_require__("ap2Z");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "ovV4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("emib");
var core = __webpack_require__("Phdo");
var LIBRARY = __webpack_require__("939K");
var wksExt = __webpack_require__("PjVt");
var defineProperty = __webpack_require__("rjfK").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "pCP8":
/***/ (function(module, exports, __webpack_require__) {

// prefer default export if available
var preferDefault=function preferDefault(m){return m&&m.default||m;};exports.components={"component---examples-image-app-js":function componentExamplesImageAppJs(){return Promise.all(/* import() | component---examples-image-app-js */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "k1r1"));},"component---examples-image-collection-app-js":function componentExamplesImageCollectionAppJs(){return Promise.all(/* import() | component---examples-image-collection-app-js */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "ckFc"));},"component---examples-intl-boundary-app-js":function componentExamplesIntlBoundaryAppJs(){return Promise.all(/* import() | component---examples-intl-boundary-app-js */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, "Wfdd"));},"component---examples-noaa-hurricanes-app-js":function componentExamplesNoaaHurricanesAppJs(){return Promise.all(/* import() | component---examples-noaa-hurricanes-app-js */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, "8BNJ"));},"component---node-modules-gatsby-theme-ocular-src-react-templates-documentation-jsx":function componentNodeModulesGatsbyThemeOcularSrcReactTemplatesDocumentationJsx(){return Promise.all(/* import() | component---node-modules-gatsby-theme-ocular-src-react-templates-documentation-jsx */[__webpack_require__.e(0), __webpack_require__.e(4), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, "bzNg"));},"component---node-modules-gatsby-theme-ocular-src-react-templates-examples-jsx":function componentNodeModulesGatsbyThemeOcularSrcReactTemplatesExamplesJsx(){return __webpack_require__.e(/* import() | component---node-modules-gatsby-theme-ocular-src-react-templates-examples-jsx */ 12).then(__webpack_require__.bind(null, "2flm"));},"component---node-modules-gatsby-theme-ocular-src-react-templates-search-jsx":function componentNodeModulesGatsbyThemeOcularSrcReactTemplatesSearchJsx(){return __webpack_require__.e(/* import() | component---node-modules-gatsby-theme-ocular-src-react-templates-search-jsx */ 13).then(__webpack_require__.bind(null, "H/ma"));},"component---templates-index-jsx":function componentTemplatesIndexJsx(){return Promise.all(/* import() | component---templates-index-jsx */[__webpack_require__.e(0), __webpack_require__.e(4), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, "5462"));}};

/***/ }),

/***/ "pJf4":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("rjfK").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("QPJK") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "pS08":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("P8UN");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("nsRs") });


/***/ }),

/***/ "pSXQ":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "q5+k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("wZFJ");

var _interopRequireDefault = __webpack_require__("5NKs");

exports.__esModule = true;
exports["default"] = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__("Bp9Y"));

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM["default"]) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}
/* https://github.com/component/raf */


var prev = new Date().getTime();

function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};

compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};

var _default = compatRaf;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "q8oJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("Kz6e");
var anObject = __webpack_require__("1a8y");
var $flags = __webpack_require__("lb9j");
var DESCRIPTORS = __webpack_require__("QPJK");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("IYdN")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("96qb")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "q9nr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__("E5k/");var _require=__webpack_require__("nwwn"),DEFAULT_OPTIONS=_require.DEFAULT_OPTIONS,imageClass=_require.imageClass,imageBackgroundClass=_require.imageBackgroundClass,imageWrapperClass=_require.imageWrapperClass;exports.onRouteUpdate=function(apiCallbackContext,pluginOptions){var options=Object.assign({},DEFAULT_OPTIONS,pluginOptions);var imageWrappers=document.querySelectorAll("."+imageWrapperClass);// https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
// for cross-browser looping through NodeList without polyfills
var _loop=function _loop(i){var imageWrapper=imageWrappers[i];var backgroundElement=imageWrapper.querySelector("."+imageBackgroundClass);var imageElement=imageWrapper.querySelector("."+imageClass);var onImageLoad=function onImageLoad(){backgroundElement.style.transition="opacity 0.5s 0.5s";imageElement.style.transition="opacity 0.5s";onImageComplete();};var onImageComplete=function onImageComplete(){backgroundElement.style.opacity=0;imageElement.style.opacity=1;imageElement.style.color="inherit";imageElement.style.boxShadow="inset 0px 0px 0px 400px "+options.backgroundColor;imageElement.removeEventListener("load",onImageLoad);imageElement.removeEventListener("error",onImageComplete);};imageElement.style.opacity=0;imageElement.addEventListener("load",onImageLoad);imageElement.addEventListener("error",onImageComplete);if(imageElement.complete){onImageComplete();}};for(var i=0;i<imageWrappers.length;i++){_loop(i);}};

/***/ }),

/***/ "qDzq":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "qT12":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


__webpack_require__("m210");

__webpack_require__("4DPX");

var b = "function" === typeof Symbol && Symbol["for"],
    c = b ? Symbol["for"]("react.element") : 60103,
    d = b ? Symbol["for"]("react.portal") : 60106,
    e = b ? Symbol["for"]("react.fragment") : 60107,
    f = b ? Symbol["for"]("react.strict_mode") : 60108,
    g = b ? Symbol["for"]("react.profiler") : 60114,
    h = b ? Symbol["for"]("react.provider") : 60109,
    k = b ? Symbol["for"]("react.context") : 60110,
    l = b ? Symbol["for"]("react.async_mode") : 60111,
    m = b ? Symbol["for"]("react.concurrent_mode") : 60111,
    n = b ? Symbol["for"]("react.forward_ref") : 60112,
    p = b ? Symbol["for"]("react.suspense") : 60113,
    q = b ? Symbol["for"]("react.suspense_list") : 60120,
    r = b ? Symbol["for"]("react.memo") : 60115,
    t = b ? Symbol["for"]("react.lazy") : 60116,
    v = b ? Symbol["for"]("react.block") : 60121,
    w = b ? Symbol["for"]("react.fundamental") : 60117,
    x = b ? Symbol["for"]("react.responder") : 60118,
    y = b ? Symbol["for"]("react.scope") : 60119;

function z(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;

exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};

exports.isConcurrentMode = A;

exports.isContextConsumer = function (a) {
  return z(a) === k;
};

exports.isContextProvider = function (a) {
  return z(a) === h;
};

exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};

exports.isForwardRef = function (a) {
  return z(a) === n;
};

exports.isFragment = function (a) {
  return z(a) === e;
};

exports.isLazy = function (a) {
  return z(a) === t;
};

exports.isMemo = function (a) {
  return z(a) === r;
};

exports.isPortal = function (a) {
  return z(a) === d;
};

exports.isProfiler = function (a) {
  return z(a) === g;
};

exports.isStrictMode = function (a) {
  return z(a) === f;
};

exports.isSuspense = function (a) {
  return z(a) === p;
};

exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

exports.typeOf = z;

/***/ }),

/***/ "raBC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("5NKs");

exports.__esModule = true;
exports["default"] = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__("Bp9Y"));

var on = function on() {};

if (_inDOM["default"]) {
  on = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

var _default = on;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "rj/q":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("IYdN");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "rjfK":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("1a8y");
var IE8_DOM_DEFINE = __webpack_require__("KEMg");
var toPrimitive = __webpack_require__("kxs/");
var dP = Object.defineProperty;

exports.f = __webpack_require__("QPJK") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "rzGZ":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("Dq+y");
var getKeys = __webpack_require__("2mBY");
var redefine = __webpack_require__("IYdN");
var global = __webpack_require__("emib");
var hide = __webpack_require__("8wc8");
var Iterators = __webpack_require__("m+kh");
var wks = __webpack_require__("sOol");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "rzlk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("E5k/");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IOVJ");
var ProdPageRenderer=function ProdPageRenderer(_ref){var location=_ref.location,pageResources=_ref.pageResources;if(!pageResources){return null;}return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],Object.assign({location:location,pageResources:pageResources},pageResources.json));};/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),

/***/ "s/Ur":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("YBKJ");

__webpack_require__("HXzo");

__webpack_require__("wZFJ");

__webpack_require__("Ll4R");

__webpack_require__("HQhv");

__webpack_require__("AqHK");

__webpack_require__("E5k/");

__webpack_require__("klQ5");

__webpack_require__("MIFh");

__webpack_require__("pJf4");

__webpack_require__("n7j8");

__webpack_require__("U6Bt");

__webpack_require__("pS08");

__webpack_require__("LagC");

__webpack_require__("m210");

__webpack_require__("JHok");

__webpack_require__("OeI1");

__webpack_require__("4DPX");

__webpack_require__("rzGZ");

__webpack_require__("Dq+y");

__webpack_require__("8npG");

__webpack_require__("Ggvi");

__webpack_require__("sC2a");

__webpack_require__("R48M");

!function (root, factory) {
   true ? module.exports = factory(__webpack_require__("q1tI")) : undefined;
}("undefined" != typeof self ? self : this, function (__WEBPACK_EXTERNAL_MODULE_6__) {
  return function (modules) {
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) return installedModules[moduleId].exports;
      var module = installedModules[moduleId] = {
        i: moduleId,
        l: !1,
        exports: {}
      };
      return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
    }

    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
      __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
        configurable: !1,
        enumerable: !0,
        get: getter
      });
    }, __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ? function () {
        return module["default"];
      } : function () {
        return module;
      };
      return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 5);
  }([function (module, exports, __webpack_require__) {
    var ReactIs = __webpack_require__(1);

    module.exports = __webpack_require__(8)(ReactIs.isElement, !0);
  }, function (module, exports, __webpack_require__) {
    "use strict";

    module.exports = __webpack_require__(7);
  }, function (module, exports, __webpack_require__) {
    "use strict";

    module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function toHyphenLower(match) {
      return "-" + match.toLowerCase();
    }

    function hyphenateStyleName(name) {
      if (cache.hasOwnProperty(name)) return cache[name];
      var hName = name.replace(uppercasePattern, toHyphenLower);
      return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
    }

    var uppercasePattern = /[A-Z]/g,
        msPattern = /^ms-/,
        cache = {};
    __webpack_exports__.a = hyphenateStyleName;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
        "function" == typeof Object.getOwnPropertySymbols && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }))), ownKeys.forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : obj[key] = value, obj;
    }

    var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__),
        stringOrNumber = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),
        matchers = {
      orientation: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["portrait", "landscape"]),
      scan: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["progressive", "interlace"]),
      aspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      deviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      height: stringOrNumber,
      deviceHeight: stringOrNumber,
      width: stringOrNumber,
      deviceWidth: stringOrNumber,
      color: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      colorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      monochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      resolution: stringOrNumber
    },
        features = _objectSpread({
      minAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      maxAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      minDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      maxDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      minHeight: stringOrNumber,
      maxHeight: stringOrNumber,
      minDeviceHeight: stringOrNumber,
      maxDeviceHeight: stringOrNumber,
      minWidth: stringOrNumber,
      maxWidth: stringOrNumber,
      minDeviceWidth: stringOrNumber,
      maxDeviceWidth: stringOrNumber,
      minColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      maxColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      minColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      maxColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      minMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      maxMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      minResolution: stringOrNumber,
      maxResolution: stringOrNumber
    }, matchers),
        types = {
      all: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      grid: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      aural: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      braille: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      handheld: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      print: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      projection: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      screen: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      tty: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      tv: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      embossed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
    },
        all = _objectSpread({}, types, features);

    matchers.type = Object.keys(types), __webpack_exports__.a = {
      all: all,
      types: types,
      matchers: matchers,
      features: features
    };
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function _typeof(obj) {
      return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      })(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      return !call || "object" !== _typeof(call) && "function" != typeof call ? _assertThisInitialized(self) : call;
    }

    function _getPrototypeOf(o) {
      return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(o);
    }

    function _assertThisInitialized(self) {
      if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return self;
    }

    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: !0,
          configurable: !0
        }
      }), superClass && _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      return (_setPrototypeOf = Object.setPrototypeOf || function (o, p) {
        return o.__proto__ = p, o;
      })(o, p);
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
        "function" == typeof Object.getOwnPropertySymbols && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }))), ownKeys.forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : obj[key] = value, obj;
    }

    Object.defineProperty(__webpack_exports__, "__esModule", {
      value: !0
    }), __webpack_require__.d(__webpack_exports__, "default", function () {
      return MediaQuery;
    });

    var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),
        __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__),
        __WEBPACK_IMPORTED_MODULE_2_matchmediaquery__ = __webpack_require__(11),
        __WEBPACK_IMPORTED_MODULE_2_matchmediaquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_matchmediaquery__),
        __WEBPACK_IMPORTED_MODULE_3_hyphenate_style_name__ = __webpack_require__(3),
        __WEBPACK_IMPORTED_MODULE_4__mediaQuery__ = __webpack_require__(4),
        __WEBPACK_IMPORTED_MODULE_5__toQuery__ = __webpack_require__(13);

    __webpack_require__.d(__webpack_exports__, "toQuery", function () {
      return __WEBPACK_IMPORTED_MODULE_5__toQuery__.a;
    });

    var defaultTypes = {
      component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
      query: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
      values: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape(__WEBPACK_IMPORTED_MODULE_4__mediaQuery__.a.matchers),
      children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
      onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
    },
        excludedQueryKeys = Object.keys(defaultTypes),
        omit = function omit(object, keys) {
      var newObject = _objectSpread({}, object);

      return keys.forEach(function (key) {
        return delete newObject[key];
      }), newObject;
    },
        getValues = function getValues(_ref) {
      var values = _ref.values;
      if (!values) return null;
      var keys = Object.keys(values);
      return 0 === keys.length ? null : keys.reduce(function (result, key) {
        return result[Object(__WEBPACK_IMPORTED_MODULE_3_hyphenate_style_name__.a)(key)] = values[key], result;
      }, {});
    },
        getQuery = function getQuery(props) {
      return props.query || Object(__WEBPACK_IMPORTED_MODULE_5__toQuery__.a)(omit(props, excludedQueryKeys));
    },
        MediaQuery = function (_React$Component) {
      function MediaQuery() {
        var _getPrototypeOf2, _this;

        _classCallCheck(this, MediaQuery);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MediaQuery)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_this), "state", {
          matches: !1,
          mq: null,
          query: "",
          values: null
        }), _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
          _this.state.mq.addListener(_this.updateMatches), _this.updateMatches();
        }), _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps, prevState) {
          _this.state.mq !== prevState.mq && (_this.cleanupMediaQuery(prevState.mq), _this.state.mq.addListener(_this.updateMatches)), _this.props.onChange && prevState.matches !== _this.state.matches && _this.props.onChange(_this.state.matches);
        }), _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
          _this._unmounted = !0, _this.cleanupMediaQuery(_this.state.mq);
        }), _defineProperty(_assertThisInitialized(_this), "cleanupMediaQuery", function (mq) {
          mq && (mq.removeListener(_this.updateMatches), mq.dispose());
        }), _defineProperty(_assertThisInitialized(_this), "updateMatches", function () {
          _this._unmounted || _this.state.mq.matches !== _this.state.matches && _this.setState({
            matches: _this.state.mq.matches
          });
        }), _defineProperty(_assertThisInitialized(_this), "render", function () {
          return "function" == typeof _this.props.children ? _this.props.children(_this.state.matches) : _this.state.matches ? _this.props.children : null;
        }), _this;
      }

      return _inherits(MediaQuery, _React$Component), _createClass(MediaQuery, null, [{
        key: "getDerivedStateFromProps",
        value: function value(props, state) {
          var query = getQuery(props);
          if (!query) throw new Error("Invalid or missing MediaQuery!");
          var values = getValues(props);
          if (query === state.query && values === state.values) return null;

          var mq = __WEBPACK_IMPORTED_MODULE_2_matchmediaquery___default()(query, values || {}, !!values);

          return {
            matches: mq.matches,
            mq: mq,
            query: query,
            values: values
          };
        }
      }]), MediaQuery;
    }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

    _defineProperty(MediaQuery, "displayName", "MediaQuery"), _defineProperty(MediaQuery, "defaultProps", {
      values: null
    });
  }, function (module, exports) {
    module.exports = __WEBPACK_EXTERNAL_MODULE_6__;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    !function () {
      function isValidElementType(type) {
        return "string" == typeof type || "function" == typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || "object" == typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
      }

      function typeOf(object) {
        if ("object" == typeof object && null !== object) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_LAZY_TYPE:
            case REACT_MEMO_TYPE:
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }

      function isAsyncMode(object) {
        return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, lowPriorityWarning$1(!1, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      Object.defineProperty(exports, "__esModule", {
        value: !0
      });

      var hasSymbol = "function" == typeof Symbol && Symbol["for"],
          REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]("react.element") : 60103,
          REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]("react.portal") : 60106,
          REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]("react.fragment") : 60107,
          REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]("react.strict_mode") : 60108,
          REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]("react.profiler") : 60114,
          REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]("react.provider") : 60109,
          REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]("react.context") : 60110,
          REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]("react.async_mode") : 60111,
          REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]("react.concurrent_mode") : 60111,
          REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]("react.forward_ref") : 60112,
          REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]("react.suspense") : 60113,
          REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]("react.memo") : 60115,
          REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]("react.lazy") : 60116,
          lowPriorityWarning = function lowPriorityWarning() {},
          printWarning = function printWarning(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0,
            message = "Warning: " + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        "undefined" != typeof console && console.warn(message);

        try {
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function lowPriorityWarning(condition, format) {
        if (void 0 === format) throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(void 0, [format].concat(args));
        }
      };

      var lowPriorityWarning$1 = lowPriorityWarning,
          AsyncMode = REACT_ASYNC_MODE_TYPE,
          ConcurrentMode = REACT_CONCURRENT_MODE_TYPE,
          ContextConsumer = REACT_CONTEXT_TYPE,
          ContextProvider = REACT_PROVIDER_TYPE,
          Element = REACT_ELEMENT_TYPE,
          ForwardRef = REACT_FORWARD_REF_TYPE,
          Fragment = REACT_FRAGMENT_TYPE,
          Lazy = REACT_LAZY_TYPE,
          Memo = REACT_MEMO_TYPE,
          Portal = REACT_PORTAL_TYPE,
          Profiler = REACT_PROFILER_TYPE,
          StrictMode = REACT_STRICT_MODE_TYPE,
          Suspense = REACT_SUSPENSE_TYPE,
          hasWarnedAboutDeprecatedIsAsyncMode = !1;
      exports.typeOf = typeOf, exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, exports.ContextConsumer = ContextConsumer, exports.ContextProvider = ContextProvider, exports.Element = Element, exports.ForwardRef = ForwardRef, exports.Fragment = Fragment, exports.Lazy = Lazy, exports.Memo = Memo, exports.Portal = Portal, exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, exports.isValidElementType = isValidElementType, exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense;
    }();
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function emptyFunctionThatReturnsNull() {
      return null;
    }

    var ReactIs = __webpack_require__(1),
        assign = __webpack_require__(9),
        ReactPropTypesSecret = __webpack_require__(2),
        checkPropTypes = __webpack_require__(10),
        has = Function.call.bind(Object.prototype.hasOwnProperty),
        printWarning = function printWarning() {};

    printWarning = function printWarning(text) {
      var message = "Warning: " + text;
      "undefined" != typeof console && console.error(message);

      try {
        throw new Error(message);
      } catch (x) {}
    }, module.exports = function (isValidElement, throwOnDirectAccess) {
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if ("function" == typeof iteratorFn) return iteratorFn;
      }

      function is(x, y) {
        return x === y ? 0 !== x || 1 / x == 1 / y : x !== x && y !== y;
      }

      function PropTypeError(message) {
        this.message = message, this.stack = "";
      }

      function createChainableTypeChecker(validate) {
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
              throw err.name = "Invariant Violation", err;
            }

            if ("undefined" != typeof console) {
              var cacheKey = componentName + ":" + propName;
              !manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3 && (printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
            }
          }

          return null == props[propName] ? isRequired ? new PropTypeError(null === props[propName] ? "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `null`." : "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `undefined`.") : null : validate(props, propName, componentName, location, propFullName);
        }

        var manualPropTypeCallCache = {},
            manualPropTypeWarningCount = 0,
            chainedCheckType = checkType.bind(null, !1);
        return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
      }

      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          if (getPropType(propValue) !== expectedType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPreciseType(propValue) + "` supplied to `" + componentName + "`, expected `" + expectedType + "`.");
          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          var propValue = props[propName];

          if (!Array.isArray(propValue)) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected an array.");
          }

          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) return error;
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getClassName(props[propName]) + "` supplied to `" + componentName + "`, expected instance of `" + expectedClassName + "`.");
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createEnumTypeChecker(expectedValues) {
        function validate(props, propName, componentName, location, propFullName) {
          for (var propValue = props[propName], i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) return null;
          }

          var valuesString = JSON.stringify(expectedValues, function (key, value) {
            return "symbol" === getPreciseType(value) ? String(value) : value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` supplied to `" + componentName + "`, expected one of " + valuesString + ".");
        }

        return Array.isArray(expectedValues) ? createChainableTypeChecker(validate) : (printWarning(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), emptyFunctionThatReturnsNull);
      }

      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          var propValue = props[propName],
              propType = getPropType(propValue);
          if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected an object.");

          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) return error;
            }
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createUnionTypeChecker(arrayOfTypeCheckers) {
        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            if (null == (0, arrayOfTypeCheckers[i])(props, propName, componentName, location, propFullName, ReactPropTypesSecret)) return null;
          }

          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`.");
        }

        if (!Array.isArray(arrayOfTypeCheckers)) return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), emptyFunctionThatReturnsNull;

        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if ("function" != typeof checker) return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."), emptyFunctionThatReturnsNull;
        }

        return createChainableTypeChecker(validate);
      }

      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName],
              propType = getPropType(propValue);
          if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");

          for (var key in shapeTypes) {
            var checker = shapeTypes[key];

            if (checker) {
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) return error;
            }
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName],
              propType = getPropType(propValue);
          if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
          var allKeys = assign({}, props[propName], shapeTypes);

          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) return error;
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return !0;

          case "boolean":
            return !propValue;

          case "object":
            if (Array.isArray(propValue)) return propValue.every(isNode);
            if (null === propValue || isValidElement(propValue)) return !0;
            var iteratorFn = getIteratorFn(propValue);
            if (!iteratorFn) return !1;
            var step,
                iterator = iteratorFn.call(propValue);

            if (iteratorFn !== propValue.entries) {
              for (; !(step = iterator.next()).done;) {
                if (!isNode(step.value)) return !1;
              }
            } else for (; !(step = iterator.next()).done;) {
              var entry = step.value;
              if (entry && !isNode(entry[1])) return !1;
            }

            return !0;

          default:
            return !1;
        }
      }

      function isSymbol(propType, propValue) {
        return "symbol" === propType || !!propValue && ("Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol);
      }

      function getPropType(propValue) {
        var propType = typeof propValue;
        return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
      }

      function getPreciseType(propValue) {
        if (void 0 === propValue || null === propValue) return "" + propValue;
        var propType = getPropType(propValue);

        if ("object" === propType) {
          if (propValue instanceof Date) return "date";
          if (propValue instanceof RegExp) return "regexp";
        }

        return propType;
      }

      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);

        switch (type) {
          case "array":
          case "object":
            return "an " + type;

          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;

          default:
            return type;
        }
      }

      function getClassName(propValue) {
        return propValue.constructor && propValue.constructor.name ? propValue.constructor.name : ANONYMOUS;
      }

      var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator,
          FAUX_ITERATOR_SYMBOL = "@@iterator",
          ANONYMOUS = "<<anonymous>>",
          ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: function () {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }(),
        arrayOf: createArrayOfTypeChecker,
        element: function () {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];

            if (!isValidElement(propValue)) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement.");
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }(),
        elementType: function () {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];

            if (!ReactIs.isValidElementType(propValue)) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement type.");
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }(),
        instanceOf: createInstanceTypeChecker,
        node: function () {
          function validate(props, propName, componentName, location, propFullName) {
            return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`, expected a ReactNode.");
          }

          return createChainableTypeChecker(validate);
        }(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      return PropTypeError.prototype = Error.prototype, ReactPropTypes.checkPropTypes = checkPropTypes, ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
    };
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function toObject(val) {
      if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(val);
    }
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */


    var getOwnPropertySymbols = Object.getOwnPropertySymbols,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        propIsEnumerable = Object.prototype.propertyIsEnumerable;
    module.exports = function () {
      try {
        if (!Object.assign) return !1;
        var test1 = new String("abc");
        if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;

        for (var test2 = {}, i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }

        if ("0123456789" !== Object.getOwnPropertyNames(test2).map(function (n) {
          return test2[n];
        }).join("")) return !1;
        var test3 = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (letter) {
          test3[letter] = letter;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
      } catch (err) {
        return !1;
      }
    }() ? Object.assign : function (target, source) {
      for (var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (var key in from) {
          hasOwnProperty.call(from, key) && (to[key] = from[key]);
        }

        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);

          for (var i = 0; i < symbols.length; i++) {
            propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
          }
        }
      }

      return to;
    };
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;

          try {
            if ("function" != typeof typeSpecs[typeSpecName]) {
              var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
              throw err.name = "Invariant Violation", err;
            }

            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }

          if (!error || error instanceof Error || printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = !0;
            var stack = getStack ? getStack() : "";
            printWarning("Failed " + location + " type: " + error.message + (null != stack ? stack : ""));
          }
        }
      }
    }

    var printWarning = function printWarning() {},
        ReactPropTypesSecret = __webpack_require__(2),
        loggedTypeFailures = {},
        has = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning = function printWarning(text) {
      var message = "Warning: " + text;
      "undefined" != typeof console && console.error(message);

      try {
        throw new Error(message);
      } catch (x) {}
    }, checkPropTypes.resetWarningCache = function () {
      loggedTypeFailures = {};
    }, module.exports = checkPropTypes;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function Mql(query, values, forceStatic) {
      function addListener(listener) {
        mql && mql.addListener(listener);
      }

      function removeListener(listener) {
        mql && mql.removeListener(listener);
      }

      function update(evt) {
        self.matches = evt.matches, self.media = evt.media;
      }

      function dispose() {
        mql && mql.removeListener(update);
      }

      var self = this;

      if (dynamicMatch && !forceStatic) {
        var mql = dynamicMatch.call(window, query);
        this.matches = mql.matches, this.media = mql.media, mql.addListener(update);
      } else this.matches = staticMatch(query, values), this.media = query;

      this.addListener = addListener, this.removeListener = removeListener, this.dispose = dispose;
    }

    function matchMedia(query, values, forceStatic) {
      return new Mql(query, values, forceStatic);
    }

    var staticMatch = __webpack_require__(12).match,
        dynamicMatch = "undefined" != typeof window ? window.matchMedia : null;

    module.exports = matchMedia;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function matchQuery(mediaQuery, values) {
      return parseQuery(mediaQuery).some(function (query) {
        var inverse = query.inverse,
            typeMatch = "all" === query.type || values.type === query.type;
        if (typeMatch && inverse || !typeMatch && !inverse) return !1;
        var expressionsMatch = query.expressions.every(function (expression) {
          var feature = expression.feature,
              modifier = expression.modifier,
              expValue = expression.value,
              value = values[feature];
          if (!value) return !1;

          switch (feature) {
            case "orientation":
            case "scan":
              return value.toLowerCase() === expValue.toLowerCase();

            case "width":
            case "height":
            case "device-width":
            case "device-height":
              expValue = toPx(expValue), value = toPx(value);
              break;

            case "resolution":
              expValue = toDpi(expValue), value = toDpi(value);
              break;

            case "aspect-ratio":
            case "device-aspect-ratio":
            case "device-pixel-ratio":
              expValue = toDecimal(expValue), value = toDecimal(value);
              break;

            case "grid":
            case "color":
            case "color-index":
            case "monochrome":
              expValue = parseInt(expValue, 10) || 1, value = parseInt(value, 10) || 0;
          }

          switch (modifier) {
            case "min":
              return value >= expValue;

            case "max":
              return value <= expValue;

            default:
              return value === expValue;
          }
        });
        return expressionsMatch && !inverse || !expressionsMatch && inverse;
      });
    }

    function parseQuery(mediaQuery) {
      return mediaQuery.split(",").map(function (query) {
        query = query.trim();
        var captures = query.match(RE_MEDIA_QUERY),
            modifier = captures[1],
            type = captures[2],
            expressions = captures[3] || "",
            parsed = {};
        return parsed.inverse = !!modifier && "not" === modifier.toLowerCase(), parsed.type = type ? type.toLowerCase() : "all", expressions = expressions.match(/\([^\)]+\)/g) || [], parsed.expressions = expressions.map(function (expression) {
          var captures = expression.match(RE_MQ_EXPRESSION),
              feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
          return {
            modifier: feature[1],
            feature: feature[2],
            value: captures[2]
          };
        }), parsed;
      });
    }

    function toDecimal(ratio) {
      var numbers,
          decimal = Number(ratio);
      return decimal || (numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/), decimal = numbers[1] / numbers[2]), decimal;
    }

    function toDpi(resolution) {
      var value = parseFloat(resolution);

      switch (String(resolution).match(RE_RESOLUTION_UNIT)[1]) {
        case "dpcm":
          return value / 2.54;

        case "dppx":
          return 96 * value;

        default:
          return value;
      }
    }

    function toPx(length) {
      var value = parseFloat(length);

      switch (String(length).match(RE_LENGTH_UNIT)[1]) {
        case "em":
        case "rem":
          return 16 * value;

        case "cm":
          return 96 * value / 2.54;

        case "mm":
          return 96 * value / 2.54 / 10;

        case "in":
          return 96 * value;

        case "pt":
          return 72 * value;

        case "pc":
          return 72 * value / 12;

        default:
          return value;
      }
    }

    exports.match = matchQuery, exports.parse = parseQuery;
    var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
        RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
        RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/,
        RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/,
        RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function keyVal(k, v) {
      var realKey = Object(__WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__.a)(k);
      return "number" == typeof v && (v = "".concat(v, "px")), !0 === v ? k : !1 === v ? negate(k) : "(".concat(realKey, ": ").concat(v, ")");
    }

    function join(conds) {
      return conds.join(" and ");
    }

    var __WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__ = __webpack_require__(3),
        __WEBPACK_IMPORTED_MODULE_1__mediaQuery__ = __webpack_require__(4),
        negate = function negate(cond) {
      return "not ".concat(cond);
    };

    __webpack_exports__.a = function (obj) {
      var rules = [];
      return Object.keys(__WEBPACK_IMPORTED_MODULE_1__mediaQuery__.a.all).forEach(function (k) {
        var v = obj[k];
        null != v && rules.push(keyVal(k, v));
      }), join(rules);
    };
  }]);
});

/***/ }),

/***/ "sC2a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("1a8y");
var toObject = __webpack_require__("DFzH");
var toLength = __webpack_require__("kiRH");
var toInteger = __webpack_require__("1Llc");
var advanceStringIndex = __webpack_require__("fhoV");
var regExpExec = __webpack_require__("YEpu");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("83Ih")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "sOol":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("4dA+")('wks');
var uid = __webpack_require__("UEZ0");
var Symbol = __webpack_require__("emib").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "sPse":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("1a8y");
var sameValue = __webpack_require__("+iOX");
var regExpExec = __webpack_require__("YEpu");

// @@search logic
__webpack_require__("83Ih")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "sc67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("P8UN");
var $indexOf = __webpack_require__("Ar2q")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__("h/qr")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "t+I+":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("P8UN");
$export($export.G + $export.W + $export.F * !__webpack_require__("Jegl").ABV, {
  DataView: __webpack_require__("voZr").DataView
});


/***/ }),

/***/ "to/b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("emib");
var dP = __webpack_require__("rjfK");
var DESCRIPTORS = __webpack_require__("QPJK");
var SPECIES = __webpack_require__("sOol")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "tuyV":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("CCE/");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "uDP2":
/***/ (function(module, exports) {

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

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "v06X":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "v0YV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("nsRs");
var descriptor = __webpack_require__("pSXQ");
var setToStringTag = __webpack_require__("dSuk");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("8wc8")(IteratorPrototype, __webpack_require__("sOol")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "v1p5":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__("wZFJ");

__webpack_require__("HQhv");

__webpack_require__("1dPr");

__webpack_require__("JHok");

__webpack_require__("MIFh");

__webpack_require__("sc67");

__webpack_require__("rzGZ");

__webpack_require__("Dq+y");

__webpack_require__("8npG");

__webpack_require__("Ggvi");

__webpack_require__("OeI1");

__webpack_require__("AqHK");

__webpack_require__("U6Bt");

__webpack_require__("sC2a");

__webpack_require__("E5k/");

__webpack_require__("m210");

__webpack_require__("4DPX");

exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

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

var _react = __webpack_require__("q1tI");

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__("MgzW");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstants = __webpack_require__("hFT/");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
  var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (encode === false) {
    return String(str);
  }

  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
  var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
  var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);

  if (innermostTemplate && innermostTitle) {
    // use function arg to avoid need to escape $ characters
    return innermostTemplate.replace(/%s/g, function () {
      return innermostTitle;
    });
  }

  var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
  return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
  return propsList.filter(function (props) {
    return typeof props[tagType] !== "undefined";
  }).map(function (props) {
    return props[tagType];
  }).reduce(function (tagAttrs, current) {
    return _extends({}, tagAttrs, current);
  }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
  return propsList.filter(function (props) {
    return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
  }).map(function (props) {
    return props[_HelmetConstants.TAG_NAMES.BASE];
  }).reverse().reduce(function (innermostBaseTag, tag) {
    if (!innermostBaseTag.length) {
      var keys = Object.keys(tag);

      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase();

        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
          return innermostBaseTag.concat(tag);
        }
      }
    }

    return innermostBaseTag;
  }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
  // Calculate list of tags, giving priority innermost component (end of the propslist)
  var approvedSeenTags = {};
  return propsList.filter(function (props) {
    if (Array.isArray(props[tagName])) {
      return true;
    }

    if (typeof props[tagName] !== "undefined") {
      warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
    }

    return false;
  }).map(function (props) {
    return props[tagName];
  }).reverse().reduce(function (approvedTags, instanceTags) {
    var instanceSeenTags = {};
    instanceTags.filter(function (tag) {
      var primaryAttributeKey = void 0;
      var keys = Object.keys(tag);

      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase(); // Special rule with link tags, since rel and href are both primary tags, rel takes priority

        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        } // Special case for innerHTML which doesn't work lowercased


        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
          primaryAttributeKey = attributeKey;
        }
      }

      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }

      var value = tag[primaryAttributeKey].toLowerCase();

      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }

      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }

      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }

      return false;
    }).reverse().forEach(function (tag) {
      return approvedTags.push(tag);
    }); // Update seen tags with tags from this instance

    var keys = Object.keys(instanceSeenTags);

    for (var i = 0; i < keys.length; i++) {
      var attributeKey = keys[i];
      var tagUnion = (0, _objectAssign2["default"])({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
      approvedSeenTags[attributeKey] = tagUnion;
    }

    return approvedTags;
  }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
  for (var i = propsList.length - 1; i >= 0; i--) {
    var props = propsList[i];

    if (props.hasOwnProperty(property)) {
      return props[property];
    }
  }

  return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
  return {
    baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
    bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
    defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
    encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
    linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
    metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
    noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
    onChangeClientState: getOnChangeClientState(propsList),
    scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
    styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
    title: getTitleFromPropsList(propsList),
    titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
  };
};

var rafPolyfill = function () {
  var clock = Date.now();
  return function (callback) {
    var currentTime = Date.now();

    if (currentTime - clock > 16) {
      clock = currentTime;
      callback(currentTime);
    } else {
      setTimeout(function () {
        rafPolyfill(callback);
      }, 0);
    }
  };
}();

var cafPolyfill = function cafPolyfill(id) {
  return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
  return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }

  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(function () {
      commitTagChanges(newState, function () {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
  var baseTag = newState.baseTag,
      bodyAttributes = newState.bodyAttributes,
      htmlAttributes = newState.htmlAttributes,
      linkTags = newState.linkTags,
      metaTags = newState.metaTags,
      noscriptTags = newState.noscriptTags,
      onChangeClientState = newState.onChangeClientState,
      scriptTags = newState.scriptTags,
      styleTags = newState.styleTags,
      title = newState.title,
      titleAttributes = newState.titleAttributes;
  updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
  updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
  updateTitle(title, titleAttributes);
  var tagUpdates = {
    baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
    linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
    metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
    noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
    scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
    styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
  };
  var addedTags = {};
  var removedTags = {};
  Object.keys(tagUpdates).forEach(function (tagType) {
    var _tagUpdates$tagType = tagUpdates[tagType],
        newTags = _tagUpdates$tagType.newTags,
        oldTags = _tagUpdates$tagType.oldTags;

    if (newTags.length) {
      addedTags[tagType] = newTags;
    }

    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  cb && cb();
  onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
  return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }

  updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
  var elementTag = document.getElementsByTagName(tagName)[0];

  if (!elementTag) {
    return;
  }

  var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
  var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  var attributesToRemove = [].concat(helmetAttributes);
  var attributeKeys = Object.keys(attributes);

  for (var i = 0; i < attributeKeys.length; i++) {
    var attribute = attributeKeys[i];
    var value = attributes[attribute] || "";

    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }

    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }

    var indexToSave = attributesToRemove.indexOf(attribute);

    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }

  for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
    elementTag.removeAttribute(attributesToRemove[_i]);
  }

  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};

var updateTags = function updateTags(type, tags) {
  var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
  var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
  var oldTags = Array.prototype.slice.call(tagNodes);
  var newTags = [];
  var indexToDelete = void 0;

  if (tags && tags.length) {
    tags.forEach(function (tag) {
      var newElement = document.createElement(type);

      for (var attribute in tag) {
        if (tag.hasOwnProperty(attribute)) {
          if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
            newElement.setAttribute(attribute, value);
          }
        }
      }

      newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true"); // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.

      if (oldTags.some(function (existingTag, index) {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }

  oldTags.forEach(function (tag) {
    return tag.parentNode.removeChild(tag);
  });
  newTags.forEach(function (tag) {
    return headElement.appendChild(tag);
  });
  return {
    oldTags: oldTags,
    newTags: newTags
  };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
  return Object.keys(attributes).reduce(function (str, key) {
    var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
    return str ? str + " " + attr : attr;
  }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
  var attributeString = generateElementAttributesAsString(attributes);
  var flattenedTitle = flattenArray(title);
  return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
  return tags.reduce(function (str, tag) {
    var attributeHtml = Object.keys(tag).filter(function (attribute) {
      return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
    }).reduce(function (string, attribute) {
      var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
      return string ? string + " " + attr : attr;
    }, "");
    var tagContent = tag.innerHTML || tag.cssText || "";
    var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
    return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
  }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
  var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(attributes).reduce(function (obj, key) {
    obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
    return obj;
  }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
  var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(props).reduce(function (obj, key) {
    obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
    return obj;
  }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
  var _initProps; // assigning into an array to define toString function on it


  var initProps = (_initProps = {
    key: title
  }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
  var props = convertElementAttributestoReactProps(attributes, initProps);
  return [_react2["default"].createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
  return tags.map(function (tag, i) {
    var _mappedTag;

    var mappedTag = (_mappedTag = {
      key: i
    }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
    Object.keys(tag).forEach(function (attribute) {
      var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;

      if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
        var content = tag.innerHTML || tag.cssText;
        mappedTag.dangerouslySetInnerHTML = {
          __html: content
        };
      } else {
        mappedTag[mappedAttribute] = tag[attribute];
      }
    });
    return _react2["default"].createElement(type, mappedTag);
  });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
  switch (type) {
    case _HelmetConstants.TAG_NAMES.TITLE:
      return {
        toComponent: function toComponent() {
          return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
        },
        toString: function toString() {
          return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
        }
      };

    case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
    case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
      return {
        toComponent: function toComponent() {
          return convertElementAttributestoReactProps(tags);
        },
        toString: function toString() {
          return generateElementAttributesAsString(tags);
        }
      };

    default:
      return {
        toComponent: function toComponent() {
          return generateTagsAsReactComponent(type, tags);
        },
        toString: function toString() {
          return generateTagsAsString(type, tags, encode);
        }
      };
  }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
  var baseTag = _ref.baseTag,
      bodyAttributes = _ref.bodyAttributes,
      encode = _ref.encode,
      htmlAttributes = _ref.htmlAttributes,
      linkTags = _ref.linkTags,
      metaTags = _ref.metaTags,
      noscriptTags = _ref.noscriptTags,
      scriptTags = _ref.scriptTags,
      styleTags = _ref.styleTags,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? "" : _ref$title,
      titleAttributes = _ref.titleAttributes;
  return {
    base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
    bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
    htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
    link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
    meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
    noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
    script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
    style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
    title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, {
      title: title,
      titleAttributes: titleAttributes
    }, encode)
  };
};

exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
exports.handleClientStateChange = handleClientStateChange;
exports.mapStateOnServer = mapStateOnServer;
exports.reducePropsToState = reducePropsToState;
exports.requestAnimationFrame = requestAnimationFrame;
exports.warn = warn;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "vOnD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createGlobalStyle; });
/* unused harmony export css */
/* unused harmony export isStyledComponent */
/* unused harmony export keyframes */
/* unused harmony export ServerStyleSheet */
/* unused harmony export StyleSheetConsumer */
/* unused harmony export StyleSheetContext */
/* unused harmony export StyleSheetManager */
/* unused harmony export ThemeConsumer */
/* unused harmony export ThemeContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeProvider; });
/* unused harmony export withTheme */
/* unused harmony export __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("n7j8");
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wZFJ");
/* harmony import */ var core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MIFh");
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q8oJ");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("C9fy");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("HQhv");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("OeI1");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("rzGZ");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Dq+y");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("8npG");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Ggvi");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("klQ5");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_array_last_index_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("lFjb");
/* harmony import */ var core_js_modules_es6_array_last_index_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_last_index_of__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("AqHK");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("HXzo");
/* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("sC2a");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("JHok");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("pJf4");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("DrhF");
/* harmony import */ var core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("sc67");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("LagC");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("pS08");
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("E5k/");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("R48M");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("m210");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("4DPX");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("aJjT");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("TAZq");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("ME5O");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("TOwV");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("Wwog");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("9uj6");
/* harmony import */ var merge_anything__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("ECyS");

































 // 

var interleave = function interleave(strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

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

var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}; // 


var isPlainObject = function isPlainObject(x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
}; // 


var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({}); // 

function isFunction(test) {
  return typeof test === 'function';
} // 


function getComponentName(target) {
  return ( false) || target.displayName || target.name || 'Component';
} // 


function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
} // 


function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
} // 


var SC_ATTR = typeof process !== 'undefined' && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || 'data-styled';
var SC_VERSION_ATTR = 'data-styled-version';
var SC_STREAM_ATTR = 'data-styled-streamed';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && ({}.REACT_APP_SC_DISABLE_SPEEDY || {}.SC_DISABLE_SPEEDY) || "production" !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {}; // 

/**
 * Parse errors.md and turn it into a simple hash of code: message
 */

var ERRORS =  false ? undefined : {};
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (true) {
      var _this = possibleConstructorReturn(this, _Error.call(this, 'An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#' + code + ' for more information.' + (interpolations.length > 0 ? ' Additional arguments: ' + interpolations.join(', ') : '')));
    } else { var _this; }

    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error); // 


var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = function extractComps(maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone

  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({
      componentId: componentId,
      matchIndex: matchIndex
    });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;
    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return {
      componentId: componentId,
      cssFromDOM: cssFromDOM
    };
  });
}; // 


var COMMENT_REGEX = /^\s*\/\/.*$/gm; // NOTE: This stylis instance is only used to split rules from SSR'd style tags

var stylisSplitter = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_26___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});
var stylis = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_26___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"

}); // Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = []; // eslint-disable-next-line consistent-return

var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_27___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;

var _selector = void 0;

var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if ( // the first self-ref is always untouched
  offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};
/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */


var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';
  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS; // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run

  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');
  return stylis(prefix || !selector ? '' : selector, cssStr);
} // 

/* eslint-disable camelcase, no-undef */


var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : undefined;
}; // 

/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */


var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};
/* resets an ID entirely by overwriting it in the dictionary */


var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};
/* factory for a names dictionary checking the existance of an ID:name pairing */


var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};
/* stringifies names for the html/element output */


var stringifyNames = function stringifyNames(names) {
  var str = ''; // eslint-disable-next-line guard-for-in

  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }

  return str.trim();
};
/* clones the nested names dictionary */


var cloneNames = function cloneNames(names) {
  var clone = Object.create(null); // eslint-disable-next-line guard-for-in

  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }

  return clone;
}; // 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */


var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;
  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */

  var size = tag.ownerDocument.styleSheets.length;

  for (var i = 0; i < size; i += 1) {
    var sheet = tag.ownerDocument.styleSheets[i]; // $FlowFixMe

    if (sheet.ownerNode === tag) return sheet;
  }
  /* we should always be able to find a tag */


  throw new StyledComponentsError(10);
};
/* insert a rule safely and return whether it was actually injected */


var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;
  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};
/* deletes `size` rules starting from `removalIndex` */


var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;

  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
}; // 

/* this marker separates component styles and is important for rehydration */


var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};
/* add up all numbers in array up until and including the index */


var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;

  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};
/* create a new style tag after lastEl */


var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var targetDocument = document;
  if (target) targetDocument = target.ownerDocument;else if (tagEl) targetDocument = tagEl.ownerDocument;
  var el = targetDocument.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.4.1");
  var nonce = getNonce();

  if (nonce) {
    el.setAttribute('nonce', nonce);
  }
  /* Work around insertRule quirk in EdgeHTML */


  el.appendChild(targetDocument.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }
    /* Insert new style tag after the previous one */


    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};
/* takes a css factory function and outputs an html styled tag factory */


var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.4.1" + '"', additionalAttrs];
    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};
/* takes a css factory function and outputs an element factory */


var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.4.1", _props);
    var nonce = getNonce();

    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    } // eslint-disable-next-line react/no-danger


    return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement('style', _extends({}, props, {
      dangerouslySetInnerHTML: {
        __html: css()
      }
    }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};
/* speedy tags utilise insertRule */


var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];
  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */

  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];

    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);
    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);
    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport;
      /* @import rules are reordered to appear first */

      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true; // $FlowFixMe

      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules;
    /* add up no of injected rules */

    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return; // $FlowFixMe

    if (el.isConnected === false) return;
    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = ''; // eslint-disable-next-line guard-for-in

    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];

      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];

        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(targetDocument, id) {
  return targetDocument.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */

  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];

    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(el.ownerDocument, id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);
    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;

      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true; // $FlowFixMe

      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    /* create new empty text node and replace the current one */

    var newMarker = makeTextNode(el.ownerDocument, id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = ''; // eslint-disable-next-line guard-for-in

    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];

    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = ''; // eslint-disable-next-line guard-for-in

    for (var id in markers) {
      var cssForId = markers[id][0];

      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }

    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null); // eslint-disable-next-line guard-for-in

    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;
    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }
  /* remove old HTMLStyleElements, since they have been rehydrated */


  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];

    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
}; // 


var SPLIT_REGEX = /\s+/;
/* determine the maximum number of components before tags are sharded */

var MAX_SIZE = void 0;

if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {
  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */
  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;
      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }
  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;
    var els = [];
    var extracted = [];
    var isStreamed = false;
    /* retrieve all of our SSR style elements from the DOM */

    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.4.1" + '"]');
    var nodesSize = nodes.length;
    /* abort rehydration if no previous style tags were found */

    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];
      /* check if style tag is a streamed tag */

      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);
      /* retrieve all component names */

      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;

      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */

        this.rehydratedNames[name] = true;
      }
      /* extract all components and their CSS */


      extracted.push.apply(extracted, extractComps(el.textContent));
      /* store original HTMLStyleElement */

      els.push(el);
    }
    /* abort rehydration if nothing was extracted */


    var extractedSize = extracted.length;
    if (!extractedSize) return this;
    /* create a tag to be used for rehydration */

    var tag = this.makeTag(null);
    rehydrate(tag, els, extracted);
    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */

    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);
    /* retrieve all component ids */

    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };
  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */

  /* reset the internal "master" instance */


  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    master = new StyleSheet(undefined, forceServer).rehydrate();
  };
  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);
    /* add to clone array */

    this.clones.push(sheet);
    /* clone all tags */

    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();
      /* reconstruct tagMap */

      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });
    /* clone other maps */

    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);
    return sheet;
  };
  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;
    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;
    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };
  /* get a tag for a given componentId, assign the componentId to one, or shard */


  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];

    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];
    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */

    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };
  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };
  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };
  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;
    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };
  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);
    /* add deferred rules for component */

    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);
      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };
  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;
    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }
    /* remove all rules from the tag */


    tag.removeRules(id);
    /* ignore possible rehydrated names */

    this.ignoreRehydratedNames[id] = true;
    /* delete possible deferred rules */

    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;
    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(react__WEBPACK_IMPORTED_MODULE_28__["cloneElement"])(tag.toElement(), {
        key: key
      });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }
    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}(); // 


var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;
    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}(); // 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */


var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
} // 
// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js


function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
} // 

/**
 * It's falsish not falsy because 0 is allowed.
 */


var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }

    return rules;
  });
  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if (false) {}

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
} // 


function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
} // 


function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_30__["isValidElementType"])(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
} // 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js


function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }

  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;

    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;

    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }

  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
} // 

/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */


var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;
  /* get a char and divide by alphabet-length */

  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
} // 


function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i]; // recursive case

    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;
  return true;
} // 

/* combines hashStr (murmurhash) and nameGenerator for convenience */


var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */


var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);
    this.rules = rules;
    this.isStatic =  true && isStaticRules(rules, attrs);
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));

    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}(); // 


var LIMIT = 200;

var createWarnTooManyClasses = function createWarnTooManyClasses(displayName) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
}; // 


var determineTheme = function determineTheme(props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT; // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */

  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
}; // 


var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
} // 


function isTag(target) {
  return typeof target === 'string' && ( false ? undefined : true);
} // 


function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_30__["ForwardRef"]] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);
var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent), // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));
    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;
    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;
    var i = keys.length;
    var descriptor = void 0;
    var key = void 0; // eslint-disable-next-line no-plusplus

    while (i--) {
      key = keys[i];

      if ( // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
} // 


function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
} // 
// Helper to call a given function, only once


var once = function once(cb) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
}; // 


var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_28__["createContext"])();
var ThemeConsumer = ThemeContext.Consumer;
/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_31__[/* default */ "a"])(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;
    return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(ThemeContext.Consumer, null, this.renderInner);
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);
    return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(ThemeContext.Provider, {
      value: context
    }, this.props.children);
  };
  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if (false) {}

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_28__["Component"]); // 


var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);
    /* The master sheet might be reset, so keep a reference here */

    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }
  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(StyleSheetManager, {
      sheet: this.instance
    }, children);
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }
    /* the tag index keeps track of which tags have already been emitted */

    var instance = this.instance;
    var instanceTagIndex = 0;
    var streamAttr = SC_STREAM_ATTR + '="true"';
    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk,
      /* encoding */
      _, callback) {
        var tags = instance.tags;
        var html = '';
        /* retrieve html for each new style tag */

        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }
        /* force our StyleSheets to emit entirely new tags */


        instance.sealAllTags();
        var renderedHtml = chunk.toString();
        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */

        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');
          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });
    readableStream.on('end', function () {
      return _this.seal();
    });
    readableStream.on('error', function (err) {
      _this.seal(); // forward the error to the transform stream


      transformer.emit('error', err);
    });
    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}(); // 


var StyleSheetContext = Object(react__WEBPACK_IMPORTED_MODULE_28__["createContext"])();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_31__[/* default */ "a"])(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;
    return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(StyleSheetContext.Provider, {
      value: this.getContext(sheet, target)
    },  false ? undefined : children);
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_28__["Component"]);

 false ? undefined : void 0; // 

var identifiers = {};
/* We depend on components having unique IDs */

function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);
  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */

  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
} // $FlowFixMe


var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};
    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (false) {}

    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(StyleSheetConsumer, null, this.renderOuter);
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;
    this.styleSheet = styleSheet; // No need to subscribe a static component to theme changes, it won't change anything

    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();
    return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(ThemeConsumer, null, this.renderInner);
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;
    var generatedClassName = void 0;

    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps) || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);
    var propsForElement = {};

    var computedProps = _extends({}, this.props, this.attrs);

    var key = void 0; // eslint-disable-next-line guard-for-in

    for (key in computedProps) {
      if (false) {}

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"])(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, this.props.className, this.attrs.className).filter(Boolean).join(' ');
    return Object(react__WEBPACK_IMPORTED_MODULE_28__["createElement"])(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, {
      theme: theme
    });

    if (!attrs.length) return context;
    this.attrs = {};
    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }
      /* eslint-disable guard-for-in */
      // $FlowFixMe


      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (false) {}

            attr = attr(context);

            if (false) {}
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */

    });
    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses; // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);
    if (false) {}
    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_28__["Component"]);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;
  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent = void 0;

  var forwardRef = function forwardRef(props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(ParentComponent, _extends({}, props, {
      forwardedComponent: WrappedStyledComponent,
      forwardedRef: ref
    }));
  };

  forwardRef.displayName = displayName;
  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_28___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName; // $FlowFixMe

  WrappedStyledComponent.attrs = finalAttrs; // $FlowFixMe

  WrappedStyledComponent.componentStyle = componentStyle; // $FlowFixMe

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY; // $FlowFixMe

  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe

  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);
    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? Object(merge_anything__WEBPACK_IMPORTED_MODULE_33__[/* default */ "a"])(target.defaultProps, obj) : obj;
    }
  });

  if (false) {} // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
} // 
// Thanks to ReactDOMFactories for this handy list!


var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan']; // 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
}); // 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');
    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  }; // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}(); // 
// place our cache into shared context so it'll persist between HMRs


if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent(props) {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;

      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }
      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */


      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */


      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if (false) {}

      return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(StyleSheetConsumer, null, function (styleSheet) {
        _this2.styleSheet = styleSheet || StyleSheet.master;
        var globalStyle = _this2.state.globalStyle;

        if (globalStyle.isStatic) {
          globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);
          return null;
        } else {
          return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(ThemeConsumer, null, function (theme) {
            // $FlowFixMe
            var defaultProps = _this2.constructor.defaultProps;

            var context = _extends({}, _this2.props);

            if (typeof theme !== 'undefined') {
              context.theme = determineTheme(_this2.props, theme, defaultProps);
            }

            globalStyle.renderStyles(context, _this2.styleSheet);
            return null;
          });
        }
      });
    };

    return GlobalStyleComponent;
  }(react__WEBPACK_IMPORTED_MODULE_28___default.a.Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;
  return GlobalStyleComponent;
} // 


var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if (false) {}

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));
  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
} // 


var withTheme = function withTheme(Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_28___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(ThemeConsumer, null, function (theme) {
      // $FlowFixMe
      var defaultProps = Component$$1.defaultProps;
      var themeProp = determineTheme(props, theme, defaultProps);

      if (false) {}

      return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(Component$$1, _extends({}, props, {
        theme: themeProp,
        ref: ref
      }));
    });
  });
  hoistNonReactStatics(WithTheme, Component$$1);
  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';
  return WithTheme;
}; // 

/* eslint-disable */


var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
}; // 

/* Warning if you've imported this file on React Native */

if (false) {}
/* Warning if there are several instances of styled-components */


if (false) {} //


/* harmony default export */ __webpack_exports__["c"] = (styled);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "vUMq":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("sOol")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "veur":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("lb9j");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "vf9c":
/***/ (function(module) {

module.exports = JSON.parse("[]");

/***/ }),

/***/ "voZr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("emib");
var DESCRIPTORS = __webpack_require__("QPJK");
var LIBRARY = __webpack_require__("939K");
var $typed = __webpack_require__("Jegl");
var hide = __webpack_require__("8wc8");
var redefineAll = __webpack_require__("rj/q");
var fails = __webpack_require__("96qb");
var anInstance = __webpack_require__("xa9o");
var toInteger = __webpack_require__("1Llc");
var toLength = __webpack_require__("kiRH");
var toIndex = __webpack_require__("gx6d");
var gOPN = __webpack_require__("chL8").f;
var dP = __webpack_require__("rjfK").f;
var arrayFill = __webpack_require__("Y++M");
var setToStringTag = __webpack_require__("dSuk");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "wZFJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("P8UN");
var $some = __webpack_require__("Wadk")(3);

$export($export.P + $export.F * !__webpack_require__("h/qr")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "x1L8":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("BjK0");
var isArray = __webpack_require__("tuyV");
var SPECIES = __webpack_require__("sOol")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "xJgp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("6PSD");
var validate = __webpack_require__("O1i0");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("94Pd")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "xa9o":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "xlXC":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "xtsi":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6kNP");__webpack_require__("8npG");var plugins=__webpack_require__("LeKB");var _require$publicLoader=__webpack_require__("emEt").publicLoader,getResourcesForPathname=_require$publicLoader.getResourcesForPathname,getResourcesForPathnameSync=_require$publicLoader.getResourcesForPathnameSync,getResourceURLsForPathname=_require$publicLoader.getResourceURLsForPathname,loadPage=_require$publicLoader.loadPage,loadPageSync=_require$publicLoader.loadPageSync;exports.apiRunner=function(api,args,defaultReturn,argTransform){if(args===void 0){args={};}// Hooks for gatsby-cypress's API handler
if(undefined){if(window.___apiHandler){window.___apiHandler(api);}else if(window.___resolvedAPIs){window.___resolvedAPIs.push(api);}else{window.___resolvedAPIs=[api];}}var results=plugins.map(function(plugin){if(!plugin.plugin[api]){return undefined;}// Deprecated April 2019. Use `loadPageSync` instead
args.getResourcesForPathnameSync=getResourcesForPathnameSync;// Deprecated April 2019. Use `loadPage` instead
args.getResourcesForPathname=getResourcesForPathname;args.getResourceURLsForPathname=getResourceURLsForPathname;args.loadPage=loadPage;args.loadPageSync=loadPageSync;var result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args:args,result:result,plugin:plugin});}return result;});// Filter out undefined results.
results=results.filter(function(result){return typeof result!=="undefined";});if(results.length>0){return results;}else if(defaultReturn){return[defaultReturn];}else{return[];}};exports.apiRunnerAsync=function(api,args,defaultReturn){return plugins.reduce(function(previous,next){return next.plugin[api]?previous.then(function(){return next.plugin[api](args,next.options);}):previous;},Promise.resolve());};

/***/ }),

/***/ "yLpj":
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "yde8":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("ot9L");
var call = __webpack_require__("9IMR");
var isArrayIter = __webpack_require__("BuzY");
var anObject = __webpack_require__("1a8y");
var toLength = __webpack_require__("kiRH");
var getIterFn = __webpack_require__("U9/z");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "ys0W":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("QPJK");
var getKeys = __webpack_require__("2mBY");
var toIObject = __webpack_require__("5SQf");
var isEnum = __webpack_require__("BnbX").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "ytzU":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("x1L8");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "zGcK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("P8UN");
var aFunction = __webpack_require__("nONw");
var toObject = __webpack_require__("DFzH");
var fails = __webpack_require__("96qb");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("h/qr")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "zTvz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HeaderContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return HeaderMenuBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return HeaderLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return HeaderMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return HeaderMenuLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return HeaderMenuDivider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HeaderLinksBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HamburgerMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HeaderA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HeaderLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return HeaderLinkContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wbzz");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vOnD");
var Header=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].header.withConfig({displayName:"header__Header",componentId:"sc-1hd3yin-0"})(["z-index:1001;align-items:center;background-color:",";color:",";display:flex;height:",";justify-content:space-between;padding:0 36px;top:0;left:0;width:100vw;user-select:none;white-space:nowrap;position:fixed;@media screen and (max-width:","px){position:static;}"],function(props){return props.theme.colors.mono1000;},function(props){return props.theme.colors.mono100;},function(props){return props.theme.sizing.scale1600;},function(props){return props.theme.breakpoints.medium;});var HeaderContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].div.withConfig({displayName:"header__HeaderContainer",componentId:"sc-1hd3yin-1"})(["grid-column:1/3;grid-row:1/2;@media screen and (max-width:","px){order:1;}"],function(props){return props.theme.breakpoints.medium;});var HeaderMenuBlock=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].div.withConfig({displayName:"header__HeaderMenuBlock",componentId:"sc-1hd3yin-2"})(["align-items:center;display:flex;flex-direction:row;"]);var HeaderLogo=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"])(gatsby__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"]).withConfig({displayName:"header__HeaderLogo",componentId:"sc-1hd3yin-3"})(["font:",";text-decoration:none;&:visited{color:",";}&:active{color:",";}&:hover{color:",";}"],function(props){return props.theme.typography.font450;},function(props){return props.theme.colors.mono100;},function(props){return props.theme.colors.mono200;},function(props){return props.theme.colors.mono200;});var HeaderMenu=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].div.withConfig({displayName:"header__HeaderMenu",componentId:"sc-1hd3yin-4"})(["background:",";display:flex;flex-direction:column;position:fixed;overflow:hidden;min-width:180px;max-height:","px;top:",";left:",";transition:max-height 0.3s;@media screen and (max-width:","px){min-height:initial;max-height:initial;height:calc(100% - ",");left:0;marginLeft:36px;padding:"," "," "," ",";top:",";transform:",";transition:transform 0.3s;width:90%;z-index:100;}"],function(props){return props.theme.colors.mono1000;},function(props){return props.$collapsed?0:props.$nbItems*48;},function(props){return props.theme.sizing.scale1600;},function(props){return props.theme.sizing.scale600;},function(props){return props.theme.breakpoints.medium;},function(props){return props.theme.sizing.scale1600;},function(props){return props.theme.sizing.scale2400;},function(props){return props.theme.sizing.scale800;},function(props){return props.theme.sizing.scale1600;},function(props){return props.theme.sizing.scale500;},function(props){return props.theme.sizing.scale1600;},function(props){return props.$collapsed?'translate(-100%)':'translate(0)';});var HeaderMenuLink=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].a.withConfig({displayName:"header__HeaderMenuLink",componentId:"sc-1hd3yin-5"})(["display:block;padding:"," ",";text-decoration:none;font:",";@media screen and (max-width:","px){font:",";}&:visited{color:",";}&:active{color:",";}&:hover{color:",";}"],function(props){return props.theme.sizing.scale400;},function(props){return props.theme.sizing.scale1600;},function(props){return props.theme.typography.font300;},function(props){return props.theme.breakpoints.medium;},function(props){return props.theme.typography.font500;},function(props){return props.theme.colors.mono100;},function(props){return props.theme.colors.mono200;},function(props){return props.theme.colors.mono200;});var HeaderMenuDivider=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].hr.withConfig({displayName:"header__HeaderMenuDivider",componentId:"sc-1hd3yin-6"})(["margin:"," 0;width:100%;border-color:",";"],function(props){return props.theme.sizing.scale800;},function(props){return props.theme.colors.mono500;});var HeaderLinksBlock=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].div.withConfig({displayName:"header__HeaderLinksBlock",componentId:"sc-1hd3yin-7"})(["align-items:center;display:flex;flex-direction:row;@media screen and (max-width:","px){display:block;}"],function(props){return props.theme.breakpoints.medium;});var StyledHamburgerMenu=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].div.withConfig({displayName:"header__StyledHamburgerMenu",componentId:"sc-1hd3yin-8"})(["cursor:pointer;justify-content:space-between;display:flex;flex-direction:column;padding:3px 1px 4px;margin-right:",";height:",";width:",";"],function(props){return props.theme.sizing.scale600;},function(props){return props.theme.sizing.scale800;},function(props){return props.theme.sizing.scale800;});var HamburgerBar=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].div.withConfig({displayName:"header__HamburgerBar",componentId:"sc-1hd3yin-9"})(["background-color:",";height:3px;width:100%;"],function(props){return props.theme.colors.mono100;});var HamburgerMenu=function HamburgerMenu(_ref){var onClick=_ref.onClick;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHamburgerMenu,{onClick:onClick},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HamburgerBar,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HamburgerBar,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HamburgerBar,null));};var HeaderA=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].a.withConfig({displayName:"header__HeaderA",componentId:"sc-1hd3yin-10"})(["color:",";text-decoration:none;&:visited{color:",";}&:active{color:",";}&:hover{color:",";}"],function(props){return props.theme.colors.mono100;},function(props){return props.theme.colors.mono100;},function(props){return props.theme.colors.mono200;},function(props){return props.theme.colors.mono200;});var HeaderLink=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"])(gatsby__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"]).withConfig({displayName:"header__HeaderLink",componentId:"sc-1hd3yin-11"})(["color:",";text-decoration:none;&:visited{color:",";}&:active{color:",";}&:hover{color:",";}"],function(props){return props.theme.colors.mono100;},function(props){return props.theme.colors.mono100;},function(props){return props.theme.colors.mono200;},function(props){return props.theme.colors.mono200;});var HeaderLinkContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].div.withConfig({displayName:"header__HeaderLinkContainer",componentId:"sc-1hd3yin-12"})(["font:",";flex:1 1 0;padding-left:",";@media screen and (max-width:","px){font:",";padding:"," ",";}"],function(props){return props.theme.typography.font300;},function(props){return props.theme.sizing.scale700;},function(props){return props.theme.breakpoints.medium;},function(props){return props.theme.typography.font500;},function(props){return props.theme.sizing.scale400;},function(props){return props.theme.sizing.scale1600;});

/***/ })

},[["UxWs",15,1]]]);
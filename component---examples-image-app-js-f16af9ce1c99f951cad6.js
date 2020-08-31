(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "k1r1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToDOM", function() { return renderToDOM; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wcNg");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HaE+");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JX7q");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dI71");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _deck_gl_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("yYqN");
/* harmony import */ var _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("NGNH");
/* harmony import */ var _google_earthengine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("RtaV");
/* harmony import */ var _google_earthengine__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_google_earthengine__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("v5MB");
// Add a EE-enabled Google Client id here (or inject it with e.g. a webpack environment plugin)
var EE_CLIENT_ID="562875810552-5mut6fkiukje0cbbvg5cd9vdmdb8u6dh.apps.googleusercontent.com";// eslint-disable-line
var INITIAL_VIEW_STATE={longitude:-85,latitude:25,zoom:3,pitch:0,bearing:0};var App=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(App,_React$Component);function App(props){var _this;_this=_React$Component.call(this,props)||this;_this.state={eeObject:null};_this.loginProvider=new _shared__WEBPACK_IMPORTED_MODULE_10__[/* GoogleLoginProvider */ "c"]({scopes:['https://www.googleapis.com/auth/earthengine'],clientId:EE_CLIENT_ID,onLoginChange:_this._onLoginSuccess.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this))});return _this;}var _proto=App.prototype;_proto._onLoginSuccess=/*#__PURE__*/function(){var _onLoginSuccess2=Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(user,loginProvider){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_8__[/* EarthEngineLayer */ "a"].initializeEEApi({clientId:EE_CLIENT_ID});case 2:this.setState({eeObject:_google_earthengine__WEBPACK_IMPORTED_MODULE_9___default.a.Image('CGIAR/SRTM90_V4')});case 3:case"end":return _context.stop();}}},_callee,this);}));function _onLoginSuccess(_x,_x2){return _onLoginSuccess2.apply(this,arguments);}return _onLoginSuccess;}();_proto.render=function render(){var eeObject=this.state.eeObject;var visParams={min:0,max:4000,palette:['006633','E5FFCC','662A00','D8D8D8','F5F5F5']};var layers=[new _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_8__[/* EarthEngineLayer */ "a"]({eeObject:eeObject,visParams:visParams,opacity:0.5})];return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:{position:'relative',height:'100%'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_deck_gl_react__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],{controller:true,initialViewState:INITIAL_VIEW_STATE,layers:layers},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_10__[/* GoogleLoginPane */ "b"],{loginProvider:this.loginProvider}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_10__[/* InfoBox */ "d"],{title:"Image"},"The",' ',/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"https://developers.google.com/earth-engine/datasets/catalog/CGIAR_SRTM90_V4"},"SRTM elevation dataset"),' ',"displayed using an ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code",null,"ee.Image")," object.")));};return App;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);function renderToDOM(container){return Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["render"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(App,null),container);}

/***/ }),

/***/ "yYqN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ deckgl_DeckGL; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("1OyB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("md7G");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("foSv");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("JX7q");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__("Ji7U");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/deck.js + 56 modules
var lib_deck = __webpack_require__("mybv");

// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/utils/memoize.js
var memoize = __webpack_require__("OIVS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("KQm4");

// CONCATENATED MODULE: ./node_modules/@deck.gl/react/dist/esm/utils/inherits-from.js
function inheritsFrom(Type, ParentType) {
  while (Type) {
    if (Type === ParentType) {
      return true;
    }

    Type = Object.getPrototypeOf(Type);
  }

  return false;
}
// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/views/view.js + 1 modules
var views_view = __webpack_require__("nICr");

// EXTERNAL MODULE: ./node_modules/@deck.gl/core/dist/esm/lib/layer.js + 30 modules
var lib_layer = __webpack_require__("K7jV");

// CONCATENATED MODULE: ./node_modules/@deck.gl/react/dist/esm/utils/extract-jsx-layers.js





function wrapInView(node) {
  if (!node) {
    return node;
  }

  if (typeof node === 'function') {
    return Object(react["createElement"])(views_view["a" /* default */], {}, node);
  }

  if (Array.isArray(node)) {
    return node.map(wrapInView);
  }

  if (node.type === react_default.a.Fragment) {
    return wrapInView(node.props.children);
  }

  if (inheritsFrom(node.type, views_view["a" /* default */])) {
    return node;
  }

  return node;
}

function extractJSXLayers(_ref) {
  var children = _ref.children,
      layers = _ref.layers,
      views = _ref.views;
  var reactChildren = [];
  var jsxLayers = [];
  var jsxViews = {};
  react_default.a.Children.forEach(wrapInView(children), function (reactElement) {
    if (reactElement) {
      var ElementType = reactElement.type;

      if (inheritsFrom(ElementType, lib_layer["a" /* default */])) {
        var layer = createLayer(ElementType, reactElement.props);
        jsxLayers.push(layer);
      } else {
        reactChildren.push(reactElement);
      }

      if (ElementType !== views_view["a" /* default */] && inheritsFrom(ElementType, views_view["a" /* default */]) && reactElement.props.id) {
        var view = new ElementType(reactElement.props);
        jsxViews[view.id] = view;
      }
    }
  });

  if (Object.keys(jsxViews).length > 0) {
    if (Array.isArray(views)) {
      views.forEach(function (view) {
        jsxViews[view.id] = view;
      });
    } else if (views) {
      jsxViews[views.id] = views;
    }

    views = Object.values(jsxViews);
  }

  layers = jsxLayers.length > 0 ? [].concat(jsxLayers, Object(toConsumableArray["a" /* default */])(layers)) : layers;
  return {
    layers: layers,
    children: reactChildren,
    views: views
  };
}

function createLayer(LayerType, reactProps) {
  var props = {};
  var defaultProps = LayerType.defaultProps || {};

  for (var key in reactProps) {
    if (defaultProps[key] !== reactProps[key]) {
      props[key] = reactProps[key];
    }
  }

  return new LayerType(props);
}
// CONCATENATED MODULE: ./node_modules/@deck.gl/react/dist/esm/utils/evaluate-children.js

var MAP_STYLE = {
  position: 'absolute',
  zIndex: -1
};
function evaluateChildren(children, childProps) {
  if (!children) {
    return children;
  }

  if (typeof children === 'function') {
    return children(childProps);
  }

  if (Array.isArray(children)) {
    return children.map(function (child) {
      return evaluateChildren(child, childProps);
    });
  }

  if (isReactMap(children)) {
    childProps.style = MAP_STYLE;
    return Object(react["cloneElement"])(children, childProps);
  }

  if (needsDeckGLViewProps(children)) {
    return Object(react["cloneElement"])(children, childProps);
  }

  return children;
}

function isReactMap(child) {
  var componentClass = child && child.type;
  var componentProps = componentClass && componentClass.defaultProps;
  return componentProps && componentProps.mapStyle;
}

function needsDeckGLViewProps(child) {
  var componentClass = child && child.type;
  return componentClass && componentClass.deckGLViewProps;
}
// CONCATENATED MODULE: ./node_modules/@deck.gl/react/dist/esm/utils/position-children-under-views.js





function positionChildrenUnderViews(_ref) {
  var children = _ref.children,
      viewports = _ref.viewports,
      deck = _ref.deck,
      ContextProvider = _ref.ContextProvider;

  var _ref2 = deck || {},
      viewManager = _ref2.viewManager;

  if (!viewManager || !viewManager.views.length) {
    return [];
  }

  var views = {};
  var defaultViewId = viewManager.views[0].id;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var child = _step.value;
      var viewId = defaultViewId;
      var viewChildren = child;

      if (inheritsFrom(child.type, views_view["a" /* default */])) {
        viewId = child.props.id || defaultViewId;
        viewChildren = child.props.children;
      }

      var viewport = viewManager.getViewport(viewId);
      var viewState = viewManager.getViewState(viewId);

      if (viewport) {
        var x = viewport.x,
            y = viewport.y,
            width = viewport.width,
            height = viewport.height;
        viewChildren = evaluateChildren(viewChildren, {
          x: x,
          y: y,
          width: width,
          height: height,
          viewport: viewport,
          viewState: viewState
        });

        if (!views[viewId]) {
          views[viewId] = {
            viewport: viewport,
            children: []
          };
        }

        views[viewId].children.push(viewChildren);
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

  return Object.keys(views).map(function (viewId) {
    var _views$viewId = views[viewId],
        viewport = _views$viewId.viewport,
        viewChildren = _views$viewId.children;
    var x = viewport.x,
        y = viewport.y,
        width = viewport.width,
        height = viewport.height;
    var style = {
      position: 'absolute',
      left: x,
      top: y,
      width: width,
      height: height
    };
    var key = "view-".concat(viewId);
    var viewElement = react["createElement"].apply(void 0, ['div', {
      key: key,
      id: key,
      style: style
    }].concat(Object(toConsumableArray["a" /* default */])(viewChildren)));

    if (ContextProvider) {
      var contextValue = {
        viewport: viewport,
        container: deck.canvas.offsetParent,
        eventManager: deck.eventManager,
        onViewStateChange: function onViewStateChange(params) {
          params.viewId = viewId;

          deck._onViewStateChange(params);
        }
      };
      return Object(react["createElement"])(ContextProvider, {
        key: key,
        value: contextValue
      }, viewElement);
    }

    return viewElement;
  });
}
// CONCATENATED MODULE: ./node_modules/@deck.gl/react/dist/esm/utils/extract-styles.js
var CANVAS_ONLY_STYLES = {
  mixBlendMode: null
};
function extractStyles(_ref) {
  var width = _ref.width,
      height = _ref.height,
      style = _ref.style;
  var containerStyle = {
    position: 'absolute',
    zIndex: 0,
    left: 0,
    top: 0,
    width: width,
    height: height
  };
  var canvasStyle = {
    left: 0,
    top: 0
  };

  if (style) {
    for (var key in style) {
      if (key in CANVAS_ONLY_STYLES) {
        canvasStyle[key] = style[key];
      } else {
        containerStyle[key] = style[key];
      }
    }
  }

  return {
    containerStyle: containerStyle,
    canvasStyle: canvasStyle
  };
}
// CONCATENATED MODULE: ./node_modules/@deck.gl/react/dist/esm/deckgl.js












var propTypes = lib_deck["a" /* default */].getPropTypes(prop_types_default.a);
var defaultProps = lib_deck["a" /* default */].defaultProps;

var deckgl_DeckGL = function (_React$Component) {
  Object(inherits["a" /* default */])(DeckGL, _React$Component);

  function DeckGL(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DeckGL);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DeckGL).call(this, props));
    _this.viewports = null;
    _this.children = null;
    _this._needsRedraw = null;
    _this._containerRef = react_default.a.createRef();
    _this._canvasRef = react_default.a.createRef();
    _this.pickObject = _this.pickObject.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.pickMultipleObjects = _this.pickMultipleObjects.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.pickObjects = _this.pickObjects.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this._extractJSXLayers = Object(memoize["a" /* default */])(extractJSXLayers);
    _this._positionChildrenUnderViews = Object(memoize["a" /* default */])(positionChildrenUnderViews);
    _this._extractStyles = Object(memoize["a" /* default */])(extractStyles);
    return _this;
  }

  Object(createClass["a" /* default */])(DeckGL, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var DeckClass = this.props.Deck || lib_deck["a" /* default */];
      this.deck = this.deck || new DeckClass(Object.assign({}, this.props, {
        parent: this._containerRef.current,
        canvas: this._canvasRef.current,
        style: null,
        width: '100%',
        height: '100%',
        _customRender: this._customRender.bind(this)
      }));

      this._updateFromProps(this.props);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      this._updateFromProps(nextProps);

      var childrenChanged = this.children !== this._parseJSX(nextProps).children;

      var viewsChanged = this.deck.viewManager && this.deck.viewManager.needsRedraw();
      return childrenChanged && !viewsChanged;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._redrawDeck();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.deck.finalize();
    }
  }, {
    key: "pickObject",
    value: function pickObject(opts) {
      return this.deck.pickObject(opts);
    }
  }, {
    key: "pickMultipleObjects",
    value: function pickMultipleObjects(opts) {
      return this.deck.pickMultipleObjects(opts);
    }
  }, {
    key: "pickObjects",
    value: function pickObjects(opts) {
      return this.deck.pickObjects(opts);
    }
  }, {
    key: "_redrawDeck",
    value: function _redrawDeck() {
      if (this._needsRedraw) {
        this.deck._drawLayers(this._needsRedraw);

        this._needsRedraw = null;
      }
    }
  }, {
    key: "_customRender",
    value: function _customRender(redrawReason) {
      this._needsRedraw = redrawReason;
      var viewports = this.deck.viewManager.getViewports();

      if (viewports !== this.viewports) {
        this.forceUpdate();
      } else {
        this._redrawDeck();
      }
    }
  }, {
    key: "_parseJSX",
    value: function _parseJSX(props) {
      return this._extractJSXLayers({
        layers: props.layers,
        views: props.views,
        children: props.children
      });
    }
  }, {
    key: "_updateFromProps",
    value: function _updateFromProps(props) {
      var _this$_parseJSX = this._parseJSX(props),
          layers = _this$_parseJSX.layers,
          views = _this$_parseJSX.views;

      var deckProps = Object.assign({}, props, {
        style: null,
        width: '100%',
        height: '100%',
        layers: layers,
        views: views
      });
      this.deck.setProps(deckProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ContextProvider = _this$props.ContextProvider,
          width = _this$props.width,
          height = _this$props.height,
          style = _this$props.style;

      var _ref = this.deck || {},
          viewManager = _ref.viewManager;

      this.viewports = viewManager && viewManager.getViewports();
      this.children = this._parseJSX(this.props).children;

      var children = this._positionChildrenUnderViews({
        children: this.children,
        viewports: this.viewports,
        deck: this.deck,
        ContextProvider: ContextProvider
      });

      var _this$_extractStyles = this._extractStyles({
        width: width,
        height: height,
        style: style
      }),
          containerStyle = _this$_extractStyles.containerStyle,
          canvasStyle = _this$_extractStyles.canvasStyle;

      var canvas = Object(react["createElement"])('canvas', {
        key: 'canvas',
        ref: this._canvasRef,
        style: canvasStyle
      });
      return Object(react["createElement"])('div', {
        id: 'deckgl-wrapper',
        ref: this._containerRef,
        style: containerStyle
      }, [canvas, children]);
    }
  }]);

  return DeckGL;
}(react_default.a.Component);


deckgl_DeckGL.propTypes = propTypes;
deckgl_DeckGL.defaultProps = defaultProps;

/***/ })

}]);
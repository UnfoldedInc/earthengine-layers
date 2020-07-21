(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "8BNJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToDOM", function() { return renderToDOM; });
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6kNP");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8npG");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kD0k");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zGcK");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wcNg");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("NGNH");
/* harmony import */ var _google_earthengine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("RtaV");
/* harmony import */ var _google_earthengine__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_google_earthengine__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("v5MB");
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Add a EE-enabled Google Client id here (or inject it with e.g. a webpack environment plugin)
var EE_CLIENT_ID="562875810552-5mut6fkiukje0cbbvg5cd9vdmdb8u6dh.apps.googleusercontent.com";// eslint-disable-line
var GOOGLE_MAPS_TOKEN="AIzaSyCE8KPc9tziZK0fu3mktPZnaO9qTBjM0IY";// eslint-disable-line
var INITIAL_VIEW_STATE={longitude:-53,latitude:36,zoom:3,pitch:0,bearing:0};var App=/*#__PURE__*/function(_React$Component){_inheritsLoose(App,_React$Component);function App(props){var _this;_this=_React$Component.call(this,props)||this;_this.state={eeObject:null,asVector:true};_this.loginProvider=new _shared__WEBPACK_IMPORTED_MODULE_9__[/* GoogleLoginProvider */ "c"]({scopes:['https://www.googleapis.com/auth/earthengine'],clientId:EE_CLIENT_ID,onLoginChange:_this._onLoginSuccess.bind(_assertThisInitialized(_this))});return _this;}var _proto=App.prototype;_proto._onLoginSuccess=/*#__PURE__*/function(){var _onLoginSuccess2=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(user,loginProvider){var _this$props$year,year,hurricanes,points,storm_ids,lines;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_7__[/* EarthEngineLayer */ "a"].initializeEEApi({clientId:EE_CLIENT_ID});case 2:_this$props$year=this.props.year,year=_this$props$year===void 0?'2017':_this$props$year;// Show hurricane tracks and points for 2017.
hurricanes=_google_earthengine__WEBPACK_IMPORTED_MODULE_8___default.a.FeatureCollection('NOAA/NHC/HURDAT2/atlantic');points=hurricanes.filter(_google_earthengine__WEBPACK_IMPORTED_MODULE_8___default.a.Filter.date(_google_earthengine__WEBPACK_IMPORTED_MODULE_8___default.a.Date(year).getRange('year')));// Find all of the hurricane ids.
storm_ids=points.toList(1000).map(function(point){return _google_earthengine__WEBPACK_IMPORTED_MODULE_8___default.a.Feature(point).get('id');}).distinct();// Create a line for each hurricane.
lines=_google_earthengine__WEBPACK_IMPORTED_MODULE_8___default.a.FeatureCollection(storm_ids.map(function(storm_id){var pts=points.filter(_google_earthengine__WEBPACK_IMPORTED_MODULE_8___default.a.Filter.eq('id',_google_earthengine__WEBPACK_IMPORTED_MODULE_8___default.a.String(storm_id))).sort('system:time_start');var line=_google_earthengine__WEBPACK_IMPORTED_MODULE_8___default.a.Geometry.LineString(pts.geometry().coordinates());var feature=_google_earthengine__WEBPACK_IMPORTED_MODULE_8___default.a.Feature(line);return feature.set('id',storm_id);}));this.setState({points:points,lines:lines});case 8:case"end":return _context.stop();}}},_callee,this);}));function _onLoginSuccess(_x,_x2){return _onLoginSuccess2.apply(this,arguments);}return _onLoginSuccess;}();_proto.render=function render(){var _this2=this;var _this$state=this.state,points=_this$state.points,lines=_this$state.lines,asVector=_this$state.asVector;var layers=asVector?[new _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_7__[/* EarthEngineLayer */ "a"]({id:'lines-vector',eeObject:lines,asVector:asVector,getLineColor:[255,0,0],getLineWidth:1000,lineWidthMinPixels:3}),new _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_7__[/* EarthEngineLayer */ "a"]({id:'points-vector',eeObject:points,asVector:asVector,getFillColor:[0,0,0],pointRadiusMinPixels:3,getRadius:100,getLineColor:[255,255,255],lineWidthMinPixels:0.5,stroked:true})]:[new _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_7__[/* EarthEngineLayer */ "a"]({id:'lines-raster',eeObject:lines,visParams:{color:'red'}}),new _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_7__[/* EarthEngineLayer */ "a"]({id:'points-raster',eeObject:points,visParams:{color:'black'}})];return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:{position:'relative',height:'100%',width:'100%'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_9__[/* DeckWithGoogleMaps */ "a"],{initialViewState:INITIAL_VIEW_STATE,id:"json-deck",layers:layers,googleMapsToken:GOOGLE_MAPS_TOKEN}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_9__[/* GoogleLoginPane */ "b"],{loginProvider:this.loginProvider}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_9__[/* InfoBox */ "d"],{title:"FeatureCollection",style:{zIndex:-1}},"The",' ',/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"https://developers.google.com/earth-engine/datasets/catalog/NOAA_NHC_HURDAT2_atlantic"},"Atlantic hurricane catalog"),' ',"displayed using an ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code",null,"ee.FeatureCollection")," object.",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input",{type:"checkbox",defaultChecked:this.state.asVector,onClick:function onClick(){return _this2.setState(function(prevState){return{asVector:!prevState.asVector};});}}),"Render as vector data")));};return App;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);function renderToDOM(container){return Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["render"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(App,null),container);}

/***/ })

}]);
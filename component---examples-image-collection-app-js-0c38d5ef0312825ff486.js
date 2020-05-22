(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "ckFc":
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
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wcNg");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _deck_gl_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("yYqN");
/* harmony import */ var _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("NGNH");
/* harmony import */ var _google_earthengine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("RtaV");
/* harmony import */ var _google_earthengine__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_google_earthengine__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("v5MB");
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Add a EE-enabled Google Client id here (or inject it with e.g. a webpack environment plugin)
var EE_CLIENT_ID="562875810552-5mut6fkiukje0cbbvg5cd9vdmdb8u6dh.apps.googleusercontent.com";// eslint-disable-line
var INITIAL_VIEW_STATE={longitude:-80.41669,latitude:37.7853,zoom:2,pitch:0,bearing:0};var App=/*#__PURE__*/function(_React$Component){_inheritsLoose(App,_React$Component);function App(props){var _this;_this=_React$Component.call(this,props)||this;_this.state={eeObject:null};return _this;}var _proto=App.prototype;_proto.componentDidMount=function componentDidMount(){this.loginProvider=new _shared__WEBPACK_IMPORTED_MODULE_9__[/* GoogleLoginProvider */ "b"]({scopes:['https://www.googleapis.com/auth/earthengine'],clientId:EE_CLIENT_ID,onLoginChange:this._onLoginSuccess.bind(this)});};_proto._onLoginSuccess=/*#__PURE__*/function(){var _onLoginSuccess2=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(user,loginProvider){var eeObject;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_7__[/* EarthEngineLayer */ "a"].initializeEEApi({clientId:EE_CLIENT_ID});case 2:eeObject=_google_earthengine__WEBPACK_IMPORTED_MODULE_8___default.a.ImageCollection('NOAA/GFS0P25').filterDate('2018-12-22','2018-12-23').limit(24).select('temperature_2m_above_ground');this.setState({eeObject:eeObject});case 4:case"end":return _context.stop();}}},_callee,this);}));function _onLoginSuccess(_x,_x2){return _onLoginSuccess2.apply(this,arguments);}return _onLoginSuccess;}();_proto.render=function render(){var eeObject=this.state.eeObject;var visParams={min:-40.0,max:35.0,palette:['blue','purple','cyan','green','yellow','red']};var layers=[new _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_7__[/* EarthEngineLayer */ "a"]({eeObject:eeObject,visParams:visParams,animate:true})];return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{style:{position:'relative',height:'100%'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_deck_gl_react__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],{controller:true,initialViewState:INITIAL_VIEW_STATE,layers:layers},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_9__[/* GoogleLoginPane */ "a"],{loginProvider:this.loginProvider})));};return App;}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);function renderToDOM(container){return Object(react_dom__WEBPACK_IMPORTED_MODULE_5__["render"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(App,null),container);}

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "31BT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageCollectionExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToDOM", function() { return renderToDOM; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_earthengine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RtaV");
/* harmony import */ var _google_earthengine__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_google_earthengine__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NGNH");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mKYw");
function renderImageCollectionExampleLayers(){var eeObject=_google_earthengine__WEBPACK_IMPORTED_MODULE_2___default.a.ImageCollection('NOAA/GFS0P25').filterDate('2018-12-22','2018-12-23').limit(24).select('temperature_2m_above_ground');var visParams={min:-40.0,max:35.0,palette:['blue','purple','cyan','green','yellow','red']};return[new _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_3__[/* EarthEngineLayer */ "b"]({eeObject:eeObject,visParams:visParams,animate:true})];}function ImageCollectionExample(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],{layersFunction:renderImageCollectionExampleLayers});}function renderToDOM(container){return Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageCollectionExample,null),container);}

/***/ })

}]);
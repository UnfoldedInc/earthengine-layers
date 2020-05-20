(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "nNRH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToDOM", function() { return renderToDOM; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_earthengine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RtaV");
/* harmony import */ var _google_earthengine__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_google_earthengine__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NGNH");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mKYw");
function renderImageExampleLayers(){var eeObject=_google_earthengine__WEBPACK_IMPORTED_MODULE_2___default.a.Image('CGIAR/SRTM90_V4');var visParams={min:0,max:4000,palette:['006633','E5FFCC','662A00','D8D8D8','F5F5F5']};return[new _unfolded_gl_earthengine_layers__WEBPACK_IMPORTED_MODULE_3__[/* EarthEngineLayer */ "b"]({eeObject:eeObject,visParams:visParams,opacity:0.5})];}function ImageExample(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],{layersFunction:renderImageExampleLayers});}function renderToDOM(container){return Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageExample,null),container);}

/***/ })

}]);
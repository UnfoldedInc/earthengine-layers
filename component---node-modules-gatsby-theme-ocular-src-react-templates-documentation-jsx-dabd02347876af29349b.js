(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "bzNg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocTemplate; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dI71");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8mkv");
/* harmony import */ var _styled_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7yFj");
// Query for the markdown doc by slug
// (Note: We could just search the allMarkdown from WebsiteConfig ourselves)
var query="3097720679";var DocTemplate=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(DocTemplate,_React$Component);function DocTemplate(){return _React$Component.apply(this,arguments)||this;}var _proto=DocTemplate.prototype;_proto.render=function render(){var htmlAst=this.props.data.docBySlug.htmlAst;var relativeLinks=this.props.pageContext.relativeLinks;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_typography__WEBPACK_IMPORTED_MODULE_3__[/* MarkdownBody */ "n"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_markdown__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{path:this.props.location.pathname,relativeLinks:relativeLinks,htmlAst:htmlAst}));};return DocTemplate;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ })

}]);
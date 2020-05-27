(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "5462":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ templates_IndexPage; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/website-config.jsx
var website_config = __webpack_require__("B5uF");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/templates/top-level-layout.jsx + 5 modules
var top_level_layout = __webpack_require__("6Ooe");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/header.jsx
var header = __webpack_require__("Ljh3");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/table-of-contents.jsx + 1 modules
var table_of_contents = __webpack_require__("kaKw");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/styled/example.js
var example = __webpack_require__("NKOs");

// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/info-panel.jsx
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var info_panel_InfoPanel=/*#__PURE__*/function(_PureComponent){_inheritsLoose(InfoPanel,_PureComponent);function InfoPanel(){return _PureComponent.apply(this,arguments)||this;}var _proto=InfoPanel.prototype;_proto.render=function render(){var _this$props=this.props,title=_this$props.title,children=_this$props.children,sourceLink=_this$props.sourceLink;return/*#__PURE__*/react_default.a.createElement(example["d" /* PanelContainer */],null,/*#__PURE__*/react_default.a.createElement(example["f" /* PanelTitle */],null,title),/*#__PURE__*/react_default.a.createElement(example["e" /* PanelContent */],null,children),/*#__PURE__*/react_default.a.createElement(example["g" /* SourceLink */],{href:sourceLink,target:"_new"},"View Code \u2197"));};return InfoPanel;}(react["PureComponent"]);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/styled/typography.js
var typography = __webpack_require__("7yFj");

// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/markdown.jsx
var markdown = __webpack_require__("8mkv");

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/github-contributors.jsx
function github_contributors_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Github api has rate-limits. We want to cache the response
// as much as we can. This component gets re-mounted multiple times.
var cachedResponse=null;/* for debug */ // cachedResponse = [
//   {
//     id: 'Pessimistress',
//     avatar_url: 'https://avatars3.githubusercontent.com/u/2059298',
//     login: 'Pessimistress',
//     html_url: 'https://github.com/Pessimistress'
//   },
//   {
//     id: 'ibgreen',
//     avatar_url: 'https://avatars1.githubusercontent.com/u/7025232',
//     login: 'ibgreen',
//     html_url: 'https://github.com/ibgreen'
//   }
// ];
var ContribContainer=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"github-contributors__ContribContainer",componentId:"sc-12w0yk9-0"})(["display:flex;flex-wrap:wrap;justify-content:center;"]);var ContribLink=styled_components_browser_esm["c" /* default */].a.withConfig({displayName:"github-contributors__ContribLink",componentId:"sc-12w0yk9-1"})(["margin:10px;display:inline-block;width:8rem;height:10rem;text-decoration:none;text-align:center;color:",";&:hover img{border:4px solid #fff;box-shadow:0 0 20px #17b8be;opacity:1;}"],function(props){return props.theme.colors.mono900;});var ContribImage=styled_components_browser_esm["c" /* default */].img.withConfig({displayName:"github-contributors__ContribImage",componentId:"sc-12w0yk9-2"})(["border-radius:50%;border:4px solid #17b8be;box-shadow:0 0 0 #17b8be;transition:border 0.5s,box-shadow 0.5s;opacity:0.9;"]);var github_contributors_GithubContributors=/*#__PURE__*/function(_Component){github_contributors_inheritsLoose(GithubContributors,_Component);function GithubContributors(props){var _this;_this=_Component.call(this,props)||this;_this.state={response:cachedResponse};return _this;}var _proto=GithubContributors.prototype;_proto.componentDidMount=function componentDidMount(){var _this2=this;if(cachedResponse){return;}var project=this.props.project;fetch("https://api.github.com/repos/"+project+"/contributors").then(function(response){return response.json();}).then(function(response){cachedResponse=response;_this2.setState({response:response});});};_proto.render=function render(){var response=this.state.response;var contributors=Array.isArray(response)?response:[];return/*#__PURE__*/react_default.a.createElement(ContribContainer,null,contributors.map(function(contributor){return contributor&&/*#__PURE__*/react_default.a.createElement(ContribLink,{target:"_blank",rel:"noopener noreferrer",href:contributor.html_url,key:contributor.id},/*#__PURE__*/react_default.a.createElement(ContribImage,{src:contributor.avatar_url,width:"100%",alt:contributor.login}),/*#__PURE__*/react_default.a.createElement("div",null,contributor.login));}));};return GithubContributors;}(react["Component"]);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/styled/home.js
var Banner=styled_components_browser_esm["c" /* default */].section.withConfig({displayName:"home__Banner",componentId:"f9hbqs-0"})(["position:relative;height:30rem;background:",";color:",";z-index:0;"],function(props){return props.theme.colors.mono900;},function(props){return props.theme.colors.mono100;});var Container=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"home__Container",componentId:"f9hbqs-1"})(["position:relative;padding:2rem 2rem 2rem 4rem;max-width:80rem;width:100%;height:100%;font:",";margin:0;"],function(props){return props.theme.typography.font400;});var BannerContainer=Object(styled_components_browser_esm["c" /* default */])(Container).withConfig({displayName:"home__BannerContainer",componentId:"f9hbqs-2"})(["padding-top:192px;z-index:0;pointer-events:none;"]);var HeroExampleContainer=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"home__HeroExampleContainer",componentId:"f9hbqs-3"})(["position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;"]);var Section=styled_components_browser_esm["c" /* default */].section.withConfig({displayName:"home__Section",componentId:"f9hbqs-4"})(["&:nth-child(2n+1){background:#E8E8E8;}"]);var ProjectName=styled_components_browser_esm["c" /* default */].h1.withConfig({displayName:"home__ProjectName",componentId:"f9hbqs-5"})(["font-size:5em;line-height:1;text-transform:uppercase;letter-spacing:4px;font-weight:700;margin:0;margin-bottom:16px;"]);var GetStartedLink=Object(styled_components_browser_esm["c" /* default */])(gatsby_browser_entry["a" /* Link */]).withConfig({displayName:"home__GetStartedLink",componentId:"f9hbqs-6"})(["pointer-events:all;font-size:12px;line-height:44px;letter-spacing:2px;font-weight:bold;margin:24px 0;padding:0 4rem;pointer-events:all;display:inline-block;text-decoration:none;transition:background-color 250ms ease-in,color 250ms ease-in;border:solid 2px ",";color:",";border-image:linear-gradient(to right,"," 0%,"," 100%);border-image-slice:2;&:visited{color:",";}&:active{color:",";}&:hover{color:",";background-color:",";}"],function(props){return props.theme.colors.primary400;},function(props){return props.theme.colors.mono100;},function(props){return props.theme.colors.primary400;},function(props){return props.theme.colors.primary100;},function(props){return props.theme.colors.mono100;},function(props){return props.theme.colors.mono100;},function(props){return props.theme.colors.mono100;},function(props){return props.theme.colors.primary400;});var Footer=styled_components_browser_esm["c" /* default */].footer.withConfig({displayName:"home__Footer",componentId:"f9hbqs-7"})(["position:absolute;bottom:-$footer-height;width:100%;z-index:2;background-image:url(data:image/gif;base64,R0lGODlhIAAgAKIAABUjMRYkMhclM0xXYU1YYgAAAAAAAAAAACwAAAAAIAAgAAADKjgjEP4wyklWmzg/IbTPwPWNZGmeaKqubOu+cCzPdG3feK7vfO//wKAwAQA7);background-size:32px;background-repeat:repeat;background-position:16px -8px;color:",";"],function(props){return props.theme.colors.mono100;});var FooterText=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"home__FooterText",componentId:"f9hbqs-8"})(["font-size:12px;line-height:20px;font-weight:400;letter-spacing:2px;opacity:0.4;margin-bottom:1rem;margin-right:1rem;"]);var FooterLogo=styled_components_browser_esm["c" /* default */].img.withConfig({displayName:"home__FooterLogo",componentId:"f9hbqs-9"})(["max-height:32px;display:inline-block;"]);
// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/templates/home.jsx
function home_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Copyright (c) 2018 Uber Technologies, Inc.
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
function renderPage(_ref){var config=_ref.config,HeroExample=_ref.HeroExample,projectDesc=_ref.projectDesc,children=_ref.children;// Note: The Layout "wrapper" component adds header and footer etc
return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(Banner,null,/*#__PURE__*/react_default.a.createElement(HeroExampleContainer,null,HeroExample&&/*#__PURE__*/react_default.a.createElement(HeroExample,null)),/*#__PURE__*/react_default.a.createElement(BannerContainer,null,/*#__PURE__*/react_default.a.createElement(ProjectName,null,config.PROJECT_NAME),/*#__PURE__*/react_default.a.createElement("p",null,config.PROJECT_DESC),/*#__PURE__*/react_default.a.createElement(GetStartedLink,{to:config.LINK_TO_GET_STARTED},"GET STARTED"))),projectDesc&&/*#__PURE__*/react_default.a.createElement(Section,null,/*#__PURE__*/react_default.a.createElement(Container,null,/*#__PURE__*/react_default.a.createElement(markdown["a" /* default */],{htmlAst:projectDesc.htmlAst}))),children&&/*#__PURE__*/react_default.a.createElement(Section,null,/*#__PURE__*/react_default.a.createElement(Container,null,children)),config.PROJECT_TYPE==='github'&&/*#__PURE__*/react_default.a.createElement(Section,null,/*#__PURE__*/react_default.a.createElement(Container,null,/*#__PURE__*/react_default.a.createElement("h3",null,"Contributors"),/*#__PURE__*/react_default.a.createElement("span",null,"Join us!"),/*#__PURE__*/react_default.a.createElement(github_contributors_GithubContributors,{project:config.PROJECT_ORG+"/"+config.PROJECT_NAME}))),/*#__PURE__*/react_default.a.createElement(Footer,null,/*#__PURE__*/react_default.a.createElement(Container,null,config.PROJECT_ORG_LOGO&&/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(FooterText,null,"Made by"),/*#__PURE__*/react_default.a.createElement(FooterLogo,{src:""+config.PROJECT_ORG_LOGO,alt:"logo"})))));}var home_IndexPage=/*#__PURE__*/function(_Component){home_inheritsLoose(IndexPage,_Component);function IndexPage(){return _Component.apply(this,arguments)||this;}var _proto=IndexPage.prototype;_proto.render=function render(){var _this$props=this.props,HeroExample=_this$props.HeroExample,pageContext=_this$props.pageContext,children=_this$props.children;return/*#__PURE__*/react_default.a.createElement("main",null,/*#__PURE__*/react_default.a.createElement(website_config["b" /* default */],null,function(_ref2){var config=_ref2.config;return renderPage({config:config,HeroExample:HeroExample,projectDesc:pageContext&&pageContext.projectDesc,children:children});}));};return IndexPage;}(react["Component"]);
// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/components.jsx
// Access to Static Website Data
// Layout Components
// export {default as Footer} from './src/components/layout/footer.jsx';
// ENABLES REDEFINING DOCUMENTATION.JSX
// TODO
// - don't export templates from components
// - templates should import components from this file
// - we can have separate exports from these

// CONCATENATED MODULE: ./templates/index.jsx
function templates_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// import GLTFExample from './example-gltf'; TODO Add EEDemo
if(typeof window!=='undefined'){window.website=true;}var Bullet=styled_components_browser_esm["c" /* default */].li.withConfig({displayName:"templates__Bullet",componentId:"sc-10n6azj-0"})(["background:url(images/icon-high-precision.svg) no-repeat left top;list-style:none;max-width:540px;padding:8px 0 12px 42px;font:",";"],function(props){return props.theme.typography.font300;});var templates_HeroExample=function HeroExample(){return/*#__PURE__*/react_default.a.createElement("div",{style:{height:'100%',backgroundImage:'url(images/image-animation-wide_less-bright.gif)',backgroundSize:'cover',backgroundRepeat:'no-repeat'}});};var templates_IndexPage=/*#__PURE__*/function(_React$Component){templates_inheritsLoose(IndexPage,_React$Component);function IndexPage(){return _React$Component.apply(this,arguments)||this;}var _proto=IndexPage.prototype;_proto.render=function render(){return/*#__PURE__*/react_default.a.createElement(home_IndexPage,{HeroExample:templates_HeroExample},/*#__PURE__*/react_default.a.createElement("ul",null,/*#__PURE__*/react_default.a.createElement(Bullet,null,"deck.gl layers for the Google Earth Engine API."),/*#__PURE__*/react_default.a.createElement(Bullet,null,"Effortlessly visualize planetary scale satellite data."),/*#__PURE__*/react_default.a.createElement(Bullet,null,"Python and Jupyter Notebook supported via pydeck.")));};return IndexPage;}(react_default.a.Component);

/***/ }),

/***/ "NKOs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MainExample */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MainExamples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExampleTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PanelContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SourceLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vOnD");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wbzz");
// example
var MainExample=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].main.withConfig({displayName:"example__MainExample",componentId:"h9izwc-0"})(["width:100%;height:100%;position:relative;"]);// examples
var MainExamples=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].main.withConfig({displayName:"example__MainExamples",componentId:"h9izwc-1"})(["display:flex;flex-wrap:wrap;@media screen and (max-width:","){padding-top:96px;}"],function(props){return props.theme.breakpoints.medium;});var ExampleCard=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"])(gatsby__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"]).withConfig({displayName:"example__ExampleCard",componentId:"h9izwc-2"})(["border:",";cursor:pointer;text-decoration:none;width:200px;outline:none;margin:",";padding:"," "," "," ",";transition-property:background,border-color,box-shadow;transition-duration:",";transition-timing-function:",";&:hover{box-shadow:",";background:",";border-color:transparent;}"],function(props){return props.theme.borders.border300;},function(props){return props.theme.sizing.scale400;},function(props){return props.theme.sizing.scale700;},function(props){return props.theme.sizing.scale600;},function(props){return props.theme.sizing.scale700;},function(props){return props.theme.sizing.scale600;},function(props){return props.theme.animation.timing400;},function(props){return props.theme.animation.easeInOutCurve;},function(props){return props.theme.lighting.shadow600;},function(props){return props.theme.colors.mono200;});var ExampleTitle=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].div.withConfig({displayName:"example__ExampleTitle",componentId:"h9izwc-3"})(["color:",";font:",";margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:150px;"],function(props){return props.theme.colors.mono1000;},function(props){return props.theme.typography.font300;});var PanelContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].div.withConfig({displayName:"example__PanelContainer",componentId:"h9izwc-4"})(["font:",";position:absolute;top:0;right:0;width:344px;background:",";box-shadow:",";margin:",";padding:"," ",";max-height:96%;overflow-x:hidden;overflow-y:auto;overflow-y:overlay;outline:none;z-index:1;"],function(props){return props.theme.typography.font300;},function(props){return props.theme.colors.white;},function(props){return props.theme.lighting.shadow400;},function(props){return props.theme.sizing.scale800;},function(props){return props.theme.sizing.scale400;},function(props){return props.theme.sizing.scale800;});var PanelTitle=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].h3.withConfig({displayName:"example__PanelTitle",componentId:"h9izwc-5"})(["font:",";margin:"," 0;"],function(props){return props.theme.typography.font450;},function(props){return props.theme.sizing.scale300;});var PanelContent=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].div.withConfig({displayName:"example__PanelContent",componentId:"h9izwc-6"})(["div >*{vertical-align:middle;white-space:nowrap;}div >label{display:inline-block;width:40%;margin-right:10%;color:",";margin-top:2px;margin-bottom:2px;}div >input,div >a,div >button,div >select{background:",";font:",";line-height:",";text-transform:none;text-overflow:ellipsis;overflow:hidden;display:inline-block;padding:0 ",";width:50%;height:",";text-align:left;}div >button{color:initial;}div >button:disabled{color:",";cursor:default;background:",";}div >input{border:",";&:disabled{background:",";}&[type=\"checkbox\"]{height:auto;}}p{margin-bottom:",";white-space:initial;}"],function(props){return props.theme.colors.momo800;},function(props){return props.theme.colors.white;},function(props){return props.theme.typography.font100;},function(props){return props.theme.sizing.scale700;},function(props){return props.theme.sizing.scale100;},function(props){return props.theme.sizing.scale700;},function(props){return props.theme.colors.mono300;},function(props){return props.theme.colors.mono300;},function(props){return props.theme.borders.border300;},function(props){return props.theme.colors.white;},function(props){return props.theme.sizing.scale600;});var SourceLink=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].a.withConfig({displayName:"example__SourceLink",componentId:"h9izwc-7"})(["display:block;text-align:right;margin-top:",";font:",";color:",";"],function(props){return props.theme.sizing.scale300;},function(props){return props.theme.typography.font250;},function(props){return props.theme.colors.mono800;});

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "9/5/":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */

var now = function now() {
  return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */


function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */


function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = debounce;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "H/ma":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ search_SearchPage; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("JX7q");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("dI71");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__("9/5/");
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);

// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/search.jsx
var search_SearchIcon=/*#__PURE__*/function(_Component){Object(inheritsLoose["a" /* default */])(SearchIcon,_Component);function SearchIcon(){return _Component.apply(this,arguments)||this;}var _proto=SearchIcon.prototype;_proto.render=function render(){return/*#__PURE__*/react_default.a.createElement("svg",Object.assign({viewBox:"0 0 24 24"},this.props),/*#__PURE__*/react_default.a.createElement("title",null,"Search"),/*#__PURE__*/react_default.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 6C8.79086 6 7 7.79086 7 10C7 12.2091 8.79086 14 11 14C13.2091 14 15 12.2091 15 10C15 7.79086 13.2091 6 11 6ZM5 10C5 6.68629 7.68629 4 11 4C14.3137 4 17 6.68629 17 10C17 11.2958 16.5892 12.4957 15.8907 13.4765L19.7071 17.2929C20.0976 17.6834 20.0976 18.3166 19.7071 18.7071C19.3166 19.0976 18.6834 19.0976 18.2929 18.7071L14.4765 14.8907C13.4957 15.5892 12.2958 16 11 16C7.68629 16 5 13.3137 5 10Z"}));};return SearchIcon;}(react["Component"]);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-ocular/src/react/components/website-config.jsx
var website_config = __webpack_require__("B5uF");

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__("vOnD");

// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/styled/search.js
// search
var SearchContainer=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"search__SearchContainer",componentId:"kiea9v-0"})(["position:relative;height:",";margin-bottom:20px;background:",";"],function(props){return props.theme.sizing.scale1000;},function(props){return props.theme.colors.mono200;});var IconContainer=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"search__IconContainer",componentId:"kiea9v-1"})(["position:absolute;display:flex;align-items:center;justify-content:center;width:",";height:",";"],function(props){return props.theme.sizing.scale1000;},function(props){return props.theme.sizing.scale1000;});var SearchInput=styled_components_browser_esm["c" /* default */].input.withConfig({displayName:"search__SearchInput",componentId:"kiea9v-2"})(["width:100%;box-shadow:0 0px 2px hsla(0,0%,0%,0.16);border:1px solid transparent;transition:0.3s;font-size:14px;font-weight:500;line-jeight:20px;padding:10px 10px 10px 40px;&:focus{box-shadow:",";border-color:rgb(39,110,241);outline:none;}"],function(props){return props.theme.lighting.shadow600;});var MainSearch=styled_components_browser_esm["c" /* default */].main.withConfig({displayName:"search__MainSearch",componentId:"kiea9v-3"})(["font:",";width:600px;max-width:90%;margin:"," auto 0px;"],function(props){return props.theme.typography.font300;},function(props){return props.theme.sizing.scale2400;});var SearchResultItem=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"search__SearchResultItem",componentId:"kiea9v-4"})(["margin:1em 0;"]);var SearchResultLink=Object(styled_components_browser_esm["c" /* default */])(gatsby_browser_entry["a" /* Link */]).withConfig({displayName:"search__SearchResultLink",componentId:"kiea9v-5"})(["font:",";margin-bottom:0.5rem;color:",";text-decoration:none;&:visited{color:",";}&:active{color:",";}&:hover{color:",";}"],function(props){return props.theme.typography.font450;},function(props){return props.theme.colors.linkText;},function(props){return props.theme.colors.linkVisited;},function(props){return props.theme.colors.linkHover;},function(props){return props.theme.colors.linkHover;});var SearchResultContent=styled_components_browser_esm["c" /* default */].div.withConfig({displayName:"search__SearchResultContent",componentId:"kiea9v-6"})(["max-height:5rem;overflow:hidden;"]);
// CONCATENATED MODULE: ./node_modules/gatsby-theme-ocular/src/react/templates/search.jsx
var search_SearchPage=/*#__PURE__*/function(_React$Component){Object(inheritsLoose["a" /* default */])(SearchPage,_React$Component);function SearchPage(props){var _this;_this=_React$Component.call(this,props)||this;_this.state={currentQuery:'',lastQuery:'',results:[]};_this.findResults=lodash_debounce_default()(_this.findResults.bind(Object(assertThisInitialized["a" /* default */])(_this)),250);_this.handleChange=_this.handleChange.bind(Object(assertThisInitialized["a" /* default */])(_this));return _this;}var _proto=SearchPage.prototype;_proto.findResults=function findResults(currentQuery){var lastQuery=this.state.lastQuery;var pathContext=this.props.pathContext;this.setState({debouncing:false});if(currentQuery===lastQuery){return;}var results;if(currentQuery){var regex=new RegExp(currentQuery,'i');var headingRegex=new RegExp("^#.*"+currentQuery,'im');// Sort order:
// appearance in title
results=pathContext.data.filter(function(node){return node.title&&regex.test(node.title);});// appearance in headings
results=results.concat(pathContext.data.filter(function(node){return!results.includes(node)&&node.rawMarkdownBody&&headingRegex.test(node.rawMarkdownBody);}));// any appearance
results=results.concat(pathContext.data.filter(function(node){return!results.includes(node)&&node.rawMarkdownBody&&regex.test(node.rawMarkdownBody);}));}else{results=[];}this.setState({results:results,lastQuery:currentQuery});};_proto.handleChange=function handleChange(event){var currentQuery=event.target.value;this.setState({currentQuery:currentQuery,debouncing:true});this.findResults(currentQuery);};_proto.renderPage=function renderPage(){// Note: The Layout "wrapper" component adds header and footer etc
var _this$state=this.state,debouncing=_this$state.debouncing,results=_this$state.results,currentQuery=_this$state.currentQuery;var pathContext=this.props.pathContext;return/*#__PURE__*/react_default.a.createElement(MainSearch,null,/*#__PURE__*/react_default.a.createElement(SearchContainer,null,/*#__PURE__*/react_default.a.createElement(IconContainer,null,/*#__PURE__*/react_default.a.createElement(search_SearchIcon,{width:24,height:24})),/*#__PURE__*/react_default.a.createElement(SearchInput,{type:"text",placeholder:"Search",onChange:this.handleChange,value:currentQuery})),debouncing?/*#__PURE__*/react_default.a.createElement("div",null,"Searching..."):null,/*#__PURE__*/react_default.a.createElement("div",null,currentQuery&&!debouncing&&/*#__PURE__*/react_default.a.createElement("div",null,results.length?results.length+" articles found.":"No result for this query."),!currentQuery&&!debouncing&&/*#__PURE__*/react_default.a.createElement("div",null,pathContext.data?pathContext.data.length+" articles indexed.":''),/*#__PURE__*/react_default.a.createElement("div",null,results.map(function(result){return/*#__PURE__*/react_default.a.createElement(SearchResultItem,{key:result.slug},/*#__PURE__*/react_default.a.createElement(SearchResultLink,{to:result.slug},result.title),/*#__PURE__*/react_default.a.createElement(SearchResultContent,null,result.excerpt));}))));};_proto.render=function render(){var _this2=this;return/*#__PURE__*/react_default.a.createElement(website_config["b" /* default */],null,function(){return _this2.renderPage();});};return SearchPage;}(react_default.a.Component);

/***/ })

}]);
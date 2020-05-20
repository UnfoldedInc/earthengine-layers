(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "/v66":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert;

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test);
  }

  if (test === null || test === undefined) {
    return ok;
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test);
  }

  if (typeof test === 'function') {
    return test;
  }

  throw new Error('Expected function, string, or object as test');
}

function convertAll(tests) {
  var results = [];
  var length = tests.length;
  var index = -1;

  while (++index < length) {
    results[index] = convert(tests[index]);
  }

  return results;
} // Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.


function matchesFactory(test) {
  return matches;

  function matches(node) {
    var key;

    for (key in test) {
      if (node[key] !== test[key]) {
        return false;
      }
    }

    return true;
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests);
  var length = checks.length;
  return matches;

  function matches() {
    var index = -1;

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true;
      }
    }

    return false;
  }
} // Utility to convert a string into a function which checks a given node’s type
// for said string.


function typeFactory(test) {
  return type;

  function type(node) {
    return Boolean(node && node.type === test);
  }
} // Utility to return true.


function ok() {
  return true;
}

/***/ }),

/***/ "0rpx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var caseSensitiveTransform = __webpack_require__("4v99");

module.exports = caseInsensitiveTransform;

function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}

/***/ }),

/***/ "1nHS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Schema;
var proto = Schema.prototype;
proto.space = null;
proto.normal = {};
proto.property = {};

function Schema(property, normal, space) {
  this.property = property;
  this.normal = normal;

  if (space) {
    this.space = space;
  }
}

/***/ }),

/***/ "2dtT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toH = __webpack_require__("Cjod");

var tableCellStyle = __webpack_require__("RdQs");

module.exports = rehypeReact;
var has = {}.hasOwnProperty; // Add a React compiler.

function rehypeReact(options) {
  var settings = options || {};
  var createElement = settings.createElement;
  var Fragment = settings.Fragment;
  var components = settings.components || {};
  this.Compiler = compiler;

  function compiler(node) {
    var res = toH(h, tableCellStyle(node), settings.prefix);

    if (node.type === 'root') {
      // Invert <https://github.com/syntax-tree/hast-to-hyperscript/blob/d227372/index.js#L46-L56>.
      if (res.type === 'div' && (node.children.length !== 1 || node.children[0].type !== 'element')) {
        res = res.props.children;
      } else {
        res = [res];
      }

      return createElement(Fragment || 'div', {}, res);
    }

    return res;
  } // Wrap `createElement` to pass components in.


  function h(name, props, children) {
    var component = has.call(components, name) ? components[name] : name;
    return createElement(component, props, children);
  }
}

/***/ }),

/***/ "2qIq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__("h5Sy");

var xlink = __webpack_require__("N8K4");

var xml = __webpack_require__("LyDg");

var xmlns = __webpack_require__("Wb05");

var aria = __webpack_require__("I7gA");

var svg = __webpack_require__("sU6V");

module.exports = merge([xml, xlink, xmlns, aria, svg]);

/***/ }),

/***/ "33yf":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {__webpack_require__("OeI1");

__webpack_require__("HQhv");

// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;

  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];

    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
} // path.resolve([from ...], to)
// posix version


exports.resolve = function () {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : process.cwd(); // Skip empty and invalid entries

    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  } // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)
  // Normalize the path


  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');
  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}; // path.normalize(path)
// posix version


exports.normalize = function (path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/'; // Normalize the path

  path = normalizeArray(filter(path.split('/'), function (p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }

  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
}; // posix version


exports.isAbsolute = function (path) {
  return path.charAt(0) === '/';
}; // posix version


exports.join = function () {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }

    return p;
  }).join('/'));
}; // path.relative(from, to)
// posix version


exports.relative = function (from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;

    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;

    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;

  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];

  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47
  /*/*/
  ;
  var end = -1;
  var matchedSlash = true;

  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);

    if (code === 47
    /*/*/
    ) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';

  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }

  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';
  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47
    /*/*/
    ) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
} // Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here


exports.basename = function (path, ext) {
  var f = basename(path);

  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }

  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find

  var preDotState = 0;

  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);

    if (code === 47
    /*/*/
    ) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }

    if (code === 46
    /*.*/
    ) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
      } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }

  return path.slice(startDot, end);
};

function filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }

  return res;
} // String.prototype.substr - negative index don't work in IE8


var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "4v99":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = caseSensitiveTransform;

function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}

/***/ }),

/***/ "6B/p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("sC2a");

var normalize = __webpack_require__("i/jK");

var DefinedInfo = __webpack_require__("RH6O");

var Info = __webpack_require__("JjqA");

var data = 'data';
module.exports = find;
var valid = /^data[-a-z0-9.:_]+$/i;
var dash = /-[a-z]/g;
var cap = /[A-Z]/g;

function find(schema, value) {
  var normal = normalize(value);
  var prop = value;
  var Type = Info;

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }

  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      prop = datasetToProperty(value);
    } else {
      value = datasetToAttribute(value);
    }

    Type = DefinedInfo;
  }

  return new Type(prop, value);
}

function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase);
  return data + value.charAt(0).toUpperCase() + value.slice(1);
}

function datasetToAttribute(property) {
  var value = property.slice(4);

  if (dash.test(value)) {
    return property;
  }

  value = value.replace(cap, kebab);

  if (value.charAt(0) !== '-') {
    value = '-' + value;
  }

  return data + value;
}

function kebab($0) {
  return '-' + $0.toLowerCase();
}

function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}

/***/ }),

/***/ "7yFj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GatsbyA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return H4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return H5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return H6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return MarkdownBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return InlineCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CodeBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return Pre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BlockQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return TableHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return TableBodyCell; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vOnD");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wbzz");
var A=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].a.withConfig({displayName:"typography__A",componentId:"sc-1pmaksm-0"})(["text-decoration:none;color:",";&:visited{color:",";}&:active{color:",";}&:hover{color:",";}"],function(props){return props.theme.colors.linkText;},function(props){return props.theme.colors.linkVisited;},function(props){return props.theme.colors.linkHover;},function(props){return props.theme.colors.linkHover;});var GatsbyA=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"])(gatsby__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"]).withConfig({displayName:"typography__GatsbyA",componentId:"sc-1pmaksm-1"})(["text-decoration:none;color:",";&:visited{color:",";}&:active{color:",";}&:hover{color:",";}"],function(props){return props.theme.colors.linkText;},function(props){return props.theme.colors.linkVisited;},function(props){return props.theme.colors.linkHover;},function(props){return props.theme.colors.linkHover;});var H1=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].h1.withConfig({displayName:"typography__H1",componentId:"sc-1pmaksm-2"})(["font:",";letter-spacing:0.02em;margin:4px 0 24px;"],function(props){return props.theme.typography.font800;});var H2=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].h2.withConfig({displayName:"typography__H2",componentId:"sc-1pmaksm-3"})(["font:",";margin:24px 0 16px;"],function(props){return props.theme.typography.font700;});var H3=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].h3.withConfig({displayName:"typography__H3",componentId:"sc-1pmaksm-4"})(["font:",";"],function(props){return props.theme.typography.font600;});var H4=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].h4.withConfig({displayName:"typography__H4",componentId:"sc-1pmaksm-5"})(["font:",";"],function(props){return props.theme.typography.font500;});var H5=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].h5.withConfig({displayName:"typography__H5",componentId:"sc-1pmaksm-6"})(["font:",";"],function(props){return props.theme.typography.font450;});var H6=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].h6.withConfig({displayName:"typography__H6",componentId:"sc-1pmaksm-7"})(["font:",";"],function(props){return props.theme.typography.font350;});var P=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].p.withConfig({displayName:"typography__P",componentId:"sc-1pmaksm-8"})(["margin:'0 0 16px'"]);var List=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].ul.withConfig({displayName:"typography__List",componentId:"sc-1pmaksm-9"})(["margin:0 0 12px;"]);var ListItem=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].li.withConfig({displayName:"typography__ListItem",componentId:"sc-1pmaksm-10"})(["margin-bottom:4px;"]);var MarkdownBody=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].div.withConfig({displayName:"typography__MarkdownBody",componentId:"sc-1pmaksm-11"})(["font:",";padding:36px;max-width:692px;"],function(props){return props.theme.typography.font300;});var InlineCode=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].code.withConfig({displayName:"typography__InlineCode",componentId:"sc-1pmaksm-12"})(["background-color:",";border-radius:",";padding:0 5px;font-family:Consolas,Menlo,Monaco,'Andale Mono WT','Andale Mono','Lucida Console','Lucida Sans Typewriter','DejaVu Sans Mono','Bitstream Vera Sans Mono','Liberation Mono','Nimbus Mono L','Courier New',Courier,monospace;font-size:0.9em;margin:1px 0;line-height:calc(1.5em / 0.9 - 2px);display:inline-block;vertical-align:top;"],function(props){return props.theme.colors.mono200;},function(props){return props.theme.sizing.scale100;});var CodeBlock=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].code.withConfig({displayName:"typography__CodeBlock",componentId:"sc-1pmaksm-13"})(["font-family:Consolas,Menlo,Monaco,'Andale Mono WT','Andale Mono','Lucida Console','Lucida Sans Typewriter','DejaVu Sans Mono','Bitstream Vera Sans Mono','Liberation Mono','Nimbus Mono L','Courier New',Courier,monospace;font-size:0.9em;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;tab-size:4;hyphens:none;background-color:",";"],function(props){return props.theme.colors.mono200;});var Pre=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].pre.withConfig({displayName:"typography__Pre",componentId:"sc-1pmaksm-14"})(["background-color:",";padding:",";overflow-x:auto;.keyword{color:#339;font-weight:bold;}.operator{color:#d14;}.punctuation{color:#458;}.string,.number{color:#008080;}"],function(props){return props.theme.colors.mono200;},function(props){return props.theme.sizing.scale200;});var BlockQuote=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].blockquote.withConfig({displayName:"typography__BlockQuote",componentId:"sc-1pmaksm-15"})(["background-color:",";margin-inline-start:0;margin-inline-end:0;padding:"," ",";"],function(props){return props.theme.colors.warning100;},function(props){return props.theme.sizing.scale400;},function(props){return props.theme.sizing.scale600;});var Table=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].table.withConfig({displayName:"typography__Table",componentId:"sc-1pmaksm-16"})(["border-collapse:collapse;border-spacing:1px;width:100%;"]);var TableHeaderCell=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].th.withConfig({displayName:"typography__TableHeaderCell",componentId:"sc-1pmaksm-17"})(["padding:4px;text-align:left;background:",";font-weight:bold;border:1px solid ",";"],function(props){return props.theme.colors.mono200;},function(props){return props.theme.colors.mono400;});var TableBodyCell=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"].td.withConfig({displayName:"typography__TableBodyCell",componentId:"sc-1pmaksm-18"})(["padding:4px;text-align:left;border:1px solid ",";"],function(props){return props.theme.colors.mono400;});

/***/ }),

/***/ "8mkv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rzGZ");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dq+y");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8npG");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ggvi");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sC2a");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ll4R");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("E5k/");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rehype_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2dtT");
/* harmony import */ var rehype_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rehype_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styled_typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("7yFj");
/* harmony import */ var _utils_links_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("vOJQ");
/* harmony import */ var _utils_links_utils_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utils_links_utils_js__WEBPACK_IMPORTED_MODULE_10__);
function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}// note - these typographic elements are taken directly from baseui.
// we can consider customizing them by first importing in styled/index, then
// giving them special parameters
var CustomLinkWrapper=function CustomLinkWrapper(path,relativeLinks){var CustomLink=function CustomLink(_ref){var href=_ref.href,props=_objectWithoutPropertiesLoose(_ref,["href"]);var updatedLink=Object(_utils_links_utils_js__WEBPACK_IMPORTED_MODULE_10__["parseLinks"])(href,path,relativeLinks);return updatedLink?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* GatsbyA */ "d"],Object.assign({to:updatedLink},props)):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* A */ "a"],Object.assign({href:href},props));};return CustomLink;};var CustomPre=function CustomPre(props){// the point of this component is to distinguish styling of inline <code /> elements
// with code blocks (ie <pre><code>...</code></pre>).
var children=props.children,otherProps=_objectWithoutPropertiesLoose(props,["children"]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* Pre */ "p"],otherProps,react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.map(children,function(child){// this means a child of this <pre> element is a <code> element, or <code> element styled
// by Styletron
if(child.type==='code'||child.type.displayName==='Styled(code)'){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* CodeBlock */ "c"],child.props);}// else we just clone the element as is
return react__WEBPACK_IMPORTED_MODULE_7___default.a.cloneElement(child);}));};var API_REGEX=/^code-classlanguage-text(.*?)code/;var CODE_REGEX=/code-classlanguage-text(.*?)code/g;// Sanitize auto generated anchor ids
var CustomHeader=function CustomHeader(ComponentType,id,props,anchors){if(API_REGEX.test(id)){id=id.match(API_REGEX)[1];}else{id=id.replace(CODE_REGEX,function($0,$1){return $1;});}// Make sure we don't have duplicate ids on this page
if(anchors[id]){var suffix=1;while(anchors[id+"-"+suffix]){suffix++;}id=id+"-"+suffix;}anchors[id]=true;var children=props.children.slice();var autolink=children[0];if(autolink.props&&autolink.props.href){children[0]=Object(react__WEBPACK_IMPORTED_MODULE_7__["cloneElement"])(autolink,{href:"#"+id});}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ComponentType,Object.assign({},props,{id:id}),children);};/* harmony default export */ __webpack_exports__["a"] = (function(props){var relativeLinks=props.relativeLinks,path=props.path;// note - we can add many other custom components.
var anchors={};var HeaderWrapper=function HeaderWrapper(ComponentType){return function(_ref2){var id=_ref2.id,props=_objectWithoutPropertiesLoose(_ref2,["id"]);return CustomHeader(ComponentType,id,props,anchors);};};// without rehypeReact, we'd just render the content of the markdown as generated by gatsby.
// what this does is that instead we work on the Abstract Syntax Tree (htmlAST).
// this allows us to replace certain elements by custom components. For instance, if we
// detect an <h1> element, we will replace it with an H1 custom component. In that case
// H1 is just a styled version of h1. However, with that process we can implement custom
// logic. For instance we can rewrite the contents of the link on the fly (CustomLinkWrapper).
// we can style differently code tags which are within or without a <pre> element. And we can
// add many more such custom components as needed.
var renderAst=new rehype_react__WEBPACK_IMPORTED_MODULE_8___default.a({createElement:react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement,components:{h1:_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* H1 */ "e"],h2:HeaderWrapper(_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* H2 */ "f"]),h3:HeaderWrapper(_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* H3 */ "g"]),h4:HeaderWrapper(_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* H4 */ "h"]),h5:HeaderWrapper(_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* H5 */ "i"]),h6:HeaderWrapper(_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* H6 */ "j"]),p:_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* P */ "o"],ul:_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* List */ "l"],li:_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* ListItem */ "m"],pre:CustomPre,code:_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* InlineCode */ "k"],table:_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* Table */ "q"],th:_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* TableHeaderCell */ "s"],td:_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* TableBodyCell */ "r"],blockquote:_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* BlockQuote */ "b"],a:relativeLinks?CustomLinkWrapper(path,relativeLinks):_styled_typography__WEBPACK_IMPORTED_MODULE_9__[/* A */ "a"]}}).Compiler;return renderAst(props.htmlAst);});

/***/ }),

/***/ "9phv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("sc67");

var normalize = __webpack_require__("i/jK");

var Schema = __webpack_require__("1nHS");

var DefinedInfo = __webpack_require__("RH6O");

module.exports = create;

function create(definition) {
  var space = definition.space;
  var mustUseProperty = definition.mustUseProperty || [];
  var attributes = definition.attributes || {};
  var props = definition.properties;
  var transform = definition.transform;
  var property = {};
  var normal = {};
  var prop;
  var info;

  for (prop in props) {
    info = new DefinedInfo(prop, transform(attributes, prop), props[prop], space);

    if (mustUseProperty.indexOf(prop) !== -1) {
      info.mustUseProperty = true;
    }

    property[prop] = info;
    normal[normalize(prop)] = prop;
    normal[normalize(info.attribute)] = prop;
  }

  return new Schema(property, normal, space);
}

/***/ }),

/***/ "Cjod":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("sC2a");

var html = __webpack_require__("ZQof");

var svg = __webpack_require__("2qIq");

var find = __webpack_require__("6B/p");

var hastToReact = __webpack_require__("W+Vs");

var spaces = __webpack_require__("TTG4");

var commas = __webpack_require__("vfP8");

var style = __webpack_require__("RG0g");

var ns = __webpack_require__("qrWY");

var convert = __webpack_require__("/v66");

var root = convert('root');
var element = convert('element');
var text = convert('text');
var dashes = /-([a-z])/g;
module.exports = wrapper;

function wrapper(h, node, options) {
  var settings = options || {};
  var prefix;
  var r;
  var v;
  var vd;

  if (typeof h !== 'function') {
    throw new Error('h is not a function');
  }

  if (typeof settings === 'string' || typeof settings === 'boolean') {
    prefix = settings;
    settings = {};
  } else {
    prefix = settings.prefix;
  }

  r = react(h);
  v = vue(h);
  vd = vdom(h);

  if (prefix === null || prefix === undefined) {
    prefix = r === true || v === true || vd === true ? 'h-' : false;
  }

  if (root(node)) {
    if (node.children.length === 1 && element(node.children[0])) {
      node = node.children[0];
    } else {
      node = {
        type: 'element',
        tagName: 'div',
        properties: {},
        children: node.children
      };
    }
  } else if (!element(node)) {
    throw new Error('Expected root or element, not `' + (node && node.type || node) + '`');
  }

  return toH(h, node, {
    schema: settings.space === 'svg' ? svg : html,
    prefix: prefix,
    key: 0,
    react: r,
    vue: v,
    vdom: vd,
    hyperscript: hyperscript(h)
  });
} // Transform a hast node through a hyperscript interface to *anything*!


function toH(h, node, ctx) {
  var parentSchema = ctx.schema;
  var schema = parentSchema;
  var name = node.tagName;
  var properties;
  var attributes;
  var children;
  var property;
  var elements;
  var length;
  var index;
  var value;
  var result;

  if (parentSchema.space === 'html' && name.toLowerCase() === 'svg') {
    schema = svg;
    ctx.schema = schema;
  }

  if (ctx.vdom === true && schema.space === 'html') {
    name = name.toUpperCase();
  }

  properties = node.properties;
  attributes = {};

  for (property in properties) {
    addAttribute(attributes, property, properties[property], ctx);
  }

  if (typeof attributes.style === 'string' && (ctx.vdom === true || ctx.vue === true || ctx.react === true)) {
    // VDOM, Vue, and React accept `style` as object.
    attributes.style = parseStyle(attributes.style, name);
  }

  if (ctx.prefix) {
    ctx.key++;
    attributes.key = ctx.prefix + ctx.key;
  }

  if (ctx.vdom && schema.space !== 'html') {
    attributes.namespace = ns[schema.space];
  }

  elements = [];
  children = node.children;
  length = children ? children.length : 0;
  index = -1;

  while (++index < length) {
    value = children[index];

    if (element(value)) {
      elements.push(toH(h, value, ctx));
    } else if (text(value)) {
      elements.push(value.value);
    }
  } // Ensure no React warnings are triggered for void elements having children
  // passed in.


  result = elements.length === 0 ? h(name, attributes) : h(name, attributes, elements); // Restore parent schema.

  ctx.schema = parentSchema;
  return result;
}

function addAttribute(props, prop, value, ctx) {
  var hyperlike = ctx.hyperscript || ctx.vdom || ctx.vue;
  var schema = ctx.schema;
  var info = find(schema, prop);
  var subprop; // Ignore nully and `NaN` values.
  // Ignore `false` and falsey known booleans for hyperlike DSLs.

  if (value === null || value === undefined || value !== value || hyperlike && value === false || hyperlike && info["boolean"] && !value) {
    return;
  }

  if (value !== null && typeof value === 'object' && 'length' in value) {
    // Accept `array`.
    // Most props are space-separated.
    value = (info.commaSeparated ? commas : spaces).stringify(value);
  } // Treat `true` and truthy known booleans.


  if (info["boolean"] && ctx.hyperscript === true) {
    value = '';
  }

  if (ctx.vue) {
    if (prop !== 'style') {
      subprop = 'attrs';
    }
  } else if (!info.mustUseProperty) {
    if (ctx.vdom === true) {
      subprop = 'attributes';
    } else if (ctx.hyperscript === true) {
      subprop = 'attrs';
    }
  }

  if (subprop) {
    if (props[subprop] === undefined) {
      props[subprop] = {};
    }

    props[subprop][info.attribute] = value;
  } else if (ctx.react && info.space) {
    props[hastToReact[info.property] || info.property] = value;
  } else {
    props[info.attribute] = value;
  }
} // Check if `h` is `react.createElement`.


function react(h) {
  var node = h && h('div');
  return Boolean(node && ('_owner' in node || '_store' in node) && node.key === null);
} // Check if `h` is `hyperscript`.


function hyperscript(h) {
  return Boolean(h && h.context && h.cleanup);
} // Check if `h` is `virtual-dom/h`.


function vdom(h) {
  return h && h('div').type === 'VirtualNode';
}

function vue(h) {
  var node = h && h('div');
  return Boolean(node && node.context && node.context._isVue);
}

function parseStyle(value, tagName) {
  var result = {};

  try {
    style(value, iterator);
  } catch (error) {
    error.message = tagName + '[style]' + error.message.slice('undefined'.length);
    throw error;
  }

  return result;

  function iterator(name, value) {
    result[styleCase(name)] = value;
  }
}

function styleCase(val) {
  if (val.slice(0, 4) === '-ms-') {
    val = 'ms-' + val.slice(4);
  }

  return val.replace(dashes, styleReplacer);
}

function styleReplacer($0, $1) {
  return $1.toUpperCase();
}

/***/ }),

/***/ "I7gA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__("Yup2");

var create = __webpack_require__("9phv");

var booleanish = types.booleanish;
var number = types.number;
var spaceSeparated = types.spaceSeparated;
module.exports = create({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});

function ariaTransform(_, prop) {
  return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase();
}

/***/ }),

/***/ "JjqA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Info;
var proto = Info.prototype;
proto.space = null;
proto.attribute = null;
proto.property = null;
proto["boolean"] = false;
proto.booleanish = false;
proto.overloadedBoolean = false;
proto.number = false;
proto.commaSeparated = false;
proto.spaceSeparated = false;
proto.commaOrSpaceSeparated = false;
proto.mustUseProperty = false;
proto.defined = false;

function Info(property, attribute) {
  this.property = property;
  this.attribute = attribute;
}

/***/ }),

/***/ "Lc7W":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("sC2a");

__webpack_require__("lFjb");

__webpack_require__("Ll4R");

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/; // declaration

var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/; // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill

var TRIM_REGEX = /^\s+|\s+$/g; // strings

var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = ''; // types

var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';
/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */

module.exports = function (style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];
  options = options || {};
  /**
   * Positional.
   */

  var lineno = 1;
  var column = 1;
  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */

  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }
  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */


  function position() {
    var start = {
      line: lineno,
      column: column
    };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }
  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */


  function Position(start) {
    this.start = start;
    this.end = {
      line: lineno,
      column: column
    };
    this.source = options.source;
  }
  /**
   * Non-enumerable source string.
   */


  Position.prototype.content = style;
  var errorsList = [];
  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */

  function error(msg) {
    var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }
  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */


  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }
  /**
   * Parse whitespace.
   */


  function whitespace() {
    match(WHITESPACE_REGEX);
  }
  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */


  function comments(rules) {
    var c;
    rules = rules || [];

    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }
    }

    return rules;
  }
  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */


  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
    var i = 2;

    while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
      ++i;
    }

    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;
    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }
  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */


  function declaration() {
    var pos = position(); // prop

    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment(); // :

    if (!match(COLON_REGEX)) return error("property missing ':'"); // val

    var val = match(VALUE_REGEX);
    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
    }); // ;

    match(SEMICOLON_REGEX);
    return ret;
  }
  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */


  function declarations() {
    var decls = [];
    comments(decls); // declarations

    var decl;

    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};
/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */


function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}

/***/ }),

/***/ "LyDg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__("9phv");

module.exports = create({
  space: 'xml',
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
});

function xmlTransform(_, prop) {
  return 'xml:' + prop.slice(3).toLowerCase();
}

/***/ }),

/***/ "N8K4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__("9phv");

module.exports = create({
  space: 'xlink',
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});

function xlinkTransform(_, prop) {
  return 'xlink:' + prop.slice(5).toLowerCase();
}

/***/ }),

/***/ "RG0g":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("Lc7W");
/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */


function StyleToObject(style, iterator) {
  var output = null;

  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

module.exports = StyleToObject;

/***/ }),

/***/ "RH6O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Info = __webpack_require__("JjqA");

var types = __webpack_require__("Yup2");

module.exports = DefinedInfo;
DefinedInfo.prototype = new Info();
DefinedInfo.prototype.defined = true;
var checks = ['boolean', 'booleanish', 'overloadedBoolean', 'number', 'commaSeparated', 'spaceSeparated', 'commaOrSpaceSeparated'];
var checksLength = checks.length;

function DefinedInfo(property, attribute, mask, space) {
  var index = -1;
  var check;
  mark(this, 'space', space);
  Info.call(this, property, attribute);

  while (++index < checksLength) {
    check = checks[index];
    mark(this, check, (mask & types[check]) === types[check]);
  }
}

function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}

/***/ }),

/***/ "RdQs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("HXzo");

var visit = __webpack_require__("ZkSf");

var hasOwnProperty = Object.prototype.hasOwnProperty;
var hastCssPropertyMap = {
  align: 'text-align',
  valign: 'vertical-align',
  height: 'height',
  width: 'width'
};

module.exports = function tableCellStyle(node) {
  visit(node, 'element', visitor);
  return node;
};

function visitor(node) {
  if (node.tagName !== 'tr' && node.tagName !== 'td' && node.tagName !== 'th') {
    return;
  }

  var hastName;
  var cssName;

  for (hastName in hastCssPropertyMap) {
    if (!hasOwnProperty.call(hastCssPropertyMap, hastName) || node.properties[hastName] === undefined) {
      continue;
    }

    cssName = hastCssPropertyMap[hastName];
    appendStyle(node, cssName, node.properties[hastName]);
    delete node.properties[hastName];
  }
}

function appendStyle(node, property, value) {
  var prevStyle = (node.properties.style || '').trim();

  if (prevStyle && !/;\s*/.test(prevStyle)) {
    prevStyle += ';';
  }

  if (prevStyle) {
    prevStyle += ' ';
  }

  var nextStyle = prevStyle + property + ': ' + value + ';';
  node.properties.style = nextStyle;
}

/***/ }),

/***/ "TTG4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("HQhv");

__webpack_require__("HXzo");

exports.parse = parse;
exports.stringify = stringify;
var empty = '';
var space = ' ';
var whiteSpace = /[ \t\n\r\f]+/g;

function parse(value) {
  var input = String(value || empty).trim();
  return input === empty ? [] : input.split(whiteSpace);
}

function stringify(values) {
  return values.join(space).trim();
}

/***/ }),

/***/ "U6jy":
/***/ (function(module, exports) {

module.exports = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
  var target = {};

  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

/***/ }),

/***/ "W+Vs":
/***/ (function(module) {

module.exports = JSON.parse("{\"classId\":\"classID\",\"dataType\":\"datatype\",\"itemId\":\"itemID\",\"strokeDashArray\":\"strokeDasharray\",\"strokeDashOffset\":\"strokeDashoffset\",\"strokeLineCap\":\"strokeLinecap\",\"strokeLineJoin\":\"strokeLinejoin\",\"strokeMiterLimit\":\"strokeMiterlimit\",\"typeOf\":\"typeof\",\"xLinkActuate\":\"xlinkActuate\",\"xLinkArcRole\":\"xlinkArcrole\",\"xLinkHref\":\"xlinkHref\",\"xLinkRole\":\"xlinkRole\",\"xLinkShow\":\"xlinkShow\",\"xLinkTitle\":\"xlinkTitle\",\"xLinkType\":\"xlinkType\",\"xmlnsXLink\":\"xmlnsXlink\"}");

/***/ }),

/***/ "Wb05":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__("9phv");

var caseInsensitiveTransform = __webpack_require__("0rpx");

module.exports = create({
  space: 'xmlns',
  attributes: {
    xmlnsxlink: 'xmlns:xlink'
  },
  transform: caseInsensitiveTransform,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
});

/***/ }),

/***/ "Yup2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var powers = 0;
exports["boolean"] = increment();
exports.booleanish = increment();
exports.overloadedBoolean = increment();
exports.number = increment();
exports.spaceSeparated = increment();
exports.commaSeparated = increment();
exports.commaOrSpaceSeparated = increment();

function increment() {
  return Math.pow(2, ++powers);
}

/***/ }),

/***/ "ZQof":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__("h5Sy");

var xlink = __webpack_require__("N8K4");

var xml = __webpack_require__("LyDg");

var xmlns = __webpack_require__("Wb05");

var aria = __webpack_require__("I7gA");

var html = __webpack_require__("afOB");

module.exports = merge([xml, xlink, xmlns, aria, html]);

/***/ }),

/***/ "ZkSf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("sc67");

module.exports = visit;

var visitParents = __webpack_require__("uzq8");

var CONTINUE = visitParents.CONTINUE;
var SKIP = visitParents.SKIP;
var EXIT = visitParents.EXIT;
visit.CONTINUE = CONTINUE;
visit.SKIP = SKIP;
visit.EXIT = EXIT;

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  visitParents(tree, test, overload, reverse);

  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    var index = parent ? parent.children.indexOf(node) : null;
    return visitor(node, index, parent);
  }
}

/***/ }),

/***/ "a3B7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d3wX");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("W1BH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _utils_globals__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _env_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K9nA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "self", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "global", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "document", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "process", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "console", function() { return _env_globals__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _env_is_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5ku3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return _env_is_browser__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowserMainThread", function() { return _env_is_browser__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony import */ var _env_get_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XbXb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBrowser", function() { return _env_get_browser__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _env_get_browser__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony import */ var _env_is_electron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("I0ug");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElectron", function() { return _env_is_electron__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _utils_assert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("qlHW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _utils_assert__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _lib_log__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("X68p");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLOR", function() { return _utils_color__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addColor", function() { return _utils_color__WEBPACK_IMPORTED_MODULE_7__["b"]; });

/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ygbw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leftPad", function() { return _utils_formatters__WEBPACK_IMPORTED_MODULE_8__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rightPad", function() { return _utils_formatters__WEBPACK_IMPORTED_MODULE_8__["d"]; });

/* harmony import */ var _utils_autobind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("NdJ4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autobind", function() { return _utils_autobind__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("S5bX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return _utils_local_storage__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("egY1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHiResTimestamp", function() { return _utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony import */ var _probe_gl_stats__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("laie");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return _probe_gl_stats__WEBPACK_IMPORTED_MODULE_12__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stat", function() { return _probe_gl_stats__WEBPACK_IMPORTED_MODULE_12__["a"]; });











/* harmony default export */ __webpack_exports__["default"] = (new _lib_log__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]({
  id: 'probe.gl'
}));







/***/ }),

/***/ "afOB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__("Yup2");

var create = __webpack_require__("9phv");

var caseInsensitiveTransform = __webpack_require__("0rpx");

var _boolean = types["boolean"];
var overloadedBoolean = types.overloadedBoolean;
var booleanish = types.booleanish;
var number = types.number;
var spaceSeparated = types.spaceSeparated;
var commaSeparated = types.commaSeparated;
module.exports = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: _boolean,
    allowPaymentRequest: _boolean,
    allowUserMedia: _boolean,
    alt: null,
    as: null,
    async: _boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: _boolean,
    autoPlay: _boolean,
    capture: _boolean,
    charSet: null,
    checked: _boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: _boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    "default": _boolean,
    defer: _boolean,
    dir: null,
    dirName: null,
    disabled: _boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: _boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: _boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: _boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: _boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loop: _boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: _boolean,
    muted: _boolean,
    name: null,
    nonce: null,
    noModule: _boolean,
    noValidate: _boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: _boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: _boolean,
    poster: null,
    preload: null,
    readOnly: _boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: _boolean,
    reversed: _boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: _boolean,
    seamless: _boolean,
    selected: _boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: _boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: number,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    "char": null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: _boolean,
    // Lists. Use CSS to reduce space between items instead
    declare: _boolean,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: number,
    // `<img>` and `<object>`
    leftMargin: number,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: number,
    // `<body>`
    marginWidth: number,
    // `<body>`
    noResize: _boolean,
    // `<frame>`
    noHref: _boolean,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: _boolean,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: _boolean,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: number,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: booleanish,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: number,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: _boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});

/***/ }),

/***/ "h5Sy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__("U6jy");

var Schema = __webpack_require__("1nHS");

module.exports = merge;

function merge(definitions) {
  var length = definitions.length;
  var property = [];
  var normal = [];
  var index = -1;
  var info;
  var space;

  while (++index < length) {
    info = definitions[index];
    property.push(info.property);
    normal.push(info.normal);
    space = info.space;
  }

  return new Schema(xtend.apply(null, property), xtend.apply(null, normal), space);
}

/***/ }),

/***/ "i/jK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = normalize;

function normalize(value) {
  return value.toLowerCase();
}

/***/ }),

/***/ "mFtL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert;

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test);
  }

  if (test === null || test === undefined) {
    return ok;
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test);
  }

  if (typeof test === 'function') {
    return test;
  }

  throw new Error('Expected function, string, or object as test');
}

function convertAll(tests) {
  var results = [];
  var length = tests.length;
  var index = -1;

  while (++index < length) {
    results[index] = convert(tests[index]);
  }

  return results;
} // Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.


function matchesFactory(test) {
  return matches;

  function matches(node) {
    var key;

    for (key in test) {
      if (node[key] !== test[key]) {
        return false;
      }
    }

    return true;
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests);
  var length = checks.length;
  return matches;

  function matches() {
    var index = -1;

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true;
      }
    }

    return false;
  }
} // Utility to convert a string into a function which checks a given node’s type
// for said string.


function typeFactory(test) {
  return type;

  function type(node) {
    return Boolean(node && node.type === test);
  }
} // Utility to return true.


function ok() {
  return true;
}

/***/ }),

/***/ "mIDF":
/***/ (function(module, exports, __webpack_require__) {

var _require=__webpack_require__("a3B7"),Log=_require.Log,COLOR=_require.COLOR;var log=new Log({id:'gatsby-theme-ocular'}).enable();log.log({color:COLOR.CYAN},'Loading ocular website generator (gatsby version)')();module.exports.log=log;module.exports.COLOR=COLOR;

/***/ }),

/***/ "qrWY":
/***/ (function(module) {

module.exports = JSON.parse("{\"html\":\"http://www.w3.org/1999/xhtml\",\"mathml\":\"http://www.w3.org/1998/Math/MathML\",\"svg\":\"http://www.w3.org/2000/svg\",\"xlink\":\"http://www.w3.org/1999/xlink\",\"xml\":\"http://www.w3.org/XML/1998/namespace\",\"xmlns\":\"http://www.w3.org/2000/xmlns/\"}");

/***/ }),

/***/ "sU6V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__("Yup2");

var create = __webpack_require__("9phv");

var caseSensitiveTransform = __webpack_require__("4v99");

var _boolean = types["boolean"];
var number = types.number;
var spaceSeparated = types.spaceSeparated;
var commaSeparated = types.commaSeparated;
var commaOrSpaceSeparated = types.commaOrSpaceSeparated;
module.exports = create({
  space: 'svg',
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: _boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    "in": null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});

/***/ }),

/***/ "uzq8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visitParents;

var convert = __webpack_require__("mFtL");

var CONTINUE = true;
var SKIP = 'skip';
var EXIT = false;
visitParents.CONTINUE = CONTINUE;
visitParents.SKIP = SKIP;
visitParents.EXIT = EXIT;

function visitParents(tree, test, visitor, reverse) {
  var is;

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  is = convert(test);
  one(tree, null, []); // Visit a single node.

  function one(node, index, parents) {
    var result = [];
    var subresult;

    if (!test || is(node, index, parents[parents.length - 1] || null)) {
      result = toResult(visitor(node, parents));

      if (result[0] === EXIT) {
        return result;
      }
    }

    if (node.children && result[0] !== SKIP) {
      subresult = toResult(all(node.children, parents.concat(node)));
      return subresult[0] === EXIT ? subresult : result;
    }

    return result;
  } // Visit children in `parent`.


  function all(children, parents) {
    var min = -1;
    var step = reverse ? -1 : 1;
    var index = (reverse ? children.length : min) + step;
    var result;

    while (index > min && index < children.length) {
      result = one(children[index], index, parents);

      if (result[0] === EXIT) {
        return result;
      }

      index = typeof result[1] === 'number' ? result[1] : index + step;
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value;
  }

  if (typeof value === 'number') {
    return [CONTINUE, value];
  }

  return [value];
}

/***/ }),

/***/ "vOJQ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("E5k/");__webpack_require__("Ll4R");__webpack_require__("sC2a");__webpack_require__("TAD1");var path=__webpack_require__("33yf");var _require=__webpack_require__("mIDF"),log=_require.log,COLOR=_require.COLOR;var parseLinks=function parseLinks(href,source,relativeLinks){// external link
if(href.startsWith('http')||href.startsWith('#')){return null;}var relPath=linkFromFileToFile(source,href.replace(/#.*/,''));var anchor=href.match(/#.*/);// relative link ie doc to doc
var relativeLink=relativeLinks[relPath];if(relativeLink){return anchor?relativeLink+anchor[0]:relativeLink;}return null;};// if using simply path.relative(from, to) to files which are in the same folder, the resolved path is: '../to'.
// instead we do relative path between folders, then add the name of the target file in the end.
// in that same scenario, the relative path between folders will be '', and overall path just 'to'.
function linkFromFileToFile(sourceFile,targetFile){var relativePathFromDirToDir=path.relative(sourceFile,path.dirname(targetFile));return path.join(relativePathFromDirToDir,path.basename(targetFile,'.md'));}function addToRelativeLinks(_ref){var _Object$assign;var source=_ref.source,target=_ref.target,rootFolder=_ref.rootFolder,edge=_ref.edge,relativeLinks=_ref.relativeLinks;// what we are doing here: for each markdown file, we create a mapping of different ways to
// link to another markdown file that we will honor.
// let's suppose that we want to go from a file:
// - physical location: /docs/my-files/source.md, slug: /docs/chapter-1/source
// to this file:
// - phyiscal location: /docs/developer-guide/target.md, slug: /docs/advanced-usage/api-reference/target
// by default, '../../advanced-usage/api/reference/target' would work (target file slug, relative to original slug)
// '/docs/advanced-usage/api-reference/target' would also work (absolute target slug)
// however, on github, those links wouldn't work as there is no phyiscal file behind that link.
// in github however: '/docs/developer-guide/target.md' (file name relative to root) or
// '../developer-guide/target.md' (relative file name) would work. Those links wouldn't work on the gatsby rendered
// page however (until that).
// we are creating a mapping so that ANY OF THESE 4 SYNTAXES would be honored.
// So, authors can use links that refer to physical files, and gatsby will render a link that works - the same link
// can work on github and gatsby
// note that often, the physical location and the slug are the same!
// However there is no guarantee that this will be the case.
if(!source||!target){log.log({color:COLOR.YELLOW},"couldn't add relative link for: "+JSON.stringify({source:source,target:target}))();return{};}var relativeToRootFolder=rootFolder&&linkFromFileToFile(rootFolder,source);var relativeToCurrentSlug=linkFromFileToFile(edge.node.fields.path,target);var absoluteTarget="/"+target;return Object.assign(Object.assign({},relativeLinks),{},(_Object$assign={},_Object$assign[relativeToRootFolder]=absoluteTarget,_Object$assign[relativeToCurrentSlug]=absoluteTarget,_Object$assign[target]=absoluteTarget,_Object$assign));}module.exports.addToRelativeLinks=addToRelativeLinks;module.exports.parseLinks=parseLinks;

/***/ }),

/***/ "vfP8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("HXzo");

__webpack_require__("sc67");

exports.parse = parse;
exports.stringify = stringify;
var comma = ',';
var space = ' ';
var empty = ''; // Parse comma-separated tokens to an array.

function parse(value) {
  var values = [];
  var input = String(value || empty);
  var index = input.indexOf(comma);
  var lastIndex = 0;
  var end = false;
  var val;

  while (!end) {
    if (index === -1) {
      index = input.length;
      end = true;
    }

    val = input.slice(lastIndex, index).trim();

    if (val || !end) {
      values.push(val);
    }

    lastIndex = index + 1;
    index = input.indexOf(comma, lastIndex);
  }

  return values;
} // Compile an array to comma-separated tokens.
// `options.padLeft` (default: `true`) pads a space left of each token, and
// `options.padRight` (default: `false`) pads a space to the right of each token.


function stringify(values, options) {
  var settings = options || {};
  var left = settings.padLeft === false ? empty : space;
  var right = settings.padRight ? space : empty; // Ensure the last empty entry is seen.

  if (values[values.length - 1] === empty) {
    values = values.concat(empty);
  }

  return values.join(right + comma + left).trim();
}

/***/ })

}]);
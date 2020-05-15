var EarthEngineLayerLibrary = (function (core, layers, core$1, ee) {
  'use strict';

  ee = ee && Object.prototype.hasOwnProperty.call(ee, 'default') ? ee['default'] : ee;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var Tile2DHeader = function () {
    function Tile2DHeader(_ref) {
      var x = _ref.x,
          y = _ref.y,
          z = _ref.z,
          onTileLoad = _ref.onTileLoad,
          onTileError = _ref.onTileError;

      _classCallCheck(this, Tile2DHeader);

      this.x = x;
      this.y = y;
      this.z = z;
      this.isVisible = false;
      this.parent = null;
      this.children = [];
      this.content = null;
      this._isLoaded = false;
      this.onTileLoad = onTileLoad;
      this.onTileError = onTileError;
    }

    _createClass(Tile2DHeader, [{
      key: "loadData",
      value: function loadData(getTileData) {
        var _this = this;

        var x = this.x,
            y = this.y,
            z = this.z,
            bbox = this.bbox;

        if (!getTileData) {
          return;
        }

        this._loader = Promise.resolve(getTileData({
          x: x,
          y: y,
          z: z,
          bbox: bbox
        })).then(function (buffers) {
          _this.content = buffers;
          _this._isLoaded = true;

          _this.onTileLoad(_this);

          return buffers;
        })["catch"](function (err) {
          _this._isLoaded = true;

          _this.onTileError(err);
        });
      }
    }, {
      key: "data",
      get: function get() {
        return this._isLoaded ? this.content : this._loader;
      }
    }, {
      key: "isLoaded",
      get: function get() {
        return this._isLoaded;
      }
    }, {
      key: "byteLength",
      get: function get() {
        var result = this.content ? this.content.byteLength : 0;

        if (!Number.isFinite(result)) {
          core.log.error('byteLength not defined in tile data')();
        }

        return result;
      }
    }]);

    return Tile2DHeader;
  }();

  /**
   * Common utilities
   * @module glMatrix
   */
  // Configuration Constants
  var EPSILON = 0.000001;
  var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
  if (!Math.hypot) Math.hypot = function () {
    var y = 0,
        i = arguments.length;

    while (i--) {
      y += arguments[i] * arguments[i];
    }

    return Math.sqrt(y);
  };

  /**
   * 4 Dimensional Vector
   * @module vec4
   */

  /**
   * Creates a new, empty vec4
   *
   * @returns {vec4} a new 4D vector
   */

  function create() {
    var out = new ARRAY_TYPE(4);

    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
    }

    return out;
  }
  /**
   * Scales a vec4 by a scalar number
   *
   * @param {vec4} out the receiving vector
   * @param {vec4} a the vector to scale
   * @param {Number} b amount to scale the vector by
   * @returns {vec4} out
   */

  function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
  }
  /**
   * Transforms the vec4 with a mat4.
   *
   * @param {vec4} out the receiving vector
   * @param {vec4} a the vector to transform
   * @param {mat4} m matrix to transform with
   * @returns {vec4} out
   */

  function transformMat4(out, a, m) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
  }
  /**
   * Perform some operation over an array of vec4s.
   *
   * @param {Array} a the array of vectors to iterate over
   * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
   * @param {Number} offset Number of elements to skip at the beginning of the array
   * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
   * @param {Function} fn Function to call for each vector in the array
   * @param {Object} [arg] additional argument to pass to fn
   * @returns {Array} a
   * @function
   */

  var forEach = function () {
    var vec = create();
    return function (a, stride, offset, count, fn, arg) {
      var i, l;

      if (!stride) {
        stride = 4;
      }

      if (!offset) {
        offset = 0;
      }

      if (count) {
        l = Math.min(count * stride + offset, a.length);
      } else {
        l = a.length;
      }

      for (i = offset; i < l; i += stride) {
        vec[0] = a[i];
        vec[1] = a[i + 1];
        vec[2] = a[i + 2];
        vec[3] = a[i + 3];
        fn(vec, vec, arg);
        a[i] = vec[0];
        a[i + 1] = vec[1];
        a[i + 2] = vec[2];
        a[i + 3] = vec[3];
      }

      return a;
    };
  }();

  function createMat4() {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  }
  function transformVector(matrix, vector) {
    var result = transformMat4([], vector, matrix);
    scale(result, result, 1 / result[3]);
    return result;
  }

  /**
   * Inverts a mat4
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the source matrix
   * @returns {mat4} out
   */

  function invert(out, a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    var a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    var a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
      return null;
    }

    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
  }
  /**
   * Multiplies two mat4s
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the first operand
   * @param {mat4} b the second operand
   * @returns {mat4} out
   */

  function multiply(out, a, b) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    var a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    var a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15]; // Cache only the current line of the second matrix

    var b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
  }
  /**
   * Translate a mat4 by the given vector
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the matrix to translate
   * @param {vec3} v vector to translate by
   * @returns {mat4} out
   */

  function translate(out, a, v) {
    var x = v[0],
        y = v[1],
        z = v[2];
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;

    if (a === out) {
      out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
      out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
      out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
      out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
      a00 = a[0];
      a01 = a[1];
      a02 = a[2];
      a03 = a[3];
      a10 = a[4];
      a11 = a[5];
      a12 = a[6];
      a13 = a[7];
      a20 = a[8];
      a21 = a[9];
      a22 = a[10];
      a23 = a[11];
      out[0] = a00;
      out[1] = a01;
      out[2] = a02;
      out[3] = a03;
      out[4] = a10;
      out[5] = a11;
      out[6] = a12;
      out[7] = a13;
      out[8] = a20;
      out[9] = a21;
      out[10] = a22;
      out[11] = a23;
      out[12] = a00 * x + a10 * y + a20 * z + a[12];
      out[13] = a01 * x + a11 * y + a21 * z + a[13];
      out[14] = a02 * x + a12 * y + a22 * z + a[14];
      out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
  }
  /**
   * Scales the mat4 by the dimensions in the given vec3 not using vectorization
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the matrix to scale
   * @param {vec3} v the vec3 to scale the matrix by
   * @returns {mat4} out
   **/

  function scale$1(out, a, v) {
    var x = v[0],
        y = v[1],
        z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  /**
   * Rotates a matrix by the given angle around the X axis
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the matrix to rotate
   * @param {Number} rad the angle to rotate the matrix by
   * @returns {mat4} out
   */

  function rotateX(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];

    if (a !== out) {
      // If the source and destination differ, copy the unchanged rows
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    } // Perform axis-specific matrix multiplication


    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
  }
  /**
   * Rotates a matrix by the given angle around the Z axis
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the matrix to rotate
   * @param {Number} rad the angle to rotate the matrix by
   * @returns {mat4} out
   */

  function rotateZ(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];

    if (a !== out) {
      // If the source and destination differ, copy the unchanged last row
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    } // Perform axis-specific matrix multiplication


    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
  }
  /**
   * Generates a perspective projection matrix with the given bounds.
   * Passing null/undefined/no value for far will generate infinite projection matrix.
   *
   * @param {mat4} out mat4 frustum matrix will be written into
   * @param {number} fovy Vertical field of view in radians
   * @param {number} aspect Aspect ratio. typically viewport width/height
   * @param {number} near Near bound of the frustum
   * @param {number} far Far bound of the frustum, can be null or Infinity
   * @returns {mat4} out
   */

  function perspective(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;

    if (far != null && far !== Infinity) {
      nf = 1 / (near - far);
      out[10] = (far + near) * nf;
      out[14] = 2 * far * near * nf;
    } else {
      out[10] = -1;
      out[14] = -2 * near;
    }

    return out;
  }
  /**
   * Returns whether or not the matrices have approximately the same elements in the same position.
   *
   * @param {mat4} a The first matrix.
   * @param {mat4} b The second matrix.
   * @returns {Boolean} True if the matrices are equal, false otherwise.
   */

  function equals(a, b) {
    var a0 = a[0],
        a1 = a[1],
        a2 = a[2],
        a3 = a[3];
    var a4 = a[4],
        a5 = a[5],
        a6 = a[6],
        a7 = a[7];
    var a8 = a[8],
        a9 = a[9],
        a10 = a[10],
        a11 = a[11];
    var a12 = a[12],
        a13 = a[13],
        a14 = a[14],
        a15 = a[15];
    var b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    var b4 = b[4],
        b5 = b[5],
        b6 = b[6],
        b7 = b[7];
    var b8 = b[8],
        b9 = b[9],
        b10 = b[10],
        b11 = b[11];
    var b12 = b[12],
        b13 = b[13],
        b14 = b[14],
        b15 = b[15];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
  }

  /**
   * 2 Dimensional Vector
   * @module vec2
   */

  /**
   * Creates a new, empty vec2
   *
   * @returns {vec2} a new 2D vector
   */

  function create$1() {
    var out = new ARRAY_TYPE(2);

    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
    }

    return out;
  }
  /**
   * Adds two vec2's
   *
   * @param {vec2} out the receiving vector
   * @param {vec2} a the first operand
   * @param {vec2} b the second operand
   * @returns {vec2} out
   */

  function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
  }
  /**
   * Negates the components of a vec2
   *
   * @param {vec2} out the receiving vector
   * @param {vec2} a vector to negate
   * @returns {vec2} out
   */

  function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
  }
  /**
   * Performs a linear interpolation between two vec2's
   *
   * @param {vec2} out the receiving vector
   * @param {vec2} a the first operand
   * @param {vec2} b the second operand
   * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
   * @returns {vec2} out
   */

  function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
  }
  /**
   * Perform some operation over an array of vec2s.
   *
   * @param {Array} a the array of vectors to iterate over
   * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
   * @param {Number} offset Number of elements to skip at the beginning of the array
   * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
   * @param {Function} fn Function to call for each vector in the array
   * @param {Object} [arg] additional argument to pass to fn
   * @returns {Array} a
   * @function
   */

  var forEach$1 = function () {
    var vec = create$1();
    return function (a, stride, offset, count, fn, arg) {
      var i, l;

      if (!stride) {
        stride = 2;
      }

      if (!offset) {
        offset = 0;
      }

      if (count) {
        l = Math.min(count * stride + offset, a.length);
      } else {
        l = a.length;
      }

      for (i = offset; i < l; i += stride) {
        vec[0] = a[i];
        vec[1] = a[i + 1];
        fn(vec, vec, arg);
        a[i] = vec[0];
        a[i + 1] = vec[1];
      }

      return a;
    };
  }();

  /**
   * 3 Dimensional Vector
   * @module vec3
   */

  /**
   * Creates a new, empty vec3
   *
   * @returns {vec3} a new 3D vector
   */

  function create$2() {
    var out = new ARRAY_TYPE(3);

    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
    }

    return out;
  }
  /**
   * Negates the components of a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a vector to negate
   * @returns {vec3} out
   */

  function negate$1(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
  }
  /**
   * Perform some operation over an array of vec3s.
   *
   * @param {Array} a the array of vectors to iterate over
   * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
   * @param {Number} offset Number of elements to skip at the beginning of the array
   * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
   * @param {Function} fn Function to call for each vector in the array
   * @param {Object} [arg] additional argument to pass to fn
   * @returns {Array} a
   * @function
   */

  var forEach$2 = function () {
    var vec = create$2();
    return function (a, stride, offset, count, fn, arg) {
      var i, l;

      if (!stride) {
        stride = 3;
      }

      if (!offset) {
        offset = 0;
      }

      if (count) {
        l = Math.min(count * stride + offset, a.length);
      } else {
        l = a.length;
      }

      for (i = offset; i < l; i += stride) {
        vec[0] = a[i];
        vec[1] = a[i + 1];
        vec[2] = a[i + 2];
        fn(vec, vec, arg);
        a[i] = vec[0];
        a[i + 1] = vec[1];
        a[i + 2] = vec[2];
      }

      return a;
    };
  }();

  function assert(condition, message) {
    if (!condition) {
      throw new Error(message || '@math.gl/web-mercator: assertion failed.');
    }
  }

  var PI = Math.PI;
  var PI_4 = PI / 4;
  var DEGREES_TO_RADIANS = PI / 180;
  var RADIANS_TO_DEGREES = 180 / PI;
  var TILE_SIZE = 512;
  var EARTH_CIRCUMFERENCE = 40.03e6;
  var DEFAULT_ALTITUDE = 1.5;
  function zoomToScale(zoom) {
    return Math.pow(2, zoom);
  }
  function lngLatToWorld(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        lng = _ref2[0],
        lat = _ref2[1];

    assert(Number.isFinite(lng));
    assert(Number.isFinite(lat) && lat >= -90 && lat <= 90, 'invalid latitude');
    var lambda2 = lng * DEGREES_TO_RADIANS;
    var phi2 = lat * DEGREES_TO_RADIANS;
    var x = TILE_SIZE * (lambda2 + PI) / (2 * PI);
    var y = TILE_SIZE * (PI + Math.log(Math.tan(PI_4 + phi2 * 0.5))) / (2 * PI);
    return [x, y];
  }
  function worldToLngLat(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        x = _ref4[0],
        y = _ref4[1];

    var lambda2 = x / TILE_SIZE * (2 * PI) - PI;
    var phi2 = 2 * (Math.atan(Math.exp(y / TILE_SIZE * (2 * PI) - PI)) - PI_4);
    return [lambda2 * RADIANS_TO_DEGREES, phi2 * RADIANS_TO_DEGREES];
  }
  function getDistanceScales(_ref6) {
    var latitude = _ref6.latitude,
        longitude = _ref6.longitude,
        _ref6$highPrecision = _ref6.highPrecision,
        highPrecision = _ref6$highPrecision === void 0 ? false : _ref6$highPrecision;
    assert(Number.isFinite(latitude) && Number.isFinite(longitude));
    var result = {};
    var worldSize = TILE_SIZE;
    var latCosine = Math.cos(latitude * DEGREES_TO_RADIANS);
    var unitsPerDegreeX = worldSize / 360;
    var unitsPerDegreeY = unitsPerDegreeX / latCosine;
    var altUnitsPerMeter = worldSize / EARTH_CIRCUMFERENCE / latCosine;
    result.unitsPerMeter = [altUnitsPerMeter, altUnitsPerMeter, altUnitsPerMeter];
    result.metersPerUnit = [1 / altUnitsPerMeter, 1 / altUnitsPerMeter, 1 / altUnitsPerMeter];
    result.unitsPerDegree = [unitsPerDegreeX, unitsPerDegreeY, altUnitsPerMeter];
    result.degreesPerUnit = [1 / unitsPerDegreeX, 1 / unitsPerDegreeY, 1 / altUnitsPerMeter];

    if (highPrecision) {
      var latCosine2 = DEGREES_TO_RADIANS * Math.tan(latitude * DEGREES_TO_RADIANS) / latCosine;
      var unitsPerDegreeY2 = unitsPerDegreeX * latCosine2 / 2;
      var altUnitsPerDegree2 = worldSize / EARTH_CIRCUMFERENCE * latCosine2;
      var altUnitsPerMeter2 = altUnitsPerDegree2 / unitsPerDegreeY * altUnitsPerMeter;
      result.unitsPerDegree2 = [0, unitsPerDegreeY2, altUnitsPerDegree2];
      result.unitsPerMeter2 = [altUnitsPerMeter2, 0, altUnitsPerMeter2];
    }

    return result;
  }
  function getViewMatrix(_ref7) {
    var height = _ref7.height,
        pitch = _ref7.pitch,
        bearing = _ref7.bearing,
        altitude = _ref7.altitude,
        scale = _ref7.scale,
        _ref7$center = _ref7.center,
        center = _ref7$center === void 0 ? null : _ref7$center;
    var vm = createMat4();
    translate(vm, vm, [0, 0, -altitude]);
    rotateX(vm, vm, -pitch * DEGREES_TO_RADIANS);
    rotateZ(vm, vm, bearing * DEGREES_TO_RADIANS);
    scale /= height;
    scale$1(vm, vm, [scale, scale, scale]);

    if (center) {
      translate(vm, vm, negate$1([], center));
    }

    return vm;
  }
  function getProjectionParameters(_ref8) {
    var width = _ref8.width,
        height = _ref8.height,
        _ref8$altitude = _ref8.altitude,
        altitude = _ref8$altitude === void 0 ? DEFAULT_ALTITUDE : _ref8$altitude,
        _ref8$pitch = _ref8.pitch,
        pitch = _ref8$pitch === void 0 ? 0 : _ref8$pitch,
        _ref8$nearZMultiplier = _ref8.nearZMultiplier,
        nearZMultiplier = _ref8$nearZMultiplier === void 0 ? 1 : _ref8$nearZMultiplier,
        _ref8$farZMultiplier = _ref8.farZMultiplier,
        farZMultiplier = _ref8$farZMultiplier === void 0 ? 1 : _ref8$farZMultiplier;
    var pitchRadians = pitch * DEGREES_TO_RADIANS;
    var halfFov = Math.atan(0.5 / altitude);
    var topHalfSurfaceDistance = Math.sin(halfFov) * altitude / Math.sin(Math.PI / 2 - pitchRadians - halfFov);
    var farZ = Math.cos(Math.PI / 2 - pitchRadians) * topHalfSurfaceDistance + altitude;
    return {
      fov: 2 * halfFov,
      aspect: width / height,
      focalDistance: altitude,
      near: nearZMultiplier,
      far: farZ * farZMultiplier
    };
  }
  function getProjectionMatrix(_ref9) {
    var width = _ref9.width,
        height = _ref9.height,
        pitch = _ref9.pitch,
        altitude = _ref9.altitude,
        nearZMultiplier = _ref9.nearZMultiplier,
        farZMultiplier = _ref9.farZMultiplier;

    var _getProjectionParamet = getProjectionParameters({
      width: width,
      height: height,
      altitude: altitude,
      pitch: pitch,
      nearZMultiplier: nearZMultiplier,
      farZMultiplier: farZMultiplier
    }),
        fov = _getProjectionParamet.fov,
        aspect = _getProjectionParamet.aspect,
        near = _getProjectionParamet.near,
        far = _getProjectionParamet.far;

    var projectionMatrix = perspective([], fov, aspect, near, far);
    return projectionMatrix;
  }
  function worldToPixels(xyz, pixelProjectionMatrix) {
    var _xyz2 = _slicedToArray(xyz, 3),
        x = _xyz2[0],
        y = _xyz2[1],
        _xyz2$ = _xyz2[2],
        z = _xyz2$ === void 0 ? 0 : _xyz2$;

    assert(Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z));
    return transformVector(pixelProjectionMatrix, [x, y, z, 1]);
  }
  function pixelsToWorld(xyz, pixelUnprojectionMatrix) {
    var targetZ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var _xyz3 = _slicedToArray(xyz, 3),
        x = _xyz3[0],
        y = _xyz3[1],
        z = _xyz3[2];

    assert(Number.isFinite(x) && Number.isFinite(y), 'invalid pixel coordinate');

    if (Number.isFinite(z)) {
      var coord = transformVector(pixelUnprojectionMatrix, [x, y, z, 1]);
      return coord;
    }

    var coord0 = transformVector(pixelUnprojectionMatrix, [x, y, 0, 1]);
    var coord1 = transformVector(pixelUnprojectionMatrix, [x, y, 1, 1]);
    var z0 = coord0[2];
    var z1 = coord1[2];
    var t = z0 === z1 ? 0 : ((targetZ || 0) - z0) / (z1 - z0);
    return lerp([], coord0, coord1, t);
  }

  var IDENTITY = createMat4();

  var Viewport = function () {
    function Viewport() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          width = _ref.width,
          height = _ref.height,
          scale = _ref.scale,
          _ref$viewMatrix = _ref.viewMatrix,
          viewMatrix = _ref$viewMatrix === void 0 ? IDENTITY : _ref$viewMatrix,
          _ref$projectionMatrix = _ref.projectionMatrix,
          projectionMatrix = _ref$projectionMatrix === void 0 ? IDENTITY : _ref$projectionMatrix;

      _classCallCheck(this, Viewport);

      this.width = width || 1;
      this.height = height || 1;
      this.scale = scale;
      this.unitsPerMeter = 1;
      this.viewMatrix = viewMatrix;
      this.projectionMatrix = projectionMatrix;
      var vpm = createMat4();
      multiply(vpm, vpm, this.projectionMatrix);
      multiply(vpm, vpm, this.viewMatrix);
      this.viewProjectionMatrix = vpm;
      var m = createMat4();
      scale$1(m, m, [this.width / 2, -this.height / 2, 1]);
      translate(m, m, [1, -1, 0]);
      multiply(m, m, this.viewProjectionMatrix);
      var mInverse = invert(createMat4(), m);

      if (!mInverse) {
        throw new Error('Pixel project matrix not invertible');
      }

      this.pixelProjectionMatrix = m;
      this.pixelUnprojectionMatrix = mInverse;
      this.equals = this.equals.bind(this);
      this.project = this.project.bind(this);
      this.unproject = this.unproject.bind(this);
      this.projectPosition = this.projectPosition.bind(this);
      this.unprojectPosition = this.unprojectPosition.bind(this);
      this.projectFlat = this.projectFlat.bind(this);
      this.unprojectFlat = this.unprojectFlat.bind(this);
    }

    _createClass(Viewport, [{
      key: "equals",
      value: function equals$1(viewport) {
        if (!(viewport instanceof Viewport)) {
          return false;
        }

        return viewport.width === this.width && viewport.height === this.height && equals(viewport.projectionMatrix, this.projectionMatrix) && equals(viewport.viewMatrix, this.viewMatrix);
      }
    }, {
      key: "project",
      value: function project(xyz) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref2$topLeft = _ref2.topLeft,
            topLeft = _ref2$topLeft === void 0 ? true : _ref2$topLeft;

        var worldPosition = this.projectPosition(xyz);
        var coord = worldToPixels(worldPosition, this.pixelProjectionMatrix);

        var _coord = _slicedToArray(coord, 2),
            x = _coord[0],
            y = _coord[1];

        var y2 = topLeft ? y : this.height - y;
        return xyz.length === 2 ? [x, y2] : [x, y2, coord[2]];
      }
    }, {
      key: "unproject",
      value: function unproject(xyz) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref3$topLeft = _ref3.topLeft,
            topLeft = _ref3$topLeft === void 0 ? true : _ref3$topLeft,
            targetZ = _ref3.targetZ;

        var _xyz = _slicedToArray(xyz, 3),
            x = _xyz[0],
            y = _xyz[1],
            z = _xyz[2];

        var y2 = topLeft ? y : this.height - y;
        var targetZWorld = targetZ && targetZ * this.unitsPerMeter;
        var coord = pixelsToWorld([x, y2, z], this.pixelUnprojectionMatrix, targetZWorld);

        var _this$unprojectPositi = this.unprojectPosition(coord),
            _this$unprojectPositi2 = _slicedToArray(_this$unprojectPositi, 3),
            X = _this$unprojectPositi2[0],
            Y = _this$unprojectPositi2[1],
            Z = _this$unprojectPositi2[2];

        if (Number.isFinite(z)) {
          return [X, Y, Z];
        }

        return Number.isFinite(targetZ) ? [X, Y, targetZ] : [X, Y];
      }
    }, {
      key: "projectPosition",
      value: function projectPosition(xyz) {
        var _this$projectFlat = this.projectFlat(xyz),
            _this$projectFlat2 = _slicedToArray(_this$projectFlat, 2),
            X = _this$projectFlat2[0],
            Y = _this$projectFlat2[1];

        var Z = (xyz[2] || 0) * this.unitsPerMeter;
        return [X, Y, Z];
      }
    }, {
      key: "unprojectPosition",
      value: function unprojectPosition(xyz) {
        var _this$unprojectFlat = this.unprojectFlat(xyz),
            _this$unprojectFlat2 = _slicedToArray(_this$unprojectFlat, 2),
            X = _this$unprojectFlat2[0],
            Y = _this$unprojectFlat2[1];

        var Z = (xyz[2] || 0) / this.unitsPerMeter;
        return [X, Y, Z];
      }
    }, {
      key: "projectFlat",
      value: function projectFlat(xyz) {
        var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scale;
        return xyz;
      }
    }, {
      key: "unprojectFlat",
      value: function unprojectFlat(xyz) {
        var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scale;
        return xyz;
      }
    }]);

    return Viewport;
  }();

  function fitBounds(_ref) {
    var width = _ref.width,
        height = _ref.height,
        bounds = _ref.bounds,
        _ref$minExtent = _ref.minExtent,
        minExtent = _ref$minExtent === void 0 ? 0 : _ref$minExtent,
        _ref$maxZoom = _ref.maxZoom,
        maxZoom = _ref$maxZoom === void 0 ? 24 : _ref$maxZoom,
        _ref$padding = _ref.padding,
        padding = _ref$padding === void 0 ? 0 : _ref$padding,
        _ref$offset = _ref.offset,
        offset = _ref$offset === void 0 ? [0, 0] : _ref$offset;

    var _bounds = _slicedToArray(bounds, 2),
        _bounds$ = _slicedToArray(_bounds[0], 2),
        west = _bounds$[0],
        south = _bounds$[1],
        _bounds$2 = _slicedToArray(_bounds[1], 2),
        east = _bounds$2[0],
        north = _bounds$2[1];

    if (Number.isFinite(padding)) {
      var p = padding;
      padding = {
        top: p,
        bottom: p,
        left: p,
        right: p
      };
    } else {
      assert(Number.isFinite(padding.top) && Number.isFinite(padding.bottom) && Number.isFinite(padding.left) && Number.isFinite(padding.right));
    }

    var viewport = new WebMercatorViewport({
      width: width,
      height: height,
      longitude: 0,
      latitude: 0,
      zoom: 0
    });
    var nw = viewport.project([west, north]);
    var se = viewport.project([east, south]);
    var size = [Math.max(Math.abs(se[0] - nw[0]), minExtent), Math.max(Math.abs(se[1] - nw[1]), minExtent)];
    var targetSize = [width - padding.left - padding.right - Math.abs(offset[0]) * 2, height - padding.top - padding.bottom - Math.abs(offset[1]) * 2];
    assert(targetSize[0] > 0 && targetSize[1] > 0);
    var scaleX = targetSize[0] / size[0];
    var scaleY = targetSize[1] / size[1];
    var offsetX = (padding.right - padding.left) / 2 / scaleX;
    var offsetY = (padding.bottom - padding.top) / 2 / scaleY;
    var center = [(se[0] + nw[0]) / 2 + offsetX, (se[1] + nw[1]) / 2 + offsetY];
    var centerLngLat = viewport.unproject(center);
    var zoom = Math.min(maxZoom, viewport.zoom + Math.log2(Math.abs(Math.min(scaleX, scaleY))));
    assert(Number.isFinite(zoom));
    return {
      longitude: centerLngLat[0],
      latitude: centerLngLat[1],
      zoom: zoom
    };
  }

  var WebMercatorViewport = function (_Viewport) {
    _inherits(WebMercatorViewport, _Viewport);

    function WebMercatorViewport() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          width = _ref.width,
          height = _ref.height,
          _ref$latitude = _ref.latitude,
          latitude = _ref$latitude === void 0 ? 0 : _ref$latitude,
          _ref$longitude = _ref.longitude,
          longitude = _ref$longitude === void 0 ? 0 : _ref$longitude,
          _ref$zoom = _ref.zoom,
          zoom = _ref$zoom === void 0 ? 0 : _ref$zoom,
          _ref$pitch = _ref.pitch,
          pitch = _ref$pitch === void 0 ? 0 : _ref$pitch,
          _ref$bearing = _ref.bearing,
          bearing = _ref$bearing === void 0 ? 0 : _ref$bearing,
          _ref$altitude = _ref.altitude,
          altitude = _ref$altitude === void 0 ? 1.5 : _ref$altitude,
          _ref$nearZMultiplier = _ref.nearZMultiplier,
          nearZMultiplier = _ref$nearZMultiplier === void 0 ? 0.02 : _ref$nearZMultiplier,
          _ref$farZMultiplier = _ref.farZMultiplier,
          farZMultiplier = _ref$farZMultiplier === void 0 ? 1.01 : _ref$farZMultiplier;

      _classCallCheck(this, WebMercatorViewport);

      width = width || 1;
      height = height || 1;
      var scale = zoomToScale(zoom);
      altitude = Math.max(0.75, altitude);
      var center = lngLatToWorld([longitude, latitude]);
      center[2] = 0;
      var projectionMatrix = getProjectionMatrix({
        width: width,
        height: height,
        pitch: pitch,
        bearing: bearing,
        altitude: altitude,
        nearZMultiplier: nearZMultiplier,
        farZMultiplier: farZMultiplier
      });
      var viewMatrix = getViewMatrix({
        height: height,
        scale: scale,
        center: center,
        pitch: pitch,
        bearing: bearing,
        altitude: altitude
      });
      _this = _possibleConstructorReturn(this, _getPrototypeOf(WebMercatorViewport).call(this, {
        width: width,
        height: height,
        scale: scale,
        viewMatrix: viewMatrix,
        projectionMatrix: projectionMatrix
      }));
      _this.latitude = latitude;
      _this.longitude = longitude;
      _this.zoom = zoom;
      _this.pitch = pitch;
      _this.bearing = bearing;
      _this.altitude = altitude;
      _this.center = center;
      _this.unitsPerMeter = getDistanceScales(_assertThisInitialized(_this)).unitsPerMeter[2];
      Object.freeze(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(WebMercatorViewport, [{
      key: "projectFlat",
      value: function projectFlat(lngLat) {
        return lngLatToWorld(lngLat);
      }
    }, {
      key: "unprojectFlat",
      value: function unprojectFlat(xy) {
        return worldToLngLat(xy);
      }
    }, {
      key: "getMapCenterByLngLatPosition",
      value: function getMapCenterByLngLatPosition(_ref2) {
        var lngLat = _ref2.lngLat,
            pos = _ref2.pos;
        var fromLocation = pixelsToWorld(pos, this.pixelUnprojectionMatrix);
        var toLocation = lngLatToWorld(lngLat);
        var translate = add([], toLocation, negate([], fromLocation));
        var newCenter = add([], this.center, translate);
        return worldToLngLat(newCenter, this.scale);
      }
    }, {
      key: "getLocationAtPoint",
      value: function getLocationAtPoint(_ref3) {
        var lngLat = _ref3.lngLat,
            pos = _ref3.pos;
        return this.getMapCenterByLngLatPosition({
          lngLat: lngLat,
          pos: pos
        });
      }
    }, {
      key: "fitBounds",
      value: function fitBounds$1(bounds) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var width = this.width,
            height = this.height;

        var _fitBounds2 = fitBounds(Object.assign({
          width: width,
          height: height,
          bounds: bounds
        }, options)),
            longitude = _fitBounds2.longitude,
            latitude = _fitBounds2.latitude,
            zoom = _fitBounds2.zoom;

        return new WebMercatorViewport({
          width: width,
          height: height,
          longitude: longitude,
          latitude: latitude,
          zoom: zoom
        });
      }
    }]);

    return WebMercatorViewport;
  }(Viewport);

  var TILE_SIZE$1 = 512;
  var urlType = {
    type: 'url',
    value: '',
    validate: function validate(value) {
      return typeof value === 'string' || Array.isArray(value) && value.every(function (url) {
        return typeof url === 'string';
      });
    },
    equals: function equals(value1, value2) {
      if (value1 === value2) {
        return true;
      }

      if (!Array.isArray(value1) || !Array.isArray(value2)) {
        return false;
      }

      var len = value1.length;

      if (len !== value2.length) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        if (value1[i] !== value2[i]) {
          return false;
        }
      }

      return true;
    }
  };
  function getURLFromTemplate(template, properties) {
    if (!template || !template.length) {
      return null;
    }

    if (Array.isArray(template)) {
      var index = Math.abs(properties.x + properties.y) % template.length;
      template = template[index];
    }

    return template.replace(/\{ *([\w_-]+) *\}/g, function (_, property) {
      return properties[property];
    });
  }

  function getBoundingBox(viewport) {
    var corners = [viewport.unproject([0, 0]), viewport.unproject([viewport.width, 0]), viewport.unproject([0, viewport.height]), viewport.unproject([viewport.width, viewport.height])];
    return [Math.min(corners[0][0], corners[1][0], corners[2][0], corners[3][0]), Math.min(corners[0][1], corners[1][1], corners[2][1], corners[3][1]), Math.max(corners[0][0], corners[1][0], corners[2][0], corners[3][0]), Math.max(corners[0][1], corners[1][1], corners[2][1], corners[3][1])];
  }

  function getOSMTileIndex(lngLat, scale) {
    var _lngLatToWorld = lngLatToWorld(lngLat),
        _lngLatToWorld2 = _slicedToArray(_lngLatToWorld, 2),
        x = _lngLatToWorld2[0],
        y = _lngLatToWorld2[1];

    x *= scale / TILE_SIZE$1;
    y = (1 - y / TILE_SIZE$1) * scale;
    return [x, y];
  }

  function getTileIndex(_ref, scale) {
    var _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    return [x * scale / TILE_SIZE$1, y * scale / TILE_SIZE$1];
  }

  function getScale(z) {
    var tileSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TILE_SIZE$1;
    return Math.pow(2, z) * TILE_SIZE$1 / tileSize;
  }

  function osmTile2lngLat(x, y, z) {
    var scale = getScale(z);
    var lng = x / scale * 360 - 180;
    var n = Math.PI - 2 * Math.PI * y / scale;
    var lat = 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
    return [lng, lat];
  }

  function tile2XY(x, y, z, tileSize) {
    var scale = getScale(z, tileSize);
    return [x / scale * TILE_SIZE$1, y / scale * TILE_SIZE$1];
  }

  function tileToBoundingBox(viewport, x, y, z) {
    var tileSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : TILE_SIZE$1;

    if (viewport.isGeospatial) {
      var _osmTile2lngLat = osmTile2lngLat(x, y, z),
          _osmTile2lngLat2 = _slicedToArray(_osmTile2lngLat, 2),
          west = _osmTile2lngLat2[0],
          north = _osmTile2lngLat2[1];

      var _osmTile2lngLat3 = osmTile2lngLat(x + 1, y + 1, z),
          _osmTile2lngLat4 = _slicedToArray(_osmTile2lngLat3, 2),
          east = _osmTile2lngLat4[0],
          south = _osmTile2lngLat4[1];

      return {
        west: west,
        north: north,
        east: east,
        south: south
      };
    }

    var _tile2XY = tile2XY(x, y, z, tileSize),
        _tile2XY2 = _slicedToArray(_tile2XY, 2),
        left = _tile2XY2[0],
        top = _tile2XY2[1];

    var _tile2XY3 = tile2XY(x + 1, y + 1, z, tileSize),
        _tile2XY4 = _slicedToArray(_tile2XY3, 2),
        right = _tile2XY4[0],
        bottom = _tile2XY4[1];

    return {
      left: left,
      top: top,
      right: right,
      bottom: bottom
    };
  }

  function getIdentityTileIndices(viewport, z, tileSize) {
    var bbox = getBoundingBox(viewport);
    var scale = getScale(z, tileSize);

    var _getTileIndex = getTileIndex([bbox[0], bbox[1]], scale),
        _getTileIndex2 = _slicedToArray(_getTileIndex, 2),
        minX = _getTileIndex2[0],
        minY = _getTileIndex2[1];

    var _getTileIndex3 = getTileIndex([bbox[2], bbox[3]], scale),
        _getTileIndex4 = _slicedToArray(_getTileIndex3, 2),
        maxX = _getTileIndex4[0],
        maxY = _getTileIndex4[1];

    var indices = [];

    for (var x = Math.floor(minX); x < maxX; x++) {
      for (var y = Math.floor(minY); y < maxY; y++) {
        indices.push({
          x: x,
          y: y,
          z: z
        });
      }
    }

    return indices;
  }

  function getOSMTileIndices(viewport, z) {
    var bbox = getBoundingBox(viewport);
    var scale = getScale(z);

    var _getOSMTileIndex = getOSMTileIndex([bbox[0], bbox[3]], scale),
        _getOSMTileIndex2 = _slicedToArray(_getOSMTileIndex, 2),
        minX = _getOSMTileIndex2[0],
        minY = _getOSMTileIndex2[1];

    var _getOSMTileIndex3 = getOSMTileIndex([bbox[2], bbox[1]], scale),
        _getOSMTileIndex4 = _slicedToArray(_getOSMTileIndex3, 2),
        maxX = _getOSMTileIndex4[0],
        maxY = _getOSMTileIndex4[1];

    var indices = [];
    minX = Math.floor(minX);
    maxX = Math.min(minX + scale, maxX);
    minY = Math.max(0, Math.floor(minY));
    maxY = Math.min(scale, maxY);

    for (var x = minX; x < maxX; x++) {
      for (var y = minY; y < maxY; y++) {
        var normalizedX = x - Math.floor(x / scale) * scale;
        indices.push({
          x: normalizedX,
          y: y,
          z: z
        });
      }
    }

    return indices;
  }

  function getTileIndices(viewport, maxZoom, minZoom) {
    var tileSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : TILE_SIZE$1;
    var z = Math.ceil(viewport.zoom);

    if (Number.isFinite(minZoom) && z < minZoom) {
      return [];
    }

    if (Number.isFinite(maxZoom) && z > maxZoom) {
      z = maxZoom;
    }

    return viewport.isGeospatial ? getOSMTileIndices(viewport, z) : getIdentityTileIndices(viewport, z, tileSize);
  }

  var TILE_STATE_UNKNOWN = 0;
  var TILE_STATE_VISIBLE = 1;
  var TILE_STATE_PLACEHOLDER = 3;
  var TILE_STATE_HIDDEN = 4;
  var TILE_STATE_SELECTED = 5;
  var STRATEGY_NEVER = 'never';
  var STRATEGY_DEFAULT = 'best-available';
  var DEFAULT_CACHE_SCALE = 5;

  var Tileset2D = function () {
    function Tileset2D(opts) {
      var _this = this;

      _classCallCheck(this, Tileset2D);

      this.opts = opts;
      this._getTileData = opts.getTileData;
      this.onTileError = opts.onTileError;

      this.onTileLoad = function (tile) {
        opts.onTileLoad(tile);

        if (_this.opts.maxCacheByteSize) {
          _this._cacheByteSize += tile.byteLength;

          _this._resizeCache();
        }
      };

      this._cache = new Map();
      this._tiles = [];
      this._dirty = false;
      this._cacheByteSize = 0;
      this._viewport = null;
      this._selectedTiles = null;
      this._frameNumber = 0;
      this.setOptions(opts);
    }

    _createClass(Tileset2D, [{
      key: "setOptions",
      value: function setOptions(opts) {
        Object.assign(this.opts, opts);

        if (Number.isFinite(opts.maxZoom)) {
          this._maxZoom = Math.floor(opts.maxZoom);
        }

        if (Number.isFinite(opts.minZoom)) {
          this._minZoom = Math.ceil(opts.minZoom);
        }
      }
    }, {
      key: "update",
      value: function update(viewport) {
        var _this2 = this;

        if (viewport !== this._viewport) {
          this._viewport = viewport;
          var tileIndices = this.getTileIndices({
            viewport: viewport,
            maxZoom: this._maxZoom,
            minZoom: this._minZoom
          });
          this._selectedTiles = tileIndices.map(function (index) {
            return _this2._getTile(index, true);
          });

          if (this._dirty) {
            this._rebuildTree();
          }
        }

        var changed = this.updateTileStates();

        if (this._dirty) {
          this._resizeCache();
        }

        if (changed) {
          this._frameNumber++;
        }

        return this._frameNumber;
      }
    }, {
      key: "getTileIndices",
      value: function getTileIndices$1(_ref) {
        var viewport = _ref.viewport,
            maxZoom = _ref.maxZoom,
            minZoom = _ref.minZoom;
        return getTileIndices(viewport, maxZoom, minZoom, this.opts.tileSize);
      }
    }, {
      key: "getTileMetadata",
      value: function getTileMetadata(_ref2) {
        var x = _ref2.x,
            y = _ref2.y,
            z = _ref2.z;
        return {
          bbox: tileToBoundingBox(this._viewport, x, y, z, this.opts.tileSize)
        };
      }
    }, {
      key: "getParentIndex",
      value: function getParentIndex(tileIndex) {
        tileIndex.x = Math.floor(tileIndex.x / 2);
        tileIndex.y = Math.floor(tileIndex.y / 2);
        tileIndex.z -= 1;
        return tileIndex;
      }
    }, {
      key: "updateTileStates",
      value: function updateTileStates() {
        this._updateTileStates(this.selectedTiles);

        var changed = false;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._cache.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var tile = _step.value;
            var isVisible = Boolean(tile.state & TILE_STATE_VISIBLE);

            if (tile.isVisible !== isVisible) {
              changed = true;
              tile.isVisible = isVisible;
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

        return changed;
      }
    }, {
      key: "_rebuildTree",
      value: function _rebuildTree() {
        var _cache = this._cache;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _cache.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var tile = _step2.value;
            tile.parent = null;
            tile.children.length = 0;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _cache.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _tile = _step3.value;

            var parent = this._getNearestAncestor(_tile.x, _tile.y, _tile.z);

            _tile.parent = parent;

            if (parent) {
              parent.children.push(_tile);
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }, {
      key: "_updateTileStates",
      value: function _updateTileStates(selectedTiles) {
        var _cache = this._cache;
        var refinementStrategy = this.opts.refinementStrategy || STRATEGY_DEFAULT;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = _cache.values()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var tile = _step4.value;
            tile.state = TILE_STATE_UNKNOWN;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = selectedTiles[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _tile2 = _step5.value;
            _tile2.state = TILE_STATE_SELECTED;
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        if (refinementStrategy === STRATEGY_NEVER) {
          return;
        }

        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = selectedTiles[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _tile3 = _step6.value;
            getPlaceholderInAncestors(_tile3, refinementStrategy);
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
              _iterator6["return"]();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = selectedTiles[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _tile4 = _step7.value;

            if (needsPlaceholder(_tile4)) {
              getPlaceholderInChildren(_tile4);
            }
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
              _iterator7["return"]();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }
      }
    }, {
      key: "_resizeCache",
      value: function _resizeCache() {
        var _cache = this._cache,
            opts = this.opts;
        var maxCacheSize = opts.maxCacheSize || (opts.maxCacheByteSize ? Infinity : DEFAULT_CACHE_SCALE * this.selectedTiles.length);
        var maxCacheByteSize = opts.maxCacheByteSize || Infinity;
        var overflown = _cache.size > maxCacheSize || this._cacheByteSize > maxCacheByteSize;

        if (overflown) {
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = _cache[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var _step8$value = _slicedToArray(_step8.value, 2),
                  tileId = _step8$value[0],
                  tile = _step8$value[1];

              if (!tile.isVisible) {
                this._cacheByteSize -= opts.maxCacheByteSize ? tile.byteLength : 0;

                _cache["delete"](tileId);
              }

              if (_cache.size <= maxCacheSize && this._cacheByteSize <= maxCacheByteSize) {
                break;
              }
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                _iterator8["return"]();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }

          this._rebuildTree();

          this._dirty = true;
        }

        if (this._dirty) {
          this._tiles = Array.from(this._cache.values()).sort(function (t1, t2) {
            return t1.z - t2.z;
          });
          this._dirty = false;
        }
      }
    }, {
      key: "_getTile",
      value: function _getTile(_ref3, create) {
        var x = _ref3.x,
            y = _ref3.y,
            z = _ref3.z;
        var tileId = "".concat(x, ",").concat(y, ",").concat(z);

        var tile = this._cache.get(tileId);

        if (!tile && create) {
          tile = new Tile2DHeader({
            x: x,
            y: y,
            z: z,
            onTileLoad: this.onTileLoad,
            onTileError: this.onTileError
          });
          Object.assign(tile, this.getTileMetadata(tile));
          tile.loadData(this._getTileData);

          this._cache.set(tileId, tile);

          this._dirty = true;
        }

        return tile;
      }
    }, {
      key: "_getNearestAncestor",
      value: function _getNearestAncestor(x, y, z) {
        var _this$_minZoom = this._minZoom,
            _minZoom = _this$_minZoom === void 0 ? 0 : _this$_minZoom;

        var index = {
          x: x,
          y: y,
          z: z
        };

        while (index.z > _minZoom) {
          index = this.getParentIndex(index);

          var parent = this._getTile(index);

          if (parent) {
            return parent;
          }
        }

        return null;
      }
    }, {
      key: "tiles",
      get: function get() {
        return this._tiles;
      }
    }, {
      key: "selectedTiles",
      get: function get() {
        return this._selectedTiles;
      }
    }, {
      key: "isLoaded",
      get: function get() {
        return this._selectedTiles.every(function (tile) {
          return tile.isLoaded;
        });
      }
    }]);

    return Tileset2D;
  }();

  function needsPlaceholder(tile) {
    var t = tile;

    while (t) {
      if (t.state & TILE_STATE_VISIBLE === 0) {
        return true;
      }

      if (t.isLoaded) {
        return false;
      }

      t = t.parent;
    }

    return true;
  }

  function getPlaceholderInAncestors(tile, refinementStrategy) {
    var parent;
    var state = TILE_STATE_PLACEHOLDER;

    while (parent = tile.parent) {
      if (tile.isLoaded) {
        state = TILE_STATE_HIDDEN;

        if (refinementStrategy === STRATEGY_DEFAULT) {
          return;
        }
      }

      parent.state = Math.max(parent.state, state);
      tile = parent;
    }
  }

  function getPlaceholderInChildren(tile) {
    var _iteratorNormalCompletion9 = true;
    var _didIteratorError9 = false;
    var _iteratorError9 = undefined;

    try {
      for (var _iterator9 = tile.children[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
        var child = _step9.value;
        child.state = Math.max(child.state, TILE_STATE_PLACEHOLDER);

        if (!child.isLoaded) {
          getPlaceholderInChildren(child);
        }
      }
    } catch (err) {
      _didIteratorError9 = true;
      _iteratorError9 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
          _iterator9["return"]();
        }
      } finally {
        if (_didIteratorError9) {
          throw _iteratorError9;
        }
      }
    }
  }

  var defaultProps = {
    data: [],
    dataComparator: urlType.equals,
    renderSubLayers: {
      type: 'function',
      value: function value(props) {
        return new layers.GeoJsonLayer(props);
      },
      compare: false
    },
    getTileData: {
      type: 'function',
      optional: true,
      value: null,
      compare: false
    },
    onViewportLoad: {
      type: 'function',
      optional: true,
      value: null,
      compare: false
    },
    onTileLoad: {
      type: 'function',
      value: function value(tile) {},
      compare: false
    },
    onTileError: {
      type: 'function',
      value: function value(err) {
        return console.error(err);
      },
      compare: false
    },
    tileSize: 512,
    maxZoom: null,
    minZoom: 0,
    maxCacheSize: null,
    maxCacheByteSize: null,
    refinementStrategy: STRATEGY_DEFAULT
  };

  var TileLayer = function (_CompositeLayer) {
    _inherits(TileLayer, _CompositeLayer);

    function TileLayer() {
      _classCallCheck(this, TileLayer);

      return _possibleConstructorReturn(this, _getPrototypeOf(TileLayer).apply(this, arguments));
    }

    _createClass(TileLayer, [{
      key: "initializeState",
      value: function initializeState() {
        this.state = {
          tiles: [],
          isLoaded: false
        };
      }
    }, {
      key: "shouldUpdateState",
      value: function shouldUpdateState(_ref) {
        var changeFlags = _ref.changeFlags;
        return changeFlags.somethingChanged;
      }
    }, {
      key: "updateState",
      value: function updateState(_ref2) {
        var props = _ref2.props,
            oldProps = _ref2.oldProps,
            context = _ref2.context,
            changeFlags = _ref2.changeFlags;
        var tileset = this.state.tileset;
        var createTileCache = !tileset || changeFlags.dataChanged || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getTileData);

        if (createTileCache) {
          var maxZoom = props.maxZoom,
              minZoom = props.minZoom,
              tileSize = props.tileSize,
              maxCacheSize = props.maxCacheSize,
              maxCacheByteSize = props.maxCacheByteSize,
              refinementStrategy = props.refinementStrategy;
          tileset = new Tileset2D({
            getTileData: this.getTileData.bind(this),
            maxCacheSize: maxCacheSize,
            maxCacheByteSize: maxCacheByteSize,
            maxZoom: maxZoom,
            minZoom: minZoom,
            tileSize: tileSize,
            refinementStrategy: refinementStrategy,
            onTileLoad: this._onTileLoad.bind(this),
            onTileError: this._onTileError.bind(this)
          });
          this.setState({
            tileset: tileset
          });
        } else if (changeFlags.propsChanged) {
          tileset.setOptions(props);
          this.state.tileset.tiles.forEach(function (tile) {
            tile.layers = null;
          });
        }

        if (createTileCache || changeFlags.viewportChanged) {
          this._updateTileset();
        }
      }
    }, {
      key: "_updateTileset",
      value: function _updateTileset() {
        var tileset = this.state.tileset;
        var onViewportLoad = this.props.onViewportLoad;
        var frameNumber = tileset.update(this.context.viewport);
        var isLoaded = tileset.isLoaded;
        var loadingStateChanged = this.state.isLoaded !== isLoaded;
        var tilesetChanged = this.state.frameNumber !== frameNumber;

        if (isLoaded && onViewportLoad && (loadingStateChanged || tilesetChanged)) {
          onViewportLoad(tileset.selectedTiles.map(function (tile) {
            return tile.data;
          }));
        }

        if (tilesetChanged) {
          this.setState({
            frameNumber: frameNumber
          });
        }

        this.state.isLoaded = isLoaded;
      }
    }, {
      key: "_onTileLoad",
      value: function _onTileLoad(tile) {
        var layer = this.getCurrentLayer();
        layer.props.onTileLoad(tile);

        layer._updateTileset();
      }
    }, {
      key: "_onTileError",
      value: function _onTileError(error) {
        var layer = this.getCurrentLayer();
        layer.props.onTileError(error);

        layer._updateTileset();
      }
    }, {
      key: "getTileData",
      value: function getTileData(tile) {
        var _this$props = this.props,
            getTileData = _this$props.getTileData,
            fetch = _this$props.fetch,
            data = _this$props.data;
        tile.url = getURLFromTemplate(data, tile);

        if (getTileData) {
          return getTileData(tile);
        }

        if (tile.url) {
          return fetch(tile.url, {
            layer: this
          });
        }

        return null;
      }
    }, {
      key: "renderSubLayers",
      value: function renderSubLayers(props) {
        return this.props.renderSubLayers(props);
      }
    }, {
      key: "getPickingInfo",
      value: function getPickingInfo(_ref3) {
        var info = _ref3.info,
            sourceLayer = _ref3.sourceLayer;
        info.sourceLayer = sourceLayer;
        info.tile = sourceLayer.props.tile;
        return info;
      }
    }, {
      key: "renderLayers",
      value: function renderLayers() {
        var _this = this;

        var visible = this.props.visible;
        return this.state.tileset.tiles.map(function (tile) {
          var isVisible = visible && tile.isVisible;

          if (!tile.layers) {
            var layers = _this.renderSubLayers(Object.assign({}, _this.props, {
              id: "".concat(_this.id, "-").concat(tile.x, "-").concat(tile.y, "-").concat(tile.z),
              data: tile.data,
              visible: isVisible,
              _offset: 0,
              tile: tile
            }));

            tile.layers = core._flatten(layers, Boolean);
          } else if (tile.layers[0] && tile.layers[0].props.visible !== isVisible) {
            tile.layers = tile.layers.map(function (layer) {
              return layer.clone({
                visible: isVisible
              });
            });
          }

          return tile.layers;
        });
      }
    }, {
      key: "isLoaded",
      get: function get() {
        var tileset = this.state.tileset;
        return tileset.selectedTiles.every(function (tile) {
          return tile.layers && tile.layers.every(function (layer) {
            return layer.isLoaded;
          });
        });
      }
    }]);

    return TileLayer;
  }(core.CompositeLayer);
  TileLayer.layerName = 'TileLayer';
  TileLayer.defaultProps = defaultProps;

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] =
      GeneratorFunction.displayName = "GeneratorFunction";

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        prototype[method] = function(arg) {
          return this._invoke(method, arg);
        };
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    Gp[toStringTagSymbol] = "Generator";

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  var regenerator = runtime_1;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  class EEApi {
    constructor() {
      this.ee = ee;
    }

    async initialize({clientId, token}) {
      if (token) {
        this.setToken(token);
      } else {
        await this.authenticateViaOAuth(clientId);
      }
      await this._initialize();
    }

    // Authenticate using an OAuth pop-up.
    async authenticateViaOAuth(clientId, extraScopes = null) {
      return await new Promise((resolve, reject) => {
        ee.data.authenticateViaOauth(
          clientId,
          value => resolve(value),
          error => reject(error),
          extraScopes,
          value => {
            // called if automatic behind-the-scenes authentication fails
            // console.debug('EE authentication opening popup', value);
            ee.data.authenticateViaPopup(resolve, reject);
          }
        );
      });
    }

    // Set short-lived Access Token directly
    setToken(token) {
      if (token) {
        ee.apiclient.setAuthToken('', 'Bearer', token, 3600, [], undefined, false);
      }
    }

    // Initialize client library
    async _initialize(baseurl = null, tileurl = null) {
      // TODO initialize seems to need ee to be set on global window object
      // We may be importing in non-standard way...?
      /* global window */
      window.ee = ee;

      return await new Promise((resolve, reject) => {
        ee.initialize(baseurl, tileurl, value => resolve(value), error => reject(error));
      });
    }
  }

  function assert$1(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }

  var globals = {
    self: typeof self !== 'undefined' && self,
    window: typeof window !== 'undefined' && window,
    global: typeof global !== 'undefined' && global,
    document: typeof document !== 'undefined' && document
  };
  var global_ = globals.global || globals.self || globals.window;
  var isBrowser = (typeof process === "undefined" ? "undefined" : _typeof(process)) !== 'object' || String(process) !== '[object process]' || process.browser;
  var matches = typeof process !== 'undefined' && process.version && process.version.match(/v([0-9]*)/);
  var nodeVersion = matches && parseFloat(matches[1]) || 0;

  var _parseImageNode = global_._parseImageNode;
  var IMAGE_SUPPORTED = typeof Image !== 'undefined';
  var IMAGE_BITMAP_SUPPORTED = typeof ImageBitmap !== 'undefined';
  var NODE_IMAGE_SUPPORTED = Boolean(_parseImageNode);
  function isImageTypeSupported(type) {
    switch (type) {
      case 'auto':
        return IMAGE_BITMAP_SUPPORTED || IMAGE_SUPPORTED || NODE_IMAGE_SUPPORTED;

      case 'imagebitmap':
        return IMAGE_BITMAP_SUPPORTED;

      case 'html':
      case 'image':
        return IMAGE_SUPPORTED;

      case 'ndarray':
      case 'data':
        return isBrowser ? true : NODE_IMAGE_SUPPORTED;

      default:
        throw new Error("@loaders.gl/images: image ".concat(type, " not supported in this environment"));
    }
  }
  function getDefaultImageType() {
    if (isImageTypeSupported('image')) {
      return 'image';
    }

    if (isImageTypeSupported('imagebitmap')) {
      return 'imagebitmap';
    }

    if (isImageTypeSupported('data')) {
      return 'data';
    }

    throw new Error("Install '@loaders.gl/polyfills' to parse images under Node.js");
  }

  function getImageType(image) {
    var format = getImageTypeOrNull(image);

    if (!format) {
      throw new Error('Not an image');
    }

    return format;
  }
  function getImageData(image) {
    switch (getImageType(image)) {
      case 'data':
        return image;

      case 'image':
      case 'imagebitmap':
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);
        var imageData = context.getImageData(0, 0, image.width, image.height);
        return imageData;

      default:
        return assert$1(false);
    }
  }

  function getImageTypeOrNull(image) {
    if (typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap) {
      return 'imagebitmap';
    }

    if (typeof Image !== 'undefined' && image instanceof Image) {
      return 'image';
    }

    if (image && _typeof(image) === 'object' && image.data && image.width && image.height) {
      return 'data';
    }

    return null;
  }

  var SVG_DATA_URL_PATTERN = /^data:image\/svg\+xml/;
  var SVG_URL_PATTERN = /\.svg((\?|#).*)?$/;
  function getBlob(arrayBuffer, url) {
    if (isSVG(url)) {
      console.warn('SVG cannot be parsed to imagebitmap');
      return new Blob([new Uint8Array(arrayBuffer)], {
        type: 'image/svg+xml'
      });
    }

    return new Blob([new Uint8Array(arrayBuffer)]);
  }
  function getBlobOrDataUrl(arrayBuffer, url) {
    if (isSVG(url)) {
      var textDecoder = new TextDecoder();
      var xmlText = textDecoder.decode(arrayBuffer);
      var src = "data:image/svg+xml;base64,".concat(btoa(xmlText));
      return src;
    }

    return getBlob(arrayBuffer, url);
  }

  function isSVG(url) {
    return url && (SVG_DATA_URL_PATTERN.test(url) || SVG_URL_PATTERN.test(url));
  }

  function parseToImage(_x, _x2, _x3) {
    return _parseToImage.apply(this, arguments);
  }

  function _parseToImage() {
    _parseToImage = _asyncToGenerator(regenerator.mark(function _callee(arrayBuffer, options, url) {
      var blobOrDataUrl, URL, objectUrl;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              blobOrDataUrl = getBlobOrDataUrl(arrayBuffer, url);
              URL = self.URL || self.webkitURL;
              objectUrl = typeof blobOrDataUrl !== 'string' && URL.createObjectURL(blobOrDataUrl);
              _context.prev = 3;
              _context.next = 6;
              return loadToImage(objectUrl || blobOrDataUrl, options);

            case 6:
              return _context.abrupt("return", _context.sent);

            case 7:
              _context.prev = 7;

              if (objectUrl) {
                URL.revokeObjectURL(objectUrl);
              }

              return _context.finish(7);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3,, 7, 10]]);
    }));
    return _parseToImage.apply(this, arguments);
  }

  function loadToImage(_x4, _x5) {
    return _loadToImage.apply(this, arguments);
  }

  function _loadToImage() {
    _loadToImage = _asyncToGenerator(regenerator.mark(function _callee2(url, options) {
      var image;
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              image = new Image();
              image.src = url;

              if (!(options.image && options.image.decode && image.decode)) {
                _context2.next = 6;
                break;
              }

              _context2.next = 5;
              return image.decode();

            case 5:
              return _context2.abrupt("return", image);

            case 6:
              _context2.next = 8;
              return new Promise(function (resolve, reject) {
                try {
                  image.onload = function () {
                    return resolve(image);
                  };

                  image.onerror = function (err) {
                    return reject(new Error("Could not load image ".concat(url, ": ").concat(err)));
                  };
                } catch (error) {
                  reject(error);
                }
              });

            case 8:
              return _context2.abrupt("return", _context2.sent);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _loadToImage.apply(this, arguments);
  }

  var imagebitmapOptionsSupported = true;
  function parseToImageBitmap(_x, _x2, _x3) {
    return _parseToImageBitmap.apply(this, arguments);
  }

  function _parseToImageBitmap() {
    _parseToImageBitmap = _asyncToGenerator(regenerator.mark(function _callee(arrayBuffer, options, url) {
      var blob, imagebitmapOptions;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              blob = getBlob(arrayBuffer, url);
              imagebitmapOptions = options && options.imagebitmap;

              if (isEmptyObject(imagebitmapOptions) || !imagebitmapOptionsSupported) {
                imagebitmapOptions = null;
              }

              if (!imagebitmapOptions) {
                _context.next = 14;
                break;
              }

              _context.prev = 4;
              _context.next = 7;
              return createImageBitmap(blob, imagebitmapOptions);

            case 7:
              return _context.abrupt("return", _context.sent);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](4);
              console.warn(_context.t0);
              imagebitmapOptionsSupported = false;

            case 14:
              _context.next = 16;
              return createImageBitmap(blob);

            case 16:
              return _context.abrupt("return", _context.sent);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 10]]);
    }));
    return _parseToImageBitmap.apply(this, arguments);
  }

  var EMPTY_OBJECT = {};

  function isEmptyObject(object) {
    for (var key in object || EMPTY_OBJECT) {
      return true;
    }

    return false;
  }

  var BIG_ENDIAN = false;
  var LITTLE_ENDIAN = true;
  var mimeTypeMap = new Map([['image/png', {
    test: isPng,
    getSize: getPngSize
  }], ['image/jpeg', {
    test: isJpeg,
    getSize: getJpegSize
  }], ['image/gif', {
    test: isGif,
    getSize: getGifSize
  }], ['image/bmp', {
    test: isBmp,
    getSize: getBmpSize
  }]]);
  function isPng(dataView) {
    return dataView.byteLength >= 24 && dataView.getUint32(0, BIG_ENDIAN) === 0x89504e47;
  }

  function getPngSize(dataView) {
    return {
      width: dataView.getUint32(16, BIG_ENDIAN),
      height: dataView.getUint32(20, BIG_ENDIAN)
    };
  }

  function isGif(dataView) {
    return dataView.byteLength >= 10 && dataView.getUint32(0, BIG_ENDIAN) === 0x47494638;
  }

  function getGifSize(dataView) {
    return {
      width: dataView.getUint16(6, LITTLE_ENDIAN),
      height: dataView.getUint16(8, LITTLE_ENDIAN)
    };
  }

  function isBmp(dataView) {
    return dataView.byteLength >= 14 && dataView.getUint16(0, BIG_ENDIAN) === 0x424d && dataView.getUint32(2, LITTLE_ENDIAN) === dataView.byteLength;
  }

  function getBmpSize(dataView) {
    return {
      width: dataView.getUint32(18, LITTLE_ENDIAN),
      height: dataView.getUint32(22, LITTLE_ENDIAN)
    };
  }

  function isJpeg(dataView) {
    return dataView.byteLength >= 3 && dataView.getUint16(0, BIG_ENDIAN) === 0xffd8 && dataView.getUint8(2, BIG_ENDIAN) === 0xff;
  }

  function getJpegSize(dataView) {
    if (dataView.byteLength < 2 || dataView.getUint16(0, BIG_ENDIAN) !== 0xffd8) {
      return null;
    }

    var _getJpegMarkers = getJpegMarkers(),
        tableMarkers = _getJpegMarkers.tableMarkers,
        sofMarkers = _getJpegMarkers.sofMarkers;

    var i = 2;

    while (i < dataView.byteLength) {
      var marker = dataView.getUint16(i, BIG_ENDIAN);

      if (sofMarkers.has(marker)) {
        return {
          height: dataView.getUint16(i + 5, BIG_ENDIAN),
          width: dataView.getUint16(i + 7, BIG_ENDIAN)
        };
      }

      if (!tableMarkers.has(marker)) {
        return null;
      }

      i += 2;
      i += dataView.getUint16(i, BIG_ENDIAN);
    }

    return null;
  }

  function getJpegMarkers() {
    var tableMarkers = new Set([0xffdb, 0xffc4, 0xffcc, 0xffdd, 0xfffe]);

    for (var i = 0xffe0; i < 0xfff0; ++i) {
      tableMarkers.add(i);
    }

    var sofMarkers = new Set([0xffc0, 0xffc1, 0xffc2, 0xffc3, 0xffc5, 0xffc6, 0xffc7, 0xffc9, 0xffca, 0xffcb, 0xffcd, 0xffce, 0xffcf, 0xffde]);
    return {
      tableMarkers: tableMarkers,
      sofMarkers: sofMarkers
    };
  }

  var ERR_INVALID_MIME_TYPE = "Invalid MIME type. Supported MIME types are: ".concat(Array.from(mimeTypeMap.keys()).join(', '));
  function getBinaryImageMIMEType(arrayBuffer) {
    var dataView = toDataView(arrayBuffer);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = mimeTypeMap.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            mimeType = _step$value[0],
            test = _step$value[1].test;

        if (test(dataView)) {
          return mimeType;
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

    return null;
  }

  function toDataView(data) {
    data = data.buffer || data;

    if (data instanceof ArrayBuffer) {
      return new DataView(data);
    }

    if (ArrayBuffer.isView(data)) {
      return new DataView(data.buffer);
    }

    throw new Error('toDataView');
  }

  function parseToNodeImage(arrayBuffer, options) {
    var mimeType = getBinaryImageMIMEType(arrayBuffer);
    var _parseImageNode = global_._parseImageNode;
    assert$1(_parseImageNode);
    return _parseImageNode(arrayBuffer, mimeType, options);
  }

  function parseImage(_x, _x2, _x3) {
    return _parseImage.apply(this, arguments);
  }

  function _parseImage() {
    _parseImage = _asyncToGenerator(regenerator.mark(function _callee(arrayBuffer, options, context) {
      var imageOptions, imageType, _ref, url, loadType, image;

      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = options || {};
              imageOptions = options.image || {};
              imageType = imageOptions.type || 'auto';
              _ref = context || {}, url = _ref.url;
              loadType = getLoadableImageType(imageType);
              _context.t0 = loadType;
              _context.next = _context.t0 === 'imagebitmap' ? 8 : _context.t0 === 'image' ? 12 : _context.t0 === 'data' ? 16 : 20;
              break;

            case 8:
              _context.next = 10;
              return parseToImageBitmap(arrayBuffer, options, url);

            case 10:
              image = _context.sent;
              return _context.abrupt("break", 21);

            case 12:
              _context.next = 14;
              return parseToImage(arrayBuffer, options, url);

            case 14:
              image = _context.sent;
              return _context.abrupt("break", 21);

            case 16:
              _context.next = 18;
              return parseToNodeImage(arrayBuffer, options);

            case 18:
              image = _context.sent;
              return _context.abrupt("break", 21);

            case 20:
              assert$1(false);

            case 21:
              if (imageType === 'data') {
                image = getImageData(image);
              }

              return _context.abrupt("return", image);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _parseImage.apply(this, arguments);
  }

  function getLoadableImageType(type) {
    switch (type) {
      case 'auto':
      case 'data':
        return getDefaultImageType();

      default:
        isImageTypeSupported(type);
        return type;
    }
  }

  var VERSION =  "2.1.4" ;
  var EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp', 'ico', 'svg'];
  var MIME_TYPES = ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'image/bmp', 'image/vndmicrosofticon', 'image/svg+xml'];
  var ImageLoader = {
    name: 'Images',
    version: VERSION,
    mimeTypes: MIME_TYPES,
    extensions: EXTENSIONS,
    parse: parseImage,
    test: function test(arrayBuffer) {
      var dataView = new DataView(arrayBuffer);
      return isJpeg(dataView) || isBmp(dataView) || isGif(dataView) || isPng(dataView);
    },
    options: {
      image: {
        format: 'auto',
        decode: true
      }
    }
  };

  // From https://github.com/visgl/deck.gl/blob/c66e3e5bca63b6e214c27259025947dcfa7e359a/modules/core/src/utils/deep-equal.js
  // Partial deep equal (only recursive on arrays)
  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    for (const key in a) {
      const aValue = a[key];
      const bValue = b[key];
      const equals =
        aValue === bValue ||
        (Array.isArray(aValue) && Array.isArray(bValue) && deepEqual(aValue, bValue));
      if (!equals) {
        return false;
      }
    }
    return true;
  }

  // Promisify eeObject methods
  function promisifyEEMethod(eeObject, method, ...args) {
    return new Promise((resolve, reject) =>
      eeObject[method](...args, (value, error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(value);
      })
    );
  }

  /* global createImageBitmap */

  const eeApi = new EEApi();
  // Global access token, to allow single EE API initialization if using multiple
  // layers
  let accessToken;

  const defaultProps$1 = {
    ...TileLayer.defaultProps,
    // data prop is unused
    data: {type: 'object', value: null},
    token: {type: 'string', value: null},
    eeObject: {type: 'object', value: null},
    visParams: {type: 'object', value: null, equal: deepEqual},
    // Force animation; animation is on by default when ImageCollection passed
    animate: false,
    // Frames per second
    animationSpeed: 12,
    refinementStrategy: 'no-overlap'
  };

  class EarthEngineLayer extends core.CompositeLayer {
    initializeState() {
      this.state = {};
    }

    _animate() {
      // unit corresponds to the timestamp in source data
      const {nFrames} = this.state;
      if (!nFrames) {
        return;
      }

      // unit time per second
      const {animationSpeed} = this.props;
      const timestamp = Date.now() / 1000;
      const loopTime = nFrames / animationSpeed;

      this.setState({
        frame: Math.floor(((timestamp % loopTime) / loopTime) * nFrames)
      });
    }

    async updateState({props, oldProps, changeFlags}) {
      await this._updateToken(props, oldProps, changeFlags);
      this._updateEEObject(props, oldProps, changeFlags);
      await this._updateEEVisParams(props, oldProps, changeFlags);
      this._animate();
    }

    async _updateToken(props, oldProps, changeFlags) {
      if (!props.token || props.token === accessToken) {
        return;
      }

      const {token} = props;
      await eeApi.initialize({token});
      accessToken = token;
    }

    _updateEEObject(props, oldProps, changeFlags) {
      if (!changeFlags.dataChanged) {
        return;
      }

      let eeObject;
      // If a string, assume a JSON-serialized EE object.
      if (typeof props.eeObject === 'string') {
        eeObject = ee.Deserializer.fromJSON(props.eeObject);
      } else {
        eeObject = props.eeObject;
      }

      if (props.animate) {
        // Force to be ee.ImageCollection. Sometimes deserializes as
        // FeatureCollection
        eeObject = ee.ImageCollection(eeObject);
      }

      if (Array.isArray(props.eeObject) && props.eeObject.length === 0) {
        eeObject = null;
      }

      this.setState({eeObject});
    }

    async _updateEEVisParams(props, oldProps, changeFlags) {
      if (props.visParams === oldProps.visParams && !changeFlags.dataChanged) {
        return;
      }

      const {eeObject} = this.state;
      if (!eeObject) {
        return;
      }

      if (!eeObject.getMap) {
        throw new Error('eeObject must have a getMap() method');
      }

      let renderMethod;
      if (props.animate) {
        renderMethod = 'filmstrip';
        if (!eeObject.getFilmstripThumbURL) {
          throw new Error('eeObject must have a getFilmstripThumbURL method to animate.');
        }
      } else {
        renderMethod = 'imageTiles';
      }

      // Evaluate map
      // Done for all eeObjects, including ImageCollection, to get a stable
      // identifier
      const {mapid, urlFormat} = await promisifyEEMethod(eeObject, 'getMap', props.visParams);

      this.setState({mapid, urlFormat, renderMethod});
    }

    getTileData(options) {
      const {renderMethod} = this.state;
      if (renderMethod === 'filmstrip') {
        return this.getFilmstripTileData(options);
      }

      return this.getImageTileData(options);
    }

    async getImageTileData({x, y, z}) {
      const {urlFormat} = this.state;
      if (!urlFormat) {
        return null;
      }

      const imageUrl = urlFormat
        .replace('{x}', x)
        .replace('{y}', y)
        .replace('{z}', z);

      const image = await core$1.load(imageUrl, ImageLoader);
      // Return Array for compatible API with getFilmstripTileData
      return Promise.all([image]);
    }

    async getFilmstripTileData({bbox}) {
      const {eeObject} = this.state;
      const {visParams} = this.props;
      const {west, north, east, south} = bbox;
      const TILE_SIZE = 256;

      // Set geodesic=false to prevent horizontal lines from projection issues
      const region = ee.Geometry.Rectangle([west, south, east, north], 'EPSG:4326', false);
      const filmArgs = {
        ...visParams,
        dimensions: [TILE_SIZE, TILE_SIZE],
        region,
        crs: 'EPSG:3857'
      };
      const imageUrl = await promisifyEEMethod(eeObject, 'getFilmstripThumbURL', filmArgs);

      const imageOptions = {image: {type: 'imagebitmap'}};
      const image = await core$1.load(imageUrl, ImageLoader, imageOptions);
      const nFrames = image.height / TILE_SIZE;

      const slices = [];
      for (let i = 0; i < nFrames; i++) {
        const imageBounds = [0, i * TILE_SIZE, TILE_SIZE, TILE_SIZE];
        slices.push(createImageBitmap(image, ...imageBounds));
      }

      this.setState({nFrames});
      return Promise.all(slices);
    }

    renderLayers() {
      const {mapid, frame = 0} = this.state;
      const {
        refinementStrategy,
        onViewportLoad,
        onTileLoad,
        onTileError,
        maxZoom,
        minZoom,
        maxCacheSize,
        maxCacheByteSize
      } = this.props;

      return (
        mapid &&
        new TileLayer(
          this.getSubLayerProps({
            id: mapid
          }),
          {
            refinementStrategy,
            onViewportLoad,
            onTileLoad,
            onTileError,
            maxZoom,
            minZoom,
            maxCacheSize,
            maxCacheByteSize,
            frame,

            getTileData: options => this.getTileData(options),

            renderSubLayers(props) {
              const {data, tile} = props;
              const {west, south, east, north} = tile.bbox;
              const bounds = [west, south, east, north];

              if (!data) {
                return null;
              }

              let image;
              if (Array.isArray(data)) {
                image = data[frame];
              } else if (data) {
                image = data.then(result => result && result[frame]);
              }

              return image && new layers.BitmapLayer({...props, image, bounds});
            }
          }
        )
      );
    }
  }

  EarthEngineLayer.layerName = 'EarthEngineLayer';
  EarthEngineLayer.defaultProps = defaultProps$1;

  /* global window, global */
  const EarthEngineLayerLibrary = {
    EarthEngineLayer
  };

  const _global = typeof window === 'undefined' ? global : window;
  _global.EarthEngineLayerLibrary = EarthEngineLayerLibrary;

  return EarthEngineLayerLibrary;

}(deck, deck, loaders, ee));

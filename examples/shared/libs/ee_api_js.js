(function() {
  let k;
  const aa = function(a) {
    let b = 0;
    return function() {
      return b < a.length ? {done: !1, value: a[b++]} : {done: !0};
    };
  };
  const l = function(a) {
    const b = typeof Symbol !== 'undefined' && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {next: aa(a)};
  };
  const ba = function(a) {
    if (!(a instanceof Array)) {
      a = l(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  };
  const ca =
    typeof Object.create === 'function'
      ? Object.create
      : function(a) {
          const b = function() {};
          b.prototype = a;
          return new b();
        };
  let da;
  if (typeof Object.setPrototypeOf === 'function') da = Object.setPrototypeOf;
  else {
    let ea;
    a: {
      const fa = {bi: !0};
      const ha = {};
      try {
        ha.__proto__ = fa;
        ea = ha.bi;
        break a;
      } catch (a) {}
      ea = !1;
    }
    da = ea
      ? function(a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(`${a} is not extensible`);
          return a;
        }
      : null;
  }
  const ia = da;
  const p = function(a, b) {
    a.prototype = ca(b.prototype);
    a.prototype.constructor = a;
    if (ia) ia(a, b);
    else
      for (const c in b)
        if (c != 'prototype')
          if (Object.defineProperties) {
            const d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.F = b.prototype;
  };
  const r =
    typeof window !== 'undefined' && window === this
      ? this
      : typeof global !== 'undefined' && global != null
        ? global
        : this;
  const ja =
    typeof Object.defineProperties === 'function'
      ? Object.defineProperty
      : function(a, b, c) {
          a != Array.prototype && a != Object.prototype && (a[b] = c.value);
        };
  const ka = function(a, b) {
    if (b) {
      let c = r;
      a = a.split('.');
      for (var d = 0; d < a.length - 1; d++) {
        const e = a[d];
        e in c || (c[e] = {});
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && b != null && ja(c, a, {configurable: !0, writable: !0, value: b});
    }
  };
  ka('Array.prototype.find', function(a) {
    return a
      ? a
      : function(b, c) {
          a: {
            let d = this;
            d instanceof String && (d = String(d));
            for (let e = d.length, f = 0; f < e; f++) {
              const g = d[f];
              if (b.call(c, g, f, d)) {
                b = g;
                break a;
              }
            }
            b = void 0;
          }
          return b;
        };
  });
  const la = function(a, b, c) {
    if (a == null)
      throw new TypeError(
        `The 'this' value for String.prototype.${c} must not be null or undefined`
      );
    if (b instanceof RegExp)
      throw new TypeError(
        `First argument to String.prototype.${c} must not be a regular expression`
      );
    return `${a}`;
  };
  ka('String.prototype.endsWith', function(a) {
    return a
      ? a
      : function(b, c) {
          const d = la(this, b, 'endsWith');
          b = String(b);
          void 0 === c && (c = d.length);
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var e = b.length; e > 0 && c > 0; ) if (d[--c] != b[--e]) return !1;
          return e <= 0;
        };
  });
  ka('String.prototype.startsWith', function(a) {
    return a
      ? a
      : function(b, c) {
          const d = la(this, b, 'startsWith');
          b = String(b);
          const e = d.length;
          const f = b.length;
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
          return g >= f;
        };
  });
  ka('String.prototype.repeat', function(a) {
    return a
      ? a
      : function(b) {
          let c = la(this, null, 'repeat');
          if (b < 0 || b > 1342177279) throw new RangeError('Invalid count value');
          b |= 0;
          for (var d = ''; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
          return d;
        };
  });
  var ma = function() {
    ma = function() {};
    r.Symbol || (r.Symbol = na);
  };
  const oa = function(a, b) {
    this.Nh = a;
    ja(this, 'description', {configurable: !0, writable: !0, value: b});
  };
  oa.prototype.toString = function() {
    return this.Nh;
  };
  var na = (function() {
    function a(c) {
      if (this instanceof a) throw new TypeError('Symbol is not a constructor');
      return new oa(`jscomp_symbol_${c || ''}_${b++}`, c);
    }
    var b = 0;
    return a;
  })();
  var qa = function() {
    ma();
    let a = r.Symbol.iterator;
    a || (a = r.Symbol.iterator = r.Symbol('Symbol.iterator'));
    typeof Array.prototype[a] !== 'function' &&
      ja(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value() {
          return pa(aa(this));
        }
      });
    qa = function() {};
  };
  var pa = function(a) {
    qa();
    a = {next: a};
    a[r.Symbol.iterator] = function() {
      return this;
    };
    return a;
  };
  const ra = function(a, b) {
    qa();
    a instanceof String && (a = String(a));
    let c = 0;
    var d = {
      next() {
        if (c < a.length) {
          const e = c++;
          return {value: b(e, a[e]), done: !1};
        }
        d.next = function() {
          return {done: !0, value: void 0};
        };
        return d.next();
      }
    };
    d[Symbol.iterator] = function() {
      return d;
    };
    return d;
  };
  ka('Array.prototype.keys', function(a) {
    return a
      ? a
      : function() {
          return ra(this, function(b) {
            return b;
          });
        };
  });
  const sa = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  const ta =
    typeof Object.assign === 'function'
      ? Object.assign
      : function(a, b) {
          for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (d) for (const e in d) sa(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  ka('Object.assign', function(a) {
    return a || ta;
  });
  ka('Promise', function(a) {
    function b() {
      this.cb = null;
    }
    function c(g) {
      return g instanceof e
        ? g
        : new e(function(h) {
            h(g);
          });
    }
    if (a) return a;
    b.prototype.Of = function(g) {
      if (this.cb == null) {
        this.cb = [];
        const h = this;
        this.Pf(function() {
          h.ni();
        });
      }
      this.cb.push(g);
    };
    const d = r.setTimeout;
    b.prototype.Pf = function(g) {
      d(g, 0);
    };
    b.prototype.ni = function() {
      for (; this.cb && this.cb.length; ) {
        const g = this.cb;
        this.cb = [];
        for (let h = 0; h < g.length; ++h) {
          const m = g[h];
          g[h] = null;
          try {
            m();
          } catch (n) {
            this.ei(n);
          }
        }
      }
      this.cb = null;
    };
    b.prototype.ei = function(g) {
      this.Pf(function() {
        throw g;
      });
    };
    var e = function(g) {
      this.W = 0;
      this.ta = void 0;
      this.ac = [];
      const h = this.qe();
      try {
        g(h.resolve, h.reject);
      } catch (m) {
        h.reject(m);
      }
    };
    e.prototype.qe = function() {
      function g(n) {
        return function(q) {
          m || ((m = !0), n.call(h, q));
        };
      }
      var h = this;
      var m = !1;
      return {resolve: g(this.Li), reject: g(this.mf)};
    };
    e.prototype.Li = function(g) {
      if (g === this) this.mf(new TypeError('A Promise cannot resolve to itself'));
      else if (g instanceof e) this.Mi(g);
      else {
        a: switch (typeof g) {
          case 'object':
            var h = g != null;
            break a;
          case 'function':
            h = !0;
            break a;
          default:
            h = !1;
        }
        h ? this.Ki(g) : this.Cg(g);
      }
    };
    e.prototype.Ki = function(g) {
      let h = void 0;
      try {
        h = g.then;
      } catch (m) {
        this.mf(m);
        return;
      }
      typeof h === 'function' ? this.Ni(h, g) : this.Cg(g);
    };
    e.prototype.mf = function(g) {
      this.zh(2, g);
    };
    e.prototype.Cg = function(g) {
      this.zh(1, g);
    };
    e.prototype.zh = function(g, h) {
      if (this.W != 0)
        throw Error(`Cannot settle(${g}, ${h}): Promise already settled in state${this.W}`);
      this.W = g;
      this.ta = h;
      this.pi();
    };
    e.prototype.pi = function() {
      if (this.ac != null) {
        for (let g = 0; g < this.ac.length; ++g) f.Of(this.ac[g]);
        this.ac = null;
      }
    };
    var f = new b();
    e.prototype.Mi = function(g) {
      const h = this.qe();
      g.ed(h.resolve, h.reject);
    };
    e.prototype.Ni = function(g, h) {
      const m = this.qe();
      try {
        g.call(h, m.resolve, m.reject);
      } catch (n) {
        m.reject(n);
      }
    };
    e.prototype.then = function(g, h) {
      function m(z, E) {
        return typeof z === 'function'
          ? function(M) {
              try {
                n(z(M));
              } catch (Z) {
                q(Z);
              }
            }
          : E;
      }
      let n;
      let q;
      const w = new e(function(z, E) {
        n = z;
        q = E;
      });
      this.ed(m(g, n), m(h, q));
      return w;
    };
    e.prototype.catch = function(g) {
      return this.then(void 0, g);
    };
    e.prototype.ed = function(g, h) {
      function m() {
        switch (n.W) {
          case 1:
            g(n.ta);
            break;
          case 2:
            h(n.ta);
            break;
          default:
            throw Error(`Unexpected state: ${n.W}`);
        }
      }
      var n = this;
      this.ac == null ? f.Of(m) : this.ac.push(m);
    };
    e.resolve = c;
    e.reject = function(g) {
      return new e(function(h, m) {
        m(g);
      });
    };
    e.race = function(g) {
      return new e(function(h, m) {
        for (let n = l(g), q = n.next(); !q.done; q = n.next()) c(q.value).ed(h, m);
      });
    };
    e.all = function(g) {
      const h = l(g);
      let m = h.next();
      return m.done
        ? c([])
        : new e(function(n, q) {
            function w(M) {
              return function(Z) {
                z[M] = Z;
                E--;
                E == 0 && n(z);
              };
            }
            var z = [];
            var E = 0;
            do z.push(void 0), E++, c(m.value).ed(w(z.length - 1), q), (m = h.next());
            while (!m.done);
          });
    };
    return e;
  });
  ka('Array.prototype.values', function(a) {
    return a
      ? a
      : function() {
          return ra(this, function(b, c) {
            return c;
          });
        };
  });
  ka('Object.entries', function(a) {
    return a
      ? a
      : function(b) {
          const c = [];
          let d;
          for (d in b) sa(b, d) && c.push([d, b[d]]);
          return c;
        };
  });
  ka('Object.is', function(a) {
    return a
      ? a
      : function(b, c) {
          return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  ka('Array.prototype.includes', function(a) {
    return a
      ? a
      : function(b, c) {
          let d = this;
          d instanceof String && (d = String(d));
          const e = d.length;
          c = c || 0;
          for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
            const f = d[c];
            if (f === b || Object.is(f, b)) return !0;
          }
          return !1;
        };
  });
  ka('String.prototype.includes', function(a) {
    return a
      ? a
      : function(b, c) {
          return la(this, b, 'includes').indexOf(b, c || 0) !== -1;
        };
  });
  ka('WeakMap', function(a) {
    function b() {}
    function c(m) {
      const n = typeof m;
      return (n === 'object' && m !== null) || n === 'function';
    }
    function d(m) {
      if (!sa(m, f)) {
        const n = new b();
        ja(m, f, {value: n});
      }
    }
    function e(m) {
      const n = Object[m];
      n &&
        (Object[m] = function(q) {
          if (q instanceof b) return q;
          d(q);
          return n(q);
        });
    }
    if (
      (function() {
        if (!a || !Object.seal) return !1;
        try {
          const m = Object.seal({});
          const n = Object.seal({});
          const q = new a([[m, 2], [n, 3]]);
          if (q.get(m) != 2 || q.get(n) != 3) return !1;
          q.delete(m);
          q.set(n, 4);
          return !q.has(m) && q.get(n) == 4;
        } catch (w) {
          return !1;
        }
      })()
    )
      return a;
    var f = `$jscomp_hidden_${Math.random()}`;
    e('freeze');
    e('preventExtensions');
    e('seal');
    let g = 0;
    const h = function(m) {
      this.da = (g += Math.random() + 1).toString();
      if (m) {
        m = l(m);
        for (var n; !(n = m.next()).done; ) (n = n.value), this.set(n[0], n[1]);
      }
    };
    h.prototype.set = function(m, n) {
      if (!c(m)) throw Error('Invalid WeakMap key');
      d(m);
      if (!sa(m, f)) throw Error(`WeakMap key fail: ${m}`);
      m[f][this.da] = n;
      return this;
    };
    h.prototype.get = function(m) {
      return c(m) && sa(m, f) ? m[f][this.da] : void 0;
    };
    h.prototype.has = function(m) {
      return c(m) && sa(m, f) && sa(m[f], this.da);
    };
    h.prototype.delete = function(m) {
      return c(m) && sa(m, f) && sa(m[f], this.da) ? delete m[f][this.da] : !1;
    };
    return h;
  });
  ka('Map', function(a) {
    if (
      (function() {
        if (
          !a ||
          typeof a !== 'function' ||
          !a.prototype.entries ||
          typeof Object.seal !== 'function'
        )
          return !1;
        try {
          const h = Object.seal({x: 4});
          const m = new a(l([[h, 's']]));
          if (
            m.get(h) != 's' ||
            m.size != 1 ||
            m.get({x: 4}) ||
            m.set({x: 4}, 't') != m ||
            m.size != 2
          )
            return !1;
          const n = m.entries();
          let q = n.next();
          if (q.done || q.value[0] != h || q.value[1] != 's') return !1;
          q = n.next();
          return q.done || q.value[0].x != 4 || q.value[1] != 't' || !n.next().done ? !1 : !0;
        } catch (w) {
          return !1;
        }
      })()
    )
      return a;
    qa();
    const b = new WeakMap();
    const c = function(h) {
      this.tc = {};
      this.ka = f();
      this.size = 0;
      if (h) {
        h = l(h);
        for (var m; !(m = h.next()).done; ) (m = m.value), this.set(m[0], m[1]);
      }
    };
    c.prototype.set = function(h, m) {
      h = h === 0 ? 0 : h;
      const n = d(this, h);
      n.list || (n.list = this.tc[n.id] = []);
      n.ca
        ? (n.ca.value = m)
        : ((n.ca = {next: this.ka, $a: this.ka.$a, head: this.ka, key: h, value: m}),
          n.list.push(n.ca),
          (this.ka.$a.next = n.ca),
          (this.ka.$a = n.ca),
          this.size++);
      return this;
    };
    c.prototype.delete = function(h) {
      h = d(this, h);
      return h.ca && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this.tc[h.id],
          (h.ca.$a.next = h.ca.next),
          (h.ca.next.$a = h.ca.$a),
          (h.ca.head = null),
          this.size--,
          !0)
        : !1;
    };
    c.prototype.clear = function() {
      this.tc = {};
      this.ka = this.ka.$a = f();
      this.size = 0;
    };
    c.prototype.has = function(h) {
      return Boolean(d(this, h).ca);
    };
    c.prototype.get = function(h) {
      return (h = d(this, h).ca) && h.value;
    };
    c.prototype.entries = function() {
      return e(this, function(h) {
        return [h.key, h.value];
      });
    };
    c.prototype.keys = function() {
      return e(this, function(h) {
        return h.key;
      });
    };
    c.prototype.values = function() {
      return e(this, function(h) {
        return h.value;
      });
    };
    c.prototype.forEach = function(h, m) {
      for (var n = this.entries(), q; !(q = n.next()).done; )
        (q = q.value), h.call(m, q[1], q[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function(h, m) {
      let n = m && typeof m;
      n == 'object' || n == 'function'
        ? b.has(m)
          ? (n = b.get(m))
          : ((n = `${++g}`), b.set(m, n))
        : (n = `p_${m}`);
      const q = h.tc[n];
      if (q && sa(h.tc, n))
        for (h = 0; h < q.length; h++) {
          const w = q[h];
          if ((m !== m && w.key !== w.key) || m === w.key) return {id: n, list: q, index: h, ca: w};
        }
      return {id: n, list: q, index: -1, ca: void 0};
    };
    var e = function(h, m) {
      let n = h.ka;
      return pa(function() {
        if (n) {
          for (; n.head != h.ka; ) n = n.$a;
          for (; n.next != n.head; ) return (n = n.next), {done: !1, value: m(n)};
          n = null;
        }
        return {done: !0, value: void 0};
      });
    };
    var f = function() {
      const h = {};
      return (h.$a = h.next = h.head = h);
    };
    var g = 0;
    return c;
  });
  ka('Set', function(a) {
    if (
      (function() {
        if (
          !a ||
          typeof a !== 'function' ||
          !a.prototype.entries ||
          typeof Object.seal !== 'function'
        )
          return !1;
        try {
          const c = Object.seal({x: 4});
          const d = new a(l([c]));
          if (
            !d.has(c) ||
            d.size != 1 ||
            d.add(c) != d ||
            d.size != 1 ||
            d.add({x: 4}) != d ||
            d.size != 2
          )
            return !1;
          const e = d.entries();
          let f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0]
            ? !1
            : e.next().done;
        } catch (g) {
          return !1;
        }
      })()
    )
      return a;
    qa();
    const b = function(c) {
      this.j = new Map();
      if (c) {
        c = l(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.j.size;
    };
    b.prototype.add = function(c) {
      c = c === 0 ? 0 : c;
      this.j.set(c, c);
      this.size = this.j.size;
      return this;
    };
    b.prototype.delete = function(c) {
      c = this.j.delete(c);
      this.size = this.j.size;
      return c;
    };
    b.prototype.clear = function() {
      this.j.clear();
      this.size = 0;
    };
    b.prototype.has = function(c) {
      return this.j.has(c);
    };
    b.prototype.entries = function() {
      return this.j.entries();
    };
    b.prototype.values = function() {
      return this.j.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function(c, d) {
      const e = this;
      this.j.forEach(function(f) {
        return c.call(d, f, f, e);
      });
    };
    return b;
  });
  ka('Object.values', function(a) {
    return a
      ? a
      : function(b) {
          const c = [];
          let d;
          for (d in b) sa(b, d) && c.push(b[d]);
          return c;
        };
  });
  ka('String.prototype.padStart', function(a) {
    return a
      ? a
      : function(b, c) {
          const d = la(this, null, 'padStart');
          b -= d.length;
          c = void 0 !== c ? String(c) : ' ';
          return (b > 0 && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : '') + d;
        };
  });
  var ua = ua || {};
  const t = this || self;
  const va = /^[\w+/_-]+[=]{0,2}$/;
  let wa = null;
  const xa = function() {};
  const ya = function(a) {
    const b = typeof a;
    if (b == 'object')
      if (a) {
        if (a instanceof Array) return 'array';
        if (a instanceof Object) return b;
        const c = Object.prototype.toString.call(a);
        if (c == '[object Window]') return 'object';
        if (
          c == '[object Array]' ||
          (typeof a.length === 'number' &&
            typeof a.splice !== 'undefined' &&
            typeof a.propertyIsEnumerable !== 'undefined' &&
            !a.propertyIsEnumerable('splice'))
        )
          return 'array';
        if (
          c == '[object Function]' ||
          (typeof a.call !== 'undefined' &&
            typeof a.propertyIsEnumerable !== 'undefined' &&
            !a.propertyIsEnumerable('call'))
        )
          return 'function';
      } else return 'null';
    else if (b == 'function' && typeof a.call === 'undefined') return 'object';
    return b;
  };
  const u = function(a) {
    return ya(a) == 'array';
  };
  const za = function(a) {
    const b = ya(a);
    return b == 'array' || (b == 'object' && typeof a.length === 'number');
  };
  const Aa = function(a) {
    return v(a) && typeof a.getFullYear === 'function';
  };
  const Ba = function(a) {
    return ya(a) == 'function';
  };
  var v = function(a) {
    const b = typeof a;
    return (b == 'object' && a != null) || b == 'function';
  };
  const Ca = `closure_uid_${(1e9 * Math.random()) >>> 0}`;
  let Da = 0;
  const Ea = function(a, b, c) {
    return a.call.apply(a.bind, arguments);
  };
  const Fa = function(a, b, c) {
    if (!a) throw Error();
    if (arguments.length > 2) {
      const d = Array.prototype.slice.call(arguments, 2);
      return function() {
        const e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function() {
      return a.apply(b, arguments);
    };
  };
  var x = function(a, b, c) {
    x =
      Function.prototype.bind && Function.prototype.bind.toString().indexOf('native code') != -1
        ? Ea
        : Fa;
    return x.apply(null, arguments);
  };
  const Ga = function(a, b) {
    const c = Array.prototype.slice.call(arguments, 1);
    return function() {
      const d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  };
  const Ha =
    Date.now ||
    function() {
      return Number(new Date());
    };
  const y = function(a, b) {
    a = a.split('.');
    let c = t;
    a[0] in c || typeof c.execScript === 'undefined' || c.execScript(`var ${a[0]}`);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {}))
        : (c[d] = b);
  };
  const A = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.F = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  };
  const Ia = function() {
    this.Ma = this.Ma;
    this.wd = this.wd;
  };
  Ia.prototype.Ma = !1;
  Ia.prototype.La = function() {
    this.Ma || ((this.Ma = !0), this.C());
  };
  Ia.prototype.C = function() {
    if (this.wd) for (; this.wd.length; ) this.wd.shift()();
  };
  const Ja = function(a) {
    a && typeof a.La === 'function' && a.La();
  };
  const Ka = function(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.Ib = !1;
    this.uh = !0;
  };
  Ka.prototype.stopPropagation = function() {
    this.Ib = !0;
  };
  Ka.prototype.preventDefault = function() {
    this.defaultPrevented = !0;
    this.uh = !1;
  };
  var La = function(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, La);
    else {
      const b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  };
  A(La, Error);
  La.prototype.name = 'CustomError';
  let Ma;
  const Na = function(a, b) {
    a = a.split('%s');
    for (var c = '', d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : '%s');
    La.call(this, c + a[d]);
  };
  A(Na, La);
  Na.prototype.name = 'AssertionError';
  const Oa = function(a, b, c, d) {
    let e = 'Assertion failed';
    if (c) {
      e += `: ${c}`;
      var f = d;
    } else a && ((e += `: ${a}`), (f = b));
    throw new Na(`${e}`, f || []);
  };
  const B = function(a, b, c) {
    a || Oa('', null, b, Array.prototype.slice.call(arguments, 2));
  };
  const Pa = function(a, b) {
    throw new Na(`Failure${a ? `: ${a}` : ''}`, Array.prototype.slice.call(arguments, 1));
  };
  const Qa = function(a, b, c) {
    typeof a !== 'number' &&
      Oa(
        'Expected number but got %s: %s.',
        [ya(a), a],
        b,
        Array.prototype.slice.call(arguments, 2)
      );
    return a;
  };
  const Ra = function(a, b, c) {
    typeof a !== 'string' &&
      Oa(
        'Expected string but got %s: %s.',
        [ya(a), a],
        b,
        Array.prototype.slice.call(arguments, 2)
      );
  };
  const Sa = function(a, b, c) {
    Ba(a) ||
      Oa(
        'Expected function but got %s: %s.',
        [ya(a), a],
        b,
        Array.prototype.slice.call(arguments, 2)
      );
  };
  const Ta = function(a, b, c) {
    v(a) ||
      Oa(
        'Expected object but got %s: %s.',
        [ya(a), a],
        b,
        Array.prototype.slice.call(arguments, 2)
      );
    return a;
  };
  const Ua = Array.prototype.indexOf
    ? function(a, b) {
        B(a.length != null);
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function(a, b) {
        if (typeof a === 'string')
          return typeof b !== 'string' || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  const Va = Array.prototype.lastIndexOf
    ? function(a, b) {
        B(a.length != null);
        return Array.prototype.lastIndexOf.call(a, b, a.length - 1);
      }
    : function(a, b) {
        let c = a.length - 1;
        c < 0 && (c = Math.max(0, a.length + c));
        if (typeof a === 'string')
          return typeof b !== 'string' || b.length != 1 ? -1 : a.lastIndexOf(b, c);
        for (; c >= 0; c--) if (c in a && a[c] === b) return c;
        return -1;
      };
  const Wa = Array.prototype.forEach
    ? function(a, b, c) {
        B(a.length != null);
        Array.prototype.forEach.call(a, b, c);
      }
    : function(a, b, c) {
        for (let d = a.length, e = typeof a === 'string' ? a.split('') : a, f = 0; f < d; f++)
          f in e && b.call(c, e[f], f, a);
      };
  const Xa = Array.prototype.filter
    ? function(a, b) {
        B(a.length != null);
        return Array.prototype.filter.call(a, b, void 0);
      }
    : function(a, b) {
        for (
          var c = a.length, d = [], e = 0, f = typeof a === 'string' ? a.split('') : a, g = 0;
          g < c;
          g++
        )
          if (g in f) {
            const h = f[g];
            b.call(void 0, h, g, a) && (d[e++] = h);
          }
        return d;
      };
  const Ya = Array.prototype.map
    ? function(a, b, c) {
        B(a.length != null);
        return Array.prototype.map.call(a, b, c);
      }
    : function(a, b, c) {
        for (
          var d = a.length, e = Array(d), f = typeof a === 'string' ? a.split('') : a, g = 0;
          g < d;
          g++
        )
          g in f && (e[g] = b.call(c, f[g], g, a));
        return e;
      };
  const Za = Array.prototype.some
    ? function(a, b) {
        B(a.length != null);
        return Array.prototype.some.call(a, b, void 0);
      }
    : function(a, b) {
        for (let c = a.length, d = typeof a === 'string' ? a.split('') : a, e = 0; e < c; e++)
          if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1;
      };
  const $a = Array.prototype.every
    ? function(a, b, c) {
        B(a.length != null);
        return Array.prototype.every.call(a, b, c);
      }
    : function(a, b, c) {
        for (let d = a.length, e = typeof a === 'string' ? a.split('') : a, f = 0; f < d; f++)
          if (f in e && !b.call(c, e[f], f, a)) return !1;
        return !0;
      };
  const ab = function(a, b) {
    let c = 0;
    Wa(
      a,
      function(d, e, f) {
        b.call(void 0, d, e, f) && ++c;
      },
      void 0
    );
    return c;
  };
  const cb = function(a) {
    a: {
      var b = bb;
      for (let c = a.length, d = typeof a === 'string' ? a.split('') : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a;
        }
      b = -1;
    }
    return b < 0 ? null : typeof a === 'string' ? a.charAt(b) : a[b];
  };
  const db = function(a, b) {
    return Ua(a, b) >= 0;
  };
  const eb = function(a) {
    if (!u(a)) for (let b = a.length - 1; b >= 0; b--) delete a[b];
    a.length = 0;
  };
  const gb = function(a, b) {
    b = Ua(a, b);
    let c;
    (c = b >= 0) && fb(a, b);
    return c;
  };
  var fb = function(a, b) {
    B(a.length != null);
    Array.prototype.splice.call(a, b, 1);
  };
  const hb = function(a) {
    return Array.prototype.concat.apply([], arguments);
  };
  const ib = function(a) {
    const b = a.length;
    if (b > 0) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  };
  const jb = function(a, b) {
    for (let c = 1; c < arguments.length; c++) {
      const d = arguments[c];
      if (za(d)) {
        const e = a.length || 0;
        const f = d.length || 0;
        a.length = e + f;
        for (let g = 0; g < f; g++) a[e + g] = d[g];
      } else a.push(d);
    }
  };
  const kb = function(a, b, c) {
    B(a.length != null);
    return arguments.length <= 2
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c);
  };
  const lb = function(a) {
    for (var b = {}, c = 0, d = 0; d < a.length; ) {
      const e = a[d++];
      let f = e;
      f = v(f) ? `o${f[Ca] || (f[Ca] = ++Da)}` : (typeof f).charAt(0) + f;
      Object.prototype.hasOwnProperty.call(b, f) || ((b[f] = !0), (a[c++] = e));
    }
    a.length = c;
  };
  const mb = function(a) {
    const b = [];
    if (a - 0 < 0) return [];
    for (let c = 0; c < a; c += 1) b.push(c);
    return b;
  };
  var nb = function(a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
      const d = arguments[c];
      if (u(d))
        for (let e = 0; e < d.length; e += 8192) {
          let f = kb(d, e, e + 8192);
          f = nb.apply(null, f);
          for (let g = 0; g < f.length; g++) b.push(f[g]);
        }
      else b.push(d);
    }
    return b;
  };
  const ob = String.prototype.trim
    ? function(a) {
        return a.trim();
      }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };
  const pb = /&/g;
  const qb = /</g;
  const rb = />/g;
  const sb = /"/g;
  const tb = /'/g;
  const ub = /\x00/g;
  const vb = /[\x00&<>"']/;
  const wb = function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };
  let xb;
  a: {
    const yb = t.navigator;
    if (yb) {
      const zb = yb.userAgent;
      if (zb) {
        xb = zb;
        break a;
      }
    }
    xb = '';
  }
  const Ab = function(a) {
    return xb.indexOf(a) != -1;
  };
  const Bb = function(a, b, c) {
    for (const d in a) b.call(c, a[d], d, a);
  };
  const Cb = function(a, b) {
    const c = {};
    let d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  };
  const Db = function(a, b, c) {
    const d = {};
    let e;
    for (e in a) d[e] = b.call(c, a[e], e, a);
    return d;
  };
  const Eb = function(a, b) {
    for (const c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  };
  const Fb = function(a) {
    const b = [];
    let c = 0;
    let d;
    for (d in a) b[c++] = a[d];
    return b;
  };
  const Gb = function(a) {
    const b = [];
    let c = 0;
    let d;
    for (d in a) b[c++] = d;
    return b;
  };
  const Hb = function(a, b) {
    for (const c in a) if (a[c] == b) return !0;
    return !1;
  };
  const Jb = function(a) {
    const b = Ib;
    let c;
    for (c in b) if (a.call(void 0, b[c], c, b)) return c;
  };
  const Kb = function(a) {
    for (const b in a) return !1;
    return !0;
  };
  const Lb = function(a, b) {
    b in a && delete a[b];
  };
  const Mb = function(a) {
    const b = {};
    let c;
    for (c in a) b[c] = a[c];
    return b;
  };
  var Nb = function(a) {
    let b = ya(a);
    if (b == 'object' || b == 'array') {
      if (Ba(a.clone)) return a.clone();
      b = b == 'array' ? [] : {};
      for (const c in a) b[c] = Nb(a[c]);
      return b;
    }
    return a;
  };
  const Ob = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
    ' '
  );
  const Pb = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (let f = 0; f < Ob.length; f++)
        (c = Ob[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  };
  const Qb = function(a, b) {
    a: {
      try {
        const c = a && a.ownerDocument;
        let d = c && (c.defaultView || c.parentWindow);
        d = d || t;
        if (d.Element && d.Location) {
          var e = d;
          break a;
        }
      } catch (g) {}
      e = null;
    }
    if (
      e &&
      typeof e[b] !== 'undefined' &&
      (!a || (!(a instanceof e[b]) && (a instanceof e.Location || a instanceof e.Element)))
    ) {
      if (v(a))
        try {
          var f =
            a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
        } catch (g) {
          f = '<object could not be stringified>';
        }
      else f = void 0 === a ? 'undefined' : a === null ? 'null' : typeof a;
      Pa('Argument is not a %s (or a non-Element, non-Location mock); got: %s', b, f);
    }
  };
  const Rb = function(a) {
    return a;
  };
  const Ub = function(a, b) {
    this.Cf = (a === Sb && b) || '';
    this.Yh = Tb;
  };
  Ub.prototype.Bb = !0;
  Ub.prototype.zb = function() {
    return this.Cf;
  };
  Ub.prototype.toString = function() {
    return `Const{${this.Cf}}`;
  };
  const Vb = function(a) {
    if (a instanceof Ub && a.constructor === Ub && a.Yh === Tb) return a.Cf;
    Pa(`expected object of type Const, got '${a}'`);
    return 'type_error:Const';
  };
  var Tb = {};
  var Sb = {};
  const Wb = new Ub(Sb, '');
  const Xb = function() {
    this.df = '';
  };
  Xb.prototype.Bb = !0;
  Xb.prototype.zb = function() {
    return this.df.toString();
  };
  Xb.prototype.toString = function() {
    return `SafeScript{${this.df}}`;
  };
  Xb.prototype.Ya = function(a) {
    this.df = a;
    return this;
  };
  new Xb().Ya('');
  const $b = function(a, b) {
    this.hf = (a === Yb && b) || '';
    this.Zh = Zb;
  };
  $b.prototype.Bb = !0;
  $b.prototype.zb = function() {
    return this.hf.toString();
  };
  $b.prototype.toString = function() {
    return `TrustedResourceUrl{${this.hf}}`;
  };
  const ac = function(a) {
    if (a instanceof $b && a.constructor === $b && a.Zh === Zb) return a.hf;
    Pa(`expected object of type TrustedResourceUrl, got '${a}' of type ${ya(a)}`);
    return 'type_error:TrustedResourceUrl';
  };
  const ec = function(a) {
    const b = Vb(bc);
    if (!cc.test(b)) throw Error(`Invalid TrustedResourceUrl format: ${b}`);
    const c = b.replace(dc, function(d, e) {
      if (!Object.prototype.hasOwnProperty.call(a, e))
        throw Error(
          `Found marker, "${e}", in format string, "${b}", but no valid label mapping found in args: ${JSON.stringify(
            a
          )}`
        );
      d = a[e];
      return d instanceof Ub ? Vb(d) : encodeURIComponent(String(d));
    });
    return new $b(Yb, c);
  };
  var dc = /%{(\w+)}/g;
  var cc = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
  var Zb = {};
  var Yb = {}; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  const hc = function(a, b) {
    this.gf = (a === fc && b) || '';
    this.Xh = gc;
  };
  hc.prototype.Bb = !0;
  hc.prototype.zb = function() {
    return this.gf.toString();
  };
  hc.prototype.toString = function() {
    return `SafeUrl{${this.gf}}`;
  };
  const ic = function(a) {
    if (a instanceof hc && a.constructor === hc && a.Xh === gc) return a.gf;
    Pa(`expected object of type SafeUrl, got '${a}' of type ${ya(a)}`);
    return 'type_error:SafeUrl';
  };
  const jc = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i;
  const kc = function(a) {
    if (jc.test(a.type)) {
      const b =
        void 0 !== t.URL && void 0 !== t.URL.createObjectURL
          ? t.URL
          : void 0 !== t.webkitURL && void 0 !== t.webkitURL.createObjectURL
            ? t.webkitURL
            : void 0 !== t.createObjectURL
              ? t
              : null;
      if (b == null) throw Error("This browser doesn't seem to support blob URLs");
      a = b.createObjectURL(a);
    } else a = 'about:invalid#zClosurez';
    return new hc(fc, a);
  };
  var gc = {};
  var fc = {};
  const lc = function() {
    this.ff = '';
  };
  lc.prototype.Bb = !0;
  lc.prototype.zb = function() {
    return this.ff;
  };
  lc.prototype.toString = function() {
    return `SafeStyle{${this.ff}}`;
  };
  lc.prototype.Ya = function(a) {
    this.ff = a;
    return this;
  };
  new lc().Ya('');
  const mc = function() {
    this.ef = '';
  };
  mc.prototype.Bb = !0;
  mc.prototype.zb = function() {
    return this.ef;
  };
  mc.prototype.toString = function() {
    return `SafeStyleSheet{${this.ef}}`;
  };
  mc.prototype.Ya = function(a) {
    this.ef = a;
    return this;
  };
  new mc().Ya('');
  const oc = function() {
    this.xd = '';
    this.Wh = nc;
  };
  oc.prototype.Bb = !0;
  oc.prototype.zb = function() {
    return this.xd.toString();
  };
  oc.prototype.toString = function() {
    return `SafeHtml{${this.xd}}`;
  };
  const qc = function() {
    const a = pc;
    if (a instanceof oc && a.constructor === oc && a.Wh === nc) return a.xd;
    Pa(`expected object of type SafeHtml, got '${a}' of type ${ya(a)}`);
    return 'type_error:SafeHtml';
  };
  var nc = {};
  oc.prototype.Ya = function(a) {
    this.xd = a;
    return this;
  };
  new oc().Ya('<!DOCTYPE html>');
  var pc = new oc().Ya('');
  new oc().Ya('<br>');
  const rc = function(a) {
    const b = new $b(Yb, Vb(Wb));
    Qb(a, 'HTMLIFrameElement');
    a.src = ac(b).toString();
  };
  const sc = function(a, b) {
    Qb(a, 'HTMLScriptElement');
    a.src = ac(b);
    if (wa === null)
      b: {
        b = t.document;
        if (
          (b = b.querySelector && b.querySelector('script[nonce]')) &&
          (b = b.nonce || b.getAttribute('nonce')) &&
          va.test(b)
        ) {
          wa = b;
          break b;
        }
        wa = '';
      }
    b = wa;
    b && a.setAttribute('nonce', b);
  };
  const tc = function(a, b) {
    for (
      var c = a.split('%s'), d = '', e = Array.prototype.slice.call(arguments, 1);
      e.length && c.length > 1;

    )
      d += c.shift() + e.shift();
    return d + c.join('%s');
  };
  const uc = function(a) {
    vb.test(a) &&
      (a.indexOf('&') != -1 && (a = a.replace(pb, '&amp;')),
      a.indexOf('<') != -1 && (a = a.replace(qb, '&lt;')),
      a.indexOf('>') != -1 && (a = a.replace(rb, '&gt;')),
      a.indexOf('"') != -1 && (a = a.replace(sb, '&quot;')),
      a.indexOf("'") != -1 && (a = a.replace(tb, '&#39;')),
      a.indexOf('\x00') != -1 && (a = a.replace(ub, '&#0;')));
    return a;
  };
  const vc = function(a) {
    let b = 1;
    a = a.split(':');
    for (var c = []; b > 0 && a.length; ) c.push(a.shift()), b--;
    a.length && c.push(a.join(':'));
    return c;
  };
  var wc = function(a) {
    wc[' '](a);
    return a;
  };
  wc[' '] = xa;
  const yc = function(a, b) {
    const c = xc;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
  };
  const zc = Ab('Opera');
  const Ac = Ab('Trident') || Ab('MSIE');
  const Bc = Ab('Edge');
  const Cc =
    Ab('Gecko') &&
    !(xb.toLowerCase().indexOf('webkit') != -1 && !Ab('Edge')) &&
    !(Ab('Trident') || Ab('MSIE')) &&
    !Ab('Edge');
  const Dc = xb.toLowerCase().indexOf('webkit') != -1 && !Ab('Edge');
  const Ec = function() {
    const a = t.document;
    return a ? a.documentMode : void 0;
  };
  let Fc;
  a: {
    let Gc = '';
    const Hc = (function() {
      const a = xb;
      if (Cc) return /rv:([^\);]+)(\)|;)/.exec(a);
      if (Bc) return /Edge\/([\d\.]+)/.exec(a);
      if (Ac) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (Dc) return /WebKit\/(\S+)/.exec(a);
      if (zc) return /(?:Version)[ \/]?(\S+)/.exec(a);
    })();
    Hc && (Gc = Hc ? Hc[1] : '');
    if (Ac) {
      const Ic = Ec();
      if (Ic != null && Ic > parseFloat(Gc)) {
        Fc = String(Ic);
        break a;
      }
    }
    Fc = Gc;
  }
  const Jc = Fc;
  var xc = {};
  const Kc = function(a) {
    return yc(a, function() {
      for (
        var b = 0,
          c = ob(String(Jc)).split('.'),
          d = ob(String(a)).split('.'),
          e = Math.max(c.length, d.length),
          f = 0;
        b == 0 && f < e;
        f++
      ) {
        let g = c[f] || '';
        let h = d[f] || '';
        do {
          g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
          h = /(\d*)(\D*)(.*)/.exec(h) || ['', '', '', ''];
          if (g[0].length == 0 && h[0].length == 0) break;
          b =
            wb(
              g[1].length == 0 ? 0 : parseInt(g[1], 10),
              h[1].length == 0 ? 0 : parseInt(h[1], 10)
            ) ||
            wb(g[2].length == 0, h[2].length == 0) ||
            wb(g[2], h[2]);
          g = g[3];
          h = h[3];
        } while (b == 0);
      }
      return b >= 0;
    });
  };
  let Lc;
  Lc = t.document && Ac ? Ec() : void 0;
  const Mc =
    Object.freeze ||
    function(a) {
      return a;
    };
  const Nc = !Ac || Number(Lc) >= 9;
  const Oc = Ac && !Kc('9');
  const Pc = (function() {
    if (!t.addEventListener || !Object.defineProperty) return !1;
    let a = !1;
    const b = Object.defineProperty({}, 'passive', {
      get() {
        a = !0;
      }
    });
    try {
      t.addEventListener('test', xa, b), t.removeEventListener('test', xa, b);
    } catch (c) {}
    return a;
  })();
  const Rc = function(a, b) {
    Ka.call(this, a ? a.type : '');
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = '';
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = '';
    this.Ca = null;
    if (a) {
      const c = (this.type = a.type);
      const d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.currentTarget = b;
      if ((b = a.relatedTarget)) {
        if (Cc) {
          a: {
            try {
              wc(b.nodeName);
              var e = !0;
              break a;
            } catch (f) {}
            e = !1;
          }
          e || (b = null);
        }
      } else c == 'mouseover' ? (b = a.fromElement) : c == 'mouseout' && (b = a.toElement);
      this.relatedTarget = b;
      d
        ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
          (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
          (this.screenX = d.screenX || 0),
          (this.screenY = d.screenY || 0))
        : ((this.offsetX = Dc || void 0 !== a.offsetX ? a.offsetX : a.layerX),
          (this.offsetY = Dc || void 0 !== a.offsetY ? a.offsetY : a.layerY),
          (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
          (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
          (this.screenX = a.screenX || 0),
          (this.screenY = a.screenY || 0));
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.key = a.key || '';
      this.charCode = a.charCode || (c == 'keypress' ? a.keyCode : 0);
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType =
        typeof a.pointerType === 'string' ? a.pointerType : Qc[a.pointerType] || '';
      this.state = a.state;
      this.Ca = a;
      a.defaultPrevented && this.preventDefault();
    }
  };
  A(Rc, Ka);
  var Qc = Mc({2: 'touch', 3: 'pen', 4: 'mouse'});
  Rc.prototype.stopPropagation = function() {
    Rc.F.stopPropagation.call(this);
    this.Ca.stopPropagation ? this.Ca.stopPropagation() : (this.Ca.cancelBubble = !0);
  };
  Rc.prototype.preventDefault = function() {
    Rc.F.preventDefault.call(this);
    const a = this.Ca;
    if (a.preventDefault) a.preventDefault();
    else if (((a.returnValue = !1), Oc))
      try {
        if (a.ctrlKey || (a.keyCode >= 112 && a.keyCode <= 123)) a.keyCode = -1;
      } catch (b) {}
  };
  const Sc = `closure_listenable_${(1e6 * Math.random()) | 0}`;
  const Tc = function(a) {
    return !(!a || !a[Sc]);
  };
  let Uc = 0;
  const Vc = function(a, b, c, d, e) {
    this.listener = a;
    this.yd = null;
    this.src = b;
    this.type = c;
    this.capture = Boolean(d);
    this.Xa = e;
    this.key = ++Uc;
    this.cc = this.dd = !1;
  };
  const Wc = function(a) {
    a.cc = !0;
    a.listener = null;
    a.yd = null;
    a.src = null;
    a.Xa = null;
  };
  const Xc = function(a) {
    this.src = a;
    this.aa = {};
    this.Sc = 0;
  };
  Xc.prototype.add = function(a, b, c, d, e) {
    const f = a.toString();
    a = this.aa[f];
    a || ((a = this.aa[f] = []), this.Sc++);
    const g = Yc(a, b, d, e);
    g > -1
      ? ((b = a[g]), c || (b.dd = !1))
      : ((b = new Vc(b, this.src, f, Boolean(d), e)), (b.dd = c), a.push(b));
    return b;
  };
  Xc.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.aa)) return !1;
    const e = this.aa[a];
    b = Yc(e, b, c, d);
    return b > -1 ? (Wc(e[b]), fb(e, b), e.length == 0 && (delete this.aa[a], this.Sc--), !0) : !1;
  };
  const Zc = function(a, b) {
    const c = b.type;
    c in a.aa && gb(a.aa[c], b) && (Wc(b), a.aa[c].length == 0 && (delete a.aa[c], a.Sc--));
  };
  Xc.prototype.Nc = function(a) {
    a = a && a.toString();
    let b = 0;
    let c;
    for (c in this.aa)
      if (!a || c == a) {
        for (let d = this.aa[c], e = 0; e < d.length; e++) ++b, Wc(d[e]);
        delete this.aa[c];
        this.Sc--;
      }
  };
  Xc.prototype.yc = function(a, b, c, d) {
    a = this.aa[a.toString()];
    let e = -1;
    a && (e = Yc(a, b, c, d));
    return e > -1 ? a[e] : null;
  };
  Xc.prototype.hasListener = function(a, b) {
    const c = void 0 !== a;
    const d = c ? a.toString() : '';
    const e = void 0 !== b;
    return Eb(this.aa, function(f) {
      for (let g = 0; g < f.length; ++g)
        if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0;
      return !1;
    });
  };
  var Yc = function(a, b, c, d) {
    for (let e = 0; e < a.length; ++e) {
      const f = a[e];
      if (!f.cc && f.listener == b && f.capture == Boolean(c) && f.Xa == d) return e;
    }
    return -1;
  };
  const $c = `closure_lm_${(1e6 * Math.random()) | 0}`;
  const ad = {};
  let bd = 0;
  var dd = function(a, b, c, d, e) {
    if (d && d.once) return cd(a, b, c, d, e);
    if (u(b)) {
      for (let f = 0; f < b.length; f++) dd(a, b[f], c, d, e);
      return null;
    }
    c = ed(c);
    return Tc(a) ? a.Oa(b, c, v(d) ? Boolean(d.capture) : Boolean(d), e) : fd(a, b, c, !1, d, e);
  };
  var fd = function(a, b, c, d, e, f) {
    if (!b) throw Error('Invalid event type');
    const g = v(e) ? Boolean(e.capture) : Boolean(e);
    let h = gd(a);
    h || (a[$c] = h = new Xc(a));
    c = h.add(b, c, d, g, f);
    if (c.yd) return c;
    d = hd();
    c.yd = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
      Pc || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(id(b.toString()), d);
    else if (a.addListener && a.removeListener)
      B(b === 'change', 'MediaQueryList only has a change event'), a.addListener(d);
    else throw Error('addEventListener and attachEvent are unavailable.');
    bd++;
    return c;
  };
  var hd = function() {
    const a = jd;
    var b = Nc
      ? function(c) {
          return a.call(b.src, b.listener, c);
        }
      : function(c) {
          c = a.call(b.src, b.listener, c);
          if (!c) return c;
        };
    return b;
  };
  var cd = function(a, b, c, d, e) {
    if (u(b)) {
      for (let f = 0; f < b.length; f++) cd(a, b[f], c, d, e);
      return null;
    }
    c = ed(c);
    return Tc(a) ? a.Hc(b, c, v(d) ? Boolean(d.capture) : Boolean(d), e) : fd(a, b, c, !0, d, e);
  };
  var kd = function(a, b, c, d, e) {
    if (u(b)) for (let f = 0; f < b.length; f++) kd(a, b[f], c, d, e);
    else
      (d = v(d) ? Boolean(d.capture) : Boolean(d)),
        (c = ed(c)),
        Tc(a) ? a.Ld(b, c, d, e) : a && (a = gd(a)) && (b = a.yc(b, c, d, e)) && ld(b);
  };
  var ld = function(a) {
    if (typeof a !== 'number' && a && !a.cc) {
      const b = a.src;
      if (Tc(b)) Zc(b.Ba, a);
      else {
        let c = a.type;
        const d = a.yd;
        b.removeEventListener
          ? b.removeEventListener(c, d, a.capture)
          : b.detachEvent
            ? b.detachEvent(id(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
        bd--;
        (c = gd(b)) ? (Zc(c, a), c.Sc == 0 && ((c.src = null), (b[$c] = null))) : Wc(a);
      }
    }
  };
  var id = function(a) {
    return a in ad ? ad[a] : (ad[a] = `on${a}`);
  };
  const nd = function(a, b, c, d) {
    let e = !0;
    if ((a = gd(a)))
      if ((b = a.aa[b.toString()]))
        for (b = b.concat(), a = 0; a < b.length; a++) {
          let f = b[a];
          f && f.capture == c && !f.cc && ((f = md(f, d)), (e = e && !1 !== f));
        }
    return e;
  };
  var md = function(a, b) {
    const c = a.listener;
    const d = a.Xa || a.src;
    a.dd && ld(a);
    return c.call(d, b);
  };
  var jd = function(a, b) {
    if (a.cc) return !0;
    if (!Nc) {
      if (!b)
        a: {
          b = ['window', 'event'];
          for (var c = t, d = 0; d < b.length; d++)
            if (((c = c[b[d]]), c == null)) {
              b = null;
              break a;
            }
          b = c;
        }
      d = b;
      b = new Rc(d, this);
      c = !0;
      if (!(d.keyCode < 0 || void 0 != d.returnValue)) {
        a: {
          var e = !1;
          if (d.keyCode == 0)
            try {
              d.keyCode = -1;
              break a;
            } catch (g) {
              e = !0;
            }
          if (e || void 0 == d.returnValue) d.returnValue = !0;
        }
        d = [];
        for (e = b.currentTarget; e; e = e.parentNode) d.push(e);
        a = a.type;
        for (e = d.length - 1; !b.Ib && e >= 0; e--) {
          b.currentTarget = d[e];
          var f = nd(d[e], a, !0, b);
          c = c && f;
        }
        for (e = 0; !b.Ib && e < d.length; e++)
          (b.currentTarget = d[e]), (f = nd(d[e], a, !1, b)), (c = c && f);
      }
      return c;
    }
    return md(a, new Rc(b, this));
  };
  var gd = function(a) {
    a = a[$c];
    return a instanceof Xc ? a : null;
  };
  const od = `__closure_events_fn_${(1e9 * Math.random()) >>> 0}`;
  var ed = function(a) {
    B(a, 'Listener can not be null.');
    if (Ba(a)) return a;
    B(a.handleEvent, 'An object listener must have handleEvent method.');
    a[od] ||
      (a[od] = function(b) {
        return a.handleEvent(b);
      });
    return a[od];
  };
  const pd = function() {
    Ia.call(this);
    this.Ba = new Xc(this);
    this.ci = this;
    this.bf = null;
  };
  A(pd, Ia);
  pd.prototype[Sc] = !0;
  k = pd.prototype;
  k.addEventListener = function(a, b, c, d) {
    dd(this, a, b, c, d);
  };
  k.removeEventListener = function(a, b, c, d) {
    kd(this, a, b, c, d);
  };
  k.dispatchEvent = function(a) {
    qd(this);
    let b = this.bf;
    if (b) {
      var c = [];
      for (var d = 1; b; b = b.bf) c.push(b), B(++d < 1e3, 'infinite loop');
    }
    b = this.ci;
    d = a.type || a;
    if (typeof a === 'string') a = new Ka(a, b);
    else if (a instanceof Ka) a.target = a.target || b;
    else {
      var e = a;
      a = new Ka(d, b);
      Pb(a, e);
    }
    e = !0;
    if (c)
      for (var f = c.length - 1; !a.Ib && f >= 0; f--) {
        var g = (a.currentTarget = c[f]);
        e = rd(g, d, !0, a) && e;
      }
    a.Ib ||
      ((g = a.currentTarget = b), (e = rd(g, d, !0, a) && e), a.Ib || (e = rd(g, d, !1, a) && e));
    if (c)
      for (f = 0; !a.Ib && f < c.length; f++)
        (g = a.currentTarget = c[f]), (e = rd(g, d, !1, a) && e);
    return e;
  };
  k.C = function() {
    pd.F.C.call(this);
    this.Ba && this.Ba.Nc(void 0);
    this.bf = null;
  };
  k.Oa = function(a, b, c, d) {
    qd(this);
    return this.Ba.add(String(a), b, !1, c, d);
  };
  k.Hc = function(a, b, c, d) {
    return this.Ba.add(String(a), b, !0, c, d);
  };
  k.Ld = function(a, b, c, d) {
    this.Ba.remove(String(a), b, c, d);
  };
  var rd = function(a, b, c, d) {
    b = a.Ba.aa[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      const g = b[f];
      if (g && !g.cc && g.capture == c) {
        const h = g.listener;
        const m = g.Xa || g.src;
        g.dd && Zc(a.Ba, g);
        e = !1 !== h.call(m, d) && e;
      }
    }
    return e && d.uh != 0;
  };
  pd.prototype.yc = function(a, b, c, d) {
    return this.Ba.yc(String(a), b, c, d);
  };
  pd.prototype.hasListener = function(a, b) {
    return this.Ba.hasListener(void 0 !== a ? String(a) : void 0, b);
  };
  var qd = function(a) {
    B(
      a.Ba,
      'Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?'
    );
  };
  const sd = 'StopIteration' in t ? t.StopIteration : {message: 'StopIteration', stack: ''};
  const td = function() {};
  td.prototype.next = function() {
    throw sd;
  };
  td.prototype.Rb = function() {
    return this;
  };
  const ud = function(a) {
    if (a instanceof td) return a;
    if (typeof a.Rb === 'function') return a.Rb(!1);
    if (za(a)) {
      let b = 0;
      const c = new td();
      c.next = function() {
        for (;;) {
          if (b >= a.length) throw sd;
          if (b in a) return a[b++];
          b++;
        }
      };
      return c;
    }
    throw Error('Not implemented');
  };
  const vd = function(a, b) {
    if (za(a))
      try {
        Wa(a, b, void 0);
      } catch (c) {
        if (c !== sd) throw c;
      }
    else {
      a = ud(a);
      try {
        for (;;) b.call(void 0, a.next(), void 0, a);
      } catch (c) {
        if (c !== sd) throw c;
      }
    }
  };
  const wd = function(a, b) {
    this.j = {};
    this.H = [];
    this.Uc = this.J = 0;
    const c = arguments.length;
    if (c > 1) {
      if (c % 2) throw Error('Uneven number of arguments');
      for (let d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else a && this.addAll(a);
  };
  k = wd.prototype;
  k.M = function() {
    return this.J;
  };
  k.T = function() {
    xd(this);
    for (var a = [], b = 0; b < this.H.length; b++) a.push(this.j[this.H[b]]);
    return a;
  };
  k.Ea = function() {
    xd(this);
    return this.H.concat();
  };
  k.fb = function(a) {
    return yd(this.j, a);
  };
  k.sc = function(a) {
    for (let b = 0; b < this.H.length; b++) {
      const c = this.H[b];
      if (yd(this.j, c) && this.j[c] == a) return !0;
    }
    return !1;
  };
  k.equals = function(a, b) {
    if (this === a) return !0;
    if (this.J != a.M()) return !1;
    b = b || zd;
    xd(this);
    for (var c, d = 0; (c = this.H[d]); d++) if (!b(this.get(c), a.get(c))) return !1;
    return !0;
  };
  var zd = function(a, b) {
    return a === b;
  };
  wd.prototype.isEmpty = function() {
    return this.J == 0;
  };
  wd.prototype.clear = function() {
    this.j = {};
    this.Uc = this.J = this.H.length = 0;
  };
  wd.prototype.remove = function(a) {
    return yd(this.j, a)
      ? (delete this.j[a], this.J--, this.Uc++, this.H.length > 2 * this.J && xd(this), !0)
      : !1;
  };
  var xd = function(a) {
    if (a.J != a.H.length) {
      for (var b = 0, c = 0; b < a.H.length; ) {
        var d = a.H[b];
        yd(a.j, d) && (a.H[c++] = d);
        b++;
      }
      a.H.length = c;
    }
    if (a.J != a.H.length) {
      const e = {};
      for (c = b = 0; b < a.H.length; ) (d = a.H[b]), yd(e, d) || ((a.H[c++] = d), (e[d] = 1)), b++;
      a.H.length = c;
    }
  };
  k = wd.prototype;
  k.get = function(a, b) {
    return yd(this.j, a) ? this.j[a] : b;
  };
  k.set = function(a, b) {
    yd(this.j, a) || (this.J++, this.H.push(a), this.Uc++);
    this.j[a] = b;
  };
  k.addAll = function(a) {
    if (a instanceof wd) for (var b = a.Ea(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
    else for (b in a) this.set(b, a[b]);
  };
  k.forEach = function(a, b) {
    for (let c = this.Ea(), d = 0; d < c.length; d++) {
      const e = c[d];
      const f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  k.clone = function() {
    return new wd(this);
  };
  k.Rb = function(a) {
    xd(this);
    let b = 0;
    const c = this.Uc;
    const d = this;
    const e = new td();
    e.next = function() {
      if (c != d.Uc) throw Error('The map has changed since the iterator was created');
      if (b >= d.H.length) throw sd;
      const f = d.H[b++];
      return a ? f : d.j[f];
    };
    return e;
  };
  var yd = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  const Ad = function(a) {
    if (a.M && typeof a.M === 'function') a = a.M();
    else if (za(a) || typeof a === 'string') a = a.length;
    else {
      let b = 0;
      let c;
      for (c in a) b++;
      a = b;
    }
    return a;
  };
  const Bd = function(a) {
    if (a.T && typeof a.T === 'function') return a.T();
    if (typeof a === 'string') return a.split('');
    if (za(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b;
    }
    return Fb(a);
  };
  const Cd = function(a) {
    if (a.Ea && typeof a.Ea === 'function') return a.Ea();
    if (!a.T || typeof a.T !== 'function') {
      if (za(a) || typeof a === 'string') {
        const b = [];
        a = a.length;
        for (let c = 0; c < a; c++) b.push(c);
        return b;
      }
      return Gb(a);
    }
  };
  const Dd = function(a, b, c) {
    if (a.forEach && typeof a.forEach === 'function') a.forEach(b, c);
    else if (za(a) || typeof a === 'string') Wa(a, b, c);
    else
      for (let d = Cd(a), e = Bd(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a);
  };
  const Ed = function(a, b) {
    if (typeof a.every === 'function') return a.every(b, void 0);
    if (za(a) || typeof a === 'string') return $a(a, b, void 0);
    for (let c = Cd(a), d = Bd(a), e = d.length, f = 0; f < e; f++)
      if (!b.call(void 0, d[f], c && c[f], a)) return !1;
    return !0;
  };
  const Fd = function(a) {
    this.j = new wd();
    a && this.addAll(a);
  };
  const Gd = function(a) {
    const b = typeof a;
    return (b == 'object' && a) || b == 'function'
      ? `o${a[Ca] || (a[Ca] = ++Da)}`
      : b.substr(0, 1) + a;
  };
  k = Fd.prototype;
  k.M = function() {
    return this.j.M();
  };
  k.add = function(a) {
    this.j.set(Gd(a), a);
  };
  k.addAll = function(a) {
    a = Bd(a);
    for (let b = a.length, c = 0; c < b; c++) this.add(a[c]);
  };
  k.Nc = function(a) {
    a = Bd(a);
    for (let b = a.length, c = 0; c < b; c++) this.remove(a[c]);
  };
  k.remove = function(a) {
    return this.j.remove(Gd(a));
  };
  k.clear = function() {
    this.j.clear();
  };
  k.isEmpty = function() {
    return this.j.isEmpty();
  };
  k.contains = function(a) {
    return this.j.fb(Gd(a));
  };
  k.Qg = function(a) {
    const b = new Fd();
    a = Bd(a);
    for (let c = 0; c < a.length; c++) {
      const d = a[c];
      this.contains(d) && b.add(d);
    }
    return b;
  };
  k.ve = function(a) {
    const b = this.clone();
    b.Nc(a);
    return b;
  };
  k.T = function() {
    return this.j.T();
  };
  k.clone = function() {
    return new Fd(this);
  };
  k.equals = function(a) {
    return this.M() == Ad(a) && Hd(this, a);
  };
  var Hd = function(a, b) {
    const c = Ad(b);
    if (a.M() > c) return !1;
    !(b instanceof Fd) && c > 5 && (b = new Fd(b));
    return Ed(a, function(d) {
      const e = b;
      return e.contains && typeof e.contains === 'function'
        ? e.contains(d)
        : e.sc && typeof e.sc === 'function'
          ? e.sc(d)
          : za(e) || typeof e === 'string'
            ? db(e, d)
            : Hb(e, d);
    });
  };
  Fd.prototype.Rb = function() {
    return this.j.Rb(!1);
  };
  const ee = {};
  const Id = function(a, b, c) {
    pd.call(this);
    this.Ai = b;
    this.token = c;
    this.nb = [];
    this.Gf = new Fd();
    this.lb = 0;
    this.url = a;
  };
  A(Id, pd);
  y('ee.AbstractOverlay', Id);
  const Jd = function(a, b, c) {
    const d = 1 << c;
    let e = b.x % d;
    e < 0 && (e += d);
    return [a.Ai, c, e, b.y].join('/');
  };
  Id.prototype.Ge = function() {
    return this.nb.length;
  };
  const Kd = function(a) {
    Ka.call(this, 'tileevent');
    this.count = a;
  };
  A(Kd, Ka);
  const Ld = function() {};
  const Md = new Ld();
  function Nd(a) {
    return Object.assign({P: {}, sk: {}, keys: [], xa: {}, s: {}, L: {}}, a);
  }
  const C = function() {
    this.a = {};
  };
  C.prototype.f = function() {
    return {};
  };
  const D = function(a, b) {
    return a.a.hasOwnProperty(b) ? a.a[b] : null;
  };
  const F = function(a, b) {
    return a.a[b] != null;
  };
  function Od(a, b) {
    return D(b, a);
  }
  function Pd(a, b, c) {
    b[a] = c;
  }
  function Qd() {
    return {};
  }
  function Rd(a, b) {
    const c = new a();
    return b == null ? c : Sd(b, Td, Ud, Vd, a);
  }
  function Td(a, b) {
    return b[a];
  }
  function Ud(a, b, c) {
    b.a[a] = c;
  }
  function Vd(a) {
    if (a == null) throw Error('Cannot deserialize, target constructor was null.');
    return new a();
  }
  function Sd(a, b, c, d, e) {
    e = d(e);
    let f = Wd(a, e);
    const g = f.P || {};
    const h = f.s || {};
    const m = f.xa || {};
    let n = {};
    f = l(f.keys || []);
    for (let q = f.next(); !q.done; n = {lc: n.lc}, q = f.next()) {
      q = q.value;
      const w = b(q, a);
      if (w != null) {
        let z = void 0;
        g.hasOwnProperty(q)
          ? (z = Xd(w, b, c, d, !0, !0, g[q]))
          : h.hasOwnProperty(q)
            ? (z = Xd(w, b, c, d, !1, !0, h[q]))
            : m.hasOwnProperty(q)
              ? ((n.lc = m[q]),
                (z = n.lc.la
                  ? w.map(
                      (function(E) {
                        return function(M) {
                          return Yd(M, E.lc, b, c, d);
                        };
                      })(n)
                    )
                  : Yd(w, n.lc, b, c, d)))
              : (z = Array.isArray(w) ? Xd(w, b, c, d, !0, !1) : w instanceof Ld ? null : w);
        c(q, e, z);
      }
    }
    return e;
  }
  function Yd(a, b, c, d, e) {
    for (var f = {}, g = l(Object.keys(a)), h = g.next(); !h.done; h = g.next()) {
      h = h.value;
      const m = a[h];
      m != null && (f[h] = Xd(m, c, d, e, b.na, b.ma, b.ga));
    }
    return f;
  }
  function Xd(a, b, c, d, e, f, g) {
    if (f && g == null) throw Error('Cannot deserialize a reference object without a constructor.');
    return a == null
      ? a
      : e && f
        ? a.map(function(h) {
            return Sd(h, b, c, d, g);
          })
        : e && !f
          ? a.map(function(h) {
              return h;
            })
          : !e && f
            ? Sd(a, b, c, d, g)
            : a instanceof Ld
              ? null
              : typeof a === 'object'
                ? JSON.parse(JSON.stringify(a))
                : a;
  }
  function Wd(a, b) {
    if (b instanceof C) a = Nd(b.f());
    else if (a instanceof C) a = Nd(a.f());
    else throw Error('Cannot find ClassMetadata.');
    return a;
  }
  const Zd = function() {};
  Zd.prototype.w = function(a, b) {
    a = String(a);
    if (!b.test(a)) throw Error(`parameter [${a}] does not match pattern [${b.toString()}]`);
  };
  function $d(a) {
    const b = a.body instanceof C ? Sd(a.body, Od, Pd, Qd) : a.body;
    return {path: a.path, u: a.u, B: a.B, body: b, o: a.o};
  }
  function ae(a, b) {
    if (a == null) return null;
    a = a.tk(b);
    return a == null ? null : a;
  }
  const be = function(a, b) {
    this.U = a;
    this.ti = void 0 === b ? null : b;
  };
  p(be, Zd);
  const ce = function(a, b, c) {
    const d = ae(a.ti, b);
    if (d == null) return c;
    d.uk();
    return c.then(
      function(e) {
        d.wk(e);
        return e;
      },
      function(e) {
        d.vk(e);
        throw e;
      }
    );
  };
  const G = function(a, b) {
    const c = b.D || void 0;
    return ce(a, b, a.U.send($d(b), c));
  };
  function de(a) {
    if (a.o != null) {
      const b = {};
      let c;
      for (c in a.o) void 0 !== a.o[c] && (b[c] = a.o[c]);
      a.o = b;
    }
  }
  const fe = function() {};
  fe.prototype.send = function(a, b) {
    de(a);
    return (void 0).then(function(c) {
      return b ? Rd(b, c) : c;
    });
  };
  const ge = {
    get Oh() {
      return 'ADMIN_READ';
    },
    get Ph() {
      return 'DATA_READ';
    },
    get Qh() {
      return 'DATA_WRITE';
    },
    get Ij() {
      return 'LOG_TYPE_UNSPECIFIED';
    },
    values() {
      return ['LOG_TYPE_UNSPECIFIED', 'ADMIN_READ', 'DATA_WRITE', 'DATA_READ'];
    }
  };
  const he = {
    get Oh() {
      return 'ADMIN_READ';
    },
    get Vi() {
      return 'ADMIN_WRITE';
    },
    get Ph() {
      return 'DATA_READ';
    },
    get Qh() {
      return 'DATA_WRITE';
    },
    get Rj() {
      return 'PERMISSION_TYPE_UNSPECIFIED';
    },
    values() {
      return [
        'PERMISSION_TYPE_UNSPECIFIED',
        'ADMIN_READ',
        'ADMIN_WRITE',
        'DATA_READ',
        'DATA_WRITE'
      ];
    }
  };
  const ie = {
    get dj() {
      return 'CAPABILITY_GROUP_UNSPECIFIED';
    },
    get ej() {
      return 'CLOUD_ALPHA';
    },
    get oj() {
      return 'EXTERNAL';
    },
    get zj() {
      return 'INTERNAL';
    },
    get Ej() {
      return 'LIMITED';
    },
    get Sj() {
      return 'PREAUTHORIZED';
    },
    get Uj() {
      return 'PREVIEW';
    },
    get Vh() {
      return 'PUBLIC';
    },
    values() {
      return 'CAPABILITY_GROUP_UNSPECIFIED PUBLIC INTERNAL EXTERNAL LIMITED PREAUTHORIZED PREVIEW CLOUD_ALPHA'.split(
        ' '
      );
    }
  };
  const je = {
    get Ui() {
      return 'ADMIN_ACTIVITY';
    },
    get hj() {
      return 'DATA_ACCESS';
    },
    get kk() {
      return 'UNSPECIFIED_LOG_NAME';
    },
    values() {
      return ['UNSPECIFIED_LOG_NAME', 'ADMIN_ACTIVITY', 'DATA_ACCESS'];
    }
  };
  const ke = {
    get Yi() {
      return 'APPROVER';
    },
    get Zi() {
      return 'ATTRIBUTION';
    },
    get $i() {
      return 'AUTHORITY';
    },
    get fj() {
      return 'CREDENTIALS_TYPE';
    },
    get Bj() {
      return 'JUSTIFICATION_TYPE';
    },
    get Uh() {
      return 'NO_ATTR';
    },
    get Yj() {
      return 'SECURITY_REALM';
    },
    values() {
      return 'NO_ATTR AUTHORITY ATTRIBUTION SECURITY_REALM APPROVER JUSTIFICATION_TYPE CREDENTIALS_TYPE'.split(
        ' '
      );
    }
  };
  const le = {
    get mj() {
      return 'DISCHARGED';
    },
    get nj() {
      return 'EQUALS';
    },
    get vj() {
      return 'IN';
    },
    get Kj() {
      return 'NOT_EQUALS';
    },
    get Lj() {
      return 'NOT_IN';
    },
    get Oj() {
      return 'NO_OP';
    },
    values() {
      return 'NO_OP EQUALS NOT_EQUALS IN NOT_IN DISCHARGED'.split(' ');
    }
  };
  const me = {
    get Aj() {
      return 'IP';
    },
    get Jj() {
      return 'NAME';
    },
    get Uh() {
      return 'NO_ATTR';
    },
    get Wj() {
      return 'REGION';
    },
    get Zj() {
      return 'SERVICE';
    },
    values() {
      return ['NO_ATTR', 'REGION', 'SERVICE', 'NAME', 'IP'];
    }
  };
  const ne = {
    get Gj() {
      return 'LOG_FAIL_CLOSED';
    },
    get Hj() {
      return 'LOG_MODE_UNSPECIFIED';
    },
    values() {
      return ['LOG_MODE_UNSPECIFIED', 'LOG_FAIL_CLOSED'];
    }
  };
  const oe = {
    get qj() {
      return 'FOLDER';
    },
    get tj() {
      return 'IMAGE';
    },
    get uj() {
      return 'IMAGE_COLLECTION';
    },
    get ck() {
      return 'TABLE';
    },
    get gk() {
      return 'TYPE_UNSPECIFIED';
    },
    values() {
      return ['TYPE_UNSPECIFIED', 'IMAGE', 'IMAGE_COLLECTION', 'TABLE', 'FOLDER'];
    }
  };
  const pe = {
    get Sd() {
      return 'AUTO_JPEG_PNG';
    },
    get Td() {
      return 'GEO_TIFF';
    },
    get Ud() {
      return 'IMAGE_FILE_FORMAT_UNSPECIFIED';
    },
    get Vd() {
      return 'JPEG';
    },
    get Wd() {
      return 'MULTI_BAND_IMAGE_TILE';
    },
    get Xd() {
      return 'NPY';
    },
    get Yd() {
      return 'PNG';
    },
    get Zd() {
      return 'TF_RECORD_IMAGE';
    },
    values() {
      return 'IMAGE_FILE_FORMAT_UNSPECIFIED JPEG PNG AUTO_JPEG_PNG NPY GEO_TIFF TF_RECORD_IMAGE MULTI_BAND_IMAGE_TILE'.split(
        ' '
      );
    }
  };
  const qe = {
    get mk() {
      return 'V1';
    },
    get nk() {
      return 'V2';
    },
    get pk() {
      return 'VERSION_UNSPECIFIED';
    },
    values() {
      return ['VERSION_UNSPECIFIED', 'V1', 'V2'];
    }
  };
  const re = {
    get Sd() {
      return 'AUTO_JPEG_PNG';
    },
    get Td() {
      return 'GEO_TIFF';
    },
    get Ud() {
      return 'IMAGE_FILE_FORMAT_UNSPECIFIED';
    },
    get Vd() {
      return 'JPEG';
    },
    get Wd() {
      return 'MULTI_BAND_IMAGE_TILE';
    },
    get Xd() {
      return 'NPY';
    },
    get Yd() {
      return 'PNG';
    },
    get Zd() {
      return 'TF_RECORD_IMAGE';
    },
    values() {
      return 'IMAGE_FILE_FORMAT_UNSPECIFIED JPEG PNG AUTO_JPEG_PNG NPY GEO_TIFF TF_RECORD_IMAGE MULTI_BAND_IMAGE_TILE'.split(
        ' '
      );
    }
  };
  const se = {
    get sj() {
      return 'HORIZONTAL';
    },
    get Pj() {
      return 'ORIENTATION_UNSPECIFIED';
    },
    get qk() {
      return 'VERTICAL';
    },
    values() {
      return ['ORIENTATION_UNSPECIFIED', 'HORIZONTAL', 'VERTICAL'];
    }
  };
  const te = {
    get jj() {
      return 'DEFAULT_OBJECT_ACL';
    },
    get Vh() {
      return 'PUBLIC';
    },
    get fk() {
      return 'TILE_PERMISSIONS_UNSPECIFIED';
    },
    values() {
      return ['TILE_PERMISSIONS_UNSPECIFIED', 'PUBLIC', 'DEFAULT_OBJECT_ACL'];
    }
  };
  const ue = {
    get MAX() {
      return 'MAX';
    },
    get Wc() {
      return 'MEAN';
    },
    get MIN() {
      return 'MIN';
    },
    get Xc() {
      return 'MODE';
    },
    get Yc() {
      return 'PYRAMIDING_POLICY_UNSPECIFIED';
    },
    get Zc() {
      return 'SAMPLE';
    },
    values() {
      return 'PYRAMIDING_POLICY_UNSPECIFIED MEAN SAMPLE MIN MAX MODE'.split(' ');
    }
  };
  const ve = {
    get MAX() {
      return 'MAX';
    },
    get Wc() {
      return 'MEAN';
    },
    get MIN() {
      return 'MIN';
    },
    get Xc() {
      return 'MODE';
    },
    get Yc() {
      return 'PYRAMIDING_POLICY_UNSPECIFIED';
    },
    get Zc() {
      return 'SAMPLE';
    },
    values() {
      return 'PYRAMIDING_POLICY_UNSPECIFIED MEAN SAMPLE MIN MAX MODE'.split(' ');
    }
  };
  const we = {
    get MAX() {
      return 'MAX';
    },
    get Wc() {
      return 'MEAN';
    },
    get MIN() {
      return 'MIN';
    },
    get Xc() {
      return 'MODE';
    },
    get Yc() {
      return 'PYRAMIDING_POLICY_UNSPECIFIED';
    },
    get Zc() {
      return 'SAMPLE';
    },
    values() {
      return 'PYRAMIDING_POLICY_UNSPECIFIED MEAN SAMPLE MIN MAX MODE'.split(' ');
    }
  };
  const xe = {
    get Sd() {
      return 'AUTO_JPEG_PNG';
    },
    get Td() {
      return 'GEO_TIFF';
    },
    get Ud() {
      return 'IMAGE_FILE_FORMAT_UNSPECIFIED';
    },
    get Vd() {
      return 'JPEG';
    },
    get Wd() {
      return 'MULTI_BAND_IMAGE_TILE';
    },
    get Xd() {
      return 'NPY';
    },
    get Yd() {
      return 'PNG';
    },
    get Zd() {
      return 'TF_RECORD_IMAGE';
    },
    values() {
      return 'IMAGE_FILE_FORMAT_UNSPECIFIED JPEG PNG AUTO_JPEG_PNG NPY GEO_TIFF TF_RECORD_IMAGE MULTI_BAND_IMAGE_TILE'.split(
        ' '
      );
    }
  };
  const ye = {
    get MAX() {
      return 'MAX';
    },
    get Wc() {
      return 'MEAN';
    },
    get MIN() {
      return 'MIN';
    },
    get Xc() {
      return 'MODE';
    },
    get Yc() {
      return 'PYRAMIDING_POLICY_UNSPECIFIED';
    },
    get Zc() {
      return 'SAMPLE';
    },
    values() {
      return 'PYRAMIDING_POLICY_UNSPECIFIED MEAN SAMPLE MIN MAX MODE'.split(' ');
    }
  };
  const ze = {
    get bj() {
      return 'CANCELLED';
    },
    get cj() {
      return 'CANCELLING';
    },
    get pj() {
      return 'FAILED';
    },
    get Qj() {
      return 'PENDING';
    },
    get Xj() {
      return 'RUNNING';
    },
    get ak() {
      return 'STATE_UNSPECIFIED';
    },
    get bk() {
      return 'SUCCEEDED';
    },
    values() {
      return 'STATE_UNSPECIFIED PENDING RUNNING CANCELLING SUCCEEDED CANCELLED FAILED'.split(' ');
    }
  };
  const Ae = {
    get Rh() {
      return 'DOUBLE';
    },
    get FLOAT() {
      return 'FLOAT';
    },
    get INT() {
      return 'INT';
    },
    get Tj() {
      return 'PRECISION_UNSPECIFIED';
    },
    values() {
      return ['PRECISION_UNSPECIFIED', 'INT', 'FLOAT', 'DOUBLE'];
    }
  };
  const Be = {
    get Wi() {
      return 'ALLOW';
    },
    get Xi() {
      return 'ALLOW_WITH_LOG';
    },
    get kj() {
      return 'DENY';
    },
    get lj() {
      return 'DENY_WITH_LOG';
    },
    get Fj() {
      return 'LOG';
    },
    get Nj() {
      return 'NO_ACTION';
    },
    values() {
      return 'NO_ACTION ALLOW ALLOW_WITH_LOG DENY DENY_WITH_LOG LOG'.split(' ');
    }
  };
  const Ce = {
    get gj() {
      return 'CSV';
    },
    get rj() {
      return 'GEO_JSON';
    },
    get Cj() {
      return 'KML';
    },
    get Dj() {
      return 'KMZ';
    },
    get $j() {
      return 'SHP';
    },
    get dk() {
      return 'TABLE_FILE_FORMAT_UNSPECIFIED';
    },
    get ek() {
      return 'TF_RECORD_TABLE';
    },
    values() {
      return 'TABLE_FILE_FORMAT_UNSPECIFIED CSV GEO_JSON KML KMZ SHP TF_RECORD_TABLE'.split(' ');
    }
  };
  const De = {
    get Sd() {
      return 'AUTO_JPEG_PNG';
    },
    get Td() {
      return 'GEO_TIFF';
    },
    get Ud() {
      return 'IMAGE_FILE_FORMAT_UNSPECIFIED';
    },
    get Vd() {
      return 'JPEG';
    },
    get Wd() {
      return 'MULTI_BAND_IMAGE_TILE';
    },
    get Xd() {
      return 'NPY';
    },
    get Yd() {
      return 'PNG';
    },
    get Zd() {
      return 'TF_RECORD_IMAGE';
    },
    values() {
      return 'IMAGE_FILE_FORMAT_UNSPECIFIED JPEG PNG AUTO_JPEG_PNG NPY GEO_TIFF TF_RECORD_IMAGE MULTI_BAND_IMAGE_TILE'.split(
        ' '
      );
    }
  };
  const Ee = {
    get MAX() {
      return 'MAX';
    },
    get Wc() {
      return 'MEAN';
    },
    get MIN() {
      return 'MIN';
    },
    get Xc() {
      return 'MODE';
    },
    get Yc() {
      return 'PYRAMIDING_POLICY_UNSPECIFIED';
    },
    get Zc() {
      return 'SAMPLE';
    },
    values() {
      return 'PYRAMIDING_POLICY_UNSPECIFIED MEAN SAMPLE MIN MAX MODE'.split(' ');
    }
  };
  const Fe = {
    get ij() {
      return 'DATA_TYPE_UNSPECIFIED';
    },
    get Rh() {
      return 'DOUBLE';
    },
    get FLOAT() {
      return 'FLOAT';
    },
    get wj() {
      return 'INT16';
    },
    get xj() {
      return 'INT32';
    },
    get yj() {
      return 'INT8';
    },
    get hk() {
      return 'UINT16';
    },
    get ik() {
      return 'UINT32';
    },
    get jk() {
      return 'UINT8';
    },
    values() {
      return 'DATA_TYPE_UNSPECIFIED INT8 UINT8 INT16 UINT16 INT32 UINT32 FLOAT DOUBLE'.split(' ');
    }
  };
  const Ge = {
    get Sh() {
      return 'GIF';
    },
    get Th() {
      return 'MP4';
    },
    get $h() {
      return 'VIDEO_FILE_FORMAT_UNSPECIFIED';
    },
    get ai() {
      return 'VP9';
    },
    values() {
      return ['VIDEO_FILE_FORMAT_UNSPECIFIED', 'MP4', 'GIF', 'VP9'];
    }
  };
  const He = {
    get Sh() {
      return 'GIF';
    },
    get Th() {
      return 'MP4';
    },
    get $h() {
      return 'VIDEO_FILE_FORMAT_UNSPECIFIED';
    },
    get ai() {
      return 'VP9';
    },
    values() {
      return ['VIDEO_FILE_FORMAT_UNSPECIFIED', 'MP4', 'GIF', 'VP9'];
    }
  };
  const Ie = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.scaleX = a.qf == null ? null : a.qf;
    this.a.shearX = a.vf == null ? null : a.vf;
    this.a.translateX = a.Jf == null ? null : a.Jf;
    this.a.shearY = a.wf == null ? null : a.wf;
    this.a.scaleY = a.rf == null ? null : a.rf;
    this.a.translateY = a.Kf == null ? null : a.Kf;
  };
  p(Ie, C);
  Ie.prototype.f = function() {
    return {keys: 'scaleX scaleY shearX shearY translateX translateY'.split(' ')};
  };
  r.Object.defineProperties(Ie.prototype, {
    qf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'scaleX') ? D(this, 'scaleX') : null;
      },
      set(a) {
        this.a.scaleX = a;
      }
    },
    rf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'scaleY') ? D(this, 'scaleY') : null;
      },
      set(a) {
        this.a.scaleY = a;
      }
    },
    vf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'shearX') ? D(this, 'shearX') : null;
      },
      set(a) {
        this.a.shearX = a;
      }
    },
    wf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'shearY') ? D(this, 'shearY') : null;
      },
      set(a) {
        this.a.shearY = a;
      }
    },
    Jf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'translateX') ? D(this, 'translateX') : null;
      },
      set(a) {
        this.a.translateX = a;
      }
    },
    Kf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'translateY') ? D(this, 'translateY') : null;
      },
      set(a) {
        this.a.translateY = a;
      }
    }
  });
  const Je = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.name = a.name == null ? null : a.name;
    this.a.description = a.description == null ? null : a.description;
    this.a.returnType = a.pf == null ? null : a.pf;
    this.a.arguments = a.arguments == null ? null : a.arguments;
    this.a.deprecated = a.deprecated == null ? null : a.deprecated;
    this.a.deprecationReason = a.te == null ? null : a.te;
    this.a.hidden = a.hidden == null ? null : a.hidden;
    this.a.preview = a.preview == null ? null : a.preview;
  };
  p(Je, C);
  Je.prototype.f = function() {
    return {
      P: {arguments: Ke},
      keys: 'arguments deprecated deprecationReason description hidden name preview returnType'.split(
        ' '
      )
    };
  };
  r.Object.defineProperties(Je.prototype, {
    arguments: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'arguments') ? D(this, 'arguments') : null;
      },
      set(a) {
        this.a.arguments = a;
      }
    },
    deprecated: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'deprecated') ? D(this, 'deprecated') : null;
      },
      set(a) {
        this.a.deprecated = a;
      }
    },
    te: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'deprecationReason') ? D(this, 'deprecationReason') : null;
      },
      set(a) {
        this.a.deprecationReason = a;
      }
    },
    description: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'description') ? D(this, 'description') : null;
      },
      set(a) {
        this.a.description = a;
      }
    },
    hidden: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'hidden') ? D(this, 'hidden') : null;
      },
      set(a) {
        this.a.hidden = a;
      }
    },
    name: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'name') ? D(this, 'name') : null;
      },
      set(a) {
        this.a.name = a;
      }
    },
    preview: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'preview') ? D(this, 'preview') : null;
      },
      set(a) {
        this.a.preview = a;
      }
    },
    pf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'returnType') ? D(this, 'returnType') : null;
      },
      set(a) {
        this.a.returnType = a;
      }
    }
  });
  var Ke = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.argumentName = a.bd == null ? null : a.bd;
    this.a.type = a.type == null ? null : a.type;
    this.a.description = a.description == null ? null : a.description;
    this.a.optional = a.optional == null ? null : a.optional;
    this.a.defaultValue = a.defaultValue == null ? null : a.defaultValue;
  };
  p(Ke, C);
  Ke.prototype.f = function() {
    return {keys: ['argumentName', 'defaultValue', 'description', 'optional', 'type']};
  };
  r.Object.defineProperties(Ke.prototype, {
    bd: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'argumentName') ? D(this, 'argumentName') : null;
      },
      set(a) {
        this.a.argumentName = a;
      }
    },
    defaultValue: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'defaultValue') ? D(this, 'defaultValue') : null;
      },
      set(a) {
        this.a.defaultValue = a;
      }
    },
    description: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'description') ? D(this, 'description') : null;
      },
      set(a) {
        this.a.description = a;
      }
    },
    optional: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'optional') ? D(this, 'optional') : null;
      },
      set(a) {
        this.a.optional = a;
      }
    },
    type: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'type') ? D(this, 'type') : null;
      },
      set(a) {
        this.a.type = a;
      }
    }
  });
  const Le = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.values = a.values == null ? null : a.values;
  };
  p(Le, C);
  Le.prototype.f = function() {
    return {P: {values: Me}, keys: ['values']};
  };
  r.Object.defineProperties(Le.prototype, {
    values: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'values') ? D(this, 'values') : null;
      },
      set(a) {
        this.a.values = a;
      }
    }
  });
  const Ne = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.service = a.xh == null ? null : a.xh;
    this.a.exemptedMembers = a.wc == null ? null : a.wc;
    this.a.auditLogConfigs = a.Sf == null ? null : a.Sf;
  };
  p(Ne, C);
  Ne.prototype.f = function() {
    return {P: {auditLogConfigs: Oe}, keys: ['auditLogConfigs', 'exemptedMembers', 'service']};
  };
  r.Object.defineProperties(Ne.prototype, {
    Sf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'auditLogConfigs') ? D(this, 'auditLogConfigs') : null;
      },
      set(a) {
        this.a.auditLogConfigs = a;
      }
    },
    wc: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'exemptedMembers') ? D(this, 'exemptedMembers') : null;
      },
      set(a) {
        this.a.exemptedMembers = a;
      }
    },
    xh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'service') ? D(this, 'service') : null;
      },
      set(a) {
        this.a.service = a;
      }
    }
  });
  var Oe = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.logType = a.Zg == null ? null : a.Zg;
    this.a.exemptedMembers = a.wc == null ? null : a.wc;
    this.a.ignoreChildExemptions = a.Ng == null ? null : a.Ng;
  };
  p(Oe, C);
  Oe.prototype.f = function() {
    return {L: {logType: ge}, keys: ['exemptedMembers', 'ignoreChildExemptions', 'logType']};
  };
  r.Object.defineProperties(Oe.prototype, {
    wc: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'exemptedMembers') ? D(this, 'exemptedMembers') : null;
      },
      set(a) {
        this.a.exemptedMembers = a;
      }
    },
    Ng: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'ignoreChildExemptions') ? D(this, 'ignoreChildExemptions') : null;
      },
      set(a) {
        this.a.ignoreChildExemptions = a;
      }
    },
    Zg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'logType') ? D(this, 'logType') : null;
      },
      set(a) {
        this.a.logType = a;
      }
    }
  });
  const Pe = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.permissionType = a.jh == null ? null : a.jh;
  };
  p(Pe, C);
  Pe.prototype.f = function() {
    return {L: {permissionType: he}, keys: ['permissionType']};
  };
  r.Object.defineProperties(Pe.prototype, {
    jh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'permissionType') ? D(this, 'permissionType') : null;
      },
      set(a) {
        this.a.permissionType = a;
      }
    }
  });
  const Qe = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.role = a.fc == null ? null : a.fc;
    this.a.members = a.Fb == null ? null : a.Fb;
    this.a.condition = a.cg == null ? null : a.cg;
  };
  p(Qe, C);
  Qe.prototype.f = function() {
    return {keys: ['condition', 'members', 'role'], s: {condition: Re}};
  };
  r.Object.defineProperties(Qe.prototype, {
    cg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'condition') ? D(this, 'condition') : null;
      },
      set(a) {
        this.a.condition = a;
      }
    },
    Fb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'members') ? D(this, 'members') : null;
      },
      set(a) {
        this.a.members = a;
      }
    },
    fc: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'role') ? D(this, 'role') : null;
      },
      set(a) {
        this.a.role = a;
      }
    }
  });
  const Se = function() {
    this.a = {};
  };
  p(Se, C);
  Se.prototype.f = function() {
    return {keys: []};
  };
  const Te = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.capabilities = a.$f == null ? null : a.$f;
  };
  p(Te, C);
  Te.prototype.f = function() {
    return {L: {capabilities: ie}, keys: ['capabilities']};
  };
  r.Object.defineProperties(Te.prototype, {
    $f: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'capabilities') ? D(this, 'capabilities') : null;
      },
      set(a) {
        this.a.capabilities = a;
      }
    }
  });
  const Ue = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.logName = a.Yg == null ? null : a.Yg;
    this.a.authorizationLoggingOptions = a.Tf == null ? null : a.Tf;
  };
  p(Ue, C);
  Ue.prototype.f = function() {
    return {
      L: {logName: je},
      keys: ['authorizationLoggingOptions', 'logName'],
      s: {authorizationLoggingOptions: Pe}
    };
  };
  r.Object.defineProperties(Ue.prototype, {
    Tf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'authorizationLoggingOptions')
          ? D(this, 'authorizationLoggingOptions')
          : null;
      },
      set(a) {
        this.a.authorizationLoggingOptions = a;
      }
    },
    Yg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'logName') ? D(this, 'logName') : null;
      },
      set(a) {
        this.a.logName = a;
      }
    }
  });
  const Ve = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.expression = a.i == null ? null : a.i;
  };
  p(Ve, C);
  Ve.prototype.f = function() {
    return {keys: ['expression'], s: {expression: We}};
  };
  r.Object.defineProperties(Ve.prototype, {
    i: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'expression') ? D(this, 'expression') : null;
      },
      set(a) {
        this.a.expression = a;
      }
    }
  });
  const Xe = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.result = a.result == null ? null : a.result;
  };
  p(Xe, C);
  Xe.prototype.f = function() {
    return {keys: ['result']};
  };
  r.Object.defineProperties(Xe.prototype, {
    result: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'result') ? D(this, 'result') : null;
      },
      set(a) {
        this.a.result = a;
      }
    }
  });
  const Ye = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.iam = a.Jg == null ? null : a.Jg;
    this.a.sys = a.Eh == null ? null : a.Eh;
    this.a.svc = a.Dh == null ? null : a.Dh;
    this.a.op = a.hh == null ? null : a.hh;
    this.a.values = a.values == null ? null : a.values;
  };
  p(Ye, C);
  Ye.prototype.f = function() {
    return {L: {iam: ke, op: le, sys: me}, keys: ['iam', 'op', 'svc', 'sys', 'values']};
  };
  r.Object.defineProperties(Ye.prototype, {
    Jg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'iam') ? D(this, 'iam') : null;
      },
      set(a) {
        this.a.iam = a;
      }
    },
    hh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'op') ? D(this, 'op') : null;
      },
      set(a) {
        this.a.op = a;
      }
    },
    Dh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'svc') ? D(this, 'svc') : null;
      },
      set(a) {
        this.a.svc = a;
      }
    },
    Eh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'sys') ? D(this, 'sys') : null;
      },
      set(a) {
        this.a.sys = a;
      }
    },
    values: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'values') ? D(this, 'values') : null;
      },
      set(a) {
        this.a.values = a;
      }
    }
  });
  const Ze = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.destinationName = a.sb == null ? null : a.sb;
    this.a.overwrite = a.overwrite == null ? null : a.overwrite;
    this.a.bandIds = a.fa == null ? null : a.fa;
  };
  p(Ze, C);
  Ze.prototype.f = function() {
    return {keys: ['bandIds', 'destinationName', 'overwrite']};
  };
  r.Object.defineProperties(Ze.prototype, {
    fa: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'bandIds') ? D(this, 'bandIds') : null;
      },
      set(a) {
        this.a.bandIds = a;
      }
    },
    sb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'destinationName') ? D(this, 'destinationName') : null;
      },
      set(a) {
        this.a.destinationName = a;
      }
    },
    overwrite: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'overwrite') ? D(this, 'overwrite') : null;
      },
      set(a) {
        this.a.overwrite = a;
      }
    }
  });
  const $e = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.metric = a.$g == null ? null : a.$g;
    this.a.field = a.ug == null ? null : a.ug;
    this.a.customFields = a.lg == null ? null : a.lg;
  };
  p($e, C);
  $e.prototype.f = function() {
    return {P: {customFields: af}, keys: ['customFields', 'field', 'metric']};
  };
  r.Object.defineProperties($e.prototype, {
    lg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'customFields') ? D(this, 'customFields') : null;
      },
      set(a) {
        this.a.customFields = a;
      }
    },
    ug: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'field') ? D(this, 'field') : null;
      },
      set(a) {
        this.a.field = a;
      }
    },
    $g: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'metric') ? D(this, 'metric') : null;
      },
      set(a) {
        this.a.metric = a;
      }
    }
  });
  var af = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.name = a.name == null ? null : a.name;
    this.a.value = a.value == null ? null : a.value;
  };
  p(af, C);
  af.prototype.f = function() {
    return {keys: ['name', 'value']};
  };
  r.Object.defineProperties(af.prototype, {
    name: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'name') ? D(this, 'name') : null;
      },
      set(a) {
        this.a.name = a;
      }
    },
    value: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'value') ? D(this, 'value') : null;
      },
      set(a) {
        this.a.value = a;
      }
    }
  });
  const bf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.logMode = a.Xg == null ? null : a.Xg;
  };
  p(bf, C);
  bf.prototype.f = function() {
    return {L: {logMode: ne}, keys: ['logMode']};
  };
  r.Object.defineProperties(bf.prototype, {
    Xg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'logMode') ? D(this, 'logMode') : null;
      },
      set(a) {
        this.a.logMode = a;
      }
    }
  });
  const cf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.values = a.values == null ? null : a.values;
  };
  p(cf, C);
  cf.prototype.f = function() {
    return {keys: ['values'], xa: {values: {ga: Me, la: !1, ma: !0, na: !1}}};
  };
  r.Object.defineProperties(cf.prototype, {
    values: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'values') ? D(this, 'values') : null;
      },
      set(a) {
        this.a.values = a;
      }
    }
  });
  const df = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.min = a.min == null ? null : a.min;
    this.a.max = a.max == null ? null : a.max;
  };
  p(df, C);
  df.prototype.f = function() {
    return {keys: ['max', 'min']};
  };
  r.Object.defineProperties(df.prototype, {
    max: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'max') ? D(this, 'max') : null;
      },
      set(a) {
        this.a.max = a;
      }
    },
    min: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'min') ? D(this, 'min') : null;
      },
      set(a) {
        this.a.min = a;
      }
    }
  });
  const ef = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.folder = a.Ee == null ? null : a.Ee;
    this.a.filenamePrefix = a.vb == null ? null : a.vb;
  };
  p(ef, C);
  ef.prototype.f = function() {
    return {keys: ['filenamePrefix', 'folder']};
  };
  r.Object.defineProperties(ef.prototype, {
    vb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'filenamePrefix') ? D(this, 'filenamePrefix') : null;
      },
      set(a) {
        this.a.filenamePrefix = a;
      }
    },
    Ee: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'folder') ? D(this, 'folder') : null;
      },
      set(a) {
        this.a.folder = a;
      }
    }
  });
  const ff = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.type = a.type == null ? null : a.type;
    this.a.name = a.name == null ? null : a.name;
    this.a.id = a.id == null ? null : a.id;
    this.a.updateTime = a.Ia == null ? null : a.Ia;
    this.a.title = a.title == null ? null : a.title;
    this.a.description = a.description == null ? null : a.description;
    this.a.properties = a.properties == null ? null : a.properties;
    this.a.startTime = a.startTime == null ? null : a.startTime;
    this.a.endTime = a.endTime == null ? null : a.endTime;
    this.a.geometry = a.geometry == null ? null : a.geometry;
    this.a.bands = a.bands == null ? null : a.bands;
    this.a.sizeBytes = a.za == null ? null : a.za;
    this.a.quota = a.quota == null ? null : a.quota;
    this.a.tilestoreEntry = a.Ih == null ? null : a.Ih;
    this.a.expression = a.i == null ? null : a.i;
  };
  p(ff, C);
  ff.prototype.f = function() {
    return {
      P: {bands: gf},
      L: {type: oe},
      keys: 'bands description endTime expression geometry id name properties quota sizeBytes startTime tilestoreEntry title type updateTime'.split(
        ' '
      ),
      xa: {
        geometry: {ga: null, la: !1, ma: !1, na: !1},
        properties: {ga: null, la: !1, ma: !1, na: !1}
      },
      s: {expression: We, quota: hf, tilestoreEntry: jf}
    };
  };
  r.Object.defineProperties(ff.prototype, {
    bands: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'bands') ? D(this, 'bands') : null;
      },
      set(a) {
        this.a.bands = a;
      }
    },
    description: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'description') ? D(this, 'description') : null;
      },
      set(a) {
        this.a.description = a;
      }
    },
    endTime: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'endTime') ? D(this, 'endTime') : null;
      },
      set(a) {
        this.a.endTime = a;
      }
    },
    i: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'expression') ? D(this, 'expression') : null;
      },
      set(a) {
        this.a.expression = a;
      }
    },
    geometry: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'geometry') ? D(this, 'geometry') : null;
      },
      set(a) {
        this.a.geometry = a;
      }
    },
    id: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'id') ? D(this, 'id') : null;
      },
      set(a) {
        this.a.id = a;
      }
    },
    name: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'name') ? D(this, 'name') : null;
      },
      set(a) {
        this.a.name = a;
      }
    },
    properties: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'properties') ? D(this, 'properties') : null;
      },
      set(a) {
        this.a.properties = a;
      }
    },
    quota: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'quota') ? D(this, 'quota') : null;
      },
      set(a) {
        this.a.quota = a;
      }
    },
    za: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'sizeBytes') ? D(this, 'sizeBytes') : null;
      },
      set(a) {
        this.a.sizeBytes = a;
      }
    },
    startTime: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'startTime') ? D(this, 'startTime') : null;
      },
      set(a) {
        this.a.startTime = a;
      }
    },
    Ih: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tilestoreEntry') ? D(this, 'tilestoreEntry') : null;
      },
      set(a) {
        this.a.tilestoreEntry = a;
      }
    },
    title: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'title') ? D(this, 'title') : null;
      },
      set(a) {
        this.a.title = a;
      }
    },
    type: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'type') ? D(this, 'type') : null;
      },
      set(a) {
        this.a.type = a;
      }
    },
    Ia: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'updateTime') ? D(this, 'updateTime') : null;
      },
      set(a) {
        this.a.updateTime = a;
      }
    }
  });
  const kf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.name = a.name == null ? null : a.name;
  };
  p(kf, C);
  kf.prototype.f = function() {
    return {keys: ['name']};
  };
  r.Object.defineProperties(kf.prototype, {
    name: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'name') ? D(this, 'name') : null;
      },
      set(a) {
        this.a.name = a;
      }
    }
  });
  const lf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.name = a.name == null ? null : a.name;
    this.a.expression = a.i == null ? null : a.i;
    this.a.fileFormat = a.G == null ? null : a.G;
    this.a.bandIds = a.fa == null ? null : a.fa;
    this.a.visualizationOptions = a.Pb == null ? null : a.Pb;
  };
  p(lf, C);
  lf.prototype.f = function() {
    return {
      L: {fileFormat: pe},
      keys: ['bandIds', 'expression', 'fileFormat', 'name', 'visualizationOptions'],
      s: {expression: We, visualizationOptions: mf}
    };
  };
  r.Object.defineProperties(lf.prototype, {
    fa: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'bandIds') ? D(this, 'bandIds') : null;
      },
      set(a) {
        this.a.bandIds = a;
      }
    },
    i: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'expression') ? D(this, 'expression') : null;
      },
      set(a) {
        this.a.expression = a;
      }
    },
    G: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'fileFormat') ? D(this, 'fileFormat') : null;
      },
      set(a) {
        this.a.fileFormat = a;
      }
    },
    name: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'name') ? D(this, 'name') : null;
      },
      set(a) {
        this.a.name = a;
      }
    },
    Pb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'visualizationOptions') ? D(this, 'visualizationOptions') : null;
      },
      set(a) {
        this.a.visualizationOptions = a;
      }
    }
  });
  const nf = function() {
    this.a = {};
  };
  p(nf, C);
  nf.prototype.f = function() {
    return {keys: []};
  };
  const of = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.expression = a.i == null ? null : a.i;
    this.a.description = a.description == null ? null : a.description;
    this.a.fileExportOptions = a.ia == null ? null : a.ia;
    this.a.assetExportOptions = a.Ta == null ? null : a.Ta;
    this.a.maxPixels = a.Ye == null ? null : a.Ye;
    this.a.grid = a.K == null ? null : a.K;
    this.a.requestId = a.I == null ? null : a.I;
    this.a.maxWorkerCount = a.V == null ? null : a.V;
  };
  p(of, C);
  of.prototype.f = function() {
    return {
      keys: 'assetExportOptions description expression fileExportOptions grid maxPixels maxWorkerCount requestId'.split(
        ' '
      ),
      s: {assetExportOptions: pf, expression: We, fileExportOptions: qf, grid: rf}
    };
  };
  r.Object.defineProperties(of.prototype, {
    Ta: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'assetExportOptions') ? D(this, 'assetExportOptions') : null;
      },
      set(a) {
        this.a.assetExportOptions = a;
      }
    },
    description: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'description') ? D(this, 'description') : null;
      },
      set(a) {
        this.a.description = a;
      }
    },
    i: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'expression') ? D(this, 'expression') : null;
      },
      set(a) {
        this.a.expression = a;
      }
    },
    ia: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'fileExportOptions') ? D(this, 'fileExportOptions') : null;
      },
      set(a) {
        this.a.fileExportOptions = a;
      }
    },
    K: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'grid') ? D(this, 'grid') : null;
      },
      set(a) {
        this.a.grid = a;
      }
    },
    Ye: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxPixels') ? D(this, 'maxPixels') : null;
      },
      set(a) {
        this.a.maxPixels = a;
      }
    },
    V: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxWorkerCount') ? D(this, 'maxWorkerCount') : null;
      },
      set(a) {
        this.a.maxWorkerCount = a;
      }
    },
    I: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'requestId') ? D(this, 'requestId') : null;
      },
      set(a) {
        this.a.requestId = a;
      }
    }
  });
  const sf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.expression = a.i == null ? null : a.i;
    this.a.description = a.description == null ? null : a.description;
    this.a.tileOptions = a.Lb == null ? null : a.Lb;
    this.a.tileExportOptions = a.Kb == null ? null : a.Kb;
    this.a.requestId = a.I == null ? null : a.I;
    this.a.maxWorkerCount = a.V == null ? null : a.V;
  };
  p(sf, C);
  sf.prototype.f = function() {
    return {
      keys: 'description expression maxWorkerCount requestId tileExportOptions tileOptions'.split(
        ' '
      ),
      s: {expression: We, tileExportOptions: qf, tileOptions: tf}
    };
  };
  r.Object.defineProperties(sf.prototype, {
    description: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'description') ? D(this, 'description') : null;
      },
      set(a) {
        this.a.description = a;
      }
    },
    i: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'expression') ? D(this, 'expression') : null;
      },
      set(a) {
        this.a.expression = a;
      }
    },
    V: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxWorkerCount') ? D(this, 'maxWorkerCount') : null;
      },
      set(a) {
        this.a.maxWorkerCount = a;
      }
    },
    I: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'requestId') ? D(this, 'requestId') : null;
      },
      set(a) {
        this.a.requestId = a;
      }
    },
    Kb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tileExportOptions') ? D(this, 'tileExportOptions') : null;
      },
      set(a) {
        this.a.tileExportOptions = a;
      }
    },
    Lb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tileOptions') ? D(this, 'tileOptions') : null;
      },
      set(a) {
        this.a.tileOptions = a;
      }
    }
  });
  const uf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.expression = a.i == null ? null : a.i;
    this.a.description = a.description == null ? null : a.description;
    this.a.fileExportOptions = a.ia == null ? null : a.ia;
    this.a.assetExportOptions = a.Ta == null ? null : a.Ta;
    this.a.selectors = a.selectors == null ? null : a.selectors;
    this.a.maxErrorMeters = a.Db == null ? null : a.Db;
    this.a.requestId = a.I == null ? null : a.I;
    this.a.maxWorkerCount = a.V == null ? null : a.V;
  };
  p(uf, C);
  uf.prototype.f = function() {
    return {
      keys: 'assetExportOptions description expression fileExportOptions maxErrorMeters maxWorkerCount requestId selectors'.split(
        ' '
      ),
      s: {assetExportOptions: vf, expression: We, fileExportOptions: wf}
    };
  };
  r.Object.defineProperties(uf.prototype, {
    Ta: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'assetExportOptions') ? D(this, 'assetExportOptions') : null;
      },
      set(a) {
        this.a.assetExportOptions = a;
      }
    },
    description: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'description') ? D(this, 'description') : null;
      },
      set(a) {
        this.a.description = a;
      }
    },
    i: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'expression') ? D(this, 'expression') : null;
      },
      set(a) {
        this.a.expression = a;
      }
    },
    ia: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'fileExportOptions') ? D(this, 'fileExportOptions') : null;
      },
      set(a) {
        this.a.fileExportOptions = a;
      }
    },
    Db: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxErrorMeters') ? D(this, 'maxErrorMeters') : null;
      },
      set(a) {
        this.a.maxErrorMeters = a;
      }
    },
    V: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxWorkerCount') ? D(this, 'maxWorkerCount') : null;
      },
      set(a) {
        this.a.maxWorkerCount = a;
      }
    },
    I: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'requestId') ? D(this, 'requestId') : null;
      },
      set(a) {
        this.a.requestId = a;
      }
    },
    selectors: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'selectors') ? D(this, 'selectors') : null;
      },
      set(a) {
        this.a.selectors = a;
      }
    }
  });
  const xf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.expression = a.i == null ? null : a.i;
    this.a.description = a.description == null ? null : a.description;
    this.a.videoOptions = a.Ja == null ? null : a.Ja;
    this.a.tileOptions = a.Lb == null ? null : a.Lb;
    this.a.tileExportOptions = a.Kb == null ? null : a.Kb;
    this.a.requestId = a.I == null ? null : a.I;
    this.a.version = a.version == null ? null : a.version;
    this.a.maxWorkerCount = a.V == null ? null : a.V;
  };
  p(xf, C);
  xf.prototype.f = function() {
    return {
      L: {version: qe},
      keys: 'description expression maxWorkerCount requestId tileExportOptions tileOptions version videoOptions'.split(
        ' '
      ),
      s: {expression: We, tileExportOptions: yf, tileOptions: tf, videoOptions: zf}
    };
  };
  r.Object.defineProperties(xf.prototype, {
    description: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'description') ? D(this, 'description') : null;
      },
      set(a) {
        this.a.description = a;
      }
    },
    i: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'expression') ? D(this, 'expression') : null;
      },
      set(a) {
        this.a.expression = a;
      }
    },
    V: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxWorkerCount') ? D(this, 'maxWorkerCount') : null;
      },
      set(a) {
        this.a.maxWorkerCount = a;
      }
    },
    I: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'requestId') ? D(this, 'requestId') : null;
      },
      set(a) {
        this.a.requestId = a;
      }
    },
    Kb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tileExportOptions') ? D(this, 'tileExportOptions') : null;
      },
      set(a) {
        this.a.tileExportOptions = a;
      }
    },
    Lb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tileOptions') ? D(this, 'tileOptions') : null;
      },
      set(a) {
        this.a.tileOptions = a;
      }
    },
    version: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'version') ? D(this, 'version') : null;
      },
      set(a) {
        this.a.version = a;
      }
    },
    Ja: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'videoOptions') ? D(this, 'videoOptions') : null;
      },
      set(a) {
        this.a.videoOptions = a;
      }
    }
  });
  const Af = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.expression = a.i == null ? null : a.i;
    this.a.description = a.description == null ? null : a.description;
    this.a.videoOptions = a.Ja == null ? null : a.Ja;
    this.a.fileExportOptions = a.ia == null ? null : a.ia;
    this.a.requestId = a.I == null ? null : a.I;
    this.a.maxWorkerCount = a.V == null ? null : a.V;
  };
  p(Af, C);
  Af.prototype.f = function() {
    return {
      keys: 'description expression fileExportOptions maxWorkerCount requestId videoOptions'.split(
        ' '
      ),
      s: {expression: We, fileExportOptions: yf, videoOptions: zf}
    };
  };
  r.Object.defineProperties(Af.prototype, {
    description: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'description') ? D(this, 'description') : null;
      },
      set(a) {
        this.a.description = a;
      }
    },
    i: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'expression') ? D(this, 'expression') : null;
      },
      set(a) {
        this.a.expression = a;
      }
    },
    ia: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'fileExportOptions') ? D(this, 'fileExportOptions') : null;
      },
      set(a) {
        this.a.fileExportOptions = a;
      }
    },
    V: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxWorkerCount') ? D(this, 'maxWorkerCount') : null;
      },
      set(a) {
        this.a.maxWorkerCount = a;
      }
    },
    I: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'requestId') ? D(this, 'requestId') : null;
      },
      set(a) {
        this.a.requestId = a;
      }
    },
    Ja: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'videoOptions') ? D(this, 'videoOptions') : null;
      },
      set(a) {
        this.a.videoOptions = a;
      }
    }
  });
  var Re = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.expression = a.i == null ? null : a.i;
    this.a.title = a.title == null ? null : a.title;
    this.a.description = a.description == null ? null : a.description;
    this.a.location = a.location == null ? null : a.location;
  };
  p(Re, C);
  Re.prototype.f = function() {
    return {keys: ['description', 'expression', 'location', 'title']};
  };
  r.Object.defineProperties(Re.prototype, {
    description: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'description') ? D(this, 'description') : null;
      },
      set(a) {
        this.a.description = a;
      }
    },
    i: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'expression') ? D(this, 'expression') : null;
      },
      set(a) {
        this.a.expression = a;
      }
    },
    location: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'location') ? D(this, 'location') : null;
      },
      set(a) {
        this.a.location = a;
      }
    },
    title: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'title') ? D(this, 'title') : null;
      },
      set(a) {
        this.a.title = a;
      }
    }
  });
  var We = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.values = a.values == null ? null : a.values;
    this.a.result = a.result == null ? null : a.result;
  };
  p(We, C);
  We.prototype.f = function() {
    return {keys: ['result', 'values'], xa: {values: {ga: Me, la: !1, ma: !0, na: !1}}};
  };
  r.Object.defineProperties(We.prototype, {
    result: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'result') ? D(this, 'result') : null;
      },
      set(a) {
        this.a.result = a;
      }
    },
    values: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'values') ? D(this, 'values') : null;
      },
      set(a) {
        this.a.values = a;
      }
    }
  });
  const Bf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.name = a.name == null ? null : a.name;
    this.a.expression = a.i == null ? null : a.i;
    this.a.orientation = a.orientation == null ? null : a.orientation;
    this.a.fileFormat = a.G == null ? null : a.G;
    this.a.grid = a.K == null ? null : a.K;
  };
  p(Bf, C);
  Bf.prototype.f = function() {
    return {
      L: {fileFormat: re, orientation: se},
      keys: ['expression', 'fileFormat', 'grid', 'name', 'orientation'],
      s: {expression: We, grid: rf}
    };
  };
  r.Object.defineProperties(Bf.prototype, {
    i: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'expression') ? D(this, 'expression') : null;
      },
      set(a) {
        this.a.expression = a;
      }
    },
    G: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'fileFormat') ? D(this, 'fileFormat') : null;
      },
      set(a) {
        this.a.fileFormat = a;
      }
    },
    K: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'grid') ? D(this, 'grid') : null;
      },
      set(a) {
        this.a.grid = a;
      }
    },
    name: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'name') ? D(this, 'name') : null;
      },
      set(a) {
        this.a.name = a;
      }
    },
    orientation: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'orientation') ? D(this, 'orientation') : null;
      },
      set(a) {
        this.a.orientation = a;
      }
    }
  });
  var hf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.sizeBytes = a.za == null ? null : a.za;
    this.a.maxSizeBytes = a.Eb == null ? null : a.Eb;
    this.a.assetCount = a.de == null ? null : a.de;
    this.a.maxAssetCount = a.We == null ? null : a.We;
  };
  p(hf, C);
  hf.prototype.f = function() {
    return {keys: ['assetCount', 'maxAssetCount', 'maxSizeBytes', 'sizeBytes']};
  };
  r.Object.defineProperties(hf.prototype, {
    de: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'assetCount') ? D(this, 'assetCount') : null;
      },
      set(a) {
        this.a.assetCount = a;
      }
    },
    We: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxAssetCount') ? D(this, 'maxAssetCount') : null;
      },
      set(a) {
        this.a.maxAssetCount = a;
      }
    },
    Eb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxSizeBytes') ? D(this, 'maxSizeBytes') : null;
      },
      set(a) {
        this.a.maxSizeBytes = a;
      }
    },
    za: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'sizeBytes') ? D(this, 'sizeBytes') : null;
      },
      set(a) {
        this.a.sizeBytes = a;
      }
    }
  });
  const Cf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.argumentNames = a.nc == null ? null : a.nc;
    this.a.body = a.body == null ? null : a.body;
  };
  p(Cf, C);
  Cf.prototype.f = function() {
    return {keys: ['argumentNames', 'body']};
  };
  r.Object.defineProperties(Cf.prototype, {
    nc: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'argumentNames') ? D(this, 'argumentNames') : null;
      },
      set(a) {
        this.a.argumentNames = a;
      }
    },
    body: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'body') ? D(this, 'body') : null;
      },
      set(a) {
        this.a.body = a;
      }
    }
  });
  const Df = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.functionName = a.functionName == null ? null : a.functionName;
    this.a.functionReference = a.hb == null ? null : a.hb;
    this.a.arguments = a.arguments == null ? null : a.arguments;
  };
  p(Df, C);
  Df.prototype.f = function() {
    return {
      keys: ['arguments', 'functionName', 'functionReference'],
      xa: {arguments: {ga: Me, la: !1, ma: !0, na: !1}}
    };
  };
  r.Object.defineProperties(Df.prototype, {
    arguments: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'arguments') ? D(this, 'arguments') : null;
      },
      set(a) {
        this.a.arguments = a;
      }
    },
    functionName: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'functionName') ? D(this, 'functionName') : null;
      },
      set(a) {
        this.a.functionName = a;
      }
    },
    hb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'functionReference') ? D(this, 'functionReference') : null;
      },
      set(a) {
        this.a.functionReference = a;
      }
    }
  });
  const Ef = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.bucket = a.he == null ? null : a.he;
    this.a.filenamePrefix = a.vb == null ? null : a.vb;
    this.a.permissions = a.permissions == null ? null : a.permissions;
    this.a.bucketCorsUris = a.ie == null ? null : a.ie;
  };
  p(Ef, C);
  Ef.prototype.f = function() {
    return {
      L: {permissions: te},
      keys: ['bucket', 'bucketCorsUris', 'filenamePrefix', 'permissions']
    };
  };
  r.Object.defineProperties(Ef.prototype, {
    he: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'bucket') ? D(this, 'bucket') : null;
      },
      set(a) {
        this.a.bucket = a;
      }
    },
    ie: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'bucketCorsUris') ? D(this, 'bucketCorsUris') : null;
      },
      set(a) {
        this.a.bucketCorsUris = a;
      }
    },
    vb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'filenamePrefix') ? D(this, 'filenamePrefix') : null;
      },
      set(a) {
        this.a.filenamePrefix = a;
      }
    },
    permissions: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'permissions') ? D(this, 'permissions') : null;
      },
      set(a) {
        this.a.permissions = a;
      }
    }
  });
  r.Object.defineProperties(Ef, {
    Permissions: {
      configurable: !0,
      enumerable: !0,
      get() {
        return te;
      }
    }
  });
  const Ff = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.cloudOptimized = a.le == null ? null : a.le;
    this.a.tileDimensions = a.Ha == null ? null : a.Ha;
    this.a.skipEmptyFiles = a.yf == null ? null : a.yf;
  };
  p(Ff, C);
  Ff.prototype.f = function() {
    return {keys: ['cloudOptimized', 'skipEmptyFiles', 'tileDimensions'], s: {tileDimensions: Gf}};
  };
  r.Object.defineProperties(Ff.prototype, {
    le: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'cloudOptimized') ? D(this, 'cloudOptimized') : null;
      },
      set(a) {
        this.a.cloudOptimized = a;
      }
    },
    yf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'skipEmptyFiles') ? D(this, 'skipEmptyFiles') : null;
      },
      set(a) {
        this.a.skipEmptyFiles = a;
      }
    },
    Ha: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tileDimensions') ? D(this, 'tileDimensions') : null;
      },
      set(a) {
        this.a.tileDimensions = a;
      }
    }
  });
  const Hf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.options = a.options == null ? null : a.options;
  };
  p(Hf, C);
  Hf.prototype.f = function() {
    return {keys: ['options'], s: {options: If}};
  };
  r.Object.defineProperties(Hf.prototype, {
    options: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'options') ? D(this, 'options') : null;
      },
      set(a) {
        this.a.options = a;
      }
    }
  });
  var If = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.requestedPolicyVersion = a.qh == null ? null : a.qh;
  };
  p(If, C);
  If.prototype.f = function() {
    return {keys: ['requestedPolicyVersion']};
  };
  r.Object.defineProperties(If.prototype, {
    qh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'requestedPolicyVersion') ? D(this, 'requestedPolicyVersion') : null;
      },
      set(a) {
        this.a.requestedPolicyVersion = a;
      }
    }
  });
  var Gf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.width = a.width == null ? null : a.width;
    this.a.height = a.height == null ? null : a.height;
  };
  p(Gf, C);
  Gf.prototype.f = function() {
    return {keys: ['height', 'width']};
  };
  r.Object.defineProperties(Gf.prototype, {
    height: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'height') ? D(this, 'height') : null;
      },
      set(a) {
        this.a.height = a;
      }
    },
    width: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'width') ? D(this, 'width') : null;
      },
      set(a) {
        this.a.width = a;
      }
    }
  });
  const Jf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.x = a.x == null ? null : a.x;
    this.a.y = a.y == null ? null : a.y;
  };
  p(Jf, C);
  Jf.prototype.f = function() {
    return {keys: ['x', 'y']};
  };
  r.Object.defineProperties(Jf.prototype, {
    x: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'x') ? D(this, 'x') : null;
      },
      set(a) {
        this.a.x = a;
      }
    },
    y: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'y') ? D(this, 'y') : null;
      },
      set(a) {
        this.a.y = a;
      }
    }
  });
  const Kf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.name = a.name == null ? null : a.name;
    this.a.id = a.id == null ? null : a.id;
    this.a.updateTime = a.Ia == null ? null : a.Ia;
    this.a.title = a.title == null ? null : a.title;
    this.a.description = a.description == null ? null : a.description;
    this.a.properties = a.properties == null ? null : a.properties;
    this.a.startTime = a.startTime == null ? null : a.startTime;
    this.a.endTime = a.endTime == null ? null : a.endTime;
    this.a.geometry = a.geometry == null ? null : a.geometry;
    this.a.bands = a.bands == null ? null : a.bands;
    this.a.sizeBytes = a.za == null ? null : a.za;
  };
  p(Kf, C);
  Kf.prototype.f = function() {
    return {
      P: {bands: gf},
      keys: 'bands description endTime geometry id name properties sizeBytes startTime title updateTime'.split(
        ' '
      ),
      xa: {
        geometry: {ga: null, la: !1, ma: !1, na: !1},
        properties: {ga: null, la: !1, ma: !1, na: !1}
      }
    };
  };
  r.Object.defineProperties(Kf.prototype, {
    bands: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'bands') ? D(this, 'bands') : null;
      },
      set(a) {
        this.a.bands = a;
      }
    },
    description: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'description') ? D(this, 'description') : null;
      },
      set(a) {
        this.a.description = a;
      }
    },
    endTime: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'endTime') ? D(this, 'endTime') : null;
      },
      set(a) {
        this.a.endTime = a;
      }
    },
    geometry: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'geometry') ? D(this, 'geometry') : null;
      },
      set(a) {
        this.a.geometry = a;
      }
    },
    id: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'id') ? D(this, 'id') : null;
      },
      set(a) {
        this.a.id = a;
      }
    },
    name: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'name') ? D(this, 'name') : null;
      },
      set(a) {
        this.a.name = a;
      }
    },
    properties: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'properties') ? D(this, 'properties') : null;
      },
      set(a) {
        this.a.properties = a;
      }
    },
    za: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'sizeBytes') ? D(this, 'sizeBytes') : null;
      },
      set(a) {
        this.a.sizeBytes = a;
      }
    },
    startTime: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'startTime') ? D(this, 'startTime') : null;
      },
      set(a) {
        this.a.startTime = a;
      }
    },
    title: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'title') ? D(this, 'title') : null;
      },
      set(a) {
        this.a.title = a;
      }
    },
    Ia: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'updateTime') ? D(this, 'updateTime') : null;
      },
      set(a) {
        this.a.updateTime = a;
      }
    }
  });
  var pf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.earthEngineDestination = a.ub == null ? null : a.ub;
    this.a.pyramidingPolicy = a.pyramidingPolicy == null ? null : a.pyramidingPolicy;
    this.a.pyramidingPolicyOverrides = a.jf == null ? null : a.jf;
    this.a.tileSize = a.tileSize == null ? null : a.tileSize;
  };
  p(pf, C);
  pf.prototype.f = function() {
    return {
      L: {pyramidingPolicy: ue, pyramidingPolicyOverrides: ve},
      keys: ['earthEngineDestination', 'pyramidingPolicy', 'pyramidingPolicyOverrides', 'tileSize'],
      xa: {pyramidingPolicyOverrides: {ga: null, la: !1, ma: !1, na: !1}},
      s: {earthEngineDestination: kf}
    };
  };
  r.Object.defineProperties(pf.prototype, {
    ub: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'earthEngineDestination') ? D(this, 'earthEngineDestination') : null;
      },
      set(a) {
        this.a.earthEngineDestination = a;
      }
    },
    pyramidingPolicy: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'pyramidingPolicy') ? D(this, 'pyramidingPolicy') : null;
      },
      set(a) {
        this.a.pyramidingPolicy = a;
      }
    },
    jf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'pyramidingPolicyOverrides') ? D(this, 'pyramidingPolicyOverrides') : null;
      },
      set(a) {
        this.a.pyramidingPolicyOverrides = a;
      }
    },
    tileSize: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tileSize') ? D(this, 'tileSize') : null;
      },
      set(a) {
        this.a.tileSize = a;
      }
    }
  });
  var gf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.id = a.id == null ? null : a.id;
    this.a.dataType = a.dataType == null ? null : a.dataType;
    this.a.grid = a.K == null ? null : a.K;
    this.a.pyramidingPolicy = a.pyramidingPolicy == null ? null : a.pyramidingPolicy;
    this.a.tilesets = a.tilesets == null ? null : a.tilesets;
    this.a.missingData = a.missingData == null ? null : a.missingData;
  };
  p(gf, C);
  gf.prototype.f = function() {
    return {
      P: {tilesets: Lf},
      L: {pyramidingPolicy: we},
      keys: 'dataType grid id missingData pyramidingPolicy tilesets'.split(' '),
      s: {dataType: Mf, grid: rf, missingData: Nf}
    };
  };
  r.Object.defineProperties(gf.prototype, {
    dataType: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'dataType') ? D(this, 'dataType') : null;
      },
      set(a) {
        this.a.dataType = a;
      }
    },
    K: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'grid') ? D(this, 'grid') : null;
      },
      set(a) {
        this.a.grid = a;
      }
    },
    id: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'id') ? D(this, 'id') : null;
      },
      set(a) {
        this.a.id = a;
      }
    },
    missingData: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'missingData') ? D(this, 'missingData') : null;
      },
      set(a) {
        this.a.missingData = a;
      }
    },
    pyramidingPolicy: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'pyramidingPolicy') ? D(this, 'pyramidingPolicy') : null;
      },
      set(a) {
        this.a.pyramidingPolicy = a;
      }
    },
    tilesets: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tilesets') ? D(this, 'tilesets') : null;
      },
      set(a) {
        this.a.tilesets = a;
      }
    }
  });
  var qf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.fileFormat = a.G == null ? null : a.G;
    this.a.driveDestination = a.ha == null ? null : a.ha;
    this.a.gcsDestination = a.ja == null ? null : a.ja;
    this.a.geoTiffOptions = a.kd == null ? null : a.kd;
    this.a.tfRecordOptions = a.Gd == null ? null : a.Gd;
  };
  p(qf, C);
  qf.prototype.f = function() {
    return {
      L: {fileFormat: xe},
      keys: [
        'driveDestination',
        'fileFormat',
        'gcsDestination',
        'geoTiffOptions',
        'tfRecordOptions'
      ],
      s: {driveDestination: ef, gcsDestination: Ef, geoTiffOptions: Ff, tfRecordOptions: Of}
    };
  };
  r.Object.defineProperties(qf.prototype, {
    ha: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'driveDestination') ? D(this, 'driveDestination') : null;
      },
      set(a) {
        this.a.driveDestination = a;
      }
    },
    G: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'fileFormat') ? D(this, 'fileFormat') : null;
      },
      set(a) {
        this.a.fileFormat = a;
      }
    },
    ja: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'gcsDestination') ? D(this, 'gcsDestination') : null;
      },
      set(a) {
        this.a.gcsDestination = a;
      }
    },
    kd: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'geoTiffOptions') ? D(this, 'geoTiffOptions') : null;
      },
      set(a) {
        this.a.geoTiffOptions = a;
      }
    },
    Gd: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tfRecordOptions') ? D(this, 'tfRecordOptions') : null;
      },
      set(a) {
        this.a.tfRecordOptions = a;
      }
    }
  });
  const Pf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.name = a.name == null ? null : a.name;
    this.a.properties = a.properties == null ? null : a.properties;
    this.a.uriPrefix = a.Tc == null ? null : a.Tc;
    this.a.tilesets = a.tilesets == null ? null : a.tilesets;
    this.a.bands = a.bands == null ? null : a.bands;
    this.a.maskBands = a.Ve == null ? null : a.Ve;
    this.a.footprint = a.Bg == null ? null : a.Bg;
    this.a.missingData = a.missingData == null ? null : a.missingData;
    this.a.pyramidingPolicy = a.pyramidingPolicy == null ? null : a.pyramidingPolicy;
    this.a.startTime = a.startTime == null ? null : a.startTime;
    this.a.endTime = a.endTime == null ? null : a.endTime;
  };
  p(Pf, C);
  Pf.prototype.f = function() {
    return {
      P: {bands: Qf, maskBands: Rf, tilesets: Sf},
      L: {pyramidingPolicy: ye},
      keys: 'bands endTime footprint maskBands missingData name properties pyramidingPolicy startTime tilesets uriPrefix'.split(
        ' '
      ),
      xa: {properties: {ga: null, la: !1, ma: !1, na: !1}},
      s: {footprint: Tf, missingData: Nf}
    };
  };
  r.Object.defineProperties(Pf.prototype, {
    bands: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'bands') ? D(this, 'bands') : null;
      },
      set(a) {
        this.a.bands = a;
      }
    },
    endTime: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'endTime') ? D(this, 'endTime') : null;
      },
      set(a) {
        this.a.endTime = a;
      }
    },
    Bg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'footprint') ? D(this, 'footprint') : null;
      },
      set(a) {
        this.a.footprint = a;
      }
    },
    Ve: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maskBands') ? D(this, 'maskBands') : null;
      },
      set(a) {
        this.a.maskBands = a;
      }
    },
    missingData: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'missingData') ? D(this, 'missingData') : null;
      },
      set(a) {
        this.a.missingData = a;
      }
    },
    name: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'name') ? D(this, 'name') : null;
      },
      set(a) {
        this.a.name = a;
      }
    },
    properties: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'properties') ? D(this, 'properties') : null;
      },
      set(a) {
        this.a.properties = a;
      }
    },
    pyramidingPolicy: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'pyramidingPolicy') ? D(this, 'pyramidingPolicy') : null;
      },
      set(a) {
        this.a.pyramidingPolicy = a;
      }
    },
    startTime: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'startTime') ? D(this, 'startTime') : null;
      },
      set(a) {
        this.a.startTime = a;
      }
    },
    tilesets: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tilesets') ? D(this, 'tilesets') : null;
      },
      set(a) {
        this.a.tilesets = a;
      }
    },
    Tc: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'uriPrefix') ? D(this, 'uriPrefix') : null;
      },
      set(a) {
        this.a.uriPrefix = a;
      }
    }
  });
  const Uf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.uris = a.Nb == null ? null : a.Nb;
    this.a.affineTransform = a.ob == null ? null : a.ob;
  };
  p(Uf, C);
  Uf.prototype.f = function() {
    return {keys: ['affineTransform', 'uris'], s: {affineTransform: Ie}};
  };
  r.Object.defineProperties(Uf.prototype, {
    ob: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'affineTransform') ? D(this, 'affineTransform') : null;
      },
      set(a) {
        this.a.affineTransform = a;
      }
    },
    Nb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'uris') ? D(this, 'uris') : null;
      },
      set(a) {
        this.a.uris = a;
      }
    }
  });
  const Vf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.imageManifest = a.Le == null ? null : a.Le;
    this.a.description = a.description == null ? null : a.description;
    this.a.overwrite = a.overwrite == null ? null : a.overwrite;
    this.a.requestId = a.I == null ? null : a.I;
  };
  p(Vf, C);
  Vf.prototype.f = function() {
    return {
      keys: ['description', 'imageManifest', 'overwrite', 'requestId'],
      s: {imageManifest: Pf}
    };
  };
  r.Object.defineProperties(Vf.prototype, {
    description: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'description') ? D(this, 'description') : null;
      },
      set(a) {
        this.a.description = a;
      }
    },
    Le: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'imageManifest') ? D(this, 'imageManifest') : null;
      },
      set(a) {
        this.a.imageManifest = a;
      }
    },
    overwrite: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'overwrite') ? D(this, 'overwrite') : null;
      },
      set(a) {
        this.a.overwrite = a;
      }
    },
    I: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'requestId') ? D(this, 'requestId') : null;
      },
      set(a) {
        this.a.requestId = a;
      }
    }
  });
  const Wf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.tableManifest = a.Ef == null ? null : a.Ef;
    this.a.description = a.description == null ? null : a.description;
    this.a.overwrite = a.overwrite == null ? null : a.overwrite;
    this.a.requestId = a.I == null ? null : a.I;
  };
  p(Wf, C);
  Wf.prototype.f = function() {
    return {
      keys: ['description', 'overwrite', 'requestId', 'tableManifest'],
      s: {tableManifest: Xf}
    };
  };
  r.Object.defineProperties(Wf.prototype, {
    description: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'description') ? D(this, 'description') : null;
      },
      set(a) {
        this.a.description = a;
      }
    },
    overwrite: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'overwrite') ? D(this, 'overwrite') : null;
      },
      set(a) {
        this.a.overwrite = a;
      }
    },
    I: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'requestId') ? D(this, 'requestId') : null;
      },
      set(a) {
        this.a.requestId = a;
      }
    },
    Ef: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tableManifest') ? D(this, 'tableManifest') : null;
      },
      set(a) {
        this.a.tableManifest = a;
      }
    }
  });
  const Yf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.algorithms = a.mc == null ? null : a.mc;
  };
  p(Yf, C);
  Yf.prototype.f = function() {
    return {P: {algorithms: Je}, keys: ['algorithms']};
  };
  r.Object.defineProperties(Yf.prototype, {
    mc: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'algorithms') ? D(this, 'algorithms') : null;
      },
      set(a) {
        this.a.algorithms = a;
      }
    }
  });
  const Zf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.assets = a.S == null ? null : a.S;
    this.a.nextPageToken = a.nextPageToken == null ? null : a.nextPageToken;
  };
  p(Zf, C);
  Zf.prototype.f = function() {
    return {P: {assets: ff}, keys: ['assets', 'nextPageToken']};
  };
  r.Object.defineProperties(Zf.prototype, {
    S: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'assets') ? D(this, 'assets') : null;
      },
      set(a) {
        this.a.assets = a;
      }
    },
    nextPageToken: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'nextPageToken') ? D(this, 'nextPageToken') : null;
      },
      set(a) {
        this.a.nextPageToken = a;
      }
    }
  });
  const $f = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.images = a.images == null ? null : a.images;
    this.a.nextPageToken = a.nextPageToken == null ? null : a.nextPageToken;
  };
  p($f, C);
  $f.prototype.f = function() {
    return {P: {images: Kf}, keys: ['images', 'nextPageToken']};
  };
  r.Object.defineProperties($f.prototype, {
    images: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'images') ? D(this, 'images') : null;
      },
      set(a) {
        this.a.images = a;
      }
    },
    nextPageToken: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'nextPageToken') ? D(this, 'nextPageToken') : null;
      },
      set(a) {
        this.a.nextPageToken = a;
      }
    }
  });
  const ag = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.operations = a.Fa == null ? null : a.Fa;
    this.a.nextPageToken = a.nextPageToken == null ? null : a.nextPageToken;
  };
  p(ag, C);
  ag.prototype.f = function() {
    return {P: {operations: bg}, keys: ['nextPageToken', 'operations']};
  };
  r.Object.defineProperties(ag.prototype, {
    nextPageToken: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'nextPageToken') ? D(this, 'nextPageToken') : null;
      },
      set(a) {
        this.a.nextPageToken = a;
      }
    },
    Fa: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'operations') ? D(this, 'operations') : null;
      },
      set(a) {
        this.a.operations = a;
      }
    }
  });
  const cg = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.counter = a.gg == null ? null : a.gg;
    this.a.dataAccess = a.mg == null ? null : a.mg;
    this.a.cloudAudit = a.bg == null ? null : a.bg;
  };
  p(cg, C);
  cg.prototype.f = function() {
    return {
      keys: ['cloudAudit', 'counter', 'dataAccess'],
      s: {cloudAudit: Ue, counter: $e, dataAccess: bf}
    };
  };
  r.Object.defineProperties(cg.prototype, {
    bg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'cloudAudit') ? D(this, 'cloudAudit') : null;
      },
      set(a) {
        this.a.cloudAudit = a;
      }
    },
    gg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'counter') ? D(this, 'counter') : null;
      },
      set(a) {
        this.a.counter = a;
      }
    },
    mg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'dataAccess') ? D(this, 'dataAccess') : null;
      },
      set(a) {
        this.a.dataAccess = a;
      }
    }
  });
  var Nf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.values = a.values == null ? null : a.values;
  };
  p(Nf, C);
  Nf.prototype.f = function() {
    return {keys: ['values']};
  };
  r.Object.defineProperties(Nf.prototype, {
    values: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'values') ? D(this, 'values') : null;
      },
      set(a) {
        this.a.values = a;
      }
    }
  });
  const dg = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.destinationName = a.sb == null ? null : a.sb;
  };
  p(dg, C);
  dg.prototype.f = function() {
    return {keys: ['destinationName']};
  };
  r.Object.defineProperties(dg.prototype, {
    sb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'destinationName') ? D(this, 'destinationName') : null;
      },
      set(a) {
        this.a.destinationName = a;
      }
    }
  });
  var bg = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.name = a.name == null ? null : a.name;
    this.a.metadata = a.Ze == null ? null : a.Ze;
    this.a.done = a.done == null ? null : a.done;
    this.a.error = a.error == null ? null : a.error;
    this.a.response = a.response == null ? null : a.response;
  };
  p(bg, C);
  bg.prototype.f = function() {
    return {
      keys: ['done', 'error', 'metadata', 'name', 'response'],
      xa: {
        metadata: {ga: null, la: !1, ma: !1, na: !1},
        response: {ga: null, la: !1, ma: !1, na: !1}
      },
      s: {error: eg}
    };
  };
  r.Object.defineProperties(bg.prototype, {
    done: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'done') ? D(this, 'done') : null;
      },
      set(a) {
        this.a.done = a;
      }
    },
    error: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'error') ? D(this, 'error') : null;
      },
      set(a) {
        this.a.error = a;
      }
    },
    Ze: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'metadata') ? D(this, 'metadata') : null;
      },
      set(a) {
        this.a.metadata = a;
      }
    },
    name: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'name') ? D(this, 'name') : null;
      },
      set(a) {
        this.a.name = a;
      }
    },
    response: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'response') ? D(this, 'response') : null;
      },
      set(a) {
        this.a.response = a;
      }
    }
  });
  const fg = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.state = a.state == null ? null : a.state;
    this.a.description = a.description == null ? null : a.description;
    this.a.type = a.type == null ? null : a.type;
    this.a.priority = a.priority == null ? null : a.priority;
    this.a.createTime = a.re == null ? null : a.re;
    this.a.updateTime = a.Ia == null ? null : a.Ia;
    this.a.startTime = a.startTime == null ? null : a.startTime;
    this.a.endTime = a.endTime == null ? null : a.endTime;
    this.a.scriptUri = a.sf == null ? null : a.sf;
    this.a.destinationUris = a.ue == null ? null : a.ue;
  };
  p(fg, C);
  fg.prototype.f = function() {
    return {
      L: {state: ze},
      keys: 'createTime description destinationUris endTime priority scriptUri startTime state type updateTime'.split(
        ' '
      )
    };
  };
  r.Object.defineProperties(fg.prototype, {
    re: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'createTime') ? D(this, 'createTime') : null;
      },
      set(a) {
        this.a.createTime = a;
      }
    },
    description: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'description') ? D(this, 'description') : null;
      },
      set(a) {
        this.a.description = a;
      }
    },
    ue: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'destinationUris') ? D(this, 'destinationUris') : null;
      },
      set(a) {
        this.a.destinationUris = a;
      }
    },
    endTime: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'endTime') ? D(this, 'endTime') : null;
      },
      set(a) {
        this.a.endTime = a;
      }
    },
    priority: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'priority') ? D(this, 'priority') : null;
      },
      set(a) {
        this.a.priority = a;
      }
    },
    sf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'scriptUri') ? D(this, 'scriptUri') : null;
      },
      set(a) {
        this.a.scriptUri = a;
      }
    },
    startTime: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'startTime') ? D(this, 'startTime') : null;
      },
      set(a) {
        this.a.startTime = a;
      }
    },
    state: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'state') ? D(this, 'state') : null;
      },
      set(a) {
        this.a.state = a;
      }
    },
    type: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'type') ? D(this, 'type') : null;
      },
      set(a) {
        this.a.type = a;
      }
    },
    Ia: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'updateTime') ? D(this, 'updateTime') : null;
      },
      set(a) {
        this.a.updateTime = a;
      }
    }
  });
  var Mf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.precision = a.precision == null ? null : a.precision;
    this.a.range = a.Mc == null ? null : a.Mc;
    this.a.dimensionsCount = a.rg == null ? null : a.rg;
  };
  p(Mf, C);
  Mf.prototype.f = function() {
    return {L: {precision: Ae}, keys: ['dimensionsCount', 'precision', 'range'], s: {range: df}};
  };
  r.Object.defineProperties(Mf.prototype, {
    rg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'dimensionsCount') ? D(this, 'dimensionsCount') : null;
      },
      set(a) {
        this.a.dimensionsCount = a;
      }
    },
    precision: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'precision') ? D(this, 'precision') : null;
      },
      set(a) {
        this.a.precision = a;
      }
    },
    Mc: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'range') ? D(this, 'range') : null;
      },
      set(a) {
        this.a.range = a;
      }
    }
  });
  var Tf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.points = a.kh == null ? null : a.kh;
    this.a.bandId = a.Uf == null ? null : a.Uf;
  };
  p(Tf, C);
  Tf.prototype.f = function() {
    return {P: {points: Jf}, keys: ['bandId', 'points']};
  };
  r.Object.defineProperties(Tf.prototype, {
    Uf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'bandId') ? D(this, 'bandId') : null;
      },
      set(a) {
        this.a.bandId = a;
      }
    },
    kh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'points') ? D(this, 'points') : null;
      },
      set(a) {
        this.a.points = a;
      }
    }
  });
  var rf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.crsCode = a.se == null ? null : a.se;
    this.a.crsWkt = a.ig == null ? null : a.ig;
    this.a.dimensions = a.dimensions == null ? null : a.dimensions;
    this.a.affineTransform = a.ob == null ? null : a.ob;
  };
  p(rf, C);
  rf.prototype.f = function() {
    return {
      keys: ['affineTransform', 'crsCode', 'crsWkt', 'dimensions'],
      s: {affineTransform: Ie, dimensions: Gf}
    };
  };
  r.Object.defineProperties(rf.prototype, {
    ob: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'affineTransform') ? D(this, 'affineTransform') : null;
      },
      set(a) {
        this.a.affineTransform = a;
      }
    },
    se: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'crsCode') ? D(this, 'crsCode') : null;
      },
      set(a) {
        this.a.crsCode = a;
      }
    },
    ig: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'crsWkt') ? D(this, 'crsWkt') : null;
      },
      set(a) {
        this.a.crsWkt = a;
      }
    },
    dimensions: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'dimensions') ? D(this, 'dimensions') : null;
      },
      set(a) {
        this.a.dimensions = a;
      }
    }
  });
  const gg = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.version = a.version == null ? null : a.version;
    this.a.bindings = a.cd == null ? null : a.cd;
    this.a.auditConfigs = a.Rf == null ? null : a.Rf;
    this.a.rules = a.rules == null ? null : a.rules;
    this.a.etag = a.ye == null ? null : a.ye;
    this.a.iamOwned = a.Kg == null ? null : a.Kg;
  };
  p(gg, C);
  gg.prototype.f = function() {
    return {
      P: {auditConfigs: Ne, bindings: Qe, rules: hg},
      keys: 'auditConfigs bindings etag iamOwned rules version'.split(' ')
    };
  };
  r.Object.defineProperties(gg.prototype, {
    Rf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'auditConfigs') ? D(this, 'auditConfigs') : null;
      },
      set(a) {
        this.a.auditConfigs = a;
      }
    },
    cd: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'bindings') ? D(this, 'bindings') : null;
      },
      set(a) {
        this.a.bindings = a;
      }
    },
    ye: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'etag') ? D(this, 'etag') : null;
      },
      set(a) {
        this.a.etag = a;
      }
    },
    Kg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'iamOwned') ? D(this, 'iamOwned') : null;
      },
      set(a) {
        this.a.iamOwned = a;
      }
    },
    rules: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'rules') ? D(this, 'rules') : null;
      },
      set(a) {
        this.a.rules = a;
      }
    },
    version: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'version') ? D(this, 'version') : null;
      },
      set(a) {
        this.a.version = a;
      }
    }
  });
  var hg = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.description = a.description == null ? null : a.description;
    this.a.permissions = a.permissions == null ? null : a.permissions;
    this.a.action = a.action == null ? null : a.action;
    this.a.in = a.Pg == null ? null : a.Pg;
    this.a.notIn = a.bh == null ? null : a.bh;
    this.a.conditions = a.conditions == null ? null : a.conditions;
    this.a.logConfig = a.Wg == null ? null : a.Wg;
  };
  p(hg, C);
  hg.prototype.f = function() {
    return {
      P: {conditions: Ye, logConfig: cg},
      L: {action: Be},
      keys: 'action conditions description in logConfig notIn permissions'.split(' ')
    };
  };
  r.Object.defineProperties(hg.prototype, {
    action: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'action') ? D(this, 'action') : null;
      },
      set(a) {
        this.a.action = a;
      }
    },
    conditions: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'conditions') ? D(this, 'conditions') : null;
      },
      set(a) {
        this.a.conditions = a;
      }
    },
    description: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'description') ? D(this, 'description') : null;
      },
      set(a) {
        this.a.description = a;
      }
    },
    Pg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'in') ? D(this, 'in') : null;
      },
      set(a) {
        this.a.in = a;
      }
    },
    Wg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'logConfig') ? D(this, 'logConfig') : null;
      },
      set(a) {
        this.a.logConfig = a;
      }
    },
    bh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'notIn') ? D(this, 'notIn') : null;
      },
      set(a) {
        this.a.notIn = a;
      }
    },
    permissions: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'permissions') ? D(this, 'permissions') : null;
      },
      set(a) {
        this.a.permissions = a;
      }
    }
  });
  const ig = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.assets = a.S == null ? null : a.S;
    this.a.nextPageToken = a.nextPageToken == null ? null : a.nextPageToken;
  };
  p(ig, C);
  ig.prototype.f = function() {
    return {P: {assets: ff}, keys: ['assets', 'nextPageToken']};
  };
  r.Object.defineProperties(ig.prototype, {
    S: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'assets') ? D(this, 'assets') : null;
      },
      set(a) {
        this.a.assets = a;
      }
    },
    nextPageToken: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'nextPageToken') ? D(this, 'nextPageToken') : null;
      },
      set(a) {
        this.a.nextPageToken = a;
      }
    }
  });
  const jg = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.policy = a.cf == null ? null : a.cf;
    this.a.updateMask = a.jc == null ? null : a.jc;
  };
  p(jg, C);
  jg.prototype.f = function() {
    return {keys: ['policy', 'updateMask'], s: {policy: gg}};
  };
  r.Object.defineProperties(jg.prototype, {
    cf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'policy') ? D(this, 'policy') : null;
      },
      set(a) {
        this.a.policy = a;
      }
    },
    jc: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'updateMask') ? D(this, 'updateMask') : null;
      },
      set(a) {
        this.a.updateMask = a;
      }
    }
  });
  var eg = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.code = a.code == null ? null : a.code;
    this.a.message = a.message == null ? null : a.message;
    this.a.details = a.qg == null ? null : a.qg;
  };
  p(eg, C);
  eg.prototype.f = function() {
    return {
      keys: ['code', 'details', 'message'],
      xa: {details: {ga: null, la: !0, ma: !1, na: !1}}
    };
  };
  r.Object.defineProperties(eg.prototype, {
    code: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'code') ? D(this, 'code') : null;
      },
      set(a) {
        this.a.code = a;
      }
    },
    qg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'details') ? D(this, 'details') : null;
      },
      set(a) {
        this.a.details = a;
      }
    },
    message: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'message') ? D(this, 'message') : null;
      },
      set(a) {
        this.a.message = a;
      }
    }
  });
  var vf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.earthEngineDestination = a.ub == null ? null : a.ub;
  };
  p(vf, C);
  vf.prototype.f = function() {
    return {keys: ['earthEngineDestination'], s: {earthEngineDestination: kf}};
  };
  r.Object.defineProperties(vf.prototype, {
    ub: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'earthEngineDestination') ? D(this, 'earthEngineDestination') : null;
      },
      set(a) {
        this.a.earthEngineDestination = a;
      }
    }
  });
  var wf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.fileFormat = a.G == null ? null : a.G;
    this.a.driveDestination = a.ha == null ? null : a.ha;
    this.a.gcsDestination = a.ja == null ? null : a.ja;
  };
  p(wf, C);
  wf.prototype.f = function() {
    return {
      L: {fileFormat: Ce},
      keys: ['driveDestination', 'fileFormat', 'gcsDestination'],
      s: {driveDestination: ef, gcsDestination: Ef}
    };
  };
  r.Object.defineProperties(wf.prototype, {
    ha: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'driveDestination') ? D(this, 'driveDestination') : null;
      },
      set(a) {
        this.a.driveDestination = a;
      }
    },
    G: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'fileFormat') ? D(this, 'fileFormat') : null;
      },
      set(a) {
        this.a.fileFormat = a;
      }
    },
    ja: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'gcsDestination') ? D(this, 'gcsDestination') : null;
      },
      set(a) {
        this.a.gcsDestination = a;
      }
    }
  });
  var Xf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.name = a.name == null ? null : a.name;
    this.a.properties = a.properties == null ? null : a.properties;
    this.a.uriPrefix = a.Tc == null ? null : a.Tc;
    this.a.sources = a.sources == null ? null : a.sources;
    this.a.startTime = a.startTime == null ? null : a.startTime;
    this.a.endTime = a.endTime == null ? null : a.endTime;
  };
  p(Xf, C);
  Xf.prototype.f = function() {
    return {
      P: {sources: kg},
      keys: 'endTime name properties sources startTime uriPrefix'.split(' '),
      xa: {properties: {ga: null, la: !1, ma: !1, na: !1}}
    };
  };
  r.Object.defineProperties(Xf.prototype, {
    endTime: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'endTime') ? D(this, 'endTime') : null;
      },
      set(a) {
        this.a.endTime = a;
      }
    },
    name: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'name') ? D(this, 'name') : null;
      },
      set(a) {
        this.a.name = a;
      }
    },
    properties: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'properties') ? D(this, 'properties') : null;
      },
      set(a) {
        this.a.properties = a;
      }
    },
    sources: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'sources') ? D(this, 'sources') : null;
      },
      set(a) {
        this.a.sources = a;
      }
    },
    startTime: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'startTime') ? D(this, 'startTime') : null;
      },
      set(a) {
        this.a.startTime = a;
      }
    },
    Tc: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'uriPrefix') ? D(this, 'uriPrefix') : null;
      },
      set(a) {
        this.a.uriPrefix = a;
      }
    }
  });
  var kg = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.uris = a.Nb == null ? null : a.Nb;
    this.a.charset = a.charset == null ? null : a.charset;
    this.a.maxErrorMeters = a.Db == null ? null : a.Db;
    this.a.maxVertices = a.maxVertices == null ? null : a.maxVertices;
    this.a.crs = a.crs == null ? null : a.crs;
    this.a.geodesic = a.geodesic == null ? null : a.geodesic;
    this.a.primaryGeometryColumn = a.lh == null ? null : a.lh;
    this.a.xColumn = a.Lh == null ? null : a.Lh;
    this.a.yColumn = a.Mh == null ? null : a.Mh;
    this.a.dateFormat = a.ng == null ? null : a.ng;
    this.a.csvDelimiter = a.jg == null ? null : a.jg;
    this.a.csvQualifier = a.kg == null ? null : a.kg;
  };
  p(kg, C);
  kg.prototype.f = function() {
    return {
      keys: 'charset crs csvDelimiter csvQualifier dateFormat geodesic maxErrorMeters maxVertices primaryGeometryColumn uris xColumn yColumn'.split(
        ' '
      )
    };
  };
  r.Object.defineProperties(kg.prototype, {
    charset: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'charset') ? D(this, 'charset') : null;
      },
      set(a) {
        this.a.charset = a;
      }
    },
    crs: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'crs') ? D(this, 'crs') : null;
      },
      set(a) {
        this.a.crs = a;
      }
    },
    jg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'csvDelimiter') ? D(this, 'csvDelimiter') : null;
      },
      set(a) {
        this.a.csvDelimiter = a;
      }
    },
    kg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'csvQualifier') ? D(this, 'csvQualifier') : null;
      },
      set(a) {
        this.a.csvQualifier = a;
      }
    },
    ng: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'dateFormat') ? D(this, 'dateFormat') : null;
      },
      set(a) {
        this.a.dateFormat = a;
      }
    },
    geodesic: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'geodesic') ? D(this, 'geodesic') : null;
      },
      set(a) {
        this.a.geodesic = a;
      }
    },
    Db: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxErrorMeters') ? D(this, 'maxErrorMeters') : null;
      },
      set(a) {
        this.a.maxErrorMeters = a;
      }
    },
    maxVertices: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxVertices') ? D(this, 'maxVertices') : null;
      },
      set(a) {
        this.a.maxVertices = a;
      }
    },
    lh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'primaryGeometryColumn') ? D(this, 'primaryGeometryColumn') : null;
      },
      set(a) {
        this.a.primaryGeometryColumn = a;
      }
    },
    Nb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'uris') ? D(this, 'uris') : null;
      },
      set(a) {
        this.a.uris = a;
      }
    },
    Lh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'xColumn') ? D(this, 'xColumn') : null;
      },
      set(a) {
        this.a.xColumn = a;
      }
    },
    Mh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'yColumn') ? D(this, 'yColumn') : null;
      },
      set(a) {
        this.a.yColumn = a;
      }
    }
  });
  var Of = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.tileDimensions = a.Ha == null ? null : a.Ha;
    this.a.marginDimensions = a.Ue == null ? null : a.Ue;
    this.a.compress = a.ne == null ? null : a.ne;
    this.a.maxSizeBytes = a.Eb == null ? null : a.Eb;
    this.a.defaultValue = a.defaultValue == null ? null : a.defaultValue;
    this.a.tensorDepths = a.Fd == null ? null : a.Fd;
    this.a.sequenceData = a.tf == null ? null : a.tf;
    this.a.collapseBands = a.me == null ? null : a.me;
    this.a.maxMaskedRatio = a.Xe == null ? null : a.Xe;
  };
  p(Of, C);
  Of.prototype.f = function() {
    return {
      keys: 'collapseBands compress defaultValue marginDimensions maxMaskedRatio maxSizeBytes sequenceData tensorDepths tileDimensions'.split(
        ' '
      ),
      xa: {tensorDepths: {ga: null, la: !1, ma: !1, na: !1}},
      s: {marginDimensions: Gf, tileDimensions: Gf}
    };
  };
  r.Object.defineProperties(Of.prototype, {
    me: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'collapseBands') ? D(this, 'collapseBands') : null;
      },
      set(a) {
        this.a.collapseBands = a;
      }
    },
    ne: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'compress') ? D(this, 'compress') : null;
      },
      set(a) {
        this.a.compress = a;
      }
    },
    defaultValue: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'defaultValue') ? D(this, 'defaultValue') : null;
      },
      set(a) {
        this.a.defaultValue = a;
      }
    },
    Ue: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'marginDimensions') ? D(this, 'marginDimensions') : null;
      },
      set(a) {
        this.a.marginDimensions = a;
      }
    },
    Xe: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxMaskedRatio') ? D(this, 'maxMaskedRatio') : null;
      },
      set(a) {
        this.a.maxMaskedRatio = a;
      }
    },
    Eb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxSizeBytes') ? D(this, 'maxSizeBytes') : null;
      },
      set(a) {
        this.a.maxSizeBytes = a;
      }
    },
    tf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'sequenceData') ? D(this, 'sequenceData') : null;
      },
      set(a) {
        this.a.sequenceData = a;
      }
    },
    Fd: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tensorDepths') ? D(this, 'tensorDepths') : null;
      },
      set(a) {
        this.a.tensorDepths = a;
      }
    },
    Ha: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tileDimensions') ? D(this, 'tileDimensions') : null;
      },
      set(a) {
        this.a.tileDimensions = a;
      }
    }
  });
  const lg = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.name = a.name == null ? null : a.name;
    this.a.expression = a.i == null ? null : a.i;
    this.a.fileFormat = a.G == null ? null : a.G;
    this.a.bandIds = a.fa == null ? null : a.fa;
    this.a.visualizationOptions = a.Pb == null ? null : a.Pb;
    this.a.grid = a.K == null ? null : a.K;
    this.a.thumbnailOptions = a.Fh == null ? null : a.Fh;
  };
  p(lg, C);
  lg.prototype.f = function() {
    return {
      L: {fileFormat: De},
      keys: 'bandIds expression fileFormat grid name thumbnailOptions visualizationOptions'.split(
        ' '
      ),
      s: {expression: We, grid: rf, thumbnailOptions: mg, visualizationOptions: mf}
    };
  };
  r.Object.defineProperties(lg.prototype, {
    fa: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'bandIds') ? D(this, 'bandIds') : null;
      },
      set(a) {
        this.a.bandIds = a;
      }
    },
    i: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'expression') ? D(this, 'expression') : null;
      },
      set(a) {
        this.a.expression = a;
      }
    },
    G: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'fileFormat') ? D(this, 'fileFormat') : null;
      },
      set(a) {
        this.a.fileFormat = a;
      }
    },
    K: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'grid') ? D(this, 'grid') : null;
      },
      set(a) {
        this.a.grid = a;
      }
    },
    name: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'name') ? D(this, 'name') : null;
      },
      set(a) {
        this.a.name = a;
      }
    },
    Fh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'thumbnailOptions') ? D(this, 'thumbnailOptions') : null;
      },
      set(a) {
        this.a.thumbnailOptions = a;
      }
    },
    Pb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'visualizationOptions') ? D(this, 'visualizationOptions') : null;
      },
      set(a) {
        this.a.visualizationOptions = a;
      }
    }
  });
  var mg = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.name = a.name == null ? null : a.name;
    this.a.returnAsZip = a.th == null ? null : a.th;
    this.a.filePerBand = a.wg == null ? null : a.wg;
  };
  p(mg, C);
  mg.prototype.f = function() {
    return {keys: ['filePerBand', 'name', 'returnAsZip']};
  };
  r.Object.defineProperties(mg.prototype, {
    wg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'filePerBand') ? D(this, 'filePerBand') : null;
      },
      set(a) {
        this.a.filePerBand = a;
      }
    },
    name: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'name') ? D(this, 'name') : null;
      },
      set(a) {
        this.a.name = a;
      }
    },
    th: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'returnAsZip') ? D(this, 'returnAsZip') : null;
      },
      set(a) {
        this.a.returnAsZip = a;
      }
    }
  });
  var tf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.maxZoom = a.maxZoom == null ? null : a.maxZoom;
    this.a.scale = a.scale == null ? null : a.scale;
    this.a.minZoom = a.minZoom == null ? null : a.minZoom;
    this.a.skipEmptyTiles = a.zf == null ? null : a.zf;
    this.a.mapsApiKey = a.Te == null ? null : a.Te;
    this.a.tileDimensions = a.Ha == null ? null : a.Ha;
    this.a.stride = a.Bf == null ? null : a.Bf;
    this.a.zoomSubset = a.Mf == null ? null : a.Mf;
  };
  p(tf, C);
  tf.prototype.f = function() {
    return {
      keys: 'mapsApiKey maxZoom minZoom scale skipEmptyTiles stride tileDimensions zoomSubset'.split(
        ' '
      ),
      s: {tileDimensions: Gf, zoomSubset: ng}
    };
  };
  r.Object.defineProperties(tf.prototype, {
    Te: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'mapsApiKey') ? D(this, 'mapsApiKey') : null;
      },
      set(a) {
        this.a.mapsApiKey = a;
      }
    },
    maxZoom: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxZoom') ? D(this, 'maxZoom') : null;
      },
      set(a) {
        this.a.maxZoom = a;
      }
    },
    minZoom: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'minZoom') ? D(this, 'minZoom') : null;
      },
      set(a) {
        this.a.minZoom = a;
      }
    },
    scale: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'scale') ? D(this, 'scale') : null;
      },
      set(a) {
        this.a.scale = a;
      }
    },
    zf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'skipEmptyTiles') ? D(this, 'skipEmptyTiles') : null;
      },
      set(a) {
        this.a.skipEmptyTiles = a;
      }
    },
    Bf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'stride') ? D(this, 'stride') : null;
      },
      set(a) {
        this.a.stride = a;
      }
    },
    Ha: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tileDimensions') ? D(this, 'tileDimensions') : null;
      },
      set(a) {
        this.a.tileDimensions = a;
      }
    },
    Mf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'zoomSubset') ? D(this, 'zoomSubset') : null;
      },
      set(a) {
        this.a.zoomSubset = a;
      }
    }
  });
  var Sf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.id = a.id == null ? null : a.id;
    this.a.sources = a.sources == null ? null : a.sources;
    this.a.dataType = a.dataType == null ? null : a.dataType;
    this.a.crs = a.crs == null ? null : a.crs;
    this.a.subdatasetPrefix = a.Bh == null ? null : a.Bh;
    this.a.subdatasetSuffix = a.Ch == null ? null : a.Ch;
  };
  p(Sf, C);
  Sf.prototype.f = function() {
    return {
      P: {sources: Uf},
      L: {dataType: Fe},
      keys: 'crs dataType id sources subdatasetPrefix subdatasetSuffix'.split(' ')
    };
  };
  r.Object.defineProperties(Sf.prototype, {
    crs: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'crs') ? D(this, 'crs') : null;
      },
      set(a) {
        this.a.crs = a;
      }
    },
    dataType: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'dataType') ? D(this, 'dataType') : null;
      },
      set(a) {
        this.a.dataType = a;
      }
    },
    id: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'id') ? D(this, 'id') : null;
      },
      set(a) {
        this.a.id = a;
      }
    },
    sources: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'sources') ? D(this, 'sources') : null;
      },
      set(a) {
        this.a.sources = a;
      }
    },
    Bh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'subdatasetPrefix') ? D(this, 'subdatasetPrefix') : null;
      },
      set(a) {
        this.a.subdatasetPrefix = a;
      }
    },
    Ch: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'subdatasetSuffix') ? D(this, 'subdatasetSuffix') : null;
      },
      set(a) {
        this.a.subdatasetSuffix = a;
      }
    }
  });
  var Qf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.id = a.id == null ? null : a.id;
    this.a.tilesetId = a.hc == null ? null : a.hc;
    this.a.tilesetBandIndex = a.Hh == null ? null : a.Hh;
    this.a.missingData = a.missingData == null ? null : a.missingData;
    this.a.pyramidingPolicy = a.pyramidingPolicy == null ? null : a.pyramidingPolicy;
  };
  p(Qf, C);
  Qf.prototype.f = function() {
    return {
      L: {pyramidingPolicy: Ee},
      keys: ['id', 'missingData', 'pyramidingPolicy', 'tilesetBandIndex', 'tilesetId'],
      s: {missingData: Nf}
    };
  };
  r.Object.defineProperties(Qf.prototype, {
    id: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'id') ? D(this, 'id') : null;
      },
      set(a) {
        this.a.id = a;
      }
    },
    missingData: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'missingData') ? D(this, 'missingData') : null;
      },
      set(a) {
        this.a.missingData = a;
      }
    },
    pyramidingPolicy: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'pyramidingPolicy') ? D(this, 'pyramidingPolicy') : null;
      },
      set(a) {
        this.a.pyramidingPolicy = a;
      }
    },
    Hh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tilesetBandIndex') ? D(this, 'tilesetBandIndex') : null;
      },
      set(a) {
        this.a.tilesetBandIndex = a;
      }
    },
    hc: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tilesetId') ? D(this, 'tilesetId') : null;
      },
      set(a) {
        this.a.tilesetId = a;
      }
    }
  });
  var Rf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.tilesetId = a.hc == null ? null : a.hc;
    this.a.bandIds = a.fa == null ? null : a.fa;
  };
  p(Rf, C);
  Rf.prototype.f = function() {
    return {keys: ['bandIds', 'tilesetId']};
  };
  r.Object.defineProperties(Rf.prototype, {
    fa: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'bandIds') ? D(this, 'bandIds') : null;
      },
      set(a) {
        this.a.bandIds = a;
      }
    },
    hc: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tilesetId') ? D(this, 'tilesetId') : null;
      },
      set(a) {
        this.a.tilesetId = a;
      }
    }
  });
  var jf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.sources = a.sources == null ? null : a.sources;
    this.a.pathPrefix = a.pathPrefix == null ? null : a.pathPrefix;
  };
  p(jf, C);
  jf.prototype.f = function() {
    return {P: {sources: og}, keys: ['pathPrefix', 'sources']};
  };
  r.Object.defineProperties(jf.prototype, {
    pathPrefix: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'pathPrefix') ? D(this, 'pathPrefix') : null;
      },
      set(a) {
        this.a.pathPrefix = a;
      }
    },
    sources: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'sources') ? D(this, 'sources') : null;
      },
      set(a) {
        this.a.sources = a;
      }
    }
  });
  var og = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.pathSuffix = a.pathSuffix == null ? null : a.pathSuffix;
    this.a.headerSizeBytes = a.Ig == null ? null : a.Ig;
  };
  p(og, C);
  og.prototype.f = function() {
    return {keys: ['headerSizeBytes', 'pathSuffix']};
  };
  r.Object.defineProperties(og.prototype, {
    Ig: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'headerSizeBytes') ? D(this, 'headerSizeBytes') : null;
      },
      set(a) {
        this.a.headerSizeBytes = a;
      }
    },
    pathSuffix: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'pathSuffix') ? D(this, 'pathSuffix') : null;
      },
      set(a) {
        this.a.pathSuffix = a;
      }
    }
  });
  var Lf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.fileIndexes = a.vg == null ? null : a.vg;
    this.a.firstTileIndex = a.yg == null ? null : a.yg;
    this.a.tilesPerFile = a.Gh == null ? null : a.Gh;
  };
  p(Lf, C);
  Lf.prototype.f = function() {
    return {keys: ['fileIndexes', 'firstTileIndex', 'tilesPerFile']};
  };
  r.Object.defineProperties(Lf.prototype, {
    vg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'fileIndexes') ? D(this, 'fileIndexes') : null;
      },
      set(a) {
        this.a.fileIndexes = a;
      }
    },
    yg: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'firstTileIndex') ? D(this, 'firstTileIndex') : null;
      },
      set(a) {
        this.a.firstTileIndex = a;
      }
    },
    Gh: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'tilesPerFile') ? D(this, 'tilesPerFile') : null;
      },
      set(a) {
        this.a.tilesPerFile = a;
      }
    }
  });
  const pg = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.asset = a.ce == null ? null : a.ce;
    this.a.updateMask = a.jc == null ? null : a.jc;
  };
  p(pg, C);
  pg.prototype.f = function() {
    return {keys: ['asset', 'updateMask'], s: {asset: ff}};
  };
  r.Object.defineProperties(pg.prototype, {
    ce: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'asset') ? D(this, 'asset') : null;
      },
      set(a) {
        this.a.asset = a;
      }
    },
    jc: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'updateMask') ? D(this, 'updateMask') : null;
      },
      set(a) {
        this.a.updateMask = a;
      }
    }
  });
  var Me = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.constantValue = a.rb == null ? null : a.rb;
    this.a.integerValue = a.Pe == null ? null : a.Pe;
    this.a.bytesValue = a.je == null ? null : a.je;
    this.a.arrayValue = a.pb == null ? null : a.pb;
    this.a.dictionaryValue = a.tb == null ? null : a.tb;
    this.a.functionDefinitionValue = a.xb == null ? null : a.xb;
    this.a.functionInvocationValue = a.gb == null ? null : a.gb;
    this.a.argumentReference = a.oc == null ? null : a.oc;
    this.a.valueReference = a.bb == null ? null : a.bb;
  };
  p(Me, C);
  Me.prototype.f = function() {
    return {
      keys: 'argumentReference arrayValue bytesValue constantValue dictionaryValue functionDefinitionValue functionInvocationValue integerValue valueReference'.split(
        ' '
      ),
      s: {
        arrayValue: Le,
        dictionaryValue: cf,
        functionDefinitionValue: Cf,
        functionInvocationValue: Df
      }
    };
  };
  r.Object.defineProperties(Me.prototype, {
    oc: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'argumentReference') ? D(this, 'argumentReference') : null;
      },
      set(a) {
        this.a.argumentReference = a;
      }
    },
    pb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'arrayValue') ? D(this, 'arrayValue') : null;
      },
      set(a) {
        this.a.arrayValue = a;
      }
    },
    je: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'bytesValue') ? D(this, 'bytesValue') : null;
      },
      set(a) {
        this.a.bytesValue = a;
      }
    },
    rb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'constantValue') ? D(this, 'constantValue') : null;
      },
      set(a) {
        this.a.constantValue = a;
      }
    },
    tb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'dictionaryValue') ? D(this, 'dictionaryValue') : null;
      },
      set(a) {
        this.a.dictionaryValue = a;
      }
    },
    xb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'functionDefinitionValue') ? D(this, 'functionDefinitionValue') : null;
      },
      set(a) {
        this.a.functionDefinitionValue = a;
      }
    },
    gb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'functionInvocationValue') ? D(this, 'functionInvocationValue') : null;
      },
      set(a) {
        this.a.functionInvocationValue = a;
      }
    },
    Pe: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'integerValue') ? D(this, 'integerValue') : null;
      },
      set(a) {
        this.a.integerValue = a;
      }
    },
    bb: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'valueReference') ? D(this, 'valueReference') : null;
      },
      set(a) {
        this.a.valueReference = a;
      }
    }
  });
  var yf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.fileFormat = a.G == null ? null : a.G;
    this.a.driveDestination = a.ha == null ? null : a.ha;
    this.a.gcsDestination = a.ja == null ? null : a.ja;
  };
  p(yf, C);
  yf.prototype.f = function() {
    return {
      L: {fileFormat: Ge},
      keys: ['driveDestination', 'fileFormat', 'gcsDestination'],
      s: {driveDestination: ef, gcsDestination: Ef}
    };
  };
  r.Object.defineProperties(yf.prototype, {
    ha: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'driveDestination') ? D(this, 'driveDestination') : null;
      },
      set(a) {
        this.a.driveDestination = a;
      }
    },
    G: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'fileFormat') ? D(this, 'fileFormat') : null;
      },
      set(a) {
        this.a.fileFormat = a;
      }
    },
    ja: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'gcsDestination') ? D(this, 'gcsDestination') : null;
      },
      set(a) {
        this.a.gcsDestination = a;
      }
    }
  });
  var zf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.framesPerSecond = a.framesPerSecond == null ? null : a.framesPerSecond;
    this.a.maxFrames = a.maxFrames == null ? null : a.maxFrames;
    this.a.maxPixelsPerFrame = a.maxPixelsPerFrame == null ? null : a.maxPixelsPerFrame;
  };
  p(zf, C);
  zf.prototype.f = function() {
    return {keys: ['framesPerSecond', 'maxFrames', 'maxPixelsPerFrame']};
  };
  r.Object.defineProperties(zf.prototype, {
    framesPerSecond: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'framesPerSecond') ? D(this, 'framesPerSecond') : null;
      },
      set(a) {
        this.a.framesPerSecond = a;
      }
    },
    maxFrames: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxFrames') ? D(this, 'maxFrames') : null;
      },
      set(a) {
        this.a.maxFrames = a;
      }
    },
    maxPixelsPerFrame: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'maxPixelsPerFrame') ? D(this, 'maxPixelsPerFrame') : null;
      },
      set(a) {
        this.a.maxPixelsPerFrame = a;
      }
    }
  });
  const qg = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.name = a.name == null ? null : a.name;
    this.a.expression = a.i == null ? null : a.i;
    this.a.videoOptions = a.Ja == null ? null : a.Ja;
    this.a.fileFormat = a.G == null ? null : a.G;
    this.a.grid = a.K == null ? null : a.K;
  };
  p(qg, C);
  qg.prototype.f = function() {
    return {
      L: {fileFormat: He},
      keys: ['expression', 'fileFormat', 'grid', 'name', 'videoOptions'],
      s: {expression: We, grid: rf, videoOptions: zf}
    };
  };
  r.Object.defineProperties(qg.prototype, {
    i: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'expression') ? D(this, 'expression') : null;
      },
      set(a) {
        this.a.expression = a;
      }
    },
    G: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'fileFormat') ? D(this, 'fileFormat') : null;
      },
      set(a) {
        this.a.fileFormat = a;
      }
    },
    K: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'grid') ? D(this, 'grid') : null;
      },
      set(a) {
        this.a.grid = a;
      }
    },
    name: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'name') ? D(this, 'name') : null;
      },
      set(a) {
        this.a.name = a;
      }
    },
    Ja: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'videoOptions') ? D(this, 'videoOptions') : null;
      },
      set(a) {
        this.a.videoOptions = a;
      }
    }
  });
  var mf = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.ranges = a.kf == null ? null : a.kf;
    this.a.paletteColors = a.Kc == null ? null : a.Kc;
    this.a.gamma = a.gamma == null ? null : a.gamma;
    this.a.opacity = a.opacity == null ? null : a.opacity;
  };
  p(mf, C);
  mf.prototype.f = function() {
    return {P: {ranges: df}, keys: ['gamma', 'opacity', 'paletteColors', 'ranges']};
  };
  r.Object.defineProperties(mf.prototype, {
    gamma: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'gamma') ? D(this, 'gamma') : null;
      },
      set(a) {
        this.a.gamma = a;
      }
    },
    opacity: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'opacity') ? D(this, 'opacity') : null;
      },
      set(a) {
        this.a.opacity = a;
      }
    },
    Kc: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'paletteColors') ? D(this, 'paletteColors') : null;
      },
      set(a) {
        this.a.paletteColors = a;
      }
    },
    kf: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'ranges') ? D(this, 'ranges') : null;
      },
      set(a) {
        this.a.ranges = a;
      }
    }
  });
  var ng = function(a) {
    a = void 0 === a ? {} : a;
    this.a = {};
    this.a.min = a.min == null ? null : a.min;
    this.a.max = a.max == null ? null : a.max;
  };
  p(ng, C);
  ng.prototype.f = function() {
    return {keys: ['max', 'min']};
  };
  r.Object.defineProperties(ng.prototype, {
    max: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'max') ? D(this, 'max') : null;
      },
      set(a) {
        this.a.max = a;
      }
    },
    min: {
      configurable: !0,
      enumerable: !0,
      get() {
        return F(this, 'min') ? D(this, 'min') : null;
      },
      set(a) {
        this.a.min = a;
      }
    }
  });
  const rg = function(a) {
    this.m = 'v1alpha';
    this.h = new be(a, null);
  };
  rg.prototype.list = function(a, b) {
    let c =
      void 0 === b
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : b;
    b = void 0 === c.$Xgafv ? void 0 : c.$Xgafv;
    const d = void 0 === c.access_token ? void 0 : c.access_token;
    const e = void 0 === c.alt ? void 0 : c.alt;
    const f = void 0 === c.callback ? void 0 : c.callback;
    const g = void 0 === c.fields ? void 0 : c.fields;
    const h = void 0 === c.key ? void 0 : c.key;
    const m = void 0 === c.oauth_token ? void 0 : c.oauth_token;
    const n = void 0 === c.prettyPrint ? void 0 : c.prettyPrint;
    const q = void 0 === c.quotaUser ? void 0 : c.quotaUser;
    const w = void 0 === c.uploadType ? void 0 : c.uploadType;
    c = void 0 === c.upload_protocol ? void 0 : c.upload_protocol;
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: null,
      u: 'GET',
      B: 'earthengine.projects.algorithms.list',
      path: `/${this.m}/${a}/algorithms`,
      o: {
        '$.xgafv': b,
        access_token: d,
        alt: e,
        callback: f,
        fields: g,
        key: h,
        oauth_token: m,
        prettyPrint: n,
        quotaUser: q,
        uploadType: w,
        upload_protocol: c
      },
      D: Yf
    });
  };
  const sg = function(a) {
    this.m = 'v1alpha';
    this.h = new be(a, null);
  };
  sg.prototype.getCapabilities = function(a, b) {
    let c =
      void 0 === b
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : b;
    b = void 0 === c.$Xgafv ? void 0 : c.$Xgafv;
    const d = void 0 === c.access_token ? void 0 : c.access_token;
    const e = void 0 === c.alt ? void 0 : c.alt;
    const f = void 0 === c.callback ? void 0 : c.callback;
    const g = void 0 === c.fields ? void 0 : c.fields;
    const h = void 0 === c.key ? void 0 : c.key;
    const m = void 0 === c.oauth_token ? void 0 : c.oauth_token;
    const n = void 0 === c.prettyPrint ? void 0 : c.prettyPrint;
    const q = void 0 === c.quotaUser ? void 0 : c.quotaUser;
    const w = void 0 === c.uploadType ? void 0 : c.uploadType;
    c = void 0 === c.upload_protocol ? void 0 : c.upload_protocol;
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: null,
      u: 'GET',
      B: 'earthengine.projects.getCapabilities',
      path: `/${this.m}/${a}/capabilities`,
      o: {
        '$.xgafv': b,
        access_token: d,
        alt: e,
        callback: f,
        fields: g,
        key: h,
        oauth_token: m,
        prettyPrint: n,
        quotaUser: q,
        uploadType: w,
        upload_protocol: c
      },
      D: Te
    });
  };
  sg.prototype.Fc = function(a, b) {
    let c =
      void 0 === b
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            pageSize: void 0,
            pageToken: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : b;
    b = void 0 === c.$Xgafv ? void 0 : c.$Xgafv;
    const d = void 0 === c.access_token ? void 0 : c.access_token;
    const e = void 0 === c.alt ? void 0 : c.alt;
    const f = void 0 === c.callback ? void 0 : c.callback;
    const g = void 0 === c.fields ? void 0 : c.fields;
    const h = void 0 === c.key ? void 0 : c.key;
    const m = void 0 === c.oauth_token ? void 0 : c.oauth_token;
    const n = void 0 === c.pageSize ? void 0 : c.pageSize;
    const q = void 0 === c.pageToken ? void 0 : c.pageToken;
    const w = void 0 === c.prettyPrint ? void 0 : c.prettyPrint;
    const z = void 0 === c.quotaUser ? void 0 : c.quotaUser;
    const E = void 0 === c.uploadType ? void 0 : c.uploadType;
    c = void 0 === c.upload_protocol ? void 0 : c.upload_protocol;
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: null,
      u: 'GET',
      B: 'earthengine.projects.listAssets',
      path: `/${this.m}/${a}:listAssets`,
      o: {
        '$.xgafv': b,
        access_token: d,
        alt: e,
        callback: f,
        fields: g,
        key: h,
        oauth_token: m,
        pageSize: n,
        pageToken: q,
        prettyPrint: w,
        quotaUser: z,
        uploadType: E,
        upload_protocol: c
      },
      D: Zf
    });
  };
  const tg = function(a) {
    this.m = 'v1alpha';
    this.h = new be(a, null);
  };
  tg.prototype.create = function(a, b, c) {
    let d =
      void 0 === c
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            assetId: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            overwrite: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : c;
    c = void 0 === d.$Xgafv ? void 0 : d.$Xgafv;
    const e = void 0 === d.access_token ? void 0 : d.access_token;
    const f = void 0 === d.alt ? void 0 : d.alt;
    const g = void 0 === d.assetId ? void 0 : d.assetId;
    const h = void 0 === d.callback ? void 0 : d.callback;
    const m = void 0 === d.fields ? void 0 : d.fields;
    const n = void 0 === d.key ? void 0 : d.key;
    const q = void 0 === d.oauth_token ? void 0 : d.oauth_token;
    const w = void 0 === d.overwrite ? void 0 : d.overwrite;
    const z = void 0 === d.prettyPrint ? void 0 : d.prettyPrint;
    const E = void 0 === d.quotaUser ? void 0 : d.quotaUser;
    const M = void 0 === d.uploadType ? void 0 : d.uploadType;
    d = void 0 === d.upload_protocol ? void 0 : d.upload_protocol;
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.assets.create',
      path: `/${this.m}/${a}/assets`,
      o: {
        '$.xgafv': c,
        access_token: e,
        alt: f,
        assetId: g,
        callback: h,
        fields: m,
        key: n,
        oauth_token: q,
        overwrite: w,
        prettyPrint: z,
        quotaUser: E,
        uploadType: M,
        upload_protocol: d
      },
      D: ff
    });
  };
  tg.prototype.delete = function(a, b) {
    let c =
      void 0 === b
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : b;
    b = void 0 === c.$Xgafv ? void 0 : c.$Xgafv;
    const d = void 0 === c.access_token ? void 0 : c.access_token;
    const e = void 0 === c.alt ? void 0 : c.alt;
    const f = void 0 === c.callback ? void 0 : c.callback;
    const g = void 0 === c.fields ? void 0 : c.fields;
    const h = void 0 === c.key ? void 0 : c.key;
    const m = void 0 === c.oauth_token ? void 0 : c.oauth_token;
    const n = void 0 === c.prettyPrint ? void 0 : c.prettyPrint;
    const q = void 0 === c.quotaUser ? void 0 : c.quotaUser;
    const w = void 0 === c.uploadType ? void 0 : c.uploadType;
    c = void 0 === c.upload_protocol ? void 0 : c.upload_protocol;
    this.h.w(a, /^projects\/[^/]+\/assets\/.+$/);
    return G(this.h, {
      body: null,
      u: 'DELETE',
      B: 'earthengine.projects.assets.delete',
      path: `/${this.m}/${a}`,
      o: {
        '$.xgafv': b,
        access_token: d,
        alt: e,
        callback: f,
        fields: g,
        key: h,
        oauth_token: m,
        prettyPrint: n,
        quotaUser: q,
        uploadType: w,
        upload_protocol: c
      },
      D: nf
    });
  };
  tg.prototype.get = function(a, b) {
    let c =
      void 0 === b
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : b;
    b = void 0 === c.$Xgafv ? void 0 : c.$Xgafv;
    const d = void 0 === c.access_token ? void 0 : c.access_token;
    const e = void 0 === c.alt ? void 0 : c.alt;
    const f = void 0 === c.callback ? void 0 : c.callback;
    const g = void 0 === c.fields ? void 0 : c.fields;
    const h = void 0 === c.key ? void 0 : c.key;
    const m = void 0 === c.oauth_token ? void 0 : c.oauth_token;
    const n = void 0 === c.prettyPrint ? void 0 : c.prettyPrint;
    const q = void 0 === c.quotaUser ? void 0 : c.quotaUser;
    const w = void 0 === c.uploadType ? void 0 : c.uploadType;
    c = void 0 === c.upload_protocol ? void 0 : c.upload_protocol;
    this.h.w(a, /^projects\/[^/]+\/assets\/.+$/);
    return G(this.h, {
      body: null,
      u: 'GET',
      B: 'earthengine.projects.assets.get',
      path: `/${this.m}/${a}`,
      o: {
        '$.xgafv': b,
        access_token: d,
        alt: e,
        callback: f,
        fields: g,
        key: h,
        oauth_token: m,
        prettyPrint: n,
        quotaUser: q,
        uploadType: w,
        upload_protocol: c
      },
      D: ff
    });
  };
  tg.prototype.Fc = function(a, b) {
    let c =
      void 0 === b
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            pageSize: void 0,
            pageToken: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : b;
    b = void 0 === c.$Xgafv ? void 0 : c.$Xgafv;
    const d = void 0 === c.access_token ? void 0 : c.access_token;
    const e = void 0 === c.alt ? void 0 : c.alt;
    const f = void 0 === c.callback ? void 0 : c.callback;
    const g = void 0 === c.fields ? void 0 : c.fields;
    const h = void 0 === c.key ? void 0 : c.key;
    const m = void 0 === c.oauth_token ? void 0 : c.oauth_token;
    const n = void 0 === c.pageSize ? void 0 : c.pageSize;
    const q = void 0 === c.pageToken ? void 0 : c.pageToken;
    const w = void 0 === c.prettyPrint ? void 0 : c.prettyPrint;
    const z = void 0 === c.quotaUser ? void 0 : c.quotaUser;
    const E = void 0 === c.uploadType ? void 0 : c.uploadType;
    c = void 0 === c.upload_protocol ? void 0 : c.upload_protocol;
    this.h.w(a, /^projects\/[^/]+\/assets\/.+$/);
    return G(this.h, {
      body: null,
      u: 'GET',
      B: 'earthengine.projects.assets.listAssets',
      path: `/${this.m}/${a}:listAssets`,
      o: {
        '$.xgafv': b,
        access_token: d,
        alt: e,
        callback: f,
        fields: g,
        key: h,
        oauth_token: m,
        pageSize: n,
        pageToken: q,
        prettyPrint: w,
        quotaUser: z,
        uploadType: E,
        upload_protocol: c
      },
      D: Zf
    });
  };
  const ug = function(a, b, c) {
    let d =
      void 0 === c
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            endTime: void 0,
            fields: void 0,
            filter: void 0,
            key: void 0,
            oauth_token: void 0,
            pageSize: void 0,
            pageToken: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            region: void 0,
            startTime: void 0,
            uploadType: void 0,
            upload_protocol: void 0,
            view: void 0
          }
        : c;
    c = void 0 === d.$Xgafv ? void 0 : d.$Xgafv;
    const e = void 0 === d.access_token ? void 0 : d.access_token;
    const f = void 0 === d.alt ? void 0 : d.alt;
    const g = void 0 === d.callback ? void 0 : d.callback;
    const h = void 0 === d.endTime ? void 0 : d.endTime;
    const m = void 0 === d.fields ? void 0 : d.fields;
    const n = void 0 === d.filter ? void 0 : d.filter;
    const q = void 0 === d.key ? void 0 : d.key;
    const w = void 0 === d.oauth_token ? void 0 : d.oauth_token;
    const z = void 0 === d.pageSize ? void 0 : d.pageSize;
    const E = void 0 === d.pageToken ? void 0 : d.pageToken;
    const M = void 0 === d.prettyPrint ? void 0 : d.prettyPrint;
    const Z = void 0 === d.quotaUser ? void 0 : d.quotaUser;
    const Bj = void 0 === d.region ? void 0 : d.region;
    const Cj = void 0 === d.startTime ? void 0 : d.startTime;
    const Dj = void 0 === d.uploadType ? void 0 : d.uploadType;
    const Ej = void 0 === d.upload_protocol ? void 0 : d.upload_protocol;
    d = void 0 === d.view ? void 0 : d.view;
    a.h.w(b, /^projects\/[^/]+\/assets\/.+$/);
    return G(a.h, {
      body: null,
      u: 'GET',
      B: 'earthengine.projects.assets.listImages',
      path: `/${a.m}/${b}:listImages`,
      o: {
        '$.xgafv': c,
        access_token: e,
        alt: f,
        callback: g,
        endTime: h,
        fields: m,
        filter: n,
        key: q,
        oauth_token: w,
        pageSize: z,
        pageToken: E,
        prettyPrint: M,
        quotaUser: Z,
        region: Bj,
        startTime: Cj,
        uploadType: Dj,
        upload_protocol: Ej,
        view: d
      },
      D: $f
    });
  };
  tg.prototype.move = function(a, b, c) {
    let d =
      void 0 === c
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : c;
    c = void 0 === d.$Xgafv ? void 0 : d.$Xgafv;
    const e = void 0 === d.access_token ? void 0 : d.access_token;
    const f = void 0 === d.alt ? void 0 : d.alt;
    const g = void 0 === d.callback ? void 0 : d.callback;
    const h = void 0 === d.fields ? void 0 : d.fields;
    const m = void 0 === d.key ? void 0 : d.key;
    const n = void 0 === d.oauth_token ? void 0 : d.oauth_token;
    const q = void 0 === d.prettyPrint ? void 0 : d.prettyPrint;
    const w = void 0 === d.quotaUser ? void 0 : d.quotaUser;
    const z = void 0 === d.uploadType ? void 0 : d.uploadType;
    d = void 0 === d.upload_protocol ? void 0 : d.upload_protocol;
    this.h.w(a, /^projects\/[^/]+\/assets\/.+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.assets.move',
      path: `/${this.m}/${a}:move`,
      o: {
        '$.xgafv': c,
        access_token: e,
        alt: f,
        callback: g,
        fields: h,
        key: m,
        oauth_token: n,
        prettyPrint: q,
        quotaUser: w,
        uploadType: z,
        upload_protocol: d
      },
      D: ff
    });
  };
  tg.prototype.search = function(a, b) {
    let c =
      void 0 === b
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            nextPageToken: void 0,
            oauth_token: void 0,
            pageSize: void 0,
            prettyPrint: void 0,
            query: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : b;
    b = void 0 === c.$Xgafv ? void 0 : c.$Xgafv;
    const d = void 0 === c.access_token ? void 0 : c.access_token;
    const e = void 0 === c.alt ? void 0 : c.alt;
    const f = void 0 === c.callback ? void 0 : c.callback;
    const g = void 0 === c.fields ? void 0 : c.fields;
    const h = void 0 === c.key ? void 0 : c.key;
    const m = void 0 === c.nextPageToken ? void 0 : c.nextPageToken;
    const n = void 0 === c.oauth_token ? void 0 : c.oauth_token;
    const q = void 0 === c.pageSize ? void 0 : c.pageSize;
    const w = void 0 === c.prettyPrint ? void 0 : c.prettyPrint;
    const z = void 0 === c.query ? void 0 : c.query;
    const E = void 0 === c.quotaUser ? void 0 : c.quotaUser;
    const M = void 0 === c.uploadType ? void 0 : c.uploadType;
    c = void 0 === c.upload_protocol ? void 0 : c.upload_protocol;
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: null,
      u: 'GET',
      B: 'earthengine.projects.assets.search',
      path: `/${this.m}/${a}/assets:search`,
      o: {
        '$.xgafv': b,
        access_token: d,
        alt: e,
        callback: f,
        fields: g,
        key: h,
        nextPageToken: m,
        oauth_token: n,
        pageSize: q,
        prettyPrint: w,
        query: z,
        quotaUser: E,
        uploadType: M,
        upload_protocol: c
      },
      D: ig
    });
  };
  const vg = function(a) {
    this.m = 'v1alpha';
    this.h = new be(a, null);
  };
  vg.prototype.create = function(a, b, c) {
    let d =
      void 0 === c
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : c;
    c = void 0 === d.$Xgafv ? void 0 : d.$Xgafv;
    const e = void 0 === d.access_token ? void 0 : d.access_token;
    const f = void 0 === d.alt ? void 0 : d.alt;
    const g = void 0 === d.callback ? void 0 : d.callback;
    const h = void 0 === d.fields ? void 0 : d.fields;
    const m = void 0 === d.key ? void 0 : d.key;
    const n = void 0 === d.oauth_token ? void 0 : d.oauth_token;
    const q = void 0 === d.prettyPrint ? void 0 : d.prettyPrint;
    const w = void 0 === d.quotaUser ? void 0 : d.quotaUser;
    const z = void 0 === d.uploadType ? void 0 : d.uploadType;
    d = void 0 === d.upload_protocol ? void 0 : d.upload_protocol;
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.filmstripThumbnails.create',
      path: `/${this.m}/${a}/filmstripThumbnails`,
      o: {
        '$.xgafv': c,
        access_token: e,
        alt: f,
        callback: g,
        fields: h,
        key: m,
        oauth_token: n,
        prettyPrint: q,
        quotaUser: w,
        uploadType: z,
        upload_protocol: d
      },
      D: Bf
    });
  };
  const wg = function(a) {
    this.m = 'v1alpha';
    this.h = new be(a, null);
  };
  wg.prototype.Wa = function(a, b) {
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.image.export',
      path: `/${this.m}/${a}/image:export`,
      o: {
        '$.xgafv': void 0,
        access_token: void 0,
        alt: void 0,
        callback: void 0,
        fields: void 0,
        key: void 0,
        oauth_token: void 0,
        prettyPrint: void 0,
        quotaUser: void 0,
        uploadType: void 0,
        upload_protocol: void 0
      },
      D: bg
    });
  };
  wg.prototype.import = function(a, b, c) {
    let d =
      void 0 === c
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : c;
    c = void 0 === d.$Xgafv ? void 0 : d.$Xgafv;
    const e = void 0 === d.access_token ? void 0 : d.access_token;
    const f = void 0 === d.alt ? void 0 : d.alt;
    const g = void 0 === d.callback ? void 0 : d.callback;
    const h = void 0 === d.fields ? void 0 : d.fields;
    const m = void 0 === d.key ? void 0 : d.key;
    const n = void 0 === d.oauth_token ? void 0 : d.oauth_token;
    const q = void 0 === d.prettyPrint ? void 0 : d.prettyPrint;
    const w = void 0 === d.quotaUser ? void 0 : d.quotaUser;
    const z = void 0 === d.uploadType ? void 0 : d.uploadType;
    d = void 0 === d.upload_protocol ? void 0 : d.upload_protocol;
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.image.import',
      path: `/${this.m}/${a}/image:import`,
      o: {
        '$.xgafv': c,
        access_token: e,
        alt: f,
        callback: g,
        fields: h,
        key: m,
        oauth_token: n,
        prettyPrint: q,
        quotaUser: w,
        uploadType: z,
        upload_protocol: d
      },
      D: bg
    });
  };
  const xg = function(a) {
    this.m = 'v1alpha';
    this.h = new be(a, null);
  };
  xg.prototype.Wa = function(a, b) {
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.map.export',
      path: `/${this.m}/${a}/map:export`,
      o: {
        '$.xgafv': void 0,
        access_token: void 0,
        alt: void 0,
        callback: void 0,
        fields: void 0,
        key: void 0,
        oauth_token: void 0,
        prettyPrint: void 0,
        quotaUser: void 0,
        uploadType: void 0,
        upload_protocol: void 0
      },
      D: bg
    });
  };
  const yg = function(a) {
    this.m = 'v1alpha';
    this.h = new be(a, null);
  };
  yg.prototype.create = function(a, b, c) {
    let d =
      void 0 === c
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : c;
    c = void 0 === d.$Xgafv ? void 0 : d.$Xgafv;
    const e = void 0 === d.access_token ? void 0 : d.access_token;
    const f = void 0 === d.alt ? void 0 : d.alt;
    const g = void 0 === d.callback ? void 0 : d.callback;
    const h = void 0 === d.fields ? void 0 : d.fields;
    const m = void 0 === d.key ? void 0 : d.key;
    const n = void 0 === d.oauth_token ? void 0 : d.oauth_token;
    const q = void 0 === d.prettyPrint ? void 0 : d.prettyPrint;
    const w = void 0 === d.quotaUser ? void 0 : d.quotaUser;
    const z = void 0 === d.uploadType ? void 0 : d.uploadType;
    d = void 0 === d.upload_protocol ? void 0 : d.upload_protocol;
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.maps.create',
      path: `/${this.m}/${a}/maps`,
      o: {
        '$.xgafv': c,
        access_token: e,
        alt: f,
        callback: g,
        fields: h,
        key: m,
        oauth_token: n,
        prettyPrint: q,
        quotaUser: w,
        uploadType: z,
        upload_protocol: d
      },
      D: lf
    });
  };
  const zg = function(a) {
    this.m = 'v1alpha';
    this.h = new be(a, null);
  };
  k = zg.prototype;
  k.cancel = function(a, b, c) {
    let d =
      void 0 === c
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : c;
    c = void 0 === d.$Xgafv ? void 0 : d.$Xgafv;
    const e = void 0 === d.access_token ? void 0 : d.access_token;
    const f = void 0 === d.alt ? void 0 : d.alt;
    const g = void 0 === d.callback ? void 0 : d.callback;
    const h = void 0 === d.fields ? void 0 : d.fields;
    const m = void 0 === d.key ? void 0 : d.key;
    const n = void 0 === d.oauth_token ? void 0 : d.oauth_token;
    const q = void 0 === d.prettyPrint ? void 0 : d.prettyPrint;
    const w = void 0 === d.quotaUser ? void 0 : d.quotaUser;
    const z = void 0 === d.uploadType ? void 0 : d.uploadType;
    d = void 0 === d.upload_protocol ? void 0 : d.upload_protocol;
    this.h.w(a, /^projects\/[^/]+\/operations\/.+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.operations.cancel',
      path: `/${this.m}/${a}:cancel`,
      o: {
        '$.xgafv': c,
        access_token: e,
        alt: f,
        callback: g,
        fields: h,
        key: m,
        oauth_token: n,
        prettyPrint: q,
        quotaUser: w,
        uploadType: z,
        upload_protocol: d
      },
      D: nf
    });
  };
  k.delete = function(a, b) {
    let c =
      void 0 === b
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : b;
    b = void 0 === c.$Xgafv ? void 0 : c.$Xgafv;
    const d = void 0 === c.access_token ? void 0 : c.access_token;
    const e = void 0 === c.alt ? void 0 : c.alt;
    const f = void 0 === c.callback ? void 0 : c.callback;
    const g = void 0 === c.fields ? void 0 : c.fields;
    const h = void 0 === c.key ? void 0 : c.key;
    const m = void 0 === c.oauth_token ? void 0 : c.oauth_token;
    const n = void 0 === c.prettyPrint ? void 0 : c.prettyPrint;
    const q = void 0 === c.quotaUser ? void 0 : c.quotaUser;
    const w = void 0 === c.uploadType ? void 0 : c.uploadType;
    c = void 0 === c.upload_protocol ? void 0 : c.upload_protocol;
    this.h.w(a, /^projects\/[^/]+\/operations\/.+$/);
    return G(this.h, {
      body: null,
      u: 'DELETE',
      B: 'earthengine.projects.operations.delete',
      path: `/${this.m}/${a}`,
      o: {
        '$.xgafv': b,
        access_token: d,
        alt: e,
        callback: f,
        fields: g,
        key: h,
        oauth_token: m,
        prettyPrint: n,
        quotaUser: q,
        uploadType: w,
        upload_protocol: c
      },
      D: nf
    });
  };
  k.get = function(a, b) {
    let c =
      void 0 === b
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : b;
    b = void 0 === c.$Xgafv ? void 0 : c.$Xgafv;
    const d = void 0 === c.access_token ? void 0 : c.access_token;
    const e = void 0 === c.alt ? void 0 : c.alt;
    const f = void 0 === c.callback ? void 0 : c.callback;
    const g = void 0 === c.fields ? void 0 : c.fields;
    const h = void 0 === c.key ? void 0 : c.key;
    const m = void 0 === c.oauth_token ? void 0 : c.oauth_token;
    const n = void 0 === c.prettyPrint ? void 0 : c.prettyPrint;
    const q = void 0 === c.quotaUser ? void 0 : c.quotaUser;
    const w = void 0 === c.uploadType ? void 0 : c.uploadType;
    c = void 0 === c.upload_protocol ? void 0 : c.upload_protocol;
    this.h.w(a, /^projects\/[^/]+\/operations\/.+$/);
    return G(this.h, {
      body: null,
      u: 'GET',
      B: 'earthengine.projects.operations.get',
      path: `/${this.m}/${a}`,
      o: {
        '$.xgafv': b,
        access_token: d,
        alt: e,
        callback: f,
        fields: g,
        key: h,
        oauth_token: m,
        prettyPrint: n,
        quotaUser: q,
        uploadType: w,
        upload_protocol: c
      },
      D: bg
    });
  };
  k.list = function(a, b) {
    let c =
      void 0 === b
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            filter: void 0,
            key: void 0,
            oauth_token: void 0,
            pageSize: void 0,
            pageToken: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : b;
    b = void 0 === c.$Xgafv ? void 0 : c.$Xgafv;
    const d = void 0 === c.access_token ? void 0 : c.access_token;
    const e = void 0 === c.alt ? void 0 : c.alt;
    const f = void 0 === c.callback ? void 0 : c.callback;
    const g = void 0 === c.fields ? void 0 : c.fields;
    const h = void 0 === c.filter ? void 0 : c.filter;
    const m = void 0 === c.key ? void 0 : c.key;
    const n = void 0 === c.oauth_token ? void 0 : c.oauth_token;
    const q = void 0 === c.pageSize ? void 0 : c.pageSize;
    const w = void 0 === c.pageToken ? void 0 : c.pageToken;
    const z = void 0 === c.prettyPrint ? void 0 : c.prettyPrint;
    const E = void 0 === c.quotaUser ? void 0 : c.quotaUser;
    const M = void 0 === c.uploadType ? void 0 : c.uploadType;
    c = void 0 === c.upload_protocol ? void 0 : c.upload_protocol;
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: null,
      u: 'GET',
      B: 'earthengine.projects.operations.list',
      path: `/${this.m}/${a}/operations`,
      o: {
        '$.xgafv': b,
        access_token: d,
        alt: e,
        callback: f,
        fields: g,
        filter: h,
        key: m,
        oauth_token: n,
        pageSize: q,
        pageToken: w,
        prettyPrint: z,
        quotaUser: E,
        uploadType: M,
        upload_protocol: c
      },
      D: ag
    });
  };
  k.wait = function(a, b, c) {
    let d =
      void 0 === c
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : c;
    c = void 0 === d.$Xgafv ? void 0 : d.$Xgafv;
    const e = void 0 === d.access_token ? void 0 : d.access_token;
    const f = void 0 === d.alt ? void 0 : d.alt;
    const g = void 0 === d.callback ? void 0 : d.callback;
    const h = void 0 === d.fields ? void 0 : d.fields;
    const m = void 0 === d.key ? void 0 : d.key;
    const n = void 0 === d.oauth_token ? void 0 : d.oauth_token;
    const q = void 0 === d.prettyPrint ? void 0 : d.prettyPrint;
    const w = void 0 === d.quotaUser ? void 0 : d.quotaUser;
    const z = void 0 === d.uploadType ? void 0 : d.uploadType;
    d = void 0 === d.upload_protocol ? void 0 : d.upload_protocol;
    this.h.w(a, /^projects\/[^/]+\/operations\/.+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.operations.wait',
      path: `/${this.m}/${a}:wait`,
      o: {
        '$.xgafv': c,
        access_token: e,
        alt: f,
        callback: g,
        fields: h,
        key: m,
        oauth_token: n,
        prettyPrint: q,
        quotaUser: w,
        uploadType: z,
        upload_protocol: d
      },
      D: bg
    });
  };
  const Ag = function(a) {
    this.m = 'v1alpha';
    this.h = new be(a, null);
  };
  Ag.prototype.Wa = function(a, b) {
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.table.export',
      path: `/${this.m}/${a}/table:export`,
      o: {
        '$.xgafv': void 0,
        access_token: void 0,
        alt: void 0,
        callback: void 0,
        fields: void 0,
        key: void 0,
        oauth_token: void 0,
        prettyPrint: void 0,
        quotaUser: void 0,
        uploadType: void 0,
        upload_protocol: void 0
      },
      D: bg
    });
  };
  Ag.prototype.import = function(a, b, c) {
    let d =
      void 0 === c
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : c;
    c = void 0 === d.$Xgafv ? void 0 : d.$Xgafv;
    const e = void 0 === d.access_token ? void 0 : d.access_token;
    const f = void 0 === d.alt ? void 0 : d.alt;
    const g = void 0 === d.callback ? void 0 : d.callback;
    const h = void 0 === d.fields ? void 0 : d.fields;
    const m = void 0 === d.key ? void 0 : d.key;
    const n = void 0 === d.oauth_token ? void 0 : d.oauth_token;
    const q = void 0 === d.prettyPrint ? void 0 : d.prettyPrint;
    const w = void 0 === d.quotaUser ? void 0 : d.quotaUser;
    const z = void 0 === d.uploadType ? void 0 : d.uploadType;
    d = void 0 === d.upload_protocol ? void 0 : d.upload_protocol;
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.table.import',
      path: `/${this.m}/${a}/table:import`,
      o: {
        '$.xgafv': c,
        access_token: e,
        alt: f,
        callback: g,
        fields: h,
        key: m,
        oauth_token: n,
        prettyPrint: q,
        quotaUser: w,
        uploadType: z,
        upload_protocol: d
      },
      D: bg
    });
  };
  const Bg = function(a) {
    this.m = 'v1alpha';
    this.h = new be(a, null);
  };
  Bg.prototype.create = function(a, b, c) {
    let d =
      void 0 === c
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : c;
    c = void 0 === d.$Xgafv ? void 0 : d.$Xgafv;
    const e = void 0 === d.access_token ? void 0 : d.access_token;
    const f = void 0 === d.alt ? void 0 : d.alt;
    const g = void 0 === d.callback ? void 0 : d.callback;
    const h = void 0 === d.fields ? void 0 : d.fields;
    const m = void 0 === d.key ? void 0 : d.key;
    const n = void 0 === d.oauth_token ? void 0 : d.oauth_token;
    const q = void 0 === d.prettyPrint ? void 0 : d.prettyPrint;
    const w = void 0 === d.quotaUser ? void 0 : d.quotaUser;
    const z = void 0 === d.uploadType ? void 0 : d.uploadType;
    d = void 0 === d.upload_protocol ? void 0 : d.upload_protocol;
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.thumbnails.create',
      path: `/${this.m}/${a}/thumbnails`,
      o: {
        '$.xgafv': c,
        access_token: e,
        alt: f,
        callback: g,
        fields: h,
        key: m,
        oauth_token: n,
        prettyPrint: q,
        quotaUser: w,
        uploadType: z,
        upload_protocol: d
      },
      D: lg
    });
  };
  const Cg = function(a) {
    this.m = 'v1alpha';
    this.h = new be(a, null);
  };
  const Dg = function(a, b, c) {
    a.h.w(b, /^projects\/[^/]+$/);
    return G(a.h, {
      body: c,
      u: 'POST',
      B: 'earthengine.projects.value.compute',
      path: `/${a.m}/${b}/value:compute`,
      o: {
        '$.xgafv': void 0,
        access_token: void 0,
        alt: void 0,
        callback: void 0,
        fields: void 0,
        key: void 0,
        oauth_token: void 0,
        prettyPrint: void 0,
        quotaUser: void 0,
        uploadType: void 0,
        upload_protocol: void 0
      },
      D: Xe
    });
  };
  const Eg = function(a) {
    this.m = 'v1alpha';
    this.h = new be(a, null);
  };
  Eg.prototype.Wa = function(a, b) {
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.video.export',
      path: `/${this.m}/${a}/video:export`,
      o: {
        '$.xgafv': void 0,
        access_token: void 0,
        alt: void 0,
        callback: void 0,
        fields: void 0,
        key: void 0,
        oauth_token: void 0,
        prettyPrint: void 0,
        quotaUser: void 0,
        uploadType: void 0,
        upload_protocol: void 0
      },
      D: bg
    });
  };
  const Fg = function(a) {
    this.m = 'v1alpha';
    this.h = new be(a, null);
  };
  Fg.prototype.Wa = function(a, b) {
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.videoMap.export',
      path: `/${this.m}/${a}/videoMap:export`,
      o: {
        '$.xgafv': void 0,
        access_token: void 0,
        alt: void 0,
        callback: void 0,
        fields: void 0,
        key: void 0,
        oauth_token: void 0,
        prettyPrint: void 0,
        quotaUser: void 0,
        uploadType: void 0,
        upload_protocol: void 0
      },
      D: bg
    });
  };
  const Gg = function(a) {
    this.m = 'v1alpha';
    this.h = new be(a, null);
  };
  Gg.prototype.create = function(a, b, c) {
    let d =
      void 0 === c
        ? {
            $Xgafv: void 0,
            access_token: void 0,
            alt: void 0,
            callback: void 0,
            fields: void 0,
            key: void 0,
            oauth_token: void 0,
            prettyPrint: void 0,
            quotaUser: void 0,
            uploadType: void 0,
            upload_protocol: void 0
          }
        : c;
    c = void 0 === d.$Xgafv ? void 0 : d.$Xgafv;
    const e = void 0 === d.access_token ? void 0 : d.access_token;
    const f = void 0 === d.alt ? void 0 : d.alt;
    const g = void 0 === d.callback ? void 0 : d.callback;
    const h = void 0 === d.fields ? void 0 : d.fields;
    const m = void 0 === d.key ? void 0 : d.key;
    const n = void 0 === d.oauth_token ? void 0 : d.oauth_token;
    const q = void 0 === d.prettyPrint ? void 0 : d.prettyPrint;
    const w = void 0 === d.quotaUser ? void 0 : d.quotaUser;
    const z = void 0 === d.uploadType ? void 0 : d.uploadType;
    d = void 0 === d.upload_protocol ? void 0 : d.upload_protocol;
    this.h.w(a, /^projects\/[^/]+$/);
    return G(this.h, {
      body: b,
      u: 'POST',
      B: 'earthengine.projects.videoThumbnails.create',
      path: `/${this.m}/${a}/videoThumbnails`,
      o: {
        '$.xgafv': c,
        access_token: e,
        alt: f,
        callback: g,
        fields: h,
        key: m,
        oauth_token: n,
        prettyPrint: q,
        quotaUser: w,
        uploadType: z,
        upload_protocol: d
      },
      D: qg
    });
  };
  const Hg = function(a, b) {
    this.xi = 100;
    this.li = a;
    this.Ji = b;
    this.vd = 0;
    this.ka = null;
  };
  Hg.prototype.get = function() {
    if (this.vd > 0) {
      this.vd--;
      var a = this.ka;
      this.ka = a.next;
      a.next = null;
    } else a = this.li();
    return a;
  };
  Hg.prototype.put = function(a) {
    this.Ji(a);
    this.vd < this.xi && (this.vd++, (a.next = this.ka), (this.ka = a));
  };
  const Ig = !Ac || Number(Lc) >= 9;
  const Jg = (!Cc && !Ac) || (Ac && Number(Lc) >= 9) || (Cc && Kc('1.9.1'));
  const Kg = function(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  };
  k = Kg.prototype;
  k.clone = function() {
    return new Kg(this.x, this.y);
  };
  k.toString = function() {
    return `(${this.x}, ${this.y})`;
  };
  k.equals = function(a) {
    return a instanceof Kg && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1);
  };
  k.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  k.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  k.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  k.translate = function(a, b) {
    a instanceof Kg
      ? ((this.x += a.x), (this.y += a.y))
      : ((this.x += Number(a)), typeof b === 'number' && (this.y += b));
    return this;
  };
  k.scale = function(a, b) {
    this.x *= a;
    this.y *= typeof b === 'number' ? b : a;
    return this;
  };
  const Lg = function(a, b) {
    this.width = a;
    this.height = b;
  };
  k = Lg.prototype;
  k.clone = function() {
    return new Lg(this.width, this.height);
  };
  k.toString = function() {
    return `(${this.width} x ${this.height})`;
  };
  k.aspectRatio = function() {
    return this.width / this.height;
  };
  k.isEmpty = function() {
    return !(this.width * this.height);
  };
  k.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  k.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  k.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  k.scale = function(a, b) {
    this.width *= a;
    this.height *= typeof b === 'number' ? b : a;
    return this;
  };
  const Ng = function(a, b) {
    Bb(b, function(c, d) {
      c && typeof c === 'object' && c.Bb && (c = c.zb());
      d == 'style'
        ? (a.style.cssText = c)
        : d == 'class'
          ? (a.className = c)
          : d == 'for'
            ? (a.htmlFor = c)
            : Mg.hasOwnProperty(d)
              ? a.setAttribute(Mg[d], c)
              : d.lastIndexOf('aria-', 0) == 0 || d.lastIndexOf('data-', 0) == 0
                ? a.setAttribute(d, c)
                : (a[d] = c);
    });
  };
  var Mg = {
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    colspan: 'colSpan',
    frameborder: 'frameBorder',
    height: 'height',
    maxlength: 'maxLength',
    nonce: 'nonce',
    role: 'role',
    rowspan: 'rowSpan',
    type: 'type',
    usemap: 'useMap',
    valign: 'vAlign',
    width: 'width'
  };
  const Pg = function(a, b, c) {
    return Og(document, arguments);
  };
  var Og = function(a, b) {
    let c = String(b[0]);
    let d = b[1];
    if (!Ig && d && (d.name || d.type)) {
      c = ['<', c];
      d.name && c.push(' name="', uc(d.name), '"');
      if (d.type) {
        c.push(' type="', uc(d.type), '"');
        const e = {};
        Pb(e, d);
        delete e.type;
        d = e;
      }
      c.push('>');
      c = c.join('');
    }
    c = Qg(a, c);
    d &&
      (typeof d === 'string' ? (c.className = d) : u(d) ? (c.className = d.join(' ')) : Ng(c, d));
    b.length > 2 && Rg(a, c, b, 2);
    return c;
  };
  var Rg = function(a, b, c, d) {
    function e(g) {
      g && b.appendChild(typeof g === 'string' ? a.createTextNode(g) : g);
    }
    for (; d < c.length; d++) {
      const f = c[d];
      !za(f) || (v(f) && f.nodeType > 0) ? e(f) : Wa(Sg(f) ? ib(f) : f, e);
    }
  };
  var Qg = function(a, b) {
    b = String(b);
    a.contentType === 'application/xhtml+xml' && (b = b.toLowerCase());
    return a.createElement(b);
  };
  const Tg = function(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  };
  const Ug = function(a) {
    for (; a && a.nodeType != 1; ) a = a.nextSibling;
    return a;
  };
  const Vg = function(a) {
    B(a, 'Node cannot be null or undefined.');
    return a.nodeType == 9 ? a : a.ownerDocument || a.document;
  };
  var Sg = function(a) {
    if (a && typeof a.length === 'number') {
      if (v(a)) return typeof a.item === 'function' || typeof a.item === 'string';
      if (Ba(a)) return typeof a.item === 'function';
    }
    return !1;
  };
  const Wg = function(a) {
    this.gd = a || t.document || document;
  };
  k = Wg.prototype;
  k.getElementsByTagName = function(a, b) {
    return (b || this.gd).getElementsByTagName(String(a));
  };
  k.ki = function(a, b, c) {
    return Og(this.gd, arguments);
  };
  k.createElement = function(a) {
    return Qg(this.gd, a);
  };
  k.createTextNode = function(a) {
    return this.gd.createTextNode(String(a));
  };
  k.appendChild = function(a, b) {
    B(a != null && b != null, 'goog.dom.appendChild expects non-null arguments');
    a.appendChild(b);
  };
  k.append = function(a, b) {
    Rg(Vg(a), a, arguments, 1);
  };
  k.canHaveChildren = function(a) {
    if (a.nodeType != 1) return !1;
    switch (a.tagName) {
      case 'APPLET':
      case 'AREA':
      case 'BASE':
      case 'BR':
      case 'COL':
      case 'COMMAND':
      case 'EMBED':
      case 'FRAME':
      case 'HR':
      case 'IMG':
      case 'INPUT':
      case 'IFRAME':
      case 'ISINDEX':
      case 'KEYGEN':
      case 'LINK':
      case 'NOFRAMES':
      case 'NOSCRIPT':
      case 'META':
      case 'OBJECT':
      case 'PARAM':
      case 'SCRIPT':
      case 'SOURCE':
      case 'STYLE':
      case 'TRACK':
      case 'WBR':
        return !1;
    }
    return !0;
  };
  k.removeNode = Tg;
  k.Eg = function() {
    return Jg && void 0 != (void 0).children
      ? (void 0).children
      : Xa((void 0).childNodes, function(a) {
          return a.nodeType == 1;
        });
  };
  k.contains = function(a, b) {
    if (!a || !b) return !1;
    if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
    if (typeof a.compareDocumentPosition !== 'undefined')
      return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  const Xg = function(a) {
    t.setTimeout(function() {
      throw a;
    }, 0);
  };
  let Yg;
  const Zg = function() {
    let a = t.MessageChannel;
    typeof a === 'undefined' &&
      typeof window !== 'undefined' &&
      window.postMessage &&
      window.addEventListener &&
      !Ab('Presto') &&
      (a = function() {
        let e = Qg(document, 'IFRAME');
        e.style.display = 'none';
        rc(e);
        document.documentElement.appendChild(e);
        const f = e.contentWindow;
        e = f.document;
        e.open();
        e.write(qc());
        e.close();
        const g = `callImmediate${Math.random()}`;
        const h =
          f.location.protocol == 'file:' ? '*' : `${f.location.protocol}//${f.location.host}`;
        e = x(function(m) {
          if ((h == '*' || m.origin == h) && m.data == g) this.port1.onmessage();
        }, this);
        f.addEventListener('message', e, !1);
        this.port1 = {};
        this.port2 = {
          postMessage() {
            f.postMessage(g, h);
          }
        };
      });
    if (typeof a !== 'undefined' && !Ab('Trident') && !Ab('MSIE')) {
      const b = new a();
      let c = {};
      let d = c;
      b.port1.onmessage = function() {
        if (void 0 !== c.next) {
          c = c.next;
          const e = c.ag;
          c.ag = null;
          e();
        }
      };
      return function(e) {
        d.next = {ag: e};
        d = d.next;
        b.port2.postMessage(0);
      };
    }
    return typeof document !== 'undefined' && 'onreadystatechange' in Qg(document, 'SCRIPT')
      ? function(e) {
          let f = Qg(document, 'SCRIPT');
          f.onreadystatechange = function() {
            f.onreadystatechange = null;
            f.parentNode.removeChild(f);
            f = null;
            e();
            e = null;
          };
          document.documentElement.appendChild(f);
        }
      : function(e) {
          t.setTimeout(e, 0);
        };
  };
  const $g = function() {
    this.Pd = this.Qb = null;
  };
  const bh = new Hg(
    function() {
      return new ah();
    },
    function(a) {
      a.reset();
    }
  );
  $g.prototype.add = function(a, b) {
    const c = bh.get();
    c.set(a, b);
    this.Pd ? (this.Pd.next = c) : (B(!this.Qb), (this.Qb = c));
    this.Pd = c;
  };
  $g.prototype.remove = function() {
    let a = null;
    this.Qb &&
      ((a = this.Qb), (this.Qb = this.Qb.next), this.Qb || (this.Pd = null), (a.next = null));
    return a;
  };
  var ah = function() {
    this.next = this.scope = this.De = null;
  };
  ah.prototype.set = function(a, b) {
    this.De = a;
    this.scope = b;
    this.next = null;
  };
  ah.prototype.reset = function() {
    this.next = this.scope = this.De = null;
  };
  const gh = function(a, b) {
    ch || dh();
    eh || (ch(), (eh = !0));
    fh.add(a, b);
  };
  let ch;
  var dh = function() {
    if (t.Promise && t.Promise.resolve) {
      const a = t.Promise.resolve(void 0);
      ch = function() {
        a.then(hh);
      };
    } else
      ch = function() {
        const b = hh;
        !Ba(t.setImmediate) ||
        (t.Window &&
          t.Window.prototype &&
          !Ab('Edge') &&
          t.Window.prototype.setImmediate == t.setImmediate)
          ? (Yg || (Yg = Zg()), Yg(b))
          : t.setImmediate(b);
      };
  };
  var eh = !1;
  var fh = new $g();
  var hh = function() {
    for (var a; (a = fh.remove()); ) {
      try {
        a.De.call(a.scope);
      } catch (b) {
        Xg(b);
      }
      bh.put(a);
    }
    eh = !1;
  };
  const ih = function(a) {
    if (!a) return !1;
    try {
      return Boolean(a.$goog_Thenable);
    } catch (b) {
      return !1;
    }
  };
  const lh = function(a) {
    this.W = 0;
    this.ta = void 0;
    this.Tb = this.Ua = this.O = null;
    this.md = this.ze = !1;
    if (a != xa)
      try {
        const b = this;
        a.call(
          void 0,
          function(c) {
            jh(b, 2, c);
          },
          function(c) {
            if (!(c instanceof kh))
              try {
                if (c instanceof Error) throw c;
                throw Error('Promise rejected.');
              } catch (d) {}
            jh(b, 3, c);
          }
        );
      } catch (c) {
        jh(this, 3, c);
      }
  };
  const mh = function() {
    this.next = this.context = this.$b = this.Gb = this.qb = null;
    this.ad = !1;
  };
  mh.prototype.reset = function() {
    this.context = this.$b = this.Gb = this.qb = null;
    this.ad = !1;
  };
  const nh = new Hg(
    function() {
      return new mh();
    },
    function(a) {
      a.reset();
    }
  );
  const oh = function(a, b, c) {
    const d = nh.get();
    d.Gb = a;
    d.$b = b;
    d.context = c;
    return d;
  };
  lh.prototype.then = function(a, b, c) {
    a != null && Sa(a, 'opt_onFulfilled should be a function.');
    b != null &&
      Sa(
        b,
        'opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?'
      );
    return ph(this, Ba(a) ? a : null, Ba(b) ? b : null, c);
  };
  lh.prototype.$goog_Thenable = !0;
  lh.prototype.cancel = function(a) {
    if (this.W == 0) {
      const b = new kh(a);
      gh(function() {
        qh(this, b);
      }, this);
    }
  };
  var qh = function(a, b) {
    if (a.W == 0)
      if (a.O) {
        const c = a.O;
        if (c.Ua) {
          for (
            var d = 0, e = null, f = null, g = c.Ua;
            g && (g.ad || (d++, g.qb == a && (e = g), !(e && d > 1)));
            g = g.next
          )
            e || (f = g);
          e &&
            (c.W == 0 && d == 1
              ? qh(c, b)
              : (f
                  ? ((d = f),
                    B(c.Ua),
                    B(d != null),
                    d.next == c.Tb && (c.Tb = d),
                    (d.next = d.next.next))
                  : rh(c),
                sh(c, e, 3, b)));
        }
        a.O = null;
      } else jh(a, 3, b);
  };
  const uh = function(a, b) {
    a.Ua || (a.W != 2 && a.W != 3) || th(a);
    B(b.Gb != null);
    a.Tb ? (a.Tb.next = b) : (a.Ua = b);
    a.Tb = b;
  };
  var ph = function(a, b, c, d) {
    const e = oh(null, null, null);
    e.qb = new lh(function(f, g) {
      e.Gb = b
        ? function(h) {
            try {
              const m = b.call(d, h);
              f(m);
            } catch (n) {
              g(n);
            }
          }
        : f;
      e.$b = c
        ? function(h) {
            try {
              const m = c.call(d, h);
              void 0 === m && h instanceof kh ? g(h) : f(m);
            } catch (n) {
              g(n);
            }
          }
        : g;
    });
    e.qb.O = a;
    uh(a, e);
    return e.qb;
  };
  lh.prototype.Ri = function(a) {
    B(this.W == 1);
    this.W = 0;
    jh(this, 2, a);
  };
  lh.prototype.Si = function(a) {
    B(this.W == 1);
    this.W = 0;
    jh(this, 3, a);
  };
  var jh = function(a, b, c) {
    if (a.W == 0) {
      a === c && ((b = 3), (c = new TypeError('Promise cannot resolve to itself')));
      a.W = 1;
      a: {
        const d = c;
        const e = a.Ri;
        const f = a.Si;
        if (d instanceof lh) {
          e != null && Sa(e, 'opt_onFulfilled should be a function.');
          f != null &&
            Sa(
              f,
              'opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?'
            );
          uh(d, oh(e || xa, f || null, a));
          var g = !0;
        } else if (ih(d)) d.then(e, f, a), (g = !0);
        else {
          if (v(d))
            try {
              const h = d.then;
              if (Ba(h)) {
                vh(d, h, e, f, a);
                g = !0;
                break a;
              }
            } catch (m) {
              f.call(a, m);
              g = !0;
              break a;
            }
          g = !1;
        }
      }
      g || ((a.ta = c), (a.W = b), (a.O = null), th(a), b != 3 || c instanceof kh || wh(a, c));
    }
  };
  var vh = function(a, b, c, d, e) {
    let f = !1;
    const g = function(m) {
      f || ((f = !0), c.call(e, m));
    };
    const h = function(m) {
      f || ((f = !0), d.call(e, m));
    };
    try {
      b.call(a, g, h);
    } catch (m) {
      h(m);
    }
  };
  var th = function(a) {
    a.ze || ((a.ze = !0), gh(a.oi, a));
  };
  var rh = function(a) {
    let b = null;
    a.Ua && ((b = a.Ua), (a.Ua = b.next), (b.next = null));
    a.Ua || (a.Tb = null);
    b != null && B(b.Gb != null);
    return b;
  };
  lh.prototype.oi = function() {
    for (var a; (a = rh(this)); ) sh(this, a, this.W, this.ta);
    this.ze = !1;
  };
  var sh = function(a, b, c, d) {
    if (c == 3 && b.$b && !b.ad) for (; a && a.md; a = a.O) a.md = !1;
    if (b.qb) (b.qb.O = null), xh(b, c, d);
    else
      try {
        b.ad ? b.Gb.call(b.context) : xh(b, c, d);
      } catch (e) {
        yh.call(null, e);
      }
    nh.put(b);
  };
  var xh = function(a, b, c) {
    b == 2 ? a.Gb.call(a.context, c) : a.$b && a.$b.call(a.context, c);
  };
  var wh = function(a, b) {
    a.md = !0;
    gh(function() {
      a.md && yh.call(null, b);
    });
  };
  var yh = Xg;
  var kh = function(a) {
    La.call(this, a);
  };
  A(kh, La);
  kh.prototype.name = 'cancel';
  const zh = function(a, b, c) {
    if (Ba(a)) c && (a = x(a, c));
    else if (a && typeof a.handleEvent === 'function') a = x(a.handleEvent, a);
    else throw Error('Invalid listener argument');
    return Number(b) > 2147483647 ? -1 : t.setTimeout(a, b || 0);
  };
  const Ah = function(a, b, c) {
    Ia.call(this);
    this.yi = c != null ? x(a, c) : a;
    this.vi = b;
    this.hi = x(this.Gi, this);
    this.be = [];
  };
  A(Ah, Ia);
  k = Ah.prototype;
  k.gc = !1;
  k.Lc = 0;
  k.Mb = null;
  k.Ce = function(a) {
    this.be = arguments;
    this.Mb || this.Lc ? (this.gc = !0) : Bh(this);
  };
  k.stop = function() {
    this.Mb && (t.clearTimeout(this.Mb), (this.Mb = null), (this.gc = !1), (this.be = []));
  };
  k.pause = function() {
    this.Lc++;
  };
  k.resume = function() {
    this.Lc--;
    this.Lc || !this.gc || this.Mb || ((this.gc = !1), Bh(this));
  };
  k.C = function() {
    Ah.F.C.call(this);
    this.stop();
  };
  k.Gi = function() {
    this.Mb = null;
    this.gc && !this.Lc && ((this.gc = !1), Bh(this));
  };
  var Bh = function(a) {
    a.Mb = zh(a.hi, a.vi);
    a.yi.apply(null, a.be);
  }; /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
  const Dh = function(a) {
    const b = Ch;
    this.Cd = [];
    this.dh = b;
    this.og = a || null;
    this.Ac = this.Xb = !1;
    this.ta = void 0;
    this.xf = this.Vf = this.fe = !1;
    this.Kd = 0;
    this.O = null;
    this.ge = 0;
  };
  Dh.prototype.cancel = function(a) {
    if (this.Xb) this.ta instanceof Dh && this.ta.cancel();
    else {
      if (this.O) {
        const b = this.O;
        delete this.O;
        a ? b.cancel(a) : (b.ge--, b.ge <= 0 && b.cancel());
      }
      this.dh ? this.dh.call(this.og, this) : (this.xf = !0);
      this.Xb || Eh(this, new Fh(this));
    }
  };
  Dh.prototype.dg = function(a, b) {
    this.fe = !1;
    Gh(this, a, b);
  };
  var Gh = function(a, b, c) {
    a.Xb = !0;
    a.ta = c;
    a.Ac = !b;
    Hh(a);
  };
  const Jh = function(a) {
    if (a.Xb) {
      if (!a.xf) throw new Ih(a);
      a.xf = !1;
    }
  };
  Dh.prototype.callback = function(a) {
    Jh(this);
    Kh(a);
    Gh(this, !0, a);
  };
  var Eh = function(a, b) {
    Jh(a);
    Kh(b);
    Gh(a, !1, b);
  };
  var Kh = function(a) {
    B(!(a instanceof Dh), 'An execution sequence may not be initiated with a blocking Deferred.');
  };
  const Lh = function(a, b, c) {
    B(!a.Vf, 'Blocking Deferreds can not be re-used');
    a.Cd.push([b, c, void 0]);
    a.Xb && Hh(a);
  };
  Dh.prototype.then = function(a, b, c) {
    let d;
    let e;
    const f = new lh(function(g, h) {
      d = g;
      e = h;
    });
    Lh(this, d, function(g) {
      g instanceof Fh ? f.cancel() : e(g);
    });
    return f.then(a, b, c);
  };
  Dh.prototype.$goog_Thenable = !0;
  const Mh = function(a) {
    return Za(a.Cd, function(b) {
      return Ba(b[1]);
    });
  };
  var Hh = function(a) {
    if (a.Kd && a.Xb && Mh(a)) {
      var b = a.Kd;
      var c = Nh[b];
      c && (t.clearTimeout(c.da), delete Nh[b]);
      a.Kd = 0;
    }
    a.O && (a.O.ge--, delete a.O);
    b = a.ta;
    for (var d = (c = !1); a.Cd.length && !a.fe; ) {
      let e = a.Cd.shift();
      let f = e[0];
      const g = e[1];
      e = e[2];
      if ((f = a.Ac ? g : f))
        try {
          var h = f.call(e || a.og, b);
          void 0 !== h && ((a.Ac = a.Ac && (h == b || h instanceof Error)), (a.ta = b = h));
          if (ih(b) || (typeof t.Promise === 'function' && b instanceof t.Promise))
            (d = !0), (a.fe = !0);
        } catch (m) {
          (b = m), (a.Ac = !0), Mh(a) || (c = !0);
        }
    }
    a.ta = b;
    d &&
      ((h = x(a.dg, a, !0)),
      (d = x(a.dg, a, !1)),
      b instanceof Dh ? (Lh(b, h, d), (b.Vf = !0)) : b.then(h, d));
    c && ((b = new Oh(b)), (Nh[b.da] = b), (a.Kd = b.da));
  };
  var Ih = function() {
    La.call(this);
  };
  A(Ih, La);
  Ih.prototype.message = 'Deferred has already fired';
  Ih.prototype.name = 'AlreadyCalledError';
  var Fh = function() {
    La.call(this);
  };
  A(Fh, La);
  Fh.prototype.message = 'Deferred was canceled';
  Fh.prototype.name = 'CanceledError';
  var Oh = function(a) {
    this.da = t.setTimeout(x(this.Qi, this), 0);
    this.jd = a;
  };
  Oh.prototype.Qi = function() {
    B(Nh[this.da], 'Cannot throw an error that is not scheduled.');
    delete Nh[this.da];
    throw this.jd;
  };
  var Nh = {};
  const Sh = function(a) {
    const b = {};
    const c = b.document || document;
    const d = ac(a).toString();
    const e = Qg(document, 'SCRIPT');
    let f = {wh: e, Qc: void 0};
    const g = new Dh(f);
    let h = null;
    const m = b.timeout != null ? b.timeout : 5e3;
    m > 0 &&
      ((h = window.setTimeout(function() {
        Ph(e, !0);
        Eh(g, new Qh(1, `Timeout reached for loading script ${d}`));
      }, m)),
      (f.Qc = h));
    e.onload = e.onreadystatechange = function() {
      (e.readyState && e.readyState != 'loaded' && e.readyState != 'complete') ||
        (Ph(e, b.rk || !1, h), g.callback(null));
    };
    e.onerror = function() {
      Ph(e, !0, h);
      Eh(g, new Qh(0, `Error while loading script ${d}`));
    };
    f = b.attributes || {};
    Pb(f, {type: 'text/javascript', charset: 'UTF-8'});
    Ng(e, f);
    sc(e, a);
    Rh(c).appendChild(e);
  };
  var Rh = function(a) {
    let b;
    return (b = (a || document).getElementsByTagName('HEAD')) && b.length != 0
      ? b[0]
      : a.documentElement;
  };
  var Ch = function() {
    if (this && this.wh) {
      const a = this.wh;
      a && a.tagName == 'SCRIPT' && Ph(a, !0, this.Qc);
    }
  };
  var Ph = function(a, b, c) {
    c != null && t.clearTimeout(c);
    a.onload = xa;
    a.onerror = xa;
    a.onreadystatechange = xa;
    b &&
      window.setTimeout(function() {
        Tg(a);
      }, 0);
  };
  var Qh = function(a, b) {
    let c = `Jsloader error (code #${a})`;
    b && (c += `: ${b}`);
    La.call(this, c);
    this.code = a;
  };
  A(Qh, La);
  const Uh = function(a) {
    return new Th(void 0).Y(a);
  };
  var Th = function(a) {
    this.Ad = a;
  };
  Th.prototype.Y = function(a) {
    const b = [];
    Vh(this, a, b);
    return b.join('');
  };
  var Vh = function(a, b, c) {
    if (b == null) c.push('null');
    else {
      if (typeof b === 'object') {
        if (u(b)) {
          var d = b;
          b = d.length;
          c.push('[');
          for (var e = '', f = 0; f < b; f++)
            c.push(e), (e = d[f]), Vh(a, a.Ad ? a.Ad.call(d, String(f), e) : e, c), (e = ',');
          c.push(']');
          return;
        }
        if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
        else {
          c.push('{');
          f = '';
          for (d in b)
            Object.prototype.hasOwnProperty.call(b, d) &&
              ((e = b[d]),
              typeof e !== 'function' &&
                (c.push(f),
                Wh(d, c),
                c.push(':'),
                Vh(a, a.Ad ? a.Ad.call(b, d, e) : e, c),
                (f = ',')));
          c.push('}');
          return;
        }
      }
      switch (typeof b) {
        case 'string':
          Wh(b, c);
          break;
        case 'number':
          c.push(isFinite(b) && !isNaN(b) ? String(b) : 'null');
          break;
        case 'boolean':
          c.push(String(b));
          break;
        case 'function':
          c.push('null');
          break;
        default:
          throw Error(`Unknown type: ${typeof b}`);
      }
    }
  };
  const Xh = {
    '"': '\\"',
    '\\': '\\\\',
    '/': '\\/',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\x0B': '\\u000b'
  };
  const Yh = /\uffff/.test('\uffff') ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
  var Wh = function(a, b) {
    b.push(
      '"',
      a.replace(Yh, function(c) {
        let d = Xh[c];
        d || ((d = `\\u${(c.charCodeAt(0) | 65536).toString(16).substr(1)}`), (Xh[c] = d));
        return d;
      }),
      '"'
    );
  };
  const Zh = function(a, b, c) {
    this.reset(a, b, c, void 0, void 0);
  };
  Zh.prototype.tg = null;
  let $h = 0;
  Zh.prototype.reset = function(a, b, c, d, e) {
    typeof e === 'number' || $h++;
    d || Ha();
    this.Ec = a;
    delete this.tg;
  };
  Zh.prototype.yh = function(a) {
    this.Ec = a;
  };
  const ai = function(a) {
    this.Di = a;
    this.Hg = this.ke = this.Ec = this.O = null;
  };
  const bi = function(a, b) {
    this.name = a;
    this.value = b;
  };
  bi.prototype.toString = function() {
    return this.name;
  };
  const ci = new bi('SEVERE', 1e3);
  const di = new bi('INFO', 800);
  const ei = new bi('CONFIG', 700);
  const fi = new bi('FINE', 500);
  ai.prototype.getParent = function() {
    return this.O;
  };
  ai.prototype.Eg = function() {
    this.ke || (this.ke = {});
    return this.ke;
  };
  ai.prototype.yh = function(a) {
    this.Ec = a;
  };
  var hi = function(a) {
    if (a.Ec) return a.Ec;
    if (a.O) return hi(a.O);
    Pa('Root logger has no level set.');
    return null;
  };
  ai.prototype.log = function(a, b, c) {
    if (a.value >= hi(this).value)
      for (Ba(b) && (b = b()), a = new Zh(a, String(b), this.Di), c && (a.tg = c), c = this; c; ) {
        const d = c;
        const e = a;
        if (d.Hg) for (let f = 0; (b = d.Hg[f]); f++) b(e);
        c = c.getParent();
      }
  };
  ai.prototype.info = function(a, b) {
    this.log(di, a, b);
  };
  const ii = {};
  let ji = null;
  var ki = function(a) {
    ji || ((ji = new ai('')), (ii[''] = ji), ji.yh(ei));
    let b;
    if (!(b = ii[a])) {
      b = new ai(a);
      let c = a.lastIndexOf('.');
      const d = a.substr(c + 1);
      c = ki(a.substr(0, c));
      c.Eg()[d] = b;
      b.O = c;
      ii[a] = b;
    }
    return b;
  };
  const li = function(a, b) {
    a && a.log(fi, b, void 0);
  };
  const mi = function(a) {
    switch (a) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        return !0;
      default:
        return !1;
    }
  };
  const ni = function() {};
  ni.prototype.Zf = null;
  const pi = function(a) {
    let b;
    (b = a.Zf) || ((b = {}), oi(a) && ((b[0] = !0), (b[1] = !0)), (b = a.Zf = b));
    return b;
  };
  let qi;
  const ri = function() {};
  A(ri, ni);
  const si = function(a) {
    return (a = oi(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
  };
  var oi = function(a) {
    if (!a.Mg && typeof XMLHttpRequest === 'undefined' && typeof ActiveXObject !== 'undefined') {
      for (
        let b = ['MSXML2.XMLHTTP.6.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'],
          c = 0;
        c < b.length;
        c++
      ) {
        const d = b[c];
        try {
          return new ActiveXObject(d), (a.Mg = d);
        } catch (e) {}
      }
      throw Error(
        'Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed'
      );
    }
    return a.Mg;
  };
  qi = new ri();
  const ti = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  const ui = function(a, b) {
    if (a) {
      a = a.split('&');
      for (let c = 0; c < a.length; c++) {
        const d = a[c].indexOf('=');
        let e = null;
        if (d >= 0) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, ' ')) : '');
      }
    }
  };
  const vi = function(a) {
    pd.call(this);
    this.headers = new wd();
    this.Rd = a || null;
    this.Aa = !1;
    this.Qd = this.l = null;
    this.Dc = this.Ug = this.sd = '';
    this.Cb = this.Me = this.qd = this.xe = !1;
    this.ic = 0;
    this.Hd = null;
    this.ec = '';
    this.Md = this.Hi = this.Kh = !1;
  };
  A(vi, pd);
  const wi = vi.prototype;
  const xi = ki('goog.net.XhrIo');
  wi.oa = xi;
  const yi = /^https?$/i;
  const zi = ['POST', 'PUT'];
  const Ai = [];
  vi.prototype.ji = function() {
    this.La();
    gb(Ai, this);
  };
  vi.prototype.send = function(a, b, c, d) {
    if (this.l)
      throw Error(`[goog.net.XhrIo] Object is active with another request=${this.sd}; newUri=${a}`);
    b = b ? b.toUpperCase() : 'GET';
    this.sd = a;
    this.Dc = '';
    this.Ug = b;
    this.xe = !1;
    this.Aa = !0;
    this.l = this.Rd ? si(this.Rd) : si(qi);
    this.Qd = this.Rd ? pi(this.Rd) : pi(qi);
    this.l.onreadystatechange = x(this.gh, this);
    this.Hi &&
      'onprogress' in this.l &&
      ((this.l.onprogress = x(function(f) {
        this.fh(f, !0);
      }, this)),
      this.l.upload && (this.l.upload.onprogress = x(this.fh, this)));
    try {
      li(this.oa, Bi(this, 'Opening Xhr')),
        (this.Me = !0),
        this.l.open(b, String(a), !0),
        (this.Me = !1);
    } catch (f) {
      li(this.oa, Bi(this, `Error opening Xhr: ${f.message}`));
      this.jd(5, f);
      return;
    }
    a = c || '';
    const e = this.headers.clone();
    d &&
      Dd(d, function(f, g) {
        e.set(g, f);
      });
    d = cb(e.Ea());
    c = t.FormData && a instanceof t.FormData;
    !db(zi, b) ||
      d ||
      c ||
      e.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    e.forEach(function(f, g) {
      this.l.setRequestHeader(g, f);
    }, this);
    this.ec && (this.l.responseType = this.ec);
    'withCredentials' in this.l &&
      this.l.withCredentials !== this.Kh &&
      (this.l.withCredentials = this.Kh);
    try {
      Ci(this),
        this.ic > 0 &&
          ((this.Md = Di(this.l)),
          li(this.oa, Bi(this, `Will abort after ${this.ic}ms if incomplete, xhr2 ${this.Md}`)),
          this.Md
            ? ((this.l.timeout = this.ic), (this.l.ontimeout = x(this.Qc, this)))
            : (this.Hd = zh(this.Qc, this.ic, this))),
        li(this.oa, Bi(this, 'Sending request')),
        (this.qd = !0),
        this.l.send(a),
        (this.qd = !1);
    } catch (f) {
      li(this.oa, Bi(this, `Send error: ${f.message}`)), this.jd(5, f);
    }
  };
  var Di = function(a) {
    return Ac && Kc(9) && typeof a.timeout === 'number' && void 0 !== a.ontimeout;
  };
  var bb = function(a) {
    return a.toLowerCase() == 'content-type';
  };
  vi.prototype.Qc = function() {
    typeof ua !== 'undefined' &&
      this.l &&
      ((this.Dc = `Timed out after ${this.ic}ms, aborting`),
      li(this.oa, Bi(this, this.Dc)),
      this.dispatchEvent('timeout'),
      this.abort(8));
  };
  vi.prototype.jd = function(a, b) {
    this.Aa = !1;
    this.l && ((this.Cb = !0), this.l.abort(), (this.Cb = !1));
    this.Dc = b;
    Ei(this);
    Fi(this);
  };
  var Ei = function(a) {
    a.xe || ((a.xe = !0), a.dispatchEvent('complete'), a.dispatchEvent('error'));
  };
  vi.prototype.abort = function() {
    this.l &&
      this.Aa &&
      (li(this.oa, Bi(this, 'Aborting')),
      (this.Aa = !1),
      (this.Cb = !0),
      this.l.abort(),
      (this.Cb = !1),
      this.dispatchEvent('complete'),
      this.dispatchEvent('abort'),
      Fi(this));
  };
  vi.prototype.C = function() {
    this.l &&
      (this.Aa && ((this.Aa = !1), (this.Cb = !0), this.l.abort(), (this.Cb = !1)), Fi(this, !0));
    vi.F.C.call(this);
  };
  vi.prototype.gh = function() {
    this.Ma || (this.Me || this.qd || this.Cb ? Gi(this) : this.Fi());
  };
  vi.prototype.Fi = function() {
    Gi(this);
  };
  var Gi = function(a) {
    if (a.Aa && typeof ua !== 'undefined')
      if (a.Qd[1] && a.ib() == 4 && a.getStatus() == 2)
        li(a.oa, Bi(a, 'Local request error detected and ignored'));
      else if (a.qd && a.ib() == 4) zh(a.gh, 0, a);
      else if ((a.dispatchEvent('readystatechange'), a.ib() == 4)) {
        li(a.oa, Bi(a, 'Request complete'));
        a.Aa = !1;
        try {
          const b = a.getStatus();
          let c;
          if (!(c = mi(b))) {
            let d;
            if ((d = b === 0)) {
              let e = String(a.sd).match(ti)[1] || null;
              if (!e && t.self && t.self.location) {
                const f = t.self.location.protocol;
                e = f.substr(0, f.length - 1);
              }
              d = !yi.test(e ? e.toLowerCase() : '');
            }
            c = d;
          }
          if (c) a.dispatchEvent('complete'), a.dispatchEvent('success');
          else {
            try {
              var g = a.ib() > 2 ? a.l.statusText : '';
            } catch (h) {
              li(a.oa, `Can not get status: ${h.message}`), (g = '');
            }
            a.Dc = `${g} [${a.getStatus()}]`;
            Ei(a);
          }
        } finally {
          Fi(a);
        }
      }
  };
  vi.prototype.fh = function(a, b) {
    B(
      a.type === 'progress',
      'goog.net.EventType.PROGRESS is of the same type as raw XHR progress.'
    );
    this.dispatchEvent(Hi(a, 'progress'));
    this.dispatchEvent(Hi(a, b ? 'downloadprogress' : 'uploadprogress'));
  };
  var Hi = function(a, b) {
    return {type: b, lengthComputable: a.lengthComputable, loaded: a.loaded, total: a.total};
  };
  var Fi = function(a, b) {
    if (a.l) {
      Ci(a);
      const c = a.l;
      const d = a.Qd[0] ? xa : null;
      a.l = null;
      a.Qd = null;
      b || a.dispatchEvent('ready');
      try {
        c.onreadystatechange = d;
      } catch (e) {
        (a = a.oa) &&
          a.log(ci, `Problem encountered resetting onreadystatechange: ${e.message}`, void 0);
      }
    }
  };
  var Ci = function(a) {
    a.l && a.Md && (a.l.ontimeout = null);
    a.Hd && (t.clearTimeout(a.Hd), (a.Hd = null));
  };
  vi.prototype.Rg = function() {
    return Boolean(this.l);
  };
  vi.prototype.ib = function() {
    return this.l ? this.l.readyState : 0;
  };
  vi.prototype.getStatus = function() {
    try {
      return this.ib() > 2 ? this.l.status : -1;
    } catch (a) {
      return -1;
    }
  };
  const Ii = function(a) {
    try {
      if (!a.l) return null;
      if ('response' in a.l) return a.l.response;
      switch (a.ec) {
        case '':
        case 'text':
          return a.l.responseText;
        case 'arraybuffer':
          if ('mozResponseArrayBuffer' in a.l) return a.l.mozResponseArrayBuffer;
      }
      const b = a.oa;
      b && b.log(ci, `Response type ${a.ec} is not supported on this browser`, void 0);
      return null;
    } catch (c) {
      return li(a.oa, `Can not get response: ${c.message}`), null;
    }
  };
  vi.prototype.getResponseHeader = function(a) {
    if (this.l && this.ib() == 4) return (a = this.l.getResponseHeader(a)), a === null ? void 0 : a;
  };
  vi.prototype.getAllResponseHeaders = function() {
    return this.l && this.ib() == 4 ? this.l.getAllResponseHeaders() || '' : '';
  };
  const Ji = function(a) {
    const b = {};
    a = a.getAllResponseHeaders().split('\r\n');
    for (let c = 0; c < a.length; c++)
      if (!/^[\s\xa0]*$/.test(a[c])) {
        let d = vc(a[c]);
        const e = d[0];
        d = d[1];
        if (typeof d === 'string') {
          d = d.trim();
          const f = b[e] || [];
          b[e] = f;
          f.push(d);
        }
      }
    return Db(b, function(g) {
      return g.join(', ');
    });
  };
  var Bi = function(a, b) {
    return `${b} [${a.Ug} ${a.sd} ${a.getStatus()}]`;
  };
  var Ki = function(a, b) {
    this.Va = this.Ob = this.kb = '';
    this.bc = null;
    this.wb = this.Za = '';
    this.va = this.wi = !1;
    if (a instanceof Ki) {
      this.va = void 0 !== b ? b : a.va;
      Li(this, a.kb);
      var c = a.Ob;
      Mi(this);
      this.Ob = c;
      c = a.Va;
      Mi(this);
      this.Va = c;
      Ni(this, a.bc);
      this.setPath(a.getPath());
      Oi(this, a.ya.clone());
      a = a.wb;
      Mi(this);
      this.wb = a;
    } else
      a && (c = String(a).match(ti))
        ? ((this.va = Boolean(b)),
          Li(this, c[1] || '', !0),
          (a = c[2] || ''),
          Mi(this),
          (this.Ob = Pi(a)),
          (a = c[3] || ''),
          Mi(this),
          (this.Va = Pi(a, !0)),
          Ni(this, c[4]),
          this.setPath(c[5] || '', !0),
          Oi(this, c[6] || '', !0),
          (a = c[7] || ''),
          Mi(this),
          (this.wb = Pi(a)))
        : ((this.va = Boolean(b)), (this.ya = new Qi(null, this.va)));
  };
  Ki.prototype.toString = function() {
    const a = [];
    let b = this.kb;
    b && a.push(Ri(b, Si, !0), ':');
    let c = this.Va;
    if (c || b == 'file')
      a.push('//'),
        (b = this.Ob) && a.push(Ri(b, Si, !0), '@'),
        a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        (c = this.bc),
        c != null && a.push(':', String(c));
    if ((c = this.getPath()))
      this.Va && c.charAt(0) != '/' && a.push('/'), a.push(Ri(c, c.charAt(0) == '/' ? Ti : Ui, !0));
    (c = this.ya.toString()) && a.push('?', c);
    (c = this.wb) && a.push('#', Ri(c, Vi));
    return a.join('');
  };
  Ki.prototype.resolve = function(a) {
    const b = this.clone();
    let c = Boolean(a.kb);
    c ? Li(b, a.kb) : (c = Boolean(a.Ob));
    if (c) {
      var d = a.Ob;
      Mi(b);
      b.Ob = d;
    } else c = Boolean(a.Va);
    c ? ((d = a.Va), Mi(b), (b.Va = d)) : (c = a.bc != null);
    d = a.getPath();
    if (c) Ni(b, a.bc);
    else if ((c = Boolean(a.Za))) {
      if (d.charAt(0) != '/')
        if (this.Va && !this.Za) d = `/${d}`;
        else {
          var e = b.getPath().lastIndexOf('/');
          e != -1 && (d = b.getPath().substr(0, e + 1) + d);
        }
      e = d;
      if (e == '..' || e == '.') d = '';
      else if (e.indexOf('./') != -1 || e.indexOf('/.') != -1) {
        d = e.lastIndexOf('/', 0) == 0;
        e = e.split('/');
        for (var f = [], g = 0; g < e.length; ) {
          const h = e[g++];
          h == '.'
            ? d && g == e.length && f.push('')
            : h == '..'
              ? ((f.length > 1 || (f.length == 1 && f[0] != '')) && f.pop(),
                d && g == e.length && f.push(''))
              : (f.push(h), (d = !0));
        }
        d = f.join('/');
      } else d = e;
    }
    c ? b.setPath(d) : (c = a.ya.toString() !== '');
    c ? Oi(b, a.ya.clone()) : (c = Boolean(a.wb));
    c && ((a = a.wb), Mi(b), (b.wb = a));
    return b;
  };
  Ki.prototype.clone = function() {
    return new Ki(this);
  };
  var Li = function(a, b, c) {
    Mi(a);
    a.kb = c ? Pi(b, !0) : b;
    a.kb && (a.kb = a.kb.replace(/:$/, ''));
  };
  var Ni = function(a, b) {
    Mi(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || b < 0) throw Error(`Bad port number ${b}`);
      a.bc = b;
    } else a.bc = null;
  };
  Ki.prototype.getPath = function() {
    return this.Za;
  };
  Ki.prototype.setPath = function(a, b) {
    Mi(this);
    this.Za = b ? Pi(a, !0) : a;
    return this;
  };
  var Oi = function(a, b, c) {
    Mi(a);
    b instanceof Qi
      ? ((a.ya = b), a.ya.uf(a.va))
      : (c || (b = Ri(b, Wi)), (a.ya = new Qi(b, a.va)));
  };
  Ki.prototype.getQuery = function() {
    return this.ya.toString();
  };
  Ki.prototype.removeParameter = function(a) {
    Mi(this);
    this.ya.remove(a);
    return this;
  };
  var Mi = function(a) {
    if (a.wi) throw Error('Tried to modify a read-only Uri');
  };
  Ki.prototype.uf = function(a) {
    this.va = a;
    this.ya && this.ya.uf(a);
  };
  const Xi = function(a) {
    return a instanceof Ki ? a.clone() : new Ki(a, void 0);
  };
  var Pi = function(a, b) {
    return a ? (b ? decodeURI(a.replace(/%25/g, '%2525')) : decodeURIComponent(a)) : '';
  };
  var Ri = function(a, b, c) {
    return typeof a === 'string'
      ? ((a = encodeURI(a).replace(b, Yi)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')), a)
      : null;
  };
  var Yi = function(a) {
    a = a.charCodeAt(0);
    return `%${((a >> 4) & 15).toString(16)}${(a & 15).toString(16)}`;
  };
  var Si = /[#\/\?@]/g;
  var Ui = /[#\?:]/g;
  var Ti = /[#\?]/g;
  var Wi = /[#\?@]/g;
  var Vi = /#/g;
  var Qi = function(a, b) {
    this.J = this.N = null;
    this.ra = a || null;
    this.va = Boolean(b);
  };
  const Zi = function(a) {
    a.N ||
      ((a.N = new wd()),
      (a.J = 0),
      a.ra &&
        ui(a.ra, function(b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, ' ')), c);
        }));
  };
  k = Qi.prototype;
  k.M = function() {
    Zi(this);
    return this.J;
  };
  k.add = function(a, b) {
    Zi(this);
    this.ra = null;
    a = $i(this, a);
    let c = this.N.get(a);
    c || this.N.set(a, (c = []));
    c.push(b);
    this.J = Qa(this.J) + 1;
    return this;
  };
  k.remove = function(a) {
    Zi(this);
    a = $i(this, a);
    return this.N.fb(a)
      ? ((this.ra = null), (this.J = Qa(this.J) - this.N.get(a).length), this.N.remove(a))
      : !1;
  };
  k.clear = function() {
    this.N = this.ra = null;
    this.J = 0;
  };
  k.isEmpty = function() {
    Zi(this);
    return this.J == 0;
  };
  k.fb = function(a) {
    Zi(this);
    a = $i(this, a);
    return this.N.fb(a);
  };
  k.sc = function(a) {
    const b = this.T();
    return db(b, a);
  };
  k.forEach = function(a, b) {
    Zi(this);
    this.N.forEach(function(c, d) {
      Wa(
        c,
        function(e) {
          a.call(b, e, d, this);
        },
        this
      );
    }, this);
  };
  k.Ea = function() {
    Zi(this);
    for (var a = this.N.T(), b = this.N.Ea(), c = [], d = 0; d < b.length; d++)
      for (let e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  k.T = function(a) {
    Zi(this);
    let b = [];
    if (typeof a === 'string') this.fb(a) && (b = hb(b, this.N.get($i(this, a))));
    else {
      a = this.N.T();
      for (let c = 0; c < a.length; c++) b = hb(b, a[c]);
    }
    return b;
  };
  k.set = function(a, b) {
    Zi(this);
    this.ra = null;
    a = $i(this, a);
    this.fb(a) && (this.J = Qa(this.J) - this.N.get(a).length);
    this.N.set(a, [b]);
    this.J = Qa(this.J) + 1;
    return this;
  };
  k.get = function(a, b) {
    if (!a) return b;
    a = this.T(a);
    return a.length > 0 ? String(a[0]) : b;
  };
  k.setValues = function(a, b) {
    this.remove(a);
    b.length > 0 &&
      ((this.ra = null), this.N.set($i(this, a), ib(b)), (this.J = Qa(this.J) + b.length));
  };
  k.toString = function() {
    if (this.ra) return this.ra;
    if (!this.N) return '';
    for (var a = [], b = this.N.Ea(), c = 0; c < b.length; c++) {
      let d = b[c];
      const e = encodeURIComponent(String(d));
      d = this.T(d);
      for (let f = 0; f < d.length; f++) {
        let g = e;
        d[f] !== '' && (g += `=${encodeURIComponent(String(d[f]))}`);
        a.push(g);
      }
    }
    return (this.ra = a.join('&'));
  };
  k.clone = function() {
    const a = new Qi();
    a.ra = this.ra;
    this.N && ((a.N = this.N.clone()), (a.J = this.J));
    return a;
  };
  var $i = function(a, b) {
    b = String(b);
    a.va && (b = b.toLowerCase());
    return b;
  };
  Qi.prototype.uf = function(a) {
    a &&
      !this.va &&
      (Zi(this),
      (this.ra = null),
      this.N.forEach(function(b, c) {
        const d = c.toLowerCase();
        c != d && (this.remove(c), this.setValues(d, b));
      }, this));
    this.va = a;
  };
  Qi.prototype.extend = function(a) {
    for (let b = 0; b < arguments.length; b++)
      Dd(
        arguments[b],
        function(c, d) {
          this.add(d, c);
        },
        this
      );
  };
  let aj;
  const bj = /^\/(download|table).*/;
  const H = function(a, b) {
    cj();
    this.callback = a;
    this.U = new dj(!a, b);
  };
  const I = function(a, b) {
    b instanceof Promise
      ? a.callback &&
        b
          .then(function(c) {
            return a.callback(c);
          })
          .catch(function(c) {
            return a.callback(void 0, c);
          })
      : b.then(function(c) {
          b = c;
        });
    return b;
  };
  const ej = function() {
    return `projects/${aj}`;
  };
  k = H.prototype;
  k.mc = function() {
    return new rg(this.U);
  };
  k.S = function() {
    return new tg(this.U);
  };
  k.Fa = function() {
    return new zg(this.U);
  };
  k.value = function() {
    return new Cg(this.U);
  };
  k.maps = function() {
    return new yg(this.U);
  };
  k.map = function() {
    return new xg(this.U);
  };
  k.image = function() {
    return new wg(this.U);
  };
  k.table = function() {
    return new Ag(this.U);
  };
  k.video = function() {
    return new Eg(this.U);
  };
  var dj = function(a, b) {
    this.sync = a = void 0 === a ? !1 : a;
    this.rh = b != null ? b : a ? 5 : 10;
    return this;
  };
  p(dj, fe);
  dj.prototype.send = function(a, b) {
    const c = this;
    de(a);
    let d = a.path || '';
    const e = fj() + d;
    const f = J(a.o || {});
    const g = a.body ? JSON.stringify(a.body) : void 0;
    if (this.sync) {
      d = K(e, f, void 0, a.u, g, this.rh);
      d = b ? Rd(b, d) : d;
      var h = function(m) {
        return {
          then(n) {
            return h(n(m));
          }
        };
      };
      return h(d);
    }
    return new Promise(function(m, n) {
      K(
        e,
        f,
        function(q, w) {
          w ? n(w) : m(q);
        },
        a.u,
        g,
        c.rh
      );
    }).then(function(m) {
      return b ? Rd(b, m) : m;
    });
  };
  const hj = function(a) {
    H.call(this, a);
    this.U = new gj();
  };
  p(hj, H);
  hj.prototype.send = function(a, b) {
    const c = this;
    const d = `${fj()}/batch`;
    const e = `${a
      .map(function(g) {
        let h = l(g);
        g = h.next().value;
        h = l(h.next().value);
        const m = h.next().value;
        h.next();
        return `--batch_EARTHENGINE_batch\r\nContent-Type: application/http\r\nContent-Transfer-Encoding: binary\r\nMIME-Version: 1.0\r\nContent-ID: <${g}>\r\n\r\n${m}\r\n`;
      })
      .join('')}--batch_EARTHENGINE_batch--\r\n`;
    const f = function(g) {
      const h = {};
      a.forEach(function(m) {
        let n = l(m);
        m = n.next().value;
        n = l(n.next().value);
        n.next();
        n = n.next().value;
        g[m] != null && (h[m] = Rd(n, g[m]));
      });
      return b ? b(h) : h;
    };
    return this.callback
      ? (K(
          d,
          null,
          function(g, h) {
            return c.callback(h ? g : f(g), h);
          },
          'multipart/mixed; boundary=batch_EARTHENGINE_batch',
          e
        ),
        null)
      : f(K(d, null, void 0, 'multipart/mixed; boundary=batch_EARTHENGINE_batch', e));
  };
  var gj = function() {
    return fe.apply(this, arguments) || this;
  };
  p(gj, fe);
  gj.prototype.send = function(a, b) {
    const c = [`${a.u} ${a.path} HTTP/1.1`];
    c.push('Content-Type: application/json; charset=utf-8');
    const d = ij();
    d != null && c.push(`Authorization: ${d}`);
    a = a.body ? JSON.stringify(a.body) : '';
    return [`${c.join('\r\n')}\r\n\r\n${a}`, b];
  };
  const jj = function(a, b, c) {
    a = l(b.split(`--${a.split('; boundary=')[1]}`));
    for (b = a.next(); !b.done; b = a.next())
      if (((b = b.value.split('\r\n\r\n')), !(b.length < 3))) {
        const d = b[0].match(/\r\nContent-ID: <response-([^>]*)>/)[1];
        const e = Number(b[1].match(/^HTTP\S*\s(\d+)\s/)[1]);
        c(d, e, b.slice(2).join('\r\n\r\n'));
      }
  };
  var fj = function() {
    const a = kj.replace(/\/api$/, '');
    return 'window' in t && !a.match(/^https?:\/\/content-/)
      ? a.replace(/^(https?:\/\/)(.*\.googleapis\.com)$/, '$1content-$2')
      : a;
  };
  const qj = function(a, b, c) {
    lj &&
      mj &&
      lj(
        {
          client_id: String(mj),
          immediate: !0,
          scope: nj.join(' ')
        },
        function(d) {
          if (d.error == 'immediate_failed' && c) c();
          else if (L && 'window' in t)
            try {
              oj(function() {
                try {
                  t.gapi.auth.setToken(d), pj(a, b, d);
                } catch (e) {
                  b(e.toString());
                }
              });
            } catch (e) {
              b(e.toString());
            }
          else pj(a, b, d);
        }
      );
  };
  var ij = function() {
    rj && Ha() - rj >= 0 && (rj = sj = null);
    return sj;
  };
  const tj = function(a, b) {
    mj = a;
    nj = b;
  };
  var cj = function(a, b, c) {
    a != null ? (kj = a) : uj || (kj = 'https://earthengine.googleapis.com/api');
    b != null ? (vj = b) : uj || (vj = 'https://earthengine.googleapis.com');
    void 0 !== c && (wj = c);
    L && (aj = aj || 'earthengine-legacy');
    uj = !0;
  };
  var K = function(a, b, c, d, e, f) {
    cj();
    const g = xj;
    let h = 'application/x-www-form-urlencoded';
    e && ((h = 'application/json'), d && d.startsWith('multipart') && ((h = d), (d = 'POST')));
    d = d || 'POST';
    h = {'Content-Type': h};
    let m = bj.test(a);
    if (L && !m) {
      var n = '0.1.209';
      n === '0.1.209' && (n = 'latest');
      h['x-goog-api-client'] = `ee-js/${n}`;
    }
    n = ij();
    if (n != null) h.Authorization = n;
    else if (c && lj && mj)
      return (
        qj(function() {
          yj(g, function() {
            K(a, b, c, d);
          });
        }),
        null
      );
    b = b ? b.clone() : new Qi();
    zj != null && b.add('key', zj);
    L
      ? (g && (h['X-Earth-Engine-Computation-Profile'] = '1'),
        aj && aj !== 'earthengine-legacy' && !m && (h['X-Goog-User-Project'] = aj))
      : g && b.add('profiling', '1');
    b = Aj(b, a);
    wj != null && (h['X-XSRF-Token'] = wj);
    Fj != null && (h['X-Earth-Engine-App-ID-Token'] = Fj);
    m = e || null;
    n = b ? b.toString() : '';
    d === 'POST' && void 0 === e
      ? (m = n)
      : /^[\s\xa0]*$/.test(n) || ((a += a.indexOf('?') != -1 ? '&' : '?'), (a += n));
    e = a.startsWith('/') ? kj + a : a;
    if (c) return Gj.push(Hj(e, c, d, m, h, f)), Ij.Ce(), null;
    n = function(z, E) {
      this.setRequestHeader && this.setRequestHeader(E, z);
    };
    let q = 0;
    for (f = f != null ? f : 5; ; ) {
      var w = si(qi);
      w.open(d, e, !1);
      Bb(h, n, w);
      w.send(m);
      if (w.status != 429 || q > f) break;
      q++;
    }
    return Jj(
      w.status,
      function(z) {
        try {
          return w.getResponseHeader(z);
        } catch (E) {
          return null;
        }
      },
      w.responseText,
      g
    );
  };
  var Hj = function(a, b, c, d, e, f) {
    let g = 0;
    const h = {url: a, method: c, content: d, headers: e};
    const m = xj;
    const n = f != null ? f : 10;
    h.callback = function(q) {
      q = q.target;
      if (q.getStatus() == 429 && g < n)
        return (
          g++,
          setTimeout(function() {
            Gj.push(h);
            Ij.Ce();
          }, Math.min(12e4, 1e3 * Math.pow(2, g))),
          null
        );
      const w = Jj;
      const z = q.getStatus();
      const E = x(q.getResponseHeader, q);
      try {
        var M = q.l ? q.l.responseText : '';
      } catch (Z) {
        li(q.oa, `Can not get responseText: ${Z.message}`), (M = '');
      }
      return w(z, E, M, m, b);
    };
    return h;
  };
  var yj = function(a, b) {
    const c = xj;
    try {
      (xj = a), b.call(void 0);
    } finally {
      xj = c;
    }
  };
  var Jj = function(a, b, c, d, e) {
    const f = d ? b('X-Earth-Engine-Computation-Profile') : '';
    f && d && d(f);
    const g = function(E) {
      return L ? E : E.data;
    };
    const h = function(E) {
      try {
        const M = JSON.parse(E);
        return v(M) && 'error' in M && 'message' in M.error ? M.error.message : {parsed: M};
      } catch (Z) {
        return `Invalid JSON: ${E}`;
      }
    };
    const m = function(E) {
      if (E === 0)
        return 'Failed to contact Earth Engine servers. Please check your connection, firewall, or browser extension settings.';
      if (E < 200 || E >= 300) return `Server returned HTTP code: ${E}`;
    };
    let n;
    b = b('Content-Type') || 'application/json';
    d = b.replace(/;.*/, '');
    if (d === 'application/json' || d === 'text/json')
      if (((b = h(c)), b.parsed)) {
        var q = g(b.parsed);
        void 0 === q && (n = `Malformed response: ${c}`);
      } else n = b;
    else if (d === 'multipart/mixed') {
      q = {};
      const w = [];
      jj(b, c, function(E, M, Z) {
        Z = h(Z);
        Z.parsed && (q[E] = g(Z.parsed));
        (M = (Z.parsed ? '' : Z) || m(M)) && w.push(`${E}: ${M}`);
      });
      w.length && (n = w.join('\n'));
    } else var z = `Response was unexpectedly not JSON, but ${d}`;
    n = n || m(a) || z;
    if (e) return e(q, n), null;
    if (!n) return q;
    throw Error(n);
  };
  var oj = function(a) {
    const b = function() {
      t.gapi.config.update('client/cors', !0);
      lj || (lj = t.gapi.auth.authorize);
      a();
    };
    if (v(t.gapi) && v(t.gapi.auth) && Ba(t.gapi.auth.authorize)) b();
    else {
      for (var c = Ha().toString(36); c in t; ) c += '_';
      t[c] = function() {
        delete t[c];
        b();
      };
      Sh(ec({onload: c}));
    }
  };
  var pj = function(a, b, c) {
    if (c.access_token) {
      b = `${c.token_type} ${c.access_token}`;
      if (c.expires_in || c.expires_in === 0) {
        c = 900 * c.expires_in;
        const d = setTimeout(qj, 0.9 * c);
        void 0 !== d.unref && d.unref();
        rj = Ha() + c;
      }
      sj = b;
      a && a();
    } else b && b(c.error || 'Unknown error.');
  };
  var J = function(a) {
    const b = new Qi();
    a = l(Object.entries(a));
    for (let c = a.next(); !c.done; c = a.next()) {
      let d = l(c.value);
      c = d.next().value;
      d = d.next().value;
      b.set(c, d);
    }
    return b;
  };
  var Gj = [];
  var Ij = new Ah(function() {
    let a = Gj.shift();
    if (a) {
      const b = a.url;
      const c = a.callback;
      const d = a.method;
      const e = a.content;
      a = a.headers;
      const f = Kj;
      const g = new vi();
      Ai.push(g);
      c && g.Oa('complete', c);
      g.Hc('ready', g.ji);
      f && (g.ic = Math.max(0, f));
      g.send(b, d, e, a);
    }
    Gj.length == 0 || Ij.Ce();
  }, 350);
  var kj = null;
  var vj = null;
  var wj = null;
  var Fj = null;
  var Aj = Rb;
  var sj = null;
  var rj = null;
  var mj = null;
  var nj = [];
  var lj = null;
  var bc = new Ub(Sb, 'https://apis.google.com/js/client.js?onload=%{onload}');
  var zj = null;
  var L = !0;
  var uj = !1;
  var Kj = 0;
  var xj = null;
  const Lj = function() {};
  const Mj = function(a) {
    if (void 0 === a || a === null) a = Md;
    return new Me({rb: a});
  };
  const Nj = function(a) {
    return new Me({bb: a});
  };
  const Oj = function(a) {
    return new Me({pb: new Le({values: a})});
  };
  const Pj = function(a) {
    return new Me({tb: new cf({values: a})});
  };
  const Qj = function(a, b) {
    return new Me({gb: new Df({functionName: a, arguments: b})});
  };
  const Rj = function(a, b) {
    return new Me({gb: new Df({hb: a, arguments: b})});
  };
  const Sj = function(a, b) {
    return new Me({xb: new Cf({nc: a, body: b})});
  };
  const Tj = function(a) {
    if (!a) return 'AUTO_JPEG_PNG';
    a = a.toUpperCase();
    switch (a) {
      case 'JPG':
        return 'JPEG';
      case 'AUTO':
        return 'AUTO_JPEG_PNG';
      case 'TIF':
      case 'TIFF':
      case 'GEOTIF':
      case 'GEOTIFF':
        return 'GEO_TIFF';
      case 'TF_RECORD':
      case 'TFRECORD':
        return 'TF_RECORD_IMAGE';
      case 'NUMPY':
        return 'NPY';
      default:
        return a;
    }
  };
  const Uj = function(a) {
    if (!a) return 'CSV';
    a = a.toUpperCase();
    switch (a) {
      case 'TF_RECORD':
      case 'TFRECORD':
        return 'TF_RECORD_TABLE';
      case 'JSON':
      case 'GEOJSON':
        return 'GEO_JSON';
      default:
        return a;
    }
  };
  const Vj = function(a) {
    if (!a) return 'VERTICAL';
    a = a.toUpperCase();
    if (a !== 'HORIZONTAL' || a !== 'VERTICAL')
      throw Error('Orientation must be "horizontal" or "vertical"');
    return a;
  };
  const Wj = function(a) {
    if (!a) return [];
    if (typeof a === 'string') return a.split(',');
    if (u(a)) return a;
    throw Error(`Invalid band list ${a}`);
  };
  const Zj = function(a) {
    const b = new mf();
    let c = !1;
    'palette' in a &&
      ((c = a.palette), (b.Kc = typeof c === 'string' ? c.split(',') : c), (c = !0));
    let d = [];
    if ('gain' in a || 'bias' in a) {
      if ('min' in a || 'max' in a)
        throw Error("Gain and bias can't be specified with min and max");
      const e = b.Kc ? b.Kc.length - 1 : 255;
      d = Xj(a, 'bias', 'gain').map(function(f) {
        const g = -f.bias / f.gain;
        return {min: g, max: e / f.gain + g};
      });
    } else if ('min' in a || 'max' in a) d = Xj(a, 'min', 'max');
    d.length !== 0 &&
      ((b.kf = d.map(function(f) {
        return new df(f);
      })),
      (c = !0));
    a = Yj(a.gamma);
    if (a.length > 1) throw Error('Only one gamma value is supported');
    a.length === 1 && ((b.gamma = a[0]), (c = !0));
    return c ? b : null;
  };
  var Yj = function(a) {
    return a ? a.split(',').map(Number) : [];
  };
  var Xj = function(a, b, c) {
    const d = Yj(a[b]);
    const e = Yj(a[c]);
    if (d.length === 0)
      return e.map(function(f) {
        const g = {};
        return (g[b] = 0), (g[c] = f), g;
      });
    if (e.length === 0)
      return d.map(function(f) {
        const g = {};
        return (g[b] = f), (g[c] = 1), g;
      });
    if (d.length !== e.length) throw Error(`Length of ${b} and ${c} must match.`);
    return d.map(function(f, g) {
      const h = {};
      return (h[b] = f), (h[c] = e[g]), h;
    });
  };
  const ak = function(a) {
    const b = function(g) {
      const h = {};
      h.description = g.description || '';
      h.type = g.type || '';
      g.bd != null && (h.name = g.bd);
      void 0 !== g.defaultValue && (h.default = g.defaultValue);
      g.optional != null && (h.optional = g.optional);
      return h;
    };
    const c = function(g) {
      const h = {};
      h.args = (g.arguments || []).map(b);
      h.description = g.description || '';
      h.returns = g.pf || '';
      g.hidden != null && (h.hidden = g.hidden);
      g.preview && (h.preview = g.preview);
      g.deprecated && (h.deprecated = g.te);
      return h;
    };
    const d = {};
    a = l(a.mc || []);
    for (let e = a.next(); !e.done; e = a.next()) {
      e = e.value;
      const f = e.name.replace(/^algorithms\//, '');
      d[f] = c(e);
    }
    return d;
  };
  const bk = /^projects\/((?:\w+(?:[\w\-]+\.[\w\-]+)*?\.\w+:)?[a-z][a-z0-9\-]{4,28}[a-z0-9])\/.+/;
  const ck = /^projects\/((?:\w+(?:[\w\-]+\.[\w\-]+)*?\.\w+:)?[a-z][a-z0-9\-]{4,28}[a-z0-9])\/assets\/(.*)$/;
  const dk = /^projects\/((?:\w+(?:[\w\-]+\.[\w\-]+)*?\.\w+:)?[a-z][a-z0-9\-]{4,28}[a-z0-9])\/assets\/?$/;
  const ek = function(a) {
    return (a = bk.exec(a)) ? a[1] : 'earthengine-legacy';
  };
  const fk = function(a) {
    return ck.exec(a)
      ? a
      : /^(users|projects)\/.*/.exec(a)
        ? `projects/earthengine-legacy/assets/${a}`
        : `projects/earthengine-public/assets/${a}`;
  };
  const hk = function(a) {
    return (a.S || []).map(gk);
  };
  const jk = function(a) {
    return (a.images || []).map(ik);
  };
  const kk = function(a) {
    switch (a) {
      case 'ALGORITHM':
        return 'Algorithm';
      case 'FOLDER':
        return 'Folder';
      case 'IMAGE':
        return 'Image';
      case 'IMAGE_COLLECTION':
        return 'ImageCollection';
      case 'TABLE':
        return 'Table';
      default:
        return 'Unknown';
    }
  };
  var gk = function(a) {
    const b = lk(kk(a.type), a.name);
    const c = Object.assign({}, a.properties || {});
    a.za && (c['system:asset_size'] = Number(a.za));
    a.startTime && (c['system:time_start'] = Date.parse(a.startTime));
    a.endTime && (c['system:time_end'] = Date.parse(a.endTime));
    a.geometry && (c['system:footprint'] = a.geometry);
    typeof a.title === 'string' && (c['system:title'] = a.title);
    typeof a.description === 'string' && (c['system:description'] = a.description);
    a.Ia && (b.version = 1e3 * Date.parse(a.Ia));
    b.properties = c;
    a.bands &&
      (b.bands = a.bands.map(function(d) {
        const e = {id: d.id, crs: d.K.se, dimensions: void 0, crs_transform: void 0};
        if (d.K) {
          if (d.K.ob != null) {
            var f = d.K.ob;
            e.crs_transform = [f.qf || 0, f.vf || 0, f.Jf || 0, f.wf || 0, f.rf || 0, f.Kf || 0];
          }
          d.K.dimensions != null && (e.dimensions = [d.K.dimensions.width, d.K.dimensions.height]);
        }
        d.dataType &&
          ((f = {type: 'PixelType'}),
          (f.precision = (d.dataType.precision || '').toLowerCase()),
          d.dataType.Mc && ((f.min = d.dataType.Mc.min || 0), (f.max = d.dataType.Mc.max)),
          (e.data_type = f));
        return e;
      }));
    return b;
  };
  const mk = function(a) {
    const b = new ff();
    const c = Object.assign({}, a);
    let d;
    a = function(e) {
      d = c[e];
      delete c[e];
      return d;
    };
    a('system:asset_size') && (b.za = String(d));
    a('system:time_start') && (b.startTime = new Date(Number(d)).toISOString());
    a('system:time_end') && (b.endTime = new Date(Number(d)).toISOString());
    a('system:footprint') && (b.geometry = d);
    typeof a('system:title') === 'string' && (b.title = d);
    typeof a('system:description') === 'string' && (b.description = d);
    b.properties = c;
    return b;
  };
  var ik = function(a) {
    return lk('Image', a.name);
  };
  var lk = function(a, b) {
    const c = {};
    c.type = a;
    b != null &&
      ((a = b.split('/')),
      (b =
        a[0] === 'projects' &&
        a[2] === 'assets' &&
        ['earthengine-legacy', 'earthengine-public'].includes(a[1])
          ? a.slice(3).join('/')
          : b),
      (c.id = b));
    return c;
  };
  const ok = function(a) {
    const b = {};
    a.num && (b.pageSize = a.num);
    a.starttime && (b.startTime = new Date(a.starttime).toISOString());
    a.endtime && (b.endTime = new Date(a.endtime).toISOString());
    a.bbox && (b.region = nk(a.bbox));
    a.region && (b.region = a.region);
    a.bbox && a.region && console.warn('Multiple request parameters converted to region');
    const c = 'id num starttime endtime bbox region'.split(' ');
    a = l(
      Object.keys(a).filter(function(e) {
        return !c.includes(e);
      })
    );
    for (let d = a.next(); !d.done; d = a.next())
      console.warn(`Unrecognized key ${d.value} ignored`);
    b.fields = 'assets(type,path)';
    return b;
  };
  var nk = function(a) {
    return `{"type":"Polygon","coordinates":[[[${[[0, 1], [2, 1], [2, 3], [0, 3], [0, 1]]
      .map(function(b) {
        return `${a[b[0]]},${a[b[1]]}`;
      })
      .join('],[')}]]]}`;
  };
  const pk = function(a) {
    const b = {};
    (a.cd || []).forEach(function(f) {
      b[f.fc] = f.Fb;
    });
    const c = new Set();
    let d = function(f) {
      const g = f.replace(/^group:|^user:|^serviceAccount:/, '');
      f.startsWith('group:') && c.add(g);
      return g;
    };
    a = b['roles/viewer'] || [];
    const e = a.filter(function(f) {
      return f !== 'allUsers';
    });
    d = {
      owners: (b['roles/owner'] || []).map(d),
      writers: (b['roles/editor'] || []).map(d),
      readers: e.map(d)
    };
    c.size > 0 && (d.groups = c);
    a.length != e.length && (d.all_users_can_read = !0);
    return d;
  };
  const qk = function(a) {
    let b = function(d) {
      return (a[d] || []).map(function(e) {
        let f = 'user:';
        a.groups && a.groups.has(e)
          ? (f = 'group:')
          : e.match(/[@|\.]gserviceaccount\.com$/) && (f = 'serviceAccount:');
        return f + e;
      });
    };
    const c = a.all_users_can_read ? ['allUsers'] : [];
    b = [
      {fc: 'roles/owner', Fb: b('owners')},
      {fc: 'roles/viewer', Fb: b('readers').concat(c)},
      {
        fc: 'roles/editor',
        Fb: b('writers')
      }
    ].map(function(d) {
      return new Qe(d);
    });
    return new gg({
      cd: b.filter(function(d) {
        return d.Fb.length;
      }),
      ye: null
    });
  };
  const rk = function(a) {
    return `projects/earthengine-legacy/operations/${a}`;
  };
  const sk = function(a) {
    const b = /^.*operations\/(.*)$/.exec(a);
    return b ? b[1] : a;
  };
  const tk = function(a) {
    const b = {};
    const c = function(f, g) {
      g != null && (b[f] = Date.parse(g));
    };
    const d = function(f) {
      switch (f) {
        case 'PENDING':
          return 'READY';
        case 'RUNNING':
          return 'RUNNING';
        case 'CANCELLING':
          return 'CANCEL_REQUESTED';
        case 'SUCCEEDED':
          return 'COMPLETED';
        case 'CANCELLED':
          return 'CANCELLED';
        case 'FAILED':
          return 'FAILED';
        default:
          return 'UNKNOWN';
      }
    };
    const e = Rd(fg, a.Ze || {});
    e.description != null && (b.description = e.description);
    e.state != null && (b.state = d(e.state));
    c('creation_timestamp_ms', e.re);
    c('update_timestamp_ms', e.Ia);
    c('start_timestamp_ms', e.startTime);
    a.done && a.error != null && (b.error_message = a.error.message);
    a.name != null && ((b.id = sk(a.name)), (b.name = a.name));
    b.task_type = e.type || 'UNKNOWN';
    b.output_url = e.ue;
    b.source_url = e.sf;
    return b;
  };
  const uk = function(a) {
    const b = {started: 'OK'};
    a.name && ((b.taskId = sk(a.name)), (b.name = a.name));
    a.error && (b.note = a.error.message);
    return b;
  };
  const vk = function(a) {
    return a.primaryPath ? [a.primaryPath].concat(ba(a.additionalPaths || [])) : null;
  };
  const yk = function(a) {
    const b = function(f) {
      const g = Rd(Uf, f);
      g.Nb = vk(f);
      return g;
    };
    const c = Rd(Pf, a);
    c.name = fk(a.id);
    c.tilesets = (a.tilesets || []).map(function(f) {
      const g = Rd(Sf, f);
      g.sources = (f.sources || []).map(b);
      return g;
    });
    c.bands = (a.bands || []).map(function(f) {
      const g = Rd(Qf, f);
      g.missingData = wk(f.missingData);
      return g;
    });
    c.missingData = wk(a.missingData);
    c.Ve = nb((a.tilesets || []).map(xk));
    c.pyramidingPolicy = a.pyramidingPolicy || null;
    if (a.properties) {
      const d = Object.assign({}, a.properties);
      let e;
      a = function(f) {
        e = d[f];
        delete d[f];
        return e;
      };
      a('system:time_start') && (c.startTime = new Date(Number(e)).toISOString());
      a('system:time_end') && (c.endTime = new Date(Number(e)).toISOString());
      c.properties = d;
    }
    return c;
  };
  var xk = function(a) {
    const b = [];
    if (!u(a.fileBands)) return b;
    const c = function(d) {
      let e = [];
      d != null &&
        u(d.bandId) &&
        (e = d.bandId.map(function(f) {
          return f || '';
        }));
      return new Rf({hc: a.id || '', fa: e});
    };
    a.fileBands.forEach(function(d) {
      d.maskForAllBands ? b.push(c(null)) : d.maskForBands != null && b.push(c(d.maskForBands));
    });
    return b;
  };
  const zk = function(a) {
    const b = Rd(Xf, a);
    b.name = fk(a.id);
    b.sources = (a.sources || []).map(function(e) {
      const f = Rd(kg, e);
      f.Nb = vk(e);
      e.maxError && (f.Db = e.maxError);
      return f;
    });
    if (a.properties) {
      const c = Object.assign({}, a.properties);
      let d;
      a = function(e) {
        d = c[e];
        delete c[e];
        return d;
      };
      a('system:time_start') && (b.startTime = new Date(Number(d)).toISOString());
      a('system:time_end') && (b.endTime = new Date(Number(d)).toISOString());
      b.properties = c;
    }
    return b;
  };
  var wk = function(a) {
    if (a == null) return null;
    const b = new Nf({values: []});
    a.value != null && typeof a.value === 'number' && b.values.push(a.value);
    u(a.values) &&
      a.values.map(function(c) {
        typeof c === 'number' && b.values.push(c);
      });
    return b.values.length == 0 ? null : b;
  };
  const Ak = function() {
    this.eb = -1;
  };
  const Bk = function() {
    this.eb = 64;
    this.Z = Array(4);
    this.fi = Array(this.eb);
    this.Jd = this.qc = 0;
    this.reset();
  };
  A(Bk, Ak);
  Bk.prototype.reset = function() {
    this.Z[0] = 1732584193;
    this.Z[1] = 4023233417;
    this.Z[2] = 2562383102;
    this.Z[3] = 271733878;
    this.Jd = this.qc = 0;
  };
  const Ck = function(a, b, c) {
    c || (c = 0);
    const d = Array(16);
    if (typeof b === 'string')
      for (var e = 0; e < 16; ++e)
        d[e] =
          b.charCodeAt(c++) |
          (b.charCodeAt(c++) << 8) |
          (b.charCodeAt(c++) << 16) |
          (b.charCodeAt(c++) << 24);
    else for (e = 0; e < 16; ++e) d[e] = b[c++] | (b[c++] << 8) | (b[c++] << 16) | (b[c++] << 24);
    b = a.Z[0];
    c = a.Z[1];
    e = a.Z[2];
    let f = a.Z[3];
    let g = (b + (f ^ (c & (e ^ f))) + d[0] + 3614090360) & 4294967295;
    b = c + (((g << 7) & 4294967295) | (g >>> 25));
    g = (f + (e ^ (b & (c ^ e))) + d[1] + 3905402710) & 4294967295;
    f = b + (((g << 12) & 4294967295) | (g >>> 20));
    g = (e + (c ^ (f & (b ^ c))) + d[2] + 606105819) & 4294967295;
    e = f + (((g << 17) & 4294967295) | (g >>> 15));
    g = (c + (b ^ (e & (f ^ b))) + d[3] + 3250441966) & 4294967295;
    c = e + (((g << 22) & 4294967295) | (g >>> 10));
    g = (b + (f ^ (c & (e ^ f))) + d[4] + 4118548399) & 4294967295;
    b = c + (((g << 7) & 4294967295) | (g >>> 25));
    g = (f + (e ^ (b & (c ^ e))) + d[5] + 1200080426) & 4294967295;
    f = b + (((g << 12) & 4294967295) | (g >>> 20));
    g = (e + (c ^ (f & (b ^ c))) + d[6] + 2821735955) & 4294967295;
    e = f + (((g << 17) & 4294967295) | (g >>> 15));
    g = (c + (b ^ (e & (f ^ b))) + d[7] + 4249261313) & 4294967295;
    c = e + (((g << 22) & 4294967295) | (g >>> 10));
    g = (b + (f ^ (c & (e ^ f))) + d[8] + 1770035416) & 4294967295;
    b = c + (((g << 7) & 4294967295) | (g >>> 25));
    g = (f + (e ^ (b & (c ^ e))) + d[9] + 2336552879) & 4294967295;
    f = b + (((g << 12) & 4294967295) | (g >>> 20));
    g = (e + (c ^ (f & (b ^ c))) + d[10] + 4294925233) & 4294967295;
    e = f + (((g << 17) & 4294967295) | (g >>> 15));
    g = (c + (b ^ (e & (f ^ b))) + d[11] + 2304563134) & 4294967295;
    c = e + (((g << 22) & 4294967295) | (g >>> 10));
    g = (b + (f ^ (c & (e ^ f))) + d[12] + 1804603682) & 4294967295;
    b = c + (((g << 7) & 4294967295) | (g >>> 25));
    g = (f + (e ^ (b & (c ^ e))) + d[13] + 4254626195) & 4294967295;
    f = b + (((g << 12) & 4294967295) | (g >>> 20));
    g = (e + (c ^ (f & (b ^ c))) + d[14] + 2792965006) & 4294967295;
    e = f + (((g << 17) & 4294967295) | (g >>> 15));
    g = (c + (b ^ (e & (f ^ b))) + d[15] + 1236535329) & 4294967295;
    c = e + (((g << 22) & 4294967295) | (g >>> 10));
    g = (b + (e ^ (f & (c ^ e))) + d[1] + 4129170786) & 4294967295;
    b = c + (((g << 5) & 4294967295) | (g >>> 27));
    g = (f + (c ^ (e & (b ^ c))) + d[6] + 3225465664) & 4294967295;
    f = b + (((g << 9) & 4294967295) | (g >>> 23));
    g = (e + (b ^ (c & (f ^ b))) + d[11] + 643717713) & 4294967295;
    e = f + (((g << 14) & 4294967295) | (g >>> 18));
    g = (c + (f ^ (b & (e ^ f))) + d[0] + 3921069994) & 4294967295;
    c = e + (((g << 20) & 4294967295) | (g >>> 12));
    g = (b + (e ^ (f & (c ^ e))) + d[5] + 3593408605) & 4294967295;
    b = c + (((g << 5) & 4294967295) | (g >>> 27));
    g = (f + (c ^ (e & (b ^ c))) + d[10] + 38016083) & 4294967295;
    f = b + (((g << 9) & 4294967295) | (g >>> 23));
    g = (e + (b ^ (c & (f ^ b))) + d[15] + 3634488961) & 4294967295;
    e = f + (((g << 14) & 4294967295) | (g >>> 18));
    g = (c + (f ^ (b & (e ^ f))) + d[4] + 3889429448) & 4294967295;
    c = e + (((g << 20) & 4294967295) | (g >>> 12));
    g = (b + (e ^ (f & (c ^ e))) + d[9] + 568446438) & 4294967295;
    b = c + (((g << 5) & 4294967295) | (g >>> 27));
    g = (f + (c ^ (e & (b ^ c))) + d[14] + 3275163606) & 4294967295;
    f = b + (((g << 9) & 4294967295) | (g >>> 23));
    g = (e + (b ^ (c & (f ^ b))) + d[3] + 4107603335) & 4294967295;
    e = f + (((g << 14) & 4294967295) | (g >>> 18));
    g = (c + (f ^ (b & (e ^ f))) + d[8] + 1163531501) & 4294967295;
    c = e + (((g << 20) & 4294967295) | (g >>> 12));
    g = (b + (e ^ (f & (c ^ e))) + d[13] + 2850285829) & 4294967295;
    b = c + (((g << 5) & 4294967295) | (g >>> 27));
    g = (f + (c ^ (e & (b ^ c))) + d[2] + 4243563512) & 4294967295;
    f = b + (((g << 9) & 4294967295) | (g >>> 23));
    g = (e + (b ^ (c & (f ^ b))) + d[7] + 1735328473) & 4294967295;
    e = f + (((g << 14) & 4294967295) | (g >>> 18));
    g = (c + (f ^ (b & (e ^ f))) + d[12] + 2368359562) & 4294967295;
    c = e + (((g << 20) & 4294967295) | (g >>> 12));
    g = (b + (c ^ e ^ f) + d[5] + 4294588738) & 4294967295;
    b = c + (((g << 4) & 4294967295) | (g >>> 28));
    g = (f + (b ^ c ^ e) + d[8] + 2272392833) & 4294967295;
    f = b + (((g << 11) & 4294967295) | (g >>> 21));
    g = (e + (f ^ b ^ c) + d[11] + 1839030562) & 4294967295;
    e = f + (((g << 16) & 4294967295) | (g >>> 16));
    g = (c + (e ^ f ^ b) + d[14] + 4259657740) & 4294967295;
    c = e + (((g << 23) & 4294967295) | (g >>> 9));
    g = (b + (c ^ e ^ f) + d[1] + 2763975236) & 4294967295;
    b = c + (((g << 4) & 4294967295) | (g >>> 28));
    g = (f + (b ^ c ^ e) + d[4] + 1272893353) & 4294967295;
    f = b + (((g << 11) & 4294967295) | (g >>> 21));
    g = (e + (f ^ b ^ c) + d[7] + 4139469664) & 4294967295;
    e = f + (((g << 16) & 4294967295) | (g >>> 16));
    g = (c + (e ^ f ^ b) + d[10] + 3200236656) & 4294967295;
    c = e + (((g << 23) & 4294967295) | (g >>> 9));
    g = (b + (c ^ e ^ f) + d[13] + 681279174) & 4294967295;
    b = c + (((g << 4) & 4294967295) | (g >>> 28));
    g = (f + (b ^ c ^ e) + d[0] + 3936430074) & 4294967295;
    f = b + (((g << 11) & 4294967295) | (g >>> 21));
    g = (e + (f ^ b ^ c) + d[3] + 3572445317) & 4294967295;
    e = f + (((g << 16) & 4294967295) | (g >>> 16));
    g = (c + (e ^ f ^ b) + d[6] + 76029189) & 4294967295;
    c = e + (((g << 23) & 4294967295) | (g >>> 9));
    g = (b + (c ^ e ^ f) + d[9] + 3654602809) & 4294967295;
    b = c + (((g << 4) & 4294967295) | (g >>> 28));
    g = (f + (b ^ c ^ e) + d[12] + 3873151461) & 4294967295;
    f = b + (((g << 11) & 4294967295) | (g >>> 21));
    g = (e + (f ^ b ^ c) + d[15] + 530742520) & 4294967295;
    e = f + (((g << 16) & 4294967295) | (g >>> 16));
    g = (c + (e ^ f ^ b) + d[2] + 3299628645) & 4294967295;
    c = e + (((g << 23) & 4294967295) | (g >>> 9));
    g = (b + (e ^ (c | ~f)) + d[0] + 4096336452) & 4294967295;
    b = c + (((g << 6) & 4294967295) | (g >>> 26));
    g = (f + (c ^ (b | ~e)) + d[7] + 1126891415) & 4294967295;
    f = b + (((g << 10) & 4294967295) | (g >>> 22));
    g = (e + (b ^ (f | ~c)) + d[14] + 2878612391) & 4294967295;
    e = f + (((g << 15) & 4294967295) | (g >>> 17));
    g = (c + (f ^ (e | ~b)) + d[5] + 4237533241) & 4294967295;
    c = e + (((g << 21) & 4294967295) | (g >>> 11));
    g = (b + (e ^ (c | ~f)) + d[12] + 1700485571) & 4294967295;
    b = c + (((g << 6) & 4294967295) | (g >>> 26));
    g = (f + (c ^ (b | ~e)) + d[3] + 2399980690) & 4294967295;
    f = b + (((g << 10) & 4294967295) | (g >>> 22));
    g = (e + (b ^ (f | ~c)) + d[10] + 4293915773) & 4294967295;
    e = f + (((g << 15) & 4294967295) | (g >>> 17));
    g = (c + (f ^ (e | ~b)) + d[1] + 2240044497) & 4294967295;
    c = e + (((g << 21) & 4294967295) | (g >>> 11));
    g = (b + (e ^ (c | ~f)) + d[8] + 1873313359) & 4294967295;
    b = c + (((g << 6) & 4294967295) | (g >>> 26));
    g = (f + (c ^ (b | ~e)) + d[15] + 4264355552) & 4294967295;
    f = b + (((g << 10) & 4294967295) | (g >>> 22));
    g = (e + (b ^ (f | ~c)) + d[6] + 2734768916) & 4294967295;
    e = f + (((g << 15) & 4294967295) | (g >>> 17));
    g = (c + (f ^ (e | ~b)) + d[13] + 1309151649) & 4294967295;
    c = e + (((g << 21) & 4294967295) | (g >>> 11));
    g = (b + (e ^ (c | ~f)) + d[4] + 4149444226) & 4294967295;
    b = c + (((g << 6) & 4294967295) | (g >>> 26));
    g = (f + (c ^ (b | ~e)) + d[11] + 3174756917) & 4294967295;
    f = b + (((g << 10) & 4294967295) | (g >>> 22));
    g = (e + (b ^ (f | ~c)) + d[2] + 718787259) & 4294967295;
    e = f + (((g << 15) & 4294967295) | (g >>> 17));
    g = (c + (f ^ (e | ~b)) + d[9] + 3951481745) & 4294967295;
    a.Z[0] = (a.Z[0] + b) & 4294967295;
    a.Z[1] = (a.Z[1] + (e + (((g << 21) & 4294967295) | (g >>> 11)))) & 4294967295;
    a.Z[2] = (a.Z[2] + e) & 4294967295;
    a.Z[3] = (a.Z[3] + f) & 4294967295;
  };
  Bk.prototype.update = function(a, b) {
    void 0 === b && (b = a.length);
    for (var c = b - this.eb, d = this.fi, e = this.qc, f = 0; f < b; ) {
      if (e == 0) for (; f <= c; ) Ck(this, a, f), (f += this.eb);
      if (typeof a === 'string')
        for (; f < b; ) {
          if (((d[e++] = a.charCodeAt(f++)), e == this.eb)) {
            Ck(this, d);
            e = 0;
            break;
          }
        }
      else
        for (; f < b; )
          if (((d[e++] = a[f++]), e == this.eb)) {
            Ck(this, d);
            e = 0;
            break;
          }
    }
    this.qc = e;
    this.Jd += b;
  };
  Bk.prototype.digest = function() {
    let a = Array((this.qc < 56 ? this.eb : 2 * this.eb) - this.qc);
    a[0] = 128;
    for (var b = 1; b < a.length - 8; ++b) a[b] = 0;
    let c = 8 * this.Jd;
    for (b = a.length - 8; b < a.length; ++b) (a[b] = c & 255), (c /= 256);
    this.update(a);
    a = Array(16);
    for (b = c = 0; b < 4; ++b) for (let d = 0; d < 32; d += 8) a[c++] = (this.Z[b] >>> d) & 255;
    return a;
  };
  const Dk = function(a) {
    this.Vc = '__ee_hash__';
    this.rd = !1 !== a;
    this.Pa = [];
    this.ua = {};
    this.Lf = [];
    this.od = new WeakMap();
  };
  y('ee.Serializer', Dk);
  const Ek = new Th();
  const Fk = new Bk();
  const Hk = function(a, b) {
    return Gk(new Dk(void 0 !== b ? b : !0), a);
  };
  y('ee.Serializer.encode', Hk);
  const Ik = function(a) {
    return Ek.Y(Hk(a));
  };
  y('ee.Serializer.toJSON', Ik);
  const Kk = function(a) {
    return Jk(Hk(a, !1));
  };
  y('ee.Serializer.toReadableJSON', Kk);
  var Jk = function(a) {
    return 'JSON' in t ? t.JSON.stringify(a, null, '  ') : Ek.Y(a);
  };
  var Gk = function(a, b) {
    b = a.hd(b);
    a.rd &&
      ((b =
        v(b) && b.type == 'ValueRef' && a.Pa.length == 1
          ? a.Pa[0][1]
          : {type: 'CompoundValue', scope: a.Pa, value: b}),
      (a.Pa = []),
      Wa(
        a.Lf,
        x(function(c) {
          delete c[this.Vc];
        }, a)
      ),
      (a.Lf = []),
      (a.ua = {}));
    return b;
  };
  Dk.prototype.hd = function(a) {
    if (void 0 === a) throw Error("Can't encode an undefined value.");
    let b = v(a) ? a[this.Vc] : null;
    if (this.rd && b != null && this.ua[b]) return {type: 'ValueRef', value: this.ua[b]};
    if (a === null || typeof a === 'boolean' || typeof a === 'number' || typeof a === 'string')
      return a;
    if (Aa(a))
      return {
        type: 'Invocation',
        functionName: 'Date',
        arguments: {value: Math.floor(a.getTime())}
      };
    if (a instanceof Lj) {
      var c = a.encode(x(this.hd, this));
      if (!(u(c) || (v(c) && c.type != 'ArgumentRef'))) return c;
    } else if (u(a))
      c = Ya(
        a,
        function(e) {
          return this.hd(e);
        },
        this
      );
    else if (v(a) && !Ba(a))
      (c = Db(
        a,
        function(e) {
          if (!Ba(e)) return this.hd(e);
        },
        this
      )),
        Lb(c, this.Vc),
        (c = {type: 'Dictionary', value: c});
    else throw Error(`Can't encode object: ${a}`);
    if (this.rd) {
      b = Lk(c);
      if (this.ua[b]) var d = this.ua[b];
      else (d = String(this.Pa.length)), this.Pa.push([d, c]), (this.ua[b] = d);
      a[this.Vc] = b;
      this.Lf.push(a);
      return {type: 'ValueRef', value: d};
    }
    return c;
  };
  var Lk = function(a) {
    Fk.reset();
    Fk.update(Ek.Y(a));
    return Fk.digest().toString();
  };
  const Nk = function(a) {
    return Sd(Mk(a), Od, Pd, Qd);
  };
  y('ee.Serializer.encodeCloudApi', Nk);
  var Mk = function(a) {
    return Ok(new Dk(!0), a);
  };
  const Pk = function(a) {
    a = Ok(new Dk(!1), a);
    const b = a.values;
    var c = function(d) {
      if (!v(d)) return d;
      const e = u(d) ? [] : {};
      const f = d instanceof Object.getPrototypeOf(Me);
      d = l(Object.entries(f ? d.a : d));
      for (let g = d.next(); !g.done; g = d.next()) {
        let h = l(g.value);
        g = h.next().value;
        h = h.next().value;
        f
          ? h !== null &&
            (e[g] =
              g === 'functionDefinitionValue' && h.body != null
                ? {argumentNames: h.nc, body: c(b[h.body])}
                : g === 'functionInvocationValue' && h.hb != null
                  ? {arguments: Db(h.arguments, c), functionReference: c(b[h.hb])}
                  : g === 'constantValue'
                    ? h === Md
                      ? null
                      : h
                    : c(h))
          : (e[g] = c(h));
      }
      return e;
    };
    return a.result && c(b[a.result]);
  };
  y('ee.Serializer.encodeCloudApiPretty', Pk);
  const Qk = function(a) {
    return Jk(Pk(a));
  };
  y('ee.Serializer.toReadableCloudApiJSON', Qk);
  var Ok = function(a, b) {
    try {
      const c = Rk(a, b);
      const d = new Sk(c, a.Pa, a.rd);
      const e = Tk(d, d.vh);
      return new We({result: e, values: d.ih});
    } finally {
      (a.od = new WeakMap()), (a.ua = {}), (a.Pa = []);
    }
  };
  var Rk = function(a, b) {
    const c = function(e) {
      const f = Lk(e);
      if (a.ua[f]) return a.ua[f];
      const g = String(a.Pa.length);
      a.Pa.push([g, e]);
      a.ua[f] = g;
      v(b) && a.od.set(b, f);
      return g;
    };
    if (v(b) && a.ua[a.od.get(b)]) return a.ua[a.od.get(b)];
    if (b === null || typeof b === 'boolean' || typeof b === 'string' || typeof b === 'number')
      return c(Mj(b));
    if (Aa(b)) return c(Qj('Date', {value: Mj(Math.floor(b.getTime()))}));
    if (b instanceof Lj)
      return c(
        b.qa(function(e) {
          return Rk(a, e);
        })
      );
    if (u(b))
      return c(
        Oj(
          b.map(function(e) {
            return Nj(Rk(a, e));
          })
        )
      );
    if (v(b) && !Ba(b)) {
      const d = {};
      Object.keys(b)
        .sort()
        .forEach(function(e) {
          d[e] = Nj(Rk(a, b[e]));
        });
      return c(Pj(d));
    }
    throw Error(`Can't encode object: ${b}`);
  };
  var Sk = function(a, b, c) {
    const d = this;
    this.vh = a;
    this.values = {};
    b.forEach(function(e) {
      return (d.values[e[0]] = e[1]);
    });
    this.nh = c ? Uk(this) : null;
    this.ih = {};
    this.lf = {};
    this.Ei = 0;
  };
  var Tk = function(a, b) {
    if (b in a.lf) return a.lf[b];
    const c = String(a.Ei++);
    a.lf[b] = c;
    a.ih[c] = Vk(a, a.values[b], 0);
    return c;
  };
  var Vk = function(a, b, c) {
    let d = function(n) {
      return n.rb !== null;
    };
    const e = function(n) {
      return n === Md ? null : n;
    };
    if (d(b) || b.Pe != null || b.je != null || b.oc != null) return b;
    if (b.bb != null)
      return (
        (d = a.values[b.bb]),
        a.nh === null || (c < 50 && a.nh[b.bb] === 1) ? Vk(a, d, c) : Wk(d) ? d : Nj(Tk(a, b.bb))
      );
    if (b.pb != null) {
      var f = b.pb.values.map(function(n) {
        return Vk(a, n, c + 3);
      });
      return f.every(d)
        ? Mj(
            f.map(function(n) {
              return e(n.rb);
            })
          )
        : Oj(f);
    }
    if (b.tb != null) {
      f = {};
      var g = {};
      b = l(Object.entries(b.tb.values || {}));
      for (let h = b.next(); !h.done; h = b.next()) {
        let m = l(h.value);
        h = m.next().value;
        m = m.next().value;
        f[h] = Vk(a, m, c + 3);
        g !== null && d(f[h]) ? (g[h] = e(f[h].rb)) : (g = null);
      }
      return g !== null ? Mj(g) : Pj(f);
    }
    if (b.xb != null) return (d = b.xb), Sj(d.nc || [], Tk(a, d.body || ''));
    if (b.gb != null) {
      d = b.gb;
      f = {};
      g = l(Object.keys(d.arguments || {}));
      for (b = g.next(); !b.done; b = g.next())
        (b = b.value), (f[b] = Vk(a, d.arguments[b], c + 3));
      return d.functionName ? Qj(d.functionName, f) : Rj(Tk(a, d.hb || ''), f);
    }
    throw Error(`Can't optimize value: ${b}`);
  };
  var Wk = function(a) {
    const b = a.rb;
    return b !== null ? b === Md || typeof b === 'number' || typeof b === 'boolean' : a.oc != null;
  };
  var Uk = function(a) {
    const b = {};
    const c = function(e) {
      b[e] ? b[e]++ : ((b[e] = 1), d(a.values[e]));
    };
    var d = function(e) {
      e.pb != null
        ? e.pb.values.forEach(d)
        : e.tb != null
          ? Object.values(e.tb.values).forEach(d)
          : e.xb != null
            ? c(e.xb.body)
            : e.gb != null
              ? ((e = e.gb), e.hb != null && c(e.hb), Object.values(e.arguments).forEach(d))
              : e.bb != null && c(e.bb);
    };
    c(a.vh);
    return b;
  };
  const bl = function(a) {
    if (a.element == null) throw Error(`"element" not found in params ${a}`);
    let b = a.selectors || null;
    b != null && typeof b === 'string' && (b = b.split(','));
    b = new uf({
      i: Mk(a.element),
      description: Xk(a.description),
      ia: null,
      Ta: null,
      selectors: b,
      Db: Yk(a.maxErrorMeters),
      I: Xk(a.id),
      V: Yk(a.maxWorkers)
    });
    const c = Zk(a);
    switch (c) {
      case 'GOOGLE_CLOUD_STORAGE':
      case 'DRIVE':
        var d = new wf({ja: null, ha: null, G: Uj(a.fileFormat)});
        c === 'GOOGLE_CLOUD_STORAGE' ? (d.ja = $k(a)) : (d.ha = al(a));
        b.ia = d;
        break;
      case 'ASSET':
        b.Ta = new vf({ub: new kf({name: fk(a.assetId)})});
        break;
      default:
        throw Error(`Export destination "${c}" unknown`);
    }
    return b;
  };
  function Xk(a) {
    return a != null ? String(a) : null;
  }
  function Yk(a) {
    return a != null ? Number(a) : null;
  }
  var Zk = function(a) {
    let b = 'DRIVE';
    if (a == null) return b;
    a.outputBucket != null || a.outputPrefix != null
      ? (b = 'GOOGLE_CLOUD_STORAGE')
      : a.assetId != null && (b = 'ASSET');
    return b;
  };
  const dl = function(a) {
    const b = new Of({
      ne: Boolean(a.tfrecordCompressed),
      Eb: Xk(a.tfrecordMaxFileSize),
      tf: Boolean(a.tfrecordSequenceData),
      me: Boolean(a.tfrecordCollapseBands),
      Xe: Yk(a.tfrecordMaskedThreshold),
      defaultValue: Yk(a.tfrecordDefaultValue),
      Ha: cl(a.tfrecordPatchDimensions),
      Ue: cl(a.tfrecordKernelSize),
      Fd: null
    });
    a = a.tfrecordTensorDepths;
    if (a != null)
      if (v(a)) {
        const c = {};
        Bb(a, function(d, e) {
          if (typeof e !== 'string' || typeof d !== 'number')
            throw Error('"tensorDepths" option must be an object of type Object<string, number>');
          c[e] = d;
        });
        b.Fd = c;
      } else throw Error('"tensorDepths" option needs to have the form Object<string, number>.');
    return b;
  };
  const el = function(a, b) {
    const c = new qf({ja: null, ha: null, kd: null, Gd: null, G: Tj(a.fileFormat)});
    if (c.G === 'GEO_TIFF') {
      if (a.fileDimensions && a.tiffFileDimensions)
        throw Error('Export cannot set both "fileDimensions" and "tiffFileDimensions".');
      const d = new Ff({
        le: Boolean(a.tiffCloudOptimized),
        yf: Boolean(a.tiffSkipEmptyFiles),
        Ha: cl(a.fileDimensions || a.tiffFileDimensions)
      });
      c.kd = d;
    } else c.G === 'TF_RECORD_IMAGE' && (c.Gd = dl(a));
    b === 'GOOGLE_CLOUD_STORAGE' ? (c.ja = $k(a)) : (c.ha = al(a));
    return c;
  };
  const fl = function(a, b) {
    const c = new yf({ja: null, ha: null, G: 'MP4'});
    b === 'GOOGLE_CLOUD_STORAGE' ? (c.ja = $k(a)) : (c.ha = al(a));
    return c;
  };
  const gl = function(a) {
    const b = Yk(a.maxZoom);
    const c = Yk(a.scale);
    const d = Yk(a.minZoom);
    const e = Boolean(a.skipEmptyTiles);
    const f = Xk(a.mapsApiKey);
    const g = cl(a.tileDimensions);
    const h = Yk(a.stride);
    let m = Yk(a.minTimeMachineZoomSubset);
    a = Yk(a.maxTimeMachineZoomSubset);
    if (m == null && a == null) m = null;
    else {
      const n = new ng({min: 0, max: null});
      m != null && (n.min = m);
      n.max = a;
      m = n;
    }
    return new tf({maxZoom: b, scale: c, minZoom: d, zf: e, Te: f, Ha: g, Bf: h, Mf: m});
  };
  var cl = function(a) {
    if (a == null) return null;
    const b = new Gf({height: 0, width: 0});
    typeof a === 'string' &&
      (a.indexOf('x') !== -1
        ? (a = a.split('x').map(Number))
        : a.indexOf(',') !== -1 && (a = a.split(',').map(Number)));
    if (u(a))
      if (a.length === 2) (b.height = a[0]), (b.width = a[1]);
      else if (a.length === 1) (b.height = a[0]), (b.width = a[0]);
      else throw Error(`Unable to construct grid from dimensions: ${a}`);
    else if (typeof a !== 'number' || isNaN(a))
      if (v(a) && a.height != null && a.width != null) (b.height = a.height), (b.width = a.width);
      else throw Error(`Unable to construct grid from dimensions: ${a}`);
    else (b.height = a), (b.width = a);
    return b;
  };
  var $k = function(a) {
    let b = null;
    a.writePublicTiles != null && (b = a.writePublicTiles ? 'PUBLIC' : 'DEFAULT_OBJECT_ACL');
    return new Ef({
      he: Xk(a.outputBucket),
      vb: Xk(a.outputPrefix),
      ie: a.bucketCorsUris || null,
      permissions: b
    });
  };
  var al = function(a) {
    return new ef({Ee: Xk(a.driveFolder), vb: Xk(a.driveFileNamePrefix)});
  };
  const il = function(a, b) {
    this.Sa = a;
    this.Nd = b;
    this.j = {};
    this.pc = !0;
    if (this.Sa.length > 0) {
      for (a = 0; a < this.Sa.length; a++) {
        b = this.Sa[a];
        const c = b[0];
        this.j[c.toString()] = new hl(c, b[1]);
      }
      this.pc = !0;
    }
  };
  var jl = function(a) {
    if (a.pc) {
      if (a.Nd) {
        var b = a.j;
        var c;
        for (c in b)
          if (Object.prototype.hasOwnProperty.call(b, c)) {
            var d = b[c].kc;
            d && jl(d);
          }
      }
    } else {
      a.Sa.length = 0;
      b = kl(a);
      b.sort();
      for (c = 0; c < b.length; c++) {
        const e = a.j[b[c]];
        (d = e.kc) && jl(d);
        a.Sa.push([e.key, e.value]);
      }
      a.pc = !0;
    }
    return a.Sa;
  };
  const ll = function(a) {
    this.Lg = 0;
    this.Sa = a;
  };
  ll.prototype.next = function() {
    return this.Lg < this.Sa.length
      ? {done: !1, value: this.Sa[this.Lg++]}
      : {done: !0, value: void 0};
  };
  typeof Symbol !== 'undefined' &&
    (ll.prototype[Symbol.iterator] = function() {
      return this;
    });
  k = il.prototype;
  k.getLength = function() {
    return kl(this).length;
  };
  k.clear = function() {
    this.j = {};
    this.pc = !1;
  };
  k.entries = function() {
    const a = [];
    const b = kl(this);
    b.sort();
    for (let c = 0; c < b.length; c++) {
      const d = this.j[b[c]];
      a.push([d.key, ml(this, d)]);
    }
    return new ll(a);
  };
  k.keys = function() {
    const a = [];
    const b = kl(this);
    b.sort();
    for (let c = 0; c < b.length; c++) a.push(this.j[b[c]].key);
    return new ll(a);
  };
  k.values = function() {
    const a = [];
    const b = kl(this);
    b.sort();
    for (let c = 0; c < b.length; c++) a.push(ml(this, this.j[b[c]]));
    return new ll(a);
  };
  k.forEach = function(a, b) {
    const c = kl(this);
    c.sort();
    for (let d = 0; d < c.length; d++) {
      const e = this.j[c[d]];
      a.call(b, ml(this, e), e.key, this);
    }
  };
  k.set = function(a, b) {
    const c = new hl(a);
    this.Nd ? ((c.kc = b), (c.value = jl(b))) : (c.value = b);
    this.j[a.toString()] = c;
    this.pc = !1;
    return this;
  };
  var ml = function(a, b) {
    return a.Nd ? (b.kc || (b.kc = new a.Nd(b.value)), b.kc) : b.value;
  };
  il.prototype.get = function(a) {
    if ((a = this.j[a.toString()])) return ml(this, a);
  };
  il.prototype.has = function(a) {
    return a.toString() in this.j;
  };
  var kl = function(a) {
    a = a.j;
    const b = [];
    let c;
    for (c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
    return b;
  };
  var hl = function(a, b) {
    this.key = a;
    this.value = b;
    this.kc = void 0;
  };
  Object.freeze && Object.freeze([]);
  const ol = function(a, b, c, d, e) {
    const f = ['https://www.googleapis.com/auth/earthengine'];
    L && f.push('https://www.googleapis.com/auth/cloud-platform');
    d && (jb(f, d), lb(f));
    tj(a, f);
    a === null
      ? (rj = sj = null)
      : oj(function() {
          qj(b, c, e || Ga(nl, b, c));
        });
  };
  y('ee.data.authenticateViaOauth', ol);
  const pl = function(a, b, c, d, e) {
    ol(a, b, c, d, e);
  };
  y('ee.data.authenticate', pl);
  var nl = function(a, b) {
    t.gapi.auth.authorize({client_id: mj, immediate: !1, scope: nj.join(' ')}, Ga(pj, a, b));
  };
  y('ee.data.authenticateViaPopup', nl);
  const ql = function(a, b, c, d) {
    if ('window' in t)
      throw Error(
        'Use of private key authentication in the browser is insecure. Consider using OAuth, instead.'
      );
    const e = [
      'https://www.googleapis.com/auth/earthengine',
      'https://www.googleapis.com/auth/devstorage.read_write'
    ];
    L && e.push('https://www.googleapis.com/auth/cloud-platform');
    d && (jb(e, d), lb(e));
    tj(a.client_email, e);
    const f = new google.auth.JWT(a.client_email, null, a.private_key, e, null);
    lj = function(g, h) {
      f.authorize(function(m, n) {
        m
          ? h({error: m})
          : h({
              access_token: n.access_token,
              token_type: n.token_type,
              expires_in: (n.expiry_date - Date.now()) / 1e3
            });
      });
    };
    qj(b, c);
  };
  y('ee.data.authenticateViaPrivateKey', ql);
  const rl = [];
  rl.push('setApiKey');
  rl.push('setProject');
  rl.push('getProject');
  rl.push('setCloudApiEnabled');
  rl.push('getCloudApiEnabled');
  y('ee.data.setExpressionAugmenter', function(a) {
    sl = a || Rb;
  });
  var sl = Rb;
  y('ee.data.setDeadline', function(a) {
    Kj = a;
  });
  y('ee.data.setParamAugmenter', function(a) {
    Aj = a || Rb;
  });
  const tl = function(a) {
    if (L)
      return (
        (a = new H(a)),
        I(
          a,
          a
            .mc()
            .list(ej(), {prettyPrint: !1})
            .then(ak)
        )
      );
    const b = K('/algorithms', null, a, 'GET');
    return a ? null : b;
  };
  const vl = function(a, b) {
    if (L) {
      if (typeof a.image === 'string') throw Error('Image as JSON string not supported.');
      if (void 0 !== a.version) throw Error('Image version specification not supported.');
      a = new lf({name: null, i: sl(Mk(a.image)), G: Tj(a.format), fa: Wj(a.bands), Pb: Zj(a)});
      const c = new H(b);
      return I(
        c,
        c
          .maps()
          .create(ej(), a, {fields: ['name']})
          .then(function(e) {
            const f = zj;
            return ul(e.name, '', '/v1alpha/{}/tiles', f ? `?key=${f}` : '');
          })
      );
    }
    a = Mb(a);
    typeof a.image !== 'string' && (a.image = a.image.Y());
    const d = function(e) {
      return ul(e.mapid, e.token, '/map/{}', '?token={}');
    };
    return b
      ? (K('/mapid', J(a), function(e, f) {
          return b(e && d(e), f);
        }),
        null)
      : d(K('/mapid', J(a)));
  };
  y('ee.data.getMapId', vl);
  const wl = function(a, b, c, d) {
    return a.formatTileUrl(b, c, d);
  };
  y('ee.data.getTileUrl', wl);
  var ul = function(a, b, c, d) {
    c = vj + c.replace('{}', a);
    d = d.replace('{}', b);
    return {
      mapid: a,
      token: b,
      formatTileUrl(e, f, g) {
        const h = Math.pow(2, g);
        e %= h;
        e < 0 && (e += h);
        return [c, g, e, f].join('/') + d;
      }
    };
  };
  const xl = function(a, b) {
    a = Mb(a);
    return K('/value', J(a), b);
  };
  y('ee.data.getValue', xl);
  const yl = function(a, b) {
    if (L)
      return (
        (a = sl(Mk(a))),
        (b = new H(b)),
        I(
          b,
          Dg(b.value(), ej(), new Ve({i: a})).then(function(c) {
            return c.result;
          })
        )
      );
    a = {json: Ik(a)};
    return K('/value', J(a), b);
  };
  y('ee.data.computeValue', yl);
  const zl = function(a, b) {
    if (L) {
      if (typeof a.image === 'string') throw Error('Image as JSON string not supported.');
      if (void 0 !== a.version) throw Error('Image version specification not supported.');
      if (void 0 !== a.region)
        throw Error(
          '"region" not supported in call to ee.data.getThumbId. Use ee.Image.getThumbURL.'
        );
      a = new lg({
        name: null,
        i: sl(Mk(a.image)),
        G: Tj(a.format),
        fa: Wj(a.bands),
        Pb: Zj(a),
        K: null
      });
      b = new H(b);
      return I(
        b,
        new Bg(b.U).create(ej(), a, {fields: ['name']}).then(function(d) {
          return {thumbid: d.name, token: ''};
        })
      );
    }
    a = Mb(a);
    u(a.dimensions) && (a.dimensions = a.dimensions.join('x'));
    let c = a.image || a.imageCollection;
    typeof c !== 'string' && (c = c.Y());
    a.image = c;
    delete a.imageCollection;
    a = J(a).add('getid', '1');
    return K('/thumb', a, b);
  };
  y('ee.data.getThumbId', zl);
  const Al = function(a, b) {
    if (!L) throw Error('getVideoThumbId is only supported in Cloud API mode.');
    const c = new zf({
      framesPerSecond: a.framesPerSecond || null,
      maxFrames: a.maxFrames || null,
      maxPixelsPerFrame: a.maxPixelsPerFrame || null
    });
    a = new qg({name: null, i: sl(Mk(a.imageCollection)), G: Tj(a.format), Ja: c, K: null});
    b = new H(b);
    return I(
      b,
      new Gg(b.U).create(ej(), a, {fields: ['name']}).then(function(d) {
        return {thumbid: d.name, token: ''};
      })
    );
  };
  y('ee.data.getVideoThumbId', Al);
  rl.push('getVideoThumbId');
  const Bl = function(a, b) {
    if (!L) throw Error('getFilmstripThumbId is only supported in Cloud API mode.');
    a = new Bf({
      name: null,
      i: sl(Mk(a.imageCollection)),
      G: Tj(a.format),
      orientation: Vj(a.orientation),
      K: null
    });
    b = new H(b);
    return I(
      b,
      new vg(b.U).create(ej(), a, {fields: ['name']}).then(function(c) {
        return {thumbid: c.name, token: ''};
      })
    );
  };
  y('ee.data.getFilmstripThumbId', Bl);
  rl.push('getFilmstripThumbId');
  const Cl = function(a) {
    if (L) {
      const b = zj;
      return `${vj}/v1alpha/${a.thumbid}:getPixels${b ? `?key=${b}` : ''}`;
    }
    return `${vj}/api/thumb?thumbid=${a.thumbid}&token=${a.token}`;
  };
  y('ee.data.makeThumbUrl', Cl);
  const Dl = function(a, b) {
    if (L && b) {
      const c = b;
      b = function(d, e) {
        return c((d || {}).data || d, e);
      };
    }
    a = Mb(a);
    a = K('/download', J(a), b);
    return L ? (a || {}).data || a : a;
  };
  y('ee.data.getDownloadId', Dl);
  const El = function(a) {
    return `${vj}/api/download?docid=${a.docid}&token=${a.token}`;
  };
  y('ee.data.makeDownloadUrl', El);
  const Fl = function(a, b) {
    if (L && b) {
      const c = b;
      b = function(d, e) {
        return c((d || {}).data || d, e);
      };
    }
    a = Mb(a);
    a = K('/table', J(a), b);
    return L ? (a || {}).data || a : a;
  };
  y('ee.data.getTableDownloadId', Fl);
  const Gl = function(a) {
    return `${vj}/api/table?docid=${a.docid}&token=${a.token}`;
  };
  y('ee.data.makeTableDownloadUrl', Gl);
  const Hl = function(a, b) {
    if (L) {
      const c = function(e) {
        return Math.floor(Math.random() * Math.pow(2, 4 * e))
          .toString(16)
          .padStart(e, '0');
      };
      a = mb(a || 1).map(function() {
        return [
          c(8),
          c(4),
          `4${c(3)}`,
          (8 + Math.floor(4 * Math.random())).toString(16) + c(3),
          c(12)
        ].join('-');
      });
      return b ? b(a) : a;
    }
    const d = {};
    typeof a === 'number' && (d.count = a);
    return K('/newtaskid', J(d), b);
  };
  y('ee.data.newTaskId', Hl);
  const Jl = function(a, b) {
    if (L) {
      const c = Il(a).map(rk);
      if (c.length === 1)
        return (
          (b = new H(b)),
          I(
            b,
            b
              .Fa()
              .get(c[0])
              .then(function(e) {
                return [tk(e)];
              })
          )
        );
      b = new hj(b);
      const d = b.Fa();
      return b.send(
        c.map(function(e) {
          return [e, d.get(e)];
        }),
        function(e) {
          return c.map(function(f) {
            return tk(e[f]);
          });
        }
      );
    }
    a = `/taskstatus?q=${Il(a).join()}`;
    return K(a, null, b, 'GET');
  };
  y('ee.data.getTaskStatus', Jl);
  var Il = function(a) {
    if (typeof a === 'string') return [a];
    if (u(a)) return a;
    throw Error('Invalid value: expected a string or an array of strings.');
  };
  const Ll = function(a) {
    return Kl(void 0, a);
  };
  y('ee.data.getTaskList', Ll);
  var Kl = function(a, b) {
    function c(h) {
      const m = {pagesize: 500};
      a && (m.pagesize = Math.min(m.pagesize, a - e.tasks.length));
      h && (m.pagetoken = h);
      return m;
    }
    function d(h, m) {
      m = c(m);
      K(
        '/tasklist',
        J(m),
        function(n, q) {
          q
            ? h(e, q)
            : (jb(e.tasks, n.tasks),
              !n.next_page_token || (a && e.tasks.length >= a) ? h(e) : d(h, n.next_page_token));
        },
        'GET'
      );
    }
    if (L)
      return b
        ? (Ml(a, function(h, m) {
            return b(h ? {tasks: h.map(tk)} : null, m);
          }),
          null)
        : {tasks: Ml(a).map(tk)};
    var e = {tasks: []};
    if (b) return d(b), null;
    for (let f = ''; ; ) {
      f = c(f);
      const g = K('/tasklist', J(f), void 0, 'GET');
      jb(e.tasks, g.tasks);
      f = g.next_page_token;
      if (!g.next_page_token || (a && e.tasks.length >= a)) break;
    }
    return e;
  };
  y('ee.data.getTaskListWithLimit', Kl);
  var Ml = function(a, b) {
    const c = [];
    const d = {pageSize: 500};
    var e = function(h) {
      jb(c, h.Fa || []);
      !h.nextPageToken || (a && c.length >= a)
        ? b && b(a ? c.slice(0, a) : c)
        : ((d.pageToken = h.nextPageToken), I(f, g.list(ej(), d).then(e)));
      return null;
    };
    var f = new H(
      b
        ? function(h, m) {
            return m && b(h, m);
          }
        : void 0
    );
    var g = f.Fa();
    I(f, g.list(ej(), d).then(e));
    return b ? null : a ? c.slice(0, a) : c;
  };
  rl.push('listOperations');
  const Nl = function(a, b) {
    a = Il(a);
    const c = new Se();
    if (a.length === 1) (b = new H(b)), I(b, b.Fa().cancel(a[0], c));
    else {
      b = new hj(b);
      const d = b.Fa();
      b.send(
        a.map(function(e) {
          return [e, d.cancel(e, c)];
        })
      );
    }
  };
  y('ee.data.cancelOperation', Nl);
  rl.push('cancelOperation');
  const Ol = function(a, b) {
    const c = Il(a).map(rk);
    if (!u(a)) return (a = new H(b)), I(a, a.Fa().get(c[0]));
    a = new hj(b);
    const d = a.Fa();
    return a.send(
      c.map(function(e) {
        return [e, d.get(e)];
      })
    );
  };
  y('ee.data.getOperation', Ol);
  rl.push('getOperation');
  const Ql = function(a, b) {
    return Pl(a, 'CANCEL', b);
  };
  y('ee.data.cancelTask', Ql);
  var Pl = function(a, b, c) {
    if (!Hb(Rl, b)) throw Error(`Invalid action: ${b}`);
    a = Il(a);
    return L
      ? ((a = a.map(rk)), Nl(a, c), null)
      : K('/updatetask', J({id: a, action: b}), c, 'POST');
  };
  y('ee.data.updateTask', Pl);
  const Wl = function(a, b, c) {
    if (L) {
      b.id = a;
      const d = b.type;
      a = b.sourceUrl != null ? {__source_url__: b.sourceUrl} : {};
      const e = new H(c);
      c = function(f) {
        return I(e, f.then(uk));
      };
      switch (d) {
        case 'EXPORT_IMAGE':
          return (b = Sl(b, a)), c(e.image().Wa(ej(), b));
        case 'EXPORT_FEATURES':
          return (b = bl(b)), (b.i = sl(b.i, a)), c(e.table().Wa(ej(), b));
        case 'EXPORT_VIDEO':
          return (b = Tl(b, a)), c(e.video().Wa(ej(), b));
        case 'EXPORT_TILES':
          return (b = Ul(b, a)), c(e.map().Wa(ej(), b));
        case 'EXPORT_VIDEO_MAP':
          return (b = Vl(b)), c(new Fg(e.U).Wa(ej(), b));
        default:
          throw Error(`Unable to start processing for task of type ${d}`);
      }
    }
    b = Mb(b);
    b.element != null && ((b.json = b.element.Y()), delete b.element);
    u(b.crs_transform) && (b.crs_transform = b.crs_transform.toString());
    b.id = a;
    return K('/processingrequest', J(b), c);
  };
  y('ee.data.startProcessing', Wl);
  var Sl = function(a, b) {
    let c = Xl(a);
    if (c.element == null) throw Error(`"element" not found in params ${c}`);
    a = new of({
      i: Mk(c.element),
      description: Xk(c.description),
      ia: null,
      Ta: null,
      K: null,
      Ye: Xk(c.maxPixels),
      I: Xk(c.id),
      V: Yk(c.maxWorkers)
    });
    let d = Zk(c);
    switch (d) {
      case 'GOOGLE_CLOUD_STORAGE':
      case 'DRIVE':
        a.ia = el(c, d);
        break;
      case 'ASSET':
        d = c.pyramidingPolicy || {};
        try {
          d = JSON.parse(d);
        } catch (f) {}
        var e = 'PYRAMIDING_POLICY_UNSPECIFIED';
        typeof d === 'string'
          ? ((e = d), (d = {}))
          : d['.default'] && ((e = d['.default']), delete d['.default']);
        c = new pf({
          ub: new kf({name: fk(c.assetId)}),
          pyramidingPolicy: e,
          jf: Kb(d) ? null : d
        });
        a.Ta = c;
        break;
      default:
        throw Error(`Export destination "${d}" unknown`);
    }
    a.i = sl(a.i, b);
    return a;
  };
  var Tl = function(a, b) {
    a = Yl(a);
    if (a.element == null) throw Error(`"element" not found in params ${a}`);
    const c = new Af({
      i: Mk(a.element),
      description: Xk(a.description),
      Ja: new zf({
        framesPerSecond: Yk(a.framesPerSecond),
        maxFrames: Yk(a.maxFrames),
        maxPixelsPerFrame: Xk(a.maxPixels)
      }),
      ia: null,
      I: Xk(a.id),
      V: Yk(a.maxWorkers)
    });
    c.ia = fl(a, Zk(a));
    c.i = sl(c.i, b);
    return c;
  };
  var Ul = function(a, b) {
    let c = a.scale;
    delete a.scale;
    a = Xl(a);
    a.scale = c;
    if (a.element == null) throw Error(`"element" not found in params ${a}`);
    c = new sf({
      i: Mk(a.element),
      description: Xk(a.description),
      Lb: gl(a),
      Kb: el(a, 'GOOGLE_CLOUD_STORAGE'),
      I: Xk(a.id),
      V: Yk(a.maxWorkers)
    });
    c.i = sl(c.i, b);
    return c;
  };
  var Vl = function(a) {
    let b = a.scale;
    delete a.scale;
    a = Yl(a);
    a.scale = b;
    if (a.element == null) throw Error(`"element" not found in params ${a}`);
    b = new xf({
      i: Mk(a.element),
      description: Xk(a.description),
      Ja: new zf({
        framesPerSecond: Yk(a.framesPerSecond),
        maxFrames: Yk(a.maxFrames),
        maxPixelsPerFrame: null
      }),
      Lb: gl(a),
      Kb: fl(a, 'GOOGLE_CLOUD_STORAGE'),
      I: Xk(a.id),
      version: Xk(a.version),
      V: Yk(a.maxWorkers)
    });
    b.i = sl(b.i);
    return b;
  };
  const $l = function(a, b, c) {
    if (L) {
      b = yk(b);
      const d = function(e) {
        return e ? uk(e) : null;
      };
      return d(
        Zl(
          a,
          b,
          c &&
            function(e, f) {
              return c(d(e), f);
            }
        )
      );
    }
    a = {id: a, request: Uh(b)};
    return K('/ingestionrequest', J(a), c);
  };
  y('ee.data.startIngestion', $l);
  var Zl = function(a, b, c) {
    b = new Vf({Le: b, I: a, overwrite: null, description: null});
    a = new H(c, a ? void 0 : 0);
    return I(a, a.image().import(ej(), b));
  };
  const am = function(a, b, c) {
    b = new Wf({Ef: b, I: a, overwrite: null, description: null});
    a = new H(c, a ? void 0 : 0);
    return I(a, a.table().import(ej(), b));
  };
  const bm = function(a, b, c) {
    if (L) {
      b = zk(b);
      const d = function(e) {
        return e ? uk(e) : null;
      };
      return d(
        am(
          a,
          b,
          c &&
            function(e, f) {
              return c(d(e), f);
            }
        )
      );
    }
    a = {id: a, tableRequest: Uh(b)};
    return K('/ingestionrequest', J(a), c);
  };
  y('ee.data.startTableIngestion', bm);
  const cm = function(a, b) {
    return L
      ? ((b = new H(b)),
        (a = fk(a)),
        I(
          b,
          b
            .S()
            .get(a, {prettyPrint: !1})
            .then(gk)
        ))
      : K('/info', new Qi().add('id', a), b);
  };
  y('ee.data.getAsset', cm);
  rl.push('getAsset');
  y('ee.data.getInfo', cm);
  const dm = function(a, b) {
    if (L) {
      b = new H(b);
      let c = b.S();
      let d = fk(a.id);
      const e = dk.test(a.id);
      e && ((c = new sg(b.U)), (d = `projects/${ek(a.id)}`));
      if (
        Object.keys(a).every(function(f) {
          return f === 'id' || f === 'num';
        })
      )
        return I(b, c.Fc(d, {pageSize: a.num}).then(hk));
      if (e)
        throw Error(
          `getList on a project does not support filtering options. Please provide a full asset path. Got: ${
            a.id
          }`
        );
      a = ok(a);
      return I(b, ug(c, d, a).then(jk));
    }
    a = J(a);
    return K('/list', a, b);
  };
  y('ee.data.getList', dm);
  const em = function(a, b, c) {
    b = void 0 === b ? {} : b;
    const d = dk.test(a);
    c = new H(c);
    const e = d ? new sg(c.U) : c.S();
    a = d ? `projects/${ek(a)}` : fk(a);
    return I(c, e.Fc(a, b));
  };
  y('ee.data.listAssets', em);
  rl.push('listAssets');
  const fm = function(a, b, c) {
    b = void 0 === b ? {} : b;
    c = new H(c);
    return I(c, ug(c.S(), a, b));
  };
  y('ee.data.listImages', fm);
  rl.push('listImages');
  const gm = function(a, b) {
    b = new H(b);
    return I(b, new sg(b.U).Fc(a || ej()));
  };
  y('ee.data.listBuckets', gm);
  rl.push('listBuckets');
  const hm = function(a) {
    return L
      ? ((a = new H(a)), I(a, new sg(a.U).Fc(ej()).then(hk)))
      : K('/buckets', null, a, 'GET');
  };
  y('ee.data.getAssetRoots', hm);
  const im = function(a, b) {
    if (L) {
      var c = `projects/${ek(a)}`;
      a = c === 'projects/earthengine-legacy' ? a : void 0;
      const d = new ff({type: 'Folder'});
      b = new H(b);
      I(
        b,
        b
          .S()
          .create(c, d, {assetId: a})
          .then(gk)
      );
    } else (c = J({id: a})), K('/createbucket', c, b);
  };
  y('ee.data.createAssetHome', im);
  const jm = function(a, b, c, d, e) {
    if (L) {
      if (c) throw Error('Asset overwrite not supported.');
      if (typeof a === 'string') throw Error('Asset cannot be specified as string.');
      c = a.name || (b && fk(b));
      if (!c) throw Error('Either asset name or opt_path must be specified.');
      const f = c.indexOf('/assets/');
      if (f === -1) throw Error('Asset name must contain /assets/.');
      a = new ff(a);
      b = c.slice(0, f);
      c = c.slice(f + 8);
      a.id = null;
      a.name = null;
      d && !a.properties && (a.properties = d);
      a: switch (((d = a.type), d)) {
        case 'ImageCollection':
          d = 'IMAGE_COLLECTION';
          break a;
        case 'Folder':
          d = 'FOLDER';
      }
      a.type = d;
      e = new H(e);
      return I(
        e,
        e
          .S()
          .create(b, a, {assetId: c})
          .then(gk)
      );
    }
    typeof a !== 'string' && (a = Uh(a));
    a = {value: a};
    void 0 !== b && (a.id = b);
    a.force = c || !1;
    void 0 != d && (a.properties = Uh(d));
    return K('/create', J(a), e);
  };
  y('ee.data.createAsset', jm);
  const km = function(a, b, c) {
    return L
      ? jm({type: 'Folder'}, a, b, void 0, c)
      : K('/createfolder', J({id: a, force: b || !1}), c);
  };
  y('ee.data.createFolder', km);
  const lm = function(a, b, c) {
    L
      ? ((a = fk(a)),
        (b = fk(b)),
        (b = new dg({sb: b})),
        (c = new H(c)),
        I(
          c,
          c
            .S()
            .move(a, b)
            .then(gk)
        ))
      : K('/rename', J({sourceId: a, destinationId: b}), c);
  };
  y('ee.data.renameAsset', lm);
  const mm = function(a, b, c, d) {
    if (L) {
      a = fk(a);
      b = fk(b);
      c = new Ze({sb: b, overwrite: c != null ? c : null});
      d = new H(d);
      b = gk;
      const e = d.S();
      e.h.w(a, /^projects\/[^/]+\/assets\/.+$/);
      a = G(e.h, {
        body: c,
        u: 'POST',
        B: 'earthengine.projects.assets.copy',
        path: `/${e.m}/${a}:copy`,
        o: {
          '$.xgafv': void 0,
          access_token: void 0,
          alt: void 0,
          callback: void 0,
          fields: void 0,
          key: void 0,
          oauth_token: void 0,
          prettyPrint: void 0,
          quotaUser: void 0,
          uploadType: void 0,
          upload_protocol: void 0
        },
        D: ff
      });
      I(d, a.then(b));
    } else (a = {sourceId: a, destinationId: b}), c && (a.allowOverwrite = c), K('/copy', J(a), d);
  };
  y('ee.data.copyAsset', mm);
  const nm = function(a, b) {
    L ? ((b = new H(b)), I(b, b.S().delete(fk(a)))) : K('/delete', J({id: a}), b);
  };
  y('ee.data.deleteAsset', nm);
  const om = function(a, b) {
    if (L) {
      a = fk(a);
      const c = new Hf();
      b = new H(b);
      const d = b.S();
      let e = {prettyPrint: !1};
      let f =
        void 0 === e
          ? {
              $Xgafv: void 0,
              access_token: void 0,
              alt: void 0,
              callback: void 0,
              fields: void 0,
              key: void 0,
              oauth_token: void 0,
              prettyPrint: void 0,
              quotaUser: void 0,
              uploadType: void 0,
              upload_protocol: void 0
            }
          : e;
      e = void 0 === f.$Xgafv ? void 0 : f.$Xgafv;
      const g = void 0 === f.access_token ? void 0 : f.access_token;
      const h = void 0 === f.alt ? void 0 : f.alt;
      const m = void 0 === f.callback ? void 0 : f.callback;
      const n = void 0 === f.fields ? void 0 : f.fields;
      const q = void 0 === f.key ? void 0 : f.key;
      const w = void 0 === f.oauth_token ? void 0 : f.oauth_token;
      const z = void 0 === f.prettyPrint ? void 0 : f.prettyPrint;
      const E = void 0 === f.quotaUser ? void 0 : f.quotaUser;
      const M = void 0 === f.uploadType ? void 0 : f.uploadType;
      f = void 0 === f.upload_protocol ? void 0 : f.upload_protocol;
      d.h.w(a, /^projects\/[^/]+\/assets\/.+$/);
      a = G(d.h, {
        body: c,
        u: 'POST',
        B: 'earthengine.projects.assets.getIamPolicy',
        path: `/${d.m}/${a}:getIamPolicy`,
        o: {
          '$.xgafv': e,
          access_token: g,
          alt: h,
          callback: m,
          fields: n,
          key: q,
          oauth_token: w,
          prettyPrint: z,
          quotaUser: E,
          uploadType: M,
          upload_protocol: f
        },
        D: gg
      });
      return I(b, a.then(pk));
    }
    return K('/getacl', J({id: a}), b, 'GET');
  };
  y('ee.data.getAssetAcl', om);
  const pm = function(a, b, c, d) {
    b = new pg({ce: b, jc: (c || []).join(',')});
    d = new H(d);
    c = gk;
    const e = d.S();
    a = fk(a);
    e.h.w(a, /^projects\/[^/]+\/assets\/.+$/);
    a = G(e.h, {
      body: b,
      u: 'PATCH',
      B: 'earthengine.projects.assets.patch',
      path: `/${e.m}/${a}`,
      o: {
        '$.xgafv': void 0,
        access_token: void 0,
        alt: void 0,
        callback: void 0,
        fields: void 0,
        key: void 0,
        oauth_token: void 0,
        prettyPrint: void 0,
        quotaUser: void 0,
        uploadType: void 0,
        upload_protocol: void 0
      },
      D: ff
    });
    return I(d, a.then(c));
  };
  y('ee.data.updateAsset', pm);
  const qm = function(a, b, c) {
    if (L) {
      a = fk(a);
      b = qk(b);
      b = new jg({cf: b});
      c = new H(c);
      const d = c.S();
      let e = {prettyPrint: !1};
      let f =
        void 0 === e
          ? {
              $Xgafv: void 0,
              access_token: void 0,
              alt: void 0,
              callback: void 0,
              fields: void 0,
              key: void 0,
              oauth_token: void 0,
              prettyPrint: void 0,
              quotaUser: void 0,
              uploadType: void 0,
              upload_protocol: void 0
            }
          : e;
      e = void 0 === f.$Xgafv ? void 0 : f.$Xgafv;
      const g = void 0 === f.access_token ? void 0 : f.access_token;
      const h = void 0 === f.alt ? void 0 : f.alt;
      const m = void 0 === f.callback ? void 0 : f.callback;
      const n = void 0 === f.fields ? void 0 : f.fields;
      const q = void 0 === f.key ? void 0 : f.key;
      const w = void 0 === f.oauth_token ? void 0 : f.oauth_token;
      const z = void 0 === f.prettyPrint ? void 0 : f.prettyPrint;
      const E = void 0 === f.quotaUser ? void 0 : f.quotaUser;
      const M = void 0 === f.uploadType ? void 0 : f.uploadType;
      f = void 0 === f.upload_protocol ? void 0 : f.upload_protocol;
      d.h.w(a, /^projects\/[^/]+\/assets\/.+$/);
      a = G(d.h, {
        body: b,
        u: 'POST',
        B: 'earthengine.projects.assets.setIamPolicy',
        path: `/${d.m}/${a}:setIamPolicy`,
        o: {
          '$.xgafv': e,
          access_token: g,
          alt: h,
          callback: m,
          fields: n,
          key: q,
          oauth_token: w,
          prettyPrint: z,
          quotaUser: E,
          uploadType: M,
          upload_protocol: f
        },
        D: gg
      });
      I(c, a);
    } else
      (b = {readers: b.readers, writers: b.writers, all_users_can_read: b.all_users_can_read}),
        (a = {id: a, value: Uh(b)}),
        K('/setacl', J(a), c);
  };
  y('ee.data.setAssetAcl', qm);
  const rm = function(a, b, c) {
    if (L) {
      const d = mk(b);
      b = Nd(d.f())
        .keys.filter(function(e) {
          return e !== 'properties' && F(d, e);
        })
        .map(function(e) {
          return e.replace(/([A-Z])/g, function(f, g) {
            return `_${g.toLowerCase()}`;
          });
        })
        .concat(
          Object.keys(d.properties || {}).map(function(e) {
            return `properties."${e}"`;
          })
        );
      pm(a, d, b, c);
    } else (a = {id: a, properties: Uh(b)}), K('/setproperties', J(a), c);
  };
  y('ee.data.setAssetProperties', rm);
  const sm = function(a, b) {
    if (L) {
      let c = fk(a);
      b = new H(b);
      const d = b.S();
      const e = d.h.w;
      d.h.w = function(f, g) {
        g.source === '^projects\\/[^/]+\\/assets\\/.+$' && (g = /^projects\/[^/]+\/assets\/.*$/);
        return e(f, g);
      };
      c = d.get(c, {prettyPrint: !1});
      return I(
        b,
        c.then(function(f) {
          if (!(f instanceof ff && f.quota)) throw Error(`${a} is not a root folder.`);
          f = f.quota;
          return {
            asset_count: {usage: Number(f.de || 0), limit: Number(f.We || 0)},
            asset_size: {usage: Number(f.za || 0), limit: Number(f.Eb || 0)}
          };
        })
      );
    }
    return K('/quota', J({id: a}), b, 'GET');
  };
  y('ee.data.getAssetRootQuota', sm);
  var Rl = {aj: 'CANCEL', lk: 'UPDATE'};
  var N = function(a, b, c) {
    if (!(this instanceof N)) return tm(N, arguments);
    if (c && (a || b))
      throw Error('When "opt_varName" is specified, "func" and "args" must be null.');
    if (a && !b) throw Error('When "func" is specified, "args" must not be null.');
    this.A = a;
    this.args = b;
    this.R = c || null;
  };
  A(N, Lj);
  y('ee.ComputedObject', N);
  N.prototype.evaluate = function(a) {
    if (!a || !Ba(a)) throw Error('evaluate() requires a callback function.');
    yl(this, a);
  };
  N.prototype.evaluate = N.prototype.evaluate;
  N.prototype.X = function(a) {
    return yl(this, a);
  };
  N.prototype.getInfo = N.prototype.X;
  N.prototype.encode = function(a) {
    if (this.A === null && this.args === null) return {type: 'ArgumentRef', value: this.R};
    let b = {};
    let c;
    for (c in this.args) void 0 !== this.args[c] && (b[c] = a(this.args[c]));
    b = {type: 'Invocation', arguments: b};
    a = a(this.A);
    b[typeof a === 'string' ? 'functionName' : 'function'] = a;
    return b;
  };
  N.prototype.qa = function(a) {
    if (this.A === null && this.args === null) {
      if (this.R === null) throw Error('Internal error: function argument not initialized.');
      return new Me({oc: this.R});
    }
    const b = {};
    let c;
    for (c in this.args) void 0 !== this.args[c] && (b[c] = Nj(a(this.args[c])));
    return typeof this.A === 'string' ? Qj(String(this.A), b) : this.A.we(a, b);
  };
  N.prototype.Y = function() {
    return Ik(this);
  };
  N.prototype.serialize = N.prototype.Y;
  N.prototype.toString = function() {
    return `ee.${this.name()}(${Kk(this)})`;
  };
  y('ee.ComputedObject.prototype.toString', N.prototype.toString);
  N.prototype.name = function() {
    return 'ComputedObject';
  };
  N.prototype.Nf = function(a, b) {
    const c = ib(arguments);
    c[0] = this;
    a.apply(t, c);
    return this;
  };
  N.prototype.aside = N.prototype.Nf;
  const um = function(a, b) {
    if (b instanceof a.constructor) return b;
    const c = function() {};
    c.prototype = a.constructor.prototype;
    a = new c();
    a.A = b.A;
    a.args = b.args;
    a.R = b.R;
    return a;
  };
  var tm = function(a, b) {
    function c() {
      return a.apply(this, b);
    }
    c.prototype = a.prototype;
    return new c();
  };
  let vm = {};
  const wm = function(a, b) {
    if (b == a) return !0;
    switch (a) {
      case 'Element':
        return (
          b == 'Element' ||
          b == 'Image' ||
          b == 'Feature' ||
          b == 'Collection' ||
          b == 'ImageCollection' ||
          b == 'FeatureCollection'
        );
      case 'FeatureCollection':
      case 'Collection':
        return b == 'Collection' || b == 'ImageCollection' || b == 'FeatureCollection';
      case 'Object':
        return !0;
      default:
        return !1;
    }
  };
  const xm = function(a) {
    return typeof a === 'number' || (a instanceof N && a.name() == 'Number');
  };
  const ym = function(a) {
    return typeof a === 'string' || (a instanceof N && a.name() == 'String');
  };
  const zm = function(a) {
    return v(a) && !Ba(a)
      ? ((a = Object.getPrototypeOf(a)), a !== null && Object.getPrototypeOf(a) === null)
      : !1;
  };
  const Am = function(a, b, c) {
    c = void 0 === c ? !1 : c;
    return a.length === 1 && zm(a[0]) && ((a = b.args), c && (a = a.slice(1)), a.length)
      ? !(a.length === 1 || a[1].optional) || a[0].type !== 'Dictionary'
      : !1;
  };
  var Bm = function() {
    if (!(this instanceof Bm)) return new Bm();
  };
  A(Bm, Lj);
  y('ee.Function', Bm);
  let Cm = Rb;
  Bm.prototype.call = function(a) {
    return this.apply(Dm(this, Array.prototype.slice.call(arguments, 0)));
  };
  Bm.prototype.call = Bm.prototype.call;
  Bm.prototype.apply = function(a) {
    a = new N(this, Em(this, a));
    return Cm(a, this.$().returns);
  };
  Bm.prototype.apply = Bm.prototype.apply;
  const Fm = function(a, b, c) {
    let d = void 0 !== b;
    const e = a.$();
    if (Am(c, e, d)) {
      if (((c = Mb(c[0])), d)) {
        d = e.args[0].name;
        if (d in c) throw Error(`Named args for ${e.name} can't contain keyword ${d}`);
        c[d] = b;
      }
    } else c = Dm(a, d ? [b].concat(c) : c);
    return a.apply(c);
  };
  var Em = function(a, b) {
    for (var c = a.$().args, d = {}, e = {}, f = 0; f < c.length; f++) {
      const g = c[f].name;
      if (g in b && void 0 !== b[g]) d[g] = Cm(b[g], c[f].type);
      else if (!c[f].optional) throw Error(`Required argument (${g}) missing to function: ${a}`);
      e[g] = !0;
    }
    c = [];
    for (const h in b) e[h] || c.push(h);
    if (c.length > 0) throw Error(`Unrecognized arguments (${c}) to function: ${a}`);
    return d;
  };
  var Dm = function(a, b) {
    const c = a.$().args;
    if (c.length < b.length) throw Error(`Too many (${b.length}) arguments to function: ${a}`);
    a = {};
    for (let d = 0; d < b.length; d++) a[c[d].name] = b[d];
    return a;
  };
  Bm.prototype.toString = function(a, b) {
    const c = this.$();
    const d = [];
    d.push(a || c.name);
    d.push('(');
    d.push(
      Ya(c.args.slice(b ? 1 : 0), function(f) {
        return f.name;
      }).join(', ')
    );
    d.push(')\n');
    d.push('\n');
    c.description ? d.push(c.description) : d.push('Undocumented.');
    d.push('\n');
    if (c.args.length)
      for (d.push('\nArgs:\n'), a = 0; a < c.args.length; a++) {
        b && a == 0 ? d.push('  this:') : d.push('\n  ');
        const e = c.args[a];
        d.push(e.name);
        d.push(' (');
        d.push(e.type);
        e.optional && d.push(', optional');
        d.push('): ');
        e.description ? d.push(e.description) : d.push('Undocumented.');
      }
    return d.join('');
  };
  Bm.prototype.Y = function() {
    return Ik(this);
  };
  var O = function(a, b) {
    if (void 0 === b) return Gm(a);
    if (!(this instanceof O)) return tm(O, arguments);
    this.Qa = Nb(b);
    this.Qa.name = a;
  };
  A(O, Bm);
  y('ee.ApiFunction', O);
  const P = function(a, b) {
    return Bm.prototype.call.apply(Gm(a), Array.prototype.slice.call(arguments, 1));
  };
  y('ee.ApiFunction._call', P);
  const Hm = function(a, b) {
    return Gm(a).apply(b);
  };
  y('ee.ApiFunction._apply', Hm);
  O.prototype.encode = function() {
    return this.Qa.name;
  };
  O.prototype.we = function(a, b) {
    return Qj(this.Qa.name, b);
  };
  O.prototype.$ = function() {
    return this.Qa;
  };
  let Im = null;
  let Jm = {};
  const Lm = function() {
    Km();
    return Db(Im, function(a) {
      return a.$();
    });
  };
  const Mm = function() {
    Km();
    return Cb(Im, function(a, b) {
      return !Jm[b];
    });
  };
  var Gm = function(a) {
    const b = Nm(a);
    if (!b) throw Error(`Unknown built-in function name: ${a}`);
    return b;
  };
  y('ee.ApiFunction.lookup', Gm);
  var Nm = function(a) {
    Km();
    return Im[a] || null;
  };
  var Km = function(a, b) {
    if (Im) a && a();
    else {
      const c = function(d, e) {
        e
          ? b && b(Error(e))
          : ((Im = Db(d, function(f, g) {
              f.returns = f.returns.replace(/<.*>/, '');
              for (let h = 0; h < f.args.length; h++)
                f.args[h].type = f.args[h].type.replace(/<.*>/, '');
              return new O(g, f);
            })),
            a && a());
      };
      a ? tl(c) : c(tl());
    }
  };
  const Om = function(a, b, c, d) {
    Km();
    const e = d || '';
    Bb(Im, function(f, g) {
      let h = g.split('.');
      if (h.length == 2 && h[0] == b) {
        h = e + h[1];
        const m = f.$();
        Jm[g] = !0;
        let n = !1;
        m.args.length && ((g = m.args[0].type), (n = g != 'Object' && wm(g, c)));
        g = n ? a.prototype : a;
        (h in g && !g[h].signature) ||
          ((g[h] = function(q) {
            return Fm(f, n ? this : void 0, Array.prototype.slice.call(arguments, 0));
          }),
          (g[h].toString = x(f.toString, f, h, n)),
          (g[h].signature = m));
      }
    });
  };
  const Pm = function(a) {
    const b = function(c) {
      for (const d in c) Ba(c[d]) && c[d].signature && delete c[d];
    };
    b(a);
    b(a.prototype || {});
  };
  const Q = function(a, b) {
    let c = Qm(a);
    const d = Ya(c, function(m) {
      return m.replace(/^opt_/, '');
    });
    a = (a = t.EXPORTED_FN_INFO
      ? `${t.EXPORTED_FN_INFO[a.toString()].name.split('.').pop()}()`
      : null)
      ? ` to function ${a}`
      : '';
    let e = {};
    let f = b[0];
    let g = v(f) && !Ba(f) && !u(f) && !(f instanceof N);
    if (b.length > 1 || !g) {
      if (b.length > d.length)
        throw Error(
          `Received too many arguments${a}. Expected at most ${d.length} but got ${b.length}.`
        );
      for (f = 0; f < b.length; f++) e[d[f]] = b[f];
    } else {
      g = new Fd(Gb(f));
      const h = new Fd(d);
      if (h.Qg(g).isEmpty()) e[d[0]] = b[0];
      else {
        b = g.ve(h);
        if (!b.isEmpty()) throw Error(`Unexpected arguments${a}: ${b.T().join(', ')}`);
        e = Mb(f);
      }
    }
    b = new Fd(Gb(e));
    c = new Fd(
      Xa(c, function(m) {
        return m.lastIndexOf('opt_', 0) != 0;
      })
    ).ve(b);
    if (!c.isEmpty()) throw Error(`Missing required arguments${a}: ${c.T().join(', ')}`);
    return e;
  };
  var Qm = function(a) {
    const b = Rm;
    let c = [];
    t.EXPORTED_FN_INFO
      ? ((a = t.EXPORTED_FN_INFO[a.toString()]), v(a) || Sm(), (c = a.paramNames), u(c) || Sm())
      : ((a = a
          .toString()
          .replace(Tm, '')
          .match(b)),
        a === null && Sm(),
        (c = (a[1].split(',') || []).map(function(d) {
          return d.replace(Um, '');
        })));
    return c;
  };
  var Sm = function() {
    throw Error('Failed to locate function parameters.');
  };
  var Tm = /((\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s))/gm;
  var Rm = /^function[^\(]*\(([^\)]*)\)/m;
  var Um = /[=].*$/;
  const R = function(a, b, c) {
    N.call(this, a, b, c);
    Vm();
  };
  A(R, N);
  y('ee.Element', R);
  let Wm = !1;
  var Vm = function() {
    Wm || (Om(R, 'Element', 'Element'), (Wm = !0));
  };
  R.prototype.name = function() {
    return 'Element';
  };
  R.prototype.set = function(a) {
    let b;
    if (arguments.length <= 1) {
      var c = arguments[0];
      if ((b = zm(c)))
        a: {
          b = Gb(c);
          var d = ['properties'];
          if (za(b) && za(d) && b.length == d.length) {
            for (let e = b.length, f = 0; f < e; f++)
              if (b[f] !== d[f]) {
                b = !1;
                break a;
              }
            b = !0;
          } else b = !1;
        }
      b && v(c.properties) && (c = c.properties);
      if (zm(c)) {
        b = this;
        for (var g in c) (d = c[g]), (b = P('Element.set', b, g, d));
      } else if (c instanceof N && Nm('Element.setMulti')) b = P('Element.setMulti', this, c);
      else throw Error('When Element.set() is passed one argument, it must be a dictionary.');
    } else {
      if (arguments.length % 2 != 0)
        throw Error(
          'When Element.set() is passed multiple arguments, there must be an even number of them.'
        );
      b = this;
      for (c = 0; c < arguments.length; c += 2)
        (g = arguments[c]), (d = arguments[c + 1]), (b = P('Element.set', b, g, d));
    }
    return um(this, b);
  };
  R.prototype.set = R.prototype.set;
  var S = function(a, b, c, d) {
    if (!(this instanceof S)) return tm(S, arguments);
    if (!('type' in a)) {
      var e = Q(S, arguments);
      a = e.geoJson;
      b = e.proj;
      c = e.geodesic;
      d = e.evenOdd;
    }
    Xm();
    e = b != null || c != null || d != null;
    if (a instanceof N && !(a instanceof S && a.ab)) {
      if (e)
        throw Error(
          'Setting the CRS, geodesic, or evenOdd flag on a computed Geometry is not supported.  Use Geometry.transform().'
        );
      N.call(this, a.A, a.args, a.R);
    } else {
      a instanceof S && (a = a.encode());
      if (!Ym(a)) throw Error(`Invalid GeoJSON geometry: ${JSON.stringify(a)}`);
      N.call(this, null, null);
      this.ab = a.type;
      this.eg = a.coordinates != null ? Nb(a.coordinates) : null;
      this.Dg = a.geometries || null;
      if (b != null) this.Hb = b;
      else if ('crs' in a)
        if (
          v(a.crs) &&
          a.crs.type == 'name' &&
          v(a.crs.properties) &&
          typeof a.crs.properties.name === 'string'
        )
          this.Hb = a.crs.properties.name;
        else throw Error(`Invalid CRS declaration in GeoJSON: ${new Th().Y(a.crs)}`);
      this.Yb = c;
      void 0 === this.Yb && 'geodesic' in a && (this.Yb = Boolean(a.geodesic));
      this.Wb = d;
      void 0 === this.Wb && 'evenOdd' in a && (this.Wb = Boolean(a.evenOdd));
    }
  };
  A(S, N);
  y('ee.Geometry', S);
  let Zm = !1;
  var Xm = function() {
    Zm || (Om(S, 'Geometry', 'Geometry'), (Zm = !0));
  };
  var $m = function(a, b) {
    if (!(this instanceof $m)) return an($m, arguments);
    const c = bn($m, 'Point', 1, arguments);
    if (!(c instanceof N)) {
      const d = c.coordinates;
      if (!u(d) || d.length != 2)
        throw Error('The Geometry.Point constructor requires 2 coordinates.');
    }
    S.call(this, c);
  };
  A($m, S);
  S.Point = $m;
  var cn = function(a, b) {
    if (!(this instanceof cn)) return an(cn, arguments);
    S.call(this, bn(cn, 'MultiPoint', 2, arguments));
  };
  A(cn, S);
  S.MultiPoint = cn;
  var dn = function(a, b, c, d) {
    if (!(this instanceof dn)) return an(dn, arguments);
    const e = bn(dn, 'Rectangle', 2, arguments);
    if (!(e instanceof N)) {
      let f = e.coordinates;
      if (f.length != 2)
        throw Error('The Geometry.Rectangle constructor requires 2 points or 4 coordinates.');
      const g = f[0][0];
      const h = f[0][1];
      const m = f[1][0];
      f = f[1][1];
      e.coordinates = [[[g, f], [g, h], [m, h], [m, f]]];
      e.type = 'Polygon';
    }
    S.call(this, e);
  };
  A(dn, S);
  S.Rectangle = dn;
  var en = function(a, b, c, d) {
    if (!(this instanceof en)) return an(en, arguments);
    S.call(this, bn(en, 'LineString', 2, arguments));
  };
  A(en, S);
  S.LineString = en;
  var fn = function(a, b, c, d) {
    if (!(this instanceof fn)) return an(fn, arguments);
    S.call(this, bn(fn, 'LinearRing', 2, arguments));
  };
  A(fn, S);
  S.LinearRing = fn;
  var gn = function(a, b, c, d) {
    if (!(this instanceof gn)) return an(gn, arguments);
    S.call(this, bn(gn, 'MultiLineString', 3, arguments));
  };
  A(gn, S);
  S.MultiLineString = gn;
  var hn = function(a, b, c, d, e) {
    if (!(this instanceof hn)) return an(hn, arguments);
    S.call(this, bn(hn, 'Polygon', 3, arguments));
  };
  A(hn, S);
  S.Polygon = hn;
  var jn = function(a, b, c, d, e) {
    if (!(this instanceof jn)) return an(jn, arguments);
    S.call(this, bn(jn, 'MultiPolygon', 4, arguments));
  };
  A(jn, S);
  S.MultiPolygon = jn;
  S.prototype.encode = function(a) {
    if (!this.ab) {
      if (!a) throw Error('Must specify an encode function when encoding a computed geometry.');
      return N.prototype.encode.call(this, a);
    }
    a = {type: this.ab};
    this.ab == 'GeometryCollection' ? (a.geometries = this.Dg) : (a.coordinates = this.eg);
    this.Hb != null && (a.crs = {type: 'name', properties: {name: this.Hb}});
    this.Yb != null && (a.geodesic = this.Yb);
    this.Wb != null && (a.evenOdd = this.Wb);
    return a;
  };
  S.prototype.Rc = function() {
    if (this.A)
      throw Error("Can't convert a computed Geometry to GeoJSON. Use evaluate() instead.");
    return this.encode();
  };
  S.prototype.toGeoJSON = S.prototype.Rc;
  S.prototype.If = function() {
    if (this.A)
      throw Error("Can't convert a computed Geometry to GeoJSON. Use evaluate() instead.");
    return new Th().Y(this.Rc());
  };
  S.prototype.toGeoJSONString = S.prototype.If;
  S.prototype.Y = function() {
    return Ik(this);
  };
  S.prototype.serialize = S.prototype.Y;
  S.prototype.toString = function() {
    return `ee.Geometry(${this.If()})`;
  };
  S.prototype.qa = function(a) {
    if (!this.ab) {
      if (!a) throw Error('Must specify an encode function when encoding a computed geometry.');
      return N.prototype.qa.call(this, a);
    }
    const b = {};
    let c = '';
    this.ab === 'GeometryCollection'
      ? ((b.geometries = this.Dg.map(function(e) {
          return new S(e);
        })),
        (c = 'GeometryConstructors.MultiGeometry'))
      : ((b.coordinates = this.eg), (c = `GeometryConstructors.${this.ab}`));
    this.Hb != null &&
      (b.crs = typeof this.Hb === 'string' ? new O('Projection').call(this.Hb) : this.Hb);
    const d = this.ab !== 'Point' && this.ab !== 'MultiPoint';
    this.Yb != null && d && (b.geodesic = this.Yb);
    this.Wb != null && (b.evenOdd = this.Wb);
    return new O(c).apply(b).qa(a);
  };
  var Ym = function(a) {
    let b = a.type;
    if (b == 'GeometryCollection') {
      b = a.geometries;
      if (!u(b)) return !1;
      for (a = 0; a < b.length; a++) if (!Ym(b[a])) return !1;
      return !0;
    }
    a = a.coordinates;
    const c = kn(a);
    return (
      (b == 'Point' && c == 1) ||
      (b == 'MultiPoint' && (c == 2 || a.length == 0)) ||
      (b == 'LineString' && c == 2) ||
      (b == 'LinearRing' && c == 2) ||
      (b == 'MultiLineString' && (c == 3 || a.length == 0)) ||
      (b == 'Polygon' && c == 3) ||
      (b == 'MultiPolygon' && (c == 4 || a.length == 0))
    );
  };
  var kn = function(a) {
    if (!u(a)) return -1;
    if (u(a[0])) {
      for (var b = kn(a[0]), c = 1; c < a.length; c++) if (kn(a[c]) != b) return -1;
      return b + 1;
    }
    for (c = 0; c < a.length; c++) if (typeof a[c] !== 'number') return -1;
    return a.length % 2 == 0 ? 1 : -1;
  };
  const ln = function(a) {
    if (typeof a[0] !== 'number' || a.length == 2) return a;
    if (a.length % 2 != 0) throw Error(`Invalid number of coordinates: ${a.length}`);
    for (var b = [], c = 0; c < a.length; c += 2) b.push([a[c], a[c + 1]]);
    return b;
  };
  var bn = function(a, b, c, d) {
    a = mn(a, d);
    if (nn(a.coordinates) || a.crs != null || a.maxError != null)
      return new O(`GeometryConstructors.${b}`).apply(a);
    a.type = b;
    a.coordinates = on(c, a.coordinates);
    (b = db(['Polygon', 'Rectangle', 'MultiPolygon'], b)) && a.evenOdd == null && (a.evenOdd = !0);
    if (b && !1 === a.geodesic && !1 === a.evenOdd)
      throw Error('Planar interiors must be even/odd.');
    return a;
  };
  var mn = function(a, b) {
    if ($a(b, xm)) return {coordinates: ib(b)};
    a = Q(a, b);
    a.coordinates = a.coords;
    delete a.coords;
    a.crs = a.proj;
    delete a.proj;
    return Cb(a, function(c) {
      return c != null;
    });
  };
  var nn = function(a) {
    return u(a) ? Za(a, nn) : a instanceof N;
  };
  var on = function(a, b) {
    if (a < 1 || a > 4) throw Error('Unexpected nesting level.');
    $a(b, function(e) {
      return typeof e === 'number';
    }) && (b = ln(b));
    for (var c = b, d = 0; u(c); ) (c = c[0]), d++;
    for (; d < a; ) (b = [b]), d++;
    if (kn(b) != a) throw Error('Invalid geometry');
    for (c = b; u(c) && c.length == 1; ) c = c[0];
    return u(c) && c.length == 0 ? [] : b;
  };
  var an = function(a, b) {
    let c = function() {};
    c.prototype = a.prototype;
    c = new c();
    a = a.apply(c, b);
    return void 0 !== a ? a : c;
  };
  S.prototype.name = function() {
    return 'Geometry';
  };
  var T = function(a) {
    if (!(this instanceof T)) return tm(T, arguments);
    if (a instanceof T) return a;
    pn();
    if (u(a)) {
      if (a.length == 0) throw Error('Empty list specified for ee.Filter().');
      if (a.length == 1) return new T(a[0]);
      N.call(this, new O('Filter.and'), {filters: a});
    } else if (a instanceof N) N.call(this, a.A, a.args, a.R);
    else if (void 0 === a) N.call(this, null, null);
    else throw Error(`Invalid argument specified for ee.Filter(): ${a}`);
  };
  A(T, N);
  y('ee.Filter', T);
  let qn = !1;
  var pn = function() {
    qn || (Om(T, 'Filter', 'Filter'), (qn = !0));
  };
  const rn = {
    equals: 'equals',
    less_than: 'lessThan',
    greater_than: 'greaterThan',
    contains: 'stringContains',
    starts_with: 'stringStartsWith',
    ends_with: 'stringEndsWith'
  };
  T.prototype.Zb = function() {
    return P('Filter.not', this);
  };
  T.prototype.not = T.prototype.Zb;
  var sn = function(a, b) {
    const c = Q(sn, arguments);
    return P('Filter.equals', c.name, c.value);
  };
  T.eq = sn;
  var tn = function(a, b) {
    const c = Q(tn, arguments);
    return sn(c.name, c.value).Zb();
  };
  T.neq = tn;
  var un = function(a, b) {
    const c = Q(un, arguments);
    return P('Filter.lessThan', c.name, c.value);
  };
  T.lt = un;
  var vn = function(a, b) {
    const c = Q(vn, arguments);
    return un(c.name, c.value).Zb();
  };
  T.gte = vn;
  var wn = function(a, b) {
    const c = Q(wn, arguments);
    return P('Filter.greaterThan', c.name, c.value);
  };
  T.gt = wn;
  var xn = function(a, b) {
    const c = Q(xn, arguments);
    return wn(c.name, c.value).Zb();
  };
  T.lte = xn;
  const yn = function(a) {
    return P('Filter.and', Array.prototype.slice.call(arguments));
  };
  T.and = yn;
  const zn = function(a) {
    return P('Filter.or', Array.prototype.slice.call(arguments));
  };
  T.or = zn;
  var An = function(a, b) {
    let c = Q(An, arguments);
    c = P('DateRange', c.start, c.end);
    return Hm('Filter.dateRangeContains', {leftValue: c, rightField: 'system:time_start'});
  };
  T.date = An;
  var Bn = function(a, b, c, d) {
    const e = Q(Bn, arguments);
    return Hm('Filter.listContains', {
      leftField: e.rightField,
      rightValue: e.leftValue,
      rightField: e.leftField,
      leftValue: e.rightValue
    });
  };
  T.inList = Bn;
  const Cn = function(a, b) {
    return Hm('Filter.intersects', {leftField: '.all', rightValue: P('Feature', a), maxError: b});
  };
  T.bounds = Cn;
  T.prototype.name = function() {
    return 'Filter';
  };
  const Dn = function(a, b, c) {
    b = b.toLowerCase();
    let d = !1;
    b.lastIndexOf('not_', 0) == 0 && ((d = !0), (b = b.substring(4)));
    if (!(b in rn)) throw Error(`Unknown filtering operator: ${b}`);
    a = P(`Filter.${rn[b]}`, a, c);
    return d ? a.Zb() : a;
  };
  T.metadata = Dn;
  const U = function(a, b, c) {
    R.call(this, a, b, c);
    En();
  };
  A(U, R);
  y('ee.Collection', U);
  let Fn = !1;
  var En = function() {
    Fn ||
      (Om(U, 'Collection', 'Collection'),
      Om(U, 'AggregateFeatureCollection', 'Collection', 'aggregate_'),
      (Fn = !0));
  };
  U.prototype.filter = function(a) {
    a = Q(U.prototype.filter, arguments).filter;
    if (!a) throw Error('Empty filters.');
    return um(this, P('Collection.filter', this, a));
  };
  U.prototype.filter = U.prototype.filter;
  U.prototype.Be = function(a, b, c) {
    const d = Q(U.prototype.Be, arguments);
    return this.filter(Dn(d.name, d.operator, d.value));
  };
  U.prototype.filterMetadata = U.prototype.Be;
  U.prototype.xg = function(a) {
    return this.filter(Cn(a));
  };
  U.prototype.filterBounds = U.prototype.xg;
  U.prototype.Ae = function(a, b) {
    const c = Q(U.prototype.Ae, arguments);
    return this.filter(An(c.start, c.end));
  };
  U.prototype.filterDate = U.prototype.Ae;
  U.prototype.limit = function(a, b, c) {
    const d = Q(U.prototype.limit, arguments);
    return um(this, P('Collection.limit', this, d.max, d.property, d.ascending));
  };
  U.prototype.limit = U.prototype.limit;
  U.prototype.sort = function(a, b) {
    const c = Q(U.prototype.sort, arguments);
    return um(this, P('Collection.limit', this, void 0, c.property, c.ascending));
  };
  U.prototype.sort = U.prototype.sort;
  U.prototype.name = function() {
    return 'Collection';
  };
  U.prototype.elementType = function() {
    return R;
  };
  U.prototype.map = function(a, b) {
    const c = this.elementType();
    return um(
      this,
      P(
        'Collection.map',
        this,
        function(d) {
          return a(new c(d));
        },
        b
      )
    );
  };
  U.prototype.map = U.prototype.map;
  U.prototype.Sg = function(a, b) {
    b = void 0 !== b ? b : null;
    const c = this.elementType();
    return P(
      'Collection.iterate',
      this,
      function(d, e) {
        return a(new c(d), e);
      },
      b
    );
  };
  U.prototype.iterate = U.prototype.Sg;
  var V = function(a, b) {
    if (!(this instanceof V)) return tm(V, arguments);
    if (a instanceof V) {
      if (b) throw Error("Can't create Feature out of a Feature and properties.");
      return a;
    }
    if (arguments.length > 2)
      throw Error(`The Feature constructor takes at most 2 arguments (${arguments.length} given)`);
    Gn();
    if (a instanceof S || a === null)
      R.call(this, new O('Feature'), {geometry: a, metadata: b || null});
    else if (a instanceof N) R.call(this, a.A, a.args, a.R);
    else if (a.type == 'Feature') {
      let c = a.properties || {};
      if ('id' in a) {
        if ('system:index' in c) throw Error('Can\'t specify both "id" and "system:index".');
        c = Mb(c);
        c['system:index'] = a.id;
      }
      R.call(this, new O('Feature'), {geometry: new S(a.geometry), metadata: c});
    } else R.call(this, new O('Feature'), {geometry: new S(a), metadata: b || null});
  };
  A(V, R);
  y('ee.Feature', V);
  let Hn = !1;
  var Gn = function() {
    Hn || (Om(V, 'Feature', 'Feature'), (Hn = !0));
  };
  V.prototype.X = function(a) {
    return V.F.X.call(this, a);
  };
  V.prototype.getInfo = V.prototype.X;
  V.prototype.getMap = function(a, b) {
    const c = Q(V.prototype.getMap, arguments);
    return P('Collection', [this]).getMap(c.visParams, c.callback);
  };
  V.prototype.getMap = V.prototype.getMap;
  V.prototype.name = function() {
    return 'Feature';
  };
  var Xl = function(a) {
    const b = {};
    let c = In(a.element, a);
    c = Jn(c, a, b);
    b.element = c;
    return b;
  };
  var Yl = function(a) {
    const b = {};
    const c = a.element.map(function(d) {
      d = In(d, a);
      return Jn(d, a, b);
    });
    b.element = c;
    return b;
  };
  var Jn = function(a, b, c) {
    const d = {};
    const e = ['maxDimension', 'width', 'height', 'scale'];
    Bb(b, function(f, g) {
      switch (g) {
        case 'dimensions':
          g =
            typeof f === 'string'
              ? f.split('x').map(Number)
              : u(f)
                ? f
                : typeof f === 'number'
                  ? [f]
                  : [];
          if (g.length === 1) d.maxDimension = g[0];
          else if (g.length === 2) (d.width = g[0]), (d.height = g[1]);
          else throw Error(`Invalid dimensions ${f}`);
          break;
        case 'bbox':
          d.geometry != null && console.warn('Multiple request parameters converted to region.');
          if (!(f instanceof dn)) {
            g = f;
            if (typeof f === 'string')
              try {
                g = JSON.parse(f);
              } catch (h) {
                g = f.split(/\s*,\s*/).map(Number);
              }
            if (u(g)) {
              if (g.some(isNaN))
                throw Error('Invalid bbox `{bboxArray}`, please specify a list of numbers.');
              f = new dn(g, null, !1);
            } else throw Error('Invalid bbox "{bbox}" type, must be of type Array<number>');
          }
          d.geometry = f;
          break;
        case 'region':
          d.geometry != null && console.warn('Multiple request parameters converted to region.');
          if (!(f instanceof S)) {
            g = f;
            if (typeof f === 'string')
              try {
                g = JSON.parse(f);
              } catch (h) {
                throw Error(`Region string "${f}" is not valid GeoJSON.`);
              }
            if (v(g)) f = new S(g, null, !1);
            else throw Error('Region {region} was not convertible to an ee.Geometry.');
          }
          d.geometry = f;
          break;
        case 'scale':
          d.scale = Number(f);
          break;
        default:
          c[g] = f;
      }
    });
    Kb(d) ||
      ((d.input = a),
      (a = e.some(function(f) {
        return f in d;
      })
        ? Hm('Image.clipToBoundsAndScale', d)
        : Hm('Image.clip', d)));
    return a;
  };
  var In = function(a, b) {
    let c = b.crs || '';
    let d = b.crsTransform || b.crs_transform;
    d != null && (d = Kn(d));
    if (!c && !d) return a;
    if (d && !c) throw Error('Must specify "crs" if "crsTransform" is specified.');
    if (d) {
      if (
        ((a = Hm('Image.reproject', {image: a, crs: c, crsTransform: d})),
        b.dimensions != null && b.scale == null && b.region == null)
      ) {
        let e = b.dimensions;
        typeof e === 'string' && (e = e.split('x').map(Number));
        e.length === 2 &&
          (delete b.dimensions,
          (c = new O('Projection').call(c, d)),
          (b.region = new dn([0, 0, e[0], e[1]], c, !1)));
      }
    } else
      a = Hm('Image.setDefaultProjection', {image: a, crs: c, crsTransform: [1, 0, 0, 0, -1, 0]});
    return a;
  };
  var Kn = function(a) {
    if (typeof a === 'string')
      try {
        a = JSON.parse(a);
      } catch (b) {}
    if (u(a)) {
      if (
        a.length === 6 &&
        $a(a, function(b) {
          return typeof b === 'number';
        })
      )
        return a;
      throw Error('Invalid argument, crs transform must be a list of 6 numbers.');
    }
    throw Error('Invalid argument, crs transform was not a string or array.');
  };
  const Mn = function(a, b) {
    const c = {};
    b = Ln(b, c);
    Kb(b) || ((b.image = a), (a = Hm('Image.visualize', b)));
    c.image = a;
    return c;
  };
  var Ln = function(a, b) {
    const c = 'bands gain bias min max gamma palette opacity forceRgbOutput'.split(' ');
    const d = {};
    Bb(a, function(e, f) {
      db(c, f) ? (d[f] = e) : (b[f] = e);
    });
    return d;
  };
  var W = function(a) {
    if (!(this instanceof W)) return tm(W, arguments);
    if (a instanceof W) return a;
    Nn();
    let b = arguments.length;
    if (b == 0 || (b == 1 && void 0 === a))
      R.call(this, new O('Image.mask'), {image: new W(0), mask: new W(0)});
    else if (b == 1)
      if (xm(a)) R.call(this, new O('Image.constant'), {value: a});
      else if (ym(a)) R.call(this, new O('Image.load'), {id: a});
      else {
        if (u(a))
          return On(
            Ya(a, function(d) {
              return new W(d);
            })
          );
        if (a instanceof N)
          a.name() == 'Array'
            ? R.call(this, new O('Image.constant'), {value: a})
            : R.call(this, a.A, a.args, a.R);
        else throw Error(`Unrecognized argument type to convert to an Image: ${a}`);
      }
    else if (b == 2) {
      b = arguments[0];
      const c = arguments[1];
      if (ym(b) && xm(c)) R.call(this, new O('Image.load'), {id: b, version: c});
      else throw Error(`Unrecognized argument types to convert to an Image: ${arguments}`);
    } else throw Error(`The Image constructor takes at most 2 arguments (${b} given)`);
  };
  A(W, R);
  y('ee.Image', W);
  let Pn = !1;
  var Nn = function() {
    Pn || (Om(W, 'Image', 'Image'), Om(W, 'Window', 'Image', 'focal_'), (Pn = !0));
  };
  W.prototype.X = function(a) {
    return W.F.X.call(this, a);
  };
  W.prototype.getInfo = W.prototype.X;
  W.prototype.getMap = function(a, b) {
    const c = this;
    let d = Q(W.prototype.getMap, arguments);
    const e = Mn(this, d.visParams);
    if (d.callback) {
      const f = d.callback;
      vl(e, function(g, h) {
        g = g ? Object.assign(g, {image: c}) : void 0;
        f(g, h);
      });
    } else return (d = vl(e)), (d.image = this), d;
  };
  W.prototype.getMap = W.prototype.getMap;
  W.prototype.yb = function(a, b) {
    const c = Q(W.prototype.yb, arguments);
    const d = c.params ? Mb(c.params) : {};
    d.image = this.Y();
    if (c.callback) {
      const e = c.callback;
      Dl(d, function(f, g) {
        f ? e(El(f)) : e(null, g);
      });
    } else return El(Dl(d));
  };
  W.prototype.getDownloadURL = W.prototype.yb;
  W.prototype.He = function(a, b) {
    const c = Q(W.prototype.He, arguments);
    if (L) {
      var d = {};
      const e = Jn(this, c.params, d);
      d = Mn(e, d);
    } else if (((d = Mn(this, c.params)), d.region))
      if ((d.region instanceof S && (d.region = d.region.Rc()), u(d.region) || zm(d.region)))
        d.region = Uh(d.region);
      else if (typeof d.region !== 'string')
        throw Error('The region parameter must be an array or a GeoJSON object.');
    if (c.callback)
      zl(d, function(f, g) {
        let h = '';
        if (void 0 === g)
          try {
            h = Cl(f);
          } catch (m) {
            g = String(m.message);
          }
        c.callback(h, g);
      });
    else return Cl(zl(d));
  };
  W.prototype.getThumbURL = W.prototype.He;
  var Qn = function(a, b, c) {
    const d = Q(Qn, arguments);
    return On([d.r, d.g, d.b], ['vis-red', 'vis-green', 'vis-blue']);
  };
  W.rgb = Qn;
  const Rn = function(a) {
    return On(Array.prototype.slice.call(arguments), null);
  };
  W.cat = Rn;
  var On = function(a, b) {
    if (a.length == 0) return P('Image.constant', []);
    for (var c = new W(a[0]), d = 1; d < a.length; d++) c = P('Image.addBands', c, a[d]);
    b && (c = c.select(['.*'], b));
    return c;
  };
  W.prototype.select = function(a) {
    const b = Array.prototype.slice.call(arguments);
    const c = {input: this, bandSelectors: b[0] || []};
    if (b.length > 2 || ym(b[0]) || xm(b[0])) {
      for (let d = 0; d < b.length; d++)
        if (!(ym(b[d]) || xm(b[d]) || b[d] instanceof N))
          throw Error(`Illegal argument to select(): ${b[d]}`);
      c.bandSelectors = b;
    } else b[1] && (c.newNames = b[1]);
    return Hm('Image.select', c);
  };
  W.prototype.select = W.prototype.select;
  W.prototype.i = function(a, b) {
    let c = Q(W.prototype.i, arguments);
    const d = ['DEFAULT_EXPRESSION_IMAGE'];
    const e = {DEFAULT_EXPRESSION_IMAGE: this};
    if (c.map) {
      const f = c.map;
      let g;
      for (g in f) d.push(g), (e[g] = new W(f[g]));
    }
    const h = P('Image.parseExpression', c.expression, 'DEFAULT_EXPRESSION_IMAGE', d);
    c = new Bm();
    c.encode = function(m) {
      return h.encode(m);
    };
    c.we = function(m, n) {
      return Rj(m(h), n);
    };
    c.$ = function() {
      return {
        name: '',
        args: Ya(
          d,
          function(m) {
            return {name: m, type: 'Image', optional: !1};
          },
          this
        ),
        returns: 'Image'
      };
    };
    return c.apply(e);
  };
  W.prototype.expression = W.prototype.i;
  W.prototype.clip = function(a) {
    try {
      a = new S(a);
    } catch (b) {}
    return P('Image.clip', this, a);
  };
  W.prototype.clip = W.prototype.clip;
  W.prototype.ph = function(a) {
    const b = arguments.length != 1 || ym(arguments[0]) ? ib(arguments) : arguments[0];
    return P('Image.rename', this, b);
  };
  W.prototype.rename = W.prototype.ph;
  W.prototype.name = function() {
    return 'Image';
  };
  var Sn = function(a) {
    if (this instanceof Sn) {
      if (arguments.length > 1) throw Error('ee.List() only accepts 1 argument.');
      if (a instanceof Sn) return a;
    } else return tm(Sn, arguments);
    Tn();
    if (u(a)) N.call(this, null, null), (this.Gc = a);
    else if (a instanceof N) N.call(this, a.A, a.args, a.R), (this.Gc = null);
    else throw Error(`Invalid argument specified for ee.List(): ${a}`);
  };
  A(Sn, N);
  y('ee.List', Sn);
  let Un = !1;
  var Tn = function() {
    Un || (Om(Sn, 'List', 'List'), (Un = !0));
  };
  Sn.prototype.encode = function(a) {
    return u(this.Gc)
      ? Ya(this.Gc, function(b) {
          return a(b);
        })
      : Sn.F.encode.call(this, a);
  };
  Sn.prototype.qa = function(a) {
    return u(this.Gc) ? Nj(a(this.Gc)) : Sn.F.qa.call(this, a);
  };
  Sn.prototype.name = function() {
    return 'List';
  };
  var X = function(a, b) {
    if (!(this instanceof X)) return tm(X, arguments);
    if (a instanceof X) return a;
    if (arguments.length > 2)
      throw Error(
        `The FeatureCollection constructor takes at most 2 arguments (${arguments.length} given)`
      );
    Vn();
    a instanceof S && (a = new V(a));
    a instanceof V && (a = [a]);
    if (ym(a)) {
      const c = {tableId: a};
      b && (c.geometryColumn = b);
      U.call(this, new O('Collection.loadTable'), c);
    } else if (u(a))
      U.call(this, new O('Collection'), {
        features: Ya(a, function(d) {
          return new V(d);
        })
      });
    else if (a instanceof Sn) U.call(this, new O('Collection'), {features: a});
    else if (a instanceof N) U.call(this, a.A, a.args, a.R);
    else throw Error(`Unrecognized argument type to convert to a FeatureCollection: ${a}`);
  };
  A(X, U);
  y('ee.FeatureCollection', X);
  let Wn = !1;
  var Vn = function() {
    Wn || (Om(X, 'FeatureCollection', 'FeatureCollection'), (Wn = !0));
  };
  X.prototype.getMap = function(a, b) {
    const c = Q(X.prototype.getMap, arguments);
    const d = Hm('Collection.draw', {
      collection: this,
      color: (c.visParams || {}).color || '000000'
    });
    if (c.callback) d.getMap(void 0, c.callback);
    else return d.getMap();
  };
  X.prototype.getMap = X.prototype.getMap;
  X.prototype.X = function(a) {
    return X.F.X.call(this, a);
  };
  X.prototype.getInfo = X.prototype.X;
  X.prototype.yb = function(a, b, c, d) {
    const e = Q(X.prototype.yb, arguments);
    const f = {};
    f.table = this.Y();
    e.format && (f.format = e.format.toUpperCase());
    e.filename && (f.filename = e.filename);
    if (e.selectors) {
      let g = e.selectors;
      za(g) && (g = g.join(','));
      f.selectors = g;
    }
    if (e.callback)
      Fl(f, function(h, m) {
        h ? e.callback(Gl(h)) : e.callback(null, m);
      });
    else return Gl(Fl(f));
  };
  X.prototype.getDownloadURL = X.prototype.yb;
  X.prototype.select = function(a, b, c) {
    if (ym(a)) {
      const d = Array.prototype.slice.call(arguments);
      return this.map(function(f) {
        return f.select(d);
      });
    }
    const e = Q(X.prototype.select, arguments);
    return this.map(function(f) {
      return f.select(e);
    });
  };
  X.prototype.select = X.prototype.select;
  X.prototype.name = function() {
    return 'FeatureCollection';
  };
  X.prototype.elementType = function() {
    return V;
  };
  var Y = function(a) {
    if (!(this instanceof Y)) return tm(Y, arguments);
    if (a instanceof Y) return a;
    if (arguments.length != 1)
      throw Error(
        `The ImageCollection constructor takes exactly 1 argument (${arguments.length} given)`
      );
    Xn();
    a instanceof W && (a = [a]);
    if (ym(a)) U.call(this, new O('ImageCollection.load'), {id: a});
    else if (u(a))
      U.call(this, new O('ImageCollection.fromImages'), {
        images: Ya(a, function(b) {
          return new W(b);
        })
      });
    else if (a instanceof Sn) U.call(this, new O('ImageCollection.fromImages'), {images: a});
    else if (a instanceof N) U.call(this, a.A, a.args, a.R);
    else throw Error(`Unrecognized argument type to convert to an ImageCollection: ${a}`);
  };
  A(Y, U);
  y('ee.ImageCollection', Y);
  let Yn = !1;
  var Xn = function() {
    Yn ||
      (Om(Y, 'ImageCollection', 'ImageCollection'), Om(Y, 'reduce', 'ImageCollection'), (Yn = !0));
  };
  Y.prototype.Fe = function(a, b) {
    const c = Q(Y.prototype.Fe, arguments);
    return Zn(this, c, ['png', 'jpg', 'jpeg'], 'filmstrip');
  };
  Y.prototype.getFilmstripThumbURL = Y.prototype.Fe;
  Y.prototype.Ie = function(a, b) {
    const c = Q(Y.prototype.Ie, arguments);
    return Zn(this, c, ['gif'], 'video');
  };
  Y.prototype.getVideoThumbURL = Y.prototype.Ie;
  var Zn = function(a, b, c, d) {
    const e = {};
    a = a.map(function(h) {
      h = In(h, b.params);
      return Jn(h, b.params, e);
    });
    const f = {};
    const g = Ln(e, f);
    f.imageCollection = a.map(function(h) {
      g.image = h;
      return Hm('Image.visualize', g);
    });
    b.params.dimensions != null && (f.dimensions = b.params.dimensions);
    if (f.format) {
      if (
        !Za(c, function(h) {
          return h.toLowerCase() == f.format.toLowerCase();
        })
      )
        throw Error('Invalid format specified.');
    } else f.format = c[0];
    c = zl;
    if (L)
      switch (d) {
        case 'video':
          c = Al;
          break;
        case 'filmstrip':
          c = Bl;
      }
    if (b.callback)
      c(f, function(h, m) {
        let n = '';
        if (void 0 === m)
          try {
            n = Cl(h);
          } catch (q) {
            m = String(q.message);
          }
        b.callback(n, m);
      });
    else return Cl(c(f));
  };
  Y.prototype.getMap = function(a, b) {
    const c = Q(Y.prototype.getMap, arguments);
    const d = P('ImageCollection.mosaic', this);
    if (c.callback) d.getMap(c.visParams, c.callback);
    else return d.getMap(c.visParams);
  };
  Y.prototype.getMap = Y.prototype.getMap;
  Y.prototype.X = function(a) {
    return Y.F.X.call(this, a);
  };
  Y.prototype.getInfo = Y.prototype.X;
  Y.prototype.select = function(a, b) {
    const c = arguments;
    return this.map(function(d) {
      return d.select.apply(d, c);
    });
  };
  Y.prototype.select = Y.prototype.select;
  Y.prototype.first = function() {
    return new W(P('Collection.first', this));
  };
  Y.prototype.first = Y.prototype.first;
  Y.prototype.name = function() {
    return 'ImageCollection';
  };
  Y.prototype.elementType = function() {
    return W;
  };
  const $n = function(a) {
    this.oe = a;
    this.id = null;
  };
  const bo = function(a) {
    let b = {element: ao(a)};
    Object.assign(b, a);
    b = Cb(b, function(c) {
      return c != null;
    });
    return new $n(b);
  };
  $n.prototype.start = function(a, b) {
    const c = this;
    B(this.oe, 'Task config must be specified for tasks to be started.');
    if (a) {
      const d = function() {
        Ra(c.id);
        Wl(c.id, c.oe, function(e, f) {
          f ? b(f) : a();
        });
      };
      this.id
        ? d()
        : Hl(1, function(e) {
            (e = e && e[0]) ? ((c.id = e), d()) : b('Failed to obtain task ID.');
          });
    } else
      (this.id = this.id || Hl(1)[0]),
        Ra(this.id, 'Failed to obtain task ID.'),
        Wl(this.id, this.oe);
  };
  $n.prototype.start = $n.prototype.start;
  var co = function(a, b, c, d, e, f, g, h, m, n) {
    let q = Q(co, arguments);
    q = eo(q, 'ASSET', 'EXPORT_IMAGE');
    return bo(q);
  };
  y('ee.batch.Export.image.toAsset', co);
  var fo = function(a, b, c, d, e, f, g, h, m, n, q, w, z, E, M) {
    let Z = Q(fo, arguments);
    Z = eo(Z, 'GOOGLE_CLOUD_STORAGE', 'EXPORT_IMAGE');
    return bo(Z);
  };
  y('ee.batch.Export.image.toCloudStorage', fo);
  var go = function(a, b, c, d, e, f, g, h, m, n, q, w, z, E, M) {
    let Z = Q(go, arguments);
    Z = eo(Z, 'DRIVE', 'EXPORT_IMAGE');
    return bo(Z);
  };
  y('ee.batch.Export.image.toDrive', go);
  var ho = function(a, b, c, d, e, f, g, h, m, n, q, w) {
    let z = Q(ho, arguments);
    z = eo(z, 'GOOGLE_CLOUD_STORAGE', 'EXPORT_TILES');
    return bo(z);
  };
  y('ee.batch.Export.map.toCloudStorage', ho);
  var io = function(a, b, c, d, e, f) {
    let g = Q(io, arguments);
    g = eo(g, 'GOOGLE_CLOUD_STORAGE', 'EXPORT_FEATURES');
    return bo(g);
  };
  y('ee.batch.Export.table.toCloudStorage', io);
  var jo = function(a, b, c, d, e, f) {
    let g = Q(jo, arguments);
    g.type = 'EXPORT_FEATURES';
    g = eo(g, 'DRIVE', 'EXPORT_FEATURES');
    return bo(g);
  };
  y('ee.batch.Export.table.toDrive', jo);
  var ko = function(a, b, c) {
    let d = Q(ko, arguments);
    d = eo(d, 'ASSET', 'EXPORT_FEATURES');
    return bo(d);
  };
  y('ee.batch.Export.table.toAsset', ko);
  var lo = function(a, b, c, d, e, f, g, h, m, n, q, w) {
    let z = Q(lo, arguments);
    z = eo(z, 'GOOGLE_CLOUD_STORAGE', 'EXPORT_VIDEO');
    return bo(z);
  };
  y('ee.batch.Export.video.toCloudStorage', lo);
  var mo = function(a, b, c, d, e, f, g, h, m, n, q, w) {
    let z = Q(mo, arguments);
    z = eo(z, 'DRIVE', 'EXPORT_VIDEO');
    return bo(z);
  };
  y('ee.batch.Export.video.toDrive', mo);
  var no = function(a, b, c, d, e, f, g, h, m, n, q, w, z, E, M, Z, Bj, Cj, Dj, Ej) {
    let gi = Q(no, arguments);
    gi = eo(gi, 'GOOGLE_CLOUD_STORAGE', 'EXPORT_VIDEO_MAP');
    return bo(gi);
  };
  y('ee.batch.Export.videoMap.toCloudStorage', no);
  var ao = function(a) {
    let b = function(d) {
      return d in a;
    };
    const c = oo.find(b);
    B(ab(oo, b) === 1, 'Expected a single "image" or "collection" key.');
    b = a[c];
    if (!(b instanceof W || b instanceof X || b instanceof Y || b instanceof R))
      throw Error(
        `Unknown element type provided: ${typeof b}. Expected:  ee.Image, ee.ImageCollection, ee.FeatureCollection or ee.Element.`
      );
    delete a[c];
    return b;
  };
  var eo = function(a, b, c) {
    var d = void 0 === d ? !0 : d;
    let e = {type: c};
    Object.assign(e, a);
    switch (c) {
      case 'EXPORT_IMAGE':
        e.fileFormat == null && (e.fileFormat = 'GeoTIFF');
        a = e.fileFormat;
        a == null && (a = 'GEO_TIFF');
        a = a.toUpperCase();
        switch (a) {
          case 'TIFF':
          case 'TIF':
          case 'GEO_TIFF':
          case 'GEOTIFF':
            a = 'GEO_TIFF';
            break;
          case 'TF_RECORD':
          case 'TF_RECORD_IMAGE':
          case 'TFRECORD':
            a = 'TF_RECORD_IMAGE';
            break;
          default:
            throw Error(`Invalid file format ${a}. Supported formats are: 'GEOTIFF', 'TFRECORD'.`);
        }
        e.formatOptions != null && ((a = po(e, a)), delete e.formatOptions, Object.assign(e, a));
        e = qo(e, b);
        e.crsTransform != null && ((e.crs_transform = e.crsTransform), delete e.crsTransform);
        break;
      case 'EXPORT_TILES':
        e = b = qo(e, b);
        break;
      case 'EXPORT_FEATURES':
        u(e.selectors) && (e.selectors = e.selectors.join());
        e = qo(e, b);
        break;
      case 'EXPORT_VIDEO':
        e = ro(e);
        e = qo(e, b);
        e.crsTransform != null && ((e.crs_transform = e.crsTransform), delete e.crsTransform);
        break;
      case 'EXPORT_VIDEO_MAP':
        e = ro(e);
        e.version = e.version || 'V1';
        e.stride = e.stride || 1;
        e.tileDimensions = {width: e.tileWidth || 256, height: e.tileHeight || 256};
        e = qo(e, b);
        break;
      default:
        throw Error(`Unknown export type: ${e.type}`);
    }
    if (d && e.region != null) {
      d = e;
      b = e.region;
      if (b instanceof S) b = b.Rc();
      else if (typeof b === 'string')
        try {
          b = Ta(JSON.parse(b));
        } catch (f) {
          throw Error(
            'Invalid format for region property. Region must be GeoJSON LinearRing or Polygon specified as actual coordinates or serialized as a string. See Export documentation.'
          );
        }
      if (!(v(b) && 'type' in b))
        try {
          new en(b);
        } catch (f) {
          try {
            new hn(b);
          } catch (g) {
            throw Error(
              'Invalid format for region property. Region must be GeoJSON LinearRing or Polygon specified as actual coordinates or serialized as a string. See Export documentation.'
            );
          }
        }
      b = Uh(b);
      d.region = b;
    }
    return e;
  };
  var qo = function(a, b) {
    switch (b) {
      case 'GOOGLE_CLOUD_STORAGE':
        a.outputBucket = a.bucket || '';
        a.outputPrefix = a.fileNamePrefix || a.path || '';
        delete a.fileNamePrefix;
        delete a.path;
        delete a.bucket;
        break;
      case 'ASSET':
        a.assetId = a.assetId || '';
        break;
      default:
        b = ya(a.folder);
        if (!db(['string', 'undefined'], b))
          throw Error(`Error: toDrive "folder" parameter must be a string, but is of type ${b}.`);
        a.driveFolder = a.folder || '';
        a.driveFileNamePrefix = a.fileNamePrefix || '';
        delete a.folder;
        delete a.fileNamePrefix;
    }
    return a;
  };
  const so = {
    GEO_TIFF: ['cloudOptimized', 'fileDimensions'],
    TF_RECORD_IMAGE: 'patchDimensions kernelSize compressed maxFileSize defaultValue tensorDepths sequenceData collapseBands maskedThreshold'.split(
      ' '
    )
  };
  const to = {GEO_TIFF: 'tiff', TF_RECORD_IMAGE: 'tfrecord'};
  var ro = function(a) {
    a.videoOptions = a.framesPerSecond || 5;
    a.maxFrames = a.maxFrames || 1e3;
    a.maxPixels = a.maxPixels || 1e8;
    a.fileFormat = 'MP4';
    return a;
  };
  var po = function(a, b) {
    const c = a.formatOptions;
    if (c == null) return {};
    if (
      Object.keys(a).some(function(m) {
        return c !== null && m in c;
      })
    )
      throw Error(
        'Parameter specified at least twice: once in config, and once in config format options.'
      );
    a = to[b];
    for (var d = so[b], e = {}, f = l(Object.entries(c)), g = f.next(); !g.done; g = f.next()) {
      let h = l(g.value);
      g = h.next().value;
      h = h.next().value;
      if (!db(d, g))
        throw Error(
          `"${g}" is not a valid option, the image format "${b}""may have the following options: ${d.join(
            ', '
          )}".`
        );
      g = a + g[0].toUpperCase() + g.substring(1);
      u(h) ? (e[g] = h.join()) : (e[g] = h);
    }
    return e;
  };
  var oo = ['image', 'collection'];
  var uo = function(a) {
    if (!(this instanceof uo)) return tm(uo, arguments);
    if (a instanceof uo) return a;
    vo();
    if (typeof a === 'number') N.call(this, null, null), (this.Ic = a);
    else if (a instanceof N) N.call(this, a.A, a.args, a.R), (this.Ic = null);
    else throw Error(`Invalid argument specified for ee.Number(): ${a}`);
  };
  A(uo, N);
  y('ee.Number', uo);
  let wo = !1;
  var vo = function() {
    wo || (Om(uo, 'Number', 'Number'), (wo = !0));
  };
  uo.prototype.encode = function(a) {
    return typeof this.Ic === 'number' ? this.Ic : uo.F.encode.call(this, a);
  };
  uo.prototype.qa = function(a) {
    return typeof this.Ic === 'number' ? Nj(a(this.Ic)) : uo.F.qa.call(this, a);
  };
  uo.prototype.name = function() {
    return 'Number';
  };
  var xo = function(a) {
    if (!(this instanceof xo)) return tm(xo, arguments);
    if (a instanceof xo) return a;
    yo();
    if (typeof a === 'string') N.call(this, null, null), (this.Pc = a);
    else if (a instanceof N)
      (this.Pc = null),
        a.A && a.A.$().returns == 'String'
          ? N.call(this, a.A, a.args, a.R)
          : N.call(this, new O('String'), {input: a}, null);
    else throw Error(`Invalid argument specified for ee.String(): ${a}`);
  };
  A(xo, N);
  y('ee.String', xo);
  let zo = !1;
  var yo = function() {
    zo || (Om(xo, 'String', 'String'), (zo = !0));
  };
  xo.prototype.encode = function(a) {
    return typeof this.Pc === 'string' ? this.Pc : xo.F.encode.call(this, a);
  };
  xo.prototype.qa = function(a) {
    return typeof this.Pc === 'string' ? Nj(a(this.Pc)) : xo.F.qa.call(this, a);
  };
  xo.prototype.name = function() {
    return 'String';
  };
  var Ao = function(a, b) {
    if (!(this instanceof Ao)) return tm(Ao, arguments);
    for (var c = [], d = a.args, e = 0; e < d.length; e++) {
      const f = d[e];
      const g = f.type;
      c.push(Bo(g in vm ? vm[g] : null, f.name));
    }
    if (void 0 === b.apply(null, c)) throw Error('User-defined methods must return a value.');
    this.Qa = Co(a, c, b);
    this.Wf = b.apply(null, c);
  };
  A(Ao, Bm);
  y('ee.CustomFunction', Ao);
  Ao.prototype.encode = function(a) {
    return {
      type: 'Function',
      argumentNames: Ya(this.Qa.args, function(b) {
        return b.name;
      }),
      body: a(this.Wf)
    };
  };
  Ao.prototype.qa = function(a) {
    return Sj(
      this.Qa.args.map(function(b) {
        return b.name;
      }),
      a(this.Wf)
    );
  };
  Ao.prototype.we = function(a, b) {
    return Rj(a(this), b);
  };
  Ao.prototype.$ = function() {
    return this.Qa;
  };
  var Bo = function(a, b) {
    a = a || Object;
    if (!(a.prototype instanceof N))
      if (a && a != Object)
        if (a == String) a = xo;
        else if (a == Number) a = uo;
        else if (a == Array) a = t.ee.List;
        else throw Error('Variables must be of an EE type, e.g. ee.Image or ee.Number.');
      else a = N;
    const c = function(d) {
      this.args = this.A = null;
      this.R = d;
    };
    c.prototype = a.prototype;
    return new c(b);
  };
  const Do = function(a, b) {
    b = {
      name: '',
      returns: 'Object',
      args: Ya(b, function(c) {
        return {
          name: null,
          type:
            typeof c === 'string'
              ? c
              : c.prototype instanceof N
                ? c.prototype.name.call(null)
                : c == Number
                  ? 'Number'
                  : c == String
                    ? 'String'
                    : c == Array
                      ? 'Array'
                      : c == Date
                        ? 'Date'
                        : 'Object'
        };
      })
    };
    return new Ao(b, a);
  };
  var Co = function(a, b, c) {
    for (var d = [], e = 0; e < b.length; e++) b[e].R === null && d.push(e);
    if (d.length == 0) return a;
    var f = function(m) {
      let n = 0;
      v(m) &&
        !Ba(m) &&
        (m.type == 'Function' && n++,
        Bb(m, function(q) {
          n += f(q);
        }));
      return n;
    };
    e = Hk(c.apply(null, b));
    c = `_MAPPING_VAR_${f(e)}_`;
    for (e = 0; e < d.length; e++) {
      const g = d[e];
      const h = c + e;
      b[g].R = h;
      a.args[g].name = h;
    }
    return a;
  };
  var Eo = function(a, b) {
    if (!(this instanceof Eo)) return tm(Eo, arguments);
    if (a instanceof Eo) return a;
    Fo();
    let c = Q(Eo, arguments);
    a = c.date;
    c = c.tz;
    let d = new O('Date');
    let e = {};
    let f = null;
    if (ym(a)) {
      if (((e.value = a), c))
        if (ym(c)) e.timeZone = c;
        else throw Error(`Invalid argument specified for ee.Date(..., opt_tz): ${c}`);
    } else if (xm(a)) e.value = a;
    else if (Aa(a)) e.value = Math.floor(a.getTime());
    else if (a instanceof N)
      a.A && a.A.$().returns == 'Date' ? ((d = a.A), (e = a.args), (f = a.R)) : (e.value = a);
    else throw Error(`Invalid argument specified for ee.Date(): ${a}`);
    N.call(this, d, e, f);
  };
  A(Eo, N);
  y('ee.Date', Eo);
  let Go = !1;
  var Fo = function() {
    Go || (Om(Eo, 'Date', 'Date'), (Go = !0));
  };
  Eo.prototype.name = function() {
    return 'Date';
  };
  y('ee.Deserializer', function() {});
  const Io = function(a) {
    return Ho(JSON.parse(a));
  };
  y('ee.Deserializer.fromJSON', Io);
  var Ho = function(a) {
    const b = {};
    if (v(a) && a.type == 'CompoundValue') {
      for (let c = a.scope, d = 0; d < c.length; d++) {
        const e = c[d][0];
        const f = c[d][1];
        if (e in b) throw Error(`Duplicate scope key "${e}" in scope #${d}.`);
        b[e] = Jo(f, b);
      }
      a = a.value;
    }
    return Jo(a, b);
  };
  y('ee.Deserializer.decode', Ho);
  var Jo = function(a, b) {
    if (a === null || typeof a === 'number' || typeof a === 'boolean' || typeof a === 'string')
      return a;
    if (u(a))
      return Ya(a, function(f) {
        return Jo(f, b);
      });
    if (!v(a) || Ba(a)) throw Error(`Cannot decode object: ${a}`);
    let c = a.type;
    switch (c) {
      case 'ValueRef':
        if (a.value in b) return b[a.value];
        throw Error(`Unknown ValueRef: ${a}`);
      case 'ArgumentRef':
        c = a.value;
        if (typeof c !== 'string') throw Error(`Invalid variable name: ${c}`);
        return Bo(Object, c);
      case 'Date':
        c = a.value;
        if (typeof c !== 'number') throw Error(`Invalid date value: ${c}`);
        return new Eo(c / 1e3);
      case 'Bytes':
        return (
          (c = new Lj()),
          (c.encode = function() {
            return a;
          }),
          c
        );
      case 'Invocation':
        c = 'functionName' in a ? Gm(a.functionName) : Jo(a.function, b);
        var d = Db(a.arguments, function(f) {
          return Jo(f, b);
        });
        if (c instanceof Bm) return c.apply(d);
        if (c instanceof N) return new N(c, d);
        throw Error(`Invalid function value: ${a.function}`);
      case 'Dictionary':
        return Db(a.value, function(f) {
          return Jo(f, b);
        });
      case 'Function':
        var e = Jo(a.body, b);
        c = {
          name: '',
          args: Ya(a.argumentNames, function(f) {
            return {
              name: f,
              type: 'Object',
              optional: !1
            };
          }),
          returns: 'Object'
        };
        return new Ao(c, function() {
          return e;
        });
      case 'Point':
      case 'MultiPoint':
      case 'LineString':
      case 'MultiLineString':
      case 'Polygon':
      case 'MultiPolygon':
      case 'LinearRing':
      case 'GeometryCollection':
        return new S(a);
      case 'CompoundValue':
        throw Error('Nested CompoundValues are disallowed.');
      default:
        throw Error(`Unknown encoded object type: ${c}`);
    }
  };
  var Ko = function(a) {
    if (!(this instanceof Ko)) return tm(Ko, arguments);
    if (a instanceof Ko) return a;
    Lo();
    zm(a)
      ? (N.call(this, null, null), (this.vc = a))
      : (a instanceof N && a.A && a.A.$().returns == 'Dictionary'
          ? N.call(this, a.A, a.args, a.R)
          : N.call(this, new O('Dictionary'), {input: a}, null),
        (this.vc = null));
  };
  A(Ko, N);
  y('ee.Dictionary', Ko);
  let Mo = !1;
  var Lo = function() {
    Mo || (Om(Ko, 'Dictionary', 'Dictionary'), (Mo = !0));
  };
  Ko.prototype.encode = function(a) {
    return this.vc !== null ? a(this.vc) : Ko.F.encode.call(this, a);
  };
  Ko.prototype.qa = function(a) {
    return this.vc !== null ? Nj(a(this.vc)) : Ko.F.qa.call(this, a);
  };
  Ko.prototype.name = function() {
    return 'Dictionary';
  };
  const No = {};
  y('ee.Terrain', No);
  No.Ne = !1;
  No.ui = function() {
    No.Ne || (Om(No, 'Terrain', 'Terrain'), (No.Ne = !0));
  };
  No.reset = function() {
    Pm(No);
    No.Ne = !1;
  };
  const To = function(a, b, c, d, e) {
    if (Oo != 'ready' || a || b) {
      const f = c != null;
      if (d)
        if (f) Po.push(d);
        else throw Error("Can't pass an error callback without a success callback.");
      if (Oo == 'loading' && f) Qo.push(c);
      else if (((Oo = 'loading'), cj(a, b, e), f)) Qo.push(c), Km(Ro, So);
      else
        try {
          Km(), Ro();
        } catch (g) {
          throw (So(g), g);
        }
    } else c && c();
  };
  y('ee.initialize', To);
  const Wo = function() {
    Oo = 'not_ready';
    wj = vj = kj = null;
    uj = !1;
    Im = null;
    Jm = {};
    Pm(Eo);
    Go = !1;
    Pm(Ko);
    Mo = !1;
    Pm(R);
    Wm = !1;
    Pm(W);
    Pn = !1;
    Pm(V);
    Hn = !1;
    Pm(U);
    Fn = !1;
    Pm(Y);
    Yn = !1;
    Pm(X);
    Wn = !1;
    Pm(T);
    qn = !1;
    Pm(S);
    Zm = !1;
    Pm(Sn);
    Un = !1;
    Pm(uo);
    wo = !1;
    Pm(xo);
    zo = !1;
    No.reset();
    for (var a = t.ee, b = 0; b < Uo.length; b++) {
      const c = Uo[b];
      Pm(a[c]);
      delete a[c];
    }
    Uo = [];
    vm = a;
    a = Vo;
    for (const d in a) delete a[d];
  };
  y('ee.reset', Wo);
  const Xo = {Mj: 'not_ready', LOADING: 'loading', Vj: 'ready'};
  y('ee.InitState', Xo);
  y('ee.InitState.NOT_READY', 'not_ready');
  y('ee.InitState.LOADING', 'loading');
  y('ee.InitState.READY', 'ready');
  var Oo = 'not_ready';
  var Qo = [];
  var Po = [];
  y('ee.TILE_SIZE', 256);
  var Uo = [];
  var Vo = {};
  y('ee.Algorithms', Vo);
  const Yo = function(a, b) {
    typeof a === 'string' && (a = new O(a));
    return Bm.prototype.call.apply(a, Array.prototype.slice.call(arguments, 1));
  };
  y('ee.call', Yo);
  const Zo = function(a, b) {
    typeof a === 'string' && (a = new O(a));
    return a.apply(b);
  };
  y('ee.apply', Zo);
  var Ro = function() {
    if (Oo == 'loading') {
      try {
        Fo();
        Lo();
        Vm();
        Nn();
        Gn();
        En();
        Xn();
        Vn();
        pn();
        Xm();
        Tn();
        vo();
        yo();
        No.ui();
        const a = Lm();
        const b = {};
        const c = {};
        let d;
        for (d in a) {
          b[d.indexOf('.') != -1 ? d.slice(0, d.indexOf('.')) : d] = !0;
          const e = a[d].returns.replace(/<.*>/, '');
          c[e] = !0;
        }
        const f = t.ee;
        let g;
        for (g in b)
          g in c &&
            !(g in f) &&
            ((f[g] = $o(g)),
            Uo.push(g),
            a[g]
              ? ((f[g].signature = a[g]), (f[g].signature.isConstructor = !0), (Jm[g] = !0))
              : (f[g].signature = {}));
        vm = f;
        ap();
      } catch (h) {
        So(h);
        return;
      }
      Oo = 'ready';
      for (Po = []; Qo.length > 0; ) Qo.shift()();
    }
  };
  var So = function(a) {
    if (Oo == 'loading') for (Oo = 'not_ready', Qo = []; Po.length > 0; ) Po.shift()(a);
  };
  var ap = function() {
    const a = Mm();
    Gb(a)
      .sort()
      .forEach(function(b) {
        const c = a[b];
        const d = c.$();
        if (!d.hidden) {
          b = b.split('.');
          let e = Vo;
          for (e.signature = {}; b.length > 1; ) {
            var f = b[0];
            f in e || (e[f] = {signature: {}});
            e = e[f];
            b = kb(b, 1);
          }
          f = function(g) {
            return Fm(c, void 0, Array.prototype.slice.call(arguments, 0));
          };
          f.signature = d;
          f.toString = x(c.toString, c);
          e[b[0]] = f;
        }
      });
  };
  var $o = function(a) {
    const b = function(c) {
      let d = t.ee[a];
      let e = Array.prototype.slice.call(arguments);
      const f = e.length == 1;
      if (f && e[0] instanceof d) return e[0];
      if (!(this instanceof d)) return tm(d, e);
      d = Nm(a);
      const g = !(e[0] instanceof N);
      let h = !1;
      d &&
        (f
          ? g
            ? (h = !0)
            : (e[0].A && e[0].A.$().returns == d.$().returns) || (h = !0)
          : (h = !0));
      if (h) (e = Am(e, d.$()) ? e[0] : Dm(d, e)), N.call(this, d, Em(d, e));
      else {
        if (!f) throw Error(`Too many arguments for ee.${a}(): ${e}`);
        if (g) throw Error(`Invalid argument for ee.${a}(): ${e}. Must be a ComputedObject.`);
        e = e[0];
        N.call(this, e.A, e.args, e.R);
      }
    };
    A(b, N);
    b.prototype.name = function() {
      return a;
    };
    Om(b, a, a);
    return b;
  };
  Cm = function(a, b) {
    if (a === null) return null;
    if (void 0 !== a) {
      let c = t.ee;
      switch (b) {
        case 'Image':
          return new W(a);
        case 'Feature':
          return a instanceof U ? P('Feature', P('Collection.geometry', a)) : new V(a);
        case 'Element':
          if (a instanceof R) return a;
          if (a instanceof S) return new V(a);
          if (a instanceof N) return new R(a.A, a.args, a.R);
          throw Error(`Cannot convert ${a} to Element.`);
        case 'Geometry':
          return a instanceof X ? P('Collection.geometry', a) : new S(a);
        case 'FeatureCollection':
        case 'Collection':
          return a instanceof U ? a : new X(a);
        case 'ImageCollection':
          return new Y(a);
        case 'Filter':
          return new T(a);
        case 'Algorithm':
          if (typeof a === 'string') return new O(a);
          if (Ba(a)) {
            b = a.length;
            c = [];
            for (var d = 0; d < b; d++) c[d] = 'Object';
            return Do(a, c);
          }
          if (a instanceof Lj) return a;
          throw Error(`Argument is not a function: ${a}`);
        case 'String':
          return ym(a) || a instanceof xo || a instanceof N ? new xo(a) : a;
        case 'Dictionary':
          return zm(a) ? a : new Ko(a);
        case 'List':
          return new Sn(a);
        case 'Number':
        case 'Float':
        case 'Long':
        case 'Integer':
        case 'Short':
        case 'Byte':
          return new uo(a);
        default:
          if (b in c) {
            d = Nm(b);
            if (a instanceof c[b]) return a;
            if (d) return new c[b](a);
            if (typeof a === 'string') {
              if (a in c[b]) return c[b][a].call();
              throw Error(`Unknown algorithm: ${b}.${a}`);
            }
            return new c[b](a);
          }
          return a;
      }
    }
  };
  const bp = function(a, b, c) {
    Id.call(this, a, b, c);
    this.tileSize = new google.maps.Size(256, 256);
    this.Ag = new wd();
    this.zg = new wd();
  };
  p(bp, Id);
  bp.prototype.getTile = function(a, b) {
    let c = Jd(this, a, b);
    b = `${[this.url, c].join('/')}?token=${this.token}`;
    c = [c, this.lb, this.token].join('/');
    this.nb.push(c);
    this.lb += 1;
    const d = Pg('DIV');
    cp(this, b, a, c, d);
    dp(this);
    return d;
  };
  var cp = function(a, b, c, d, e) {
    const f = si(qi);
    f.open('GET', b, !0);
    f.responseType = 'arraybuffer';
    f.onreadystatechange = x(function() {
      if (f.readyState === XMLHttpRequest.DONE && f.status === 200) {
        let g = f.response;
        if (g)
          (g = new Float32Array(g)), this.Ag.set(c, g), this.zg.set(c, e), gb(this.nb, d), dp(this);
        else throw (this.Gf.add(d), Error('Unable to request floating point array buffers.'));
      }
    }, a);
    f.send();
  };
  var dp = function(a) {
    a.dispatchEvent(new Kd(a.nb.length));
  };
  bp.prototype.C = function() {
    this.zg = this.Ag = null;
    Id.prototype.C.call(this);
  };
  y('ee.FloatTileOverlay', bp);
  const ep = function() {
    this.Ed = new Map();
  };
  ep.prototype.clear = function() {
    this.Ed.clear();
  };
  const fp = function(a, b) {
    a.Ed.has(b) || a.Ed.set(b, {throttleCount: 0, errorCount: 0, tileLatencies: []});
    return a.Ed.get(b);
  };
  const gp = function(a) {
    Ia.call(this);
    this.Ab = a;
    this.H = {};
  };
  A(gp, Ia);
  const hp = [];
  gp.prototype.Oa = function(a, b, c, d) {
    u(b) || (b && (hp[0] = b.toString()), (b = hp));
    for (let e = 0; e < b.length; e++) {
      const f = dd(a, b[e], c || this.handleEvent, d || !1, this.Ab || this);
      if (!f) break;
      this.H[f.key] = f;
    }
    return this;
  };
  gp.prototype.Hc = function(a, b, c, d) {
    return ip(this, a, b, c, d);
  };
  var ip = function(a, b, c, d, e, f) {
    if (u(c)) for (let g = 0; g < c.length; g++) ip(a, b, c[g], d, e, f);
    else {
      b = cd(b, c, d || a.handleEvent, e, f || a.Ab || a);
      if (!b) return a;
      a.H[b.key] = b;
    }
    return a;
  };
  gp.prototype.Ld = function(a, b, c, d, e) {
    if (u(b)) for (let f = 0; f < b.length; f++) this.Ld(a, b[f], c, d, e);
    else
      (c = c || this.handleEvent),
        (d = v(d) ? Boolean(d.capture) : Boolean(d)),
        (e = e || this.Ab || this),
        (c = ed(c)),
        (d = Boolean(d)),
        (b = Tc(a) ? a.yc(b, c, d, e) : a ? ((a = gd(a)) ? a.yc(b, c, d, e) : null) : null),
        b && (ld(b), delete this.H[b.key]);
  };
  gp.prototype.Nc = function() {
    Bb(
      this.H,
      function(a, b) {
        this.H.hasOwnProperty(b) && ld(a);
      },
      this
    );
    this.H = {};
  };
  gp.prototype.C = function() {
    gp.F.C.call(this);
    this.Nc();
  };
  gp.prototype.handleEvent = function() {
    throw Error('EventHandler.handleEvent not implemented');
  };
  const jp = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  k = jp.prototype;
  k.clone = function() {
    return new jp(this.top, this.right, this.bottom, this.left);
  };
  k.toString = function() {
    return `(${this.top}t, ${this.right}r, ${this.bottom}b, ${this.left}l)`;
  };
  k.contains = function(a) {
    return this && a
      ? a instanceof jp
        ? a.left >= this.left &&
          a.right <= this.right &&
          a.top >= this.top &&
          a.bottom <= this.bottom
        : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
      : !1;
  };
  k.expand = function(a, b, c, d) {
    v(a)
      ? ((this.top -= a.top),
        (this.right += a.right),
        (this.bottom += a.bottom),
        (this.left -= a.left))
      : ((this.top -= a),
        (this.right += Number(b)),
        (this.bottom += Number(c)),
        (this.left -= Number(d)));
    return this;
  };
  k.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  k.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  k.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  k.translate = function(a, b) {
    a instanceof Kg
      ? ((this.left += a.x), (this.right += a.x), (this.top += a.y), (this.bottom += a.y))
      : (Qa(a),
        (this.left += a),
        (this.right += a),
        typeof b === 'number' && ((this.top += b), (this.bottom += b)));
    return this;
  };
  k.scale = function(a, b) {
    b = typeof b === 'number' ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b;
    return this;
  };
  const kp = function(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d;
  };
  k = kp.prototype;
  k.clone = function() {
    return new kp(this.left, this.top, this.width, this.height);
  };
  k.toString = function() {
    return `(${this.left}, ${this.top} - ${this.width}w x ${this.height}h)`;
  };
  k.Qg = function(a) {
    const b = Math.max(this.left, a.left);
    const c = Math.min(this.left + this.width, a.left + a.width);
    if (b <= c) {
      const d = Math.max(this.top, a.top);
      a = Math.min(this.top + this.height, a.top + a.height);
      if (d <= a)
        return (this.left = b), (this.top = d), (this.width = c - b), (this.height = a - d), !0;
    }
    return !1;
  };
  k.intersects = function(a) {
    return (
      this.left <= a.left + a.width &&
      a.left <= this.left + this.width &&
      this.top <= a.top + a.height &&
      a.top <= this.top + this.height
    );
  };
  k.ve = function(a) {
    b: {
      var b = Math.max(this.left, a.left);
      var c = Math.min(this.left + this.width, a.left + a.width);
      if (b <= c) {
        var d = Math.max(this.top, a.top);
        var e = Math.min(this.top + this.height, a.top + a.height);
        if (d <= e) {
          b = new kp(b, d, c - b, e - d);
          break b;
        }
      }
      b = null;
    }
    if (b && b.height && b.width) {
      b = [];
      c = this.top;
      d = this.height;
      e = this.left + this.width;
      const f = this.top + this.height;
      const g = a.left + a.width;
      const h = a.top + a.height;
      a.top > this.top &&
        (b.push(new kp(this.left, this.top, this.width, a.top - this.top)),
        (c = a.top),
        (d -= a.top - this.top));
      h < f && (b.push(new kp(this.left, h, this.width, f - h)), (d = h - c));
      a.left > this.left && b.push(new kp(this.left, c, a.left - this.left, d));
      g < e && b.push(new kp(g, c, e - g, d));
      a = b;
    } else a = [this.clone()];
    return a;
  };
  k.contains = function(a) {
    return a instanceof Kg
      ? a.x >= this.left &&
          a.x <= this.left + this.width &&
          a.y >= this.top &&
          a.y <= this.top + this.height
      : this.left <= a.left &&
          this.left + this.width >= a.left + a.width &&
          this.top <= a.top &&
          this.top + this.height >= a.top + a.height;
  };
  k.distance = function(a) {
    const b = a.x < this.left ? this.left - a.x : Math.max(a.x - (this.left + this.width), 0);
    a = a.y < this.top ? this.top - a.y : Math.max(a.y - (this.top + this.height), 0);
    return Math.sqrt(b * b + a * a);
  };
  k.getCenter = function() {
    return new Kg(this.left + this.width / 2, this.top + this.height / 2);
  };
  k.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  k.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  k.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  k.translate = function(a, b) {
    a instanceof Kg
      ? ((this.left += a.x), (this.top += a.y))
      : ((this.left += Qa(a)), typeof b === 'number' && (this.top += b));
    return this;
  };
  k.scale = function(a, b) {
    b = typeof b === 'number' ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= b;
    this.height *= b;
    return this;
  };
  const lp = function(a, b) {
    B(a);
    a = a.style;
    'opacity' in a
      ? (a.opacity = b)
      : 'MozOpacity' in a
        ? (a.MozOpacity = b)
        : 'filter' in a && (a.filter = b === '' ? '' : `alpha(opacity=${100 * Number(b)})`);
  };
  const np = function(a, b) {
    void 0 !== a.name
      ? ((this.name = a.name), (this.code = Ib[a.name]))
      : ((this.code = a = Qa(a.code)), (this.name = mp(a)));
    La.call(this, tc('%s %s', this.name, b));
  };
  A(np, La);
  var mp = function(a) {
    const b = Jb(function(c) {
      return a == c;
    });
    if (void 0 === b) throw Error(`Invalid code: ${a}`);
    return b;
  };
  var Ib = {
    AbortError: 3,
    EncodingError: 5,
    InvalidModificationError: 9,
    InvalidStateError: 7,
    NotFoundError: 1,
    NotReadableError: 4,
    NoModificationAllowedError: 6,
    PathExistsError: 12,
    QuotaExceededError: 10,
    SecurityError: 2,
    SyntaxError: 8,
    TypeMismatchError: 11
  };
  const op = function(a, b) {
    Ka.call(this, a.type, b);
    this.Ca = a;
  };
  A(op, Ka);
  const pp = function() {
    pd.call(this);
    this.ba = new FileReader();
    this.ba.onloadstart = x(this.Vb, this);
    this.ba.onprogress = x(this.Vb, this);
    this.ba.onload = x(this.Vb, this);
    this.ba.onabort = x(this.Vb, this);
    this.ba.onerror = x(this.Vb, this);
    this.ba.onloadend = x(this.Vb, this);
  };
  A(pp, pd);
  k = pp.prototype;
  k.abort = function() {
    try {
      this.ba.abort();
    } catch (a) {
      throw new np(a, 'aborting read');
    }
  };
  k.ib = function() {
    return this.ba.readyState;
  };
  k.getError = function() {
    return this.ba.error && new np(this.ba.error, 'reading file');
  };
  k.Vb = function(a) {
    this.dispatchEvent(new op(a, this));
  };
  k.C = function() {
    pp.F.C.call(this);
    delete this.ba;
  };
  k.readAsBinaryString = function(a) {
    this.ba.readAsBinaryString(a);
  };
  k.readAsArrayBuffer = function(a) {
    this.ba.readAsArrayBuffer(a);
  };
  k.readAsText = function(a, b) {
    this.ba.readAsText(a, b);
  };
  const qp = function(a, b) {
    pd.call(this);
    b = b || {};
    this.minZoom = b.minZoom || 0;
    this.maxZoom = b.maxZoom || 20;
    if (!window.google || !window.google.maps)
      throw Error("Google Maps API hasn't been initialized.");
    this.tileSize = b.tileSize || new google.maps.Size(256, 256);
    this.name = b.name;
    this.opacity = 'opacity' in b ? b.opacity : 1;
    this.Dd = new ep();
    this.mb = new wd();
    this.lb = 0;
    this.Ff = a;
    this.Xa = new gp(this);
    this.projection = null;
    this.radius = 0;
    this.alt = null;
  };
  A(qp, pd);
  y('ee.layers.AbstractOverlay', qp);
  qp.prototype.ae = function(a) {
    return dd(this, 'tile-load', a);
  };
  qp.prototype.addTileCallback = qp.prototype.ae;
  qp.prototype.nf = function(a) {
    ld(a);
  };
  qp.prototype.removeTileCallback = qp.prototype.nf;
  k = qp.prototype;
  k.Ge = function() {
    return rp(this, 'throttled') + rp(this, 'loading') + rp(this, 'new');
  };
  k.setOpacity = function(a) {
    this.opacity = a;
    this.mb.forEach(function(b) {
      lp(b.pa, this.opacity);
    }, this);
  };
  k.getStats = function() {
    return this.Dd;
  };
  k.getTile = function(a, b, c) {
    let d = 1 << b;
    if (b < this.minZoom || a.y < 0 || a.y >= d) return c.createElement('div');
    let e = a.x % d;
    e < 0 && (e += d);
    d = new google.maps.Point(e, a.y);
    a = [[a.x, a.y, b, this.lb++].join('-'), this.Ff.Gg()].join('-');
    b = this.hg(d, b, c, a);
    b.tileSize = this.tileSize;
    lp(b.pa, this.opacity);
    this.mb.set(a, b);
    sp(this, b);
    this.Ff.Vg(b, new Date().getTime() / 1e3);
    return b.pa;
  };
  k.releaseTile = function(a) {
    const b = this.mb.get(a.id);
    this.mb.remove(a.id);
    b && (b.abort(), Ja(b));
  };
  var sp = function(a, b) {
    a.Xa.Oa(b, 'status-changed', function() {
      switch (b.getStatus()) {
        case 'loaded':
          var c = b.zi;
          var d = new Date().getTime();
          fp(this.Dd, b.zoom).tileLatencies.push(d - c);
          this.dispatchEvent(new tp(this.Ge()));
          break;
        case 'throttled':
          fp(this.Dd, b.zoom).throttleCount++;
          this.dispatchEvent(new up(b.Ga));
          break;
        case 'failed':
          fp(this.Dd, b.zoom).errorCount++, this.dispatchEvent(new vp(b.Ga, b.mi));
      }
    });
  };
  qp.prototype.C = function() {
    qp.F.C.call(this);
    this.mb.forEach(Ja);
    this.mb.clear();
    this.mb = null;
    Ja(this.Xa);
    this.Ff = this.Xa = null;
  };
  var rp = function(a, b) {
    return ab(a.mb.T(), function(c) {
      return c.getStatus() == b;
    });
  };
  var tp = function() {
    Ka.call(this, 'tile-load');
  };
  A(tp, Ka);
  var up = function() {
    Ka.call(this, 'tile-throttle');
  };
  A(up, Ka);
  var vp = function(a, b) {
    Ka.call(this, 'tile-fail');
    this.errorMessage = b;
  };
  A(vp, Ka);
  const wp = function(a, b, c, d) {
    pd.call(this);
    this.Ub = a;
    this.zoom = b;
    this.pa = c.createElement('div');
    this.pa.id = d;
    this.Bi = 5;
    this.zd = function() {};
    this.Af = 'new';
    this.sh = 0;
    this.Qe = !1;
  };
  A(wp, pd);
  const yp = function(a) {
    if (!a.Qe && a.getStatus() == 'loading')
      throw Error('startLoad() can only be invoked once. Use retryLoad() after the first attempt.');
    xp(a, 'loading');
    a.zi = new Date().getTime();
    a.Ra = new vi();
    a.Ra.ec = 'blob';
    a.Ra.Oa(
      'complete',
      function() {
        const b = Ii(this.Ra);
        const c = this.Ra.getStatus();
        c == 429 && xp(this, 'throttled');
        if (mi(c)) {
          const d = {};
          Bb(Ji(this.Ra), function(f, g) {
            d[g.toLowerCase()] = f;
          });
          this.Oi = d;
          this.Ah = b;
          this.xc();
        } else if (b) {
          const e = new pp();
          e.Oa(
            'loadend',
            function() {
              this.Oc(e.ba.result);
            },
            void 0,
            this
          );
          e.readAsText(b);
        } else this.Oc('Failed to load tile.');
      },
      !1,
      a
    );
    a.Ra.Hc('ready', Ga(Ja, a.Ra));
    a.Ga &&
      a.Ga.endsWith('&profiling=1') &&
      L &&
      ((a.Ga = a.Ga.replace('&profiling=1', '')),
      a.Ra.headers.set('X-Earth-Engine-Computation-Profile', '1'));
    a.Ra.send(a.Ga, 'GET');
  };
  k = wp.prototype;
  k.xc = function() {
    this.zd(this);
    xp(this, 'loaded');
  };
  k.rc = function() {
    Ja(this.Ra);
  };
  k.Oc = function(a) {
    const b = function(c) {
      try {
        if (((c = JSON.parse(c)), c.error && c.error.message)) return c.error.message;
      } catch (d) {}
      return c;
    };
    this.sh >= this.Bi
      ? ((this.mi = b(a)), xp(this, 'failed'))
      : (this.rc(),
        setTimeout(
          x(function() {
            this.Ma || ((this.Qe = !0), yp(this), (this.Qe = !1));
          }, this),
          1e3 * Math.pow(2, this.sh++)
        ));
  };
  k.abort = function() {
    this.rc();
    xp(this, 'aborted');
  };
  k.getStatus = function() {
    return this.Af;
  };
  var xp = function(a, b) {
    a.Af = b;
    a.dispatchEvent('status-changed');
  };
  const zp = {aborted: !0, failed: !0, loaded: !0};
  wp.prototype.C = function() {
    wp.F.C.call(this);
    this.rc();
    this.pa.remove();
    this.zd = null;
  };
  const Ap = function() {
    Ia.call(this);
  };
  A(Ap, Ia);
  const Bp = function(a, b) {
    qp.call(this, a, b);
    this.Yf = new wd();
    this.sg = new wd();
  };
  p(Bp, qp);
  Bp.prototype.hg = function(a, b, c, d) {
    const e = new Cp(a, b, c, d);
    this.Xa.Oa(e, 'status-changed', function() {
      e.getStatus() == 'loaded' && (this.Yf.set(a, new Float32Array(e.gi)), this.sg.set(a, e.pa));
    });
    return e;
  };
  Bp.prototype.C = function() {
    qp.prototype.C.call(this);
    this.sg = this.Yf = null;
  };
  y('ee.layers.BinaryOverlay', Bp);
  var Cp = function(a, b, c, d) {
    wp.call(this, a, b, c, d);
  };
  p(Cp, wp);
  Cp.prototype.xc = function() {
    const a = new pp();
    a.Oa(
      'loadend',
      function() {
        this.gi = a.ba.result;
        wp.prototype.xc.call(this);
      },
      void 0,
      this
    );
    a.readAsArrayBuffer(this.Ah);
  };
  const Dp = function(a) {
    pd.call(this);
    this.Cc = {};
    this.Bc = {};
    this.Ab = new gp(this);
    this.O = a;
  };
  A(Dp, pd);
  const Ep = [Ac && !Kc('11') ? 'readystatechange' : 'load', 'abort', 'error'];
  const Fp = function(a, b, c) {
    (c = typeof c === 'string' ? c : c.src) && (a.Cc[b] = {src: c, fg: null});
  };
  const Gp = function(a, b) {
    delete a.Cc[b];
    const c = a.Bc[b];
    c &&
      (delete a.Bc[b], a.Ab.Ld(c, Ep, a.eh), Kb(a.Bc) && Kb(a.Cc) && a.dispatchEvent('complete'));
  };
  Dp.prototype.start = function() {
    const a = this.Cc;
    Wa(
      Gb(a),
      function(b) {
        const c = a[b];
        if (c && (delete a[b], !this.Ma)) {
          if (this.O) {
            var d = this.O;
            d = (d ? new Wg(Vg(d)) : Ma || (Ma = new Wg())).ki('IMG');
          } else d = new Image();
          c.fg && (d.crossOrigin = c.fg);
          this.Ab.Oa(d, Ep, this.eh);
          this.Bc[b] = d;
          d.id = b;
          d.src = c.src;
        }
      },
      this
    );
  };
  Dp.prototype.eh = function(a) {
    const b = a.currentTarget;
    if (b) {
      if (a.type == 'readystatechange')
        if (b.readyState == 'complete') a.type = 'load';
        else return;
      typeof b.naturalWidth === 'undefined' &&
        (a.type == 'load'
          ? ((b.naturalWidth = b.width), (b.naturalHeight = b.height))
          : ((b.naturalWidth = 0), (b.naturalHeight = 0)));
      this.dispatchEvent({type: a.type, target: b});
      this.Ma || Gp(this, b.id);
    }
  };
  Dp.prototype.C = function() {
    delete this.Cc;
    delete this.Bc;
    Ja(this.Ab);
    Dp.F.C.call(this);
  };
  const Hp = function(a, b) {
    qp.call(this, a, b);
  };
  p(Hp, qp);
  Hp.prototype.hg = function(a, b, c, d) {
    return new Ip(a, b, c, d);
  };
  y('ee.layers.ImageOverlay', Hp);
  var Ip = function(a, b, c, d) {
    wp.call(this, a, b, c, d);
    this.zd = Jp;
    this.Og = this.ea = this.pd = null;
    this.Jc = '';
  };
  p(Ip, wp);
  Ip.prototype.xc = function() {
    try {
      const a = kc(this.Ah);
      this.Jc = ic(a);
      var b = this.Jc !== 'about:invalid#zClosurez' ? this.Jc : this.Ga;
    } catch (c) {
      b = this.Ga;
    }
    this.ea = new Dp();
    Fp(this.ea, `${this.pa.id}-image`, b);
    this.Og = cd(
      this.ea,
      Kp,
      function(c) {
        c.type == 'load' ? ((this.pd = c.target), wp.prototype.xc.call(this)) : this.Oc();
      },
      void 0,
      this
    );
    this.ea.start();
  };
  Ip.prototype.rc = function() {
    wp.prototype.rc.call(this);
    this.ea && (ld(this.Og), Ja(this.ea));
  };
  Ip.prototype.C = function() {
    wp.prototype.C.call(this);
    this.Jc && URL.revokeObjectURL(this.Jc);
  };
  var Jp = function(a) {
    a.pa.appendChild(a.pd);
  };
  var Kp = ['load', 'abort', 'error'];
  const Lp = function(a) {
    for (var b = arguments[0], c = 1; c < arguments.length; c++) {
      const d = arguments[c];
      if (d.lastIndexOf('/', 0) == 0) b = d;
      else {
        var e;
        (e = b == '') || ((e = b.length - 1), (e = e >= 0 && b.indexOf('/', e) == e));
        b = e ? b + d : `${b}/${d}`;
      }
    }
    return b;
  };
  const Mp = function(a, b, c, d) {
    Ia.call(this);
    this.Xf = a;
    this.Za = b;
    this.Df = d || '';
    this.ud = c;
  };
  A(Mp, Ap);
  y('ee.layers.CloudStorageTileSource', Mp);
  Mp.prototype.Vg = function(a) {
    if (a.zoom <= this.ud) a.Ga = this.ld(a.Ub, a.zoom);
    else {
      const b = a.zoom - this.ud;
      let c = Math.pow(2, b);
      c = new google.maps.Point(Math.floor(a.Ub.x / c), Math.floor(a.Ub.y / c));
      a.Ga = this.ld(c, a.zoom - b);
      a.zd = Ga(Np, this.ud);
    }
    const d = x(a.Oc, a);
    a.Oc = x(function(e) {
      e && (e.includes('The specified key does not exist.') || e.includes('AccessDenied'))
        ? xp(a, 'loaded')
        : d(e);
    }, a);
    yp(a);
  };
  Mp.prototype.Gg = function() {
    return [this.Xf, this.Za, this.ud, this.Df].join('-');
  };
  Mp.prototype.ld = function(a, b) {
    a = Lp('https://storage.googleapis.com', this.Xf, this.Za, String(b), String(a.x), String(a.y));
    this.Df && (a += this.Df);
    return a;
  };
  var Np = function(a, b) {
    if (!b.pd) throw Error('Tile must have an image element to be rendered.');
    a = Math.pow(2, b.zoom - a);
    const c = b.tileSize.width;
    let d = b.pa.ownerDocument.createElement('canvas');
    d.setAttribute('width', c);
    d.setAttribute('height', c);
    b.pa.appendChild(d);
    d = d.getContext('2d');
    d.imageSmoothingEnabled = !1;
    d.mozImageSmoothingEnabled = !1;
    d.webkitImageSmoothingEnabled = !1;
    d.drawImage(b.pd, (c / a) * (b.Ub.x % a), (c / a) * (b.Ub.y % a), c / a, c / a, 0, 0, c, c);
  };
  const Op = function() {
    this.Da = [];
    this.Ka = [];
  };
  k = Op.prototype;
  k.enqueue = function(a) {
    this.Ka.push(a);
  };
  k.uc = function() {
    this.Da.length == 0 && ((this.Da = this.Ka), this.Da.reverse(), (this.Ka = []));
    return this.Da.pop();
  };
  k.M = function() {
    return this.Da.length + this.Ka.length;
  };
  k.isEmpty = function() {
    return this.Da.length == 0 && this.Ka.length == 0;
  };
  k.clear = function() {
    this.Da = [];
    this.Ka = [];
  };
  k.contains = function(a) {
    return db(this.Da, a) || db(this.Ka, a);
  };
  k.remove = function(a) {
    let b = this.Da;
    const c = Va(b, a);
    c >= 0 ? (fb(b, c), (b = !0)) : (b = !1);
    return b || gb(this.Ka, a);
  };
  k.T = function() {
    for (var a = [], b = this.Da.length - 1; b >= 0; --b) a.push(this.Da[b]);
    const c = this.Ka.length;
    for (b = 0; b < c; ++b) a.push(this.Ka[b]);
    return a;
  };
  const Pp = function(a, b) {
    Ia.call(this);
    this.ah = a || 0;
    this.td = b || 10;
    if (this.ah > this.td) throw Error('[goog.structs.Pool] Min can not be greater than max');
    this.Na = new Op();
    this.jb = new Fd();
    this.delay = 0;
    this.Re = null;
    this.$c();
  };
  A(Pp, Ia);
  Pp.prototype.zc = function() {
    const a = Ha();
    if (!(this.Re != null && a - this.Re < this.delay)) {
      for (var b; this.Na.M() > 0 && ((b = this.Na.uc()), !this.$e(b)); ) this.$c();
      !b && this.M() < this.td && (b = this.pe());
      b && ((this.Re = a), this.jb.add(b));
      return b;
    }
  };
  const Qp = function(a, b) {
    return a.jb.remove(b) ? (a.$d(b), !0) : !1;
  };
  k = Pp.prototype;
  k.$d = function(a) {
    this.jb.remove(a);
    this.$e(a) && this.M() < this.td ? this.Na.enqueue(a) : this.fd(a);
  };
  k.$c = function() {
    for (var a = this.Na; this.M() < this.ah; ) a.enqueue(this.pe());
    for (; this.M() > this.td && this.Na.M() > 0; ) this.fd(a.uc());
  };
  k.pe = function() {
    return {};
  };
  k.fd = function(a) {
    if (typeof a.La === 'function') a.La();
    else for (const b in a) a[b] = null;
  };
  k.$e = function(a) {
    return typeof a.ii === 'function' ? a.ii() : !0;
  };
  k.contains = function(a) {
    return this.Na.contains(a) || this.jb.contains(a);
  };
  k.M = function() {
    return this.Na.M() + this.jb.M();
  };
  k.isEmpty = function() {
    return this.Na.isEmpty() && this.jb.isEmpty();
  };
  k.C = function() {
    Pp.F.C.call(this);
    if (this.jb.M() > 0) throw Error('[goog.structs.Pool] Objects not released');
    delete this.jb;
    for (let a = this.Na; !a.isEmpty(); ) this.fd(a.uc());
    delete this.Na;
  };
  const Rp = function(a, b) {
    this.Tg = a;
    this.Od = b;
  };
  Rp.prototype.getKey = function() {
    return this.Tg;
  };
  Rp.prototype.clone = function() {
    return new Rp(this.Tg, this.Od);
  };
  var Sp = function(a) {
    this.wa = [];
    if (a)
      a: {
        if (a instanceof Sp) {
          var b = a.Ea();
          a = a.T();
          if (this.M() <= 0) {
            for (var c = this.wa, d = 0; d < b.length; d++) c.push(new Rp(b[d], a[d]));
            break a;
          }
        } else (b = Gb(a)), (a = Fb(a));
        for (d = 0; d < b.length; d++) Tp(this, b[d], a[d]);
      }
  };
  var Tp = function(a, b, c) {
    let d = a.wa;
    d.push(new Rp(b, c));
    b = d.length - 1;
    a = a.wa;
    for (c = a[b]; b > 0; )
      if (((d = (b - 1) >> 1), a[d].getKey() > c.getKey())) (a[b] = a[d]), (b = d);
      else break;
    a[b] = c;
  };
  k = Sp.prototype;
  k.remove = function() {
    let a = this.wa;
    let b = a.length;
    const c = a[0];
    if (!(b <= 0)) {
      if (b == 1) eb(a);
      else {
        a[0] = a.pop();
        a = 0;
        b = this.wa;
        for (var d = b.length, e = b[a]; a < d >> 1; ) {
          let f = 2 * a + 1;
          const g = 2 * a + 2;
          f = g < d && b[g].getKey() < b[f].getKey() ? g : f;
          if (b[f].getKey() > e.getKey()) break;
          b[a] = b[f];
          a = f;
        }
        b[a] = e;
      }
      return c.Od;
    }
  };
  k.T = function() {
    for (var a = this.wa, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].Od);
    return b;
  };
  k.Ea = function() {
    for (var a = this.wa, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].getKey());
    return b;
  };
  k.sc = function(a) {
    return Za(this.wa, function(b) {
      return b.Od == a;
    });
  };
  k.fb = function(a) {
    return Za(this.wa, function(b) {
      return b.getKey() == a;
    });
  };
  k.clone = function() {
    return new Sp(this);
  };
  k.M = function() {
    return this.wa.length;
  };
  k.isEmpty = function() {
    return this.wa.length == 0;
  };
  k.clear = function() {
    eb(this.wa);
  };
  const Up = function() {
    Sp.call(this);
  };
  A(Up, Sp);
  Up.prototype.enqueue = function(a, b) {
    Tp(this, a, b);
  };
  Up.prototype.uc = function() {
    return this.remove();
  };
  const Vp = function(a, b) {
    this.pg = void 0;
    this.Bd = new Up();
    Pp.call(this, a, b);
  };
  A(Vp, Pp);
  k = Vp.prototype;
  k.zc = function(a, b) {
    if (!a)
      return (
        (a = Vp.F.zc.call(this)) &&
          this.delay &&
          (this.pg = t.setTimeout(x(this.nd, this), this.delay)),
        a
      );
    this.Bd.enqueue(void 0 !== b ? b : 100, a);
    this.nd();
  };
  k.nd = function() {
    for (let a = this.Bd; a.M() > 0; ) {
      const b = this.zc();
      if (b) a.uc().apply(this, [b]);
      else break;
    }
  };
  k.$d = function(a) {
    Vp.F.$d.call(this, a);
    this.nd();
  };
  k.$c = function() {
    Vp.F.$c.call(this);
    this.nd();
  };
  k.C = function() {
    Vp.F.C.call(this);
    t.clearTimeout(this.pg);
    this.Bd.clear();
    this.Bd = null;
  };
  const Wp = function(a, b) {
    Ia.call(this);
    this.Se = a;
    this.sa = b || null;
  };
  A(Wp, Ap);
  y('ee.layers.EarthEngineTileSource', Wp);
  Wp.prototype.Vg = function(a, b) {
    var c = dd(
      a,
      'status-changed',
      function() {
        switch (a.getStatus()) {
          case 'loaded':
            var e = a.Oi['x-earth-engine-computation-profile'];
            this.sa && e && this.sa.di(a.pa.id, e);
            break;
          case 'failed':
          case 'aborted':
            this.sa && a.pa.id !== '' && this.sa.Ii(a.pa.id), ld(c);
        }
      },
      void 0,
      this
    );
    a.Ga = this.ld(a.Ub, a.zoom);
    const d = x(this.Je, this, a);
    Xp().zc(d, b);
  };
  Wp.prototype.Gg = function() {
    return `${this.Se.mapid}-${this.Se.token}`;
  };
  Wp.prototype.Je = function(a, b) {
    const c = Xp();
    if (a.Ma || a.getStatus() == 'aborted') Qp(c, b);
    else {
      var d = dd(a, 'status-changed', function() {
        a.Af in zp && (ld(d), Qp(c, b));
      });
      yp(a);
    }
  };
  Wp.prototype.ld = function(a, b) {
    a = this.Se.formatTileUrl(a.x, a.y, b);
    return this.sa && this.sa.isEnabled() ? `${a}&profiling=1` : a;
  };
  var Xp = function() {
    Yp || (Yp = new Vp(0, 4));
    return Yp;
  };
  var Yp = null;
  const $p = function() {
    pd.call(this);
    this.Id = new Zp(0, 60);
    this.dc = new wd();
  };
  A($p, pd);
  y('ee.MapTileManager', $p);
  $p.Oe = void 0;
  $p.Fg = function() {
    return $p.Oe ? $p.Oe : ($p.Oe = new $p());
  };
  $p.prototype.send = function(a, b, c, d, e) {
    if (this.dc.get(a)) throw Error('[ee.MapTileManager] ID in use');
    b = new aq(a, b, d, x(this.oh, this), void 0 !== e ? e : 1);
    this.dc.set(a, b);
    a = x(this.Je, this, b);
    this.Id.zc(a, c);
    return b;
  };
  $p.prototype.abort = function(a) {
    if ((a = this.dc.get(a))) a.Sb || ((a.Sb = !0), (a.Ca = new Ka('abort'))), this.oh(a);
  };
  $p.prototype.Je = function(a, b) {
    if (a.ea || a.Sb) bq(this, b);
    else if (((a.Jh = b), b.setActive(!0), (b = new Dp()), (a.ea = b), !cq(a)))
      throw Error('Cannot dispatch first request!');
  };
  $p.prototype.oh = function(a) {
    this.dc.remove(a.getId());
    a.ea && (bq(this, a.Jh), a.ea.La());
    a.Ke && a.Ke(a.Ca, a.mh);
  };
  var bq = function(a, b) {
    b.setActive(!1);
    if (!Qp(a.Id, b)) throw Error('Object not released');
  };
  $p.prototype.C = function() {
    $p.F.C.call(this);
    this.Id.La();
    this.Id = null;
    const a = this.dc;
    Wa(a.T(), function(b) {
      b.La();
    });
    a.clear();
    this.dc = null;
  };
  var aq = function(a, b, c, d, e) {
    Ia.call(this);
    this.da = a;
    this.Ti = b;
    this.Ci = void 0 !== e ? e : 1;
    this.Ke = c;
    this.Jb = d;
  };
  A(aq, Ia);
  k = aq.prototype;
  k.Qf = 0;
  k.Sb = !1;
  k.ea = null;
  k.Jh = null;
  k.Ca = null;
  k.mh = null;
  const dq = ['load', 'abort', 'error'];
  aq.prototype.getId = function() {
    return this.da;
  };
  aq.prototype.getUrl = function() {
    return this.Ti;
  };
  aq.prototype.si = function(a) {
    if (this.Sb) this.Jb && this.Jb(this);
    else
      switch (a.type) {
        case 'load':
          this.Ca = a;
          this.Jb && this.Jb(this);
          break;
        case 'error':
        case 'abort':
          cq(this) || ((this.Ca = a), this.Jb && this.Jb(this));
      }
  };
  aq.prototype.C = function() {
    aq.F.C.call(this);
    delete this.Ke;
    delete this.Jb;
  };
  var cq = function(a) {
    if (a.Qf > a.Ci) return !1;
    a.Qf++;
    Gp(a.ea, a.da);
    setTimeout(x(a.Pi, a), 0);
    return !0;
  };
  aq.prototype.Pi = function() {
    if (!this.Sb) {
      const a = x(function(d) {
        this.Sb || (Fp(this.ea, this.da, d), cd(this.ea, dq, x(this.si, this)), this.ea.start());
      }, this);
      const b = this.getUrl();
      if (Xi(b).ya.fb('profiling')) {
        const c = new vi();
        c.ec = 'blob';
        c.Oa(
          'complete',
          x(function() {
            this.mh = c.getResponseHeader('X-Earth-Engine-Computation-Profile') || null;
            if (c.getStatus() >= 200 && c.getStatus() < 300)
              try {
                var d = ic(kc(Ii(c)));
                var e = d !== 'about:invalid#zClosurez';
              } catch (f) {}
            a(e ? d : b);
          }, this)
        );
        c.Hc('ready', x(c.La, c));
        c.send(b, 'GET');
      } else a(b);
    }
  };
  const eq = function() {
    Ia.call(this);
    this.Aa = !1;
  };
  A(eq, Ia);
  eq.prototype.setActive = function(a) {
    this.Aa = a;
  };
  eq.prototype.Rg = function() {
    return this.Aa;
  };
  var Zp = function(a, b) {
    Vp.call(this, a, b);
  };
  A(Zp, Vp);
  Zp.prototype.pe = function() {
    return new eq();
  };
  Zp.prototype.fd = function(a) {
    a.La();
  };
  Zp.prototype.$e = function(a) {
    return !a.Ma && !a.Rg();
  };
  const fq = function(a, b, c, d, e) {
    Id.call(this, a, b, c, d, e);
    this.minZoom = d.minZoom || 0;
    this.maxZoom = d.maxZoom || 20;
    if (!window.google || !window.google.maps)
      throw Error("Google Maps API hasn't been initialized.");
    this.tileSize = d.tileSize || new google.maps.Size(256, 256);
    this.name = d.name;
    this.Hf = new Fd();
    this.af = 1;
    this.sa = e || null;
  };
  p(fq, Id);
  k = fq.prototype;
  k.ae = function(a) {
    return dd(this, 'tileevent', a);
  };
  k.nf = function(a) {
    ld(a);
  };
  k.getTile = function(a, b, c) {
    if (b < this.minZoom || a.y < 0 || a.y >= 1 << b)
      return (a = c.createElement('IMG')), (a.style.width = '0px'), (a.style.height = '0px'), a;
    b = Jd(this, a, b);
    a = `${[this.url, b].join('/')}?token=${this.token}`;
    this.sa && this.sa.isEnabled() && (a += '&profiling=1');
    b = [b, this.lb, this.token].join('/');
    this.lb += 1;
    c = Pg('DIV', {id: b});
    const d = new Date().getTime() / 1e3;
    this.nb.push(b);
    $p.Fg().send(b, a, d, x(this.ri, this, c, b));
    dp(this);
    return c;
  };
  k.Ge = function() {
    return this.nb.length;
  };
  k.releaseTile = function(a) {
    $p.Fg().abort(a.id);
    this.Hf.remove(void 0 !== a.firstElementChild ? a.firstElementChild : Ug(a.firstChild));
    a.id !== '' && (this.Gf.remove(a.id), this.sa && this.sa.Ii(a.id));
  };
  k.setOpacity = function(a) {
    this.af = a;
    const b = this.Hf.Rb();
    vd(b, function(c) {
      lp(c, a);
    });
  };
  k.ri = function(a, b, c, d) {
    c.type == 'error'
      ? (gb(this.nb, b), this.Gf.add(b), this.dispatchEvent(c))
      : (gb(this.nb, b),
        c.target &&
          c.type == 'load' &&
          ((c = c.target), this.Hf.add(c), this.af != 1 && lp(c, this.af), a.appendChild(c)),
        dp(this));
    this.sa && d !== null && this.sa.di(b, d);
  };
  y('ee.MapLayerOverlay', fq);
  fq.prototype.removeTileCallback = fq.prototype.nf;
  fq.prototype.addTileCallback = fq.prototype.ae;
  fq.prototype.getTile = fq.prototype.getTile;
  fq.prototype.setOpacity = fq.prototype.setOpacity;
  fq.prototype.releaseTile = fq.prototype.releaseTile;
  var gq = function(a, b) {
    if (!(this instanceof gq)) return new gq(a, b);
    this.Za = a;
    this.Qa = b;
  };
  A(gq, Bm);
  y('ee.SavedFunction', gq);
  gq.prototype.encode = function(a) {
    return P('LoadAlgorithmById', this.Za).encode(a);
  };
  gq.prototype.$ = function() {
    return this.Qa;
  };
  (function() {
    const a = {};
    const b = 'ee.ApiFunction.lookup ee.ApiFunction._apply ee.ApiFunction._call ee.batch.Export.table.toDrive ee.batch.Export.video.toDrive ee.batch.Export.image.toDrive ee.batch.Export.image.toAsset ee.batch.Export.table.toAsset ee.batch.Export.videoMap.toCloudStorage ee.batch.Export.image.toCloudStorage ee.batch.Export.map.toCloudStorage ee.batch.Export.table.toCloudStorage ee.batch.Export.video.toCloudStorage ee.Collection.prototype.filterDate ee.Collection.prototype.sort ee.Collection.prototype.map ee.Collection.prototype.filter ee.Collection.prototype.iterate ee.Collection.prototype.limit ee.Collection.prototype.filterBounds ee.Collection.prototype.filterMetadata ee.ComputedObject.prototype.serialize ee.ComputedObject.prototype.aside ee.ComputedObject.prototype.evaluate ee.ComputedObject.prototype.getInfo ee.data.cancelOperation ee.data.getOperation ee.data.createAsset ee.data.cancelTask ee.data.getMapId ee.data.createFolder ee.data.renameAsset ee.data.authenticateViaOauth ee.data.getTileUrl ee.data.updateTask ee.data.startProcessing ee.data.getAssetAcl ee.data.copyAsset ee.data.getValue ee.data.deleteAsset ee.data.getTableDownloadId ee.data.computeValue ee.data.getList ee.data.makeTableDownloadUrl ee.data.getThumbId ee.data.newTaskId ee.data.makeDownloadUrl ee.data.listAssets ee.data.getTaskStatus ee.data.getVideoThumbId ee.data.startIngestion ee.data.updateAsset ee.data.getFilmstripThumbId ee.data.setAssetAcl ee.data.listImages ee.data.makeThumbUrl ee.data.authenticateViaPopup ee.data.getAssetRoots ee.data.listBuckets ee.data.setAssetProperties ee.data.getTaskList ee.data.getDownloadId ee.data.authenticate ee.data.createAssetHome ee.data.getTaskListWithLimit ee.data.authenticateViaPrivateKey ee.data.getAssetRootQuota ee.data.startTableIngestion ee.data.getAsset ee.data.getInfo ee.Date ee.Deserializer.decode ee.Deserializer.fromJSON ee.Dictionary ee.initialize ee.call ee.reset ee.TILE_SIZE ee.apply ee.Algorithms ee.InitState ee.Element.prototype.set ee.Feature ee.Feature.prototype.getMap ee.Feature.prototype.getInfo ee.FeatureCollection.prototype.getInfo ee.FeatureCollection.prototype.getDownloadURL ee.FeatureCollection.prototype.select ee.FeatureCollection.prototype.getMap ee.FeatureCollection ee.Filter.gt ee.Filter.prototype.not ee.Filter.eq ee.Filter.and ee.Filter.bounds ee.Filter.neq ee.Filter ee.Filter.lt ee.Filter.gte ee.Filter.lte ee.Filter.date ee.Filter.inList ee.Filter.metadata ee.Filter.or ee.Function.prototype.call ee.Function.prototype.apply ee.Geometry.MultiLineString ee.Geometry.LinearRing ee.Geometry.MultiPolygon ee.Geometry.Point ee.Geometry.LineString ee.Geometry.prototype.toGeoJSON ee.Geometry ee.Geometry.prototype.toGeoJSONString ee.Geometry.MultiPoint ee.Geometry.Polygon ee.Geometry.prototype.serialize ee.Geometry.Rectangle ee.Image.prototype.getThumbURL ee.Image.prototype.clip ee.Image.prototype.rename ee.Image.prototype.getInfo ee.Image.prototype.expression ee.Image.prototype.select ee.Image ee.Image.prototype.getDownloadURL ee.Image.cat ee.Image.prototype.getMap ee.Image.rgb ee.ImageCollection.prototype.getInfo ee.ImageCollection.prototype.select ee.ImageCollection.prototype.getMap ee.ImageCollection.prototype.first ee.ImageCollection.prototype.getVideoThumbURL ee.ImageCollection.prototype.getFilmstripThumbURL ee.ImageCollection ee.List ee.Number ee.Serializer.toJSON ee.Serializer.encode ee.Serializer.toReadableCloudApiJSON ee.Serializer.encodeCloudApiPretty ee.Serializer.encodeCloudApi ee.Serializer.toReadableJSON ee.String ee.Terrain'.split(
      ' '
    );
    const c = [
      ['name'],
      ['name', 'namedArgs'],
      ['name', 'var_args'],
      'collection opt_description opt_folder opt_fileNamePrefix opt_fileFormat opt_selectors'.split(
        ' '
      ),
      'collection opt_description opt_folder opt_fileNamePrefix opt_framesPerSecond opt_dimensions opt_region opt_scale opt_crs opt_crsTransform opt_maxPixels opt_maxFrames'.split(
        ' '
      ),
      'image opt_description opt_folder opt_fileNamePrefix opt_dimensions opt_region opt_scale opt_crs opt_crsTransform opt_maxPixels opt_shardSize opt_fileDimensions opt_skipEmptyTiles opt_fileFormat opt_formatOptions'.split(
        ' '
      ),
      'image opt_description opt_assetId opt_pyramidingPolicy opt_dimensions opt_region opt_scale opt_crs opt_crsTransform opt_maxPixels'.split(
        ' '
      ),
      ['collection', 'opt_description', 'opt_assetId'],
      'collection opt_description opt_bucket opt_fileNamePrefix opt_framesPerSecond opt_writePublicTiles opt_minZoom opt_maxZoom opt_scale opt_region opt_skipEmptyTiles opt_minTimeMachineZoomSubset opt_maxTimeMachineZoomSubset opt_tileWidth opt_tileHeight opt_tileStride opt_videoFormat opt_version opt_mapsApiKey opt_bucketCorsUris'.split(
        ' '
      ),
      'image opt_description opt_bucket opt_fileNamePrefix opt_dimensions opt_region opt_scale opt_crs opt_crsTransform opt_maxPixels opt_shardSize opt_fileDimensions opt_skipEmptyTiles opt_fileFormat opt_formatOptions'.split(
        ' '
      ),
      'image opt_description opt_bucket opt_fileFormat opt_path opt_writePublicTiles opt_scale opt_maxZoom opt_minZoom opt_region opt_skipEmptyTiles opt_mapsApiKey'.split(
        ' '
      ),
      'collection opt_description opt_bucket opt_fileNamePrefix opt_fileFormat opt_selectors'.split(
        ' '
      ),
      'collection opt_description opt_bucket opt_fileNamePrefix opt_framesPerSecond opt_dimensions opt_region opt_scale opt_crs opt_crsTransform opt_maxPixels opt_maxFrames'.split(
        ' '
      ),
      ['start', 'opt_end'],
      ['property', 'opt_ascending'],
      ['algorithm', 'opt_dropNulls'],
      ['filter'],
      ['algorithm', 'opt_first'],
      ['max', 'opt_property', 'opt_ascending'],
      ['geometry'],
      ['name', 'operator', 'value'],
      [],
      ['func', 'var_args'],
      ['callback'],
      ['opt_callback'],
      ['operationName', 'opt_callback'],
      ['operationName', 'opt_callback'],
      ['value', 'opt_path', 'opt_force', 'opt_properties', 'opt_callback'],
      ['taskId', 'opt_callback'],
      ['params', 'opt_callback'],
      ['path', 'opt_force', 'opt_callback'],
      ['sourceId', 'destinationId', 'opt_callback'],
      ['clientId', 'success', 'opt_error', 'opt_extraScopes', 'opt_onImmediateFailed'],
      ['mapid', 'x', 'y', 'z'],
      ['taskId', 'action', 'opt_callback'],
      ['taskId', 'params', 'opt_callback'],
      ['assetId', 'opt_callback'],
      ['sourceId', 'destinationId', 'opt_overwrite', 'opt_callback'],
      ['params', 'opt_callback'],
      ['assetId', 'opt_callback'],
      ['params', 'opt_callback'],
      ['obj', 'opt_callback'],
      ['params', 'opt_callback'],
      ['id'],
      ['params', 'opt_callback'],
      ['opt_count', 'opt_callback'],
      ['id'],
      ['parent', 'params', 'opt_callback'],
      ['taskId', 'opt_callback'],
      ['params', 'opt_callback'],
      ['taskId', 'request', 'opt_callback'],
      ['assetId', 'asset', 'updateFields', 'opt_callback'],
      ['params', 'opt_callback'],
      ['assetId', 'aclUpdate', 'opt_callback'],
      ['parent', 'params', 'opt_callback'],
      ['id'],
      ['opt_success', 'opt_error'],
      ['opt_callback'],
      ['project', 'opt_callback'],
      ['assetId', 'properties', 'opt_callback'],
      ['opt_callback'],
      ['params', 'opt_callback'],
      ['clientId', 'success', 'opt_error', 'opt_extraScopes', 'opt_onImmediateFailed'],
      ['requestedId', 'opt_callback'],
      ['opt_limit', 'opt_callback'],
      ['privateKey', 'opt_success', 'opt_error', 'opt_extraScopes'],
      ['rootId', 'opt_callback'],
      ['taskId', 'request', 'opt_callback'],
      ['id', 'opt_callback'],
      ['id', 'opt_callback'],
      ['date', 'opt_tz'],
      ['json'],
      ['json'],
      ['opt_dict'],
      ['opt_baseurl', 'opt_tileurl', 'opt_successCallback', 'opt_errorCallback', 'opt_xsrfToken'],
      ['func', 'var_args'],
      [],
      [],
      ['func', 'namedArgs'],
      [],
      [],
      ['var_args'],
      ['geometry', 'opt_properties'],
      ['opt_visParams', 'opt_callback'],
      ['opt_callback'],
      ['opt_callback'],
      ['opt_format', 'opt_selectors', 'opt_filename', 'opt_callback'],
      ['propertySelectors', 'opt_newProperties', 'opt_retainGeometry'],
      ['opt_visParams', 'opt_callback'],
      ['args', 'opt_column'],
      ['name', 'value'],
      [],
      ['name', 'value'],
      ['var_args'],
      ['geometry', 'opt_errorMargin'],
      ['name', 'value'],
      ['opt_filter'],
      ['name', 'value'],
      ['name', 'value'],
      ['name', 'value'],
      ['start', 'opt_end'],
      ['opt_leftField', 'opt_rightValue', 'opt_rightField', 'opt_leftValue'],
      ['name', 'operator', 'value'],
      ['var_args'],
      ['var_args'],
      ['namedArgs'],
      ['coords', 'opt_proj', 'opt_geodesic', 'opt_maxError'],
      ['coords', 'opt_proj', 'opt_geodesic', 'opt_maxError'],
      ['coords', 'opt_proj', 'opt_geodesic', 'opt_maxError', 'opt_evenOdd'],
      ['coords', 'opt_proj'],
      ['coords', 'opt_proj', 'opt_geodesic', 'opt_maxError'],
      [],
      ['geoJson', 'opt_proj', 'opt_geodesic', 'opt_evenOdd'],
      [],
      ['coords', 'opt_proj'],
      ['coords', 'opt_proj', 'opt_geodesic', 'opt_maxError', 'opt_evenOdd'],
      [],
      ['coords', 'opt_proj', 'opt_geodesic', 'opt_evenOdd'],
      ['params', 'opt_callback'],
      ['geometry'],
      ['var_args'],
      ['opt_callback'],
      ['expression', 'opt_map'],
      ['var_args'],
      ['opt_args'],
      ['params', 'opt_callback'],
      ['var_args'],
      ['opt_visParams', 'opt_callback'],
      ['r', 'g', 'b'],
      ['opt_callback'],
      ['selectors', 'opt_names'],
      ['opt_visParams', 'opt_callback'],
      [],
      ['params', 'opt_callback'],
      ['params', 'opt_callback'],
      ['args'],
      ['list'],
      ['number'],
      ['obj'],
      ['obj', 'opt_isCompound'],
      ['obj'],
      ['obj'],
      ['obj'],
      ['obj'],
      ['string'],
      []
    ];
    [
      Gm,
      Hm,
      P,
      jo,
      mo,
      go,
      co,
      ko,
      no,
      fo,
      ho,
      io,
      lo,
      U.prototype.Ae,
      U.prototype.sort,
      U.prototype.map,
      U.prototype.filter,
      U.prototype.Sg,
      U.prototype.limit,
      U.prototype.xg,
      U.prototype.Be,
      N.prototype.Y,
      N.prototype.Nf,
      N.prototype.evaluate,
      N.prototype.X,
      Nl,
      Ol,
      jm,
      Ql,
      vl,
      km,
      lm,
      ol,
      wl,
      Pl,
      Wl,
      om,
      mm,
      xl,
      nm,
      Fl,
      yl,
      dm,
      Gl,
      zl,
      Hl,
      El,
      em,
      Jl,
      Al,
      $l,
      pm,
      Bl,
      qm,
      fm,
      Cl,
      nl,
      hm,
      gm,
      rm,
      Ll,
      Dl,
      pl,
      im,
      Kl,
      ql,
      sm,
      bm,
      cm,
      cm,
      Eo,
      Ho,
      Io,
      Ko,
      To,
      Yo,
      Wo,
      256,
      Zo,
      Vo,
      Xo,
      R.prototype.set,
      V,
      V.prototype.getMap,
      V.prototype.X,
      X.prototype.X,
      X.prototype.yb,
      X.prototype.select,
      X.prototype.getMap,
      X,
      wn,
      T.prototype.Zb,
      sn,
      yn,
      Cn,
      tn,
      T,
      un,
      vn,
      xn,
      An,
      Bn,
      Dn,
      zn,
      Bm.prototype.call,
      Bm.prototype.apply,
      gn,
      fn,
      jn,
      $m,
      en,
      S.prototype.Rc,
      S,
      S.prototype.If,
      cn,
      hn,
      S.prototype.Y,
      dn,
      W.prototype.He,
      W.prototype.clip,
      W.prototype.ph,
      W.prototype.X,
      W.prototype.i,
      W.prototype.select,
      W,
      W.prototype.yb,
      Rn,
      W.prototype.getMap,
      Qn,
      Y.prototype.X,
      Y.prototype.select,
      Y.prototype.getMap,
      Y.prototype.first,
      Y.prototype.Ie,
      Y.prototype.Fe,
      Y,
      Sn,
      uo,
      Ik,
      Hk,
      Qk,
      Pk,
      Nk,
      Kk,
      xo,
      No
    ].forEach(function(d, e) {
      d && (a[d.toString()] = {name: b[e], paramNames: c[e]});
    });
    t.EXPORTED_FN_INFO = a;
  })();
}.call(this));

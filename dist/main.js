import { jsx as j, jsxs as Y, Fragment as vh } from "react/jsx-runtime";
import * as H from "react";
import qt, { createContext as Fl, useState as $e, useEffect as $t, useCallback as Mr, useMemo as Ws, useRef as en, useContext as wh } from "react";
import "react-dom";
import './assets/main.css';function bh(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(n, i);
          s && Object.defineProperty(e, i, s.get ? s : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const yh = {
  "glass-card": "_glass-card_9ryz3_1"
}, Ie = ({ children: e, className: t, style: r }) => {
  const n = [yh["glass-card"], t].filter(Boolean).join(" ");
  return /* @__PURE__ */ j("div", { className: n, style: r, children: e });
};
var gs = function(e, t) {
  return gs = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, gs(e, t);
};
function Ll(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  gs(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var ei = function() {
  return ei = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, ei.apply(this, arguments);
};
function Rr(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Bl(e, t, r, n) {
  var i = arguments.length, s = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(e, t, r, n);
  else for (var o = e.length - 1; o >= 0; o--) (a = e[o]) && (s = (i < 3 ? a(s) : i > 3 ? a(t, r, s) : a(t, r)) || s);
  return i > 3 && s && Object.defineProperty(t, r, s), s;
}
function Dl(e, t) {
  return function(r, n) {
    t(r, n, e);
  };
}
function Zl(e, t, r, n, i, s) {
  function a(p) {
    if (p !== void 0 && typeof p != "function") throw new TypeError("Function expected");
    return p;
  }
  for (var o = n.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", c = !t && e ? n.static ? e : e.prototype : null, u = t || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}), d, f = !1, h = r.length - 1; h >= 0; h--) {
    var g = {};
    for (var m in n) g[m] = m === "access" ? {} : n[m];
    for (var m in n.access) g.access[m] = n.access[m];
    g.addInitializer = function(p) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      s.push(a(p || null));
    };
    var v = (0, r[h])(o === "accessor" ? { get: u.get, set: u.set } : u[l], g);
    if (o === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (d = a(v.get)) && (u.get = d), (d = a(v.set)) && (u.set = d), (d = a(v.init)) && i.unshift(d);
    } else (d = a(v)) && (o === "field" ? i.unshift(d) : u[l] = d);
  }
  c && Object.defineProperty(c, n.name, u), f = !0;
}
function Ml(e, t, r) {
  for (var n = arguments.length > 2, i = 0; i < t.length; i++)
    r = n ? t[i].call(e, r) : t[i].call(e);
  return n ? r : void 0;
}
function Vl(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Wl(e, t, r) {
  return typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t });
}
function ql(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function te(e, t, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(a) {
      a(s);
    });
  }
  return new (r || (r = Promise))(function(s, a) {
    function o(u) {
      try {
        c(n.next(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? s(u.value) : i(u.value).then(o, l);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function Hl(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return a.next = o(0), a.throw = o(1), a.return = o(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function o(c) {
    return function(u) {
      return l([c, u]);
    };
  }
  function l(c) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, c[0] && (r = 0)), r; ) try {
      if (n = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done) return s;
      switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
        case 0:
        case 1:
          s = c;
          break;
        case 4:
          return r.label++, { value: c[1], done: !1 };
        case 5:
          r.label++, i = c[1], c = [0];
          continue;
        case 7:
          c = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            r = 0;
            continue;
          }
          if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
            r.label = c[1];
            break;
          }
          if (c[0] === 6 && r.label < s[1]) {
            r.label = s[1], s = c;
            break;
          }
          if (s && r.label < s[2]) {
            r.label = s[2], r.ops.push(c);
            break;
          }
          s[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      c = t.call(e, r);
    } catch (u) {
      c = [6, u], i = 0;
    } finally {
      n = s = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
var pi = Object.create ? (function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
}) : (function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
});
function Kl(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && pi(t, e, r);
}
function ti(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function qs(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), i, s = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) s.push(i.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a) throw a.error;
    }
  }
  return s;
}
function Gl() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(qs(arguments[t]));
  return e;
}
function Jl() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var s = arguments[t], a = 0, o = s.length; a < o; a++, i++)
      n[i] = s[a];
  return n;
}
function Yl(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, s; n < i; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function xr(e) {
  return this instanceof xr ? (this.v = e, this) : new xr(e);
}
function Xl(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, s = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", a), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function a(h) {
    return function(g) {
      return Promise.resolve(g).then(h, d);
    };
  }
  function o(h, g) {
    n[h] && (i[h] = function(m) {
      return new Promise(function(v, p) {
        s.push([h, m, v, p]) > 1 || l(h, m);
      });
    }, g && (i[h] = g(i[h])));
  }
  function l(h, g) {
    try {
      c(n[h](g));
    } catch (m) {
      f(s[0][3], m);
    }
  }
  function c(h) {
    h.value instanceof xr ? Promise.resolve(h.value.v).then(u, d) : f(s[0][2], h);
  }
  function u(h) {
    l("next", h);
  }
  function d(h) {
    l("throw", h);
  }
  function f(h, g) {
    h(g), s.shift(), s.length && l(s[0][0], s[0][1]);
  }
}
function Ql(e) {
  var t, r;
  return t = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(i, s) {
    t[i] = e[i] ? function(a) {
      return (r = !r) ? { value: xr(e[i](a)), done: !1 } : s ? s(a) : a;
    } : s;
  }
}
function ec(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof ti == "function" ? ti(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = e[s] && function(a) {
      return new Promise(function(o, l) {
        a = e[s](a), i(o, l, a.done, a.value);
      });
    };
  }
  function i(s, a, o, l) {
    Promise.resolve(l).then(function(c) {
      s({ value: c, done: o });
    }, a);
  }
}
function tc(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var kh = Object.create ? (function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
}) : function(e, t) {
  e.default = t;
}, ms = function(e) {
  return ms = Object.getOwnPropertyNames || function(t) {
    var r = [];
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
    return r;
  }, ms(e);
};
function rc(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = ms(e), n = 0; n < r.length; n++) r[n] !== "default" && pi(t, e, r[n]);
  return kh(t, e), t;
}
function nc(e) {
  return e && e.__esModule ? e : { default: e };
}
function ic(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function sc(e, t, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}
function ac(e, t) {
  if (t === null || typeof t != "object" && typeof t != "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function oc(e, t, r) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var n, i;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      n = t[Symbol.dispose], r && (i = n);
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    i && (n = function() {
      try {
        i.call(this);
      } catch (s) {
        return Promise.reject(s);
      }
    }), e.stack.push({ value: t, dispose: n, async: r });
  } else r && e.stack.push({ async: !0 });
  return t;
}
var Eh = typeof SuppressedError == "function" ? SuppressedError : function(e, t, r) {
  var n = new Error(r);
  return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
};
function lc(e) {
  function t(s) {
    e.error = e.hasError ? new Eh(s, e.error, "An error was suppressed during disposal.") : s, e.hasError = !0;
  }
  var r, n = 0;
  function i() {
    for (; r = e.stack.pop(); )
      try {
        if (!r.async && n === 1) return n = 0, e.stack.push(r), Promise.resolve().then(i);
        if (r.dispose) {
          var s = r.dispose.call(r.value);
          if (r.async) return n |= 2, Promise.resolve(s).then(i, function(a) {
            return t(a), i();
          });
        } else n |= 1;
      } catch (a) {
        t(a);
      }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return i();
}
function cc(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(r, n, i, s, a) {
    return n ? t ? ".jsx" : ".js" : i && (!s || !a) ? r : i + s + "." + a.toLowerCase() + "js";
  }) : e;
}
const xh = {
  __extends: Ll,
  __assign: ei,
  __rest: Rr,
  __decorate: Bl,
  __param: Dl,
  __esDecorate: Zl,
  __runInitializers: Ml,
  __propKey: Vl,
  __setFunctionName: Wl,
  __metadata: ql,
  __awaiter: te,
  __generator: Hl,
  __createBinding: pi,
  __exportStar: Kl,
  __values: ti,
  __read: qs,
  __spread: Gl,
  __spreadArrays: Jl,
  __spreadArray: Yl,
  __await: xr,
  __asyncGenerator: Xl,
  __asyncDelegator: Ql,
  __asyncValues: ec,
  __makeTemplateObject: tc,
  __importStar: rc,
  __importDefault: nc,
  __classPrivateFieldGet: ic,
  __classPrivateFieldSet: sc,
  __classPrivateFieldIn: ac,
  __addDisposableResource: oc,
  __disposeResources: lc,
  __rewriteRelativeImportExtension: cc
}, Sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: oc,
  get __assign() {
    return ei;
  },
  __asyncDelegator: Ql,
  __asyncGenerator: Xl,
  __asyncValues: ec,
  __await: xr,
  __awaiter: te,
  __classPrivateFieldGet: ic,
  __classPrivateFieldIn: ac,
  __classPrivateFieldSet: sc,
  __createBinding: pi,
  __decorate: Bl,
  __disposeResources: lc,
  __esDecorate: Zl,
  __exportStar: Kl,
  __extends: Ll,
  __generator: Hl,
  __importDefault: nc,
  __importStar: rc,
  __makeTemplateObject: tc,
  __metadata: ql,
  __param: Dl,
  __propKey: Vl,
  __read: qs,
  __rest: Rr,
  __rewriteRelativeImportExtension: cc,
  __runInitializers: Ml,
  __setFunctionName: Wl,
  __spread: Gl,
  __spreadArray: Yl,
  __spreadArrays: Jl,
  __values: ti,
  default: xh
}, Symbol.toStringTag, { value: "Module" })), Ah = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t);
class Hs extends Error {
  constructor(t, r = "FunctionsError", n) {
    super(t), this.name = r, this.context = n;
  }
}
class Th extends Hs {
  constructor(t) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", t);
  }
}
class xa extends Hs {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class Sa extends Hs {
  constructor(t) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t);
  }
}
var _s;
(function(e) {
  e.Any = "any", e.ApNortheast1 = "ap-northeast-1", e.ApNortheast2 = "ap-northeast-2", e.ApSouth1 = "ap-south-1", e.ApSoutheast1 = "ap-southeast-1", e.ApSoutheast2 = "ap-southeast-2", e.CaCentral1 = "ca-central-1", e.EuCentral1 = "eu-central-1", e.EuWest1 = "eu-west-1", e.EuWest2 = "eu-west-2", e.EuWest3 = "eu-west-3", e.SaEast1 = "sa-east-1", e.UsEast1 = "us-east-1", e.UsWest1 = "us-west-1", e.UsWest2 = "us-west-2";
})(_s || (_s = {}));
class Oh {
  /**
   * Creates a new Functions client bound to an Edge Functions URL.
   *
   * @example
   * ```ts
   * import { FunctionsClient, FunctionRegion } from '@supabase/functions-js'
   *
   * const functions = new FunctionsClient('https://xyzcompany.supabase.co/functions/v1', {
   *   headers: { apikey: 'public-anon-key' },
   *   region: FunctionRegion.UsEast1,
   * })
   * ```
   */
  constructor(t, { headers: r = {}, customFetch: n, region: i = _s.Any } = {}) {
    this.url = t, this.headers = r, this.region = i, this.fetch = Ah(n);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   * @example
   * ```ts
   * functions.setAuth(session.access_token)
   * ```
   */
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   * @example
   * ```ts
   * const { data, error } = await functions.invoke('hello-world', {
   *   body: { name: 'Ada' },
   * })
   * ```
   */
  invoke(t) {
    return te(this, arguments, void 0, function* (r, n = {}) {
      var i;
      let s, a;
      try {
        const { headers: o, method: l, body: c, signal: u, timeout: d } = n;
        let f = {}, { region: h } = n;
        h || (h = this.region);
        const g = new URL(`${this.url}/${r}`);
        h && h !== "any" && (f["x-region"] = h, g.searchParams.set("forceFunctionRegion", h));
        let m;
        c && (o && !Object.prototype.hasOwnProperty.call(o, "Content-Type") || !o) ? typeof Blob < "u" && c instanceof Blob || c instanceof ArrayBuffer ? (f["Content-Type"] = "application/octet-stream", m = c) : typeof c == "string" ? (f["Content-Type"] = "text/plain", m = c) : typeof FormData < "u" && c instanceof FormData ? m = c : (f["Content-Type"] = "application/json", m = JSON.stringify(c)) : m = c;
        let v = u;
        d && (a = new AbortController(), s = setTimeout(() => a.abort(), d), u ? (v = a.signal, u.addEventListener("abort", () => a.abort())) : v = a.signal);
        const p = yield this.fetch(g.toString(), {
          method: l || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, f), this.headers), o),
          body: m,
          signal: v
        }).catch((k) => {
          throw new Th(k);
        }), _ = p.headers.get("x-relay-error");
        if (_ && _ === "true")
          throw new xa(p);
        if (!p.ok)
          throw new Sa(p);
        let w = ((i = p.headers.get("Content-Type")) !== null && i !== void 0 ? i : "text/plain").split(";")[0].trim(), A;
        return w === "application/json" ? A = yield p.json() : w === "application/octet-stream" || w === "application/pdf" ? A = yield p.blob() : w === "text/event-stream" ? A = p : w === "multipart/form-data" ? A = yield p.formData() : A = yield p.text(), { data: A, error: null, response: p };
      } catch (o) {
        return {
          data: null,
          error: o,
          response: o instanceof Sa || o instanceof xa ? o.context : void 0
        };
      } finally {
        s && clearTimeout(s);
      }
    });
  }
}
var Vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function uc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function hc(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      var i = !1;
      try {
        i = this instanceof n;
      } catch {
      }
      return i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Le = {};
const Ir = /* @__PURE__ */ hc(Sh);
var Sn = {}, An = {}, Tn = {}, On = {}, Rn = {}, In = {}, Aa;
function dc() {
  if (Aa) return In;
  Aa = 1, Object.defineProperty(In, "__esModule", { value: !0 });
  class e extends Error {
    /**
     * @example
     * ```ts
     * import PostgrestError from '@supabase/postgrest-js'
     *
     * throw new PostgrestError({
     *   message: 'Row level security prevented the request',
     *   details: 'RLS denied the insert',
     *   hint: 'Check your policies',
     *   code: 'PGRST301',
     * })
     * ```
     */
    constructor(r) {
      super(r.message), this.name = "PostgrestError", this.details = r.details, this.hint = r.hint, this.code = r.code;
    }
  }
  return In.default = e, In;
}
var Ta;
function fc() {
  if (Ta) return Rn;
  Ta = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const t = Ir.__importDefault(dc());
  class r {
    /**
     * Creates a builder configured for a specific PostgREST request.
     *
     * @example
     * ```ts
     * import PostgrestQueryBuilder from '@supabase/postgrest-js'
     *
     * const builder = new PostgrestQueryBuilder(
     *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
     *   { headers: new Headers({ apikey: 'public-anon-key' }) }
     * )
     * ```
     */
    constructor(i) {
      var s, a;
      this.shouldThrowOnError = !1, this.method = i.method, this.url = i.url, this.headers = new Headers(i.headers), this.schema = i.schema, this.body = i.body, this.shouldThrowOnError = (s = i.shouldThrowOnError) !== null && s !== void 0 ? s : !1, this.signal = i.signal, this.isMaybeSingle = (a = i.isMaybeSingle) !== null && a !== void 0 ? a : !1, i.fetch ? this.fetch = i.fetch : this.fetch = fetch;
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */
    throwOnError() {
      return this.shouldThrowOnError = !0, this;
    }
    /**
     * Set an HTTP header for the request.
     */
    setHeader(i, s) {
      return this.headers = new Headers(this.headers), this.headers.set(i, s), this;
    }
    then(i, s) {
      this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
      const a = this.fetch;
      let o = a(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal
      }).then(async (l) => {
        var c, u, d, f;
        let h = null, g = null, m = null, v = l.status, p = l.statusText;
        if (l.ok) {
          if (this.method !== "HEAD") {
            const k = await l.text();
            k === "" || (this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && (!((c = this.headers.get("Accept")) === null || c === void 0) && c.includes("application/vnd.pgrst.plan+text")) ? g = k : g = JSON.parse(k));
          }
          const w = (u = this.headers.get("Prefer")) === null || u === void 0 ? void 0 : u.match(/count=(exact|planned|estimated)/), A = (d = l.headers.get("content-range")) === null || d === void 0 ? void 0 : d.split("/");
          w && A && A.length > 1 && (m = parseInt(A[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(g) && (g.length > 1 ? (h = {
            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
            code: "PGRST116",
            details: `Results contain ${g.length} rows, application/vnd.pgrst.object+json requires 1 row`,
            hint: null,
            message: "JSON object requested, multiple (or no) rows returned"
          }, g = null, m = null, v = 406, p = "Not Acceptable") : g.length === 1 ? g = g[0] : g = null);
        } else {
          const w = await l.text();
          try {
            h = JSON.parse(w), Array.isArray(h) && l.status === 404 && (g = [], h = null, v = 200, p = "OK");
          } catch {
            l.status === 404 && w === "" ? (v = 204, p = "No Content") : h = {
              message: w
            };
          }
          if (h && this.isMaybeSingle && (!((f = h?.details) === null || f === void 0) && f.includes("0 rows")) && (h = null, v = 200, p = "OK"), h && this.shouldThrowOnError)
            throw new t.default(h);
        }
        return {
          error: h,
          data: g,
          count: m,
          status: v,
          statusText: p
        };
      });
      return this.shouldThrowOnError || (o = o.catch((l) => {
        var c, u, d, f, h, g;
        let m = "";
        const v = l?.cause;
        if (v) {
          const p = (c = v?.message) !== null && c !== void 0 ? c : "", _ = (u = v?.code) !== null && u !== void 0 ? u : "";
          m = `${(d = l?.name) !== null && d !== void 0 ? d : "FetchError"}: ${l?.message}`, m += `

Caused by: ${(f = v?.name) !== null && f !== void 0 ? f : "Error"}: ${p}`, _ && (m += ` (${_})`), v?.stack && (m += `
${v.stack}`);
        } else
          m = (h = l?.stack) !== null && h !== void 0 ? h : "";
        return {
          error: {
            message: `${(g = l?.name) !== null && g !== void 0 ? g : "FetchError"}: ${l?.message}`,
            details: m,
            hint: "",
            code: ""
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      })), o.then(i, s);
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */
    returns() {
      return this;
    }
    /**
     * Override the type of the returned `data` field in the response.
     *
     * @typeParam NewResult - The new type to cast the response data to
     * @typeParam Options - Optional type configuration (defaults to { merge: true })
     * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
     * @example
     * ```typescript
     * // Merge with existing types (default behavior)
     * const query = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ custom_field: string }>()
     *
     * // Replace existing types completely
     * const replaceQuery = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
     * ```
     * @returns A PostgrestBuilder instance with the new type
     */
    overrideTypes() {
      return this;
    }
  }
  return Rn.default = r, Rn;
}
var Oa;
function pc() {
  if (Oa) return On;
  Oa = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const t = Ir.__importDefault(fc());
  class r extends t.default {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */
    select(i) {
      let s = !1;
      const a = (i ?? "*").split("").map((o) => /\s/.test(o) && !s ? "" : (o === '"' && (s = !s), o)).join("");
      return this.url.searchParams.set("select", a), this.headers.append("Prefer", "return=representation"), this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    order(i, { ascending: s = !0, nullsFirst: a, foreignTable: o, referencedTable: l = o } = {}) {
      const c = l ? `${l}.order` : "order", u = this.url.searchParams.get(c);
      return this.url.searchParams.set(c, `${u ? `${u},` : ""}${i}.${s ? "asc" : "desc"}${a === void 0 ? "" : a ? ".nullsfirst" : ".nullslast"}`), this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    limit(i, { foreignTable: s, referencedTable: a = s } = {}) {
      const o = typeof a > "u" ? "limit" : `${a}.limit`;
      return this.url.searchParams.set(o, `${i}`), this;
    }
    /**
     * Limit the query result by starting at an offset `from` and ending at the offset `to`.
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    range(i, s, { foreignTable: a, referencedTable: o = a } = {}) {
      const l = typeof o > "u" ? "offset" : `${o}.offset`, c = typeof o > "u" ? "limit" : `${o}.limit`;
      return this.url.searchParams.set(l, `${i}`), this.url.searchParams.set(c, `${s - i + 1}`), this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */
    abortSignal(i) {
      return this.signal = i, this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */
    single() {
      return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */
    maybeSingle() {
      return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"), this.isMaybeSingle = !0, this;
    }
    /**
     * Return `data` as a string in CSV format.
     */
    csv() {
      return this.headers.set("Accept", "text/csv"), this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */
    geojson() {
      return this.headers.set("Accept", "application/geo+json"), this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */
    explain({ analyze: i = !1, verbose: s = !1, settings: a = !1, buffers: o = !1, wal: l = !1, format: c = "text" } = {}) {
      var u;
      const d = [
        i ? "analyze" : null,
        s ? "verbose" : null,
        a ? "settings" : null,
        o ? "buffers" : null,
        l ? "wal" : null
      ].filter(Boolean).join("|"), f = (u = this.headers.get("Accept")) !== null && u !== void 0 ? u : "application/json";
      return this.headers.set("Accept", `application/vnd.pgrst.plan+${c}; for="${f}"; options=${d};`), c === "json" ? this : this;
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */
    rollback() {
      return this.headers.append("Prefer", "tx=rollback"), this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */
    returns() {
      return this;
    }
    /**
     * Set the maximum number of rows that can be affected by the query.
     * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
     *
     * @param value - The maximum number of rows that can be affected
     */
    maxAffected(i) {
      return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${i}`), this;
    }
  }
  return On.default = r, On;
}
var Ra;
function Ks() {
  if (Ra) return Tn;
  Ra = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const t = Ir.__importDefault(pc()), r = new RegExp("[,()]");
  class n extends t.default {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    eq(s, a) {
      return this.url.searchParams.append(s, `eq.${a}`), this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    neq(s, a) {
      return this.url.searchParams.append(s, `neq.${a}`), this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gt(s, a) {
      return this.url.searchParams.append(s, `gt.${a}`), this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gte(s, a) {
      return this.url.searchParams.append(s, `gte.${a}`), this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lt(s, a) {
      return this.url.searchParams.append(s, `lt.${a}`), this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lte(s, a) {
      return this.url.searchParams.append(s, `lte.${a}`), this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    like(s, a) {
      return this.url.searchParams.append(s, `like.${a}`), this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAllOf(s, a) {
      return this.url.searchParams.append(s, `like(all).{${a.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAnyOf(s, a) {
      return this.url.searchParams.append(s, `like(any).{${a.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    ilike(s, a) {
      return this.url.searchParams.append(s, `ilike.${a}`), this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAllOf(s, a) {
      return this.url.searchParams.append(s, `ilike(all).{${a.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAnyOf(s, a) {
      return this.url.searchParams.append(s, `ilike(any).{${a.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches the PostgreSQL regex `pattern`
     * case-sensitively (using the `~` operator).
     *
     * @param column - The column to filter on
     * @param pattern - The PostgreSQL regular expression pattern to match with
     */
    regexMatch(s, a) {
      return this.url.searchParams.append(s, `match.${a}`), this;
    }
    /**
     * Match only rows where `column` matches the PostgreSQL regex `pattern`
     * case-insensitively (using the `~*` operator).
     *
     * @param column - The column to filter on
     * @param pattern - The PostgreSQL regular expression pattern to match with
     */
    regexIMatch(s, a) {
      return this.url.searchParams.append(s, `imatch.${a}`), this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    is(s, a) {
      return this.url.searchParams.append(s, `is.${a}`), this;
    }
    /**
     * Match only rows where `column` IS DISTINCT FROM `value`.
     *
     * Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
     * are considered equal (not distinct), and comparing `NULL` with any non-NULL
     * value returns true (distinct).
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    isDistinct(s, a) {
      return this.url.searchParams.append(s, `isdistinct.${a}`), this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */
    in(s, a) {
      const o = Array.from(new Set(a)).map((l) => typeof l == "string" && r.test(l) ? `"${l}"` : `${l}`).join(",");
      return this.url.searchParams.append(s, `in.(${o})`), this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    contains(s, a) {
      return typeof a == "string" ? this.url.searchParams.append(s, `cs.${a}`) : Array.isArray(a) ? this.url.searchParams.append(s, `cs.{${a.join(",")}}`) : this.url.searchParams.append(s, `cs.${JSON.stringify(a)}`), this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    containedBy(s, a) {
      return typeof a == "string" ? this.url.searchParams.append(s, `cd.${a}`) : Array.isArray(a) ? this.url.searchParams.append(s, `cd.{${a.join(",")}}`) : this.url.searchParams.append(s, `cd.${JSON.stringify(a)}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGt(s, a) {
      return this.url.searchParams.append(s, `sr.${a}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGte(s, a) {
      return this.url.searchParams.append(s, `nxl.${a}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLt(s, a) {
      return this.url.searchParams.append(s, `sl.${a}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLte(s, a) {
      return this.url.searchParams.append(s, `nxr.${a}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeAdjacent(s, a) {
      return this.url.searchParams.append(s, `adj.${a}`), this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */
    overlaps(s, a) {
      return typeof a == "string" ? this.url.searchParams.append(s, `ov.${a}`) : this.url.searchParams.append(s, `ov.{${a.join(",")}}`), this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */
    textSearch(s, a, { config: o, type: l } = {}) {
      let c = "";
      l === "plain" ? c = "pl" : l === "phrase" ? c = "ph" : l === "websearch" && (c = "w");
      const u = o === void 0 ? "" : `(${o})`;
      return this.url.searchParams.append(s, `${c}fts${u}.${a}`), this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */
    match(s) {
      return Object.entries(s).forEach(([a, o]) => {
        this.url.searchParams.append(a, `eq.${o}`);
      }), this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    not(s, a, o) {
      return this.url.searchParams.append(s, `not.${a}.${o}`), this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */
    or(s, { foreignTable: a, referencedTable: o = a } = {}) {
      const l = o ? `${o}.or` : "or";
      return this.url.searchParams.append(l, `(${s})`), this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    filter(s, a, o) {
      return this.url.searchParams.append(s, `${a}.${o}`), this;
    }
  }
  return Tn.default = n, Tn;
}
var Ia;
function gc() {
  if (Ia) return An;
  Ia = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const t = Ir.__importDefault(Ks());
  class r {
    /**
     * Creates a query builder scoped to a Postgres table or view.
     *
     * @example
     * ```ts
     * import PostgrestQueryBuilder from '@supabase/postgrest-js'
     *
     * const query = new PostgrestQueryBuilder(
     *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
     *   { headers: { apikey: 'public-anon-key' } }
     * )
     * ```
     */
    constructor(i, { headers: s = {}, schema: a, fetch: o }) {
      this.url = i, this.headers = new Headers(s), this.schema = a, this.fetch = o;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    select(i, s) {
      const { head: a = !1, count: o } = s ?? {}, l = a ? "HEAD" : "GET";
      let c = !1;
      const u = (i ?? "*").split("").map((d) => /\s/.test(d) && !c ? "" : (d === '"' && (c = !c), d)).join("");
      return this.url.searchParams.set("select", u), o && this.headers.append("Prefer", `count=${o}`), new t.default({
        method: l,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch
      });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */
    insert(i, { count: s, defaultToNull: a = !0 } = {}) {
      var o;
      const l = "POST";
      if (s && this.headers.append("Prefer", `count=${s}`), a || this.headers.append("Prefer", "missing=default"), Array.isArray(i)) {
        const c = i.reduce((u, d) => u.concat(Object.keys(d)), []);
        if (c.length > 0) {
          const u = [...new Set(c)].map((d) => `"${d}"`);
          this.url.searchParams.set("columns", u.join(","));
        }
      }
      return new t.default({
        method: l,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: i,
        fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch
      });
    }
    /**
    * Perform an UPSERT on the table or view. Depending on the column(s) passed
    * to `onConflict`, `.upsert()` allows you to perform the equivalent of
    * `.insert()` if a row with the corresponding `onConflict` columns doesn't
    * exist, or if it does exist, perform an alternative action depending on
    * `ignoreDuplicates`.
    *
    * By default, upserted rows are not returned. To return it, chain the call
    * with `.select()`.
    *
    * @param values - The values to upsert with. Pass an object to upsert a
    * single row or an array to upsert multiple rows.
    *
    * @param options - Named parameters
    *
    * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
    * duplicate rows are determined. Two rows are duplicates if all the
    * `onConflict` columns are equal.
    *
    * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
    * `false`, duplicate rows are merged with existing rows.
    *
    * @param options.count - Count algorithm to use to count upserted rows.
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    *
    * @param options.defaultToNull - Make missing fields default to `null`.
    * Otherwise, use the default value for the column. This only applies when
    * inserting new rows, not when merging with existing rows under
    * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
    *
    * @example Upsert a single row using a unique key
    * ```ts
    * // Upserting a single row, overwriting based on the 'username' unique column
    * const { data, error } = await supabase
    *   .from('users')
    *   .upsert({ username: 'supabot' }, { onConflict: 'username' })
    *
    * // Example response:
    * // {
    * //   data: [
    * //     { id: 4, message: 'bar', username: 'supabot' }
    * //   ],
    * //   error: null
    * // }
    * ```
    *
    * @example Upsert with conflict resolution and exact row counting
    * ```ts
    * // Upserting and returning exact count
    * const { data, error, count } = await supabase
    *   .from('users')
    *   .upsert(
    *     {
    *       id: 3,
    *       message: 'foo',
    *       username: 'supabot'
    *     },
    *     {
    *       onConflict: 'username',
    *       count: 'exact'
    *     }
    *   )
    *
    * // Example response:
    * // {
    * //   data: [
    * //     {
    * //       id: 42,
    * //       handle: "saoirse",
    * //       display_name: "Saoirse"
    * //     }
    * //   ],
    * //   count: 1,
    * //   error: null
    * // }
    * ```
    */
    upsert(i, { onConflict: s, ignoreDuplicates: a = !1, count: o, defaultToNull: l = !0 } = {}) {
      var c;
      const u = "POST";
      if (this.headers.append("Prefer", `resolution=${a ? "ignore" : "merge"}-duplicates`), s !== void 0 && this.url.searchParams.set("on_conflict", s), o && this.headers.append("Prefer", `count=${o}`), l || this.headers.append("Prefer", "missing=default"), Array.isArray(i)) {
        const d = i.reduce((f, h) => f.concat(Object.keys(h)), []);
        if (d.length > 0) {
          const f = [...new Set(d)].map((h) => `"${h}"`);
          this.url.searchParams.set("columns", f.join(","));
        }
      }
      return new t.default({
        method: u,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: i,
        fetch: (c = this.fetch) !== null && c !== void 0 ? c : fetch
      });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    update(i, { count: s } = {}) {
      var a;
      const o = "PATCH";
      return s && this.headers.append("Prefer", `count=${s}`), new t.default({
        method: o,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: i,
        fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch
      });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    delete({ count: i } = {}) {
      var s;
      const a = "DELETE";
      return i && this.headers.append("Prefer", `count=${i}`), new t.default({
        method: a,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch
      });
    }
  }
  return An.default = r, An;
}
var Ca;
function Rh() {
  if (Ca) return Sn;
  Ca = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = Ir, t = e.__importDefault(gc()), r = e.__importDefault(Ks());
  class n {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     * @example
     * ```ts
     * import PostgrestClient from '@supabase/postgrest-js'
     *
     * const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
     *   headers: { apikey: 'public-anon-key' },
     *   schema: 'public',
     * })
     * ```
     */
    constructor(s, { headers: a = {}, schema: o, fetch: l } = {}) {
      this.url = s, this.headers = new Headers(a), this.schemaName = o, this.fetch = l;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */
    from(s) {
      if (!s || typeof s != "string" || s.trim() === "")
        throw new Error("Invalid relation name: relation must be a non-empty string.");
      const a = new URL(`${this.url}/${s}`);
      return new t.default(a, {
        headers: new Headers(this.headers),
        schema: this.schemaName,
        fetch: this.fetch
      });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */
    schema(s) {
      return new n(this.url, {
        headers: this.headers,
        schema: s,
        fetch: this.fetch
      });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    rpc(s, a = {}, { head: o = !1, get: l = !1, count: c } = {}) {
      var u;
      let d;
      const f = new URL(`${this.url}/rpc/${s}`);
      let h;
      o || l ? (d = o ? "HEAD" : "GET", Object.entries(a).filter(([m, v]) => v !== void 0).map(([m, v]) => [m, Array.isArray(v) ? `{${v.join(",")}}` : `${v}`]).forEach(([m, v]) => {
        f.searchParams.append(m, v);
      })) : (d = "POST", h = a);
      const g = new Headers(this.headers);
      return c && g.set("Prefer", `count=${c}`), new r.default({
        method: d,
        url: f,
        headers: g,
        schema: this.schemaName,
        body: h,
        fetch: (u = this.fetch) !== null && u !== void 0 ? u : fetch
      });
    }
  }
  return Sn.default = n, Sn;
}
var Na;
function Ih() {
  if (Na) return Le;
  Na = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.PostgrestError = Le.PostgrestBuilder = Le.PostgrestTransformBuilder = Le.PostgrestFilterBuilder = Le.PostgrestQueryBuilder = Le.PostgrestClient = void 0;
  const e = Ir, t = e.__importDefault(Rh());
  Le.PostgrestClient = t.default;
  const r = e.__importDefault(gc());
  Le.PostgrestQueryBuilder = r.default;
  const n = e.__importDefault(Ks());
  Le.PostgrestFilterBuilder = n.default;
  const i = e.__importDefault(pc());
  Le.PostgrestTransformBuilder = i.default;
  const s = e.__importDefault(fc());
  Le.PostgrestBuilder = s.default;
  const a = e.__importDefault(dc());
  return Le.PostgrestError = a.default, Le.default = {
    PostgrestClient: t.default,
    PostgrestQueryBuilder: r.default,
    PostgrestFilterBuilder: n.default,
    PostgrestTransformBuilder: i.default,
    PostgrestBuilder: s.default,
    PostgrestError: a.default
  }, Le;
}
var mc = Ih();
const _c = /* @__PURE__ */ uc(mc), Ch = /* @__PURE__ */ bh({
  __proto__: null,
  default: _c
}, [mc]), {
  PostgrestClient: Nh,
  PostgrestQueryBuilder: L1,
  PostgrestFilterBuilder: B1,
  PostgrestTransformBuilder: D1,
  PostgrestBuilder: Z1,
  PostgrestError: M1
} = _c || Ch;
class Ph {
  /**
   * Static-only utility – prevent instantiation.
   */
  constructor() {
  }
  static detectEnvironment() {
    var t;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((t = navigator.userAgent) === null || t === void 0) && t.includes("Vercel-Edge")))
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    if (typeof process < "u") {
      const r = process.versions;
      if (r && r.node) {
        const n = r.node, i = parseInt(n.replace(/^v/, "").split(".")[0]);
        return i >= 22 ? typeof globalThis.WebSocket < "u" ? { type: "native", constructor: globalThis.WebSocket } : {
          type: "unsupported",
          error: `Node.js ${i} detected but native WebSocket not found.`,
          workaround: "Provide a WebSocket implementation via the transport option."
        } : {
          type: "unsupported",
          error: `Node.js ${i} detected without native WebSocket support.`,
          workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
        };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  /**
   * Returns the best available WebSocket constructor for the current runtime.
   *
   * @example
   * ```ts
   * const WS = WebSocketFactory.getWebSocketConstructor()
   * const socket = new WS('wss://realtime.supabase.co/socket')
   * ```
   */
  static getWebSocketConstructor() {
    const t = this.detectEnvironment();
    if (t.constructor)
      return t.constructor;
    let r = t.error || "WebSocket not supported in this environment.";
    throw t.workaround && (r += `

Suggested solution: ${t.workaround}`), new Error(r);
  }
  /**
   * Creates a WebSocket using the detected constructor.
   *
   * @example
   * ```ts
   * const socket = WebSocketFactory.createWebSocket('wss://realtime.supabase.co/socket')
   * ```
   */
  static createWebSocket(t, r) {
    const n = this.getWebSocketConstructor();
    return new n(t, r);
  }
  /**
   * Detects whether the runtime can establish WebSocket connections.
   *
   * @example
   * ```ts
   * if (!WebSocketFactory.isWebSocketSupported()) {
   *   console.warn('Falling back to long polling')
   * }
   * ```
   */
  static isWebSocketSupported() {
    try {
      const t = this.detectEnvironment();
      return t.type === "native" || t.type === "ws";
    } catch {
      return !1;
    }
  }
}
const $h = "2.86.0", zh = `realtime-js/${$h}`, vc = "1.0.0", jh = "2.0.0", Pa = vc, vs = 1e4, Uh = 1e3, Fh = 100;
var Ht;
(function(e) {
  e[e.connecting = 0] = "connecting", e[e.open = 1] = "open", e[e.closing = 2] = "closing", e[e.closed = 3] = "closed";
})(Ht || (Ht = {}));
var Ce;
(function(e) {
  e.closed = "closed", e.errored = "errored", e.joined = "joined", e.joining = "joining", e.leaving = "leaving";
})(Ce || (Ce = {}));
var st;
(function(e) {
  e.close = "phx_close", e.error = "phx_error", e.join = "phx_join", e.reply = "phx_reply", e.leave = "phx_leave", e.access_token = "access_token";
})(st || (st = {}));
var ws;
(function(e) {
  e.websocket = "websocket";
})(ws || (ws = {}));
var Kt;
(function(e) {
  e.Connecting = "connecting", e.Open = "open", e.Closing = "closing", e.Closed = "closed";
})(Kt || (Kt = {}));
class Lh {
  constructor(t) {
    this.HEADER_LENGTH = 1, this.USER_BROADCAST_PUSH_META_LENGTH = 6, this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST_EVENT = "broadcast", this.allowedMetadataKeys = [], this.allowedMetadataKeys = t ?? [];
  }
  encode(t, r) {
    if (t.event === this.BROADCAST_EVENT && !(t.payload instanceof ArrayBuffer) && typeof t.payload.event == "string")
      return r(this._binaryEncodeUserBroadcastPush(t));
    let n = [t.join_ref, t.ref, t.topic, t.event, t.payload];
    return r(JSON.stringify(n));
  }
  _binaryEncodeUserBroadcastPush(t) {
    var r;
    return this._isArrayBuffer((r = t.payload) === null || r === void 0 ? void 0 : r.payload) ? this._encodeBinaryUserBroadcastPush(t) : this._encodeJsonUserBroadcastPush(t);
  }
  _encodeBinaryUserBroadcastPush(t) {
    var r, n;
    const i = (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(t, this.BINARY_ENCODING, i);
  }
  _encodeJsonUserBroadcastPush(t) {
    var r, n;
    const i = (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !== null && n !== void 0 ? n : {}, a = new TextEncoder().encode(JSON.stringify(i)).buffer;
    return this._encodeUserBroadcastPush(t, this.JSON_ENCODING, a);
  }
  _encodeUserBroadcastPush(t, r, n) {
    var i, s;
    const a = t.topic, o = (i = t.ref) !== null && i !== void 0 ? i : "", l = (s = t.join_ref) !== null && s !== void 0 ? s : "", c = t.payload.event, u = this.allowedMetadataKeys ? this._pick(t.payload, this.allowedMetadataKeys) : {}, d = Object.keys(u).length === 0 ? "" : JSON.stringify(u);
    if (l.length > 255)
      throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`ref length ${o.length} exceeds maximum of 255`);
    if (a.length > 255)
      throw new Error(`topic length ${a.length} exceeds maximum of 255`);
    if (c.length > 255)
      throw new Error(`userEvent length ${c.length} exceeds maximum of 255`);
    if (d.length > 255)
      throw new Error(`metadata length ${d.length} exceeds maximum of 255`);
    const f = this.USER_BROADCAST_PUSH_META_LENGTH + l.length + o.length + a.length + c.length + d.length, h = new ArrayBuffer(this.HEADER_LENGTH + f);
    let g = new DataView(h), m = 0;
    g.setUint8(m++, this.KINDS.userBroadcastPush), g.setUint8(m++, l.length), g.setUint8(m++, o.length), g.setUint8(m++, a.length), g.setUint8(m++, c.length), g.setUint8(m++, d.length), g.setUint8(m++, r), Array.from(l, (p) => g.setUint8(m++, p.charCodeAt(0))), Array.from(o, (p) => g.setUint8(m++, p.charCodeAt(0))), Array.from(a, (p) => g.setUint8(m++, p.charCodeAt(0))), Array.from(c, (p) => g.setUint8(m++, p.charCodeAt(0))), Array.from(d, (p) => g.setUint8(m++, p.charCodeAt(0)));
    var v = new Uint8Array(h.byteLength + n.byteLength);
    return v.set(new Uint8Array(h), 0), v.set(new Uint8Array(n), h.byteLength), v.buffer;
  }
  decode(t, r) {
    if (this._isArrayBuffer(t)) {
      let n = this._binaryDecode(t);
      return r(n);
    }
    if (typeof t == "string") {
      const n = JSON.parse(t), [i, s, a, o, l] = n;
      return r({ join_ref: i, ref: s, topic: a, event: o, payload: l });
    }
    return r({});
  }
  _binaryDecode(t) {
    const r = new DataView(t), n = r.getUint8(0), i = new TextDecoder();
    switch (n) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(t, r, i);
    }
  }
  _decodeUserBroadcast(t, r, n) {
    const i = r.getUint8(1), s = r.getUint8(2), a = r.getUint8(3), o = r.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const c = n.decode(t.slice(l, l + i));
    l = l + i;
    const u = n.decode(t.slice(l, l + s));
    l = l + s;
    const d = n.decode(t.slice(l, l + a));
    l = l + a;
    const f = t.slice(l, t.byteLength), h = o === this.JSON_ENCODING ? JSON.parse(n.decode(f)) : f, g = {
      type: this.BROADCAST_EVENT,
      event: u,
      payload: h
    };
    return a > 0 && (g.meta = JSON.parse(d)), { join_ref: null, ref: null, topic: c, event: this.BROADCAST_EVENT, payload: g };
  }
  _isArrayBuffer(t) {
    var r;
    return t instanceof ArrayBuffer || ((r = t?.constructor) === null || r === void 0 ? void 0 : r.name) === "ArrayBuffer";
  }
  _pick(t, r) {
    return !t || typeof t != "object" ? {} : Object.fromEntries(Object.entries(t).filter(([n]) => r.includes(n)));
  }
}
class wc {
  constructor(t, r) {
    this.callback = t, this.timerCalc = r, this.timer = void 0, this.tries = 0, this.callback = t, this.timerCalc = r;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer), this.timer = void 0;
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var ve;
(function(e) {
  e.abstime = "abstime", e.bool = "bool", e.date = "date", e.daterange = "daterange", e.float4 = "float4", e.float8 = "float8", e.int2 = "int2", e.int4 = "int4", e.int4range = "int4range", e.int8 = "int8", e.int8range = "int8range", e.json = "json", e.jsonb = "jsonb", e.money = "money", e.numeric = "numeric", e.oid = "oid", e.reltime = "reltime", e.text = "text", e.time = "time", e.timestamp = "timestamp", e.timestamptz = "timestamptz", e.timetz = "timetz", e.tsrange = "tsrange", e.tstzrange = "tstzrange";
})(ve || (ve = {}));
const $a = (e, t, r = {}) => {
  var n;
  const i = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
  return t ? Object.keys(t).reduce((s, a) => (s[a] = Bh(a, e, t, i), s), {}) : {};
}, Bh = (e, t, r, n) => {
  const i = t.find((o) => o.name === e), s = i?.type, a = r[e];
  return s && !n.includes(s) ? bc(s, a) : bs(a);
}, bc = (e, t) => {
  if (e.charAt(0) === "_") {
    const r = e.slice(1, e.length);
    return Vh(t, r);
  }
  switch (e) {
    case ve.bool:
      return Dh(t);
    case ve.float4:
    case ve.float8:
    case ve.int2:
    case ve.int4:
    case ve.int8:
    case ve.numeric:
    case ve.oid:
      return Zh(t);
    case ve.json:
    case ve.jsonb:
      return Mh(t);
    case ve.timestamp:
      return Wh(t);
    // Format to be consistent with PostgREST
    case ve.abstime:
    // To allow users to cast it based on Timezone
    case ve.date:
    // To allow users to cast it based on Timezone
    case ve.daterange:
    case ve.int4range:
    case ve.int8range:
    case ve.money:
    case ve.reltime:
    // To allow users to cast it based on Timezone
    case ve.text:
    case ve.time:
    // To allow users to cast it based on Timezone
    case ve.timestamptz:
    // To allow users to cast it based on Timezone
    case ve.timetz:
    // To allow users to cast it based on Timezone
    case ve.tsrange:
    case ve.tstzrange:
      return bs(t);
    default:
      return bs(t);
  }
}, bs = (e) => e, Dh = (e) => {
  switch (e) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return e;
  }
}, Zh = (e) => {
  if (typeof e == "string") {
    const t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return e;
}, Mh = (e) => {
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch (t) {
      return console.log(`JSON parse error: ${t}`), e;
    }
  return e;
}, Vh = (e, t) => {
  if (typeof e != "string")
    return e;
  const r = e.length - 1, n = e[r];
  if (e[0] === "{" && n === "}") {
    let s;
    const a = e.slice(1, r);
    try {
      s = JSON.parse("[" + a + "]");
    } catch {
      s = a ? a.split(",") : [];
    }
    return s.map((o) => bc(t, o));
  }
  return e;
}, Wh = (e) => typeof e == "string" ? e.replace(" ", "T") : e, yc = (e) => {
  const t = new URL(e);
  return t.protocol = t.protocol.replace(/^ws/i, "http"), t.pathname = t.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), t.pathname === "" || t.pathname === "/" ? t.pathname = "/api/broadcast" : t.pathname = t.pathname + "/api/broadcast", t.href;
};
class Ti {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(t, r, n = {}, i = vs) {
    this.channel = t, this.event = r, this.payload = n, this.timeout = i, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(t) {
    this.timeout = t, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(t) {
    this.payload = Object.assign(Object.assign({}, this.payload), t);
  }
  receive(t, r) {
    var n;
    return this._hasReceived(t) && r((n = this.receivedResp) === null || n === void 0 ? void 0 : n.response), this.recHooks.push({ status: t, callback: r }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const t = (r) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = r, this._matchReceive(r);
    };
    this.channel._on(this.refEvent, {}, t), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(t, r) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: t, response: r });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: t, response: r }) {
    this.recHooks.filter((n) => n.status === t).forEach((n) => n.callback(r));
  }
  _hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
}
var za;
(function(e) {
  e.SYNC = "sync", e.JOIN = "join", e.LEAVE = "leave";
})(za || (za = {}));
class Kr {
  /**
   * Creates a Presence helper that keeps the local presence state in sync with the server.
   *
   * @param channel - The realtime channel to bind to.
   * @param opts - Optional custom event names, e.g. `{ events: { state: 'state', diff: 'diff' } }`.
   *
   * @example
   * ```ts
   * const presence = new RealtimePresence(channel)
   *
   * channel.on('presence', ({ event, key }) => {
   *   console.log(`Presence ${event} on ${key}`)
   * })
   * ```
   */
  constructor(t, r) {
    this.channel = t, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.enabled = !1, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const n = r?.events || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(n.state, {}, (i) => {
      const { onJoin: s, onLeave: a, onSync: o } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = Kr.syncState(this.state, i, s, a), this.pendingDiffs.forEach((l) => {
        this.state = Kr.syncDiff(this.state, l, s, a);
      }), this.pendingDiffs = [], o();
    }), this.channel._on(n.diff, {}, (i) => {
      const { onJoin: s, onLeave: a, onSync: o } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(i) : (this.state = Kr.syncDiff(this.state, i, s, a), o());
    }), this.onJoin((i, s, a) => {
      this.channel._trigger("presence", {
        event: "join",
        key: i,
        currentPresences: s,
        newPresences: a
      });
    }), this.onLeave((i, s, a) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: i,
        currentPresences: s,
        leftPresences: a
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(t, r, n, i) {
    const s = this.cloneDeep(t), a = this.transformState(r), o = {}, l = {};
    return this.map(s, (c, u) => {
      a[c] || (l[c] = u);
    }), this.map(a, (c, u) => {
      const d = s[c];
      if (d) {
        const f = u.map((v) => v.presence_ref), h = d.map((v) => v.presence_ref), g = u.filter((v) => h.indexOf(v.presence_ref) < 0), m = d.filter((v) => f.indexOf(v.presence_ref) < 0);
        g.length > 0 && (o[c] = g), m.length > 0 && (l[c] = m);
      } else
        o[c] = u;
    }), this.syncDiff(s, { joins: o, leaves: l }, n, i);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(t, r, n, i) {
    const { joins: s, leaves: a } = {
      joins: this.transformState(r.joins),
      leaves: this.transformState(r.leaves)
    };
    return n || (n = () => {
    }), i || (i = () => {
    }), this.map(s, (o, l) => {
      var c;
      const u = (c = t[o]) !== null && c !== void 0 ? c : [];
      if (t[o] = this.cloneDeep(l), u.length > 0) {
        const d = t[o].map((h) => h.presence_ref), f = u.filter((h) => d.indexOf(h.presence_ref) < 0);
        t[o].unshift(...f);
      }
      n(o, u, l);
    }), this.map(a, (o, l) => {
      let c = t[o];
      if (!c)
        return;
      const u = l.map((d) => d.presence_ref);
      c = c.filter((d) => u.indexOf(d.presence_ref) < 0), t[o] = c, i(o, c, l), c.length === 0 && delete t[o];
    }), t;
  }
  /** @internal */
  static map(t, r) {
    return Object.getOwnPropertyNames(t).map((n) => r(n, t[n]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(t) {
    return t = this.cloneDeep(t), Object.getOwnPropertyNames(t).reduce((r, n) => {
      const i = t[n];
      return "metas" in i ? r[n] = i.metas.map((s) => (s.presence_ref = s.phx_ref, delete s.phx_ref, delete s.phx_ref_prev, s)) : r[n] = i, r;
    }, {});
  }
  /** @internal */
  static cloneDeep(t) {
    return JSON.parse(JSON.stringify(t));
  }
  /** @internal */
  onJoin(t) {
    this.caller.onJoin = t;
  }
  /** @internal */
  onLeave(t) {
    this.caller.onLeave = t;
  }
  /** @internal */
  onSync(t) {
    this.caller.onSync = t;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var ja;
(function(e) {
  e.ALL = "*", e.INSERT = "INSERT", e.UPDATE = "UPDATE", e.DELETE = "DELETE";
})(ja || (ja = {}));
var Gr;
(function(e) {
  e.BROADCAST = "broadcast", e.PRESENCE = "presence", e.POSTGRES_CHANGES = "postgres_changes", e.SYSTEM = "system";
})(Gr || (Gr = {}));
var bt;
(function(e) {
  e.SUBSCRIBED = "SUBSCRIBED", e.TIMED_OUT = "TIMED_OUT", e.CLOSED = "CLOSED", e.CHANNEL_ERROR = "CHANNEL_ERROR";
})(bt || (bt = {}));
class Gs {
  /**
   * Creates a channel that can broadcast messages, sync presence, and listen to Postgres changes.
   *
   * The topic determines which realtime stream you are subscribing to. Config options let you
   * enable acknowledgement for broadcasts, presence tracking, or private channels.
   *
   * @example
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'public-anon-key' },
   * })
   * const channel = new RealtimeChannel('realtime:public:messages', { config: {} }, client)
   * ```
   */
  constructor(t, r = { config: {} }, n) {
    var i, s;
    if (this.topic = t, this.params = r, this.socket = n, this.bindings = {}, this.state = Ce.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = t.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, r.config), this.timeout = this.socket.timeout, this.joinPush = new Ti(this, st.join, this.params, this.timeout), this.rejoinTimer = new wc(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = Ce.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((a) => a.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = Ce.closed, this.socket._remove(this);
    }), this._onError((a) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, a), this.state = Ce.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = Ce.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("error", (a) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, a), this.state = Ce.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(st.reply, {}, (a, o) => {
      this._trigger(this._replyEventName(o), a);
    }), this.presence = new Kr(this), this.broadcastEndpointURL = yc(this.socket.endPoint), this.private = this.params.config.private || !1, !this.private && (!((s = (i = this.params.config) === null || i === void 0 ? void 0 : i.broadcast) === null || s === void 0) && s.replay))
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  /** Subscribe registers your client with the server */
  subscribe(t, r = this.timeout) {
    var n, i, s;
    if (this.socket.isConnected() || this.socket.connect(), this.state == Ce.closed) {
      const { config: { broadcast: a, presence: o, private: l } } = this.params, c = (i = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map((h) => h.filter)) !== null && i !== void 0 ? i : [], u = !!this.bindings[Gr.PRESENCE] && this.bindings[Gr.PRESENCE].length > 0 || ((s = this.params.config.presence) === null || s === void 0 ? void 0 : s.enabled) === !0, d = {}, f = {
        broadcast: a,
        presence: Object.assign(Object.assign({}, o), { enabled: u }),
        postgres_changes: c,
        private: l
      };
      this.socket.accessTokenValue && (d.access_token = this.socket.accessTokenValue), this._onError((h) => t?.(bt.CHANNEL_ERROR, h)), this._onClose(() => t?.(bt.CLOSED)), this.updateJoinPayload(Object.assign({ config: f }, d)), this.joinedOnce = !0, this._rejoin(r), this.joinPush.receive("ok", async ({ postgres_changes: h }) => {
        var g;
        if (this.socket.setAuth(), h === void 0) {
          t?.(bt.SUBSCRIBED);
          return;
        } else {
          const m = this.bindings.postgres_changes, v = (g = m?.length) !== null && g !== void 0 ? g : 0, p = [];
          for (let _ = 0; _ < v; _++) {
            const w = m[_], { filter: { event: A, schema: k, table: E, filter: x } } = w, R = h && h[_];
            if (R && R.event === A && R.schema === k && R.table === E && R.filter === x)
              p.push(Object.assign(Object.assign({}, w), { id: R.id }));
            else {
              this.unsubscribe(), this.state = Ce.errored, t?.(bt.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = p, t && t(bt.SUBSCRIBED);
          return;
        }
      }).receive("error", (h) => {
        this.state = Ce.errored, t?.(bt.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(h).join(", ") || "error")));
      }).receive("timeout", () => {
        t?.(bt.TIMED_OUT);
      });
    }
    return this;
  }
  /**
   * Returns the current presence state for this channel.
   *
   * The shape is a map keyed by presence key (for example a user id) where each entry contains the
   * tracked metadata for that user.
   */
  presenceState() {
    return this.presence.state;
  }
  /**
   * Sends the supplied payload to the presence tracker so other subscribers can see that this
   * client is online. Use `untrack` to stop broadcasting presence for the same key.
   */
  async track(t, r = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: t
    }, r.timeout || this.timeout);
  }
  /**
   * Removes the current presence state for this client.
   */
  async untrack(t = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, t);
  }
  on(t, r, n) {
    return this.state === Ce.joined && t === Gr.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(() => this.subscribe())), this._on(t, r, n);
  }
  /**
   * Sends a broadcast message explicitly via REST API.
   *
   * This method always uses the REST API endpoint regardless of WebSocket connection state.
   * Useful when you want to guarantee REST delivery or when gradually migrating from implicit REST fallback.
   *
   * @param event The name of the broadcast event
   * @param payload Payload to be sent (required)
   * @param opts Options including timeout
   * @returns Promise resolving to object with success status, and error details if failed
   */
  async httpSend(t, r, n = {}) {
    var i;
    const s = this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "";
    if (r == null)
      return Promise.reject("Payload is required for httpSend()");
    const a = {
      method: "POST",
      headers: {
        Authorization: s,
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: [
          {
            topic: this.subTopic,
            event: t,
            payload: r,
            private: this.private
          }
        ]
      })
    }, o = await this._fetchWithTimeout(this.broadcastEndpointURL, a, (i = n.timeout) !== null && i !== void 0 ? i : this.timeout);
    if (o.status === 202)
      return { success: !0 };
    let l = o.statusText;
    try {
      const c = await o.json();
      l = c.error || c.message || l;
    } catch {
    }
    return Promise.reject(new Error(l));
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(t, r = {}) {
    var n, i;
    if (!this._canPush() && t.type === "broadcast") {
      console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
      const { event: s, payload: a } = t, l = {
        method: "POST",
        headers: {
          Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: s,
              payload: a,
              private: this.private
            }
          ]
        })
      };
      try {
        const c = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
        return await ((i = c.body) === null || i === void 0 ? void 0 : i.cancel()), c.ok ? "ok" : "error";
      } catch (c) {
        return c.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((s) => {
        var a, o, l;
        const c = this._push(t.type, t, r.timeout || this.timeout);
        t.type === "broadcast" && !(!((l = (o = (a = this.params) === null || a === void 0 ? void 0 : a.config) === null || o === void 0 ? void 0 : o.broadcast) === null || l === void 0) && l.ack) && s("ok"), c.receive("ok", () => s("ok")), c.receive("error", () => s("error")), c.receive("timeout", () => s("timed out"));
      });
  }
  /**
   * Updates the payload that will be sent the next time the channel joins (reconnects).
   * Useful for rotating access tokens or updating config without re-creating the channel.
   */
  updateJoinPayload(t) {
    this.joinPush.updatePayload(t);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(t = this.timeout) {
    this.state = Ce.leaving;
    const r = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(st.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let n = null;
    return new Promise((i) => {
      n = new Ti(this, st.leave, {}, t), n.receive("ok", () => {
        r(), i("ok");
      }).receive("timeout", () => {
        r(), i("timed out");
      }).receive("error", () => {
        i("error");
      }), n.send(), this._canPush() || n.trigger("ok", {});
    }).finally(() => {
      n?.destroy();
    });
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((t) => t.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = Ce.closed, this.bindings = {};
  }
  /** @internal */
  async _fetchWithTimeout(t, r, n) {
    const i = new AbortController(), s = setTimeout(() => i.abort(), n), a = await this.socket.fetch(t, Object.assign(Object.assign({}, r), { signal: i.signal }));
    return clearTimeout(s), a;
  }
  /** @internal */
  _push(t, r, n = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let i = new Ti(this, t, r, n);
    return this._canPush() ? i.send() : this._addToPushBuffer(i), i;
  }
  /** @internal */
  _addToPushBuffer(t) {
    if (t.startTimeout(), this.pushBuffer.push(t), this.pushBuffer.length > Fh) {
      const r = this.pushBuffer.shift();
      r && (r.destroy(), this.socket.log("channel", `discarded push due to buffer overflow: ${r.event}`, r.payload));
    }
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(t, r, n) {
    return r;
  }
  /** @internal */
  _isMember(t) {
    return this.topic === t;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(t, r, n) {
    var i, s;
    const a = t.toLocaleLowerCase(), { close: o, error: l, leave: c, join: u } = st;
    if (n && [o, l, c, u].indexOf(a) >= 0 && n !== this._joinRef())
      return;
    let f = this._onMessage(a, r, n);
    if (r && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(a) ? (i = this.bindings.postgres_changes) === null || i === void 0 || i.filter((h) => {
      var g, m, v;
      return ((g = h.filter) === null || g === void 0 ? void 0 : g.event) === "*" || ((v = (m = h.filter) === null || m === void 0 ? void 0 : m.event) === null || v === void 0 ? void 0 : v.toLocaleLowerCase()) === a;
    }).map((h) => h.callback(f, n)) : (s = this.bindings[a]) === null || s === void 0 || s.filter((h) => {
      var g, m, v, p, _, w;
      if (["broadcast", "presence", "postgres_changes"].includes(a))
        if ("id" in h) {
          const A = h.id, k = (g = h.filter) === null || g === void 0 ? void 0 : g.event;
          return A && ((m = r.ids) === null || m === void 0 ? void 0 : m.includes(A)) && (k === "*" || k?.toLocaleLowerCase() === ((v = r.data) === null || v === void 0 ? void 0 : v.type.toLocaleLowerCase()));
        } else {
          const A = (_ = (p = h?.filter) === null || p === void 0 ? void 0 : p.event) === null || _ === void 0 ? void 0 : _.toLocaleLowerCase();
          return A === "*" || A === ((w = r?.event) === null || w === void 0 ? void 0 : w.toLocaleLowerCase());
        }
      else
        return h.type.toLocaleLowerCase() === a;
    }).map((h) => {
      if (typeof f == "object" && "ids" in f) {
        const g = f.data, { schema: m, table: v, commit_timestamp: p, type: _, errors: w } = g;
        f = Object.assign(Object.assign({}, {
          schema: m,
          table: v,
          commit_timestamp: p,
          eventType: _,
          new: {},
          old: {},
          errors: w
        }), this._getPayloadRecords(g));
      }
      h.callback(f, n);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === Ce.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === Ce.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === Ce.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === Ce.leaving;
  }
  /** @internal */
  _replyEventName(t) {
    return `chan_reply_${t}`;
  }
  /** @internal */
  _on(t, r, n) {
    const i = t.toLocaleLowerCase(), s = {
      type: i,
      filter: r,
      callback: n
    };
    return this.bindings[i] ? this.bindings[i].push(s) : this.bindings[i] = [s], this;
  }
  /** @internal */
  _off(t, r) {
    const n = t.toLocaleLowerCase();
    return this.bindings[n] && (this.bindings[n] = this.bindings[n].filter((i) => {
      var s;
      return !(((s = i.type) === null || s === void 0 ? void 0 : s.toLocaleLowerCase()) === n && Gs.isEqual(i.filter, r));
    })), this;
  }
  /** @internal */
  static isEqual(t, r) {
    if (Object.keys(t).length !== Object.keys(r).length)
      return !1;
    for (const n in t)
      if (t[n] !== r[n])
        return !1;
    return !0;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(t) {
    this._on(st.close, {}, t);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(t) {
    this._on(st.error, {}, (r) => t(r));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(t = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = Ce.joining, this.joinPush.resend(t));
  }
  /** @internal */
  _getPayloadRecords(t) {
    const r = {
      new: {},
      old: {}
    };
    return (t.type === "INSERT" || t.type === "UPDATE") && (r.new = $a(t.columns, t.record)), (t.type === "UPDATE" || t.type === "DELETE") && (r.old = $a(t.columns, t.old_record)), r;
  }
}
const Oi = () => {
}, Cn = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
}, qh = [1e3, 2e3, 5e3, 1e4], Hh = 1e4, Kh = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Gh {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.heartbeatCallback The optional function to handle heartbeat status.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   * @example
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'public-anon-key' },
   * })
   * client.connect()
   * ```
   */
  constructor(t, r) {
    var n;
    if (this.accessTokenValue = null, this.apiKey = null, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = vs, this.transport = null, this.heartbeatIntervalMs = Cn.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = Oi, this.ref = 0, this.reconnectTimer = null, this.vsn = Pa, this.logger = Oi, this.conn = null, this.sendBuffer = [], this.serializer = new Lh(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._resolveFetch = (i) => i ? (...s) => i(...s) : (...s) => fetch(...s), !(!((n = r?.params) === null || n === void 0) && n.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = r.params.apikey, this.endPoint = `${t}/${ws.websocket}`, this.httpEndpoint = yc(t), this._initializeOptions(r), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(r?.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
      if (this._setConnectionState("connecting"), this.accessToken && !this._authPromise && this._setAuthSafely("connect"), this.transport)
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = Ph.createWebSocket(this.endpointURL());
        } catch (t) {
          this._setConnectionState("disconnected");
          const r = t.message;
          throw r.includes("Node.js") ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${r}`);
        }
      this._setupConnectionHandlers();
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: this.vsn }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(t, r) {
    if (!this.isDisconnecting())
      if (this._setConnectionState("disconnecting", !0), this.conn) {
        const n = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        this.conn.onclose = () => {
          clearTimeout(n), this._setConnectionState("disconnected");
        }, typeof this.conn.close == "function" && (t ? this.conn.close(t, r ?? "") : this.conn.close()), this._teardownConnection();
      } else
        this._setConnectionState("disconnected");
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(t) {
    const r = await t.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), r;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const t = await Promise.all(this.channels.map((r) => r.unsubscribe()));
    return this.channels = [], this.disconnect(), t;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(t, r, n) {
    this.logger(t, r, n);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Ht.connecting:
        return Kt.Connecting;
      case Ht.open:
        return Kt.Open;
      case Ht.closing:
        return Kt.Closing;
      default:
        return Kt.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === Kt.Open;
  }
  /**
   * Returns `true` if the connection is currently connecting.
   */
  isConnecting() {
    return this._connectionState === "connecting";
  }
  /**
   * Returns `true` if the connection is currently disconnecting.
   */
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  /**
   * Creates (or reuses) a {@link RealtimeChannel} for the provided topic.
   *
   * Topics are automatically prefixed with `realtime:` to match the Realtime service.
   * If a channel with the same topic already exists it will be returned instead of creating
   * a duplicate connection.
   */
  channel(t, r = { config: {} }) {
    const n = `realtime:${t}`, i = this.getChannels().find((s) => s.topic === n);
    if (i)
      return i;
    {
      const s = new Gs(`realtime:${t}`, r, this);
      return this.channels.push(s), s;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(t) {
    const { topic: r, event: n, payload: i, ref: s } = t, a = () => {
      this.encode(t, (o) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(o);
      });
    };
    this.log("push", `${r} ${n} (${s})`, i), this.isConnected() ? a() : this.sendBuffer.push(a);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * @param token A JWT string to override the token set on the client.
   */
  async setAuth(t = null) {
    this._authPromise = this._performAuth(t);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var t;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (r) {
        this.log("error", "error in heartbeat callback", r);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      try {
        this.heartbeatCallback("timeout");
      } catch (r) {
        this.log("error", "error in heartbeat callback", r);
      }
      this._wasManualDisconnect = !1, (t = this.conn) === null || t === void 0 || t.close(Uh, "heartbeat timeout"), setTimeout(() => {
        var r;
        this.isConnected() || (r = this.reconnectTimer) === null || r === void 0 || r.scheduleTimeout();
      }, Cn.HEARTBEAT_TIMEOUT_FALLBACK);
      return;
    }
    this.pendingHeartbeatRef = this._makeRef(), this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    });
    try {
      this.heartbeatCallback("sent");
    } catch (r) {
      this.log("error", "error in heartbeat callback", r);
    }
    this._setAuthSafely("heartbeat");
  }
  /**
   * Sets a callback that receives lifecycle events for internal heartbeat messages.
   * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
   */
  onHeartbeat(t) {
    this.heartbeatCallback = t;
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((t) => t()), this.sendBuffer = []);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let t = this.ref + 1;
    return t === this.ref ? this.ref = 0 : this.ref = t, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(t) {
    let r = this.channels.find((n) => n.topic === t && (n._isJoined() || n._isJoining()));
    r && (this.log("transport", `leaving duplicate topic "${t}"`), r.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(t) {
    this.channels = this.channels.filter((r) => r.topic !== t.topic);
  }
  /** @internal */
  _onConnMessage(t) {
    this.decode(t.data, (r) => {
      if (r.topic === "phoenix" && r.event === "phx_reply")
        try {
          this.heartbeatCallback(r.payload.status === "ok" ? "ok" : "error");
        } catch (c) {
          this.log("error", "error in heartbeat callback", c);
        }
      r.ref && r.ref === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null);
      const { topic: n, event: i, payload: s, ref: a } = r, o = a ? `(${a})` : "", l = s.status || "";
      this.log("receive", `${l} ${n} ${i} ${o}`.trim(), s), this.channels.filter((c) => c._isMember(n)).forEach((c) => c._trigger(i, s, a)), this._triggerStateCallbacks("message", r);
    });
  }
  /**
   * Clear specific timer
   * @internal
   */
  _clearTimer(t) {
    var r;
    t === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer), this.heartbeatTimer = void 0) : t === "reconnect" && ((r = this.reconnectTimer) === null || r === void 0 || r.reset());
  }
  /**
   * Clear all timers
   * @internal
   */
  _clearAllTimers() {
    this._clearTimer("heartbeat"), this._clearTimer("reconnect");
  }
  /**
   * Setup connection handlers for WebSocket events
   * @internal
   */
  _setupConnectionHandlers() {
    this.conn && ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"), this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (t) => this._onConnError(t), this.conn.onmessage = (t) => this._onConnMessage(t), this.conn.onclose = (t) => this._onConnClose(t));
  }
  /**
   * Teardown connection and cleanup resources
   * @internal
   */
  _teardownConnection() {
    if (this.conn) {
      if (this.conn.readyState === Ht.open || this.conn.readyState === Ht.connecting)
        try {
          this.conn.close();
        } catch (t) {
          this.log("error", "Error closing connection", t);
        }
      this.conn.onopen = null, this.conn.onerror = null, this.conn.onmessage = null, this.conn.onclose = null, this.conn = null;
    }
    this._clearAllTimers(), this.channels.forEach((t) => t.teardown());
  }
  /** @internal */
  _onConnOpen() {
    this._setConnectionState("connected"), this.log("transport", `connected to ${this.endpointURL()}`), (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).then(() => {
      this.flushSendBuffer();
    }).catch((r) => {
      this.log("error", "error waiting for auth on connect", r), this.flushSendBuffer();
    }), this._clearTimer("reconnect"), this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(), this._triggerStateCallbacks("open");
  }
  /** @internal */
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  /** @internal */
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
    const t = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(t), this.workerRef.onerror = (r) => {
      this.log("worker", "worker error", r.message), this.workerRef.terminate();
    }, this.workerRef.onmessage = (r) => {
      r.data.event === "keepAlive" && this.sendHeartbeat();
    }, this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /** @internal */
  _onConnClose(t) {
    var r;
    this._setConnectionState("disconnected"), this.log("transport", "close", t), this._triggerChanError(), this._clearTimer("heartbeat"), this._wasManualDisconnect || (r = this.reconnectTimer) === null || r === void 0 || r.scheduleTimeout(), this._triggerStateCallbacks("close", t);
  }
  /** @internal */
  _onConnError(t) {
    this._setConnectionState("disconnected"), this.log("transport", `${t}`), this._triggerChanError(), this._triggerStateCallbacks("error", t);
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((t) => t._trigger(st.error));
  }
  /** @internal */
  _appendParams(t, r) {
    if (Object.keys(r).length === 0)
      return t;
    const n = t.match(/\?/) ? "&" : "?", i = new URLSearchParams(r);
    return `${t}${n}${i}`;
  }
  _workerObjectUrl(t) {
    let r;
    if (t)
      r = t;
    else {
      const n = new Blob([Kh], { type: "application/javascript" });
      r = URL.createObjectURL(n);
    }
    return r;
  }
  /**
   * Set connection state with proper state management
   * @internal
   */
  _setConnectionState(t, r = !1) {
    this._connectionState = t, t === "connecting" ? this._wasManualDisconnect = !1 : t === "disconnecting" && (this._wasManualDisconnect = r);
  }
  /**
   * Perform the actual auth operation
   * @internal
   */
  async _performAuth(t = null) {
    let r;
    t ? r = t : this.accessToken ? r = await this.accessToken() : r = this.accessTokenValue, this.accessTokenValue != r && (this.accessTokenValue = r, this.channels.forEach((n) => {
      const i = {
        access_token: r,
        version: zh
      };
      r && n.updateJoinPayload(i), n.joinedOnce && n._isJoined() && n._push(st.access_token, {
        access_token: r
      });
    }));
  }
  /**
   * Wait for any in-flight auth operations to complete
   * @internal
   */
  async _waitForAuthIfNeeded() {
    this._authPromise && await this._authPromise;
  }
  /**
   * Safely call setAuth with standardized error handling
   * @internal
   */
  _setAuthSafely(t = "general") {
    this.setAuth().catch((r) => {
      this.log("error", `error setting auth in ${t}`, r);
    });
  }
  /**
   * Trigger state change callbacks with proper error handling
   * @internal
   */
  _triggerStateCallbacks(t, r) {
    try {
      this.stateChangeCallbacks[t].forEach((n) => {
        try {
          n(r);
        } catch (i) {
          this.log("error", `error in ${t} callback`, i);
        }
      });
    } catch (n) {
      this.log("error", `error triggering ${t} callbacks`, n);
    }
  }
  /**
   * Setup reconnection timer with proper configuration
   * @internal
   */
  _setupReconnectionTimer() {
    this.reconnectTimer = new wc(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, Cn.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  /**
   * Initialize client options with defaults
   * @internal
   */
  _initializeOptions(t) {
    var r, n, i, s, a, o, l, c, u, d, f, h;
    switch (this.transport = (r = t?.transport) !== null && r !== void 0 ? r : null, this.timeout = (n = t?.timeout) !== null && n !== void 0 ? n : vs, this.heartbeatIntervalMs = (i = t?.heartbeatIntervalMs) !== null && i !== void 0 ? i : Cn.HEARTBEAT_INTERVAL, this.worker = (s = t?.worker) !== null && s !== void 0 ? s : !1, this.accessToken = (a = t?.accessToken) !== null && a !== void 0 ? a : null, this.heartbeatCallback = (o = t?.heartbeatCallback) !== null && o !== void 0 ? o : Oi, this.vsn = (l = t?.vsn) !== null && l !== void 0 ? l : Pa, t?.params && (this.params = t.params), t?.logger && (this.logger = t.logger), (t?.logLevel || t?.log_level) && (this.logLevel = t.logLevel || t.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), this.reconnectAfterMs = (c = t?.reconnectAfterMs) !== null && c !== void 0 ? c : ((g) => qh[g - 1] || Hh), this.vsn) {
      case vc:
        this.encode = (u = t?.encode) !== null && u !== void 0 ? u : ((g, m) => m(JSON.stringify(g))), this.decode = (d = t?.decode) !== null && d !== void 0 ? d : ((g, m) => m(JSON.parse(g)));
        break;
      case jh:
        this.encode = (f = t?.encode) !== null && f !== void 0 ? f : this.serializer.encode.bind(this.serializer), this.decode = (h = t?.decode) !== null && h !== void 0 ? h : this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw new Error(`Unsupported serializer version: ${this.vsn}`);
    }
    if (this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = t?.workerUrl;
    }
  }
}
class gi extends Error {
  constructor(t) {
    super(t), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function ke(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
class Jh extends gi {
  constructor(t, r, n) {
    super(t), this.name = "StorageApiError", this.status = r, this.statusCode = n;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}
class ys extends gi {
  constructor(t, r) {
    super(t), this.name = "StorageUnknownError", this.originalError = r;
  }
}
const Js = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), Yh = () => Response, ks = (e) => {
  if (Array.isArray(e))
    return e.map((r) => ks(r));
  if (typeof e == "function" || e !== Object(e))
    return e;
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    const i = r.replace(/([-_][a-z])/gi, (s) => s.toUpperCase().replace(/[-_]/g, ""));
    t[i] = ks(n);
  }), t;
}, Xh = (e) => {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Qh = (e) => !e || typeof e != "string" || e.length === 0 || e.length > 100 || e.trim() !== e || e.includes("/") || e.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e), Ri = (e) => {
  var t;
  return e.msg || e.message || e.error_description || (typeof e.error == "string" ? e.error : (t = e.error) === null || t === void 0 ? void 0 : t.message) || JSON.stringify(e);
}, ed = (e, t, r) => te(void 0, void 0, void 0, function* () {
  const n = yield Yh();
  e instanceof n && !r?.noResolveJson ? e.json().then((i) => {
    const s = e.status || 500, a = i?.statusCode || s + "";
    t(new Jh(Ri(i), s, a));
  }).catch((i) => {
    t(new ys(Ri(i), i));
  }) : t(new ys(Ri(e), e));
}), td = (e, t, r, n) => {
  const i = { method: e, headers: t?.headers || {} };
  return e === "GET" || !n ? i : (Xh(n) ? (i.headers = Object.assign({ "Content-Type": "application/json" }, t?.headers), i.body = JSON.stringify(n)) : i.body = n, t?.duplex && (i.duplex = t.duplex), Object.assign(Object.assign({}, i), r));
};
function mn(e, t, r, n, i, s) {
  return te(this, void 0, void 0, function* () {
    return new Promise((a, o) => {
      e(r, td(t, n, i, s)).then((l) => {
        if (!l.ok)
          throw l;
        return n?.noResolveJson ? l : l.json();
      }).then((l) => a(l)).catch((l) => ed(l, o, n));
    });
  });
}
function tn(e, t, r, n) {
  return te(this, void 0, void 0, function* () {
    return mn(e, "GET", t, r, n);
  });
}
function it(e, t, r, n, i) {
  return te(this, void 0, void 0, function* () {
    return mn(e, "POST", t, n, i, r);
  });
}
function Es(e, t, r, n, i) {
  return te(this, void 0, void 0, function* () {
    return mn(e, "PUT", t, n, i, r);
  });
}
function rd(e, t, r, n) {
  return te(this, void 0, void 0, function* () {
    return mn(e, "HEAD", t, Object.assign(Object.assign({}, r), { noResolveJson: !0 }), n);
  });
}
function Ys(e, t, r, n, i) {
  return te(this, void 0, void 0, function* () {
    return mn(e, "DELETE", t, n, i, r);
  });
}
class nd {
  constructor(t, r) {
    this.downloadFn = t, this.shouldThrowOnError = r;
  }
  then(t, r) {
    return this.execute().then(t, r);
  }
  execute() {
    return te(this, void 0, void 0, function* () {
      try {
        return {
          data: (yield this.downloadFn()).body,
          error: null
        };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (ke(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
var kc;
class id {
  constructor(t, r) {
    this.downloadFn = t, this.shouldThrowOnError = r, this[kc] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new nd(this.downloadFn, this.shouldThrowOnError);
  }
  then(t, r) {
    return this.getPromise().then(t, r);
  }
  catch(t) {
    return this.getPromise().catch(t);
  }
  finally(t) {
    return this.getPromise().finally(t);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  execute() {
    return te(this, void 0, void 0, function* () {
      try {
        return {
          data: yield (yield this.downloadFn()).blob(),
          error: null
        };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (ke(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
kc = Symbol.toStringTag;
const sd = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, Ua = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class ad {
  constructor(t, r = {}, n, i) {
    this.shouldThrowOnError = !1, this.url = t, this.headers = r, this.bucketId = n, this.fetch = Js(i);
  }
  /**
   * Enable throwing errors instead of returning them.
   *
   * @category File Buckets
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(t, r, n, i) {
    return te(this, void 0, void 0, function* () {
      try {
        let s;
        const a = Object.assign(Object.assign({}, Ua), i);
        let o = Object.assign(Object.assign({}, this.headers), t === "POST" && { "x-upsert": String(a.upsert) });
        const l = a.metadata;
        typeof Blob < "u" && n instanceof Blob ? (s = new FormData(), s.append("cacheControl", a.cacheControl), l && s.append("metadata", this.encodeMetadata(l)), s.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (s = n, s.has("cacheControl") || s.append("cacheControl", a.cacheControl), l && !s.has("metadata") && s.append("metadata", this.encodeMetadata(l))) : (s = n, o["cache-control"] = `max-age=${a.cacheControl}`, o["content-type"] = a.contentType, l && (o["x-metadata"] = this.toBase64(this.encodeMetadata(l))), (typeof ReadableStream < "u" && s instanceof ReadableStream || s && typeof s == "object" && "pipe" in s && typeof s.pipe == "function") && !a.duplex && (a.duplex = "half")), i?.headers && (o = Object.assign(Object.assign({}, o), i.headers));
        const c = this._removeEmptyFolders(r), u = this._getFinalPath(c), d = yield (t == "PUT" ? Es : it)(this.fetch, `${this.url}/object/${u}`, s, Object.assign({ headers: o }, a?.duplex ? { duplex: a.duplex } : {}));
        return {
          data: { path: c, id: d.Id, fullPath: d.Key },
          error: null
        };
      } catch (s) {
        if (this.shouldThrowOnError)
          throw s;
        if (ke(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @category File Buckets
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
   * @returns Promise with response containing file path, id, and fullPath or error
   *
   * @example Upload file
   * ```js
   * const avatarFile = event.target.files[0]
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .upload('public/avatar1.png', avatarFile, {
   *     cacheControl: '3600',
   *     upsert: false
   *   })
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "path": "public/avatar1.png",
   *     "fullPath": "avatars/public/avatar1.png"
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Upload file using `ArrayBuffer` from base64 file data
   * ```js
   * import { decode } from 'base64-arraybuffer'
   *
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .upload('public/avatar1.png', decode('base64FileData'), {
   *     contentType: 'image/png'
   *   })
   * ```
   */
  upload(t, r, n) {
    return te(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", t, r, n);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   *
   * @category File Buckets
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   * @param fileOptions Optional file upload options including cacheControl and contentType.
   * @returns Promise with response containing file path and fullPath or error
   *
   * @example Upload to a signed URL
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .uploadToSignedUrl('folder/cat.jpg', 'token-from-createSignedUploadUrl', file)
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "path": "folder/cat.jpg",
   *     "fullPath": "avatars/folder/cat.jpg"
   *   },
   *   "error": null
   * }
   * ```
   */
  uploadToSignedUrl(t, r, n, i) {
    return te(this, void 0, void 0, function* () {
      const s = this._removeEmptyFolders(t), a = this._getFinalPath(s), o = new URL(this.url + `/object/upload/sign/${a}`);
      o.searchParams.set("token", r);
      try {
        let l;
        const c = Object.assign({ upsert: Ua.upsert }, i), u = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(c.upsert) });
        typeof Blob < "u" && n instanceof Blob ? (l = new FormData(), l.append("cacheControl", c.cacheControl), l.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (l = n, l.append("cacheControl", c.cacheControl)) : (l = n, u["cache-control"] = `max-age=${c.cacheControl}`, u["content-type"] = c.contentType);
        const d = yield Es(this.fetch, o.toString(), l, { headers: u });
        return {
          data: { path: s, fullPath: d.Key },
          error: null
        };
      } catch (l) {
        if (this.shouldThrowOnError)
          throw l;
        if (ke(l))
          return { data: null, error: l };
        throw l;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   *
   * @category File Buckets
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   * @returns Promise with response containing signed upload URL, token, and path or error
   *
   * @example Create Signed Upload URL
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .createSignedUploadUrl('folder/cat.jpg')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "signedUrl": "https://example.supabase.co/storage/v1/object/upload/sign/avatars/folder/cat.jpg?token=<TOKEN>",
   *     "path": "folder/cat.jpg",
   *     "token": "<TOKEN>"
   *   },
   *   "error": null
   * }
   * ```
   */
  createSignedUploadUrl(t, r) {
    return te(this, void 0, void 0, function* () {
      try {
        let n = this._getFinalPath(t);
        const i = Object.assign({}, this.headers);
        r?.upsert && (i["x-upsert"] = "true");
        const s = yield it(this.fetch, `${this.url}/object/upload/sign/${n}`, {}, { headers: i }), a = new URL(this.url + s.url), o = a.searchParams.get("token");
        if (!o)
          throw new gi("No token returned by API");
        return { data: { signedUrl: a.toString(), path: t, token: o }, error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (ke(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @category File Buckets
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
   * @returns Promise with response containing file path, id, and fullPath or error
   *
   * @example Update file
   * ```js
   * const avatarFile = event.target.files[0]
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .update('public/avatar1.png', avatarFile, {
   *     cacheControl: '3600',
   *     upsert: true
   *   })
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "path": "public/avatar1.png",
   *     "fullPath": "avatars/public/avatar1.png"
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Update file using `ArrayBuffer` from base64 file data
   * ```js
   * import {decode} from 'base64-arraybuffer'
   *
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .update('public/avatar1.png', decode('base64FileData'), {
   *     contentType: 'image/png'
   *   })
   * ```
   */
  update(t, r, n) {
    return te(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", t, r, n);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @category File Buckets
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   * @returns Promise with response containing success message or error
   *
   * @example Move file
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .move('public/avatar1.png', 'private/avatar2.png')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "message": "Successfully moved"
   *   },
   *   "error": null
   * }
   * ```
   */
  move(t, r, n) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: yield it(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: t,
          destinationKey: r,
          destinationBucket: n?.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (i) {
        if (this.shouldThrowOnError)
          throw i;
        if (ke(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @category File Buckets
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   * @returns Promise with response containing copied file path or error
   *
   * @example Copy file
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .copy('public/avatar1.png', 'private/avatar2.png')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "path": "avatars/private/avatar2.png"
   *   },
   *   "error": null
   * }
   * ```
   */
  copy(t, r, n) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield it(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: t,
          destinationKey: r,
          destinationBucket: n?.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (i) {
        if (this.shouldThrowOnError)
          throw i;
        if (ke(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @category File Buckets
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   * @returns Promise with response containing signed URL or error
   *
   * @example Create Signed URL
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .createSignedUrl('folder/avatar1.png', 60)
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Create a signed URL for an asset with transformations
   * ```js
   * const { data } = await supabase
   *   .storage
   *   .from('avatars')
   *   .createSignedUrl('folder/avatar1.png', 60, {
   *     transform: {
   *       width: 100,
   *       height: 100,
   *     }
   *   })
   * ```
   *
   * @example Create a signed URL which triggers the download of the asset
   * ```js
   * const { data } = await supabase
   *   .storage
   *   .from('avatars')
   *   .createSignedUrl('folder/avatar1.png', 60, {
   *     download: true,
   *   })
   * ```
   */
  createSignedUrl(t, r, n) {
    return te(this, void 0, void 0, function* () {
      try {
        let i = this._getFinalPath(t), s = yield it(this.fetch, `${this.url}/object/sign/${i}`, Object.assign({ expiresIn: r }, n?.transform ? { transform: n.transform } : {}), { headers: this.headers });
        const a = n?.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
        return s = { signedUrl: encodeURI(`${this.url}${s.signedURL}${a}`) }, { data: s, error: null };
      } catch (i) {
        if (this.shouldThrowOnError)
          throw i;
        if (ke(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @category File Buckets
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @returns Promise with response containing array of objects with signedUrl, path, and error or error
   *
   * @example Create Signed URLs
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .createSignedUrls(['folder/avatar1.png', 'folder/avatar2.png'], 60)
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": [
   *     {
   *       "error": null,
   *       "path": "folder/avatar1.png",
   *       "signedURL": "/object/sign/avatars/folder/avatar1.png?token=<TOKEN>",
   *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
   *     },
   *     {
   *       "error": null,
   *       "path": "folder/avatar2.png",
   *       "signedURL": "/object/sign/avatars/folder/avatar2.png?token=<TOKEN>",
   *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar2.png?token=<TOKEN>"
   *     }
   *   ],
   *   "error": null
   * }
   * ```
   */
  createSignedUrls(t, r, n) {
    return te(this, void 0, void 0, function* () {
      try {
        const i = yield it(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: r, paths: t }, { headers: this.headers }), s = n?.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
        return {
          data: i.map((a) => Object.assign(Object.assign({}, a), { signedUrl: a.signedURL ? encodeURI(`${this.url}${a.signedURL}${s}`) : null })),
          error: null
        };
      } catch (i) {
        if (this.shouldThrowOnError)
          throw i;
        if (ke(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @category File Buckets
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   * @returns BlobDownloadBuilder instance for downloading the file
   *
   * @example Download file
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .download('folder/avatar1.png')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": <BLOB>,
   *   "error": null
   * }
   * ```
   *
   * @example Download file with transformations
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .download('folder/avatar1.png', {
   *     transform: {
   *       width: 100,
   *       height: 100,
   *       quality: 80
   *     }
   *   })
   * ```
   */
  download(t, r) {
    const i = typeof r?.transform < "u" ? "render/image/authenticated" : "object", s = this.transformOptsToQueryString(r?.transform || {}), a = s ? `?${s}` : "", o = this._getFinalPath(t), l = () => tn(this.fetch, `${this.url}/${i}/${o}${a}`, {
      headers: this.headers,
      noResolveJson: !0
    });
    return new id(l, this.shouldThrowOnError);
  }
  /**
   * Retrieves the details of an existing file.
   *
   * @category File Buckets
   * @param path The file path, including the file name. For example `folder/image.png`.
   * @returns Promise with response containing file metadata or error
   *
   * @example Get file info
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .info('folder/avatar1.png')
   * ```
   */
  info(t) {
    return te(this, void 0, void 0, function* () {
      const r = this._getFinalPath(t);
      try {
        const n = yield tn(this.fetch, `${this.url}/object/info/${r}`, {
          headers: this.headers
        });
        return { data: ks(n), error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (ke(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Checks the existence of a file.
   *
   * @category File Buckets
   * @param path The file path, including the file name. For example `folder/image.png`.
   * @returns Promise with response containing boolean indicating file existence or error
   *
   * @example Check file existence
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .exists('folder/avatar1.png')
   * ```
   */
  exists(t) {
    return te(this, void 0, void 0, function* () {
      const r = this._getFinalPath(t);
      try {
        return yield rd(this.fetch, `${this.url}/object/${r}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (ke(n) && n instanceof ys) {
          const i = n.originalError;
          if ([400, 404].includes(i?.status))
            return { data: !1, error: n };
        }
        throw n;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @category File Buckets
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   * @returns Object with public URL
   *
   * @example Returns the URL for an asset in a public bucket
   * ```js
   * const { data } = supabase
   *   .storage
   *   .from('public-bucket')
   *   .getPublicUrl('folder/avatar1.png')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "publicUrl": "https://example.supabase.co/storage/v1/object/public/public-bucket/folder/avatar1.png"
   *   }
   * }
   * ```
   *
   * @example Returns the URL for an asset in a public bucket with transformations
   * ```js
   * const { data } = supabase
   *   .storage
   *   .from('public-bucket')
   *   .getPublicUrl('folder/avatar1.png', {
   *     transform: {
   *       width: 100,
   *       height: 100,
   *     }
   *   })
   * ```
   *
   * @example Returns the URL which triggers the download of an asset in a public bucket
   * ```js
   * const { data } = supabase
   *   .storage
   *   .from('public-bucket')
   *   .getPublicUrl('folder/avatar1.png', {
   *     download: true,
   *   })
   * ```
   */
  getPublicUrl(t, r) {
    const n = this._getFinalPath(t), i = [], s = r?.download ? `download=${r.download === !0 ? "" : r.download}` : "";
    s !== "" && i.push(s);
    const o = typeof r?.transform < "u" ? "render/image" : "object", l = this.transformOptsToQueryString(r?.transform || {});
    l !== "" && i.push(l);
    let c = i.join("&");
    return c !== "" && (c = `?${c}`), {
      data: { publicUrl: encodeURI(`${this.url}/${o}/public/${n}${c}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @category File Buckets
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   * @returns Promise with response containing array of deleted file objects or error
   *
   * @example Delete file
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .remove(['folder/avatar1.png'])
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": [],
   *   "error": null
   * }
   * ```
   */
  remove(t) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: yield Ys(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: t }, { headers: this.headers }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (ke(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files and folders within a path of the bucket.
   *
   * @category File Buckets
   * @param path The folder path.
   * @param options Search options including limit (defaults to 100), offset, sortBy, and search
   * @param parameters Optional fetch parameters including signal for cancellation
   * @returns Promise with response containing array of files or error
   *
   * @example List files in a bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .list('folder', {
   *     limit: 100,
   *     offset: 0,
   *     sortBy: { column: 'name', order: 'asc' },
   *   })
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": [
   *     {
   *       "name": "avatar1.png",
   *       "id": "e668cf7f-821b-4a2f-9dce-7dfa5dd1cfd2",
   *       "updated_at": "2024-05-22T23:06:05.580Z",
   *       "created_at": "2024-05-22T23:04:34.443Z",
   *       "last_accessed_at": "2024-05-22T23:04:34.443Z",
   *       "metadata": {
   *         "eTag": "\"c5e8c553235d9af30ef4f6e280790b92\"",
   *         "size": 32175,
   *         "mimetype": "image/png",
   *         "cacheControl": "max-age=3600",
   *         "lastModified": "2024-05-22T23:06:05.574Z",
   *         "contentLength": 32175,
   *         "httpStatusCode": 200
   *       }
   *     }
   *   ],
   *   "error": null
   * }
   * ```
   *
   * @example Search files in a bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .list('folder', {
   *     limit: 100,
   *     offset: 0,
   *     sortBy: { column: 'name', order: 'asc' },
   *     search: 'jon'
   *   })
   * ```
   */
  list(t, r, n) {
    return te(this, void 0, void 0, function* () {
      try {
        const i = Object.assign(Object.assign(Object.assign({}, sd), r), { prefix: t || "" });
        return { data: yield it(this.fetch, `${this.url}/object/list/${this.bucketId}`, i, { headers: this.headers }, n), error: null };
      } catch (i) {
        if (this.shouldThrowOnError)
          throw i;
        if (ke(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * @experimental this method signature might change in the future
   *
   * @category File Buckets
   * @param options search options
   * @param parameters
   */
  listV2(t, r) {
    return te(this, void 0, void 0, function* () {
      try {
        const n = Object.assign({}, t);
        return { data: yield it(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, n, { headers: this.headers }, r), error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (ke(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  encodeMetadata(t) {
    return JSON.stringify(t);
  }
  toBase64(t) {
    return typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t);
  }
  _getFinalPath(t) {
    return `${this.bucketId}/${t.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(t) {
    return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(t) {
    const r = [];
    return t.width && r.push(`width=${t.width}`), t.height && r.push(`height=${t.height}`), t.resize && r.push(`resize=${t.resize}`), t.format && r.push(`format=${t.format}`), t.quality && r.push(`quality=${t.quality}`), r.join("&");
  }
}
const Ec = "2.86.0", xc = {
  "X-Client-Info": `storage-js/${Ec}`
};
class od {
  constructor(t, r = {}, n, i) {
    this.shouldThrowOnError = !1;
    const s = new URL(t);
    i?.useNewHostname && /supabase\.(co|in|red)$/.test(s.hostname) && !s.hostname.includes("storage.supabase.") && (s.hostname = s.hostname.replace("supabase.", "storage.supabase.")), this.url = s.href.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, xc), r), this.fetch = Js(n);
  }
  /**
   * Enable throwing errors instead of returning them.
   *
   * @category File Buckets
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   *
   * @category File Buckets
   * @param options Query parameters for listing buckets
   * @param options.limit Maximum number of buckets to return
   * @param options.offset Number of buckets to skip
   * @param options.sortColumn Column to sort by ('id', 'name', 'created_at', 'updated_at')
   * @param options.sortOrder Sort order ('asc' or 'desc')
   * @param options.search Search term to filter bucket names
   * @returns Promise with response containing array of buckets or error
   *
   * @example List buckets
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .listBuckets()
   * ```
   *
   * @example List buckets with options
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .listBuckets({
   *     limit: 10,
   *     offset: 0,
   *     sortColumn: 'created_at',
   *     sortOrder: 'desc',
   *     search: 'prod'
   *   })
   * ```
   */
  listBuckets(t) {
    return te(this, void 0, void 0, function* () {
      try {
        const r = this.listBucketOptionsToQueryString(t);
        return { data: yield tn(this.fetch, `${this.url}/bucket${r}`, {
          headers: this.headers
        }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (ke(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @category File Buckets
   * @param id The unique identifier of the bucket you would like to retrieve.
   * @returns Promise with response containing bucket details or error
   *
   * @example Get bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .getBucket('avatars')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "id": "avatars",
   *     "name": "avatars",
   *     "owner": "",
   *     "public": false,
   *     "file_size_limit": 1024,
   *     "allowed_mime_types": [
   *       "image/png"
   *     ],
   *     "created_at": "2024-05-22T22:26:05.100Z",
   *     "updated_at": "2024-05-22T22:26:05.100Z"
   *   },
   *   "error": null
   * }
   * ```
   */
  getBucket(t) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: yield tn(this.fetch, `${this.url}/bucket/${t}`, { headers: this.headers }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (ke(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @category File Buckets
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
   *   - default bucket type is `STANDARD`
   * @returns Promise with response containing newly created bucket name or error
   *
   * @example Create bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .createBucket('avatars', {
   *     public: false,
   *     allowedMimeTypes: ['image/png'],
   *     fileSizeLimit: 1024
   *   })
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "name": "avatars"
   *   },
   *   "error": null
   * }
   * ```
   */
  createBucket(t) {
    return te(this, arguments, void 0, function* (r, n = {
      public: !1
    }) {
      try {
        return { data: yield it(this.fetch, `${this.url}/bucket`, {
          id: r,
          name: r,
          type: n.type,
          public: n.public,
          file_size_limit: n.fileSizeLimit,
          allowed_mime_types: n.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (i) {
        if (this.shouldThrowOnError)
          throw i;
        if (ke(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @category File Buckets
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns Promise with response containing success message or error
   *
   * @example Update bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .updateBucket('avatars', {
   *     public: false,
   *     allowedMimeTypes: ['image/png'],
   *     fileSizeLimit: 1024
   *   })
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "message": "Successfully updated"
   *   },
   *   "error": null
   * }
   * ```
   */
  updateBucket(t, r) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: yield Es(this.fetch, `${this.url}/bucket/${t}`, {
          id: t,
          name: t,
          public: r.public,
          file_size_limit: r.fileSizeLimit,
          allowed_mime_types: r.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (ke(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @category File Buckets
   * @param id The unique identifier of the bucket you would like to empty.
   * @returns Promise with success message or error
   *
   * @example Empty bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .emptyBucket('avatars')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "message": "Successfully emptied"
   *   },
   *   "error": null
   * }
   * ```
   */
  emptyBucket(t) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: yield it(this.fetch, `${this.url}/bucket/${t}/empty`, {}, { headers: this.headers }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (ke(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @category File Buckets
   * @param id The unique identifier of the bucket you would like to delete.
   * @returns Promise with success message or error
   *
   * @example Delete bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .deleteBucket('avatars')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "message": "Successfully deleted"
   *   },
   *   "error": null
   * }
   * ```
   */
  deleteBucket(t) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: yield Ys(this.fetch, `${this.url}/bucket/${t}`, {}, { headers: this.headers }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (ke(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  listBucketOptionsToQueryString(t) {
    const r = {};
    return t && ("limit" in t && (r.limit = String(t.limit)), "offset" in t && (r.offset = String(t.offset)), t.search && (r.search = t.search), t.sortColumn && (r.sortColumn = t.sortColumn), t.sortOrder && (r.sortOrder = t.sortOrder)), Object.keys(r).length > 0 ? "?" + new URLSearchParams(r).toString() : "";
  }
}
var rn = class extends Error {
  constructor(e, t) {
    super(e), this.name = "IcebergError", this.status = t.status, this.icebergType = t.icebergType, this.icebergCode = t.icebergCode, this.details = t.details, this.isCommitStateUnknown = t.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(t.status) && t.icebergType?.includes("CommitState") === !0;
  }
  /**
   * Returns true if the error is a 404 Not Found error.
   */
  isNotFound() {
    return this.status === 404;
  }
  /**
   * Returns true if the error is a 409 Conflict error.
   */
  isConflict() {
    return this.status === 409;
  }
  /**
   * Returns true if the error is a 419 Authentication Timeout error.
   */
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function ld(e, t, r) {
  const n = new URL(t, e);
  if (r)
    for (const [i, s] of Object.entries(r))
      s !== void 0 && n.searchParams.set(i, s);
  return n.toString();
}
async function cd(e) {
  return !e || e.type === "none" ? {} : e.type === "bearer" ? { Authorization: `Bearer ${e.token}` } : e.type === "header" ? { [e.name]: e.value } : e.type === "custom" ? await e.getHeaders() : {};
}
function ud(e) {
  const t = e.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: r,
      path: n,
      query: i,
      body: s,
      headers: a
    }) {
      const o = ld(e.baseUrl, n, i), l = await cd(e.auth), c = await t(o, {
        method: r,
        headers: {
          ...s ? { "Content-Type": "application/json" } : {},
          ...l,
          ...a
        },
        body: s ? JSON.stringify(s) : void 0
      }), u = await c.text(), d = (c.headers.get("content-type") || "").includes("application/json"), f = d && u ? JSON.parse(u) : u;
      if (!c.ok) {
        const h = d ? f : void 0, g = h?.error;
        throw new rn(
          g?.message ?? `Request failed with status ${c.status}`,
          {
            status: c.status,
            icebergType: g?.type,
            icebergCode: g?.code,
            details: h
          }
        );
      }
      return { status: c.status, headers: c.headers, data: f };
    }
  };
}
function Nn(e) {
  return e.join("");
}
var hd = class {
  constructor(e, t = "") {
    this.client = e, this.prefix = t;
  }
  async listNamespaces(e) {
    const t = e ? { parent: Nn(e.namespace) } : void 0;
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query: t
    })).data.namespaces.map((n) => ({ namespace: n }));
  }
  async createNamespace(e, t) {
    const r = {
      namespace: e.namespace,
      properties: t?.properties
    };
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces`,
      body: r
    })).data;
  }
  async dropNamespace(e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Nn(e.namespace)}`
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${Nn(e.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(e) {
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Nn(e.namespace)}`
      }), !0;
    } catch (t) {
      if (t instanceof rn && t.status === 404)
        return !1;
      throw t;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (r) {
      if (r instanceof rn && r.status === 409)
        return;
      throw r;
    }
  }
};
function or(e) {
  return e.join("");
}
var dd = class {
  constructor(e, t = "", r) {
    this.client = e, this.prefix = t, this.accessDelegation = r;
  }
  async listTables(e) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${or(e.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(e, t) {
    const r = {};
    return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${or(e.namespace)}/tables`,
      body: t,
      headers: r
    })).data.metadata;
  }
  async updateTable(e, t) {
    const r = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${or(e.namespace)}/tables/${e.name}`,
      body: t
    });
    return {
      "metadata-location": r.data["metadata-location"],
      metadata: r.data.metadata
    };
  }
  async dropTable(e, t) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${or(e.namespace)}/tables/${e.name}`,
      query: { purgeRequested: String(t?.purge ?? !1) }
    });
  }
  async loadTable(e) {
    const t = {};
    return this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${or(e.namespace)}/tables/${e.name}`,
      headers: t
    })).data.metadata;
  }
  async tableExists(e) {
    const t = {};
    this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${or(e.namespace)}/tables/${e.name}`,
        headers: t
      }), !0;
    } catch (r) {
      if (r instanceof rn && r.status === 404)
        return !1;
      throw r;
    }
  }
  async createTableIfNotExists(e, t) {
    try {
      return await this.createTable(e, t);
    } catch (r) {
      if (r instanceof rn && r.status === 409)
        return await this.loadTable({ namespace: e.namespace, name: t.name });
      throw r;
    }
  }
}, fd = class {
  /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */
  constructor(e) {
    let t = "v1";
    e.catalogName && (t += `/${e.catalogName}`);
    const r = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
    this.client = ud({
      baseUrl: r,
      auth: e.auth,
      fetchImpl: e.fetch
    }), this.accessDelegation = e.accessDelegation?.join(","), this.namespaceOps = new hd(this.client, t), this.tableOps = new dd(this.client, t, this.accessDelegation);
  }
  /**
   * Lists all namespaces in the catalog.
   *
   * @param parent - Optional parent namespace to list children under
   * @returns Array of namespace identifiers
   *
   * @example
   * ```typescript
   * // List all top-level namespaces
   * const namespaces = await catalog.listNamespaces();
   *
   * // List namespaces under a parent
   * const children = await catalog.listNamespaces({ namespace: ['analytics'] });
   * ```
   */
  async listNamespaces(e) {
    return this.namespaceOps.listNamespaces(e);
  }
  /**
   * Creates a new namespace in the catalog.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespace(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * console.log(response.namespace); // ['analytics']
   * console.log(response.properties); // { owner: 'data-team', ... }
   * ```
   */
  async createNamespace(e, t) {
    return this.namespaceOps.createNamespace(e, t);
  }
  /**
   * Drops a namespace from the catalog.
   *
   * The namespace must be empty (contain no tables) before it can be dropped.
   *
   * @param id - Namespace identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropNamespace({ namespace: ['analytics'] });
   * ```
   */
  async dropNamespace(e) {
    await this.namespaceOps.dropNamespace(e);
  }
  /**
   * Loads metadata for a namespace.
   *
   * @param id - Namespace identifier to load
   * @returns Namespace metadata including properties
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadNamespaceMetadata({ namespace: ['analytics'] });
   * console.log(metadata.properties);
   * ```
   */
  async loadNamespaceMetadata(e) {
    return this.namespaceOps.loadNamespaceMetadata(e);
  }
  /**
   * Lists all tables in a namespace.
   *
   * @param namespace - Namespace identifier to list tables from
   * @returns Array of table identifiers
   *
   * @example
   * ```typescript
   * const tables = await catalog.listTables({ namespace: ['analytics'] });
   * console.log(tables); // [{ namespace: ['analytics'], name: 'events' }, ...]
   * ```
   */
  async listTables(e) {
    return this.tableOps.listTables(e);
  }
  /**
   * Creates a new table in the catalog.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTable(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: [
   *         { source_id: 2, field_id: 1000, name: 'ts_day', transform: 'day' }
   *       ]
   *     }
   *   }
   * );
   * ```
   */
  async createTable(e, t) {
    return this.tableOps.createTable(e, t);
  }
  /**
   * Updates an existing table's metadata.
   *
   * Can update the schema, partition spec, or properties of a table.
   *
   * @param id - Table identifier to update
   * @param request - Update request with fields to modify
   * @returns Response containing the metadata location and updated table metadata
   *
   * @example
   * ```typescript
   * const response = await catalog.updateTable(
   *   { namespace: ['analytics'], name: 'events' },
   *   {
   *     properties: { 'read.split.target-size': '134217728' }
   *   }
   * );
   * console.log(response['metadata-location']); // s3://...
   * console.log(response.metadata); // TableMetadata object
   * ```
   */
  async updateTable(e, t) {
    return this.tableOps.updateTable(e, t);
  }
  /**
   * Drops a table from the catalog.
   *
   * @param id - Table identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropTable({ namespace: ['analytics'], name: 'events' });
   * ```
   */
  async dropTable(e, t) {
    await this.tableOps.dropTable(e, t);
  }
  /**
   * Loads metadata for a table.
   *
   * @param id - Table identifier to load
   * @returns Table metadata including schema, partition spec, location, etc.
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadTable({ namespace: ['analytics'], name: 'events' });
   * console.log(metadata.schema);
   * console.log(metadata.location);
   * ```
   */
  async loadTable(e) {
    return this.tableOps.loadTable(e);
  }
  /**
   * Checks if a namespace exists in the catalog.
   *
   * @param id - Namespace identifier to check
   * @returns True if the namespace exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.namespaceExists({ namespace: ['analytics'] });
   * console.log(exists); // true or false
   * ```
   */
  async namespaceExists(e) {
    return this.namespaceOps.namespaceExists(e);
  }
  /**
   * Checks if a table exists in the catalog.
   *
   * @param id - Table identifier to check
   * @returns True if the table exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.tableExists({ namespace: ['analytics'], name: 'events' });
   * console.log(exists); // true or false
   * ```
   */
  async tableExists(e) {
    return this.tableOps.tableExists(e);
  }
  /**
   * Creates a namespace if it does not exist.
   *
   * If the namespace already exists, returns void. If created, returns the response.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties, or void if it already exists
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespaceIfNotExists(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * if (response) {
   *   console.log('Created:', response.namespace);
   * } else {
   *   console.log('Already exists');
   * }
   * ```
   */
  async createNamespaceIfNotExists(e, t) {
    return this.namespaceOps.createNamespaceIfNotExists(e, t);
  }
  /**
   * Creates a table if it does not exist.
   *
   * If the table already exists, returns its metadata instead.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created or existing table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTableIfNotExists(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     }
   *   }
   * );
   * ```
   */
  async createTableIfNotExists(e, t) {
    return this.tableOps.createTableIfNotExists(e, t);
  }
};
class pd {
  /**
   * @alpha
   *
   * Creates a new StorageAnalyticsClient instance
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Analytics Buckets
   * @param url - The base URL for the storage API
   * @param headers - HTTP headers to include in requests
   * @param fetch - Optional custom fetch implementation
   *
   * @example
   * ```typescript
   * const client = new StorageAnalyticsClient(url, headers)
   * ```
   */
  constructor(t, r = {}, n) {
    this.shouldThrowOnError = !1, this.url = t.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, xc), r), this.fetch = Js(n);
  }
  /**
   * @alpha
   *
   * Enable throwing errors instead of returning them in the response
   * When enabled, failed operations will throw instead of returning { data: null, error }
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Analytics Buckets
   * @returns This instance for method chaining
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * @alpha
   *
   * Creates a new analytics bucket using Iceberg tables
   * Analytics buckets are optimized for analytical queries and data processing
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Analytics Buckets
   * @param name A unique name for the bucket you are creating
   * @returns Promise with response containing newly created analytics bucket or error
   *
   * @example Create analytics bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .analytics
   *   .createBucket('analytics-data')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "name": "analytics-data",
   *     "type": "ANALYTICS",
   *     "format": "iceberg",
   *     "created_at": "2024-05-22T22:26:05.100Z",
   *     "updated_at": "2024-05-22T22:26:05.100Z"
   *   },
   *   "error": null
   * }
   * ```
   */
  createBucket(t) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: yield it(this.fetch, `${this.url}/bucket`, { name: t }, { headers: this.headers }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (ke(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * @alpha
   *
   * Retrieves the details of all Analytics Storage buckets within an existing project
   * Only returns buckets of type 'ANALYTICS'
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Analytics Buckets
   * @param options Query parameters for listing buckets
   * @param options.limit Maximum number of buckets to return
   * @param options.offset Number of buckets to skip
   * @param options.sortColumn Column to sort by ('name', 'created_at', 'updated_at')
   * @param options.sortOrder Sort order ('asc' or 'desc')
   * @param options.search Search term to filter bucket names
   * @returns Promise with response containing array of analytics buckets or error
   *
   * @example List analytics buckets
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .analytics
   *   .listBuckets({
   *     limit: 10,
   *     offset: 0,
   *     sortColumn: 'created_at',
   *     sortOrder: 'desc'
   *   })
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": [
   *     {
   *       "name": "analytics-data",
   *       "type": "ANALYTICS",
   *       "format": "iceberg",
   *       "created_at": "2024-05-22T22:26:05.100Z",
   *       "updated_at": "2024-05-22T22:26:05.100Z"
   *     }
   *   ],
   *   "error": null
   * }
   * ```
   */
  listBuckets(t) {
    return te(this, void 0, void 0, function* () {
      try {
        const r = new URLSearchParams();
        t?.limit !== void 0 && r.set("limit", t.limit.toString()), t?.offset !== void 0 && r.set("offset", t.offset.toString()), t?.sortColumn && r.set("sortColumn", t.sortColumn), t?.sortOrder && r.set("sortOrder", t.sortOrder), t?.search && r.set("search", t.search);
        const n = r.toString(), i = n ? `${this.url}/bucket?${n}` : `${this.url}/bucket`;
        return { data: yield tn(this.fetch, i, { headers: this.headers }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (ke(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * @alpha
   *
   * Deletes an existing analytics bucket
   * A bucket can't be deleted with existing objects inside it
   * You must first empty the bucket before deletion
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Analytics Buckets
   * @param bucketName The unique identifier of the bucket you would like to delete
   * @returns Promise with response containing success message or error
   *
   * @example Delete analytics bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .analytics
   *   .deleteBucket('analytics-data')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "message": "Successfully deleted"
   *   },
   *   "error": null
   * }
   * ```
   */
  deleteBucket(t) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: yield Ys(this.fetch, `${this.url}/bucket/${t}`, {}, { headers: this.headers }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (ke(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * @alpha
   *
   * Get an Iceberg REST Catalog client configured for a specific analytics bucket
   * Use this to perform advanced table and namespace operations within the bucket
   * The returned client provides full access to the Apache Iceberg REST Catalog API
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Analytics Buckets
   * @param bucketName - The name of the analytics bucket (warehouse) to connect to
   * @returns Configured IcebergRestCatalog instance for advanced Iceberg operations
   *
   * @example Get catalog and create table
   * ```js
   * // First, create an analytics bucket
   * const { data: bucket, error: bucketError } = await supabase
   *   .storage
   *   .analytics
   *   .createBucket('analytics-data')
   *
   * // Get the Iceberg catalog for that bucket
   * const catalog = supabase.storage.analytics.from('analytics-data')
   *
   * // Create a namespace
   * await catalog.createNamespace({ namespace: ['default'] })
   *
   * // Create a table with schema
   * await catalog.createTable(
   *   { namespace: ['default'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true },
   *         { id: 3, name: 'user_id', type: 'string', required: false }
   *       ],
   *       'schema-id': 0,
   *       'identifier-field-ids': [1]
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: []
   *     },
   *     'write-order': {
   *       'order-id': 0,
   *       fields: []
   *     },
   *     properties: {
   *       'write.format.default': 'parquet'
   *     }
   *   }
   * )
   * ```
   *
   * @example List tables in namespace
   * ```js
   * const catalog = supabase.storage.analytics.from('analytics-data')
   *
   * // List all tables in the default namespace
   * const tables = await catalog.listTables({ namespace: ['default'] })
   * console.log(tables) // [{ namespace: ['default'], name: 'events' }]
   * ```
   *
   * @example Working with namespaces
   * ```js
   * const catalog = supabase.storage.analytics.from('analytics-data')
   *
   * // List all namespaces
   * const namespaces = await catalog.listNamespaces()
   *
   * // Create namespace with properties
   * await catalog.createNamespace(
   *   { namespace: ['production'] },
   *   { properties: { owner: 'data-team', env: 'prod' } }
   * )
   * ```
   *
   * @example Cleanup operations
   * ```js
   * const catalog = supabase.storage.analytics.from('analytics-data')
   *
   * // Drop table with purge option (removes all data)
   * await catalog.dropTable(
   *   { namespace: ['default'], name: 'events' },
   *   { purge: true }
   * )
   *
   * // Drop namespace (must be empty)
   * await catalog.dropNamespace({ namespace: ['default'] })
   * ```
   *
   * @example Error handling with catalog operations
   * ```js
   * import { IcebergError } from 'iceberg-js'
   *
   * const catalog = supabase.storage.analytics.from('analytics-data')
   *
   * try {
   *   await catalog.dropTable({ namespace: ['default'], name: 'events' }, { purge: true })
   * } catch (error) {
   *   // Handle 404 errors (resource not found)
   *   const is404 =
   *     (error instanceof IcebergError && error.status === 404) ||
   *     error?.status === 404 ||
   *     error?.details?.error?.code === 404
   *
   *   if (is404) {
   *     console.log('Table does not exist')
   *   } else {
   *     throw error // Re-throw other errors
   *   }
   * }
   * ```
   *
   * @remarks
   * This method provides a bridge between Supabase's bucket management and the standard
   * Apache Iceberg REST Catalog API. The bucket name maps to the Iceberg warehouse parameter.
   * All authentication and configuration is handled automatically using your Supabase credentials.
   *
   * **Error Handling**: Operations may throw `IcebergError` from the iceberg-js library.
   * Always handle 404 errors gracefully when checking for resource existence.
   *
   * **Cleanup Operations**: When using `dropTable`, the `purge: true` option permanently
   * deletes all table data. Without it, the table is marked as deleted but data remains.
   *
   * **Library Dependency**: The returned catalog is an instance of `IcebergRestCatalog`
   * from iceberg-js. For complete API documentation and advanced usage, refer to the
   * [iceberg-js documentation](https://supabase.github.io/iceberg-js/).
   *
   * For advanced Iceberg operations beyond bucket management, you can also install and use
   * the `iceberg-js` package directly with manual configuration.
   */
  from(t) {
    if (!Qh(t))
      throw new gi("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    return new fd({
      baseUrl: this.url,
      catalogName: t,
      // Maps to the warehouse parameter in Supabase's implementation
      auth: {
        type: "custom",
        getHeaders: () => te(this, void 0, void 0, function* () {
          return this.headers;
        })
      },
      fetch: this.fetch
    });
  }
}
const Xs = {
  "X-Client-Info": `storage-js/${Ec}`,
  "Content-Type": "application/json"
};
class Sc extends Error {
  constructor(t) {
    super(t), this.__isStorageVectorsError = !0, this.name = "StorageVectorsError";
  }
}
function He(e) {
  return typeof e == "object" && e !== null && "__isStorageVectorsError" in e;
}
class Ii extends Sc {
  constructor(t, r, n) {
    super(t), this.name = "StorageVectorsApiError", this.status = r, this.statusCode = n;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}
class gd extends Sc {
  constructor(t, r) {
    super(t), this.name = "StorageVectorsUnknownError", this.originalError = r;
  }
}
var Fa;
(function(e) {
  e.InternalError = "InternalError", e.S3VectorConflictException = "S3VectorConflictException", e.S3VectorNotFoundException = "S3VectorNotFoundException", e.S3VectorBucketNotEmpty = "S3VectorBucketNotEmpty", e.S3VectorMaxBucketsExceeded = "S3VectorMaxBucketsExceeded", e.S3VectorMaxIndexesExceeded = "S3VectorMaxIndexesExceeded";
})(Fa || (Fa = {}));
const Qs = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), md = (e) => {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, La = (e) => e.msg || e.message || e.error_description || e.error || JSON.stringify(e), _d = (e, t, r) => te(void 0, void 0, void 0, function* () {
  if (e && typeof e == "object" && "status" in e && "ok" in e && typeof e.status == "number" && !r?.noResolveJson) {
    const i = e.status || 500, s = e;
    if (typeof s.json == "function")
      s.json().then((a) => {
        const o = a?.statusCode || a?.code || i + "";
        t(new Ii(La(a), i, o));
      }).catch(() => {
        const a = i + "", o = s.statusText || `HTTP ${i} error`;
        t(new Ii(o, i, a));
      });
    else {
      const a = i + "", o = s.statusText || `HTTP ${i} error`;
      t(new Ii(o, i, a));
    }
  } else
    t(new gd(La(e), e));
}), vd = (e, t, r, n) => {
  const i = { method: e, headers: t?.headers || {} };
  return n ? (md(n) ? (i.headers = Object.assign({ "Content-Type": "application/json" }, t?.headers), i.body = JSON.stringify(n)) : i.body = n, Object.assign(Object.assign({}, i), r)) : i;
};
function wd(e, t, r, n, i, s) {
  return te(this, void 0, void 0, function* () {
    return new Promise((a, o) => {
      e(r, vd(t, n, i, s)).then((l) => {
        if (!l.ok)
          throw l;
        if (n?.noResolveJson)
          return l;
        const c = l.headers.get("content-type");
        return !c || !c.includes("application/json") ? {} : l.json();
      }).then((l) => a(l)).catch((l) => _d(l, o, n));
    });
  });
}
function Ke(e, t, r, n, i) {
  return te(this, void 0, void 0, function* () {
    return wd(e, "POST", t, n, i, r);
  });
}
class bd {
  /** Creates a new VectorIndexApi instance */
  constructor(t, r = {}, n) {
    this.shouldThrowOnError = !1, this.url = t.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Xs), r), this.fetch = Qs(n);
  }
  /** Enable throwing errors instead of returning them in the response */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /** Creates a new vector index within a bucket */
  createIndex(t) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: (yield Ke(this.fetch, `${this.url}/CreateIndex`, t, {
          headers: this.headers
        })) || {}, error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (He(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /** Retrieves metadata for a specific vector index */
  getIndex(t, r) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: yield Ke(this.fetch, `${this.url}/GetIndex`, { vectorBucketName: t, indexName: r }, { headers: this.headers }), error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (He(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /** Lists vector indexes within a bucket with optional filtering and pagination */
  listIndexes(t) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: yield Ke(this.fetch, `${this.url}/ListIndexes`, t, {
          headers: this.headers
        }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (He(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /** Deletes a vector index and all its data */
  deleteIndex(t, r) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: (yield Ke(this.fetch, `${this.url}/DeleteIndex`, { vectorBucketName: t, indexName: r }, { headers: this.headers })) || {}, error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (He(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
}
class yd {
  /** Creates a new VectorDataApi instance */
  constructor(t, r = {}, n) {
    this.shouldThrowOnError = !1, this.url = t.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Xs), r), this.fetch = Qs(n);
  }
  /** Enable throwing errors instead of returning them in the response */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /** Inserts or updates vectors in batch (1-500 per request) */
  putVectors(t) {
    return te(this, void 0, void 0, function* () {
      try {
        if (t.vectors.length < 1 || t.vectors.length > 500)
          throw new Error("Vector batch size must be between 1 and 500 items");
        return { data: (yield Ke(this.fetch, `${this.url}/PutVectors`, t, {
          headers: this.headers
        })) || {}, error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (He(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /** Retrieves vectors by their keys in batch */
  getVectors(t) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: yield Ke(this.fetch, `${this.url}/GetVectors`, t, {
          headers: this.headers
        }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (He(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /** Lists vectors in an index with pagination */
  listVectors(t) {
    return te(this, void 0, void 0, function* () {
      try {
        if (t.segmentCount !== void 0) {
          if (t.segmentCount < 1 || t.segmentCount > 16)
            throw new Error("segmentCount must be between 1 and 16");
          if (t.segmentIndex !== void 0 && (t.segmentIndex < 0 || t.segmentIndex >= t.segmentCount))
            throw new Error(`segmentIndex must be between 0 and ${t.segmentCount - 1}`);
        }
        return { data: yield Ke(this.fetch, `${this.url}/ListVectors`, t, {
          headers: this.headers
        }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (He(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /** Queries for similar vectors using approximate nearest neighbor search */
  queryVectors(t) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: yield Ke(this.fetch, `${this.url}/QueryVectors`, t, {
          headers: this.headers
        }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (He(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /** Deletes vectors by their keys in batch (1-500 per request) */
  deleteVectors(t) {
    return te(this, void 0, void 0, function* () {
      try {
        if (t.keys.length < 1 || t.keys.length > 500)
          throw new Error("Keys batch size must be between 1 and 500 items");
        return { data: (yield Ke(this.fetch, `${this.url}/DeleteVectors`, t, {
          headers: this.headers
        })) || {}, error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (He(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
}
class kd {
  /** Creates a new VectorBucketApi instance */
  constructor(t, r = {}, n) {
    this.shouldThrowOnError = !1, this.url = t.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Xs), r), this.fetch = Qs(n);
  }
  /** Enable throwing errors instead of returning them in the response */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /** Creates a new vector bucket */
  createBucket(t) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: (yield Ke(this.fetch, `${this.url}/CreateVectorBucket`, { vectorBucketName: t }, { headers: this.headers })) || {}, error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (He(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /** Retrieves metadata for a specific vector bucket */
  getBucket(t) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: yield Ke(this.fetch, `${this.url}/GetVectorBucket`, { vectorBucketName: t }, { headers: this.headers }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (He(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /** Lists vector buckets with optional filtering and pagination */
  listBuckets() {
    return te(this, arguments, void 0, function* (t = {}) {
      try {
        return { data: yield Ke(this.fetch, `${this.url}/ListVectorBuckets`, t, {
          headers: this.headers
        }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (He(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /** Deletes a vector bucket (must be empty first) */
  deleteBucket(t) {
    return te(this, void 0, void 0, function* () {
      try {
        return { data: (yield Ke(this.fetch, `${this.url}/DeleteVectorBucket`, { vectorBucketName: t }, { headers: this.headers })) || {}, error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (He(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
}
class Ed extends kd {
  /**
   * @alpha
   *
   * Creates a StorageVectorsClient that can manage buckets, indexes, and vectors.
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param url - Base URL of the Storage Vectors REST API.
   * @param options.headers - Optional headers (for example `Authorization`) applied to every request.
   * @param options.fetch - Optional custom `fetch` implementation for non-browser runtimes.
   *
   * @example
   * ```typescript
   * const client = new StorageVectorsClient(url, options)
   * ```
   */
  constructor(t, r = {}) {
    super(t, r.headers || {}, r.fetch);
  }
  /**
   *
   * @alpha
   *
   * Access operations for a specific vector bucket
   * Returns a scoped client for index and vector operations within the bucket
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param vectorBucketName - Name of the vector bucket
   * @returns Bucket-scoped client with index and vector operations
   *
   * @example
   * ```typescript
   * const bucket = supabase.storage.vectors.from('embeddings-prod')
   * ```
   */
  from(t) {
    return new xd(this.url, this.headers, t, this.fetch);
  }
  /**
   *
   * @alpha
   *
   * Creates a new vector bucket
   * Vector buckets are containers for vector indexes and their data
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param vectorBucketName - Unique name for the vector bucket
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const { data, error } = await supabase
   *   .storage
   *   .vectors
   *   .createBucket('embeddings-prod')
   * ```
   */
  createBucket(t) {
    const r = Object.create(null, {
      createBucket: { get: () => super.createBucket }
    });
    return te(this, void 0, void 0, function* () {
      return r.createBucket.call(this, t);
    });
  }
  /**
   *
   * @alpha
   *
   * Retrieves metadata for a specific vector bucket
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param vectorBucketName - Name of the vector bucket
   * @returns Promise with bucket metadata or error
   *
   * @example
   * ```typescript
   * const { data, error } = await supabase
   *   .storage
   *   .vectors
   *   .getBucket('embeddings-prod')
   *
   * console.log('Bucket created:', data?.vectorBucket.creationTime)
   * ```
   */
  getBucket(t) {
    const r = Object.create(null, {
      getBucket: { get: () => super.getBucket }
    });
    return te(this, void 0, void 0, function* () {
      return r.getBucket.call(this, t);
    });
  }
  /**
   *
   * @alpha
   *
   * Lists all vector buckets with optional filtering and pagination
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Optional filters (prefix, maxResults, nextToken)
   * @returns Promise with list of buckets or error
   *
   * @example
   * ```typescript
   * const { data, error } = await supabase
   *   .storage
   *   .vectors
   *   .listBuckets({ prefix: 'embeddings-' })
   *
   * data?.vectorBuckets.forEach(bucket => {
   *   console.log(bucket.vectorBucketName)
   * })
   * ```
   */
  listBuckets() {
    const t = Object.create(null, {
      listBuckets: { get: () => super.listBuckets }
    });
    return te(this, arguments, void 0, function* (r = {}) {
      return t.listBuckets.call(this, r);
    });
  }
  /**
   *
   * @alpha
   *
   * Deletes a vector bucket (bucket must be empty)
   * All indexes must be deleted before deleting the bucket
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param vectorBucketName - Name of the vector bucket to delete
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const { data, error } = await supabase
   *   .storage
   *   .vectors
   *   .deleteBucket('embeddings-old')
   * ```
   */
  deleteBucket(t) {
    const r = Object.create(null, {
      deleteBucket: { get: () => super.deleteBucket }
    });
    return te(this, void 0, void 0, function* () {
      return r.deleteBucket.call(this, t);
    });
  }
}
class xd extends bd {
  /**
   * @alpha
   *
   * Creates a helper that automatically scopes all index operations to the provided bucket.
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @example
   * ```typescript
   * const bucket = supabase.storage.vectors.from('embeddings-prod')
   * ```
   */
  constructor(t, r, n, i) {
    super(t, r, i), this.vectorBucketName = n;
  }
  /**
   *
   * @alpha
   *
   * Creates a new vector index in this bucket
   * Convenience method that automatically includes the bucket name
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Index configuration (vectorBucketName is automatically set)
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const bucket = supabase.storage.vectors.from('embeddings-prod')
   * await bucket.createIndex({
   *   indexName: 'documents-openai',
   *   dataType: 'float32',
   *   dimension: 1536,
   *   distanceMetric: 'cosine',
   *   metadataConfiguration: {
   *     nonFilterableMetadataKeys: ['raw_text']
   *   }
   * })
   * ```
   */
  createIndex(t) {
    const r = Object.create(null, {
      createIndex: { get: () => super.createIndex }
    });
    return te(this, void 0, void 0, function* () {
      return r.createIndex.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName }));
    });
  }
  /**
   *
   * @alpha
   *
   * Lists indexes in this bucket
   * Convenience method that automatically includes the bucket name
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Listing options (vectorBucketName is automatically set)
   * @returns Promise with response containing indexes array and pagination token or error
   *
   * @example
   * ```typescript
   * const bucket = supabase.storage.vectors.from('embeddings-prod')
   * const { data } = await bucket.listIndexes({ prefix: 'documents-' })
   * ```
   */
  listIndexes() {
    const t = Object.create(null, {
      listIndexes: { get: () => super.listIndexes }
    });
    return te(this, arguments, void 0, function* (r = {}) {
      return t.listIndexes.call(this, Object.assign(Object.assign({}, r), { vectorBucketName: this.vectorBucketName }));
    });
  }
  /**
   *
   * @alpha
   *
   * Retrieves metadata for a specific index in this bucket
   * Convenience method that automatically includes the bucket name
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param indexName - Name of the index to retrieve
   * @returns Promise with index metadata or error
   *
   * @example
   * ```typescript
   * const bucket = supabase.storage.vectors.from('embeddings-prod')
   * const { data } = await bucket.getIndex('documents-openai')
   * console.log('Dimension:', data?.index.dimension)
   * ```
   */
  getIndex(t) {
    const r = Object.create(null, {
      getIndex: { get: () => super.getIndex }
    });
    return te(this, void 0, void 0, function* () {
      return r.getIndex.call(this, this.vectorBucketName, t);
    });
  }
  /**
   *
   * @alpha
   *
   * Deletes an index from this bucket
   * Convenience method that automatically includes the bucket name
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param indexName - Name of the index to delete
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const bucket = supabase.storage.vectors.from('embeddings-prod')
   * await bucket.deleteIndex('old-index')
   * ```
   */
  deleteIndex(t) {
    const r = Object.create(null, {
      deleteIndex: { get: () => super.deleteIndex }
    });
    return te(this, void 0, void 0, function* () {
      return r.deleteIndex.call(this, this.vectorBucketName, t);
    });
  }
  /**
   *
   * @alpha
   *
   * Access operations for a specific index within this bucket
   * Returns a scoped client for vector data operations
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param indexName - Name of the index
   * @returns Index-scoped client with vector data operations
   *
   * @example
   * ```typescript
   * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
   *
   * // Insert vectors
   * await index.putVectors({
   *   vectors: [
   *     { key: 'doc-1', data: { float32: [...] }, metadata: { title: 'Intro' } }
   *   ]
   * })
   *
   * // Query similar vectors
   * const { data } = await index.queryVectors({
   *   queryVector: { float32: [...] },
   *   topK: 5
   * })
   * ```
   */
  index(t) {
    return new Sd(this.url, this.headers, this.vectorBucketName, t, this.fetch);
  }
}
class Sd extends yd {
  /**
   *
   * @alpha
   *
   * Creates a helper that automatically scopes all vector operations to the provided bucket/index names.
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @example
   * ```typescript
   * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
   * ```
   */
  constructor(t, r, n, i, s) {
    super(t, r, s), this.vectorBucketName = n, this.indexName = i;
  }
  /**
   *
   * @alpha
   *
   * Inserts or updates vectors in this index
   * Convenience method that automatically includes bucket and index names
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Vector insertion options (bucket and index names automatically set)
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
   * await index.putVectors({
   *   vectors: [
   *     {
   *       key: 'doc-1',
   *       data: { float32: [0.1, 0.2, ...] },
   *       metadata: { title: 'Introduction', page: 1 }
   *     }
   *   ]
   * })
   * ```
   */
  putVectors(t) {
    const r = Object.create(null, {
      putVectors: { get: () => super.putVectors }
    });
    return te(this, void 0, void 0, function* () {
      return r.putVectors.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   *
   * @alpha
   *
   * Retrieves vectors by keys from this index
   * Convenience method that automatically includes bucket and index names
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Vector retrieval options (bucket and index names automatically set)
   * @returns Promise with response containing vectors array or error
   *
   * @example
   * ```typescript
   * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
   * const { data } = await index.getVectors({
   *   keys: ['doc-1', 'doc-2'],
   *   returnMetadata: true
   * })
   * ```
   */
  getVectors(t) {
    const r = Object.create(null, {
      getVectors: { get: () => super.getVectors }
    });
    return te(this, void 0, void 0, function* () {
      return r.getVectors.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   *
   * @alpha
   *
   * Lists vectors in this index with pagination
   * Convenience method that automatically includes bucket and index names
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Listing options (bucket and index names automatically set)
   * @returns Promise with response containing vectors array and pagination token or error
   *
   * @example
   * ```typescript
   * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
   * const { data } = await index.listVectors({
   *   maxResults: 500,
   *   returnMetadata: true
   * })
   * ```
   */
  listVectors() {
    const t = Object.create(null, {
      listVectors: { get: () => super.listVectors }
    });
    return te(this, arguments, void 0, function* (r = {}) {
      return t.listVectors.call(this, Object.assign(Object.assign({}, r), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   *
   * @alpha
   *
   * Queries for similar vectors in this index
   * Convenience method that automatically includes bucket and index names
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Query options (bucket and index names automatically set)
   * @returns Promise with response containing matches array of similar vectors ordered by distance or error
   *
   * @example
   * ```typescript
   * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
   * const { data } = await index.queryVectors({
   *   queryVector: { float32: [0.1, 0.2, ...] },
   *   topK: 5,
   *   filter: { category: 'technical' },
   *   returnDistance: true,
   *   returnMetadata: true
   * })
   * ```
   */
  queryVectors(t) {
    const r = Object.create(null, {
      queryVectors: { get: () => super.queryVectors }
    });
    return te(this, void 0, void 0, function* () {
      return r.queryVectors.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   *
   * @alpha
   *
   * Deletes vectors by keys from this index
   * Convenience method that automatically includes bucket and index names
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Deletion options (bucket and index names automatically set)
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
   * await index.deleteVectors({
   *   keys: ['doc-1', 'doc-2', 'doc-3']
   * })
   * ```
   */
  deleteVectors(t) {
    const r = Object.create(null, {
      deleteVectors: { get: () => super.deleteVectors }
    });
    return te(this, void 0, void 0, function* () {
      return r.deleteVectors.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
}
class Ad extends od {
  /**
   * Creates a client for Storage buckets, files, analytics, and vectors.
   *
   * @category File Buckets
   * @example
   * ```ts
   * import { StorageClient } from '@supabase/storage-js'
   *
   * const storage = new StorageClient('https://xyzcompany.supabase.co/storage/v1', {
   *   apikey: 'public-anon-key',
   * })
   * const avatars = storage.from('avatars')
   * ```
   */
  constructor(t, r = {}, n, i) {
    super(t, r, n, i);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @category File Buckets
   * @param id The bucket id to operate on.
   *
   * @example
   * ```typescript
   * const avatars = supabase.storage.from('avatars')
   * ```
   */
  from(t) {
    return new ad(this.url, this.headers, t, this.fetch);
  }
  /**
   *
   * @alpha
   *
   * Access vector storage operations.
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @returns A StorageVectorsClient instance configured with the current storage settings.
   */
  get vectors() {
    return new Ed(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  /**
   *
   * @alpha
   *
   * Access analytics storage operations using Iceberg tables.
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Analytics Buckets
   * @returns A StorageAnalyticsClient instance configured with the current storage settings.
   */
  get analytics() {
    return new pd(this.url + "/iceberg", this.headers, this.fetch);
  }
}
const Td = "2.86.0";
let Wr = "";
typeof Deno < "u" ? Wr = "deno" : typeof document < "u" ? Wr = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? Wr = "react-native" : Wr = "node";
const Od = { "X-Client-Info": `supabase-js-${Wr}/${Td}` }, Rd = {
  headers: Od
}, Id = {
  schema: "public"
}, Cd = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, Nd = {}, Pd = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), $d = () => Headers, zd = (e, t, r) => {
  const n = Pd(r), i = $d();
  return async (s, a) => {
    var o;
    const l = (o = await t()) !== null && o !== void 0 ? o : e;
    let c = new i(a?.headers);
    return c.has("apikey") || c.set("apikey", e), c.has("Authorization") || c.set("Authorization", `Bearer ${l}`), n(s, Object.assign(Object.assign({}, a), { headers: c }));
  };
};
function jd(e) {
  return e.endsWith("/") ? e : e + "/";
}
function Ud(e, t) {
  var r, n;
  const { db: i, auth: s, realtime: a, global: o } = e, { db: l, auth: c, realtime: u, global: d } = t, f = {
    db: Object.assign(Object.assign({}, l), i),
    auth: Object.assign(Object.assign({}, c), s),
    realtime: Object.assign(Object.assign({}, u), a),
    storage: {},
    global: Object.assign(Object.assign(Object.assign({}, d), o), { headers: Object.assign(Object.assign({}, (r = d?.headers) !== null && r !== void 0 ? r : {}), (n = o?.headers) !== null && n !== void 0 ? n : {}) }),
    accessToken: async () => ""
  };
  return e.accessToken ? f.accessToken = e.accessToken : delete f.accessToken, f;
}
function Fd(e) {
  const t = e?.trim();
  if (!t)
    throw new Error("supabaseUrl is required.");
  if (!t.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(jd(t));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
const Ac = "2.86.0", gr = 30 * 1e3, xs = 3, Ci = xs * gr, Ld = "http://localhost:9999", Bd = "supabase.auth.token", Dd = { "X-Client-Info": `gotrue-js/${Ac}` }, Ss = "X-Supabase-Api-Version", Tc = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, Zd = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, Md = 600 * 1e3;
class nn extends Error {
  constructor(t, r, n) {
    super(t), this.__isAuthError = !0, this.name = "AuthError", this.status = r, this.code = n;
  }
}
function ne(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class Vd extends nn {
  constructor(t, r, n) {
    super(t, r, n), this.name = "AuthApiError", this.status = r, this.code = n;
  }
}
function Wd(e) {
  return ne(e) && e.name === "AuthApiError";
}
class Gt extends nn {
  constructor(t, r) {
    super(t), this.name = "AuthUnknownError", this.originalError = r;
  }
}
class Ft extends nn {
  constructor(t, r, n, i) {
    super(t, n, i), this.name = r, this.status = n;
  }
}
class We extends Ft {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function qd(e) {
  return ne(e) && e.name === "AuthSessionMissingError";
}
class lr extends Ft {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class Pn extends Ft {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class $n extends Ft {
  constructor(t, r = null) {
    super(t, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
function Hd(e) {
  return ne(e) && e.name === "AuthImplicitGrantRedirectError";
}
class Ba extends Ft {
  constructor(t, r = null) {
    super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class As extends Ft {
  constructor(t, r) {
    super(t, "AuthRetryableFetchError", r, void 0);
  }
}
function Ni(e) {
  return ne(e) && e.name === "AuthRetryableFetchError";
}
class Da extends Ft {
  constructor(t, r, n) {
    super(t, "AuthWeakPasswordError", r, "weak_password"), this.reasons = n;
  }
}
class Ts extends Ft {
  constructor(t) {
    super(t, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const ri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Za = ` 	
\r=`.split(""), Kd = (() => {
  const e = new Array(128);
  for (let t = 0; t < e.length; t += 1)
    e[t] = -1;
  for (let t = 0; t < Za.length; t += 1)
    e[Za[t].charCodeAt(0)] = -2;
  for (let t = 0; t < ri.length; t += 1)
    e[ri[t].charCodeAt(0)] = t;
  return e;
})();
function Ma(e, t, r) {
  if (e !== null)
    for (t.queue = t.queue << 8 | e, t.queuedBits += 8; t.queuedBits >= 6; ) {
      const n = t.queue >> t.queuedBits - 6 & 63;
      r(ri[n]), t.queuedBits -= 6;
    }
  else if (t.queuedBits > 0)
    for (t.queue = t.queue << 6 - t.queuedBits, t.queuedBits = 6; t.queuedBits >= 6; ) {
      const n = t.queue >> t.queuedBits - 6 & 63;
      r(ri[n]), t.queuedBits -= 6;
    }
}
function Oc(e, t, r) {
  const n = Kd[e];
  if (n > -1)
    for (t.queue = t.queue << 6 | n, t.queuedBits += 6; t.queuedBits >= 8; )
      r(t.queue >> t.queuedBits - 8 & 255), t.queuedBits -= 8;
  else {
    if (n === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
  }
}
function Va(e) {
  const t = [], r = (a) => {
    t.push(String.fromCodePoint(a));
  }, n = {
    utf8seq: 0,
    codepoint: 0
  }, i = { queue: 0, queuedBits: 0 }, s = (a) => {
    Yd(a, n, r);
  };
  for (let a = 0; a < e.length; a += 1)
    Oc(e.charCodeAt(a), i, s);
  return t.join("");
}
function Gd(e, t) {
  if (e <= 127) {
    t(e);
    return;
  } else if (e <= 2047) {
    t(192 | e >> 6), t(128 | e & 63);
    return;
  } else if (e <= 65535) {
    t(224 | e >> 12), t(128 | e >> 6 & 63), t(128 | e & 63);
    return;
  } else if (e <= 1114111) {
    t(240 | e >> 18), t(128 | e >> 12 & 63), t(128 | e >> 6 & 63), t(128 | e & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
}
function Jd(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    let n = e.charCodeAt(r);
    if (n > 55295 && n <= 56319) {
      const i = (n - 55296) * 1024 & 65535;
      n = (e.charCodeAt(r + 1) - 56320 & 65535 | i) + 65536, r += 1;
    }
    Gd(n, t);
  }
}
function Yd(e, t, r) {
  if (t.utf8seq === 0) {
    if (e <= 127) {
      r(e);
      return;
    }
    for (let n = 1; n < 6; n += 1)
      if ((e >> 7 - n & 1) === 0) {
        t.utf8seq = n;
        break;
      }
    if (t.utf8seq === 2)
      t.codepoint = e & 31;
    else if (t.utf8seq === 3)
      t.codepoint = e & 15;
    else if (t.utf8seq === 4)
      t.codepoint = e & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    t.utf8seq -= 1;
  } else if (t.utf8seq > 0) {
    if (e <= 127)
      throw new Error("Invalid UTF-8 sequence");
    t.codepoint = t.codepoint << 6 | e & 63, t.utf8seq -= 1, t.utf8seq === 0 && r(t.codepoint);
  }
}
function wr(e) {
  const t = [], r = { queue: 0, queuedBits: 0 }, n = (i) => {
    t.push(i);
  };
  for (let i = 0; i < e.length; i += 1)
    Oc(e.charCodeAt(i), r, n);
  return new Uint8Array(t);
}
function Xd(e) {
  const t = [];
  return Jd(e, (r) => t.push(r)), new Uint8Array(t);
}
function Yt(e) {
  const t = [], r = { queue: 0, queuedBits: 0 }, n = (i) => {
    t.push(i);
  };
  return e.forEach((i) => Ma(i, r, n)), Ma(null, r, n), t.join("");
}
function Qd(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function ef() {
  return Symbol("auth-callback");
}
const ze = () => typeof window < "u" && typeof document < "u", Zt = {
  tested: !1,
  writable: !1
}, Rc = () => {
  if (!ze())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Zt.tested)
    return Zt.writable;
  const e = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), Zt.tested = !0, Zt.writable = !0;
  } catch {
    Zt.tested = !0, Zt.writable = !1;
  }
  return Zt.writable;
};
function tf(e) {
  const t = {}, r = new URL(e);
  if (r.hash && r.hash[0] === "#")
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((i, s) => {
        t[s] = i;
      });
    } catch {
    }
  return r.searchParams.forEach((n, i) => {
    t[i] = n;
  }), t;
}
const Ic = (e) => e ? (...t) => e(...t) : (...t) => fetch(...t), rf = (e) => typeof e == "object" && e !== null && "status" in e && "ok" in e && "json" in e && typeof e.json == "function", mr = async (e, t, r) => {
  await e.setItem(t, JSON.stringify(r));
}, Mt = async (e, t) => {
  const r = await e.getItem(t);
  if (!r)
    return null;
  try {
    return JSON.parse(r);
  } catch {
    return r;
  }
}, At = async (e, t) => {
  await e.removeItem(t);
};
class mi {
  constructor() {
    this.promise = new mi.promiseConstructor((t, r) => {
      this.resolve = t, this.reject = r;
    });
  }
}
mi.promiseConstructor = Promise;
function Pi(e) {
  const t = e.split(".");
  if (t.length !== 3)
    throw new Ts("Invalid JWT structure");
  for (let n = 0; n < t.length; n++)
    if (!Zd.test(t[n]))
      throw new Ts("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(Va(t[0])),
    payload: JSON.parse(Va(t[1])),
    signature: wr(t[2]),
    raw: {
      header: t[0],
      payload: t[1]
    }
  };
}
async function nf(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function sf(e, t) {
  return new Promise((n, i) => {
    (async () => {
      for (let s = 0; s < 1 / 0; s++)
        try {
          const a = await e(s);
          if (!t(s, null, a)) {
            n(a);
            return;
          }
        } catch (a) {
          if (!t(s, a)) {
            i(a);
            return;
          }
        }
    })();
  });
}
function af(e) {
  return ("0" + e.toString(16)).substr(-2);
}
function of() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", n = r.length;
    let i = "";
    for (let s = 0; s < 56; s++)
      i += r.charAt(Math.floor(Math.random() * n));
    return i;
  }
  return crypto.getRandomValues(t), Array.from(t, af).join("");
}
async function lf(e) {
  const r = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-256", r), i = new Uint8Array(n);
  return Array.from(i).map((s) => String.fromCharCode(s)).join("");
}
async function cf(e) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e;
  const r = await lf(e);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function cr(e, t, r = !1) {
  const n = of();
  let i = n;
  r && (i += "/PASSWORD_RECOVERY"), await mr(e, `${t}-code-verifier`, i);
  const s = await cf(n);
  return [s, n === s ? "plain" : "s256"];
}
const uf = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function hf(e) {
  const t = e.headers.get(Ss);
  if (!t || !t.match(uf))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function df(e) {
  if (!e)
    throw new Error("Missing exp claim");
  const t = Math.floor(Date.now() / 1e3);
  if (e <= t)
    throw new Error("JWT has expired");
}
function ff(e) {
  switch (e) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const pf = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function ur(e) {
  if (!pf.test(e))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function $i() {
  const e = {};
  return new Proxy(e, {
    get: (t, r) => {
      if (r === "__isUserNotAvailableProxy")
        return !0;
      if (typeof r == "symbol") {
        const n = r.toString();
        if (n === "Symbol(Symbol.toPrimitive)" || n === "Symbol(Symbol.toStringTag)" || n === "Symbol(util.inspect.custom)")
          return;
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (t, r) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (t, r) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function gf(e, t) {
  return new Proxy(e, {
    get: (r, n, i) => {
      if (n === "__isInsecureUserWarningProxy")
        return !0;
      if (typeof n == "symbol") {
        const s = n.toString();
        if (s === "Symbol(Symbol.toPrimitive)" || s === "Symbol(Symbol.toStringTag)" || s === "Symbol(util.inspect.custom)" || s === "Symbol(nodejs.util.inspect.custom)")
          return Reflect.get(r, n, i);
      }
      return !t.value && typeof n == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), t.value = !0), Reflect.get(r, n, i);
    }
  });
}
function Wa(e) {
  return JSON.parse(JSON.stringify(e));
}
const Vt = (e) => e.msg || e.message || e.error_description || e.error || JSON.stringify(e), mf = [502, 503, 504];
async function qa(e) {
  var t;
  if (!rf(e))
    throw new As(Vt(e), 0);
  if (mf.includes(e.status))
    throw new As(Vt(e), e.status);
  let r;
  try {
    r = await e.json();
  } catch (s) {
    throw new Gt(Vt(s), s);
  }
  let n;
  const i = hf(e);
  if (i && i.getTime() >= Tc["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? n = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (n = r.error_code), n) {
    if (n === "weak_password")
      throw new Da(Vt(r), e.status, ((t = r.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
    if (n === "session_not_found")
      throw new We();
  } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((s, a) => s && typeof a == "string", !0))
    throw new Da(Vt(r), e.status, r.weak_password.reasons);
  throw new Vd(Vt(r), e.status || 500, n);
}
const _f = (e, t, r, n) => {
  const i = { method: e, headers: t?.headers || {} };
  return e === "GET" ? i : (i.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, t?.headers), i.body = JSON.stringify(n), Object.assign(Object.assign({}, i), r));
};
async function le(e, t, r, n) {
  var i;
  const s = Object.assign({}, n?.headers);
  s[Ss] || (s[Ss] = Tc["2024-01-01"].name), n?.jwt && (s.Authorization = `Bearer ${n.jwt}`);
  const a = (i = n?.query) !== null && i !== void 0 ? i : {};
  n?.redirectTo && (a.redirect_to = n.redirectTo);
  const o = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "", l = await vf(e, t, r + o, {
    headers: s,
    noResolveJson: n?.noResolveJson
  }, {}, n?.body);
  return n?.xform ? n?.xform(l) : { data: Object.assign({}, l), error: null };
}
async function vf(e, t, r, n, i, s) {
  const a = _f(t, n, i, s);
  let o;
  try {
    o = await e(r, Object.assign({}, a));
  } catch (l) {
    throw console.error(l), new As(Vt(l), 0);
  }
  if (o.ok || await qa(o), n?.noResolveJson)
    return o;
  try {
    return await o.json();
  } catch (l) {
    await qa(l);
  }
}
function nt(e) {
  var t;
  let r = null;
  yf(e) && (r = Object.assign({}, e), e.expires_at || (r.expires_at = Qd(e.expires_in)));
  const n = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: r, user: n }, error: null };
}
function Ha(e) {
  const t = nt(e);
  return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce((r, n) => r && typeof n == "string", !0) && (t.data.weak_password = e.weak_password), t;
}
function Tt(e) {
  var t;
  return { data: { user: (t = e.user) !== null && t !== void 0 ? t : e }, error: null };
}
function wf(e) {
  return { data: e, error: null };
}
function bf(e) {
  const { action_link: t, email_otp: r, hashed_token: n, redirect_to: i, verification_type: s } = e, a = Rr(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), o = {
    action_link: t,
    email_otp: r,
    hashed_token: n,
    redirect_to: i,
    verification_type: s
  }, l = Object.assign({}, a);
  return {
    data: {
      properties: o,
      user: l
    },
    error: null
  };
}
function Ka(e) {
  return e;
}
function yf(e) {
  return e.access_token && e.refresh_token && e.expires_in;
}
const zi = ["global", "local", "others"];
class kf {
  /**
   * Creates an admin API client that can be used to manage users and OAuth clients.
   *
   * @example
   * ```ts
   * import { GoTrueAdminApi } from '@supabase/auth-js'
   *
   * const admin = new GoTrueAdminApi({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}` },
   * })
   * ```
   */
  constructor({ url: t = "", headers: r = {}, fetch: n }) {
    this.url = t, this.headers = r, this.fetch = Ic(n), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    }, this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      updateClient: this._updateOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(t, r = zi[0]) {
    if (zi.indexOf(r) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${zi.join(", ")}`);
    try {
      return await le(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
        headers: this.headers,
        jwt: t,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (n) {
      if (ne(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(t, r = {}) {
    try {
      return await le(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: Tt
      });
    } catch (n) {
      if (ne(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(t) {
    try {
      const { options: r } = t, n = Rr(t, ["options"]), i = Object.assign(Object.assign({}, n), r);
      return "newEmail" in n && (i.new_email = n?.newEmail, delete i.newEmail), await le(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: i,
        headers: this.headers,
        xform: bf,
        redirectTo: r?.redirectTo
      });
    } catch (r) {
      if (ne(r))
        return {
          data: {
            properties: null,
            user: null
          },
          error: r
        };
      throw r;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(t) {
    try {
      return await le(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: Tt
      });
    } catch (r) {
      if (ne(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(t) {
    var r, n, i, s, a, o, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 }, u = await le(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (r = t?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
          per_page: (s = (i = t?.perPage) === null || i === void 0 ? void 0 : i.toString()) !== null && s !== void 0 ? s : ""
        },
        xform: Ka
      });
      if (u.error)
        throw u.error;
      const d = await u.json(), f = (a = u.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0, h = (l = (o = u.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && l !== void 0 ? l : [];
      return h.length > 0 && (h.forEach((g) => {
        const m = parseInt(g.split(";")[0].split("=")[1].substring(0, 1)), v = JSON.parse(g.split(";")[1].split("=")[1]);
        c[`${v}Page`] = m;
      }), c.total = parseInt(f)), { data: Object.assign(Object.assign({}, d), c), error: null };
    } catch (c) {
      if (ne(c))
        return { data: { users: [] }, error: c };
      throw c;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(t) {
    ur(t);
    try {
      return await le(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: Tt
      });
    } catch (r) {
      if (ne(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(t, r) {
    ur(t);
    try {
      return await le(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: r,
        headers: this.headers,
        xform: Tt
      });
    } catch (n) {
      if (ne(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(t, r = !1) {
    ur(t);
    try {
      return await le(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: {
          should_soft_delete: r
        },
        xform: Tt
      });
    } catch (n) {
      if (ne(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  async _listFactors(t) {
    ur(t.userId);
    try {
      const { data: r, error: n } = await le(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
        headers: this.headers,
        xform: (i) => ({ data: { factors: i }, error: null })
      });
      return { data: r, error: n };
    } catch (r) {
      if (ne(r))
        return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(t) {
    ur(t.userId), ur(t.id);
    try {
      return { data: await le(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
        headers: this.headers
      }), error: null };
    } catch (r) {
      if (ne(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Lists all OAuth clients with optional pagination.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listOAuthClients(t) {
    var r, n, i, s, a, o, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 }, u = await le(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (r = t?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
          per_page: (s = (i = t?.perPage) === null || i === void 0 ? void 0 : i.toString()) !== null && s !== void 0 ? s : ""
        },
        xform: Ka
      });
      if (u.error)
        throw u.error;
      const d = await u.json(), f = (a = u.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0, h = (l = (o = u.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && l !== void 0 ? l : [];
      return h.length > 0 && (h.forEach((g) => {
        const m = parseInt(g.split(";")[0].split("=")[1].substring(0, 1)), v = JSON.parse(g.split(";")[1].split("=")[1]);
        c[`${v}Page`] = m;
      }), c.total = parseInt(f)), { data: Object.assign(Object.assign({}, d), c), error: null };
    } catch (c) {
      if (ne(c))
        return { data: { clients: [] }, error: c };
      throw c;
    }
  }
  /**
   * Creates a new OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _createOAuthClient(t) {
    try {
      return await le(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: t,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (ne(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Gets details of a specific OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getOAuthClient(t) {
    try {
      return await le(this.fetch, "GET", `${this.url}/admin/oauth/clients/${t}`, {
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (ne(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Updates an existing OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _updateOAuthClient(t, r) {
    try {
      return await le(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${t}`, {
        body: r,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (n) {
      if (ne(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Deletes an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteOAuthClient(t) {
    try {
      return await le(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${t}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (ne(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Regenerates the secret for an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _regenerateOAuthClientSecret(t) {
    try {
      return await le(this.fetch, "POST", `${this.url}/admin/oauth/clients/${t}/regenerate_secret`, {
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (ne(r))
        return { data: null, error: r };
      throw r;
    }
  }
}
function Ga(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, r) => {
      e[t] = r;
    },
    removeItem: (t) => {
      delete e[t];
    }
  };
}
const hr = {
  /**
   * @experimental
   */
  debug: !!(globalThis && Rc() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Cc extends Error {
  constructor(t) {
    super(t), this.isAcquireTimeout = !0;
  }
}
class Ef extends Cc {
}
async function xf(e, t, r) {
  hr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
  const n = new globalThis.AbortController();
  return t > 0 && setTimeout(() => {
    n.abort(), hr.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e);
  }, t), await Promise.resolve().then(() => globalThis.navigator.locks.request(e, t === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: n.signal
  }, async (i) => {
    if (i) {
      hr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, i.name);
      try {
        return await r();
      } finally {
        hr.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, i.name);
      }
    } else {
      if (t === 0)
        throw hr.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e), new Ef(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
      if (hr.debug)
        try {
          const s = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(s, null, "  "));
        } catch (s) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", s);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await r();
    }
  }));
}
function Sf() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function Nc(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e))
    throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  return e.toLowerCase();
}
function Af(e) {
  return parseInt(e, 16);
}
function Tf(e) {
  const t = new TextEncoder().encode(e);
  return "0x" + Array.from(t, (n) => n.toString(16).padStart(2, "0")).join("");
}
function Of(e) {
  var t;
  const { chainId: r, domain: n, expirationTime: i, issuedAt: s = /* @__PURE__ */ new Date(), nonce: a, notBefore: o, requestId: l, resources: c, scheme: u, uri: d, version: f } = e;
  {
    if (!Number.isInteger(r))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
    if (!n)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (a && a.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);
    if (!d)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (f !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`);
    if (!((t = e.statement) === null || t === void 0) && t.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);
  }
  const h = Nc(e.address), g = u ? `${u}://${n}` : n, m = e.statement ? `${e.statement}
` : "", v = `${g} wants you to sign in with your Ethereum account:
${h}

${m}`;
  let p = `URI: ${d}
Version: ${f}
Chain ID: ${r}${a ? `
Nonce: ${a}` : ""}
Issued At: ${s.toISOString()}`;
  if (i && (p += `
Expiration Time: ${i.toISOString()}`), o && (p += `
Not Before: ${o.toISOString()}`), l && (p += `
Request ID: ${l}`), c) {
    let _ = `
Resources:`;
    for (const w of c) {
      if (!w || typeof w != "string")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${w}`);
      _ += `
- ${w}`;
    }
    p += _;
  }
  return `${v}
${p}`;
}
class Re extends Error {
  constructor({ message: t, code: r, cause: n, name: i }) {
    var s;
    super(t, { cause: n }), this.__isWebAuthnError = !0, this.name = (s = i ?? (n instanceof Error ? n.name : void 0)) !== null && s !== void 0 ? s : "Unknown Error", this.code = r;
  }
}
class ni extends Re {
  constructor(t, r) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: r,
      message: t
    }), this.name = "WebAuthnUnknownError", this.originalError = r;
  }
}
function Rf({ error: e, options: t }) {
  var r, n, i;
  const { publicKey: s } = t;
  if (!s)
    throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new Re({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e
      });
  } else if (e.name === "ConstraintError") {
    if (((r = s.authenticatorSelection) === null || r === void 0 ? void 0 : r.requireResidentKey) === !0)
      return new Re({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: e
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      t.mediation === "conditional" && ((n = s.authenticatorSelection) === null || n === void 0 ? void 0 : n.userVerification) === "required"
    )
      return new Re({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: e
      });
    if (((i = s.authenticatorSelection) === null || i === void 0 ? void 0 : i.userVerification) === "required")
      return new Re({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: e
      });
  } else {
    if (e.name === "InvalidStateError")
      return new Re({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: e
      });
    if (e.name === "NotAllowedError")
      return new Re({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e
      });
    if (e.name === "NotSupportedError")
      return s.pubKeyCredParams.filter((o) => o.type === "public-key").length === 0 ? new Re({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: e
      }) : new Re({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: e
      });
    if (e.name === "SecurityError") {
      const a = window.location.hostname;
      if (Pc(a)) {
        if (s.rp.id !== a)
          return new Re({
            message: `The RP ID "${s.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e
          });
      } else return new Re({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: e
      });
    } else if (e.name === "TypeError") {
      if (s.user.id.byteLength < 1 || s.user.id.byteLength > 64)
        return new Re({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: e
        });
    } else if (e.name === "UnknownError")
      return new Re({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e
      });
  }
  return new Re({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e
  });
}
function If({ error: e, options: t }) {
  const { publicKey: r } = t;
  if (!r)
    throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new Re({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e
      });
  } else {
    if (e.name === "NotAllowedError")
      return new Re({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e
      });
    if (e.name === "SecurityError") {
      const n = window.location.hostname;
      if (Pc(n)) {
        if (r.rpId !== n)
          return new Re({
            message: `The RP ID "${r.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e
          });
      } else return new Re({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: e
      });
    } else if (e.name === "UnknownError")
      return new Re({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e
      });
  }
  return new Re({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e
  });
}
class Cf {
  /**
   * Create an abort signal for a new WebAuthn operation.
   * Automatically cancels any existing operation.
   *
   * @returns {AbortSignal} Signal to pass to navigator.credentials.create() or .get()
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal MDN - AbortSignal}
   */
  createNewAbortSignal() {
    if (this.controller) {
      const r = new Error("Cancelling existing WebAuthn API call for new one");
      r.name = "AbortError", this.controller.abort(r);
    }
    const t = new AbortController();
    return this.controller = t, t.signal;
  }
  /**
   * Manually cancel the current WebAuthn operation.
   * Useful for cleaning up when user cancels or navigates away.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort MDN - AbortController.abort}
   */
  cancelCeremony() {
    if (this.controller) {
      const t = new Error("Manually cancelling existing WebAuthn API call");
      t.name = "AbortError", this.controller.abort(t), this.controller = void 0;
    }
  }
}
const Nf = new Cf();
function Pf(e) {
  if (!e)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      e
    );
  const { challenge: t, user: r, excludeCredentials: n } = e, i = Rr(
    e,
    ["challenge", "user", "excludeCredentials"]
  ), s = wr(t).buffer, a = Object.assign(Object.assign({}, r), { id: wr(r.id).buffer }), o = Object.assign(Object.assign({}, i), {
    challenge: s,
    user: a
  });
  if (n && n.length > 0) {
    o.excludeCredentials = new Array(n.length);
    for (let l = 0; l < n.length; l++) {
      const c = n[l];
      o.excludeCredentials[l] = Object.assign(Object.assign({}, c), {
        id: wr(c.id).buffer,
        type: c.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: c.transports
      });
    }
  }
  return o;
}
function $f(e) {
  if (!e)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(e);
  const { challenge: t, allowCredentials: r } = e, n = Rr(
    e,
    ["challenge", "allowCredentials"]
  ), i = wr(t).buffer, s = Object.assign(Object.assign({}, n), { challenge: i });
  if (r && r.length > 0) {
    s.allowCredentials = new Array(r.length);
    for (let a = 0; a < r.length; a++) {
      const o = r[a];
      s.allowCredentials[a] = Object.assign(Object.assign({}, o), {
        id: wr(o.id).buffer,
        type: o.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: o.transports
      });
    }
  }
  return s;
}
function zf(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function")
    return e.toJSON();
  const r = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: Yt(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: Yt(new Uint8Array(e.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: e.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0
  };
}
function jf(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function")
    return e.toJSON();
  const r = e, n = e.getClientExtensionResults(), i = e.response;
  return {
    id: e.id,
    rawId: e.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: Yt(new Uint8Array(i.authenticatorData)),
      clientDataJSON: Yt(new Uint8Array(i.clientDataJSON)),
      signature: Yt(new Uint8Array(i.signature)),
      userHandle: i.userHandle ? Yt(new Uint8Array(i.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: n,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0
  };
}
function Pc(e) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)
  );
}
function Ja() {
  var e, t;
  return !!(ze() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((e = navigator?.credentials) === null || e === void 0 ? void 0 : e.create) == "function" && typeof ((t = navigator?.credentials) === null || t === void 0 ? void 0 : t.get) == "function");
}
async function Uf(e) {
  try {
    const t = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      e
    );
    return t ? t instanceof PublicKeyCredential ? { data: t, error: null } : {
      data: null,
      error: new ni("Browser returned unexpected credential type", t)
    } : {
      data: null,
      error: new ni("Empty credential response", t)
    };
  } catch (t) {
    return {
      data: null,
      error: Rf({
        error: t,
        options: e
      })
    };
  }
}
async function Ff(e) {
  try {
    const t = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      e
    );
    return t ? t instanceof PublicKeyCredential ? { data: t, error: null } : {
      data: null,
      error: new ni("Browser returned unexpected credential type", t)
    } : {
      data: null,
      error: new ni("Empty credential response", t)
    };
  } catch (t) {
    return {
      data: null,
      error: If({
        error: t,
        options: e
      })
    };
  }
}
const Lf = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
}, Bf = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function ii(...e) {
  const t = (i) => i !== null && typeof i == "object" && !Array.isArray(i), r = (i) => i instanceof ArrayBuffer || ArrayBuffer.isView(i), n = {};
  for (const i of e)
    if (i)
      for (const s in i) {
        const a = i[s];
        if (a !== void 0)
          if (Array.isArray(a))
            n[s] = a;
          else if (r(a))
            n[s] = a;
          else if (t(a)) {
            const o = n[s];
            t(o) ? n[s] = ii(o, a) : n[s] = ii(a);
          } else
            n[s] = a;
      }
  return n;
}
function Df(e, t) {
  return ii(Lf, e, t || {});
}
function Zf(e, t) {
  return ii(Bf, e, t || {});
}
class Mf {
  constructor(t) {
    this.client = t, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
  }
  /**
   * Enroll a new WebAuthn factor.
   * Creates an unverified WebAuthn factor that must be verified with a credential.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Omit<MFAEnrollWebauthnParams, 'factorType'>} params - Enrollment parameters (friendlyName required)
   * @returns {Promise<AuthMFAEnrollWebauthnResponse>} Enrolled factor details or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registering a New Credential}
   */
  async _enroll(t) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, t), { factorType: "webauthn" }));
  }
  /**
   * Challenge for WebAuthn credential creation or authentication.
   * Combines server challenge with browser credential operations.
   * Handles both registration (create) and authentication (request) flows.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {MFAChallengeWebauthnParams & { friendlyName?: string; signal?: AbortSignal }} params - Challenge parameters including factorId
   * @param {Object} overrides - Allows you to override the parameters passed to navigator.credentials
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides.create - Override options for credential creation
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides.request - Override options for credential request
   * @returns {Promise<RequestResult>} Challenge response with credential or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-credential-creation W3C WebAuthn Spec - Credential Creation}
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying Assertion}
   */
  async _challenge({ factorId: t, webauthn: r, friendlyName: n, signal: i }, s) {
    try {
      const { data: a, error: o } = await this.client.mfa.challenge({
        factorId: t,
        webauthn: r
      });
      if (!a)
        return { data: null, error: o };
      const l = i ?? Nf.createNewAbortSignal();
      if (a.webauthn.type === "create") {
        const { user: c } = a.webauthn.credential_options.publicKey;
        c.name || (c.name = `${c.id}:${n}`), c.displayName || (c.displayName = c.name);
      }
      switch (a.webauthn.type) {
        case "create": {
          const c = Df(a.webauthn.credential_options.publicKey, s?.create), { data: u, error: d } = await Uf({
            publicKey: c,
            signal: l
          });
          return u ? {
            data: {
              factorId: t,
              challengeId: a.id,
              webauthn: {
                type: a.webauthn.type,
                credential_response: u
              }
            },
            error: null
          } : { data: null, error: d };
        }
        case "request": {
          const c = Zf(a.webauthn.credential_options.publicKey, s?.request), { data: u, error: d } = await Ff(Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: c, signal: l }));
          return u ? {
            data: {
              factorId: t,
              challengeId: a.id,
              webauthn: {
                type: a.webauthn.type,
                credential_response: u
              }
            },
            error: null
          } : { data: null, error: d };
        }
      }
    } catch (a) {
      return ne(a) ? { data: null, error: a } : {
        data: null,
        error: new Gt("Unexpected error in challenge", a)
      };
    }
  }
  /**
   * Verify a WebAuthn credential with the server.
   * Completes the WebAuthn ceremony by sending the credential to the server for verification.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Verification parameters
   * @param {string} params.challengeId - ID of the challenge being verified
   * @param {string} params.factorId - ID of the WebAuthn factor
   * @param {MFAVerifyWebauthnParams<T>['webauthn']} params.webauthn - WebAuthn credential response
   * @returns {Promise<AuthMFAVerifyResponse>} Verification result with session or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying an Authentication Assertion}
   * */
  async _verify({ challengeId: t, factorId: r, webauthn: n }) {
    return this.client.mfa.verify({
      factorId: r,
      challengeId: t,
      webauthn: n
    });
  }
  /**
   * Complete WebAuthn authentication flow.
   * Performs challenge and verification in a single operation for existing credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Authentication parameters
   * @param {string} params.factorId - ID of the WebAuthn factor to authenticate with
   * @param {Object} params.webauthn - WebAuthn configuration
   * @param {string} params.webauthn.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.webauthn.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.webauthn.signal - Optional abort signal
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides - Override options for navigator.credentials.get
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Authentication result
   * @see {@link https://w3c.github.io/webauthn/#sctn-authentication W3C WebAuthn Spec - Authentication Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions MDN - PublicKeyCredentialRequestOptions}
   */
  async _authenticate({ factorId: t, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: i } = {} }, s) {
    if (!r)
      return {
        data: null,
        error: new nn("rpId is required for WebAuthn authentication")
      };
    try {
      if (!Ja())
        return {
          data: null,
          error: new Gt("Browser does not support WebAuthn", null)
        };
      const { data: a, error: o } = await this.challenge({
        factorId: t,
        webauthn: { rpId: r, rpOrigins: n },
        signal: i
      }, { request: s });
      if (!a)
        return { data: null, error: o };
      const { webauthn: l } = a;
      return this._verify({
        factorId: t,
        challengeId: a.challengeId,
        webauthn: {
          type: l.type,
          rpId: r,
          rpOrigins: n,
          credential_response: l.credential_response
        }
      });
    } catch (a) {
      return ne(a) ? { data: null, error: a } : {
        data: null,
        error: new Gt("Unexpected error in authenticate", a)
      };
    }
  }
  /**
   * Complete WebAuthn registration flow.
   * Performs enrollment, challenge, and verification in a single operation for new credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Registration parameters
   * @param {string} params.friendlyName - User-friendly name for the credential
   * @param {string} params.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.signal - Optional abort signal
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides - Override options for navigator.credentials.create
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Registration result
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registration Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions MDN - PublicKeyCredentialCreationOptions}
   */
  async _register({ friendlyName: t, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0, signal: i } = {} }, s) {
    if (!r)
      return {
        data: null,
        error: new nn("rpId is required for WebAuthn registration")
      };
    try {
      if (!Ja())
        return {
          data: null,
          error: new Gt("Browser does not support WebAuthn", null)
        };
      const { data: a, error: o } = await this._enroll({
        friendlyName: t
      });
      if (!a)
        return await this.client.mfa.listFactors().then((u) => {
          var d;
          return (d = u.data) === null || d === void 0 ? void 0 : d.all.find((f) => f.factor_type === "webauthn" && f.friendly_name === t && f.status !== "unverified");
        }).then((u) => u ? this.client.mfa.unenroll({ factorId: u?.id }) : void 0), { data: null, error: o };
      const { data: l, error: c } = await this._challenge({
        factorId: a.id,
        friendlyName: a.friendly_name,
        webauthn: { rpId: r, rpOrigins: n },
        signal: i
      }, {
        create: s
      });
      return l ? this._verify({
        factorId: a.id,
        challengeId: l.challengeId,
        webauthn: {
          rpId: r,
          rpOrigins: n,
          type: l.webauthn.type,
          credential_response: l.webauthn.credential_response
        }
      }) : { data: null, error: c };
    } catch (a) {
      return ne(a) ? { data: null, error: a } : {
        data: null,
        error: new Gt("Unexpected error in register", a)
      };
    }
  }
}
Sf();
const Vf = {
  url: Ld,
  storageKey: Bd,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Dd,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1
};
async function Ya(e, t, r) {
  return await r();
}
const dr = {};
class sn {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var t, r;
    return (r = (t = dr[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !== null && r !== void 0 ? r : { keys: [] };
  }
  set jwks(t) {
    dr[this.storageKey] = Object.assign(Object.assign({}, dr[this.storageKey]), { jwks: t });
  }
  get jwks_cached_at() {
    var t, r;
    return (r = (t = dr[this.storageKey]) === null || t === void 0 ? void 0 : t.cachedAt) !== null && r !== void 0 ? r : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(t) {
    dr[this.storageKey] = Object.assign(Object.assign({}, dr[this.storageKey]), { cachedAt: t });
  }
  /**
   * Create a new client for use in the browser.
   *
   * @example
   * ```ts
   * import { GoTrueClient } from '@supabase/auth-js'
   *
   * const auth = new GoTrueClient({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { apikey: 'public-anon-key' },
   *   storageKey: 'supabase-auth',
   * })
   * ```
   */
  constructor(t) {
    var r, n, i;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
    const s = Object.assign(Object.assign({}, Vf), t);
    if (this.storageKey = s.storageKey, this.instanceID = (r = sn.nextInstanceID[this.storageKey]) !== null && r !== void 0 ? r : 0, sn.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!s.debug, typeof s.debug == "function" && (this.logger = s.debug), this.instanceID > 0 && ze()) {
      const a = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(a), this.logDebugMessages && console.trace(a);
    }
    if (this.persistSession = s.persistSession, this.autoRefreshToken = s.autoRefreshToken, this.admin = new kf({
      url: s.url,
      headers: s.headers,
      fetch: s.fetch
    }), this.url = s.url, this.headers = s.headers, this.fetch = Ic(s.fetch), this.lock = s.lock || Ya, this.detectSessionInUrl = s.detectSessionInUrl, this.flowType = s.flowType, this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader, this.throwOnError = s.throwOnError, s.lock ? this.lock = s.lock : ze() && (!((n = globalThis?.navigator) === null || n === void 0) && n.locks) ? this.lock = xf : this.lock = Ya, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new Mf(this)
    }, this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    }, this.persistSession ? (s.storage ? this.storage = s.storage : Rc() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Ga(this.memoryStorage)), s.userStorage && (this.userStorage = s.userStorage)) : (this.memoryStorage = {}, this.storage = Ga(this.memoryStorage)), ze() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (a) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", a);
      }
      (i = this.broadcastChannel) === null || i === void 0 || i.addEventListener("message", async (a) => {
        this._debug("received broadcast notification from other tab or client", a), await this._notifyAllSubscribers(a.data.event, a.data.session, !1);
      });
    }
    this.initialize();
  }
  /**
   * Returns whether error throwing mode is enabled for this client.
   */
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  /**
   * Centralizes return handling with optional error throwing. When `throwOnError` is enabled
   * and the provided result contains a non-nullish error, the error is thrown instead of
   * being returned. This ensures consistent behavior across all public API methods.
   */
  _returnResult(t) {
    if (this.throwOnError && t && t.error)
      throw t.error;
    return t;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Ac}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
  }
  _debug(...t) {
    return this.logDebugMessages && this.logger(this._logPrefix(), ...t), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var t;
    try {
      let r = {}, n = "none";
      if (ze() && (r = tf(window.location.href), this._isImplicitGrantCallback(r) ? n = "implicit" : await this._isPKCECallback(r) && (n = "pkce")), ze() && this.detectSessionInUrl && n !== "none") {
        const { data: i, error: s } = await this._getSessionFromURL(r, n);
        if (s) {
          if (this._debug("#_initialize()", "error detecting session from URL", s), Hd(s)) {
            const l = (t = s.details) === null || t === void 0 ? void 0 : t.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: s };
          }
          return await this._removeSession(), { error: s };
        }
        const { session: a, redirectType: o } = i;
        return this._debug("#_initialize()", "detected session in URL", a, "redirect type", o), await this._saveSession(a), setTimeout(async () => {
          o === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", a) : await this._notifyAllSubscribers("SIGNED_IN", a);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (r) {
      return ne(r) ? this._returnResult({ error: r }) : this._returnResult({
        error: new Gt("Unexpected error during initialization", r)
      });
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(t) {
    var r, n, i;
    try {
      const s = await le(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (n = (r = t?.options) === null || r === void 0 ? void 0 : r.data) !== null && n !== void 0 ? n : {},
          gotrue_meta_security: { captcha_token: (i = t?.options) === null || i === void 0 ? void 0 : i.captchaToken }
        },
        xform: nt
      }), { data: a, error: o } = s;
      if (o || !a)
        return this._returnResult({ data: { user: null, session: null }, error: o });
      const l = a.session, c = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: c, session: l }, error: null });
    } catch (s) {
      if (ne(s))
        return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(t) {
    var r, n, i;
    try {
      let s;
      if ("email" in t) {
        const { email: u, password: d, options: f } = t;
        let h = null, g = null;
        this.flowType === "pkce" && ([h, g] = await cr(this.storage, this.storageKey)), s = await le(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: f?.emailRedirectTo,
          body: {
            email: u,
            password: d,
            data: (r = f?.data) !== null && r !== void 0 ? r : {},
            gotrue_meta_security: { captcha_token: f?.captchaToken },
            code_challenge: h,
            code_challenge_method: g
          },
          xform: nt
        });
      } else if ("phone" in t) {
        const { phone: u, password: d, options: f } = t;
        s = await le(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: u,
            password: d,
            data: (n = f?.data) !== null && n !== void 0 ? n : {},
            channel: (i = f?.channel) !== null && i !== void 0 ? i : "sms",
            gotrue_meta_security: { captcha_token: f?.captchaToken }
          },
          xform: nt
        });
      } else
        throw new Pn("You must provide either an email or phone number and a password");
      const { data: a, error: o } = s;
      if (o || !a)
        return this._returnResult({ data: { user: null, session: null }, error: o });
      const l = a.session, c = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: c, session: l }, error: null });
    } catch (s) {
      if (ne(s))
        return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(t) {
    try {
      let r;
      if ("email" in t) {
        const { email: s, password: a, options: o } = t;
        r = await le(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: s,
            password: a,
            gotrue_meta_security: { captcha_token: o?.captchaToken }
          },
          xform: Ha
        });
      } else if ("phone" in t) {
        const { phone: s, password: a, options: o } = t;
        r = await le(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: s,
            password: a,
            gotrue_meta_security: { captcha_token: o?.captchaToken }
          },
          xform: Ha
        });
      } else
        throw new Pn("You must provide either an email or phone number and a password");
      const { data: n, error: i } = r;
      if (i)
        return this._returnResult({ data: { user: null, session: null }, error: i });
      if (!n || !n.session || !n.user) {
        const s = new lr();
        return this._returnResult({ data: { user: null, session: null }, error: s });
      }
      return n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), this._returnResult({
        data: Object.assign({ user: n.user, session: n.session }, n.weak_password ? { weakPassword: n.weak_password } : null),
        error: i
      });
    } catch (r) {
      if (ne(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(t) {
    var r, n, i, s;
    return await this._handleProviderSignIn(t.provider, {
      redirectTo: (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
      scopes: (n = t.options) === null || n === void 0 ? void 0 : n.scopes,
      queryParams: (i = t.options) === null || i === void 0 ? void 0 : i.queryParams,
      skipBrowserRedirect: (s = t.options) === null || s === void 0 ? void 0 : s.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(t) {
    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(t));
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Supports Ethereum (via Sign-In-With-Ethereum) & Solana (Sign-In-With-Solana) standards,
   * both of which derive from the EIP-4361 standard
   * With slight variation on Solana's side.
   * @reference https://eips.ethereum.org/EIPS/eip-4361
   */
  async signInWithWeb3(t) {
    const { chain: r } = t;
    switch (r) {
      case "ethereum":
        return await this.signInWithEthereum(t);
      case "solana":
        return await this.signInWithSolana(t);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`);
    }
  }
  async signInWithEthereum(t) {
    var r, n, i, s, a, o, l, c, u, d, f;
    let h, g;
    if ("message" in t)
      h = t.message, g = t.signature;
    else {
      const { chain: m, wallet: v, statement: p, options: _ } = t;
      let w;
      if (ze())
        if (typeof v == "object")
          w = v;
        else {
          const S = window;
          if ("ethereum" in S && typeof S.ethereum == "object" && "request" in S.ethereum && typeof S.ethereum.request == "function")
            w = S.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof v != "object" || !_?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        w = v;
      }
      const A = new URL((r = _?.url) !== null && r !== void 0 ? r : window.location.href), k = await w.request({
        method: "eth_requestAccounts"
      }).then((S) => S).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!k || k.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const E = Nc(k[0]);
      let x = (n = _?.signInWithEthereum) === null || n === void 0 ? void 0 : n.chainId;
      if (!x) {
        const S = await w.request({
          method: "eth_chainId"
        });
        x = Af(S);
      }
      const R = {
        domain: A.host,
        address: E,
        statement: p,
        uri: A.href,
        version: "1",
        chainId: x,
        nonce: (i = _?.signInWithEthereum) === null || i === void 0 ? void 0 : i.nonce,
        issuedAt: (a = (s = _?.signInWithEthereum) === null || s === void 0 ? void 0 : s.issuedAt) !== null && a !== void 0 ? a : /* @__PURE__ */ new Date(),
        expirationTime: (o = _?.signInWithEthereum) === null || o === void 0 ? void 0 : o.expirationTime,
        notBefore: (l = _?.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
        requestId: (c = _?.signInWithEthereum) === null || c === void 0 ? void 0 : c.requestId,
        resources: (u = _?.signInWithEthereum) === null || u === void 0 ? void 0 : u.resources
      };
      h = Of(R), g = await w.request({
        method: "personal_sign",
        params: [Tf(h), E]
      });
    }
    try {
      const { data: m, error: v } = await le(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: h,
          signature: g
        }, !((d = t.options) === null || d === void 0) && d.captchaToken ? { gotrue_meta_security: { captcha_token: (f = t.options) === null || f === void 0 ? void 0 : f.captchaToken } } : null),
        xform: nt
      });
      if (v)
        throw v;
      if (!m || !m.session || !m.user) {
        const p = new lr();
        return this._returnResult({ data: { user: null, session: null }, error: p });
      }
      return m.session && (await this._saveSession(m.session), await this._notifyAllSubscribers("SIGNED_IN", m.session)), this._returnResult({ data: Object.assign({}, m), error: v });
    } catch (m) {
      if (ne(m))
        return this._returnResult({ data: { user: null, session: null }, error: m });
      throw m;
    }
  }
  async signInWithSolana(t) {
    var r, n, i, s, a, o, l, c, u, d, f, h;
    let g, m;
    if ("message" in t)
      g = t.message, m = t.signature;
    else {
      const { chain: v, wallet: p, statement: _, options: w } = t;
      let A;
      if (ze())
        if (typeof p == "object")
          A = p;
        else {
          const E = window;
          if ("solana" in E && typeof E.solana == "object" && ("signIn" in E.solana && typeof E.solana.signIn == "function" || "signMessage" in E.solana && typeof E.solana.signMessage == "function"))
            A = E.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof p != "object" || !w?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        A = p;
      }
      const k = new URL((r = w?.url) !== null && r !== void 0 ? r : window.location.href);
      if ("signIn" in A && A.signIn) {
        const E = await A.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, w?.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: k.host,
          uri: k.href
        }), _ ? { statement: _ } : null));
        let x;
        if (Array.isArray(E) && E[0] && typeof E[0] == "object")
          x = E[0];
        else if (E && typeof E == "object" && "signedMessage" in E && "signature" in E)
          x = E;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in x && "signature" in x && (typeof x.signedMessage == "string" || x.signedMessage instanceof Uint8Array) && x.signature instanceof Uint8Array)
          g = typeof x.signedMessage == "string" ? x.signedMessage : new TextDecoder().decode(x.signedMessage), m = x.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in A) || typeof A.signMessage != "function" || !("publicKey" in A) || typeof A != "object" || !A.publicKey || !("toBase58" in A.publicKey) || typeof A.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        g = [
          `${k.host} wants you to sign in with your Solana account:`,
          A.publicKey.toBase58(),
          ..._ ? ["", _, ""] : [""],
          "Version: 1",
          `URI: ${k.href}`,
          `Issued At: ${(i = (n = w?.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && i !== void 0 ? i : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((s = w?.signInWithSolana) === null || s === void 0) && s.notBefore ? [`Not Before: ${w.signInWithSolana.notBefore}`] : [],
          ...!((a = w?.signInWithSolana) === null || a === void 0) && a.expirationTime ? [`Expiration Time: ${w.signInWithSolana.expirationTime}`] : [],
          ...!((o = w?.signInWithSolana) === null || o === void 0) && o.chainId ? [`Chain ID: ${w.signInWithSolana.chainId}`] : [],
          ...!((l = w?.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${w.signInWithSolana.nonce}`] : [],
          ...!((c = w?.signInWithSolana) === null || c === void 0) && c.requestId ? [`Request ID: ${w.signInWithSolana.requestId}`] : [],
          ...!((d = (u = w?.signInWithSolana) === null || u === void 0 ? void 0 : u.resources) === null || d === void 0) && d.length ? [
            "Resources",
            ...w.signInWithSolana.resources.map((x) => `- ${x}`)
          ] : []
        ].join(`
`);
        const E = await A.signMessage(new TextEncoder().encode(g), "utf8");
        if (!E || !(E instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        m = E;
      }
    }
    try {
      const { data: v, error: p } = await le(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: g, signature: Yt(m) }, !((f = t.options) === null || f === void 0) && f.captchaToken ? { gotrue_meta_security: { captcha_token: (h = t.options) === null || h === void 0 ? void 0 : h.captchaToken } } : null),
        xform: nt
      });
      if (p)
        throw p;
      if (!v || !v.session || !v.user) {
        const _ = new lr();
        return this._returnResult({ data: { user: null, session: null }, error: _ });
      }
      return v.session && (await this._saveSession(v.session), await this._notifyAllSubscribers("SIGNED_IN", v.session)), this._returnResult({ data: Object.assign({}, v), error: p });
    } catch (v) {
      if (ne(v))
        return this._returnResult({ data: { user: null, session: null }, error: v });
      throw v;
    }
  }
  async _exchangeCodeForSession(t) {
    const r = await Mt(this.storage, `${this.storageKey}-code-verifier`), [n, i] = (r ?? "").split("/");
    try {
      const { data: s, error: a } = await le(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: t,
          code_verifier: n
        },
        xform: nt
      });
      if (await At(this.storage, `${this.storageKey}-code-verifier`), a)
        throw a;
      if (!s || !s.session || !s.user) {
        const o = new lr();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: o
        });
      }
      return s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", s.session)), this._returnResult({ data: Object.assign(Object.assign({}, s), { redirectType: i ?? null }), error: a });
    } catch (s) {
      if (ne(s))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: s
        });
      throw s;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(t) {
    try {
      const { options: r, provider: n, token: i, access_token: s, nonce: a } = t, o = await le(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: n,
          id_token: i,
          access_token: s,
          nonce: a,
          gotrue_meta_security: { captcha_token: r?.captchaToken }
        },
        xform: nt
      }), { data: l, error: c } = o;
      if (c)
        return this._returnResult({ data: { user: null, session: null }, error: c });
      if (!l || !l.session || !l.user) {
        const u = new lr();
        return this._returnResult({ data: { user: null, session: null }, error: u });
      }
      return l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), this._returnResult({ data: l, error: c });
    } catch (r) {
      if (ne(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(t) {
    var r, n, i, s, a;
    try {
      if ("email" in t) {
        const { email: o, options: l } = t;
        let c = null, u = null;
        this.flowType === "pkce" && ([c, u] = await cr(this.storage, this.storageKey));
        const { error: d } = await le(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: o,
            data: (r = l?.data) !== null && r !== void 0 ? r : {},
            create_user: (n = l?.shouldCreateUser) !== null && n !== void 0 ? n : !0,
            gotrue_meta_security: { captcha_token: l?.captchaToken },
            code_challenge: c,
            code_challenge_method: u
          },
          redirectTo: l?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: d });
      }
      if ("phone" in t) {
        const { phone: o, options: l } = t, { data: c, error: u } = await le(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: o,
            data: (i = l?.data) !== null && i !== void 0 ? i : {},
            create_user: (s = l?.shouldCreateUser) !== null && s !== void 0 ? s : !0,
            gotrue_meta_security: { captcha_token: l?.captchaToken },
            channel: (a = l?.channel) !== null && a !== void 0 ? a : "sms"
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: c?.message_id },
          error: u
        });
      }
      throw new Pn("You must provide either an email or phone number.");
    } catch (o) {
      if (ne(o))
        return this._returnResult({ data: { user: null, session: null }, error: o });
      throw o;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(t) {
    var r, n;
    try {
      let i, s;
      "options" in t && (i = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo, s = (n = t.options) === null || n === void 0 ? void 0 : n.captchaToken);
      const { data: a, error: o } = await le(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, t), { gotrue_meta_security: { captcha_token: s } }),
        redirectTo: i,
        xform: nt
      });
      if (o)
        throw o;
      if (!a)
        throw new Error("An error occurred on token verification.");
      const l = a.session, c = a.user;
      return l?.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), this._returnResult({ data: { user: c, session: l }, error: null });
    } catch (i) {
      if (ne(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(t) {
    var r, n, i, s, a;
    try {
      let o = null, l = null;
      this.flowType === "pkce" && ([o, l] = await cr(this.storage, this.storageKey));
      const c = await le(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in t ? { provider_id: t.providerId } : null), "domain" in t ? { domain: t.domain } : null), { redirect_to: (n = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && n !== void 0 ? n : void 0 }), !((i = t?.options) === null || i === void 0) && i.captchaToken ? { gotrue_meta_security: { captcha_token: t.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: o, code_challenge_method: l }),
        headers: this.headers,
        xform: wf
      });
      return !((s = c.data) === null || s === void 0) && s.url && ze() && !(!((a = t.options) === null || a === void 0) && a.skipBrowserRedirect) && window.location.assign(c.data.url), this._returnResult(c);
    } catch (o) {
      if (ne(o))
        return this._returnResult({ data: null, error: o });
      throw o;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const { data: { session: r }, error: n } = t;
        if (n)
          throw n;
        if (!r)
          throw new We();
        const { error: i } = await le(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: r.access_token
        });
        return this._returnResult({ data: { user: null, session: null }, error: i });
      });
    } catch (t) {
      if (ne(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(t) {
    try {
      const r = `${this.url}/resend`;
      if ("email" in t) {
        const { email: n, type: i, options: s } = t, { error: a } = await le(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            email: n,
            type: i,
            gotrue_meta_security: { captcha_token: s?.captchaToken }
          },
          redirectTo: s?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: a });
      } else if ("phone" in t) {
        const { phone: n, type: i, options: s } = t, { data: a, error: o } = await le(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            phone: n,
            type: i,
            gotrue_meta_security: { captcha_token: s?.captchaToken }
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: a?.message_id },
          error: o
        });
      }
      throw new Pn("You must provide either an email or phone number and a type");
    } catch (r) {
      if (ne(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (r) => r));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(t, r) {
    this._debug("#_acquireLock", "begin", t);
    try {
      if (this.lockAcquired) {
        const n = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), i = (async () => (await n, await r()))();
        return this.pendingInLock.push((async () => {
          try {
            await i;
          } catch {
          }
        })()), i;
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const n = r();
          for (this.pendingInLock.push((async () => {
            try {
              await n;
            } catch {
            }
          })()), await n; this.pendingInLock.length; ) {
            const i = [...this.pendingInLock];
            await Promise.all(i), this.pendingInLock.splice(0, i.length);
          }
          return await n;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(t) {
    this._debug("#_useSession", "begin");
    try {
      const r = await this.__loadSession();
      return await t(r);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let t = null;
      const r = await Mt(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", r), r !== null && (this._isValidSession(r) ? t = r : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !t)
        return { data: { session: null }, error: null };
      const n = t.expires_at ? t.expires_at * 1e3 - Date.now() < Ci : !1;
      if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", t.expires_at), !n) {
        if (this.userStorage) {
          const a = await Mt(this.userStorage, this.storageKey + "-user");
          a?.user ? t.user = a.user : t.user = $i();
        }
        if (this.storage.isServer && t.user && !t.user.__isUserNotAvailableProxy) {
          const a = { value: this.suppressGetSessionWarning };
          t.user = gf(t.user, a), a.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: t }, error: null };
      }
      const { data: i, error: s } = await this._callRefreshToken(t.refresh_token);
      return s ? this._returnResult({ data: { session: null }, error: s }) : this._returnResult({ data: { session: i }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(t) {
    return t ? await this._getUser(t) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(t) {
    try {
      return t ? await le(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: t,
        xform: Tt
      }) : await this._useSession(async (r) => {
        var n, i, s;
        const { data: a, error: o } = r;
        if (o)
          throw o;
        return !(!((n = a.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new We() } : await le(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (s = (i = a.session) === null || i === void 0 ? void 0 : i.access_token) !== null && s !== void 0 ? s : void 0,
          xform: Tt
        });
      });
    } catch (r) {
      if (ne(r))
        return qd(r) && (await this._removeSession(), await At(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ data: { user: null }, error: r });
      throw r;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(t, r = {}) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(t, r));
  }
  async _updateUser(t, r = {}) {
    try {
      return await this._useSession(async (n) => {
        const { data: i, error: s } = n;
        if (s)
          throw s;
        if (!i.session)
          throw new We();
        const a = i.session;
        let o = null, l = null;
        this.flowType === "pkce" && t.email != null && ([o, l] = await cr(this.storage, this.storageKey));
        const { data: c, error: u } = await le(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: r?.emailRedirectTo,
          body: Object.assign(Object.assign({}, t), { code_challenge: o, code_challenge_method: l }),
          jwt: a.access_token,
          xform: Tt
        });
        if (u)
          throw u;
        return a.user = c.user, await this._saveSession(a), await this._notifyAllSubscribers("USER_UPDATED", a), this._returnResult({ data: { user: a.user }, error: null });
      });
    } catch (n) {
      if (ne(n))
        return this._returnResult({ data: { user: null }, error: n });
      throw n;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(t) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(t));
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token)
        throw new We();
      const r = Date.now() / 1e3;
      let n = r, i = !0, s = null;
      const { payload: a } = Pi(t.access_token);
      if (a.exp && (n = a.exp, i = n <= r), i) {
        const { data: o, error: l } = await this._callRefreshToken(t.refresh_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        if (!o)
          return { data: { user: null, session: null }, error: null };
        s = o;
      } else {
        const { data: o, error: l } = await this._getUser(t.access_token);
        if (l)
          throw l;
        s = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: o.user,
          token_type: "bearer",
          expires_in: n - r,
          expires_at: n
        }, await this._saveSession(s), await this._notifyAllSubscribers("SIGNED_IN", s);
      }
      return this._returnResult({ data: { user: s.user, session: s }, error: null });
    } catch (r) {
      if (ne(r))
        return this._returnResult({ data: { session: null, user: null }, error: r });
      throw r;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(t) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(t));
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        if (!t) {
          const { data: a, error: o } = r;
          if (o)
            throw o;
          t = (n = a.session) !== null && n !== void 0 ? n : void 0;
        }
        if (!t?.refresh_token)
          throw new We();
        const { data: i, error: s } = await this._callRefreshToken(t.refresh_token);
        return s ? this._returnResult({ data: { user: null, session: null }, error: s }) : i ? this._returnResult({ data: { user: i.user, session: i }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (r) {
      if (ne(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(t, r) {
    try {
      if (!ze())
        throw new $n("No browser detected.");
      if (t.error || t.error_description || t.error_code)
        throw new $n(t.error_description || "Error in URL with unspecified error_description", {
          error: t.error || "unspecified_error",
          code: t.error_code || "unspecified_code"
        });
      switch (r) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Ba("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new $n("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (r === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !t.code)
          throw new Ba("No code detected.");
        const { data: _, error: w } = await this._exchangeCodeForSession(t.code);
        if (w)
          throw w;
        const A = new URL(window.location.href);
        return A.searchParams.delete("code"), window.history.replaceState(window.history.state, "", A.toString()), { data: { session: _.session, redirectType: null }, error: null };
      }
      const { provider_token: n, provider_refresh_token: i, access_token: s, refresh_token: a, expires_in: o, expires_at: l, token_type: c } = t;
      if (!s || !o || !a || !c)
        throw new $n("No session defined in URL");
      const u = Math.round(Date.now() / 1e3), d = parseInt(o);
      let f = u + d;
      l && (f = parseInt(l));
      const h = f - u;
      h * 1e3 <= gr && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${h}s, should have been closer to ${d}s`);
      const g = f - d;
      u - g >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", g, f, u) : u - g < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", g, f, u);
      const { data: m, error: v } = await this._getUser(s);
      if (v)
        throw v;
      const p = {
        provider_token: n,
        provider_refresh_token: i,
        access_token: s,
        expires_in: d,
        expires_at: f,
        refresh_token: a,
        token_type: c,
        user: m.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({ data: { session: p, redirectType: t.type }, error: null });
    } catch (n) {
      if (ne(n))
        return this._returnResult({ data: { session: null, redirectType: null }, error: n });
      throw n;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantCallback(t) {
    return !!(t.access_token || t.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(t) {
    const r = await Mt(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && r);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(t = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(t));
  }
  async _signOut({ scope: t } = { scope: "global" }) {
    return await this._useSession(async (r) => {
      var n;
      const { data: i, error: s } = r;
      if (s)
        return this._returnResult({ error: s });
      const a = (n = i.session) === null || n === void 0 ? void 0 : n.access_token;
      if (a) {
        const { error: o } = await this.admin.signOut(a, t);
        if (o && !(Wd(o) && (o.status === 404 || o.status === 401 || o.status === 403)))
          return this._returnResult({ error: o });
      }
      return t !== "others" && (await this._removeSession(), await At(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
    });
  }
  onAuthStateChange(t) {
    const r = ef(), n = {
      id: r,
      callback: t,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", r), this.stateChangeEmitters.delete(r);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", r), this.stateChangeEmitters.set(r, n), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
      this._emitInitialSession(r);
    })))(), { data: { subscription: n } };
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (r) => {
      var n, i;
      try {
        const { data: { session: s }, error: a } = r;
        if (a)
          throw a;
        await ((n = this.stateChangeEmitters.get(t)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", s)), this._debug("INITIAL_SESSION", "callback id", t, "session", s);
      } catch (s) {
        await ((i = this.stateChangeEmitters.get(t)) === null || i === void 0 ? void 0 : i.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", t, "error", s), console.error(s);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(t, r = {}) {
    let n = null, i = null;
    this.flowType === "pkce" && ([n, i] = await cr(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await le(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: n,
          code_challenge_method: i,
          gotrue_meta_security: { captcha_token: r.captchaToken }
        },
        headers: this.headers,
        redirectTo: r.redirectTo
      });
    } catch (s) {
      if (ne(s))
        return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var t;
    try {
      const { data: r, error: n } = await this.getUser();
      if (n)
        throw n;
      return this._returnResult({ data: { identities: (t = r.user.identities) !== null && t !== void 0 ? t : [] }, error: null });
    } catch (r) {
      if (ne(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async linkIdentity(t) {
    return "token" in t ? this.linkIdentityIdToken(t) : this.linkIdentityOAuth(t);
  }
  async linkIdentityOAuth(t) {
    var r;
    try {
      const { data: n, error: i } = await this._useSession(async (s) => {
        var a, o, l, c, u;
        const { data: d, error: f } = s;
        if (f)
          throw f;
        const h = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, t.provider, {
          redirectTo: (a = t.options) === null || a === void 0 ? void 0 : a.redirectTo,
          scopes: (o = t.options) === null || o === void 0 ? void 0 : o.scopes,
          queryParams: (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await le(this.fetch, "GET", h, {
          headers: this.headers,
          jwt: (u = (c = d.session) === null || c === void 0 ? void 0 : c.access_token) !== null && u !== void 0 ? u : void 0
        });
      });
      if (i)
        throw i;
      return ze() && !(!((r = t.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(n?.url), this._returnResult({
        data: { provider: t.provider, url: n?.url },
        error: null
      });
    } catch (n) {
      if (ne(n))
        return this._returnResult({ data: { provider: t.provider, url: null }, error: n });
      throw n;
    }
  }
  async linkIdentityIdToken(t) {
    return await this._useSession(async (r) => {
      var n;
      try {
        const { error: i, data: { session: s } } = r;
        if (i)
          throw i;
        const { options: a, provider: o, token: l, access_token: c, nonce: u } = t, d = await le(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (n = s?.access_token) !== null && n !== void 0 ? n : void 0,
          body: {
            provider: o,
            id_token: l,
            access_token: c,
            nonce: u,
            link_identity: !0,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          },
          xform: nt
        }), { data: f, error: h } = d;
        return h ? this._returnResult({ data: { user: null, session: null }, error: h }) : !f || !f.session || !f.user ? this._returnResult({
          data: { user: null, session: null },
          error: new lr()
        }) : (f.session && (await this._saveSession(f.session), await this._notifyAllSubscribers("USER_UPDATED", f.session)), this._returnResult({ data: f, error: h }));
      } catch (i) {
        if (ne(i))
          return this._returnResult({ data: { user: null, session: null }, error: i });
        throw i;
      }
    });
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (r) => {
        var n, i;
        const { data: s, error: a } = r;
        if (a)
          throw a;
        return await le(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
          headers: this.headers,
          jwt: (i = (n = s.session) === null || n === void 0 ? void 0 : n.access_token) !== null && i !== void 0 ? i : void 0
        });
      });
    } catch (r) {
      if (ne(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(t) {
    const r = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      const n = Date.now();
      return await sf(async (i) => (i > 0 && await nf(200 * Math.pow(2, i - 1)), this._debug(r, "refreshing attempt", i), await le(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: t },
        headers: this.headers,
        xform: nt
      })), (i, s) => {
        const a = 200 * Math.pow(2, i);
        return s && Ni(s) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + a - n < gr;
      });
    } catch (n) {
      if (this._debug(r, "error", n), ne(n))
        return this._returnResult({ data: { session: null, user: null }, error: n });
      throw n;
    } finally {
      this._debug(r, "end");
    }
  }
  _isValidSession(t) {
    return typeof t == "object" && t !== null && "access_token" in t && "refresh_token" in t && "expires_at" in t;
  }
  async _handleProviderSignIn(t, r) {
    const n = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: r.redirectTo,
      scopes: r.scopes,
      queryParams: r.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", t, "options", r, "url", n), ze() && !r.skipBrowserRedirect && window.location.assign(n), { data: { provider: t, url: n }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var t, r;
    const n = "#_recoverAndRefresh()";
    this._debug(n, "begin");
    try {
      const i = await Mt(this.storage, this.storageKey);
      if (i && this.userStorage) {
        let a = await Mt(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !a && (a = { user: i.user }, await mr(this.userStorage, this.storageKey + "-user", a)), i.user = (t = a?.user) !== null && t !== void 0 ? t : $i();
      } else if (i && !i.user && !i.user) {
        const a = await Mt(this.storage, this.storageKey + "-user");
        a && a?.user ? (i.user = a.user, await At(this.storage, this.storageKey + "-user"), await mr(this.storage, this.storageKey, i)) : i.user = $i();
      }
      if (this._debug(n, "session from storage", i), !this._isValidSession(i)) {
        this._debug(n, "session is not valid"), i !== null && await this._removeSession();
        return;
      }
      const s = ((r = i.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 - Date.now() < Ci;
      if (this._debug(n, `session has${s ? "" : " not"} expired with margin of ${Ci}s`), s) {
        if (this.autoRefreshToken && i.refresh_token) {
          const { error: a } = await this._callRefreshToken(i.refresh_token);
          a && (console.error(a), Ni(a) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", a), await this._removeSession()));
        }
      } else if (i.user && i.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: a, error: o } = await this._getUser(i.access_token);
          !o && a?.user ? (i.user = a.user, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i)) : this._debug(n, "could not get user data, skipping SIGNED_IN notification");
        } catch (a) {
          console.error("Error getting user data:", a), this._debug(n, "error getting user data, skipping SIGNED_IN notification", a);
        }
      else
        await this._notifyAllSubscribers("SIGNED_IN", i);
    } catch (i) {
      this._debug(n, "error", i), console.error(i);
      return;
    } finally {
      this._debug(n, "end");
    }
  }
  async _callRefreshToken(t) {
    var r, n;
    if (!t)
      throw new We();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const i = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(i, "begin");
    try {
      this.refreshingDeferred = new mi();
      const { data: s, error: a } = await this._refreshAccessToken(t);
      if (a)
        throw a;
      if (!s.session)
        throw new We();
      await this._saveSession(s.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", s.session);
      const o = { data: s.session, error: null };
      return this.refreshingDeferred.resolve(o), o;
    } catch (s) {
      if (this._debug(i, "error", s), ne(s)) {
        const a = { data: null, error: s };
        return Ni(s) || await this._removeSession(), (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(a), a;
      }
      throw (n = this.refreshingDeferred) === null || n === void 0 || n.reject(s), s;
    } finally {
      this.refreshingDeferred = null, this._debug(i, "end");
    }
  }
  async _notifyAllSubscribers(t, r, n = !0) {
    const i = `#_notifyAllSubscribers(${t})`;
    this._debug(i, "begin", r, `broadcast = ${n}`);
    try {
      this.broadcastChannel && n && this.broadcastChannel.postMessage({ event: t, session: r });
      const s = [], a = Array.from(this.stateChangeEmitters.values()).map(async (o) => {
        try {
          await o.callback(t, r);
        } catch (l) {
          s.push(l);
        }
      });
      if (await Promise.all(a), s.length > 0) {
        for (let o = 0; o < s.length; o += 1)
          console.error(s[o]);
        throw s[0];
      }
    } finally {
      this._debug(i, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(t) {
    this._debug("#_saveSession()", t), this.suppressGetSessionWarning = !0;
    const r = Object.assign({}, t), n = r.user && r.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !n && r.user && await mr(this.userStorage, this.storageKey + "-user", {
        user: r.user
      });
      const i = Object.assign({}, r);
      delete i.user;
      const s = Wa(i);
      await mr(this.storage, this.storageKey, s);
    } else {
      const i = Wa(r);
      await mr(this.storage, this.storageKey, i);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await At(this.storage, this.storageKey), await At(this.storage, this.storageKey + "-code-verifier"), await At(this.storage, this.storageKey + "-user"), this.userStorage && await At(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t && ze() && window?.removeEventListener && window.removeEventListener("visibilitychange", t);
    } catch (r) {
      console.error("removing visibilitychange callback failed", r);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const t = setInterval(() => this._autoRefreshTokenTick(), gr);
    this.autoRefreshTicker = t, t && typeof t == "object" && typeof t.unref == "function" ? t.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t), setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const t = this.autoRefreshTicker;
    this.autoRefreshTicker = null, t && clearInterval(t);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async (r) => {
              const { data: { session: n } } = r;
              if (!n || !n.refresh_token || !n.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const i = Math.floor((n.expires_at * 1e3 - t) / gr);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${i} ticks, a tick lasts ${gr}ms, refresh threshold is ${xs} ticks`), i <= xs && await this._callRefreshToken(n.refresh_token);
            });
          } catch (r) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", r);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof Cc)
        this._debug("auto refresh token tick lock not available");
      else
        throw t;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !ze() || !window?.addEventListener)
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window?.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (t) {
      console.error("_handleVisibilityChange", t);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(t) {
    const r = `#_onVisibilityChanged(${t})`;
    this._debug(r, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), t || (await this.initializePromise, await this._acquireLock(-1, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(r, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(t, r, n) {
    const i = [`provider=${encodeURIComponent(r)}`];
    if (n?.redirectTo && i.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`), n?.scopes && i.push(`scopes=${encodeURIComponent(n.scopes)}`), this.flowType === "pkce") {
      const [s, a] = await cr(this.storage, this.storageKey), o = new URLSearchParams({
        code_challenge: `${encodeURIComponent(s)}`,
        code_challenge_method: `${encodeURIComponent(a)}`
      });
      i.push(o.toString());
    }
    if (n?.queryParams) {
      const s = new URLSearchParams(n.queryParams);
      i.push(s.toString());
    }
    return n?.skipBrowserRedirect && i.push(`skip_http_redirect=${n.skipBrowserRedirect}`), `${t}?${i.join("&")}`;
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        const { data: i, error: s } = r;
        return s ? this._returnResult({ data: null, error: s }) : await le(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
          headers: this.headers,
          jwt: (n = i?.session) === null || n === void 0 ? void 0 : n.access_token
        });
      });
    } catch (r) {
      if (ne(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n, i;
        const { data: s, error: a } = r;
        if (a)
          return this._returnResult({ data: null, error: a });
        const o = Object.assign({ friendly_name: t.friendlyName, factor_type: t.factorType }, t.factorType === "phone" ? { phone: t.phone } : t.factorType === "totp" ? { issuer: t.issuer } : {}), { data: l, error: c } = await le(this.fetch, "POST", `${this.url}/factors`, {
          body: o,
          headers: this.headers,
          jwt: (n = s?.session) === null || n === void 0 ? void 0 : n.access_token
        });
        return c ? this._returnResult({ data: null, error: c }) : (t.factorType === "totp" && l.type === "totp" && (!((i = l?.totp) === null || i === void 0) && i.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), this._returnResult({ data: l, error: null }));
      });
    } catch (r) {
      if (ne(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _verify(t) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: i, error: s } = r;
          if (s)
            return this._returnResult({ data: null, error: s });
          const a = Object.assign({ challenge_id: t.challengeId }, "webauthn" in t ? {
            webauthn: Object.assign(Object.assign({}, t.webauthn), { credential_response: t.webauthn.type === "create" ? zf(t.webauthn.credential_response) : jf(t.webauthn.credential_response) })
          } : { code: t.code }), { data: o, error: l } = await le(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
            body: a,
            headers: this.headers,
            jwt: (n = i?.session) === null || n === void 0 ? void 0 : n.access_token
          });
          return l ? this._returnResult({ data: null, error: l }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + o.expires_in }, o)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o), this._returnResult({ data: o, error: l }));
        });
      } catch (r) {
        if (ne(r))
          return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challenge(t) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: i, error: s } = r;
          if (s)
            return this._returnResult({ data: null, error: s });
          const a = await le(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
            body: t,
            headers: this.headers,
            jwt: (n = i?.session) === null || n === void 0 ? void 0 : n.access_token
          });
          if (a.error)
            return a;
          const { data: o } = a;
          if (o.type !== "webauthn")
            return { data: o, error: null };
          switch (o.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, o), { webauthn: Object.assign(Object.assign({}, o.webauthn), { credential_options: Object.assign(Object.assign({}, o.webauthn.credential_options), { publicKey: Pf(o.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, o), { webauthn: Object.assign(Object.assign({}, o.webauthn), { credential_options: Object.assign(Object.assign({}, o.webauthn.credential_options), { publicKey: $f(o.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (r) {
        if (ne(r))
          return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(t) {
    const { data: r, error: n } = await this._challenge({
      factorId: t.factorId
    });
    return n ? this._returnResult({ data: null, error: n }) : await this._verify({
      factorId: t.factorId,
      challengeId: r.id,
      code: t.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    var t;
    const { data: { user: r }, error: n } = await this.getUser();
    if (n)
      return { data: null, error: n };
    const i = {
      all: [],
      phone: [],
      totp: [],
      webauthn: []
    };
    for (const s of (t = r?.factors) !== null && t !== void 0 ? t : [])
      i.all.push(s), s.status === "verified" && i[s.factor_type].push(s);
    return {
      data: i,
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    var t, r;
    const { data: { session: n }, error: i } = await this.getSession();
    if (i)
      return this._returnResult({ data: null, error: i });
    if (!n)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null
      };
    const { payload: s } = Pi(n.access_token);
    let a = null;
    s.aal && (a = s.aal);
    let o = a;
    ((r = (t = n.user.factors) === null || t === void 0 ? void 0 : t.filter((u) => u.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (o = "aal2");
    const c = s.amr || [];
    return { data: { currentLevel: a, nextLevel: o, currentAuthenticationMethods: c }, error: null };
  }
  /**
   * Retrieves details about an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * Returns authorization details including client info, scopes, and user information.
   * If the API returns a redirect_uri, it means consent was already given - the caller
   * should handle the redirect manually if needed.
   */
  async _getAuthorizationDetails(t) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: i } = r;
        return i ? this._returnResult({ data: null, error: i }) : n ? await le(this.fetch, "GET", `${this.url}/oauth/authorizations/${t}`, {
          headers: this.headers,
          jwt: n.access_token,
          xform: (s) => ({ data: s, error: null })
        }) : this._returnResult({ data: null, error: new We() });
      });
    } catch (r) {
      if (ne(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Approves an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _approveAuthorization(t, r) {
    try {
      return await this._useSession(async (n) => {
        const { data: { session: i }, error: s } = n;
        if (s)
          return this._returnResult({ data: null, error: s });
        if (!i)
          return this._returnResult({ data: null, error: new We() });
        const a = await le(this.fetch, "POST", `${this.url}/oauth/authorizations/${t}/consent`, {
          headers: this.headers,
          jwt: i.access_token,
          body: { action: "approve" },
          xform: (o) => ({ data: o, error: null })
        });
        return a.data && a.data.redirect_url && ze() && !r?.skipBrowserRedirect && window.location.assign(a.data.redirect_url), a;
      });
    } catch (n) {
      if (ne(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Denies an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _denyAuthorization(t, r) {
    try {
      return await this._useSession(async (n) => {
        const { data: { session: i }, error: s } = n;
        if (s)
          return this._returnResult({ data: null, error: s });
        if (!i)
          return this._returnResult({ data: null, error: new We() });
        const a = await le(this.fetch, "POST", `${this.url}/oauth/authorizations/${t}/consent`, {
          headers: this.headers,
          jwt: i.access_token,
          body: { action: "deny" },
          xform: (o) => ({ data: o, error: null })
        });
        return a.data && a.data.redirect_url && ze() && !r?.skipBrowserRedirect && window.location.assign(a.data.redirect_url), a;
      });
    } catch (n) {
      if (ne(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Lists all OAuth grants that the authenticated user has authorized.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (t) => {
        const { data: { session: r }, error: n } = t;
        return n ? this._returnResult({ data: null, error: n }) : r ? await le(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: r.access_token,
          xform: (i) => ({ data: i, error: null })
        }) : this._returnResult({ data: null, error: new We() });
      });
    } catch (t) {
      if (ne(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  /**
   * Revokes a user's OAuth grant for a specific client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _revokeOAuthGrant(t) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: i } = r;
        return i ? this._returnResult({ data: null, error: i }) : n ? (await le(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: n.access_token,
          query: { client_id: t.clientId },
          noResolveJson: !0
        }), { data: {}, error: null }) : this._returnResult({ data: null, error: new We() });
      });
    } catch (r) {
      if (ne(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async fetchJwk(t, r = { keys: [] }) {
    let n = r.keys.find((o) => o.kid === t);
    if (n)
      return n;
    const i = Date.now();
    if (n = this.jwks.keys.find((o) => o.kid === t), n && this.jwks_cached_at + Md > i)
      return n;
    const { data: s, error: a } = await le(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (a)
      throw a;
    return !s.keys || s.keys.length === 0 || (this.jwks = s, this.jwks_cached_at = i, n = s.keys.find((o) => o.kid === t), !n) ? null : n;
  }
  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link #getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to {@link
   * #getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link #getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   */
  async getClaims(t, r = {}) {
    try {
      let n = t;
      if (!n) {
        const { data: h, error: g } = await this.getSession();
        if (g || !h.session)
          return this._returnResult({ data: null, error: g });
        n = h.session.access_token;
      }
      const { header: i, payload: s, signature: a, raw: { header: o, payload: l } } = Pi(n);
      r?.allowExpired || df(s.exp);
      const c = !i.alg || i.alg.startsWith("HS") || !i.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(i.kid, r?.keys ? { keys: r.keys } : r?.jwks);
      if (!c) {
        const { error: h } = await this.getUser(n);
        if (h)
          throw h;
        return {
          data: {
            claims: s,
            header: i,
            signature: a
          },
          error: null
        };
      }
      const u = ff(i.alg), d = await crypto.subtle.importKey("jwk", c, u, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(u, d, a, Xd(`${o}.${l}`)))
        throw new Ts("Invalid JWT signature");
      return {
        data: {
          claims: s,
          header: i,
          signature: a
        },
        error: null
      };
    } catch (n) {
      if (ne(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
}
sn.nextInstanceID = {};
const Wf = sn;
class qf extends Wf {
  constructor(t) {
    super(t);
  }
}
class Hf {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.storage Options passed along to the storage-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   * @example
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
   * const { data } = await supabase.from('profiles').select('*')
   * ```
   */
  constructor(t, r, n) {
    var i, s, a;
    this.supabaseUrl = t, this.supabaseKey = r;
    const o = Fd(t);
    if (!r)
      throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", o), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", o), this.storageUrl = new URL("storage/v1", o), this.functionsUrl = new URL("functions/v1", o);
    const l = `sb-${o.hostname.split(".")[0]}-auth-token`, c = {
      db: Id,
      realtime: Nd,
      auth: Object.assign(Object.assign({}, Cd), { storageKey: l }),
      global: Rd
    }, u = Ud(n ?? {}, c);
    this.storageKey = (i = u.auth.storageKey) !== null && i !== void 0 ? i : "", this.headers = (s = u.global.headers) !== null && s !== void 0 ? s : {}, u.accessToken ? (this.accessToken = u.accessToken, this.auth = new Proxy({}, {
      get: (d, f) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((a = u.auth) !== null && a !== void 0 ? a : {}, this.headers, u.global.fetch), this.fetch = zd(r, this._getAccessToken.bind(this), u.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, u.realtime)), this.accessToken && this.accessToken().then((d) => this.realtime.setAuth(d)).catch((d) => console.warn("Failed to set initial Realtime auth token:", d)), this.rest = new Nh(new URL("rest/v1", o).href, {
      headers: this.headers,
      schema: u.db.schema,
      fetch: this.fetch
    }), this.storage = new Ad(this.storageUrl.href, this.headers, this.fetch, n?.storage), u.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new Oh(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(t) {
    return this.rest.from(t);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(t) {
    return this.rest.schema(t);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(t, r = {}, n = {
    head: !1,
    get: !1,
    count: void 0
  }) {
    return this.rest.rpc(t, r, n);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(t, r = { config: {} }) {
    return this.realtime.channel(t, r);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(t) {
    return this.realtime.removeChannel(t);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getAccessToken() {
    var t, r;
    if (this.accessToken)
      return await this.accessToken();
    const { data: n } = await this.auth.getSession();
    return (r = (t = n.session) === null || t === void 0 ? void 0 : t.access_token) !== null && r !== void 0 ? r : this.supabaseKey;
  }
  _initSupabaseAuthClient({ autoRefreshToken: t, persistSession: r, detectSessionInUrl: n, storage: i, userStorage: s, storageKey: a, flowType: o, lock: l, debug: c, throwOnError: u }, d, f) {
    const h = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new qf({
      url: this.authUrl.href,
      headers: Object.assign(Object.assign({}, h), d),
      storageKey: a,
      autoRefreshToken: t,
      persistSession: r,
      detectSessionInUrl: n,
      storage: i,
      userStorage: s,
      flowType: o,
      lock: l,
      debug: c,
      throwOnError: u,
      fetch: f,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((g) => g.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(t) {
    return new Gh(this.realtimeUrl.href, Object.assign(Object.assign({}, t), { params: Object.assign({ apikey: this.supabaseKey }, t?.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((r, n) => {
      this._handleTokenChanged(r, "CLIENT", n?.access_token);
    });
  }
  _handleTokenChanged(t, r, n) {
    (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") && this.changedAccessToken !== n ? (this.changedAccessToken = n, this.realtime.setAuth(n)) : t === "SIGNED_OUT" && (this.realtime.setAuth(), r == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
}
const Kf = (e, t, r) => new Hf(e, t, r);
function Gf() {
  if (typeof window < "u" || typeof process > "u")
    return !1;
  const e = process.version;
  if (e == null)
    return !1;
  const t = e.match(/^v(\d+)\./);
  return t ? parseInt(t[1], 10) <= 18 : !1;
}
Gf() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
let Os = null;
function V1(e, t) {
  Os = Kf(e, t);
}
function ue() {
  if (!Os)
    throw new Error(
      "Supabase has not been initialized. Call initSupabase() first."
    );
  return Os;
}
function Jf(e) {
  switch (e.message.toLowerCase()) {
    case "missing email or phone":
      return "No email provided";
    case "invalid login credentials":
      return "Invalid email or password";
    case "signup requires a valid password":
      return "No password provided";
    case "password should be at least 6 characters.":
      return "Password should be at least 6 characters";
    case "unable to validate email address: invalid format":
      return "Invalid email address";
    case "anonymous sign-ins are disabled":
      return "No email provided";
  }
  return e.message;
}
function Ze(e, t) {
  if (e.message.toLowerCase().includes("duplicate key value violates unique constraint")) {
    let r = e.message.split('"')[1].split("_");
    return r.shift(), r.pop(), r.join(" ") === "app id build version" && (r = ["build version"]), `A${t.toLowerCase().startsWith("a") || t.toLowerCase().startsWith("e") || t.toLowerCase().startsWith("i") || t.toLowerCase().startsWith("o") || t.toLowerCase().startsWith("u") ? "n" : ""} ${t} with the same ${r.join(
      " "
    )} already exists.`;
  }
  return e.message.toLowerCase().includes("cannot coerce the result to a single json object") ? `The specified ${t} does not exist.` : e.message;
}
function Yf(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
Array(12).fill(0);
let Rs = 1;
class Xf {
  constructor() {
    this.subscribe = (t) => (this.subscribers.push(t), () => {
      const r = this.subscribers.indexOf(t);
      this.subscribers.splice(r, 1);
    }), this.publish = (t) => {
      this.subscribers.forEach((r) => r(t));
    }, this.addToast = (t) => {
      this.publish(t), this.toasts = [
        ...this.toasts,
        t
      ];
    }, this.create = (t) => {
      var r;
      const { message: n, ...i } = t, s = typeof t?.id == "number" || ((r = t.id) == null ? void 0 : r.length) > 0 ? t.id : Rs++, a = this.toasts.find((l) => l.id === s), o = t.dismissible === void 0 ? !0 : t.dismissible;
      return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s), a ? this.toasts = this.toasts.map((l) => l.id === s ? (this.publish({
        ...l,
        ...t,
        id: s,
        title: n
      }), {
        ...l,
        ...t,
        id: s,
        dismissible: o,
        title: n
      }) : l) : this.addToast({
        title: n,
        ...i,
        dismissible: o,
        id: s
      }), s;
    }, this.dismiss = (t) => (t ? (this.dismissedToasts.add(t), requestAnimationFrame(() => this.subscribers.forEach((r) => r({
      id: t,
      dismiss: !0
    })))) : this.toasts.forEach((r) => {
      this.subscribers.forEach((n) => n({
        id: r.id,
        dismiss: !0
      }));
    }), t), this.message = (t, r) => this.create({
      ...r,
      message: t
    }), this.error = (t, r) => this.create({
      ...r,
      message: t,
      type: "error"
    }), this.success = (t, r) => this.create({
      ...r,
      type: "success",
      message: t
    }), this.info = (t, r) => this.create({
      ...r,
      type: "info",
      message: t
    }), this.warning = (t, r) => this.create({
      ...r,
      type: "warning",
      message: t
    }), this.loading = (t, r) => this.create({
      ...r,
      type: "loading",
      message: t
    }), this.promise = (t, r) => {
      if (!r)
        return;
      let n;
      r.loading !== void 0 && (n = this.create({
        ...r,
        promise: t,
        type: "loading",
        message: r.loading,
        description: typeof r.description != "function" ? r.description : void 0
      }));
      const i = Promise.resolve(t instanceof Function ? t() : t);
      let s = n !== void 0, a;
      const o = i.then(async (c) => {
        if (a = [
          "resolve",
          c
        ], qt.isValidElement(c))
          s = !1, this.create({
            id: n,
            type: "default",
            message: c
          });
        else if (ep(c) && !c.ok) {
          s = !1;
          const d = typeof r.error == "function" ? await r.error(`HTTP error! status: ${c.status}`) : r.error, f = typeof r.description == "function" ? await r.description(`HTTP error! status: ${c.status}`) : r.description, g = typeof d == "object" && !qt.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: n,
            type: "error",
            description: f,
            ...g
          });
        } else if (c instanceof Error) {
          s = !1;
          const d = typeof r.error == "function" ? await r.error(c) : r.error, f = typeof r.description == "function" ? await r.description(c) : r.description, g = typeof d == "object" && !qt.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: n,
            type: "error",
            description: f,
            ...g
          });
        } else if (r.success !== void 0) {
          s = !1;
          const d = typeof r.success == "function" ? await r.success(c) : r.success, f = typeof r.description == "function" ? await r.description(c) : r.description, g = typeof d == "object" && !qt.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: n,
            type: "success",
            description: f,
            ...g
          });
        }
      }).catch(async (c) => {
        if (a = [
          "reject",
          c
        ], r.error !== void 0) {
          s = !1;
          const u = typeof r.error == "function" ? await r.error(c) : r.error, d = typeof r.description == "function" ? await r.description(c) : r.description, h = typeof u == "object" && !qt.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: n,
            type: "error",
            description: d,
            ...h
          });
        }
      }).finally(() => {
        s && (this.dismiss(n), n = void 0), r.finally == null || r.finally.call(r);
      }), l = () => new Promise((c, u) => o.then(() => a[0] === "reject" ? u(a[1]) : c(a[1])).catch(u));
      return typeof n != "string" && typeof n != "number" ? {
        unwrap: l
      } : Object.assign(n, {
        unwrap: l
      });
    }, this.custom = (t, r) => {
      const n = r?.id || Rs++;
      return this.create({
        jsx: t(n),
        id: n,
        ...r
      }), n;
    }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const Xe = new Xf(), Qf = (e, t) => {
  const r = t?.id || Rs++;
  return Xe.addToast({
    title: e,
    ...t,
    id: r
  }), r;
}, ep = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", tp = Qf, rp = () => Xe.toasts, np = () => Xe.getActiveToasts(), ce = Object.assign(tp, {
  success: Xe.success,
  info: Xe.info,
  warning: Xe.warning,
  error: Xe.error,
  custom: Xe.custom,
  message: Xe.message,
  promise: Xe.promise,
  dismiss: Xe.dismiss,
  loading: Xe.loading
}, {
  getHistory: rp,
  getToasts: np
});
Yf("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
const ip = "data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23fff'/%3e%3c/svg%3e", $c = Fl(
  void 0
), W1 = ({ children: e }) => {
  const [t, r] = $e(!0), [n, i] = $e(null), [s, a] = $e([]), o = qt.useRef(!1);
  $t(() => {
    ue().auth.getSession().then(({ data: { session: h } }) => {
      i(h), r(!1);
    });
    const {
      data: { subscription: f }
    } = ue().auth.onAuthStateChange((h, g) => {
      i(g), r(!1);
    });
    return () => f.unsubscribe();
  }, []);
  const l = Mr(async () => {
    if (!n) {
      a([]);
      return;
    }
    o.current = !0, ue().from("apps").select("*").eq("owner", n.user.id).then(({ data: h, error: g }) => {
      g ? (console.error("Error fetching apps:", g), ce.error("Error fetching apps: " + g.message)) : a(h || []);
    });
  }, [n]);
  $t(() => {
    n && (n.user.user_metadata?.display_name === void 0 && (n.user.app_metadata.provider === "github" ? ue().auth.updateUser({
      data: {
        display_name: n.user.user_metadata.preferred_username || "GitHub User"
      }
    }) : ue().auth.updateUser({
      data: {
        display_name: n.user.email?.split("@")[0] || "User"
      }
    })), o.current || l());
  }, [n, l]);
  const c = Mr(
    async (f) => {
      if (!n) {
        ce.error("You must be logged in to create an app.");
        return;
      }
      const h = await ue().from("apps").insert([f]).select().single();
      return h.error ? (console.error(h.error), ce.error(Ze(h.error, "app"))) : l(), h;
    },
    [n, l]
  ), u = Mr(
    async (f, h) => {
      if (!n)
        throw "You must be logged in to upload an icon.";
      const g = f.name.includes(".") ? "." + f.name.split(".").pop() : "", { data: m, error: v } = await ue().storage.from("app-images").upload(
        `${n.user.id}/${h.id}/icon-${Date.now()}${g}`,
        f
      );
      if (v)
        throw console.error("Error uploading icon:", v), "Error uploading icon: " + v.message;
      if (h.icon_path !== null && h.icon_path !== void 0 && h.icon_path !== "") {
        const { error: w } = await ue().storage.from("app-images").remove([h.icon_path || ""]);
        if (w)
          throw console.error("Error deleting old icon:", w), "Error deleting old icon: " + w.message;
      }
      const p = m?.path, _ = await ue().from("apps").update({
        icon_path: p
      }).eq("id", h.id).single();
      if (_.error)
        throw console.error("Error updating app with icon URL:", _.error), "Error updating app with icon URL: " + _.error.message;
      await l();
    },
    [l, n]
  ), d = Mr(
    async (f, h, g) => {
      if (!n)
        throw "You must be logged in to upload a screenshot.";
      const m = [];
      for (const w of f) {
        const { width: A, height: k, err: E } = await new Promise((T) => {
          const O = new Image();
          O.onload = () => {
            T({ width: O.width, height: O.height });
          }, O.onerror = () => {
            T({ width: 0, height: 0, err: "Failed to load image" });
          }, O.src = URL.createObjectURL(new Blob([w], { type: w.type }));
        });
        if (E)
          throw console.error("Error loading image for dimensions:", E), "Error fetching dimensions of image: " + E;
        if (A <= 0 || k <= 0)
          throw console.error("Invalid image dimensions:", A, k), "Invalid image dimensions.";
        let x = A / k;
        if (g) {
          if (x < 4 / 3 - 0.1 || x > 4 / 3 + 0.1)
            throw "iPad screenshots must have approximately 4:3 aspect ratio.";
        } else {
          let T = x < 0.4625 || x > 0.6625, O = x < 9 / 19.5 - 0.1 || x > 9 / 19.5 + 0.1, b = x < 4 / 3 - 0.1 || x > 4 / 3 + 0.1;
          if (T && O && b)
            throw "iPhone screenshots must have approximately a 9:16, 9/19.5, or 3:4 aspect ratio.";
        }
        const R = w.name.includes(".") ? "." + w.name.split(".").pop() : "", { data: S, error: I } = await ue().storage.from("app-images").upload(
          `${n.user.id}/${h.id}/screenshot-${g ? "ipad" : "iphone"}-${Date.now()}${R}`,
          w
        );
        if (I)
          throw console.error("Error uploading screenshot:", I), "Error uploading screenshot: " + I.message;
        const P = S?.path;
        m.push({ path: P || "", width: A, height: k });
      }
      const v = g ? "ipad_screenshots" : "iphone_screenshots", p = [
        ...h[v],
        ...m
      ], _ = await ue().from("apps").update({
        [v]: p
      }).eq("id", h.id).single();
      if (_.error)
        throw console.error("Error updating app with screenshot URL:", _.error), "Error updating app with screenshot URL: " + _.error.message;
      await l();
    },
    [l, n]
  );
  return t ? null : n ? /* @__PURE__ */ j(
    $c.Provider,
    {
      value: {
        session: n,
        apps: s,
        createApp: c,
        reloadApps: l,
        uploadIcon: u,
        uploadScreenshot: d
      },
      children: e
    }
  ) : /* @__PURE__ */ j(sp, {});
}, Me = () => {
  const e = qt.useContext($c);
  if (e === void 0)
    throw new Error("useDeveloper must be used within a DeveloperProvider");
  return e;
}, sp = () => {
  const [e, t] = $e(!0), [r, n] = $e(""), [i, s] = $e(""), [a, o] = $e(""), l = Mr(async () => {
    let c;
    if (e) {
      if (!a || a.trim().length === 0) {
        ce.error("Please provide a display name.");
        return;
      }
      c = async () => {
        let u = await ue().auth.signUp({
          email: r,
          password: i,
          options: {
            emailRedirectTo: `${window.location.origin}/developers`,
            data: {
              display_name: a
            }
          }
        });
        if (u.error)
          throw u.error;
        if (u.data?.user?.email_confirmed_at !== void 0)
          throw {
            message: "An account has already been created with this email."
          };
      };
    } else
      c = async () => {
        let u = await ue().auth.signInWithPassword({
          email: r,
          password: i
        });
        if (u.error)
          throw u.error;
      };
    ce.promise(c, {
      loading: e ? "Signing up..." : "Logging in...",
      success: e ? "Please check your email to complete account creation!" : "Logged in successfully!",
      error: (u) => (console.error(u), Jf(u))
    });
  }, [e, r, i, a]);
  return /* @__PURE__ */ j("div", { className: "page-centered-container", children: /* @__PURE__ */ j("div", { className: "page-centered-inner", children: /* @__PURE__ */ j(Ie, { className: "dev-login-card", children: /* @__PURE__ */ Y("div", { className: "login", children: [
    /* @__PURE__ */ Y("div", { className: "login-header", children: [
      /* @__PURE__ */ Y("h1", { className: "dev-login-title", children: [
        e ? "Sign up for" : "Login to",
        " StikStore"
      ] }),
      /* @__PURE__ */ j("p", { className: "dev-login-subtitle", children: "One account to download, purchase, or publish apps." })
    ] }),
    /* @__PURE__ */ Y(
      "button",
      {
        className: "github-button",
        onClick: () => {
          ue().auth.signInWithOAuth({
            provider: "github",
            options: {
              redirectTo: `${window.location.origin}/developers`
            }
          });
        },
        children: [
          /* @__PURE__ */ j("img", { src: ip, alt: "GitHub Logo", className: "github-logo" }),
          "Sign In with GitHub"
        ]
      }
    ),
    /* @__PURE__ */ Y(
      "form",
      {
        className: "login",
        onSubmit: (c) => {
          c.preventDefault(), l();
        },
        children: [
          e && /* @__PURE__ */ Y("div", { children: [
            /* @__PURE__ */ j("label", { htmlFor: "name", children: "Display Name" }),
            /* @__PURE__ */ j(
              "input",
              {
                id: "name",
                type: "text",
                placeholder: "John Doe",
                value: a,
                onChange: (c) => o(c.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ Y("div", { children: [
            /* @__PURE__ */ j("label", { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ j(
              "input",
              {
                id: "email",
                type: "text",
                placeholder: "email@example.com",
                value: r,
                onChange: (c) => n(c.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ Y("div", { children: [
            /* @__PURE__ */ j("label", { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ j(
              "input",
              {
                id: "password",
                type: "password",
                placeholder: "••••••••",
                value: i,
                onChange: (c) => s(c.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ j("button", { type: "submit", children: e ? "Sign Up" : "Log In" })
        ]
      }
    ),
    /* @__PURE__ */ Y("p", { className: "signup-switcher", children: [
      e ? "Already have an account?" : "Don't have an account?",
      " ",
      /* @__PURE__ */ j(
        "a",
        {
          href: "#",
          onClick: (c) => {
            c.preventDefault(), t(!e);
          },
          children: e ? "Log In" : "Sign Up"
        }
      )
    ] })
  ] }) }) }) });
};
function Ue(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function mt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Is({
  pathname: e = "/",
  search: t = "",
  hash: r = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function ea(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substring(r), e = e.substring(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substring(n), e = e.substring(0, n)), e && (t.pathname = e);
  }
  return t;
}
function zc(e, t, r = "/") {
  return ap(e, t, r, !1);
}
function ap(e, t, r, n) {
  let i = typeof t == "string" ? ea(t) : t, s = zt(i.pathname || "/", r);
  if (s == null)
    return null;
  let a = jc(e);
  op(a);
  let o = null;
  for (let l = 0; o == null && l < a.length; ++l) {
    let c = vp(s);
    o = mp(
      a[l],
      c,
      n
    );
  }
  return o;
}
function jc(e, t = [], r = [], n = "", i = !1) {
  let s = (a, o, l = i, c) => {
    let u = {
      relativePath: c === void 0 ? a.path || "" : c,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: o,
      route: a
    };
    if (u.relativePath.startsWith("/")) {
      if (!u.relativePath.startsWith(n) && l)
        return;
      Ue(
        u.relativePath.startsWith(n),
        `Absolute route path "${u.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), u.relativePath = u.relativePath.slice(n.length);
    }
    let d = xt([n, u.relativePath]), f = r.concat(u);
    a.children && a.children.length > 0 && (Ue(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      a.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${d}".`
    ), jc(
      a.children,
      t,
      f,
      d,
      l
    )), !(a.path == null && !a.index) && t.push({
      path: d,
      score: pp(d, a.index),
      routesMeta: f
    });
  };
  return e.forEach((a, o) => {
    if (a.path === "" || !a.path?.includes("?"))
      s(a, o);
    else
      for (let l of Uc(a.path))
        s(a, o, !0, l);
  }), t;
}
function Uc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, i = r.endsWith("?"), s = r.replace(/\?$/, "");
  if (n.length === 0)
    return i ? [s, ""] : [s];
  let a = Uc(n.join("/")), o = [];
  return o.push(
    ...a.map(
      (l) => l === "" ? s : [s, l].join("/")
    )
  ), i && o.push(...a), o.map(
    (l) => e.startsWith("/") && l === "" ? "/" : l
  );
}
function op(e) {
  e.sort(
    (t, r) => t.score !== r.score ? r.score - t.score : gp(
      t.routesMeta.map((n) => n.childrenIndex),
      r.routesMeta.map((n) => n.childrenIndex)
    )
  );
}
var lp = /^:[\w-]+$/, cp = 3, up = 2, hp = 1, dp = 10, fp = -2, Xa = (e) => e === "*";
function pp(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(Xa) && (n += fp), t && (n += up), r.filter((i) => !Xa(i)).reduce(
    (i, s) => i + (lp.test(s) ? cp : s === "" ? hp : dp),
    n
  );
}
function gp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function mp(e, t, r = !1) {
  let { routesMeta: n } = e, i = {}, s = "/", a = [];
  for (let o = 0; o < n.length; ++o) {
    let l = n[o], c = o === n.length - 1, u = s === "/" ? t : t.slice(s.length) || "/", d = si(
      { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
      u
    ), f = l.route;
    if (!d && c && r && !n[n.length - 1].route.index && (d = si(
      {
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: !1
      },
      u
    )), !d)
      return null;
    Object.assign(i, d.params), a.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: xt([s, d.pathname]),
      pathnameBase: Ep(
        xt([s, d.pathnameBase])
      ),
      route: f
    }), d.pathnameBase !== "/" && (s = xt([s, d.pathnameBase]));
  }
  return a;
}
function si(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = _p(
    e.path,
    e.caseSensitive,
    e.end
  ), i = t.match(r);
  if (!i) return null;
  let s = i[0], a = s.replace(/(.)\/+$/, "$1"), o = i.slice(1);
  return {
    params: n.reduce(
      (c, { paramName: u, isOptional: d }, f) => {
        if (u === "*") {
          let g = o[f] || "";
          a = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1");
        }
        const h = o[f];
        return d && !h ? c[u] = void 0 : c[u] = (h || "").replace(/%2F/g, "/"), c;
      },
      {}
    ),
    pathname: s,
    pathnameBase: a,
    pattern: e
  };
}
function _p(e, t = !1, r = !0) {
  mt(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let n = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (a, o, l) => (n.push({ paramName: o, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (n.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), n];
}
function vp(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return mt(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function zt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
var wp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, bp = (e) => wp.test(e);
function yp(e, t = "/") {
  let {
    pathname: r,
    search: n = "",
    hash: i = ""
  } = typeof e == "string" ? ea(e) : e, s;
  if (r)
    if (bp(r))
      s = r;
    else {
      if (r.includes("//")) {
        let a = r;
        r = r.replace(/\/\/+/g, "/"), mt(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${a} -> ${r}`
        );
      }
      r.startsWith("/") ? s = Qa(r.substring(1), "/") : s = Qa(r, t);
    }
  else
    s = t;
  return {
    pathname: s,
    search: xp(n),
    hash: Sp(i)
  };
}
function Qa(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i);
  }), r.length > 1 ? r.join("/") : "/";
}
function ji(e, t, r, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    n
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function kp(e) {
  return e.filter(
    (t, r) => r === 0 || t.route.path && t.route.path.length > 0
  );
}
function Fc(e) {
  let t = kp(e);
  return t.map(
    (r, n) => n === t.length - 1 ? r.pathname : r.pathnameBase
  );
}
function Lc(e, t, r, n = !1) {
  let i;
  typeof e == "string" ? i = ea(e) : (i = { ...e }, Ue(
    !i.pathname || !i.pathname.includes("?"),
    ji("?", "pathname", "search", i)
  ), Ue(
    !i.pathname || !i.pathname.includes("#"),
    ji("#", "pathname", "hash", i)
  ), Ue(
    !i.search || !i.search.includes("#"),
    ji("#", "search", "hash", i)
  ));
  let s = e === "" || i.pathname === "", a = s ? "/" : i.pathname, o;
  if (a == null)
    o = r;
  else {
    let d = t.length - 1;
    if (!n && a.startsWith("..")) {
      let f = a.split("/");
      for (; f[0] === ".."; )
        f.shift(), d -= 1;
      i.pathname = f.join("/");
    }
    o = d >= 0 ? t[d] : "/";
  }
  let l = yp(i, o), c = a && a !== "/" && a.endsWith("/"), u = (s || a === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
var xt = (e) => e.join("/").replace(/\/\/+/g, "/"), Ep = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), xp = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Sp = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Ap(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Bc = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Bc
);
var Tp = [
  "GET",
  ...Bc
];
new Set(Tp);
var Cr = H.createContext(null);
Cr.displayName = "DataRouter";
var _i = H.createContext(null);
_i.displayName = "DataRouterState";
H.createContext(!1);
var Dc = H.createContext({
  isTransitioning: !1
});
Dc.displayName = "ViewTransition";
var Op = H.createContext(
  /* @__PURE__ */ new Map()
);
Op.displayName = "Fetchers";
var Rp = H.createContext(null);
Rp.displayName = "Await";
var St = H.createContext(
  null
);
St.displayName = "Navigation";
var ta = H.createContext(
  null
);
ta.displayName = "Location";
var at = H.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
at.displayName = "Route";
var ra = H.createContext(null);
ra.displayName = "RouteError";
function Ip(e, { relative: t } = {}) {
  Ue(
    vi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: n } = H.useContext(St), { hash: i, pathname: s, search: a } = _n(e, { relative: t }), o = s;
  return r !== "/" && (o = s === "/" ? r : xt([r, s])), n.createHref({ pathname: o, search: a, hash: i });
}
function vi() {
  return H.useContext(ta) != null;
}
function Lt() {
  return Ue(
    vi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), H.useContext(ta).location;
}
var Zc = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Mc(e) {
  H.useContext(St).static || H.useLayoutEffect(e);
}
function ot() {
  let { isDataRoute: e } = H.useContext(at);
  return e ? Wp() : Cp();
}
function Cp() {
  Ue(
    vi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = H.useContext(Cr), { basename: t, navigator: r } = H.useContext(St), { matches: n } = H.useContext(at), { pathname: i } = Lt(), s = JSON.stringify(Fc(n)), a = H.useRef(!1);
  return Mc(() => {
    a.current = !0;
  }), H.useCallback(
    (l, c = {}) => {
      if (mt(a.current, Zc), !a.current) return;
      if (typeof l == "number") {
        r.go(l);
        return;
      }
      let u = Lc(
        l,
        JSON.parse(s),
        i,
        c.relative === "path"
      );
      e == null && t !== "/" && (u.pathname = u.pathname === "/" ? t : xt([t, u.pathname])), (c.replace ? r.replace : r.push)(
        u,
        c.state,
        c
      );
    },
    [
      t,
      r,
      s,
      i,
      e
    ]
  );
}
var Np = H.createContext(null);
function Pp(e) {
  let t = H.useContext(at).outlet;
  return H.useMemo(
    () => t && /* @__PURE__ */ H.createElement(Np.Provider, { value: e }, t),
    [t, e]
  );
}
function Bt() {
  let { matches: e } = H.useContext(at), t = e[e.length - 1];
  return t ? t.params : {};
}
function _n(e, { relative: t } = {}) {
  let { matches: r } = H.useContext(at), { pathname: n } = Lt(), i = JSON.stringify(Fc(r));
  return H.useMemo(
    () => Lc(
      e,
      JSON.parse(i),
      n,
      t === "path"
    ),
    [e, i, n, t]
  );
}
function $p(e, t, r, n, i) {
  Ue(
    vi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: s } = H.useContext(St), { matches: a } = H.useContext(at), o = a[a.length - 1], l = o ? o.params : {}, c = o ? o.pathname : "/", u = o ? o.pathnameBase : "/", d = o && o.route;
  {
    let _ = d && d.path || "";
    Vc(
      c,
      !d || _.endsWith("*") || _.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_ === "/" ? "*" : `${_}/*`}">.`
    );
  }
  let f = Lt(), h;
  h = f;
  let g = h.pathname || "/", m = g;
  if (u !== "/") {
    let _ = u.replace(/^\//, "").split("/");
    m = "/" + g.replace(/^\//, "").split("/").slice(_.length).join("/");
  }
  let v = zc(e, { pathname: m });
  return mt(
    d || v != null,
    `No routes matched location "${h.pathname}${h.search}${h.hash}" `
  ), mt(
    v == null || v[v.length - 1].route.element !== void 0 || v[v.length - 1].route.Component !== void 0 || v[v.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), Lp(
    v && v.map(
      (_) => Object.assign({}, _, {
        params: Object.assign({}, l, _.params),
        pathname: xt([
          u,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          s.encodeLocation ? s.encodeLocation(
            _.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : _.pathname
        ]),
        pathnameBase: _.pathnameBase === "/" ? u : xt([
          u,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          s.encodeLocation ? s.encodeLocation(
            _.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : _.pathnameBase
        ])
      })
    ),
    a,
    r,
    n,
    i
  );
}
function zp() {
  let e = Vp(), t = Ap(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", i = { padding: "0.5rem", backgroundColor: n }, s = { padding: "2px 4px", backgroundColor: n }, a = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), a = /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ H.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ H.createElement("code", { style: s }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ H.createElement("code", { style: s }, "errorElement"), " prop on your route.")), /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ H.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? /* @__PURE__ */ H.createElement("pre", { style: i }, r) : null, a);
}
var jp = /* @__PURE__ */ H.createElement(zp, null), Up = class extends H.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    this.props.onError ? this.props.onError(e, t) : console.error(
      "React Router caught the following error during render",
      e
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ H.createElement(at.Provider, { value: this.props.routeContext }, /* @__PURE__ */ H.createElement(
      ra.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function Fp({ routeContext: e, match: t, children: r }) {
  let n = H.useContext(Cr);
  return n && n.static && n.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ H.createElement(at.Provider, { value: e }, r);
}
function Lp(e, t = [], r = null, n = null, i = null) {
  if (e == null) {
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let s = e, a = r?.errors;
  if (a != null) {
    let u = s.findIndex(
      (d) => d.route.id && a?.[d.route.id] !== void 0
    );
    Ue(
      u >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        a
      ).join(",")}`
    ), s = s.slice(
      0,
      Math.min(s.length, u + 1)
    );
  }
  let o = !1, l = -1;
  if (r)
    for (let u = 0; u < s.length; u++) {
      let d = s[u];
      if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (l = u), d.route.id) {
        let { loaderData: f, errors: h } = r, g = d.route.loader && !f.hasOwnProperty(d.route.id) && (!h || h[d.route.id] === void 0);
        if (d.route.lazy || g) {
          o = !0, l >= 0 ? s = s.slice(0, l + 1) : s = [s[0]];
          break;
        }
      }
    }
  let c = r && n ? (u, d) => {
    n(u, {
      location: r.location,
      params: r.matches?.[0]?.params ?? {},
      errorInfo: d
    });
  } : void 0;
  return s.reduceRight(
    (u, d, f) => {
      let h, g = !1, m = null, v = null;
      r && (h = a && d.route.id ? a[d.route.id] : void 0, m = d.route.errorElement || jp, o && (l < 0 && f === 0 ? (Vc(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), g = !0, v = null) : l === f && (g = !0, v = d.route.hydrateFallbackElement || null)));
      let p = t.concat(s.slice(0, f + 1)), _ = () => {
        let w;
        return h ? w = m : g ? w = v : d.route.Component ? w = /* @__PURE__ */ H.createElement(d.route.Component, null) : d.route.element ? w = d.route.element : w = u, /* @__PURE__ */ H.createElement(
          Fp,
          {
            match: d,
            routeContext: {
              outlet: u,
              matches: p,
              isDataRoute: r != null
            },
            children: w
          }
        );
      };
      return r && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? /* @__PURE__ */ H.createElement(
        Up,
        {
          location: r.location,
          revalidation: r.revalidation,
          component: m,
          error: h,
          children: _(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
          onError: c
        }
      ) : _();
    },
    null
  );
}
function na(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Bp(e) {
  let t = H.useContext(Cr);
  return Ue(t, na(e)), t;
}
function Dp(e) {
  let t = H.useContext(_i);
  return Ue(t, na(e)), t;
}
function Zp(e) {
  let t = H.useContext(at);
  return Ue(t, na(e)), t;
}
function ia(e) {
  let t = Zp(e), r = t.matches[t.matches.length - 1];
  return Ue(
    r.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function Mp() {
  return ia(
    "useRouteId"
    /* UseRouteId */
  );
}
function Vp() {
  let e = H.useContext(ra), t = Dp(
    "useRouteError"
    /* UseRouteError */
  ), r = ia(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : t.errors?.[r];
}
function Wp() {
  let { router: e } = Bp(
    "useNavigate"
    /* UseNavigateStable */
  ), t = ia(
    "useNavigate"
    /* UseNavigateStable */
  ), r = H.useRef(!1);
  return Mc(() => {
    r.current = !0;
  }), H.useCallback(
    async (i, s = {}) => {
      mt(r.current, Zc), r.current && (typeof i == "number" ? e.navigate(i) : await e.navigate(i, { fromRouteId: t, ...s }));
    },
    [e, t]
  );
}
var eo = {};
function Vc(e, t, r) {
  !t && !eo[e] && (eo[e] = !0, mt(!1, r));
}
H.memo(qp);
function qp({
  routes: e,
  future: t,
  state: r,
  unstable_onError: n
}) {
  return $p(e, void 0, r, n, t);
}
function Hp(e) {
  return Pp(e.context);
}
var Jn = "get", Yn = "application/x-www-form-urlencoded";
function wi(e) {
  return e != null && typeof e.tagName == "string";
}
function Kp(e) {
  return wi(e) && e.tagName.toLowerCase() === "button";
}
function Gp(e) {
  return wi(e) && e.tagName.toLowerCase() === "form";
}
function Jp(e) {
  return wi(e) && e.tagName.toLowerCase() === "input";
}
function Yp(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Xp(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Yp(e);
}
var zn = null;
function Qp() {
  if (zn === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), zn = !1;
    } catch {
      zn = !0;
    }
  return zn;
}
var eg = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Ui(e) {
  return e != null && !eg.has(e) ? (mt(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yn}"`
  ), null) : e;
}
function tg(e, t) {
  let r, n, i, s, a;
  if (Gp(e)) {
    let o = e.getAttribute("action");
    n = o ? zt(o, t) : null, r = e.getAttribute("method") || Jn, i = Ui(e.getAttribute("enctype")) || Yn, s = new FormData(e);
  } else if (Kp(e) || Jp(e) && (e.type === "submit" || e.type === "image")) {
    let o = e.form;
    if (o == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || o.getAttribute("action");
    if (n = l ? zt(l, t) : null, r = e.getAttribute("formmethod") || o.getAttribute("method") || Jn, i = Ui(e.getAttribute("formenctype")) || Ui(o.getAttribute("enctype")) || Yn, s = new FormData(o, e), !Qp()) {
      let { name: c, type: u, value: d } = e;
      if (u === "image") {
        let f = c ? `${c}.` : "";
        s.append(`${f}x`, "0"), s.append(`${f}y`, "0");
      } else c && s.append(c, d);
    }
  } else {
    if (wi(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = Jn, n = null, i = Yn, a = e;
  }
  return s && i === "text/plain" && (a = s, s = void 0), { action: n, method: r.toLowerCase(), encType: i, formData: s, body: a };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function sa(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function rg(e, t, r) {
  let n = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return n.pathname === "/" ? n.pathname = `_root.${r}` : t && zt(n.pathname, t) === "/" ? n.pathname = `${t.replace(/\/$/, "")}/_root.${r}` : n.pathname = `${n.pathname.replace(/\/$/, "")}.${r}`, n;
}
async function ng(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let r = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = r, r;
  } catch (r) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function ig(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function sg(e, t, r) {
  let n = await Promise.all(
    e.map(async (i) => {
      let s = t.routes[i.route.id];
      if (s) {
        let a = await ng(s, r);
        return a.links ? a.links() : [];
      }
      return [];
    })
  );
  return cg(
    n.flat(1).filter(ig).filter((i) => i.rel === "stylesheet" || i.rel === "preload").map(
      (i) => i.rel === "stylesheet" ? { ...i, rel: "prefetch", as: "style" } : { ...i, rel: "prefetch" }
    )
  );
}
function to(e, t, r, n, i, s) {
  let a = (l, c) => r[c] ? l.route.id !== r[c].route.id : !0, o = (l, c) => (
    // param change, /users/123 -> /users/456
    r[c].pathname !== l.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    r[c].route.path?.endsWith("*") && r[c].params["*"] !== l.params["*"]
  );
  return s === "assets" ? t.filter(
    (l, c) => a(l, c) || o(l, c)
  ) : s === "data" ? t.filter((l, c) => {
    let u = n.routes[l.route.id];
    if (!u || !u.hasLoader)
      return !1;
    if (a(l, c) || o(l, c))
      return !0;
    if (l.route.shouldRevalidate) {
      let d = l.route.shouldRevalidate({
        currentUrl: new URL(
          i.pathname + i.search + i.hash,
          window.origin
        ),
        currentParams: r[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: l.params,
        defaultShouldRevalidate: !0
      });
      if (typeof d == "boolean")
        return d;
    }
    return !0;
  }) : [];
}
function ag(e, t, { includeHydrateFallback: r } = {}) {
  return og(
    e.map((n) => {
      let i = t.routes[n.route.id];
      if (!i) return [];
      let s = [i.module];
      return i.clientActionModule && (s = s.concat(i.clientActionModule)), i.clientLoaderModule && (s = s.concat(i.clientLoaderModule)), r && i.hydrateFallbackModule && (s = s.concat(i.hydrateFallbackModule)), i.imports && (s = s.concat(i.imports)), s;
    }).flat(1)
  );
}
function og(e) {
  return [...new Set(e)];
}
function lg(e) {
  let t = {}, r = Object.keys(e).sort();
  for (let n of r)
    t[n] = e[n];
  return t;
}
function cg(e, t) {
  let r = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((n, i) => {
    let s = JSON.stringify(lg(i));
    return r.has(s) || (r.add(s), n.push({ key: s, link: i })), n;
  }, []);
}
function Wc() {
  let e = H.useContext(Cr);
  return sa(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function ug() {
  let e = H.useContext(_i);
  return sa(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var aa = H.createContext(void 0);
aa.displayName = "FrameworkContext";
function qc() {
  let e = H.useContext(aa);
  return sa(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function hg(e, t) {
  let r = H.useContext(aa), [n, i] = H.useState(!1), [s, a] = H.useState(!1), { onFocus: o, onBlur: l, onMouseEnter: c, onMouseLeave: u, onTouchStart: d } = t, f = H.useRef(null);
  H.useEffect(() => {
    if (e === "render" && a(!0), e === "viewport") {
      let m = (p) => {
        p.forEach((_) => {
          a(_.isIntersecting);
        });
      }, v = new IntersectionObserver(m, { threshold: 0.5 });
      return f.current && v.observe(f.current), () => {
        v.disconnect();
      };
    }
  }, [e]), H.useEffect(() => {
    if (n) {
      let m = setTimeout(() => {
        a(!0);
      }, 100);
      return () => {
        clearTimeout(m);
      };
    }
  }, [n]);
  let h = () => {
    i(!0);
  }, g = () => {
    i(!1), a(!1);
  };
  return r ? e !== "intent" ? [s, f, {}] : [
    s,
    f,
    {
      onFocus: Br(o, h),
      onBlur: Br(l, g),
      onMouseEnter: Br(c, h),
      onMouseLeave: Br(u, g),
      onTouchStart: Br(d, h)
    }
  ] : [!1, f, {}];
}
function Br(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function dg({ page: e, ...t }) {
  let { router: r } = Wc(), n = H.useMemo(
    () => zc(r.routes, e, r.basename),
    [r.routes, e, r.basename]
  );
  return n ? /* @__PURE__ */ H.createElement(pg, { page: e, matches: n, ...t }) : null;
}
function fg(e) {
  let { manifest: t, routeModules: r } = qc(), [n, i] = H.useState([]);
  return H.useEffect(() => {
    let s = !1;
    return sg(e, t, r).then(
      (a) => {
        s || i(a);
      }
    ), () => {
      s = !0;
    };
  }, [e, t, r]), n;
}
function pg({
  page: e,
  matches: t,
  ...r
}) {
  let n = Lt(), { manifest: i, routeModules: s } = qc(), { basename: a } = Wc(), { loaderData: o, matches: l } = ug(), c = H.useMemo(
    () => to(
      e,
      t,
      l,
      i,
      n,
      "data"
    ),
    [e, t, l, i, n]
  ), u = H.useMemo(
    () => to(
      e,
      t,
      l,
      i,
      n,
      "assets"
    ),
    [e, t, l, i, n]
  ), d = H.useMemo(() => {
    if (e === n.pathname + n.search + n.hash)
      return [];
    let g = /* @__PURE__ */ new Set(), m = !1;
    if (t.forEach((p) => {
      let _ = i.routes[p.route.id];
      !_ || !_.hasLoader || (!c.some((w) => w.route.id === p.route.id) && p.route.id in o && s[p.route.id]?.shouldRevalidate || _.hasClientLoader ? m = !0 : g.add(p.route.id));
    }), g.size === 0)
      return [];
    let v = rg(e, a, "data");
    return m && g.size > 0 && v.searchParams.set(
      "_routes",
      t.filter((p) => g.has(p.route.id)).map((p) => p.route.id).join(",")
    ), [v.pathname + v.search];
  }, [
    a,
    o,
    n,
    i,
    c,
    t,
    e,
    s
  ]), f = H.useMemo(
    () => ag(u, i),
    [u, i]
  ), h = fg(u);
  return /* @__PURE__ */ H.createElement(H.Fragment, null, d.map((g) => /* @__PURE__ */ H.createElement("link", { key: g, rel: "prefetch", as: "fetch", href: g, ...r })), f.map((g) => /* @__PURE__ */ H.createElement("link", { key: g, rel: "modulepreload", href: g, ...r })), h.map(({ key: g, link: m }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ H.createElement("link", { key: g, nonce: r.nonce, ...m })
  )));
}
function gg(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var Hc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Hc && (window.__reactRouterVersion = // @ts-expect-error
  "7.9.6");
} catch {
}
var Kc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Gc = H.forwardRef(
  function({
    onClick: t,
    discover: r = "render",
    prefetch: n = "none",
    relative: i,
    reloadDocument: s,
    replace: a,
    state: o,
    target: l,
    to: c,
    preventScrollReset: u,
    viewTransition: d,
    ...f
  }, h) {
    let { basename: g } = H.useContext(St), m = typeof c == "string" && Kc.test(c), v, p = !1;
    if (typeof c == "string" && m && (v = c, Hc))
      try {
        let S = new URL(window.location.href), I = c.startsWith("//") ? new URL(S.protocol + c) : new URL(c), P = zt(I.pathname, g);
        I.origin === S.origin && P != null ? c = P + I.search + I.hash : p = !0;
      } catch {
        mt(
          !1,
          `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let _ = Ip(c, { relative: i }), [w, A, k] = hg(
      n,
      f
    ), E = wg(c, {
      replace: a,
      state: o,
      target: l,
      preventScrollReset: u,
      relative: i,
      viewTransition: d
    });
    function x(S) {
      t && t(S), S.defaultPrevented || E(S);
    }
    let R = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ H.createElement(
        "a",
        {
          ...f,
          ...k,
          href: v || _,
          onClick: p || s ? t : x,
          ref: gg(h, A),
          target: l,
          "data-discover": !m && r === "render" ? "true" : void 0
        }
      )
    );
    return w && !m ? /* @__PURE__ */ H.createElement(H.Fragment, null, R, /* @__PURE__ */ H.createElement(dg, { page: _ })) : R;
  }
);
Gc.displayName = "Link";
var mg = H.forwardRef(
  function({
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: n = "",
    end: i = !1,
    style: s,
    to: a,
    viewTransition: o,
    children: l,
    ...c
  }, u) {
    let d = _n(a, { relative: c.relative }), f = Lt(), h = H.useContext(_i), { navigator: g, basename: m } = H.useContext(St), v = h != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    xg(d) && o === !0, p = g.encodeLocation ? g.encodeLocation(d).pathname : d.pathname, _ = f.pathname, w = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
    r || (_ = _.toLowerCase(), w = w ? w.toLowerCase() : null, p = p.toLowerCase()), w && m && (w = zt(w, m) || w);
    const A = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let k = _ === p || !i && _.startsWith(p) && _.charAt(A) === "/", E = w != null && (w === p || !i && w.startsWith(p) && w.charAt(p.length) === "/"), x = {
      isActive: k,
      isPending: E,
      isTransitioning: v
    }, R = k ? t : void 0, S;
    typeof n == "function" ? S = n(x) : S = [
      n,
      k ? "active" : null,
      E ? "pending" : null,
      v ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let I = typeof s == "function" ? s(x) : s;
    return /* @__PURE__ */ H.createElement(
      Gc,
      {
        ...c,
        "aria-current": R,
        className: S,
        ref: u,
        style: I,
        to: a,
        viewTransition: o
      },
      typeof l == "function" ? l(x) : l
    );
  }
);
mg.displayName = "NavLink";
var _g = H.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: r,
    reloadDocument: n,
    replace: i,
    state: s,
    method: a = Jn,
    action: o,
    onSubmit: l,
    relative: c,
    preventScrollReset: u,
    viewTransition: d,
    ...f
  }, h) => {
    let g = kg(), m = Eg(o, { relative: c }), v = a.toLowerCase() === "get" ? "get" : "post", p = typeof o == "string" && Kc.test(o), _ = (w) => {
      if (l && l(w), w.defaultPrevented) return;
      w.preventDefault();
      let A = w.nativeEvent.submitter, k = A?.getAttribute("formmethod") || a;
      g(A || w.currentTarget, {
        fetcherKey: t,
        method: k,
        navigate: r,
        replace: i,
        state: s,
        relative: c,
        preventScrollReset: u,
        viewTransition: d
      });
    };
    return /* @__PURE__ */ H.createElement(
      "form",
      {
        ref: h,
        method: v,
        action: m,
        onSubmit: n ? l : _,
        ...f,
        "data-discover": !p && e === "render" ? "true" : void 0
      }
    );
  }
);
_g.displayName = "Form";
function vg(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jc(e) {
  let t = H.useContext(Cr);
  return Ue(t, vg(e)), t;
}
function wg(e, {
  target: t,
  replace: r,
  state: n,
  preventScrollReset: i,
  relative: s,
  viewTransition: a
} = {}) {
  let o = ot(), l = Lt(), c = _n(e, { relative: s });
  return H.useCallback(
    (u) => {
      if (Xp(u, t)) {
        u.preventDefault();
        let d = r !== void 0 ? r : Is(l) === Is(c);
        o(e, {
          replace: d,
          state: n,
          preventScrollReset: i,
          relative: s,
          viewTransition: a
        });
      }
    },
    [
      l,
      o,
      c,
      r,
      n,
      t,
      e,
      i,
      s,
      a
    ]
  );
}
var bg = 0, yg = () => `__${String(++bg)}__`;
function kg() {
  let { router: e } = Jc(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = H.useContext(St), r = Mp();
  return H.useCallback(
    async (n, i = {}) => {
      let { action: s, method: a, encType: o, formData: l, body: c } = tg(
        n,
        t
      );
      if (i.navigate === !1) {
        let u = i.fetcherKey || yg();
        await e.fetch(u, r, i.action || s, {
          preventScrollReset: i.preventScrollReset,
          formData: l,
          body: c,
          formMethod: i.method || a,
          formEncType: i.encType || o,
          flushSync: i.flushSync
        });
      } else
        await e.navigate(i.action || s, {
          preventScrollReset: i.preventScrollReset,
          formData: l,
          body: c,
          formMethod: i.method || a,
          formEncType: i.encType || o,
          replace: i.replace,
          state: i.state,
          fromRouteId: r,
          flushSync: i.flushSync,
          viewTransition: i.viewTransition
        });
    },
    [e, t, r]
  );
}
function Eg(e, { relative: t } = {}) {
  let { basename: r } = H.useContext(St), n = H.useContext(at);
  Ue(n, "useFormAction must be used inside a RouteContext");
  let [i] = n.matches.slice(-1), s = { ..._n(e || ".", { relative: t }) }, a = Lt();
  if (e == null) {
    s.search = a.search;
    let o = new URLSearchParams(s.search), l = o.getAll("index");
    if (l.some((u) => u === "")) {
      o.delete("index"), l.filter((d) => d).forEach((d) => o.append("index", d));
      let u = o.toString();
      s.search = u ? `?${u}` : "";
    }
  }
  return (!e || e === ".") && i.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (s.pathname = s.pathname === "/" ? r : xt([r, s.pathname])), Is(s);
}
function xg(e, { relative: t } = {}) {
  let r = H.useContext(Dc);
  Ue(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: n } = Jc(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), i = _n(e, { relative: t });
  if (!r.isTransitioning)
    return !1;
  let s = zt(r.currentLocation.pathname, n) || r.currentLocation.pathname, a = zt(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return si(i.pathname, a) != null || si(i.pathname, s) != null;
}
const q1 = () => {
  const { session: e } = Me(), t = ot();
  return /* @__PURE__ */ Y("section", { className: "settings-page", children: [
    /* @__PURE__ */ Y("div", { className: "settings-header", children: [
      /* @__PURE__ */ j("h1", { children: "Account Settings" }),
      /* @__PURE__ */ j("h4", { className: "text-link", onClick: () => t("/developers"), children: "Back to Dashboard" })
    ] }),
    /* @__PURE__ */ Y(Ie, { children: [
      /* @__PURE__ */ j("h3", { children: "Profile" }),
      /* @__PURE__ */ Y("p", { children: [
        "Display Name: ",
        e.user.user_metadata.display_name
      ] }),
      /* @__PURE__ */ Y("p", { children: [
        "Email: ",
        e.user.email
      ] }),
      /* @__PURE__ */ j(
        "button",
        {
          style: { marginTop: "1.5rem", width: "100%" },
          onClick: async () => {
            await ue().auth.signOut(), window.location.href = "/developers";
          },
          children: "Log Out"
        }
      )
    ] })
  ] });
}, an = ({
  app: e,
  showBackToApp: t,
  backToAppPage: r,
  titleOverride: n,
  subtitleOverride: i,
  inline: s
}) => {
  const a = ot(), o = Ws(
    () => e.icon_path ? ue().storage.from("app-images").getPublicUrl(e.icon_path).data.publicUrl : "/default-icon.png",
    [e.icon_path]
  );
  return /* @__PURE__ */ Y(
    "div",
    {
      className: `app-title-container${s ? " app-title-container-inline" : ""}`,
      children: [
        /* @__PURE__ */ j(
          "img",
          {
            src: o,
            className: "app-icon",
            onError: (l) => {
              l.currentTarget.src = "/default-icon.png";
            }
          }
        ),
        /* @__PURE__ */ Y("div", { children: [
          /* @__PURE__ */ j("h1", { className: "app-title", children: n ?? e.name }),
          (!n || i) && /* @__PURE__ */ j("p", { className: "app-subtitle", children: i ?? (e.subtitle || e.bundle_identifier) }),
          !s && /* @__PURE__ */ Y("div", { className: "version-back-buttons", children: [
            t && /* @__PURE__ */ Y(vh, { children: [
              /* @__PURE__ */ Y(
                "h4",
                {
                  className: "text-link",
                  onClick: () => a(
                    "/developers/app/" + e?.id + "/" + (r || "info")
                  ),
                  children: [
                    "Back to ",
                    e?.name
                  ]
                }
              ),
              /* @__PURE__ */ j("span", { children: "•" })
            ] }),
            /* @__PURE__ */ j("h4", { className: "text-link", onClick: () => a("/developers"), children: "Back to Dashboard" })
          ] })
        ] })
      ]
    }
  );
}, H1 = () => {
  const { session: e, apps: t } = Me(), r = ot();
  return /* @__PURE__ */ Y("div", { className: "developer-container", children: [
    /* @__PURE__ */ j("h1", { children: "StikStore Developer Portal" }),
    /* @__PURE__ */ Y("section", { className: "developer-page", children: [
      /* @__PURE__ */ Y(Ie, { children: [
        /* @__PURE__ */ Y("h3", { children: [
          "Welcome to the Dashboard, ",
          e.user.user_metadata.display_name,
          "!"
        ] }),
        /* @__PURE__ */ Y("div", { className: "developer-buttons", children: [
          /* @__PURE__ */ j(
            "button",
            {
              onClick: () => {
                r("/developers/account-settings");
              },
              children: "Account Settings"
            }
          ),
          /* @__PURE__ */ j("button", { onClick: () => ue().auth.signOut(), children: "Log Out" })
        ] })
      ] }),
      /* @__PURE__ */ Y(Ie, { children: [
        /* @__PURE__ */ j("h3", { children: "Uploaded Apps" }),
        /* @__PURE__ */ j("ul", { style: { listStyleType: "none", padding: 0, margin: 0 }, children: t.map((n) => /* @__PURE__ */ j(
          "li",
          {
            className: "button developer-app-list-item",
            onClick: () => {
              r(`/developers/app/${n.id}`);
            },
            children: /* @__PURE__ */ j(an, { app: n, inline: !0 })
          },
          n.id
        )) }),
        /* @__PURE__ */ j(
          "button",
          {
            onClick: () => {
              r("/developers/new-app");
            },
            className: "primary",
            style: {
              width: "100%"
            },
            children: "Create/Import App"
          }
        )
      ] })
    ] })
  ] });
}, Yc = ({
  field: e,
  updateValue: t,
  value: r
}) => {
  let n;
  if (e.type === "text")
    n = /* @__PURE__ */ j(
      "input",
      {
        id: String(e.id),
        type: "text",
        value: r ? String(r) : "",
        placeholder: e.placeholder,
        required: e.required,
        onChange: (i) => {
          t(i.target.value);
        }
      }
    );
  else if (e.type === "textarea")
    n = /* @__PURE__ */ j(
      "textarea",
      {
        id: String(e.id),
        placeholder: e.placeholder,
        value: r ? String(r) : "",
        required: e.required,
        onChange: (i) => t(i.target.value),
        style: { minWidth: "100%", minHeight: "80px" }
      }
    );
  else if (e.type === "dropdown")
    n = /* @__PURE__ */ j(
      "select",
      {
        id: String(e.id),
        required: e.required,
        onChange: (i) => t(i.target.value),
        value: r ? String(r) : e.defaultValue,
        children: e.options.map((i) => /* @__PURE__ */ j("option", { value: i.value, children: i.label }, i.value))
      }
    );
  else
    return null;
  return /* @__PURE__ */ Y("div", { children: [
    /* @__PURE__ */ Y("div", { children: [
      /* @__PURE__ */ Y("label", { htmlFor: String(e.id), style: { margin: "0" }, children: [
        e.label,
        e.required ? /* @__PURE__ */ j("span", { className: "edit-required", children: "*" }) : ""
      ] }),
      e.description && /* @__PURE__ */ j("p", { style: { color: "var(--text-muted)", margin: "0" }, children: e.description })
    ] }),
    n
  ] });
}, ro = [
  {
    label: "App Name",
    id: "name",
    placeholder: "MyApp",
    required: !0,
    type: "text"
  },
  {
    label: "Bundle ID",
    id: "bundle_identifier",
    placeholder: "com.example.myapp",
    required: !0,
    type: "text",
    // https://stackoverflow.com/questions/22548997/regex-to-validate-apple-bundle-identifier
    validate: (e) => /^[a-z0-9]+(\.[a-z0-9]+)+$/gi.test(e)
  },
  {
    label: "Subtitle",
    id: "subtitle",
    placeholder: "An awesome app.",
    type: "text"
  },
  {
    label: "Description",
    id: "description",
    placeholder: "The best app ever, available on StikStore.",
    type: "textarea"
  },
  {
    label: "Category",
    id: "category",
    options: [
      { label: "Developer", value: "developer" },
      { label: "Entertainment", value: "entertainment" },
      { label: "Games", value: "games" },
      { label: "Lifestyle", value: "lifestyle" },
      { label: "Social", value: "social" },
      { label: "Photo & Video", value: "photo-video" },
      { label: "Utilities", value: "utilities" },
      { label: "Other", value: "other" }
    ],
    defaultValue: "other",
    type: "dropdown"
  }
], Xc = ({
  app: e,
  save: t,
  label: r,
  style: n
}) => {
  const [i, s] = $e(e);
  return $t(() => {
    s(e);
  }, [e]), /* @__PURE__ */ j(Ie, { style: n, children: /* @__PURE__ */ Y("form", { className: "edit-app-card", children: [
    /* @__PURE__ */ Y("div", { className: "edit-app-title", children: [
      /* @__PURE__ */ j("h2", { children: r || "App Metadata" }),
      /* @__PURE__ */ Y("p", { style: { color: "var(--label-secondary)" }, children: [
        "Fields marked with ",
        /* @__PURE__ */ j("span", { className: "edit-required", children: "*" }),
        " are required."
      ] })
    ] }),
    ro.map((a) => /* @__PURE__ */ j(
      Yc,
      {
        field: a,
        updateValue: (o) => {
          s({ ...i, [a.id]: o });
        },
        value: i[a.id]
      },
      a.id
    )),
    /* @__PURE__ */ j(
      "button",
      {
        style: {
          marginTop: "1rem"
        },
        className: "primary",
        type: "submit",
        onClick: (a) => {
          if (a.preventDefault(), !i.name || !i.bundle_identifier)
            return ce.error("Please fill in all required fields");
          for (const o of ro)
            if (o.validate) {
              const l = i[o.id];
              if (typeof l == "string" && !o.validate(l))
                return ce.error(`Invalid value for ${o.label}`);
            }
          t(i);
        },
        disabled: !i.name || !i.bundle_identifier || i === e,
        children: "Save App"
      }
    )
  ] }) });
};
function jn(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Fi = { exports: {} };
var no;
function Sg() {
  return no || (no = 1, (function(e, t) {
    (function(r) {
      e.exports = r();
    })(function() {
      return (function r(n, i, s) {
        function a(c, u) {
          if (!i[c]) {
            if (!n[c]) {
              var d = typeof jn == "function" && jn;
              if (!u && d) return d(c, !0);
              if (o) return o(c, !0);
              var f = new Error("Cannot find module '" + c + "'");
              throw f.code = "MODULE_NOT_FOUND", f;
            }
            var h = i[c] = { exports: {} };
            n[c][0].call(h.exports, function(g) {
              var m = n[c][1][g];
              return a(m || g);
            }, h, h.exports, r, n, i, s);
          }
          return i[c].exports;
        }
        for (var o = typeof jn == "function" && jn, l = 0; l < s.length; l++) a(s[l]);
        return a;
      })({ 1: [function(r, n, i) {
        var s = r("./utils"), a = r("./support"), o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        i.encode = function(l) {
          for (var c, u, d, f, h, g, m, v = [], p = 0, _ = l.length, w = _, A = s.getTypeOf(l) !== "string"; p < l.length; ) w = _ - p, d = A ? (c = l[p++], u = p < _ ? l[p++] : 0, p < _ ? l[p++] : 0) : (c = l.charCodeAt(p++), u = p < _ ? l.charCodeAt(p++) : 0, p < _ ? l.charCodeAt(p++) : 0), f = c >> 2, h = (3 & c) << 4 | u >> 4, g = 1 < w ? (15 & u) << 2 | d >> 6 : 64, m = 2 < w ? 63 & d : 64, v.push(o.charAt(f) + o.charAt(h) + o.charAt(g) + o.charAt(m));
          return v.join("");
        }, i.decode = function(l) {
          var c, u, d, f, h, g, m = 0, v = 0, p = "data:";
          if (l.substr(0, p.length) === p) throw new Error("Invalid base64 input, it looks like a data url.");
          var _, w = 3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (l.charAt(l.length - 1) === o.charAt(64) && w--, l.charAt(l.length - 2) === o.charAt(64) && w--, w % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (_ = a.uint8array ? new Uint8Array(0 | w) : new Array(0 | w); m < l.length; ) c = o.indexOf(l.charAt(m++)) << 2 | (f = o.indexOf(l.charAt(m++))) >> 4, u = (15 & f) << 4 | (h = o.indexOf(l.charAt(m++))) >> 2, d = (3 & h) << 6 | (g = o.indexOf(l.charAt(m++))), _[v++] = c, h !== 64 && (_[v++] = u), g !== 64 && (_[v++] = d);
          return _;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(r, n, i) {
        var s = r("./external"), a = r("./stream/DataWorker"), o = r("./stream/Crc32Probe"), l = r("./stream/DataLengthProbe");
        function c(u, d, f, h, g) {
          this.compressedSize = u, this.uncompressedSize = d, this.crc32 = f, this.compression = h, this.compressedContent = g;
        }
        c.prototype = { getContentWorker: function() {
          var u = new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")), d = this;
          return u.on("end", function() {
            if (this.streamInfo.data_length !== d.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), u;
        }, getCompressedWorker: function() {
          return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, c.createWorkerFrom = function(u, d, f) {
          return u.pipe(new o()).pipe(new l("uncompressedSize")).pipe(d.compressWorker(f)).pipe(new l("compressedSize")).withStreamInfo("compression", d);
        }, n.exports = c;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(r, n, i) {
        var s = r("./stream/GenericWorker");
        i.STORE = { magic: "\0\0", compressWorker: function() {
          return new s("STORE compression");
        }, uncompressWorker: function() {
          return new s("STORE decompression");
        } }, i.DEFLATE = r("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(r, n, i) {
        var s = r("./utils"), a = (function() {
          for (var o, l = [], c = 0; c < 256; c++) {
            o = c;
            for (var u = 0; u < 8; u++) o = 1 & o ? 3988292384 ^ o >>> 1 : o >>> 1;
            l[c] = o;
          }
          return l;
        })();
        n.exports = function(o, l) {
          return o !== void 0 && o.length ? s.getTypeOf(o) !== "string" ? (function(c, u, d, f) {
            var h = a, g = f + d;
            c ^= -1;
            for (var m = f; m < g; m++) c = c >>> 8 ^ h[255 & (c ^ u[m])];
            return -1 ^ c;
          })(0 | l, o, o.length, 0) : (function(c, u, d, f) {
            var h = a, g = f + d;
            c ^= -1;
            for (var m = f; m < g; m++) c = c >>> 8 ^ h[255 & (c ^ u.charCodeAt(m))];
            return -1 ^ c;
          })(0 | l, o, o.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(r, n, i) {
        i.base64 = !1, i.binary = !1, i.dir = !1, i.createFolders = !0, i.date = null, i.compression = null, i.compressionOptions = null, i.comment = null, i.unixPermissions = null, i.dosPermissions = null;
      }, {}], 6: [function(r, n, i) {
        var s = null;
        s = typeof Promise < "u" ? Promise : r("lie"), n.exports = { Promise: s };
      }, { lie: 37 }], 7: [function(r, n, i) {
        var s = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = r("pako"), o = r("./utils"), l = r("./stream/GenericWorker"), c = s ? "uint8array" : "array";
        function u(d, f) {
          l.call(this, "FlateWorker/" + d), this._pako = null, this._pakoAction = d, this._pakoOptions = f, this.meta = {};
        }
        i.magic = "\b\0", o.inherits(u, l), u.prototype.processChunk = function(d) {
          this.meta = d.meta, this._pako === null && this._createPako(), this._pako.push(o.transformTo(c, d.data), !1);
        }, u.prototype.flush = function() {
          l.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
        }, u.prototype.cleanUp = function() {
          l.prototype.cleanUp.call(this), this._pako = null;
        }, u.prototype._createPako = function() {
          this._pako = new a[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
          var d = this;
          this._pako.onData = function(f) {
            d.push({ data: f, meta: d.meta });
          };
        }, i.compressWorker = function(d) {
          return new u("Deflate", d);
        }, i.uncompressWorker = function() {
          return new u("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(r, n, i) {
        function s(h, g) {
          var m, v = "";
          for (m = 0; m < g; m++) v += String.fromCharCode(255 & h), h >>>= 8;
          return v;
        }
        function a(h, g, m, v, p, _) {
          var w, A, k = h.file, E = h.compression, x = _ !== c.utf8encode, R = o.transformTo("string", _(k.name)), S = o.transformTo("string", c.utf8encode(k.name)), I = k.comment, P = o.transformTo("string", _(I)), T = o.transformTo("string", c.utf8encode(I)), O = S.length !== k.name.length, b = T.length !== I.length, z = "", Q = "", V = "", oe = k.dir, B = k.date, re = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          g && !m || (re.crc32 = h.crc32, re.compressedSize = h.compressedSize, re.uncompressedSize = h.uncompressedSize);
          var L = 0;
          g && (L |= 8), x || !O && !b || (L |= 2048);
          var F = 0, se = 0;
          oe && (F |= 16), p === "UNIX" ? (se = 798, F |= (function(J, Ae) {
            var Fe = J;
            return J || (Fe = Ae ? 16893 : 33204), (65535 & Fe) << 16;
          })(k.unixPermissions, oe)) : (se = 20, F |= (function(J) {
            return 63 & (J || 0);
          })(k.dosPermissions)), w = B.getUTCHours(), w <<= 6, w |= B.getUTCMinutes(), w <<= 5, w |= B.getUTCSeconds() / 2, A = B.getUTCFullYear() - 1980, A <<= 4, A |= B.getUTCMonth() + 1, A <<= 5, A |= B.getUTCDate(), O && (Q = s(1, 1) + s(u(R), 4) + S, z += "up" + s(Q.length, 2) + Q), b && (V = s(1, 1) + s(u(P), 4) + T, z += "uc" + s(V.length, 2) + V);
          var X = "";
          return X += `
\0`, X += s(L, 2), X += E.magic, X += s(w, 2), X += s(A, 2), X += s(re.crc32, 4), X += s(re.compressedSize, 4), X += s(re.uncompressedSize, 4), X += s(R.length, 2), X += s(z.length, 2), { fileRecord: d.LOCAL_FILE_HEADER + X + R + z, dirRecord: d.CENTRAL_FILE_HEADER + s(se, 2) + X + s(P.length, 2) + "\0\0\0\0" + s(F, 4) + s(v, 4) + R + z + P };
        }
        var o = r("../utils"), l = r("../stream/GenericWorker"), c = r("../utf8"), u = r("../crc32"), d = r("../signature");
        function f(h, g, m, v) {
          l.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = g, this.zipPlatform = m, this.encodeFileName = v, this.streamFiles = h, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        o.inherits(f, l), f.prototype.push = function(h) {
          var g = h.meta.percent || 0, m = this.entriesCount, v = this._sources.length;
          this.accumulate ? this.contentBuffer.push(h) : (this.bytesWritten += h.data.length, l.prototype.push.call(this, { data: h.data, meta: { currentFile: this.currentFile, percent: m ? (g + 100 * (m - v - 1)) / m : 100 } }));
        }, f.prototype.openedSource = function(h) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = h.file.name;
          var g = this.streamFiles && !h.file.dir;
          if (g) {
            var m = a(h, g, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: m.fileRecord, meta: { percent: 0 } });
          } else this.accumulate = !0;
        }, f.prototype.closedSource = function(h) {
          this.accumulate = !1;
          var g = this.streamFiles && !h.file.dir, m = a(h, g, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(m.dirRecord), g) this.push({ data: (function(v) {
            return d.DATA_DESCRIPTOR + s(v.crc32, 4) + s(v.compressedSize, 4) + s(v.uncompressedSize, 4);
          })(h), meta: { percent: 100 } });
          else for (this.push({ data: m.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, f.prototype.flush = function() {
          for (var h = this.bytesWritten, g = 0; g < this.dirRecords.length; g++) this.push({ data: this.dirRecords[g], meta: { percent: 100 } });
          var m = this.bytesWritten - h, v = (function(p, _, w, A, k) {
            var E = o.transformTo("string", k(A));
            return d.CENTRAL_DIRECTORY_END + "\0\0\0\0" + s(p, 2) + s(p, 2) + s(_, 4) + s(w, 4) + s(E.length, 2) + E;
          })(this.dirRecords.length, m, h, this.zipComment, this.encodeFileName);
          this.push({ data: v, meta: { percent: 100 } });
        }, f.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, f.prototype.registerPrevious = function(h) {
          this._sources.push(h);
          var g = this;
          return h.on("data", function(m) {
            g.processChunk(m);
          }), h.on("end", function() {
            g.closedSource(g.previous.streamInfo), g._sources.length ? g.prepareNextSource() : g.end();
          }), h.on("error", function(m) {
            g.error(m);
          }), this;
        }, f.prototype.resume = function() {
          return !!l.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
        }, f.prototype.error = function(h) {
          var g = this._sources;
          if (!l.prototype.error.call(this, h)) return !1;
          for (var m = 0; m < g.length; m++) try {
            g[m].error(h);
          } catch {
          }
          return !0;
        }, f.prototype.lock = function() {
          l.prototype.lock.call(this);
          for (var h = this._sources, g = 0; g < h.length; g++) h[g].lock();
        }, n.exports = f;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(r, n, i) {
        var s = r("../compressions"), a = r("./ZipFileWorker");
        i.generateWorker = function(o, l, c) {
          var u = new a(l.streamFiles, c, l.platform, l.encodeFileName), d = 0;
          try {
            o.forEach(function(f, h) {
              d++;
              var g = (function(_, w) {
                var A = _ || w, k = s[A];
                if (!k) throw new Error(A + " is not a valid compression method !");
                return k;
              })(h.options.compression, l.compression), m = h.options.compressionOptions || l.compressionOptions || {}, v = h.dir, p = h.date;
              h._compressWorker(g, m).withStreamInfo("file", { name: f, dir: v, date: p, comment: h.comment || "", unixPermissions: h.unixPermissions, dosPermissions: h.dosPermissions }).pipe(u);
            }), u.entriesCount = d;
          } catch (f) {
            u.error(f);
          }
          return u;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(r, n, i) {
        function s() {
          if (!(this instanceof s)) return new s();
          if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var a = new s();
            for (var o in this) typeof this[o] != "function" && (a[o] = this[o]);
            return a;
          };
        }
        (s.prototype = r("./object")).loadAsync = r("./load"), s.support = r("./support"), s.defaults = r("./defaults"), s.version = "3.10.1", s.loadAsync = function(a, o) {
          return new s().loadAsync(a, o);
        }, s.external = r("./external"), n.exports = s;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(r, n, i) {
        var s = r("./utils"), a = r("./external"), o = r("./utf8"), l = r("./zipEntries"), c = r("./stream/Crc32Probe"), u = r("./nodejsUtils");
        function d(f) {
          return new a.Promise(function(h, g) {
            var m = f.decompressed.getContentWorker().pipe(new c());
            m.on("error", function(v) {
              g(v);
            }).on("end", function() {
              m.streamInfo.crc32 !== f.decompressed.crc32 ? g(new Error("Corrupted zip : CRC32 mismatch")) : h();
            }).resume();
          });
        }
        n.exports = function(f, h) {
          var g = this;
          return h = s.extend(h || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: o.utf8decode }), u.isNode && u.isStream(f) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : s.prepareContent("the loaded zip file", f, !0, h.optimizedBinaryString, h.base64).then(function(m) {
            var v = new l(h);
            return v.load(m), v;
          }).then(function(m) {
            var v = [a.Promise.resolve(m)], p = m.files;
            if (h.checkCRC32) for (var _ = 0; _ < p.length; _++) v.push(d(p[_]));
            return a.Promise.all(v);
          }).then(function(m) {
            for (var v = m.shift(), p = v.files, _ = 0; _ < p.length; _++) {
              var w = p[_], A = w.fileNameStr, k = s.resolve(w.fileNameStr);
              g.file(k, w.decompressed, { binary: !0, optimizedBinaryString: !0, date: w.date, dir: w.dir, comment: w.fileCommentStr.length ? w.fileCommentStr : null, unixPermissions: w.unixPermissions, dosPermissions: w.dosPermissions, createFolders: h.createFolders }), w.dir || (g.file(k).unsafeOriginalName = A);
            }
            return v.zipComment.length && (g.comment = v.zipComment), g;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(r, n, i) {
        var s = r("../utils"), a = r("../stream/GenericWorker");
        function o(l, c) {
          a.call(this, "Nodejs stream input adapter for " + l), this._upstreamEnded = !1, this._bindStream(c);
        }
        s.inherits(o, a), o.prototype._bindStream = function(l) {
          var c = this;
          (this._stream = l).pause(), l.on("data", function(u) {
            c.push({ data: u, meta: { percent: 0 } });
          }).on("error", function(u) {
            c.isPaused ? this.generatedError = u : c.error(u);
          }).on("end", function() {
            c.isPaused ? c._upstreamEnded = !0 : c.end();
          });
        }, o.prototype.pause = function() {
          return !!a.prototype.pause.call(this) && (this._stream.pause(), !0);
        }, o.prototype.resume = function() {
          return !!a.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
        }, n.exports = o;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(r, n, i) {
        var s = r("readable-stream").Readable;
        function a(o, l, c) {
          s.call(this, l), this._helper = o;
          var u = this;
          o.on("data", function(d, f) {
            u.push(d) || u._helper.pause(), c && c(f);
          }).on("error", function(d) {
            u.emit("error", d);
          }).on("end", function() {
            u.push(null);
          });
        }
        r("../utils").inherits(a, s), a.prototype._read = function() {
          this._helper.resume();
        }, n.exports = a;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(r, n, i) {
        n.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(s, a) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(s, a);
          if (typeof s == "number") throw new Error('The "data" argument must not be a number');
          return new Buffer(s, a);
        }, allocBuffer: function(s) {
          if (Buffer.alloc) return Buffer.alloc(s);
          var a = new Buffer(s);
          return a.fill(0), a;
        }, isBuffer: function(s) {
          return Buffer.isBuffer(s);
        }, isStream: function(s) {
          return s && typeof s.on == "function" && typeof s.pause == "function" && typeof s.resume == "function";
        } };
      }, {}], 15: [function(r, n, i) {
        function s(k, E, x) {
          var R, S = o.getTypeOf(E), I = o.extend(x || {}, u);
          I.date = I.date || /* @__PURE__ */ new Date(), I.compression !== null && (I.compression = I.compression.toUpperCase()), typeof I.unixPermissions == "string" && (I.unixPermissions = parseInt(I.unixPermissions, 8)), I.unixPermissions && 16384 & I.unixPermissions && (I.dir = !0), I.dosPermissions && 16 & I.dosPermissions && (I.dir = !0), I.dir && (k = p(k)), I.createFolders && (R = v(k)) && _.call(this, R, !0);
          var P = S === "string" && I.binary === !1 && I.base64 === !1;
          x && x.binary !== void 0 || (I.binary = !P), (E instanceof d && E.uncompressedSize === 0 || I.dir || !E || E.length === 0) && (I.base64 = !1, I.binary = !0, E = "", I.compression = "STORE", S = "string");
          var T = null;
          T = E instanceof d || E instanceof l ? E : g.isNode && g.isStream(E) ? new m(k, E) : o.prepareContent(k, E, I.binary, I.optimizedBinaryString, I.base64);
          var O = new f(k, T, I);
          this.files[k] = O;
        }
        var a = r("./utf8"), o = r("./utils"), l = r("./stream/GenericWorker"), c = r("./stream/StreamHelper"), u = r("./defaults"), d = r("./compressedObject"), f = r("./zipObject"), h = r("./generate"), g = r("./nodejsUtils"), m = r("./nodejs/NodejsStreamInputAdapter"), v = function(k) {
          k.slice(-1) === "/" && (k = k.substring(0, k.length - 1));
          var E = k.lastIndexOf("/");
          return 0 < E ? k.substring(0, E) : "";
        }, p = function(k) {
          return k.slice(-1) !== "/" && (k += "/"), k;
        }, _ = function(k, E) {
          return E = E !== void 0 ? E : u.createFolders, k = p(k), this.files[k] || s.call(this, k, null, { dir: !0, createFolders: E }), this.files[k];
        };
        function w(k) {
          return Object.prototype.toString.call(k) === "[object RegExp]";
        }
        var A = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(k) {
          var E, x, R;
          for (E in this.files) R = this.files[E], (x = E.slice(this.root.length, E.length)) && E.slice(0, this.root.length) === this.root && k(x, R);
        }, filter: function(k) {
          var E = [];
          return this.forEach(function(x, R) {
            k(x, R) && E.push(R);
          }), E;
        }, file: function(k, E, x) {
          if (arguments.length !== 1) return k = this.root + k, s.call(this, k, E, x), this;
          if (w(k)) {
            var R = k;
            return this.filter(function(I, P) {
              return !P.dir && R.test(I);
            });
          }
          var S = this.files[this.root + k];
          return S && !S.dir ? S : null;
        }, folder: function(k) {
          if (!k) return this;
          if (w(k)) return this.filter(function(S, I) {
            return I.dir && k.test(S);
          });
          var E = this.root + k, x = _.call(this, E), R = this.clone();
          return R.root = x.name, R;
        }, remove: function(k) {
          k = this.root + k;
          var E = this.files[k];
          if (E || (k.slice(-1) !== "/" && (k += "/"), E = this.files[k]), E && !E.dir) delete this.files[k];
          else for (var x = this.filter(function(S, I) {
            return I.name.slice(0, k.length) === k;
          }), R = 0; R < x.length; R++) delete this.files[x[R].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(k) {
          var E, x = {};
          try {
            if ((x = o.extend(k || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = x.type.toLowerCase(), x.compression = x.compression.toUpperCase(), x.type === "binarystring" && (x.type = "string"), !x.type) throw new Error("No output type specified.");
            o.checkSupport(x.type), x.platform !== "darwin" && x.platform !== "freebsd" && x.platform !== "linux" && x.platform !== "sunos" || (x.platform = "UNIX"), x.platform === "win32" && (x.platform = "DOS");
            var R = x.comment || this.comment || "";
            E = h.generateWorker(this, x, R);
          } catch (S) {
            (E = new l("error")).error(S);
          }
          return new c(E, x.type || "string", x.mimeType);
        }, generateAsync: function(k, E) {
          return this.generateInternalStream(k).accumulate(E);
        }, generateNodeStream: function(k, E) {
          return (k = k || {}).type || (k.type = "nodebuffer"), this.generateInternalStream(k).toNodejsStream(E);
        } };
        n.exports = A;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(r, n, i) {
        n.exports = r("stream");
      }, { stream: void 0 }], 17: [function(r, n, i) {
        var s = r("./DataReader");
        function a(o) {
          s.call(this, o);
          for (var l = 0; l < this.data.length; l++) o[l] = 255 & o[l];
        }
        r("../utils").inherits(a, s), a.prototype.byteAt = function(o) {
          return this.data[this.zero + o];
        }, a.prototype.lastIndexOfSignature = function(o) {
          for (var l = o.charCodeAt(0), c = o.charCodeAt(1), u = o.charCodeAt(2), d = o.charCodeAt(3), f = this.length - 4; 0 <= f; --f) if (this.data[f] === l && this.data[f + 1] === c && this.data[f + 2] === u && this.data[f + 3] === d) return f - this.zero;
          return -1;
        }, a.prototype.readAndCheckSignature = function(o) {
          var l = o.charCodeAt(0), c = o.charCodeAt(1), u = o.charCodeAt(2), d = o.charCodeAt(3), f = this.readData(4);
          return l === f[0] && c === f[1] && u === f[2] && d === f[3];
        }, a.prototype.readData = function(o) {
          if (this.checkOffset(o), o === 0) return [];
          var l = this.data.slice(this.zero + this.index, this.zero + this.index + o);
          return this.index += o, l;
        }, n.exports = a;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(r, n, i) {
        var s = r("../utils");
        function a(o) {
          this.data = o, this.length = o.length, this.index = 0, this.zero = 0;
        }
        a.prototype = { checkOffset: function(o) {
          this.checkIndex(this.index + o);
        }, checkIndex: function(o) {
          if (this.length < this.zero + o || o < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + o + "). Corrupted zip ?");
        }, setIndex: function(o) {
          this.checkIndex(o), this.index = o;
        }, skip: function(o) {
          this.setIndex(this.index + o);
        }, byteAt: function() {
        }, readInt: function(o) {
          var l, c = 0;
          for (this.checkOffset(o), l = this.index + o - 1; l >= this.index; l--) c = (c << 8) + this.byteAt(l);
          return this.index += o, c;
        }, readString: function(o) {
          return s.transformTo("string", this.readData(o));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var o = this.readInt(4);
          return new Date(Date.UTC(1980 + (o >> 25 & 127), (o >> 21 & 15) - 1, o >> 16 & 31, o >> 11 & 31, o >> 5 & 63, (31 & o) << 1));
        } }, n.exports = a;
      }, { "../utils": 32 }], 19: [function(r, n, i) {
        var s = r("./Uint8ArrayReader");
        function a(o) {
          s.call(this, o);
        }
        r("../utils").inherits(a, s), a.prototype.readData = function(o) {
          this.checkOffset(o);
          var l = this.data.slice(this.zero + this.index, this.zero + this.index + o);
          return this.index += o, l;
        }, n.exports = a;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(r, n, i) {
        var s = r("./DataReader");
        function a(o) {
          s.call(this, o);
        }
        r("../utils").inherits(a, s), a.prototype.byteAt = function(o) {
          return this.data.charCodeAt(this.zero + o);
        }, a.prototype.lastIndexOfSignature = function(o) {
          return this.data.lastIndexOf(o) - this.zero;
        }, a.prototype.readAndCheckSignature = function(o) {
          return o === this.readData(4);
        }, a.prototype.readData = function(o) {
          this.checkOffset(o);
          var l = this.data.slice(this.zero + this.index, this.zero + this.index + o);
          return this.index += o, l;
        }, n.exports = a;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(r, n, i) {
        var s = r("./ArrayReader");
        function a(o) {
          s.call(this, o);
        }
        r("../utils").inherits(a, s), a.prototype.readData = function(o) {
          if (this.checkOffset(o), o === 0) return new Uint8Array(0);
          var l = this.data.subarray(this.zero + this.index, this.zero + this.index + o);
          return this.index += o, l;
        }, n.exports = a;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(r, n, i) {
        var s = r("../utils"), a = r("../support"), o = r("./ArrayReader"), l = r("./StringReader"), c = r("./NodeBufferReader"), u = r("./Uint8ArrayReader");
        n.exports = function(d) {
          var f = s.getTypeOf(d);
          return s.checkSupport(f), f !== "string" || a.uint8array ? f === "nodebuffer" ? new c(d) : a.uint8array ? new u(s.transformTo("uint8array", d)) : new o(s.transformTo("array", d)) : new l(d);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(r, n, i) {
        i.LOCAL_FILE_HEADER = "PK", i.CENTRAL_FILE_HEADER = "PK", i.CENTRAL_DIRECTORY_END = "PK", i.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", i.ZIP64_CENTRAL_DIRECTORY_END = "PK", i.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(r, n, i) {
        var s = r("./GenericWorker"), a = r("../utils");
        function o(l) {
          s.call(this, "ConvertWorker to " + l), this.destType = l;
        }
        a.inherits(o, s), o.prototype.processChunk = function(l) {
          this.push({ data: a.transformTo(this.destType, l.data), meta: l.meta });
        }, n.exports = o;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(r, n, i) {
        var s = r("./GenericWorker"), a = r("../crc32");
        function o() {
          s.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        r("../utils").inherits(o, s), o.prototype.processChunk = function(l) {
          this.streamInfo.crc32 = a(l.data, this.streamInfo.crc32 || 0), this.push(l);
        }, n.exports = o;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(r, n, i) {
        var s = r("../utils"), a = r("./GenericWorker");
        function o(l) {
          a.call(this, "DataLengthProbe for " + l), this.propName = l, this.withStreamInfo(l, 0);
        }
        s.inherits(o, a), o.prototype.processChunk = function(l) {
          if (l) {
            var c = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = c + l.data.length;
          }
          a.prototype.processChunk.call(this, l);
        }, n.exports = o;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(r, n, i) {
        var s = r("../utils"), a = r("./GenericWorker");
        function o(l) {
          a.call(this, "DataWorker");
          var c = this;
          this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, l.then(function(u) {
            c.dataIsReady = !0, c.data = u, c.max = u && u.length || 0, c.type = s.getTypeOf(u), c.isPaused || c._tickAndRepeat();
          }, function(u) {
            c.error(u);
          });
        }
        s.inherits(o, a), o.prototype.cleanUp = function() {
          a.prototype.cleanUp.call(this), this.data = null;
        }, o.prototype.resume = function() {
          return !!a.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, s.delay(this._tickAndRepeat, [], this)), !0);
        }, o.prototype._tickAndRepeat = function() {
          this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (s.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
        }, o.prototype._tick = function() {
          if (this.isPaused || this.isFinished) return !1;
          var l = null, c = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max) return this.end();
          switch (this.type) {
            case "string":
              l = this.data.substring(this.index, c);
              break;
            case "uint8array":
              l = this.data.subarray(this.index, c);
              break;
            case "array":
            case "nodebuffer":
              l = this.data.slice(this.index, c);
          }
          return this.index = c, this.push({ data: l, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
        }, n.exports = o;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(r, n, i) {
        function s(a) {
          this.name = a || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        s.prototype = { push: function(a) {
          this.emit("data", a);
        }, end: function() {
          if (this.isFinished) return !1;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = !0;
          } catch (a) {
            this.emit("error", a);
          }
          return !0;
        }, error: function(a) {
          return !this.isFinished && (this.isPaused ? this.generatedError = a : (this.isFinished = !0, this.emit("error", a), this.previous && this.previous.error(a), this.cleanUp()), !0);
        }, on: function(a, o) {
          return this._listeners[a].push(o), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(a, o) {
          if (this._listeners[a]) for (var l = 0; l < this._listeners[a].length; l++) this._listeners[a][l].call(this, o);
        }, pipe: function(a) {
          return a.registerPrevious(this);
        }, registerPrevious: function(a) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a;
          var o = this;
          return a.on("data", function(l) {
            o.processChunk(l);
          }), a.on("end", function() {
            o.end();
          }), a.on("error", function(l) {
            o.error(l);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
        }, resume: function() {
          if (!this.isPaused || this.isFinished) return !1;
          var a = this.isPaused = !1;
          return this.generatedError && (this.error(this.generatedError), a = !0), this.previous && this.previous.resume(), !a;
        }, flush: function() {
        }, processChunk: function(a) {
          this.push(a);
        }, withStreamInfo: function(a, o) {
          return this.extraStreamInfo[a] = o, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var a in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, a) && (this.streamInfo[a] = this.extraStreamInfo[a]);
        }, lock: function() {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = !0, this.previous && this.previous.lock();
        }, toString: function() {
          var a = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + a : a;
        } }, n.exports = s;
      }, {}], 29: [function(r, n, i) {
        var s = r("../utils"), a = r("./ConvertWorker"), o = r("./GenericWorker"), l = r("../base64"), c = r("../support"), u = r("../external"), d = null;
        if (c.nodestream) try {
          d = r("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
        function f(g, m) {
          return new u.Promise(function(v, p) {
            var _ = [], w = g._internalType, A = g._outputType, k = g._mimeType;
            g.on("data", function(E, x) {
              _.push(E), m && m(x);
            }).on("error", function(E) {
              _ = [], p(E);
            }).on("end", function() {
              try {
                var E = (function(x, R, S) {
                  switch (x) {
                    case "blob":
                      return s.newBlob(s.transformTo("arraybuffer", R), S);
                    case "base64":
                      return l.encode(R);
                    default:
                      return s.transformTo(x, R);
                  }
                })(A, (function(x, R) {
                  var S, I = 0, P = null, T = 0;
                  for (S = 0; S < R.length; S++) T += R[S].length;
                  switch (x) {
                    case "string":
                      return R.join("");
                    case "array":
                      return Array.prototype.concat.apply([], R);
                    case "uint8array":
                      for (P = new Uint8Array(T), S = 0; S < R.length; S++) P.set(R[S], I), I += R[S].length;
                      return P;
                    case "nodebuffer":
                      return Buffer.concat(R);
                    default:
                      throw new Error("concat : unsupported type '" + x + "'");
                  }
                })(w, _), k);
                v(E);
              } catch (x) {
                p(x);
              }
              _ = [];
            }).resume();
          });
        }
        function h(g, m, v) {
          var p = m;
          switch (m) {
            case "blob":
            case "arraybuffer":
              p = "uint8array";
              break;
            case "base64":
              p = "string";
          }
          try {
            this._internalType = p, this._outputType = m, this._mimeType = v, s.checkSupport(p), this._worker = g.pipe(new a(p)), g.lock();
          } catch (_) {
            this._worker = new o("error"), this._worker.error(_);
          }
        }
        h.prototype = { accumulate: function(g) {
          return f(this, g);
        }, on: function(g, m) {
          var v = this;
          return g === "data" ? this._worker.on(g, function(p) {
            m.call(v, p.data, p.meta);
          }) : this._worker.on(g, function() {
            s.delay(m, arguments, v);
          }), this;
        }, resume: function() {
          return s.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(g) {
          if (s.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
          return new d(this, { objectMode: this._outputType !== "nodebuffer" }, g);
        } }, n.exports = h;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(r, n, i) {
        if (i.base64 = !0, i.array = !0, i.string = !0, i.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", i.nodebuffer = typeof Buffer < "u", i.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") i.blob = !1;
        else {
          var s = new ArrayBuffer(0);
          try {
            i.blob = new Blob([s], { type: "application/zip" }).size === 0;
          } catch {
            try {
              var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              a.append(s), i.blob = a.getBlob("application/zip").size === 0;
            } catch {
              i.blob = !1;
            }
          }
        }
        try {
          i.nodestream = !!r("readable-stream").Readable;
        } catch {
          i.nodestream = !1;
        }
      }, { "readable-stream": 16 }], 31: [function(r, n, i) {
        for (var s = r("./utils"), a = r("./support"), o = r("./nodejsUtils"), l = r("./stream/GenericWorker"), c = new Array(256), u = 0; u < 256; u++) c[u] = 252 <= u ? 6 : 248 <= u ? 5 : 240 <= u ? 4 : 224 <= u ? 3 : 192 <= u ? 2 : 1;
        c[254] = c[254] = 1;
        function d() {
          l.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function f() {
          l.call(this, "utf-8 encode");
        }
        i.utf8encode = function(h) {
          return a.nodebuffer ? o.newBufferFrom(h, "utf-8") : (function(g) {
            var m, v, p, _, w, A = g.length, k = 0;
            for (_ = 0; _ < A; _++) (64512 & (v = g.charCodeAt(_))) == 55296 && _ + 1 < A && (64512 & (p = g.charCodeAt(_ + 1))) == 56320 && (v = 65536 + (v - 55296 << 10) + (p - 56320), _++), k += v < 128 ? 1 : v < 2048 ? 2 : v < 65536 ? 3 : 4;
            for (m = a.uint8array ? new Uint8Array(k) : new Array(k), _ = w = 0; w < k; _++) (64512 & (v = g.charCodeAt(_))) == 55296 && _ + 1 < A && (64512 & (p = g.charCodeAt(_ + 1))) == 56320 && (v = 65536 + (v - 55296 << 10) + (p - 56320), _++), v < 128 ? m[w++] = v : (v < 2048 ? m[w++] = 192 | v >>> 6 : (v < 65536 ? m[w++] = 224 | v >>> 12 : (m[w++] = 240 | v >>> 18, m[w++] = 128 | v >>> 12 & 63), m[w++] = 128 | v >>> 6 & 63), m[w++] = 128 | 63 & v);
            return m;
          })(h);
        }, i.utf8decode = function(h) {
          return a.nodebuffer ? s.transformTo("nodebuffer", h).toString("utf-8") : (function(g) {
            var m, v, p, _, w = g.length, A = new Array(2 * w);
            for (m = v = 0; m < w; ) if ((p = g[m++]) < 128) A[v++] = p;
            else if (4 < (_ = c[p])) A[v++] = 65533, m += _ - 1;
            else {
              for (p &= _ === 2 ? 31 : _ === 3 ? 15 : 7; 1 < _ && m < w; ) p = p << 6 | 63 & g[m++], _--;
              1 < _ ? A[v++] = 65533 : p < 65536 ? A[v++] = p : (p -= 65536, A[v++] = 55296 | p >> 10 & 1023, A[v++] = 56320 | 1023 & p);
            }
            return A.length !== v && (A.subarray ? A = A.subarray(0, v) : A.length = v), s.applyFromCharCode(A);
          })(h = s.transformTo(a.uint8array ? "uint8array" : "array", h));
        }, s.inherits(d, l), d.prototype.processChunk = function(h) {
          var g = s.transformTo(a.uint8array ? "uint8array" : "array", h.data);
          if (this.leftOver && this.leftOver.length) {
            if (a.uint8array) {
              var m = g;
              (g = new Uint8Array(m.length + this.leftOver.length)).set(this.leftOver, 0), g.set(m, this.leftOver.length);
            } else g = this.leftOver.concat(g);
            this.leftOver = null;
          }
          var v = (function(_, w) {
            var A;
            for ((w = w || _.length) > _.length && (w = _.length), A = w - 1; 0 <= A && (192 & _[A]) == 128; ) A--;
            return A < 0 || A === 0 ? w : A + c[_[A]] > w ? A : w;
          })(g), p = g;
          v !== g.length && (a.uint8array ? (p = g.subarray(0, v), this.leftOver = g.subarray(v, g.length)) : (p = g.slice(0, v), this.leftOver = g.slice(v, g.length))), this.push({ data: i.utf8decode(p), meta: h.meta });
        }, d.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: i.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, i.Utf8DecodeWorker = d, s.inherits(f, l), f.prototype.processChunk = function(h) {
          this.push({ data: i.utf8encode(h.data), meta: h.meta });
        }, i.Utf8EncodeWorker = f;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(r, n, i) {
        var s = r("./support"), a = r("./base64"), o = r("./nodejsUtils"), l = r("./external");
        function c(m) {
          return m;
        }
        function u(m, v) {
          for (var p = 0; p < m.length; ++p) v[p] = 255 & m.charCodeAt(p);
          return v;
        }
        r("setimmediate"), i.newBlob = function(m, v) {
          i.checkSupport("blob");
          try {
            return new Blob([m], { type: v });
          } catch {
            try {
              var p = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return p.append(m), p.getBlob(v);
            } catch {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var d = { stringifyByChunk: function(m, v, p) {
          var _ = [], w = 0, A = m.length;
          if (A <= p) return String.fromCharCode.apply(null, m);
          for (; w < A; ) v === "array" || v === "nodebuffer" ? _.push(String.fromCharCode.apply(null, m.slice(w, Math.min(w + p, A)))) : _.push(String.fromCharCode.apply(null, m.subarray(w, Math.min(w + p, A)))), w += p;
          return _.join("");
        }, stringifyByChar: function(m) {
          for (var v = "", p = 0; p < m.length; p++) v += String.fromCharCode(m[p]);
          return v;
        }, applyCanBeUsed: { uint8array: (function() {
          try {
            return s.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
          } catch {
            return !1;
          }
        })(), nodebuffer: (function() {
          try {
            return s.nodebuffer && String.fromCharCode.apply(null, o.allocBuffer(1)).length === 1;
          } catch {
            return !1;
          }
        })() } };
        function f(m) {
          var v = 65536, p = i.getTypeOf(m), _ = !0;
          if (p === "uint8array" ? _ = d.applyCanBeUsed.uint8array : p === "nodebuffer" && (_ = d.applyCanBeUsed.nodebuffer), _) for (; 1 < v; ) try {
            return d.stringifyByChunk(m, p, v);
          } catch {
            v = Math.floor(v / 2);
          }
          return d.stringifyByChar(m);
        }
        function h(m, v) {
          for (var p = 0; p < m.length; p++) v[p] = m[p];
          return v;
        }
        i.applyFromCharCode = f;
        var g = {};
        g.string = { string: c, array: function(m) {
          return u(m, new Array(m.length));
        }, arraybuffer: function(m) {
          return g.string.uint8array(m).buffer;
        }, uint8array: function(m) {
          return u(m, new Uint8Array(m.length));
        }, nodebuffer: function(m) {
          return u(m, o.allocBuffer(m.length));
        } }, g.array = { string: f, array: c, arraybuffer: function(m) {
          return new Uint8Array(m).buffer;
        }, uint8array: function(m) {
          return new Uint8Array(m);
        }, nodebuffer: function(m) {
          return o.newBufferFrom(m);
        } }, g.arraybuffer = { string: function(m) {
          return f(new Uint8Array(m));
        }, array: function(m) {
          return h(new Uint8Array(m), new Array(m.byteLength));
        }, arraybuffer: c, uint8array: function(m) {
          return new Uint8Array(m);
        }, nodebuffer: function(m) {
          return o.newBufferFrom(new Uint8Array(m));
        } }, g.uint8array = { string: f, array: function(m) {
          return h(m, new Array(m.length));
        }, arraybuffer: function(m) {
          return m.buffer;
        }, uint8array: c, nodebuffer: function(m) {
          return o.newBufferFrom(m);
        } }, g.nodebuffer = { string: f, array: function(m) {
          return h(m, new Array(m.length));
        }, arraybuffer: function(m) {
          return g.nodebuffer.uint8array(m).buffer;
        }, uint8array: function(m) {
          return h(m, new Uint8Array(m.length));
        }, nodebuffer: c }, i.transformTo = function(m, v) {
          if (v = v || "", !m) return v;
          i.checkSupport(m);
          var p = i.getTypeOf(v);
          return g[p][m](v);
        }, i.resolve = function(m) {
          for (var v = m.split("/"), p = [], _ = 0; _ < v.length; _++) {
            var w = v[_];
            w === "." || w === "" && _ !== 0 && _ !== v.length - 1 || (w === ".." ? p.pop() : p.push(w));
          }
          return p.join("/");
        }, i.getTypeOf = function(m) {
          return typeof m == "string" ? "string" : Object.prototype.toString.call(m) === "[object Array]" ? "array" : s.nodebuffer && o.isBuffer(m) ? "nodebuffer" : s.uint8array && m instanceof Uint8Array ? "uint8array" : s.arraybuffer && m instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, i.checkSupport = function(m) {
          if (!s[m.toLowerCase()]) throw new Error(m + " is not supported by this platform");
        }, i.MAX_VALUE_16BITS = 65535, i.MAX_VALUE_32BITS = -1, i.pretty = function(m) {
          var v, p, _ = "";
          for (p = 0; p < (m || "").length; p++) _ += "\\x" + ((v = m.charCodeAt(p)) < 16 ? "0" : "") + v.toString(16).toUpperCase();
          return _;
        }, i.delay = function(m, v, p) {
          setImmediate(function() {
            m.apply(p || null, v || []);
          });
        }, i.inherits = function(m, v) {
          function p() {
          }
          p.prototype = v.prototype, m.prototype = new p();
        }, i.extend = function() {
          var m, v, p = {};
          for (m = 0; m < arguments.length; m++) for (v in arguments[m]) Object.prototype.hasOwnProperty.call(arguments[m], v) && p[v] === void 0 && (p[v] = arguments[m][v]);
          return p;
        }, i.prepareContent = function(m, v, p, _, w) {
          return l.Promise.resolve(v).then(function(A) {
            return s.blob && (A instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(A)) !== -1) && typeof FileReader < "u" ? new l.Promise(function(k, E) {
              var x = new FileReader();
              x.onload = function(R) {
                k(R.target.result);
              }, x.onerror = function(R) {
                E(R.target.error);
              }, x.readAsArrayBuffer(A);
            }) : A;
          }).then(function(A) {
            var k = i.getTypeOf(A);
            return k ? (k === "arraybuffer" ? A = i.transformTo("uint8array", A) : k === "string" && (w ? A = a.decode(A) : p && _ !== !0 && (A = (function(E) {
              return u(E, s.uint8array ? new Uint8Array(E.length) : new Array(E.length));
            })(A))), A) : l.Promise.reject(new Error("Can't read the data of '" + m + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(r, n, i) {
        var s = r("./reader/readerFor"), a = r("./utils"), o = r("./signature"), l = r("./zipEntry"), c = r("./support");
        function u(d) {
          this.files = [], this.loadOptions = d;
        }
        u.prototype = { checkSignature: function(d) {
          if (!this.reader.readAndCheckSignature(d)) {
            this.reader.index -= 4;
            var f = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(f) + ", expected " + a.pretty(d) + ")");
          }
        }, isSignature: function(d, f) {
          var h = this.reader.index;
          this.reader.setIndex(d);
          var g = this.reader.readString(4) === f;
          return this.reader.setIndex(h), g;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var d = this.reader.readData(this.zipCommentLength), f = c.uint8array ? "uint8array" : "array", h = a.transformTo(f, d);
          this.zipComment = this.loadOptions.decodeFileName(h);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var d, f, h, g = this.zip64EndOfCentralSize - 44; 0 < g; ) d = this.reader.readInt(2), f = this.reader.readInt(4), h = this.reader.readData(f), this.zip64ExtensibleData[d] = { id: d, length: f, value: h };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var d, f;
          for (d = 0; d < this.files.length; d++) f = this.files[d], this.reader.setIndex(f.localHeaderOffset), this.checkSignature(o.LOCAL_FILE_HEADER), f.readLocalPart(this.reader), f.handleUTF8(), f.processAttributes();
        }, readCentralDir: function() {
          var d;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER); ) (d = new l({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(d);
          if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var d = this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);
          if (d < 0) throw this.isSignature(0, o.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
          this.reader.setIndex(d);
          var f = d;
          if (this.checkSignature(o.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, (d = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(d), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, o.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var h = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (h += 20, h += 12 + this.zip64EndOfCentralSize);
          var g = f - h;
          if (0 < g) this.isSignature(f, o.CENTRAL_FILE_HEADER) || (this.reader.zero = g);
          else if (g < 0) throw new Error("Corrupted zip: missing " + Math.abs(g) + " bytes.");
        }, prepareReader: function(d) {
          this.reader = s(d);
        }, load: function(d) {
          this.prepareReader(d), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, n.exports = u;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(r, n, i) {
        var s = r("./reader/readerFor"), a = r("./utils"), o = r("./compressedObject"), l = r("./crc32"), c = r("./utf8"), u = r("./compressions"), d = r("./support");
        function f(h, g) {
          this.options = h, this.loadOptions = g;
        }
        f.prototype = { isEncrypted: function() {
          return (1 & this.bitFlag) == 1;
        }, useUTF8: function() {
          return (2048 & this.bitFlag) == 2048;
        }, readLocalPart: function(h) {
          var g, m;
          if (h.skip(22), this.fileNameLength = h.readInt(2), m = h.readInt(2), this.fileName = h.readData(this.fileNameLength), h.skip(m), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if ((g = (function(v) {
            for (var p in u) if (Object.prototype.hasOwnProperty.call(u, p) && u[p].magic === v) return u[p];
            return null;
          })(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
          this.decompressed = new o(this.compressedSize, this.uncompressedSize, this.crc32, g, h.readData(this.compressedSize));
        }, readCentralPart: function(h) {
          this.versionMadeBy = h.readInt(2), h.skip(2), this.bitFlag = h.readInt(2), this.compressionMethod = h.readString(2), this.date = h.readDate(), this.crc32 = h.readInt(4), this.compressedSize = h.readInt(4), this.uncompressedSize = h.readInt(4);
          var g = h.readInt(2);
          if (this.extraFieldsLength = h.readInt(2), this.fileCommentLength = h.readInt(2), this.diskNumberStart = h.readInt(2), this.internalFileAttributes = h.readInt(2), this.externalFileAttributes = h.readInt(4), this.localHeaderOffset = h.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          h.skip(g), this.readExtraFields(h), this.parseZIP64ExtraField(h), this.fileComment = h.readData(this.fileCommentLength);
        }, processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var h = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), h == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), h == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
        }, parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var h = s(this.extraFields[1].value);
            this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = h.readInt(8)), this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = h.readInt(8)), this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = h.readInt(8)), this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = h.readInt(4));
          }
        }, readExtraFields: function(h) {
          var g, m, v, p = h.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); h.index + 4 < p; ) g = h.readInt(2), m = h.readInt(2), v = h.readData(m), this.extraFields[g] = { id: g, length: m, value: v };
          h.setIndex(p);
        }, handleUTF8: function() {
          var h = d.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = c.utf8decode(this.fileName), this.fileCommentStr = c.utf8decode(this.fileComment);
          else {
            var g = this.findExtraFieldUnicodePath();
            if (g !== null) this.fileNameStr = g;
            else {
              var m = a.transformTo(h, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(m);
            }
            var v = this.findExtraFieldUnicodeComment();
            if (v !== null) this.fileCommentStr = v;
            else {
              var p = a.transformTo(h, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(p);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var h = this.extraFields[28789];
          if (h) {
            var g = s(h.value);
            return g.readInt(1) !== 1 || l(this.fileName) !== g.readInt(4) ? null : c.utf8decode(g.readData(h.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var h = this.extraFields[25461];
          if (h) {
            var g = s(h.value);
            return g.readInt(1) !== 1 || l(this.fileComment) !== g.readInt(4) ? null : c.utf8decode(g.readData(h.length - 5));
          }
          return null;
        } }, n.exports = f;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(r, n, i) {
        function s(g, m, v) {
          this.name = g, this.dir = v.dir, this.date = v.date, this.comment = v.comment, this.unixPermissions = v.unixPermissions, this.dosPermissions = v.dosPermissions, this._data = m, this._dataBinary = v.binary, this.options = { compression: v.compression, compressionOptions: v.compressionOptions };
        }
        var a = r("./stream/StreamHelper"), o = r("./stream/DataWorker"), l = r("./utf8"), c = r("./compressedObject"), u = r("./stream/GenericWorker");
        s.prototype = { internalStream: function(g) {
          var m = null, v = "string";
          try {
            if (!g) throw new Error("No output type specified.");
            var p = (v = g.toLowerCase()) === "string" || v === "text";
            v !== "binarystring" && v !== "text" || (v = "string"), m = this._decompressWorker();
            var _ = !this._dataBinary;
            _ && !p && (m = m.pipe(new l.Utf8EncodeWorker())), !_ && p && (m = m.pipe(new l.Utf8DecodeWorker()));
          } catch (w) {
            (m = new u("error")).error(w);
          }
          return new a(m, v, "");
        }, async: function(g, m) {
          return this.internalStream(g).accumulate(m);
        }, nodeStream: function(g, m) {
          return this.internalStream(g || "nodebuffer").toNodejsStream(m);
        }, _compressWorker: function(g, m) {
          if (this._data instanceof c && this._data.compression.magic === g.magic) return this._data.getCompressedWorker();
          var v = this._decompressWorker();
          return this._dataBinary || (v = v.pipe(new l.Utf8EncodeWorker())), c.createWorkerFrom(v, g, m);
        }, _decompressWorker: function() {
          return this._data instanceof c ? this._data.getContentWorker() : this._data instanceof u ? this._data : new o(this._data);
        } };
        for (var d = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], f = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, h = 0; h < d.length; h++) s.prototype[d[h]] = f;
        n.exports = s;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(r, n, i) {
        (function(s) {
          var a, o, l = s.MutationObserver || s.WebKitMutationObserver;
          if (l) {
            var c = 0, u = new l(g), d = s.document.createTextNode("");
            u.observe(d, { characterData: !0 }), a = function() {
              d.data = c = ++c % 2;
            };
          } else if (s.setImmediate || s.MessageChannel === void 0) a = "document" in s && "onreadystatechange" in s.document.createElement("script") ? function() {
            var m = s.document.createElement("script");
            m.onreadystatechange = function() {
              g(), m.onreadystatechange = null, m.parentNode.removeChild(m), m = null;
            }, s.document.documentElement.appendChild(m);
          } : function() {
            setTimeout(g, 0);
          };
          else {
            var f = new s.MessageChannel();
            f.port1.onmessage = g, a = function() {
              f.port2.postMessage(0);
            };
          }
          var h = [];
          function g() {
            var m, v;
            o = !0;
            for (var p = h.length; p; ) {
              for (v = h, h = [], m = -1; ++m < p; ) v[m]();
              p = h.length;
            }
            o = !1;
          }
          n.exports = function(m) {
            h.push(m) !== 1 || o || a();
          };
        }).call(this, typeof Vr < "u" ? Vr : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 37: [function(r, n, i) {
        var s = r("immediate");
        function a() {
        }
        var o = {}, l = ["REJECTED"], c = ["FULFILLED"], u = ["PENDING"];
        function d(p) {
          if (typeof p != "function") throw new TypeError("resolver must be a function");
          this.state = u, this.queue = [], this.outcome = void 0, p !== a && m(this, p);
        }
        function f(p, _, w) {
          this.promise = p, typeof _ == "function" && (this.onFulfilled = _, this.callFulfilled = this.otherCallFulfilled), typeof w == "function" && (this.onRejected = w, this.callRejected = this.otherCallRejected);
        }
        function h(p, _, w) {
          s(function() {
            var A;
            try {
              A = _(w);
            } catch (k) {
              return o.reject(p, k);
            }
            A === p ? o.reject(p, new TypeError("Cannot resolve promise with itself")) : o.resolve(p, A);
          });
        }
        function g(p) {
          var _ = p && p.then;
          if (p && (typeof p == "object" || typeof p == "function") && typeof _ == "function") return function() {
            _.apply(p, arguments);
          };
        }
        function m(p, _) {
          var w = !1;
          function A(x) {
            w || (w = !0, o.reject(p, x));
          }
          function k(x) {
            w || (w = !0, o.resolve(p, x));
          }
          var E = v(function() {
            _(k, A);
          });
          E.status === "error" && A(E.value);
        }
        function v(p, _) {
          var w = {};
          try {
            w.value = p(_), w.status = "success";
          } catch (A) {
            w.status = "error", w.value = A;
          }
          return w;
        }
        (n.exports = d).prototype.finally = function(p) {
          if (typeof p != "function") return this;
          var _ = this.constructor;
          return this.then(function(w) {
            return _.resolve(p()).then(function() {
              return w;
            });
          }, function(w) {
            return _.resolve(p()).then(function() {
              throw w;
            });
          });
        }, d.prototype.catch = function(p) {
          return this.then(null, p);
        }, d.prototype.then = function(p, _) {
          if (typeof p != "function" && this.state === c || typeof _ != "function" && this.state === l) return this;
          var w = new this.constructor(a);
          return this.state !== u ? h(w, this.state === c ? p : _, this.outcome) : this.queue.push(new f(w, p, _)), w;
        }, f.prototype.callFulfilled = function(p) {
          o.resolve(this.promise, p);
        }, f.prototype.otherCallFulfilled = function(p) {
          h(this.promise, this.onFulfilled, p);
        }, f.prototype.callRejected = function(p) {
          o.reject(this.promise, p);
        }, f.prototype.otherCallRejected = function(p) {
          h(this.promise, this.onRejected, p);
        }, o.resolve = function(p, _) {
          var w = v(g, _);
          if (w.status === "error") return o.reject(p, w.value);
          var A = w.value;
          if (A) m(p, A);
          else {
            p.state = c, p.outcome = _;
            for (var k = -1, E = p.queue.length; ++k < E; ) p.queue[k].callFulfilled(_);
          }
          return p;
        }, o.reject = function(p, _) {
          p.state = l, p.outcome = _;
          for (var w = -1, A = p.queue.length; ++w < A; ) p.queue[w].callRejected(_);
          return p;
        }, d.resolve = function(p) {
          return p instanceof this ? p : o.resolve(new this(a), p);
        }, d.reject = function(p) {
          var _ = new this(a);
          return o.reject(_, p);
        }, d.all = function(p) {
          var _ = this;
          if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var w = p.length, A = !1;
          if (!w) return this.resolve([]);
          for (var k = new Array(w), E = 0, x = -1, R = new this(a); ++x < w; ) S(p[x], x);
          return R;
          function S(I, P) {
            _.resolve(I).then(function(T) {
              k[P] = T, ++E !== w || A || (A = !0, o.resolve(R, k));
            }, function(T) {
              A || (A = !0, o.reject(R, T));
            });
          }
        }, d.race = function(p) {
          var _ = this;
          if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var w = p.length, A = !1;
          if (!w) return this.resolve([]);
          for (var k = -1, E = new this(a); ++k < w; ) x = p[k], _.resolve(x).then(function(R) {
            A || (A = !0, o.resolve(E, R));
          }, function(R) {
            A || (A = !0, o.reject(E, R));
          });
          var x;
          return E;
        };
      }, { immediate: 36 }], 38: [function(r, n, i) {
        var s = {};
        (0, r("./lib/utils/common").assign)(s, r("./lib/deflate"), r("./lib/inflate"), r("./lib/zlib/constants")), n.exports = s;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(r, n, i) {
        var s = r("./zlib/deflate"), a = r("./utils/common"), o = r("./utils/strings"), l = r("./zlib/messages"), c = r("./zlib/zstream"), u = Object.prototype.toString, d = 0, f = -1, h = 0, g = 8;
        function m(p) {
          if (!(this instanceof m)) return new m(p);
          this.options = a.assign({ level: f, method: g, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: h, to: "" }, p || {});
          var _ = this.options;
          _.raw && 0 < _.windowBits ? _.windowBits = -_.windowBits : _.gzip && 0 < _.windowBits && _.windowBits < 16 && (_.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c(), this.strm.avail_out = 0;
          var w = s.deflateInit2(this.strm, _.level, _.method, _.windowBits, _.memLevel, _.strategy);
          if (w !== d) throw new Error(l[w]);
          if (_.header && s.deflateSetHeader(this.strm, _.header), _.dictionary) {
            var A;
            if (A = typeof _.dictionary == "string" ? o.string2buf(_.dictionary) : u.call(_.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(_.dictionary) : _.dictionary, (w = s.deflateSetDictionary(this.strm, A)) !== d) throw new Error(l[w]);
            this._dict_set = !0;
          }
        }
        function v(p, _) {
          var w = new m(_);
          if (w.push(p, !0), w.err) throw w.msg || l[w.err];
          return w.result;
        }
        m.prototype.push = function(p, _) {
          var w, A, k = this.strm, E = this.options.chunkSize;
          if (this.ended) return !1;
          A = _ === ~~_ ? _ : _ === !0 ? 4 : 0, typeof p == "string" ? k.input = o.string2buf(p) : u.call(p) === "[object ArrayBuffer]" ? k.input = new Uint8Array(p) : k.input = p, k.next_in = 0, k.avail_in = k.input.length;
          do {
            if (k.avail_out === 0 && (k.output = new a.Buf8(E), k.next_out = 0, k.avail_out = E), (w = s.deflate(k, A)) !== 1 && w !== d) return this.onEnd(w), !(this.ended = !0);
            k.avail_out !== 0 && (k.avail_in !== 0 || A !== 4 && A !== 2) || (this.options.to === "string" ? this.onData(o.buf2binstring(a.shrinkBuf(k.output, k.next_out))) : this.onData(a.shrinkBuf(k.output, k.next_out)));
          } while ((0 < k.avail_in || k.avail_out === 0) && w !== 1);
          return A === 4 ? (w = s.deflateEnd(this.strm), this.onEnd(w), this.ended = !0, w === d) : A !== 2 || (this.onEnd(d), !(k.avail_out = 0));
        }, m.prototype.onData = function(p) {
          this.chunks.push(p);
        }, m.prototype.onEnd = function(p) {
          p === d && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = p, this.msg = this.strm.msg;
        }, i.Deflate = m, i.deflate = v, i.deflateRaw = function(p, _) {
          return (_ = _ || {}).raw = !0, v(p, _);
        }, i.gzip = function(p, _) {
          return (_ = _ || {}).gzip = !0, v(p, _);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(r, n, i) {
        var s = r("./zlib/inflate"), a = r("./utils/common"), o = r("./utils/strings"), l = r("./zlib/constants"), c = r("./zlib/messages"), u = r("./zlib/zstream"), d = r("./zlib/gzheader"), f = Object.prototype.toString;
        function h(m) {
          if (!(this instanceof h)) return new h(m);
          this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, m || {});
          var v = this.options;
          v.raw && 0 <= v.windowBits && v.windowBits < 16 && (v.windowBits = -v.windowBits, v.windowBits === 0 && (v.windowBits = -15)), !(0 <= v.windowBits && v.windowBits < 16) || m && m.windowBits || (v.windowBits += 32), 15 < v.windowBits && v.windowBits < 48 && (15 & v.windowBits) == 0 && (v.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new u(), this.strm.avail_out = 0;
          var p = s.inflateInit2(this.strm, v.windowBits);
          if (p !== l.Z_OK) throw new Error(c[p]);
          this.header = new d(), s.inflateGetHeader(this.strm, this.header);
        }
        function g(m, v) {
          var p = new h(v);
          if (p.push(m, !0), p.err) throw p.msg || c[p.err];
          return p.result;
        }
        h.prototype.push = function(m, v) {
          var p, _, w, A, k, E, x = this.strm, R = this.options.chunkSize, S = this.options.dictionary, I = !1;
          if (this.ended) return !1;
          _ = v === ~~v ? v : v === !0 ? l.Z_FINISH : l.Z_NO_FLUSH, typeof m == "string" ? x.input = o.binstring2buf(m) : f.call(m) === "[object ArrayBuffer]" ? x.input = new Uint8Array(m) : x.input = m, x.next_in = 0, x.avail_in = x.input.length;
          do {
            if (x.avail_out === 0 && (x.output = new a.Buf8(R), x.next_out = 0, x.avail_out = R), (p = s.inflate(x, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && S && (E = typeof S == "string" ? o.string2buf(S) : f.call(S) === "[object ArrayBuffer]" ? new Uint8Array(S) : S, p = s.inflateSetDictionary(this.strm, E)), p === l.Z_BUF_ERROR && I === !0 && (p = l.Z_OK, I = !1), p !== l.Z_STREAM_END && p !== l.Z_OK) return this.onEnd(p), !(this.ended = !0);
            x.next_out && (x.avail_out !== 0 && p !== l.Z_STREAM_END && (x.avail_in !== 0 || _ !== l.Z_FINISH && _ !== l.Z_SYNC_FLUSH) || (this.options.to === "string" ? (w = o.utf8border(x.output, x.next_out), A = x.next_out - w, k = o.buf2string(x.output, w), x.next_out = A, x.avail_out = R - A, A && a.arraySet(x.output, x.output, w, A, 0), this.onData(k)) : this.onData(a.shrinkBuf(x.output, x.next_out)))), x.avail_in === 0 && x.avail_out === 0 && (I = !0);
          } while ((0 < x.avail_in || x.avail_out === 0) && p !== l.Z_STREAM_END);
          return p === l.Z_STREAM_END && (_ = l.Z_FINISH), _ === l.Z_FINISH ? (p = s.inflateEnd(this.strm), this.onEnd(p), this.ended = !0, p === l.Z_OK) : _ !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(x.avail_out = 0));
        }, h.prototype.onData = function(m) {
          this.chunks.push(m);
        }, h.prototype.onEnd = function(m) {
          m === l.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = m, this.msg = this.strm.msg;
        }, i.Inflate = h, i.inflate = g, i.inflateRaw = function(m, v) {
          return (v = v || {}).raw = !0, g(m, v);
        }, i.ungzip = g;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(r, n, i) {
        var s = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
        i.assign = function(l) {
          for (var c = Array.prototype.slice.call(arguments, 1); c.length; ) {
            var u = c.shift();
            if (u) {
              if (typeof u != "object") throw new TypeError(u + "must be non-object");
              for (var d in u) u.hasOwnProperty(d) && (l[d] = u[d]);
            }
          }
          return l;
        }, i.shrinkBuf = function(l, c) {
          return l.length === c ? l : l.subarray ? l.subarray(0, c) : (l.length = c, l);
        };
        var a = { arraySet: function(l, c, u, d, f) {
          if (c.subarray && l.subarray) l.set(c.subarray(u, u + d), f);
          else for (var h = 0; h < d; h++) l[f + h] = c[u + h];
        }, flattenChunks: function(l) {
          var c, u, d, f, h, g;
          for (c = d = 0, u = l.length; c < u; c++) d += l[c].length;
          for (g = new Uint8Array(d), c = f = 0, u = l.length; c < u; c++) h = l[c], g.set(h, f), f += h.length;
          return g;
        } }, o = { arraySet: function(l, c, u, d, f) {
          for (var h = 0; h < d; h++) l[f + h] = c[u + h];
        }, flattenChunks: function(l) {
          return [].concat.apply([], l);
        } };
        i.setTyped = function(l) {
          l ? (i.Buf8 = Uint8Array, i.Buf16 = Uint16Array, i.Buf32 = Int32Array, i.assign(i, a)) : (i.Buf8 = Array, i.Buf16 = Array, i.Buf32 = Array, i.assign(i, o));
        }, i.setTyped(s);
      }, {}], 42: [function(r, n, i) {
        var s = r("./common"), a = !0, o = !0;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch {
          a = !1;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch {
          o = !1;
        }
        for (var l = new s.Buf8(256), c = 0; c < 256; c++) l[c] = 252 <= c ? 6 : 248 <= c ? 5 : 240 <= c ? 4 : 224 <= c ? 3 : 192 <= c ? 2 : 1;
        function u(d, f) {
          if (f < 65537 && (d.subarray && o || !d.subarray && a)) return String.fromCharCode.apply(null, s.shrinkBuf(d, f));
          for (var h = "", g = 0; g < f; g++) h += String.fromCharCode(d[g]);
          return h;
        }
        l[254] = l[254] = 1, i.string2buf = function(d) {
          var f, h, g, m, v, p = d.length, _ = 0;
          for (m = 0; m < p; m++) (64512 & (h = d.charCodeAt(m))) == 55296 && m + 1 < p && (64512 & (g = d.charCodeAt(m + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (g - 56320), m++), _ += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4;
          for (f = new s.Buf8(_), m = v = 0; v < _; m++) (64512 & (h = d.charCodeAt(m))) == 55296 && m + 1 < p && (64512 & (g = d.charCodeAt(m + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (g - 56320), m++), h < 128 ? f[v++] = h : (h < 2048 ? f[v++] = 192 | h >>> 6 : (h < 65536 ? f[v++] = 224 | h >>> 12 : (f[v++] = 240 | h >>> 18, f[v++] = 128 | h >>> 12 & 63), f[v++] = 128 | h >>> 6 & 63), f[v++] = 128 | 63 & h);
          return f;
        }, i.buf2binstring = function(d) {
          return u(d, d.length);
        }, i.binstring2buf = function(d) {
          for (var f = new s.Buf8(d.length), h = 0, g = f.length; h < g; h++) f[h] = d.charCodeAt(h);
          return f;
        }, i.buf2string = function(d, f) {
          var h, g, m, v, p = f || d.length, _ = new Array(2 * p);
          for (h = g = 0; h < p; ) if ((m = d[h++]) < 128) _[g++] = m;
          else if (4 < (v = l[m])) _[g++] = 65533, h += v - 1;
          else {
            for (m &= v === 2 ? 31 : v === 3 ? 15 : 7; 1 < v && h < p; ) m = m << 6 | 63 & d[h++], v--;
            1 < v ? _[g++] = 65533 : m < 65536 ? _[g++] = m : (m -= 65536, _[g++] = 55296 | m >> 10 & 1023, _[g++] = 56320 | 1023 & m);
          }
          return u(_, g);
        }, i.utf8border = function(d, f) {
          var h;
          for ((f = f || d.length) > d.length && (f = d.length), h = f - 1; 0 <= h && (192 & d[h]) == 128; ) h--;
          return h < 0 || h === 0 ? f : h + l[d[h]] > f ? h : f;
        };
      }, { "./common": 41 }], 43: [function(r, n, i) {
        n.exports = function(s, a, o, l) {
          for (var c = 65535 & s | 0, u = s >>> 16 & 65535 | 0, d = 0; o !== 0; ) {
            for (o -= d = 2e3 < o ? 2e3 : o; u = u + (c = c + a[l++] | 0) | 0, --d; ) ;
            c %= 65521, u %= 65521;
          }
          return c | u << 16 | 0;
        };
      }, {}], 44: [function(r, n, i) {
        n.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(r, n, i) {
        var s = (function() {
          for (var a, o = [], l = 0; l < 256; l++) {
            a = l;
            for (var c = 0; c < 8; c++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
            o[l] = a;
          }
          return o;
        })();
        n.exports = function(a, o, l, c) {
          var u = s, d = c + l;
          a ^= -1;
          for (var f = c; f < d; f++) a = a >>> 8 ^ u[255 & (a ^ o[f])];
          return -1 ^ a;
        };
      }, {}], 46: [function(r, n, i) {
        var s, a = r("../utils/common"), o = r("./trees"), l = r("./adler32"), c = r("./crc32"), u = r("./messages"), d = 0, f = 4, h = 0, g = -2, m = -1, v = 4, p = 2, _ = 8, w = 9, A = 286, k = 30, E = 19, x = 2 * A + 1, R = 15, S = 3, I = 258, P = I + S + 1, T = 42, O = 113, b = 1, z = 2, Q = 3, V = 4;
        function oe(y, M) {
          return y.msg = u[M], M;
        }
        function B(y) {
          return (y << 1) - (4 < y ? 9 : 0);
        }
        function re(y) {
          for (var M = y.length; 0 <= --M; ) y[M] = 0;
        }
        function L(y) {
          var M = y.state, D = M.pending;
          D > y.avail_out && (D = y.avail_out), D !== 0 && (a.arraySet(y.output, M.pending_buf, M.pending_out, D, y.next_out), y.next_out += D, M.pending_out += D, y.total_out += D, y.avail_out -= D, M.pending -= D, M.pending === 0 && (M.pending_out = 0));
        }
        function F(y, M) {
          o._tr_flush_block(y, 0 <= y.block_start ? y.block_start : -1, y.strstart - y.block_start, M), y.block_start = y.strstart, L(y.strm);
        }
        function se(y, M) {
          y.pending_buf[y.pending++] = M;
        }
        function X(y, M) {
          y.pending_buf[y.pending++] = M >>> 8 & 255, y.pending_buf[y.pending++] = 255 & M;
        }
        function J(y, M) {
          var D, N, C = y.max_chain_length, $ = y.strstart, W = y.prev_length, q = y.nice_match, U = y.strstart > y.w_size - P ? y.strstart - (y.w_size - P) : 0, K = y.window, ee = y.w_mask, G = y.prev, ae = y.strstart + I, _e = K[$ + W - 1], pe = K[$ + W];
          y.prev_length >= y.good_match && (C >>= 2), q > y.lookahead && (q = y.lookahead);
          do
            if (K[(D = M) + W] === pe && K[D + W - 1] === _e && K[D] === K[$] && K[++D] === K[$ + 1]) {
              $ += 2, D++;
              do
                ;
              while (K[++$] === K[++D] && K[++$] === K[++D] && K[++$] === K[++D] && K[++$] === K[++D] && K[++$] === K[++D] && K[++$] === K[++D] && K[++$] === K[++D] && K[++$] === K[++D] && $ < ae);
              if (N = I - (ae - $), $ = ae - I, W < N) {
                if (y.match_start = M, q <= (W = N)) break;
                _e = K[$ + W - 1], pe = K[$ + W];
              }
            }
          while ((M = G[M & ee]) > U && --C != 0);
          return W <= y.lookahead ? W : y.lookahead;
        }
        function Ae(y) {
          var M, D, N, C, $, W, q, U, K, ee, G = y.w_size;
          do {
            if (C = y.window_size - y.lookahead - y.strstart, y.strstart >= G + (G - P)) {
              for (a.arraySet(y.window, y.window, G, G, 0), y.match_start -= G, y.strstart -= G, y.block_start -= G, M = D = y.hash_size; N = y.head[--M], y.head[M] = G <= N ? N - G : 0, --D; ) ;
              for (M = D = G; N = y.prev[--M], y.prev[M] = G <= N ? N - G : 0, --D; ) ;
              C += G;
            }
            if (y.strm.avail_in === 0) break;
            if (W = y.strm, q = y.window, U = y.strstart + y.lookahead, K = C, ee = void 0, ee = W.avail_in, K < ee && (ee = K), D = ee === 0 ? 0 : (W.avail_in -= ee, a.arraySet(q, W.input, W.next_in, ee, U), W.state.wrap === 1 ? W.adler = l(W.adler, q, ee, U) : W.state.wrap === 2 && (W.adler = c(W.adler, q, ee, U)), W.next_in += ee, W.total_in += ee, ee), y.lookahead += D, y.lookahead + y.insert >= S) for ($ = y.strstart - y.insert, y.ins_h = y.window[$], y.ins_h = (y.ins_h << y.hash_shift ^ y.window[$ + 1]) & y.hash_mask; y.insert && (y.ins_h = (y.ins_h << y.hash_shift ^ y.window[$ + S - 1]) & y.hash_mask, y.prev[$ & y.w_mask] = y.head[y.ins_h], y.head[y.ins_h] = $, $++, y.insert--, !(y.lookahead + y.insert < S)); ) ;
          } while (y.lookahead < P && y.strm.avail_in !== 0);
        }
        function Fe(y, M) {
          for (var D, N; ; ) {
            if (y.lookahead < P) {
              if (Ae(y), y.lookahead < P && M === d) return b;
              if (y.lookahead === 0) break;
            }
            if (D = 0, y.lookahead >= S && (y.ins_h = (y.ins_h << y.hash_shift ^ y.window[y.strstart + S - 1]) & y.hash_mask, D = y.prev[y.strstart & y.w_mask] = y.head[y.ins_h], y.head[y.ins_h] = y.strstart), D !== 0 && y.strstart - D <= y.w_size - P && (y.match_length = J(y, D)), y.match_length >= S) if (N = o._tr_tally(y, y.strstart - y.match_start, y.match_length - S), y.lookahead -= y.match_length, y.match_length <= y.max_lazy_match && y.lookahead >= S) {
              for (y.match_length--; y.strstart++, y.ins_h = (y.ins_h << y.hash_shift ^ y.window[y.strstart + S - 1]) & y.hash_mask, D = y.prev[y.strstart & y.w_mask] = y.head[y.ins_h], y.head[y.ins_h] = y.strstart, --y.match_length != 0; ) ;
              y.strstart++;
            } else y.strstart += y.match_length, y.match_length = 0, y.ins_h = y.window[y.strstart], y.ins_h = (y.ins_h << y.hash_shift ^ y.window[y.strstart + 1]) & y.hash_mask;
            else N = o._tr_tally(y, 0, y.window[y.strstart]), y.lookahead--, y.strstart++;
            if (N && (F(y, !1), y.strm.avail_out === 0)) return b;
          }
          return y.insert = y.strstart < S - 1 ? y.strstart : S - 1, M === f ? (F(y, !0), y.strm.avail_out === 0 ? Q : V) : y.last_lit && (F(y, !1), y.strm.avail_out === 0) ? b : z;
        }
        function fe(y, M) {
          for (var D, N, C; ; ) {
            if (y.lookahead < P) {
              if (Ae(y), y.lookahead < P && M === d) return b;
              if (y.lookahead === 0) break;
            }
            if (D = 0, y.lookahead >= S && (y.ins_h = (y.ins_h << y.hash_shift ^ y.window[y.strstart + S - 1]) & y.hash_mask, D = y.prev[y.strstart & y.w_mask] = y.head[y.ins_h], y.head[y.ins_h] = y.strstart), y.prev_length = y.match_length, y.prev_match = y.match_start, y.match_length = S - 1, D !== 0 && y.prev_length < y.max_lazy_match && y.strstart - D <= y.w_size - P && (y.match_length = J(y, D), y.match_length <= 5 && (y.strategy === 1 || y.match_length === S && 4096 < y.strstart - y.match_start) && (y.match_length = S - 1)), y.prev_length >= S && y.match_length <= y.prev_length) {
              for (C = y.strstart + y.lookahead - S, N = o._tr_tally(y, y.strstart - 1 - y.prev_match, y.prev_length - S), y.lookahead -= y.prev_length - 1, y.prev_length -= 2; ++y.strstart <= C && (y.ins_h = (y.ins_h << y.hash_shift ^ y.window[y.strstart + S - 1]) & y.hash_mask, D = y.prev[y.strstart & y.w_mask] = y.head[y.ins_h], y.head[y.ins_h] = y.strstart), --y.prev_length != 0; ) ;
              if (y.match_available = 0, y.match_length = S - 1, y.strstart++, N && (F(y, !1), y.strm.avail_out === 0)) return b;
            } else if (y.match_available) {
              if ((N = o._tr_tally(y, 0, y.window[y.strstart - 1])) && F(y, !1), y.strstart++, y.lookahead--, y.strm.avail_out === 0) return b;
            } else y.match_available = 1, y.strstart++, y.lookahead--;
          }
          return y.match_available && (N = o._tr_tally(y, 0, y.window[y.strstart - 1]), y.match_available = 0), y.insert = y.strstart < S - 1 ? y.strstart : S - 1, M === f ? (F(y, !0), y.strm.avail_out === 0 ? Q : V) : y.last_lit && (F(y, !1), y.strm.avail_out === 0) ? b : z;
        }
        function me(y, M, D, N, C) {
          this.good_length = y, this.max_lazy = M, this.nice_length = D, this.max_chain = N, this.func = C;
        }
        function Ne() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = _, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * x), this.dyn_dtree = new a.Buf16(2 * (2 * k + 1)), this.bl_tree = new a.Buf16(2 * (2 * E + 1)), re(this.dyn_ltree), re(this.dyn_dtree), re(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(R + 1), this.heap = new a.Buf16(2 * A + 1), re(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * A + 1), re(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function Te(y) {
          var M;
          return y && y.state ? (y.total_in = y.total_out = 0, y.data_type = p, (M = y.state).pending = 0, M.pending_out = 0, M.wrap < 0 && (M.wrap = -M.wrap), M.status = M.wrap ? T : O, y.adler = M.wrap === 2 ? 0 : 1, M.last_flush = d, o._tr_init(M), h) : oe(y, g);
        }
        function lt(y) {
          var M = Te(y);
          return M === h && (function(D) {
            D.window_size = 2 * D.w_size, re(D.head), D.max_lazy_match = s[D.level].max_lazy, D.good_match = s[D.level].good_length, D.nice_match = s[D.level].nice_length, D.max_chain_length = s[D.level].max_chain, D.strstart = 0, D.block_start = 0, D.lookahead = 0, D.insert = 0, D.match_length = D.prev_length = S - 1, D.match_available = 0, D.ins_h = 0;
          })(y.state), M;
        }
        function rt(y, M, D, N, C, $) {
          if (!y) return g;
          var W = 1;
          if (M === m && (M = 6), N < 0 ? (W = 0, N = -N) : 15 < N && (W = 2, N -= 16), C < 1 || w < C || D !== _ || N < 8 || 15 < N || M < 0 || 9 < M || $ < 0 || v < $) return oe(y, g);
          N === 8 && (N = 9);
          var q = new Ne();
          return (y.state = q).strm = y, q.wrap = W, q.gzhead = null, q.w_bits = N, q.w_size = 1 << q.w_bits, q.w_mask = q.w_size - 1, q.hash_bits = C + 7, q.hash_size = 1 << q.hash_bits, q.hash_mask = q.hash_size - 1, q.hash_shift = ~~((q.hash_bits + S - 1) / S), q.window = new a.Buf8(2 * q.w_size), q.head = new a.Buf16(q.hash_size), q.prev = new a.Buf16(q.w_size), q.lit_bufsize = 1 << C + 6, q.pending_buf_size = 4 * q.lit_bufsize, q.pending_buf = new a.Buf8(q.pending_buf_size), q.d_buf = 1 * q.lit_bufsize, q.l_buf = 3 * q.lit_bufsize, q.level = M, q.strategy = $, q.method = D, lt(y);
        }
        s = [new me(0, 0, 0, 0, function(y, M) {
          var D = 65535;
          for (D > y.pending_buf_size - 5 && (D = y.pending_buf_size - 5); ; ) {
            if (y.lookahead <= 1) {
              if (Ae(y), y.lookahead === 0 && M === d) return b;
              if (y.lookahead === 0) break;
            }
            y.strstart += y.lookahead, y.lookahead = 0;
            var N = y.block_start + D;
            if ((y.strstart === 0 || y.strstart >= N) && (y.lookahead = y.strstart - N, y.strstart = N, F(y, !1), y.strm.avail_out === 0) || y.strstart - y.block_start >= y.w_size - P && (F(y, !1), y.strm.avail_out === 0)) return b;
          }
          return y.insert = 0, M === f ? (F(y, !0), y.strm.avail_out === 0 ? Q : V) : (y.strstart > y.block_start && (F(y, !1), y.strm.avail_out), b);
        }), new me(4, 4, 8, 4, Fe), new me(4, 5, 16, 8, Fe), new me(4, 6, 32, 32, Fe), new me(4, 4, 16, 16, fe), new me(8, 16, 32, 32, fe), new me(8, 16, 128, 128, fe), new me(8, 32, 128, 256, fe), new me(32, 128, 258, 1024, fe), new me(32, 258, 258, 4096, fe)], i.deflateInit = function(y, M) {
          return rt(y, M, _, 15, 8, 0);
        }, i.deflateInit2 = rt, i.deflateReset = lt, i.deflateResetKeep = Te, i.deflateSetHeader = function(y, M) {
          return y && y.state ? y.state.wrap !== 2 ? g : (y.state.gzhead = M, h) : g;
        }, i.deflate = function(y, M) {
          var D, N, C, $;
          if (!y || !y.state || 5 < M || M < 0) return y ? oe(y, g) : g;
          if (N = y.state, !y.output || !y.input && y.avail_in !== 0 || N.status === 666 && M !== f) return oe(y, y.avail_out === 0 ? -5 : g);
          if (N.strm = y, D = N.last_flush, N.last_flush = M, N.status === T) if (N.wrap === 2) y.adler = 0, se(N, 31), se(N, 139), se(N, 8), N.gzhead ? (se(N, (N.gzhead.text ? 1 : 0) + (N.gzhead.hcrc ? 2 : 0) + (N.gzhead.extra ? 4 : 0) + (N.gzhead.name ? 8 : 0) + (N.gzhead.comment ? 16 : 0)), se(N, 255 & N.gzhead.time), se(N, N.gzhead.time >> 8 & 255), se(N, N.gzhead.time >> 16 & 255), se(N, N.gzhead.time >> 24 & 255), se(N, N.level === 9 ? 2 : 2 <= N.strategy || N.level < 2 ? 4 : 0), se(N, 255 & N.gzhead.os), N.gzhead.extra && N.gzhead.extra.length && (se(N, 255 & N.gzhead.extra.length), se(N, N.gzhead.extra.length >> 8 & 255)), N.gzhead.hcrc && (y.adler = c(y.adler, N.pending_buf, N.pending, 0)), N.gzindex = 0, N.status = 69) : (se(N, 0), se(N, 0), se(N, 0), se(N, 0), se(N, 0), se(N, N.level === 9 ? 2 : 2 <= N.strategy || N.level < 2 ? 4 : 0), se(N, 3), N.status = O);
          else {
            var W = _ + (N.w_bits - 8 << 4) << 8;
            W |= (2 <= N.strategy || N.level < 2 ? 0 : N.level < 6 ? 1 : N.level === 6 ? 2 : 3) << 6, N.strstart !== 0 && (W |= 32), W += 31 - W % 31, N.status = O, X(N, W), N.strstart !== 0 && (X(N, y.adler >>> 16), X(N, 65535 & y.adler)), y.adler = 1;
          }
          if (N.status === 69) if (N.gzhead.extra) {
            for (C = N.pending; N.gzindex < (65535 & N.gzhead.extra.length) && (N.pending !== N.pending_buf_size || (N.gzhead.hcrc && N.pending > C && (y.adler = c(y.adler, N.pending_buf, N.pending - C, C)), L(y), C = N.pending, N.pending !== N.pending_buf_size)); ) se(N, 255 & N.gzhead.extra[N.gzindex]), N.gzindex++;
            N.gzhead.hcrc && N.pending > C && (y.adler = c(y.adler, N.pending_buf, N.pending - C, C)), N.gzindex === N.gzhead.extra.length && (N.gzindex = 0, N.status = 73);
          } else N.status = 73;
          if (N.status === 73) if (N.gzhead.name) {
            C = N.pending;
            do {
              if (N.pending === N.pending_buf_size && (N.gzhead.hcrc && N.pending > C && (y.adler = c(y.adler, N.pending_buf, N.pending - C, C)), L(y), C = N.pending, N.pending === N.pending_buf_size)) {
                $ = 1;
                break;
              }
              $ = N.gzindex < N.gzhead.name.length ? 255 & N.gzhead.name.charCodeAt(N.gzindex++) : 0, se(N, $);
            } while ($ !== 0);
            N.gzhead.hcrc && N.pending > C && (y.adler = c(y.adler, N.pending_buf, N.pending - C, C)), $ === 0 && (N.gzindex = 0, N.status = 91);
          } else N.status = 91;
          if (N.status === 91) if (N.gzhead.comment) {
            C = N.pending;
            do {
              if (N.pending === N.pending_buf_size && (N.gzhead.hcrc && N.pending > C && (y.adler = c(y.adler, N.pending_buf, N.pending - C, C)), L(y), C = N.pending, N.pending === N.pending_buf_size)) {
                $ = 1;
                break;
              }
              $ = N.gzindex < N.gzhead.comment.length ? 255 & N.gzhead.comment.charCodeAt(N.gzindex++) : 0, se(N, $);
            } while ($ !== 0);
            N.gzhead.hcrc && N.pending > C && (y.adler = c(y.adler, N.pending_buf, N.pending - C, C)), $ === 0 && (N.status = 103);
          } else N.status = 103;
          if (N.status === 103 && (N.gzhead.hcrc ? (N.pending + 2 > N.pending_buf_size && L(y), N.pending + 2 <= N.pending_buf_size && (se(N, 255 & y.adler), se(N, y.adler >> 8 & 255), y.adler = 0, N.status = O)) : N.status = O), N.pending !== 0) {
            if (L(y), y.avail_out === 0) return N.last_flush = -1, h;
          } else if (y.avail_in === 0 && B(M) <= B(D) && M !== f) return oe(y, -5);
          if (N.status === 666 && y.avail_in !== 0) return oe(y, -5);
          if (y.avail_in !== 0 || N.lookahead !== 0 || M !== d && N.status !== 666) {
            var q = N.strategy === 2 ? (function(U, K) {
              for (var ee; ; ) {
                if (U.lookahead === 0 && (Ae(U), U.lookahead === 0)) {
                  if (K === d) return b;
                  break;
                }
                if (U.match_length = 0, ee = o._tr_tally(U, 0, U.window[U.strstart]), U.lookahead--, U.strstart++, ee && (F(U, !1), U.strm.avail_out === 0)) return b;
              }
              return U.insert = 0, K === f ? (F(U, !0), U.strm.avail_out === 0 ? Q : V) : U.last_lit && (F(U, !1), U.strm.avail_out === 0) ? b : z;
            })(N, M) : N.strategy === 3 ? (function(U, K) {
              for (var ee, G, ae, _e, pe = U.window; ; ) {
                if (U.lookahead <= I) {
                  if (Ae(U), U.lookahead <= I && K === d) return b;
                  if (U.lookahead === 0) break;
                }
                if (U.match_length = 0, U.lookahead >= S && 0 < U.strstart && (G = pe[ae = U.strstart - 1]) === pe[++ae] && G === pe[++ae] && G === pe[++ae]) {
                  _e = U.strstart + I;
                  do
                    ;
                  while (G === pe[++ae] && G === pe[++ae] && G === pe[++ae] && G === pe[++ae] && G === pe[++ae] && G === pe[++ae] && G === pe[++ae] && G === pe[++ae] && ae < _e);
                  U.match_length = I - (_e - ae), U.match_length > U.lookahead && (U.match_length = U.lookahead);
                }
                if (U.match_length >= S ? (ee = o._tr_tally(U, 1, U.match_length - S), U.lookahead -= U.match_length, U.strstart += U.match_length, U.match_length = 0) : (ee = o._tr_tally(U, 0, U.window[U.strstart]), U.lookahead--, U.strstart++), ee && (F(U, !1), U.strm.avail_out === 0)) return b;
              }
              return U.insert = 0, K === f ? (F(U, !0), U.strm.avail_out === 0 ? Q : V) : U.last_lit && (F(U, !1), U.strm.avail_out === 0) ? b : z;
            })(N, M) : s[N.level].func(N, M);
            if (q !== Q && q !== V || (N.status = 666), q === b || q === Q) return y.avail_out === 0 && (N.last_flush = -1), h;
            if (q === z && (M === 1 ? o._tr_align(N) : M !== 5 && (o._tr_stored_block(N, 0, 0, !1), M === 3 && (re(N.head), N.lookahead === 0 && (N.strstart = 0, N.block_start = 0, N.insert = 0))), L(y), y.avail_out === 0)) return N.last_flush = -1, h;
          }
          return M !== f ? h : N.wrap <= 0 ? 1 : (N.wrap === 2 ? (se(N, 255 & y.adler), se(N, y.adler >> 8 & 255), se(N, y.adler >> 16 & 255), se(N, y.adler >> 24 & 255), se(N, 255 & y.total_in), se(N, y.total_in >> 8 & 255), se(N, y.total_in >> 16 & 255), se(N, y.total_in >> 24 & 255)) : (X(N, y.adler >>> 16), X(N, 65535 & y.adler)), L(y), 0 < N.wrap && (N.wrap = -N.wrap), N.pending !== 0 ? h : 1);
        }, i.deflateEnd = function(y) {
          var M;
          return y && y.state ? (M = y.state.status) !== T && M !== 69 && M !== 73 && M !== 91 && M !== 103 && M !== O && M !== 666 ? oe(y, g) : (y.state = null, M === O ? oe(y, -3) : h) : g;
        }, i.deflateSetDictionary = function(y, M) {
          var D, N, C, $, W, q, U, K, ee = M.length;
          if (!y || !y.state || ($ = (D = y.state).wrap) === 2 || $ === 1 && D.status !== T || D.lookahead) return g;
          for ($ === 1 && (y.adler = l(y.adler, M, ee, 0)), D.wrap = 0, ee >= D.w_size && ($ === 0 && (re(D.head), D.strstart = 0, D.block_start = 0, D.insert = 0), K = new a.Buf8(D.w_size), a.arraySet(K, M, ee - D.w_size, D.w_size, 0), M = K, ee = D.w_size), W = y.avail_in, q = y.next_in, U = y.input, y.avail_in = ee, y.next_in = 0, y.input = M, Ae(D); D.lookahead >= S; ) {
            for (N = D.strstart, C = D.lookahead - (S - 1); D.ins_h = (D.ins_h << D.hash_shift ^ D.window[N + S - 1]) & D.hash_mask, D.prev[N & D.w_mask] = D.head[D.ins_h], D.head[D.ins_h] = N, N++, --C; ) ;
            D.strstart = N, D.lookahead = S - 1, Ae(D);
          }
          return D.strstart += D.lookahead, D.block_start = D.strstart, D.insert = D.lookahead, D.lookahead = 0, D.match_length = D.prev_length = S - 1, D.match_available = 0, y.next_in = q, y.input = U, y.avail_in = W, D.wrap = $, h;
        }, i.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, n, i) {
        n.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
        };
      }, {}], 48: [function(r, n, i) {
        n.exports = function(s, a) {
          var o, l, c, u, d, f, h, g, m, v, p, _, w, A, k, E, x, R, S, I, P, T, O, b, z;
          o = s.state, l = s.next_in, b = s.input, c = l + (s.avail_in - 5), u = s.next_out, z = s.output, d = u - (a - s.avail_out), f = u + (s.avail_out - 257), h = o.dmax, g = o.wsize, m = o.whave, v = o.wnext, p = o.window, _ = o.hold, w = o.bits, A = o.lencode, k = o.distcode, E = (1 << o.lenbits) - 1, x = (1 << o.distbits) - 1;
          e: do {
            w < 15 && (_ += b[l++] << w, w += 8, _ += b[l++] << w, w += 8), R = A[_ & E];
            t: for (; ; ) {
              if (_ >>>= S = R >>> 24, w -= S, (S = R >>> 16 & 255) === 0) z[u++] = 65535 & R;
              else {
                if (!(16 & S)) {
                  if ((64 & S) == 0) {
                    R = A[(65535 & R) + (_ & (1 << S) - 1)];
                    continue t;
                  }
                  if (32 & S) {
                    o.mode = 12;
                    break e;
                  }
                  s.msg = "invalid literal/length code", o.mode = 30;
                  break e;
                }
                I = 65535 & R, (S &= 15) && (w < S && (_ += b[l++] << w, w += 8), I += _ & (1 << S) - 1, _ >>>= S, w -= S), w < 15 && (_ += b[l++] << w, w += 8, _ += b[l++] << w, w += 8), R = k[_ & x];
                r: for (; ; ) {
                  if (_ >>>= S = R >>> 24, w -= S, !(16 & (S = R >>> 16 & 255))) {
                    if ((64 & S) == 0) {
                      R = k[(65535 & R) + (_ & (1 << S) - 1)];
                      continue r;
                    }
                    s.msg = "invalid distance code", o.mode = 30;
                    break e;
                  }
                  if (P = 65535 & R, w < (S &= 15) && (_ += b[l++] << w, (w += 8) < S && (_ += b[l++] << w, w += 8)), h < (P += _ & (1 << S) - 1)) {
                    s.msg = "invalid distance too far back", o.mode = 30;
                    break e;
                  }
                  if (_ >>>= S, w -= S, (S = u - d) < P) {
                    if (m < (S = P - S) && o.sane) {
                      s.msg = "invalid distance too far back", o.mode = 30;
                      break e;
                    }
                    if (O = p, (T = 0) === v) {
                      if (T += g - S, S < I) {
                        for (I -= S; z[u++] = p[T++], --S; ) ;
                        T = u - P, O = z;
                      }
                    } else if (v < S) {
                      if (T += g + v - S, (S -= v) < I) {
                        for (I -= S; z[u++] = p[T++], --S; ) ;
                        if (T = 0, v < I) {
                          for (I -= S = v; z[u++] = p[T++], --S; ) ;
                          T = u - P, O = z;
                        }
                      }
                    } else if (T += v - S, S < I) {
                      for (I -= S; z[u++] = p[T++], --S; ) ;
                      T = u - P, O = z;
                    }
                    for (; 2 < I; ) z[u++] = O[T++], z[u++] = O[T++], z[u++] = O[T++], I -= 3;
                    I && (z[u++] = O[T++], 1 < I && (z[u++] = O[T++]));
                  } else {
                    for (T = u - P; z[u++] = z[T++], z[u++] = z[T++], z[u++] = z[T++], 2 < (I -= 3); ) ;
                    I && (z[u++] = z[T++], 1 < I && (z[u++] = z[T++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (l < c && u < f);
          l -= I = w >> 3, _ &= (1 << (w -= I << 3)) - 1, s.next_in = l, s.next_out = u, s.avail_in = l < c ? c - l + 5 : 5 - (l - c), s.avail_out = u < f ? f - u + 257 : 257 - (u - f), o.hold = _, o.bits = w;
        };
      }, {}], 49: [function(r, n, i) {
        var s = r("../utils/common"), a = r("./adler32"), o = r("./crc32"), l = r("./inffast"), c = r("./inftrees"), u = 1, d = 2, f = 0, h = -2, g = 1, m = 852, v = 592;
        function p(T) {
          return (T >>> 24 & 255) + (T >>> 8 & 65280) + ((65280 & T) << 8) + ((255 & T) << 24);
        }
        function _() {
          this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new s.Buf16(320), this.work = new s.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function w(T) {
          var O;
          return T && T.state ? (O = T.state, T.total_in = T.total_out = O.total = 0, T.msg = "", O.wrap && (T.adler = 1 & O.wrap), O.mode = g, O.last = 0, O.havedict = 0, O.dmax = 32768, O.head = null, O.hold = 0, O.bits = 0, O.lencode = O.lendyn = new s.Buf32(m), O.distcode = O.distdyn = new s.Buf32(v), O.sane = 1, O.back = -1, f) : h;
        }
        function A(T) {
          var O;
          return T && T.state ? ((O = T.state).wsize = 0, O.whave = 0, O.wnext = 0, w(T)) : h;
        }
        function k(T, O) {
          var b, z;
          return T && T.state ? (z = T.state, O < 0 ? (b = 0, O = -O) : (b = 1 + (O >> 4), O < 48 && (O &= 15)), O && (O < 8 || 15 < O) ? h : (z.window !== null && z.wbits !== O && (z.window = null), z.wrap = b, z.wbits = O, A(T))) : h;
        }
        function E(T, O) {
          var b, z;
          return T ? (z = new _(), (T.state = z).window = null, (b = k(T, O)) !== f && (T.state = null), b) : h;
        }
        var x, R, S = !0;
        function I(T) {
          if (S) {
            var O;
            for (x = new s.Buf32(512), R = new s.Buf32(32), O = 0; O < 144; ) T.lens[O++] = 8;
            for (; O < 256; ) T.lens[O++] = 9;
            for (; O < 280; ) T.lens[O++] = 7;
            for (; O < 288; ) T.lens[O++] = 8;
            for (c(u, T.lens, 0, 288, x, 0, T.work, { bits: 9 }), O = 0; O < 32; ) T.lens[O++] = 5;
            c(d, T.lens, 0, 32, R, 0, T.work, { bits: 5 }), S = !1;
          }
          T.lencode = x, T.lenbits = 9, T.distcode = R, T.distbits = 5;
        }
        function P(T, O, b, z) {
          var Q, V = T.state;
          return V.window === null && (V.wsize = 1 << V.wbits, V.wnext = 0, V.whave = 0, V.window = new s.Buf8(V.wsize)), z >= V.wsize ? (s.arraySet(V.window, O, b - V.wsize, V.wsize, 0), V.wnext = 0, V.whave = V.wsize) : (z < (Q = V.wsize - V.wnext) && (Q = z), s.arraySet(V.window, O, b - z, Q, V.wnext), (z -= Q) ? (s.arraySet(V.window, O, b - z, z, 0), V.wnext = z, V.whave = V.wsize) : (V.wnext += Q, V.wnext === V.wsize && (V.wnext = 0), V.whave < V.wsize && (V.whave += Q))), 0;
        }
        i.inflateReset = A, i.inflateReset2 = k, i.inflateResetKeep = w, i.inflateInit = function(T) {
          return E(T, 15);
        }, i.inflateInit2 = E, i.inflate = function(T, O) {
          var b, z, Q, V, oe, B, re, L, F, se, X, J, Ae, Fe, fe, me, Ne, Te, lt, rt, y, M, D, N, C = 0, $ = new s.Buf8(4), W = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!T || !T.state || !T.output || !T.input && T.avail_in !== 0) return h;
          (b = T.state).mode === 12 && (b.mode = 13), oe = T.next_out, Q = T.output, re = T.avail_out, V = T.next_in, z = T.input, B = T.avail_in, L = b.hold, F = b.bits, se = B, X = re, M = f;
          e: for (; ; ) switch (b.mode) {
            case g:
              if (b.wrap === 0) {
                b.mode = 13;
                break;
              }
              for (; F < 16; ) {
                if (B === 0) break e;
                B--, L += z[V++] << F, F += 8;
              }
              if (2 & b.wrap && L === 35615) {
                $[b.check = 0] = 255 & L, $[1] = L >>> 8 & 255, b.check = o(b.check, $, 2, 0), F = L = 0, b.mode = 2;
                break;
              }
              if (b.flags = 0, b.head && (b.head.done = !1), !(1 & b.wrap) || (((255 & L) << 8) + (L >> 8)) % 31) {
                T.msg = "incorrect header check", b.mode = 30;
                break;
              }
              if ((15 & L) != 8) {
                T.msg = "unknown compression method", b.mode = 30;
                break;
              }
              if (F -= 4, y = 8 + (15 & (L >>>= 4)), b.wbits === 0) b.wbits = y;
              else if (y > b.wbits) {
                T.msg = "invalid window size", b.mode = 30;
                break;
              }
              b.dmax = 1 << y, T.adler = b.check = 1, b.mode = 512 & L ? 10 : 12, F = L = 0;
              break;
            case 2:
              for (; F < 16; ) {
                if (B === 0) break e;
                B--, L += z[V++] << F, F += 8;
              }
              if (b.flags = L, (255 & b.flags) != 8) {
                T.msg = "unknown compression method", b.mode = 30;
                break;
              }
              if (57344 & b.flags) {
                T.msg = "unknown header flags set", b.mode = 30;
                break;
              }
              b.head && (b.head.text = L >> 8 & 1), 512 & b.flags && ($[0] = 255 & L, $[1] = L >>> 8 & 255, b.check = o(b.check, $, 2, 0)), F = L = 0, b.mode = 3;
            case 3:
              for (; F < 32; ) {
                if (B === 0) break e;
                B--, L += z[V++] << F, F += 8;
              }
              b.head && (b.head.time = L), 512 & b.flags && ($[0] = 255 & L, $[1] = L >>> 8 & 255, $[2] = L >>> 16 & 255, $[3] = L >>> 24 & 255, b.check = o(b.check, $, 4, 0)), F = L = 0, b.mode = 4;
            case 4:
              for (; F < 16; ) {
                if (B === 0) break e;
                B--, L += z[V++] << F, F += 8;
              }
              b.head && (b.head.xflags = 255 & L, b.head.os = L >> 8), 512 & b.flags && ($[0] = 255 & L, $[1] = L >>> 8 & 255, b.check = o(b.check, $, 2, 0)), F = L = 0, b.mode = 5;
            case 5:
              if (1024 & b.flags) {
                for (; F < 16; ) {
                  if (B === 0) break e;
                  B--, L += z[V++] << F, F += 8;
                }
                b.length = L, b.head && (b.head.extra_len = L), 512 & b.flags && ($[0] = 255 & L, $[1] = L >>> 8 & 255, b.check = o(b.check, $, 2, 0)), F = L = 0;
              } else b.head && (b.head.extra = null);
              b.mode = 6;
            case 6:
              if (1024 & b.flags && (B < (J = b.length) && (J = B), J && (b.head && (y = b.head.extra_len - b.length, b.head.extra || (b.head.extra = new Array(b.head.extra_len)), s.arraySet(b.head.extra, z, V, J, y)), 512 & b.flags && (b.check = o(b.check, z, J, V)), B -= J, V += J, b.length -= J), b.length)) break e;
              b.length = 0, b.mode = 7;
            case 7:
              if (2048 & b.flags) {
                if (B === 0) break e;
                for (J = 0; y = z[V + J++], b.head && y && b.length < 65536 && (b.head.name += String.fromCharCode(y)), y && J < B; ) ;
                if (512 & b.flags && (b.check = o(b.check, z, J, V)), B -= J, V += J, y) break e;
              } else b.head && (b.head.name = null);
              b.length = 0, b.mode = 8;
            case 8:
              if (4096 & b.flags) {
                if (B === 0) break e;
                for (J = 0; y = z[V + J++], b.head && y && b.length < 65536 && (b.head.comment += String.fromCharCode(y)), y && J < B; ) ;
                if (512 & b.flags && (b.check = o(b.check, z, J, V)), B -= J, V += J, y) break e;
              } else b.head && (b.head.comment = null);
              b.mode = 9;
            case 9:
              if (512 & b.flags) {
                for (; F < 16; ) {
                  if (B === 0) break e;
                  B--, L += z[V++] << F, F += 8;
                }
                if (L !== (65535 & b.check)) {
                  T.msg = "header crc mismatch", b.mode = 30;
                  break;
                }
                F = L = 0;
              }
              b.head && (b.head.hcrc = b.flags >> 9 & 1, b.head.done = !0), T.adler = b.check = 0, b.mode = 12;
              break;
            case 10:
              for (; F < 32; ) {
                if (B === 0) break e;
                B--, L += z[V++] << F, F += 8;
              }
              T.adler = b.check = p(L), F = L = 0, b.mode = 11;
            case 11:
              if (b.havedict === 0) return T.next_out = oe, T.avail_out = re, T.next_in = V, T.avail_in = B, b.hold = L, b.bits = F, 2;
              T.adler = b.check = 1, b.mode = 12;
            case 12:
              if (O === 5 || O === 6) break e;
            case 13:
              if (b.last) {
                L >>>= 7 & F, F -= 7 & F, b.mode = 27;
                break;
              }
              for (; F < 3; ) {
                if (B === 0) break e;
                B--, L += z[V++] << F, F += 8;
              }
              switch (b.last = 1 & L, F -= 1, 3 & (L >>>= 1)) {
                case 0:
                  b.mode = 14;
                  break;
                case 1:
                  if (I(b), b.mode = 20, O !== 6) break;
                  L >>>= 2, F -= 2;
                  break e;
                case 2:
                  b.mode = 17;
                  break;
                case 3:
                  T.msg = "invalid block type", b.mode = 30;
              }
              L >>>= 2, F -= 2;
              break;
            case 14:
              for (L >>>= 7 & F, F -= 7 & F; F < 32; ) {
                if (B === 0) break e;
                B--, L += z[V++] << F, F += 8;
              }
              if ((65535 & L) != (L >>> 16 ^ 65535)) {
                T.msg = "invalid stored block lengths", b.mode = 30;
                break;
              }
              if (b.length = 65535 & L, F = L = 0, b.mode = 15, O === 6) break e;
            case 15:
              b.mode = 16;
            case 16:
              if (J = b.length) {
                if (B < J && (J = B), re < J && (J = re), J === 0) break e;
                s.arraySet(Q, z, V, J, oe), B -= J, V += J, re -= J, oe += J, b.length -= J;
                break;
              }
              b.mode = 12;
              break;
            case 17:
              for (; F < 14; ) {
                if (B === 0) break e;
                B--, L += z[V++] << F, F += 8;
              }
              if (b.nlen = 257 + (31 & L), L >>>= 5, F -= 5, b.ndist = 1 + (31 & L), L >>>= 5, F -= 5, b.ncode = 4 + (15 & L), L >>>= 4, F -= 4, 286 < b.nlen || 30 < b.ndist) {
                T.msg = "too many length or distance symbols", b.mode = 30;
                break;
              }
              b.have = 0, b.mode = 18;
            case 18:
              for (; b.have < b.ncode; ) {
                for (; F < 3; ) {
                  if (B === 0) break e;
                  B--, L += z[V++] << F, F += 8;
                }
                b.lens[W[b.have++]] = 7 & L, L >>>= 3, F -= 3;
              }
              for (; b.have < 19; ) b.lens[W[b.have++]] = 0;
              if (b.lencode = b.lendyn, b.lenbits = 7, D = { bits: b.lenbits }, M = c(0, b.lens, 0, 19, b.lencode, 0, b.work, D), b.lenbits = D.bits, M) {
                T.msg = "invalid code lengths set", b.mode = 30;
                break;
              }
              b.have = 0, b.mode = 19;
            case 19:
              for (; b.have < b.nlen + b.ndist; ) {
                for (; me = (C = b.lencode[L & (1 << b.lenbits) - 1]) >>> 16 & 255, Ne = 65535 & C, !((fe = C >>> 24) <= F); ) {
                  if (B === 0) break e;
                  B--, L += z[V++] << F, F += 8;
                }
                if (Ne < 16) L >>>= fe, F -= fe, b.lens[b.have++] = Ne;
                else {
                  if (Ne === 16) {
                    for (N = fe + 2; F < N; ) {
                      if (B === 0) break e;
                      B--, L += z[V++] << F, F += 8;
                    }
                    if (L >>>= fe, F -= fe, b.have === 0) {
                      T.msg = "invalid bit length repeat", b.mode = 30;
                      break;
                    }
                    y = b.lens[b.have - 1], J = 3 + (3 & L), L >>>= 2, F -= 2;
                  } else if (Ne === 17) {
                    for (N = fe + 3; F < N; ) {
                      if (B === 0) break e;
                      B--, L += z[V++] << F, F += 8;
                    }
                    F -= fe, y = 0, J = 3 + (7 & (L >>>= fe)), L >>>= 3, F -= 3;
                  } else {
                    for (N = fe + 7; F < N; ) {
                      if (B === 0) break e;
                      B--, L += z[V++] << F, F += 8;
                    }
                    F -= fe, y = 0, J = 11 + (127 & (L >>>= fe)), L >>>= 7, F -= 7;
                  }
                  if (b.have + J > b.nlen + b.ndist) {
                    T.msg = "invalid bit length repeat", b.mode = 30;
                    break;
                  }
                  for (; J--; ) b.lens[b.have++] = y;
                }
              }
              if (b.mode === 30) break;
              if (b.lens[256] === 0) {
                T.msg = "invalid code -- missing end-of-block", b.mode = 30;
                break;
              }
              if (b.lenbits = 9, D = { bits: b.lenbits }, M = c(u, b.lens, 0, b.nlen, b.lencode, 0, b.work, D), b.lenbits = D.bits, M) {
                T.msg = "invalid literal/lengths set", b.mode = 30;
                break;
              }
              if (b.distbits = 6, b.distcode = b.distdyn, D = { bits: b.distbits }, M = c(d, b.lens, b.nlen, b.ndist, b.distcode, 0, b.work, D), b.distbits = D.bits, M) {
                T.msg = "invalid distances set", b.mode = 30;
                break;
              }
              if (b.mode = 20, O === 6) break e;
            case 20:
              b.mode = 21;
            case 21:
              if (6 <= B && 258 <= re) {
                T.next_out = oe, T.avail_out = re, T.next_in = V, T.avail_in = B, b.hold = L, b.bits = F, l(T, X), oe = T.next_out, Q = T.output, re = T.avail_out, V = T.next_in, z = T.input, B = T.avail_in, L = b.hold, F = b.bits, b.mode === 12 && (b.back = -1);
                break;
              }
              for (b.back = 0; me = (C = b.lencode[L & (1 << b.lenbits) - 1]) >>> 16 & 255, Ne = 65535 & C, !((fe = C >>> 24) <= F); ) {
                if (B === 0) break e;
                B--, L += z[V++] << F, F += 8;
              }
              if (me && (240 & me) == 0) {
                for (Te = fe, lt = me, rt = Ne; me = (C = b.lencode[rt + ((L & (1 << Te + lt) - 1) >> Te)]) >>> 16 & 255, Ne = 65535 & C, !(Te + (fe = C >>> 24) <= F); ) {
                  if (B === 0) break e;
                  B--, L += z[V++] << F, F += 8;
                }
                L >>>= Te, F -= Te, b.back += Te;
              }
              if (L >>>= fe, F -= fe, b.back += fe, b.length = Ne, me === 0) {
                b.mode = 26;
                break;
              }
              if (32 & me) {
                b.back = -1, b.mode = 12;
                break;
              }
              if (64 & me) {
                T.msg = "invalid literal/length code", b.mode = 30;
                break;
              }
              b.extra = 15 & me, b.mode = 22;
            case 22:
              if (b.extra) {
                for (N = b.extra; F < N; ) {
                  if (B === 0) break e;
                  B--, L += z[V++] << F, F += 8;
                }
                b.length += L & (1 << b.extra) - 1, L >>>= b.extra, F -= b.extra, b.back += b.extra;
              }
              b.was = b.length, b.mode = 23;
            case 23:
              for (; me = (C = b.distcode[L & (1 << b.distbits) - 1]) >>> 16 & 255, Ne = 65535 & C, !((fe = C >>> 24) <= F); ) {
                if (B === 0) break e;
                B--, L += z[V++] << F, F += 8;
              }
              if ((240 & me) == 0) {
                for (Te = fe, lt = me, rt = Ne; me = (C = b.distcode[rt + ((L & (1 << Te + lt) - 1) >> Te)]) >>> 16 & 255, Ne = 65535 & C, !(Te + (fe = C >>> 24) <= F); ) {
                  if (B === 0) break e;
                  B--, L += z[V++] << F, F += 8;
                }
                L >>>= Te, F -= Te, b.back += Te;
              }
              if (L >>>= fe, F -= fe, b.back += fe, 64 & me) {
                T.msg = "invalid distance code", b.mode = 30;
                break;
              }
              b.offset = Ne, b.extra = 15 & me, b.mode = 24;
            case 24:
              if (b.extra) {
                for (N = b.extra; F < N; ) {
                  if (B === 0) break e;
                  B--, L += z[V++] << F, F += 8;
                }
                b.offset += L & (1 << b.extra) - 1, L >>>= b.extra, F -= b.extra, b.back += b.extra;
              }
              if (b.offset > b.dmax) {
                T.msg = "invalid distance too far back", b.mode = 30;
                break;
              }
              b.mode = 25;
            case 25:
              if (re === 0) break e;
              if (J = X - re, b.offset > J) {
                if ((J = b.offset - J) > b.whave && b.sane) {
                  T.msg = "invalid distance too far back", b.mode = 30;
                  break;
                }
                Ae = J > b.wnext ? (J -= b.wnext, b.wsize - J) : b.wnext - J, J > b.length && (J = b.length), Fe = b.window;
              } else Fe = Q, Ae = oe - b.offset, J = b.length;
              for (re < J && (J = re), re -= J, b.length -= J; Q[oe++] = Fe[Ae++], --J; ) ;
              b.length === 0 && (b.mode = 21);
              break;
            case 26:
              if (re === 0) break e;
              Q[oe++] = b.length, re--, b.mode = 21;
              break;
            case 27:
              if (b.wrap) {
                for (; F < 32; ) {
                  if (B === 0) break e;
                  B--, L |= z[V++] << F, F += 8;
                }
                if (X -= re, T.total_out += X, b.total += X, X && (T.adler = b.check = b.flags ? o(b.check, Q, X, oe - X) : a(b.check, Q, X, oe - X)), X = re, (b.flags ? L : p(L)) !== b.check) {
                  T.msg = "incorrect data check", b.mode = 30;
                  break;
                }
                F = L = 0;
              }
              b.mode = 28;
            case 28:
              if (b.wrap && b.flags) {
                for (; F < 32; ) {
                  if (B === 0) break e;
                  B--, L += z[V++] << F, F += 8;
                }
                if (L !== (4294967295 & b.total)) {
                  T.msg = "incorrect length check", b.mode = 30;
                  break;
                }
                F = L = 0;
              }
              b.mode = 29;
            case 29:
              M = 1;
              break e;
            case 30:
              M = -3;
              break e;
            case 31:
              return -4;
            case 32:
            default:
              return h;
          }
          return T.next_out = oe, T.avail_out = re, T.next_in = V, T.avail_in = B, b.hold = L, b.bits = F, (b.wsize || X !== T.avail_out && b.mode < 30 && (b.mode < 27 || O !== 4)) && P(T, T.output, T.next_out, X - T.avail_out) ? (b.mode = 31, -4) : (se -= T.avail_in, X -= T.avail_out, T.total_in += se, T.total_out += X, b.total += X, b.wrap && X && (T.adler = b.check = b.flags ? o(b.check, Q, X, T.next_out - X) : a(b.check, Q, X, T.next_out - X)), T.data_type = b.bits + (b.last ? 64 : 0) + (b.mode === 12 ? 128 : 0) + (b.mode === 20 || b.mode === 15 ? 256 : 0), (se == 0 && X === 0 || O === 4) && M === f && (M = -5), M);
        }, i.inflateEnd = function(T) {
          if (!T || !T.state) return h;
          var O = T.state;
          return O.window && (O.window = null), T.state = null, f;
        }, i.inflateGetHeader = function(T, O) {
          var b;
          return T && T.state ? (2 & (b = T.state).wrap) == 0 ? h : ((b.head = O).done = !1, f) : h;
        }, i.inflateSetDictionary = function(T, O) {
          var b, z = O.length;
          return T && T.state ? (b = T.state).wrap !== 0 && b.mode !== 11 ? h : b.mode === 11 && a(1, O, z, 0) !== b.check ? -3 : P(T, O, z, z) ? (b.mode = 31, -4) : (b.havedict = 1, f) : h;
        }, i.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, n, i) {
        var s = r("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], c = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        n.exports = function(u, d, f, h, g, m, v, p) {
          var _, w, A, k, E, x, R, S, I, P = p.bits, T = 0, O = 0, b = 0, z = 0, Q = 0, V = 0, oe = 0, B = 0, re = 0, L = 0, F = null, se = 0, X = new s.Buf16(16), J = new s.Buf16(16), Ae = null, Fe = 0;
          for (T = 0; T <= 15; T++) X[T] = 0;
          for (O = 0; O < h; O++) X[d[f + O]]++;
          for (Q = P, z = 15; 1 <= z && X[z] === 0; z--) ;
          if (z < Q && (Q = z), z === 0) return g[m++] = 20971520, g[m++] = 20971520, p.bits = 1, 0;
          for (b = 1; b < z && X[b] === 0; b++) ;
          for (Q < b && (Q = b), T = B = 1; T <= 15; T++) if (B <<= 1, (B -= X[T]) < 0) return -1;
          if (0 < B && (u === 0 || z !== 1)) return -1;
          for (J[1] = 0, T = 1; T < 15; T++) J[T + 1] = J[T] + X[T];
          for (O = 0; O < h; O++) d[f + O] !== 0 && (v[J[d[f + O]]++] = O);
          if (x = u === 0 ? (F = Ae = v, 19) : u === 1 ? (F = a, se -= 257, Ae = o, Fe -= 257, 256) : (F = l, Ae = c, -1), T = b, E = m, oe = O = L = 0, A = -1, k = (re = 1 << (V = Q)) - 1, u === 1 && 852 < re || u === 2 && 592 < re) return 1;
          for (; ; ) {
            for (R = T - oe, I = v[O] < x ? (S = 0, v[O]) : v[O] > x ? (S = Ae[Fe + v[O]], F[se + v[O]]) : (S = 96, 0), _ = 1 << T - oe, b = w = 1 << V; g[E + (L >> oe) + (w -= _)] = R << 24 | S << 16 | I | 0, w !== 0; ) ;
            for (_ = 1 << T - 1; L & _; ) _ >>= 1;
            if (_ !== 0 ? (L &= _ - 1, L += _) : L = 0, O++, --X[T] == 0) {
              if (T === z) break;
              T = d[f + v[O]];
            }
            if (Q < T && (L & k) !== A) {
              for (oe === 0 && (oe = Q), E += b, B = 1 << (V = T - oe); V + oe < z && !((B -= X[V + oe]) <= 0); ) V++, B <<= 1;
              if (re += 1 << V, u === 1 && 852 < re || u === 2 && 592 < re) return 1;
              g[A = L & k] = Q << 24 | V << 16 | E - m | 0;
            }
          }
          return L !== 0 && (g[E + L] = T - oe << 24 | 64 << 16 | 0), p.bits = Q, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(r, n, i) {
        n.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(r, n, i) {
        var s = r("../utils/common"), a = 0, o = 1;
        function l(C) {
          for (var $ = C.length; 0 <= --$; ) C[$] = 0;
        }
        var c = 0, u = 29, d = 256, f = d + 1 + u, h = 30, g = 19, m = 2 * f + 1, v = 15, p = 16, _ = 7, w = 256, A = 16, k = 17, E = 18, x = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], R = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], S = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], I = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], P = new Array(2 * (f + 2));
        l(P);
        var T = new Array(2 * h);
        l(T);
        var O = new Array(512);
        l(O);
        var b = new Array(256);
        l(b);
        var z = new Array(u);
        l(z);
        var Q, V, oe, B = new Array(h);
        function re(C, $, W, q, U) {
          this.static_tree = C, this.extra_bits = $, this.extra_base = W, this.elems = q, this.max_length = U, this.has_stree = C && C.length;
        }
        function L(C, $) {
          this.dyn_tree = C, this.max_code = 0, this.stat_desc = $;
        }
        function F(C) {
          return C < 256 ? O[C] : O[256 + (C >>> 7)];
        }
        function se(C, $) {
          C.pending_buf[C.pending++] = 255 & $, C.pending_buf[C.pending++] = $ >>> 8 & 255;
        }
        function X(C, $, W) {
          C.bi_valid > p - W ? (C.bi_buf |= $ << C.bi_valid & 65535, se(C, C.bi_buf), C.bi_buf = $ >> p - C.bi_valid, C.bi_valid += W - p) : (C.bi_buf |= $ << C.bi_valid & 65535, C.bi_valid += W);
        }
        function J(C, $, W) {
          X(C, W[2 * $], W[2 * $ + 1]);
        }
        function Ae(C, $) {
          for (var W = 0; W |= 1 & C, C >>>= 1, W <<= 1, 0 < --$; ) ;
          return W >>> 1;
        }
        function Fe(C, $, W) {
          var q, U, K = new Array(v + 1), ee = 0;
          for (q = 1; q <= v; q++) K[q] = ee = ee + W[q - 1] << 1;
          for (U = 0; U <= $; U++) {
            var G = C[2 * U + 1];
            G !== 0 && (C[2 * U] = Ae(K[G]++, G));
          }
        }
        function fe(C) {
          var $;
          for ($ = 0; $ < f; $++) C.dyn_ltree[2 * $] = 0;
          for ($ = 0; $ < h; $++) C.dyn_dtree[2 * $] = 0;
          for ($ = 0; $ < g; $++) C.bl_tree[2 * $] = 0;
          C.dyn_ltree[2 * w] = 1, C.opt_len = C.static_len = 0, C.last_lit = C.matches = 0;
        }
        function me(C) {
          8 < C.bi_valid ? se(C, C.bi_buf) : 0 < C.bi_valid && (C.pending_buf[C.pending++] = C.bi_buf), C.bi_buf = 0, C.bi_valid = 0;
        }
        function Ne(C, $, W, q) {
          var U = 2 * $, K = 2 * W;
          return C[U] < C[K] || C[U] === C[K] && q[$] <= q[W];
        }
        function Te(C, $, W) {
          for (var q = C.heap[W], U = W << 1; U <= C.heap_len && (U < C.heap_len && Ne($, C.heap[U + 1], C.heap[U], C.depth) && U++, !Ne($, q, C.heap[U], C.depth)); ) C.heap[W] = C.heap[U], W = U, U <<= 1;
          C.heap[W] = q;
        }
        function lt(C, $, W) {
          var q, U, K, ee, G = 0;
          if (C.last_lit !== 0) for (; q = C.pending_buf[C.d_buf + 2 * G] << 8 | C.pending_buf[C.d_buf + 2 * G + 1], U = C.pending_buf[C.l_buf + G], G++, q === 0 ? J(C, U, $) : (J(C, (K = b[U]) + d + 1, $), (ee = x[K]) !== 0 && X(C, U -= z[K], ee), J(C, K = F(--q), W), (ee = R[K]) !== 0 && X(C, q -= B[K], ee)), G < C.last_lit; ) ;
          J(C, w, $);
        }
        function rt(C, $) {
          var W, q, U, K = $.dyn_tree, ee = $.stat_desc.static_tree, G = $.stat_desc.has_stree, ae = $.stat_desc.elems, _e = -1;
          for (C.heap_len = 0, C.heap_max = m, W = 0; W < ae; W++) K[2 * W] !== 0 ? (C.heap[++C.heap_len] = _e = W, C.depth[W] = 0) : K[2 * W + 1] = 0;
          for (; C.heap_len < 2; ) K[2 * (U = C.heap[++C.heap_len] = _e < 2 ? ++_e : 0)] = 1, C.depth[U] = 0, C.opt_len--, G && (C.static_len -= ee[2 * U + 1]);
          for ($.max_code = _e, W = C.heap_len >> 1; 1 <= W; W--) Te(C, K, W);
          for (U = ae; W = C.heap[1], C.heap[1] = C.heap[C.heap_len--], Te(C, K, 1), q = C.heap[1], C.heap[--C.heap_max] = W, C.heap[--C.heap_max] = q, K[2 * U] = K[2 * W] + K[2 * q], C.depth[U] = (C.depth[W] >= C.depth[q] ? C.depth[W] : C.depth[q]) + 1, K[2 * W + 1] = K[2 * q + 1] = U, C.heap[1] = U++, Te(C, K, 1), 2 <= C.heap_len; ) ;
          C.heap[--C.heap_max] = C.heap[1], (function(pe, Je) {
            var Ur, ct, Fr, Oe, En, Ai, _t = Je.dyn_tree, ka = Je.max_code, gh = Je.stat_desc.static_tree, mh = Je.stat_desc.has_stree, _h = Je.stat_desc.extra_bits, Ea = Je.stat_desc.extra_base, Lr = Je.stat_desc.max_length, xn = 0;
            for (Oe = 0; Oe <= v; Oe++) pe.bl_count[Oe] = 0;
            for (_t[2 * pe.heap[pe.heap_max] + 1] = 0, Ur = pe.heap_max + 1; Ur < m; Ur++) Lr < (Oe = _t[2 * _t[2 * (ct = pe.heap[Ur]) + 1] + 1] + 1) && (Oe = Lr, xn++), _t[2 * ct + 1] = Oe, ka < ct || (pe.bl_count[Oe]++, En = 0, Ea <= ct && (En = _h[ct - Ea]), Ai = _t[2 * ct], pe.opt_len += Ai * (Oe + En), mh && (pe.static_len += Ai * (gh[2 * ct + 1] + En)));
            if (xn !== 0) {
              do {
                for (Oe = Lr - 1; pe.bl_count[Oe] === 0; ) Oe--;
                pe.bl_count[Oe]--, pe.bl_count[Oe + 1] += 2, pe.bl_count[Lr]--, xn -= 2;
              } while (0 < xn);
              for (Oe = Lr; Oe !== 0; Oe--) for (ct = pe.bl_count[Oe]; ct !== 0; ) ka < (Fr = pe.heap[--Ur]) || (_t[2 * Fr + 1] !== Oe && (pe.opt_len += (Oe - _t[2 * Fr + 1]) * _t[2 * Fr], _t[2 * Fr + 1] = Oe), ct--);
            }
          })(C, $), Fe(K, _e, C.bl_count);
        }
        function y(C, $, W) {
          var q, U, K = -1, ee = $[1], G = 0, ae = 7, _e = 4;
          for (ee === 0 && (ae = 138, _e = 3), $[2 * (W + 1) + 1] = 65535, q = 0; q <= W; q++) U = ee, ee = $[2 * (q + 1) + 1], ++G < ae && U === ee || (G < _e ? C.bl_tree[2 * U] += G : U !== 0 ? (U !== K && C.bl_tree[2 * U]++, C.bl_tree[2 * A]++) : G <= 10 ? C.bl_tree[2 * k]++ : C.bl_tree[2 * E]++, K = U, _e = (G = 0) === ee ? (ae = 138, 3) : U === ee ? (ae = 6, 3) : (ae = 7, 4));
        }
        function M(C, $, W) {
          var q, U, K = -1, ee = $[1], G = 0, ae = 7, _e = 4;
          for (ee === 0 && (ae = 138, _e = 3), q = 0; q <= W; q++) if (U = ee, ee = $[2 * (q + 1) + 1], !(++G < ae && U === ee)) {
            if (G < _e) for (; J(C, U, C.bl_tree), --G != 0; ) ;
            else U !== 0 ? (U !== K && (J(C, U, C.bl_tree), G--), J(C, A, C.bl_tree), X(C, G - 3, 2)) : G <= 10 ? (J(C, k, C.bl_tree), X(C, G - 3, 3)) : (J(C, E, C.bl_tree), X(C, G - 11, 7));
            K = U, _e = (G = 0) === ee ? (ae = 138, 3) : U === ee ? (ae = 6, 3) : (ae = 7, 4);
          }
        }
        l(B);
        var D = !1;
        function N(C, $, W, q) {
          X(C, (c << 1) + (q ? 1 : 0), 3), (function(U, K, ee, G) {
            me(U), se(U, ee), se(U, ~ee), s.arraySet(U.pending_buf, U.window, K, ee, U.pending), U.pending += ee;
          })(C, $, W);
        }
        i._tr_init = function(C) {
          D || ((function() {
            var $, W, q, U, K, ee = new Array(v + 1);
            for (U = q = 0; U < u - 1; U++) for (z[U] = q, $ = 0; $ < 1 << x[U]; $++) b[q++] = U;
            for (b[q - 1] = U, U = K = 0; U < 16; U++) for (B[U] = K, $ = 0; $ < 1 << R[U]; $++) O[K++] = U;
            for (K >>= 7; U < h; U++) for (B[U] = K << 7, $ = 0; $ < 1 << R[U] - 7; $++) O[256 + K++] = U;
            for (W = 0; W <= v; W++) ee[W] = 0;
            for ($ = 0; $ <= 143; ) P[2 * $ + 1] = 8, $++, ee[8]++;
            for (; $ <= 255; ) P[2 * $ + 1] = 9, $++, ee[9]++;
            for (; $ <= 279; ) P[2 * $ + 1] = 7, $++, ee[7]++;
            for (; $ <= 287; ) P[2 * $ + 1] = 8, $++, ee[8]++;
            for (Fe(P, f + 1, ee), $ = 0; $ < h; $++) T[2 * $ + 1] = 5, T[2 * $] = Ae($, 5);
            Q = new re(P, x, d + 1, f, v), V = new re(T, R, 0, h, v), oe = new re(new Array(0), S, 0, g, _);
          })(), D = !0), C.l_desc = new L(C.dyn_ltree, Q), C.d_desc = new L(C.dyn_dtree, V), C.bl_desc = new L(C.bl_tree, oe), C.bi_buf = 0, C.bi_valid = 0, fe(C);
        }, i._tr_stored_block = N, i._tr_flush_block = function(C, $, W, q) {
          var U, K, ee = 0;
          0 < C.level ? (C.strm.data_type === 2 && (C.strm.data_type = (function(G) {
            var ae, _e = 4093624447;
            for (ae = 0; ae <= 31; ae++, _e >>>= 1) if (1 & _e && G.dyn_ltree[2 * ae] !== 0) return a;
            if (G.dyn_ltree[18] !== 0 || G.dyn_ltree[20] !== 0 || G.dyn_ltree[26] !== 0) return o;
            for (ae = 32; ae < d; ae++) if (G.dyn_ltree[2 * ae] !== 0) return o;
            return a;
          })(C)), rt(C, C.l_desc), rt(C, C.d_desc), ee = (function(G) {
            var ae;
            for (y(G, G.dyn_ltree, G.l_desc.max_code), y(G, G.dyn_dtree, G.d_desc.max_code), rt(G, G.bl_desc), ae = g - 1; 3 <= ae && G.bl_tree[2 * I[ae] + 1] === 0; ae--) ;
            return G.opt_len += 3 * (ae + 1) + 5 + 5 + 4, ae;
          })(C), U = C.opt_len + 3 + 7 >>> 3, (K = C.static_len + 3 + 7 >>> 3) <= U && (U = K)) : U = K = W + 5, W + 4 <= U && $ !== -1 ? N(C, $, W, q) : C.strategy === 4 || K === U ? (X(C, 2 + (q ? 1 : 0), 3), lt(C, P, T)) : (X(C, 4 + (q ? 1 : 0), 3), (function(G, ae, _e, pe) {
            var Je;
            for (X(G, ae - 257, 5), X(G, _e - 1, 5), X(G, pe - 4, 4), Je = 0; Je < pe; Je++) X(G, G.bl_tree[2 * I[Je] + 1], 3);
            M(G, G.dyn_ltree, ae - 1), M(G, G.dyn_dtree, _e - 1);
          })(C, C.l_desc.max_code + 1, C.d_desc.max_code + 1, ee + 1), lt(C, C.dyn_ltree, C.dyn_dtree)), fe(C), q && me(C);
        }, i._tr_tally = function(C, $, W) {
          return C.pending_buf[C.d_buf + 2 * C.last_lit] = $ >>> 8 & 255, C.pending_buf[C.d_buf + 2 * C.last_lit + 1] = 255 & $, C.pending_buf[C.l_buf + C.last_lit] = 255 & W, C.last_lit++, $ === 0 ? C.dyn_ltree[2 * W]++ : (C.matches++, $--, C.dyn_ltree[2 * (b[W] + d + 1)]++, C.dyn_dtree[2 * F($)]++), C.last_lit === C.lit_bufsize - 1;
        }, i._tr_align = function(C) {
          X(C, 2, 3), J(C, w, P), (function($) {
            $.bi_valid === 16 ? (se($, $.bi_buf), $.bi_buf = 0, $.bi_valid = 0) : 8 <= $.bi_valid && ($.pending_buf[$.pending++] = 255 & $.bi_buf, $.bi_buf >>= 8, $.bi_valid -= 8);
          })(C);
        };
      }, { "../utils/common": 41 }], 53: [function(r, n, i) {
        n.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(r, n, i) {
        (function(s) {
          (function(a, o) {
            if (!a.setImmediate) {
              var l, c, u, d, f = 1, h = {}, g = !1, m = a.document, v = Object.getPrototypeOf && Object.getPrototypeOf(a);
              v = v && v.setTimeout ? v : a, l = {}.toString.call(a.process) === "[object process]" ? function(A) {
                process.nextTick(function() {
                  _(A);
                });
              } : (function() {
                if (a.postMessage && !a.importScripts) {
                  var A = !0, k = a.onmessage;
                  return a.onmessage = function() {
                    A = !1;
                  }, a.postMessage("", "*"), a.onmessage = k, A;
                }
              })() ? (d = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", w, !1) : a.attachEvent("onmessage", w), function(A) {
                a.postMessage(d + A, "*");
              }) : a.MessageChannel ? ((u = new MessageChannel()).port1.onmessage = function(A) {
                _(A.data);
              }, function(A) {
                u.port2.postMessage(A);
              }) : m && "onreadystatechange" in m.createElement("script") ? (c = m.documentElement, function(A) {
                var k = m.createElement("script");
                k.onreadystatechange = function() {
                  _(A), k.onreadystatechange = null, c.removeChild(k), k = null;
                }, c.appendChild(k);
              }) : function(A) {
                setTimeout(_, 0, A);
              }, v.setImmediate = function(A) {
                typeof A != "function" && (A = new Function("" + A));
                for (var k = new Array(arguments.length - 1), E = 0; E < k.length; E++) k[E] = arguments[E + 1];
                var x = { callback: A, args: k };
                return h[f] = x, l(f), f++;
              }, v.clearImmediate = p;
            }
            function p(A) {
              delete h[A];
            }
            function _(A) {
              if (g) setTimeout(_, 0, A);
              else {
                var k = h[A];
                if (k) {
                  g = !0;
                  try {
                    (function(E) {
                      var x = E.callback, R = E.args;
                      switch (R.length) {
                        case 0:
                          x();
                          break;
                        case 1:
                          x(R[0]);
                          break;
                        case 2:
                          x(R[0], R[1]);
                          break;
                        case 3:
                          x(R[0], R[1], R[2]);
                          break;
                        default:
                          x.apply(o, R);
                      }
                    })(k);
                  } finally {
                    p(A), g = !1;
                  }
                }
              }
            }
            function w(A) {
              A.source === a && typeof A.data == "string" && A.data.indexOf(d) === 0 && _(+A.data.slice(d.length));
            }
          })(typeof self > "u" ? s === void 0 ? this : s : self);
        }).call(this, typeof Vr < "u" ? Vr : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}] }, {}, [10])(10);
    });
  })(Fi)), Fi.exports;
}
var Ag = Sg();
const Tg = /* @__PURE__ */ uc(Ag), Og = 9783072e5, br = "bplist00", Rg = "// !$*UTF8*$!";
var Et;
(function(e) {
  e[e.BINARY = 0] = "BINARY", e[e.XML = 1] = "XML", e[e.OPENSTEP = 2] = "OPENSTEP";
})(Et || (Et = {}));
const Ye = 100 * 1e3 * 1e3, Ig = 32768, io = new TextDecoder("utf-8"), Cg = new TextDecoder("utf-16");
function so(e, t = 0) {
  return new DataView(e).getFloat64(t, !1);
}
function Ng(e, t = 0) {
  return new DataView(e).getFloat32(t, !1);
}
function Wt(e, t = 0) {
  return new DataView(e).getUint8(t);
}
function Pg(e, t = 0) {
  return new DataView(e).getUint16(t, !1);
}
function $g(e, t = 0) {
  return new DataView(e).getUint32(t, !1);
}
function yr(e, t = 0) {
  return new DataView(e).getBigUint64(t, !1);
}
function vt(e) {
  switch (e.byteLength) {
    case 1:
      return Wt(e);
    case 2:
      return Pg(e);
    case 4:
      return $g(e);
    case 8:
      return yr(e);
    case 16:
      return yr(e, 8);
  }
  throw new Error(`Invalid unsigned int length: ${e.byteLength}`);
}
function Qc(e, t = 0) {
  return new DataView(e).getInt8(t);
}
function zg(e, t = 0) {
  return new DataView(e).getInt16(t, !1);
}
function jg(e, t = 0) {
  return new DataView(e).getInt32(t, !1);
}
function Ug(e, t = 0) {
  return new DataView(e).getBigInt64(t, !1);
}
function Fg(e) {
  switch (e.byteLength) {
    case 1:
      return Qc(e);
    case 2:
      return zg(e);
    case 4:
      return jg(e);
    case 8:
      return Ug(e);
    case 16:
      return yr(e, 8);
  }
  throw new Error(`Invalid int length: ${e.byteLength}`);
}
function Lg(e) {
  const t = new Uint8Array(e);
  for (let r = 0; r < t.length; r += 2) {
    const n = t[r];
    t[r] = t[r + 1], t[r + 1] = n;
  }
  return t.buffer;
}
const Bg = (e) => {
  const t = e.slice(0, br.length);
  if (io.decode(t) !== br)
    throw new Error(`Invalid binary plist. Expected '${br}' at offset 0.`);
  const r = e.slice(e.byteLength - 32, e.byteLength), n = Wt(r, 6), i = Wt(r, 7), s = Number(yr(r, 8)), a = Number(yr(r, 16)), o = Number(yr(r, 24));
  if (s > Ig)
    throw new Error("maxObjectCount exceeded");
  const l = [];
  for (let u = 0; u < s; u++) {
    const d = e.slice(o + u * n, o + (u + 1) * n);
    l[u] = Number(vt(d));
  }
  function c(u) {
    const d = l[u], f = Wt(e, d), h = (f & 240) >> 4, g = f & 15;
    switch (h) {
      case 0:
        return m();
      case 1:
        return v();
      case 8:
        return p();
      case 2:
        return _();
      case 3:
        return w();
      case 4:
        return A();
      case 5:
        return k();
      case 6:
        return k(!0);
      case 10:
        return E();
      case 13:
        return x();
      default:
        throw new Error("Unhandled type 0x" + h.toString(16));
    }
    function m() {
      switch (g) {
        case 0:
          return null;
        case 8:
          return !1;
        case 9:
          return !0;
        case 15:
          return null;
        default:
          throw new Error("Unhandled simple type 0x" + h.toString(16));
      }
    }
    function v() {
      const R = Math.pow(2, g);
      if (R < Ye) {
        const S = e.slice(d + 1, d + 1 + R);
        return Fg(S);
      }
      throw new Error("Too little heap space available! Wanted to read " + R + " bytes, but only " + Ye + " are available.");
    }
    function p() {
      const R = g + 1;
      if (R < Ye)
        return {
          CF$UID: vt(e.slice(d + 1, d + 1 + R))
        };
      throw new Error("Too little heap space available! Wanted to read " + R + " bytes, but only " + Ye + " are available.");
    }
    function _() {
      const R = Math.pow(2, g);
      if (R < Ye) {
        const S = e.slice(d + 1, d + 1 + R);
        if (R === 4)
          return Ng(S);
        if (R === 8)
          return so(S);
        throw new Error(`Invalid real length: ${R}`);
      } else
        throw new Error("Too little heap space available! Wanted to read " + R + " bytes, but only " + Ye + " are available.");
    }
    function w() {
      g != 3 && console.error("Unknown date type :" + g + ". Parsing anyway...");
      const R = e.slice(d + 1, d + 9);
      return new Date(Og + 1e3 * so(R));
    }
    function A() {
      let R = 1, S = g;
      if (g == 15) {
        const I = Qc(e, d + 1), P = (I & 240) / 16;
        P != 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + P);
        const T = I & 15, O = Math.pow(2, T);
        R = 2 + O, S = Number(vt(e.slice(d + 2, d + 2 + O)));
      }
      if (S < Ye)
        return e.slice(d + R, d + R + Number(S));
      throw new Error("Too little heap space available! Wanted to read " + S + " bytes, but only " + Ye + " are available.");
    }
    function k(R = !1) {
      let S = g, I = 1;
      if (g == 15) {
        const P = Wt(e, d + 1), T = (P & 240) / 16;
        T != 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + T);
        const O = P & 15, b = Math.pow(2, O);
        I = 2 + b, S = Number(vt(e.slice(d + 2, d + 2 + b)));
      }
      if (S *= R ? 2 : 1, S < Ye) {
        let P = e.slice(d + I, d + I + S);
        return R ? (P = Lg(P), Cg.decode(P)) : io.decode(P);
      }
      throw new Error("Too little heap space available! Wanted to read " + S + " bytes, but only " + Ye + " are available.");
    }
    function E() {
      let R = g, S = 1;
      if (g == 15) {
        const P = Wt(e, d + 1), T = (P & 240) / 16;
        T != 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + T);
        const O = P & 15, b = Math.pow(2, O);
        S = 2 + b, R = Number(vt(e.slice(d + 2, d + 2 + b)));
      }
      if (R * i > Ye)
        throw new Error("Too little heap space available!");
      const I = [];
      for (let P = 0; P < R; P++) {
        const T = Number(vt(e.slice(d + S + P * i, d + S + (P + 1) * i)));
        I[P] = c(T);
      }
      return I;
    }
    function x() {
      let R = g, S = 1;
      if (g == 15) {
        const P = Wt(e, d + 1), T = (P & 240) / 16;
        T != 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + T);
        const O = P & 15, b = Math.pow(2, O);
        S = 2 + b, R = Number(vt(e.slice(d + 2, d + 2 + b)));
      }
      if (R * 2 * i > Ye)
        throw new Error("Too little heap space available!");
      const I = {};
      for (let P = 0; P < R; P++) {
        const T = Number(vt(e.slice(d + S + P * i, d + S + (P + 1) * i))), O = Number(vt(e.slice(d + S + R * i + P * i, d + S + R * i + (P + 1) * i))), b = c(T);
        if (typeof b != "string")
          throw new Error("Invalid key type.");
        if (b === "__proto__")
          throw new Error("Attempted prototype pollution");
        const z = c(O);
        I[b] = z;
      }
      return I;
    }
  }
  return c(a);
};
var Li = {}, Bi = {}, ao;
function oa() {
  return ao || (ao = 1, (function(e) {
    const t = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", r = t + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", n = "[" + t + "][" + r + "]*", i = new RegExp("^" + n + "$"), s = function(o, l) {
      const c = [];
      let u = l.exec(o);
      for (; u; ) {
        const d = [];
        d.startIndex = l.lastIndex - u[0].length;
        const f = u.length;
        for (let h = 0; h < f; h++)
          d.push(u[h]);
        c.push(d), u = l.exec(o);
      }
      return c;
    }, a = function(o) {
      const l = i.exec(o);
      return !(l === null || typeof l > "u");
    };
    e.isExist = function(o) {
      return typeof o < "u";
    }, e.isEmptyObject = function(o) {
      return Object.keys(o).length === 0;
    }, e.merge = function(o, l, c) {
      if (l) {
        const u = Object.keys(l), d = u.length;
        for (let f = 0; f < d; f++)
          c === "strict" ? o[u[f]] = [l[u[f]]] : o[u[f]] = l[u[f]];
      }
    }, e.getValue = function(o) {
      return e.isExist(o) ? o : "";
    }, e.isName = a, e.getAllMatches = s, e.nameRegexp = n;
  })(Bi)), Bi;
}
var oo;
function eu() {
  if (oo) return Li;
  oo = 1;
  const e = oa(), t = {
    allowBooleanAttributes: !1,
    //A tag can have attributes without any value
    unpairedTags: []
  };
  Li.validate = function(p, _) {
    _ = Object.assign({}, t, _);
    const w = [];
    let A = !1, k = !1;
    p[0] === "\uFEFF" && (p = p.substr(1));
    for (let E = 0; E < p.length; E++)
      if (p[E] === "<" && p[E + 1] === "?") {
        if (E += 2, E = n(p, E), E.err) return E;
      } else if (p[E] === "<") {
        let x = E;
        if (E++, p[E] === "!") {
          E = i(p, E);
          continue;
        } else {
          let R = !1;
          p[E] === "/" && (R = !0, E++);
          let S = "";
          for (; E < p.length && p[E] !== ">" && p[E] !== " " && p[E] !== "	" && p[E] !== `
` && p[E] !== "\r"; E++)
            S += p[E];
          if (S = S.trim(), S[S.length - 1] === "/" && (S = S.substring(0, S.length - 1), E--), !g(S)) {
            let T;
            return S.trim().length === 0 ? T = "Invalid space after '<'." : T = "Tag '" + S + "' is an invalid name.", f("InvalidTag", T, m(p, E));
          }
          const I = o(p, E);
          if (I === !1)
            return f("InvalidAttr", "Attributes for '" + S + "' have open quote.", m(p, E));
          let P = I.value;
          if (E = I.index, P[P.length - 1] === "/") {
            const T = E - P.length;
            P = P.substring(0, P.length - 1);
            const O = c(P, _);
            if (O === !0)
              A = !0;
            else
              return f(O.err.code, O.err.msg, m(p, T + O.err.line));
          } else if (R)
            if (I.tagClosed) {
              if (P.trim().length > 0)
                return f("InvalidTag", "Closing tag '" + S + "' can't have attributes or invalid starting.", m(p, x));
              if (w.length === 0)
                return f("InvalidTag", "Closing tag '" + S + "' has not been opened.", m(p, x));
              {
                const T = w.pop();
                if (S !== T.tagName) {
                  let O = m(p, T.tagStartPos);
                  return f(
                    "InvalidTag",
                    "Expected closing tag '" + T.tagName + "' (opened in line " + O.line + ", col " + O.col + ") instead of closing tag '" + S + "'.",
                    m(p, x)
                  );
                }
                w.length == 0 && (k = !0);
              }
            } else return f("InvalidTag", "Closing tag '" + S + "' doesn't have proper closing.", m(p, E));
          else {
            const T = c(P, _);
            if (T !== !0)
              return f(T.err.code, T.err.msg, m(p, E - P.length + T.err.line));
            if (k === !0)
              return f("InvalidXml", "Multiple possible root nodes found.", m(p, E));
            _.unpairedTags.indexOf(S) !== -1 || w.push({ tagName: S, tagStartPos: x }), A = !0;
          }
          for (E++; E < p.length; E++)
            if (p[E] === "<")
              if (p[E + 1] === "!") {
                E++, E = i(p, E);
                continue;
              } else if (p[E + 1] === "?") {
                if (E = n(p, ++E), E.err) return E;
              } else
                break;
            else if (p[E] === "&") {
              const T = d(p, E);
              if (T == -1)
                return f("InvalidChar", "char '&' is not expected.", m(p, E));
              E = T;
            } else if (k === !0 && !r(p[E]))
              return f("InvalidXml", "Extra text at the end", m(p, E));
          p[E] === "<" && E--;
        }
      } else {
        if (r(p[E]))
          continue;
        return f("InvalidChar", "char '" + p[E] + "' is not expected.", m(p, E));
      }
    if (A) {
      if (w.length == 1)
        return f("InvalidTag", "Unclosed tag '" + w[0].tagName + "'.", m(p, w[0].tagStartPos));
      if (w.length > 0)
        return f("InvalidXml", "Invalid '" + JSON.stringify(w.map((E) => E.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
    } else return f("InvalidXml", "Start tag expected.", 1);
    return !0;
  };
  function r(p) {
    return p === " " || p === "	" || p === `
` || p === "\r";
  }
  function n(p, _) {
    const w = _;
    for (; _ < p.length; _++)
      if (p[_] == "?" || p[_] == " ") {
        const A = p.substr(w, _ - w);
        if (_ > 5 && A === "xml")
          return f("InvalidXml", "XML declaration allowed only at the start of the document.", m(p, _));
        if (p[_] == "?" && p[_ + 1] == ">") {
          _++;
          break;
        } else
          continue;
      }
    return _;
  }
  function i(p, _) {
    if (p.length > _ + 5 && p[_ + 1] === "-" && p[_ + 2] === "-") {
      for (_ += 3; _ < p.length; _++)
        if (p[_] === "-" && p[_ + 1] === "-" && p[_ + 2] === ">") {
          _ += 2;
          break;
        }
    } else if (p.length > _ + 8 && p[_ + 1] === "D" && p[_ + 2] === "O" && p[_ + 3] === "C" && p[_ + 4] === "T" && p[_ + 5] === "Y" && p[_ + 6] === "P" && p[_ + 7] === "E") {
      let w = 1;
      for (_ += 8; _ < p.length; _++)
        if (p[_] === "<")
          w++;
        else if (p[_] === ">" && (w--, w === 0))
          break;
    } else if (p.length > _ + 9 && p[_ + 1] === "[" && p[_ + 2] === "C" && p[_ + 3] === "D" && p[_ + 4] === "A" && p[_ + 5] === "T" && p[_ + 6] === "A" && p[_ + 7] === "[") {
      for (_ += 8; _ < p.length; _++)
        if (p[_] === "]" && p[_ + 1] === "]" && p[_ + 2] === ">") {
          _ += 2;
          break;
        }
    }
    return _;
  }
  const s = '"', a = "'";
  function o(p, _) {
    let w = "", A = "", k = !1;
    for (; _ < p.length; _++) {
      if (p[_] === s || p[_] === a)
        A === "" ? A = p[_] : A !== p[_] || (A = "");
      else if (p[_] === ">" && A === "") {
        k = !0;
        break;
      }
      w += p[_];
    }
    return A !== "" ? !1 : {
      value: w,
      index: _,
      tagClosed: k
    };
  }
  const l = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function c(p, _) {
    const w = e.getAllMatches(p, l), A = {};
    for (let k = 0; k < w.length; k++) {
      if (w[k][1].length === 0)
        return f("InvalidAttr", "Attribute '" + w[k][2] + "' has no space in starting.", v(w[k]));
      if (w[k][3] !== void 0 && w[k][4] === void 0)
        return f("InvalidAttr", "Attribute '" + w[k][2] + "' is without value.", v(w[k]));
      if (w[k][3] === void 0 && !_.allowBooleanAttributes)
        return f("InvalidAttr", "boolean attribute '" + w[k][2] + "' is not allowed.", v(w[k]));
      const E = w[k][2];
      if (!h(E))
        return f("InvalidAttr", "Attribute '" + E + "' is an invalid name.", v(w[k]));
      if (!A.hasOwnProperty(E))
        A[E] = 1;
      else
        return f("InvalidAttr", "Attribute '" + E + "' is repeated.", v(w[k]));
    }
    return !0;
  }
  function u(p, _) {
    let w = /\d/;
    for (p[_] === "x" && (_++, w = /[\da-fA-F]/); _ < p.length; _++) {
      if (p[_] === ";")
        return _;
      if (!p[_].match(w))
        break;
    }
    return -1;
  }
  function d(p, _) {
    if (_++, p[_] === ";")
      return -1;
    if (p[_] === "#")
      return _++, u(p, _);
    let w = 0;
    for (; _ < p.length; _++, w++)
      if (!(p[_].match(/\w/) && w < 20)) {
        if (p[_] === ";")
          break;
        return -1;
      }
    return _;
  }
  function f(p, _, w) {
    return {
      err: {
        code: p,
        msg: _,
        line: w.line || w,
        col: w.col
      }
    };
  }
  function h(p) {
    return e.isName(p);
  }
  function g(p) {
    return e.isName(p);
  }
  function m(p, _) {
    const w = p.substring(0, _).split(/\r?\n/);
    return {
      line: w.length,
      // column number is last line's length + 1, because column numbering starts at 1:
      col: w[w.length - 1].length + 1
    };
  }
  function v(p) {
    return p.startIndex + p[1].length;
  }
  return Li;
}
var Un = {}, lo;
function Dg() {
  if (lo) return Un;
  lo = 1;
  const e = {
    preserveOrder: !1,
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    removeNSPrefix: !1,
    // remove NS from tag name or attribute name if true
    allowBooleanAttributes: !1,
    //a tag can have attributes without any value
    //ignoreRootElement : false,
    parseTagValue: !0,
    parseAttributeValue: !1,
    trimValues: !0,
    //Trim string values of tag and attributes
    cdataPropName: !1,
    numberParseOptions: {
      hex: !0,
      leadingZeros: !0,
      eNotation: !0
    },
    tagValueProcessor: function(r, n) {
      return n;
    },
    attributeValueProcessor: function(r, n) {
      return n;
    },
    stopNodes: [],
    //nested tags will not be parsed even for errors
    alwaysCreateTextNode: !1,
    isArray: () => !1,
    commentPropName: !1,
    unpairedTags: [],
    processEntities: !0,
    htmlEntities: !1,
    ignoreDeclaration: !1,
    ignorePiTags: !1,
    transformTagName: !1,
    transformAttributeName: !1,
    updateTag: function(r, n, i) {
      return r;
    }
    // skipEmptyListItem: false
  }, t = function(r) {
    return Object.assign({}, e, r);
  };
  return Un.buildOptions = t, Un.defaultOptions = e, Un;
}
var Di, co;
function Zg() {
  if (co) return Di;
  co = 1;
  class e {
    constructor(r) {
      this.tagname = r, this.child = [], this[":@"] = {};
    }
    add(r, n) {
      r === "__proto__" && (r = "#__proto__"), this.child.push({ [r]: n });
    }
    addChild(r) {
      r.tagname === "__proto__" && (r.tagname = "#__proto__"), r[":@"] && Object.keys(r[":@"]).length > 0 ? this.child.push({ [r.tagname]: r.child, ":@": r[":@"] }) : this.child.push({ [r.tagname]: r.child });
    }
  }
  return Di = e, Di;
}
var Zi, uo;
function Mg() {
  if (uo) return Zi;
  uo = 1;
  const e = oa();
  function t(c, u) {
    const d = {};
    if (c[u + 3] === "O" && c[u + 4] === "C" && c[u + 5] === "T" && c[u + 6] === "Y" && c[u + 7] === "P" && c[u + 8] === "E") {
      u = u + 9;
      let f = 1, h = !1, g = !1, m = "";
      for (; u < c.length; u++)
        if (c[u] === "<" && !g) {
          if (h && i(c, u)) {
            u += 7;
            let v, p;
            [v, p, u] = r(c, u + 1), p.indexOf("&") === -1 && (d[l(v)] = {
              regx: RegExp(`&${v};`, "g"),
              val: p
            });
          } else if (h && s(c, u)) u += 8;
          else if (h && a(c, u)) u += 8;
          else if (h && o(c, u)) u += 9;
          else if (n) g = !0;
          else throw new Error("Invalid DOCTYPE");
          f++, m = "";
        } else if (c[u] === ">") {
          if (g ? c[u - 1] === "-" && c[u - 2] === "-" && (g = !1, f--) : f--, f === 0)
            break;
        } else c[u] === "[" ? h = !0 : m += c[u];
      if (f !== 0)
        throw new Error("Unclosed DOCTYPE");
    } else
      throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: d, i: u };
  }
  function r(c, u) {
    let d = "";
    for (; u < c.length && c[u] !== "'" && c[u] !== '"'; u++)
      d += c[u];
    if (d = d.trim(), d.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    const f = c[u++];
    let h = "";
    for (; u < c.length && c[u] !== f; u++)
      h += c[u];
    return [d, h, u];
  }
  function n(c, u) {
    return c[u + 1] === "!" && c[u + 2] === "-" && c[u + 3] === "-";
  }
  function i(c, u) {
    return c[u + 1] === "!" && c[u + 2] === "E" && c[u + 3] === "N" && c[u + 4] === "T" && c[u + 5] === "I" && c[u + 6] === "T" && c[u + 7] === "Y";
  }
  function s(c, u) {
    return c[u + 1] === "!" && c[u + 2] === "E" && c[u + 3] === "L" && c[u + 4] === "E" && c[u + 5] === "M" && c[u + 6] === "E" && c[u + 7] === "N" && c[u + 8] === "T";
  }
  function a(c, u) {
    return c[u + 1] === "!" && c[u + 2] === "A" && c[u + 3] === "T" && c[u + 4] === "T" && c[u + 5] === "L" && c[u + 6] === "I" && c[u + 7] === "S" && c[u + 8] === "T";
  }
  function o(c, u) {
    return c[u + 1] === "!" && c[u + 2] === "N" && c[u + 3] === "O" && c[u + 4] === "T" && c[u + 5] === "A" && c[u + 6] === "T" && c[u + 7] === "I" && c[u + 8] === "O" && c[u + 9] === "N";
  }
  function l(c) {
    if (e.isName(c))
      return c;
    throw new Error(`Invalid entity name ${c}`);
  }
  return Zi = t, Zi;
}
var Mi, ho;
function Vg() {
  if (ho) return Mi;
  ho = 1;
  const e = /^[-+]?0x[a-fA-F0-9]+$/, t = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, r = {
    hex: !0,
    // oct: false,
    leadingZeros: !0,
    decimalPoint: ".",
    eNotation: !0
    //skipLike: /regex/
  };
  function n(a, o = {}) {
    if (o = Object.assign({}, r, o), !a || typeof a != "string") return a;
    let l = a.trim();
    if (o.skipLike !== void 0 && o.skipLike.test(l)) return a;
    if (a === "0") return 0;
    if (o.hex && e.test(l))
      return s(l, 16);
    if (l.search(/[eE]/) !== -1) {
      const c = l.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
      if (c) {
        if (o.leadingZeros)
          l = (c[1] || "") + c[3];
        else if (!(c[2] === "0" && c[3][0] === ".")) return a;
        return o.eNotation ? Number(l) : a;
      } else
        return a;
    } else {
      const c = t.exec(l);
      if (c) {
        const u = c[1], d = c[2];
        let f = i(c[3]);
        if (!o.leadingZeros && d.length > 0 && u && l[2] !== ".") return a;
        if (!o.leadingZeros && d.length > 0 && !u && l[1] !== ".") return a;
        if (o.leadingZeros && d === a) return 0;
        {
          const h = Number(l), g = "" + h;
          return g.search(/[eE]/) !== -1 ? o.eNotation ? h : a : l.indexOf(".") !== -1 ? g === "0" && f === "" || g === f || u && g === "-" + f ? h : a : d ? f === g || u + f === g ? h : a : l === g || l === u + g ? h : a;
        }
      } else
        return a;
    }
  }
  function i(a) {
    return a && a.indexOf(".") !== -1 && (a = a.replace(/0+$/, ""), a === "." ? a = "0" : a[0] === "." ? a = "0" + a : a[a.length - 1] === "." && (a = a.substr(0, a.length - 1))), a;
  }
  function s(a, o) {
    if (parseInt) return parseInt(a, o);
    if (Number.parseInt) return Number.parseInt(a, o);
    if (window && window.parseInt) return window.parseInt(a, o);
    throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
  }
  return Mi = n, Mi;
}
var Vi, fo;
function tu() {
  if (fo) return Vi;
  fo = 1;
  function e(t) {
    return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
      for (const n of t)
        if (typeof n == "string" && r === n || n instanceof RegExp && n.test(r))
          return !0;
    } : () => !1;
  }
  return Vi = e, Vi;
}
var Wi, po;
function Wg() {
  if (po) return Wi;
  po = 1;
  const e = oa(), t = Zg(), r = Mg(), n = Vg(), i = tu();
  class s {
    constructor(E) {
      this.options = E, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
        apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
        gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
        lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
        quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
      }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
        space: { regex: /&(nbsp|#160);/g, val: " " },
        // "lt" : { regex: /&(lt|#60);/g, val: "<" },
        // "gt" : { regex: /&(gt|#62);/g, val: ">" },
        // "amp" : { regex: /&(amp|#38);/g, val: "&" },
        // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
        // "apos" : { regex: /&(apos|#39);/g, val: "'" },
        cent: { regex: /&(cent|#162);/g, val: "¢" },
        pound: { regex: /&(pound|#163);/g, val: "£" },
        yen: { regex: /&(yen|#165);/g, val: "¥" },
        euro: { regex: /&(euro|#8364);/g, val: "€" },
        copyright: { regex: /&(copy|#169);/g, val: "©" },
        reg: { regex: /&(reg|#174);/g, val: "®" },
        inr: { regex: /&(inr|#8377);/g, val: "₹" },
        num_dec: { regex: /&#([0-9]{1,7});/g, val: (x, R) => String.fromCharCode(Number.parseInt(R, 10)) },
        num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (x, R) => String.fromCharCode(Number.parseInt(R, 16)) }
      }, this.addExternalEntities = a, this.parseXml = d, this.parseTextData = o, this.resolveNameSpace = l, this.buildAttributesMap = u, this.isItStopNode = m, this.replaceEntitiesValue = h, this.readStopNodeData = w, this.saveTextToParentTag = g, this.addChild = f, this.ignoreAttributesFn = i(this.options.ignoreAttributes);
    }
  }
  function a(k) {
    const E = Object.keys(k);
    for (let x = 0; x < E.length; x++) {
      const R = E[x];
      this.lastEntities[R] = {
        regex: new RegExp("&" + R + ";", "g"),
        val: k[R]
      };
    }
  }
  function o(k, E, x, R, S, I, P) {
    if (k !== void 0 && (this.options.trimValues && !R && (k = k.trim()), k.length > 0)) {
      P || (k = this.replaceEntitiesValue(k));
      const T = this.options.tagValueProcessor(E, k, x, S, I);
      return T == null ? k : typeof T != typeof k || T !== k ? T : this.options.trimValues ? A(k, this.options.parseTagValue, this.options.numberParseOptions) : k.trim() === k ? A(k, this.options.parseTagValue, this.options.numberParseOptions) : k;
    }
  }
  function l(k) {
    if (this.options.removeNSPrefix) {
      const E = k.split(":"), x = k.charAt(0) === "/" ? "/" : "";
      if (E[0] === "xmlns")
        return "";
      E.length === 2 && (k = x + E[1]);
    }
    return k;
  }
  const c = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function u(k, E, x) {
    if (this.options.ignoreAttributes !== !0 && typeof k == "string") {
      const R = e.getAllMatches(k, c), S = R.length, I = {};
      for (let P = 0; P < S; P++) {
        const T = this.resolveNameSpace(R[P][1]);
        if (this.ignoreAttributesFn(T, E))
          continue;
        let O = R[P][4], b = this.options.attributeNamePrefix + T;
        if (T.length)
          if (this.options.transformAttributeName && (b = this.options.transformAttributeName(b)), b === "__proto__" && (b = "#__proto__"), O !== void 0) {
            this.options.trimValues && (O = O.trim()), O = this.replaceEntitiesValue(O);
            const z = this.options.attributeValueProcessor(T, O, E);
            z == null ? I[b] = O : typeof z != typeof O || z !== O ? I[b] = z : I[b] = A(
              O,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          } else this.options.allowBooleanAttributes && (I[b] = !0);
      }
      if (!Object.keys(I).length)
        return;
      if (this.options.attributesGroupName) {
        const P = {};
        return P[this.options.attributesGroupName] = I, P;
      }
      return I;
    }
  }
  const d = function(k) {
    k = k.replace(/\r\n?/g, `
`);
    const E = new t("!xml");
    let x = E, R = "", S = "";
    for (let I = 0; I < k.length; I++)
      if (k[I] === "<")
        if (k[I + 1] === "/") {
          const T = p(k, ">", I, "Closing Tag is not closed.");
          let O = k.substring(I + 2, T).trim();
          if (this.options.removeNSPrefix) {
            const Q = O.indexOf(":");
            Q !== -1 && (O = O.substr(Q + 1));
          }
          this.options.transformTagName && (O = this.options.transformTagName(O)), x && (R = this.saveTextToParentTag(R, x, S));
          const b = S.substring(S.lastIndexOf(".") + 1);
          if (O && this.options.unpairedTags.indexOf(O) !== -1)
            throw new Error(`Unpaired tag can not be used as closing tag: </${O}>`);
          let z = 0;
          b && this.options.unpairedTags.indexOf(b) !== -1 ? (z = S.lastIndexOf(".", S.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : z = S.lastIndexOf("."), S = S.substring(0, z), x = this.tagsNodeStack.pop(), R = "", I = T;
        } else if (k[I + 1] === "?") {
          let T = _(k, I, !1, "?>");
          if (!T) throw new Error("Pi Tag is not closed.");
          if (R = this.saveTextToParentTag(R, x, S), !(this.options.ignoreDeclaration && T.tagName === "?xml" || this.options.ignorePiTags)) {
            const O = new t(T.tagName);
            O.add(this.options.textNodeName, ""), T.tagName !== T.tagExp && T.attrExpPresent && (O[":@"] = this.buildAttributesMap(T.tagExp, S, T.tagName)), this.addChild(x, O, S);
          }
          I = T.closeIndex + 1;
        } else if (k.substr(I + 1, 3) === "!--") {
          const T = p(k, "-->", I + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const O = k.substring(I + 4, T - 2);
            R = this.saveTextToParentTag(R, x, S), x.add(this.options.commentPropName, [{ [this.options.textNodeName]: O }]);
          }
          I = T;
        } else if (k.substr(I + 1, 2) === "!D") {
          const T = r(k, I);
          this.docTypeEntities = T.entities, I = T.i;
        } else if (k.substr(I + 1, 2) === "![") {
          const T = p(k, "]]>", I, "CDATA is not closed.") - 2, O = k.substring(I + 9, T);
          R = this.saveTextToParentTag(R, x, S);
          let b = this.parseTextData(O, x.tagname, S, !0, !1, !0, !0);
          b == null && (b = ""), this.options.cdataPropName ? x.add(this.options.cdataPropName, [{ [this.options.textNodeName]: O }]) : x.add(this.options.textNodeName, b), I = T + 2;
        } else {
          let T = _(k, I, this.options.removeNSPrefix), O = T.tagName;
          const b = T.rawTagName;
          let z = T.tagExp, Q = T.attrExpPresent, V = T.closeIndex;
          this.options.transformTagName && (O = this.options.transformTagName(O)), x && R && x.tagname !== "!xml" && (R = this.saveTextToParentTag(R, x, S, !1));
          const oe = x;
          if (oe && this.options.unpairedTags.indexOf(oe.tagname) !== -1 && (x = this.tagsNodeStack.pop(), S = S.substring(0, S.lastIndexOf("."))), O !== E.tagname && (S += S ? "." + O : O), this.isItStopNode(this.options.stopNodes, S, O)) {
            let B = "";
            if (z.length > 0 && z.lastIndexOf("/") === z.length - 1)
              O[O.length - 1] === "/" ? (O = O.substr(0, O.length - 1), S = S.substr(0, S.length - 1), z = O) : z = z.substr(0, z.length - 1), I = T.closeIndex;
            else if (this.options.unpairedTags.indexOf(O) !== -1)
              I = T.closeIndex;
            else {
              const L = this.readStopNodeData(k, b, V + 1);
              if (!L) throw new Error(`Unexpected end of ${b}`);
              I = L.i, B = L.tagContent;
            }
            const re = new t(O);
            O !== z && Q && (re[":@"] = this.buildAttributesMap(z, S, O)), B && (B = this.parseTextData(B, O, S, !0, Q, !0, !0)), S = S.substr(0, S.lastIndexOf(".")), re.add(this.options.textNodeName, B), this.addChild(x, re, S);
          } else {
            if (z.length > 0 && z.lastIndexOf("/") === z.length - 1) {
              O[O.length - 1] === "/" ? (O = O.substr(0, O.length - 1), S = S.substr(0, S.length - 1), z = O) : z = z.substr(0, z.length - 1), this.options.transformTagName && (O = this.options.transformTagName(O));
              const B = new t(O);
              O !== z && Q && (B[":@"] = this.buildAttributesMap(z, S, O)), this.addChild(x, B, S), S = S.substr(0, S.lastIndexOf("."));
            } else {
              const B = new t(O);
              this.tagsNodeStack.push(x), O !== z && Q && (B[":@"] = this.buildAttributesMap(z, S, O)), this.addChild(x, B, S), x = B;
            }
            R = "", I = V;
          }
        }
      else
        R += k[I];
    return E.child;
  };
  function f(k, E, x) {
    const R = this.options.updateTag(E.tagname, x, E[":@"]);
    R === !1 || (typeof R == "string" && (E.tagname = R), k.addChild(E));
  }
  const h = function(k) {
    if (this.options.processEntities) {
      for (let E in this.docTypeEntities) {
        const x = this.docTypeEntities[E];
        k = k.replace(x.regx, x.val);
      }
      for (let E in this.lastEntities) {
        const x = this.lastEntities[E];
        k = k.replace(x.regex, x.val);
      }
      if (this.options.htmlEntities)
        for (let E in this.htmlEntities) {
          const x = this.htmlEntities[E];
          k = k.replace(x.regex, x.val);
        }
      k = k.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return k;
  };
  function g(k, E, x, R) {
    return k && (R === void 0 && (R = E.child.length === 0), k = this.parseTextData(
      k,
      E.tagname,
      x,
      !1,
      E[":@"] ? Object.keys(E[":@"]).length !== 0 : !1,
      R
    ), k !== void 0 && k !== "" && E.add(this.options.textNodeName, k), k = ""), k;
  }
  function m(k, E, x) {
    const R = "*." + x;
    for (const S in k) {
      const I = k[S];
      if (R === I || E === I) return !0;
    }
    return !1;
  }
  function v(k, E, x = ">") {
    let R, S = "";
    for (let I = E; I < k.length; I++) {
      let P = k[I];
      if (R)
        P === R && (R = "");
      else if (P === '"' || P === "'")
        R = P;
      else if (P === x[0])
        if (x[1]) {
          if (k[I + 1] === x[1])
            return {
              data: S,
              index: I
            };
        } else
          return {
            data: S,
            index: I
          };
      else P === "	" && (P = " ");
      S += P;
    }
  }
  function p(k, E, x, R) {
    const S = k.indexOf(E, x);
    if (S === -1)
      throw new Error(R);
    return S + E.length - 1;
  }
  function _(k, E, x, R = ">") {
    const S = v(k, E + 1, R);
    if (!S) return;
    let I = S.data;
    const P = S.index, T = I.search(/\s/);
    let O = I, b = !0;
    T !== -1 && (O = I.substring(0, T), I = I.substring(T + 1).trimStart());
    const z = O;
    if (x) {
      const Q = O.indexOf(":");
      Q !== -1 && (O = O.substr(Q + 1), b = O !== S.data.substr(Q + 1));
    }
    return {
      tagName: O,
      tagExp: I,
      closeIndex: P,
      attrExpPresent: b,
      rawTagName: z
    };
  }
  function w(k, E, x) {
    const R = x;
    let S = 1;
    for (; x < k.length; x++)
      if (k[x] === "<")
        if (k[x + 1] === "/") {
          const I = p(k, ">", x, `${E} is not closed`);
          if (k.substring(x + 2, I).trim() === E && (S--, S === 0))
            return {
              tagContent: k.substring(R, x),
              i: I
            };
          x = I;
        } else if (k[x + 1] === "?")
          x = p(k, "?>", x + 1, "StopNode is not closed.");
        else if (k.substr(x + 1, 3) === "!--")
          x = p(k, "-->", x + 3, "StopNode is not closed.");
        else if (k.substr(x + 1, 2) === "![")
          x = p(k, "]]>", x, "StopNode is not closed.") - 2;
        else {
          const I = _(k, x, ">");
          I && ((I && I.tagName) === E && I.tagExp[I.tagExp.length - 1] !== "/" && S++, x = I.closeIndex);
        }
  }
  function A(k, E, x) {
    if (E && typeof k == "string") {
      const R = k.trim();
      return R === "true" ? !0 : R === "false" ? !1 : n(k, x);
    } else
      return e.isExist(k) ? k : "";
  }
  return Wi = s, Wi;
}
var qi = {}, go;
function qg() {
  if (go) return qi;
  go = 1;
  function e(s, a) {
    return t(s, a);
  }
  function t(s, a, o) {
    let l;
    const c = {};
    for (let u = 0; u < s.length; u++) {
      const d = s[u], f = r(d);
      let h = "";
      if (o === void 0 ? h = f : h = o + "." + f, f === a.textNodeName)
        l === void 0 ? l = d[f] : l += "" + d[f];
      else {
        if (f === void 0)
          continue;
        if (d[f]) {
          let g = t(d[f], a, h);
          const m = i(g, a);
          d[":@"] ? n(g, d[":@"], h, a) : Object.keys(g).length === 1 && g[a.textNodeName] !== void 0 && !a.alwaysCreateTextNode ? g = g[a.textNodeName] : Object.keys(g).length === 0 && (a.alwaysCreateTextNode ? g[a.textNodeName] = "" : g = ""), c[f] !== void 0 && c.hasOwnProperty(f) ? (Array.isArray(c[f]) || (c[f] = [c[f]]), c[f].push(g)) : a.isArray(f, h, m) ? c[f] = [g] : c[f] = g;
        }
      }
    }
    return typeof l == "string" ? l.length > 0 && (c[a.textNodeName] = l) : l !== void 0 && (c[a.textNodeName] = l), c;
  }
  function r(s) {
    const a = Object.keys(s);
    for (let o = 0; o < a.length; o++) {
      const l = a[o];
      if (l !== ":@") return l;
    }
  }
  function n(s, a, o, l) {
    if (a) {
      const c = Object.keys(a), u = c.length;
      for (let d = 0; d < u; d++) {
        const f = c[d];
        l.isArray(f, o + "." + f, !0, !0) ? s[f] = [a[f]] : s[f] = a[f];
      }
    }
  }
  function i(s, a) {
    const { textNodeName: o } = a, l = Object.keys(s).length;
    return !!(l === 0 || l === 1 && (s[o] || typeof s[o] == "boolean" || s[o] === 0));
  }
  return qi.prettify = e, qi;
}
var Hi, mo;
function Hg() {
  if (mo) return Hi;
  mo = 1;
  const { buildOptions: e } = Dg(), t = Wg(), { prettify: r } = qg(), n = eu();
  class i {
    constructor(a) {
      this.externalEntities = {}, this.options = e(a);
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */
    parse(a, o) {
      if (typeof a != "string") if (a.toString)
        a = a.toString();
      else
        throw new Error("XML data is accepted in String or Bytes[] form.");
      if (o) {
        o === !0 && (o = {});
        const u = n.validate(a, o);
        if (u !== !0)
          throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
      }
      const l = new t(this.options);
      l.addExternalEntities(this.externalEntities);
      const c = l.parseXml(a);
      return this.options.preserveOrder || c === void 0 ? c : r(c, this.options);
    }
    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */
    addEntity(a, o) {
      if (o.indexOf("&") !== -1)
        throw new Error("Entity value can't have '&'");
      if (a.indexOf("&") !== -1 || a.indexOf(";") !== -1)
        throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (o === "&")
        throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[a] = o;
    }
  }
  return Hi = i, Hi;
}
var Ki, _o;
function Kg() {
  if (_o) return Ki;
  _o = 1;
  const e = `
`;
  function t(o, l) {
    let c = "";
    return l.format && l.indentBy.length > 0 && (c = e), r(o, l, "", c);
  }
  function r(o, l, c, u) {
    let d = "", f = !1;
    for (let h = 0; h < o.length; h++) {
      const g = o[h], m = n(g);
      if (m === void 0) continue;
      let v = "";
      if (c.length === 0 ? v = m : v = `${c}.${m}`, m === l.textNodeName) {
        let k = g[m];
        s(v, l) || (k = l.tagValueProcessor(m, k), k = a(k, l)), f && (d += u), d += k, f = !1;
        continue;
      } else if (m === l.cdataPropName) {
        f && (d += u), d += `<![CDATA[${g[m][0][l.textNodeName]}]]>`, f = !1;
        continue;
      } else if (m === l.commentPropName) {
        d += u + `<!--${g[m][0][l.textNodeName]}-->`, f = !0;
        continue;
      } else if (m[0] === "?") {
        const k = i(g[":@"], l), E = m === "?xml" ? "" : u;
        let x = g[m][0][l.textNodeName];
        x = x.length !== 0 ? " " + x : "", d += E + `<${m}${x}${k}?>`, f = !0;
        continue;
      }
      let p = u;
      p !== "" && (p += l.indentBy);
      const _ = i(g[":@"], l), w = u + `<${m}${_}`, A = r(g[m], l, v, p);
      l.unpairedTags.indexOf(m) !== -1 ? l.suppressUnpairedNode ? d += w + ">" : d += w + "/>" : (!A || A.length === 0) && l.suppressEmptyNode ? d += w + "/>" : A && A.endsWith(">") ? d += w + `>${A}${u}</${m}>` : (d += w + ">", A && u !== "" && (A.includes("/>") || A.includes("</")) ? d += u + l.indentBy + A + u : d += A, d += `</${m}>`), f = !0;
    }
    return d;
  }
  function n(o) {
    const l = Object.keys(o);
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      if (o.hasOwnProperty(u) && u !== ":@")
        return u;
    }
  }
  function i(o, l) {
    let c = "";
    if (o && !l.ignoreAttributes)
      for (let u in o) {
        if (!o.hasOwnProperty(u)) continue;
        let d = l.attributeValueProcessor(u, o[u]);
        d = a(d, l), d === !0 && l.suppressBooleanAttributes ? c += ` ${u.substr(l.attributeNamePrefix.length)}` : c += ` ${u.substr(l.attributeNamePrefix.length)}="${d}"`;
      }
    return c;
  }
  function s(o, l) {
    o = o.substr(0, o.length - l.textNodeName.length - 1);
    let c = o.substr(o.lastIndexOf(".") + 1);
    for (let u in l.stopNodes)
      if (l.stopNodes[u] === o || l.stopNodes[u] === "*." + c) return !0;
    return !1;
  }
  function a(o, l) {
    if (o && o.length > 0 && l.processEntities)
      for (let c = 0; c < l.entities.length; c++) {
        const u = l.entities[c];
        o = o.replace(u.regex, u.val);
      }
    return o;
  }
  return Ki = t, Ki;
}
var Gi, vo;
function Gg() {
  if (vo) return Gi;
  vo = 1;
  const e = Kg(), t = tu(), r = {
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    cdataPropName: !1,
    format: !1,
    indentBy: "  ",
    suppressEmptyNode: !1,
    suppressUnpairedNode: !0,
    suppressBooleanAttributes: !0,
    tagValueProcessor: function(o, l) {
      return l;
    },
    attributeValueProcessor: function(o, l) {
      return l;
    },
    preserveOrder: !1,
    commentPropName: !1,
    unpairedTags: [],
    entities: [
      { regex: new RegExp("&", "g"), val: "&amp;" },
      //it must be on top
      { regex: new RegExp(">", "g"), val: "&gt;" },
      { regex: new RegExp("<", "g"), val: "&lt;" },
      { regex: new RegExp("'", "g"), val: "&apos;" },
      { regex: new RegExp('"', "g"), val: "&quot;" }
    ],
    processEntities: !0,
    stopNodes: [],
    // transformTagName: false,
    // transformAttributeName: false,
    oneListGroup: !1
  };
  function n(o) {
    this.options = Object.assign({}, r, o), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
      return !1;
    } : (this.ignoreAttributesFn = t(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = a), this.processTextOrObjNode = i, this.options.format ? (this.indentate = s, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  n.prototype.build = function(o) {
    return this.options.preserveOrder ? e(o, this.options) : (Array.isArray(o) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (o = {
      [this.options.arrayNodeName]: o
    }), this.j2x(o, 0, []).val);
  }, n.prototype.j2x = function(o, l, c) {
    let u = "", d = "";
    const f = c.join(".");
    for (let h in o)
      if (Object.prototype.hasOwnProperty.call(o, h))
        if (typeof o[h] > "u")
          this.isAttribute(h) && (d += "");
        else if (o[h] === null)
          this.isAttribute(h) || h === this.options.cdataPropName ? d += "" : h[0] === "?" ? d += this.indentate(l) + "<" + h + "?" + this.tagEndChar : d += this.indentate(l) + "<" + h + "/" + this.tagEndChar;
        else if (o[h] instanceof Date)
          d += this.buildTextValNode(o[h], h, "", l);
        else if (typeof o[h] != "object") {
          const g = this.isAttribute(h);
          if (g && !this.ignoreAttributesFn(g, f))
            u += this.buildAttrPairStr(g, "" + o[h]);
          else if (!g)
            if (h === this.options.textNodeName) {
              let m = this.options.tagValueProcessor(h, "" + o[h]);
              d += this.replaceEntitiesValue(m);
            } else
              d += this.buildTextValNode(o[h], h, "", l);
        } else if (Array.isArray(o[h])) {
          const g = o[h].length;
          let m = "", v = "";
          for (let p = 0; p < g; p++) {
            const _ = o[h][p];
            if (!(typeof _ > "u")) if (_ === null)
              h[0] === "?" ? d += this.indentate(l) + "<" + h + "?" + this.tagEndChar : d += this.indentate(l) + "<" + h + "/" + this.tagEndChar;
            else if (typeof _ == "object")
              if (this.options.oneListGroup) {
                const w = this.j2x(_, l + 1, c.concat(h));
                m += w.val, this.options.attributesGroupName && _.hasOwnProperty(this.options.attributesGroupName) && (v += w.attrStr);
              } else
                m += this.processTextOrObjNode(_, h, l, c);
            else if (this.options.oneListGroup) {
              let w = this.options.tagValueProcessor(h, _);
              w = this.replaceEntitiesValue(w), m += w;
            } else
              m += this.buildTextValNode(_, h, "", l);
          }
          this.options.oneListGroup && (m = this.buildObjectNode(m, h, v, l)), d += m;
        } else if (this.options.attributesGroupName && h === this.options.attributesGroupName) {
          const g = Object.keys(o[h]), m = g.length;
          for (let v = 0; v < m; v++)
            u += this.buildAttrPairStr(g[v], "" + o[h][g[v]]);
        } else
          d += this.processTextOrObjNode(o[h], h, l, c);
    return { attrStr: u, val: d };
  }, n.prototype.buildAttrPairStr = function(o, l) {
    return l = this.options.attributeValueProcessor(o, "" + l), l = this.replaceEntitiesValue(l), this.options.suppressBooleanAttributes && l === "true" ? " " + o : " " + o + '="' + l + '"';
  };
  function i(o, l, c, u) {
    const d = this.j2x(o, c + 1, u.concat(l));
    return o[this.options.textNodeName] !== void 0 && Object.keys(o).length === 1 ? this.buildTextValNode(o[this.options.textNodeName], l, d.attrStr, c) : this.buildObjectNode(d.val, l, d.attrStr, c);
  }
  n.prototype.buildObjectNode = function(o, l, c, u) {
    if (o === "")
      return l[0] === "?" ? this.indentate(u) + "<" + l + c + "?" + this.tagEndChar : this.indentate(u) + "<" + l + c + this.closeTag(l) + this.tagEndChar;
    {
      let d = "</" + l + this.tagEndChar, f = "";
      return l[0] === "?" && (f = "?", d = ""), (c || c === "") && o.indexOf("<") === -1 ? this.indentate(u) + "<" + l + c + f + ">" + o + d : this.options.commentPropName !== !1 && l === this.options.commentPropName && f.length === 0 ? this.indentate(u) + `<!--${o}-->` + this.newLine : this.indentate(u) + "<" + l + c + f + this.tagEndChar + o + this.indentate(u) + d;
    }
  }, n.prototype.closeTag = function(o) {
    let l = "";
    return this.options.unpairedTags.indexOf(o) !== -1 ? this.options.suppressUnpairedNode || (l = "/") : this.options.suppressEmptyNode ? l = "/" : l = `></${o}`, l;
  }, n.prototype.buildTextValNode = function(o, l, c, u) {
    if (this.options.cdataPropName !== !1 && l === this.options.cdataPropName)
      return this.indentate(u) + `<![CDATA[${o}]]>` + this.newLine;
    if (this.options.commentPropName !== !1 && l === this.options.commentPropName)
      return this.indentate(u) + `<!--${o}-->` + this.newLine;
    if (l[0] === "?")
      return this.indentate(u) + "<" + l + c + "?" + this.tagEndChar;
    {
      let d = this.options.tagValueProcessor(l, o);
      return d = this.replaceEntitiesValue(d), d === "" ? this.indentate(u) + "<" + l + c + this.closeTag(l) + this.tagEndChar : this.indentate(u) + "<" + l + c + ">" + d + "</" + l + this.tagEndChar;
    }
  }, n.prototype.replaceEntitiesValue = function(o) {
    if (o && o.length > 0 && this.options.processEntities)
      for (let l = 0; l < this.options.entities.length; l++) {
        const c = this.options.entities[l];
        o = o.replace(c.regex, c.val);
      }
    return o;
  };
  function s(o) {
    return this.options.indentBy.repeat(o);
  }
  function a(o) {
    return o.startsWith(this.options.attributeNamePrefix) && o !== this.options.textNodeName ? o.substr(this.attrPrefixLen) : !1;
  }
  return Gi = n, Gi;
}
var Ji, wo;
function Jg() {
  if (wo) return Ji;
  wo = 1;
  const e = eu(), t = Hg(), r = Gg();
  return Ji = {
    XMLParser: t,
    XMLValidator: e,
    XMLBuilder: r
  }, Ji;
}
var Yg = Jg(), Dr = {}, bo;
function Xg() {
  if (bo) return Dr;
  bo = 1, Dr.byteLength = o, Dr.toByteArray = c, Dr.fromByteArray = f;
  for (var e = [], t = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, s = n.length; i < s; ++i)
    e[i] = n[i], t[n.charCodeAt(i)] = i;
  t[45] = 62, t[95] = 63;
  function a(h) {
    var g = h.length;
    if (g % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var m = h.indexOf("=");
    m === -1 && (m = g);
    var v = m === g ? 0 : 4 - m % 4;
    return [m, v];
  }
  function o(h) {
    var g = a(h), m = g[0], v = g[1];
    return (m + v) * 3 / 4 - v;
  }
  function l(h, g, m) {
    return (g + m) * 3 / 4 - m;
  }
  function c(h) {
    var g, m = a(h), v = m[0], p = m[1], _ = new r(l(h, v, p)), w = 0, A = p > 0 ? v - 4 : v, k;
    for (k = 0; k < A; k += 4)
      g = t[h.charCodeAt(k)] << 18 | t[h.charCodeAt(k + 1)] << 12 | t[h.charCodeAt(k + 2)] << 6 | t[h.charCodeAt(k + 3)], _[w++] = g >> 16 & 255, _[w++] = g >> 8 & 255, _[w++] = g & 255;
    return p === 2 && (g = t[h.charCodeAt(k)] << 2 | t[h.charCodeAt(k + 1)] >> 4, _[w++] = g & 255), p === 1 && (g = t[h.charCodeAt(k)] << 10 | t[h.charCodeAt(k + 1)] << 4 | t[h.charCodeAt(k + 2)] >> 2, _[w++] = g >> 8 & 255, _[w++] = g & 255), _;
  }
  function u(h) {
    return e[h >> 18 & 63] + e[h >> 12 & 63] + e[h >> 6 & 63] + e[h & 63];
  }
  function d(h, g, m) {
    for (var v, p = [], _ = g; _ < m; _ += 3)
      v = (h[_] << 16 & 16711680) + (h[_ + 1] << 8 & 65280) + (h[_ + 2] & 255), p.push(u(v));
    return p.join("");
  }
  function f(h) {
    for (var g, m = h.length, v = m % 3, p = [], _ = 16383, w = 0, A = m - v; w < A; w += _)
      p.push(d(h, w, w + _ > A ? A : w + _));
    return v === 1 ? (g = h[m - 1], p.push(
      e[g >> 2] + e[g << 4 & 63] + "=="
    )) : v === 2 && (g = (h[m - 2] << 8) + h[m - 1], p.push(
      e[g >> 10] + e[g >> 4 & 63] + e[g << 2 & 63] + "="
    )), p.join("");
  }
  return Dr;
}
var Qg = Xg();
const e0 = new Yg.XMLParser({
  preserveOrder: !0,
  ignoreDeclaration: !0,
  ignorePiTags: !0,
  parseTagValue: !1,
  cdataPropName: "#cdata"
}), Fn = (e) => typeof e > "u" || e === null || e === "", Cs = (e) => {
  const t = Object.keys(e);
  if (t.length !== 1)
    throw new Error("An object must only contain a tag name and no properties.");
  const r = t[0], n = e[r]?.[0]?.["#text"];
  switch (r) {
    case "dict":
      const i = e[r]?.length;
      if (i === 0)
        return {};
      if (i > 1 && i % 2 === 1)
        throw new Error("Invalid dictionary.");
      const s = {};
      for (let o = 0; o < i; o += 2) {
        const l = e[r][o], c = e[r][o + 1];
        if (!l.hasOwnProperty("key"))
          throw new Error("Expected <key>");
        if (!c)
          throw new Error("Value missing for key inside <dict>");
        const u = l?.key?.[0]?.["#text"] || "";
        if (u === "__proto__")
          throw new Error("Attempted prototype pollution.");
        s[u] = Cs(c);
      }
      return s;
    case "array":
      return e[r]?.map(Cs);
    case "string":
      const a = e[r];
      return a.length === 0 ? "" : a.reduce((o, l) => (l.hasOwnProperty("#cdata") && (o += l["#cdata"].reduce((c, u) => c + u["#text"], "")), l.hasOwnProperty("#text") && (o += l["#text"]), o), "");
    case "integer":
      if (Fn(n))
        throw new Error("Encountered empty <integer>");
      return n > Number.MAX_SAFE_INTEGER ? BigInt(n) : parseInt(n);
    case "real":
      if (Fn(n))
        throw new Error("Encountered empty <real>");
      return parseFloat(n);
    case "data":
      return Fn(n) ? new Uint8Array([]).buffer : Qg.toByteArray(n.replace(/[\s\r\n\t]*/g, "")).buffer;
    case "date":
      if (Fn(n))
        throw new Error("Encountered empty <date>");
      return new Date(n);
    case "true":
      return !0;
    case "false":
      return !1;
  }
  throw new Error("Invalid type.");
}, yo = (e) => {
  const t = e0.parse(e);
  if (!Array.isArray(t))
    throw new Error("Invalid XML.");
  const r = t.filter((i) => i.hasOwnProperty("plist"));
  if (r.length !== 1)
    throw new Error("The document must contain exactly one plist tag.");
  const n = r[0].plist;
  if (!Array.isArray(n))
    throw new Error("plist tag must contain objects.");
  if (n.length !== 1)
    throw new Error("plist tag must contain exactly one object.");
  return Cs(n[0]);
}, ko = /[A-Za-z0-9_$+\/:.-]/, t0 = /[A-Fa-f0-9]/, ru = [" ", "	", `
`, "\r"], r0 = (e) => JSON.parse(`"${e}"`), ut = (e, t, r = !1) => {
  if ([, e] = Jt(e), !e.startsWith(t)) {
    if (r)
      return [null, e];
    throw new Error(`Expected '${t}'`);
  }
  return e = e.substring(t.length), [, e] = Jt(e), [t, e];
}, Jt = (e) => {
  let t;
  for (; e.length > 0; ) {
    if (t)
      if (e.startsWith(t))
        e = e.substring(t.length), t = void 0;
      else {
        e = e.substring(1);
        continue;
      }
    const r = e.substring(0, 1);
    if (e = e.substring(1), !ru.includes(r))
      switch (r) {
        case "/":
          switch (e.charAt(0)) {
            case "*":
              t = "*/";
              break;
            case "/":
              t = `
`;
              break;
            default:
              throw new Error("Unexpected '/'");
          }
          break;
        default:
          return [null, r + e];
      }
  }
  return [null, e];
}, Xn = (e) => {
  if ([, e] = Jt(e), e.length === 0)
    return [null, ""];
  let t = null;
  const r = e.substring(0, 1);
  switch (e = e.substring(1), r) {
    case "{":
      if (t = {}, [, e] = Jt(e), e.charAt(0) === "}") {
        [, e] = ut(e, "}");
        break;
      }
      for (; e.charAt(0) !== "}"; ) {
        let i, s;
        if ([i, e] = Xn(e), typeof i != "string")
          throw new Error("Expected string key");
        if (i === "__proto__")
          throw new Error("Attempted prototype pollution");
        if ([, e] = ut(e, "="), [s, e] = Xn(e), t[i] = s, [, e] = ut(e, ";"), e.length === 0)
          throw new Error("No matching '}' found");
      }
      [, e] = ut(e, "}");
      break;
    case "(":
      if (t = [], [, e] = Jt(e), e.charAt(0) === ")") {
        [, e] = ut(e, ")");
        break;
      }
      for (; e.charAt(0) !== ")"; ) {
        let i, s;
        if ([i, e] = Xn(e), t.push(i), [s, e] = ut(e, ",", !0), !s)
          break;
        if (e.length === 0)
          throw new Error("No matching ')' found");
      }
      [, e] = ut(e, ")");
      break;
    case "<":
      let n = "";
      if ([, e] = Jt(e), e.charAt(0) === ">") {
        [, e] = ut(e, ">");
        break;
      }
      for (; e.charAt(0) !== ">"; ) {
        const i = e.charAt(0);
        if (e = e.substring(1), t0.test(i))
          n += i;
        else {
          if (ru.includes(i))
            continue;
          throw new Error(`Unexpected '${i}'`);
        }
        if (e.length === 0)
          throw new Error("No matching '>' found");
      }
      if (n.length > 0) {
        if (n.length % 2 === 1)
          throw new Error("Data must contain hex digits grouped in pairs");
        const i = n.match(/../g);
        i !== null && (t = new Uint8Array(i.map((s) => parseInt(s, 16))).buffer);
      }
      [, e] = ut(e, ">");
      break;
    case '"':
    case "'":
      for (t = ""; e.charAt(0) !== r; )
        if (t += e.charAt(0), e.charAt(0) === "\\" ? (t += e.charAt(1), e = e.substring(2)) : e = e.substring(1), e.length === 0)
          throw new Error(`No matching ${r} found`);
      t = r0(t), [, e] = ut(e, r);
      break;
    default:
      if (!ko.test(r))
        throw new Error(`Unexpected '${r}'`);
      for (t = r; ko.test(e.charAt(0)) && (t += e.charAt(0), e = e.substring(1), e.length !== 0); )
        ;
  }
  return [, e] = Jt(e), [t, e];
}, Eo = (e) => {
  const [t, r] = Xn(e);
  if (r.length > 0)
    throw new Error("Unexpected content at the end of file");
  if (typeof t > "u")
    throw new Error("Parsing failed");
  return t;
}, n0 = /^[\u0000-\u007f]*$/, ai = new TextDecoder("utf-8"), nu = (e) => {
  if (typeof e == "string") {
    if (e.startsWith(br))
      return Et.BINARY;
    const t = e.substring(0, 16).replace(/[\s\t\n\r]+/g, "");
    if (t.startsWith("<?xml") || t.startsWith("<plist"))
      return Et.XML;
    if (e.trimStart().startsWith(Rg) || n0.test(t))
      return Et.OPENSTEP;
    throw new Error("Unknown format");
  } else {
    const t = e.slice(0, br.length);
    return ai.decode(t) === br ? Et.BINARY : nu(ai.decode(e.slice(0, 16)));
  }
}, i0 = (e) => {
  switch (nu(e)) {
    case Et.BINARY:
      if (typeof e == "string")
        throw new Error("Binary plists must be passed as ArrayBuffer");
      return Bg(e);
    case Et.XML:
      return e instanceof ArrayBuffer ? yo(ai.decode(e)) : yo(e);
    case Et.OPENSTEP:
      return e instanceof ArrayBuffer ? Eo(ai.decode(e)) : Eo(e);
  }
  throw new Error("Unsupported format");
};
const s0 = 4, xo = 0, So = 1, a0 = 2;
function Nr(e) {
  let t = e.length;
  for (; --t >= 0; )
    e[t] = 0;
}
const o0 = 0, iu = 1, l0 = 2, c0 = 3, u0 = 258, la = 29, vn = 256, on = vn + 1 + la, kr = 30, ca = 19, su = 2 * on + 1, Xt = 15, Yi = 16, h0 = 7, ua = 256, au = 16, ou = 17, lu = 18, Ns = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), Qn = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), d0 = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), cu = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), f0 = 512, yt = new Array((on + 2) * 2);
Nr(yt);
const Jr = new Array(kr * 2);
Nr(Jr);
const ln = new Array(f0);
Nr(ln);
const cn = new Array(u0 - c0 + 1);
Nr(cn);
const ha = new Array(la);
Nr(ha);
const oi = new Array(kr);
Nr(oi);
function Xi(e, t, r, n, i) {
  this.static_tree = e, this.extra_bits = t, this.extra_base = r, this.elems = n, this.max_length = i, this.has_stree = e && e.length;
}
let uu, hu, du;
function Qi(e, t) {
  this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
}
const fu = (e) => e < 256 ? ln[e] : ln[256 + (e >>> 7)], un = (e, t) => {
  e.pending_buf[e.pending++] = t & 255, e.pending_buf[e.pending++] = t >>> 8 & 255;
}, De = (e, t, r) => {
  e.bi_valid > Yi - r ? (e.bi_buf |= t << e.bi_valid & 65535, un(e, e.bi_buf), e.bi_buf = t >> Yi - e.bi_valid, e.bi_valid += r - Yi) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += r);
}, ft = (e, t, r) => {
  De(
    e,
    r[t * 2],
    r[t * 2 + 1]
    /*.Len*/
  );
}, pu = (e, t) => {
  let r = 0;
  do
    r |= e & 1, e >>>= 1, r <<= 1;
  while (--t > 0);
  return r >>> 1;
}, p0 = (e) => {
  e.bi_valid === 16 ? (un(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = e.bi_buf & 255, e.bi_buf >>= 8, e.bi_valid -= 8);
}, g0 = (e, t) => {
  const r = t.dyn_tree, n = t.max_code, i = t.stat_desc.static_tree, s = t.stat_desc.has_stree, a = t.stat_desc.extra_bits, o = t.stat_desc.extra_base, l = t.stat_desc.max_length;
  let c, u, d, f, h, g, m = 0;
  for (f = 0; f <= Xt; f++)
    e.bl_count[f] = 0;
  for (r[e.heap[e.heap_max] * 2 + 1] = 0, c = e.heap_max + 1; c < su; c++)
    u = e.heap[c], f = r[r[u * 2 + 1] * 2 + 1] + 1, f > l && (f = l, m++), r[u * 2 + 1] = f, !(u > n) && (e.bl_count[f]++, h = 0, u >= o && (h = a[u - o]), g = r[u * 2], e.opt_len += g * (f + h), s && (e.static_len += g * (i[u * 2 + 1] + h)));
  if (m !== 0) {
    do {
      for (f = l - 1; e.bl_count[f] === 0; )
        f--;
      e.bl_count[f]--, e.bl_count[f + 1] += 2, e.bl_count[l]--, m -= 2;
    } while (m > 0);
    for (f = l; f !== 0; f--)
      for (u = e.bl_count[f]; u !== 0; )
        d = e.heap[--c], !(d > n) && (r[d * 2 + 1] !== f && (e.opt_len += (f - r[d * 2 + 1]) * r[d * 2], r[d * 2 + 1] = f), u--);
  }
}, gu = (e, t, r) => {
  const n = new Array(Xt + 1);
  let i = 0, s, a;
  for (s = 1; s <= Xt; s++)
    i = i + r[s - 1] << 1, n[s] = i;
  for (a = 0; a <= t; a++) {
    let o = e[a * 2 + 1];
    o !== 0 && (e[a * 2] = pu(n[o]++, o));
  }
}, m0 = () => {
  let e, t, r, n, i;
  const s = new Array(Xt + 1);
  for (r = 0, n = 0; n < la - 1; n++)
    for (ha[n] = r, e = 0; e < 1 << Ns[n]; e++)
      cn[r++] = n;
  for (cn[r - 1] = n, i = 0, n = 0; n < 16; n++)
    for (oi[n] = i, e = 0; e < 1 << Qn[n]; e++)
      ln[i++] = n;
  for (i >>= 7; n < kr; n++)
    for (oi[n] = i << 7, e = 0; e < 1 << Qn[n] - 7; e++)
      ln[256 + i++] = n;
  for (t = 0; t <= Xt; t++)
    s[t] = 0;
  for (e = 0; e <= 143; )
    yt[e * 2 + 1] = 8, e++, s[8]++;
  for (; e <= 255; )
    yt[e * 2 + 1] = 9, e++, s[9]++;
  for (; e <= 279; )
    yt[e * 2 + 1] = 7, e++, s[7]++;
  for (; e <= 287; )
    yt[e * 2 + 1] = 8, e++, s[8]++;
  for (gu(yt, on + 1, s), e = 0; e < kr; e++)
    Jr[e * 2 + 1] = 5, Jr[e * 2] = pu(e, 5);
  uu = new Xi(yt, Ns, vn + 1, on, Xt), hu = new Xi(Jr, Qn, 0, kr, Xt), du = new Xi(new Array(0), d0, 0, ca, h0);
}, mu = (e) => {
  let t;
  for (t = 0; t < on; t++)
    e.dyn_ltree[t * 2] = 0;
  for (t = 0; t < kr; t++)
    e.dyn_dtree[t * 2] = 0;
  for (t = 0; t < ca; t++)
    e.bl_tree[t * 2] = 0;
  e.dyn_ltree[ua * 2] = 1, e.opt_len = e.static_len = 0, e.sym_next = e.matches = 0;
}, _u = (e) => {
  e.bi_valid > 8 ? un(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
}, Ao = (e, t, r, n) => {
  const i = t * 2, s = r * 2;
  return e[i] < e[s] || e[i] === e[s] && n[t] <= n[r];
}, es = (e, t, r) => {
  const n = e.heap[r];
  let i = r << 1;
  for (; i <= e.heap_len && (i < e.heap_len && Ao(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !Ao(t, n, e.heap[i], e.depth)); )
    e.heap[r] = e.heap[i], r = i, i <<= 1;
  e.heap[r] = n;
}, To = (e, t, r) => {
  let n, i, s = 0, a, o;
  if (e.sym_next !== 0)
    do
      n = e.pending_buf[e.sym_buf + s++] & 255, n += (e.pending_buf[e.sym_buf + s++] & 255) << 8, i = e.pending_buf[e.sym_buf + s++], n === 0 ? ft(e, i, t) : (a = cn[i], ft(e, a + vn + 1, t), o = Ns[a], o !== 0 && (i -= ha[a], De(e, i, o)), n--, a = fu(n), ft(e, a, r), o = Qn[a], o !== 0 && (n -= oi[a], De(e, n, o)));
    while (s < e.sym_next);
  ft(e, ua, t);
}, Ps = (e, t) => {
  const r = t.dyn_tree, n = t.stat_desc.static_tree, i = t.stat_desc.has_stree, s = t.stat_desc.elems;
  let a, o, l = -1, c;
  for (e.heap_len = 0, e.heap_max = su, a = 0; a < s; a++)
    r[a * 2] !== 0 ? (e.heap[++e.heap_len] = l = a, e.depth[a] = 0) : r[a * 2 + 1] = 0;
  for (; e.heap_len < 2; )
    c = e.heap[++e.heap_len] = l < 2 ? ++l : 0, r[c * 2] = 1, e.depth[c] = 0, e.opt_len--, i && (e.static_len -= n[c * 2 + 1]);
  for (t.max_code = l, a = e.heap_len >> 1; a >= 1; a--)
    es(e, r, a);
  c = s;
  do
    a = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[
      1
      /*SMALLEST*/
    ] = e.heap[e.heap_len--], es(
      e,
      r,
      1
      /*SMALLEST*/
    ), o = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[--e.heap_max] = a, e.heap[--e.heap_max] = o, r[c * 2] = r[a * 2] + r[o * 2], e.depth[c] = (e.depth[a] >= e.depth[o] ? e.depth[a] : e.depth[o]) + 1, r[a * 2 + 1] = r[o * 2 + 1] = c, e.heap[
      1
      /*SMALLEST*/
    ] = c++, es(
      e,
      r,
      1
      /*SMALLEST*/
    );
  while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[
    1
    /*SMALLEST*/
  ], g0(e, t), gu(r, l, e.bl_count);
}, Oo = (e, t, r) => {
  let n, i = -1, s, a = t[1], o = 0, l = 7, c = 4;
  for (a === 0 && (l = 138, c = 3), t[(r + 1) * 2 + 1] = 65535, n = 0; n <= r; n++)
    s = a, a = t[(n + 1) * 2 + 1], !(++o < l && s === a) && (o < c ? e.bl_tree[s * 2] += o : s !== 0 ? (s !== i && e.bl_tree[s * 2]++, e.bl_tree[au * 2]++) : o <= 10 ? e.bl_tree[ou * 2]++ : e.bl_tree[lu * 2]++, o = 0, i = s, a === 0 ? (l = 138, c = 3) : s === a ? (l = 6, c = 3) : (l = 7, c = 4));
}, Ro = (e, t, r) => {
  let n, i = -1, s, a = t[1], o = 0, l = 7, c = 4;
  for (a === 0 && (l = 138, c = 3), n = 0; n <= r; n++)
    if (s = a, a = t[(n + 1) * 2 + 1], !(++o < l && s === a)) {
      if (o < c)
        do
          ft(e, s, e.bl_tree);
        while (--o !== 0);
      else s !== 0 ? (s !== i && (ft(e, s, e.bl_tree), o--), ft(e, au, e.bl_tree), De(e, o - 3, 2)) : o <= 10 ? (ft(e, ou, e.bl_tree), De(e, o - 3, 3)) : (ft(e, lu, e.bl_tree), De(e, o - 11, 7));
      o = 0, i = s, a === 0 ? (l = 138, c = 3) : s === a ? (l = 6, c = 3) : (l = 7, c = 4);
    }
}, _0 = (e) => {
  let t;
  for (Oo(e, e.dyn_ltree, e.l_desc.max_code), Oo(e, e.dyn_dtree, e.d_desc.max_code), Ps(e, e.bl_desc), t = ca - 1; t >= 3 && e.bl_tree[cu[t] * 2 + 1] === 0; t--)
    ;
  return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
}, v0 = (e, t, r, n) => {
  let i;
  for (De(e, t - 257, 5), De(e, r - 1, 5), De(e, n - 4, 4), i = 0; i < n; i++)
    De(e, e.bl_tree[cu[i] * 2 + 1], 3);
  Ro(e, e.dyn_ltree, t - 1), Ro(e, e.dyn_dtree, r - 1);
}, w0 = (e) => {
  let t = 4093624447, r;
  for (r = 0; r <= 31; r++, t >>>= 1)
    if (t & 1 && e.dyn_ltree[r * 2] !== 0)
      return xo;
  if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0)
    return So;
  for (r = 32; r < vn; r++)
    if (e.dyn_ltree[r * 2] !== 0)
      return So;
  return xo;
};
let Io = !1;
const b0 = (e) => {
  Io || (m0(), Io = !0), e.l_desc = new Qi(e.dyn_ltree, uu), e.d_desc = new Qi(e.dyn_dtree, hu), e.bl_desc = new Qi(e.bl_tree, du), e.bi_buf = 0, e.bi_valid = 0, mu(e);
}, vu = (e, t, r, n) => {
  De(e, (o0 << 1) + (n ? 1 : 0), 3), _u(e), un(e, r), un(e, ~r), r && e.pending_buf.set(e.window.subarray(t, t + r), e.pending), e.pending += r;
}, y0 = (e) => {
  De(e, iu << 1, 3), ft(e, ua, yt), p0(e);
}, k0 = (e, t, r, n) => {
  let i, s, a = 0;
  e.level > 0 ? (e.strm.data_type === a0 && (e.strm.data_type = w0(e)), Ps(e, e.l_desc), Ps(e, e.d_desc), a = _0(e), i = e.opt_len + 3 + 7 >>> 3, s = e.static_len + 3 + 7 >>> 3, s <= i && (i = s)) : i = s = r + 5, r + 4 <= i && t !== -1 ? vu(e, t, r, n) : e.strategy === s0 || s === i ? (De(e, (iu << 1) + (n ? 1 : 0), 3), To(e, yt, Jr)) : (De(e, (l0 << 1) + (n ? 1 : 0), 3), v0(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), To(e, e.dyn_ltree, e.dyn_dtree)), mu(e), n && _u(e);
}, E0 = (e, t, r) => (e.pending_buf[e.sym_buf + e.sym_next++] = t, e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = r, t === 0 ? e.dyn_ltree[r * 2]++ : (e.matches++, t--, e.dyn_ltree[(cn[r] + vn + 1) * 2]++, e.dyn_dtree[fu(t) * 2]++), e.sym_next === e.sym_end);
var x0 = b0, S0 = vu, A0 = k0, T0 = E0, O0 = y0, R0 = {
  _tr_init: x0,
  _tr_stored_block: S0,
  _tr_flush_block: A0,
  _tr_tally: T0,
  _tr_align: O0
};
const I0 = (e, t, r, n) => {
  let i = e & 65535 | 0, s = e >>> 16 & 65535 | 0, a = 0;
  for (; r !== 0; ) {
    a = r > 2e3 ? 2e3 : r, r -= a;
    do
      i = i + t[n++] | 0, s = s + i | 0;
    while (--a);
    i %= 65521, s %= 65521;
  }
  return i | s << 16 | 0;
};
var hn = I0;
const C0 = () => {
  let e, t = [];
  for (var r = 0; r < 256; r++) {
    e = r;
    for (var n = 0; n < 8; n++)
      e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
    t[r] = e;
  }
  return t;
}, N0 = new Uint32Array(C0()), P0 = (e, t, r, n) => {
  const i = N0, s = n + r;
  e ^= -1;
  for (let a = n; a < s; a++)
    e = e >>> 8 ^ i[(e ^ t[a]) & 255];
  return e ^ -1;
};
var Pe = P0, tr = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, wn = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const { _tr_init: $0, _tr_stored_block: $s, _tr_flush_block: z0, _tr_tally: It, _tr_align: j0 } = R0, {
  Z_NO_FLUSH: Ct,
  Z_PARTIAL_FLUSH: U0,
  Z_FULL_FLUSH: F0,
  Z_FINISH: Qe,
  Z_BLOCK: Co,
  Z_OK: je,
  Z_STREAM_END: No,
  Z_STREAM_ERROR: pt,
  Z_DATA_ERROR: L0,
  Z_BUF_ERROR: ts,
  Z_DEFAULT_COMPRESSION: B0,
  Z_FILTERED: D0,
  Z_HUFFMAN_ONLY: Ln,
  Z_RLE: Z0,
  Z_FIXED: M0,
  Z_DEFAULT_STRATEGY: V0,
  Z_UNKNOWN: W0,
  Z_DEFLATED: bi
} = wn, q0 = 9, H0 = 15, K0 = 8, G0 = 29, J0 = 256, zs = J0 + 1 + G0, Y0 = 30, X0 = 19, Q0 = 2 * zs + 1, em = 15, de = 3, Rt = 258, gt = Rt + de + 1, tm = 32, Sr = 42, da = 57, js = 69, Us = 73, Fs = 91, Ls = 103, Qt = 113, qr = 666, Be = 1, Pr = 2, rr = 3, $r = 4, rm = 3, er = (e, t) => (e.msg = tr[t], t), Po = (e) => e * 2 - (e > 4 ? 9 : 0), Ot = (e) => {
  let t = e.length;
  for (; --t >= 0; )
    e[t] = 0;
}, nm = (e) => {
  let t, r, n, i = e.w_size;
  t = e.hash_size, n = t;
  do
    r = e.head[--n], e.head[n] = r >= i ? r - i : 0;
  while (--t);
  t = i, n = t;
  do
    r = e.prev[--n], e.prev[n] = r >= i ? r - i : 0;
  while (--t);
};
let im = (e, t, r) => (t << e.hash_shift ^ r) & e.hash_mask, Nt = im;
const qe = (e) => {
  const t = e.state;
  let r = t.pending;
  r > e.avail_out && (r = e.avail_out), r !== 0 && (e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + r), e.next_out), e.next_out += r, t.pending_out += r, e.total_out += r, e.avail_out -= r, t.pending -= r, t.pending === 0 && (t.pending_out = 0));
}, Ge = (e, t) => {
  z0(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, qe(e.strm);
}, ge = (e, t) => {
  e.pending_buf[e.pending++] = t;
}, Zr = (e, t) => {
  e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = t & 255;
}, Bs = (e, t, r, n) => {
  let i = e.avail_in;
  return i > n && (i = n), i === 0 ? 0 : (e.avail_in -= i, t.set(e.input.subarray(e.next_in, e.next_in + i), r), e.state.wrap === 1 ? e.adler = hn(e.adler, t, i, r) : e.state.wrap === 2 && (e.adler = Pe(e.adler, t, i, r)), e.next_in += i, e.total_in += i, i);
}, wu = (e, t) => {
  let r = e.max_chain_length, n = e.strstart, i, s, a = e.prev_length, o = e.nice_match;
  const l = e.strstart > e.w_size - gt ? e.strstart - (e.w_size - gt) : 0, c = e.window, u = e.w_mask, d = e.prev, f = e.strstart + Rt;
  let h = c[n + a - 1], g = c[n + a];
  e.prev_length >= e.good_match && (r >>= 2), o > e.lookahead && (o = e.lookahead);
  do
    if (i = t, !(c[i + a] !== g || c[i + a - 1] !== h || c[i] !== c[n] || c[++i] !== c[n + 1])) {
      n += 2, i++;
      do
        ;
      while (c[++n] === c[++i] && c[++n] === c[++i] && c[++n] === c[++i] && c[++n] === c[++i] && c[++n] === c[++i] && c[++n] === c[++i] && c[++n] === c[++i] && c[++n] === c[++i] && n < f);
      if (s = Rt - (f - n), n = f - Rt, s > a) {
        if (e.match_start = t, a = s, s >= o)
          break;
        h = c[n + a - 1], g = c[n + a];
      }
    }
  while ((t = d[t & u]) > l && --r !== 0);
  return a <= e.lookahead ? a : e.lookahead;
}, Ar = (e) => {
  const t = e.w_size;
  let r, n, i;
  do {
    if (n = e.window_size - e.lookahead - e.strstart, e.strstart >= t + (t - gt) && (e.window.set(e.window.subarray(t, t + t - n), 0), e.match_start -= t, e.strstart -= t, e.block_start -= t, e.insert > e.strstart && (e.insert = e.strstart), nm(e), n += t), e.strm.avail_in === 0)
      break;
    if (r = Bs(e.strm, e.window, e.strstart + e.lookahead, n), e.lookahead += r, e.lookahead + e.insert >= de)
      for (i = e.strstart - e.insert, e.ins_h = e.window[i], e.ins_h = Nt(e, e.ins_h, e.window[i + 1]); e.insert && (e.ins_h = Nt(e, e.ins_h, e.window[i + de - 1]), e.prev[i & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = i, i++, e.insert--, !(e.lookahead + e.insert < de)); )
        ;
  } while (e.lookahead < gt && e.strm.avail_in !== 0);
}, bu = (e, t) => {
  let r = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5, n, i, s, a = 0, o = e.strm.avail_in;
  do {
    if (n = 65535, s = e.bi_valid + 42 >> 3, e.strm.avail_out < s || (s = e.strm.avail_out - s, i = e.strstart - e.block_start, n > i + e.strm.avail_in && (n = i + e.strm.avail_in), n > s && (n = s), n < r && (n === 0 && t !== Qe || t === Ct || n !== i + e.strm.avail_in)))
      break;
    a = t === Qe && n === i + e.strm.avail_in ? 1 : 0, $s(e, 0, 0, a), e.pending_buf[e.pending - 4] = n, e.pending_buf[e.pending - 3] = n >> 8, e.pending_buf[e.pending - 2] = ~n, e.pending_buf[e.pending - 1] = ~n >> 8, qe(e.strm), i && (i > n && (i = n), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + i), e.strm.next_out), e.strm.next_out += i, e.strm.avail_out -= i, e.strm.total_out += i, e.block_start += i, n -= i), n && (Bs(e.strm, e.strm.output, e.strm.next_out, n), e.strm.next_out += n, e.strm.avail_out -= n, e.strm.total_out += n);
  } while (a === 0);
  return o -= e.strm.avail_in, o && (o >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= o && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - o, e.strm.next_in), e.strstart), e.strstart += o, e.insert += o > e.w_size - e.insert ? e.w_size - e.insert : o), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), a ? $r : t !== Ct && t !== Qe && e.strm.avail_in === 0 && e.strstart === e.block_start ? Pr : (s = e.window_size - e.strstart, e.strm.avail_in > s && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, s += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), s > e.strm.avail_in && (s = e.strm.avail_in), s && (Bs(e.strm, e.window, e.strstart, s), e.strstart += s, e.insert += s > e.w_size - e.insert ? e.w_size - e.insert : s), e.high_water < e.strstart && (e.high_water = e.strstart), s = e.bi_valid + 42 >> 3, s = e.pending_buf_size - s > 65535 ? 65535 : e.pending_buf_size - s, r = s > e.w_size ? e.w_size : s, i = e.strstart - e.block_start, (i >= r || (i || t === Qe) && t !== Ct && e.strm.avail_in === 0 && i <= s) && (n = i > s ? s : i, a = t === Qe && e.strm.avail_in === 0 && n === i ? 1 : 0, $s(e, e.block_start, n, a), e.block_start += n, qe(e.strm)), a ? rr : Be);
}, rs = (e, t) => {
  let r, n;
  for (; ; ) {
    if (e.lookahead < gt) {
      if (Ar(e), e.lookahead < gt && t === Ct)
        return Be;
      if (e.lookahead === 0)
        break;
    }
    if (r = 0, e.lookahead >= de && (e.ins_h = Nt(e, e.ins_h, e.window[e.strstart + de - 1]), r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), r !== 0 && e.strstart - r <= e.w_size - gt && (e.match_length = wu(e, r)), e.match_length >= de)
      if (n = It(e, e.strstart - e.match_start, e.match_length - de), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= de) {
        e.match_length--;
        do
          e.strstart++, e.ins_h = Nt(e, e.ins_h, e.window[e.strstart + de - 1]), r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
        while (--e.match_length !== 0);
        e.strstart++;
      } else
        e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = Nt(e, e.ins_h, e.window[e.strstart + 1]);
    else
      n = It(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
    if (n && (Ge(e, !1), e.strm.avail_out === 0))
      return Be;
  }
  return e.insert = e.strstart < de - 1 ? e.strstart : de - 1, t === Qe ? (Ge(e, !0), e.strm.avail_out === 0 ? rr : $r) : e.sym_next && (Ge(e, !1), e.strm.avail_out === 0) ? Be : Pr;
}, fr = (e, t) => {
  let r, n, i;
  for (; ; ) {
    if (e.lookahead < gt) {
      if (Ar(e), e.lookahead < gt && t === Ct)
        return Be;
      if (e.lookahead === 0)
        break;
    }
    if (r = 0, e.lookahead >= de && (e.ins_h = Nt(e, e.ins_h, e.window[e.strstart + de - 1]), r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = de - 1, r !== 0 && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - gt && (e.match_length = wu(e, r), e.match_length <= 5 && (e.strategy === D0 || e.match_length === de && e.strstart - e.match_start > 4096) && (e.match_length = de - 1)), e.prev_length >= de && e.match_length <= e.prev_length) {
      i = e.strstart + e.lookahead - de, n = It(e, e.strstart - 1 - e.prev_match, e.prev_length - de), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
      do
        ++e.strstart <= i && (e.ins_h = Nt(e, e.ins_h, e.window[e.strstart + de - 1]), r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
      while (--e.prev_length !== 0);
      if (e.match_available = 0, e.match_length = de - 1, e.strstart++, n && (Ge(e, !1), e.strm.avail_out === 0))
        return Be;
    } else if (e.match_available) {
      if (n = It(e, 0, e.window[e.strstart - 1]), n && Ge(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0)
        return Be;
    } else
      e.match_available = 1, e.strstart++, e.lookahead--;
  }
  return e.match_available && (n = It(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < de - 1 ? e.strstart : de - 1, t === Qe ? (Ge(e, !0), e.strm.avail_out === 0 ? rr : $r) : e.sym_next && (Ge(e, !1), e.strm.avail_out === 0) ? Be : Pr;
}, sm = (e, t) => {
  let r, n, i, s;
  const a = e.window;
  for (; ; ) {
    if (e.lookahead <= Rt) {
      if (Ar(e), e.lookahead <= Rt && t === Ct)
        return Be;
      if (e.lookahead === 0)
        break;
    }
    if (e.match_length = 0, e.lookahead >= de && e.strstart > 0 && (i = e.strstart - 1, n = a[i], n === a[++i] && n === a[++i] && n === a[++i])) {
      s = e.strstart + Rt;
      do
        ;
      while (n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && i < s);
      e.match_length = Rt - (s - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
    }
    if (e.match_length >= de ? (r = It(e, 1, e.match_length - de), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (r = It(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), r && (Ge(e, !1), e.strm.avail_out === 0))
      return Be;
  }
  return e.insert = 0, t === Qe ? (Ge(e, !0), e.strm.avail_out === 0 ? rr : $r) : e.sym_next && (Ge(e, !1), e.strm.avail_out === 0) ? Be : Pr;
}, am = (e, t) => {
  let r;
  for (; ; ) {
    if (e.lookahead === 0 && (Ar(e), e.lookahead === 0)) {
      if (t === Ct)
        return Be;
      break;
    }
    if (e.match_length = 0, r = It(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, r && (Ge(e, !1), e.strm.avail_out === 0))
      return Be;
  }
  return e.insert = 0, t === Qe ? (Ge(e, !0), e.strm.avail_out === 0 ? rr : $r) : e.sym_next && (Ge(e, !1), e.strm.avail_out === 0) ? Be : Pr;
};
function ht(e, t, r, n, i) {
  this.good_length = e, this.max_lazy = t, this.nice_length = r, this.max_chain = n, this.func = i;
}
const Hr = [
  /*      good lazy nice chain */
  new ht(0, 0, 0, 0, bu),
  /* 0 store only */
  new ht(4, 4, 8, 4, rs),
  /* 1 max speed, no lazy matches */
  new ht(4, 5, 16, 8, rs),
  /* 2 */
  new ht(4, 6, 32, 32, rs),
  /* 3 */
  new ht(4, 4, 16, 16, fr),
  /* 4 lazy matches */
  new ht(8, 16, 32, 32, fr),
  /* 5 */
  new ht(8, 16, 128, 128, fr),
  /* 6 */
  new ht(8, 32, 128, 256, fr),
  /* 7 */
  new ht(32, 128, 258, 1024, fr),
  /* 8 */
  new ht(32, 258, 258, 4096, fr)
  /* 9 max compression */
], om = (e) => {
  e.window_size = 2 * e.w_size, Ot(e.head), e.max_lazy_match = Hr[e.level].max_lazy, e.good_match = Hr[e.level].good_length, e.nice_match = Hr[e.level].nice_length, e.max_chain_length = Hr[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = de - 1, e.match_available = 0, e.ins_h = 0;
};
function lm() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = bi, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(Q0 * 2), this.dyn_dtree = new Uint16Array((2 * Y0 + 1) * 2), this.bl_tree = new Uint16Array((2 * X0 + 1) * 2), Ot(this.dyn_ltree), Ot(this.dyn_dtree), Ot(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(em + 1), this.heap = new Uint16Array(2 * zs + 1), Ot(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * zs + 1), Ot(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const bn = (e) => {
  if (!e)
    return 1;
  const t = e.state;
  return !t || t.strm !== e || t.status !== Sr && //#ifdef GZIP
  t.status !== da && //#endif
  t.status !== js && t.status !== Us && t.status !== Fs && t.status !== Ls && t.status !== Qt && t.status !== qr ? 1 : 0;
}, yu = (e) => {
  if (bn(e))
    return er(e, pt);
  e.total_in = e.total_out = 0, e.data_type = W0;
  const t = e.state;
  return t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = //#ifdef GZIP
  t.wrap === 2 ? da : (
    //#endif
    t.wrap ? Sr : Qt
  ), e.adler = t.wrap === 2 ? 0 : 1, t.last_flush = -2, $0(t), je;
}, ku = (e) => {
  const t = yu(e);
  return t === je && om(e.state), t;
}, cm = (e, t) => bn(e) || e.state.wrap !== 2 ? pt : (e.state.gzhead = t, je), Eu = (e, t, r, n, i, s) => {
  if (!e)
    return pt;
  let a = 1;
  if (t === B0 && (t = 6), n < 0 ? (a = 0, n = -n) : n > 15 && (a = 2, n -= 16), i < 1 || i > q0 || r !== bi || n < 8 || n > 15 || t < 0 || t > 9 || s < 0 || s > M0 || n === 8 && a !== 1)
    return er(e, pt);
  n === 8 && (n = 9);
  const o = new lm();
  return e.state = o, o.strm = e, o.status = Sr, o.wrap = a, o.gzhead = null, o.w_bits = n, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = i + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + de - 1) / de), o.window = new Uint8Array(o.w_size * 2), o.head = new Uint16Array(o.hash_size), o.prev = new Uint16Array(o.w_size), o.lit_bufsize = 1 << i + 6, o.pending_buf_size = o.lit_bufsize * 4, o.pending_buf = new Uint8Array(o.pending_buf_size), o.sym_buf = o.lit_bufsize, o.sym_end = (o.lit_bufsize - 1) * 3, o.level = t, o.strategy = s, o.method = r, ku(e);
}, um = (e, t) => Eu(e, t, bi, H0, K0, V0), hm = (e, t) => {
  if (bn(e) || t > Co || t < 0)
    return e ? er(e, pt) : pt;
  const r = e.state;
  if (!e.output || e.avail_in !== 0 && !e.input || r.status === qr && t !== Qe)
    return er(e, e.avail_out === 0 ? ts : pt);
  const n = r.last_flush;
  if (r.last_flush = t, r.pending !== 0) {
    if (qe(e), e.avail_out === 0)
      return r.last_flush = -1, je;
  } else if (e.avail_in === 0 && Po(t) <= Po(n) && t !== Qe)
    return er(e, ts);
  if (r.status === qr && e.avail_in !== 0)
    return er(e, ts);
  if (r.status === Sr && r.wrap === 0 && (r.status = Qt), r.status === Sr) {
    let i = bi + (r.w_bits - 8 << 4) << 8, s = -1;
    if (r.strategy >= Ln || r.level < 2 ? s = 0 : r.level < 6 ? s = 1 : r.level === 6 ? s = 2 : s = 3, i |= s << 6, r.strstart !== 0 && (i |= tm), i += 31 - i % 31, Zr(r, i), r.strstart !== 0 && (Zr(r, e.adler >>> 16), Zr(r, e.adler & 65535)), e.adler = 1, r.status = Qt, qe(e), r.pending !== 0)
      return r.last_flush = -1, je;
  }
  if (r.status === da) {
    if (e.adler = 0, ge(r, 31), ge(r, 139), ge(r, 8), r.gzhead)
      ge(
        r,
        (r.gzhead.text ? 1 : 0) + (r.gzhead.hcrc ? 2 : 0) + (r.gzhead.extra ? 4 : 0) + (r.gzhead.name ? 8 : 0) + (r.gzhead.comment ? 16 : 0)
      ), ge(r, r.gzhead.time & 255), ge(r, r.gzhead.time >> 8 & 255), ge(r, r.gzhead.time >> 16 & 255), ge(r, r.gzhead.time >> 24 & 255), ge(r, r.level === 9 ? 2 : r.strategy >= Ln || r.level < 2 ? 4 : 0), ge(r, r.gzhead.os & 255), r.gzhead.extra && r.gzhead.extra.length && (ge(r, r.gzhead.extra.length & 255), ge(r, r.gzhead.extra.length >> 8 & 255)), r.gzhead.hcrc && (e.adler = Pe(e.adler, r.pending_buf, r.pending, 0)), r.gzindex = 0, r.status = js;
    else if (ge(r, 0), ge(r, 0), ge(r, 0), ge(r, 0), ge(r, 0), ge(r, r.level === 9 ? 2 : r.strategy >= Ln || r.level < 2 ? 4 : 0), ge(r, rm), r.status = Qt, qe(e), r.pending !== 0)
      return r.last_flush = -1, je;
  }
  if (r.status === js) {
    if (r.gzhead.extra) {
      let i = r.pending, s = (r.gzhead.extra.length & 65535) - r.gzindex;
      for (; r.pending + s > r.pending_buf_size; ) {
        let o = r.pending_buf_size - r.pending;
        if (r.pending_buf.set(r.gzhead.extra.subarray(r.gzindex, r.gzindex + o), r.pending), r.pending = r.pending_buf_size, r.gzhead.hcrc && r.pending > i && (e.adler = Pe(e.adler, r.pending_buf, r.pending - i, i)), r.gzindex += o, qe(e), r.pending !== 0)
          return r.last_flush = -1, je;
        i = 0, s -= o;
      }
      let a = new Uint8Array(r.gzhead.extra);
      r.pending_buf.set(a.subarray(r.gzindex, r.gzindex + s), r.pending), r.pending += s, r.gzhead.hcrc && r.pending > i && (e.adler = Pe(e.adler, r.pending_buf, r.pending - i, i)), r.gzindex = 0;
    }
    r.status = Us;
  }
  if (r.status === Us) {
    if (r.gzhead.name) {
      let i = r.pending, s;
      do {
        if (r.pending === r.pending_buf_size) {
          if (r.gzhead.hcrc && r.pending > i && (e.adler = Pe(e.adler, r.pending_buf, r.pending - i, i)), qe(e), r.pending !== 0)
            return r.last_flush = -1, je;
          i = 0;
        }
        r.gzindex < r.gzhead.name.length ? s = r.gzhead.name.charCodeAt(r.gzindex++) & 255 : s = 0, ge(r, s);
      } while (s !== 0);
      r.gzhead.hcrc && r.pending > i && (e.adler = Pe(e.adler, r.pending_buf, r.pending - i, i)), r.gzindex = 0;
    }
    r.status = Fs;
  }
  if (r.status === Fs) {
    if (r.gzhead.comment) {
      let i = r.pending, s;
      do {
        if (r.pending === r.pending_buf_size) {
          if (r.gzhead.hcrc && r.pending > i && (e.adler = Pe(e.adler, r.pending_buf, r.pending - i, i)), qe(e), r.pending !== 0)
            return r.last_flush = -1, je;
          i = 0;
        }
        r.gzindex < r.gzhead.comment.length ? s = r.gzhead.comment.charCodeAt(r.gzindex++) & 255 : s = 0, ge(r, s);
      } while (s !== 0);
      r.gzhead.hcrc && r.pending > i && (e.adler = Pe(e.adler, r.pending_buf, r.pending - i, i));
    }
    r.status = Ls;
  }
  if (r.status === Ls) {
    if (r.gzhead.hcrc) {
      if (r.pending + 2 > r.pending_buf_size && (qe(e), r.pending !== 0))
        return r.last_flush = -1, je;
      ge(r, e.adler & 255), ge(r, e.adler >> 8 & 255), e.adler = 0;
    }
    if (r.status = Qt, qe(e), r.pending !== 0)
      return r.last_flush = -1, je;
  }
  if (e.avail_in !== 0 || r.lookahead !== 0 || t !== Ct && r.status !== qr) {
    let i = r.level === 0 ? bu(r, t) : r.strategy === Ln ? am(r, t) : r.strategy === Z0 ? sm(r, t) : Hr[r.level].func(r, t);
    if ((i === rr || i === $r) && (r.status = qr), i === Be || i === rr)
      return e.avail_out === 0 && (r.last_flush = -1), je;
    if (i === Pr && (t === U0 ? j0(r) : t !== Co && ($s(r, 0, 0, !1), t === F0 && (Ot(r.head), r.lookahead === 0 && (r.strstart = 0, r.block_start = 0, r.insert = 0))), qe(e), e.avail_out === 0))
      return r.last_flush = -1, je;
  }
  return t !== Qe ? je : r.wrap <= 0 ? No : (r.wrap === 2 ? (ge(r, e.adler & 255), ge(r, e.adler >> 8 & 255), ge(r, e.adler >> 16 & 255), ge(r, e.adler >> 24 & 255), ge(r, e.total_in & 255), ge(r, e.total_in >> 8 & 255), ge(r, e.total_in >> 16 & 255), ge(r, e.total_in >> 24 & 255)) : (Zr(r, e.adler >>> 16), Zr(r, e.adler & 65535)), qe(e), r.wrap > 0 && (r.wrap = -r.wrap), r.pending !== 0 ? je : No);
}, dm = (e) => {
  if (bn(e))
    return pt;
  const t = e.state.status;
  return e.state = null, t === Qt ? er(e, L0) : je;
}, fm = (e, t) => {
  let r = t.length;
  if (bn(e))
    return pt;
  const n = e.state, i = n.wrap;
  if (i === 2 || i === 1 && n.status !== Sr || n.lookahead)
    return pt;
  if (i === 1 && (e.adler = hn(e.adler, t, r, 0)), n.wrap = 0, r >= n.w_size) {
    i === 0 && (Ot(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0);
    let l = new Uint8Array(n.w_size);
    l.set(t.subarray(r - n.w_size, r), 0), t = l, r = n.w_size;
  }
  const s = e.avail_in, a = e.next_in, o = e.input;
  for (e.avail_in = r, e.next_in = 0, e.input = t, Ar(n); n.lookahead >= de; ) {
    let l = n.strstart, c = n.lookahead - (de - 1);
    do
      n.ins_h = Nt(n, n.ins_h, n.window[l + de - 1]), n.prev[l & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = l, l++;
    while (--c);
    n.strstart = l, n.lookahead = de - 1, Ar(n);
  }
  return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = de - 1, n.match_available = 0, e.next_in = a, e.input = o, e.avail_in = s, n.wrap = i, je;
};
var pm = um, gm = Eu, mm = ku, _m = yu, vm = cm, wm = hm, bm = dm, ym = fm, km = "pako deflate (from Nodeca project)", Yr = {
  deflateInit: pm,
  deflateInit2: gm,
  deflateReset: mm,
  deflateResetKeep: _m,
  deflateSetHeader: vm,
  deflate: wm,
  deflateEnd: bm,
  deflateSetDictionary: ym,
  deflateInfo: km
};
const Em = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
var xm = function(e) {
  const t = Array.prototype.slice.call(arguments, 1);
  for (; t.length; ) {
    const r = t.shift();
    if (r) {
      if (typeof r != "object")
        throw new TypeError(r + "must be non-object");
      for (const n in r)
        Em(r, n) && (e[n] = r[n]);
    }
  }
  return e;
}, Sm = (e) => {
  let t = 0;
  for (let n = 0, i = e.length; n < i; n++)
    t += e[n].length;
  const r = new Uint8Array(t);
  for (let n = 0, i = 0, s = e.length; n < s; n++) {
    let a = e[n];
    r.set(a, i), i += a.length;
  }
  return r;
}, yi = {
  assign: xm,
  flattenChunks: Sm
};
let xu = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  xu = !1;
}
const dn = new Uint8Array(256);
for (let e = 0; e < 256; e++)
  dn[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
dn[254] = dn[254] = 1;
var Am = (e) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(e);
  let t, r, n, i, s, a = e.length, o = 0;
  for (i = 0; i < a; i++)
    r = e.charCodeAt(i), (r & 64512) === 55296 && i + 1 < a && (n = e.charCodeAt(i + 1), (n & 64512) === 56320 && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++)), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
  for (t = new Uint8Array(o), s = 0, i = 0; s < o; i++)
    r = e.charCodeAt(i), (r & 64512) === 55296 && i + 1 < a && (n = e.charCodeAt(i + 1), (n & 64512) === 56320 && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++)), r < 128 ? t[s++] = r : r < 2048 ? (t[s++] = 192 | r >>> 6, t[s++] = 128 | r & 63) : r < 65536 ? (t[s++] = 224 | r >>> 12, t[s++] = 128 | r >>> 6 & 63, t[s++] = 128 | r & 63) : (t[s++] = 240 | r >>> 18, t[s++] = 128 | r >>> 12 & 63, t[s++] = 128 | r >>> 6 & 63, t[s++] = 128 | r & 63);
  return t;
};
const Tm = (e, t) => {
  if (t < 65534 && e.subarray && xu)
    return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
  let r = "";
  for (let n = 0; n < t; n++)
    r += String.fromCharCode(e[n]);
  return r;
};
var Om = (e, t) => {
  const r = t || e.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(e.subarray(0, t));
  let n, i;
  const s = new Array(r * 2);
  for (i = 0, n = 0; n < r; ) {
    let a = e[n++];
    if (a < 128) {
      s[i++] = a;
      continue;
    }
    let o = dn[a];
    if (o > 4) {
      s[i++] = 65533, n += o - 1;
      continue;
    }
    for (a &= o === 2 ? 31 : o === 3 ? 15 : 7; o > 1 && n < r; )
      a = a << 6 | e[n++] & 63, o--;
    if (o > 1) {
      s[i++] = 65533;
      continue;
    }
    a < 65536 ? s[i++] = a : (a -= 65536, s[i++] = 55296 | a >> 10 & 1023, s[i++] = 56320 | a & 1023);
  }
  return Tm(s, i);
}, Rm = (e, t) => {
  t = t || e.length, t > e.length && (t = e.length);
  let r = t - 1;
  for (; r >= 0 && (e[r] & 192) === 128; )
    r--;
  return r < 0 || r === 0 ? t : r + dn[e[r]] > t ? r : t;
}, fn = {
  string2buf: Am,
  buf2string: Om,
  utf8border: Rm
};
function Im() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var Su = Im;
const Au = Object.prototype.toString, {
  Z_NO_FLUSH: Cm,
  Z_SYNC_FLUSH: Nm,
  Z_FULL_FLUSH: Pm,
  Z_FINISH: $m,
  Z_OK: li,
  Z_STREAM_END: zm,
  Z_DEFAULT_COMPRESSION: jm,
  Z_DEFAULT_STRATEGY: Um,
  Z_DEFLATED: Fm
} = wn;
function yn(e) {
  this.options = yi.assign({
    level: jm,
    method: Fm,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Um
  }, e || {});
  let t = this.options;
  t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Su(), this.strm.avail_out = 0;
  let r = Yr.deflateInit2(
    this.strm,
    t.level,
    t.method,
    t.windowBits,
    t.memLevel,
    t.strategy
  );
  if (r !== li)
    throw new Error(tr[r]);
  if (t.header && Yr.deflateSetHeader(this.strm, t.header), t.dictionary) {
    let n;
    if (typeof t.dictionary == "string" ? n = fn.string2buf(t.dictionary) : Au.call(t.dictionary) === "[object ArrayBuffer]" ? n = new Uint8Array(t.dictionary) : n = t.dictionary, r = Yr.deflateSetDictionary(this.strm, n), r !== li)
      throw new Error(tr[r]);
    this._dict_set = !0;
  }
}
yn.prototype.push = function(e, t) {
  const r = this.strm, n = this.options.chunkSize;
  let i, s;
  if (this.ended)
    return !1;
  for (t === ~~t ? s = t : s = t === !0 ? $m : Cm, typeof e == "string" ? r.input = fn.string2buf(e) : Au.call(e) === "[object ArrayBuffer]" ? r.input = new Uint8Array(e) : r.input = e, r.next_in = 0, r.avail_in = r.input.length; ; ) {
    if (r.avail_out === 0 && (r.output = new Uint8Array(n), r.next_out = 0, r.avail_out = n), (s === Nm || s === Pm) && r.avail_out <= 6) {
      this.onData(r.output.subarray(0, r.next_out)), r.avail_out = 0;
      continue;
    }
    if (i = Yr.deflate(r, s), i === zm)
      return r.next_out > 0 && this.onData(r.output.subarray(0, r.next_out)), i = Yr.deflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === li;
    if (r.avail_out === 0) {
      this.onData(r.output);
      continue;
    }
    if (s > 0 && r.next_out > 0) {
      this.onData(r.output.subarray(0, r.next_out)), r.avail_out = 0;
      continue;
    }
    if (r.avail_in === 0) break;
  }
  return !0;
};
yn.prototype.onData = function(e) {
  this.chunks.push(e);
};
yn.prototype.onEnd = function(e) {
  e === li && (this.result = yi.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function fa(e, t) {
  const r = new yn(t);
  if (r.push(e, !0), r.err)
    throw r.msg || tr[r.err];
  return r.result;
}
function Lm(e, t) {
  return t = t || {}, t.raw = !0, fa(e, t);
}
function Bm(e, t) {
  return t = t || {}, t.gzip = !0, fa(e, t);
}
var Dm = yn, Zm = fa, Mm = Lm, Vm = Bm, Wm = {
  Deflate: Dm,
  deflate: Zm,
  deflateRaw: Mm,
  gzip: Vm
};
const Bn = 16209, qm = 16191;
var Hm = function(t, r) {
  let n, i, s, a, o, l, c, u, d, f, h, g, m, v, p, _, w, A, k, E, x, R, S, I;
  const P = t.state;
  n = t.next_in, S = t.input, i = n + (t.avail_in - 5), s = t.next_out, I = t.output, a = s - (r - t.avail_out), o = s + (t.avail_out - 257), l = P.dmax, c = P.wsize, u = P.whave, d = P.wnext, f = P.window, h = P.hold, g = P.bits, m = P.lencode, v = P.distcode, p = (1 << P.lenbits) - 1, _ = (1 << P.distbits) - 1;
  e:
    do {
      g < 15 && (h += S[n++] << g, g += 8, h += S[n++] << g, g += 8), w = m[h & p];
      t:
        for (; ; ) {
          if (A = w >>> 24, h >>>= A, g -= A, A = w >>> 16 & 255, A === 0)
            I[s++] = w & 65535;
          else if (A & 16) {
            k = w & 65535, A &= 15, A && (g < A && (h += S[n++] << g, g += 8), k += h & (1 << A) - 1, h >>>= A, g -= A), g < 15 && (h += S[n++] << g, g += 8, h += S[n++] << g, g += 8), w = v[h & _];
            r:
              for (; ; ) {
                if (A = w >>> 24, h >>>= A, g -= A, A = w >>> 16 & 255, A & 16) {
                  if (E = w & 65535, A &= 15, g < A && (h += S[n++] << g, g += 8, g < A && (h += S[n++] << g, g += 8)), E += h & (1 << A) - 1, E > l) {
                    t.msg = "invalid distance too far back", P.mode = Bn;
                    break e;
                  }
                  if (h >>>= A, g -= A, A = s - a, E > A) {
                    if (A = E - A, A > u && P.sane) {
                      t.msg = "invalid distance too far back", P.mode = Bn;
                      break e;
                    }
                    if (x = 0, R = f, d === 0) {
                      if (x += c - A, A < k) {
                        k -= A;
                        do
                          I[s++] = f[x++];
                        while (--A);
                        x = s - E, R = I;
                      }
                    } else if (d < A) {
                      if (x += c + d - A, A -= d, A < k) {
                        k -= A;
                        do
                          I[s++] = f[x++];
                        while (--A);
                        if (x = 0, d < k) {
                          A = d, k -= A;
                          do
                            I[s++] = f[x++];
                          while (--A);
                          x = s - E, R = I;
                        }
                      }
                    } else if (x += d - A, A < k) {
                      k -= A;
                      do
                        I[s++] = f[x++];
                      while (--A);
                      x = s - E, R = I;
                    }
                    for (; k > 2; )
                      I[s++] = R[x++], I[s++] = R[x++], I[s++] = R[x++], k -= 3;
                    k && (I[s++] = R[x++], k > 1 && (I[s++] = R[x++]));
                  } else {
                    x = s - E;
                    do
                      I[s++] = I[x++], I[s++] = I[x++], I[s++] = I[x++], k -= 3;
                    while (k > 2);
                    k && (I[s++] = I[x++], k > 1 && (I[s++] = I[x++]));
                  }
                } else if ((A & 64) === 0) {
                  w = v[(w & 65535) + (h & (1 << A) - 1)];
                  continue r;
                } else {
                  t.msg = "invalid distance code", P.mode = Bn;
                  break e;
                }
                break;
              }
          } else if ((A & 64) === 0) {
            w = m[(w & 65535) + (h & (1 << A) - 1)];
            continue t;
          } else if (A & 32) {
            P.mode = qm;
            break e;
          } else {
            t.msg = "invalid literal/length code", P.mode = Bn;
            break e;
          }
          break;
        }
    } while (n < i && s < o);
  k = g >> 3, n -= k, g -= k << 3, h &= (1 << g) - 1, t.next_in = n, t.next_out = s, t.avail_in = n < i ? 5 + (i - n) : 5 - (n - i), t.avail_out = s < o ? 257 + (o - s) : 257 - (s - o), P.hold = h, P.bits = g;
};
const pr = 15, $o = 852, zo = 592, jo = 0, ns = 1, Uo = 2, Km = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), Gm = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), Jm = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), Ym = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), Xm = (e, t, r, n, i, s, a, o) => {
  const l = o.bits;
  let c = 0, u = 0, d = 0, f = 0, h = 0, g = 0, m = 0, v = 0, p = 0, _ = 0, w, A, k, E, x, R = null, S;
  const I = new Uint16Array(pr + 1), P = new Uint16Array(pr + 1);
  let T = null, O, b, z;
  for (c = 0; c <= pr; c++)
    I[c] = 0;
  for (u = 0; u < n; u++)
    I[t[r + u]]++;
  for (h = l, f = pr; f >= 1 && I[f] === 0; f--)
    ;
  if (h > f && (h = f), f === 0)
    return i[s++] = 1 << 24 | 64 << 16 | 0, i[s++] = 1 << 24 | 64 << 16 | 0, o.bits = 1, 0;
  for (d = 1; d < f && I[d] === 0; d++)
    ;
  for (h < d && (h = d), v = 1, c = 1; c <= pr; c++)
    if (v <<= 1, v -= I[c], v < 0)
      return -1;
  if (v > 0 && (e === jo || f !== 1))
    return -1;
  for (P[1] = 0, c = 1; c < pr; c++)
    P[c + 1] = P[c] + I[c];
  for (u = 0; u < n; u++)
    t[r + u] !== 0 && (a[P[t[r + u]]++] = u);
  if (e === jo ? (R = T = a, S = 20) : e === ns ? (R = Km, T = Gm, S = 257) : (R = Jm, T = Ym, S = 0), _ = 0, u = 0, c = d, x = s, g = h, m = 0, k = -1, p = 1 << h, E = p - 1, e === ns && p > $o || e === Uo && p > zo)
    return 1;
  for (; ; ) {
    O = c - m, a[u] + 1 < S ? (b = 0, z = a[u]) : a[u] >= S ? (b = T[a[u] - S], z = R[a[u] - S]) : (b = 96, z = 0), w = 1 << c - m, A = 1 << g, d = A;
    do
      A -= w, i[x + (_ >> m) + A] = O << 24 | b << 16 | z | 0;
    while (A !== 0);
    for (w = 1 << c - 1; _ & w; )
      w >>= 1;
    if (w !== 0 ? (_ &= w - 1, _ += w) : _ = 0, u++, --I[c] === 0) {
      if (c === f)
        break;
      c = t[r + a[u]];
    }
    if (c > h && (_ & E) !== k) {
      for (m === 0 && (m = h), x += d, g = c - m, v = 1 << g; g + m < f && (v -= I[g + m], !(v <= 0)); )
        g++, v <<= 1;
      if (p += 1 << g, e === ns && p > $o || e === Uo && p > zo)
        return 1;
      k = _ & E, i[k] = h << 24 | g << 16 | x - s | 0;
    }
  }
  return _ !== 0 && (i[x + _] = c - m << 24 | 64 << 16 | 0), o.bits = h, 0;
};
var Xr = Xm;
const Qm = 0, Tu = 1, Ou = 2, {
  Z_FINISH: Fo,
  Z_BLOCK: e_,
  Z_TREES: Dn,
  Z_OK: nr,
  Z_STREAM_END: t_,
  Z_NEED_DICT: r_,
  Z_STREAM_ERROR: et,
  Z_DATA_ERROR: Ru,
  Z_MEM_ERROR: Iu,
  Z_BUF_ERROR: n_,
  Z_DEFLATED: Lo
} = wn, ki = 16180, Bo = 16181, Do = 16182, Zo = 16183, Mo = 16184, Vo = 16185, Wo = 16186, qo = 16187, Ho = 16188, Ko = 16189, ci = 16190, wt = 16191, is = 16192, Go = 16193, ss = 16194, Jo = 16195, Yo = 16196, Xo = 16197, Qo = 16198, Zn = 16199, Mn = 16200, el = 16201, tl = 16202, rl = 16203, nl = 16204, il = 16205, as = 16206, sl = 16207, al = 16208, be = 16209, Cu = 16210, Nu = 16211, i_ = 852, s_ = 592, a_ = 15, o_ = a_, ol = (e) => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
function l_() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const ir = (e) => {
  if (!e)
    return 1;
  const t = e.state;
  return !t || t.strm !== e || t.mode < ki || t.mode > Nu ? 1 : 0;
}, Pu = (e) => {
  if (ir(e))
    return et;
  const t = e.state;
  return e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = t.wrap & 1), t.mode = ki, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(i_), t.distcode = t.distdyn = new Int32Array(s_), t.sane = 1, t.back = -1, nr;
}, $u = (e) => {
  if (ir(e))
    return et;
  const t = e.state;
  return t.wsize = 0, t.whave = 0, t.wnext = 0, Pu(e);
}, zu = (e, t) => {
  let r;
  if (ir(e))
    return et;
  const n = e.state;
  return t < 0 ? (r = 0, t = -t) : (r = (t >> 4) + 5, t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? et : (n.window !== null && n.wbits !== t && (n.window = null), n.wrap = r, n.wbits = t, $u(e));
}, ju = (e, t) => {
  if (!e)
    return et;
  const r = new l_();
  e.state = r, r.strm = e, r.window = null, r.mode = ki;
  const n = zu(e, t);
  return n !== nr && (e.state = null), n;
}, c_ = (e) => ju(e, o_);
let ll = !0, os, ls;
const u_ = (e) => {
  if (ll) {
    os = new Int32Array(512), ls = new Int32Array(32);
    let t = 0;
    for (; t < 144; )
      e.lens[t++] = 8;
    for (; t < 256; )
      e.lens[t++] = 9;
    for (; t < 280; )
      e.lens[t++] = 7;
    for (; t < 288; )
      e.lens[t++] = 8;
    for (Xr(Tu, e.lens, 0, 288, os, 0, e.work, { bits: 9 }), t = 0; t < 32; )
      e.lens[t++] = 5;
    Xr(Ou, e.lens, 0, 32, ls, 0, e.work, { bits: 5 }), ll = !1;
  }
  e.lencode = os, e.lenbits = 9, e.distcode = ls, e.distbits = 5;
}, Uu = (e, t, r, n) => {
  let i;
  const s = e.state;
  return s.window === null && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new Uint8Array(s.wsize)), n >= s.wsize ? (s.window.set(t.subarray(r - s.wsize, r), 0), s.wnext = 0, s.whave = s.wsize) : (i = s.wsize - s.wnext, i > n && (i = n), s.window.set(t.subarray(r - n, r - n + i), s.wnext), n -= i, n ? (s.window.set(t.subarray(r - n, r), 0), s.wnext = n, s.whave = s.wsize) : (s.wnext += i, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += i))), 0;
}, h_ = (e, t) => {
  let r, n, i, s, a, o, l, c, u, d, f, h, g, m, v = 0, p, _, w, A, k, E, x, R;
  const S = new Uint8Array(4);
  let I, P;
  const T = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (ir(e) || !e.output || !e.input && e.avail_in !== 0)
    return et;
  r = e.state, r.mode === wt && (r.mode = is), a = e.next_out, i = e.output, l = e.avail_out, s = e.next_in, n = e.input, o = e.avail_in, c = r.hold, u = r.bits, d = o, f = l, R = nr;
  e:
    for (; ; )
      switch (r.mode) {
        case ki:
          if (r.wrap === 0) {
            r.mode = is;
            break;
          }
          for (; u < 16; ) {
            if (o === 0)
              break e;
            o--, c += n[s++] << u, u += 8;
          }
          if (r.wrap & 2 && c === 35615) {
            r.wbits === 0 && (r.wbits = 15), r.check = 0, S[0] = c & 255, S[1] = c >>> 8 & 255, r.check = Pe(r.check, S, 2, 0), c = 0, u = 0, r.mode = Bo;
            break;
          }
          if (r.head && (r.head.done = !1), !(r.wrap & 1) || /* check if zlib header allowed */
          (((c & 255) << 8) + (c >> 8)) % 31) {
            e.msg = "incorrect header check", r.mode = be;
            break;
          }
          if ((c & 15) !== Lo) {
            e.msg = "unknown compression method", r.mode = be;
            break;
          }
          if (c >>>= 4, u -= 4, x = (c & 15) + 8, r.wbits === 0 && (r.wbits = x), x > 15 || x > r.wbits) {
            e.msg = "invalid window size", r.mode = be;
            break;
          }
          r.dmax = 1 << r.wbits, r.flags = 0, e.adler = r.check = 1, r.mode = c & 512 ? Ko : wt, c = 0, u = 0;
          break;
        case Bo:
          for (; u < 16; ) {
            if (o === 0)
              break e;
            o--, c += n[s++] << u, u += 8;
          }
          if (r.flags = c, (r.flags & 255) !== Lo) {
            e.msg = "unknown compression method", r.mode = be;
            break;
          }
          if (r.flags & 57344) {
            e.msg = "unknown header flags set", r.mode = be;
            break;
          }
          r.head && (r.head.text = c >> 8 & 1), r.flags & 512 && r.wrap & 4 && (S[0] = c & 255, S[1] = c >>> 8 & 255, r.check = Pe(r.check, S, 2, 0)), c = 0, u = 0, r.mode = Do;
        /* falls through */
        case Do:
          for (; u < 32; ) {
            if (o === 0)
              break e;
            o--, c += n[s++] << u, u += 8;
          }
          r.head && (r.head.time = c), r.flags & 512 && r.wrap & 4 && (S[0] = c & 255, S[1] = c >>> 8 & 255, S[2] = c >>> 16 & 255, S[3] = c >>> 24 & 255, r.check = Pe(r.check, S, 4, 0)), c = 0, u = 0, r.mode = Zo;
        /* falls through */
        case Zo:
          for (; u < 16; ) {
            if (o === 0)
              break e;
            o--, c += n[s++] << u, u += 8;
          }
          r.head && (r.head.xflags = c & 255, r.head.os = c >> 8), r.flags & 512 && r.wrap & 4 && (S[0] = c & 255, S[1] = c >>> 8 & 255, r.check = Pe(r.check, S, 2, 0)), c = 0, u = 0, r.mode = Mo;
        /* falls through */
        case Mo:
          if (r.flags & 1024) {
            for (; u < 16; ) {
              if (o === 0)
                break e;
              o--, c += n[s++] << u, u += 8;
            }
            r.length = c, r.head && (r.head.extra_len = c), r.flags & 512 && r.wrap & 4 && (S[0] = c & 255, S[1] = c >>> 8 & 255, r.check = Pe(r.check, S, 2, 0)), c = 0, u = 0;
          } else r.head && (r.head.extra = null);
          r.mode = Vo;
        /* falls through */
        case Vo:
          if (r.flags & 1024 && (h = r.length, h > o && (h = o), h && (r.head && (x = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Uint8Array(r.head.extra_len)), r.head.extra.set(
            n.subarray(
              s,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              s + h
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            x
          )), r.flags & 512 && r.wrap & 4 && (r.check = Pe(r.check, n, h, s)), o -= h, s += h, r.length -= h), r.length))
            break e;
          r.length = 0, r.mode = Wo;
        /* falls through */
        case Wo:
          if (r.flags & 2048) {
            if (o === 0)
              break e;
            h = 0;
            do
              x = n[s + h++], r.head && x && r.length < 65536 && (r.head.name += String.fromCharCode(x));
            while (x && h < o);
            if (r.flags & 512 && r.wrap & 4 && (r.check = Pe(r.check, n, h, s)), o -= h, s += h, x)
              break e;
          } else r.head && (r.head.name = null);
          r.length = 0, r.mode = qo;
        /* falls through */
        case qo:
          if (r.flags & 4096) {
            if (o === 0)
              break e;
            h = 0;
            do
              x = n[s + h++], r.head && x && r.length < 65536 && (r.head.comment += String.fromCharCode(x));
            while (x && h < o);
            if (r.flags & 512 && r.wrap & 4 && (r.check = Pe(r.check, n, h, s)), o -= h, s += h, x)
              break e;
          } else r.head && (r.head.comment = null);
          r.mode = Ho;
        /* falls through */
        case Ho:
          if (r.flags & 512) {
            for (; u < 16; ) {
              if (o === 0)
                break e;
              o--, c += n[s++] << u, u += 8;
            }
            if (r.wrap & 4 && c !== (r.check & 65535)) {
              e.msg = "header crc mismatch", r.mode = be;
              break;
            }
            c = 0, u = 0;
          }
          r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = wt;
          break;
        case Ko:
          for (; u < 32; ) {
            if (o === 0)
              break e;
            o--, c += n[s++] << u, u += 8;
          }
          e.adler = r.check = ol(c), c = 0, u = 0, r.mode = ci;
        /* falls through */
        case ci:
          if (r.havedict === 0)
            return e.next_out = a, e.avail_out = l, e.next_in = s, e.avail_in = o, r.hold = c, r.bits = u, r_;
          e.adler = r.check = 1, r.mode = wt;
        /* falls through */
        case wt:
          if (t === e_ || t === Dn)
            break e;
        /* falls through */
        case is:
          if (r.last) {
            c >>>= u & 7, u -= u & 7, r.mode = as;
            break;
          }
          for (; u < 3; ) {
            if (o === 0)
              break e;
            o--, c += n[s++] << u, u += 8;
          }
          switch (r.last = c & 1, c >>>= 1, u -= 1, c & 3) {
            case 0:
              r.mode = Go;
              break;
            case 1:
              if (u_(r), r.mode = Zn, t === Dn) {
                c >>>= 2, u -= 2;
                break e;
              }
              break;
            case 2:
              r.mode = Yo;
              break;
            case 3:
              e.msg = "invalid block type", r.mode = be;
          }
          c >>>= 2, u -= 2;
          break;
        case Go:
          for (c >>>= u & 7, u -= u & 7; u < 32; ) {
            if (o === 0)
              break e;
            o--, c += n[s++] << u, u += 8;
          }
          if ((c & 65535) !== (c >>> 16 ^ 65535)) {
            e.msg = "invalid stored block lengths", r.mode = be;
            break;
          }
          if (r.length = c & 65535, c = 0, u = 0, r.mode = ss, t === Dn)
            break e;
        /* falls through */
        case ss:
          r.mode = Jo;
        /* falls through */
        case Jo:
          if (h = r.length, h) {
            if (h > o && (h = o), h > l && (h = l), h === 0)
              break e;
            i.set(n.subarray(s, s + h), a), o -= h, s += h, l -= h, a += h, r.length -= h;
            break;
          }
          r.mode = wt;
          break;
        case Yo:
          for (; u < 14; ) {
            if (o === 0)
              break e;
            o--, c += n[s++] << u, u += 8;
          }
          if (r.nlen = (c & 31) + 257, c >>>= 5, u -= 5, r.ndist = (c & 31) + 1, c >>>= 5, u -= 5, r.ncode = (c & 15) + 4, c >>>= 4, u -= 4, r.nlen > 286 || r.ndist > 30) {
            e.msg = "too many length or distance symbols", r.mode = be;
            break;
          }
          r.have = 0, r.mode = Xo;
        /* falls through */
        case Xo:
          for (; r.have < r.ncode; ) {
            for (; u < 3; ) {
              if (o === 0)
                break e;
              o--, c += n[s++] << u, u += 8;
            }
            r.lens[T[r.have++]] = c & 7, c >>>= 3, u -= 3;
          }
          for (; r.have < 19; )
            r.lens[T[r.have++]] = 0;
          if (r.lencode = r.lendyn, r.lenbits = 7, I = { bits: r.lenbits }, R = Xr(Qm, r.lens, 0, 19, r.lencode, 0, r.work, I), r.lenbits = I.bits, R) {
            e.msg = "invalid code lengths set", r.mode = be;
            break;
          }
          r.have = 0, r.mode = Qo;
        /* falls through */
        case Qo:
          for (; r.have < r.nlen + r.ndist; ) {
            for (; v = r.lencode[c & (1 << r.lenbits) - 1], p = v >>> 24, _ = v >>> 16 & 255, w = v & 65535, !(p <= u); ) {
              if (o === 0)
                break e;
              o--, c += n[s++] << u, u += 8;
            }
            if (w < 16)
              c >>>= p, u -= p, r.lens[r.have++] = w;
            else {
              if (w === 16) {
                for (P = p + 2; u < P; ) {
                  if (o === 0)
                    break e;
                  o--, c += n[s++] << u, u += 8;
                }
                if (c >>>= p, u -= p, r.have === 0) {
                  e.msg = "invalid bit length repeat", r.mode = be;
                  break;
                }
                x = r.lens[r.have - 1], h = 3 + (c & 3), c >>>= 2, u -= 2;
              } else if (w === 17) {
                for (P = p + 3; u < P; ) {
                  if (o === 0)
                    break e;
                  o--, c += n[s++] << u, u += 8;
                }
                c >>>= p, u -= p, x = 0, h = 3 + (c & 7), c >>>= 3, u -= 3;
              } else {
                for (P = p + 7; u < P; ) {
                  if (o === 0)
                    break e;
                  o--, c += n[s++] << u, u += 8;
                }
                c >>>= p, u -= p, x = 0, h = 11 + (c & 127), c >>>= 7, u -= 7;
              }
              if (r.have + h > r.nlen + r.ndist) {
                e.msg = "invalid bit length repeat", r.mode = be;
                break;
              }
              for (; h--; )
                r.lens[r.have++] = x;
            }
          }
          if (r.mode === be)
            break;
          if (r.lens[256] === 0) {
            e.msg = "invalid code -- missing end-of-block", r.mode = be;
            break;
          }
          if (r.lenbits = 9, I = { bits: r.lenbits }, R = Xr(Tu, r.lens, 0, r.nlen, r.lencode, 0, r.work, I), r.lenbits = I.bits, R) {
            e.msg = "invalid literal/lengths set", r.mode = be;
            break;
          }
          if (r.distbits = 6, r.distcode = r.distdyn, I = { bits: r.distbits }, R = Xr(Ou, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, I), r.distbits = I.bits, R) {
            e.msg = "invalid distances set", r.mode = be;
            break;
          }
          if (r.mode = Zn, t === Dn)
            break e;
        /* falls through */
        case Zn:
          r.mode = Mn;
        /* falls through */
        case Mn:
          if (o >= 6 && l >= 258) {
            e.next_out = a, e.avail_out = l, e.next_in = s, e.avail_in = o, r.hold = c, r.bits = u, Hm(e, f), a = e.next_out, i = e.output, l = e.avail_out, s = e.next_in, n = e.input, o = e.avail_in, c = r.hold, u = r.bits, r.mode === wt && (r.back = -1);
            break;
          }
          for (r.back = 0; v = r.lencode[c & (1 << r.lenbits) - 1], p = v >>> 24, _ = v >>> 16 & 255, w = v & 65535, !(p <= u); ) {
            if (o === 0)
              break e;
            o--, c += n[s++] << u, u += 8;
          }
          if (_ && (_ & 240) === 0) {
            for (A = p, k = _, E = w; v = r.lencode[E + ((c & (1 << A + k) - 1) >> A)], p = v >>> 24, _ = v >>> 16 & 255, w = v & 65535, !(A + p <= u); ) {
              if (o === 0)
                break e;
              o--, c += n[s++] << u, u += 8;
            }
            c >>>= A, u -= A, r.back += A;
          }
          if (c >>>= p, u -= p, r.back += p, r.length = w, _ === 0) {
            r.mode = il;
            break;
          }
          if (_ & 32) {
            r.back = -1, r.mode = wt;
            break;
          }
          if (_ & 64) {
            e.msg = "invalid literal/length code", r.mode = be;
            break;
          }
          r.extra = _ & 15, r.mode = el;
        /* falls through */
        case el:
          if (r.extra) {
            for (P = r.extra; u < P; ) {
              if (o === 0)
                break e;
              o--, c += n[s++] << u, u += 8;
            }
            r.length += c & (1 << r.extra) - 1, c >>>= r.extra, u -= r.extra, r.back += r.extra;
          }
          r.was = r.length, r.mode = tl;
        /* falls through */
        case tl:
          for (; v = r.distcode[c & (1 << r.distbits) - 1], p = v >>> 24, _ = v >>> 16 & 255, w = v & 65535, !(p <= u); ) {
            if (o === 0)
              break e;
            o--, c += n[s++] << u, u += 8;
          }
          if ((_ & 240) === 0) {
            for (A = p, k = _, E = w; v = r.distcode[E + ((c & (1 << A + k) - 1) >> A)], p = v >>> 24, _ = v >>> 16 & 255, w = v & 65535, !(A + p <= u); ) {
              if (o === 0)
                break e;
              o--, c += n[s++] << u, u += 8;
            }
            c >>>= A, u -= A, r.back += A;
          }
          if (c >>>= p, u -= p, r.back += p, _ & 64) {
            e.msg = "invalid distance code", r.mode = be;
            break;
          }
          r.offset = w, r.extra = _ & 15, r.mode = rl;
        /* falls through */
        case rl:
          if (r.extra) {
            for (P = r.extra; u < P; ) {
              if (o === 0)
                break e;
              o--, c += n[s++] << u, u += 8;
            }
            r.offset += c & (1 << r.extra) - 1, c >>>= r.extra, u -= r.extra, r.back += r.extra;
          }
          if (r.offset > r.dmax) {
            e.msg = "invalid distance too far back", r.mode = be;
            break;
          }
          r.mode = nl;
        /* falls through */
        case nl:
          if (l === 0)
            break e;
          if (h = f - l, r.offset > h) {
            if (h = r.offset - h, h > r.whave && r.sane) {
              e.msg = "invalid distance too far back", r.mode = be;
              break;
            }
            h > r.wnext ? (h -= r.wnext, g = r.wsize - h) : g = r.wnext - h, h > r.length && (h = r.length), m = r.window;
          } else
            m = i, g = a - r.offset, h = r.length;
          h > l && (h = l), l -= h, r.length -= h;
          do
            i[a++] = m[g++];
          while (--h);
          r.length === 0 && (r.mode = Mn);
          break;
        case il:
          if (l === 0)
            break e;
          i[a++] = r.length, l--, r.mode = Mn;
          break;
        case as:
          if (r.wrap) {
            for (; u < 32; ) {
              if (o === 0)
                break e;
              o--, c |= n[s++] << u, u += 8;
            }
            if (f -= l, e.total_out += f, r.total += f, r.wrap & 4 && f && (e.adler = r.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            r.flags ? Pe(r.check, i, f, a - f) : hn(r.check, i, f, a - f)), f = l, r.wrap & 4 && (r.flags ? c : ol(c)) !== r.check) {
              e.msg = "incorrect data check", r.mode = be;
              break;
            }
            c = 0, u = 0;
          }
          r.mode = sl;
        /* falls through */
        case sl:
          if (r.wrap && r.flags) {
            for (; u < 32; ) {
              if (o === 0)
                break e;
              o--, c += n[s++] << u, u += 8;
            }
            if (r.wrap & 4 && c !== (r.total & 4294967295)) {
              e.msg = "incorrect length check", r.mode = be;
              break;
            }
            c = 0, u = 0;
          }
          r.mode = al;
        /* falls through */
        case al:
          R = t_;
          break e;
        case be:
          R = Ru;
          break e;
        case Cu:
          return Iu;
        case Nu:
        /* falls through */
        default:
          return et;
      }
  return e.next_out = a, e.avail_out = l, e.next_in = s, e.avail_in = o, r.hold = c, r.bits = u, (r.wsize || f !== e.avail_out && r.mode < be && (r.mode < as || t !== Fo)) && Uu(e, e.output, e.next_out, f - e.avail_out), d -= e.avail_in, f -= e.avail_out, e.total_in += d, e.total_out += f, r.total += f, r.wrap & 4 && f && (e.adler = r.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  r.flags ? Pe(r.check, i, f, e.next_out - f) : hn(r.check, i, f, e.next_out - f)), e.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === wt ? 128 : 0) + (r.mode === Zn || r.mode === ss ? 256 : 0), (d === 0 && f === 0 || t === Fo) && R === nr && (R = n_), R;
}, d_ = (e) => {
  if (ir(e))
    return et;
  let t = e.state;
  return t.window && (t.window = null), e.state = null, nr;
}, f_ = (e, t) => {
  if (ir(e))
    return et;
  const r = e.state;
  return (r.wrap & 2) === 0 ? et : (r.head = t, t.done = !1, nr);
}, p_ = (e, t) => {
  const r = t.length;
  let n, i, s;
  return ir(e) || (n = e.state, n.wrap !== 0 && n.mode !== ci) ? et : n.mode === ci && (i = 1, i = hn(i, t, r, 0), i !== n.check) ? Ru : (s = Uu(e, t, r, r), s ? (n.mode = Cu, Iu) : (n.havedict = 1, nr));
};
var g_ = $u, m_ = zu, __ = Pu, v_ = c_, w_ = ju, b_ = h_, y_ = d_, k_ = f_, E_ = p_, x_ = "pako inflate (from Nodeca project)", kt = {
  inflateReset: g_,
  inflateReset2: m_,
  inflateResetKeep: __,
  inflateInit: v_,
  inflateInit2: w_,
  inflate: b_,
  inflateEnd: y_,
  inflateGetHeader: k_,
  inflateSetDictionary: E_,
  inflateInfo: x_
};
function S_() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var A_ = S_;
const Fu = Object.prototype.toString, {
  Z_NO_FLUSH: T_,
  Z_FINISH: O_,
  Z_OK: pn,
  Z_STREAM_END: cs,
  Z_NEED_DICT: us,
  Z_STREAM_ERROR: R_,
  Z_DATA_ERROR: cl,
  Z_MEM_ERROR: I_
} = wn;
function kn(e) {
  this.options = yi.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, e || {});
  const t = this.options;
  t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(e && e.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15) === 0 && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Su(), this.strm.avail_out = 0;
  let r = kt.inflateInit2(
    this.strm,
    t.windowBits
  );
  if (r !== pn)
    throw new Error(tr[r]);
  if (this.header = new A_(), kt.inflateGetHeader(this.strm, this.header), t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = fn.string2buf(t.dictionary) : Fu.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (r = kt.inflateSetDictionary(this.strm, t.dictionary), r !== pn)))
    throw new Error(tr[r]);
}
kn.prototype.push = function(e, t) {
  const r = this.strm, n = this.options.chunkSize, i = this.options.dictionary;
  let s, a, o;
  if (this.ended) return !1;
  for (t === ~~t ? a = t : a = t === !0 ? O_ : T_, Fu.call(e) === "[object ArrayBuffer]" ? r.input = new Uint8Array(e) : r.input = e, r.next_in = 0, r.avail_in = r.input.length; ; ) {
    for (r.avail_out === 0 && (r.output = new Uint8Array(n), r.next_out = 0, r.avail_out = n), s = kt.inflate(r, a), s === us && i && (s = kt.inflateSetDictionary(r, i), s === pn ? s = kt.inflate(r, a) : s === cl && (s = us)); r.avail_in > 0 && s === cs && r.state.wrap > 0 && e[r.next_in] !== 0; )
      kt.inflateReset(r), s = kt.inflate(r, a);
    switch (s) {
      case R_:
      case cl:
      case us:
      case I_:
        return this.onEnd(s), this.ended = !0, !1;
    }
    if (o = r.avail_out, r.next_out && (r.avail_out === 0 || s === cs))
      if (this.options.to === "string") {
        let l = fn.utf8border(r.output, r.next_out), c = r.next_out - l, u = fn.buf2string(r.output, l);
        r.next_out = c, r.avail_out = n - c, c && r.output.set(r.output.subarray(l, l + c), 0), this.onData(u);
      } else
        this.onData(r.output.length === r.next_out ? r.output : r.output.subarray(0, r.next_out));
    if (!(s === pn && o === 0)) {
      if (s === cs)
        return s = kt.inflateEnd(this.strm), this.onEnd(s), this.ended = !0, !0;
      if (r.avail_in === 0) break;
    }
  }
  return !0;
};
kn.prototype.onData = function(e) {
  this.chunks.push(e);
};
kn.prototype.onEnd = function(e) {
  e === pn && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = yi.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function pa(e, t) {
  const r = new kn(t);
  if (r.push(e), r.err) throw r.msg || tr[r.err];
  return r.result;
}
function C_(e, t) {
  return t = t || {}, t.raw = !0, pa(e, t);
}
var N_ = kn, P_ = pa, $_ = C_, z_ = pa, j_ = {
  Inflate: N_,
  inflate: P_,
  inflateRaw: $_,
  ungzip: z_
};
const { Deflate: U_, deflate: F_, deflateRaw: L_, gzip: B_ } = Wm, { Inflate: D_, inflate: Z_, inflateRaw: M_, ungzip: V_ } = j_;
var W_ = U_, q_ = F_, H_ = L_, K_ = B_, G_ = D_, J_ = Z_, Y_ = M_, X_ = V_, Q_ = wn, ul = {
  Deflate: W_,
  deflate: q_,
  deflateRaw: H_,
  gzip: K_,
  Inflate: G_,
  inflate: J_,
  inflateRaw: Y_,
  ungzip: X_,
  constants: Q_
};
function ui(e) {
  let t = ui.table || (ui.table = (() => {
    let n = new Uint32Array(256);
    for (let i = 0; i < 256; ++i) {
      let s = i;
      for (let a = 0; a < 8; ++a) s = s & 1 ? 3988292384 ^ s >>> 1 : s >>> 1;
      n[i] = s;
    }
    return n;
  })()), r = -1;
  for (let n = 0; n < e.length; ++n) r = t[(r ^ e[n]) & 255] ^ r >>> 8;
  return (r ^ -1) >>> 0;
}
ui.table = void 0;
var Vn = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), hs = (e, t) => e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], Wn = (e, t, r) => {
  t[r] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, t[r + 3] = e;
};
function ev(e, t, r, n) {
  let i = t * n, s = new Uint8Array(r * i), a = 0, o = 0;
  for (let l = 0; l < r; ++l) {
    let c = e[a++];
    switch (c) {
      case 0:
        s.set(e.subarray(a, a + i), o);
        break;
      case 1:
        for (let u = 0; u < i; ++u) {
          let d = u >= n ? s[o + u - n] : 0;
          s[o + u] = e[a + u] + d & 255;
        }
        break;
      case 2:
        for (let u = 0; u < i; ++u) {
          let d = l ? s[o + u - i] : 0;
          s[o + u] = e[a + u] + d & 255;
        }
        break;
      case 3:
        for (let u = 0; u < i; ++u) {
          let d = u >= n ? s[o + u - n] : 0, f = l ? s[o + u - i] : 0;
          s[o + u] = e[a + u] + (d + f >> 1) & 255;
        }
        break;
      case 4: {
        let u = (d, f, h) => {
          let g = d + f - h, m = Math.abs(g - d), v = Math.abs(g - f), p = Math.abs(g - h);
          return m <= v && m <= p ? d : v <= p ? f : h;
        };
        for (let d = 0; d < i; ++d) {
          let f = d >= n ? s[o + d - n] : 0, h = l ? s[o + d - i] : 0, g = d >= n && l ? s[o + d - i - n] : 0;
          s[o + d] = e[a + d] + u(f, h, g) & 255;
        }
        break;
      }
      default:
        throw new Error(`Unknown PNG filter ${c}`);
    }
    a += i, o += i;
  }
  return s;
}
function tv(e) {
  if (!Vn.every((_, w) => _ === e[w])) throw new Error("Not a PNG");
  let t = 8, r = 0, n = 0, i = [], s = !1;
  for (; t < e.length; ) {
    let _ = hs(e, t), w = String.fromCharCode(...e.subarray(t + 4, t + 8)), A = e.subarray(t + 8, t + 8 + _);
    w === "CgBI" ? s = !0 : w === "IHDR" ? (r = hs(A, 0), n = hs(A, 4)) : w === "IDAT" && i.push(A), t += 12 + _;
  }
  if (!s) return e;
  let a = ul.inflateRaw(Uint8Array.from(i.flatMap((_) => Array.from(_)))), o = 4, l = ev(a, r, n, o);
  for (let _ = 0; _ < l.length; _ += 4) {
    let w = l[_], A = l[_ + 2];
    l[_] = A, l[_ + 2] = w;
  }
  let c = r * o, u = new Uint8Array((c + 1) * n);
  for (let _ = 0; _ < n; ++_) u[_ * (c + 1)] = 0, u.set(l.subarray(_ * c, _ * c + c), _ * (c + 1) + 1);
  let d = ul.deflate(u), f = [], h = (_, w) => {
    let A = new Uint8Array(4);
    Wn(w.length, A, 0);
    let k = new TextEncoder().encode(_), E = new Uint8Array(4);
    Wn(ui(new Uint8Array([...k, ...w])), E, 0), f.push(A, k, w, E);
  }, g = new Uint8Array(13);
  Wn(r, g, 0), Wn(n, g, 4), g.set([8, 6, 0, 0, 0], 8), h("IHDR", g), h("IDAT", d), h("IEND", new Uint8Array());
  let m = Vn.length + f.reduce((_, w) => _ + w.length, 0), v = new Uint8Array(m), p = 0;
  v.set(Vn, p), p += Vn.length;
  for (let _ of f) v.set(_, p), p += _.length;
  return v;
}
var ds = { exports: {} };
const rv = {}, nv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rv
}, Symbol.toStringTag, { value: "Module" })), hl = /* @__PURE__ */ hc(nv);
var dl;
function iv() {
  return dl || (dl = 1, (function(e) {
    (function() {
      var t = "input is invalid type", r = typeof window == "object", n = r ? window : {};
      n.JS_SHA256_NO_WINDOW && (r = !1);
      var i = !r && typeof self == "object", s = !n.JS_SHA256_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node && process.type != "renderer";
      s ? n = Vr : i && (n = self);
      var a = !n.JS_SHA256_NO_COMMON_JS && !0 && e.exports, o = !n.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", l = "0123456789abcdef".split(""), c = [-2147483648, 8388608, 32768, 128], u = [24, 16, 8, 0], d = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ], f = ["hex", "array", "digest", "arrayBuffer"], h = [];
      (n.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(E) {
        return Object.prototype.toString.call(E) === "[object Array]";
      }), o && (n.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(E) {
        return typeof E == "object" && E.buffer && E.buffer.constructor === ArrayBuffer;
      });
      var g = function(E, x) {
        return function(R) {
          return new w(x, !0).update(R)[E]();
        };
      }, m = function(E) {
        var x = g("hex", E);
        s && (x = v(x, E)), x.create = function() {
          return new w(E);
        }, x.update = function(I) {
          return x.create().update(I);
        };
        for (var R = 0; R < f.length; ++R) {
          var S = f[R];
          x[S] = g(S, E);
        }
        return x;
      }, v = function(E, x) {
        var R = hl, S = hl.Buffer, I = x ? "sha224" : "sha256", P;
        S.from && !n.JS_SHA256_NO_BUFFER_FROM ? P = S.from : P = function(O) {
          return new S(O);
        };
        var T = function(O) {
          if (typeof O == "string")
            return R.createHash(I).update(O, "utf8").digest("hex");
          if (O == null)
            throw new Error(t);
          return O.constructor === ArrayBuffer && (O = new Uint8Array(O)), Array.isArray(O) || ArrayBuffer.isView(O) || O.constructor === S ? R.createHash(I).update(P(O)).digest("hex") : E(O);
        };
        return T;
      }, p = function(E, x) {
        return function(R, S) {
          return new A(R, x, !0).update(S)[E]();
        };
      }, _ = function(E) {
        var x = p("hex", E);
        x.create = function(I) {
          return new A(I, E);
        }, x.update = function(I, P) {
          return x.create(I).update(P);
        };
        for (var R = 0; R < f.length; ++R) {
          var S = f[R];
          x[S] = p(S, E);
        }
        return x;
      };
      function w(E, x) {
        x ? (h[0] = h[16] = h[1] = h[2] = h[3] = h[4] = h[5] = h[6] = h[7] = h[8] = h[9] = h[10] = h[11] = h[12] = h[13] = h[14] = h[15] = 0, this.blocks = h) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], E ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = E;
      }
      w.prototype.update = function(E) {
        if (!this.finalized) {
          var x, R = typeof E;
          if (R !== "string") {
            if (R === "object") {
              if (E === null)
                throw new Error(t);
              if (o && E.constructor === ArrayBuffer)
                E = new Uint8Array(E);
              else if (!Array.isArray(E) && (!o || !ArrayBuffer.isView(E)))
                throw new Error(t);
            } else
              throw new Error(t);
            x = !0;
          }
          for (var S, I = 0, P, T = E.length, O = this.blocks; I < T; ) {
            if (this.hashed && (this.hashed = !1, O[0] = this.block, this.block = O[16] = O[1] = O[2] = O[3] = O[4] = O[5] = O[6] = O[7] = O[8] = O[9] = O[10] = O[11] = O[12] = O[13] = O[14] = O[15] = 0), x)
              for (P = this.start; I < T && P < 64; ++I)
                O[P >>> 2] |= E[I] << u[P++ & 3];
            else
              for (P = this.start; I < T && P < 64; ++I)
                S = E.charCodeAt(I), S < 128 ? O[P >>> 2] |= S << u[P++ & 3] : S < 2048 ? (O[P >>> 2] |= (192 | S >>> 6) << u[P++ & 3], O[P >>> 2] |= (128 | S & 63) << u[P++ & 3]) : S < 55296 || S >= 57344 ? (O[P >>> 2] |= (224 | S >>> 12) << u[P++ & 3], O[P >>> 2] |= (128 | S >>> 6 & 63) << u[P++ & 3], O[P >>> 2] |= (128 | S & 63) << u[P++ & 3]) : (S = 65536 + ((S & 1023) << 10 | E.charCodeAt(++I) & 1023), O[P >>> 2] |= (240 | S >>> 18) << u[P++ & 3], O[P >>> 2] |= (128 | S >>> 12 & 63) << u[P++ & 3], O[P >>> 2] |= (128 | S >>> 6 & 63) << u[P++ & 3], O[P >>> 2] |= (128 | S & 63) << u[P++ & 3]);
            this.lastByteIndex = P, this.bytes += P - this.start, P >= 64 ? (this.block = O[16], this.start = P - 64, this.hash(), this.hashed = !0) : this.start = P;
          }
          return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
        }
      }, w.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var E = this.blocks, x = this.lastByteIndex;
          E[16] = this.block, E[x >>> 2] |= c[x & 3], this.block = E[16], x >= 56 && (this.hashed || this.hash(), E[0] = this.block, E[16] = E[1] = E[2] = E[3] = E[4] = E[5] = E[6] = E[7] = E[8] = E[9] = E[10] = E[11] = E[12] = E[13] = E[14] = E[15] = 0), E[14] = this.hBytes << 3 | this.bytes >>> 29, E[15] = this.bytes << 3, this.hash();
        }
      }, w.prototype.hash = function() {
        var E = this.h0, x = this.h1, R = this.h2, S = this.h3, I = this.h4, P = this.h5, T = this.h6, O = this.h7, b = this.blocks, z, Q, V, oe, B, re, L, F, se, X, J;
        for (z = 16; z < 64; ++z)
          B = b[z - 15], Q = (B >>> 7 | B << 25) ^ (B >>> 18 | B << 14) ^ B >>> 3, B = b[z - 2], V = (B >>> 17 | B << 15) ^ (B >>> 19 | B << 13) ^ B >>> 10, b[z] = b[z - 16] + Q + b[z - 7] + V << 0;
        for (J = x & R, z = 0; z < 64; z += 4)
          this.first ? (this.is224 ? (F = 300032, B = b[0] - 1413257819, O = B - 150054599 << 0, S = B + 24177077 << 0) : (F = 704751109, B = b[0] - 210244248, O = B - 1521486534 << 0, S = B + 143694565 << 0), this.first = !1) : (Q = (E >>> 2 | E << 30) ^ (E >>> 13 | E << 19) ^ (E >>> 22 | E << 10), V = (I >>> 6 | I << 26) ^ (I >>> 11 | I << 21) ^ (I >>> 25 | I << 7), F = E & x, oe = F ^ E & R ^ J, L = I & P ^ ~I & T, B = O + V + L + d[z] + b[z], re = Q + oe, O = S + B << 0, S = B + re << 0), Q = (S >>> 2 | S << 30) ^ (S >>> 13 | S << 19) ^ (S >>> 22 | S << 10), V = (O >>> 6 | O << 26) ^ (O >>> 11 | O << 21) ^ (O >>> 25 | O << 7), se = S & E, oe = se ^ S & x ^ F, L = O & I ^ ~O & P, B = T + V + L + d[z + 1] + b[z + 1], re = Q + oe, T = R + B << 0, R = B + re << 0, Q = (R >>> 2 | R << 30) ^ (R >>> 13 | R << 19) ^ (R >>> 22 | R << 10), V = (T >>> 6 | T << 26) ^ (T >>> 11 | T << 21) ^ (T >>> 25 | T << 7), X = R & S, oe = X ^ R & E ^ se, L = T & O ^ ~T & I, B = P + V + L + d[z + 2] + b[z + 2], re = Q + oe, P = x + B << 0, x = B + re << 0, Q = (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10), V = (P >>> 6 | P << 26) ^ (P >>> 11 | P << 21) ^ (P >>> 25 | P << 7), J = x & R, oe = J ^ x & S ^ X, L = P & T ^ ~P & O, B = I + V + L + d[z + 3] + b[z + 3], re = Q + oe, I = E + B << 0, E = B + re << 0, this.chromeBugWorkAround = !0;
        this.h0 = this.h0 + E << 0, this.h1 = this.h1 + x << 0, this.h2 = this.h2 + R << 0, this.h3 = this.h3 + S << 0, this.h4 = this.h4 + I << 0, this.h5 = this.h5 + P << 0, this.h6 = this.h6 + T << 0, this.h7 = this.h7 + O << 0;
      }, w.prototype.hex = function() {
        this.finalize();
        var E = this.h0, x = this.h1, R = this.h2, S = this.h3, I = this.h4, P = this.h5, T = this.h6, O = this.h7, b = l[E >>> 28 & 15] + l[E >>> 24 & 15] + l[E >>> 20 & 15] + l[E >>> 16 & 15] + l[E >>> 12 & 15] + l[E >>> 8 & 15] + l[E >>> 4 & 15] + l[E & 15] + l[x >>> 28 & 15] + l[x >>> 24 & 15] + l[x >>> 20 & 15] + l[x >>> 16 & 15] + l[x >>> 12 & 15] + l[x >>> 8 & 15] + l[x >>> 4 & 15] + l[x & 15] + l[R >>> 28 & 15] + l[R >>> 24 & 15] + l[R >>> 20 & 15] + l[R >>> 16 & 15] + l[R >>> 12 & 15] + l[R >>> 8 & 15] + l[R >>> 4 & 15] + l[R & 15] + l[S >>> 28 & 15] + l[S >>> 24 & 15] + l[S >>> 20 & 15] + l[S >>> 16 & 15] + l[S >>> 12 & 15] + l[S >>> 8 & 15] + l[S >>> 4 & 15] + l[S & 15] + l[I >>> 28 & 15] + l[I >>> 24 & 15] + l[I >>> 20 & 15] + l[I >>> 16 & 15] + l[I >>> 12 & 15] + l[I >>> 8 & 15] + l[I >>> 4 & 15] + l[I & 15] + l[P >>> 28 & 15] + l[P >>> 24 & 15] + l[P >>> 20 & 15] + l[P >>> 16 & 15] + l[P >>> 12 & 15] + l[P >>> 8 & 15] + l[P >>> 4 & 15] + l[P & 15] + l[T >>> 28 & 15] + l[T >>> 24 & 15] + l[T >>> 20 & 15] + l[T >>> 16 & 15] + l[T >>> 12 & 15] + l[T >>> 8 & 15] + l[T >>> 4 & 15] + l[T & 15];
        return this.is224 || (b += l[O >>> 28 & 15] + l[O >>> 24 & 15] + l[O >>> 20 & 15] + l[O >>> 16 & 15] + l[O >>> 12 & 15] + l[O >>> 8 & 15] + l[O >>> 4 & 15] + l[O & 15]), b;
      }, w.prototype.toString = w.prototype.hex, w.prototype.digest = function() {
        this.finalize();
        var E = this.h0, x = this.h1, R = this.h2, S = this.h3, I = this.h4, P = this.h5, T = this.h6, O = this.h7, b = [
          E >>> 24 & 255,
          E >>> 16 & 255,
          E >>> 8 & 255,
          E & 255,
          x >>> 24 & 255,
          x >>> 16 & 255,
          x >>> 8 & 255,
          x & 255,
          R >>> 24 & 255,
          R >>> 16 & 255,
          R >>> 8 & 255,
          R & 255,
          S >>> 24 & 255,
          S >>> 16 & 255,
          S >>> 8 & 255,
          S & 255,
          I >>> 24 & 255,
          I >>> 16 & 255,
          I >>> 8 & 255,
          I & 255,
          P >>> 24 & 255,
          P >>> 16 & 255,
          P >>> 8 & 255,
          P & 255,
          T >>> 24 & 255,
          T >>> 16 & 255,
          T >>> 8 & 255,
          T & 255
        ];
        return this.is224 || b.push(O >>> 24 & 255, O >>> 16 & 255, O >>> 8 & 255, O & 255), b;
      }, w.prototype.array = w.prototype.digest, w.prototype.arrayBuffer = function() {
        this.finalize();
        var E = new ArrayBuffer(this.is224 ? 28 : 32), x = new DataView(E);
        return x.setUint32(0, this.h0), x.setUint32(4, this.h1), x.setUint32(8, this.h2), x.setUint32(12, this.h3), x.setUint32(16, this.h4), x.setUint32(20, this.h5), x.setUint32(24, this.h6), this.is224 || x.setUint32(28, this.h7), E;
      };
      function A(E, x, R) {
        var S, I = typeof E;
        if (I === "string") {
          var P = [], T = E.length, O = 0, b;
          for (S = 0; S < T; ++S)
            b = E.charCodeAt(S), b < 128 ? P[O++] = b : b < 2048 ? (P[O++] = 192 | b >>> 6, P[O++] = 128 | b & 63) : b < 55296 || b >= 57344 ? (P[O++] = 224 | b >>> 12, P[O++] = 128 | b >>> 6 & 63, P[O++] = 128 | b & 63) : (b = 65536 + ((b & 1023) << 10 | E.charCodeAt(++S) & 1023), P[O++] = 240 | b >>> 18, P[O++] = 128 | b >>> 12 & 63, P[O++] = 128 | b >>> 6 & 63, P[O++] = 128 | b & 63);
          E = P;
        } else if (I === "object") {
          if (E === null)
            throw new Error(t);
          if (o && E.constructor === ArrayBuffer)
            E = new Uint8Array(E);
          else if (!Array.isArray(E) && (!o || !ArrayBuffer.isView(E)))
            throw new Error(t);
        } else
          throw new Error(t);
        E.length > 64 && (E = new w(x, !0).update(E).array());
        var z = [], Q = [];
        for (S = 0; S < 64; ++S) {
          var V = E[S] || 0;
          z[S] = 92 ^ V, Q[S] = 54 ^ V;
        }
        w.call(this, x, R), this.update(Q), this.oKeyPad = z, this.inner = !0, this.sharedMemory = R;
      }
      A.prototype = new w(), A.prototype.finalize = function() {
        if (w.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var E = this.array();
          w.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(E), w.prototype.finalize.call(this);
        }
      };
      var k = m();
      k.sha256 = k, k.sha224 = m(!0), k.sha256.hmac = _(), k.sha224.hmac = _(!0), a ? e.exports = k : (n.sha256 = k.sha256, n.sha224 = k.sha224);
    })();
  })(ds)), ds.exports;
}
var Lu = iv();
async function sv(e) {
  const [t, r] = await Bu(e), n = r.folder("Payload/"), i = t.CFBundleDisplayName || t.CFBundleName || null, s = t.CFBundleIdentifier || null;
  if (typeof i != "string" || typeof s != "string")
    throw "Invalid Info.plist: Missing required fields.";
  let a = [];
  const o = Object.keys(t).filter(
    (g) => g.startsWith("NS") && g.endsWith("UsageDescription")
  );
  for (const g of o) {
    const m = t[g];
    typeof m == "string" && a.push([g, m]);
  }
  const l = {
    name: i,
    bundle_identifier: s,
    category: "other",
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    description: null,
    icon_path: null,
    ipad_screenshots: [],
    iphone_screenshots: [],
    subtitle: null,
    entitlements: [],
    privacy: a
  }, c = Lu.sha256(await e.arrayBuffer()), u = Du(t, c), d = t.CFBundleIcons, f = d ? d.CFBundlePrimaryIcon : void 0;
  let h = [];
  if (f) {
    const g = f.CFBundleIconName;
    typeof g == "string" && h.push(g);
    const m = f.CFBundleIconFiles;
    if (Array.isArray(m))
      for (const v of m)
        typeof v == "string" && h.push(v);
  }
  if (h = Array.from(new Set(h)), h.length === 0) {
    const g = t.CFBundleIconFiles;
    if (Array.isArray(g))
      for (const m of g)
        typeof m == "string" && h.push(m);
  }
  if (h.length === 0)
    console.warn("Warning: no icon names found in Info.plist");
  else {
    const g = [], m = Object.keys(n.files).find(
      (p) => /^Payload\/.+\.app\/$/.test(p)
    );
    if (!m)
      throw new Error("Invalid IPA file: Missing .app folder in Payload.");
    const v = r.folder(m);
    if (await Promise.all(
      Object.entries(v.files).map(async ([p, _]) => {
        if (!_ || _.dir)
          return;
        const A = (p.split("/").pop() ?? "").toLowerCase();
        for (const k of h) {
          const E = ["@3x", "@2x", ""];
          for (const x of E) {
            const R = `${k}${x}`;
            if (A === `${R.toLowerCase()}.png`) {
              const S = x === "@3x" ? 3 : x === "@2x" ? 2 : 1, I = await _.async("uint8array"), P = await tv(I);
              g.push({
                path: p,
                scale: S,
                data: P
              });
            }
          }
        }
      })
    ), g.length > 0) {
      g.sort((_, w) => w.scale - _.scale);
      const p = g[0];
      return [l, u, p];
    }
  }
  return [l, u, null];
}
async function Bu(e) {
  const t = await Tg.loadAsync(e);
  if (!t.files["Payload/"] || !t.files["Payload/"].dir)
    throw "Invalid IPA file: Missing Payload directory.";
  const n = t.folder("Payload/").file(/\.app\/Info\.plist$/)[0];
  if (!n)
    throw "Invalid IPA file: Missing Info.plist.";
  let i = await n.async("arraybuffer"), s = i0(i);
  if (typeof s != "object" || s === null)
    throw "Failed to parse Info.plist.";
  return [s, t];
}
function Du(e, t = null) {
  const r = e.CFBundleShortVersionString || "1.0.0", n = e.CFBundleVersion || "1";
  if (typeof r != "string" || typeof n != "string")
    throw "Invalid Info.plist: Missing required version fields.";
  return {
    version: r,
    build_version: n,
    download_url: "",
    changelog: null,
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    checksum: t
  };
}
async function av(e, t) {
  const [r] = await Bu(e), n = Lu.sha256(await e.arrayBuffer()), i = Du(r, n), s = await ue().from("versions").insert([
    {
      ...i,
      app_id: t.id,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    }
  ]).select().single();
  if (s.error)
    throw Ze(s.error, "version");
  return s;
}
async function ov(e, t, r, n, i) {
  const s = await sv(e);
  if (!s)
    throw "Failed to import IPA.";
  let [a, o, l] = s, c = await t({
    ...a,
    owner: r?.user.id || "",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  });
  if (!c)
    throw "Failed to create app from IPA.";
  if (c.error)
    throw Ze(c.error, "app");
  const u = c.data.id;
  if (l) {
    if (!r)
      throw "You must be logged in to upload an icon.";
    const { data: h, error: g } = await ue().storage.from("app-images").upload(`${r.user.id}/${u}/icon-${Date.now()}.png`, l.data, {
      contentType: "image/png"
    });
    if (g || !h)
      throw console.error(g), "Failed to upload app icon.";
    const { error: m } = await ue().from("apps").update({
      icon_path: h.path
    }).eq("id", u);
    if (i(), m)
      throw console.error(m), "Failed to update app with icon path.";
  }
  const d = {
    ...o,
    app_id: u,
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  }, f = await ue().from("versions").insert([d]).select().single();
  if (f.error)
    throw console.error(f.error), Ze(f.error, "version");
  n("/developers/app/" + u);
}
function lv(e) {
  let t = [];
  if (e.appPermissions?.privacy)
    for (const [i, s] of Object.entries(e.appPermissions.privacy))
      t.push([i, s]);
  const r = {
    name: e.name,
    bundle_identifier: e.bundleIdentifier,
    category: e.category || "other",
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    description: e.localizedDescription,
    icon_path: null,
    ipad_screenshots: [],
    iphone_screenshots: [],
    subtitle: e.subtitle || null,
    entitlements: e.appPermissions?.entitlements || [],
    privacy: t
  };
  let n = [];
  for (const i of e.versions)
    n.push({
      version: i.version,
      build_version: i.buildVersion || i.version,
      download_url: i.downloadURL,
      changelog: i.localizedDescription || "",
      created_at: i.date,
      checksum: null
    });
  return [r, n];
}
async function cv(e, t, r, n) {
  if (!r)
    throw "You must be logged in to create an app.";
  const [i, s] = lv(e);
  let a = await t({
    ...i,
    owner: r?.user.id || "",
    created_at: (/* @__PURE__ */ new Date()).toISOString()
  });
  if (!a)
    throw "Failed to create app from IPA.";
  if (a.error)
    throw Ze(a.error, "app");
  const o = a.data.id;
  for (const l of s) {
    const c = {
      ...l,
      app_id: o,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    }, u = await ue().from("versions").insert([c]).select().single();
    if (u.error)
      throw console.error(u.error), Ze(u.error, "version");
  }
  n();
}
const uv = ({
  source: e,
  cancel: t
}) => {
  const [r, n] = $e([]), { createApp: i, session: s, reloadApps: a } = Me(), o = ot();
  return /* @__PURE__ */ j("div", { className: "prompt-modal", children: /* @__PURE__ */ Y(Ie, { className: "altstore-prompt", children: [
    /* @__PURE__ */ Y("h2", { children: [
      "Select apps to import from ",
      e.name ?? "this altstore source"
    ] }),
    /* @__PURE__ */ j("div", { className: "altstore-app-list", children: e.apps.map((l) => /* @__PURE__ */ j(
      "div",
      {
        className: "altstore-app-wrapper" + (r.includes(l) ? " altstore-app-wrapper-selected" : ""),
        onClick: () => {
          n((c) => c.includes(l) ? c.filter((u) => u !== l) : [...c, l]);
        },
        children: /* @__PURE__ */ j(hv, { app: l })
      },
      l.bundleIdentifier
    )) }),
    /* @__PURE__ */ Y(
      "button",
      {
        disabled: r.length === 0,
        className: "import-altstore-button primary",
        onClick: async () => {
          let l = async () => {
            for (const c of r)
              await cv(
                c,
                i,
                s,
                a
              );
            o("/developers");
          };
          ce.promise(l(), {
            loading: "Importing apps...",
            success: `Successfully imported ${r.length} app${r.length !== 1 ? "s" : ""}!`,
            error: (c) => (console.error(c), "Failed to import apps: " + String(c))
          });
        },
        children: [
          "Import ",
          r.length,
          " App",
          r.length !== 1 ? "s" : ""
        ]
      }
    ),
    /* @__PURE__ */ j("button", { className: "import-altstore-button", onClick: t, children: "Cancel" })
  ] }) });
}, hv = ({ app: e }) => /* @__PURE__ */ Y("div", { className: "app-title-container app-title-container-inline", children: [
  /* @__PURE__ */ j(
    "img",
    {
      src: e.iconURL,
      className: "app-icon",
      onError: (t) => {
        t.currentTarget.src = "/default-icon.png";
      }
    }
  ),
  /* @__PURE__ */ Y("div", { children: [
    /* @__PURE__ */ j("h1", { className: "app-title", children: e.name }),
    /* @__PURE__ */ j("p", { className: "app-subtitle", children: e.subtitle || e.bundleIdentifier })
  ] })
] });
function Z(e, t, r) {
  function n(o, l) {
    if (o._zod || Object.defineProperty(o, "_zod", {
      value: {
        def: l,
        constr: a,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), o._zod.traits.has(e))
      return;
    o._zod.traits.add(e), t(o, l);
    const c = a.prototype, u = Object.keys(c);
    for (let d = 0; d < u.length; d++) {
      const f = u[d];
      f in o || (o[f] = c[f].bind(o));
    }
  }
  const i = r?.Parent ?? Object;
  class s extends i {
  }
  Object.defineProperty(s, "name", { value: e });
  function a(o) {
    var l;
    const c = r?.Parent ? new s() : this;
    n(c, o), (l = c._zod).deferred ?? (l.deferred = []);
    for (const u of c._zod.deferred)
      u();
    return c;
  }
  return Object.defineProperty(a, "init", { value: n }), Object.defineProperty(a, Symbol.hasInstance, {
    value: (o) => r?.Parent && o instanceof r.Parent ? !0 : o?._zod?.traits?.has(e)
  }), Object.defineProperty(a, "name", { value: e }), a;
}
class Er extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Zu extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Mu = {};
function jt(e) {
  return Mu;
}
function dv(e) {
  const t = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, i]) => t.indexOf(+n) === -1).map(([n, i]) => i);
}
function Ds(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function ga(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function ma(e) {
  return e == null;
}
function _a(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function fv(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = t.toString();
  let i = (n.split(".")[1] || "").length;
  if (i === 0 && /\d?e-\d?/.test(n)) {
    const l = n.match(/\d?e-(\d?)/);
    l?.[1] && (i = Number.parseInt(l[1]));
  }
  const s = r > i ? r : i, a = Number.parseInt(e.toFixed(s).replace(".", "")), o = Number.parseInt(t.toFixed(s).replace(".", ""));
  return a % o / 10 ** s;
}
const fl = Symbol("evaluating");
function we(e, t, r) {
  let n;
  Object.defineProperty(e, t, {
    get() {
      if (n !== fl)
        return n === void 0 && (n = fl, n = r()), n;
    },
    set(i) {
      Object.defineProperty(e, t, {
        value: i
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function sr(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function ar(...e) {
  const t = {};
  for (const r of e) {
    const n = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function pl(e) {
  return JSON.stringify(e);
}
function pv(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Vu = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function hi(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const gv = ga(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Tr(e) {
  if (hi(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const r = t.prototype;
  return !(hi(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function Wu(e) {
  return Tr(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const mv = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Or(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Dt(e, t, r) {
  const n = new e._zod.constr(t ?? e._zod.def);
  return (!t || r?.parent) && (n._zod.parent = e), n;
}
function ie(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function _v(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const vv = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function wv(e, t) {
  const r = e._zod.def, n = ar(e._zod.def, {
    get shape() {
      const i = {};
      for (const s in t) {
        if (!(s in r.shape))
          throw new Error(`Unrecognized key: "${s}"`);
        t[s] && (i[s] = r.shape[s]);
      }
      return sr(this, "shape", i), i;
    },
    checks: []
  });
  return Dt(e, n);
}
function bv(e, t) {
  const r = e._zod.def, n = ar(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape };
      for (const s in t) {
        if (!(s in r.shape))
          throw new Error(`Unrecognized key: "${s}"`);
        t[s] && delete i[s];
      }
      return sr(this, "shape", i), i;
    },
    checks: []
  });
  return Dt(e, n);
}
function yv(e, t) {
  if (!Tr(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const i = ar(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return sr(this, "shape", s), s;
    },
    checks: []
  });
  return Dt(e, i);
}
function kv(e, t) {
  if (!Tr(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = {
    ...e._zod.def,
    get shape() {
      const n = { ...e._zod.def.shape, ...t };
      return sr(this, "shape", n), n;
    },
    checks: e._zod.def.checks
  };
  return Dt(e, r);
}
function Ev(e, t) {
  const r = ar(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return sr(this, "shape", n), n;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Dt(e, r);
}
function xv(e, t, r) {
  const n = ar(t._zod.def, {
    get shape() {
      const i = t._zod.def.shape, s = { ...i };
      if (r)
        for (const a in r) {
          if (!(a in i))
            throw new Error(`Unrecognized key: "${a}"`);
          r[a] && (s[a] = e ? new e({
            type: "optional",
            innerType: i[a]
          }) : i[a]);
        }
      else
        for (const a in i)
          s[a] = e ? new e({
            type: "optional",
            innerType: i[a]
          }) : i[a];
      return sr(this, "shape", s), s;
    },
    checks: []
  });
  return Dt(t, n);
}
function Sv(e, t, r) {
  const n = ar(t._zod.def, {
    get shape() {
      const i = t._zod.def.shape, s = { ...i };
      if (r)
        for (const a in r) {
          if (!(a in s))
            throw new Error(`Unrecognized key: "${a}"`);
          r[a] && (s[a] = new e({
            type: "nonoptional",
            innerType: i[a]
          }));
        }
      else
        for (const a in i)
          s[a] = new e({
            type: "nonoptional",
            innerType: i[a]
          });
      return sr(this, "shape", s), s;
    },
    checks: []
  });
  return Dt(t, n);
}
function _r(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (e.issues[r]?.continue !== !0)
      return !0;
  return !1;
}
function vr(e, t) {
  return t.map((r) => {
    var n;
    return (n = r).path ?? (n.path = []), r.path.unshift(e), r;
  });
}
function qn(e) {
  return typeof e == "string" ? e : e?.message;
}
function Ut(e, t, r) {
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const i = qn(e.inst?._zod.def?.error?.(e)) ?? qn(t?.error?.(e)) ?? qn(r.customError?.(e)) ?? qn(r.localeError?.(e)) ?? "Invalid input";
    n.message = i;
  }
  return delete n.inst, delete n.continue, t?.reportInput || delete n.input, n;
}
function va(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function gn(...e) {
  const [t, r, n] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: n
  } : { ...t };
}
const qu = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Ds, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Hu = Z("$ZodError", qu), Ku = Z("$ZodError", qu, { Parent: Error });
function Av(e, t = (r) => r.message) {
  const r = {}, n = [];
  for (const i of e.issues)
    i.path.length > 0 ? (r[i.path[0]] = r[i.path[0]] || [], r[i.path[0]].push(t(i))) : n.push(t(i));
  return { formErrors: n, fieldErrors: r };
}
function Tv(e, t = (r) => r.message) {
  const r = { _errors: [] }, n = (i) => {
    for (const s of i.issues)
      if (s.code === "invalid_union" && s.errors.length)
        s.errors.map((a) => n({ issues: a }));
      else if (s.code === "invalid_key")
        n({ issues: s.issues });
      else if (s.code === "invalid_element")
        n({ issues: s.issues });
      else if (s.path.length === 0)
        r._errors.push(t(s));
      else {
        let a = r, o = 0;
        for (; o < s.path.length; ) {
          const l = s.path[o];
          o === s.path.length - 1 ? (a[l] = a[l] || { _errors: [] }, a[l]._errors.push(t(s))) : a[l] = a[l] || { _errors: [] }, a = a[l], o++;
        }
      }
  };
  return n(e), r;
}
const wa = (e) => (t, r, n, i) => {
  const s = n ? Object.assign(n, { async: !1 }) : { async: !1 }, a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise)
    throw new Er();
  if (a.issues.length) {
    const o = new (i?.Err ?? e)(a.issues.map((l) => Ut(l, s, jt())));
    throw Vu(o, i?.callee), o;
  }
  return a.value;
}, ba = (e) => async (t, r, n, i) => {
  const s = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const o = new (i?.Err ?? e)(a.issues.map((l) => Ut(l, s, jt())));
    throw Vu(o, i?.callee), o;
  }
  return a.value;
}, Ei = (e) => (t, r, n) => {
  const i = n ? { ...n, async: !1 } : { async: !1 }, s = t._zod.run({ value: r, issues: [] }, i);
  if (s instanceof Promise)
    throw new Er();
  return s.issues.length ? {
    success: !1,
    error: new (e ?? Hu)(s.issues.map((a) => Ut(a, i, jt())))
  } : { success: !0, data: s.value };
}, Ov = /* @__PURE__ */ Ei(Ku), xi = (e) => async (t, r, n) => {
  const i = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: r, issues: [] }, i);
  return s instanceof Promise && (s = await s), s.issues.length ? {
    success: !1,
    error: new e(s.issues.map((a) => Ut(a, i, jt())))
  } : { success: !0, data: s.value };
}, Rv = /* @__PURE__ */ xi(Ku), Iv = (e) => (t, r, n) => {
  const i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return wa(e)(t, r, i);
}, Cv = (e) => (t, r, n) => wa(e)(t, r, n), Nv = (e) => async (t, r, n) => {
  const i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return ba(e)(t, r, i);
}, Pv = (e) => async (t, r, n) => ba(e)(t, r, n), $v = (e) => (t, r, n) => {
  const i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Ei(e)(t, r, i);
}, zv = (e) => (t, r, n) => Ei(e)(t, r, n), jv = (e) => async (t, r, n) => {
  const i = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return xi(e)(t, r, i);
}, Uv = (e) => async (t, r, n) => xi(e)(t, r, n), Fv = /^[cC][^\s-]{8,}$/, Lv = /^[0-9a-z]+$/, Bv = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Dv = /^[0-9a-vA-V]{20}$/, Zv = /^[A-Za-z0-9]{27}$/, Mv = /^[a-zA-Z0-9_-]{21}$/, Vv = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Wv = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, gl = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, qv = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Hv = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Kv() {
  return new RegExp(Hv, "u");
}
const Gv = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Jv = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Yv = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Xv = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Qv = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Gu = /^[A-Za-z0-9_-]*$/, ew = /^\+(?:[0-9]){6,14}[0-9]$/, Ju = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", tw = /* @__PURE__ */ new RegExp(`^${Ju}$`);
function Yu(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function rw(e) {
  return new RegExp(`^${Yu(e)}$`);
}
function nw(e) {
  const t = Yu({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${Ju}T(?:${n})$`);
}
const iw = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, sw = /^-?\d+$/, aw = /^-?\d+(?:\.\d+)?/, ow = /^(?:true|false)$/i, lw = /^[^A-Z]*$/, cw = /^[^a-z]*$/, Ve = /* @__PURE__ */ Z("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), Xu = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Qu = /* @__PURE__ */ Z("$ZodCheckLessThan", (e, t) => {
  Ve.init(e, t);
  const r = Xu[typeof t.value];
  e._zod.onattach.push((n) => {
    const i = n._zod.bag, s = (t.inclusive ? i.maximum : i.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < s && (t.inclusive ? i.maximum = t.value : i.exclusiveMaximum = t.value);
  }), e._zod.check = (n) => {
    (t.inclusive ? n.value <= t.value : n.value < t.value) || n.issues.push({
      origin: r,
      code: "too_big",
      maximum: t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), eh = /* @__PURE__ */ Z("$ZodCheckGreaterThan", (e, t) => {
  Ve.init(e, t);
  const r = Xu[typeof t.value];
  e._zod.onattach.push((n) => {
    const i = n._zod.bag, s = (t.inclusive ? i.minimum : i.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > s && (t.inclusive ? i.minimum = t.value : i.exclusiveMinimum = t.value);
  }), e._zod.check = (n) => {
    (t.inclusive ? n.value >= t.value : n.value > t.value) || n.issues.push({
      origin: r,
      code: "too_small",
      minimum: t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), uw = /* @__PURE__ */ Z("$ZodCheckMultipleOf", (e, t) => {
  Ve.init(e, t), e._zod.onattach.push((r) => {
    var n;
    (n = r._zod.bag).multipleOf ?? (n.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : fv(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), hw = /* @__PURE__ */ Z("$ZodCheckNumberFormat", (e, t) => {
  Ve.init(e, t), t.format = t.format || "float64";
  const r = t.format?.includes("int"), n = r ? "int" : "number", [i, s] = vv[t.format];
  e._zod.onattach.push((a) => {
    const o = a._zod.bag;
    o.format = t.format, o.minimum = i, o.maximum = s, r && (o.pattern = sw);
  }), e._zod.check = (a) => {
    const o = a.value;
    if (r) {
      if (!Number.isInteger(o)) {
        a.issues.push({
          expected: n,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: o,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(o)) {
        o > 0 ? a.issues.push({
          input: o,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          continue: !t.abort
        }) : a.issues.push({
          input: o,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          continue: !t.abort
        });
        return;
      }
    }
    o < i && a.issues.push({
      origin: "number",
      input: o,
      code: "too_small",
      minimum: i,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), o > s && a.issues.push({
      origin: "number",
      input: o,
      code: "too_big",
      maximum: s,
      inst: e
    });
  };
}), dw = /* @__PURE__ */ Z("$ZodCheckMaxLength", (e, t) => {
  var r;
  Ve.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const i = n.value;
    return !ma(i) && i.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const i = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < i && (n._zod.bag.maximum = t.maximum);
  }), e._zod.check = (n) => {
    const i = n.value;
    if (i.length <= t.maximum)
      return;
    const a = va(i);
    n.issues.push({
      origin: a,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: i,
      inst: e,
      continue: !t.abort
    });
  };
}), fw = /* @__PURE__ */ Z("$ZodCheckMinLength", (e, t) => {
  var r;
  Ve.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const i = n.value;
    return !ma(i) && i.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const i = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > i && (n._zod.bag.minimum = t.minimum);
  }), e._zod.check = (n) => {
    const i = n.value;
    if (i.length >= t.minimum)
      return;
    const a = va(i);
    n.issues.push({
      origin: a,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: i,
      inst: e,
      continue: !t.abort
    });
  };
}), pw = /* @__PURE__ */ Z("$ZodCheckLengthEquals", (e, t) => {
  var r;
  Ve.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const i = n.value;
    return !ma(i) && i.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.minimum = t.length, i.maximum = t.length, i.length = t.length;
  }), e._zod.check = (n) => {
    const i = n.value, s = i.length;
    if (s === t.length)
      return;
    const a = va(i), o = s > t.length;
    n.issues.push({
      origin: a,
      ...o ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Si = /* @__PURE__ */ Z("$ZodCheckStringFormat", (e, t) => {
  var r, n;
  Ve.init(e, t), e._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = t.format, t.pattern && (s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(t.pattern));
  }), t.pattern ? (r = e._zod).check ?? (r.check = (i) => {
    t.pattern.lastIndex = 0, !t.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: i.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (n = e._zod).check ?? (n.check = () => {
  });
}), gw = /* @__PURE__ */ Z("$ZodCheckRegex", (e, t) => {
  Si.init(e, t), e._zod.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), mw = /* @__PURE__ */ Z("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = lw), Si.init(e, t);
}), _w = /* @__PURE__ */ Z("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = cw), Si.init(e, t);
}), vw = /* @__PURE__ */ Z("$ZodCheckIncludes", (e, t) => {
  Ve.init(e, t);
  const r = Or(t.includes), n = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = n, e._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(n);
  }), e._zod.check = (i) => {
    i.value.includes(t.includes, t.position) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ww = /* @__PURE__ */ Z("$ZodCheckStartsWith", (e, t) => {
  Ve.init(e, t);
  const r = new RegExp(`^${Or(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.startsWith(t.prefix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), bw = /* @__PURE__ */ Z("$ZodCheckEndsWith", (e, t) => {
  Ve.init(e, t);
  const r = new RegExp(`.*${Or(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.endsWith(t.suffix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), yw = /* @__PURE__ */ Z("$ZodCheckOverwrite", (e, t) => {
  Ve.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class kw {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const n = t.split(`
`).filter((a) => a), i = Math.min(...n.map((a) => a.length - a.trimStart().length)), s = n.map((a) => a.slice(i)).map((a) => " ".repeat(this.indent * 2) + a);
    for (const a of s)
      this.content.push(a);
  }
  compile() {
    const t = Function, r = this?.args, i = [...(this?.content ?? [""]).map((s) => `  ${s}`)];
    return new t(...r, i.join(`
`));
  }
}
const Ew = {
  major: 4,
  minor: 1,
  patch: 13
}, Ee = /* @__PURE__ */ Z("$ZodType", (e, t) => {
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Ew;
  const n = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && n.unshift(e);
  for (const i of n)
    for (const s of i._zod.onattach)
      s(e);
  if (n.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const i = (a, o, l) => {
      let c = _r(a), u;
      for (const d of o) {
        if (d._zod.def.when) {
          if (!d._zod.def.when(a))
            continue;
        } else if (c)
          continue;
        const f = a.issues.length, h = d._zod.check(a);
        if (h instanceof Promise && l?.async === !1)
          throw new Er();
        if (u || h instanceof Promise)
          u = (u ?? Promise.resolve()).then(async () => {
            await h, a.issues.length !== f && (c || (c = _r(a, f)));
          });
        else {
          if (a.issues.length === f)
            continue;
          c || (c = _r(a, f));
        }
      }
      return u ? u.then(() => a) : a;
    }, s = (a, o, l) => {
      if (_r(a))
        return a.aborted = !0, a;
      const c = i(o, n, l);
      if (c instanceof Promise) {
        if (l.async === !1)
          throw new Er();
        return c.then((u) => e._zod.parse(u, l));
      }
      return e._zod.parse(c, l);
    };
    e._zod.run = (a, o) => {
      if (o.skipChecks)
        return e._zod.parse(a, o);
      if (o.direction === "backward") {
        const c = e._zod.parse({ value: a.value, issues: [] }, { ...o, skipChecks: !0 });
        return c instanceof Promise ? c.then((u) => s(u, a, o)) : s(c, a, o);
      }
      const l = e._zod.parse(a, o);
      if (l instanceof Promise) {
        if (o.async === !1)
          throw new Er();
        return l.then((c) => i(c, n, o));
      }
      return i(l, n, o);
    };
  }
  e["~standard"] = {
    validate: (i) => {
      try {
        const s = Ov(e, i);
        return s.success ? { value: s.data } : { issues: s.error?.issues };
      } catch {
        return Rv(e, i).then((a) => a.success ? { value: a.data } : { issues: a.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), ya = /* @__PURE__ */ Z("$ZodString", (e, t) => {
  Ee.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? iw(e._zod.bag), e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = String(r.value);
      } catch {
      }
    return typeof r.value == "string" || r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), ye = /* @__PURE__ */ Z("$ZodStringFormat", (e, t) => {
  Si.init(e, t), ya.init(e, t);
}), xw = /* @__PURE__ */ Z("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Wv), ye.init(e, t);
}), Sw = /* @__PURE__ */ Z("$ZodUUID", (e, t) => {
  if (t.version) {
    const n = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (n === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = gl(n));
  } else
    t.pattern ?? (t.pattern = gl());
  ye.init(e, t);
}), Aw = /* @__PURE__ */ Z("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = qv), ye.init(e, t);
}), Tw = /* @__PURE__ */ Z("$ZodURL", (e, t) => {
  ye.init(e, t), e._zod.check = (r) => {
    try {
      const n = r.value.trim(), i = new URL(n);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(i.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? r.value = i.href : r.value = n;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Ow = /* @__PURE__ */ Z("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Kv()), ye.init(e, t);
}), Rw = /* @__PURE__ */ Z("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Mv), ye.init(e, t);
}), Iw = /* @__PURE__ */ Z("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Fv), ye.init(e, t);
}), Cw = /* @__PURE__ */ Z("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Lv), ye.init(e, t);
}), Nw = /* @__PURE__ */ Z("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Bv), ye.init(e, t);
}), Pw = /* @__PURE__ */ Z("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Dv), ye.init(e, t);
}), $w = /* @__PURE__ */ Z("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = Zv), ye.init(e, t);
}), zw = /* @__PURE__ */ Z("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = nw(t)), ye.init(e, t);
}), jw = /* @__PURE__ */ Z("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = tw), ye.init(e, t);
}), Uw = /* @__PURE__ */ Z("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = rw(t)), ye.init(e, t);
}), Fw = /* @__PURE__ */ Z("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Vv), ye.init(e, t);
}), Lw = /* @__PURE__ */ Z("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Gv), ye.init(e, t), e._zod.bag.format = "ipv4";
}), Bw = /* @__PURE__ */ Z("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Jv), ye.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Dw = /* @__PURE__ */ Z("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = Yv), ye.init(e, t);
}), Zw = /* @__PURE__ */ Z("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = Xv), ye.init(e, t), e._zod.check = (r) => {
    const n = r.value.split("/");
    try {
      if (n.length !== 2)
        throw new Error();
      const [i, s] = n;
      if (!s)
        throw new Error();
      const a = Number(s);
      if (`${a}` !== s)
        throw new Error();
      if (a < 0 || a > 128)
        throw new Error();
      new URL(`http://[${i}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function th(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const Mw = /* @__PURE__ */ Z("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Qv), ye.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (r) => {
    th(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Vw(e) {
  if (!Gu.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return th(r);
}
const Ww = /* @__PURE__ */ Z("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Gu), ye.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (r) => {
    Vw(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), qw = /* @__PURE__ */ Z("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = ew), ye.init(e, t);
});
function Hw(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [n] = r;
    if (!n)
      return !1;
    const i = JSON.parse(atob(n));
    return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
  } catch {
    return !1;
  }
}
const Kw = /* @__PURE__ */ Z("$ZodJWT", (e, t) => {
  ye.init(e, t), e._zod.check = (r) => {
    Hw(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), rh = /* @__PURE__ */ Z("$ZodNumber", (e, t) => {
  Ee.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? aw, e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = Number(r.value);
      } catch {
      }
    const i = r.value;
    if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i))
      return r;
    const s = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: i,
      inst: e,
      ...s ? { received: s } : {}
    }), r;
  };
}), Gw = /* @__PURE__ */ Z("$ZodNumberFormat", (e, t) => {
  hw.init(e, t), rh.init(e, t);
}), Jw = /* @__PURE__ */ Z("$ZodBoolean", (e, t) => {
  Ee.init(e, t), e._zod.pattern = ow, e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = !!r.value;
      } catch {
      }
    const i = r.value;
    return typeof i == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: i,
      inst: e
    }), r;
  };
}), Yw = /* @__PURE__ */ Z("$ZodUnknown", (e, t) => {
  Ee.init(e, t), e._zod.parse = (r) => r;
}), Xw = /* @__PURE__ */ Z("$ZodNever", (e, t) => {
  Ee.init(e, t), e._zod.parse = (r, n) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});
function ml(e, t, r) {
  e.issues.length && t.issues.push(...vr(r, e.issues)), t.value[r] = e.value;
}
const Qw = /* @__PURE__ */ Z("$ZodArray", (e, t) => {
  Ee.init(e, t), e._zod.parse = (r, n) => {
    const i = r.value;
    if (!Array.isArray(i))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: i,
        inst: e
      }), r;
    r.value = Array(i.length);
    const s = [];
    for (let a = 0; a < i.length; a++) {
      const o = i[a], l = t.element._zod.run({
        value: o,
        issues: []
      }, n);
      l instanceof Promise ? s.push(l.then((c) => ml(c, r, a))) : ml(l, r, a);
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
});
function di(e, t, r, n) {
  e.issues.length && t.issues.push(...vr(r, e.issues)), e.value === void 0 ? r in n && (t.value[r] = void 0) : t.value[r] = e.value;
}
function nh(e) {
  const t = Object.keys(e.shape);
  for (const n of t)
    if (!e.shape?.[n]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${n}": expected a Zod schema`);
  const r = _v(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function ih(e, t, r, n, i, s) {
  const a = [], o = i.keySet, l = i.catchall._zod, c = l.def.type;
  for (const u in t) {
    if (o.has(u))
      continue;
    if (c === "never") {
      a.push(u);
      continue;
    }
    const d = l.run({ value: t[u], issues: [] }, n);
    d instanceof Promise ? e.push(d.then((f) => di(f, r, u, t))) : di(d, r, u, t);
  }
  return a.length && r.issues.push({
    code: "unrecognized_keys",
    keys: a,
    input: t,
    inst: s
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const eb = /* @__PURE__ */ Z("$ZodObject", (e, t) => {
  if (Ee.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const o = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const l = { ...o };
        return Object.defineProperty(t, "shape", {
          value: l
        }), l;
      }
    });
  }
  const n = ga(() => nh(t));
  we(e._zod, "propValues", () => {
    const o = t.shape, l = {};
    for (const c in o) {
      const u = o[c]._zod;
      if (u.values) {
        l[c] ?? (l[c] = /* @__PURE__ */ new Set());
        for (const d of u.values)
          l[c].add(d);
      }
    }
    return l;
  });
  const i = hi, s = t.catchall;
  let a;
  e._zod.parse = (o, l) => {
    a ?? (a = n.value);
    const c = o.value;
    if (!i(c))
      return o.issues.push({
        expected: "object",
        code: "invalid_type",
        input: c,
        inst: e
      }), o;
    o.value = {};
    const u = [], d = a.shape;
    for (const f of a.keys) {
      const g = d[f]._zod.run({ value: c[f], issues: [] }, l);
      g instanceof Promise ? u.push(g.then((m) => di(m, o, f, c))) : di(g, o, f, c);
    }
    return s ? ih(u, c, o, l, n.value, e) : u.length ? Promise.all(u).then(() => o) : o;
  };
}), tb = /* @__PURE__ */ Z("$ZodObjectJIT", (e, t) => {
  eb.init(e, t);
  const r = e._zod.parse, n = ga(() => nh(t)), i = (f) => {
    const h = new kw(["shape", "payload", "ctx"]), g = n.value, m = (w) => {
      const A = pl(w);
      return `shape[${A}]._zod.run({ value: input[${A}], issues: [] }, ctx)`;
    };
    h.write("const input = payload.value;");
    const v = /* @__PURE__ */ Object.create(null);
    let p = 0;
    for (const w of g.keys)
      v[w] = `key_${p++}`;
    h.write("const newResult = {};");
    for (const w of g.keys) {
      const A = v[w], k = pl(w);
      h.write(`const ${A} = ${m(w)};`), h.write(`
        if (${A}.issues.length) {
          payload.issues = payload.issues.concat(${A}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        
        if (${A}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${A}.value;
        }
        
      `);
    }
    h.write("payload.value = newResult;"), h.write("return payload;");
    const _ = h.compile();
    return (w, A) => _(f, w, A);
  };
  let s;
  const a = hi, o = !Mu.jitless, c = o && gv.value, u = t.catchall;
  let d;
  e._zod.parse = (f, h) => {
    d ?? (d = n.value);
    const g = f.value;
    return a(g) ? o && c && h?.async === !1 && h.jitless !== !0 ? (s || (s = i(t.shape)), f = s(f, h), u ? ih([], g, f, h, d, e) : f) : r(f, h) : (f.issues.push({
      expected: "object",
      code: "invalid_type",
      input: g,
      inst: e
    }), f);
  };
});
function _l(e, t, r, n) {
  for (const s of e)
    if (s.issues.length === 0)
      return t.value = s.value, t;
  const i = e.filter((s) => !_r(s));
  return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((s) => s.issues.map((a) => Ut(a, n, jt())))
  }), t);
}
const rb = /* @__PURE__ */ Z("$ZodUnion", (e, t) => {
  Ee.init(e, t), we(e._zod, "optin", () => t.options.some((i) => i._zod.optin === "optional") ? "optional" : void 0), we(e._zod, "optout", () => t.options.some((i) => i._zod.optout === "optional") ? "optional" : void 0), we(e._zod, "values", () => {
    if (t.options.every((i) => i._zod.values))
      return new Set(t.options.flatMap((i) => Array.from(i._zod.values)));
  }), we(e._zod, "pattern", () => {
    if (t.options.every((i) => i._zod.pattern)) {
      const i = t.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${i.map((s) => _a(s.source)).join("|")})$`);
    }
  });
  const r = t.options.length === 1, n = t.options[0]._zod.run;
  e._zod.parse = (i, s) => {
    if (r)
      return n(i, s);
    let a = !1;
    const o = [];
    for (const l of t.options) {
      const c = l._zod.run({
        value: i.value,
        issues: []
      }, s);
      if (c instanceof Promise)
        o.push(c), a = !0;
      else {
        if (c.issues.length === 0)
          return c;
        o.push(c);
      }
    }
    return a ? Promise.all(o).then((l) => _l(l, i, e, s)) : _l(o, i, e, s);
  };
}), nb = /* @__PURE__ */ Z("$ZodIntersection", (e, t) => {
  Ee.init(e, t), e._zod.parse = (r, n) => {
    const i = r.value, s = t.left._zod.run({ value: i, issues: [] }, n), a = t.right._zod.run({ value: i, issues: [] }, n);
    return s instanceof Promise || a instanceof Promise ? Promise.all([s, a]).then(([l, c]) => vl(r, l, c)) : vl(r, s, a);
  };
});
function Zs(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Tr(e) && Tr(t)) {
    const r = Object.keys(t), n = Object.keys(e).filter((s) => r.indexOf(s) !== -1), i = { ...e, ...t };
    for (const s of n) {
      const a = Zs(e[s], t[s]);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...a.mergeErrorPath]
        };
      i[s] = a.data;
    }
    return { valid: !0, data: i };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let n = 0; n < e.length; n++) {
      const i = e[n], s = t[n], a = Zs(i, s);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [n, ...a.mergeErrorPath]
        };
      r.push(a.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function vl(e, t, r) {
  if (t.issues.length && e.issues.push(...t.issues), r.issues.length && e.issues.push(...r.issues), _r(e))
    return e;
  const n = Zs(t.value, r.value);
  if (!n.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(n.mergeErrorPath)}`);
  return e.value = n.data, e;
}
const ib = /* @__PURE__ */ Z("$ZodRecord", (e, t) => {
  Ee.init(e, t), e._zod.parse = (r, n) => {
    const i = r.value;
    if (!Tr(i))
      return r.issues.push({
        expected: "record",
        code: "invalid_type",
        input: i,
        inst: e
      }), r;
    const s = [], a = t.keyType._zod.values;
    if (a) {
      r.value = {};
      const o = /* @__PURE__ */ new Set();
      for (const c of a)
        if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
          o.add(typeof c == "number" ? c.toString() : c);
          const u = t.valueType._zod.run({ value: i[c], issues: [] }, n);
          u instanceof Promise ? s.push(u.then((d) => {
            d.issues.length && r.issues.push(...vr(c, d.issues)), r.value[c] = d.value;
          })) : (u.issues.length && r.issues.push(...vr(c, u.issues)), r.value[c] = u.value);
        }
      let l;
      for (const c in i)
        o.has(c) || (l = l ?? [], l.push(c));
      l && l.length > 0 && r.issues.push({
        code: "unrecognized_keys",
        input: i,
        inst: e,
        keys: l
      });
    } else {
      r.value = {};
      for (const o of Reflect.ownKeys(i)) {
        if (o === "__proto__")
          continue;
        const l = t.keyType._zod.run({ value: o, issues: [] }, n);
        if (l instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (l.issues.length) {
          r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: l.issues.map((u) => Ut(u, n, jt())),
            input: o,
            path: [o],
            inst: e
          }), r.value[l.value] = l.value;
          continue;
        }
        const c = t.valueType._zod.run({ value: i[o], issues: [] }, n);
        c instanceof Promise ? s.push(c.then((u) => {
          u.issues.length && r.issues.push(...vr(o, u.issues)), r.value[l.value] = u.value;
        })) : (c.issues.length && r.issues.push(...vr(o, c.issues)), r.value[l.value] = c.value);
      }
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
}), sb = /* @__PURE__ */ Z("$ZodEnum", (e, t) => {
  Ee.init(e, t);
  const r = dv(t.entries), n = new Set(r);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${r.filter((i) => mv.has(typeof i)).map((i) => typeof i == "string" ? Or(i) : i.toString()).join("|")})$`), e._zod.parse = (i, s) => {
    const a = i.value;
    return n.has(a) || i.issues.push({
      code: "invalid_value",
      values: r,
      input: a,
      inst: e
    }), i;
  };
}), ab = /* @__PURE__ */ Z("$ZodLiteral", (e, t) => {
  if (Ee.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const r = new Set(t.values);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${t.values.map((n) => typeof n == "string" ? Or(n) : n ? Or(n.toString()) : String(n)).join("|")})$`), e._zod.parse = (n, i) => {
    const s = n.value;
    return r.has(s) || n.issues.push({
      code: "invalid_value",
      values: t.values,
      input: s,
      inst: e
    }), n;
  };
}), ob = /* @__PURE__ */ Z("$ZodTransform", (e, t) => {
  Ee.init(e, t), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new Zu(e.constructor.name);
    const i = t.transform(r.value, r);
    if (n.async)
      return (i instanceof Promise ? i : Promise.resolve(i)).then((a) => (r.value = a, r));
    if (i instanceof Promise)
      throw new Er();
    return r.value = i, r;
  };
});
function wl(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const lb = /* @__PURE__ */ Z("$ZodOptional", (e, t) => {
  Ee.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", we(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), we(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${_a(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, n) => {
    if (t.innerType._zod.optin === "optional") {
      const i = t.innerType._zod.run(r, n);
      return i instanceof Promise ? i.then((s) => wl(s, r.value)) : wl(i, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, n);
  };
}), cb = /* @__PURE__ */ Z("$ZodNullable", (e, t) => {
  Ee.init(e, t), we(e._zod, "optin", () => t.innerType._zod.optin), we(e._zod, "optout", () => t.innerType._zod.optout), we(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${_a(r.source)}|null)$`) : void 0;
  }), we(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, n) => r.value === null ? r : t.innerType._zod.run(r, n);
}), ub = /* @__PURE__ */ Z("$ZodDefault", (e, t) => {
  Ee.init(e, t), e._zod.optin = "optional", we(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const i = t.innerType._zod.run(r, n);
    return i instanceof Promise ? i.then((s) => bl(s, t)) : bl(i, t);
  };
});
function bl(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const hb = /* @__PURE__ */ Z("$ZodPrefault", (e, t) => {
  Ee.init(e, t), e._zod.optin = "optional", we(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => (n.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, n));
}), db = /* @__PURE__ */ Z("$ZodNonOptional", (e, t) => {
  Ee.init(e, t), we(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((n) => n !== void 0)) : void 0;
  }), e._zod.parse = (r, n) => {
    const i = t.innerType._zod.run(r, n);
    return i instanceof Promise ? i.then((s) => yl(s, e)) : yl(i, e);
  };
});
function yl(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const fb = /* @__PURE__ */ Z("$ZodCatch", (e, t) => {
  Ee.init(e, t), we(e._zod, "optin", () => t.innerType._zod.optin), we(e._zod, "optout", () => t.innerType._zod.optout), we(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const i = t.innerType._zod.run(r, n);
    return i instanceof Promise ? i.then((s) => (r.value = s.value, s.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: s.issues.map((a) => Ut(a, n, jt()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = i.value, i.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: i.issues.map((s) => Ut(s, n, jt()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), pb = /* @__PURE__ */ Z("$ZodPipe", (e, t) => {
  Ee.init(e, t), we(e._zod, "values", () => t.in._zod.values), we(e._zod, "optin", () => t.in._zod.optin), we(e._zod, "optout", () => t.out._zod.optout), we(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      const s = t.out._zod.run(r, n);
      return s instanceof Promise ? s.then((a) => Hn(a, t.in, n)) : Hn(s, t.in, n);
    }
    const i = t.in._zod.run(r, n);
    return i instanceof Promise ? i.then((s) => Hn(s, t.out, n)) : Hn(i, t.out, n);
  };
});
function Hn(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const gb = /* @__PURE__ */ Z("$ZodReadonly", (e, t) => {
  Ee.init(e, t), we(e._zod, "propValues", () => t.innerType._zod.propValues), we(e._zod, "values", () => t.innerType._zod.values), we(e._zod, "optin", () => t.innerType?._zod?.optin), we(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const i = t.innerType._zod.run(r, n);
    return i instanceof Promise ? i.then(kl) : kl(i);
  };
});
function kl(e) {
  return e.value = Object.freeze(e.value), e;
}
const mb = /* @__PURE__ */ Z("$ZodCustom", (e, t) => {
  Ve.init(e, t), Ee.init(e, t), e._zod.parse = (r, n) => r, e._zod.check = (r) => {
    const n = r.value, i = t.fn(n);
    if (i instanceof Promise)
      return i.then((s) => El(s, r, n, e));
    El(i, r, n, e);
  };
});
function El(e, t, r, n) {
  if (!e) {
    const i = {
      code: "custom",
      input: r,
      inst: n,
      // incorporates params.error into issue reporting
      path: [...n._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !n._zod.def.abort
      // params: inst._zod.def.params,
    };
    n._zod.def.params && (i.params = n._zod.def.params), t.issues.push(gn(i));
  }
}
var xl;
class _b {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...r) {
    const n = r[0];
    if (this._map.set(t, n), n && typeof n == "object" && "id" in n) {
      if (this._idmap.has(n.id))
        throw new Error(`ID ${n.id} already exists in the registry`);
      this._idmap.set(n.id, t);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const r = this._map.get(t);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(t), this;
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const n = { ...this.get(r) ?? {} };
      delete n.id;
      const i = { ...n, ...this._map.get(t) };
      return Object.keys(i).length ? i : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function vb() {
  return new _b();
}
(xl = globalThis).__zod_globalRegistry ?? (xl.__zod_globalRegistry = vb());
const Kn = globalThis.__zod_globalRegistry;
function wb(e, t) {
  return new e({
    type: "string",
    ...ie(t)
  });
}
function bb(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function Sl(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function yb(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function kb(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ie(t)
  });
}
function Eb(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ie(t)
  });
}
function xb(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ie(t)
  });
}
function Sb(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function Ab(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function Tb(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function Ob(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function Rb(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function Ib(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function Cb(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function Nb(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function Pb(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function $b(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function zb(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function jb(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function Ub(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function Fb(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function Lb(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function Bb(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ie(t)
  });
}
function Db(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ie(t)
  });
}
function Zb(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...ie(t)
  });
}
function Mb(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ie(t)
  });
}
function Vb(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ie(t)
  });
}
function Wb(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...ie(t)
  });
}
function qb(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ie(t)
  });
}
function Hb(e, t) {
  return new e({
    type: "boolean",
    ...ie(t)
  });
}
function Kb(e) {
  return new e({
    type: "unknown"
  });
}
function Gb(e, t) {
  return new e({
    type: "never",
    ...ie(t)
  });
}
function Al(e, t) {
  return new Qu({
    check: "less_than",
    ...ie(t),
    value: e,
    inclusive: !1
  });
}
function fs(e, t) {
  return new Qu({
    check: "less_than",
    ...ie(t),
    value: e,
    inclusive: !0
  });
}
function Tl(e, t) {
  return new eh({
    check: "greater_than",
    ...ie(t),
    value: e,
    inclusive: !1
  });
}
function ps(e, t) {
  return new eh({
    check: "greater_than",
    ...ie(t),
    value: e,
    inclusive: !0
  });
}
function Ol(e, t) {
  return new uw({
    check: "multiple_of",
    ...ie(t),
    value: e
  });
}
function sh(e, t) {
  return new dw({
    check: "max_length",
    ...ie(t),
    maximum: e
  });
}
function fi(e, t) {
  return new fw({
    check: "min_length",
    ...ie(t),
    minimum: e
  });
}
function ah(e, t) {
  return new pw({
    check: "length_equals",
    ...ie(t),
    length: e
  });
}
function Jb(e, t) {
  return new gw({
    check: "string_format",
    format: "regex",
    ...ie(t),
    pattern: e
  });
}
function Yb(e) {
  return new mw({
    check: "string_format",
    format: "lowercase",
    ...ie(e)
  });
}
function Xb(e) {
  return new _w({
    check: "string_format",
    format: "uppercase",
    ...ie(e)
  });
}
function Qb(e, t) {
  return new vw({
    check: "string_format",
    format: "includes",
    ...ie(t),
    includes: e
  });
}
function ey(e, t) {
  return new ww({
    check: "string_format",
    format: "starts_with",
    ...ie(t),
    prefix: e
  });
}
function ty(e, t) {
  return new bw({
    check: "string_format",
    format: "ends_with",
    ...ie(t),
    suffix: e
  });
}
function zr(e) {
  return new yw({
    check: "overwrite",
    tx: e
  });
}
function ry(e) {
  return zr((t) => t.normalize(e));
}
function ny() {
  return zr((e) => e.trim());
}
function iy() {
  return zr((e) => e.toLowerCase());
}
function sy() {
  return zr((e) => e.toUpperCase());
}
function ay() {
  return zr((e) => pv(e));
}
function oy(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...ie(r)
  });
}
function ly(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...ie(r)
  });
}
function cy(e) {
  const t = uy((r) => (r.addIssue = (n) => {
    if (typeof n == "string")
      r.issues.push(gn(n, r.value, t._zod.def));
    else {
      const i = n;
      i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = r.value), i.inst ?? (i.inst = t), i.continue ?? (i.continue = !t._zod.def.abort), r.issues.push(gn(i));
    }
  }, e(r.value, r)));
  return t;
}
function uy(e, t) {
  const r = new Ve({
    check: "custom",
    ...ie(t)
  });
  return r._zod.check = e, r;
}
const hy = /* @__PURE__ */ Z("ZodISODateTime", (e, t) => {
  zw.init(e, t), xe.init(e, t);
});
function dy(e) {
  return Db(hy, e);
}
const fy = /* @__PURE__ */ Z("ZodISODate", (e, t) => {
  jw.init(e, t), xe.init(e, t);
});
function py(e) {
  return Zb(fy, e);
}
const gy = /* @__PURE__ */ Z("ZodISOTime", (e, t) => {
  Uw.init(e, t), xe.init(e, t);
});
function my(e) {
  return Mb(gy, e);
}
const _y = /* @__PURE__ */ Z("ZodISODuration", (e, t) => {
  Fw.init(e, t), xe.init(e, t);
});
function vy(e) {
  return Vb(_y, e);
}
const wy = (e, t) => {
  Hu.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => Tv(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => Av(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, Ds, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, Ds, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, tt = Z("ZodError", wy, {
  Parent: Error
}), by = /* @__PURE__ */ wa(tt), yy = /* @__PURE__ */ ba(tt), ky = /* @__PURE__ */ Ei(tt), Ey = /* @__PURE__ */ xi(tt), xy = /* @__PURE__ */ Iv(tt), Sy = /* @__PURE__ */ Cv(tt), Ay = /* @__PURE__ */ Nv(tt), Ty = /* @__PURE__ */ Pv(tt), Oy = /* @__PURE__ */ $v(tt), Ry = /* @__PURE__ */ zv(tt), Iy = /* @__PURE__ */ jv(tt), Cy = /* @__PURE__ */ Uv(tt), Se = /* @__PURE__ */ Z("ZodType", (e, t) => (Ee.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(ar(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
  ]
})), e.clone = (r, n) => Dt(e, r, n), e.brand = () => e, e.register = ((r, n) => (r.add(e, n), e)), e.parse = (r, n) => by(e, r, n, { callee: e.parse }), e.safeParse = (r, n) => ky(e, r, n), e.parseAsync = async (r, n) => yy(e, r, n, { callee: e.parseAsync }), e.safeParseAsync = async (r, n) => Ey(e, r, n), e.spa = e.safeParseAsync, e.encode = (r, n) => xy(e, r, n), e.decode = (r, n) => Sy(e, r, n), e.encodeAsync = async (r, n) => Ay(e, r, n), e.decodeAsync = async (r, n) => Ty(e, r, n), e.safeEncode = (r, n) => Oy(e, r, n), e.safeDecode = (r, n) => Ry(e, r, n), e.safeEncodeAsync = async (r, n) => Iy(e, r, n), e.safeDecodeAsync = async (r, n) => Cy(e, r, n), e.refine = (r, n) => e.check(x1(r, n)), e.superRefine = (r) => e.check(S1(r)), e.overwrite = (r) => e.check(zr(r)), e.optional = () => Nl(e), e.nullable = () => Pl(e), e.nullish = () => Nl(Pl(e)), e.nonoptional = (r) => _1(e, r), e.array = () => Pt(e), e.or = (r) => Qr([e, r]), e.and = (r) => a1(e, r), e.transform = (r) => $l(e, h1(r)), e.default = (r) => p1(e, r), e.prefault = (r) => m1(e, r), e.catch = (r) => w1(e, r), e.pipe = (r) => $l(e, r), e.readonly = () => k1(e), e.describe = (r) => {
  const n = e.clone();
  return Kn.add(n, { description: r }), n;
}, Object.defineProperty(e, "description", {
  get() {
    return Kn.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return Kn.get(e);
  const n = e.clone();
  return Kn.add(n, r[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), oh = /* @__PURE__ */ Z("_ZodString", (e, t) => {
  ya.init(e, t), Se.init(e, t);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...n) => e.check(Jb(...n)), e.includes = (...n) => e.check(Qb(...n)), e.startsWith = (...n) => e.check(ey(...n)), e.endsWith = (...n) => e.check(ty(...n)), e.min = (...n) => e.check(fi(...n)), e.max = (...n) => e.check(sh(...n)), e.length = (...n) => e.check(ah(...n)), e.nonempty = (...n) => e.check(fi(1, ...n)), e.lowercase = (n) => e.check(Yb(n)), e.uppercase = (n) => e.check(Xb(n)), e.trim = () => e.check(ny()), e.normalize = (...n) => e.check(ry(...n)), e.toLowerCase = () => e.check(iy()), e.toUpperCase = () => e.check(sy()), e.slugify = () => e.check(ay());
}), Ny = /* @__PURE__ */ Z("ZodString", (e, t) => {
  ya.init(e, t), oh.init(e, t), e.email = (r) => e.check(bb(Py, r)), e.url = (r) => e.check(Sb($y, r)), e.jwt = (r) => e.check(Bb(Gy, r)), e.emoji = (r) => e.check(Ab(zy, r)), e.guid = (r) => e.check(Sl(Rl, r)), e.uuid = (r) => e.check(yb(Gn, r)), e.uuidv4 = (r) => e.check(kb(Gn, r)), e.uuidv6 = (r) => e.check(Eb(Gn, r)), e.uuidv7 = (r) => e.check(xb(Gn, r)), e.nanoid = (r) => e.check(Tb(jy, r)), e.guid = (r) => e.check(Sl(Rl, r)), e.cuid = (r) => e.check(Ob(Uy, r)), e.cuid2 = (r) => e.check(Rb(Fy, r)), e.ulid = (r) => e.check(Ib(Ly, r)), e.base64 = (r) => e.check(Ub(qy, r)), e.base64url = (r) => e.check(Fb(Hy, r)), e.xid = (r) => e.check(Cb(By, r)), e.ksuid = (r) => e.check(Nb(Dy, r)), e.ipv4 = (r) => e.check(Pb(Zy, r)), e.ipv6 = (r) => e.check($b(My, r)), e.cidrv4 = (r) => e.check(zb(Vy, r)), e.cidrv6 = (r) => e.check(jb(Wy, r)), e.e164 = (r) => e.check(Lb(Ky, r)), e.datetime = (r) => e.check(dy(r)), e.date = (r) => e.check(py(r)), e.time = (r) => e.check(my(r)), e.duration = (r) => e.check(vy(r));
});
function he(e) {
  return wb(Ny, e);
}
const xe = /* @__PURE__ */ Z("ZodStringFormat", (e, t) => {
  ye.init(e, t), oh.init(e, t);
}), Py = /* @__PURE__ */ Z("ZodEmail", (e, t) => {
  Aw.init(e, t), xe.init(e, t);
}), Rl = /* @__PURE__ */ Z("ZodGUID", (e, t) => {
  xw.init(e, t), xe.init(e, t);
}), Gn = /* @__PURE__ */ Z("ZodUUID", (e, t) => {
  Sw.init(e, t), xe.init(e, t);
}), $y = /* @__PURE__ */ Z("ZodURL", (e, t) => {
  Tw.init(e, t), xe.init(e, t);
}), zy = /* @__PURE__ */ Z("ZodEmoji", (e, t) => {
  Ow.init(e, t), xe.init(e, t);
}), jy = /* @__PURE__ */ Z("ZodNanoID", (e, t) => {
  Rw.init(e, t), xe.init(e, t);
}), Uy = /* @__PURE__ */ Z("ZodCUID", (e, t) => {
  Iw.init(e, t), xe.init(e, t);
}), Fy = /* @__PURE__ */ Z("ZodCUID2", (e, t) => {
  Cw.init(e, t), xe.init(e, t);
}), Ly = /* @__PURE__ */ Z("ZodULID", (e, t) => {
  Nw.init(e, t), xe.init(e, t);
}), By = /* @__PURE__ */ Z("ZodXID", (e, t) => {
  Pw.init(e, t), xe.init(e, t);
}), Dy = /* @__PURE__ */ Z("ZodKSUID", (e, t) => {
  $w.init(e, t), xe.init(e, t);
}), Zy = /* @__PURE__ */ Z("ZodIPv4", (e, t) => {
  Lw.init(e, t), xe.init(e, t);
}), My = /* @__PURE__ */ Z("ZodIPv6", (e, t) => {
  Bw.init(e, t), xe.init(e, t);
}), Vy = /* @__PURE__ */ Z("ZodCIDRv4", (e, t) => {
  Dw.init(e, t), xe.init(e, t);
}), Wy = /* @__PURE__ */ Z("ZodCIDRv6", (e, t) => {
  Zw.init(e, t), xe.init(e, t);
}), qy = /* @__PURE__ */ Z("ZodBase64", (e, t) => {
  Mw.init(e, t), xe.init(e, t);
}), Hy = /* @__PURE__ */ Z("ZodBase64URL", (e, t) => {
  Ww.init(e, t), xe.init(e, t);
}), Ky = /* @__PURE__ */ Z("ZodE164", (e, t) => {
  qw.init(e, t), xe.init(e, t);
}), Gy = /* @__PURE__ */ Z("ZodJWT", (e, t) => {
  Kw.init(e, t), xe.init(e, t);
}), lh = /* @__PURE__ */ Z("ZodNumber", (e, t) => {
  rh.init(e, t), Se.init(e, t), e.gt = (n, i) => e.check(Tl(n, i)), e.gte = (n, i) => e.check(ps(n, i)), e.min = (n, i) => e.check(ps(n, i)), e.lt = (n, i) => e.check(Al(n, i)), e.lte = (n, i) => e.check(fs(n, i)), e.max = (n, i) => e.check(fs(n, i)), e.int = (n) => e.check(Il(n)), e.safe = (n) => e.check(Il(n)), e.positive = (n) => e.check(Tl(0, n)), e.nonnegative = (n) => e.check(ps(0, n)), e.negative = (n) => e.check(Al(0, n)), e.nonpositive = (n) => e.check(fs(0, n)), e.multipleOf = (n, i) => e.check(Ol(n, i)), e.step = (n, i) => e.check(Ol(n, i)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function Ms(e) {
  return Wb(lh, e);
}
const Jy = /* @__PURE__ */ Z("ZodNumberFormat", (e, t) => {
  Gw.init(e, t), lh.init(e, t);
});
function Il(e) {
  return qb(Jy, e);
}
const Yy = /* @__PURE__ */ Z("ZodBoolean", (e, t) => {
  Jw.init(e, t), Se.init(e, t);
});
function Xy(e) {
  return Hb(Yy, e);
}
const Qy = /* @__PURE__ */ Z("ZodUnknown", (e, t) => {
  Yw.init(e, t), Se.init(e, t);
});
function Cl() {
  return Kb(Qy);
}
const e1 = /* @__PURE__ */ Z("ZodNever", (e, t) => {
  Xw.init(e, t), Se.init(e, t);
});
function t1(e) {
  return Gb(e1, e);
}
const r1 = /* @__PURE__ */ Z("ZodArray", (e, t) => {
  Qw.init(e, t), Se.init(e, t), e.element = t.element, e.min = (r, n) => e.check(fi(r, n)), e.nonempty = (r) => e.check(fi(1, r)), e.max = (r, n) => e.check(sh(r, n)), e.length = (r, n) => e.check(ah(r, n)), e.unwrap = () => e.element;
});
function Pt(e, t) {
  return oy(r1, e, t);
}
const n1 = /* @__PURE__ */ Z("ZodObject", (e, t) => {
  tb.init(e, t), Se.init(e, t), we(e, "shape", () => t.shape), e.keyof = () => l1(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Cl() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Cl() }), e.strict = () => e.clone({ ...e._zod.def, catchall: t1() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => yv(e, r), e.safeExtend = (r) => kv(e, r), e.merge = (r) => Ev(e, r), e.pick = (r) => wv(e, r), e.omit = (r) => bv(e, r), e.partial = (...r) => xv(uh, e, r[0]), e.required = (...r) => Sv(hh, e, r[0]);
});
function jr(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...ie(t)
  };
  return new n1(r);
}
const i1 = /* @__PURE__ */ Z("ZodUnion", (e, t) => {
  rb.init(e, t), Se.init(e, t), e.options = t.options;
});
function Qr(e, t) {
  return new i1({
    type: "union",
    options: e,
    ...ie(t)
  });
}
const s1 = /* @__PURE__ */ Z("ZodIntersection", (e, t) => {
  nb.init(e, t), Se.init(e, t);
});
function a1(e, t) {
  return new s1({
    type: "intersection",
    left: e,
    right: t
  });
}
const o1 = /* @__PURE__ */ Z("ZodRecord", (e, t) => {
  ib.init(e, t), Se.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function ch(e, t, r) {
  return new o1({
    type: "record",
    keyType: e,
    valueType: t,
    ...ie(r)
  });
}
const Vs = /* @__PURE__ */ Z("ZodEnum", (e, t) => {
  sb.init(e, t), Se.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (n, i) => {
    const s = {};
    for (const a of n)
      if (r.has(a))
        s[a] = t.entries[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Vs({
      ...t,
      checks: [],
      ...ie(i),
      entries: s
    });
  }, e.exclude = (n, i) => {
    const s = { ...t.entries };
    for (const a of n)
      if (r.has(a))
        delete s[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Vs({
      ...t,
      checks: [],
      ...ie(i),
      entries: s
    });
  };
});
function l1(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new Vs({
    type: "enum",
    entries: r,
    ...ie(t)
  });
}
const c1 = /* @__PURE__ */ Z("ZodLiteral", (e, t) => {
  ab.init(e, t), Se.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function dt(e, t) {
  return new c1({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...ie(t)
  });
}
const u1 = /* @__PURE__ */ Z("ZodTransform", (e, t) => {
  ob.init(e, t), Se.init(e, t), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new Zu(e.constructor.name);
    r.addIssue = (s) => {
      if (typeof s == "string")
        r.issues.push(gn(s, r.value, t));
      else {
        const a = s;
        a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = r.value), a.inst ?? (a.inst = e), r.issues.push(gn(a));
      }
    };
    const i = t.transform(r.value, r);
    return i instanceof Promise ? i.then((s) => (r.value = s, r)) : (r.value = i, r);
  };
});
function h1(e) {
  return new u1({
    type: "transform",
    transform: e
  });
}
const uh = /* @__PURE__ */ Z("ZodOptional", (e, t) => {
  lb.init(e, t), Se.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Nl(e) {
  return new uh({
    type: "optional",
    innerType: e
  });
}
const d1 = /* @__PURE__ */ Z("ZodNullable", (e, t) => {
  cb.init(e, t), Se.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Pl(e) {
  return new d1({
    type: "nullable",
    innerType: e
  });
}
const f1 = /* @__PURE__ */ Z("ZodDefault", (e, t) => {
  ub.init(e, t), Se.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function p1(e, t) {
  return new f1({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Wu(t);
    }
  });
}
const g1 = /* @__PURE__ */ Z("ZodPrefault", (e, t) => {
  hb.init(e, t), Se.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function m1(e, t) {
  return new g1({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Wu(t);
    }
  });
}
const hh = /* @__PURE__ */ Z("ZodNonOptional", (e, t) => {
  db.init(e, t), Se.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function _1(e, t) {
  return new hh({
    type: "nonoptional",
    innerType: e,
    ...ie(t)
  });
}
const v1 = /* @__PURE__ */ Z("ZodCatch", (e, t) => {
  fb.init(e, t), Se.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function w1(e, t) {
  return new v1({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const b1 = /* @__PURE__ */ Z("ZodPipe", (e, t) => {
  pb.init(e, t), Se.init(e, t), e.in = t.in, e.out = t.out;
});
function $l(e, t) {
  return new b1({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const y1 = /* @__PURE__ */ Z("ZodReadonly", (e, t) => {
  gb.init(e, t), Se.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function k1(e) {
  return new y1({
    type: "readonly",
    innerType: e
  });
}
const E1 = /* @__PURE__ */ Z("ZodCustom", (e, t) => {
  mb.init(e, t), Se.init(e, t);
});
function x1(e, t = {}) {
  return ly(E1, e, t);
}
function S1(e) {
  return cy(e);
}
const zl = Qr([he(), jr({
  imageURL: he(),
  width: Ms().optional(),
  height: Ms().optional()
})]), A1 = jr({
  version: he(),
  buildVersion: he().optional(),
  marketingVersion: he().optional(),
  date: he(),
  downloadURL: he(),
  localizedDescription: he().optional(),
  size: Ms().optional(),
  minOSVersion: he().optional(),
  maxOSVersion: he().optional()
}), T1 = jr({
  entitlements: Pt(he()).optional(),
  privacy: ch(he(), he()).optional()
}), O1 = jr({
  name: he(),
  bundleIdentifier: he(),
  developerName: he(),
  subtitle: he().optional(),
  localizedDescription: he(),
  iconURL: he(),
  tintColor: he().optional(),
  screenshots: Qr([Pt(zl), ch(Qr([dt("iphone"), dt("ipad")]), Pt(zl))]).optional(),
  versions: Pt(A1),
  appPermissions: T1.optional(),
  category: Qr([dt("developer"), dt("entertainment"), dt("games"), dt("lifestyle"), dt("other"), dt("photo-video"), dt("social"), dt("utilities")]).optional()
}), R1 = jr({
  title: he(),
  identifier: he(),
  caption: he().optional(),
  date: he(),
  tintColor: he().optional(),
  imageURL: he().optional(),
  notify: Xy().optional(),
  url: he().optional(),
  appID: he().optional()
}), I1 = jr({
  name: he(),
  subtitle: he().optional(),
  description: he().optional(),
  iconURL: he().optional(),
  headerURL: he().optional(),
  website: he().optional(),
  tintColor: he().optional(),
  featuredApps: Pt(he()).optional(),
  apps: Pt(O1),
  news: Pt(R1).optional()
}), C1 = {
  name: "",
  bundle_identifier: "",
  category: "other",
  description: null,
  subtitle: null,
  ipad_screenshots: [],
  iphone_screenshots: [],
  created_at: (/* @__PURE__ */ new Date()).toISOString(),
  icon_path: null,
  entitlements: [],
  privacy: []
}, K1 = () => {
  const { session: e, createApp: t, reloadApps: r } = Me(), n = ot(), i = en(null), s = en(null), [a, o] = $e(null);
  return /* @__PURE__ */ Y("div", { className: "developer-container", children: [
    /* @__PURE__ */ j("h1", { style: { marginBottom: 0 }, children: "Create New App" }),
    /* @__PURE__ */ j(
      "h4",
      {
        style: { marginBottom: "1.5rem" },
        className: "text-link",
        onClick: () => n("/developers"),
        children: "Back to Dashboard"
      }
    ),
    /* @__PURE__ */ Y("section", { className: "developer-page", children: [
      /* @__PURE__ */ Y(Ie, { className: "import-ipa", children: [
        /* @__PURE__ */ Y("div", { children: [
          /* @__PURE__ */ j("h2", { children: "Import App" }),
          /* @__PURE__ */ j("p", { style: { color: "var(--label-secondary)" }, children: "Import your app from an existing .ipa file or AltStore source" })
        ] }),
        /* @__PURE__ */ j(
          "button",
          {
            onClick: () => {
              i.current?.click();
            },
            children: "Import from an IPA file"
          }
        ),
        /* @__PURE__ */ j(
          "button",
          {
            onClick: () => {
              s.current?.click();
            },
            children: "Import from AltStore Source"
          }
        ),
        /* @__PURE__ */ j(
          "input",
          {
            type: "file",
            accept: ".ipa",
            style: { display: "none" },
            ref: i,
            onChange: async (l) => {
              const c = l.target.files?.[0];
              if (!c) return;
              let u = ov(
                c,
                t,
                e,
                n,
                r
              );
              ce.promise(u, {
                loading: "Importing IPA...",
                success: "IPA imported successfully!",
                error: (d) => "Failed to import IPA: " + String(d)
              });
            }
          }
        ),
        /* @__PURE__ */ j(
          "input",
          {
            type: "file",
            accept: ".json",
            style: { display: "none" },
            ref: s,
            onChange: async (l) => {
              const c = l.target.files?.[0];
              if (!c) return;
              let u = async () => {
                let d = await c.text(), f = JSON.parse(d), h = I1.parse(f);
                o(h);
              };
              ce.promise(u(), {
                loading: "Loading AltStore Source...",
                success: "AltStore Source loaded successfully!",
                error: (d) => (console.error(d), "Failed to load AltStore Source: " + String(d))
              });
            }
          }
        )
      ] }),
      /* @__PURE__ */ j(
        Xc,
        {
          label: "Or, manually create",
          app: C1,
          save: async (l) => {
            if (!e || !e.user)
              return ce.error("You must be logged in to create an app.");
            const c = {
              ...l,
              owner: e.user.id,
              created_at: (/* @__PURE__ */ new Date()).toISOString()
            };
            c.name = c.name.trim(), c.bundle_identifier = c.bundle_identifier.trim(), c.subtitle = c.subtitle?.trim() || null, c.description = c.description?.trim() || null;
            const u = await t(c);
            ce.success("App created successfully!"), u?.error || n("/developers");
          }
        }
      ),
      a && /* @__PURE__ */ j(
        uv,
        {
          source: a,
          cancel: () => {
            o(null);
          }
        }
      )
    ] })
  ] });
}, jl = [
  {
    label: "Version",
    description: "The version number matching CFBundleShortVersionString.",
    id: "version",
    placeholder: "1.0.0",
    required: !0,
    type: "text"
  },
  {
    label: "Build Version",
    description: "The build version, matching CFBundleVersion.",
    id: "build_version",
    placeholder: "1",
    required: !0,
    type: "text"
  },
  {
    label: "Download URL",
    description: "The direct download link to the .ipa file.",
    id: "download_url",
    placeholder: "https://example.com/app.ipa",
    type: "text",
    required: !0
  },
  {
    label: "Checksum",
    description: "The SHA-256 checksum of the .ipa file.",
    id: "checksum",
    placeholder: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    type: "text",
    required: !0,
    validate: (e) => /^[a-f0-9]{64}$/.test(e)
  },
  {
    label: "Changelog",
    id: "changelog",
    placeholder: "The best update ever, available on StikStore.",
    type: "textarea"
  }
], dh = ({
  version: e,
  save: t,
  titleOverride: r
}) => {
  const [n, i] = $e(e);
  return $t(() => {
    i(e);
  }, [e]), /* @__PURE__ */ j(Ie, { children: /* @__PURE__ */ Y("form", { className: "edit-app-card", children: [
    /* @__PURE__ */ Y("div", { className: "edit-app-title", children: [
      /* @__PURE__ */ j("h2", { children: r ?? "Version Metadata" }),
      /* @__PURE__ */ Y("p", { style: { color: "var(--label-secondary)" }, children: [
        "Fields marked with ",
        /* @__PURE__ */ j("span", { className: "edit-required", children: "*" }),
        " are required."
      ] })
    ] }),
    jl.map((s) => /* @__PURE__ */ j(
      Yc,
      {
        field: s,
        updateValue: (a) => {
          i({ ...n, [s.id]: a });
        },
        value: n[s.id]
      },
      s.id
    )),
    /* @__PURE__ */ j(
      "button",
      {
        className: "primary",
        style: {
          marginTop: "1rem"
        },
        type: "submit",
        onClick: (s) => {
          if (s.preventDefault(), !n.version || !n.build_version || !n.download_url)
            return ce.error("Please fill in all required fields");
          for (const a of jl)
            if (a.validate) {
              const o = n[a.id];
              if (typeof o == "string" && !a.validate(o))
                return ce.error(`Invalid value for ${a.label}`);
            }
          t(n);
        },
        disabled: !n.version || !n.build_version || !n.download_url || n === e,
        children: "Save Version"
      }
    )
  ] }) });
}, N1 = {
  build_version: "",
  changelog: null,
  created_at: (/* @__PURE__ */ new Date()).toISOString(),
  download_url: "",
  version: "",
  checksum: null
}, G1 = () => {
  const { id: e } = Bt(), { apps: t, session: r } = Me(), n = ot(), i = en(null), s = t.find((a) => a.id === Number(e));
  return s ? /* @__PURE__ */ Y("div", { className: "developer-container app-page-container", children: [
    /* @__PURE__ */ j(
      an,
      {
        app: s,
        showBackToApp: !0,
        backToAppPage: "versions",
        titleOverride: `New Version for ${s.name}`
      }
    ),
    /* @__PURE__ */ Y("section", { className: "developer-page", children: [
      /* @__PURE__ */ Y(Ie, { className: "import-ipa", children: [
        /* @__PURE__ */ Y("div", { children: [
          /* @__PURE__ */ j("h2", { children: "Import Version" }),
          /* @__PURE__ */ j("p", { style: { color: "var(--label-secondary)" }, children: "Import version data directly from an IPA file" })
        ] }),
        /* @__PURE__ */ j(
          "button",
          {
            onClick: () => {
              i.current?.click();
            },
            children: "Import from an IPA file"
          }
        ),
        /* @__PURE__ */ j(
          "input",
          {
            type: "file",
            accept: ".ipa",
            style: { display: "none" },
            ref: i,
            onChange: async (a) => {
              const o = a.target.files?.[0];
              if (!o) return;
              let l = av(o, s);
              ce.promise(l, {
                loading: "Importing IPA...",
                success: "IPA imported successfully!",
                error: (c) => "Failed to import IPA: " + String(c)
              }), l.then((c) => {
                c && c.data && n(`/developers/app/${s.id}/version/${c.data.id}`);
              });
            }
          }
        )
      ] }),
      /* @__PURE__ */ j(
        dh,
        {
          titleOverride: "Or, manually create",
          version: N1,
          save: async (a) => {
            if (!r || !r.user || !s)
              return ce.error("You must be logged in to create an app.");
            const o = {
              ...a,
              app_id: s.id,
              created_at: (/* @__PURE__ */ new Date()).toISOString()
            };
            if (!r) {
              ce.error("You must be logged in to create an app.");
              return;
            }
            const l = await ue().from("versions").insert([o]);
            l.error ? (console.error(l.error), ce.error(Ze(l.error, "version"))) : l.data && (ce.success("Version created successfully!"), n("/developers/app/" + s.id));
          }
        }
      )
    ] })
  ] }) : /* @__PURE__ */ j("div", { className: "developer-container", children: /* @__PURE__ */ j("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
}, fh = Fl(void 0), J1 = ({
  children: e
}) => {
  const [t, r] = $e(
    null
  ), n = (s) => {
    r(s);
  }, i = () => {
    r(null);
  };
  return /* @__PURE__ */ Y(fh.Provider, { value: { showPrompt: n, hidePrompt: i }, children: [
    e,
    t && /* @__PURE__ */ j("div", { className: "prompt-modal", children: /* @__PURE__ */ Y(Ie, { children: [
      /* @__PURE__ */ j("h1", { children: t.title }),
      /* @__PURE__ */ j("p", { children: t.content }),
      /* @__PURE__ */ j("div", { className: "prompt-buttons", children: t.options.map((s, a) => /* @__PURE__ */ j(
        "button",
        {
          className: s.className,
          onClick: () => {
            s.action(), i();
          },
          children: s.text
        },
        a
      )) })
    ] }) })
  ] });
}, ph = () => {
  const e = wh(fh);
  if (!e)
    throw new Error("usePrompt must be used within a PromptProvider");
  return e;
}, Y1 = () => {
  const { id: e, versionId: t } = Bt(), { apps: r, reloadApps: n } = Me(), i = r.find((d) => d.id === Number(e)), [s, a] = $e(!0), [o, l] = $e(null), { showPrompt: c } = ph(), u = ot();
  return $t(() => {
    (async () => {
      if (!i) return;
      const { data: f, error: h } = await ue().from("versions").select("*").eq("app_id", i.id).eq("id", Number(t)).single();
      a(!1), h ? (console.error(h), ce.error(Ze(h, "version"))) : l(f);
    })();
  }, [i]), i ? !o && !s ? /* @__PURE__ */ j("div", { className: "developer-container", children: /* @__PURE__ */ j("h1", { style: { marginBottom: 0 }, children: "Version Not Found" }) }) : s || !o ? /* @__PURE__ */ j("div", { className: "developer-container app-page-container", children: /* @__PURE__ */ j(an, { app: i, showBackToApp: !0 }) }) : /* @__PURE__ */ Y("div", { className: "developer-container app-page-container", children: [
    /* @__PURE__ */ j(
      an,
      {
        app: i,
        titleOverride: `Version ${o.version} (${o.build_version})`,
        subtitleOverride: i.name,
        showBackToApp: !0
      }
    ),
    /* @__PURE__ */ Y("section", { className: "developer-page", children: [
      /* @__PURE__ */ j(
        dh,
        {
          version: o,
          save: async (d) => {
            const f = await ue().from("versions").update(d).eq("id", Number(o?.id)).single();
            f.error ? (console.error(f.error), ce.error(Ze(f.error, "version"))) : (ce.success("Version updated successfully"), n());
          }
        }
      ),
      /* @__PURE__ */ Y(Ie, { className: "app-subcard management-card delete-version-card", children: [
        /* @__PURE__ */ Y("div", { children: [
          /* @__PURE__ */ j("h2", { children: "Delete Version" }),
          /* @__PURE__ */ j("p", { className: "app-subtext", children: "This action cannot be undone." })
        ] }),
        /* @__PURE__ */ j(
          "button",
          {
            className: "danger",
            onClick: async () => {
              c({
                title: "Delete Version",
                content: `Are you sure you want to delete version ${o.version} (${o.build_version}) from ${i.name}? This action cannot be undone.`,
                options: [
                  {
                    text: "Delete",
                    className: "danger",
                    action: async () => {
                      const d = await ue().from("versions").delete().eq("id", o.id);
                      d.error ? (console.error(d.error), ce.error(
                        Ze(d.error, "version")
                      )) : (ce.success("Version deleted successfully"), u("/developers/app/" + i.id), n());
                    }
                  },
                  { text: "Cancel", action: () => {
                  }, className: "" }
                ]
              });
            },
            children: "Delete Version"
          }
        )
      ] })
    ] })
  ] }) : /* @__PURE__ */ j("div", { className: "developer-container", children: /* @__PURE__ */ j("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
}, P1 = [
  "info",
  "permissions",
  "versions",
  "screenshots",
  "management"
], X1 = () => {
  const e = ot(), t = Lt(), { id: r } = Bt(), { apps: n } = Me(), i = n.find((a) => a.id === Number(r)), s = t.pathname.split("/")[4] || "info";
  return i ? /* @__PURE__ */ Y("div", { className: "developer-container app-page-container", children: [
    /* @__PURE__ */ j(an, { app: i }),
    /* @__PURE__ */ j(Ie, { className: "tab-buttons", children: P1.map((a) => /* @__PURE__ */ j(
      "h3",
      {
        className: "text-link" + (s === a ? " text-link-active" : ""),
        onClick: () => e(`/developers/app/${i.id}/${a}`),
        children: a.charAt(0).toUpperCase() + a.slice(1)
      },
      a
    )) }),
    /* @__PURE__ */ j(Hp, {})
  ] }) : /* @__PURE__ */ j("div", { className: "developer-container", children: /* @__PURE__ */ j("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
}, Q1 = () => {
  const { id: e } = Bt(), { apps: t, reloadApps: r, uploadIcon: n } = Me(), i = t.find((o) => o.id === Number(e)), s = en(null), a = Ws(
    () => i?.icon_path ? ue().storage.from("app-images").getPublicUrl(i.icon_path).data.publicUrl : "/default-icon.png",
    [i?.icon_path]
  );
  return i ? /* @__PURE__ */ Y("section", { className: "developer-page", children: [
    /* @__PURE__ */ j(
      Xc,
      {
        style: { flexGrow: 2 },
        app: i,
        save: async (o) => {
          const l = await ue().from("apps").update(o).eq("id", Number(i.id)).single();
          l.error ? (console.error(l.error), ce.error(Ze(l.error, "app"))) : (ce.success("App updated successfully"), r());
        }
      }
    ),
    /* @__PURE__ */ Y(Ie, { className: "app-subcard icon-card", children: [
      /* @__PURE__ */ Y("div", { children: [
        /* @__PURE__ */ j("h2", { style: { margin: 0 }, children: "App Icon" }),
        /* @__PURE__ */ j("p", { className: "app-subtext", children: "Icons will be masked to an iOS style shape." })
      ] }),
      /* @__PURE__ */ j("img", { src: a, className: "app-icon" }),
      /* @__PURE__ */ Y("div", { style: { width: "100%" }, children: [
        /* @__PURE__ */ j(
          "button",
          {
            onClick: () => {
              s.current?.click();
            },
            children: "Upload New Icon"
          }
        ),
        /* @__PURE__ */ j(
          "p",
          {
            className: "app-subtext",
            style: {
              marginTop: "0.5rem"
            },
            children: "Max upload size: 3MB"
          }
        )
      ] }),
      /* @__PURE__ */ j(
        "input",
        {
          type: "file",
          style: { display: "none" },
          ref: s,
          accept: "image/*",
          onChange: async (o) => {
            const l = o.target.files?.[0];
            !l || !i || ce.promise(n(l, i), {
              loading: "Uploading icon...",
              success: "Icon uploaded successfully!",
              error: (c) => c instanceof Error ? c.message : String(c)
            });
          }
        }
      )
    ] })
  ] }) : /* @__PURE__ */ j("div", { className: "developer-container", children: /* @__PURE__ */ j("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
}, ek = () => {
  const { id: e } = Bt(), { apps: t, reloadApps: r } = Me(), n = t.find((l) => l.id === Number(e)), [i, s] = $e(() => n ? n.entitlements || [] : []), [a, o] = $e(() => n ? n.privacy || [] : []);
  return $t(() => {
    n && s(n.entitlements || []);
  }, [n?.entitlements]), $t(() => {
    n && o(n.privacy || []);
  }, [n?.privacy]), n ? /* @__PURE__ */ j("section", { className: "developer-page", children: /* @__PURE__ */ Y("div", { className: "entitlements-container", children: [
    /* @__PURE__ */ Y(Ie, { className: "app-subcard entitlements-card", children: [
      /* @__PURE__ */ Y("div", { children: [
        /* @__PURE__ */ j("h2", { children: "Save Changes" }),
        /* @__PURE__ */ j("p", { className: "app-subtext", children: "Save changes to entitlements and privacy info" })
      ] }),
      /* @__PURE__ */ j(
        "button",
        {
          className: "primary",
          disabled: a === n.privacy && i === n.entitlements || a.some((l) => l[0] === "" || l[1] === "") || i.some((l) => l === ""),
          onClick: async () => {
            const l = await ue().from("apps").update({ privacy: a, entitlements: i }).eq("id", n.id).single();
            l.error ? (console.error(l.error), ce.error(Ze(l.error, "app"))) : (ce.success("Privacy Info updated successfully"), r());
          },
          children: "Save"
        }
      )
    ] }),
    /* @__PURE__ */ Y(Ie, { className: "app-subcard entitlements-card", children: [
      /* @__PURE__ */ Y("div", { children: [
        /* @__PURE__ */ j("h2", { children: "Entitlements" }),
        /* @__PURE__ */ Y("p", { className: "app-subtext", children: [
          "List all entitelements except",
          " ",
          /* @__PURE__ */ j("span", { className: "entitlement-text", children: "com.app.developer.team-identifier" }),
          " ",
          "and",
          " ",
          /* @__PURE__ */ j("span", { className: "entitlement-text", children: "application-identifier" })
        ] })
      ] }),
      /* @__PURE__ */ Y("ul", { children: [
        i.length === 0 && /* @__PURE__ */ j("p", { children: "No entitlements added yet." }),
        i.map((l, c) => /* @__PURE__ */ Y("li", { className: "entitlement-item", children: [
          /* @__PURE__ */ j(
            "input",
            {
              type: "text",
              value: l,
              onChange: (u) => {
                const d = u.target.value;
                s((f) => {
                  const h = [...f];
                  return h[c] = d, h;
                });
              },
              placeholder: "com.apple.security.application-groups"
            }
          ),
          /* @__PURE__ */ j(
            "button",
            {
              className: "danger entitlement-delete-button",
              onClick: () => {
                s((u) => u.filter((d, f) => f !== c));
              },
              children: "Delete"
            }
          )
        ] }, c))
      ] }),
      /* @__PURE__ */ j(
        "button",
        {
          onClick: () => {
            s((l) => [...l, ""]);
          },
          children: "Add entitlement"
        }
      )
    ] }),
    /* @__PURE__ */ Y(Ie, { className: "app-subcard entitlements-card", children: [
      /* @__PURE__ */ Y("div", { children: [
        /* @__PURE__ */ j("h2", { children: "Privacy Info" }),
        /* @__PURE__ */ j("p", { className: "app-subtext", children: "List all usage descriptions from your Info.plist" })
      ] }),
      /* @__PURE__ */ Y("ul", { children: [
        a.length === 0 && /* @__PURE__ */ j("p", { children: "No privacy entries added yet." }),
        a.map((l, c) => /* @__PURE__ */ Y("li", { className: "entitlement-item", children: [
          /* @__PURE__ */ j(
            "input",
            {
              type: "text",
              value: l[0],
              onChange: (u) => {
                const d = u.target.value;
                o((f) => {
                  const h = [...f];
                  return h[c][0] = d, h;
                });
              },
              placeholder: "NSCameraUsageDescription"
            }
          ),
          /* @__PURE__ */ j(
            "input",
            {
              type: "text",
              value: l[1],
              onChange: (u) => {
                const d = u.target.value;
                o((f) => {
                  const h = [...f];
                  return h[c][1] = d, h;
                });
              },
              placeholder: "This app requires camera access to scan QR codes."
            }
          ),
          /* @__PURE__ */ j(
            "button",
            {
              className: "danger entitlement-delete-button",
              onClick: () => {
                o((u) => u.filter((d, f) => f !== c));
              },
              children: "Delete"
            }
          )
        ] }, c))
      ] }),
      /* @__PURE__ */ j(
        "button",
        {
          onClick: () => {
            o((l) => [...l, ["", ""]]);
          },
          children: "Add privacy entry"
        }
      )
    ] })
  ] }) }) : /* @__PURE__ */ j("div", { className: "developer-container", children: /* @__PURE__ */ j("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
}, tk = () => {
  const { id: e } = Bt(), { apps: t } = Me(), r = ot(), n = t.find((l) => l.id === Number(e)), [i, s] = $e(!0), [a, o] = $e([]);
  return $t(() => {
    (async () => {
      if (!n) return;
      const { data: c, error: u } = await ue().from("versions").select("*").eq("app_id", n.id).order("created_at", { ascending: !1 });
      u ? (console.error(u), ce.error(Ze(u, "version"))) : o(c), s(!1);
    })();
  }, [n]), n ? /* @__PURE__ */ j("section", { className: "developer-page", children: /* @__PURE__ */ Y(Ie, { className: "app-subcard versions-card", children: [
    /* @__PURE__ */ j("h2", { children: "Versions" }),
    a.length === 0 && !i && /* @__PURE__ */ j("p", { className: "app-subtext", children: "It seems you don't have any versions yet. Let's change that!" }),
    /* @__PURE__ */ j("ul", { style: { listStyleType: "none", padding: 0, margin: 0 }, children: a.map((l) => /* @__PURE__ */ Y(
      "li",
      {
        className: "button developer-app-list-item",
        onClick: () => {
          r(`/developers/app/${n.id}/version/${l.id}`);
        },
        children: [
          l.version,
          " (",
          l.build_version,
          ")"
        ]
      },
      l.id
    )) }),
    /* @__PURE__ */ j(
      "button",
      {
        onClick: () => {
          r(`/developers/app/${n.id}/new-version`);
        },
        className: "primary",
        children: "New Version"
      }
    )
  ] }) }) : /* @__PURE__ */ j("div", { className: "developer-container", children: /* @__PURE__ */ j("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
}, Ul = ({
  isIpad: e,
  app: t
}) => {
  const { uploadScreenshot: r } = Me(), n = en(null);
  return /* @__PURE__ */ Y("div", { className: "screenshots-inner", children: [
    /* @__PURE__ */ j("div", { className: "screenshots-grid", children: (e ? t.ipad_screenshots : t.iphone_screenshots).map(
      (i, s) => /* @__PURE__ */ j(
        $1,
        {
          screenshot: i,
          app: t,
          isIpad: e
        },
        s
      )
    ) }),
    /* @__PURE__ */ Y("div", { style: { textAlign: "center" }, children: [
      /* @__PURE__ */ j(
        "button",
        {
          onClick: () => {
            n.current?.click();
          },
          children: "Upload New Screenshot"
        }
      ),
      /* @__PURE__ */ Y(
        "p",
        {
          style: {
            color: "var(--label-secondary)",
            margin: 0,
            marginTop: "0.5rem"
          },
          children: [
            "Max upload size: 3MB. Supported aspect ratios:",
            " ",
            e ? "4:3" : "9:19.5, 9:16, 3:4",
            "."
          ]
        }
      )
    ] }),
    /* @__PURE__ */ j(
      "input",
      {
        ref: n,
        type: "file",
        style: { display: "none" },
        multiple: !0,
        accept: "image/*",
        onChange: (i) => {
          const s = i.target.files;
          if (!s) return;
          let a = async () => {
            await r(Array.from(s), t, e);
          };
          ce.promise(a, {
            loading: `Uploading screenshot${s.length > 1 ? "s" : ""}...`,
            success: `Screenshot${s.length > 1 ? "s" : ""} uploaded successfully!`,
            error: (o) => `Failed to upload screenshot${s.length > 1 ? "s" : ""}: ${String(o)}`
          });
        }
      }
    )
  ] });
}, $1 = ({
  screenshot: e,
  app: t,
  isIpad: r
}) => {
  const n = Ws(
    () => e ? ue().storage.from("app-images").getPublicUrl(e.path).data.publicUrl : "/default-icon.png",
    [e]
  ), { reloadApps: i } = Me();
  let s = e.width, a = e.height, o = s / a, l = Math.min(400, 400 * o), c = l / o;
  return /* @__PURE__ */ Y("div", { className: "screenshot-image-container", children: [
    /* @__PURE__ */ j(
      "div",
      {
        onClick: async () => {
          let { error: u } = await ue().storage.from("app-images").remove([e.path]);
          if (u) {
            console.error("Error deleting screenshot from storage:", u), ce.error(
              "Error deleting screenshot from storage: " + u.message
            );
            return;
          }
          const d = r ? "ipad_screenshots" : "iphone_screenshots", f = t[d].filter((g) => g.path !== e.path), h = await ue().from("apps").update({
            [d]: f
          }).eq("id", t.id).single();
          if (h.error) {
            console.error("Error updating app with screenshot URL:", h.error), ce.error("Error deleting screenshot: " + h.error.message);
            return;
          } else
            i(), ce.success("Screenshot deleted successfully.");
        },
        children: "Delete"
      }
    ),
    /* @__PURE__ */ j(
      "img",
      {
        src: n,
        alt: "Screenshot",
        className: "screenshot-image",
        width: l,
        height: c
      }
    )
  ] });
}, rk = () => {
  const { id: e } = Bt(), { apps: t } = Me(), r = t.find((n) => n.id === Number(e));
  return r ? /* @__PURE__ */ Y("section", { className: "developer-page", children: [
    /* @__PURE__ */ Y(Ie, { className: "app-subcard screenshots-card", children: [
      /* @__PURE__ */ j("h2", { children: "iPhone Screenshots" }),
      /* @__PURE__ */ j("div", { className: "screenshots-container", children: /* @__PURE__ */ j(Ul, { isIpad: !1, app: r }) })
    ] }),
    /* @__PURE__ */ Y(Ie, { className: "app-subcard screenshots-card", children: [
      /* @__PURE__ */ j("h2", { children: "iPad Screenshots" }),
      /* @__PURE__ */ j("div", { className: "screenshots-container", children: /* @__PURE__ */ j(Ul, { isIpad: !0, app: r }) })
    ] })
  ] }) : /* @__PURE__ */ j("div", { className: "developer-container", children: /* @__PURE__ */ j("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
};
async function z1(e, t, r) {
  const n = await ue().auth.getUser();
  if (n.error || !n.data.user) {
    ce.error("You must be logged in to delete an app.");
    return;
  }
  const i = await ue().from("apps").delete().eq("id", e.id);
  if (i.error) {
    console.error(i.error), ce.error(Ze(i.error, "app"));
    return;
  }
  const { data: s, error: a } = await ue().storage.from("app-images").list(`${n.data.user.id}/${e.id}`);
  if (a) {
    console.error(a), ce.error(
      "Successfully deleted app, but failed to list images to delete: " + a.message
    ), t("/developers"), r();
    return;
  }
  const o = s.map(
    (c) => `${n.data.user.id}/${e.id}/${c.name}`
  );
  if (o.length === 0) {
    ce.success("App deleted successfully."), t("/developers"), r();
    return;
  }
  const { error: l } = await ue().storage.from("app-images").remove(o);
  if (l) {
    console.error(l), ce.error(
      "Successfully deleted app, but failed to delete images: " + l.message
    ), t("/developers"), r();
    return;
  }
  ce.success("App deleted successfully."), t("/developers"), r();
}
const nk = () => {
  const { id: e } = Bt(), { apps: t, reloadApps: r } = Me(), n = ot(), i = t.find((a) => a.id === Number(e)), { showPrompt: s } = ph();
  return i ? /* @__PURE__ */ j("section", { className: "developer-page", children: /* @__PURE__ */ Y(Ie, { className: "app-subcard management-card", children: [
    /* @__PURE__ */ j("h2", { style: { marginTop: 0 }, children: "Danger Zone" }),
    /* @__PURE__ */ j(
      "button",
      {
        className: "danger",
        onClick: async () => {
          s({
            title: "Delete App",
            content: `Are you sure you want to delete the app "${i.name}"? This action cannot be undone.`,
            options: [
              {
                text: "Delete",
                className: "danger",
                action: async () => {
                  z1(i, n, r);
                }
              },
              { text: "Cancel", action: () => {
              }, className: "" }
            ]
          });
        },
        children: "Delete App"
      }
    )
  ] }) }) : /* @__PURE__ */ j("div", { className: "developer-container", children: /* @__PURE__ */ j("h1", { style: { marginBottom: 0 }, children: "App Not Found" }) });
};
export {
  q1 as AccountSettings,
  Q1 as AppInfo,
  X1 as AppLayout,
  nk as AppManagement,
  ek as AppPermissions,
  rk as AppScreenshots,
  tk as AppVersions,
  H1 as Developer,
  W1 as DeveloperProvider,
  Ie as GlassCard,
  K1 as NewApp,
  G1 as NewVersion,
  J1 as PromptProvider,
  Y1 as Version,
  Jf as beautifyAuthError,
  Ze as beautifyPostgrestError,
  ue as getSupabase,
  V1 as initSupabase,
  ph as usePrompt,
  Me as useSession
};

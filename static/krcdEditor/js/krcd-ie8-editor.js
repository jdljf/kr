/*!
 * KRCD v4.0  
 * author: tlzzu@outlook.com 
 * createtime: Mon, 03 Sep 2018 16:45:10 GMT
 */
! function (e) {
  function t(a) {
    if (n[a]) return n[a].exports;
    var r = n[a] = {
      i: a,
      l: !1,
      exports: {}
    };
    return e[a].call(r.exports, r, r.exports, t), r.l = !0, r.exports
  }
  var n = {};
  t.m = e, t.c = n, t.d = function (e, n, a) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: a
    })
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"]
    } : function () {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "", t(t.s = 489)
}([function (e, t, n) {
  (function (e) {
    ! function (t, n) {
      e.exports = n()
    }(0, function () {
      "use strict";

      function t() {
        return Ya.apply(null, arguments)
      }

      function a(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
      }

      function r(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
      }

      function i(e) {
        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
        var t;
        for (t in e)
          if (e.hasOwnProperty(t)) return !1;
        return !0
      }

      function o(e) {
        return void 0 === e
      }

      function s(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
      }

      function d(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
      }

      function l(e, t) {
        var n, a = [];
        for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
        return a
      }

      function u(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }

      function c(e, t) {
        for (var n in t) u(t, n) && (e[n] = t[n]);
        return u(t, "toString") && (e.toString = t.toString), u(t, "valueOf") && (e.valueOf = t.valueOf), e
      }

      function m(e, t, n, a) {
        return Dt(e, t, n, a, !0).utc()
      }

      function h() {
        return {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1
        }
      }

      function f(e) {
        return null == e._pf && (e._pf = h()), e._pf
      }

      function _(e) {
        if (null == e._isValid) {
          var t = f(e),
            n = Ca.call(t.parsedDateParts, function (e) {
              return null != e
            }),
            a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
          if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && t.bigHour === undefined), null != Object.isFrozen && Object.isFrozen(e)) return a;
          e._isValid = a
        }
        return e._isValid
      }

      function p(e) {
        var t = m(NaN);
        return null != e ? c(f(t), e) : f(t).userInvalidated = !0, t
      }

      function y(e, t) {
        var n, a, r;
        if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = f(t)), o(t._locale) || (e._locale = t._locale), Ha.length > 0)
          for (n = 0; n < Ha.length; n++) a = Ha[n], r = t[a], o(r) || (e[a] = r);
        return e
      }

      function M(e) {
        y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Aa && (Aa = !0, t.updateOffset(this), Aa = !1)
      }

      function g(e) {
        return e instanceof M || null != e && null != e._isAMomentObject
      }

      function v(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
      }

      function T(e) {
        var t = +e,
          n = 0;
        return 0 !== t && isFinite(t) && (n = v(t)), n
      }

      function b(e, t, n) {
        var a, r = Math.min(e.length, t.length),
          i = Math.abs(e.length - t.length),
          o = 0;
        for (a = 0; a < r; a++)(n && e[a] !== t[a] || !n && T(e[a]) !== T(t[a])) && o++;
        return o + i
      }

      function S(e) {
        !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
      }

      function L(e, n) {
        var a = !0;
        return c(function () {
          if (null != t.deprecationHandler && t.deprecationHandler(null, e), a) {
            for (var r, i = [], o = 0; o < arguments.length; o++) {
              if (r = "", "object" == typeof arguments[o]) {
                r += "\n[" + o + "] ";
                for (var s in arguments[0]) r += s + ": " + arguments[0][s] + ", ";
                r = r.slice(0, -2)
              } else r = arguments[o];
              i.push(r)
            }
            S(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), a = !1
          }
          return n.apply(this, arguments)
        }, n)
      }

      function w(e, n) {
        null != t.deprecationHandler && t.deprecationHandler(e, n), Ea[e] || (S(n), Ea[e] = !0)
      }

      function D(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
      }

      function k(e) {
        var t, n;
        for (n in e) t = e[n], D(t) ? this[n] = t : this["_" + n] = t;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
      }

      function x(e, t) {
        var n, a = c({}, e);
        for (n in t) u(t, n) && (r(e[n]) && r(t[n]) ? (a[n] = {}, c(a[n], e[n]), c(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
        for (n in e) u(e, n) && !u(t, n) && r(e[n]) && (a[n] = c({}, a[n]));
        return a
      }

      function Y(e) {
        null != e && this.set(e)
      }

      function C(e, t, n) {
        var a = this._calendar[e] || this._calendar.sameElse;
        return D(a) ? a.call(t, n) : a
      }

      function H(e) {
        var t = this._longDateFormat[e],
          n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
          return e.slice(1)
        }), this._longDateFormat[e])
      }

      function A() {
        return this._invalidDate
      }

      function E(e) {
        return this._ordinal.replace("%d", e)
      }

      function O(e, t, n, a) {
        var r = this._relativeTime[n];
        return D(r) ? r(e, t, n, a) : r.replace(/%d/i, e)
      }

      function G(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return D(n) ? n(t) : n.replace(/%s/i, t)
      }

      function P(e, t) {
        var n = e.toLowerCase();
        ja[n] = ja[n + "s"] = ja[t] = e
      }

      function I(e) {
        return "string" == typeof e ? ja[e] || ja[e.toLowerCase()] : undefined
      }

      function N(e) {
        var t, n, a = {};
        for (n in e) u(e, n) && (t = I(n)) && (a[t] = e[n]);
        return a
      }

      function j(e, t) {
        Wa[e] = t
      }

      function W(e) {
        var t = [];
        for (var n in e) t.push({
          unit: n,
          priority: Wa[n]
        });
        return t.sort(function (e, t) {
          return e.priority - t.priority
        }), t
      }

      function R(e, t, n) {
        var a = "" + Math.abs(e),
          r = t - a.length;
        return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a
      }

      function F(e, t, n, a) {
        var r = a;
        "string" == typeof a && (r = function () {
          return this[a]()
        }), e && (Va[e] = r), t && (Va[t[0]] = function () {
          return R(r.apply(this, arguments), t[1], t[2])
        }), n && (Va[n] = function () {
          return this.localeData().ordinal(r.apply(this, arguments), e)
        })
      }

      function B(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
      }

      function V(e) {
        var t, n, a = e.match(Ra);
        for (t = 0, n = a.length; t < n; t++) Va[a[t]] ? a[t] = Va[a[t]] : a[t] = B(a[t]);
        return function (t) {
          var r, i = "";
          for (r = 0; r < n; r++) i += D(a[r]) ? a[r].call(t, e) : a[r];
          return i
        }
      }

      function X(e, t) {
        return e.isValid() ? (t = U(t, e.localeData()), Ba[t] = Ba[t] || V(t), Ba[t](e)) : e.localeData().invalidDate()
      }

      function U(e, t) {
        function n(e) {
          return t.longDateFormat(e) || e
        }
        var a = 5;
        for (Fa.lastIndex = 0; a >= 0 && Fa.test(e);) e = e.replace(Fa, n), Fa.lastIndex = 0, a -= 1;
        return e
      }

      function z(e, t, n) {
        dr[e] = D(t) ? t : function (e, a) {
          return e && n ? n : t
        }
      }

      function Z(e, t) {
        return u(dr, e) ? dr[e](t._strict, t._locale) : new RegExp(K(e))
      }

      function K(e) {
        return J(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, a, r) {
          return t || n || a || r
        }))
      }

      function J(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      }

      function q(e, t) {
        var n, a = t;
        for ("string" == typeof e && (e = [e]), s(t) && (a = function (e, n) {
            n[t] = T(e)
          }), n = 0; n < e.length; n++) lr[e[n]] = a
      }

      function Q(e, t) {
        q(e, function (e, n, a, r) {
          a._w = a._w || {}, t(e, a._w, a, r)
        })
      }

      function ee(e, t, n) {
        null != t && u(lr, e) && lr[e](t, n._a, n, e)
      }

      function te(e) {
        return ne(e) ? 366 : 365
      }

      function ne(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
      }

      function ae() {
        return ne(this.year())
      }

      function re(e, n) {
        return function (a) {
          return null != a ? (oe(this, e, a), t.updateOffset(this, n), this) : ie(this, e)
        }
      }

      function ie(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
      }

      function oe(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && ne(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), ue(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
      }

      function se(e) {
        return e = I(e), D(this[e]) ? this[e]() : this
      }

      function de(e, t) {
        if ("object" == typeof e) {
          e = N(e);
          for (var n = W(e), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit])
        } else if (e = I(e), D(this[e])) return this[e](t);
        return this
      }

      function le(e, t) {
        return (e % t + t) % t
      }

      function ue(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n = le(t, 12);
        return e += (t - n) / 12, 1 === n ? ne(e) ? 29 : 28 : 31 - n % 7 % 2
      }

      function ce(e, t) {
        return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Tr).test(t) ? "format" : "standalone"][e.month()] : a(this._months) ? this._months : this._months.standalone
      }

      function me(e, t) {
        return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Tr.test(t) ? "format" : "standalone"][e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
      }

      function he(e, t, n) {
        var a, r, i, o = e.toLocaleLowerCase();
        if (!this._monthsParse)
          for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) i = m([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(i, "").toLocaleLowerCase();
        return n ? "MMM" === t ? (r = gr.call(this._shortMonthsParse, o), -1 !== r ? r : null) : (r = gr.call(this._longMonthsParse, o), -1 !== r ? r : null) : "MMM" === t ? -1 !== (r = gr.call(this._shortMonthsParse, o)) ? r : (r = gr.call(this._longMonthsParse, o), -1 !== r ? r : null) : -1 !== (r = gr.call(this._longMonthsParse, o)) ? r : (r = gr.call(this._shortMonthsParse, o), -1 !== r ? r : null)
      }

      function fe(e, t, n) {
        var a, r, i;
        if (this._monthsParseExact) return he.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
          if (r = m([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;
          if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
          if (!n && this._monthsParse[a].test(e)) return a
        }
      }

      function _e(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t)
          if (/^\d+$/.test(t)) t = T(t);
          else if (t = e.localeData().monthsParse(t), !s(t)) return e;
        return n = Math.min(e.date(), ue(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
      }

      function pe(e) {
        return null != e ? (_e(this, e), t.updateOffset(this, !0), this) : ie(this, "Month")
      }

      function ye() {
        return ue(this.year(), this.month())
      }

      function Me(e) {
        return this._monthsParseExact ? (u(this, "_monthsRegex") || ve.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = Lr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
      }

      function ge(e) {
        return this._monthsParseExact ? (u(this, "_monthsRegex") || ve.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = wr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
      }

      function ve() {
        function e(e, t) {
          return t.length - e.length
        }
        var t, n, a = [],
          r = [],
          i = [];
        for (t = 0; t < 12; t++) n = m([2e3, t]), a.push(this.monthsShort(n, "")), r.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
        for (a.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++) a[t] = J(a[t]), r[t] = J(r[t]);
        for (t = 0; t < 24; t++) i[t] = J(i[t]);
        this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
      }

      function Te(e, t, n, a, r, i, o) {
        var s = new Date(e, t, n, a, r, i, o);
        return e < 100 && e >= 0 && isFinite(s.getFullYear()) && s.setFullYear(e), s
      }

      function be(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
      }

      function Se(e, t, n) {
        var a = 7 + t - n;
        return -(7 + be(e, 0, a).getUTCDay() - t) % 7 + a - 1
      }

      function Le(e, t, n, a, r) {
        var i, o, s = (7 + n - a) % 7,
          d = Se(e, a, r),
          l = 1 + 7 * (t - 1) + s + d;
        return l <= 0 ? (i = e - 1, o = te(i) + l) : l > te(e) ? (i = e + 1, o = l - te(e)) : (i = e, o = l), {
          year: i,
          dayOfYear: o
        }
      }

      function we(e, t, n) {
        var a, r, i = Se(e.year(), t, n),
          o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
        return o < 1 ? (r = e.year() - 1, a = o + De(r, t, n)) : o > De(e.year(), t, n) ? (a = o - De(e.year(), t, n), r = e.year() + 1) : (r = e.year(), a = o), {
          week: a,
          year: r
        }
      }

      function De(e, t, n) {
        var a = Se(e, t, n),
          r = Se(e + 1, t, n);
        return (te(e) - a + r) / 7
      }

      function ke(e) {
        return we(e, this._week.dow, this._week.doy).week
      }

      function xe() {
        return this._week.dow
      }

      function Ye() {
        return this._week.doy
      }

      function Ce(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
      }

      function He(e) {
        var t = we(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
      }

      function Ae(e, t) {
        return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
      }

      function Ee(e, t) {
        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
      }

      function Oe(e, t) {
        return e ? a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone
      }

      function Ge(e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
      }

      function Pe(e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
      }

      function Ie(e, t, n) {
        var a, r, i, o = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
          for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) i = m([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(i, "").toLocaleLowerCase();
        return n ? "dddd" === t ? (r = gr.call(this._weekdaysParse, o), -1 !== r ? r : null) : "ddd" === t ? (r = gr.call(this._shortWeekdaysParse, o), -1 !== r ? r : null) : (r = gr.call(this._minWeekdaysParse, o), -1 !== r ? r : null) : "dddd" === t ? -1 !== (r = gr.call(this._weekdaysParse, o)) ? r : -1 !== (r = gr.call(this._shortWeekdaysParse, o)) ? r : (r = gr.call(this._minWeekdaysParse, o), -1 !== r ? r : null) : "ddd" === t ? -1 !== (r = gr.call(this._shortWeekdaysParse, o)) ? r : -1 !== (r = gr.call(this._weekdaysParse, o)) ? r : (r = gr.call(this._minWeekdaysParse, o), -1 !== r ? r : null) : -1 !== (r = gr.call(this._minWeekdaysParse, o)) ? r : -1 !== (r = gr.call(this._weekdaysParse, o)) ? r : (r = gr.call(this._shortWeekdaysParse, o), -1 !== r ? r : null)
      }

      function Ne(e, t, n) {
        var a, r, i;
        if (this._weekdaysParseExact) return Ie.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
          if (r = m([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[a] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a;
          if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;
          if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;
          if (!n && this._weekdaysParse[a].test(e)) return a
        }
      }

      function je(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = Ae(e, this.localeData()), this.add(e - t, "d")) : t
      }

      function We(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
      }

      function Re(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          var t = Ee(e, this.localeData());
          return this.day(this.day() % 7 ? t : t - 7)
        }
        return this.day() || 7
      }

      function Fe(e) {
        return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = Cr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
      }

      function Be(e) {
        return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Hr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      }

      function Ve(e) {
        return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Xe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ar), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      }

      function Xe() {
        function e(e, t) {
          return t.length - e.length
        }
        var t, n, a, r, i, o = [],
          s = [],
          d = [],
          l = [];
        for (t = 0; t < 7; t++) n = m([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), i = this.weekdays(n, ""), o.push(a), s.push(r), d.push(i), l.push(a), l.push(r), l.push(i);
        for (o.sort(e), s.sort(e), d.sort(e), l.sort(e), t = 0; t < 7; t++) s[t] = J(s[t]), d[t] = J(d[t]), l[t] = J(l[t]);
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
      }

      function Ue() {
        return this.hours() % 12 || 12
      }

      function ze() {
        return this.hours() || 24
      }

      function Ze(e, t) {
        F(e, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
      }

      function Ke(e, t) {
        return t._meridiemParse
      }

      function Je(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
      }

      function qe(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
      }

      function Qe(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
      }

      function $e(e) {
        for (var t, n, a, r, i = 0; i < e.length;) {
          for (r = Qe(e[i]).split("-"), t = r.length, n = Qe(e[i + 1]), n = n ? n.split("-") : null; t > 0;) {
            if (a = et(r.slice(0, t).join("-"))) return a;
            if (n && n.length >= t && b(r, n, !0) >= t - 1) break;
            t--
          }
          i++
        }
        return Er
      }

      function et(t) {
        var a = null;
        if (!Ir[t] && void 0 !== e && e && e.exports) try {
          a = Er._abbr;
          n(267)("./" + t), tt(a)
        } catch (r) {}
        return Ir[t]
      }

      function tt(e, t) {
        var n;
        return e && (n = o(t) ? rt(e) : nt(e, t), n ? Er = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Er._abbr
      }

      function nt(e, t) {
        if (null !== t) {
          var n, a = Pr;
          if (t.abbr = e, null != Ir[e]) w("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = Ir[e]._config;
          else if (null != t.parentLocale)
            if (null != Ir[t.parentLocale]) a = Ir[t.parentLocale]._config;
            else {
              if (null == (n = et(t.parentLocale))) return Nr[t.parentLocale] || (Nr[t.parentLocale] = []), Nr[t.parentLocale].push({
                name: e,
                config: t
              }), null;
              a = n._config
            } return Ir[e] = new Y(x(a, t)), Nr[e] && Nr[e].forEach(function (e) {
            nt(e.name, e.config)
          }), tt(e), Ir[e]
        }
        return delete Ir[e], null
      }

      function at(e, t) {
        if (null != t) {
          var n, a, r = Pr;
          a = et(e), null != a && (r = a._config), t = x(r, t), n = new Y(t), n.parentLocale = Ir[e], Ir[e] = n, tt(e)
        } else null != Ir[e] && (null != Ir[e].parentLocale ? Ir[e] = Ir[e].parentLocale : null != Ir[e] && delete Ir[e]);
        return Ir[e]
      }

      function rt(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Er;
        if (!a(e)) {
          if (t = et(e)) return t;
          e = [e]
        }
        return $e(e)
      }

      function it() {
        return Oa(Ir)
      }

      function ot(e) {
        var t, n = e._a;
        return n && -2 === f(e).overflow && (t = n[cr] < 0 || n[cr] > 11 ? cr : n[mr] < 1 || n[mr] > ue(n[ur], n[cr]) ? mr : n[hr] < 0 || n[hr] > 24 || 24 === n[hr] && (0 !== n[fr] || 0 !== n[_r] || 0 !== n[pr]) ? hr : n[fr] < 0 || n[fr] > 59 ? fr : n[_r] < 0 || n[_r] > 59 ? _r : n[pr] < 0 || n[pr] > 999 ? pr : -1, f(e)._overflowDayOfYear && (t < ur || t > mr) && (t = mr), f(e)._overflowWeeks && -1 === t && (t = yr), f(e)._overflowWeekday && -1 === t && (t = Mr), f(e).overflow = t), e
      }

      function st(e, t, n) {
        return null != e ? e : null != t ? t : n
      }

      function dt(e) {
        var n = new Date(t.now());
        return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
      }

      function lt(e) {
        var t, n, a, r, i, o = [];
        if (!e._d) {
          for (a = dt(e), e._w && null == e._a[mr] && null == e._a[cr] && ut(e), null != e._dayOfYear && (i = st(e._a[ur], a[ur]), (e._dayOfYear > te(i) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), n = be(i, 0, e._dayOfYear), e._a[cr] = n.getUTCMonth(), e._a[mr] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = a[t];
          for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
          24 === e._a[hr] && 0 === e._a[fr] && 0 === e._a[_r] && 0 === e._a[pr] && (e._nextDay = !0, e._a[hr] = 0), e._d = (e._useUTC ? be : Te).apply(null, o), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[hr] = 24), e._w && "undefined" != typeof e._w.d && e._w.d !== r && (f(e).weekdayMismatch = !0)
        }
      }

      function ut(e) {
        var t, n, a, r, i, o, s, d;
        if (t = e._w, null != t.GG || null != t.W || null != t.E) i = 1, o = 4, n = st(t.GG, e._a[ur], we(kt(), 1, 4).year), a = st(t.W, 1), ((r = st(t.E, 1)) < 1 || r > 7) && (d = !0);
        else {
          i = e._locale._week.dow, o = e._locale._week.doy;
          var l = we(kt(), i, o);
          n = st(t.gg, e._a[ur], l.year), a = st(t.w, l.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (d = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : r = i
        }
        a < 1 || a > De(n, i, o) ? f(e)._overflowWeeks = !0 : null != d ? f(e)._overflowWeekday = !0 : (s = Le(n, a, r, i, o), e._a[ur] = s.year, e._dayOfYear = s.dayOfYear)
      }

      function ct(e) {
        var t, n, a, r, i, o, s = e._i,
          d = jr.exec(s) || Wr.exec(s);
        if (d) {
          for (f(e).iso = !0, t = 0, n = Fr.length; t < n; t++)
            if (Fr[t][1].exec(d[1])) {
              r = Fr[t][0], a = !1 !== Fr[t][2];
              break
            } if (null == r) return void(e._isValid = !1);
          if (d[3]) {
            for (t = 0, n = Br.length; t < n; t++)
              if (Br[t][1].exec(d[3])) {
                i = (d[2] || " ") + Br[t][0];
                break
              } if (null == i) return void(e._isValid = !1)
          }
          if (!a && null != i) return void(e._isValid = !1);
          if (d[4]) {
            if (!Rr.exec(d[4])) return void(e._isValid = !1);
            o = "Z"
          }
          e._f = r + (i || "") + (o || ""), gt(e)
        } else e._isValid = !1
      }

      function mt(e, t, n, a, r, i) {
        var o = [ht(e), Sr.indexOf(t), parseInt(n, 10), parseInt(a, 10), parseInt(r, 10)];
        return i && o.push(parseInt(i, 10)), o
      }

      function ht(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
      }

      function ft(e) {
        return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
      }

      function _t(e, t, n) {
        if (e) {
          if (xr.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay()) return f(n).weekdayMismatch = !0, n._isValid = !1, !1
        }
        return !0
      }

      function pt(e, t, n) {
        if (e) return Ur[e];
        if (t) return 0;
        var a = parseInt(n, 10),
          r = a % 100;
        return (a - r) / 100 * 60 + r
      }

      function yt(e) {
        var t = Xr.exec(ft(e._i));
        if (t) {
          var n = mt(t[4], t[3], t[2], t[5], t[6], t[7]);
          if (!_t(t[1], n, e)) return;
          e._a = n, e._tzm = pt(t[8], t[9], t[10]), e._d = be.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0
        } else e._isValid = !1
      }

      function Mt(e) {
        var n = Vr.exec(e._i);
        if (null !== n) return void(e._d = new Date(+n[1]));
        ct(e), !1 === e._isValid && (delete e._isValid, yt(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e)))
      }

      function gt(e) {
        if (e._f === t.ISO_8601) return void ct(e);
        if (e._f === t.RFC_2822) return void yt(e);
        e._a = [], f(e).empty = !0;
        var n, a, r, i, o, s = "" + e._i,
          d = s.length,
          l = 0;
        for (r = U(e._f, e._locale).match(Ra) || [], n = 0; n < r.length; n++) i = r[n], a = (s.match(Z(i, e)) || [])[0], a && (o = s.substr(0, s.indexOf(a)), o.length > 0 && f(e).unusedInput.push(o), s = s.slice(s.indexOf(a) + a.length), l += a.length), Va[i] ? (a ? f(e).empty = !1 : f(e).unusedTokens.push(i), ee(i, a, e)) : e._strict && !a && f(e).unusedTokens.push(i);
        f(e).charsLeftOver = d - l, s.length > 0 && f(e).unusedInput.push(s), e._a[hr] <= 12 && !0 === f(e).bigHour && e._a[hr] > 0 && (f(e).bigHour = undefined), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[hr] = vt(e._locale, e._a[hr], e._meridiem), lt(e), ot(e)
      }

      function vt(e, t, n) {
        var a;
        return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (a = e.isPM(n), a && t < 12 && (t += 12), a || 12 !== t || (t = 0), t) : t
      }

      function Tt(e) {
        var t, n, a, r, i;
        if (0 === e._f.length) return f(e).invalidFormat = !0, void(e._d = new Date(NaN));
        for (r = 0; r < e._f.length; r++) i = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], gt(t), _(t) && (i += f(t).charsLeftOver, i += 10 * f(t).unusedTokens.length, f(t).score = i, (null == a || i < a) && (a = i, n = t));
        c(e, n || t)
      }

      function bt(e) {
        if (!e._d) {
          var t = N(e._i);
          e._a = l([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
            return e && parseInt(e, 10)
          }), lt(e)
        }
      }

      function St(e) {
        var t = new M(ot(Lt(e)));
        return t._nextDay && (t.add(1, "d"), t._nextDay = undefined), t
      }

      function Lt(e) {
        var t = e._i,
          n = e._f;
        return e._locale = e._locale || rt(e._l), null === t || n === undefined && "" === t ? p({
          nullInput: !0
        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), g(t) ? new M(ot(t)) : (d(t) ? e._d = t : a(n) ? Tt(e) : n ? gt(e) : wt(e), _(e) || (e._d = null), e))
      }

      function wt(e) {
        var n = e._i;
        o(n) ? e._d = new Date(t.now()) : d(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? Mt(e) : a(n) ? (e._a = l(n.slice(0), function (e) {
          return parseInt(e, 10)
        }), lt(e)) : r(n) ? bt(e) : s(n) ? e._d = new Date(n) : t.createFromInputFallback(e)
      }

      function Dt(e, t, n, o, s) {
        var d = {};
        return !0 !== n && !1 !== n || (o = n, n = undefined), (r(e) && i(e) || a(e) && 0 === e.length) && (e = undefined), d._isAMomentObject = !0, d._useUTC = d._isUTC = s, d._l = n, d._i = e, d._f = t, d._strict = o, St(d)
      }

      function kt(e, t, n, a) {
        return Dt(e, t, n, a, !1)
      }

      function xt(e, t) {
        var n, r;
        if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return kt();
        for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
        return n
      }

      function Yt() {
        return xt("isBefore", [].slice.call(arguments, 0))
      }

      function Ct() {
        return xt("isAfter", [].slice.call(arguments, 0))
      }

      function Ht(e) {
        for (var t in e)
          if (-1 === gr.call(Jr, t) || null != e[t] && isNaN(e[t])) return !1;
        for (var n = !1, a = 0; a < Jr.length; ++a)
          if (e[Jr[a]]) {
            if (n) return !1;
            parseFloat(e[Jr[a]]) !== T(e[Jr[a]]) && (n = !0)
          } return !0
      }

      function At() {
        return this._isValid
      }

      function Et() {
        return Qt(NaN)
      }

      function Ot(e) {
        var t = N(e),
          n = t.year || 0,
          a = t.quarter || 0,
          r = t.month || 0,
          i = t.week || 0,
          o = t.day || 0,
          s = t.hour || 0,
          d = t.minute || 0,
          l = t.second || 0,
          u = t.millisecond || 0;
        this._isValid = Ht(t), this._milliseconds = +u + 1e3 * l + 6e4 * d + 1e3 * s * 60 * 60, this._days = +o + 7 * i, this._months = +r + 3 * a + 12 * n, this._data = {}, this._locale = rt(), this._bubble()
      }

      function Gt(e) {
        return e instanceof Ot
      }

      function Pt(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
      }

      function It(e, t) {
        F(e, 0, 0, function () {
          var e = this.utcOffset(),
            n = "+";
          return e < 0 && (e = -e, n = "-"), n + R(~~(e / 60), 2) + t + R(~~e % 60, 2)
        })
      }

      function Nt(e, t) {
        var n = (t || "").match(e);
        if (null === n) return null;
        var a = n[n.length - 1] || [],
          r = (a + "").match(qr) || ["-", 0, 0],
          i = 60 * r[1] + T(r[2]);
        return 0 === i ? 0 : "+" === r[0] ? i : -i
      }

      function jt(e, n) {
        var a, r;
        return n._isUTC ? (a = n.clone(), r = (g(e) || d(e) ? e.valueOf() : kt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + r), t.updateOffset(a, !1), a) : kt(e).local()
      }

      function Wt(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
      }

      function Rt(e, n, a) {
        var r, i = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          if ("string" == typeof e) {
            if (null === (e = Nt(ir, e))) return this
          } else Math.abs(e) < 16 && !a && (e *= 60);
          return !this._isUTC && n && (r = Wt(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), i !== e && (!n || this._changeInProgress ? an(this, Qt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
        }
        return this._isUTC ? i : Wt(this)
      }

      function Ft(e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
      }

      function Bt(e) {
        return this.utcOffset(0, e)
      }

      function Vt(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Wt(this), "m")), this
      }

      function Xt() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
          var e = Nt(rr, this._i);
          null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
      }

      function Ut(e) {
        return !!this.isValid() && (e = e ? kt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
      }

      function zt() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
      }

      function Zt() {
        if (!o(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (y(e, this), e = Lt(e), e._a) {
          var t = e._isUTC ? m(e._a) : kt(e._a);
          this._isDSTShifted = this.isValid() && b(e._a, t.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
      }

      function Kt() {
        return !!this.isValid() && !this._isUTC
      }

      function Jt() {
        return !!this.isValid() && this._isUTC
      }

      function qt() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
      }

      function Qt(e, t) {
        var n, a, r, i = e,
          o = null;
        return Gt(e) ? i = {
          ms: e._milliseconds,
          d: e._days,
          M: e._months
        } : s(e) ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (o = Qr.exec(e)) ? (n = "-" === o[1] ? -1 : 1, i = {
          y: 0,
          d: T(o[mr]) * n,
          h: T(o[hr]) * n,
          m: T(o[fr]) * n,
          s: T(o[_r]) * n,
          ms: T(Pt(1e3 * o[pr])) * n
        }) : (o = $r.exec(e)) ? (n = "-" === o[1] ? -1 : (o[1], 1), i = {
          y: $t(o[2], n),
          M: $t(o[3], n),
          w: $t(o[4], n),
          d: $t(o[5], n),
          h: $t(o[6], n),
          m: $t(o[7], n),
          s: $t(o[8], n)
        }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (r = tn(kt(i.from), kt(i.to)), i = {}, i.ms = r.milliseconds, i.M = r.months), a = new Ot(i), Gt(e) && u(e, "_locale") && (a._locale = e._locale), a
      }

      function $t(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
      }

      function en(e, t) {
        var n = {
          milliseconds: 0,
          months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
      }

      function tn(e, t) {
        var n;
        return e.isValid() && t.isValid() ? (t = jt(t, e), e.isBefore(t) ? n = en(e, t) : (n = en(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
          milliseconds: 0,
          months: 0
        }
      }

      function nn(e, t) {
        return function (n, a) {
          var r, i;
          return null === a || isNaN(+a) || (w(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = a, a = i), n = "string" == typeof n ? +n : n, r = Qt(n, a), an(this, r, e), this
        }
      }

      function an(e, n, a, r) {
        var i = n._milliseconds,
          o = Pt(n._days),
          s = Pt(n._months);
        e.isValid() && (r = null == r || r, s && _e(e, ie(e, "Month") + s * a), o && oe(e, "Date", ie(e, "Date") + o * a), i && e._d.setTime(e._d.valueOf() + i * a), r && t.updateOffset(e, o || s))
      }

      function rn(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
      }

      function on(e, n) {
        var a = e || kt(),
          r = jt(a, this).startOf("day"),
          i = t.calendarFormat(this, r) || "sameElse",
          o = n && (D(n[i]) ? n[i].call(this, a) : n[i]);
        return this.format(o || this.localeData().calendar(i, this, kt(a)))
      }

      function sn() {
        return new M(this)
      }

      function dn(e, t) {
        var n = g(e) ? e : kt(e);
        return !(!this.isValid() || !n.isValid()) && (t = I(o(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
      }

      function ln(e, t) {
        var n = g(e) ? e : kt(e);
        return !(!this.isValid() || !n.isValid()) && (t = I(o(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
      }

      function un(e, t, n, a) {
        return a = a || "()", ("(" === a[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === a[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
      }

      function cn(e, t) {
        var n, a = g(e) ? e : kt(e);
        return !(!this.isValid() || !a.isValid()) && (t = I(t || "millisecond"), "millisecond" === t ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
      }

      function mn(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
      }

      function hn(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
      }

      function fn(e, t, n) {
        var a, r, i;
        if (!this.isValid()) return NaN;
        if (a = jt(e, this), !a.isValid()) return NaN;
        switch (r = 6e4 * (a.utcOffset() - this.utcOffset()), t = I(t)) {
          case "year":
            i = _n(this, a) / 12;
            break;
          case "month":
            i = _n(this, a);
            break;
          case "quarter":
            i = _n(this, a) / 3;
            break;
          case "second":
            i = (this - a) / 1e3;
            break;
          case "minute":
            i = (this - a) / 6e4;
            break;
          case "hour":
            i = (this - a) / 36e5;
            break;
          case "day":
            i = (this - a - r) / 864e5;
            break;
          case "week":
            i = (this - a - r) / 6048e5;
            break;
          default:
            i = this - a
        }
        return n ? i : v(i)
      }

      function _n(e, t) {
        var n, a, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
          i = e.clone().add(r, "months");
        return t - i < 0 ? (n = e.clone().add(r - 1, "months"), a = (t - i) / (i - n)) : (n = e.clone().add(r + 1, "months"), a = (t - i) / (n - i)), -(r + a) || 0
      }

      function pn() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
      }

      function yn(e) {
        if (!this.isValid()) return null;
        var t = !0 !== e,
          n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? X(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : D(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", X(n, "Z")) : X(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
      }

      function Mn() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
          t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
        var n = "[" + e + '("]',
          a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
          r = t + '[")]';
        return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + r)
      }

      function gn(e) {
        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var n = X(this, e);
        return this.localeData().postformat(n)
      }

      function vn(e, t) {
        return this.isValid() && (g(e) && e.isValid() || kt(e).isValid()) ? Qt({
          to: this,
          from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
      }

      function Tn(e) {
        return this.from(kt(), e)
      }

      function bn(e, t) {
        return this.isValid() && (g(e) && e.isValid() || kt(e).isValid()) ? Qt({
          from: this,
          to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
      }

      function Sn(e) {
        return this.to(kt(), e)
      }

      function Ln(e) {
        var t;
        return e === undefined ? this._locale._abbr : (t = rt(e), null != t && (this._locale = t), this)
      }

      function wn() {
        return this._locale
      }

      function Dn(e) {
        switch (e = I(e)) {
          case "year":
            this.month(0);
          case "quarter":
          case "month":
            this.date(1);
          case "week":
          case "isoWeek":
          case "day":
          case "date":
            this.hours(0);
          case "hour":
            this.minutes(0);
          case "minute":
            this.seconds(0);
          case "second":
            this.milliseconds(0)
        }
        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
      }

      function kn(e) {
        return (e = I(e)) === undefined || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
      }

      function xn() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
      }

      function Yn() {
        return Math.floor(this.valueOf() / 1e3)
      }

      function Cn() {
        return new Date(this.valueOf())
      }

      function Hn() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
      }

      function An() {
        var e = this;
        return {
          years: e.year(),
          months: e.month(),
          date: e.date(),
          hours: e.hours(),
          minutes: e.minutes(),
          seconds: e.seconds(),
          milliseconds: e.milliseconds()
        }
      }

      function En() {
        return this.isValid() ? this.toISOString() : null
      }

      function On() {
        return _(this)
      }

      function Gn() {
        return c({}, f(this))
      }

      function Pn() {
        return f(this).overflow
      }

      function In() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        }
      }

      function Nn(e, t) {
        F(0, [e, e.length], 0, t)
      }

      function jn(e) {
        return Bn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
      }

      function Wn(e) {
        return Bn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
      }

      function Rn() {
        return De(this.year(), 1, 4)
      }

      function Fn() {
        var e = this.localeData()._week;
        return De(this.year(), e.dow, e.doy)
      }

      function Bn(e, t, n, a, r) {
        var i;
        return null == e ? we(this, a, r).year : (i = De(e, a, r), t > i && (t = i), Vn.call(this, e, t, n, a, r))
      }

      function Vn(e, t, n, a, r) {
        var i = Le(e, t, n, a, r),
          o = be(i.year, 0, i.dayOfYear);
        return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
      }

      function Xn(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
      }

      function Un(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
      }

      function zn(e, t) {
        t[pr] = T(1e3 * ("0." + e))
      }

      function Zn() {
        return this._isUTC ? "UTC" : ""
      }

      function Kn() {
        return this._isUTC ? "Coordinated Universal Time" : ""
      }

      function Jn(e) {
        return kt(1e3 * e)
      }

      function qn() {
        return kt.apply(null, arguments).parseZone()
      }

      function Qn(e) {
        return e
      }

      function $n(e, t, n, a) {
        var r = rt(),
          i = m().set(a, t);
        return r[n](i, e)
      }

      function ea(e, t, n) {
        if (s(e) && (t = e, e = undefined), e = e || "", null != t) return $n(e, t, n, "month");
        var a, r = [];
        for (a = 0; a < 12; a++) r[a] = $n(e, a, n, "month");
        return r
      }

      function ta(e, t, n, a) {
        "boolean" == typeof e ? (s(t) && (n = t, t = undefined), t = t || "") : (t = e, n = t, e = !1, s(t) && (n = t, t = undefined), t = t || "");
        var r = rt(),
          i = e ? r._week.dow : 0;
        if (null != n) return $n(t, (n + i) % 7, a, "day");
        var o, d = [];
        for (o = 0; o < 7; o++) d[o] = $n(t, (o + i) % 7, a, "day");
        return d
      }

      function na(e, t) {
        return ea(e, t, "months")
      }

      function aa(e, t) {
        return ea(e, t, "monthsShort")
      }

      function ra(e, t, n) {
        return ta(e, t, n, "weekdays")
      }

      function ia(e, t, n) {
        return ta(e, t, n, "weekdaysShort")
      }

      function oa(e, t, n) {
        return ta(e, t, n, "weekdaysMin")
      }

      function sa() {
        var e = this._data;
        return this._milliseconds = ui(this._milliseconds), this._days = ui(this._days), this._months = ui(this._months), e.milliseconds = ui(e.milliseconds), e.seconds = ui(e.seconds), e.minutes = ui(e.minutes), e.hours = ui(e.hours), e.months = ui(e.months), e.years = ui(e.years), this
      }

      function da(e, t, n, a) {
        var r = Qt(t, n);
        return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble()
      }

      function la(e, t) {
        return da(this, e, t, 1)
      }

      function ua(e, t) {
        return da(this, e, t, -1)
      }

      function ca(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
      }

      function ma() {
        var e, t, n, a, r, i = this._milliseconds,
          o = this._days,
          s = this._months,
          d = this._data;
        return i >= 0 && o >= 0 && s >= 0 || i <= 0 && o <= 0 && s <= 0 || (i += 864e5 * ca(fa(s) + o), o = 0, s = 0), d.milliseconds = i % 1e3, e = v(i / 1e3), d.seconds = e % 60, t = v(e / 60), d.minutes = t % 60, n = v(t / 60), d.hours = n % 24, o += v(n / 24), r = v(ha(o)), s += r, o -= ca(fa(r)), a = v(s / 12), s %= 12, d.days = o, d.months = s, d.years = a, this
      }

      function ha(e) {
        return 4800 * e / 146097
      }

      function fa(e) {
        return 146097 * e / 4800
      }

      function _a(e) {
        if (!this.isValid()) return NaN;
        var t, n, a = this._milliseconds;
        if ("month" === (e = I(e)) || "year" === e) return t = this._days + a / 864e5, n = this._months + ha(t), "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(fa(this._months)), e) {
          case "week":
            return t / 7 + a / 6048e5;
          case "day":
            return t + a / 864e5;
          case "hour":
            return 24 * t + a / 36e5;
          case "minute":
            return 1440 * t + a / 6e4;
          case "second":
            return 86400 * t + a / 1e3;
          case "millisecond":
            return Math.floor(864e5 * t) + a;
          default:
            throw new Error("Unknown unit " + e)
        }
      }

      function pa() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * T(this._months / 12) : NaN
      }

      function ya(e) {
        return function () {
          return this.as(e)
        }
      }

      function Ma() {
        return Qt(this)
      }

      function ga(e) {
        return e = I(e), this.isValid() ? this[e + "s"]() : NaN
      }

      function va(e) {
        return function () {
          return this.isValid() ? this._data[e] : NaN
        }
      }

      function Ta() {
        return v(this.days() / 7)
      }

      function ba(e, t, n, a, r) {
        return r.relativeTime(t || 1, !!n, e, a)
      }

      function Sa(e, t, n) {
        var a = Qt(e).abs(),
          r = Di(a.as("s")),
          i = Di(a.as("m")),
          o = Di(a.as("h")),
          s = Di(a.as("d")),
          d = Di(a.as("M")),
          l = Di(a.as("y")),
          u = r <= ki.ss && ["s", r] || r < ki.s && ["ss", r] || i <= 1 && ["m"] || i < ki.m && ["mm", i] || o <= 1 && ["h"] || o < ki.h && ["hh", o] || s <= 1 && ["d"] || s < ki.d && ["dd", s] || d <= 1 && ["M"] || d < ki.M && ["MM", d] || l <= 1 && ["y"] || ["yy", l];
        return u[2] = t, u[3] = +e > 0, u[4] = n, ba.apply(null, u)
      }

      function La(e) {
        return e === undefined ? Di : "function" == typeof e && (Di = e, !0)
      }

      function wa(e, t) {
        return ki[e] !== undefined && (t === undefined ? ki[e] : (ki[e] = t, "s" === e && (ki.ss = t - 1), !0))
      }

      function Da(e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t = this.localeData(),
          n = Sa(this, !e, t);
        return e && (n = t.pastFuture(+this, n)), t.postformat(n)
      }

      function ka(e) {
        return (e > 0) - (e < 0) || +e
      }

      function xa() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, t, n, a = xi(this._milliseconds) / 1e3,
          r = xi(this._days),
          i = xi(this._months);
        e = v(a / 60), t = v(e / 60), a %= 60, e %= 60, n = v(i / 12), i %= 12;
        var o = n,
          s = i,
          d = r,
          l = t,
          u = e,
          c = a ? a.toFixed(3).replace(/\.?0+$/, "") : "",
          m = this.asSeconds();
        if (!m) return "P0D";
        var h = m < 0 ? "-" : "",
          f = ka(this._months) !== ka(m) ? "-" : "",
          _ = ka(this._days) !== ka(m) ? "-" : "",
          p = ka(this._milliseconds) !== ka(m) ? "-" : "";
        return h + "P" + (o ? f + o + "Y" : "") + (s ? f + s + "M" : "") + (d ? _ + d + "D" : "") + (l || u || c ? "T" : "") + (l ? p + l + "H" : "") + (u ? p + u + "M" : "") + (c ? p + c + "S" : "")
      }
      var Ya, Ca;
      Ca = Array.prototype.some ? Array.prototype.some : function (e) {
        for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++)
          if (a in t && e.call(this, t[a], a, t)) return !0;
        return !1
      };
      var Ha = t.momentProperties = [],
        Aa = !1,
        Ea = {};
      t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
      var Oa;
      Oa = Object.keys ? Object.keys : function (e) {
        var t, n = [];
        for (t in e) u(e, t) && n.push(t);
        return n
      };
      var Ga = {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        Pa = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        Ia = /\d{1,2}/,
        Na = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        ja = {},
        Wa = {},
        Ra = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Fa = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Ba = {},
        Va = {},
        Xa = /\d/,
        Ua = /\d\d/,
        za = /\d{3}/,
        Za = /\d{4}/,
        Ka = /[+-]?\d{6}/,
        Ja = /\d\d?/,
        qa = /\d\d\d\d?/,
        Qa = /\d\d\d\d\d\d?/,
        $a = /\d{1,3}/,
        er = /\d{1,4}/,
        tr = /[+-]?\d{1,6}/,
        nr = /\d+/,
        ar = /[+-]?\d+/,
        rr = /Z|[+-]\d\d:?\d\d/gi,
        ir = /Z|[+-]\d\d(?::?\d\d)?/gi,
        or = /[+-]?\d+(\.\d{1,3})?/,
        sr = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        dr = {},
        lr = {},
        ur = 0,
        cr = 1,
        mr = 2,
        hr = 3,
        fr = 4,
        _r = 5,
        pr = 6,
        yr = 7,
        Mr = 8;
      F("Y", 0, 0, function () {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
      }), F(0, ["YY", 2], 0, function () {
        return this.year() % 100
      }), F(0, ["YYYY", 4], 0, "year"), F(0, ["YYYYY", 5], 0, "year"), F(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), j("year", 1), z("Y", ar), z("YY", Ja, Ua), z("YYYY", er, Za), z("YYYYY", tr, Ka), z("YYYYYY", tr, Ka), q(["YYYYY", "YYYYYY"], ur), q("YYYY", function (e, n) {
        n[ur] = 2 === e.length ? t.parseTwoDigitYear(e) : T(e)
      }), q("YY", function (e, n) {
        n[ur] = t.parseTwoDigitYear(e)
      }), q("Y", function (e, t) {
        t[ur] = parseInt(e, 10)
      }), t.parseTwoDigitYear = function (e) {
        return T(e) + (T(e) > 68 ? 1900 : 2e3)
      };
      var gr, vr = re("FullYear", !0);
      gr = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
        var t;
        for (t = 0; t < this.length; ++t)
          if (this[t] === e) return t;
        return -1
      }, F("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
      }), F("MMM", 0, 0, function (e) {
        return this.localeData().monthsShort(this, e)
      }), F("MMMM", 0, 0, function (e) {
        return this.localeData().months(this, e)
      }), P("month", "M"), j("month", 8), z("M", Ja), z("MM", Ja, Ua), z("MMM", function (e, t) {
        return t.monthsShortRegex(e)
      }), z("MMMM", function (e, t) {
        return t.monthsRegex(e)
      }), q(["M", "MM"], function (e, t) {
        t[cr] = T(e) - 1
      }), q(["MMM", "MMMM"], function (e, t, n, a) {
        var r = n._locale.monthsParse(e, a, n._strict);
        null != r ? t[cr] = r : f(n).invalidMonth = e
      });
      var Tr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        br = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Sr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        Lr = sr,
        wr = sr;
      F("w", ["ww", 2], "wo", "week"), F("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), j("week", 5), j("isoWeek", 5), z("w", Ja), z("ww", Ja, Ua), z("W", Ja), z("WW", Ja, Ua), Q(["w", "ww", "W", "WW"], function (e, t, n, a) {
        t[a.substr(0, 1)] = T(e)
      });
      var Dr = {
        dow: 0,
        doy: 6
      };
      F("d", 0, "do", "day"), F("dd", 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e)
      }), F("ddd", 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e)
      }), F("dddd", 0, 0, function (e) {
        return this.localeData().weekdays(this, e)
      }), F("e", 0, 0, "weekday"), F("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), j("day", 11), j("weekday", 11), j("isoWeekday", 11), z("d", Ja), z("e", Ja), z("E", Ja), z("dd", function (e, t) {
        return t.weekdaysMinRegex(e)
      }), z("ddd", function (e, t) {
        return t.weekdaysShortRegex(e)
      }), z("dddd", function (e, t) {
        return t.weekdaysRegex(e)
      }), Q(["dd", "ddd", "dddd"], function (e, t, n, a) {
        var r = n._locale.weekdaysParse(e, a, n._strict);
        null != r ? t.d = r : f(n).invalidWeekday = e
      }), Q(["d", "e", "E"], function (e, t, n, a) {
        t[a] = T(e)
      });
      var kr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        xr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Yr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        Cr = sr,
        Hr = sr,
        Ar = sr;
      F("H", ["HH", 2], 0, "hour"), F("h", ["hh", 2], 0, Ue), F("k", ["kk", 2], 0, ze), F("hmm", 0, 0, function () {
        return "" + Ue.apply(this) + R(this.minutes(), 2)
      }), F("hmmss", 0, 0, function () {
        return "" + Ue.apply(this) + R(this.minutes(), 2) + R(this.seconds(), 2)
      }), F("Hmm", 0, 0, function () {
        return "" + this.hours() + R(this.minutes(), 2)
      }), F("Hmmss", 0, 0, function () {
        return "" + this.hours() + R(this.minutes(), 2) + R(this.seconds(), 2)
      }), Ze("a", !0), Ze("A", !1), P("hour", "h"), j("hour", 13), z("a", Ke), z("A", Ke), z("H", Ja), z("h", Ja), z("k", Ja), z("HH", Ja, Ua), z("hh", Ja, Ua), z("kk", Ja, Ua), z("hmm", qa), z("hmmss", Qa), z("Hmm", qa), z("Hmmss", Qa), q(["H", "HH"], hr), q(["k", "kk"], function (e, t, n) {
        var a = T(e);
        t[hr] = 24 === a ? 0 : a
      }), q(["a", "A"], function (e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e
      }), q(["h", "hh"], function (e, t, n) {
        t[hr] = T(e), f(n).bigHour = !0
      }), q("hmm", function (e, t, n) {
        var a = e.length - 2;
        t[hr] = T(e.substr(0, a)), t[fr] = T(e.substr(a)), f(n).bigHour = !0
      }), q("hmmss", function (e, t, n) {
        var a = e.length - 4,
          r = e.length - 2;
        t[hr] = T(e.substr(0, a)), t[fr] = T(e.substr(a, 2)), t[_r] = T(e.substr(r)), f(n).bigHour = !0
      }), q("Hmm", function (e, t, n) {
        var a = e.length - 2;
        t[hr] = T(e.substr(0, a)), t[fr] = T(e.substr(a))
      }), q("Hmmss", function (e, t, n) {
        var a = e.length - 4,
          r = e.length - 2;
        t[hr] = T(e.substr(0, a)), t[fr] = T(e.substr(a, 2)), t[_r] = T(e.substr(r))
      });
      var Er, Or = /[ap]\.?m?\.?/i,
        Gr = re("Hours", !0),
        Pr = {
          calendar: Ga,
          longDateFormat: Pa,
          invalidDate: "Invalid date",
          ordinal: "%d",
          dayOfMonthOrdinalParse: Ia,
          relativeTime: Na,
          months: br,
          monthsShort: Sr,
          week: Dr,
          weekdays: kr,
          weekdaysMin: Yr,
          weekdaysShort: xr,
          meridiemParse: Or
        },
        Ir = {},
        Nr = {},
        jr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Wr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Rr = /Z|[+-]\d\d(?::?\d\d)?/,
        Fr = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, !1],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
          ["YYYYDDD", /\d{7}/]
        ],
        Br = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/]
        ],
        Vr = /^\/?Date\((\-?\d+)/i,
        Xr = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        Ur = {
          UT: 0,
          GMT: 0,
          EDT: -240,
          EST: -300,
          CDT: -300,
          CST: -360,
          MDT: -360,
          MST: -420,
          PDT: -420,
          PST: -480
        };
      t.createFromInputFallback = L("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
      }), t.ISO_8601 = function () {}, t.RFC_2822 = function () {};
      var zr = L("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
          var e = kt.apply(null, arguments);
          return this.isValid() && e.isValid() ? e < this ? this : e : p()
        }),
        Zr = L("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
          var e = kt.apply(null, arguments);
          return this.isValid() && e.isValid() ? e > this ? this : e : p()
        }),
        Kr = function () {
          return Date.now ? Date.now() : +new Date
        },
        Jr = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
      It("Z", ":"), It("ZZ", ""), z("Z", ir), z("ZZ", ir), q(["Z", "ZZ"], function (e, t, n) {
        n._useUTC = !0, n._tzm = Nt(ir, e)
      });
      var qr = /([\+\-]|\d\d)/gi;
      t.updateOffset = function () {};
      var Qr = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        $r = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
      Qt.fn = Ot.prototype, Qt.invalid = Et;
      var ei = nn(1, "add"),
        ti = nn(-1, "subtract");
      t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      var ni = L("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
        return e === undefined ? this.localeData() : this.locale(e)
      });
      F(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
      }), F(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
      }), Nn("gggg", "weekYear"), Nn("ggggg", "weekYear"), Nn("GGGG", "isoWeekYear"), Nn("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), j("weekYear", 1), j("isoWeekYear", 1), z("G", ar), z("g", ar), z("GG", Ja, Ua), z("gg", Ja, Ua), z("GGGG", er, Za), z("gggg", er, Za), z("GGGGG", tr, Ka), z("ggggg", tr, Ka), Q(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, a) {
        t[a.substr(0, 2)] = T(e)
      }), Q(["gg", "GG"], function (e, n, a, r) {
        n[r] = t.parseTwoDigitYear(e)
      }), F("Q", 0, "Qo", "quarter"), P("quarter", "Q"), j("quarter", 7), z("Q", Xa), q("Q", function (e, t) {
        t[cr] = 3 * (T(e) - 1)
      }), F("D", ["DD", 2], "Do", "date"), P("date", "D"), j("date", 9), z("D", Ja), z("DD", Ja, Ua), z("Do", function (e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
      }), q(["D", "DD"], mr), q("Do", function (e, t) {
        t[mr] = T(e.match(Ja)[0])
      });
      var ai = re("Date", !0);
      F("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), j("dayOfYear", 4), z("DDD", $a), z("DDDD", za), q(["DDD", "DDDD"], function (e, t, n) {
        n._dayOfYear = T(e)
      }), F("m", ["mm", 2], 0, "minute"), P("minute", "m"), j("minute", 14), z("m", Ja), z("mm", Ja, Ua), q(["m", "mm"], fr);
      var ri = re("Minutes", !1);
      F("s", ["ss", 2], 0, "second"), P("second", "s"), j("second", 15), z("s", Ja), z("ss", Ja, Ua), q(["s", "ss"], _r);
      var ii = re("Seconds", !1);
      F("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
      }), F(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
      }), F(0, ["SSS", 3], 0, "millisecond"), F(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
      }), F(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
      }), F(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
      }), F(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
      }), F(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
      }), F(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
      }), P("millisecond", "ms"), j("millisecond", 16), z("S", $a, Xa), z("SS", $a, Ua), z("SSS", $a, za);
      var oi;
      for (oi = "SSSS"; oi.length <= 9; oi += "S") z(oi, nr);
      for (oi = "S"; oi.length <= 9; oi += "S") q(oi, zn);
      var si = re("Milliseconds", !1);
      F("z", 0, 0, "zoneAbbr"), F("zz", 0, 0, "zoneName");
      var di = M.prototype;
      di.add = ei, di.calendar = on, di.clone = sn, di.diff = fn, di.endOf = kn, di.format = gn, di.from = vn, di.fromNow = Tn, di.to = bn, di.toNow = Sn, di.get = se, di.invalidAt = Pn, di.isAfter = dn, di.isBefore = ln, di.isBetween = un, di.isSame = cn, di.isSameOrAfter = mn, di.isSameOrBefore = hn, di.isValid = On, di.lang = ni, di.locale = Ln, di.localeData = wn, di.max = Zr, di.min = zr, di.parsingFlags = Gn, di.set = de, di.startOf = Dn, di.subtract = ti, di.toArray = Hn, di.toObject = An, di.toDate = Cn, di.toISOString = yn, di.inspect = Mn, di.toJSON = En, di.toString = pn, di.unix = Yn, di.valueOf = xn, di.creationData = In, di.year = vr, di.isLeapYear = ae, di.weekYear = jn, di.isoWeekYear = Wn, di.quarter = di.quarters = Xn, di.month = pe, di.daysInMonth = ye, di.week = di.weeks = Ce, di.isoWeek = di.isoWeeks = He, di.weeksInYear = Fn, di.isoWeeksInYear = Rn, di.date = ai, di.day = di.days = je, di.weekday = We, di.isoWeekday = Re, di.dayOfYear = Un, di.hour = di.hours = Gr, di.minute = di.minutes = ri, di.second = di.seconds = ii, di.millisecond = di.milliseconds = si, di.utcOffset = Rt, di.utc = Bt, di.local = Vt, di.parseZone = Xt, di.hasAlignedHourOffset = Ut, di.isDST = zt, di.isLocal = Kt, di.isUtcOffset = Jt, di.isUtc = qt, di.isUTC = qt, di.zoneAbbr = Zn, di.zoneName = Kn, di.dates = L("dates accessor is deprecated. Use date instead.", ai), di.months = L("months accessor is deprecated. Use month instead", pe), di.years = L("years accessor is deprecated. Use year instead", vr), di.zone = L("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ft), di.isDSTShifted = L("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Zt);
      var li = Y.prototype;
      li.calendar = C, li.longDateFormat = H, li.invalidDate = A, li.ordinal = E, li.preparse = Qn, li.postformat = Qn, li.relativeTime = O, li.pastFuture = G, li.set = k, li.months = ce, li.monthsShort = me, li.monthsParse = fe, li.monthsRegex = ge, li.monthsShortRegex = Me, li.week = ke, li.firstDayOfYear = Ye, li.firstDayOfWeek = xe, li.weekdays = Oe, li.weekdaysMin = Pe, li.weekdaysShort = Ge, li.weekdaysParse = Ne, li.weekdaysRegex = Fe, li.weekdaysShortRegex = Be, li.weekdaysMinRegex = Ve, li.isPM = Je, li.meridiem = qe, tt("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 === T(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
      }), t.lang = L("moment.lang is deprecated. Use moment.locale instead.", tt), t.langData = L("moment.langData is deprecated. Use moment.localeData instead.", rt);
      var ui = Math.abs,
        ci = ya("ms"),
        mi = ya("s"),
        hi = ya("m"),
        fi = ya("h"),
        _i = ya("d"),
        pi = ya("w"),
        yi = ya("M"),
        Mi = ya("y"),
        gi = va("milliseconds"),
        vi = va("seconds"),
        Ti = va("minutes"),
        bi = va("hours"),
        Si = va("days"),
        Li = va("months"),
        wi = va("years"),
        Di = Math.round,
        ki = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          M: 11
        },
        xi = Math.abs,
        Yi = Ot.prototype;
      return Yi.isValid = At, Yi.abs = sa, Yi.add = la, Yi.subtract = ua, Yi.as = _a, Yi.asMilliseconds = ci, Yi.asSeconds = mi, Yi.asMinutes = hi, Yi.asHours = fi, Yi.asDays = _i, Yi.asWeeks = pi, Yi.asMonths = yi, Yi.asYears = Mi, Yi.valueOf = pa, Yi._bubble = ma, Yi.clone = Ma, Yi.get = ga, Yi.milliseconds = gi, Yi.seconds = vi, Yi.minutes = Ti, Yi.hours = bi, Yi.days = Si, Yi.weeks = Ta, Yi.months = Li, Yi.years = wi, Yi.humanize = Da, Yi.toISOString = xa, Yi.toString = xa, Yi.toJSON = xa, Yi.locale = Ln, Yi.localeData = wn, Yi.toIsoString = L("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", xa), Yi.lang = ni, F("X", 0, 0, "unix"), F("x", 0, 0, "valueOf"), z("x", ar), z("X", or), q("X", function (e, t, n) {
          n._d = new Date(1e3 * parseFloat(e, 10))
        }), q("x", function (e, t, n) {
          n._d = new Date(T(e))
        }), t.version = "2.22.2",
        function (e) {
          Ya = e
        }(kt), t.fn = di, t.min = Yt, t.max = Ct, t.now = Kr, t.utc = m, t.unix = Jn, t.months = na, t.isDate = d, t.locale = tt, t.invalid = p, t.duration = Qt, t.isMoment = g, t.weekdays = ra, t.parseZone = qn, t.localeData = rt, t.isDuration = Gt, t.monthsShort = aa, t.weekdaysMin = oa, t.defineLocale = nt, t.updateLocale = at, t.locales = it, t.weekdaysShort = ia, t.normalizeUnits = I, t.relativeTimeRounding = La, t.relativeTimeThreshold = wa, t.calendarFormat = rn, t.prototype = di, t.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "YYYY-[W]WW",
          MONTH: "YYYY-MM"
        }, t
    })
  }).call(t, n(266)(e))
}, , function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(3),
    i = a(r),
    o = n(196),
    s = a(o),
    d = i["default"].extend,
    l = void 0;
  try {
    l = window.UE && window.UE.dom ? window.UE.dom.domUtils : s["default"]
  } catch (c) {}
  var u = function (e) {
    return !(!e || "undefined" == typeof window || !e.nodeType)
  };
  e.exports = d({
    isElement: u,
    findParentValueNode: function (e) {
      return s["default"].findParent(e, function (e) {
        return s["default"].hasClass(e, "krcd-value")
      }, !0)
    },
    findParentCtrlNode: function (e) {
      return s["default"].findParent(e, function (e) {
        return s["default"].hasClass(e, "krcd-ctrl")
      }, !0)
    },
    findPreviousSiblingNode: function (e) {
      var t = e.previousSibling ? e : this.findParent(e, function (e) {
        return !!e.previousSibling
      }, !0);
      return t ? t.previousSibling : null
    },
    isHtml: function (e) {
      return e && 1 == e.nodeType && "html" == e.tagName.toLowerCase()
    },
    findNextSiblingNode: function (e) {
      var t = e.nextSibling ? e : this.findParent(e, function (e) {
        return !!e.nextSibling
      }, !0);
      return t ? t.nextSibling : null
    },
    specialStr: "​",
    innerHTML: function (e) {
      return e ? e.innerHTML.replace(/\u200B/g, "") : ""
    },
    innerText: function (e) {
      return e ? e.innerText.replace(/\u200B/g, "") : ""
    },
    createTextNode: function (e) {
      return document.createTextNode(e)
    },
    formatEvt: function (e) {
      return e = e || window.event, {
        evt: e,
        kc: e ? e.keyCode || e.charCode : null,
        target: e ? e.target || e.srcElement : null
      }
    },
    getTop: function (e) {
      var t = e.offsetTop;
      return null !== e.offsetParent && (t += this.getTop(e.offsetParent)), t
    },
    getBottom: function (e) {
      return e.offsetHeight - this.getTop(e)
    },
    getLeft: function (e) {
      var t = e.offsetLeft;
      return null !== e.offsetParent && (t += this.getLeft(e.offsetParent)), t
    },
    getRight: function (e) {
      return e.offsetWidth - this.getLeft(e)
    },
    setStyleByAttr: function (e, t, n) {
      for (var a = (e.getAttribute("style") || "").trim(";"), r = a.split(";") || [], i = [], o = !1, s = 0, d = r.length; s < d; s++) {
        r[s].split(":")[0].trim() === t ? (n && (r[s] = t + ":" + n, i.push(r[s])), o = !0) : i.push(r[s])
      }!o && n && i.push(t + ":" + n), e.setAttribute("style", i.join(";"))
    },
    regNbsp: /\s/,
    formatTmp: function (e) {
      function t() {
        var e = s["default"].createElement(document, "div", {
            contenteditable: !1,
            "class": "krcd-tmp-root"
          }),
          t = s["default"].createElement(document, "div", {
            contenteditable: !1,
            "class": "krcd-tmp-content"
          }),
          n = s["default"].createElement(document, "div", {
            contenteditable: !0,
            "class": "krcd-tmp-content-value"
          }),
          a = s["default"].createElement(document, "div", {
            contenteditable: !1,
            "class": "krcd-tmp-header"
          }),
          r = s["default"].createElement(document, "div", {
            contenteditable: !1,
            title: "页眉",
            "class": "krcd-tmp-header-value"
          }),
          i = s["default"].createElement(document, "div", {
            contenteditable: !1,
            "class": "krcd-tmp-footer"
          }),
          o = s["default"].createElement(document, "div", {
            contenteditable: !1,
            title: "页脚",
            "class": "krcd-tmp-footer-value"
          });
        return t.appendChild(n), a.appendChild(r), i.appendChild(o), e.appendChild(a), e.appendChild(t), e.appendChild(i), {
          root: e,
          content: t,
          contentValue: n,
          header: a,
          headerValue: r,
          footer: i,
          footerValue: o
        }
      }
      if (u(e)) {
        if (s["default"].hasClass(e, "krcd-tmp-root") || e.querySelector(".krcd-tmp-root")) return e;
        var n = t(),
          a = n.root;
        n.contentValue.innerHTML = "BODY" === e.nodeType ? e.innerHTML : e.outerHTML, e.innerHTML = "", e.appendChild(a)
      } else if (i["default"].isString(e)) {
        var r = s["default"].createElement(document, "div", {});
        if (r.innerHTML = e, r.querySelector(".krcd-tmp-root")) e = r.querySelector(".krcd-tmp-root").outerHTML;
        else {
          var o = t(),
            d = o.root,
            l = o.contentValue;
          l.innerHTML = e, e = d.outerHTML
        }
      }
      return e
    }
  }, l)
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(51),
    i = a(r),
    o = n(244),
    s = a(o),
    d = n(263),
    l = a(d),
    u = n(0),
    c = a(u),
    m = void 0,
    h = void 0;
  m = window.UE ? window.UE.utils : i["default"];
  var f = String.fromCharCode(160);
  try {
    h = m.extend || {}
  } catch (_) {}
  e.exports = h({
    axios: s["default"],
    moment: c["default"],
    isMobile: function (e) {
      return "mobile" === (0, l["default"])(e || window.navigator.userAgent).device.type
    },
    isTablet: function (e) {
      return "tablet" === (0, l["default"])(e || window.navigator.userAgent).device.type
    },
    getUUID: function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8,
        t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16,
        n = arguments.length > 2 && arguments[2] !== undefined && arguments[2],
        a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        r = [],
        i = void 0;
      if (t = t || a.length, e)
        for (i = 0; i < e; i++) r[i] = a[0 | Math.random() * t];
      else {
        var o = void 0;
        for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", i = 0; i < 36; i++) r[i] || (o = 0 | 16 * Math.random(), r[i] = a[19 == i ? 3 & o | 8 : o])
      }
      return n ? r.join("") : r.join("").toLowerCase()
    },
    isValueKeyCode: function (e) {
      return e >= 64 && e <= 90 || (e >= 48 && e <= 57 || (e >= 96 && e <= 105 || (e >= 106 && e <= 111 || !(e >= 112 && e <= 123))))
    },
    registerEvent: function (e, t, n, a) {
      e.addEventListener ? e.addEventListener(t, n, a, !1) : e.attachEvent ? e.attachEvent("on" + t, n, a) : e["on" + t] = n
    },
    removeEvent: function (e, t, n) {
      e.addEventListener ? e.removeEventListener(t, n, !1) : e.attachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
    },
    getClassList: function (e) {
      return e && e.className ? m.trim(e.className).split(/\s+/) : []
    },
    getSpace: function () {
      return f
    },
    unchangeValueKeyCode: [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 16, 17, 18, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 144, 171, 172, 173, 174, 175, 179, 180]
  }, m)
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(48),
    i = a(r),
    o = n(3),
    s = (a(o), (0, i["default"])("4ed16425-05da-4f6b-85aa-e687a30a279a")),
    d = (0, i["default"])("f4885496-339c-4cb5-bc02-38b87284b6e7"),
    l = (0, i["default"])("4e6c0c83-dbb6-47f5-b1df-a0c9ca4674a7"),
    u = (0, i["default"])("6aaf0029-26d4-43d4-809b-873173850764"),
    c = (0, i["default"])("b5a200db-ed21-4a4d-976a-3eab8f126fff"),
    m = (0, i["default"])("39e2b743-7107-4237-9919-0c241fafdd3d");
  e.exports = {
    __allListeners: s,
    __private__: d,
    kernel: l,
    ctrl_id: u,
    ctrl_krcd: c,
    ctrl_opt: m
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return "[object Array]" === L.call(e)
  }

  function r(e) {
    return "[object ArrayBuffer]" === L.call(e)
  }

  function i(e) {
    return "undefined" != typeof FormData && e instanceof FormData
  }

  function o(e) {
    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
  }

  function s(e) {
    return "string" == typeof e
  }

  function d(e) {
    return "number" == typeof e
  }

  function l(e) {
    return void 0 === e
  }

  function u(e) {
    return null !== e && "object" == typeof e
  }

  function c(e) {
    return "[object Date]" === L.call(e)
  }

  function m(e) {
    return "[object File]" === L.call(e)
  }

  function h(e) {
    return "[object Blob]" === L.call(e)
  }

  function f(e) {
    return "[object Function]" === L.call(e)
  }

  function _(e) {
    return u(e) && f(e.pipe)
  }

  function p(e) {
    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
  }

  function y(e) {
    return e.replace(/^\s*/, "").replace(/\s*$/, "")
  }

  function M() {
    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
  }

  function g(e, t) {
    if (null !== e && void 0 !== e)
      if ("object" != typeof e && (e = [e]), a(e))
        for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
      else
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
  }

  function v() {
    function e(e, n) {
      "object" == typeof t[n] && "object" == typeof e ? t[n] = v(t[n], e) : t[n] = e
    }
    for (var t = {}, n = 0, a = arguments.length; n < a; n++) g(arguments[n], e);
    return t
  }

  function T(e, t, n) {
    return g(t, function (t, a) {
      e[a] = n && "function" == typeof t ? b(t, n) : t
    }), e
  }
  var b = n(68),
    S = n(246),
    L = Object.prototype.toString;
  e.exports = {
    isArray: a,
    isArrayBuffer: r,
    isBuffer: S,
    isFormData: i,
    isArrayBufferView: o,
    isString: s,
    isNumber: d,
    isObject: u,
    isUndefined: l,
    isDate: c,
    isFile: m,
    isBlob: h,
    isFunction: f,
    isStream: _,
    isURLSearchParams: p,
    isStandardBrowserEnv: M,
    forEach: g,
    merge: v,
    extend: T,
    trim: y
  }
}, function (e, t) {
  var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = n)
}, function (e, t, n) {
  "use strict";
  t.__esModule = !0, t["default"] = function (e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
}, function (e, t) {
  var n = e.exports = {
    version: "2.5.7"
  };
  "number" == typeof __e && (__e = n)
}, function (e, t, n) {
  var a = n(45)("wks"),
    r = n(31),
    i = n(6).Symbol,
    o = "function" == typeof i;
  (e.exports = function (e) {
    return a[e] || (a[e] = o && i[e] || (o ? i : r)("Symbol." + e))
  }).store = a
}, function (e, t, n) {
  (function (t) {
    /*!
     * @overview es6-promise - a tiny implementation of Promises/A+.
     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
     * @license   Licensed under MIT license
     *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
     * @version   v4.2.4+314e4831
     */
    ! function (t, n) {
      e.exports = n()
    }(0, function () {
      "use strict";

      function e(e) {
        var t = typeof e;
        return null !== e && ("object" === t || "function" === t)
      }

      function n(e) {
        return "function" == typeof e
      }

      function a(e) {
        W = e
      }

      function r(e) {
        R = e
      }

      function i() {
        return void 0 !== j ? function () {
          j(s)
        } : o()
      }

      function o() {
        var e = setTimeout;
        return function () {
          return e(s, 1)
        }
      }

      function s() {
        for (var e = 0; e < N; e += 2) {
          (0, z[e])(z[e + 1]), z[e] = undefined, z[e + 1] = undefined
        }
        N = 0
      }

      function d(e, t) {
        var n = this,
          a = new this.constructor(u);
        a[K] === undefined && x(a);
        var r = n._state;
        if (r) {
          var i = arguments[r - 1];
          R(function () {
            return w(r, a, i, n._result)
          })
        } else b(n, a, e, t);
        return a
      }

      function l(e) {
        var t = this;
        if (e && "object" == typeof e && e.constructor === t) return e;
        var n = new t(u);
        return M(n, e), n
      }

      function u() {}

      function c() {
        return new TypeError("You cannot resolve a promise with itself")
      }

      function m() {
        return new TypeError("A promises callback cannot return that same promise.")
      }

      function h(e) {
        try {
          return e.then
        } catch (t) {
          return ee.error = t, ee
        }
      }

      function f(e, t, n, a) {
        try {
          e.call(t, n, a)
        } catch (r) {
          return r
        }
      }

      function _(e, t, n) {
        R(function (e) {
          var a = !1,
            r = f(n, t, function (n) {
              a || (a = !0, t !== n ? M(e, n) : v(e, n))
            }, function (t) {
              a || (a = !0, T(e, t))
            }, "Settle: " + (e._label || " unknown promise"));
          !a && r && (a = !0, T(e, r))
        }, e)
      }

      function p(e, t) {
        t._state === q ? v(e, t._result) : t._state === Q ? T(e, t._result) : b(t, undefined, function (t) {
          return M(e, t)
        }, function (t) {
          return T(e, t)
        })
      }

      function y(e, t, a) {
        t.constructor === e.constructor && a === d && t.constructor.resolve === l ? p(e, t) : a === ee ? (T(e, ee.error), ee.error = null) : a === undefined ? v(e, t) : n(a) ? _(e, t, a) : v(e, t)
      }

      function M(t, n) {
        t === n ? T(t, c()) : e(n) ? y(t, n, h(n)) : v(t, n)
      }

      function g(e) {
        e._onerror && e._onerror(e._result), S(e)
      }

      function v(e, t) {
        e._state === J && (e._result = t, e._state = q, 0 !== e._subscribers.length && R(S, e))
      }

      function T(e, t) {
        e._state === J && (e._state = Q, e._result = t, R(g, e))
      }

      function b(e, t, n, a) {
        var r = e._subscribers,
          i = r.length;
        e._onerror = null, r[i] = t, r[i + q] = n, r[i + Q] = a, 0 === i && e._state && R(S, e)
      }

      function S(e) {
        var t = e._subscribers,
          n = e._state;
        if (0 !== t.length) {
          for (var a = void 0, r = void 0, i = e._result, o = 0; o < t.length; o += 3) a = t[o], r = t[o + n], a ? w(n, a, r, i) : r(i);
          e._subscribers.length = 0
        }
      }

      function L(e, t) {
        try {
          return e(t)
        } catch (n) {
          return ee.error = n, ee
        }
      }

      function w(e, t, a, r) {
        var i = n(a),
          o = void 0,
          s = void 0,
          d = void 0,
          l = void 0;
        if (i) {
          if (o = L(a, r), o === ee ? (l = !0, s = o.error, o.error = null) : d = !0, t === o) return void T(t, m())
        } else o = r, d = !0;
        t._state !== J || (i && d ? M(t, o) : l ? T(t, s) : e === q ? v(t, o) : e === Q && T(t, o))
      }

      function D(e, t) {
        try {
          t(function (t) {
            M(e, t)
          }, function (t) {
            T(e, t)
          })
        } catch (n) {
          T(e, n)
        }
      }

      function k() {
        return te++
      }

      function x(e) {
        e[K] = te++, e._state = undefined, e._result = undefined, e._subscribers = []
      }

      function Y() {
        return new Error("Array Methods must be provided an Array")
      }

      function C(e) {
        return new ne(this, e).promise
      }

      function H(e) {
        var t = this;
        return new t(I(e) ? function (n, a) {
          for (var r = e.length, i = 0; i < r; i++) t.resolve(e[i]).then(n, a)
        } : function (e, t) {
          return t(new TypeError("You must pass an array to race."))
        })
      }

      function A(e) {
        var t = this,
          n = new t(u);
        return T(n, e), n
      }

      function E() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
      }

      function O() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
      }

      function G() {
        var e = void 0;
        if (void 0 !== t) e = t;
        else if ("undefined" != typeof self) e = self;
        else try {
          e = Function("return this")()
        } catch (r) {
          throw new Error("polyfill failed because global object is unavailable in this environment")
        }
        var n = e.Promise;
        if (n) {
          var a = null;
          try {
            a = Object.prototype.toString.call(n.resolve())
          } catch (r) {}
          if ("[object Promise]" === a && !n.cast) return
        }
        e.Promise = ae
      }
      var P = void 0;
      P = Array.isArray ? Array.isArray : function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      };
      var I = P,
        N = 0,
        j = void 0,
        W = void 0,
        R = function (e, t) {
          z[N] = e, z[N + 1] = t, 2 === (N += 2) && (W ? W(s) : Z())
        },
        F = "undefined" != typeof window ? window : undefined,
        B = F || {},
        V = B.MutationObserver || B.WebKitMutationObserver,
        X = "undefined" == typeof self && !0 && "[object process]" === {}.toString.call(Object({
          env: Object({
            NODE_ENV: "prod1"
          })
        })),
        U = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
        z = new Array(1e3),
        Z = void 0;
      Z = X ? function () {
        return function () {
          return Object({
            env: Object({
              NODE_ENV: "prod1"
            })
          }).nextTick(s)
        }
      }() : V ? function () {
        var e = 0,
          t = new V(s),
          n = document.createTextNode("");
        return t.observe(n, {
            characterData: !0
          }),
          function () {
            n.data = e = ++e % 2
          }
      }() : U ? function () {
        var e = new MessageChannel;
        return e.port1.onmessage = s,
          function () {
            return e.port2.postMessage(0)
          }
      }() : F === undefined ? function () {
        try {
          var e = Function("return this")().require("vertx");
          return j = e.runOnLoop || e.runOnContext, i()
        } catch (t) {
          return o()
        }
      }() : o();
      var K = Math.random().toString(36).substring(2),
        J = void 0,
        q = 1,
        Q = 2,
        ee = {
          error: null
        },
        te = 0,
        ne = function () {
          function e(e, t) {
            this._instanceConstructor = e, this.promise = new e(u), this.promise[K] || x(this.promise), I(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? v(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && v(this.promise, this._result))) : T(this.promise, Y())
          }
          return e.prototype._enumerate = function (e) {
            for (var t = 0; this._state === J && t < e.length; t++) this._eachEntry(e[t], t)
          }, e.prototype._eachEntry = function (e, t) {
            var n = this._instanceConstructor,
              a = n.resolve;
            if (a === l) {
              var r = h(e);
              if (r === d && e._state !== J) this._settledAt(e._state, t, e._result);
              else if ("function" != typeof r) this._remaining--, this._result[t] = e;
              else if (n === ae) {
                var i = new n(u);
                y(i, e, r), this._willSettleAt(i, t)
              } else this._willSettleAt(new n(function (t) {
                return t(e)
              }), t)
            } else this._willSettleAt(a(e), t)
          }, e.prototype._settledAt = function (e, t, n) {
            var a = this.promise;
            a._state === J && (this._remaining--, e === Q ? T(a, n) : this._result[t] = n), 0 === this._remaining && v(a, this._result)
          }, e.prototype._willSettleAt = function (e, t) {
            var n = this;
            b(e, undefined, function (e) {
              return n._settledAt(q, t, e)
            }, function (e) {
              return n._settledAt(Q, t, e)
            })
          }, e
        }(),
        ae = function () {
          function e(t) {
            this[K] = k(), this._result = this._state = undefined, this._subscribers = [], u !== t && ("function" != typeof t && E(), this instanceof e ? D(this, t) : O())
          }
          return e.prototype["catch"] = function (e) {
            return this.then(null, e)
          }, e.prototype["finally"] = function (e) {
            var t = this,
              n = t.constructor;
            return t.then(function (t) {
              return n.resolve(e()).then(function () {
                return t
              })
            }, function (t) {
              return n.resolve(e()).then(function () {
                throw t
              })
            })
          }, e
        }();
      return ae.prototype.then = d, ae.all = C, ae.race = H, ae.resolve = l, ae.reject = A, ae._setScheduler = a, ae._setAsap = r, ae._asap = R, ae.polyfill = G, ae.Promise = ae, ae
    })
  }).call(t, n(204))
}, , function (e, t, n) {
  var a = n(13);
  e.exports = function (e) {
    if (!a(e)) throw TypeError(e + " is not an object!");
    return e
  }
}, function (e, t) {
  e.exports = function (e) {
    return "object" == typeof e ? null !== e : "function" == typeof e
  }
}, function (e, t) {
  var n = {}.hasOwnProperty;
  e.exports = function (e, t) {
    return n.call(e, t)
  }
}, , function (e, t, n) {
  "use strict";
  t.__esModule = !0;
  var a = n(33),
    r = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }(a);
  t["default"] = function (e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : (0, r["default"])(t)) && "function" != typeof t ? e : t
  }
}, function (e, t, n) {
  var a = n(18),
    r = n(29);
  e.exports = n(19) ? function (e, t, n) {
    return a.f(e, t, r(1, n))
  } : function (e, t, n) {
    return e[t] = n, e
  }
}, function (e, t, n) {
  var a = n(12),
    r = n(62),
    i = n(41),
    o = Object.defineProperty;
  t.f = n(19) ? Object.defineProperty : function (e, t, n) {
    if (a(e), t = i(t, !0), a(n), r) try {
      return o(e, t, n)
    } catch (s) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
    return "value" in n && (e[t] = n.value), e
  }
}, function (e, t, n) {
  e.exports = !n(28)(function () {
    return 7 != Object.defineProperty({}, "a", {
      get: function () {
        return 7
      }
    }).a
  })
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  t.__esModule = !0;
  var r = n(234),
    i = a(r),
    o = n(238),
    s = a(o),
    d = n(33),
    l = a(d);
  t["default"] = function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, l["default"])(t)));
    e.prototype = (0, s["default"])(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (i["default"] ? (0, i["default"])(e, t) : e.__proto__ = t)
  }
}, function (e, t, n) {
  var a = n(218),
    r = n(40);
  e.exports = function (e) {
    return a(r(e))
  }
}, function (e, t, n) {
  var a = n(6),
    r = n(8),
    i = n(34),
    o = n(17),
    s = n(14),
    d = function (e, t, n) {
      var l, u, c, m = e & d.F,
        h = e & d.G,
        f = e & d.S,
        _ = e & d.P,
        p = e & d.B,
        y = e & d.W,
        M = h ? r : r[t] || (r[t] = {}),
        g = M.prototype,
        v = h ? a : f ? a[t] : (a[t] || {}).prototype;
      h && (n = t);
      for (l in n)(u = !m && v && v[l] !== undefined) && s(M, l) || (c = u ? v[l] : n[l], M[l] = h && "function" != typeof v[l] ? n[l] : p && u ? i(c, a) : y && v[l] == c ? function (e) {
        var t = function (t, n, a) {
          if (this instanceof e) {
            switch (arguments.length) {
              case 0:
                return new e;
              case 1:
                return new e(t);
              case 2:
                return new e(t, n)
            }
            return new e(t, n, a)
          }
          return e.apply(this, arguments)
        };
        return t.prototype = e.prototype, t
      }(c) : _ && "function" == typeof c ? i(Function.call, c) : c, _ && ((M.virtual || (M.virtual = {}))[l] = c, e & d.R && g && !g[l] && o(g, l, c)))
    };
  d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, e.exports = d
}, function (e, t, n) {
  "use strict";
  var a = navigator.userAgent.toLowerCase(),
    r = window.opera,
    i = {
      ie: /(msie\s|trident.*rv:)([\w.]+)/i.test(a),
      opera: !!r && r.version,
      webkit: a.indexOf(" applewebkit/") > -1,
      mac: a.indexOf("macintosh") > -1,
      quirks: "BackCompat" == document.compatMode
    };
  i.gecko = "Gecko" == navigator.product && !i.webkit && !i.opera && !i.ie;
  var o = 0;
  if (i.ie) {
    var s = a.match(/(?:msie\s([\w.]+))/),
      d = a.match(/(?:trident.*rv:([\w.]+))/);
    o = s && d && s[1] && d[1] ? Math.max(1 * s[1], 1 * d[1]) : s && s[1] ? 1 * s[1] : d && d[1] ? 1 * d[1] : 0, i.ie11Compat = 11 == document.documentMode, i.ie9Compat = 9 == document.documentMode, i.ie8 = !!document.documentMode, i.ie8Compat = 8 == document.documentMode, i.ie7Compat = 7 == o && !document.documentMode || 7 == document.documentMode, i.ie6Compat = o < 7 || i.quirks, i.ie9above = o > 8, i.ie9below = o < 9, i.ie11above = o > 10, i.ie11below = o < 11
  }
  if (i.gecko) {
    var l = a.match(/rv:([\d\.]+)/);
    l && (l = l[1].split("."), o = 1e4 * l[0] + 100 * (l[1] || 0) + 1 * (l[2] || 0))
  }
  /chrome\/(\d+\.\d)/i.test(a) && (i.chrome = +RegExp.$1), /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(a) && !/chrome/i.test(a) && (i.safari = +(RegExp.$1 || RegExp.$2)), i.opera && (o = parseFloat(r.version())), i.webkit && (o = parseFloat(a.match(/ applewebkit\/(\d+)/)[1])), i.version = o, i.isCompatible = !i.mobile && (i.ie && o >= 6 || i.gecko && o >= 10801 || i.opera && o >= 9.5 || i.air && o >= 1 || i.webkit && o >= 522 || !1), e.exports = i
}, function (e, t) {
  e.exports = !0
}, , function (e, t) {
  function n(e, t) {
    var n = e[1] || "",
      r = e[3];
    if (!r) return n;
    if (t && "function" == typeof btoa) {
      var i = a(r);
      return [n].concat(r.sources.map(function (e) {
        return "/*# sourceURL=" + r.sourceRoot + e + " */"
      })).concat([i]).join("\n")
    }
    return [n].join("\n")
  }

  function a(e) {
    return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
  }
  e.exports = function (e) {
    var t = [];
    return t.toString = function () {
      return this.map(function (t) {
        var a = n(t, e);
        return t[2] ? "@media " + t[2] + "{" + a + "}" : a
      }).join("")
    }, t.i = function (e, n) {
      "string" == typeof e && (e = [
        [null, e, ""]
      ]);
      for (var a = {}, r = 0; r < this.length; r++) {
        var i = this[r][0];
        "number" == typeof i && (a[i] = !0)
      }
      for (r = 0; r < e.length; r++) {
        var o = e[r];
        "number" == typeof o[0] && a[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t.push(o))
      }
    }, t
  }
}, function (e, t, n) {
  function a(e, t) {
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        r = f[a.id];
      if (r) {
        r.refs++;
        for (var i = 0; i < r.parts.length; i++) r.parts[i](a.parts[i]);
        for (; i < a.parts.length; i++) r.parts.push(u(a.parts[i], t))
      } else {
        for (var o = [], i = 0; i < a.parts.length; i++) o.push(u(a.parts[i], t));
        f[a.id] = {
          id: a.id,
          refs: 1,
          parts: o
        }
      }
    }
  }

  function r(e, t) {
    for (var n = [], a = {}, r = 0; r < e.length; r++) {
      var i = e[r],
        o = t.base ? i[0] + t.base : i[0],
        s = i[1],
        d = i[2],
        l = i[3],
        u = {
          css: s,
          media: d,
          sourceMap: l
        };
      a[o] ? a[o].parts.push(u) : n.push(a[o] = {
        id: o,
        parts: [u]
      })
    }
    return n
  }

  function i(e, t) {
    var n = y(e.insertInto);
    if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var a = v[v.length - 1];
    if ("top" === e.insertAt) a ? a.nextSibling ? n.insertBefore(t, a.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), v.push(t);
    else if ("bottom" === e.insertAt) n.appendChild(t);
    else {
      if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      var r = y(e.insertInto + " " + e.insertAt.before);
      n.insertBefore(t, r)
    }
  }

  function o(e) {
    if (null === e.parentNode) return !1;
    e.parentNode.removeChild(e);
    var t = v.indexOf(e);
    t >= 0 && v.splice(t, 1)
  }

  function s(e) {
    var t = document.createElement("style");
    return e.attrs.type = "text/css", l(t, e.attrs), i(e, t), t
  }

  function d(e) {
    var t = document.createElement("link");
    return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", l(t, e.attrs), i(e, t), t
  }

  function l(e, t) {
    Object.keys(t).forEach(function (n) {
      e.setAttribute(n, t[n])
    })
  }

  function u(e, t) {
    var n, a, r, i;
    if (t.transform && e.css) {
      if (!(i = t.transform(e.css))) return function () {};
      e.css = i
    }
    if (t.singleton) {
      var l = g++;
      n = M || (M = s(t)), a = c.bind(null, n, l, !1), r = c.bind(null, n, l, !0)
    } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = d(t), a = h.bind(null, n, t), r = function () {
      o(n), n.href && URL.revokeObjectURL(n.href)
    }) : (n = s(t), a = m.bind(null, n), r = function () {
      o(n)
    });
    return a(e),
      function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          a(e = t)
        } else r()
      }
  }

  function c(e, t, n, a) {
    var r = n ? "" : a.css;
    if (e.styleSheet) e.styleSheet.cssText = b(t, r);
    else {
      var i = document.createTextNode(r),
        o = e.childNodes;
      o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(i, o[t]) : e.appendChild(i)
    }
  }

  function m(e, t) {
    var n = t.css,
      a = t.media;
    if (a && e.setAttribute("media", a), e.styleSheet) e.styleSheet.cssText = n;
    else {
      for (; e.firstChild;) e.removeChild(e.firstChild);
      e.appendChild(document.createTextNode(n))
    }
  }

  function h(e, t, n) {
    var a = n.css,
      r = n.sourceMap,
      i = t.convertToAbsoluteUrls === undefined && r;
    (t.convertToAbsoluteUrls || i) && (a = T(a)), r && (a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
    var o = new Blob([a], {
        type: "text/css"
      }),
      s = e.href;
    e.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s)
  }
  var f = {},
    _ = function (e) {
      var t;
      return function () {
        return void 0 === t && (t = e.apply(this, arguments)), t
      }
    }(function () {
      return window && document && document.all && !window.atob
    }),
    p = function (e) {
      return document.querySelector(e)
    },
    y = function (e) {
      var t = {};
      return function (e) {
        if ("function" == typeof e) return e();
        if ("undefined" == typeof t[e]) {
          var n = p.call(this, e);
          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head
          } catch (a) {
            n = null
          }
          t[e] = n
        }
        return t[e]
      }
    }(),
    M = null,
    g = 0,
    v = [],
    T = n(274);
  e.exports = function (e, t) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
    t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = _()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
    var n = r(e, t);
    return a(n, t),
      function (e) {
        for (var i = [], o = 0; o < n.length; o++) {
          var s = n[o],
            d = f[s.id];
          d.refs--, i.push(d)
        }
        if (e) {
          a(r(e, t), t)
        }
        for (var o = 0; o < i.length; o++) {
          var d = i[o];
          if (0 === d.refs) {
            for (var l = 0; l < d.parts.length; l++) d.parts[l]();
            delete f[d.id]
          }
        }
      }
  };
  var b = function () {
    var e = [];
    return function (t, n) {
      return e[t] = n, e.filter(Boolean).join("\n")
    }
  }()
}, function (e, t) {
  e.exports = function (e) {
    try {
      return !!e()
    } catch (t) {
      return !0
    }
  }
}, function (e, t) {
  e.exports = function (e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    }
  }
}, function (e, t) {
  e.exports = {}
}, function (e, t) {
  var n = 0,
    a = Math.random();
  e.exports = function (e) {
    return "Symbol(".concat(e === undefined ? "" : e, ")_", (++n + a).toString(36))
  }
}, function (e, t, n) {
  "use strict";
  t.__esModule = !0;
  var a = navigator.appVersion.toLowerCase().indexOf("trident") > 0,
    r = a && "MSIE8.0" == navigator.appVersion.split(";")[1].replace(/[ ]/g, ""),
    i = a && "MSIE9.0" == navigator.appVersion.split(";")[1].replace(/[ ]/g, "");
  t.isIE8 = r, t.isIE9 = i, t.isIE = a
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  t.__esModule = !0;
  var r = n(213),
    i = a(r),
    o = n(48),
    s = a(o),
    d = "function" == typeof s["default"] && "symbol" == typeof i["default"] ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof s["default"] && e.constructor === s["default"] && e !== s["default"].prototype ? "symbol" : typeof e
    };
  t["default"] = "function" == typeof s["default"] && "symbol" === d(i["default"]) ? function (e) {
    return void 0 === e ? "undefined" : d(e)
  } : function (e) {
    return e && "function" == typeof s["default"] && e.constructor === s["default"] && e !== s["default"].prototype ? "symbol" : void 0 === e ? "undefined" : d(e)
  }
}, function (e, t, n) {
  var a = n(57);
  e.exports = function (e, t, n) {
    if (a(e), t === undefined) return e;
    switch (n) {
      case 1:
        return function (n) {
          return e.call(t, n)
        };
      case 2:
        return function (n, a) {
          return e.call(t, n, a)
        };
      case 3:
        return function (n, a, r) {
          return e.call(t, n, a, r)
        }
    }
    return function () {
      return e.apply(t, arguments)
    }
  }
}, function (e, t) {
  var n = {}.toString;
  e.exports = function (e) {
    return n.call(e).slice(8, -1)
  }
}, function (e, t, n) {
  var a = n(18).f,
    r = n(14),
    i = n(9)("toStringTag");
  e.exports = function (e, t, n) {
    e && !r(e = n ? e : e.prototype, i) && a(e, i, {
      configurable: !0,
      value: t
    })
  }
}, , function (e, t, n) {
  "use strict";
  var a = n(3),
    r = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }(a);
  e.exports = {
    encryptStr: function (e) {
      return e && r["default"].isObject(e) && (e = r["default"].json2str(e)), e ? encodeURIComponent(e) : null
    },
    encryptStrDom: function (e, t, n) {
      r["default"].isString(n) || (n = r["default"].json2str(n)), e.setAttribute(t, this.encryptStr(n))
    },
    decryptStr: function (e) {
      return e ? decodeURIComponent(e) : null
    },
    decryptStrDom: function (e, t) {
      var n = e.getAttribute(t);
      return n ? r["default"].str2json(this.decryptStr(n)) : null
    }
  }
}, function (e, t) {
  var n = Math.ceil,
    a = Math.floor;
  e.exports = function (e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? a : n)(e)
  }
}, function (e, t) {
  e.exports = function (e) {
    if (e == undefined) throw TypeError("Can't call method on  " + e);
    return e
  }
}, function (e, t, n) {
  var a = n(13);
  e.exports = function (e, t) {
    if (!a(e)) return e;
    var n, r;
    if (t && "function" == typeof (n = e.toString) && !a(r = n.call(e))) return r;
    if ("function" == typeof (n = e.valueOf) && !a(r = n.call(e))) return r;
    if (!t && "function" == typeof (n = e.toString) && !a(r = n.call(e))) return r;
    throw TypeError("Can't convert object to primitive value")
  }
}, function (e, t, n) {
  var a = n(12),
    r = n(217),
    i = n(46),
    o = n(44)("IE_PROTO"),
    s = function () {},
    d = function () {
      var e, t = n(58)("iframe"),
        a = i.length;
      for (t.style.display = "none", n(201).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; a--;) delete d.prototype[i[a]];
      return d()
    };
  e.exports = Object.create || function (e, t) {
    var n;
    return null !== e ? (s.prototype = a(e), n = new s, s.prototype = null, n[o] = e) : n = d(), t === undefined ? n : r(n, t)
  }
}, function (e, t, n) {
  var a = n(64),
    r = n(46);
  e.exports = Object.keys || function (e) {
    return a(e, r)
  }
}, function (e, t, n) {
  var a = n(45)("keys"),
    r = n(31);
  e.exports = function (e) {
    return a[e] || (a[e] = r(e))
  }
}, function (e, t, n) {
  var a = n(8),
    r = n(6),
    i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
  (e.exports = function (e, t) {
    return i[e] || (i[e] = t !== undefined ? t : {})
  })("versions", []).push({
    version: a.version,
    mode: n(24) ? "pure" : "global",
    copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
  })
}, function (e, t) {
  e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t, n) {
  t.f = n(9)
}, function (e, t, n) {
  e.exports = {
    "default": n(226),
    __esModule: !0
  }
}, function (e, t, n) {
  var a = n(6),
    r = n(8),
    i = n(24),
    o = n(47),
    s = n(18).f;
  e.exports = function (e) {
    var t = r.Symbol || (r.Symbol = i ? {} : a.Symbol || {});
    "_" == e.charAt(0) || e in t || s(t, e, {
      value: o.f(e)
    })
  }
}, function (e, t) {
  t.f = {}.propertyIsEnumerable
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(242),
    i = a(r),
    o = n(33),
    s = a(o),
    d = n(23),
    l = a(d),
    u = {
      each: function (e, t, n) {
        if (null != e)
          if (e.length === +e.length) {
            for (var a = 0, r = e.length; a < r; a++)
              if (!1 === t.call(n, e[a], a, e)) return !1
          } else
            for (var i in e)
              if (e.hasOwnProperty(i) && !1 === t.call(n, e[i], i, e)) return !1
      },
      makeInstance: function (e) {
        var t = new Function;
        return t.prototype = e, e = new t, t.prototype = null, e
      },
      extend: function (e, t, n) {
        if (t)
          for (var a in t) n && e.hasOwnProperty(a) || (e[a] = t[a]);
        return e
      },
      extend2: function (e) {
        for (var t = arguments, n = 1; n < t.length; n++) {
          var a = t[n];
          for (var r in a) e.hasOwnProperty(r) || (e[r] = a[r])
        }
        return e
      },
      inherits: function (e, t) {
        var n = e.prototype,
          a = u.makeInstance(t.prototype);
        return u.extend(a, n, !0), e.prototype = a, a.constructor = e
      },
      bind: function (e, t) {
        return function () {
          return e.apply(t, arguments)
        }
      },
      defer: function (e, t, n) {
        var a;
        return function () {
          n && clearTimeout(a), a = setTimeout(e, t)
        }
      },
      indexOf: function (e, t, n) {
        var a = -1;
        return n = this.isNumber(n) ? n : 0, this.each(e, function (e, r) {
          if (r >= n && e === t) return a = r, !1
        }), a
      },
      removeItem: function (e, t) {
        for (var n = 0, a = e.length; n < a; n++) e[n] === t && (e.splice(n, 1), n--)
      },
      trim: function (e) {
        return e.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, "")
      },
      listToMap: function (e) {
        if (!e) return {};
        e = u.isArray(e) ? e : e.split(",");
        for (var t, n = 0, a = {}; t = e[n++];) a[t.toUpperCase()] = a[t] = 1;
        return a
      },
      unhtml: function (e, t) {
        return e ? e.replace(t || /[&<">'](?:(amp|lt|ldquo|rdquo|quot|gt|#39|nbsp|#\d+);)?/g, function (e, t) {
          return t ? e : {
            "<": "&lt;",
            "&": "&amp;",
            '"': "&quot;",
            "“": "&ldquo;",
            "”": "&rdquo;",
            ">": "&gt;",
            "'": "&#39;"
          } [e]
        }) : ""
      },
      html: function (e) {
        return e ? e.replace(/&((g|l|quo|ldquo|rdquo)t|amp|#39|nbsp);/g, function (e) {
          return {
            "&lt;": "<",
            "&amp;": "&",
            "&quot;": '"',
            "&ldquo;": "“",
            "&rdquo;": "”",
            "&gt;": ">",
            "&#39;": "'",
            "&nbsp;": " "
          } [e]
        }) : ""
      },
      cssStyleToDomStyle: function () {
        var e = document.createElement("div").style,
          t = {
            "float": e.cssFloat != undefined ? "cssFloat" : e.styleFloat != undefined ? "styleFloat" : "float"
          };
        return function (e) {
          return t[e] || (t[e] = e.toLowerCase().replace(/-./g, function (e) {
            return e.charAt(1).toUpperCase()
          }))
        }
      }(),
      loadFile: function () {
        function e(e, n) {
          try {
            for (var a, r = 0; a = t[r++];)
              if (a.doc === e && a.url == (n.src || n.href)) return a
          } catch (i) {
            return null
          }
        }
        var t = [];
        return function (n, a, r) {
          var i = e(n, a);
          if (i) return void(i.ready ? r && r() : i.funs.push(r));
          if (t.push({
              doc: n,
              url: a.src || a.href,
              funs: [r]
            }), !n.body) {
            var o = [];
            for (var s in a) "tag" != s && o.push(s + '="' + a[s] + '"');
            return void n.write("<" + a.tag + " " + o.join(" ") + " ></" + a.tag + ">")
          }
          if (!a.id || !n.getElementById(a.id)) {
            var d = n.createElement(a.tag);
            delete a.tag;
            for (var s in a) d.setAttribute(s, a[s]);
            d.onload = d.onreadystatechange = function () {
              if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                if (i = e(n, a), i.funs.length > 0) {
                  i.ready = 1;
                  for (var t; t = i.funs.pop();) t()
                }
                d.onload = d.onreadystatechange = null
              }
            }, d.onerror = function () {
              throw Error("The load " + (a.href || a.src) + " fails,check the url settings of file ueditor.config.js ")
            }, n.getElementsByTagName("head")[0].appendChild(d)
          }
        }
      }(),
      isEmptyObject: function (e) {
        if (null == e) return !0;
        if (this.isArray(e) || this.isString(e)) return 0 === e.length;
        for (var t in e)
          if (e.hasOwnProperty(t)) return !1;
        return !0
      },
      fixColor: function (e, t) {
        if (/color/i.test(e) && /rgba?/.test(t)) {
          var n = t.split(",");
          if (n.length > 3) return "";
          t = "#";
          for (var a, r = 0; a = n[r++];) a = parseInt(a.replace(/[^\d]/gi, ""), 10).toString(16), t += 1 == a.length ? "0" + a : a;
          t = t.toUpperCase()
        }
        return t
      },
      optCss: function (e) {
        function t(e, t) {
          if (!e) return "";
          var n = e.top,
            a = e.bottom,
            r = e.left,
            i = e.right,
            o = "";
          if (n && r && a && i) o += ";" + t + ":" + (n == a && a == r && r == i ? n : n == a && r == i ? n + " " + r : r == i ? n + " " + r + " " + a : n + " " + i + " " + a + " " + r) + ";";
          else
            for (var s in e) o += ";" + t + "-" + s + ":" + e[s] + ";";
          return o
        }
        var n, a;
        return e = e.replace(/(padding|margin|border)\-([^:]+):([^;]+);?/gi, function (e, t, r, i) {
          if (1 == i.split(" ").length) switch (t) {
            case "padding":
              return !n && (n = {}), n[r] = i, "";
            case "margin":
              return !a && (a = {}), a[r] = i, "";
            case "border":
              return "initial" == i ? "" : e
          }
          return e
        }), e += t(n, "padding") + t(a, "margin"), e.replace(/^[ \n\r\t;]*|[ \n\r\t]*$/, "").replace(/;([ \n\r\t]+)|\1;/g, ";").replace(/(&((l|g)t|quot|#39))?;{2,}/g, function (e, t) {
          return t ? t + ";;" : ";"
        })
      },
      clone: function (e, t) {
        var n;
        t = t || {};
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], "object" == (void 0 === n ? "undefined" : (0, s["default"])(n)) ? (t[a] = u.isArray(n) ? [] : {}, u.clone(e[a], t[a])) : t[a] = n);
        return t
      },
      transUnitToPx: function (e) {
        if (!/(pt|cm)/.test(e)) return e;
        var t;
        switch (e.replace(/([\d.]+)(\w+)/, function (n, a, r) {
          e = a, t = r
        }), t) {
          case "cm":
            e = 25 * parseFloat(e);
            break;
          case "pt":
            e = Math.round(96 * parseFloat(e) / 72)
        }
        return e + (e ? "px" : "")
      },
      domReady: function () {
        function e(e) {
          e.isReady = !0;
          for (var n; n = t.pop(); n());
        }
        var t = [];
        return function (n, a) {
          a = a || window;
          var r = a.document;
          n && t.push(n), "complete" === r.readyState ? e(r) : (r.isReady && e(r), l["default"].ie && 11 != l["default"].version ? (! function () {
            if (!r.isReady) {
              try {
                r.documentElement.doScroll("left")
              } catch (t) {
                return void setTimeout(arguments.callee, 0)
              }
              e(r)
            }
          }(), a.attachEvent("onload", function () {
            e(r)
          })) : (r.addEventListener("DOMContentLoaded", function () {
            r.removeEventListener("DOMContentLoaded", arguments.callee, !1), e(r)
          }, !1), a.addEventListener("load", function () {
            e(r)
          }, !1)))
        }
      }(),
      cssRule: l["default"].ie && 11 != l["default"].version ? function (e, t, n) {
        var a, r;
        return t === undefined || t && t.nodeType && 9 == t.nodeType ? (n = t && t.nodeType && 9 == t.nodeType ? t : n || document, a = n.indexList || (n.indexList = {}), r = a[e], r !== undefined ? n.styleSheets[r].cssText : undefined) : (n = n || document, a = n.indexList || (n.indexList = {}), r = a[e], "" === t ? r !== undefined && (n.styleSheets[r].cssText = "", delete a[e], !0) : (r !== undefined ? sheetStyle = n.styleSheets[r] : (sheetStyle = n.createStyleSheet("", r = n.styleSheets.length), a[e] = r), void(sheetStyle.cssText = t)))
      } : function (e, t, n) {
        var a;
        return t === undefined || t && t.nodeType && 9 == t.nodeType ? (n = t && t.nodeType && 9 == t.nodeType ? t : n || document, a = n.getElementById(e), a ? a.innerHTML : undefined) : (n = n || document, a = n.getElementById(e), "" === t ? !!a && (a.parentNode.removeChild(a), !0) : void(a ? a.innerHTML = t : (a = n.createElement("style"), a.id = e, a.innerHTML = t, n.getElementsByTagName("head")[0].appendChild(a))))
      },
      sort: function (e, t) {
        t = t || function (e, t) {
          return e.localeCompare(t)
        };
        for (var n = 0, a = e.length; n < a; n++)
          for (var r = n, i = e.length; r < i; r++)
            if (t(e[n], e[r]) > 0) {
              var o = e[n];
              e[n] = e[r], e[r] = o
            } return e
      },
      serializeParam: function (e) {
        var t = [];
        for (var n in e)
          if ("method" != n && "timeout" != n && "async" != n)
            if ("function" != (0, s["default"])(e[n]).toLowerCase() && "object" != (0, s["default"])(e[n]).toLowerCase()) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            else if (u.isArray(e[n]))
          for (var a = 0; a < e[n].length; a++) t.push(encodeURIComponent(n) + "[]=" + encodeURIComponent(e[n][a]));
        return t.join("&")
      },
      formatUrl: function (e) {
        var t = e.replace(/&&/g, "&");
        return t = t.replace(/\?&/g, "?"), t = t.replace(/&$/g, ""), t = t.replace(/&#/g, "#"), t = t.replace(/&+/g, "&")
      },
      isCrossDomainUrl: function (e) {
        var t = document.createElement("a");
        return t.href = e, l["default"].ie && (t.href = t.href), !(t.protocol == location.protocol && t.hostname == location.hostname && (t.port == location.port || "80" == t.port && "" == location.port || "" == t.port && "80" == location.port))
      },
      clearEmptyAttrs: function (e) {
        for (var t in e) "" === e[t] && delete e[t];
        return e
      },
      str2json: function (e) {
        try {
          return u.isString(e) ? 0 === e.length ? null : window.JSON ? JSON.parse(e) : new Function("return " + u.trim(e || ""))() : null
        } catch (t) {
          return null
        }
      },
      json2str: function () {
        if (window.JSON) return i["default"];
        var e = function (e) {
            return /["\\\x00-\x1f]/.test(e) && (e = e.replace(/["\\\x00-\x1f]/g, function (e) {
              var t = r[e];
              return t || (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
            })), '"' + e + '"'
          },
          t = function (e) {
            var t, n, a, r = ["["],
              i = e.length;
            for (n = 0; n < i; n++) switch (a = e[n], void 0 === a ? "undefined" : (0, s["default"])(a)) {
              case "undefined":
              case "function":
              case "unknown":
                break;
              default:
                t && r.push(","), r.push(u.json2str(a)), t = 1
            }
            return r.push("]"), r.join("")
          },
          n = function (e) {
            return e < 10 ? "0" + e : e
          },
          a = function (e) {
            return '"' + e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + "T" + n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + '"'
          },
          r = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
          };
        return function (n) {
          switch (void 0 === n ? "undefined" : (0, s["default"])(n)) {
            case "undefined":
              return "undefined";
            case "number":
              return isFinite(n) ? String(n) : "null";
            case "string":
              return e(n);
            case "boolean":
              return String(n);
            default:
              if (null === n) return "null";
              if (u.isArray(n)) return t(n);
              if (u.isDate(n)) return a(n);
              var r, i, o = ["{"],
                d = u.json2str;
              for (var l in n)
                if (Object.prototype.hasOwnProperty.call(n, l)) switch (i = n[l], void 0 === i ? "undefined" : (0, s["default"])(i)) {
                  case "undefined":
                  case "unknown":
                  case "function":
                    break;
                  default:
                    r && o.push(","), r = 1, o.push(d(l) + ":" + d(i))
                }
              return o.push("}"), o.join("")
          }
        }
      }()
    };
  u.each(["String", "Function", "Array", "Number", "RegExp", "Object", "Date"], function (e) {
    u["is" + e] = function (t) {
      return Object.prototype.toString.apply(t) == "[object " + e + "]"
    }
  }), e.exports = u
}, function (e, t, n) {
  "use strict";

  function a(e, t) {
    !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
  }
  var r = n(5),
    i = n(248),
    o = {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    s = {
      adapter: function () {
        return n("undefined" != typeof XMLHttpRequest ? 69 : 69)
      }(),
      transformRequest: [function (e, t) {
        return i(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
      }],
      transformResponse: [function (e) {
        if ("string" == typeof e) try {
          e = JSON.parse(e)
        } catch (t) {}
        return e
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      validateStatus: function (e) {
        return e >= 200 && e < 300
      }
    };
  s.headers = {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }, r.forEach(["delete", "get", "head"], function (e) {
    s.headers[e] = {}
  }), r.forEach(["post", "put", "patch"], function (e) {
    s.headers[e] = r.merge(o)
  }), e.exports = s
}, , , function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(491),
    i = a(r),
    o = n(493),
    s = a(o),
    d = n(496),
    l = a(d),
    u = n(497),
    c = a(u),
    m = n(507),
    h = a(m),
    f = n(509),
    _ = a(f),
    p = n(510),
    y = a(p),
    M = [i["default"], h["default"], y["default"], _["default"], l["default"], s["default"], c["default"]],
    g = function (e, t, n) {
      if (!e || "#text" === e.nodeName) return null;
      if (!e.hasAttribute("krcd-type")) return null;
      for (var a = e.getAttribute("krcd-type"), r = 0, i = M.length; r < i; r++) {
        var o = M[r];
        if (o.type === a) return new o.ctrl(e, t, n)
      }
      return null
    };
  e.exports = {
    initControl: g
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(7),
    i = a(r),
    o = n(16),
    s = a(o),
    d = n(20),
    l = a(d),
    u = n(48),
    c = a(u),
    m = n(3),
    h = a(m),
    f = n(2),
    _ = a(f),
    p = n(38),
    y = a(p),
    M = n(492),
    g = a(M),
    v = n(205),
    T = a(v),
    b = n(4),
    S = _["default"].specialStr,
    L = (0, c["default"])("8bba0b29-65f3-4669-8553-113d04c9595e"),
    w = (0, c["default"])("ac201322-5e03-40e8-9294-6c684fd52366"),
    D = (0, c["default"])("3dd0d7ae-200c-4c6d-89a6-9dd5a605b45c"),
    k = (0, c["default"])("03181ff7-97f4-4587-907b-bfc0f79bb09f"),
    x = ["label", "checkbox", "radio", "section"],
    Y = function (e) {
      function t(n, a, r, o) {
        (0, i["default"])(this, t);
        var d = (0, s["default"])(this, e.call(this, g["default"]));
        if (d[b.ctrl_krcd] = r, a && n.setAttribute("krcd-model", y["default"].encryptStr(h["default"].json2str(a))), d[w] = n, d[D] = n.querySelector(".krcd-value"), d[L] = h["default"].str2json(y["default"].decryptStr(n.getAttribute("krcd-model"))), d[k] = null, o && "section" === o) return (0, s["default"])(d);
        try {
          var l = document.createTextNode(S);
          n.parentElement.insertBefore(l, n), n.nextSibling ? _["default"].hasClass(n.nextSibling, "krcd-ctrl") ? (n.parentElement.insertBefore(l, n.nextSibling), n.parentElement.insertBefore(document.createTextNode(h["default"].getSpace()), n.nextSibling)) : n.parentElement.insertBefore(l, n.nextSibling) : n.parentElement.appendChild(l)
        } catch (c) {}
        d[D] && "" === d[D].innerHTML && "" !== d[L].desc && (d[D].innerHTML = d[L].desc);
        var u = d;
        return setTimeout(function () {
          (h["default"].isMobile() || h["default"].isTablet()) && ["select", "checkbox", "date", "radio"].includes(u[w].getAttribute("krcd-type")) && (u[D].setAttribute("mobile-contenteditable", u[D].getAttribute("contenteditable")), u[D].setAttribute("contenteditable", !1))
        }, 0), d
      }
      return (0, l["default"])(t, e), t.prototype.getId = function () {
        if (!this[w]) return "";
        var e = this[w].getAttribute("id");
        return e || ""
      }, t.prototype.setId = function (e) {
        e || (e = ""), this[w].setAttribute("id", e)
      }, t.prototype.getOpt = function () {
        return this[L]
      }, t.prototype.setOpt = function (e) {
        try {
          var t = this.getValueElement();
          t && t.setAttribute("contenteditable", e && "EDITOR" === e.mode), this[w].setAttribute("krcd-model", y["default"].encryptStr(h["default"].json2str(h["default"].extend(this.getOpt() || {}, e, !0))))
        } catch (n) {}
      }, t.prototype._reviseChangeValue = function (e) {
        if (this[b.ctrl_krcd].revise()) {
          var t = _["default"].formatEvt(e),
            n = (t.evt, t.kc);
          if (!e || h["default"].isValueKeyCode(n)) {
            var a = this.getCtrlElement(),
              r = this[b.ctrl_krcd][b.__private__].options.user,
              i = h["default"].moment().format("YYYY-MM-DD HH:mm:ss"),
              o = a.getAttribute("krcd-revise") ? y["default"].decryptStrDom(a, "krcd-revise") : [];
            if ("section" !== this.TYPE_NAME) {
              var s = _["default"].createElement(document, "div", {});
              s.innerHTML = y["default"].decryptStr(a.getAttribute("krcd-revise-cache"));
              var d = s.querySelectorAll("input[name]");
              if (h["default"].each(d, function (e) {
                  e.setAttribute("name", e.getAttribute("name") + i)
                }), o.length > 0 && o[o.length - 1].name === r.name && o[o.length - 1].value === s.innerHTML) {
                o[o.length - 1].time = i
              } else o.push(h["default"].clone(r, {
                time: i,
                type: "add",
                value: s.innerHTML
              }));
              y["default"].encryptStrDom(a, "krcd-revise", o)
            }
          }
        }
      }, t.prototype.hide = function () {
        this[w].style.display = "none"
      }, t.prototype.show = function () {
        this[w].style.display = ""
      }, t.prototype.getCtrlElement = function () {
        return this[w]
      }, t.prototype.getValueElement = function () {
        return this[D]
      }, t.prototype.setAuxi = function (e) {
        this[k] = e
      }, t.prototype.getAuxi = function () {
        return this[k]
      }, t.prototype.getNextElement = function () {
        function e(t) {
          var n = _["default"].getNextDomNode(t, !0, function (e) {
            return !("#text" === e.nodeName || !e.querySelector) && !!(_["default"].hasClass(e, "krcd-ctrl") ? e : e.querySelector(".krcd-ctrl"))
          });
          if (n && !_["default"].hasClass(n, "krcd-ctrl")) {
            var a = n.querySelectorAll(".krcd-ctrl");
            n = a && a.length > 0 ? a[0] : null
          }
          return n ? n.getAttribute("krcd-type") && x.indexOf(n.getAttribute("krcd-type")) >= 0 ? e(n) : n : null
        }
        return e(this.getCtrlElement())
      }, t.prototype.getPreviousElement = function () {
        function e(t) {
          var n = _["default"].getPreDomNode(t, !0, function (e) {
            if ("#text" !== e.nodeName && e.querySelectorAll) {
              if (_["default"].hasClass(e, "krcd-ctrl")) return !0;
              var t = e.querySelectorAll(".krcd-ctrl");
              if (t && t.length > 0) return !0
            }
            return !1
          });
          if (n && !_["default"].hasClass(n, "krcd-ctrl")) {
            var a = n.querySelectorAll(".krcd-ctrl");
            a && a.length > 0 && (n = a[a.length - 1])
          }
          return n ? n.getAttribute("krcd-type") && x.indexOf(n.getAttribute("krcd-type")) >= 0 ? e(n) : n : null
        }
        return e(this.getCtrlElement())
      }, t.prototype.getDesc = function () {
        var e = this.getOpt();
        return e && e.desc && e.desc.length > 0 ? e.desc : ""
      }, t.prototype.verifyInputKey = function (e, t) {
        e = e || window.event;
        var n = e.keyCode || e.charCode;
        return t.indexOf(n) < 0
      }, t.prototype.isNotDel = function () {
        var e = this.getOpt();
        return !!e && (1 === e.notdel || "1" === e.notdel)
      }, t.prototype.isReadonly = function () {
        var e = this.getCtrlElement();
        if (e && e.getAttribute("krcd-readonly") && "true" === e.getAttribute("krcd-readonly")) return !0;
        var t = this.getOpt();
        return !!this[b.ctrl_krcd] && "READONLY" === this[b.ctrl_krcd][b.__private__].options.mode || !!t && "READONLY" === t.mode
      }, t.prototype.isEqual = function (e) {
        return !!e && e.getCtrlElement() === this.getCtrlElement()
      }, t.prototype.isRequired = function () {
        var e = this.getOpt();
        return !!e & (1 === e.required || "1" === e.required)
      }, t.prototype.setBindingData = function (e) {
        var t = this.getCtrlElement();
        this.isLoadAsyncData(!0), t.setAttribute("bindingdata", h["default"].json2str(e)), t.setAttribute("krcd-updatetime", (new Date).toJSON())
      }, t.prototype.getBindingData = function () {
        var e = this.getCtrlElement(),
          t = e.getAttribute("bindingdata") || "[]";
        return h["default"].str2json(t)
      }, t.prototype.isLoadAsyncData = function (e) {
        if (e === undefined) return "true" === this.getCtrlElement().getAttribute("krcd-isLoadAsyncData");
        this.getCtrlElement().setAttribute("krcd-isLoadAsyncData", e)
      }, t.prototype.refreshData = function () {
        var e = this,
          t = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        if (t) {
          this.setValue(null);
          var n = this.getValueElement(),
            a = this.getOpt();
          n && "" === n.innerHTML && "" !== a.desc && (n.innerHTML = a.desc)
        }
        var r = this.getOpt();
        if (r && r.remotedata && r.remotedata.url) {
          this.fireEvent("beforesend");
          var i = h["default"].clone(r.remotedata, {});
          this[b.ctrl_krcd] && this[b.ctrl_krcd][b.__private__].options.ctrl_remote_handle && (i = this[b.ctrl_krcd][b.__private__].options.ctrl_remote_handle.call(this, i)), this.isLoadAsyncData() && !t || h["default"].axios(i).then(function (n) {
            e.fireEvent("successdata", n), e[b.ctrl_krcd].message.message((r.desc || "") + " 数据加载成功！", "success"), e.setBindingData(n.data.data), e.fireEvent("completedata"), e.render && e.render(t)
          })["catch"](function (t) {
            e.fireEvent("errordata", t), e[b.ctrl_krcd].message.message((r.desc || "") + " 数据加载失败！", "error"), e.fireEvent("completedata")
          })
        } else r && r.bindingdata && (this.fireEvent("beforesend"), this.fireEvent("successdata"), this.setBindingData(r.bindingdata), this.fireEvent("completedata"), this.render && this.render(t))
      }, t.prototype.setCursorAtLastNode = function (e) {
        e.getRange().setStartAtLast(this.getValueElement()).setCursor()
      }, t.prototype.triggerPreviousCtrl = function () {
        try {
          this[b.ctrl_krcd].fireEvent("ctrlchange", this, this.getPreviousElement(), "Previous")
        } catch (e) {}
      }, t.prototype.triggerNextCtrl = function () {
        try {
          this[b.ctrl_krcd].fireEvent("ctrlchange", this, this.getNextElement(), "Next")
        } catch (e) {}
      }, t
    }(T["default"]);
  e.exports = Y
}, function (e, t) {
  e.exports = function (e) {
    if ("function" != typeof e) throw TypeError(e + " is not a function!");
    return e
  }
}, function (e, t, n) {
  var a = n(13),
    r = n(6).document,
    i = a(r) && a(r.createElement);
  e.exports = function (e) {
    return i ? r.createElement(e) : {}
  }
}, , , function (e, t, n) {
  "use strict";
  var a = n(24),
    r = n(22),
    i = n(63),
    o = n(17),
    s = n(30),
    d = n(216),
    l = n(36),
    u = n(221),
    c = n(9)("iterator"),
    m = !([].keys && "next" in [].keys()),
    h = function () {
      return this
    };
  e.exports = function (e, t, n, f, _, p, y) {
    d(n, t, f);
    var M, g, v, T = function (e) {
        if (!m && e in w) return w[e];
        switch (e) {
          case "keys":
          case "values":
            return function () {
              return new n(this, e)
            }
        }
        return function () {
          return new n(this, e)
        }
      },
      b = t + " Iterator",
      S = "values" == _,
      L = !1,
      w = e.prototype,
      D = w[c] || w["@@iterator"] || _ && w[_],
      k = D || T(_),
      x = _ ? S ? T("entries") : k : undefined,
      Y = "Array" == t ? w.entries || D : D;
    if (Y && (v = u(Y.call(new e))) !== Object.prototype && v.next && (l(v, b, !0), a || "function" == typeof v[c] || o(v, c, h)), S && D && "values" !== D.name && (L = !0, k = function () {
        return D.call(this)
      }), a && !y || !m && !L && w[c] || o(w, c, k), s[t] = k, s[b] = h, _)
      if (M = {
          values: S ? k : T("values"),
          keys: p ? k : T("keys"),
          entries: x
        }, y)
        for (g in M) g in w || i(w, g, M[g]);
      else r(r.P + r.F * (m || L), t, M);
    return M
  }
}, function (e, t, n) {
  e.exports = !n(19) && !n(28)(function () {
    return 7 != Object.defineProperty(n(58)("div"), "a", {
      get: function () {
        return 7
      }
    }).a
  })
}, function (e, t, n) {
  e.exports = n(17)
}, function (e, t, n) {
  var a = n(14),
    r = n(21),
    i = n(219)(!1),
    o = n(44)("IE_PROTO");
  e.exports = function (e, t) {
    var n, s = r(e),
      d = 0,
      l = [];
    for (n in s) n != o && a(s, n) && l.push(n);
    for (; t.length > d;) a(s, n = t[d++]) && (~i(l, n) || l.push(n));
    return l
  }
}, function (e, t) {
  t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
  var a = n(64),
    r = n(46).concat("length", "prototype");
  t.f = Object.getOwnPropertyNames || function (e) {
    return a(e, r)
  }
}, function (e, t, n) {
  var a = n(50),
    r = n(29),
    i = n(21),
    o = n(41),
    s = n(14),
    d = n(62),
    l = Object.getOwnPropertyDescriptor;
  t.f = n(19) ? l : function (e, t) {
    if (e = i(e), t = o(t, !0), d) try {
      return l(e, t)
    } catch (n) {}
    if (s(e, t)) return r(!a.f.call(e, t), e[t])
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e, t) {
    return function () {
      for (var n = new Array(arguments.length), a = 0; a < n.length; a++) n[a] = arguments[a];
      return e.apply(t, n)
    }
  }
}, function (e, t, n) {
  "use strict";
  (function (t) {
    var a = n(5),
      r = n(249),
      i = n(251),
      o = n(252),
      s = n(253),
      d = n(70),
      l = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(254);
    e.exports = function (e) {
      return new t(function (t, u) {
        var c = e.data,
          m = e.headers;
        a.isFormData(c) && delete m["Content-Type"];
        var h = new XMLHttpRequest,
          f = "onreadystatechange",
          _ = !1;
        if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in h || s(e.url) || (h = new window.XDomainRequest, f = "onload", _ = !0, h.onprogress = function () {}, h.ontimeout = function () {}), e.auth) {
          var p = e.auth.username || "",
            y = e.auth.password || "";
          m.Authorization = "Basic " + l(p + ":" + y)
        }
        if (h.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h[f] = function () {
            if (h && (4 === h.readyState || _) && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
              var n = "getAllResponseHeaders" in h ? o(h.getAllResponseHeaders()) : null,
                a = e.responseType && "text" !== e.responseType ? h.response : h.responseText,
                i = {
                  data: a,
                  status: 1223 === h.status ? 204 : h.status,
                  statusText: 1223 === h.status ? "No Content" : h.statusText,
                  headers: n,
                  config: e,
                  request: h
                };
              r(t, u, i), h = null
            }
          }, h.onerror = function () {
            u(d("Network Error", e, null, h)), h = null
          }, h.ontimeout = function () {
            u(d("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", h)), h = null
          }, a.isStandardBrowserEnv()) {
          var M = n(255),
            g = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? M.read(e.xsrfCookieName) : undefined;
          g && (m[e.xsrfHeaderName] = g)
        }
        if ("setRequestHeader" in h && a.forEach(m, function (e, t) {
            void 0 === c && "content-type" === t.toLowerCase() ? delete m[t] : h.setRequestHeader(t, e)
          }), e.withCredentials && (h.withCredentials = !0), e.responseType) try {
          h.responseType = e.responseType
        } catch (v) {
          if ("json" !== e.responseType) throw v
        }
        "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
          h && (h.abort(), u(e), h = null)
        }), c === undefined && (c = null), h.send(c)
      })
    }
  }).call(t, n(10))
}, function (e, t, n) {
  "use strict";
  var a = n(250);
  e.exports = function (e, t, n, r, i) {
    var o = new Error(e);
    return a(o, t, n, r, i)
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
    return !(!e || !e.__CANCEL__)
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    this.message = e
  }
  a.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "")
  }, a.prototype.__CANCEL__ = !0, e.exports = a
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("af", {
      months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
      monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
      weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
      weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
      weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
      meridiemParse: /vm|nm/i,
      isPM: function (e) {
        return /^nm$/i.test(e)
      },
      meridiem: function (e, t, n) {
        return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
      },
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Vandag om] LT",
        nextDay: "[Môre om] LT",
        nextWeek: "dddd [om] LT",
        lastDay: "[Gister om] LT",
        lastWeek: "[Laas] dddd [om] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "oor %s",
        past: "%s gelede",
        s: "'n paar sekondes",
        ss: "%d sekondes",
        m: "'n minuut",
        mm: "%d minute",
        h: "'n uur",
        hh: "%d ure",
        d: "'n dag",
        dd: "%d dae",
        M: "'n maand",
        MM: "%d maande",
        y: "'n jaar",
        yy: "%d jaar"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal: function (e) {
        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
        1: "١",
        2: "٢",
        3: "٣",
        4: "٤",
        5: "٥",
        6: "٦",
        7: "٧",
        8: "٨",
        9: "٩",
        0: "٠"
      },
      n = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0"
      },
      a = function (e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
      },
      r = {
        s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
        m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
        h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
        d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
        M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
        y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
      },
      i = function (e) {
        return function (t, n, i, o) {
          var s = a(t),
            d = r[e][a(t)];
          return 2 === s && (d = d[n ? 0 : 1]), d.replace(/%d/i, t)
        }
      },
      o = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    return e.defineLocale("ar", {
      months: o,
      monthsShort: o,
      weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
      weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
      weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/‏M/‏YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /ص|م/,
      isPM: function (e) {
        return "م" === e
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "ص" : "م"
      },
      calendar: {
        sameDay: "[اليوم عند الساعة] LT",
        nextDay: "[غدًا عند الساعة] LT",
        nextWeek: "dddd [عند الساعة] LT",
        lastDay: "[أمس عند الساعة] LT",
        lastWeek: "dddd [عند الساعة] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "بعد %s",
        past: "منذ %s",
        s: i("s"),
        ss: i("s"),
        m: i("m"),
        mm: i("m"),
        h: i("h"),
        hh: i("h"),
        d: i("d"),
        dd: i("d"),
        M: i("M"),
        MM: i("M"),
        y: i("y"),
        yy: i("y")
      },
      preparse: function (e) {
        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
          return n[e]
        }).replace(/،/g, ",")
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return t[e]
        }).replace(/,/g, "،")
      },
      week: {
        dow: 6,
        doy: 12
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ar-dz", {
      months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
      monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
      weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
      weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
      weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[اليوم على الساعة] LT",
        nextDay: "[غدا على الساعة] LT",
        nextWeek: "dddd [على الساعة] LT",
        lastDay: "[أمس على الساعة] LT",
        lastWeek: "dddd [على الساعة] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "في %s",
        past: "منذ %s",
        s: "ثوان",
        ss: "%d ثانية",
        m: "دقيقة",
        mm: "%d دقائق",
        h: "ساعة",
        hh: "%d ساعات",
        d: "يوم",
        dd: "%d أيام",
        M: "شهر",
        MM: "%d أشهر",
        y: "سنة",
        yy: "%d سنوات"
      },
      week: {
        dow: 0,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ar-kw", {
      months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
      monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
      weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
      weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
      weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[اليوم على الساعة] LT",
        nextDay: "[غدا على الساعة] LT",
        nextWeek: "dddd [على الساعة] LT",
        lastDay: "[أمس على الساعة] LT",
        lastWeek: "dddd [على الساعة] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "في %s",
        past: "منذ %s",
        s: "ثوان",
        ss: "%d ثانية",
        m: "دقيقة",
        mm: "%d دقائق",
        h: "ساعة",
        hh: "%d ساعات",
        d: "يوم",
        dd: "%d أيام",
        M: "شهر",
        MM: "%d أشهر",
        y: "سنة",
        yy: "%d سنوات"
      },
      week: {
        dow: 0,
        doy: 12
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0"
      },
      n = function (e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
      },
      a = {
        s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
        m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
        h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
        d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
        M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
        y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
      },
      r = function (e) {
        return function (t, r, i, o) {
          var s = n(t),
            d = a[e][n(t)];
          return 2 === s && (d = d[r ? 0 : 1]), d.replace(/%d/i, t)
        }
      },
      i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    return e.defineLocale("ar-ly", {
      months: i,
      monthsShort: i,
      weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
      weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
      weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/‏M/‏YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /ص|م/,
      isPM: function (e) {
        return "م" === e
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "ص" : "م"
      },
      calendar: {
        sameDay: "[اليوم عند الساعة] LT",
        nextDay: "[غدًا عند الساعة] LT",
        nextWeek: "dddd [عند الساعة] LT",
        lastDay: "[أمس عند الساعة] LT",
        lastWeek: "dddd [عند الساعة] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "بعد %s",
        past: "منذ %s",
        s: r("s"),
        ss: r("s"),
        m: r("m"),
        mm: r("m"),
        h: r("h"),
        hh: r("h"),
        d: r("d"),
        dd: r("d"),
        M: r("M"),
        MM: r("M"),
        y: r("y"),
        yy: r("y")
      },
      preparse: function (e) {
        return e.replace(/،/g, ",")
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return t[e]
        }).replace(/,/g, "،")
      },
      week: {
        dow: 6,
        doy: 12
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ar-ma", {
      months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
      monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
      weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
      weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
      weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[اليوم على الساعة] LT",
        nextDay: "[غدا على الساعة] LT",
        nextWeek: "dddd [على الساعة] LT",
        lastDay: "[أمس على الساعة] LT",
        lastWeek: "dddd [على الساعة] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "في %s",
        past: "منذ %s",
        s: "ثوان",
        ss: "%d ثانية",
        m: "دقيقة",
        mm: "%d دقائق",
        h: "ساعة",
        hh: "%d ساعات",
        d: "يوم",
        dd: "%d أيام",
        M: "شهر",
        MM: "%d أشهر",
        y: "سنة",
        yy: "%d سنوات"
      },
      week: {
        dow: 6,
        doy: 12
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
        1: "١",
        2: "٢",
        3: "٣",
        4: "٤",
        5: "٥",
        6: "٦",
        7: "٧",
        8: "٨",
        9: "٩",
        0: "٠"
      },
      n = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0"
      };
    return e.defineLocale("ar-sa", {
      months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
      monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
      weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
      weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
      weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /ص|م/,
      isPM: function (e) {
        return "م" === e
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "ص" : "م"
      },
      calendar: {
        sameDay: "[اليوم على الساعة] LT",
        nextDay: "[غدا على الساعة] LT",
        nextWeek: "dddd [على الساعة] LT",
        lastDay: "[أمس على الساعة] LT",
        lastWeek: "dddd [على الساعة] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "في %s",
        past: "منذ %s",
        s: "ثوان",
        ss: "%d ثانية",
        m: "دقيقة",
        mm: "%d دقائق",
        h: "ساعة",
        hh: "%d ساعات",
        d: "يوم",
        dd: "%d أيام",
        M: "شهر",
        MM: "%d أشهر",
        y: "سنة",
        yy: "%d سنوات"
      },
      preparse: function (e) {
        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
          return n[e]
        }).replace(/،/g, ",")
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return t[e]
        }).replace(/,/g, "،")
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ar-tn", {
      months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
      monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
      weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
      weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
      weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[اليوم على الساعة] LT",
        nextDay: "[غدا على الساعة] LT",
        nextWeek: "dddd [على الساعة] LT",
        lastDay: "[أمس على الساعة] LT",
        lastWeek: "dddd [على الساعة] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "في %s",
        past: "منذ %s",
        s: "ثوان",
        ss: "%d ثانية",
        m: "دقيقة",
        mm: "%d دقائق",
        h: "ساعة",
        hh: "%d ساعات",
        d: "يوم",
        dd: "%d أيام",
        M: "شهر",
        MM: "%d أشهر",
        y: "سنة",
        yy: "%d سنوات"
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
      1: "-inci",
      5: "-inci",
      8: "-inci",
      70: "-inci",
      80: "-inci",
      2: "-nci",
      7: "-nci",
      20: "-nci",
      50: "-nci",
      3: "-üncü",
      4: "-üncü",
      100: "-üncü",
      6: "-ncı",
      9: "-uncu",
      10: "-uncu",
      30: "-uncu",
      60: "-ıncı",
      90: "-ıncı"
    };
    return e.defineLocale("az", {
      months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
      monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
      weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
      weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
      weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[bugün saat] LT",
        nextDay: "[sabah saat] LT",
        nextWeek: "[gələn həftə] dddd [saat] LT",
        lastDay: "[dünən] LT",
        lastWeek: "[keçən həftə] dddd [saat] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s sonra",
        past: "%s əvvəl",
        s: "birneçə saniyə",
        ss: "%d saniyə",
        m: "bir dəqiqə",
        mm: "%d dəqiqə",
        h: "bir saat",
        hh: "%d saat",
        d: "bir gün",
        dd: "%d gün",
        M: "bir ay",
        MM: "%d ay",
        y: "bir il",
        yy: "%d il"
      },
      meridiemParse: /gecə|səhər|gündüz|axşam/,
      isPM: function (e) {
        return /^(gündüz|axşam)$/.test(e)
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
      ordinal: function (e) {
        if (0 === e) return e + "-ıncı";
        var n = e % 10,
          a = e % 100 - n,
          r = e >= 100 ? 100 : null;
        return e + (t[n] || t[a] || t[r])
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t) {
      var n = e.split("_");
      return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
    }

    function n(e, n, a) {
      var r = {
        ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
        mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
        hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
        dd: "дзень_дні_дзён",
        MM: "месяц_месяцы_месяцаў",
        yy: "год_гады_гадоў"
      };
      return "m" === a ? n ? "хвіліна" : "хвіліну" : "h" === a ? n ? "гадзіна" : "гадзіну" : e + " " + t(r[a], +e)
    }
    return e.defineLocale("be", {
      months: {
        format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
        standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
      },
      monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
      weekdays: {
        format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
        standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
        isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
      },
      weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
      weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY г.",
        LLL: "D MMMM YYYY г., HH:mm",
        LLLL: "dddd, D MMMM YYYY г., HH:mm"
      },
      calendar: {
        sameDay: "[Сёння ў] LT",
        nextDay: "[Заўтра ў] LT",
        lastDay: "[Учора ў] LT",
        nextWeek: function () {
          return "[У] dddd [ў] LT"
        },
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
              return "[У мінулую] dddd [ў] LT";
            case 1:
            case 2:
            case 4:
              return "[У мінулы] dddd [ў] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "праз %s",
        past: "%s таму",
        s: "некалькі секунд",
        m: n,
        mm: n,
        h: n,
        hh: n,
        d: "дзень",
        dd: n,
        M: "месяц",
        MM: n,
        y: "год",
        yy: n
      },
      meridiemParse: /ночы|раніцы|дня|вечара/,
      isPM: function (e) {
        return /^(дня|вечара)$/.test(e)
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
      ordinal: function (e, t) {
        switch (t) {
          case "M":
          case "d":
          case "DDD":
          case "w":
          case "W":
            return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
          case "D":
            return e + "-га";
          default:
            return e
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("bg", {
      months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
      monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
      weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
      weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
      weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY H:mm",
        LLLL: "dddd, D MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[Днес в] LT",
        nextDay: "[Утре в] LT",
        nextWeek: "dddd [в] LT",
        lastDay: "[Вчера в] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
            case 6:
              return "[В изминалата] dddd [в] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[В изминалия] dddd [в] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "след %s",
        past: "преди %s",
        s: "няколко секунди",
        ss: "%d секунди",
        m: "минута",
        mm: "%d минути",
        h: "час",
        hh: "%d часа",
        d: "ден",
        dd: "%d дни",
        M: "месец",
        MM: "%d месеца",
        y: "година",
        yy: "%d години"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
      ordinal: function (e) {
        var t = e % 10,
          n = e % 100;
        return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("bm", {
      months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
      monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
      weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
      weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
      weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "MMMM [tile] D [san] YYYY",
        LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
        LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
      },
      calendar: {
        sameDay: "[Bi lɛrɛ] LT",
        nextDay: "[Sini lɛrɛ] LT",
        nextWeek: "dddd [don lɛrɛ] LT",
        lastDay: "[Kunu lɛrɛ] LT",
        lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s kɔnɔ",
        past: "a bɛ %s bɔ",
        s: "sanga dama dama",
        ss: "sekondi %d",
        m: "miniti kelen",
        mm: "miniti %d",
        h: "lɛrɛ kelen",
        hh: "lɛrɛ %d",
        d: "tile kelen",
        dd: "tile %d",
        M: "kalo kelen",
        MM: "kalo %d",
        y: "san kelen",
        yy: "san %d"
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
        1: "১",
        2: "২",
        3: "৩",
        4: "৪",
        5: "৫",
        6: "৬",
        7: "৭",
        8: "৮",
        9: "৯",
        0: "০"
      },
      n = {
        "১": "1",
        "২": "2",
        "৩": "3",
        "৪": "4",
        "৫": "5",
        "৬": "6",
        "৭": "7",
        "৮": "8",
        "৯": "9",
        "০": "0"
      };
    return e.defineLocale("bn", {
      months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
      monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
      weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
      weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
      weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
      longDateFormat: {
        LT: "A h:mm সময়",
        LTS: "A h:mm:ss সময়",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm সময়",
        LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
      },
      calendar: {
        sameDay: "[আজ] LT",
        nextDay: "[আগামীকাল] LT",
        nextWeek: "dddd, LT",
        lastDay: "[গতকাল] LT",
        lastWeek: "[গত] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s পরে",
        past: "%s আগে",
        s: "কয়েক সেকেন্ড",
        ss: "%d সেকেন্ড",
        m: "এক মিনিট",
        mm: "%d মিনিট",
        h: "এক ঘন্টা",
        hh: "%d ঘন্টা",
        d: "এক দিন",
        dd: "%d দিন",
        M: "এক মাস",
        MM: "%d মাস",
        y: "এক বছর",
        yy: "%d বছর"
      },
      preparse: function (e) {
        return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
          return n[e]
        })
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return t[e]
        })
      },
      meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
        1: "༡",
        2: "༢",
        3: "༣",
        4: "༤",
        5: "༥",
        6: "༦",
        7: "༧",
        8: "༨",
        9: "༩",
        0: "༠"
      },
      n = {
        "༡": "1",
        "༢": "2",
        "༣": "3",
        "༤": "4",
        "༥": "5",
        "༦": "6",
        "༧": "7",
        "༨": "8",
        "༩": "9",
        "༠": "0"
      };
    return e.defineLocale("bo", {
      months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
      monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
      weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
      weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
      weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
      longDateFormat: {
        LT: "A h:mm",
        LTS: "A h:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm",
        LLLL: "dddd, D MMMM YYYY, A h:mm"
      },
      calendar: {
        sameDay: "[དི་རིང] LT",
        nextDay: "[སང་ཉིན] LT",
        nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
        lastDay: "[ཁ་སང] LT",
        lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s ལ་",
        past: "%s སྔན་ལ",
        s: "ལམ་སང",
        ss: "%d སྐར་ཆ།",
        m: "སྐར་མ་གཅིག",
        mm: "%d སྐར་མ",
        h: "ཆུ་ཚོད་གཅིག",
        hh: "%d ཆུ་ཚོད",
        d: "ཉིན་གཅིག",
        dd: "%d ཉིན་",
        M: "ཟླ་བ་གཅིག",
        MM: "%d ཟླ་བ",
        y: "ལོ་གཅིག",
        yy: "%d ལོ"
      },
      preparse: function (e) {
        return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
          return n[e]
        })
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return t[e]
        })
      },
      meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n) {
      return e + " " + r({
        mm: "munutenn",
        MM: "miz",
        dd: "devezh"
      } [n], e)
    }

    function n(e) {
      switch (a(e)) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 9:
          return e + " bloaz";
        default:
          return e + " vloaz"
      }
    }

    function a(e) {
      return e > 9 ? a(e % 10) : e
    }

    function r(e, t) {
      return 2 === t ? i(e) : e
    }

    function i(e) {
      var t = {
        m: "v",
        b: "v",
        d: "z"
      };
      return t[e.charAt(0)] === undefined ? e : t[e.charAt(0)] + e.substring(1)
    }
    return e.defineLocale("br", {
      months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
      monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
      weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
      weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
      weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "h[e]mm A",
        LTS: "h[e]mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D [a viz] MMMM YYYY",
        LLL: "D [a viz] MMMM YYYY h[e]mm A",
        LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
      },
      calendar: {
        sameDay: "[Hiziv da] LT",
        nextDay: "[Warc'hoazh da] LT",
        nextWeek: "dddd [da] LT",
        lastDay: "[Dec'h da] LT",
        lastWeek: "dddd [paset da] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "a-benn %s",
        past: "%s 'zo",
        s: "un nebeud segondennoù",
        ss: "%d eilenn",
        m: "ur vunutenn",
        mm: t,
        h: "un eur",
        hh: "%d eur",
        d: "un devezh",
        dd: t,
        M: "ur miz",
        MM: t,
        y: "ur bloaz",
        yy: n
      },
      dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
      ordinal: function (e) {
        return e + (1 === e ? "añ" : "vet")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n) {
      var a = e + " ";
      switch (n) {
        case "ss":
          return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
        case "m":
          return t ? "jedna minuta" : "jedne minute";
        case "mm":
          return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
        case "h":
          return t ? "jedan sat" : "jednog sata";
        case "hh":
          return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
        case "dd":
          return a += 1 === e ? "dan" : "dana";
        case "MM":
          return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
        case "yy":
          return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
      }
    }
    return e.defineLocale("bs", {
      months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
      monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[u] [nedjelju] [u] LT";
            case 3:
              return "[u] [srijedu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT"
          }
        },
        lastDay: "[jučer u] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
              return "[prošlu] dddd [u] LT";
            case 6:
              return "[prošle] [subote] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[prošli] dddd [u] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "prije %s",
        s: "par sekundi",
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: "dan",
        dd: t,
        M: "mjesec",
        MM: t,
        y: "godinu",
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ca", {
      months: {
        standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
        format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
        isFormat: /D[oD]?(\s)+MMMM/
      },
      monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
      monthsParseExact: !0,
      weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
      weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
      weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM [de] YYYY",
        ll: "D MMM YYYY",
        LLL: "D MMMM [de] YYYY [a les] H:mm",
        lll: "D MMM YYYY, H:mm",
        LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
        llll: "ddd D MMM YYYY, H:mm"
      },
      calendar: {
        sameDay: function () {
          return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        nextDay: function () {
          return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        nextWeek: function () {
          return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        lastDay: function () {
          return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        lastWeek: function () {
          return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "d'aquí %s",
        past: "fa %s",
        s: "uns segons",
        ss: "%d segons",
        m: "un minut",
        mm: "%d minuts",
        h: "una hora",
        hh: "%d hores",
        d: "un dia",
        dd: "%d dies",
        M: "un mes",
        MM: "%d mesos",
        y: "un any",
        yy: "%d anys"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
      ordinal: function (e, t) {
        var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
        return "w" !== t && "W" !== t || (n = "a"), e + n
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e) {
      return e > 1 && e < 5 && 1 != ~~(e / 10)
    }

    function n(e, n, a, r) {
      var i = e + " ";
      switch (a) {
        case "s":
          return n || r ? "pár sekund" : "pár sekundami";
        case "ss":
          return n || r ? i + (t(e) ? "sekundy" : "sekund") : i + "sekundami";
        case "m":
          return n ? "minuta" : r ? "minutu" : "minutou";
        case "mm":
          return n || r ? i + (t(e) ? "minuty" : "minut") : i + "minutami";
        case "h":
          return n ? "hodina" : r ? "hodinu" : "hodinou";
        case "hh":
          return n || r ? i + (t(e) ? "hodiny" : "hodin") : i + "hodinami";
        case "d":
          return n || r ? "den" : "dnem";
        case "dd":
          return n || r ? i + (t(e) ? "dny" : "dní") : i + "dny";
        case "M":
          return n || r ? "měsíc" : "měsícem";
        case "MM":
          return n || r ? i + (t(e) ? "měsíce" : "měsíců") : i + "měsíci";
        case "y":
          return n || r ? "rok" : "rokem";
        case "yy":
          return n || r ? i + (t(e) ? "roky" : "let") : i + "lety"
      }
    }
    var a = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
      r = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
    return e.defineLocale("cs", {
      months: a,
      monthsShort: r,
      monthsParse: function (e, t) {
        var n, a = [];
        for (n = 0; n < 12; n++) a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
        return a
      }(a, r),
      shortMonthsParse: function (e) {
        var t, n = [];
        for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
        return n
      }(r),
      longMonthsParse: function (e) {
        var t, n = [];
        for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
        return n
      }(a),
      weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
      weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
      weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm",
        l: "D. M. YYYY"
      },
      calendar: {
        sameDay: "[dnes v] LT",
        nextDay: "[zítra v] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v neděli v] LT";
            case 1:
            case 2:
              return "[v] dddd [v] LT";
            case 3:
              return "[ve středu v] LT";
            case 4:
              return "[ve čtvrtek v] LT";
            case 5:
              return "[v pátek v] LT";
            case 6:
              return "[v sobotu v] LT"
          }
        },
        lastDay: "[včera v] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[minulou neděli v] LT";
            case 1:
            case 2:
              return "[minulé] dddd [v] LT";
            case 3:
              return "[minulou středu v] LT";
            case 4:
            case 5:
              return "[minulý] dddd [v] LT";
            case 6:
              return "[minulou sobotu v] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "před %s",
        s: n,
        ss: n,
        m: n,
        mm: n,
        h: n,
        hh: n,
        d: n,
        dd: n,
        M: n,
        MM: n,
        y: n,
        yy: n
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("cv", {
      months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
      monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
      weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
      weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
      weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD-MM-YYYY",
        LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
        LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
        LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
      },
      calendar: {
        sameDay: "[Паян] LT [сехетре]",
        nextDay: "[Ыран] LT [сехетре]",
        lastDay: "[Ӗнер] LT [сехетре]",
        nextWeek: "[Ҫитес] dddd LT [сехетре]",
        lastWeek: "[Иртнӗ] dddd LT [сехетре]",
        sameElse: "L"
      },
      relativeTime: {
        future: function (e) {
          return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
        },
        past: "%s каялла",
        s: "пӗр-ик ҫеккунт",
        ss: "%d ҫеккунт",
        m: "пӗр минут",
        mm: "%d минут",
        h: "пӗр сехет",
        hh: "%d сехет",
        d: "пӗр кун",
        dd: "%d кун",
        M: "пӗр уйӑх",
        MM: "%d уйӑх",
        y: "пӗр ҫул",
        yy: "%d ҫул"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
      ordinal: "%d-мӗш",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("cy", {
      months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
      monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
      weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
      weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
      weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Heddiw am] LT",
        nextDay: "[Yfory am] LT",
        nextWeek: "dddd [am] LT",
        lastDay: "[Ddoe am] LT",
        lastWeek: "dddd [diwethaf am] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "mewn %s",
        past: "%s yn ôl",
        s: "ychydig eiliadau",
        ss: "%d eiliad",
        m: "munud",
        mm: "%d munud",
        h: "awr",
        hh: "%d awr",
        d: "diwrnod",
        dd: "%d diwrnod",
        M: "mis",
        MM: "%d mis",
        y: "blwyddyn",
        yy: "%d flynedd"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
      ordinal: function (e) {
        var t = e,
          n = "",
          a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
        return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = a[t]), e + n
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("da", {
      months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
      monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
      weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
      weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
      weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
      },
      calendar: {
        sameDay: "[i dag kl.] LT",
        nextDay: "[i morgen kl.] LT",
        nextWeek: "på dddd [kl.] LT",
        lastDay: "[i går kl.] LT",
        lastWeek: "[i] dddd[s kl.] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "om %s",
        past: "%s siden",
        s: "få sekunder",
        ss: "%d sekunder",
        m: "et minut",
        mm: "%d minutter",
        h: "en time",
        hh: "%d timer",
        d: "en dag",
        dd: "%d dage",
        M: "en måned",
        MM: "%d måneder",
        y: "et år",
        yy: "%d år"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n, a) {
      var r = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [e + " Tage", e + " Tagen"],
        M: ["ein Monat", "einem Monat"],
        MM: [e + " Monate", e + " Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: [e + " Jahre", e + " Jahren"]
      };
      return t ? r[n][0] : r[n][1]
    }
    return e.defineLocale("de", {
      months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
      weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd, D. MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[heute um] LT [Uhr]",
        sameElse: "L",
        nextDay: "[morgen um] LT [Uhr]",
        nextWeek: "dddd [um] LT [Uhr]",
        lastDay: "[gestern um] LT [Uhr]",
        lastWeek: "[letzten] dddd [um] LT [Uhr]"
      },
      relativeTime: {
        future: "in %s",
        past: "vor %s",
        s: "ein paar Sekunden",
        ss: "%d Sekunden",
        m: t,
        mm: "%d Minuten",
        h: t,
        hh: "%d Stunden",
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n, a) {
      var r = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [e + " Tage", e + " Tagen"],
        M: ["ein Monat", "einem Monat"],
        MM: [e + " Monate", e + " Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: [e + " Jahre", e + " Jahren"]
      };
      return t ? r[n][0] : r[n][1]
    }
    return e.defineLocale("de-at", {
      months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
      weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd, D. MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[heute um] LT [Uhr]",
        sameElse: "L",
        nextDay: "[morgen um] LT [Uhr]",
        nextWeek: "dddd [um] LT [Uhr]",
        lastDay: "[gestern um] LT [Uhr]",
        lastWeek: "[letzten] dddd [um] LT [Uhr]"
      },
      relativeTime: {
        future: "in %s",
        past: "vor %s",
        s: "ein paar Sekunden",
        ss: "%d Sekunden",
        m: t,
        mm: "%d Minuten",
        h: t,
        hh: "%d Stunden",
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n, a) {
      var r = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [e + " Tage", e + " Tagen"],
        M: ["ein Monat", "einem Monat"],
        MM: [e + " Monate", e + " Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: [e + " Jahre", e + " Jahren"]
      };
      return t ? r[n][0] : r[n][1]
    }
    return e.defineLocale("de-ch", {
      months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
      weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd, D. MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[heute um] LT [Uhr]",
        sameElse: "L",
        nextDay: "[morgen um] LT [Uhr]",
        nextWeek: "dddd [um] LT [Uhr]",
        lastDay: "[gestern um] LT [Uhr]",
        lastWeek: "[letzten] dddd [um] LT [Uhr]"
      },
      relativeTime: {
        future: "in %s",
        past: "vor %s",
        s: "ein paar Sekunden",
        ss: "%d Sekunden",
        m: t,
        mm: "%d Minuten",
        h: t,
        hh: "%d Stunden",
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
      n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
    return e.defineLocale("dv", {
      months: t,
      monthsShort: t,
      weekdays: n,
      weekdaysShort: n,
      weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/M/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /މކ|މފ/,
      isPM: function (e) {
        return "މފ" === e
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "މކ" : "މފ"
      },
      calendar: {
        sameDay: "[މިއަދު] LT",
        nextDay: "[މާދަމާ] LT",
        nextWeek: "dddd LT",
        lastDay: "[އިއްޔެ] LT",
        lastWeek: "[ފާއިތުވި] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ތެރޭގައި %s",
        past: "ކުރިން %s",
        s: "ސިކުންތުކޮޅެއް",
        ss: "d% ސިކުންތު",
        m: "މިނިޓެއް",
        mm: "މިނިޓު %d",
        h: "ގަޑިއިރެއް",
        hh: "ގަޑިއިރު %d",
        d: "ދުވަހެއް",
        dd: "ދުވަސް %d",
        M: "މަހެއް",
        MM: "މަސް %d",
        y: "އަހަރެއް",
        yy: "އަހަރު %d"
      },
      preparse: function (e) {
        return e.replace(/،/g, ",")
      },
      postformat: function (e) {
        return e.replace(/,/g, "،")
      },
      week: {
        dow: 7,
        doy: 12
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e) {
      return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    return e.defineLocale("el", {
      monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
      monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
      months: function (e, t) {
        return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
      },
      monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
      weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
      weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
      weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
      meridiem: function (e, t, n) {
        return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
      },
      isPM: function (e) {
        return "μ" === (e + "").toLowerCase()[0]
      },
      meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendarEl: {
        sameDay: "[Σήμερα {}] LT",
        nextDay: "[Αύριο {}] LT",
        nextWeek: "dddd [{}] LT",
        lastDay: "[Χθες {}] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 6:
              return "[το προηγούμενο] dddd [{}] LT";
            default:
              return "[την προηγούμενη] dddd [{}] LT"
          }
        },
        sameElse: "L"
      },
      calendar: function (e, n) {
        var a = this._calendarEl[e],
          r = n && n.hours();
        return t(a) && (a = a.apply(n)), a.replace("{}", r % 12 == 1 ? "στη" : "στις")
      },
      relativeTime: {
        future: "σε %s",
        past: "%s πριν",
        s: "λίγα δευτερόλεπτα",
        ss: "%d δευτερόλεπτα",
        m: "ένα λεπτό",
        mm: "%d λεπτά",
        h: "μία ώρα",
        hh: "%d ώρες",
        d: "μία μέρα",
        dd: "%d μέρες",
        M: "ένας μήνας",
        MM: "%d μήνες",
        y: "ένας χρόνος",
        yy: "%d χρόνια"
      },
      dayOfMonthOrdinalParse: /\d{1,2}η/,
      ordinal: "%dη",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("en-au", {
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function (e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("en-ca", {
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "YYYY-MM-DD",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      },
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function (e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("en-gb", {
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function (e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("en-ie", {
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function (e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("en-il", {
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function (e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("en-nz", {
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function (e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("eo", {
      months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
      monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
      weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
      weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
      weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "D[-a de] MMMM, YYYY",
        LLL: "D[-a de] MMMM, YYYY HH:mm",
        LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
      },
      meridiemParse: /[ap]\.t\.m/i,
      isPM: function (e) {
        return "p" === e.charAt(0).toLowerCase()
      },
      meridiem: function (e, t, n) {
        return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
      },
      calendar: {
        sameDay: "[Hodiaŭ je] LT",
        nextDay: "[Morgaŭ je] LT",
        nextWeek: "dddd [je] LT",
        lastDay: "[Hieraŭ je] LT",
        lastWeek: "[pasinta] dddd [je] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "post %s",
        past: "antaŭ %s",
        s: "sekundoj",
        ss: "%d sekundoj",
        m: "minuto",
        mm: "%d minutoj",
        h: "horo",
        hh: "%d horoj",
        d: "tago",
        dd: "%d tagoj",
        M: "monato",
        MM: "%d monatoj",
        y: "jaro",
        yy: "%d jaroj"
      },
      dayOfMonthOrdinalParse: /\d{1,2}a/,
      ordinal: "%da",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
      a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
      r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    return e.defineLocale("es", {
      months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
      monthsShort: function (e, a) {
        return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
      },
      monthsRegex: r,
      monthsShortRegex: r,
      monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
      monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
      monthsParse: a,
      longMonthsParse: a,
      shortMonthsParse: a,
      weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
      weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
      weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [de] MMMM [de] YYYY",
        LLL: "D [de] MMMM [de] YYYY H:mm",
        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
      },
      calendar: {
        sameDay: function () {
          return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        nextDay: function () {
          return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        nextWeek: function () {
          return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        lastDay: function () {
          return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        lastWeek: function () {
          return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "en %s",
        past: "hace %s",
        s: "unos segundos",
        ss: "%d segundos",
        m: "un minuto",
        mm: "%d minutos",
        h: "una hora",
        hh: "%d horas",
        d: "un día",
        dd: "%d días",
        M: "un mes",
        MM: "%d meses",
        y: "un año",
        yy: "%d años"
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: "%dº",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
      a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
      r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    return e.defineLocale("es-do", {
      months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
      monthsShort: function (e, a) {
        return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
      },
      monthsRegex: r,
      monthsShortRegex: r,
      monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
      monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
      monthsParse: a,
      longMonthsParse: a,
      shortMonthsParse: a,
      weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
      weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
      weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D [de] MMMM [de] YYYY",
        LLL: "D [de] MMMM [de] YYYY h:mm A",
        LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
      },
      calendar: {
        sameDay: function () {
          return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        nextDay: function () {
          return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        nextWeek: function () {
          return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        lastDay: function () {
          return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        lastWeek: function () {
          return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "en %s",
        past: "hace %s",
        s: "unos segundos",
        ss: "%d segundos",
        m: "un minuto",
        mm: "%d minutos",
        h: "una hora",
        hh: "%d horas",
        d: "un día",
        dd: "%d días",
        M: "un mes",
        MM: "%d meses",
        y: "un año",
        yy: "%d años"
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: "%dº",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
    return e.defineLocale("es-us", {
      months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
      monthsShort: function (e, a) {
        return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
      },
      monthsParseExact: !0,
      weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
      weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
      weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "MM/DD/YYYY",
        LL: "MMMM [de] D [de] YYYY",
        LLL: "MMMM [de] D [de] YYYY h:mm A",
        LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
      },
      calendar: {
        sameDay: function () {
          return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        nextDay: function () {
          return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        nextWeek: function () {
          return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        lastDay: function () {
          return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        lastWeek: function () {
          return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "en %s",
        past: "hace %s",
        s: "unos segundos",
        ss: "%d segundos",
        m: "un minuto",
        mm: "%d minutos",
        h: "una hora",
        hh: "%d horas",
        d: "un día",
        dd: "%d días",
        M: "un mes",
        MM: "%d meses",
        y: "un año",
        yy: "%d años"
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: "%dº",
      week: {
        dow: 0,
        doy: 6
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n, a) {
      var r = {
        s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
        ss: [e + "sekundi", e + "sekundit"],
        m: ["ühe minuti", "üks minut"],
        mm: [e + " minuti", e + " minutit"],
        h: ["ühe tunni", "tund aega", "üks tund"],
        hh: [e + " tunni", e + " tundi"],
        d: ["ühe päeva", "üks päev"],
        M: ["kuu aja", "kuu aega", "üks kuu"],
        MM: [e + " kuu", e + " kuud"],
        y: ["ühe aasta", "aasta", "üks aasta"],
        yy: [e + " aasta", e + " aastat"]
      };
      return t ? r[n][2] ? r[n][2] : r[n][1] : a ? r[n][0] : r[n][1]
    }
    return e.defineLocale("et", {
      months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
      monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
      weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
      weekdaysShort: "P_E_T_K_N_R_L".split("_"),
      weekdaysMin: "P_E_T_K_N_R_L".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[Täna,] LT",
        nextDay: "[Homme,] LT",
        nextWeek: "[Järgmine] dddd LT",
        lastDay: "[Eile,] LT",
        lastWeek: "[Eelmine] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s pärast",
        past: "%s tagasi",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: "%d päeva",
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("eu", {
      months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
      monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
      monthsParseExact: !0,
      weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
      weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
      weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY[ko] MMMM[ren] D[a]",
        LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
        LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
        l: "YYYY-M-D",
        ll: "YYYY[ko] MMM D[a]",
        lll: "YYYY[ko] MMM D[a] HH:mm",
        llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
      },
      calendar: {
        sameDay: "[gaur] LT[etan]",
        nextDay: "[bihar] LT[etan]",
        nextWeek: "dddd LT[etan]",
        lastDay: "[atzo] LT[etan]",
        lastWeek: "[aurreko] dddd LT[etan]",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s barru",
        past: "duela %s",
        s: "segundo batzuk",
        ss: "%d segundo",
        m: "minutu bat",
        mm: "%d minutu",
        h: "ordu bat",
        hh: "%d ordu",
        d: "egun bat",
        dd: "%d egun",
        M: "hilabete bat",
        MM: "%d hilabete",
        y: "urte bat",
        yy: "%d urte"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
        1: "۱",
        2: "۲",
        3: "۳",
        4: "۴",
        5: "۵",
        6: "۶",
        7: "۷",
        8: "۸",
        9: "۹",
        0: "۰"
      },
      n = {
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        "۰": "0"
      };
    return e.defineLocale("fa", {
      months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
      monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
      weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
      weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
      weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      meridiemParse: /قبل از ظهر|بعد از ظهر/,
      isPM: function (e) {
        return /بعد از ظهر/.test(e)
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
      },
      calendar: {
        sameDay: "[امروز ساعت] LT",
        nextDay: "[فردا ساعت] LT",
        nextWeek: "dddd [ساعت] LT",
        lastDay: "[دیروز ساعت] LT",
        lastWeek: "dddd [پیش] [ساعت] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "در %s",
        past: "%s پیش",
        s: "چند ثانیه",
        ss: "ثانیه d%",
        m: "یک دقیقه",
        mm: "%d دقیقه",
        h: "یک ساعت",
        hh: "%d ساعت",
        d: "یک روز",
        dd: "%d روز",
        M: "یک ماه",
        MM: "%d ماه",
        y: "یک سال",
        yy: "%d سال"
      },
      preparse: function (e) {
        return e.replace(/[۰-۹]/g, function (e) {
          return n[e]
        }).replace(/،/g, ",")
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return t[e]
        }).replace(/,/g, "،")
      },
      dayOfMonthOrdinalParse: /\d{1,2}م/,
      ordinal: "%dم",
      week: {
        dow: 6,
        doy: 12
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, a, r) {
      var i = "";
      switch (a) {
        case "s":
          return r ? "muutaman sekunnin" : "muutama sekunti";
        case "ss":
          return r ? "sekunnin" : "sekuntia";
        case "m":
          return r ? "minuutin" : "minuutti";
        case "mm":
          i = r ? "minuutin" : "minuuttia";
          break;
        case "h":
          return r ? "tunnin" : "tunti";
        case "hh":
          i = r ? "tunnin" : "tuntia";
          break;
        case "d":
          return r ? "päivän" : "päivä";
        case "dd":
          i = r ? "päivän" : "päivää";
          break;
        case "M":
          return r ? "kuukauden" : "kuukausi";
        case "MM":
          i = r ? "kuukauden" : "kuukautta";
          break;
        case "y":
          return r ? "vuoden" : "vuosi";
        case "yy":
          i = r ? "vuoden" : "vuotta"
      }
      return i = n(e, r) + " " + i
    }

    function n(e, t) {
      return e < 10 ? t ? r[e] : a[e] : e
    }
    var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
      r = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", a[7], a[8], a[9]];
    return e.defineLocale("fi", {
      months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
      monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
      weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
      weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
      weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD.MM.YYYY",
        LL: "Do MMMM[ta] YYYY",
        LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
        LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
        l: "D.M.YYYY",
        ll: "Do MMM YYYY",
        lll: "Do MMM YYYY, [klo] HH.mm",
        llll: "ddd, Do MMM YYYY, [klo] HH.mm"
      },
      calendar: {
        sameDay: "[tänään] [klo] LT",
        nextDay: "[huomenna] [klo] LT",
        nextWeek: "dddd [klo] LT",
        lastDay: "[eilen] [klo] LT",
        lastWeek: "[viime] dddd[na] [klo] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s päästä",
        past: "%s sitten",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("fo", {
      months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
      monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
      weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
      weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
      weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D. MMMM, YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Í dag kl.] LT",
        nextDay: "[Í morgin kl.] LT",
        nextWeek: "dddd [kl.] LT",
        lastDay: "[Í gjár kl.] LT",
        lastWeek: "[síðstu] dddd [kl] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "um %s",
        past: "%s síðani",
        s: "fá sekund",
        ss: "%d sekundir",
        m: "ein minutt",
        mm: "%d minuttir",
        h: "ein tími",
        hh: "%d tímar",
        d: "ein dagur",
        dd: "%d dagar",
        M: "ein mánaði",
        MM: "%d mánaðir",
        y: "eitt ár",
        yy: "%d ár"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("fr", {
      months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
      monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
      monthsParseExact: !0,
      weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
      weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
      weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Aujourd’hui à] LT",
        nextDay: "[Demain à] LT",
        nextWeek: "dddd [à] LT",
        lastDay: "[Hier à] LT",
        lastWeek: "dddd [dernier à] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dans %s",
        past: "il y a %s",
        s: "quelques secondes",
        ss: "%d secondes",
        m: "une minute",
        mm: "%d minutes",
        h: "une heure",
        hh: "%d heures",
        d: "un jour",
        dd: "%d jours",
        M: "un mois",
        MM: "%d mois",
        y: "un an",
        yy: "%d ans"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
      ordinal: function (e, t) {
        switch (t) {
          case "D":
            return e + (1 === e ? "er" : "");
          default:
          case "M":
          case "Q":
          case "DDD":
          case "d":
            return e + (1 === e ? "er" : "e");
          case "w":
          case "W":
            return e + (1 === e ? "re" : "e")
        }
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("fr-ca", {
      months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
      monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
      monthsParseExact: !0,
      weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
      weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
      weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Aujourd’hui à] LT",
        nextDay: "[Demain à] LT",
        nextWeek: "dddd [à] LT",
        lastDay: "[Hier à] LT",
        lastWeek: "dddd [dernier à] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dans %s",
        past: "il y a %s",
        s: "quelques secondes",
        ss: "%d secondes",
        m: "une minute",
        mm: "%d minutes",
        h: "une heure",
        hh: "%d heures",
        d: "un jour",
        dd: "%d jours",
        M: "un mois",
        MM: "%d mois",
        y: "un an",
        yy: "%d ans"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
      ordinal: function (e, t) {
        switch (t) {
          default:
          case "M":
          case "Q":
          case "D":
          case "DDD":
          case "d":
            return e + (1 === e ? "er" : "e");
          case "w":
          case "W":
            return e + (1 === e ? "re" : "e")
        }
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("fr-ch", {
      months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
      monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
      monthsParseExact: !0,
      weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
      weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
      weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Aujourd’hui à] LT",
        nextDay: "[Demain à] LT",
        nextWeek: "dddd [à] LT",
        lastDay: "[Hier à] LT",
        lastWeek: "dddd [dernier à] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dans %s",
        past: "il y a %s",
        s: "quelques secondes",
        ss: "%d secondes",
        m: "une minute",
        mm: "%d minutes",
        h: "une heure",
        hh: "%d heures",
        d: "un jour",
        dd: "%d jours",
        M: "un mois",
        MM: "%d mois",
        y: "un an",
        yy: "%d ans"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
      ordinal: function (e, t) {
        switch (t) {
          default:
          case "M":
          case "Q":
          case "D":
          case "DDD":
          case "d":
            return e + (1 === e ? "er" : "e");
          case "w":
          case "W":
            return e + (1 === e ? "re" : "e")
        }
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
      n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
    return e.defineLocale("fy", {
      months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
      monthsShort: function (e, a) {
        return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
      },
      monthsParseExact: !0,
      weekdays: "snein_moandei_tiikrcdi_woankrcdi_tongerkrcdi_freed_sneon".split("_"),
      weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
      weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[hjoed om] LT",
        nextDay: "[moarn om] LT",
        nextWeek: "dddd [om] LT",
        lastDay: "[juster om] LT",
        lastWeek: "[ôfrûne] dddd [om] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "oer %s",
        past: "%s lyn",
        s: "in pear sekonden",
        ss: "%d sekonden",
        m: "ien minút",
        mm: "%d minuten",
        h: "ien oere",
        hh: "%d oeren",
        d: "ien dei",
        dd: "%d dagen",
        M: "ien moanne",
        MM: "%d moannen",
        y: "ien jier",
        yy: "%d jierren"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal: function (e) {
        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
      n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
      a = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
      r = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
      i = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
    return e.defineLocale("gd", {
      months: t,
      monthsShort: n,
      monthsParseExact: !0,
      weekdays: a,
      weekdaysShort: r,
      weekdaysMin: i,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[An-diugh aig] LT",
        nextDay: "[A-màireach aig] LT",
        nextWeek: "dddd [aig] LT",
        lastDay: "[An-dè aig] LT",
        lastWeek: "dddd [seo chaidh] [aig] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ann an %s",
        past: "bho chionn %s",
        s: "beagan diogan",
        ss: "%d diogan",
        m: "mionaid",
        mm: "%d mionaidean",
        h: "uair",
        hh: "%d uairean",
        d: "latha",
        dd: "%d latha",
        M: "mìos",
        MM: "%d mìosan",
        y: "bliadhna",
        yy: "%d bliadhna"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
      ordinal: function (e) {
        return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("gl", {
      months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
      monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
      weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
      weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [de] MMMM [de] YYYY",
        LLL: "D [de] MMMM [de] YYYY H:mm",
        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
      },
      calendar: {
        sameDay: function () {
          return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
        },
        nextDay: function () {
          return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
        },
        nextWeek: function () {
          return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
        },
        lastDay: function () {
          return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
        },
        lastWeek: function () {
          return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: function (e) {
          return 0 === e.indexOf("un") ? "n" + e : "en " + e
        },
        past: "hai %s",
        s: "uns segundos",
        ss: "%d segundos",
        m: "un minuto",
        mm: "%d minutos",
        h: "unha hora",
        hh: "%d horas",
        d: "un día",
        dd: "%d días",
        M: "un mes",
        MM: "%d meses",
        y: "un ano",
        yy: "%d anos"
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: "%dº",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n, a) {
      var r = {
        s: ["thodde secondanim", "thodde second"],
        ss: [e + " secondanim", e + " second"],
        m: ["eka mintan", "ek minute"],
        mm: [e + " mintanim", e + " mintam"],
        h: ["eka horan", "ek hor"],
        hh: [e + " horanim", e + " horam"],
        d: ["eka disan", "ek dis"],
        dd: [e + " disanim", e + " dis"],
        M: ["eka mhoinean", "ek mhoino"],
        MM: [e + " mhoineanim", e + " mhoine"],
        y: ["eka vorsan", "ek voros"],
        yy: [e + " vorsanim", e + " vorsam"]
      };
      return t ? r[n][0] : r[n][1]
    }
    return e.defineLocale("gom-latn", {
      months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
      monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
      weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
      weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "A h:mm [vazta]",
        LTS: "A h:mm:ss [vazta]",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY A h:mm [vazta]",
        LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
        llll: "ddd, D MMM YYYY, A h:mm [vazta]"
      },
      calendar: {
        sameDay: "[Aiz] LT",
        nextDay: "[Faleam] LT",
        nextWeek: "[Ieta to] dddd[,] LT",
        lastDay: "[Kal] LT",
        lastWeek: "[Fatlo] dddd[,] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s",
        past: "%s adim",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er)/,
      ordinal: function (e, t) {
        switch (t) {
          case "D":
            return e + "er";
          default:
          case "M":
          case "Q":
          case "DDD":
          case "d":
          case "w":
          case "W":
            return e
        }
      },
      week: {
        dow: 1,
        doy: 4
      },
      meridiemParse: /rati|sokalli|donparam|sanje/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
        1: "૧",
        2: "૨",
        3: "૩",
        4: "૪",
        5: "૫",
        6: "૬",
        7: "૭",
        8: "૮",
        9: "૯",
        0: "૦"
      },
      n = {
        "૧": "1",
        "૨": "2",
        "૩": "3",
        "૪": "4",
        "૫": "5",
        "૬": "6",
        "૭": "7",
        "૮": "8",
        "૯": "9",
        "૦": "0"
      };
    return e.defineLocale("gu", {
      months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
      monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
      monthsParseExact: !0,
      weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
      weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
      weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
      longDateFormat: {
        LT: "A h:mm વાગ્યે",
        LTS: "A h:mm:ss વાગ્યે",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm વાગ્યે",
        LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
      },
      calendar: {
        sameDay: "[આજ] LT",
        nextDay: "[કાલે] LT",
        nextWeek: "dddd, LT",
        lastDay: "[ગઇકાલે] LT",
        lastWeek: "[પાછલા] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s મા",
        past: "%s પેહલા",
        s: "અમુક પળો",
        ss: "%d સેકંડ",
        m: "એક મિનિટ",
        mm: "%d મિનિટ",
        h: "એક કલાક",
        hh: "%d કલાક",
        d: "એક દિવસ",
        dd: "%d દિવસ",
        M: "એક મહિનો",
        MM: "%d મહિનો",
        y: "એક વર્ષ",
        yy: "%d વર્ષ"
      },
      preparse: function (e) {
        return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
          return n[e]
        })
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return t[e]
        })
      },
      meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("he", {
      months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
      monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
      weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
      weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
      weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [ב]MMMM YYYY",
        LLL: "D [ב]MMMM YYYY HH:mm",
        LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
        l: "D/M/YYYY",
        ll: "D MMM YYYY",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd, D MMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[היום ב־]LT",
        nextDay: "[מחר ב־]LT",
        nextWeek: "dddd [בשעה] LT",
        lastDay: "[אתמול ב־]LT",
        lastWeek: "[ביום] dddd [האחרון בשעה] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "בעוד %s",
        past: "לפני %s",
        s: "מספר שניות",
        ss: "%d שניות",
        m: "דקה",
        mm: "%d דקות",
        h: "שעה",
        hh: function (e) {
          return 2 === e ? "שעתיים" : e + " שעות"
        },
        d: "יום",
        dd: function (e) {
          return 2 === e ? "יומיים" : e + " ימים"
        },
        M: "חודש",
        MM: function (e) {
          return 2 === e ? "חודשיים" : e + " חודשים"
        },
        y: "שנה",
        yy: function (e) {
          return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
        }
      },
      meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
      isPM: function (e) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
      },
      meridiem: function (e, t, n) {
        return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
        1: "१",
        2: "२",
        3: "३",
        4: "४",
        5: "५",
        6: "६",
        7: "७",
        8: "८",
        9: "९",
        0: "०"
      },
      n = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
      };
    return e.defineLocale("hi", {
      months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
      monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
      monthsParseExact: !0,
      weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
      weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
      weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
      longDateFormat: {
        LT: "A h:mm बजे",
        LTS: "A h:mm:ss बजे",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm बजे",
        LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
      },
      calendar: {
        sameDay: "[आज] LT",
        nextDay: "[कल] LT",
        nextWeek: "dddd, LT",
        lastDay: "[कल] LT",
        lastWeek: "[पिछले] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s में",
        past: "%s पहले",
        s: "कुछ ही क्षण",
        ss: "%d सेकंड",
        m: "एक मिनट",
        mm: "%d मिनट",
        h: "एक घंटा",
        hh: "%d घंटे",
        d: "एक दिन",
        dd: "%d दिन",
        M: "एक महीने",
        MM: "%d महीने",
        y: "एक वर्ष",
        yy: "%d वर्ष"
      },
      preparse: function (e) {
        return e.replace(/[१२३४५६७८९०]/g, function (e) {
          return n[e]
        })
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return t[e]
        })
      },
      meridiemParse: /रात|सुबह|दोपहर|शाम/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n) {
      var a = e + " ";
      switch (n) {
        case "ss":
          return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
        case "m":
          return t ? "jedna minuta" : "jedne minute";
        case "mm":
          return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
        case "h":
          return t ? "jedan sat" : "jednog sata";
        case "hh":
          return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
        case "dd":
          return a += 1 === e ? "dan" : "dana";
        case "MM":
          return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
        case "yy":
          return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
      }
    }
    return e.defineLocale("hr", {
      months: {
        format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
        standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
      },
      monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[u] [nedjelju] [u] LT";
            case 3:
              return "[u] [srijedu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT"
          }
        },
        lastDay: "[jučer u] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
              return "[prošlu] dddd [u] LT";
            case 6:
              return "[prošle] [subote] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[prošli] dddd [u] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "prije %s",
        s: "par sekundi",
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: "dan",
        dd: t,
        M: "mjesec",
        MM: t,
        y: "godinu",
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n, a) {
      var r = e;
      switch (n) {
        case "s":
          return a || t ? "néhány másodperc" : "néhány másodperce";
        case "ss":
          return r + (a || t) ? " másodperc" : " másodperce";
        case "m":
          return "egy" + (a || t ? " perc" : " perce");
        case "mm":
          return r + (a || t ? " perc" : " perce");
        case "h":
          return "egy" + (a || t ? " óra" : " órája");
        case "hh":
          return r + (a || t ? " óra" : " órája");
        case "d":
          return "egy" + (a || t ? " nap" : " napja");
        case "dd":
          return r + (a || t ? " nap" : " napja");
        case "M":
          return "egy" + (a || t ? " hónap" : " hónapja");
        case "MM":
          return r + (a || t ? " hónap" : " hónapja");
        case "y":
          return "egy" + (a || t ? " év" : " éve");
        case "yy":
          return r + (a || t ? " év" : " éve")
      }
      return ""
    }

    function n(e) {
      return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]"
    }
    var a = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
    return e.defineLocale("hu", {
      months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
      monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
      weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
      weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
      weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "YYYY.MM.DD.",
        LL: "YYYY. MMMM D.",
        LLL: "YYYY. MMMM D. H:mm",
        LLLL: "YYYY. MMMM D., dddd H:mm"
      },
      meridiemParse: /de|du/i,
      isPM: function (e) {
        return "u" === e.charAt(1).toLowerCase()
      },
      meridiem: function (e, t, n) {
        return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
      },
      calendar: {
        sameDay: "[ma] LT[-kor]",
        nextDay: "[holnap] LT[-kor]",
        nextWeek: function () {
          return n.call(this, !0)
        },
        lastDay: "[tegnap] LT[-kor]",
        lastWeek: function () {
          return n.call(this, !1)
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "%s múlva",
        past: "%s",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("hy-am", {
      months: {
        format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
        standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
      },
      monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
      weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
      weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
      weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY թ.",
        LLL: "D MMMM YYYY թ., HH:mm",
        LLLL: "dddd, D MMMM YYYY թ., HH:mm"
      },
      calendar: {
        sameDay: "[այսօր] LT",
        nextDay: "[վաղը] LT",
        lastDay: "[երեկ] LT",
        nextWeek: function () {
          return "dddd [օրը ժամը] LT"
        },
        lastWeek: function () {
          return "[անցած] dddd [օրը ժամը] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "%s հետո",
        past: "%s առաջ",
        s: "մի քանի վայրկյան",
        ss: "%d վայրկյան",
        m: "րոպե",
        mm: "%d րոպե",
        h: "ժամ",
        hh: "%d ժամ",
        d: "օր",
        dd: "%d օր",
        M: "ամիս",
        MM: "%d ամիս",
        y: "տարի",
        yy: "%d տարի"
      },
      meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
      isPM: function (e) {
        return /^(ցերեկվա|երեկոյան)$/.test(e)
      },
      meridiem: function (e) {
        return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
      },
      dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
      ordinal: function (e, t) {
        switch (t) {
          case "DDD":
          case "w":
          case "W":
          case "DDDo":
            return 1 === e ? e + "-ին" : e + "-րդ";
          default:
            return e
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("id", {
      months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
      weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
      weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
      weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [pukul] HH.mm",
        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
      },
      meridiemParse: /pagi|siang|sore|malam/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
      },
      calendar: {
        sameDay: "[Hari ini pukul] LT",
        nextDay: "[Besok pukul] LT",
        nextWeek: "dddd [pukul] LT",
        lastDay: "[Kemarin pukul] LT",
        lastWeek: "dddd [lalu pukul] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dalam %s",
        past: "%s yang lalu",
        s: "beberapa detik",
        ss: "%d detik",
        m: "semenit",
        mm: "%d menit",
        h: "sejam",
        hh: "%d jam",
        d: "sehari",
        dd: "%d hari",
        M: "sebulan",
        MM: "%d bulan",
        y: "setahun",
        yy: "%d tahun"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e) {
      return e % 100 == 11 || e % 10 != 1
    }

    function n(e, n, a, r) {
      var i = e + " ";
      switch (a) {
        case "s":
          return n || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
        case "ss":
          return t(e) ? i + (n || r ? "sekúndur" : "sekúndum") : i + "sekúnda";
        case "m":
          return n ? "mínúta" : "mínútu";
        case "mm":
          return t(e) ? i + (n || r ? "mínútur" : "mínútum") : n ? i + "mínúta" : i + "mínútu";
        case "hh":
          return t(e) ? i + (n || r ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
        case "d":
          return n ? "dagur" : r ? "dag" : "degi";
        case "dd":
          return t(e) ? n ? i + "dagar" : i + (r ? "daga" : "dögum") : n ? i + "dagur" : i + (r ? "dag" : "degi");
        case "M":
          return n ? "mánuður" : r ? "mánuð" : "mánuði";
        case "MM":
          return t(e) ? n ? i + "mánuðir" : i + (r ? "mánuði" : "mánuðum") : n ? i + "mánuður" : i + (r ? "mánuð" : "mánuði");
        case "y":
          return n || r ? "ár" : "ári";
        case "yy":
          return t(e) ? i + (n || r ? "ár" : "árum") : i + (n || r ? "ár" : "ári")
      }
    }
    return e.defineLocale("is", {
      months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
      monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
      weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
      weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
      weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY [kl.] H:mm",
        LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
      },
      calendar: {
        sameDay: "[í dag kl.] LT",
        nextDay: "[á morgun kl.] LT",
        nextWeek: "dddd [kl.] LT",
        lastDay: "[í gær kl.] LT",
        lastWeek: "[síðasta] dddd [kl.] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "eftir %s",
        past: "fyrir %s síðan",
        s: n,
        ss: n,
        m: n,
        mm: n,
        h: "klukkustund",
        hh: n,
        d: n,
        dd: n,
        M: n,
        MM: n,
        y: n,
        yy: n
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("it", {
      months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
      monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
      weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
      weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
      weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Oggi alle] LT",
        nextDay: "[Domani alle] LT",
        nextWeek: "dddd [alle] LT",
        lastDay: "[Ieri alle] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[la scorsa] dddd [alle] LT";
            default:
              return "[lo scorso] dddd [alle] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: function (e) {
          return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
        },
        past: "%s fa",
        s: "alcuni secondi",
        ss: "%d secondi",
        m: "un minuto",
        mm: "%d minuti",
        h: "un'ora",
        hh: "%d ore",
        d: "un giorno",
        dd: "%d giorni",
        M: "un mese",
        MM: "%d mesi",
        y: "un anno",
        yy: "%d anni"
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: "%dº",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ja", {
      months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
      weekdaysShort: "日_月_火_水_木_金_土".split("_"),
      weekdaysMin: "日_月_火_水_木_金_土".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY年M月D日",
        LLL: "YYYY年M月D日 HH:mm",
        LLLL: "YYYY年M月D日 dddd HH:mm",
        l: "YYYY/MM/DD",
        ll: "YYYY年M月D日",
        lll: "YYYY年M月D日 HH:mm",
        llll: "YYYY年M月D日(ddd) HH:mm"
      },
      meridiemParse: /午前|午後/i,
      isPM: function (e) {
        return "午後" === e
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "午前" : "午後"
      },
      calendar: {
        sameDay: "[今日] LT",
        nextDay: "[明日] LT",
        nextWeek: function (e) {
          return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
        },
        lastDay: "[昨日] LT",
        lastWeek: function (e) {
          return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT"
        },
        sameElse: "L"
      },
      dayOfMonthOrdinalParse: /\d{1,2}日/,
      ordinal: function (e, t) {
        switch (t) {
          case "d":
          case "D":
          case "DDD":
            return e + "日";
          default:
            return e
        }
      },
      relativeTime: {
        future: "%s後",
        past: "%s前",
        s: "数秒",
        ss: "%d秒",
        m: "1分",
        mm: "%d分",
        h: "1時間",
        hh: "%d時間",
        d: "1日",
        dd: "%d日",
        M: "1ヶ月",
        MM: "%dヶ月",
        y: "1年",
        yy: "%d年"
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("jv", {
      months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
      weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
      weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
      weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [pukul] HH.mm",
        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
      },
      meridiemParse: /enjing|siyang|sonten|ndalu/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
      },
      calendar: {
        sameDay: "[Dinten puniko pukul] LT",
        nextDay: "[Mbenjang pukul] LT",
        nextWeek: "dddd [pukul] LT",
        lastDay: "[Kala wingi pukul] LT",
        lastWeek: "dddd [kepengker pukul] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "wonten ing %s",
        past: "%s ingkang kepengker",
        s: "sawetawis detik",
        ss: "%d detik",
        m: "setunggal menit",
        mm: "%d menit",
        h: "setunggal jam",
        hh: "%d jam",
        d: "sedinten",
        dd: "%d dinten",
        M: "sewulan",
        MM: "%d wulan",
        y: "setaun",
        yy: "%d taun"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ka", {
      months: {
        standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
        format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
      },
      monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
      weekdays: {
        standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
        format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
        isFormat: /(წინა|შემდეგ)/
      },
      weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
      weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendar: {
        sameDay: "[დღეს] LT[-ზე]",
        nextDay: "[ხვალ] LT[-ზე]",
        lastDay: "[გუშინ] LT[-ზე]",
        nextWeek: "[შემდეგ] dddd LT[-ზე]",
        lastWeek: "[წინა] dddd LT-ზე",
        sameElse: "L"
      },
      relativeTime: {
        future: function (e) {
          return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
        },
        past: function (e) {
          return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
        },
        s: "რამდენიმე წამი",
        ss: "%d წამი",
        m: "წუთი",
        mm: "%d წუთი",
        h: "საათი",
        hh: "%d საათი",
        d: "დღე",
        dd: "%d დღე",
        M: "თვე",
        MM: "%d თვე",
        y: "წელი",
        yy: "%d წელი"
      },
      dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
      ordinal: function (e) {
        return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
      0: "-ші",
      1: "-ші",
      2: "-ші",
      3: "-ші",
      4: "-ші",
      5: "-ші",
      6: "-шы",
      7: "-ші",
      8: "-ші",
      9: "-шы",
      10: "-шы",
      20: "-шы",
      30: "-шы",
      40: "-шы",
      50: "-ші",
      60: "-шы",
      70: "-ші",
      80: "-ші",
      90: "-шы",
      100: "-ші"
    };
    return e.defineLocale("kk", {
      months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
      monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
      weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
      weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
      weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Бүгін сағат] LT",
        nextDay: "[Ертең сағат] LT",
        nextWeek: "dddd [сағат] LT",
        lastDay: "[Кеше сағат] LT",
        lastWeek: "[Өткен аптаның] dddd [сағат] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s ішінде",
        past: "%s бұрын",
        s: "бірнеше секунд",
        ss: "%d секунд",
        m: "бір минут",
        mm: "%d минут",
        h: "бір сағат",
        hh: "%d сағат",
        d: "бір күн",
        dd: "%d күн",
        M: "бір ай",
        MM: "%d ай",
        y: "бір жыл",
        yy: "%d жыл"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
      ordinal: function (e) {
        var n = e % 10,
          a = e >= 100 ? 100 : null;
        return e + (t[e] || t[n] || t[a])
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
        1: "១",
        2: "២",
        3: "៣",
        4: "៤",
        5: "៥",
        6: "៦",
        7: "៧",
        8: "៨",
        9: "៩",
        0: "០"
      },
      n = {
        "១": "1",
        "២": "2",
        "៣": "3",
        "៤": "4",
        "៥": "5",
        "៦": "6",
        "៧": "7",
        "៨": "8",
        "៩": "9",
        "០": "0"
      };
    return e.defineLocale("km", {
      months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
      monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
      weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
      weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
      weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      meridiemParse: /ព្រឹក|ល្ងាច/,
      isPM: function (e) {
        return "ល្ងាច" === e
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "ព្រឹក" : "ល្ងាច"
      },
      calendar: {
        sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
        nextDay: "[ស្អែក ម៉ោង] LT",
        nextWeek: "dddd [ម៉ោង] LT",
        lastDay: "[ម្សិលមិញ ម៉ោង] LT",
        lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%sទៀត",
        past: "%sមុន",
        s: "ប៉ុន្មានវិនាទី",
        ss: "%d វិនាទី",
        m: "មួយនាទី",
        mm: "%d នាទី",
        h: "មួយម៉ោង",
        hh: "%d ម៉ោង",
        d: "មួយថ្ងៃ",
        dd: "%d ថ្ងៃ",
        M: "មួយខែ",
        MM: "%d ខែ",
        y: "មួយឆ្នាំ",
        yy: "%d ឆ្នាំ"
      },
      dayOfMonthOrdinalParse: /ទី\d{1,2}/,
      ordinal: "ទី%d",
      preparse: function (e) {
        return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
          return n[e]
        })
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return t[e]
        })
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
        1: "೧",
        2: "೨",
        3: "೩",
        4: "೪",
        5: "೫",
        6: "೬",
        7: "೭",
        8: "೮",
        9: "೯",
        0: "೦"
      },
      n = {
        "೧": "1",
        "೨": "2",
        "೩": "3",
        "೪": "4",
        "೫": "5",
        "೬": "6",
        "೭": "7",
        "೮": "8",
        "೯": "9",
        "೦": "0"
      };
    return e.defineLocale("kn", {
      months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
      monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
      monthsParseExact: !0,
      weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
      weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
      weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
      longDateFormat: {
        LT: "A h:mm",
        LTS: "A h:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm",
        LLLL: "dddd, D MMMM YYYY, A h:mm"
      },
      calendar: {
        sameDay: "[ಇಂದು] LT",
        nextDay: "[ನಾಳೆ] LT",
        nextWeek: "dddd, LT",
        lastDay: "[ನಿನ್ನೆ] LT",
        lastWeek: "[ಕೊನೆಯ] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s ನಂತರ",
        past: "%s ಹಿಂದೆ",
        s: "ಕೆಲವು ಕ್ಷಣಗಳು",
        ss: "%d ಸೆಕೆಂಡುಗಳು",
        m: "ಒಂದು ನಿಮಿಷ",
        mm: "%d ನಿಮಿಷ",
        h: "ಒಂದು ಗಂಟೆ",
        hh: "%d ಗಂಟೆ",
        d: "ಒಂದು ದಿನ",
        dd: "%d ದಿನ",
        M: "ಒಂದು ತಿಂಗಳು",
        MM: "%d ತಿಂಗಳು",
        y: "ಒಂದು ವರ್ಷ",
        yy: "%d ವರ್ಷ"
      },
      preparse: function (e) {
        return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
          return n[e]
        })
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return t[e]
        })
      },
      meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
      ordinal: function (e) {
        return e + "ನೇ"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ko", {
      months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
      monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
      weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
      weekdaysShort: "일_월_화_수_목_금_토".split("_"),
      weekdaysMin: "일_월_화_수_목_금_토".split("_"),
      longDateFormat: {
        LT: "A h:mm",
        LTS: "A h:mm:ss",
        L: "YYYY.MM.DD.",
        LL: "YYYY년 MMMM D일",
        LLL: "YYYY년 MMMM D일 A h:mm",
        LLLL: "YYYY년 MMMM D일 dddd A h:mm",
        l: "YYYY.MM.DD.",
        ll: "YYYY년 MMMM D일",
        lll: "YYYY년 MMMM D일 A h:mm",
        llll: "YYYY년 MMMM D일 dddd A h:mm"
      },
      calendar: {
        sameDay: "오늘 LT",
        nextDay: "내일 LT",
        nextWeek: "dddd LT",
        lastDay: "어제 LT",
        lastWeek: "지난주 dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s 후",
        past: "%s 전",
        s: "몇 초",
        ss: "%d초",
        m: "1분",
        mm: "%d분",
        h: "한 시간",
        hh: "%d시간",
        d: "하루",
        dd: "%d일",
        M: "한 달",
        MM: "%d달",
        y: "일 년",
        yy: "%d년"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
      ordinal: function (e, t) {
        switch (t) {
          case "d":
          case "D":
          case "DDD":
            return e + "일";
          case "M":
            return e + "월";
          case "w":
          case "W":
            return e + "주";
          default:
            return e
        }
      },
      meridiemParse: /오전|오후/,
      isPM: function (e) {
        return "오후" === e
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "오전" : "오후"
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
      0: "-чү",
      1: "-чи",
      2: "-чи",
      3: "-чү",
      4: "-чү",
      5: "-чи",
      6: "-чы",
      7: "-чи",
      8: "-чи",
      9: "-чу",
      10: "-чу",
      20: "-чы",
      30: "-чу",
      40: "-чы",
      50: "-чү",
      60: "-чы",
      70: "-чи",
      80: "-чи",
      90: "-чу",
      100: "-чү"
    };
    return e.defineLocale("ky", {
      months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
      monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
      weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
      weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
      weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Бүгүн саат] LT",
        nextDay: "[Эртең саат] LT",
        nextWeek: "dddd [саат] LT",
        lastDay: "[Кече саат] LT",
        lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s ичинде",
        past: "%s мурун",
        s: "бирнече секунд",
        ss: "%d секунд",
        m: "бир мүнөт",
        mm: "%d мүнөт",
        h: "бир саат",
        hh: "%d саат",
        d: "бир күн",
        dd: "%d күн",
        M: "бир ай",
        MM: "%d ай",
        y: "бир жыл",
        yy: "%d жыл"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
      ordinal: function (e) {
        var n = e % 10,
          a = e >= 100 ? 100 : null;
        return e + (t[e] || t[n] || t[a])
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n, a) {
      var r = {
        m: ["eng Minutt", "enger Minutt"],
        h: ["eng Stonn", "enger Stonn"],
        d: ["een Dag", "engem Dag"],
        M: ["ee Mount", "engem Mount"],
        y: ["ee Joer", "engem Joer"]
      };
      return t ? r[n][0] : r[n][1]
    }

    function n(e) {
      return r(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
    }

    function a(e) {
      return r(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
    }

    function r(e) {
      if (e = parseInt(e, 10), isNaN(e)) return !1;
      if (e < 0) return !0;
      if (e < 10) return 4 <= e && e <= 7;
      if (e < 100) {
        var t = e % 10,
          n = e / 10;
        return r(0 === t ? n : t)
      }
      if (e < 1e4) {
        for (; e >= 10;) e /= 10;
        return r(e)
      }
      return e /= 1e3, r(e)
    }
    return e.defineLocale("lb", {
      months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
      weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm [Auer]",
        LTS: "H:mm:ss [Auer]",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm [Auer]",
        LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
      },
      calendar: {
        sameDay: "[Haut um] LT",
        sameElse: "L",
        nextDay: "[Muer um] LT",
        nextWeek: "dddd [um] LT",
        lastDay: "[Gëschter um] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 2:
            case 4:
              return "[Leschten] dddd [um] LT";
            default:
              return "[Leschte] dddd [um] LT"
          }
        }
      },
      relativeTime: {
        future: n,
        past: a,
        s: "e puer Sekonnen",
        ss: "%d Sekonnen",
        m: t,
        mm: "%d Minutten",
        h: t,
        hh: "%d Stonnen",
        d: t,
        dd: "%d Deeg",
        M: t,
        MM: "%d Méint",
        y: t,
        yy: "%d Joer"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("lo", {
      months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
      monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
      weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
      weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
      weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "ວັນdddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
      isPM: function (e) {
        return "ຕອນແລງ" === e
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
      },
      calendar: {
        sameDay: "[ມື້ນີ້ເວລາ] LT",
        nextDay: "[ມື້ອື່ນເວລາ] LT",
        nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
        lastDay: "[ມື້ວານນີ້ເວລາ] LT",
        lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ອີກ %s",
        past: "%sຜ່ານມາ",
        s: "ບໍ່ເທົ່າໃດວິນາທີ",
        ss: "%d ວິນາທີ",
        m: "1 ນາທີ",
        mm: "%d ນາທີ",
        h: "1 ຊົ່ວໂມງ",
        hh: "%d ຊົ່ວໂມງ",
        d: "1 ມື້",
        dd: "%d ມື້",
        M: "1 ເດືອນ",
        MM: "%d ເດືອນ",
        y: "1 ປີ",
        yy: "%d ປີ"
      },
      dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
      ordinal: function (e) {
        return "ທີ່" + e
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n, a) {
      return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes"
    }

    function n(e, t, n, a) {
      return t ? r(n)[0] : a ? r(n)[1] : r(n)[2]
    }

    function a(e) {
      return e % 10 == 0 || e > 10 && e < 20
    }

    function r(e) {
      return o[e].split("_")
    }

    function i(e, t, i, o) {
      var s = e + " ";
      return 1 === e ? s + n(e, t, i[0], o) : t ? s + (a(e) ? r(i)[1] : r(i)[0]) : o ? s + r(i)[1] : s + (a(e) ? r(i)[1] : r(i)[2])
    }
    var o = {
      ss: "sekundė_sekundžių_sekundes",
      m: "minutė_minutės_minutę",
      mm: "minutės_minučių_minutes",
      h: "valanda_valandos_valandą",
      hh: "valandos_valandų_valandas",
      d: "diena_dienos_dieną",
      dd: "dienos_dienų_dienas",
      M: "mėnuo_mėnesio_mėnesį",
      MM: "mėnesiai_mėnesių_mėnesius",
      y: "metai_metų_metus",
      yy: "metai_metų_metus"
    };
    return e.defineLocale("lt", {
      months: {
        format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
        standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
      },
      monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
      weekdays: {
        format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
        standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
        isFormat: /dddd HH:mm/
      },
      weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
      weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY [m.] MMMM D [d.]",
        LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
        LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
        l: "YYYY-MM-DD",
        ll: "YYYY [m.] MMMM D [d.]",
        lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
        llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
      },
      calendar: {
        sameDay: "[Šiandien] LT",
        nextDay: "[Rytoj] LT",
        nextWeek: "dddd LT",
        lastDay: "[Vakar] LT",
        lastWeek: "[Praėjusį] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "po %s",
        past: "prieš %s",
        s: t,
        ss: i,
        m: n,
        mm: i,
        h: n,
        hh: i,
        d: n,
        dd: i,
        M: n,
        MM: i,
        y: n,
        yy: i
      },
      dayOfMonthOrdinalParse: /\d{1,2}-oji/,
      ordinal: function (e) {
        return e + "-oji"
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n) {
      return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
    }

    function n(e, n, a) {
      return e + " " + t(i[a], e, n)
    }

    function a(e, n, a) {
      return t(i[a], e, n)
    }

    function r(e, t) {
      return t ? "dažas sekundes" : "dažām sekundēm"
    }
    var i = {
      ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
      m: "minūtes_minūtēm_minūte_minūtes".split("_"),
      mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
      h: "stundas_stundām_stunda_stundas".split("_"),
      hh: "stundas_stundām_stunda_stundas".split("_"),
      d: "dienas_dienām_diena_dienas".split("_"),
      dd: "dienas_dienām_diena_dienas".split("_"),
      M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
      MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
      y: "gada_gadiem_gads_gadi".split("_"),
      yy: "gada_gadiem_gads_gadi".split("_")
    };
    return e.defineLocale("lv", {
      months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
      monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
      weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
      weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
      weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY.",
        LL: "YYYY. [gada] D. MMMM",
        LLL: "YYYY. [gada] D. MMMM, HH:mm",
        LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
      },
      calendar: {
        sameDay: "[Šodien pulksten] LT",
        nextDay: "[Rīt pulksten] LT",
        nextWeek: "dddd [pulksten] LT",
        lastDay: "[Vakar pulksten] LT",
        lastWeek: "[Pagājušā] dddd [pulksten] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "pēc %s",
        past: "pirms %s",
        s: r,
        ss: n,
        m: a,
        mm: n,
        h: a,
        hh: n,
        d: a,
        dd: n,
        M: a,
        MM: n,
        y: a,
        yy: n
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
      words: {
        ss: ["sekund", "sekunda", "sekundi"],
        m: ["jedan minut", "jednog minuta"],
        mm: ["minut", "minuta", "minuta"],
        h: ["jedan sat", "jednog sata"],
        hh: ["sat", "sata", "sati"],
        dd: ["dan", "dana", "dana"],
        MM: ["mjesec", "mjeseca", "mjeseci"],
        yy: ["godina", "godine", "godina"]
      },
      correctGrammaticalCase: function (e, t) {
        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
      },
      translate: function (e, n, a) {
        var r = t.words[a];
        return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
      }
    };
    return e.defineLocale("me", {
      months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
      monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sjutra u] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[u] [nedjelju] [u] LT";
            case 3:
              return "[u] [srijedu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT"
          }
        },
        lastDay: "[juče u] LT",
        lastWeek: function () {
          return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "prije %s",
        s: "nekoliko sekundi",
        ss: t.translate,
        m: t.translate,
        mm: t.translate,
        h: t.translate,
        hh: t.translate,
        d: "dan",
        dd: t.translate,
        M: "mjesec",
        MM: t.translate,
        y: "godinu",
        yy: t.translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("mi", {
      months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
      monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
      monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
      monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
      monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
      monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
      weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
      weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
      weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [i] HH:mm",
        LLLL: "dddd, D MMMM YYYY [i] HH:mm"
      },
      calendar: {
        sameDay: "[i teie mahana, i] LT",
        nextDay: "[apopo i] LT",
        nextWeek: "dddd [i] LT",
        lastDay: "[inanahi i] LT",
        lastWeek: "dddd [whakamutunga i] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "i roto i %s",
        past: "%s i mua",
        s: "te hēkona ruarua",
        ss: "%d hēkona",
        m: "he meneti",
        mm: "%d meneti",
        h: "te haora",
        hh: "%d haora",
        d: "he ra",
        dd: "%d ra",
        M: "he marama",
        MM: "%d marama",
        y: "he tau",
        yy: "%d tau"
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: "%dº",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("mk", {
      months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
      monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
      weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
      weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
      weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY H:mm",
        LLLL: "dddd, D MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[Денес во] LT",
        nextDay: "[Утре во] LT",
        nextWeek: "[Во] dddd [во] LT",
        lastDay: "[Вчера во] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
            case 6:
              return "[Изминатата] dddd [во] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[Изминатиот] dddd [во] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "после %s",
        past: "пред %s",
        s: "неколку секунди",
        ss: "%d секунди",
        m: "минута",
        mm: "%d минути",
        h: "час",
        hh: "%d часа",
        d: "ден",
        dd: "%d дена",
        M: "месец",
        MM: "%d месеци",
        y: "година",
        yy: "%d години"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
      ordinal: function (e) {
        var t = e % 10,
          n = e % 100;
        return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ml", {
      months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
      monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
      monthsParseExact: !0,
      weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
      weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
      weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
      longDateFormat: {
        LT: "A h:mm -നു",
        LTS: "A h:mm:ss -നു",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm -നു",
        LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
      },
      calendar: {
        sameDay: "[ഇന്ന്] LT",
        nextDay: "[നാളെ] LT",
        nextWeek: "dddd, LT",
        lastDay: "[ഇന്നലെ] LT",
        lastWeek: "[കഴിഞ്ഞ] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s കഴിഞ്ഞ്",
        past: "%s മുൻപ്",
        s: "അൽപ നിമിഷങ്ങൾ",
        ss: "%d സെക്കൻഡ്",
        m: "ഒരു മിനിറ്റ്",
        mm: "%d മിനിറ്റ്",
        h: "ഒരു മണിക്കൂർ",
        hh: "%d മണിക്കൂർ",
        d: "ഒരു ദിവസം",
        dd: "%d ദിവസം",
        M: "ഒരു മാസം",
        MM: "%d മാസം",
        y: "ഒരു വർഷം",
        yy: "%d വർഷം"
      },
      meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n, a) {
      switch (n) {
        case "s":
          return t ? "хэдхэн секунд" : "хэдхэн секундын";
        case "ss":
          return e + (t ? " секунд" : " секундын");
        case "m":
        case "mm":
          return e + (t ? " минут" : " минутын");
        case "h":
        case "hh":
          return e + (t ? " цаг" : " цагийн");
        case "d":
        case "dd":
          return e + (t ? " өдөр" : " өдрийн");
        case "M":
        case "MM":
          return e + (t ? " сар" : " сарын");
        case "y":
        case "yy":
          return e + (t ? " жил" : " жилийн");
        default:
          return e
      }
    }
    return e.defineLocale("mn", {
      months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
      monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
      monthsParseExact: !0,
      weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
      weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
      weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY оны MMMMын D",
        LLL: "YYYY оны MMMMын D HH:mm",
        LLLL: "dddd, YYYY оны MMMMын D HH:mm"
      },
      meridiemParse: /ҮӨ|ҮХ/i,
      isPM: function (e) {
        return "ҮХ" === e
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "ҮӨ" : "ҮХ"
      },
      calendar: {
        sameDay: "[Өнөөдөр] LT",
        nextDay: "[Маргааш] LT",
        nextWeek: "[Ирэх] dddd LT",
        lastDay: "[Өчигдөр] LT",
        lastWeek: "[Өнгөрсөн] dddd LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s дараа",
        past: "%s өмнө",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
      ordinal: function (e, t) {
        switch (t) {
          case "d":
          case "D":
          case "DDD":
            return e + " өдөр";
          default:
            return e
        }
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n, a) {
      var r = "";
      if (t) switch (n) {
        case "s":
          r = "काही सेकंद";
          break;
        case "ss":
          r = "%d सेकंद";
          break;
        case "m":
          r = "एक मिनिट";
          break;
        case "mm":
          r = "%d मिनिटे";
          break;
        case "h":
          r = "एक तास";
          break;
        case "hh":
          r = "%d तास";
          break;
        case "d":
          r = "एक दिवस";
          break;
        case "dd":
          r = "%d दिवस";
          break;
        case "M":
          r = "एक महिना";
          break;
        case "MM":
          r = "%d महिने";
          break;
        case "y":
          r = "एक वर्ष";
          break;
        case "yy":
          r = "%d वर्षे"
      } else switch (n) {
        case "s":
          r = "काही सेकंदां";
          break;
        case "ss":
          r = "%d सेकंदां";
          break;
        case "m":
          r = "एका मिनिटा";
          break;
        case "mm":
          r = "%d मिनिटां";
          break;
        case "h":
          r = "एका तासा";
          break;
        case "hh":
          r = "%d तासां";
          break;
        case "d":
          r = "एका दिवसा";
          break;
        case "dd":
          r = "%d दिवसां";
          break;
        case "M":
          r = "एका महिन्या";
          break;
        case "MM":
          r = "%d महिन्यां";
          break;
        case "y":
          r = "एका वर्षा";
          break;
        case "yy":
          r = "%d वर्षां"
      }
      return r.replace(/%d/i, e)
    }
    var n = {
        1: "१",
        2: "२",
        3: "३",
        4: "४",
        5: "५",
        6: "६",
        7: "७",
        8: "८",
        9: "९",
        0: "०"
      },
      a = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
      };
    return e.defineLocale("mr", {
      months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
      monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
      monthsParseExact: !0,
      weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
      weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
      weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
      longDateFormat: {
        LT: "A h:mm वाजता",
        LTS: "A h:mm:ss वाजता",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm वाजता",
        LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
      },
      calendar: {
        sameDay: "[आज] LT",
        nextDay: "[उद्या] LT",
        nextWeek: "dddd, LT",
        lastDay: "[काल] LT",
        lastWeek: "[मागील] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%sमध्ये",
        past: "%sपूर्वी",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      preparse: function (e) {
        return e.replace(/[१२३४५६७८९०]/g, function (e) {
          return a[e]
        })
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return n[e]
        })
      },
      meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ms", {
      months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
      monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
      weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
      weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
      weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [pukul] HH.mm",
        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
      },
      meridiemParse: /pagi|tengahari|petang|malam/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
      },
      calendar: {
        sameDay: "[Hari ini pukul] LT",
        nextDay: "[Esok pukul] LT",
        nextWeek: "dddd [pukul] LT",
        lastDay: "[Kelmarin pukul] LT",
        lastWeek: "dddd [lepas pukul] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dalam %s",
        past: "%s yang lepas",
        s: "beberapa saat",
        ss: "%d saat",
        m: "seminit",
        mm: "%d minit",
        h: "sejam",
        hh: "%d jam",
        d: "sehari",
        dd: "%d hari",
        M: "sebulan",
        MM: "%d bulan",
        y: "setahun",
        yy: "%d tahun"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ms-my", {
      months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
      monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
      weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
      weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
      weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [pukul] HH.mm",
        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
      },
      meridiemParse: /pagi|tengahari|petang|malam/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
      },
      calendar: {
        sameDay: "[Hari ini pukul] LT",
        nextDay: "[Esok pukul] LT",
        nextWeek: "dddd [pukul] LT",
        lastDay: "[Kelmarin pukul] LT",
        lastWeek: "dddd [lepas pukul] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dalam %s",
        past: "%s yang lepas",
        s: "beberapa saat",
        ss: "%d saat",
        m: "seminit",
        mm: "%d minit",
        h: "sejam",
        hh: "%d jam",
        d: "sehari",
        dd: "%d hari",
        M: "sebulan",
        MM: "%d bulan",
        y: "setahun",
        yy: "%d tahun"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("mt", {
      months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
      monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
      weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
      weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
      weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Illum fil-]LT",
        nextDay: "[Għada fil-]LT",
        nextWeek: "dddd [fil-]LT",
        lastDay: "[Il-bieraħ fil-]LT",
        lastWeek: "dddd [li għadda] [fil-]LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "f’ %s",
        past: "%s ilu",
        s: "ftit sekondi",
        ss: "%d sekondi",
        m: "minuta",
        mm: "%d minuti",
        h: "siegħa",
        hh: "%d siegħat",
        d: "ġurnata",
        dd: "%d ġranet",
        M: "xahar",
        MM: "%d xhur",
        y: "sena",
        yy: "%d sni"
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: "%dº",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
        1: "၁",
        2: "၂",
        3: "၃",
        4: "၄",
        5: "၅",
        6: "၆",
        7: "၇",
        8: "၈",
        9: "၉",
        0: "၀"
      },
      n = {
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        "၀": "0"
      };
    return e.defineLocale("my", {
      months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
      monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
      weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
      weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
      weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[ယနေ.] LT [မှာ]",
        nextDay: "[မနက်ဖြန်] LT [မှာ]",
        nextWeek: "dddd LT [မှာ]",
        lastDay: "[မနေ.က] LT [မှာ]",
        lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
        sameElse: "L"
      },
      relativeTime: {
        future: "လာမည့် %s မှာ",
        past: "လွန်ခဲ့သော %s က",
        s: "စက္ကန်.အနည်းငယ်",
        ss: "%d စက္ကန့်",
        m: "တစ်မိနစ်",
        mm: "%d မိနစ်",
        h: "တစ်နာရီ",
        hh: "%d နာရီ",
        d: "တစ်ရက်",
        dd: "%d ရက်",
        M: "တစ်လ",
        MM: "%d လ",
        y: "တစ်နှစ်",
        yy: "%d နှစ်"
      },
      preparse: function (e) {
        return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
          return n[e]
        })
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return t[e]
        })
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("nb", {
      months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
      monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
      monthsParseExact: !0,
      weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
      weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
      weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY [kl.] HH:mm",
        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
      },
      calendar: {
        sameDay: "[i dag kl.] LT",
        nextDay: "[i morgen kl.] LT",
        nextWeek: "dddd [kl.] LT",
        lastDay: "[i går kl.] LT",
        lastWeek: "[forrige] dddd [kl.] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "om %s",
        past: "%s siden",
        s: "noen sekunder",
        ss: "%d sekunder",
        m: "ett minutt",
        mm: "%d minutter",
        h: "en time",
        hh: "%d timer",
        d: "en dag",
        dd: "%d dager",
        M: "en måned",
        MM: "%d måneder",
        y: "ett år",
        yy: "%d år"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
        1: "१",
        2: "२",
        3: "३",
        4: "४",
        5: "५",
        6: "६",
        7: "७",
        8: "८",
        9: "९",
        0: "०"
      },
      n = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
      };
    return e.defineLocale("ne", {
      months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
      monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
      monthsParseExact: !0,
      weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
      weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
      weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "Aको h:mm बजे",
        LTS: "Aको h:mm:ss बजे",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, Aको h:mm बजे",
        LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
      },
      preparse: function (e) {
        return e.replace(/[१२३४५६७८९०]/g, function (e) {
          return n[e]
        })
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return t[e]
        })
      },
      meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
      },
      calendar: {
        sameDay: "[आज] LT",
        nextDay: "[भोलि] LT",
        nextWeek: "[आउँदो] dddd[,] LT",
        lastDay: "[हिजो] LT",
        lastWeek: "[गएको] dddd[,] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%sमा",
        past: "%s अगाडि",
        s: "केही क्षण",
        ss: "%d सेकेण्ड",
        m: "एक मिनेट",
        mm: "%d मिनेट",
        h: "एक घण्टा",
        hh: "%d घण्टा",
        d: "एक दिन",
        dd: "%d दिन",
        M: "एक महिना",
        MM: "%d महिना",
        y: "एक बर्ष",
        yy: "%d बर्ष"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
      n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    return e.defineLocale("nl", {
      months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
      monthsShort: function (e, a) {
        return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
      },
      monthsRegex: r,
      monthsShortRegex: r,
      monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
      monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
      monthsParse: a,
      longMonthsParse: a,
      shortMonthsParse: a,
      weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
      weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
      weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[vandaag om] LT",
        nextDay: "[morgen om] LT",
        nextWeek: "dddd [om] LT",
        lastDay: "[gisteren om] LT",
        lastWeek: "[afgelopen] dddd [om] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "over %s",
        past: "%s geleden",
        s: "een paar seconden",
        ss: "%d seconden",
        m: "één minuut",
        mm: "%d minuten",
        h: "één uur",
        hh: "%d uur",
        d: "één dag",
        dd: "%d dagen",
        M: "één maand",
        MM: "%d maanden",
        y: "één jaar",
        yy: "%d jaar"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal: function (e) {
        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
      n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    return e.defineLocale("nl-be", {
      months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
      monthsShort: function (e, a) {
        return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
      },
      monthsRegex: r,
      monthsShortRegex: r,
      monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
      monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
      monthsParse: a,
      longMonthsParse: a,
      shortMonthsParse: a,
      weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
      weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
      weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[vandaag om] LT",
        nextDay: "[morgen om] LT",
        nextWeek: "dddd [om] LT",
        lastDay: "[gisteren om] LT",
        lastWeek: "[afgelopen] dddd [om] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "over %s",
        past: "%s geleden",
        s: "een paar seconden",
        ss: "%d seconden",
        m: "één minuut",
        mm: "%d minuten",
        h: "één uur",
        hh: "%d uur",
        d: "één dag",
        dd: "%d dagen",
        M: "één maand",
        MM: "%d maanden",
        y: "één jaar",
        yy: "%d jaar"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal: function (e) {
        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("nn", {
      months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
      monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
      weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
      weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
      weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY [kl.] H:mm",
        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
      },
      calendar: {
        sameDay: "[I dag klokka] LT",
        nextDay: "[I morgon klokka] LT",
        nextWeek: "dddd [klokka] LT",
        lastDay: "[I går klokka] LT",
        lastWeek: "[Føregåande] dddd [klokka] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "om %s",
        past: "%s sidan",
        s: "nokre sekund",
        ss: "%d sekund",
        m: "eit minutt",
        mm: "%d minutt",
        h: "ein time",
        hh: "%d timar",
        d: "ein dag",
        dd: "%d dagar",
        M: "ein månad",
        MM: "%d månader",
        y: "eit år",
        yy: "%d år"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
        1: "੧",
        2: "੨",
        3: "੩",
        4: "੪",
        5: "੫",
        6: "੬",
        7: "੭",
        8: "੮",
        9: "੯",
        0: "੦"
      },
      n = {
        "੧": "1",
        "੨": "2",
        "੩": "3",
        "੪": "4",
        "੫": "5",
        "੬": "6",
        "੭": "7",
        "੮": "8",
        "੯": "9",
        "੦": "0"
      };
    return e.defineLocale("pa-in", {
      months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
      monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
      weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
      weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
      weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
      longDateFormat: {
        LT: "A h:mm ਵਜੇ",
        LTS: "A h:mm:ss ਵਜੇ",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
        LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
      },
      calendar: {
        sameDay: "[ਅਜ] LT",
        nextDay: "[ਕਲ] LT",
        nextWeek: "[ਅਗਲਾ] dddd, LT",
        lastDay: "[ਕਲ] LT",
        lastWeek: "[ਪਿਛਲੇ] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s ਵਿੱਚ",
        past: "%s ਪਿਛਲੇ",
        s: "ਕੁਝ ਸਕਿੰਟ",
        ss: "%d ਸਕਿੰਟ",
        m: "ਇਕ ਮਿੰਟ",
        mm: "%d ਮਿੰਟ",
        h: "ਇੱਕ ਘੰਟਾ",
        hh: "%d ਘੰਟੇ",
        d: "ਇੱਕ ਦਿਨ",
        dd: "%d ਦਿਨ",
        M: "ਇੱਕ ਮਹੀਨਾ",
        MM: "%d ਮਹੀਨੇ",
        y: "ਇੱਕ ਸਾਲ",
        yy: "%d ਸਾਲ"
      },
      preparse: function (e) {
        return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
          return n[e]
        })
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return t[e]
        })
      },
      meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e) {
      return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
    }

    function n(e, n, a) {
      var r = e + " ";
      switch (a) {
        case "ss":
          return r + (t(e) ? "sekundy" : "sekund");
        case "m":
          return n ? "minuta" : "minutę";
        case "mm":
          return r + (t(e) ? "minuty" : "minut");
        case "h":
          return n ? "godzina" : "godzinę";
        case "hh":
          return r + (t(e) ? "godziny" : "godzin");
        case "MM":
          return r + (t(e) ? "miesiące" : "miesięcy");
        case "yy":
          return r + (t(e) ? "lata" : "lat")
      }
    }
    var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
      r = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
    return e.defineLocale("pl", {
      months: function (e, t) {
        return e ? "" === t ? "(" + r[e.month()] + "|" + a[e.month()] + ")" : /D MMMM/.test(t) ? r[e.month()] : a[e.month()] : a
      },
      monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
      weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
      weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
      weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Dziś o] LT",
        nextDay: "[Jutro o] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[W niedzielę o] LT";
            case 2:
              return "[We wtorek o] LT";
            case 3:
              return "[W środę o] LT";
            case 6:
              return "[W sobotę o] LT";
            default:
              return "[W] dddd [o] LT"
          }
        },
        lastDay: "[Wczoraj o] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[W zeszłą niedzielę o] LT";
            case 3:
              return "[W zeszłą środę o] LT";
            case 6:
              return "[W zeszłą sobotę o] LT";
            default:
              return "[W zeszły] dddd [o] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "%s temu",
        s: "kilka sekund",
        ss: n,
        m: n,
        mm: n,
        h: n,
        hh: n,
        d: "1 dzień",
        dd: "%d dni",
        M: "miesiąc",
        MM: n,
        y: "rok",
        yy: n
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("pt", {
      months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
      monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
      weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
      weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
      weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [de] MMMM [de] YYYY",
        LLL: "D [de] MMMM [de] YYYY HH:mm",
        LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Hoje às] LT",
        nextDay: "[Amanhã às] LT",
        nextWeek: "dddd [às] LT",
        lastDay: "[Ontem às] LT",
        lastWeek: function () {
          return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "em %s",
        past: "há %s",
        s: "segundos",
        ss: "%d segundos",
        m: "um minuto",
        mm: "%d minutos",
        h: "uma hora",
        hh: "%d horas",
        d: "um dia",
        dd: "%d dias",
        M: "um mês",
        MM: "%d meses",
        y: "um ano",
        yy: "%d anos"
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: "%dº",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("pt-br", {
      months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
      monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
      weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
      weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
      weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [de] MMMM [de] YYYY",
        LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
        LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
      },
      calendar: {
        sameDay: "[Hoje às] LT",
        nextDay: "[Amanhã às] LT",
        nextWeek: "dddd [às] LT",
        lastDay: "[Ontem às] LT",
        lastWeek: function () {
          return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "em %s",
        past: "há %s",
        s: "poucos segundos",
        ss: "%d segundos",
        m: "um minuto",
        mm: "%d minutos",
        h: "uma hora",
        hh: "%d horas",
        d: "um dia",
        dd: "%d dias",
        M: "um mês",
        MM: "%d meses",
        y: "um ano",
        yy: "%d anos"
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: "%dº"
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n) {
      var a = {
          ss: "secunde",
          mm: "minute",
          hh: "ore",
          dd: "zile",
          MM: "luni",
          yy: "ani"
        },
        r = " ";
      return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + a[n]
    }
    return e.defineLocale("ro", {
      months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
      monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
      weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
      weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY H:mm",
        LLLL: "dddd, D MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[azi la] LT",
        nextDay: "[mâine la] LT",
        nextWeek: "dddd [la] LT",
        lastDay: "[ieri la] LT",
        lastWeek: "[fosta] dddd [la] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "peste %s",
        past: "%s în urmă",
        s: "câteva secunde",
        ss: t,
        m: "un minut",
        mm: t,
        h: "o oră",
        hh: t,
        d: "o zi",
        dd: t,
        M: "o lună",
        MM: t,
        y: "un an",
        yy: t
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t) {
      var n = e.split("_");
      return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
    }

    function n(e, n, a) {
      var r = {
        ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
        mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
        hh: "час_часа_часов",
        dd: "день_дня_дней",
        MM: "месяц_месяца_месяцев",
        yy: "год_года_лет"
      };
      return "m" === a ? n ? "минута" : "минуту" : e + " " + t(r[a], +e)
    }
    var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
    return e.defineLocale("ru", {
      months: {
        format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
        standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
      },
      monthsShort: {
        format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
        standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
      },
      weekdays: {
        standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
        format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
      },
      weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
      weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
      monthsParse: a,
      longMonthsParse: a,
      shortMonthsParse: a,
      monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
      monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
      monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
      monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY г.",
        LLL: "D MMMM YYYY г., H:mm",
        LLLL: "dddd, D MMMM YYYY г., H:mm"
      },
      calendar: {
        sameDay: "[Сегодня, в] LT",
        nextDay: "[Завтра, в] LT",
        lastDay: "[Вчера, в] LT",
        nextWeek: function (e) {
          if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
          switch (this.day()) {
            case 0:
              return "[В следующее] dddd, [в] LT";
            case 1:
            case 2:
            case 4:
              return "[В следующий] dddd, [в] LT";
            case 3:
            case 5:
            case 6:
              return "[В следующую] dddd, [в] LT"
          }
        },
        lastWeek: function (e) {
          if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
          switch (this.day()) {
            case 0:
              return "[В прошлое] dddd, [в] LT";
            case 1:
            case 2:
            case 4:
              return "[В прошлый] dddd, [в] LT";
            case 3:
            case 5:
            case 6:
              return "[В прошлую] dddd, [в] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "через %s",
        past: "%s назад",
        s: "несколько секунд",
        ss: n,
        m: n,
        mm: n,
        h: "час",
        hh: n,
        d: "день",
        dd: n,
        M: "месяц",
        MM: n,
        y: "год",
        yy: n
      },
      meridiemParse: /ночи|утра|дня|вечера/i,
      isPM: function (e) {
        return /^(дня|вечера)$/.test(e)
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
      ordinal: function (e, t) {
        switch (t) {
          case "M":
          case "d":
          case "DDD":
            return e + "-й";
          case "D":
            return e + "-го";
          case "w":
          case "W":
            return e + "-я";
          default:
            return e
        }
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
      n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
    return e.defineLocale("sd", {
      months: t,
      monthsShort: t,
      weekdays: n,
      weekdaysShort: n,
      weekdaysMin: n,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd، D MMMM YYYY HH:mm"
      },
      meridiemParse: /صبح|شام/,
      isPM: function (e) {
        return "شام" === e
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "صبح" : "شام"
      },
      calendar: {
        sameDay: "[اڄ] LT",
        nextDay: "[سڀاڻي] LT",
        nextWeek: "dddd [اڳين هفتي تي] LT",
        lastDay: "[ڪالهه] LT",
        lastWeek: "[گزريل هفتي] dddd [تي] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s پوء",
        past: "%s اڳ",
        s: "چند سيڪنڊ",
        ss: "%d سيڪنڊ",
        m: "هڪ منٽ",
        mm: "%d منٽ",
        h: "هڪ ڪلاڪ",
        hh: "%d ڪلاڪ",
        d: "هڪ ڏينهن",
        dd: "%d ڏينهن",
        M: "هڪ مهينو",
        MM: "%d مهينا",
        y: "هڪ سال",
        yy: "%d سال"
      },
      preparse: function (e) {
        return e.replace(/،/g, ",")
      },
      postformat: function (e) {
        return e.replace(/,/g, "،")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("se", {
      months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
      monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
      weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
      weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
      weekdaysMin: "s_v_m_g_d_b_L".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "MMMM D. [b.] YYYY",
        LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
        LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
      },
      calendar: {
        sameDay: "[otne ti] LT",
        nextDay: "[ihttin ti] LT",
        nextWeek: "dddd [ti] LT",
        lastDay: "[ikte ti] LT",
        lastWeek: "[ovddit] dddd [ti] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s geažes",
        past: "maŋit %s",
        s: "moadde sekunddat",
        ss: "%d sekunddat",
        m: "okta minuhta",
        mm: "%d minuhtat",
        h: "okta diimmu",
        hh: "%d diimmut",
        d: "okta beaivi",
        dd: "%d beaivvit",
        M: "okta mánnu",
        MM: "%d mánut",
        y: "okta jahki",
        yy: "%d jagit"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("si", {
      months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
      monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
      weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
      weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
      weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "a h:mm",
        LTS: "a h:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY MMMM D",
        LLL: "YYYY MMMM D, a h:mm",
        LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
      },
      calendar: {
        sameDay: "[අද] LT[ට]",
        nextDay: "[හෙට] LT[ට]",
        nextWeek: "dddd LT[ට]",
        lastDay: "[ඊයේ] LT[ට]",
        lastWeek: "[පසුගිය] dddd LT[ට]",
        sameElse: "L"
      },
      relativeTime: {
        future: "%sකින්",
        past: "%sකට පෙර",
        s: "තත්පර කිහිපය",
        ss: "තත්පර %d",
        m: "මිනිත්තුව",
        mm: "මිනිත්තු %d",
        h: "පැය",
        hh: "පැය %d",
        d: "දිනය",
        dd: "දින %d",
        M: "මාසය",
        MM: "මාස %d",
        y: "වසර",
        yy: "වසර %d"
      },
      dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
      ordinal: function (e) {
        return e + " වැනි"
      },
      meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
      isPM: function (e) {
        return "ප.ව." === e || "පස් වරු" === e
      },
      meridiem: function (e, t, n) {
        return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e) {
      return e > 1 && e < 5
    }

    function n(e, n, a, r) {
      var i = e + " ";
      switch (a) {
        case "s":
          return n || r ? "pár sekúnd" : "pár sekundami";
        case "ss":
          return n || r ? i + (t(e) ? "sekundy" : "sekúnd") : i + "sekundami";
        case "m":
          return n ? "minúta" : r ? "minútu" : "minútou";
        case "mm":
          return n || r ? i + (t(e) ? "minúty" : "minút") : i + "minútami";
        case "h":
          return n ? "hodina" : r ? "hodinu" : "hodinou";
        case "hh":
          return n || r ? i + (t(e) ? "hodiny" : "hodín") : i + "hodinami";
        case "d":
          return n || r ? "deň" : "dňom";
        case "dd":
          return n || r ? i + (t(e) ? "dni" : "dní") : i + "dňami";
        case "M":
          return n || r ? "mesiac" : "mesiacom";
        case "MM":
          return n || r ? i + (t(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
        case "y":
          return n || r ? "rok" : "rokom";
        case "yy":
          return n || r ? i + (t(e) ? "roky" : "rokov") : i + "rokmi"
      }
    }
    var a = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
      r = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
    return e.defineLocale("sk", {
      months: a,
      monthsShort: r,
      weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
      weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
      weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[dnes o] LT",
        nextDay: "[zajtra o] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v nedeľu o] LT";
            case 1:
            case 2:
              return "[v] dddd [o] LT";
            case 3:
              return "[v stredu o] LT";
            case 4:
              return "[vo štvrtok o] LT";
            case 5:
              return "[v piatok o] LT";
            case 6:
              return "[v sobotu o] LT"
          }
        },
        lastDay: "[včera o] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[minulú nedeľu o] LT";
            case 1:
            case 2:
              return "[minulý] dddd [o] LT";
            case 3:
              return "[minulú stredu o] LT";
            case 4:
            case 5:
              return "[minulý] dddd [o] LT";
            case 6:
              return "[minulú sobotu o] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "pred %s",
        s: n,
        ss: n,
        m: n,
        mm: n,
        h: n,
        hh: n,
        d: n,
        dd: n,
        M: n,
        MM: n,
        y: n,
        yy: n
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n, a) {
      var r = e + " ";
      switch (n) {
        case "s":
          return t || a ? "nekaj sekund" : "nekaj sekundami";
        case "ss":
          return r += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || a ? "sekundi" : "sekundah" : e < 5 ? t || a ? "sekunde" : "sekundah" : "sekund";
        case "m":
          return t ? "ena minuta" : "eno minuto";
        case "mm":
          return r += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
        case "h":
          return t ? "ena ura" : "eno uro";
        case "hh":
          return r += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
        case "d":
          return t || a ? "en dan" : "enim dnem";
        case "dd":
          return r += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
        case "M":
          return t || a ? "en mesec" : "enim mesecem";
        case "MM":
          return r += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
        case "y":
          return t || a ? "eno leto" : "enim letom";
        case "yy":
          return r += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti"
      }
    }
    return e.defineLocale("sl", {
      months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
      monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
      weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
      weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danes ob] LT",
        nextDay: "[jutri ob] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[v] [nedeljo] [ob] LT";
            case 3:
              return "[v] [sredo] [ob] LT";
            case 6:
              return "[v] [soboto] [ob] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[v] dddd [ob] LT"
          }
        },
        lastDay: "[včeraj ob] LT",
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return "[prejšnjo] [nedeljo] [ob] LT";
            case 3:
              return "[prejšnjo] [sredo] [ob] LT";
            case 6:
              return "[prejšnjo] [soboto] [ob] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[prejšnji] dddd [ob] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "čez %s",
        past: "pred %s",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("sq", {
      months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
      monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
      weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
      weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
      weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
      weekdaysParseExact: !0,
      meridiemParse: /PD|MD/,
      isPM: function (e) {
        return "M" === e.charAt(0)
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "PD" : "MD"
      },
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Sot në] LT",
        nextDay: "[Nesër në] LT",
        nextWeek: "dddd [në] LT",
        lastDay: "[Dje në] LT",
        lastWeek: "dddd [e kaluar në] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "në %s",
        past: "%s më parë",
        s: "disa sekonda",
        ss: "%d sekonda",
        m: "një minutë",
        mm: "%d minuta",
        h: "një orë",
        hh: "%d orë",
        d: "një ditë",
        dd: "%d ditë",
        M: "një muaj",
        MM: "%d muaj",
        y: "një vit",
        yy: "%d vite"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
      words: {
        ss: ["sekunda", "sekunde", "sekundi"],
        m: ["jedan minut", "jedne minute"],
        mm: ["minut", "minute", "minuta"],
        h: ["jedan sat", "jednog sata"],
        hh: ["sat", "sata", "sati"],
        dd: ["dan", "dana", "dana"],
        MM: ["mesec", "meseca", "meseci"],
        yy: ["godina", "godine", "godina"]
      },
      correctGrammaticalCase: function (e, t) {
        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
      },
      translate: function (e, n, a) {
        var r = t.words[a];
        return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
      }
    };
    return e.defineLocale("sr", {
      months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
      monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[u] [nedelju] [u] LT";
            case 3:
              return "[u] [sredu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT"
          }
        },
        lastDay: "[juče u] LT",
        lastWeek: function () {
          return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "pre %s",
        s: "nekoliko sekundi",
        ss: t.translate,
        m: t.translate,
        mm: t.translate,
        h: t.translate,
        hh: t.translate,
        d: "dan",
        dd: t.translate,
        M: "mesec",
        MM: t.translate,
        y: "godinu",
        yy: t.translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
      words: {
        ss: ["секунда", "секунде", "секунди"],
        m: ["један минут", "једне минуте"],
        mm: ["минут", "минуте", "минута"],
        h: ["један сат", "једног сата"],
        hh: ["сат", "сата", "сати"],
        dd: ["дан", "дана", "дана"],
        MM: ["месец", "месеца", "месеци"],
        yy: ["година", "године", "година"]
      },
      correctGrammaticalCase: function (e, t) {
        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
      },
      translate: function (e, n, a) {
        var r = t.words[a];
        return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
      }
    };
    return e.defineLocale("sr-cyrl", {
      months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
      monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
      monthsParseExact: !0,
      weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
      weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
      weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[данас у] LT",
        nextDay: "[сутра у] LT",
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return "[у] [недељу] [у] LT";
            case 3:
              return "[у] [среду] [у] LT";
            case 6:
              return "[у] [суботу] [у] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[у] dddd [у] LT"
          }
        },
        lastDay: "[јуче у] LT",
        lastWeek: function () {
          return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "за %s",
        past: "пре %s",
        s: "неколико секунди",
        ss: t.translate,
        m: t.translate,
        mm: t.translate,
        h: t.translate,
        hh: t.translate,
        d: "дан",
        dd: t.translate,
        M: "месец",
        MM: t.translate,
        y: "годину",
        yy: t.translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ss", {
      months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
      monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
      weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
      weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
      weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendar: {
        sameDay: "[Namuhla nga] LT",
        nextDay: "[Kusasa nga] LT",
        nextWeek: "dddd [nga] LT",
        lastDay: "[Itolo nga] LT",
        lastWeek: "dddd [leliphelile] [nga] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "nga %s",
        past: "wenteka nga %s",
        s: "emizuzwana lomcane",
        ss: "%d mzuzwana",
        m: "umzuzu",
        mm: "%d emizuzu",
        h: "lihora",
        hh: "%d emahora",
        d: "lilanga",
        dd: "%d emalanga",
        M: "inyanga",
        MM: "%d tinyanga",
        y: "umnyaka",
        yy: "%d iminyaka"
      },
      meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
      meridiem: function (e, t, n) {
        return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
      },
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
      },
      dayOfMonthOrdinalParse: /\d{1,2}/,
      ordinal: "%d",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("sv", {
      months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
      monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
      weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
      weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
      weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [kl.] HH:mm",
        LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd D MMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Idag] LT",
        nextDay: "[Imorgon] LT",
        lastDay: "[Igår] LT",
        nextWeek: "[På] dddd LT",
        lastWeek: "[I] dddd[s] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "om %s",
        past: "för %s sedan",
        s: "några sekunder",
        ss: "%d sekunder",
        m: "en minut",
        mm: "%d minuter",
        h: "en timme",
        hh: "%d timmar",
        d: "en dag",
        dd: "%d dagar",
        M: "en månad",
        MM: "%d månader",
        y: "ett år",
        yy: "%d år"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
      ordinal: function (e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("sw", {
      months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
      monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
      weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
      weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
      weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[leo saa] LT",
        nextDay: "[kesho saa] LT",
        nextWeek: "[wiki ijayo] dddd [saat] LT",
        lastDay: "[jana] LT",
        lastWeek: "[wiki iliyopita] dddd [saat] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s baadaye",
        past: "tokea %s",
        s: "hivi punde",
        ss: "sekunde %d",
        m: "dakika moja",
        mm: "dakika %d",
        h: "saa limoja",
        hh: "masaa %d",
        d: "siku moja",
        dd: "masiku %d",
        M: "mwezi mmoja",
        MM: "miezi %d",
        y: "mwaka mmoja",
        yy: "miaka %d"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
        1: "௧",
        2: "௨",
        3: "௩",
        4: "௪",
        5: "௫",
        6: "௬",
        7: "௭",
        8: "௮",
        9: "௯",
        0: "௦"
      },
      n = {
        "௧": "1",
        "௨": "2",
        "௩": "3",
        "௪": "4",
        "௫": "5",
        "௬": "6",
        "௭": "7",
        "௮": "8",
        "௯": "9",
        "௦": "0"
      };
    return e.defineLocale("ta", {
      months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
      monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
      weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
      weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
      weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, HH:mm",
        LLLL: "dddd, D MMMM YYYY, HH:mm"
      },
      calendar: {
        sameDay: "[இன்று] LT",
        nextDay: "[நாளை] LT",
        nextWeek: "dddd, LT",
        lastDay: "[நேற்று] LT",
        lastWeek: "[கடந்த வாரம்] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s இல்",
        past: "%s முன்",
        s: "ஒரு சில விநாடிகள்",
        ss: "%d விநாடிகள்",
        m: "ஒரு நிமிடம்",
        mm: "%d நிமிடங்கள்",
        h: "ஒரு மணி நேரம்",
        hh: "%d மணி நேரம்",
        d: "ஒரு நாள்",
        dd: "%d நாட்கள்",
        M: "ஒரு மாதம்",
        MM: "%d மாதங்கள்",
        y: "ஒரு வருடம்",
        yy: "%d ஆண்டுகள்"
      },
      dayOfMonthOrdinalParse: /\d{1,2}வது/,
      ordinal: function (e) {
        return e + "வது"
      },
      preparse: function (e) {
        return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
          return n[e]
        })
      },
      postformat: function (e) {
        return e.replace(/\d/g, function (e) {
          return t[e]
        })
      },
      meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
      meridiem: function (e, t, n) {
        return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
      },
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("te", {
      months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
      monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
      monthsParseExact: !0,
      weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
      weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
      weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
      longDateFormat: {
        LT: "A h:mm",
        LTS: "A h:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm",
        LLLL: "dddd, D MMMM YYYY, A h:mm"
      },
      calendar: {
        sameDay: "[నేడు] LT",
        nextDay: "[రేపు] LT",
        nextWeek: "dddd, LT",
        lastDay: "[నిన్న] LT",
        lastWeek: "[గత] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s లో",
        past: "%s క్రితం",
        s: "కొన్ని క్షణాలు",
        ss: "%d సెకన్లు",
        m: "ఒక నిమిషం",
        mm: "%d నిమిషాలు",
        h: "ఒక గంట",
        hh: "%d గంటలు",
        d: "ఒక రోజు",
        dd: "%d రోజులు",
        M: "ఒక నెల",
        MM: "%d నెలలు",
        y: "ఒక సంవత్సరం",
        yy: "%d సంవత్సరాలు"
      },
      dayOfMonthOrdinalParse: /\d{1,2}వ/,
      ordinal: "%dవ",
      meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("tet", {
      months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
      monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
      weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
      weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
      weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ohin iha] LT",
        nextDay: "[Aban iha] LT",
        nextWeek: "dddd [iha] LT",
        lastDay: "[Horiseik iha] LT",
        lastWeek: "dddd [semana kotuk] [iha] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "iha %s",
        past: "%s liuba",
        s: "minutu balun",
        ss: "minutu %d",
        m: "minutu ida",
        mm: "minutu %d",
        h: "oras ida",
        hh: "oras %d",
        d: "loron ida",
        dd: "loron %d",
        M: "fulan ida",
        MM: "fulan %d",
        y: "tinan ida",
        yy: "tinan %d"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal: function (e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
      0: "-ум",
      1: "-ум",
      2: "-юм",
      3: "-юм",
      4: "-ум",
      5: "-ум",
      6: "-ум",
      7: "-ум",
      8: "-ум",
      9: "-ум",
      10: "-ум",
      12: "-ум",
      13: "-ум",
      20: "-ум",
      30: "-юм",
      40: "-ум",
      50: "-ум",
      60: "-ум",
      70: "-ум",
      80: "-ум",
      90: "-ум",
      100: "-ум"
    };
    return e.defineLocale("tg", {
      months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
      monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
      weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
      weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
      weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Имрӯз соати] LT",
        nextDay: "[Пагоҳ соати] LT",
        lastDay: "[Дирӯз соати] LT",
        nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
        lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "баъди %s",
        past: "%s пеш",
        s: "якчанд сония",
        m: "як дақиқа",
        mm: "%d дақиқа",
        h: "як соат",
        hh: "%d соат",
        d: "як рӯз",
        dd: "%d рӯз",
        M: "як моҳ",
        MM: "%d моҳ",
        y: "як сол",
        yy: "%d сол"
      },
      meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
      ordinal: function (e) {
        var n = e % 10,
          a = e >= 100 ? 100 : null;
        return e + (t[e] || t[n] || t[a])
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("th", {
      months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
      monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
      monthsParseExact: !0,
      weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
      weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
      weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY เวลา H:mm",
        LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
      },
      meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
      isPM: function (e) {
        return "หลังเที่ยง" === e
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
      },
      calendar: {
        sameDay: "[วันนี้ เวลา] LT",
        nextDay: "[พรุ่งนี้ เวลา] LT",
        nextWeek: "dddd[หน้า เวลา] LT",
        lastDay: "[เมื่อวานนี้ เวลา] LT",
        lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "อีก %s",
        past: "%sที่แล้ว",
        s: "ไม่กี่วินาที",
        ss: "%d วินาที",
        m: "1 นาที",
        mm: "%d นาที",
        h: "1 ชั่วโมง",
        hh: "%d ชั่วโมง",
        d: "1 วัน",
        dd: "%d วัน",
        M: "1 เดือน",
        MM: "%d เดือน",
        y: "1 ปี",
        yy: "%d ปี"
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("tl-ph", {
      months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
      monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
      weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
      weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
      weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "MM/D/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY HH:mm",
        LLLL: "dddd, MMMM DD, YYYY HH:mm"
      },
      calendar: {
        sameDay: "LT [ngayong araw]",
        nextDay: "[Bukas ng] LT",
        nextWeek: "LT [sa susunod na] dddd",
        lastDay: "LT [kahapon]",
        lastWeek: "LT [noong nakaraang] dddd",
        sameElse: "L"
      },
      relativeTime: {
        future: "sa loob ng %s",
        past: "%s ang nakalipas",
        s: "ilang segundo",
        ss: "%d segundo",
        m: "isang minuto",
        mm: "%d minuto",
        h: "isang oras",
        hh: "%d oras",
        d: "isang araw",
        dd: "%d araw",
        M: "isang buwan",
        MM: "%d buwan",
        y: "isang taon",
        yy: "%d taon"
      },
      dayOfMonthOrdinalParse: /\d{1,2}/,
      ordinal: function (e) {
        return e
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e) {
      var t = e;
      return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
    }

    function n(e) {
      var t = e;
      return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
    }

    function a(e, t, n, a) {
      var i = r(e);
      switch (n) {
        case "ss":
          return i + " lup";
        case "mm":
          return i + " tup";
        case "hh":
          return i + " rep";
        case "dd":
          return i + " jaj";
        case "MM":
          return i + " jar";
        case "yy":
          return i + " DIS"
      }
    }

    function r(e) {
      var t = Math.floor(e % 1e3 / 100),
        n = Math.floor(e % 100 / 10),
        a = e % 10,
        r = "";
      return t > 0 && (r += i[t] + "vatlh"), n > 0 && (r += ("" !== r ? " " : "") + i[n] + "maH"), a > 0 && (r += ("" !== r ? " " : "") + i[a]), "" === r ? "pagh" : r
    }
    var i = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
    return e.defineLocale("tlh", {
      months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
      monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
      monthsParseExact: !0,
      weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[DaHjaj] LT",
        nextDay: "[wa’leS] LT",
        nextWeek: "LLL",
        lastDay: "[wa’Hu’] LT",
        lastWeek: "LLL",
        sameElse: "L"
      },
      relativeTime: {
        future: t,
        past: n,
        s: "puS lup",
        ss: a,
        m: "wa’ tup",
        mm: a,
        h: "wa’ rep",
        hh: a,
        d: "wa’ jaj",
        dd: a,
        M: "wa’ jar",
        MM: a,
        y: "wa’ DIS",
        yy: a
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = {
      1: "'inci",
      5: "'inci",
      8: "'inci",
      70: "'inci",
      80: "'inci",
      2: "'nci",
      7: "'nci",
      20: "'nci",
      50: "'nci",
      3: "'üncü",
      4: "'üncü",
      100: "'üncü",
      6: "'ncı",
      9: "'uncu",
      10: "'uncu",
      30: "'uncu",
      60: "'ıncı",
      90: "'ıncı"
    };
    return e.defineLocale("tr", {
      months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
      monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
      weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
      weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
      weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[bugün saat] LT",
        nextDay: "[yarın saat] LT",
        nextWeek: "[gelecek] dddd [saat] LT",
        lastDay: "[dün] LT",
        lastWeek: "[geçen] dddd [saat] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s sonra",
        past: "%s önce",
        s: "birkaç saniye",
        ss: "%d saniye",
        m: "bir dakika",
        mm: "%d dakika",
        h: "bir saat",
        hh: "%d saat",
        d: "bir gün",
        dd: "%d gün",
        M: "bir ay",
        MM: "%d ay",
        y: "bir yıl",
        yy: "%d yıl"
      },
      ordinal: function (e, n) {
        switch (n) {
          case "d":
          case "D":
          case "Do":
          case "DD":
            return e;
          default:
            if (0 === e) return e + "'ıncı";
            var a = e % 10,
              r = e % 100 - a,
              i = e >= 100 ? 100 : null;
            return e + (t[a] || t[r] || t[i])
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t, n, a) {
      var r = {
        s: ["viensas secunds", "'iensas secunds"],
        ss: [e + " secunds", e + " secunds"],
        m: ["'n míut", "'iens míut"],
        mm: [e + " míuts", e + " míuts"],
        h: ["'n þora", "'iensa þora"],
        hh: [e + " þoras", e + " þoras"],
        d: ["'n ziua", "'iensa ziua"],
        dd: [e + " ziuas", e + " ziuas"],
        M: ["'n mes", "'iens mes"],
        MM: [e + " mesen", e + " mesen"],
        y: ["'n ar", "'iens ar"],
        yy: [e + " ars", e + " ars"]
      };
      return a ? r[n][0] : t ? r[n][0] : r[n][1]
    }
    return e.defineLocale("tzl", {
      months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
      monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
      weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
      weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
      weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
      longDateFormat: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM [dallas] YYYY",
        LLL: "D. MMMM [dallas] YYYY HH.mm",
        LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
      },
      meridiemParse: /d\'o|d\'a/i,
      isPM: function (e) {
        return "d'o" === e.toLowerCase()
      },
      meridiem: function (e, t, n) {
        return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
      },
      calendar: {
        sameDay: "[oxhi à] LT",
        nextDay: "[demà à] LT",
        nextWeek: "dddd [à] LT",
        lastDay: "[ieiri à] LT",
        lastWeek: "[sür el] dddd [lasteu à] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "osprei %s",
        past: "ja%s",
        s: t,
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("tzm", {
      months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
      monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
      weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
      weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
      weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
        nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
        nextWeek: "dddd [ⴴ] LT",
        lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
        lastWeek: "dddd [ⴴ] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
        past: "ⵢⴰⵏ %s",
        s: "ⵉⵎⵉⴽ",
        ss: "%d ⵉⵎⵉⴽ",
        m: "ⵎⵉⵏⵓⴺ",
        mm: "%d ⵎⵉⵏⵓⴺ",
        h: "ⵙⴰⵄⴰ",
        hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
        d: "ⴰⵙⵙ",
        dd: "%d oⵙⵙⴰⵏ",
        M: "ⴰⵢoⵓⵔ",
        MM: "%d ⵉⵢⵢⵉⵔⵏ",
        y: "ⴰⵙⴳⴰⵙ",
        yy: "%d ⵉⵙⴳⴰⵙⵏ"
      },
      week: {
        dow: 6,
        doy: 12
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("tzm-latn", {
      months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
      monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
      weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
      weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
      weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[asdkh g] LT",
        nextDay: "[aska g] LT",
        nextWeek: "dddd [g] LT",
        lastDay: "[assant g] LT",
        lastWeek: "dddd [g] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dadkh s yan %s",
        past: "yan %s",
        s: "imik",
        ss: "%d imik",
        m: "minuḍ",
        mm: "%d minuḍ",
        h: "saɛa",
        hh: "%d tassaɛin",
        d: "ass",
        dd: "%d ossan",
        M: "ayowr",
        MM: "%d iyyirn",
        y: "asgas",
        yy: "%d isgasn"
      },
      week: {
        dow: 6,
        doy: 12
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("ug-cn", {
      months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
      monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
      weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
      weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
      weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
        LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
        LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
      },
      meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
      },
      meridiem: function (e, t, n) {
        var a = 100 * e + t;
        return a < 600 ? "يېرىم كېچە" : a < 900 ? "سەھەر" : a < 1130 ? "چۈشتىن بۇرۇن" : a < 1230 ? "چۈش" : a < 1800 ? "چۈشتىن كېيىن" : "كەچ"
      },
      calendar: {
        sameDay: "[بۈگۈن سائەت] LT",
        nextDay: "[ئەتە سائەت] LT",
        nextWeek: "[كېلەركى] dddd [سائەت] LT",
        lastDay: "[تۆنۈگۈن] LT",
        lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s كېيىن",
        past: "%s بۇرۇن",
        s: "نەچچە سېكونت",
        ss: "%d سېكونت",
        m: "بىر مىنۇت",
        mm: "%d مىنۇت",
        h: "بىر سائەت",
        hh: "%d سائەت",
        d: "بىر كۈن",
        dd: "%d كۈن",
        M: "بىر ئاي",
        MM: "%d ئاي",
        y: "بىر يىل",
        yy: "%d يىل"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
      ordinal: function (e, t) {
        switch (t) {
          case "d":
          case "D":
          case "DDD":
            return e + "-كۈنى";
          case "w":
          case "W":
            return e + "-ھەپتە";
          default:
            return e
        }
      },
      preparse: function (e) {
        return e.replace(/،/g, ",")
      },
      postformat: function (e) {
        return e.replace(/,/g, "،")
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";

    function t(e, t) {
      var n = e.split("_");
      return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
    }

    function n(e, n, a) {
      var r = {
        ss: n ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
        mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
        hh: n ? "година_години_годин" : "годину_години_годин",
        dd: "день_дні_днів",
        MM: "місяць_місяці_місяців",
        yy: "рік_роки_років"
      };
      return "m" === a ? n ? "хвилина" : "хвилину" : "h" === a ? n ? "година" : "годину" : e + " " + t(r[a], +e)
    }

    function a(e, t) {
      var n = {
        nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
        accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
        genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
      };
      return e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
    }

    function r(e) {
      return function () {
        return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
      }
    }
    return e.defineLocale("uk", {
      months: {
        format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
        standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
      },
      monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
      weekdays: a,
      weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
      weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY р.",
        LLL: "D MMMM YYYY р., HH:mm",
        LLLL: "dddd, D MMMM YYYY р., HH:mm"
      },
      calendar: {
        sameDay: r("[Сьогодні "),
        nextDay: r("[Завтра "),
        lastDay: r("[Вчора "),
        nextWeek: r("[У] dddd ["),
        lastWeek: function () {
          switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
              return r("[Минулої] dddd [").call(this);
            case 1:
            case 2:
            case 4:
              return r("[Минулого] dddd [").call(this)
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "за %s",
        past: "%s тому",
        s: "декілька секунд",
        ss: n,
        m: n,
        mm: n,
        h: "годину",
        hh: n,
        d: "день",
        dd: n,
        M: "місяць",
        MM: n,
        y: "рік",
        yy: n
      },
      meridiemParse: /ночі|ранку|дня|вечора/,
      isPM: function (e) {
        return /^(дня|вечора)$/.test(e)
      },
      meridiem: function (e, t, n) {
        return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
      ordinal: function (e, t) {
        switch (t) {
          case "M":
          case "d":
          case "DDD":
          case "w":
          case "W":
            return e + "-й";
          case "D":
            return e + "-го";
          default:
            return e
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
      n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
    return e.defineLocale("ur", {
      months: t,
      monthsShort: t,
      weekdays: n,
      weekdaysShort: n,
      weekdaysMin: n,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd، D MMMM YYYY HH:mm"
      },
      meridiemParse: /صبح|شام/,
      isPM: function (e) {
        return "شام" === e
      },
      meridiem: function (e, t, n) {
        return e < 12 ? "صبح" : "شام"
      },
      calendar: {
        sameDay: "[آج بوقت] LT",
        nextDay: "[کل بوقت] LT",
        nextWeek: "dddd [بوقت] LT",
        lastDay: "[گذشتہ روز بوقت] LT",
        lastWeek: "[گذشتہ] dddd [بوقت] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s بعد",
        past: "%s قبل",
        s: "چند سیکنڈ",
        ss: "%d سیکنڈ",
        m: "ایک منٹ",
        mm: "%d منٹ",
        h: "ایک گھنٹہ",
        hh: "%d گھنٹے",
        d: "ایک دن",
        dd: "%d دن",
        M: "ایک ماہ",
        MM: "%d ماہ",
        y: "ایک سال",
        yy: "%d سال"
      },
      preparse: function (e) {
        return e.replace(/،/g, ",")
      },
      postformat: function (e) {
        return e.replace(/,/g, "،")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("uz", {
      months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
      monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
      weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
      weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
      weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "D MMMM YYYY, dddd HH:mm"
      },
      calendar: {
        sameDay: "[Бугун соат] LT [да]",
        nextDay: "[Эртага] LT [да]",
        nextWeek: "dddd [куни соат] LT [да]",
        lastDay: "[Кеча соат] LT [да]",
        lastWeek: "[Утган] dddd [куни соат] LT [да]",
        sameElse: "L"
      },
      relativeTime: {
        future: "Якин %s ичида",
        past: "Бир неча %s олдин",
        s: "фурсат",
        ss: "%d фурсат",
        m: "бир дакика",
        mm: "%d дакика",
        h: "бир соат",
        hh: "%d соат",
        d: "бир кун",
        dd: "%d кун",
        M: "бир ой",
        MM: "%d ой",
        y: "бир йил",
        yy: "%d йил"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("uz-latn", {
      months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
      monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
      weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
      weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
      weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "D MMMM YYYY, dddd HH:mm"
      },
      calendar: {
        sameDay: "[Bugun soat] LT [da]",
        nextDay: "[Ertaga] LT [da]",
        nextWeek: "dddd [kuni soat] LT [da]",
        lastDay: "[Kecha soat] LT [da]",
        lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
        sameElse: "L"
      },
      relativeTime: {
        future: "Yaqin %s ichida",
        past: "Bir necha %s oldin",
        s: "soniya",
        ss: "%d soniya",
        m: "bir daqiqa",
        mm: "%d daqiqa",
        h: "bir soat",
        hh: "%d soat",
        d: "bir kun",
        dd: "%d kun",
        M: "bir oy",
        MM: "%d oy",
        y: "bir yil",
        yy: "%d yil"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("vi", {
      months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
      monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
      monthsParseExact: !0,
      weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
      weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
      weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
      weekdaysParseExact: !0,
      meridiemParse: /sa|ch/i,
      isPM: function (e) {
        return /^ch$/i.test(e)
      },
      meridiem: function (e, t, n) {
        return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
      },
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM [năm] YYYY",
        LLL: "D MMMM [năm] YYYY HH:mm",
        LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
        l: "DD/M/YYYY",
        ll: "D MMM YYYY",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd, D MMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Hôm nay lúc] LT",
        nextDay: "[Ngày mai lúc] LT",
        nextWeek: "dddd [tuần tới lúc] LT",
        lastDay: "[Hôm qua lúc] LT",
        lastWeek: "dddd [tuần rồi lúc] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s tới",
        past: "%s trước",
        s: "vài giây",
        ss: "%d giây",
        m: "một phút",
        mm: "%d phút",
        h: "một giờ",
        hh: "%d giờ",
        d: "một ngày",
        dd: "%d ngày",
        M: "một tháng",
        MM: "%d tháng",
        y: "một năm",
        yy: "%d năm"
      },
      dayOfMonthOrdinalParse: /\d{1,2}/,
      ordinal: function (e) {
        return e
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("x-pseudo", {
      months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
      monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
      monthsParseExact: !0,
      weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
      weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
      weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[T~ódá~ý át] LT",
        nextDay: "[T~ómó~rró~w át] LT",
        nextWeek: "dddd [át] LT",
        lastDay: "[Ý~ést~érdá~ý át] LT",
        lastWeek: "[L~ást] dddd [át] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "í~ñ %s",
        past: "%s á~gó",
        s: "á ~féw ~sécó~ñds",
        ss: "%d s~écóñ~ds",
        m: "á ~míñ~úté",
        mm: "%d m~íñú~tés",
        h: "á~ñ hó~úr",
        hh: "%d h~óúrs",
        d: "á ~dáý",
        dd: "%d d~áýs",
        M: "á ~móñ~th",
        MM: "%d m~óñt~hs",
        y: "á ~ýéár",
        yy: "%d ý~éárs"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (e) {
        var t = e % 10;
        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("yo", {
      months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
      monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
      weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
      weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
      weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      calendar: {
        sameDay: "[Ònì ni] LT",
        nextDay: "[Ọ̀la ni] LT",
        nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
        lastDay: "[Àna ni] LT",
        lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ní %s",
        past: "%s kọjá",
        s: "ìsẹjú aayá die",
        ss: "aayá %d",
        m: "ìsẹjú kan",
        mm: "ìsẹjú %d",
        h: "wákati kan",
        hh: "wákati %d",
        d: "ọjọ́ kan",
        dd: "ọjọ́ %d",
        M: "osù kan",
        MM: "osù %d",
        y: "ọdún kan",
        yy: "ọdún %d"
      },
      dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
      ordinal: "ọjọ́ %d",
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("zh-cn", {
      months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
      monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
      weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
      weekdaysMin: "日_一_二_三_四_五_六".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY年M月D日",
        LLL: "YYYY年M月D日Ah点mm分",
        LLLL: "YYYY年M月D日ddddAh点mm分",
        l: "YYYY/M/D",
        ll: "YYYY年M月D日",
        lll: "YYYY年M月D日 HH:mm",
        llll: "YYYY年M月D日dddd HH:mm"
      },
      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
      },
      meridiem: function (e, t, n) {
        var a = 100 * e + t;
        return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
      },
      calendar: {
        sameDay: "[今天]LT",
        nextDay: "[明天]LT",
        nextWeek: "[下]ddddLT",
        lastDay: "[昨天]LT",
        lastWeek: "[上]ddddLT",
        sameElse: "L"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
      ordinal: function (e, t) {
        switch (t) {
          case "d":
          case "D":
          case "DDD":
            return e + "日";
          case "M":
            return e + "月";
          case "w":
          case "W":
            return e + "周";
          default:
            return e
        }
      },
      relativeTime: {
        future: "%s内",
        past: "%s前",
        s: "几秒",
        ss: "%d 秒",
        m: "1 分钟",
        mm: "%d 分钟",
        h: "1 小时",
        hh: "%d 小时",
        d: "1 天",
        dd: "%d 天",
        M: "1 个月",
        MM: "%d 个月",
        y: "1 年",
        yy: "%d 年"
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("zh-hk", {
      months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
      monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
      weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
      weekdaysMin: "日_一_二_三_四_五_六".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY年M月D日",
        LLL: "YYYY年M月D日 HH:mm",
        LLLL: "YYYY年M月D日dddd HH:mm",
        l: "YYYY/M/D",
        ll: "YYYY年M月D日",
        lll: "YYYY年M月D日 HH:mm",
        llll: "YYYY年M月D日dddd HH:mm"
      },
      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        var a = 100 * e + t;
        return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
      },
      calendar: {
        sameDay: "[今天]LT",
        nextDay: "[明天]LT",
        nextWeek: "[下]ddddLT",
        lastDay: "[昨天]LT",
        lastWeek: "[上]ddddLT",
        sameElse: "L"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
      ordinal: function (e, t) {
        switch (t) {
          case "d":
          case "D":
          case "DDD":
            return e + "日";
          case "M":
            return e + "月";
          case "w":
          case "W":
            return e + "週";
          default:
            return e
        }
      },
      relativeTime: {
        future: "%s內",
        past: "%s前",
        s: "幾秒",
        ss: "%d 秒",
        m: "1 分鐘",
        mm: "%d 分鐘",
        h: "1 小時",
        hh: "%d 小時",
        d: "1 天",
        dd: "%d 天",
        M: "1 個月",
        MM: "%d 個月",
        y: "1 年",
        yy: "%d 年"
      }
    })
  })
}, function (e, t, n) {
  ! function (e, t) {
    t(n(0))
  }(0, function (e) {
    "use strict";
    return e.defineLocale("zh-tw", {
      months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
      monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
      weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
      weekdaysMin: "日_一_二_三_四_五_六".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY年M月D日",
        LLL: "YYYY年M月D日 HH:mm",
        LLLL: "YYYY年M月D日dddd HH:mm",
        l: "YYYY/M/D",
        ll: "YYYY年M月D日",
        lll: "YYYY年M月D日 HH:mm",
        llll: "YYYY年M月D日dddd HH:mm"
      },
      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
      meridiemHour: function (e, t) {
        return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
      },
      meridiem: function (e, t, n) {
        var a = 100 * e + t;
        return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
      },
      calendar: {
        sameDay: "[今天] LT",
        nextDay: "[明天] LT",
        nextWeek: "[下]dddd LT",
        lastDay: "[昨天] LT",
        lastWeek: "[上]dddd LT",
        sameElse: "L"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
      ordinal: function (e, t) {
        switch (t) {
          case "d":
          case "D":
          case "DDD":
            return e + "日";
          case "M":
            return e + "月";
          case "w":
          case "W":
            return e + "週";
          default:
            return e
        }
      },
      relativeTime: {
        future: "%s內",
        past: "%s前",
        s: "幾秒",
        ss: "%d 秒",
        m: "1 分鐘",
        mm: "%d 分鐘",
        h: "1 小時",
        hh: "%d 小時",
        d: "1 天",
        dd: "%d 天",
        M: "1 個月",
        MM: "%d 個月",
        y: "1 年",
        yy: "%d 年"
      }
    })
  })
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(23),
    o = a(r),
    s = n(51),
    d = a(s),
    l = n(206),
    u = a(l),
    c = o["default"].ie,
    m = function p(e, t, n, a, r, i) {
      var o = a && e[t],
        s = void 0;
      for (!o && (o = e[n]); !o && (s = (s || e).parentNode);) {
        if ("BODY" == s.tagName || i && !i(s)) return null;
        o = s[n]
      }
      return o && r && !r(o) ? p(o, t, n, !1, r) : o
    },
    h = c && o["default"].version < 9 ? {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder"
    } : {
      tabindex: "tabIndex",
      readonly: "readOnly"
    },
    f = d["default"].listToMap(["-webkit-box", "-moz-box", "block", "list-item", "table", "table-row-group", "table-header-group", "table-footer-group", "table-row", "table-column-group", "table-column", "table-cell", "table-caption"]),
    _ = {
      NODE_ELEMENT: 1,
      NODE_DOCUMENT: 9,
      NODE_TEXT: 3,
      NODE_COMMENT: 8,
      NODE_DOCUMENT_FRAGMENT: 11,
      POSITION_IDENTICAL: 0,
      POSITION_DISCONNECTED: 1,
      POSITION_FOLLOWING: 2,
      POSITION_PRECEDING: 4,
      POSITION_IS_CONTAINED: 8,
      POSITION_CONTAINS: 16,
      fillChar: c && "6" == o["default"].version ? "\ufeff" : "​",
      keys: {
        8: 1,
        46: 1,
        16: 1,
        17: 1,
        18: 1,
        37: 1,
        38: 1,
        39: 1,
        40: 1,
        13: 1
      },
      getPosition: function (e, t) {
        if (e === t) return 0;
        var n = void 0,
          a = [e],
          r = [t];
        for (n = e; n = n.parentNode;) {
          if (n === t) return 10;
          a.push(n)
        }
        for (n = t; n = n.parentNode;) {
          if (n === e) return 20;
          r.push(n)
        }
        if (a.reverse(), r.reverse(), a[0] !== r[0]) return 1;
        for (var i = -1; i++, a[i] === r[i];);
        for (e = a[i], t = r[i]; e = e.nextSibling;)
          if (e === t) return 4;
        return 2
      },
      getNodeIndex: function (e, t) {
        for (var n = e, a = 0; n = n.previousSibling;) t && 3 == n.nodeType ? n.nodeType != n.nextSibling.nodeType && a++ : a++;
        return a
      },
      inDoc: function (e, t) {
        return 10 == _.getPosition(e, t)
      },
      findParent: function (e, t, n) {
        if (e && !_.isBody(e))
          for (e = n ? e : e.parentNode; e;) {
            if (!t || t(e) || _.isBody(e)) return t && !t(e) && _.isBody(e) ? null : e;
            e = e.parentNode
          }
        return null
      },
      findParentByTagName: function (e, t, n, a) {
        return t = d["default"].listToMap(d["default"].isArray(t) ? t : [t]), _.findParent(e, function (e) {
          return t[e.tagName] && !(a && a(e))
        }, n)
      },
      findParents: function (e, t, n, a) {
        for (var r = t && (n && n(e) || !n) ? [e] : []; e = _.findParent(e, n);) r.push(e);
        return a ? r : r.reverse()
      },
      insertAfter: function (e, t) {
        return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)
      },
      remove: function (e, t, n) {
        if (n || !_.hasClassWithStart(e, "krcd-")) {
          var a = e.parentNode,
            r = void 0;
          if (a) {
            if (t && e.hasChildNodes())
              for (; r = e.firstChild;) a.insertBefore(r, e);
            a.removeChild(e)
          }
          return e
        }
      },
      getNextDomNode: function (e, t, n, a) {
        return m(e, "firstChild", "nextSibling", t, n, a)
      },
      getPreDomNode: function (e, t, n, a) {
        return m(e, "lastChild", "previousSibling", t, n, a)
      },
      isBookmarkNode: function (e) {
        return 1 == e.nodeType && e.id && /^_baidu_bookmark_/i.test(e.id)
      },
      getWindow: function (e) {
        var t = e.ownerDocument || e;
        return t.defaultView || t.parentWindow
      },
      getCommonAncestor: function (e, t) {
        if (e === t) return e;
        for (var n = [e], a = [t], r = e, i = -1; r = r.parentNode;) {
          if (r === t) return r;
          n.push(r)
        }
        for (r = t; r = r.parentNode;) {
          if (r === e) return r;
          a.push(r)
        }
        for (n.reverse(), a.reverse(); i++, n[i] === a[i];);
        return 0 == i ? null : n[i - 1]
      },
      clearEmptySibling: function (e, t, n) {
        function a(e, t) {
          for (var n = void 0; e && !_.isBookmarkNode(e) && (_.isEmptyInlineElement(e) || !new RegExp("[^\t\n\r" + _.fillChar + "]").test(e.nodeValue));) n = e[t], _.remove(e), e = n
        }!t && a(e.nextSibling, "nextSibling"), !n && a(e.previousSibling, "previousSibling")
      },
      split: function (e, t) {
        var n = e.ownerDocument;
        if (o["default"].ie && t == e.nodeValue.length) {
          var a = n.createTextNode("");
          return _.insertAfter(e, a)
        }
        var r = e.splitText(t);
        if (o["default"].ie8) {
          var i = n.createTextNode("");
          _.insertAfter(r, i), _.remove(i)
        }
        return r
      },
      isWhitespace: function (e) {
        return !new RegExp("[^ \t\n\r" + _.fillChar + "]").test(e.nodeValue)
      },
      getXY: function (e) {
        for (var t = 0, n = 0; e.offsetParent;) n += e.offsetTop, t += e.offsetLeft, e = e.offsetParent;
        return {
          x: t,
          y: n
        }
      },
      on: function (e, t, n) {
        var a = d["default"].isArray(t) ? t : d["default"].trim(t).split(/\s+/),
          r = a.length;
        if (r)
          for (; r--;)
            if (t = a[r], e.addEventListener) e.addEventListener(t, n, !1);
            else {
              n._d || (n._d = {
                els: []
              });
              var i = t + n.toString(),
                o = d["default"].indexOf(n._d.els, e);
              n._d[i] && -1 != o || (-1 == o && n._d.els.push(e), n._d[i] || (n._d[i] = function (e) {
                return n.call(e.srcElement, e || window.event)
              }), e.attachEvent("on" + t, n._d[i]))
            } e = null
      },
      un: function (e, t, n) {
        var a = d["default"].isArray(t) ? t : d["default"].trim(t).split(/\s+/),
          r = a.length;
        if (r)
          for (; r--;)
            if (t = a[r], e.removeEventListener) e.removeEventListener(t, n, !1);
            else {
              var i = t + n.toString();
              try {
                e.detachEvent("on" + t, n._d ? n._d[i] : n)
              } catch (s) {}
              if (n._d && n._d[i]) {
                var o = d["default"].indexOf(n._d.els, e); - 1 != o && n._d.els.splice(o, 1), 0 == n._d.els.length && delete n._d[i]
              }
            }
      },
      isSameElement: function (e, t) {
        if (e.tagName != t.tagName) return !1;
        var n = e.attributes,
          a = t.attributes;
        if (!c && n.length != a.length) return !1;
        for (var r = void 0, o = void 0, s = 0, d = 0, l = 0; r = n[l++];) {
          if ("style" == r.nodeName) {
            if (r.specified && s++, _.isSameStyle(e, t)) continue;
            return !1
          }
          if (c) {
            if (!r.specified) continue;
            s++, o = a.getNamedItem(r.nodeName)
          } else o = t.attributes[r.nodeName];
          if (!o.specified || r.nodeValue != o.nodeValue) return !1
        }
        if (c) {
          for (i = 0; o = a[i++];) o.specified && d++;
          if (s != d) return !1
        }
        return !0
      },
      isSameStyle: function (e, t) {
        var n = e.style.cssText.replace(/( ?; ?)/g, ";").replace(/( ?: ?)/g, ":"),
          a = t.style.cssText.replace(/( ?; ?)/g, ";").replace(/( ?: ?)/g, ":");
        if (o["default"].opera) {
          if (n = e.style, a = t.style, n.length != a.length) return !1;
          for (var r in n)
            if (!/^(\d+|csstext)$/i.test(r) && n[r] != a[r]) return !1;
          return !0
        }
        if (!n || !a) return n == a;
        if (n = n.split(";"), a = a.split(";"), n.length != a.length) return !1;
        for (var i, s = 0; i = n[s++];)
          if (-1 == d["default"].indexOf(a, i)) return !1;
        return !0
      },
      isBlockElm: function (e) {
        return 1 == e.nodeType && (u["default"].$block[e.tagName] || f[_.getComputedStyle(e, "display")]) && !u["default"].$nonChild[e.tagName]
      },
      isBody: function (e) {
        return e && 1 == e.nodeType && "body" == e.tagName.toLowerCase()
      },
      breakParent: function (e, t) {
        var n = void 0,
          a = e,
          r = e,
          i = void 0,
          o = void 0;
        do {
          for (a = a.parentNode, i ? (n = a.cloneNode(!1), n.appendChild(i), i = n, n = a.cloneNode(!1), n.appendChild(o), o = n) : (i = a.cloneNode(!1), o = i.cloneNode(!1)); n = r.previousSibling;) i.insertBefore(n, i.firstChild);
          for (; n = r.nextSibling;) o.appendChild(n);
          r = a
        } while (t !== a);
        return n = t.parentNode, n.insertBefore(i, t), n.insertBefore(o, t), n.insertBefore(e, o), _.remove(t), e
      },
      isEmptyInlineElement: function (e) {
        if (1 != e.nodeType || !u["default"].$removeEmpty[e.tagName]) return 0;
        for (e = e.firstChild; e;) {
          if (_.isBookmarkNode(e)) return 0;
          if (1 == e.nodeType && !_.isEmptyInlineElement(e) || 3 == e.nodeType && !_.isWhitespace(e)) return 0;
          e = e.nextSibling
        }
        return 1
      },
      trimWhiteTextNode: function (e) {
        function t(t) {
          for (var n = void 0;
            (n = e[t]) && 3 == n.nodeType && _.isWhitespace(n);) e.removeChild(n)
        }
        t("firstChild"), t("lastChild")
      },
      mergeChild: function (e, t, n) {
        for (var a, r = _.getElementsByTagName(e, e.tagName.toLowerCase()), i = 0; a = r[i++];)
          if (a.parentNode && !_.isBookmarkNode(a))
            if ("span" != a.tagName.toLowerCase()) _.isSameElement(e, a) && _.remove(a, !0);
            else {
              if (e === a.parentNode && (_.trimWhiteTextNode(e), 1 == e.childNodes.length)) {
                e.style.cssText = a.style.cssText + ";" + e.style.cssText, _.remove(a, !0);
                continue
              }
              if (a.style.cssText = e.style.cssText + ";" + a.style.cssText, n) {
                var o = n.style;
                if (o) {
                  o = o.split(";");
                  for (var s, l = 0; s = o[l++];) a.style[d["default"].cssStyleToDomStyle(s.split(":")[0])] = s.split(":")[1]
                }
              }
              _.isSameStyle(a, e) && _.remove(a, !0)
            }
      },
      getElementsByTagName: function (e, t, n) {
        if (n && d["default"].isString(n)) {
          var a = n;
          n = function (e) {
            return _.hasClass(e, a)
          }
        }
        t = d["default"].trim(t).replace(/[ ]{2,}/g, " ").split(" ");
        for (var r, i = [], o = 0; r = t[o++];)
          for (var s, l = e.getElementsByTagName(r), u = 0; s = l[u++];) n && !n(s) || i.push(s);
        return i
      },
      mergeToParent: function (e) {
        for (var t = e.parentNode; t && u["default"].$removeEmpty[t.tagName];) {
          if (t.tagName == e.tagName || "A" == t.tagName) {
            if (_.trimWhiteTextNode(t), "SPAN" == t.tagName && !_.isSameStyle(t, e) || "A" == t.tagName && "SPAN" == e.tagName) {
              if (t.childNodes.length > 1 || t !== e.parentNode) {
                e.style.cssText = t.style.cssText + ";" + e.style.cssText, t = t.parentNode;
                continue
              }
              t.style.cssText += ";" + e.style.cssText, "A" == t.tagName && (t.style.textDecoration = "underline")
            }
            if ("A" != t.tagName) {
              t === e.parentNode && _.remove(e, !0);
              break
            }
          }
          t = t.parentNode
        }
      },
      mergeSibling: function (e, t, n) {
        function a(e, t, n) {
          var a = void 0;
          if ((a = n[e]) && !_.isBookmarkNode(a) && 1 == a.nodeType && _.isSameElement(n, a)) {
            for (; a.firstChild;) "firstChild" == t ? n.insertBefore(a.lastChild, n.firstChild) : n.appendChild(a.firstChild);
            _.remove(a)
          }
        }!t && a("previousSibling", "firstChild", e), !n && a("nextSibling", "lastChild", e)
      },
      unSelectable: c && o["default"].ie9below || o["default"].opera ? function (e) {
        e.onselectstart = function () {
          return !1
        }, e.onclick = e.onkeyup = e.onkeydown = function () {
          return !1
        }, e.unselectable = "on", e.setAttribute("unselectable", "on");
        for (var t, n = 0; t = e.all[n++];) switch (t.tagName.toLowerCase()) {
          case "iframe":
          case "textarea":
          case "input":
          case "select":
            break;
          default:
            t.unselectable = "on", e.setAttribute("unselectable", "on")
        }
      } : function (e) {
        e.style.MozUserSelect = e.style.webkitUserSelect = e.style.msUserSelect = e.style.KhtmlUserSelect = "none"
      },
      removeAttributes: function (e, t) {
        if (!e || !_.hasClassWithStart(e, "krcd-")) {
          t = d["default"].isArray(t) ? t : d["default"].trim(t).replace(/[ ]{2,}/g, " ").split(" ");
          for (var n, a = 0; n = t[a++];) {
            switch (n = h[n] || n) {
              case "className":
                e[n] = "";
                break;
              case "style":
                e.style.cssText = "";
                var r = e.getAttributeNode("style");
                !o["default"].ie && r && e.removeAttributeNode(r)
            }
            e.removeAttribute(n)
          }
        }
      },
      createElement: function (e, t, n) {
        return _.setAttributes(e.createElement(t), n)
      },
      setAttributes: function (e, t) {
        for (var n in t)
          if (t.hasOwnProperty(n)) {
            var a = t[n];
            switch (n) {
              case "class":
                e.className = a;
                break;
              case "style":
                e.style.cssText = e.style.cssText + ";" + a;
                break;
              case "innerHTML":
                e[n] = a;
                break;
              case "value":
                e.value = a;
                break;
              default:
                e.setAttribute(h[n] || n, a)
            }
          } return e
      },
      getComputedStyle: function (e, t) {
        if ("width height top left".indexOf(t) > -1) return e["offset" + t.replace(/^\w/, function (e) {
          return e.toUpperCase()
        })] + "px";
        if (3 == e.nodeType && (e = e.parentNode), o["default"].ie && o["default"].version < 9 && "font-size" == t && !e.style.fontSize && !u["default"].$empty[e.tagName] && !u["default"].$nonChild[e.tagName]) {
          var n = e.ownerDocument.createElement("span");
          n.style.cssText = "padding:0;border:0;font-family:simsun;", n.innerHTML = ".", e.appendChild(n);
          var a = n.offsetHeight;
          return e.removeChild(n), n = null, a + "px"
        }
        try {
          _.getStyle(e, t) || (window.getComputedStyle ? _.getWindow(e).getComputedStyle(e, "").getPropertyValue(t) : (e.currentStyle || e.style)[d["default"].cssStyleToDomStyle(t)])
        } catch (r) {
          return ""
        }
        return d["default"].transUnitToPx(d["default"].fixColor(t, value))
      },
      removeClasses: function (e, t) {
        t = d["default"].isArray(t) ? t : d["default"].trim(t).replace(/[ ]{2,}/g, " ").split(" ");
        for (var n, a = e.className, r = 0; n = t[r++];) a = a.replace(new RegExp("\\b" + n + "\\b"), "");
        a = d["default"].trim(a).replace(/[ ]{2,}/g, " "), a ? e.className = a : _.removeAttributes(e, ["class"])
      },
      addClass: function (e, t) {
        if (e) {
          t = d["default"].trim(t).replace(/[ ]{2,}/g, " ").split(" ");
          for (var n, a = e.className, r = 0; n = t[r++];) new RegExp("\\b" + n + "\\b").test(a) || (a += " " + n);
          e.className = d["default"].trim(a)
        }
      },
      hasClass: function (e, t) {
        if (d["default"].isRegExp(t)) return t.test(e.className);
        t = d["default"].trim(t).replace(/[ ]{2,}/g, " ").split(" ");
        var n = void 0,
          a = void 0,
          r = void 0;
        for (n = 0, r = e.className; a = t[n++];)
          if (!new RegExp("\\b" + a + "\\b", "i").test(r)) return !1;
        return n - 1 == t.length
      },
      hasClassWithStart: function (e, t) {
        if (d["default"].isRegExp(t)) return t.test(e.className);
        t = d["default"].trim(t).replace(/[ ]{2,}/g, " ").split(" ");
        var n = void 0,
          a = void 0,
          r = void 0;
        for (n = 0, r = e.className; a = t[n++];)
          if (!new RegExp("\\b" + a, "i").test(r)) return !1;
        return n - 1 == t.length
      },
      preventDefault: function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
      },
      stopPropagation: function (e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
      },
      removeStyle: function (e, t) {
        o["default"].ie ? ("color" == t && (t = "(^|;)" + t), e.style.cssText = e.style.cssText.replace(new RegExp(t + "[^:]*:[^;]+;?", "ig"), "")) : e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(d["default"].cssStyleToDomStyle(t)), e.style.cssText || _.removeAttributes(e, ["style"])
      },
      getStyle: function (e, t) {
        var n = e.style[d["default"].cssStyleToDomStyle(t)];
        return d["default"].fixColor(t, n)
      },
      setStyle: function (e, t, n) {
        e.style[d["default"].cssStyleToDomStyle(t)] = n, d["default"].trim(e.style.cssText) || this.removeAttributes(e, "style")
      },
      setStyles: function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && _.setStyle(e, n, t[n])
      },
      removeDirtyAttr: function (e) {
        for (var t, n = 0, a = e.getElementsByTagName("*"); t = a[n++];) t.removeAttribute("_moz_dirty");
        e.removeAttribute("_moz_dirty")
      },
      getChildCount: function (e, t) {
        var n = 0,
          a = e.firstChild;
        for (t = t || function () {
            return 1
          }; a;) t(a) && n++, a = a.nextSibling;
        return n
      },
      isEmptyNode: function (e) {
        return !e.firstChild || 0 == _.getChildCount(e, function (e) {
          return !_.isBr(e) && !_.isBookmarkNode(e) && !_.isWhitespace(e)
        })
      },
      clearSelectedArr: function (e) {
        for (var t = void 0; t = e.pop();) _.removeAttributes(t, ["class"])
      },
      scrollToView: function (e, t, n) {
        var a = function () {
            var e = t.document,
              n = "CSS1Compat" == e.compatMode;
            return {
              width: (n ? e.documentElement.clientWidth : e.body.clientWidth) || 0,
              height: (n ? e.documentElement.clientHeight : e.body.clientHeight) || 0
            }
          }().height,
          r = -1 * a + n;
        r += e.offsetHeight || 0, r += _.getXY(e).y;
        var i = function (e) {
          if ("pageXOffset" in e) return {
            x: e.pageXOffset || 0,
            y: e.pageYOffset || 0
          };
          var t = e.document;
          return {
            x: t.documentElement.scrollLeft || t.body.scrollLeft || 0,
            y: t.documentElement.scrollTop || t.body.scrollTop || 0
          }
        }(t).y;
        (r > i || r < i - a) && t.scrollTo(0, r + (r < 0 ? -20 : 20))
      },
      isBr: function (e) {
        return 1 == e.nodeType && "BR" == e.tagName
      },
      isFillChar: function (e, t) {
        if (3 != e.nodeType) return !1;
        var n = e.nodeValue;
        return t ? new RegExp("^" + _.fillChar).test(n) : !n.replace(new RegExp(_.fillChar, "g"), "").length
      },
      isStartInblock: function (e) {
        var t = e.cloneRange(),
          n = 0,
          a = t.startContainer,
          r = void 0;
        if (1 == a.nodeType && a.childNodes[t.startOffset]) {
          a = a.childNodes[t.startOffset];
          for (var i = a.previousSibling; i && _.isFillChar(i);) a = i, i = i.previousSibling
        }
        for (this.isFillChar(a, !0) && 1 == t.startOffset && (t.setStartBefore(a), a = t.startContainer); a && _.isFillChar(a);) r = a, a = a.previousSibling;
        for (r && (t.setStartBefore(r), a = t.startContainer), 1 == a.nodeType && _.isEmptyNode(a) && 1 == t.startOffset && t.setStart(a, 0).collapse(!0); !t.startOffset;) {
          if (a = t.startContainer, _.isBlockElm(a) || _.isBody(a)) {
            n = 1;
            break
          }
          var o = t.startContainer.previousSibling,
            s = void 0;
          if (o) {
            for (; o && _.isFillChar(o);) s = o, o = o.previousSibling;
            s ? t.setStartBefore(s) : t.setStartBefore(t.startContainer)
          } else t.setStartBefore(t.startContainer)
        }
        return n && !_.isBody(t.startContainer) ? 1 : 0
      },
      isEmptyBlock: function (e, t) {
        if (1 != e.nodeType) return 0;
        if (t = t || new RegExp("[  \t\r\n" + _.fillChar + "]", "g"), e[o["default"].ie ? "innerText" : "textContent"].replace(t, "").length > 0) return 0;
        for (var n in u["default"].$isNotEmpty)
          if (e.getElementsByTagName(n).length) return 0;
        return 1
      },
      setViewportOffset: function (e, t) {
        var n = 0 | parseInt(e.style.left),
          a = 0 | parseInt(e.style.top),
          r = e.getBoundingClientRect(),
          i = t.left - r.left,
          o = t.top - r.top;
        i && (e.style.left = n + i + "px"), o && (e.style.top = a + o + "px")
      },
      fillNode: function (e, t) {
        var n = o["default"].ie ? e.createTextNode(_.fillChar) : e.createElement("br");
        t.innerHTML = "", t.appendChild(n)
      },
      moveChild: function (e, t, n) {
        for (; e.firstChild;) n && t.firstChild ? t.insertBefore(e.lastChild, t.firstChild) : t.appendChild(e.firstChild)
      },
      hasNoAttributes: function (e) {
        return o["default"].ie ? /^<\w+\s*?>/.test(e.outerHTML) : 0 == e.attributes.length
      },
      isCustomeNode: function (e) {
        return 1 == e.nodeType && e.getAttribute("_ue_custom_node_")
      },
      isTagNode: function (e, t) {
        return 1 == e.nodeType && new RegExp("\\b" + e.tagName + "\\b", "i").test(t)
      },
      filterNodeList: function (e, t, n) {
        var a = [];
        if (!d["default"].isFunction(t)) {
          var r = t;
          t = function (e) {
            return -1 != d["default"].indexOf(d["default"].isArray(r) ? r : r.split(" "), e.tagName.toLowerCase())
          }
        }
        return d["default"].each(e, function (e) {
          t(e) && a.push(e)
        }), 0 == a.length ? null : 1 != a.length && n ? a : a[0]
      },
      isInNodeEndBoundary: function (e, t) {
        var n = e.startContainer;
        if (3 == n.nodeType && e.startOffset != n.nodeValue.length) return 0;
        if (1 == n.nodeType && e.startOffset != n.childNodes.length) return 0;
        for (; n !== t;) {
          if (n.nextSibling) return 0;
          n = n.parentNode
        }
        return 1
      },
      isBoundaryNode: function (e, t) {
        for (var n = void 0; !_.isBody(e);)
          if (n = e, e = e.parentNode, n !== e[t]) return !1;
        return !0
      },
      fillHtml: o["default"].ie11below ? "&nbsp;" : "<br/>"
    };
  e.exports = _
}, , function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(3),
    i = a(r),
    o = n(508),
    s = a(o),
    d = i["default"].extend;
  e.exports = d({}, window.UE ? window.UE.keymap : s["default"])
}, function (e, t, n) {
  "use strict";
  var a = n(215)(!0);
  n(61)(String, "String", function (e) {
    this._t = String(e), this._i = 0
  }, function () {
    var e, t = this._t,
      n = this._i;
    return n >= t.length ? {
      value: undefined,
      done: !0
    } : (e = a(t, n), this._i += e.length, {
      value: e,
      done: !1
    })
  })
}, function (e, t, n) {
  var a = n(39),
    r = Math.min;
  e.exports = function (e) {
    return e > 0 ? r(a(e), 9007199254740991) : 0
  }
}, function (e, t, n) {
  var a = n(6).document;
  e.exports = a && a.documentElement
}, function (e, t, n) {
  n(223);
  for (var a = n(6), r = n(17), i = n(30), o = n(9)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), d = 0; d < s.length; d++) {
    var l = s[d],
      u = a[l],
      c = u && u.prototype;
    c && !c[o] && r(c, o, l), i[l] = i.Array
  }
}, function (e, t) {}, function (e, t) {
  var n;
  n = function () {
    return this
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this")
  } catch (a) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(7),
    i = a(r),
    o = n(3),
    s = a(o),
    d = n(4),
    l = function (e, t, n) {
      t = t.toLowerCase();
      try {
        var a = (e[d.kernel] ? e[d.kernel][d.__allListeners] : null) || e[d.__allListeners];
        return (a || n && (a = {})) && (a[t] || n && (a[t] = []))
      } catch (r) {
        return []
      }
    },
    u = function () {
      function e(t) {
        (0, i["default"])(this, e), t = t || {}, this[d.__allListeners] = t
      }
      return e.prototype.addListener = function (e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
        e = s["default"].trim(e).split(/\s+/);
        for (var a, r = 0; a = e[r++];) {
          var i = l(this, a, n);
          i ? i.push(t) : console.warn("系统未定义 [" + a + "] 事件！")
        }
      }, e.prototype.createListener = function (e, t) {
        e = s["default"].trim(e).split(/\s+/);
        for (var n, a = 0; n = e[a++];) {
          l(this, n, !1) ? console.warn("系统已存在 [" + n + "] 事件！") : (this[d.__allListeners][n] = [], t && this[d.__allListeners][n].push(t))
        }
      }, e.prototype.on = function (e, t) {
        return this.addListener(e, t)
      }, e.prototype.off = function (e, t) {
        return this.removeListener(e, t)
      }, e.prototype.trigger = function () {
        return this.fireEvent.apply(this, arguments)
      }, e.prototype.removeListener = function (e, t) {
        e = s["default"].trim(e).split(/\s+/);
        for (var n, a = 0; n = e[a++];) s["default"].removeItem(l(this, n) || [], t)
      }, e.prototype.fireEvent = function (e) {
        e = s["default"].trim(e).split(/\s+/);
        for (var t = void 0, n = arguments.length, a = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) a[r - 1] = arguments[r];
        for (var i, o = 0; i = e[o++];) {
          var d = l(this, i),
            u = void 0,
            c = void 0;
          if (d)
            for (c = d.length; c--;)
              if (d[c]) {
                if (!0 === (u = d[c].apply(this, a))) return u;
                u !== undefined && (t = u)
              }(u = this["on" + i.toLowerCase()]) && (t = u.apply(this, a))
        }
        return t
      }, e
    }();
  e.exports = u
}, function (e, t, n) {
  "use strict";
  var a = n(51),
    r = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }(a),
    i = function () {
      function e(e) {
        for (var t in e) e[t.toUpperCase()] = e[t];
        return e
      }
      var t = r["default"].extend2,
        n = e({
          isindex: 1,
          fieldset: 1
        }),
        a = e({
          input: 1,
          button: 1,
          select: 1,
          textarea: 1,
          label: 1
        }),
        i = t(e({
          a: 1
        }), a),
        o = t({
          iframe: 1
        }, i),
        s = e({
          hr: 1,
          ul: 1,
          menu: 1,
          div: 1,
          blockquote: 1,
          noscript: 1,
          table: 1,
          center: 1,
          address: 1,
          dir: 1,
          pre: 1,
          h5: 1,
          dl: 1,
          h4: 1,
          noframes: 1,
          h6: 1,
          ol: 1,
          h1: 1,
          h3: 1,
          h2: 1
        }),
        d = e({
          ins: 1,
          del: 1,
          script: 1,
          style: 1
        }),
        l = t(e({
          mark: 1,
          b: 1,
          acronym: 1,
          bdo: 1,
          "var": 1,
          "#": 1,
          abbr: 1,
          code: 1,
          br: 1,
          i: 1,
          cite: 1,
          kbd: 1,
          u: 1,
          strike: 1,
          s: 1,
          tt: 1,
          strong: 1,
          q: 1,
          samp: 1,
          em: 1,
          dfn: 1,
          span: 1
        }), d),
        u = t(e({
          sub: 1,
          img: 1,
          embed: 1,
          object: 1,
          sup: 1,
          basefont: 1,
          map: 1,
          applet: 1,
          font: 1,
          big: 1,
          small: 1
        }), l),
        c = t(e({
          p: 1
        }), u),
        m = t(e({
          iframe: 1
        }), u, a),
        h = e({
          img: 1,
          embed: 1,
          noscript: 1,
          br: 1,
          kbd: 1,
          center: 1,
          button: 1,
          basefont: 1,
          h5: 1,
          h4: 1,
          samp: 1,
          h6: 1,
          ol: 1,
          h1: 1,
          h3: 1,
          h2: 1,
          form: 1,
          font: 1,
          "#": 1,
          select: 1,
          menu: 1,
          ins: 1,
          abbr: 1,
          label: 1,
          code: 1,
          table: 1,
          script: 1,
          cite: 1,
          input: 1,
          iframe: 1,
          strong: 1,
          textarea: 1,
          noframes: 1,
          big: 1,
          small: 1,
          span: 1,
          hr: 1,
          sub: 1,
          bdo: 1,
          "var": 1,
          div: 1,
          object: 1,
          sup: 1,
          strike: 1,
          dir: 1,
          map: 1,
          dl: 1,
          applet: 1,
          del: 1,
          isindex: 1,
          fieldset: 1,
          ul: 1,
          b: 1,
          acronym: 1,
          a: 1,
          blockquote: 1,
          i: 1,
          u: 1,
          s: 1,
          tt: 1,
          address: 1,
          q: 1,
          pre: 1,
          p: 1,
          em: 1,
          dfn: 1
        }),
        f = t(e({
          a: 0
        }), m),
        _ = e({
          tr: 1
        }),
        p = e({
          "#": 1
        }),
        y = t(e({
          param: 1
        }), h),
        M = t(e({
          form: 1
        }), n, o, s, c),
        g = e({
          li: 1,
          ol: 1,
          ul: 1
        }),
        v = e({
          style: 1,
          script: 1
        }),
        T = e({
          base: 1,
          link: 1,
          meta: 1,
          title: 1
        }),
        b = t(T, v),
        S = e({
          head: 1,
          body: 1
        }),
        L = e({
          html: 1
        }),
        w = e({
          address: 1,
          blockquote: 1,
          center: 1,
          dir: 1,
          div: 1,
          dl: 1,
          fieldset: 1,
          form: 1,
          h1: 1,
          h2: 1,
          h3: 1,
          h4: 1,
          h5: 1,
          h6: 1,
          hr: 1,
          isindex: 1,
          menu: 1,
          noframes: 1,
          ol: 1,
          p: 1,
          pre: 1,
          table: 1,
          ul: 1
        }),
        D = e({
          area: 1,
          base: 1,
          basefont: 1,
          br: 1,
          col: 1,
          command: 1,
          dialog: 1,
          embed: 1,
          hr: 1,
          img: 1,
          input: 1,
          isindex: 1,
          keygen: 1,
          link: 1,
          meta: 1,
          param: 1,
          source: 1,
          track: 1,
          wbr: 1
        });
      return e({
        $nonBodyContent: t(L, S, T),
        $block: w,
        $inline: f,
        $inlineWithA: t(e({
          a: 1
        }), f),
        $body: t(e({
          script: 1,
          style: 1
        }), w),
        $cdata: e({
          script: 1,
          style: 1
        }),
        $empty: D,
        $nonChild: e({
          iframe: 1,
          textarea: 1
        }),
        $listItem: e({
          dd: 1,
          dt: 1,
          li: 1
        }),
        $list: e({
          ul: 1,
          ol: 1,
          dl: 1
        }),
        $isNotEmpty: e({
          table: 1,
          ul: 1,
          ol: 1,
          dl: 1,
          iframe: 1,
          area: 1,
          base: 1,
          col: 1,
          hr: 1,
          img: 1,
          embed: 1,
          input: 1,
          textarea: 1,
          link: 1,
          meta: 1,
          param: 1,
          h1: 1,
          h2: 1,
          h3: 1,
          h4: 1,
          h5: 1,
          h6: 1
        }),
        $removeEmpty: e({
          a: 1,
          abbr: 1,
          acronym: 1,
          address: 1,
          b: 1,
          bdo: 1,
          big: 1,
          cite: 1,
          code: 1,
          del: 1,
          dfn: 1,
          em: 1,
          font: 1,
          i: 1,
          ins: 1,
          label: 1,
          kbd: 1,
          q: 1,
          s: 1,
          samp: 1,
          small: 1,
          span: 1,
          strike: 1,
          strong: 1,
          sub: 1,
          sup: 1,
          tt: 1,
          u: 1,
          "var": 1
        }),
        $removeEmptyBlock: e({
          p: 1,
          div: 1
        }),
        $tableContent: e({
          caption: 1,
          col: 1,
          colgroup: 1,
          tbody: 1,
          td: 1,
          tfoot: 1,
          th: 1,
          thead: 1,
          tr: 1,
          table: 1
        }),
        $notTransContent: e({
          pre: 1,
          script: 1,
          style: 1,
          textarea: 1
        }),
        html: S,
        head: b,
        style: p,
        script: p,
        body: M,
        base: {},
        link: {},
        meta: {},
        title: p,
        col: {},
        tr: e({
          td: 1,
          th: 1
        }),
        img: {},
        embed: {},
        colgroup: e({
          thead: 1,
          col: 1,
          tbody: 1,
          tr: 1,
          tfoot: 1
        }),
        noscript: M,
        td: M,
        br: {},
        th: M,
        center: M,
        kbd: f,
        button: t(c, s),
        basefont: {},
        h5: f,
        h4: f,
        samp: f,
        h6: f,
        ol: g,
        h1: f,
        h3: f,
        option: p,
        h2: f,
        form: t(n, o, s, c),
        select: e({
          optgroup: 1,
          option: 1
        }),
        font: f,
        ins: f,
        menu: g,
        abbr: f,
        label: f,
        table: e({
          thead: 1,
          col: 1,
          tbody: 1,
          tr: 1,
          colgroup: 1,
          caption: 1,
          tfoot: 1
        }),
        code: f,
        tfoot: _,
        cite: f,
        li: M,
        input: {},
        iframe: M,
        strong: f,
        textarea: p,
        noframes: M,
        big: f,
        small: f,
        span: e({
          "#": 1,
          br: 1,
          b: 1,
          strong: 1,
          u: 1,
          i: 1,
          em: 1,
          sub: 1,
          sup: 1,
          strike: 1,
          span: 1
        }),
        hr: f,
        dt: f,
        sub: f,
        optgroup: e({
          option: 1
        }),
        param: {},
        bdo: f,
        "var": f,
        div: M,
        object: y,
        sup: f,
        dd: M,
        strike: f,
        area: {},
        dir: g,
        map: t(e({
          area: 1,
          form: 1,
          p: 1
        }), n, d, s),
        applet: y,
        dl: e({
          dt: 1,
          dd: 1
        }),
        del: f,
        isindex: {},
        fieldset: t(e({
          legend: 1
        }), h),
        thead: _,
        ul: g,
        acronym: f,
        b: f,
        a: t(e({
          a: 1
        }), m),
        blockquote: t(e({
          td: 1,
          tr: 1,
          tbody: 1,
          li: 1
        }), M),
        caption: f,
        i: f,
        u: f,
        tbody: _,
        s: f,
        address: t(o, c),
        tt: f,
        legend: f,
        q: f,
        pre: t(l, i),
        p: t(e({
          a: 1
        }), f),
        em: f,
        dfn: f,
        mark: f
      })
    }();
  e.exports = i
}, , , , , , function (e, t, n) {
  "use strict";
  e.exports = function (e, t) {
    if (!t) return e._backCtrl && e._backCtrl.blur && e._backCtrl.blur(), void(e._backCtrl = null);
    e._backCtrl ? t.isEqual(e._backCtrl) || (e._backCtrl.blur && e._backCtrl.blur(), e._backCtrl = t, e._backCtrl.focus && e._backCtrl.focus()) : (e._backCtrl = t, e._backCtrl.focus && e._backCtrl.focus())
  }
}, function (e, t, n) {
  e.exports = {
    "default": n(214),
    __esModule: !0
  }
}, function (e, t, n) {
  n(199), n(202), e.exports = n(47).f("iterator")
}, function (e, t, n) {
  var a = n(39),
    r = n(40);
  e.exports = function (e) {
    return function (t, n) {
      var i, o, s = String(r(t)),
        d = a(n),
        l = s.length;
      return d < 0 || d >= l ? e ? "" : undefined : (i = s.charCodeAt(d), i < 55296 || i > 56319 || d + 1 === l || (o = s.charCodeAt(d + 1)) < 56320 || o > 57343 ? e ? s.charAt(d) : i : e ? s.slice(d, d + 2) : o - 56320 + (i - 55296 << 10) + 65536)
    }
  }
}, function (e, t, n) {
  "use strict";
  var a = n(42),
    r = n(29),
    i = n(36),
    o = {};
  n(17)(o, n(9)("iterator"), function () {
    return this
  }), e.exports = function (e, t, n) {
    e.prototype = a(o, {
      next: r(1, n)
    }), i(e, t + " Iterator")
  }
}, function (e, t, n) {
  var a = n(18),
    r = n(12),
    i = n(43);
  e.exports = n(19) ? Object.defineProperties : function (e, t) {
    r(e);
    for (var n, o = i(t), s = o.length, d = 0; s > d;) a.f(e, n = o[d++], t[n]);
    return e
  }
}, function (e, t, n) {
  var a = n(35);
  e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
    return "String" == a(e) ? e.split("") : Object(e)
  }
}, function (e, t, n) {
  var a = n(21),
    r = n(200),
    i = n(220);
  e.exports = function (e) {
    return function (t, n, o) {
      var s, d = a(t),
        l = r(d.length),
        u = i(o, l);
      if (e && n != n) {
        for (; l > u;)
          if ((s = d[u++]) != s) return !0
      } else
        for (; l > u; u++)
          if ((e || u in d) && d[u] === n) return e || u || 0;
      return !e && -1
    }
  }
}, function (e, t, n) {
  var a = n(39),
    r = Math.max,
    i = Math.min;
  e.exports = function (e, t) {
    return e = a(e), e < 0 ? r(e + t, 0) : i(e, t)
  }
}, function (e, t, n) {
  var a = n(14),
    r = n(222),
    i = n(44)("IE_PROTO"),
    o = Object.prototype;
  e.exports = Object.getPrototypeOf || function (e) {
    return e = r(e), a(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
  }
}, function (e, t, n) {
  var a = n(40);
  e.exports = function (e) {
    return Object(a(e))
  }
}, function (e, t, n) {
  "use strict";
  var a = n(224),
    r = n(225),
    i = n(30),
    o = n(21);
  e.exports = n(61)(Array, "Array", function (e, t) {
    this._t = o(e), this._i = 0, this._k = t
  }, function () {
    var e = this._t,
      t = this._k,
      n = this._i++;
    return !e || n >= e.length ? (this._t = undefined, r(1)) : "keys" == t ? r(0, n) : "values" == t ? r(0, e[n]) : r(0, [n, e[n]])
  }, "values"), i.Arguments = i.Array, a("keys"), a("values"), a("entries")
}, function (e, t) {
  e.exports = function () {}
}, function (e, t) {
  e.exports = function (e, t) {
    return {
      value: t,
      done: !!e
    }
  }
}, function (e, t, n) {
  n(227), n(203), n(232), n(233), e.exports = n(8).Symbol
}, function (e, t, n) {
  "use strict";
  var a = n(6),
    r = n(14),
    i = n(19),
    o = n(22),
    s = n(63),
    d = n(228).KEY,
    l = n(28),
    u = n(45),
    c = n(36),
    m = n(31),
    h = n(9),
    f = n(47),
    _ = n(49),
    p = n(229),
    y = n(230),
    M = n(12),
    g = n(13),
    v = n(21),
    T = n(41),
    b = n(29),
    S = n(42),
    L = n(231),
    w = n(67),
    D = n(18),
    k = n(43),
    x = w.f,
    Y = D.f,
    C = L.f,
    H = a.Symbol,
    A = a.JSON,
    E = A && A.stringify,
    O = h("_hidden"),
    G = h("toPrimitive"),
    P = {}.propertyIsEnumerable,
    I = u("symbol-registry"),
    N = u("symbols"),
    j = u("op-symbols"),
    W = Object.prototype,
    R = "function" == typeof H,
    F = a.QObject,
    B = !F || !F.prototype || !F.prototype.findChild,
    V = i && l(function () {
      return 7 != S(Y({}, "a", {
        get: function () {
          return Y(this, "a", {
            value: 7
          }).a
        }
      })).a
    }) ? function (e, t, n) {
      var a = x(W, t);
      a && delete W[t], Y(e, t, n), a && e !== W && Y(W, t, a)
    } : Y,
    X = function (e) {
      var t = N[e] = S(H.prototype);
      return t._k = e, t
    },
    U = R && "symbol" == typeof H.iterator ? function (e) {
      return "symbol" == typeof e
    } : function (e) {
      return e instanceof H
    },
    z = function (e, t, n) {
      return e === W && z(j, t, n), M(e), t = T(t, !0), M(n), r(N, t) ? (n.enumerable ? (r(e, O) && e[O][t] && (e[O][t] = !1), n = S(n, {
        enumerable: b(0, !1)
      })) : (r(e, O) || Y(e, O, b(1, {})), e[O][t] = !0), V(e, t, n)) : Y(e, t, n)
    },
    Z = function (e, t) {
      M(e);
      for (var n, a = p(t = v(t)), r = 0, i = a.length; i > r;) z(e, n = a[r++], t[n]);
      return e
    },
    K = function (e, t) {
      return t === undefined ? S(e) : Z(S(e), t)
    },
    J = function (e) {
      var t = P.call(this, e = T(e, !0));
      return !(this === W && r(N, e) && !r(j, e)) && (!(t || !r(this, e) || !r(N, e) || r(this, O) && this[O][e]) || t)
    },
    q = function (e, t) {
      if (e = v(e), t = T(t, !0), e !== W || !r(N, t) || r(j, t)) {
        var n = x(e, t);
        return !n || !r(N, t) || r(e, O) && e[O][t] || (n.enumerable = !0), n
      }
    },
    Q = function (e) {
      for (var t, n = C(v(e)), a = [], i = 0; n.length > i;) r(N, t = n[i++]) || t == O || t == d || a.push(t);
      return a
    },
    ee = function (e) {
      for (var t, n = e === W, a = C(n ? j : v(e)), i = [], o = 0; a.length > o;) !r(N, t = a[o++]) || n && !r(W, t) || i.push(N[t]);
      return i
    };
  R || (H = function () {
    if (this instanceof H) throw TypeError("Symbol is not a constructor!");
    var e = m(arguments.length > 0 ? arguments[0] : undefined),
      t = function (n) {
        this === W && t.call(j, n), r(this, O) && r(this[O], e) && (this[O][e] = !1), V(this, e, b(1, n))
      };
    return i && B && V(W, e, {
      configurable: !0,
      set: t
    }), X(e)
  }, s(H.prototype, "toString", function () {
    return this._k
  }), w.f = q, D.f = z, n(66).f = L.f = Q, n(50).f = J, n(65).f = ee, i && !n(24) && s(W, "propertyIsEnumerable", J, !0), f.f = function (e) {
    return X(h(e))
  }), o(o.G + o.W + o.F * !R, {
    Symbol: H
  });
  for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) h(te[ne++]);
  for (var ae = k(h.store), re = 0; ae.length > re;) _(ae[re++]);
  o(o.S + o.F * !R, "Symbol", {
    "for": function (e) {
      return r(I, e += "") ? I[e] : I[e] = H(e)
    },
    keyFor: function (e) {
      if (!U(e)) throw TypeError(e + " is not a symbol!");
      for (var t in I)
        if (I[t] === e) return t
    },
    useSetter: function () {
      B = !0
    },
    useSimple: function () {
      B = !1
    }
  }), o(o.S + o.F * !R, "Object", {
    create: K,
    defineProperty: z,
    defineProperties: Z,
    getOwnPropertyDescriptor: q,
    getOwnPropertyNames: Q,
    getOwnPropertySymbols: ee
  }), A && o(o.S + o.F * (!R || l(function () {
    var e = H();
    return "[null]" != E([e]) || "{}" != E({
      a: e
    }) || "{}" != E(Object(e))
  })), "JSON", {
    stringify: function (e) {
      for (var t, n, a = [e], r = 1; arguments.length > r;) a.push(arguments[r++]);
      if (n = t = a[1], (g(t) || e !== undefined) && !U(e)) return y(t) || (t = function (e, t) {
        if ("function" == typeof n && (t = n.call(this, e, t)), !U(t)) return t
      }), a[1] = t, E.apply(A, a)
    }
  }), H.prototype[G] || n(17)(H.prototype, G, H.prototype.valueOf), c(H, "Symbol"), c(Math, "Math", !0), c(a.JSON, "JSON", !0)
}, function (e, t, n) {
  var a = n(31)("meta"),
    r = n(13),
    i = n(14),
    o = n(18).f,
    s = 0,
    d = Object.isExtensible || function () {
      return !0
    },
    l = !n(28)(function () {
      return d(Object.preventExtensions({}))
    }),
    u = function (e) {
      o(e, a, {
        value: {
          i: "O" + ++s,
          w: {}
        }
      })
    },
    c = function (e, t) {
      if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
      if (!i(e, a)) {
        if (!d(e)) return "F";
        if (!t) return "E";
        u(e)
      }
      return e[a].i
    },
    m = function (e, t) {
      if (!i(e, a)) {
        if (!d(e)) return !0;
        if (!t) return !1;
        u(e)
      }
      return e[a].w
    },
    h = function (e) {
      return l && f.NEED && d(e) && !i(e, a) && u(e), e
    },
    f = e.exports = {
      KEY: a,
      NEED: !1,
      fastKey: c,
      getWeak: m,
      onFreeze: h
    }
}, function (e, t, n) {
  var a = n(43),
    r = n(65),
    i = n(50);
  e.exports = function (e) {
    var t = a(e),
      n = r.f;
    if (n)
      for (var o, s = n(e), d = i.f, l = 0; s.length > l;) d.call(e, o = s[l++]) && t.push(o);
    return t
  }
}, function (e, t, n) {
  var a = n(35);
  e.exports = Array.isArray || function (e) {
    return "Array" == a(e)
  }
}, function (e, t, n) {
  var a = n(21),
    r = n(66).f,
    i = {}.toString,
    o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    s = function (e) {
      try {
        return r(e)
      } catch (t) {
        return o.slice()
      }
    };
  e.exports.f = function (e) {
    return o && "[object Window]" == i.call(e) ? s(e) : r(a(e))
  }
}, function (e, t, n) {
  n(49)("asyncIterator")
}, function (e, t, n) {
  n(49)("observable")
}, function (e, t, n) {
  e.exports = {
    "default": n(235),
    __esModule: !0
  }
}, function (e, t, n) {
  n(236), e.exports = n(8).Object.setPrototypeOf
}, function (e, t, n) {
  var a = n(22);
  a(a.S, "Object", {
    setPrototypeOf: n(237).set
  })
}, function (e, t, n) {
  var a = n(13),
    r = n(12),
    i = function (e, t) {
      if (r(e), !a(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
    };
  e.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, a) {
      try {
        a = n(34)(Function.call, n(67).f(Object.prototype, "__proto__").set, 2), a(e, []), t = !(e instanceof Array)
      } catch (r) {
        t = !0
      }
      return function (e, n) {
        return i(e, n), t ? e.__proto__ = n : a(e, n), e
      }
    }({}, !1) : undefined),
    check: i
  }
}, function (e, t, n) {
  e.exports = {
    "default": n(239),
    __esModule: !0
  }
}, function (e, t, n) {
  n(240);
  var a = n(8).Object;
  e.exports = function (e, t) {
    return a.create(e, t)
  }
}, function (e, t, n) {
  var a = n(22);
  a(a.S, "Object", {
    create: n(42)
  })
}, function (e, t, n) {
  "use strict";
  var a = n(7),
    r = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }(a),
    i = n(4),
    o = function (e) {
      console.error("该KRCD对象中未实现 " + e + " 方法")
    },
    s = function () {
      function e(t) {
        var n = this;
        (0, r["default"])(this, e), this[i.kernel] = t, t.ikrcd = this;
        var a = this;
        ["DESIGN", "EDITOR", "STRICT", "READONLY"].forEach(function (e) {
          a["is" + e + "Mode"] = function () {
            return n[i.kernel]["is" + e + "Mode"]()
          }
        })
      }
      return e.prototype.addListener = function (e, t) {
        if (this[i.kernel].addListener) return this[i.kernel].addListener(e, t);
        o("addListener 不存在！")
      }, e.prototype.createListener = function (e, t) {
        if (this[i.kernel].createListener) return this[i.kernel].createListener(e, t);
        o("createListener 不存在！")
      }, e.prototype.on = function (e, t) {
        if (this[i.kernel].on) return this[i.kernel].on(e, t);
        o("on 不存在！")
      }, e.prototype.off = function (e, t) {
        if (this[i.kernel].off) return this[i.kernel].off(e, t);
        o("off 不存在！")
      }, e.prototype.trigger = function () {
        if (this[i.kernel].trigger) return this[i.kernel].trigger();
        o("trigger 不存在！")
      }, e.prototype.removeListener = function (e, t) {
        if (this[i.kernel].removeListener) return this[i.kernel].removeListener(e, t);
        o("removeListener 不存在！")
      }, e.prototype.fireEvent = function () {
        if (this[i.kernel].fireEvent) return this[i.kernel].fireEvent.apply(this, arguments);
        o("fireEvent 不存在！")
      }, e.prototype.destroy = function () {
        if (this[i.kernel].destroy) return this[i.kernel].destroy();
        o("destroy 不存在！")
      }, e.prototype.insertHTML = function (e) {
        if (this[i.kernel].insertHTML) return this[i.kernel].insertHTML(e);
        o("insertHTML 不存在！")
      }, e.prototype.insertControl = function (e, t) {
        if (this[i.kernel].insertControl) return this[i.kernel].insertControl(e, t);
        o("insertControl 不存在！")
      }, e.prototype.html = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (this[i.kernel].html) return this[i.kernel].html(e);
        o("html 不存在！")
      }, e.prototype.querySelectorAllIframeElement = function (e) {
        if (this[i.kernel].querySelectorAllIframeElement) return this[i.kernel].querySelectorAllIframeElement(e);
        o("querySelectorAllIframeElement 不存在！")
      }, e.prototype.querySelectorIframeElement = function (e) {
        if (this[i.kernel].querySelectorIframeElement) return this[i.kernel].querySelectorIframeElement(e);
        o("querySelectorIframeElement 不存在！")
      }, e.prototype.mode = function () {
        console.log("111")
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (this[i.kernel].mode) return this[i.kernel].mode(e);
        o("mode 不存在！")
      }, e.prototype.setPageHeader = function () {
        if (this[i.kernel].setPageHeader) return this[i.kernel].setPageHeader.apply(this[i.kernel], arguments);
        o("setPageHeader 不存在！")
      }, e.prototype.getPageHeader = function () {
        if (this[i.kernel].getPageHeader) return this[i.kernel].getPageHeader();
        o("getPageHeader 不存在！")
      }, e.prototype.setPageFooter = function () {
        if (this[i.kernel].setPageFooter) return this[i.kernel].setPageFooter.apply(this[i.kernel], arguments);
        o("setPageFooter 不存在！")
      }, e.prototype.getPageFooter = function () {
        if (this[i.kernel].getPageFooter) return this[i.kernel].getPageFooter();
        o("getPageFooter 不存在！")
      }, e.prototype.seniorPrint = function () {
        return "?" === arguments[0] ? void console.log("执行高级打印。其与krcd.execCommand('seniorprint',[opt],[html],[footHtml])相同。\n      opt:打印配置参数，如不填，默认为krcd初始化时的options.print中的配置，如果options.print没有设置，则取krcd默认配置\n      html:要打印的html内容可选，如无则取krcd.html()中的内容。\n      footHtml:底部信息栏。可选，注意该参数不是页脚，而是打印视图中的底部信息栏\n      ") : this[i.kernel].seniorPrint ? this[i.kernel].seniorPrint.apply(this[i.kernel], arguments) : void o("seniorPrint 不存在！")
      }, e.prototype.assistant = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (this[i.kernel].assistant) return this[i.kernel].assistant(e);
        o("assistant 不存在！")
      }, e.prototype.getControlById = function (e) {
        if (this[i.kernel].getControlById) return this[i.kernel].getControlById(e);
        o("getControlById 不存在！")
      }, e.prototype.appendContent = function (e) {
        this[i.kernel].appendContent ? this[i.kernel].appendContent(e) : o("appendContent 不存在！")
      }, e.prototype.getPageHeaderElement = function () {
        if (this[i.kernel].getPageHeaderElement) return this[i.kernel].getPageHeaderElement();
        o("getPageHeaderElement 不存在！")
      }, e.prototype.getPageContentElement = function () {
        if (this[i.kernel].getPageContentElement) return this[i.kernel].getPageContentElement();
        o("getPageContentElement 不存在！")
      }, e.prototype.getPageFooterElement = function () {
        if (this[i.kernel].getPageFooterElement) return this[i.kernel].getPageFooterElement();
        o("getPageFooterElement 不存在！")
      }, e.prototype.getControl = function (e) {
        return console.warn("请使用getControlById方法！"), this.getControlById(e)
      }, e.prototype.getControlByType = function (e) {
        if ("?" === e && console.log("1.  summary，文档节，用于文档折叠，内容分块 效果，鼠标移动上去之后左上角出现编辑功能（设计模式下）\n      2.  section，文档段（多行文本，如主诉）中需要有元素及数据组\n      3.  dataset 数据组，配合控件进行显示 被具体控件内部包含的效果\n      4.  [√]label，标签，可设置在编辑模式下只读，允许脚本赋值\n      5.  [√]text，单行文本\n      6.  [√]select，支持单选、多选模式、自定义内容 --数据组规则多条，里面是具体内容\n      7.  checkbox，复选框\n      8.  radio，单选框\n      9.  [√]date，日期选项\n      10. image，图片\n      11. qrcode，二维码/一维码\n      12. [√]scrawl，涂鸦\n      13. vectordiagram，矢量图\n      14. table，特殊表格\n      15. audio，音频\n      16. video，视频\n      17. button，按钮，动态绑定一些事件\n      18. [√]formula，医学表达式"), this[i.kernel].getControlByType) return this[i.kernel].getControlByType(e);
        o("getControlByType 不存在！")
      }, e.prototype.getControlByEl = function (e) {
        if (this[i.kernel].getControlByEl) return this[i.kernel].getControlByEl(e);
        o("getControlByEl 不存在！")
      }, e.prototype.importXML = function (e) {
        if (this[i.kernel].importXML) return this[i.kernel].importXML(e);
        o("importXML 不存在！")
      }, e.prototype.exportXML = function () {
        if (this[i.kernel].exportXML) return this[i.kernel].exportXML();
        o("exportXML 不存在！")
      }, e.prototype.getJSON = function () {
        if (this[i.kernel].getJSON) return this[i.kernel].getJSON();
        o("getJSON 不存在！")
      }, e.prototype.downloadXML = function () {
        if (this[i.kernel].downloadXML) return this[i.kernel].downloadXML();
        o("downloadXML 不存在！")
      }, e.prototype.createCtrl = function (e, t) {
        if (this[i.kernel].createCtrl) return this[i.kernel].createCtrl(e, t);
        o("createCtrl 不存在！")
      }, e.prototype.execCommand = function () {
        if (this[i.kernel].createCtrl) return this[i.kernel].execCommand.apply(this[i.kernel], arguments);
        o("execCommand 不存在！")
      }, e.prototype.setControl = function () {
        console.error("该方法已被弃用，v4中获取的控件均为一个实例对象，里面自带ctrl.setValue等方法")
      }, e.prototype.setMode = function (e) {
        return this.mode(e)
      }, e.prototype.getArea = function () {
        console.error('该方法已被弃用，请移步 krcd.getControlByType("section")方法')
      }, e.prototype.getTitleControl = function () {
        console.error('该方法已被弃用，请移步 krcd.getControlByType("label")方法')
      }, e.prototype.getCursorControl = function () {
        if (this[i.kernel].getCursorControl) return this[i.kernel].getCursorControl();
        o("getCursorControl 不存在！")
      }, e.prototype.showControl = function () {
        console.error("该方法已被弃用，请移步 ctrl.show()方法")
      }, e.prototype.hideControl = function () {
        console.error("该方法已被弃用，请移步 ctrl.hide()方法")
      }, e.prototype.revise = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (this[i.kernel].revise) return this[i.kernel].revise(e);
        o("revise 不存在！")
      }, e.prototype.selectionUnrevise = function () {
        if (this[i.kernel].selectionUnrevise) return this[i.kernel].selectionUnrevise();
        o("selectionUnrevise 不存在！")
      }, e
    }();
  e.exports = s
}, function (e, t, n) {
  e.exports = {
    "default": n(243),
    __esModule: !0
  }
}, function (e, t, n) {
  var a = n(8),
    r = a.JSON || (a.JSON = {
      stringify: JSON.stringify
    });
  e.exports = function (e) {
    return r.stringify.apply(r, arguments)
  }
}, function (e, t, n) {
  e.exports = n(245)
}, function (e, t, n) {
  "use strict";
  (function (t) {
    function a(e) {
      var t = new o(e),
        n = i(o.prototype.request, t);
      return r.extend(n, o.prototype, t), r.extend(n, t), n
    }
    var r = n(5),
      i = n(68),
      o = n(247),
      s = n(52),
      d = a(s);
    d.Axios = o, d.create = function (e) {
      return a(r.merge(s, e))
    }, d.Cancel = n(72), d.CancelToken = n(261), d.isCancel = n(71), d.all = function (e) {
      return t.all(e)
    }, d.spread = n(262), e.exports = d, e.exports["default"] = d
  }).call(t, n(10))
}, function (e, t) {
  function n(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
  }

  function a(e) {
    return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
  }
  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  e.exports = function (e) {
    return null != e && (n(e) || a(e) || !!e._isBuffer)
  }
}, function (e, t, n) {
  "use strict";
  (function (t) {
    function a(e) {
      this.defaults = e, this.interceptors = {
        request: new o,
        response: new o
      }
    }
    var r = n(52),
      i = n(5),
      o = n(256),
      s = n(257);
    a.prototype.request = function (e) {
      "string" == typeof e && (e = i.merge({
        url: arguments[0]
      }, arguments[1])), e = i.merge(r, {
        method: "get"
      }, this.defaults, e), e.method = e.method.toLowerCase();
      var n = [s, undefined],
        a = t.resolve(e);
      for (this.interceptors.request.forEach(function (e) {
          n.unshift(e.fulfilled, e.rejected)
        }), this.interceptors.response.forEach(function (e) {
          n.push(e.fulfilled, e.rejected)
        }); n.length;) a = a.then(n.shift(), n.shift());
      return a
    }, i.forEach(["delete", "get", "head", "options"], function (e) {
      a.prototype[e] = function (t, n) {
        return this.request(i.merge(n || {}, {
          method: e,
          url: t
        }))
      }
    }), i.forEach(["post", "put", "patch"], function (e) {
      a.prototype[e] = function (t, n, a) {
        return this.request(i.merge(a || {}, {
          method: e,
          url: t,
          data: n
        }))
      }
    }), e.exports = a
  }).call(t, n(10))
}, function (e, t, n) {
  "use strict";
  var a = n(5);
  e.exports = function (e, t) {
    a.forEach(e, function (n, a) {
      a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[a])
    })
  }
}, function (e, t, n) {
  "use strict";
  var a = n(70);
  e.exports = function (e, t, n) {
    var r = n.config.validateStatus;
    n.status && r && !r(n.status) ? t(a("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e, t, n, a, r) {
    return e.config = t, n && (e.code = n), e.request = a, e.response = r, e
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
  }
  var r = n(5);
  e.exports = function (e, t, n) {
    if (!t) return e;
    var i;
    if (n) i = n(t);
    else if (r.isURLSearchParams(t)) i = t.toString();
    else {
      var o = [];
      r.forEach(t, function (e, t) {
        null !== e && void 0 !== e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function (e) {
          r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), o.push(a(t) + "=" + a(e))
        }))
      }), i = o.join("&")
    }
    return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e
  }
}, function (e, t, n) {
  "use strict";
  var a = n(5),
    r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
  e.exports = function (e) {
    var t, n, i, o = {};
    return e ? (a.forEach(e.split("\n"), function (e) {
      if (i = e.indexOf(":"), t = a.trim(e.substr(0, i)).toLowerCase(), n = a.trim(e.substr(i + 1)), t) {
        if (o[t] && r.indexOf(t) >= 0) return;
        o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([n]) : o[t] ? o[t] + ", " + n : n
      }
    }), o) : o
  }
}, function (e, t, n) {
  "use strict";
  var a = n(5);
  e.exports = a.isStandardBrowserEnv() ? function () {
    function e(e) {
      var t = e;
      return n && (r.setAttribute("href", t), t = r.href), r.setAttribute("href", t), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
      }
    }
    var t, n = /(msie|trident)/i.test(navigator.userAgent),
      r = document.createElement("a");
    return t = e(window.location.href),
      function (n) {
        var r = a.isString(n) ? e(n) : n;
        return r.protocol === t.protocol && r.host === t.host
      }
  }() : function () {
    return function () {
      return !0
    }
  }()
}, function (e, t, n) {
  "use strict";

  function a() {
    this.message = "String contains an invalid character"
  }

  function r(e) {
    for (var t, n, r = String(e), o = "", s = 0, d = i; r.charAt(0 | s) || (d = "=", s % 1); o += d.charAt(63 & t >> 8 - s % 1 * 8)) {
      if ((n = r.charCodeAt(s += .75)) > 255) throw new a;
      t = t << 8 | n
    }
    return o
  }
  var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  a.prototype = new Error, a.prototype.code = 5, a.prototype.name = "InvalidCharacterError", e.exports = r
}, function (e, t, n) {
  "use strict";
  var a = n(5);
  e.exports = a.isStandardBrowserEnv() ? function () {
    return {
      write: function (e, t, n, r, i, o) {
        var s = [];
        s.push(e + "=" + encodeURIComponent(t)), a.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), a.isString(r) && s.push("path=" + r), a.isString(i) && s.push("domain=" + i), !0 === o && s.push("secure"), document.cookie = s.join("; ")
      },
      read: function (e) {
        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
      },
      remove: function (e) {
        this.write(e, "", Date.now() - 864e5)
      }
    }
  }() : function () {
    return {
      write: function () {},
      read: function () {
        return null
      },
      remove: function () {}
    }
  }()
}, function (e, t, n) {
  "use strict";

  function a() {
    this.handlers = []
  }
  var r = n(5);
  a.prototype.use = function (e, t) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t
    }), this.handlers.length - 1
  }, a.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null)
  }, a.prototype.forEach = function (e) {
    r.forEach(this.handlers, function (t) {
      null !== t && e(t)
    })
  }, e.exports = a
}, function (e, t, n) {
  "use strict";
  (function (t) {
    function a(e) {
      e.cancelToken && e.cancelToken.throwIfRequested()
    }
    var r = n(5),
      i = n(258),
      o = n(71),
      s = n(52),
      d = n(259),
      l = n(260);
    e.exports = function (e) {
      return a(e), e.baseURL && !d(e.url) && (e.url = l(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
        delete e.headers[t]
      }), (e.adapter || s.adapter)(e).then(function (t) {
        return a(e), t.data = i(t.data, t.headers, e.transformResponse), t
      }, function (n) {
        return o(n) || (a(e), n && n.response && (n.response.data = i(n.response.data, n.response.headers, e.transformResponse))), t.reject(n)
      })
    }
  }).call(t, n(10))
}, function (e, t, n) {
  "use strict";
  var a = n(5);
  e.exports = function (e, t, n) {
    return a.forEach(n, function (n) {
      e = n(e, t)
    }), e
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
  }
}, function (e, t, n) {
  "use strict";
  (function (t) {
    function a(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");
      var n;
      this.promise = new t(function (e) {
        n = e
      });
      var a = this;
      e(function (e) {
        a.reason || (a.reason = new r(e), n(a.reason))
      })
    }
    var r = n(72);
    a.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason
    }, a.source = function () {
      var e;
      return {
        token: new a(function (t) {
          e = t
        }),
        cancel: e
      }
    }, e.exports = a
  }).call(t, n(10))
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
    return function (t) {
      return e.apply(null, t)
    }
  }
}, function (e, t, n) {
  e.exports = n(264)
}, function (e, t, n) {
  var a = n(265);
  e.exports = function (e) {
    var t, n, r = new a(e);
    if ("mobile" === r.device.type || "tablet" === r.device.type) {
      if ((t = e.match(/(ZTE|Samsung|Motorola|HTC|Coolpad|Huawei|Lenovo|LG|Sony Ericsson|Oppo|TCL|Vivo|Sony|Meizu|Nokia)/i)) && (r.device.manufacturer = t[1], r.device.model && r.device.model.indexOf(t[1]) >= 0 && (r.device.model = r.device.model.replace(t[1], ""))), t = e.match(/(iPod|iPad|iPhone)/i)) r.device.manufacturer = "Apple", r.device.model = t[1];
      else if (t = e.match(/[-\s](Galaxy[\s-_]nexus|Galaxy[\s-_]\w*[\s-_]\w*|Galaxy[\s-_]\w*|SM-\w*|GT-\w*|s[cgp]h-\w*|shw-\w*|ATIV|i9070|omnia|s7568|A3000|A3009|A5000|A5009|A7000|A7009|A8000|C101|C1116|C1158|E400|E500F|E7000|E7009|G3139D|G3502|G3502i|G3508|G3508J|G3508i|G3509|G3509i|G3558|G3559|G3568V|G3586V|G3589W|G3606|G3608|G3609|G3812|G388F|G5108|G5108Q|G5109|G5306W|G5308W|G5309W|G550|G600|G7106|G7108|G7108V|G7109|G7200|G720NO|G7508Q|G7509|G8508S|G8509V|G9006V|G9006W|G9008V|G9008W|G9009D|G9009W|G9198|G9200|G9208|G9209|G9250|G9280|I535|I679|I739|I8190N|I8262|I879|I879E|I889|I9000|I9060|I9082|I9082C|I9082i|I9100|I9100G|I9108|I9128|I9128E|I9128i|I9152|I9152P|I9158|I9158P|I9158V|I9168|I9168i|I9190|I9192|I9195|I9195I|I9200|I9208|I9220|I9228|I9260|I9268|I9300|I9300i|I9305|I9308|I9308i|I939|I939D|I939i|I9500|I9502|I9505|I9507V|I9508|I9508V|I959|J100|J110|J5008|J7008|N7100|N7102|N7105|N7108|N7108D|N719|N750|N7505|N7506V|N7508V|N7509V|N900|N9002|N9005|N9006|N9008|N9008S|N9008V|N9009|N9100|N9106W|N9108V|N9109W|N9150|N916|N9200|P709|P709E|P729|S6358|S7278|S7278U|S7562C|S7562i|S7898i|b9388)[\s\)]/i)) r.device.manufacturer = "Samsung", r.device.model = t[1].replace(/Galaxy S VI/i, "Galaxy S6").replace(/Galaxy S V/i, "Galaxy S5").replace(/Galaxy S IV/i, "Galaxy S4").replace(/Galaxy s III/i, "Galaxy S3").replace(/Galaxy S II/i, "Galaxy S2").replace(/Galaxy S I/i, "Galaxy S1").replace(/([a-z]+[0-9]{3})[0-9]?[a-z]*/i, "$1");
      else if (r.device.manufacturer && "samsung" === r.device.manufacturer.toLowerCase() && r.device.model) r.device.model = r.device.model.replace(/Galaxy S VI/i, "Galaxy S6").replace(/Galaxy S V/i, "Galaxy S5").replace(/Galaxy S IV/i, "Galaxy S4").replace(/Galaxy s III/i, "Galaxy S3").replace(/Galaxy S II/i, "Galaxy S2").replace(/Galaxy S I/i, "Galaxy S1").replace(/([a-z]+[0-9]{3})[0-9]?[a-z]*/i, "$1");
      else if (t = e.match(/(Huawei[\s-_](\w*[-_]?\w*)|\s(7D-\w*|ALE-\w*|ATH-\w*|CHE-\w*|CHM-\w*|Che1-\w*|Che2-\w*|D2-\w*|G616-\w*|G620S-\w*|G621-\w*|G660-\w*|G750-\w*|GRA-\w*|Hol-\w*|MT2-\w*|MT7-\w*|PE-\w*|PLK-\w*|SC-\w*|SCL-\w*|H60-\w*|H30-\w*)[\s\)])/i)) r.device.manufacturer = "Huawei", t[2] ? r.device.model = t[2] : t[3] && (r.device.model = t[3]), (t = r.device.model.match(/(\w*)[\s-_]+[a-z0-9]+/i)) && (r.device.model = t[1]);
      else if (t = e.match(/;\s(mi|m1|m2|m3|m4|hm)(\s*\w*)[\s\)]/i))(n = e.match(/(meitu|MediaPad)/i)) ? (r.device.manufacturer = n[1], r.device.model = "") : t[2].length > 0 && !/\s/.test(t[2]) ? (n = t[2].match(/(\d)/i)) && (r.device.model = t[1] + "-" + n[1]) : (r.device.manufacturer = "Xiaomi", t[2] && t[2].length > 0 ? (t[2] = t[2].replace(/\s/, ""), r.device.model = (t[1].substr(t[1].length - 2) + "-" + t[2]).replace(/m(\d)-/i, "MI-$1")) : r.device.model = t[1].substr(t[1].length - 2).replace(/m(\d)/i, "MI-$1"), /(mi|hm)(-\d)/i.test(r.device.model) && ((t = r.device.model.match(/(mi|hm)(-\ds)/i)) ? r.device.model = t[1] + t[2] : (t = r.device.model.match(/(mi|hm)(-\d{2})/i)) ? r.device.model = t[1] : (t = r.device.model.match(/(mi|hm)(-\d)[A-Z]/i)) && (r.device.model = t[1] + t[2])), (t = r.device.model.match(/(mi|hm)(-\dg)/i)) && (r.device.model = t[1]));
      else if (/build\/HM\d{0,7}\)/i.test(e)) r.device.manufacturer = "Xiaomi", r.device.model = "HM";
      else if (t = e.match(/redmi\s?(\d+)?/i)) r.device.manufacturer = "Xiaomi", r.device.model = "HM-" + t[1];
      else if (r.device.manufacturer && "xiaomi" === r.device.manufacturer.toLowerCase() && r.device.model)(t = r.device.model.match(/mi-one/i)) ? r.device.model = "MI-1" : (t = r.device.model.match(/mi-two/i)) ? r.device.model = "MI-2" : (t = r.device.model.match(/\d{6}/i)) ? r.device.model = "" : (t = r.device.model.match(/redmi/i)) ? r.device.model = r.device.model.toUpperCase().replace(/redmi/i, "HM") : (t = r.device.model.match(/(m\d)[\s-_](s?)/i)) ? r.device.model = t[1].replace(/m/, "MI-") + t[2] : (t = r.device.model.match(/(hm|mi)[\s-_](\d?)[a-rt-z]/i)) ? (n = r.device.model.match(/(mi|hm)[\s-_](note|pad)(\d?s?)/i)) ? r.device.model = n[1] + "-" + n[2] + n[3] : r.device.model = t[2] ? t[1] + "-" + t[2] : t[1] : (t = r.device.model.match(/hm/i)) && ((t = r.device.model.match(/(hm)[\s-_](\d{2})/i)) ? r.device.model = "HM" : (t = r.device.model.match(/(hm)[\s-_](\ds)/i)) ? r.device.model = "HM-" + t[2] : (t = r.device.model.match(/(hm)[\s-_](\d)[a-z]/i)) ? r.device.model = "HM-" + t[2] : r.device.model = "HM", /hm-\dg/.test(r.device.model) && (r.device.model = "HM"));
      else if (t = e.match(/(vivo[\s-_](\w*)|\s(E1\w?|E3\w?|E5\w?|V1\w?|V2\w?|S11\w?|S12\w?|S1\w?|S3\w?|S6\w?|S7\w?|S9\w?|X1\w?|X3\w?|X520\w?|X5\w?|X5Max|X5Max+|X5Pro|X5SL|X710F|X710L|Xplay|Xshot|Xpaly3S|Y11\w?|Y11i\w?|Y11i\w?|Y13\w?|Y15\w?|Y17\w?|Y18\w?|Y19\w?|Y1\w?|Y20\w?|Y22\w?|Y22i\w?|Y23\w?|Y27\w?|Y28\w?|Y29\w?|Y33\w?|Y37\w?|Y3\w?|Y613\w?|Y622\w?|Y627\w?|Y913\w?|Y923\w?|Y927\w?|Y928\w?|Y929\w?|Y937\w?)[\s\)])/i)) r.device.manufacturer = "Vivo", r.device.model = t[1], r.device.model = r.device.model.replace(/(viv[\s-_]|vivo[\s-_]|bbg[\s-_])/i, ""), (t = r.device.model.match(/([a-z]+[0-9]+)i?[a-z]?[\s-_]?/i)) && (r.device.model = t[1]);
      else if (t = e.match(/(Oppo[\s-_](\w*)|\s(1100|1105|1107|3000|3005|3007|6607|A100|A103|A105|A105K|A109|A109K|A11|A113|A115|A115K|A121|A125|A127|A129|A201|A203|A209|A31|A31c|A31t|A31u|A51kc|A520|A613|A615|A617|E21W|Find|Mirror|N5110|N5117|N5207|N5209|R2010|R2017|R6007|R7005|R7007|R7c|R7t|R8000|R8007|R801|R805|R807|R809T|R8107|R8109|R811|R811W|R813T|R815T|R815W|R817|R819T|R8200|R8205|R8207|R821T|R823T|R827T|R830|R830S|R831S|R831T|R833T|R850|Real|T703|U2S|U521|U525|U529|U539|U701|U701T|U705T|U705W|X9000|X9007|X903|X905|X9070|X9077|X909|Z101|R829T)[\s\)])/i)) r.device.manufacturer = "Oppo", t[2] ? r.device.model = t[2] : t[3] && (r.device.model = t[3]), (t = r.device.model.match(/([a-z]+[0-9]+)-?(plus)/i)) ? r.device.model = t[1] + "-" + t[2] : (t = r.device.model.match(/(\w*-?[a-z]+[0-9]+)/i)) && (r.device.model = t[1]);
      else if (r.device.manufacturer && "oppo" === r.device.manufacturer.toLowerCase() && r.device.model)(t = r.device.model.match(/([a-z]+[0-9]+)-?(plus)/i)) ? r.device.model = t[1] + "-" + t[2] : (t = r.device.model.match(/(\w*-?[a-z]+[0-9]+)/i)) && (r.device.model = t[1]);
      else if (t = e.match(/(Lenovo[\s-_](\w*[-_]?\w*)|\s(A3580|A3860|A5500|A5600|A5860|A7600|A806|A800|A808T|A808T-I|A936|A938t|A788t|K30-E|K30-T|K30-W|K50-T3s|K50-T5|K80M|K910|K910e|K920|S90-e|S90-t|S90-u|S968T|X2-CU|X2-TO|Z90-3|Z90-7)[\s\)])/i)) r.device.manufacturer = "Lenovo", t[2] ? r.device.model = t[2] : t[3] && (r.device.model = t[3]), (t = r.device.model.match(/([a-z]+[0-9]+)/i)) && (r.device.model = t[1]);
      else if (t = e.match(/(Coolpad[\s-_](\w*)|\s(7295C|7298A|7620L|8908|8085|8970L|9190L|Y80D)[\s\)])/i)) r.device.manufacturer = "Coolpad", t[2] ? r.device.model = t[2] : t[3] && (r.device.model = t[3]), (t = r.device.model.match(/([a-z]?[0-9]+)/i)) && (r.device.model = t[1]);
      else if (r.device.manufacturer && "coolpad" === r.device.manufacturer.toLowerCase() && r.device.model)(t = r.device.model.match(/([a-z]?[0-9]+)/i)) && (r.device.model = t[1]);
      else if (t = e.match(/\s(mx\d*\w*|mz-(\w*))\s(\w*)\s*\w*\s*build/i)) {
        r.device.manufacturer = "Meizu";
        var i = t[2] ? t[2] : t[1];
        t[3] ? r.device.model = i + "-" + t[3] : r.device.model = i + ""
      } else(t = e.match(/M463C|M35\d/i)) ? (r.device.manufacturer = "Meizu", r.device.model = t[1]) : (t = e.match(/(Htc[-_\s](\w*)|\s(601e|606w|608t|609d|610t|6160|619d|620G|626d|626s|626t|626w|709d|801e|802d|802t|802w|809D|816d|816e|816t|816v|816w|826d|826s|826t|826w|828w|901e|919d|A310e|A50AML|A510e|A620d|A620e|A620t|A810e|A9191|Aero|C620d|C620e|C620t|D316d|D516d|D516t|D516w|D820mt|D820mu|D820t|D820ts|D820u|D820us|E9pt|E9pw|E9sw|E9t|HD7S|M8Et|M8Sd|M8St|M8Sw|M8d|M8e|M8s|M8si|M8t|M8w|M9W|M9ew|Phablet|S510b|S510e|S610d|S710d|S710e|S720e|S720t|T327t|T328d|T328t|T328w|T329d|T329t|T329w|T528d|T528t|T528w|T8698|WF5w|X315e|X710e|X715e|X720d|X920e|Z560e|Z710e|Z710t|Z715e)[\s\)])/)) ? (r.device.manufacturer = "Htc", r.device.model = t[1]) : (t = e.match(/(Gionee[\s-_](\w*)|\s(GN\d+\w*)[\s\)])/i)) ? (r.device.manufacturer = "Gionee", t[2] ? r.device.model = t[2] : t[3] && (r.device.model = t[3])) : (t = e.match(/(LG[-_](\w*)|\s(D728|D729|D802|D855|D856|D857|D858|D859|E985T|F100L|F460|H778|H818|H819|P895|VW820)[\s\)])/i)) ? (r.device.manufacturer = "Lg", t[2] ? r.device.model = t[2] : t[3] && (r.device.model = t[3])) : (t = e.match(/(Tcl[\s-_](\w*)|\s(H916T|P588L|P618L|P620M|P728M)[\s\)])/)) ? (r.device.manufacturer = "Tcl", r.device.model = t[1]) : (t = e.match(/(V9180|N918)/i)) ? (r.device.manufacturer = "Zte", r.device.model = t[1]) : r.device.manufacturer && "zte" === r.device.manufacturer.toLowerCase() && r.device.model ? (t = r.device.model.match(/([a-z]?[0-9]+)/i)) && (r.device.model = t[1]) : (t = e.match(/(UIMI\w*|umi\w*)[\s-_](\w*)\s*\w*\s*build/i)) ? (r.device.manufacturer = "Uimi", t[2] ? r.device.model = t[1] + "-" + t[2] : r.device.model = t[1] + "") : (t = e.match(/eton[\s-_](\w*)/i)) ? (r.device.manufacturer = "Eton", r.device.model = t[1]) : (t = e.match(/(SM705|SM701|YQ601|YQ603)/i)) ? (r.device.manufacturer = "Smartisan", r.device.model = {
        SM705: "T1",
        SM701: "T1",
        YQ601: "U1",
        YQ603: "U1"
      } [t[1]] || t[1]) : (t = e.match(/(Asus[\s-_](\w*)|\s(A500CG|A500KL|A501CG|A600CG|PF400CG|PF500KL|T001|X002|X003|ZC500TG|ZE550ML|ZE551ML)[\s\)])/i)) ? (r.device.manufacturer = "Asus", t[2] ? r.device.model = t[2] : t[3] && (r.device.model = t[3])) : (t = e.match(/(Nubia[-_\s](\w*)|(NX501|NX505J|NX506J|NX507J|NX503A|nx\d+\w*)[\s\)])/i)) ? (r.device.manufacturer = "Nubia", t[2] ? r.device.model = t[2] : t[3] && (r.device.model = t[3])) : (t = e.match(/(HT-\w*)|Haier[\s-_](\w*-?\w*)/i)) ? (r.device.manufacturer = "Haier", t[1] ? r.device.model = t[1] : t[2] && (r.device.model = t[2])) : (t = e.match(/K-Touch[\s-_](tou\s?ch\s?(\d)|\w*)/i)) ? (r.device.manufacturer = "K-Touch", t[2] ? r.device.model = "Ktouch" + t[2] : r.device.model = t[1]) : (t = e.match(/Doov[\s-_](\w*)/i)) ? (r.device.manufacturer = "Doov", r.device.model = t[1]) : /koobee/i.test(e) ? r.device.manufacturer = "koobee" : /C69/i.test(e) ? r.device.manufacturer = "Sony" : /N787|N818S/i.test(e) ? r.device.manufacturer = "Haojixing" : (t = e.match(/(hs-|Hisense[\s-_])(\w*)/i)) && (r.device.manufacturer = "Hisense", r.device.model = t[2]);
      r.device.manufacturer && (r.device.manufacturer = r.device.manufacturer.substr(0, 1).toUpperCase() + r.device.manufacturer.substr(1).toLowerCase()), r.device.model && (r.device.model = r.device.model.toUpperCase().replace(/-+|_+|\s+/g, " "), r.device.model = r.device.model.match(/\s*(\w*\s*\w*)/)[1].replace(/\s+/, "-"), "Samsung" === r.device.manufacturer ? r.device.model = {
        "SCH-I95": "GT-I950",
        "SCH-I93": "GT-I930",
        "SCH-I86": "GT-I855",
        "SCH-N71": "GT-N710",
        "SCH-I73": "GT-S789",
        "SCH-P70": "GT-I915"
      } [r.device.model] || r.device.model : "Huawei" === r.device.manufacturer && (r.device.model = {
        CHE1: "CHE",
        CHE2: "CHE",
        G620S: "G621",
        C8817D: "G621"
      } [r.device.model] || r.device.model)), r.device.manufacturer && "Xiaomi" === r.device.manufacturer && ((t = r.device.model.match(/(hm|mi)-(note)/i)) ? r.device.model = t[1] + "-" + t[2] : (t = r.device.model.match(/(hm|mi)-(\ds?)/i)) ? r.device.model = t[1] + "-" + t[2] : (t = r.device.model.match(/(hm|mi)-(\d)[a-rt-z]/i)) && (r.device.model = t[1] + "-" + t[2]))
    }
    if ("desktop" === r.device.type ? (t = /360se(?:[ \/]([\w.]+))?/i.exec(e)) ? (r.browser.name = "360 security Explorer", r.browser.version = {
        original: t[1]
      }) : (t = /the world(?:[ \/]([\w.]+))?/i.exec(e)) ? (r.browser.name = "the world", r.browser.version = {
        original: t[1]
      }) : (t = /tencenttraveler ([\w.]+)/i.exec(e)) ? (r.browser.name = "tencenttraveler", r.browser.version = {
        original: t[1]
      }) : (t = /LBBROWSER/i.exec(e)) && (r.browser.name = "LBBROWSER") : "mobile" !== r.device.type && "tablet" !== r.device.type || ((t = /BaiduHD\s+([\w.]+)/i.exec(e)) ? (r.browser.name = "BaiduHD", r.browser.version = {
        original: t[1]
      }) : (t = /360.s*aphone\s*browser\s*\(version\s*([\w.]+)\)/i.exec(e)) ? (r.browser.name = "360 Browser", r.browser.version = {
        original: t[1]
      }) : (t = /flyflow\/([\w.]+)/i.exec(e)) ? (r.browser.name = "Baidu Browser", r.browser.version = {
        original: t[1]
      }) : (t = /baiduhd ([\w.]+)/i.exec(e)) ? (r.browser.name = "Baidu HD", r.browser.version = {
        original: t[1]
      }) : (t = /baidubrowser\/([\d\.]+)\s/i.exec(e)) ? (r.browser.name = "baidubrowser", r.browser.version = {
        original: t[1]
      }) : (t = /LieBaoFast\/([\w.]+)/i.exec(e)) ? (r.browser.name = "LieBao Fast", r.browser.version = {
        original: t[1]
      }) : (t = /LieBao\/([\w.]+)/i.exec(e)) ? (r.browser.name = "LieBao", r.browser.version = {
        original: t[1]
      }) : (t = /Sogou\w+\/([0-9\.]+)/i.exec(e)) ? (r.browser.name = "SogouMobileBrowser", r.browser.version = {
        original: t[1]
      }) : (t = /bdbrowser\w+\/([0-9\.]+)/i.exec(e)) ? (r.browser.name = "百度国际", r.browser.version = {
        original: t[1]
      }) : "Android" === r.os.name && /safari/i.test(e) && (t = /chrome\/([0-9\.]+)/i.exec(e)) ? (n = e.match(/\s+(\w+Browser)\/?([\d\.]*)/)) ? (r.browser.name = n[1], n[2] ? r.browser.version = {
        original: n[2]
      } : r.browser.version = {
        original: t[1]
      }) : (r.browser.name = "Android Chrome", r.browser.version = {
        original: t[1]
      }) : "Android" === r.os.name && /safari/i.test(e) && (t = /version\/([0-9\.]+)/i.exec(e)) ? (n = e.match(/\s+(\w+Browser)\/?([\d\.]*)/)) ? (r.browser.name = n[1], n[2] ? r.browser.version = {
        original: n[2]
      } : r.browser.version = {
        original: t[1]
      }) : (r.browser.name = "Android Browser", r.browser.version = {
        original: t[1]
      }) : /(ipad|iphone).* applewebkit\/.* mobile/i.test(e) && (r.browser.name = "Safari")), (t = e.match(/baiduboxapp\/?([\d\.]*)/i)) ? (r.browser.name = "百度框", t[1] && (r.browser.version = {
        original: t[1]
      })) : /BaiduLightAppRuntime/i.test(e) ? r.browser.name = "轻应用runtime" : /Weibo/i.test(e) ? r.browser.name = "微博" : /MQQ/i.test(e) ? r.browser.name = "手机QQ" : /hao123/i.test(e) && (r.browser.name = "hao123"), t = /MicroMessenger\/([\w.]+)/i.exec(e)) {
      r.browser.name = "微信";
      var o = t[1].replace(/_/g, ".");
      n = /(\d+\.\d+\.\d+\.\d+)/.exec(o), n && (o = n[1]), r.browser.version = {
        original: o
      }
    }
    return (t = /UCBrowser\/([\w.]+)/i.exec(e)) && (r.browser.name = "UC Browser", r.browser.version = {
      original: t[1]
    }), (t = /OPR\/([\w.]+)/i.exec(e)) ? (r.browser.name = "Opera", r.browser.version = {
      original: t[1]
    }) : (t = /OPiOS\/([\w.]+)/i.exec(e)) ? (r.browser.name = "Opera", r.browser.version = {
      original: t[1]
    }) : /Trident\/7/i.test(e) && /rv:11/i.test(e) ? (r.browser.name = "Internet Explorer", r.browser.version = {
      major: "11",
      original: "11"
    }) : /Edge\/12/i.test(e) && /Windows Phone|Windows NT/i.test(e) ? (r.browser.name = "Microsoft Edge", r.browser.version = {
      major: "12",
      original: "12"
    }) : (t = /miuibrowser\/([\w.]+)/i.exec(e)) && (r.browser.name = "miui browser", r.browser.version = {
      original: t[1]
    }), r.browser.name || (t = /Safari\/([\w.]+)/i.exec(e) && /Version/i.test(e)) && (r.browser.name = "Safari"), r.browser.name && !r.browser.version && (t = /Version\/([\w.]+)/i.exec(e)) && (r.browser.version = {
      original: t[1]
    }), "Windows" === r.os.name || /Windows/i.test(e) ? (r.os.name = "Windows", /NT 6.3/i.test(e) ? r.os.version = {
      alias: "8.1",
      original: "8.1"
    } : (/NT 6.4/i.test(e) || /NT 10.0/i.test(e)) && (r.os.version = {
      alias: "10",
      original: "10"
    })) : "Mac OS X" === r.os.name ? (r.os.name = "Mac OS X", (t = /Mac OS X[\s\_\-\/](\d+[\.\-\_]\d+[\.\-\_]?\d*)/i.exec(e)) ? r.os.version = {
      alias: t[1].replace(/_/g, "."),
      original: t[1].replace(/_/g, ".")
    } : r.os.version = {
      alias: "",
      original: ""
    }) : /Android/i.test(r.os.name) && (t = e.match(/Android[\s\_\-\/i686]?[\s\_\-\/](\d+[\.\-\_]\d+[\.\-\_]?\d*)/i)) && (r.os.version = {
      alias: t[1],
      original: t[1]
    }), r
  }
}, function (e, t) {
  e.exports = function () {
    function e(e) {
      return e = void 0 === e ? "" : e, e = e.replace(/_TD$/, ""), e = e.replace(/_CMCC$/, ""), e = e.replace(/_/g, " "), e = e.replace(/^\s+|\s+$/g, ""), e = e.replace(/\/[^\/]+$/, ""), e = e.replace(/\/[^\/]+ Android\/.*/, ""), e = e.replace(/^tita on /, ""), e = e.replace(/^Android on /, ""), e = e.replace(/^Android for /, ""), e = e.replace(/^ICS AOSP on /, ""), e = e.replace(/^Full AOSP on /, ""), e = e.replace(/^Full Android on /, ""), e = e.replace(/^Full Cappuccino on /, ""), e = e.replace(/^Full MIPS Android on /, ""), e = e.replace(/^Full Android/, ""), e = e.replace(/^Acer ?/i, ""), e = e.replace(/^Iconia /, ""), e = e.replace(/^Ainol /, ""), e = e.replace(/^Coolpad ?/i, "Coolpad "), e = e.replace(/^ALCATEL /, ""), e = e.replace(/^Alcatel OT-(.*)/, "one touch $1"), e = e.replace(/^YL-/, ""), e = e.replace(/^Novo7 ?/i, "Novo7 "), e = e.replace(/^GIONEE /, ""), e = e.replace(/^HW-/, ""), e = e.replace(/^Huawei[ -]/i, "Huawei "), e = e.replace(/^SAMSUNG[ -]/i, ""), e = e.replace(/^SonyEricsson/, ""), e = e.replace(/^Lenovo Lenovo/, "Lenovo"), e = e.replace(/^LNV-Lenovo/, "Lenovo"), e = e.replace(/^Lenovo-/, "Lenovo "), e = e.replace(/^(LG)[ _\/]/, "$1-"), e = e.replace(/^(HTC.*)\s(?:v|V)?[0-9.]+$/, "$1"), e = e.replace(/^(HTC)[-\/]/, "$1 "), e = e.replace(/^(HTC)([A-Z][0-9][0-9][0-9])/, "$1 $2"), e = e.replace(/^(Motorola[\s|-])/, ""), e = e.replace(/^(Moto|MOT-)/, ""), e = e.replace(/-?(orange(-ls)?|vodafone|bouygues)$/i, ""), e = e.replace(/http:\/\/.+$/i, ""), e = e.replace(/^\s+|\s+$/g, "")
    }

    function t(e) {
      e = e.toString();
      var t = e.split("."),
        n = t.shift();
      return parseFloat(n + "." + t.join(""))
    }
    var n = {
        SAMSUNG: {
          "GT-S3370C": ["Samsung", "Corby 3G"],
          "GT-S3650": ["Samsung", "Corby"],
          "GT-S3653": ["Samsung", "Corby"],
          "GT-S3850": ["Samsung", "Corby II"],
          "GT-S5230": ["Samsung", "Star"],
          "GT-S5230W": ["Samsung", "Star"],
          "GT-S5233": ["Samsung", "Star"],
          "GT-S5260": ["Samsung", "Star II"],
          "GT-S5560": ["Samsung", "Marvel"],
          "GT-S5620": ["Samsung", "Monte"],
          "GT-S7550": ["Samsung", "Blue Earth"],
          "GT-S8000": ["Samsung", "Jet"],
          "GT-S8003": ["Samsung", "Jet"],
          "SGH-F480": ["Samsung", "Tocco"],
          "SGH-T528g": ["Samsung", "Straight Talk"],
          "GT-B3410": ["Samsung", "Star Qwerty"],
          "GT-B5310": ["Samsung", "Corby Pro"],
          "GT-B7722": ["Samsung", "Star Duos"],
          "GT-C6712": ["Samsung", "Star II Duos"]
        }
      },
      a = {
        SAMSUNG: {
          "GT- S5250": ["Samsung", "Wave 525"],
          "GT-S5250": ["Samsung", "Wave 525"],
          "GT-S5253": ["Samsung", "Wave 525"],
          "GT-S5330": ["Samsung", "Wave 533"],
          "GT-S5380": ["Samsung", "Wave Y"],
          "GT-S5380D": ["Samsung", "Wave Y"],
          "GT-S5380K": ["Samsung", "Wave Y"],
          "GT-S5750E": ["Samsung", "Wave 575"],
          "GT-S5753E": ["Samsung", "Wave 575"],
          "GT-S7230B": ["Samsung", "Wave 723"],
          "GT-S7230E": ["Samsung", "Wave 723"],
          "GT-S7233E": ["Samsung", "Wave 723"],
          "GT-S7250": ["Samsung", "Wave M"],
          "GT-S7250D": ["Samsung", "Wave M"],
          "GT-S8500": ["Samsung", "Wave"],
          "GT-S8500C": ["Samsung", "Wave"],
          "GT-S8500R": ["Samsung", "Wave"],
          "GT-S8500T": ["Samsung", "Wave"],
          "GT-S8530": ["Samsung", "Wave II"],
          "GT-S8600": ["Samsung", "Wave 3"],
          "SHW-M410": ["Samsung", "Wave 3"]
        }
      },
      r = {
        SAMSUNG: {
          "GT-I9500": ["Samsung", "GT-I9500"]
        }
      },
      i = {
        "Coolpad D508": ["Coolpad", "D508"],
        "Coolpad E600": ["Coolpad", "E600"],
        "SCH-F839": ["Samsung", "SCH-F839"]
      },
      o = {
        DX900: ["Acer", "Tempo DX900"],
        F900: ["Acer", "Tempo F900"],
        "Coolpad F800": ["Coolpad", "F800"],
        "garmin-asus-Nuvifone-M10": ["Garmin-Asus", "Nuvifone M10"],
        "HP iPAQ 510": ["HP", "iPAQ 510"],
        "HD mini T5555": ["HTC", "HD mini"],
        "HTC HD mini": ["HTC", "HD mini"],
        "HTC HD mini T5555": ["HTC", "HD mini"],
        "HTC HD2": ["HTC", "HD2"],
        "HTC HD2 T8585": ["HTC", "HD2"],
        "HD2 T8585": ["HTC", "HD2"],
        "T-Mobile LEO": ["HTC", "HD2"],
        dopodT5588: ["HTC", "Hengshan"],
        "HTC Mega-T3333": ["HTC", "Mega"],
        "HTC Snap S521": ["HTC", "Snap"],
        "HTC Touch2 T3320": ["HTC", "Touch 2"],
        "HTC Touch2 T3333": ["HTC", "Touch 2"],
        "HTC Touch2 T3335": ["HTC", "Touch 2"],
        "HTC P3700": ["HTC", "Touch Diamond"],
        "HTC Touch Diamond2 T5353": ["HTC", "Touch Diamond 2"],
        "HTC Touch HD T8282": ["HTC", "Touch HD"],
        "HTC Touch HD T8283": ["HTC", "Touch HD"],
        "HTC Touch HD2 T8585": ["HTC", "Touch HD2"],
        "HTC Touch Pro2 T7373": ["HTC", "Touch Pro 2"],
        T7380: ["HTC", "Touch Pro 2"],
        "HTC TyTN II": ["HTC", "TyTN II"],
        "GT-B7300": ["Samsung", "Omnia Lite"],
        "GT-B7610": ["Samsung", "Omnia Pro"],
        "GT-i8000": ["Samsung", "Omnia 2"],
        "GT-I8000": ["Samsung", "Omnia 2"],
        "GT-I8000U": ["Samsung", "Omnia 2"],
        M1i: ["Sony Ericsson", "M1i Aspen"]
      },
      s = {
        Acer: {
          Allegro: ["Acer", "Allegro"],
          M310: ["Acer", "Allegro"]
        },
        Asus: {
          Galaxy6: ["Asus", "Galaxy 6"]
        },
        DELL: {
          "Venue Pro": ["Dell", "Venue Pro"]
        },
        FujitsuToshibaMobileCommun: {
          IS12T: ["Fujitsu Toshiba", "IS12T"]
        },
        HTC: {
          "7 Mozart": ["HTC", "7 Mozart"],
          "7 Mozart T8698": ["HTC", "7 Mozart"],
          T8697: ["HTC", "7 Mozart"],
          T8698: ["HTC", "7 Mozart"],
          PD67100: ["HTC", "7 Mozart"],
          "Mozart T8698": ["HTC", "7 Mozart"],
          Mozart: ["HTC", "7 Mozart"],
          "USCCHTC-PC93100": ["HTC", "Arrive"],
          Gold: ["HTC", "Gold "],
          HD2: ["HTC", "HD2"],
          HD7: ["HTC", "HD7"],
          "HD7 T9292": ["HTC", "HD7"],
          T9295: ["HTC", "HD7"],
          T9296: ["HTC", "HD7"],
          "HD7 Infinity": ["HTC", "HD7"],
          T7575: ["HTC", "7 Pro"],
          "7 Pro T7576": ["HTC", "7 Pro"],
          mwp6985: ["HTC", "Trophy"],
          "7 Trophy T8686": ["HTC", "Trophy"],
          "7 Trophy": ["HTC", "Trophy"],
          PC40100: ["HTC", "Trophy"],
          "Touch-IT Trophy": ["HTC", "Trophy"],
          Radar: ["HTC", "Radar"],
          "Radar 4G": ["HTC", "Radar"],
          "Radar C110e": ["HTC", "Radar"],
          Mazaa: ["HTC", "Mazaa"],
          Mondrian: ["HTC", "Mondrian"],
          Schubert: ["HTC", "Schubert"],
          "7 Schubert T9292": ["HTC", "Schubert"],
          Spark: ["HTC", "Spark"],
          T8788: ["HTC", "Surround"],
          "TITAN X310e": ["HTC", "Titan"],
          X310e: ["HTC", "Titan"],
          PI39100: ["HTC", "Titan"],
          PI86100: ["HTC", "Titan II"],
          Ultimate: ["HTC", "Ultimate"]
        },
        LG: {
          GW910: ["LG", "Optimus 7"],
          "LG E-900": ["LG", "Optimus 7 E900"],
          "LG-E900": ["LG", "Optimus 7 E900"],
          "LG-E900h": ["LG", "Optimus 7 E900"],
          "LG-C900": ["LG", "Optimus 7Q"],
          "LG-C900B": ["LG", "Quantum"],
          "LG-C900k": ["LG", "Quantum"]
        },
        nokia: {
          SeaRay: ["Nokia", "Lumia 800"],
          "800C": ["Nokia", "Lumia 800"]
        },
        NOKIA: {
          710: ["Nokia", "Lumia 710"],
          "Nokia 710": ["Nokia", "Lumia 710"],
          "Lumia 710": ["Nokia", "Lumia 710"],
          "Lumia 719": ["Nokia", "Lumia 719"],
          "Lumia 800": ["Nokia", "Lumia 800"],
          800: ["Nokia", "Lumia 800"],
          "Lumia 900": ["Nokia", "Lumia 900"],
          XXX: ["Nokia", "prototype"]
        },
        SAMSUNG: {
          "GT-I8350": ["Samsung", "Omnia W"],
          "GT-I8350T": ["Samsung", "Omnia W"],
          "SGH-i677": ["Samsung", "Focus Flash"],
          "SGH-i707": ["Samsung", "Taylor"],
          "SGH-i917": ["Samsung", "Omnia 7"],
          "SGH-I917": ["Samsung", "Omnia 7"],
          "SGH-i917.": ["Samsung", "Focus"],
          "SGH-i917R": ["Samsung", "Focus"],
          "SGH-i937": ["Samsung", "Focus S"],
          OMNIA7: ["Samsung", "Omnia 7"],
          OMINA7: ["Samsung", "Omnia 7"],
          Taylor: ["Samsung", "Taylor"]
        },
        TOSHIBA: {
          TSUNAGI: ["Toshiba", "Tsunagi"]
        }
      },
      d = {
        Android: [null, null],
        "google sdk": [null, null],
        sdk: [null, null],
        generic: [null, null],
        "generic x86": [null, null],
        "amd brazos": ["AMD", "Fusionbased device"],
        "Amlogic M1 reference board": ["Amlogic", "M1 reference board"],
        AML8726M: ["Amlogic", "AML8726-Mbased device"],
        "vexpress a9": ["ARM", "Versatile Express development platform"],
        bcm7231: ["Broadcom", "BCM7231based device", "television"],
        bcm7425: ["Broadcom", "BCM7425based device", "television"],
        bcm7429: ["Broadcom", "BCM7429based device", "television"],
        "imx50 rdp": ["Freescale", "i.MX50based device"],
        "imx51 bbg": ["Freescale", "i.MX51based device"],
        "imx53 loco": ["Freescale", "i.MX53based device"],
        "imx53 mp204f3": ["Freescale", "i.MX53based device"],
        "imx53 smd": ["Freescale", "i.MX53based device"],
        "imx53 yeagle": ["Freescale", "i.MX53based device"],
        imx6q: ["Freescale", "i.MX6Qbased device"],
        "ODROID-A": ["Hardkernel", "ODROID-A developer tablet", "tablet"],
        "mfld dv10": ["Intel", "Medfieldbased device"],
        "mfld dv20": ["Intel", "Medfieldbased device"],
        "mfld lw00": ["Intel", "Medfieldbased device"],
        "mfld pr2": ["Intel", "Medfieldbased device"],
        "mfld pr3": ["Intel", "Medfieldbased device"],
        "berlin bg2": ["Marvell", "Armada 1000based device", "television"],
        "MStar Amber3": ["MStar", "Amber3based device"],
        "Konka Amber3": ["MStar", "Amber3based device"],
        mt5396: ["Mediatek", "MT5396based device", "television"],
        bird75v2: ["Mediatek", "MT6575based device"],
        "eagle75v1 2": ["Mediatek", "MT6575based device"],
        "MBX DVBT reference board (c03ref)": ["MXB", "DVBT reference board", "television"],
        NS2816: ["Nufront", "NuSmart 2816based device"],
        Ventana: ["nVidia", "Tegra Ventana development kit"],
        Cardhu: ["nVidia", "Tegra 3based device"],
        Panda: ["Pandaboard", "Development Kit"],
        pandaboard: ["Pandaboard", "Development Kit"],
        PandaBoard: ["Pandaboard", "Development Kit"],
        MSM: ["Qualcomm", "Snapdragonbased device"],
        "msm7227 ffa": ["Qualcomm", "Snapdragon S1based device"],
        "msm7627 surf": ["Qualcomm", "Snapdragon S1based device"],
        msm7627a: ["Qualcomm", "Snapdragon S1based device"],
        "msm7627a sku1": ["Qualcomm", "Snapdragon S1based device"],
        "msm7627a sku3": ["Qualcomm", "Snapdragon S1based device"],
        "msm7630 fusion": ["Qualcomm", "Snapdragon S2based device"],
        "msm7630 surf": ["Qualcomm", "Snapdragon S2based device"],
        "msm8660 cougar": ["Qualcomm", "Snapdragon S3based device"],
        "msm8660 surf": ["Qualcomm", "Snapdragon S3based device"],
        msm8960: ["Qualcomm", "Snapdragon S4based device"],
        rk2808sdk: ["Rockchip", "RK2808based device"],
        RK2818: ["Rockchip", "RK2818based device"],
        rk2818sdk: ["Rockchip", "RK2818based device"],
        "Android-for-Rockchip-2818": ["Rockchip", "RK2818based device"],
        rk29sdk: ["Rockchip", "RK29based device"],
        Rk29sdk: ["Rockchip", "RK29based device"],
        rk30sdk: ["Rockchip", "RK30based device"],
        s3c6410: ["Samsung", "S3C6410based device"],
        smdk6410: ["Samsung", "S3C6410based device"],
        SMDKC110: ["Samsung", "Exynos 3110based device"],
        SMDKV210: ["Samsung", "Exynos 4210based device"],
        S5PV210: ["Samsung", "Exynos 4210based device"],
        "sec smdkc210": ["Samsung", "Exynos 4210based device"],
        SMDK4x12: ["Samsung", "Exynos 4212 or 4412based device"],
        smp86xx: ["Sigma", "SMP86xxbased device", "television"],
        sv8860: ["Skyviia", "SV8860based device", "television"],
        "ste u8500": ["ST Ericsson", "Novathor U8500based device"],
        "Telechips M801 Evaluation Board": ["Telechips", "M801based device", "television"],
        "Telechips TCC8900 Evaluation Board": ["Telechips", "TCC8900based device", "television"],
        "TCC8920 STB EV": ["Telechips", "TCC8920based device", "television"],
        OMAP: ["Texas Instruments", "OMAPbased device"],
        "OMAP SS": ["Texas Instruments", "OMAPbased device"],
        "LogicPD Zoom2": ["Texas Instruments", "OMAPbased device"],
        omap3evm: ["Texas Instruments", "OMAP3based device"],
        Omap5sevm: ["Texas Instruments", "OMAP5based device"],
        "pnx8473 kiryung": ["Trident", "PNX8473based device", "television"],
        crespo: ["Google", "Nexus S"],
        Crespo: ["Google", "Nexus S"],
        Crespo4G: ["Google", "Nexus S"],
        Passion: ["Google", "Nexus One"],
        Bravo: ["HTC", "Desire"],
        dream: ["HTC", "Dream"],
        Vogue: ["HTC", "Touch"],
        "Vendor Optimus": ["LG", "Optimus"],
        Stingray: ["Motorola", "XOOM", "tablet"],
        Wingray: ["Motorola", "XOOM", "tablet"],
        maguro: ["Samsung", "Galaxy Nexus"],
        Maguro: ["Samsung", "Galaxy Nexus"],
        "Toro-VZW": ["Samsung", "Galaxy Nexus"],
        blaze: ["Texas Instruments", "Blaze Tablet", "tablet"],
        Blaze: ["Texas Instruments", "Blaze Tablet", "tablet"],
        "Blaze Tablet": ["Texas Instruments", "Blaze Tablet", "tablet"],
        BlueStacks: ["BlueStacks", "App Player", "desktop"],
        "youwave custom": ["Youwave", "Android on PC", "desktop"],
        A100: ["Acer", "Iconia Tab A100", "tablet"],
        A101: ["Acer", "Iconia Tab A101", "tablet"],
        A200: ["Acer", "Iconia Tab A200", "tablet"],
        A500: ["Acer", "Iconia Tab A500", "tablet"],
        A501: ["Acer", "Iconia Tab A501", "tablet"],
        A510: ["Acer", "Iconia Tab A510", "tablet"],
        A511: ["Acer", "Iconia Tab A511", "tablet"],
        A700: ["Acer", "Iconia Tab A700", "tablet"],
        "Acer A800": ["Acer", "Iconia Tab A800", "tablet"],
        E110: ["Acer", "beTouch E110"],
        E120: ["Acer", "beTouch E120"],
        E130: ["Acer", "beTouch E130"],
        E140: ["Acer", "beTouch E140"],
        E210: ["Acer", "beTouch E210"],
        E310: ["Acer", "Liquid mini"],
        E320: ["Acer", "Liquid Express"],
        E330: ["Acer", "Liquid Glow"],
        E400: ["Acer", "beTouch E400"],
        G100W: ["Acer", "G100W"],
        S100: ["Acer", "Liquid"],
        S110: ["Acer", "Stream"],
        S120: ["Acer", "Liquid mt"],
        S300: ["Acer", "Iconia Smart"],
        S500: ["Acer", "CloudMobile"],
        TD600: ["Acer", "beTouch TD600"],
        Liquid: ["Acer", "Liquid"],
        "Liquid E": ["Acer", "Liquid E"],
        "Liquid Mt": ["Acer", "Liquid mt"],
        "Liquid MT": ["Acer", "Liquid mt"],
        "Liquid Metal": ["Acer", "Liquid mt"],
        Stream: ["Acer", "Stream"],
        N700: ["aigo", "N700", "tablet"],
        M801: ["aigo", "M801", "tablet"],
        Novo7: ["Ainovo", "Novo7", "tablet"],
        "Novo7 Aurora": ["Ainovo", "Novo7 Aurora", "tablet"],
        "Novo7 Advanced": ["Ainovo", "Novo7 Advanced", "tablet"],
        "Novo7 Advanced2": ["Ainovo", "Novo7 Advanced 2", "tablet"],
        "Novo7 Basic": ["Ainovo", "Novo7 Basic", "tablet"],
        "Novo7 ELF": ["Ainovo", "Novo7 Elf", "tablet"],
        "Novo7 PALADIN": ["Ainovo", "Novo7 Paladin", "tablet"],
        "Novo8 Advanced": ["Ainovo", "Novo8 Advanced", "tablet"],
        "one touch 890": ["Alcatel", "One Touch 890"],
        "one touch 890D": ["Alcatel", "One Touch 890"],
        "one touch 891": ["Alcatel", "One Touch 891"],
        "ONE TOUCH 903": ["Alcatel", "One Touch 903SHV-E170K"],
        "one touch 906": ["Alcatel", "One Touch 906"],
        "one touch 908": ["Alcatel", "One Touch 908"],
        "one touch 908F": ["Alcatel", "One Touch 908"],
        "one touch 908S": ["Alcatel", "One Touch 908"],
        "one touch 910": ["Alcatel", "One Touch 910"],
        "one touch 918": ["Alcatel", "One Touch 918"],
        "one touch 918D": ["Alcatel", "One Touch 918"],
        "ONE TOUCH 918D": ["Alcatel", "One Touch 918"],
        "one touch 918M": ["Alcatel", "One Touch 918"],
        "one touch 918N": ["Alcatel", "One Touch 918"],
        "one touch 980": ["Alcatel", "One Touch 980"],
        "one touch 980A": ["Alcatel", "One Touch 980"],
        "one touch 981A": ["Alcatel", "One Touch 981"],
        "one touch 986": ["Alcatel", "One Touch 986"],
        "one touch 990": ["Alcatel", "One Touch 990"],
        "one touch 990A": ["Alcatel", "One Touch 990"],
        "one touch 991": ["Alcatel", "One Touch 991"],
        "one touch 991D": ["Alcatel", "One Touch 991"],
        "ONE TOUCH 993": ["Alcatel", "One Touch 993"],
        "one touch 995": ["Alcatel", "One Touch 995"],
        "Telenor OneTouch": ["Alcatel", "One Touch 990"],
        "OT 918": ["Alcatel", "One Touch 918"],
        Venture: ["Alcatel", "Venture"],
        "Allwinner A10": ["AllWinner", "A10", "tablet"],
        "97FC": ["AllWinner", "A10 97FC", "tablet"],
        "Kindle Fire": ["Amazon", "Kindle Fire", "tablet"],
        "Amazon Kindle Fire": ["Amazon", "Kindle Fire", "tablet"],
        AMD120: ["AnyDATA", "AnyTAB AMD120", "tablet"],
        MW0811: ["AOC", "Breeze MW0811", "tablet"],
        "MW0821 V2.0": ["AOC", "Breeze MW0821", "tablet"],
        MW0922: ["AOC", "Breeze MW0922", "tablet"],
        "Apanda A60": ["Apanda", "A60"],
        "apanda-A60": ["Apanda", "A60"],
        A80KSC: ["Archos", "Arnova 8", "tablet"],
        AN7CG2: ["Archos", "Arnova 7", "tablet"],
        A101B: ["Archos", "Arnova 10", "tablet"],
        AN10BG2DT: ["Archos", "Arnova 10 B", "tablet"],
        AN10G2: ["Archos", "Arnova 10 G2", "tablet"],
        A32: ["Archos", "32", "media"],
        A35DE: ["Archos", "35 Smart Home Phone"],
        A43: ["Archos", "43", "media"],
        Archos5: ["Archos", "5", "media"],
        A70H: ["Archos", "7", "tablet"],
        A70HB: ["Archos", "7", "tablet"],
        A70BHT: ["Archos", "7", "tablet"],
        A70CHT: ["Archos", "7C", "tablet"],
        A70S: ["Archos", "70", "tablet"],
        A7EB: ["Archos", "70B", "tablet"],
        "ARCHOS 70it2": ["Archos", "70 IT 2", "tablet"],
        "ARCHOS 80G9": ["Archos", "80 G9", "tablet"],
        "ARCHOS 101G9": ["Archos", "101 G9", "tablet"],
        A101IT: ["Archos", "101 IT", "tablet"],
        ASTRI: ["ASTRI", "e-reader", "ereader"],
        eeepc: ["Asus", "Eee Pc"],
        "asus laptop": ["Asus", "Eee Pc"],
        ME171: ["Asus", "Eee Pad MeMO", "tablet"],
        "Slider SL101": ["Asus", "Eee Pad Slider", "tablet"],
        EPAD: ["Asus", "Eee Pad Transformer", "tablet"],
        TF101: ["Asus", "Eee Pad Transformer", "tablet"],
        "Transformer TF101": ["Asus", "Eee Pad Transformer", "tablet"],
        "Transformer TF101G": ["Asus", "Eee Pad Transformer", "tablet"],
        TF201: ["Asus", "Eee Pad Transformer Prime", "tablet"],
        "Transformer Prime TF201": ["Asus", "Eee Pad Transformer Prime", "tablet"],
        "Transformer Prime": ["Asus", "Eee Pad Transformer Prime", "tablet"],
        "Transformer Pad TF300T": ["Asus", "Transformer Pad 300", "tablet"],
        "ASUS Transformer TF300T": ["Asus", "Transformer Pad 300", "tablet"],
        "ASUS Transformer Pad TF300T": ["Asus", "Transformer Pad 300", "tablet"],
        "ASUS Transformer Pad TF300TG": ["Asus", "Transformer Pad 300", "tablet"],
        "ASUS Transformer Pad TF700T": ["Asus", "Transformer Pad Infinity 700", "tablet"],
        "ASUS Transformer Pad TF700K": ["Asus", "Transformer Pad Infinity 700", "tablet"],
        "ASUS Transformer TF700K": ["Asus", "Transformer Pad Infinity 700", "tablet"],
        PadFone: ["Asus", "Padfone", "tablet"],
        "OMS TTD": ["Asus", "Eee Pc T10"],
        "ASUS T20": ["Asus", "Eee Pc T20"],
        ETBW11AA: ["Asus", "Tough"],
        "AUX V900": ["AUX", "V900"],
        M910A: ["AUX", "M910"],
        "PICOpad-QGN": ["Axioo", "Picopad QGN", "tablet"],
        NOOK: ["Barnes & Noble", "NOOK", "ereader"],
        NookColor: ["Barnes & Noble", "NOOK Color", "ereader"],
        "NOOK BNRV200": ["Barnes & Noble", "NOOK Color", "ereader"],
        "NOOK BNRV300": ["Barnes & Noble", "NOOK Color", "ereader"],
        NookTablet: ["Barnes & Noble", "NOOK Tablet", "ereader"],
        "Nook Tablet": ["Barnes & Noble", "NOOK Tablet", "ereader"],
        "NOOK BNTV250": ["Barnes & Noble", "NOOK Tablet", "ereader"],
        "NOOK BNTV250A": ["Barnes & Noble", "NOOK Tablet", "ereader"],
        BNTV250: ["Barnes & Noble", "NOOK Tablet", "ereader"],
        BNTV250A: ["Barnes & Noble", "NOOK Tablet", "ereader"],
        "NOOK Slate": ["Barnes & Noble", "NOOK Tablet", "ereader"],
        "BenWee 5100": ["BenWee", "5100"],
        CA907AAC0G: ["Besta", "CA907AAC0G"],
        BM999: ["Bmorn", "BM999", "tablet"],
        V11: ["Bmorn", "V11", "tablet"],
        V99: ["Bmorn", "V99", "tablet"],
        "bq DaVinci": ["bq", "DaVinci", "tablet"],
        CT704: ["Carrefour", "CT704", "tablet"],
        CT1002: ["Carrefour", "CT1002", "tablet"],
        "Camangi-Mangrove7": ["Camangi", "Mangrove 7", "tablet"],
        WS171: ["Camangi", "WebStation", "tablet"],
        IS11CA: ["Casio", "GzOne IS11CA"],
        C771: ["Casio", "GzOne Commando"],
        "CAT NOVA": ["Cat", "NOVA", "tablet"],
        ARMM3V: ["chinaleap", "ARMM3V", "tablet"],
        "CIUS-7": ["Cisco", "Cius", "tablet"],
        "CIUS-7-AT": ["Cisco", "Cius", "tablet"],
        "CSL Spice MI300": ["CSL", "Spice MI300"],
        "CSL-MI410": ["CSL", "Spice MI410"],
        MID1024: ["Coby", "Kyros MID1024", "tablet"],
        MID1125: ["Coby", "Kyros MID1125", "tablet"],
        MID1126: ["Coby", "Kyros MID1126", "tablet"],
        MID7010: ["Coby", "Kyros MID7010", "tablet"],
        MID7012: ["Coby", "Kyros MID7012", "tablet"],
        MID7015: ["Coby", "Kyros MID7015", "tablet"],
        MID7015A: ["Coby", "Kyros MID7015", "tablet"],
        MID7016: ["Coby", "Kyros MID7016", "tablet"],
        MID7020: ["Coby", "Kyros MID7020", "tablet"],
        MID7022: ["Coby", "Kyros MID7022", "tablet"],
        MID7024: ["Coby", "Kyros MID7024", "tablet"],
        MID7025: ["Coby", "Kyros MID7025", "tablet"],
        MID7127: ["Coby", "Kyros MID7127", "tablet"],
        MID8024: ["Coby", "Kyros MID8024", "tablet"],
        MID8125: ["Coby", "Kyros MID8125", "tablet"],
        MID8127: ["Coby", "Kyros MID8127", "tablet"],
        Z71: ["Commtiva", "Z71"],
        "V-T100": ["Commtiva", "V-T100"],
        "FIH-FB0": ["Commtiva", "HD700"],
        "Coolpad D510": ["Coolpad", "D510"],
        "Coolpad 8020": ["Coolpad", "8020"],
        D530: ["Coolpad", "D530"],
        "Coolpad D530": ["Coolpad", "D530"],
        D539: ["Coolpad", "D539"],
        "Coolpad D539": ["Coolpad", "D539"],
        E239: ["Coolpad", "E239"],
        "Coolpad E239": ["Coolpad", "E239"],
        "Coolpad N930": ["Coolpad", "N930"],
        N930: ["Coolpad", "N930"],
        "Coolpad W706": ["Coolpad", "W706"],
        "Coolpad W706+": ["Coolpad", "W706"],
        "Coolpad W708": ["Coolpad", "W708"],
        W711: ["Coolpad", "W711"],
        "Coolpad 5010": ["Coolpad", "5010"],
        "Coolpad 5210": ["Coolpad", "5210"],
        "Coolpad 5820": ["Coolpad", "5820"],
        5832: ["Coolpad", "5832"],
        "Coolpad 5832": ["Coolpad", "5832"],
        5855: ["Coolpad", "5855"],
        "Coolpad 5860": ["Coolpad", "5860"],
        "Coolpad 5860+": ["Coolpad", "5860"],
        "Coolpad 5860s": ["Coolpad", "5860"],
        5860: ["Coolpad", "5860"],
        "5860A": ["Coolpad", "5860"],
        "Coolpad 5870": ["Coolpad", "5870"],
        5870: ["Coolpad", "5870"],
        "Coolpad 7005": ["Coolpad", "7005"],
        7260: ["Coolpad", "7260"],
        "Coolpad 7019": ["Coolpad", "7019"],
        "Coolpad 7260": ["Coolpad", "7260"],
        "Coolpad 8013": ["Coolpad", "8013"],
        "Coolpad 8809": ["Coolpad", "8809"],
        "Coolpad 8810": ["Coolpad", "8810"],
        8810: ["Coolpad", "8810"],
        8150: ["Coolpad", "8150"],
        "Coolpad 8150D": ["Coolpad", "8150"],
        "Coolpad 8811": ["Coolpad", "8811"],
        "Coolpad 9900": ["Coolpad", "9900"],
        "Coolpad 8050": ["Coolpad", "8050"],
        ZiiO7: ["Creative", "ZiiO 7", "tablet"],
        "ZiiLABS ZiiO7": ["Creative", "ZiiO 7", "tablet"],
        "ZiiLABS ZiiO10 ": ["Creative", "ZiiO 10", "tablet"],
        "CUBE K8GT A": ["Cube", "K8GT A", "tablet"],
        "CUBE K8GT B": ["Cube", "K8GT B", "tablet"],
        "K8GT C": ["Cube", "K8GT C", "tablet"],
        "K8GT H": ["Cube", "K8GT H", "tablet"],
        "CUBE K8GT H": ["Cube", "K8GT H", "tablet"],
        "K8GT W": ["Cube", "K8GT W", "tablet"],
        "CUBE U8GT": ["Cube", "U8GT", "tablet"],
        "CUBE U9GT": ["Cube", "U9GT", "tablet"],
        "CUBE U9GT 2": ["Cube", "U9GT 2", "tablet"],
        "Cube U9GT2": ["Cube", "U9GT 2", "tablet"],
        U9GT: ["Cube", "U9GT", "tablet"],
        "U9GT2 From moage.com": ["Cube", "U9GT 2", "tablet"],
        "N90 From moage.com": ["Cube", "U9GT 2", "tablet"],
        "U9GT S": ["Cube", "U9GT S", "tablet"],
        "U9GT S A": ["Cube", "U9GT SA", "tablet"],
        "U9GTS A": ["Cube", "U9GT SA", "tablet"],
        "U10GT 2": ["Cube", "U10GT 2", "tablet"],
        "U10GT S": ["Cube", "U10GT S", "tablet"],
        "U30GT-H": ["Cube", "U30GT H", "tablet"],
        "CUBE Q7PRO": ["Cube", "Q7 Pro", "tablet"],
        "CUBE Q7PRO J": ["Cube", "Q7 Pro", "tablet"],
        "Cydle M7 (v0005.04.03.12.ko)": ["Cydle", "M7 MultiPAD", "tablet"],
        "Dell Aero": ["Dell", "Aero"],
        "Dell M01M": ["Dell", "Mini 5", "tablet"],
        "Dell Streak": ["Dell", "Streak", "tablet"],
        "001DL": ["Dell", "Streak", "tablet"],
        "101DL": ["Dell", "Streak Pro", "tablet"],
        GS01: ["Dell", "Streak Pro", "tablet"],
        "Dell Streak Pro": ["Dell", "Streak Pro", "tablet"],
        streak7: ["Dell", "Streak 7", "tablet"],
        "Dell Streak 7": ["Dell", "Streak 7", "tablet"],
        "Dell Streak 10 Pro": ["Dell", "Streak 10 Pro", "tablet"],
        "Dell V04B": ["Dell", "Streak V04B", "tablet"],
        "Dell Venue": ["Dell", "Venue"],
        "Dell XCD35": ["Dell", "XCD35"],
        XCD35: ["Dell", "XCD35"],
        iDx7: ["Digma", "iDx7", "tablet"],
        iDx10: ["Digma", "iDx10", "tablet"],
        "iDx10 3G": ["Digma", "iDx10", "tablet"],
        DM009SH: ["Disney Mobile", "DM009SH"],
        DM010SH: ["Disney Mobile", "DM010SH"],
        DM012SH: ["Disney Mobile", "DM012SH"],
        "F-08D": ["Disney Mobile", "F-08D"],
        "P-05D": ["Disney Mobile", "P-05D"],
        "Tablet-P27": ["DracoTek", "P27 Tablet", "tablet"],
        edgejr: ["EnTourage", "Pocket eDGe", "tablet"],
        l97D: ["EPad", "l97D", "tablet"],
        M4301: ["Eston", "MID M4301", "media"],
        P10AN: ["Exper", "Easypad P10AN", "tablet"],
        "FIH-F0X": ["FIH", "F0X"],
        "Fly IQ260": ["Fly", "IQ260 BlackBird"],
        ISW11F: ["Fujitsu", "Arrows Z"],
        ISW13F: ["Fujitsu", "Arrows Z"],
        IS12F: ["Fujitsu", "Arrows ES"],
        "F-01D": ["Fujitsu", "Arrows Tab LTE", "tablet"],
        "F-03D": ["Fujitsu", "Arrows Kiss"],
        "F-05D": ["Fujitsu", "Arrows X LTE"],
        "F-07D": ["Fujitsu", "Arrows Ã�Â¼"],
        "F-10D": ["Fujitsu", "Arrows X F-10D"],
        "F-12C": ["Fujitsu", "Globetrotter"],
        f12arc: ["Fujitsu", "F12arc"],
        M532: ["Fujitsu", "Stylistic M532", "tablet"],
        Garminfone: ["Garmin-Asus", "Garminfone"],
        "Garmin-Asus A10": ["Garmin-Asus", "Nuvifone A10"],
        "Garmin-Asus A50": ["Garmin-Asus", "Nuvifone A50"],
        TPA60W: ["Gateway", "TPA60W", "tablet"],
        "Geeksphone ZERO": ["Geeksphone", "ZERO"],
        "gemei G2": ["Gemei", "G2", "tablet"],
        "Gemei G2": ["Gemei", "G2", "tablet"],
        "gemei G3": ["Gemei", "G3", "tablet"],
        "Gemei G9": ["Gemei", "G9", "tablet"],
        "GSmart G1317D": ["Gigabyte", "GSmart G1317D"],
        "Gigabyte TB100": ["Gigabyte", "TB100", "tablet"],
        GN100: ["Gionee", "GN100"],
        GN105: ["Gionee", "GN105"],
        GN106: ["Gionee", "GN106"],
        GN200: ["Gionee", "GN200"],
        GN205: ["Gionee", "GN205"],
        GN700W: ["Gionee", "GN700W"],
        GN708W: ["Gionee", "GN708W"],
        "Google Ion": ["Google", "Ion"],
        "Nexus One": ["Google", "Nexus One"],
        NexusOne: ["Google", "Nexus One"],
        "HTC Nexus One": ["Google", "Nexus One"],
        "Nexus S": ["Google", "Nexus S"],
        "Google Nexus S": ["Google", "Nexus S"],
        "Nexus S 4G": ["Google", "Nexus S 4G"],
        "Dooderbutt-4.0.3-v1": ["Google", "Nexus S 4G"],
        "Nexus 7": ["Google", "Nexus 7", "tablet"],
        "Haier HW-W910": ["Haier", "HW-W910"],
        SN10T1: ["HANNspree", "HANNSpad SN10T1", "tablet"],
        SN10T2: ["HANNspree", "HANNSpad SN10T2", "tablet"],
        HannsComb: ["HANNspree", "HANNSpad", "tablet"],
        X1: ["HCL", "ME X1", "tablet"],
        "MID Serails": ["Herotab", "C8", "tablet"],
        "MID Serials": ["Herotab", "C8", "tablet"],
        "COSMO DUO": ["Hiscreen", "Cosmo DUO", "tablet"],
        "HS-U8": ["Hisense", "U8"],
        "HS-T92": ["Hisense", "T92"],
        "HS-E860": ["Hisense", "E860"],
        "HS-E910": ["Hisense", "E910"],
        "HS-E926": ["Hisense", "E926"],
        "HS-EG900": ["Hisense", "EG900"],
        "HS-ET919": ["Hisense", "ET919"],
        EG968B: ["Hisense", "EG968B"],
        "HKPHONE H8-3G": ["HKPhone", "H8 3G"],
        "HOSIN U2": ["Hosin", "U2"],
        Touchpad: ["HP", "TouchPad", "tablet"],
        "HP Touchpad": ["HP", "TouchPad", "tablet"],
        "cm tenderloin": ["HP", "TouchPad", "tablet"],
        "aokp tenderloin": ["HP", "TouchPad", "tablet"],
        "HTC Amaze 4G": ["HTC", "Amaze 4G"],
        "HTC Ruby": ["HTC", "Amaze 4G"],
        "HTC Amaze 4G(Ruby)": ["HTC", "Amaze 4G"],
        "Amaze 4G": ["HTC", "Amaze 4G"],
        "HTC Aria": ["HTC", "Aria"],
        "HTC Aria A6380": ["HTC", "Aria"],
        "HTC Liberty A6380": ["HTC", "Aria"],
        "HTC Liberty": ["HTC", "Aria"],
        "HTC A6366": ["HTC", "Aria"],
        "HTC Bee": ["HTC", "Bee"],
        "HTC ChaCha": ["HTC", "ChaCha"],
        "HTC ChaCha A810e": ["HTC", "ChaCha"],
        "HTC ChaChaCha A810e": ["HTC", "ChaCha"],
        "HTC A810e": ["HTC", "ChaCha"],
        "HTC A9188": ["HTC", "Tianxi"],
        "HTC Bravo": ["HTC", "Desire"],
        "HTC Desire": ["HTC", "Desire"],
        "HTC Desire A8181": ["HTC", "Desire"],
        "HTC Desire A8183": ["HTC", "Desire"],
        "HTC Desire Beats A8181": ["HTC", "Desire"],
        "HTC Desire CDMA": ["HTC", "Desire"],
        "HTC Desire SMS": ["HTC", "Desire"],
        "HTC Desire S.M.S": ["HTC", "Desire"],
        "HTC Desire C": ["HTC", "Desire C"],
        "HTC DesireHD": ["HTC", "Desire HD"],
        "HTC DesireHD A9191": ["HTC", "Desire HD"],
        "HTC DesireHD A9192": ["HTC", "Desire HD"],
        "HTC Desire HD A9191": ["HTC", "Desire HD"],
        "HTC A9191": ["HTC", "Desire HD"],
        "HTC A9191 for AT&T": ["HTC", "Desire HD"],
        "HTC A9192": ["HTC", "Desire HD"],
        "HTC Desire HD": ["HTC", "Desire HD"],
        "HTC Desire HD with Beats Audio": ["HTC", "Desire HD"],
        "HTC Desire S": ["HTC", "Desire S"],
        "HTC DesireS": ["HTC", "Desire S"],
        "HTC DesiresS": ["HTC", "Desire S"],
        "HTC DesireS S510e": ["HTC", "Desire S"],
        "HTC DesireS S510b": ["HTC", "Desire S"],
        "HTC Desire S S510e": ["HTC", "Desire S"],
        "HTC S510e": ["HTC", "Desire S"],
        "HTC Desire Saga": ["HTC", "Desire S"],
        "HTC Desire V": ["HTC", "Desire V"],
        "HTC T328w": ["HTC", "Desire V"],
        "HTC Desire VC": ["HTC", "Desire VC"],
        "HTC T328d": ["HTC", "Desire VC"],
        "HTC T328t": ["HTC", "Desire VT"],
        "HTC Desire Z": ["HTC", "Desire Z"],
        "HTC DesireZ": ["HTC", "Desire Z"],
        "HTC DesireZ A7272": ["HTC", "Desire Z"],
        "HTC Desire Z A7272": ["HTC", "Desire Z"],
        "HTC Vision": ["HTC", "Desire Z"],
        "HTC A7275": ["HTC", "Desire Z"],
        "HTC Dream": ["HTC", "Dream"],
        "HTC S710d": ["HTC", "Droid Incredible 2"],
        "HTC Incredible 2": ["HTC", "Droid Incredible 2"],
        "HTC X515d": ["HTC", "EVO 3D"],
        "HTC X515m": ["HTC", "EVO 3D"],
        "HTC X515C": ["HTC", "EVO 3D"],
        "HTC Evo 3D": ["HTC", "EVO 3D"],
        "HTC EVO 3D": ["HTC", "EVO 3D"],
        "HTC EVO 3D GSM": ["HTC", "EVO 3D"],
        "HTC EVO 3D X515a": ["HTC", "EVO 3D"],
        "HTC EVO 3D GSM X515m": ["HTC", "EVO 3D"],
        "HTC EVO 3D X515m": ["HTC", "EVO 3D"],
        "HTC EVO 3D X515M": ["HTC", "EVO 3D"],
        "HTC EVO3D X515a": ["HTC", "EVO 3D"],
        "HTC EVO3D X515m": ["HTC", "EVO 3D"],
        "HTC Evo 3D X515m": ["HTC", "EVO 3D"],
        "HTC Evo 3D with Beats Audio X515m": ["HTC", "EVO 3D"],
        "HTC Evo 4G": ["HTC", "EVO 4G"],
        "HTC EVO 4G": ["HTC", "EVO 4G"],
        "HTC X515E": ["HTC", "EVO 4G+"],
        "HTC EVO 4G+ For Sprint": ["HTC", "EVO 4G+"],
        "HTC EVO 4G++ For Sprint": ["HTC", "EVO 4G+"],
        "HTC C715c": ["HTC", "EVO Design 4G"],
        "HTC Design 4G": ["HTC", "EVO Design 4G"],
        "HTC EVO design 4G": ["HTC", "EVO Design 4G"],
        "HTC EVO Design 4G": ["HTC", "EVO Design 4G"],
        "HTC Evo Shift": ["HTC", "EVO Shift"],
        "HTC EVO Shift 4G": ["HTC", "EVO Shift"],
        "HTC A310e": ["HTC", "Explorer"],
        "HTC Explorer": ["HTC", "Explorer"],
        "HTC Explorer A310b": ["HTC", "Explorer"],
        "HTC Explorer A310e": ["HTC", "Explorer"],
        "HTC P510e": ["HTC", "Flyer", "tablet"],
        "HTC Flyer": ["HTC", "Flyer", "tablet"],
        "HTC Flyer P510e": ["HTC", "Flyer", "tablet"],
        "HTC Flyer P512": ["HTC", "Flyer", "tablet"],
        "HTC Flyer P512 NA": ["HTC", "Flyer", "tablet"],
        "HTC P515E": ["HTC", "Flyer 4G", "tablet"],
        "HTC Gratia A6380": ["HTC", "Gratia"],
        "HTC HD": ["HTC", "HD"],
        "HTC HD2": ["HTC", "HD2"],
        "HTC HD2 T8585": ["HTC", "HD2"],
        "HTC HD2(Leo)": ["HTC", "HD2"],
        "HTC HD7": ["HTC", "HD7"],
        "HTC T9299+": ["HTC", "HD7"],
        "HTC HD7 for Sprint": ["HTC", "HD7"],
        "HTC HD7 4G T9299 For AT&T": ["HTC", "HD7"],
        "HTC HD7 4G T9299+ For AT&T": ["HTC", "HD7"],
        "HTC T9299+ For AT&T": ["HTC", "HD7"],
        "HTC HD7S T9399+": ["HTC", "HD7s"],
        "HTC HD7S T9899+": ["HTC", "HD7s"],
        "HTC T9899+ For AT&T": ["HTC", "HD7s"],
        "VitMod ExtraLite 1.6.5.fullodex for HTC HD7 Pro": ["HTC", "HD7 Pro"],
        "HTC Hero": ["HTC", "Hero"],
        "HTC HERO": ["HTC", "Hero"],
        "HTC Hero CDMA": ["HTC", "Hero"],
        "HTC HERO CDMA": ["HTC", "Hero"],
        "HTC HERO200": ["HTC", "Hero 200"],
        "HTC Hero S": ["HTC", "Hero S"],
        "HTC IMAGIO": ["HTC", "Imagio"],
        "HTC Incredible": ["HTC", "Incredible"],
        "HTC Incredible S710E": ["HTC", "Incredible S"],
        "HTC S710e": ["HTC", "Incredible S"],
        "HTC Incredible S": ["HTC", "Incredible S"],
        "HTC Incredible S S710e": ["HTC", "Incredible S"],
        "HTC Incredible S s710e": ["HTC", "Incredible S"],
        "HTC IncredibleS S710e": ["HTC", "Incredible S"],
        "HTC Incredible S with Beats Audio": ["HTC", "Incredible S"],
        "HTC Vivo": ["HTC", "Incredible S"],
        "HTC Innovation": ["HTC", "Innovation"],
        "HTC Inspire 4G": ["HTC", "Inspire 4G"],
        "HTC HD7 Inspire 4G For Vodafone": ["HTC", "Inspire 4G"],
        "HTC P715a": ["HTC", "Jetstream", "tablet"],
        "HTC Legend": ["HTC", "Legend"],
        "HTC Magic": ["HTC", "Magic"],
        "HTC Sapphire": ["HTC", "Magic"],
        "HTC Lexikon": ["HTC", "Merge"],
        "HTC One S": ["HTC", "One S"],
        "HTC Z520e": ["HTC", "One S"],
        "HTC One V": ["HTC", "One V"],
        "HTC T320e": ["HTC", "One V"],
        "HTC One X": ["HTC", "One X"],
        "HTC S720e": ["HTC", "One X"],
        "HTC Endeavour-LS": ["HTC", "One X"],
        "HTC One XL": ["HTC", "One XL"],
        "HTC X710a": ["HTC", "Raider 4G"],
        "HTC Raider": ["HTC", "Raider 4G"],
        "HTC Raider X710e": ["HTC", "Raider 4G"],
        "HTC Raider X710s": ["HTC", "Raider 4G"],
        "HTC Raider 4G X710e": ["HTC", "Raider 4G"],
        "HTC PH39100": ["HTC", "Raider 4G"],
        "HTC Holiday": ["HTC", "Raider 4G"],
        "HTC Velocity 4G X710s": ["HTC", "Raider 4G"],
        "HTC Rezound": ["HTC", "Rezound"],
        "HTC Rhyme S510b": ["HTC", "Rhyme"],
        "HTC S510b": ["HTC", "Rhyme"],
        "HTC Bliss": ["HTC", "Rhyme"],
        "HTC Bliss S510b": ["HTC", "Rhyme"],
        "HTC Salsa C510e": ["HTC", "Salsa"],
        "HTC C510e": ["HTC", "Salsa"],
        "HTC Z710a": ["HTC", "Sensation"],
        "HTC Z710e": ["HTC", "Sensation"],
        "HTC Z710t": ["HTC", "Sensation"],
        "HTC Sensation": ["HTC", "Sensation"],
        "HTC Sensation Z710": ["HTC", "Sensation"],
        "HTC Sensation Z710a": ["HTC", "Sensation"],
        "HTC Sensation Z710e": ["HTC", "Sensation"],
        "HTC Sensation Z710E": ["HTC", "Sensation"],
        "HTC Sensation Z710e For AT&T": ["HTC", "Sensation"],
        "HTC Sensation Z710e with Beats Audio": ["HTC", "Sensation"],
        "HTC Sensation with Beats Audio Z710e": ["HTC", "Sensation"],
        "HTC Sensation with Beats Audio": ["HTC", "Sensation"],
        "HTC Sensation Taste": ["HTC", "Sensation"],
        "HTC Pyramid": ["HTC", "Sensation"],
        "HTC Pyramid Z710a": ["HTC", "Sensation"],
        "HTC Pyramid Z710e": ["HTC", "Sensation"],
        "HTC Sensation 4G": ["HTC", "Sensation"],
        "HTC Sensation 4G with Beats Audio": ["HTC", "Sensation"],
        "HTC Sensation G14": ["HTC", "Sensation"],
        "HTC Sensation G14 for AT&T": ["HTC", "Sensation"],
        "HTC G14 sensation": ["HTC", "Sensation"],
        "HTC Z715e": ["HTC", "Sensation XE"],
        "HTC Sensation Z715e": ["HTC", "Sensation XE"],
        "HTC SensationXE Beats": ["HTC", "Sensation XE"],
        "HTC SensationXE Beats Z715a": ["HTC", "Sensation XE"],
        "HTC SensationXE Beats Z715e": ["HTC", "Sensation XE"],
        "HTC Sensation XE": ["HTC", "Sensation XE"],
        "HTC Sensation XE Z715e": ["HTC", "Sensation XE"],
        "HTC SensationXE Z715e": ["HTC", "Sensation XE"],
        "HTC Sensation XE Beats": ["HTC", "Sensation XE"],
        "HTC SensationXE with Beats Audio": ["HTC", "Sensation XE"],
        "HTC Sensation XE with Beats Audio": ["HTC", "Sensation XE"],
        "HTC Sensation XE with Beats Audio Z715a": ["HTC", "Sensation XE"],
        "HTC Sensation Juredroid XE Beats Audio": ["HTC", "Sensation XE"],
        "HTC Sensation XE with Beats Audio Z715e": ["HTC", "Sensation XE"],
        "HTC Sensation XE With Beats Audio Z715e": ["HTC", "Sensation XE"],
        "HTC Sensation 4G XE with Beats Audio": ["HTC", "Sensation XE"],
        "HTC Sensation with Beats Audio Z715e": ["HTC", "Sensation XE"],
        "HTC X315E": ["HTC", "Sensation XL"],
        "HTC SensationXL Beats X315b": ["HTC", "Sensation XL"],
        "HTC SensationXL Beats X315e": ["HTC", "Sensation XL"],
        "HTC Sensation XL with Beats Audio X315b": ["HTC", "Sensation XL"],
        "HTC Sensation XL with Beats Audio X315e": ["HTC", "Sensation XL"],
        "HTC Runnymede": ["HTC", "Sensation XL"],
        "HTC G21": ["HTC", "Sensation XL"],
        "HTC PH06130": ["HTC", "Status"],
        "HTC Status": ["HTC", "Status"],
        "HTC Tattoo": ["HTC", "Tattoo"],
        "HTC TATTOO A3288": ["HTC", "Tattoo"],
        "HTC click": ["HTC", "Tattoo"],
        "HTC X310e": ["HTC", "Titan"],
        "HTC T7373": ["HTC", "Touch Pro II"],
        "HTC ThunderBolt": ["HTC", "ThunderBolt"],
        "HTC Mecha": ["HTC", "ThunderBolt"],
        "HTC Velocity 4G": ["HTC", "Velocity 4G"],
        "HTC Wildfire": ["HTC", "Wildfire"],
        "HTC Wildfire A3333": ["HTC", "Wildfire"],
        "HTC A3366": ["HTC", "Wildfire"],
        "HTC A3380": ["HTC", "Wildfire"],
        "HTC WildfireS": ["HTC", "Wildfire S"],
        "HTC Wildfire S": ["HTC", "Wildfire S"],
        "Htc Wildfire s": ["HTC", "Wildfire S"],
        "HTC Wildfire S A510e": ["HTC", "Wildfire S"],
        "HTC Wildfire S A510b": ["HTC", "Wildfire S"],
        "HTC WildfireS A510e": ["HTC", "Wildfire S"],
        "HTC WildfireS A510b": ["HTC", "Wildfire S"],
        "htc wildfire s a510e": ["HTC", "Wildfire S"],
        "HTC Wildfire S A515c": ["HTC", "Wildfire S"],
        "HTC A510a": ["HTC", "Wildfire S"],
        "HTC A510e": ["HTC", "Wildfire S"],
        "HTC A510c": ["HTC", "Wildfire S"],
        HTCX06HT: ["HTC", "Desire"],
        "HTC A6390": ["HTC", "A6390"],
        "HTC A8180": ["HTC", "A8180"],
        "HTC PG762": ["HTC", "PG762"],
        "HTC S715e": ["HTC", "S715e"],
        "HTC S720t": ["HTC", "S720t"],
        "HTC Z510d": ["HTC", "Z510d"],
        "HTC Z560e": ["HTC", "Z560e"],
        "HTC VLE U": ["HTC", "One S"],
        "HTC VLE#U": ["HTC", "One S"],
        "HTC VIE U": ["HTC", "One S"],
        "HTC EVA UL": ["HTC", "One V"],
        "HTC ENR U": ["HTC", "One X"],
        "ENR U": ["HTC", "One X"],
        EndeavorU: ["HTC", "One X"],
        Liberty: ["HTC", "Aria"],
        Desire: ["HTC", "Desire"],
        "Desire A8181": ["HTC", "Desire"],
        "desire hd": ["HTC", "Desire HD"],
        "Desire HD": ["HTC", "Desire HD"],
        "Dedire HD": ["HTC", "Desire HD"],
        "Desire Hd (ace)": ["HTC", "Desire HD"],
        "Desire S": ["HTC", "Desire S"],
        DesireS: ["HTC", "Desire S"],
        "Desire Saga": ["HTC", "Desire S"],
        "Desire Z": ["HTC", "Desire Z"],
        Dream: ["HTC", "Dream"],
        "Droid Incredible": ["HTC", "Droid Incredible"],
        EVO: ["HTC", "EVO"],
        "Evo HD2": ["HTC", "EVO HD"],
        "Evo 3D Beats X515m": ["HTC", "EVO 3D"],
        "Evo 3D GSM": ["HTC", "EVO 3D"],
        "EVO 3D X515m": ["HTC", "EVO 3D"],
        "EVO3D X515m": ["HTC", "EVO 3D"],
        "Evo 4G": ["HTC", "EVO 4G"],
        "EVO 4G": ["HTC", "EVO 4G"],
        photon: ["HTC", "HD mini"],
        "GinDream/GinMagic": ["HTC", "Dream"],
        HD2: ["HTC", "HD2"],
        "HD7  Pro": ["HTC", "HD7 Pro"],
        Hero: ["HTC", "Hero"],
        "HERO CDMA": ["HTC", "Hero"],
        HERO200: ["HTC", "Hero 200"],
        Incredible: ["HTC", "Droid Incredible"],
        "Incredible 2": ["HTC", "Droid Incredible 2"],
        "Incredible S": ["HTC", "Incredible S"],
        "IncredibleS S710e": ["HTC", "Incredible S"],
        IncredibleS: ["HTC", "Incredible S"],
        "Inspire HD": ["HTC", "Inspire 4G"],
        "Inspire 4G": ["HTC", "Inspire 4G"],
        Legend: ["HTC", "Legend"],
        NexusHD2: ["HTC", "HD2"],
        "Nexus HD2": ["HTC", "HD2"],
        "Docomo HT-03A": ["HTC", "Magic"],
        "MIUI.us Sensation 4G": ["HTC", "Sensation 4G"],
        "SiRF Dream": ["HTC", "Dream"],
        Pyramid: ["HTC", "Sensation"],
        Sensation: ["HTC", "Sensation"],
        "Sensation Z710e": ["HTC", "Sensation"],
        "Sensation 4G": ["HTC", "Sensation"],
        "Sensation 4g": ["HTC", "Sensation"],
        "TripNiCE Pyramid": ["HTC", "Sensation"],
        "SensationXE Beats Z715e": ["HTC", "Sensation XE"],
        "SensationXL Beats X315e": ["HTC", "Sensation XL"],
        Click: ["HTC", "Tattoo"],
        Wildfire: ["HTC", "Wildfire"],
        "Wildfire S": ["HTC", "Wildfire S"],
        "Wildfire S A510e": ["HTC", "Wildfire S"],
        "Sprint APX515CKT": ["HTC", "EVO 3D"],
        "Sprint APA9292KT": ["HTC", "EVO 4G"],
        "Sprint APA7373KT": ["HTC", "EVO Shift 4G"],
        "Sprint APC715CKT": ["HTC", "EVO Design 4G"],
        A3380: ["HTC", "Wildfire"],
        A6277: ["HTC", "Hero"],
        a7272: ["HTC", "Desire Z"],
        "A7272+(HTC DesireZ)": ["HTC", "Desire Z"],
        S31HT: ["HTC", "Aria"],
        S710d: ["HTC", "Droid Incredible 2"],
        S710D: ["HTC", "Droid Incredible 2"],
        X06HT: ["HTC", "Desire"],
        "001HT": ["HTC", "Desire HD"],
        X325a: ["HTC", "One X"],
        Z520m: ["HTC", "One S"],
        Z710: ["HTC", "Sensation"],
        Z710e: ["HTC", "Sensation"],
        T9199h: ["HTC", "T9199h"],
        "HTC S610d": ["HTC", "S610d"],
        ADR6200: ["HTC", "Droid Eris"],
        ADR6300: ["HTC", "Droid Incredible"],
        ADR6325VW: ["HTC", "Merge"],
        ADR6330VW: ["HTC", "Rhyme"],
        ADR6350: ["HTC", "Droid Incredible 2"],
        ADR6400L: ["HTC", "Thunderbolt 4G"],
        "ADR6400L 4G": ["HTC", "Thunderbolt 4G"],
        "ADR6410LVW 4G": ["HTC", "Fireball"],
        ADR6425LVW: ["HTC", "Rezound"],
        "ADR6425LVW 4G": ["HTC", "Rezound"],
        "Coquettish Red": ["HTC", "Rezound"],
        PB99400: ["HTC", "Droid Incredible"],
        pcdadr6350: ["HTC", "Droid Incredible 2"],
        PC36100: ["HTC", "EVO 4G"],
        PG06100: ["HTC", "EVO Shift 4G"],
        PG41200: ["HTC", "EVO View 4G", "tablet"],
        PG86100: ["HTC", "EVO 3D"],
        PG8610000: ["HTC", "EVO 3D"],
        PH44100: ["HTC", "EVO Design 4G"],
        PJ83100: ["HTC", "One X"],
        ISW11HT: ["HTC", "EVO 4G"],
        ISW12HT: ["HTC", "EVO 3D"],
        ISW13HT: ["HTC", "J"],
        "USCCADR6275US Carrier ID 45": ["HTC", "Desire"],
        USCCADR6285US: ["HTC", "Hero S"],
        "USCCADR6325US Carrier ID 45": ["HTC", "Merge"],
        MediaPad: ["Huawei", "MediaPad", "tablet"],
        "Huawei MediaPad": ["Huawei", "MediaPad", "tablet"],
        "HUAWEI MediaPad": ["Huawei", "MediaPad", "tablet"],
        "Huawei S7-312u": ["Huawei", "MediaPad", "tablet"],
        "MediaPad 10 FHD": ["Huawei", "MediaPad", "tablet"],
        "Huawei C8500": ["Huawei", "C8500"],
        "Huawei C8500S": ["Huawei", "C8500"],
        "Huawei C8600": ["Huawei", "C8600"],
        "Huawei C8650": ["Huawei", "C8650"],
        "Huawei C8650+": ["Huawei", "C8650"],
        "Huawei C8800": ["Huawei", "IDEOS X5"],
        "Huawei C8810": ["Huawei", "Ascend G300"],
        "Huawei C8812": ["Huawei", "Ascend C8812"],
        "Huawei C8812E": ["Huawei", "Ascend C8812"],
        "Huawei C8825D": ["Huawei", "Ascend C8825D"],
        "Huawei C8860E": ["Huawei", "Honor"],
        "Huawei M835": ["Huawei", "M835"],
        "Huawei M860": ["Huawei", "Ascend"],
        "Huawei M921": ["Huawei", "M921"],
        "Huawei S8520": ["Huawei", "S8520"],
        "Huawei S8600": ["Huawei", "S8600"],
        "Huawei T8300": ["Huawei", "T8300"],
        "Huawei T8600": ["Huawei", "T8600"],
        "Huawei T8830": ["Huawei", "T8830"],
        T8830: ["Huawei", "T8830"],
        T8620: ["Huawei", "T8620"],
        "Huawei T8828": ["Huawei", "T8828"],
        "Huawei U8220": ["Huawei", "U8220"],
        "Huawei u8500": ["Huawei", "IDEOS X2"],
        "Huawei U8815": ["Huawei", "Ascend G300"],
        "Huawei U8825D": ["Huawei", "Ascend G330D"],
        "Huawei U8850": ["Huawei", "Vision"],
        "Huawei U8652": ["Huawei", "Sonic"],
        "Huawei U8800-51": ["Huawei", "IDEOS X5"],
        "Huawei U8818": ["Huawei", "Ascend G300"],
        "Huawei U9000": ["Huawei", "Ascend X"],
        "Huawei IDEOS U8500": ["Huawei", "IDEOS X2"],
        "Huawei IDEOS U8650": ["Huawei", "Sonic"],
        "Huawei IDEOS X3": ["Huawei", "IDEOS X3"],
        "Huawei Ideos X5": ["Huawei", "IDEOS X5"],
        "Huawei Ideos X5 1.12.9(ret4rt)": ["Huawei", "IDEOS X5"],
        "Huawei SONIC": ["Huawei", "Sonic"],
        "Huawei 8100-9": ["Huawei", "U8100"],
        FUSIONideos: ["Huawei", "IDEOS"],
        "Gnappo Ideos": ["Huawei", "IDEOS"],
        Ideos: ["Huawei", "IDEOS"],
        "IDEOS X5": ["Huawei", "IDEOS X5"],
        "Ideos S7": ["Huawei", "IDEOS S7", "tablet"],
        "IDEOS S7": ["Huawei", "IDEOS S7", "tablet"],
        "IDEOS S7 Slim": ["Huawei", "IDEOS S7", "tablet"],
        "Huawei S7": ["Huawei", "IDEOS S7", "tablet"],
        SONIC: ["Huawei", "Sonic"],
        "Kyivstar Aqua": ["Huawei", "Sonic"],
        "Lucky Ultra Sonic U8650": ["Huawei", "Sonic"],
        "Turkcell T20": ["Huawei", "Sonic"],
        "MTC 950": ["Huawei", "U8160"],
        "MTC 955": ["Huawei", "Sonic"],
        "MTC Evo": ["Huawei", "C8500"],
        "MTC Android": ["Huawei", "U8110"],
        S31HW: ["Huawei", "Pocket WiFi S"],
        S41HW: ["Huawei", "Pocket WiFi S II"],
        "007HW": ["Huawei", "Vision"],
        UM840: ["Huawei", "Evolution"],
        M860: ["Huawei", "Ascend"],
        M865: ["Huawei", "Ascend II"],
        M886: ["Huawei", "Glory"],
        C8150: ["Huawei", "IDEOS"],
        c8500: ["Huawei", "C8500"],
        C8500: ["Huawei", "C8500"],
        C8500S: ["Huawei", "C8500"],
        C8600: ["Huawei", "C8600"],
        c8650: ["Huawei", "C8650"],
        C8650: ["Huawei", "C8650"],
        c8800: ["Huawei", "C8800"],
        C8800: ["Huawei", "C8800"],
        c8810: ["Huawei", "Ascend G300C"],
        C8812: ["Huawei", "Ascend C8812"],
        S8600: ["Huawei", "S8600"],
        U8100: ["Huawei", "U8100"],
        U8110: ["Huawei", "U8110"],
        u8120: ["Huawei", "U8120"],
        U8120: ["Huawei", "U8120"],
        U8180: ["Huawei", "IDEOS X1"],
        U8220: ["Huawei", "Pulse"],
        U8300: ["Huawei", "U8300"],
        U8350: ["Huawei", "Boulder"],
        U8150: ["Huawei", "IDEOS"],
        U8160: ["Huawei", "U8160"],
        U8500: ["Huawei", "IDEOS X2"],
        "U8500 HiQQ": ["Huawei", "U8500 HiQQ Edition"],
        U8510: ["Huawei", "IDEOS X3"],
        u8650: ["Huawei", "Sonic"],
        U8650: ["Huawei", "Sonic"],
        "U8650-1": ["Huawei", "Sonic"],
        U8660: ["Huawei", "Sonic"],
        u8800: ["Huawei", "IDEOS X5"],
        U8800: ["Huawei", "IDEOS X5"],
        "U8800+": ["Huawei", "IDEOS X5"],
        U8800X: ["Huawei", "IDEOS X5"],
        U8800pro: ["Huawei", "IDEOS X5 Pro"],
        U8800PRO: ["Huawei", "IDEOS X5 Pro"],
        U8800Pro: ["Huawei", "IDEOS X5 Pro"],
        u8800pro: ["Huawei", "IDEOS X5 Pro"],
        "U8800 Pro": ["Huawei", "IDEOS X5 Pro"],
        U8818: ["Huawei", "Ascend G300"],
        U8850: ["Huawei", "Vision"],
        u8860: ["Huawei", "Honor"],
        U8860: ["Huawei", "Honor"],
        U9000: ["Huawei", "Ascend X"],
        U9200: ["Huawei", "Ascend P1"],
        "U9200-1": ["Huawei", "Ascend P1"],
        U9500: ["Huawei", "Ascend D1"],
        U9501L: ["Huawei", "Ascend D LTE"],
        U9510: ["Huawei", "Ascend D quad"],
        U9510E: ["Huawei", "Ascend D quad"],
        Comet: ["Huawei", "Comet"],
        GS02: ["Huawei", "Honor"],
        GS03: ["Huawei", "Ascend P1"],
        "DroniX-0.5": ["Huawei", "U8180"],
        "MTS-SP101": ["Huawei", "C8511"],
        TSP21: ["Huawei", "U8110"],
        "HYUNDAI H6": ["Hyundai", "Storm H6"],
        "iBall Slide i7011": ["iBall", "Slide i7011"],
        "NetTAB RUNE": ["IconBit", "NetTab Rune", "tablet"],
        D70W: ["Icoo", "D70W", "tablet"],
        D80: ["Icoo", "D80", "tablet"],
        "INFOBAR A01": ["iida", "INFOBAR A01"],
        M009F: ["Infotmic", "M009F"],
        AZ210A: ["Intel", "AZ210A"],
        AZ210B: ["Intel", "AZ210B"],
        AZ510: ["Intel", "AZ510"],
        greenridge: ["Intel", "Green Ridge", "tablet"],
        "INQ Cloud Touch": ["INQ", "Cloud Touch"],
        "ILT-MX100": ["iRiver", "Tab", "tablet"],
        IVIO_DE38: ["Ivio", "DE38"],
        "JY-G2": ["Jiayu", "G2"],
        "JXD S601WIFI": ["JXD", "S601 WIFI", "media"],
        A2: ["KakaTech", "A2"],
        D91: ["KK", "D91", "tablet"],
        K080: ["Kobo", "K080", "ereader"],
        A106: ["koobee", "A160"],
        "KPT A9": ["KPT", "A9"],
        "EV-S100": ["Kttech", "Take EV-S100"],
        "KM-S120": ["Kttech", "Take 2 KM-S120"],
        "KM-S200": ["TAKE", "Janus KM-S200"],
        "KM-S220": ["Kttech", "Take Tachy KM-S220"],
        "Kyobo mirasol eReader": ["Kyobo", "eReader", "ereader"],
        ISW11K: ["Kyocera", "Digno"],
        "JC-KSP8000": ["Kyocera", "Echo"],
        KSP8000: ["Kyocera", "Echo"],
        Zio: ["Kyocera", "Zio"],
        C5155: ["Kyocera", "C5155"],
        C5170: ["Kyocera", "C5170"],
        M9300: ["Kyocera", "M9300"],
        E800: ["K-Touch", "E800"],
        W606: ["K-Touch", "W606"],
        "K-Touch T619": ["K-Touch", "T619"],
        "K-Touch W619": ["K-Touch", "W619"],
        "K-Touch W650": ["K-Touch", "W650"],
        W700: ["K-Touch", "W700"],
        W800: ["K-Touch", "W800"],
        W806: ["K-Touch", "W806"],
        W808: ["K-Touch", "W808"],
        W810: ["K-Touch", "W810"],
        X900: ["Lava", "XOLO X900"],
        "Lenovo A798t": ["Lenovo", "A798t"],
        "LENOVO-Lenovo-A288t": ["Lenovo", "LePhone A288"],
        "ThinkPad Tablet": ["Lenovo", "ThinkPad Tablet", "tablet"],
        K1: ["Lenovo", "IdeaPad K1", "tablet"],
        "Ideapad S10-3T": ["Lenovo", "IdeaPad S10-3T", "tablet"],
        "S2005A-H": ["Lenovo", "S2005A"],
        "IdeaTab S2007A-D": ["Lenovo", "IdeaTab S2007A", "tablet"],
        IdeaTabV2007A: ["Lenovo", "IdeaTab V2007A", "tablet"],
        "IdeaTabV2007A-D-I": ["Lenovo", "IdeaTab V2007A", "tablet"],
        IdeaTabV2010A: ["Lenovo", "IdeaTab V2010A", "tablet"],
        "IdeaTab A2107A-H": ["Lenovo", "IdeaTab V2107A", "tablet"],
        "A1 07": ["Lenovo", "LePad", "tablet"],
        "lepad 001b": ["Lenovo", "LePad", "tablet"],
        "lepad 001n": ["Lenovo", "LePad", "tablet"],
        "3GC101": ["Lenovo", "LePhone 3GC101"],
        "Lenovo 3GC101": ["Lenovo", "LePhone 3GC101"],
        "3GW100": ["Lenovo", "LePhone 3GW100"],
        "Lenovo 3GW100": ["Lenovo", "LePhone 3GW100"],
        "3GW101": ["Lenovo", "LePhone 3GW101"],
        "Lenovo 3GW101": ["Lenovo", "LePhone 3GW101"],
        "Lephone 3GW101": ["Lenovo", "LePhone 3GW101"],
        "Lenovo A1-32AB0": ["Lenovo", "LePhone A1-32AB0"],
        "Lenovo S1-37AH0": ["Lenovo", "LePhone S1-37AH0"],
        "S1 37AHO": ["Lenovo", "LePhone S1-37AH0"],
        "Lenovo S2-38AH0": ["Lenovo", "LePhone S2-38AH0"],
        "Lenovo S2-38AT0": ["Lenovo", "LePhone S2-38AT0"],
        "Lenovo A288t": ["Lenovo", "LePhone A288"],
        "Lenovo A366t": ["Lenovo", "LePhone A366"],
        "Lenovo A390e": ["Lenovo", "LePhone A390"],
        "Lenovo A500": ["Lenovo", "LePhone A500"],
        "Lenovo A520": ["Lenovo", "LePhone A520"],
        "Lenovo A560e": ["Lenovo", "A560"],
        "Lenovo A668t": ["Lenovo", "LePhone A668"],
        "Lenovo A698t": ["Lenovo", "LePhone A698"],
        "Lenovo A750": ["Lenovo", "LePhone A750"],
        "Lenovo A780": ["Lenovo", "LePhone A780"],
        "Lenovo A789": ["Lenovo", "LePhone A789"],
        "Lenovo A790e": ["Lenovo", "LePhone A790"],
        "Lenovo P70": ["Lenovo", "LePhone P70"],
        "Lenovo P700": ["Lenovo", "LePhone P700"],
        "Lenovo S850e": ["Lenovo", "S850"],
        "Lenovo S880": ["Lenovo", "S880"],
        "Lenovo K860": ["Lenovo", "K860"],
        A30t: ["Lenovo", "A30t"],
        "Lenovo A60": ["Lenovo", "A60"],
        "Lenovo A65": ["Lenovo", "A65"],
        "Lenovo A66t": ["Lenovo", "A66t"],
        "Lenovo A68e": ["Lenovo", "A68e"],
        "Lenovo K800": ["Lenovo", "K800"],
        "IDEA TV T100": ["Lenovo", "IDEA TV", "television"],
        "IDEA TV K91": ["Lenovo", "IDEA TV", "television"],
        TC970: ["Le Pan", "TC970", "tablet"],
        LePanII: ["Le Pan", "II", "tablet"],
        "LG-C555": ["LG", "Optimus Chat"],
        "LG-C555-parrot": ["LG", "Optimus Chat"],
        "LG-C660h": ["LG", "Optimus Pro"],
        "LG-C729": ["LG", "DoublePlay"],
        "LG-C800G": ["LG", "Eclypse"],
        "LG-CX670": ["LG", "Optimus 3G"],
        "LG-E400": ["LG", "Optimus L3"],
        "LG-E400f": ["LG", "Optimus L3"],
        "LG-E510": ["LG", "Optimus Hub"],
        "LG-E510f": ["LG", "Optimus Hub"],
        "LG-E510g": ["LG", "Optimus Hub"],
        "LG-E610": ["LG", "Optimus L5"],
        "LG-E612": ["LG", "Optimus L5"],
        "LG-E612g": ["LG", "Optimus L5"],
        "LG-E615F": ["LG", "E615"],
        "LG-E617G": ["LG", "E617"],
        "LG-E720": ["LG", "Optimus Chic"],
        "LG-E720b": ["LG", "Optimus Chic"],
        "LG-E730": ["LG", "Optimus Sol"],
        "LG-E970": ["LG", "Shine"],
        "LG-F100L": ["LG", "Optimus Vu"],
        "LG-F100S": ["LG", "Optimus Vu"],
        "LG-F120K": ["LG", "Optimus LTE Tag"],
        "LG-F120L": ["LG", "Optimus LTE Tag"],
        "LG-F120S": ["LG", "Optimus LTE Tag"],
        "LG-F160K": ["LG", "Optimus LTE II"],
        "LG-F160L": ["LG", "Optimus LTE II"],
        "LG-F160S": ["LG", "Optimus LTE II"],
        "LG-F180L": ["LG", "F180L"],
        "LG-GT540": ["LG", "Optimus"],
        "LG-GT540f": ["LG", "Optimus"],
        "LG-GT540 Swift": ["LG", "Optimus"],
        "LG-GW620": ["LG", "GW620"],
        "LG-KH5200": ["LG", "Andro-1"],
        "LG-KU3700": ["LG", "Optimus One"],
        "LG-KU5400": ["LG", "PRADA 3.0"],
        "LG-KU5900": ["LG", "Optimus Black"],
        "LG-L40G": ["LG", "L40G"],
        "LG-LG855": ["LG", "Marquee"],
        "LG-LS670": ["LG", "Optimus S"],
        "LG-LS696": ["LG", "Optimus Elite"],
        "LG-LS840": ["LG", "Viper 4G"],
        "LG-LS855": ["LG", "Marquee"],
        "LG-LS860": ["LG", "'Cayenne'"],
        "LG-LS970": ["LG", "'Eclipse'"],
        "LG-LU3000": ["LG", "Optimus Mach"],
        "LG-LU3100": ["LG", "Optimus Chic"],
        "LG-LU3700": ["LG", "Optimus One"],
        "LG-LU5400": ["LG", "PRADA 3.0"],
        "LG-LU6200": ["LG", "Optimus Q2"],
        "LG-lu6200": ["LG", "Optimus Q2"],
        "LG-LU6500": ["LG", "Optimus Note"],
        "LG-LU6800": ["LG", "Optimus Big"],
        "LG-LU8300": ["LG", "Optimus Pad LTE"],
        "LG-LW690": ["LG", "Optimus C"],
        "LG-LW770": ["LG", "LW770"],
        "LG-MS690": ["LG", "Optimus M"],
        "LG-MS770": ["LG", "MS770"],
        "LG-MS840": ["LG", "Connect 4G"],
        "LG-MS910": ["LG", "Esteem"],
        "LG-MS695": ["LG", "Optimus M+"],
        "LG P350": ["LG", "Optimus Me"],
        "LG-P350": ["LG", "Optimus Me"],
        "LG-P350f": ["LG", "Optimus Me"],
        "LG-P350g": ["LG", "Optimus Me"],
        "LG-P355": ["LG", "P355"],
        "LG-P500": ["LG", "Optimus One"],
        "LG-P500h": ["LG", "Optimus One"],
        "LG-P500h-parrot": ["LG", "Optimus One"],
        "LG-P503": ["LG", "Optimus One"],
        "LG-P504": ["LG", "Optimus One"],
        "LG-P505": ["LG", "Phoenix"],
        "LG-P505R": ["LG", "Phoenix"],
        "LG-P506": ["LG", "Thrive"],
        "LG-P509": ["LG", "Optimus T"],
        "LG-P690": ["LG", "Optimus Net"],
        "LG-P693": ["LG", "P693"],
        "LG-P698": ["LG", "Optimus Net"],
        "LG-P698f": ["LG", "Optimus Net"],
        "LG-P700": ["LG", "Optimus L7"],
        "LG-P705": ["LG", "Optimus L7"],
        "LG-P705f": ["LG", "Optimus L7"],
        "LG-P705g": ["LG", "Optimus L7"],
        "LG-P708g": ["LG", "P708"],
        "LG-P720": ["LG", "Optimus Chic"],
        "LG-P720h": ["LG", "Optimus Chic"],
        "LG-P725": ["LG", "Optimus 3D Max"],
        "LG-P760": ["LG", "P760"],
        "LG-P769": ["LG", "P769"],
        "LG-P860": ["LG", "P860"],
        "LG-P870": ["LG", "P870"],
        "LG-P870F": ["LG", "P870"],
        "LG-P880": ["LG", "X3"],
        "LG-P880g": ["LG", "X3"],
        "LG-P895": ["LG", "P895"],
        "LG-P920": ["LG", "Optimus 3D"],
        "LG-P920h": ["LG", "Optimus 3D"],
        "LG-P925": ["LG", "Thrill"],
        "LG-P925g": ["LG", "Thrill"],
        "LG-P930": ["LG", "Nitro HD"],
        "LG-P936": ["LG", "Optimus LTE"],
        "LG-P940": ["LG", "PRADA 3.0"],
        "LG-P970": ["LG", "Optimus Black"],
        "LG-P970h": ["LG", "Optimus Black"],
        "LG-P990": ["LG", "Optimus 2X Speed"],
        "LG-P990h": ["LG", "Optimus 2X Speed"],
        "LG-P990hN": ["LG", "Optimus 2X Speed"],
        "LG-P990H": ["LG", "Optimus 2X Speed"],
        "LG-P993": ["LG", "Optimus 2X"],
        "LG-SU540": ["LG", "PRADA 3.0"],
        "LG-SU640": ["LG", "Optimus LTE"],
        "LG-SU660": ["LG", "Optimus 2X"],
        "LG-SU760": ["LG", "Optimus 3D"],
        "LG-SU760-Kust": ["LG", "Optimus 3D"],
        "LG-SU870": ["LG", "Optimus 3D Cube"],
        "LG-SU880": ["LG", "Optimus EX"],
        "LG-US670": ["LG", "Optimus U"],
        "LG-US730": ["LG", "US730"],
        "LG-V900": ["LG", "Optimus Pad", "tablet"],
        "LG-V905R": ["LG", "Optimus G-Slate", "tablet"],
        "LG-V909": ["LG", "Optimus G-Slate", "tablet"],
        "LG-VM670": ["LG", "Optimus V"],
        "LG-VM696": ["LG", "Optimus Elite"],
        "LG-VM701": ["LG", "Optimus Slider"],
        "LG-VS660": ["LG", "Vortex"],
        "LG-VS700": ["LG", "Enlighten"],
        "LG-VS740": ["LG", "Ally"],
        "LG-VS840": ["LG", "Connect 4G"],
        "LG-VS910": ["LG", "Revolution"],
        "lgp-970": ["LG", "Optimus Black"],
        E900: ["LG", "Optimus 7"],
        GT540: ["LG", "Optimus GT540"],
        GW620: ["LG", "GW620"],
        KU9500: ["LG", "Optimus Z"],
        LGC660: ["LG", "Optimus Pro"],
        LGL45C: ["LG", "Optimus Net"],
        LGL55C: ["LG", "Optimus Q"],
        LU2300: ["LG", "Optimus Q"],
        LS670: ["LG", "Optimus S"],
        P940: ["LG", "PRADA 3.0"],
        P990: ["LG", "Optimus 2X Speed"],
        "USCC-US730": ["LG", "US730"],
        "USCC-US760": ["LG", "Genesis"],
        VM670: ["LG", "Optimus V"],
        "VS840 4G": ["LG", "Connect 4G"],
        "VS900-4G": ["LG", "VS900"],
        "VS910 4G": ["LG", "Revolution 4G"],
        "VS920 4G": ["LG", "Spectrum 4G"],
        "VS930 4G": ["LG", "VS930"],
        "VS950 4G": ["LG", "VS950"],
        "L-01D": ["LG", "Optimus LTE"],
        "L-02D": ["LG", "PRADA phone"],
        "L-04C": ["LG", "Optimus Chat"],
        "L-05D": ["LG", "Optimus it"],
        "L-06C": ["LG", "Optimus Pad", "tablet"],
        "L-06D": ["LG", "Optimus Vu"],
        "L-07C": ["LG", "Optimus Bright"],
        "LG-Eve": ["LG", "Eve"],
        "LG-Optimus One P500": ["LG", "Optimus One"],
        "LG-Optimus 2X": ["LG", "Optimus 2X"],
        "LG-GT540 Optimus": ["LG", "Optimus"],
        "LG-Optimus Black": ["LG", "Optimus Black"],
        Ally: ["LG", "Ally"],
        Optimus: ["LG", "Optimus"],
        "Optimus Me": ["LG", "Optimus Me"],
        "optimus me p350": ["LG", "Optimus Me"],
        "Optimus 2X": ["LG", "Optimus 2X"],
        "Optimus 2x": ["LG", "Optimus 2X"],
        IS11LG: ["LG", "Optimus X"],
        Vortex: ["LG", "Vortex"],
        "LDK-ICK v1.4": ["LG", "Esteem"],
        T6: ["Malata", "Zpad T6", "tablet"],
        "Malata SMBA1002": ["Malata", "Tablet SMB-A1002", "tablet"],
        STM712HCZ: ["Mediacom", "SmartPad 712c", "tablet"],
        STM803HC: ["Mediacom", "SmartPad 810c", "tablet"],
        "Mediacom 810C": ["Mediacom", "SmartPad 810c", "tablet"],
        Smartpad810c: ["Mediacom", "SmartPad 810c", "tablet"],
        SmartPad810c: ["Mediacom", "SmartPad 810c", "tablet"],
        MP810C: ["Mediacom", "SmartPad 810c", "tablet"],
        MP907C: ["Mediacom", "SmartPad 907c", "tablet"],
        MTK6516: ["Mediatek", "MTK6516"],
        "LIFETAB S9512": ["Medion", "Lifetab S9512", "tablet"],
        "LIFETAB P9514": ["Medion", "Lifetab P9514", "tablet"],
        "MD LIFETAB P9516": ["Medion", "Lifetab P9516", "tablet"],
        "MEDION LIFE P4310": ["Medion", "Life P4310"],
        M8: ["Meizu", "M8"],
        M9: ["Meizu", "M9"],
        M040: ["Meizu", "M040"],
        "M9-unlocked": ["Meizu", "M9"],
        "meizu m9": ["Meizu", "M9"],
        "MEIZU M9": ["Meizu", "M9"],
        "MEIZU MX": ["Meizu", "MX"],
        M030: ["Meizu", "MX M030"],
        M031: ["Meizu", "MX M031"],
        M032: ["Meizu", "MX M032"],
        Slidepad: ["Memup", "Slidepad", "tablet"],
        A45: ["Micromax", "A45 Punk"],
        "Micromax A50": ["Micromax", "A50 Ninja"],
        "Micromax A60": ["Micromax", "Andro A60"],
        "Micromax A70": ["Micromax", "Andro A70"],
        "P300(Funbook)": ["Micromax", "Funbook P300", "tablet"],
        AT735: ["Moinstone", "AT735", "tablet"],
        A853: ["Motorola", "Milestone"],
        A953: ["Motorola", "Milestone 2"],
        A1680: ["Motorola", "MOTO A1680"],
        ET1: ["Motorola", "ET1 Enterprise Tablet", "tablet"],
        MB200: ["Motorola", "CLIQ"],
        MB300: ["Motorola", "BACKFLIP"],
        MB501: ["Motorola", "CLIQ XT"],
        MB502: ["Motorola", "CHARM"],
        MB511: ["Motorola", "FLIPOUT"],
        MB520: ["Motorola", "BRAVO"],
        MB525: ["Motorola", "DEFY"],
        "MB525+": ["Motorola", "DEFY"],
        "MB525 for me": ["Motorola", "DEFY"],
        MB526: ["Motorola", "DEFY+"],
        MB611: ["Motorola", "CLIQ 2"],
        MB612: ["Motorola", "XPRT"],
        MB632: ["Motorola", "PRO+"],
        MB855: ["Motorola", "PHOTON 4G"],
        MB860: ["Motorola", "ATRIX"],
        MB861: ["Motorola", "ATRIX"],
        mb861: ["Motorola", "ATRIX"],
        MB865: ["Motorola", "ATRIX 2"],
        MB870: ["Motorola", "Droid X2"],
        MB886: ["Motorola", "DINARA"],
        ME501: ["Motorola", "CLIQ XT"],
        ME511: ["Motorola", "FLIPOUT"],
        me525: ["Motorola", "MOTO ME525"],
        Me525: ["Motorola", "MOTO ME525"],
        ME525: ["Motorola", "MOTO ME525"],
        "ME525+": ["Motorola", "MOTO ME525"],
        ME600: ["Motorola", "BACKFLIP"],
        ME632: ["Motorola", "PRO+"],
        ME722: ["Motorola", "Milestone 2"],
        ME811: ["Motorola", "Droid X"],
        ME860: ["Motorola", "ATRIX"],
        ME863: ["Motorola", "Milestone 3"],
        ME865: ["Motorola", "ATRIX 2"],
        MT620: ["Motorola", "MOTO MT620"],
        MT620t: ["Motorola", "MOTO MT620"],
        MT716: ["Motorola", "MOTO MT716"],
        MT810: ["Motorola", "MOTO MT810"],
        MT870: ["Motorola", "MOTO MT870"],
        MT917: ["Motorola", "MT917"],
        MZ505: ["Motorola", "XOOM Family Edition", "tablet"],
        MZ600: ["Motorola", "XOOM 4G LTE", "tablet"],
        MZ601: ["Motorola", "XOOM 3G", "tablet"],
        MZ602: ["Motorola", "XOOM 4G LTE", "tablet"],
        MZ603: ["Motorola", "XOOM 3G", "tablet"],
        MZ604: ["Motorola", "XOOM WiFi", "tablet"],
        MZ605: ["Motorola", "XOOM 3G", "tablet"],
        MZ606: ["Motorola", "XOOM WiFi", "tablet"],
        MZ607: ["Motorola", "XOOM 2 WiFi Media Edition", "tablet"],
        MZ609: ["Motorola", "Droid XYBOARD 8.2", "tablet"],
        "MZ609 4G": ["Motorola", "Droid XYBOARD 8.2", "tablet"],
        MZ615: ["Motorola", "XOOM 2 WiFi", "tablet"],
        MZ617: ["Motorola", "Droid XYBOARD 10.1", "tablet"],
        "MZ617 4G": ["Motorola", "Droid XYBOARD 10.1", "tablet"],
        WX435: ["Motorola", "TRIUMPH WX435"],
        WX445: ["Motorola", "CITRUS WX445"],
        XT300: ["Motorola", "SPICE"],
        XT301: ["Motorola", "MOTO XT301"],
        XT311: ["Motorola", "FIRE"],
        XT316: ["Motorola", "MOTO XT316"],
        XT319: ["Motorola", "MOTO XT319"],
        XT390: ["Motorola", "MOTO XT390"],
        XT320: ["Motorola", "DEFY Mini"],
        XT321: ["Motorola", "DEFY Mini"],
        XT500: ["Motorola", "MOTO XT500"],
        "xt-500": ["Motorola", "MOTO XT500"],
        XT502: ["Motorola", "QUENCH XT5"],
        XT530: ["Motorola", "FIRE XT"],
        XT531: ["Motorola", "FIRE XT"],
        XT532: ["Motorola", "XT532"],
        XT535: ["Motorola", "DEFY"],
        XT550: ["Motorola", "XT550"],
        XT556: ["Motorola", "XT556"],
        XT603: ["Motorola", "ADMIRAL"],
        XT610: ["Motorola", "Droid Pro"],
        XT615: ["Motorola", "MOTO XT615"],
        XT626: ["Motorola", "MOTO XT626"],
        XT681: ["Motorola", "MOTO XT681"],
        XT682: ["Motorola", "Droid 3"],
        XT685: ["Motorola", "MOTO XT685"],
        XT687: ["Motorola", "ATRIX TV"],
        XT701: ["Motorola", "XT701"],
        XT702: ["Motorola", "MOTO XT702"],
        XT711: ["Motorola", "MOTO XT711"],
        XT720: ["Motorola", "Milestone"],
        XT875: ["Motorola", "Droid Bionic"],
        XT800: ["Motorola", "MOTO XT800"],
        "XT800+": ["Motorola", "MOTO XT800"],
        XT800W: ["Motorola", "MOTO Glam"],
        XT806: ["Motorola", "MOTO XT806"],
        XT860: ["Motorola", "Milestone 3"],
        XT862: ["Motorola", "Droid 3"],
        XT882: ["Motorola", "MOTO XT882"],
        XT883: ["Motorola", "Milestone 3"],
        XT889: ["Motorola", "XT889"],
        XT897: ["Motorola", "Droid 4"],
        XT901: ["Motorola", "RAZR"],
        XT910: ["Motorola", "RAZR"],
        XT910K: ["Motorola", "RAZR"],
        XT910S: ["Motorola", "RAZR"],
        "XT910 4G": ["Motorola", "RAZR"],
        XT912: ["Motorola", "Droid RAZR"],
        XT923: ["Motorola", "Droid RAZR HD"],
        XT925: ["Motorola", "Droid RAZR HD"],
        XT926: ["Motorola", "Droid RAZR"],
        "XT926 4G": ["Motorola", "Droid RAZR"],
        XT928: ["Motorola", "XT928"],
        "Atrix 2": ["Motorola", "ATRIX 2"],
        "Atrix 4g": ["Motorola", "ATRIX 4G"],
        "Atrix 4G": ["Motorola", "ATRIX 4G"],
        "Atrix 4G ME860": ["Motorola", "ATRIX 4G"],
        CLIQ: ["Motorola", "CLIQ"],
        "CLIQ XT": ["Motorola", "CLIQ XT"],
        CLIQ2: ["Motorola", "CLIQ 2"],
        Corvair: ["Motorola", "Corvair", "tablet"],
        DEFY: ["Motorola", "DEFY"],
        "Defy+": ["Motorola", "DEFY+"],
        "Defy Plus": ["Motorola", "DEFY+"],
        Devour: ["Motorola", "Devour"],
        Dext: ["Motorola", "Dext"],
        Droid: ["Motorola", "Droid"],
        DROID: ["Motorola", "Droid"],
        DROID2: ["Motorola", "Droid 2"],
        "DROID2 GLOBAL": ["Motorola", "Droid 2"],
        "DROID2 Global": ["Motorola", "Droid 2"],
        Droid2Global: ["Motorola", "Droid 2"],
        "DROID 2": ["Motorola", "Droid 2"],
        DROID3: ["Motorola", "Droid 3"],
        DROID4: ["Motorola", "Droid 4"],
        "DROID4 4G": ["Motorola", "Droid 4"],
        "DROID Pro": ["Motorola", "Droid Pro"],
        "DROID BIONIC": ["Motorola", "Droid Bionic"],
        "DROID BIONIC 4G": ["Motorola", "Droid Bionic"],
        "DROID BIONIC XT875 4G": ["Motorola", "Droid Bionic"],
        DROIDRAZR: ["Motorola", "Droid RAZR"],
        "Droid Razr": ["Motorola", "Droid RAZR"],
        "DROID RAZR": ["Motorola", "Droid RAZR"],
        "DROID RAZR 4G": ["Motorola", "Droid RAZR"],
        "DROID SPYDER": ["Motorola", "Droid RAZR"],
        "DROID RAZR HD": ["Motorola", "Droid RAZR HD"],
        "DROID RAZR HD 4G": ["Motorola", "Droid RAZR HD"],
        DroidX: ["Motorola", "Droid X"],
        DROIDX: ["Motorola", "Droid X"],
        "droid x": ["Motorola", "Droid X"],
        "Droid X": ["Motorola", "Droid X"],
        "DROID X": ["Motorola", "Droid X"],
        "DROID X2": ["Motorola", "Droid X2"],
        Electrify: ["Motorola", "Electrify"],
        "Milestone XT720": ["Motorola", "Milestone"],
        "Milestone Xt720": ["Motorola", "Milestone"],
        Milestone: ["Motorola", "Milestone"],
        "A853 Milestone": ["Motorola", "Milestone"],
        "Milestone X": ["Motorola", "Milestone X"],
        "Milestone X2": ["Motorola", "Milestone X2"],
        MotoroiX: ["Motorola", "Droid X"],
        "Moto Backflip": ["Motorola", "BACKFLIP"],
        RAZR: ["Motorola", "RAZR"],
        Triumph: ["Motorola", "TRIUMPH"],
        "Opus One": ["Motorola", "i1"],
        Photon: ["Motorola", "PHOTON"],
        "Photon 4G": ["Motorola", "PHOTON 4G"],
        XOOM: ["Motorola", "XOOM", "tablet"],
        Xoom: ["Motorola", "XOOM", "tablet"],
        "XOOM 2": ["Motorola", "XOOM 2", "tablet"],
        "XOOM 2 ME": ["Motorola", "XOOM 2", "tablet"],
        "XOOM MZ606": ["Motorola", "XOOM WiFi", "tablet"],
        ISW11M: ["Motorola", "PHOTON"],
        IS12M: ["Motorola", "RAZR"],
        MOTWX435KT: ["Motorola", "TRIUMPH"],
        "X3-Ice MIUI XT720 Memorila Classics": ["Motorola", "Milestone"],
        "NABI-A": ["Nabi", "Kids tablet", "tablet"],
        Newpad: ["Newsmy", "Newpad", "tablet"],
        "Newpad-K97": ["Newsmy", "Newpad K97", "tablet"],
        "Newpad P9": ["Newsmy", "Newpad P9", "tablet"],
        "M-PAD N8": ["Newsmy", "M-pad N8", "tablet"],
        "LT-NA7": ["NEC", "LT-NA7"],
        "N-01D": ["NEC", "MEDIAS PP N-01D"],
        "N-04C": ["NEC", "MEDIAS N-04C"],
        "N-04D": ["NEC", "MEDIAS LTE N-04D"],
        "N-05D": ["NEC", "MEDIAS ES N-05D"],
        "N-06C": ["NEC", "MEDIAS WP N-06C"],
        "N-06D": ["NEC", "MEDIAS Tab N-06D", "tablet"],
        "N-07D": ["NEC", "MEDIAS X N-07D"],
        "101N": ["NEC", "MEDIAS CH Softbank 101N"],
        IS11N: ["NEC", "MEDIAS BR IS11N"],
        "Nexian NX-A890": ["Nexian", "Journey"],
        "NX-A891": ["Nexian", "Ultra Journey"],
        M726HC: ["Nextbook", "Premium 7", "ereader"],
        NXM726HN: ["Nextbook", "Premium 7", "ereader"],
        NXM803HD: ["Nextbook", "Premium 8", "ereader"],
        DATAM803HC: ["Nextbook", "Premium 8", "ereader"],
        NXM901: ["Nextbook", "Next 3", "ereader"],
        "NGM Vanity Smart": ["NGM", "Vanity Smart"],
        "Nokia N9": ["Nokia", "N9"],
        "Nokia N900": ["Nokia", "N900"],
        Lumia800: ["Nokia", "Lumia 800"],
        "Lumia 900": ["Nokia", "Lumia 900"],
        "Notion Ink ADAM": ["Notion Ink", "ADAM", "tablet"],
        "P4D SIRIUS": ["Nvsbl", "P4D SIRIUS", "tablet"],
        "P4D Sirius": ["Nvsbl", "P4D SIRIUS", "tablet"],
        EFM710A: ["Oblio", "Mint 7x", "tablet"],
        "ODYS-Xpress": ["Odys", "Xpress", "tablet"],
        "Olivetti Olipad 100": ["Olivetti", "Olipad 100", "tablet"],
        OP110: ["Olivetti", "Olipad 110", "tablet"],
        "ONDA MID": ["Onda", "MID", "tablet"],
        VX580A: ["Onda", "VX580A", "tablet"],
        VX610A: ["Onda", "VX610A", "tablet"],
        TQ150: ["Onda", "TQ150"],
        N2T: ["ONN", "N2T", "tablet"],
        Renesas: ["Opad", "Renesas", "tablet"],
        "renesas emev": ["Opad", "Renesas", "tablet"],
        X903: ["Oppo", "Find Me X903"],
        X905: ["Oppo", "Find 3 X905"],
        R805: ["Oppo", "R805"],
        R801: ["Oppo", "R801"],
        R811: ["Oppo", "R811"],
        X909: ["Oppo", "X909"],
        OPPOR801: ["Oppo", "R801"],
        OPPOX905: ["Oppo", "Find 3 X905"],
        OPPOX907: ["Oppo", "Find 3 X907"],
        X907: ["Oppo", "Find 3 X907"],
        X9015: ["Oppo", "Find X9015"],
        OPPOX9017: ["Oppo", "Finder X9017"],
        OPPOU701: ["Oppo", "OPPOU701"],
        OPPOR807: ["Oppo", "Real R807"],
        OPPOR805: ["Oppo", "Real R805"],
        R807: ["Oppo", "Real R807"],
        OPPOT703: ["Oppo", "T703"],
        "P-01D": ["Panasonic", "P-01D"],
        "P-02D": ["Panasonic", "Lumix Phone"],
        "P-04D": ["Panasonic", "Eluga"],
        "P-07C": ["Panasonic", "P-07C"],
        dL1: ["Panasonic", "Eluga dL1"],
        "101P": ["Panasonic", "Lumix Phone"],
        "JT-H580VT": ["Panasonic", "BizPad 7", "tablet"],
        "JT-H581VT": ["Panasonic", "BizPad 10", "tablet"],
        "FZ-A1A": ["Panasonic", "Toughpad", "tablet"],
        pandigital9hr: ["Pandigital", "9HR", "tablet"],
        pandigital9hr2: ["Pandigital", "9HR2", "tablet"],
        pandigitalopc1: ["Pandigital", "OPC1", "tablet"],
        pandigitalopp1: ["Pandigital", "OPP1", "tablet"],
        pandigitalp1hr: ["Pandigital", "p1hr", "tablet"],
        "IM-A600S": ["Pantech", "SIRIUS Ã�Â±"],
        "IM-A630K": ["Pantech", "SKY Izar"],
        "IM-A690L": ["Pantech", "SKY"],
        "IM-A690S": ["Pantech", "SKY"],
        "IM-A710K": ["Pantech", "SKY Vega Xpress"],
        "IM-A720L": ["Pantech", "SKY Vega Xpress"],
        "IM-A725L": ["Pantech", "SKY Vega X+"],
        "IM-A730s": ["Pantech", "SKY Vega S"],
        "IM-A730S": ["Pantech", "SKY Vega S"],
        "IM-A750K": ["Pantech", "SKY Mirach A"],
        "IM-A760S": ["Pantech", "SKY Vega Racer"],
        "IM-A770K": ["Pantech", "SKY Vega Racer"],
        "IM-A780L": ["Pantech", "SKY Vega Racer"],
        "IM-A800S": ["Pantech", "SKY Vega LTE"],
        "IM-A810K": ["Pantech", "SKY Vega LTE M"],
        "IM-A810S": ["Pantech", "SKY Vega LTE M"],
        "IM-A820L": ["Pantech", "SKY Vega LTE EX"],
        "IM-A830K": ["Pantech", "SKY Vega Racer 2"],
        "IM-A830L": ["Pantech", "SKY Vega Racer 2"],
        "IM-A830S": ["Pantech", "SKY Vega Racer 2"],
        "IM-A840S": ["Pantech", "SKY Vega S5"],
        "IM-A850K": ["Pantech", "IM-A850K"],
        "IM-T100K": ["Pantech", "SKY Vega No. 5", "tablet"],
        IS06: ["Pantech", "SIRIUS Ã�Â±"],
        ADR8995: ["Pantech", "Breakout"],
        "ADR8995 4G": ["Pantech", "Breakout"],
        "ADR910L 4G": ["Pantech", "ADR910L"],
        PantechP4100: ["Pantech", "Element", "tablet"],
        PantechP8000: ["Pantech", "Crossover"],
        PantechP8010: ["Pantech", "P8010"],
        PantechP9060: ["Pantech", "Pocket"],
        PantechP9070: ["Pantech", "Burst"],
        "SKY IM-A600S": ["Pantech", "SIRIUS Ã�Â±"],
        "SKY IM-A630K": ["Pantech", "SKY Izar"],
        "SKY IM-A650S": ["Pantech", "SKY Vega"],
        IS11PT: ["Pantech", "Mirach IS11PT"],
        PAT712W: ["Perfeo", "PAT712W", "tablet"],
        X7G: ["Pearl", "Touchlet X7G", "tablet"],
        FWS810: ["PHICOMM", "FWS810"],
        "Philips PI5000": ["Philips", "PI5000", "tablet"],
        PI7000: ["Philips", "PI7000", "tablet"],
        "Philips W626": ["Philips", "W626"],
        "Philips W632": ["Philips", "W632"],
        MOMO: ["Ployer", "MOMO", "tablet"],
        MOMO15: ["Ployer", "MOMO15", "tablet"],
        "PocketBook A7": ["PocketBook", "A7", "tablet"],
        "PocketBook A10": ["PocketBook", "A10", "tablet"],
        "Mobii 7": ["Point Of View", "Mobii 7", "tablet"],
        PMP3384BRU: ["Prestigio", "Multipad 3384", "tablet"],
        TB07FTA: ["Positivo", "TB07FTA", "tablet"],
        "QW TB-1207": ["Qware", "Pro3", "tablet"],
        "W6HD ICS": ["Ramos", "W6HD", "tablet"],
        w10: ["Ramos", "W10", "tablet"],
        W10: ["Ramos", "W10", "tablet"],
        "w10 v2.0": ["Ramos", "W10 v2.0", "tablet"],
        "W10 V2.0": ["Ramos", "W10 v2.0", "tablet"],
        T11AD: ["Ramos", "T11AD", "tablet"],
        "T11AD.FE": ["Ramos", "T11AD", "tablet"],
        PlayBook: ["RIM", "BlackBerry PlayBook", "tablet"],
        "RBK-490": ["Ritmix", "RBK-490", "tablet"],
        A8HD: ["Saayi", "Dropad A8HD", "tablet"],
        "GT-S7568": ["Samsung", "S7568"],
        "Galaxy Nexus": ["Samsung", "Galaxy Nexus"],
        "GT-B5330": ["Samsung", "GT-B5330"],
        "GT-B5510": ["Samsung", "Galaxy Y Pro"],
        "GT-B5510B": ["Samsung", "Galaxy Y Pro"],
        "GT-B5510L": ["Samsung", "Galaxy Y Pro"],
        "GT-B5512": ["Samsung", "Galaxy Y Pro Duos"],
        "GT-B7510": ["Samsung", "Galaxy Pro"],
        "GT-B7510L": ["Samsung", "Galaxy Pro"],
        "GT-I5500": ["Samsung", "Galaxy 5"],
        "GT-I5500B": ["Samsung", "Galaxy 5"],
        "GT-I5500L": ["Samsung", "Galaxy 5"],
        "GT-I5500M": ["Samsung", "Galaxy 5"],
        "GT-I5500-MR3": ["Samsung", "Galaxy 5"],
        "GT-I5503": ["Samsung", "Galaxy 5"],
        "GT-I5508": ["Samsung", "Galaxy 5"],
        "GT-I5510": ["Samsung", "Galaxy 551"],
        "GT-I5510L": ["Samsung", "Galaxy 551"],
        "GT-I5510M": ["Samsung", "Galaxy 551"],
        "GT-I5510T": ["Samsung", "Galaxy 551"],
        "GT-I5700": ["Samsung", "Galaxy Spica"],
        "GT-I5700L": ["Samsung", "Galaxy Spica"],
        "GT-I5800": ["Samsung", "Galaxy Apollo"],
        "GT-I5800D": ["Samsung", "Galaxy Apollo"],
        "GT-I5800L": ["Samsung", "Galaxy Apollo"],
        "GT-I5801": ["Samsung", "Galaxy Apollo"],
        "GT-I6500U": ["Samsung", "Saturn"],
        "GT-I8000": ["Samsung", "Omnia 2"],
        "GT-I8150": ["Samsung", "Galaxy W"],
        "GT-I8150B": ["Samsung", "Galaxy W"],
        "GT-I8160": ["Samsung", "Galaxy Ace 2"],
        "GT-I8160L": ["Samsung", "Galaxy Ace 2"],
        "GT-I8160P": ["Samsung", "Galaxy Ace 2"],
        "GT-I8320": ["Samsung", "H1"],
        "GT-I8520": ["Samsung", "Galaxy Beam"],
        "GT-I8530": ["Samsung", "Galaxy Beam"],
        "GT-I8250": ["Samsung", "Galaxy Beam"],
        "GT-i9000": ["Samsung", "Galaxy S"],
        "GT-I9000": ["Samsung", "Galaxy S"],
        "GT-I9000B": ["Samsung", "Galaxy S"],
        "GT-I9000M": ["Samsung", "Galaxy S Vibrant"],
        "GT-I9000T": ["Samsung", "Galaxy S"],
        "GT-I9001": ["Samsung", "Galaxy S Plus"],
        "GT-I9003": ["Samsung", "Galaxy SL"],
        "GT-I9003L": ["Samsung", "Galaxy SL"],
        "GT-I9008": ["Samsung", "Galaxy S"],
        "GT-I9008L": ["Samsung", "Galaxy S"],
        "GT-I9010": ["Samsung", "Galaxy S Giorgio Armani"],
        "GT-I9018": ["Samsung", "Galaxy GT-I9018"],
        "GT-I9070": ["Samsung", "Galaxy S Advance"],
        "GT-I9070P": ["Samsung", "Galaxy S Advance"],
        "GT-I9082": ["Samsung", "Galaxy Grand DUOS"],
        "GT-I9088": ["Samsung", "Galaxy S"],
        "GT-i9100": ["Samsung", "Galaxy S II"],
        "GT-I9100": ["Samsung", "Galaxy S II"],
        "GT-I9100G": ["Samsung", "Galaxy S II"],
        "GT-I9100M": ["Samsung", "Galaxy S II"],
        "GT-I9100T": ["Samsung", "Galaxy S II"],
        "GT-I9100P": ["Samsung", "Galaxy S II"],
        "GT-I9103": ["Samsung", "Galaxy R"],
        "GT-I9108": ["Samsung", "Galaxy S II"],
        "GT-I9210": ["Samsung", "Galaxy S II LTE"],
        "GT-I9210T": ["Samsung", "Galaxy S II LTE"],
        "GT-I9220": ["Samsung", "Galaxy Note"],
        "GT-I9228": ["Samsung", "Galaxy Note"],
        "GT-I9250": ["Samsung", "Galaxy Nexus"],
        "GT-I9250 EUR XX": ["Samsung", "Galaxy Nexus"],
        "GT-I9260": ["Samsung", "Galaxy Premier"],
        "GT-I9300": ["Samsung", "Galaxy S III"],
        "GT-I9300T": ["Samsung", "Galaxy S III"],
        "GT-I9303T": ["Samsung", "Galaxy S III"],
        "GT-I9308": ["Samsung", "Galaxy S III"],
        "GT-I9500": ["Samsung", "Galaxy GT-I9500"],
        "GT-I9800": ["Samsung", "Galaxy GT-I9800"],
        "GT-N7000": ["Samsung", "Galaxy Note"],
        "GT-N7000B": ["Samsung", "Galaxy Note"],
        "GT-N7100": ["Samsung", "Galaxy Note II"],
        "GT-N7102": ["Samsung", "Galaxy Note II"],
        "GT-N8000": ["Samsung", "Galaxy Note 10.1"],
        "GT-N8010": ["Samsung", "Galaxy Note 10.1"],
        "GT-P1000": ["Samsung", "Galaxy Tab", "tablet"],
        "GT-P1000L": ["Samsung", "Galaxy Tab", "tablet"],
        "GT-P1000M": ["Samsung", "Galaxy Tab", "tablet"],
        "GT-P1000N": ["Samsung", "Galaxy Tab", "tablet"],
        "GT-P1000T": ["Samsung", "Galaxy Tab", "tablet"],
        "GT-P1000 Tablet": ["Samsung", "Galaxy Tab", "tablet"],
        "GT-P1010": ["Samsung", "Galaxy Tab", "tablet"],
        "GT-P3100": ["Samsung", "Galaxy Tab 2 (7.0)", "tablet"],
        "GT-P3100B": ["Samsung", "Galaxy Tab 2 (7.0)", "tablet"],
        "GT-P3110": ["Samsung", "Galaxy Tab 2 (7.0)", "tablet"],
        "GT-P3113": ["Samsung", "Galaxy Tab 2 (7.0)", "tablet"],
        "GT-P5100": ["Samsung", "Galaxy Tab 2 (10.1)", "tablet"],
        "GT-P5110": ["Samsung", "Galaxy Tab 2 (10.1)", "tablet"],
        "GT-P5113": ["Samsung", "Galaxy Tab 2 (10.1)", "tablet"],
        "GT-P6200": ["Samsung", "Galaxy Tab 7.0 Plus", "tablet"],
        "GT-P6200L": ["Samsung", "Galaxy Tab 7.0 Plus", "tablet"],
        "GT-P6201": ["Samsung", "Galaxy Tab 7.0 Plus N", "tablet"],
        "GT-P6210": ["Samsung", "Galaxy Tab 7.0 Plus", "tablet"],
        "GT-P6211": ["Samsung", "Galaxy Tab 7.0 Plus N", "tablet"],
        "GT-P6800": ["Samsung", "Galaxy Tab 7.7", "tablet"],
        "GT-P6810": ["Samsung", "Galaxy Tab 7.7", "tablet"],
        "GT-P7100": ["Samsung", "Galaxy Tab 10.1V", "tablet"],
        "GT-P7300": ["Samsung", "Galaxy Tab 8.9", "tablet"],
        "GT-P7300B": ["Samsung", "Galaxy Tab 8.9", "tablet"],
        "GT-P7310": ["Samsung", "Galaxy Tab 8.9", "tablet"],
        "GT-P7320": ["Samsung", "Galaxy Tab 8.9", "tablet"],
        "GT-P7320T": ["Samsung", "Galaxy Tab 8.9", "tablet"],
        "GT-P7500": ["Samsung", "Galaxy Tab 10.1", "tablet"],
        "GT-P7500D": ["Samsung", "Galaxy Tab 10.1", "tablet"],
        "GT-P7500R": ["Samsung", "Galaxy Tab 10.1", "tablet"],
        "GT-P7500V": ["Samsung", "Galaxy Tab 10.1", "tablet"],
        "GT-P7501": ["Samsung", "Galaxy Tab 10.1N", "tablet"],
        "GT-P7510": ["Samsung", "Galaxy Tab 10.1", "tablet"],
        "GT-P7511": ["Samsung", "Galaxy Tab 10.1N", "tablet"],
        "GT-S5300": ["Samsung", "Galaxy Pocket"],
        "GT-S5360": ["Samsung", "Galaxy Y"],
        "GT-S5360B": ["Samsung", "Galaxy Y"],
        "GT-S5360L": ["Samsung", "Galaxy Y"],
        "GT-S5363": ["Samsung", "Galaxy Y"],
        "GT-S5367": ["Samsung", "Galaxy Y TV"],
        "GT-S5368": ["Samsung", "GT-S5368"],
        "GT-S5369": ["Samsung", "Galaxy Y"],
        "GT-S5570": ["Samsung", "Galaxy Mini"],
        "GT-S5570B": ["Samsung", "Galaxy Mini"],
        "GT-S5570I": ["Samsung", "Galaxy Mini"],
        "GT-S5570L": ["Samsung", "Galaxy Mini"],
        "GT-S5578": ["Samsung", "Galaxy Mini"],
        "GT-S5660": ["Samsung", "Galaxy Gio"],
        "GT-S5660M": ["Samsung", "Galaxy Gio"],
        "GT-S5660V": ["Samsung", "Galaxy Gio"],
        "GT-S5670": ["Samsung", "Galaxy Fit"],
        "GT-S5670B": ["Samsung", "Galaxy Fit"],
        "GT-S5670L": ["Samsung", "Galaxy Fit"],
        "GT-S5690": ["Samsung", "Galaxy Xcover"],
        "GT-S5690L": ["Samsung", "Galaxy Xcover"],
        "GT-S5820": ["Samsung", "Galaxy Ace"],
        "GT-S5830": ["Samsung", "Galaxy Ace"],
        "GT-S5830B": ["Samsung", "Galaxy Ace"],
        "GT-S5830C": ["Samsung", "Galaxy Ace"],
        "GT-S5830D": ["Samsung", "Galaxy Ace"],
        "GT-S5830D-parrot": ["Samsung", "Galaxy Ace"],
        "GT-S5830i": ["Samsung", "Galaxy Ace"],
        "GT-S5830L": ["Samsung", "Galaxy Ace"],
        "GT-S5830M": ["Samsung", "Galaxy Ace"],
        "GT-S5830T": ["Samsung", "Galaxy Ace"],
        "GT-S5838": ["Samsung", "Galaxy Ace"],
        "GT-S5839i": ["Samsung", "Galaxy Ace"],
        "GT-S6102": ["Samsung", "Galaxy Y Duos"],
        "GT-S6102B": ["Samsung", "Galaxy Y Duos"],
        "GT-S6500": ["Samsung", "Galaxy Mini 2"],
        "GT-S6500D": ["Samsung", "Galaxy Mini 2"],
        "GT-S6702": ["Samsung", "GT-S6702"],
        "GT-S6802": ["Samsung", "Galaxy Ace Duos"],
        "GT-S7500": ["Samsung", "Galaxy Ace Plus"],
        "GT-S7500L": ["Samsung", "Galaxy Ace Plus"],
        "GT-S7500W": ["Samsung", "Galaxy Ace Plus"],
        "GT-T959": ["Samsung", "Galaxy S Vibrant"],
        "SCH-i509": ["Samsung", "Galaxy Y"],
        "SCH-i559": ["Samsung", "Galaxy Pop"],
        "SCH-i569": ["Samsung", "Galaxy Gio"],
        "SCH-i579": ["Samsung", "Galaxy Ace"],
        "SCH-i589": ["Samsung", "Galaxy Ace Duos"],
        "SCH-i705 4G": ["Samsung", "Galaxy Tab 2 (7.0)", "tablet"],
        "SCH-i809": ["Samsung", "SCH-i809"],
        "SCH-i889": ["Samsung", "Galaxy Note"],
        "SCH-i909": ["Samsung", "Galaxy S"],
        "SCH-i919": ["Samsung", "SCH-i919"],
        "SCH-i929": ["Samsung", "SCH-i929"],
        "SCH-I100": ["Samsung", "Gem"],
        "SCH-I110": ["Samsung", "Illusion"],
        "SCH-I400": ["Samsung", "Continuum"],
        "SCH-I405": ["Samsung", "Stratosphere"],
        "SCH-I405 4G": ["Samsung", "Stratosphere"],
        "SCH-I500": ["Samsung", "Fascinate"],
        "SCH-I510": ["Samsung", "Stealth V"],
        "SCH-I510 4G": ["Samsung", "Droid Charge"],
        "SCH-I515": ["Samsung", "Galaxy Nexus"],
        "SCH-I535": ["Samsung", "Galaxy S III"],
        "SCH-I535 4G": ["Samsung", "Galaxy S III"],
        "SCH-I619": ["Samsung", "SCH-I619"],
        "SCH-I699": ["Samsung", "SCH-I699"],
        "SCH-I779": ["Samsung", "SCH-I779"],
        "SCH-I800": ["Samsung", "Galaxy Tab 7.0", "tablet"],
        "SCH-I815": ["Samsung", "Galaxy Tab 7.7", "tablet"],
        "SCH-I815 4G": ["Samsung", "Galaxy Tab 7.7", "tablet"],
        "SCH-I905": ["Samsung", "Galaxy Tab 10.1", "tablet"],
        "SCH-I905 4G": ["Samsung", "Galaxy Tab 10.1", "tablet"],
        "SCH-I909": ["Samsung", "Galaxy S"],
        "SCH-I915": ["Samsung", "SCH-I915"],
        "SCH-I939": ["Samsung", "Galaxy S III"],
        "SCH-M828C": ["Samsung", "Galaxy Precedent"],
        "SCH-M828Carray(9096483449)": ["Samsung", "Galaxy Precedent"],
        "SCH-R530U": ["Samsung", "Galaxy S III"],
        "SCH-R680": ["Samsung", "Repp"],
        "SCH-R720": ["Samsung", "Admire"],
        "SCH-R730": ["Samsung", "Transfix"],
        "SCH-R760": ["Samsung", "Galaxy S II"],
        "SCH-R820": ["Samsung", "SCH-R820"],
        "SCH-R880": ["Samsung", "Acclaim"],
        "SCH-R910": ["Samsung", "Galaxy Indulge 4G"],
        "SCH-R915": ["Samsung", "Galaxy Indulge"],
        "SCH-R920": ["Samsung", "Galaxy Attain 4G"],
        "SCH-R930": ["Samsung", "Galaxy S Aviator"],
        "SCH-R940": ["Samsung", "Galaxy S Lightray"],
        "SCH-S720C": ["Samsung", "Galaxy Proclaim"],
        "SCH-S735C": ["Samsung", "SCH-S735"],
        "SCH-W899": ["Samsung", "SCH-W899"],
        "SCH-W999": ["Samsung", "SCH-W999"],
        "SGH-I547": ["Samsung", "SGH-I547"],
        "SGH-I717": ["Samsung", "Galaxy Note"],
        "SGH-I717D": ["Samsung", "Galaxy Note"],
        "SGH-I717M": ["Samsung", "Galaxy Note"],
        "SGH-I717R": ["Samsung", "Galaxy Note"],
        "SGH-I727": ["Samsung", "Galaxy S II Skyrocket"],
        "SGH-i727R": ["Samsung", "Galaxy S II"],
        "SGH-I727R": ["Samsung", "Galaxy S II"],
        "SGH-I747": ["Samsung", "Galaxy S III"],
        "SGH-I747M": ["Samsung", "Galaxy S III"],
        "SGH-I748": ["Samsung", "Galaxy S III"],
        "SGH-I757": ["Samsung", "Galaxy S II Skyrocket HD"],
        "SGH-I777": ["Samsung", "Galaxy S II"],
        "SGH-I9777": ["Samsung", "Galaxy S II"],
        "SGH-I896": ["Samsung", "Captivate"],
        "SGH-I897": ["Samsung", "Captivate"],
        "SGH-I927": ["Samsung", "Captivate Glide"],
        "SGH-I927R": ["Samsung", "Captivate Glide"],
        "SGH-I957": ["Samsung", "Galaxy Tab 8.9", "tablet"],
        "SGH-I957D": ["Samsung", "Galaxy Tab 8.9", "tablet"],
        "SGH-I957M": ["Samsung", "Galaxy Tab 8.9", "tablet"],
        "SGH-I957R": ["Samsung", "Galaxy Tab 8.9", "tablet"],
        "SGH-I987": ["Samsung", "Galaxy Tab 7.0", "tablet"],
        "SGH-I997": ["Samsung", "Infuse 4G"],
        "SGH-I997R": ["Samsung", "Infuse 4G"],
        "SGH-I9000": ["Samsung", "Galaxy S"],
        "SGH-S730G": ["Samsung", "SGH-S730"],
        "SGH-T499": ["Samsung", "Dart"],
        "SGH-T499V": ["Samsung", "Galaxy Mini"],
        "SGH-T499Y": ["Samsung", "Galaxy Mini"],
        "SGH-T589": ["Samsung", "Gravity Smart"],
        "SGH-T589R": ["Samsung", "Gravity Smart"],
        "SGH-T679": ["Samsung", "Exhibit II 4G"],
        "SGH-T679M": ["Samsung", "Exhibit II 4G"],
        "SGH-T759": ["Samsung", "Exhibit 4G"],
        "SGH-T769": ["Samsung", "Galaxy S Blaze 4G"],
        "SGH-T839": ["Samsung", "T-Mobile Sidekick"],
        "SGH-T849": ["Samsung", "Galaxy Tab 7.0", "tablet"],
        "SGH-T859": ["Samsung", "Galaxy Tab 10.1", "tablet"],
        "SGH-T869": ["Samsung", "Galaxy Tab 7.0 Plus", "tablet"],
        "SGH-T879": ["Samsung", "Galaxy Note"],
        "SGH-T959": ["Samsung", "Vibrant"],
        "SGH-T959D": ["Samsung", "Galaxy S Fascinate 3G+"],
        "SGH-T959P": ["Samsung", "Galaxy S Fascinate 4G"],
        "SGH-T959V": ["Samsung", "Galaxy S 4G"],
        "SGH-T989": ["Samsung", "Galaxy S II"],
        "SGH-T989D": ["Samsung", "Galaxy S II X"],
        "SGH-T999": ["Samsung", "Galaxy S Blaze 4G"],
        "SGH-T999V": ["Samsung", "Galaxy S Blaze 4G"],
        "SHV-E120K": ["Samsung", "Galaxy S II HD LTE"],
        "SHV-E120L": ["Samsung", "Galaxy S II HD LTE"],
        "SHV-E120S": ["Samsung", "Galaxy S II HD LTE"],
        "SHV-E110S": ["Samsung", "Galaxy S II LTE"],
        "SHV-E140S": ["Samsung", "Galaxy Tab 8.9", "tablet"],
        "SHV-E150S": ["Samsung", "Galaxy Tab 7.7", "tablet"],
        "SHV-E160K": ["Samsung", "Galaxy Note"],
        "SHV-E160L": ["Samsung", "Galaxy Note LTE"],
        "SHV-E160S": ["Samsung", "Galaxy Note LTE"],
        "SHV-E170K": ["Samsung", "SHV-E170K"],
        "SHV-E170L": ["Samsung", "SHV-E170L"],
        "SHV-E210K": ["Samsung", "Galaxy S III"],
        "SHV-E210L": ["Samsung", "Galaxy S III"],
        "SHV-E210S": ["Samsung", "Galaxy S III"],
        "SHW-M100S": ["Samsung", "Galaxy A"],
        "SHW-M110S": ["Samsung", "Galaxy S"],
        "SHW-M130L": ["Samsung", "Galaxy U"],
        "SHW-M130K": ["Samsung", "Galaxy K"],
        "SHW-M180K": ["Samsung", "Galaxy Tab", "tablet"],
        "SHW-M180L": ["Samsung", "Galaxy Tab", "tablet"],
        "SHW-M180S": ["Samsung", "Galaxy Tab", "tablet"],
        "SHW-M180W": ["Samsung", "Galaxy Tab", "tablet"],
        "SHW-M185S": ["Samsung", "Galaxy Tab", "tablet"],
        "SHW-M190S": ["Samsung", "Galaxy S Hoppin"],
        "SHW-M220L": ["Samsung", "Galaxy Neo"],
        "SHW-M240S": ["Samsung", "Galaxy Ace"],
        "SHW-M250K": ["Samsung", "Galaxy S II"],
        "SHW-M250L": ["Samsung", "Galaxy S II"],
        "SHW-M250S": ["Samsung", "Galaxy S II"],
        "SHW-M300W": ["Samsung", "Galaxy Tab 10.1", "tablet"],
        "SHW-M305W": ["Samsung", "Galaxy Tab 8.9", "tablet"],
        "SHW-M340S": ["Samsung", "Galaxy M Style"],
        "SHW-M380K": ["Samsung", "Galaxy Tab 10.1", "tablet"],
        "SHW-M380S": ["Samsung", "Galaxy Tab 10.1", "tablet"],
        "SHW-M380W": ["Samsung", "Galaxy Tab 10.1", "tablet"],
        "SHW-M440S": ["Samsung", "Galaxy S III"],
        "SMT-i9100": ["Samsung", "SMT-I9100", "tablet"],
        "SPH-D600": ["Samsung", "Conquer 4G"],
        "SPH-D700": ["Samsung", "Epic 4G"],
        "SPH-D705": ["Samsung", "Epic 4G 2"],
        "SPH-D710": ["Samsung", "Epic 4G Touch"],
        "SPH-L700": ["Samsung", "Galaxy Nexus"],
        "SPH-L710": ["Samsung", "Galaxy S III"],
        "SPH-M820": ["Samsung", "Galaxy Prevail"],
        "SPH-M820-BST": ["Samsung", "Galaxy Prevail"],
        "SPH-M580": ["Samsung", "Replenish"],
        "SPH-M900": ["Samsung", "Moment"],
        "SPH-M910": ["Samsung", "Intercept"],
        "SPH-M920": ["Samsung", "Transform"],
        "SPH-M930": ["Samsung", "Transform Ultra"],
        "SPH-M930BST": ["Samsung", "Transform Ultra"],
        "SPH-P100": ["Samsung", "Galaxy Tab", "tablet"],
        "YP-GB1": ["Samsung", "Galaxy Player", "media"],
        "YP-GB70": ["Samsung", "Galaxy Player 70", "media"],
        "YP-GB70D": ["Samsung", "Galaxy Player 70 Plus", "media"],
        "YP-GS1": ["Samsung", "Galaxy S WiFi 3.6", "media"],
        "YP-G1": ["Samsung", "Galaxy S WiFi 4.0", "media"],
        "YP-GI1": ["Samsung", "Galaxy S WiFi 4.2", "media"],
        "YP-G50": ["Samsung", "Galaxy Player", "media"],
        "YP-G70": ["Samsung", "Galaxy S WiFi 5.0", "media"],
        GT9100: ["Samsung", "Galaxy S II"],
        I897: ["Samsung", "Captivate"],
        I7500: ["Samsung", "Galaxy"],
        I9000: ["Samsung", "Galaxy S"],
        T959: ["Samsung", "Galaxy S Vibrant"],
        "Captivate-I897": ["Samsung", "Captivate"],
        Galaxy: ["Samsung", "Galaxy"],
        "Galaxy Note": ["Samsung", "Galaxy Note"],
        GalaxyS: ["Samsung", "Galaxy S"],
        "Galaxy S II": ["Samsung", "Galaxy S II"],
        "Galaxy X": ["Samsung", "Galaxy X"],
        "Galaxy Spica": ["Samsung", "Galaxy Spica"],
        "GALAXY Tab": ["Samsung", "Galaxy Tab", "tablet"],
        "GALAXY NEXUS": ["Samsung", "Galaxy Nexus"],
        Vibrantmtd: ["Samsung", "Vibrant"],
        "SC-01C": ["Samsung", "Galaxy Tab", "tablet"],
        "SC-01D": ["Samsung", "Galaxy Tab 10.1 LTE", "tablet"],
        "SC-02B": ["Samsung", "Galaxy S"],
        "SC-02C": ["Samsung", "Galaxy S II"],
        "SC-02D": ["Samsung", "Galaxy Tab 7.0 Plus", "tablet"],
        "SC-03D": ["Samsung", "Galaxy S II LTE"],
        "SC-04D": ["Samsung", "Galaxy Nexus"],
        "SC-05D": ["Samsung", "Galaxy Note LTE"],
        "SC-06D": ["Samsung", "Galaxy S III"],
        ISW11SC: ["Samsung", "Galaxy S II WiMAX"],
        "GT-S7562": ["Samsung", "GT-S7562"],
        "GT-S7562i": ["Samsung", "GT-S7562i"],
        A01SH: ["Sharp", "A01SH"],
        IS01: ["Sharp", "IS01"],
        IS03: ["Sharp", "IS03"],
        IS05: ["Sharp", "IS05"],
        IS11SH: ["Sharp", "Aquos IS11SH"],
        IS12SH: ["Sharp", "Aquos IS12SH"],
        IS13SH: ["Sharp", "Aquos IS13SH"],
        IS14SH: ["Sharp", "Aquos IS14SH"],
        ISW16SH: ["Sharp", "Aquos ISW16SH"],
        "EB-W51GJ": ["Sharp", "EB-W51GJ"],
        SBM003SH: ["Sharp", "Galapagos"],
        SBM005SH: ["Sharp", "Galapagos"],
        SBM006SH: ["Sharp", "Aquos"],
        SBM007SH: ["Sharp", "Aquos 007SH"],
        SBM009SH: ["Sharp", "Aquos 009SH"],
        SBM102SH: ["Sharp", "Aquos 102SH"],
        SBM103SH: ["Sharp", "Aquos 103SH"],
        SBM104SH: ["Sharp", "Aquos 104SH"],
        SBM107SH: ["Sharp", "Aquos 107SH"],
        SBM107SHB: ["Sharp", "Aquos 107SH"],
        "SH-01D": ["Sharp", "Aquos SH-01D"],
        "SH-02D": ["Sharp", "Aquos slider SH-02D"],
        "SH-03C": ["Sharp", "Lynx 3D"],
        "SH-06D": ["Sharp", "Aquos SH-06D"],
        "SH-09D": ["Sharp", "Aquos Zeta SH-09D"],
        "SH-10B": ["Sharp", "Lynx"],
        "SH-12C": ["Sharp", "Aquos"],
        "SH-13C": ["Sharp", "Aquos f SH-13C"],
        SH80F: ["Sharp", "Aquos SH80F"],
        SH72x8U: ["Sharp", "SH72x8U"],
        SH8118U: ["Sharp", "SH8118U"],
        SH8128U: ["Sharp", "SH8128U"],
        SH8158U: ["Sharp", "SH8158U"],
        SH8188U: ["Sharp", "SH8188U"],
        SH8268U: ["Sharp", "SH8268U"],
        "INFOBAR C01": ["Sharp", "INFOBAR C01"],
        "SPX-5": ["Simvalley", "SPX-5"],
        "SPX-5 3G": ["Simvalley", "SPX-5 3G"],
        "SmartQ G7": ["SmartQ", "G7", "tablet"],
        SmartQT7: ["SmartQ", "T7", "tablet"],
        SmartQT10: ["SmartQ", "T10", "tablet"],
        SmartQT15: ["SmartQ", "T15", "tablet"],
        SmartQT19: ["SmartQ", "T19", "tablet"],
        SmartQT20: ["SmartQ", "T20", "tablet"],
        "OMS1 6": ["Sony Ericsson", "A8i"],
        E10a: ["Sony Ericsson", "Xperia X10 Mini"],
        E10i: ["Sony Ericsson", "Xperia X10 Mini"],
        E10iv: ["Sony Ericsson", "Xperia X10 Mini"],
        E15: ["Sony Ericsson", "Xperia X8"],
        E15a: ["Sony Ericsson", "Xperia X8"],
        E15i: ["Sony Ericsson", "Xperia X8"],
        E15iv: ["Sony Ericsson", "Xperia X8"],
        "E15i-o": ["Sony Ericsson", "Xperia X8"],
        E16i: ["Sony Ericsson", "W8 Walkman"],
        LT11i: ["Sony Ericsson", "Xperia Neo V"],
        LT15: ["Sony Ericsson", "Xperia Arc"],
        LT15a: ["Sony Ericsson", "Xperia Arc"],
        LT15i: ["Sony Ericsson", "Xperia Arc"],
        LT15iv: ["Sony Ericsson", "Xperia Arc"],
        "LT15i-o": ["Sony Ericsson", "Xperia Arc"],
        LT18a: ["Sony Ericsson", "Xperia Arc S"],
        LT18i: ["Sony Ericsson", "Xperia Arc S"],
        LT18iv: ["Sony Ericsson", "Xperia Arc S"],
        "LT18i-o": ["Sony Ericsson", "Xperia Arc S"],
        LT22i: ["Sony", "Xperia P"],
        LT26i: ["Sony", "Xperia S"],
        LT26ii: ["Sony", "Xperia S"],
        "LT26i-o": ["Sony", "Xperia S"],
        LT28at: ["Sony", "Xperia Ion"],
        LT28h: ["Sony", "Xperia Ion"],
        LT28i: ["Sony", "Xperia Ion"],
        LT29i: ["Sony", "Xperia GX"],
        SonyLT29i: ["Sony", "Xperia GX"],
        SonyLT30a: ["Sony", "Xperia Mint"],
        SonyLT30p: ["Sony", "Xperia Mint"],
        MK16a: ["Sony Ericsson", "Xperia Pro"],
        MK16i: ["Sony Ericsson", "Xperia Pro"],
        MT11a: ["Sony Ericsson", "Xperia Neo V"],
        MT11i: ["Sony Ericsson", "Xperia Neo V"],
        MT11iv: ["Sony Ericsson", "Xperia Neo V"],
        "MT11i-o": ["Sony Ericsson", "Xperia Neo V"],
        MT15a: ["Sony Ericsson", "Xperia Neo"],
        MT15i: ["Sony Ericsson", "Xperia Neo"],
        MT15iv: ["Sony Ericsson", "Xperia Neo"],
        "MT15i-o": ["Sony Ericsson", "Xperia Neo"],
        MT25i: ["Sony", "Xperia Neo L"],
        MT27i: ["Sony", "Xperia Sola"],
        R800a: ["Sony Ericsson", "Xperia Play"],
        R800i: ["Sony Ericsson", "Xperia Play"],
        R800iv: ["Sony Ericsson", "Xperia Play"],
        R800at: ["Sony Ericsson", "Xperia Play"],
        R800x: ["Sony Ericsson", "Xperia Play"],
        SK17a: ["Sony Ericsson", "Xperia Mini Pro"],
        SK17i: ["Sony Ericsson", "Xperia Mini Pro"],
        SK17iv: ["Sony Ericsson", "Xperia Mini Pro"],
        "SK17i-o": ["Sony Ericsson", "Xperia Mini Pro"],
        ST15a: ["Sony Ericsson", "Xperia Mini"],
        ST15i: ["Sony Ericsson", "Xperia Mini"],
        ST17a: ["Sony Ericsson", "Xperia Active"],
        ST17i: ["Sony Ericsson", "Xperia Active"],
        ST18a: ["Sony Ericsson", "Xperia Ray"],
        ST18i: ["Sony Ericsson", "Xperia Ray"],
        ST18iv: ["Sony Ericsson", "Xperia Ray"],
        ST18av: ["Sony Ericsson", "Xperia Ray"],
        SonyST21: ["Sony", "'Tapioca'"],
        SonyST21i: ["Sony", "'Tapioca'"],
        SonyST21a2: ["Sony", "'Tapioca'"],
        ST21: ["Sony", "'Tapioca'"],
        ST21i: ["Sony", "'Tapioca'"],
        SonyST23i: ["Sony", "'Tapioca DS'"],
        ST25i: ["Sony", "Xperia U"],
        ST27i: ["Sony", "Xperia Go"],
        U20a: ["Sony Ericsson", "Xperia X10 Mini Pro"],
        U20i: ["Sony Ericsson", "Xperia X10 Mini Pro"],
        U20iv: ["Sony Ericsson", "Xperia X10 Mini Pro"],
        WT13i: ["Sony Ericsson", "Mix Walkman"],
        WT18i: ["Sony Ericsson", "Walkman"],
        WT19a: ["Sony Ericsson", "Live with Walkman"],
        WT19i: ["Sony Ericsson", "Live with Walkman"],
        WT19iv: ["Sony Ericsson", "Live with Walkman"],
        X8: ["Sony Ericsson", "Xperia X8"],
        X10: ["Sony Ericsson", "Xperia X10"],
        X10a: ["Sony Ericsson", "Xperia X10"],
        X10i: ["Sony Ericsson", "Xperia X10"],
        X10iv: ["Sony Ericsson", "Xperia X10"],
        X10S: ["Sony Ericsson", "Xperia X10"],
        X10mini: ["Sony Ericsson", "Xperia X10 Mini"],
        "X10 Mini": ["Sony Ericsson", "Xperia X10 Mini"],
        "X10 Mini Pro": ["Sony Ericsson", "Xperia X10 Mini Pro"],
        Z1i: ["Sony Ericsson", "Xperia Play"],
        S51SE: ["Sony Ericsson", "Xperia Mini"],
        IS11S: ["Sony Ericsson", "Xperia Acro"],
        IS12S: ["Sony Ericsson", "Xperia Acro HD"],
        "SO-01B": ["Sony Ericsson", "Xperia X10"],
        "SO-01C": ["Sony Ericsson", "Xperia Arc"],
        "SO-01D": ["Sony Ericsson", "Xperia Play"],
        "SO-02C": ["Sony Ericsson", "Xperia Acro"],
        "SO-02D": ["Sony Ericsson", "Xperia NX"],
        "SO-03C": ["Sony Ericsson", "Xperia Ray"],
        "SO-03D": ["Sony Ericsson", "Xperia Acro HD"],
        "SO-04D": ["Sony", "Xperia GX"],
        "SO-05D": ["Sony", "Xperia SX"],
        "XPERIA X8": ["Sony Ericsson", "Xperia X8"],
        "Xperia X8": ["Sony Ericsson", "Xperia X8"],
        "Xperia X10": ["Sony Ericsson", "Xperia X10"],
        "Xperia ray": ["Sony Ericsson", "Xperia Ray"],
        "Xperia Ray": ["Sony Ericsson", "Xperia Ray"],
        "Xperia Arc": ["Sony Ericsson", "Xperia Arc"],
        "Xperia Mini": ["Sony Ericsson", "Xperia Mini"],
        "Xperia neo": ["Sony Ericsson", "Xperia Neo"],
        "Xperia Neo": ["Sony Ericsson", "Xperia Neo"],
        "XPERIA NEO": ["Sony Ericsson", "Xperia Neo"],
        "Xperia NeoV": ["Sony Ericsson", "Xperia Neo V"],
        "Xperia Neo V": ["Sony Ericsson", "Xperia Neo V"],
        "Xperia Play": ["Sony Ericsson", "Xperia Play"],
        "Sony Ericsson Xperia X1": ["Sony Ericsson", "Xperia X1"],
        SonyHayabusa: ["Sony", "Xperia Ion"],
        Hayabusa: ["Sony", "Xperia Ion"],
        nozomi: ["Sony", "Xperia S"],
        "Sony Tablet P": ["Sony", "Tablet P", "tablet"],
        "Sony Tablet S": ["Sony", "Tablet S", "tablet"],
        "NWZ-Z1000Series": ["Sony", "Walkman Z", "media"],
        "NW-Z1000Series": ["Sony", "Walkman Z", "media"],
        "Spice Mi280": ["Spice", "Mi-280"],
        "Spice Mi300": ["Spice", "Mi-300"],
        "Spice Mi-310": ["Spice", "Mi-310"],
        "Spice Mi-425": ["Spice", "Mi-425"],
        "SPICE Mi-720": ["Spice", "Mi-720"],
        "A7272+": ["Star", "A7272+"],
        "e1109 v73 gq1002 ctp": ["Star", "X18i"],
        TS1004T: ["Surf 3Q", "TS1004T", "tablet"],
        "SYTABEX7-2": ["Sylvania", "SYTABEX7", "tablet"],
        "TCL A860": ["TCL", "A860"],
        "TCL A906": ["TCL", "A906"],
        "TCL A909": ["TCL", "A909"],
        "TCL A919": ["TCL", "A919"],
        "TCL A990": ["TCL", "A990"],
        "TCL A996": ["TCL", "A996"],
        "TCL A998": ["TCL", "A998"],
        "TCL GENESEE E708": ["TCL", "Genesee E708"],
        "A10t(5DM3)": ["Teclast", "A10T", "tablet"],
        P72: ["Teclast", "P72", "tablet"],
        P76TI: ["Teclast", "P76Ti", "tablet"],
        P81HD: ["Teclast", "P81HD", "tablet"],
        "P85(R8A1)": ["Teclast", "P85", "tablet"],
        "T720 SE": ["Teclast", "T720", "tablet"],
        "T760 from moage.com": ["Teclast", "T760", "tablet"],
        tegav2: ["Tegatech", "TEGA v2", "tablet"],
        "TM-7025": ["teXet", "TM-7025", "tablet"],
        MoFing: ["Thomson", "MoFing", "tablet"],
        Ultimate10: ["Tomtec", "Ultimate10", "tablet"],
        "Thl V7": ["THL", "V7"],
        "ThL V7": ["THL", "V7"],
        "ThL V8": ["THL", "V8"],
        "ThL V9": ["THL", "V9"],
        "ThL V11": ["THL", "V11"],
        "TSB CLOUD COMPANION;TOSHIBA AC AND AZ": ["Toshiba", "Dynabook AZ", "desktop"],
        "TOSHIBA AC AND AZ": ["Toshiba", "Dynabook AZ", "desktop"],
        "TOSHIBA FOLIO AND A": ["Toshiba", "Folio 100", "tablet"],
        "T-01C": ["Toshiba", "Regza T-01C"],
        "T-01D": ["Toshiba", "Regza T-01D"],
        IS04: ["Toshiba", "Regza IS04"],
        IS11T: ["Toshiba", "Regza IS11T"],
        AT1S0: ["Toshiba", "Regza AT1S0"],
        Tostab03: ["Toshiba", "Regza AT100", "tablet"],
        AT100: ["Toshiba", "Regza AT100", "tablet"],
        AT200: ["Toshiba", "Regza AT200", "tablet"],
        AT470: ["Toshiba", "Regza AT470", "tablet"],
        AT570: ["Toshiba", "Regza AT570", "tablet"],
        AT830: ["Toshiba", "Regza AT830", "tablet"],
        "Folio 100": ["Toshiba", "Folio 100", "tablet"],
        folio100: ["Toshiba", "Folio 100", "tablet"],
        THRiVE: ["Toshiba", "THRiVE", "tablet"],
        "Fantastic T3": ["TWM", "Fantastic T3"],
        M70014: ["United Star Technology", "M70014", "tablet"],
        PS47: ["Velocity Micro", "Cruz PS47", "tablet"],
        T301: ["Velocity Micro", "Cruz T301", "tablet"],
        "Vibo-A688": ["FIH", "Vibo A688"],
        "Videocon-V7500": ["Videocon", "V7500"],
        GTablet: ["ViewSonic", "gTablet", "tablet"],
        GtabComb: ["ViewSonic", "gTablet", "tablet"],
        "TeamDRH ICS for GTablet": ["ViewSonic", "gTablet", "tablet"],
        ViewPad7: ["ViewSonic", "ViewPad 7", "tablet"],
        "ViewPad 10e": ["ViewSonic", "ViewPad 10e", "tablet"],
        VTAB1008: ["Vizio", "VTAB1008", "tablet"],
        VTAB3010: ["Vizio", "VTAB3010", "tablet"],
        "VOTO W5300": ["VOTO", "W5300"],
        "xPAD-70": ["WayteQ", "xPAD-70", "tablet"],
        "xTAB-70": ["WayteQ", "xTAB-70", "tablet"],
        "WellcoM-A99": ["WellcoM", "A99"],
        N12: ["Window", "N12", "tablet"],
        N12R: ["Window", "N12R", "tablet"],
        N50: ["Window", "N50", "tablet"],
        N50DT: ["Window", "N50DT", "tablet"],
        N50GT: ["Window", "N50GT", "tablet"],
        "N50GT A": ["Window", "N50GT-A", "tablet"],
        N70: ["Window", "N70", "tablet"],
        "N70 DUAL CORE": ["Window", "N70 Dual Core", "tablet"],
        N80: ["Window", "N80", "tablet"],
        N90: ["Window", "N90", "tablet"],
        "N90 DUAL CORE2 V12": ["Window", "N90 Dual Core", "tablet"],
        N612: ["Wishway", "N612"],
        "AT-AS43D": ["Wolfgang", "AT-AS43D"],
        M12: ["Wopad", "M12", "tablet"],
        WM8650: ["WonderMedia", "WM8650", "tablet"],
        "MI-ONE": ["Xiaomi", "MI-ONE"],
        "MI-ONE C1": ["Xiaomi", "MI-ONE C1"],
        "MI-ONE Plus": ["Xiaomi", "MI-ONE Plus"],
        "MI 1S": ["Xiaomi", "MI-ONE Plus"],
        "MI 1SC": ["Xiaomi", "MI-ONE 1SC"],
        "mione plus": ["Xiaomi", "MI-ONE Plus"],
        "MI-TWO": ["Xiaomi", "MI-TWO"],
        "MI 2": ["Xiaomi", "MI-TWO"],
        "MI 2S": ["Xiaomi", "MI-TWO Plus"],
        "MI 2SC": ["Xiaomi", "MI-TWO Plus"],
        Q07CL01: ["XVision", "Q07", "tablet"],
        N6: ["Yarvik", "210 Tablet", "tablet"],
        EMR1879: ["Yidong", "EMR1879", "tablet"],
        "yusun W702": ["Yusun", "W702"],
        "YX-YUSUN E80": ["Yusun", "E80"],
        zt180: ["Zenithink", "ZT-180", "tablet"],
        Jaguar7: ["ZiiLabs", "Jaguar 7", "tablet"],
        "Ziss Ranger HD": ["Ziss", "Ranger HD"],
        "ZTE Libra": ["ZTE", "Libra"],
        "ZTE-T T9": ["ZTE", "Light Tab T9", "tablet"],
        V9: ["ZTE", "Light Tab V9", "tablet"],
        "V9e+": ["ZTE", "Light Tab 2", "tablet"],
        V9A: ["ZTE", "Light Tab 2", "tablet"],
        "Light Tab 2W": ["ZTE", "Light Tab 2", "tablet"],
        "Light Tab 2": ["ZTE", "Light Tab 2", "tablet"],
        V9C: ["ZTE", "Light Tab 3", "tablet"],
        V55: ["ZTE", "Optik", "tablet"],
        Acqua: ["ZTE", "Acqua"],
        Blade: ["ZTE", "Blade"],
        "Blade-V880": ["ZTE", "Blade"],
        "ZTE-U V880": ["ZTE", "Blade"],
        "Blade-opda": ["ZTE", "Blade"],
        "ZTE-BLADE": ["ZTE", "Blade"],
        "ZTE Blade": ["ZTE", "Blade"],
        "ZTE V880": ["ZTE", "Blade"],
        "ZTE-U(V)880+": ["ZTE", "Blade"],
        V880: ["ZTE", "Blade"],
        a5: ["ZTE", "Blade"],
        Blade2: ["ZTE", "Blade 2"],
        "Blade S": ["ZTE", "Blade S"],
        X500: ["ZTE", "Score"],
        "ZTE-X500": ["ZTE", "Score"],
        Skate: ["ZTE", "Skate"],
        "ZTE Skate": ["ZTE", "Skate"],
        "ZTE-Skate": ["ZTE", "Skate"],
        "ZTE-SKATE": ["ZTE", "Skate"],
        "ZTE-V960": ["ZTE", "Skate"],
        "ZTE-U V960": ["ZTE", "Skate"],
        "ZTE Racer": ["ZTE", "Racer"],
        "ZTE-RACER": ["ZTE", "Racer"],
        "MTC 916": ["ZTE", "Racer"],
        Racer: ["ZTE", "Racer"],
        RacerII: ["ZTE", "Racer 2"],
        RACERII: ["ZTE", "Racer 2"],
        "ZTE Roamer": ["ZTE", "Roamer"],
        N860: ["ZTE", "Warp"],
        N880: ["ZTE", "Blade"],
        "ZTE-T U802": ["ZTE", "T-U802"],
        "ZTE-T U806": ["ZTE", "T-U806"],
        "ZTE-T U812": ["ZTE", "T-U812"],
        "ZTE-T U830": ["ZTE", "T-U830"],
        "ZTE-T U880": ["ZTE", "T-U880"],
        "ZTE T U880": ["ZTE", "T-U880"],
        "ZTE-TU880": ["ZTE", "T-U880"],
        "ZTE-TU900": ["ZTE", "T-U900"],
        "ZTE-T U960": ["ZTE", "T-U960"],
        "ZTE-TU960s": ["ZTE", "T-U960"],
        "ZTE-T U960s": ["ZTE", "T-U960"],
        "ZTE U N720": ["ZTE", "U-N720"],
        "ZTE-U V856": ["ZTE", "U-V856"],
        "ZTE-U V857": ["ZTE", "U-V857"],
        "ZTE-U V881": ["ZTE", "U-V881"],
        "ZTE-U X850": ["ZTE", "U-X850"],
        "ZTE-U X876": ["ZTE", "U-X876"],
        "ZTE-X876": ["ZTE", "U-X876"],
        "ZTE-C R750": ["ZTE", "C-R750"],
        "ZTE-C N600": ["ZTE", "C-N600"],
        "ZTE-C N600+": ["ZTE", "C-N600"],
        "ZTE-C N606": ["ZTE", "C-N606"],
        "ZTE-C N700": ["ZTE", "C-N700"],
        "ZTE-C N760": ["ZTE", "C-N760"],
        "ZTE-C N880": ["ZTE", "C-N880"],
        "ZTE-C N880S": ["ZTE", "C-N880"],
        "ZTE-C N880s": ["ZTE", "C-N880"],
        "ZTE-C X500": ["ZTE", "C-X500"],
        "ZTE-C X920": ["ZTE", "C-X920"],
        "ZXY-ZTE-C X920": ["ZTE", "C-X920"],
        "ZTE GV821": ["ZTE", "G-V821"],
        "ZTE N880E": ["ZTE", "N880E"],
        "ZTE-N880E": ["ZTE", "N880E"],
        "MIUI N880S": ["ZTE", "N880S"],
        "ZTE N882E": ["ZTE", "N882E"],
        "ZTE N855D": ["ZTE", "N855D"],
        "ZTE-N910": ["ZTE", "N910"],
        E810: ["ZTE", "E810"],
        u880: ["ZTE", "U880"],
        "ZTE U880E": ["ZTE", "U880E"],
        U880: ["ZTE", "U880"],
        "ZTE U970": ["ZTE", "U970"],
        "ZTE V768": ["ZTE", "V768"],
        "ZTE-V856": ["ZTE", "V856"],
        "ZTE V877b": ["ZTE", "V877"],
        "ZTE V889D": ["ZTE", "V889"],
        "ZTE-Z990": ["ZTE", "Z990"],
        ZTEU790: ["ZTE", "U790"],
        "003Z": ["ZTE", "Softbank 003Z"],
        "008Z": ["ZTE", "Softbank 008Z"],
        "009Z": ["ZTE", "Softbank Star7"],
        "i-mobile i691": ["i-Mobile", "i691"],
        "i-mobile i695": ["i-Mobile", "i695"],
        "i-mobile i858": ["i-Mobile", "i858"],
        "i-mobile 3G 8500": ["i-Mobile", "3G 8500"],
        "i-mobile I-Note": ["i-Mobile", "i-Note", "tablet"],
        "Optimus Boston": ["Optimus", "Boston"],
        "Optimus San Francisco": ["Optimus", "San Francisco"],
        "Optimus Monte Carlo": ["Optimus", "Monte Carlo"],
        "Orange Boston": ["Orange", "Boston"],
        "Orange Monte Carlo": ["Orange", "Monte Carlo"],
        "San Francisco": ["Orange", "San Francisco"],
        "San Francisco for Orange": ["Orange", "San Francisco"],
        "Orange San Francisco": ["Orange", "San Francisco"],
        MOVE: ["T-Mobile", "MOVE"],
        "T-Mobile G1": ["T-Mobile", "G1"],
        "T-Mobile G2": ["T-Mobile", "G2"],
        "T-Mobile G2 Touch": ["T-Mobile", "G2"],
        "LG-P999": ["T-Mobile", "G2x"],
        "LG-E739": ["T-Mobile", "myTouch"],
        "T-Mobile myTouch 3G": ["T-Mobile", "myTouch 3G"],
        "T-Mobile myTouch 3G Slide": ["T-Mobile", "myTouch 3G Slide"],
        "T-Mobile Espresso": ["T-Mobile", "myTouch 3G Slide"],
        "HTC myTouch 3G Slide": ["T-Mobile", "myTouch 3G Slide"],
        "T-Mobile myTouch 4G": ["T-Mobile", "myTouch 4G"],
        "HTC Glacier": ["T-Mobile", "myTouch 4G"],
        "HTC Panache": ["T-Mobile", "myTouch 4G"],
        myTouch4G: ["T-Mobile", "myTouch 4G"],
        "My Touch 4G": ["T-Mobile", "myTouch 4G"],
        "HTC Mytouch 4G": ["T-Mobile", "myTouch 4G"],
        "HTC My Touch 4G": ["T-Mobile", "myTouch 4G"],
        "HTC mytouch4g": ["T-Mobile", "myTouch 4G"],
        "HTC myTouch 4G Slide": ["T-Mobile", "myTouch 4G Slide"],
        "myTouch 4G Slide": ["T-Mobile", "myTouch 4G Slide"],
        "T-Mobile myTouch Q": ["T-Mobile", "myTouch Q"],
        "LG-C800": ["T-Mobile", "myTouch Q"],
        "Pulse Mini": ["T-Mobile", "Pulse Mini"],
        "Vodafone 845": ["Vodafone", "845 Nova"],
        "Vodafone 858": ["Vodafone", "858 Smart"],
        "Vodafone 945": ["Vodafone", "945"],
        "Vodafone Smart II": ["Vodafone", "Smart II"],
        SmartTab10: ["Vodafone", "SmartTab 10", "tablet"],
        "SCH-N719": ["Samsung", "Galaxy Note II"],
        "Coolpad 8190": ["Coolpad", "8190"],
        U705T: ["Oppo", "Ulike2"],
        "Coolpad 8020+": ["Coolpad", "8020"],
        "Huawei Y310-5000": ["Huawei", "Y310"],
        "GT-S7572": ["Samsung", "Galaxy Trend Duos II"],
        "Lenovo A278t": ["Lenovo", "A278t"],
        "Lenovo A690": ["Lenovo", "A690"],
        "GT-I8262D": ["Samsung", "LePhone I8262D"],
        "Lenovo A278t": ["Lenovo", "A278t"],
        "MI 2C": ["Xiaomi", "MI-TWO"],
        "Coolpad 8070": ["Coolpad", "8070"],
        R813T: ["Oppo", "R813T"],
        "ZTE U930": ["ZTE", "U930"],
        "Lenovo A360": ["Lenovo", "LePhone A360"],
        "SCH-N719": ["Samsung", "Galaxy Note II"],
        "Coolpad 8010": ["Coolpad", "8010"],
        "LENOVO-Lenovo-A288t": ["Lenovo", "A288t"],
        U701T: ["Oppo", "U701T"],
        ZTEU795: ["Coolpad", "U795"],
        "Haier-HT-I617": ["Haier", "I617"],
        ZTEU880s: ["ZTE", "T-U880"],
        "GT-S6352": ["Samsung", "GT-S6352"],
        "GT-S7568": ["Samsung", "GT-S7568"],
        "K-Touch T619+": ["K-Touch", "T619"],
        "MI 2A": ["Xiaomi", "MI-TWO A"],
        "GT-N7108": ["Samsung", "Galaxy Note II"],
        "K-Touch T621": ["K-Touch", "T621"],
        "LENOVO-Lenovo-A298t": ["Lenovo", "A298"],
        "Coolpad 8150": ["Coolpad", "8150"],
        "5860S": ["Coolpad", "5860"],
        ZTEU807: ["ZTE", "U807"],
        "SCH-I739": ["Samsung", "SCH-I739"],
        "SCH-I829": ["Samsung", "SCH-I829"],
        "HS-E830": ["Hisense", "E830"],
        "HS-E920": ["Hisense", "E920"],
        "Lenovo S720": ["Lenovo", "S720"],
        "MI 2C": ["Xiaomi", "MI-TWO"],
        "OPPO R813T": ["Oppo", "R813"],
        "SCH-I879": ["Samsung", "Galaxy Note"],
        "GT-S6102E": ["Samsung", "Galaxy Y Duos"]
      },
      l = {
        9600: "Bold",
        9650: "Bold",
        9700: "Bold",
        9780: "Bold",
        9790: "Bold",
        9900: "Bold",
        9930: "Bold",
        8300: "Curve",
        8310: "Curve",
        8320: "Curve",
        8330: "Curve",
        "8350i": "Curve",
        8520: "Curve",
        8530: "Curve",
        8900: "Curve",
        9220: "Curve",
        9300: "Curve",
        9330: "Curve",
        9350: "Curve",
        9360: "Curve",
        9370: "Curve",
        9380: "Curve",
        8100: "Pearl",
        8110: "Pearl",
        8120: "Pearl",
        8130: "Pearl",
        8220: "Pearl",
        8230: "Pearl",
        9100: "Pearl",
        9105: "Pearl",
        9530: "Storm",
        9550: "Storm",
        9670: "Style",
        9800: "Torch",
        9810: "Torch",
        9850: "Torch",
        9860: "Torch",
        9630: "Tour",
        9981: "Porsche P"
      },
      u = function () {
        this.initialize.apply(this, Array.prototype.slice.call(arguments))
      };
    u.prototype = {
      initialize: function (e) {
        this.original = e.value || null, this.alias = e.alias || null
      }
    };
    var c = function () {
      this.initialize.apply(this, arguments)
    };
    return c.prototype = {
      initialize: function (e, t) {
        this.options = {
          useFeatures: t && t.useFeatures || !1,
          detectCamouflage: t && t.detectCamouflage || !0
        }, this.browser = {
          stock: !0,
          hidden: !1,
          channel: ""
        }, this.engine = {}, this.os = {}, this.device = {
          type: "desktop",
          identified: !1
        }, this.camouflage = !1, this.features = [], this.detect(e)
      },
      detect: function (c) {
        if (c.match("Unix") && (this.os.name = "Unix"), c.match("FreeBSD") && (this.os.name = "FreeBSD"), c.match("OpenBSD") && (this.os.name = "OpenBSD"), c.match("NetBSD") && (this.os.name = "NetBSD"), c.match("SunOS") && (this.os.name = "Solaris"), c.match("Linux") && (this.os.name = "Linux", c.match("CentOS") && (this.os.name = "CentOS", (match = /CentOS\/[0-9\.\-]+el([0-9_]+)/.exec(c)) && (this.os.version = new u({
            value: match[1].replace(/_/g, ".")
          }))), c.match("Debian") && (this.os.name = "Debian"), c.match("Fedora") && (this.os.name = "Fedora", (match = /Fedora\/[0-9\.\-]+fc([0-9]+)/.exec(c)) && (this.os.version = new u({
            value: match[1]
          }))), c.match("Gentoo") && (this.os.name = "Gentoo"), c.match("Kubuntu") && (this.os.name = "Kubuntu"), c.match("Mandriva Linux") && (this.os.name = "Mandriva", (match = /Mandriva Linux\/[0-9\.\-]+mdv([0-9]+)/.exec(c)) && (this.os.version = new u({
            value: match[1]
          }))), c.match("Mageia") && (this.os.name = "Mageia", (match = /Mageia\/[0-9\.\-]+mga([0-9]+)/.exec(c)) && (this.os.version = new u({
            value: match[1]
          }))), c.match("Red Hat") && (this.os.name = "Red Hat", (match = /Red Hat[^\/]*\/[0-9\.\-]+el([0-9_]+)/.exec(c)) && (this.os.version = new u({
            value: match[1].replace(/_/g, ".")
          }))), c.match("Slackware") && (this.os.name = "Slackware"), c.match("SUSE") && (this.os.name = "SUSE"), c.match("Turbolinux") && (this.os.name = "Turbolinux"), c.match("Ubuntu") && (this.os.name = "Ubuntu", (match = /Ubuntu\/([0-9.]*)/.exec(c)) && (this.os.version = new u({
            value: match[1]
          })))), c.match("iPhone( Simulator)?;") || c.match("iPad;") || c.match("iPod;") || c.match(/iPhone\s*\d*s?[cp]?;/i) ? (this.os.name = "iOS", this.os.version = new u({
            value: "1.0"
          }), (match = /OS (.*) like Mac OS X/.exec(c)) && (this.os.version = new u({
            value: match[1].replace(/_/g, ".")
          })), c.match("iPhone Simulator;") ? this.device.type = "emulator" : c.match("iPod;") ? (this.device.type = "media", this.device.manufacturer = "Apple", this.device.model = "iPod Touch") : c.match("iPhone;") || c.match(/iPhone\s*\d*s?[cp]?;/i) ? (this.device.type = "mobile", this.device.manufacturer = "Apple", this.device.model = "iPhone") : (this.device.type = "tablet", this.device.manufacturer = "Apple", this.device.model = "iPad"), this.device.identified = !0) : c.match("Mac OS X") && (this.os.name = "Mac OS X", (match = /Mac OS X (10[0-9\._]*)/.exec(c)) && (this.os.version = new u({
            value: match[1].replace(/_/g, ".")
          }))), c.match("Windows")) {
          if (this.os.name = "Windows", match = /Windows NT ([0-9]\.[0-9])/.exec(c)) switch (this.os.version = t(match[1]), match[1]) {
            case "6.2":
              this.os.version = new u({
                value: match[1],
                alias: "8"
              });
              break;
            case "6.1":
              this.os.version = new u({
                value: match[1],
                alias: "7"
              });
              break;
            case "6.0":
              this.os.version = new u({
                value: match[1],
                alias: "Vista"
              });
              break;
            case "5.2":
              this.os.version = new u({
                value: match[1],
                alias: "Server 2003"
              });
              break;
            case "5.1":
              this.os.version = new u({
                value: match[1],
                alias: "XP"
              });
              break;
            case "5.0":
              this.os.version = new u({
                value: match[1],
                alias: "2000"
              });
              break;
            default:
              this.os.version = new u({
                value: match[1],
                alias: "NT " + this.os.version
              })
          }
          if ((c.match("Windows 95") || c.match("Win95") || c.match("Win 9x 4.00")) && (this.os.version = new u({
              value: "4.0",
              alias: "95"
            })), (c.match("Windows 98") || c.match("Win98") || c.match("Win 9x 4.10")) && (this.os.version = new u({
              value: "4.1",
              alias: "98"
            })), (c.match("Windows ME") || c.match("WinME") || c.match("Win 9x 4.90")) && (this.os.version = new u({
              value: "4.9",
              alias: "ME"
            })), (c.match("Windows XP") || c.match("WinXP")) && (this.os.name = new u({
              value: "5.1",
              alias: "XP"
            })), c.match("WP7") && (this.os.name = "Windows Phone", this.os.version = new u({
              value: "7.0",
              details: 2
            }), this.device.type = "mobile", this.browser.mode = "desktop"), (c.match("Windows CE") || c.match("WinCE") || c.match("WindowsCE")) && (c.match(" IEMobile") ? (this.os.name = "Windows Mobile", c.match(" IEMobile 8") && (this.os.version = new u({
              value: "6.5",
              details: 2
            })), c.match(" IEMobile 7") && (this.os.version = new u({
              value: "6.1",
              details: 2
            })), c.match(" IEMobile 6") && (this.os.version = new u({
              value: "6.0",
              details: 2
            }))) : (this.os.name = "Windows CE", (match = /WindowsCEOS\/([0-9.]*)/.exec(c)) && (this.os.version = new u({
              value: match[1],
              details: 2
            })), (match = /Windows CE ([0-9.]*)/.exec(c)) && (this.os.version = new u({
              value: match[1],
              details: 2
            }))), this.device.type = "mobile"), c.match("Windows Mobile") && (this.os.name = "Windows Mobile", this.device.type = "mobile"), (match = /WindowsMobile\/([0-9.]*)/.exec(c)) && (this.os.name = "Windows Mobile", this.os.version = new u({
              value: match[1],
              details: 2
            }), this.device.type = "mobile"), c.match("Windows Phone [0-9]") && (this.os.name = "Windows Mobile", this.os.version = new u({
              value: c.match(/Windows Phone ([0-9.]*)/)[1],
              details: 2
            }), this.device.type = "mobile"), c.match("Windows Phone OS")) {
            this.os.name = "Windows Phone", this.os.version = new u({
              value: c.match(/Windows Phone OS ([0-9.]*)/)[1],
              details: 2
            }), this.os.version < 7 && (this.os.name = "Windows Mobile"), (match = /IEMobile\/[^;]+; ([^;]+); ([^;]+)[;|\)]/.exec(c)) && (this.device.manufacturer = match[1], this.device.model = match[2]), this.device.type = "mobile";
            var m = this.device.manufacturer,
              h = e(this.device.model);
            "undefined" != typeof s[m] && "undefined" != typeof s[m][h] && (this.device.manufacturer = s[m][h][0], this.device.model = s[m][h][1], this.device.identified = !0), "Microsoft" === m && "XDeviceEmulator" === h && (this.device.manufacturer = null, this.device.model = null, this.device.type = "emulator", this.device.identified = !0)
          }
        }
        if (c.match("Android")) {
          if (this.os.name = "Android", this.os.version = null, (match = /Android(?: )?(?:AllPhone_|CyanogenMod_)?(?:\/)?v?([0-9.]+)/.exec(c.replace("-update", "."))) && (this.os.version = new u({
              value: match[1],
              details: 3
            })), c.match("Android Eclair") && (this.os.version = new u({
              value: "2.0",
              details: 3
            })), this.device.type = "mobile", this.os.version >= 3 && (this.device.type = "tablet"), this.os.version >= 4 && c.match("Mobile") && (this.device.type = "mobile"), (match = /Eclair; (?:[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?) Build\/([^\/]*)\//.exec(c)) ? this.device.model = match[1] : (match = /; ([^;]*[^;\s])\s+Build/.exec(c)) ? this.device.model = match[1] : (match = /[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?; ([^;]*[^;\s]);\s+Build/.exec(c)) ? this.device.model = match[1] : (match = /\(([^;]+);U;Android\/[^;]+;[0-9]+\*[0-9]+;CTC\/2.0\)/.exec(c)) ? this.device.model = match[1] : (match = /;\s?([^;]+);\s?[0-9]+\*[0-9]+;\s?CTC\/2.0/.exec(c)) ? this.device.model = match[1] : (match = /zh-cn;\s*(.*?)(\/|build)/i.exec(c)) ? this.device.model = match[1] : (match = /Android [^;]+; (?:[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?; )?([^)]+)\)/.exec(c)) ? c.match(/[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?/) || (this.device.model = match[1]) : (match = /^(.+?)\/\S+/i.exec(c)) && (this.device.model = match[1]), this.device.model && "Android" === this.device.model.substring(0, 7) && (this.device.model = null), this.device.model) {
            var h = e(this.device.model);
            "undefined" != typeof d[h] && (this.device.manufacturer = d[h][0], this.device.model = d[h][1], "undefined" != typeof d[h][2] && (this.device.type = d[h][2]), this.device.identified = !0), "Emulator" !== h && "x86 Emulator" !== h && "x86 VirtualBox" !== h && "vm" !== h || (this.device.manufacturer = null, this.device.model = null, this.device.type = "emulator", this.device.identified = !0)
          }
          c.match("HP eStation") && (this.device.manufacturer = "HP", this.device.model = "eStation", this.device.type = "tablet", this.device.identified = !0), c.match("Pre/1.0") && (this.device.manufacturer = "Palm", this.device.model = "Pre", this.device.identified = !0), c.match("Pre/1.1") && (this.device.manufacturer = "Palm", this.device.model = "Pre Plus", this.device.identified = !0), c.match("Pre/1.2") && (this.device.manufacturer = "Palm", this.device.model = "Pre 2", this.device.identified = !0), c.match("Pre/3.0") && (this.device.manufacturer = "HP", this.device.model = "Pre 3", this.device.identified = !0), c.match("Pixi/1.0") && (this.device.manufacturer = "Palm", this.device.model = "Pixi", this.device.identified = !0), c.match("Pixi/1.1") && (this.device.manufacturer = "Palm", this.device.model = "Pixi Plus", this.device.identified = !0), c.match("P160UN?A?/1.0") && (this.device.manufacturer = "HP", this.device.model = "Veer", this.device.identified = !0)
        }
        if (c.match("GoogleTV") && (this.os.name = "Google TV", c.match("Chrome/5.") && (this.os.version = new u({
            value: "1"
          })), c.match("Chrome/11.") && (this.os.version = new u({
            value: "2"
          })), this.device.type = "television"), c.match("WoPhone") && (this.os.name = "WoPhone", (match = /WoPhone\/([0-9\.]*)/.exec(c)) && (this.os.version = new u({
            value: match[1]
          })), this.device.type = "mobile"), c.match("BlackBerry") && (this.os.name = "BlackBerry OS", c.match("Opera") ? this.device.model = "BlackBerry" : ((match = /BlackBerry([0-9]*)\/([0-9.]*)/.exec(c)) && (this.device.model = match[1], this.os.version = new u({
            value: match[2],
            details: 2
          })), (match = /; BlackBerry ([0-9]*);/.exec(c)) && (this.device.model = match[1]), (match = /Version\/([0-9.]*)/.exec(c)) && (this.os.version = new u({
            value: match[1],
            details: 2
          })), this.os.version >= 10 && (this.os.name = "BlackBerry"), "undefined" != typeof this.device.model ? "undefined" != typeof l[this.device.model] ? this.device.model = "BlackBerry " + l[this.device.model] + " " + this.device.model : this.device.model = "BlackBerry " + this.device.model : this.device.model = "BlackBerry"), this.device.manufacturer = "RIM", this.device.type = "mobile", this.device.identified = !0), c.match("RIM Tablet OS") ? (this.os.name = "BlackBerry Tablet OS", this.os.version = new u({
            value: c.match(/RIM Tablet OS ([0-9.]*)/)[1],
            details: 2
          }), this.device.manufacturer = "RIM", this.device.model = "BlackBerry PlayBook", this.device.type = "tablet", this.device.identified = !0) : c.match("PlayBook") && (match = /Version\/(10[0-9.]*)/.exec(c)) && (this.os.name = "BlackBerry", this.os.version = new u({
            value: match[1],
            details: 2
          }), this.device.manufacturer = "RIM", this.device.model = "BlackBerry PlayBook", this.device.type = "tablet", this.device.identified = !0), c.match("(?:web|hpw)OS") && (this.os.name = "webOS", this.os.version = new u({
            value: c.match(/(?:web|hpw)OS\/([0-9.]*)/)[1]
          }), c.match("tablet") ? this.device.type = "tablet" : this.device.type = "mobile", this.device.manufacturer = c.match("hpwOS") ? "HP" : "Palm", c.match("Pre/1.0") && (this.device.model = "Pre"), c.match("Pre/1.1") && (this.device.model = "Pre Plus"), c.match("Pre/1.2") && (this.device.model = "Pre2"), c.match("Pre/3.0") && (this.device.model = "Pre3"), c.match("Pixi/1.0") && (this.device.model = "Pixi"), c.match("Pixi/1.1") && (this.device.model = "Pixi Plus"), c.match("P160UN?A?/1.0") && (this.device.model = "Veer"), c.match("TouchPad/1.0") && (this.device.model = "TouchPad"), (c.match("Emulator/") || c.match("Desktop/")) && (this.device.type = "emulator", this.device.manufacturer = null, this.device.model = null), this.device.identified = !0), (c.match("Symbian") || c.match("Series[ ]?60") || c.match("S60")) && (this.os.name = "Series60", c.match("SymbianOS/9.1") && !c.match("Series60") && (this.os.version = new u({
            value: "3.0"
          })), (match = /Series60\/([0-9.]*)/.exec(c)) && (this.os.version = new u({
            value: match[1]
          })), (match = /Nokia([^\/;]+)[\/|;]/.exec(c)) && "Browser" !== match[1] && (this.device.manufacturer = "Nokia", this.device.model = match[1], this.device.identified = !0), (match = /Vertu([^\/;]+)[\/|;]/.exec(c)) && (this.device.manufacturer = "Vertu", this.device.model = match[1], this.device.identified = !0), (match = /Symbian; U; ([^;]+); [a-z][a-z]\-[a-z][a-z]/i.exec(c)) && (this.device.manufacturer = "Nokia", this.device.model = match[1], this.device.identified = !0), (match = /Samsung\/([^;]*);/.exec(c)) && (this.device.manufacturer = "Samsung", this.device.model = match[1], this.device.identified = !0), this.device.type = "mobile"), c.match("Series40") && (this.os.name = "Series40", (match = /Nokia([^\/]+)\//.exec(c)) && (this.device.manufacturer = "Nokia", this.device.model = match[1], this.device.identified = !0), this.device.type = "mobile"), c.match("MeeGo") && (this.os.name = "MeeGo", this.device.type = "mobile", (match = /Nokia([^\)]+)\)/.exec(c)) && (this.device.manufacturer = "Nokia", this.device.model = match[1], this.device.identified = !0)), c.match("Maemo") && (this.os.name = "Maemo", this.device.type = "mobile", (match = /(N[0-9]+)/.exec(c)) && (this.device.manufacturer = "Nokia", this.device.model = match[1], this.device.identified = !0)), c.match("Tizen") && (this.os.name = "Tizen", (match = /Tizen[\/ ]([0-9.]*)/.exec(c)) && (this.os.version = new u({
            value: match[1]
          })), this.device.type = "mobile", (match = /\(([^;]+); ([^\/]+)\//.exec(c)) && "Linux" !== match[1] && (this.device.manufacturer = match[1], this.device.model = match[2], "undefined" != typeof r[this.device.manufacturer] && "undefined" != typeof r[this.device.manufacturer][this.device.model]))) {
          var m = this.device.manufacturer,
            h = e(this.device.model);
          this.device.manufacturer = r[m][h][0], this.device.model = r[m][h][1], this.device.identified = !0
        }
        if (c.match("[b|B]ada") && (this.os.name = "Bada", (match = /[b|B]ada\/([0-9.]*)/.exec(c)) && (this.os.version = new u({
            value: match[1]
          })), this.device.type = "mobile", (match = /\(([^;]+); ([^\/]+)\//.exec(c)) && (this.device.manufacturer = match[1], this.device.model = e(match[2])), "undefined" != typeof a[this.device.manufacturer] && "undefined" != typeof a[this.device.manufacturer][this.device.model])) {
          var m = this.device.manufacturer,
            h = e(this.device.model);
          this.device.manufacturer = a[m][h][0], this.device.model = a[m][h][1], this.device.identified = !0
        }
        if ((c.match(/BREW/i) || c.match("BMP; U")) && (this.os.name = "Brew", this.device.type = "mobile", (match = /BREW; U; ([0-9.]*)/i.exec(c)) ? this.os.version = new u({
            value: match[1]
          }) : (match = /;BREW\/([0-9.]*)/i.exec(c)) && (this.os.version = new u({
            value: match[1]
          })), (match = /\(([^;]+);U;REX\/[^;]+;BREW\/[^;]+;(?:.*;)?[0-9]+\*[0-9]+;CTC\/2.0\)/.exec(c)) && (this.device.model = match[1]), this.device.model)) {
          var h = e(this.device.model);
          "undefined" != typeof i[h] && (this.device.manufacturer = i[h][0], this.device.model = i[h][1], this.device.identified = !0)
        }
        if (c.match(/\(MTK;/) && (this.os.name = "MTK", this.device.type = "mobile"), c.match("CrOS") && (this.os.name = "Chrome OS", this.device.type = "desktop"), c.match("Joli OS") && (this.os.name = "Joli OS", this.device.type = "desktop", (match = /Joli OS\/([0-9.]*)/i.exec(c)) && (this.os.version = new u({
            value: match[1]
          }))), c.match("Haiku") && (this.os.name = "Haiku", this.device.type = "desktop"), c.match("QNX") && (this.os.name = "QNX", this.device.type = "mobile"), c.match("OS/2; Warp") && (this.os.name = "OS/2 Warp", this.device.type = "desktop", (match = /OS\/2; Warp ([0-9.]*)/i.exec(c)) && (this.os.version = new u({
            value: match[1]
          }))), c.match("Grid OS") && (this.os.name = "Grid OS", this.device.type = "tablet", (match = /Grid OS ([0-9.]*)/i.exec(c)) && (this.os.version = new u({
            value: match[1]
          }))), c.match(/AmigaOS/i) && (this.os.name = "AmigaOS", this.device.type = "desktop", (match = /AmigaOS ([0-9.]*)/i.exec(c)) && (this.os.version = new u({
            value: match[1]
          }))), c.match(/MorphOS/i) && (this.os.name = "MorphOS", this.device.type = "desktop", (match = /MorphOS ([0-9.]*)/i.exec(c)) && (this.os.version = new u({
            value: match[1]
          }))), c.match("Kindle") && !c.match("Fire") && (this.os.name = "", this.device.manufacturer = "Amazon", this.device.model = "Kindle", this.device.type = "ereader", c.match("Kindle/2.0") && (this.device.model = "Kindle 2"), c.match("Kindle/3.0") && (this.device.model = "Kindle 3 or later"), this.device.identified = !0), c.match("nook browser") && (this.os.name = "Android", this.device.manufacturer = "Barnes & Noble", this.device.model = "NOOK", this.device.type = "ereader", this.device.identified = !0), c.match("bookeen/cybook") && (this.os.name = "", this.device.manufacturer = "Bookeen", this.device.model = "Cybook", this.device.type = "ereader", c.match("Orizon") && (this.device.model = "Cybook Orizon"), this.device.identified = !0), c.match("EBRD1101") && (this.os.name = "", this.device.manufacturer = "Sony", this.device.model = "Reader", this.device.type = "ereader", this.device.identified = !0), c.match("Iriver ;") && (this.os.name = "", this.device.manufacturer = "iRiver", this.device.model = "Story", this.device.type = "ereader", c.match("EB07") && (this.device.model = "Story HD EB07"), this.device.identified = !0), c.match("Nintendo Wii") && (this.os.name = "", this.device.manufacturer = "Nintendo", this.device.model = "Wii", this.device.type = "gaming", this.device.identified = !0), c.match("Nintendo DSi") && (this.os.name = "", this.device.manufacturer = "Nintendo", this.device.model = "DSi", this.device.type = "gaming", this.device.identified = !0), c.match("Nintendo 3DS") && (this.os.name = "", this.device.manufacturer = "Nintendo", this.device.model = "3DS", this.device.type = "gaming", (match = /Version\/([0-9.]*)/.exec(c)) && (this.os.version = new u({
            value: match[1]
          })), this.device.identified = !0), c.match("PlayStation Portable") && (this.os.name = "", this.device.manufacturer = "Sony", this.device.model = "Playstation Portable", this.device.type = "gaming", this.device.identified = !0), c.match("PlayStation Vita") && (this.os.name = "", (match = /PlayStation Vita ([0-9.]*)/.exec(c)) && (this.os.version = new u({
            value: match[1]
          })), this.device.manufacturer = "Sony", this.device.model = "PlayStation Vita", this.device.type = "gaming", this.device.identified = !0), c.match(/PlayStation 3/i) && (this.os.name = "", (match = /PLAYSTATION 3;? ([0-9.]*)/.exec(c)) && (this.os.version = new u({
            value: match[1]
          })), this.device.manufacturer = "Sony", this.device.model = "Playstation 3", this.device.type = "gaming", this.device.identified = !0), c.match("Viera") && (this.os.name = "", this.device.manufacturer = "Panasonic", this.device.model = "Smart Viera", this.device.type = "television", this.device.identified = !0), (c.match("AQUOSBrowser") || c.match("AQUOS-AS")) && (this.os.name = "", this.device.manufacturer = "Sharp", this.device.model = "Aquos TV", this.device.type = "television", this.device.identified = !0), c.match("SMART-TV") && (this.os.name = "", this.device.manufacturer = "Samsung", this.device.model = "Smart TV", this.device.type = "television", this.device.identified = !0, (match = /Maple([0-9]*)/.exec(c)) && (this.device.model += " " + match[1])), c.match("SonyDTV|SonyBDP|SonyCEBrowser") && (this.os.name = "", this.device.manufacturer = "Sony", this.device.model = "Internet TV", this.device.type = "television", this.device.identified = !0), c.match("NETTV/") && (this.os.name = "", this.device.manufacturer = "Philips", this.device.model = "Net TV", this.device.type = "television", this.device.identified = !0), (match = /LG NetCast\.(?:TV|Media)-([0-9]*)/.exec(c)) && (this.os.name = "", this.device.manufacturer = "LG", this.device.model = "NetCast TV " + match[1], this.device.type = "television", this.device.identified = !0), (match = /LGSmartTV/.exec(c)) && (this.os.name = "", this.device.manufacturer = "LG", this.device.model = "Smart TV", this.device.type = "television", this.device.identified = !0), (c.match("Toshiba_?TP/") || c.match("TSBNetTV/")) && (this.os.name = "", this.device.manufacturer = "Toshiba", this.device.model = "Smart TV", this.device.type = "television", this.device.identified = !0), (match = /mbxtWebKit\/([0-9.]*)/.exec(c)) && (this.os.name = "", this.browser.name = "MachBlue XT", this.browser.version = new u({
            value: match[1],
            details: 2
          }), this.device.type = "television"), (match = /\(ADB; ([^\)]+)\)/.exec(c)) && (this.os.name = "", this.device.manufacturer = "ADB", this.device.model = ("Unknown" !== match[1] ? match[1].replace("ADB", "") + " " : "") + "IPTV receiver", this.device.type = "television", this.device.identified = !0), c.match(/Mstar;OWB/) && (this.os.name = "", this.device.manufacturer = "MStar", this.device.model = "PVR", this.device.type = "television", this.device.identified = !0, this.browser.name = "Origyn Web Browser"), (match = /\TechniSat ([^;]+);/.exec(c)) && (this.os.name = "", this.device.manufacturer = "TechniSat", this.device.model = match[1], this.device.type = "television", this.device.identified = !0), (match = /\Technicolor_([^;]+);/.exec(c)) && (this.os.name = "", this.device.manufacturer = "Technicolor", this.device.model = match[1], this.device.type = "television", this.device.identified = !0), (match = /Winbox Evo2/.exec(c)) && (this.os.name = "", this.device.manufacturer = "Winbox", this.device.model = "Evo2", this.device.type = "television", this.device.identified = !0), match = /^Roku\/DVP-([0-9]+)/.exec(c)) {
          switch (this.device.manufacturer = "Roku", this.device.type = "television", match[1]) {
            case "2000":
              this.device.model = "HD";
              break;
            case "2050":
              this.device.model = "XD";
              break;
            case "2100":
              this.device.model = "XDS";
              break;
            case "2400":
              this.device.model = "LT";
              break;
            case "3000":
              this.device.model = "2 HD";
              break;
            case "3050":
              this.device.model = "2 XD";
              break;
            case "3100":
              this.device.model = "2 XS"
          }
          this.device.identified = !0
        }
        if (match = /HbbTV\/1.1.1 \([^;]*;\s*([^;]*)\s*;\s*([^;]*)\s*;/.exec(c)) {
          var f = match[1].trim(),
            _ = match[2].trim();
          if (!this.device.manufacturer && "" !== f && "vendorName" !== f) {
            switch (f) {
              case "LGE":
                this.device.manufacturer = "LG";
                break;
              case "TOSHIBA":
                this.device.manufacturer = "Toshiba";
                break;
              case "smart":
                this.device.manufacturer = "Smart";
                break;
              case "tv2n":
                this.device.manufacturer = "TV2N";
                break;
              default:
                this.device.manufacturer = f
            }
            if (!this.device.model && "" !== _ && "modelName" !== _) {
              switch (_) {
                case "GLOBAL_PLAT3":
                  this.device.model = "NetCast TV";
                  break;
                case "SmartTV2012":
                  this.device.model = "Smart TV 2012";
                  break;
                case "videoweb":
                  this.device.model = "Videoweb";
                  break;
                default:
                  this.device.model = _
              }
              "Humax" === f && (this.device.model = this.device.model.toUpperCase()), this.device.identified = !0, this.os.name = ""
            }
          }
          this.device.type = "television"
        }
        if (c.match("InettvBrowser") && (this.device.type = "television"), c.match("MIDP") && (this.device.type = "mobile"), !this.device.model && !this.device.manufacturer) {
          var p = [];
          c.match(/^(Mozilla|Opera)/) || (match = /^(?:MQQBrowser\/[0-9\.]+\/)?([^\s]+)/.exec(c)) && (match[1] = match[1].replace(/_TD$/, ""), match[1] = match[1].replace(/_CMCC$/, ""), match[1] = match[1].replace(/[_ ]Mozilla$/, ""), match[1] = match[1].replace(/ Linux$/, ""), match[1] = match[1].replace(/ Opera$/, ""), match[1] = match[1].replace(/\/[0-9].*$/, ""), p.push(match[1])), (match = /[0-9]+x[0-9]+; ([^;]+)/.exec(c)) && p.push(match[1]), (match = /[0-9]+X[0-9]+ ([^;\/\(\)]+)/.exec(c)) && p.push(match[1]), (match = /Windows NT 5.1; ([^;]+); Windows Phone/.exec(c)) && p.push(match[1]), (match = /\) PPC; (?:[0-9]+x[0-9]+; )?([^;\/\(\)]+)/.exec(c)) && p.push(match[1]), (match = /\(([^;]+); U; Windows Mobile/.exec(c)) && p.push(match[1]), (match = /Vodafone\/1.0\/([^\/]+)/.exec(c)) && p.push(match[1]), (match = /\ ([^\s]+)$/.exec(c)) && p.push(match[1]);
          for (var y = 0; y < p.length; y++) {
            if (!this.device.model && !this.device.manufacturer) {
              var h = e(p[y]),
                M = !1;
              "Android" === this.os.name && "undefined" != typeof d[h] && (this.device.manufacturer = d[h][0], this.device.model = d[h][1], "undefined" != typeof d[h][2] && (this.device.type = d[h][2]), this.device.identified = !0, M = !0), this.os.name && "Windows" !== this.os.name && "Windows Mobile" !== this.os.name && "Windows CE" !== this.os.name || "undefined" != typeof o[h] && (this.device.manufacturer = o[h][0], this.device.model = o[h][1], this.device.type = "mobile", this.device.identified = !0, "Windows Mobile" !== this.os.name && (this.os.name = "Windows Mobile", this.os.version = null), M = !0)
            }
            if (!M && ((match = /^GIONEE-([^\s]+)/.exec(p[y])) && (this.device.manufacturer = "Gionee", this.device.model = e(match[1]), this.device.type = "mobile", this.device.identified = !0), (match = /^HTC_?([^\/_]+)(?:\/|_|$)/.exec(p[y])) && (this.device.manufacturer = "HTC", this.device.model = e(match[1]), this.device.type = "mobile", this.device.identified = !0), (match = /^HUAWEI-([^\/]*)/.exec(p[y])) && (this.device.manufacturer = "Huawei", this.device.model = e(match[1]), this.device.type = "mobile", this.device.identified = !0), (match = /(?:^|\()LGE?(?:\/|-|_|\s)([^\s]*)/.exec(p[y])) && (this.device.manufacturer = "LG", this.device.model = e(match[1]), this.device.type = "mobile", this.device.identified = !0), (match = /^MOT-([^\/_]+)(?:\/|_|$)/.exec(p[y])) && (this.device.manufacturer = "Motorola", this.device.model = e(match[1]), this.device.type = "mobile", this.device.identified = !0), (match = /^Motorola_([^\/_]+)(?:\/|_|$)/.exec(p[y])) && (this.device.manufacturer = "Motorola", this.device.model = e(match[1]), this.device.type = "mobile", this.device.identified = !0), (match = /^Nokia([^\/]+)(?:\/|$)/.exec(p[y])) && (this.device.manufacturer = "Nokia", this.device.model = e(match[1]), this.device.type = "mobile", this.device.identified = !0, this.os.name || (this.os.name = "Series40")), (match = /^SonyEricsson([^\/_]+)(?:\/|_|$)/.exec(p[y])) && (this.device.manufacturer = "Sony Ericsson", this.device.model = e(match[1]), this.device.type = "mobile", this.device.identified = !0), match = /^SAMSUNG-([^\/_]+)(?:\/|_|$)/.exec(p[y])))
              if (this.device.manufacturer = "Samsung", this.device.model = e(match[1]), this.device.type = "mobile", "Bada" === this.os.name) {
                var m = "SAMSUNG",
                  h = e(this.device.model);
                "undefined" != typeof a[m] && "undefined" != typeof a[m][h] && (this.device.manufacturer = a[m][h][0], this.device.model = a[m][h][1], this.device.identified = !0)
              } else if (match = /Jasmine\/([0-9.]*)/.exec(c)) {
              var g = match[1],
                m = "SAMSUNG",
                h = e(this.device.model);
              "undefined" != typeof n[m] && "undefined" != typeof n[m][h] && (this.device.manufacturer = n[m][h][0], this.device.model = n[m][h][1], this.device.identified = !0, this.os.name = "Touchwiz", this.os.version = new u({
                value: "2.0"
              }))
            } else if (match = /Dolfin\/([0-9.]*)/.exec(c)) {
              var g = match[1],
                m = "SAMSUNG",
                h = e(this.device.model);
              if ("undefined" != typeof a[m] && "undefined" != typeof a[m][h]) switch (this.device.manufacturer = a[m][h][0], this.device.model = a[m][h][1], this.device.identified = !0, this.os.name = "Bada", g) {
                case "2.0":
                  this.os.version = new u({
                    value: "1.0"
                  });
                  break;
                case "2.2":
                  this.os.version = new u({
                    value: "1.2"
                  });
                  break;
                case "3.0":
                  this.os.version = new u({
                    value: "2.0"
                  })
              }
              if ("undefined" != typeof n[m] && "undefined" != typeof n[m][h]) switch (this.device.manufacturer = n[m][h][0], this.device.model = n[m][h][1], this.device.identified = !0, this.os.name = "Touchwiz", g) {
                case "1.0":
                  this.os.version = new u({
                    value: "1.0"
                  });
                  break;
                case "1.5":
                  this.os.version = new u({
                    value: "2.0"
                  });
                  break;
                case "2.0":
                  this.os.version = new u({
                    value: "3.0"
                  })
              }
            }
          }
        }
        if ((match = /\((?:LG[-|\/])(.*) (?:Browser\/)?AppleWebkit/.exec(c)) && (this.device.manufacturer = "LG", this.device.model = match[1], this.device.type = "mobile", this.device.identified = !0), (match = /^Mozilla\/5.0 \((?:Nokia|NOKIA)(?:\s?)([^\)]+)\)UC AppleWebkit\(like Gecko\) Safari\/530$/.exec(c)) && (this.device.manufacturer = "Nokia", this.device.model = match[1], this.device.type = "mobile", this.device.identified = !0, this.os.name = "Series60"), c.match("Safari") && ("iOS" === this.os.name && (this.browser.stock = !0, this.browser.hidden = !0, this.browser.name = "Safari", this.browser.version = null), "Mac OS X" !== this.os.name && "Windows" !== this.os.name || (this.browser.name = "Safari", this.browser.stock = "Mac OS X" === this.os.name, (match = /Version\/([0-9\.]+)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          })), c.match(/AppleWebKit\/[0-9\.]+\+/) && (this.browser.name = "WebKit Nightly Build", this.browser.version = null))), c.match("MSIE") && (this.browser.name = "Internet Explorer", (c.match("IEMobile") || c.match("Windows CE") || c.match("Windows Phone") || c.match("WP7")) && (this.browser.name = "Mobile Internet Explorer"), (match = /MSIE ([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          }))), c.match(/Opera/i) && (this.browser.stock = !1, this.browser.name = "Opera", (match = /Opera[\/| ]([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          })), (match = /Version\/([0-9.]*)/.exec(c)) && (parseFloat(match[1]) >= 10 ? this.browser.version = new u({
            value: match[1]
          }) : this.browser.version = null), this.browser.version && c.match("Edition Labs") && (this.browser.version.type = "alpha", this.browser.channel = "Labs"), this.browser.version && c.match("Edition Next") && (this.browser.version.type = "alpha", this.browser.channel = "Next"), c.match("Opera Tablet") && (this.browser.name = "Opera Mobile", this.device.type = "tablet"), c.match("Opera Mobi") && (this.browser.name = "Opera Mobile", this.device.type = "mobile"), (match = /Opera Mini;/.exec(c)) && (this.browser.name = "Opera Mini", this.browser.version = null, this.browser.mode = "proxy", this.device.type = "mobile"), (match = /Opera Mini\/(?:att\/)?([0-9.]*)/.exec(c)) && (this.browser.name = "Opera Mini", this.browser.version = new u({
            value: match[1],
            details: -1
          }), this.browser.mode = "proxy", this.device.type = "mobile"), "Opera" === this.browser.name && "mobile" === this.device.type && (this.browser.name = "Opera Mobile", c.match(/BER/) && (this.browser.name = "Opera Mini", this.browser.version = null)), c.match("InettvBrowser") && (this.device.type = "television"), (c.match("Opera TV") || c.match("Opera-TV")) && (this.browser.name = "Opera", this.device.type = "television"), c.match("Linux zbov") && (this.browser.name = "Opera Mobile", this.browser.mode = "desktop", this.device.type = "mobile", this.os.name = null, this.os.version = null), c.match("Linux zvav") && (this.browser.name = "Opera Mini", this.browser.version = null, this.browser.mode = "desktop", this.device.type = "mobile", this.os.name = null, this.os.version = null)), c.match("Firefox") && (this.browser.stock = !1, this.browser.name = "Firefox", (match = /Firefox\/([0-9ab.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          })), "alpha" === this.browser.version.type && (this.browser.channel = "Aurora"), "beta" === this.browser.version.type && (this.browser.channel = "Beta"), c.match("Fennec") && (this.device.type = "mobile"), c.match("Mobile; rv") && (this.device.type = "mobile"), c.match("Tablet; rv") && (this.device.type = "tablet"), "mobile" !== this.device.type && "tablet" !== this.device.type || (this.browser.name = "Firefox Mobile")), c.match("Namoroka") && (this.browser.stock = !1, this.browser.name = "Firefox", (match = /Namoroka\/([0-9ab.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          })), this.browser.channel = "Namoroka"), c.match("Shiretoko") && (this.browser.stock = !1, this.browser.name = "Firefox", (match = /Shiretoko\/([0-9ab.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          })), this.browser.channel = "Shiretoko"), c.match("Minefield") && (this.browser.stock = !1, this.browser.name = "Firefox", (match = /Minefield\/([0-9ab.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          })), this.browser.channel = "Minefield"), c.match("Firebird") && (this.browser.stock = !1, this.browser.name = "Firebird", (match = /Firebird\/([0-9ab.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          }))), c.match("SeaMonkey") && (this.browser.stock = !1, this.browser.name = "SeaMonkey", (match = /SeaMonkey\/([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          }))), c.match("Netscape") && (this.browser.stock = !1, this.browser.name = "Netscape", (match = /Netscape[0-9]?\/([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          }))), c.match("[k|K]onqueror/") && (this.browser.name = "Konqueror", (match = /[k|K]onqueror\/([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          }))), match = /(?:Chrome|CrMo|CriOS)\/([0-9.]*)/.exec(c))
          if (this.browser.stock = !1, this.browser.name = "Chrome", this.browser.version = new u({
              value: match[1]
            }), "Android" === this.os.name) switch (match[1].split(".", 3).join(".")) {
            case "16.0.912":
              this.browser.channel = "Beta";
              break;
            case "18.0.1025":
              this.browser.version.details = 1;
              break;
            default:
              this.browser.channel = "Nightly"
          } else switch (match[1].split(".", 3).join(".")) {
            case "0.2.149":
            case "0.3.154":
            case "0.4.154":
            case "1.0.154":
            case "2.0.172":
            case "3.0.195":
            case "4.0.249":
            case "4.1.249":
            case "5.0.375":
            case "6.0.472":
            case "7.0.517":
            case "8.0.552":
            case "9.0.597":
            case "10.0.648":
            case "11.0.696":
            case "12.0.742":
            case "13.0.782":
            case "14.0.835":
            case "15.0.874":
            case "16.0.912":
            case "17.0.963":
            case "18.0.1025":
            case "19.0.1084":
            case "20.0.1132":
            case "21.0.1180":
              0 === this.browser.version.minor ? this.browser.version.details = 1 : this.browser.version.details = 2;
              break;
            default:
              this.browser.channel = "Nightly"
          }
        if (c.match("chromeframe") && (this.browser.stock = !1, this.browser.name = "Chrome Frame", (match = /chromeframe\/([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          }))), c.match("Chromium") && (this.browser.stock = !1, this.browser.channel = "", this.browser.name = "Chromium", (match = /Chromium\/([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          }))), c.match("BrowserNG") && (this.browser.name = "Nokia Browser", (match = /BrowserNG\/([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1],
            details: 3,
            builds: !1
          }))), c.match("NokiaBrowser") && (this.browser.name = "Nokia Browser", (match = /NokiaBrowser\/([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1],
            details: 3
          }))), c.match("Maemo[ |_]Browser") && (this.browser.name = "MicroB", (match = /Maemo[ |_]Browser[ |_]([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1],
            details: 3
          }))), c.match("NetFront") && (this.browser.name = "NetFront", this.device.type = "mobile", (match = /NetFront\/([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          })), c.match("InettvBrowser") && (this.device.type = "television")), c.match("Silk") && c.match("Silk-Accelerated") && (this.browser.name = "Silk", (match = /Silk\/([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1],
            details: 2
          })), this.device.manufacturer = "Amazon", this.device.model = "Kindle Fire", this.device.type = "tablet", this.device.identified = !0, "Android" !== this.os.name && (this.os.name = "Android", this.os.version = null)), c.match("Dolfin") && (this.browser.name = "Dolfin", (match = /Dolfin\/([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          }))), c.match("Iris") && (this.browser.name = "Iris", this.device.type = "mobile", this.device.model = null, this.device.manufacturer = null, this.os.name = "Windows Mobile", this.os.version = null, (match = /Iris\/([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          })), (match = / WM([0-9]) /.exec(c)) ? this.os.version = new u({
            value: match[1] + ".0"
          }) : this.browser.mode = "desktop"), c.match("Jasmine") && (this.browser.name = "Jasmine", (match = /Jasmine\/([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          }))), c.match("Boxee") && (this.browser.name = "Boxee", this.device.type = "television", (match = /Boxee\/([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          }))), c.match("Espial") && (this.browser.name = "Espial", this.os.name = "", this.os.version = null, "television" !== this.device.type && (this.device.type = "television", this.device.model = null, this.device.manufacturer = null), (match = /Espial\/([0-9.]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1]
          }))), (match = /ANTGalio\/([0-9.]*)/.exec(c)) && (this.browser.name = "ANT Galio", this.browser.version = new u({
            value: match[1],
            details: 3
          }), this.device.type = "television"), (match = /NX\/([0-9.]*)/.exec(c)) && (this.browser.name = "NetFront NX", this.browser.version = new u({
            value: match[1],
            details: 2
          }), (match = /DTV/i.exec(c)) ? this.device.type = "television" : (match = /mobile/i.exec(c)) ? this.device.type = "mobile" : this.device.type = "desktop", this.os.name = null, this.os.version = null), c.match(/Obigo/i) && (this.browser.name = "Obigo", (match = /Obigo\/([0-9.]*)/i.exec(c)) && (this.browser.version = new u({
            value: match[1]
          })), (match = /Obigo\/([A-Z])([0-9.]*)/i.exec(c)) && (this.browser.name = "Obigo " + match[1], this.browser.version = new u({
            value: match[2]
          })), (match = /Obigo-([A-Z])([0-9.]*)\//i.exec(c)) && (this.browser.name = "Obigo " + match[1], this.browser.version = new u({
            value: match[2]
          }))), c.match("UCWEB") && (this.browser.stock = !1, this.browser.name = "UC Browser", (match = /UCWEB([0-9]*[.][0-9]*)/.exec(c)) && (this.browser.version = new u({
            value: match[1],
            details: 3
          })), "Linux" === this.os.name && (this.os.name = ""), this.device.type = "mobile", (match = /^IUC \(U;\s?iOS ([0-9\.]+);/.exec(c)) && (this.os.name = "iOS", this.os.version = new u({
            value: match[1]
          })), match = /^JUC \(Linux; U; ([0-9\.]+)[^;]*; [^;]+; ([^;]*[^\s])\s*; [0-9]+\*[0-9]+\)/.exec(c))) {
          var h = e(match[2]);
          this.os.name = "Android", this.os.version = new u({
            value: match[1]
          }), "undefined" != typeof d[h] && (this.device.manufacturer = d[h][0], this.device.model = d[h][1], "undefined" != typeof d[h][2] && (this.device.type = d[h][2]), this.device.identified = !0)
        }
        if (c.match(/\) UC /) && (this.browser.stock = !1, this.browser.name = "UC Browser"), (match = /UCBrowser\/([0-9.]*)/.exec(c)) && (this.browser.stock = !1, this.browser.name = "UC Browser", this.browser.version = new u({
            value: match[1],
            details: 2
          })), (match = /Ninesky(?:-android-mobile(?:-cn)?)?\/([0-9.]*)/.exec(c)) && (this.browser.name = "NineSky", this.browser.version = new u({
            value: match[1]
          }), "Android" !== this.os.name && (this.os.name = "Android", this.os.version = null, this.device.manufacturer = null, this.device.model = null)), (match = /Skyfire\/([0-9.]*)/.exec(c)) && (this.browser.name = "Skyfire", this.browser.version = new u({
            value: match[1]
          }), this.device.type = "mobile", this.os.name = "Android", this.os.version = null), (match = /DolphinHDCN\/([0-9.]*)/.exec(c)) && (this.browser.name = "Dolphin", this.browser.version = new u({
            value: match[1]
          }), this.device.type = "mobile", "Android" !== this.os.name && (this.os.name = "Android", this.os.version = null)), (match = /Dolphin\/INT/.exec(c)) && (this.browser.name = "Dolphin", this.device.type = "mobile"), match = /(M?QQBrowser)\/([0-9.]*)/.exec(c)) {
          this.browser.name = "QQ Browser";
          var g = match[2];
          g.match(/^[0-9][0-9]$/) && (g = g[0] + "." + g[1]), this.browser.version = new u({
            value: g,
            details: 2
          }), this.browser.channel = "", this.os.name || "QQBrowser" !== match[1] || (this.os.name = "Windows")
        }
        if (match = /(iBrowser)\/([0-9.]*)/.exec(c)) {
          this.browser.name = "iBrowser";
          var g = match[2];
          g.match(/[0-9][0-9]/) && (g = g[0] + "." + g[1]), this.browser.version = new u({
            value: g,
            details: 2
          }), this.browser.channel = ""
        }(match = /Puffin\/([0-9.]*)/.exec(c)) && (this.browser.name = "Puffin", this.browser.version = new u({
          value: match[1],
          details: 2
        }), this.device.type = "mobile", "Linux" === this.os.name && (this.os.name = null, this.os.version = null)), c.match("360EE") && (this.browser.stock = !1, this.browser.name = "360 Extreme Explorer", this.browser.version = null), (match = /Midori\/([0-9.]*)/.exec(c)) && (this.browser.name = "Midori", this.browser.version = new u({
          value: match[1]
        }), "Linux" !== this.os.name && (this.os.name = "Linux", this.os.version = null), this.device.manufacturer = null, this.device.model = null, this.device.type = "desktop");
        for (var v = [{
            name: "AdobeAIR",
            regexp: /AdobeAIR\/([0-9.]*)/
          }, {
            name: "Awesomium",
            regexp: /Awesomium\/([0-9.]*)/
          }, {
            name: "Canvace",
            regexp: /Canvace Standalone\/([0-9.]*)/
          }, {
            name: "Ekioh",
            regexp: /Ekioh\/([0-9.]*)/
          }, {
            name: "JavaFX",
            regexp: /JavaFX\/([0-9.]*)/
          }, {
            name: "GFXe",
            regexp: /GFXe\/([0-9.]*)/
          }, {
            name: "LuaKit",
            regexp: /luakit/
          }, {
            name: "Titanium",
            regexp: /Titanium\/([0-9.]*)/
          }, {
            name: "OpenWebKitSharp",
            regexp: /OpenWebKitSharp/
          }, {
            name: "Prism",
            regexp: /Prism\/([0-9.]*)/
          }, {
            name: "Qt",
            regexp: /Qt\/([0-9.]*)/
          }, {
            name: "QtEmbedded",
            regexp: /QtEmbedded/
          }, {
            name: "QtEmbedded",
            regexp: /QtEmbedded.*Qt\/([0-9.]*)/
          }, {
            name: "RhoSimulator",
            regexp: /RhoSimulator/
          }, {
            name: "UWebKit",
            regexp: /UWebKit\/([0-9.]*)/
          }, {
            name: "PhantomJS",
            regexp: /PhantomJS\/([0-9.]*)/
          }, {
            name: "Google Web Preview",
            regexp: /Google Web Preview/
          }, {
            name: "Google Earth",
            regexp: /Google Earth\/([0-9.]*)/
          }, {
            name: "EA Origin",
            regexp: /Origin\/([0-9.]*)/
          }, {
            name: "SecondLife",
            regexp: /SecondLife\/([0-9.]*)/
          }, {
            name: "Valve Steam",
            regexp: /Valve Steam/
          }, {
            name: "Songbird",
            regexp: /Songbird\/([0-9.]*)/
          }, {
            name: "Thunderbird",
            regexp: /Thunderbird\/([0-9.]*)/
          }, {
            name: "Abrowser",
            regexp: /Abrowser\/([0-9.]*)/
          }, {
            name: "arora",
            regexp: /[Aa]rora\/([0-9.]*)/
          }, {
            name: "Baidu Browser",
            regexp: /M?BaiduBrowser\/([0-9.]*)/i
          }, {
            name: "Camino",
            regexp: /Camino\/([0-9.]*)/
          }, {
            name: "Canure",
            regexp: /Canure\/([0-9.]*)/,
            details: 3
          }, {
            name: "CometBird",
            regexp: /CometBird\/([0-9.]*)/
          }, {
            name: "Comodo Dragon",
            regexp: /Comodo_Dragon\/([0-9.]*)/,
            details: 2
          }, {
            name: "Conkeror",
            regexp: /[Cc]onkeror\/([0-9.]*)/
          }, {
            name: "CoolNovo",
            regexp: /(?:CoolNovo|CoolNovoChromePlus)\/([0-9.]*)/,
            details: 3
          }, {
            name: "ChromePlus",
            regexp: /ChromePlus(?:\/([0-9.]*))?$/,
            details: 3
          }, {
            name: "Daedalus",
            regexp: /Daedalus ([0-9.]*)/,
            details: 2
          }, {
            name: "Demobrowser",
            regexp: /demobrowser\/([0-9.]*)/
          }, {
            name: "Dooble",
            regexp: /Dooble(?:\/([0-9.]*))?/
          }, {
            name: "DWB",
            regexp: /dwb(?:-hg)?(?:\/([0-9.]*))?/
          }, {
            name: "Epiphany",
            regexp: /Epiphany\/([0-9.]*)/
          }, {
            name: "FireWeb",
            regexp: /FireWeb\/([0-9.]*)/
          }, {
            name: "Flock",
            regexp: /Flock\/([0-9.]*)/,
            details: 3
          }, {
            name: "Galeon",
            regexp: /Galeon\/([0-9.]*)/,
            details: 3
          }, {
            name: "Helium",
            regexp: /HeliumMobileBrowser\/([0-9.]*)/
          }, {
            name: "iCab",
            regexp: /iCab\/([0-9.]*)/
          }, {
            name: "Iceape",
            regexp: /Iceape\/([0-9.]*)/
          }, {
            name: "IceCat",
            regexp: /IceCat ([0-9.]*)/
          }, {
            name: "Iceweasel",
            regexp: /Iceweasel\/([0-9.]*)/
          }, {
            name: "InternetSurfboard",
            regexp: /InternetSurfboard\/([0-9.]*)/
          }, {
            name: "Iron",
            regexp: /Iron\/([0-9.]*)/,
            details: 2
          }, {
            name: "Isis",
            regexp: /BrowserServer/
          }, {
            name: "Jumanji",
            regexp: /jumanji/
          }, {
            name: "Kazehakase",
            regexp: /Kazehakase\/([0-9.]*)/
          }, {
            name: "KChrome",
            regexp: /KChrome\/([0-9.]*)/,
            details: 3
          }, {
            name: "K-Meleon",
            regexp: /K-Meleon\/([0-9.]*)/
          }, {
            name: "Leechcraft",
            regexp: /Leechcraft(?:\/([0-9.]*))?/,
            details: 2
          }, {
            name: "Lightning",
            regexp: /Lightning\/([0-9.]*)/
          }, {
            name: "Lunascape",
            regexp: /Lunascape[\/| ]([0-9.]*)/,
            details: 3
          }, {
            name: "iLunascape",
            regexp: /iLunascape\/([0-9.]*)/,
            details: 3
          }, {
            name: "Maxthon",
            regexp: /Maxthon[\/ ]([0-9.]*)/,
            details: 3
          }, {
            name: "MiniBrowser",
            regexp: /MiniBr?owserM\/([0-9.]*)/
          }, {
            name: "MiniBrowser",
            regexp: /MiniBrowserMobile\/([0-9.]*)/
          }, {
            name: "MixShark",
            regexp: /MixShark\/([0-9.]*)/
          }, {
            name: "Motorola WebKit",
            regexp: /MotorolaWebKit\/([0-9.]*)/,
            details: 3
          }, {
            name: "NetFront LifeBrowser",
            regexp: /NetFrontLifeBrowser\/([0-9.]*)/
          }, {
            name: "Netscape Navigator",
            regexp: /Navigator\/([0-9.]*)/,
            details: 3
          }, {
            name: "Odyssey",
            regexp: /OWB\/([0-9.]*)/
          }, {
            name: "OmniWeb",
            regexp: /OmniWeb/
          }, {
            name: "Orca",
            regexp: /Orca\/([0-9.]*)/
          }, {
            name: "Origyn",
            regexp: /Origyn Web Browser/
          }, {
            name: "Palemoon",
            regexp: /Pale[mM]oon\/([0-9.]*)/
          }, {
            name: "Phantom",
            regexp: /Phantom\/V([0-9.]*)/
          }, {
            name: "Polaris",
            regexp: /Polaris\/v?([0-9.]*)/i,
            details: 2
          }, {
            name: "QtCreator",
            regexp: /QtCreator\/([0-9.]*)/
          }, {
            name: "QtQmlViewer",
            regexp: /QtQmlViewer/
          }, {
            name: "QtTestBrowser",
            regexp: /QtTestBrowser\/([0-9.]*)/
          }, {
            name: "QtWeb",
            regexp: /QtWeb Internet Browser\/([0-9.]*)/
          }, {
            name: "QupZilla",
            regexp: /QupZilla\/([0-9.]*)/
          }, {
            name: "Roccat",
            regexp: /Roccat\/([0-9]\.[0-9.]*)/
          }, {
            name: "Raven for Mac",
            regexp: /Raven for Mac\/([0-9.]*)/
          }, {
            name: "rekonq",
            regexp: /rekonq/
          }, {
            name: "RockMelt",
            regexp: /RockMelt\/([0-9.]*)/,
            details: 2
          }, {
            name: "Sleipnir",
            regexp: /Sleipnir\/([0-9.]*)/,
            details: 3
          }, {
            name: "SMBrowser",
            regexp: /SMBrowser/
          }, {
            name: "Sogou Explorer",
            regexp: /SE 2.X MetaSr/
          }, {
            name: "Snowshoe",
            regexp: /Snowshoe\/([0-9.]*)/,
            details: 2
          }, {
            name: "Sputnik",
            regexp: /Sputnik\/([0-9.]*)/i,
            details: 3
          }, {
            name: "Stainless",
            regexp: /Stainless\/([0-9.]*)/
          }, {
            name: "SunChrome",
            regexp: /SunChrome\/([0-9.]*)/
          }, {
            name: "Surf",
            regexp: /Surf\/([0-9.]*)/
          }, {
            name: "TaoBrowser",
            regexp: /TaoBrowser\/([0-9.]*)/,
            details: 2
          }, {
            name: "TaomeeBrowser",
            regexp: /TaomeeBrowser\/([0-9.]*)/,
            details: 2
          }, {
            name: "TazWeb",
            regexp: /TazWeb/
          }, {
            name: "Viera",
            regexp: /Viera\/([0-9.]*)/
          }, {
            name: "Villanova",
            regexp: /Villanova\/([0-9.]*)/,
            details: 3
          }, {
            name: "Wavelink Velocity",
            regexp: /Wavelink Velocity Browser\/([0-9.]*)/,
            details: 2
          }, {
            name: "WebPositive",
            regexp: /WebPositive/
          }, {
            name: "WebRender",
            regexp: /WebRender/
          }, {
            name: "Wyzo",
            regexp: /Wyzo\/([0-9.]*)/,
            details: 3
          }, {
            name: "Zetakey",
            regexp: /Zetakey Webkit\/([0-9.]*)/
          }, {
            name: "Zetakey",
            regexp: /Zetakey\/([0-9.]*)/
          }], T = 0; T < v.length; T++)(match = v[T].regexp.exec(c)) && (this.browser.name = v[T].name, this.browser.channel = "", this.browser.stock = !1, match[1] ? this.browser.version = new u({
          value: match[1],
          details: v[T].details || null
        }) : this.browser.version = null);
        if ((match = /WebKit\/([0-9.]*)/i.exec(c)) && (this.engine.name = "Webkit", this.engine.version = new u({
            value: match[1]
          })), (match = /Browser\/AppleWebKit([0-9.]*)/i.exec(c)) && (this.engine.name = "Webkit", this.engine.version = new u({
            value: match[1]
          })), (match = /KHTML\/([0-9.]*)/.exec(c)) && (this.engine.name = "KHTML", this.engine.version = new u({
            value: match[1]
          })), /Gecko/.exec(c) && !/like Gecko/i.exec(c) && (this.engine.name = "Gecko", (match = /; rv:([^\)]+)\)/.exec(c)) && (this.engine.version = new u({
            value: match[1]
          }))), (match = /Presto\/([0-9.]*)/.exec(c)) && (this.engine.name = "Presto", this.engine.version = new u({
            value: match[1]
          })), (match = /Trident\/([0-9.]*)/.exec(c)) && (this.engine.name = "Trident", this.engine.version = new u({
            value: match[1]
          }), "Internet Explorer" === this.browser.name && (6 === t(this.engine.version) && parseFloat(this.browser.version) < 10 && (this.browser.version = new u({
            value: "10.0"
          }), this.browser.mode = "compat"), 5 === t(this.engine.version) && parseFloat(this.browser.version) < 9 && (this.browser.version = new u({
            value: "9.0"
          }), this.browser.mode = "compat"), 4 === t(this.engine.version) && parseFloat(this.browser.version) < 8 && (this.browser.version = new u({
            value: "8.0"
          }), this.browser.mode = "compat")), "Windows Phone" === this.os.name && 5 === t(this.engine.version) && parseFloat(this.os.version) < 7.5 && (this.os.version = new u({
            value: "7.5"
          }))), "Android" === this.os.name && this.browser.stock && (this.browser.hidden = !0), "iOS" === this.os.name && "Opera Mini" === this.browser.name && (this.os.version = null), "Midori" === this.browser.name && "Webkit" !== this.engine.name && (this.engine.name = "Webkit", this.engine.version = null), "television" === this.device.type && "Opera" === this.browser.name) {
          switch (this.browser.name = "Opera Devices", !0) {
            case this.engine.version.is("2.10"):
              this.browser.version = new u({
                value: 3.2
              });
              break;
            case this.engine.version.is("2.9"):
              this.browser.version = new u({
                value: 3.1
              });
              break;
            case this.engine.version.is("2.8"):
              this.browser.version = new u({
                value: 3
              });
              break;
            case this.engine.version.is("2.7"):
              this.browser.version = new u({
                value: 2.9
              });
              break;
            case this.engine.version.is("2.6"):
              this.browser.version = new u({
                value: 2.8
              });
              break;
            case this.engine.version.is("2.4"):
              this.browser.version = new u({
                value: 10.3
              });
              break;
            case this.engine.version.is("2.3"):
              this.browser.version = new u({
                value: 10
              });
              break;
            case this.engine.version.is("2.2"):
              this.browser.version = new u({
                value: 9.7
              });
              break;
            case this.engine.version.is("2.1"):
              this.browser.version = new u({
                value: 9.6
              });
              break;
            default:
              this.browser.version = null
          }
          this.os.name = null, this.os.version = null
        }
        if (this.options.detectCamouflage) {
          if (match = /Mac OS X 10_6_3; ([^;]+); [a-z]{2}-(?:[a-z]{2})?\)/.exec(c)) {
            this.browser.name = "", this.browser.version = null, this.browser.mode = "desktop", this.os.name = "Android", this.os.version = null, this.engine.name = "Webkit", this.engine.version = null, this.device.model = match[1], this.device.type = "mobile";
            var h = e(this.device.model);
            "undefined" != typeof d[h] && (this.device.manufacturer = d[h][0], this.device.model = d[h][1], "undefined" != typeof d[h][2] && (this.device.type = d[h][2]), this.device.identified = !0), this.features.push("foundDevice")
          }
          if (match = /Linux Ventana; [a-z]{2}-[a-z]{2}; (.+) Build/.exec(c)) {
            this.browser.name = "", this.browser.version = null, this.browser.mode = "desktop", this.os.name = "Android", this.os.version = null, this.engine.name = "Webkit", this.engine.version = null, this.device.model = match[1], this.device.type = "mobile";
            var h = e(this.device.model);
            "undefined" != typeof d[h] && (this.device.manufacturer = d[h][0], this.device.model = d[h][1], "undefined" != typeof d[h][2] && (this.device.type = d[h][2]), this.device.identified = !0), this.features.push("foundDevice")
          }
          "Safari" === this.browser.name && ("iOS" !== this.os.name && /AppleWebKit\/([0-9]+.[0-9]+)/i.exec(c)[1] !== /Safari\/([0-9]+.[0-9]+)/i.exec(c)[1] && (this.features.push("safariMismatch"), this.camouflage = !0), "iOS" !== this.os.name || c.match(/^Mozilla/) || (this.features.push("noMozillaPrefix"), this.camouflage = !0), /Version\/[0-9\.]+/.exec(c) || (this.features.push("noVersion"), this.camouflage = !0)), "Chrome" === this.browser.name && (/(?:Chrome|CrMo|CriOS)\/([0-9]{1,2}\.[0-9]\.[0-9]{3,4}\.[0-9]+)/.exec(c) || (this.features.push("wrongVersion"), this.camouflage = !0)), this.options.useFeatures && (window.ActiveXObject && (this.features.push("trident"), "undefined" != typeof this.engine.name && "Trident" !== this.engine.name && (this.camouflage = "undefined" == typeof this.browser.name || "Maxthon" !== this.browser.name)), window.opera && (this.features.push("presto"), "undefined" != typeof this.engine.name && "Presto" !== this.engine.name && (this.camouflage = !0), "Internet Explorer" === this.browser.name && (this.camouflage = !0)), ("getBoxObjectFor" in document || "mozInnerScreenX" in window) && (this.features.push("gecko"), "undefined" != typeof this.engine.name && "Gecko" !== this.engine.name && (this.camouflage = !0), "Internet Explorer" === this.browser.name && (this.camouflage = !0)), ("WebKitCSSMatrix" in window || "WebKitPoint" in window || "webkitStorageInfo" in window || "webkitURL" in window) && (this.features.push("webkit"), "undefined" != typeof this.engine.name && "Webkit" !== this.engine.name && (this.camouflage = !0), "Internet Explorer" === this.browser.name && (this.camouflage = !0)), "Webkit" === this.engine.name && -1 === {}.toString.toString().indexOf("\n") && (this.features.push("v8"), null !== this.browser && "Safari" === this.browser.name && (this.camouflage = !0)), "iPad" === this.device.model && 0 !== screen.width && 0 !== screen.height && 768 !== screen.width && 1024 !== screen.height && 1024 !== screen.width && 768 !== screen.height && (this.features.push("sizeMismatch"), this.camouflage = !0), "iPhone" !== this.device.model && "iPod" !== this.device.model || 0 !== screen.width && 0 !== screen.height && 320 !== screen.width && 480 !== screen.height && 480 !== screen.width && 320 !== screen.height && (this.features.push("sizeMismatch"), this.camouflage = !0), "iOS" === this.os.name && this.os.version && (this.os.version.isOlder("4.0") && "sandbox" in document.createElement("iframe") && (this.features.push("foundSandbox"), this.camouflage = !0), this.os.version.isOlder("4.2") && "WebSocket" in window && (this.features.push("foundSockets"), this.camouflage = !0), this.os.version.isOlder("5.0") && window.Worker && (this.features.push("foundWorker"), this.camouflage = !0), this.os.version.isNewer("2.1") && !window.applicationCache && (this.features.push("noAppCache"), this.camouflage = !0)), "iOS" !== this.os.name && "Safari" === this.browser.name && this.browser.version && (this.browser.version.isOlder("4.0") && window.applicationCache && (this.features.push("foundAppCache"), this.camouflage = !0), this.browser.version.isOlder("4.1") && window.history && history.pushState && (this.features.push("foundHistory"), this.camouflage = !0), this.browser.version.isOlder("5.1") && document.documentElement.webkitRequestFullScreen && (this.features.push("foundFullscreen"), this.camouflage = !0), this.browser.version.isOlder("5.2") && "FileReader" in window && (this.features.push("foundFileReader"), this.camouflage = !0)))
        }
      }
    }, c
  }()
}, function (e, t) {
  e.exports = function (e) {
    return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
      enumerable: !0,
      get: function () {
        return e.l
      }
    }), Object.defineProperty(e, "id", {
      enumerable: !0,
      get: function () {
        return e.i
      }
    }), e.webpackPolyfill = 1), e
  }
}, function (e, t, n) {
  function a(e) {
    return n(r(e))
  }

  function r(e) {
    var t = i[e];
    if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
    return t
  }
  var i = {
    "./af": 73,
    "./af.js": 73,
    "./ar": 74,
    "./ar-dz": 75,
    "./ar-dz.js": 75,
    "./ar-kw": 76,
    "./ar-kw.js": 76,
    "./ar-ly": 77,
    "./ar-ly.js": 77,
    "./ar-ma": 78,
    "./ar-ma.js": 78,
    "./ar-sa": 79,
    "./ar-sa.js": 79,
    "./ar-tn": 80,
    "./ar-tn.js": 80,
    "./ar.js": 74,
    "./az": 81,
    "./az.js": 81,
    "./be": 82,
    "./be.js": 82,
    "./bg": 83,
    "./bg.js": 83,
    "./bm": 84,
    "./bm.js": 84,
    "./bn": 85,
    "./bn.js": 85,
    "./bo": 86,
    "./bo.js": 86,
    "./br": 87,
    "./br.js": 87,
    "./bs": 88,
    "./bs.js": 88,
    "./ca": 89,
    "./ca.js": 89,
    "./cs": 90,
    "./cs.js": 90,
    "./cv": 91,
    "./cv.js": 91,
    "./cy": 92,
    "./cy.js": 92,
    "./da": 93,
    "./da.js": 93,
    "./de": 94,
    "./de-at": 95,
    "./de-at.js": 95,
    "./de-ch": 96,
    "./de-ch.js": 96,
    "./de.js": 94,
    "./dv": 97,
    "./dv.js": 97,
    "./el": 98,
    "./el.js": 98,
    "./en-au": 99,
    "./en-au.js": 99,
    "./en-ca": 100,
    "./en-ca.js": 100,
    "./en-gb": 101,
    "./en-gb.js": 101,
    "./en-ie": 102,
    "./en-ie.js": 102,
    "./en-il": 103,
    "./en-il.js": 103,
    "./en-nz": 104,
    "./en-nz.js": 104,
    "./eo": 105,
    "./eo.js": 105,
    "./es": 106,
    "./es-do": 107,
    "./es-do.js": 107,
    "./es-us": 108,
    "./es-us.js": 108,
    "./es.js": 106,
    "./et": 109,
    "./et.js": 109,
    "./eu": 110,
    "./eu.js": 110,
    "./fa": 111,
    "./fa.js": 111,
    "./fi": 112,
    "./fi.js": 112,
    "./fo": 113,
    "./fo.js": 113,
    "./fr": 114,
    "./fr-ca": 115,
    "./fr-ca.js": 115,
    "./fr-ch": 116,
    "./fr-ch.js": 116,
    "./fr.js": 114,
    "./fy": 117,
    "./fy.js": 117,
    "./gd": 118,
    "./gd.js": 118,
    "./gl": 119,
    "./gl.js": 119,
    "./gom-latn": 120,
    "./gom-latn.js": 120,
    "./gu": 121,
    "./gu.js": 121,
    "./he": 122,
    "./he.js": 122,
    "./hi": 123,
    "./hi.js": 123,
    "./hr": 124,
    "./hr.js": 124,
    "./hu": 125,
    "./hu.js": 125,
    "./hy-am": 126,
    "./hy-am.js": 126,
    "./id": 127,
    "./id.js": 127,
    "./is": 128,
    "./is.js": 128,
    "./it": 129,
    "./it.js": 129,
    "./ja": 130,
    "./ja.js": 130,
    "./jv": 131,
    "./jv.js": 131,
    "./ka": 132,
    "./ka.js": 132,
    "./kk": 133,
    "./kk.js": 133,
    "./km": 134,
    "./km.js": 134,
    "./kn": 135,
    "./kn.js": 135,
    "./ko": 136,
    "./ko.js": 136,
    "./ky": 137,
    "./ky.js": 137,
    "./lb": 138,
    "./lb.js": 138,
    "./lo": 139,
    "./lo.js": 139,
    "./lt": 140,
    "./lt.js": 140,
    "./lv": 141,
    "./lv.js": 141,
    "./me": 142,
    "./me.js": 142,
    "./mi": 143,
    "./mi.js": 143,
    "./mk": 144,
    "./mk.js": 144,
    "./ml": 145,
    "./ml.js": 145,
    "./mn": 146,
    "./mn.js": 146,
    "./mr": 147,
    "./mr.js": 147,
    "./ms": 148,
    "./ms-my": 149,
    "./ms-my.js": 149,
    "./ms.js": 148,
    "./mt": 150,
    "./mt.js": 150,
    "./my": 151,
    "./my.js": 151,
    "./nb": 152,
    "./nb.js": 152,
    "./ne": 153,
    "./ne.js": 153,
    "./nl": 154,
    "./nl-be": 155,
    "./nl-be.js": 155,
    "./nl.js": 154,
    "./nn": 156,
    "./nn.js": 156,
    "./pa-in": 157,
    "./pa-in.js": 157,
    "./pl": 158,
    "./pl.js": 158,
    "./pt": 159,
    "./pt-br": 160,
    "./pt-br.js": 160,
    "./pt.js": 159,
    "./ro": 161,
    "./ro.js": 161,
    "./ru": 162,
    "./ru.js": 162,
    "./sd": 163,
    "./sd.js": 163,
    "./se": 164,
    "./se.js": 164,
    "./si": 165,
    "./si.js": 165,
    "./sk": 166,
    "./sk.js": 166,
    "./sl": 167,
    "./sl.js": 167,
    "./sq": 168,
    "./sq.js": 168,
    "./sr": 169,
    "./sr-cyrl": 170,
    "./sr-cyrl.js": 170,
    "./sr.js": 169,
    "./ss": 171,
    "./ss.js": 171,
    "./sv": 172,
    "./sv.js": 172,
    "./sw": 173,
    "./sw.js": 173,
    "./ta": 174,
    "./ta.js": 174,
    "./te": 175,
    "./te.js": 175,
    "./tet": 176,
    "./tet.js": 176,
    "./tg": 177,
    "./tg.js": 177,
    "./th": 178,
    "./th.js": 178,
    "./tl-ph": 179,
    "./tl-ph.js": 179,
    "./tlh": 180,
    "./tlh.js": 180,
    "./tr": 181,
    "./tr.js": 181,
    "./tzl": 182,
    "./tzl.js": 182,
    "./tzm": 183,
    "./tzm-latn": 184,
    "./tzm-latn.js": 184,
    "./tzm.js": 183,
    "./ug-cn": 185,
    "./ug-cn.js": 185,
    "./uk": 186,
    "./uk.js": 186,
    "./ur": 187,
    "./ur.js": 187,
    "./uz": 188,
    "./uz-latn": 189,
    "./uz-latn.js": 189,
    "./uz.js": 188,
    "./vi": 190,
    "./vi.js": 190,
    "./x-pseudo": 191,
    "./x-pseudo.js": 191,
    "./yo": 192,
    "./yo.js": 192,
    "./zh-cn": 193,
    "./zh-cn.js": 193,
    "./zh-hk": 194,
    "./zh-hk.js": 194,
    "./zh-tw": 195,
    "./zh-tw.js": 195
  };
  a.keys = function () {
    return Object.keys(i)
  }, a.resolve = r, e.exports = a, a.id = 267
}, function (e, t, n) {
  "use strict";
  e.exports = {
    beforerender: [],
    rendered: [],
    click: [],
    ctrlchange: [],
    valuechange: [],
    contentchange: [],
    openassistant: []
  }
}, , , , , , function (e, t) {
  e.exports = function (e) {
    var t = "undefined" != typeof window && window.location;
    if (!t) throw new Error("fixUrls requires window.location");
    if (!e || "string" != typeof e) return e;
    var n = t.protocol + "//" + t.host,
      a = n + t.pathname.replace(/\/[^\/]*$/, "/");
    return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
      var r = t.trim().replace(/^"(.*)"$/, function (e, t) {
        return t
      }).replace(/^'(.*)'$/, function (e, t) {
        return t
      });
      if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)) return e;
      var i;
      return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : a + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")"
    })
  }
}, function (e, t, n) {
  "use strict";
  n(32).isIE8
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(2),
    i = a(r),
    o = n(3),
    s = a(o),
    d = function (e) {
      return e.getRange()
    },
    l = function (e) {
      var t = d(e);
      return t ? t.cloneContents() || e.getIE8DocumentFragment() : null
    },
    u = function (e) {
      var t = l(e);
      return !!t && !!t.querySelector(".krcd-ctrl")
    },
    c = function (e) {
      var t = e.getStart();
      return i["default"].hasClass(t, "krcd-value")
    },
    m = function (e) {
      for (var t = 0, n = s["default"].unchangeValueKeyCode.length; t < n; t++)
        if (e === s["default"].unchangeValueKeyCode[t]) return !0;
      return !1
    };
  e.exports = {
    getRange: d,
    getFragment: l,
    haveCtrl: u,
    insideCtrl: c,
    isUnchangeValueKeyCode: m
  }
}, , , , , , , , , , , , , , , , , , function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(4),
    i = n(3),
    o = a(i),
    s = n(38),
    d = (a(s), n(55)),
    l = function (e) {
      e.ikrcd.fireEvent("beforerender");
      var t = [];
      o["default"].each(e[r.__private__].rootDom.querySelectorAll(".krcd-ctrl") || [], function (n) {
        var a = (0, d.initControl)(n, e);
        a && a.TYPE_NAME && (a.isLoadAsyncData(!1), t.push(a))
      }), e.ikrcd.fireEvent("rendered", t), e[r.__private__].options.isPrint || o["default"].each(t, function (e) {
        e.isLoadAsyncData() || e.refreshData()
      })
    };
  e.exports = l
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(2),
    i = a(r),
    o = n(3),
    s = a(o),
    d = n(4),
    l = n(198),
    u = a(l),
    c = n(524),
    m = a(c),
    h = n(38),
    f = a(h),
    _ = n(295),
    p = (a(_), function (e) {
      var t = f["default"].decryptStrDom(e, "krcd-revise");
      t.time = s["default"].moment().format("YYYY-MM-DD HH:mm:ss"), f["default"].encryptStrDom(e, "krcd-revise", t)
    }),
    y = function (e) {
      var t = i["default"].createElement(document, "span", {
          "class": "krcd-revise krcd-revise-show"
        }),
        n = i["default"].createElement(document, "span", {
          "class": "krcd-revise-" + e.type,
          contenteditable: "add" === e.type
        });
      return e.time = s["default"].moment().format("YYYY-MM-DD HH:mm:ss"), f["default"].encryptStrDom(t, "krcd-revise", e), t.appendChild(n), n.innerHTML = i["default"].specialStr, {
        root: t,
        value: n
      }
    };
  e.exports = function (e) {
    var t = this,
      n = s["default"].clone(t[d.__private__].options.user, {}),
      a = t[d.__private__].selection,
      r = a.getRange(),
      o = a.getStart(),
      l = i["default"].formatEvt(e),
      c = (l.target, l.evt),
      h = l.kc;
    if (h === u["default"].Del) return i["default"].preventDefault(c), void i["default"].stopPropagation(c);
    if (!(0, m["default"])(a, h)) return i["default"].preventDefault(c), void i["default"].stopPropagation(c);
    if (s["default"].isValueKeyCode(h)) {
      if (i["default"].findParent(o, function (e) {
          return "#text" !== e.nodeName && "text" === e.getAttribute("krcd-type")
        })) return;
      if (!r.collapsed) {
        n.type = "del";
        var f = y(n),
          _ = r.cloneContents();
        return _.querySelector(".krcd-ctrl") || _.querySelector(".krcd-revise") ? (i["default"].preventDefault(c), void i["default"].stopPropagation(c)) : (r.deleteContents(), f.value.appendChild(_), r.insertNode(f.root), h === u["default"].Del ? r.setStartAfter(f.root).setCursor() : r.setStartBefore(f.root).setCursor(), i["default"].preventDefault(c), void i["default"].stopPropagation(c))
      }
      if (h === u["default"].Backspace) {
        if ("#text" === r.startContainer.nodeName) {
          n.type = "del";
          var M = y(n);
          r.insertNode(M.root), r.setStartBefore(M.root).setCursor()
        }
        if ("#text" !== r.startContainer.nodeName) {
          if (!(r.startOffset > 0)) return;
          var g = r.startContainer.childNodes[r.startOffset - 1];
          if ("#text" !== g.nodeName) return;
          r.setStart(g, g.length - 1).setEnd(g, g.length);
          try {
            var v = r.cloneContents();
            if (!(g.nextSibling && "#text" !== g.nextSibling.nodeName && i["default"].hasClass(g.nextSibling, "krcd-revise") && g.nextSibling.querySelector(".krcd-revise-del"))) {
              n.type = "del";
              var T = y(n);
              r.insertNode(T.root), r.setStartBefore(T.root).setCursor()
            }
            var b = g.nextSibling.querySelector(".krcd-revise-del");
            b.insertBefore(v, b.firstChild), p(g.nextSibling), r.extractContents()
          } catch (L) {}
        }
        return i["default"].preventDefault(c), void i["default"].stopPropagation(c)
      }
      if (o && !i["default"].hasClass(o, "krcd-revise-add")) {
        n.type = "add";
        var S = y(n);
        r.insertNode(S.root), r.setStartAtLast(S.value).setCursor()
      } else o && i["default"].hasClass(o, "krcd-revise-add") && p(o.parentElement)
    }
  }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(7),
    i = a(r),
    o = n(16),
    s = a(o),
    d = n(20),
    l = a(d),
    u = n(241),
    c = a(u),
    m = n(490),
    h = a(m),
    f = n(535),
    _ = a(f),
    p = n(3),
    y = a(p),
    M = n(536),
    g = a(M);
  n(275), n(538);
  var v = function (e) {
    function t(n) {
      (0, i["default"])(this, t), y["default"].extend(n, _["default"], !0);
      var a = new h["default"](n),
        r = (0, s["default"])(this, e.call(this, a));
      return (0, g["default"])(r), r
    }
    return (0, l["default"])(t, e), t
  }(c["default"]);
  window.KRCD = v
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(7),
    i = a(r),
    o = n(16),
    s = a(o),
    d = n(20),
    l = a(d),
    u = n(205),
    c = a(u),
    m = n(268),
    h = a(m),
    f = n(3),
    _ = a(f),
    p = n(4),
    y = n(2),
    M = a(y),
    g = n(55),
    v = n(511),
    T = a(v),
    b = n(512),
    S = a(b),
    L = n(38),
    w = a(L),
    D = n(515),
    k = a(D),
    x = n(517),
    Y = a(x),
    C = n(294),
    H = a(C),
    A = n(534),
    E = a(A),
    O = function (e) {
      var t = this.getPageHeaderElement(),
        n = this.getPageFooterElement();
      t.setAttribute("contenteditable", "DESIGN" === e), n.setAttribute("contenteditable", "DESIGN" === e), t.style.display = n.style.display = "DESIGN" === e || "READONLY" === e ? "block" : ""
    },
    G = function (e) {
      function t(n) {
        (0, i["default"])(this, t);
        var a = (0, s["default"])(this, e.call(this, _["default"].clone(h["default"], {})));
        if (a.name = "editor", !n.el) return console.error("el对象为空！"), (0, s["default"])(a);
        var r = null;
        _["default"].isString(n.el) ? r = document.querySelector(n.el) : M["default"].isElement(n.el) && (r = n.el), r = M["default"].formatTmp(r), n._isinit = !1;
        var o = new k["default"](document);
        console.log(r)
        a[p.__private__] = {
          rootDom: r,
          contentValue: r.querySelector(".krcd-tmp-content-value"),
          _backCtrl: null,
          selection: o,
          options: n,
          controls: [],
          _tempcontrols: []
        }, a.message = (0, S["default"])();
        var d = a;
        return n.ikrcdsign ? setTimeout(function () {
          (0, Y["default"])(d)
        }, 0) : (0, Y["default"])(d), O.call(a, n.mode), a.revise(n.revise), ["DESIGN", "EDITOR", "STRICT", "READONLY"].forEach(function (e) {
          d["is" + e + "Mode"] = function () {
            return d[p.__private__].options.mode === e
          }
        }), a
      }
      return (0, l["default"])(t, e), t.prototype.addListener = function (t, n) {
        e.prototype.addListener.call(this.ikrcd, t, n, !1)
      }, t.prototype.insertHTML = function (e) {
        alert("暂未实现！")
      }, t.prototype.selectionUnrevise = function () {
        var e = this[p.__private__].selection,
          t = e.getRange(),
          n = t.cloneContents();
        if (n) {
          var a = n.querySelectorAll(".krcd-revise"),
            r = this[p.__private__].options.user,
            i = !!r;
          _["default"].each(a, function (e) {
            if (i) {
              var t = w["default"].decryptStrDom(e, "krcd-model");
              if (t && r.name !== undefined && r.name === t.name)
                if ("del" === t.type) {
                  var a = e.parentElement;
                  a || (a = n), a.replaceChild(document.createTextNode(e.querySelector(".krcd-revise-del").innerHTML), e)
                } else "add" === t.type && e.remove();
              else i = !1
            }
          }), i && (t.deleteContents(), t.insertNode(n).collapse().setCursor())
        }
      }, t.prototype.seniorPrint = function () {
        console.error("请在设计器中使用该方法！")
      }, t.prototype.revise = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (!0 === e) {
          _["default"].each(this[p.__private__].rootDom.querySelectorAll(".krcd-ctrl"), function (e) {
            var t = e.querySelector(".krcd-value");
            e && t && "section" !== e.getAttribute("krcd-type") && e.setAttribute("krcd-revise-cache", w["default"].encryptStr(t.outerHTML))
          }), this[p.__private__].options.revise = e;
          var t = this[p.__private__].rootDom.querySelectorAll(".krcd-revise");
          _["default"].each(t, function (e) {
            M["default"].addClass(e, "krcd-revise-show");
            var t = e.querySelector(".krcd-revise-del");
            t && t.setAttribute("contenteditable", !1)
          }), _["default"].each(this[p.__private__].rootDom.querySelectorAll(".krcd-ctrl[krcd-revise]"), function (e) {
            var t = w["default"].decryptStrDom(e, "krcd-revise"),
              n = e.querySelector(".krcd-value");
            _["default"].each(t, function (t) {
              var a = M["default"].createElement(document, "span", {
                "class": "krcd-revise krcd-revise-show",
                contenteditable: !1
              });
              w["default"].encryptStrDom(a, "krcd-revise", t), a.innerHTML = t.value;
              var r = a.firstElementChild;
              r.setAttribute("contenteditable", !1), M["default"].removeClasses(r, "krcd-value"), M["default"].addClass(r, "krcd-value-revise"), M["default"].addClass(r, "krcd-revise-del"), e.insertBefore(a, n)
            })
          })
        } else if (!1 === e) {
          this[p.__private__].options.revise = e;
          var n = this[p.__private__].rootDom.querySelectorAll(".krcd-revise");
          _["default"].each(n, function (e) {
            M["default"].removeClasses(e, "krcd-revise-show")
          }), _["default"].each(this[p.__private__].rootDom.querySelectorAll(".krcd-ctrl[krcd-revise]"), function (e) {
            _["default"].each(e.querySelectorAll(".krcd-revise"), function (e) {
              M["default"].remove(e, !1, !0)
            })
          })
        }
        return this[p.__private__].options.revise
      }, t.prototype.setPageHeader = function (e) {
        if ("DESIGN" === this[p.__private__].options.mode) {
          var t = this[p.__private__].rootDom.querySelector(".krcd-tmp-header-value");
          t && e && (M["default"].isElement(e) ? (t.innerHTML = "", t.appendChild(e)) : _["default"].isString(e) ? t.innerHTML = e : ("content" in e && (t.innerHTML = e.content), "contenteditable" in e && e.contenteditable ? t.setAttribute("contenteditable", e.contenteditable) : t.removeAttribute("contenteditable")))
        }
      }, t.prototype.getPageHeader = function () {
        return this[p.__private__].rootDom.querySelector(".krcd-tmp-header-value").innerHTML
      }, t.prototype.setPageFooter = function (e) {
        if ("DESIGN" === this[p.__private__].options.mode) {
          var t = this[p.__private__].rootDom.querySelector(".krcd-tmp-footer-value");
          t && e && (M["default"].isElement(e) ? (t.innerHTML = "", t.appendChild(e)) : _["default"].isString(e) ? t.innerHTML = e : ("content" in e && (t.innerHTML = e.content), "contenteditable" in e && e.contenteditable ? t.setAttribute("contenteditable", e.contenteditable) : t.removeAttribute("contenteditable")))
        }
      }, t.prototype.getPageFooter = function () {
        return this[p.__private__].rootDom.querySelector(".krcd-tmp-footer-value").innerHTML
      }, t.prototype.html = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (!e && "" !== e) {
          var t = this[p.__private__].rootDom.innerHTML,
            n = this,
            a = M["default"].createElement(document, "div", {});
          a.innerHTML = t;
          var r = a.querySelectorAll(".krcd-warning");
          _["default"].each(r, function (e) {
            M["default"].removeClasses(e, "krcd-warning")
          });
          var i = a.querySelector(".krcd-tmp-header-value");
          i && (i.style.display = "");
          var o = a.querySelector(".krcd-tmp-footer-value");
          o && (o.style.display = "");
          var s = a.querySelectorAll(".krcd-auxiliary-root");
          _["default"].each(s, function (e) {
            M["default"].remove(e, !1, !0)
          });
          var d = a.querySelectorAll(".flatpickr-calendar");
          _["default"].each(d, function (e) {
            M["default"].remove(e, !1, !0)
          }), _["default"].each(a.querySelectorAll(".dhtmlx_message_area"), function (e) {
            M["default"].remove(e, !1, !0)
          });
          var l = a.querySelectorAll(".dhx_modal_cover");
          _["default"].each(l, function (e) {
            M["default"].remove(e, !1, !0)
          });
          var u = a.querySelectorAll(".dhtmlx_modal_box");
          return _["default"].each(u, function (e) {
            M["default"].remove(e, !1, !0)
          }), _["default"].each(a.querySelectorAll(".krcd-assistant-popup"), function (e) {
            M["default"].remove(e, !1, !0)
          }), _["default"].each(a.querySelectorAll("[krcd-type=section]"), function (e) {
            (0, g.initControl)(e, n).reset()
          }), _["default"].each(a.querySelectorAll(".krcd-revise-show"), function (e) {
            M["default"].removeClasses(e, "krcd-revise-show")
          }), _["default"].each(a.querySelectorAll(".krcd-value-revise"), function (e) {
            M["default"].remove(e.parentElement, !1, !0)
          }), _["default"].each(a.querySelectorAll("[mobile-contenteditable]"), function (e) {
            e.setAttribute("contenteditable", e.getAttribute("mobile-contenteditable")), e.removeAttribute("mobile-contenteditable")
          }), a.innerHTML.split(M["default"].specialStr).join("")
        }(e = M["default"].formatTmp(e)) && (e.endsWith(M["default"].specialStr) || (e += M["default"].specialStr), this[p.__private__].rootDom.innerHTML = e, this.mode(this[p.__private__].options.mode), this[p.__private__].options._isinit = !1, this.message = (0, S["default"])(), (0, H["default"])(this), this.ikrcd.fireEvent("contentchange"), this._backCtrl = null)
      }, t.prototype.assistant = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (null === e) return this[p.__private__].options.openassistant;
        this[p.__private__].options.openassistant !== e && (this[p.__private__].options.openassistant = e)
      }, t.prototype.mode = function () {
        console.log("222")
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (!e) return this[p.__private__].options.mode;
        O.call(this, e);
        console.log(T["default"]["change" + e])
        var t = T["default"]["change" + e];
        t && (this[p.__private__].options.mode = e, t(this))
      }, t.prototype.getControlByEl = function (e) {
        if (e) return (0, g.initControl)(e, this)
      }, t.prototype.appendContent = function (e) {
        if (e && 0 !== e.length) {
          var t = document.createElement("div");
          t.innerHTML = e;
          var n = t.querySelector(".krcd-tmp-content-value");
          n || (n = t);
          var a = this.getPageContentElement();
          a.innerHTML = a.innerHTML + n.innerHTML
        }
      }, t.prototype.getPageHeaderElement = function () {
        return this[p.__private__].rootDom.querySelector(".krcd-tmp-header-value")
      }, t.prototype.getPageContentElement = function () {
        return this[p.__private__].rootDom.querySelector(".krcd-tmp-content-value")
      }, t.prototype.getPageFooterElement = function () {
        return this[p.__private__].rootDom.querySelector(".krcd-tmp-footer-value")
      }, t.prototype.getControlByType = function (e) {
        if (!e) return null;
        var t = this[p.__private__].rootDom.querySelectorAll('[krcd-type="' + e + '"]'),
          n = [],
          a = this;
        return _["default"].each(t, function (e) {
          n.push((0, g.initControl)(e, a))
        }), n
      }, t.prototype.getControlById = function (e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null,
          n = void 0;
        n = e ? t ? t.querySelectorAll("#" + e) : this[p.__private__].rootDom.querySelectorAll("#" + e) : t ? t.querySelectorAll(".krcd-ctrl") : this[p.__private__].rootDom.querySelectorAll(".krcd-ctrl");
        var a = this;
        if (n.length > 1) {
          var r = [];
          return _["default"].each(n, function (e) {
            r.push((0, g.initControl)(e, a))
          }), r
        }
        return 1 === n.length ? (0, g.initControl)(n[0], a) : null
      }, t.prototype.createCtrl = function (e, t) {
        return e && t ? (0, g.initControl)(e, this, t) : null
      }, t.prototype.importXML = function (e) {
        var t = new E["default"],
          n = t.xml2js(e).xml || {};
        this.html(decodeURIComponent(n.html))
      }, t.prototype.getCursorControl = function () {
        return this._backCtrl
      }, t.prototype.exportXML = function () {
        var e = {};
        e.controls = [], _["default"].each(this.getControlById(), function (t) {
          var thisParent2 = t.getCtrlElement().parentNode.parentNode,
              divText='',
              sectionHTML=[],//控件的描述
              ctrls,//控件节点
            thisParent3 = t.getCtrlElement().parentNode.parentNode.parentNode;
          if(t.TYPE_NAME=="section"){
            var div=document.createElement("div");
            div.innerHTML=t.getValue();
            ///////////////////////获取所有控件的描述
            ctrls=div.querySelectorAll(".krcd-ctrl");
            var ctrlsLen=ctrls.length;
              for(var i=0;i<ctrlsLen;i++){
                sectionHTML.push(ctrls[i].getAttribute("title"))
              }
              sectionHTML=sectionHTML.join(',')
            ////////////////////////
            var inps=div.getElementsByTagName("input"),
                inpLen=inps.length;
            console.log(inps);
            if(inpLen!=0){
              for(var i=0;i<inpLen;i++){
                if(inps[i].getAttribute("checked")!="checked"){
                  inps[i].classList.add("removeInp");
                }
              }
              var removes=div.querySelectorAll(".removeInp,.krcd-revise-del");
              for(var i=0;i<removes.length;i++){
                removes[i].parentNode.remove();
              }
              divText=div.innerText;
            }else{
              divText=div.innerText;
            }
          }
          e.controls.push({
            id: t.getCtrlElement().getAttribute("id"),
            type: t.TYPE_NAME,
            parentID: (thisParent2.getAttribute("krcd-type") == 'section' || thisParent3.getAttribute("krcd-type") == 'section') ? (thisParent2.getAttribute("id") || thisParent3.getAttribute("id")) : '',
            value: t.TYPE_NAME=="section"?t.getCtrlElement().outerHTML:t.getValue(),
            text:divText,
            ctrlsDesc:t.TYPE_NAME=="section"?sectionHTML:''
          });
          // if (thisParent2.getAttribute("krcd-type") == 'section' || thisParent3.getAttribute("krcd-type") == 'section') {
          //   ctrls.push({
          //     id: t.getCtrlElement().getAttribute("id"),
          //     type: t.TYPE_NAME,
          //     parentID: (thisParent2.getAttribute("id") || thisParent3.getAttribute("id")),
          //     value: t.getValue()
          //   })
          // }
        });
        e.html = encodeURIComponent(this.html());
        sessionStorage.control_arr = JSON.stringify(e);
        return '<?xml version="1.0" encoding="UTF-8"?>' + (new E["default"]).js2xml({
          xml: e
        })
      }, t.prototype.getJSON = function () {
        var e = {};
        e.controls = [];
        var demos = document.querySelectorAll('.krcd-ctrl');
        for (var i = 0; i < demos.length; i++) {
          e.controls.push({
            id: demos[i].getAttribute("id"),
            type: demos[i].getAttribute("krcd-type"),
            value: demos[i].innerHTML
          })
        }
        console.log(e)
      }, t.prototype.downloadXML = function () {
        var e = this.exportXML(),
          t = document.createElement("a");
        t.setAttribute("download", (new Date).toJSON() + ".xml"), t.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(e)), t.click()
      }, t
    }(c["default"]);
  e.exports = G
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(7),
    i = a(r),
    o = n(16),
    s = a(o),
    d = n(20),
    l = a(d),
    u = n(56),
    c = a(u),
    m = n(4),
    h = (n(32), n(3)),
    f = (a(h), n(2)),
    _ = a(f),
    p = "text",
    y = [13, 108],
    M = function (e) {
      var t = this.getOpt();
      if (this.isRequired() && "" === e) return !1;
      if (t.verify) {
        return !!new RegExp(t.verify).test(e) || (t.strictverify && (e = t.value || t.desc), !1)
      }
      return !0
    },
    g = function (e) {
      function t(n, a, r) {
        (0, i["default"])(this, t);
        var o = (0, s["default"])(this, e.call(this, n, r, a));
        o.TYPE_NAME = p;
        var d = e.prototype.getOpt.call(o),
          l = e.prototype.getCtrlElement.call(o),
          u = e.prototype.getValueElement.call(o);
        return l && u && (l.contentEditable = !1, u.contentEditable = !e.prototype.isReadonly.call(o), d && d.desc && u.setAttribute("title", d.desc)), _["default"].removeClasses(u, "krcd-warning"), o
      }
      return (0, l["default"])(t, e), t.prototype.render = function () {}, t.prototype.setValue = function (t) {
        e.prototype.getValueElement.call(this).innerHTML = t
      }, t.prototype.getValue = function () {
        var t = _["default"].innerHTML(e.prototype.getValueElement.call(this));
        return t === e.prototype.getDesc.call(this) ? "" : t
      }, t.prototype.focus = function () {
        if (!e.prototype.isReadonly.call(this)) {
          var t = e.prototype.getOpt.call(this),
            n = e.prototype.getValueElement.call(this),
            a = this[m.ctrl_krcd][m.__private__].selection,
            r = a.getRange();
          t.desc === this.getValue() && r.selectNodeContents(n).select()
        }
      }, t.prototype.click = function () {}, t.prototype.keydown = function (t) {
        var n = _["default"].formatEvt(t),
          a = n.evt,
          r = n.kc;
        if (!e.prototype.verifyInputKey.call(this, a, y)) return _["default"].preventDefault(a), void _["default"].stopPropagation(a);
        e.prototype.getValueElement.call(this).setAttribute("_backups", this.getValue()), 9 === r && (_["default"].preventDefault(a), _["default"].stopPropagation(a), a.shiftKey ? e.prototype.triggerPreviousCtrl.call(this) : e.prototype.triggerNextCtrl.call(this))
      }, t.prototype.keyup = function (t) {
        e.prototype._reviseChangeValue.call(this, t);
        var n = e.prototype.getValueElement.call(this),
          a = this.getValue(),
          r = this[m.ctrl_krcd][m.__private__].selection;
        if (M.call(this, a));
        else {
          var i = n.getAttribute("_backups");
          "" === a ? i = "" : M.call(this, i) || (i = "");
          var o = i || _["default"].specialStr;
          n.innerHTML !== o && (n.innerHTML = o, e.prototype.setCursorAtLastNode.call(this, r))
        }
      }, t.prototype.blur = function () {
        if (!e.prototype.isReadonly.call(this)) {
          var t = e.prototype.getValueElement.call(this),
            n = this.getOpt();
          if (t) {
            var a = _["default"].innerHTML(t);
            "" === a ? (t.innerHTML = e.prototype.getOpt.call(this).desc, t.setAttribute("_backups", _["default"].specialStr), _["default"].addClass(t, "krcd-warning")) : M.call(this, a) ? _["default"].hasClass(t, "krcd-warning") && _["default"].removeClasses(t, "krcd-warning") : (n.strictverify && (t.innerHTML = this.getOpt().desc, t.setAttribute("_backups", _["default"].specialStr)), _["default"].addClass(t, "krcd-warning"))
          }
        }
      }, t
    }(c["default"]);
  e.exports = {
    type: p,
    ctrl: g
  }
}, function (e, t, n) {
  "use strict";
  e.exports = {
    click: [],
    dblclick: [],
    mousedown: [],
    mouseup: [],
    mouseover: [],
    mousemove: [],
    mouseout: [],
    keypress: [],
    keydown: [],
    keyup: [],
    blur: [],
    valuechange: [],
    focus: [],
    beforesend: [],
    successdata: [],
    errordata: [],
    completedata: []
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(7),
    i = a(r),
    o = n(16),
    s = a(o),
    d = n(20),
    l = a(d),
    u = n(56),
    c = a(u),
    m = (n(4), n(32), n(3)),
    h = a(m),
    f = n(2),
    _ = a(f),
    p = n(494),
    y = a(p),
    M = "select",
    g = function (e) {
      function t(n, a, r) {
        (0, i["default"])(this, t);
        var o = (0, s["default"])(this, e.call(this, n, r, a));
        o.TYPE_NAME = M;
        var d = e.prototype.getOpt.call(o),
          l = e.prototype.getCtrlElement.call(o),
          u = e.prototype.getValueElement.call(o);
        return l && u && (l.contentEditable = !1, u.contentEditable = !e.prototype.isReadonly.call(o), d && d.desc && u.setAttribute("title", d.desc)), _["default"].removeClasses(u, "krcd-warning"), _["default"].addClass(u, "krcd-select"), o
      }
      return (0, l["default"])(t, e), t.prototype.render = function () {
        var t = e.prototype.getValueElement.call(this),
          n = this.getValue(),
          a = e.prototype.getDesc.call(this);
        if (this.isMulti())
          if (h["default"].isArray(n) && n.length > 0) {
            var r = [];
            h["default"].each(n, function (e) {
              r.push('<span class="krcd-val-item" krcd-value="' + e.value + '">' + e.label + "</span>")
            }), t.innerHTML = r.join("")
          } else t.innerHTML = a;
        else t.innerHTML = n && n.length > 0 ? n[0].label : a
      }, t.prototype.setValue = function (t) {
        e.prototype._reviseChangeValue.call(this);
        var n = null === t || t === undefined ? "" : h["default"].json2str(t);
        e.prototype.getCtrlElement.call(this).setAttribute("krcd-value", n), this.render()
      }, t.prototype.getValue = function () {
        var t = h["default"].str2json(e.prototype.getCtrlElement.call(this).getAttribute("krcd-value"));
        return t || []
      }, t.prototype.isMulti = function () {
        var t = e.prototype.getOpt.call(this);
        return !!t & (1 === t.multi || "1" === t.multi)
      }, t.prototype.getInitData = function () {
        var t = e.prototype.getBindingData.call(this) || [],
          n = this.getValue();
        if (e.prototype.getValueElement.call(this)) return n && h["default"].isArray(n) && n.length > 0 && h["default"].each(n, function (e) {
          for (var n = 0, a = t.length; n < a; n++)
            if (t[n].value === e.value) {
              t[n].selected = !0;
              break
            }
        }), t
      }, t.prototype.focus = function () {
        if (!e.prototype.isReadonly.call(this)) {
          var t = new y["default"](this);
          e.prototype.setAuxi.call(this, t), t.active(this.getInitData())
        }
      }, t.prototype.click = function () {
        if (!e.prototype.isReadonly.call(this)) {
          var t = e.prototype.getAuxi.call(this);
          t.isShow() ? (t.save(), t.hide()) : t.show()
        }
      }, t.prototype.keydown = function (t) {
        var n = _["default"].formatEvt(t),
          a = n.evt,
          r = n.kc;
        if (_["default"].preventDefault(a), _["default"].stopPropagation(a), !this.isReadonly())
          if (9 === r) a.shiftKey ? e.prototype.triggerPreviousCtrl.call(this) : e.prototype.triggerNextCtrl.call(this);
          else if (38 === r) {
          var i = e.prototype.getAuxi.call(this);
          i && i.up && i.up()
        } else if (40 === r) {
          var o = e.prototype.getAuxi.call(this);
          o && o.down && o.down()
        } else if (13 === r || 108 === r) {
          var s = e.prototype.getAuxi.call(this);
          s && s.click && s.click(), s.isShow() ? this.isMulti() || (s.hide(), s.save()) : s.show()
        } else if (27 === r) {
          var d = e.prototype.getAuxi.call(this);
          d.isShow() && (d.hide(), d.save())
        }
      }, t.prototype.keyup = function (e) {
        console.log(this), console.log("键盘松开")
      }, t.prototype.blur = function () {
        var t = e.prototype.getAuxi.call(this);
        t && t.destroy()
      }, t
    }(c["default"]);
  e.exports = {
    type: M,
    ctrl: g
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(7),
    i = a(r),
    o = n(16),
    s = a(o),
    d = n(20),
    l = a(d),
    u = n(495),
    c = a(u),
    m = n(2),
    h = a(m),
    f = n(3),
    _ = a(f),
    p = function (e, t) {
      var n = h["default"].createElement(document, "li", {
        "class": "krcd-auxiliary-select-li" + (e.selected ? " selected" : ""),
        style: "line-height:30px",
        val: _["default"].json2str(e)
      });
      return n.innerHTML = e.label, n
    },
    y = function (e, t) {
      e && (t ? h["default"].hasClass(e, "selected") ? h["default"].removeClasses(e, "selected") : h["default"].addClass(e, "selected") : h["default"].hasClass(e, "selected") ? h["default"].removeClasses(e, "selected") : (_["default"].each(e.parentElement.querySelectorAll(".selected"), function (e) {
        h["default"].removeClasses(e, "selected")
      }), h["default"].addClass(e, "selected")))
    },
    M = function (e) {
      function t(n) {
        return (0, i["default"])(this, t), (0, s["default"])(this, e.call(this, n))
      }
      return (0, l["default"])(t, e), t.prototype.initData = function (e, t) {
        if (e || (e = this.__private__.ctrl.getInitData()), t || (t = this.__private__.rootDom.querySelector(".krcd-auxiliary-select-ul")), t.innerHTML = "", e && e.length > 0) {
          this.__private__.ctrl.isMulti();
          _["default"].each(e, function (e, n) {
            t.appendChild(p(e))
          })
        } else {
          var n = h["default"].createElement(document, "center", {});
          h["default"].addClass(n, "none"), n.innerHTML = "暂无数据", t.appendChild(n)
        }
      }, t.prototype.active = function (t) {
        var n = h["default"].createElement(document, "ul", {
            "class": "krcd-auxiliary-select-ul"
          }),
          a = this.__private__.ctrl.isMulti();
        this.initData(t, n);
        var r = this;
        _["default"].registerEvent(n, "click", function (e) {
          var t = h["default"].formatEvt(e),
            n = t.target,
            r = h["default"].findParent(n, function (e) {
              return h["default"].hasClass(e, "krcd-auxiliary-select-li")
            }, !0);
          y(r, a), a && h["default"].stopPropagation(e), h["default"].preventDefault(e)
        }), _["default"].registerEvent(n, "mouseover", function (e) {
          var t = h["default"].formatEvt(e),
            n = t.target,
            a = h["default"].findParent(n, function (e) {
              return h["default"].hasClass(e, "krcd-auxiliary-select-li")
            }, !0),
            i = r.getHoverElement();
          i && h["default"].removeClasses(i, "hover"), h["default"].addClass(a, "hover")
        }), e.prototype.setAuxiliaryDom.call(this, n)
      }, t.prototype.getHoverElement = function () {
        return this.__private__.auxiliaryDom && this.__private__.auxiliaryDom.querySelector(".hover") ? this.__private__.auxiliaryDom.querySelector(".hover") : null
      }, t.prototype.getAuxiItemElements = function () {
        return this.__private__.auxiliaryDom ? this.__private__.auxiliaryDom.querySelectorAll(".krcd-auxiliary-select-li") : []
      }, t.prototype.up = function () {
        var e = this.getAuxiItemElements(),
          t = this.getHoverElement();
        if (t || (t = e.length > 0 ? e[0] : null), t) {
          var n = void 0;
          n = t === e[0] ? e[e.length - 1] : t.previousElementSibling, t && h["default"].removeClasses(t, "hover"), n && h["default"].addClass(n, "hover")
        }
      }, t.prototype.down = function () {
        var e = this.getAuxiItemElements(),
          t = this.getHoverElement();
        if (t || (t = e.length > 0 ? e[e.length - 1] : null), t) {
          var n = void 0;
          n = t === e[e.length - 1] ? e[0] : t.nextElementSibling, t && h["default"].removeClasses(t, "hover"), n && h["default"].addClass(n, "hover")
        }
      }, t.prototype.click = function () {
        var e = this.getHoverElement();
        if (e) {
          var t = this.__private__.ctrl.isMulti();
          y(e, t)
        }
      }, t.prototype.save = function () {
        var e = this.__private__.auxiliaryDom.querySelectorAll(".selected"),
          t = [];
        e && e.length > 0 && _["default"].each(e, function (e) {
          t.push(_["default"].str2json(e.getAttribute("val")))
        }), this.__private__.ctrl.setValue(t)
      }, t.prototype.destroy = function () {
        this.save(), e.prototype._destroy.call(this)
      }, t
    }(c["default"]);
  e.exports = M
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(7),
    i = a(r),
    o = n(2),
    s = a(o),
    d = n(3),
    l = a(d),
    u = function () {
      function e(t) {
        (0, i["default"])(this, e);
        var n = t.getCtrlElement(),
          a = n.querySelector(".krcd-auxiliary-root"),
          r = void 0,
          o = void 0;
        a ? (r = a.querySelector(".krcd-auxiliary-bg"), o = a.querySelector(".krcd-auxiliary-root-dom")) : (a = s["default"].createElement(document, "div", {
          "class": "krcd-auxiliary-root",
          contenteditable: !1
        }), r = s["default"].createElement(document, "div", {
          "class": "krcd-auxiliary-bg",
          contenteditable: !1
        }), o = s["default"].createElement(document, "div", {
          "class": "krcd-auxiliary-root-dom",
          style: "overflow-x: hidden;",
          contenteditable: !1
        }), a.appendChild(r), a.appendChild(o));
        var d = this;
        l["default"].registerEvent(r, "click", function (e) {
          d.save(), d.hide(), s["default"].stopPropagation(e)
        }), this.__private__ = {
          rootDom: a,
          bgDom: r,
          auxiliaryRootDom: o,
          ctrl: t,
          auxiliaryDom: null
        }, n && n.appendChild(a)
      }
      return e.prototype.setAuxiliaryDom = function (e) {
        function t() {
          var e = n.__private__.ctrl.getCtrlElement(),
            t = n.__private__.auxiliaryRootDom,
            a = s["default"].getLeft(e);
          document.body.offsetWidth - a > t.offsetWidth ? t.style.left = a + "px" : t.style.right = "0px"
        }
        this.__private__.auxiliaryRootDom.innerHTML = "", this.__private__.auxiliaryDom = e, this.__private__.auxiliaryRootDom.appendChild(e);
        var n = this;
        setTimeout(t, 0)
      }, e.prototype.show = function () {
        this.initData(), this.__private__.rootDom.style.display = "inline"
      }, e.prototype.hide = function () {
        this.__private__.rootDom.style.display = ""
      }, e.prototype.isShow = function () {
        return !!this.__private__.rootDom && "inline" === this.__private__.rootDom.style.display
      }, e.prototype._destroy = function () {
        s["default"].remove(this.__private__.rootDom, !1, !0)
      }, e
    }();
  e.exports = u
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(7),
    i = a(r),
    o = n(16),
    s = a(o),
    d = n(20),
    l = a(d),
    u = n(56),
    c = a(u),
    m = (n(4), n(32), n(3)),
    h = (a(m), n(2)),
    f = a(h),
    _ = "label",
    p = [13, 108],
    y = function (e) {
      function t(n, a, r) {
        (0, i["default"])(this, t);
        var o = (0, s["default"])(this, e.call(this, n, r, a));
        o.TYPE_NAME = _;
        var d = e.prototype.getOpt.call(o) || {},
          l = e.prototype.getCtrlElement.call(o);
        return l.setAttribute("title", d.desc || ""), f["default"].addClass(l, "krcd-label"), o
      }
      return (0, l["default"])(t, e), t.prototype.render = function () {}, t.prototype.setValue = function (t) {
        e.prototype.getCtrlElement.call(this).innerHTML = t
      }, t.prototype.getValue = function () {
        var t = f["default"].innerHTML(e.prototype.getCtrlElement.call(this));
        return t === e.prototype.getDesc.call(this) ? "" : t
      }, t.prototype.focus = function () {
        e.prototype.isReadonly.call(this)
      }, t.prototype.click = function () {}, t.prototype.keydown = function (t) {
        if (!e.prototype.verifyInputKey.call(this, t, p)) return f["default"].preventDefault(t), void f["default"].stopPropagation(t);
        var n = f["default"].formatEvt(t),
          a = n.evt;
        9 === n.kc && (a.shiftKey ? e.prototype.triggerPreviousCtrl.call(this) : e.prototype.triggerNextCtrl.call(this))
      }, t.prototype.keyup = function (e) {}, t.prototype.blur = function () {
        e.prototype.isReadonly.call(this)
      }, t
    }(c["default"]);
  e.exports = {
    type: _,
    ctrl: y
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(7),
    i = a(r),
    o = n(16),
    s = a(o),
    d = n(20),
    l = a(d),
    u = n(48),
    c = a(u),
    m = n(56),
    h = a(m),
    f = n(4),
    _ = n(32),
    p = n(3),
    y = (a(p), n(2)),
    M = a(y),
    g = n(498),
    v = a(g),
    T = n(499),
    b = a(T),
    S = n(500),
    L = a(S);
  n(503), _.isIE9 && n(505);
  var w = "date",
    D = (0, c["default"])("83b9bde8-752e-409b-b1db-ae3ba31ff2f4"),
    k = [13, 108],
    x = function (e) {
      return e && 0 !== e.length ? e.replace("{yy}", "y").replace("{yyyy}", "Y").replace("{M}", "n").replace("{MM}", "m").replace("{d}", "j").replace("{dd}", "d").replace("{h}", "H").replace("{hh}", "H").replace("{m}", "i").replace("{mm}", "i").replace("{s}", "s").replace("{ss}", "S") : "Y-m-d"
    },
    Y = function (e) {
      this.getOpt();
      if (this.isRequired() && "" === e) return !1;
      var t = this[D],
        n = t.config.dateFormat;
      try {
        return e === t.formatDate(t.parseDate(e, n), n)
      } catch (a) {
        return !1
      }
    },
    C = function (e) {
      function t(n, a, r) {
        (0, i["default"])(this, t);
        var o = (0, s["default"])(this, e.call(this, n, r, a));
        o.TYPE_NAME = w;
        var d = e.prototype.getOpt.call(o),
          l = e.prototype.getCtrlElement.call(o),
          u = e.prototype.getValueElement.call(o);
        return l && u && (l.contentEditable = !1, u.contentEditable = !e.prototype.isReadonly.call(o), d && d.desc && u.setAttribute("title", d.desc)), M["default"].removeClasses(u, "krcd-warning"), o
      }
      return (0, l["default"])(t, e), t.prototype.render = function () {}, t.prototype.setValue = function (t) {
        e.prototype.getValueElement.call(this).innerHTML = t
      }, t.prototype.getValue = function () {
        var t = M["default"].innerHTML(e.prototype.getValueElement.call(this));
        return t === e.prototype.getDesc.call(this) ? "" : t
      }, t.prototype.focus = function () {
        if (!e.prototype.isReadonly.call(this)) {
          var t = e.prototype.getOpt.call(this),
            n = e.prototype.getValueElement.call(this),
            a = n.parentElement,
            r = this[f.ctrl_krcd][f.__private__].selection,
            i = r.getRange();
          t.desc === this.getValue() && i.selectNodeContents(n).select();
          var o = this,
            s = x(t.format),
            d = new v["default"](n, {
              enableTime: !!s && s.indexOf("H") >= 0,
              enableSeconds: !!s && s.toLowerCase().indexOf("s") >= 0,
              dateFormat: s,
              appendTo: a,
              maxDate: "" === t.max ? null : t.max,
              minDate: "" === t.min ? null : t.min,
              defaultDate: "" === t.defvalue ? null : t.defvalue,
              time_24hr: !0,
              minuteIncrement: 1,
              allowInput: !0,
              plugins: [new L["default"]({})],
              locale: b["default"].zh,
              onClose: function () {
                var e = o.getValue();
                M["default"].innerHTML(n) !== e && (n.innerHTML = e)
              },
              onChange: function (e, a, r) {
                o._reviseChangeValue(), "" === a && this.latestSelectedDateObj && (a = this.formatDate(this.latestSelectedDateObj, this.config.dateFormat)), n.innerHTML = "" === a ? t.desc : a
              }
            });
          this[D] = d
        }
      }, t.prototype.click = function () {
        e.prototype.isReadonly.call(this) || this[D].open()
      }, t.prototype.keydown = function (t) {
        if (!e.prototype.verifyInputKey.call(this, t, k)) return M["default"].preventDefault(t), void M["default"].stopPropagation(t);
        e.prototype.getValueElement.call(this).setAttribute("_backups", this.getValue());
        var n = M["default"].formatEvt(t),
          a = n.evt;
        9 === n.kc && (a.shiftKey ? e.prototype.triggerPreviousCtrl.call(this) : e.prototype.triggerNextCtrl.call(this), M["default"].preventDefault(t), M["default"].stopPropagation(t))
      }, t.prototype.keyup = function (t) {
        var n = e.prototype.getValueElement.call(this),
          a = this.getValue(),
          r = this[f.ctrl_krcd][f.__private__].selection;
        if (Y.call(this, a));
        else {
          var i = n.getAttribute("_backups");
          "" === a ? i = "" : Y.call(this, i) || (i = "");
          var o = i || M["default"].specialStr;
          n.innerHTML !== o && (n.innerHTML = o, e.prototype.setCursorAtLastNode.call(this, r))
        }
      }, t.prototype.blur = function () {
        if (!e.prototype.isReadonly.call(this)) {
          var t = e.prototype.getValueElement.call(this);
          if (t) {
            var n = M["default"].innerHTML(t);
            "" === n ? (t.innerHTML = e.prototype.getOpt.call(this).desc, t.setAttribute("_backups", M["default"].specialStr), M["default"].addClass(t, "krcd-warning")) : Y.call(this, n) ? M["default"].hasClass(t, "krcd-warning") && M["default"].removeClasses(t, "krcd-warning") : (t.innerHTML = this.getOpt().desc, t.setAttribute("_backups", M["default"].specialStr), M["default"].addClass(t, "krcd-warning")), this[D].destroy()
          }
        }
      }, t
    }(h["default"]);
  e.exports = {
    type: w,
    ctrl: C
  }
}, function (e, t, n) { /* flatpickr v4.5.1, @license MIT */
  ! function (t, n) {
    e.exports = n()
  }(0, function () {
    "use strict";

    function e(e, t, n) {
      void 0 === n && (n = !1);
      var a;
      return function () {
        var r = this,
          i = arguments;
        null !== a && clearTimeout(a), a = window.setTimeout(function () {
          a = null, n || e.apply(r, i)
        }, t), n && !a && e.apply(r, i)
      }
    }

    function t(e, t, n) {
      return void 0 === n && (n = !0), !1 !== n ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime()
    }

    function n(e, t, n) {
      if (!0 === n) return e.classList.add(t);
      e.classList.remove(t)
    }

    function a(e, t, n) {
      var a = window.document.createElement(e);
      return t = t || "", n = n || "", a.className = t, n !== undefined && (a.textContent = n), a
    }

    function r(e) {
      for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function i(e, t) {
      return t(e) ? e : e.parentNode ? i(e.parentNode, t) : undefined
    }

    function o(e, t) {
      var n = a("div", "numInputWrapper"),
        r = a("input", "numInput " + e),
        i = a("span", "arrowUp"),
        o = a("span", "arrowDown");
      if (r.type = "text", r.pattern = "\\d*", t !== undefined)
        for (var s in t) r.setAttribute(s, t[s]);
      return n.appendChild(r), n.appendChild(i), n.appendChild(o), n
    }

    function s(s, d) {
      function m() {
        Ie.utils = {
          getDaysInMonth: function (e, t) {
            return void 0 === e && (e = Ie.currentMonth), void 0 === t && (t = Ie.currentYear), 1 === e && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) ? 29 : Ie.l10n.daysInMonth[e]
          }
        }
      }

      function f(e) {
        return e.bind(Ie)
      }

      function p() {
        var e = Ie.config;
        !1 === e.weekNumbers && 1 === e.showMonths || !0 !== e.noCalendar && window.requestAnimationFrame(function () {
          if (Ie.calendarContainer.style.visibility = "hidden", Ie.calendarContainer.style.display = "block", Ie.daysContainer !== undefined) {
            var t = (Ie.days.offsetWidth + 1) * e.showMonths;
            Ie.daysContainer.style.width = t + "px", Ie.calendarContainer.style.width = t + (Ie.weekWrapper !== undefined ? Ie.weekWrapper.offsetWidth : 0) + "px", Ie.calendarContainer.style.removeProperty("visibility"), Ie.calendarContainer.style.removeProperty("display")
          }
        })
      }

      function v(e) {
        if (0 !== Ie.selectedDates.length) {
          e !== undefined && "blur" !== e.type && Pe(e);
          var t = Ie._input.value;
          k(), Oe(), Ie._input.value !== t && Ie._debouncedChange()
        }
      }

      function S(e, t) {
        return e % 12 + 12 * u(t === Ie.l10n.amPM[1])
      }

      function D(e) {
        switch (e % 24) {
          case 0:
          case 12:
            return 12;
          default:
            return e % 12
        }
      }

      function k() {
        if (Ie.hourElement !== undefined && Ie.minuteElement !== undefined) {
          var e = (parseInt(Ie.hourElement.value.slice(-2), 10) || 0) % 24,
            n = (parseInt(Ie.minuteElement.value, 10) || 0) % 60,
            a = Ie.secondElement !== undefined ? (parseInt(Ie.secondElement.value, 10) || 0) % 60 : 0;
          Ie.amPM !== undefined && (e = S(e, Ie.amPM.textContent));
          var r = Ie.config.minTime !== undefined || Ie.config.minDate && Ie.minDateHasTime && Ie.latestSelectedDateObj && 0 === t(Ie.latestSelectedDateObj, Ie.config.minDate, !0);
          if (Ie.config.maxTime !== undefined || Ie.config.maxDate && Ie.maxDateHasTime && Ie.latestSelectedDateObj && 0 === t(Ie.latestSelectedDateObj, Ie.config.maxDate, !0)) {
            var i = Ie.config.maxTime !== undefined ? Ie.config.maxTime : Ie.config.maxDate;
            e = Math.min(e, i.getHours()), e === i.getHours() && (n = Math.min(n, i.getMinutes())), n === i.getMinutes() && (a = Math.min(a, i.getSeconds()))
          }
          if (r) {
            var o = Ie.config.minTime !== undefined ? Ie.config.minTime : Ie.config.minDate;
            e = Math.max(e, o.getHours()), e === o.getHours() && (n = Math.max(n, o.getMinutes())), n === o.getMinutes() && (a = Math.max(a, o.getSeconds()))
          }
          C(e, n, a)
        }
      }

      function x(e) {
        var t = e || Ie.latestSelectedDateObj;
        t && C(t.getHours(), t.getMinutes(), t.getSeconds())
      }

      function Y() {
        var e = Ie.config.defaultHour,
          t = Ie.config.defaultMinute,
          n = Ie.config.defaultSeconds;
        if (Ie.config.minDate !== undefined) {
          var a = Ie.config.minDate.getHours(),
            r = Ie.config.minDate.getMinutes();
          e = Math.max(e, a), e === a && (t = Math.max(r, t)), e === a && t === r && (n = Ie.config.minDate.getSeconds())
        }
        if (Ie.config.maxDate !== undefined) {
          var i = Ie.config.maxDate.getHours(),
            o = Ie.config.maxDate.getMinutes();
          e = Math.min(e, i), e === i && (t = Math.min(o, t)), e === i && t === o && (n = Ie.config.maxDate.getSeconds())
        }
        C(e, t, n)
      }

      function C(e, t, n) {
        Ie.latestSelectedDateObj !== undefined && Ie.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0), Ie.hourElement && Ie.minuteElement && !Ie.isMobile && (Ie.hourElement.value = l(Ie.config.time_24hr ? e : (12 + e) % 12 + 12 * u(e % 12 == 0)), Ie.minuteElement.value = l(t), Ie.amPM !== undefined && (Ie.amPM.textContent = Ie.l10n.amPM[u(e >= 12)]), Ie.secondElement !== undefined && (Ie.secondElement.value = l(n)))
      }

      function H(e) {
        var t = parseInt(e.target.value) + (e.delta || 0);
        (t / 1e3 > 1 || "Enter" === e.key && !/[^\d]/.test(t.toString())) && se(t)
      }

      function A(e, t, n, a) {
        return t instanceof Array ? t.forEach(function (t) {
          return A(e, t, n, a)
        }) : e instanceof Array ? e.forEach(function (e) {
          return A(e, t, n, a)
        }) : (e.addEventListener(t, n, a), void Ie._handlers.push({
          element: e,
          event: t,
          handler: n,
          options: a
        }))
      }

      function E(e) {
        return function (t) {
          1 === t.which && e(t)
        }
      }

      function O() {
        Ye("onChange")
      }

      function G() {
        if (Ie.config.wrap && ["open", "close", "toggle", "clear"].forEach(function (e) {
            Array.prototype.forEach.call(Ie.element.querySelectorAll("[data-" + e + "]"), function (t) {
              return A(t, "click", Ie[e])
            })
          }), Ie.isMobile) return void ke();
        var t = e(me, 50);
        if (Ie._debouncedChange = e(O, L), Ie.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && A(Ie.daysContainer, "mouseover", function (e) {
            "range" === Ie.config.mode && ce(e.target)
          }), A(window.document.body, "keydown", ue), Ie.config["static"] || A(Ie._input, "keydown", ue), Ie.config.inline || Ie.config["static"] || A(window, "resize", t), window.ontouchstart !== undefined ? A(window.document, "click", oe) : A(window.document, "mousedown", E(oe)), A(window.document, "focus", oe, {
            capture: !0
          }), !0 === Ie.config.clickOpens && (A(Ie._input, "focus", Ie.open), A(Ie._input, "mousedown", E(Ie.open))), Ie.daysContainer !== undefined && (A(Ie.monthNav, "mousedown", E(Ge)), A(Ie.monthNav, ["keyup", "increment"], H), A(Ie.daysContainer, "mousedown", E(ve))), Ie.timeContainer !== undefined && Ie.minuteElement !== undefined && Ie.hourElement !== undefined) {
          var n = function (e) {
            return e.target.select()
          };
          A(Ie.timeContainer, ["increment"], v), A(Ie.timeContainer, "blur", v, {
            capture: !0
          }), A(Ie.timeContainer, "mousedown", E(I)), A([Ie.hourElement, Ie.minuteElement], ["focus", "click"], n), Ie.secondElement !== undefined && A(Ie.secondElement, "focus", function () {
            return Ie.secondElement && Ie.secondElement.select()
          }), Ie.amPM !== undefined && A(Ie.amPM, "mousedown", E(function (e) {
            v(e), O()
          }))
        }
      }

      function P(e) {
        var t = e !== undefined ? Ie.parseDate(e) : Ie.latestSelectedDateObj || (Ie.config.minDate && Ie.config.minDate > Ie.now ? Ie.config.minDate : Ie.config.maxDate && Ie.config.maxDate < Ie.now ? Ie.config.maxDate : Ie.now);
        try {
          t !== undefined && (Ie.currentYear = t.getFullYear(), Ie.currentMonth = t.getMonth())
        } catch (n) {
          n.message = "Invalid date supplied: " + t, Ie.config.errorHandler(n)
        }
        Ie.redraw()
      }

      function I(e) {
        ~e.target.className.indexOf("arrow") && N(e, e.target.classList.contains("arrowUp") ? 1 : -1)
      }

      function N(e, t, n) {
        var a = e && e.target,
          r = n || a && a.parentNode && a.parentNode.firstChild,
          i = Ce("increment");
        i.delta = t, r && r.dispatchEvent(i)
      }

      function j() {
        var e = window.document.createDocumentFragment();
        if (Ie.calendarContainer = a("div", "flatpickr-calendar"), Ie.calendarContainer.tabIndex = -1, !Ie.config.noCalendar) {
          if (e.appendChild(K()), Ie.innerContainer = a("div", "flatpickr-innerContainer"), Ie.config.weekNumbers) {
            var t = ee(),
              r = t.weekWrapper,
              i = t.weekNumbers;
            Ie.innerContainer.appendChild(r), Ie.weekNumbers = i, Ie.weekWrapper = r
          }
          Ie.rContainer = a("div", "flatpickr-rContainer"), Ie.rContainer.appendChild(q()), Ie.daysContainer || (Ie.daysContainer = a("div", "flatpickr-days"), Ie.daysContainer.tabIndex = -1), U(), Ie.rContainer.appendChild(Ie.daysContainer), Ie.innerContainer.appendChild(Ie.rContainer), e.appendChild(Ie.innerContainer)
        }
        Ie.config.enableTime && e.appendChild(J()), n(Ie.calendarContainer, "rangeMode", "range" === Ie.config.mode), n(Ie.calendarContainer, "animate", !0 === Ie.config.animate), n(Ie.calendarContainer, "multiMonth", Ie.config.showMonths > 1), Ie.calendarContainer.appendChild(e);
        var o = Ie.config.appendTo !== undefined && Ie.config.appendTo.nodeType !== undefined;
        if ((Ie.config.inline || Ie.config["static"]) && (Ie.calendarContainer.classList.add(Ie.config.inline ? "inline" : "static"), Ie.config.inline && (!o && Ie.element.parentNode ? Ie.element.parentNode.insertBefore(Ie.calendarContainer, Ie._input.nextSibling) : Ie.config.appendTo !== undefined && Ie.config.appendTo.appendChild(Ie.calendarContainer)), Ie.config["static"])) {
          var s = a("div", "flatpickr-wrapper");
          Ie.element.parentNode && Ie.element.parentNode.insertBefore(s, Ie.element), s.appendChild(Ie.element), Ie.altInput && s.appendChild(Ie.altInput), s.appendChild(Ie.calendarContainer)
        }
        Ie.config["static"] || Ie.config.inline || (Ie.config.appendTo !== undefined ? Ie.config.appendTo : window.document.body).appendChild(Ie.calendarContainer)
      }

      function W(e, r, i, o) {
        var s = de(r, !0),
          d = a("span", "flatpickr-day " + e, r.getDate().toString());
        return d.dateObj = r, d.$i = o, d.setAttribute("aria-label", Ie.formatDate(r, Ie.config.ariaDateFormat)), -1 === e.indexOf("hidden") && 0 === t(r, Ie.now) && (Ie.todayDateElem = d, d.classList.add("today"), d.setAttribute("aria-current", "date")), s ? (d.tabIndex = -1, He(r) && (d.classList.add("selected"), Ie.selectedDateElem = d, "range" === Ie.config.mode && (n(d, "startRange", Ie.selectedDates[0] && 0 === t(r, Ie.selectedDates[0], !0)), n(d, "endRange", Ie.selectedDates[1] && 0 === t(r, Ie.selectedDates[1], !0)), "nextMonthDay" === e && d.classList.add("inRange")))) : d.classList.add("disabled"), "range" === Ie.config.mode && Ae(r) && !He(r) && d.classList.add("inRange"), Ie.weekNumbers && 1 === Ie.config.showMonths && "prevMonthDay" !== e && i % 7 == 1 && Ie.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + Ie.config.getWeek(r) + "</span>"), Ye("onDayCreate", d), d
      }

      function R(e) {
        e.focus(), "range" === Ie.config.mode && ce(e)
      }

      function F(e) {
        for (var t = e > 0 ? 0 : Ie.config.showMonths - 1, n = e > 0 ? Ie.config.showMonths : -1, a = t; a != n; a += e)
          for (var r = Ie.daysContainer.children[a], i = e > 0 ? 0 : r.children.length - 1, o = e > 0 ? r.children.length : -1, s = i; s != o; s += e) {
            var d = r.children[s];
            if (-1 === d.className.indexOf("hidden") && de(d.dateObj)) return d
          }
        return undefined
      }

      function B(e, t) {
        for (var n = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : Ie.currentMonth, a = t > 0 ? Ie.config.showMonths : -1, r = t > 0 ? 1 : -1, i = n - Ie.currentMonth; i != a; i += r)
          for (var o = Ie.daysContainer.children[i], s = n - Ie.currentMonth === i ? e.$i + t : t < 0 ? o.children.length - 1 : 0, d = o.children.length, l = s; l >= 0 && l < d && l != (t > 0 ? d : -1); l += r) {
            var u = o.children[l];
            if (-1 === u.className.indexOf("hidden") && de(u.dateObj) && Math.abs(e.$i - l) >= Math.abs(t)) return R(u)
          }
        return Ie.changeMonth(r), V(F(r), 0), undefined
      }

      function V(e, t) {
        var n = le(document.activeElement),
          a = e !== undefined ? e : n ? document.activeElement : Ie.selectedDateElem !== undefined && le(Ie.selectedDateElem) ? Ie.selectedDateElem : Ie.todayDateElem !== undefined && le(Ie.todayDateElem) ? Ie.todayDateElem : F(t > 0 ? 1 : -1);
        return a === undefined ? Ie._input.focus() : n ? void B(a, t) : R(a)
      }

      function X(e, t) {
        for (var n = (new Date(e, t, 1).getDay() - Ie.l10n.firstDayOfWeek + 7) % 7, r = Ie.utils.getDaysInMonth((t - 1 + 12) % 12), i = Ie.utils.getDaysInMonth(t), o = window.document.createDocumentFragment(), s = Ie.config.showMonths > 1, d = s ? "prevMonthDay hidden" : "prevMonthDay", l = s ? "nextMonthDay hidden" : "nextMonthDay", u = r + 1 - n, c = 0; u <= r; u++, c++) o.appendChild(W(d, new Date(e, t - 1, u), u, c));
        for (u = 1; u <= i; u++, c++) o.appendChild(W("", new Date(e, t, u), u, c));
        for (var m = i + 1; m <= 42 - n && (1 === Ie.config.showMonths || c % 7 != 0); m++, c++) o.appendChild(W(l, new Date(e, t + 1, m % i), m, c));
        var h = a("div", "dayContainer");
        return h.appendChild(o), h
      }

      function U() {
        if (Ie.daysContainer !== undefined) {
          r(Ie.daysContainer), Ie.weekNumbers && r(Ie.weekNumbers);
          for (var e = document.createDocumentFragment(), t = 0; t < Ie.config.showMonths; t++) {
            var n = new Date(Ie.currentYear, Ie.currentMonth, 1);
            n.setMonth(Ie.currentMonth + t), e.appendChild(X(n.getFullYear(), n.getMonth()))
          }
          Ie.daysContainer.appendChild(e), Ie.days = Ie.daysContainer.firstChild, "range" === Ie.config.mode && 1 === Ie.selectedDates.length && ce()
        }
      }

      function z() {
        var e = a("div", "flatpickr-month"),
          t = window.document.createDocumentFragment(),
          n = a("span", "cur-month"),
          r = o("cur-year", {
            tabindex: "-1"
          }),
          i = r.childNodes[0];
        i.setAttribute("aria-label", Ie.l10n.yearAriaLabel), Ie.config.minDate && i.setAttribute("data-min", Ie.config.minDate.getFullYear().toString()), Ie.config.maxDate && (i.setAttribute("data-max", Ie.config.maxDate.getFullYear().toString()), i.disabled = !!Ie.config.minDate && Ie.config.minDate.getFullYear() === Ie.config.maxDate.getFullYear());
        var s = a("div", "flatpickr-current-month");
        return s.appendChild(n), s.appendChild(r), t.appendChild(s), e.appendChild(t), {
          container: e,
          yearElement: i,
          monthElement: n
        }
      }

      function Z() {
        r(Ie.monthNav), Ie.monthNav.appendChild(Ie.prevMonthNav);
        for (var e = Ie.config.showMonths; e--;) {
          var t = z();
          Ie.yearElements.push(t.yearElement), Ie.monthElements.push(t.monthElement), Ie.monthNav.appendChild(t.container)
        }
        Ie.monthNav.appendChild(Ie.nextMonthNav)
      }

      function K() {
        return Ie.monthNav = a("div", "flatpickr-months"), Ie.yearElements = [], Ie.monthElements = [], Ie.prevMonthNav = a("span", "flatpickr-prev-month"), Ie.prevMonthNav.innerHTML = Ie.config.prevArrow, Ie.nextMonthNav = a("span", "flatpickr-next-month"), Ie.nextMonthNav.innerHTML = Ie.config.nextArrow, Z(), Object.defineProperty(Ie, "_hidePrevMonthArrow", {
          get: function () {
            return Ie.__hidePrevMonthArrow
          },
          set: function (e) {
            Ie.__hidePrevMonthArrow !== e && (n(Ie.prevMonthNav, "disabled", e), Ie.__hidePrevMonthArrow = e)
          }
        }), Object.defineProperty(Ie, "_hideNextMonthArrow", {
          get: function () {
            return Ie.__hideNextMonthArrow
          },
          set: function (e) {
            Ie.__hideNextMonthArrow !== e && (n(Ie.nextMonthNav, "disabled", e), Ie.__hideNextMonthArrow = e)
          }
        }), Ie.currentYearElement = Ie.yearElements[0], Ee(), Ie.monthNav
      }

      function J() {
        Ie.calendarContainer.classList.add("hasTime"), Ie.config.noCalendar && Ie.calendarContainer.classList.add("noCalendar"), Ie.timeContainer = a("div", "flatpickr-time"), Ie.timeContainer.tabIndex = -1;
        var e = a("span", "flatpickr-time-separator", ":"),
          t = o("flatpickr-hour");
        Ie.hourElement = t.childNodes[0];
        var n = o("flatpickr-minute");
        if (Ie.minuteElement = n.childNodes[0], Ie.hourElement.tabIndex = Ie.minuteElement.tabIndex = -1, Ie.hourElement.value = l(Ie.latestSelectedDateObj ? Ie.latestSelectedDateObj.getHours() : Ie.config.time_24hr ? Ie.config.defaultHour : D(Ie.config.defaultHour)), Ie.minuteElement.value = l(Ie.latestSelectedDateObj ? Ie.latestSelectedDateObj.getMinutes() : Ie.config.defaultMinute), Ie.hourElement.setAttribute("data-step", Ie.config.hourIncrement.toString()), Ie.minuteElement.setAttribute("data-step", Ie.config.minuteIncrement.toString()), Ie.hourElement.setAttribute("data-min", Ie.config.time_24hr ? "0" : "1"), Ie.hourElement.setAttribute("data-max", Ie.config.time_24hr ? "23" : "12"), Ie.minuteElement.setAttribute("data-min", "0"), Ie.minuteElement.setAttribute("data-max", "59"), Ie.timeContainer.appendChild(t), Ie.timeContainer.appendChild(e), Ie.timeContainer.appendChild(n), Ie.config.time_24hr && Ie.timeContainer.classList.add("time24hr"), Ie.config.enableSeconds) {
          Ie.timeContainer.classList.add("hasSeconds");
          var r = o("flatpickr-second");
          Ie.secondElement = r.childNodes[0], Ie.secondElement.value = l(Ie.latestSelectedDateObj ? Ie.latestSelectedDateObj.getSeconds() : Ie.config.defaultSeconds), Ie.secondElement.setAttribute("data-step", Ie.minuteElement.getAttribute("data-step")), Ie.secondElement.setAttribute("data-min", Ie.minuteElement.getAttribute("data-min")), Ie.secondElement.setAttribute("data-max", Ie.minuteElement.getAttribute("data-max")), Ie.timeContainer.appendChild(a("span", "flatpickr-time-separator", ":")), Ie.timeContainer.appendChild(r)
        }
        return Ie.config.time_24hr || (Ie.amPM = a("span", "flatpickr-am-pm", Ie.l10n.amPM[u((Ie.latestSelectedDateObj ? Ie.hourElement.value : Ie.config.defaultHour) > 11)]), Ie.amPM.title = Ie.l10n.toggleTitle, Ie.amPM.tabIndex = -1, Ie.timeContainer.appendChild(Ie.amPM)), Ie.timeContainer
      }

      function q() {
        Ie.weekdayContainer ? r(Ie.weekdayContainer) : Ie.weekdayContainer = a("div", "flatpickr-weekdays");
        for (var e = Ie.config.showMonths; e--;) {
          var t = a("div", "flatpickr-weekdaycontainer");
          Ie.weekdayContainer.appendChild(t)
        }
        return Q(), Ie.weekdayContainer
      }

      function Q() {
        var e = Ie.l10n.firstDayOfWeek,
          t = Ie.l10n.weekdays.shorthand.concat();
        e > 0 && e < t.length && (t = t.splice(e, t.length).concat(t.splice(0, e)));
        for (var n = Ie.config.showMonths; n--;) Ie.weekdayContainer.children[n].innerHTML = "\n      <span class=flatpickr-weekday>\n        " + t.join("</span><span class=flatpickr-weekday>") + "\n      </span>\n      "
      }

      function ee() {
        Ie.calendarContainer.classList.add("hasWeeks");
        var e = a("div", "flatpickr-weekwrapper");
        e.appendChild(a("span", "flatpickr-weekday", Ie.l10n.weekAbbreviation));
        var t = a("div", "flatpickr-weeks");
        return e.appendChild(t), {
          weekWrapper: e,
          weekNumbers: t
        }
      }

      function te(e, t) {
        void 0 === t && (t = !0);
        var n = t ? e : e - Ie.currentMonth;
        n < 0 && !0 === Ie._hidePrevMonthArrow || n > 0 && !0 === Ie._hideNextMonthArrow || (Ie.currentMonth += n, (Ie.currentMonth < 0 || Ie.currentMonth > 11) && (Ie.currentYear += Ie.currentMonth > 11 ? 1 : -1, Ie.currentMonth = (Ie.currentMonth + 12) % 12, Ye("onYearChange")), U(), Ye("onMonthChange"), Ee())
      }

      function ne(e) {
        void 0 === e && (e = !0), Ie.input.value = "", Ie.altInput !== undefined && (Ie.altInput.value = ""), Ie.mobileInput !== undefined && (Ie.mobileInput.value = ""), Ie.selectedDates = [], Ie.latestSelectedDateObj = undefined, Ie.showTimeInput = !1, !0 === Ie.config.enableTime && Y(), Ie.redraw(), e && Ye("onChange")
      }

      function ae() {
        Ie.isOpen = !1, Ie.isMobile || (Ie.calendarContainer.classList.remove("open"), Ie._input.classList.remove("active")), Ye("onClose")
      }

      function re() {
        Ie.config !== undefined && Ye("onDestroy");
        for (var e = Ie._handlers.length; e--;) {
          var t = Ie._handlers[e];
          t.element.removeEventListener(t.event, t.handler, t.options)
        }
        if (Ie._handlers = [], Ie.mobileInput) Ie.mobileInput.parentNode && Ie.mobileInput.parentNode.removeChild(Ie.mobileInput), Ie.mobileInput = undefined;
        else if (Ie.calendarContainer && Ie.calendarContainer.parentNode)
          if (Ie.config["static"] && Ie.calendarContainer.parentNode) {
            var n = Ie.calendarContainer.parentNode;
            for (n.lastChild && n.removeChild(n.lastChild); n.firstChild;) n.parentNode.insertBefore(n.firstChild, n);
            n.parentNode.removeChild(n)
          } else Ie.calendarContainer.parentNode.removeChild(Ie.calendarContainer);
        Ie.altInput && (Ie.input.type = "text", Ie.altInput.parentNode && Ie.altInput.parentNode.removeChild(Ie.altInput), delete Ie.altInput), Ie.input && (Ie.input.type = Ie.input._type, Ie.input.classList.remove("flatpickr-input"), Ie.input.removeAttribute("readonly"), Ie.input.value = ""), ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (e) {
          try {
            delete Ie[e]
          } catch (t) {}
        })
      }

      function ie(e) {
        return !(!Ie.config.appendTo || !Ie.config.appendTo.contains(e)) || Ie.calendarContainer.contains(e)
      }

      function oe(e) {
        if (Ie.isOpen && !Ie.config.inline) {
          var t = ie(e.target),
            n = e.target === Ie.input || e.target === Ie.altInput || Ie.element.contains(e.target) || e.path && e.path.indexOf && (~e.path.indexOf(Ie.input) || ~e.path.indexOf(Ie.altInput)),
            a = "blur" === e.type ? n && e.relatedTarget && !ie(e.relatedTarget) : !n && !t,
            r = !Ie.config.ignoredFocusElements.some(function (t) {
              return t.contains(e.target)
            });
          a && r && (Ie.close(), "range" === Ie.config.mode && 1 === Ie.selectedDates.length && (Ie.clear(!1), Ie.redraw()))
        }
      }

      function se(e) {
        if (!(!e || Ie.config.minDate && e < Ie.config.minDate.getFullYear() || Ie.config.maxDate && e > Ie.config.maxDate.getFullYear())) {
          var t = e,
            n = Ie.currentYear !== t;
          Ie.currentYear = t || Ie.currentYear, Ie.config.maxDate && Ie.currentYear === Ie.config.maxDate.getFullYear() ? Ie.currentMonth = Math.min(Ie.config.maxDate.getMonth(), Ie.currentMonth) : Ie.config.minDate && Ie.currentYear === Ie.config.minDate.getFullYear() && (Ie.currentMonth = Math.max(Ie.config.minDate.getMonth(), Ie.currentMonth)), n && (Ie.redraw(), Ye("onYearChange"))
        }
      }

      function de(e, n) {
        void 0 === n && (n = !0);
        var a = Ie.parseDate(e, undefined, n);
        if (Ie.config.minDate && a && t(a, Ie.config.minDate, n !== undefined ? n : !Ie.minDateHasTime) < 0 || Ie.config.maxDate && a && t(a, Ie.config.maxDate, n !== undefined ? n : !Ie.maxDateHasTime) > 0) return !1;
        if (0 === Ie.config.enable.length && 0 === Ie.config.disable.length) return !0;
        if (a === undefined) return !1;
        for (var r, i = Ie.config.enable.length > 0, o = i ? Ie.config.enable : Ie.config.disable, s = 0; s < o.length; s++) {
          if ("function" == typeof (r = o[s]) && r(a)) return i;
          if (r instanceof Date && a !== undefined && r.getTime() === a.getTime()) return i;
          if ("string" == typeof r && a !== undefined) {
            var d = Ie.parseDate(r, undefined, !0);
            return d && d.getTime() === a.getTime() ? i : !i
          }
          if ("object" == typeof r && a !== undefined && r.from && r.to && a.getTime() >= r.from.getTime() && a.getTime() <= r.to.getTime()) return i
        }
        return !i
      }

      function le(e) {
        return Ie.daysContainer !== undefined && (-1 === e.className.indexOf("hidden") && Ie.daysContainer.contains(e))
      }

      function ue(e) {
        var t = e.target === Ie._input,
          n = Ie.config.allowInput,
          a = Ie.isOpen && (!n || !t),
          r = Ie.config.inline && t && !n;
        if (13 === e.keyCode && t) {
          if (n) return Ie.setDate(Ie._input.value, !0, e.target === Ie.altInput ? Ie.config.altFormat : Ie.config.dateFormat), e.target.blur();
          Ie.open()
        } else if (ie(e.target) || a || r) {
          var i = !!Ie.timeContainer && Ie.timeContainer.contains(e.target);
          switch (e.keyCode) {
            case 13:
              i ? v() : ve(e);
              break;
            case 27:
              e.preventDefault(), ge();
              break;
            case 8:
            case 46:
              t && !Ie.config.allowInput && (e.preventDefault(), Ie.clear());
              break;
            case 37:
            case 39:
              if (i) Ie.hourElement && Ie.hourElement.focus();
              else if (e.preventDefault(), Ie.daysContainer !== undefined && (!1 === n || le(document.activeElement))) {
                var o = 39 === e.keyCode ? 1 : -1;
                e.ctrlKey ? (te(o), V(F(1), 0)) : V(undefined, o)
              }
              break;
            case 38:
            case 40:
              e.preventDefault();
              var s = 40 === e.keyCode ? 1 : -1;
              Ie.daysContainer ? e.ctrlKey ? (se(Ie.currentYear - s), V(F(1), 0)) : i || V(undefined, 7 * s) : Ie.config.enableTime && (!i && Ie.hourElement && Ie.hourElement.focus(), v(e), Ie._debouncedChange());
              break;
            case 9:
              if (!i) break;
              var d = [Ie.hourElement, Ie.minuteElement, Ie.secondElement, Ie.amPM].filter(function (e) {
                  return e
                }),
                l = d.indexOf(e.target);
              if (-1 !== l) {
                var u = d[l + (e.shiftKey ? -1 : 1)];
                u !== undefined && (e.preventDefault(), u.focus())
              }
          }
        }
        if (Ie.amPM !== undefined && e.target === Ie.amPM) switch (e.key) {
          case Ie.l10n.amPM[0].charAt(0):
          case Ie.l10n.amPM[0].charAt(0).toLowerCase():
            Ie.amPM.textContent = Ie.l10n.amPM[0], k(), Oe();
            break;
          case Ie.l10n.amPM[1].charAt(0):
          case Ie.l10n.amPM[1].charAt(0).toLowerCase():
            Ie.amPM.textContent = Ie.l10n.amPM[1], k(), Oe()
        }
        Ye("onKeyDown", e)
      }

      function ce(e) {
        if (1 === Ie.selectedDates.length && (!e || e.classList.contains("flatpickr-day") && !e.classList.contains("disabled"))) {
          for (var t = e ? e.dateObj.getTime() : Ie.days.firstElementChild.dateObj.getTime(), n = Ie.parseDate(Ie.selectedDates[0], undefined, !0).getTime(), a = Math.min(t, Ie.selectedDates[0].getTime()), r = Math.max(t, Ie.selectedDates[0].getTime()), i = Ie.daysContainer.lastChild.lastChild.dateObj.getTime(), o = !1, s = 0, d = 0, l = a; l < i; l += b.DAY) de(new Date(l), !0) || (o = o || l > a && l < r, l < n && (!s || l > s) ? s = l : l > n && (!d || l < d) && (d = l));
          for (var u = 0; u < Ie.config.showMonths; u++)
            for (var c = Ie.daysContainer.children[u], m = Ie.daysContainer.children[u - 1], h = 0, f = c.children.length; h < f; h++) {
              (function (a, r) {
                var i = c.children[a],
                  l = i.dateObj,
                  h = l.getTime(),
                  f = s > 0 && h < s || d > 0 && h > d;
                f ? (i.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function (e) {
                  i.classList.remove(e)
                })) : o && !f || (["startRange", "inRange", "endRange", "notAllowed"].forEach(function (e) {
                  i.classList.remove(e)
                }), e !== undefined && (e.classList.add(t < Ie.selectedDates[0].getTime() ? "startRange" : "endRange"), !c.contains(e) && u > 0 && m && m.lastChild.dateObj.getTime() >= h || (n < t && h === n ? i.classList.add("startRange") : n > t && h === n && i.classList.add("endRange"), h >= s && (0 === d || h <= d) && T(h, n, t) && i.classList.add("inRange"))))
              })(h)
            }
        }
      }

      function me() {
        !Ie.isOpen || Ie.config["static"] || Ie.config.inline || ye()
      }

      function he(e, t) {
        if (void 0 === t && (t = Ie._positionElement), !0 === Ie.isMobile) return e && (e.preventDefault(), e.target && e.target.blur()), setTimeout(function () {
          Ie.mobileInput !== undefined && Ie.mobileInput.focus()
        }, 0), void Ye("onOpen");
        if (!Ie._input.disabled && !Ie.config.inline) {
          var n = Ie.isOpen;
          Ie.isOpen = !0, n || (Ie.calendarContainer.classList.add("open"), Ie._input.classList.add("active"), Ye("onOpen"), ye(t)), !0 === Ie.config.enableTime && !0 === Ie.config.noCalendar && (0 === Ie.selectedDates.length && (Ie.setDate(Ie.config.minDate !== undefined ? new Date(Ie.config.minDate.getTime()) : new Date, !1), Y(), Oe()), !1 !== Ie.config.allowInput || e !== undefined && Ie.timeContainer.contains(e.relatedTarget) || setTimeout(function () {
            return Ie.hourElement.select()
          }, 50))
        }
      }

      function fe(e) {
        return function (t) {
          var n = Ie.config["_" + e + "Date"] = Ie.parseDate(t, Ie.config.dateFormat),
            a = Ie.config["_" + ("min" === e ? "max" : "min") + "Date"];
          n !== undefined && (Ie["min" === e ? "minDateHasTime" : "maxDateHasTime"] = n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0), Ie.selectedDates && (Ie.selectedDates = Ie.selectedDates.filter(function (e) {
            return de(e)
          }), Ie.selectedDates.length || "min" !== e || x(n), Oe()), Ie.daysContainer && (Me(), n !== undefined ? Ie.currentYearElement[e] = n.getFullYear().toString() : Ie.currentYearElement.removeAttribute(e), Ie.currentYearElement.disabled = !!a && n !== undefined && a.getFullYear() === n.getFullYear())
        }
      }

      function _e() {
        var e = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
          t = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
          n = Object.assign({}, d, JSON.parse(JSON.stringify(s.dataset || {}))),
          a = {};
        Ie.config.parseDate = n.parseDate, Ie.config.formatDate = n.formatDate, Object.defineProperty(Ie.config, "enable", {
          get: function () {
            return Ie.config._enable
          },
          set: function (e) {
            Ie.config._enable = Le(e)
          }
        }), Object.defineProperty(Ie.config, "disable", {
          get: function () {
            return Ie.config._disable
          },
          set: function (e) {
            Ie.config._disable = Le(e)
          }
        });
        var r = "time" === n.mode;
        n.dateFormat || !n.enableTime && !r || (a.dateFormat = n.noCalendar || r ? "H:i" + (n.enableSeconds ? ":S" : "") : w.defaultConfig.dateFormat + " H:i" + (n.enableSeconds ? ":S" : "")), n.altInput && (n.enableTime || r) && !n.altFormat && (a.altFormat = n.noCalendar || r ? "h:i" + (n.enableSeconds ? ":S K" : " K") : w.defaultConfig.altFormat + " h:i" + (n.enableSeconds ? ":S" : "") + " K"), Object.defineProperty(Ie.config, "minDate", {
          get: function () {
            return Ie.config._minDate
          },
          set: fe("min")
        }), Object.defineProperty(Ie.config, "maxDate", {
          get: function () {
            return Ie.config._maxDate
          },
          set: fe("max")
        });
        var i = function (e) {
          return function (t) {
            Ie.config["min" === e ? "_minTime" : "_maxTime"] = Ie.parseDate(t, "H:i")
          }
        };
        Object.defineProperty(Ie.config, "minTime", {
          get: function () {
            return Ie.config._minTime
          },
          set: i("min")
        }), Object.defineProperty(Ie.config, "maxTime", {
          get: function () {
            return Ie.config._maxTime
          },
          set: i("max")
        }), "time" === n.mode && (Ie.config.noCalendar = !0, Ie.config.enableTime = !0), Object.assign(Ie.config, a, n);
        for (var o = 0; o < e.length; o++) Ie.config[e[o]] = !0 === Ie.config[e[o]] || "true" === Ie.config[e[o]];
        for (var l = t.length; l--;) Ie.config[t[l]] !== undefined && (Ie.config[t[l]] = c(Ie.config[t[l]] || []).map(f));
        Ie.isMobile = !Ie.config.disableMobile && !Ie.config.inline && "single" === Ie.config.mode && !Ie.config.disable.length && !Ie.config.enable.length && !Ie.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (var u = 0; u < Ie.config.plugins.length; u++) {
          var m = Ie.config.plugins[u](Ie) || {};
          for (var h in m) ~t.indexOf(h) ? Ie.config[h] = c(m[h]).map(f).concat(Ie.config[h]) : "undefined" == typeof n[h] && (Ie.config[h] = m[h])
        }
        Ye("onParseConfig")
      }

      function pe() {
        "object" != typeof Ie.config.locale && "undefined" == typeof w.l10ns[Ie.config.locale] && Ie.config.errorHandler(new Error("flatpickr: invalid locale " + Ie.config.locale)), Ie.l10n = Object.assign({}, w.l10ns["default"], "object" == typeof Ie.config.locale ? Ie.config.locale : "default" !== Ie.config.locale ? w.l10ns[Ie.config.locale] : undefined), _.K = "(" + Ie.l10n.amPM[0] + "|" + Ie.l10n.amPM[1] + "|" + Ie.l10n.amPM[0].toLowerCase() + "|" + Ie.l10n.amPM[1].toLowerCase() + ")", Ie.formatDate = M(Ie), Ie.parseDate = g({
          config: Ie.config,
          l10n: Ie.l10n
        })
      }

      function ye(e) {
        if (Ie.calendarContainer !== undefined) {
          Ye("onPreCalendarPosition");
          var t = e || Ie._positionElement,
            a = Array.prototype.reduce.call(Ie.calendarContainer.children, function (e, t) {
              return e + t.offsetHeight
            }, 0),
            r = Ie.calendarContainer.offsetWidth,
            i = Ie.config.position.split(" "),
            o = i[0],
            s = i.length > 1 ? i[1] : null,
            d = t.getBoundingClientRect(),
            l = window.innerHeight - d.bottom,
            u = "above" === o || "below" !== o && l < a && d.top > a,
            c = window.pageYOffset + d.top + (u ? -a - 2 : t.offsetHeight + 2);
          if (n(Ie.calendarContainer, "arrowTop", !u), n(Ie.calendarContainer, "arrowBottom", u), !Ie.config.inline) {
            var m = window.pageXOffset + d.left - (null != s && "center" === s ? (r - d.width) / 2 : 0),
              h = window.document.body.offsetWidth - d.right,
              f = m + r > window.document.body.offsetWidth;
            n(Ie.calendarContainer, "rightMost", f), Ie.config["static"] || (Ie.calendarContainer.style.top = c + "px", f ? (Ie.calendarContainer.style.left = "auto", Ie.calendarContainer.style.right = h + "px") : (Ie.calendarContainer.style.left = m + "px", Ie.calendarContainer.style.right = "auto"))
          }
        }
      }

      function Me() {
        Ie.config.noCalendar || Ie.isMobile || (Ee(), U())
      }

      function ge() {
        Ie._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || navigator.msMaxTouchPoints !== undefined ? setTimeout(Ie.close, 0) : Ie.close()
      }

      function ve(e) {
        e.preventDefault(), e.stopPropagation();
        var n = function (e) {
            return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("disabled") && !e.classList.contains("notAllowed")
          },
          a = i(e.target, n);
        if (a !== undefined) {
          var r = a,
            o = Ie.latestSelectedDateObj = new Date(r.dateObj.getTime()),
            s = (o.getMonth() < Ie.currentMonth || o.getMonth() > Ie.currentMonth + Ie.config.showMonths - 1) && "range" !== Ie.config.mode;
          if (Ie.selectedDateElem = r, "single" === Ie.config.mode) Ie.selectedDates = [o];
          else if ("multiple" === Ie.config.mode) {
            var d = He(o);
            d ? Ie.selectedDates.splice(parseInt(d), 1) : Ie.selectedDates.push(o)
          } else "range" === Ie.config.mode && (2 === Ie.selectedDates.length && Ie.clear(!1), Ie.selectedDates.push(o), 0 !== t(o, Ie.selectedDates[0], !0) && Ie.selectedDates.sort(function (e, t) {
            return e.getTime() - t.getTime()
          }));
          if (k(), s) {
            var l = Ie.currentYear !== o.getFullYear();
            Ie.currentYear = o.getFullYear(), Ie.currentMonth = o.getMonth(), l && Ye("onYearChange"), Ye("onMonthChange")
          }
          if (Ee(), U(), Oe(), Ie.config.enableTime && setTimeout(function () {
              return Ie.showTimeInput = !0
            }, 50), s || "range" === Ie.config.mode || 1 !== Ie.config.showMonths ? Ie.selectedDateElem && Ie.selectedDateElem.focus() : R(r), Ie.hourElement !== undefined && setTimeout(function () {
              return Ie.hourElement !== undefined && Ie.hourElement.select()
            }, 451), Ie.config.closeOnSelect) {
            var u = "single" === Ie.config.mode && !Ie.config.enableTime,
              c = "range" === Ie.config.mode && 2 === Ie.selectedDates.length && !Ie.config.enableTime;
            (u || c) && ge()
          }
          O()
        }
      }

      function Te(e, t) {
        null !== e && "object" == typeof e ? Object.assign(Ie.config, e) : (Ie.config[e] = t, Ne[e] !== undefined && Ne[e].forEach(function (e) {
          return e()
        })), Ie.redraw(), P()
      }

      function be(e, t) {
        var n = [];
        if (e instanceof Array) n = e.map(function (e) {
          return Ie.parseDate(e, t)
        });
        else if (e instanceof Date || "number" == typeof e) n = [Ie.parseDate(e, t)];
        else if ("string" == typeof e) switch (Ie.config.mode) {
          case "single":
          case "time":
            n = [Ie.parseDate(e, t)];
            break;
          case "multiple":
            n = e.split(Ie.config.conjunction).map(function (e) {
              return Ie.parseDate(e, t)
            });
            break;
          case "range":
            n = e.split(Ie.l10n.rangeSeparator).map(function (e) {
              return Ie.parseDate(e, t)
            })
        } else Ie.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(e)));
        Ie.selectedDates = n.filter(function (e) {
          return e instanceof Date && de(e, !1)
        }), "range" === Ie.config.mode && Ie.selectedDates.sort(function (e, t) {
          return e.getTime() - t.getTime()
        })
      }

      function Se(e, t, n) {
        if (void 0 === t && (t = !1), void 0 === n && (n = Ie.config.dateFormat), 0 !== e && !e || e instanceof Array && 0 === e.length) return Ie.clear(t);
        be(e, n), Ie.showTimeInput = Ie.selectedDates.length > 0, Ie.latestSelectedDateObj = Ie.selectedDates[0], Ie.redraw(), P(), x(), Oe(t), t && Ye("onChange")
      }

      function Le(e) {
        return e.slice().map(function (e) {
          return "string" == typeof e || "number" == typeof e || e instanceof Date ? Ie.parseDate(e, undefined, !0) : e && "object" == typeof e && e.from && e.to ? {
            from: Ie.parseDate(e.from, undefined),
            to: Ie.parseDate(e.to, undefined)
          } : e
        }).filter(function (e) {
          return e
        })
      }

      function we() {
        Ie.selectedDates = [], Ie.now = Ie.parseDate(Ie.config.now) || new Date;
        var e = Ie.config.defaultDate || ("INPUT" !== Ie.input.nodeName && "TEXTAREA" !== Ie.input.nodeName || !Ie.input.placeholder || Ie.input.value !== Ie.input.placeholder ? Ie.input.value : null);
        e && be(e, Ie.config.dateFormat);
        var t = Ie.selectedDates.length > 0 ? Ie.selectedDates[0] : Ie.config.minDate && Ie.config.minDate.getTime() > Ie.now.getTime() ? Ie.config.minDate : Ie.config.maxDate && Ie.config.maxDate.getTime() < Ie.now.getTime() ? Ie.config.maxDate : Ie.now;
        Ie.currentYear = t.getFullYear(), Ie.currentMonth = t.getMonth(), Ie.selectedDates.length > 0 && (Ie.latestSelectedDateObj = Ie.selectedDates[0]), Ie.config.minTime !== undefined && (Ie.config.minTime = Ie.parseDate(Ie.config.minTime, "H:i")), Ie.config.maxTime !== undefined && (Ie.config.maxTime = Ie.parseDate(Ie.config.maxTime, "H:i")), Ie.minDateHasTime = !!Ie.config.minDate && (Ie.config.minDate.getHours() > 0 || Ie.config.minDate.getMinutes() > 0 || Ie.config.minDate.getSeconds() > 0), Ie.maxDateHasTime = !!Ie.config.maxDate && (Ie.config.maxDate.getHours() > 0 || Ie.config.maxDate.getMinutes() > 0 || Ie.config.maxDate.getSeconds() > 0), Object.defineProperty(Ie, "showTimeInput", {
          get: function () {
            return Ie._showTimeInput
          },
          set: function (e) {
            Ie._showTimeInput = e, Ie.calendarContainer && n(Ie.calendarContainer, "showTimeInput", e), Ie.isOpen && ye()
          }
        })
      }

      function De() {
        if (Ie.input = Ie.config.wrap ? s.querySelector("[data-input]") : s, !Ie.input) return void Ie.config.errorHandler(new Error("Invalid input element specified"));
        Ie.input._type = Ie.input.type, Ie.input.type = "text", Ie.input.classList.add("flatpickr-input"), Ie._input = Ie.input, Ie.config.altInput && (Ie.altInput = a(Ie.input.nodeName, Ie.input.className + " " + Ie.config.altInputClass), Ie._input = Ie.altInput, Ie.altInput.placeholder = Ie.input.placeholder, Ie.altInput.disabled = Ie.input.disabled, Ie.altInput.required = Ie.input.required, Ie.altInput.tabIndex = Ie.input.tabIndex, Ie.altInput.type = "text", Ie.input.setAttribute("type", "hidden"), !Ie.config["static"] && Ie.input.parentNode && Ie.input.parentNode.insertBefore(Ie.altInput, Ie.input.nextSibling)), Ie.config.allowInput || Ie._input.setAttribute("readonly", "readonly"), Ie._positionElement = Ie.config.positionElement || Ie._input
      }

      function ke() {
        var e = Ie.config.enableTime ? Ie.config.noCalendar ? "time" : "datetime-local" : "date";
        Ie.mobileInput = a("input", Ie.input.className + " flatpickr-mobile"), Ie.mobileInput.step = Ie.input.getAttribute("step") || "any", Ie.mobileInput.tabIndex = 1, Ie.mobileInput.type = e, Ie.mobileInput.disabled = Ie.input.disabled, Ie.mobileInput.required = Ie.input.required, Ie.mobileInput.placeholder = Ie.input.placeholder, Ie.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", Ie.selectedDates.length > 0 && (Ie.mobileInput.defaultValue = Ie.mobileInput.value = Ie.formatDate(Ie.selectedDates[0], Ie.mobileFormatStr)), Ie.config.minDate && (Ie.mobileInput.min = Ie.formatDate(Ie.config.minDate, "Y-m-d")), Ie.config.maxDate && (Ie.mobileInput.max = Ie.formatDate(Ie.config.maxDate, "Y-m-d")), Ie.input.type = "hidden", Ie.altInput !== undefined && (Ie.altInput.type = "hidden");
        try {
          Ie.input.parentNode && Ie.input.parentNode.insertBefore(Ie.mobileInput, Ie.input.nextSibling)
        } catch (t) {}
        A(Ie.mobileInput, "change", function (e) {
          Ie.setDate(e.target.value, !1, Ie.mobileFormatStr), Ye("onChange"), Ye("onClose")
        })
      }

      function xe(e) {
        if (!0 === Ie.isOpen) return Ie.close();
        Ie.open(e)
      }

      function Ye(e, t) {
        var n = Ie.config[e];
        if (n !== undefined && n.length > 0)
          for (var a = 0; n[a] && a < n.length; a++) n[a](Ie.selectedDates, Ie.input.value, Ie, t);
        "onChange" === e && (Ie.input.dispatchEvent(Ce("change")), Ie.input.dispatchEvent(Ce("input")))
      }

      function Ce(e) {
        var t = document.createEvent("Event");
        return t.initEvent(e, !0, !0), t
      }

      function He(e) {
        for (var n = 0; n < Ie.selectedDates.length; n++)
          if (0 === t(Ie.selectedDates[n], e)) return "" + n;
        return !1
      }

      function Ae(e) {
        return !("range" !== Ie.config.mode || Ie.selectedDates.length < 2) && (t(e, Ie.selectedDates[0]) >= 0 && t(e, Ie.selectedDates[1]) <= 0)
      }

      function Ee() {
        Ie.config.noCalendar || Ie.isMobile || !Ie.monthNav || (Ie.yearElements.forEach(function (e, t) {
          var n = new Date(Ie.currentYear, Ie.currentMonth, 1);
          n.setMonth(Ie.currentMonth + t), Ie.monthElements[t].textContent = h(n.getMonth(), Ie.config.shorthandCurrentMonth, Ie.l10n) + " ", e.value = n.getFullYear().toString()
        }), Ie._hidePrevMonthArrow = Ie.config.minDate !== undefined && (Ie.currentYear === Ie.config.minDate.getFullYear() ? Ie.currentMonth <= Ie.config.minDate.getMonth() : Ie.currentYear < Ie.config.minDate.getFullYear()), Ie._hideNextMonthArrow = Ie.config.maxDate !== undefined && (Ie.currentYear === Ie.config.maxDate.getFullYear() ? Ie.currentMonth + 1 > Ie.config.maxDate.getMonth() : Ie.currentYear > Ie.config.maxDate.getFullYear()))
      }

      function Oe(e) {
        if (void 0 === e && (e = !0), 0 === Ie.selectedDates.length) return Ie.clear(e);
        Ie.mobileInput !== undefined && Ie.mobileFormatStr && (Ie.mobileInput.value = Ie.latestSelectedDateObj !== undefined ? Ie.formatDate(Ie.latestSelectedDateObj, Ie.mobileFormatStr) : "");
        var t = "range" !== Ie.config.mode ? Ie.config.conjunction : Ie.l10n.rangeSeparator;
        Ie.input.value = Ie.selectedDates.map(function (e) {
          return Ie.formatDate(e, Ie.config.dateFormat)
        }).join(t), Ie.altInput !== undefined && (Ie.altInput.value = Ie.selectedDates.map(function (e) {
          return Ie.formatDate(e, Ie.config.altFormat)
        }).join(t)), !1 !== e && Ye("onValueUpdate")
      }

      function Ge(e) {
        e.preventDefault();
        var t = Ie.prevMonthNav.contains(e.target),
          n = Ie.nextMonthNav.contains(e.target);
        t || n ? te(t ? -1 : 1) : Ie.yearElements.indexOf(e.target) >= 0 ? e.target.select() : e.target.classList.contains("arrowUp") ? Ie.changeYear(Ie.currentYear + 1) : e.target.classList.contains("arrowDown") && Ie.changeYear(Ie.currentYear - 1)
      }

      function Pe(e) {
        e.preventDefault();
        var t = "keydown" === e.type,
          n = e.target;
        Ie.amPM !== undefined && e.target === Ie.amPM && (Ie.amPM.textContent = Ie.l10n.amPM[u(Ie.amPM.textContent === Ie.l10n.amPM[0])]);
        var a = parseFloat(n.getAttribute("data-min")),
          r = parseFloat(n.getAttribute("data-max")),
          i = parseFloat(n.getAttribute("data-step")),
          o = parseInt(n.value, 10),
          s = e.delta || (t ? 38 === e.which ? 1 : -1 : 0),
          d = o + i * s;
        if ("undefined" != typeof n.value && 2 === n.value.length) {
          var c = n === Ie.hourElement,
            m = n === Ie.minuteElement;
          d < a ? (d = r + d + u(!c) + (u(c) && u(!Ie.amPM)), m && N(undefined, -1, Ie.hourElement)) : d > r && (d = n === Ie.hourElement ? d - r - u(!Ie.amPM) : a, m && N(undefined, 1, Ie.hourElement)), Ie.amPM && c && (1 === i ? d + o === 23 : Math.abs(d - o) > i) && (Ie.amPM.textContent = Ie.l10n.amPM[u(Ie.amPM.textContent === Ie.l10n.amPM[0])]), n.value = l(d)
        }
      }
      var Ie = {
        config: Object.assign({}, w.defaultConfig),
        l10n: y
      };
      Ie.parseDate = g({
        config: Ie.config,
        l10n: Ie.l10n
      }), Ie._handlers = [], Ie._bind = A, Ie._setHoursFromDate = x, Ie._positionCalendar = ye, Ie.changeMonth = te, Ie.changeYear = se, Ie.clear = ne, Ie.close = ae, Ie._createElement = a, Ie.destroy = re, Ie.isEnabled = de, Ie.jumpToDate = P, Ie.open = he, Ie.redraw = Me, Ie.set = Te, Ie.setDate = Se, Ie.toggle = xe;
      var Ne = {
        locale: [pe, Q],
        showMonths: [Z, p, q]
      };
      return function () {
        Ie.element = Ie.input = s, Ie.isOpen = !1, _e(), pe(), De(), we(), m(), Ie.isMobile || j(), G(), (Ie.selectedDates.length || Ie.config.noCalendar) && (Ie.config.enableTime && x(Ie.config.noCalendar ? Ie.latestSelectedDateObj || Ie.config.minDate : undefined), Oe(!1)), p(), Ie.showTimeInput = Ie.selectedDates.length > 0 || Ie.config.noCalendar;
        var e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        !Ie.isMobile && e && ye(), Ye("onReady")
      }(), Ie
    }

    function d(e, t) {
      for (var n = Array.prototype.slice.call(e), a = [], r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          if (null !== i.getAttribute("data-fp-omit")) continue;
          i._flatpickr !== undefined && (i._flatpickr.destroy(), i._flatpickr = undefined), i._flatpickr = s(i, t || {}), a.push(i._flatpickr)
        } catch (o) {
          console.error(o)
        }
      }
      return 1 === a.length ? a[0] : a
    }
    var l = function (e) {
        return ("0" + e).slice(-2)
      },
      u = function (e) {
        return !0 === e ? 1 : 0
      },
      c = function (e) {
        return e instanceof Array ? e : [e]
      },
      m = function () {
        return undefined
      },
      h = function (e, t, n) {
        return n.months[t ? "shorthand" : "longhand"][e]
      },
      f = {
        D: m,
        F: function (e, t, n) {
          e.setMonth(n.months.longhand.indexOf(t))
        },
        G: function (e, t) {
          e.setHours(parseFloat(t))
        },
        H: function (e, t) {
          e.setHours(parseFloat(t))
        },
        J: function (e, t) {
          e.setDate(parseFloat(t))
        },
        K: function (e, t, n) {
          e.setHours(e.getHours() % 12 + 12 * u(new RegExp(n.amPM[1], "i").test(t)))
        },
        M: function (e, t, n) {
          e.setMonth(n.months.shorthand.indexOf(t))
        },
        S: function (e, t) {
          e.setSeconds(parseFloat(t))
        },
        U: function (e, t) {
          return new Date(1e3 * parseFloat(t))
        },
        W: function (e, t) {
          var n = parseInt(t);
          return new Date(e.getFullYear(), 0, 2 + 7 * (n - 1), 0, 0, 0, 0)
        },
        Y: function (e, t) {
          e.setFullYear(parseFloat(t))
        },
        Z: function (e, t) {
          return new Date(t)
        },
        d: function (e, t) {
          e.setDate(parseFloat(t))
        },
        h: function (e, t) {
          e.setHours(parseFloat(t))
        },
        i: function (e, t) {
          e.setMinutes(parseFloat(t))
        },
        j: function (e, t) {
          e.setDate(parseFloat(t))
        },
        l: m,
        m: function (e, t) {
          e.setMonth(parseFloat(t) - 1)
        },
        n: function (e, t) {
          e.setMonth(parseFloat(t) - 1)
        },
        s: function (e, t) {
          e.setSeconds(parseFloat(t))
        },
        w: m,
        y: function (e, t) {
          e.setFullYear(2e3 + parseFloat(t))
        }
      },
      _ = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
      },
      p = {
        Z: function (e) {
          return e.toISOString()
        },
        D: function (e, t, n) {
          return t.weekdays.shorthand[p.w(e, t, n)]
        },
        F: function (e, t, n) {
          return h(p.n(e, t, n) - 1, !1, t)
        },
        G: function (e, t, n) {
          return l(p.h(e, t, n))
        },
        H: function (e) {
          return l(e.getHours())
        },
        J: function (e, t) {
          return t.ordinal !== undefined ? e.getDate() + t.ordinal(e.getDate()) : e.getDate()
        },
        K: function (e, t) {
          return t.amPM[u(e.getHours() > 11)]
        },
        M: function (e, t) {
          return h(e.getMonth(), !0, t)
        },
        S: function (e) {
          return l(e.getSeconds())
        },
        U: function (e) {
          return e.getTime() / 1e3
        },
        W: function (e, t, n) {
          return n.getWeek(e)
        },
        Y: function (e) {
          return e.getFullYear()
        },
        d: function (e) {
          return l(e.getDate())
        },
        h: function (e) {
          return e.getHours() % 12 ? e.getHours() % 12 : 12
        },
        i: function (e) {
          return l(e.getMinutes())
        },
        j: function (e) {
          return e.getDate()
        },
        l: function (e, t) {
          return t.weekdays.longhand[e.getDay()]
        },
        m: function (e) {
          return l(e.getMonth() + 1)
        },
        n: function (e) {
          return e.getMonth() + 1
        },
        s: function (e) {
          return e.getSeconds()
        },
        w: function (e) {
          return e.getDay()
        },
        y: function (e) {
          return String(e.getFullYear()).substring(2)
        }
      },
      y = {
        weekdays: {
          shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (e) {
          var t = e % 100;
          if (t > 3 && t < 21) return "th";
          switch (t % 10) {
            case 1:
              return "st";
            case 2:
              return "nd";
            case 3:
              return "rd";
            default:
              return "th"
          }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year"
      },
      M = function (e) {
        var t = e.config,
          n = void 0 === t ? S : t,
          a = e.l10n,
          r = void 0 === a ? y : a;
        return function (e, t, a) {
          if (n.formatDate !== undefined) return n.formatDate(e, t);
          var i = a || r;
          return t.split("").map(function (t, a, r) {
            return p[t] && "\\" !== r[a - 1] ? p[t](e, i, n) : "\\" !== t ? t : ""
          }).join("")
        }
      },
      g = function (e) {
        var t = e.config,
          n = void 0 === t ? S : t,
          a = e.l10n,
          r = void 0 === a ? y : a;
        return function (e, t, a, i) {
          if (0 !== e && !e) return undefined;
          var o, s = i || r,
            d = e;
          if (e instanceof Date) o = new Date(e.getTime());
          else if ("string" != typeof e && e.toFixed !== undefined) o = new Date(e);
          else if ("string" == typeof e) {
            var l = t || (n || S).dateFormat,
              u = String(e).trim();
            if ("today" === u) o = new Date, a = !0;
            else if (/Z$/.test(u) || /GMT$/.test(u)) o = new Date(e);
            else if (n && n.parseDate) o = n.parseDate(e, l);
            else {
              o = n && n.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0);
              for (var c, m = [], h = 0, p = 0, y = ""; h < l.length; h++) {
                var M = l[h],
                  g = "\\" === M,
                  v = "\\" === l[h - 1] || g;
                if (_[M] && !v) {
                  y += _[M];
                  var T = new RegExp(y).exec(e);
                  T && (c = !0) && m["Y" !== M ? "push" : "unshift"]({
                    fn: f[M],
                    val: T[++p]
                  })
                } else g || (y += ".");
                m.forEach(function (e) {
                  var t = e.fn,
                    n = e.val;
                  return o = t(o, n, s) || o
                })
              }
              o = c ? o : undefined
            }
          }
          return o instanceof Date && !isNaN(o.getTime()) ? (!0 === a && o.setHours(0, 0, 0, 0), o) : (n.errorHandler(new Error("Invalid date provided: " + d)), undefined)
        }
      },
      v = function (e) {
        var t = new Date(e.getTime());
        t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
        var n = new Date(t.getFullYear(), 0, 4);
        return 1 + Math.round(((t.getTime() - n.getTime()) / 864e5 - 3 + (n.getDay() + 6) % 7) / 7)
      },
      T = function (e, t, n) {
        return e > Math.min(t, n) && e < Math.max(t, n)
      },
      b = {
        DAY: 864e5
      },
      S = {
        _disable: [],
        _enable: [],
        allowInput: !1,
        altFormat: "F j, Y",
        altInput: !1,
        altInputClass: "form-control input",
        animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
        ariaDateFormat: "F j, Y",
        clickOpens: !0,
        closeOnSelect: !0,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: !1,
        enable: [],
        enableSeconds: !1,
        enableTime: !1,
        errorHandler: function (e) {
          return "undefined" != typeof console && console.warn(e)
        },
        getWeek: v,
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: !1,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: !1,
        now: new Date,
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: !1,
        showMonths: 1,
        "static": !1,
        time_24hr: !1,
        weekNumbers: !1,
        wrap: !1
      };
    "function" != typeof Object.assign && (Object.assign = function (e) {
      if (!e) throw TypeError("Cannot convert undefined or null to object");
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
      for (var r = 0; r < n.length; r++) ! function () {
        var t = n[r];
        t && Object.keys(t).forEach(function (n) {
          return e[n] = t[n]
        })
      }();
      return e
    });
    var L = 300;
    "undefined" != typeof HTMLElement && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (e) {
      return d(this, e)
    }, HTMLElement.prototype.flatpickr = function (e) {
      return d([this], e)
    });
    var w = function (e, t) {
      return e instanceof NodeList ? d(e, t) : "string" == typeof e ? d(window.document.querySelectorAll(e), t) : d([e], t)
    };
    return w.defaultConfig = S, w.l10ns = {
      en: Object.assign({}, y),
      "default": Object.assign({}, y)
    }, w.localize = function (e) {
      w.l10ns["default"] = Object.assign({}, w.l10ns["default"], e)
    }, w.setDefaults = function (e) {
      w.defaultConfig = Object.assign({}, w.defaultConfig, e)
    }, w.parseDate = g({}), w.formatDate = M({}), w.compareDates = t, "undefined" != typeof jQuery && (jQuery.fn.flatpickr = function (e) {
      return d(this, e)
    }), Date.prototype.fp_incr = function (e) {
      return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e))
    }, "undefined" != typeof window && (window.flatpickr = w), w
  })
}, function (e, t, n) { /* flatpickr v4.5.1, @license MIT */
  ! function (e, n) {
    n(t)
  }(0, function (e) {
    "use strict";
    var t = "undefined" != typeof window && window.flatpickr !== undefined ? window.flatpickr : {
        l10ns: {}
      },
      n = {
        weekdays: {
          shorthand: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
          longhand: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
        },
        months: {
          shorthand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
          longhand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
        },
        rangeSeparator: " 至 ",
        weekAbbreviation: "周",
        scrollTitle: "滚动切换",
        toggleTitle: "点击切换 12/24 小时时制"
      };
    t.l10ns.zh = n;
    var a = t.l10ns;
    e.Mandarin = n, e["default"] = a, Object.defineProperty(e, "__esModule", {
      value: !0
    })
  })
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(3),
    i = a(r),
    o = n(2),
    s = a(o);
  n(501);
  var d = function (e) {
    var t = {
        confirmIcon: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='17' height='17' viewBox='0 0 17 17'> <g> </g> <path d='M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z' fill='#000000' /> </svg>",
        confirmText: "确定 ",
        showAlways: !0,
        theme: "light"
      },
      n = {};
    for (var a in t) n[a] = e && e[a] !== undefined ? e[a] : t[a];
    var r = null,
      o = function () {
        r.setDate(new Date, !0), r.close()
      },
      d = function () {
        r.setDate(null, !0), r.close()
      };
    return function (e) {
      var t = {
        onKeyDown: function (t, n, a, r) {
          e.config.enableTime && "Tab" === r.key && r.target === e.amPM ? (r.preventDefault(), e.confirmContainer.focus()) : "Enter" === r.key && r.target === e.confirmContainer && e.close()
        },
        onReady: function () {
          if (e.calendarContainer !== undefined) {
            r = this;
            var t = e._createElement("div", "flatpickr-confirm " + (n.showAlways ? "visible" : "") + " " + n.theme + "Theme", "");
            t.classList.add("visible");
            var a = document.createElement("div");
            a.className = "left", a.innerHTML = "清除", i["default"].registerEvent(a, "click", function (e) {
              d(), s["default"].preventDefault(e), s["default"].stopPropagation(e)
            }), t.appendChild(a);
            var l = document.createElement("div");
            l.className = "center", l.innerHTML = "今天", i["default"].registerEvent(l, "click", function (e) {
              o(), s["default"].preventDefault(e), s["default"].stopPropagation(e)
            }), t.appendChild(l);
            var u = document.createElement("div");
            u.className = "right", u.innerHTML = n.confirmText + n.confirmIcon, u.tabIndex = -1, u.addEventListener("click", e.close), i["default"].registerEvent(u, "click", function (t) {
              e.close(), s["default"].preventDefault(t), s["default"].stopPropagation(t)
            }), t.appendChild(u), e.confirmContainer = t, e.calendarContainer.appendChild(e.confirmContainer)
          }
        }
      };
      return n.showAlways || (t.onChange = function (t, n) {
        var a = e.config.enableTime || "multiple" === e.config.mode;
        if (n && !e.config.inline && a) return e.confirmContainer.classList.add("visible");
        e.confirmContainer && e.confirmContainer.classList.remove("visible")
      }), t
    }
  };
  e.exports = d
}, function (e, t, n) {
  var a = n(502);
  "string" == typeof a && (a = [
    [e.i, a, ""]
  ]);
  var r = {
    hmr: !0
  };
  r.transform = void 0, r.insertInto = undefined;
  n(27)(a, r);
  a.locals && (e.exports = a.locals)
}, function (e, t, n) {
  t = e.exports = n(26)(!1), t.push([e.i, ".flatpickr-confirm {\r\n  height: 40px;\r\n  max-height: 0px;\r\n  visibility: hidden;\r\n  display: flex;\r\n  /*justify-content: center;*/\r\n  justify-content: inherit;\r\n  align-items: inherit;\r\n  cursor: pointer;\r\n  background: rgba(240, 240, 240, 1);\r\n  border-left: 1px solid rgba(72, 72, 72, 0.2);\r\n  border-right: 1px solid rgba(72, 72, 72, 0.2);\r\n  border-bottom: 1px solid rgba(72, 72, 72, 0.2);\r\n  border-radius: 0 0 5px 5px;\r\n}\r\n\r\n.flatpickr-confirm svg path {\r\n  fill: inherit;\r\n}\r\n\r\n.flatpickr-confirm div:hover {\r\n  background-color: #cdcdcd;\r\n}\r\n\r\n.flatpickr-confirm .left {\r\n  line-height: 40px;\r\n  width: 33%;\r\n}\r\n\r\n.flatpickr-confirm .right {\r\n  width: 33%;\r\n  line-height: 40px;\r\n}\r\n\r\n.flatpickr-confirm .center {\r\n  width: 34%;\r\n  line-height: 40px;\r\n}\r\n\r\n.flatpickr-confirm.darkTheme {\r\n  color: white;\r\n  fill: white;\r\n}\r\n\r\n.flatpickr-confirm.visible {\r\n  max-height: 40px;\r\n  visibility: visible\r\n}\r\n\r\n.flatpickr-calendar {\r\n  background: #fff;\r\n}\r\n\r\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\r\n  /*border-bottom: 1px solid rgba(72,72,72,0.2);*/\r\n  border-bottom: none;\r\n}\r\n\r\n.flatpickr-time {\r\n  border-radius: 0;\r\n}", ""])
}, function (e, t, n) {
  var a = n(504);
  "string" == typeof a && (a = [
    [e.i, a, ""]
  ]);
  var r = {
    hmr: !0
  };
  r.transform = void 0, r.insertInto = undefined;
  n(27)(a, r);
  a.locals && (e.exports = a.locals)
}, function (e, t, n) {
  t = e.exports = n(26)(!1), t.push([e.i, '.flatpickr-calendar {\n  background: transparent;\n  opacity: 0;\n  display: none;\n  text-align: center;\n  visibility: hidden;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n          box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  max-height: 640px;\n  visibility: visible;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {\n  -webkit-box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n          box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-innerContainer {\n  border-bottom: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  border: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: \'\';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.rightMost:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #42a5f5;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #42a5f5;\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-months {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-months .flatpickr-month {\n  border-radius: 5px 5px 0 0;\n  background: #42a5f5;\n  color: #fff;\n  fill: #fff;\n  height: 28px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.flatpickr-months .flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  line-height: 16px;\n  height: 28px;\n  padding: 10px;\n  z-index: 3;\n  color: #fff;\n  fill: #fff;\n}\n.flatpickr-months .flatpickr-prev-month.disabled,\n.flatpickr-months .flatpickr-next-month.disabled {\n  display: none;\n}\n.flatpickr-months .flatpickr-prev-month i,\n.flatpickr-months .flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {\n/*\n      /*rtl:begin:ignore*/\n/*\n      */\n  left: 0;\n/*\n      /*rtl:end:ignore*/\n/*\n      */\n}\n/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-next-month {\n/*\n      /*rtl:begin:ignore*/\n/*\n      */\n  right: 0;\n/*\n      /*rtl:end:ignore*/\n/*\n      */\n}\n/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month:hover,\n.flatpickr-months .flatpickr-next-month:hover {\n  color: #bbb;\n}\n.flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-months .flatpickr-prev-month svg,\n.flatpickr-months .flatpickr-next-month svg {\n  width: 14px;\n  height: 14px;\n}\n.flatpickr-months .flatpickr-prev-month svg path,\n.flatpickr-months .flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper input::-ms-clear {\n  display: none;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(72,72,72,0.15);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: "";\n  position: absolute;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(72,72,72,0.6);\n  top: 26%;\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(72,72,72,0.6);\n  top: 40%;\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(255,255,255,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 6.16px 0 0 0;\n  line-height: 1;\n  height: 28px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: #fff;\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  cursor: text;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(255,255,255,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-weekdays {\n  background: #42a5f5;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 28px;\n}\n.flatpickr-weekdays .flatpickr-weekdaycontainer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: #42a5f5;\n  color: rgba(0,0,0,0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  width: 307.875px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n  border-right: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.dayContainer + .dayContainer {\n  -webkit-box-shadow: -1px 0 0 rgba(72,72,72,0.2);\n          box-shadow: -1px 0 0 rgba(72,72,72,0.2);\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #484848;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n      -ms-flex-preferred-size: 14.2857143%;\n          flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e2e2e2;\n  border-color: #e2e2e2;\n}\n.flatpickr-day.today {\n  border-color: #bbb;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #bbb;\n  background: #bbb;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #42a5f5;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  border-color: #42a5f5;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  -webkit-box-shadow: -10px 0 0 #42a5f5;\n          box-shadow: -10px 0 0 #42a5f5;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n          box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(72,72,72,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover {\n  cursor: not-allowed;\n  color: rgba(72,72,72,0.1);\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #42a5f5, 5px 0 0 #42a5f5;\n          box-shadow: -5px 0 0 #42a5f5, 5px 0 0 #42a5f5;\n}\n.flatpickr-day.hidden {\n  visibility: hidden;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  display: inline-block;\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day,\n.flatpickr-weekwrapper span.flatpickr-day:hover {\n  display: block;\n  width: 100%;\n  max-width: none;\n  color: rgba(72,72,72,0.3);\n  background: transparent;\n  cursor: default;\n  border: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  background: #fff;\n  border-bottom: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background: #fff;\n  border-radius: 0 0 5px 5px;\n}\n.flatpickr-time:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #484848;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #484848;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  color: #484848;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  display: inline-block;\n  float: left;\n  line-height: inherit;\n  color: #484848;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time input:hover,\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time input:focus,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #efefef;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n', ""])
}, function (e, t, n) {
  var a = n(506);
  "string" == typeof a && (a = [
    [e.i, a, ""]
  ]);
  var r = {
    hmr: !0
  };
  r.transform = void 0, r.insertInto = undefined;
  n(27)(a, r);
  a.locals && (e.exports = a.locals)
}, function (e, t, n) {
  t = e.exports = n(26)(!1), t.push([e.i, "span.flatpickr-weekday {\n  display: inline-block;\n  width: 14.2857143%;\n}\nspan.flatpickr-day {\n  width: 14.2857143%;\n  margin: 0 2.491071428571428px;\n}\n@media screen and (min-width: 0\\0) {\n  div.flatpickr-current-month {\n    padding-top: 0px !important;\n  }\n}\n", ""])
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(7),
    i = a(r),
    o = n(16),
    s = a(o),
    d = n(20),
    l = a(d),
    u = n(56),
    c = a(u),
    m = n(4),
    h = n(3),
    f = a(h),
    _ = n(2),
    p = (a(_), n(198)),
    y = (a(p), n(38)),
    M = (a(y), n(55), "section"),
    g = function (e) {
      var t = e.querySelectorAll("[contenteditable=true]");
      f["default"].each(t, function (e) {
        e.setAttribute("back-isContentEditable", !0), e.setAttribute("contenteditable", !1)
      });
      var n = e.querySelectorAll(".krcd-ctrl");
      f["default"].each(n, function (e) {
        e.setAttribute("krcd-readonly", !0)
      })
    },
    v = function (e) {
      var t = e.querySelectorAll("[back-isContentEditable=true]");
      f["default"].each(t, function (e) {
        e.removeAttribute("back-isContentEditable"), e.setAttribute("contenteditable", !0)
      });
      var n = e.querySelectorAll(".krcd-ctrl");
      f["default"].each(n, function (e) {
        e.removeAttribute("krcd-readonly")
      })
    },
    T = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      if (e) {
        e = e.toUpperCase();
        var n = this.getCtrlElement(),
          a = this.getValueElement(),
          r = this.getOpt();
        (t || r.mode !== e) && ("READONLY" === e ? g.call(this, a) : v.call(this, a), r.mode = e, t && (r.originalmode = e), this.setOpt(r), a.setAttribute("contenteditable", "EDITOR" === e), n.style.visibility = "UNVISIBLE" === e ? "hidden" : "", n.style.display = "HIDE" === e ? "none" : "")
      }
    },
    b = function (e) {
      function t(n, a, r) {
        (0, i["default"])(this, t);
        var o = (0, s["default"])(this, e.call(this, n, r, a, M));
        o.TYPE_NAME = M;
        var d = e.prototype.getOpt.call(o),
          l = e.prototype.getCtrlElement.call(o),
          u = e.prototype.getValueElement.call(o);
        return l && u && (l.contentEditable = !1, u.contentEditable = !e.prototype.isReadonly.call(o), d && d.desc && u.setAttribute("title", d.desc || "")), T.call(o, d.mode), o
      }
      return (0, l["default"])(t, e), t.prototype.render = function () {
        T.call(this, e.prototype.getOpt.call(this).mode)
      }, t.prototype.setValue = function (t) {
        var n = e.prototype.getValueElement.call(this);
        n && (n.innerHTML = t || "")
      }, t.prototype.getValue = function () {
        var t = e.prototype.getValueElement.call(this);
        if (t) return t.innerHTML
      }, t.prototype.getTextValue = function () {
        var t = e.prototype.getValueElement.call(this);
        if (t) return t.innerText
      }, t.prototype.html = function (e) {
        if (!e) return this.getValue();
        this.setValue(e)
      }, t.prototype.mode = function (t) {
        console.log("333")
        var n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        if (!t) return e.prototype.getOpt.call(this).mode;
        T.call(this, t, n)
      }, t.prototype.reset = function () {
        this.mode(e.prototype.getOpt.call(this).originalmode, !0)
      }, t.prototype.getControl = function (t) {
        var n = e.prototype.getValueElement.call(this);
        return this[m.ctrl_krcd].getControlById(t, n)
      }, t
    }(c["default"]);
  e.exports = {
    type: M,
    ctrl: b
  }
}, function (e, t, n) {
  "use strict";
  var a = {
    Backspace: 8,
    Tab: 9,
    Enter: 13,
    Shift: 16,
    Control: 17,
    Alt: 18,
    CapsLock: 20,
    Esc: 27,
    Spacebar: 32,
    PageUp: 33,
    PageDown: 34,
    End: 35,
    Home: 36,
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
    Insert: 45,
    Del: 46,
    NumLock: 144,
    Cmd: 91,
    "=": 187,
    "-": 189,
    b: 66,
    i: 73,
    z: 90,
    y: 89,
    v: 86,
    x: 88,
    s: 83,
    n: 78
  };
  e.exports = a
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(7),
    i = a(r),
    o = n(16),
    s = a(o),
    d = n(20),
    l = a(d),
    u = n(56),
    c = a(u),
    m = n(4),
    h = n(3),
    f = a(h),
    _ = n(2),
    p = a(_),
    y = n(198),
    M = a(y),
    g = n(38),
    v = a(g),
    T = "checkbox",
    b = function (e) {
      function t(n, a, r) {
        (0, i["default"])(this, t);
        var o = (0, s["default"])(this, e.call(this, n, r, a));
        o.TYPE_NAME = T;
        var d = e.prototype.getOpt.call(o),
          l = e.prototype.getCtrlElement.call(o),
          u = e.prototype.getValueElement.call(o);
        return l && u && (l.contentEditable = !1, u.contentEditable = !(e.prototype.isReadonly.call(o) || d && d.remotedata && 0 !== d.remotedata.url.length), d && d.desc && u.setAttribute("title", d.desc)), p["default"].removeClasses(u, "krcd-warning"), o
      }
      return (0, l["default"])(t, e), t.prototype.render = function () {
        var t = arguments.length > 0 && arguments[0] !== undefined && arguments[0],
          n = e.prototype.getOpt.call(this),
          a = this.getValue() || [],
          r = e.prototype.getCtrlElement.call(this),
          i = e.prototype.getValueElement.call(this),
          o = void 0,
          s = void 0;
        n && n.remotedata && n.remotedata.url.length > 0 ? (o = [], s = r ? f["default"].str2json(r.getAttribute("bindingdata")) : [], f["default"].each(s, function (e) {
          var t = !1;
          f["default"].each(a, function (n) {
            if (n.value === e.value) return t = !0, !1
          }), o.push('<label contenteditable="false"><input type="checkbox" ' + (t ? ' checked="checked" ' : "") + ' value="' + v["default"].encryptStr(f["default"].json2str(e)) + '">' + e.label + "</label>")
        }), i && (i.innerHTML = o.join(""))) : t && (o = [], s = n.bindingdata, r && (r.setAttribute("bindingdata", v["default"].encryptStr(f["default"].json2str(s))), r.setAttribute("krcd-value", "")), f["default"].each(s, function (e) {
          var t = !1;
          f["default"].each(a, function (n) {
            if (n.value === e.value) return t = !0, !1
          }), o.push('<label contenteditable="false"><input type="checkbox" ' + (t ? ' checked="checked" ' : "") + ' value="' + v["default"].encryptStr(f["default"].json2str(e)) + '">' + e.label + "</label>")
        }), i && (i.innerHTML = o.join("")))
      }, t.prototype.setValue = function (t) {
        var n = e.prototype.getCtrlElement.call(this);
        n && (e.prototype._reviseChangeValue.call(this), null === t && (t = "[]"), n.setAttribute("krcd-value", v["default"].encryptStr(f["default"].isString(t) ? t : f["default"].json2str(t))))
      }, t.prototype.getValue = function () {
        var t = e.prototype.getCtrlElement.call(this);
        if (t) {
          var n = f["default"].str2json(v["default"].decryptStr(t.getAttribute("krcd-value")));
          return n || []
        }
      }, t.prototype.focus = function () {}, t.prototype.click = function (t) {
        if (t && t.target && "INPUT" === t.target.nodeName && "checkbox" === t.target.type) {
          var n = t.target;
          n.checked ? n.setAttribute("checked", "checked") : n.removeAttribute("checked");
          var a = e.prototype.getValueElement.call(this);
          if (a) {
            var r = a.querySelectorAll("input[type=checkbox]"),
              i = [];
            f["default"].each(r, function (e) {
              e.checked && i.push(f["default"].str2json(v["default"].decryptStr(e.value)))
            }), this.setValue(i)
          }
          var o = e.prototype.getOpt.call(this);
          if (!o || !o.remotedata || 0 === o.remotedata.url.length) {
            var s = n.parentElement,
              d = void 0;
            s.previousSibling && "#text" === s.previousSibling.nodeName ? d = s.previousSibling : (d = document.createTextNode(p["default"].specialStr), s.parentElement.insertBefore(d, s));
            var l = this[m.ctrl_krcd][m.__private__].selection;
            if (l) {
              l.getRange().setStartAtLast(d).setCursor()
            }
          }
        }
      }, t.prototype.keydown = function (t) {
        var n = p["default"].formatEvt(t),
          a = n.evt,
          r = n.kc;
        if (this.isReadonly()) return p["default"].preventDefault(a), void p["default"].stopPropagation(a);
        M["default"].Tab === r && (a.shiftKey ? e.prototype.triggerPreviousCtrl.call(this) : e.prototype.triggerNextCtrl.call(this), p["default"].preventDefault(a), p["default"].stopPropagation(a))
      }, t.prototype.keyup = function (e) {}, t.prototype.blur = function () {}, t
    }(c["default"]);
  e.exports = {
    type: T,
    ctrl: b
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(7),
    i = a(r),
    o = n(16),
    s = a(o),
    d = n(20),
    l = a(d),
    u = n(56),
    c = a(u),
    m = n(4),
    h = n(3),
    f = a(h),
    _ = n(2),
    p = a(_),
    y = n(198),
    M = a(y),
    g = n(38),
    v = a(g),
    T = "radio",
    b = function (e) {
      function t(n, a, r) {
        (0, i["default"])(this, t);
        var o = (0, s["default"])(this, e.call(this, n, r, a));
        o.TYPE_NAME = T;
        var d = e.prototype.getOpt.call(o),
          l = e.prototype.getCtrlElement.call(o),
          u = e.prototype.getValueElement.call(o);
        return l && u && (l.contentEditable = !1, u.contentEditable = !(e.prototype.isReadonly.call(o) || d && d.remotedata && 0 !== d.remotedata.url.length), d && d.desc && u.setAttribute("title", d.desc)), p["default"].removeClasses(u, "krcd-warning"), o
      }
      return (0, l["default"])(t, e), t.prototype.render = function () {
        var t = arguments.length > 0 && arguments[0] !== undefined && arguments[0],
          n = e.prototype.getOpt.call(this),
          a = this.getValue(),
          r = f["default"].getUUID(),
          i = e.prototype.getCtrlElement.call(this),
          o = e.prototype.getValueElement.call(this),
          s = void 0,
          d = void 0;
        n && n.remotedata && n.remotedata.url.length > 0 ? (s = [], d = i ? f["default"].str2json(i.getAttribute("bindingdata")) : [], f["default"].each(d, function (e) {
          var t = !!a && a.value === e;
          s.push('<label contenteditable="false"><input name="radio_' + r + '" type="radio" ' + (t ? ' checked="checked" ' : "") + ' value="' + v["default"].encryptStr(f["default"].json2str(e)) + '">' + e.label + "</label>")
        }), o && (o.innerHTML = s.join(""))) : t && (s = [], d = n.bindingdata, i && (i.setAttribute("bindingdata", v["default"].encryptStr(f["default"].json2str(d))), i.setAttribute("krcd-value", "")), f["default"].each(d, function (e) {
          var t = !!a && a.value === e;
          s.push('<label contenteditable="false"><input name="radio_' + r + '" type="radio" ' + (t ? ' checked="checked" ' : "") + ' value="' + v["default"].encryptStr(f["default"].json2str(e)) + '">' + e.label + "</label>")
        }), o && (o.innerHTML = s.join("")))
      }, t.prototype.setValue = function (t) {
        var n = e.prototype.getCtrlElement.call(this);
        n && (e.prototype._reviseChangeValue.call(this), null === t && (t = ""), n.setAttribute("krcd-value", v["default"].encryptStr(f["default"].isString(t) ? t : f["default"].json2str(t))))
      }, t.prototype.getValue = function () {
        var t = e.prototype.getCtrlElement.call(this);
        if (t) return f["default"].str2json(v["default"].decryptStr(t.getAttribute("krcd-value")))
      }, t.prototype.focus = function () {}, t.prototype.click = function (t) {
        if (t && t.target && "INPUT" === t.target.nodeName && "radio" === t.target.type) {
          var n = t.target,
            a = e.prototype.getValueElement.call(this).querySelectorAll("input[type=radio]");
          f["default"].each(a, function (e) {
            e.removeAttribute("checked")
          }), n.setAttribute("checked", "checked");
          var r = f["default"].str2json(v["default"].decryptStr(n.value));
          this.setValue(r);
          var i = e.prototype.getOpt.call(this);
          if (!i || !i.remotedata || 0 === i.remotedata.url.length) {
            var o = n.parentElement,
              s = void 0;
            o.previousSibling && "#text" === o.previousSibling.nodeName ? s = o.previousSibling : (s = document.createTextNode(p["default"].specialStr), o.parentElement.insertBefore(s, o));
            var d = this[m.ctrl_krcd][m.__private__].selection;
            if (d) {
              d.getRange().setStartAtLast(s).setCursor()
            }
          }
        }
      }, t.prototype.keydown = function (t) {
        var n = p["default"].formatEvt(t),
          a = n.evt,
          r = n.kc;
        if (this.isReadonly()) return p["default"].preventDefault(a), void p["default"].stopPropagation(a);
        M["default"].Tab === r && (a.shiftKey ? e.prototype.triggerPreviousCtrl.call(this) : e.prototype.triggerNextCtrl.call(this), p["default"].preventDefault(a), p["default"].stopPropagation(a))
      }, t.prototype.keyup = function (e) {}, t.prototype.blur = function () {}, t
    }(c["default"]);
  e.exports = {
    type: T,
    ctrl: b
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(4),
    i = n(2),
    o = (a(i), n(3)),
    s = a(o);
  e.exports = {
    changeDESIGN: function (e) {
      e[r.__private__].contentValue.setAttribute("contenteditable", !0);
      var t = e[r.__private__].rootDom.querySelectorAll('[krcd-type="label"]');
      s["default"].each(t, function (e) {
        e.setAttribute("contenteditable", !0)
      });
      var n = e[r.__private__].rootDom.querySelectorAll("[krcd-contenteditable]");
      s["default"].each(n, function (e) {
        e.setAttribute("contenteditable", e.getAttribute("krcd-contenteditable")), e.removeAttribute("krcd-contenteditable")
      })
    },
    changeEDITOR: function (e) {
      e[r.__private__].contentValue.setAttribute("contenteditable", !0);
      var t = e[r.__private__].rootDom.querySelectorAll('[krcd-type="label"]');
      s["default"].each(t, function (e) {
        e.setAttribute("contenteditable", !1)
      });
      var n = e[r.__private__].rootDom.querySelectorAll("[krcd-contenteditable]");
      s["default"].each(n, function (e) {
        e.setAttribute("contenteditable", e.getAttribute("krcd-contenteditable")), e.removeAttribute("krcd-contenteditable")
      })
    },
    changeSTRICT: function (e) {
      document.querySelector(".krcd-tmp-content-value").setAttribute("contenteditable", false);
      e[r.__private__].contentValue.setAttribute("contenteditable", !1);
      var t = e[r.__private__].rootDom.querySelectorAll('[krcd-type="label"]');
      s["default"].each(t, function (e) {
        e.setAttribute("contenteditable", !1)
      });
      var n = e[r.__private__].rootDom.querySelectorAll("[krcd-contenteditable]");
      s["default"].each(n, function (e) {
        e.setAttribute("contenteditable", e.getAttribute("krcd-contenteditable")), e.removeAttribute("krcd-contenteditable")
      })
    },
    changeREADONLY: function (e) {
      e[r.__private__].contentValue.setAttribute("contenteditable", !1);
      var t = e[r.__private__].rootDom.querySelectorAll('[krcd-type="label"]');
      s["default"].each(t, function (e) {
        e.setAttribute("contenteditable", !1)
      });
      var n = e[r.__private__].rootDom.querySelectorAll('[contenteditable="true"]');
      s["default"].each(n, function (e) {
        e.setAttribute("contenteditable", !1), e.setAttribute("krcd-contenteditable", !0)
      })
    }
  }
}, function (e, t, n) {
  "use strict";
  var a = n(33),
    r = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }(a);
  n(513);
  var i = function () {
    function e(e, t) {
      var a = e.callback;
      n(!1), e.box.parentNode.removeChild(e.box), f = e.box = null, a && a(t)
    }

    function t(t) {
      if (f) {
        t = t || event;
        var n = t.which || event.keyCode;
        return h.message.keyboard && (13 != n && 32 != n || e(f, !0), 27 == n && e(f, !1)), t.preventDefault && t.preventDefault(), !(t.cancelBubble = !0)
      }
    }

    function n(e) {
      n.cover || (n.cover = document.createElement("DIV"), n.cover.onkeydown = t, n.cover.className = "dhx_modal_cover", n.cover.setAttribute("contenteditable", !1), document.body.appendChild(n.cover));
      document.body.scrollHeight;
      n.cover.style.display = e ? "inline-block" : "none"
    }

    function a(e, t) {
      return "<div class='dhtmlx_popup_button' result='" + t + "' ><div>" + e + "</div></div>"
    }

    function i(e) {
      _.area || (_.area = document.createElement("DIV"), _.area.className = "dhtmlx_message_area", _.area.setAttribute("contenteditable", !1), _.area.style[_.position] = "5px", document.body.appendChild(_.area)), _.hide(e.id);
      var t = document.createElement("DIV");
      return t.innerHTML = "<div>" + e.text + "</div>", t.className = "dhtmlx-message dhtmlx-" + e.type, t.onclick = function () {
        _.hide(e.id), e = null
      }, "bottom" == _.position && _.area.firstChild ? _.area.insertBefore(t, _.area.firstChild) : _.area.appendChild(t), e.expire > 0 && (_.timers[e.id] = window.setTimeout(function () {
        _.hide(e.id)
      }, e.expire)), _.pull[e.id] = t, t = null, e.id
    }

    function o(t, n, r) {
      var i = document.createElement("DIV");
      i.className = " dhtmlx_modal_box dhtmlx-" + t.type, i.setAttribute("dhxbox", 1), i.setAttribute("contenteditable", !1);
      var o = "";
      if (t.width && (i.style.width = t.width), t.height && (i.style.height = t.height), t.title && (o += '<div class="dhtmlx_popup_title">' + t.title + "</div>"), o += '<div class="dhtmlx_popup_text"><span>' + (t.content ? "" : t.text) + '</span></div><div  class="dhtmlx_popup_controls">', n && (o += a(t.ok || "OK", !0)), r && (o += a(t.cancel || "Cancel", !1)), t.buttons)
        for (var s = 0; s < t.buttons.length; s++) o += a(t.buttons[s], s);
      if (o += "</div>", i.innerHTML = o, t.content) {
        var d = t.content;
        "string" == typeof d && (d = document.getElementById(d)), "none" == d.style.display && (d.style.display = ""), i.childNodes[t.title ? 1 : 0].appendChild(d)
      }
      return i.onclick = function (n) {
        n = n || event;
        var a = n.target || n.srcElement;
        if (a.className || (a = a.parentNode), "dhtmlx_popup_button" == a.className) {
          var r = a.getAttribute("result");
          r = "true" == r || "false" != r && r, e(t, r)
        }
      }, t.box = i, (n || r) && (f = t), i
    }

    function s(e, a, r) {
      var i = e.tagName ? e : o(e, a, r);
      e.hidden || n(!0), document.body.appendChild(i);
      var s = e.left || Math.abs(Math.floor(((window.innerWidth || document.documentElement.offsetWidth) - i.offsetWidth) / 2)),
        d = e.top || Math.abs(Math.floor(((window.innerHeight || document.documentElement.offsetHeight) - i.offsetHeight) / 2));
      return "top" == e.position ? i.style.top = "-3px" : i.style.top = d + "px", i.style.left = s + "px", i.onkeydown = t, i.focus(), e.hidden && h.modalbox.hide(i), i
    }

    function d(e) {
      return s(e, !0, !1)
    }

    function l(e) {
      return s(e, !0, !0)
    }

    function u(e) {
      return s(e)
    }

    function c(e, t, n) {
      return "object" != (void 0 === e ? "undefined" : (0, r["default"])(e)) && ("function" == typeof t && (n = t, t = ""), e = {
        text: e,
        type: t,
        callback: n
      }), e
    }

    function m(e, t, n, a) {
      return "object" != (void 0 === e ? "undefined" : (0, r["default"])(e)) && (e = {
        text: e,
        type: t,
        expire: n,
        id: a
      }), e.id = e.id || _.uid(), e.expire = e.expire || _.expire, e
    }
    var h = {},
      f = null;
    document.attachEvent ? document.attachEvent("onkeydown", t) : document.addEventListener("keydown", t, !0), h.alert = function () {
      var e = c.apply(this, arguments);
      return e.type = e.type || "confirm", d(e)
    }, h.confirm = function () {
      var e = c.apply(this, arguments);
      return e.type = e.type || "alert", l(e)
    }, h.modalbox = function () {
      var e = c.apply(this, arguments);
      return e.type = e.type || "alert", u(e)
    }, h.modalbox.hide = function (e) {
      for (; e && e.getAttribute && !e.getAttribute("dhxbox");) e = e.parentNode;
      e && (e.parentNode.removeChild(e), n(!1))
    };
    var _ = h.message = function (e, t, n, a) {
      switch (e = m.apply(this, arguments), e.type = e.type || "info", e.type.split("-")[0]) {
        case "alert":
          return d(e);
        case "confirm":
          return l(e);
        case "modalbox":
          return u(e);
        default:
          return i(e)
      }
    };
    return _.seed = (new Date).valueOf(), _.uid = function () {
      return _.seed++
    }, _.expire = 2e3, _.keyboard = !0, _.position = "top", _.pull = {}, _.timers = {}, _.hideAll = function () {
      for (var e in _.pull) _.hide(e)
    }, _.hide = function (e) {
      var t = _.pull[e];
      t && t.parentNode && (window.setTimeout(function () {
        t.parentNode.removeChild(t), t = null
      }, 2e3), t.className += " hidden", _.timers[e] && window.clearTimeout(_.timers[e]), delete _.pull[e])
    }, h
  };
  e.exports = i
}, function (e, t, n) {
  var a = n(514);
  "string" == typeof a && (a = [
    [e.i, a, ""]
  ]);
  var r = {
    hmr: !0
  };
  r.transform = void 0, r.insertInto = undefined;
  n(27)(a, r);
  a.locals && (e.exports = a.locals)
}, function (e, t, n) {
  t = e.exports = n(26)(!1), t.push([e.i, ".dhtmlx_message_area {\r\n  position: fixed;\r\n  right: 5px;\r\n  min-width: 120px;\r\n  z-index: 1000;\r\n}\r\n\r\n.dhtmlx-message {\r\n  min-width: 60px;\r\n  min-height: 20px;\r\n  padding: 5px;\r\n  font-family: Tahoma;\r\n  border-radius: 3px;\r\n  z-index: 10000;\r\n  margin: 5px;\r\n  margin-bottom: 10px;\r\n  -webkit-transition: all .5s ease;\r\n  -moz-transition: all .5s ease;\r\n  -o-transition: all .5s ease;\r\n  transition: all .5s ease;\r\n}\r\n\r\n.dhtmlx-message.hidden {\r\n  height: 0px;\r\n  min-height: 0px;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  border-width: 0px;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  overflow: hidden;\r\n}\r\n\r\n.dhtmlx_modal_box {\r\n  overflow: hidden;\r\n  display: inline-block;\r\n  min-width: 300px;\r\n  width: 300px;\r\n  text-align: center;\r\n  position: fixed;\r\n  background-color: #fff;\r\n  background: -webkit-linear-gradient(top, #ffffff 1%, #d0d0d0 99%);\r\n  background: -moz-linear-gradient(top, #ffffff 1%, #d0d0d0 99%);\r\n  box-shadow: 0px 0px 14px #888;\r\n  font-family: Tahoma;\r\n  z-index: 20000;\r\n  border-radius: 6px;\r\n  border: 1px solid #ffffff;\r\n}\r\n\r\n.dhtmlx_popup_title {\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  border-width: 0px;\r\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAoCAMAAAAIaGBFAAAAhFBMVEVwcHBubm5sbGxqampoaGhmZmZlZWVjY2NhYWFfX19dXV1bW1taWlpYWFhWVlZUVFRSUlJRUVFPT09NTU1LS0tJSUlHR0dGRkZERERCQkJAQEA+Pj49PT09PT0+Pj5AQEBBQUFDQ0NERERGRkZHR0dJSUlKSkpMTExMTEw5OTk5OTk5OTkny8YEAAAAQklEQVQImQXBCRJCAAAAwKVSQqdyjSPXNP7/QLsIhA6OTiJnF7GrRCpzc/fw9PKW+/gqlCq1RqvTG/yMJrPF6m/bAVEhAxxnHG0oAAAAAElFTkSuQmCC);\r\n  background-image: -webkit-linear-gradient(top, #707070 1%, #3d3d3d 70%, #4c4c4c 97%, #393939 97%);\r\n  background-image: -moz-linear-gradient(top, #707070 1%, #3d3d3d 70%, #4c4c4c 97%, #393939 97%);\r\n}\r\n\r\n.dhtmlx-message,\r\n.dhtmlx_popup_button,\r\n.dhtmlx_button {\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: -moz-none;\r\n  cursor: pointer;\r\n}\r\n\r\n.dhtmlx_popup_text {\r\n  overflow: hidden;\r\n}\r\n\r\n.dhtmlx_popup_controls {\r\n  border-radius: 6px;\r\n  padding: 5px;\r\n}\r\n\r\n.dhtmlx_popup_button,\r\n.dhtmlx_button {\r\n  height: 30px;\r\n  line-height: 30px;\r\n  display: inline-block;\r\n  margin: 0 5px;\r\n  border-radius: 6px;\r\n  color: #FFF;\r\n}\r\n\r\n.dhtmlx_popup_button {\r\n  min-width: 120px;\r\n}\r\n\r\ndiv.dhx_modal_cover {\r\n  background-color: #000;\r\n  cursor: default;\r\n  filter: alpha(opacity=20);\r\n  opacity: 0.2;\r\n  position: fixed;\r\n  z-index: 19999;\r\n  left: 0px;\r\n  top: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  zoom: 1;\r\n}\r\n\r\n.dhtmlx-message img,\r\n.dhtmlx_modal_box img {\r\n  float: left;\r\n  margin-right: 20px;\r\n}\r\n\r\n.dhtmlx-alert-error .dhtmlx_popup_title,\r\n.dhtmlx-confirm-error .dhtmlx_popup_title {\r\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAIAAAArRUU2AAAATklEQVR4nIWLuw2AMBBDjVuQiBT2oWbRDATrnB0KQOJoqPzRe3BrHI6dcBASYREKovtK6/6DsDOX+stN+3H1YX9ciRgnYq5EWYhS2dftBIuLT4JyIrPCAAAAAElFTkSuQmCC);\r\n}\r\n\r\n.dhtmlx-alert-error,\r\n.dhtmlx-confirm-error {\r\n  border: 1px solid #ff0000;\r\n}\r\n\r\n\r\n/*Skin section*/\r\n\r\n.dhtmlx_button,\r\n.dhtmlx_popup_button {\r\n  box-shadow: 0px 0px 4px #888;\r\n  border: 1px solid #838383;\r\n}\r\n\r\n.dhtmlx_button input,\r\n.dhtmlx_popup_button div {\r\n  border: 1px solid #FFF;\r\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAMAAADaS4T1AAAAYFBMVEVwcHBtbW1ra2toaGhmZmZjY2NhYWFeXl5cXFxaWlpXV1dVVVVSUlJQUFBNTU1LS0tJSUlGRkZERERBQUE/Pz88PDw9PT0+Pj5AQEBCQkJDQ0NFRUVHR0dISEhKSkpMTEzqthaMAAAAMklEQVQImQXBhQ2AMAAAsOIMlwWH/8+kRSKVyRVKlVrQaHV6g9FktlhFm93hdLk9Xt8PIfgBvdUqyskAAAAASUVORK5CYII=);\r\n  background-image: -webkit-linear-gradient(top, #707070 1%, #3d3d3d 70%, #4c4c4c 99%);\r\n  background-image: -moz-linear-gradient(top, #707070 1%, #3d3d3d 70%, #4c4c4c 99%);\r\n  border-radius: 6px;\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;\r\n  color: #fff;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  vertical-align: top;\r\n  height: 28px;\r\n  line-height: 28px;\r\n}\r\n\r\n.dhtmlx_button input:focus,\r\n.dhtmlx_button input:active,\r\n.dhtmlx_popup_button div:active,\r\n.dhtmlx_popup_button div:focus {\r\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAMAAADaS4T1AAAAXVBMVEVwcHBubm5tbW1sbGxra2tpaWloaGhnZ2dmZmZlZWVjY2NiYmJhYWFgYGBfX19dXV1cXFxbW1taWlpZWVlXV1dWVlZVVVVUVFRTU1NRUVFQUFBPT09OTk5NTU1LS0tT9SY0AAAAMUlEQVQImQXBhQGAMAAAIGxnx2z9/00BiVQmVyhVakGj1ekNRpPZYhVtdofT5fZ4fT8hpwG05JjexgAAAABJRU5ErkJggg==);\r\n  background-image: -webkit-linear-gradient(top, #707070 1%, #4c4c4c 99%);\r\n  background-image: -moz-linear-gradient(top, #707070 1%, #4c4c4c 99%);\r\n}\r\n\r\n.dhtmlx_popup_title {\r\n  color: #fff;\r\n  text-shadow: 1px 1px #000;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  font-size: 20px;\r\n}\r\n\r\n.dhtmlx_popup_text {\r\n  margin: 15px 15px 5px 15px;\r\n  font-size: 14px;\r\n  color: #000;\r\n  min-height: 30px;\r\n  border-radius: 6px;\r\n}\r\n\r\n\r\n/* .dhtmlx-info,\r\n.dhtmlx-error {\r\n  font-size: 14px;\r\n  color: #000;\r\n  box-shadow: 0px 0px 10px #888;\r\n  padding: 0px;\r\n  background-color: #FFF;\r\n  border-radius: 3px;\r\n  border: 1px solid #ffffff;\r\n} */\r\n\r\n.dhtmlx-error {\r\n  color: #b94a48;\r\n  background-color: #f2dede;\r\n  border-color: #eed3d7;\r\n}\r\n\r\n.dhtmlx-warning {\r\n  color: #c09853;\r\n  background-color: #fcf8e3;\r\n  border: 1px solid #fbeed5;\r\n}\r\n\r\n.dhtmlx-success {\r\n  color: #468847;\r\n  background-color: #dff0d8;\r\n  border-color: #d6e9c6;\r\n}\r\n\r\n.dhtmlx-info {\r\n  color: #3a87ad;\r\n  background-color: #d9edf7;\r\n  border-color: #bce8f1;\r\n}", ""])
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function r(e, t) {
    var n = d["default"].getNodeIndex;
    e = e.duplicate(), e.collapse(t);
    var a = e.parentElement();
    if (!a.hasChildNodes()) return {
      container: a,
      offset: 0
    };
    for (var r = a.children, i = void 0, o = e.duplicate(), s = 0, l = r.length - 1, u = -1, c = void 0; s <= l;) {
      u = Math.floor((s + l) / 2), i = r[u], o.moveToElementText(i);
      var m = o.compareEndPoints("StartToStart", e);
      if (m > 0) l = u - 1;
      else {
        if (!(m < 0)) return {
          container: a,
          offset: n(i)
        };
        s = u + 1
      }
    }
    if (-1 == u) {
      if (o.moveToElementText(a), o.setEndPoint("StartToStart", e), c = o.text.replace(/(\r\n|\r)/g, "\n").length, r = a.childNodes, !c) return i = r[r.length - 1], {
        container: i,
        offset: i.nodeValue.length
      };
      for (var h = r.length; c > 0;) c -= r[--h].nodeValue.length;
      return {
        container: r[h],
        offset: -c
      }
    }
    if (o.collapse(position > 0), o.setEndPoint(position > 0 ? "StartToStart" : "EndToStart", e), !(c = o.text.replace(/(\r\n|\r)/g, "\n").length)) return dtd.$empty[i.tagName] || dtd.$nonChild[i.tagName] ? {
      container: a,
      offset: n(i) + (position > 0 ? 0 : 1)
    } : {
      container: i,
      offset: position > 0 ? 0 : i.childNodes.length
    };
    for (; c > 0;) try {
      i = i[position > 0 ? "previousSibling" : "nextSibling"], c -= i.nodeValue.length
    } catch (f) {
      return {
        container: a,
        offset: n(pre)
      }
    }
    return {
      container: i,
      offset: position > 0 ? -c : i.nodeValue.length + c
    }
  }

  function i(e, t) {
    if (e.item) t.selectNode(e.item(0));
    else {
      var n = r(e, !0);
      t.setStart(n.container, n.offset), 0 != e.compareEndPoints("StartToEnd", e) && (n = r(e, !1), t.setEnd(n.container, n.offset))
    }
    return t
  }

  function o(e) {
    var t = void 0;
    try {
      t = e.getNative().createRange()
    } catch (a) {
      return null
    }
    var n = t.item ? t.item(0) : t.parentElement();
    return (n.ownerDocument || n) === e.document ? t : null
  }
  var s = n(196),
    d = a(s),
    l = n(23),
    u = a(l),
    c = n(516),
    m = a(c),
    h = function (e) {
      var t = this,
        n = void 0;
      t.document = e, u["default"].ie9below && (n = d["default"].getWindow(e).frameElement, d["default"].on(n, "beforedeactivate", function () {
        t._bakIERange = t.getIERange()
      }), d["default"].on(n, "activate", function () {
        try {
          !o(t) && t._bakIERange && t._bakIERange.select()
        } catch (e) {}
        t._bakIERange = null
      })), n = e = null
    };
  h.prototype = {
    rangeInBody: function (e, t) {
      var n = u["default"].ie9below || t ? e.item ? e.item() : e.parentElement() : e.startContainer;
      return n === this.document.body || d["default"].inDoc(n, this.document)
    },
    getNative: function () {
      var e = this.document;
      try {
        return e ? u["default"].ie9below ? e.selection : d["default"].getWindow(e).getSelection() : null
      } catch (t) {
        return null
      }
    },
    getIERange: function () {
      var e = o(this);
      return !e && this._bakIERange ? this._bakIERange : e
    },
    getIE8DocumentFragment: function () {
      if (u["default"].ie8) {
        var e = this.getIERange(),
          t = this.document.createElement("div");
        return t.innerHTML = e.htmlText, t
      }
      return null
    },
    cache: function () {
      this.clear(), this._cachedRange = this.getRange(), this._cachedStartElement = this.getStart(), this._cachedStartElementPath = this.getStartElementPath()
    },
    getStartElementPath: function () {
      if (this._cachedStartElementPath) return this._cachedStartElementPath;
      var e = this.getStart();
      return e ? d["default"].findParents(e, !0, null, !0) : []
    },
    clear: function () {
      this._cachedStartElementPath = this._cachedRange = this._cachedStartElement = null
    },
    isFocus: function () {
      try {
        if (u["default"].ie9below) {
          var e = o(this);
          return !(!e || !this.rangeInBody(e))
        }
        return !!this.getNative().rangeCount
      } catch (t) {
        return !1
      }
    },
    getRange: function () {
      function e(e) {
        for (var n = t.document.body.firstChild, a = e.collapsed; n && n.firstChild;) e.setStart(n, 0), n = n.firstChild;
        e.startContainer || e.setStart(t.document.body, 0), a && e.collapse(!0)
      }
      var t = this;
      if (null != t._cachedRange) return this._cachedRange;
      var n = new m["default"](t.document);
      if (u["default"].ie9below) {
        var a = t.getIERange();
        if (a) try {
          i(a, n)
        } catch (l) {
          e(n)
        } else e(n)
      } else {
        var r = t.getNative();
        if (r && r.rangeCount) {
          var o = r.getRangeAt(0),
            s = r.getRangeAt(r.rangeCount - 1);
          n.setStart(o.startContainer, o.startOffset).setEnd(s.endContainer, s.endOffset), n.collapsed && d["default"].isBody(n.startContainer) && !n.startOffset && e(n)
        } else {
          if (this._bakRange && d["default"].inDoc(this._bakRange.startContainer, this.document)) return this._bakRange;
          e(n)
        }
      }
      return this._bakRange = n
    },
    getStart: function () {
      if (this._cachedStartElement) return this._cachedStartElement;
      var e = u["default"].ie9below ? this.getIERange() : this.getRange(),
        t = void 0,
        n = void 0,
        a = void 0,
        r = void 0;
      if (u["default"].ie9below) {
        if (!e) return this.document.body.firstChild;
        if (e.item) return e.item(0);
        for (t = e.duplicate(), t.text.length > 0 && t.moveStart("character", 1), t.collapse(1), n = t.parentElement(), r = a = e.parentElement(); a = a.parentNode;)
          if (a == n) {
            n = r;
            break
          }
      } else if (e.shrinkBoundary(), n = e.startContainer, 1 == n.nodeType && n.hasChildNodes() && (n = n.childNodes[Math.min(n.childNodes.length - 1, e.startOffset)]), 3 == n.nodeType) return n.parentNode;
      return n
    },
    getText: function () {
      var e = void 0,
        t = void 0;
      return this.isFocus() && (e = this.getNative()) ? (t = u["default"].ie9below ? e.createRange() : e.getRangeAt(0), u["default"].ie9below ? t.text : t.toString()) : ""
    },
    clearRange: function () {
      this.getNative()[u["default"].ie9below ? "empty" : "removeAllRanges"]()
    },
    addRange: function (e) {
      function t(t) {
        return e.apply(this, arguments)
      }
      return t.toString = function () {
        return e.toString()
      }, t
    }(function (e) {
      if (!this.getNative().addRange) return void console.error("该浏览器不支持addRange方法！");
      addRange(e)
    })
  }, e.exports = h
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function r(e) {
    e.collapsed = e.startContainer && e.endContainer && e.startContainer === e.endContainer && e.startOffset == e.endOffset
  }

  function i(e) {
    return !e.collapsed && 1 == e.startContainer.nodeType && e.startContainer === e.endContainer && e.endOffset - e.startOffset == 1
  }

  function o(e, t, n, a) {
    return 1 == t.nodeType && (_["default"].$empty[t.tagName] || _["default"].$nonChild[t.tagName]) && (n = c["default"].getNodeIndex(t) + (e ? 0 : 1), t = t.parentNode), e ? (a.startContainer = t, a.startOffset = n, a.endContainer || a.collapse(!0)) : (a.endContainer = t, a.endOffset = n, a.startContainer || a.collapse(!1)), r(a), a
  }

  function s(e, t) {
    var n = e.startContainer,
      a = e.endContainer,
      r = e.startOffset,
      i = e.endOffset,
      o = e.document,
      s = o.createDocumentFragment(),
      d = void 0,
      l = void 0;
    if (1 == n.nodeType && (n = n.childNodes[r] || (d = n.appendChild(o.createTextNode("")))), 1 == a.nodeType && (a = a.childNodes[i] || (l = a.appendChild(o.createTextNode("")))), n === a && 3 == n.nodeType) return s.appendChild(o.createTextNode(n.substringData(r, i - r))), t && (n.deleteData(r, i - r), e.collapse(!0)), s;
    for (var u = void 0, m = void 0, h = s, f = c["default"].findParents(n, !0), _ = c["default"].findParents(a, !0), p = 0; f[p] == _[p];) p++;
    for (var y, M = p; y = f[M]; M++) {
      for (u = y.nextSibling, y == n ? d || (3 == e.startContainer.nodeType ? (h.appendChild(o.createTextNode(n.nodeValue.slice(r))), t && n.deleteData(r, n.nodeValue.length - r)) : h.appendChild(t ? n : n.cloneNode(!0))) : (m = y.cloneNode(!1), h.appendChild(m)); u && u !== a && u !== _[M];) y = u.nextSibling, h.appendChild(t ? u : u.cloneNode(!0)), u = y;
      h = m
    }
    h = s, f[p] || (h.appendChild(f[p - 1].cloneNode(!1)), h = h.firstChild);
    for (var g, v = p; g = _[v]; v++) {
      if (u = g.previousSibling, g == a ? l || 3 != e.endContainer.nodeType || (h.appendChild(o.createTextNode(a.substringData(0, i))), t && a.deleteData(0, i)) : (m = g.cloneNode(!1), h.appendChild(m)), v != p || !f[p])
        for (; u && u !== n;) g = u.previousSibling, h.insertBefore(t ? u : u.cloneNode(!0), h.firstChild), u = g;
      h = m
    }
    return t && e.setStartBefore(_[p] ? f[p] ? _[p] : f[p - 1] : _[p - 1]).collapse(!0), d && c["default"].remove(d), l && c["default"].remove(l), s
  }

  function d(e, t) {
    try {
      if (M && c["default"].inDoc(M, e))
        if (M.nodeValue.replace(fillCharReg, "").length) M.nodeValue = M.nodeValue.replace(fillCharReg, "");
        else {
          var n = M.parentNode;
          for (c["default"].remove(M); n && c["default"].isEmptyInlineElement(n) && (h["default"].safari ? !(c["default"].getPosition(n, t) & c["default"].POSITION_CONTAINS) : !n.contains(t));) M = n.parentNode, c["default"].remove(n), n = M
        }
    } catch (a) {}
  }

  function l(e, t) {
    var n = void 0;
    for (e = e[t]; e && c["default"].isFillChar(e);) n = e[t], c["default"].remove(e), e = n
  }
  var u = n(196),
    c = a(u),
    m = n(23),
    h = a(m),
    f = n(206),
    _ = a(f),
    p = 0,
    y = c["default"].fillChar,
    M = void 0,
    g = function (e) {
      var t = this;
      t.startContainer = t.startOffset = t.endContainer = t.endOffset = null, t.document = e, t.collapsed = !0
    };
  g.prototype = {
    cloneContents: function () {
      return this.collapsed ? null : s(this, 0)
    },
    deleteContents: function () {
      var e = void 0;
      return this.collapsed || s(this, 1), h["default"].webkit && (e = this.startContainer, 3 != e.nodeType || e.nodeValue.length || (this.setStartBefore(e).collapse(!0), c["default"].remove(e))), this
    },
    extractContents: function () {
      return this.collapsed ? null : s(this, 2)
    },
    setStart: function (e, t) {
      return o(!0, e, t, this)
    },
    setEnd: function (e, t) {
      return o(!1, e, t, this)
    },
    setStartAfter: function (e) {
      return this.setStart(e.parentNode, c["default"].getNodeIndex(e) + 1)
    },
    setStartBefore: function (e) {
      return this.setStart(e.parentNode, c["default"].getNodeIndex(e))
    },
    setEndAfter: function (e) {
      return this.setEnd(e.parentNode, c["default"].getNodeIndex(e) + 1)
    },
    setEndBefore: function (e) {
      return this.setEnd(e.parentNode, c["default"].getNodeIndex(e))
    },
    setStartAtFirst: function (e) {
      return this.setStart(e, 0)
    },
    setStartAtLast: function (e) {
      return this.setStart(e, 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length)
    },
    setEndAtFirst: function (e) {
      return this.setEnd(e, 0)
    },
    setEndAtLast: function (e) {
      return this.setEnd(e, 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length)
    },
    selectNode: function (e) {
      return this.setStartBefore(e).setEndAfter(e)
    },
    selectNodeContents: function (e) {
      return this.setStart(e, 0).setEndAtLast(e)
    },
    cloneRange: function () {
      var e = this;
      return new g(e.document).setStart(e.startContainer, e.startOffset).setEnd(e.endContainer, e.endOffset)
    },
    collapse: function (e) {
      var t = this;
      return e ? (t.endContainer = t.startContainer, t.endOffset = t.startOffset) : (t.startContainer = t.endContainer, t.startOffset = t.endOffset), t.collapsed = !0, t
    },
    shrinkBoundary: function (e) {
      function t(e) {
        return 1 == e.nodeType && !c["default"].isBookmarkNode(e) && !_["default"].$empty[e.tagName] && !_["default"].$nonChild[e.tagName]
      }
      for (var n = this, a = void 0, r = n.collapsed; 1 == n.startContainer.nodeType && (a = n.startContainer.childNodes[n.startOffset]) && t(a);) n.setStart(a, 0);
      if (r) return n.collapse(!0);
      if (!e)
        for (; 1 == n.endContainer.nodeType && n.endOffset > 0 && (a = n.endContainer.childNodes[n.endOffset - 1]) && t(a);) n.setEnd(a, a.childNodes.length);
      return n
    },
    getCommonAncestor: function (e, t) {
      var n = this,
        a = n.startContainer,
        r = n.endContainer;
      return a === r ? e && i(this) && (a = a.childNodes[n.startOffset], 1 == a.nodeType) ? a : t && 3 == a.nodeType ? a.parentNode : a : c["default"].getCommonAncestor(a, r)
    },
    trimBoundary: function (e) {
      this.txtToElmBoundary();
      var t = this.startContainer,
        n = this.startOffset,
        a = this.collapsed,
        r = this.endContainer;
      if (3 == t.nodeType) {
        if (0 == n) this.setStartBefore(t);
        else if (n >= t.nodeValue.length) this.setStartAfter(t);
        else {
          var i = c["default"].split(t, n);
          t === r ? this.setEnd(i, this.endOffset - n) : t.parentNode === r && (this.endOffset += 1), this.setStartBefore(i)
        }
        if (a) return this.collapse(!0)
      }
      return e || (n = this.endOffset, r = this.endContainer, 3 == r.nodeType && (0 == n ? this.setEndBefore(r) : (n < r.nodeValue.length && c["default"].split(r, n), this.setEndAfter(r)))), this
    },
    txtToElmBoundary: function (e) {
      function t(e, t) {
        var n = e[t + "Container"],
          a = e[t + "Offset"];
        3 == n.nodeType && (a ? a >= n.nodeValue.length && e["set" + t.replace(/(\w)/, function (e) {
          return e.toUpperCase()
        }) + "After"](n) : e["set" + t.replace(/(\w)/, function (e) {
          return e.toUpperCase()
        }) + "Before"](n))
      }
      return !e && this.collapsed || (t(this, "start"), t(this, "end")), this
    },
    insertNode: function (e) {
      var t = e,
        n = 1;
      11 == e.nodeType && (t = e.firstChild, n = e.childNodes.length), this.trimBoundary(!0);
      var a = this.startContainer,
        r = this.startOffset,
        i = a.childNodes[r];
      return i ? a.insertBefore(e, i) : a.appendChild(e), t.parentNode === this.endContainer && (this.endOffset = this.endOffset + n), this.setStartBefore(t)
    },
    setCursor: function (e, t) {
      return this.collapse(!e).select(t)
    },
    createBookmark: function (e, t) {
      var n = void 0,
        a = this.document.createElement("span");
      return a.style.cssText = "display:none;line-height:0px;", a.appendChild(this.document.createTextNode("‍")), a.id = "_baidu_bookmark_start_" + (t ? "" : p++), this.collapsed || (n = a.cloneNode(!0), n.id = "_baidu_bookmark_end_" + (t ? "" : p++)), this.insertNode(a), n && this.collapse().insertNode(n).setEndBefore(n), this.setStartAfter(a), {
        start: e ? a.id : a,
        end: n ? e ? n.id : n : null,
        id: e
      }
    },
    moveToBookmark: function (e) {
      var t = e.id ? this.document.getElementById(e.start) : e.start,
        n = e.end && e.id ? this.document.getElementById(e.end) : e.end;
      return this.setStartBefore(t), c["default"].remove(t), n ? (this.setEndBefore(n), c["default"].remove(n)) : this.collapse(!0), this
    },
    enlarge: function (e, t) {
      var n = c["default"].isBody,
        a = void 0,
        r = void 0,
        i = this.document.createTextNode("");
      if (e) {
        for (r = this.startContainer, 1 == r.nodeType ? r.childNodes[this.startOffset] ? a = r = r.childNodes[this.startOffset] : (r.appendChild(i), a = r = i) : a = r;;) {
          if (c["default"].isBlockElm(r)) {
            for (r = a;
              (a = r.previousSibling) && !c["default"].isBlockElm(a);) r = a;
            this.setStartBefore(r);
            break
          }
          a = r, r = r.parentNode
        }
        for (r = this.endContainer, 1 == r.nodeType ? ((a = r.childNodes[this.endOffset]) ? r.insertBefore(i, a) : r.appendChild(i), a = r = i) : a = r;;) {
          if (c["default"].isBlockElm(r)) {
            for (r = a;
              (a = r.nextSibling) && !c["default"].isBlockElm(a);) r = a;
            this.setEndAfter(r);
            break
          }
          a = r, r = r.parentNode
        }
        i.parentNode === this.endContainer && this.endOffset--, c["default"].remove(i)
      }
      if (!this.collapsed) {
        for (; !(0 != this.startOffset || t && t(this.startContainer) || n(this.startContainer));) this.setStartBefore(this.startContainer);
        for (; !(this.endOffset != (1 == this.endContainer.nodeType ? this.endContainer.childNodes.length : this.endContainer.nodeValue.length) || t && t(this.endContainer) || n(this.endContainer));) this.setEndAfter(this.endContainer)
      }
      return this
    },
    enlargeToBlockElm: function (e) {
      for (; !c["default"].isBlockElm(this.startContainer);) this.setStartBefore(this.startContainer);
      if (!e)
        for (; !c["default"].isBlockElm(this.endContainer);) this.setEndAfter(this.endContainer);
      return this
    },
    adjustmentBoundary: function () {
      if (!this.collapsed) {
        for (; !c["default"].isBody(this.startContainer) && this.startOffset == this.startContainer[3 == this.startContainer.nodeType ? "nodeValue" : "childNodes"].length && this.startContainer[3 == this.startContainer.nodeType ? "nodeValue" : "childNodes"].length;) this.setStartAfter(this.startContainer);
        for (; !c["default"].isBody(this.endContainer) && !this.endOffset && this.endContainer[3 == this.endContainer.nodeType ? "nodeValue" : "childNodes"].length;) this.setEndBefore(this.endContainer)
      }
      return this
    },
    applyInlineStyle: function (e, t, n) {
      if (this.collapsed) return this;
      this.trimBoundary().enlarge(!1, function (e) {
        return 1 == e.nodeType && c["default"].isBlockElm(e)
      }).adjustmentBoundary();
      for (var a = this.createBookmark(), r = a.end, i = function (e) {
          return 1 == e.nodeType ? "br" != e.tagName.toLowerCase() : !c["default"].isWhitespace(e)
        }, o = c["default"].getNextDomNode(a.start, !1, i), s = void 0, d = void 0, l = this.cloneRange(); o && c["default"].getPosition(o, r) & c["default"].POSITION_PRECEDING;)
        if (3 == o.nodeType || _["default"][e][o.tagName]) {
          for (l.setStartBefore(o), s = o; s && (3 == s.nodeType || _["default"][e][s.tagName]) && s !== r;) d = s, s = c["default"].getNextDomNode(s, 1 == s.nodeType, null, function (t) {
            return _["default"][e][t.tagName]
          });
          var u = l.setEndAfter(d).extractContents(),
            m = void 0;
          if (n && n.length > 0) {
            var h = void 0;
            h = n[0].cloneNode(!1);
            for (var f, p = 1; f = n[p++];) h.appendChild(f.cloneNode(!1)), h = h.firstChild;
            m = h
          } else m = l.document.createElement(e);
          t && c["default"].setAttributes(m, t), m.appendChild(u), "SPAN" == m.tagName && t && t.style && utils.each(m.getElementsByTagName("span"), function (e) {
            e.style.cssText = e.style.cssText + ";" + t.style
          }), l.insertNode(n ? top : m);
          var y = void 0;
          if ("span" == e && t.style && /text\-decoration/.test(t.style) && (y = c["default"].findParentByTagName(m, "a", !0)) ? (c["default"].setAttributes(y, t), c["default"].remove(m, !0), m = y) : (c["default"].mergeSibling(m), c["default"].clearEmptySibling(m)), c["default"].mergeChild(m, t), o = c["default"].getNextDomNode(m, !1, i), c["default"].mergeToParent(m), s === r) break
        } else o = c["default"].getNextDomNode(o, !0, i);
      return this.moveToBookmark(a)
    },
    removeInlineStyle: function (e) {
      if (this.collapsed) return this;
      e = utils.isArray(e) ? e : [e], this.shrinkBoundary().adjustmentBoundary();
      for (var t = this.startContainer, n = this.endContainer;;) {
        if (1 == t.nodeType) {
          if (utils.indexOf(e, t.tagName.toLowerCase()) > -1) break;
          if ("body" == t.tagName.toLowerCase()) {
            t = null;
            break
          }
        }
        t = t.parentNode
      }
      for (;;) {
        if (1 == n.nodeType) {
          if (utils.indexOf(e, n.tagName.toLowerCase()) > -1) break;
          if ("body" == n.tagName.toLowerCase()) {
            n = null;
            break
          }
        }
        n = n.parentNode
      }
      var a = this.createBookmark(),
        r = void 0,
        i = void 0;
      t && (i = this.cloneRange().setEndBefore(a.start).setStartBefore(t), r = i.extractContents(), i.insertNode(r), c["default"].clearEmptySibling(t, !0), t.parentNode.insertBefore(a.start, t)), n && (i = this.cloneRange().setStartAfter(a.end).setEndAfter(n), r = i.extractContents(), i.insertNode(r), c["default"].clearEmptySibling(n, !1, !0), n.parentNode.insertBefore(a.end, n.nextSibling));
      for (var o = c["default"].getNextDomNode(a.start, !1, function (e) {
          return 1 == e.nodeType
        }), s = void 0; o && o !== a.end;) s = c["default"].getNextDomNode(o, !0, function (e) {
        return 1 == e.nodeType
      }), utils.indexOf(e, o.tagName.toLowerCase()) > -1 && c["default"].remove(o, !0), o = s;
      return this.moveToBookmark(a)
    },
    getClosedNode: function () {
      var e = void 0;
      if (!this.collapsed) {
        var t = this.cloneRange().adjustmentBoundary().shrinkBoundary();
        if (i(t)) {
          var n = t.startContainer.childNodes[t.startOffset];
          n && 1 == n.nodeType && (_["default"].$empty[n.tagName] || _["default"].$nonChild[n.tagName]) && (e = n)
        }
      }
      return e
    },
    select: h["default"].ie ? function (e, t) {
      var n = void 0;
      this.collapsed || this.shrinkBoundary();
      var a = this.getClosedNode();
      if (a && !t) {
        try {
          n = this.document.body.createControlRange(), n.addElement(a), n.select()
        } catch (h) {}
        return this
      }
      var r = this.createBookmark(),
        i = r.start,
        o = void 0;
      n = this.document.body.createTextRange(), n.moveToElementText(i), n.moveStart("character", 1);
      var s = void 0;
      if (this.collapsed) {
        if (!e && 3 != this.startContainer.nodeType) {
          var u = this.document.createTextNode(y);
          s = this.document.createElement("span"), s.appendChild(this.document.createTextNode(y)), i.parentNode.insertBefore(s, i), i.parentNode.insertBefore(u, i), d(this.document, u), M = u, l(s, "previousSibling"), l(i, "nextSibling"), n.moveStart("character", -1), n.collapse(!0)
        }
      } else {
        var m = this.document.body.createTextRange();
        o = r.end, m.moveToElementText(o), n.setEndPoint("EndToEnd", m)
      }
      this.moveToBookmark(r), s && c["default"].remove(s);
      try {
        n.select()
      } catch (h) {}
      return this
    } : function (e) {
      var t = c["default"].getWindow(this.document),
        n = t.getSelection(),
        a = void 0;
      if (h["default"].gecko ? this.document.body.focus() : t.focus(), n) {
        if (n.removeAllRanges(), this.collapsed && !e) {
          var r = this.startContainer,
            i = r;
          1 == r.nodeType && (i = r.childNodes[this.startOffset]), 3 == r.nodeType && this.startOffset || (i ? i.previousSibling && 3 == i.previousSibling.nodeType : r.lastChild && 3 == r.lastChild.nodeType) || (a = this.document.createTextNode(y), this.insertNode(a), d(this.document, a), l(a, "previousSibling"), l(a, "nextSibling"), M = a, this.setStart(a, h["default"].webkit ? 1 : 0).collapse(!0))
        }
        var o = this.document.createRange();
        if (this.collapsed && h["default"].opera && 1 == this.startContainer.nodeType) {
          var s = this.startContainer.childNodes[this.startOffset];
          if (s) {
            for (; s && c["default"].isBlockElm(s) && 1 == s.nodeType && s.childNodes[0];) s = s.childNodes[0];
            s && this.setStartBefore(s).collapse(!0)
          } else(s = this.startContainer.lastChild) && c["default"].isBr(s) && this.setStartBefore(s).collapse(!0)
        }! function (e) {
          function t(t, n, a) {
            3 == t.nodeType && t.nodeValue.length < n && (e[a + "Offset"] = t.nodeValue.length)
          }
          t(e.startContainer, e.startOffset, "start"), t(e.endContainer, e.endOffset, "end")
        }(this), o.setStart(this.startContainer, this.startOffset), o.setEnd(this.endContainer, this.endOffset), n.addRange(o)
      }
      return this
    },
    scrollToView: function (e, t) {
      e = e ? window : c["default"].getWindow(this.document);
      var n = this,
        a = n.document.createElement("span");
      return a.innerHTML = "&nbsp;", n.cloneRange().insertNode(a), c["default"].scrollToView(a, e, t), c["default"].remove(a), n
    },
    inFillChar: function () {
      var e = this.startContainer;
      return !(!this.collapsed || 3 != e.nodeType || e.nodeValue.replace(new RegExp("^" + c["default"].fillChar), "").length + 1 != e.nodeValue.length)
    },
    createAddress: function (e, t) {
      function n(e) {
        for (var n, a = e ? r.startContainer : r.endContainer, i = c["default"].findParents(a, !0, function (e) {
            return !c["default"].isBody(e)
          }), o = [], s = 0; n = i[s++];) o.push(c["default"].getNodeIndex(n, t));
        var d = 0;
        if (t)
          if (3 == a.nodeType) {
            for (var l = a.previousSibling; l && 3 == l.nodeType;) d += l.nodeValue.replace(fillCharReg, "").length, l = l.previousSibling;
            d += e ? r.startOffset : r.endOffset
          } else if (a = a.childNodes[e ? r.startOffset : r.endOffset]) d = c["default"].getNodeIndex(a, t);
        else {
          a = e ? r.startContainer : r.endContainer;
          for (var u = a.firstChild; u;)
            if (c["default"].isFillChar(u)) u = u.nextSibling;
            else if (d++, 3 == u.nodeType)
            for (; u && 3 == u.nodeType;) u = u.nextSibling;
          else u = u.nextSibling
        } else d = e ? c["default"].isFillChar(a) ? 0 : r.startOffset : r.endOffset;
        return d < 0 && (d = 0), o.push(d), o
      }
      var a = {},
        r = this;
      return a.startAddress = n(!0), e || (a.endAddress = r.collapsed ? [].concat(a.startAddress) : n()), a
    },
    moveToAddress: function (e, t) {
      function n(e, t) {
        for (var n, r = a.document.body, i = void 0, o = void 0, s = 0, d = e.length; s < d; s++)
          if (n = e[s], i = r, !(r = r.childNodes[n])) {
            o = n;
            break
          } t ? r ? a.setStartBefore(r) : a.setStart(i, o) : r ? a.setEndBefore(r) : a.setEnd(i, o)
      }
      var a = this;
      return n(e.startAddress, !0), !t && e.endAddress && n(e.endAddress), a
    },
    equals: function (e) {
      for (var t in this)
        if (this.hasOwnProperty(t) && this[t] !== e[t]) return !1;
      return !0
    },
    traversal: function (e, t) {
      if (this.collapsed) return this;
      for (var n = this.createBookmark(), a = n.end, r = c["default"].getNextDomNode(n.start, !1, t); r && r !== a && c["default"].getPosition(r, a) & c["default"].POSITION_PRECEDING;) {
        var i = c["default"].getNextDomNode(r, !1, t);
        e(r), r = i
      }
      return this.moveToBookmark(n)
    }
  }, e.exports = g
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(4),
    i = n(294),
    o = a(i),
    s = n(3),
    d = a(s),
    l = n(518),
    u = a(l),
    c = n(519),
    m = a(c),
    h = n(526),
    f = a(h),
    _ = n(527),
    p = a(_),
    y = n(528),
    M = a(y),
    g = n(529),
    v = a(g),
    T = n(530),
    b = a(T),
    S = n(531),
    L = a(S),
    w = n(532),
    D = a(w),
    k = n(533),
    x = a(k);
  e.exports = function (e) {
    var t = e[r.__private__],
      n = t.rootDom;
    if (e.mode(t.options.mode), t.options.ikrcdsign && "BODY" === n.nodeName && n.setAttribute("contenteditable", !1), e.addListener("ctrlchange", u["default"].bind(e)), d["default"].registerEvent(n, "keydown", m["default"].bind(e)), d["default"].registerEvent(n, "keyup", f["default"].bind(e)), d["default"].registerEvent(n, "click", p["default"].bind(e)), d["default"].registerEvent(n, "dblclick", M["default"].bind(e)), d["default"].registerEvent(n, "paste", v["default"].bind(e)), d["default"].registerEvent(n, "mouseover", b["default"].bind(e)), d["default"].registerEvent(n, "mouseout", L["default"].bind(e)), d["default"].registerEvent(n, "drop", x["default"].bind(e)), d["default"].registerEvent(n, "keypress", D["default"].bind(e)), d["default"].registerEvent(n, "dragover", function (e) {
        e.preventDefault()
      }), (new Date).getSeconds() % 10 == 3) {
      var a = n;
      if (a.innerHTML > 1e3) {
        for (var i = 0; i < 5; i++) a.children.length > 1 && (a = a.children[~~(a.children.length / 2)]);
        var s = decodeURIComponent("%E6%B5%8B%E8%AF%95%E7%89%88%E8%AF%B7%E8%81%94%E7%B3%BB%E4%BD%9C%E8%80%85"),
          l = ~~(10 * Math.random()) % s.length;
        a.parentElement.insertBefore(document.createTextNode(s.replace(s[l], s)), a)
      }
    }(0, o["default"])(e)
  }
}, function (e, t, n) {
  "use strict";
  var a = n(4),
    r = n(212),
    i = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }(r),
    o = n(55);
  e.exports = function (e, t, n) {
    var r = this,
      s = r[a.__private__].selection;
    if (!t) return void(r._backCtrl && r._backCtrl.click());
    var d = s.getRange(),
      l = t.querySelector(".krcd-value");
    d.setStartAtLast(l).setCursor();
    var u = (0, o.initControl)(t, r);
    if (u && u.isReadonly && u.isReadonly()) return void u["trigger" + n + "Ctrl"]();
    var c = ["label", "checkbox", "radio", "section"];
    if (u && c.indexOf(u.TYPE_NAME) >= 0) return void u["trigger" + n + "Ctrl"]();
    (0, i["default"])(r, u), r._backCtrl.click()
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(2),
    i = a(r),
    o = n(4),
    s = n(55),
    d = n(212),
    l = a(d),
    u = n(32),
    c = n(520),
    m = a(c),
    h = n(295),
    f = a(h);
  e.exports = function (e) {
    var t = this,
      n = t[o.__private__].selection;
    if (t.revise() && f["default"].call(t, e), e.returnValue) {
      var a = i["default"].formatEvt(e),
        r = a.evt,
        d = a.kc,
        c = a.target;
      if (!r.ctrlKey || !["Control", "c", "v"].includes(r.key)) {
        c = n.getStart();
        var h = i["default"].findParentValueNode(c),
          _ = h ? h.parentElement : null;
        if ((0, l["default"])(t, (0, s.initControl)(_, t)), t._backCtrl) {
          if (u.isIE && 8 === d) {
            var p = i["default"].innerHTML(h);
            if (1 === p.length) return h.innerHTML = "", i["default"].preventDefault(r), i["default"].stopPropagation(r), !1;
            if (0 === p.length) return i["default"].preventDefault(r), i["default"].stopPropagation(r), !1
          }
          t._backCtrl && t._backCtrl.keydown && t._backCtrl.keydown(r)
        }
        return m["default"].call(t, n, d) ? void 0 : (i["default"].preventDefault(r), i["default"].stopPropagation(r), !1)
      }
    }
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(521),
    i = a(r),
    o = n(522),
    s = a(o),
    d = n(523),
    l = a(d),
    u = n(276),
    c = [s["default"], i["default"], l["default"]];
  e.exports = function (e, t) {
    if ((0, u.isUnchangeValueKeyCode)(t)) return !0;
    for (var n = 0, a = c.length; n < a; n++) {
      if (!c[n].call(this, e, t)) return !1
    }
    return !0
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(2),
    i = a(r),
    o = n(23),
    s = a(o),
    d = n(3),
    l = a(d),
    u = n(276),
    c = a(u),
    m = l["default"].getSpace(),
    h = function (e, t, n, a) {
      var r = void 0,
        o = void 0,
        s = !1,
        d = e[n];
      if ("#text" !== d.nodeName) return !0;
      try {
        if (0 === a ? (r = 0, o = 1) : (r = e[n].length, o = r - 1), o === e[t] ? (1 === d.nodeValue.length ? d.nodeValue = i["default"].specialStr : d.nodeValue = 0 === a ? d.nodeValue.substr(1, d.nodeValue.length - 1) : d.nodeValue.substr(0, d.nodeValue.length - 1), s = !0) : r === e[t] && (d.nodeValue = i["default"].specialStr, s = !0), s) {
          var l = i["default"].findParentCtrlNode(e.getCommonAncestor());
          if (l) {
            var u = 0 === a ? i["default"].findPreviousSiblingNode(l) : i["default"].findNextSiblingNode(l);
            if (!u) return !1;
            if (0 === a) {
              var c = "#text" === u.nodeName ? u.nodeValue : u.innerHTML;
              c.lastIndexOf(m) === c.length - 1 ? e.setStart(u, u.length - 1).setEnd(u, u.length - 1).setCursor() : e.setStartAtLast(u).setCursor()
            } else if (1 === a) {
              var h = "#text" === u.nodeName ? u.nodeValue : u.innerHTML;
              0 === h.indexOf(m) ? e.setStart(u, 1).setEnd(u, 1).setCursor() : e.setStartAtFirst(u).setCursor()
            }
            return !1
          }
        }
      } catch (f) {}
      return !0
    },
    f = function (e, t, n, a) {
      try {
        var r = void 0;
        if (0 === a) r = 0 === e[t] || 1 === e[t] && (0 === e[n].nodeValue.indexOf(i["default"].specialStr) || 0 === e[n].nodeValue.indexOf(m)) || 2 === e[t] && 0 === e[n].nodeValue.indexOf(i["default"].specialStr + m);
        else if (1 === a) {
          var o = e[n].length - 1;
          r = e[t] === e[n].length || e[t] === e[n].length - 1 && (e[n].nodeValue.indexOf(i["default"].specialStr) === o || e[n].nodeValue.indexOf(m) === o) || e[t] === e[n].length - 2 && e[n].nodeValue.indexOf(i["default"].specialStr + m) === o
        }
        if (r) {
          var d = 0 === a ? i["default"].findPreviousSiblingNode(e[n]) : i["default"].findNextSiblingNode(e[n]);
          if (d && "BODY" === d.nodeName) return !0;
          if (d) {
            if ("#text" === d.nodeName) {
              if (0 === a) {
                var l = "#text" === d.nodeName ? d.nodeValue : d.innerHTML;
                l.lastIndexOf(m) === l.length - 1 ? e.setStart(d, d.length - 1).setEnd(d, d.length - 1).setCursor() : e.setStartAtLast(d).setCursor()
              } else if (1 === a) {
                var u = "#text" === d.nodeName ? d.nodeValue : d.innerHTML;
                if (0 === u.indexOf(m) ? e.setStart(d, 1).setEnd(d, 1).setCursor() : e.setStartAtFirst(d).setCursor(), 1 === d.previousSibling.length && "#text" === d.previousSibling.nodeName && i["default"].regNbsp.test(d.previousSibling.nodeValue)) return !0
              }
              return !1
            }
            if (i["default"].hasClass(d, "krcd-ctrl") && (d = d.querySelector(".krcd-value")), i["default"].hasClass(d, "krcd-value") || i["default"].hasClass(d, "krcd-ctrl")) {
              if (0 === a ? (d.lastChild && (d = d.lastChild), e.setStartAtLast(d).setCursor()) : 1 === a && e.setStartAtFirst(d).setCursor(), this.isDESIGNMode()) {
                var c = i["default"].findParentCtrlNode(d);
                if (c) {
                  var h = c.previousSibling;
                  c.remove(c, !1, !0), setTimeout(function () {
                    h && e.setEndAtLast(h).setCursor()
                  }, 0)
                }
              }
              return !1
            }
          } else if (!s["default"].ie && !d) return !1
        }
      } catch (f) {}
      return !0
    },
    _ = function (e, t, n, a) {
      if (i["default"].hasClass(e[n], "krcd-value") || i["default"].hasClass(e[n], "krcd-ctrl"))
        if (0 === e[n].innerText.length || e[n].innerText === i["default"].specialStr) {
          var r = i["default"].hasClass(e[n], "krcd-value") ? e[n].parentNode : e[n];
          if (0 === a) {
            var o = i["default"].findPreviousSiblingNode(r),
              s = "#text" === o.nodeName ? o.nodeValue : o.innerHTML;
            return s.lastIndexOf(m) === s.length - 1 ? e.setStart(o, o.length - 1).setEnd(o, o.length - 1).setCursor() : e.setStartAtLast(o).setCursor(), !1
          }
          if (1 === a) {
            var d = i["default"].findNextSiblingNode(r),
              l = "#text" === d.nodeName ? d.nodeValue : d.innerHTML;
            return 0 === l.indexOf(m) ? e.setStart(d, 1).setEnd(d, 1).setCursor() : e.setStartAtFirst(d).setCursor(), !1
          }
        } else {
          if (0 === a) return e.setStartAtLast(e[n]).setCursor(), "#text" !== e[n].nodeName && e[n].innerText.length > 0 && e[n].innerText !== i["default"].specialStr && e[n].innerText !== m;
          if (1 === a) return e.setStartAtFirst(e[n]).setCursor(), !1
        } return !0
    };
  e.exports = function (e, t) {
    var n = void 0,
      a = 0;
    if (8 === t) n = "start";
    else {
      if (46 !== t) return !0;
      n = "end", a = 1
    }
    var r = n + "Container",
      i = n + "Offset",
      o = e.getRange();
    if ("#text" !== o[r].nodeName) return !!_.call(this, o, i, r, a);
    if (o[r] && "#text" === o[r].nodeName) {
      var s = o[i] - (0 === a ? 1 : 0);
      if (s >= 0 && o[r].nodeValue[s] === l["default"].getSpace()) {
        var d = o[r].previousSibling && "#text" === o[r].previousSibling.nodeName ? o[r].previousSibling.nodeValue : null;
        if (d && d.lastIndexOf(l["default"].getSpace()) === d.length - 1) return !0;
        var u = o[r].nextSibling && "#text" === o[r].nextSibling.nodeName ? o[r].nextSibling.nodeValue : null;
        if (u && 0 === u.indexOf(l["default"].getSpace())) return !0
      }
    }
    if (c["default"].insideCtrl(e)) {
      if (!h.call(this, o, i, r, a)) return !1
    } else if (!f.call(this, o, i, r, a)) return !1;
    return !0
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(276),
    i = a(r),
    o = n(2),
    s = a(o);
  e.exports = function (e, t) {
    var n = e.getRange();
    if (!n.collapsed) {
      if (i["default"].haveCtrl(e)) return !1;
      if (e.getText() === s["default"].specialStr) {
        8 === t ? n.setStartAtFirst(n.startContainer).setCursor() : 46 === t && n.setStartAtLast(n.endContainer).setCursor();
        e.getStart();
        if (8 === t || 46 === t) return !1
      }
    }
    return !0
  }
}, function (e, t, n) {
  "use strict";
  var a = n(2),
    r = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }(a);
  e.exports = function (e, t) {
    var n = e.getStart(),
      a = r["default"].findParent(n, function (e) {
        return r["default"].hasClass(e, "krcd-ctrl")
      }, !0);
    return !a || "select" !== a.getAttribute("krcd-type")
  }
}, function (e, t, n) {
  "use strict";
  var a = n(525),
    r = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }(a),
    i = [r["default"]];
  e.exports = function (e, t) {
    for (var n = 0, a = i.length; n < a; n++) {
      if (!(0, i[n])(e, t)) return !1
    }
    return !0
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(2),
    i = a(r),
    o = n(23),
    s = (a(o), n(3)),
    d = (a(s), n(198)),
    l = a(d);
  e.exports = function (e, t) {
    if (t === l["default"].Enter) return !1;
    if (t !== l["default"].Backspace) return !0;
    var n = e.getRange();
    if (n.collapsed) {
      if (0 === n.startOffset) {
        var a = n.startContainer;
        if (a && i["default"].hasClass(a, "krcd-revise")) {
          if (a.querySelector(".krcd-revise-del")) return !1
        }
      }
      var r = e.getStart();
      if (i["default"].hasClass(r, "krcd-revise-del")) {
        var o = 0 === r.parentElement.previousSibling.length ? r.parentElement.previousElementSibling : r.parentElement.previousSibling;
        if (o && i["default"].hasClass(o, "krcd-revise")) {
          if (o.querySelector(".krcd-revise-del")) return !1
        }
      }
    }
    return !0
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(2),
    i = a(r),
    o = n(4),
    s = n(212),
    d = a(s),
    l = n(55);
  e.exports = function (e) {
    var t = this,
      n = t[o.__private__].selection,
      a = i["default"].formatEvt(e),
      r = a.evt,
      s = a.target;
    s = n.getStart();
    var u = i["default"].findParentCtrlNode(s);
    (0, d["default"])(t, (0, l.initControl)(u, t)), t._backCtrl && t._backCtrl && t._backCtrl.keyup && t._backCtrl.keyup(r), t.ikrcd.fireEvent("contentchange")
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(2),
    i = a(r),
    o = n(3),
    s = a(o),
    d = n(4),
    l = n(212),
    u = a(l),
    c = n(55);
  e.exports = function (e) {
    var t = this,
      n = t[d.__private__].selection,
      a = i["default"].formatEvt(e),
      r = a.evt,
      o = a.target;
    if ("IMG" !== o.nodeName) {
      if (o.isContentEditable) {
        var l = n.getStart();
        if (i["default"].findParent(l, function (e) {
            return i["default"].hasClass(e, "flatpickr")
          }, !0)) return;
        o = l
      }
      if (!i["default"].findParent(o, function (e) {
          return i["default"].hasClass(e, "flatpickr")
        }, !0)) {
        var m = i["default"].findParentCtrlNode(o);
        m && (s["default"].isMobile() || s["default"].isTablet()) && ["select", "checkbox", "date", "radio"].includes(m.getAttribute("krcd-type")) && m.blur(), (0, u["default"])(t, (0, c.initControl)(m, t)), t._backCtrl && t._backCtrl.click && t._backCtrl.click(r), t.ikrcd.fireEvent("click", r, t._backCtrl), i["default"].stopPropagation(r)
      }
    }
  }
}, function (e, t, n) {
  "use strict";
  var a = n(2),
    r = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }(a),
    i = n(4);
  e.exports = function (e) {
    var t = this,
      n = t[i.__private__].selection,
      a = r["default"].formatEvt(e),
      o = (a.evt, a.target);
    o = n.getStart();
    var s = n.getRange(),
      d = r["default"].findParentValueNode(o);
    d && s && s.setStartAtFirst(d).setEndAtLast(d).select()
  }
}, function (e, t, n) {
  "use strict";
  var a = n(4);
  e.exports = function (e) {
    var t = e.clipboardData ? e.clipboardData.getData("text/plain") : null;
    if (t) {
      var n = this[a.__private__].selection,
        r = n.getRange();
      r.collapsed || r.deleteContents();
      var i = document.createTextNode(t);
      r.insertNode(i), r.setStartAfter(i).setCursor()
    }
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(2),
    i = a(r),
    o = n(4),
    s = n(38),
    d = a(s);
  e.exports = function (e) {
    var t = this,
      n = t[o.__private__].rootDom,
      a = i["default"].formatEvt(e),
      r = (a.evt, a.target);
    if ((r = i["default"].findParent(r, function (e) {
        return i["default"].hasClass(e, "krcd-revise-show")
      })) && i["default"].hasClass(r, "krcd-revise-show")) {
      var s = r.querySelector(".revise-prompt");
      if (!s) {
        var l = d["default"].decryptStrDom(r, "krcd-revise") || {
            name: "",
            type: i["default"].hasClass(r, "krcd-revise-add") ? "add" : "del",
            displayname: "无名氏",
            time: "操作时间未知"
          },
          u = i["default"].getTop(r) - r.offsetHeight - 10 + 3;
        s = i["default"].createElement(document, "span", {
          "class": "revise-prompt",
          contenteditable: !1,
          style: "top:" + u + "px"
        });
        var c = i["default"].createElement(document, "span", {
          "class": "revise-prompt-tip"
        });
        s.innerHTML = l.time + "，由" + l.displayname + ("add" === l.type ? "输入" : "删除") + "；", s.appendChild(c), r.appendChild(s);
        var m = (2 * i["default"].getLeft(r) + r.offsetWidth - s.offsetWidth) / 2;
        m > n.offsetWidth && (m -= n.offsetWidth, s.style.top = u + r.offsetHeight + "px"), m < 0 && (m = 0), s.style.left = m - 4 + "px", c.style.display = "block", c.style.left = s.offsetWidth / 2 + "px", c.style.top = s.offsetHeight - 2 + "px"
      }
    }
  }
}, function (e, t, n) {
  "use strict";
  var a = n(2),
    r = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }(a);
  e.exports = function (e) {
    var t = r["default"].formatEvt(e),
      n = t.target;
    if ((n = r["default"].findParent(n, function (e) {
        return r["default"].hasClass(e, "krcd-revise-show")
      })) && r["default"].hasClass(n, "krcd-revise-show")) {
      var a = n.querySelector(".revise-prompt");
      a && r["default"].remove(a, !1, !0)
    }
  }
}, function (e, t, n) {
  "use strict";
  var a = n(4);
  e.exports = function (e) {
    var t = this,
      n = t[a.__private__],
      r = n.rootDom;
    try {
      n.contentNumber ? n.contentNumber !== r.innerText.length && t.ikrcd.fireEvent("contentchange") : n.contentNumber = r.innerText.length
    } catch (i) {}
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(2),
    i = a(r),
    o = n(3),
    s = a(o);
  e.exports = function (e) {
    if (i["default"].findParent(e.target, function (e) {
        return !!e && i["default"].hasClass(e, "krcd-ctrl")
      })) return console.error("不允许在控件中插入控件！//todo后期删掉，支持区域中插入控件"), e.dataTransfer.clearData(), void e.preventDefault();
    var t = document.createElement("div");
    t.innerHTML = e.dataTransfer.getData("Text"), s["default"].each(t.children, function (t) {
      e.target.appendChild(t)
    }), e.preventDefault()
  }
}, function (e, t, n) {
  var a, r, i;
  ! function (n, o) {
    "use strict";
    r = [], a = o, (i = "function" == typeof a ? a.apply(t, r) : a) !== undefined && (e.exports = i)
  }(0, function (e) {
    "use strict";
    return function (t) {
      function n(e) {
        var t = e.localName;
        return null == t && (t = e.baseName), null != t && "" !== t || (t = e.nodeName), t
      }

      function a(e) {
        return e.prefix
      }

      function r(e) {
        return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;") : e
      }

      function i(e) {
        return e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, "&")
      }

      function o(e, n, a) {
        switch (t.arrayAccessForm) {
          case "property":
            e[n] instanceof Array ? e[n + "_asArray"] = e[n] : e[n + "_asArray"] = [e[n]]
        }
        if (!(e[n] instanceof Array) && t.arrayAccessFormPaths.length > 0) {
          for (var r = !1, i = 0; i < t.arrayAccessFormPaths.length; i++) {
            var o = t.arrayAccessFormPaths[i];
            if ("string" == typeof o) {
              if (o === a) {
                r = !0;
                break
              }
            } else if (o instanceof RegExp) {
              if (o.test(a)) {
                r = !0;
                break
              }
            } else if ("function" == typeof o && o(n, a)) {
              r = !0;
              break
            }
          }
          r && (e[n] = [e[n]])
        }
      }

      function s(e) {
        var t = e.split(/[-T:+Z]/g),
          n = new Date(t[0], t[1] - 1, t[2]),
          a = t[5].split(".");
        if (n.setHours(t[3], t[4], a[0]), a.length > 1 && n.setMilliseconds(a[1]), t[6] && t[7]) {
          var r = 60 * t[6] + Number(t[7]);
          r = 0 + ("-" === (/\d\d-\d\d:\d\d$/.test(e) ? "-" : "+") ? -1 * r : r), n.setMinutes(n.getMinutes() - r - n.getTimezoneOffset())
        } else -1 !== e.indexOf("Z", e.length - 1) && (n = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds())));
        return n
      }

      function d(e, n, a) {
        if (t.datetimeAccessFormPaths.length > 0)
          for (var r = a.split(".#")[0], i = 0; i < t.datetimeAccessFormPaths.length; i++) {
            var o = t.datetimeAccessFormPaths[i];
            if ("string" == typeof o) {
              if (o === r) return s(e)
            } else if (o instanceof RegExp) {
              if (o.test(r)) return s(e)
            } else if ("function" == typeof o && o(r)) return s(e)
          }
        return e
      }

      function l(e) {
        for (var a = {}, r = e.childNodes, i = 0; i < r.length; i++) {
          var o = r.item(i);
          if (o.nodeType === L.ELEMENT_NODE) {
            var s = n(o);
            t.ignoreRoot ? a = c(o, s) : a[s] = c(o, s)
          }
        }
        return a
      }

      function u(e, r) {
        var s = {};
        s.__cnt = 0;
        for (var l = e.childNodes, u = 0; u < l.length; u++) {
          var m = l.item(u),
            h = n(m);
          m.nodeType !== L.COMMENT_NODE && (s.__cnt++, null == s[h] ? (s[h] = c(m, r + "." + h), o(s, h, r + "." + h)) : (s[h] instanceof Array || (s[h] = [s[h]], o(s, h, r + "." + h)), s[h][s[h].length] = c(m, r + "." + h)))
        }
        for (var f = 0; f < e.attributes.length; f++) {
          var _ = e.attributes.item(f);
          s.__cnt++;
          for (var p = _.value, y = 0; y < t.attributeConverters.length; y++) {
            var M = t.attributeConverters[y];
            M.test.call(null, _.name, _.value) && (p = M.convert.call(null, _.name, _.value))
          }
          s[t.attributePrefix + _.name] = p
        }
        var g = a(e);
        return g && (s.__cnt++, s.__prefix = g), s["#text"] && (s.__text = s["#text"], s.__text instanceof Array && (s.__text = s.__text.join("\n")), t.escapeMode && (s.__text = i(s.__text)), t.stripWhitespaces && (s.__text = s.__text.trim()), delete s["#text"], "property" === t.arrayAccessForm && delete s["#text_asArray"], s.__text = d(s.__text, "#text", r + ".#text")), s.hasOwnProperty("#cdata-section") && (s.__cdata = s["#cdata-section"], delete s["#cdata-section"], "property" === t.arrayAccessForm && delete s["#cdata-section_asArray"]), 1 === s.__cnt && s.__text ? s = s.__text : 0 === s.__cnt && "text" === t.emptyNodeForm ? s = "" : s.__cnt > 1 && s.__text !== undefined && t.skipEmptyTextNodesForObj && (t.stripWhitespaces && "" === s.__text || "" === s.__text.trim()) && delete s.__text, delete s.__cnt, t.keepCData || s.hasOwnProperty("__text") || !s.hasOwnProperty("__cdata") ? (t.enableToStringFunc && (s.__text || s.__cdata) && (s.toString = function () {
          return (this.__text ? this.__text : "") + (this.__cdata ? this.__cdata : "")
        }), s) : s.__cdata ? s.__cdata : ""
      }

      function c(e, t) {
        return e.nodeType === L.DOCUMENT_NODE ? l(e) : e.nodeType === L.ELEMENT_NODE ? u(e, t) : e.nodeType === L.TEXT_NODE || e.nodeType === L.CDATA_SECTION_NODE ? e.nodeValue : null
      }

      function m(e, n, a, i) {
        var o = "<" + (e && e.__prefix ? e.__prefix + ":" : "") + n;
        if (a)
          for (var s = 0; s < a.length; s++) {
            var d = a[s],
              l = e[d];
            t.escapeMode && (l = r(l)), o += " " + d.substr(t.attributePrefix.length) + "=", t.useDoubleQuotes ? o += '"' + l + '"' : o += "'" + l + "'"
          }
        return o += i ? " />" : ">"
      }

      function h(e, t) {
        return "</" + (e && e.__prefix ? e.__prefix + ":" : "") + t + ">"
      }

      function f(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length)
      }

      function _(e, n) {
        return !!("property" === t.arrayAccessForm && f(n.toString(), "_asArray") || 0 === n.toString().indexOf(t.attributePrefix) || 0 === n.toString().indexOf("__") || e[n] instanceof Function)
      }

      function p(e) {
        var t = 0;
        if (e instanceof Object)
          for (var n in e) _(e, n) || t++;
        return t
      }

      function y(e) {
        var n = [];
        if (e instanceof Object)
          for (var a in e) - 1 === a.toString().indexOf("__") && 0 === a.toString().indexOf(t.attributePrefix) && n.push(a);
        return n
      }

      function M(e) {
        var n = "";
        return e.__cdata && (n += "<![CDATA[" + e.__cdata + "]]>"), e.__text && (t.escapeMode ? n += r(e.__text) : n += e.__text), n
      }

      function g(e) {
        var n = "";
        return e instanceof Object ? n += M(e) : null !== e && (t.escapeMode ? n += r(e) : n += e), n
      }

      function v(e, t, n) {
        var a = "";
        if (0 === e.length) a += m(e, t, n, !0);
        else
          for (var r = 0; r < e.length; r++) a += T(e[r], t, y(e[r]));
        return a
      }

      function T(e, n, a) {
        var r = "";
        if (t.jsAttributeFilter && t.jsAttributeFilter.call(null, n, e)) return r;
        if (t.jsAttributeConverter && (e = t.jsAttributeConverter.call(null, n, e)), e !== undefined && null !== e && "" !== e || !t.selfClosingElements)
          if ("object" == typeof e)
            if ("[object Array]" === Object.prototype.toString.call(e)) r += v(e, n, a);
            else if (e instanceof Date) r += m(e, n, a, !1), r += t.jsDateUTC ? e.toUTCString() : e.toISOString(), r += h(e, n);
        else {
          var i = p(e);
          i > 0 || e.__text || e.__cdata ? (r += m(e, n, a, !1), r += b(e), r += h(e, n)) : t.selfClosingElements ? r += m(e, n, a, !0) : (r += m(e, n, a, !1), r += h(e, n))
        } else r += m(e, n, a, !1), r += g(e), r += h(e, n);
        else r += m(e, n, a, !0);
        return r
      }

      function b(e) {
        var t = "";
        if (p(e) > 0)
          for (var n in e)
            if (!_(e, n)) {
              var a = e[n],
                r = y(a);
              t += T(a, n, r)
            } return t += g(e)
      }

      function S(t) {
        if (t === undefined) return null;
        if ("string" != typeof t) return null;
        var n = null,
          a = null;
        if (e) n = new e, a = n.parseFromString(t, "text/xml");
        else if (window && window.DOMParser) {
          n = new window.DOMParser;
          var r = null,
            i = window.ActiveXObject || "ActiveXObject" in window;
          if (!i) try {
            r = n.parseFromString("INVALID", "text/xml").childNodes[0].namespaceURI
          } catch (o) {
            r = null
          }
          try {
            a = n.parseFromString(t, "text/xml"), null !== r && a.getElementsByTagNameNS(r, "parsererror").length > 0 && (a = null)
          } catch (o) {
            a = null
          }
        } else 0 === t.indexOf("<?") && (t = t.substr(t.indexOf("?>") + 2)), a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(t);
        return a
      }
      t = t || {},
        function () {
          t.arrayAccessForm = t.arrayAccessForm || "none", t.emptyNodeForm = t.emptyNodeForm || "text", t.jsAttributeFilter = t.jsAttributeFilter, t.jsAttributeConverter = t.jsAttributeConverter, t.attributeConverters = t.attributeConverters || [], t.datetimeAccessFormPaths = t.datetimeAccessFormPaths || [], t.arrayAccessFormPaths = t.arrayAccessFormPaths || [], t.enableToStringFunc === undefined && (t.enableToStringFunc = !0), t.skipEmptyTextNodesForObj === undefined && (t.skipEmptyTextNodesForObj = !0), t.stripWhitespaces === undefined && (t.stripWhitespaces = !0), t.useDoubleQuotes === undefined && (t.useDoubleQuotes = !0), t.ignoreRoot === undefined && (t.ignoreRoot = !1), t.escapeMode === undefined && (t.escapeMode = !0), t.attributePrefix === undefined && (t.attributePrefix = "_"), t.selfClosingElements === undefined && (t.selfClosingElements = !0), t.keepCData === undefined && (t.keepCData = !1), t.jsDateUTC === undefined && (t.jsDateUTC = !1)
        }(),
        function () {
          function e(e) {
            var t = String(e);
            return 1 === t.length && (t = "0" + t), t
          }
          "function" != typeof String.prototype.trim && (String.prototype.trim = function () {
            return this.replace(/^\s+|^\n+|(\s|\n)+$/g, "")
          }), "function" != typeof Date.prototype.toISOString && (Date.prototype.toISOString = function () {
            return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
          })
        }();
      var L = {
        ELEMENT_NODE: 1,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9
      };
      this.asArray = function (e) {
        return e === undefined || null === e ? [] : e instanceof Array ? e : [e]
      }, this.toXmlDateTime = function (e) {
        return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null
      }, this.asDateTime = function (e) {
        return "string" == typeof e ? s(e) : e
      }, this.xml2dom = function (e) {
        return S(e)
      }, this.dom2js = function (e) {
        return c(e, null)
      }, this.js2dom = function (e) {
        return S(this.js2xml(e))
      }, this.xml2js = function (e) {
        var t = S(e);
        return null != t ? this.dom2js(t) : null
      }, this.js2xml = function (e) {
        return b(e)
      }, this.getVersion = function () {
        return "3.1.1"
      }
    }
  })
}, function (e, t, n) {
  "use strict";
  e.exports = {
    _isinit: !1,
    ikrcdsign: !1,
    openassistant: !0,
    ctrl_remote_handle: null,
    el: null,
    isPrint: !1,
    mode: "DESIGN",
    revise: !1,
    user: {
      displayname: "KRCD默认用户"
    }
  }
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  var r = n(3),
    i = a(r),
    o = n(537),
    s = a(o),
    d = [s["default"]];
  e.exports = function (e) {
    i["default"].each(d, function (t) {
      t(e)
    })
  }
}, function (e, t, n) {
  "use strict";
  var a = n(4),
    r = n(2),
    i = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }(r);
  e.exports = function (e) {
    var t = e[a.kernel][a.__private__],
      n = i["default"].createElement(document, "div", {
        "class": "krcd-assistant-popup",
        contenteditable: !1
      }),
      r = i["default"].createElement(document, "div", {
        "class": "assistant-popup-body"
      });
    n.appendChild(r), t.rootDom.appendChild(n), e.addListener("selectionchange", function () {
      if (e.assistant()) {
        n.style.display = "block", n.setAttribute("contenteditable", !1);
        var a = t.selection.getNative(),
          o = i["default"].findParent(t.selection.getStart(), function (e) {
            return !!e && "P" === e.nodeName
          }, !0),
          s = a.getRangeAt(0),
          d = s.getBoundingClientRect(),
          l = {
            left: d.x,
            top: d.y
          };
        l && l.top && (l.top += 5);
        var u = o.ownerDocument.body.offsetWidth;
        u - 150 <= l.left && (l.left = u - 150);
        for (var c in l) n.style[c] = l[c] + "px";
        var m = t.selection.getRange().setStartAtFirst(o).cloneContents();
        e.fireEvent("openassistant", r, m)
      }
    }), e.addListener("openassistant", function (e, t) {
      t && t.textContent ? e.innerHTML = "智能助手：<br/>" + (t.textContent.length < 36 ? t.textContent : "..." + t.textContent.substring(t.textContent.length - 36)) : e.innerHTML = "智能助手：<br/>空"
    })
  }
}, function (e, t, n) {
  var a = n(539);
  "string" == typeof a && (a = [
    [e.i, a, ""]
  ]);
  var r = {
    hmr: !0
  };
  r.transform = void 0, r.insertInto = undefined;
  n(27)(a, r);
  a.locals && (e.exports = a.locals)
}, function (e, t, n) {
  t = e.exports = n(26)(!1), t.push([e.i, ".krcd-ctrl {\r\n  display: inline;\r\n  background-color: #F0F8FF;\r\n}\r\n\r\n.krcd-label {\r\n  background-color: white;\r\n}\r\n\r\n.krcd-ctrl>.krcd-value,\r\n.krcd-ctrl>.krcd-revise>.krcd-value-revise {\r\n  display: inline;\r\n}\r\n\r\n.krcd-ctrl:after {\r\n  color: red;\r\n  content: attr(krcd-right);\r\n  font-weight: bold;\r\n  position: relative;\r\n  bottom: -2px;\r\n}\r\n\r\n.krcd-ctrl:focus,\r\n.krcd-ctrl>.krcd-value:focus,\r\n.krcd-ctrl>.krcd-revise>.krcd-value-revise:focus {\r\n  background-color: #add8e6;\r\n}\r\n\r\n.krcd-ctrl>.krcd-value:before,\r\n.krcd-ctrl>.krcd-revise>.krcd-value-revise:before {\r\n  color: #0000ff;\r\n  padding-right: 3px;\r\n  content: attr(krcd-left);\r\n}\r\n\r\n.krcd-ctrl>.krcd-value:after,\r\n.krcd-ctrl>.krcd-revise>.krcd-value-revise:after {\r\n  color: #0000ff;\r\n  padding-left: 3px;\r\n  content: attr(krcd-right);\r\n}\r\n\r\n.krcd-ctrl .krcd-value .krcd-val-item {\r\n  box-sizing: border-box;\r\n  border-color: transparent;\r\n  margin: 2px;\r\n  background-color: rgb(208, 216, 223);\r\n  padding: 0 3px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.krcd-auxiliary-root {\r\n  display: none;\r\n}\r\n\r\n.krcd-auxiliary-root>.krcd-auxiliary-bg {\r\n  z-index: 1;\r\n  position: fixed;\r\n  background-color: #000;\r\n  opacity: 0;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n}\r\n\r\n.krcd-auxiliary-root>.krcd-auxiliary-root-dom {\r\n  position: absolute;\r\n  border: 1px solid #ccc;\r\n  min-height: 10px;\r\n  background-color: #fefefe;\r\n  overflow-y: auto;\r\n  z-index: 2;\r\n}\r\n\r\n.krcd-auxiliary-select-ul {\r\n  width: 100%;\r\n  padding: 5px 0;\r\n  font-size: 14px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.krcd-auxiliary-select-ul .selected:after {\r\n  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEX///8AnhIAnBIAmhEAoBMApxQAcg0AIwQAAAAAqRUAqhUAphQApxQAnhIAnBIAnxMAoBMAmBEAmBEAmREAjg4Ajw8AhgwAhQwAZAkAAAAAPwQAagYAOgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj7nRP6mA15EYd3y7///8f1UZbAAAAJnRSTlMAAAAAAAAAAAAzZkjMZjNIzMx7SMxISMxIBlrMYyARBQMSGhcQCRTuOuYAAAABYktHRACIBR1IAAAAB3RJTUUH2wUSFAIAr8Q/BgAAAE9JREFUGNNjYKASYGRiZmHl5EIV4ObhQQjw8jHzC6gJIAQEBYUE1QWFEQIiGkAoyoYQEBPXFJdg50AISEpJy8jKySMEFBSVlFVUFajlCwYA+DcEQfs7xCQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDQtMTBUMDU6Mjk6MzYrMDg6MDA8SYRAAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDExLTA1LTE4VDIwOjAyOjAwKzA4OjAw9hxmegAAAEN0RVh0c29mdHdhcmUAL3Vzci9sb2NhbC9pbWFnZW1hZ2ljay9zaGFyZS9kb2MvSW1hZ2VNYWdpY2stNy8vaW5kZXguaHRtbL21eQoAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADE2Ha9ebwAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxNuUAnuIAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTMwNTcyMDEyME6RfuYAAAAQdEVYdFRodW1iOjpTaXplADMyMUKhri7XAAAAWXRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vaG9tZS93d3dyb290L3NpdGUvd3d3LmVhc3lpY29uLm5ldC9jZG4taW1nLmVhc3lpY29uLmNuL3NyYy8yMC8yMDA3LnBuZ9a2SfkAAAAASUVORK5CYII=);\r\n  font-size: 10px;\r\n  color: #409eff;\r\n  padding-top: 5px;\r\n  right: 10px;\r\n  position: absolute;\r\n}\r\n\r\n.krcd-auxiliary-select-li {\r\n  padding: 0 10px;\r\n  cursor: pointer;\r\n  padding-right: 30px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.hover {\r\n  background-color: #c1c1c1!important;\r\n}\r\n\r\n.selected {\r\n  font-weight: 700;\r\n  color: #409eff;\r\n  background-color: #f5f7fa;\r\n}\r\n\r\n.krcd-select {\r\n  cursor: pointer;\r\n}\r\n\r\n.krcd-section,\r\n.krcd-section>.krcd-value {\r\n  display: inline-block;\r\n  background-color: transparent;\r\n  min-width: 50px; padding: 0 12px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.krcd-section:after{bottom:auto;\r\n  font-weight:normal;\r\n  display:inline-block;\r\n  padding-right:3px;\r\n  content:'}';\r\n  color:#000;\r\n}\r\n\r\n.krcd-section:before{padding-left:3px;\r\n  display:inline-block;\r\n  content:'{';\r\n  color:#000;\r\n}\r\n\r\n.krcd-section>.krcd-value:after,\r\n.krcd-section>.krcd-value:before {\r\n  content: none;\r\n}\r\n\r\n.krcd-warning {\r\n  background-color: yellow;\r\n  color: red;\r\n}\r\n\r\n.tb-solid td,\r\n.tb-solid th {\r\n  border-left: 1px solid black !important;\r\n  border-top: 1px solid black !important;\r\n}\r\n\r\n.tb-solid tr td {\r\n  border-right: 1px solid black !important;\r\n  border-bottom: 1px solid black !important;\r\n}\r\n\r\n.tb-dotted td,\r\n.tb-dotted th {\r\n  border-left: 1px dotted black !important;\r\n  border-top: 1px dotted black !important;\r\n}\r\n\r\n.tb-dotted tr td {\r\n  border-right: 1px dotted black !important;\r\n  border-bottom: 1px dotted black !important;\r\n}\r\n\r\n.tb-hide td,\r\n.tb-hide th {\r\n  border-left: none !important;\r\n  border-top: none !important;\r\n}\r\n\r\n.tb-hide tr td {\r\n  border-right: none !important;\r\n  border-bottom: none !important;\r\n}\r\n\r\n.krcd-assistant-popup {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 2;\r\n}\r\n\r\n.krcd-assistant-popup .assistant-popup-body {\r\n  border: 1px solid #ccc;\r\n  background-color: #fff;\r\n  -webkit-border-radius: 6px;\r\n  -moz-border-radius: 6px;\r\n  border-radius: 6px;\r\n  -webkit-box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);\r\n  -moz-box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);\r\n  -webkit-background-clip: padding-box;\r\n  -moz-background-clip: padding;\r\n  background-clip: padding-box;\r\n  width: 150px;\r\n  opacity: 0.7;\r\n  padding: 5px 0;\r\n}\r\n\r\n\r\n/******* start 批注 ********/\r\n\r\n.krcd-revise {}\r\n\r\n.krcd-revise>.krcd-revise-del {\r\n  display: none;\r\n}\r\n\r\n.krcd-revise-show>.krcd-revise-del {\r\n  display: inline;\r\n  text-decoration: line-through!important;\r\n  text-decoration-color: red!important;\r\n  text-decoration-style: double!important;\r\n}\r\n\r\n.krcd-revise-show>.krcd-revise-add {\r\n  display: inline;\r\n  text-decoration: underline!important;\r\n  text-decoration-color: blue!important;\r\n  text-decoration-style: double!important;\r\n}\r\n\r\n.krcd-revise-show>.revise-prompt {\r\n  position: absolute;\r\n  background: black;\r\n  z-index: 1;\r\n  border: 1px solid #e5e5e5;\r\n  border-radius: 4px;\r\n  font-size: 11px;\r\n  display: block;\r\n  padding: 5px;\r\n  margin-top: -3px;\r\n  visibility: visible;\r\n  opacity: .8;\r\n  color: #999;\r\n}\r\n\r\n.krcd-revise-show>.revise-prompt>.revise-prompt-tip {\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 3px solid transparent;\r\n  border-right: 3px solid transparent;\r\n  border-top: 5px solid black;\r\n  opacity: .8;\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n\r\n/******* end 批注 ********/\r\n\r\n\r\n/******* start 结构化模板 ********/\r\n\r\n.krcd-tmp-root { min-height: 840px;display: flex;flex-direction: column;justify-content: space-between;}\r\n\r\n.krcd-tmp-root .krcd-tmp-header {border-bottom: 1px solid #d3d3d3;border-left: 1px solid #d3d3d3;border-right: 1px solid #d3d3d3;height: 3%;}\r\n\r\n.krcd-tmp-root .krcd-tmp-header .krcd-tmp-header-value {\r\n  display: none;\r\n  min-height: 15px;\r\n}\r\n\r\n.krcd-tmp-root .krcd-tmp-content {flex: 1;}\r\n\r\n.krcd-tmp-root .krcd-tmp-content .krcd-tmp-content-value {\r\n  outline:none!important;\r\n}\r\n\r\n.krcd-tmp-root .krcd-tmp-footer {border-top:1px solid #d3d3d3;border-left:1px solid #d3d3d3;border-right:1px solid #d3d3d3;height:3%}\r\n\r\n.krcd-tmp-root .krcd-tmp-footer .krcd-tmp-footer-value {\r\n  display: none;\r\n  min-height: 15px;\r\n}\r\n\r\n\r\n/******* end 结构化模板 ********/\r\n\r\n.krcd-table{\r\n  width: 100%;\r\n}\r\nimg.kfformula {\r\n  vertical-align: middle;\r\n}\r\n", ""])
}]);

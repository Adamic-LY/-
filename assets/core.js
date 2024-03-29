/*!
FullCalendar Core Package v4.3.1
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).FullCalendar = {}) }(this, function(e) {
    "use strict";
    var tankuang = document.getElementById('tankuang');
    var content = document.getElementById('text');
    var t = { className: !0, colSpan: !0, rowSpan: !0 },
        n = { "<tr": "tbody", "<td": "tr" };

    function r(e, n, r) {
        var i = document.createElement(e);
        if (n)
            for (var o in n) "style" === o ? y(i, n[o]) : t[o] ? i[o] = n[o] : i.setAttribute(o, n[o]);
        return "string" == typeof r ? i.innerHTML = r : null != r && s(i, r), i
    }

    function i(e) { e = e.trim(); var t = document.createElement(a(e)); return t.innerHTML = e, t.firstChild }

    function o(e) { return Array.prototype.slice.call(function(e) { e = e.trim(); var t = document.createElement(a(e)); return t.innerHTML = e, t.childNodes }(e)) }

    function a(e) { return n[e.substr(0, 3)] || "div" }

    function s(e, t) { for (var n = l(t), r = 0; r < n.length; r++) e.appendChild(n[r]) }

    function u(e, t) { for (var n = l(t), r = e.firstChild || null, i = 0; i < n.length; i++) e.insertBefore(n[i], r) }

    function l(e) { return "string" == typeof e ? o(e) : e instanceof Node ? [e] : Array.prototype.slice.call(e) }

    function c(e) { e.parentNode && e.parentNode.removeChild(e) }
    var d = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.msMatchesSelector,
        f = Element.prototype.closest || function(e) {
            var t = this;
            if (!document.documentElement.contains(t)) return null;
            do {
                if (h(t, e)) return t;
                t = t.parentElement || t.parentNode
            } while (null !== t && 1 === t.nodeType);
            return null
        };

    function p(e, t) { return f.call(e, t) }

    function h(e, t) { return d.call(e, t) }

    function v(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], i = 0; i < n.length; i++)
            for (var o = n[i].querySelectorAll(t), a = 0; a < o.length; a++) r.push(o[a]);
        return r
    }
    var g = /(top|left|right|bottom|width|height)$/i;

    function y(e, t) { for (var n in t) m(e, n, t[n]) }

    function m(e, t, n) { null == n ? e.style[t] = "" : "number" == typeof n && g.test(t) ? e.style[t] = n + "px" : e.style[t] = n }

    function E(e, t) { var n = { left: Math.max(e.left, t.left), right: Math.min(e.right, t.right), top: Math.max(e.top, t.top), bottom: Math.min(e.bottom, t.bottom) }; return n.left < n.right && n.top < n.bottom && n }
    var S = null;

    function b() {
        return null === S && (S = function() {
            var e = r("div", { style: { position: "absolute", top: -1e3, left: 0, border: 0, padding: 0, overflow: "scroll", direction: "rtl" } }, "<div></div>");
            document.body.appendChild(e);
            var t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
            return c(e), t
        }()), S
    }

    function D(e) { return e = Math.max(0, e), e = Math.round(e) }

    function T(e, t) {
        void 0 === t && (t = !1);
        var n = window.getComputedStyle(e),
            r = parseInt(n.borderLeftWidth, 10) || 0,
            i = parseInt(n.borderRightWidth, 10) || 0,
            o = parseInt(n.borderTopWidth, 10) || 0,
            a = parseInt(n.borderBottomWidth, 10) || 0,
            s = D(e.offsetWidth - e.clientWidth - r - i),
            u = { borderLeft: r, borderRight: i, borderTop: o, borderBottom: a, scrollbarBottom: D(e.offsetHeight - e.clientHeight - o - a), scrollbarLeft: 0, scrollbarRight: 0 };
        return b() && "rtl" === n.direction ? u.scrollbarLeft = s : u.scrollbarRight = s, t && (u.paddingLeft = parseInt(n.paddingLeft, 10) || 0, u.paddingRight = parseInt(n.paddingRight, 10) || 0, u.paddingTop = parseInt(n.paddingTop, 10) || 0, u.paddingBottom = parseInt(n.paddingBottom, 10) || 0), u
    }

    function w(e, t) {
        void 0 === t && (t = !1);
        var n = R(e),
            r = T(e, t),
            i = { left: n.left + r.borderLeft + r.scrollbarLeft, right: n.right - r.borderRight - r.scrollbarRight, top: n.top + r.borderTop, bottom: n.bottom - r.borderBottom - r.scrollbarBottom };
        return t && (i.left += r.paddingLeft, i.right -= r.paddingRight, i.top += r.paddingTop, i.bottom -= r.paddingBottom), i
    }

    function R(e) { var t = e.getBoundingClientRect(); return { left: t.left + window.pageXOffset, top: t.top + window.pageYOffset, right: t.right + window.pageXOffset, bottom: t.bottom + window.pageYOffset } }

    function I(e) { return e.getBoundingClientRect().height + C(e) }

    function C(e) { var t = window.getComputedStyle(e); return parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10) }

    function M(e) { for (var t = []; e instanceof HTMLElement;) { var n = window.getComputedStyle(e); if ("fixed" === n.position) break; /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), e = e.parentNode } return t }

    function k(e) { e.preventDefault() }

    function O(e, t, n, r) {
        function i(e) {
            var t = p(e.target, n);
            t && r.call(t, e, t)
        }
        return e.addEventListener(t, i),
            function() { e.removeEventListener(t, i) }
    }
    var _ = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];
    var P = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    function x(e, t) { var n = Z(e); return n[2] += t, j(n) }

    function H(e, t) { var n = Z(e); return n[6] += t, j(n) }

    function N(e, t) { return (t.valueOf() - e.valueOf()) / 864e5 }

    function z(e, t) {
        var n = B(e),
            r = B(t);
        return { years: 0, months: 0, days: Math.round(N(n, r)), milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf()) }
    }

    function U(e, t) { var n = L(e, t); return null !== n && n % 7 == 0 ? n / 7 : null }

    function L(e, t) { return q(e) === q(t) ? Math.round(N(e, t)) : null }

    function B(e) { return j([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]) }

    function V(e, t, n, r) {
        var i = j([t, 0, 1 + A(t, n, r)]),
            o = B(e),
            a = Math.round(N(i, o));
        return Math.floor(a / 7) + 1
    }

    function A(e, t, n) { var r = 7 + t - n; return -((7 + j([e, 0, r]).getUTCDay() - t) % 7) + r - 1 }

    function F(e) { return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()] }

    function W(e) { return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0) }

    function Z(e) { return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()] }

    function j(e) { return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e)) }

    function Y(e) { return !isNaN(e.valueOf()) }

    function q(e) { return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds() }
    var G = ["years", "months", "days", "milliseconds"],
        X = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;

    function J(e, t) { var n; return "string" == typeof e ? function(e) { var t = X.exec(e); if (t) { var n = t[1] ? -1 : 1; return { years: 0, months: 0, days: n * (t[2] ? parseInt(t[2], 10) : 0), milliseconds: n * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0)) } } return null }(e) : "object" == typeof e && e ? K(e) : "number" == typeof e ? K(((n = {})[t || "milliseconds"] = e, n)) : null }

    function K(e) { return { years: e.years || e.year || 0, months: e.months || e.month || 0, days: (e.days || e.day || 0) + 7 * Q(e), milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0) } }

    function Q(e) { return e.weeks || e.week || 0 }

    function $(e, t) { return e.years === t.years && e.months === t.months && e.days === t.days && e.milliseconds === t.milliseconds }

    function ee(e) { return te(e) / 864e5 }

    function te(e) { return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds }

    function ne(e, t) { var n = e.milliseconds; if (n) { if (n % 1e3 != 0) return { unit: "millisecond", value: n }; if (n % 6e4 != 0) return { unit: "second", value: n / 1e3 }; if (n % 36e5 != 0) return { unit: "minute", value: n / 6e4 }; if (n) return { unit: "hour", value: n / 36e5 } } return e.days ? t || e.days % 7 != 0 ? { unit: "day", value: e.days } : { unit: "week", value: e.days / 7 } : e.months ? { unit: "month", value: e.months } : e.years ? { unit: "year", value: e.years } : { unit: "millisecond", value: 0 } }

    function re(e) { e.forEach(function(e) { e.style.height = "" }) }

    function ie(e) {
        var t, n, r = [],
            i = [];
        for ("string" == typeof e ? i = e.split(/\s*,\s*/) : "function" == typeof e ? i = [e] : Array.isArray(e) && (i = e), t = 0; t < i.length; t++) "string" == typeof(n = i[t]) ? r.push("-" === n.charAt(0) ? { field: n.substring(1), order: -1 } : { field: n, order: 1 }) : "function" == typeof n && r.push({ func: n });
        return r
    }

    function oe(e, t, n) {
        var r, i;
        for (r = 0; r < n.length; r++)
            if (i = ae(e, t, n[r])) return i;
        return 0
    }

    function ae(e, t, n) { return n.func ? n.func(e, t) : se(e[n.field], t[n.field]) * (n.order || 1) }

    function se(e, t) { return e || t ? null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t : 0 }

    function ue(e) { return e.charAt(0).toUpperCase() + e.slice(1) }

    function le(e, t) { var n = String(e); return "000".substr(0, t - n.length) + n }

    function ce(e) { return e % 1 == 0 }

    function de(e, t, n) {
        if ("function" == typeof e && (e = [e]), e) {
            var r = void 0,
                i = void 0;
            for (r = 0; r < e.length; r++) i = e[r].apply(t, n) || i;
            return i
        }
    }

    function fe() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var n = 0; n < e.length; n++)
            if (void 0 !== e[n]) return e[n]
    }

    function pe(e, t) {
        var n, r, i, o, a, s = function() {
            var u = (new Date).valueOf() - o;
            u < t ? n = setTimeout(s, t - u) : (n = null, a = e.apply(i, r), i = r = null)
        };
        return function() { return i = this, r = arguments, o = (new Date).valueOf(), n || (n = setTimeout(s, t)), a }
    }

    function he(e, t, n, r) {
        void 0 === n && (n = {});
        var i = {};
        for (var o in t) {
            var a = t[o];
            void 0 !== e[o] ? a === Function ? i[o] = "function" == typeof e[o] ? e[o] : null : i[o] = a ? a(e[o]) : e[o] : void 0 !== n[o] ? i[o] = n[o] : a === String ? i[o] = "" : a && a !== Number && a !== Boolean && a !== Function ? i[o] = a(null) : i[o] = null
        }
        if (r)
            for (var o in e) void 0 === t[o] && (r[o] = e[o]);
        return i
    }

    function ve(e) {
        var t = Math.floor(N(e.start, e.end)) || 1,
            n = B(e.start);
        return { start: n, end: x(n, t) }
    }

    function ge(e, t) {
        void 0 === t && (t = J(0));
        var n = null,
            r = null;
        if (e.end) {
            r = B(e.end);
            var i = e.end.valueOf() - r.valueOf();
            i && i >= te(t) && (r = x(r, 1))
        }
        return e.start && (n = B(e.start), r && r <= n && (r = x(n, 1))), { start: n, end: r }
    }

    function ye(e, t, n, r) { return "year" === r ? J(n.diffWholeYears(e, t), "year") : "month" === r ? J(n.diffWholeMonths(e, t), "month") : z(e, t) }
    var me = function(e, t) {
        return (me = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
    };

    function Ee(e, t) {
        function n() { this.constructor = e }
        me(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var Se = function() {
        return (Se = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };

    function be(e, t, n, r, i) { var o = i[e.recurringDef.typeId].expand(e.recurringDef.typeData, { start: r.subtract(n.start, t), end: n.end }, r); return e.allDay && (o = o.map(B)), o }
    var De = Object.prototype.hasOwnProperty;

    function Te(e, t) {
        var n, r, i, o, a, s, u = {};
        if (t)
            for (n = 0; n < t.length; n++) {
                for (r = t[n], i = [], o = e.length - 1; o >= 0; o--)
                    if ("object" == typeof(a = e[o][r]) && a) i.unshift(a);
                    else if (void 0 !== a) { u[r] = a; break }
                i.length && (u[r] = Te(i))
            }
        for (n = e.length - 1; n >= 0; n--)
            for (r in s = e[n]) r in u || (u[r] = s[r]);
        return u
    }

    function we(e, t) { var n = {}; for (var r in e) t(e[r], r) && (n[r] = e[r]); return n }

    function Re(e, t) { var n = {}; for (var r in e) n[r] = t(e[r], r); return n }

    function Ie(e) { for (var t = {}, n = 0, r = e; n < r.length; n++) { t[r[n]] = !0 } return t }

    function Ce(e) { var t = []; for (var n in e) t.push(e[n]); return t }

    function Me(e, t) {
        for (var n in e)
            if (De.call(e, n) && !(n in t)) return !1;
        for (var n in t)
            if (De.call(t, n) && e[n] !== t[n]) return !1;
        return !0
    }

    function ke(e, t, n, r) {
        for (var i = { defs: {}, instances: {} }, o = 0, a = e; o < a.length; o++) {
            var s = Ft(a[o], t, n, r);
            s && Oe(s, i)
        }
        return i
    }

    function Oe(e, t) { return void 0 === t && (t = { defs: {}, instances: {} }), t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t }

    function _e(e, t, n) {
        var r = n.dateEnv,
            i = e.defs,
            o = e.instances;
        for (var a in o = we(o, function(e) { return !i[e.defId].recurringDef }), i) {
            var s = i[a];
            if (s.recurringDef) {
                var u = s.recurringDef.duration;
                u || (u = s.allDay ? n.defaultAllDayEventDuration : n.defaultTimedEventDuration);
                for (var l = 0, c = be(s, u, t, n.dateEnv, n.pluginSystem.hooks.recurringTypes); l < c.length; l++) {
                    var d = c[l],
                        f = Zt(a, { start: d, end: r.add(d, u) });
                    o[f.instanceId] = f
                }
            }
        }
        return { defs: i, instances: o }
    }

    function Pe(e, t) {
        var n = e.instances[t];
        if (n) {
            var r = e.defs[n.defId],
                i = ze(e, function(e) { return t = r, n = e, Boolean(t.groupId && t.groupId === n.groupId); var t, n });
            return i.defs[r.defId] = r, i.instances[n.instanceId] = n, i
        }
        return { defs: {}, instances: {} }
    }

    function xe(e, t) {
        var n;
        if (t) {
            n = [];
            for (var r = 0, i = e; r < i.length; r++) {
                var o = i[r],
                    a = t(o);
                a ? n.push(a) : null == a && n.push(o)
            }
        } else n = e;
        return n
    }

    function He() { return { defs: {}, instances: {} } }

    function Ne(e, t) { return { defs: Se({}, e.defs, t.defs), instances: Se({}, e.instances, t.instances) } }

    function ze(e, t) {
        var n = we(e.defs, t),
            r = we(e.instances, function(e) { return n[e.defId] });
        return { defs: n, instances: r }
    }

    function Ue(e, t) {
        var n = null,
            r = null;
        return e.start && (n = t.createMarker(e.start)), e.end && (r = t.createMarker(e.end)), n || r ? n && r && r < n ? null : { start: n, end: r } : null
    }

    function Le(e, t) {
        var n, r, i = [],
            o = t.start;
        for (e.sort(Be), n = 0; n < e.length; n++)(r = e[n]).start > o && i.push({ start: o, end: r.start }), r.end > o && (o = r.end);
        return o < t.end && i.push({ start: o, end: t.end }), i
    }

    function Be(e, t) { return e.start.valueOf() - t.start.valueOf() }

    function Ve(e, t) {
        var n = e.start,
            r = e.end,
            i = null;
        return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))), null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))), (null === n || null === r || n < r) && (i = { start: n, end: r }), i
    }

    function Ae(e, t) { return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf()) }

    function Fe(e, t) { return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end) }

    function We(e, t) { return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end) }

    function Ze(e, t) { return (null === e.start || t >= e.start) && (null === e.end || t < e.end) }

    function je(e, t) {
        var n, r = e.length;
        if (r !== t.length) return !1;
        for (n = 0; n < r; n++)
            if (e[n] !== t[n]) return !1;
        return !0
    }

    function Ye(e) { var t, n; return function() { return t && je(t, arguments) || (t = arguments, n = e.apply(this, arguments)), n } }

    function qe(e, t) { var n = null; return function() { var r = e.apply(this, arguments); return (null === n || n !== r && !t(n, r)) && (n = r), n } }
    var Ge = { week: 3, separator: 0, omitZeroMinute: 0, meridiem: 0, omitCommas: 0 },
        Xe = { timeZoneName: 7, era: 6, year: 5, month: 4, day: 2, weekday: 2, hour: 1, minute: 1, second: 1 },
        Je = /\s*([ap])\.?m\.?/i,
        Ke = /,/g,
        Qe = /\s+/g,
        $e = /\u200e/g,
        et = /UTC|GMT/,
        tt = function() {
            function e(e) {
                var t = {},
                    n = {},
                    r = 0;
                for (var i in e) i in Ge ? (n[i] = e[i], r = Math.max(Ge[i], r)) : (t[i] = e[i], i in Xe && (r = Math.max(Xe[i], r)));
                this.standardDateProps = t, this.extendedSettings = n, this.severity = r, this.buildFormattingFunc = Ye(nt)
            }
            return e.prototype.format = function(e, t) { return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e) }, e.prototype.formatRange = function(e, t, n) {
                var r = this.standardDateProps,
                    i = this.extendedSettings,
                    o = function(e, t, n) { if (n.getMarkerYear(e) !== n.getMarkerYear(t)) return 5; if (n.getMarkerMonth(e) !== n.getMarkerMonth(t)) return 4; if (n.getMarkerDay(e) !== n.getMarkerDay(t)) return 2; if (q(e) !== q(t)) return 1; return 0 }(e.marker, t.marker, n.calendarSystem);
                if (!o) return this.format(e, n);
                var a = o;
                !(a > 1) || "numeric" !== r.year && "2-digit" !== r.year || "numeric" !== r.month && "2-digit" !== r.month || "numeric" !== r.day && "2-digit" !== r.day || (a = 1);
                var s = this.format(e, n),
                    u = this.format(t, n);
                if (s === u) return s;
                var l = nt(function(e, t) { var n = {}; for (var r in e) r in Xe && !(Xe[r] <= t) || (n[r] = e[r]); return n }(r, a), i, n),
                    c = l(e),
                    d = l(t),
                    f = function(e, t, n, r) {
                        var i = 0;
                        for (; i < e.length;) {
                            var o = e.indexOf(t, i);
                            if (-1 === o) break;
                            var a = e.substr(0, o);
                            i = o + t.length;
                            for (var s = e.substr(i), u = 0; u < n.length;) {
                                var l = n.indexOf(r, u);
                                if (-1 === l) break;
                                var c = n.substr(0, l);
                                u = l + r.length;
                                var d = n.substr(u);
                                if (a === c && s === d) return { before: a, after: s }
                            }
                        }
                        return null
                    }(s, c, u, d),
                    p = i.separator || "";
                return f ? f.before + c + p + d + f.after : s + p + u
            }, e.prototype.getLargestUnit = function() {
                switch (this.severity) {
                    case 7:
                    case 6:
                    case 5:
                        return "year";
                    case 4:
                        return "month";
                    case 3:
                        return "week";
                    default:
                        return "day"
                }
            }, e
        }();

    function nt(e, t, n) {
        var r = Object.keys(e).length;
        return 1 === r && "short" === e.timeZoneName ? function(e) { return at(e.timeZoneOffset) } : 0 === r && t.week ? function(e) {
            return function(e, t, n, r) {
                var i = [];
                "narrow" === r ? i.push(t) : "short" === r && i.push(t, " ");
                i.push(n.simpleNumberFormat.format(e)), n.options.isRtl && i.reverse();
                return i.join("")
            }(n.computeWeekNumber(e.marker), n.weekLabel, n.locale, t.week)
        } : function(e, t, n) {
            e = Se({}, e), t = Se({}, t),
                function(e, t) {
                    e.timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit"));
                    "long" === e.timeZoneName && (e.timeZoneName = "short");
                    t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute
                }(e, t), e.timeZone = "UTC";
            var r, i = new Intl.DateTimeFormat(n.locale.codes, e);
            if (t.omitZeroMinute) {
                var o = Se({}, e);
                delete o.minute, r = new Intl.DateTimeFormat(n.locale.codes, o)
            }
            return function(o) {
                var a = o.marker,
                    s = (r && !a.getUTCMinutes() ? r : i).format(a);
                return function(e, t, n, r, i) {
                    e = e.replace($e, ""), "short" === n.timeZoneName && (e = function(e, t) {
                        var n = !1;
                        e = e.replace(et, function() { return n = !0, t }), n || (e += " " + t);
                        return e
                    }(e, "UTC" === i.timeZone || null == t.timeZoneOffset ? "UTC" : at(t.timeZoneOffset)));
                    r.omitCommas && (e = e.replace(Ke, "").trim());
                    r.omitZeroMinute && (e = e.replace(":00", ""));
                    !1 === r.meridiem ? e = e.replace(Je, "").trim() : "narrow" === r.meridiem ? e = e.replace(Je, function(e, t) { return t.toLocaleLowerCase() }) : "short" === r.meridiem ? e = e.replace(Je, function(e, t) { return t.toLocaleLowerCase() + "m" }) : "lowercase" === r.meridiem && (e = e.replace(Je, function(e) { return e.toLocaleLowerCase() }));
                    return e = (e = e.replace(Qe, " ")).trim()
                }(s, o, e, t, n)
            }
        }(e, t, n)
    }
    var rt = function() {
            function e(e, t) { this.cmdStr = e, this.separator = t }
            return e.prototype.format = function(e, t) { return t.cmdFormatter(this.cmdStr, st(e, null, t, this.separator)) }, e.prototype.formatRange = function(e, t, n) { return n.cmdFormatter(this.cmdStr, st(e, t, n, this.separator)) }, e
        }(),
        it = function() {
            function e(e) { this.func = e }
            return e.prototype.format = function(e, t) { return this.func(st(e, null, t)) }, e.prototype.formatRange = function(e, t, n) { return this.func(st(e, t, n)) }, e
        }();

    function ot(e, t) { return "object" == typeof e && e ? ("string" == typeof t && (e = Se({ separator: t }, e)), new tt(e)) : "string" == typeof e ? new rt(e, t) : "function" == typeof e ? new it(e) : void 0 }

    function at(e, t) {
        void 0 === t && (t = !1);
        var n = e < 0 ? "-" : "+",
            r = Math.abs(e),
            i = Math.floor(r / 60),
            o = Math.round(r % 60);
        return t ? n + le(i, 2) + ":" + le(o, 2) : "GMT" + n + i + (o ? ":" + le(o, 2) : "")
    }

    function st(e, t, n, r) { var i = ut(e, n.calendarSystem); return { date: i, start: i, end: t ? ut(t, n.calendarSystem) : null, timeZone: n.timeZone, localeCodes: n.locale.codes, separator: r } }

    function ut(e, t) { var n = t.markerToArray(e.marker); return { marker: e.marker, timeZoneOffset: e.timeZoneOffset, array: n, year: n[0], month: n[1], day: n[2], hour: n[3], minute: n[4], second: n[5], millisecond: n[6] } }
    var lt = function() {
            function e(e, t) { this.calendar = e, this.internalEventSource = t }
            return e.prototype.remove = function() { this.calendar.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: this.internalEventSource.sourceId }) }, e.prototype.refetch = function() { this.calendar.dispatch({ type: "FETCH_EVENT_SOURCES", sourceIds: [this.internalEventSource.sourceId] }) }, Object.defineProperty(e.prototype, "id", { get: function() { return this.internalEventSource.publicId }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "url", { get: function() { return this.internalEventSource.meta.url }, enumerable: !0, configurable: !0 }), e
        }(),
        ct = function() {
            function e(e, t, n) { this._calendar = e, this._def = t, this._instance = n || null }
            return e.prototype.setProp = function(e, t) {
                var n, r;
                if (e in Vt);
                else if (e in Bt) "function" == typeof Bt[e] && (t = Bt[e](t)), this.mutate({ standardProps: (n = {}, n[e] = t, n) });
                else if (e in xt) { var i = void 0; "function" == typeof xt[e] && (t = xt[e](t)), "color" === e ? i = { backgroundColor: t, borderColor: t } : "editable" === e ? i = { startEditable: t, durationEditable: t } : ((r = {})[e] = t, i = r), this.mutate({ standardProps: { ui: i } }) }
            }, e.prototype.setExtendedProp = function(e, t) {
                var n;
                this.mutate({ extendedProps: (n = {}, n[e] = t, n) })
            }, e.prototype.setStart = function(e, t) {
                void 0 === t && (t = {});
                var n = this._calendar.dateEnv,
                    r = n.createMarker(e);
                if (r && this._instance) {
                    var i = ye(this._instance.range.start, r, n, t.granularity);
                    t.maintainDuration ? this.mutate({ datesDelta: i }) : this.mutate({ startDelta: i })
                }
            }, e.prototype.setEnd = function(e, t) {
                void 0 === t && (t = {});
                var n, r = this._calendar.dateEnv;
                if ((null == e || (n = r.createMarker(e))) && this._instance)
                    if (n) {
                        var i = ye(this._instance.range.end, n, r, t.granularity);
                        this.mutate({ endDelta: i })
                    } else this.mutate({ standardProps: { hasEnd: !1 } })
            }, e.prototype.setDates = function(e, t, n) {
                void 0 === n && (n = {});
                var r, i = this._calendar.dateEnv,
                    o = { allDay: n.allDay },
                    a = i.createMarker(e);
                if (a && (null == t || (r = i.createMarker(t))) && this._instance) {
                    var s = this._instance.range;
                    !0 === n.allDay && (s = ve(s));
                    var u = ye(s.start, a, i, n.granularity);
                    if (r) {
                        var l = ye(s.end, r, i, n.granularity);
                        $(u, l) ? this.mutate({ datesDelta: u, standardProps: o }) : this.mutate({ startDelta: u, endDelta: l, standardProps: o })
                    } else o.hasEnd = !1, this.mutate({ datesDelta: u, standardProps: o })
                }
            }, e.prototype.moveStart = function(e) {
                var t = J(e);
                t && this.mutate({ startDelta: t })
            }, e.prototype.moveEnd = function(e) {
                var t = J(e);
                t && this.mutate({ endDelta: t })
            }, e.prototype.moveDates = function(e) {
                var t = J(e);
                t && this.mutate({ datesDelta: t })
            }, e.prototype.setAllDay = function(e, t) {
                void 0 === t && (t = {});
                var n = { allDay: e },
                    r = t.maintainDuration;
                null == r && (r = this._calendar.opt("allDayMaintainDuration")), this._def.allDay !== e && (n.hasEnd = r), this.mutate({ standardProps: n })
            }, e.prototype.formatRange = function(e) {
                var t = this._calendar.dateEnv,
                    n = this._instance,
                    r = ot(e, this._calendar.opt("defaultRangeSeparator"));
                return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, { forcedStartTzo: n.forcedStartTzo, forcedEndTzo: n.forcedEndTzo }) : t.format(n.range.start, r, { forcedTzo: n.forcedStartTzo })
            }, e.prototype.mutate = function(e) {
                var t = this._def,
                    n = this._instance;
                if (n) {
                    this._calendar.dispatch({ type: "MUTATE_EVENTS", instanceId: n.instanceId, mutation: e, fromApi: !0 });
                    var r = this._calendar.state.eventStore;
                    this._def = r.defs[t.defId], this._instance = r.instances[n.instanceId]
                }
            }, e.prototype.remove = function() { this._calendar.dispatch({ type: "REMOVE_EVENT_DEF", defId: this._def.defId }) }, Object.defineProperty(e.prototype, "source", { get: function() { var e = this._def.sourceId; return e ? new lt(this._calendar, this._calendar.state.eventSources[e]) : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "start", { get: function() { return this._instance ? this._calendar.dateEnv.toDate(this._instance.range.start) : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "end", { get: function() { return this._instance && this._def.hasEnd ? this._calendar.dateEnv.toDate(this._instance.range.end) : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "id", { get: function() { return this._def.publicId }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "groupId", { get: function() { return this._def.groupId }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "allDay", { get: function() { return this._def.allDay }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "title", { get: function() { return this._def.title }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "url", { get: function() { return this._def.url }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "rendering", { get: function() { return this._def.rendering }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "startEditable", { get: function() { return this._def.ui.startEditable }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "durationEditable", { get: function() { return this._def.ui.durationEditable }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "constraint", { get: function() { return this._def.ui.constraints[0] || null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "overlap", { get: function() { return this._def.ui.overlap }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "allow", { get: function() { return this._def.ui.allows[0] || null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "backgroundColor", { get: function() { return this._def.ui.backgroundColor }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "borderColor", { get: function() { return this._def.ui.borderColor }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "textColor", { get: function() { return this._def.ui.textColor }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "classNames", { get: function() { return this._def.ui.classNames }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "extendedProps", { get: function() { return this._def.extendedProps }, enumerable: !0, configurable: !0 }), e
        }();

    function dt(e, t, n, r) {
        var i = {},
            o = {},
            a = {},
            s = [],
            u = [],
            l = vt(e.defs, t);
        for (var c in e.defs) { "inverse-background" === (S = e.defs[c]).rendering && (S.groupId ? (i[S.groupId] = [], a[S.groupId] || (a[S.groupId] = S)) : o[c] = []) }
        for (var d in e.instances) {
            var f = e.instances[d],
                p = l[(S = e.defs[f.defId]).defId],
                h = f.range,
                v = !S.allDay && r ? ge(h, r) : h,
                g = Ve(v, n);
            g && ("inverse-background" === S.rendering ? S.groupId ? i[S.groupId].push(g) : o[f.defId].push(g) : ("background" === S.rendering ? s : u).push({ def: S, ui: p, instance: f, range: g, isStart: v.start && v.start.valueOf() === g.start.valueOf(), isEnd: v.end && v.end.valueOf() === g.end.valueOf() }))
        }
        for (var y in i)
            for (var m = 0, E = Le(i[y], n); m < E.length; m++) {
                var S, b = E[m];
                p = l[(S = a[y]).defId];
                s.push({ def: S, ui: p, instance: null, range: b, isStart: !1, isEnd: !1 })
            }
        for (var c in o)
            for (var D = 0, T = Le(o[c], n); D < T.length; D++) {
                b = T[D];
                s.push({ def: e.defs[c], ui: l[c], instance: null, range: b, isStart: !1, isEnd: !1 })
            }
        return { bg: s, fg: u }
    }

    function ft(e, t, n) {
        e.hasPublicHandlers("eventRender") && (t = t.filter(function(t) { var r = e.publiclyTrigger("eventRender", [{ event: new ct(e.calendar, t.eventRange.def, t.eventRange.instance), isMirror: n, isStart: t.isStart, isEnd: t.isEnd, el: t.el, view: e }]); return !1 !== r && (r && !0 !== r && (t.el = r), !0) }));
        for (var r = 0, i = t; r < i.length; r++) {
            var o = i[r];
            pt(o.el, o)
        }
        return t
    }

    function pt(e, t) { e.fcSeg = t }

    function ht(e) { return e.fcSeg || null }

    function vt(e, t) { return Re(e, function(e) { return gt(e, t) }) }

    function gt(e, t) { var n = []; return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), Ut(n) }

    function yt(e, t, n, r) {
        var i = vt(e.defs, t),
            o = { defs: {}, instances: {} };
        for (var a in e.defs) {
            var s = e.defs[a];
            o.defs[a] = mt(s, i[a], n, r.pluginSystem.hooks.eventDefMutationAppliers, r)
        }
        for (var u in e.instances) {
            var l = e.instances[u];
            s = o.defs[l.defId];
            o.instances[u] = Et(l, s, i[l.defId], n, r)
        }
        return o
    }

    function mt(e, t, n, r, i) {
        var o = n.standardProps || {};
        null == o.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (o.hasEnd = !0);
        var a = Se({}, e, o, { ui: Se({}, e.ui, o.ui) });
        n.extendedProps && (a.extendedProps = Se({}, a.extendedProps, n.extendedProps));
        for (var s = 0, u = r; s < u.length; s++) {
            (0, u[s])(a, n, i)
        }
        return !a.hasEnd && i.opt("forceEventDuration") && (a.hasEnd = !0), a
    }

    function Et(e, t, n, r, i) {
        var o = i.dateEnv,
            a = r.standardProps && !0 === r.standardProps.allDay,
            s = r.standardProps && !1 === r.standardProps.hasEnd,
            u = Se({}, e);
        return a && (u.range = ve(u.range)), r.datesDelta && n.startEditable && (u.range = { start: o.add(u.range.start, r.datesDelta), end: o.add(u.range.end, r.datesDelta) }), r.startDelta && n.durationEditable && (u.range = { start: o.add(u.range.start, r.startDelta), end: u.range.end }), r.endDelta && n.durationEditable && (u.range = { start: u.range.start, end: o.add(u.range.end, r.endDelta) }), s && (u.range = { start: u.range.start, end: i.getDefaultEventEnd(t.allDay, u.range.start) }), t.allDay && (u.range = { start: B(u.range.start), end: B(u.range.end) }), u.range.end < u.range.start && (u.range.end = i.getDefaultEventEnd(t.allDay, u.range.start)), u
    }

    function St(e, t, n, r, i) {
        switch (t.type) {
            case "RECEIVE_EVENTS":
                return function(e, t, n, r, i, o) {
                    if (t && n === t.latestFetchId) {
                        var a = ke(function(e, t, n) {
                            var r = n.opt("eventDataTransform"),
                                i = t ? t.eventDataTransform : null;
                            return i && (e = xe(e, i)), r && (e = xe(e, r)), e
                        }(i, t, o), t.sourceId, o);
                        return r && (a = _e(a, r, o)), Ne(bt(e, t.sourceId), a)
                    }
                    return e
                }(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, i);
            case "ADD_EVENTS":
                return function(e, t, n, r) { n && (t = _e(t, n, r)); return Ne(e, t) }(e, t.eventStore, r ? r.activeRange : null, i);
            case "MERGE_EVENTS":
                return Ne(e, t.eventStore);
            case "PREV":
            case "NEXT":
            case "SET_DATE":
            case "SET_VIEW_TYPE":
                return r ? _e(e, r.activeRange, i) : e;
            case "CHANGE_TIMEZONE":
                return function(e, t, n) {
                    var r = e.defs,
                        i = Re(e.instances, function(e) { var i = r[e.defId]; return i.allDay || i.recurringDef ? e : Se({}, e, { range: { start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)), end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo)) }, forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo }) });
                    return { defs: r, instances: i }
                }(e, t.oldDateEnv, i.dateEnv);
            case "MUTATE_EVENTS":
                return function(e, t, n, r, i) {
                    var o = Pe(e, t),
                        a = r ? { "": { startEditable: !0, durationEditable: !0, constraints: [], overlap: null, allows: [], backgroundColor: "", borderColor: "", textColor: "", classNames: [] } } : i.eventUiBases;
                    return o = yt(o, a, n, i), Ne(e, o)
                }(e, t.instanceId, t.mutation, t.fromApi, i);
            case "REMOVE_EVENT_INSTANCES":
                return Dt(e, t.instances);
            case "REMOVE_EVENT_DEF":
                return ze(e, function(e) { return e.defId !== t.defId });
            case "REMOVE_EVENT_SOURCE":
                return bt(e, t.sourceId);
            case "REMOVE_ALL_EVENT_SOURCES":
                return ze(e, function(e) { return !e.sourceId });
            case "REMOVE_ALL_EVENTS":
                return { defs: {}, instances: {} };
            case "RESET_EVENTS":
                return { defs: e.defs, instances: e.instances };
            default:
                return e
        }
    }

    function bt(e, t) { return ze(e, function(e) { return e.sourceId !== t }) }

    function Dt(e, t) { return { defs: e.defs, instances: we(e.instances, function(e) { return !t[e.instanceId] }) } }

    function Tt(e, t) { return wt({ eventDrag: e }, t) }

    function wt(e, t) {
        var n = t.view,
            r = Se({ businessHours: n ? n.props.businessHours : { defs: {}, instances: {} }, dateSelection: "", eventStore: t.state.eventStore, eventUiBases: t.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, e);
        return (t.pluginSystem.hooks.isPropsValid || Rt)(r, t)
    }

    function Rt(e, t, n, r) {
        return void 0 === n && (n = {}), !(e.eventDrag && ! function(e, t, n, r) {
            var i = e.eventDrag,
                o = i.mutatedEvents,
                a = o.defs,
                s = o.instances,
                u = vt(a, i.isEvent ? e.eventUiBases : { "": t.selectionConfig });
            r && (u = Re(u, r));
            var l = Dt(e.eventStore, i.affectedEvents.instances),
                c = l.defs,
                d = l.instances,
                f = vt(c, e.eventUiBases);
            for (var p in s) {
                var h = s[p],
                    v = h.range,
                    g = u[h.defId],
                    y = a[h.defId];
                if (!It(g.constraints, v, l, e.businessHours, t)) return !1;
                var m = t.opt("eventOverlap");
                for (var E in "function" != typeof m && (m = null), d) { var S = d[E]; if (Fe(v, S.range)) { var b = f[S.defId].overlap; if (!1 === b && i.isEvent) return !1; if (!1 === g.overlap) return !1; if (m && !m(new ct(t, c[S.defId], S), new ct(t, y, h))) return !1 } }
                for (var D = t.state.eventStore, T = 0, w = g.allows; T < w.length; T++) {
                    var R = w[T],
                        I = Se({}, n, { range: h.range, allDay: y.allDay }),
                        C = D.defs[y.defId],
                        M = D.instances[p],
                        k = void 0;
                    if (k = C ? new ct(t, C, M) : new ct(t, y), !R(t.buildDateSpanApi(I), k)) return !1
                }
            }
            return !0
        }(e, t, n, r)) && !(e.dateSelection && ! function(e, t, n, r) {
            var i = e.eventStore,
                o = i.defs,
                a = i.instances,
                s = e.dateSelection,
                u = s.range,
                l = t.selectionConfig;
            r && (l = r(l));
            if (!It(l.constraints, u, i, e.businessHours, t)) return !1;
            var c = t.opt("selectOverlap");
            "function" != typeof c && (c = null);
            for (var d in a) { var f = a[d]; if (Fe(u, f.range)) { if (!1 === l.overlap) return !1; if (c && !c(new ct(t, o[f.defId], f))) return !1 } }
            for (var p = 0, h = l.allows; p < h.length; p++) {
                var v = h[p],
                    g = Se({}, n, s);
                if (!v(t.buildDateSpanApi(g), null)) return !1
            }
            return !0
        }(e, t, n, r))
    }

    function It(e, t, n, r, i) { for (var o = 0, a = e; o < a.length; o++) { if (!kt(Ct(a[o], t, n, r, i), t)) return !1 } return !0 }

    function Ct(e, t, n, r, i) { return "businessHours" === e ? Mt(_e(r, t, i)) : "string" == typeof e ? Mt(ze(n, function(t) { return t.groupId === e })) : "object" == typeof e && e ? Mt(_e(e, t, i)) : [] }

    function Mt(e) {
        var t = e.instances,
            n = [];
        for (var r in t) n.push(t[r].range);
        return n
    }

    function kt(e, t) { for (var n = 0, r = e; n < r.length; n++) { if (We(r[n], t)) return !0 } return !1 }

    function Ot(e) { return (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />") }

    function _t(e) {
        var t = [];
        for (var n in e) {
            var r = e[n];
            null != r && "" !== r && t.push(n + ":" + r)
        }
        return t.join(";")
    }

    function Pt(e) { return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : [] }
    var xt = { editable: Boolean, startEditable: Boolean, durationEditable: Boolean, constraint: null, overlap: null, allow: null, className: Pt, classNames: Pt, color: String, backgroundColor: String, borderColor: String, textColor: String };

    function Ht(e, t, n) {
        var r = he(e, xt, {}, n),
            i = function(e, t) { return Array.isArray(e) ? ke(e, "", t, !0) : "object" == typeof e && e ? ke([e], "", t, !0) : null != e ? String(e) : null }(r.constraint, t);
        return { startEditable: null != r.startEditable ? r.startEditable : r.editable, durationEditable: null != r.durationEditable ? r.durationEditable : r.editable, constraints: null != i ? [i] : [], overlap: r.overlap, allows: null != r.allow ? [r.allow] : [], backgroundColor: r.backgroundColor || r.color, borderColor: r.borderColor || r.color, textColor: r.textColor, classNames: r.classNames.concat(r.className) }
    }

    function Nt(e, t, n, r) {
        var i = {},
            o = {};
        for (var a in xt) {
            var s = e + ue(a);
            i[a] = t[s], o[s] = !0
        }
        if ("event" === e && (i.editable = t.editable), r)
            for (var a in t) o[a] || (r[a] = t[a]);
        return Ht(i, n)
    }
    var zt = { startEditable: null, durationEditable: null, constraints: [], overlap: null, allows: [], backgroundColor: "", borderColor: "", textColor: "", classNames: [] };

    function Ut(e) { return e.reduce(Lt, zt) }

    function Lt(e, t) { return { startEditable: null != t.startEditable ? t.startEditable : e.startEditable, durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable, constraints: e.constraints.concat(t.constraints), overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap, allows: e.allows.concat(t.allows), backgroundColor: t.backgroundColor || e.backgroundColor, borderColor: t.borderColor || e.borderColor, textColor: t.textColor || e.textColor, classNames: e.classNames.concat(t.classNames) } }
    var Bt = { id: String, groupId: String, title: String, url: String, rendering: String, extendedProps: null },
        Vt = { start: null, date: null, end: null, allDay: null },
        At = 0;

    function Ft(e, t, n, r) {
        var i = function(e, t) {
                var n = null;
                if (e) {
                    var r = t.state.eventSources[e];
                    n = r.allDayDefault
                }
                null == n && (n = t.opt("allDayDefault"));
                return n
            }(t, n),
            o = {},
            a = function(e, t, n, r, i) {
                for (var o = 0; o < r.length; o++) {
                    var a = {},
                        s = r[o].parse(e, a, n);
                    if (s) { var u = a.allDay; return delete a.allDay, null == u && null == (u = t) && null == (u = s.allDayGuess) && (u = !1), Se(i, a), { allDay: u, duration: s.duration, typeData: s.typeData, typeId: o } }
                }
                return null
            }(e, i, n.dateEnv, n.pluginSystem.hooks.recurringTypes, o);
        if (a) return (s = Wt(o, t, a.allDay, Boolean(a.duration), n)).recurringDef = { typeId: a.typeId, typeData: a.typeData, duration: a.duration }, { def: s, instance: null };
        var s, u = {},
            l = function(e, t, n, r, i) {
                var o, a, s = function(e, t) { var n = he(e, Vt, {}, t); return n.start = null !== n.start ? n.start : n.date, delete n.date, n }(e, r),
                    u = s.allDay,
                    l = null,
                    c = !1,
                    d = null;
                if (o = n.dateEnv.createMarkerMeta(s.start)) l = o.marker;
                else if (!i) return null;
                null != s.end && (a = n.dateEnv.createMarkerMeta(s.end));
                null == u && (u = null != t ? t : (!o || o.isTimeUnspecified) && (!a || a.isTimeUnspecified));
                u && l && (l = B(l));
                a && (d = a.marker, u && (d = B(d)), l && d <= l && (d = null));
                d ? c = !0 : i || (c = n.opt("forceEventDuration") || !1, d = n.dateEnv.add(l, u ? n.defaultAllDayEventDuration : n.defaultTimedEventDuration));
                return { allDay: u, hasEnd: c, range: { start: l, end: d }, forcedStartTzo: o ? o.forcedTzo : null, forcedEndTzo: a ? a.forcedTzo : null }
            }(e, i, n, u, r);
        return l ? { def: s = Wt(u, t, l.allDay, l.hasEnd, n), instance: Zt(s.defId, l.range, l.forcedStartTzo, l.forcedEndTzo) } : null
    }

    function Wt(e, t, n, r, i) {
        var o = {},
            a = function(e, t, n) {
                var r = {},
                    i = he(e, Bt, {}, r),
                    o = Ht(r, t, n);
                return i.publicId = i.id, delete i.id, i.ui = o, i
            }(e, i, o);
        a.defId = String(At++), a.sourceId = t, a.allDay = n, a.hasEnd = r;
        for (var s = 0, u = i.pluginSystem.hooks.eventDefParsers; s < u.length; s++) {
            var l = {};
            (0, u[s])(a, o, l), o = l
        }
        return a.extendedProps = Se(o, a.extendedProps || {}), Object.freeze(a.ui.classNames), Object.freeze(a.extendedProps), a
    }

    function Zt(e, t, n, r) { return { instanceId: String(At++), defId: e, range: t, forcedStartTzo: null == n ? null : n, forcedEndTzo: null == r ? null : r } }
    var jt = { startTime: "09:00", endTime: "17:00", daysOfWeek: [1, 2, 3, 4, 5], rendering: "inverse-background", classNames: "fc-nonbusiness", groupId: "_businessHours" };

    function Yt(e, t) {
        return ke(function(e) {
            var t;
            t = !0 === e ? [{}] : Array.isArray(e) ? e.filter(function(e) { return e.daysOfWeek }) : "object" == typeof e && e ? [e] : [];
            return t = t.map(function(e) { return Se({}, jt, e) })
        }(e), "", t)
    }

    function qt(e, t, n) {
        void 0 === n && (n = []);
        var r, i, o = [];

        function a() {
            if (i) {
                for (var e = 0, n = o; e < n.length; e++) { n[e].unrender() }
                t && t.apply(r, i), i = null
            }
        }

        function s() { i && je(i, arguments) || (a(), r = this, i = arguments, e.apply(this, arguments)) }
        s.dependents = o, s.unrender = a;
        for (var u = 0, l = n; u < l.length; u++) { l[u].dependents.push(s) }
        return s
    }
    var Gt = { defs: {}, instances: {} },
        Xt = function() {
            function e() { this.getKeysForEventDefs = Ye(this._getKeysForEventDefs), this.splitDateSelection = Ye(this._splitDateSpan), this.splitEventStore = Ye(this._splitEventStore), this.splitIndividualUi = Ye(this._splitIndividualUi), this.splitEventDrag = Ye(this._splitInteraction), this.splitEventResize = Ye(this._splitInteraction), this.eventUiBuilders = {} }
            return e.prototype.splitProps = function(e) {
                var t = this,
                    n = this.getKeyInfo(e),
                    r = this.getKeysForEventDefs(e.eventStore),
                    i = this.splitDateSelection(e.dateSelection),
                    o = this.splitIndividualUi(e.eventUiBases, r),
                    a = this.splitEventStore(e.eventStore, r),
                    s = this.splitEventDrag(e.eventDrag),
                    u = this.splitEventResize(e.eventResize),
                    l = {};
                for (var c in this.eventUiBuilders = Re(n, function(e, n) { return t.eventUiBuilders[n] || Ye(Jt) }), n) {
                    var d = n[c],
                        f = a[c] || Gt,
                        p = this.eventUiBuilders[c];
                    l[c] = { businessHours: d.businessHours || e.businessHours, dateSelection: i[c] || null, eventStore: f, eventUiBases: p(e.eventUiBases[""], d.ui, o[c]), eventSelection: f.instances[e.eventSelection] ? e.eventSelection : "", eventDrag: s[c] || null, eventResize: u[c] || null }
                }
                return l
            }, e.prototype._splitDateSpan = function(e) {
                var t = {};
                if (e)
                    for (var n = 0, r = this.getKeysForDateSpan(e); n < r.length; n++) { t[r[n]] = e }
                return t
            }, e.prototype._getKeysForEventDefs = function(e) { var t = this; return Re(e.defs, function(e) { return t.getKeysForEventDef(e) }) }, e.prototype._splitEventStore = function(e, t) {
                var n = e.defs,
                    r = e.instances,
                    i = {};
                for (var o in n)
                    for (var a = 0, s = t[o]; a < s.length; a++) { i[f = s[a]] || (i[f] = { defs: {}, instances: {} }), i[f].defs[o] = n[o] }
                for (var u in r)
                    for (var l = r[u], c = 0, d = t[l.defId]; c < d.length; c++) {
                        var f;
                        i[f = d[c]] && (i[f].instances[u] = l)
                    }
                return i
            }, e.prototype._splitIndividualUi = function(e, t) {
                var n = {};
                for (var r in e)
                    if (r)
                        for (var i = 0, o = t[r]; i < o.length; i++) {
                            var a = o[i];
                            n[a] || (n[a] = {}), n[a][r] = e[r]
                        }
                return n
            }, e.prototype._splitInteraction = function(e) {
                var t = {};
                if (e) {
                    var n = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)),
                        r = this._getKeysForEventDefs(e.mutatedEvents),
                        i = this._splitEventStore(e.mutatedEvents, r),
                        o = function(r) { t[r] || (t[r] = { affectedEvents: n[r] || Gt, mutatedEvents: i[r] || Gt, isEvent: e.isEvent, origSeg: e.origSeg }) };
                    for (var a in n) o(a);
                    for (var a in i) o(a)
                }
                return t
            }, e
        }();

    function Jt(e, t, n) {
        var r = [];
        e && r.push(e), t && r.push(t);
        var i = { "": Ut(r) };
        return n && Se(i, n), i
    }

    function Kt(e, t, n, r) {
        var i, o, a, s, u = e.dateEnv;
        return t instanceof Date ? i = t : (i = t.date, o = t.type, a = t.forceOff), s = { date: u.formatIso(i, { omitTime: !0 }), type: o || "day" }, "string" == typeof n && (r = n, n = null), n = n ? " " + function(e) {
            var t = [];
            for (var n in e) {
                var r = e[n];
                null != r && t.push(n + '="' + Ot(r) + '"')
            }
            return t.join(" ")
        }(n) : "", r = r || "", !a && e.opt("navLinks") ? "<a" + n + ' data-goto="' + Ot(JSON.stringify(s)) + '">' + r + "</a>" : "<span" + n + ">" + r + "</span>"
    }

    function Qt(e, t, n, r) {
        var i, o, a = n.calendar,
            s = n.view,
            u = n.theme,
            l = n.dateEnv,
            c = [];
        return Ze(t.activeRange, e) ? (c.push("fc-" + P[e.getUTCDay()]), s.opt("monthMode") && l.getMonth(e) !== l.getMonth(t.currentRange.start) && c.push("fc-other-month"), o = x(i = B(a.getNow()), 1), e < i ? c.push("fc-past") : e >= o ? c.push("fc-future") : (c.push("fc-today"), !0 !== r && c.push(u.getClass("today")))) : c.push("fc-disabled-day"), c
    }

    function $t(e, t, n) {
        var r = !1,
            i = function() { r || (r = !0, t.apply(this, arguments)) },
            o = function() { r || (r = !0, n && n.apply(this, arguments)) },
            a = e(i, o);
        a && "function" == typeof a.then && a.then(i, o)
    }
    var en = function() {
            function e() {}
            return e.mixInto = function(e) { this.mixIntoObj(e.prototype) }, e.mixIntoObj = function(e) {
                var t = this;
                Object.getOwnPropertyNames(this.prototype).forEach(function(n) { e[n] || (e[n] = t.prototype[n]) })
            }, e.mixOver = function(e) {
                var t = this;
                Object.getOwnPropertyNames(this.prototype).forEach(function(n) { e.prototype[n] = t.prototype[n] })
            }, e
        }(),
        tn = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return Ee(t, e), t.prototype.on = function(e, t) { return nn(this._handlers || (this._handlers = {}), e, t), this }, t.prototype.one = function(e, t) { return nn(this._oneHandlers || (this._oneHandlers = {}), e, t), this }, t.prototype.off = function(e, t) { return this._handlers && rn(this._handlers, e, t), this._oneHandlers && rn(this._oneHandlers, e, t), this }, t.prototype.trigger = function(e) { for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]; return this.triggerWith(e, this, t), this }, t.prototype.triggerWith = function(e, t, n) { return this._handlers && de(this._handlers[e], t, n), this._oneHandlers && (de(this._oneHandlers[e], t, n), delete this._oneHandlers[e]), this }, t.prototype.hasHandlers = function(e) { return this._handlers && this._handlers[e] && this._handlers[e].length || this._oneHandlers && this._oneHandlers[e] && this._oneHandlers[e].length }, t
        }(en);

    function nn(e, t, n) {
        (e[t] || (e[t] = [])).push(n)
    }

    function rn(e, t, n) { n ? e[t] && (e[t] = e[t].filter(function(e) { return e !== n })) : delete e[t] }
    var on = function() {
            function e(e, t, n, r) { this.originEl = e, this.els = t, this.isHorizontal = n, this.isVertical = r }
            return e.prototype.build = function() {
                var e = this.originEl,
                    t = this.originClientRect = e.getBoundingClientRect();
                this.isHorizontal && this.buildElHorizontals(t.left), this.isVertical && this.buildElVerticals(t.top)
            }, e.prototype.buildElHorizontals = function(e) {
                for (var t = [], n = [], r = 0, i = this.els; r < i.length; r++) {
                    var o = i[r].getBoundingClientRect();
                    t.push(o.left - e), n.push(o.right - e)
                }
                this.lefts = t, this.rights = n
            }, e.prototype.buildElVerticals = function(e) {
                for (var t = [], n = [], r = 0, i = this.els; r < i.length; r++) {
                    var o = i[r].getBoundingClientRect();
                    t.push(o.top - e), n.push(o.bottom - e)
                }
                this.tops = t, this.bottoms = n
            }, e.prototype.leftToIndex = function(e) {
                var t, n = this.lefts,
                    r = this.rights,
                    i = n.length;
                for (t = 0; t < i; t++)
                    if (e >= n[t] && e < r[t]) return t
            }, e.prototype.topToIndex = function(e) {
                var t, n = this.tops,
                    r = this.bottoms,
                    i = n.length;
                for (t = 0; t < i; t++)
                    if (e >= n[t] && e < r[t]) return t
            }, e.prototype.getWidth = function(e) { return this.rights[e] - this.lefts[e] }, e.prototype.getHeight = function(e) { return this.bottoms[e] - this.tops[e] }, e
        }(),
        an = function() {
            function e() {}
            return e.prototype.getMaxScrollTop = function() { return this.getScrollHeight() - this.getClientHeight() }, e.prototype.getMaxScrollLeft = function() { return this.getScrollWidth() - this.getClientWidth() }, e.prototype.canScrollVertically = function() { return this.getMaxScrollTop() > 0 }, e.prototype.canScrollHorizontally = function() { return this.getMaxScrollLeft() > 0 }, e.prototype.canScrollUp = function() { return this.getScrollTop() > 0 }, e.prototype.canScrollDown = function() { return this.getScrollTop() < this.getMaxScrollTop() }, e.prototype.canScrollLeft = function() { return this.getScrollLeft() > 0 }, e.prototype.canScrollRight = function() { return this.getScrollLeft() < this.getMaxScrollLeft() }, e
        }(),
        sn = function(e) {
            function t(t) { var n = e.call(this) || this; return n.el = t, n }
            return Ee(t, e), t.prototype.getScrollTop = function() { return this.el.scrollTop }, t.prototype.getScrollLeft = function() { return this.el.scrollLeft }, t.prototype.setScrollTop = function(e) { this.el.scrollTop = e }, t.prototype.setScrollLeft = function(e) { this.el.scrollLeft = e }, t.prototype.getScrollWidth = function() { return this.el.scrollWidth }, t.prototype.getScrollHeight = function() { return this.el.scrollHeight }, t.prototype.getClientHeight = function() { return this.el.clientHeight }, t.prototype.getClientWidth = function() { return this.el.clientWidth }, t
        }(an),
        un = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return Ee(t, e), t.prototype.getScrollTop = function() { return window.pageYOffset }, t.prototype.getScrollLeft = function() { return window.pageXOffset }, t.prototype.setScrollTop = function(e) { window.scroll(window.pageXOffset, e) }, t.prototype.setScrollLeft = function(e) { window.scroll(e, window.pageYOffset) }, t.prototype.getScrollWidth = function() { return document.documentElement.scrollWidth }, t.prototype.getScrollHeight = function() { return document.documentElement.scrollHeight }, t.prototype.getClientHeight = function() { return document.documentElement.clientHeight }, t.prototype.getClientWidth = function() { return document.documentElement.clientWidth }, t
        }(an),
        ln = function(e) {
            function t(t, n) { var i = e.call(this, r("div", { className: "fc-scroller" })) || this; return i.overflowX = t, i.overflowY = n, i.applyOverflow(), i }
            return Ee(t, e), t.prototype.clear = function() { this.setHeight("auto"), this.applyOverflow() }, t.prototype.destroy = function() { c(this.el) }, t.prototype.applyOverflow = function() { y(this.el, { overflowX: this.overflowX, overflowY: this.overflowY }) }, t.prototype.lockOverflow = function(e) {
                var t = this.overflowX,
                    n = this.overflowY;
                e = e || this.getScrollbarWidths(), "auto" === t && (t = e.bottom || this.canScrollHorizontally() ? "scroll" : "hidden"), "auto" === n && (n = e.left || e.right || this.canScrollVertically() ? "scroll" : "hidden"), y(this.el, { overflowX: t, overflowY: n })
            }, t.prototype.setHeight = function(e) { m(this.el, "height", e) }, t.prototype.getScrollbarWidths = function() { var e = T(this.el); return { left: e.scrollbarLeft, right: e.scrollbarRight, bottom: e.scrollbarBottom } }, t
        }(sn),
        cn = function() {
            function e(e) { this.calendarOptions = e, this.processIconOverride() }
            return e.prototype.processIconOverride = function() { this.iconOverrideOption && this.setIconOverride(this.calendarOptions[this.iconOverrideOption]) }, e.prototype.setIconOverride = function(e) {
                var t, n;
                if ("object" == typeof e && e) {
                    for (n in t = Se({}, this.iconClasses), e) t[n] = this.applyIconOverridePrefix(e[n]);
                    this.iconClasses = t
                } else !1 === e && (this.iconClasses = {})
            }, e.prototype.applyIconOverridePrefix = function(e) { var t = this.iconOverridePrefix; return t && 0 !== e.indexOf(t) && (e = t + e), e }, e.prototype.getClass = function(e) { return this.classes[e] || "" }, e.prototype.getIconClass = function(e) { var t = this.iconClasses[e]; return t ? this.baseIconClass + " " + t : "" }, e.prototype.getCustomButtonIconClass = function(e) { var t; return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(t) : "" }, e
        }();
    cn.prototype.classes = {}, cn.prototype.iconClasses = {}, cn.prototype.baseIconClass = "", cn.prototype.iconOverridePrefix = "";
    var dn = 0,
        fn = function() {
            function e(e, t) { t && (e.view = this), this.uid = String(dn++), this.context = e, this.dateEnv = e.dateEnv, this.theme = e.theme, this.view = e.view, this.calendar = e.calendar, this.isRtl = "rtl" === this.opt("dir") }
            return e.addEqualityFuncs = function(e) { this.prototype.equalityFuncs = Se({}, this.prototype.equalityFuncs, e) }, e.prototype.opt = function(e) { return this.context.options[e] }, e.prototype.receiveProps = function(e) {
                var t = function(e, t, n) {
                        var r = {},
                            i = !1;
                        for (var o in t) o in e && (e[o] === t[o] || n[o] && n[o](e[o], t[o])) ? r[o] = e[o] : (r[o] = t[o], i = !0);
                        for (var o in e)
                            if (!(o in t)) { i = !0; break }
                        return { anyChanges: i, comboProps: r }
                    }(this.props || {}, e, this.equalityFuncs),
                    n = t.anyChanges,
                    r = t.comboProps;
                this.props = r, n && this.render(r)
            }, e.prototype.render = function(e) {}, e.prototype.destroy = function() {}, e
        }();
    fn.prototype.equalityFuncs = {};
    var pn = function(e) {
        function t(t, n, r) { var i = e.call(this, t, r) || this; return i.el = n, i }
        return Ee(t, e), t.prototype.destroy = function() { e.prototype.destroy.call(this), c(this.el) }, t.prototype.buildPositionCaches = function() {}, t.prototype.queryHit = function(e, t, n, r) { return null }, t.prototype.isInteractionValid = function(e) {
            var t = this.calendar,
                n = this.props.dateProfile,
                r = e.mutatedEvents.instances;
            if (n)
                for (var i in r)
                    if (!We(n.validRange, r[i].range)) return !1;
            return Tt(e, t)
        }, t.prototype.isDateSelectionValid = function(e) { var t, n, r = this.props.dateProfile; return !(r && !We(r.validRange, e.range)) && (t = e, n = this.calendar, wt({ dateSelection: t }, n)) }, t.prototype.publiclyTrigger = function(e, t) { return this.calendar.publiclyTrigger(e, t) }, t.prototype.publiclyTriggerAfterSizing = function(e, t) { return this.calendar.publiclyTriggerAfterSizing(e, t) }, t.prototype.hasPublicHandlers = function(e) { return this.calendar.hasPublicHandlers(e) }, t.prototype.triggerRenderedSegs = function(e, t) {
            var n = this.calendar;
            if (this.hasPublicHandlers("eventPositioned"))
                for (var r = 0, i = e; r < i.length; r++) {
                    var o = i[r];
                    this.publiclyTriggerAfterSizing("eventPositioned", [{ event: new ct(n, o.eventRange.def, o.eventRange.instance), isMirror: t, isStart: o.isStart, isEnd: o.isEnd, el: o.el, view: this }])
                }
            n.state.loadingLevel || (n.afterSizingTriggers._eventsPositioned = [null])
        }, t.prototype.triggerWillRemoveSegs = function(e, t) {
            for (var n = this.calendar, r = 0, i = e; r < i.length; r++) {
                var o = i[r];
                n.trigger("eventElRemove", o.el)
            }
            if (this.hasPublicHandlers("eventDestroy"))
                for (var a = 0, s = e; a < s.length; a++) {
                    o = s[a];
                    this.publiclyTrigger("eventDestroy", [{ event: new ct(n, o.eventRange.def, o.eventRange.instance), isMirror: t, el: o.el, view: this }])
                }
        }, t.prototype.isValidSegDownEl = function(e) { return !this.props.eventDrag && !this.props.eventResize && !p(e, ".fc-mirror") && (this.isPopover() || !this.isInPopover(e)) }, t.prototype.isValidDateDownEl = function(e) { var t = p(e, this.fgSegSelector); return (!t || t.classList.contains("fc-mirror")) && !p(e, ".fc-more") && !p(e, "a[data-goto]") && !this.isInPopover(e) }, t.prototype.isPopover = function() { return this.el.classList.contains("fc-popover") }, t.prototype.isInPopover = function(e) { return Boolean(p(e, ".fc-popover")) }, t
    }(fn);
    pn.prototype.fgSegSelector = ".fc-event-container > *", pn.prototype.bgSegSelector = ".fc-bgevent:not(.fc-nonbusiness)";
    var hn = 0;

    function vn(e) { return { id: String(hn++), deps: e.deps || [], reducers: e.reducers || [], eventDefParsers: e.eventDefParsers || [], isDraggableTransformers: e.isDraggableTransformers || [], eventDragMutationMassagers: e.eventDragMutationMassagers || [], eventDefMutationAppliers: e.eventDefMutationAppliers || [], dateSelectionTransformers: e.dateSelectionTransformers || [], datePointTransforms: e.datePointTransforms || [], dateSpanTransforms: e.dateSpanTransforms || [], views: e.views || {}, viewPropsTransformers: e.viewPropsTransformers || [], isPropsValid: e.isPropsValid || null, externalDefTransforms: e.externalDefTransforms || [], eventResizeJoinTransforms: e.eventResizeJoinTransforms || [], viewContainerModifiers: e.viewContainerModifiers || [], eventDropTransformers: e.eventDropTransformers || [], componentInteractions: e.componentInteractions || [], calendarInteractions: e.calendarInteractions || [], themeClasses: e.themeClasses || {}, eventSourceDefs: e.eventSourceDefs || [], cmdFormatter: e.cmdFormatter, recurringTypes: e.recurringTypes || [], namedTimeZonedImpl: e.namedTimeZonedImpl, defaultView: e.defaultView || "", elementDraggingImpl: e.elementDraggingImpl, optionChangeHandlers: e.optionChangeHandlers || {} } }
    var gn = function() {
        function e() { this.hooks = { reducers: [], eventDefParsers: [], isDraggableTransformers: [], eventDragMutationMassagers: [], eventDefMutationAppliers: [], dateSelectionTransformers: [], datePointTransforms: [], dateSpanTransforms: [], views: {}, viewPropsTransformers: [], isPropsValid: null, externalDefTransforms: [], eventResizeJoinTransforms: [], viewContainerModifiers: [], eventDropTransformers: [], componentInteractions: [], calendarInteractions: [], themeClasses: {}, eventSourceDefs: [], cmdFormatter: null, recurringTypes: [], namedTimeZonedImpl: null, defaultView: "", elementDraggingImpl: null, optionChangeHandlers: {} }, this.addedHash = {} }
        return e.prototype.add = function(e) {
            if (!this.addedHash[e.id]) {
                this.addedHash[e.id] = !0;
                for (var t = 0, n = e.deps; t < n.length; t++) {
                    var r = n[t];
                    this.add(r)
                }
                this.hooks = (i = this.hooks, o = e, { reducers: i.reducers.concat(o.reducers), eventDefParsers: i.eventDefParsers.concat(o.eventDefParsers), isDraggableTransformers: i.isDraggableTransformers.concat(o.isDraggableTransformers), eventDragMutationMassagers: i.eventDragMutationMassagers.concat(o.eventDragMutationMassagers), eventDefMutationAppliers: i.eventDefMutationAppliers.concat(o.eventDefMutationAppliers), dateSelectionTransformers: i.dateSelectionTransformers.concat(o.dateSelectionTransformers), datePointTransforms: i.datePointTransforms.concat(o.datePointTransforms), dateSpanTransforms: i.dateSpanTransforms.concat(o.dateSpanTransforms), views: Se({}, i.views, o.views), viewPropsTransformers: i.viewPropsTransformers.concat(o.viewPropsTransformers), isPropsValid: o.isPropsValid || i.isPropsValid, externalDefTransforms: i.externalDefTransforms.concat(o.externalDefTransforms), eventResizeJoinTransforms: i.eventResizeJoinTransforms.concat(o.eventResizeJoinTransforms), viewContainerModifiers: i.viewContainerModifiers.concat(o.viewContainerModifiers), eventDropTransformers: i.eventDropTransformers.concat(o.eventDropTransformers), calendarInteractions: i.calendarInteractions.concat(o.calendarInteractions), componentInteractions: i.componentInteractions.concat(o.componentInteractions), themeClasses: Se({}, i.themeClasses, o.themeClasses), eventSourceDefs: i.eventSourceDefs.concat(o.eventSourceDefs), cmdFormatter: o.cmdFormatter || i.cmdFormatter, recurringTypes: i.recurringTypes.concat(o.recurringTypes), namedTimeZonedImpl: o.namedTimeZonedImpl || i.namedTimeZonedImpl, defaultView: i.defaultView || o.defaultView, elementDraggingImpl: i.elementDraggingImpl || o.elementDraggingImpl, optionChangeHandlers: Se({}, i.optionChangeHandlers, o.optionChangeHandlers) })
            }
            var i, o
        }, e
    }();
    var yn = vn({ eventSourceDefs: [{ ignoreRange: !0, parseMeta: function(e) { return Array.isArray(e) ? e : Array.isArray(e.events) ? e.events : null }, fetch: function(e, t) { t({ rawEvents: e.eventSource.meta }) } }] }),
        mn = vn({
            eventSourceDefs: [{
                parseMeta: function(e) { return "function" == typeof e ? e : "function" == typeof e.events ? e.events : null },
                fetch: function(e, t, n) {
                    var r = e.calendar.dateEnv;
                    $t(e.eventSource.meta.bind(null, { start: r.toDate(e.range.start), end: r.toDate(e.range.end), startStr: r.formatIso(e.range.start), endStr: r.formatIso(e.range.end), timeZone: r.timeZone }), function(e) { t({ rawEvents: e }) }, n)
                }
            }]
        });

    function En(e, t, n, r, i) {
        var o = null;
        "GET" === (e = e.toUpperCase()) ? t = function(e, t) { return e + (-1 === e.indexOf("?") ? "?" : "&") + Sn(t) }(t, n): o = Sn(n);
        var a = new XMLHttpRequest;
        a.open(e, t, !0), "GET" !== e && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.onload = function() {
            if (a.status >= 200 && a.status < 400) try {
                var e = JSON.parse(a.responseText);
                r(e, a)
            } catch (e) { i("Failure parsing JSON", a) } else i("Request failed", a)
        }, a.onerror = function() { i("Request failed", a) }, a.send(o)
    }

    function Sn(e) { var t = []; for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n])); return t.join("&") }
    var bn = vn({
        eventSourceDefs: [{
            parseMeta: function(e) {
                if ("string" == typeof e) e = { url: e };
                else if (!e || "object" != typeof e || !e.url) return null;
                return { url: e.url, method: (e.method || "GET").toUpperCase(), extraParams: e.extraParams, startParam: e.startParam, endParam: e.endParam, timeZoneParam: e.timeZoneParam }
            },
            fetch: function(e, t, n) {
                var r = e.eventSource.meta,
                    i = function(e, t, n) {
                        var r, i, o, a, s = n.dateEnv,
                            u = {};
                        null == (r = e.startParam) && (r = n.opt("startParam"));
                        null == (i = e.endParam) && (i = n.opt("endParam"));
                        null == (o = e.timeZoneParam) && (o = n.opt("timeZoneParam"));
                        a = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                        Se(u, a), u[r] = s.formatIso(t.start), u[i] = s.formatIso(t.end), "local" !== s.timeZone && (u[o] = s.timeZone);
                        return u
                    }(r, e.range, e.calendar);
                En(r.method, r.url, i, function(e, n) { t({ rawEvents: e, xhr: n }) }, function(e, t) { n({ message: e, xhr: t }) })
            }
        }]
    });
    var Dn = vn({
        recurringTypes: [{
            parse: function(e, t, n) {
                var r, i, o = n.createMarker.bind(n),
                    a = he(e, { daysOfWeek: null, startTime: J, endTime: J, startRecur: o, endRecur: o }, {}, t),
                    s = !1;
                for (var u in a)
                    if (null != a[u]) { s = !0; break }
                if (s) { var l = null; return "duration" in t && (l = J(t.duration), delete t.duration), !l && a.startTime && a.endTime && (r = a.endTime, i = a.startTime, l = { years: r.years - i.years, months: r.months - i.months, days: r.days - i.days, milliseconds: r.milliseconds - i.milliseconds }), { allDayGuess: Boolean(!a.startTime && !a.endTime), duration: l, typeData: a } }
                return null
            },
            expand: function(e, t, n) {
                var r = Ve(t, { start: e.startRecur, end: e.endRecur });
                return r ? function(e, t, n, r) {
                    var i = e ? Ie(e) : null,
                        o = B(n.start),
                        a = n.end,
                        s = [];
                    for (; o < a;) {
                        var u = void 0;
                        i && !i[o.getUTCDay()] || (u = t ? r.add(o, t) : o, s.push(u)), o = x(o, 1)
                    }
                    return s
                }(e.daysOfWeek, e.startTime, r, n) : []
            }
        }]
    });
    var Tn = vn({ optionChangeHandlers: { events: function(e, t, n) { wn([e], t, n) }, eventSources: wn, plugins: function(e, t) { t.addPluginInputs(e) } } });

    function wn(e, t, n) {
        for (var r = Ce(t.state.eventSources), i = [], o = 0, a = e; o < a.length; o++) {
            for (var s = a[o], u = !1, l = 0; l < r.length; l++)
                if (n(r[l]._raw, s)) { r.splice(l, 1), u = !0; break }
            u || i.push(s)
        }
        for (var c = 0, d = r; c < d.length; c++) {
            var f = d[c];
            t.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: f.sourceId })
        }
        for (var p = 0, h = i; p < h.length; p++) {
            var v = h[p];
            t.addEventSource(v)
        }
    }
    var Rn = { defaultRangeSeparator: " - ", titleRangeSeparator: " – ", defaultTimedEventDuration: "01:00:00", defaultAllDayEventDuration: { day: 1 }, forceEventDuration: !1, nextDayThreshold: "00:00:00", columnHeader: !0, defaultView: "", aspectRatio: 1.35, header: { left: "title", center: "", right: "today prev,next" }, weekends: !0, weekNumbers: !1, weekNumberCalculation: "local", editable: !1, scrollTime: "06:00:00", minTime: "00:00:00", maxTime: "24:00:00", showNonCurrentDates: !0, lazyFetching: !0, startParam: "start", endParam: "end", timeZoneParam: "timeZone", timeZone: "local", locales: [], locale: "", timeGridEventMinHeight: 0, themeSystem: "standard", dragRevertDuration: 500, dragScroll: !0, allDayMaintainDuration: !1, unselectAuto: !0, dropAccept: "*", eventOrder: "start,-duration,allDay,title", eventLimit: !1, eventLimitClick: "popover", dayPopoverFormat: { year: "numeric", month: "2-digit", day: "2-digit" }, handleWindowResize: !0, windowResizeDelay: 100, longPressDelay: 1e3, eventDragMinDistance: 5 },
        In = { header: { left: "next,prev today", center: "", right: "title" }, buttonIcons: { prev: "fc-icon-chevron-right", next: "fc-icon-chevron-left", prevYear: "fc-icon-chevrons-right", nextYear: "fc-icon-chevrons-left" } },
        Cn = ["header", "footer", "buttonText", "buttonIcons"];
    var Mn = [yn, mn, bn, Dn, Tn];
    var kn = { code: "en", week: { dow: 0, doy: 4 }, dir: "ltr", buttonText: { prev: "prev", next: "next", prevYear: "prev year", nextYear: "next year", year: "year", today: "today", month: "month", week: "week", day: "day", list: "list" }, weekLabel: "W", allDayText: "all-day", eventLimitText: "more", noEventsMessage: "No events to display" };

    function On(e) {
        for (var t = e.length > 0 ? e[0].code : "en", n = window.FullCalendarLocalesAll || [], r = window.FullCalendarLocales || {}, i = n.concat(Ce(r), e), o = { en: kn }, a = 0, s = i; a < s.length; a++) {
            var u = s[a];
            o[u.code] = u
        }
        return { map: o, defaultCode: t }
    }

    function _n(e, t) {
        return "object" != typeof e || Array.isArray(e) ? function(e, t) {
            var n = [].concat(e || []),
                r = function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        for (var r = e[n].toLocaleLowerCase().split("-"), i = r.length; i > 0; i--) { var o = r.slice(0, i).join("-"); if (t[o]) return t[o] }
                    return null
                }(n, t) || kn;
            return Pn(e, n, r)
        }(e, t) : Pn(e.code, [e.code], e)
    }

    function Pn(e, t, n) {
        var r = Te([kn, n], ["buttonText"]);
        delete r.code;
        var i = r.week;
        return delete r.week, { codeArg: e, codes: t, week: i, simpleNumberFormat: new Intl.NumberFormat(e), options: r }
    }
    var xn = function() {
            function e(e) { this.overrides = Se({}, e), this.dynamicOverrides = {}, this.compute() }
            return e.prototype.mutate = function(e, t, n) {
                var r = n ? this.dynamicOverrides : this.overrides;
                Se(r, e);
                for (var i = 0, o = t; i < o.length; i++) { delete r[o[i]] }
                this.compute()
            }, e.prototype.compute = function() {
                var e = fe(this.dynamicOverrides.locales, this.overrides.locales, Rn.locales),
                    t = fe(this.dynamicOverrides.locale, this.overrides.locale, Rn.locale),
                    n = On(e),
                    r = _n(t || n.defaultCode, n.map).options,
                    i = "rtl" === fe(this.dynamicOverrides.dir, this.overrides.dir, r.dir) ? In : {};
                this.dirDefaults = i, this.localeDefaults = r, this.computed = Te([Rn, i, r, this.overrides, this.dynamicOverrides], Cn)
            }, e
        }(),
        Hn = {};
    var Nn, zn = function() {
        function e() {}
        return e.prototype.getMarkerYear = function(e) { return e.getUTCFullYear() }, e.prototype.getMarkerMonth = function(e) { return e.getUTCMonth() }, e.prototype.getMarkerDay = function(e) { return e.getUTCDate() }, e.prototype.arrayToMarker = function(e) { return j(e) }, e.prototype.markerToArray = function(e) { return Z(e) }, e
    }();
    Nn = zn, Hn["gregory"] = Nn;
    var Un = /^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;

    function Ln(e) { var t = Un.exec(e); if (t) { var n = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number("0." + t[12]) : 0)); if (Y(n)) { var r = null; return t[13] && (r = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))), { marker: n, isTimeUnspecified: !t[6], timeZoneOffset: r } } } return null }
    var Bn = function() {
            function e(e) {
                var t = this.timeZone = e.timeZone,
                    n = "local" !== t && "UTC" !== t;
                e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)), this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl), this.calendarSystem = function(e) { return new Hn[e] }(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, "ISO" === e.weekNumberCalculation && (this.weekDow = 1, this.weekDoy = 4), "number" == typeof e.firstDay && (this.weekDow = e.firstDay), "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation), this.weekLabel = null != e.weekLabel ? e.weekLabel : e.locale.options.weekLabel, this.cmdFormatter = e.cmdFormatter
            }
            return e.prototype.createMarker = function(e) { var t = this.createMarkerMeta(e); return null === t ? null : t.marker }, e.prototype.createNowMarker = function() { return this.canComputeOffset ? this.timestampToMarker((new Date).valueOf()) : j(F(new Date)) }, e.prototype.createMarkerMeta = function(e) { if ("string" == typeof e) return this.parse(e); var t = null; return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = j(e)), null !== t && Y(t) ? { marker: t, isTimeUnspecified: !1, forcedTzo: null } : null }, e.prototype.parse = function(e) {
                var t = Ln(e);
                if (null === t) return null;
                var n = t.marker,
                    r = null;
                return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : r = t.timeZoneOffset), { marker: n, isTimeUnspecified: t.isTimeUnspecified, forcedTzo: r }
            }, e.prototype.getYear = function(e) { return this.calendarSystem.getMarkerYear(e) }, e.prototype.getMonth = function(e) { return this.calendarSystem.getMarkerMonth(e) }, e.prototype.add = function(e, t) { var n = this.calendarSystem.markerToArray(e); return n[0] += t.years, n[1] += t.months, n[2] += t.days, n[6] += t.milliseconds, this.calendarSystem.arrayToMarker(n) }, e.prototype.subtract = function(e, t) { var n = this.calendarSystem.markerToArray(e); return n[0] -= t.years, n[1] -= t.months, n[2] -= t.days, n[6] -= t.milliseconds, this.calendarSystem.arrayToMarker(n) }, e.prototype.addYears = function(e, t) { var n = this.calendarSystem.markerToArray(e); return n[0] += t, this.calendarSystem.arrayToMarker(n) }, e.prototype.addMonths = function(e, t) { var n = this.calendarSystem.markerToArray(e); return n[1] += t, this.calendarSystem.arrayToMarker(n) }, e.prototype.diffWholeYears = function(e, t) { var n = this.calendarSystem; return q(e) === q(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null }, e.prototype.diffWholeMonths = function(e, t) { var n = this.calendarSystem; return q(e) === q(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null }, e.prototype.greatestWholeUnit = function(e, t) { var n = this.diffWholeYears(e, t); return null !== n ? { unit: "year", value: n } : null !== (n = this.diffWholeMonths(e, t)) ? { unit: "month", value: n } : null !== (n = U(e, t)) ? { unit: "week", value: n } : null !== (n = L(e, t)) ? { unit: "day", value: n } : ce(n = function(e, t) { return (t.valueOf() - e.valueOf()) / 36e5 }(e, t)) ? { unit: "hour", value: n } : ce(n = function(e, t) { return (t.valueOf() - e.valueOf()) / 6e4 }(e, t)) ? { unit: "minute", value: n } : ce(n = function(e, t) { return (t.valueOf() - e.valueOf()) / 1e3 }(e, t)) ? { unit: "second", value: n } : { unit: "millisecond", value: t.valueOf() - e.valueOf() } }, e.prototype.countDurationsBetween = function(e, t, n) { var r; return n.years && null !== (r = this.diffWholeYears(e, t)) ? r / (ee(n) / 365) : n.months && null !== (r = this.diffWholeMonths(e, t)) ? r / function(e) { return ee(e) / 30 }(n) : n.days && null !== (r = L(e, t)) ? r / ee(n) : (t.valueOf() - e.valueOf()) / te(n) }, e.prototype.startOf = function(e, t) { return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? B(e) : "hour" === t ? function(e) { return j([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()]) }(e) : "minute" === t ? function(e) { return j([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes()]) }(e) : "second" === t ? function(e) { return j([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()]) }(e) : void 0 }, e.prototype.startOfYear = function(e) { return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)]) }, e.prototype.startOfMonth = function(e) { return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)]) }, e.prototype.startOfWeek = function(e) { return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7]) }, e.prototype.computeWeekNumber = function(e) {
                return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : function(e, t, n) {
                    var r = e.getUTCFullYear(),
                        i = V(e, r, t, n);
                    if (i < 1) return V(e, r - 1, t, n);
                    var o = V(e, r + 1, t, n);
                    return o >= 1 ? Math.min(i, o) : i
                }(e, this.weekDow, this.weekDoy)
            }, e.prototype.format = function(e, t, n) { return void 0 === n && (n = {}), t.format({ marker: e, timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e) }, this) }, e.prototype.formatRange = function(e, t, n, r) { return void 0 === r && (r = {}), r.isEndExclusive && (t = H(t, -1)), n.formatRange({ marker: e, timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e) }, { marker: t, timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t) }, this) }, e.prototype.formatIso = function(e, t) {
                void 0 === t && (t = {});
                var n = null;
                return t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)),
                    function(e, t, n) { void 0 === n && (n = !1); var r = e.toISOString(); return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (null == t ? r = r.replace("Z", "") : 0 !== t && (r = r.replace("Z", at(t, !0)))), r }(e, n, t.omitTime)
            }, e.prototype.timestampToMarker = function(e) { return "local" === this.timeZone ? j(F(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? j(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e) }, e.prototype.offsetForMarker = function(e) { return "local" === this.timeZone ? -W(Z(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(Z(e)) : null }, e.prototype.toDate = function(e, t) { return "local" === this.timeZone ? W(Z(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(Z(e)) * 60) : new Date(e.valueOf() - (t || 0)) }, e
        }(),
        Vn = { id: String, allDayDefault: Boolean, eventDataTransform: Function, success: Function, failure: Function },
        An = 0;

    function Fn(e, t) { return !t.pluginSystem.hooks.eventSourceDefs[e.sourceDefId].ignoreRange }

    function Wn(e, t) { for (var n = t.pluginSystem.hooks.eventSourceDefs, r = n.length - 1; r >= 0; r--) { var i = n[r].parseMeta(e); if (i) { var o = Zn("object" == typeof e ? e : {}, i, r, t); return o._raw = e, o } } return null }

    function Zn(e, t, n, r) {
        var i = {},
            o = he(e, Vn, {}, i),
            a = {},
            s = Ht(i, r, a);
        return o.isFetching = !1, o.latestFetchId = "", o.fetchRange = null, o.publicId = String(e.id || ""), o.sourceId = String(An++), o.sourceDefId = n, o.meta = t, o.ui = s, o.extendedProps = a, o
    }

    function jn(e, t, n, r) {
        switch (t.type) {
            case "ADD_EVENT_SOURCES":
                return function(e, t, n, r) {
                    for (var i = {}, o = 0, a = t; o < a.length; o++) {
                        var s = a[o];
                        i[s.sourceId] = s
                    }
                    n && (i = qn(i, n, r));
                    return Se({}, e, i)
                }(e, t.sources, n ? n.activeRange : null, r);
            case "REMOVE_EVENT_SOURCE":
                return i = e, o = t.sourceId, we(i, function(e) { return e.sourceId !== o });
            case "PREV":
            case "NEXT":
            case "SET_DATE":
            case "SET_VIEW_TYPE":
                return n ? qn(e, n.activeRange, r) : e;
            case "FETCH_EVENT_SOURCES":
            case "CHANGE_TIMEZONE":
                return Gn(e, t.sourceIds ? Ie(t.sourceIds) : function(e, t) { return we(e, function(e) { return Fn(e, t) }) }(e, r), n ? n.activeRange : null, r);
            case "RECEIVE_EVENTS":
            case "RECEIVE_EVENT_ERROR":
                return function(e, t, n, r) { var i, o = e[t]; if (o && n === o.latestFetchId) return Se({}, e, ((i = {})[t] = Se({}, o, { isFetching: !1, fetchRange: r }), i)); return e }(e, t.sourceId, t.fetchId, t.fetchRange);
            case "REMOVE_ALL_EVENT_SOURCES":
                return {};
            default:
                return e
        }
        var i, o
    }
    var Yn = 0;

    function qn(e, t, n) { return Gn(e, we(e, function(e) { return function(e, t, n) { return Fn(e, n) ? !n.opt("lazyFetching") || !e.fetchRange || t.start < e.fetchRange.start || t.end > e.fetchRange.end : !e.latestFetchId }(e, t, n) }), t, n) }

    function Gn(e, t, n, r) {
        var i = {};
        for (var o in e) {
            var a = e[o];
            t[o] ? i[o] = Xn(a, n, r) : i[o] = a
        }
        return i
    }

    function Xn(e, t, n) {
        var r = n.pluginSystem.hooks.eventSourceDefs[e.sourceDefId],
            i = String(Yn++);
        return r.fetch({ eventSource: e, calendar: n, range: t }, function(r) {
            var o, a, s = r.rawEvents,
                u = n.opt("eventSourceSuccess");
            e.success && (a = e.success(s, r.xhr)), u && (o = u(s, r.xhr)), s = a || o || s, n.dispatch({ type: "RECEIVE_EVENTS", sourceId: e.sourceId, fetchId: i, fetchRange: t, rawEvents: s })
        }, function(r) {
            var o = n.opt("eventSourceFailure");
            console.warn(r.message, r), e.failure && e.failure(r), o && o(r), n.dispatch({ type: "RECEIVE_EVENT_ERROR", sourceId: e.sourceId, fetchId: i, fetchRange: t, error: r })
        }), Se({}, e, { isFetching: !0, latestFetchId: i })
    }
    var Jn = function() {
        function e(e, t) { this.viewSpec = e, this.options = e.options, this.dateEnv = t.dateEnv, this.calendar = t, this.initHiddenDays() }
        return e.prototype.buildPrev = function(e, t) {
            var n = this.dateEnv,
                r = n.subtract(n.startOf(t, e.currentRangeUnit), e.dateIncrement);
            return this.build(r, -1)
        }, e.prototype.buildNext = function(e, t) {
            var n = this.dateEnv,
                r = n.add(n.startOf(t, e.currentRangeUnit), e.dateIncrement);
            return this.build(r, 1)
        }, e.prototype.build = function(e, t, n) {
            var r;
            void 0 === n && (n = !1);
            var i, o, a, s, u, l, c, d, f;
            return r = this.buildValidRange(), r = this.trimHiddenDays(r), n && (d = e, e = null != (f = r).start && d < f.start ? f.start : null != f.end && d >= f.end ? new Date(f.end.valueOf() - 1) : d), a = this.buildCurrentRangeInfo(e, t), s = /^(year|month|week|day)$/.test(a.unit), u = this.buildRenderRange(this.trimHiddenDays(a.range), a.unit, s), l = u = this.trimHiddenDays(u), this.options.showNonCurrentDates || (l = Ve(l, a.range)), i = J(this.options.minTime), o = J(this.options.maxTime), l = Ve(l = this.adjustActiveRange(l, i, o), r), c = Fe(a.range, r), { validRange: r, currentRange: a.range, currentRangeUnit: a.unit, isRangeAllDay: s, activeRange: l, renderRange: u, minTime: i, maxTime: o, isValid: c, dateIncrement: this.buildDateIncrement(a.duration) }
        }, e.prototype.buildValidRange = function() { return this.getRangeOption("validRange", this.calendar.getNow()) || { start: null, end: null } }, e.prototype.buildCurrentRangeInfo = function(e, t) {
            var n, r = this.viewSpec,
                i = this.dateEnv,
                o = null,
                a = null,
                s = null;
            return r.duration ? (o = r.duration, a = r.durationUnit, s = this.buildRangeFromDuration(e, t, o, a)) : (n = this.options.dayCount) ? (a = "day", s = this.buildRangeFromDayCount(e, t, n)) : (s = this.buildCustomVisibleRange(e)) ? a = i.greatestWholeUnit(s.start, s.end).unit : (a = ne(o = this.getFallbackDuration()).unit, s = this.buildRangeFromDuration(e, t, o, a)), { duration: o, unit: a, range: s }
        }, e.prototype.getFallbackDuration = function() { return J({ day: 1 }) }, e.prototype.adjustActiveRange = function(e, t, n) {
            var r = this.dateEnv,
                i = e.start,
                o = e.end;
            return this.viewSpec.class.prototype.usesMinMaxTime && (ee(t) < 0 && (i = B(i), i = r.add(i, t)), ee(n) > 1 && (o = x(o = B(o), -1), o = r.add(o, n))), { start: i, end: o }
        }, e.prototype.buildRangeFromDuration = function(e, t, n, r) {
            var i, o, a, s, u, l = this.dateEnv,
                c = this.options.dateAlignment;

            function d() { a = l.startOf(e, c), s = l.add(a, n), u = { start: a, end: s } }
            return c || ((i = this.options.dateIncrement) ? (o = J(i), c = te(o) < te(n) ? ne(o, !Q(i)).unit : r) : c = r), ee(n) <= 1 && this.isHiddenDay(a) && (a = B(a = this.skipHiddenDays(a, t))), d(), this.trimHiddenDays(u) || (e = this.skipHiddenDays(e, t), d()), u
        }, e.prototype.buildRangeFromDayCount = function(e, t, n) {
            var r, i = this.dateEnv,
                o = this.options.dateAlignment,
                a = 0,
                s = e;
            o && (s = i.startOf(s, o)), s = B(s), r = s = this.skipHiddenDays(s, t);
            do { r = x(r, 1), this.isHiddenDay(r) || a++ } while (a < n);
            return { start: s, end: r }
        }, e.prototype.buildCustomVisibleRange = function(e) {
            var t = this.dateEnv,
                n = this.getRangeOption("visibleRange", t.toDate(e));
            return !n || null != n.start && null != n.end ? n : null
        }, e.prototype.buildRenderRange = function(e, t, n) { return e }, e.prototype.buildDateIncrement = function(e) { var t, n = this.options.dateIncrement; return n ? J(n) : (t = this.options.dateAlignment) ? J(1, t) : e || J({ days: 1 }) }, e.prototype.getRangeOption = function(e) { for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]; var r = this.options[e]; return "function" == typeof r && (r = r.apply(null, t)), r && (r = Ue(r, this.dateEnv)), r && (r = ge(r)), r }, e.prototype.initHiddenDays = function() {
            var e, t = this.options.hiddenDays || [],
                n = [],
                r = 0;
            for (!1 === this.options.weekends && t.push(0, 6), e = 0; e < 7; e++)(n[e] = -1 !== t.indexOf(e)) || r++;
            if (!r) throw new Error("invalid hiddenDays");
            this.isHiddenDayHash = n
        }, e.prototype.trimHiddenDays = function(e) {
            var t = e.start,
                n = e.end;
            return t && (t = this.skipHiddenDays(t)), n && (n = this.skipHiddenDays(n, -1, !0)), null == t || null == n || t < n ? { start: t, end: n } : null
        }, e.prototype.isHiddenDay = function(e) { return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e] }, e.prototype.skipHiddenDays = function(e, t, n) { for (void 0 === t && (t = 1), void 0 === n && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];) e = x(e, t); return e }, e
    }();

    function Kn(e, t, n) {
        for (var r = function(e, t) {
                switch (t.type) {
                    case "SET_VIEW_TYPE":
                        return t.viewType;
                    default:
                        return e
                }
            }(e.viewType, t), i = function(e, t, n, r, i) {
                var o;
                switch (t.type) {
                    case "PREV":
                        o = i.dateProfileGenerators[r].buildPrev(e, n);
                        break;
                    case "NEXT":
                        o = i.dateProfileGenerators[r].buildNext(e, n);
                        break;
                    case "SET_DATE":
                        e.activeRange && Ze(e.currentRange, t.dateMarker) || (o = i.dateProfileGenerators[r].build(t.dateMarker, void 0, !0));
                        break;
                    case "SET_VIEW_TYPE":
                        var a = i.dateProfileGenerators[r];
                        if (!a) throw new Error(r ? 'The FullCalendar view "' + r + '" does not exist. Make sure your plugins are loaded correctly.' : "No available FullCalendar view plugins.");
                        o = a.build(t.dateMarker || n, void 0, !0)
                }
                return !o || !o.isValid || e && (s = e, u = o, Ae(s.validRange, u.validRange) && Ae(s.activeRange, u.activeRange) && Ae(s.renderRange, u.renderRange) && $(s.minTime, u.minTime) && $(s.maxTime, u.maxTime)) ? e : o;
                var s, u
            }(e.dateProfile, t, e.currentDate, r, n), o = jn(e.eventSources, t, i, n), a = Se({}, e, { viewType: r, dateProfile: i, currentDate: Qn(e.currentDate, t, i), eventSources: o, eventStore: St(e.eventStore, t, o, i, n), dateSelection: $n(e.dateSelection, t, n), eventSelection: er(e.eventSelection, t), eventDrag: tr(e.eventDrag, t, o, n), eventResize: nr(e.eventResize, t, o, n), eventSourceLoadingLevel: rr(o), loadingLevel: rr(o) }), s = 0, u = n.pluginSystem.hooks.reducers; s < u.length; s++) { a = (0, u[s])(a, t, n) }
        return a
    }

    function Qn(e, t, n) {
        switch (t.type) {
            case "PREV":
            case "NEXT":
                return Ze(n.currentRange, e) ? e : n.currentRange.start;
            case "SET_DATE":
            case "SET_VIEW_TYPE":
                var r = t.dateMarker || e;
                return n.activeRange && !Ze(n.activeRange, r) ? n.currentRange.start : r;
            default:
                return e
        }
    }

    function $n(e, t, n) {
        switch (t.type) {
            case "SELECT_DATES":
                return t.selection;
            case "UNSELECT_DATES":
                return null;
            default:
                return e
        }
    }

    function er(e, t) {
        switch (t.type) {
            case "SELECT_EVENT":
                return t.eventInstanceId;
            case "UNSELECT_EVENT":
                return "";
            default:
                return e
        }
    }

    function tr(e, t, n, r) {
        switch (t.type) {
            case "SET_EVENT_DRAG":
                var i = t.state;
                return { affectedEvents: i.affectedEvents, mutatedEvents: i.mutatedEvents, isEvent: i.isEvent, origSeg: i.origSeg };
            case "UNSET_EVENT_DRAG":
                return null;
            default:
                return e
        }
    }

    function nr(e, t, n, r) {
        switch (t.type) {
            case "SET_EVENT_RESIZE":
                var i = t.state;
                return { affectedEvents: i.affectedEvents, mutatedEvents: i.mutatedEvents, isEvent: i.isEvent, origSeg: i.origSeg };
            case "UNSET_EVENT_RESIZE":
                return null;
            default:
                return e
        }
    }

    function rr(e) { var t = 0; for (var n in e) e[n].isFetching && t++; return t }
    var ir = { start: null, end: null, allDay: Boolean };

    function or(e, t, n) {
        var r = function(e, t) {
                var n = {},
                    r = he(e, ir, {}, n),
                    i = r.start ? t.createMarkerMeta(r.start) : null,
                    o = r.end ? t.createMarkerMeta(r.end) : null,
                    a = r.allDay;
                null == a && (a = i && i.isTimeUnspecified && (!o || o.isTimeUnspecified));
                return n.range = { start: i ? i.marker : null, end: o ? o.marker : null }, n.allDay = a, n
            }(e, t),
            i = r.range;
        if (!i.start) return null;
        if (!i.end) {
            if (null == n) return null;
            i.end = t.add(i.start, n)
        }
        return r
    }

    function ar(e, t, n) { var r = Wt({ editable: !1 }, "", e.allDay, !0, n); return { def: r, ui: gt(r, t), instance: Zt(r.defId, e.range), range: e.range, isStart: !0, isEnd: !0 } }

    function sr(e, t, n, r) {
        if (t[e]) return t[e];
        var i = function(e, t, n, r) {
            var i = n[e],
                o = r[e],
                a = function(e) { return i && null !== i[e] ? i[e] : o && null !== o[e] ? o[e] : null },
                s = a("class"),
                u = a("superType");
            !u && s && (u = ur(s, r) || ur(s, n));
            var l = null;
            if (u) {
                if (u === e) throw new Error("Can't have a custom view type that references itself");
                l = sr(u, t, n, r)
            }!s && l && (s = l.class);
            if (!s) return null;
            return { type: e, class: s, defaults: Se({}, l ? l.defaults : {}, i ? i.options : {}), overrides: Se({}, l ? l.overrides : {}, o ? o.options : {}) }
        }(e, t, n, r);
        return i && (t[e] = i), i
    }

    function ur(e, t) { var n = Object.getPrototypeOf(e.prototype); for (var r in t) { var i = t[r]; if (i.class && i.class.prototype === n) return r } return "" }

    function lr(e) { return Re(e, dr) }
    var cr = { type: String, class: null };

    function dr(e) {
        "function" == typeof e && (e = { class: e });
        var t = {},
            n = he(e, cr, {}, t);
        return { superType: n.type, class: n.class, options: t }
    }

    function fr(e, t) {
        var n = lr(e),
            r = lr(t.overrides.views);
        return Re(function(e, t) { var n, r = {}; for (n in e) sr(n, r, e, t); for (n in t) sr(n, r, e, t); return r }(n, r), function(e) {
            return function(e, t, n) {
                var r = e.overrides.duration || e.defaults.duration || n.dynamicOverrides.duration || n.overrides.duration,
                    i = null,
                    o = "",
                    a = "",
                    s = {};
                if (r && (i = J(r))) {
                    var u = ne(i, !Q(r));
                    o = u.unit, 1 === u.value && (a = o, s = t[o] ? t[o].options : {})
                }
                var l = function(t) {
                    var n = t.buttonText || {},
                        r = e.defaults.buttonTextKey;
                    return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[a] ? n[a] : void 0
                };
                return { type: e.type, class: e.class, duration: i, durationUnit: o, singleUnit: a, options: Se({}, Rn, e.defaults, n.dirDefaults, n.localeDefaults, n.overrides, s, e.overrides, n.dynamicOverrides), buttonTextOverride: l(n.dynamicOverrides) || l(n.overrides) || e.overrides.buttonText, buttonTextDefault: l(n.localeDefaults) || l(n.dirDefaults) || e.defaults.buttonText || l(Rn) || e.type }
            }(e, r, t)
        })
    }
    var pr = function(e) {
            function t(t, n) { var i = e.call(this, t) || this; return i._renderLayout = qt(i.renderLayout, i.unrenderLayout), i._updateTitle = qt(i.updateTitle, null, [i._renderLayout]), i._updateActiveButton = qt(i.updateActiveButton, null, [i._renderLayout]), i._updateToday = qt(i.updateToday, null, [i._renderLayout]), i._updatePrev = qt(i.updatePrev, null, [i._renderLayout]), i._updateNext = qt(i.updateNext, null, [i._renderLayout]), i.el = r("div", { className: "fc-toolbar " + n }), i }
            return Ee(t, e), t.prototype.destroy = function() { e.prototype.destroy.call(this), this._renderLayout.unrender(), c(this.el) }, t.prototype.render = function(e) { this._renderLayout(e.layout), this._updateTitle(e.title), this._updateActiveButton(e.activeButton), this._updateToday(e.isTodayEnabled), this._updatePrev(e.isPrevEnabled), this._updateNext(e.isNextEnabled) }, t.prototype.renderLayout = function(e) {
                var t = this.el;
                this.viewsWithButtons = [], s(t, this.renderSection("left", e.left)), s(t, this.renderSection("center", e.center)), s(t, this.renderSection("right", e.right))
            }, t.prototype.unrenderLayout = function() { this.el.innerHTML = "" }, t.prototype.renderSection = function(e, t) {
                var n = this,
                    o = this.theme,
                    a = this.calendar,
                    u = a.optionsManager,
                    l = a.viewSpecs,
                    c = r("div", { className: "fc-" + e }),
                    d = u.computed.customButtons || {},
                    f = u.overrides.buttonText || {},
                    p = u.computed.buttonText || {};
                return t && t.split(" ").forEach(function(e, t) {
                    var r, u = [],
                        h = !0;
                    if (e.split(",").forEach(function(e, t) { var r, s, c, v, g, y, m, E, S; "title" === e ? (u.push(i("<h2>&nbsp;</h2>")), h = !1) : ((r = d[e]) ? (c = function(e) { r.click && r.click.call(E, e) }, (v = o.getCustomButtonIconClass(r)) || (v = o.getIconClass(e)) || (g = r.text)) : (s = l[e]) ? (n.viewsWithButtons.push(e), c = function() { a.changeView(e) }, (g = s.buttonTextOverride) || (v = o.getIconClass(e)) || (g = s.buttonTextDefault)) : a[e] && (c = function() { a[e]() }, (g = f[e]) || (v = o.getIconClass(e)) || (g = p[e])), c && (m = ["fc-" + e + "-button", o.getClass("button")], g ? (y = Ot(g), S = "") : v && (y = "<span class='" + v + "'></span>", S = ' aria-label="' + e + '"'), (E = i('<button type="button" class="' + m.join(" ") + '"' + S + ">" + y + "</button>")).addEventListener("click", c), u.push(E))) }), u.length > 1) {
                        r = document.createElement("div");
                        var v = o.getClass("buttonGroup");
                        h && v && r.classList.add(v), s(r, u), c.appendChild(r)
                    } else s(c, u)
                }), c
            }, t.prototype.updateToday = function(e) { this.toggleButtonEnabled("today", e) }, t.prototype.updatePrev = function(e) { this.toggleButtonEnabled("prev", e) }, t.prototype.updateNext = function(e) { this.toggleButtonEnabled("next", e) }, t.prototype.updateTitle = function(e) {
                v(this.el, "h2").forEach(function(t) {



                    var arr = e.split('/');
                    var str = arr[2] + '-' + arr[0] + '-' + arr[1]
                    e = str;
                    t.innerText = e




                })
            }, t.prototype.updateActiveButton = function(e) {
                var t = this.theme.getClass("buttonActive");
                v(this.el, "button").forEach(function(n) { e && n.classList.contains("fc-" + e + "-button") ? n.classList.add(t) : n.classList.remove(t) })
            }, t.prototype.toggleButtonEnabled = function(e, t) { v(this.el, ".fc-" + e + "-button").forEach(function(e) { e.disabled = !t }) }, t
        }(fn),
        hr = function(e) {
            function t(t, n) {
                var i = e.call(this, t) || this;
                i._renderToolbars = qt(i.renderToolbars), i.buildViewPropTransformers = Ye(gr), i.el = n, u(n, i.contentEl = r("div", { className: "fc-view-container" }));
                for (var o = i.calendar, a = 0, s = o.pluginSystem.hooks.viewContainerModifiers; a < s.length; a++) {
                    (0, s[a])(i.contentEl, o)
                }
                return i.toggleElClassNames(!0), i.computeTitle = Ye(vr), i.parseBusinessHours = Ye(function(e) { return Yt(e, i.calendar) }), i
            }
            return Ee(t, e), t.prototype.destroy = function() { this.header && this.header.destroy(), this.footer && this.footer.destroy(), this.view && this.view.destroy(), c(this.contentEl), this.toggleElClassNames(!1), e.prototype.destroy.call(this) }, t.prototype.toggleElClassNames = function(e) {
                var t = this.el.classList,
                    n = "fc-" + this.opt("dir"),
                    r = this.theme.getClass("widget");
                e ? (t.add("fc"), t.add(n), t.add(r)) : (t.remove("fc"), t.remove(n), t.remove(r))
            }, t.prototype.render = function(e) {
                this.freezeHeight();
                var t = this.computeTitle(e.dateProfile, e.viewSpec.options);
                this._renderToolbars(e.viewSpec, e.dateProfile, e.currentDate, e.dateProfileGenerator, t), this.renderView(e, t), this.updateSize(), this.thawHeight()
            }, t.prototype.renderToolbars = function(e, t, n, r, i) {
                var o = this.opt("header"),
                    a = this.opt("footer"),
                    l = this.calendar.getNow(),
                    c = r.build(l),
                    d = r.buildPrev(t, n),
                    f = r.buildNext(t, n),
                    p = { title: i, activeButton: e.type, isTodayEnabled: c.isValid && !Ze(t.currentRange, l), isPrevEnabled: d.isValid, isNextEnabled: f.isValid };
                o ? (this.header || (this.header = new pr(this.context, "fc-header-toolbar"), u(this.el, this.header.el)), this.header.receiveProps(Se({ layout: o }, p))) : this.header && (this.header.destroy(), this.header = null), a ? (this.footer || (this.footer = new pr(this.context, "fc-footer-toolbar"), s(this.el, this.footer.el)), this.footer.receiveProps(Se({ layout: a }, p))) : this.footer && (this.footer.destroy(), this.footer = null)
            }, t.prototype.renderView = function(e, t) {
                var n = this.view,
                    r = e.viewSpec,
                    i = e.dateProfileGenerator;
                n && n.viewSpec === r ? n.addScroll(n.queryScroll()) : (n && n.destroy(), n = this.view = new r.class({ calendar: this.calendar, view: null, dateEnv: this.dateEnv, theme: this.theme, options: r.options }, r, i, this.contentEl)), n.title = t;
                for (var o = { dateProfile: e.dateProfile, businessHours: this.parseBusinessHours(r.options.businessHours), eventStore: e.eventStore, eventUiBases: e.eventUiBases, dateSelection: e.dateSelection, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize }, a = 0, s = this.buildViewPropTransformers(this.calendar.pluginSystem.hooks.viewPropsTransformers); a < s.length; a++) {
                    var u = s[a];
                    Se(o, u.transform(o, r, e, n))
                }
                n.receiveProps(o)
            }, t.prototype.updateSize = function(e) {
                void 0 === e && (e = !1);
                var t = this.view;
                e && t.addScroll(t.queryScroll()), (e || null == this.isHeightAuto) && this.computeHeightVars(), t.updateSize(e, this.viewHeight, this.isHeightAuto), t.updateNowIndicator(), t.popScroll(e)
            }, t.prototype.computeHeightVars = function() {
                var e = this.calendar,
                    t = e.opt("height"),
                    n = e.opt("contentHeight");
                if (this.isHeightAuto = "auto" === t || "auto" === n, "number" == typeof n) this.viewHeight = n;
                else if ("function" == typeof n) this.viewHeight = n();
                else if ("number" == typeof t) this.viewHeight = t - this.queryToolbarsHeight();
                else if ("function" == typeof t) this.viewHeight = t() - this.queryToolbarsHeight();
                else if ("parent" === t) {
                    var r = this.el.parentNode;
                    this.viewHeight = r.getBoundingClientRect().height - this.queryToolbarsHeight()
                } else this.viewHeight = Math.round(this.contentEl.getBoundingClientRect().width / Math.max(e.opt("aspectRatio"), .5))
            }, t.prototype.queryToolbarsHeight = function() { var e = 0; return this.header && (e += I(this.header.el)), this.footer && (e += I(this.footer.el)), e }, t.prototype.freezeHeight = function() { y(this.el, { height: this.el.getBoundingClientRect().height, overflow: "hidden" }) }, t.prototype.thawHeight = function() { y(this.el, { height: "", overflow: "" }) }, t
        }(fn);

    function vr(e, t) { var n; return n = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange, this.dateEnv.formatRange(n.start, n.end, ot(t.titleFormat || function(e) { var t = e.currentRangeUnit; if ("year" === t) return { year: "numeric" }; if ("month" === t) return { year: "numeric", month: "2-digit" }; var n = L(e.currentRange.start, e.currentRange.end); return null !== n && n > 1 ? { year: "numeric", month: "2-digit", day: "2-digit" } : { year: "numeric", month: "2-digit", day: "2-digit" } }(e), t.titleRangeSeparator), { isEndExclusive: e.isRangeAllDay }) }

    function gr(e) { return e.map(function(e) { return new e }) }
    var yr = function() {
        function e(e) { this.component = e.component }
        return e.prototype.destroy = function() {}, e
    }();
    var mr = {},
        Er = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.handleSegClick = function(e, t) {
                    var r = n.component,
                        i = ht(t);
                    if (i && r.isValidSegDownEl(e.target)) {
                        var o = p(e.target, ".fc-has-url"),
                            a = o ? o.querySelector("a[href]").href : "";
                        r.publiclyTrigger("eventClick", [{ el: t, event: new ct(r.calendar, i.eventRange.def, i.eventRange.instance), jsEvent: e, view: r.view },
                            // console.log(tankuang.className),
                            tankuang.className = "show",
                            // console.log(tankuang.className),
                            content.innerText = t.text,
                            tankuang.style.left = (e.pageX >= (document.body.offsetWidth - 300) ? ((document.body.offsetWidth - 350) + 'px') : (e.pageX + 'px')),
                            // tankuang.style.top = (e.pageY >= (window.screen.availHeight - 300) ? ((window.screen.availHeight - 300) + 'px') : (e.pageX + 'px')),
                            tankuang.style.top = e.pageY + 'px',
                            // console.log(e),
                            console.log(window.screen.availHeight, window.screen.height, window.scrollY, e.pageY, tankuang.style.top),
                        ]), a && !e.defaultPrevented && (window.location.href = a)
                    }
                };
                var r = t.component;
                return n.destroy = O(r.el, "click", r.fgSegSelector + "," + r.bgSegSelector, n.handleSegClick), n
            }
            return Ee(t, e), t
        }(yr),
        Sr = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.handleEventElRemove = function(e) { e === n.currentSegEl && n.handleSegLeave(null, n.currentSegEl) }, n.handleSegEnter = function(e, t) { ht(t) && (t.classList.add("fc-allow-mouse-resize"), n.currentSegEl = t, n.triggerEvent("eventMouseEnter", e, t)) }, n.handleSegLeave = function(e, t) { n.currentSegEl && (t.classList.remove("fc-allow-mouse-resize"), n.currentSegEl = null, n.triggerEvent("eventMouseLeave", e, t)) };
                var r, i, o, a, s, u = t.component;
                return n.removeHoverListeners = (r = u.el, i = u.fgSegSelector + "," + u.bgSegSelector, o = n.handleSegEnter, a = n.handleSegLeave, O(r, "mouseover", i, function(e, t) {
                    if (t !== s) {
                        s = t, o(e, t);
                        var n = function(e) { s = null, a(e, t), t.removeEventListener("mouseleave", n) };
                        t.addEventListener("mouseleave", n)
                    }
                })), u.calendar.on("eventElRemove", n.handleEventElRemove), n
            }
            return Ee(t, e), t.prototype.destroy = function() { this.removeHoverListeners(), this.component.calendar.off("eventElRemove", this.handleEventElRemove) }, t.prototype.triggerEvent = function(e, t, n) {
                var r = this.component,
                    i = ht(n);
                t && !r.isValidSegDownEl(t.target) || r.publiclyTrigger(e, [{ el: n, event: new ct(this.component.calendar, i.eventRange.def, i.eventRange.instance), jsEvent: t, view: r.view }])
            }, t
        }(yr),
        br = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return Ee(t, e), t
        }(cn);
    br.prototype.classes = { widget: "fc-unthemed", widgetHeader: "fc-widget-header", widgetContent: "fc-widget-content", buttonGroup: "fc-button-group", button: "fc-button fc-button-primary", buttonActive: "fc-button-active", popoverHeader: "fc-widget-header", popoverContent: "fc-widget-content", headerRow: "fc-widget-header", dayRow: "fc-widget-content", listView: "fc-widget-content" }, br.prototype.baseIconClass = "fc-icon", br.prototype.iconClasses = { close: "fc-icon-x", prev: "fc-icon-chevron-left", next: "fc-icon-chevron-right", prevYear: "fc-icon-chevrons-left", nextYear: "fc-icon-chevrons-right" }, br.prototype.iconOverrideOption = "buttonIcons", br.prototype.iconOverrideCustomButtonOption = "icon", br.prototype.iconOverridePrefix = "fc-icon-";
    var Dr = function() {
        function e(e, t) {
            var n = this;
            this.parseRawLocales = Ye(On), this.buildLocale = Ye(_n), this.buildDateEnv = Ye(Tr), this.buildTheme = Ye(wr), this.buildEventUiSingleBase = Ye(this._buildEventUiSingleBase), this.buildSelectionConfig = Ye(this._buildSelectionConfig), this.buildEventUiBySource = qe(Ir, Me), this.buildEventUiBases = Ye(Cr), this.interactionsStore = {}, this.actionQueue = [], this.isReducing = !1, this.needsRerender = !1, this.needsFullRerender = !1, this.isRendering = !1, this.renderingPauseDepth = 0, this.buildDelayedRerender = Ye(Rr), this.afterSizingTriggers = {}, this.isViewUpdated = !1, this.isDatesUpdated = !1, this.isEventsUpdated = !1, this.el = e, this.optionsManager = new xn(t || {}), this.pluginSystem = new gn, this.addPluginInputs(this.optionsManager.computed.plugins || []), this.handleOptions(this.optionsManager.computed), this.publiclyTrigger("_init"), this.hydrate(), this.calendarInteractions = this.pluginSystem.hooks.calendarInteractions.map(function(e) { return new e(n) })
        }
        return e.prototype.addPluginInputs = function(e) {
            for (var t = function(e) {
                    for (var t = [], n = 0, r = e; n < r.length; n++) {
                        var i = r[n];
                        if ("string" == typeof i) {
                            var o = "FullCalendar" + ue(i);
                            window[o] ? t.push(window[o].default) : console.warn("Plugin file not loaded for " + i)
                        } else t.push(i)
                    }
                    return Mn.concat(t)
                }(e), n = 0, r = t; n < r.length; n++) {
                var i = r[n];
                this.pluginSystem.add(i)
            }
        }, Object.defineProperty(e.prototype, "view", { get: function() { return this.component ? this.component.view : null }, enumerable: !0, configurable: !0 }), e.prototype.render = function() { this.component ? this.requestRerender(!0) : (this.renderableEventStore = { defs: {}, instances: {} }, this.bindHandlers(), this.executeRender()) }, e.prototype.destroy = function() {
            if (this.component) {
                this.unbindHandlers(), this.component.destroy(), this.component = null;
                for (var e = 0, t = this.calendarInteractions; e < t.length; e++) { t[e].destroy() }
                this.publiclyTrigger("_destroyed")
            }
        }, e.prototype.bindHandlers = function() {
            var e = this;
            this.removeNavLinkListener = O(this.el, "click", "a[data-goto]", function(t, n) {
                var r = n.getAttribute("data-goto");
                r = r ? JSON.parse(r) : {};
                var i = e.dateEnv,
                    o = i.createMarker(r.date),
                    a = r.type,
                    s = e.viewOpt("navLink" + ue(a) + "Click");
                "function" == typeof s ? s(i.toDate(o), t) : ("string" == typeof s && (a = s), e.zoomTo(o, a))
            }), this.opt("handleWindowResize") && window.addEventListener("resize", this.windowResizeProxy = pe(this.windowResize.bind(this), this.opt("windowResizeDelay")))
        }, e.prototype.unbindHandlers = function() { this.removeNavLinkListener(), this.windowResizeProxy && (window.removeEventListener("resize", this.windowResizeProxy), this.windowResizeProxy = null) }, e.prototype.hydrate = function() {
            var e = this;
            this.state = this.buildInitialState();
            var t = this.opt("eventSources") || [],
                n = this.opt("events"),
                r = [];
            n && t.unshift(n);
            for (var i = 0, o = t; i < o.length; i++) {
                var a = Wn(o[i], this);
                a && r.push(a)
            }
            this.batchRendering(function() { e.dispatch({ type: "INIT" }), e.dispatch({ type: "ADD_EVENT_SOURCES", sources: r }), e.dispatch({ type: "SET_VIEW_TYPE", viewType: e.opt("defaultView") || e.pluginSystem.hooks.defaultView }) })
        }, e.prototype.buildInitialState = function() { return { viewType: null, loadingLevel: 0, eventSourceLoadingLevel: 0, currentDate: this.getInitialDate(), dateProfile: null, eventSources: {}, eventStore: { defs: {}, instances: {} }, dateSelection: null, eventSelection: "", eventDrag: null, eventResize: null } }, e.prototype.dispatch = function(e) {
            if (this.actionQueue.push(e), !this.isReducing) {
                this.isReducing = !0;
                for (var t = this.state; this.actionQueue.length;) this.state = this.reduce(this.state, this.actionQueue.shift(), this);
                var n = this.state;
                this.isReducing = !1, !t.loadingLevel && n.loadingLevel ? this.publiclyTrigger("loading", [!0]) : t.loadingLevel && !n.loadingLevel && this.publiclyTrigger("loading", [!1]);
                var r = this.component && this.component.view;
                (t.eventStore !== n.eventStore || this.needsFullRerender) && t.eventStore && (this.isEventsUpdated = !0), (t.dateProfile !== n.dateProfile || this.needsFullRerender) && (t.dateProfile && r && this.publiclyTrigger("datesDestroy", [{ view: r, el: r.el }]), this.isDatesUpdated = !0), (t.viewType !== n.viewType || this.needsFullRerender) && (t.viewType && r && this.publiclyTrigger("viewSkeletonDestroy", [{ view: r, el: r.el }]), this.isViewUpdated = !0), this.requestRerender()
            }
        }, e.prototype.reduce = function(e, t, n) { return Kn(e, t, n) }, e.prototype.requestRerender = function(e) { void 0 === e && (e = !1), this.needsRerender = !0, this.needsFullRerender = this.needsFullRerender || e, this.delayedRerender() }, e.prototype.tryRerender = function() { this.component && this.needsRerender && !this.renderingPauseDepth && !this.isRendering && this.executeRender() }, e.prototype.batchRendering = function(e) { this.renderingPauseDepth++, e(), this.renderingPauseDepth--, this.needsRerender && this.requestRerender() }, e.prototype.executeRender = function() {
            var e = this.needsFullRerender;
            this.needsRerender = !1, this.needsFullRerender = !1, this.isRendering = !0, this.renderComponent(e), this.isRendering = !1, this.needsRerender && this.delayedRerender()
        }, e.prototype.renderComponent = function(e) {
            var t = this.state,
                n = this.component,
                r = t.viewType,
                i = this.viewSpecs[r],
                o = e && n ? n.view.queryScroll() : null;
            if (!i) throw new Error('View type "' + r + '" is not valid');
            var a = this.renderableEventStore = t.eventSourceLoadingLevel && !this.opt("progressiveEventRendering") ? this.renderableEventStore : t.eventStore,
                s = this.buildEventUiSingleBase(i.options),
                u = this.buildEventUiBySource(t.eventSources),
                l = this.eventUiBases = this.buildEventUiBases(a.defs, s, u);
            !e && n || (n && (n.freezeHeight(), n.destroy()), n = this.component = new hr({ calendar: this, view: null, dateEnv: this.dateEnv, theme: this.theme, options: this.optionsManager.computed }, this.el), this.isViewUpdated = !0, this.isDatesUpdated = !0, this.isEventsUpdated = !0), n.receiveProps(Se({}, t, { viewSpec: i, dateProfile: t.dateProfile, dateProfileGenerator: this.dateProfileGenerators[r], eventStore: a, eventUiBases: l, dateSelection: t.dateSelection, eventSelection: t.eventSelection, eventDrag: t.eventDrag, eventResize: t.eventResize })), o && n.view.applyScroll(o, !1), this.isViewUpdated && (this.isViewUpdated = !1, this.publiclyTrigger("viewSkeletonRender", [{ view: n.view, el: n.view.el }])), this.isDatesUpdated && (this.isDatesUpdated = !1, this.publiclyTrigger("datesRender", [{ view: n.view, el: n.view.el }])), this.isEventsUpdated && (this.isEventsUpdated = !1), this.releaseAfterSizingTriggers()
        }, e.prototype.setOption = function(e, t) {
            var n;
            this.mutateOptions(((n = {})[e] = t, n), [], !0)
        }, e.prototype.getOption = function(e) { return this.optionsManager.computed[e] }, e.prototype.opt = function(e) { return this.optionsManager.computed[e] }, e.prototype.viewOpt = function(e) { return this.viewOpts()[e] }, e.prototype.viewOpts = function() { return this.viewSpecs[this.state.viewType].options }, e.prototype.mutateOptions = function(e, t, n, r) {
            var i = this,
                o = this.pluginSystem.hooks.optionChangeHandlers,
                a = {},
                s = {},
                u = this.dateEnv,
                l = !1,
                c = !1,
                d = Boolean(t.length);
            for (var f in e) o[f] ? s[f] = e[f] : a[f] = e[f];
            for (var p in a) /^(height|contentHeight|aspectRatio)$/.test(p) ? c = !0 : /^(defaultDate|defaultView)$/.test(p) || (d = !0, "timeZone" === p && (l = !0));
            this.optionsManager.mutate(a, t, n), d && (this.handleOptions(this.optionsManager.computed), this.needsFullRerender = !0), this.batchRendering(function() {
                if (d ? (l && i.dispatch({ type: "CHANGE_TIMEZONE", oldDateEnv: u }), i.dispatch({ type: "SET_VIEW_TYPE", viewType: i.state.viewType })) : c && i.updateSize(), r)
                    for (var e in s) o[e](s[e], i, r)
            })
        }, e.prototype.handleOptions = function(e) {
            var t = this,
                n = this.pluginSystem.hooks;
            this.defaultAllDayEventDuration = J(e.defaultAllDayEventDuration), this.defaultTimedEventDuration = J(e.defaultTimedEventDuration), this.delayedRerender = this.buildDelayedRerender(e.rerenderDelay), this.theme = this.buildTheme(e);
            var r = this.parseRawLocales(e.locales);
            this.availableRawLocales = r.map;
            var i = this.buildLocale(e.locale || r.defaultCode, r.map);
            this.dateEnv = this.buildDateEnv(i, e.timeZone, n.namedTimeZonedImpl, e.firstDay, e.weekNumberCalculation, e.weekLabel, n.cmdFormatter), this.selectionConfig = this.buildSelectionConfig(e), this.viewSpecs = fr(n.views, this.optionsManager), this.dateProfileGenerators = Re(this.viewSpecs, function(e) { return new e.class.prototype.dateProfileGeneratorClass(e, t) })
        }, e.prototype.getAvailableLocaleCodes = function() { return Object.keys(this.availableRawLocales) }, e.prototype._buildSelectionConfig = function(e) { return Nt("select", e, this) }, e.prototype._buildEventUiSingleBase = function(e) { return e.editable && (e = Se({}, e, { eventEditable: !0 })), Nt("event", e, this) }, e.prototype.hasPublicHandlers = function(e) { return this.hasHandlers(e) || this.opt(e) }, e.prototype.publiclyTrigger = function(e, t) { var n = this.opt(e); if (this.triggerWith(e, this, t), n) return n.apply(this, t) }, e.prototype.publiclyTriggerAfterSizing = function(e, t) {
            var n = this.afterSizingTriggers;
            (n[e] || (n[e] = [])).push(t)
        }, e.prototype.releaseAfterSizingTriggers = function() {
            var e = this.afterSizingTriggers;
            for (var t in e)
                for (var n = 0, r = e[t]; n < r.length; n++) {
                    var i = r[n];
                    this.publiclyTrigger(t, i)
                }
            this.afterSizingTriggers = {}
        }, e.prototype.isValidViewType = function(e) { return Boolean(this.viewSpecs[e]) }, e.prototype.changeView = function(e, t) {
            var n = null;
            t && (t.start && t.end ? (this.optionsManager.mutate({ visibleRange: t }, []), this.handleOptions(this.optionsManager.computed)) : n = this.dateEnv.createMarker(t)), this.unselect(), this.dispatch({ type: "SET_VIEW_TYPE", viewType: e, dateMarker: n })
        }, e.prototype.zoomTo = function(e, t) {
            var n;
            t = t || "day", n = this.viewSpecs[t] || this.getUnitViewSpec(t), this.unselect(), n ? this.dispatch({ type: "SET_VIEW_TYPE", viewType: n.type, dateMarker: e }) : this.dispatch({ type: "SET_DATE", dateMarker: e })
        }, e.prototype.getUnitViewSpec = function(e) {
            var t, n, r = this.component,
                i = [];
            for (var o in r.header && i.push.apply(i, r.header.viewsWithButtons), r.footer && i.push.apply(i, r.footer.viewsWithButtons), this.viewSpecs) i.push(o);
            for (t = 0; t < i.length; t++)
                if ((n = this.viewSpecs[i[t]]) && n.singleUnit === e) return n
        }, e.prototype.getInitialDate = function() { var e = this.opt("defaultDate"); return null != e ? this.dateEnv.createMarker(e) : this.getNow() }, e.prototype.prev = function() { this.unselect(), this.dispatch({ type: "PREV" }) }, e.prototype.next = function() { this.unselect(), this.dispatch({ type: "NEXT" }) }, e.prototype.prevYear = function() { this.unselect(), this.dispatch({ type: "SET_DATE", dateMarker: this.dateEnv.addYears(this.state.currentDate, -1) }) }, e.prototype.nextYear = function() { this.unselect(), this.dispatch({ type: "SET_DATE", dateMarker: this.dateEnv.addYears(this.state.currentDate, 1) }) }, e.prototype.today = function() { this.unselect(), this.dispatch({ type: "SET_DATE", dateMarker: this.getNow() }) }, e.prototype.gotoDate = function(e) { this.unselect(), this.dispatch({ type: "SET_DATE", dateMarker: this.dateEnv.createMarker(e) }) }, e.prototype.incrementDate = function(e) {
            var t = J(e);
            t && (this.unselect(), this.dispatch({ type: "SET_DATE", dateMarker: this.dateEnv.add(this.state.currentDate, t) }))
        }, e.prototype.getDate = function() { return this.dateEnv.toDate(this.state.currentDate) }, e.prototype.formatDate = function(e, t) { var n = this.dateEnv; return n.format(n.createMarker(e), ot(t)) }, e.prototype.formatRange = function(e, t, n) { var r = this.dateEnv; return r.formatRange(r.createMarker(e), r.createMarker(t), ot(n, this.opt("defaultRangeSeparator")), n) }, e.prototype.formatIso = function(e, t) { var n = this.dateEnv; return n.formatIso(n.createMarker(e), { omitTime: t }) }, e.prototype.windowResize = function(e) {!this.isHandlingWindowResize && this.component && e.target === window && (this.isHandlingWindowResize = !0, this.updateSize(), this.publiclyTrigger("windowResize", [this.view]), this.isHandlingWindowResize = !1) }, e.prototype.updateSize = function() { this.component && this.component.updateSize(!0) }, e.prototype.registerInteractiveComponent = function(e, t) {
            var n = function(e, t) { return { component: e, el: t.el, useEventCenter: null == t.useEventCenter || t.useEventCenter } }(e, t),
                r = [Er, Sr].concat(this.pluginSystem.hooks.componentInteractions).map(function(e) { return new e(n) });
            this.interactionsStore[e.uid] = r, mr[e.uid] = n
        }, e.prototype.unregisterInteractiveComponent = function(e) {
            for (var t = 0, n = this.interactionsStore[e.uid]; t < n.length; t++) { n[t].destroy() }
            delete this.interactionsStore[e.uid], delete mr[e.uid]
        }, e.prototype.select = function(e, t) {
            var n = or(null == t ? null != e.start ? e : { start: e, end: null } : { start: e, end: t }, this.dateEnv, J({ days: 1 }));
            n && (this.dispatch({ type: "SELECT_DATES", selection: n }), this.triggerDateSelect(n))
        }, e.prototype.unselect = function(e) { this.state.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), this.triggerDateUnselect(e)) }, e.prototype.triggerDateSelect = function(e, t) {
            var n = Se({}, this.buildDateSpanApi(e), { jsEvent: t ? t.origEvent : null, view: this.view });
            this.publiclyTrigger("select", [n])
        }, e.prototype.triggerDateUnselect = function(e) { this.publiclyTrigger("unselect", [{ jsEvent: e ? e.origEvent : null, view: this.view }]) }, e.prototype.triggerDateClick = function(e, t, n, r) {
            var i = Se({}, this.buildDatePointApi(e), { dayEl: t, jsEvent: r, view: n });
            this.publiclyTrigger("dateClick", [i])
        }, e.prototype.buildDatePointApi = function(e) {
            for (var t, n, r = {}, i = 0, o = this.pluginSystem.hooks.datePointTransforms; i < o.length; i++) {
                var a = o[i];
                Se(r, a(e, this))
            }
            return Se(r, (t = e, { date: (n = this.dateEnv).toDate(t.range.start), dateStr: n.formatIso(t.range.start, { omitTime: t.allDay }), allDay: t.allDay })), r
        }, e.prototype.buildDateSpanApi = function(e) {
            for (var t, n, r = {}, i = 0, o = this.pluginSystem.hooks.dateSpanTransforms; i < o.length; i++) {
                var a = o[i];
                Se(r, a(e, this))
            }
            return Se(r, (t = e, { start: (n = this.dateEnv).toDate(t.range.start), end: n.toDate(t.range.end), startStr: n.formatIso(t.range.start, { omitTime: t.allDay }), endStr: n.formatIso(t.range.end, { omitTime: t.allDay }), allDay: t.allDay })), r
        }, e.prototype.getNow = function() { var e = this.opt("now"); return "function" == typeof e && (e = e()), null == e ? this.dateEnv.createNowMarker() : this.dateEnv.createMarker(e) }, e.prototype.getDefaultEventEnd = function(e, t) { var n = t; return e ? (n = B(n), n = this.dateEnv.add(n, this.defaultAllDayEventDuration)) : n = this.dateEnv.add(n, this.defaultTimedEventDuration), n }, e.prototype.addEvent = function(e, t) {
            if (e instanceof ct) {
                var n = e._def,
                    r = e._instance;
                return this.state.eventStore.defs[n.defId] || this.dispatch({ type: "ADD_EVENTS", eventStore: Oe({ def: n, instance: r }) }), e
            }
            var i;
            if (t instanceof lt) i = t.internalEventSource.sourceId;
            else if (null != t) {
                var o = this.getEventSourceById(t);
                if (!o) return console.warn('Could not find an event source with ID "' + t + '"'), null;
                i = o.internalEventSource.sourceId
            }
            var a = Ft(e, i, this);
            return a ? (this.dispatch({ type: "ADD_EVENTS", eventStore: Oe(a) }), new ct(this, a.def, a.def.recurringDef ? null : a.instance)) : null
        }, e.prototype.getEventById = function(e) {
            var t = this.state.eventStore,
                n = t.defs,
                r = t.instances;
            for (var i in e = String(e), n) { var o = n[i]; if (o.publicId === e) { if (o.recurringDef) return new ct(this, o, null); for (var a in r) { var s = r[a]; if (s.defId === o.defId) return new ct(this, o, s) } } }
            return null
        }, e.prototype.getEvents = function() {
            var e = this.state.eventStore,
                t = e.defs,
                n = e.instances,
                r = [];
            for (var i in n) {
                var o = n[i],
                    a = t[o.defId];
                r.push(new ct(this, a, o))
            }
            return r
        }, e.prototype.removeAllEvents = function() { this.dispatch({ type: "REMOVE_ALL_EVENTS" }) }, e.prototype.rerenderEvents = function() { this.dispatch({ type: "RESET_EVENTS" }) }, e.prototype.getEventSources = function() {
            var e = this.state.eventSources,
                t = [];
            for (var n in e) t.push(new lt(this, e[n]));
            return t
        }, e.prototype.getEventSourceById = function(e) {
            var t = this.state.eventSources;
            for (var n in e = String(e), t)
                if (t[n].publicId === e) return new lt(this, t[n]);
            return null
        }, e.prototype.addEventSource = function(e) { if (e instanceof lt) return this.state.eventSources[e.internalEventSource.sourceId] || this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [e.internalEventSource] }), e; var t = Wn(e, this); return t ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [t] }), new lt(this, t)) : null }, e.prototype.removeAllEventSources = function() { this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" }) }, e.prototype.refetchEvents = function() { this.dispatch({ type: "FETCH_EVENT_SOURCES" }) }, e.prototype.scrollToTime = function(e) {
            var t = J(e);
            t && this.component.view.scrollToDuration(t)
        }, e
    }();

    function Tr(e, t, n, r, i, o, a) { return new Bn({ calendarSystem: "gregory", timeZone: t, namedTimeZoneImpl: n, locale: e, weekNumberCalculation: i, firstDay: r, weekLabel: o, cmdFormatter: a }) }

    function wr(e) { return new(this.pluginSystem.hooks.themeClasses[e.themeSystem] || br)(e) }

    function Rr(e) { var t = this.tryRerender.bind(this); return null != e && (t = pe(t, e)), t }

    function Ir(e) { return Re(e, function(e) { return e.ui }) }

    function Cr(e, t, n) {
        var r = { "": t };
        for (var i in e) {
            var o = e[i];
            o.sourceId && n[o.sourceId] && (r[i] = n[o.sourceId])
        }
        return r
    }
    tn.mixInto(Dr);
    var Mr = function(e) {
        function t(t, n, i, o) { var a = e.call(this, t, r("div", { className: "fc-view fc-" + n.type + "-view" }), !0) || this; return a.renderDatesMem = qt(a.renderDatesWrap, a.unrenderDatesWrap), a.renderBusinessHoursMem = qt(a.renderBusinessHours, a.unrenderBusinessHours, [a.renderDatesMem]), a.renderDateSelectionMem = qt(a.renderDateSelectionWrap, a.unrenderDateSelectionWrap, [a.renderDatesMem]), a.renderEventsMem = qt(a.renderEvents, a.unrenderEvents, [a.renderDatesMem]), a.renderEventSelectionMem = qt(a.renderEventSelectionWrap, a.unrenderEventSelectionWrap, [a.renderEventsMem]), a.renderEventDragMem = qt(a.renderEventDragWrap, a.unrenderEventDragWrap, [a.renderDatesMem]), a.renderEventResizeMem = qt(a.renderEventResizeWrap, a.unrenderEventResizeWrap, [a.renderDatesMem]), a.viewSpec = n, a.dateProfileGenerator = i, a.type = n.type, a.eventOrderSpecs = ie(a.opt("eventOrder")), a.nextDayThreshold = J(a.opt("nextDayThreshold")), o.appendChild(a.el), a.initialize(), a }
        return Ee(t, e), t.prototype.initialize = function() {}, Object.defineProperty(t.prototype, "activeStart", { get: function() { return this.dateEnv.toDate(this.props.dateProfile.activeRange.start) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "activeEnd", { get: function() { return this.dateEnv.toDate(this.props.dateProfile.activeRange.end) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "currentStart", { get: function() { return this.dateEnv.toDate(this.props.dateProfile.currentRange.start) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "currentEnd", { get: function() { return this.dateEnv.toDate(this.props.dateProfile.currentRange.end) }, enumerable: !0, configurable: !0 }), t.prototype.render = function(e) { this.renderDatesMem(e.dateProfile), this.renderBusinessHoursMem(e.businessHours), this.renderDateSelectionMem(e.dateSelection), this.renderEventsMem(e.eventStore), this.renderEventSelectionMem(e.eventSelection), this.renderEventDragMem(e.eventDrag), this.renderEventResizeMem(e.eventResize) }, t.prototype.destroy = function() { e.prototype.destroy.call(this), this.renderDatesMem.unrender() }, t.prototype.updateSize = function(e, t, n) {
            var r = this.calendar;
            (e || r.isViewUpdated || r.isDatesUpdated || r.isEventsUpdated) && this.updateBaseSize(e, t, n)
        }, t.prototype.updateBaseSize = function(e, t, n) {}, t.prototype.renderDatesWrap = function(e) { this.renderDates(e), this.addScroll({ duration: J(this.opt("scrollTime")) }), this.startNowIndicator(e) }, t.prototype.unrenderDatesWrap = function() { this.stopNowIndicator(), this.unrenderDates() }, t.prototype.renderDates = function(e) {}, t.prototype.unrenderDates = function() {}, t.prototype.renderBusinessHours = function(e) {}, t.prototype.unrenderBusinessHours = function() {}, t.prototype.renderDateSelectionWrap = function(e) { e && this.renderDateSelection(e) }, t.prototype.unrenderDateSelectionWrap = function(e) { e && this.unrenderDateSelection(e) }, t.prototype.renderDateSelection = function(e) {}, t.prototype.unrenderDateSelection = function(e) {}, t.prototype.renderEvents = function(e) {}, t.prototype.unrenderEvents = function() {}, t.prototype.sliceEvents = function(e, t) { var n = this.props; return dt(e, n.eventUiBases, n.dateProfile.activeRange, t ? this.nextDayThreshold : null).fg }, t.prototype.computeEventDraggable = function(e, t) { for (var n = this.calendar.pluginSystem.hooks.isDraggableTransformers, r = t.startEditable, i = 0, o = n; i < o.length; i++) { r = (0, o[i])(r, e, t, this) } return r }, t.prototype.computeEventStartResizable = function(e, t) { return t.durationEditable && this.opt("eventResizableFromStart") }, t.prototype.computeEventEndResizable = function(e, t) { return t.durationEditable }, t.prototype.renderEventSelectionWrap = function(e) { e && this.renderEventSelection(e) }, t.prototype.unrenderEventSelectionWrap = function(e) { e && this.unrenderEventSelection(e) }, t.prototype.renderEventSelection = function(e) {}, t.prototype.unrenderEventSelection = function(e) {}, t.prototype.renderEventDragWrap = function(e) { e && this.renderEventDrag(e) }, t.prototype.unrenderEventDragWrap = function(e) { e && this.unrenderEventDrag(e) }, t.prototype.renderEventDrag = function(e) {}, t.prototype.unrenderEventDrag = function(e) {}, t.prototype.renderEventResizeWrap = function(e) { e && this.renderEventResize(e) }, t.prototype.unrenderEventResizeWrap = function(e) { e && this.unrenderEventResize(e) }, t.prototype.renderEventResize = function(e) {}, t.prototype.unrenderEventResize = function(e) {}, t.prototype.startNowIndicator = function(e) {
            var t, n, r, i = this,
                o = this.dateEnv;
            this.opt("nowIndicator") && (t = this.getNowIndicatorUnit(e)) && (n = this.updateNowIndicator.bind(this), this.initialNowDate = this.calendar.getNow(), this.initialNowQueriedMs = (new Date).valueOf(), r = o.add(o.startOf(this.initialNowDate, t), J(1, t)).valueOf() - this.initialNowDate.valueOf(), this.nowIndicatorTimeoutID = setTimeout(function() { i.nowIndicatorTimeoutID = null, n(), r = "second" === t ? 1e3 : 6e4, i.nowIndicatorIntervalID = setInterval(n, r) }, r))
        }, t.prototype.updateNowIndicator = function() { this.props.dateProfile && this.initialNowDate && (this.unrenderNowIndicator(), this.renderNowIndicator(H(this.initialNowDate, (new Date).valueOf() - this.initialNowQueriedMs)), this.isNowIndicatorRendered = !0) }, t.prototype.stopNowIndicator = function() { this.isNowIndicatorRendered && (this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID), this.nowIndicatorTimeoutID = null), this.nowIndicatorIntervalID && (clearInterval(this.nowIndicatorIntervalID), this.nowIndicatorIntervalID = null), this.unrenderNowIndicator(), this.isNowIndicatorRendered = !1) }, t.prototype.getNowIndicatorUnit = function(e) {}, t.prototype.renderNowIndicator = function(e) {}, t.prototype.unrenderNowIndicator = function() {}, t.prototype.addScroll = function(e) {
            var t = this.queuedScroll || (this.queuedScroll = {});
            Se(t, e)
        }, t.prototype.popScroll = function(e) { this.applyQueuedScroll(e), this.queuedScroll = null }, t.prototype.applyQueuedScroll = function(e) { this.applyScroll(this.queuedScroll || {}, e) }, t.prototype.queryScroll = function() { var e = {}; return this.props.dateProfile && Se(e, this.queryDateScroll()), e }, t.prototype.applyScroll = function(e, t) {
            var n = e.duration;
            null != n && (delete e.duration, this.props.dateProfile && Se(e, this.computeDateScroll(n))), this.props.dateProfile && this.applyDateScroll(e)
        }, t.prototype.computeDateScroll = function(e) { return {} }, t.prototype.queryDateScroll = function() { return {} }, t.prototype.applyDateScroll = function(e) {}, t.prototype.scrollToDuration = function(e) { this.applyScroll({ duration: e }, !1) }, t
    }(pn);
    tn.mixInto(Mr), Mr.prototype.usesMinMaxTime = !1, Mr.prototype.dateProfileGeneratorClass = Jn;
    var kr = function() {
        function e(e) { this.segs = [], this.isSizeDirty = !1, this.context = e }
        return e.prototype.renderSegs = function(e, t) { this.rangeUpdated(), e = this.renderSegEls(e, t), this.segs = e, this.attachSegs(e, t), this.isSizeDirty = !0, this.context.view.triggerRenderedSegs(this.segs, Boolean(t)) }, e.prototype.unrender = function(e, t) { this.context.view.triggerWillRemoveSegs(this.segs, Boolean(t)), this.detachSegs(this.segs), this.segs = [] }, e.prototype.rangeUpdated = function() {
            var e, t, n = this.context.options;
            this.eventTimeFormat = ot(n.eventTimeFormat || this.computeEventTimeFormat(), n.defaultRangeSeparator), null == (e = n.displayEventTime) && (e = this.computeDisplayEventTime()), null == (t = n.displayEventEnd) && (t = this.computeDisplayEventEnd()), this.displayEventTime = e, this.displayEventEnd = t
        }, e.prototype.renderSegEls = function(e, t) {
            var n, r = "";
            if (e.length) {
                for (n = 0; n < e.length; n++) r += this.renderSegHtml(e[n], t);
                o(r).forEach(function(t, n) {
                    var r = e[n];
                    t && (r.el = t)
                }), e = ft(this.context.view, e, Boolean(t))
            }
            return e
        }, e.prototype.getSegClasses = function(e, t, n, r) { var i = ["fc-event", e.isStart ? "fc-start" : "fc-not-start", e.isEnd ? "fc-end" : "fc-not-end"].concat(e.eventRange.ui.classNames); return t && i.push("fc-draggable"), n && i.push("fc-resizable"), r && (i.push("fc-mirror"), r.isDragging && i.push("fc-dragging"), r.isResizing && i.push("fc-resizing")), i }, e.prototype.getTimeText = function(e, t, n) {
            var r = e.def,
                i = e.instance;
            return this._getTimeText(i.range.start, r.hasEnd ? i.range.end : null, r.allDay, t, n, i.forcedStartTzo, i.forcedEndTzo)
        }, e.prototype._getTimeText = function(e, t, n, r, i, o, a) { var s = this.context.dateEnv; return null == r && (r = this.eventTimeFormat), null == i && (i = this.displayEventEnd), this.displayEventTime && !n ? i && t ? s.formatRange(e, t, r, { forcedStartTzo: o, forcedEndTzo: a }) : s.format(e, r, { forcedTzo: o }) : "" }, e.prototype.computeEventTimeFormat = function() { return { hour: "2-digit", minute: "2-digit", omitZeroMinute: !0 } }, e.prototype.computeDisplayEventTime = function() { return !0 }, e.prototype.computeDisplayEventEnd = function() { return !0 }, e.prototype.getSkinCss = function(e) { return { "background-color": e.backgroundColor, "border-color": e.borderColor, color: e.textColor } }, e.prototype.sortEventSegs = function(e) {
            var t = this.context.view.eventOrderSpecs,
                n = e.map(Or);
            return n.sort(function(e, n) { return oe(e, n, t) }), n.map(function(e) { return e._seg })
        }, e.prototype.computeSizes = function(e) {
            (e || this.isSizeDirty) && this.computeSegSizes(this.segs)
        }, e.prototype.assignSizes = function(e) {
            (e || this.isSizeDirty) && (this.assignSegSizes(this.segs), this.isSizeDirty = !1)
        }, e.prototype.computeSegSizes = function(e) {}, e.prototype.assignSegSizes = function(e) {}, e.prototype.hideByHash = function(e) {
            if (e)
                for (var t = 0, n = this.segs; t < n.length; t++) {
                    var r = n[t];
                    e[r.eventRange.instance.instanceId] && (r.el.style.visibility = "hidden")
                }
        }, e.prototype.showByHash = function(e) {
            if (e)
                for (var t = 0, n = this.segs; t < n.length; t++) {
                    var r = n[t];
                    e[r.eventRange.instance.instanceId] && (r.el.style.visibility = "")
                }
        }, e.prototype.selectByInstanceId = function(e) {
            if (e)
                for (var t = 0, n = this.segs; t < n.length; t++) {
                    var r = n[t],
                        i = r.eventRange.instance;
                    i && i.instanceId === e && r.el && r.el.classList.add("fc-selected")
                }
        }, e.prototype.unselectByInstanceId = function(e) {
            if (e)
                for (var t = 0, n = this.segs; t < n.length; t++) {
                    var r = n[t];
                    r.el && r.el.classList.remove("fc-selected")
                }
        }, e
    }();

    function Or(e) {
        var t = e.eventRange.def,
            n = e.eventRange.instance.range,
            r = n.start ? n.start.valueOf() : 0,
            i = n.end ? n.end.valueOf() : 0;
        return Se({}, t.extendedProps, t, { id: t.publicId, start: r, end: i, duration: i - r, allDay: Number(t.allDay), _seg: e })
    }
    var _r = function() {
            function e(e) { this.fillSegTag = "div", this.dirtySizeFlags = {}, this.context = e, this.containerElsByType = {}, this.segsByType = {} }
            return e.prototype.getSegsByType = function(e) { return this.segsByType[e] || [] }, e.prototype.renderSegs = function(e, t) {
                var n, r = this.renderSegEls(e, t),
                    i = this.attachSegs(e, r);
                i && (n = this.containerElsByType[e] || (this.containerElsByType[e] = [])).push.apply(n, i), this.segsByType[e] = r, "bgEvent" === e && this.context.view.triggerRenderedSegs(r, !1), this.dirtySizeFlags[e] = !0
            }, e.prototype.unrender = function(e) {
                var t = this.segsByType[e];
                t && ("bgEvent" === e && this.context.view.triggerWillRemoveSegs(t, !1), this.detachSegs(e, t))
            }, e.prototype.renderSegEls = function(e, t) {
                var n, r = this,
                    i = "";
                if (t.length) {
                    for (n = 0; n < t.length; n++) i += this.renderSegHtml(e, t[n]);
                    o(i).forEach(function(e, n) {
                        var r = t[n];
                        e && (r.el = e)
                    }), "bgEvent" === e && (t = ft(this.context.view, t, !1)), t = t.filter(function(e) { return h(e.el, r.fillSegTag) })
                }
                return t
            }, e.prototype.renderSegHtml = function(e, t) {
                var n = null,
                    r = [];
                return "highlight" !== e && "businessHours" !== e && (n = { "background-color": t.eventRange.ui.backgroundColor }), "highlight" !== e && (r = r.concat(t.eventRange.ui.classNames)), "businessHours" === e ? r.push("fc-bgevent") : r.push("fc-" + e.toLowerCase()), "<" + this.fillSegTag + (r.length ? ' class="' + r.join(" ") + '"' : "") + (n ? ' style="' + _t(n) + '"' : "") + "></" + this.fillSegTag + ">"
            }, e.prototype.detachSegs = function(e, t) {
                var n = this.containerElsByType[e];
                n && (n.forEach(c), delete this.containerElsByType[e])
            }, e.prototype.computeSizes = function(e) { for (var t in this.segsByType)(e || this.dirtySizeFlags[t]) && this.computeSegSizes(this.segsByType[t]) }, e.prototype.assignSizes = function(e) {
                for (var t in this.segsByType)(e || this.dirtySizeFlags[t]) && this.assignSegSizes(this.segsByType[t]);
                this.dirtySizeFlags = {}
            }, e.prototype.computeSegSizes = function(e) {}, e.prototype.assignSegSizes = function(e) {}, e
        }(),
        Pr = function(e) { this.timeZoneName = e },
        xr = function() {
            function e(e) { this.emitter = new tn }
            return e.prototype.destroy = function() {}, e.prototype.setMirrorIsVisible = function(e) {}, e.prototype.setMirrorNeedsRevert = function(e) {}, e.prototype.setAutoScrollEnabled = function(e) {}, e
        }();

    function Hr(e) { var t = _n(e.locale || "en", On([]).map); return e = Se({ timeZone: Rn.timeZone, calendarSystem: "gregory" }, e, { locale: t }), new Bn(e) }
    var Nr = { startTime: J, duration: J, create: Boolean, sourceId: String },
        zr = { create: !0 };

    function Ur(e, t) { return !e || t > 10 ? { weekday: "short" } : t > 1 ? { weekday: "short", month: "2-digit", day: "2-digit", omitCommas: !0 } : { weekday: "long" } }

    function Lr(e, t, n, r, i, o, a, s) {
        var u, l = o.view,
            c = o.dateEnv,
            d = o.theme,
            f = o.options,
            p = Ze(t.activeRange, e),
            h = ["fc-day-header", d.getClass("widgetHeader")];
        return u = "function" == typeof f.columnHeaderHtml ? f.columnHeaderHtml(c.toDate(e)) : "function" == typeof f.columnHeaderText ? Ot(f.columnHeaderText(c.toDate(e))) : Ot(c.format(e, i)), n ? h = h.concat(Qt(e, t, o, !0)) : h.push("fc-" + P[e.getUTCDay()]), '<th class="' + h.join(" ") + '"' + (p && n ? ' data-date="' + c.formatIso(e, { omitTime: !0 }) + '"' : "") + (a > 1 ? ' colspan="' + a + '"' : "") + (s ? " " + s : "") + ">" + (p ? Kt(l, { date: e, forceOff: !n || 1 === r }, u) : u) + "</th>"
    }
    var Br = function(e) {
            function t(t, n) { var r = e.call(this, t) || this; return n.innerHTML = "", n.appendChild(r.el = i('<div class="fc-row ' + r.theme.getClass("headerRow") + '"><table class="' + r.theme.getClass("tableGrid") + '"><thead></thead></table></div>')), r.thead = r.el.querySelector("thead"), r }
            return Ee(t, e), t.prototype.destroy = function() { c(this.el) }, t.prototype.render = function(e) {
                var t = e.dates,
                    n = e.datesRepDistinctDays,
                    r = [];
                e.renderIntroHtml && r.push(e.renderIntroHtml());
                for (var i = ot(this.opt("columnHeaderFormat") || Ur(n, t.length)), o = 0, a = t; o < a.length; o++) {
                    var s = a[o];
                    r.push(Lr(s, e.dateProfile, n, t.length, i, this.context))
                }
                this.isRtl && r.reverse(), this.thead.innerHTML = "<tr>" + r.join("") + "</tr>"
            }, t
        }(fn),
        Vr = function() {
            function e(e, t) {
                for (var n = e.start, r = e.end, i = [], o = [], a = -1; n < r;) t.isHiddenDay(n) ? i.push(a + .5) : (a++, i.push(a), o.push(n)), n = x(n, 1);
                this.dates = o, this.indices = i, this.cnt = o.length
            }
            return e.prototype.sliceRange = function(e) {
                var t = this.getDateDayIndex(e.start),
                    n = this.getDateDayIndex(x(e.end, -1)),
                    r = Math.max(0, t),
                    i = Math.min(this.cnt - 1, n);
                return (r = Math.ceil(r)) <= (i = Math.floor(i)) ? { firstIndex: r, lastIndex: i, isStart: t === r, isEnd: n === i } : null
            }, e.prototype.getDateDayIndex = function(e) {
                var t = this.indices,
                    n = Math.floor(N(this.dates[0], e));
                return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n]
            }, e
        }(),
        Ar = function() {
            function e(e, t) {
                var n, r, i, o = e.dates;
                if (t) {
                    for (r = o[0].getUTCDay(), n = 1; n < o.length && o[n].getUTCDay() !== r; n++);
                    i = Math.ceil(o.length / n)
                } else i = 1, n = o.length;
                this.rowCnt = i, this.colCnt = n, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates()
            }
            return e.prototype.buildCells = function() {
                for (var e = [], t = 0; t < this.rowCnt; t++) {
                    for (var n = [], r = 0; r < this.colCnt; r++) n.push(this.buildCell(t, r));
                    e.push(n)
                }
                return e
            }, e.prototype.buildCell = function(e, t) { return { date: this.daySeries.dates[e * this.colCnt + t] } }, e.prototype.buildHeaderDates = function() { for (var e = [], t = 0; t < this.colCnt; t++) e.push(this.cells[0][t].date); return e }, e.prototype.sliceRange = function(e) {
                var t = this.colCnt,
                    n = this.daySeries.sliceRange(e),
                    r = [];
                if (n)
                    for (var i = n.firstIndex, o = n.lastIndex, a = i; a <= o;) {
                        var s = Math.floor(a / t),
                            u = Math.min((s + 1) * t, o + 1);
                        r.push({ row: s, firstCol: a % t, lastCol: (u - 1) % t, isStart: n.isStart && a === i, isEnd: n.isEnd && u - 1 === o }), a = u
                    }
                return r
            }, e
        }(),
        Fr = function() {
            function e() { this.sliceBusinessHours = Ye(this._sliceBusinessHours), this.sliceDateSelection = Ye(this._sliceDateSpan), this.sliceEventStore = Ye(this._sliceEventStore), this.sliceEventDrag = Ye(this._sliceInteraction), this.sliceEventResize = Ye(this._sliceInteraction) }
            return e.prototype.sliceProps = function(e, t, n, r) {
                for (var i = [], o = 4; o < arguments.length; o++) i[o - 4] = arguments[o];
                var a = e.eventUiBases,
                    s = this.sliceEventStore.apply(this, [e.eventStore, a, t, n, r].concat(i));
                return { dateSelectionSegs: this.sliceDateSelection.apply(this, [e.dateSelection, a, r].concat(i)), businessHourSegs: this.sliceBusinessHours.apply(this, [e.businessHours, t, n, r].concat(i)), fgEventSegs: s.fg, bgEventSegs: s.bg, eventDrag: this.sliceEventDrag.apply(this, [e.eventDrag, a, t, n, r].concat(i)), eventResize: this.sliceEventResize.apply(this, [e.eventResize, a, t, n, r].concat(i)), eventSelection: e.eventSelection }
            }, e.prototype.sliceNowDate = function(e, t) { for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]; return this._sliceDateSpan.apply(this, [{ range: { start: e, end: H(e, 1) }, allDay: !1 }, {}, t].concat(n)) }, e.prototype._sliceBusinessHours = function(e, t, n, r) { for (var i = [], o = 4; o < arguments.length; o++) i[o - 4] = arguments[o]; return e ? this._sliceEventStore.apply(this, [_e(e, Wr(t, Boolean(n)), r.calendar), {}, t, n, r].concat(i)).bg : [] }, e.prototype._sliceEventStore = function(e, t, n, r, i) { for (var o = [], a = 5; a < arguments.length; a++) o[a - 5] = arguments[a]; if (e) { var s = dt(e, t, Wr(n, Boolean(r)), r); return { bg: this.sliceEventRanges(s.bg, i, o), fg: this.sliceEventRanges(s.fg, i, o) } } return { bg: [], fg: [] } }, e.prototype._sliceInteraction = function(e, t, n, r, i) { for (var o = [], a = 5; a < arguments.length; a++) o[a - 5] = arguments[a]; if (!e) return null; var s = dt(e.mutatedEvents, t, Wr(n, Boolean(r)), r); return { segs: this.sliceEventRanges(s.fg, i, o), affectedInstances: e.affectedEvents.instances, isEvent: e.isEvent, sourceSeg: e.origSeg } }, e.prototype._sliceDateSpan = function(e, t, n) {
                for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                if (!e) return [];
                for (var o = ar(e, t, n.calendar), a = this.sliceRange.apply(this, [e.range].concat(r)), s = 0, u = a; s < u.length; s++) {
                    var l = u[s];
                    l.component = n, l.eventRange = o
                }
                return a
            }, e.prototype.sliceEventRanges = function(e, t, n) {
                for (var r = [], i = 0, o = e; i < o.length; i++) {
                    var a = o[i];
                    r.push.apply(r, this.sliceEventRange(a, t, n))
                }
                return r
            }, e.prototype.sliceEventRange = function(e, t, n) {
                for (var r = this.sliceRange.apply(this, [e.range].concat(n)), i = 0, o = r; i < o.length; i++) {
                    var a = o[i];
                    a.component = t, a.eventRange = e, a.isStart = e.isStart && a.isStart, a.isEnd = e.isEnd && a.isEnd
                }
                return r
            }, e
        }();

    function Wr(e, t) { var n = e.activeRange; return t ? n : { start: H(n.start, e.minTime.milliseconds), end: H(n.end, e.maxTime.milliseconds - 864e5) } }
    e.Calendar = Dr, e.Component = fn, e.DateComponent = pn, e.DateEnv = Bn, e.DateProfileGenerator = Jn, e.DayHeader = Br, e.DaySeries = Vr, e.DayTable = Ar, e.ElementDragging = xr, e.ElementScrollController = sn, e.EmitterMixin = tn, e.EventApi = ct, e.FgEventRenderer = kr, e.FillRenderer = _r, e.Interaction = yr, e.Mixin = en, e.NamedTimeZoneImpl = Pr, e.PositionCache = on, e.ScrollComponent = ln, e.ScrollController = an, e.Slicer = Fr, e.Splitter = Xt, e.Theme = cn, e.View = Mr, e.WindowScrollController = un, e.addDays = x, e.addDurations = function(e, t) { return { years: e.years + t.years, months: e.months + t.months, days: e.days + t.days, milliseconds: e.milliseconds + t.milliseconds } }, e.addMs = H, e.addWeeks = function(e, t) { var n = Z(e); return n[2] += 7 * t, j(n) }, e.allowContextMenu = function(e) { e.removeEventListener("contextmenu", k) }, e.allowSelection = function(e) { e.classList.remove("fc-unselectable"), e.removeEventListener("selectstart", k) }, e.appendToElement = s, e.applyAll = de, e.applyMutationToEventStore = yt, e.applyStyle = y, e.applyStyleProp = m, e.asRoughMinutes = function(e) { return te(e) / 6e4 }, e.asRoughMs = te, e.asRoughSeconds = function(e) { return te(e) / 1e3 }, e.buildGotoAnchorHtml = Kt, e.buildSegCompareObj = Or, e.capitaliseFirstLetter = ue, e.combineEventUis = Ut, e.compareByFieldSpec = ae, e.compareByFieldSpecs = oe, e.compareNumbers = function(e, t) { return e - t }, e.compensateScroll = function(e, t) { t.left && y(e, { borderLeftWidth: 1, marginLeft: t.left - 1 }), t.right && y(e, { borderRightWidth: 1, marginRight: t.right - 1 }) }, e.computeClippingRect = function(e) { return M(e).map(function(e) { return w(e) }).concat({ left: window.pageXOffset, right: window.pageXOffset + document.documentElement.clientWidth, top: window.pageYOffset, bottom: window.pageYOffset + document.documentElement.clientHeight }).reduce(function(e, t) { return E(e, t) || t }) }, e.computeEdges = T, e.computeFallbackHeaderFormat = Ur, e.computeHeightAndMargins = I, e.computeInnerRect = w, e.computeRect = R, e.computeVisibleDayRange = ge, e.config = {}, e.constrainPoint = function(e, t) { return { left: Math.min(Math.max(e.left, t.left), t.right), top: Math.min(Math.max(e.top, t.top), t.bottom) } }, e.createDuration = J, e.createElement = r, e.createEmptyEventStore = He, e.createEventInstance = Zt, e.createFormatter = ot, e.createPlugin = vn, e.cssToStr = _t, e.debounce = pe, e.diffDates = ye, e.diffDayAndTime = z, e.diffDays = N, e.diffPoints = function(e, t) { return { left: e.left - t.left, top: e.top - t.top } }, e.diffWeeks = function(e, t) { return N(e, t) / 7 }, e.diffWholeDays = L, e.diffWholeWeeks = U, e.disableCursor = function() { document.body.classList.add("fc-not-allowed") }, e.distributeHeight = function(e, t, n) {
        var r = Math.floor(t / e.length),
            i = Math.floor(t - r * (e.length - 1)),
            o = [],
            a = [],
            s = [],
            u = 0;
        re(e), e.forEach(function(t, n) {
            var l = n === e.length - 1 ? i : r,
                c = t.getBoundingClientRect().height,
                d = c + C(t);
            d < l ? (o.push(t), a.push(d), s.push(c)) : u += d
        }), n && (t -= u, r = Math.floor(t / o.length), i = Math.floor(t - r * (o.length - 1))), o.forEach(function(e, t) {
            var n = t === o.length - 1 ? i : r,
                u = a[t],
                l = n - (u - s[t]);
            u < n && (e.style.height = l + "px")
        })
    }, e.elementClosest = p, e.elementMatches = h, e.enableCursor = function() { document.body.classList.remove("fc-not-allowed") }, e.eventTupleToStore = Oe, e.filterEventStoreDefs = ze, e.filterHash = we, e.findChildren = function(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], i = 0; i < n.length; i++)
            for (var o = n[i].children, a = 0; a < o.length; a++) {
                var s = o[a];
                t && !h(s, t) || r.push(s)
            }
        return r
    }, e.findElements = v, e.flexibleCompare = se, e.forceClassName = function(e, t, n) { n ? e.classList.add(t) : e.classList.remove(t) }, e.formatDate = function(e, t) {
        void 0 === t && (t = {});
        var n = Hr(t),
            r = ot(t),
            i = n.createMarkerMeta(e);
        return i ? n.format(i.marker, r, { forcedTzo: i.forcedTzo }) : ""
    }, e.formatIsoTimeString = function(e) { return le(e.getUTCHours(), 2) + ":" + le(e.getUTCMinutes(), 2) + ":" + le(e.getUTCSeconds(), 2) }, e.formatRange = function(e, t, n) {
        var r = Hr("object" == typeof n && n ? n : {}),
            i = ot(n, Rn.defaultRangeSeparator),
            o = r.createMarkerMeta(e),
            a = r.createMarkerMeta(t);
        return o && a ? r.formatRange(o.marker, a.marker, i, { forcedStartTzo: o.forcedTzo, forcedEndTzo: a.forcedTzo, isEndExclusive: n.isEndExclusive }) : ""
    }, e.getAllDayHtml = function(e) { return e.opt("allDayHtml") || Ot(e.opt("allDayText")) }, e.getClippingParents = M, e.getDayClasses = Qt, e.getElSeg = ht, e.getRectCenter = function(e) { return { left: (e.left + e.right) / 2, top: (e.top + e.bottom) / 2 } }, e.getRelevantEvents = Pe, e.globalDefaults = Rn, e.greatestDurationDenominator = ne, e.hasBgRendering = function(e) { return "background" === e.rendering || "inverse-background" === e.rendering }, e.htmlEscape = Ot, e.htmlToElement = i, e.insertAfterElement = function(e, t) { for (var n = l(t), r = e.nextSibling || null, i = 0; i < n.length; i++) e.parentNode.insertBefore(n[i], r) }, e.interactionSettingsStore = mr, e.interactionSettingsToStore = function(e) { var t; return (t = {})[e.component.uid] = e, t }, e.intersectRanges = Ve, e.intersectRects = E, e.isArraysEqual = je, e.isDateSpansEqual = function(e, t) {
        return Ae(e.range, t.range) && e.allDay === t.allDay && function(e, t) {
            for (var n in t)
                if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
            for (var n in e)
                if (!(n in t)) return !1;
            return !0
        }(e, t)
    }, e.isInt = ce, e.isInteractionValid = Tt, e.isMultiDayRange = function(e) { var t = ge(e); return N(t.start, t.end) > 1 }, e.isPropsEqual = Me, e.isPropsValid = Rt, e.isSingleDay = function(e) { return 0 === e.years && 0 === e.months && 1 === e.days && 0 === e.milliseconds }, e.isValidDate = Y, e.listenBySelector = O, e.mapHash = Re, e.matchCellWidths = function(e) {
        var t = 0;
        return e.forEach(function(e) {
            var n = e.firstChild;
            if (n instanceof HTMLElement) {
                var r = n.getBoundingClientRect().width;
                r > t && (t = r)
            }
        }), t++, e.forEach(function(e) { e.style.width = t + "px" }), t
    }, e.memoize = Ye, e.memoizeOutput = qe, e.memoizeRendering = qt, e.mergeEventStores = Ne, e.multiplyDuration = function(e, t) { return { years: e.years * t, months: e.months * t, days: e.days * t, milliseconds: e.milliseconds * t } }, e.padStart = le, e.parseBusinessHours = Yt, e.parseDragMeta = function(e) {
        var t = {},
            n = he(e, Nr, zr, t);
        return n.leftoverProps = t, n
    }, e.parseEventDef = Wt, e.parseFieldSpecs = ie, e.parseMarker = Ln, e.pointInsideRect = function(e, t) { return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom }, e.prependToElement = u, e.preventContextMenu = function(e) { e.addEventListener("contextmenu", k) }, e.preventDefault = k, e.preventSelection = function(e) { e.classList.add("fc-unselectable"), e.addEventListener("selectstart", k) }, e.processScopedUiProps = Nt, e.rangeContainsMarker = Ze, e.rangeContainsRange = We, e.rangesEqual = Ae, e.rangesIntersect = Fe, e.refineProps = he, e.removeElement = c, e.removeExact = function(e, t) { for (var n = 0, r = 0; r < e.length;) e[r] === t ? (e.splice(r, 1), n++) : r++; return n }, e.renderDateCell = Lr, e.requestJson = En, e.sliceEventStore = dt, e.startOfDay = B, e.subtractInnerElHeight = function(e, t) {
        var n = { position: "relative", left: -1 };
        y(e, n), y(t, n);
        var r = e.getBoundingClientRect().height - t.getBoundingClientRect().height,
            i = { position: "", left: "" };
        return y(e, i), y(t, i), r
    }, e.translateRect = function(e, t, n) { return { left: e.left + t, right: e.right + t, top: e.top + n, bottom: e.bottom + n } }, e.uncompensateScroll = function(e) { y(e, { marginLeft: "", marginRight: "", borderLeftWidth: "", borderRightWidth: "" }) }, e.undistributeHeight = re, e.unpromisify = $t, e.version = "4.3.1", e.whenTransitionDone = function(e, t) {
        var n = function(r) { t(r), _.forEach(function(t) { e.removeEventListener(t, n) }) };
        _.forEach(function(t) { e.addEventListener(t, n) })
    }, e.wholeDivideDurations = function(e, t) {
        for (var n = null, r = 0; r < G.length; r++) {
            var i = G[r];
            if (t[i]) {
                var o = e[i] / t[i];
                if (!ce(o) || null !== n && n !== o) return null;
                n = o
            } else if (e[i]) return null
        }
        return n
    }, Object.defineProperty(e, "__esModule", { value: !0 })
});
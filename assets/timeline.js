/*!
FullCalendar Timeline Plugin v4.3.0
Docs & License: https://fullcalendar.io/scheduler
(c) 2019 Adam Shaw
*/
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@fullcalendar/core")) : "function" == typeof define && define.amd ? define(["exports", "@fullcalendar/core"], t) : t((e = e || self).FullCalendarTimeline = {}, e.FullCalendar) }(this, function(e, t) {
    "use strict";
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]) })(e, t)
    };

    function n(e, t) {
        function n() { this.constructor = e }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var rr, am, pm
    var i, o = function() {
            return (o = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        },
        l = function() {
            function e() { this.gutters = {}, this.el = t.htmlToElement('<div class="fc-scroller-canvas"> <div class="fc-content"></div> <div class="fc-bg"></div> </div>'), this.contentEl = this.el.querySelector(".fc-content"), this.bgEl = this.el.querySelector(".fc-bg") }
            return e.prototype.setGutters = function(e) { e ? o(this.gutters, e) : this.gutters = {}, this.updateSize() }, e.prototype.setWidth = function(e) { this.width = e, this.updateSize() }, e.prototype.setMinWidth = function(e) { this.minWidth = e, this.updateSize() }, e.prototype.clearWidth = function() { this.width = null, this.minWidth = null, this.updateSize() }, e.prototype.updateSize = function() {
                var e = this.gutters,
                    r = this.el;
                t.forceClassName(r, "fc-gutter-left", e.left), t.forceClassName(r, "fc-gutter-right", e.right), t.forceClassName(r, "fc-gutter-top", e.top), t.forceClassName(r, "fc-gutter-bottom", e.bottom), t.applyStyle(r, { paddingLeft: e.left || "", paddingRight: e.right || "", paddingTop: e.top || "", paddingBottom: e.bottom || "", width: null != this.width ? this.width + (e.left || 0) + (e.right || 0) : "", minWidth: null != this.minWidth ? this.minWidth + (e.left || 0) + (e.right || 0) : "" }), t.applyStyle(this.bgEl, { left: e.left || "", right: e.right || "", top: e.top || "", bottom: e.bottom || "" })
            }, e
        }(),
        s = function(e) {
            function r(r, n) { var i = e.call(this, r, n) || this; return i.reportScroll = function() { i.isScrolling || i.reportScrollStart(), i.trigger("scroll"), i.isMoving = !0, i.requestMovingEnd() }, i.reportScrollStart = function() { i.isScrolling || (i.isScrolling = !0, i.trigger("scrollStart", i.isTouching)) }, i.reportTouchStart = function() { i.isTouching = !0 }, i.reportTouchEnd = function() { i.isTouching && (i.isTouching = !1, i.isTouchScrollEnabled && i.unbindPreventTouchScroll(), i.isMoving || i.reportScrollEnd()) }, i.isScrolling = !1, i.isTouching = !1, i.isMoving = !1, i.isTouchScrollEnabled = !0, i.requestMovingEnd = t.debounce(i.reportMovingEnd, 500), i.canvas = new l, i.el.appendChild(i.canvas.el), i.applyOverflow(), i.bindHandlers(), i }
            return n(r, e), r.prototype.destroy = function() { e.prototype.destroy.call(this), this.unbindHandlers() }, r.prototype.disableTouchScroll = function() { this.isTouchScrollEnabled = !1, this.bindPreventTouchScroll() }, r.prototype.enableTouchScroll = function() { this.isTouchScrollEnabled = !0, this.isTouching || this.unbindPreventTouchScroll() }, r.prototype.bindPreventTouchScroll = function() { this.preventTouchScrollHandler || this.el.addEventListener("touchmove", this.preventTouchScrollHandler = t.preventDefault) }, r.prototype.unbindPreventTouchScroll = function() { this.preventTouchScrollHandler && (this.el.removeEventListener("touchmove", this.preventTouchScrollHandler), this.preventTouchScrollHandler = null) }, r.prototype.bindHandlers = function() { this.el.addEventListener("scroll", this.reportScroll), this.el.addEventListener("touchstart", this.reportTouchStart, { passive: !0 }), this.el.addEventListener("touchend", this.reportTouchEnd) }, r.prototype.unbindHandlers = function() { this.el.removeEventListener("scroll", this.reportScroll), this.el.removeEventListener("touchstart", this.reportTouchStart, { passive: !0 }), this.el.removeEventListener("touchend", this.reportTouchEnd) }, r.prototype.reportMovingEnd = function() { this.isMoving = !1, this.isTouching || this.reportScrollEnd() }, r.prototype.reportScrollEnd = function() { this.isScrolling && (this.trigger("scrollEnd"), this.isScrolling = !1) }, r.prototype.getScrollLeft = function() {
                var e = this.el,
                    t = window.getComputedStyle(e).direction,
                    r = e.scrollLeft;
                if ("rtl" === t) switch (a()) {
                    case "positive":
                        r = r + e.clientWidth - e.scrollWidth;
                        break;
                    case "reverse":
                        r = -r
                }
                return r
            }, r.prototype.setScrollLeft = function(e) {
                var t = this.el;
                if ("rtl" === window.getComputedStyle(t).direction) switch (a()) {
                    case "positive":
                        e = e - t.clientWidth + t.scrollWidth;
                        break;
                    case "reverse":
                        e = -e
                }
                t.scrollLeft = e
            }, r.prototype.getScrollFromLeft = function() {
                var e = this.el,
                    t = window.getComputedStyle(e).direction,
                    r = e.scrollLeft;
                if ("rtl" === t) switch (a()) {
                    case "negative":
                        r = r - e.clientWidth + e.scrollWidth;
                        break;
                    case "reverse":
                        r = -r - e.clientWidth + e.scrollWidth
                }
                return r
            }, r
        }(t.ScrollComponent);

    function a() {
        return i || (i = function() {
            var e, r = t.htmlToElement('<div style=" position: absolute; top: -1000px; width: 1px; height: 1px; overflow: scroll; direction: rtl; font-size: 100px; ">A</div>');
            document.body.appendChild(r), r.scrollLeft > 0 ? e = "positive" : (r.scrollLeft = 1, e = r.scrollLeft > 0 ? "reverse" : "negative");
            return t.removeElement(r), e
        }())
    }
    t.EmitterMixin.mixInto(s);
    var c = function() {
            function e(e, r, n) { this.isHScrollbarsClipped = !1, this.isVScrollbarsClipped = !1, "clipped-scroll" === e && (e = "scroll", this.isHScrollbarsClipped = !0), "clipped-scroll" === r && (r = "scroll", this.isVScrollbarsClipped = !0), this.enhancedScroll = new s(e, r), n.appendChild(this.el = t.createElement("div", { className: "fc-scroller-clip" })), this.el.appendChild(this.enhancedScroll.el) }
            return e.prototype.destroy = function() { t.removeElement(this.el) }, e.prototype.updateSize = function() {
                var e = this.enhancedScroll,
                    r = e.el,
                    n = t.computeEdges(r),
                    i = { marginLeft: 0, marginRight: 0, marginTop: 0, marginBottom: 0 };
                this.isVScrollbarsClipped && (i.marginLeft = -n.scrollbarLeft, i.marginRight = -n.scrollbarRight), this.isHScrollbarsClipped && (i.marginBottom = -n.scrollbarBottom), t.applyStyle(r, i), !this.isHScrollbarsClipped && "hidden" !== e.overflowX || !this.isVScrollbarsClipped && "hidden" !== e.overflowY || n.scrollbarLeft || n.scrollbarRight || n.scrollbarBottom ? r.classList.remove("fc-no-scrollbars") : r.classList.add("fc-no-scrollbars")
            }, e.prototype.setHeight = function(e) { this.enhancedScroll.setHeight(e) }, e.prototype.getScrollbarWidths = function() { var e = this.enhancedScroll.getScrollbarWidths(); return this.isVScrollbarsClipped && (e.left = 0, e.right = 0), this.isHScrollbarsClipped && (e.bottom = 0), e }, e
        }(),
        d = function() {
            function e(e, t) {
                this.axis = e, this.scrollers = t;
                for (var r = 0, n = this.scrollers; r < n.length; r++) {
                    var i = n[r];
                    this.initScroller(i)
                }
            }
            return e.prototype.initScroller = function(e) {
                var t = this,
                    r = e.enhancedScroll,
                    n = function() { t.assignMasterScroller(e) };
                "wheel mousewheel DomMouseScroll MozMousePixelScroll".split(" ").forEach(function(e) { r.el.addEventListener(e, n) }), r.on("scrollStart", function() { t.masterScroller || t.assignMasterScroller(e) }).on("scroll", function() {
                    if (e === t.masterScroller)
                        for (var n = 0, i = t.scrollers; n < i.length; n++) {
                            var o = i[n];
                            if (o !== e) switch (t.axis) {
                                case "horizontal":
                                    o.enhancedScroll.el.scrollLeft = r.el.scrollLeft;
                                    break;
                                case "vertical":
                                    o.enhancedScroll.setScrollTop(r.getScrollTop())
                            }
                        }
                }).on("scrollEnd", function() { e === t.masterScroller && t.unassignMasterScroller() })
            }, e.prototype.assignMasterScroller = function(e) {
                this.unassignMasterScroller(), this.masterScroller = e;
                for (var t = 0, r = this.scrollers; t < r.length; t++) {
                    var n = r[t];
                    n !== e && n.enhancedScroll.disableTouchScroll()
                }
            }, e.prototype.unassignMasterScroller = function() {
                if (this.masterScroller) {
                    for (var e = 0, t = this.scrollers; e < t.length; e++) { t[e].enhancedScroll.enableTouchScroll() }
                    this.masterScroller = null
                }
            }, e.prototype.update = function() {
                for (var e, t, r = this.scrollers.map(function(e) { return e.getScrollbarWidths() }), n = 0, i = 0, o = 0, l = 0, s = 0, a = r; s < a.length; s++) e = a[s], n = Math.max(n, e.left), i = Math.max(i, e.right), o = Math.max(o, e.top), l = Math.max(l, e.bottom);
                for (t = 0; t < this.scrollers.length; t++) {
                    var c = this.scrollers[t];
                    e = r[t], c.enhancedScroll.canvas.setGutters("horizontal" === this.axis ? { left: n - e.left, right: i - e.right } : { top: o - e.top, bottom: l - e.bottom })
                }
            }, e
        }(),
        h = function() {
            function e(e, t, r) { this.headerScroller = new c("clipped-scroll", "hidden", e), this.bodyScroller = new c("auto", r, t), this.scrollJoiner = new d("horizontal", [this.headerScroller, this.bodyScroller]) }
            return e.prototype.destroy = function() { this.headerScroller.destroy(), this.bodyScroller.destroy() }, e.prototype.setHeight = function(e, t) {
                var r;
                r = t ? "auto" : e - this.queryHeadHeight(), this.bodyScroller.setHeight(r), this.headerScroller.updateSize(), this.bodyScroller.updateSize(), this.scrollJoiner.update()
            }, e.prototype.queryHeadHeight = function() { return this.headerScroller.enhancedScroll.canvas.contentEl.getBoundingClientRect().height }, e
        }(),
        u = function(e) {
            function r(r, n) { var i = e.call(this, r) || this; return n.appendChild(i.tableEl = t.createElement("table", { className: i.theme.getClass("tableGrid") })), i }
            return n(r, e), r.prototype.destroy = function() { t.removeElement(this.tableEl), e.prototype.destroy.call(this) }, r.prototype.render = function(e) { this.renderDates(e.tDateProfile) }, r.prototype.renderDates = function(e) {
                for (var r = this.dateEnv, n = this.theme, i = e.cellRows, o = i[i.length - 1], l = t.asRoughMs(e.labelInterval) > t.asRoughMs(e.slotDuration), s = t.isSingleDay(e.slotDuration), a = "<colgroup>", c = e.slotCnt - 1; c >= 0; c--) a += "<col/>";
                a += "</colgroup>", a += "<tbody>";
                for (var d = 0, h = i; d < h.length; d++) {
                    var u = h[d];
                    a += "<tr" + (l && u === o ? ' class="fc-chrono"' : "") + ">";
                    for (var p = 0, f = u; p < f.length; p++) {
                        var g = f[p],
                            m = [n.getClass("widgetHeader")];
                        g.isWeekStart && m.push("fc-em-cell"), s && (m = m.concat(t.getDayClasses(g.date, this.props.dateProfile, this.context, !0))), a += '<th class="' + m.join(" ") + '" data-date="' + r.formatIso(g.date, { omitTime: !e.isTimeScale, omitTimeZoneOffset: !0 }) + '"' + (g.colspan > 1 ? ' colspan="' + g.colspan + '"' : "") + '><div class="fc-cell-content">' + g.spanHtml + "</div></th>"
                    }
                    a += "</tr>"
                }
                a += "</tbody>", this.tableEl.innerHTML = a, this.slatColEls = t.findElements(this.tableEl, "col"), this.innerEls = t.findElements(this.tableEl.querySelector("tr:last-child"), "th .fc-cell-text"), t.findElements(this.tableEl.querySelectorAll("tr:not(:last-child)"), "th .fc-cell-text").forEach(function(e) { e.classList.add("fc-sticky") })
            }, r
        }(t.Component),
        p = function(e) {
            function r(r, n) { var i = e.call(this, r) || this; return n.appendChild(i.el = t.createElement("div", { className: "fc-slats" })), i }
            return n(r, e), r.prototype.destroy = function() { t.removeElement(this.el), e.prototype.destroy.call(this) }, r.prototype.render = function(e) { this.renderDates(e.tDateProfile) }, r.prototype.renderDates = function(e) {
                for (var r = this.theme, n = this.view, i = this.dateEnv, o = e.slotDates, l = e.isWeekStarts, s = '<table class="' + r.getClass("tableGrid") + '"><colgroup>', a = 0; a < o.length; a++) s += "<col/>";
                s += "</colgroup>", s += "<tbody><tr>";
                for (a = 0; a < o.length; a++) s += this.slatCellHtml(o[a], l[a], e);
                s += "</tr></tbody></table>", this.el.innerHTML = s, this.slatColEls = t.findElements(this.el, "col"), this.slatEls = t.findElements(this.el, "td");
                for (a = 0; a < o.length; a++) n.publiclyTrigger("dayRender", [{ date: i.toDate(o[a]), el: this.slatEls[a], view: n }]);
                this.outerCoordCache = new t.PositionCache(this.el, this.slatEls, !0, !1), this.innerCoordCache = new t.PositionCache(this.el, t.findChildren(this.slatEls, "div"), !0, !1)
            }, r.prototype.slatCellHtml = function(e, r, n) {
                var i, o = this.theme,
                    l = this.dateEnv;
                return n.isTimeScale ? (i = []).push(t.isInt(l.countDurationsBetween(n.normalizedRange.start, e, n.labelInterval)) ? "fc-major" : "fc-minor") : (i = t.getDayClasses(e, this.props.dateProfile, this.context)).push("fc-day"), i.unshift(o.getClass("widgetContent")), r && i.push("fc-em-cell"), '<td class="' + i.join(" ") + '" data-date="' + l.formatIso(e, { omitTime: !n.isTimeScale, omitTimeZoneOffset: !0 }) + '"><div></div></td>'
            }, r.prototype.updateSize = function() { this.outerCoordCache.build(), this.innerCoordCache.build() }, r.prototype.positionToHit = function(e) {
                var r = this.outerCoordCache,
                    n = this.props.tDateProfile,
                    i = r.leftToIndex(e);
                if (null != i) {
                    var o = r.getWidth(i),
                        l = this.isRtl ? (r.rights[i] - e) / o : (e - r.lefts[i]) / o,
                        s = Math.floor(l * n.snapsPerSlot),
                        a = this.dateEnv.add(n.slotDates[i], t.multiplyDuration(n.snapDuration, s));
                    return { dateSpan: { range: { start: a, end: this.dateEnv.add(a, n.snapDuration) }, allDay: !this.props.tDateProfile.isTimeScale }, dayEl: this.slatColEls[i], left: r.lefts[i], right: r.rights[i] }
                }
                return null
            }, r
        }(t.Component),
        f = 18,
        g = 6,
        m = 200;
    t.config.MAX_TIMELINE_SLOTS = 1e3;
    var v = [{ years: 1 }, { months: 1 }, { days: 1 }, { hours: 1 }, { minutes: 30 }, { minutes: 15 }, { minutes: 10 }, { minutes: 5 }, { minutes: 1 }, { seconds: 30 }, { seconds: 15 }, { seconds: 10 }, { seconds: 5 }, { seconds: 1 }, { milliseconds: 500 }, { milliseconds: 100 }, { milliseconds: 10 }, { milliseconds: 1 }];

    function y(e, r) {
        var n = r.dateEnv,
            i = { labelInterval: E(r, "slotLabelInterval"), slotDuration: E(r, "slotDuration") };
        ! function(e, r, n) {
            var i = r.currentRange;
            if (e.labelInterval) {
                var o = n.countDurationsBetween(i.start, i.end, e.labelInterval);
                o > t.config.MAX_TIMELINE_SLOTS && (console.warn("slotLabelInterval results in too many cells"), e.labelInterval = null)
            }
            if (e.slotDuration) {
                var l = n.countDurationsBetween(i.start, i.end, e.slotDuration);
                l > t.config.MAX_TIMELINE_SLOTS && (console.warn("slotDuration results in too many cells"), e.slotDuration = null)
            }
            if (e.labelInterval && e.slotDuration) {
                var s = t.wholeDivideDurations(e.labelInterval, e.slotDuration);
                (null === s || s < 1) && (console.warn("slotLabelInterval must be a multiple of slotDuration"), e.slotDuration = null)
            }
        }(i, e, n), D(i, e, n),
            function(e, r, n) {
                var i = r.currentRange,
                    o = e.slotDuration;
                if (!o) {
                    for (var l = D(e, r, n), s = 0, a = v; s < a.length; s++) {
                        var c = a[s],
                            d = t.createDuration(c),
                            h = t.wholeDivideDurations(l, d);
                        if (null !== h && h > 1 && h <= g) { o = d; break }
                    }
                    if (o) {
                        var u = n.countDurationsBetween(i.start, i.end, o);
                        u > m && (o = null)
                    }
                    o || (o = l), e.slotDuration = o
                }
            }(i, e, n);
        var o = r.opt("slotLabelFormat"),
            l = Array.isArray(o) ? o : null != o ? [o] : function(e, r, n, i) {
                var o, l, s = e.labelInterval,
                    a = t.greatestDurationDenominator(s).unit,
                    c = i.opt("weekNumbers"),
                    d = o = l = null;
                "week" !== a || c || (a = "day");
                switch (a) {
                    case "year":
                        d = { year: "numeric" };
                        break;
                    case "month":
                        w("years", r, n) > 1 && (d = { year: "numeric" }), o = { month: "short" };
                        break;
                    case "week":
                        w("years", r, n) > 1 && (d = { year: "numeric" }), o = { week: "narrow" };
                        break;
                    case "day":
                        w("years", r, n) > 1 ? d = { year: "numeric", month: "long" } : w("months", r, n) > 1 && (d = { month: "long" }), c && (o = { week: "short" }), l = { weekday: "narrow", day: "numeric" };
                        break;
                    case "hour":
                        c && (d = { week: "short" }), w("days", r, n) > 1 && (o = { weekday: "short", day: "numeric", month: "numeric", omitCommas: !0 }), l = { hour: "2-digit", minute: "2-digit", omitZeroMinute: !0, meridiem: "short" };
                        break;
                    case "minute":
                        t.asRoughMinutes(s) / 60 >= g ? (d = { hour: "2-digit", meridiem: "short" }, o = function(e) { return ":" + t.padStart(e.date.minute, 2) }) : d = { hour: "2-digit", minute: "numeric", meridiem: "short" };
                        break;
                    case "second":
                        t.asRoughSeconds(s) / 60 >= g ? (d = { hour: "2-digit", minute: "2-digit", meridiem: "lowercase" }, o = function(e) { return ":" + t.padStart(e.date.second, 2) }) : d = { hour: "2-digit", minute: "2-digit", second: "2-digit", meridiem: "lowercase" };
                        break;
                    case "millisecond":
                        d = { hour: "2-digit", minute: "2-digit", second: "2-digit", meridiem: "lowercase" }, o = function(e) { return "." + t.padStart(e.millisecond, 3) }
                }
                return [].concat(d || [], o || [], l || [])
            }(i, e, n, r);
        i.headerFormats = l.map(function(e) { return t.createFormatter(e) }), i.isTimeScale = Boolean(i.slotDuration.milliseconds);
        var s = null;
        if (!i.isTimeScale) { var a = t.greatestDurationDenominator(i.slotDuration).unit; /year|month|week/.test(a) && (s = a) }
        i.largeUnit = s, i.emphasizeWeeks = t.isSingleDay(i.slotDuration) && w("weeks", e, n) >= 2 && !r.opt("businessHours");
        var c, d, h = r.opt("snapDuration");
        h && (c = t.createDuration(h), d = t.wholeDivideDurations(i.slotDuration, c)), null == d && (c = i.slotDuration, d = 1), i.snapDuration = c, i.snapsPerSlot = d;
        var u = t.asRoughMs(e.maxTime) - t.asRoughMs(e.minTime),
            p = S(e.renderRange.start, i, n),
            f = S(e.renderRange.end, i, n);
        i.isTimeScale && (p = n.add(p, e.minTime), f = n.add(t.addDays(f, -1), e.maxTime)), i.timeWindowMs = u, i.normalizedRange = { start: p, end: f };
        for (var y = [], T = p; T < f;) b(T, i, e, r) && y.push(T), T = n.add(T, i.slotDuration);
        i.slotDates = y;
        var R = -1,
            x = 0,
            M = [],
            z = [];
        for (T = p; T < f;) b(T, i, e, r) ? (R++, M.push(R), z.push(x)) : M.push(R + .5), T = n.add(T, i.snapDuration), x++;
        return i.snapDiffToIndex = M, i.snapIndexToDiff = z, i.snapCnt = R + 1, i.slotCnt = i.snapCnt / i.snapsPerSlot, i.isWeekStarts = function(e, t) {
            for (var r = e.slotDates, n = e.emphasizeWeeks, i = null, o = [], l = 0, s = r; l < s.length; l++) {
                var a = s[l],
                    c = t.computeWeekNumber(a),
                    d = n && null !== i && i !== c;
                i = c, o.push(d)
            }
            return o
        }(i, n), i.cellRows = function(e, r, n) {
            for (var i = e.slotDates, o = e.headerFormats, l = o.map(function(e) { return [] }), s = o.map(function(e) { return e.getLargestUnit ? e.getLargestUnit() : null }), a = 0; a < i.length; a++)
                for (var c = i[a], d = e.isWeekStarts[a], h = 0; h < o.length; h++) {
                    var u = o[h],
                        p = l[h],
                        f = p[p.length - 1],
                        g = o.length > 1 && h < o.length - 1,
                        m = null;
                    if (g) {
                        var v = r.format(c, u);
                        f && f.text === v ? f.colspan += 1 : m = C(c, v, s[h], n)
                    } else if (!f || t.isInt(r.countDurationsBetween(e.normalizedRange.start, c, e.labelInterval))) {
                        var v = r.format(c, u);
                        m = C(c, v, s[h], n)
                    } else f.colspan += 1;
                    m && (m.weekStart = d, p.push(m))
                }
            return l
        }(i, n, r), i
    }

    function S(e, r, n) { var i = e; return r.isTimeScale || (i = t.startOfDay(i), r.largeUnit && (i = n.startOf(i, r.largeUnit))), i }

    function b(e, r, n, i) {
        if (i.dateProfileGenerator.isHiddenDay(e)) return !1;
        if (r.isTimeScale) {
            var o = t.startOfDay(e),
                l = e.valueOf() - o.valueOf() - t.asRoughMs(n.minTime);
            return (l = (l % 864e5 + 864e5) % 864e5) < r.timeWindowMs
        }
        return !0
    }

    function E(e, r) { var n = e.opt(r); if (null != n) return t.createDuration(n) }

    function D(e, r, n) {
        var i = r.currentRange,
            o = e.labelInterval;
        if (!o) {
            var l = void 0;
            if (e.slotDuration) {
                for (var s = 0, a = v; s < a.length; s++) {
                    l = a[s];
                    var c = t.createDuration(l),
                        d = t.wholeDivideDurations(c, e.slotDuration);
                    if (null !== d && d <= g) { o = c; break }
                }
                o || (o = e.slotDuration)
            } else
                for (var h = 0, u = v; h < u.length; h++) { if (l = u[h], o = t.createDuration(l), n.countDurationsBetween(i.start, i.end, o) >= f) break }
            e.labelInterval = o
        }
        return o
    }

    function w(e, r, n) {
        var i = r.currentRange,
            o = null;
        return "years" === e ? o = n.diffWholeYears(i.start, i.end) : "months" === e ? o = n.diffWholeMonths(i.start, i.end) : "weeks" === e ? o = n.diffWholeMonths(i.start, i.end) : "days" === e && (o = t.diffWholeDays(i.start, i.end)), o || 0
    }



    // var rr = '',

    function C(e, r, n, i) {
        rr  =  r.substring(0,  2);        
        am  =  r.substring(2,  4);        
        rr  =   (rr  ==  12  &&  am  ==  'am'  ?  '24'  :  rr);       
        rr  =   (rr  ==  12  &&  am  ==  'pm'  ?  '0'  :  rr);        
        r  =   (am  ==  'am'  ?  (rr  +  ':00')  :  (Number(rr)  +  12  +  ':00'));
        return {
            text: r,
            spanHtml: t.buildGotoAnchorHtml(i, { date: e, type: n, forceOff: !n }, { class: "fc-cell-text" },
                t.htmlEscape(r)),
            date: e,
            colspan: 1,
            isWeekStart: !1
        }
    }
    var T, R = function() {
            function e(e, t) { this.headParent = e, this.bodyParent = t }
            return e.prototype.render = function(e, r) {
                var n = r ? { right: -e } : { left: e };
                this.headParent.appendChild(this.arrowEl = t.createElement("div", { className: "fc-now-indicator fc-now-indicator-arrow", style: n })), this.bodyParent.appendChild(this.lineEl = t.createElement("div", { className: "fc-now-indicator fc-now-indicator-line", style: n }))
            }, e.prototype.unrender = function() { this.arrowEl && t.removeElement(this.arrowEl), this.lineEl && t.removeElement(this.lineEl) }, e
        }(),
        x = -1 !== (T = t.htmlToElement('<div style="position:-webkit-sticky;position:sticky"></div>').style.position).indexOf("sticky") ? T : null,
        M = /Edge/.test(navigator.userAgent),
        z = "-webkit-sticky" === x,
        k = "fc-sticky",
        P = function() {
            function e(e, r, n) {
                var i = this;
                this.usingRelative = null, this.updateSize = function() {
                    var e = Array.prototype.slice.call(i.scroller.canvas.el.querySelectorAll("." + k)),
                        r = i.queryElGeoms(e),
                        n = i.scroller.el.clientWidth;
                    i.usingRelative ? function(e, r, n) {
                        e.forEach(function(e, i) {
                            var o = r[i].naturalBound;
                            t.applyStyle(e, { position: "relative", left: n[i].left - o.left, top: n[i].top - o.top })
                        })
                    }(e, r, i.computeElDestinations(r, n)) : function(e, r, n) { e.forEach(function(e, i) { var o = 0; "center" === r[i].intendedTextAlign && (o = (n - r[i].elWidth) / 2, "center" === r[i].computedTextAlign && (e.setAttribute("data-sticky-center", ""), e.parentNode.style.textAlign = "left")), t.applyStyle(e, { position: x, left: o, right: 0, top: 0 }) }) }(e, r, n)
                }, this.scroller = e, this.usingRelative = !x || M && r || (M || z) && n, this.usingRelative && e.on("scrollEnd", this.updateSize)
            }
            return e.prototype.destroy = function() { this.scroller.off("scrollEnd", this.updateSize) }, e.prototype.queryElGeoms = function(e) {
                for (var r = this.scroller.canvas.el.getBoundingClientRect(), n = [], i = 0, o = e; i < o.length; i++) {
                    var l = o[i],
                        s = t.translateRect(l.parentNode.getBoundingClientRect(), -r.left, -r.top),
                        a = l.getBoundingClientRect(),
                        c = window.getComputedStyle(l),
                        d = window.getComputedStyle(l.parentNode).textAlign,
                        h = d,
                        u = null;
                    "sticky" !== c.position && (u = t.translateRect(a, -r.left - (parseFloat(c.left) || 0), -r.top - (parseFloat(c.top) || 0))), l.hasAttribute("data-sticky-center") && (h = "center"), n.push({ parentBound: s, naturalBound: u, elWidth: a.width, elHeight: a.height, computedTextAlign: d, intendedTextAlign: h })
                }
                return n
            }, e.prototype.computeElDestinations = function(e, t) {
                var r = this.scroller.getScrollFromLeft(),
                    n = this.scroller.getScrollTop(),
                    i = r + t;
                return e.map(function(e) {
                    var t, o, l = e.elWidth,
                        s = e.elHeight,
                        a = e.parentBound,
                        c = e.naturalBound;
                    switch (e.intendedTextAlign) {
                        case "left":
                            t = r;
                            break;
                        case "right":
                            t = i - l;
                            break;
                        case "center":
                            t = (r + i) / 2 - l / 2
                    }
                    return t = Math.min(t, a.right - l), t = Math.max(t, a.left), o = n, o = Math.min(o, a.bottom - s), { left: t, top: o = Math.max(o, c.top) }
                })
            }, e
        }();
    var I = function(e) {
            function r(t, r, n) {
                var i = e.call(this, t) || this,
                    o = i.layout = new h(r, n, "auto"),
                    l = o.headerScroller.enhancedScroll,
                    s = o.bodyScroller.enhancedScroll;
                return i.headStickyScroller = new P(l, i.isRtl, !1), i.bodyStickyScroller = new P(s, i.isRtl, !1), i.header = new u(t, l.canvas.contentEl), i.slats = new p(t, s.canvas.bgEl), i.nowIndicator = new R(l.canvas.el, s.canvas.el), i
            }
            return n(r, e), r.prototype.destroy = function() { this.layout.destroy(), this.header.destroy(), this.slats.destroy(), this.nowIndicator.unrender(), this.headStickyScroller.destroy(), this.bodyStickyScroller.destroy(), e.prototype.destroy.call(this) }, r.prototype.render = function(e) {
                var t = this.tDateProfile = y(e.dateProfile, this.view);
                this.header.receiveProps({ dateProfile: e.dateProfile, tDateProfile: t }), this.slats.receiveProps({ dateProfile: e.dateProfile, tDateProfile: t })
            }, r.prototype.getNowIndicatorUnit = function(e) { var r = this.tDateProfile = y(e, this.view); if (r.isTimeScale) return t.greatestDurationDenominator(r.slotDuration).unit }, r.prototype.renderNowIndicator = function(e) { t.rangeContainsMarker(this.tDateProfile.normalizedRange, e) && this.nowIndicator.render(this.dateToCoord(e), this.isRtl) }, r.prototype.unrenderNowIndicator = function() { this.nowIndicator.unrender() }, r.prototype.updateSize = function(e, t, r) { this.applySlotWidth(this.computeSlotWidth()), this.layout.setHeight(t, r), this.slats.updateSize() }, r.prototype.updateStickyScrollers = function() { this.headStickyScroller.updateSize(), this.bodyStickyScroller.updateSize() }, r.prototype.computeSlotWidth = function() { var e = this.opt("slotWidth") || ""; return "" === e && (e = this.computeDefaultSlotWidth(this.tDateProfile)), e }, r.prototype.computeDefaultSlotWidth = function(e) {
                var r = 0;
                this.header.innerEls.forEach(function(e, t) { r = Math.max(r, e.getBoundingClientRect().width) });
                var n = Math.ceil(r) + 1,
                    i = t.wholeDivideDurations(e.labelInterval, e.slotDuration),
                    o = Math.ceil(n / i),
                    l = window.getComputedStyle(this.header.slatColEls[0]).minWidth;
                return l && (l = parseInt(l, 10)) && (o = Math.max(o, l)), o
            }, r.prototype.applySlotWidth = function(e) {
                var t = this.layout,
                    r = this.tDateProfile,
                    n = "",
                    i = "",
                    o = "";
                if ("" !== e) {
                    n = (e = Math.round(e)) * r.slotDates.length, i = "", o = e;
                    var l = t.bodyScroller.enhancedScroll.getClientWidth();
                    l > n && (i = l, n = "", o = Math.floor(l / r.slotDates.length))
                }
                t.headerScroller.enhancedScroll.canvas.setWidth(n), t.headerScroller.enhancedScroll.canvas.setMinWidth(i), t.bodyScroller.enhancedScroll.canvas.setWidth(n), t.bodyScroller.enhancedScroll.canvas.setMinWidth(i), "" !== o && this.header.slatColEls.slice(0, -1).concat(this.slats.slatColEls.slice(0, -1)).forEach(function(e) { e.style.width = o + "px" })
            }, r.prototype.computeDateSnapCoverage = function(e) {
                var r = this.dateEnv,
                    n = this.tDateProfile,
                    i = r.countDurationsBetween(n.normalizedRange.start, e, n.snapDuration);
                if (i < 0) return 0;
                if (i >= n.snapDiffToIndex.length) return n.snapCnt;
                var o = Math.floor(i),
                    l = n.snapDiffToIndex[o];
                return t.isInt(l) ? l += i - o : l = Math.ceil(l), l
            }, r.prototype.dateToCoord = function(e) {
                var t = this.tDateProfile,
                    r = this.computeDateSnapCoverage(e) / t.snapsPerSlot,
                    n = Math.floor(r),
                    i = r - (n = Math.min(n, t.slotCnt - 1)),
                    o = this.slats,
                    l = o.innerCoordCache,
                    s = o.outerCoordCache;
                return this.isRtl ? s.rights[n] - l.getWidth(n) * i - s.originClientRect.width : s.lefts[n] + l.getWidth(n) * i
            }, r.prototype.rangeToCoords = function(e) { return this.isRtl ? { right: this.dateToCoord(e.start), left: this.dateToCoord(e.end) } : { left: this.dateToCoord(e.start), right: this.dateToCoord(e.end) } }, r.prototype.computeDateScroll = function(e) {
                var r = this.dateEnv,
                    n = this.props.dateProfile,
                    i = 0;
                return n && (i = this.dateToCoord(r.add(t.startOfDay(n.activeRange.start), e)), !this.isRtl && i && (i += 1)), { left: i }
            }, r.prototype.queryDateScroll = function() { return { left: this.layout.bodyScroller.enhancedScroll.getScrollLeft() } }, r.prototype.applyDateScroll = function(e) { this.layout.bodyScroller.enhancedScroll.setScrollLeft(e.left || 0), this.layout.headerScroller.enhancedScroll.setScrollLeft(e.left || 0) }, r
        }(t.Component),
        H = function(e) {
            function r(t, r, n) { var i = e.call(this, t) || this; return i.masterContainerEl = r, i.timeAxis = n, i }
            return n(r, e), r.prototype.renderSegHtml = function(e, r) {
                    var n = this.context.view,
                        i = e.eventRange,
                        o = i.def,
                        l = i.ui,
                        s = n.computeEventDraggable(o, l),
                        a = e.isStart && n.computeEventStartResizable(o, l),
                        c = e.isEnd && n.computeEventEndResizable(o, l),
                        d = this.getSegClasses(e, s, a || c, r);
                    d.unshift("fc-timeline-event", "fc-h-event");
                    var h = this.getTimeText(i);

                    return '<a class="' + d.join(" ") + '" style="' + t.cssToStr(this.getSkinCss(l)) + '"' + (o.url ? ' href="' + t.htmlEscape(o.url) + '"' : "") + ">" + (h ? '<span class="fc-time-wrap"><span class="fc-time">' + t.htmlEscape(h) + "</span></span>" : "") + '<span class="fc-title-wrap"><span class="fc-title fc-sticky">' + (o.title ? t.htmlEscape(o.title) : "&nbsp;") + "</span></span>" + (a ? '<div class="fc-resizer fc-start-resizer"></div>' : "") + (c ? '<div class="fc-resizer fc-end-resizer"></div>' : "") + "</a>"
                },






                r.prototype.computeDisplayEventTime = function() { return !this.timeAxis.tDateProfile.isTimeScale }, r.prototype.computeDisplayEventEnd = function() { return !1 }, r.prototype.computeEventTimeFormat = function() { return { hour: "numeric", minute: "2-digit", meridiem: "false" } }, r.prototype.attachSegs = function(e, r) {
                    if (!this.el && this.masterContainerEl && (this.el = t.createElement("div", { className: "fc-event-container" }), r && this.el.classList.add("fc-mirror-container"), this.masterContainerEl.appendChild(this.el)), this.el)
                        for (var n = 0, i = e; n < i.length; n++) {
                            var o = i[n];
                            this.el.appendChild(o.el)
                        }
                }, r.prototype.detachSegs = function(e) {
                    for (var r = 0, n = e; r < n.length; r++) {
                        var i = n[r];
                        t.removeElement(i.el)
                    }
                }, r.prototype.computeSegSizes = function(e) {
                    for (var r = this.timeAxis, n = 0, i = e; n < i.length; n++) {
                        var o = i[n],
                            l = r.rangeToCoords(o);
                        t.applyStyle(o.el, { left: o.left = l.left, right: -(o.right = l.right) })
                    }
                }, r.prototype.assignSegSizes = function(e) {
                    if (this.el) {
                        for (var r = 0, n = e; r < n.length; r++) {
                            (s = n[r]).height = t.computeHeightAndMargins(s.el)
                        }
                        this.buildSegLevels(e);
                        var i = L(e);
                        t.applyStyleProp(this.el, "height", i);
                        for (var o = 0, l = e; o < l.length; o++) {
                            var s = l[o];
                            t.applyStyleProp(s.el, "top", s.top)
                        }
                    }
                }, r.prototype.buildSegLevels = function(e) {
                    for (var t = [], r = 0, n = e = this.sortEventSegs(e); r < n.length; r++) {
                        var i = n[r];
                        i.above = [];
                        for (var o = 0; o < t.length;) {
                            for (var l = !1, s = 0, a = t[o]; s < a.length; s++) {
                                var c = a[s];
                                A(i, c) && (i.above.push(c), l = !0)
                            }
                            if (!l) break;
                            o += 1
                        }
                        for ((t[o] || (t[o] = [])).push(i), o += 1; o < t.length;) {
                            for (var d = 0, h = t[o]; d < h.length; d++) {
                                var u = h[d];
                                A(i, u) && u.above.push(i)
                            }
                            o += 1
                        }
                    }
                    return t
                }, r
        }(t.FgEventRenderer);

    function L(e) {
        for (var t = 0, r = 0, n = e; r < n.length; r++) {
            var i = n[r];
            t = Math.max(t, W(i))
        }
        return t
    }

    function W(e) { return null == e.top && (e.top = L(e.above)), e.top + e.height }

    function A(e, t) { return e.left < t.right && e.right > t.left }
    var B = function(e) {
            function r(t, r, n) { var i = e.call(this, t) || this; return i.masterContainerEl = r, i.timeAxis = n, i }
            return n(r, e), r.prototype.attachSegs = function(e, r) {
                if (r.length) {
                    var n = void 0;
                    n = "businessHours" === e ? "bgevent" : e.toLowerCase();
                    var i = t.createElement("div", { className: "fc-" + n + "-container" });
                    this.masterContainerEl.appendChild(i);
                    for (var o = 0, l = r; o < l.length; o++) {
                        var s = l[o];
                        i.appendChild(s.el)
                    }
                    return [i]
                }
            }, r.prototype.computeSegSizes = function(e) {
                for (var t = this.timeAxis, r = 0, n = e; r < n.length; r++) {
                    var i = n[r],
                        o = t.rangeToCoords(i);
                    i.left = o.left, i.right = o.right
                }
            }, r.prototype.assignSegSizes = function(e) {
                for (var r = 0, n = e; r < n.length; r++) {
                    var i = n[r];
                    t.applyStyle(i.el, { left: i.left, right: -i.right })
                }
            }, r
        }(t.FillRenderer),
        O = function(e) {
            function r(r, n, i, o) {
                var l = e.call(this, r, i) || this;
                l.slicer = new N, l.renderEventDrag = t.memoizeRendering(l._renderEventDrag, l._unrenderEventDrag), l.renderEventResize = t.memoizeRendering(l._renderEventResize, l._unrenderEventResize);
                var s = l.fillRenderer = new B(r, i, o),
                    a = l.eventRenderer = new H(r, n, o);
                return l.mirrorRenderer = new H(r, n, o), l.renderBusinessHours = t.memoizeRendering(s.renderSegs.bind(s, "businessHours"), s.unrender.bind(s, "businessHours")), l.renderDateSelection = t.memoizeRendering(s.renderSegs.bind(s, "highlight"), s.unrender.bind(s, "highlight")), l.renderBgEvents = t.memoizeRendering(s.renderSegs.bind(s, "bgEvent"), s.unrender.bind(s, "bgEvent")), l.renderFgEvents = t.memoizeRendering(a.renderSegs.bind(a), a.unrender.bind(a)), l.renderEventSelection = t.memoizeRendering(a.selectByInstanceId.bind(a), a.unselectByInstanceId.bind(a), [l.renderFgEvents]), l.timeAxis = o, l
            }
            return n(r, e), r.prototype.render = function(e) {
                var t = this.slicer.sliceProps(e, e.dateProfile, this.timeAxis.tDateProfile.isTimeScale ? null : e.nextDayThreshold, this, this.timeAxis);
                this.renderBusinessHours(t.businessHourSegs), this.renderDateSelection(t.dateSelectionSegs), this.renderBgEvents(t.bgEventSegs), this.renderFgEvents(t.fgEventSegs), this.renderEventSelection(t.eventSelection), this.renderEventDrag(t.eventDrag), this.renderEventResize(t.eventResize)
            }, r.prototype.destroy = function() { e.prototype.destroy.call(this), this.renderBusinessHours.unrender(), this.renderDateSelection.unrender(), this.renderBgEvents.unrender(), this.renderFgEvents.unrender(), this.renderEventSelection.unrender(), this.renderEventDrag.unrender(), this.renderEventResize.unrender() }, r.prototype._renderEventDrag = function(e) { e && (this.eventRenderer.hideByHash(e.affectedInstances), this.mirrorRenderer.renderSegs(e.segs, { isDragging: !0, sourceSeg: e.sourceSeg })) }, r.prototype._unrenderEventDrag = function(e) { e && (this.eventRenderer.showByHash(e.affectedInstances), this.mirrorRenderer.unrender(e.segs, { isDragging: !0, sourceSeg: e.sourceSeg })) }, r.prototype._renderEventResize = function(e) {
                if (e) {
                    var t = e.segs.map(function(e) { return o({}, e) });
                    this.eventRenderer.hideByHash(e.affectedInstances), this.fillRenderer.renderSegs("highlight", t), this.mirrorRenderer.renderSegs(e.segs, { isDragging: !0, sourceSeg: e.sourceSeg })
                }
            }, r.prototype._unrenderEventResize = function(e) { e && (this.eventRenderer.showByHash(e.affectedInstances), this.fillRenderer.unrender("highlight"), this.mirrorRenderer.unrender(e.segs, { isDragging: !0, sourceSeg: e.sourceSeg })) }, r.prototype.updateSize = function(e) {
                var t = this.fillRenderer,
                    r = this.eventRenderer,
                    n = this.mirrorRenderer;
                t.computeSizes(e), r.computeSizes(e), n.computeSizes(e), t.assignSizes(e), r.assignSizes(e), n.assignSizes(e)
            }, r
        }(t.DateComponent),
        N = function(e) {
            function r() { return null !== e && e.apply(this, arguments) || this }
            return n(r, e), r.prototype.sliceRange = function(e, r) {
                var n = r.tDateProfile,
                    i = r.props.dateProfile,
                    o = function(e, r, n) {
                        if (!r.isTimeScale && (e = t.computeVisibleDayRange(e), r.largeUnit)) {
                            var i = e;
                            ((e = { start: n.startOf(e.start, r.largeUnit), end: n.startOf(e.end, r.largeUnit) }).end.valueOf() !== i.end.valueOf() || e.end <= e.start) && (e = { start: e.start, end: n.add(e.end, r.slotDuration) })
                        }
                        return e
                    }(e, n, r.dateEnv),
                    l = [];
                if (r.computeDateSnapCoverage(o.start) < r.computeDateSnapCoverage(o.end)) {
                    var s = t.intersectRanges(o, n.normalizedRange);
                    s && l.push({ start: s.start, end: s.end, isStart: s.start.valueOf() === o.start.valueOf() && b(s.start, n, i, r.view), isEnd: s.end.valueOf() === o.end.valueOf() && b(t.addMs(s.end, -1), n, i, r.view) })
                }
                return l
            }, r
        }(t.Slicer),
        _ = function(e) {
            function t(t, r, n, i) { var o = e.call(this, t, r, n, i) || this; return o.el.classList.add("fc-timeline"), !1 === o.opt("eventOverlap") && o.el.classList.add("fc-no-overlap"), o.el.innerHTML = o.renderSkeletonHtml(), o.timeAxis = new I(o.context, o.el.querySelector("thead .fc-time-area"), o.el.querySelector("tbody .fc-time-area")), o.lane = new O(o.context, o.timeAxis.layout.bodyScroller.enhancedScroll.canvas.contentEl, o.timeAxis.layout.bodyScroller.enhancedScroll.canvas.bgEl, o.timeAxis), t.calendar.registerInteractiveComponent(o, { el: o.timeAxis.slats.el }), o }
            return n(t, e), t.prototype.destroy = function() { this.timeAxis.destroy(), this.lane.destroy(), e.prototype.destroy.call(this), this.calendar.unregisterInteractiveComponent(this) }, t.prototype.renderSkeletonHtml = function() { var e = this.theme; return '<table class="' + e.getClass("tableGrid") + '"> <thead class="fc-head"> <tr> <td class="fc-time-area ' + e.getClass("widgetHeader") + '"></td> </tr> </thead> <tbody class="fc-body"> <tr> <td class="fc-time-area ' + e.getClass("widgetContent") + '"></td> </tr> </tbody> </table>' }, t.prototype.render = function(t) { e.prototype.render.call(this, t), this.timeAxis.receiveProps({ dateProfile: t.dateProfile }), this.lane.receiveProps(o({}, t, { nextDayThreshold: this.nextDayThreshold })) }, t.prototype.updateSize = function(e, t, r) { this.timeAxis.updateSize(e, t, r), this.lane.updateSize(e) }, t.prototype.getNowIndicatorUnit = function(e) { return this.timeAxis.getNowIndicatorUnit(e) }, t.prototype.renderNowIndicator = function(e) { this.timeAxis.renderNowIndicator(e) }, t.prototype.unrenderNowIndicator = function() { this.timeAxis.unrenderNowIndicator() }, t.prototype.computeDateScroll = function(e) { return this.timeAxis.computeDateScroll(e) }, t.prototype.applyScroll = function(t, r) {
                e.prototype.applyScroll.call(this, t, r);
                var n = this.calendar;
                (r || n.isViewUpdated || n.isDatesUpdated || n.isEventsUpdated) && this.timeAxis.updateStickyScrollers()
            }, t.prototype.applyDateScroll = function(e) { this.timeAxis.applyDateScroll(e) }, t.prototype.queryScroll = function() { var e = this.timeAxis.layout.bodyScroller.enhancedScroll; return { top: e.getScrollTop(), left: e.getScrollLeft() } }, t.prototype.buildPositionCaches = function() { this.timeAxis.slats.updateSize() }, t.prototype.queryHit = function(e, t, r, n) { var i = this.timeAxis.slats.positionToHit(e); if (i) return { component: this, dateSpan: i.dateSpan, rect: { left: i.left, right: i.right, top: 0, bottom: n }, dayEl: i.dayEl, layer: 0 } }, t
        }(t.View),
        F = t.createPlugin({ defaultView: "timelineDay", views: { timeline: { class: _, eventResizableFromStart: !0 }, timelineDay: { type: "timeline", duration: { days: 1 } }, timelineWeek: { type: "timeline", duration: { weeks: 1 } }, timelineMonth: { type: "timeline", duration: { months: 1 } }, timelineYear: { type: "timeline", duration: { years: 1 } } } });
    e.HeaderBodyLayout = h, e.ScrollJoiner = d, e.StickyScroller = P, e.TimeAxis = I, e.TimelineLane = O, e.TimelineView = _, e.default = F, Object.defineProperty(e, "__esModule", { value: !0 })
});


/* var timeEvent = document.getElementsByClassName('.fc-title-wrap');
console.log(timeEvent) */
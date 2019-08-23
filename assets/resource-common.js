/*!
FullCalendar Resources Common Plugin v4.3.1
Docs & License: https://fullcalendar.io/scheduler
(c) 2019 Adam Shaw
*/
! function(e, r) { "object" == typeof exports && "undefined" != typeof module ? r(exports, require("@fullcalendar/core")) : "function" == typeof define && define.amd ? define(["exports", "@fullcalendar/core"], r) : r((e = e || self).FullCalendarResourceCommon = {}, e.FullCalendar) }(this, function(e, r) {
    "use strict";
    var t = function(e, r) {
        return (t = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(e, r) { e.__proto__ = r } || function(e, r) { for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]) })(e, r)
    };

    function n(e, r) {
        function n() { this.constructor = e }
        t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
    }
    var o = function() {
        return (o = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            return e
        }).apply(this, arguments)
    };

    function s(e, r) {
        var t = e.resourceEditable;
        if (null == t) {
            var n = e.sourceId && r.state.eventSources[e.sourceId];
            n && (t = n.extendedProps.resourceEditable), null == t && null == (t = r.opt("eventResourceEditable")) && (t = r.opt("editable"))
        }
        return t
    }
    var u = function() {
        function e() { this.filterResources = r.memoize(i) }
        return e.prototype.transform = function(e, r, t, n) { if (r.class.needsResourceData) return { resourceStore: this.filterResources(t.resourceStore, n.opt("filterResourcesWithEvents"), t.eventStore, t.dateProfile.activeRange), resourceEntityExpansions: t.resourceEntityExpansions } }, e
    }();

    function i(e, t, n, s) {
        if (t) {
            var u = function(e, r) {
                var t = {};
                for (var n in e)
                    for (var o = e[n], s = 0, u = r[o.defId].resourceIds; s < u.length; s++) {
                        var i = u[s];
                        t[i] = !0
                    }
                return t
            }(function(e, t) { return r.filterHash(e, function(e) { return r.rangesIntersect(e.range, t) }) }(n.instances, s), n.defs);
            return o(u, function(e, r) {
                var t = {};
                for (var n in e)
                    for (var o = void 0;
                        (o = r[n]) && (n = o.parentId);) t[n] = !0;
                return t
            }(u, e)), r.filterHash(e, function(e, r) { return u[r] })
        }
        return e
    }
    var a = function() {
        function e() { this.buildResourceEventUis = r.memoizeOutput(c, r.isPropsEqual), this.injectResourceEventUis = r.memoize(l) }
        return e.prototype.transform = function(e, r, t) { if (!r.class.needsResourceData) return { eventUiBases: this.injectResourceEventUis(e.eventUiBases, e.eventStore.defs, this.buildResourceEventUis(t.resourceStore)) } }, e
    }();

    function c(e) { return r.mapHash(e, function(e) { return e.ui }) }

    function l(e, t, n) {
        return r.mapHash(e, function(e, o) {
            return o ? function(e, t, n) {
                for (var o = [], s = 0, u = t.resourceIds; s < u.length; s++) {
                    var i = u[s];
                    n[i] && o.unshift(n[i])
                }
                return o.unshift(e), r.combineEventUis(o)
            }(e, t[o], n) : e
        })
    }
    var d = { id: String },
        f = [],
        p = 0;

    function h(e) { f.push(e) }

    function v(e, t, n) { var o = r.refineProps(e, d); return o.sourceId = String(p++), o.sourceDefId = n, o.meta = t, o.publicId = o.id, o.isFetching = !1, o.latestFetchId = "", o.fetchRange = null, delete o.id, o }

    function g(e, t, n, s) {
        switch (t.type) {
            case "INIT":
                return y(s.opt("resources"), s);
            case "RESET_RESOURCE_SOURCE":
                return y(t.resourceSourceInput, s, !0);
            case "PREV":
            case "NEXT":
            case "SET_DATE":
            case "SET_VIEW_TYPE":
                return function(e, t, n) { return !n.opt("refetchResourcesOnNavigate") || function(e) { return Boolean(f[e.sourceDefId].ignoreRange) }(e) || e.fetchRange && r.rangesEqual(e.fetchRange, t) ? e : E(e, t, n) }(e, n.activeRange, s);
            case "RECEIVE_RESOURCES":
            case "RECEIVE_RESOURCE_ERROR":
                return function(e, r, t) { if (r === e.latestFetchId) return o({}, e, { isFetching: !1, fetchRange: t }); return e }(e, t.fetchId, t.fetchRange);
            case "REFETCH_RESOURCES":
                return E(e, n.activeRange, s);
            default:
                return e
        }
    }
    var R = 0;

    function y(e, r, t) { if (e) { var n = function(e) { for (var r = f.length - 1; r >= 0; r--) { var t = f[r].parseMeta(e); if (t) { var n = v("object" == typeof e && e ? e : {}, t, r); return n._raw = e, n } } return null }(e); return !t && r.opt("refetchResourcesOnNavigate") || (n = E(n, null, r)), n } return null }

    function E(e, r, t) {
        var n, s = (n = e.sourceDefId, f[n]),
            u = String(R++);
        return s.fetch({ resourceSource: e, calendar: t, range: r }, function(e) { t.afterSizingTriggers._resourcesRendered = [null], t.dispatch({ type: "RECEIVE_RESOURCES", fetchId: u, fetchRange: r, rawResources: e.rawResources }) }, function(e) { t.dispatch({ type: "RECEIVE_RESOURCE_ERROR", fetchId: u, fetchRange: r, error: e }) }), o({}, e, { isFetching: !0, latestFetchId: u })
    }
    var m = { id: String, title: String, parentId: String, businessHours: null, children: null, extendedProps: null },
        S = "_fc:",
        I = 0;

    function b(e, t, n, s) {
        void 0 === t && (t = "");
        var u = {},
            i = r.refineProps(e, m, {}, u),
            a = {},
            c = r.processScopedUiProps("event", u, s, a);
        if (i.id || (i.id = S + I++), i.parentId || (i.parentId = t), i.businessHours = i.businessHours ? r.parseBusinessHours(i.businessHours, s) : null, i.ui = c, i.extendedProps = o({}, a, i.extendedProps), Object.freeze(c.classNames), Object.freeze(i.extendedProps), n[i.id]);
        else if (n[i.id] = i, i.children) {
            for (var l = 0, d = i.children; l < d.length; l++) { b(d[l], i.id, n, s) }
            delete i.children
        }
        return i
    }

    function C(e, t, n, s) {
        switch (t.type) {
            case "INIT":
                return {};
            case "RECEIVE_RESOURCES":
                return function(e, r, t, n, o) {
                    if (n.latestFetchId === t) {
                        for (var s = {}, u = 0, i = r; u < i.length; u++) {
                            var a = i[u];
                            b(a, "", s, o)
                        }
                        return s
                    }
                    return e
                }(e, t.rawResources, t.fetchId, n, s);
            case "ADD_RESOURCE":
                return u = e, i = t.resourceHash, o({}, u, i);
            case "REMOVE_RESOURCE":
                return function(e, r) { var t = o({}, e); for (var n in delete t[r], t) t[n].parentId === r && (t[n] = o({}, t[n], { parentId: "" })); return t }(e, t.resourceId);
            case "SET_RESOURCE_PROP":
                return function(e, r, t, n) { var s, u, i = e[r]; return i ? o({}, e, ((s = {})[r] = o({}, i, ((u = {})[t] = n, u)), s)) : e }(e, t.resourceId, t.propName, t.propValue);
            case "RESET_RESOURCES":
                return r.mapHash(e, function(e) { return o({}, e) });
            default:
                return e
        }
        var u, i
    }
    var _ = { resourceId: String, resourceIds: function(e) { return (e || []).map(function(e) { return String(e) }) }, resourceEditable: Boolean };
    var w = function() {
        function e(e, r) { this._calendar = e, this._resource = r }
        return e.prototype.setProp = function(e, r) { this._calendar.dispatch({ type: "SET_RESOURCE_PROP", resourceId: this._resource.id, propName: e, propValue: r }) }, e.prototype.remove = function() { this._calendar.dispatch({ type: "REMOVE_RESOURCE", resourceId: this._resource.id }) }, e.prototype.getParent = function() {
            var r = this._calendar,
                t = this._resource.parentId;
            return t ? new e(r, r.state.resourceSource[t]) : null
        }, e.prototype.getChildren = function() {
            var r = this._resource.id,
                t = this._calendar,
                n = t.state.resourceStore,
                o = [];
            for (var s in n) n[s].parentId === r && o.push(new e(t, n[s]));
            return o
        }, e.prototype.getEvents = function() {
            var e = this._resource.id,
                t = this._calendar,
                n = t.state.eventStore,
                o = n.defs,
                s = n.instances,
                u = [];
            for (var i in s) {
                var a = s[i],
                    c = o[a.defId]; - 1 !== c.resourceIds.indexOf(e) && u.push(new r.EventApi(t, c, a))
            }
            return u
        }, Object.defineProperty(e.prototype, "id", { get: function() { return this._resource.id }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "title", { get: function() { return this._resource.title }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "eventConstraint", { get: function() { return this._resource.ui.constraints[0] || null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "eventOverlap", { get: function() { return this._resource.ui.overlap }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "eventAllow", { get: function() { return this._resource.ui.allows[0] || null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "eventBackgroundColor", { get: function() { return this._resource.ui.backgroundColor }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "eventBorderColor", { get: function() { return this._resource.ui.borderColor }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "eventTextColor", { get: function() { return this._resource.ui.textColor }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "eventClassNames", { get: function() { return this._resource.ui.classNames }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "extendedProps", { get: function() { return this._resource.extendedProps }, enumerable: !0, configurable: !0 }), e
    }();
    r.Calendar.prototype.addResource = function(e, r) { var t, n, o; return void 0 === r && (r = !0), e instanceof w ? ((t = {})[(o = e._resource).id] = o, n = t) : o = b(e, "", n = {}, this), r && this.component.view.addScroll({ forcedRowId: o.id }), this.dispatch({ type: "ADD_RESOURCE", resourceHash: n }), new w(this, o) }, r.Calendar.prototype.getResourceById = function(e) { if (e = String(e), this.state.resourceStore) { var r = this.state.resourceStore[e]; if (r) return new w(this, r) } return null }, r.Calendar.prototype.getResources = function() {
        var e = this.state.resourceStore,
            r = [];
        if (e)
            for (var t in e) r.push(new w(this, e[t]));
        return r
    }, r.Calendar.prototype.getTopLevelResources = function() {
        var e = this.state.resourceStore,
            r = [];
        if (e)
            for (var t in e) e[t].parentId || r.push(new w(this, e[t]));
        return r
    }, r.Calendar.prototype.rerenderResources = function() { this.dispatch({ type: "RESET_RESOURCES" }) }, r.Calendar.prototype.refetchResources = function() { this.dispatch({ type: "REFETCH_RESOURCES" }) };
    var P = function(e) {
        function r() { return null !== e && e.apply(this, arguments) || this }
        return n(r, e), r.prototype.getKeyInfo = function(e) { return o({ "": {} }, e.resourceStore) }, r.prototype.getKeysForDateSpan = function(e) { return [e.resourceId || ""] }, r.prototype.getKeysForEventDef = function(e) { var r = e.resourceIds; return r.length ? r : [""] }, r
    }(r.Splitter);

    function O(e, r) { return o({}, r, { constraints: x(e, r.constraints) }) }

    function x(e, r) {
        return r.map(function(r) {
            var t = r.defs;
            if (t)
                for (var n in t) { var o = t[n].resourceIds; if (o.length && -1 === o.indexOf(e)) return !1 }
            return r
        })
    }
    r.EventApi.prototype.getResources = function() { var e = this._calendar; return this._def.resourceIds.map(function(r) { return e.getResourceById(r) }) }, r.EventApi.prototype.setResources = function(e) {
        for (var r = [], t = 0, n = e; t < n.length; t++) {
            var o = n[t],
                s = null;
            "string" == typeof o ? s = o : "number" == typeof o ? s = String(o) : o instanceof w ? s = o.id : console.warn("unknown resource type: " + o), s && r.push(s)
        }
        this.mutate({ standardProps: { resourceIds: r } })
    };
    var T = "2019-08-10",
        D = 372,
        j = "http://fullcalendar.io/scheduler/license/",
        F = ["GPL-My-Project-Is-Open-Source", "CC-Attribution-NonCommercial-NoDerivatives"],
        U = { position: "absolute", "z-index": 99999, bottom: "1px", left: "1px", background: "#eee", "border-color": "#ddd", "border-style": "solid", "border-width": "1px 1px 0 0", padding: "2px 4px", "font-size": "12px", "border-top-right-radius": "3px" };
    var A = {
        resources: function(e, r, t) {
            var n = r.state.resourceSource._raw;
            t(n, e) || r.dispatch({ type: "RESET_RESOURCE_SOURCE", resourceSourceInput: e })
        }
    };

    function H(e, r) { return "function" == typeof e ? function(t) { return e(new w(r, t)) } : function(e) { return e.title || (0 === (r = e.id).indexOf(S) ? "" : r); var r } }
    h({ ignoreRange: !0, parseMeta: function(e) { return Array.isArray(e) ? e : Array.isArray(e.resources) ? e.resources : null }, fetch: function(e, r) { r({ rawResources: e.resourceSource.meta }) } }), h({
        parseMeta: function(e) { return "function" == typeof e ? e : "function" == typeof e.resources ? e.resources : null },
        fetch: function(e, t, n) {
            var o = e.calendar.dateEnv,
                s = e.resourceSource.meta,
                u = {};
            e.range && (u = { start: o.toDate(e.range.start), end: o.toDate(e.range.end), startStr: o.formatIso(e.range.start), endStr: o.formatIso(e.range.end), timeZone: o.timeZone }), r.unpromisify(s.bind(null, u), function(e) { t({ rawResources: e }) }, n)
        }
    }), h({
        parseMeta: function(e) {
            if ("string" == typeof e) e = { url: e };
            else if (!e || "object" != typeof e || !e.url) return null;
            return { url: e.url, method: (e.method || "GET").toUpperCase(), extraParams: e.extraParams }
        },
        fetch: function(e, t, n) {
            var s = e.resourceSource.meta,
                u = function(e, r, t) {
                    var n, s, u, i, a = t.dateEnv,
                        c = {};
                    r && (n = t.opt("startParam"), s = t.opt("endParam"), u = t.opt("timeZoneParam"), c[n] = a.formatIso(r.start), c[s] = a.formatIso(r.end), "local" !== a.timeZone && (c[u] = a.timeZone));
                    i = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                    return o(c, i), c
                }(s, e.range, e.calendar);
            r.requestJson(s.method, s.url, u, function(e, r) { t({ rawResources: e, xhr: r }) }, function(e, r) { n({ message: e, xhr: r }) })
        }
    });
    var B = function(e) {
            function t(t, n) { var o = e.call(this, t) || this; return o.datesAboveResources = o.opt("datesAboveResources"), o.resourceTextFunc = H(o.opt("resourceText"), o.calendar), n.innerHTML = "", n.appendChild(o.el = r.htmlToElement('<div class="fc-row ' + o.theme.getClass("headerRow") + '"><table class="' + o.theme.getClass("tableGrid") + '"><thead></thead></table></div>')), o.thead = o.el.querySelector("thead"), o }
            return n(t, e), t.prototype.destroy = function() { r.removeElement(this.el) }, t.prototype.render = function(e) {
                var t;
                this.dateFormat = r.createFormatter(this.opt("columnHeaderFormat") || r.computeFallbackHeaderFormat(e.datesRepDistinctDays, e.dates.length)), t = 1 === e.dates.length ? this.renderResourceRow(e.resources) : this.datesAboveResources ? this.renderDayAndResourceRows(e.dates, e.resources) : this.renderResourceAndDayRows(e.resources, e.dates), this.thead.innerHTML = t, this.processResourceEls(e.resources)
            }, t.prototype.renderResourceRow = function(e) {
                var r = this,
                    t = e.map(function(e) { return r.renderResourceCell(e, 1) });
                return this.buildTr(t)
            }, t.prototype.renderDayAndResourceRows = function(e, r) {
                for (var t = [], n = [], o = 0, s = e; o < s.length; o++) {
                    var u = s[o];
                    t.push(this.renderDateCell(u, r.length));
                    for (var i = 0, a = r; i < a.length; i++) {
                        var c = a[i];
                        n.push(this.renderResourceCell(c, 1, u))
                    }
                }
                return this.buildTr(t) + this.buildTr(n)
            }, t.prototype.renderResourceAndDayRows = function(e, r) {
                for (var t = [], n = [], o = 0, s = e; o < s.length; o++) {
                    var u = s[o];
                    t.push(this.renderResourceCell(u, r.length));
                    for (var i = 0, a = r; i < a.length; i++) {
                        var c = a[i];
                        n.push(this.renderDateCell(c, 1, u))
                    }
                }
                return this.buildTr(t) + this.buildTr(n)
            }, t.prototype.renderResourceCell = function(e, t, n) { var o = this.dateEnv; return '<th class="fc-resource-cell" data-resource-id="' + e.id + '"' + (n ? ' data-date="' + o.formatIso(n, { omitTime: !0 }) + '"' : "") + (t > 1 ? ' colspan="' + t + '"' : "") + ">" + r.htmlEscape(this.resourceTextFunc(e)) + "</th>" }, t.prototype.renderDateCell = function(e, t, n) { var o = this.props; return r.renderDateCell(e, o.dateProfile, o.datesRepDistinctDays, o.dates.length * o.resources.length, this.dateFormat, this.context, t, n ? 'data-resource-id="' + n.id + '"' : "") }, t.prototype.buildTr = function(e) { return e.length || (e = ["<td>&nbsp;</td>"]), this.props.renderIntroHtml && (e = [this.props.renderIntroHtml()].concat(e)), this.isRtl && e.reverse(), "<tr>" + e.join("") + "</tr>" }, t.prototype.processResourceEls = function(e) {
                var t = this,
                    n = this.view;
                r.findElements(this.thead, ".fc-resource-cell").forEach(function(r, o) {
                    o %= e.length, t.isRtl && (o = e.length - 1 - o);
                    var s = e[o];
                    n.publiclyTrigger("resourceRender", [{ resource: new w(t.calendar, s), el: r, view: n }])
                })
            }, t
        }(r.Component),
        z = function() {
            function e(e, r) { this.dayTable = e, this.resources = r, this.resourceIndex = new V(r), this.rowCnt = e.rowCnt, this.colCnt = e.colCnt * r.length, this.cells = this.buildCells() }
            return e.prototype.buildCells = function() {
                for (var e = this.rowCnt, r = this.dayTable, t = this.resources, n = [], o = 0; o < e; o++) {
                    for (var s = [], u = 0; u < r.colCnt; u++)
                        for (var i = 0; i < t.length; i++) {
                            var a = t[i],
                                c = 'data-resource-id="' + a.id + '"';
                            s[this.computeCol(u, i)] = { date: r.cells[o][u].date, resource: a, htmlAttrs: c }
                        }
                    n.push(s)
                }
                return n
            }, e
        }(),
        M = function(e) {
            function r() { return null !== e && e.apply(this, arguments) || this }
            return n(r, e), r.prototype.computeCol = function(e, r) { return r * this.dayTable.colCnt + e }, r.prototype.computeColRanges = function(e, r, t) { return [{ firstCol: this.computeCol(e, t), lastCol: this.computeCol(r, t), isStart: !0, isEnd: !0 }] }, r
        }(z),
        N = function(e) {
            function r() { return null !== e && e.apply(this, arguments) || this }
            return n(r, e), r.prototype.computeCol = function(e, r) { return e * this.resources.length + r }, r.prototype.computeColRanges = function(e, r, t) {
                for (var n = [], o = e; o <= r; o++) {
                    var s = this.computeCol(o, t);
                    n.push({ firstCol: s, lastCol: s, isStart: o === e, isEnd: o === r })
                }
                return n
            }, r
        }(z),
        V = function(e) {
            for (var r = {}, t = [], n = 0; n < e.length; n++) {
                var o = e[n].id;
                t.push(o), r[o] = n
            }
            this.ids = t, this.indicesById = r, this.length = e.length
        },
        k = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return n(t, e), t.prototype.getKeyInfo = function(e) {
                var t = e.resourceDayTable,
                    n = r.mapHash(t.resourceIndex.indicesById, function(e) { return t.resources[e] });
                return n[""] = {}, n
            }, t.prototype.getKeysForDateSpan = function(e) { return [e.resourceId || ""] }, t.prototype.getKeysForEventDef = function(e) { var r = e.resourceIds; return r.length ? r : [""] }, t
        }(r.Splitter),
        K = [],
        q = function() {
            function e() { this.joinDateSelection = r.memoize(this.joinSegs), this.joinBusinessHours = r.memoize(this.joinSegs), this.joinFgEvents = r.memoize(this.joinSegs), this.joinBgEvents = r.memoize(this.joinSegs), this.joinEventDrags = r.memoize(this.joinInteractions), this.joinEventResizes = r.memoize(this.joinInteractions) }
            return e.prototype.joinProps = function(e, r) {
                for (var t = [], n = [], o = [], s = [], u = [], i = [], a = "", c = 0, l = r.resourceIndex.ids.concat([""]); c < l.length; c++) {
                    var d = l[c],
                        f = e[d];
                    t.push(f.dateSelectionSegs), n.push(d ? f.businessHourSegs : K), o.push(d ? f.fgEventSegs : K), s.push(f.bgEventSegs), u.push(f.eventDrag), i.push(f.eventResize), a = a || f.eventSelection
                }
                return { dateSelectionSegs: this.joinDateSelection.apply(this, [r].concat(t)), businessHourSegs: this.joinBusinessHours.apply(this, [r].concat(n)), fgEventSegs: this.joinFgEvents.apply(this, [r].concat(o)), bgEventSegs: this.joinBgEvents.apply(this, [r].concat(s)), eventDrag: this.joinEventDrags.apply(this, [r].concat(u)), eventResize: this.joinEventResizes.apply(this, [r].concat(i)), eventSelection: a }
            }, e.prototype.joinSegs = function(e) {
                for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
                for (var n = e.resources.length, o = [], s = 0; s < n; s++) {
                    for (var u = 0, i = r[s]; u < i.length; u++) {
                        var a = i[u];
                        o.push.apply(o, this.transformSeg(a, e, s))
                    }
                    for (var c = 0, l = r[n]; c < l.length; c++) {
                        a = l[c];
                        o.push.apply(o, this.transformSeg(a, e, s))
                    }
                }
                return o
            }, e.prototype.expandSegs = function(e, r) {
                for (var t = e.resources.length, n = [], o = 0; o < t; o++)
                    for (var s = 0, u = r; s < u.length; s++) {
                        var i = u[s];
                        n.push.apply(n, this.transformSeg(i, e, o))
                    }
                return n
            }, e.prototype.joinInteractions = function(e) {
                for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
                for (var n = e.resources.length, s = {}, u = [], i = !1, a = null, c = 0; c < n; c++) {
                    var l = r[c];
                    if (l) {
                        for (var d = 0, f = l.segs; d < f.length; d++) {
                            var p = f[d];
                            u.push.apply(u, this.transformSeg(p, e, c))
                        }
                        o(s, l.affectedInstances), i = i || l.isEvent, a = a || l.sourceSeg
                    }
                    if (r[n])
                        for (var h = 0, v = r[n].segs; h < v.length; h++) {
                            p = v[h];
                            u.push.apply(u, this.transformSeg(p, e, c))
                        }
                }
                return { affectedInstances: s, segs: u, isEvent: i, sourceSeg: a }
            }, e
        }();

    function L(e, r, t, n, o, s) {
        var u = [];
        return function e(r, t, n, o, s, u, i) {
            for (var a = 0; a < r.length; a++) {
                var c = r[a],
                    l = c.group;
                if (l)
                    if (n) {
                        var d = t.length,
                            f = o.length;
                        if (e(c.children, t, n, o.concat(0), s, u, i), d < t.length) {
                            var p = t[d],
                                h = p.rowSpans = p.rowSpans.slice();
                            h[f] = t.length - d
                        }
                    } else {
                        var v = l.spec.field + ":" + l.value,
                            g = null != u[v] ? u[v] : i;
                        t.push({ id: v, group: l, isExpanded: g }), g && e(c.children, t, n, o, s + 1, u, i)
                    }
                else if (c.resource) {
                    var v = c.resource.id,
                        g = null != u[v] ? u[v] : i;
                    t.push({ id: v, rowSpans: o, depth: s, isExpanded: g, hasChildren: Boolean(c.children.length), resource: c.resource, resourceFields: c.resourceFields }), g && e(c.children, t, n, o, s + 1, u, i)
                }
            }
        }(function(e, r, t, n) {
            var o = function(e, r) {
                    var t = {};
                    for (var n in e) {
                        var o = e[n];
                        t[n] = { resource: o, resourceFields: J(o), children: [] }
                    }
                    for (var n in e) {
                        var o = e[n];
                        if (o.parentId) {
                            var s = t[o.parentId];
                            s && G(t[n], s.children, r)
                        }
                    }
                    return t
                }(e, n),
                s = [];
            for (var u in o) {
                var i = o[u];
                i.resource.parentId || Z(i, s, t, 0, r, n)
            }
            return s
        }(e, n ? -1 : 1, r, t), u, n, [], 0, o, s), u
    }

    function Z(e, t, n, o, s, u) {
        n.length && (-1 === s || o <= s) ? Z(e, function(e, t, n) {
            var o, s, u = e.resourceFields[n.field];
            if (n.order)
                for (s = 0; s < t.length; s++) { var i = t[s]; if (i.group) { var a = r.flexibleCompare(u, i.group.value) * n.order; if (0 === a) { o = i; break } if (a < 0) break } } else
                    for (s = 0; s < t.length; s++) { var i = t[s]; if (i.group && u === i.group.value) { o = i; break } }
            o || (o = { group: { value: u, spec: n }, children: [] }, t.splice(s, 0, o));
            return o
        }(e, t, n[0]).children, n.slice(1), o + 1, s, u) : G(e, t, u)
    }

    function G(e, t, n) {
        var o;
        for (o = 0; o < t.length; o++) { if (r.compareByFieldSpecs(t[o].resourceFields, e.resourceFields, n) > 0) break }
        t.splice(o, 0, e)
    }

    function J(e) { var r = o({}, e.extendedProps, e.ui, e); return delete r.ui, delete r.extendedProps, r }
    var W = r.createPlugin({
        reducers: [function(e, r, t) {
            var n = g(e.resourceSource, r, e.dateProfile, t),
                s = C(e.resourceStore, r, n, t),
                u = function(e, r) {
                    var t;
                    switch (r.type) {
                        case "INIT":
                            return {};
                        case "SET_RESOURCE_ENTITY_EXPANDED":
                            return o({}, e, ((t = {})[r.id] = r.isExpanded, t));
                        default:
                            return e
                    }
                }(e.resourceEntityExpansions, r);
            return o({}, e, { resourceSource: n, resourceStore: s, resourceEntityExpansions: u })
        }],
        eventDefParsers: [function(e, t, n) {
            var o = r.refineProps(t, _, {}, n),
                s = o.resourceIds;
            o.resourceId && s.push(o.resourceId), e.resourceIds = s, e.resourceEditable = o.resourceEditable
        }],
        isDraggableTransformers: [function(e, r, t, n) { return !(e || !n.viewSpec.class.needsResourceData || !s(r, n.calendar)) || e }],
        eventDragMutationMassagers: [function(e, r, t) {
            var n = r.dateSpan.resourceId,
                o = t.dateSpan.resourceId;
            n && o && n !== o && (e.resourceMutation = { matchResourceId: n, setResourceId: o })
        }],
        eventDefMutationAppliers: [function(e, r, t) {
            var n = r.resourceMutation;
            if (n && s(e, t)) {
                var o = e.resourceIds.indexOf(n.matchResourceId);
                if (-1 !== o) {
                    var u = e.resourceIds.slice();
                    u.splice(o, 1), -1 === u.indexOf(n.setResourceId) && u.push(n.setResourceId), e.resourceIds = u
                }
            }
        }],
        dateSelectionTransformers: [function(e, r) {
            var t = e.dateSpan.resourceId,
                n = r.dateSpan.resourceId;
            if (t && n) return (!1 !== e.component.allowAcrossResources || t === n) && { resourceId: t }
        }],
        datePointTransforms: [function(e, r) { return e.resourceId ? { resource: r.getResourceById(e.resourceId) } : {} }],
        dateSpanTransforms: [function(e, r) { return e.resourceId ? { resource: r.getResourceById(e.resourceId) } : {} }],
        viewPropsTransformers: [u, a],
        isPropsValid: function(e, t) { var n = (new P).splitProps(o({}, e, { resourceStore: t.state.resourceStore })); for (var s in n) { var u = n[s]; if (s && n[""] && (u = o({}, u, { eventStore: r.mergeEventStores(n[""].eventStore, u.eventStore), eventUiBases: o({}, n[""].eventUiBases, u.eventUiBases) })), !r.isPropsValid(u, t, { resourceId: s }, O.bind(null, s))) return !1 } return !0 },
        externalDefTransforms: [function(e) { return e.resourceId ? { resourceId: e.resourceId } : {} }],
        eventResizeJoinTransforms: [function(e, r) { if (!1 === e.component.allowAcrossResources && e.dateSpan.resourceId !== r.dateSpan.resourceId) return !1 }],
        viewContainerModifiers: [function(e, t) {
            var n, o = t.opt("schedulerLicenseKey");
            n = window.location.href, /\w+\:\/\/fullcalendar\.io\/|\/examples\/[\w-]+\.html$/.test(n) || function(e) {
                if (-1 !== F.indexOf(e)) return !0;
                var t = (e || "").match(/^(\d+)\-fcs\-(\d+)$/);
                if (t && 10 === t[1].length) {
                    var n = new Date(1e3 * parseInt(t[2], 10)),
                        o = new Date(r.config.mockSchedulerReleaseDate || T);
                    if (r.isValidDate(o)) { var s = r.addDays(o, -D); if (s < n) return !0 }
                }
                return !1
            }(o) || r.appendToElement(e, '<div class="fc-license-message" style="' + r.htmlEscape(r.cssToStr(U)) + '">Please use a valid license key. <a href="' + j + '">More Info</a></div>')
        }],
        eventDropTransformers: [function(e, r) { var t = e.resourceMutation; return t ? { oldResource: r.getResourceById(t.matchResourceId), newResource: r.getResourceById(t.setResourceId) } : { oldResource: null, newResource: null } }],
        optionChangeHandlers: A
    });
    e.AbstractResourceDayTable = z, e.DayResourceTable = N, e.ResourceApi = w, e.ResourceDayHeader = B, e.ResourceDayTable = M, e.ResourceSplitter = P, e.VResourceJoiner = q, e.VResourceSplitter = k, e.buildResourceFields = J, e.buildResourceTextFunc = H, e.buildRowNodes = L, e.default = W, e.flattenResources = function(e, r) { return L(e, [], r, !1, {}, !0).map(function(e) { return e.resource }) }, e.isGroupsEqual = function(e, r) { return e.spec === r.spec && e.value === r.value }, Object.defineProperty(e, "__esModule", { value: !0 })
});
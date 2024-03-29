/*!
FullCalendar Resource Timeline Plugin v4.3.0
Docs & License: https://fullcalendar.io/scheduler
(c) 2019 Adam Shaw
*/
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@fullcalendar/core"), require("@fullcalendar/timeline"), require("@fullcalendar/resource-common")) : "function" == typeof define && define.amd ? define(["exports", "@fullcalendar/core", "@fullcalendar/timeline", "@fullcalendar/resource-common"], t) : t((e = e || self).FullCalendarResourceTimeline = {}, e.FullCalendar, e.FullCalendarTimeline, e.FullCalendarResourceCommon) }(this, function(e, t, r, o) {
    "use strict";
    var i = "default" in r ? r.default : r,
        s = "default" in o ? o.default : o,
        n = function(e, t) {
            return (n = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]) })(e, t)
        };

    function l(e, t) {
        function r() { this.constructor = e }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }
    var a = function() {
            return (a = Object.assign || function(e) {
                for (var t, r = 1, o = arguments.length; r < o; r++)
                    for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        },
        c = function(e) {
            function r(t, r, o, i, s) { var n = e.call(this, t) || this; return n.isSizeDirty = !1, r.insertBefore(n.spreadsheetTr = document.createElement("tr"), o), i.insertBefore(n.timeAxisTr = document.createElement("tr"), s), n }
            return l(r, e), r.prototype.destroy = function() { t.removeElement(this.spreadsheetTr), t.removeElement(this.timeAxisTr), e.prototype.destroy.call(this) }, r.prototype.updateSize = function(e) { this.isSizeDirty = !1 }, r
        }(t.Component);

    function d(e, t) {
        var r = e.classList;
        t ? (r.remove("fc-icon-plus-square"), r.add("fc-icon-minus-square")) : (r.remove("fc-icon-minus-square"), r.add("fc-icon-plus-square"))
    }

    function p(e, t) { e.setAttribute("data-resource-id", t) }
    var u = function(e) {
        function r() {
            var r = null !== e && e.apply(this, arguments) || this;
            return r._renderCells = t.memoizeRendering(r.renderCells, r.unrenderCells), r._updateExpanderIcon = t.memoizeRendering(r.updateExpanderIcon, null, [r._renderCells]), r.onExpanderClick = function(e) {
                var t = r.props;
                r.calendar.dispatch({ type: "SET_RESOURCE_ENTITY_EXPANDED", id: t.id, isExpanded: !t.isExpanded })
            }, r
        }
        return l(r, e), r.prototype.render = function(e) { this._renderCells(e.group, e.spreadsheetColCnt), this._updateExpanderIcon(e.isExpanded), this.isSizeDirty = !0 }, r.prototype.destroy = function() { e.prototype.destroy.call(this), this._renderCells.unrender() }, r.prototype.renderCells = function(e, r) {
            var o = this.renderSpreadsheetContent(e);
            this.spreadsheetTr.appendChild(t.createElement("td", { className: "fc-divider", colSpan: r }, this.spreadsheetHeightEl = t.createElement("div", null, o))), this.expanderIconEl = o.querySelector(".fc-icon"), this.expanderIconEl.parentElement.addEventListener("click", this.onExpanderClick), this.timeAxisTr.appendChild(t.createElement("td", { className: "fc-divider" }, this.timeAxisHeightEl = document.createElement("div")))
        }, r.prototype.unrenderCells = function() { this.spreadsheetTr.innerHTML = "", this.timeAxisTr.innerHTML = "" }, r.prototype.renderSpreadsheetContent = function(e) {
            var r = this.renderCellText(e),
                o = t.htmlToElement('<div class="fc-cell-content"><span class="fc-expander"><span class="fc-icon"></span></span><span class="fc-cell-text">' + (r ? t.htmlEscape(r) : "&nbsp;") + "</span></div>"),
                i = e.spec.render;
            return "function" == typeof i && (o = i(o, e.value) || o), o
        }, r.prototype.renderCellText = function(e) {
            var t = e.value || "",
                r = e.spec.text;
            return "function" == typeof r && (t = r(t) || t), t
        }, r.prototype.getHeightEls = function() { return [this.spreadsheetHeightEl, this.timeAxisHeightEl] }, r.prototype.updateExpanderIcon = function(e) { d(this.expanderIconEl, e) }, r
    }(c);
    u.addEqualityFuncs({ group: o.isGroupsEqual });
    var h = function(e) {
        function r(r, o) {
            var i = e.call(this, r) || this;
            return i._renderRow = t.memoizeRendering(i.renderRow, i.unrenderRow), i._updateTrResourceId = t.memoizeRendering(p, null, [i._renderRow]), i._updateExpanderIcon = t.memoizeRendering(i.updateExpanderIcon, null, [i._renderRow]), i.onExpanderClick = function(e) {
                var t = i.props;
                i.calendar.dispatch({ type: "SET_RESOURCE_ENTITY_EXPANDED", id: t.id, isExpanded: !t.isExpanded })
            }, i.tr = o, i
        }
        return l(r, e), r.prototype.render = function(e) { this._renderRow(e.resource, e.rowSpans, e.depth, e.colSpecs), this._updateTrResourceId(this.tr, e.resource.id), this._updateExpanderIcon(e.hasChildren, e.isExpanded) }, r.prototype.destroy = function() { e.prototype.destroy.call(this), this._renderRow.unrender() }, r.prototype.renderRow = function(e, r, i, s) {
            for (var n, l = this.tr, a = this.theme, c = this.calendar, d = this.view, p = o.buildResourceFields(e), u = 0; u < s.length; u++) {
                var h = s[u],
                    f = r[u];
                if (0 !== f) {
                    null == f && (f = 1);
                    var m = void 0;
                    m = h.field ? p[h.field] : o.buildResourceTextFunc(h.text, c)(e);
                    var g = t.htmlToElement('<div class="fc-cell-content">' + (h.isMain ? y(i) : "") + '<span class="fc-cell-text">' + (m ? t.htmlEscape(m) : "&nbsp;") + "</span></div>");
                    "function" == typeof h.render && (g = h.render(new o.ResourceApi(c, e), g) || g), f > 1 && g.classList.add("fc-sticky");
                    var v = t.createElement("td", { className: a.getClass("widgetContent"), rowspan: f }, g);
                    h.isMain && (v.appendChild(this.heightEl = t.createElement("div", null, v.childNodes)), n = v), l.appendChild(v)
                }
            }
            this.expanderIconEl = l.querySelector(".fc-expander-space .fc-icon"), d.publiclyTrigger("resourceRender", [{ resource: new o.ResourceApi(c, e), el: n, view: d }])
        }, r.prototype.unrenderRow = function() { this.tr.innerHTML = "" }, r.prototype.updateExpanderIcon = function(e, t) {
            var r, o = this.expanderIconEl,
                i = o.parentElement;
            o && i && (e ? (i.addEventListener("click", this.onExpanderClick), i.classList.add("fc-expander"), d(o, t)) : (i.removeEventListener("click", this.onExpanderClick), i.classList.remove("fc-expander"), (r = o.classList).remove("fc-icon-minus-square"), r.remove("fc-icon-plus-square")))
        }, r
    }(t.Component);

    function y(e) { for (var t = "", r = 0; r < e; r++) t += '<span class="fc-icon"></span>'; return t += '<span class="fc-expander-space"><span class="fc-icon"></span></span>' }
    var f = function(e) {
        function o(o, i, s, n, l, a) { var c = e.call(this, o, i, s, n, l) || this; return c._updateTrResourceId = t.memoizeRendering(p), c.spreadsheetRow = new h(o, c.spreadsheetTr), c.timeAxisTr.appendChild(t.createElement("td", { className: c.theme.getClass("widgetContent") }, c.innerContainerEl = document.createElement("div"))), c.lane = new r.TimelineLane(o, c.innerContainerEl, c.innerContainerEl, a), c }
        return l(o, e), o.prototype.destroy = function() { this.spreadsheetRow.destroy(), this.lane.destroy(), e.prototype.destroy.call(this) }, o.prototype.render = function(e) { this.spreadsheetRow.receiveProps({ colSpecs: e.colSpecs, id: e.id, rowSpans: e.rowSpans, depth: e.depth, isExpanded: e.isExpanded, hasChildren: e.hasChildren, resource: e.resource }), this._updateTrResourceId(this.timeAxisTr, e.resource.id), this.lane.receiveProps({ dateProfile: e.dateProfile, nextDayThreshold: e.nextDayThreshold, businessHours: e.businessHours, eventStore: e.eventStore, eventUiBases: e.eventUiBases, dateSelection: e.dateSelection, eventSelection: e.eventSelection, eventDrag: e.eventDrag, eventResize: e.eventResize }), this.isSizeDirty = !0 }, o.prototype.updateSize = function(t) { e.prototype.updateSize.call(this, t), this.lane.updateSize(t) }, o.prototype.getHeightEls = function() { return [this.spreadsheetRow.heightEl, this.innerContainerEl] }, o
    }(c);
    f.addEqualityFuncs({ rowSpans: t.isArraysEqual });
    var m = function(e) {
            function r(r, o) { var i = e.call(this, r) || this; return i.resizables = [], i.colWidths = [], i.emitter = new t.EmitterMixin, o.appendChild(i.tableEl = t.createElement("table", { className: i.theme.getClass("tableGrid") })), i }
            return l(r, e), r.prototype.destroy = function() {
                for (var r = 0, o = this.resizables; r < o.length; r++) { o[r].destroy() }
                t.removeElement(this.tableEl), e.prototype.destroy.call(this)
            }, r.prototype.render = function(e) {
                var r = this.theme,
                    o = e.colSpecs,
                    i = "<colgroup>" + e.colTags + "</colgroup><tbody>";
                e.superHeaderText && (i += '<tr class="fc-super"><th class="' + r.getClass("widgetHeader") + '" colspan="' + o.length + '"><div class="fc-cell-content"><span class="fc-cell-text">' + t.htmlEscape(e.superHeaderText) + "</span></div></th></tr>"), i += "<tr>";
                for (var s = 0; s < o.length; s++) {
                    var n = o[s],
                        l = s === o.length - 1;
                    i += '<th class="' + r.getClass("widgetHeader") + '"><div><div class="fc-cell-content">' + (n.isMain ? '<span class="fc-expander-space"><span class="fc-icon"></span></span>' : "") + '<span class="fc-cell-text">' + t.htmlEscape(n.labelText || "") + "</span></div>" + (l ? "" : '<div class="fc-col-resizer"></div>') + "</div></th>"
                }
                i += "</tr>", i += "</tbody>", this.tableEl.innerHTML = i, this.thEls = Array.prototype.slice.call(this.tableEl.querySelectorAll("th")), this.colEls = Array.prototype.slice.call(this.tableEl.querySelectorAll("col")), this.resizerEls = Array.prototype.slice.call(this.tableEl.querySelectorAll(".fc-col-resizer")), this.initColResizing()
            }, r.prototype.initColResizing = function() {
                var e = this,
                    t = this.calendar.pluginSystem.hooks.elementDraggingImpl;
                t && (this.resizables = this.resizerEls.map(function(r, o) { var i, s = new t(r); return s.emitter.on("dragstart", function() { "number" != typeof(i = e.colWidths[o]) && (i = e.thEls[o].getBoundingClientRect().width) }), s.emitter.on("dragmove", function(t) { e.colWidths[o] = Math.max(i + t.deltaX * (e.isRtl ? -1 : 1), 30), e.emitter.trigger("colwidthchange", e.colWidths) }), s.setAutoScrollEnabled(!1), s }))
            }, r
        }(t.Component),
        g = function(e) {
            function o(o, i, s) {
                var n = e.call(this, o) || this;
                n._renderCells = t.memoizeRendering(n.renderCells, n.unrenderCells), n.layout = new r.HeaderBodyLayout(i, s, "clipped-scroll");
                var l = n.layout.headerScroller.enhancedScroll,
                    a = n.layout.bodyScroller.enhancedScroll;
                return n.header = new m(o, l.canvas.contentEl), n.header.emitter.on("colwidthchange", function(e) { n.applyColWidths(e) }), a.canvas.contentEl.appendChild(n.bodyContainerEl = t.createElement("div", { className: "fc-rows" }, "<table><colgroup /><tbody /></table>")), n.bodyColGroup = n.bodyContainerEl.querySelector("colgroup"), n.bodyTbody = n.bodyContainerEl.querySelector("tbody"), n
            }
            return l(o, e), o.prototype.destroy = function() { this.header.destroy(), this.layout.destroy(), this._renderCells.unrender(), e.prototype.destroy.call(this) }, o.prototype.render = function(e) { this._renderCells(e.superHeaderText, e.colSpecs) }, o.prototype.renderCells = function(e, t) {
                var r = this.renderColTags(t);
                this.header.receiveProps({ superHeaderText: e, colSpecs: t, colTags: r }), this.bodyColGroup.innerHTML = r, this.bodyColEls = Array.prototype.slice.call(this.bodyColGroup.querySelectorAll("col")), this.applyColWidths(t.map(function(e) { return e.width }))
            }, o.prototype.unrenderCells = function() { this.bodyColGroup.innerHTML = "" }, o.prototype.renderColTags = function(e) { for (var t = "", r = 0, o = e; r < o.length; r++) { o[r].isMain ? t += '<col class="fc-main-col"/>' : t += "<col/>" } return t }, o.prototype.updateSize = function(e, t, r) { this.layout.setHeight(t, r) }, o.prototype.applyColWidths = function(e) {
                var t = this;
                e.forEach(function(e, r) {
                    var o, i = t.header.colEls[r],
                        s = t.bodyColEls[r];
                    "number" == typeof e ? o = e + "px" : null == typeof e && (o = ""), i.style.width = s.style.width = o
                })
            }, o
        }(t.Component),
        v = function(e) {
            function i(i, s, n, l) {
                var a = e.call(this, i, s, n, l) || this;
                a.isStickyScrollDirty = !1, a.rowNodes = [], a.rowComponents = [], a.rowComponentsById = {}, a.resourceAreaWidthDraggings = [], a.splitter = new o.ResourceSplitter, a.hasResourceBusinessHours = t.memoize(S), a.buildRowNodes = t.memoize(o.buildRowNodes), a.hasNesting = t.memoize(x), a._updateHasNesting = t.memoizeRendering(a.updateHasNesting);
                var c = a.opt("resourceColumns") || [],
                    d = a.opt("resourceLabelText"),
                    p = null;
                c.length ? p = d : c.push({ labelText: d || "Resources", text: o.buildResourceTextFunc(a.opt("resourceText"), a.calendar) });
                for (var u = [], h = [], y = [], f = !1, m = !1, v = 0, E = c; v < E.length; v++) {
                    var C = E[v];
                    C.group ? h.push(C) : u.push(C)
                }
                if (u[0].isMain = !0, h.length) y = h, f = !0;
                else {
                    var w = a.opt("resourceGroupField");
                    w && (m = !0, y.push({ field: w, text: a.opt("resourceGroupText"), render: a.opt("resourceGroupRender") }))
                }
                for (var b = [], R = 0, T = t.parseFieldSpecs(a.opt("resourceOrder")); R < T.length; R++) {
                    for (var A = T[R], H = !1, z = 0, I = y; z < I.length; z++) { var D = I[z]; if (D.field === A.field) { D.order = A.order, H = !0; break } }
                    H || b.push(A)
                }
                a.superHeaderText = p, a.isVGrouping = f, a.isHGrouping = m, a.groupSpecs = y, a.colSpecs = h.concat(u), a.orderSpecs = b, a.el.classList.add("fc-timeline"), !1 === a.opt("eventOverlap") && a.el.classList.add("fc-no-overlap"), a.el.innerHTML = a.renderSkeletonHtml(), a.resourceAreaHeadEl = a.el.querySelector("thead .fc-resource-area"), a.setResourceAreaWidth(a.opt("resourceAreaWidth")), a.initResourceAreaWidthDragging(), a.miscHeight = a.el.getBoundingClientRect().height, a.spreadsheet = new g(a.context, a.resourceAreaHeadEl, a.el.querySelector("tbody .fc-resource-area")), a.timeAxis = new r.TimeAxis(a.context, a.el.querySelector("thead .fc-time-area"), a.el.querySelector("tbody .fc-time-area"));
                var _ = t.createElement("div", { className: "fc-rows" }, "<table><tbody /></table>");
                return a.timeAxis.layout.bodyScroller.enhancedScroll.canvas.contentEl.appendChild(_), a.timeAxisTbody = _.querySelector("tbody"), a.lane = new r.TimelineLane(a.context, null, a.timeAxis.layout.bodyScroller.enhancedScroll.canvas.bgEl, a.timeAxis), a.bodyScrollJoiner = new r.ScrollJoiner("vertical", [a.spreadsheet.layout.bodyScroller, a.timeAxis.layout.bodyScroller]), a.spreadsheetBodyStickyScroller = new r.StickyScroller(a.spreadsheet.layout.bodyScroller.enhancedScroll, a.isRtl, !0), a.spreadsheet.receiveProps({ superHeaderText: a.superHeaderText, colSpecs: a.colSpecs }), i.calendar.registerInteractiveComponent(a, { el: a.timeAxis.slats.el }), a
            }
            return l(i, e), i.prototype.renderSkeletonHtml = function() { var e = this.theme; return '<table class="' + e.getClass("tableGrid") + '"> <thead class="fc-head"> <tr> <td class="fc-resource-area ' + e.getClass("widgetHeader") + '"></td> <td class="fc-divider fc-col-resizer ' + e.getClass("widgetHeader") + '"></td> <td class="fc-time-area ' + e.getClass("widgetHeader") + '"></td> </tr> </thead> <tbody class="fc-body"> <tr> <td class="fc-resource-area ' + e.getClass("widgetContent") + '"></td> <td class="fc-divider fc-col-resizer ' + e.getClass("widgetHeader") + '"></td> <td class="fc-time-area ' + e.getClass("widgetContent") + '"></td> </tr> </tbody> </table>' }, i.prototype.render = function(t) {
                e.prototype.render.call(this, t);
                var r = this.splitter.splitProps(t),
                    o = this.hasResourceBusinessHours(t.resourceStore);
                this.timeAxis.receiveProps({ dateProfile: t.dateProfile }), this.lane.receiveProps(a({}, r[""], { dateProfile: t.dateProfile, nextDayThreshold: this.nextDayThreshold, businessHours: o ? null : t.businessHours }));
                var i = this.buildRowNodes(t.resourceStore, this.groupSpecs, this.orderSpecs, this.isVGrouping, t.resourceEntityExpansions, this.opt("resourcesInitiallyExpanded"));
                this._updateHasNesting(this.hasNesting(i)), this.diffRows(i), this.renderRows(t.dateProfile, o ? t.businessHours : null, r)
            }, i.prototype.updateHasNesting = function(e) {
                var t = this.el.classList;
                e ? t.remove("fc-flat") : t.add("fc-flat")
            }, i.prototype.diffRows = function(e) {
                var t = this.rowNodes,
                    r = t.length,
                    o = {},
                    i = 0,
                    s = 0;
                for (i = 0; i < r; i++) o[t[i].id] = i;
                for (i = 0, s = 0; s < e.length; s++) {
                    var n = e[s],
                        l = o[n.id];
                    null != l && l >= i ? (this.removeRows(s, l - i, t), i = l + 1) : this.addRow(s, n)
                }
                this.removeRows(s, r - i, t), this.rowNodes = e
            }, i.prototype.addRow = function(e, t) {
                var r = this.rowComponents,
                    o = this.rowComponentsById,
                    i = r[e],
                    s = this.buildChildComponent(t, this.spreadsheet.bodyTbody, i ? i.spreadsheetTr : null, this.timeAxisTbody, i ? i.timeAxisTr : null);
                r.splice(e, 0, s), o[t.id] = s
            }, i.prototype.removeRows = function(e, t, r) {
                if (t) {
                    for (var o = this.rowComponents, i = this.rowComponentsById, s = 0; s < t; s++) { o[e + s].destroy(), delete i[r[s].id] }
                    o.splice(e, t)
                }
            }, i.prototype.buildChildComponent = function(e, t, r, o, i) { return e.group ? new u(this.context, t, r, o, i) : e.resource ? new f(this.context, t, r, o, i, this.timeAxis) : void 0 }, i.prototype.renderRows = function(e, t, r) {
                for (var o = this.rowNodes, i = this.rowComponents, s = 0; s < o.length; s++) {
                    var n = o[s],
                        l = i[s];
                    if (n.group) l.receiveProps({ spreadsheetColCnt: this.colSpecs.length, id: n.id, isExpanded: n.isExpanded, group: n.group });
                    else {
                        var c = n.resource;
                        l.receiveProps(a({}, r[c.id], { dateProfile: e, nextDayThreshold: this.nextDayThreshold, businessHours: c.businessHours || t, colSpecs: this.colSpecs, id: n.id, rowSpans: n.rowSpans, depth: n.depth, isExpanded: n.isExpanded, hasChildren: n.hasChildren, resource: n.resource }))
                    }
                }
            }, i.prototype.updateSize = function(e, r, o) {
                var i = this.calendar,
                    s = e || i.isViewUpdated || i.isDatesUpdated || i.isEventsUpdated;
                s && (this.syncHeadHeights(), this.timeAxis.updateSize(e, r - this.miscHeight, o), this.spreadsheet.updateSize(e, r - this.miscHeight, o));
                var n = this.updateRowSizes(e);
                this.lane.updateSize(e), (s || n) && (this.bodyScrollJoiner.update(), this.timeAxis.layout.scrollJoiner.update(), this.rowPositions = new t.PositionCache(this.timeAxis.slats.el, this.rowComponents.map(function(e) { return e.timeAxisTr }), !1, !0), this.rowPositions.build(), this.isStickyScrollDirty = !0)
            }, i.prototype.syncHeadHeights = function() {
                var e = this.spreadsheet.header.tableEl,
                    t = this.timeAxis.header.tableEl;
                e.style.height = "", t.style.height = "";
                var r = Math.max(e.getBoundingClientRect().height, t.getBoundingClientRect().height);
                e.style.height = t.style.height = r + "px"
            }, i.prototype.updateRowSizes = function(e) {
                var t = this.rowComponents;
                e || (t = t.filter(function(e) { return e.isSizeDirty }));
                for (var r = t.map(function(e) { return e.getHeightEls() }), o = 0, i = r; o < i.length; o++)
                    for (var s = 0, n = i[o]; s < n.length; s++) { n[s].style.height = "" }
                for (var l = 0, a = t; l < a.length; l++) { a[l].updateSize(e) }
                for (var c = r.map(function(e) {
                        for (var t = null, r = 0, o = e; r < o.length; r++) {
                            var i = o[r].getBoundingClientRect().height;
                            (null === t || i > t) && (t = i)
                        }
                        return t
                    }), d = 0; d < r.length; d++)
                    for (var p = 0, u = r[d]; p < u.length; p++) { u[p].style.height = c[d] + "px" }
                return t.length
            }, i.prototype.destroy = function() {
                for (var t = 0, r = this.rowComponents; t < r.length; t++) { r[t].destroy() }
                this.rowNodes = [], this.rowComponents = [], this.spreadsheet.destroy(), this.timeAxis.destroy();
                for (var o = 0, i = this.resourceAreaWidthDraggings; o < i.length; o++) { i[o].destroy() }
                this.spreadsheetBodyStickyScroller.destroy(), e.prototype.destroy.call(this), this.calendar.unregisterInteractiveComponent(this)
            }, i.prototype.getNowIndicatorUnit = function(e) { return this.timeAxis.getNowIndicatorUnit(e) }, i.prototype.renderNowIndicator = function(e) { this.timeAxis.renderNowIndicator(e) }, i.prototype.unrenderNowIndicator = function() { this.timeAxis.unrenderNowIndicator() }, i.prototype.queryScroll = function() { var t = e.prototype.queryScroll.call(this); return this.props.resourceStore && a(t, this.queryResourceScroll()), t }, i.prototype.applyScroll = function(t, r) { e.prototype.applyScroll.call(this, t, r), this.props.resourceStore && this.applyResourceScroll(t), (r || this.isStickyScrollDirty) && (this.isStickyScrollDirty = !1, this.spreadsheetBodyStickyScroller.updateSize(), this.timeAxis.updateStickyScrollers()) }, i.prototype.computeDateScroll = function(e) { return this.timeAxis.computeDateScroll(e) }, i.prototype.queryDateScroll = function() { return this.timeAxis.queryDateScroll() }, i.prototype.applyDateScroll = function(e) { this.timeAxis.applyDateScroll(e) }, i.prototype.queryResourceScroll = function() {
                for (var e = this.rowComponents, t = this.rowNodes, r = {}, o = this.timeAxis.layout.bodyScroller.el.getBoundingClientRect().top, i = 0; i < e.length; i++) {
                    var s = e[i],
                        n = t[i],
                        l = s.timeAxisTr.getBoundingClientRect().bottom;
                    if (l > o) { r.rowId = n.id, r.bottom = l - o; break }
                }
                return r
            }, i.prototype.applyResourceScroll = function(e) {
                var t = e.forcedRowId || e.rowId;
                if (t) {
                    var r = this.rowComponentsById[t];
                    if (r) {
                        var o = r.timeAxisTr;
                        if (o) {
                            var i = this.timeAxis.layout.bodyScroller.enhancedScroll.canvas.el.getBoundingClientRect().top,
                                s = o.getBoundingClientRect(),
                                n = (e.forcedRowId ? s.top : s.bottom - e.bottom) - i;
                            this.timeAxis.layout.bodyScroller.enhancedScroll.setScrollTop(n), this.spreadsheet.layout.bodyScroller.enhancedScroll.setScrollTop(n)
                        }
                    }
                }
            }, i.prototype.buildPositionCaches = function() { this.timeAxis.slats.updateSize(), this.rowPositions.build() }, i.prototype.queryHit = function(e, t) {
                var r = this.rowPositions,
                    o = this.timeAxis.slats,
                    i = r.topToIndex(t);
                if (null != i) { var s = this.rowNodes[i].resource; if (s) { var n = o.positionToHit(e); if (n) return { component: this, dateSpan: { range: n.dateSpan.range, allDay: n.dateSpan.allDay, resourceId: s.id }, rect: { left: n.left, right: n.right, top: r.tops[i], bottom: r.bottoms[i] }, dayEl: n.dayEl, layer: 0 } } }
            }, i.prototype.setResourceAreaWidth = function(e) { this.resourceAreaWidth = e, t.applyStyleProp(this.resourceAreaHeadEl, "width", e || "") }, i.prototype.initResourceAreaWidthDragging = function() {
                var e = this,
                    t = Array.prototype.slice.call(this.el.querySelectorAll(".fc-col-resizer")),
                    r = this.calendar.pluginSystem.hooks.elementDraggingImpl;
                r && (this.resourceAreaWidthDraggings = t.map(function(t) {
                    var o, i, s = new r(t);
                    return s.emitter.on("dragstart", function() { "number" != typeof(o = e.resourceAreaWidth) && (o = e.resourceAreaHeadEl.getBoundingClientRect().width), i = e.el.getBoundingClientRect().width }), s.emitter.on("dragmove", function(t) {
                        var r = o + t.deltaX * (e.isRtl ? -1 : 1);
                        r = Math.max(r, 30), r = Math.min(r, i - 30), e.setResourceAreaWidth(r)
                    }), s.setAutoScrollEnabled(!1), s
                }))
            }, i.needsResourceData = !0, i
        }(t.View);

    function S(e) { for (var t in e) { if (e[t].businessHours) return !0 } return !1 }

    function x(e) { for (var t = 0, r = e; t < r.length; t++) { var o = r[t]; if (o.group) return !0; if (o.resource && o.hasChildren) return !0 } return !1 }
    var E = t.createPlugin({ deps: [s, i], defaultView: "resourceTimelineDay", views: { resourceTimeline: { class: v, resourceAreaWidth: "30%", resourcesInitiallyExpanded: !0, eventResizableFromStart: !0 }, resourceTimelineDay: { type: "resourceTimeline", duration: { days: 1 } }, resourceTimelineWeek: { type: "resourceTimeline", duration: { weeks: 1 } }, resourceTimelineMonth: { type: "resourceTimeline", duration: { months: 1 } }, resourceTimelineYear: { type: "resourceTimeline", duration: { years: 1 } } } });
    e.ResourceTimelineView = v, e.default = E, Object.defineProperty(e, "__esModule", { value: !0 })
});
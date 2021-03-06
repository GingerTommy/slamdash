(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"), require("dc"));
	else if(typeof define === 'function' && define.amd)
		define("slamdash", ["d3", "dc"], factory);
	else if(typeof exports === 'object')
		exports["slamdash"] = factory(require("d3"), require("dc"));
	else
		root["slamdash"] = factory(root["d3"], root["dc"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var adminLayoutProvider_1 = __webpack_require__(2);
	exports.adminLayoutProvider = adminLayoutProvider_1.adminLayoutProvider;
	var keenLayoutProvider_1 = __webpack_require__(3);
	exports.keenLayoutProvider = keenLayoutProvider_1.keenLayoutProvider;
	var dcChartProvider_1 = __webpack_require__(4);
	exports.dcChartProvider = dcChartProvider_1.dcChartProvider;
	var dashboard_1 = __webpack_require__(7);
	exports.dashboard = dashboard_1.dashboard;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var AdminLayoutProvider = (function () {
	    function AdminLayoutProvider() {
	        this.cells = [];
	    }
	    AdminLayoutProvider.prototype.getNamedLayout = function (name, cells) {
	        this.cells = cells;
	        return this[name]();
	    };
	    AdminLayoutProvider.prototype.getChartWrapper = function (index) {
	        if (this.cells.length <= index) {
	            return '';
	        }
	        var cell = this.cells[index];
	        if (cell.hide) {
	            return '';
	        }
	        var title = cell.title ? "<div class=\"chart-title\">" + cell.title + "</div>" : '';
	        var notes = cell.description ? "<div class=\"chart-notes\">" + cell.description + "</div>" : '';
	        return "<div class=\"chart-wrapper\">" + title + "<div class=\"chart-stage\"><div id=\"cell-" + index + "\"></div></div>" + notes + "</div>";
	    };
	    AdminLayoutProvider.prototype.sixTwoTwo = function () {
	        return "<div class=\"container-fluid>\n  <div class=\"row\">\n    <div class=\"col-sm-2\">" + this.getChartWrapper(0) + "</div>\n    <div class=\"col-sm-2\">" + this.getChartWrapper(1) + "</div>\n    <div class=\"col-sm-2\">" + this.getChartWrapper(2) + "</div>\n    <div class=\"col-sm-2\">" + this.getChartWrapper(3) + "</div>\n    <div class=\"col-sm-2\">" + this.getChartWrapper(4) + "</div>\n    <div class=\"col-sm-2\">" + this.getChartWrapper(5) + "</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">" + this.getChartWrapper(6) + "</div>\n    <div class=\"col-sm-6\">" + this.getChartWrapper(7) + "</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">" + this.getChartWrapper(8) + "</div>\n    <div class=\"col-sm-6\">" + this.getChartWrapper(9) + "</div>\n  </div>\n</div>";
	    };
	    return AdminLayoutProvider;
	}());
	exports.adminLayoutProvider = AdminLayoutProvider;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var KeenLayoutProvider = (function () {
	    function KeenLayoutProvider() {
	        this.cells = [];
	    }
	    KeenLayoutProvider.prototype.getNamedLayout = function (name, cells) {
	        this.cells = cells;
	        return this[name]();
	    };
	    KeenLayoutProvider.prototype.getChartWrapper = function (index) {
	        if (this.cells.length <= index) {
	            return '';
	        }
	        var cell = this.cells[index];
	        if (cell.hide) {
	            return '';
	        }
	        var title = cell.title ? "<div class=\"chart-title\">" + cell.title + "</div>" : '';
	        var notes = cell.description ? "<div class=\"chart-notes\">" + cell.description + "</div>" : '';
	        return "<div class=\"chart-wrapper\">" + title + "<div class=\"chart-stage\"><div id=\"cell-" + index + "\"></div></div>" + notes + "</div>";
	    };
	    KeenLayoutProvider.prototype.heroSidebar = function () {
	        return "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">" + this.getChartWrapper(0) + "</div>\n    <div class=\"col-sm-9\">\n      <div class=\"row\">\n          <div class=\"col-sm-12\">" + this.getChartWrapper(1) + "</div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-sm-4\">" + this.getChartWrapper(2) + "</div>\n          <div class=\"col-sm-4\">" + this.getChartWrapper(3) + "</div>\n          <div class=\"col-sm-4\">" + this.getChartWrapper(4) + "</div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-sm-4\">" + this.getChartWrapper(5) + "</div>\n          <div class=\"col-sm-4\">" + this.getChartWrapper(6) + "</div>\n          <div class=\"col-sm-4\">" + this.getChartWrapper(7) + "</div>\n      </div>\n    </div>\n  </div>\n</div>";
	    };
	    KeenLayoutProvider.prototype.heroThirds = function () {
	        return "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">" + this.getChartWrapper(0) + "</div>\n    <div class=\"col-sm-4\">" + this.getChartWrapper(1) + "</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(2) + "</div>\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(3) + "</div>\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(4) + "</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(5) + "</div>\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(6) + "</div>\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(7) + "</div>\n  </div>\n</div>";
	    };
	    KeenLayoutProvider.prototype.quarterGrid = function () {
	        return "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(0) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(1) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(2) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(3) + "</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(4) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(5) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(6) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(7) + "</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(8) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(9) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(10) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(11) + "</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(12) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(13) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(14) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(15) + "</div>\n  </div>\n</div>";
	    };
	    KeenLayoutProvider.prototype.splitCentered = function () {
	        return "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">" + this.getChartWrapper(0) + "</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">" + this.getChartWrapper(1) + "</div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">" + this.getChartWrapper(2) + "</div>\n    <div class=\"col-sm-3\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">" + this.getChartWrapper(3) + "</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">" + this.getChartWrapper(4) + "</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">" + this.getChartWrapper(5) + "</div>\n    <div class=\"col-sm-4\">" + this.getChartWrapper(6) + "</div>\n    <div class=\"col-sm-4\">" + this.getChartWrapper(7) + "</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">" + this.getChartWrapper(8) + "</div>\n    <div class=\"col-sm-4\">" + this.getChartWrapper(9) + "</div>\n    <div class=\"col-sm-4\">" + this.getChartWrapper(10) + "</div>\n  </div>\n</div>";
	    };
	    KeenLayoutProvider.prototype.splitColumns = function () {
	        return "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">" + this.getChartWrapper(0) + "</div>\n    <div class=\"col-sm-6\">" + this.getChartWrapper(1) + "</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">" + this.getChartWrapper(2) + "</div>\n    <div class=\"col-sm-6\">" + this.getChartWrapper(3) + "</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(4) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(5) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(6) + "</div>\n    <div class=\"col-sm-6 col-md-3\">" + this.getChartWrapper(7) + "</div>\n  </div>\n</div>";
	    };
	    KeenLayoutProvider.prototype.splitRows = function () {
	        return "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">" + this.getChartWrapper(0) + "</div>\n    <div class=\"col-sm-9\">" + this.getChartWrapper(1) + "</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-3\">" + this.getChartWrapper(2) + "</div>\n    <div class=\"col-sm-9\">" + this.getChartWrapper(3) + "</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-3\">" + this.getChartWrapper(4) + "</div>\n    <div class=\"col-sm-9\">" + this.getChartWrapper(5) + "</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-3\">" + this.getChartWrapper(6) + "</div>\n    <div class=\"col-sm-9\">" + this.getChartWrapper(7) + "</div>\n  </div>\n</div>";
	    };
	    KeenLayoutProvider.prototype.thirdsGrid = function () {
	        return "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(0) + "</div>\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(1) + "</div>\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(2) + "</div>\n    <!-- end of row one -->\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(3) + "</div>\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(4) + "</div>\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(5) + "</div>\n    <!-- end of row two -->\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(6) + "</div>\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(7) + "</div>\n    <div class=\"col-sm-6 col-md-4\">" + this.getChartWrapper(8) + "</div>\n  </div>\n</div>";
	    };
	    KeenLayoutProvider.prototype.twoAndOne = function () {
	        return "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">" + this.getChartWrapper(0) + "</div>\n    <div class=\"col-sm-6\">" + this.getChartWrapper(1) + "</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">" + this.getChartWrapper(2) + "</div>\n  </div>\n</div>";
	    };
	    return KeenLayoutProvider;
	}());
	exports.keenLayoutProvider = KeenLayoutProvider;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var d3 = __webpack_require__(5);
	var dc = __webpack_require__(6);
	var DCChartProvider = (function () {
	    function DCChartProvider(sumBy) {
	        this.sumBy = sumBy;
	        this.groupMode = 'count';
	        this.hasRendered = false;
	        this.index = crossfilter([]);
	        if (sumBy) {
	            this.groupMode = 'sum';
	        }
	    }
	    DCChartProvider.prototype.addChart = function (selector, config) {
	        if (config.chartType === 'bar') {
	            return this.barChart(selector, config);
	        }
	        if (config.chartType === 'template') {
	            return this.itemTemplate(selector, config);
	        }
	        if (config.chartType === 'number') {
	            return this.numberDisplay(selector, config);
	        }
	        if (config.chartType === 'pie') {
	            return this.pieChart(selector, config);
	        }
	        if (config.chartType === 'row') {
	            return this.rowChart(selector, config);
	        }
	        if (config.chartType === 'series') {
	            return this.seriesChart(selector, config);
	        }
	    };
	    DCChartProvider.prototype.addData = function (data) {
	        this.index.add(data);
	        return this;
	    };
	    DCChartProvider.prototype.loadComplete = function () {
	        // TODO: modify html on registered data count widgets
	        return this;
	    };
	    DCChartProvider.prototype.refresh = function () {
	        if (this.hasRendered) {
	            dc.redrawAll();
	        }
	        else {
	            dc.renderAll();
	            this.registerResize();
	        }
	        this.hasRendered = true;
	        return this;
	    };
	    DCChartProvider.prototype.barChart = function (selector, config) {
	        var dimensionGroup = this.createDimensionGroup(config.groupBy);
	        var chart = dc.barChart(selector);
	        chart
	            .dimension(dimensionGroup.dimension)
	            .group(dimensionGroup.group);
	        if (config.isOrdinal) {
	            chart
	                .x(d3.scale.ordinal())
	                .xUnits(dc.units.ordinal);
	        }
	        else {
	        }
	        chart.canResize = true;
	        return chart;
	    };
	    DCChartProvider.prototype.createDimensionGroup = function (dimensionProperty) {
	        var dimension = this.index.dimension(dc.pluck(dimensionProperty));
	        var group = this.groupMode === 'sum'
	            ? dimension.group().reduceSum(dc.pluck(this.sumBy))
	            : dimension.group().reduceCount();
	        var dimensionGroup = {
	            dimension: dimension,
	            group: group
	        };
	        return dimensionGroup;
	    };
	    DCChartProvider.prototype.getFilteredCount = function (filter) {
	        return this.index.groupAll().reduce(function (p, v) {
	            p.value += filter(v) ? 1 : 0;
	            return p;
	        }, function (p, v) {
	            p.value -= filter(v) ? 1 : 0;
	            return p;
	        }, function () {
	            return { value: 0 };
	        });
	    };
	    DCChartProvider.prototype.getFilteredSum = function (filter, sumBy) {
	        return this.index.groupAll().reduce(function (p, v) {
	            p.value += filter(v) ? v[sumBy] : 0;
	            return p;
	        }, function (p, v) {
	            p.value -= filter(v) ? v[sumBy] : 0;
	            return p;
	        }, function () {
	            return { value: 0 };
	        });
	    };
	    DCChartProvider.prototype.itemTemplate = function (selector, config) {
	        var chart = dc.dataGrid(selector);
	        var itemTemplate = Handlebars.compile(config.itemTemplate || '');
	        var groupTemplate = Handlebars.compile(config.groupTemplate || '');
	        chart
	            .dimension(this.index.dimension(function (d) { return d; }))
	            .group(function (d) { return config.groupBy ? d[config.groupBy] : ''; })
	            .html(function (d) { return itemTemplate(d); });
	        chart.htmlGroup(function (d) { return groupTemplate(d); });
	        if (config.sortBy) {
	            chart.sortBy(dc.pluck(config.sortBy));
	            if (config.sortOrder === 'desc') {
	                chart.order(d3.descending);
	            }
	        }
	        chart.canResize = false;
	        return chart;
	    };
	    DCChartProvider.prototype.numberDisplay = function (selector, config) {
	        var group = config.sumBy
	            ? this.getFilteredSum(config.filter, config.sumBy)
	            : this.getFilteredCount(config.filter);
	        var chart = dc.numberDisplay(selector);
	        chart
	            .valueAccessor(function (d) { return d.value; })
	            .group(group)
	            .formatNumber(d3.format(config.numberFormat || '.2s'))
	            .html({
	            none: config.template || '%number',
	            one: config.template || '%number',
	            some: config.template || '%number'
	        });
	        chart.canResize = false;
	        return chart;
	    };
	    DCChartProvider.prototype.pieChart = function (selector, config) {
	        var dimensionGroup = this.createDimensionGroup(config.groupBy);
	        var chart = dc.pieChart(selector);
	        chart
	            .dimension(dimensionGroup.dimension)
	            .group(dimensionGroup.group)
	            .height(config.height || null)
	            .width(config.width || null)
	            .radius(config.radius || 100)
	            .innerRadius(config.innerRadius || 0);
	        if (config.cap) {
	            chart.slicesCap(config.cap);
	        }
	        chart.canResize = true;
	        return chart;
	    };
	    DCChartProvider.prototype.rowChart = function (selector, config) {
	        var dimensionGroup = this.createDimensionGroup(config.groupBy);
	        var chart = dc.rowChart(selector);
	        chart
	            .dimension(dimensionGroup.dimension)
	            .group(dimensionGroup.group)
	            .height(config.height || null)
	            .width(config.width || null)
	            .xAxis().ticks(config.ticks || 4);
	        if (config.elasticAxis) {
	            chart.elasticX(true);
	        }
	        chart.canResize = false;
	        return chart;
	    };
	    DCChartProvider.prototype.registerResize = function () {
	        var handler = function () {
	            dc.chartRegistry.list().forEach(function (chart, index) {
	                if (!chart.canResize) {
	                    return;
	                }
	                var bbox = chart.root().node().parentNode.getBoundingClientRect();
	                chart.width(bbox.width - 20);
	                try {
	                    chart.rescale();
	                }
	                catch (ex) { }
	                chart.redraw();
	            });
	        };
	        handler();
	        window.addEventListener('resize', handler, false);
	    };
	    DCChartProvider.prototype.seriesChart = function (selector, config) {
	        var dimension = this.index.dimension(function (d) { return [d[config.groupBy], d[config.timeField]]; });
	        var group = this.groupMode === 'sum'
	            ? dimension.group().reduceSum(dc.pluck(this.sumBy))
	            : dimension.group().reduceCount();
	        var range = this.index.dimension(dc.pluck(config.timeField));
	        var chart = dc.seriesChart(selector);
	        chart
	            .dimension(dimension)
	            .group(group)
	            .seriesAccessor(function (d) { return d.key[0]; })
	            .keyAccessor(function (d) { return d.key[1]; })
	            .valueAccessor(function (d) { return d.value; })
	            .x(d3.time.scale())
	            .brushOn(false)
	            .on('preRender', function (chart) {
	            var dates = range.top(Infinity).map(dc.pluck(config.timeField)).sort(d3.ascending);
	            var minDate = dates.length === 0 ? new Date(0) : dates[0];
	            var maxDate = dates.length === 0 ? new Date(0) : dates[dates.length - 1];
	            chart.x(d3.time.scale().domain([minDate, maxDate]));
	        });
	        chart.canResize = true;
	        return chart;
	    };
	    return DCChartProvider;
	}());
	exports.dcChartProvider = DCChartProvider;


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var d3 = __webpack_require__(5);
	var Dashboard = (function () {
	    function Dashboard(layoutProvider, chartProvider, config) {
	        this.layoutProvider = layoutProvider;
	        this.chartProvider = chartProvider;
	        this.config = config;
	        this.setLayout();
	        this.drawCharts();
	    }
	    Dashboard.prototype.drawCharts = function () {
	        var _this = this;
	        this.config.charts.forEach(function (chartConfig, index) {
	            _this.chartProvider.addChart("#cell-" + index, chartConfig);
	        });
	    };
	    Dashboard.prototype.setLayout = function () {
	        var cells = this.config.charts.map(function (chart) {
	            return {
	                title: chart.title,
	                description: chart.description,
	                hide: chart.chartType === 'blank'
	            };
	        });
	        var layoutHtml = this.layoutProvider.getNamedLayout(this.config.layoutName, cells);
	        d3.select(this.config.selector).html(layoutHtml);
	    };
	    return Dashboard;
	}());
	exports.dashboard = Dashboard;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=slamdash.js.map
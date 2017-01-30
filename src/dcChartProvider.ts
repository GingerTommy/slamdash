import * as d3 from 'd3';
import * as dc from 'dc';
import * as handlebars from 'handlebars';

class DCChartProvider implements ChartProvider {
    private groupMode: string = 'count';
    private hasRendered: boolean = false;
    private index: CrossFilter.CrossFilter<any> = crossfilter([]);

    constructor(private sumBy?: string) {
        if (sumBy) {
            this.groupMode = 'sum';
        }
    }

    public addChart(selector: string, config: ChartConfig): any {
        if (config.chartType === 'bar') {
            return this.barChart(selector, config as BarChartConfig);
        }

        if (config.chartType === 'template') {
            return this.itemTemplate(selector, config as ItemTemplateConfig);
        }

        if (config.chartType === 'number') {
            return this.numberDisplay(selector, config as NumberDisplayConfig);
        }

        if (config.chartType === 'pie') {
            return this.pieChart(selector, config as PieChartConfig);
        }

        if (config.chartType === 'row') {
            return this.rowChart(selector, config as RowChartConfig);
        }

        if (config.chartType === 'series') {
            return this.seriesChart(selector, config as SeriesChartConfig);
        }
    }

    public addData(data: Array<any>): ChartProvider {
        this.index.add(data);
        return this;
    }

    public loadComplete(): ChartProvider {
        // TODO: modify html on registered data count widgets
        return this;
    }

    public refresh(): ChartProvider {
        if (this.hasRendered) {
            dc.redrawAll();
        }
        else {
            dc.renderAll();
            this.registerResize();
        }

        this.hasRendered = true;
        return this;
    }

    private barChart(selector: string, config: BarChartConfig): dc.BarChart {
        const dimensionGroup = this.createDimensionGroup(config.groupBy);
        const chart = dc.barChart(selector);
        chart
            .dimension(dimensionGroup.dimension)
            .group(dimensionGroup.group);
        
        if (config.isOrdinal) {
            chart
                .x(d3.scale.ordinal())
                .xUnits(dc.units.ordinal)
        }
        else {

        }

        (chart as any).canResize = true;
        return chart;
    }

    private createDimensionGroup(dimensionProperty: string): DimensionGroup {
        const dimension = this.index.dimension(dc.pluck(dimensionProperty));
        const group = this.groupMode === 'sum'
            ? dimension.group().reduceSum(dc.pluck(this.sumBy))
            : dimension.group().reduceCount();
        const dimensionGroup: DimensionGroup = {
            dimension: dimension,
            group: group
        };
        return dimensionGroup;
    }

    private getFilteredCount(filter: (any) => boolean): CrossFilter.GroupAll<any, any> {
        return this.index.groupAll().reduce<any>(
            (p, v) => {
                p.value += filter(v) ? 1 : 0;
                return p;
            },
            (p, v) => {
                p.value -= filter(v) ? 1 : 0;
                return p;
            },
            () => {
                return { value: 0 };
            }
        );
    }

    private getFilteredSum(filter: (any) => boolean, sumBy: string): CrossFilter.GroupAll<any, any> {
        return this.index.groupAll().reduce<any>(
            (p, v) => {
                p.value += filter(v) ? v[sumBy] : 0;
                return p;
            },
            (p, v) => {
                p.value -= filter(v) ? v[sumBy] : 0;
                return p;
            },
            () => {
                return { value: 0 };
            }
        );
    }

    private itemTemplate(selector, config: ItemTemplateConfig): dc.DataGridWidget {
        const chart = dc.dataGrid(selector);
        const itemTemplate = Handlebars.compile(config.itemTemplate || '');
        const groupTemplate = Handlebars.compile(config.groupTemplate || '');
        chart
            .dimension(this.index.dimension(d => d))
            .group(d => config.groupBy ? d[config.groupBy] : '')
            .html(d => itemTemplate(d));
       chart.htmlGroup(d => groupTemplate(d));

       if (config.sortBy) {
           chart.sortBy(dc.pluck(config.sortBy));
           if (config.sortOrder === 'desc') {
               chart.order(d3.descending);
           }
       }

       (chart as any).canResize = false;
       return chart;
    }

    private numberDisplay(selector: string, config: NumberDisplayConfig): dc.NumberDisplayWidget {
        const group = config.sumBy
            ? this.getFilteredSum(config.filter, config.sumBy)
            : this.getFilteredCount(config.filter);
        const chart = dc.numberDisplay(selector);
        chart
            .valueAccessor(d => d.value)
            .group(group)
            .formatNumber(d3.format(config.numberFormat || '.2s'))
            .html({
                none: config.template || '%number',
                one: config.template || '%number',
                some: config.template || '%number'
            });

        (chart as any).canResize = false;
        return chart;
    }

    private pieChart(selector: string, config: PieChartConfig): dc.PieChart {
        const dimensionGroup = this.createDimensionGroup(config.groupBy);
        const chart = dc.pieChart(selector);
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

        (chart as any).canResize = true;
        return chart;
    }

    private rowChart(selector: string, config: RowChartConfig): dc.RowChart {
        const dimensionGroup = this.createDimensionGroup(config.groupBy);
        const chart = dc.rowChart(selector);
        chart
            .dimension(dimensionGroup.dimension)
            .group(dimensionGroup.group)
            .height(config.height || null)
            .width(config.width || null)
            .xAxis().ticks(config.ticks || 4);
        
        if (config.elasticAxis) {
            chart.elasticX(true);
        }

        (chart as any).canResize = false;
        return chart;
    }

    private registerResize(): void {
        const handler = () => {
            dc.chartRegistry.list().forEach((chart, index) => {
                if (!(chart as any).canResize) {
                    return;
                }
                
                const bbox: ClientRect = (chart as any).root().node().parentNode.getBoundingClientRect();
                chart.width(bbox.width - 20);

                try {
                    (chart as any).rescale();
                }
                catch (ex) { }
                chart.redraw();
            });
        };
        handler();
        window.addEventListener('resize', handler, false);
    }

    private seriesChart(selector: string, config: SeriesChartConfig) {
        const dimension = this.index.dimension(d => [d[config.groupBy], d[config.timeField]]);
        const group = this.groupMode === 'sum'
            ? dimension.group().reduceSum(dc.pluck(this.sumBy))
            : dimension.group().reduceCount();
        const range = this.index.dimension(dc.pluck(config.timeField));
        const chart = dc.seriesChart(selector);
        chart
            .dimension(dimension)
            .group(group)
            .seriesAccessor(d => d.key[0])
            .keyAccessor(d => d.key[1])
            .valueAccessor(d => d.value)
            .x(d3.time.scale())
            .brushOn(false)
            .on('preRender', chart => {
                const dates = range.top(Infinity).map(dc.pluck(config.timeField)).sort(d3.ascending);
                const minDate = dates.length === 0 ? new Date(0) : dates[0];
                const maxDate = dates.length === 0 ? new Date(0) : dates[dates.length - 1];
                chart.x(d3.time.scale().domain([minDate, maxDate]));
            });

        (chart as any).canResize = true;
        return chart;
    }
}

export {DCChartProvider as dcChartProvider};
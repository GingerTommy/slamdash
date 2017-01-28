import * as d3 from 'd3';
import * as dc from 'dc';

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

        if (config.chartType === 'pie') {
            return this.pieChart(selector, config as PieChartConfig);
        }

        if (config.chartType === 'row') {
            return this.rowChart(selector, config as RowChartConfig);
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
}

export {DCChartProvider as dcChartProvider};
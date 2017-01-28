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
            .radius(config.radius || 100)
            .innerRadius(config.innerRadius || 0);
        
        if (config.cap) {
            chart.slicesCap(config.cap);
        }

        return chart;
    }

    private rowChart(selector: string, config: RowChartConfig): dc.RowChart {
        const dimensionGroup = this.createDimensionGroup(config.groupBy);
        const chart = dc.rowChart(selector);
        chart
            .dimension(dimensionGroup.dimension)
            .group(dimensionGroup.group)
            .xAxis().ticks(4);
        
        if (config.elasticAxis) {
            chart.elasticX(true);
        }

        return chart;
    }
}

export {DCChartProvider as dcChartProvider};
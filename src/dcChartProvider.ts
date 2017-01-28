import * as dc from 'dc';

class DCChartProvider implements ChartProvider {
    private dimensionGroups: { [id: string]: DimensionGroup } = {};
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

        return this;
    }

    private barChart(selector: string, config: BarChartConfig): dc.BarChart {
        const dimensionGroup = this.getDimensionGroup(config.groupBy);
        const chart = dc.barChart(selector);
        chart
            .dimension(dimensionGroup.dimension)
            .group(dimensionGroup.group);
        return chart;
    }

    private createDimensionGroup(dimensionProperty: string): DimensionGroup {
        const dimension = this.index.dimension(d => d[dimensionProperty]);
        const group = this.groupMode === 'sum'
            ? dimension.group().reduceSum(dc.pluck(this.sumBy))
            : dimension.group().reduceCount();
        const dimensionGroup: DimensionGroup = {
            dimension: dimension,
            group: group
        };
        this.dimensionGroups[dimensionProperty] = dimensionGroup;
        return dimensionGroup;
    }

    private getDimensionGroup(dimensionProperty: string): DimensionGroup {
        return this.dimensionGroups[dimensionProperty]
            || this.createDimensionGroup(dimensionProperty);
    }

    private pieChart(selector: string, config: PieChartConfig): dc.PieChart {
        const dimensionGroup = this.getDimensionGroup(config.groupBy);
        const chart = dc.pieChart(selector);
        chart
            .dimension(dimensionGroup.dimension)
            .group(dimensionGroup.group)
            .radius(config.radius || 100)
            .innerRadius(config.innerRadius || 0);
        return chart;
    }
}

export {DCChartProvider as dcChartProvider};
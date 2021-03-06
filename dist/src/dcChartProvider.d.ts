declare class DCChartProvider implements ChartProvider {
    private sumBy;
    private groupMode;
    private hasRendered;
    private index;
    constructor(sumBy?: string);
    addChart(selector: string, config: ChartConfig): any;
    addData(data: Array<any>): ChartProvider;
    loadComplete(): ChartProvider;
    refresh(): ChartProvider;
    private barChart(selector, config);
    private createDimensionGroup(dimensionProperty);
    private getFilteredCount(filter);
    private getFilteredSum(filter, sumBy);
    private itemTemplate(selector, config);
    private numberDisplay(selector, config);
    private pieChart(selector, config);
    private rowChart(selector, config);
    private registerResize();
    private seriesChart(selector, config);
}
export { DCChartProvider as dcChartProvider };

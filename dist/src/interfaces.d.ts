/// <reference types="crossfilter" />
interface CellInfo {
    title: string;
    description: string;
    hide: boolean;
}
interface ChartConfig {
    chartType: string;
    title?: string;
    description?: string;
}
interface ChartProvider {
    addChart(selector: string, config: ChartConfig): any;
    addData(data: Array<any>): ChartProvider;
    loadComplete(): ChartProvider;
    refresh(): ChartProvider;
}
interface DashboardConfig {
    selector: string;
    layoutName: string;
    charts: Array<ChartConfig>;
}
interface DimensionGroup {
    dimension: CrossFilter.Dimension<any, any>;
    group: CrossFilter.Group<any, any, any>;
}
interface LayoutProvider {
    getNamedLayout(name: string, cells: Array<CellInfo>): string;
}
interface CappedChart {
    cap?: number;
    hideOthers?: boolean;
}
interface CategorizedChart {
    colors?: {
        [category: string]: string;
    };
}
interface GroupedChart {
    groupBy: string;
}
interface BarChartConfig extends ChartConfig, GroupedChart, CategorizedChart {
    isOrdinal?: boolean;
}
interface PieChartConfig extends ChartConfig, CappedChart, GroupedChart, CategorizedChart {
    radius?: number;
    innerRadius?: number;
    labels?: number;
    showLegend?: boolean;
}
interface RowChartConfig extends ChartConfig, CappedChart, GroupedChart, CategorizedChart {
    elasticAxis?: boolean;
}

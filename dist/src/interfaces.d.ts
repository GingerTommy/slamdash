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
    height?: number;
    width?: number;
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
interface SortedChart {
    sortBy: string;
    sortOrder?: string;
}
interface BarChartConfig extends ChartConfig, GroupedChart, CategorizedChart {
    isOrdinal?: boolean;
}
interface ItemTemplateConfig extends ChartConfig, GroupedChart, SortedChart {
    groupTemplate?: string;
    itemTemplate?: string;
}
interface NumberDisplayConfig extends ChartConfig {
    filter?: (any) => boolean;
    numberFormat?: string;
    template: string;
    sumBy?: string;
}
interface PieChartConfig extends ChartConfig, CappedChart, GroupedChart, CategorizedChart {
    radius?: number;
    innerRadius?: number;
    labels?: number;
    showLegend?: boolean;
}
interface RowChartConfig extends ChartConfig, CappedChart, GroupedChart, CategorizedChart {
    elasticAxis?: boolean;
    ticks?: number;
}
interface SeriesChartConfig extends ChartConfig, CategorizedChart, GroupedChart {
    timeField?: string;
    valueField?: string;
}

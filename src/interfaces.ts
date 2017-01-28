interface CellInfo {
    title: string;
    description: string;
    hide: boolean;
}

interface ChartConfig {
    chartType: string;
    title?: string;
    description?: string;
    groupBy?: string;
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

interface BarChartConfig extends ChartConfig {
    isOrdinal?: boolean;
}

interface PieChartConfig extends ChartConfig {
    radius?: number;
    innerRadius?: number;
}
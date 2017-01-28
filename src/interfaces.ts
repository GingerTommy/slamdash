interface CellInfo {
    title: string;
    description: string;
    hide: boolean;
}

interface LayoutProvider {
    getNamedLayout(name: string, cells: Array<CellInfo>): string;
}

interface ChartConfig {
    chartType: string;
    groupBy?: string;
}

interface ChartProvider {
    addChart(selector: string, config: ChartConfig): any;
    addData(data: Array<any>): ChartProvider;
    loadComplete(): ChartProvider;
    refresh(): ChartProvider;
}
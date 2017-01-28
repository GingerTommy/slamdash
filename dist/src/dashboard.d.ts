declare class Dashboard {
    private layoutProvider;
    private chartProvider;
    private config;
    constructor(layoutProvider: LayoutProvider, chartProvider: ChartProvider, config: DashboardConfig);
    private drawCharts();
    private setLayout();
}
export { Dashboard as dashboard };

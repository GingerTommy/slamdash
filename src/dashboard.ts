import * as d3 from 'd3';

class Dashboard {
    constructor(private layoutProvider: LayoutProvider, private chartProvider: ChartProvider, private config: DashboardConfig) {
        this.setLayout();
        this.drawCharts();
    }

    private drawCharts(): void {
        this.config.charts.forEach((chartConfig, index) => {
            this.chartProvider.addChart(`#cell-${index}`, chartConfig);
        });
    }

    private setLayout(): void {
        const cells = this.config.charts.map<CellInfo>(chart => {
            return {
                title: chart.title,
                description: chart.description,
                hide: chart.chartType === 'blank'
            };
        });
        const layoutHtml = this.layoutProvider.getNamedLayout(this.config.layoutName, cells);
        d3.select(this.config.selector).html(layoutHtml);
    }
}

export {Dashboard as dashboard};
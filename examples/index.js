(function(sd) {
    var config = {
        selector: '#dashboard',
        layoutName: 'heroSidebar',
        charts: [
            {
                chartType: 'pie',
                title: 'Sum by Category',
                description: 'Total number of items, grouped by the category of media',
                groupBy: 'category',
                radius: 55,
                innerRadius: 40
            }
        ]
    };
    var layoutProvider = new sd.keenLayoutProvider();
    var chartProvider = new sd.dcChartProvider('count');
    var dashboard = new sd.dashboard(layoutProvider, chartProvider, config);

    chartProvider
        .addData([
            { title: 'Star Wars', category: 'Movies', count: 8 }
        ])
        .loadComplete()
        .refresh();
})(slamdash);
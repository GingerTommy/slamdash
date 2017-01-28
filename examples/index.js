(function(slam) {
    var config = {
        selector: '#dashboard',
        layoutName: 'heroSidebar',
        charts: [
            {
                chartType: 'row',
                title: 'Sum by Title',
                description: 'Total number of items, grouped by title',
                groupBy: 'title'
            }, {
                chartType: 'bar',
                title: 'Sum by Category',
                description: 'Total number of items, grouped by category',
                groupBy: 'category',
                isOrdinal: true
            }, {
                chartType: 'pie',
                title: 'Sum by Category',
                description: 'Total number of items, grouped by the category of media',
                groupBy: 'category',
                radius: 55,
                innerRadius: 40,
                cap: 1
            }, {
                chartType: 'number',
                title: 'Movies',
                numberFormat: 'g',
                filter: d => d.category === 'Movies'
            }, {
                chartType: 'number',
                title: 'TV',
                numberFormat: 'g',
                filter: d => d.category === 'TV'
            }
        ]
    };
    var layoutProvider = new slam.keenLayoutProvider();
    var chartProvider = new slam.dcChartProvider('count');
    var dashboard = new slam.dashboard(layoutProvider, chartProvider, config);

    chartProvider
        .addData([
            { title: 'Star Wars', category: 'Movies', count: 8 },
            { title: 'Star Wars', category: 'TV', count: 1 },
            { title: 'Star Trek', category: 'Movies', count: 7 },
            { title: 'Star Trek', category: 'TV', count: 6 }
        ])
        .loadComplete()
        .refresh();
})(slamdash);
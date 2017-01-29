(function(slam) {
    var config = {
        selector: '#dashboard',
        layoutName: 'heroThirds',
        charts: [
            {
                chartType: 'row',
                title: 'Sum by Title',
                description: 'Total number of items, grouped by title',
                groupBy: 'title',
                height: 240
            }, {
                chartType: 'pie',
                title: 'Sum by Category',
                description: 'Total number of items, grouped by the category of media',
                groupBy: 'category',
                radius: 100,
                innerRadius: 75,
                height: 240
            }, {
                chartType: 'template',
                title: 'Templated data',
                description: 'Handlebar templated output',
                groupBy: 'title',
                groupTemplate: '<ul><h3>{{key}}</h3>{{#values}}<li><strong>{{category}}</strong> - {{count}}</li>{{/values}}</ul>'
            }, {
                chartType: 'bar',
                title: 'Sum by Category',
                description: 'Total number of items, grouped by category',
                groupBy: 'category',
                height: 120,
                isOrdinal: true
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
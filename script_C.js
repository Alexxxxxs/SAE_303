window.onload = function () {
    // Couleurs spécifiques pour les types de motorisations
    const colors = {
        Diesel: '#FFD700', // Jaune
        Essence: '#32CD32', // Vert
        Électrique: '#1E90FF', // Bleu
        DieselHNR: '#FF4500' // Rouge
    };

    // Données pour le graphique en ligne
    const lineChartData = {
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        professionals: [173, 2506, 3401, 5665, 6749, 7275, 9486, 12412, 17630, 22631, 50823, 67046, 72882],
        individuals: [5, 87, 2196, 3197, 3873, 10172, 12681, 12928, 14044, 20913, 61577, 98429, 134289]
    };

    // Initialisation du graphique en ligne
    const lineChart = echarts.init(document.getElementById('line-chart'));
    const lineOptions = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Professionnels', 'Particuliers'],
            top: 'bottom'
        },
        xAxis: {
            type: 'category',
            data: lineChartData.years
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Professionnels',
                type: 'line',
                data: lineChartData.professionals,
                lineStyle: { color: colors.Diesel },
                itemStyle: { color: colors.Diesel }
            },
            {
                name: 'Particuliers',
                type: 'line',
                data: lineChartData.individuals,
                lineStyle: { color: colors.Électrique },
                itemStyle: { color: colors.Électrique }
            }
        ]
    };
    lineChart.setOption(lineOptions);

    // Données pour le graphique en camembert
    const pieChartData = {
        labels: ['Essence', 'Électrique', 'DieselHNR', 'Diesel'],
        series: [38, 25, 20.3, 16.7] // Données en pourcentage
    };

    // Initialisation du camembert
    const pieChart = echarts.init(document.getElementById('pie-chart'));
    const pieOptions = {
        color: [colors.Essence, colors.Électrique, colors.DieselHNR, colors.Diesel],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}% ({d}%)'
        },
        legend: {
            top: 'bottom'
        },
        series: [
            {
                name: 'Types de Motorisations',
                type: 'pie',
                radius: '50%',
                data: pieChartData.labels.map((label, index) => ({
                    value: pieChartData.series[index],
                    name: label
                })),
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    pieChart.setOption(pieOptions);

    // Données pour le graphique en barres empilées
    const stackedBarData = {
        years: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        Diesel: [73.0, 67.0, 64.0, 58.0, 52.0, 47.3, 39.0, 34.1, 31.0, 21.1, 16.7],
        Essence: [25.0, 30.0, 33.0, 38.0, 43.0, 47.9, 55.0, 57.9, 54.8, 50.0, 38.0],
        DieselHNR: [1.5, 2.5, 2.5, 3.5, 4.5, 4.8, 5.0, 6.0, 7.2, 12.0, 20.3],
        Électrique: [0.5, 0.5, 0.5, 0.5, 0.5, 1.0, 1.0, 2.0, 7.0, 16.9, 25.0]
    };

    // Initialisation du graphique en barres empilées
    const stackedBarChart = echarts.init(document.getElementById('stacked-bar-chart'));
    const stackedBarOptions = {
        color: [colors.Diesel, colors.Essence, colors.DieselHNR, colors.Électrique],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Diesel', 'Essence', 'DieselHNR', 'Électrique'],
            top: 'bottom'
        },
        xAxis: {
            type: 'category',
            data: stackedBarData.years
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Diesel',
                type: 'bar',
                stack: 'total',
                data: stackedBarData.Diesel
            },
            {
                name: 'Essence',
                type: 'bar',
                stack: 'total',
                data: stackedBarData.Essence
            },
            {
                name: 'DieselHNR',
                type: 'bar',
                stack: 'total',
                data: stackedBarData.DieselHNR
            },
            {
                name: 'Électrique',
                type: 'bar',
                stack: 'total',
                data: stackedBarData.Électrique
            }
        ]
    };
    stackedBarChart.setOption(stackedBarOptions);
};

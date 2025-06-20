window.onload = function () {


    // Données pour la répartition par tranche d'âge
    const ageDistributionData = {
        categories: ["18 à 25 ans", "25 à 40 ans", "40 à 55 ans", "55 à 65 ans", "65 ans et plus", "Ensemble"],
        electric: [11.7, 27.1, 25.1, 14.6, 9.5, 18.3],
        hybrid: [1.0, 3.2, 4.5, 5.3, 4.8, 4.5],
    };

    const ageChart = echarts.init(document.getElementById('age-distribution-chart'));
    ageChart.setOption({
        tooltip: { trigger: 'axis' },
        legend: { data: ['Électriques', 'Hybrides Rechargeables'] },
        xAxis: { type: 'category', data: ageDistributionData.categories },
        yAxis: { type: 'value', name: 'Part (%)' },
        series: [
            { name: 'Électriques', type: 'bar', data: ageDistributionData.electric },
            { name: 'Hybrides Rechargeables', type: 'bar', data: ageDistributionData.hybrid },
        ],
    });


    // Données pour les motivations d'achat
    const motivationsData = {
        categories: [
            "Réduction de l'empreinte carbone",
            "Économies sur le carburant",
            "Incitations fiscales",
            "Réduction des nuisances sonores",
        ],
        values: [40, 30, 20, 10], // Pourcentages approximatifs
    };

    const motivationsChart = echarts.init(document.getElementById('motivations-chart'));
    motivationsChart.setOption({
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c}%' },
        series: [
            {
                name: 'Motivations',
                type: 'pie',
                radius: '50%',
                data: motivationsData.categories.map((category, index) => ({
                    value: motivationsData.values[index],
                    name: category,
                })),
            },
        ],
    });

    // Données pour le lieu de résidence
    const residenceData = {
        categories: ["Milieu Urbain", "Milieu Rural"],
        values: [71, 29], // Pourcentages des résidences urbaines et rurales
    };

    const residenceChart = echarts.init(document.getElementById('residence-chart'));
    residenceChart.setOption({
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: residenceData.categories },
        yAxis: { type: 'value', name: 'Pourcentage' },
        series: [
            {
                name: 'Lieu de Résidence',
                type: 'bar',
                data: residenceData.values,
                itemStyle: { color: '#4CAF50' },
            },
        ],
    });

    // Données pour la répartition par sexe
    const genderData = {
        categories: ["Hommes", "Femmes"],
        values: [85, 15], // Répartition approximative des sexes
    };

    const genderChart = echarts.init(document.getElementById('gender-chart'));
    genderChart.setOption({
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c}%' },
        series: [
            {
                name: 'Sexe',
                type: 'pie',
                radius: '50%',
                data: genderData.categories.map((category, index) => ({
                    value: genderData.values[index],
                    name: category,
                })),
            },
        ],
    });
};

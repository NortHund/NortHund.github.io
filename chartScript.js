var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'Total dividends received by year',
            backgroundColor: 'rgb(0, 82, 33)',
            borderColor: 'rgb(0, 82, 33)',
            data: []
        }]
    },

    // Configuration options go here
    options: {}
});

function updateChart(chart, year, money) {
    chart.data.labels.push(year);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(money);
    });
    chart.update();
}

function clearChart(chart) {
    chart.data.labels.pop();
    chart.data.labels = [];
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
        dataset.data = [];
    });

    chart.update();
}
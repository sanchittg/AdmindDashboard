const barchart = document.getElementById('barchart');
const doughnut = document.getElementById('doughnut');

new Chart(barchart, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3, 7, 19, 12, 5, 9, 16],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(doughnut, {
    type: 'doughnut',
    data: {

        datasets: [{
            // label: ['Yandex', 'You Tube', 'Facebook', 'Instagram', 'Google'],
            data: [300, 500, 150, 100, 50],
            backgroundColor: [
                'rgb(255, 211, 51)',
                'rgb(230, 46, 46)',
                'rgb(51, 119, 255)',
                'rgb(41, 204, 204)',
                'rgb(91, 244, 15)'
            ],
            hoverOffset: 5
        }]
    }
});



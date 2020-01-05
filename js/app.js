// STARTs Set up Alert Banner //
const alertBanner = document.getElementById("alert");

alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
<p class="alert-banner-close">x</p>
</div> `

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});
// ENDs Set up Alert Banner //

// STARTs Set up Traffic Chart //
const trafficCanvas = document.querySelector("#traffic-chart");

let trafficData = {
    labels: [
        "16-22",
        "23-29",
        "30-5", 
        "6-12", 
        "13-19", 
        "20-26", 
        "27-3",
        "4-10", 
        "11-17", 
        "18-24", 
        "25-31"
    ],
    datasets: [{
    data: [750, 
        1250, 
        1000, 
        2000, 
        1500, 
        1750, 
        1250, 
        1850, 
        2250, 
        1500,
        2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
            beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});
// ENDs Set up Traffic Chart //


// STARTs Set up Daily Chart //
const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 
            115, 
            175, 
            125, 
            225, 
            200, 
            100],
        backgroundColor: '#7477BF',
        borderWidth: 1
        }]
    };
    const dailyOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend : {
            display: false
        }
    }

    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
});

// ENDs Set up Daily Chart //
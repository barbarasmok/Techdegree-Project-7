const trafficCanvas = document.querySelector("#traffic-chart");
const trafficNav = document.querySelector(".traffic-nav");
 
// CHART INFORMATION
// HOURLY
const hourlyData = [750, 1250, 825, 1400, 2000, 1400, 1750, 1250, 1750, 2250, 1750, 2250];
const hourlyLabels = [
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm"
];
 
// DAILY
const dailyLabels = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
 
// WEEKLY
const weeklyData = [112, 421, 533, 542, 523, 555, 423, 332, 312, 280, 250];
const weeklyLabels = [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-15",
    "18-24",
    "25-31"
  ];
 
// MONTHLY
const monthlyData = [750, 620, 585, 700, 1250, 2150, 1900, 1200, 810, 640, 500, 514];
const monthlyLabels = [
    "JAN",
    "FEB",
    "MARCH",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC"
];
 

///////////////////////////////////////////
// STARTs Set up Traffic Chart Functions //
const updateChart = (type, labels, data) => {
    // code to be executed
    if (labels === 'hourly') {
        trafficData.labels = hourlyLabels;
        trafficData.datasets[0] = hourlyData;
      } else if (labels === 'daily') {
        trafficData.labels = dailyLabels;
        trafficData.datasets[0] = dailyData;
      } else if (labels === 'weekly') {
        trafficData.labels = weeklyLabels;
        trafficData.datasets[0] = weeklyData;
      } else if (labels === 'monthly') {
        trafficData.labels = monthlyLabels;
        trafficData.datasets[0] = monthlyData;
      }
}
 
trafficNav.addEventListener('click', e => {
    // Check if the clicked element is a list item
    if (e.target.tagName === 'LI') {
      let link = e.target;
      // If the clicked link is Hourly
      if (link.textContent === 'Hourly') {
        // Call the updateChart function to update the chart data
        updateChart('hourly', hourlyData, hourlyLabels);
      } // If the clicked link is Daily
      if (link.textContent === 'Daily') {
         updateChart('daily', dailyData, dailyLabels);
      } // If the clicked link is Weekly
      if (link.textContent === 'Weekly') {
         updateChart('weekly', weeklyData, weeklyLabels);
      } // If the clicked link is Monthly
      if (link.textContent === 'Monthly') {
         updateChart('monthly', monthlyData, monthlyLabels);
      }
    }
});
 
trafficNav.addEventListener('click', e => {
    // Check if the clicked element is a list item
    if (e.target.tagName === 'LI') {
      let link = e.target;
      // If the clicked link is Hourly
      if (link.textContent === 'Hourly') {
        // Call the updateChart function to update the chart data
        updateChart('hourly', hourlyData, hourlyLabels);
      } // If the clicked link is Daily
      if (link.textContent === 'Daily') {
         updateChart('daily', dailyData, dailyLabels);
      } // If the clicked link is Weekly
      if (link.textContent === 'Weekly') {
         updateChart('weekly', weeklyData, weeklyLabels);
      } // If the clicked link is Monthly
      if (link.textContent === 'Monthly') {
         updateChart('monthly', monthlyData, monthlyLabels);
      }
    }
});
 
let trafficData = {
    labels:hourlyLabels,
    datasets: [{
        data: hourlyData,
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
    legend: {
        display: false
    }
};
 
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});
// ENDs Set up Traffic Chart //
//////////////////////////////
 


/////////////////////////////////
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
/////////////////////////////
 
 
/////////////////////////////////
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
///////////////////////////////// 


///////////////////////////////// 
// STARTs Set up Mobile Chart //
const mobileCanvas = document.getElementById("mobile-users-chart");
 
const mobileData = {
    labels: [
        "Desktop",
        "Tablet",
        "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
        ]
    }]
};
 
const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
}
 
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});
 
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');
 
send.addEventListener('click', (e) => {
    if (user.value && message.value === "") {
        alert("This message and user field is empty. Please fill");
    } else if (user.value === "") {
        alert("Fill message before pressing send");
    } else if (message.value === "") {
        alert("Fill uer field before pressing send");
    } else {
        alert("Message was sent");
    }
});
// ENDs Set up Mobile Chart //
/////////////////////////////
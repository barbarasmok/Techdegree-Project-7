const alertBanner = document.getElementById("alert");
const settingsAlert = document.getElementById('settingsAlert');

const notificationBell = document.getElementById('notificationBell');
const notificationDiv = notificationBell.parentNode;
const notificationTray = document.getElementById('notifications');

const trafficCanvas = document.querySelector("#traffic-chart");
const trafficNav = document.querySelector(".traffic-nav");
const mobileCanvas = document.getElementById("mobile-users-chart");
const dailyCanvas = document.getElementById("daily-chart");


const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');
const alert = document.getElementById('messageSent');
const userList = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];

let emailSetting = document.getElementById('email-checkbox');
let profileSetting = document.getElementById('profile-checkbox');
let timezoneSetting = document.getElementById('timezoneStorage');

const saveButton = document.getElementById('save');
const cancelButton = document.getElementById('cancel');

//Notification Tray
notificationBell.addEventListener('click', (e) => {
    if (notificationTray.style.display === ""){
        notificationTray.style.display = "block";
    } else if (notificationTray.style.display === "block"){
        notificationTray.style.display = "";
    }
})

notificationTray.addEventListener('click', (e) => {
     if(e.target.classList.contains('alert-banner-close')){
         e.target.parentNode.style.display = 'none';
     }
});

//Alert Banner
alertBanner.innerHTML = 
`
<div class="alert-banner">
<p class="alertText"><strong>Alert:</strong> You have <strong>2</strong> overdue tasks to complete</p>
<p class="alert-banner-close">x</p>
</div> `

alertBanner.addEventListener('click', (e) => {
     if(event.target.classList.contains('alert-banner-close')){
         alertBanner.style.display = 'none';
    }
 });
 
// Charts
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
 
// Set up Traffic Chart Functions //
 
const updateChart = activity => {
    // code to be executed
    if (activity === 'hourly') {
        trafficData.labels = hourlyLabels;
        trafficData.datasets.data = hourlyData;
      } else if (activity === 'daily') {
        trafficData.labels = dailyLabels;
        trafficData.datasets.data = dailyData.data;
      } else if (activity === 'weekly') {
        trafficData.labels = weeklyLabels;
        trafficData.datasets.data = weeklyData;
      } else if (activity === 'monthly') {
        trafficData.labels = monthlyLabels;
        trafficData.datasets.data = monthlyData;
      }
      trafficChart.update();
}
 
trafficNav.addEventListener('click', e => {
    // Check if the clicked element is a list item
    if (e.target.tagName === 'LI') {
      let link = e.target;
      // If the clicked link is Hourly
      if (link.textContent === 'Hourly') {
        // Call the updateChart function to update the chart data
        updateChart('hourly');
      } // If the clicked link is Daily
      if (link.textContent === 'Daily') {
         updateChart('daily');
      } // If the clicked link is Weekly
      if (link.textContent === 'Weekly') {
         updateChart('weekly');
      } // If the clicked link is Monthly
      if (link.textContent === 'Monthly') {
         updateChart('monthly');
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

 
 
 
// Set up Daily Chart // 
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

 
 
// Set up Mobile Chart //
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
 

// Set up FORM Settings - Message User //
// $('#userField').autocomplete({
//     source: userList,
// });

send.addEventListener('click', (e) => {
    e.preventDefault();
    if (user.value === '' && message.value === ''){
        alert.innerHTML = '<div class="errorAlert"><p>User field cannot be empty. Message field cannot be empty.</p><p class="alert-banner-close">X</p></div>';
    } else if (user.value === ''){
        alert.innerHTML = '<div class="errorAlert"><p>User field cannot be empty.</p><p class="alert-banner-close">X</p></div>';
    } else if (message.value === '') {
        alert.innerHTML = '<div class="errorAlert"><p>Message field cannot be empty.</p><p class="alert-banner-close">X</p></div>';
    } else {
        alert.innerHTML = '<div class="alertBanner"><p>Message sent.</p><p class="alert-banner-close">X</p></div>';
    }

});

alert.addEventListener('click', (e) => {
   if(event.target.classList.contains('alert-banner-close')){
        alert.innerHTML="";
    }
});


//Set up Local Storage Save + Cancel Buttons
saveButton.addEventListener('click', (e) => {
    e.preventDefault();
    let isEmailChecked = emailSetting.checked;
    let isProfileSettingChecked = profileSetting.checked;
    let timezoneSettingSelected = timezoneSetting.value;
    localStorage.setItem('email', isEmailChecked);
    localStorage.setItem('profile', isProfileSettingChecked);
    localStorage.setItem('timezone', timezoneSettingSelected);
    settingsAlert.innerHTML='<div class="alertBanner"><p class="saveAlertText">Settings Saved!</p><p class="alert-banner-close-save">X</p></div>';
});

cancelButton.addEventListener('click', (e) => {
    localStorage.setItem('email', false);
    localStorage.setItem('profile', false);
    localStorage.setItem('timezone', "00000");
    settingsAlert.innerHTML='<div class="alertBanner"><p class="saveAlertText">Settings Reset.</p><p class="alert-banner-close-cancel">X</p></div>';
});

settingsAlert.addEventListener('click', (e) => {
    if(e.target.classList.contains('alert-banner-close-save')){
        settingsAlert.innerHTML="";
    } else if (e.target.classList.contains ('alert-banner-close-cancel')) {
        settingsAlert.innerHTML="";
    }
})

emailSetting.checked = JSON.parse(localStorage.getItem('email'));
profileSetting.checked = JSON.parse(localStorage.getItem('profile'));
timezoneSetting.value = localStorage.getItem('timezoneStorage');


// Set up Toogle Switches //
const  checkedEmail= JSON.parse(localStorage.getItem("email-checkbox"));
document.getElementById("email-checkbox").checked = checkedEmail;

const checkedProfile = JSON.parse(localStorage.getItem("profile-checkbox"));
document.getElementById("profile-checkbox").checked = checkedProfile;




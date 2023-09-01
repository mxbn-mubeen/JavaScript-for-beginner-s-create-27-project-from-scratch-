// Function to calculate remaining time
function getTimeRemaining(endtime) {
    // Calculate the time difference between the endtime and the current time
    var t = Date.parse(endtime) - Date.parse(new Date());
    
    // Calculate days, hours, minutes, and seconds from the time difference
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    // Return an object containing the calculated time components
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

// Function to initialize the countdown clock
function initializeClock(id, endtime) {
    // Get references to DOM elements
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    // Function to update the clock display
    function updateClock() {
        // Get the remaining time from getTimeRemaining function
        var t = getTimeRemaining(endtime);

        // Update the DOM elements with the calculated time components
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2); // Add leading zero if needed
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        // Clear the interval if the countdown is finished
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    // Call updateClock function to initially display the time
    updateClock();
    // Update the clock display every second
    var timeinterval = setInterval(updateClock, 1000);
}

// Calculate the deadline (7 days from now)
var deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
// Initialize the countdown clock with the specified deadline
initializeClock('clockdiv', deadline);

// Function to update the clock
function updateClock() {
    // Get the current time
    const now = new Date();

    // Get the hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros if time values are less than 10
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    // Update the time in the HTML elements
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Update the clock every second (1000ms)
setInterval(updateClock, 1000);

// Initial call to display the clock immediately when the page loads
updateClock();

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').innerText = timeString;
}

setInterval(updateClock, 1000); // Update every second
updateClock(); // Initial call to display immediately

 
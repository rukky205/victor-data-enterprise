function alert2(){
  alert("Congrats you have made your first transaction")
}
// Set initial time in seconds
let timeLeft = 2 * 24 * 60 * 60; // 2 days * 24 hours/day * 60 minutes/hour * 60 seconds/minute
// Function to update the timer display
function updateTimer() {
  // Calculate days, hours, minutes, and seconds from remaining time
  let days = Math.floor(timeLeft / (24 * 60 * 60));
  let hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  let minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  let seconds = timeLeft % 60;
  // Format the time string
  let formattedTime = `${days.toString().padStart(2, '0')}d:${hours.toString().padStart(2, '0')}h:${minutes.toString().padStart(2, '0')}m:${seconds.toString().padStart(2, '0')}s`;
  // Update the timer display
  document.getElementById('timer').textContent = formattedTime;
  // Decrement the time
  timeLeft--;
  // Stop the timer when time is up
  if (timeLeft < 0) {
    clearInterval(timerInterval);
    // Do something when the timer ends (e.g., display a message)
    alert("Time's up!");
  }
}
// Start the timer
let timerInterval = setInterval(updateTimer, 1000); // Update every 1 second
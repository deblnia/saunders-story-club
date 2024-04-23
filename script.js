let timer;
let countdown;

function startTimer() {
  // Set end time to 45 minutes from now
  const endTime = Date.now() + 45 * 60 * 1000; 
  displayTimeRemaining(endTime);

  timer = setInterval(function() {
    displayTimeRemaining(endTime);
  }, 1000);
  
  countdown = setTimeout(function() {
    clearInterval(timer);
    alert("Time's up!");
  }, 45 * 60 * 1000);
}
function displayTimeRemaining(endTime) {
  const remainingTime = Math.max(0, endTime - Date.now()); 
  // Ensure remaining time is not negative
  const remainingTime = Math.max(0, endTime - Date.now()); 
  if (remainingTime === 0) {
    clearInterval(timer);
    document.getElementById('timer').innerText = `Time's up!`;
    return;
  }
  const minutes = Math.floor(remainingTime / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  document.getElementById('timer').innerText = `Time remaining: ${minutes} minutes ${seconds} seconds`;
}


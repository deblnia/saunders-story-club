let timer;
let countdown;
let isTimerStarted = false;

function startTimer() {
  if (isTimerStarted) return; // Prevent the timer from restarting if already started
  isTimerStarted = true;
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
  if (remainingTime === 0) {
    clearInterval(timer);
    document.getElementById('timer').innerText = `Time's up!`;
    return;
  }
  const minutes = Math.floor(remainingTime / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  document.getElementById('timer').innerText = `Time remaining: ${minutes} minutes ${seconds} seconds`;
}

function checkUniqueWords(){
  const text = document.getElementById('text').innerText;
  const words = text.match(/\b(\w+)\b/g); // Split text into words using a regular expression
  const uniqueWords = new Set(words.map(word => word.toLowerCase())); // Store unique words case-insensitively
  if (uniqueWords.size > 50) {
    alert(`You've used ${uniqueWords.size} unique words, which exceeds the limit of 50!`);
  } else {
    console.log(`You've used ${uniqueWords.size} unique words so far.`);
  }
}
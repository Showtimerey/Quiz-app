// LIST OF MVPs (2016 to 2026)
// ARRAY: Stores the MVP names in order by year (2016 = index 0)
const mvps = {
  2016: "Stephen Curry",
  2017: "Russell Westbrook",
  2018: "James Harden",
  2019: "Giannis Antetokounmpo",
  2020: "Giannis Antetokounmpo",
  2021: "Nikola Jokic",
  2022: "Nikola Jokic",
  2023: "Joel Embiid",
  2024: "Nikola Jokic",
  2025: "Shai Gilgeous-Alexander",
  2026: "Shai Gilgeous-Alexander"
};

// GET HTML ELEMENTS
const playerInput = document.getElementById("player-input");
const messageDisplay = document.getElementById("message-display");

// EVENT LISTENER: Listens for the "Enter" key press inside the search bar
playerInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

// FUNCTION: Runs when user presses Enter to check their guess
function checkGuess() {
  const userGuess = playerInput.value.trim().toLowerCase();
  let matchFound = false;

  // Clear previous message
  messageDisplay.textContent = "";

  // Check each year in our mvps object
  for (let year in mvps) {
    const mvpName = mvps[year];
    
    // CONDITION: Compare user guess to real MVP name (case-insensitive)
    if (userGuess === mvpName.toLowerCase()) {
      // Find the specific bracket element for this year
      const yearWinnerSpan = document.querySelector(`#year-${year} .winner`);
      yearWinnerSpan.textContent = mvpName;
      matchFound = true;
    }
  }

  // CONDITION: If no match was found, show "incorrect" message
  if (!matchFound) {
    messageDisplay.textContent = "Incorrect";
  }

  // Reset the input search bar
  playerInput.value = "";
}
// TIMER VARIABLES
let totalTimeInSeconds = 300; // 5 minutes = 300 seconds
const timerDisplay = document.getElementById("timer-display");

// FUNCTION: Starts and controls the 5-minute countdown
function startTimer() {
  const countdownInterval = setInterval(function() {
    let minutes = Math.floor(totalTimeInSeconds / 60);
    let seconds = totalTimeInSeconds % 60;

    // Formatting single digits (e.g., 05 instead of 5)
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    timerDisplay.textContent = `Time: ${minutes}:${seconds}`;

    // CONDITION: Stop timer when time reaches 0
    if (totalTimeInSeconds <= 0) {
      clearInterval(countdownInterval);
      playerInput.disabled = true; // Disable input box
      messageDisplay.textContent = "Time's up! Game over.";
    } else {
      totalTimeInSeconds--;
    }
  }, 1000); // Runs every 1 second (1000ms)
}

// Start the timer when the script loads
startTimer();
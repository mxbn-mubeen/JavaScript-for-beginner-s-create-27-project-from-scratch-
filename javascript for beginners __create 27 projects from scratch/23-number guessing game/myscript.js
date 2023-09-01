// Generate a random number between 1 and 500
var randomNumber = Math.floor(Math.random() * 500) + 1;

// Get references to various elements on the page
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;

// Function to check the user's guess
function checkGuess() {
  var userGuess = Number(guessField.value);
  
  // Display "Previous guesses" if it's the first guess
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses:';
  }
  
  // Add the user's guess to the list of previous guesses
  guesses.textContent += ' ' + userGuess;
  
  // Change background color to blue
  guesses.style.backgroundColor = 'blue';
  
  if (userGuess === randomNumber) {
    // If the guess is correct
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    // If the maximum number of guesses has been reached
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    // If the guess is wrong
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
  
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

// Listen for click events on the "Submit guess" button
guessSubmit.addEventListener('click', checkGuess);

// Function to handle the end of the game
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

// Function to reset the game to its initial state
function resetGame() {
  guessCount = 1;
  var resetParas = document.querySelectorAll('.resultParas p');
  
  // Clear result paragraphs
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }
  
  // Remove the reset button
  resetButton.parentNode.removeChild(resetButton);
  
  // Enable input and reset values
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  
  // Reset background colors
  lastResult.style.backgroundColor = '#12aab4';
  guesses.style.backgroundColor = '#12aab4';
  
  // Generate a new random number
  randomNumber = Math.floor(Math.random() * 500) + 1;
}

// Generate random numbers for the addition game
var number1; // Declare variable for the first random number
var number2; // Declare variable for the second random number

// Generate random numbers between 1 and 10 for number1 and number2
number1 = Math.floor((Math.random() * 10) + 1);
number2 = Math.floor((Math.random() * 10) + 1);

// Display the generated random numbers in their respective elements
document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

// Calculate the correct answer
var answer = number1 + number2;

// Get the input field and its value
var checkAnswer = document.querySelector('input[type=text]');
var value = checkAnswer.value;

// Get the "check" button element
var btn = document.querySelector('input[type=button][value=check]');

// Attach a click event handler to the "check" button
btn.onclick = function () {
  value = checkAnswer.value; // Get the entered answer

  // Compare the entered answer with the correct answer
  if (value == answer) {
    alert('You are correct'); // Display a correct answer message
  } else {
    alert('You are incorrect, the answer was ' + answer); // Display an incorrect answer message
  }

  checkAnswer.value = ""; // Clear the input field

  // Generate new random numbers for the next round
  number1 = Math.floor((Math.random() * 10) + 1);
  number2 = Math.floor((Math.random() * 10) + 1);

  // Update the displayed random numbers
  document.getElementById("number1").innerHTML = number1;
  document.getElementById("number2").innerHTML = number2;

  // Calculate the new correct answer
  answer = number1 + number2;
};
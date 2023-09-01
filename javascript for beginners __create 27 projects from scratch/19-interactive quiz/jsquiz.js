// JavaScript in jsquiz.js

// Array of quiz questions and answers
var questions = [
  {
    question: "Who is the god of genjustu ?",
    choices: [ "Madara Uchicha", "Itachi Uchicha","Sasuke Uchicha", "Obita Uchicha"],
    correctAnswer: 1
  },
  
    {
      question: "Who is the writer of one peice",
      choices: ["Eachira oda", "Kubo", "Kishimoto", "Kentaro Muira"],
      correctAnswer: 0
    },
    {
      question: "Who is the main character of one peice",
      choices: ["Monkey.D.luffy", "Naruto", "Ichigo", "Tanjiro"],
      correctAnswer: 0
    },

];

// Initialize variables
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

// Document ready event handler
$(document).ready(function () {
  // Display the first question
  displayCurrentQuestion();

  // Hide quiz message
  $(".quizMessage").hide();

  // Next button click event
  $(".nextButton").on("click", function () {
    if (quizOver) {
      // Handle end of quiz
      displayQuizResults();
    } else {
      // Handle user's choice
      var selectedChoice = $("input[name=dynradio]:checked").val();
      if (selectedChoice === undefined) {
        // Display a message indicating that the user must select an answer
        $(".quizMessage").text("Please select an answer.");
        $(".quizMessage").show();
      } else {
        // Check the answer
        if (parseInt(selectedChoice) === questions[currentQuestion].correctAnswer) {
          correctAnswers++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
          // Display the next question
          displayCurrentQuestion();
          // Clear the selected choice
          $("input[name=dynradio]:checked").prop("checked", false);
          // Hide quiz message
          $(".quizMessage").hide();
        } else {
          // Quiz is over, display results
          quizOver = true;
          displayQuizResults();
        }
      }
    }
  });
});

// Function to display the current question and its choices
function displayCurrentQuestion() {
  var question = questions[currentQuestion].question;
  var questionClass = $(".quizContainer > .question");
  var choiceList = $(".quizContainer > .choiceList");
  var numChoices = questions[currentQuestion].choices.length;

  // Display the question text
  $(questionClass).text(question);

  // Clear any existing choices
  $(choiceList).empty();

  // Loop through choices and add radio buttons and labels
  for (var i = 0; i < numChoices; i++) {
    var choice = questions[currentQuestion].choices[i];
    var choiceHtml = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>';
    $(choiceList).append(choiceHtml);
  }
}


// Function to display quiz results
function displayQuizResults() {
  var resultClass = $(".quizContainer > .result");
  var score = (correctAnswers / questions.length) * 100;
  var message = "Your score: " + score.toFixed(2) + "%"; // Display score with two decimal places

  // Display the result message
  console.log("Correct Answers:", correctAnswers);
  console.log("Total Questions:", questions.length);
  console.log("Calculated Score:", score);

  $(resultClass).text(message);
  $(resultClass).show();
}

// ... (remaining code)

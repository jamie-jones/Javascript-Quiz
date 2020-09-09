// console.log("hello");
// Variables
var countdown = document.getElementById("timer");
var startPage = document.getElementById("start");
var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var questions = document.getElementById("question");
var answers = document.getElementById("answers");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var answer5 = document.getElementById("answer5");
var highScore = document.getElementById("end-score");
var endQuizPage = document.getElementById("all-done");
// start page
var secondsLeft = 75;

startButton.addEventListener("click", function () {
  //   console.log("You clicked me");
  firstQuestion();
  setTimer();
});

function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    countdown.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      countdown.textContent = 0;
    }
  }, 1000);
}

// object array of questions/answers
var questions = [
  {
    question1: "Commonly used data types DO NOT include:",
    answer1: "1. strings",
    answer2: "2. Booleans",
    right: "3. alerts",
    answer3: "4. numbers",
  },

  {
    question2: "The condition in an if/else statement is enclosed within____.",
    answer1: "1. quotes",
    right: "2. curly brackets",
    answer2: "3. parentheses",
    answer3: "4.square brackets",
  },
  {
    question3: "Arrays in JavaScript can be used to store _____.",
    answer1: "1. numbers and strings",
    answer2: "2. other arrays",
    answer3: "3. Booleans",
    right: "4. all of the above",
  },
  {
    question4:
      "String values must be enclosed within _____ when being assigned to variables.",
    answer1: "commas",
    answer2: "curly brackets",
    right: "quotes",
    answer3: "parentheses",
  },
  {
    question5:
      "A very useful took used during development and debugging for printing content to the debugger is:",
    answer1: "JavaScript",
    answer2: "terminal/bash",
    answer3: "for Loops",
    right: "console.log",
  },
];

// question 1
function firstQuestion() {
  startPage.classList.add("hide");
  questionContainer.classList.remove("hide");
  answers.classList.remove("hide");
  questions.classList.remove("hide");
  questions.innerText = questions.question1;
  //   answer1.classList.remove("hide");
}

// question 2

// question 3

// question 4

// End

// High score

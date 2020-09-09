// create var for button, highscore, timer, intro wordd
// create arrays for the questions.
// Final score page
// Highscore page
// // set time to 75 seconds and make countdown
// var timeEl = 75;
// var button = document.querySelector("#button");
// var intro = document.querySelector(".introWords");
// var countdown = document.querySelector("#countdown");

// Array of objects of questions and answers with give correct answer as "true".
var questions = [
  {
    pregunta: "Commonly used data types DO NOT include:",
    answers: [
      { choices: "1. strings", correct: false },
      { choices: "2. Booleans", correct: false },
      { choices: "3. alerts", correct: true },
      { choices: "4. numbers", correct: false },
    ],
  },

  {
    pregunta: "The condition in an if/else statement is enclosed within____.",
    answers: [
      { choices: "1. quotes", correct: false },
      { choices: "2. curly brackets", correct: true },
      { choices: "3. parentheses", correct: false },
      { choices: "4.square brackets", correct: false },
    ],
  },
  {
    pregunta: "Arrays in JavaScript can be used to store _____.",
    answers: [
      { choices: "1. numbers and strings", correct: false },
      { choices: "2. other arrays", correct: false },
      { choices: "3. Booleans", correct: false },
      { choices: "4. all of the above", correct: true },
    ],
  },
  {
    pregunta:
      "String values must be enclosed within _____ when being assigned to variables.",
    answers: [
      { choices: "commas", correct: false },
      { choices: "curly brackets", correct: false },
      { choices: "quotes", correct: true },
      { choices: "parentheses", correct: false },
    ],
  },
  {
    pregunta:
      "A very useful took used during development and debugging for printing content to the debugger is:",
    answers: [
      { choices: "JavaScript", correct: false },
      { choices: "terminal/bash", correct: false },
      { choices: "for Loops", correct: false },
      { choices: "console.log", correct: true },
    ],
  },
];

// console.log(choices);
// Array of correct answers
// var answers = [3, 2, 4, 3, 4];
// console.log(answers);

// function setTime() {
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timer.textContent = "Time: " + secondsLeft;

//     if (secondsLeft === 0) {
//       // timer.textContent = " ";
//       clearInterval(timerInterval);
//     }
//   }, 1000);
// },

// setTime();

// Creating variables from IDs and classes from HTML
var instructions = document.querySelector(".instructions");
var intro = document.querySelector(".intro-words");
var start = document.querySelector("#start");
var btn = document.querySelectorAll(".btn");
var quiz = document.querySelector("#quiz");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var scoreBoard = document.querySelector("#score");
var timer = document.querySelector(".timer");
var nav = document.querySelector("nav");
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainer = document.getElementById("question-container");
var shuffledQuestions, currentQuestionIndex;
// var shuffledQuestions;
// // Time starts at 75 before countdown begins
var secondsLeft = 75;
// console.log(secondsLeft);

//This listens to the click of the start button to begin the actions in these functions
startButton.addEventListener("click", startQuiz);

// The start of the quiz begins with this function
function startQuiz() {
  // console.log("started");
  // Everything under the start ID will hide when the button is pressed
  start.classList.add("hide");
  // This will shuffle the questions, which I do not want, but it's here for now
  // shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  // This is the bring out the questions from their hiding place in the HTML.
  questionContainer.classList.remove("hide");
  // The function to send us to the next step in the quiz
  setNextQuestion();
}

function setNextQuestion() {
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionEl.innerText = question.pregunta;
  question.answers.forEach((answers) => {
    var button = document.createElement("button");
    button.innerText = answers.choices;
    button.classList.add("btn");
    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerEl.appendChild(button);
  });
}

function reset() {
  nextButton.classList.add("hide");
  while (answerEl.firstChild) {
    answerEl.removeChild(answerEl.firstChild);
  }
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answersEl.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
// answerEl.addEventListener("click", function () {
//   if ((answers.choices = true)) {
//     // clearInterval(setNextQuestion);
//     // showQuestion();
//   } else {
//     // clearInterval(setNextQuestion);
//     secondsLeft - 10;
//     // showQuestion()

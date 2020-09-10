// console.log("hello");
// Variables from the DOM
var countdown = document.getElementById("timer");
var startPage = document.getElementById("start");
var h1 = document.querySelector("h1");
var pTag = document.querySelector("p");
var form = document.querySelector("form");
var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var highScore = document.getElementById("end-score");
var endQuizPage = document.getElementById("all-done");
var submit = document.getElementById("submit-btn");

// Values for starting seconds and questions
var secondsLeft = 75;
questionNumber = 0;
totalQuestions = 5;
finalScore = secondsLeft;

// event listener for start button
startButton.addEventListener("click", function () {
  //   console.log("You clicked me");
  // Timer starts on start click
  setTimer();
  // question is pulled up on start button click. QuestionNumber starts on the first question (0)
  nextQuestion(questionNumber);
  // When the question is done, this function runs through.
  waitForAnswer(questionNumber);
});

// function for the timer
function setTimer() {
  var timerInterval = setInterval(function () {
    // secondsLeft decrements and...
    secondsLeft--;
    // shows the decrement on the screen with this
    countdown.textContent = secondsLeft;
    // If timer reaches zero, you're sent to the score page.
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
      countdown.textContent = 0;
    }
  }, 1000);
}

// object array of questions/answers with correct answer written again
// correct answers are written again under "correct" for the checkAnswer function
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answer1: "strings",
    answer2: "Booleans",
    answer3: "alerts",
    answer4: "numbers",
    correct: "alerts",
  },

  {
    question: "The condition in an if/else statement is enclosed within____.",
    answer1: "quotes",
    answer2: "curly brackets",
    correct: "curly brackets",
    answer3: "parentheses",
    answer4: "square brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answer1: "numbers and strings",
    answer2: "other arrays",
    answer3: "Booleans",
    answer4: "all of the above",
    correct: "all of the above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    answer1: "commas",
    answer2: "curly brackets",
    answer3: "quotes",
    correct: "quotes",
    answer4: "parentheses",
  },
  {
    question:
      "A very useful took used during development and debugging for printing content to the debugger is:",
    answer1: "JavaScript",
    answer2: "terminal/bash",
    answer3: "for Loops",
    answer4: "console.log",
    correct: "console.log",
  },
];

// function where the quiz is made and played through. questionNumber changes from 0 - 4
function nextQuestion(questionNumber) {
  // Starting page content is hidden
  startPage.classList.add("hide");
  // Questions and answers are all revealed
  questionContainer.classList.remove("hide");
  answerEl.classList.remove("hide");
  questionEl.classList.remove("hide");
  // console.log("Writing out Q" + questionNumber);
  question.textContent = questions[questionNumber].question;
  answer1.textContent = questions[questionNumber].answer1;
  answer2.textContent = questions[questionNumber].answer2;
  answer3.textContent = questions[questionNumber].answer3;
  answer4.textContent = questions[questionNumber].answer4;
}

// Behind the scenes function for on clicks.
function waitForAnswer() {
  // event listeners for each of the four answer buttons
  answer1.addEventListener("click", function () {
    checkAnswer(answer1.textContent);
  });
  answer2.addEventListener("click", function () {
    checkAnswer(answer2.textContent);
  });
  answer3.addEventListener("click", function () {
    checkAnswer(answer3.textContent);
  });
  answer4.addEventListener("click", function () {
    checkAnswer(answer4.textContent);
  });
}

// function for establishing correct or incorrect answer and what to do with it
function checkAnswer(text) {
  // if the question (that you are on) is incorrectly answered...
  if (questions[questionNumber].correct != text) {
    // console.log(
    //   "wrong, the correct answer was: " + questions[questionNumber].correct
    // );
    // the timer will drop ten seconds
    secondsLeft = secondsLeft - 10;
    // if the question is answered correctly, you move onto the next question with no penalty
  } else {
    // console.log("Correct");
  }
  questionNumber = questionNumber + 1;

  // console.log("Next question is:" + questionNumber);
  // if the question number is less than the total question...
  if (questionNumber < totalQuestions) {
    // console.log("we still got more");
    // continue to the next question
    nextQuestion(questionNumber);
    // otherwise you will reach the end page
  } else {
    endQuiz();
  }
}

// this is the end of the quiz!
function endQuiz() {
  // questions and answer text are hidden
  questionEl.classList.add("hide");
  answerEl.classList.add("hide");
  countdown.classList.add("hide");
  // h1 and p are created and appended
  h1.textContent = "All Done!!";
  pTag.textContent = "Your final score is " + secondsLeft;
  document.body.appendChild(form);
  document.body.appendChild(h1);
  document.body.appendChild(pTag);
  submit.addEventListener("click", function () {
    pTag.classList.add("hide");
    h1.classList.add("hide");
    scoreBoard();
  });
}

function scoreBoard() {
  finalScore;
}

// console.log("hello");
// Variables
var countdown = document.getElementById("timer");
var startPage = document.getElementById("start");
var h1 = document.querySelector("h1");
var pTag = document.querySelector("p");
var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var answerOp1 = document.getElementById("answer1");
var answerOp2 = document.getElementById("answer2");
var answerOp3 = document.getElementById("answer3");
var answerOp4 = document.getElementById("answer4");
var highScore = document.getElementById("end-score");
var endQuizPage = document.getElementById("all-done");
// start page
var secondsLeft = 75;

startButton.addEventListener("click", function () {
  //   console.log("You clicked me");
  setTimer();
  firstQuestion();
});

function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    countdown.textContent = "Time Left: " + secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
      countdown.textContent = 0;
    }
  }, 1000);
}

// object array of questions/answers
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answer1: "strings",
    answer2: "Booleans",
    answer3: "alerts",
    // correct
    answer4: "numbers",
  },

  {
    question: "The condition in an if/else statement is enclosed within____.",
    answer1: "quotes",
    answer2: "curly brackets",
    // correct
    answer3: "parentheses",
    answer4: "square brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answer1: "numbers and strings",
    answer2: "other arrays",
    answer3: "Booleans",
    answer4: "all of the above",
    // correct
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    answer1: "commas",
    answer2: "curly brackets",
    answer3: "quotes",
    // correct
    answer4: "parentheses",
  },
  {
    question:
      "A very useful took used during development and debugging for printing content to the debugger is:",
    answer1: "JavaScript",
    answer2: "terminal/bash",
    answer3: "for Loops",
    answer4: "console.log",
    // correct
  },
];

// question 1
function firstQuestion() {
  startPage.classList.add("hide");
  questionContainer.classList.remove("hide");
  answerEl.classList.remove("hide");
  questionEl.classList.remove("hide");
  // questionEl.innerText = questions.question;
  question.textContent = questions[0].question;
  answer1.textContent = questions[0].answer1;
  answer2.textContent = questions[0].answer2;
  answer3.textContent = questions[0].answer3;
  answer4.textContent = questions[0].answer4;

  answerOp1.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    secondQuestion();
  });
  answer2.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    secondQuestion();
  });
  answer3.addEventListener("click", function () {
    secondQuestion();
  });
  answer4.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    secondQuestion();
  });
}

// question 2
function secondQuestion() {
  question.textContent = questions[1].question;
  answer1.textContent = questions[1].answer1;
  answer2.textContent = questions[1].answer2;
  answer3.textContent = questions[1].answer3;
  answer4.textContent = questions[1].answer4;
  clearInterval(timerInterval);
  answer1.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    thirdQuestion();
  });
  answer2.addEventListener("click", function () {
    thirdQuestion();
  });
  answer3.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    thirdQuestion();
  });
  answer4.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    thirdQuestion();
  });
}
// question 3
function thirdQuestion() {
  question.textContent = questions[2].question;
  answer1.textContent = questions[2].answer1;
  answer2.textContent = questions[2].answer2;
  answer3.textContent = questions[2].answer3;
  answer4.textContent = questions[2].answer4;
  clearInterval(timerInterval);
  answer1.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    fourthQuestion();
  });
  answer2.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    fourthQuestion();
  });
  answer3.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    fourthQuestion();
  });
  answer4.addEventListener("click", function () {
    fourthQuestion();
  });
}

// question 4
function fourthQuestion() {
  question.textContent = questions[3].question;
  answer1.textContent = questions[3].answer1;
  answer2.textContent = questions[3].answer2;
  answer3.textContent = questions[3].answer3;
  answer4.textContent = questions[3].answer4;
  clearInterval(timerInterval);
  answer1.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    fifthQuestion();
  });
  answer2.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    fifthQuestion();
  });
  answer3.addEventListener("click", function () {
    fifthQuestion();
  });
  answer4.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    fifthQuestion();
  });
}

// question 5
function fifthQuestion() {
  question.textContent = questions[4].question;
  answer1.textContent = questions[4].answer1;
  answer2.textContent = questions[4].answer2;
  answer3.textContent = questions[4].answer3;
  answer4.textContent = questions[4].answer4;
  clearInterval(timerInterval);
  answer1.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    endQuiz();
  });
  answer2.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    endQuiz();
  });
  answer3.addEventListener("click", function () {
    secondsLeft = secondsLeft - 10;
    endQuiz();
  });
  answer4.addEventListener("click", function () {
    endQuiz();
  });
}
// End
function endQuiz() {
  questionEl.classList.add("hide");
  answerEl.classList.add("hide");
  h1.textContent = "All Done!!";
  pTag.textContent = "Your final score is " + secondsLeft;
  document.body.appendChild(h1);
  document.body.appendChild(pTag);
}
// High score

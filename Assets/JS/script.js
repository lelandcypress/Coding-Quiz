var start = document.getElementById("start-button");
var tryAgainEL = document.getElementById("try-again");
var timerEl = document.getElementById("display-timer");
var messageEL = document.getElementById("gameover");
var questionTitle = document.getElementById("question");
var vanish = document.getElementById("vanish");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var quizCard = document.getElementById("quiz-card");
var questionCount = 0;
var remainingQuestions = [];
var currentQuestion = {};
var timeLeft = 60;

//Timer
function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " Seconds";
      --timeLeft;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " Second";
      --timeLeft;
    } else {
      //stop timer
      clearInterval(timeInterval);
      timerEl.textContent = "Sorry! Out of Time";
      vanish.setAttribute("style", "visibility: hidden");
      tryAgainEL.setAttribute("style", "display: inline;");
    }
  }, 1000);
}

function nextQuestion() {
  //increment question count to allow developer to trigger end of game function.
  questionCount++;
  //randomly selects questions
  questionIndex = Math.floor(Math.random() * remainingQuestions.length);
  currentQuestion = remainingQuestions[questionIndex];
  //DOM method used to populate question and available answers on index.
  questionTitle.textContent = currentQuestion.question;
  option1.textContent = currentQuestion.option1;
  option2.textContent = currentQuestion.option2;
  option3.textContent = currentQuestion.option3;
  option4.textContent = currentQuestion.option4;
  remainingQuestions.splice(questionIndex, 1);
  //Keeps track of how many questions cycled through, triggers score window if user finishes quiz
  console.log(questionCount);
  if (questionCount === 10) {
    endOfQuiz();
  }
}
//event listeners per options//
option1.addEventListener("click", function (event) {
  var userSelection = event.target;
  //Evaluates user selection via HTML data set number//
  var userSelectionData = userSelection.dataset["number"];
  if (userSelectionData == currentQuestion.answer) {
    correct();
  } else {
    wrong();
  }
  nextQuestion();
});

option2.addEventListener("click", function (event) {
  var userSelection = event.target;
  //Evaluates user selection via HTML data set number//
  var userSelectionData = userSelection.dataset["number"];
  if (userSelectionData == currentQuestion.answer) {
    correct();
  } else {
    wrong();
  }
  nextQuestion();
});

option3.addEventListener("click", function (event) {
  var userSelection = event.target;
  //Evaluates user selection via HTML data set number//
  var userSelectionData = userSelection.dataset["number"];
  if (userSelectionData == currentQuestion.answer) {
    correct();
  } else {
    wrong();
  }
  nextQuestion();
});

option4.addEventListener("click", function (event) {
  var userSelection = event.target;
  //Evaluates user selection via HTML data set number//
  var userSelectionData = userSelection.dataset["number"];
  if (userSelectionData == currentQuestion.answer) {
    correct();
  } else {
    wrong();
  }
  nextQuestion();
});

//decrements 3 seconds per wrong answer//
function wrong() {
  --timeLeft;
  --timeLeft;
  --timeLeft;
}

//Increments 5 seconds per correct answer//
function correct() {
  ++timeLeft;
  ++timeLeft;
  ++timeLeft;
  ++timeLeft;
  ++timeLeft;
}

//User Click//
start.addEventListener("click", function () {
  quizCard.classList.remove("hidden");
  //builds acitve question pool//
  remainingQuestions = [...questions];
  //hides start button on click...
  start.setAttribute("style", "display:none");
  //starts timer//
  countdown();
  //Dynamically populates questions and options on brower page.//
  nextQuestion();
});

tryAgainEL.addEventListener("click", function () {
  remainingQuestions = [...questions];
  questionCount = 0;
  vanish.setAttribute("style", "visibility: visible");
  tryAgainEL.setAttribute("style", "display:none");
  timeLeft = 60;
  countdown();
  nextQuestion();
});

function endOfQuiz() {
  vanish.setAttribute("style", "visibility: hidden");
  //clear the timer interval
  clearInterval(timeLeft);
  // places the time information within the score element
  var score = timeLeft;
  //Logs the score to local storage
  localStorage.setItem("coding quiz score", score);
  //Open window maintaining scores
  return (window.location = "score.html");
}

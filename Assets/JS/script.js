var start = document.getElementById("start-button");
var reset = document.getElementById("reset-button")
var timerEl = document.getElementById("display-timer");
var messageEL= document.getElementById("gameover");
var questionTitle = document.getElementById("question")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")
var quizCard= document.getElementById("quiz-card")
var questionCount= 0;
var score= 0;
var remainingQuestions = []
var currentQuestion = {}


var timeLeft = 5


function countdown(){
  
 
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function(){
    if(timeLeft > 1){
      timerEl.textContent = timeLeft + ' Seconds';
      --timeLeft;
    } else if (timeLeft === 1){
      timerEl.textContent = timeLeft + ' Second';
      --timeLeft;
    } else {
      clearInterval(timeInterval);
      timerEl.textContent = 'Sorry! Out of Time';
      gameOver();  
      }


    },1000)};

  
    function startQuiz(){
      remainingQuestions = [...questions]
      start.setAttribute("style", "display:none")
      nextQuestion()
    }   
  /*need a click event listener that evaluates the user response that executes a function, this fuction will determine if the option is true or false, and exectute the next question function*/ 
function nextQuestion(){
  console.log(remainingQuestions)
  questionCount++;
  questionIndex=Math.floor(Math.random()*remainingQuestions.length);
  currentQuestion=remainingQuestions[questionIndex];
  questionTitle.textContent = currentQuestion.question; 
  option1.textContent = currentQuestion.option1;
  option2.textContent = currentQuestion.option2;
  option3.textContent = currentQuestion.option3;
  option4.textContent = currentQuestion.option4;
  remainingQuestions.splice(questionIndex,1);
} 

option1.addEventListener('click',function(event){
  var userSelection = event.target
  var userSelectionData= userSelection.dataset["number"] 
  if (userSelectionData == currentQuestion.answer){
    correct()
  }else{
    wrong()
  }
  nextQuestion();
})

option2.addEventListener('click',function(event){
  var userSelection = event.target
  var userSelectionData = userSelection.dataset["number"] 
  if (userSelectionData == currentQuestion.answer){
    correct()
  } else{
    wrong()
  }
 nextQuestion();
})
option3.addEventListener('click',function(event){
  var userSelection = event.target
  var userSelectionData= userSelection.dataset["number"] 
  if (userSelectionData == currentQuestion.answer){
    correct()
  }else{
    wrong()
  }

 nextQuestion();
})
option4.addEventListener('click',function(event){
  var userSelection = event.target
  var userSelectionData= userSelection.dataset["number"] 
  if (userSelectionData == currentQuestion.answer){
    correct()
  }else{
    wrong()
  }
 nextQuestion();
})

function wrong(){
  --timeLeft
  --timeLeft
  --timeLeft
}

function correct(){
  ++timeLeft
  ++timeLeft
  ++timeLeft
  ++timeLeft
  ++timeLeft
}

function gameOver(){
   ;
}

start.addEventListener("click",function(){
    countdown()
    startQuiz()
   
})


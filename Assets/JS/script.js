var start = document.getElementById("start-button");
var reset = document.getElementById("reset-button")
var timerEl = document.getElementById("display-timer");
var messageEL= document.getElementById("gameover");
var questionTitle = document.getElementById("question")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")
var options = Array.from(document.getElementsByClassName("options"))
var quizCard= document.getElementById("quiz-card")
var questionCount= 0;
var score= 0;
var remainingQuestions = []
var currentQuestion = {}
var questions = [ {
  answer:1,
  question:'Who invented JavaScript?',
  option1:'Netscape', 
  option2: 'AOL',
  option3:'Microsoft',
  option4:'Nomadic Merchants from Tatoine'
},{
  answer:2,
  question: 'What method would you use to remove the last element from an array?',
  option1:'.fitler()',
  option2: '.pop()',
  option3:'.map()',
  option4:'.getouttahere()'
},{
  answer:4,
  question: 'Which of the following is an example of a semantic HTML tag?',
  option1:'<p>',
  option2: '<div>',
  option3:'<semantic>',
  option4:'<footer>'
},{
  answer:2,
  question: 'Which code block would change the text color red for an HTML element with a "change-me" class?',
  option1:'#change-me{color:red;}',
  option2: '.change-me{color:red;}',
  option3:'change-me{text-color:red;}',
  option4:'.change-me{just turn red please!}'
},{
  answer:4,
  question: 'Which of the following is strict comparison?',
  option1:'!=',
  option2: '=',
  option3:'==',
  option4:'==='

},{
  answer: 3,
  question: 'Which selection will log something to the console',
  option1:'console.log',
  option2: 'log.console()',
  option3:'console.log()',
  option4:'Abracadabra.Shout()'
},{
  answer: 1,
  question: 'Which is a proper function?',
  option1:'function(x){doSomething;};',
  option2: 'function{x}(doSomething;);',
  option3:'function[x][doSomething;];',
  option4:'function.dosomething()'
},{
  answer: 4,
  question: 'Which is not a JavaScript Data Type?',
  option1:'Boolean',
  option2: 'Number',
  option3:'String',
  option4:'Thread'
},{
  answer: 2,
  question: 'What does DOM stand for?',
  option1:'Document Object Mode',
  option2: 'Design Object Model',
  option3:'Document Object Model',
  option4:'Dominoes Order Meal'
},{
  answer: 1,
  question: 'What is this object type? var num =[1,2,3,4]',
  option1:'Array',
  option2: 'Attribute',
  option3:'Beret',
  option4:'Function'
}]

var timeLeft = 30


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
      timerEl.textContent = '';
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
  option1.textContent = currentQuestion.option1
  option2.textContent = currentQuestion.option2
  option3.textContent = currentQuestion.option3
  option4.textContent = currentQuestion.option4
  
} 

option1.addEventListener('click',function(){
 if(userInput===true){
   correct()
 }else{
   wrong()
 }
  nextQuestion();
})
  
option2.addEventListener('click',function(){
  if(userInput===true){
    correct()
  }else{
    wrong()
  }
  nextQuestion();
})
option3.addEventListener('click',function(){
  if(userInput===true){
    correct()
  }else{
    wrong()
  }
  nextQuestion();
})
option4.addEventListener('click',function(){
  if(userInput===true){
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
    messageEL.textContent= 'Sorry! Out of Time';
}

start.addEventListener("click",function(){
    countdown()
    startQuiz()
    quizCard.style.display= 'block';
})


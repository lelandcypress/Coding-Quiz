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


var questions = [ {
  number:1,
  question:'Who invented JavaScript?',
  Answer1:'Netscape', 
  Answer2: 'AOL',
  Answer3:'Microsoft',
  Answer4:'Nomadic Merchants from Tatoine'
},{
  number:2,
  question: 'What method would you use to remove the last element from an array?',
  Answer1:'.fitler()',
  Answer2: '.pop()',
  Answer3:'.map()',
  Answer4:'.getouttahere()'
},{
  number:3,
  question: 'Which of the following is an example of a semantic HTML tag?',
  Answer1:'<p>',
  Answer2: '<div>',
  Answer3:'<semantic>',
  Answer4:'<footer>'
},{
  number:4,
  question: 'Which code block would change the text color red for an HTML element with a "change-me" class?',
  Answer1:'#change-me{color:red;}',
  Answer2: '.change-me{color:red;}',
  Answer3:'change-me{text-color:red;}',
  Answer4:'.change-me{just turn red please!}'
},{
  number:5,
  question: 'Which of the following is strict comparison?',
  Answer1:'!=',
  Answer2: '=',
  Answer3:'==',
  Answer4:'==='

}/*,{
  number:6,
  question: 'Which of the following is strict comparison?',
  Answer1:'!=',
  Answer2: '=',
  Answer3:'==',
  Answer4:'==='
},{},{},{},{}*/]




function countdown(){
  
  var timeLeft = 60;

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
      questionTitle.textContent = questions[0].question;
      option1.textContent= questions[0].Answer1;
      option2.textContent=questions[0].Answer2;
      option3.textContent=questions[0].Answer3;
      option4.textContent=questions[0].Answer4;
      start.setAttribute("style", "display:none")
    }   
  /*need a click event listener that evaluates the user response that executes a function, this fuction will determine if the answer is true or false, and exectute the next question function*/ 
function nextQuestion(){
  questionTitle.textContent = questions[index++].question;
  option1.textContent=question[index++].Answer1;
  option2.textContent=question[index++].Answer2;
  option3.textContent=question[index++].Answer3;
  option4.textContent=question[index++].Answer4;
} 

option1.addEventListener('click',function(){
  nextQuestion();
})
  
option2.addEventListener('click',function(){
  nextQuestion();
})
option3.addEventListener('click',function(){
  nextQuestion();
})
option4.addEventListener('click',function(){
  nextQuestion();
})


function gameOver(){
    messageEL.textContent= 'Sorry! Out of Time';
}

start.addEventListener("click",function(){
    countdown()
    startQuiz()
    quizCard.style.display= 'block';
})


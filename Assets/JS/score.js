var userSubmission = document.getElementById("entername");
var subButton = document.getElementById("submit");
var tryAgain = document.getElementById("Go-Back");
var displayScore = document.getElementById("the-Score");
var getScore = localStorage.getItem("coding quiz score");
var highScores = document.getElementById("high-scores");

function renderMessage() {
  var lastScore = JSON.parse(localStorage.getItem("scoreBoard"));
  var p = document.createElement("p");
  var scoreRow = highScores.appendChild(p);
  scoreRow.textContent =
    lastScore.name + " Scored " + lastScore.score + " Points";
}

renderMessage();

tryAgain.addEventListener("click", function () {
  window.open("index.html");
});

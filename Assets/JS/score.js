var userSubmission = document.getElementById("entername");
var subButton = document.getElementById("submit");
var displayScore = document.getElementById("the-Score");
var getScore = localStorage.getItem("coding quiz score");
var hidden = document.getElementById("hidden-table");

displayScore.textContent = getScore;
subButton.addEventListener("click", function (event) {
  event.preventDefault();

  var scoreTracker = {
    name: userSubmission.value,
    score: getScore,
  };
  localStorage.setItem("scoreTracker", JSON.stringify(scoreTracker));
  renderMessage();
});
function renderMessage() {
  var lastScore = JSON.parse(localStorage.getItem("scoreTracker"));
  var p = document.createElement("p");
  var scoreRow = hidden.appendChild(p);
  scoreRow.textContent = lastScore.name + " " + lastScore.score;
}

renderMessage();

var userSubmission = document.getElementById("entername");
var subButton = document.getElementById("submit");
var tryAgain = document.getElementById("Go-Back");
var scoreList = document.getElementById("score-list");
var lastScore = JSON.parse(localStorage.getItem("scoreBoard"));

//credit: Michael Karen https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68
scoreList.innerHTML = lastScore
  .map(
    (score) =>
      `<p class = fs-6 border-bottom>${score.name}  scored  ${score.score} points </p>`
  )
  .join("");

tryAgain.addEventListener("click", function () {
  window.open("index.html");
});

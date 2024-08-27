let scoreEl1 = document.querySelector("#score-1");
let scoreEl2 = document.querySelector("#score-2");

function newGame() {
  scoreEl1.textContent = 0;
  scoreEl2.textContent = 0;
  scoreEl1.classList.remove("winner");
  scoreEl2.classList.remove("winner");
}

function plus(team, addedPoints) {
  let score1 = scoreEl1.textContent - "0";
  let score2 = scoreEl2.textContent - "0";

  if (team == "home") {
    score1 += addedPoints;
    scoreEl1.textContent = score1;
  } else if (team == "guest") {
    score2 += addedPoints;
    scoreEl2.textContent = score2;
  }

  if (score1 > score2) {
    scoreEl1.classList.add("winner");
    scoreEl2.classList.remove("winner");
  } else if (score2 > score1) {
    scoreEl2.classList.add("winner");
    scoreEl1.classList.remove("winner");
  } else {
    scoreEl1.classList.remove("winner");
    scoreEl2.classList.remove("winner");
  }
}

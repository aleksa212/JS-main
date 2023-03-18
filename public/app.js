const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const compPoints = document.getElementById("computer-score");
const humanPoints = document.getElementById("player-score");
const winner = document.getElementById("winner");
const playAgainBtn = document.getElementById("play-again");

const rock = rockBtn.value;
const paper = paperBtn.value;
const scissors = scissorsBtn.value;

const possibleChoices = [rock, paper, scissors];

let comp = 0;
let human = 0;

function getComputerChoice() {
  return possibleChoices[Math.floor(Math.random() * 3)];
}

function playRound(event) {
  let computer = getComputerChoice();
  let player = event.target.value;

  console.log("YOUR CHOICE", player);
  console.log("COMPUTER CHOICE", computer);

  if (computer === player) {
    winner.textContent = "Draw";
  } else {
    const computerWins =
      (computer === paper && player === rock) ||
      (computer === rock && player === scissors) ||
      (computer === scissors && player === paper);

    if (computerWins) {
      comp++;
      compPoints.textContent = comp;
      winner.textContent = "Computer wins this round";
    } else {
      human++;
      humanPoints.textContent = human;
      winner.textContent = "You win this round";
    }
  }

  if (human === 5) {
    winner.textContent = "Congratulations You Win!!!";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    playAgainBtn.classList.remove("disabled");
  } else if (comp === 5) {
    winner.textContent = "Computer wins!!!";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    playAgainBtn.classList.remove("disabled");
  }
}

function reset() {
  comp = 0;
  human = 0;
  compPoints.textContent = comp;
  humanPoints.textContent = human;
  playAgainBtn.classList.add("disabled");
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  winner.textContent = "";
}

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);
playAgainBtn.addEventListener("click", reset);

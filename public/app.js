const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const possibleChoices = [rock, paper, scissors];

let comp = 0;
let human = 0;
let round = 1;

function getComputerChoice() {
  return possibleChoices[Math.floor(Math.random() * 3)];
}

function isPossibleChoice(choice) {
  return possibleChoices.find((x) => x === choice) !== undefined;
}

function playRound() {
  let computer = getComputerChoice();
  let player = prompt(`Round: ${round} \nPlease enter your choice`)
    .trim()
    .toLowerCase();

  while (!isPossibleChoice(player)) {
    player = prompt(
      `Round: ${round} \nPlease enter your choice (${rock}, ${paper}, ${scissors})`
    )
      .trim()
      .toLowerCase();
  }

  console.log("YOUR CHOICE", player);
  console.log("COMPUTER CHOICE", computer);

  if (computer === paper && player === rock) {
    comp++;
    alert("computer wins");
  } else if (computer === paper && player === scissors) {
    human++;
    alert("player wins");
  } else if (computer === rock && player === scissors) {
    comp++;
    alert("computer wins");
  } else if (computer === rock && player === paper) {
    human++;
    alert("player wins");
  } else if (computer === scissors && player === paper) {
    comp++;
    alert("computer wins");
  } else if (computer === scissors && player === rock) {
    human++;
    alert("player wins");
  } else {
    alert("draw");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    round++;
  }

  let winner = "Draw!";
  
  if (human > comp) {
    winner = "You win!";
  } else if (comp > human) {
    winner = "Computer wins!";
  }

  alert(`Score \nComputer: ${comp} You: ${human} \n${winner}`);
}

game();

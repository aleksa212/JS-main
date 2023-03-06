const choice = ["rock", "paper", "scissors"];

let comp = 0;
let human = 0;

function playRound() {
  let computer = choice[Math.floor(Math.random() * 3)];
  let player = prompt("enter your choice").toLowerCase();

  console.log("YOUR CHOICE", player);
  console.log("COMPUTER CHOICE", computer);

  if (computer === "paper" && player === "rock") {
    comp++;
    alert("computer wins");
  } else if (computer === "paper" && player === "scissors") {
    human++;
    alert("player wins");
  } else if (computer === "rock" && player === "scissors") {
    comp++;
    alert("computer wins");
  } else if (computer === "rock" && player === "paper") {
    human++;
    alert("player wins");
  } else if (computer === "scissors" && player === "paper") {
    comp++;
    alert("computer wins");
  } else if (computer === "scissors" && player === "rock") {
    human++;
    alert("player wins");
  } else {
    alert("draw");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  alert(`score computer: ${comp} you: ${human}`);
}
game();

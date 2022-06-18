const items = ["rock", "paper", "scissors"];
let winner;
const computerPlay = () => {
  let choice = (Math.random() * items.length) | 0;
  return items[choice];
};
function playRound(userSelectionItem, computerSelection) {
  computerSelection = computerPlay();
  console.log(computerSelection);

  let userSelectionPlay = prompt("Do you want to play?");
  if (userSelectionPlay.toUpperCase() !== "YES") {
    throw "ok exiting the game";
  }
  userSelectionItem = prompt("Choose item");
  console.log(userSelectionItem);
  if (!items.includes(userSelectionItem)) {
    userSelectionItem = prompt("Please choose correct item");
  }
  if (computerSelection == "rock" && userSelectionItem == "paper") {
    winner = "You Win!";
  }
  if (computerSelection == "paper" && userSelectionItem == "rock") {
    winner = "You Lose! Paper beats Rock";
  }
  if (computerSelection == "paper" && userSelectionItem == "scissors") {
    winner = "You Win!";
  }
  if (computerSelection == "scissors" && userSelectionItem == "paper") {
    winner = "You Lose! Scissors beats Paper";
  }
  if (computerSelection == "rock" && userSelectionItem == "scissors") {
    winner = "You Lose! Rock beats Scissors";
  }
  if (computerSelection == "scissors" && userSelectionItem == "rock") {
    winner = "You Win!";
  }
  return winner;
}

function Game(userScore, computerScore) {
  userScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playRound();
    if (!winner.includes("Win") && !winner.includes("Lose")) {
      userScore++;
      computerScore++;
    }
    if (winner.includes("Win") == true) {
      userScore++;
    }
    if (winner.includes("Lose") == true) {
      computerScore++;
    }
    console.log(`${computerScore} : ${userScore}`);
    if (i == 4 && computerScore > userScore) {
      console.log("You officially lose");
    }
    if (i == 4 && userScore > computerScore) {
      console.log("Congrats You Win!");
    }
  }
}

Game();

const items = ["rock", "paper", "scissors"];
let winner = "";
const computerPlay = () => {
  let choice = Math.floor(Math.random() * items.length);
  return items[choice];
};
function playRound(userSelectionItem, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  let userSelectionPlay = prompt("Do you want to play?");
  if (userSelectionPlay.toUpperCase() !== "YES") {
    throw "ok exiting the game";
  } else {
    userSelectionItem = prompt("Choose item").toLowerCase();
    if (!items.includes(userSelectionItem)) {
      userSelectionItem = prompt("Please choose correct item").toLowerCase();
    }
    if (computerSelection == "rock" && userSelectionItem == "paper") {
      winner = "You win!";
    } else if (computerSelection == "paper" && userSelectionItem == "rock") {
      winner = "You Lose! Paper beats Rock";
    } else if (
      computerSelection == "paper" &&
      userSelectionItem == "scissors"
    ) {
      winner = "You win!";
    } else if (
      computerSelection == "scissors" &&
      userSelectionItem == "paper"
    ) {
      winner = "You Lose! Scissors beats Paper";
    } else if (computerSelection == "rock" && userSelectionItem == "scissors") {
      winner = "You Lose! Rock beats Scissors";
    } else if (computerSelection == "scissors" && userSelectionItem == "rock") {
      winner = "You Win!";
    }
    winner = "Draw";
  }
  return winner;
}

function Game(userScore, computerScore) {
  userScore = 0;
  computerScore = 0;
  console.log(computerPlay());
  for (let i = 0; i < 5; i++) {
    playRound();
    if (winner.includes("win") === true) {
      userScore++;
    }

    if (winner.includes("lose") === true) {
      computerScore++;
    }
    console.log(`${computerScore} : ${userScore}`);
    if (i == 4 && computerScore > userScore) {
      console.log("You officially lose");
    }
  }
}

Game();

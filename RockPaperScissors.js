const items = ["rock", "paper", "scissors"];

const computerPlay = () => {
  let choice = Math.floor(Math.random() * items.length);
  return items[choice];
};
function Game(userSelectionItem, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  console.log(computerSelection);
  let userSelectionPlay = prompt("Do you want to play?");
  if (userSelectionPlay.toUpperCase() !== "YES") {
    throw "ok exiting the game";
  } else {
    userSelectionItem = prompt("Choose item").toLowerCase();
    if (!items.includes(userSelectionItem)) {
      userSelectionItem = prompt("Please choose correct item").toLowerCase();
    }
    if (computerSelection == "rock" && userSelectionItem == "paper") {
      return "You win!";
    } else if (computerSelection == "paper" && userSelectionItem == "rock") {
      return "You Lose! Paper beats Rock";
    } else if (
      computerSelection == "paper" &&
      userSelectionItem == "scissors"
    ) {
      return "You win!";
    } else if (
      computerSelection == "scissors" &&
      userSelectionItem == "paper"
    ) {
      return "You Lose! Scissors beats Paper";
    } else if (computerSelection == "rock" && userSelectionItem == "scissors") {
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection == "scissors" && userSelectionItem == "rock") {
      return "You Win!";
    }
    console.log("Draw");
  }
}

Game();

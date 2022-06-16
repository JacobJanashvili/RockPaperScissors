const items = ["Rock", "Paper", "Scissors"];

const computerPlay = () => {
  let choice = Math.floor(Math.random() * items.length);
  return items[choice];
};
function Game(userSelectionItem, computerSelection) {
  computerSelection = computerPlay();
  let userSelectionPlay = prompt("Do you want to play?");
  if (userSelectionPlay !== "yes") {
    throw "ok exiting the game";
  } else {
    userSelectionItem = prompt("Choose item");
    if (!items.includes(userSelectionItem)) {
      userSelectionItem = prompt("Please choose correct item");
    }
  }
}

Game();

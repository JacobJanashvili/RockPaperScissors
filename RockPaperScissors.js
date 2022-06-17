const items = ["Rock", "Paper", "Scissors"];

const computerPlay = () => {
  let choice = Math.floor(Math.random() * items.length);
  return items[choice];
};
function Game(userSelectionItem, computerSelection) {
  computerSelection = computerPlay();
  console.log(computerSelection)
  let userSelectionPlay = prompt("Do you want to play?");
  if (userSelectionPlay !== "yes") {
    throw "ok exiting the game";
  } else {
    userSelectionItem = prompt("Choose item");
    if (!items.includes(userSelectionItem)) {
      userSelectionItem = prompt("Please choose correct item");
    }
    if(computerSelection=="Rock"&&userSelectionItem=="Paper"){
      console.log("You win!")
    }
    else if(computerSelection=="Paper"&&userSelectionItem=="Rock"){
      console.log("You Lose! Paper beats Rock")
    }
    else if(computerSelection=="Paper"&&userSelectionItem=="Scissors"){
      console.log("You win!")
    }
    else if(computerSelection=="Scissors"&&userSelectionItem=="Paper"){
      console.log("You Lose! Scissors beats Paper")
    }
    else if(computerSelection=="Rock"&&userSelectionItem=="Scissors"){
      console.log("You Lose! Rock beats Scissors")
    }
    else if(computerSelection=="Scissors"&&userSelectionItem=="Rock"){
      console.log("You Win!")
    }
    console.log("Draw")
  }
}

Game();

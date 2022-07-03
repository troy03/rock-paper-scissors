//player choice
let playerChoice = prompt("What is your choice of weapon: rock, paper, or scissors?").toLowerCase();
   
//Computer Choice
let computerChoice = Math.floor(Math.random() *3 + 1);

//variables as numbers

if (computerChoice === 1) {
    computerChoice = "rock";
} else if(computerChoice === 2) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}


//defining function
function game(playerChoice, computerChoice){

//Checking for a tie
if (playerChoice === computerChoice) {
      return "It is a tie";
    }

    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        return "Player Wins";
      } else {
        return "Computer Wins";
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer Wins";
      } else {
        return "Player Wins";
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer Wins";
      } else {
                return "Player Wins";
      }
    }
}

//start the game function
game();
//print winner
console.log(game(playerChoice, computerChoice))

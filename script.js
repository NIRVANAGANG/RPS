// let player = "";
// let computer = "";

// function getChoice() {
//   let choices = ["rock", "paper", "scissors"];
//   let rand = Math.floor(Math.random() * 3);

//   return choices[rand];
// }
// for (i = 0; i <= 5; i++) {
//   player = getChoice();
//   computer = getChoice();

//   if (player == "rock" && computer == "paper") {
//     console.log("Player wins");
//   } else if (player == "Paper" && computer == "rock") {
//     console.log("player wins");
//   } else if (player == "scissors" && computer == "rock") {
//     console.log("Player wins");
//   } else if (computer == "rock" && player == "paper") {
//     console.log("Computer wins");
//   } else if (computer == "paper" && player == "rock") {
//     console.log("Computer wins");
//   } else if (computer == "scissors" && player == "rock") {
//     console.log("Computer wins");
//   } else {
//     console.log("We have a tie");
//   }
// }

// PROJECT ROCK PAPER SCISSORS

// FUNCTION FOR GETTING THE COMPUTER CHOICE
function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  let pick = Math.floor(Math.random() * 3);

  return choice[pick];
}

// FUNCTION FOR GETTING THE HUMAN CHOICE
function getHumanChoice() {
  let humanPick = prompt("What is your pick");
  return humanPick;
}

// HUMAN AND COMPUTER SCORE TRACK
let humanScore = 0;
let computerScore = 0;

// FUNCTION THAT PLAYS GAME FOR ONE ROUND
for (i = 0; i <= 5; i++) {
  function playRound(computerChoice, humanChoice) {
    return computerChoice, humanChoice;
  }

  let computerSelection = getComputerChoice();
  let humanSelection = getHumanChoice();
  playRound(computerSelection, humanSelection);

  // ALL COMPUTER WIN CONDITIONS
  if (computerSelection == "Rock" && humanSelection == "Scissors") {
    console.log(`Computer selection: ${computerSelection}`);
    console.log(`Human selection: ${humanSelection}`);
    console.log(`${computerSelection} beats ${humanSelection} computer wins!`);
    console.log(`Computer score is: ${(computerScore += 1)}`);
  } else if (computerSelection == "Paper" && humanSelection == "Rock") {
    console.log(`Computer selection: ${computerSelection}`);
    console.log(`Human selection: ${humanSelection}`);
    console.log(`${computerSelection} beats ${humanSelection} computer wins!`);
    console.log(`Computer score is: ${(computerScore += 1)}`);
  } else if (computerSelection == "Scissors" && humanSelection == "Paper") {
    console.log(`Computer selection: ${computerSelection}`);
    console.log(`Human selection: ${humanSelection}`);
    console.log(`${computerSelection} beats ${humanSelection} computer wins!`);
    console.log(`Computer score is: ${(computerScore += 1)}`);
  } else if (
    // ALL HUMAN WIN CONDITIONS
    humanSelection == "Rock" &&
    computerSelection == "Scissors"
  ) {
    console.log(`Computer selection: ${computerSelection}`);
    console.log(`Human selection: ${humanSelection}`);
    console.log(`${humanSelection} beats ${computerSelection} human wins!`);
    console.log(`Human score is: ${(humanScore += 1)}`);
  } else if (humanSelection == "Paper" && computerSelection == "Rock") {
    console.log(`Computer selection: ${computerSelection}`);
    console.log(`Human selection: ${humanSelection}`);
    console.log(`${humanSelection} beats ${computerSelection} human wins!`);
    console.log(`Human score is: ${(humanScore += 1)}`);
  } else if (humanSelection == "Scissors" && computerSelection == "Paper") {
    console.log(`Computer selection: ${computerSelection}`);
    console.log(`Human selection: ${humanSelection}`);
    console.log(`${humanSelection} beats ${computerSelection} human wins!`);
    console.log(`Human score is: ${(humanScore += 1)}`);
  } else if (
    humanSelection == computerSelection ||
    computerSelection == humanSelection
  ) {
    console.log(`computer selection: ${computerSelection}`);
    console.log(`human selection: ${humanSelection}`);
    console.log("WE HAVE A DRAW");
  } else {
    console.log("Error!! Pick between Rock,Paper or Scissors");
  }
}

if (humanScore > computerScore) {
  console.log(
    `Hoorah! you won the game,your score is: ${humanScore} while computer score is:${computerScore}`
  );
} else if (computerScore > humanScore) {
  console.log(
    `You lost! the computer score is: ${computerScore} while your score is:${humanScore}`
  );
} else if (computerScore == humanScore) {
  console.log(
    `We have draw on the game,computer score is: ${computerScore},human score is:${humanScore}`
  );
} else {
  console.log("run it back");
}

// PLAY GAME

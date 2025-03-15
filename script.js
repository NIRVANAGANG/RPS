// // let player = "";
// // let computer = "";

// // function getChoice() {
// //   let choices = ["rock", "paper", "scissors"];
// //   let rand = Math.floor(Math.random() * 3);

// //   return choices[rand];
// // }
// // for (i = 0; i <= 5; i++) {
// //   player = getChoice();
// //   computer = getChoice();

// //   if (player == "rock" && computer == "paper") {
// //     console.log("Player wins");
// //   } else if (player == "Paper" && computer == "rock") {
// //     console.log("player wins");
// //   } else if (player == "scissors" && computer == "rock") {
// //     console.log("Player wins");
// //   } else if (computer == "rock" && player == "paper") {
// //     console.log("Computer wins");
// //   } else if (computer == "paper" && player == "rock") {
// //     console.log("Computer wins");
// //   } else if (computer == "scissors" && player == "rock") {
// //     console.log("Computer wins");
// //   } else {
// //     console.log("We have a tie");
// //   }
// // }

// // PROJECT ROCK PAPER SCISSORS
// //Target the buttons BUTTONS
// let rock = document.querySelector("#rock");
// let paper = document.querySelector("#paper");
// let scissors = document.querySelector("#scissors");

// // FUNCTION FOR GETTING THE COMPUTER CHOICE
// function getComputerChoice() {
//   let choice = ["Rock", "Paper", "Scissors"];
//   let pick = Math.floor(Math.random() * 3);

//   return choice[pick];
// }

// // FUNCTION FOR GETTING THE HUMAN CHOICE
// function getHumanChoice() {
//   let game = prompt("Pick a chocie betweeen Rock,Paper and Scissors");
//   return game;
// }

// // HUMAN AND COMPUTER SCORE TRACK
// let humanScore = 0;
// let computerScore = 0;

// // FUNCTION THAT PLAYS GAME FOR ONE ROUND

// function playRound(computerChoice, humanChoice) {
//   return computerChoice, humanChoice;
// }

// let computerSelection = getComputerChoice();
// let humanSelection = getHumanChoice();
// playRound(computerSelection, humanSelection);

// // ALL COMPUTER WIN CONDITIONS
// if (computerSelection == "Rock" && humanSelection == "Scissors") {
//   console.log(`Computer selection: ${computerSelection}`);
//   console.log(`Human selection: ${humanSelection}`);
//   console.log(`${computerSelection} beats ${humanSelection} computer wins!`);
//   console.log(`Computer score is: ${(computerScore += 1)}`);
// } else if (computerSelection == "Paper" && humanSelection == "Rock") {
//   console.log(`Computer selection: ${computerSelection}`);
//   console.log(`Human selection: ${humanSelection}`);
//   console.log(`${computerSelection} beats ${humanSelection} computer wins!`);
//   console.log(`Computer score is: ${(computerScore += 1)}`);
// } else if (computerSelection == "Scissors" && humanSelection == "Paper") {
//   console.log(`Computer selection: ${computerSelection}`);
//   console.log(`Human selection: ${humanSelection}`);
//   console.log(`${computerSelection} beats ${humanSelection} computer wins!`);
//   console.log(`Computer score is: ${(computerScore += 1)}`);
// } else if (
//   // ALL HUMAN WIN CONDITIONS
//   humanSelection == "Rock" &&
//   computerSelection == "Scissors"
// ) {
//   console.log(`Computer selection: ${computerSelection}`);
//   console.log(`Human selection: ${humanSelection}`);
//   console.log(`${humanSelection} beats ${computerSelection} human wins!`);
//   console.log(`Human score is: ${(humanScore += 1)}`);
// } else if (humanSelection == paper && computerSelection == "Rock") {
//   console.log(`Computer selection: ${computerSelection}`);
//   console.log(`Human selection: ${humanSelection}`);
//   console.log(`${humanSelection} beats ${computerSelection} human wins!`);
//   console.log(`Human score is: ${(humanScore += 1)}`);
// } else if (humanSelection == scissors && computerSelection == "Paper") {
//   console.log(`Computer selection: ${computerSelection}`);
//   console.log(`Human selection: ${humanSelection}`);
//   console.log(`${humanSelection} beats ${computerSelection} human wins!`);
//   console.log(`Human score is: ${(humanScore += 1)}`);
// } else if (
//   humanSelection == computerSelection ||
//   computerSelection == humanSelection
// ) {
//   console.log(`computer selection: ${computerSelection}`);
//   console.log(`human selection: ${humanSelection}`);
//   console.log("WE HAVE A DRAW");
// } else {
//   console.log("Error!! Pick between Rock,Paper or Scissors");
// }

// if (humanScore > computerScore) {
//   console.log(
//     `Hoorah! you won the game,your score is: ${humanScore} while computer score is:${computerScore}`
//   );
// } else if (computerScore > humanScore) {
//   console.log(
//     `You lost! the computer score is: ${computerScore} while your score is:${humanScore}`
//   );
// } else if (computerScore == humanScore) {
//   console.log(
//     `We have draw on the game,computer score is: ${computerScore},human score is:${humanScore}`
//   );
// } else {
//   console.log("run it back");
// }

// // PLAY GAME

// ROCK PAPER SCISSORS UI
// let choices = ["rock", "paper", "scissors"];

// let playerDisplay = document.querySelector("#playerDisplay");
// let computerDisplay = document.querySelector("#computerDisplay");
// let resultsDisplay = document.querySelector("#resultsDisplay");

// function playGame(playerChoice) {
//   const computerChoice = choices[Math.floor(Math.random() * 2)];

//   let result = "";

//   if (playerChoice === computerChoice) {
//     result = "It's a draw";
//   } else {
//     switch (playerChoice) {
//       case "rock":
//         result = computerChoice === "scissors" ? "You win" : "you lose";
//         break;
//       case "paper":
//         result = computerChoice === "rock" ? "You win" : "you lose";
//         break;
//       case "scissors":
//         result = computerChoice === "paper" ? "You win" : "you lose";
//         break;
//     }
//   }
//   playerDisplay.textContent = `you chose ${playerChoice}`;
//   computerDisplay.textContent = `computer chose ${computerChoice}`;
//   resultsDisplay.textContent = `results:${result}`;
// }

let choice = document.querySelector("#choices");

let playerDisplay = document.querySelector("#playerDisplay");
let compDisplay = document.querySelector("#computerDisplay");
let result = document.querySelector("#resultsDisplay");
let pCount = document.querySelector("#playerScore");
let count = document.querySelector("#computerScore");
let grade = document.querySelector("#grades");

let PlayerScore = 0;
let computerScore = 0;

let comp = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
  let computerPick = comp[Math.floor(Math.random() * 3)];

  //   let PlayerScore = 0;
  //   let computerScore = 0;

  if (
    (playerChoice === "rock" && computerPick === "scissors") ||
    (playerChoice === "paper" && computerPick === "rock") ||
    (playerChoice === "scissors" && computerPick === "paper")
  ) {
    playerDisplay.textContent = `Player choice:${playerChoice}`;
    compDisplay.textContent = `Computer choice:${computerPick}`;
    result.textContent = `YOU WIN !`;
    result.setAttribute("style", "color: aqua; font-size: 2.5rem;");
    pCount.textContent = `player Score:${(PlayerScore += 1)}`;
  } else if (
    (computerPick === "rock" && playerChoice === "scissors") ||
    (computerPick === "paper" && playerChoice === "rock") ||
    (computerPick === "scissors" && playerChoice === "paper")
  ) {
    playerDisplay.textContent = `Player choice:${playerChoice}`;
    compDisplay.textContent = `Computer choice:${computerPick}`;
    result.textContent = `YOU LOSE !`;
    result.setAttribute("style", "color: red; font-size: 2rem");
    count.textContent = `Computer Score:${(computerScore += 1)}`;
  } else if (playerChoice === computerPick) {
    playerDisplay.textContent = `Player choice:${playerChoice}`;
    compDisplay.textContent = `Computer choice:${computerPick}`;
    result.textContent = "IT'S A DRAW";
    result.setAttribute(
      "style",
      "color: orange; background: white; font=size: 1.5rem"
    );
  }
}

// let a = 0;

// let b = (a += 1);
// console.log(b);

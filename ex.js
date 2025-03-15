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

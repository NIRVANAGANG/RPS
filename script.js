let player = "";
let computer = "";

function getChoice() {
  let choices = ["rock", "paper", "scissors"];
  let rand = Math.floor(Math.random() * 3);

  return choices[rand];
}
for (i = 0; i <= 5; i++) {
  player = getChoice();
  computer = getChoice();

  if (player == "rock" && computer == "paper") {
    console.log("Player wins");
  } else if (player == "Paper" && computer == "rock") {
    console.log("player wins");
  } else if (player == "scissors" && computer == "rock") {
    console.log("Player wins");
  } else if (computer == "rock" && player == "paper") {
    console.log("Computer wins");
  } else if (computer == "paper" && player == "rock") {
    console.log("Computer wins");
  } else if (computer == "scissors" && player == "rock") {
    console.log("Computer wins");
  } else {
    console.log("We have a tie");
  }
}

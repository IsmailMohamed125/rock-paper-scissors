function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomInt = getRandomInt(1, 3);

const getComputerChoice = (randomInt) => {
  if (randomInt === 1) {
    return "rock";
  } else if (randomInt === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};
getComputerChoice(randomInt);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "You draw.";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win.";
  } else {
    return "You lose.";
  }
}

const playerSelection = prompt("Pick rock paper or scissors").toLowerCase();
const computerSelection = getComputerChoice(randomInt);

console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));

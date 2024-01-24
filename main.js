"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

let userScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

let playerSelection;

const buttons = document.querySelectorAll(".btn");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

document.querySelector("#rock-btn").addEventListener("click", function () {
  playerSelection = "rock";
  document.querySelector(".player-description").textContent = "ROCK";
  document
    .querySelector(".one")
    .setAttribute("src", "/images/hand-rock-svgrepo-com.png");
});

document.querySelector("#paper-btn").addEventListener("click", function () {
  playerSelection = "paper";
  document.querySelector(".player-description").textContent = "PAPER";
  document
    .querySelector(".one")
    .setAttribute("src", "/images/hand-paper-svgrepo-com.png");
});

document.querySelector("#scissors-btn").addEventListener("click", function () {
  playerSelection = "scissors";
  document.querySelector(".player-description").textContent = "SCISSORS";
  document
    .querySelector(".one")
    .setAttribute("src", "/images/hand-scissors-svgrepo-com.png");
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const computerSelection = computerChoice();
    updateComputerSelection(computerSelection);

    const winner = getWinner(playerSelection, computerSelection);
    displayResult(playerSelection, computerSelection, winner);
    updateScore(winner);

    if (userScore === 5 || computerScore === 5) {
      openModal();
      if (userScore > computerScore) {
        document.querySelector(".outcome").textContent = "YOU WIN!";
        document.querySelector(
          ".final-result"
        ).textContent = `You scored ${userScore} and the computer scored ${computerScore}. `;
      } else {
        document.querySelector(".outcome").textContent = "YOU LOSE!";
        document.querySelector(
          ".final-result"
        ).textContent = `The computer scored ${computerScore} and you scored ${userScore}. `;
      }
    }
  });
});

btnCloseModal.addEventListener("click", function () {
  closeModal();
  reset();
});

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(playerSelection, computerSelection) {
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

function displayResult(playerSelection, computerSelection, winner) {
  document.querySelector(
    ".explanations"
  ).textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${winner}`;
}

function updateScore(winner) {
  if (winner === "You win.") {
    userScore++;
    document.querySelector(".player-score").textContent = userScore;
  } else if (winner === "You lose.") {
    computerScore++;
    document.querySelector(".computer-score").textContent = computerScore;
  }
}

function updateComputerSelection(computerSelection) {
  document.querySelector(
    ".computer-description"
  ).textContent = ` ${computerSelection.toUpperCase()} `;
  document
    .querySelector(".two")
    .setAttribute("src", `/images/hand-${computerSelection}-svgrepo-com.png`);
}

document.querySelector(".reset").addEventListener("click", function () {
  reset();
});

function reset() {
  userScore = 0;
  computerScore = 0;
  document.querySelector(".player-score").textContent = userScore;
  document.querySelector(".computer-score").textContent = computerScore;
  document.querySelector(".player-description").textContent = " ";
  document.querySelector(".computer-description").textContent = " ";
  document.querySelector(".explanations").textContent = "First to 5 wins!";
  resetImages();
}

function resetImages() {
  document
    .querySelector(".one")
    .setAttribute("src", "/images/question-mark-svgrepo-com.png");
  document
    .querySelector(".two")
    .setAttribute("src", "/images/question-mark-svgrepo-com.png");
}

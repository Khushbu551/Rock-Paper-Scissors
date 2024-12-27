//Elements
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const playAgainButton = document.getElementById("play-again");
const resetScoreButton = document.getElementById("reset-score");

const choices = document.querySelectorAll(".choice");

//Scores
let playerScore = 0;
let computerScore = 0;

//choice Arry
const options = ["rock", "paper", "scissors"];

//Event listeners for choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const playerChoice = choice.id;
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    determineWinner(playerChoice, computerChoice);
  });
});

//Determine Winner
function determineWinner(player, computer) {
  if (player === computer) {
    resultText.textContent = `It's a draw! You both chose ${player} `;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    resultText.textContent = `You Win! ${player} beats ${computer}`;
  } else {
    computerScore++;
    resultText.textContent = `You Lose! ${computer} beats ${player}`;
  }
  updateScores();
}

// Update Scores
function updateScores() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

//Reset Game
playAgainButton.addEventListener("click", () => {
  resultText.textContent = "Choose an Option!";
});

resetScoreButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  updateScores();
  resultText.textContent = "Scores reset! Choose an Option!";
});

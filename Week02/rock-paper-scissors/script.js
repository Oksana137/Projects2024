let userChoice = "";
let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".choice-button");
const resultContainer = document.getElementById("result");

let setButtonsToDefault = function () {
  buttons.forEach((button) => {
    button.classList.remove("bg-gray-400");
  });
};

let handleButtonClick = function (event) {
  setButtonsToDefault();
  userChoice = event.target.id;
  event.target.classList.add("bg-gray-400");
};

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScore(result) {
  if (result.winner == "draw") {
    return;
  }

  if (result.winner == "user") {
    userScore++;
  } else {
    computerScore++;
  }

  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice == computerChoice) {
    return { winner: "draw", message: "Draw" };
  }

  if (userChoice == "paper" && computerChoice == "rock" ||
    userChoice == "rock" && computerChoice == "scissors" ||
    userChoice == "scissors" && computerChoice == "paper"    
  ) {
    return {"winner": "user", "message": "You win"}
  } else {
    return {"winner": "computer", "message": "You lose"};
  }
}

const play_btn = document.getElementById("play-button");
play_btn.addEventListener("click", (event) => {
  if (!userChoice.length) {
    window.alert("Please provide exactly rock or paper or scissors");
    return;
  }
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  updateScore(result);
  
  resultContainer.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result.message}!`;
});

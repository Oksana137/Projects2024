// node rockPaperScissors.js rock
// # Output: You chose rock. Computer chose scissors. You win!

const validChoices = ["rock", "paper", "scissors"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice == computerChoice) {
    return "Draw";
  }

  switch (userChoice) {
    case "paper":
      return computerChoice == "rock" ? "You win" : "You lose";
    case "rock":
      return computerChoice == "scissors" ? "You win" : "You lose";
    case "scissors":
      return computerChoice == "paper" ? "You win" : "You lose";
  }
}

function main() {
  const args = process.argv.slice(2);
  if (args.length !== 1) {
    console.error("Please provide exactly rock or paper or scissors");
    process.exit(1);
  }

  const userChoice = args[0];

  if (!validChoices.includes(userChoice)) {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    process.exit(1);
  }

  const computerChoice = validChoices[getRandomInt(3)];

  const result = determineWinner(userChoice, computerChoice);

  console.log(
    `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}!`
  );
}

main();

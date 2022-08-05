const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;

computerChoice = () => {
	Math.floor(Math.random * 3);
};

possibleChoices.forEach((possibleChoice) =>
	possibleChoice.addEventListener("click", (event) => {
		userChoice = event.target.id;
		userChoiceDisplay.innerHTML = userChoice;
		generateComputerChoice();
		computerChoiceDisplay.innerHTML = computerChoice;
		resultDisplay.innerHTML = generateResult();
		score.innerHTML = generateScore();
	})
);

function generateComputerChoice() {
	let choice = Math.floor(Math.random() * 3);
	if (choice === 0) {
		computerChoice = "rock";
	}
	if (choice === 1) {
		computerChoice = "paper";
	}
	if (choice === 2) {
		computerChoice = "scissors";
	}
}

function generateResult() {
	if (userChoice === computerChoice) {
		return "It's a draw";
	}
	// Winning statements
	if (userChoice === "paper" && computerChoice === "rock") {
		userScore++;
		if (userScore > 4) {
			resetGame();
			return "You Win the Game!";
		}
		return "You Win!";
	}
	if (userChoice === "rock" && computerChoice === "scissors") {
		userScore++;
		if (userScore > 4) {
			resetGame();
			return "You Win the Game!";
		}
		return "You Win!";
	}
	if (userChoice === "scissors" && computerChoice === "paper") {
		userScore++;
		if (userScore > 4) {
			resetGame();
			return "<br> You Win the Game!";
		}
		return "You Win!";
	}
	// Losing statements
	if (computerChoice === "paper" && userChoice === "rock") {
		computerScore++;
		if (computerScore > 4) {
			resetGame();
			return "You Lost the Game!";
		}
		return "You Lose!";
	}
	if (computerChoice === "scissors" && userChoice === "paper") {
		computerScore++;
		if (computerScore > 4) {
			resetGame();
			return "You Lost the Game!";
		}
		return "You Lose!";
	}
	if (computerChoice === "rock" && userChoice === "scissors") {
		computerScore++;
		if (computerScore > 4) {
			resetGame();
			return "You Lost the Game!";
		}
		return "You Lose!";
	}
}
function generateScore() {
	return (
		"Computer Score: " +
		computerScore +
		"/5 <br> User Score: " +
		userScore +
		"/5"
	);
}

function resetGame() {
	userScore = 0;
	computerScore = 0;
}

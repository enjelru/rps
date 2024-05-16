
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    console.log("computer choice is rock");
    return "rock";
  } else if (randomNumber < 0.66) {
    console.log("computer choice is paper");
    return "paper";
  } else {
    console.log("computer choice is scissor");
    return "scissor";
  }
}

function getHumanChoice() {
  const playerInput = prompt("Select Rock, Paper, or Scissor: ");

  if (playerInput === null) {
    alert("You canceled the prompt. Finish the game!");
    return getHumanChoice();
  } else if (playerInput === "") {
    alert("Please provide a valid choice.");
    return getHumanChoice();

  }

  const humanChoice = getUserInput.toLowerCase();
  if (humanChoice === "rock") {
    console.log("you choose rock");
    return "rock";
  } else if (humanChoice === "paper") {
    console.log("you choose paper");
    return "paper";
  } else {
    console.log("you choose scissor");
    return "scissor";
  }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`${humanChoice} and ${computerChoice} the results are draw`);
      alert(`${humanChoice} and ${computerChoice} the results are draw. Your score: ${humanScore}, Computer score: ${computerScore}`);
      
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log(`You lose! ${computerChoice} beats Rock`);
      ++computerScore;
      alert(`You lose! ${computerChoice} beats Rock. Your score: ${humanScore}, Computer score: ${computerScore}`);
      
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
      console.log("You Win! Rock beats Scissor");
      ++humanScore;
      alert(`You Win! Rock beats Scissor. Your score: ${humanScore}, Computer score: ${computerScore}`);
      
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You Win! Paper beats Rock");
      ++humanScore;
      alert(`You Win! Paper beats Rock. Your score: ${humanScore}, Computer score: ${computerScore}`);
      
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
      console.log("You lose! Scissor beats Paper");
      ++computerScore;
      alert(`You lose! Scissor beats Paper. Your score: ${humanScore}, Computer score: ${computerScore}`);
      
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
      console.log("You lose! Rock beats Scissor");
      ++computerScore;
      alert(`You lose! Rock beats Scissor. Your score: ${humanScore}, Computer score: ${computerScore}`);
      
    } else {
      console.log("You Win! Scissor beats Paper");
      ++humanScore;
      alert(`You Win! Scissor beats Paper. Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
    console.log("Your score: ", humanScore, "Computer score: ", computerScore);

    if (humanScore === 5 || computerScore === 5) {
      gameWinner(humanScore, computerScore);
    } else {
      playGame();
    }
  }

  playRound(humanSelection, computerSelection);
}

//invoke function resetGame
function resetGame() {
  humanScore = 0;
  computerScore = 0;
}

// alert game winners
function gameWinner(humanScore, computerScore) {
  if (humanScore === 5) {
    console.log("Congratulations, You Win!")
    alert("Congratulation, You Win!");
    resetGame();
    playAgain();
    
  } else if (computerScore === 5) {
    console.log("Loose streak malala!");
    alert("Loose streak malala! Computer wins. Try again!");
    resetGame();
    playAgain();
  }
}

// invoke play again
function playAgain() {
  const playAgain = prompt("Would you like to play again? (yes/no)");
  if (playAgain.toLowerCase() === "yes") {
    playGame();
  } else {
    console.log("Game over! Thank you for playing!")
    alert("Game over! Thank you for playing!");
    return;
  }
}

//invoke function playGame
playGame();


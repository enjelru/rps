function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    console.log("computer choice is rock");
    return "\u{1F44A}";
  } else if (randomNumber < 0.66) {
    console.log("computer choice is paper");
    return "\u{1f590}";
  } else {
    console.log("computer choice is scissor");
    return "\u270c";
  }
}

let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const showWinner = document.querySelector("h3");
const playerResult = document.querySelector("#player");
const computerResult = document.querySelector("#computer");

function playGame() {
  rock.addEventListener("click", () => {
    console.log("you choose rock");
    showWinner.textContent = "";
    const playerSelection = "\u{1F44A}";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    return "\u{1F44A}";
  })

  paper.addEventListener("click", () => {
    console.log("you choose paper");
    showWinner.textContent = "";
    const playerSelection = "\u{1f590}";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    return "\u{1f590}";
  })

  scissor.addEventListener("click", () => {
    console.log("you choose scissor");
    showWinner.textContent = "";
    const playerSelection = "\u270c";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    return "\u270c";
  })

}

const display = document.querySelector(".display");
const plChoice = document.querySelector("#plChoice");
const pcChoice = document.querySelector("#pcChoice");

function playRound(playerChoice, computerChoice) {

  if (playerChoice === computerChoice) {
    console.log(`It's a tie! ${playerChoice} against ${computerChoice}. Your score: ${playerScore}, Computer score: ${computerScore}`);

    plChoice.textContent = `${playerChoice}`;
    pcChoice.textContent = `${computerChoice}`;
    display.textContent = `It's a tie! ${playerChoice} against ${computerChoice}.`;

  } else if (playerChoice === "\u{1F44A}" && computerChoice === "\u270c" ||
    (playerChoice === "\u270c" && computerChoice === "\u{1f590}") ||
    (playerChoice === "\u{1f590}" && computerChoice === "\u{1F44A}")
  ) {
    ++playerScore;
    console.log(`You Win! ${playerChoice} beats ${computerChoice}. Your score: ${playerScore}, Computer score: ${computerScore}`);

    plChoice.textContent = `${playerChoice}`;
    pcChoice.textContent = `${computerChoice}`;
    display.textContent = `You Win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    ++computerScore;
    console.log(`You lose! ${playerChoice} against ${computerChoice}. Your score: ${playerScore}, Computer score: ${computerScore}`);
    plChoice.textContent = `${playerChoice}`;
    pcChoice.textContent = `${computerChoice}`;
    display.textContent = `You lose! ${playerChoice} against ${computerChoice}`;
  }

  playerResult.textContent = playerScore;
  computerResult.textContent = computerScore;
  if (playerScore === 5 || computerScore === 5) {
    gameWinner(playerScore, computerScore);
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

// alert game winners
function gameWinner(playerScore, computerScore) {

  if (playerScore === 5) {
    console.log("Congratulations, You win the game! " + "Player score: " + playerScore);
  } else if (computerScore === 5) {
    console.log("You lose the game! " + "Computer score: " + computerScore);
  }

  display.textContent = "";
  resetGame();
  playAgain(playerScore, computerScore);

}

function playAgain(playerWins, computerWins) {

  const message = playerWins === 5 ? "Congratulations, You win the game! " : "You lose the game!";

  const playAgainBox = document.querySelector("#playAgain");
  const firstContainer = document.createElement("div");
  firstContainer.setAttribute("class", "modal");

  const modal = document.createElement("div");
  modal.className = "modalContent";
  modal.setAttribute("class", "modalContent");

  const paraWinner = document.createElement("p");
  paraWinner.textContent = message;
  paraWinner.setAttribute("style", "font-size: 3rem; padding-bottom: 0.5rem;");
  firstContainer.appendChild(paraWinner);

  const para = document.createElement("p");
  para.textContent = "Play again?";
  para.setAttribute("style", "color: rgb(194, 43, 131); text-align: center; padding-bottom: 10px; margin: 0");
  modal.appendChild(para);

  const yesBtn = document.createElement("button");
  yesBtn.classList.add("playAgainBtn");
  yesBtn.textContent = "Yes";
  modal.appendChild(yesBtn);

  const noBtn = document.createElement("button");
  noBtn.classList.add("playAgainBtn");
  noBtn.textContent = "No";
  modal.appendChild(noBtn);

  firstContainer.appendChild(modal);
  playAgainBox.appendChild(firstContainer);

  yesBtn.addEventListener("click", () => {
    console.log("Game reset");
    playAgainBox.removeChild(firstContainer);

    showWinner.textContent = "Game reset";
    playerResult.textContent = "0";
    computerResult.textContent = "0";
    plChoice.textContent = "";
    pcChoice.textContent = "";
    display.textContent = "Choose the following:";

    return;
  });

  noBtn.addEventListener("click", () => {
    console.log("Game over! Thank you for playing!")
    playAgainBox.removeChild(firstContainer);

    showWinner.textContent = "Game over! Thank you for playing!";
    playerResult.textContent = "0";
    computerResult.textContent = "0";
    plChoice.textContent = "";
    pcChoice.textContent = "";
    display.textContent = "Start the game!";

    return;
  });
}

playGame();


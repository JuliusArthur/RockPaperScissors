// Define Human and Computer Choices

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
        if (getComputerChoice === 0) {
            computerChoice = "rock";
        }
        else if (getComputerChoice === 1) {
            computerChoice = "paper";
        }
        else if (getComputerChoice === 2) {
            computerChoice = "scissors";
        }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors! Spell correctly!");
        humanChoice = getHumanChoice.toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            return humanChoice;
        }
        else {
            alert("Invalid Response! Try Again.")
            return getHumanChoice;
        }      
}

let humanScore = 0;
let computerScore = 0;

// Define Round

function playRound(human, computer) {
    if (human === "rock" && computer === "rock") {
        return alert("Tie!");
    }
    else if (human === "rock" && computer === "paper") {
        computerScore++;
        return alert("Paper beats Rock.  Computer wins this round!");
    }
    else if (human === "rock" && computer === "scissors") {
        humanScore++;
        return alert("Rock beats Scissors.  Human wins this round!")
    }
    else if (human === "paper" && computer === "rock") {
        humanScore++;
        return alert("Paper beats Rock.  Human wins this round!");
    }
    else if (human === "paper" && computer === "paper") {
        return alert("Tie!");
    }
    else if (human === "paper" && computer === "scissors") {
        computerScore++;
        return alert("Scissors beats Paper.  Computer wins this round!")
    }
    else if (human === "scissors" && computer === "rock") {
        computerScore++;
        return alert("Rock beats Scissors.  Computer wins this round!");
    }
    else if (human === "scissors" && computer === "paper") {
        humanScore++;
        return alert("Scissors beats Paper.  Human wins this round!");
    }
    else if (human === "scissors" && computer === "scissors") {
        return alert("Tie!");
    }
}

// Define Game

function playGame() {
    alert("Welcome to Rock, Paper, Scissors. We're going to play 5 rounds!");
    playRound(getHumanChoice(), getComputerChoice());

    alert("After first round, the score is: You: ${humanScore}. Computer: ${computerScore}. Next Round!");
    playRound(getHumanChoice(), getComputerChoice());

    alert("After second round, the score is: You: ${humanScore}.  Computer: ${computerScore}. Next Round!");
    playRound(getHumanChoice(), getComputerChoice());

    alert("After third Round, the score is: You: ${humanScore}.  Computer: ${computerScore}.  Next Round!");
    playRound(getHumanChoice(), getComputerChoice());

    alert("After four rounds, the score is: You: ${humanScore}.  Computer: ${computerScore}. Final Round!");
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        alert("Congratulations, you win the game!");
    }
    else if (humanScore < computerScore) {
        alert("I'm sorry!  You lose the game!");
    }
    else if (humanScore === computerScore) {
        alert("You tied the computer!");
    }
}
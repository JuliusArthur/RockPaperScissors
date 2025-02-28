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

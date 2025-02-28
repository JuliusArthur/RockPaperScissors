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

function playRound() {
    
}
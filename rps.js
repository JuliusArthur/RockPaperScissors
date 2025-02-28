function getComputerChoice() {
    getComputerChoice = Math.floor(Math.random() * 3);
    if (getComputerChoice) {
        if (getComputerChoice == 0) {
            console.log("Computer chooses Rock");
        }
        else if (getComputerChoice == 1) {
            console.log("Computer chooses Paper");
        }
        else if (getComputerChoice == 2) {
            console.log("Computer chooses Scissors")
        }
    }
}

// Code Human Choice

function getHumanChoice() {
    getHumanChoice = prompt("Choose Rock, Paper, or Scissors! Spell correctly!");
    getHumanChoice = getHumanChoice.toLowerCase();
            if (getHumanChoice == "rock") {
                console.log("Human chooses Rock");
            }
            else if (getHumanChoice == "paper") {
                console.log("Human chooses Paper");
            }
            else if (getHumanChoice == "scissors") {
                console.log("Human chooses Scissors");
            }
            else {
                alert("Invalid Response!");
            }
}

// Declare Score and Move Variables

humanScore = 0;
computerScore = 0;

// Play Single Round

function playRound() {
    
}

// Play Entire Game
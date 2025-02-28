// Play Single Round

humanScore = 0;
computerScore = 0;

function playRound() {
    let getComputerChoice = Math.floor(Math.random() * 3);
        let computerChoice; {
            if (getComputerChoice === 0) {
                computerChoice = "rock";
            }
            else if (getComputerChoice === 1) {
                computerChoice = "paper";
            }
            else if (getComputerChoice === 2) {
                computerChoice = "scissors";
            }

    let getHumanChoice = prompt("Choose Rock, Paper, or Scissors! Spell correctly!");
        let humanChoice = getHumanChoice.toLowerCase();
            if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
                return humanChoice;
            }
            else {
                alert("Invalid Response! Try Again.");
            }
            
   
    }    
}

playRound();

// Play Entire Game
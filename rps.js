// Get prompt from Human and output Human Choice

let getHumanChoice = prompt("Choose 0 for Rock, 1 for Paper, 2 for Scissors");
    if (getHumanChoice == 0) {
        console.log("Human chooses Rock!");
    }
    else if (getHumanChoice == 1) {
        console.log("Human chooses Paper!");
    }
    else if (getHumanChoice == 2) {
        console.log("Human chooses Scissors!");
    }
    else {
        alert("Invalid Response!");
    }
    

// Get random integer and output Computer Choice

let getComputerChoice = Math.floor(Math.random() * 3);

    if (getComputerChoice == 0) {
        console.log("Computer chooses Rock!");
    }
    else if (getComputerChoice == 1) {
        console.log("Computer chooses Paper!");
    }
    else {
        console.log("Computer chooses Scissors!");
    }

// Establish Score variables

humanScore = 0; humanScore++; if (humanScore >= 5) {
    console.log("Human Wins!");
    endGame();
} 
computerScore = 0; computerScore++; if (computerScore >= 5) {
    console.log("Computer Wins!");
    endGame();
}


// Establish Round

// Establish Game

// Establish Winner


    
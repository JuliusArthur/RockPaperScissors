// Get prompt from Human and output Human Choice

let getHumanChoice = prompt("Choose 0 for Rock, 1 for Paper, 2 for Scissors");
    if (getHumanChoice == 0) {
        console.log("Human chooses Rock!");
    }
    else if (getHumanChoice == 1) {
        console.log("Human chooses Rock!");
    }
    else if (getHumanChoice == 2) {
        console.log("Human chooses Scissors!");
    }
    else {
        alert("Invalid Response!");
    }
    

// Get random integer and output Computer Choice

let getComputerChoice = Math.floor(Math.random() * 3);

    if (getComputerChoice === 0) {
        console.log("Computer chooses Rock!");
    }
    else if (getComputerChoice === 1) {
        console.log("Computer chooses Paper!");
    }
    else {
        console.log("Computer chooses Scissors!");
    }

// Establish Score variables

let humanScore = 0;
let computerScore = 0;

//Play Round

if (getHumanChoice === 0 && getComputerChoice === 0) {
    humanScore;
    computerScore;
    console.log("Tie!");
}
else if (getHumanChoice === 0 && getComputerChoice === 1) {
    humanScore;
    computerScore += 1;
    console.log("Computer Wins!");
}
else if (getHumanChoice === 0 && getComputerChoice === 2) {
    humanScore += 1;
    computerScore;
    console.log("Human Wins!");
}

if (getHumanChoice === 1 && getComputerChoice === 0) {
    humanScore += 1;
    computerScore;
    console.log("Human Wins!");
}
else if (getHumanChoice === 1 && getComputerChoice === 1) {
    humanScore;
    computerScore;
    console.log("Tie!");
}
else if (getHumanChoice === 1 && getComputerChoice === 2) {
    humanScore;
    computerScore += 1;
    console.log("Computer Wins!");
}

if (getHumanChoice === 2 && getComputerChoice === 0) {
    humanScore;
    computerScore += 1;
    console.log("Computer Wins!");
}
else if (getHumanChoice ===2 && getComputerChoice === 1) {
    humanScore += 1;
    computerScore;
    console.log("Human Wins!");
}
else if (getHumanChoice === 2 && getComputerChoice === 2) {
    humanScore;
    computerScore;
    console.log("Tie!");
}



console.log("Human score " + humanScore, "Computer score " + computerScore);









    
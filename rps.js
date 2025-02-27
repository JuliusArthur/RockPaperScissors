// Get random integer 

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

let getHumanChoice = prompt("Choose 0 for Rock, 1 for Paper, 2 for Scissors");
    if (getHumanChoice === 0) {
        console.log("Human chooses Rock!");
    }
    else if (getHumanChoice === 1) {
        console.log("Human chooses Rock!");
    }
    else {
        console.log("Human chooses Scissors!");
    }


    
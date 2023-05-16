function getComputerChoice() {
    const val = Math.floor(Math.random() * 3);

    if (val === 0) {
        return "rock";
    }
    else if (val === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Draw!"
        }
        else if (computerSelection === "paper") {
            return "Lose!"
        }
        else if (computerSelection === "scissors") {
            return "Win!"
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "Win!"
        }
        else if (computerSelection === "paper") {
            return "Draw!"
        }
        else if (computerSelection === "scissors") {
            return "Lose!"
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "Lose!"
        }
        else if (computerSelection === "paper") {
            return "Win!"
        }
        else if (computerSelection === "scissors") {
            return "Draw!"
        }
    }
}

function getPlayerChoice() {
    let choice = prompt();
    return choice
}

function game() {
    let playerScore = 0
    let compScore = 0

    for (let i = 0; i < 5; i++) {
        let result = play(getPlayerChoice(), getComputerChoice())
        if (result === "Lose!") {
            compScore += 1
        }
        else if (result === "Win!") {
            playerScore += 1
        }
    }

    if (compScore > playerScore) {
        console.log("You lose the game!")
    }
    else if (compScore < playerScore) {
        console.log("You win the game!")
    }
    else {
        console.log("You draw!")
    }
}

game()
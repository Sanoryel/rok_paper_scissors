function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    let result;
    switch (computerChoice) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
            break;
    }
    return result;
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toUpperCase()) {
        case "ROCK":
            switch (computerSelection.toUpperCase()) {
                case "ROCK":
                    return "It's a draw! Rock equals Rock";
                case "PAPER":
                    return "You Lose! Paper beats Rock";
                case "SCISSORS":
                    return "You Win! Rock beats Scissors";
            }
            break;
        case "PAPER":
            switch (computerSelection.toUpperCase()) {
                case "ROCK":
                    return "You Win! Paper beats Rock";
                case "PAPER":
                    return "It's a draw! Paper equals Paper";
                case "SCISSORS":
                    return "You Lose! Scissors beats Paper";
                    break;
            }
        case "SCISSORS":
            switch (computerSelection.toUpperCase()) {
                case "ROCK":
                    return "You Lose! Rock beats Scissors";
                case "PAPER":
                    return "You Win! Scissors beats Paper";
                case "SCISSORS":
                    return "It's a draw! Scissors equals Scissors";
            }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    let playerChoice;
    let computerChoice;
    let roundResult;
    for(let i = 0; i < 5; i++){
        playerChoice = prompt("Your choice ? (Rock/Paper/Scissors)");
        computerChoice = getComputerChoice();
        roundResult = playRound(playerChoice, computerChoice);
        if(roundResult.charAt(4) == "W"){
            scorePlayer ++;
        }else if (roundResult.charAt(4) == "L"){
            scoreComputer ++;
        }
        console.log("[Round " + String(i+1) + "] :" + roundResult);
    }
    if(scorePlayer > scoreComputer){
        console.log("You Win!")
    }else if (scoreComputer > scorePlayer){
        console.log("You Lose!")
    }else{
        console.log("It's a draw!")
    }
}

game();
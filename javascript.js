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

let scorePlayer;
let scoreComputer;
let roundNumber;

let buttonContainer = document.querySelector('#playButtons');
let buttons = document.querySelectorAll('.action');

let  = buttonContainer.childNodes;
console.log(buttons);

let result = document.querySelector('h3');
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");

let textToDisappear = document.querySelector("h2");
let tryAgainButton =  document.querySelector("#tryAgain");

restart();

function restart(){
    scorePlayer = 0;
    scoreComputer = 0;
    roundNumber = 0;

    textToDisappear.style.display = "flex";
    buttonContainer.style.display = "flex";

    tryAgainButton.style.display = "none";
    result.style.display = "none";
    result.style.fontSize = "20px";

    playerScore.textContent = `Player: 0`
    computerScore.textContent = `Computer: 0`
}
tryAgainButton.addEventListener("click", restart);


function buttonClick(button){ 
    let res = playRound(button.children[1].textContent, getComputerChoice());
        result.textContent = res;
        result.style.display = "flex"

        if (res.charAt(4) == "W") {
            scorePlayer++;
            result.style.color = "green";
        } else if (res.charAt(4) == "L") {
            scoreComputer++;
            result.style.color = "red";
        }else{
            result.style.color = "black";
        }
        playerScore.textContent = `Player: ${scorePlayer}`
        computerScore.textContent = `Computer: ${scoreComputer}`
    
        if(scorePlayer >=5 || scoreComputer >=5){
            textToDisappear.style.display = "none";
            buttonContainer.style.display = "none";
            tryAgainButton.style.display = "block"
            if (scorePlayer >= 5) {
                result.textContent = "You Win!";
                result.style.color = "green";
                result.style.fontSize = "50px";
                
            } else if (scoreComputer >= 5) {
                result.textContent = "You Lose!";
                result.style.color = "red";
                result.style.fontSize = "50px";
            }
        }
        roundNumber++;
}
buttons.forEach(button=>button.addEventListener("click", function(){buttonClick(button) }));


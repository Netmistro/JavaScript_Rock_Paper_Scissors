/* 
Code for Rock Paper Scissors
Created by Arnold Bradshaw
11th July, 2022
*/

/* 
Constants go here
*/
let btnReset = document.querySelector('.btn-reset');
let btnRPS = document.querySelectorAll('.rpsButton');
let myScore = document.querySelector('.my-score');
let pcScore = document.querySelector('.pc-score');
let alertText = document.querySelector('.alert-text');

/* 
Functions go here
*/

// GLobal Scorekeeping
let computerScore = 0;
let playerScore = 0;

// Computer generated choice, this returns the value Rock, Paper or Scissors
getComputerChoice = () => {
    let rpsChoices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    return computerChoice;
};

playGame = () => {
    btnRPS.forEach(rpsButton => {
        rpsButton.addEventListener('click', () => {
            const compChoice = getComputerChoice();
            console.log('Computer Choice: ', compChoice);
            console.log('My Choice: ', rpsButton.value);
            if (rpsButton.value == compChoice) {
                playerScore = playerScore;
                computerScore = computerScore;
                alertText.innerText = "It's a DRAW";
            } else if (rpsButton.value == 'Rock' && compChoice == 'Scissors') {
                playerScore += 1;
                computerScore -= 1;
                alertText.innerText = "You WIN, PC LOSE";
            } else if (rpsButton.value == 'Paper' && compChoice == 'Rock') {
                playerScore += 1;
                computerScore -= 1;
                alertText.innerText = "You WIN, PC LOSE";
            } else if (rpsButton.value == 'Scissors' && compChoice == 'Paper') {
                playerScore += 1;
                computerScore -= 1;
                alertText.innerText = "You WIN, PC LOSE";
            } else {
                playerScore -= 1;
                computerScore += 1;
                alertText.innerText = "You LOSE";
            }
            myScore.innerText = 'ME: ' + playerScore;
            pcScore.innerText = 'PC: ' + computerScore;
        });
    });
    endGame();
};

// Reset the game
endGame = () => {
    btnReset.addEventListener('click', () => {
        myScore.innerText = "0";
        pcScore.innerText = "0";
        alertText.innerText = "Please Make Your Selection Above";
        playerScore = 0;
        computerScore = 0;
    });
};

// Playgame function
playGame();
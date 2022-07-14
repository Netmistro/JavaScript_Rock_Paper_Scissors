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

// Computer generated choice via function, this returns the words Rock, Paper or Scissors
getComputerChoice = () => {
    let rpsChoices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    return computerChoice;
};

// Calculate who won
playerClickRPS = (playerChoice) => {
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(playerChoice);
    // let totalScore = getResult(playerChoice, computerChoice);
    // showResult(totalScore, playerChoice, computerChoice);
};

playerClickRPS();

// function to compare results and get results
getResult = (playerChoice, computerChoice) => {
    // console.log(computerChoice);
    // console.log(playerChoice);
    // if (playerChoice == computerChoice) {
    //     playerScore = 0;
    //     computerScore = 0;
    // }
    // else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    //     playerScore = playerScore + 1;
    //     computerScore = 0;
    // } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    //     playerScore = playerScore + 1;
    //     computerScore = 0;
    // }
    // else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    //     playerScore = playerScore + 1;
    //     computerScore = 0;
    // }
    // else {
    //     playerScore = playerScore - 1;
    //     computerScore = computerScore + 1;
    // }
    // console.log({ totalScore });
};

// Function to update the screen text
showResult = (totalScore, playerChoice, computerChoice) => {
    // if (totalScore.playerScore = 0) {
    //     alertText.innerText = "DRAW";
    // } else if (playerScore = 1) {
    //     alertText.innerText = "You WIN";
    // } else {
    //     alertText.innerText = "You LOOSE";
    // }
    // myScore.innerText = totalScore.playerScore;
    // pcScore.innerText = totalScore.computerScore;
};

// funtion to play game
playGame = () => {
    // btnRPS.forEach(rpsButton => {
    //     rpsButton.addEventListener('click', (e) => {
    //         playerClickRPS(rpsButton.value);
    //         // getResult();
    //         // showResult();
    //     });
    // });
    // endGame();
};

// function to reset all the text to zero
endGame = () => {
    // btnReset.addEventListener('click', () => {
    //     myScore.innerText = '0';
    //     pcScore.innerText = '0';
    // });
};

// Call the play game function
// playGame();
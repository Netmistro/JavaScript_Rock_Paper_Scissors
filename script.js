/* 
Code for Rock Paper Scissors
Created by Arnold Bradshaw
11th July, 2022
*/

/* 
Constants go here
*/
const btnReset = document.querySelector('.btn-reset');
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const myScore = document.querySelector('.my-score');
const pcScore = document.querySelector('.pc-score');
const alertText = document.querySelector('.alert-text');
let choises = ['rock', 'paper', 'scissors'];

/* 
Functions go here
*/
// Computer generated choice via function
getComputerChoice = () => {
    let computerChoice = choises[Math.floor(Math.random() * choises.length)];
    return computerChoice;
};

// Reset button to reset the game
btnReset.addEventListener('click', (e) => {
    endGame();
});

// function to compare results or get results
getResult = (playerChoice, computerChoice) => {
    let score = 0;
    if (playerChoice == computerChoice) {
        score = 0;
    }
    else if ((playerChoice == 0 && computerChoice == 1) || playerChoice == 0 && computerChoice == 2) {
        score = 1;
    }
    else {
        score = -1;
    }
    return score;
};

// Function to update the screen text
showResult = (score, playerChoice, computerChoice) => {
    if (playerChoice == computerChoice) {
        score = 0;
        alertText.innerText = "You DRAW";
    } else if (playerChoice > computerChoice) {
        score = 1;
        alertText.innerText = "You WIN";
    } else {
        alertText.innerText = "You LOSE";
        score = -1;
    }
};

// player click RPS button
playerClickRPS = () => {
    btnRock.addEventListener('click', (e) => {
        console.log(e.target.value);
        getComputerChoice();
    });
    btnPaper.addEventListener('click', (e) => {
        console.log(e.target.value);
        getComputerChoice();

    });
    btnScissors.addEventListener('click', (e) => {
        console.log(e.target.value);
        getComputerChoice();
    });
};

// funtion to play game
playGame = () => {

};

// function to reset all the text to zero
endGame = () => {
    myScore.innerText = 'My Score: ' + 0;
    pcScore.innerText = 'PC Score: ' + 0;
};

// Call the play game function
playGame();
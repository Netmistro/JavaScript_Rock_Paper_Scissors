/* 
Code for Rock Paper Scissors
Created by Arnold Bradshaw
11th July, 2022
*/

/* 
Constants go here
*/
const btnReset = document.querySelector('.btn-reset');
let btnRPS = document.querySelectorAll('.rpsButton');
const myScore = document.querySelector('.my-score');
const pcScore = document.querySelector('.pc-score');
const alertText = document.querySelector('.alert-text');

/* 
Functions go here
*/

// Computer generated choice via function
getComputerChoice = () => {
    let rpsChoices = ['rock', 'paper', 'scissors'];
    let computerChoice = rpsChoices[Math.floor(Math.random() * choises.length)];
    return computerChoice;
};

// function to compare results or get results
getResult = (playerChoice, computerChoice) => {
    let score = 0;
    if (playerChoice === computerChoice) {
        score = 0;
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1;
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1;
    }
    else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        score = 1;
    }
    else {
        score = -1;
    }
    return score;
};

// Function to update the screen text
showResult = (score, playerChoice, computerChoice) => {
    switch (score) {
        case 0:
            alertText.innerText = "You DRAW";
            break;
        case 1:
            alertText.innerText = "You WIN";
            break;
        case -1:
            alertText.innerText = "You LOSE";
            break;
        default:
            break;
    };
    myScore.innerText = `${score}`;
};

// Calculate who won
playerClickRPS = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const score = getResult(playerChoice.value, computerChoice);
    showResult(score, playerChoice.value, computerChoice);
};

// funtion to play game
playGame = () => {
    btnRPS.forEach(rpsButton => {
        rpsButton.addEventListener('click', (e) => {
            console.log(e.value);
            playerClickRPS(rpsButton);
        });
    });
    endGame();
};

// function to reset all the text to zero
endGame = () => {
    myScore.innerText = '';
    pcScore.innerText = '';
};

// Call the play game function
playGame();
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
const rockPaperScissorsDiv = document.querySelectorAll('.pic');
let choises = ['rock', 'paper', 'scissors'];

// Define score
let score = 0;

/* 
Event Listeners go here
*/
btnReset.addEventListener('click', (e) => {
    resetGame();
});

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

/* 
Functions go here
*/
// Computer generated choice via function
getComputerChoice = () => {
    let computerChoice = choises[Math.floor(Math.random() * choises.length)];
    return computerChoice;
};


// function to reset all the text to zero
resetGame = () => {
    myScore.innerText = 'My Score: ' + 0;
    pcScore.innerText = 'PC Score: ' + 0;
};

// function to compare results or get results

getResult = (playerChoice, computerChoice) => {

};


// Function to update the screen text
showResult = (score, playerChoice, computerChoice) => {

};

// player click RPS button
playerClickRPS = () => { };

// funtion to play game
playGame = () => { };
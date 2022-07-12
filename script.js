/* 
Code for Rock Paper Scissors
Created by Arnold Bradshaw
11th July, 2022
*/

// Constants go here
const btnReset = document.querySelector('.btn-reset');
const imgRock = document.querySelector('.rock')
const imgPaper = document.querySelector('.paper')
const imgScissors = document.querySelector('.scissors')
const myScore = document.querySelector('.my-score')
const pcScore = document.querySelector('.pc-score')
let computerChoises = ['rock', 'paper', 'scissors']

// Event listeners go here
btnReset.addEventListener('click', (e) => {
    console.log(e.target);
    myScore.innerText = 'My Score: ' + 0
    pcScore.innerText = 'PC Score: ' + 0
})

imgRock.addEventListener('click', (e) => {
    console.log(e.target);
})
imgPaper.addEventListener('click', (e) => {
    console.log(e.target);
})
imgScissors.addEventListener('click', (e) => {
    console.log(e.target);
})

// Functions go here
// Randon generator for the PC

let computerChoice = () => Math.floor(Math.random() * 3) + 1;
let compChoice = computerChoises[computerChoice()]
console.log(compChoice);
console.log(computerChoises[0]);
console.log(computerChoice());
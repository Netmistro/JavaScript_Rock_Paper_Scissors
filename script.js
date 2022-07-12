/* 
Code for Rock Paper Scissors
Created by Arnold Bradshaw
11th July, 2022
*/

/* 
Constants go here
*/

const btnReset = document.querySelector('.btn-reset');
const imgRock = document.querySelector('.rock')
const imgPaper = document.querySelector('.paper')
const imgScissors = document.querySelector('.scissors')
const myScore = document.querySelector('.my-score')
const pcScore = document.querySelector('.pc-score')
const rockPaperScissorsDiv = document.querySelectorAll('.pic')
let computerChoises = ['rock', 'paper', 'scissors']

let score = {
    Me: 0,
    PC: 0,
}

/* 
Event Listeners go here
*/

btnReset.addEventListener('click', (e) => {
    myScore.innerText = 'My Score: ' + 0
    pcScore.innerText = 'PC Score: ' + 0
})

imgRock.addEventListener('click', (e) => {
    compareChoises()
})
imgPaper.addEventListener('click', (e) => {
    compareChoises()
})
imgScissors.addEventListener('click', (e) => {
    compareChoises()
})

/* 
Functions go here
*/
// Computer generated choice via function
randomGeneratedPCChoice = () => {
    let computerChoice = computerChoises[Math.floor(Math.random() * 3).valueOf()];
    console.log(computerChoice);
}

// function to compare results
compareChoises = () => {
    let p = randomGeneratedPCChoice()
    // I chose the clicked item so analyse the PC choice, p
    switch (p) {
        case p === 'rock':
            console.log('Draw');
            break;
        case p === 'paper':
            console.log("Win");
            break;
        default:
            console.log("Lost");
            break;
    }
}
// Function to update the screen text


// function to update scores
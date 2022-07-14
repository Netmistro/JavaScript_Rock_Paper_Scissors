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
let totalScore = { computerScore: 0, playerScore: 0 };

// Computer generated choice via function
getComputerChoice = () => {
    let rpsChoices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    return computerChoice;
};

// function to compare results or get results
getResult = (totalScore, playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        playerScore = 0;
        computerScore = 0;
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        playerScore = 1;
        computerScore = 0;
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        playerScore = 1;
        computerScore = 0;
    }
    else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        playerScore = 1;
        computerScore = 0;
    }
    else {
        playerScore = -1;
        computerScore = 1;
    }
    return totalScore;
};

// Function to update the screen text
showResult = (totalScore, playerChoice, computerChoice) => {

    if (playerScore = 0) {
        alertText.innerText = "DRAW";
    } else if (playerScore = 1) {
        alertText.innerText = "You WIN";
    } else {
        alertText.innerText = "You LOOSE";
    }

    myScore.innerText = playerScore;
    pcScore.innerText = computerScore;
};

// Calculate who won
playerClickRPS = (playerChoice) => {
    let computerChoice = getComputerChoice();
    let player1Score = getResult(playerChoice, computerChoice);
    let player2Score = getResult(playerChoice, computerChoice);
    showResult(playerScore, playerChoice, computerChoice);

    console.log(totalScore['playerScore'] += playerScore);
    console.log(totalScore['computerScore'] += computerScore);

    console.log({ totalScore });
};

// funtion to play game
playGame = () => {
    btnRPS.forEach(rpsButton => {
        rpsButton.addEventListener('click', (e) => {
            playerClickRPS(rpsButton.value);
            getResult();
            showResult();
        });
    });
    endGame();
};

// function to reset all the text to zero
endGame = () => {
    btnReset.addEventListener('click', () => {
        myScore.innerText = 'ME: ' + '0';
        pcScore.innerText = 'PC: ' + '0';
    });
};

// Call the play game function
playGame();

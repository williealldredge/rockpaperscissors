let playerScore = 0;
let compScore = 0;

const p = document.createElement('p');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const outcome = document.querySelector('.outcome');
const humanScore = document.querySelector('#humanscore');
const botScore = document.querySelector('#botscore');
const h1 = document.createElement('h1');

function getComputerChoice() { 
    let choice = Math.random() * 100;
    if (choice <= 33) {
        return 'rock';
    } else if (choice > 33 && choice < 67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

 function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        p.innerText = 'you tied, you both picked the same';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        p.innerText = 'You lose, paper beats rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        p.innerText = 'You win, rock beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        p.innerText = 'You win, paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        p.innerText = 'You lose, rock crushes scissors';
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        compScore++
        p.innerText = 'You lose, rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        p.innerText = 'You win, scissors beats paper'
    }
    outcome.appendChild(p);
 }

 const checkForWinner = (playerScore,compScore) => {
    if (playerScore === 5){
        h1.innerText = "you killled it!!!!"
    } else if (compScore === 5){
        h1.innerText = 'You lose, the bots take over'
    }
    outcome.appendChild(h1);
 }

const updateScores = (playerScore,compScore) => {
    humanScore.innerText = `Player Score: ${playerScore}`
    botScore.innerText = `Robot Score: ${compScore}`
}

rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection,computerSelection);
    updateScores(playerScore,compScore);
    checkForWinner(playerScore,compScore);

})

paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection,computerSelection);
    updateScores(playerScore,compScore);
    checkForWinner(playerScore,compScore);
})

scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore,compScore);
    checkForWinner(playerScore,compScore);
})





 /*
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > compScore) {
        console.log('You Win!');
    } else if (playerScore < compScore){
        console.log('You Lose!');
    } else {
        console.log('you tied')
    }
}

game();
*/
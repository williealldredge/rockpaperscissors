//create function 'get computer choice' that randomly returns R P or S



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

//write function that plays a single round 

 function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
   
    if (playerSelection === computerSelection){
        return "you picked the same";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++;
        return 'You lose, paper beats rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You win, rock beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You win, paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        return 'You lose, scissors beats rock';
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        compScore++;
        return 'You lose, rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        compScore++;
        return 'You win, scissors beats paper'
    }
 }
// new function called game. Plays 5 rounds and keeps score. 
 let playerScore = 0;
 let compScore = 0;
 
 
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
        playRound(playerSelection, computerSelection);
        console.log(playerScore, compScore)
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

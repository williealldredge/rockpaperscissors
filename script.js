//create function 'get computer choice' that randomly returns R P or S

function getComputerChoice() { 
    let choice = Math.random() * 100;
    
    if (choice <= 33) {
        return 'rock';
    } else if (choice > 33 && choice < 67) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

//write function that plays a single round 

 function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "you picked the same";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose, paper beats scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win, rock beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win, paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose, scissors beats rock';
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'You lose, rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win, scissors beats paper'
    }
 }

const playerSelection = prompt('Rock, Paper, or Scissors?');
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))
console.log(playerSelection, computerSelection)




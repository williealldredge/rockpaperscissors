//create function 'get computer choice' that randomly returns R P or S

function getComputerChoice() { 
    let choice = Math.random() * 100;
    console.log(choice)
    if (choice <= 33) {
        return 'rock';
    } else if (choice > 33 && choice < 67) {
        return 'paper';
    } else {
        return 'scissors'
    }

}
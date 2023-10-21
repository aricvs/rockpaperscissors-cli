function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1)
    let computerChoice

    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }

    return computerChoice
}


function getPlayerChoice() {
    let playerChoice

    while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
        playerChoice = prompt("Make your play: rock, paper or scissors?");
        playerChoice = playerChoice.toLowerCase();
    }
    
    return playerChoice
}


function playRound(playerSelection, computerSelection) {
    const drawResult = `Draw!`;
    const lossResult = `You lose, ${computerSelection} beats ${playerSelection}!`;
    const winResult = `You win, ${playerSelection} beats ${computerSelection}!`;

    if (playerSelection === computerSelection ) {
        return drawResult
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return lossResult
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return winResult
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return lossResult
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return winResult
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return lossResult
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return winResult
    }
}

getPlayerChoice()
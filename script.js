function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3 + 1)
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    const drawResult = `Draw!`;
    const lossResult = `You lose! ${computerSelection} beats ${playerSelection}`;
    const winResult = `You win! ${playerSelection} beats ${computerSelection}`;

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

console.log(playRound('rock', getComputerChoice()))
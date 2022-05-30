function generateRandomNumber() {
    return Math.floor(Math.random() * 3 + 1)
}

function computerPlay() {
    switch (generateRandomNumber()) {
        case 1:
            return 'rock';
        case 2: 
            return 'paper';
        case 3: 
            return 'scissors'
    }
}

let playerWins = 0;

function decideWinner(playerSelection , computerSelection) {
    let youWin = false;

    
    if (playerSelection == computerSelection) {
        return "That's a tie!"
    }
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'rock')) {
            playerWins++;
            youWin = true;
        }
    
    paintResult(playerSelection, computerSelection, playerWins);
}

function paintResult(playerSelection, computerSelection, playerWins) {
    const container = document.querySelector("#result")
    const playResult = document.createElement("p");
    const resultString = playerWins ? "You win!" : "You lose!";
    playResult.innerHTML = `You: <img src="./assets/${playerSelection}.svg"> - Computer: <img src="./assets/${computerSelection}.svg" class="flipped"> - ${resultString}`;
    container.appendChild(playResult)
}

console.log(`You won ${playerWins} times`);

const optionButtons = document.querySelectorAll("div.icons img");
optionButtons.forEach(e => {
    e.addEventListener('click', function(e) {
        const selection = e.target.getAttribute("data-option")
        decideWinner(selection, computerPlay());
    })
})





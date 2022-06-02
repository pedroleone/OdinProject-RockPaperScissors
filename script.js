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
let numPlays = 0;
let computerWins = 0;

function decideWinner(playerSelection , computerSelection) {
    numPlays++;
    let result = "You lose!";

    
    if (playerSelection == computerSelection) {
        result = "That's a tie!"
    } else {
        if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'paper') || 
            (playerSelection == 'paper' && computerSelection == 'rock')) {
                playerWins++;
                result = "You won!"
            } else {
                computerWins++;
                result = "You lost!"
            }
    }
    
    paintResult(playerSelection, computerSelection, result);
}

function paintResult(playerSelection, computerSelection, result) {
    const container = document.querySelector("#result");
    const playResult = document.createElement("p");
    playResult.innerHTML = `You: <img src="./assets/${playerSelection}.svg"> - Computer: <img src="./assets/${computerSelection}.svg" class="flipped"> - ${result}`;
    container.appendChild(playResult);
    
}

function endGame() {
    const annoucement = document.createElement("p");
    let annoucementeMessage;
    if (playerWins === computerWins) {
        annoucementeMessage = "That's a tie! Incredible!"
    }  
    if (playerWins > 2) {
        annoucementeMessage = "You won!"  
    } else {
        annoucementeMessage = "You lost!"
    }

    annoucement.innerHTML = `Game finished! ${annoucementeMessage} Select an option to begin again`;

    const container = document.querySelector("#result");
    container.appendChild(annoucement);

}

function resetGame() {
    numPlays = 0;
    playerWins = 0;
    computerWins = 0;
    document.querySelector("#result").innerHTML = "";


}

console.log(`You won ${playerWins} times`);

const optionButtons = document.querySelectorAll("div.icons button");
optionButtons.forEach(e => {
    e.addEventListener('click', function(e) {
        if (numPlays == 5 ) {
            resetGame();
        }
        const selection = this.getAttribute("data-option")
        decideWinner(selection, computerPlay());
        if (numPlays === 5) {
            endGame();
        }

        
    })
})





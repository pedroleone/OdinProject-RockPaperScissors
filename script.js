function generateRandomNumber() {
    return Math.floor(Math.random() * 3 + 1)
}

function computerPlay() {
    switch (generateRandomNumber()) {
        case 1:
            return 'ROCK';
        case 2: 
            return 'PAPER';
        case 3: 
            return 'SCISSORS'
    }
}

function playerSelection() {

}

let playerWins = 0;

function decideWinner(playerSelection , computerSelection) {
    if (playerSelection == computerSelection) {
        return "That's a tie!"
    }
    if ((playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') || 
        (playerSelection == 'PAPER' && computerSelection == 'ROCK')) {
            playerWins++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
}

for (let i = 0; i < 5; i++) {
    console.log(decideWinner(playerSelection(), computerPlay()))
}

console.log(`You won ${playerWins} times`);

const optionButtons = document.querySelectorAll("div.icons img");
optionButtons.forEach(e => {
    e.addEventListener('click', function(e) {
        const selection = e.target.getAttribute("data-option")
        console.log(selection);
    })
})





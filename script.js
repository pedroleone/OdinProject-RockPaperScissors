function generateRandomNumber() {
    // Math.floor => retorna o maior inteiro menor ou igual ao numero
    // Math.floor(5.95) => 5
    // Math.floor(5.05) => 5
    // Com números negativos fica estranho
    // Math.floor(-5.05) => 6
    
    // Como o Math.random() retorna num numero entre 0 e 1, 
    // para obter um numero entre 1 e 3 deve-se multiplicar por 3 e em 
    // seguida somar com 1
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
    while (true) {
        let choice = prompt("Choose paper, rock or scissors").toUpperCase();
        if (choice == 'ROCK' || choice == 'PAPER' || choice == 'SCISSORS') {
            return choice;
        } else {
            alert("Please choose a valid choice!");
        }
    }
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
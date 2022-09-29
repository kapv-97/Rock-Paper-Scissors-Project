function getUserChoice (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Not a choice');
    }
};

var getComputerChoice = Math.floor(Math.random() * 3) 
    if (getComputerChoice === 0) {
        console.log('rock');
    } else if (getComputerChoice === 1) {
        console.log('paper');
    } else if (getComputerChoice === 2) {
        console.log('scissors');
    };

function determineWinner (userChoice, computerChoice){
    if (userChoice === computerChoice) {
        return ('It is a tie!');
    };
    if (userChoice === 'rock' && computerChoice === 'paper') {
        return ('Computer wins!');
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return ('You win!');
    } ;
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        return ('You win!');
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return ('Computer wins!');
    };
    if (userChoice === 'scissors' && computerChoice === 'paper') {
        return ('You win!');
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return ('Computer wins!');
    } else if (userChoice === 'bomb') {
        return ('You win!');
    }
};
function playGame(){
    let userChoice = getUserChoice {
        console.log(getUserChoice);
    };
    let computerChoice = getComputerChoice; {
        console.log(getComputerChoice);
    };
    determineWinner (userChoice, computerChoice) {
        console.log(determineWinner);
    }
};
playGame();

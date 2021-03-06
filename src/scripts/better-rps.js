function computerPlay() {
    var choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';  
        default:
            return 'scissors';
    }
}
function playRound(playerSelect, compSelect) {
    var playerSelectLow = playerSelect.toLowerCase();
    if (playerSelectLow == compSelect) {
        return [0, 0, "It's a tie! No one wins..."]
    }
    switch (playerSelectLow) {
        case 'rock': {
            return (compSelect == 'paper' ?
                [0, 1, "You lose! Paper beats Rock"] :
                [1, 0, "You win! Rock beats scissors"]);
        }
        case 'paper': {
            return (compSelect == 'scissors' ?
                [0, 1, "You lose! scissors beats Paper"] :
                [1, 0, "You win! Paper beats Rock"]);
        }
        case 'scissors': {
            return (compSelect == 'rock' ?
                [0, 1, "You lose! Rock beats scissors"] :
                [1, 0, "You win! Scissors beats Paper"]);
        }
        default:{
            return [0, 0, "You entered an invalid answer!"];
        }
    }
}
function winLoose(pScore, cScore) {
    if (pScore == cScore) {
        return "It's a tie!";
    } else if(pScore > cScore) {
        return "You won the match!";
    } else {
        return "You lost the match."
    }
}
let playerScore = 0;
let compScore = 0;
let round = 0;
const btns = document.getElementsByClassName("gamebtn");
function game(playerSelection) {
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    playerScore += result[0];
    compScore += result[1];
    document.getElementById("round").innerHTML
        = `Round ${++round}`;
    document.getElementById("player-score").innerHTML
        = `Player: ${playerScore}<br>Computer: ${compScore}`;
    document.getElementById("winner").innerHTML
        = `Results: ${result[2]}`;
    document.getElementById("selections").innerHTML
        = `You chose '${playerSelection}' and the computer chose '${computerSelection}'.`;
    if (round === 5) {
        for (let i = 0; i < btns.length; i++) {
            btns[i].disabled = true;
        }
        document.getElementById("end").innerHTML
            = `<span id="win-msg">${winLoose(playerScore, compScore)}</span><br><span id="reset-msg">Reset to play again...</span>`;
    }
}
function reset() {
    playerScore = 0;
    compScore = 0;
    round = 0;
    document.getElementById("round").innerHTML
        = `Round 0`;
    document.getElementById("player-score").innerHTML
        = `Score: ${playerScore}`;
    document.getElementById("winner").innerHTML
        = ``;
    document.getElementById("selections").innerHTML
        = ``;
    document.getElementById("end").innerHTML
        = ``;
    for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = false;
    }
}

var add = (function () {
    var counter = 0;
    return function () {
        counter += 1;
        return counter;}
  })();
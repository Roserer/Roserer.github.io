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
                [0, 1, "You loose! Paper beats Rock"] :
                [1, 0, "You win! Rock beats scissors"]);
        }
        case 'paper': {
            return (compSelect == 'scissors' ?
                [0, 1, "You loose! scissors beats Paper"] :
                [1, 0, "You win! Paper beats Rock"]);
        }
        case 'scissors': {
            return (compSelect == 'rock' ?
                [0, 1, "You loose! Rock beats scissors"] :
                [1, 0, "You win! scissors beats Paper"]);
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
            = `End of game... ${winLoose(playerScore, compScore)}`;
    }
}
function reset() {
    playerScore = 0;
    compScore = 0;
    round = 0;
    document.getElementById("round").innerHTML
        = `Click a button to begin the first round...`;
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
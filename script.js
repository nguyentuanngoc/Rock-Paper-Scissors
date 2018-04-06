
let playerPoints = 0;
let playerRounds = 0;
let comPoints = 0;

const start = document.querySelector('.start');
const buttons = document.querySelectorAll('.select');
const choices = document.querySelector('.buttons');
const win = document.querySelector('.win');
const lose = document.querySelector('.lose');
const draw = document.querySelector('.draw');

show("hidden", "hidden", "hidden");
choices.style.visibility = "hidden";

start.addEventListener('click', () => {
    start.style.visibility = "hidden";
    choices.style.visibility = "visible";
});

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.textContent);
    });
});


function show(showWin, showLose, showDraw) {
    win.style.visibility = showWin;
    lose.style.visibility = showLose;
    draw.style.visibility = showDraw;
}

function reset() {
    playerPoints = 0;
    playerRounds = 0;
    comPoints = 0;
    start.style.visibility = "visible";
    choices.style.visibility = "hidden";
    show("hidden", "hidden", "hidden");
}

function computerPlay() {
    let randomNumber = Math.random();
    if (randomNumber < 1/3) return "rock";
    else if (randomNumber < 2/3) return "paper";
    else return "scissors";
}

function playRound(text) {
    let playerChoice;
    if (typeof text === "string") {
        playerChoice = text.toLowerCase();
        let computerChoice = computerPlay();
        if (playerChoice === computerChoice) {
            show("hidden", "hidden", "visible");
        }
        else {
            if (playerChoice === "rock" && computerChoice === "paper") {
                playerRounds += 1;
                comPoints +=1;
                show("hidden", "visible", "hidden");
            }
            else if (playerChoice === "rock" && computerChoice === "scissors") {
                playerPoints += 1;
                playerRounds += 1;
                show("visible", "hidden", "hidden");
            }
            else if (playerChoice === "paper" && computerChoice === "rock") {
                playerPoints += 1;
                playerRounds += 1;
                show("visible", "hidden", "hidden");
            }
            else if (playerChoice === "paper" && computerChoice === "scissors") {
                playerRounds += 1;
                comPoints +=1;
                show("hidden", "visible", "hidden");
            }
            else if (playerChoice === "scissors" && computerChoice === "rock") {
                playerRounds += 1;
                comPoints +=1;
                show("hidden", "visible", "hidden");
            }
            else {
                playerPoints += 1;
                playerRounds += 1;
                show("visible", "hidden", "hidden");
            }
        }
        if (playerPoints === 5 && playerRounds <= 9){
            alert("CONGRAT! YOU WIN!");
            reset();
        }
        if (comPoints === 5 && playerRounds <= 9) {
            alert("YOU LOST. SO BAD LUL!");
            reset();
        }

    }
}
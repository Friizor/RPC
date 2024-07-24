const choices = ["rock", "paper", "scissors"];

const playerChoiceDisplay = document.getElementById("choice_display");

const NpcChoiceDisplay = document.getElementById("NPC_display");

const resultDisplay = document.getElementById("result");

function play(playerChoice) {
    const npcChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === npcChoice) {
        result = "IT'S A TIE!😲"
    }else {
        switch(playerChoice) {
            case "rock":
                result = (npcChoice === "scissors") ? "YOU WIN!🎉" : "YOU LOSE!😢";
                break;
            case "paper": 
                result = (npcChoice === "rock") ? "YOU WIN!🎉" : "YOU LOSE!😢";
                break;
            case "scissors":
                result = (npcChoice === "paper") ? "YOU WIN!🎉" : "YOU LOSE!😢";
                break;
        }
    }

    playerChoiceDisplay.textContent = `PLAYER: ${playerChoice}`;
    NpcChoiceDisplay.textContent = `COMPUTER: ${npcChoice}`;
    resultDisplay.textContent = result;


    resultDisplay.classList.remove("winingText", "losingText");
    switch(result) {
        case "YOU WIN!🎉":
            resultDisplay.classList.add("winingText");
            break;
        case "YOU LOSE!😢":
            resultDisplay.classList.add("losingText");
    }
}
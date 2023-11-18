import { Game } from "./game";

const body = document.querySelector("body");
const startButton = document.querySelector("#start");
let game 

startButton.addEventListener("click", () => {
    game = new Game()
    chooseMode()
})

function clearBody () {
    while (body.hasChildNodes()) {
        body.removeChild(body.firstChild)
    }
}

function chooseMode() {
    clearBody()

    const PlayerVsPlayer = document.createElement("button");
    PlayerVsPlayer.textContent = "Play aganist another Player"
    body.appendChild(PlayerVsPlayer);
    PlayerVsPlayer.addEventListener("click", () => {
        playerOneForm();
    })


    const PlayerVsComputer = document.createElement("button");
    PlayerVsComputer.textContent = "Play against Computer";
    body.appendChild(PlayerVsComputer);
    PlayerVsComputer.addEventListener("click", () => {
        playerVsAIForm();
    })

}

function playerVsAIForm() {
    clearBody()
    const form = document.createElement("form");
    const nameInput = document.createElement("input");
    const button = document.createElement("button");
    body.appendChild(form);
    form.appendChild(nameInput);
    form.appendChild(button);
    button.textContent = "Create Player"
    button.addEventListener("click", () => {
        event.preventDefault()
        game.createPlayerOne(nameInput.value);
        game.createPlayerTwo("Computer")
        console.log(game)
        clearBody()
    })
}

function playerOneForm() {
    clearBody()
    const form = document.createElement("form");
    const nameInput = document.createElement("input");
    const button = document.createElement("button");
    button.textContent = "Create Player"
    body.appendChild(form);
    form.appendChild(nameInput);
    form.appendChild(button);
    button.addEventListener("click", () => {
        event.preventDefault()
        game.createPlayerOne(nameInput.value);
        playerTwoForm()
    })
}

function playerTwoForm() {
    clearBody()
    const form = document.createElement("form");
    const nameInput = document.createElement("input");
    const button = document.createElement("button");
    body.appendChild(form);
    form.appendChild(nameInput);
    form.appendChild(button);
    button.textContent = "Create Player"
    button.addEventListener("click", () => {
        event.preventDefault()
        game.createPlayerTwo(nameInput.value, "human");
        console.log(game)
        clearBody()
    })
}

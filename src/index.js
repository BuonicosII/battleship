import { Game } from "./game";
import './style.css';

const body = document.querySelector("body");
const startButton = document.querySelector("#start");
let game
let shipType
let shipDirection  

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
        game.aiGame = false;
        playerOneForm();
    })


    const PlayerVsComputer = document.createElement("button");
    PlayerVsComputer.textContent = "Play against Computer";
    body.appendChild(PlayerVsComputer);
    PlayerVsComputer.addEventListener("click", () => {
        game.aiGame = true
        playerOneForm();
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
        if (game.aiGame === false) {
            playerTwoForm()
        } else if (game.aiGame === true) {
            game.createPlayerTwo("Computer");
            setupGameboard(game.playerOne.board.board)
        }

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
        setupGameboard(game.playerOne.board.board)
    })
}

function setupGameboard(board) {
    clearBody()
    const gameboard = document.createElement("div");
    gameboard.classList.add("bigGameboard")
    body.appendChild(gameboard);

    for (const coordinates of board) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.dataset.yx = coordinates.coordinates;
        gameboard.appendChild(square);
    }
}
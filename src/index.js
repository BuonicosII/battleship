import { Game } from "./game";
import './style.css';

const body = document.querySelector("body");
const startButton = document.querySelector("#start");
let game
let shipType
let shipLength 
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
            setupGameboard(game.playerOne.fleet, game.playerOne.board)
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
        setupGameboard(game.playerOne.fleet, game.playerOne.board)
    })
}

function setupGameboard(fleet, board) {
    clearBody()
    const gameboard = document.createElement("div");
    gameboard.classList.add("bigGameboard"); 

    const fleetArray = document.createElement("div");

    const buttonVertical = document.createElement("button");
    buttonVertical.textContent = "Vertically";
    buttonVertical.addEventListener("click", () => {
        shipDirection = "vertically";
    });

    const buttonHorizontal = document.createElement("button");
    buttonHorizontal.textContent = "Horizontally";
    buttonHorizontal.addEventListener("click", () => {
        shipDirection = "horizontally";
    })



    body.appendChild(fleetArray);
    body.appendChild(buttonVertical);
    body.appendChild(buttonHorizontal);
    body.appendChild(gameboard);


    for (const ship of fleet) {
        const button = document.createElement("button");
        button.textContent = ship;
        button.addEventListener("click", () => {
            switch (button.textContent) {
                case "Carrier": 
                                shipLength = 5;
                                break;
                case "Battleship":
                                shipLength = 4;
                                break;
                case "Destroyer": 
                                shipLength = 3;
                                break;
                case "Submarine":
                                shipLength = 3;
                                break;
                case "Patrol Boat":
                                shipLength = 2;
                                break; 
            }
            shipType = button.textContent
        })
        fleetArray.appendChild(button)
    }

    for (const coordinates of board.board) {
        const square = document.createElement("div");
        square.dataset.yx = coordinates.coordinates;
        
        if (coordinates.containsShip !== null) {
            square.classList.add("squareWithShip");
        } else {
            square.classList.add("square");
        }
        square.addEventListener("click", () => {
            if (shipType === null || shipType === undefined)  {
                alert("Select Ship First!")
            } else if (shipDirection === null || shipDirection === undefined) {
                alert("Select ship orientation!")
            } else if (!board.checkValidPlacement(shipLength, shipDirection, coordinates.coordinates.slice(0, 1), Number(coordinates.coordinates.slice(1)))) {
                alert("Cannot place ship at these coordinates!")
            } else if (game.playerOne.fleet.length === 1) {
                board.placeShip(shipLength, shipDirection, coordinates.coordinates.slice(0, 1), Number(coordinates.coordinates.slice(1)));
                let placedShipIndex = fleet.indexOf(shipType);
                fleet.splice(placedShipIndex, 1);
                if (game.aiGame === false) {
                    setupGameboard(game.playerTwo.fleet, game.playerTwo.board);
                    shipLength = null
                    shipType = null
                    shipDirection = null
                } else {
                    setUpAiGameboard() //yettobewritten
                    shipLength = null
                    shipType = null
                    shipDirection = null
                    newTurn() //yettobewritten
                }
            } else if (game.playerOne.fleet.length === 0 && game.playerTwo.fleet.length === 1) {  
                board.placeShip(shipLength, shipDirection, coordinates.coordinates.slice(0, 1), Number(coordinates.coordinates.slice(1)));
                let placedShipIndex = fleet.indexOf(shipType);
                fleet.splice(placedShipIndex, 1);
                shipLength = null
                shipType = null
                shipDirection = null
                newTurn() //yettobewritten
            } else {
                board.placeShip(shipLength, shipDirection, coordinates.coordinates.slice(0, 1), Number(coordinates.coordinates.slice(1)));
                let placedShipIndex = fleet.indexOf(shipType);
                fleet.splice(placedShipIndex, 1)
                setupGameboard(fleet, board);
                shipLength = null
                shipType = null
                shipDirection = null
            }
        })
        gameboard.appendChild(square);
    }
}
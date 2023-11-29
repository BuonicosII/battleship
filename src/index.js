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
                    setUpAiGameboard()
                    shipLength = null
                    shipType = null
                    shipDirection = null
                    newTurn()
                }
            } else if (game.playerOne.fleet.length === 0 && game.playerTwo.fleet.length === 1) {  
                board.placeShip(shipLength, shipDirection, coordinates.coordinates.slice(0, 1), Number(coordinates.coordinates.slice(1)));
                let placedShipIndex = fleet.indexOf(shipType);
                fleet.splice(placedShipIndex, 1);
                shipLength = null
                shipType = null
                shipDirection = null
                newTurn()
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


function setUpAiGameboard () {

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

    while (game.playerTwo.fleet.length !== 0) {

        let y = alphabet[Math.floor(Math.random() * (10))];
        let x = Math.floor(Math.random() * (11 - 1) + 1);

        if (Math.floor(Math.random() * 2) % 2 === 0) {
            shipDirection = "vertically"
        } else {
            shipDirection = "horizontally"
        }

        console.log(shipDirection)
        
        let ship = game.playerTwo.fleet[Math.floor(Math.random() * (game.playerTwo.fleet.length))];

        switch (ship) {
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
        

        if (game.playerTwo.board.checkValidPlacement(shipLength, shipDirection, y, x)) {
            game.playerTwo.board.placeShip(shipLength, shipDirection, y, x)
            let placedShipIndex = game.playerTwo.fleet.indexOf(ship);
            game.playerTwo.fleet.splice(placedShipIndex, 1)
            shipLength = null
            shipType = null
            shipDirection = null
        }
    }
    
}

function newTurn() {
    clearBody()
    if (game.aiGame === true) {
        //render gameboard friendly with enemy shots 
        let friendlyGameboard = document.createElement("div");
        friendlyGameboard.classList.add("bigGameboard");
        body.appendChild(friendlyGameboard);

        for (const coordinates of game.currentPlayer.board.board) {
            const square = document.createElement("div");
            
            if (coordinates.containsShip !== null && coordinates.shot === "Shot") {
                square.classList.add("squareWithShipHitFriendly");
            } else if (coordinates.containsShip === null && coordinates.shot === "Shot") {
                square.classList.add("squareHitByEnemy");
            } else if (coordinates.containsShip !== null && coordinates.shot === null) {
                square.classList.add("squareWithShip");
            } else {
                square.classList.add("square");
            }
            friendlyGameboard.appendChild(square)
        }
                
        //render gameboard enemy with friendly shots
        let enemyGameboard = document.createElement("div");
        enemyGameboard.classList.add("bigGameboard");
        body.appendChild(enemyGameboard);

        for (const coordinates of game.opponent.board.board) {
            const square = document.createElement("div");
            
            if (coordinates.containsShip !== null && coordinates.shot === "Shot") {
                square.classList.add("squareWithShipHitEnemy");
            } else if (coordinates.containsShip === null && coordinates.shot === "Shot") {
                square.classList.add("squareHitByFriendly");
            } else {
                square.classList.add("square");
            }
            enemyGameboard.appendChild(square)
            
            //for each square add event listener with anon function with attack function
            square.addEventListener("click", () => {
                const attackAction = game.opponent.board.receiveAttack(coordinates.coordinates.slice(0, 1), Number(coordinates.coordinates.slice(1)));
                if (attackAction === "You already fired at these coordinates!") {
                    alert(attackAction);
                    newTurn()
                } else if (attackAction === "HIT" && game.opponent.board.checkEndGame()) {
                    alert(`HIT! ${game.currentPlayer.name} WON!`)
                } else {
                    alert(attackAction);
                    const aittack = game.opponent.aiMove(game.currentPlayer.board);
                    if (aittack === "HIT" && game.currentPlayer.board.checkEndGame()) {
                        alert(`HIT! ${game.opponent.name} WON!`)
                    } else {
                        alert(aittack);
                        newTurn()
                    }
                } 
            })
        }
    } else {
        //render gameboard friendly with enemy shots 
        let friendlyGameboard = document.createElement("div");
        friendlyGameboard.classList.add("bigGameboard");
        body.appendChild(friendlyGameboard);

        for (const coordinates of game.currentPlayer.board.board) {
            const square = document.createElement("div");
            
            if (coordinates.containsShip !== null && coordinates.shot === "Shot") {
                square.classList.add("squareWithShipHitFriendly");
            } else if (coordinates.containsShip === null && coordinates.shot === "Shot") {
                square.classList.add("squareHitByEnemy");
            } else if (coordinates.containsShip !== null && coordinates.shot === null) {
                square.classList.add("squareWithShip");
            } else {
                square.classList.add("square");
            }
            friendlyGameboard.appendChild(square)
        }
                
        //render gameboard enemy with friendly shots
        let enemyGameboard = document.createElement("div");
        enemyGameboard.classList.add("bigGameboard");
        body.appendChild(enemyGameboard);

        for (const coordinates of game.opponent.board.board) {
            const square = document.createElement("div");
            
            if (coordinates.containsShip !== null && coordinates.shot === "Shot") {
                square.classList.add("squareWithShipHitEnemy");
            } else if (coordinates.containsShip === null && coordinates.shot === "Shot") {
                square.classList.add("squareHitByFriendly");
            } else {
                square.classList.add("square");
            }
            enemyGameboard.appendChild(square)
            
            //for each square add event listener with anon function with attack function
            square.addEventListener("click", () => {
                const attackAction = game.opponent.board.receiveAttack(coordinates.coordinates.slice(0, 1), Number(coordinates.coordinates.slice(1)));
                if (attackAction === "You already fired at these coordinates!") {
                    alert(attackAction);
                    newTurn()
                } else if (attackAction === "HIT" && game.opponent.board.checkEndGame()) {
                    alert(`HIT! ${game.currentPlayer.name} WON!`)
                } else {
                    alert(attackAction);
                    if (game.opponent === game.playerTwo) {
                        game.opponent = game.playerOne
                        game.currentPlayer = game.playerTwo
                    } else {
                        game.opponent = game.playerTwo
                        game.currentPlayer = game.playerOne
                    }
                        newTurn()
                }
                }) 
        }
    }
}


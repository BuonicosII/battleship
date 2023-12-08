import { Game } from "./game";
import './style.css';

const body = document.querySelector("body");
const startButton = document.querySelector("#start");
let game
let shipType
let shipLength 
let shipDirection
let alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

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

    const instructionDiv = document.createElement("div");
    instructionDiv.classList.add("instructionsDiv");
    const instructions = document.createElement("h2");
    instructions.textContent = "Choose game mode!";
    instructionDiv.appendChild(instructions);
    body.appendChild(instructionDiv)

    const PlayerVsPlayer = document.createElement("button");
    PlayerVsPlayer.textContent = "VS Player"
    PlayerVsPlayer.classList.add("interactiveButton")
    body.appendChild(PlayerVsPlayer);
    PlayerVsPlayer.addEventListener("click", () => {
        game.aiGame = false;
        playerOneForm();
    })


    const PlayerVsComputer = document.createElement("button");
    PlayerVsComputer.textContent = "VS Computer";
    PlayerVsComputer.classList.add("interactiveButton")
    body.appendChild(PlayerVsComputer);
    PlayerVsComputer.addEventListener("click", () => {
        game.aiGame = true
        playerOneForm();
    })

}

function playerOneForm() {
    clearBody();

    const instructionDiv = document.createElement("div");
    instructionDiv.classList.add("instructionsDiv");
    const instructions = document.createElement("h2");
    instructions.textContent = "Insert Player One Name";
    instructionDiv.appendChild(instructions);
    body.appendChild(instructionDiv)

    const form = document.createElement("form");
    form.classList.add("centerDiv");
    const nameInput = document.createElement("input");
    nameInput.classList.add("inputClass");
    const button = document.createElement("button");
    button.classList.add("interactiveButton");
    button.textContent = "Create Player";
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
            setupGameboard(game.playerOne.fleet, game.playerOne.board, game.playerOne.name);

        }

    })
}

function playerTwoForm() {
    clearBody();

    const instructionDiv = document.createElement("div");
    instructionDiv.classList.add("instructionsDiv");
    const instructions = document.createElement("h2");
    instructions.textContent = "Insert Player Two Name";
    instructionDiv.appendChild(instructions);
    body.appendChild(instructionDiv)

    const form = document.createElement("form");
    form.classList.add("centerDiv");
    const nameInput = document.createElement("input");
    nameInput.classList.add("inputClass");
    const button = document.createElement("button");
    button.classList.add("interactiveButton");
    body.appendChild(form);
    form.appendChild(nameInput);
    form.appendChild(button);
    button.textContent = "Create Player"
    button.addEventListener("click", () => {
        event.preventDefault()
        game.createPlayerTwo(nameInput.value, "human");
        setupGameboard(game.playerOne.fleet, game.playerOne.board, game.playerOne.name)
    })
}

function setupGameboard(fleet, board, name) {
    clearBody()

    const instructionDiv = document.createElement("div");
    instructionDiv.classList.add("instructionsDiv");
    const instructions = document.createElement("h2");
    instructions.textContent = `${name}, place your ships!`;
    instructionDiv.appendChild(instructions);
    body.appendChild(instructionDiv)

    const gameboard = document.createElement("div");
    gameboard.classList.add("bigGameboard"); 

    const fleetArray = document.createElement("div");
    fleetArray.classList.add("fleetArray");

    const buttonHolder = document.createElement("div");
    buttonHolder.classList.add("centerDiv");

    const buttonVertical = document.createElement("button");
    buttonVertical.textContent = "⬇";
    buttonVertical.classList.add("interactiveButton")
    buttonVertical.addEventListener("click", () => {
        shipDirection = "vertically";
        buttonVertical.classList.add("orientationSelected");
        if (buttonHorizontal.classList.contains("orientationSelected")) {
            buttonHorizontal.classList.remove("orientationSelected");
        }
    });

    const buttonHorizontal = document.createElement("button");
    buttonHorizontal.textContent = "➡";
    buttonHorizontal.classList.add("interactiveButton")
    buttonHorizontal.addEventListener("click", () => {
        shipDirection = "horizontally";
        buttonHorizontal.classList.add("orientationSelected");
        if (buttonVertical.classList.contains("orientationSelected")) {
            buttonVertical.classList.remove("orientationSelected");
        }
    })



    body.appendChild(fleetArray);
    body.appendChild(buttonHolder);
    buttonHolder.appendChild(buttonHorizontal);
    buttonHolder.appendChild(buttonVertical);
    body.appendChild(gameboard);


    for (const ship of fleet) {
        const div = document.createElement("div");
        div.classList.add("flexContainer")
        const shipName = document.createElement("h3");
        shipName.textContent = ship;

        const shipDiv = document.createElement("div");
        switch (ship) {
            case "Carrier": 
                            shipDiv.classList.add("carrier")
                            break;
            case "Battleship":
                            shipDiv.classList.add("battleship")
                            break;
            case "Destroyer": 
                            shipDiv.classList.add("destroyer")
                            break;
            case "Submarine":
                            shipDiv.classList.add("submarine")
                            break;
            case "Patrol Boat":
                            shipDiv.classList.add("patrolBoat")
                            break; 
        }

        div.appendChild(shipDiv);
        div.appendChild(shipName);

        div.addEventListener("click", () => {
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
            shipType = shipName.textContent;
            for (const child of fleetArray.children) {
                if (child.classList.contains("shipSelected")) {
                    child.classList.remove("shipSelected");
                }
            }
            div.classList.add("shipSelected")
        })
        fleetArray.appendChild(div)
    }

    for (const coordinates of board.board) {
        const square = document.createElement("div");
        square.dataset.coordinates = coordinates.coordinates
        square.classList.add("square");
        
        if (coordinates.containsShip !== null) {
            square.classList.add("squareWithShip");
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
                    setupGameboard(game.playerTwo.fleet, game.playerTwo.board, game.playerTwo.name);
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
                setupGameboard(fleet, board, name);
                shipLength = null
                shipType = null
                shipDirection = null
            }
        });
        square.addEventListener("mouseover", () => {

            for (const child of gameboard.children) {
                if (child.classList.contains("placeableShip")) {
                    child.classList.remove("placeableShip")
                }
                if (child.classList.contains("unplaceableShip")) {
                    child.classList.remove("unplaceableShip")
                }
            }

            let x = Number(coordinates.coordinates.slice(1));
            let y = coordinates.coordinates.slice(0, 1);

            if (shipDirection === "horizontally") {

                if (!board.checkValidPlacement(shipLength, shipDirection, y, x)) {
                    for (let i = x; i < (x + shipLength); i++) {
                        let hoveredSquare = document.querySelector(`[data-coordinates="${y}${i}"]`);
                        hoveredSquare.classList.add("unplaceableShip");
                    }
                } else {
                    for (let i = x; i < (x + shipLength); i++) {
                        let hoveredSquare = document.querySelector(`[data-coordinates="${y}${i}"]`);
                        hoveredSquare.classList.add("placeableShip");
                    }
                }


    
            } else if (shipDirection === "vertically") {
    
                const index = alphabetArray.findIndex((letter) => letter === y)

                if (!board.checkValidPlacement(shipLength, shipDirection, y, x)) {
                    for (let i = index; i < (index + shipLength); i++) {
                        let hoveredSquare = document.querySelector(`[data-coordinates="${alphabetArray[i]}${x}"]`)
                        hoveredSquare.classList.add("unplaceableShip");
                    }
                } else {
                    for (let i = index; i < (index + shipLength); i++) {
                        let hoveredSquare = document.querySelector(`[data-coordinates="${alphabetArray[i]}${x}"]`)
                        hoveredSquare.classList.add("placeableShip");
                    }
                }
    

    
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
        let firstDiv = document.createElement("div");
        firstDiv.classList.add("centerDiv")
        body.appendChild(firstDiv);

        let header = document.createElement("h3");
        header.textContent = `Your board`;
        firstDiv.appendChild(header);

        let friendlyGameboard = document.createElement("div");
        friendlyGameboard.classList.add("smallGameboard");
        firstDiv.appendChild(friendlyGameboard);

        for (const coordinates of game.currentPlayer.board.board) {
            const square = document.createElement("div");
            square.classList.add("smallSquare")
            
            if (coordinates.containsShip !== null && coordinates.shot === "Shot") {
                let pin = document.createElement("div")
                pin.classList.add("squareWithShipHitFriendly");
                square.appendChild(pin)
                square.classList.add("squareWithShip")
            } else if (coordinates.containsShip === null && coordinates.shot === "Shot") {
                let pin = document.createElement("div");
                pin.classList.add("squareHitByEnemy")
                square.appendChild(pin);
            } else if (coordinates.containsShip !== null && coordinates.shot === null) {
                square.classList.add("squareWithShip");
            }
            friendlyGameboard.appendChild(square)
        }
                
        //render gameboard enemy with friendly shots
        let secondDiv = document.createElement("div");
        secondDiv.classList.add("centerDiv")
        body.appendChild(secondDiv);

        let enemyHeader = document.createElement("h2");
        enemyHeader.textContent = `${game.opponent.name}'s board`;
        secondDiv.appendChild(enemyHeader);

        let enemyGameboard = document.createElement("div");
        enemyGameboard.classList.add("bigGameboard");
        secondDiv.appendChild(enemyGameboard);

        for (const coordinates of game.opponent.board.board) {
            const square = document.createElement("div");
            square.classList.add("square");
            
            if (coordinates.containsShip !== null && coordinates.shot === "Shot") {
                let pin = document.createElement("div");
                pin.classList.add("squareWithShipHitEnemy")
                square.appendChild(pin);
            } else if (coordinates.containsShip === null && coordinates.shot === "Shot") {
                let pin = document.createElement("div")
                pin.classList.add("squareHitByFriendly");
                square.appendChild(pin);
            }
            enemyGameboard.appendChild(square)
            
            //for each square add event listener with anon function with attack function
            square.addEventListener("click", () => {
                const attackAction = game.opponent.board.receiveAttack(coordinates.coordinates.slice(0, 1), Number(coordinates.coordinates.slice(1)));
                if (attackAction === "You already fired at these coordinates!") {
                    showMessage(attackAction);
                    setTimeout(newTurn, 2000)
                } else if (attackAction === "HIT" && game.opponent.board.checkEndGame()) {
                    showMessage(`HIT! ${game.currentPlayer.name} WON!`)
                } else {
                    showMessage(attackAction);
                    const aittack = game.opponent.aiMove(game.currentPlayer.board);
                    if (aittack === "HIT" && game.currentPlayer.board.checkEndGame()) {
                        showMessage(`HIT! ${game.opponent.name} WON!`)
                    } else {
                        setTimeout(()=> {
                            showMessage(aittack);
                            setTimeout(newTurn, 2000);
                        }, 2000);
                        
                    }
                } 
            })
        }
    } else {
        //render gameboard friendly with enemy shots 
        let firstDiv = document.createElement("div");
        firstDiv.classList.add("centerDiv")
        body.appendChild(firstDiv);

        let header = document.createElement("h3");
        header.textContent = `Your board`;
        firstDiv.appendChild(header);


        let friendlyGameboard = document.createElement("div");
        friendlyGameboard.classList.add("smallGameboard");
        firstDiv.appendChild(friendlyGameboard);

        for (const coordinates of game.currentPlayer.board.board) {
            const square = document.createElement("div");
            square.classList.add("smallSquare")

            if (coordinates.containsShip !== null && coordinates.shot === "Shot") {
                let pin = document.createElement("div")
                pin.classList.add("squareWithShipHitFriendly");
                square.appendChild(pin)
                square.classList.add("squareWithShip")
            } else if (coordinates.containsShip === null && coordinates.shot === "Shot") {
                let pin = document.createElement("div");
                pin.classList.add("squareHitByEnemy")
                square.appendChild(pin);
            } else if (coordinates.containsShip !== null && coordinates.shot === null) {
                square.classList.add("squareWithShip");
            }
            friendlyGameboard.appendChild(square)
        }
                
        //render gameboard enemy with friendly shots
        let secondDiv = document.createElement("div");
        secondDiv.classList.add("centerDiv")
        body.appendChild(secondDiv);

        let enemyHeader = document.createElement("h2");
        enemyHeader.textContent = `${game.opponent.name}'s board`;
        secondDiv.appendChild(enemyHeader);

        let enemyGameboard = document.createElement("div");
        enemyGameboard.classList.add("bigGameboard");
        secondDiv.appendChild(enemyGameboard);

        for (const coordinates of game.opponent.board.board) {
            const square = document.createElement("div");
            square.classList.add("square");
            
            if (coordinates.containsShip !== null && coordinates.shot === "Shot") {
                let pin = document.createElement("div");
                pin.classList.add("squareWithShipHitEnemy")
                square.appendChild(pin);
            } else if (coordinates.containsShip === null && coordinates.shot === "Shot") {
                let pin = document.createElement("div")
                pin.classList.add("squareHitByFriendly");
                square.appendChild(pin);
            }
            enemyGameboard.appendChild(square)
            
            //for each square add event listener with anon function with attack function
            square.addEventListener("click", () => {
                const attackAction = game.opponent.board.receiveAttack(coordinates.coordinates.slice(0, 1), Number(coordinates.coordinates.slice(1)));
                if (attackAction === "You already fired at these coordinates!") {
                    showMessage(attackAction);
                    setTimeout(newTurn, 2000)
                } else if (attackAction === "HIT" && game.opponent.board.checkEndGame()) {
                    showMessage(`HIT! ${game.currentPlayer.name} WON!`)
                } else {
                    showMessage(attackAction);
                    if (game.opponent === game.playerTwo) {
                        game.opponent = game.playerOne
                        game.currentPlayer = game.playerTwo
                    } else {
                        game.opponent = game.playerTwo
                        game.currentPlayer = game.playerOne
                    }
                    setTimeout(phoneHandover, 2000)
                }
                }) 
        }
    }
}

function phoneHandover() {
    let screen = document.createElement("div");
    screen.classList.add("screen");
    body.appendChild(screen);

    let centralDiv = document.createElement("div");
    centralDiv.classList.add("centerDiv");
    screen.appendChild(centralDiv);

    let instructions = document.createElement("h2");
    instructions.textContent = `It's ${game.currentPlayer.name}'s turn. Hand over the phone`;

    let button = document.createElement("button");
    button.classList.add("interactiveButton");
    button.textContent = 'Resume game'
    
    button.addEventListener("click", () => {
        newTurn();
    })

    centralDiv.appendChild(instructions);
    centralDiv.appendChild(button);
}

function showMessage(message) {

    for (const child of body.children) {
        if (child.classList.contains("popupScreen")) {
            body.removeChild(child)
        }
    }

    let screen = document.createElement("div");
    screen.classList.add("popupScreen");
    body.appendChild(screen)

    let popup = document.createElement("div");
    popup.classList.add("centerDiv");
    popup.setAttribute("style", "background-color: white");
    screen.appendChild(popup)

    let messageHeader = document.createElement("h3");
    messageHeader.textContent = message;
    popup.appendChild(messageHeader)
}
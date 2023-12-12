import { Gameboard } from "./gameboard";
let alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

class Player {

    #human

    constructor (name, type) {
        this.name = name
        if (type === "human") {
            this.#human = true;
        } else {
            this.#human = false;
        }
        this.fleet = ["Carrier", "Battleship", "Destroyer", "Submarine", "Patrol Boat"]
        this.board = new Gameboard()
        this.previousHit
    }

    isHuman() {
            return this.#human
    }

    aiMove(enemy) {
        if (this.#human === false) {

            if (this.previousHit !== undefined && this.previousHit.message === "HIT") {

                const rightHit = enemy.board.find(({ coordinates }) => coordinates === `${this.previousHit.coordinates.slice(0, 1)}${Number(this.previousHit.coordinates.slice(1)) + 1}`);
                const leftHit = enemy.board.find(({ coordinates }) => coordinates === `${this.previousHit.coordinates.slice(0, 1)}${Number(this.previousHit.coordinates.slice(1)) - 1}`);
                const downHit = enemy.board.find(({ coordinates }) => coordinates === `${alphabetArray[alphabetArray.findIndex((letter) => letter === this.previousHit.coordinates.slice(0, 1)) - 1]}${this.previousHit.coordinates.slice(1)}`);
                const topHit = enemy.board.find(({ coordinates }) => coordinates === `${alphabetArray[alphabetArray.findIndex((letter) => letter === this.previousHit.coordinates.slice(0, 1)) + 1]}${this.previousHit.coordinates.slice(1)}`);

                if (
                    (rightHit === undefined || rightHit === -1 || rightHit.shot === "Shot" ) &&
                    (leftHit === undefined || leftHit === -1 || leftHit.shot === "Shot" ) &&
                    (downHit === undefined || downHit === -1 || downHit.shot === "Shot" ) &&
                    (topHit === undefined || topHit === -1 || topHit.shot === "Shot" )
                ) {
                    let randomcoordinates = enemy.board[Math.floor(Math.random() * (100))]

                    while (randomcoordinates.shot === "Shot") {
                        randomcoordinates = enemy.board[Math.floor(Math.random() * (100))]
                    }
    
                    const aiAttackAction = enemy.receiveAttack(randomcoordinates.coordinates.slice(0, 1), Number(randomcoordinates.coordinates.slice(1)));

                    if (aiAttackAction === "HIT") {

                        this.previousHit = {
                            message: aiAttackAction,
                            coordinates: randomcoordinates.coordinates
                        }
            
                        return this.previousHit
                    } else {

                        return {

                            message: aiAttackAction,
                            coordinates: randomcoordinates.coordinates
                        }
                    }
                }

                let diceRoll = Math.floor(Math.random() * (5 - 1) + 1)

                let nextHit 

                switch (diceRoll) {
                    case 1: 
                        nextHit = rightHit;
                        break;
                    case 2: 
                        nextHit = leftHit
                        break;
                    case 3:
                        nextHit = downHit;
                        break;
                    case 4: 
                        nextHit = topHit
                        break;
                }

                while (nextHit === undefined || nextHit === -1 || nextHit.shot === "Shot" ) {

                    diceRoll = Math.floor(Math.random() * (5 - 1) + 1)

                    switch (diceRoll) {
                        case 1: 
                            nextHit = rightHit;
                            break;
                        case 2: 
                            nextHit = leftHit
                            break;
                        case 3:
                            nextHit = downHit
                            break;
                        case 4: 
                            nextHit = topHit
                            break;
                    }
                }

                const aiAttackAction = enemy.receiveAttack(nextHit.coordinates.slice(0, 1), Number(nextHit.coordinates.slice(1)));

                if (aiAttackAction === "HIT") {

                    this.previousHit = {
                        message: aiAttackAction,
                        coordinates: nextHit.coordinates
                    }
        
                    return this.previousHit

                } else {

                    return {
                        message: aiAttackAction,
                        coordinates: nextHit.coordinates
                    }
                }


            } else {

                let randomcoordinates = enemy.board[Math.floor(Math.random() * (100))]

                while (randomcoordinates.shot === "Shot") {

                    randomcoordinates = enemy.board[Math.floor(Math.random() * (100))]

                }

                const aiAttackAction = enemy.receiveAttack(randomcoordinates.coordinates.slice(0, 1), Number(randomcoordinates.coordinates.slice(1)));
                
                if (aiAttackAction === "HIT") {

                    this.previousHit = {
                        message: aiAttackAction,
                        coordinates: randomcoordinates.coordinates
                    }
        
                    return this.previousHit
                } else {

                    return {
                        message: aiAttackAction,
                        coordinates: randomcoordinates.coordinates
                    }
                }
            }

        }
    }
}

export { Player }
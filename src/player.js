import { Gameboard } from "./gameboard";

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
    }

    isHuman() {
            return this.#human
        }

    aiMove(enemy) {
        if (this.#human === false) {
            let randomcoordinates = enemy.board[Math.floor(Math.random() * (100))]

            while (randomcoordinates.shot === "Shot") {
                randomcoordinates = enemy.board[Math.floor(Math.random() * (100))]
            }

            return {
                message: enemy.receiveAttack(randomcoordinates.coordinates.slice(0, 1), Number(randomcoordinates.coordinates.slice(1))),
                coordinates: randomcoordinates.coordinates
            }
        }
    }
}

export { Player }
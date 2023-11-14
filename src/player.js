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

            let coordinatesArray = randomcoordinates.coordinates.split('');

            return enemy.receiveAttack(coordinatesArray[0], coordinatesArray[1])
        }
    }

}

export { Player }
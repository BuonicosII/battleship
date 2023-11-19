import { Ship } from "./shipclass";

class Gameboard {

    #alphabetArray 

    constructor () {

        this.board = new Array;
        this.#alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

        for (const letter of this.#alphabetArray) {
            for (let i = 1; i <= 10; i++) {
                let square = { coordinates: `${letter}${i}`, containsShip: null, shot: null }
                this.board.push(square)
            }
        }
    }

    checkValidPlacement(length, direction, y, x) {
        if (direction === "horizontally") {
            if (x + length > 11) {
                return false 
            } else {
                for (let i = x; i < (x + length); i++) {
                    let square = this.board.find(({ coordinates }) => coordinates === `${y}${i}`);
                    if (square.containsShip !== null) {
                        return false
                    }
                }
                return true
            }
        } else if (direction === "vertically") {
            const index = this.#alphabetArray.findIndex((letter) => letter === y)

            if (length + index > 10) {
                return false 
            } else {
                for (let i = index; i < (index + length); i++) {
                    let square = this.board.find(({ coordinates }) => coordinates === `${this.#alphabetArray[i]}${x}`);
                    if (square.containsShip !== null) {
                        return false
                    }
                }
                return true
            }
        }
    }

    placeShip(length, direction, y, x) {
        const ship = new Ship(length);

        if (direction === "horizontally") {

            for (let i = x; i < (x + length); i++) {
                let square = this.board.find(({ coordinates }) => coordinates === `${y}${i}`);
                square.containsShip = ship;
            }

        } else if (direction === "vertically") {

            const index = this.#alphabetArray.findIndex((letter) => letter === y)

            for (let i = index; i < (index + length); i++) {
                let square = this.board.find(({ coordinates }) => coordinates === `${this.#alphabetArray[i]}${x}`);
                square.containsShip = ship;
            }

        }

    }

    receiveAttack(y, x) {
        let square = this.board.find(({ coordinates }) => coordinates === `${y}${x}`);

        if (square.shot === "Shot") {
            return "You already fired at these coordinates!"
        } else if (square.containsShip === null) {
            square.shot = "Shot";
            return "MISS";
        } else {
            square.containsShip.hit();
            square.shot = "Shot";
            return "HIT";
        }
    }

    checkEndGame() {
        for (const square of this.board) {
            if (square.containsShip !== null && square.containsShip.isSunk() === false) {
                return false;
            }
        }

        return true;
    }

}

export { Gameboard }
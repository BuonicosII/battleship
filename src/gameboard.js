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

    placeShip(shipClass, direction, y, x) {
        const ship = new Ship(shipClass);

        if (direction === "horizontally") {

            for (let i = x; i <= (ship.getLength()); i++) {
                let square = this.board.find(({ coordinates }) => coordinates === `${y}${x}`);
                square.containsShip = ship;
            }

        } else if (direction === "vertically") {

            for (let i = this.#alphabetArray.findIndex((letter) => letter === y) ; i <= (ship.getLength()); i++) {
                let square = this.board.find(({ coordinates }) => coordinates === `${this.#alphabetArray[i]}${x}`);
                square.containsShip = ship;
            }

        }

    }

    receiveAttack(y, x) {
        let square = this.board.find(({ coordinates }) => coordinates === `${y}${x}`);

        if (square.containsShip === null) {
            square.shot = "Shot";
            return "MISS"
        } else {
            square.containsShip.hit();
            square.shot = "Shot";
            return "HIT";
        }
    }

}

export { Gameboard }
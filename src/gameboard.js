import { Ship } from "./shipclass";

class Gameboard {

    constructor () {
        const alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

        this.board = new Array;

        for (const letter of alphabetArray) {
            for (let i = 1; i <= 10; i++) {
                let square = { coordinates: `${letter} + ${i}`, containsShip: null, shot: null}
                this.board.push(square)
            }
        }
    }

    placeShip(shipClass, direction, x, y) {
        const ship = new Ship(shipClass);

        if (direction === "horizontally") {
            //set ship horizontally
        }

    }

}

export { Gameboard }
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

}

export { Player }
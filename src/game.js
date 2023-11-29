import { Player } from './player.js'

class Game {

    constructor () {
        this.currentPlayer
        this.opponent
        this.aiGame
    }

    createPlayerOne(name) {
        this.playerOne = new Player(name, "human");
        this.currentPlayer = this.playerOne
    }

    createPlayerTwo(name, type) {
        if (type === "human") {
            this.playerTwo = new Player(name, type);
            this.opponent = this.playerTwo
        } else {
            this.playerTwo = new Player(name)
            this.opponent = this.playerTwo
        }

    }

}

export { Game }
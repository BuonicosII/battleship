import { Player } from './player.js'

class Game {

    constructor () {
        this.currentPlayer
        this.opponent
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

    gameCheckForVictory() {
        return this.opponent.board.checkEndGame()
    }

    attack(y, x) {

        const attackAction = this.opponent.board.receiveAttack(y, x)

        if (attackAction === "You already fired at these coordinates!") {
            return attackAction;
        } else if (attackAction === "HIT" && this.gameCheckForVictory()) {
            return  `HIT! ${this.currentPlayer.name} WON!`
        } else {
            if (this.opponent === this.playerTwo) {
                this.opponent = this.playerOne
                this.currentPlayer = this.playerTwo
            } else {
                this.opponent = this.playerTwo
                this.currentPlayer = this.playerOne
            }
            return attackAction
        }  

    }

    aiAttack() {
        const aittack = this.currentPlayer.aiMove(this.opponent.board);
        if (aittack === "HIT" && this.gameCheckForVictory()) {
            return  `HIT! ${this.currentPlayer.name} WON!`
        } else {
            this.currentPlayer = this.playerOne
            this.opponent = this.playerTwo   
            return aittack
        }
    }

}

export { Game }
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
        if (this.opponent.board.receiveAttack(y, x) === "You already fired at these coordinates!") {
            return this.opponent.board.receiveAttack(y, x);
        } else {
            let attack = this.opponent.board.receiveAttack(y, x);
            if (this.opponent === this.playerTwo) {
                this.opponent = this.playerOne
                this.currentPlayer = this.playerTwo
            } else {
                this.opponent = this.playerTwo
                this.currentPlayer = this.playerOne
            }
            return attack
        }  

    }

    aiAttack() {
        let aittack = this.currentPlayer.aiMove(this.opponent);
        this.currentPlayer = this.playerOne
        this.opponent = this.playerTwo
        return aittack
    }






}
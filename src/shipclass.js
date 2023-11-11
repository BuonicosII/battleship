class Ship {

    #length
    #hits

    constructor (shipclass) {

        switch (shipclass) {

            case "patrol boat":
                this.#length = 2;
                break;
            case "submarine":
                this.#length = 3;
                break;
            case "destroyer":
                this.#length = 3;
                break;
            case "battleship":
                this.#length = 4;
                break;
            case "carrier":
                this.#length = 5;
                break;
        }

        this.#hits = 0;
    }

    isSunk() {
        if (this.#length === this.#hits) {
            return true
        } else return false
    }

    hit() {
        if (this.#hits < this.#length) {
            this.#hits += 1;
        }

    }

    getHits() {
        return this.#hits
    }
    
    getLength() {
        return this.#length
    }


}

export { Ship }
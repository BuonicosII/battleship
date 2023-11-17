class Ship {

    #length
    #hits

    constructor (length) {
        this.#length = length
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
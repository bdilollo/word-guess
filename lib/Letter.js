class Letter {
    constructor (letter, visible) {
        this.letter = letter;
        this.visible = visible;
    
    }

    toString() {
        const letterArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        if (letterArray.includes(this.letter)) {
            // this.visible = false;
            return '_';
        } else {
            // this.visible = true;
            return this.letter;
        }
    }

    guess(char) {
        if (this.letter == char) {
            return true;
        } else {
            return false;
        }
    }
  
    getSolution() {
        return this.letter;
    }
}

module.exports = Letter;

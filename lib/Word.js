const Letter = require("./Letter");

class Word {
    constructor(word) {
        this.lettersArr = word.split('').map(letter => new Letter(letter));

    }
    guessLetter(letter) {
        
    }
}
 

module.exports = Word;

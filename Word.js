var Letter = require("./Letter.js");

var Word = function(word) {
    this.letters = [];
    this.createWordArr = function(word) {
        word.split("").forEach(letter => {
            this.letters.push(new Letter(letter));
        });
    }
    this.createWordArr(word);
    this.getWord = function() {
        var word = "";
        this.letters.forEach(letter => {
            word += letter.getLetter();
            console.log(`word now = ${word}`);
        });
        return word;
    }
    this.guess = function(character) {
        this.letters.forEach(letter => {
            letter.guessLetter();
        });
    }
}

var word = new Word("test");

word.getWord();

module.exports = Word;
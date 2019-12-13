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
            word += letter.getLetter() + " ";
        });
        return word;
    }
    this.guess = function(character) {
        this.letters.forEach(letter => {
            // console.log(`calling guessLetter(): letter = ${character}`);
            letter.guessLetter(character);
        });
    }
}

var word = new Word("test");

word.getWord();

module.exports = Word;
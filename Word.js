var Letter = require("./Letter.js");

var Word = function(word) {
    this.word = word.toUpperCase();
    this.letters = [];
    this.lettersRemaining = false;
    this.createWordArr = function(word) {
        word.split("").forEach(letter => {
            this.letters.push(new Letter(letter));
        });
    }
    this.createWordArr(this.word);
    this.getWord = function() {
        var word = "";
        this.lettersRemaining = false;
        this.letters.forEach(letter => {
            word += letter.getLetter() + " ";
            if(letter.getLetter() === "_") {
                this.lettersRemaining = true;
            }
        });
        return word;
    }
    this.moreLetters = function() {
        return this.lettersRemaining;
    }
    this.guess = function(character) {
        this.letters.forEach(letter => {
            letter.guessLetter(character);
        });
    }
    this.dispStr = `XXXXXXXXXXXXXXXXXXXXXXXXXX`;
    this.startStr = `\nWord:      `;
    this.endStr = `  \n`;

    this.showGame = function(arr, gr) {
        process.stdout.write('\033c'); // Refresh the screen on each turn
        console.log(`\n\n${this.dispStr}${this.dispStr}`);
        if(arr !== undefined){console.log(`REMAINING GUESSES:  ${gr+1}\nGUESSED LETTERS:    ${arr.join(" ").toUpperCase()}\n`);}
        console.log(`${this.startStr}${this.getWord()}${this.endStr}`);
        console.log(`${this.dispStr}${this.dispStr}`);
    }
}

// var word = new Word("test");
// word.getWord();

module.exports = Word;
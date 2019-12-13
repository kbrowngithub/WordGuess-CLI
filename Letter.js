var Letter = function(letter) {
    this.guessed = false;
    this.letter = letter.toUpperCase();
    this.getLetter = function() { return this.guessed ? this.letter : "_"; }
    this.guessLetter = function(guess) {
        guess === this.letter ? this.guessed = true : this.guessed = false;
    }
}

var letter = new Letter("a");
console.log(letter.getLetter());

module.exports = Letter;
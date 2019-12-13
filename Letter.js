var Letter = function(letter) {
    this.guessed = false;
    this.letter = letter;
    this.getLetter = function() { return this.guessed ? this.letter : "_"; }
    this.guessLetter = function(guess) {
        guess === this.letter ? this.guessed = true : this.guessed = false;
    }
}

module.exports = Letter;
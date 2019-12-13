var Letter = function(letter) {
    this.guessed = false;
    this.letter = letter.toUpperCase();
    this.getLetter = function() {return this.letter;}
    this.getLetter = function() { 
        // return this.guessed ? this.letter : "_"; 
        if(this.guessed) {
            return this.letter;
        } else {
            return "_";
        }
    }
    this.guessLetter = function(guess) {
        // console.log(`guessLetter(): guess = ${guess}`);
        // guess === this.letter ? this.guessed = true : this.guessed = false;
        if(guess === this.letter) {
            this.guessed = true;
        }
    }
}

var letter = new Letter("a");
console.log(letter.getLetter());

module.exports = Letter;
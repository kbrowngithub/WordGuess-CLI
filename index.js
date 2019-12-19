var randomWords = require('random-words');
var inquirer = require('inquirer');
var Word = require('./Word.js');

// var word = randomWords().toUpperCase();
// console.log(`Current word is ${word}`);

function play(guesses) {
    currWord.showGame(guessedLetters, guesses);
    inquirer.prompt([
        {
            type: "input",
            name: "guessedLetter",
            message: "\n\n\nType a letter to guess:  ",
            validate: function validateLetter(value) {
                var pass = value.match(/^[A-Za-z]+$/);
                if (pass) {
                    if (guessedLetters.indexOf(value) > -1) {
                        return "You already guessed that letter. (use backspace to enter new letter)";
                    } else {
                        guessedLetters.push(value[0]);
                        return true;
                    }
                }
                return "Must be a character a - z (use backspace to re-enter a valid letter)";
            }
        }
    ]).then(answer => {
        // console.log(`Guessed letter is ${answer.guessedLetter.toUpperCase()}`);
        currWord.guess(answer.guessedLetter.toString().toUpperCase());
        // console.log(`Word Display: ${currWord.getWord()}`);
        currWord.showGame(guessedLetters, guesses);

        // console.log(`Guesses: ${guesses}, More Letters: ${currWord.moreLetters()}`);
        if (guesses >= 1 && currWord.moreLetters()) {
            guesses--;
            play(guesses);
        } else {
            currWord.showGame(guessedLetters, guesses - 1);
            if (guesses >= 1) {
                console.log('****** YOU WON! ******');
            } else {
                console.log(`Out of Guesses. The word was: ${currWord.word}`);
            }
            currWord = new Word(randomWords().toUpperCase());
            guesses = 9;
            guessedLetters = [];
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "playAgain",
                    message: "\n\n\nWould you like to play again?",
                    default: true
                }
            ]).then(answer => {
                if(answer.playAgain) {
                    play(guesses);
                } else {
                    return;
                }
            });
        }
    });
}

var currWord = new Word(randomWords().toUpperCase());
var guesses = 9;
var guessedLetters = [];
play(guesses);
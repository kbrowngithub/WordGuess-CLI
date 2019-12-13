var randomWords = require('random-words');
var inquirer = require('inquirer');
var Word = require('./Word.js');

var word = randomWords().toUpperCase();
console.log(`Current word is ${word}`);

var currWord = new Word(word);
var guesses = 9;

function play(guesses) {
    inquirer.prompt([
        {
            type: "input",
            name: "guessedLetter",
            message: "Type a letter to guess",
            validate: function validateLetter(value) {
                var pass = value.match(/^[A-Za-z]+$/);
                if (pass) { return true; }
                return "Must be a character a - z (use backspace to re-enter a valid character)";
            }
        }
    ]).then(answer => {
        console.log(`Guessed letter is ${answer.guessedLetter.toUpperCase()}`);
        currWord.guess(answer.guessedLetter.toString().toUpperCase());
        console.log(`Word Display: ${currWord.getWord()}`);

        if (guesses > 0) {
            guesses--;
            play(guesses);
        } else {
            console.log('Game Over');
            console.log(`Word Display: ${currWord.getWord()}`);
        }
    });
}

play(guesses);


// inquirer.prompt([
//     {
//         type: "input",
//         name: "guessedLetter",
//         message: "Type a letter to guess",
//         validate: function validateLetter(value) {
//             var pass = value.match(/^[A-Za-z]+$/);
//             if (pass) { return true; }
//             return "Must be a character a - z (use backspace to re-enter a valid character)";
//         }
//     }
// ]).then(function (answer) {
//     console.log(`Guessed letter is ${answer.guessedLetter.toUpperCase()}`);
//     currWord.guess(answer.guessedLetter.toString().toUpperCase());
//     console.log(`Word Display: ${currWord.getWord()}`);
// });
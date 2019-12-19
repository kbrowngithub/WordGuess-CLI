# WordGuess-CLI

### Demo Recording Link: 

https://drive.google.com/file/d/1RnFUuYvhOYfko4LIydMoWCSN9eZc24d5/view


```
Designed and Developed by: Kevin Brown
```

# Project Overview
```
WordGuess-CLI is a Word Guess command-line game built using constructor functions in node.
It receives user input using the Inquirer npm package and random words from the random-words npm
package.

```

# Organizational Overview

### Process Flow
```
    play()
        - Display the already-guessed letters, number of guesses remaining, and either letters or
          underscores for each letter of the current word depending on whether or not the letter has
          been guessed.

        - Each time the user guesses a letter the screen is refreshed with the new game data.

        - Once the user uses all their guesses or correctly guesses all the letters the user is 
          notified as to whether or not they won and, if not a win, the correct word is displayed.
        
        The user is then prompted to play again.
            - If the user opts to play again the game is refreshed with a new word and the number of 
            guesses are reset.
            - If the user opts NOT to play again the game exits.

```

### Technologies Used in this application

```
Technology Requirements:
    1. Data Sources
        a. random-words npm package

    2. Logic
        a. Javascript
        b. Node.js 
        c. inquirer npm package
    
```

### Implementation

```
User Prompts:
  - All user prompts and sub-prompts were implemented using the Node Inquirer package.

Node Dependencies:
    "inquirer": "^7.0.0",
    "random-words": "^1.1.0"

```

# How to run the app

### Setup

```
1.) clone WordGuess-CLI to your computer (git@github.com:kbrowngithub/WordGuess-CLI.git)

2.) From a terminal cd into the root directory of your WordGuess-CLI instance and run
the command:  npm install
This will install the required node packages.
```

### Execution

```
To execute the WordGuess-CLI app, from a terminal window cd into the root 
directory of the WordGuess-CLI app and type:  
    node index.js

```

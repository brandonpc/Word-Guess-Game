//Let's Make a Game

// Array of words
var lozNamesBank = ["zelda", "link"];

var wins = 0;
var losses = 0;
var guessesLeft = 15;
var lettersGuessed = [];

// the word being built (eg: starts as "_ _ _ _", fills with correct guesses and ends w/ "l i n k")
var blankWord = [];
// (below) used for the word that was picked? may or may not use this
// var currentWordIndex;
var userLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z",
];


document.onkeyup = function (event) {
    var userGuess = event.key;
    // Choose a random word
    var computerChoice = lozNamesBank[Math.floor(Math.random() * lozNamesBank.length)];
    // convert my strings to arrays
    var str = computerChoice.split("")
    // use for loops to find correct letters. create action for each letter.
    // need to replace "String" with a placeholder/each individual string (create a method?)
    for (i = 0; i < (str.length); i++) {
        // now that array is created, normally it would be || for "or"
        // BUT this needs to apply to all strings. 
        if userGuess === str {

        }
    }


    //     if (letters.indexOf(userGuess)) {
    //         if (userGuess === computerChoice) {
    //             wins++;
    //             numGuesses = 9;
    //             guessChoices = [];
    //         }

    //         if (userGuess != computerChoice) {
    //             numGuesses--;
    //             guessChoices.push(userGuess);
    //         }

    //         if (numGuesses === 0) {

    //             numGuesses = 9;
    //             losses++;
    //             guessChoices = [];
    //         }
    //     }
}

// function wordChoice()[
//     for (var i = 0; i < .length; i++) {
//         blankWord[i] = "_";
//     }
// ]

// refresh: functions, methods, properties of strings,
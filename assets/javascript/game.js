//Let's Make a Game

//game displays blank word
// **Global variables**
var lozNamesBank = ["zelda", "link", ];

var wins = 0;
var losses = 0;
var guessesLeft = 15;
var lettersGuessed = [];
// var blankWord = [];


document.onkeyup = function (event) {
    var userGuess = event.key;

    var computerChoice = lozNamesBank[Math.floor(Math.random() * lozNamesBank.length)];

    // are userLetters tied to userGues???
    var userLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
        "r", "s", "t", "u", "v", "w", "x", "y", "z",
    ];

    //convert my strings to arrays, use for loops to find correct letters. create action for each letter.
    // refresh: functions, methods, properties of strings, 
    // need to replace "String" with a placeholder/each individual string (create a method?)
    for (i = 0; string.length; i++) {
        // if userGuess === (letter(s) in word)
        //     guessChoices.push(userGuess); (letter guess logged to guessChoces)
        //     numGuesses--
        //     
    }


    if (letters.indexOf(userGuess)) {
        if (userGuess === computerChoice) {
            wins++;
            numGuesses = 9;
            guessChoices = [];
        }

        if (userGuess != computerGuess) {
            numGuesses--;
            guessChoices.push(userGuess);
        }

        if (numGuesses === 0) {

            numGuesses = 9;
            losses++;
            guessChoices = [];
        }
    }
}

// function wordChoice()[
//     for (var i = 0; i < .length; i++) {
//         blankWord[i] = "_";
//     }
// ]
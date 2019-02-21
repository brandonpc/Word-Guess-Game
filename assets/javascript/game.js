//Let's Make a Game

//game displays blank word

var lozNamesBank["zelda", "link"];
var lozName = lozNamesBank[Math.floor(Math.random() * lozNamesBank.length)];


// **Global variables**
var wins = 0;
var losses = 0;
// var guessesLeft = 15;
// var lettersGuessed = [];
var blankWord = [];


document.onkeyup = function (event) {
    var userGuess = event.key;

    function wordChoice()[
        for (var i = 0; i < .length; i++) {
            blankWord[i] = "_";
        }
    ]

    // if (guessesLeft < 0) {
    //     losses++
    // }

    if (wordChoice === "link" && (userGuess = "l" && "i" && "n" && "k") {
            wins++
        }
    }

    if (wordChoice === "zelda" && (userGuess = "z" && "e" && "l" && "d" && "a") {
            wins++
        }
    }


}

//# of guesses left (15?)

//user types any key
//letter is recorded in "Already guessed"

//if correct, letter appears in word
//else??

//if all letters = word 
//increase wins++
//else losses++
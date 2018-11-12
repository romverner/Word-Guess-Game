// Setting global variables
var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessedLetters = [];

// Function that runs when it detects if key is pressed
document.onkeyup = function(event) {

    // Setting local variables
    var userGuess = event.key;

    // Tracks user keys, determines if letter has been used or is an invalid input.
    console.log(userGuess);
    if (letterArray.includes(userGuess) === true && guessedLetters.includes(userGuess) === false) {
        guessedLetters.push(String(userGuess));
        console.log("You have guessed a new letter.");
    }

    else if (guessedLetters.includes(userGuess) === true) {
        console.log("You've already guessed that letter!");
    }

    else {
        console.log("Please enter a valid letter!");
    };
};
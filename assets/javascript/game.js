// Setting global variables
var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessedLetters = [];

// Function that runs when it detects if key is pressed
document.onkeyup = function(event) {

    // Setting local variables
    var userGuess = event.key;

    // Tracks user keys, determines if letter has been used.
    console.log(userGuess);
    if (letterArray.includes(userGuess) === true && guessedLetters.includes(userGuess) === false) {
        guessedLetters.push(String(userGuess));
        console.log("You have guessed a new letter.");
    }
};
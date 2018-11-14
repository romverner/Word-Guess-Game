// Setting global variables
var wordArray = ['amazing', 'jazz', 'automobile', 'hamster'];
var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessedLetters = [];
var userGuessCount = 0;
var randomWord = "";
var parsedWord = [];
var hiddenWord = [];

// Function that runs when it detects if key is pressed, controls entire game
document.onkeyup = function(event) {

    // Storing key presses
    var userGuess = event.key;

    // Creating other local variables
    var guessedLettersDoc = document.getElementById("user-guesses");

    // Function that randomly chooses a word from wordArray
    function randWord() {
        var localWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        return localWord;
    };

    // Function that parses the letters from randomWord
    function parseWord(word) {
        var localWord = word.split("");
        return localWord;
    }

    // Creating a hidden version of chosen word
    function underWord() {
        var localWord = [];
        while (parsedWord.length > localWord.length) {
            localWord.push("_");
        }
        return localWord;
    };

    // Tracks user keys, determines if letter has been used or is an invalid input
    if (userGuess === '=') {
        randomWord = randWord();
        parsedWord = parseWord(randomWord);
        hiddenWord = underWord();
    }

    else if (letterArray.includes(userGuess) === true && guessedLetters.includes(userGuess) === false && parsedWord.includes(userGuess) === true) {
        guessedLetters.push(String(userGuess));
        guessedLettersDoc.textContent = guessedLetters;
        console.log("Correct!");
    }

    else if (letterArray.includes(userGuess) === true && guessedLetters.includes(userGuess) === false && parsedWord.includes(userGuess) === false) {
        guessedLetters.push(String(userGuess));
        guessedLettersDoc.textContent = guessedLetters;
        console.log("Incorrect!")
    }

    else if (guessedLetters.includes(userGuess) === true) {
        guessedLetters.push(String(userGuess));
        guessedLettersDoc.textContent = guessedLetters;
        console.log("You've already guessed that letter!");
    }

    else {
        console.log("Please enter a valid letter!");
    };

    // Console.logs for troubleshooting
    console.log(randomWord);
    console.log(parsedWord);
    console.log(hiddenWord);
};
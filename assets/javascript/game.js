// Setting global variables
var wordArray = ['richard', 'jeremy', 'james', 'power', 'hammer', 'koenigsegg', 'oliver'];
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
    var hiddenLettersDoc = document.getElementById("hidden-word");
    var guessedLettersDoc = document.getElementById("user-guesses");
    var userInfoDoc = document.getElementById("user-info");

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

    // Checks for winning condition
    function winningCondition(array) {
        var numCount = 0;
        for (i = 0; i < parsedWord.length; i++) {
            if (letterArray.includes(array[i]) === true) {
                numCount += 1;
                if (numCount === parsedWord.length) {
                    return true;
                };
            };
        };
    };

    // If game not over, tracks user keys, determines if letter has been used or is an invalid input
    if (userGuessCount < 7) {
        if (userGuess === '=') {
            randomWord = randWord();
            parsedWord = parseWord(randomWord);
            hiddenWord = underWord();
            hiddenLettersDoc.textContent = hiddenWord;
            guessedLetters = [];
            guessedLettersDoc.textContent = guessedLetters;
            userInfoDoc.textContent = "Guess the word that appears here!";
        }

        else if (winningCondition(hiddenWord) === true) {
            userInfoDoc.textContent = "You Win! Press '=' to try a new word.";
        }

        else if (letterArray.includes(userGuess) === true && guessedLetters.includes(userGuess) === false && parsedWord.includes(userGuess) === true) {
            guessedLetters.push(String(userGuess));
            guessedLettersDoc.textContent = guessedLetters;
            userInfoDoc.textContent = "Correct!";

            // For loop that reveals letters in hiddenWord if correctly guessed
            for (i = 0; i < hiddenWord.length; i++) {
                var location = parsedWord.indexOf(userGuess, i);
                hiddenWord[location] = userGuess;
                hiddenLettersDoc.textContent = hiddenWord;
            };

            if (winningCondition(hiddenWord) === true) {
                userInfoDoc.textContent = "You Win! Press '=' to try a new word.";
            }
        }

        else if (letterArray.includes(userGuess) === true && guessedLetters.includes(userGuess) === false && parsedWord.includes(userGuess) === false) {
            guessedLetters.push(String(userGuess));
            guessedLettersDoc.textContent = guessedLetters;
            userGuessCount += 1;
            
            // Checking number of incorrect user attempts, game over if seven attempts
            if (userGuessCount === 1) {
                userInfoDoc.textContent = "Game Over!";
            }
            userInfoDoc.textContent = "Incorrect!";
        }

        else if (guessedLetters.includes(userGuess) === true) {
            guessedLettersDoc.textContent = guessedLetters;
            userInfoDoc.textContent = "You've already guessed that letter!";
        }

        else {
            userInfoDoc.textContent = "Please enter a valid letter!";
        };
    }

    else {
        userInfoDoc.textContent = ("Game Over! The word was: " + randomWord + ". Try this new word!");
        randomWord = randWord();
        parsedWord = parseWord(randomWord);
        hiddenWord = underWord();
        hiddenLettersDoc.textContent = hiddenWord;
        guessedLetters = [];
        guessedLettersDoc.textContent = guessedLetters;
        userGuessCount = 0;
    };
};
// Setting global variables
var wordArray = ['amazing', 'jazz', 'automobile', 'hamster'];
var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessedLetters = [];
var randomWord = "";

// Function that randomly chooses a word from wordArray
function randWord() {
    var localWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    return localWord;
};

// Sets the first word
randomWord = randWord();

// Function that runs when it detects if key is pressed
document.onkeyup = function(event) {

    // Setting local variables
    var userGuess = event.key;

    // Parsing out letters from randomWord and creating array
    var parsedWord = randomWord.split("");
    var onScreenWord = parsedWord.slice();
    
    // Console logs for troubleshooting
    console.log(parsedWord);
    console.log(userGuess);
    console.log(randomWord);
    console.log(onScreenWord);

    // Tracks user keys, determines if letter has been used or is an invalid input
    if (letterArray.includes(userGuess) === true && guessedLetters.includes(userGuess) === false && parsedWord.includes(userGuess) === true) {
        guessedLetters.push(String(userGuess));
        console.log("Correct!");
    }

    else if (letterArray.includes(userGuess) === true && guessedLetters.includes(userGuess) === false && parsedWord.includes(userGuess) === false) {
        console.log("Incorrect!")
    }

    else if (guessedLetters.includes(userGuess) === true) {
        console.log("You've already guessed that letter!");
    }

    else if (userGuess === '=') {
        randomWord = randWord();
    }

    else {
        console.log("Please enter a valid letter!");
    };
};
// Creates an array that lists out all of the options
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess);

    // If the user picks the same letter that the computer picks the user wins and counts +1.
    // If the user does not pick the computers picks then decrement the guesses.
    // If the user does not pick the correct letters then.
    // User guesses in round = 9.
    // If the user or computer wins or loses, reset and a new guess is picked.
    if (alphabet.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
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
        // Hide the directions
        directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/guesses.
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesText.textContent = "number of guesses: " + numGuesses;
    }
};
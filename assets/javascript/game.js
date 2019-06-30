let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

let wins = 0;
let losses = 0;
let guessLeft;
let guessChoices;

let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let guessText = document.getElementById("guess-text");
let guessSoFarText = document.getElementById("guessSoFar-text");


function newLetter() {
   computerGuess = options[Math.floor(Math.random() * options.length)];
   guessLeft = 9;
   guessChoices = "";
} 

newLetter();

document.onkeyup = function(event) {
    
    let userGuess = event.key;
    guessLeft--;
    guessChoices = guessChoices + userGuess + " "; 

    if (userGuess === computerGuess) {
        wins++;
        newLetter();
    }

    if (guessLeft < 1) {
        losses++;
        newLetter();
    }


winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessText.textContent = "Guesses left: " + guessLeft;
guessSoFarText.textContent = "Your Guesses so far: " + guessChoices;

}

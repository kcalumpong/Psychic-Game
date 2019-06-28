let wins = 0;
let losses = 0;
let guessLeft= 9;
let guessChoices= [];

let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

document.onkeyup = function() {
    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);

let computerGuess = options[Math.floor(Math.random() * options.length)];
    console.log(computerGuess);

guessChoices.push(userGuess); 
    
if ((userGuess==computerGuess)) {
    wins++;
    alert("You win!");
}

else if (guessLeft === 1) {
    wins = 0;
    losses= 0;
    guessLeft= 9;
    alert("Game Over!");
}
else {
    losses++;
    guessLeft--;
    alert("Try again!");
}


let html = "<p>Guess what letter I am thinking of!</p>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left: " + guessLeft + "</p>" +
"<p>Your guesses so far: " + guessChoices.join(", ") +  "</p>";


document.querySelector("#game").innerHTML = html;
}








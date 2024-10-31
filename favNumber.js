// Favorite Number Calculation
let theFavNumber = 19
let guess;

while (true) {
  guess = parseInt(prompt("Guess your favorite number:"));

  if (guess === theFavNumber) {
    console.log("Correct! You guessed your favorite number.");
    break;
  } else if (guess < theFavNumber) {
    console.log("Too low. Try again!");
  } else {
    console.log("Too high. Try again!");
  }
}

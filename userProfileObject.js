// Collect user information
let fullName = prompt("Enter your full name (first and last):");
let age = prompt("Enter your age:");
let favoriteNumber = prompt("Enter your favorite number:");
let favoriteColor = prompt("Enter your favorite color:");

// Create an array to store the user's favorite colors
let favoriteColors = [];

// Use a loop to collect multiple favorite colors
for (let i = 0; i < 3; i++) {
  let newColor = prompt(`Enter color ${i + 1}:`);
  favoriteColors.push(newColor);
}

// Create the userProfile object
let userProfile = {
  fullName: fullName,
  age: parseInt(age), // Convert age to an integer
  favoriteNumber: parseInt(favoriteNumber), // Convert favoriteNumber to an integer
  favoriteColors: favoriteColors
};

// Log the entire object to the console
console.log(userProfile);

// Collect user information
let fullName = prompt("Enter your full name (first and last):");
let age = prompt("Enter your age:");
let favoriteNumber = prompt("Enter your favorite number:");
let favoriteColor = prompt("Enter your favorite color:");

// Log the information to the console
console.log("Full Name:", fullName);
console.log("Age:", age);
console.log("Favorite Number:", favoriteNumber);
console.log("Favorite Color:", favoriteColor);

// Age Categorization
if (age < 5) {
  console.log(`${fullName} is a Toddler.`);
} else if (age >= 5 && age <= 12) {
  console.log(`${fullName} is a Child.`);
} else if (age >= 13 && age <= 19) {
  console.log(`${fullName} is a Teenager.`);
} else if (age >= 20 && age <= 35) {
  console.log(`${fullName} is a Young Adult.`);
} else if (age >= 36 && age <= 60) {
  console.log(`${fullName} is Middle-Aged.`);
} else {
  console.log(`${fullName} is a Senior.`);
}

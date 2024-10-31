// Color Preferences
let favoriteColors = [];

for (let i = 0; i < 3; i++) {
  let newColor = prompt(`Enter color ${i + 1}:`);
  favoriteColors.push(newColor);
  console.log(`Favorite Colors: ${favoriteColors}`);
}

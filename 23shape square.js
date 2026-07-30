const prompt = require("prompt-sync")();
let length = Number(prompt("Enter the length of the square: "));
let area = length * length;
console.log("The area of the square is:", area);
console.log("The perimeter of the square is:", 4 * length);

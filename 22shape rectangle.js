const prompt = require("prompt-sync")();

let radius = Number(prompt("Enter the radius of the rectangle: "));
let length = Number(prompt("Enter the length of the rectangle: "));
let area = length * radius;
console.log("The area of the rectangle is:", area);
console.log("The perimeter of the rectangle is:", 2 * (length + radius));

const prompt = require("prompt-sync")();

const pi = 3.14;
let radius = Number(prompt("Enter the radius of the Circle: "));
let area = pi * radius * radius;
console.log("The area of the circle is:", area);

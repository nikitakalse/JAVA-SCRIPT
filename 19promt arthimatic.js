const prompt = require("prompt-sync")();

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));

console.log("Sum =", a + b);
console.log("Difference =", a - b);
console.log("Product =", a * b);
console.log("Quotient =", a / b);

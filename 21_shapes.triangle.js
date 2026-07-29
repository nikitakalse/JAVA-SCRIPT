const prompt = require('prompt-sync')();

const pi = 3.14;
let radius = Number(prompt("Enter the radius of the Triangle: "));
let area = pi*radius*radius;


console.log(area);
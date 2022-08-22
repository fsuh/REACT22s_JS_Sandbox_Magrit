// calculator for speed as while distance is not zero
let x;
let y;
do {
    x = Number.parseInt(prompt("What is the distance in km?"), 10);
    y = Number.parseFloat(prompt("How long did it take to cover this distance in hours?"), 10);
    speed = (x * y);
} while (!x);
console.log(`Your speed is ${speed} km/h`);


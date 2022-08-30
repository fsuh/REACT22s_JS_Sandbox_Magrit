// calculator for speed as while distance is not zero
/* let x;
let y;
do {
    x = Number.parseInt(prompt("What is the distance in km?"), 10);
    y = Number.parseFloat(prompt("How long did it take to cover this distance in hours?"), 10);
    speed = (x * y);
    console.log(`Your speed is ${speed} km/h`);
} while (x != 0 );*/


// additional options from class

let distance, time;

while (distance != 0) {
  distance = prompt('Enter distance in kilometers');

  if (distance == 0) {
    console.log('distance 0 - game over');
    break;
  }

  time = prompt('Enter time in hours');
  let average = distance / time;
  console.log('average is: ', average);
}
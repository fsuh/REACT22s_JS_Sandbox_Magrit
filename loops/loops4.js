// asking 20 random numbers and printing out the even numbers
/*let ranum = Number.parseInt(prompt("Input a number!"), 10);
for (let counts = 0; counts <= 20; counts += 1) {
    if (ranum % 2 == 0) {
        console.log(ranum);
    }
}*/


//Correction given in class
let even = 0;

for (let counter = 0; counter <5; counter++){
    let input =Number.parseInt(prompt("Input a number!"), 10);
    if (input % 2 == 0) {
        even++;
    }
}
console.log('There was', even, 'even numbers');
// asking 20 random numbers and printing out the even numbers
let ranum = Number.parseInt(prompt("Input a number!"), 10);
for (let counts = 0; counts < 20; counts += 1) {
    ranum = (ranum % 2 == 0);
    console.log(ranum);
}
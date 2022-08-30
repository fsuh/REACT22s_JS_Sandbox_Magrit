/*5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers*/
/*let input;
let sum = 0;
let count = 0;

while (input !=0) {
    input = Number.parseInt(prompt("Enter a number"), 10);
    sum +=input;
    count++;
}
console.log(sum / count - 1);*/

/*6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.*/
/*let sum = 0;
let counter = 0;
let aver = 0;
for (counter = 1; counter <= 5; counter++) {
    let input = Number.parseInt(prompt("Enter a number"), 10);
    sum +=input;
}
 aver= sum /5
 console.log(`There are 5 numbers, their total is ${sum} and their average is ${aver} `)*/


/* 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.*/

/*let input, confirmation;
let sum = 0;
let counter = 0;

while(confirmation != 'n') {
    input = Number.parseInt(prompt('Enter your number'), 10);
    confirmation = prompt('Do you want to continue giving numbers?(y/n)');
    sum += input;
    counter++;
}
console.log(`Average is ${sum / counter}`);*/

/* 8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.*/
/*let min = 0
let input = Number.parseInt(prompt('How many numbers do you want to input?'));
for(let n = 0; n < input; n++) {
    let num = Number.parseInt(prompt('Enter number'), 10);
    if (num >= 0 && min == 0) {
        min = num;
    } else if (num < min) {
        min = num;
    }
}
console.log(min);*/

/* 9. Make a program that asks ten numbers and in the end prints out two biggest numbers.*/
/*let max1 = 0
let max2 = 0
for (count = 0; count < 10; count++) {
    let input = Number.parseInt(prompt('Enter a number'), 10);
    if (input > 0 && max1 == 0 && max2 == 0){
        max1 = input;
        max2 = input;
    } else if (input > max1){
        max2 = max1;
        max1 = input
    }
}
console.log(`The two biggest numbers inputed are ${max1}, ${max2}.`);*/


/* 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.*/

let sum = 0;
let aver = 0;
let input = 0;
let max = 0
let min = 0
for (count=0; count < 5; count++){
    input = Number.parseInt(prompt("Enter a number"), 10);
    sum += input;
    aver = (sum / count -1);
    if (input >= 0 && min == 0 && max == 0 ){
        max = input
        min = input
    } else if (input < min) {
        min = input;
    } else if (input > min) {
        max = input;
    }
}
console.log(`The sum was ${sum}, their average was ${aver}, the maximum number is ${max}, and the minimum number was ${min}`)
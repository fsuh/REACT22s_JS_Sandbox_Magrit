const randoming= () => {
    const a = Number.parseInt(prompt("Give the first number!"), 10);
    const b = Number.parseInt(prompt("Give the second number!"), 10);
    const c = Number.parseInt(prompt("Give the third number!"), 10);

    let sum, mult;

    if (a >= 0 && b >= 0 && c >= 0) {
        mult = a * b * c
        sum = a + b + c
        return console.log(`The sum is ${sum} and the product is ${mult}`);
    } else if (a <= 0 || b <= 0 || c <= 0 ) {
        if (a <=0 && b <=0 && c <=0) {
            return console.log("Only negative numbers were given");
        } else {
            sum = a + b + c;
            return console.log (`The sum is ${sum}`);
        }
        
    } 
};

randoming()

function randoming() {
    const a = Number(prompt("Give the first number!"));
    const b = Number(prompt("Give the second number!"));
    const c = Number(prompt("Give the third number!"));

    if (a >= 0 && b >= 0 && c >= 0) {
        return console.log( "The product is " + a * b * c);
    } else if (a < 0, b < 0, c < 0 ) {
        return console.log("Only negatives numbers were given");
    } else if (a > 0, b > 0, c < 0) {
        return console.log("The sum is " + a + b + c);
    } else if (a > 0, b < 0, c > 0) {
        return console.log("The sum is " + a + b + c);
    } else if (a < 0, b > 0, c > 0) {
        return console.log("The sum is " + a + b + c);
    } 
};

randoming()

function checknum() {
    let num = window.prompt("Give a number!");

    if (num > 0) {
        return console.log("It is positive");
    }  
    
    if (num % 2 == 0) {
        return console.log(num + " is an even number");
    } else {
        return console.log( num + " is an odd number");
    }
};

checknum()

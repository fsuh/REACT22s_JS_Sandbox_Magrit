const checknum = () => {
    const num = Number.parseInt(prompt("Give a number!"), 10)

    if (num >= 0 ) {
        if (num % 2 == 0) {
            return console.log(`${num} is an even number`);
        } else {
            return console.log(`${num} is an odd number`);
        }
    }  else {
        return console.log(`${num} is a negative number`);
    }
}
checknum ();
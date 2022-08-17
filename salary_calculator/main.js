function salary() {
    const hrs = windows.prompt("How many hours per day do you work?");
    const mony = windows.prompt("How much is your salary per hour?");

    if (hrs < 7){
        return("Your salary is " + hrs * mony );
    } else if (hrs == 9){
        return("Your salary is " + 10 * mony );
    } else if (hrs > 9){
        return("Your salary is " + 2 * hrs * mony);
    }
};

salary();
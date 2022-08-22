const salary = () => {
    const hrs = Number.parseInt(prompt("How many hours per day do you work?"), 10);
    const mony = Number.parseInt(prompt("How much is your salary per hour?"), 10);

    if (hrs <= 7){
        return console.log("Your salary is " + (hrs * mony) );
    } else if (hrs > 7 && hrs <= 9){
        return console.log("Your salary is " + (mony*((1.5*hrs) - 3.5))); // with 50% increase in salary after the 7th hour
    } else if (hrs > 9){
        return console.log("Your salary is " + (mony*((2*hrs) - 8))); // with 100% increase in salary after the 9th hour
    }
};

salary();
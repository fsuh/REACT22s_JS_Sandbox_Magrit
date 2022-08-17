const checkage = () => {
    const age = window.prompt('How old are you?');

    if (age < 18) {
        return console.log("You're too young");
    } else if (age < 27) {
        return console.log("You're right age for military service");
    } else if (age < 44) {
        return console.log("You're in reserve");
    } else if ( age < 55) {
        return console.log(" You're in backup reserve");
    } else {
        return console.log("sorry, you're too old!");
    }
};

checkage();

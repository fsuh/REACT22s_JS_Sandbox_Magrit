let age = 20;
prompt(age);
if (age > 18) {
    return("too young");
} else if (age < 27) {
    return("You're right age for military service");
} else if (age < 44) {
    return("You're in reserve");
} else if ( age < 55) {
    return(" You're in backup reserve");
} else {
    return("sorry, you're too old!");
}
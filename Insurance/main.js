const form = document.querySelector('form');
const customerName = document.querySelector('#customerName');
const customerAge = document.querySelector('#age');
const medicHx = document.querySelectorAll('input[name="medic"]');
const habitsHx = document.querySelectorAll('input[name="habit"]');
const results = document.querySelector('#results');


const calculate = (event) => {
    event.preventDefaults();
    let customerNameResult = customerName.value;
    let customerAgeResult = customerAge.value;
    let medicResult = [];
    let habitResult = [];
    let outcome = 0;

    if (customerAgeResult < 18){
        outcome +=500;
    } else if (customerAgeResult >=18 && customerAgeResult <= 25) {
        outcome +=(500 + (0.1 * 500));
    } else if (customerAgeResult >=26 && customerAgeResult <= 35) {
        outcome +=(500 + (0.3 * 500));
    } else if (customerAgeResult >=36 && customerAgeResult <= 45) {
        outcome +=(500 + (0.6 * 500));
    } else if (customerAgeResult >=46 && customerAgeResult <= 55) {
        outcome +=(500 + (1 * 500));
    } else if (customerAgeResult >=56 && customerAgeResult <= 65) {
        outcome +=(500 + (1.5 * 500));
    } else if (customerAgeResult >=66) {
        outcome +=(500 + (2.1 * 500));
    }

    
}
form.addEventListener('submit', calculate);
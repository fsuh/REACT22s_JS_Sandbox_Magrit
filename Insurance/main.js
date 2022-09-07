const form = document.querySelector('form');
const customerName = document.querySelector('#customerName');
const customerAge = document.querySelector('#age');
const medicHx = document.querySelectorAll('input[name="medic"]');
const habitsHx = document.querySelectorAll('input[name="habit"]');
const results = document.querySelector('#results');


const calculate = (event) => {
    event.preventDefault();
    let customerNameResult = customerName.value;
    let customerAgeResult = +customerAge.value;
    let medicResult = [];
    let habitResult = [];
    let outcome = 0;

    if (customerAgeResult <= 17) {outcome += 500;} 
    else if (customerAgeResult >= 18 && customerAgeResult <= 25) {outcome *= 1.1} 
    else if (customerAgeResult >= 26 && customerAgeResult <= 35) {outcome *= 1.3} 
    else if (customerAgeResult >= 36 && customerAgeResult <= 45) {outcome *= 1.6} 
    else if (customerAgeResult >= 46 && customerAgeResult <= 55) {outcome *= 2} 
    else if (customerAgeResult >= 56 && customerAgeResult <= 65) {outcome *= 2.5} 
    else if (customerAgeResult >= 66){outcome *= 3.1;}

    medicHx.forEach((condition) =>{
        if(condition.checked) {
            medicResult.push(condition.value);
        }
    });
    if (medicResult.length === 1){
        outcome *= 1.01;
    } else if (medicResult.length === 2){
        outcome *= 1.02;
    } else if (medicResult.length === 3){
        outcome *= 1.03;
    } else if (medicResult.length === 4){
        outcome *=  1.04;
    }

    habitsHx.forEach((habit) => {
        if(habit.checked){
            habitResult.push(habit.value);
        }
    });
    if(habitResult.includes('excercise') === true){
        outcome *= 0.95;
    } else if (habitResult.length === 1 && habitResult.includes('excercise') === false){
        outcome *= 1.05;
    } else if (habitResult.length === 2  && habitResult.includes('excercise') === false) {
        outcome *= 1.1;
    } else if (habitResult.length === 3  && habitResult.includes('exercise') === false) {
        outcome *= 1.15;
    } else if (habitResult.length === 2  && habitResult.includes('excercise') === true) {
        outcome *= 1.05;
    } else if (habitResult.length === 3  && habitResult.includes('excercise') === true) {
        outcome *= 1.1;
    } else if (habitResult.length === 4  && habitResult.includes('excercise') === true) {
        outcome *= 1.15;
    }

    results.innerHTML = `Thank you <span>${customerNameResult}</span> for the shared information! Based on your age of <span>${customerAgeResult}</span> years, your medical history of <span>${medicResult.join(',')}</span> and habits of <span>${habitResult.join(',')}</span>, your insurance will cost <span>${outcome}</span>€`

    form.reset();

    
}
form.addEventListener('submit', calculate);
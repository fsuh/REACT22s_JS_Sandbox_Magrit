const startButton = document.querySelector('#start');
const endButton = document.querySelector('#end');
const circles = document.querySelectorAll('.circle');
const score = document.querySelector('#display');
const finalScore = document.querySelector('#final_display');
const closeButton = document.querySelector('.btn_close');
const overlay = document.querySelector('.overlay');
let count = 0;
let active = 0;
let timer;
let pace = 1000;
let rounds = 0;

// function to generate a non-repeating random number
const getRndInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => rndomCircle(i));
    
});

// Generating a function of random active circles

const rndomCircle = (i) => {
    if(i !== active) {
        endGame();
    } else {
        count++;
        rounds--;
        score.textContent = count;
        finalScore.textContent = count;
    }
   
}


const startGame = () => {
    if (rounds >= 3){
        return endGame
    }

    let nextActive = pickNew(active);

    circles[nextActive].classList.toggle('active');
    circles[active].classList.remove('active');

    active = nextActive;

    console.log('current active number is', active);

    timer = setTimeout(startGame, pace);
    pace = pace - 10;

    rounds++;

    function pickNew(active) {
        let nextActive = getRndInt(0,3);

        if (nextActive != active) {
            return nextActive
        } else {
            return pickNew(active);
        }
    }
 startButton.style.display = 'none'
 endButton.style.display = 'block'
    
}
const endGame = () => {
    overlay.style.visibility ='visible';
    startButton.style.display = 'block';
    endButton.style.display = 'none';
    clearTimeout(timer);
    
};

const resetGame = () => {
    window.location.reload();
}

startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)
closeButton.addEventListener('click', resetGame)

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
let pace = 1000; // pace of apperance of mosquitoe
let rounds = 0; // game lives
let flag = false; // catching click counts before game begins
let mySound;
let myMusic;


// new object constructor to handle sound objects
class sound {
    constructor(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function () {
            this.sound.play();
        };
        this.stop = function () {
            this.sound.pause();
        };
    }
}


// function to generate a non-repeating random number
const getRndInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

// iterating randomly through each circle
circles.forEach((circle, i) => {
    circle.addEventListener('click', () => rndomCircle(i));
    
    
});

// Generating a function of random active circles

const rndomCircle = (i) => {
    if(i !== active) {
        endGame();
    } else if (flag === true && i === active ){
        count++;
        rounds--;
        score.textContent = count;
        finalScore.textContent = count;
       
    }
   
}

const startGame = () => {
    mySound = new sound('/Speedgame/assets/mosquitoe.mp3')
    flag = true;
    if (rounds >= 3){
        return endGame();
    }
    mySound.play();

    let nextActive = pickNew(active);

    circles[nextActive].classList.toggle('active');
    circles[active].classList.remove('active');


    active = nextActive;

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
    overlay.style.display ='block';
    startButton.style.display = 'block';
    endButton.style.display = 'none';
    clearTimeout(timer);
    
};

const resetGame = () => {
    overlay.style.display ='none';
    mySound.stop();
    window.location.reload();
    
}



startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)
closeButton.addEventListener('click', resetGame)
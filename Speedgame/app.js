const startButton = document.querySelector('#start');
const endButton = document.querySelector('#start');
const circles = document.querySelectorAll('.circle');
const score = document.querySelector('#display');
const activeCircle = document.querySelector('.active')

let count = 0
let active

// getting a random circle make " non active"
function randomCircle() {
    circles.forEach(circle => {
        circle.classList.remove('active')
    })

    // generating random number index for circles and making it active
    let randomHighlight = circles[Math.floor(Math.random()*3)]
    randomHighlight.classList.add('active')
    active = randomHighlight

}

// listening to the clicks of the highlighted circle and counting as we click.
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        if( circle == active){
            count++
            score.textContent = count
        }
    })
    
})

// generating timer for the highlighted circles
function moveActive() { // this will be attached to the start button
    let timerId = null
    timerId = setInterval(randomCircle, 500)
}

startButton.addEventListener('click', moveActive);
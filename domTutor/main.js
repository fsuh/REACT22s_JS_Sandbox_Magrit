const header = document.querySelector('header');
const backButton = document.querySelector('#back_to_top');
const mobButton = document.querySelector('#mob_button');
const nav = document.querySelector('nav');
const modButton = document.querySelector('#modal_btn');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('#.btn_close');
let links = document.querySelectorAll('nav ul li a');


window.onscroll = function (){
    scrollFunction();
};

const scrollFunction = () => {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop >50){
        header.classList.add('bg');
        backButton.style.display = 'block';
    }  else{
        header.classList.remove('bg');
        backButton.style.display = 'none'
    }
};

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};


const mobMenu = () => {
    if(nav.classList.contains('responsive')){
        nav.classList.remove('responsive');
        document.body.style.overflow = '';
    } else {
        nav.classList.add('responsive');
        document.body.style.overflow = 'hidden';
    }
};

for (const link of links) {
    link.addEventListener('click', mobMenu);
}

const modalDisplay = () => {
    overlay.classList.toggle('visible');
    
    
}


backButton.addEventListener('click', getToTop);
mobButton.addEventListener('click', mobMenu);
modButton.addEventListener('click', modalDisplay);
closeButton.addEventListener('click', modalDisplay);
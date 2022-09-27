const form2 = document.querySelector('#data');
const licenseNumber = document.querySelector('#liData');
const maker = document.querySelector('#maker');
const model = document.querySelector('#model');
const owner = document.querySelector('#owner');
const price =document.querySelector('#price');
const color = document.querySelector('#color');
const data = docment.querySelector('#dataDisplay')

const table = document.createElement('table');


const registerCar = (event) => {
    event.preventDefault();
     class Car {
        constructor(licenseNumber, maker, model, owner, price, color) {
            this.licenseNumber = licenseNumber.value;
            this.maker = maker.value;
            this.model = model.value;
            this.owner = owner.value;
            this.price = price.value;
            this.color = color.value;
        }
     }

     let car = [];

}
form2.addEventListener('submit', registerCar)
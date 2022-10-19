//1 Collecting the input from DOM elements
const form2 = document.querySelector('#data');
const license = document.querySelector('#liData');
const maker = document.querySelector('#maker');
const model = document.querySelector('#model');
const owner = document.querySelector('#owner');
const price =document.querySelector('#price');
const color = document.querySelector('#color');
const dataDisplay = document.querySelector('#dataDisplay');
const table =document.querySelector('#carDatabase')

//1.a Storing the car data in an array
let carData = [];
class  Car {
    constructor(license, maker, model, owner, price, color, ){
        this.license = license;
        this.maker = maker;
        this.model = model;
        this.owner = owner;
        this.price = price;
        this.color = color;
    }
}
const registerCar = (event) => {
    event.preventDefault();
    let licenseNum = license.value;
    let makerNum = maker.value;
    let modelNum = model.value;
    let ownerNum = owner.value;
    let priceNum = price.value;
    let colorNum = color.value;

    if(!licenseNum){
        alert('Input missing, Enter Licence Number');
        document.querySelector('#liData').focus();
        return false;
    } else if (!makerNum){
        alert('Input missing, Enter car maker');
        document.querySelector('#maker').focus();
        return false;
    } else if (!modelNum){
        alert('Input missing, Enter car model');
        document.querySelector('#model').focus();
        return false;
    } else if (!ownerNum){
        alert('Input missing, Enter car owner');
        document.querySelector('#owner').focus();
        return false;
    } else if (!priceNum){
        alert('Input missing, Enter car cost');
        document.querySelector('#price').focus();
        return false;
    } else if (!colorNum){
        alert('Input missing, Enter car color');
        document.querySelector('#color').focus();
        return false;
    } else {
        const carInfo = new Car(licenseNum, makerNum, modelNum, ownerNum, priceNum, colorNum);
        carData.push(carInfo)
    }

    // Inserting the carData into the car database table
    
    let table = document.createElement('table');
    let headingRow = document.createElement('tr');
    let tableHeadings = ['Licence', 'Maker', 'Model', 'Owner', 'Price', 'Color'];


    tableHeadings.forEach(heading => {
        let headingText = document.createElement('th');
        let textNode = document.createTextNode(heading);
        headingText.appendChild(textNode);
        headingRow.appendChild(headingText);
    });
    table.appendChild(headingRow);

    carData.forEach(carItem => {
        let newRow = document.createElement('tr');
        Object.values(carItem).forEach(property => {
            let displayCell = document.createElement('td');
            let textNode = document.createTextNode(property);
            displayCell.appendChild(textNode);
            newRow.appendChild(displayCell)
        });
        table.appendChild(newRow);

    });
    dataDisplay.innerHTML='';
    dataDisplay.appendChild(table);
    
        form2.reset();
    

   }
form2.addEventListener('submit', registerCar)

// Collect DOM input for car search
const form1 = document.querySelector('#search');
const searchInput = document.querySelector('#searchCar')
const searchDisplay = document.querySelector('#searchResult')

// construct the car search function

const carSearch = (event) => {
    event.preventDefault();
    let searchText = searchInput.value;
    let searchResult = carData.findIndex(car => car.license === searchText);
    if (searchResult !== -1){
        return searchDisplay.textContent = `${carData[searchResult].owner} owns this car`
    } else {
        return searchDisplay.textContent = `this license number is not registered`
    } 
}
form1.addEventListener('submit', carSearch)

// reset database
const button = document.querySelector('#reset');

const clearDatabase = () =>{
    window.location.reload();
}
button.addEventListener('click',clearDatabase)

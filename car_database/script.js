//1 Collecting the input from DOM elements
const form2 = document.querySelector('#data');
const license = document.querySelector('#liData');
const maker = document.querySelector('#maker');
const model = document.querySelector('#model');
const owner = document.querySelector('#owner');
const price =document.querySelector('#price');
const color = document.querySelector('#color');
const dataDisplay = document.querySelector('#dataDisplay');


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
               //assign data to class constructor...
               const car = new Car
               car.license = licenseNum;car.maker = makerNum; car.model = modelNum; car.owner = ownerNum;
               car.price = priceNum; car.color = priceNum;
               carData.push(car);
            //    data is coming through
               console.log(carData);
    }

    // Inserting the carData into the car database table
    
  
    let headingRow = document.createElement('tr');
    let tableHeadings = ['Licence', 'Maker', 'Model', 'Owner', 'Price', 'Color'];
    let table = document.createElement('table');
    // If array is empty during the initial launch create table
if (carData.length <=1) {
   
    tableHeadings.forEach(heading => {
        let headingText = document.createElement('th');
        let textNode = document.createTextNode(heading);
        headingText.appendChild(textNode);
        headingRow.appendChild(headingText);
    });
    table.appendChild(headingRow);
    dataDisplay.appendChild(table);
}
// table now in html now add a row and data every time submit button is clicked
const table2 =document.querySelector('table')

    let rows = table2.insertRow();
    let cell1 = rows.insertCell();
    let cell2 = rows.insertCell();
    let cell3 = rows.insertCell();
    let cell4 = rows.insertCell();
    let cell5 = rows.insertCell();
    let cell6 = rows.insertCell();
    cell1.innerHTML = licenseNum;
    cell2.innerHTML = makerNum;
    cell3.innerHTML = modelNum;
    cell4.innerHTML = ownerNum;
    cell5.innerHTML = priceNum;
    cell6.innerHTML = priceNum;


    // i had to replace the loop because it was using an array and to do so you have to clear the table and then reset the row then recreate them. first 
    // before allocating values from the loop
    // carData.forEach(carItem => {
    //     let newRow = document.createElement('tr');
    //     Object.values(carItem).forEach(property => {
    //         let displayCell = document.createElement('td');
    //         let textNode = document.createTextNode(property);
    //         displayCell.appendChild(textNode);
    //         newRow.appendChild(displayCell)
    //     });
    //     table.appendChild(newRow);

    // });
   

    /*dataDisplay.innerHTML = ' <table id="carDatabase"><thead><th>Licence</th><th>Maker</th><th>Model</th><th>Owner</th><th>Price</th><th>Color</th></thead><tbody></tbody></table>'
 
  const tableRef = document.querySelector('#carDatabase');
        let newRows = tableRef.insertRow(-1);
        let licenceCell = newRows.insertCell();
        let makerCell = newRows.insertCell();
        let modelCell = newRows.insertCell();
        let ownerCell = newRows.insertCell();
        let priceCell = newRows.insertCell();
        let colorCell = newRows.insertCell();
        licenceCell.innerHTML = licenseNum;
        makerCell.innerHTML = makerNum;
        modelCell.innerHTML = modelNum;
        ownerCell.innerHTML = ownerNum;
        priceCell.innerHTML = priceNum;
        colorCell.innerHTML = colorNum;*/
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

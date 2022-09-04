const form = document.querySelector('form');
const customer = document.querySelector('#customerName');
const size = document.querySelectorAll('[name="pizzaSize"]');
const toppings = document.querySelectorAll('input[type="checkbox"]');
const delivery = document.querySelector('#delivery');
const order = document.querySelector('#order');

const takeOrder = (event) => {
    event.preventDefault();
    let customerName = customer.value;
    let sizeResult = "";
    let toppingsResults = [];
    let deliveryResult = delivery.options[delivery.selectedIndex].value;
    let price = 0;

    size.forEach((item) => {
        if (item.checked) {
            sizeResult = item.value;
        }
    });

    switch (sizeResult) {
        case '2':
            price += 7.5;
            break;
        case '4':
            price += 10.5;
            break;
        case '6':
            price += 12.5;
            break;
        case '8':
            price += 15.5;
            break;
        default:
    }
console.log(sizeResult)
    toppings.forEach((item) =>{
        if (item.checked) {
            toppingsResults.push(item.value);
        }
    });

    if (toppingsResults.length > 4) {
        price += (toppingsResults.length - 4) * 0.5;
    }

    if (deliveryResult == 'home') {
        price += 5;
    }

    /*order.textContent = `Name: ${customerName}, size: ${sizeResult}, Toppings: ${toppingsResults.join(',')} and delivery method is: ${devliveryResult}. Total price is: ${price} €`;*/

    order.innerHTML = `Thank you for the order, <span>${customerName}</span>. You ordered pizza for <span>${sizeResult}</span>.We will add toppings: <span>${toppingsResults.join(',')}</span> and delivery method is: <span>${deliveryResult}</span>. The total price is: <span>${price}</span>£.`;

    order.style['boxShadow'] = '0 0 5px #ffffff';
    order.style['border'] = '1px solid  white';

    form.reset();

};

form.addEventListener('submit', takeOrder);
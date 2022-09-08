
const calculate = () => {
    const price  = Number(document.getElementById("price").value);
    const money = +document.querySelector("#money").value;
    const answer = document.querySelector('#answer')

    let text;

    const amount = Math.floor(money/price)

    console.log("price", price, 'money', money, amount);
     /*if (amount > 10) {
        text =`You get about ${amount} litres, good, you can escape now`;
    }  else {
        text = `You get about ${amount} litres, oops, you have to stay here`;
    }*/

    amount >= 10
    ? (text = `You could get about ${amount} liters, good, now you can escape`)
    : (text = `You could get about ${amount} liters, sorry, you have to stay`);

    answer.textContent = text;

};

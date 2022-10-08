const tempConverter = (id, val) => {
    val = parseFloat(val);
    const inputCelcius = document.querySelector('#inputCelcius');
    const inputFarenheit = document.querySelector('#inputFarenheit');
    const inputKelvin = document.querySelector('#inputKelvin');
    if(id == 'inputCelcius') {
        inputFarenheit.value = (val * 1.8 + 32).toFixed(2);
        inputKelvin.value = (val * 1.8 + 32).toFixed(2);
    } 
    else if (id == 'inputKelvin') {

        inputFarenheit.value = ((val - 273.15) * 1.8 + 32).toFixed(2);
        inputCelcius.value = (val - 237.15).toFixed(2);
    }
   else if (id == 'inputFarenheit') {

        inputKelvin.value = ((val - 32) /1.8 + 273.15).toFixed(2);
        inputCelcius.value = ((val - 32)/1.8).toFixed(2);
    }

};


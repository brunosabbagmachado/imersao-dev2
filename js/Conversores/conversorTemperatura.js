function ConverterTemperatura() {
    let valorEmCelsius = parseFloat(document.getElementById("valorTemperatura").value);

    let valorEmKelvin = valorEmCelsius * 273.15;
    let valorEmFahrenheit = (valorEmCelsius * 9 / 5) + 32;

    let elementoValorConvertido = document.getElementById("valor-convertido-temperatura");
    let valorConvertidoEmKelvin = `O resultado em Kelvin é ${valorEmKelvin.toFixed(2)} K`;
    let valorConvertidoEmFahrenheit = `O resultado em Fahrenheit é ${valorEmFahrenheit} °F`;


    elementoValorConvertido.innerHTML = `${valorConvertidoEmKelvin} <br> ${valorConvertidoEmFahrenheit}`;
}
function ConverterDolar() {
  var valorElemento = document.getElementById("valorMoedas");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  console.log("Valor digitado: " + valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5;
  var valorEmEuro = valorEmDolarNumerico * 0.91;
  var valorEmIene = valorEmDolarNumerico * 116.1;
  var valorEmPesoArgentino = valorEmDolarNumerico * 108.77;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertidoEmReal = "O resultado em real é R$ " + valorEmReal;
  var valorConvertidoEmEuro = "O resultado em euro é € " + valorEmEuro;
  var valorConvertidoEmIene = "O resultado em iene é ¥ " + valorEmIene;
  var valorConvertidoEmPesoArgentino = "O resultado em peso argentino é $ " + valorEmPesoArgentino;

  elementoValorConvertido.innerHTML =
    valorConvertidoEmReal +
    "<br>" +
    valorConvertidoEmEuro +
    "<br>" +
    valorConvertidoEmIene +
    "<br>" +
    valorConvertidoEmPesoArgentino;
}

function ConverterAnosLuz() {
    var valorElemento = document.getElementById("valorAnosLuz");
    var valor = valorElemento.value;
    var valorEmQuilometros = parseFloat(valor);
  
    console.log("Valor digitado: " + valorEmQuilometros);
  
    var valorEmAnosLuz = valorEmQuilometros * 0.00000000000010570;

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertidoEmAnosLuz = "O resultado em anos-luz é " + valorEmAnosLuz;
  
    elementoValorConvertido.innerHTML = valorConvertidoEmAnosLuz;
  }

  function ConverterTemperatura() {
    var valorElemento = document.getElementById("valorTemperatura");
    var valor = valorElemento.value;
    var valorEmCelsius = parseFloat(valor);
  
    console.log("Valor digitado: " + valorEmCelsius);
  
    var valorEmKelvin = valorEmCelsius * 273.15;
    var valorEmFahrenheit = (valorEmCelsius * 9/5) + 32;

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertidoEmKelvin = "O resultado em Kelvin é " + valorEmKelvin + " K";
    var valorConvertidoEmFahrenheit = "O resultado em Fahrenheit é " + valorEmFahrenheit + " °F";


    elementoValorConvertido.innerHTML = 
    valorConvertidoEmKelvin +
    "<br>" +
    valorConvertidoEmFahrenheit;
  }
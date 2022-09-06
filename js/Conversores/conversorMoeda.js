function ConverterDolar() {
    var valorEmDolarNumerico = parseFloat(document.getElementById("valorMoedas").value);

    var valorEmReal = valorEmDolarNumerico * 5;
    var valorEmEuro = valorEmDolarNumerico * 0.91;
    var valorEmIene = valorEmDolarNumerico * 116.1;
    var valorEmPesoArgentino = valorEmDolarNumerico * 108.77;

    var elementoValorConvertido = document.getElementById("valor-convertido-moeda");
    var valorConvertidoEmReal = `O resultado em real é R$ ${valorEmReal}`;
    var valorConvertidoEmEuro = `O resultado em euro é € ${valorEmEuro}`;
    var valorConvertidoEmIene = `O resultado em iene é ¥ ${valorEmIene}`;
    var valorConvertidoEmPesoArgentino = `O resultado em peso argentino é $ ${valorEmPesoArgentino}`;

    elementoValorConvertido.innerHTML = `
        ${valorConvertidoEmReal} <br>
        ${valorConvertidoEmEuro} <br> 
        ${valorConvertidoEmIene} <br> 
        ${valorConvertidoEmPesoArgentino}
    `;
}
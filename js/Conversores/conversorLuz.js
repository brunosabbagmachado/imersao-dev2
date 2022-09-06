function ConverterAnosLuz() {
    let valorEmQuilometros = parseFloat(document.getElementById("valorAnosLuz").value);
    
    let valorEmAnosLuz = valorEmQuilometros * 0.00000000000010570;

    let elementoValorConvertido = document.getElementById("valor-convertido-luz");
    let valorConvertidoEmAnosLuz = `O resultado em anos-luz é ${valorEmAnosLuz}`;
  
    elementoValorConvertido.innerHTML = valorConvertidoEmAnosLuz;
  }
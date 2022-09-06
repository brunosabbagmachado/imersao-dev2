let botaoMoeda = document.querySelector('.botao-moeda');
let paginaMoeda = document.querySelector('.conversor-moedas');

let botaoLuz = document.querySelector('.botao-luz');
let paginaLuz = document.querySelector('.conversor-luz');

let botaoTemperatura = document.querySelector('.botao-temperatura');
let paginaTemperatura = document.querySelector('.conversor-temperatura');

botaoMoeda.addEventListener('click', function () {
  botaoMoeda.classList.add('ativa');
  paginaMoeda.classList.remove('esconder');

  botaoLuz.classList.remove('ativa');
  paginaLuz.classList.add('esconder');

  botaoTemperatura.classList.remove('ativa');
  paginaTemperatura.classList.add('esconder');
});

botaoLuz.addEventListener('click', function () {
  botaoMoeda.classList.remove('ativa');
  paginaMoeda.classList.add('esconder');

  botaoLuz.classList.add('ativa');
  paginaLuz.classList.remove('esconder');

  botaoTemperatura.classList.remove('ativa');
  paginaTemperatura.classList.add('esconder');
});

botaoTemperatura.addEventListener('click', function () {
  botaoMoeda.classList.remove('ativa');
  paginaMoeda.classList.add('esconder');

  botaoLuz.classList.remove('ativa');
  paginaLuz.classList.add('esconder');

  botaoTemperatura.classList.add('ativa');
  paginaTemperatura.classList.remove('esconder');
});
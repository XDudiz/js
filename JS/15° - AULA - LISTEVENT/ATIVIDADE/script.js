let x = document.getElementById('valor1')
let y = document.getElementById('valor2')
let area
let resultado = document.getElementById('resultado')
let mostrar = document.getElementById('visor')

resultado.addEventListener('click', aperte)

function aperte(){
    area = (parseInt(x.value) * parseInt(y.value)) /2
    mostrar.innerHTML = area
}
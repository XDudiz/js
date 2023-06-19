let numero1 = document.getElementById("valor1");
let numero2 = document.getElementById("valor3");
let operacao = document.getElementById("valor2");
let resultado = document.getElementById("resultado")

function aperte(){
    switch(operacao.value){
        case "+":
        soma = parseInt(numero1.value) + parseInt(numero2.value)
        resultado.innerHTML = soma
        break
        case "-":
        subtacao = parseInt(numero1.value) - parseInt(numero2.value)
        resultado.innerHTML = subtacao
        break
        case "*":
        multi = parseInt(numero1.value) * parseInt(numero2.value)
        resultado.innerHTML = multi
        break
        case "/":
        div = parseInt(numero1.value) / parseInt(numero2.value)
        resultado.innerHTML = div
        break
        default:
        resultado.innerHTML = "Isso não é um operação matematica"
        break
        
    }
}
function mult(a,b){
    return a*b
}
//Sintaxe da Função é definida com a function palavra-chave, seguinda por um nome,seguido por parênteses().
//Quando o Javascript atinge uma return instruções, a função para de ser executada.
//Se a função foi invocada a partir de uma instrução, O javaScript "retornará" para o executar o código após instrução invocada.

console.clear()

let celsius = document.getElementById("celsius")
let resultado = document.getElementById("resultado")

function toCelsius(){
    return resultado.innerHTML =(celsius.value * 1.8) + 32
}

//crie uma função no qual ultilize parâmetros para descobrir se um valor é par ou impar
console.clear()

function impar(p){
    if (p % 2 == 0) {
        return console.log("par")
    } else{
        return console.log("impar")
    }
} 
console.log(impar(5))

//Escreva uma função que retorne o maior de dois números
console.clear()

function maior(x,y){
    if(x >= y){
        return console.log("Maior")
    }
    else{
        return console.log("Menor")
    }
}

const Maior = (t,u) =>{t>u? console.log(t) : console.log(u)}

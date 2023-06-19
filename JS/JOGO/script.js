let nomeDoJogador = document.getElementById("NomeDoJogador")
let resultado = document.getElementById("resposta")

function apertar(){
    if (nomeDoJogador.value == "") {
        resultado.innerHTML = "Insira um nome!"
    } else {
        resultado.innerHTML = "Olá, " + nomeDoJogador.value + ". vamos jogar!"  
    }
}
var P1 = document.getElementById("p1");
var P2 = document.getElementById("p2");
var P3 = document.getElementById("p3");
var P4 = document.getElementById("p4");
var Resultado = document.getElementById("mostrar");
var media;
let botao = document.getElementById("aperte")
botao.addEventListener('click', apertar)

function apertar(){
    P1.value
    P2.value
    P3.value
    P4.value
    media = (parseInt(P1.value) + parseInt(P2.value) + parseInt(P3.value) + parseInt(P4.value))/4
    if(media >= 7){
        Resultado.innerHTML = ("Sua media foi " + media + " Aprovado")
    }else{
        Resultado.innerHTML = ("Sua media foi " + media + " Reprovado")
    }
}

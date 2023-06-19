let p1 = document.getElementById("n1");
let p2 = document.getElementById("n2");
let p3 = document.getElementById("n3");
let p4 = document.getElementById("n4");
let gerarmedia;
let APROVADO = document.getElementById("resultado");

function media(){
    gerarmedia =(parseInt(p1.value) + parseInt(p2.value) +parseInt(p3.value) +parseInt(p4.value))/4;
    
    if (gerarmedia>=7) {
        APROVADO.innerHTML = ("A sua nota foi " +  gerarmedia + "  Aprovado!")
    } else {
        APROVADO.innerHTML = ("A sua nota foi " +  gerarmedia + "  Reprovado!")
    }
}
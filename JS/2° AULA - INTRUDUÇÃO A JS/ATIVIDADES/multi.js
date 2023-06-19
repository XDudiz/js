var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");
var m4 = document.getElementById("m4");
var multiplicacao;
var MT = document.getElementById("MT");

function boa()
{
    m1.value;
    m2.value;
    m3.value;
    m4.value;
    multiplicacao = parseInt(m1.value)  * parseInt(m2.value) * parseInt(m3.value) * parseInt(m4.value)
    MT.innerHTML = multiplicacao;
}
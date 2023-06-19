let Receber = document.getElementById("ReceberNumero");
let mostrar = document.getElementById("ParOuImpar");

function par()
{
    if (Receber.value % 2 == 0) {
        mostrar.innerHTML = ("O número é par")
    } else {
        mostrar.innerHTML = ("O número é impar")
    }
}
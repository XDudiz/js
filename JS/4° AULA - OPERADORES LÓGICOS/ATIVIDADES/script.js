let R$ = document.getElementById("salario")
let tempo = document.getElementById("anos")

function impostos() {
    if (R$.value >= 3000  && tempo.value >= 5) {
        alert("Você teve um aumento de imposto")
    } else {
        alert("Não você teve um aumento de imposto")
    }
}
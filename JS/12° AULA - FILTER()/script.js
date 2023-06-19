//O método filter() cria um novo array com o resoltado do filtro aplicado pelo método, ou seja, os elementos que "passaram" na condição configurada no filtro.

const idades = [32,33,16,40]
let filtroIdade = idades.filter(idade)
let receber = document.getElementById("demo")

receber.innerHTML = filtroIdade

function idade(idades) 
{
    return idades >= 18
}
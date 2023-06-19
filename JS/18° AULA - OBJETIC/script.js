let car = {
    Modelo : "Fiat",
    ano : 2023,
    cor : "Azul"
}

let eu = {
    Ano : 2005,
    Nome : "Eduardo",
    Escola : "Jóse Lins do Rego",
}

let Aluno = {
    PrimeiroNome: "Eduardo",
    SegundoNome: "Ximenes",
    Idade: 18,
    Altura: 1.85,
    peso: 90,
    fullName: function(){
        return this.PrimeiroNome + " " + this.SegundoNome
    }
}

let a = ["a",2,"b"]

const tarefas = 
[
    {
    id: 1,
    texto: "Levar o lixo para fora",
    completado: true,
    },
    {
    id:2,
    texto: "Fazer miojo",
    completado:true,
    },
    {
        id:3,
        texto: "Dormir",
        completado: false,
    }
]
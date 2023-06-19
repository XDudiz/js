//arrays unidimensional
//podemos criar ass:
const num1 = new Array(30,-1,5,3,121);
const num2 = [-2,40,16,111,333,64];

console.log(num1)
console.log(num2)

console.log(`1° elemento: ${num1[0]}`)
console.log(`1° elemento: ${num1[2]}`)

console.log(num2[1])
console.log("2° Elemento " + num2[2])
console.log(num1[2] + num1[1])
console.clear()

//Arry bidimensionais
const matrix = [
    [`Banana`, `Maça`, `Pêra`],
    [`Laranja`, true, 1],
    [null, `Uva`, -350]
]

console.log(matrix)
console.log(matrix[1])
console.log(matrix[1][1])
console.clear()
let moeda = [`Real`,`Dólar`,`Coroa`,`Peso`]
console.log(moeda)
moeda[1] = "Iene"
console.log(moeda[1])

let matrix2 = 
[
    [1,2,3],
    [4,5,6],
]

console.log(matrix2)
matrix2[1][1]=10;
console.log(matrix2)

//tamanho de arrys
console.clear()
let vator = [0,1,2,3,4]
console.log(vator.length)

//remover e iserir elementos
//pop() <- remove o ultimo item
console.clear()
const frutas = [`Banana`, `Laranja`, `Maçã`, `Manga`]
frutas.pop()
console.log(frutas)

//shitf() <- remove o  primeiro item
frutas.shift()
console.log(frutas)

//push(nome) ,- Inserir no ultimo item um valor
frutas.push("Goiaba")
console.log(frutas)

//unshift(nome) <- Inserir no primeiro item um valor
frutas.unshift('Kiwi')
console.log(frutas)
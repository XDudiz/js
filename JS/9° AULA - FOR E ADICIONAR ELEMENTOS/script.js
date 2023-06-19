let item = document.getElementById("item")

function apertar(){
//criar um elemento
let p = document.createElement("li");
//criar conteúdo
let texto = document.createTextNode(item.value)
//Adicionar um texto no elemento

    p.appendChild(texto)
    //Adicionar no Body
    document.getElementById("lista").appendChild(p)
}
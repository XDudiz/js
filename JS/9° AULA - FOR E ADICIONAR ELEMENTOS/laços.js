let x = document.getElementById("inicio");
let y = document.getElementById("final");

function aperte(){
    while(x.value <= parseInt(y.value))
    {
        let paragrafo = document.createElement("p")
        let texto = document.createTextNode(x.value)
        paragrafo.appendChild(texto)
        document.getElementById("contar").appendChild(paragrafo)
        console.log(x.value)
        x.value++
    }
}
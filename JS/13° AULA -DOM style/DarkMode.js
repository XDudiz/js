let corpo = document.body
let botao = document.getElementById('botao')

function modoDark(){
    corpo.classList.toggle('dark-mode')
    botao.innerHTML = 'Ligth-mode'
}
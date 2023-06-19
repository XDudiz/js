let modal, btn, span
modal = document.getElementById('myModal')
btn = document.getElementById('mybtn')
span = document.getElementById('fechar')

btn.addEventListener('click', abrir)
span.addEventListener('click', fechar)

function abrir(){
    modal.style.display = "block"
}

function fechar(){
    modal.style.display = "none"
}
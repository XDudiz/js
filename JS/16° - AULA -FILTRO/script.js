function apertar(){
    let input, ul, li, a, i, filtro
    input = document.getElementById('myInput')
    ul = document.getElementById('myUl')
    li = ul.getElementsByTagName('li')
    filtro = input.value.toUpperCase() //Transformar as letras em maisculo

    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName('a')[0]
        if(a.innerHTML.toUpperCase().indexOf(filtro) > -1){
            li[i].style.display = ''
        }
        else{
            li[i].style.display = 'none'
        }
    }
}
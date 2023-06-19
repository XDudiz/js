let dia = document.getElementById("dias")
let resultado = document.getElementById("resultado")

function Aperte()
{
    switch(dia.value){
        case "domingo":
            resultado.innerHTML = "É um final de semana"
            break;
            case "segunda":
                resultado.innerHTML = "É um dia útil"
                break;
                case "terça":
                    resultado.innerHTML = "É um dia útil"
                    break
                    case "quarta":
                        resultado.innerHTML = "É um dia útil"
                        break
                        case "quinta":
                            resultado.innerHTML = "É um dia útil"
                            break
                            case "sexta":
                                resultado.innerHTML = "É um dia útil"
                                break
                                default:
                                    resultado.innerHTML = "Isso não é dia um da semana"
                                    break
    }
}
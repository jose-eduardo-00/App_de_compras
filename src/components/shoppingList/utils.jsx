import { baseUrl, methodDelete } from "../../services/services"


function deleteList(id) {
    if (confirm("Quer deletar a lista?")) {
        const url = `${baseUrl}list/${id}`
        methodDelete(url)
        // setTimeout(() => {
        //     window.location.reload()
        // }, 8000);
    } else {
        return
    }
}

function setMounthName(listDate) {
    let mes = listDate.getUTCMonth() + 1
    switch (mes) {
        case 1:
            mes = 'Janeiro'
            break
        case 2:
            mes = 'Fevereiro'
            break
        case 3:
            mes = 'Março'
            break
        case 4:
            mes = 'Abril'
            break
        case 5:
            mes = 'Maio'
            break
        case 6:
            mes = 'Junho'
            break
        case 7:
            mes = 'Julho'
            break
        case 8:
            mes = 'Agosto'
            break
        case 9:
            mes = 'Setembro'
            break
        case 10:
            mes = 'Outubro'
            break
        case 11:
            mes = 'Novembro'
            break
        case 12:
            mes = 'Dezembro'
            break
    }
    return mes
}

export { deleteList, setMounthName }
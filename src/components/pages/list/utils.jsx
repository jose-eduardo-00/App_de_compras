

function setMounth(mes) {
    switch (Number(mes)) {
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

function addTotalValue(id, itensList) {
    let sum = 0

    itensList.map(e => { 
        if (e.list_id === Number(id.id)) {
            sum += (Number(e.price) * e.amount)
            return sum 
        } else {
            return 0
        }
    })
    
    return sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export { setMounth, addTotalValue }
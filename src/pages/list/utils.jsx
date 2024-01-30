
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

export { addTotalValue }
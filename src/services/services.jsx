const baseUrl = "http://localhost:3000/"


async function getList() {
    const url = `${baseUrl}list`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function getItens() {
    const url = `${baseUrl}itens`
    const resposta = await fetch(url)
    return await resposta.json()
}


export { baseUrl, getList, getItens }
const baseUrl = "https://app-compras-api.onrender.com/"


async function getList() {
    const url = `${baseUrl}list`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function getHistoric() {
    const url = `${baseUrl}historic`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function getItens() {
    const url = `${baseUrl}itens`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function getHistoricItens() {
    const url = `${baseUrl}historic_itens`
    const resposta = await fetch(url)
    return await resposta.json()
}

function methodPost(url, body) {
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("content-type", "application/json")
    request.send(JSON.stringify(body))
}

function methodDelete(url) {
    let request = new XMLHttpRequest()
    request.open("DELETE", url, true)
    request.setRequestHeader("content-type", "application/json")
    request.send()
}

export { baseUrl, getList, getHistoric, getItens, getHistoricItens, methodPost, methodDelete }
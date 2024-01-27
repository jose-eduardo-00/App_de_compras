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

export { baseUrl, getList, getItens, methodPost, methodDelete }
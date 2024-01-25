import { baseUrl } from "../../../services/services"

function fazPost(url, body) {
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("content-type", "application/json")
    request.send(JSON.stringify(body))
}


function cadastraIten() {
    event.preventDefault()
    let url = `${baseUrl}itens`
    let list_id = document.getElementById("list_id").value
    let name = document.getElementById("name").value
    let amount = document.getElementById("amount").value
    let price = document.getElementById("price").value

    let body = {
        "list_id": list_id,
        "name": name,
        "amount": amount,
        "price": price
    }

    fazPost(url, body)
}

export { cadastraIten }
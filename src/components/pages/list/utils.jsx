import { baseUrl, methodPost } from "../../../services/services"


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

    methodPost(url, body)
}

export { cadastraIten }
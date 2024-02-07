import { baseUrl, methodPost } from "../../services/services"


function formAddIten() {
    const forms = document.getElementById('form')
    forms.style.display = 'flex' 
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
    
    methodPost(url, body)
    inputClear()
    closeAddIten()
    setTimeout(() => {
        window.location.reload()
    }, 8000)
}


function closeAddIten() {
    const forms = document.getElementById('form')
    forms.style.display = 'none'
}

function inputClear() {
    document.getElementById('name').value = ""
    document.getElementById('amount').value = ""
    document.getElementById('price').value = ""
}

export { formAddIten, cadastraIten, closeAddIten, inputClear }
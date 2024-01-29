import { baseUrl, methodDelete } from "../../services/services"


function deleteIten(id) {
    const url = `${baseUrl}itens/${id}`
    methodDelete(url)
}

export { deleteIten }
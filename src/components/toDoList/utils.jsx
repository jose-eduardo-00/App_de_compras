import { baseUrl, methodPost } from "../../services/services"


function shoppingListAdd() {
    if (confirm("Quer criar a Lista?")) {
        const hoje = new Date()
        const dia = hoje.getUTCDate().toString().padStart(2, '0')
        let mes = (hoje.getUTCMonth() + 1).toString().padStart(2, '0')
        const ano = hoje.getFullYear()
        let url = `${baseUrl}list`
        let creationDate = `${ano}, ${mes}, ${dia}`
        let body = {
            "creation_date": creationDate
        }
        methodPost(url, body)
    } else {
        return
    }
}

export { shoppingListAdd }
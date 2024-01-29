import { formAddIten } from '../addIten/utils'
import './buttonAdd.scss'


const ButtonAdd = (e) => {
    const addShoppingList = e.event

    function btnAdd() {
        if(!e) {
            addShoppingList()
        } else {
            formAddIten()
        }
    }

    return (
        <button className="btn-add" id='add' onClick={btnAdd}>+</button>
    )
}

export { ButtonAdd }
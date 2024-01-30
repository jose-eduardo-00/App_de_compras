import { formAddIten } from '../addIten/utils'
import './buttonAdd.scss'


const ButtonAdd = (e) => {
    const addShoppingList = e.event
    
    const btnAdd = () => {
        if(!e.event) {
            formAddIten()
        } else {
            addShoppingList()
        }
    }

    return (
        <button className="btn-add" id='add' onClick={btnAdd}>+</button>
    )
}

export { ButtonAdd }
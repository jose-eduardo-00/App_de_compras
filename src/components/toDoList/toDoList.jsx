import { ButtonAdd } from '../buttonAdd/buttonAdd'
import { ShoppingList } from '../shoppingList/shoppingList'
import './toDoList.scss'
import './utils.jsx'
import { shoppingListAdd } from './utils.jsx'


const ToDoList = () => {
    return (
        <section className='todolist'>
            <ShoppingList />
            <div className='add'>
                <ButtonAdd event={shoppingListAdd} />
            </div>
        </section>
    )
}

export { ToDoList }
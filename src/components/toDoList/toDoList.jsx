import { ButtonAdd } from '../buttonAdd/buttonAdd'
import { ShoppingList } from '../shoppingList/shoppingList'
import './toDoList.scss'


const ToDoList = () => {
    return (
        <section className='todolist'>
            <ShoppingList />
            <div className='add'>
                <ButtonAdd />
            </div>
        </section>
    )
}

export { ToDoList }
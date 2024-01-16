import { ButtonAdd } from '../buttonAdd/buttonAdd'
import { ShoppingList } from '../shoppingList/shoppingList'
import './toDoList.scss'


const ToDoList = () => {
    return (
        <section className='todolist'>
            <ShoppingList id={1} />
            <ShoppingList id={2} />
            <ShoppingList id={3} />
            <ShoppingList id={4} />
            <div className='add'>
                <ButtonAdd />
            </div>
        </section>
    )
}

export { ToDoList }
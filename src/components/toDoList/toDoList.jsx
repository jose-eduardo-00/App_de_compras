import { ShoppingList } from '../shoppingList/shoppingList'
import './toDoList.scss'


const ToDoList = () => {
    return (
        <section className='todolist'>
            <ShoppingList id={1} />
            <ShoppingList id={2} />
            <ShoppingList id={3} />
            <ShoppingList id={4} />
        </section>
    )
}

export { ToDoList }
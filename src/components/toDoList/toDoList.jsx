import { ButtonAdd } from '../buttonAdd/buttonAdd'
import { HistoricShoppingList } from '../historicShoppingList/historicShoppingList.jsx'
import { ShoppingList } from '../shoppingList/shoppingList'
import './toDoList.scss'
import './utils.jsx'
import { shoppingListAdd } from './utils.jsx'


const ToDoList = (page) => {
    const pages = page.page

    if (pages === "home") {
        return (
            <section className='todolist'>
                <ShoppingList />
                <div className='add'>
                    <ButtonAdd event={shoppingListAdd} />
                </div>
            </section>
        )
    } else if (pages === "historic") {
        return (
            <section className='todolist'>
                <HistoricShoppingList />
            </section>
        )
    }
}

export { ToDoList }
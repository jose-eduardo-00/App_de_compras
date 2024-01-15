import { Link } from 'react-router-dom'
import './shoppingList.scss'


const ShoppingList = (id) => {
    return (
        <Link to={`/list/${id.id}`}>
            <section className="shopping-list">
                <h1>Compras de (Mês da compra)</h1>
                <p>Data da criação da lista</p>
            </section>
        </Link>
    )
}

export { ShoppingList }
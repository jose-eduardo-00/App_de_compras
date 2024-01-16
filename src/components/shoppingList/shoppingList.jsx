import { Link } from 'react-router-dom'
import './shoppingList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const ShoppingList = (id) => {
    return (
        <Link to={`/list/${id.id}`}>
            <section className="shopping-list">
                <div className='infos'>
                    <h1>Compras de (Mês da compra)</h1>
                    <p>Data da criação da lista</p>
                </div>
                <FontAwesomeIcon icon={faTrash} className='trash' />
            </section>
        </Link>
    )
}

export { ShoppingList }
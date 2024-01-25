import { Link } from 'react-router-dom'
import './shoppingList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { getList } from '../../services/services'


const shoppingList = await getList()

const ShoppingList = () => {
    return (
        shoppingList.map((e, index) => {
            const listDate = new Date(e.creation_date)
            const mes = listDate.getUTCMonth() + 1
            const date = listDate.toLocaleDateString('pt-BR', { timeZone: 'UTC', });
            return (
                <Link key={index} to={`/list/${e.id}`}>
                    <section className="shopping-list">
                        <div className='infos'>
                            <h1>Compras de {mes}</h1>
                            <p>Data de criação {date}</p>
                        </div>
                        <FontAwesomeIcon icon={faTrash} className='trash' />
                    </section>
                </Link>
            )
        })
    )
}

export { ShoppingList }
import { Link } from 'react-router-dom'
import { getList } from '../../services/services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteList, setMounthName } from './utils'
import './shoppingList.scss'
import { useEffect, useState } from 'react'


const ShoppingList = () => {

    const [shoppingList, setShoppingList] = useState([])

    useEffect(() => {
        const set = async () => {
            setShoppingList(await getList())
        }
        set()
    }, [])

    return (
        shoppingList.map((e, index) => {
            const listDate = new Date(e.creation_date)
            const mes = setMounthName(listDate)
            const date = listDate.toLocaleDateString('pt-BR', { timeZone: 'UTC', });

            return (
                <section key={index} className="shopping-list">
                    <Link to={`/App_de_compras/list/${e.id}`} className='link'>
                        <div className='infos'>
                            <h1>Compras de {mes}</h1>
                            <p>Data de criação: {date}</p>
                        </div>
                    </Link>
                    <FontAwesomeIcon icon={faTrash} className='trash' onClick={() => deleteList(e.id)} />
                </section>
            )
        })
    )
}

export { ShoppingList }
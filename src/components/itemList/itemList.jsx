import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './itemList.scss'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { getItens } from '../../services/services'


const itensList = await getItens()

const ItemList = () => {
    return (
        itensList.map((e, index) => {
            return (
                <main className="container-list" key={index}>
                    <div className="item">
                        <h1>{e.name}</h1>
                        <div className="value">
                            <h1 className='amount'>Q: {e.amount}</h1>
                            <h1>R$ {e.price}</h1>
                            <FontAwesomeIcon icon={faTrash} className='trash' />
                        </div>
                    </div>
                </main>
            )
        })
    )
}

export { ItemList }
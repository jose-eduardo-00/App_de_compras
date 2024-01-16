import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './itemList.scss'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ItemList = () => {
    return (
        <main className="container-list">
            <div className="item">
                <h1>nome do item</h1>
                <div className="value">
                    <div className='input'>
                        <label htmlFor="amount">Q:</label>
                        <input type='number' placeholder='0' name='amount'></input>
                    </div>
                    <h1>R$ 20,00</h1>
                    <FontAwesomeIcon icon={faTrash} className='trash' />
                </div>
            </div>
        </main>
    )
}

export { ItemList }
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './itemList.scss'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { getHistoricItens, getItens } from '../../services/services'
import { deleteIten } from './utils'


const itensList = await getItens()
const historicItens = await getHistoricItens()

const ItemList = (id) => {
    const idList = id.id.id

    if (!id.id.historic) {
        return (
            itensList.map((e, index) => {
                if (Number(idList) === e.list_id) {
                    return (
                        <main className="container-list" key={index}>
                            <div className="item">
                                <h1>{e.name}</h1>
                                <div className="value">
                                    <h1 className='amount'>Q: {e.amount}</h1>
                                    <h1>R$ {e.price}</h1>
                                    <FontAwesomeIcon icon={faTrash} className='trash' onClick={() => deleteIten(e.id)} />
                                </div>
                            </div>
                        </main>
                    )
                } else {
                    return 
                }
            })
        )
    } else {
        return (
            historicItens.map((e, index) => {
                if (Number(idList) === e.list_id) {
                    return (
                        <main className="container-list" key={index}>
                            <div className="item">
                                <h1>{e.name}</h1>
                                <div className="value">
                                    <h1 className='amount'>Q: {e.amount}</h1>
                                    <h1>R$ {e.price}</h1>
                                </div>
                            </div>
                        </main>
                    )
                } else {
                    return 
                }
            })
        )
    }
}

export { ItemList }
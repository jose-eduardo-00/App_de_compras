import { useParams } from 'react-router-dom'
import { ItemList } from '../../components/itemList/itemList'
import { ButtonAdd } from '../../components/buttonAdd/buttonAdd'
import { AddIten } from '../../components/addIten/addIten'
import { addTotalValue, setMounth } from './utils'
import { useState } from 'react'
import { getItens } from '../../services/services'
import './list.scss'


const itensList = await getItens()

const List = () => {
    const id = useParams()
    const mes = setMounth(id.id)

    const [valorTotal] = useState(addTotalValue(id, itensList))

    return (
        <section className='list'>
            <div className='div-list'>
                <header className="header-list">
                    <h1>Lista de {mes}</h1>
                </header>
                <div className='div-item-list'>
                    <ItemList id={id} />
                    <div className='add'>
                        <ButtonAdd />
                    </div>
                </div>
            </div>
            <AddIten id={id} />
            <footer className="footer-list">
                <h1>Total: {valorTotal}</h1>
            </footer>
        </section>
    )
}

export { List }
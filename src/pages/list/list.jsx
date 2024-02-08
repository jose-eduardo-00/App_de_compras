import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getItens } from '../../services/services'
import { ItemList } from '../../components/itemList/itemList'
import { ButtonAdd } from '../../components/buttonAdd/buttonAdd'
import { AddIten } from '../../components/addIten/addIten'
import { addTotalValue } from './utils'
import './list.scss'


const List = () => {
    const id = useParams()
    const [itensList, setItensList] = useState([])
    const [valorTotal, setValorTotal] = useState(addTotalValue(id, itensList))

    useEffect(() => {
        const set = async () => {
            setItensList(await getItens())
        }
        set()
    }, [])

    useEffect(() => {
        setValorTotal(addTotalValue(id, itensList))
    }, [id, itensList])


    if (!id.historic) {
        return (
            <section className='list'>
                <div className='div-list'>
                    <header className="header-list">
                        <h1>Lista de Compras</h1>
                    </header>
                    <Link to={'/App_de_compras'} className='back-page'>Voltar</Link>
                    <div className='add'>
                        <ButtonAdd />
                    </div>
                    <div className='div-item-list'>
                        <ItemList id={id} />
                    </div>
                </div>
                <AddIten id={id} />
                <footer className="footer-list">
                    <h1>Total: {valorTotal}</h1>
                </footer>
            </section>
        )
    } else {
        return (
            <section className='list'>
                <div className='div-list'>
                    <header className="header-list">
                        <h1>Lista de Compras Histórico</h1>
                    </header>
                    <Link to={'/App_de_compras/historic'} className='back-page'>Voltar</Link>
                    <div className='div-item-list'>
                        <ItemList id={id} />
                    </div>
                </div>
                <footer className="footer-list">
                    <h1>Total: {valorTotal}</h1>
                </footer>
            </section>
        )
    }
}

export { List }
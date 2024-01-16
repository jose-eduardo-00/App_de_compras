import { useParams } from 'react-router-dom'
import { ItemList } from '../../itemList/itemList'
import { ButtonAdd } from '../../buttonAdd/buttonAdd'
import './list.scss'


const List = () => {
    const id = useParams()

    return (
        <section className='list'>
            <div className='div-list'>
                <header className="header-list">
                    <h1>Lista {id.id}</h1>
                </header>
                <div className='div-item-list'>
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <div className='add'>
                        <ButtonAdd />
                    </div>
                </div>
            </div>
            <footer className="footer-list">
                <h1>Total: Valor</h1>
            </footer>
        </section>
    )
}

export { List }
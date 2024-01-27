import { useParams } from 'react-router-dom'
import { ItemList } from '../../itemList/itemList'
import { ButtonAdd } from '../../buttonAdd/buttonAdd'
import './list.scss'
import { cadastraIten } from './utils'
import { AddIten } from '../../addIten/addIten'


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
                    <div className='add'>
                        <ButtonAdd />
                    </div>
                </div>
            </div>
            <AddIten />
            <footer className="footer-list">
                <h1>Total: Valor</h1>
            </footer>
            {/* <form action='http://localhost:3000/itens' method="post">
                <label htmlFor="list_id">List_id</label>
                <input type="text" name='list_id' id='list_id' />
                <label htmlFor="name">name</label>
                <input type="text" name='name' id='name' />
                <label htmlFor="amount">amount</label>
                <input type="number" name='amount' id='amount' />
                <label htmlFor="price">price</label>
                <input type="number" name='price' id='price' />
                <button type='submit'>Enviar</button>
            </form> */}
            <form onSubmit={cadastraIten}>
                <label htmlFor="list_id">List_id</label>
                <input type="text" name='list_id' id='list_id' />
                <label htmlFor="name">name</label>
                <input type="text" name='name' id='name' />
                <label htmlFor="amount">amount</label>
                <input type="number" name='amount' id='amount' />
                <label htmlFor="price">price</label>
                <input type="number" step={0.01} name='price' id='price' />
                <button type='submit'>Enviar</button>
            </form>
        </section>
    )
}

export { List }
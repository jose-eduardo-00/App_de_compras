import { cadastraIten, closeAddIten } from './utils'
import './addIten.scss'


const AddIten = (id) => {
    const idList = id.id.id

    return (
        <section className="form-add-itens" id='form'>
            <form className='form' method='post' onSubmit={cadastraIten}>
                <button className='btn-close' onClick={closeAddIten}>X</button>
                <div className='div-input'>
                    <label htmlFor="list_id">Id da Lista</label>
                    <input type="text" name='list_id' id='list_id' defaultValue={idList} />
                </div>
                <div className='div-input'>
                    <label htmlFor="name" className='label'>Nome</label>
                    <input type="text" name='name' id='name' />
                </div>
                <div className='div-input'>
                    <label htmlFor="amount" className='label'>Quantidade</label>
                    <input type="number" name='amount' id='amount' />
                </div>
                <div className='div-input'>
                    <label htmlFor="price" className='label'>Preço</label>
                    <input type="number" step={0.01} name='price' id='price' />
                </div>
                <button type='submit' className='btn-submit'>Enviar</button>
            </form>
        </section>
    )
}


export { AddIten }
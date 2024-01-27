import './buttonAdd.scss'


const ButtonAdd = (e) => {
    return (
        <button className="btn-add" id='add' onClick={e.event}>+</button>
    )
}

export { ButtonAdd }
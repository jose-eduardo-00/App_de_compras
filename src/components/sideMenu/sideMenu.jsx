import { Link } from 'react-router-dom'
import './sideMenu.scss'


const SideMenu = () => {
    return (
        <aside className='sideMenu'>
            <ul className='options'>
                <Link to='/'>
                    <li><button>Listas</button></li>
                </Link>
                <Link to={'/historic'}>
                    <li><button>Histórico</button></li>
                </Link>
            </ul>
        </aside>
    )
}

export { SideMenu }
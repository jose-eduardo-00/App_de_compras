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
                <Link to={'/createlist'}>
                    <li><button>Criar Lista</button></li>
                </Link>
                <Link to={'/deletelist'}>
                    <li><button>Apagar Lista</button></li>
                </Link>
            </ul>
        </aside>
    )
}

export { SideMenu }
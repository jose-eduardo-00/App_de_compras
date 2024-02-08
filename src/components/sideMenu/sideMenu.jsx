import { Link } from 'react-router-dom'
import './sideMenu.scss'


const SideMenu = (color) => {
    const menu = color.color

    return (
        <aside className='sideMenu'>
            <ul className='options'>
                <Link to='/App_de_compras/'>
                    <li>
                        <button className='btn' style={!menu.historicMenu ? menu.homeMenu : {borderColor: "transparent"} }>
                            Listas
                        </button>
                    </li>
                </Link>
                <Link to={'/App_de_compras/historic'}>
                    <li>
                        <button className='btn' style={!menu.homeMenu ? menu.historicMenu : {borderColor: "transparent"}}>
                            Histórico
                        </button>
                    </li>
                </Link>
            </ul>
        </aside>
    )
}

export { SideMenu }
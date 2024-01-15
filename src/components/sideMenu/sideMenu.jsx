import './sideMenu.scss'


const SideMenu = () => {
    return (
        <aside className='sideMenu'>
            <ul className='options'>
                <li><button>Listas</button></li>
                <li><button>Histórico</button></li>
                <li><button>Criar Lista</button></li>
                <li><button>Apagar Lista</button></li>
            </ul>
        </aside>
    )
}

export { SideMenu }
import { SideMenu } from '../../sideMenu/sideMenu'
import { ToDoList } from '../../toDoList/toDoList'
import './home.scss'


const Home = () => {
    return (
        <main className="home">
            <SideMenu />
            <ToDoList />
        </main>
    )
}

export { Home }
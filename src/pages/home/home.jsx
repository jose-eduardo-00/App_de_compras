import { SideMenu } from "../../components/sideMenu/sideMenu"
import { ToDoList } from "../../components/toDoList/toDoList"
import './home.scss'


const Home = () => {
    return (
        <main className="home">
            <SideMenu />
            <ToDoList page={"home"} />
        </main>
    )
}

export { Home }
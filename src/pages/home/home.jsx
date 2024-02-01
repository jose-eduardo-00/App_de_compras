import { SideMenu } from "../../components/sideMenu/sideMenu"
import { ToDoList } from "../../components/toDoList/toDoList"
import './home.scss'


const Home = () => {

    const menuSelect = {
        homeMenu: { borderColor: "#eeeeee" }
    }

    return (
        <main className="home">
            <SideMenu color={menuSelect} />
            <ToDoList page={"home"} />
        </main>
    )
}

export { Home }